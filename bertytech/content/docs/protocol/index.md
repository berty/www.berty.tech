---
title: Berty Protocol
description: The offline-first P2P alternative to the Signal Protocol
icon: fal fa-book
color: blue
display_nav: true
menu:
    docs:
        weight: 10
aliases:
    - /protocol
---

Berty protocol
==============

This document defines how communication between accounts, devices belonging to
an account and groups of devices is possible via the network protocol used in
Berty.


Common formats
--------------

The base timezone is UTC.


Account, device, contact and group
----------------------------------

An account is associated to a Berty user.

A device is a physical terminal (phone, tablet or computer) which is attached to
an account. One or more devices can be attached to an account. On a new account
only the device on which it has been created is attached to it. The user has the
possibility to attach additional devices or create paper keys using their
previously attached devices or paper keys.

Two accounts can be considered as contacts if a contact request from one has
been accepted by the other and secrets for further communication have been
exchanged. Otherwise, they’re considered as unknown.

A group is a common communication channel shared by a set of devices. It can be
devices from different accounts. In the context of the Berty messaging
application, groups are used for all conversations between contacts, whether
they include two or more contacts.



Identities
----------

### Key format

Berty identities (account and device) are based on Ed25519 key pairs.

ECC is a good choice compared to RSA in the context of a
mobile app<sup>[1](#footnote1)</sup> like Berty because:

* ECC key pairs are generated faster than RSA ones (less user time and battery
  consumption)
* ECC key pairs are way smaller at equal robustness. For 128 bits of security,
  RSA requires a 3072 bits long key whereas an ECC equivalent requires only 256
  bits. This is really interesting for all network operations that require to
  provide a public key along with the payload for example. In our case it’s also
  useful to produce a QR Code containing a public key that is easier to scan
  thanks to a smaller data density.
* Private key operations are faster. For example, in those cases with 128 bits
  of security, RSA is generally 10 times slower than ECC.

### Key attribution

During the account creation process, two random key pairs are generated:

* An account key pair
* A device key pair that will be associated to the current device (used to
  create the account)

The device public key is added as the first block (SigChainInit) in the account
signature chain and is signed by the account private key. The signature chain is
described in the next section below.

Afterwards, the account private key is discarded because it won’t be used
anymore. The subsequent device identities that will be added to the account
signature chain will be signed by any device already present in the signature
chain and not revoked.

### Signature chain

The signature chain, or SigChain, logs the history of added and removed devices
for an account. It can be provided to any contact to certify that a device
belongs to the same account. If the signature chain has two “branches” it must
be consolidated so it includes all the added/removed devices.

The signature chain is transmitted via
Protocol Buffers<sup>[2](#footnote2)</sup> using the SigChain message.

#### Initialize signature chain

Create the sigchain by self signing the first device public key with the account
key.

See SigChainInit message.

#### Add device

Add a new device by signing its device public key using an existing device
public key.

See SigChainAddDevice message.

#### Remove device

Remove a device by signing the operation using an existing device public key.

See SigChainRemoveDevice message.


### Rendezvous points

A rendezvous point is a volatile address on the peer to peer network where two
devices can meet. Both devices need to be able to generate the same address from
previously shared secrets. In this way, device A can advertise its presence on
the rendezvous point and device B will just need to check the rendezvous point
if it need to communicate with device A.

A device can broadcast its availability on multiple rendezvous points (specific
to its account, a group it’s part of, etc…).

The address of the rendezvous point is generated from two values:

* A resource ID (account ID, group ID, etc…)
* A time based token generated from a 32-bytes seed (also specific to an
  account, a group or a contact pair)

The rendezvous seed is a random value exchanged by parties upstream, when shared
within an URL or a QR Code the seed is multibase<sup>[3](#footnote3)</sup>
encoded.

The default period is a timestamp as an unsigned 64 bits integer and is resetted
at midnight UTC + an offset. During this whole period a device will announce its
presence to other devices and can therefore be reached multiple time.

The offset (after midnight UTC) is applied to even out updates of the rendezvous
point across the network. The `periodBytes` value below is the current period of
time in seconds since epoch represented as 8 bytes in
big-endian<sup>[4](#footnote4)</sup>.

The time update offset is a modulo of the resource ID by 21600 seconds (6
hours).

The rendezvous point address is a base64 encoded SHA256 hash of the following
value

```
ResourceID + hmac_sha256(rdvSeed, periodBytes)
```

Three types of rendezvous points currently exist:

* A contact request rendezvous point, which can be enabled or disabled at will
  (one by account)
* A contact to contact rendezvous point (one by pair of accounts that are
  contacts)
* A group rendezvous point (one by group)

Communication
-------------

### Envelope

See the Envelope protocol buffer message.

The envelope contains everything that has to be publicly accessible for message
delivery and their decryption. We attempt to make this metadata as meaningless
as possible to devices external to the group. We will describe below how this is
the case for the message counter, the sender device identifier, the group
identifier and the envelope signature.

Each of those values has to be sufficiently opaque so a third party observer
wouldn’t be able to link participants or their activity.

However depending on the context some metadata can’t be hidden. As an example,
the push notification servers (Apple for iOS, Google for Android), that are
optional but available  to provide a better user experience. Such servers will
know the recipient device and the rough emission time of a message, but they
won’t know anything about the sender or the group related to that message.

#### Sender and group identifiers

The sender and group identifiers are derived from the group rendezvous seed.
They will rotate once daily.

For PubSub<sup>[5](#footnote5)</sup> and publicly accessible logs it is a
SHA-256 hash of:

```
ResourceID + hmac_sha256(rdvSeed, periodBytes)
```

For a push notifications it is a SHA-256 hash of:

```
ResourceID + ReceiverID + hmac_sha256(rdvSeed, periodBytes)
```

The value of ResourceID above is:

* The group identifier for the GroupID field
* The device identifier for the SenderID field

The value of ReceiverID is the device identifier of the device receiving the
push notification.

The rendezvous seed is specific to the group.

#### Signature

The envelope signature is based on data not present within the envelope so it
can’t be proved that the sender has sent the message unless you have access to
the group secrets.

The envelopes are signed using a `Ed25519` secret key of the sender device.

```
ed25519_sig(hmac_sha256(rdvSeed, encryptedEventBytes))
```

#### Counter

A counter is present in the envelope to ensure that all messages are received in
the right order. In some part of the protocol, this value is used as a nonce
during message encryption process (see Group encryption). This value is publicly
exposed and needs to be non predictable by external entities. We do so by
computing a HMAC value of the counter with a secret shared across parties. The
counter is a 64 bits hash used to determine whether a message is missing or if
messages arrive out of order. Internally the state is stored as an unsigned
integer.

##### Initial value

The initial counter value is random and created either by the group creator or
the group inviter. This prevent to expose if the group is newly created or not.

##### Seed

The seed used is the private rendezvous seed exchanged by two contact accounts
in case of device-to-device communication or the group rendezvous seed which is
common to the whole group members in case of a multiple device context. In both
cases they are used for  the rendezvous points generation.

##### Overflows

The counter is circular so when it overflows the value of an unsigned 64 bit
integer it loops back to 0.

##### Over the wire values

The value of the counter exchanged publicly (for example within a push
notification or in logs accessible by anyone) is a HMAC value computed using the
rendezvous seed and the current counter increment. This allows recipients to
ensure messages are received in order and that none are missing without
disclosing the actual counter value to external parties.

hmac_sha256(rdvSeed, counterValue)

### Device to device

#### Rendezvous points

##### For two unknown accounts

To reach an unknown account, a device needs

* Their account public key
* Their public rendezvous point rendezvous seed

Both informations are exchanged by peers during the contact adding process in
the form of a QRCode, an URI or a simple string.

Note: More data can be added to a Berty URI, for example to add a contact it can
be:

> [berty://contact/add#contact-id=AccountPublicKey&rendezvous-seed=RendezvousSeed&displayName=Mark%20Z](#)

The rendezvous seed used for contact requests can be resetted for privacy
reasons. Additionally a device may not broadcast its availability on the
rendezvous point if the user desires it. As it is different from the seed used
among group members or between to accounts other communications won’t be
affected by this change.

##### For two accounts that are contacts

To reach an account in its contact list, a device needs

* Their account public key
* Their private rendezvous point rendezvous seed

These values were exchanged during the contact adding process.

#### Handshakes<sup>[6](#footnote6)</sup>

Handshakes are used by a pair of devices to establish trust and communicate
through a double ratchet<sup>[7](#footnote7)</sup> session.
Two cases can happen:

1. Accounts owning the devices are unknown, so devices need to:
    1. Identify themselves, the device that initiated the handshake needs to
       prove that it have permission to do so by providing the account ID
       associated to the target device (see Rendezvous points unknown)
    2. Exchange their account signature chains
    3. Initialize a double ratchet session
2. Accounts ownings the devices are contacts, so devices need to:
    1. Identify themselves using their device ID and data derived from their
       private rendezvous seed  (see Rendezvous points contacts)
        1. If both devices already communicated before, continue to step 2.ii
        2. If both devices never communicated before, fallback to step 1.i
    2. Continue to communicate through the double ratchet session initialized
    previously

We’ll describe both handshakes further using this naming convention:

* _A_ is the **account identity** (Ed25519) public key of the account **A**
* _A<sub>1</sub>_ is the **device long-term identity** (Ed25519) public key for
  the **first** device of the account A
* _a<sub>1</sub>_ is a device **ephemeral** signing (Ed25519) or encryption
  (X25519) public key for device the **first** device of account **A**
* _A<sup>sigChain</sup>_ is the **account signature chain** of the account A
* _E<sub>y·z</sub>(x)_ notes the encryption of value _x_ using the key pairs _y_
  and _z_ (we rely on NaCl crypto_box function which encrypts and authenticates
  a message using public key cryptography).
* _sig<sub>y</sub>(x)_ notes the signature of value _x_ using the private key
  _y_ verifiable using the corresponding public key.

Depending on the use case devices A and B can be handled by two distinct or by
the same account.

We need to ensure that no one is impersonating the intended contact on their
rendezvous point otherwise they would be able to reuse informations received
during the handshake.

Both handshakes start with the following steps that are not encrypted:


<table class="table table-bordered">
    <thead>
        <tr>
            <th>Step</th>
            <th>Description</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td><i>A<sub>1</sub>→B<sub>1</sub>:a<sub>1</sub></i></td>
            <td>A sends its ephemeral public keys (signature and encryption)</td>
        </tr>
        <tr>
            <td>2</td>
            <td><i>A<sub>1</sub>←B<sub>1</sub>:b<sub>1</sub></i></td>
            <td>B sends its ephemeral public key (encryption)</td>
        </tr>
    </tbody>
</table>

For all the steps preceding the double ratchet communication, the message
encryption is performed using the crypto_box
[NaCl](https://nacl.cr.yp.to/index.html) function
([golang implementation](https://godoc.org/golang.org/x/crypto/nacl/box)) using
both device ephemeral encryption key pairs:

[`crypto_box`](https://nacl.cr.yp.to/box.html)`(m,n,pk,sk)`

_Note: here n (nonce) is a simple counter_

##### For two unknown accounts

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Step</td>
      <th class="formula l">Description</td>
      <th>Comment</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3a</td>
      <td>
          <i>A<sub>1</sub>→B<sub>1</sub>:
          E<sub>a<sub>1</sub>·b<sub>1</sub></sub>
          (sig<sub>a<sub>1</sub></sub>(B·b<sub>1</sub>))
          </i>
      </td>
      <td>
        <p>
            A sends a concat of B’s account public key and B’s
            ephemeral encryption key signed with A’s ephemeral signing key.
            Adding B’s ephemeral encryption key to signed data ensure that A
            didn’t get a signed B’s account public key and reused A’s ephemeral
            key from a previous handshake where A was impersonating B.
        </p>
        <p>
            B needs to ensure these values are correct before continuing.
            The value is encrypted using the temporary secrets.
        </p>
        <p><b>
            A now proved to B that he knew B’s account public key before
            the handshake
        </b></p>
      </td>
    </tr>
    <tr>
      <td>4a</td>
      <td>
          <i>A<sub>1</sub>←B<sub>1</sub>:
          E<sub>a<sub>1</sub>·b<sub>1</sub></sub>
          (
              B<sup>sigChain</sup>, B<sub>1</sub>,
              sig<sub>B<sub>1</sub></sub>(B<sup>sigChain</sup>·a<sub>1</sub>)
          )
          </i>
      </td>
      <td>
        <p>
            B sends its signature chain and current device public key along
            with a concat of both values signed with B’s current device key
            to prove there’s no impersonation.
        </p>
        <p>
            A must ensure that the signature chain is valid, sent from the same
            account ID as requested and the device ID is correctly included in
            the sigchain.
        </p>
        <p>
            <b>B now proved to A that B’s device is owned by the right account
            A now knows B’s sigchain and current device identity</b>
        </p>
      </td>
    </tr>
    <tr>
      <td>5a</td>
      <td>
          <i>A<sub>1</sub>→B<sub>1</sub>:
          E<sub>a<sub>1</sub>·b<sub>1</sub></sub>
          (
              A<sup>sigChain</sup>, A<sub>1</sub>,
              sig<sub>A<sub>1</sub></sub>(A<sup>sigChain</sup>·a<sub>1</sub>)
          )
          </i>
      </td>
      <td>
        <p>
            A sends its signature chain and current device public key along with
            a concat of both values signed with A’s current device key to prove
            there’s no impersonation.
        </p>
        <p>
            B must ensure that the signature chain is valid and the device ID is
            correctly included in the sigchain.
        </p>
        <p>
            <b>B now knows A’s sigchain and current device identity</b>
        </p>
      </td>
    <tr>
      <td>6a</td>
      <td>
        <span class="tag pink">
          <i class="far fa-exclamation-triangle"></i>TODO
        </span>
      </td>
      <td>
          <p>Init double ratchet session</p>
      </td>
    </tr>
  </tbody>
</table>

##### For two accounts that are contacts

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Step</td>
      <th class="formula m">Description</td>
      <th>Comment</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>3b</td>
    <td>
        <i>A<sub>1</sub>→B<sub>1</sub>:
        E<sub>a<sub>1</sub>·b<sub>1</sub></sub>
        (
            sig<sub>A<sub>1</sub></sub>(b<sub>1</sub>)
        )
        </i>
    </td>
    <td>
      <p>
        A sends a concat of the output generated using the private rendezvous
        seed common to A and B and B’s ephemeral encryption key signed with A’s
        ephemeral signing key.
      </p>
      <p>
        Adding B’s ephemeral key to signed data ensure that A didn’t get a
        signed rendezvous token for the current period and reused A ephemeral
        key from a previous handshake where A was impersonating B.</p>
      <p><b>
        A now proved to B that their accounts are contacts (via a rendezvous
        token for the current period) and gave its current device ID
        (via signature)
      </b></p>
    </td>
  </tr>
  <tr>
    <td>4b</td>
    <td>
        <i>A<sub>1</sub>←B<sub>1</sub>:
        E<sub>a<sub>1</sub>·b<sub>1</sub></sub>
        (
            sig<sub>B<sub>1</sub></sub>(a<sub>1</sub>)
        )
        </i>
    </td>
    <td>
      <p>
        If B’s current device already communicated before with A’s current
        device:
      </p>
      <p>
        B sends A’s ephemeral key signed with its current device key so A can
        identify B’s current device and they can resume their double ratchet
        session.
      </p>
      <p>
        B now proved to A that it owns this device private key
        (no impersonation)
      </p>
      <p>
        A now knows B’s current device ID
      </p>
      <p><strong>ALTERNATIVELY</strong></p>
      <p>
        If B’s current device never communicated before with A’s current device:
      </p>
      <p>
        It send a fallback response, both devices fallback to step 3a to update
        each other signature chain and init a double ratchet session.
      </p>
    </td>
    </tr>
    <tr>
      <td>5b</td>
      <td>
        <span class="tag pink">
          <i class="far fa-exclamation-triangle"></i>TODO
        </span>
      </td>
      <td>
          <p>Resume double ratchet session</p>
      </td>
    </tr>
  </tbody>
</table>

#### Message types

##### New contact request

Event sent to a new contact to request it.

###### Request structure

ContactRequest protobuf message


##### Accept contact request

Event sent from a requested contact

The requester signature is included so any of their device can
accept the contact request

###### Request structure

ContactRequestAccepted protobuf message

##### Group invite

The group invite event is sent to a device to include it to a group. The
inviter sets the value of the “Device group secret”, the “current derivation
status” and “counter” for the devices. The “counter” value can be set
to anything.

###### Request structure

GroupDetails protobuf message


### Group communication

#### Envelope structure

See the Envelope protocol buffer message.

#### Encryption

Encryption for group messaging relies on
[KDF chain](https://signal.org/docs/specifications/doubleratchet/#kdf-chains)
concept and more specifically on
[symmetric-key ratchet](https://signal.org/docs/specifications/doubleratchet/#symmetric-key-ratchet)
variant. Each device in a group manages its own message chain and is the only
one able to write on it (one writer / many readers).

Each new device added to the group is assigned:

* KDF key: random 32 bytes long value (will be derived for each message)
* Salt: random 64 bytes long value (will remain constant)
* Counter: random unsigned int (see Counter)

These values are shared with every other group member along with the device
ID of the new device.

When a device sends a message to the group, it will first derive one new KDF
key and one message key using [HKDF](https://tools.ietf.org/html/rfc5869).
Find below a golang example code using
[HKDF package](https://godoc.org/golang.org/x/crypto/hkdf):

```go
func deriveNextKeys(currKDFKey [32]byte, salt [64]byte, groupID []byte)
   (nextKDFKey, nextMsgKey [32]byte) {
    // Salt length must be equal to hash length (64 bytes for sha256)
    hash := sha256.New

    // Generate Pseudo Random Key using currKDFKey as IKM and salt
    prk := hkdf.Extract(hash, currKDFKey[:], salt[:])
    // Expand using extracted prk and groupID as info (kind of namespace)
    kdf := hkdf.Expand(hash, prk, groupID)

    // Generate next KDF and message keys
    io.ReadFull(kdf, nextKDFKey[:])
    io.ReadFull(kdf, nextMsgKey[:])

    return nextKDFKey, nextMsgKey
}
```

Then it:

  1. Replaces the current KDF key with newly derived one
  2. Increments the counter (see Increments)
  3. Encrypts the message using
     [secretbox](https://godoc.org/golang.org/x/crypto/nacl/secretbox) seal
     function passing counter as nonce and newly derived message key as key
  4. Sends the ciphertext to other members along with the counter
     and a signature


_Notes:_

  * The salt is constant to make it possible to read a message if some
    previous ones were never received.
  * The “groupID” used in the code is the group identifier. It’s used as
    info parameter in expand to make the derived keys context-specific as
    advised in the [HKDF RFC](https://tools.ietf.org/html/rfc5869#section-3.2).
  * A message key is only used to encrypt and decrypt one specific message
    and nothing will be derived from it.

#### Rendezvous point/Pubsub channel

The rendezvous point is constructed using:

  * ResourceID : Group ID
  * Rendezvous seed: Group rendezvous seed

If desired, an account can also advertise itself on the following rendezvous
point so other member of the group can send it a contact request:

  * ResourceID: AccountID
  * Rendezvous seed: Group rendezvous point seed (common to all group members)


#### Group management

##### Group init

The group creator will initiate the group locally and send the invitation to
the other group members. See the Group Invite section in the
_Device to Device signaling_ part of this document for more information.

##### Add members

New members will receive a payload similar to the one received on group init.
See the Group Invite section in the Device to Device signaling part of this
document for more information.

Existing members will receive the list of the newly added members and the
required secrets to open their messages.

Permissions are not defined by this document and can be enforced in clients by
implementers. For example an account holder could be able to add some of its
own devices to a group but can not add devices from someone else.

###### Payload

GroupAddedMembers protobuf message

#### Group signaling

##### Group state synchronisation

<span class="tag yellow"><i class="far fa-traffic-cone"></i>WIP</span>

Should we send our current event status and receive others?
Should it be done via PubSub (ask Antoine for the Wazza event)? We can do it
with replicated database (see OrbitDB or the lower level IPFS-log)

##### Event broadcast

When a new event is created it is broadcasted using PubSub, so that not all
of the group members need to be reached individually. Only devices currently
connected can be reached this way.

## Protobuf

### Signature chain

```protobuf
message SigChainInit {
   bytes account_public_key = 1;
   bytes device_public_key = 2;
   bytes signature = 3;
}

message SigChainAddDevice {
   bytes parent_signature = 1;
   bytes new_device_public_key = 2;
   bytes signer_public_key = 3;
   bytes signature = 4;
}

message SigChainRemoveDevice {
   bytes parent_signature = 1;
   bytes removed_device_public_key = 2;
   bytes signer_public_key = 3;
   bytes signature = 4;
}

enum SigChainEventType {
   INIT_CHAIN = 0;
   ADD_DEVICE = 1;
   REMOVE_DEVICE = 2;
}

message SigChainEvent {
   SigChainEventType event_type = 1;
   bytes event = 2;
}

message SigChain {
   repeated SigChainEvent events = 1;
}
```

### Device to device

```protobuf
message ContactRequest {
   bytes own_public_rendezvous_seed = 1;
   bytes contact_pair_rendezvous_seed = 2;
   bytes request_signature = 3;
   // ...other metadata
}

message ContactRequestAccepted {
   bytes own_public_rendezvous_seed = 1;
   bytes contact_pair_rendezvous_seed = 2;
   bytes request_signature = 3;
   // ...other metadata
}
```


### Group management

```protobuf
message GroupMemberDevice {
   bytes public_key = 1;
   bytes group_secret = 2;
   bytes derivation_state = 3;
   bytes derivation_counter = 4;
   // ...other metadata
}

message GroupMemberAccount {
   bytes sig_chain = 1;
   repeated GroupDevice devices = 2;
   // ...other metadata
}

message GroupDetails {
   bytes group_creator_public_key = 1;
   bytes group_id = 2;
   bytes group_rendezvous_seed = 3;
   repeated GroupMemberAccount members = 4;
}

message GroupAddedMembers {
  repeated GroupMemberAccount members = 1;
}
```

### Group messages

```protobuf
message Envelope {
   bytes group_id = 1;
   bytes sender_id = 2;
   bytes counter = 3;
   bytes event = 4;
   google.protobuf.Timestamp timestamp = 5;
   bytes signature = 6;
}
```

## Threats

### Modified clients
* They may not forward appropriate messages if they want to mute someone
* They could use forged ids

Protocol versioning
-------------------

##### Version 0.1 - Initial release:

  * Contact requests
  * Group management (creation, add members)
  * Group messaging

##### Planned for future releases:

  * Streams (audio, video)
  * Device pairing + device sync
  * Attachments
  * Invitation links to groups (ie. RDV point + Group ID +
    Single-use invitation token)
  * Public links to groups (ie. RDV point + Group ID +
    Reusable invitation token)
  * Removing devices from groups

##### Considered for future releases:

  * Device capabilities (Push reception, emission, mobile, desktop,
    tunneling, dispatching)
  * Group members types (Regular, bot, dispatching)
  * Group members removal
  * Location sharing<sup>[8](#footnote8)</sup>


Footnotes
---------

1. <a name="footnote1"></a> More info:
   http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8951-CryptoAuth-RSA-ECC-Comparison-Embedded-Systems-WhitePaper.pdf
2. <a name="footnote2"></a> Protocol Buffers or Protobuf is a serialization
   protocol developed by Google. https://developers.google.com/protocol-buffers/
3. <a name="footnote3"></a>  https://github.com/multiformats/multibase
4. <a name="footnote4"></a> In Python it would be `struct.pack(">Q", timestamp)`.
5. <a name="footnote5"></a> Publish-subscribe. In our case we rely on libp2p’s
   PubSub which provides an efficient way to propagate the data among peers.
6. <a name="footnote6"></a> Inspired by
   https://dominictarr.github.io/secret-handshake-paper/shs.pdf
7. <a name="footnote7"></a> See Signal doc on Double Ratchet
   https://www.signal.org/docs/specifications/doubleratchet/
8. <a name="footnote8"></a> WhatsApp lists it on their white paper as a distinct
   problem (real time, frequent updates, but only the last value is important)
   https://www.whatsapp.com/security/WhatsApp-Security-Whitepaper.pdf


## `bertyprotocol.proto`

{{< highlight protobuf "linenos=table,linenostart=1" >}}
syntax = "proto3";

package berty.protocol;

import "github.com/gogo/protobuf/gogoproto/gogo.proto";
import "github.com/golang/protobuf/ptypes/timestamp/timestamp.proto";

option go_package = "berty.tech/go/pkg/bertyprotocol";

// ProtocolService is the top-level API to manage an instance of the Berty Protocol.
// Each Berty Protocol Instance is considered as a Berty device and is associated with a Berty user.
service ProtocolService {
  // InstanceExportData exports instance data
  rpc InstanceExportData (InstanceExportData.Request) returns (InstanceExportData.Reply);

  // InstanceGetConfiguration gets current configuration of this protocol instance
  rpc InstanceGetConfiguration (InstanceGetConfiguration.Request) returns (InstanceGetConfiguration.Reply);

  //
  // AccountManager
  //

  // An account is associated with a Berty user

  // AccountGetConfiguration get current account global configuration (shared between all devices linked to current account)
  rpc AccountGetConfiguration (AccountGetConfiguration.Request) returns (AccountGetConfiguration.Reply);

  // AccountGetInformation get current account global information (shared between all devices linked to current account)
  rpc AccountGetInformation (AccountGetInformation.Request) returns (AccountGetInformation.Reply);

  // AccountLinkNewDevice link a new device to this account
  rpc AccountLinkNewDevice (AccountLinkNewDevice.Request) returns (AccountLinkNewDevice.Reply);

  // AccountDisableIncomingContactRequest disable incoming contact request, under the hood, this will make you undiscoverable for new contact
  rpc AccountDisableIncomingContactRequest (AccountDisableIncomingContactRequest.Request) returns (AccountDisableIncomingContactRequest.Reply);

  // AccountEnableIncomingContactRequest enable incoming contact request
  rpc AccountEnableIncomingContactRequest (AccountEnableIncomingContactRequest.Request) returns (AccountEnableIncomingContactRequest.Reply);

  // AccountResetIncomingContactRequestLink invalidate the request link
  rpc AccountResetIncomingContactRequestLink (AccountResetIncomingContactRequestLink.Request) returns (AccountResetIncomingContactRequestLink.Reply);

  //
  // Event Manager
  //

  // Event Stream is a channel on which all the events of the protocol are
  // published (contact request, new incoming message, etc...).

  // EventSubscribe listen for real time protocol events
  rpc EventSubscribe (EventSubscribe.Request) returns (stream EventSubscribe.Reply);

  //
  // ContactRequestManager
  //
  // Two accounts can be considered as contacts if a contact request from one has been accepted by the other and secrets
  // for further communication have been exchanged.

  // ContactRequestAccept accepts the given contact request, the requester signature is included so any of their device
  // can accept the contact request
  rpc ContactRequestAccept (ContactRequestAccept.Request) returns (ContactRequestAccept.Reply);

  // ContactRequestDiscard discards the given contact request
  rpc ContactRequestDiscard (ContactRequestDiscard.Request) returns (ContactRequestDiscard.Reply);

  // ContactRequestListIncoming lists incoming contact request sent to your account
  rpc ContactRequestListIncoming (ContactRequestListIncoming.Request) returns (stream ContactRequestListIncoming.Reply);

  // ContactRequestListIncoming lists pending contact request sent by your account
  rpc ContactRequestListOutgoing (ContactRequestListOutgoing.Request) returns (stream ContactRequestListOutgoing.Reply);

  // ContactRequestSend sends a contact request to the given contact
  rpc ContactRequestSend (ContactRequestSend.Request) returns (ContactRequestSend.Reply);

  //
  // Contact Manager
  //

  // ContactGet gets contact's information
  rpc ContactGet (ContactGet.Request) returns (ContactGet.Reply);

  // ContactList lists contacts of this account
  rpc ContactList (ContactList.Request) returns (stream ContactList.Reply);

  // ContactList removes the given contact
  rpc ContactRemove (ContactRemove.Request) returns (ContactRemove.Reply);

  //
  // Stream Manager
  //

  // StreamManagerRequestToContact requests a stream to a specific contact
  rpc StreamManagerRequestToContact (StreamManagerRequestToContact.Request) returns (StreamManagerRequestToContact.Reply);

  // StreamManagerAccept accepts a stream request, and create a stream with the
  // contact that sent you this request
  rpc StreamManagerAccept (stream StreamManagerAccept.Request) returns (stream StreamManagerAccept.Reply);

  //
  // Group Manager
  //
  // A group is a common communication channel shared by a set of devices. It can be devices from different accounts. In
  // the context of the Berty messaging application, groups are used for all conversations between contacts, whether
  // they include two or more contacts.

  // GroupCreate initiate a group locally
  rpc GroupCreate (GroupCreate.Request) returns (GroupCreate.Reply);

  // GroupGenerateInviteLink generates an invitation link used to send the invitation to
  // the other group members
  rpc GroupGenerateInviteLink (GroupGenerateInviteLink.Request) returns (GroupGenerateInviteLink.Reply);

  // GroupLeave leaves a group
  rpc GroupLeave (GroupLeave.Request) returns (GroupLeave.Reply);

  // GroupList lists all group for this account
  rpc GroupList (GroupList.Request) returns (stream GroupList.Reply);

  //
  // Group Message Manager
  //

  // GroupMessageCreate creates a new message for the group, and send the invitation to
  // the other group members.
  rpc GroupMessageCreate (GroupMessageCreate.Request) returns (GroupMessageCreate.Reply);

  // GroupMessageList lists messages from this group
  rpc GroupMessageList (GroupMessageList.Request) returns (stream GroupMessageList.Reply);

  // GroupTopicPublish return a stream used to publish volatile updates to other group members
  // on a specific topic
  rpc GroupTopicPublish (stream GroupTopicPublish.Request) returns (GroupTopicPublish.Reply);

  // GroupTopicSubscribe subscribes to a topic to receive volatile message from it
  rpc GroupTopicSubscribe (GroupTopicSubscribe.Request) returns (stream GroupTopicSubscribe.Reply);

  //
  // Group Invitation Manager
  //
  // New members will receive a payload similar to the one received on group init. Existing members will receive the
  // list of the newly added members and the required secrets to open their messages.

  // GroupInvitationAccept accepts an invation to join a group
  rpc GroupInvitationAccept (GroupInvitationAccept.Request) returns (GroupInvitationAccept.Reply);

  // GroupInvitationCreate creates an invitation, that can be sent to join this group
  rpc GroupInvitationCreate (GroupInvitationCreate.Request) returns (GroupInvitationCreate.Reply);

  // GroupInvitationDiscard discards an invtation sent to you to join a group
  rpc GroupInvitationDiscard (GroupInvitationDiscard.Request) returns (GroupInvitationDiscard.Reply);

  // GroupInvitationList lists pending invitation to this group
  rpc GroupInvitationList (GroupInvitationList.Request) returns (stream GroupInvitationList.Reply);
}

//
// Instance Manager
//

message InstanceExportData {
  message Request {}
  message Reply {
    bytes exported_data = 1;
  }
}

message InstanceGetConfiguration {
  enum SettingState {
    Unknown = 0;
    Enabled = 1;
    Disabled = 2;
    Unavailable = 3;
  }
  message Request {}
  message Reply {
    string peer_id = 1 [(gogoproto.customname) = "PeerID"];
    repeated string listeners = 2;
    SettingState ble_enabled = 3;
    SettingState wifi_p2p_enabled = 4; // MultiPeerConnectivity for Darwin and Nearby for Android
    SettingState mdns_enabled = 5;
    SettingState relay_enabled = 6;
  }
}

//
// Account Manager
//

message AccountGetConfiguration {
  message Request {}
  message Reply {
    bool contact_requestable = 1;
    bytes default_pinning_service = 2;
    bytes metadata = 3;
  }
}

message AccountGetInformation {
  message Request {}
  message Reply {
    bytes account_pub_key = 1;
    repeated Device devices = 2;
  }
}

message AccountLinkNewDevice {
  message Request {}
  message Reply {
    Invitation invitation = 1;
  }
}

message AccountDisableIncomingContactRequest {
  message Request {}
  message Reply {}
}

message AccountEnableIncomingContactRequest {
  message Request {}
  message Reply {
    ContactRequestLink contact_request_link = 1;
  }
}

message AccountResetIncomingContactRequestLink {
  message Request {}
  message Reply {
    ContactRequestLink contact_request_link = 1; // Reset rdv_point_seed and rotation_time_point
  }
}

//
// Event Manager
//

message EventSubscribe {
  message Request {}
  message Reply {
    Type type = 1;
    bytes event_id = 2 [(gogoproto.customname) = "EventID"];

    MessageEvent message_event = 3;
    ContactRequestEvent contact_request_event = 4;
    GroupInvitationEvent group_invitation_event = 5;
    BroadcastEvent broadcast_event = 6;
  }

  enum Type {
    EventUnknown = 0;
    EventMessage = 1;
    EventContactRequest = 2;
    EventGroupInvitation = 3;
    EventBroadcastAvailable = 4;
  }
  message MessageEvent {
    bytes group_id = 1 [(gogoproto.customname) = "GroupID"];
    bytes member_id = 2 [(gogoproto.customname) = "MemberID"];
    bytes payload = 3;
  }

  message ContactRequestEvent {
    bytes contact_account_pub_key = 1;
    bytes metadata = 2;
  }

  message GroupInvitationEvent {
    bytes group_id = 1 [(gogoproto.customname) = "GroupID"];
    bytes inviter_pub_key = 2;
    bytes metadata = 3;
  }

  message BroadcastEvent {
    bytes group_id = 1 [(gogoproto.customname) = "GroupID"];
    bytes member_id = 2 [(gogoproto.customname) = "MemberID"];
    bytes topic_id = 3 [(gogoproto.customname) = "TopicID"];
  }
}

//
// ContactRequest Manager
//

message ContactRequestAccept {
  message Request {
    bytes contact_account_pub_key = 1;
  }
  message Reply {}
}

message ContactRequestDiscard {
  message Request {
    bytes contact_account_pub_key = 1;
  }
  message Reply {}
}

message ContactRequestListIncoming {
  message Request {}
  message Reply { // streamed
    Contact contact = 1;
  }
}

message ContactRequestListOutgoing {
  message Request {}
  message Reply { // streamed
    Contact contact = 1;
  }
}

message ContactRequestSend {
  message Request {
    ContactRequestLink contact_request_link = 1;
  }
  message Reply {}
}

//
// Contact Manager
//

message ContactGet {
  message Request {
    bytes contact_account_pub_key = 1;
  }
  message Reply {
    Contact contact = 1;
  }
}

message ContactRemove {
  message Request {
    bytes contact_account_pub_key = 1;
  }
  message Reply {}
}

message ContactList {
  message Request {}
  message Reply { // streamed
    Contact contact = 1;
  }
}

//
// Stream Manager
//

message StreamManagerRequestToContact {
  message Request {}
  message Reply {}
}

message StreamManagerAccept {
  message Request {}
  message Reply {} // streamed
}

//
// Group Manager
//

message GroupCreate {
  message Request {
    repeated bytes contact_account_pub_key = 1; // Invitees
    bytes pinning_service = 2;
    bytes metadata = 3;
  }
  message Reply {
    GroupInfo group_info = 1;
  }
}

message GroupGenerateInviteLink {
  message Request {
    bytes group_id = 1 [(gogoproto.customname) = "GroupID"];
  }
  message Reply {
    Invitation invitation = 1;
  }
}

message GroupLeave {
  message Request {
    bytes group_id = 1 [(gogoproto.customname) = "GroupID"];
  }
  message Reply {}
}

message GroupList {
  message Request {}
  message Reply { // streamed
    GroupInfo group_info = 1;
  }
}

//
// GroupMessage Manager
//

message GroupMessageCreate {
  message Request {
    bytes group_id = 1 [(gogoproto.customname) = "GroupID"];
    bytes payload = 2;
  }
  message Reply {}
}

message GroupMessageList {
  message Request {
    bytes group_id = 1 [(gogoproto.customname) = "GroupID"];
    uint64 from_index = 2;
    uint64 to_index = 3;
  }
  message Reply { // streamed
    bytes message_id = 1 [(gogoproto.customname) = "MessageID"];
    bytes member_id = 2 [(gogoproto.customname) = "MemberID"];
    bytes payload = 3;
  }
}

//
// GroupTopic Manager
//

message GroupTopicPublish {
  message Request { // streamed
    bytes group_id = 1 [(gogoproto.customname) = "GroupID"];
    bytes topic_id = 2 [(gogoproto.customname) = "TopicID"];
    bytes volatile_data = 3;
  }
  message Reply {}
}

message GroupTopicSubscribe {
  message Request {
    bytes group_id = 1 [(gogoproto.customname) = "GroupID"];
    bytes topic_id = 2 [(gogoproto.customname) = "TopicID"];
  }
  message Reply { // streamed
    bytes volatile_data = 1;
  }
}

//
// GroupInvitation Manager
//

message GroupInvitationAccept {
  message Request {
    bytes group_id = 1 [(gogoproto.customname) = "GroupID"];
  }
  message Reply {}
}

message GroupInvitationCreate {
  message Request {
    bytes group_id = 1 [(gogoproto.customname) = "GroupID"];
    repeated bytes contact_account_pub_key = 2;
  }
  message Reply {}
}

message GroupInvitationDiscard {
  message Request {
    bytes group_id = 1 [(gogoproto.customname) = "GroupID"];
  }
  message Reply {}
}

message GroupInvitationList {
  message Request {}
  message Reply { // streamed
    bytes inviter_account_pub_key = 1;
    GroupInfo group_info = 2;
  }
}

//
// Common entities
//

message Device {
  bytes device_pub_key = 1;
  bytes parent_device_pub_key = 2; // Equal to account_pub_key for the first device
  google.protobuf.Timestamp linked_at = 3;
  bool ble_capable = 4;
  bool wifi_p2p_capable = 5;
  bool relay_capable = 6;
}

message Invitation {
  bytes inviter_member_pub_key = 1;
  bytes invitation_priv_key = 2;
  bytes invitation_pub_key_signature = 3; // Signed by inviter_member_priv_key
  uint32 group_version = 4;
  bytes group_id_pub_key = 5;
  bytes shared_secret = 6;
}

// Contact is the public version of protocolmodel.Contact and should stay in sync
message Contact {
  enum TrustLevel {
    Unknown = 0;
    Untrusted = 1;
    Accepted = 2;
    Trusted = 3;
    UltimateTrust = 4;
  }
  bytes account_pub_key = 1;
  bytes one_to_one_group_pub_key = 2;
  reserved 3;
  TrustLevel trust_level = 4;
  bytes metadata = 5;
  bool blocked = 6;
  GroupInfo one_to_one_group = 80;
  reserved 98;
  reserved 99;
}

// GroupInfo is the public version of protocolmodel.GroupInfo and should stay in sync
message GroupInfo { // group clashes with reserved SQL keyword
  enum GroupAudience {
    Undefined = 0;
    OneToOne = 1;
    Group = 2;
    Self = 3;
  }
  bytes group_pub_key = 1;
  reserved 2;
  bytes metadata = 3;
  GroupAudience audience = 4;
  uint32 version = 5;
  reserved 6;
  reserved 7;
  reserved 8;
  bytes inviter_contact_pub_key = 9;
  reserved 10;
  reserved 11;
  reserved 12;
  reserved 13;
  repeated GroupMember members = 80;
  Contact inviter = 81;
  reserved 98;
  reserved 99;
}

// GroupMember is the public version of protocolmodel.GroupMember and should stay in sync
message GroupMember {
  bytes group_member_pub_key = 1;
  bytes group_pub_key = 2;
  bytes inviter_pub_key = 3; // Will be null for first member of the group
  bytes contact_account_pub_key = 4;
  reserved 5;
  bytes metadata = 6;
  reserved 80;
  GroupInfo group_info = 81;
  GroupMember inviter = 82;
  Contact contact = 83;
  reserved 98;
  reserved 99;
}

message ContactRequestLink {
  bytes rendezvous_point_seed = 1;
  bytes contact_account_pub_key = 2;
  bytes metadata = 3;
}
{{< / highlight >}}