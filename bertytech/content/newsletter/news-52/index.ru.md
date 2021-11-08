---
title: "Berty News #52"
date: 2021-01-15
aliases:
  - "/newsletter/weekly-52"
---

# News #52

Ахой Бертизен! 🏴‍☠️

And here we are in 2021! Happy New Year to all. We wish you happiness and health, free speech, privacy and love.

Since WhatsApp announced its privacy policy "changes" (or, yanno, obliteration thereof) and Elon's unusually on-point tweet, we've gotten countless messages asking us when we'll be up to bat.

Thanks – we hear you, and we stand with you. And with everyone tired of watching its privacy dropped off a cliff by every company that can profit from it. We'd love to tell you that Berty's as ready as you are.

To get to the point: **Berty Chat will be released in 2021.** When exactly? We don't know yet. What we do know: we will open Berty to you, the reader of this newsletter, in the next few weeks. We know you're trusting us with a vital service, so we'll need some time for careful QA and reiteration.

We hope you'll hang in there (not that we have our doubts 💛).

So let's get into our technical news!

May this year get us off our sofas and into a safe, savvy 2021. 🥂


## 🚀 Open Source

Highlights from the last few weeks:

- Finished the gomobile-ipfs integration in the main Berty app
- Released a first version of a native GUI mini app, mostly used for debugging: "bergy" 💻
- Refactor of the `pkg/bertymessenger` endpoints to improve consistency, ease of debugging and reliability
- Released a minimal app/tool to test various P2P scenarios in strange network configurations
- Dug into a new detected instability with BLE that causes disconnections every 30s under certain conditions
- QA session on new libp2p Tor driver
- Implement the new UI for multi-account management
- Improved long-running endpoints UX with progress bars (OpenAccount and CloseAccount)
- Continue working on the new push-notification service
- Various bug fixes:
    * a badger locking issue when closing the app in some cases
    * bullet-proof the mobile app routing state machine
    * fix timeouts issues on the TestBot
    * various UI fixes from Kanban (testers' feedback)
    * database get broken when the replication was enabled
    * network tweaks to improve 4G reliability
* Wrote a mini CLI tool that dumps the DB with a focus on human eyes and sort/diff tools
* Wrote a Flipper logging plugin to speedup development


## 🗣️ Сообщество


### Перевод

Last month, we wrote a blog article (https://berty.tech/blog/berty-translation/) to explain how to translate Berty. And...

**WOOO!** 🍻

We got way more involvement expected. We can't thank you enough for all your hours of invaluable, intelligent work.

**In under a month, four new languages are 100% ready** in the application – Italian, French, Russian, Spanish! And others are almost finished – Czech, Dutch, Portuguese, German!

You are nuts! Thanks again. Your work will let Berty reach across borders and institutions to help end the worldwide privacy drought.

There are still many more, so if your language has not been mentioned above, take 5 mins and pitch in:

👉 https://translate.berty.community/




### Хороший первый вопрос и Требуется помощь

Если вы хотите нам помочь, у нас есть две метки на GitHub, чтобы вы знали, где вы нам нужны: [**Хороший первый вопрос**](https://github.com/issues?q=is%3Aissue+is%3Aopen+org%3Aberty+label%3A%22good+first+issue%22+sort%3Aupdated-desc) и [ **Требуется помощь**](https://github.com/issues?q=is%3Aissue+is%3Aopen+org%3Aberty+label%3A%22help+wanted%22+sort%3Aupdated-desc+). Вы будете получать нашу вечную благодарность и, возможно, несколько стикеров. Просто скажите 😏


## 📚 Blogpost

👉 [Berty & Blockchain](https://berty.tech/blog/blockchain-berty)

## 💌 Упоминания

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">For those who are looking for <a href="https://twitter.com/hashtag/WhatsApp?src=hash&amp;ref_src=twsrc%5Etfw">#WhatsApp</a> alternatives, here you are a comparative from the <a href="https://twitter.com/berty?ref_src=twsrc%5Etfw">@berty</a> folks:<a href="https://t.co/80yxVdWlIO">https://t.co/80yxVdWlIO</a><a href="https://twitter.com/berty?ref_src=twsrc%5Etfw">@berty</a> is my go-to <a href="https://twitter.com/hashtag/dweb?src=hash&amp;ref_src=twsrc%5Etfw">#dweb</a> powered messaging app, but it&#39;s not released yet. Meanwhile, I use <a href="https://twitter.com/session_app?ref_src=twsrc%5Etfw">@session_app</a> for my family group and <a href="https://twitter.com/signalapp?ref_src=twsrc%5Etfw">@signalapp</a> elsewhere</p>&mdash; Carles Muiños (@zuzudev) <a href="https://twitter.com/zuzudev/status/1347502722174627842?ref_src=twsrc%5Etfw">January 8, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="fr" dir="ltr">allez voir ce que fait <a href="https://twitter.com/berty?ref_src=twsrc%5Etfw">@berty</a> et vous remettrez en question vos standards de privacy.</p>&mdash; Benoît THÉPIN (@BenoitThepin) <a href="https://twitter.com/BenoitThepin/status/1347536861846237188?ref_src=twsrc%5Etfw">January 8, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">And when is done: <a href="https://twitter.com/berty?ref_src=twsrc%5Etfw">@berty</a></p>&mdash; Godefroy Ponsinet (@gponsinet) <a href="https://twitter.com/gponsinet/status/1347290629483749376?ref_src=twsrc%5Etfw">January 7, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 🎉 Встреча с командой Berty

До дальнейшего уведомления мы отменяем все личные мероприятия в общественных местах, но скоро мы подойдем к экрану рядом с вами! 🚧🚧

* [Paris P2P #14](https://p2p.paris/en/event/monthly-14/) (_online_)

## ⚙️ Недавние изменения

* **Прочтите наши последние еженедельные примечания:**
    * [2021-01-11](https://github.com/berty/community/blob/master/meeting-notes/2021/Q1/2021-01-11--staff-team-weekly-sync.md)
    * [2021-01-04](https://github.com/berty/community/blob/master/meeting-notes/2021/Q1/2021-01-04--staff-team-weekly-sync.md)

  

