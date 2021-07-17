---
title: "Berty News #47"
date: 2020-10-16
aliases:
  - "/newsletter/weekly-47"
---


# News #47

Ahoy Bertizen! 🏴‍☠️

 We hope you are comfortably settled. Ready for newsletter #47?

All good on our side. We're sprinting towards releasing our beta + we had an important meeting at the beginning of the week with a sponsor. It went great, and the collective stress is coming down 😅. We discussed a lot of things, including the peer-to-peer vision of the project and increasing state-sponsored censorship and surveillance in China.

And you, how are you doing? 🧡

## 🚀 Open Source

Over the past two last weeks, we have been working on:

* **UI refactor of the main view**: try to move the sent requests and some popups into virtual conversations to keep this important stuff in its own unique view
* **Replication UI**: add a new onboarding step specific to beta sessions that suggests enabling Berty's replication server to help everyone test this feature
* **Unit tests** around the logs' replayer + start thinking about an "account import/export" feature which can be very useful during development to "partially reset" an account without resetting contacts and identifiers
* **go-libp2p-tor-transport**
* **Removing BuildKite** so that our pipelines are centralized in GitHub actions
* the **integration of the log replayer** that offers database replay as soon as we detect an abnormal app state
* the **improvement bots** in general – eg. a new devtool entry to list all the optional features
* Brainstorming to get a **better UI** (simple & intuitive)
* Brainstorming to get a **"Network Map"** (similar to IPFS WebUI) built into the app to help people understand what's happening under the hood
* Writing a **custom driver for prometheus** to log protocol metrics


### Dashboard

We are creating a dashboard to have real time metrics on the different nodes we have (rendezvous server, replication server, betabot, etc ...) that will allow us to know for example the number of peers connected and usage stats (bandwidth utilized and such).

It will probably look like this:

![](https://i.imgur.com/BQQxvC2.png)


## 🗣️ Community

* More than 4,000 commits!

![](https://i.imgur.com/MgFK9Mx.png)


* **Good First Issue & Help Wanted**: If you want to help us, we have two labels on GitHub to let you know where we need help: **Good First Issue** & **Help Wanted**. You will have our eternal gratitude and maybe some stickers if you wish. Just saying 😏


## 💌 Mention

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Here’s the best project to learn from - these guys are really good coders - In Europe <a href="https://t.co/SBYfT0C2I1">https://t.co/SBYfT0C2I1</a></p>&mdash; Edgar (@EdgarArout) <a href="https://twitter.com/EdgarArout/status/1283442695814483973?ref_src=twsrc%5Etfw">July 15, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 🎉 Meet the Berty Crew

Until further notice, we are canceling all in-person events at public venues – but we're coming soon to a screen near you! 🚧🚧

* ~~October 7th, 2020:~~ [Paris P2P #12](https://p2p.paris/en/event/monthly-12/) - *postponed*
* October 21-23, 2020: [PWG 2020](https://www.planetiers.com/worldgathering/)

## ⚙️ Recent Changes

* **Read our last weekly sync notes:**
    * [2020-10-12](https://github.com/berty/community/blob/master/meeting-notes/2020/Q4/2020-10-12--staff-team-weekly-sync.md)
    * [2020-10-05](https://github.com/berty/community/blob/master/meeting-notes/2020/Q4/2020-10-05--staff-team-weekly-sync.md)
    * [SOW Update - Gomobile IPFS - 2 Oct](https://github.com/berty/community/blob/master/meeting-notes/2020/Q4/2020-10-02--sow-gomobile-ipfs.md)

