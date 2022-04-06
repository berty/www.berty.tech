---
title: "Berty"
description: モバイル & デスクトップ アプリ
icon: fab fa-github
color: black
open: true
ttags: <span class="tag blue">Go</span><span class="tag yellow">IPFS</span><span class="tag blue">Libp2p</span><span class="tag yellow">Gomobile</span><span class="tag blue">React Native</span><span class="tag pink">Cryptography</span><span class="tag blue">Bluetooth</span>
menu:
  repos:
    weight: 1
---

<div align="center">
  <img src="https://berty.tech/img/berty.svg" alt="Berty" title="Berty" height="200px" />
</div>

<h3 align="center">🤝 検閲と監視に耐性がある通信プロトコル</h3>

<p align="center">
  <a href="https://buildkite.com/berty/main"><img src="https://badge.buildkite.com/331d828ccb643f90f6302b13ea77ab716ec78d6631af54c987.svg?branch=master" alt="Build Status"></a>
  <a href="https://www.codefactor.io/repository/github/berty/berty"><img src="https://www.codefactor.io/repository/github/berty/berty/badge?s=bf5885a3b2782ead81d91cd423915f2e9ddc9196" alt="CodeFactor" /></a>
  <!--<a href="https://goreportcard.com/report/berty/berty"><img src="https://goreportcard.com/badge/berty/berty" alt="Go Report Card"></a>-->
  <a href="https://github.com/berty/berty/releases"><img src="https://badge.fury.io/gh/berty%2Fberty.svg" alt="GitHub version"></a>
</p>

## はじめに

**Berty** は、匿名で安全なP2Pのインターネット接続を必要としない通信プロトコルです。

高度な暗号化をつかった**プロトコル** と、そのプロトコルの上に構築された **メッセンジャーアプリ** があります。

- アカウントを作成するために電話番号やメールアドレスは必要ありません
- すべての会話にエンドツーエンド暗号化を使用しています
- できるだけメタデータを少なくすることに焦点を当ています
- 非中央集権的で、分散化されており、サーバーレスです
- No concensus, no blockchain
- インターネットに接続している必要はありません（ [BLE technology](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) と mDNSを利用しています）
- 永久に無料で、データを保存せず、透明性のあるコードで、オープンソースです

Bertyは現在、フランスの非営利団体 **Berty Technologies**によって開発されています。

使い道
- 機密情報を共有する必要があるとき。
- あなたが高い匿名性でチャットをしたいとき。
- サーバーを使用せず、あなたのデータを完全に制御したいとき
- 検閲がある国にいて、ネットワークへのアクセスが制限されているとき
- 電波が弱かったり、インターネット接続がない場所にいるとき
- 旅行中などで、安全ではないかもしれないネットワークを通してチャットをしたいとき

**注意: このプロジェクトは、専門家ではなく、何かミスをするかもしれない少数の人間のチームによって行われています。 バグや何かおかしいことに気づいた場合は、遠慮せずに** _以下の [貢献セクション](#contributing) を参照してください。_

> 私たちはあなたに最高のアプリを提供することを約束することはできませんが、 私たちはそのためにベストを尽くすことを約束することができます。

## 開発状況

**Bertyはまだ積極的な開発中であり、重要なデータを交換するために使用すべきではありません**。

現在のBerty Messengerの実装は、まだBertyプロトコルを使用していませんが、OrbitDBを直接使用しています。 これは暗号化が完全ではないということですが、良いニュースは、現在のBerty MessengerはすでにP2Pアプリであることです。

現在、 Berty Protocol は_部分的 _に実装されています。 そのためAPIは安定していません、使用する場合は破壊的変更があることを計画に入れておいてください

_We will open betas for the different packages and apps soon, so anyone will be able to give it a try even without the coding skills. 通知を受けたい場合は、ニュースレターを購読してください。_

**Note: this is an ongoing work. リポジトリは徐々に開かれており、より多くの変更や更新が行われます。**


### Berty Protocol

<a href="https://pkg.go.dev/berty.tech/berty/v2"><img src="https://img.shields.io/badge/go.dev-reference-007d9c?logo=go&logoColor=white" alt="go.dev reference"></a>
<a href="https://codecov.io/gh/berty/berty"><img src="https://codecov.io/gh/berty/berty/branch/master/graph/badge.svg?token=rBPpNHNNow" alt="Code coverage"></a>
<!-- [![go.dev reference](https://img.shields.io/badge/go.dev-reference-007d9c?logo=go&logoColor=white)](https://pkg.go.dev/berty.tech/berty/v2)
[![Code coverage](https://codecov.io/gh/berty/berty/branch/master/graph/badge.svg?token=rBPpNHNNow)](https://codecov.io/gh/berty/berty) -->


開発者がP2Pアプリケーションを書くことを可能にするSDK 必要なすべてが含まれています (暗号化、同一性、ネットワークルーティング、グループ管理、アカウント管理 デバイス管理、アプリケーションのライフサイクル)、これによってあなたは重要な機能の開発に集中できます

_Berty Protocol_のメインコンセプトは"グループ"です。 [OrbitDB](https://github.com/orbitdb)を利用した、複数のデバイスがメッセージやデータを交換できる架空の場所であり、 それ自体は [IPFS](https://ipfs.io/) に依存するものである。

Get it: `go get -u berty.tech/berty/v2`

### Berty Messenger

[React Native](https://reactnative.dev/)で書かれたメッセンジャーアプリケーションで、[gomobile-ipfs](https://github.com/ipfs-shipyard/gomobile-ipfs)や[gomobile](https://github.com/golang/mobile) を利用してBerty Protocolを使用します。

## リポジトリの主な項目

* [./go](https://github.com/berty/berty/tree/master/go): すべてのGolangコードが属する場所。
    * [./go/pkg/**bertyprotocol**](https://github.com/berty/berty/tree/master/go/pkg/bertyprotocol): **Berty Protocol** _Golang SDK_ to create secure and autonomous groups using _IPFS_.
    * [./go/framework/bertybridge](https://github.com/berty/berty/tree/master/go/framework/bertybridge): gomobile entrypoint.
    * [./go/cmd/**berty**](https://github.com/berty/berty/tree/master/go/cmd/berty): Main **Berty CLI**, containing:
        * `berty daemon`: Runs the whole Berty Protocol instance.
        * `berty demo`: Development/debugging subcommand which aims to show the internal features more easily.
        * `berty mini`: Simple CLI messenger app using Berty Protocol.
    * [./go/cmd/**rdvp**](https://github.com/berty/berty/tree/master/go/cmd/rdvp): A Rendez-Vous Point server.
* [./js](https://github.com/berty/berty/tree/master/js): Where all the Javascript/Typescript code belongs, containing:
    * The **Berty Messenger** application, written in React Native.
* [./docs](https://github.com/berty/berty/tree/master/docs): Mostly auto-generated documentation.

## Philosophy

We want to contribute to the world of free, secure communication without fear of censorship and surveillance.

Open source is more secure, since anyone can examine the code, improve it and maintain it. Our ultimate goal is to completely lose control of Berty and have it evolve as a global community project.

## Contributing

Please do!

> Use it, fork it, fix it - it's free.

If you like to code in Go, Typescript, Java, Swift, have a look at one of [our repos](https://github.com/berty).

If you code in any other language you can also help us by adding tooling, SDKs, bridges.

If you like to translate, draw, make videos or have ideas for the content, you can contribute on our repos, we have a dedicated [`assets` repo](https://github.com/berty/assets) for our medias.

We are currently setting up a goodies store and a donation page so you can help us with money if you don't have time.

And finally, you can help us by spreading the word about us to your peers.

Thank you, and feel free to [contact](https://berty.tech/contact) us or open the GitHub issues if you want more details.

Read our [contribute page](https://berty.tech/contribute).


## Licensing

© 2018-2020 [Berty Technologies](https://berty.tech)

Licensed under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0) ([`LICENSE-APACHE`](https://github.com/berty/berty/blob/master/LICENSE-APACHE)) or the [MIT license](https://opensource.org/licenses/MIT) ([`LICENSE-MIT`](https://github.com/berty/berty/blob/master/LICENSE-MIT)), at your option. See the [`COPYRIGHT`](https://github.com/berty/berty/blob/master/COPYRIGHT) file for more details.


## Source code
Source code is available on [github](https://github.com/berty/berty)

<a class="btn btn-bty btn-grack" href="https://github.com/berty/berty"><i class="fab fa-github"></i>berty/berty</a>
