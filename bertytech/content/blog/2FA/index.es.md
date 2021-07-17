---
author: Camille
title: "Fundamento #3: Autenticación de dos factores"
date: 2020-09-13
#image: "2020-08-31-Berty-Blogpost-2FA.jpg"
image: "2020-08-31-Berty-Blogpost-2FA.jpg"
categories:
  - free-speech
tags:
  - security
  - privacy
description: Aprende sobre 2FA
---

# Fundamento #3: Autenticación de dos factores


Hoy en día, el acceso a una cuenta está cada vez más comprometido. De hecho, hay cada vez más softwares que permiten probar un conjunto de contraseñas. Entonces, ¿cómo proteges el acceso a tu cuenta? ¿Has oído hablar de autenticación de múltiples pasos o múltiples factores?

Puede que no te hayas dado cuenta, pero probablemente ya estés usando autenticación de dos factores en el mundo físico. ¿Recuerdas la tarjeta que te facilitaba tu banco para confirmar una transacción en tu cuenta? La autenticación de dos factores, o 2FA, como se le conoce popularmente, es un paso adicional en el proceso de acceso a tu cuenta. Sin 2FA, solo tienes que introducir tu nombre de usuario y tu contraseña. La contraseña es tu único factor de autenticación. En pocas palabras, el factor hace que tu cuenta sea más segura.

El 2FA no debe ser confundido con la capacidad de acceder a un sitio a través de tu proveedor de correo electrónico (como "Conectarse con Google"). Esto no es estrictamente 2FA, pero a veces es mejor tener un sistema de correo electrónico seguro que confiar en un sitio web "seguro". Pero eso es otro tema.

## ¿Qué es la autenticación de dos factores (2FA)?

![](https://i.imgur.com/MJUVRuw.jpg)

La autenticación de dos factores (2FA) es un método de autenticación en computación en el que se le permite el acceso a un usuario sólo cuando envía con éxito dos o más pruebas de acceso a un sistema de autenticación.

Por ejemplo, si quieres iniciar sesión en tu cuenta de correo electrónico, necesitarás enviar un método adicional y tu contraseña. Este método puede ser un código recibido por SMS o un código en una aplicación de identificación.

Usualmente, el primer método de autenticación es algo que conoces (como tu contraseña o un código PIN). El segundo método es algo que no conoces (código generado especialmente para la autenticación) pero que está vinculado a ti.

Es habitual dividir esto en varios tipos de información:
- 🔑 algo que tienes (un objeto, como un USB)
- 🐾 algo sobre ti (huella, reconocimiento facial)
- 🧠 algo que sabes (una contraseña)
- 📍 tu posición (localización GPS)


> En https://twofactorauth.org/ puedes comprobar si un sitio web/aplicación soporta 2FA o no.

## 📞 Autenticación de dos factores por SMS

![](https://i.imgur.com/uuqGxCp.jpg)


El segundo método de identificación es un código recibido por SMS. Probablemente, este es el método que más conoces.

El código recibido por SMS difiere cada vez que es enviado, por lo que si tu contraseña es robada, no será suficiente para ir más lejos. El código está vinculado a tu número de teléfono, que es una característica de seguridad muy poderosa - a menos que te hayan robado físicamente o hackeado por un ["Sim Swapping"](https://berty.tech/blog/sim-swapping/).

Una desventaja significativa de esta 2FA es que si la red móvil no funciona o no tiene cobertura, no podrás recibir el código que te permite identificarte. Otra desventaja es que si estás usando equipos conectados y centralizados (entre tu tablet y tu teléfono), recibirás el código en ambos dispositivos; tus códigos de acceso corren tanto riesgo como tus contraseñas.


## 📱 Autenticación de dos factores por una aplicación de identificación

![](https://i.imgur.com/YuRNDY0.jpg)


Las aplicaciones de identificación te proporcionan el mismo tipo de servicio que 2FA por SMS. Sin embargo, en vez de recibir los códigos, estos son generados localmente dentro de tu teléfono o tablet. Por lo tanto, ofrecen flexibilidad cuando te encuentras en una locación sin cobertura móvil.

La operación se basa en algoritmos de criptografía para generar contraseñas de un solo uso que integran la noción del tiempo (algoritmo de contraseña de un solo uso basado en el tiempo. TOTP por sus siglas en inglés).

Primero, la aplicación 2FA generará una clave de inicio llamada "semilla". Ésta última será derivada y mezclada con la fecha y la hora para hacer un código de un solo uso, generalmente válido por 30-60 segundos.

> 💡 Es bueno saberlo: hay [gestores de contraseñas](https://berty.tech/blog/best-password-manager/) que gestionan los TOTP.

***TOTP de código abierto:***

👉 https://awesomeopensource.com/projects/totp

👉 https://freeotp.github.io/

👉 https://krypt.co/

El mayor inconveniente de las aplicaciones de identificación es que si un estafador consigue tu semilla (ya sea de tu equipo o hackeando el servidor), puede calcular cualquier código futuro. Si inicias sesión y usas la aplicación de identificación en el mismo dispositivo, tus códigos de autenticación corren tanto riesgo como tus contraseñas.


## 🗝️ Autenticadores hardware FIDO U2F: YubiKey y más

![](https://i.imgur.com/ZzJa77a.png)


Si estás buscando una solución robusta que quepa en tu bolsillo, busca los tokens de hardware basados en el estándar U2F (Universal 2nd Factor), creado por FIDO Alliance. El más famoso y típico ejemplo de U2F es YubiKey, fabricado por Yubico.

Concretamente, es un pequeño dispositivo del tamaño de un USB que genera un código de identificación localmente. Simplemente conecta el dispositivo para crear el código de identificación correcto. Es un paso adicional en el mundo real: el U2F debe ser físico como tu.

No obstante, te encontrarás con algunas restricciones: tendrás que comprarlo, y, no es soportado en todos los sitios que ya soportan 2FA a través de SMS/aplicaciones. Este 2FA requiere un acceso fídico al puerto USB del dispositivo (así que olvída el uso remoto, como TeamViewer). Por último: si lo pierdes, tendrás que recuperar todas tus cuentas usando los códigos de recuperación 2FA... Espero que los hayas guardado en un buen lugar. De lo contrario, ¡tendrás que contactar a cada sitio para que desactiven el 2FA en tus cuentas!


## Conclusión

En resumen, no existe un método único y perfecto. Si tuviéramos que recomendarte algo, sería: combina los métodos. No tengas miedo de ir más allá de la autenticación de dos factores: opta por la autenticación de múltiples factores (MFA). Haz que el acceso a tu gestor de contraseñas sea lo más seguro posible y activa 2FA siempre que puedas.

Esperamos que te haya gustado este artículo. Cualquier idea es bienvenida, al igual que los comentarios.

¡Saludos, internet!
{{<tweet id="1291024965630939136">}}

