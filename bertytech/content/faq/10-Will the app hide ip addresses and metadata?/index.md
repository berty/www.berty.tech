---
title: Will the app hide ip addresses and metadata?
id: 10
private: true
---

It will mainly depend on the context (relay or not, Bluetooth or not, Luck, 3G, NAT, WiFi, TEC). In the current configuration, it's not hidden by tor for example, but by "noisy" things (P2P). This already limits the ip address leak, and especially the certainty that this ip address is this exact person or device.
We then plan to use something like i2p/tor or some other onion network technology to make it possible to hide everything, including IP addresses. 
For metadata: we're doing our best efforts to work on that right now, but even here, it will get better over time.
