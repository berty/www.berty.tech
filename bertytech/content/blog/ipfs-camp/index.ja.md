---
author: pierre
title: "Berty team at IPFS Camp, June 2019"
date: 2019-08-15
image: "berty_at_ipfs_camp.jpg"
categories:
  - crew
tags:
  - meetup
---

On June 27-30, 2019, Berty team visited the [IPFS Camp](https://camp.ipfs.io/), a hacker retreat organized by the people behind [IPFS](https://ipfs.io).

> InterPlanetary File System (IPFS) is a protocol and network designed to create a content-addressable, peer-to-peer method of storing and sharing hypermedia in a distributed file system.

We were impressed by the organization of the event; the schedule was packed with interesting courses, talks and workshops in a short time frame. Also, the food was delicious, and there was a spa, a pool, and even an archery range! We spoke a lot with the IPFS team and community, and met many cool people there. The courses helped to better understand the IPFS concepts, usages and implementation.

{{< img src="image1.jpg" >}}

## How is Berty related to IPFS?

At Berty, we’ve made our proof of concept using [libp2p](https://libp2p.io), a library that IPFS is built on top of, and made by the same team, [Protocol Labs](https://protocol.ai). We are now focused on rewriting the app's backend, which will include a vanilla IPFS node that will manage all the network-related things and the file sharing layer. We'll implement the Berty protocol on top of that IPFS node, providing a user-friendly way of managing identities (account and devices), managing contacts and communicating with them through encrypted / authenticated messages. Also, we’ll tweak the node, making it more suited for mobile.

{{< img src="image4.jpg" >}}

## Some interesting topics

One of the formats presented on the conference were [Deep Dives](https://github.com/ipfs/camp/tree/master/DEEP_DIVES) — tackling a common problem for a couple of hours and then presenting it to the other attendees. Here are a couple of dives in which the Berty team participated:

**“How to optimize IPFS on mobile platform”**, led by [Carson Farmer](https://github.com/carsonfarmer) from [Textile](https://textile.io). Here’s the [video from the presentation](https://www.youtube.com/watch?v=RfXRn8RTLh4&feature=youtu.be). The purpose of this Deep Dive session was to list the problems encountered with IPFS on mobile and to think about possible solutions. Problems addressed:

- limited resources (CPU, RAM, data (3G/4G), battery)
- app killed / put in background frequently
- short time frame when app launched or resumed to reconnect to IPFS network, discover peers, init services, etc...

The issues were similar to those we faced, so we started a shared repository with the Textile folks and plan to provide guidance and good practices to the wider IPFS community. The repo is private at the time of writing, but will be open source later.

**“Private content on IPFS”** led by [Dr. Ian Preston](https://github.com/ianopolous) from [Peergos](https://peergos.org/). You can [watch the video here](https://www.youtube.com/watch?v=oiEhyw17_OI&feature=youtu.be). It focused on exploring the likelihood of [Messaging Layer Security](https://messaginglayersecurity.rocks/) (MLS) being usable in a distributed environment. In such context messages might arrive in the “wrong” order as the network can be partitioned and merged afterward. Compared to an implementation based on a centralized architecture, a longer retention of the previous decryption keys can be required for reading the messages.

{{< img src="image3.jpg" >}}

## Our presentations

[Antoine](https://github.com/aeddi) presented the **architecture of the Bluetooth component** used in Berty: [here’s the video](https://www.youtube.com/watch?v=aaSFHxpwm9A).

### BLE demo on the Sci-Fi Stand:

* We showcased the communication of two devices using the Berty app in “airplane mode” through Bluetooth.
* People were interested and had the opportunity to sign up for the beta version of Berty.
* Our team members were interviewed by [Raúl Kripalani](https://github.com/raulk), the video will be posted in [IPFS Camp repository](https://github.com/ipfs/camp/#-sci-fi-fair).

{{< img src="image5.jpg" >}}

## The takeaways

A project that was born after visiting the camp is [Paris P2P](https://p2p.paris/en/), a monthly meetup of people who are interested in peer-to-peer technologies and cryptography. The first event [already took place](https://www.meetup.com/Paris-P2P/events/263089573/), and it was fun! If you are in Paris or planning to visit, we’ll be happy to see you at the [upcoming events](https://www.meetup.com/Paris-P2P/).

We’ve learned that other people face some of the same issues the Berty team does, and it was interesting to discuss the common issues and think of solutions; also, talked about the future improvements that IPFS itself plans. We are now communicating directly with more IPFS peers. We’ve also opened our organization to more people and provided the preview access.

Also, here are the reports by other teams who were at the camp: by [Peergos](https://peergos.org/blog#ipfs_camp_new_features_july_2019_) and by [Textile](https://medium.com/textileio/ipfs-camp-2019-the-highlights-and-takeaways-2b3cb4f42513).

{{< img src="image6.jpg" >}}

{{<tweet id="1162296349624360960">}}
