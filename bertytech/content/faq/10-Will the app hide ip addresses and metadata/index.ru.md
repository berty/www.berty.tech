---
title: "Будет ли приложение скрывать IP-адреса и метаданные?"
id: 10
private: true
---

На данный момент нет механизма скрытия IP-адресов. В P2P сети узлы должны знать IP-адреса друг друга, чтобы коммуницировать.

С одной стороны, информация рассредоточена как капли в океане (в отличие от централизованных сервисов, которые сохраняют IP-адреса всех пользователей в одном месте), с другой стороны, IP-адреса пользователей, таким образом, становится публичными в сети.

Проблема, конечно, становится меньше, если пользователь подключается к сети через посредника (на мобильных устройствах это будет практически всегда), в этом случае, только случайно выбранный узел (по сути, любой узел IPFS в сети имеет включённую функцию работы в качестве посредника) будет знать реальный IP-адрес пользователя.

Проблема также не возникает, когда пользователи Berty общаются в автономном режиме, используя транспорты с прямым подключением: BLE, Apple MultipeerConnectivity, Android Nearby. Однако, в этом случае, пользователи смогут обнаруживать на короткой дистанции других пользователей Berty, которые активировали эти транспорты.

В других случаях в настоящее время мы работаем над добавлением в протокол использования системы смешивания сети, такой как у I2P или Tor, для уменьшения утечки IP-адресов.

Regarding metadata, we have created a [custom protocol](https://berty.tech/docs/protocol/) that makes the collection of metadata as difficult as possible:
* Having no phone/email required for registration, user identity is only based on public key cryptography
* Not mandating any type of registration or use of a centralized service at any level (we may propose an optional directory service to easily find contacts, with the sole purpose of making the app easier to use for users who want it)
* Rotating rendezvous points (kind of addresses where peers meet each other) on a regular basis
* Offering the possibility to disable the contact request link or generate a new one by revoking the previous one
* Aliasing identity, an user joining a group conversation will do it using an identity specific to this group

**We make our best efforts to ensure user privacy. We are therefore committed to keep our users as anonymous as possible and making the collection of metadata as difficult as possible.**
