---
author: Camille
title: "Metadata in Mobile Messaging"
date: 2020-08-13
#image: "metadata-mobile-messaging.jpg"
image: "metadata-mobile-messaging.jpg"
categories:
  - techniczne
tags:
  - surveillance
  - prywatność
  - cybersecurity
description: "Wanna learn more on metadata in mobile messaging? Check this article!"
---

# Metadata in mobile messaging

In this article, we will talk about **metadata in mobile messaging**. It's a reasonably rare subject on the web. We thought we'd tell you about it because it's a topic that's close to our hearts. We've been fighting for two years to build a messaging application that preserves privacy. So we're going to explain why it's so important, and why it's necessary to limit their collections.

Understanding metadata, especially in mobile applications, is essential to understand the security, confidentiality, and anonymity of mobile messaging.

We won't give you a long introduction on what metadata is. You probably know that if the data is a letter, the metadata is the envelope and its associated information (address, time, date, size...). For those who want a very good sum-up, see what Edward Snowden wrote on his Twitter in 2015:

{{<tweet id="661302234068701188">}}

## Why encryption is not enough?

Before you dig into this section, if you don't know what encryption is, please read our article on the subject: https://berty.tech/blog/e2e-encryption/.


Let's put it very clearly: **encryption protects your message's content but not your confidentiality.** It's not just what you say that's sensitive in a message.

> Metadata is far more intimate than our conversations. It shows where we go, our interests, our relationships - it shows who we are.
> 
> -- <cite>Bruce Schneier</cite>


![image alt](https://i.imgur.com/kUbf7wo.png) Source: [FGDC.GOV](https://storymaps.arcgis.com/stories/724b222bf3424fc097b1b51d83cb5a0a)

### The WhatsApp example
Let's take an example: you probably know WhatsApp? Yes, one of the most popular applications in the world. Have you ever paid to use Whatsapp? It's a private company that needs to make a profit to keep server costs down, etc. So, how do Whatsapp runs if it's free? It's not an NGO that receives donations.

So maybe, the ultimate goal of WhatsApp is actually to advertise in the app? How to put relevant advertising if the content of the messages is not in clear text? That's where metadata come into place. They bright a lot of information about who you are, your consumption habits, your future purchases... and they are very accurate!

WhatsApp can claim loud and clear that end-to-end encryption is the default since 2016 but what if they leak metadata? Can we still considerate WhatsApp as a secure messaging application?

The catch with secure messaging applications is that message encryption is only part of the picture but does not guarantee your privacy.


## Why metadata are so important?

Let us take an example if I call you now on your phone. The government can know your name, first name, date of birth, where you are (triangulation), duration of our call, and legally. It may even ask to record the conversation from your provider. However, if we use an encrypted call, the government will not know its content.

BUT (yes, there is always a BUT) with all the information previously mentioned, a government can still deduce many things. Our relationship, the frequency of our conversation... Everything that the data formed from the data can determine.

You may tell yourself that you have nothing to hide and that it doesn't matter. See what EFF wrote on their page _[why metadata matters](https://www.eff.org/fr/deeplinks/2013/06/why-metadata-matters)_:
> * They know you rang a phone sex service at 2:24 am and spoke for 18 minutes. But they don't know what you talked about.
> * They know you called the suicide prevention hotline from the Golden Gate Bridge. But the topic of the call remains a secret.
> * They know you spoke with an HIV testing service, then your doctor, then your health insurance company in the same hour. But they don't know what was discussed.
> * They know you received a call from the local NRA office while it was having a campaign against gun legislation, and then called your senators and congressional representatives immediately after. But the content of those calls remains safe from government intrusion.
> * They know you called a gynecologist, spoke for a half-hour, and then called the local Planned Parenthood's number later that day. But nobody knows what you spoke about.

Awkward?

So metadata allows you to infer information that people don't have to have. And most importantly, imagine that you're a journalist, whistleblower, or lawyer that you have a significant client whose leaky trade would cost his company millions of dollars.

Or even worst: **People are killed based on metadata!**


{{< youtube id="PxwEwwlDM8Q" >}}

## Final thoughts:

Metadata are like pieces of a puzzle. If you only have a few pieces, you don't know anything about the final image. The more you put together, the clearer the picture becomes. So, metadata are really a precious data you should care about.

We hope you understand why we tend to drastically reduce their collection in Berty! If you are into the technical detail, please have a look to our [Protocol documentation](https://berty.tech/docs/protocol/) to check how we handle metadata in Berty.

If you liked this article, please let us know in the comments section below. It's mean a lot. 🧡

Pozdrowienia dla internetu!




{{<tweet id="1247901614666465281">}}
