---
title: "Berty News #71"
date: 2022-02-02
aliases:
  - "/newsletter/weekly-71"
---

# News #71

Hey, you!

It's been a long time since we've been in touch... our bad. As always, we've been pretty busy. This is the limitation of small teams. 🙃

To sum up: We still have the goal of releasing Berty very soon but we faced a stability issue (see below) and it delayed all that... grr. We reasonably hope that we'll be able to say more in a month or so.

In the meantime, here are the latest advances and some news from the ecosystem.

Cheers


## 📱 App progress recap

### App Stability

We had identified for some time that using Berty in 4G causes a lot of instability. As we were testing with identical phones running the same version of the app, we first thought that the inconsistency in the app's performance came from a greater or lesser number of parallel connections (which can be very annoying for a p2p app, right? 😅).

It took us a long time of deep investigation before we understood that the problem was only occurring on a specific mobile operator used by half the team and since in almost every testing session, at least one member of the team using this operator was present, our results were almost completely skewed. 😬

By proceeding dichotomously, we finally discovered that reusing the same port for several connections using the SO_REUSEPORT socket option on that specific operator causes the various connections to fail and close. Quite hard to communicate with a closed connection...

Now that the problem has been identified, we can move forward. We are in contact with 4G experts and the concerned mobile operator to see what can be done.

If this can happen on one operator out of 4 in France, we would like to know if it was also the case for other operators abroad. So we will soon set up a github repo with a test tool so that everyone can launch it on his side and post the result. बने रहें!

### Berty Desktop

Yes, we are working on a desktop version. This is probably the first time it has been mentioned. Why Desktops? They are devices connected longer than a mobile, so they will bring more stability to the network. And of course, for the user, it's a big benefit: you can share an account between your smartphone and your desktop. Of course, we are still at the proof of concept stage, but we will regularly update our progress.

### Front Team

* Xavier worked like crazy to fix the UX and UI bugs of the application and some nice features like adding reactions to messages.
* Clem's, Norman, zôÖma worked an upcoming surprise. We can't tell more other than it will be very helpful for understanding p2p on mobile.




## 🚀 About the Berty ecosystem


### Berty Builders Meeting with Valist.io

![](https://i.imgur.com/Hft3G3r.png)

We recently met with Alec M. Wantoch, the cofounder of Valist.io.

For those who are interested in what Valist does, we put you the (very good) presentation made by IPFS: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/7ak6PQPDBkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We had a great exchange, and we invited him to speak at an upcoming Berty Builders Meeting so that he could introduce you to Valist.

And he said yes!

So, we are so pleased to invite you to join us on Feb 23rd!



:point_right: More info: https://www.meetup.com/fr-FR/berty-hq/events/283709091

### New page on the website: berty.tech/compare

We attempted for a while to build a big overview of all messaging applications available on the market. But to be honest, it’s particularly hard to be extensive, tricky to be objective, and awful to maintain. It evolves in the blink of an eye and our work became incorrect over time. So we thought it might be easier to explain to you why Berty is unique and give you tools to compare for yourself.

:point_right:  https://berty.tech/compare



### Translating

You can help us by translating the Berty app + website. Berty Team and the community will much appreciate it!

👉 https://translate.berty.community/

> Think your language won't have much of an impact? Berty wants to be accessible to everyone, including those who are marginalized from mainstream media. Please help us reach them!

![image alt](https://media.giphy.com/media/26BRDvCpnEukGhmHC/giphy.gif)

### Good First Issue & Help Wanted

If you want to contribute, we have two labels on GitHub to let you know where we need you: [**Good First Issue**](https://github.com/issues?q=is%3Aissue+is%3Aopen+org%3Aberty+label%3A%22good+first+issue%22+sort%3Aupdated-desc) & [**Help Wanted**](https://github.com/issues?q=is%3Aissue+is%3Aopen+org%3Aberty+label%3A%22help+wanted%22+sort%3Aupdated-desc+). You will have our eternal gratitude and maybe some stickers. Just saying 😏

![image alt](https://media.giphy.com/media/14jQC2AONxNBHq/giphy.gif)

## Mentions


{{<tweet id="1482898438832652291">}}



## 🎉 Meet the Berty Crew

Upcoming venues will be announced there:

* IRL Meetings:
    * [Paris P2P](https://p2p.paris/)
* Online Meetings:
    * [Berty Builders Meeting](https://www.meetup.com/berty-hq/)



