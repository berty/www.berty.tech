---
author: alex
title: "Berty's UX/UI"
date: 2020-05-04
image: "berty_ux_ui.png"
categories:
  - UX
tags:
  - technical
  - UX
  - UI
---

# What we did & Why we did it

This article aims to provide a comprehensive tour of how Berty's app UI works and why we took some UX decisions.

_Disclaimer: This article shows prototype screens, while I'm writing these lines the app is still under active development, some visual elements or wording may change before the app is released. Also, some features displayed in the following screens may not be available on day 1._

I've tried to make this simple, and you'll probably understand things on your own by watching the screens before I have time to start talking about a subject, if it's happens it means UI is designed well enough for you to get it without any explanation. 😀

<br/>
<br/>

## First, some background

Back in 2018, when we started working on the Berty project, the main goal was to have an MVP asap. Building a P2P chat was the priority, we spent almost no time on the design. At this point, I just made a few screens to help the team visualize how the app will work and answer some basic questions like "_which info is displayed on which screen?_" and "_where should I put this button?_."

![Old app screens](berty_old_app.png)

* This initial app worked, and we even had a few dozen beta users testing it for a few months.
* They gave us precious feedbacks like:
    * "_Where is my QR code?_."
    * "_How do I start a conversation?_."
    * "_Why don't you have a dark mode?_."
* After a few months, we decided to trash V1 of the app. It had fulfilled its purpose: testing the theory. "Can we build a mobile chat app over IPFS ?"

It was now time to start the real deal and for me the opportunity to start Berty's app UI from scratch

<br/>
<br/>

## Lessons we've learned from v1 (that defined v2 requirements):

### Having zero contact to talk to is not funny
* Berty doesn't ask for your phone number, email or any personal information (i.e., Facebook account) and doesn't access to your contact list on your phone.
* So when you land on the app for the first time, you have nobody to talk to.

![Old app empty screens](berty_old_empty.png)

👉 We need to make it feel like you're not lonely out there.

### Having an easy contact request process is not simple

* The more significant struggle our users faced was adding a new contact. We get a lot of questions like:

    * _How do I add a contact?_
    * _Why do I need to send an invite?_
    * _Where is my key?_
    * _What is my key?_
    * _Why do I need a key?_

👉 We need to make it super easy and efficient

### "Message received acknowledgment."

* Users are used to the little checkmark next to a message (✔️).
* If there is nothing, they thought something wrong happened.

👉 We need to 'visually prove' to the user it's working fine

### Contact list vs. Conversation list

* In v1, we had a contact list and a conversation list. They looked quite the same.
    * 50% of the users found it confusing.
    * 50% didn't get why we bothered with the contact list in the first place 😀

![Old app screens](berty_old_contact.png)

👉 We got rid of the contact list and have to make it clear and usable

<br/>
<br/>

## New UI: the team's expectations

We are a new app, nobody knows us.

* We don't have a second chance to make a first impression.
* We are building an app that will launch in 2020, let's make it look like it.
* On the bright side, we don't have to deal with design or code legacy (for now).

Good UX can solve many problems:

* No need for a tutorial/home tour
* Fewer support requests
* Handle nicely the fact it doesn't correctly work at first
* Fix the UX problems users faced for the v1 of the app
* Fits all screen sizes naturally

![Old screen](screen_simulator.jpg)

Because Berty is a fully encrypted and distributed messaging app, people tend to assume it's complicated and will need a long setup or a tech background to be able to use it. They firmly believe this before they even installed the app on their smartphone.

To reach global adoption, it's imperative that anyone can use the app quickly and feel comfortable with it within a few seconds... and start to recommend it to their friends.

And what about a pretty UI?

> "If it looks nice, people think it works well."




<br/>
<br/>

## What I think the new UI should be

* **Simple**: Not too much information displayed at once, all unnecessary stuff removed.
* **Intuitive**: Easy to use. Info/buttons displayed at the logical place.
* **Clear**: Only one possible interpretation for each button.
* **Unified**:
    * Only one way to do something.
    * One way to display a kind of information.
    * One place to find something.
* **Modern**: We are a new app, let's do something cool
* **Nice, colorful, playful** to match Berty's identity
* **Memorable**: As there are many messaging apps out there, we need to make sure when users open the app, they know where they are.

**Most important, I wanted to conceive the app I would want to use daily and enjoy it.**

To achieve this goal: I decided to go for bold colors, everything rounded, adopt this new modal trend. When I started working on it, it was entirely new, now we've seen it everywhere.

> "People will download the app for the promise, they will use it if it's enjoyable."

<br/>
<br/>

## However

... we do need to comply with some industry standards, users already use messengers and have unconscious expectations.

We believe a messaging app chore screens "conversation list" and "conversation messages" need to feel familiar, that's why we went for round avatars, put names next to them, used the right side, and left side bubbles for messages, etc.

No rocket science here. This is industry standards. Maybe one day, they will change, but for now, we decided to comply with them to ensure our new users some familiarity.

<br/>
<br/>

## Android vs. iOS

The app front is made using react-native. We have one app, one design for both platforms. It means the UI had to be generic enough to adapt to both platforms.

The following screens only display iOS screens; the android screens will look the same, with a few exceptions to comply with each platform standards.

![IOS Android screens](berty_ios_android.png)

<br/>
<br/>

## The Onboarding Step

Onboarding a mobile app is a crucial step. Effective onboarding is a critical element of good user experience. The value proposition needs to get through as quickly as possible.

* Make it as fast as possible: Users want to start using the app asap. No one wants to be onboarded forever.
* Make sure every kind of user recognizes itself since screen 1. That's why we display a choice between 2 "profiles" at the beginning.
* We compelled ourselves to only one information/action/authorization per screen max.
* Never offer more than 2 choices to a user:
    * For example, "authorize now" or "skip and do this later" rather than "yes," "no," "maybe later."

<br/>

### Onboarding - Performance mode

This mode is made to have the best ratio between usability and privacy. We suppose the vast majority of our future users will pick this mode. The users should not feel they have less security than in the privacy mode.

![Onboarding - Performance mode](berty_onboarding_performance.png)


<br/>

### Onboarding - Privacy mode

Because we're creating a secure application, users had to quickly get the feeling that the app is safe. And, we know that some users instead prefer less usability for optimal protection (like switching off notifications).

![Onboarding - Privacy mode](berty_onboarding_privacy.png)


The screens displayed above are not a final version, each step will feature an animated illustration, large icons displayed in the background are just placeholders.

<br/>
<br/>

## Main screen

* It's a big deal because that's the screen at the center at the ap:
    * you land here every time you open the app
    * links to every other screen
    * displays lots of information
* As Berty is a messaging app our main screen is the **message list**

![Main screen](berty_main.png)

* For conversation list, we keep things simple :
    * Avatar
    * Name
    * Last message (first few words, date, and status)
    * A blue check icon eventually if the contact is verified

<br/>
<br/>

## Modals on the main screen

* When the user is on the main screen, there is a large "➕" button at the bottom of the screen; it's used for the main actions:
    * Add a contact: Scan a QR code or Share my Berty ID (shown above for iOS/Android screen comparison)
    * Requests sent
    * New group conversation

![Modals](berty_modal_plus.png)

<br/>
<br/>

## Add a contact

* To add a contact, you need to scan his Berty's QR code.
* Scanning a code sends a contact request to the user.


### Scan a QR code

![Scan a QR code](berty_scan.png)


<br/>
<br/>

## Requests sent

You can see all the contact requests sent.

![Requests sent](berty_requests_sent.png)


<br/>
<br/>

## Group conversations

### Create a new group

![New group](berty_new_group.png)

Because it's a multi-step process, I found it interesting to have multiple modals on top of each other. It's easy to see your progression in the process and also to go back on a previous step as they are always visible at the top of the screen.

<br/>

### Receive a group request, accept and join the conversation

![New group](berty_join_group.png)


<br/>
<br/>

## Conversation detail

### The different statuses of a message

Berty uses a distributed network. It means it's harder to rely on the network to know if a message has been received and so on. It differs from a centralized architecture in which your central server "knows everything." Users are really used to have this kind of informnation.

Here is how we tackle this issue:

![Message status](berty_message_status.png)

It's understandable for the user to know what is happening with its messages.

<br/>

### Conversation settings

If a user clicks on a contact name or avatar, he can access conversation settings.

![Conversation settings](berty_conversation_settings.png)

<br/>

### Group conversation

![Group conversation](berty_group_conversation.png)

<br/>
<br/>

## Contact vs. Conversation

As mentioned above, we decided to get rid of the contact list. When you add a new contact, a new conversation is created automatically.

However, we decided to make a distinction between:

* **Contacts that you can talk to**. That's easy: there is a conversation with them.
* **Contacts you can't speak to yet**:
    * the ones that sent you a contact request you have yet to accept.
    * the one you've sent a contact request they have yet to accept.

For those simple contacts, we use a distinctive silhouette with the avatar above that we use:

   * for contact requests received
   * for contact requests sent
   * also for the illustration when one of the above it's empty

![Contact silohouette](berty_contact_silhouette.png)

* You can also notice that contact requests received are displayed at the top of the main screen, with a colored background (so there is a hight contrast you can miss them), when sent contact requests are displayed at the bottom of the screen with a regular white background (just in case you want to consult them)
* This distinctive silhouette is also used in other places when we want to represent information related to a contact:
    * for our own "Berty ID."
    * on 1-1 conversation settings, when you click on the contact
    * on a group conversation, to display the members

![Contact silohouette other uses](berty_contact_silhouette_other_uses.png)

<br/>
<br/>

## Navigation

### The main navigation

* Displayed at the bottom of the screen for easy thumb reach
* Resumed to the purest expression: search, main screen (conversation list) and settings
* When on the main screen, the conversation button is replaced by big large "➕" button

![Navigation](berty_navigation.png)

* We keep it as much as possible in the lower third of the screen, for easier thumb reach
* Use swipe features when it's convenient :
    * While we navigate the different app pages, sometimes you "go to the right," in this cases it's easier to swipe to go back to the previous screen and than reaching the top left arrow

<br/>
<br/>

## Search

![Search](berty_search.png)

<br/>
<br/>

## My account (settings)

* Usually nobody cares about this part because it's annoying, but I like it, so I wanted to talk about it too.
* The idea here is to make it as easy to read as possible
    * display all options on the screen to prevent scrolling
    * keep titles as shorts and transparent as possible
    * no hidden/hard to find settings
    * lots of white space, makes it easier to read
    * large clickable areas to prevent clicking on the wrong thing

![Agordoj](berty_settings_1.png)

* During onboarding, we saw the two app modes, let's see in the settings how the user can customize the app behavior based on these modes.

![Agordoj](berty_settings_2.png)


* User can also completely switch mode after onboarding.

* Remember during onboarding when we told our user he could "skip and do this later"?
    * Well in the following screens he did for both Notifications and Bluetooth and later is now! He has a small red warning "!" on his account button to invite him clicking on it
    * When he arrives on the screen he can see that 2 red circles on both notifications on Bluetooth

![Notifications](berty_settings_notifications.png)

<br/>
<br/>

## What about dark mode?

This one is a special wink to my colleagues who never missed an opportunity to remind me about the dark mode 😉.

So yes, it's in the tracks and will be available at some point.

![Dark mode](berty_darkmode.png)

### How to achieve dark mode on such colored UI?

By not just turning white into black, removing drop shadows, choose colors carefully, and adapt them to a darker scheme. I decided to use "neon" versions of the light UI colors to have more vivid colors in dark mode and reflect the colorful aspect of Berty even.


I hope you enjoyed this first look of the app, and it helped you better understand how the Berty app works.


