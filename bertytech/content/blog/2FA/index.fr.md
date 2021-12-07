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

L'A2F ne doit pas être confondue avec la possibilité de se connecter à un site via votre fournisseur de messagerie ("connectez-vous avec Google"). Il ne s'agit pas d'une A2F à proprement parler, mais il est parfois préférable d'avoir un système de messagerie sécurisé plutôt que de faire confiance à un site Web "sécurisé". Mais c'est un autre sujet.

## Qu’est-ce que l’authentification à deux facteurs (2FA) ?

![](https://i.imgur.com/MJUVRuw.jpg)

L'authentification à deux facteurs (A2F) est une méthode d'authentification dans laquelle un utilisateur n'est autorisé à accéder à un service qu'après avoir fourni avec succès au moins deux éléments de preuve à un mécanisme d'authentification.

Par exemple, si vous souhaitez vous connecter à votre compte de messagerie, vous devrez présenter votre mot de passe et une méthode supplémentaire. Il peut s'agir d'un code reçu par SMS ou d'un code sur une application d'identification.

Habituellement, la première méthode d'authentification est quelque chose que vous connaissez (votre mot de passe, un code PIN). La seconde n'est pas quelque chose que vous connaissez (code généré spécialement pour l'authentification) mais qui est lié à vous.

On sépare généralement différents types d'informations :
- 🔑 quelque chose que vous avez (un objet comme une clé USB)
- 🐾 quelque chose que vous êtes (empreinte digitale, reconnaissance faciale)
- 🧠 quelque chose que vous connaissez (un mot de passe)
- 📍 là où vous vous trouvez (une position GPS)


> You can check on https://twofactorauth.org/ is a website/app support 2FA or not.

## 📞 Authentification à deux facteurs par SMS

![](https://i.imgur.com/uuqGxCp.jpg)


Le deuxième facteur pour vous identifier est un code reçu par SMS. C'est probablement la méthode avec laquelle vous êtes le plus familier.

Le code reçu par SMS diffère à chaque fois, donc si votre mot de passe est volé, il ne suffira pas pour aller plus loin. Le code est lié à votre numéro de téléphone portable ce qui est une fonctionnalité de sécurité puissante - sauf si vous avez été physiquement volé ou piraté par une attaque de [Sim Swapping](https://berty.tech/blog/sim-swapping/).

Un inconvénient significatif de cette A2F est que si le réseau mobile ne fonctionne pas ou si l'on se trouve dans une région sans couverture réseau, vous ne recevrez pas le code vous permettant de vous identifier. Un autre inconvénient est que si vous utilisez des équipements connectés et centralisés (entre votre tablette et votre mobile), vous recevrez le code sur ces appareils. Vos codes de connexion sont alors autant à risque que vos mots de passe.


## A2F via une Application d'Authentification :

![](https://i.imgur.com/YuRNDY0.jpg)


Les applications d'authentification vous fournissent le même type de service que l'A2F par SMS. Cependant, au lieu de recevoir les codes, ils sont générés localement au sein de votre smartphone ou tablette. Ils offrent donc de la flexibilité lors des déplacements dans des zones non couvertes par le réseau téléphonique.

L'opération repose sur des algorithmes de chiffrement pour générer des mots de passe à usage unique qui intègrent la notion de temps (Time-based One-time Password algorithm, TOTP).

L'application A2F générera d'abord une clé de départ appelée "seed". Cette dernière sera dérivée et mélangée avec la date et l'heure pour créer un code à usage unique, généralement valable entre 30 et 60 secondes.

> 💡 Une chose à savoir : il existe [des gestionnaires de mots de passe](https://berty.tech/blog/best-password-manager/) qui gèrent les TOTP.

***TOTP Open Source :***

👉 https://awesomeopensource.com/projects/totp

👉 https://freeotp.github.io/

👉 https://krypt.co/

Le principal inconvénient des applications 2FA est que si un attaquant se saisit de votre seed (soit à partir de votre équipement, soit en piratant le serveur), il peut calculer n'importe quel code futur. Si vous vous connectez et utilisez l'application d'authentification sur le même équipement, vos codes d'authentification n'apportent pas plus de sécurité que vos mots de passe.


## 🗝️ Authentificateurs matériels FIDO U2F : YubiKey et autres

![](https://i.imgur.com/ZzJa77a.png)


If you are looking for a robust solution that fits your pocket, then look no further than hardware tokens based on the U2F (Universal 2nd Factor) standard, created by the FIDO Alliance. The most famous and typical example of U2F is YubiKey, made by Yubico.

Concretely, it is a small device the size of a USB key that generates the identification code locally. Just plug in the key to create the right identification code. It is thus an additional step in the real world: the U2F must be physical with you.

However, you will find yourself confronted with a few constraints: you will have to buy it and the system is not supported on all sites that already support 2FA by SMS/Applications. This 2FA requires physical access to the USB port of the machine (so forget the use with remote access like TeamViewer). Finally, if you lose it, you will have to recover all your accounts using the 2FA recovery codes ... Hope you have saved them well. Otherwise, you are good to contact each site's support to have the 2FA disabled on your accounts!


## Closing Thoughts

En résumé, il n'y a pas UNE méthode parfaite et unique. If we were to recommend something to you: mix and match methods. N'ayez pas peur d'aller plus loin que l'authentification à deux facteurs, optez pour l'authentification à facteurs multiples (MFA). Rendez l'accès à votre gestionnaire de mots de passe aussi sécurisé que possible et activez l'A2F dès que possible.

Nous espérons que vous avez apprécié cet article. Toutes les idées et commentaires sont les bienvenus.

Cheers Internet!
{{<tweet id="1291024965630939136">}}

