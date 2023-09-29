---
author: aeddi
title: "Berty, Libp2p and Bluetooth Low Energy"
date: 2020-04-08
image: "2020-04-06-Berty-blogpost-Bluetooth-Low-Energy.jpg"
categories:
  - announcement
tags:
  - bluetooth
  - techniczne
  - open-source
  - ipfs
---

# Berty, Libp2p and Bluetooth Low Energy

As you probably know, we are developing Berty, a peer-to-peer messaging application with no regulatory authority and no metadata collection. It aims to preserve both the anonymity and the privacy of the users.

One of the features that we feel is essential for a peer-to-peer messaging application worthy of the name is the ability to communicate directly between devices (off-grid communication without internet access).

So yes, because we are sure that most (all?) of you are interested in this use case, with Berty,  you will have the opportunity to chat with your friends in the middle of the Sahara desert! :tada:

Joking aside, to celebrate the fact that our first transport allowing direct connections between devices is about to be released (:champagne:), let's retrace the long chronology of our work on the development of this feature.

## Back to 2018: Birth of the Berty project

![Back to the Future gif](rkbQMNjvI.gif)

At that time, after about a month of research split in two teams, one team testing Peer-to-Peer networking technologies, and another one experimenting with direct transport technologies - more precisely Apple MultipeerConnectivity - we agreed on implementing the following stack for our chat application:

- A [React Native](https://reactnative.dev/) UI.
- A monolithic [gomobile](https://github.com/golang/go/wiki/Mobile) block including a custom [go-libp2p](https://docs.libp2p.io/introduction/) network, all the cryptography management and chat intelligence (database, contacts management, sending/receiving events, etc...).
- Two native [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) drivers for Android and iOS bound to a libp2p transport to enable communication without internet access.

So we quickly assigned the tasks to the different members of the team according to their affinities, rolled up our sleeves and started to work seriously.

## Bluetooth Low what?

Okay, first of all, let's recall what Bluetooth Low Energy is.

Bluetooth is a wireless technology standard for exchanging data between electronic devices in a short range. To put it simply, we can say that there are two variants, two different standards: Bluetooth Classic (BR/EDR) and Bluetooth Low Energy (BLE).

Bluetooth Classic is designed to connect one master device with up to seven slave devices. The most relevant use case with this technology is to connect a headset, keyboard and mouse to one's computer. In this case, prior pairing is required on the part of the user.

Bluetooth Low Energy, as its name indicates, is more energy efficient, the downside being that it offers much less bandwidth (for example: impossible to transfer audio to headphones over BLE). The two main advantages of this technology in the context of a messaging application are:

- Devices can act as both master and slave at the same time, which is very peer-to-peer friendly. Above all, the maximum number of simultaneous connections is not defined in the standard. So only the device's hardware (chip) and software (OS/driver) implementations can limit the number of simultaneous participants in a conversation over BLE.
- It does not require prior pairing. Two users can simply open their application and start communicating without having to make any additional settings.

Knowing that, we naturally decided to choose this technology to develop our first peer-to-peer transport.


## BLE Driver for go-libp2p: R&D

### First prototype on Darwin: EZ WIN

In early fall 2018, we entrusted a member of our team with the implementation of the libp2p BLE transport.

The APIs made available by Apple for iOS and macOS (Darwin) were very easy to use, so we decided to start with this platform and managed to write a reliable transport for [go-libp2p](https://docs.libp2p.io/tutorials/getting-started/go/) and a native BLE driver within a few weeks.

Proud of the result, we were convinced that porting this feature to Android would go smoothly. We were already seeing ourselves with a working driver in a few weeks' time and planning to chill out in a deckchair drinking a cocktail.

That's always the way it goes when you do R&D in tech, isn't it?

### First prototype on Android: What could possibly go wrong?

![It's a trap!](giphy.gif)

#### Let's give it a try

In November 2018, we started implementing the Android version of the BLE driver and after several weeks of unfruitful development, we realized that the work was more complex than we thought (a lot more).

Indeed, the APIs for BLE on Android are much more error-prone for a developer new to their use. They are both more flexible but also much more complex than the Darwin ones. They offer less abstraction, especially regarding the concurrency of operations, the association of a device with its MAC address that rotates constantly (security feature of BLE), etc...

That's probably why several libraries are available on the internet, all claiming to make the development of BLE on Android "less painful", and trust our experience, if they are compatible with your needs, we highly recommend you to use them!

- [RxAndroidBle by Polidea](https://github.com/Polidea/RxAndroidBle)
- [Nordic Semiconductor's Lib](https://github.com/NordicSemiconductor/Android-BLE-Library)
- [iDevicesInc by SweetBlue](https://github.com/iDevicesInc/SweetBlue)

Unfortunately, we concluded that they did not fit our very specific needs, so we chose to continue the development using  the Android API directly.

We needed to put more effort into it, maybe to add another developer of our team on the subject?

#### Here Comes a New Challenger

![New Challenger](SkVml4jPI.jpg)

We decided to add a second developer on this issue. To get into the swing of things while doing something useful, he started by doing some documentation on our BLE driver for our team.

In a few days, he quickly developed a simple Android application based on initial prototype to be handmade with Java and Android's BLE APIs.

For the most curious among you, you can take a look at this outdated doc here: [berty-ble-service-v1-doc](https://crpt.fyi/Presentation)

And here you will find the quick and dirty "training application": [ble-prototype-v1](https://github.com/berty/ble-prototype-v1)

By working together on the subject, after a couple of weeks, they were able to set up an Alpha version of an Android-to-Android BLE driver bound to a libp2p transport! 🎉

You can take a look at this old version of the driver here: [berty/v1/ble/driver](https://github.com/berty/berty/tree/v1/network/transport/ble/driver)

![BLE dev setup](r17mW7jv8.jpg) *Four Android smartphones finally communicating through a ble-libp2p-transport*

We are now in January 2019, and even if we are happy with this first brick laid, we still have two major problems to solve:

- For the moment, the driver only works between Android devices, the few tests we did between Android and iOS made us realize the extent of the tweaking and tuning work to come.
- This preliminary version works but remains very unstable. Sometimes the connections fail in a loop, sometimes they work instantly, sometimes they remain stable for hours, sometimes they cut off after a few seconds, all without us being able to identify the causes.

Knowing that in our case of a secure chat application built on top of libp2p, the use of BLE transport is particularly intensive, except that the technology is designed to be energy-efficient and the downside is its low performance.

Not finding any answer in the official documentation about our instability concerns, we searched the web and found a lot of articles about unreliable BLE connections on Android and ways to deal with them.

You can take a look at the most relevant articles here:

- [Making Android BLE work -- Martijn van Welie](https://medium.com/@martijn.van.welie/making-android-ble-work-part-3-117d3a8aee23)
- [BLE in Android -- Stefan](https://stefanbossbaly.com/2018/08/06/ble-in-android)
- [A short story about Android BLE connection timeouts and GATT internal errors -- Andreas Schweizer](https://blog.classycode.com/a-short-story-about-android-ble-connection-timeouts-and-gatt-internal-errors-fa89e3f6a456)
- [4 Tips to Make Android BLE Actually Work -- Chee Yi Ong](https://punchthrough.com/android-ble-development-tips)


![Code sample](HydFvfow8.png) *Code sample from one of the best "make BLE on Android less painful" libs available out there*

The main information we retained from this research is that there are race condition issues that can occur at a low level that are not directly handled by the Android APIs, so it's up to the developer to handle them (without any documentation to assist them).

We estimate at this point that it will take our two devs another couple of months to re-architect all the code, test, improve and repair it for Android-to-Android before moving to iOS-Android.

#### The Roadmap Dilemma

![Daily Struggle - Two buttons](H1c6Dm9vU.jpg)

Two of our devs - roughly a third of our small team - have been working full-time on the Android driver for quite some time.

The concern being that we're falling behind on our roadmap, we initially planned to release an MVP in a few months and our codebase could use a good refactoring session.

Our Alpha version of the BLE driver on Darwin being functional, we decided to postpone the work on the Android driver to a later date — to make it simple: when we have time.

## IPFS Camp 🇪🇸

Related blog post: [Berty team at IPFS Camp, June 2019](https://berty.tech/blog/ipfs-camp/)

Being devout followers of P2P technology, it was important for us to participate in [IPFS Camp](https://camp.ipfs.io/), organized by the people behind [IPFS](https://ipfs.io/) in Barcelona at the end of June 2019.

The Protocol Labs team asked participants to propose lightning talks on topics related to IPFS and peer-to-peer. We proposed several, but the BLE was chosen by the organizers.

Despite our ongoing rush on the chat MVP, we quickly prepared a talk, a demo of the libp2p transport over BLE and a cleanup of the iOS native driver code.

While doing the demo and talking to people there, we felt that direct transportation was of interest to a lot of people in the IPFS community.

* 👉 [Talk slides](https://github.com/ipfs/camp/blob/master/LIGHTNING_TALKS/ipfscamp2019-lightningtalk-bluetoothle.pdf) (PDF)
* 👉 [Talk video](https://www.youtube.com/watch?reload=9&v=aaSFHxpwm9A)

## Mid-2019: Total refactor of the Roadmap

![Refracto everything](B1_hcXoDL.gif)

### The State of Play

Alongside our desire to work quickly on these subjects to deliver an usable direct transport to the community, we were aware of several things:

- For the transport to work on Android and iOS, developers obviously need to wire this driver with an IPFS node first. Until now, we were using a custom go-libp2p network, but if we want the community to benefit from our work, we need to make it more generic.
- Replacing the custom network of our v1 with a full IPFS node is not an easy task. We also realized that the architecture of our first version of the app was not as good as it should be. Taking into account everything we learned during the development of this v1, it would be quicker and cleaner to start from scratch rather than trying to fix our current codebase.
- BLE has the advantage of being compatible between different platforms, but it is extremely slow. It may be suitable for sending small text messages, but it is totally unsuitable for exchanging photos, let alone videos. However, alternatives exist. We will develop this point below.
- As well as making our network layer generic, we could also make the layer above generic too (the one that connects the chat layer to the network while taking care of all the cryptographic operations).

### The Plan

After a few days of thinking about the situation, we finally decided to drop our v1 and start working on v2 with the following roadmap:

- When most of the points below will be well-advanced (early 2020 by our estimate), we will start working on direct transport again.
- No more custom go-libp2p network! We will work on [gomobile-ipfs](https://github.com/ipfs-shipyard/gomobile-ipfs) a generic library to run a complete IPFS node on mobile. In this way, the community will benefit from our work and we will be able to benefit from their contributions in order to optimize and adapt this library to the specific needs of mobile platforms.
- We will implement an open-source golang port of [Orbit-DB](https://orbitdb.org/) named [go-orbit-db](https://github.com/berty/go-orbit-db). This distributed database over IPFS will be used it to sync, store and order our messages.
- We will totally redesign the core of the app, document it and make it generic as well. This layer will be built on top of go-orbit-db and will take care of all the cryptographic operations. We will package everything up in a convenient SDK named [Berty Protocol](https://github.com/berty/berty) and provide it to developers wishing to develop secure distributed applications.
- And on top of that, obviously, we will implement Berty Messenger using the Berty Protocol.

![Berty Stack](rkyZNGsP8.png)


* 👉 [Berty Protocol: Non-technical presentation](https://www.youtube.com/watch?v=fnl7Omsbpbw) (english subtitles available)
* 👉 [Berty Protocol: Technical presentation](https://www.youtube.com/watch?v=jtAtIsyUn0A) (english subtitles available)
* 👉 [Berty Protocol docs](https://berty.tech/docs/protocol)
* 👉 [Berty Protocol repo](https://github.com/berty/berty)

## Early 2020: How are things going?

![Sonic waiting](HkQ7J7iD8.gif)

So, now it's time! But since our whole team is still actively working on the different parts of the stack, we have recruited a new developer to be entirely in charge of implementing direct transports.

As is our tradition, he started by developing a test application on Android to get his hands on it. For the curious: [ble-prototype-v2](https://github.com/berty/ble-prototype-v2)

Since the BLE is not suitable for sending large content and we have to start the implementation of the drivers from scratch, we thought about starting by implementing more efficient alternatives first.

> *Which ones? And why "first" if they are more efficient?*

Apple Multipeer Connectivity (AirDrop) and Android Nearby are two technologies based on the same principle: two peers discover each other and set up their connection using BLE. Then, when everything is ready to get serious, they establish a direct Wifi connection (no need for a router) to continue the dialogue in optimal conditions. So as you can imagine, the connection between the peers is not only more reliable but also much faster. It becomes possible to exchange large files with the bandwidth offered by Wifi and, on top of that, their API offers much more abstraction and the drivers would be much easier to implement.

> *Okay cool, perfect! But what the point of implemeting a BLE driver in this case?*

There is also a downside with these two technologies: they are not interoperable. This means that Apple Mutlipeer Connectivity will only work on Darwin devices and Android Nearby will only work on Android devices.

And since it can happen sometimes (we promise you it can) that two people can be friends despite the fact that they don't use devices of the same brand, we plan to reserve the use of the BLE driver to create an universal bridge between platforms: Android and Darwin... and why not even Linux and Windows if the community gives us a little help. :wink:

> *Okay, that's a plan! Didn't you tell us at the beginning of the article that you were close to releasing something?*

![Alice waiting](giphy2.gif)

Yup, we did! 😎

### Our prognosis:

- **Multipeer Connectivity:** Implementation in progress! We think and we hope that we will have it ready and available in gomobile-ipfs within a month! :tada:
- **Android Nearby:** One or two months after the release of the MultiPeer Connectivity driver.
- **BLE for Android and iOS:** No date defined and no duration estimated, but it will be the 3rd step.
- **BLE for Linux and Windows:** Probably the wisest thing to do would be to wait for the reference versions of the drivers to be implemented (iOS and Android), but if the community is too impatient to wait for us to work on it, we won't stand in its way. :smirk:

For the curious (who are definitely very curious), our new developer has also developed a test app for Multipeer Connectivity: [multipeer-connectivity-prototype](https://github.com/berty/multipeer-connectivity-prototype)

I'm told in my earpiece 👨‍💼 that while I'm writing this article, he has also just successfully wired his prototype with the v1 of Berty! Here is [the link](https://github.com/berty/berty/pull/1832#issuecomment-610859687). So all we have to do now is to tweak it and integrate it into gomobile-ipfs.

If you would like to lend a helping hand, we'd be delighted to receive assistance from our [community](https://berty.tech/community)! [![Contribute](r1VGRZsv8.gif)](https://berty.tech/contribute)
