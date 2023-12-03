---
title: "Berty News #72"
date: 2023-08-18
aliases: ["/newsletter/weekly-72"]
---

# News 72


> 📰 TLDR; </br>
 The Berty team has been busy with changes and improvements to the Berty Messenger. The protocol behind the Berty Messenger has been separated to a stand-alone protocol called the Wesh Network, and [Berty.tech](http://www.berty.tech) has been updated. The team is working on getting some partnerships using Wesh Network!


</aside>

# **Welcome back!!**

Hi community, long time not spoken. I'll update you on what has happened since the last time.

## **Who am I and why did the newsletters stop?**

Let me start with explaining who I am.
I am Luke, better known as LFGaming. I have been helping the Berty team around since about the first of February 2021. I’ll be taking on the job of writing the upcoming newsletters and will do my best to post them on a regular basis.

### **Why did the newsletters stop?**

The team got it very busy with other things, and newsletters where not a priority so they slowed down and then stopped. Let's take a look at that!

## **Before we go into what's new**

Since the last newsletter some people have left and some have joined the Berty team. Some of the members who left have worked for or with Berty for years and are now ready for a new part of their life. We wish you all the best!!

And we can't forget who has joined the team ofcourse, strengthening the team, bringing new ideas and skills to the table. I hope you have a good time and can be there when when the Wesh protocol is fully developed to be used in applications around the world!

## **What's changed**

### **Wesh Network**

The protocol behind the Berty Messenger has been separated to a stand alone protocol called: The Wesh Network 🕸. Take a look at the [Wesh Network](https://wesh.network/) website or read through the [vision](https://wesh.network/vision) of Wesh Network.  This is done so everyone can use this protocol for their own projects when they want to. Which means that in the future we might be able to see new apps and programs with a save protocol.

This means the code of Berty messenger and Berty Protocol into two separate repos: [https://github.com/berty/berty](https://github.com/berty/berty) and [https://github.com/berty/weshnet/](https://github.com/berty/weshnet/). -   Some code found in the Wesh network repo is still specific to Berty Messenger, such as the management of push notifications. In order to package the protocol, the team is working on completely isolating the messenger application from the protocol.

Next to that there are two blogposts posted:

- The first one is a [Introducing the Wesh Network Toolkit](https://wesh.network/posts/introducing-the-wesh-network-toolkit).
- The 2nd ✍️ blogpost  [Wesh “Hello World” App](https://wesh.network/posts/wesh-hello-world-app), by jefft0, the very talented Technical Product Manager and Developer.
- ✍️ Our 3rd blog post “Wesh App with Persistent Storage” [https://wesh.network/posts/3](https://wesh.network/posts/3) has arrived. Here Jeff talks about the use of persistent storage on disk and the implications it has on the key store and libp2p node.
- ✍️ Blogpost #4 has been written, [Wesh App: Share Contact and Send Message](https://wesh.network/posts/share-contact-and-send-message)
- ✍️ Blogpost #5 is here - "Flight of a Byte", [https://wesh.network/posts/flight-of-a-byte](https://wesh.network/posts/flight-of-a-byte)

### **Berty Messenger**

While the newsletters where gone, the team has not sit still. They have been busy changing code, fixing bugs and making overall improvements to the Berty Messenger. Some of these changes include:

- 😴Performance issues: The app slows down as the volume of groups and messages increase.
- 😴 The team is working on implementing decentralised replication servers. These will allow asynchronous communication and keep messages until a peer comes back online.
- ✈️ The team has implemented a connectivity driver. This will prevent the connection between peers from failing if network conditions change. For example, switching from a wi-fi connection to a cellular one.
- 👻 Implement the ability to launch Berty Messenger without also launching the Wesh Network right at the start of the app. This will make loading the app faster so this is a great benefit for everyone.
- 🔔 The team is busy with changing API calls so notifications get send and processed by the Berty app, not by the Wesh Network
- ✔ The member bar has been re-enabled that will show you if other users are connected in a group chat.
- 🐛 Fixed a bug that caused Berty Messenger not to discover local peer after switching of network
- 🐛 Found the root cause of a critical bug that causes some messages to be lost. Our awesome techs are working to fix it.
- 🔗 The Berty app will now recognise a contact link even if the app is closed, this makes it even easier to make connections with your friends.
- 🦋 Fixed more UI inconsistencies.
- 🐛 And a lot more other bugs have been fixed.
If you find any bugs please do not hesitate to let the team know at [the issues page](https://github.com/berty/berty/issues).

### **Berty.tech**

The main website of Berty has gotten a little update. Go and check it out: [Berty.tech](https://berty.tech/). If you find any bugs, suggestions or want to see changes, you are welcome to fix it yourself or leave a issue at [the issues page](https://github.com/berty/www.berty.tech/issues).

## **GNO & Berty**

### ****What is Gno and gno.land?****

*[Gno.land](https://gno.land/)* is a platform that allows developers to write smart contracts and other blockchain apps in Gnolang (Gno), an interpreted version of Golang (Go). This enables web2 developers to easily contribute to web3 and build a more transparent, accountable world.

### ****Gnolang funding****

Gnolang has a [*Funding and Grants Program*](https://github.com/gnolang/ecosystem-fund-grants), where they look for passionate contributors who are interested in building new projects, dApps, tooling, infrastructure, or smart contract libraries in Gno.land.

And Berty got a grant from them for bringing GNO to mobile!

### ****GnoMobile****

The team is working hard on making GnoMobile.A framework that makes it easier for developers to build [Gno.land](http://Gno.land) applications on mobile devices. You can find the repository here: *[Github](https://github.com/gnolang/gnomobile)*. There are already some previews videos made, if you want to take an early look: *[UI Demo](https://www.loom.com/share/9537299635564761bc3a6d627411e33a)*. But you can always build it locally and see the latest version!

## **Old but important news**

### 🎬 **Building Web3**

If you are new to Berty, Protocol Labs contacted Berty to shoot a documentary about the project as part of a series on Web3 builders. The team is super honoured and the result is very cool.
If you want to learn what the team does at Berty (and see who are behind this project) then definitely go and watch.
A huge THANK to Protocol Labs for everything. 💙
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/cC-tXnMyiBc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>