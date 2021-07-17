---
title: "Berty News #51"
date: 2020-12-18
aliases:
  - "/newsletter/weekly-51"
---

# News #51

Ahoy Bertizen! 🏴‍☠️

Yes, we know, no newsletter last week. We can explain!
- We gave two talks last week — not much time to properly prepare your dose of berty updates.
- The holidays are coming up fast. This year merits a special edition for everyone, spent with loved ones (safely) and healing from the year's hardships.

We'll take this moment to wish you happy holidays, and all the best for the end of the year. 💛



## 🚀 Open Source

Highlights from the last three weeks:

* Added **multimedia attachments** support (images, audio, gifs, etc)
* Added support for **encrypted invite links** (contacts & groups)
* Bootstraped a new **tracing tool** that can parse the output logs of a Berty application to transform it into clear reports
* **Split our two biggest packages** (bertymessenger and bertyprotocol) into two packages each, one for types, enums, helpers and one for the implementation
* Continued working on **push notifications**
* Improved dashboards, monitoring and infra reliability in general
* Improved reliability of the protocol by tweaking various mutexes
* Worked on a generic "proximity" driver to back our three bluetooth drivers
* Started working on a "connectivity" driver that will help the app to react on network adapter changes
* Continued working on **gomobile-ipfs integration**
* Sent a patch on gomobile's repository to improve caching configuration options
* **Refactored i18n handling** to support partially translated languages
* Add a `docker-compose` configuration that simulates an **Internet-optional Berty network**
* Start working on a **DNS-over-TLS-over-Tor** system
* Improve multi-platform support with fixes for Darwin and Android
* Various improvements in term of build tools, CI, build speed, etc
* Added **new target languages** for i18n, based on demands from the community + switch to full local names instead of two-letter codes
* Fixed various issues identified by testers

## 🗣️ Community

### Donating

As you know, we are a non-profit organization and we operate solely on donations. We are fortunate to be backed by large projects/companies and patrons.

Some time ago, we enabled **Github Sponsors** for people who'd like to support us. We haven't promoted it much yet, as we want to integrate tax deduction paperwork and cryptocurrency compatibility into the existing system. (Rolling this out is a major priority for the new year.)

That being said, what a rad surprise it was to discover that we already have two backers on the platform! Heartfelt thanks to you both.

If our work is important to you, you're welcome to send us a donation any time. 😇

🔥 https://github.com/sponsors/berty ⬅ Donate in a few clicks!



### Translating

You can help us by translating the Berty app + website. It will be much appreciated! 🧡

Interested? Check out our dedicated blog post to help you get started:

👉 https://translate.berty.community/

Latest languages added:
* ✅ Indonesian
* ✅ Esperanto
* ✅ Slovenian

### Good First Issue & Help Wanted

If you want to help us, we have two labels on GitHub to let you know where we need you: [**Good First Issue**](https://github.com/issues?q=is%3Aissue+is%3Aopen+org%3Aberty+label%3A%22good+first+issue%22+sort%3Aupdated-desc) & [**Help Wanted**](https://github.com/issues?q=is%3Aissue+is%3Aopen+org%3Aberty+label%3A%22help+wanted%22+sort%3Aupdated-desc+). You will have our eternal gratitude and maybe some stickers if you wish. Just saying 😏


## 📚 Blogpost

* 👉 [Help us to translate Berty](https://berty.tech/blog/berty-translation/)
* 👉 [Our talks at PBWS & IPFS 2020 Wrap Up](https://berty.tech/blog/2020-talks/)

## 💌 Mentions

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;m pretty sure, surveillance offices over the world will *hate* <a href="https://twitter.com/berty?ref_src=twsrc%5Etfw">@berty</a> for creating an uncompromisable, world scale distributed, locally encrypted messaging protocol on top of <a href="https://twitter.com/hashtag/ipfs?src=hash&amp;ref_src=twsrc%5Etfw">#ipfs</a> and <a href="https://twitter.com/hashtag/web3?src=hash&amp;ref_src=twsrc%5Etfw">#web3</a> tech. Falls back to BLE if China or <a href="https://twitter.com/hashtag/Turkey?src=hash&amp;ref_src=twsrc%5Etfw">#Turkey</a> pull the IP plug! <a href="https://t.co/PfpHgtSQ4Q">https://t.co/PfpHgtSQ4Q</a></p>&mdash; Stefan Adolf (elmariachi) 🧔 (@stadolf) <a href="https://twitter.com/stadolf/status/1337462369295994883?ref_src=twsrc%5Etfw">December 11, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Ok, if you didn&#39;t make it to the <a href="https://twitter.com/IPFS?ref_src=twsrc%5Etfw">@IPFS</a> year-end meetup today, you missed an amazing one.<br><br>This is a mindblowing list from <a href="https://twitter.com/berty?ref_src=twsrc%5Etfw">@berty</a> in just one slide.<br><br>There were similar feats of incredibleness from <a href="https://twitter.com/3boxdb?ref_src=twsrc%5Etfw">@3boxdb</a> / <a href="https://twitter.com/ceramicnetwork?ref_src=twsrc%5Etfw">@ceramicnetwork</a>, <a href="https://twitter.com/IPFSPinata?ref_src=twsrc%5Etfw">@IPFSPinata</a>, <a href="https://twitter.com/FleekHQ?ref_src=twsrc%5Etfw">@FleekHQ</a> and <a href="https://twitter.com/textileio?ref_src=twsrc%5Etfw">@textileio</a>.<br><br>Video soon... <a href="https://t.co/4WfPxWq7qO">pic.twitter.com/4WfPxWq7qO</a></p>&mdash; dietrich (@dietrich) <a href="https://twitter.com/dietrich/status/1337480750464192513?ref_src=twsrc%5Etfw">December 11, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Very cool WIP from <a href="https://twitter.com/berty?ref_src=twsrc%5Etfw">@berty</a> on Bluetooth <a href="https://twitter.com/libp2p?ref_src=twsrc%5Etfw">@libp2p</a> transports, <a href="https://twitter.com/tor?ref_src=twsrc%5Etfw">@tor</a> transport for increased privacy, and using <a href="https://twitter.com/IPFS?ref_src=twsrc%5Etfw">@IPFS</a> on mobile!! Everything OSS and improving the experience for all devs 🙏🎉❤️ <a href="https://t.co/M5M1UtvxiL">pic.twitter.com/M5M1UtvxiL</a></p>&mdash; Molly (@momack28) <a href="https://twitter.com/momack28/status/1337461437401235456?ref_src=twsrc%5Etfw">December 11, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 🎉 Meet the Berty Crew

Until further notice, we are canceling all in-person events at public venues – but we're coming soon to a screen near you! 🚧🚧

* [Paris P2P #13](https://p2p.paris/en/event/monthly-13/) (_online_)

## ⚙️ Recent Changes

* **Read our last weekly sync notes:**
    * [2020-12-14](https://github.com/berty/community/blob/master/meeting-notes/2020/Q4/2020-12-14--staff-team-weekly-sync.md)
    * [2020-11-30](https://github.com/berty/community/blob/master/meeting-notes/2020/Q4/2020-11-30--staff-team-weekly-sync.md)
  

