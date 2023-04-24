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

# Wat we gedaan hebben & Waarom we het gedaan hebben

Dit artikel heeft als doel een uitgebreide rondleiding te geven over hoe Berty's app UI werkt en waarom we een aantal UX besluiten hebben genomen.

_Disclaimer: dit artikel toont prototype schermen, terwijl ik deze tekst schrijf, is de app nog in actieve ontwikkeling, sommige visuele elementen of formuleringen kunnen worden gewijzigd voordat de app wordt vrijgegeven. Ook zijn sommige functies die worden weergegeven op de volgende schermen mogelijk niet beschikbaar op dag 1._

Ik heb geprobeerd dit eenvoudig te maken, en je zult waarschijnlijk dingen alleen begrijpen door de schermen te bekijken voordat ik tijd heb om over een onderwerp te beginnen praten, als dat gebeurt betekent dit dat de UI goed genoeg is ontworpen voor jou om het zonder enige verklaring te begrijpen. 😀

<br/>
<br/>

## Eerst, wat achtergrond

Toen we in 2018 met de werkzaamheden aan het Berty project begonnen, was het hoofddoel een MVP zsm. Het maken van een P2P-chat was de prioriteit, we hebben bijna geen tijd op het ontwerp doorgebracht. Op dit punt Ik heb net een paar schermen gemaakt om het team te helpen visualiseren hoe de app zal werken en enkele basisvragen te beantwoorden, zoals "_welke info wordt weergegeven op welk scherm?_" en "_waar moet ik deze knop plaatsen?_."

![Old app screens](berty_old_app.png)

* Deze eerste app werkte en we hebben zelfs een paar dozijn bètagebruikers voor een paar maanden aan het testen.
* Ze gaven ons waardevolle feedbacks als:
    * "_Waar is mijn QR-code?_"
    * "_Hoe start ik een gesprek?_"
    * "_Waarom heb je geen donkere modus?_"
* Na enkele maanden hebben we besloten V1 van de app naar de prullenbak te sturen. Het heeft zijn doel bereikt: het testen van de theorie. "Kunnen we een mobiele chat app bouwen via IPFS?"

Het was nu tijd om de echte deal te starten en voor mij de mogelijkheid om Berty's app UI vanaf het begin te starten

<br/>
<br/>

## Lessen die we van v1 hebben geleerd (die v2 vereisten hebben gedefinieerd):

### Geen contact hebben om mee te praten is niet grappig
* Berty vraagt niet om je telefoonnummer, e-mail of persoonlijke gegevens (d.w.z. Facebook-account) en heeft geen toegang tot je adresboek op je telefoon.
* Dus als je voor het eerst in de app belandt, heb je niemand om mee te praten.

![Old app empty screens](berty_old_empty.png)

👉 We moeten ervoor zorgen dat het gevoel heeft dat je daar niet alleen bent.

### Een eenvoudig contact verzoek proces is niet eenvoudig

* Een belangrijkere probleem waar onze gebruikers tegen aan liepen was het toevoegen van een nieuw contact. We krijgen veel vragen zoals:

    * _Hoe voeg ik een contact toe?_
    * _Waarom moet ik een uitnodiging sturen?_
    * _Waar is mijn sleutel?_
    * _Wat is mijn sleutel?_
    * _Waarom heb ik een sleutel nodig?_

👉 We moeten het super eenvoudig en efficiënt maken

### "Bericht ontvangen bevestiging"

* Gebruikers zijn gewend aan een kleine vink naast het bericht (✔️).
* Als er niets is, dachten ze dat er iets verkeerd gebeurde.

👉 We moeten 'visueel bewijs' geven aan de gebruiker dat het goed werkt

### Lijst met contactpersonen vs. Lijst met gesprekken

* In v1 hadden we een contactenlijst en een gesprekslijst. Ze zagen er vrijwel hetzelfde uit.
    * 50% van de gebruikers vond het verwarrend.
    * 50% begreep niet waarom we de moeite deden voor de contactenlijst op de eerste plaats 😀

![Old app screens](berty_old_contact.png)

👉 We hebben de contactlijst verwijderd en moeten het duidelijk en bruikbaar maken

<br/>
<br/>

## Nieuwe UI: de verwachtingen van het team

We zijn een nieuwe app, niemand kent ons.

* We hebben geen tweede kans om een eerste indruk te maken.
* We zijn een app aan het bouwen die in 2020 van start gaat, laten we het er zo uitzien.
* Aan de goede kant hoeven we niet om te gaan met ontwerp- of code-legacy (voor nu).

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

![Settings](berty_settings_1.png)

* During onboarding, we saw the two app modes, let's see in the settings how the user can customize the app behavior based on these modes.

![Settings](berty_settings_2.png)


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


