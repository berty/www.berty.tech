---
author: Camille
title: "Podstawa #3: Uwierzytelnianie dwustopniowe"
date: 2020-09-13
#image: "2020-08-31-Berty-Blogpost-2FA.jpg"
image: "2020-08-31-Berty-Blogpost-2FA.jpg"
categories:
  - wolność mowy
tags:
  - bezpieczeństwo
  - prywatność
description: Dowiedz się więcej o 2FA
---

# Podstawa #3: Uwierzytelnianie dwuskładnikowe


W dzisiejszych czasach dostęp do konta jest coraz bardziej zagrożony. Rzeczywiście powstaje coraz więcej i więcej potężnego oprogramowania do testowania zestawów haseł. Jak więc zabezpieczyć dostęp do swojego konta? Czy słyszałeś kiedykolwiek o uwierzytelnianiu wieloetapowym lub wielostopniowym?

Być może nie zwróciłeś uwagi, ale prawdopodobnie już w świecie fizycznym używasz uwierzytelniania dwuskładnikowego. Czy pamiętasz tę kartę wydaną przez bank, aby potwierdzić transakcję na Twoim koncie? Weryfikacja dwuskładnikowa lub 2FA jako powszechniej znana, jest kolejnym krokiem do wymaganej procedury logowania. Bez 2FA wprowadzasz nazwę użytkownika oraz hasło i jesteś gotowy. Hasło jest jedynym czynnikiem uwierzytelniającym. Drugi czynnik sprawia, że Twoje konto jest bezpieczniejsze, w kilku słowach.

Nie należy mylić 2FA ze zdolnością połączenia z witryną za pośrednictwem dostawcy poczty elektronicznej („zaloguj za pomocą Google” itp.). Nie jest to ściśle rzecz biorąc 2FA ale czasami lepiej jest mieć bezpieczny system poczty elektronicznej, a nie zaufać „bezpiecznej” stronie internetowej. Ale to inny temat.

## Czym jest uwierzytelnianie dwuskładnikowe (2FA)?

![](https://i.imgur.com/MJUVRuw.jpg)

Uwierzytelnianie dwuskładnikowe (2FA) to metoda uwierzytelniania, w ramach której użytkownik komputera uzyskuje dostęp wyłącznie po pomyślnym przesłaniu dwóch lub więcej dowodów do mechanizmu uwierzytelniania.

Na przykład, jeśli chcesz zalogować się na swoje konto e-mail, musisz przedstawić dodatkową metodę i hasło. Może to być kod otrzymany przez SMS lub kod w aplikacji identyfikacyjnej.

Zazwyczaj pierwsza metoda uwierzytelniania jest czymś, co znasz (hasło, kod PIN). Drugim z nich jest informacja, której nie znasz (kod generowany szczególnie dla uwierzytelniania), ale która jest z Tobą powiązana.

Można je podzielić na kilka rodzajów informacji:
- 🔑 coś co masz (obiekt jak klucz USB)
- 🐾 coś czym jesteś (odcisk palca, rozpoznawanie twarzy)
- 🧠 coś co znasz (hasło)
- 📍 tam gdzie jesteś (lokalizacja GPS)


> Możesz sprawdzić na https://twofactorauth.org/ czy strona internetowa/aplikacja obsługuje 2FA czy nie.

## 📞 Uwierzytelnianie dwuetapowe przez SMS

![](https://i.imgur.com/uuqGxCp.jpg)


Drugim składnikiem identyfikacji jest kod otrzymany przez SMS. Jest to prawdopodobnie najbardziej znana dla ciebie metoda.

Kod otrzymany przez SMS jest inny za każdym razem, więc jeśli Twoje hasło zostanie skradzione, to nie wystarczy by przejść dalej. Kod jest połączony z numerem telefonu komórkowego, który jest potężną funkcją bezpieczeństwa - chyba że zostałeś fizycznie skradziony lub zhakowany przez [Sim Swapping](https://berty.tech/blog/sim-swapping/).

Istotną wadą tej dwustopniowej weryfikacji jest to, że jeżeli sieć komórkowa nie działa lub znajdujesz się w regionie bez zasięgu, nie otrzymasz kodu pozwalającego na twoją identyfikację. Inną wadą jest korzystanie z podłączonego i konkretnego sprzętu (między tabletem a telefonem komórkowym), otrzymasz kod na tych urządzeniach; Twoje kody logowania są tak samo w niebezpieczeństwie, jak Twoje hasła.


## 📱 2FA przez aplikację uwierzytelniającą:

![](https://i.imgur.com/YuRNDY0.jpg)


Aplikacje uwierzytelniające zapewniają ten sam rodzaj usługi co usługi 2FA przez SMS. Jednak zamiast odbierać kody, są one generowane lokalnie na smartfonie lub tablecie. Tak więc oferują one elastyczność podczas podróży do miejsca bez sieci komórkowej.

Operacja opiera się na algorytmach kryptograficznych do generowania jednorazowych haseł, które integrują pojęcie czasu (Time-based One-time Password algorithm, TOTP).

Aplikacja 2FA wygeneruje najpierw klucz startowy o nazwie "seed". Ten ostatni będzie pochodny i wymieszany z czasem i datą w celu utworzenia kodu jednorazowego, zwykle ważnego przez 30 do 60 sekund.

> 💡 Warto wiedzieć: istnieją [menedżerzy haseł](https://berty.tech/blog/best-password-manager/), którzy zarządzają TOTP.

***Otwarto źródłowe TOTP:***

👉 https://awesomeopensource.com/projects/totp

👉 https://freeotp.github.io/

👉 https://krypt.co/

Główną wadą aplikacji 2FA jest to, że jeśli hacker przechwyci Twój seed (albo z twojego sprzętu, albo poprzez hakowanie serwera), może obliczyć każdy przyszły kod. Jeśli zalogujesz się i korzystasz z aplikacji uwierzytelniającej na tym samym urządzeniu, Twoje kody uwierzytelniania są tak samo w niebezpieczeństwie, jak hasła.


## 🗝️ uwierzytelnianie sprzętowe FIDO U2F: YubiKey i inne

![](https://i.imgur.com/ZzJa77a.png)


Jeśli szukasz solidnego rozwiązania, które jest kieszonkowe, zobacz tylko tokeny sprzętowe oparte na standardzie U2F (Universal 2nd Factor) stworzonym przez grupę FIDO. Najbardziej znanym i typowym przykładem U2F jest YubiKey, stworzonym przez Yubico.

Konkretnie jest to małe urządzenie o rozmiarze klucza USB, który generuje kod identyfikacyjny lokalnie. Po prostu podłącz klucz, aby utworzyć odpowiedni kod identyfikacyjny. Jest to zatem dodatkowy krok w prawdziwym świecie: U2F musi być fizycznie z Tobą.

Jednakże znajdziesz się w konfrontacji z kilkoma ograniczeniami: będziesz musiał je kupić i system nie jest obsługiwany we wszystkich witrynach obsługujących już 2FA przez SMS/Aplikacje. Ten 2FA wymaga fizycznego dostępu do portu USB maszyny (więc zapomnij o użyciu zdalnego dostępu, jak TeamViewer). Wreszcie, jeśli go zgubisz, będziesz musiał odzyskać wszystkie swoje konta używając kodów odzyskiwania 2FA ... Mamy nadzieję, że dobrze je zabezpieczyłeś. W przeciwnym razie dobrze skontaktować się z pomocą techniczną każdej witryny, aby wyłączyć 2FA na twoim koncie!


## Koniec rozmyślania

Podsumowując, nie ma JEDNEJ idealnej i unikalnej metody. Gdybyśmy mieli polecić coś dla ciebie: mieszaj i dopasowuj metody. Nie bój się pójść dalej niż uwierzytelnianie dwuskładnikowe, wybierz uwierzytelnianie wieloskładnikowe (MFA). Uzyskaj dostęp do menedżera haseł jak najbezpieczniej i w miarę możliwości aktywuj 2FA.

Mamy nadzieję, że podobał Ci się ten artykuł. Wszelkie pomysły i komentarze są mile widziane.

Pozdrowienia dla internetu!
{{<tweet id="1291024965630939136">}}

