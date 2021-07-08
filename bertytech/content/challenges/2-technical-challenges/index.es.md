---
title: "Desafios técnicos"
id: 2
icon: fal fa-laptop-code
private: true
---

### Implementar redes P2P en dispositivos móbiles

#### Restricciones en plataformas móbiles:

* Las conexiones móviles son más problemáticas:
    * El cruce de NAT es más difícil de lograr
    * Las conexiones son menos estables
    * Las conexiones son generalmente mas lentas con un ping mas alto
    * Los planes de datos tienen cuotas diarias/mensuales limitadas
* Menor potencia de CPU
* Menor cantidad máxima de conexiones de red simultáneas
* Duración limitada de la batería
* Menor cantidad de tiempo de CPU asignado a la aplicación (aplicación en segundo plano)

#### Algunos proyectos que implementan P2P en móbiles

* `Textile.io` es probablemente el proyecto más conocido que crea aplicaciones móviles sobre IPFS ejecutando un nodo completo en dispositivos móviles utilizando gomobile. Ya tienen varias aplicaciones liberadas (incluyendo aplicaciones puramente demo) y un SDK.
* `Jami.net` está usando P2P en dispositivos móviles, se centran en ofrecer un competidor directo de Skype, incluyendo características como llamadas de audio.
* `status.im`: Status pone el poder de Ethereum en el bolsillo del usuario al combinar una app de mensajeria, un monedero criptográfico, y un navegador de Web3.
* `matrix.org`: Matrix le debe su nombre a su capacidad de conectar las plataformas existentes con una matriz de comunicación abierta global. Matrix es más una tienda descentralizada de conversación que un protocolo de mensajería.

#### Cómo lo hace Berty

* `Gomobile-IPFS`: un repositorio creado por Berty Technologies que tiene como objetivo proporcionar paquetes para Android, iOS y React Nativo que permiten ejecutar y usar un nodo IPFS en dispositivos móviles.
* `Berty Protocol`: actualmente estamos diseñando un protocolo que puede ser utilizado por todos en sus proyectos para crear aplicaciones P2P seguras que se ejecuten tanto en la computadora como en el móvil.
* `Berty Messenger`: un ejemplo concreto de una aplicación simple, construida sobre el Protocolo Berty, diseñada pensando en las personas que no son expertas con la tecnología, tratando de acercar el P2P en el móvil a las masas.

### Preservando la Privacidad y Asegurarando la Comunicación en un Entorno Distribuido

#### Limitantes

Asegurarse de que "usted es quien dice ser" es un desafío fundamental en materia de ciberseguridad. En un entorno centralizado, hay una autoridad que puede validar las identidades, firmas, claves de cifrado, etc. En un entorno distribuido, necesitamos encontrar formas de lograr la confianza entre pares (usuarios) sin una autoridad central.

En un sistema distribuido, no podemos asegurarnos del orden correcto de llegada de los mensaje. Esto se convierte en un problema particular con una app de mensajeria sin internet porque los mensajes que se enviaron sin internet podrían no sincronizarse correctamente cuando el dispositivo vuelve a conectarse de nuevo a internet. Esto puede causar problemas, principalmente al encriptar mensajes con algoritmos de Perfect Forward Secrecy que usan claves de cifrado rotatorias.

Los metadatos son necesarios para operar un sistema de mensajería. Sin embargo, podrían ser una fuente importante de información si se recopilaran y analizaran.

#### Similares

* `Signal.org`: el estándar de oro para cualquier entorno centralizado. Berty utiliza muchos de sus algoritmos criptográficos/protocolos, adaptándolos a entornos distribuidos. Ellos trabajan duro para limitar su huella de metadatos tanto como sea posible, pero sus servidores siguen alojados en Google Cloud y están automáticamente sujetos a la Ley de la nube.
* `Messaging Layer Security`: MLS ofrece una alternativa más escalable al protocolo de Signal. Esta solución aún requiere un servidor central para poder funcionar.
* `Olvid.io`: Olvid afirma ser el único servicio de mensajería que también encripta metadatos. Ellos están centralizados y alojan sus servidores en AWS, que también pertenece a la Ley de la Nube.
* `status.im`: Status diseñó Whisper para superar las deficiencias mencionadas arriba y para ser configurable por el usuario final quién debería ser capaz de especificar qué concesiones están dispuestos a hacer entre la duración de la batería y los cargos de datos móviles, la privacidad y la posible fuga de metadatos.

#### Cómo lo hace Berty

* `go-ipfs-log`: ipfs-log - la capa base de órbit-db - es un registro distribuido de mensajes de punto a punto en IPFS usando CRDT para consistencia del orden de mensaje. Esta biblioteca de código abierto tiene la intención de portar de forma totalmente compatible la versión de JavaScript en Go.
* `go-orbit-db`: orbit-db es una base de datos distribuida de punto a punto en IPFS hecha en go-ipfs-log. La mayoría de su código se ha derivado del proyecto orbit-db de JavaScript. Este proyecto tiene la intención de portar de forma totalmente compatible la versión de JavaScript en Go.
* `Berty-Protocol`: el protocolo está utilizando, entre otras cosas, NaCl y Signal Symmetric-ratchet para garantizar la confiabilidad de las identidades en la red y cifrar los mensajes con Perfect Forward Secrecy. Además de buscar una forma de ocultar IPFS pública, estamos intentando reducir al máximo las fugas de metadatos:
    * No se requiere teléfono/email para registrarse
    * Servidores opcionales de replicación con Cero Conocimiento
    * Rotando puntos de encuentro e identificadores de usuarios (peerIDs)
    * Encripción de Metadatos (tanto como sea posible)
    * Generar ruido

### Comunicación sin internet entre diferentes tipos de dispositivos

#### Limitantes
Para lograr una comunicación sin internet (Berty es una aplicación de mensajería sin conexión), hay dos tipos de tecnología que consideramos utilizar:
- Bluetooth de baja energía es una tecnología de bajo consumo, pero solo ofrece un rendimiento limitado (lo suficiente para enviar texto). Es difícil de implementar, especialmente con API Android. Sin embargo, tiene la ventaja de trabajar entre diferentes plataformas (Darwin (iOS, macOS), Android y otras).
- Conectatividad multipunto de Apple (AirDrop) y dispositivos cercanos de Android (Android Nearby) permiten a los dispositivos configurar una conexión WiFi directa utilizando BLE, que ofrece un rendimiento mucho mayor que BLE solo. También es mucho más fácil implementar un controlador (driver) utilizando estas tecnologías. Sin embargo, son dependientes de la plataforma y sólo operan entre dispositivos del mismo tipo: Android a Android y Darwin a Darwin.

#### Cómo lo hace Berty

- Actualmente estamos implementando un controlador para MPConnectivity que será el transporte predeterminado para la comunicación entre dispositivos Apple (Mac y iPhone).
- Después de esto, planeamos implementar un controlador para Android Nearby que será el transporte predeterminado para la comunicación entre dispositivos Android.
- Después de los dos controladores mencionados arriba, planeamos implementar un controlador BLE universal para ambos iOS y Android que será el transporte alternativo para las comunicaciones multiplataforma.

Con la ayuda de la comunidad también podríamos implementar controladores BLE universales para Linux y Windows.

Para más información sobre este tema, puede leer este [artículo dedicado](https://berty.tech/blog/bluetooth-low-energy/).
