---
title: "Privacy Policy"
type: fakepost
image_bg: "privacy.png"
---

# Berty Application

Last updated: December 14, 2021

## Foreword

Berty is an open-source messaging application designed by the NGO Berty Technologies, relying on a peer-to-peer network and cryptography to provide a secure and resilient way of communicating. The application is designed to minimize the amount of data collected and services accessed.

This privacy policy covers the usage of the Berty application and the services available within it.

Please ensure that you download the app from a trusted source, as this privacy policy doesn't apply to Berty applications created by third parties.

The Berty application is currently being actively developed, and additional services, adjustment of behavior, or clarifications could be added to this privacy policy.

### Explaining the Privacy Policy structure

In the glossary, users will find technical definitions of keywords to understand better how the Berty application works and its technical challenges.

The Berty application can be used with different sets of functionalities and in various types of situations. Depending on those two factors, the nature of the data, its quantity, and the third parties with whom users share it can significantly vary.

Some of the functionalities that users can choose to toggle on or off will allow for a smoother experience but will impact their privacy and personal data.

We will detail in the following sections all the data prone to be shared by the Berty application:

- In its most privacy-friendly configuration.
- Incrementally, for each feature that is toggled on.


## Glossary

### Account

An **account** is a set of cryptographic keys and secrets, locally generated on a user's device, which does not need to be stored anywhere else.

An account may be shared across several devices belonging to the same user.

The account data is not stored outside the user's device, so in the event of a data loss (phone broken, etc.) and not having a backup elsewhere, access to the account can't be restored.

### Bootstrapping node

A **bootstrapping node** is the entry point that allows users to connect to a few peers in order to be integrated into the [swarm](privacy-policy/#swarm).

The discovery of new peers will then be made through the already connected ones, and the use of the bootstrapping node will no more be necessary.

### Contact

A **contact** is another [account](privacy-policy/#account) that accepted a contact request sent to them or the other way around.

Locating another account to send a contact request is done via a [rendezvous point](privacy-policy/#rendezvous-point) on the network.

### DHT

The **Distributed Hash-Table** or **DHT** is a key-value store shared among all the users of Berty and [IPFS](privacy-policy/#ipfs) backed applications.

Any IPFS peer that has enabled the DHT server feature can provide or be sent registered data a user wishes to exchange.

Most of the time, the Berty application uses it to store rendezvous point rotating identifiers or content identifiers as keys, and the network addresses of peers as values, as it does with [rendezvous point nodes](privacy-policy/#rendezvous-point-node).

### Group

A group is a logical structure within which group members, owning one or more devices, can exchange messages.

There are three kinds of groups:

* **[Account](privacy-policy/#account) groups**: Composed of one member only (owner's account), it is dedicated to sending messages and synchronizing metadata such as contacts or joined groups between the devices that are tied to the same account.
* **[Contact](privacy-policy/#contact) groups**: Used to send messages and synchronize metadata between two [accounts](privacy-policy/#account) that are contacts.
* **Multi-member groups**: Group composed of one or several Berty accounts, which have potentially no relation other than being part of the same group.

Due to the append-only requirements of a peer-to-peer application, messages and metadata sent to a group cannot be deleted. Encrypted messages sent before the arrival of a new group member will stay available in the conversation history to every group member. Their content will, however, remain encrypted for that new group member.

### IPFS

**InterPlanetary File System** or **IPFS** is a system that allows users to share authenticated content, guaranteed to be untampered through peer-to-peer protocols. It relies on libp2p, a modular peer-to-peer networking stack.

### mDNS

**Multicast DNS** or **mDNS** allows users of the Berty application to find each other through a local network. The Berty application will advertise its presence through a local network, letting other users know whether or not they are available and connect to them via their local IP address.

### Peer ID

A **peer ID** is a user's network identifier on [IPFS](privacy-policy/#ipfs) network.

### Push notification {#push-notification-anchor}

**Push notification** is a system that allows a user to receive data on its device without checking for it periodically. A new message can then be shown as a **notification** very quickly on their device.

This feature enables the Berty application to receive data even if it is not running.

Push notifications use [token identifiers](privacy-policy/#push-notification-token) and transit through one's phone operating system vendor's servers (i.e., Google for Android devices sold with the Play Store, Apple for iOS or iPadOS devices)

#### Push notification token

A **push notification token** contains an identifier specific to a user's device and is uniquely tied to their device and the Berty application. It is not specific to an account.

These tokens differ by device and application. This token allows sending a push notification to the device it is targeting.

#### Push forwarding server

This service is operated by Berty Technologies.

It is an intermediate server that will forward [push notifications](privacy-policy/#push-notification-anchor) sent by a Berty user via its phone operating system vendor (i.e., Apple, Google). This server cannot decrypt the content of [push notifications](privacy-policy/#push-notification-anchor). It will be able to decrypt the [push notification token](privacy-policy/#push-notification-token) in order to forward the Push notification to the targeted device but will not keep it stored.


### Proximity transport

In the context of IPFS, anything that offers a peer a means to connect is a transport.

Berty Technologies developed a new type of transport for libp2p and IPFS called **proximity transport**. This transport allows users to connect to nearby peers through a direct connection:

* on Apple platforms (iOS, iPadOS, macOS) using Multipeer Connectivity (a mix of Bluetooth Low Energy and Wi-Fi direct connections);
* on Android devices, using Android Nearby (also a mix of Bluetooth Low Energy and Wi-Fi direct connections);
* on compatible devices via Bluetooth Low Energy, it also provides interoperability across different operating systems.

Proximity transport can also be referred to as Bluetooth Low Energy, Bluetooth, BLE, or Android Nearby in the application.

### Rendezvous point

A **rendezvous point** is a volatile address on a peer-to-peer network where two devices can meet. Peers can register their [peer IDs](privacy-policy/#peer-id) using a given rendezvous point identifier and get the list of already registered peers.

There are two types of rendezvous points used in the Berty Protocol:

* A user rendezvous point, which is dedicated to locating an [account](privacy-policy/#account) to send a contact request to it. If this [rendezvous point](privacy-policy/#rendezvous-point) is too widely available (leaked by mistake, for example), a user can reset its value, preventing any further incoming requests.
* A [group](privacy-policy/#group) rendezvous point, which is dedicated to locating group members in order to exchange messages with them. This rendezvous point can't be reset.

To restrict tracking, rendezvous point identifier rotate regularly, and someone knowing an identifier for a given time period won't be able to guess the next identifier unless they have been invited to a conversation or have a contact request link in their possession.

### Rendezvous point node

A **rendezvous point node** is a key-value store that users can add to or access records of their addresses on a given rendezvous point identifier.

A user who wishes to communicate with other members of a [group](privacy-policy/#group) will first start by asking a list of all the addresses associated with a group’s rendezvous point identifier and will then be adding its own address to the list in order to be reachable by other group members subsequently.

### Relay node

A **relay node** allows doing NAT traversal using a TURN-like system. Berty's implemented relay node is [Libp2p's](https://libp2p.io/).

When a user's network does not allow them to receive incoming connections, they can connect to this relay and advertise the relay's address on a [rendezvous point](privacy-policy/#rendezvous-point). Other peers will use this relay as an intermediate hop to connect and bypass the network restrictions.

The exchanges between the two peers are encrypted, but the relay will still know their addresses and the amount of data they are exchanging.

### Replication node

A **replication node** adds a highly available peer to a group conversation. It will store messages and allow them to transit from one peer to another, acting as a pass-through. It does not have access to the secrets that allow for message decryption.

### Swarm

The **swarm** represents the collection of all the interconnected peers of a network that are partially connected to each other.

### Third-party hosted services

It is an optional and dedicated service that ensures the proper operation of some of Berty's features hosted by a third party, e.g., [rendezvous point nodes](privacy-policy/#rendezvous-point-node), [relay nodes](privacy-policy/#relay-node), [bootstrapping nodes](privacy-policy/#bootstrapping-node) and [replication nodes](privacy-policy/#replication-node).

Internet communities, associations, individuals, companies, etc., can possibly be such third parties. Simply put, anyone who has set up our services on their nodes.

### Tor

**Tor** allows users to anonymize their public IP address by routing their network traffic through multiple intermediate nodes.

Tor is not yet implemented into the Berty application, but even if we plan on adding it further down the road, users can set up their own Tor proxy to route the application's traffic through it.

For more information about Tor, please visit the [project's homepage](https://www.torproject.org/).

## Most privacy-focused setup

In its most minimalist form of use, users of the Berty application only requires an [account](privacy-policy/#account).

No email addresses or phone numbers are needed to create an [account](privacy-policy/#account). Cryptographic keys will be locally generated on the user's device used to create the account and shared only with the devices on which the user will choose to use their account.

In this configuration, no data is sent to any servers, and Berty Technologies will not even be aware of the user's existence.

The Berty application will first need to connect to the [swarm](privacy-policy/#swarm) by using a [bootstrapping node](privacy-policy/#bootstrapping-node). The default ones are operated by both Berty Technologies and Protocol Labs (IPFS). However, users can configure their application to use any other nodes they feel comfortable using.

Once connected to the swarm, the application will need to use the [DHT](privacy-policy/#dht) to find the other conversations members and exchange messages with them. A [DHT](privacy-policy/#dht) node can be operated by anyone on the internet as it is a basic [IPFS](privacy-policy/#ipfs) peer whose DHT server feature has been toggled on. The application will store the following information on some random [DHT](privacy-policy/#dht) nodes:

* An address for contacting the user, either their public IP address or a [relay](privacy-policy/#relay-node) address.
* The [groups](privacy-policy/#group) onto which the user is requesting to associate this address.

The user's public IP address can be hidden using [Tor](privacy-policy/#tor) or another IP hiding solution.

## Optional features

All of the following features will be disabled by default if a user selects the anonymity preset and chooses not to use any of the Berty Technologies services ([rendezvous point nodes](privacy-policy/#rendezvous-point-node) and [replication nodes](privacy-policy/#replication-node)) when launching the application.

### Rendezvous point node

#### Benefits

The use of [rendezvous point nodes](privacy-policy/#rendezvous-point-node) improves performance compared to the [DHT](privacy-policy/#dht). This is due to the fact that the data is less distributed and is only stored on a small number of nodes known in advance rather than on a vast number of nodes chosen randomly on the network.

#### Drawbacks

This solution is much less resilient than the [DHT](privacy-policy/#dht) as governments, other infrastructures, or attackers could opt to block access to those nodes at any given time. Someone with malicious intentions will more easily be able to block access to these nodes than on the [DHT](privacy-policy/#dht) nodes that are only composed of random peers on the network.

Centralizing the data on a [rendezvous point node](privacy-policy/#rendezvous-point-node) can also make it a prime target for anyone who wants to obtain this data.

Knowing that a [rendezvous point node](privacy-policy/#rendezvous-point-node) will store:
- the rendezvous point rotating identifiers
- the associated addresses

By default, [rendezvous point nodes](privacy-policy/#rendezvous-point-node) are operated by Berty Technologies but can also be set up by a [third party](privacy-policy/#third-party-hosted-services).

### Relay node

#### Benefits

In order to be reachable, a user's device needs to be able to receive an incoming connection.

If a user is connected through a public Wi-Fi hotspot, a cellular network, a company network, or any other type of network that won't allow incoming connections (by, for example, forwarding a port), they can opt to connect through a [relay node](privacy-policy/#relay-node).

#### Drawbacks

The [relay node](privacy-policy/#relay-node) will have the public IP addresses of the connected peers unless they are using [Tor](privacy-policy/#tor) or any other IP masking solution.

The relay node will also know the amount of data exchanged by the connected peers.

By default, [relay nodes](privacy-policy/#relay-node) are operated by both Berty Technologies and Protocol Labs (IPFS) but can also be set up by a [third party](privacy-policy/#third-party-hosted-services).

### Replication node

#### Benefits

This service allows messages and attachments to be sent by a user while other conversation members are offline by storing messages on a highly available node.

A [replication nodes](privacy-policy/#replication-node) only acts as a pass-through and never has access to the secrets that decrypt the messages, the metadata, or the attachments.

By default, [replication nodes](privacy-policy/#replication-node) are operated by Berty Technologies but can also be set up by a [third party](privacy-policy/#third-party-hosted-services).

#### Drawbacks

Even if [replication nodes](privacy-policy/#replication-node) are not able to decrypt the content of messages and metadata they provide, they will still know how many members are within a [group](privacy-policy/#group), the number of messages they are sending, their size, and when they were sent.

It also records the public IP address of any user connecting to it to synchronize data unless they are using [Tor](privacy-policy/#tor) or any other IP hiding solution.

Any [group](privacy-policy/#group) member can add a [replication node](privacy-policy/#replication-node) to a conversation.

### Proximity transport

#### Benefits

A user can use [proximity transport](privacy-policy/#proximity-transport) to send messages without using an internet connection.

When enabling proximity transport, a user's device will automatically connect with other devices nearby running the Berty application. Still, no identifying account information will be shared unless the user is participating in a common conversation or are mutual contacts.


#### Drawbacks

The user's device will broadcast within the range allowed by their device and the technology used (Android Nearby, Multipeer Connectivity, or BLE) that they are using Berty application with [proximity transport](privacy-policy/#proximity-transport).

The user's [peer ID](privacy-policy/#peer-id) will then be disclosed, and so will some of the rendezvous point rotating identifiers they are interested in communicating with. This can be sensitive information depending on the user's own privacy needs.


#### Android permissions

On Android 11 or lower, an application [must ask for location permission](https://developer.android.com/guide/topics/connectivity/bluetooth/permissions#declare-android11-or-lower) to use the Bluetooth API, even if the application does not seek to locate the user.

In the case of the Berty application, to use the Proximity transport on Android, the user will need to grant the location permission event if Berty Technologies does not collect nor share the user's location data in any way.

### mDNS

#### Benefits

Users can use [mDNS](privacy-policy/#mdns) (multicast DNS) to discover devices using the Berty application within the same local network and establish a direct connection with them.

This can be useful if the user is on a restricted internet network (e.g., a company network) or in any case where a local connection would be desirable.

#### Drawbacks

Enabling [mDNS](privacy-policy/#mdns) will broadcast on the local network that a user is using the Berty application along with their private IP address.

### Push Notifications

#### Benefits

[Push notifications](privacy-policy/#push-notification-anchor) are a way to be instantly informed about sent messages while a user's device is not running the Berty application. When enabled, a device identifier is shared in an encrypted form with the user's contacts and conversations they are participating in.

When first enabled, a connection to the push notification relay will be established to retrieve a key to encrypt the device identifier shared to contacts.

To send a message as a [push notification](privacy-policy/#push-notification-anchor) to a device, a [push forwarding server](privacy-policy/#push-forwarding-server) will be reached with a device identifier and an encrypted message. The [push forwarding server](privacy-policy/#push-forwarding-server) will be able to decrypt the device identifier but not the actual message. Depending on the recipient device manufacturer, Apple's or Google's servers will be reached to deliver the message.


#### Drawbacks

If a user toggles this feature on, they will be giving their contacts a unique [push notification token](privacy-policy/#push-notification-token).

These notifications go through Berty Technologies servers and to your operating system vendor servers in an encrypted form.

The servers operated by Berty Technologies will decrypt a user's [push notification token](privacy-policy/#push-notification-token) and use it to send the encrypted payload to its recipient. Berty Technologies servers do not have the ability to decrypt the content of the message and will not keep a backup of a user's token.

The content of your messages will therefore remain encrypted and unreadable by anyone except the recipient.

Any servers through which the pushed notification will get through have the knowledge that someone sent messages to a specific device and at what time they did so.

It will hold users' public IP addresses unless they are using [Tor](privacy-policy/#tor) or any other IP hiding solution.

Berty Technologies stores no personal information.

You should refer to your operating system privacy policies to know how your data will be handled by these companies when this feature is enabled.

### Telemetry

#### Benefits

Berty application builds published on Apple's TestFlight, Google Play Public Beta Program, or Berty Yolo contains bug reporting tools.

We will collect metrics related to ongoing features or bugs being worked on, crashes of the application, or comments you actively reported.

It can include technical data such as time of the event, cell phone carrier, the model of the device used, operating system version, battery, and storage usage, your timezone.

No personal data is collected by default. However, you can optionally include your email so our team can contact you to get additional information.

#### Drawbacks

Data is collected using TestFlight and Google services (e.g., Firebase).

Such reporting is disabled on stable non-beta versions of the application.

## Information we may share

Berty Technologies does not share personal or usage data with third parties. Berty Technologies may be required by justice to share data it holds but has not replied to any request at this point.

## Contacts

If you want to reach us, or you have questions about our Privacy Policy, please get in touch with us at:

- Email: contact@berty.tech
- Postal mail: Berty Technologies, 96 Boulevard Bessières, 75017 Paris, FRANCE
