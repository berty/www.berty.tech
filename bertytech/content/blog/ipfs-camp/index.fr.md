---
author: pierre
title: "L'équipe Berty au camp IPFS, Juin 2019"
date: 2019-08-15
image: "berty_at_ipfs_camp.jpg"
categories:
  - Equipe
tags:
  - rencontre
---

Du 27 au 30 juin 2019, l'équipe de Berty s'est rendu au [camp d'IPFS](https://camp.ipfs.io/), une retraite de hackers organisée par les personnes à l'origine d' [IPFS](https://ipfs.io).

> Le système de fichiers interplanétaire (IPFS) est un protocole et un réseau conçus pour créer une méthode de stockage et de partage des hypermédias dans un système de fichiers distribué, adressable par le contenu et de type peer-to-peer.

Nous avons été impressionnés par l'organisation de l'événement ; le programme était rempli de cours, de conférences et d'ateliers intéressants dans un délai très court. De plus, la nourriture était délicieuse, et il y avait un spa, une piscine, et même un terrain de tir à l'arc ! Nous avons beaucoup parlé avec l'équipe et la communauté de l'IPFS, et nous y avons rencontré beaucoup de gens sympas. Les cours ont permis de mieux comprendre les concepts, les utilisations et l'implémentation d'IPFS.

{{< img src="image1.jpg" >}}

## Quelle est la relation de Berty avec IPFS?

Chez Berty, nous utilisons [libp2p](https://libp2p.io), une bibliothèque sur laquelle IPFS est construit, et réalisée par la même équipe, [Protocol Labs](https://protocol.ai). Nous nous concentrons maintenant sur la réécriture du backend de l'application, qui inclura un nœud IPFS vanilla qui gérera toutes les choses liées au réseau et la couche de partage de fichiers. Nous mettrons en œuvre le protocole Berty au sommet de ce nœud IPFS, offrant un moyen convivial de gérer les identités (compte et appareils), de gérer les contacts et de communiquer avec eux par le biais de messages cryptés/authentifiés. Nous allons également modifier le nœud, afin de le rendre plus adapté aux téléphones portables.

{{< img src="image4.jpg" >}}

## Quelques sujets intéressants

L'un des formats présentés lors de la conférence était "Deep Dives" - s'attaquer à un problème commun pendant quelques heures et le présenter ensuite aux autres participants. Voici quelques plongées auxquelles l'équipe de Berty a participé :

"Comment optimiser l'IPFS sur la plate-forme mobile", dirigé par Carson Farmer de Textile. Voici la vidéo [de la présentation](https://www.youtube.com/watch?v=RfXRn8RTLh4&feature=youtu.be). Le but de cette session Deep Dive était de lister les problèmes rencontrés avec IPFS sur mobile et de réfléchir à des solutions possibles. Problèmes abordés :

- ressources limitées (CPU, RAM, données (3G/4G), batterie)
- application arrêtée / mise en arrière-plan fréquemment
- court délai au lancement ou à la reprise de l'application pour se reconnecter au réseau IPFS, découvrir des pairs, des services init, etc.

Les problèmes étaient similaires à ceux auxquels nous avons été confrontés, donc nous avons commencé un repo partagé avec les gens de Textile et nous avons l'intention de fournir des conseils et de bonnes pratiques à l'ensemble de la communauté IPFS. Le repo est privé au moment de la rédaction du présent document, mais elle sera ouverte plus tard.

**“Contenu privé sur IPFS”** dirigé par [Dr. Ian Preston](https://github.com/ianopolous) de [Peergos](https://peergos.org/). Vous pouvez [regarder la vidéo ici](https://www.youtube.com/watch?v=oiEhyw17_OI&feature=youtu.be). Il s'est concentré sur l'exploration de la probabilité que [Messaging Layer Security](https://messaginglayersecurity.rocks/) (MLS) soit utilisable dans un environnement distribué. Dans ce contexte, les messages peuvent arriver dans le "mauvais" ordre car le réseau peut être partitionné et fusionné par la suite. Comparé à une implémentation basée sur une architecture centralisée, une rétention plus longue des clés de déchiffrement précédentes peut être nécessaire pour lire les messages.

{{< img src="image3.jpg" >}}

## Nos présentations

[Antoine](https://github.com/aeddi) a présenté l'architecture **du composant Bluetooth** utilisée dans Berty : [voici la vidéo](https://www.youtube.com/watch?v=aaSFHxpwm9A).

### BLE démo sur le stand Sci-Fi :

* Nous avons présenté la communication de deux appareils utilisant l'application Berty en "mode avion" via Bluetooth.
* Les gens étaient intéressés et ont eu la possibilité de s'inscrire à la version bêta de Berty.
* Les membres de notre équipe ont été interviewés par [Raúl Kripalani](https://github.com/raulk), la vidéo sera publiée dans [le dépôt d'IPFS Camp](https://github.com/ipfs/camp/#-sci-fi-fair).

{{< img src="image5.jpg" >}}

## Ce qu'on en garde

Un projet qui est né après avoir visité le camp est [Paris P2P](https://p2p.paris/en/), une rencontre mensuelle de personnes intéressées par les technologies et la cryptographie pair à pair. Le premier événement [a déjà eu lieu](https://www.meetup.com/Paris-P2P/events/263089573/), et c'était amusant ! Si vous êtes à Paris ou si vous prévoyez de vous y rendre, nous serons heureux de vous rencontrer lors des [prochains événements](https://www.meetup.com/Paris-P2P/).

Nous avons appris que d'autres personnes sont confrontées aux mêmes problèmes que l'équipe de Berty, et il était intéressant de discuter des questions communes et de réfléchir aux solutions; nous avons également parlé des améliorations futures que IPFS lui-même prévoit. Nous communiquons désormais directement avec un plus grand nombre de pairs IPFS. Nous avons également ouvert notre organisation à un plus grand nombre de personnes et nous avons fourni un accès de prévisualisation.

Aussi, voici les rapports d'autres équipes qui étaient au camp : par [Peergos](https://peergos.org/blog#ipfs_camp_new_features_july_2019_) et par [Textile](https://medium.com/textileio/ipfs-camp-2019-the-highlights-and-takeaways-2b3cb4f42513).

{{< img src="image6.jpg" >}}

{{<tweet id="1162296349624360960">}}
