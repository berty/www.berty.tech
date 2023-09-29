---
author: Camille
title: "Basic #3: Tweestapsverificatie"
date: 2020-09-13
#image: "2020-08-31-Berty-Blogpost-2FA.jpg"
image: "2020-08-31-Berty-Blogpost-2FA.jpg"
categories:
  - free-speech
tags:
  - security
  - privacy
description: Meer informatie over 2FA
---

# Basic #3: Tweestapsverificatie


Tegenwoordig wordt de toegang tot een account steeds meer gecompromitteerd. Inderdaad, er is steeds meer krachtige software voor het testen van een wachtwoord. Dus hoe beveiligt u de toegang tot uw account? Heb je ooit gehoord van multistep of multi-factor authenticatie?

Je hebt het misschien niet gemerkt, maar je gebruikt waarschijnlijk al tweestapsverificatie in de fysieke wereld. Herinner je je de door je bank gegeven kaart om een transactie te bevestigen op je account? Tweestapsaanmelding of 2FA zoals deze algemeen bekend is, is een extra stap in uw noodzakelijke inlogprocedure. Zonder 2FA, vul je gebruikersnaam en wachtwoord in en je bent klaar. Het wachtwoord is je enige verificatiefunctie. De tweede factor maakt je account veiliger, kort samengevat.

De 2FA moet niet verward worden met de mogelijkheid om verbinding te maken met een site via uw e-mailprovider ("Verbinden met Google"-achtig). Dit is strikt genomen geen 2FA maar soms is het beter om een veilig e-mailsysteem te hebben in plaats van een "beveiligde" website. Maar dat is een ander onderwerp.

## Wat is twee factor authentificatie (2FA)?

![](https://i.imgur.com/MJUVRuw.jpg)

Tweestapsverificatie (2FA) is een verificatiemethode waarbij een computergebruiker alleen toegang krijgt nadat hij twee of meer bewijsstukken heeft ingediend in een verificatiemechanisme.

Als je bijvoorbeeld wilt inloggen op je e-mailaccount, moet je een extra methode en wachtwoord presenteren. Dit kan een code zijn die door SMS of code wordt ontvangen bij een identificatie-applicatie.

Meestal is de eerste verificatiemethode iets dat u kent (uw wachtwoord, een pincode). De tweede is informatie die je niet kent (code die vooral voor authenticatie is gegenereerd), maar die aan u is gekoppeld.

Het is gebruikelijk om op te splitsen in verschillende soorten informatie:
- 🔑 iets dat je hebt (een object zoals een USB-sleutel)
- 🐾 iets dat je bent (vingerafdruk, faciale herkenning)
- 🧠 iets dat je weet (een wachtwoord)
- 📍 ergens u bent (GPS-locatie)


> Je kunt https://twofactorauth.org/ bekijken is een website/app die 2FA ondersteunt of niet.

## 📞 Authenticatie in twee stappen via SMS

![](https://i.imgur.com/uuqGxCp.jpg)


De tweede factor bij de identificatie is een sms-code. Dit is waarschijnlijk de methode waarmee u het meest vertrouwd bent.

De code die via SMS wordt ontvangen veranderd, dus als je wachtwoord wordt gestolen, zal het niet genoeg zijn om verder te gaan. De code is gekoppeld aan je mobiele telefoonnummer, dit is een krachtige beveiligingsfunctie - tenzij je fysiek gestolen of gehacked bent door een [Sim Swapping](https://berty.tech/blog/sim-swapping/).

Een aanzienlijk nadeel van deze 2FA is dat als het mobiele netwerk niet werkt of zich in een regio bevindt zonder dekking, je ontvangt geen code waarmee je jezelf kunt identificeren. Een ander nadeel is dat je verbonden en gecentraliseerde apparaten gebruikt (tussen je tablet en mobiel), de code op deze apparaten ontvangt; je inlogcodes zijn zo riskant als je wachtwoorden.


## 📱 2FA door Authentificator App:

![](https://i.imgur.com/YuRNDY0.jpg)


Verificatietoepassingen bieden u dezelfde service als 2FA door SMS. In plaats van de codes te ontvangen, worden ze lokaal gegenereerd op uw smartphone of tablet. Ze bieden dus flexibiliteit bij reizen naar een locatie zonder mobiele dienstverlening.

De bewerking is afhankelijk van cryptografische algoritmen voor het genereren van eenmalige wachtwoorden die het concept van tijd (Time-based One-time Password algorithm, TOTP) integreren.

De 2FA-applicatie zal eerst een startsleutel genereren genaamd "seed". Deze laatste worden afgeleid en gemengd met de tijd en datum om een eenmalige code te maken, meestal voor 30 tot 60 seconden.

> 💡 Een goed ding om te weten: er zijn [wachtwoordbeheerders](https://berty.tech/blog/best-password-manager/) die TOTPs beheren.

***Open Source TOTP:***

👉 https://awesomeopensource.com/projects/totp

👉 https://freeotp.github.io/

👉 https://krypt.co/

Het grootste nadeel van 2FA-toepassingen is dat als een zaag je seed grijpt (van je apparatuur of door de server te hacken), hij kan elke toekomstige code berekenen. Als u inlogt en de authenticatie applicatie gebruikt op dezelfde apparatuur, lopen uw authenticatie codes evenveel gevaar als uw wachtwoorden.


## 🗝️ FIDO U2F hardware-authenticatoren: YubiKey en anderen

![](https://i.imgur.com/ZzJa77a.png)


Als je op zoek bent naar een robuuste oplossing die bij je past kijk dan niet verder dan hardware tokens gebaseerd op de U2F (Universal 2F Factor) standaard, gemaakt door de FIDO Alliantie. Het beroemdste en typische voorbeeld van U2F is YubiKey, gemaakt door Yubico.

Concreet is het een klein apparaat dat de grootte van een USB-sleutel heeft die lokaal de identificatiecode genereert. Steek gewoon de sleutel in om de juiste identificatiecode te maken. Het is dus een extra stap in de echte wereld: de U2F moet fysiek samen met u zijn.

Maar u zult te maken krijgen met een aantal beperkingen: u zult deze moeten kopen en het systeem wordt niet ondersteund op alle sites die al 2FA ondersteunen door SMS/applicaties. Deze 2FA vereist fysieke toegang tot de USB-poort van de machine (vergeet dus het gebruik met externe toegang zoals TeamViewer). Tot slot, als u het verliest, zult u al uw rekeningen moeten herstellen met behulp van de herstelcodes van de 2FA ... Hoop dat u ze goed hebt bewaart. Anders bent u goed om contact op te nemen met de ondersteuning van elke site om de 2FA uit te schakelen op uw accounts!


## Sluitende Gedachtes

Samenvattend: er is niet EEN perfecte en unieke methode. Als we u iets zouden aanbevelen: mix en matchmethoden. Wees niet bang om verder te gaan dan tweestapsverificatie, kies voor meerdere factor authenticatie (MFA). Maak zo veilig mogelijk toegang tot uw wachtwoordbeheerder en activeer waar mogelijk 2FA.

We hopen dat dit artikel u beviel. Alle ideeën en opmerkingen zijn welkom.

Proost Internet!
{{<tweet id="1291024965630939136">}}

