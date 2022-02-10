---
author: manfred
title: "Berty 发布了 gomobile-ipfs！！"
date: 2020-02-12
image: "gomobile_ipfs_logo.jpg"
categories:
  - announcement
tags:
  - 技术方面
  - 安全
---

# Berty 发布了 gomobile-ipfs

IPFS 是一个 p2p 超媒体协议，也是一个在分布式文件系统中存储和共享数据的网络。 为了做到这一点，它提供了一些特性，例如节点发现、多模式传输、pubsub、DHT 等。 在 Berty 中，我们选择使用 IPFS 作为我们协议栈中的基础层。

但存在有一点问题：截至今日， 大多数 P2P 网络都是基于拥有静态 IP 地址的台式机或服务器，拥有 24/7 服务时间和高性能 CPU。 然而，在移动设备上运行 P2P 网络带来了挑战：CPU 每天只有几分钟可用、不稳定的网络、有限的续航、有限的并发连接数等。 P2P 网络启动较慢，需要先花费一定时间调用 DHT ([分布式哈希表](https://www.cs.princeton.edu/courses/archive/fall18/cos418/docs/L6-dhts.pdf)) ，然后才逐渐变快。

To help with running IPFS on mobile, Berty [created gomobile-ipfs](https://berty.tech/docs/gomobile-ipfs). 此 repo 旨在为 Android、iOS 和 React-Native 提供软件包，使人们能够在移动设备上运行和使用一个 IPFS 节点。 It's also a place to discuss the constraints of running IPFS on mobile in order to find solutions and exchange tips.

我们计划今后做的一些事情：

- 改进 API：
   - 实现 InputStream 作为请求正文和请求响应
   - 绑定 `SetStreamHandler(protocolID，handler)` 和 `NewStream(peerID，protocolID)` 方法
- 为移动平台优化IPFS：
   - Lifecycle-manage the instanciated node(s) according to the app lifecycle
   - Fine-tune the node settings to achieve a good balance between performance and resource consumption (CPU, battery, data, etc...)
   - Implement a connectivity driver that will be able to modify the node configuration according to the connectivity of the device (bluetooth on/off, wifi or cellular, etc...)
- 实现相关的 libp2p 传输：
   - MultipeerConnectivity (Airdrop) for iOS <-> iOS communication
   - Android Nearby for Android <-> Android 通信
   - Bluetooth Low Energy for iOS <-> Android 通信
- Implement a React-Native package in addition to the Android and iOS packages

If you're interested in this project, we'd be happy to receive your [contributions on GitHub](https://github.com/ipfs-shipyard/gomobile-ipfs)!


{{<tweet id="1224339846333976577">}}
