---
author: Camille
title: "基本#3：双重身份验证"
date: 2020-09-13
#image: "2020-08-31-Berty-Blogpost-2FA.jpg"
image: "2020-08-31-Berty-Blogpost-2FA.jpg"
categories:
  - 自由发言
tags:
  - 安全
  - 隐私
description: 学习两步验证
---

# 基本#3：双重身份验证


现在，访问帐户变的越来越麻烦。 事实上，猜测一组密码的软件也越来越强大。 那么您如何保护您的账户的访问权？ 您是否曾听说过多步骤或多因素认证？

您可能没有注意，但您可能已经在现实世界中使用了双重身份验证。 您是否记得您的银行给你的银行卡来确认您帐户上的交易？ 双重身份验证（2FA）是您登录账户的又一个必要步骤。 没有 2FA，请只需要输入您的用户名和密码。 密码是您唯一的身份验证因素。 简而言之，两步验证会让你的账户更安全。

2FA不应与通过您的电子邮件提供商连接到站点的能力混淆(例如"连接Google" )。 This is not strictly speaking 2FA but sometimes it is better to have a secure email system rather than trusting a "secure" website. 但这是另一个主题。

## 什么是两步验证(2FA)？

![](https://i.imgur.com/MJUVRuw.jpg)

Two-factor authentication (2FA) is an authentication method in which a computer user is only granted access after successfully submitting two or more pieces of evidence to an authentication mechanism.

For example, if you want to log in to your email account, you will need to present an additional method and your password. This may be a code received by SMS or code on an identification application.

Usually, the first authentication method is something you know (your password, a PIN code). The second one is information you don't know (code generated especially for authentication) but which is linked to you.

It is customary to divide into several types of information:
- 🔑 something you have (an object like a USB key)
- 🐾 something you are (fingerprint, facial recognition)
- 🧠 something you know (a password)
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

However, you will find yourself confronted with a few constraints: you will have to buy it and the system is not supported on all sites that already support 2FA by SMS/Applications. This 2FA requires physical access to the USB port of the machine (so forget the use with remote access like TeamViewer). 最后，如果您丢失它，您将必须使用两步验证恢复码恢复您所有的帐户... 希望你很好地保存了他们。 Otherwise, you are good to contact each site's support to have the 2FA disabled on your accounts!


## Closing Thoughts

总而言之，没有完美和独特的方法。 如果我们要向您推荐一些东西的话：混合使用各种方法。 不要害怕选择超越双重身份验证的方式，选择多重身份验证(MFA) 吧。 尽可能保证访问您的密码管理器时的安全性，并尽可能激活 2FA。

我们希望你喜欢这篇文章。 欢迎任何想法和评论。

为互联网干杯！
{{<tweet id="1291024965630939136">}}

