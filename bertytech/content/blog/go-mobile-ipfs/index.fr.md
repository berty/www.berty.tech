---
author: manfred
title: "Berty releases gomobile-ipfs!!"
date: 2020-02-12
image: "gomobile_ipfs_logo.jpg"
categories:
  - announcement
tags:
  - technical
  - sécurité
---

# Berty releases gomobile-ipfs

IPFS is a peer-to-peer hypermedia protocol and a network for storing and sharing data in a distributed file system. To do so, it offers a number of features such as peers discovery, multiple transports, pubsub, DHT and so on. At Berty we have chosen to use IPFS as the base layer in our stack.

But there's a little problem: as of today, most of the P2P networks are based on desktop computers or even servers with static IP addresses, with 24/7 uptime and powerful CPU. However, running a P2P network on mobile presents its challenges: just a few minutes per day of CPU availability, unreliable network, limited battery life, limited parallel connections, etc... P2P network are slow to start, first calls on a DHT ([Distributed Hash Table](https://www.cs.princeton.edu/courses/archive/fall18/cos418/docs/L6-dhts.pdf)) usually take time, then it becomes faster.

To help with running IPFS on mobile, Berty [created gomobile-ipfs](https://berty.tech/docs/gomobile-ipfs). This repo aims to provide packages for Android, iOS and React-Native that allow one to run and use an IPFS node on mobile devices. It's also a place to discuss the constraints of running IPFS on mobile in order to find solutions and exchange tips.

Some things we're planning to do in the future:

- Improve the API:
   - Implement InpuStream as request body and request response
   - Bind `SetStreamHandler(protocolID, handler)` and `NewStream(peerID, protocolID)` methods
- Optimize IPFS for mobile platforms:
   - Lifecycle-manage the instanciated node(s) according to the app lifecycle
   - Fine-tune the node settings to achieve a good balance between performance and resource consumption (CPU, battery, data, etc...)
   - Implement a connectivity driver that will be able to modify the node configuration according to the connectivity of the device (bluetooth on/off, wifi or cellular, etc...)
- Implement relevant libp2p transports:
   - MultipeerConnectivity (Airdrop) for iOS <-> iOS communication
   - Android Nearby for Android <-> Android communication
   - Bluetooth Low Energy for iOS <-> Android communication
- Implement a React-Native package in addition to the Android and iOS packages

If you're interested in this project, we'd be happy to receive your [contributions on GitHub](https://github.com/ipfs-shipyard/gomobile-ipfs)!


{{<tweet id="1224339846333976577">}}
