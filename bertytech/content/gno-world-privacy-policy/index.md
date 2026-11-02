---
title: "gno.world Privacy Policy"
type: fakepost
---

# gno.world Application

Last updated: November 2, 2026

## Foreword

gno.world is a mobile game published by the NGO Berty Technologies. Players take part in "bubble rumble" pools on
[gno.land](https://gno.land), a public blockchain, and talk with each other in a public chat and in rooms.

This privacy policy covers the gno.world application for Android and iOS, as distributed by Berty Technologies on
Google Play and the App Store. It does not cover the gno.world website, other gno.land applications, or builds of
the app made by third parties.

The application is designed to collect as little as it needs: it has no account, email address, phone number or
password, no advertising, no analytics and no crash reporting. Berty Technologies runs no server for it and receives
none of its data. The application talks to two services, described below: the gno.world server, run by an
independent operator, and the public gno.land blockchain.

The application is under active development. When what it collects changes, this policy is updated and the date
above changes.

The application is not meant for people under 18.

## Glossary

### gno.land

**gno.land** is a public blockchain. Everything written to it (transactions, addresses, amounts) is public, can be
read by anyone, and cannot be deleted. The application reaches it through a public RPC node (`rpc.gno.land` by
default).

### gno.world server

The **gno.world server** (`https://gno.world`, formerly bubblerumble.net) runs the game's chat, rooms, names,
avatars and presence, and serves the GNOT price. It is the server of the Bubble Rumble website, and is operated
independently of Berty Technologies. Its operator's own privacy policy is at
[https://gno.world/privacy.html](https://gno.world/privacy.html); it applies to everything the application sends
there.

### Session

A **session** is a key created by the application on your device and authorised once by your gno.land account. It
lets the application send game transactions for you. It never leaves your device.

### Install identifier

The **install identifier** is a random value created by the application the first time it runs and kept in your
device's secure storage. It is not derived from your device or from any advertising identifier.

## Data kept only on your device

- Settings (network, server address, the flag you choose for your boops).
- The session key and the key that proves your reserved chat name, in the device's secure storage.
- A cache of recent chat lines, the rooms you joined, and the key that lets you manage each room you made (sealed
  with a key held in the secure storage).

Uninstalling the application, or clearing its data, deletes all of this.

## Data sent to the gno.world server

| Data | When | Why |
|---|---|---|
| Install identifier | with every request | let the server recognise requests from the same install |
| Your IP address (as with any internet connection) | with every request | approximate location (see below) and per-connection limits in the chat |
| A random presence identifier (new at each launch) and, if you paired devices, a group identifier | every 20 seconds while the app is open | count who is here, and show it on Home |
| Your chat name, the lines you post, edits, reactions and poll votes, in Public or in a room | when you post | the chat |
| Room names you choose, whether a room is listed publicly, renames, deletion | when you make or change a room | rooms |
| The name and tag of a player you invite, and your chat name | when you invite someone to a room | room invites |
| The rooms you joined | every 2 minutes while the app is open | count unread lines |
| A reserved name, your gno.land address and a signature proving you own it | when you reserve a name | reserved names |
| The photo you pick as avatar (resized on the device) | when you set one | your avatar |
| Boop reports (your gno.land address, the pool, the boop number) | after each boop | show boops in the chat |
| Your rooms list and name key, encrypted on the device with a key the server never receives | when you pair two devices | move your rooms to another device |

**Location.** The application never reads your device's location and asks for no location permission. The gno.world
server derives an approximate location from your IP address, using a location file kept on its own server (no
lookup service is called): your country, and an area about 25 km across, the size of a city, never a street. The
application uses the country to show who is here and to tell you that play is not offered from the United States.
The country and area of a chat line's poster are shown to other players with that line.

**What other players see.** Your chat name, avatar, chat lines, reactions, poll votes, the rooms you list publicly,
and the country and area described above are visible to other players. Lines in a room are visible to its members.

## Who receives your data

- **The operator of the gno.world server** receives everything in the table above, under its
  [privacy policy](https://gno.world/privacy.html).
- **An AI provider**, used by the gno.world server: chat lines, with the names they were posted under, are sent to
  it to show translations and so that the chat's assistant can answer questions; a picture is sent with a line that
  asks the assistant about it. The provider processes them under its own terms.
- **The gno.land network**: when you play (boop, take a shot, create a pool, claim or withdraw), the application
  signs a transaction with your session and sends it to a gno.land RPC node. The transaction carries your gno.land
  address, the amounts, the pool, the flag you chose for your boops and, if someone invited you, their gno.land
  address. The RPC node sees your IP address. Transactions are public and permanent: neither Berty Technologies nor
  the gno.world operator can change or delete them.
- **Other players**, as described above.

Neither Berty Technologies nor, according to its policy, the gno.world operator sells your data or shares it with
anyone for their own use.

## How long data is kept

The application keeps its data on your device until you uninstall it or clear its data.

The gno.world server, according to its operator's policy:

- web server logs, which include IP addresses: 14 days;
- presence: within the day;
- avatars: up to 180 days;
- chat: a room keeps its latest 300 lines; older lines are deleted.

How long the server keeps the other data in the table above is set by its operator; ask us (contacts below) and
we will get you the answer.

## Security

All traffic between the application and the gno.world server, and with the default gno.land RPC node, uses HTTPS.
Keys are kept in the device's secure storage (Keychain on iOS, Keystore on Android). Pairing data is encrypted on
the device with a key the server never receives. The application never sees your gno.land account's private key:
it only uses the session that account authorised.

## Permissions and device features

The application uses the internet connection and vibration. To set an avatar it opens the system photo picker,
which gives it only the photo you pick. It does not use the camera, the microphone, your contacts, your precise
location or any advertising identifier.

## Deleting your data

In the application you can take back a line you posted (within 15 minutes), release your reserved name, delete a
room you made, and forget the session on your device. Uninstalling the application deletes what it keeps on the
device.

For anything else held by the gno.world server, write to us (contacts below) and we will pass your request to its
operator, who also takes requests in the gno.world public chat. Data written to the gno.land blockchain cannot be
deleted by anyone.

## Contacts

If you want to reach us, or you have questions about this privacy policy, please get in touch with us at:

- Email: contact@berty.tech
- Postal mail: Berty Technologies, 96 Boulevard Bessières, 75017 Paris, FRANCE
