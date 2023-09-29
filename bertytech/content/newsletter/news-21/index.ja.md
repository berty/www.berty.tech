---
title: "Berty Weekly #21"
date: 2019-11-15
aliases:
  - "/newsletter/weekly-21"
---

Before starting with the news, we just wanted to tell you that Tuesday was the birthday of our lead dev & UX designer! Come on, sing it with us: "Happy birthday Alexandra". 🎉


# Current Work

## Tech:

### OrbitDB
Guillaume streamlined OrbitDB checks in access controllers, we no longer verify the payload content, thus allowing to pin the DB contents on 3rd parties.

### Gomobile-ipfs
Guilhem and Antoine found the best approach to allow gomobile-ipfs to handle incoming and outgoing connections with a given peer using streams. We'll extend the CoreAPI with two endpoints: 
* One that registers a handler for a given protocolID that will return a Unix Domain Socket for any incoming connection
* Another one that allows dialing a peerID and returns a Unix Domain Socket

## Ops:

### Audits
This week, Pierre looked for people who could audit Berty from a cryptography/security point of view. It is important for us to have external advice and other ideas for improvement. If you know people who can perform audits of either the code or the architecture, please send us an email! 😉

## Weekly Sync

Read our [Weekly Sync](https://github.com/berty/mgmt/blob/master/meeting-notes/2019/Q4/2019-11-15--staff-team-weekly-sync.md)
