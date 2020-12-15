---
title: "Technical challenges"
id: 2
icon: fal fa-laptop-code
private: true
---

### Implementing P2P networking on mobile devices

#### Constraints on mobile platforms:

* Cellular connections are more problematic:
    * NAT traversal is more difficult to achieve
    * Connections are less reliable
    * Connections are generally slower with a higher ping
    * Data plans have limited daily/monthly quotas
* Less CPU power
* Smaller maximum amount of concurrent networking connections
* Limited battery life
* Smaller amount of CPU time allocated to the app (app in the background)

#### Some projects that implement P2P on mobile

* `Textile.io` is probably the most well-known project that builds mobile applications over IPFS by running a full node on mobile devices using gomobile. They already have several apps released (including pure-demo applications) and a SDK.
* `Jami.net` is doing P2P on mobile, they are focused on delivering a direct Skype competitor, including the features like audio call.
* `status.im`: Status brings the power of Ethereum into the user's pocket by combining a messenger, a crypto-wallet, and a Web3 browser.
* `matrix.org`:  Matrix owes its name to its ability to bridge existing platforms into a global open matrix of communication. Matrix is more of a decentralised conversation store rather than a messaging protocol.

#### How Berty tackles it

* `Gomobile-IPFS`: a repo created by Berty Technologies that aims to provide packages for Android, iOS and React Native that allow one to run and use an IPFS node on mobile devices.
* `Berty Protocol`: we are currently designing a protocol that can be used by everyone in their projects to create secure P2P applications that run on both desktop and mobile.
* `Berty Messenger`: a concrete example of a simple app that is built on top of Berty Protocol, designed with non-tech people in mind, trying to get P2P on mobile to the mass user.

### Preserving Privacy and Securing Communication in a Distributed Environment

#### Constraints

Making sure "you are who you claim to be" is a fundamental cybersecurity challenge. In a centralized environment, there's an authority that can validate the identities, signatures, encryption keys and so on. In a distributed environment, we need to find ways to achieve trust between peers without a central authority.

In a distributed system, we cannot ensure the message arrival order. This becomes a particular issue with an offline-first messenger, because messages that were sent off-grid might not be synced correctly when the device goes online again. This can cause problems, mainly when encrypting messages with Perfect Forward Secrecy algorithms that use rotating encryption keys.

Metadata are required to operate a messaging system. However, they could be an important source of information if they were collected and analyzed.

#### Related

* `Signal.org`: the gold standard for any centralized environment. Berty uses many of its cryptographic algorithms/protocols, having them adapted for distributed environment. They work hard to limit their metadata footprint as much as possible, but their servers are still hosted on Google Cloud and are automatically subject to the Cloud Act.
* `Messaging Layer Security`: MLS offers a more scalable alternative to Signal Protocol. This solution still requires a central server in order to work.
* `Olvid.io`: Olvid claims to be the only messaging service that also encrypts metadata. They are centralized and host their servers on AWS, which also belongs to the Cloud Act.
* `status.im`: Status designed Whisper to overcome some of the above shortcomings AND be configurable to the end user, who ought to be able to specify what trade-offs they are willing to make between battery life and mobile data charges, privacy and possible metadata leakage.

#### How Berty tackles it

* `go-ipfs-log`: ipfs-log - the base layer of orbit-db - is a distributed peer-to-peer message log on IPFS using CRDT for message order consistency. This open-source library intends to provide a fully compatible port of the JavaScript version in Go.
* `go-orbit-db`: orbit-db is a distributed peer-to-peer database on IPFS built on top of go-ipfs-log. The majority of its code has derived from the JavaScript's orbit-db project. This project intends to provide a fully compatible port of the JavaScript version in Go.
* `Berty-Protocol`: the protocol is using, among other things, NaCl and Signal's Symmetric-ratchet to ensure the reliability of identities on the network and encrypt messages with Perfect Forward Secrecy. In addition to searching for a way to hide public IPs on IPFS, we are trying to reduce metadata leakage as much as possible:
    * No phone/email required for registration
    * Optional zero-knowledge replication servers
    * Rotating rendezvous points and peerIDs
    * Metadata encryption (as much as possible)
    * Noise generation

### Offline communication between different types of devices

#### Constraints
To achieve off-grid communication (Berty is an offline-first messaging app), there are two types of technology we consider using:
- Bluetooth Low Energy is an energy-efficient technology, but it offers only limited performance (just enough to send text). It is difficult to implement, especially with Android APIs. It has, however, the advantage of working between different platforms (Darwin (iOS, macOS), Android and others).
- Apple Multipeer Connectivity (AirDrop) and Android Nearby allow peers to set up a direct WiFi connection using BLE, which offers much greater performance than BLE alone. It is also a lot easier to implement a driver using these technologies. However, they are platform-dependent and only operate between devices of the same type: Android-to-Android and Darwin-to-Darwin.

#### How Berty tackles it

- We are currently implementing a driver for MPConnectivity that will be the default transport for communication between Apple devices (Mac and iPhone).
- After this, we plan to implement a driver for Android Nearby that will be the default transport for communication between Android devices.
- After the two drivers above, we plan to implement a universal BLE driver for both Android and iOS that will be the fallback transport for cross-platform communications.

With the help of community we could also implement universal BLE drivers for Linux and Windows.

For more information on this subject, you can read this [dedicated article](https://berty.tech/blog/bluetooth-low-energy/).
