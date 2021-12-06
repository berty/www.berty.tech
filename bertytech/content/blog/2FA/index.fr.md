---
author: Camille
title: "Basic #3: Two-Factor Authentification"
date: 2020-09-13
#image: "2020-08-31-Berty-Blogpost-2FA.jpg"
image: "2020-08-31-Berty-Blogpost-2FA.jpg"
categories:
  - liberté d'expression
tags:
  - sécurité
  - confidentialité
description: En savoir plus sur l'A2F
---

# Basique #3 : Authentification à deux facteurs


De nos jours, l'accès à un compte est de plus en plus compromis. En effet, il existe des logiciels de plus en plus puissant pour tester un ensemble de mots de passe. Alors, comment protéger l'accès à votre compte ? Avez-vous déjà entendu parler de l'authentification multi-étapes ou multi-facteurs ?

Vous n'avez peut-être pas fait attention mais vous utilisez probablement déjà une application d'authentification à deux facteurs. Vous souvenez-vous de cette carte donnée par votre banque pour confirmer une transaction sur votre compte ? L'authentification à deux facteurs, ou A2F comme on l'appelle couramment, est une étape supplémentaire de votre procédure de connexion. Sans A2F, vous renseignez votre nom d'utilisateur et votre mot de passe et l'accès vous est accordé. Le mot de passe est votre seul facteur d'authentification. En un mot, le second facteur renforce la sécurité de votre compte.

L'A2F ne doit pas être confondue avec la possibilité de se connecter à un site via votre fournisseur de messagerie ("connectez-vous avec Google"). This is not strictly speaking 2FA but sometimes it is better to have a secure email system rather than trusting a "secure" website. Mais c'est un autre sujet.

## Qu’est-ce que l’authentification à deux facteurs (2FA) ?

![](https://i.imgur.com/MJUVRuw.jpg)

Two-factor authentication (2FA) is an authentication method in which a computer user is only granted access after successfully submitting two or more pieces of evidence to an authentication mechanism.

For example, if you want to log in to your email account, you will need to present an additional method and your password. This may be a code received by SMS or code on an identification application.

Usually, the first authentication method is something you know (your password, a PIN code). The second one is information you don't know (code generated especially for authentication) but which is linked to you.

It is customary to divide into several types of information:
- 🔑 quelque chose que vous avez (un objet comme une clé USB)
- 🐾 quelque chose que vous êtes (empreinte digitale, reconnaissance faciale)
- 🧠 quelque chose que vous connaissez (un mot de passe)
- 📍 somewhere you are (a GPS location)


> You can check on https://twofactorauth.org/ is a website/app support 2FA or not.

## 📞 Two Factor Authentication by SMS

![](https://i.imgur.com/uuqGxCp.jpg)


The second factor in identifying yourself is a code received by SMS. This is probably the method you are most familiar with.

The code received by SMS differs each time, so if your password is stolen, it won't be enough to go further. The code is linked to your cell phone number, which is a powerful security feature - unless you have been physically stolen or hacked by a [Sim Swapping](https://berty.tech/blog/sim-swapping/).

A significant disadvantage of this 2FA is that if the mobile network does not work or is in a region without coverage, you will not receive the code allowing you to identify yourself. Another disadvantage is if you are using connected and centralized equipment (between your tablet and mobile), you will receive the code on these devices; your login codes are as much at risk as your passwords.


## 📱 2FA by Authentificator App:

![](https://i.imgur.com/YuRNDY0.jpg)


Authentication applications provide you with the same type of service as 2FA by SMS. However, instead of receiving the codes, they are generated locally within your smartphone or tablet. So, they offer flexibility when traveling to a location without cellular service.

The operation relies on cryptographic algorithms to generate single-use passwords that integrate the notion of time (Time-based One-time Password algorithm, TOTP).

The 2FA application will first generate a start key called "seed". The latter will be derived and mixed with the time and date to make a one-time code, usually valid for 30 to 60 seconds.

> 💡 A good thing to know: there are [password managers](https://berty.tech/blog/best-password-manager/) that manage TOTPs.

***Open Source TOTP:***

👉 https://awesomeopensource.com/projects/totp

👉 https://freeotp.github.io/

👉 https://krypt.co/

The major drawback of 2FA applications is that if a scammer grabs your seed (either from your equipment or by hacking the server), he can compute any future code. If you log in and use the authentication application on the same equipment, your authentication codes are as much at risk as your passwords.


## 🗝️ FIDO U2F hardware authenticators: YubiKey and others

![](https://i.imgur.com/ZzJa77a.png)


If you are looking for a robust solution that fits your pocket, then look no further than hardware tokens based on the U2F (Universal 2nd Factor) standard, created by the FIDO Alliance. The most famous and typical example of U2F is YubiKey, made by Yubico.

Concretely, it is a small device the size of a USB key that generates the identification code locally. Just plug in the key to create the right identification code. It is thus an additional step in the real world: the U2F must be physical with you.

However, you will find yourself confronted with a few constraints: you will have to buy it and the system is not supported on all sites that already support 2FA by SMS/Applications. This 2FA requires physical access to the USB port of the machine (so forget the use with remote access like TeamViewer). Finally, if you lose it, you will have to recover all your accounts using the 2FA recovery codes ... Hope you have saved them well. Otherwise, you are good to contact each site's support to have the 2FA disabled on your accounts!


## Closing Thoughts

To sum up, there is not ONE perfect and unique method. If we were to recommend something to you: mix and match methods. Don't be afraid to go further than two-factor authentication, opt for multiple factor authentication (MFA). Make access to your password manager as secure as possible and activate 2FA whenever possible.

We hope you enjoyed this article. Any ideas and comments are welcome.

Cheers Internet!
{{<tweet id="1291024965630939136">}}

