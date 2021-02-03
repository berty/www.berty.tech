---
title: "Berty News #48"
date: 2020-10-30
aliases:
  - "/newsletter/weekly-48"
---

# News #48

Ahoy Bertizen! 🏴‍☠️

We are delighted to see you again for this newsletter. On the program this week: Update on the beta progress, PWG event debrief, and a citation on Reddit!

Speaking of Reddit, many of you joined us after our mention on the sub r/PrivacytoolIO. If this is the case, hello and welcome! 🧡

Little ritual: A few words about the team. Overall, everyone is doing well. Elizabeth/@ekelen, one of our front developers, has finished her mission with us. She is in Canada and we bid her a fond farewell. She's still insistent on adding a bunch of emojis to our newsletters though. 🙄

Another important point to mention: The French government has announced a new lockdown starting yesterday. It's not great for the mood but it's just the way it is. Health above all. 💪 We've already been working remotely since March, so we consider ourselves old hands at long-distance productivity.

Take care, see u in 2 weeks!

## 🚀 Open Source

Highlights from the last two weeks:
* Played around with various methods to improve 4G/4G connectivity:
    * using single-hop tor connection
    * forcing unreachable peer state on libp2p
    * tweak libp2p/ipfs configuration in general
* Created a new view on the app that shows the network list with peer connections + display tags, details, and available unused routes. 🚦
* Handled some edge cases with the multipeer-connectivity (iOS/Mac BLE) driver. 🐜
* Flattened the JS code to make it easier to contribute, faster to build and easier to update its dependencies. 🧹
* Integration of the new libp2p-tor-transport in the Berty app. 🚃
* Refactored the bridge to use the same initialization code used on CLI for everything related to ipfs, libp2p, orbitdb and gRPC. 👐
* Created a new account import/export feature that will be available from the app but also for the bots, to allow keeping the same accounts even if we need to migrate an account from a server to another or from a major version to another. 📋
* Integrated an external service to allow anyone (including non-tech) to help us translate the app in all languages. 🌎
* Import/Export Account is now implemented in mini; this week we're taking it to mobile! 📱
* Finished integrating go-libp2p-tor-transport on mobile (there is a build issue because we have two concurrent versions of openssl at the same time) 🔒
* Started implementing the new UI 😎
* Added a devtool that communicates with the SHM on iOS to investigate possibilities for file-system encryption based on a native pincode ✉️
* We've already got the multipeer-connectivity driver to create Bluetooth networks on iOS/macOS. Now we're adding a secondary generic BLE driver that could allow communication between all distributions and architectures! 🌉
* Add healthcheck test and setup alerting to monitor betabot, testbot, and rdvp services 🤒


## 💌 Mention

* [Reddit PrivacyToolsIO](https://www.reddit.com/r/privacytoolsIO/comments/jhyenh/sent_a_friend_signal_they_replied_with_this_link/):

![](https://i.imgur.com/ysKSKZZ.png)

## 🗣️ Community

### PWG 2020
We participated in the Planetiers World Gathering 2020. This annual event brings together the actors of tomorrow's world – those who think long term + sustainability. We participated from Paris as the event was hosted live from Lisbon. Such are the times. 😷

We've been eagerly anticipating this congress and its opportunities for exchange and some (we think) well justified self-promotion. A messenger like Berty must be "ready for tomorrow", looking beyond the headlines for the needs of the future.

We dropped in on some great talks: "Can technology save us?"; "Human rights: we must fight for each other". Manfred also presented Berty during a start up pitch session:

![](https://i.imgur.com/uRj3Nnk.jpg)

### Reddit

We were quoted in Reddit (see above). Several people discovered Berty and made interesting remarks about Berty. We took the opportunity to make an issue gathering all the comments in the repo /community. We say it every time: thank you for your feedback and advice. We're takers!

👉 https://github.com/berty/community/issues/108

### Good First Issue & Help Wanted

If you want to help us, we have two labels on GitHub to let you know where we need help: **Good First Issue** & **Help Wanted**. You will have our eternal gratitude and maybe some stickers if you wish. Just saying 😏


## 📚 Blogposts

A new article arrived on the blog! We talk about the closed beta and our progress.

👉 [We released our closed beta!](https://berty.tech/blog/closed-beta-berty)


## 🎉 Meet the Berty Crew

Until further notice, we are canceling all in-person events at public venues – but we're coming soon to a screen near you! 🚧🚧


## ⚙️ Recent Changes

* **Read our last weekly sync notes:**
    * [2020-10-26](https://github.com/berty/community/blob/master/meeting-notes/2020/Q4/2020-10-26--staff-team-weekly-sync.md)
    * [2020-10-19](https://github.com/berty/community/blob/master/meeting-notes/2020/Q4/2020-10-19--staff-team-weekly-sync.md)
    * [SOW Update - Gomobile IPFS - 20 Oct](https://github.com/berty/community/blob/master/meeting-notes/2020/Q4/2020-10-02--sow-gomobile-ipfs.md)

