---
author: Pierre
title: "How Berty Works #1: IPFS"
date: 2020-06-23
#image: "HBW1.jpg"
image: "HBW1.jpg"
categories:
  - 技术方面
tags:
  - 技术方面
  - ipfs
  - how-to
description: "We will explain why we chose to build Berty over IPFS."
---




# How Berty Works #1: IPFS

Welcome to the first part of this blog series that will get into everything you need to know about Berty and how it works! In these articles, we’ll introduce you to the inner workings of Berty, answer some frequently asked questions, and explain some of our biggest decisions. In this first installment of the series, we’ll focus on why we chose **to build Berty with IPFS.**

## Our Ultimate Goal

As you may know, Berty aims to build a censorship-proof messaging application that will protect your privacy. Your messaging app probably promises to keep your messages “private,” right? Unfortunately, it’s not that simple!

There are three main concerns with mainstream messaging apps:
* All messages exchanged by users pass through and are stored on central servers. This means that your messages and their metadata are all in one place, making them more vulnerable to surveillance and censorship.
* Not all apps promise end-to-end encryption (E2EE). Some messaging apps use E2EE to prevent messages stored on central servers from being decrypted by anyone other than the sender and recipient. Unfortunately, not all apps offer this functionality, and others make it an opt-in setting.
* Not all popular apps are open-source. This makes it challenging to check whether messages are appropriately encrypted and whether all communications are actually secure.

In light of these problems, we decided to create Berty: an open-source messaging app that uses E2EE everywhere, and that relies on no central servers. We want you — and no one else — to own your data.


> Read our goals: [berty.tech/challenges#goals-of-berty](https://berty.tech/challenges#goals-of-berty)

### Why Is Centralization Problematic?

![Servers illustration](https://i.imgur.com/qaMpVOE.jpg)

Let’s get into the nitty-gritty details for a moment. Most of the time, the servers are owned by an IAAS provider such as Amazon Web Services, Google Compute Engine, or Microsoft Azure. Companies that develop a centralized messaging application generally rent servers (hardware) from these IAAS providers and are responsible only for configuring them and installing the software that will allow messages to be exchanged between their users.

Behind the familiar logos of mainstream messaging apps are these third-party IAAS providers that face little accountability when it comes to the use of their services. So, by using these apps, you’re placing your trust in companies with little accountability for how they’ll protect your data — regardless of their Big Tech clients’ Terms of Service. These providers’ compliance instead depends on their honesty (🙄), or their level of compliance with a regulatory authority, such as a government.

All that aside, it still remains much easier for a government or a hacker to block or attack central servers, even if they’re well-secured. This has happened several times in the past, and some governments are still blocking access to certain services to their citizens.

**_tl;dr:_** Compared with a distributed architecture like Berty’s, a centralized model is less complex to implement and offers some performance advantages, but it creates a single point of failure for your privacy. It’s much more vulnerable to censorship and surveillance, and it requires that users trust the actors involved — _blindly_.


> If you are wondering how Internet censorship is done, we urge you to read [this blog post](https://townsendcenter.berkeley.edu/blog/internet-censorship-part-2-technology-information-control).

## Building a Messaging App Without Central Servers

How can we get rid of central servers for passing messages between users? The solution is quite challenging: [Distribution](https://berty.tech/challenges#preserving-privacy-and-securing-communication-in-a-distributed-environment).

> Want to brush up on some vocabulary? Distribution, centralization, and decentralization are clarified in a [dedicated blog post](https://berty.tech/blog/decentralized-distributed-centralized/).

In a nutshell, with Berty, there’s no need for servers because no user is merely a client. Each peer assumes the roles of both the client and the server on a P2P network.

In a centralized system, exchanged data doesn’t transit through a single point and is not stored in a single location.

Thus, it’s much more complicated to monitor and collect data from this kind of network, especially if the network carries data from a large number of different applications. In this context, the metadata and messages of a particular Berty user would be like a drop in the ocean.

Another critical point is that it’s much more complicated to block a P2P network. One of the only solutions is to set up Deep Packet Inspection to analyze the traffic (expensive), try to recognize a specific protocol (complex), and block it. It’s also virtually impossible to shut down since it would be necessary to turn all peers available on the network off and prevent anyone from relaunching a peer on one of their terminals.

At the beginning of the project, we decided to study the different technical solutions available to us. Each Berty developer isolated themselves in their corner to build a proof of concept (POC) of what they thought fit best. In the end, there were three main choices:
* 100% home-made
* using BitTorrent
* using IPFS / libp2p

_Let’s try to break down each one..._



### 🏠 1. All home-made

![Code illustration](https://i.imgur.com/Uq2oPoq.jpg)

This seemed like a good option since there are no limitations (you can implement any idea, using any technology). In short, there wasn’t much of a constraint compared with what we had in mind.

**Problems:**
- A lot of code to design, write, and maintain.
- No previous experience (so, there was a big chance of making the same mistake that others made).
- Launching a P2P app is pretty hard with no peers. 😅
- No active community to help or to start with.

**Conclusion:**
* It was a great leap into the unknown. Too big. We’re not fans of variables (funny, given that we’re developers!). We had to go with something that already existed: a community with a network infrastructure and experience. That way, it would be easier to focus on our main goal of implementing the messaging app we’ve always dreamed of.

### ⚙️  BitTorrent

![BitTorrent Logo](https://i.imgur.com/kruZWFj.png)


If you know the phrase “peer-to-peer,” you probably know [BitTorrent](https://www.bittorrent.com/)! It’s a well-known P2P data transfer protocol. The protocol was designed in April 2001 and implemented in the summer of 2002 by the programmer Bram Cohen. BitTorrent is a mastodon of P2P!

Despite its large network size, BitTorrent’s architecture is primarily for torrent-sharing using a tracker. Even if the messaging app could be implemented using BitTorrent, we felt we needed something more generic.

**Problems:**
- Designed for the specific purpose of torrent-sharing
- Not as generic, modular, and complete as we needed

**Conclusion:**
* It was necessary to check out other options.


### 📘 IPFS

![IPFS Logo](https://i.imgur.com/xmrplgH.png)

Another project that caught our eye was the [InterPlanetary File System](https://ipfs.io/), a peer-to-peer protocol for the distribution of addressable content via hypermedia. Although the IPFS project is younger than BitTorent, it’s already mature.

The project seemed all the more impressive because Protocol Labs — the people behind IPFS — had the great idea to split the project into several pieces and make all the code of the networking part of IPFS independent by providing libp2p: a library with all the necessary tools to create P2P applications.

This library is exceptionally well-designed, modular, and robust. And each part is entirely interoperable and interchangeable with custom code. This gives us the ability to extend and customize existing functionality to fit our specific needs, while being backed by the experience and the community of IPFS.

On top of that, one of the leading implementations of this library is available in golang, which is:
- a technology that we’ve mastered
- a language that can be compiled on any platform, including mobile platforms (using gomobile)


## IPFS vs. LibP2P

![Libp2p logo](https://hackmd.io/_uploads/Byf7xxnsU.png)

For Berty v1, we decided to implement a custom network using libp2p instead of using a complete IPFS node. This meant that we were using the same underlying library as IPFS — but customized to such an extent that our node would not be fully interoperable with a traditional IPFS node.

During this phase, we started developing the first version of our direct transports, allowing two devices to communicate offline through a Bluetooth connection. You can find more info on this blog post.

In the first version of Berty, all our communications were synchronous: Users could send messages to each other only when they were online and connected to one another.

It was obviously a lousy situation for a messaging application, and while trying to figure out how to fix it, we came up with a design very close to what [Orbit-DB](https://github.com/orbitdb/orbit-db) Javascript library was already doing.

Orbit-DB makes it possible to organize data flexibly on IPFS. The library is built on top of the IPFS log: an immutable log based on content stored on IPFS.

After some discussion, we concluded that it would be wiser to port Orbit-DB in golang rather than implement a very similar solution from scratch.

When comparing a custom libp2p network with full node IPFS, we stumbled on some important insights:
* Using a full IPFS node would allow us to better benefit from and contribute to the IPFS existing network than with a custom node.
* We could develop a generic mobile version of IPFS that would be useful for the community and take advantage of their contributions to improve the project.
* The other projects we’d develop (direct transport drivers, go-orbit-db, etc.) would also be more generic and would thus reinforce collaboration with the community.

So we decided to abandon our custom network to start Berty V2 from scratch based on a full IPFS node and to launch the following projects:
* [gomobile-ipfs](https://github.com/ipfs-shipyard/gomobile-ipfs):
    * An IPFS node adapted to mobile platforms and bound with native languages. Our goal is to optimize it for mobile constraints and to add direct transports based on Bluetooth Low Energy, Apple MultipeerConnectivity, and Android Nearby.
* [go-orbit-db](https://github.com/berty/go-orbit-db):
    * A golang port of the original Javascript library. We’d like the two versions to be fully compatible in the long run.




## What About...

### Using a Blockchain?

It’s a recurring question. _Why didn’t you create a messaging system on a blockchain?_

The answer is straightforward: Blockchains need consensus, the Internet, and wait times for validation — the things we wanted to avoid in Berty. Above all, blockchains are much more suitable for validating transactions without a central authority than for exchanging messages anonymously.

In the end, the architecture we’re developing is very different from blockchain. **The Berty Protocol is built with the “no-consensus” philosophy from start to finish, and it can operate without Internet access**.

### ...What about Textile?

![Textile Logo](https://i.imgur.com/FHK1POE.png)

Good question!

Textile provides a set of open-source tools allowing for rapid development of a decentralized application over IPFS, including mobile platforms.

We like their work and would suggest it for most people who ask us how to get started with IPFS for their projects. It’s a great turnkey solution, but in our specific case, we needed more flexibility.


👉 [textile.io](https://textile.io/)

## Next Steps

To sum it up, here’s what Berty is up to these days: Using IPFS, we’re working on [gomobile-ipfs](https://berty.tech/docs/gomobile-ipfs/), [go-orbit-db](https://github.com/berty/go-orbit-db), and the direct transport drivers to build the P2P network that will be used in our messaging application.

At the moment, one of our concerns is that we have to implement a large part of our stack ourselves, even though IPFS is already complete.

Another point is that our protocol requires specific features that aren’t native in IPFS and that are essential for our infrastructure to function optimally.

So, we need peers with better uptime than mobile app and fewer network/performance constraints to ensure high availability. We therefore expect that Berty Desktop users will take on this role and that the user community will set up servers/highly available peers with the sole purpose of helping the network.

## 💭 Before You Go, Some Things to Consider

Please recommend or share this article if you found it useful! Also, let us know your thoughts — it motivates us to write knowing people find value in our content.

And finally, subscribe to our newsletter if you want more reads like this or updates on the Berty project!


{{<tweet id="1247901614666465281">}}
