---
title: "Berty News #29"
date: 2020-01-31
aliases:
  - "/newsletter/weekly-29"
---

Hello from Belgium! 🇧🇪

As [announced](https://berty.tech/blog/berty-at-fosdem-2020/), we are live from Brussels for the FOSDEM 2020 edition. We are so excited to be a part of this congress! 🤩

We'll try to give you live news as much as possible on our [Twitter](https://twitter.com/berty). Stay tuned!


By the way, we're still on for a nice beer, just give us a shout! 🍻

In this meantime, happy reading!

# Current Work

## Tech

### GoMobile-IPFS is finally available!

We've been mentioning this for a long time, and wait for it... the good news is here: the **Gomobile-IPFS repo has been open-sourced**. Antoine and Guilhem have been working on it for many months, with the aim of releasing it to the community.


It's now available on the IPFS Shipyard:

👉 https://github.com/ipfs-shipyard/gomobile-ipfs

The repo is brand new: check it out, give feedback and contribute!

Enjoy, guys! 💙


### Berty Protocol

Antoine and Morgane are writing a new documentation for the protocol. This is a mandatory step in order to be reviewed by the community or audited. We'll keep you informed 🙂

Guillaume updated the Groups Metadata implementation to match the latest protocol specs. He is now working on message encryption and storage.

### Front

A big focus for our front team is the MVP version of Berty-Chat. In order to do that, Clément, Norman and Godefroy are integrating some features (eg: _Create an account_, _Create a conversation_, _Contact Request_) and Clément finished the styles.

Norman improved the OrbitDB client bridge used in the demo to make it easier to use, even more reliable and tested.

Godefroy reimplemented the gRPC bridge as a part of the _Create an account_ feature. He also generated a mocked client for the latest version of the protocol.


### Build Infrastructure


Norman started implementing a macOS agent on MacStadium to build iOS applications on CI. He had trouble with installing Xcode and had a back-and-forth with the support, but in the end it was because the machine was banned from Apple services. The issue is solved now.

He then went on to implement the actual iOS build on buildkite, but was stuck at signing problems. So, Guilhem tried to fix the iOS build certificates and had trouble managing the provision of profiles. No worries, they are on it!


## Ops


### Two new blog posts are availables!

We have published two new articles on our website:
* Here are our [takeaways from Paris P2P Festival](https://berty.tech/blog/berty-at-p2p-festival/)
* [Meet us at FOSDEM 2020!](https://berty.tech/blog/berty-at-fosdem-2020/)


### Collaboration

* **Ark Team** Manfred, Zooma and Zaraki went to meet the Ark team to discuss a possible collaboration. They find Berty potentially interesting to P2P networking stack. There's an idea to combine Berty, Ark, IPFS to create end-user projects. The Ark team also has interesting thoughs on the UX of the P2P app.

* **Nomadic Labs (Tezos blockchain)** [Nomadic Labs](https://nomadic-labs.com/) has a very strong experience in all aspects of distributed voting and DAOs. So the idea is to learn more about the subject in order to find a solution to lose control of our releases. Manfred met them, and it was agreed that we would list the topics we could present to their technical staff.



## Welcome, Morgane!

Ladies and gentlemen, please give a round of applause to Morgane, as she joins our team as technical writer.

Morgane did a bachelor degree at Science Po Paris (applied mathematics and social sciences) and she is now attending a master's degree in cryptography from Paris-Saclay while she studies computer programming at 42. In short, she's just the person we needed!

We're delighted to have her on the team! Welcome, Morgane!

👉 [Morgane's LinkedIn](https://www.linkedin.com/in/morgane-guerreau/)


## News Digest: Paris P2P festival & Berty
* [Ethereum France (🇫🇷)](https://www.ethereum-france.com/ethereum-au-paris-p2p-festival/)
* [Journal du Coin (🇫🇷)](https://journalducoin.com/bitcoin/p2p-festival-atelier-zeronet-libtorrent-avec-lola/)
* [Sahiwal.tv (🇺🇸)](https://sahiwal.tv/p2p-festival-zeronet-and-libtorrent-workshops-with-lola-2/)
* [IPFS blog (🇺🇸)](https://blog.ipfs.io/weekly-71/)
* [Cryptoactu(🇫🇷)](https://cryptoactu.com/bitcoin-un-apprentissage-necessaire/)
* [P2P Foundation (🇺🇸)](https://blog.p2pfoundation.net/the-p2p-festival-in-paris-unite-the-peers/2020/01/05)
* [P2P Foundation (🇫🇷)](http://blogfr.p2pfoundation.net/2020/01/08/paris-p2p-festival-du-pair-a-pair-et-des-communs/)
* [Bitcoin.fr (🇫🇷)](https://bitcoin.fr/events/paris-p2p-festival/)
* [Les communs d'abord (🇫🇷)](https://www.les-communs-dabord.org/p2p-festival-un-rassemblement-autour-du-peer-to-peer-8-12-janvier-2020-paris/)
* [Connaissance des Arts (🇫🇷)](https://www.connaissancedesarts.com/evenement/paris-p2p-festival/)
* [Hello Asso (🇫🇷)](https://www.helloasso.com/associations/osmose-collective/collectes/paris-p2p-festival-0-bootstrap)
* [La fabrique des mobilités (🇫🇷)](https://wiki.lafabriquedesmobilites.fr/wiki/P2P_Paris_Festival)
* [Aimergences (🇫🇷)](https://aimergences.com/paris-p2p-festival/)
* [Blog OCTO (🇫🇷)](https://blog.octo.com/compte-rendu-du-paris-p2p-festival/)
* [Journal du coin (🇫🇷)](https://journalducoin.com/bitcoin/participez-au-peer-to-peer-p2p-festival-de-paris/)



## Meet the Berty Crew

* 1-2 February 2020: [FOSDEM](https://fosdem.org/2020/) (Brussel, BE 🇧🇪)
* 5 February 2020: [Paris P2P #6](https://p2p.paris/en/event/monthly-6/) (Paris, FR 🇫🇷)
* 4 March 2020: [Paris P2P #7](https://p2p.paris/en/event/monthly-7/) (Paris, FR 🇫🇷)
* 23-25 April 2020: [PWG 2020](https://www.worldgathering.planetiers.com/) (Lisbon, PT 🇵🇹)

## Weekly Sync

Read our Weekly Sync: [2020-01-31](https://github.com/berty/mgmt/blob/master/meeting-notes/2020/Q1/2020-01-31--staff-team-weekly-sync.md) [2020-01-24](https://github.com/berty/mgmt/blob/master/meeting-notes/2020/Q1/2020-01-24--staff-team-weekly-sync.md)


