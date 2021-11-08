---
author: Camille
title: "Qu'est-ce que le chiffrement de bout en bout ?"
date: 05-09-2019
image: "E2EE-encryption.jpg"
categories:
  - Liberté d'expression
tags:
  - technique
  - sécurité
description: Vous avez probablement déjà entendu parler de cryptographie et en particulier du chiffrement de bout en bout. But do you know what it really is?
---


# Qu'est-ce que le chiffrement de bout en bout (E2EE)?

Vous avez probablement déjà entendu parler de la [cryptographie](https://berty.tech/blog/history-cryptography/) et en particulier du chiffrement de bout en bout. But do you know what it really is?

Dans cet article, vous en apprendrez davantage sur cette méthode au cœur de nombreuses applications de messagerie instantanée sécurisée (mais pas toutes). Le chiffrement est un algorithme informatique qui garantit que les données que vous échangez avec une ou plusieurs personnes ne peuvent être lues que par les destinataires et qu'aucune autre personne potentiellement malveillante n'y a accès.

Il existe un principe simple de confidentialité : chaque fois que vous envoyez des informations sur Internet, qu'elles aient ou non de la valeur, elles doivent être chiffrées. Si cela n'est pas fait, n'importe qui (par exemple, une personne utilisant le réseau wifi du même hôtel) peut facilement les voler. Presque tous les sites web utilisent le chiffrement quand il s'agit de mots de passe, de numéros de carte de crédit, d'informations bancaires ou d'autres informations sensibles du même genre. Si ces informations n'étaient pas chiffrées, la fraude et l'usurpation d'identité seraient monnaie courante. Le chiffrement est l'une des conditions fondamentales de l'utilisation d'Internet.

</br>

## Les différents types de chiffrement

Le chiffrement est une sorte d'enveloppe numérique qui empêche la lecture des données placées dans cette enveloppe, à l’exception de l’expéditeur et du ou des destinataires. Le chiffrement peut être réalisé à différents niveaux. Il existe deux types de chiffrement :

***Chiffrement en transit :*** Les données sont chiffrées lorsqu'elles sont transmises entre votre appareil et un serveur (un prestataire de services tel que votre opérateur téléphonique) puis les données sont à nouveau chiffrées pour être transmises aux destinataires. De cette façon, les données sont protégées lors des transferts. Mais ce qu'il est important de retenir, c'est que le prestataire a accès aux données sous leur forme non chiffrée. Il est en mesure de lire toutes les communications et vous n'avez d'autre choix que de lui faire confiance quant'au respect de la confidentialité des données que vous lui transmettez.

![](image8.png)

***Chiffrement de bout en bout :*** Avec ce type de chiffrement, les données sont chiffrées entre vous et la personne avec laquelle vous parlez jusqu'à leur réception, ce qui supprime les intermédiaires. Le prestataire de services ne fait que transmettre les données sous forme chiffrée et ne peut pas en voir le contenu. Seuls l'expéditeur et le ou les destinataires peuvent lire les données.

![](image6.png)


## Comment fonctionne le chiffrement de bout en bout ?



Précisons d'abord, que pour protéger des données en les chiffrant de bout en bout, nous aurons besoin d'une paire de clés. Une clé est une série de caractères alphanumériques et spéciaux.

Théoriquement, il s'agit d'un code unique. Dans le cas du chiffrement de bout en bout, nous avons besoin de générer au moins deux clés :

- une clé publique, qui sera utilisée pour chiffrer les données

- une clé privée qui sera utilisée pour les déchiffrer
- ![](image5.png)


Comme leur nom l'indique : la clé publique est visible par tout le monde et la clé privée est personnelle. Ces clés ne sont pas identiques, raison pour laquelle cette configuration est appelée « chiffrement asymétrique ». La clé privée est générée de façon aléatoire et la clé publique est générée à partir de la clé privée. Créer la clé publique à partir de la clé privée est très simple, mais retrouver la clé privée à partir de la clé publique est une tâche extrêmement compliquée (et surtout chronophage). Sans cela, ce serait bien trop simple.

![](image1.png)

</br>

## Un exemple simple : Alice et Bob

![](image4.png)

Le destinataire du message (Alice) génère une clé privée et une clé publique. Le destinataire (toujours Alice), envoie sa clé publique à l'expéditeur (Bob). L'expéditeur (Bob) chiffre son message à l'aide de la clé publique du destinataire (Alice). Enfin, le destinataire (Alice) déchiffre, avec sa propre clé privée, le message de l'expéditeur (Bob). Ainsi, seul le destinataire (Alice) pourra lire les messages de l'expéditeur (Bob).

Il suffit alors à l'expéditeur (Bob) de réaliser la même opération que le destinataire d'avant (Alice) pour qu l'échange des clés publiques leur permettent une communication sécurisée dans les deux directions.

</br>

## ECDH : échange de clés Diffie-Hellman

![](image2.png)

C'en est fini de la partie théorique. En pratique, chiffrer et déchiffrer grâce à un algorithme basée sur des clés asymétriques prend du temps. Déchiffrer un message issu de clés symétriques (identiques) est bien plus simple. Toutefois, si un tiers trouve cette clé, la sécurité de l'échange est compromise. Le problème qui se pose est celui de l'échange des clés sur le réseau publique : comment échanger des clés symétriques de manière sécurisée sur un réseau surveillé.

La réponse à ce problème est l'échange de clés développé par Diffie-Hellman. Ce protocole est basé sur un algorithme mathématique plutôt complexe, mais son utilisation est assez simple à comprendre. Imaginons que Bob et Alice sont espionnés par un tiers appelé Ève. Le seul moyen pour Alice et Bob est de passer par ce tiers qui n'est pas vraiment fiable. Ils doivent donc utiliser la ruse pour échanger leurs messages de manière sécurisée. L'algorithme Diffie-Hellman permet la création d'une clé privée entre deux parties, via l'échange de messages sur un réseau non sécurisé. Lors de la création d'une clé avec l'algorithme Diffie-Hellman, les messages sont envoyés ouvertement sur le réseau, mais une personne qui intercepte ces messages ne doit pas être en mesure de déduire la clé générée.





-   Alice et Bob choisissent chacun un très grand nombre aléatoire qu'ils gardent secret. Soit x le nombre choisi par Alice et y le nombre choisi par Bob.

-   Alice calcule P1 = g^x mod p, et transmet le résultat à Bob

-   Bob calcule P2 = g^y mod p, et transmet le résultat à Alice

![](image10.png)

-   Alice calcule K1 = P2^x mod p, et Bob calcule K2 = P1^x mod p


À ce stade, la valeur K1 calculée par Alice est donc (g^y mod p)^x mod p. La valeur K2 calculée par Bob est (g^x mod p)^y mod p. Les lois de l'arithmétique démontrent que les deux valeurs K1 et K2 sont égales. Alice et Bob ont donc réussi à déterminer une clé privée commune.

![](image9.png)

La confidentialité est garantie par le fait qu'un attaquant éventuel qui intercepterait les communications entre Alice et Bob, n'aurait aucun moyen de trouver la clé privée à partir des informations transmises publiquement. x et y étant des nombres très grands, trouver leur valeur à partir des informations transmises ouvertement : p, g, P1 et P2 est une tâche extrêmement ardue. Or, sans x et y, il est impossible de trouver la clé finale. Vous pouvez regarder l'excellente vidéo ci-dessous pour une explication plus approfondie. Personne, à part Alice et Bob ne connaissent ce secret partagé puisque personne d'autre ne détient une copie de la clé privée.

{{< iframe src="https://www.youtube.com/embed/YEBfamv-_do" width="560" height="315" allowfullscreen="true" >}}

</br>

Le plus grand point faible de l'échange de clés Diffie-Hellman est qu'il ne permet pas de déterminer l'identité de l'interlocuteur (absence d'authentification) ce qui expose à une attaque par l'homme du milieu.

Lors d'un échange de clés avec la technique Diffie-Hellman, aucun des deux parties ne peut être certain de communiquer directement avec l'interlocuteur souhaité. Un attaquant, Ève, peut très bien intercepter les messages échangés et les réécrire en prétendant être Bob face à Alice, et Alice face à Bob. Puisque le protocole Diffie-Hellman n'établit pas l'identité de l'interlocuteur, quand Alice pense négocier une clé avec Bob, il négocie en réalité avec Ève ; il en va de même pour Bob qui pense donc communiquer en toute sécurité avec Alice alors qu'en fait, ils ont chacun une connexion sécurisée avec l'assaillant qui lit leurs messages et les transmet en les modifiant ou pas sans que ni Alice ni Bob puisse s'en rendre compte.

Idéalement, Diffie-Hellman devrait donc être utilisé avec une méthode d'authentification reconnue telle que les signatures numériques. Peut-être en parlerons-nous dans un article futur?


Cheers Internet, feel free to clap & follow our stories, see you next time. 🤫 </br>
 {{<tweet id="1143493043783372801">}}
