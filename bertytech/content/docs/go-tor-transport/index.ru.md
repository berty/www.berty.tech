---
title: "Go-Tor-Transport"
description: Go и C tor встроенный двоичный транспорт для libp2p.
icon: fab fa-github
color: black
display_nav: false
ttags: <span class="tag blue">Go</span><span class="tag blue">Libp2p</span><span class="tag cyan">Anonymity</span><span class="tag tor">Tor</span>
open: true
menu:
  repos:
    weight: 6
---

# Go-Tor-Transport

**Go и C tor встроенный двоичный транспорт для libp2p, предназначенный для обеспечения анонимного доступа к сети libp2p.**


## Введение

[go-tor-transport](https://github.com/berty/go-tor-transport) это транспорт, обеспечивающий доступ к сети libp2p через сеть tor.

Для этого в коде в основном используется [go-libtor ](https://github.com/ipsn/go-libtor), чтобы обеспечить прямую связь с узлом [Tor](https://www.torproject.org/).

Таким образом, вначале он либо подключается к узлу, работающему в системе, либо запускает свой собственный, встраиваемый в двоичный файл, поэтому использование может быть маловероятным.

## Исходный код
Исходный код доступен на [GitHub](https://github.com/berty/go-tor-transport).

<a class="btn btn-bty btn-grack" href="https://github.com/berty/go-tor-transport"><i class="fab fa-github"></i>berty/go-tor-transport</a>
