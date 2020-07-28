---
title: Will the app hide ip addresses and metadata?
id: 10
private: true
---

Today, IP addresses are hidden by a set of "noise" thanks to P2P. Moreover, it will depend on the context (relay or not, Bluetooth or not, luck, 3G, NAT, WiFi, TEC). This already limits IP address leakage, and especially the certainty that this IP address is indeed that of this person or device.

In the future, we then plan to use something like i2p/tor or another onion network technology to allow hiding everything, including IP addresses. 

In addition, metadata collection is greatly minimized. Instead of a directory linking public keys to personal data such as telephone numbers, the [Berty Protocol](https://berty.tech/docs/protocol/) uses a combination of TOTP and a public key to generate rendezvous point addresses and register its users on IPFS, who can later be contacted by peers wishing to communicate.

We make our best efforts to ensure user privacy. We are therefore committed to **hiding IP addresses as much as possible and keeping the collection of metadata to a minimum.**
