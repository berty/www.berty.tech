---
author: gfanton
title: "Gomobile-IPFS"
date: 2020-07-02
image: "gomobile-ipfs.jpg"
categories:
  - announcement
tags:
  - 技术方面
  - 安全
---

# Gomobile-IPFS


It has been almost a year since the lightbulb went off: "Hey! Everyone! We're making gomobile + IPFS happen!"

Why the urgency? Read on to learn about the inception of the gomobile-ipfs project, its evolution, and some lessons learned along the way.

## The birth of gomobile-ipfs idea 💡

![image alt](https://media.giphy.com/media/5bkypk9C4AngZtAfE9/giphy.gif)

During the development of Berty v1 (2018-2019), we were using [LibP2P](https://libp2p.io/): the underlying [IPFS](https://ipfs.io/) library provided by the [Protocol Labs](https://protocol.ai/) team to easily develop distributed applications. At the time, we chose to develop a custom Berty node that was not fully compatible with a standard IPFS node.

> More info about this technical choice in this blog post: [How Berty Works](/blog/how-berty-works-ipfs)

In June 2019, we met the IPFS community during our stay at [IPFS Camp](https://berty.tech/blog/ipfs-camp/), a hacker retreat organized by [Protocol Labs](https://protocol.ai/). It was an awesome opportunity to meet a experts in the field and banter about problems and solutions in our technical and philosophical roadmap.

We also met the team behind the famous [Textile](https://textile.io) project, which provides an open-source set of tools that facilitate the development of distributed mobile and desktop applications over IPFS. They took the initiative to organize workshops, deep dives and brainstorming sessions.

One such session was on the theme "IPFS on mobile", so we were keen to participate given our extensive experience on the subject. After a fruitful discussion with [Carson Farmer](https://github.com/carsonfarmer), Core Developer @Textile.io, we realized that we were encountering the same problems with using IPFS on mobile:

- Most cellular connections are too unreliable and slow, and make NAT traversal techniques ineffective. The only one we've been able to get to work reliably is libp2p's TURN-like protocol (relay).
- When switching between a cellular and wifi network, all connections are closed (except in the case of QUIC transport).
- Computing resources (CPU, battery, network) are relatively limited on mobile devices. Opening connections with several hundred peers has a huge impact on a smartphone (even a high-end ones).
- Smartphone OSes show no mercy for application lifecycle duration. After a few seconds of our app running in the background, the IPFS node is killed. This implies that it must be restarted when the app returns to foreground and that the tens of seconds needed for the node to reconnect to a significant number of peers makes the use of the application very painful.

Seeing the enormous potential of using IPFS on mobile (but well aware of its challenges), we brought up the idea of launching the gomobile-ipfs project with interested community members.

## First PoC

On our return from IPFS Camp, we concluded that it was time to drop our v1 and start working on gomobile-ipfs as the foundation for v2, while making it usable for anyone.

The additional benefit of developing a more generic tool was to bring our work to the community and benefit from their contributions in return.

We started by making a simple PoC displaying the IPFS WebUI using React-Native for the UI and a go-ipfs node compiled with gomobile.

After we hit this milestone (🥳), we started to think about how best to bind the full functionality of the go-ipfs node with three bridge packages that could be used by mobile developers:

- Java for Android
- Swift for iOS
- React-Native for iOS/Android

## The architecture of gomobile-ipfs

During a few architecture sessions on our side and some exchanges with the Textile teams, we had considered several solutions to bind the coreAPI functions between the golang package and the native packages:

- Manually via gomobile
- Using Protobuf and gRPC
- Using the existing HTTP API

The main advantage of using the HTTP API compared to the other two solutions is that it meant much less work for the initial implementation and to maintain existing functionality as the coreAPI evolved.

Another advantage is that complete documentation already exists for the HTTP API. A developer using it in pre-existing code will be able to port their application more easily.

Finally, we built out the specifics of our plan: The go-ipfs node would serve its HTTP API on a Unix Domain Socket and the native packages would access it via the RequestBuilder of the [shell package](https://godoc.org/github.com/ipfs/go-ipfs-api#RequestBuilder).

You can find the entire exchange on [this issue](https://github.com/ipfs-shipyard/gomobile-ipfs/issues/14).

## Initial version

We quickly implemented a first version of gomobile-ipfs with the help of [Steven Allen](https://github.com/Stebalien) from Protocol Labs who reviewed our code in detail and helped us to fix a number of problems.

Then our [repo](https://github.com/ipfs-shipyard/gomobile-ipfs) was quickly moved to [IPFS Shipyard](https://github.com/ipfs-shipyard) and made open-source. It currently contains the following components:

- A golang part which exposes the essential functions for the init of the node and the functions related to the RequestBuilder
- Two Swift and Java packages that facilitate node management and send requests from these native languages
- Two demo applications for Android and iOS using gomobile-ipfs that simply download a random XKCD over IPFS

![image alt](https://i.ibb.co/YWB3zTy/gomobile-ipfs-hufbbb43401e0c8d9e17583385642103fd-335201-970x0-resize-q100-lanczos.png) *The gomobile-ipfs demo application*

Since then, we've also set up a CI that publishes the different Maven packages (Android), Cocoapods packages (iOS) and the demo applications on [Bintray](https://bintray.com/berty).

**The curious among you can already start using them in your project**. A minimal doc is available here on the [project's Github Pages](https://ipfs-shipyard.github.io/gomobile-ipfs/).

You can also find here a video that summarizes the basics of what there is to know: [IPFS Weekly Call - 04/27](https://www.youtube.com/watch?v=6mhMQaULJQ0).

## Next steps

![image alt](https://media.giphy.com/media/3og0ICZh82LEsNjHoc/giphy.gif)

There are still several points necessary for the project to be mature, some of which are already in progress.

Let's take a look at our to-do list!

- Implement the **lifecycle management** of the node via iOS and Android APIs. Namely: manage the state of the node according to the state of the application (foreground, background, etc...)
- Make it possible to interact with the node through **Streams** rather than byte arrays. Gomobile by default only supports [simple types](https://godoc.org/golang.org/x/mobile/cmd/gobind#hdr-Type_restrictions), but it would be pretty useful to be able to use Streams to manipulate and access large files (to read the node's logs, for example).
- Add the possibility to establish a **direct connection** with another peer and to implement handlers for a given protocolID. This boils down to to binding the `SetStreamHandler(protocolID, handler)` and `NewStream(peerID, protocolID)` functions.
- Further **optimize the mobile node**. This "step" will undoubtedly be more of a hike, and will require the implementation of advanced performance testing systems.

Finally, we are working on the development of drivers to establish direct BLE and Wifi connections, which will be directly integrated into gomobile-ipfs.

> You can find more info on this subject by reading this [blog post](https://berty.tech/blog/bluetooth-low-energy/).

If you would like to help out, we'd be thrilled to get assistance from our [community](https://berty.tech/community)!


{{<tweet id="1276140407190179853">}}
