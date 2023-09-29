---
title: "Berty News #49"
date: 2020-11-13
aliases:
  - "/newsletter/weekly-49"
---

# News #49

Ахой Бертизен! 🏴‍☠️


The Berty newsletter comes out on Friday the 13th. Coincidence? Nope, we don't think so. 🙃

A little word about the team, as usual: Everybody is well. This second lockdown looks like an infinite Sunday, but the mood of the team is still good. We hope you're good too. 🧡

Take care, see u in 2 weeks!

## 🚀 Open Source

Highlights from the last two weeks:

* **Import/Export account**
* **MultiAccount**: New feature allowing to have multiple accounts on a single device, especially useful during testing
* **GroupMonitor**: Component to display some debugging states directly from conversations (P2P state, syncing state, etc)
* Start switching to **gomobile-ipfs** on Berty
* Bootstrap the new **push notifications** service
* Add a temporary fix to force the app to use p2p circuits to improve 4G<->4G connectivity
* Bootstrapped a standalone repo to help finish **integrating tor** in the app (build issue on iOS) - https://github.com/berty/go-libtor/issues/16
* Add metrics to most infrastructure components to have a better understanding of what's happening
* Continue importing the old generic BLE driver in the new codebase
* Implement an **OmniSearch command** to search just about anything (a peer ID, a hash, an IP, a multiaddr, a message, a conversation, pubsub topic, account, etc)
* Continue preparing the project for a TestFlight **open-beta release**
* Create an integration binary launched on each commit (and periodically in production) to test the protocol, its dependencies, and Internet
* Various refactors: JS store to support delaying the go daemon startup; in-app notification driver; advanced i18n usages (singular-plurals, expansions)

## 🗣️ Сообщество

### Перевод

We finally found a satisfactory translation solution: Crowdin!

You all know how language can be a barrier to access. Help us translate the application and website to spread Berty's message!

🇧🇩 🇧🇬 🇧🇷 🇨🇳 🇨🇿 🇩🇪 🇩🇰 🇪🇬 🇪🇸 🇫🇷 🏴 🇬🇷 🇭🇺 🇮🇩 🇮🇱 🇮🇳 🇮🇷 🇮🇷 🇮🇹 🇯🇵 🇰🇪 🇰🇷 🇰🇵 🇱🇹 🇲🇩 🇷🇴 🇲🇲 🇲🇰 🇲🇽 🇲🇾 🇳🇱 🇳🇬 🇳🇴 🇳🇵 🇵🇭 🇵🇰 🇵🇱 🇵🇹 🇷🇺 🇸🇦 🇸🇪 🇸🇰 🇸🇮 🇹🇭 🇹🇷 🇹🇼 🇺🇦 🇻🇳 🇿🇦 🇿🇦 🇰🇪 🇳🇬 🇱🇻

👉 http://berty.crowdin.com/


### Хороший первый вопрос и Требуется помощь

If you want to help us, we have two labels on GitHub to let you know where we need help: [**Good First Issue**](https://github.com/issues?q=is%3Aissue+is%3Aopen+org%3Aberty+label%3A%22good+first+issue%22+sort%3Aupdated-desc) & [**Help Wanted**](https://github.com/issues?q=is%3Aissue+is%3Aopen+org%3Aberty+label%3A%22help+wanted%22+sort%3Aupdated-desc+). You will have our eternal gratitude and maybe some stickers if you wish. Просто скажите 😏


## 📚 Blogposts

We released two blog posts this week. Please have a look!

👉 [Art For Privacy](https://berty.tech/blog/art-for-privacy/) 👉 [Introduction to Cybersecurity](https://berty.tech/blog/cybersecurity-fundamentals/)

## 💌 Mention

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/berty?ref_src=twsrc%5Etfw">@berty</a>&#39;s latest news ❤️<br>Always interesting<a href="https://t.co/jzzBZjszf3">https://t.co/jzzBZjszf3</a></p>&mdash; Depado (@Depado_) <a href="https://twitter.com/Depado_/status/1307752027699720192?ref_src=twsrc%5Etfw">September 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 🎉 Встреча с командой Berty

До дальнейшего уведомления мы отменяем все личные мероприятия в общественных местах, но скоро мы подойдем к экрану рядом с вами! 🚧🚧


## ⚙️ Недавние изменения

* **Прочтите наши последние еженедельные примечания:**
    * [2020-11-09](https://github.com/berty/community/blob/master/meeting-notes/2020/Q4/2020-11-09--staff-team-weekly-sync.md)
    * [2020-11-02](https://github.com/berty/community/blob/master/meeting-notes/2020/Q4/2020-11-02--staff-team-weekly-sync.md)
    * [SOW Update - Gomobile IPFS - 11/02](https://github.com/berty/community/blob/master/meeting-notes/2020/Q4/2020-11-02--sow-gomobile-ipfs.md)

