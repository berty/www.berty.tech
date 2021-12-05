---
title: "Will the app hide ip addresses and metadata?"
id: 10
private: true
---

For the moment, no mechanism to hide IP addresses is in place. In a P2P network, peers need to know each other’s IP addresses in order to communicate.

On the one hand, the information is dispersed like a drop in the ocean (as opposed to a centralized service that logs all the users’ IPs in a single place), on the other hand, the users’ IP address becomes, in a way, public on the network.

The concern is of course less when the user connects to the network through a relay (this will almost always be the case on mobile phones), in this case, only the randomly chosen relay (basically, any IPFS node on the network having activated the option to act as a relay) will know the real IP of the user.

The problem also does not arise when Berty users communicate offline, using direct transports such as: BLE, Apple MultipeerConnectivity or Android Nearby. Although in this case, to be complete, users will be able to detect other Berty users who have activated these transports within a short distance.

In other cases, we are currently working on adding to the protocol the use of a mix network system such as I2P or Tor to mitigate IP address leakage.

Regarding metadata, we have created a [custom protocol](https://berty.tech/docs/protocol/) that makes the collection of metadata as difficult as possible:
* Having no phone/email required for registration, user identity is only based on public key cryptography
* Not mandating any type of registration or use of a centralized service at any level (we may propose an optional directory service to easily find contacts, with the sole purpose of making the app easier to use for users who want it)
* Rotating rendezvous points (kind of addresses where peers meet each other) on a regular basis
* Offering the possibility to disable the contact request link or generate a new one by revoking the previous one
* Aliasing identity, an user joining a group conversation will do it using an identity specific to this group

**We make our best efforts to ensure user privacy. We are therefore committed to keep our users as anonymous as possible and making the collection of metadata as difficult as possible.**
