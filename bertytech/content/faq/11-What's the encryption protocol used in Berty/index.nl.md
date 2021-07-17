---
title: "What's the encryption protocol used in Berty?"
id: 11
private: true
---

We developed a custom protocol partly based on the symmetric key ratchet of Signal and which rely on NaCl Box (Curve25519, XSalsa20 and Poly1305) and NaCl SecretBox (XSalsa20 and Poly1305).

For more information, you can refer to [our whitepaper](https://berty.tech/docs/protocol).
