---
title: "Berty News #58"
date: 2021-05-14
aliases:
  - "/newsletter/weekly-58"
---

# News #58

Ахой Бертизен! 🏴‍☠️

How is the Berty Family doing?

On our side, things are going well. We're pretty focused right now, which is great.  Berty is progressing well, especially on the android part, which was a bit late. We know how impatient you are to test Berty, and we promise to work hard on it. We plan to put a public roadmap - which will show the progress of the work and the blocking points before the next steps. We hope you'll like it and we'll talk to you soon.

Without futher ado, let jump in our dose of Berty News!


## 🚀 Open Source

Here's what we've been up to the last few weeks:

* Android: remove dependencies to JCenter/Bintray: ([PR](https://github.com/berty/berty/pull/3308))
* Android: add auto-make feature to Android Project (Gradle): ([PR](https://github.com/berty/berty/pull/3309))
* Android: new footer in conversation and status bar ([PR](https://github.com/berty/berty/pull/3302))
* Android: continue investigating the cause of the very frequent freezes on the Android app
* Android: fix dropdown picker not scrollable ([PR](https://github.com/berty/berty/pull/3294))
* App: design MultiMember QR ([PR](https://github.com/berty/berty/pull/3282))
* App: start markdown support implementation ([PR](https://github.com/berty/berty/pull/3284))
* App: enable `Add member` button in MultiMemberSettings ([PR](https://github.com/berty/berty/pull/3288))
* App: add .crypto tld support ([PR](https://github.com/berty/berty/pull/3293))
* CI/CD: defined new infra testing tool, wrote docs, setup flags/process
* CLI: display startup info on `berty daemon` ([PR](https://github.com/berty/berty/pull/2979))
* CLI: rework p2p & relay CLI flags
* CLI: add berty service-key helper command ([PR](https://github.com/berty/berty/pull/3296))
* **BLE driver: implement iOS<->Android driver** 🎉
* BLE driver: stabilized dis/reconnections logic and general stability
* BLE driver: Start changing how we get the remote device unique ID
* BLE driver: changed the handshake flow to fix various issues ([Branch](https://github.com/berty/ble-wip/tree/sync-server-client-work))
* Gomobile-IPFS: continue integration with Berty
* Tyber: add handshake traces support
* Tyber: use gRPC metadata to store the trace ID
* Tyber: add `Subscribe` system that can add `Step` to running `Trace` on specific `Event`
* Tyber: add Tinder and ack `Event` support
* Tyber: use `Subscribe` and `Event` logs in message-related `Trace`
* P2P: investigate 4g-4g issues with libp2p/IPFS
* P2P: start integrating relay v2
* P2P: merged Tinder rework ([PR](https://github.com/berty/berty/pull/3139))
* P2P: test to integrate p2p-circuit v2 (experimental) to see if there are any improvements
* Protocol: investigate perf issues in bertymessenger
* Protocol: add token_id in AuthServiceCompleteFlow ([PR](https://github.com/berty/berty/pull/3286))
* Tor: improve Tor transport and fix crashes that occur on libp2p node restart

## 🗣️ Сообщество

### Berty Builders Meetings

As we announced in a special newsletter last week, we have created a new Rendez-Vous: the Builders' Meetings. 👷

![](https://i.imgur.com/ZqX2qeK.gif)

These events were designed with a single purpose in mind: to show you what the community is doing with Berty and its protocol.

This first meeting was hosted by TheoXD and members of the Berty team. Theo presented VoteID: a decentralized and anonymous voting application.  He showed us his amazing project and how he uses the Berty protocol in it. It was really great and we'll keep you posted for the next event and topic.

![](https://i.imgur.com/mPMIqJq.jpg)

### Перевод

Вы можете помочь нам, переведя приложение Berty + сайт. Мы будем очень признательны!

👉 https://translate.berty.community/

> Думаете, ваш язык не окажет большого влияния? Berty хочет быть доступным для всех, в том числе для тех, кто изолирован от основных СМИ. Пожалуйста, помогите нам связаться с ними!

### Хороший первый вопрос и Требуется помощь

If you want to contribute, we have two labels on GitHub to let you know where we need you: [**Good First Issue**](https://github.com/issues?q=is%3Aissue+is%3Aopen+org%3Aberty+label%3A%22good+first+issue%22+sort%3Aupdated-desc) & [**Help Wanted**](https://github.com/issues?q=is%3Aissue+is%3Aopen+org%3Aberty+label%3A%22help+wanted%22+sort%3Aupdated-desc+). Вы будете получать нашу вечную благодарность и, возможно, несколько стикеров. Просто скажите 😏

## 🎉 Встреча с командой Berty

До дальнейшего уведомления мы отменяем все личные мероприятия в общественных местах, но скоро мы подойдем к экрану рядом с вами! 🚧🚧

* [Париж P2P](https://p2p.paris/)
* [Berty Builders Meeting](https://www.meetup.com/berty-hq/)

## ⚙️ Недавние изменения

* **Прочтите наши последние еженедельные примечания:**
    * [2021-05-10](https://github.com/berty/community/blob/master/meeting-notes/2021/Q2/2021-05-10--staff-team-weekly-sync.md)
    * [2021-05-03](https://github.com/berty/community/blob/master/meeting-notes/2021/Q2/2021-05-03--staff-team-weekly-sync.md)
