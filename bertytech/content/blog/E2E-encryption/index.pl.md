---
author: camille
title: "Czym jest szyfrowanie E2E?"
date: 2019-09-05
image: "E2EE-encryption.jpg"
categories:
  - wolność mowy
tags:
  - techniczne
  - bezpieczeństwo
description: Prawdopodobnie słyszałeś już o kryptografii, a dokładniej o szyfrowaniu end-to-end. Ale czy wiesz co to naprawdę jest?
---


# Czym jest szyfrowanie End-to-End (E2EE)?

Prawdopodobnie słyszałeś już o [kryptografii](https://berty.tech/blog/history-cryptography/), a dokładniej o szyfrowaniu end-to-end. Ale czy wiesz co to naprawdę jest?

W tym artykule dowiesz się więcej o tej metodzie, która jest sercem wielu (ale nie wszystkich) bezpiecznych aplikacji do natychmiastowego wysyłania wiadomości. Szyfrowanie jest algorytmem komputerowym, który gwarantuje, że dane wymieniane z jednym lub kilkoma osobami mogą być odczytywane tylko przez właściwego odbiorcę, a nie przez losową osobę, która może być zła.

Istnieje prosta zasada poufności: za każdym razem, gdy przesyłasz jakiekolwiek informacje przez Internet, czy ma wartość, czy nie, musi być zaszyfrowana. Jeśli tego nie zrobisz, ktokolwiek (na przykład ktoś korzystający z sieci WiFi hotelu) może łatwo cię ukraść. Prawie wszystkie strony internetowe wykorzystują szyfrowanie haseł, numerów kart kredytowych, informacji bankowych online lub podobnych wrażliwych informacji. Gdybyśmy nie zaszyfrowali takich informacji, oszustwa i kradzieże tożsamości byłyby powszechne. Szyfrowanie jest podstawowym warunkiem korzystania z Internetu.

</br>

## Różne typy szyfrowania

Szyfrowanie jest rodzajem koperty cyfrowej, która uniemożliwia odczyt danych umieszczonych w tej kopercie, z wyjątkiem nadawcy i odbiorcy(ów). Szyfrowanie może być stosowane na różnych poziomach. Istnieją dwa rodzaje szyfrowania:

***Szyfrowanie w tranzycie:*** Dane są zaszyfrowane, gdy są przesyłane między twoim urządzeniem a serwerem (dostawcą usług, takim jak operator telefonu), a następnie dane są ponownie zaszyfrowane w celu przesłania ich odbiorcy(om). W ten sposób dane są zabezpieczone w drodze. Należy jednak pamiętać, że dostawca usług ma dostęp do danych w niezaszyfrowanej formie. Dostawca jest w stanie odczytać całą komunikację i nie ma innego wyboru, jak tylko zaufać mu w celu ochrony danych, które przesyłasz w najlepszy możliwy sposób.

![](image8.png)

***Szyfrowanie end-to-end:*** Z tego typu szyfrowaniem, dane są zaszyfrowane na sam koniec pomiędzy Tobą a osobą, z którą rozmawiasz, co oznacza, że nie ma pośredników. Dostawca usług przesyła tylko zaszyfrowane dane, ale nie może zobaczyć treści. Tylko nadawca i odbiorca(y) mogą odczytywać dane.

![](image6.png)


## Jak działa szyfrowanie end-to-end?



Należy rozumieć, że aby dane były chronione szyfrowaniem end-to-end, wymagany jest zestaw kluczy. Kluczem to szereg znaków, cyfr i znaków specjalnych.

Koncepcyjnie jest to unikalny kod. W szyfrowaniu end-to-end obowiązkowe jest generowanie co najmniej dwóch kluczy:

- klucz publiczny, który będzie używany do szyfrowania

- klucz prywatny, który będzie używany do deszyfrowania
- ![](image5.png)


Jak sugerują ich nazwy: klucz publiczny jest widoczny dla wszystkich, a klucz prywatny jest osobisty. Klucze te nie są takie same, dlatego ta konfiguracja jest powszechnie nazywana „szyfrowaniem asymetrycznym”. Klucz prywatny jest generowany losowo, a klucz publiczny jest generowany przy użyciu klucza prywatnego. Bardzo łatwo jest stworzyć klucz publiczny z klucza prywatnego, ale bardzo trudno jest (wymaga czasu) znaleźć klucz prywatny z klucza publicznego. W przeciwnym razie byłoby to zbyt proste.

![](image1.png)

</br>

## Prosty przykład: Alicja i Bartek

![](image4.png)

Odbiornik wiadomości (Alicja) generuje klucz prywatny i klucz publiczny. Odbiorca wiadomości (Alicja) wysyła swój klucz publiczny nadawcy (Bartkowi). Nadawca (Bartek) zaszyfruje swoją wiadomość kluczem publicznym odbiorcy (Alicji). Odbiorca (Alicja) odszyfrowuje wiadomość nadawcy (Bartka) przy użyciu klucza prywatnego. Tylko odbiorca (Alicja) będzie mógł odczytać wiadomości nadawcy (Bartka).

Wystarczy, aby nadawca (Bartek) stosował ten sam proces co odbiorca (Alicja), a ta wymiana klucza publicznego umożliwia im bezpieczną komunikację w obu kierunkach.

</br>

## ECDH: wymiana kluczy Diffie-Hellman

![](image2.png)

To było dla części teoretycznej. W praktyce szyfrowanie i odszyfrowanie algorytmu opartego na kluczy asymetrycznych wymaga czasu. W rzeczywistości znacznie łatwiej jest odszyfrować przesłanie za pomocą symetrycznego (identycznego) klucza. Jeżeli jednak osoba trzecia uzyska ten klucz, wymiana danych nie jest już bezpieczna. Łatwo rozumieć, że bardzo trudno jest wymienić hasło w sieci publicznej - wymienić się kluczem symetrycznym w sieci, która jest monitorowana.

W tym właśnie miejscu pojawia się kluczowa wymiana danych opracowana przez Diffie-Hellman. Protokół ten opiera się na dość skomplikowanym algorytmie matematycznym, ale jego użycie jest dość proste do zrozumienia. Wyobraź sobie że Bartek i Alicja są szpiegowani przez osobę trzecią o nazwie Ewa. Jedyny sposób na to, by Alicja i Bartek przechodzili przez stronę trzecią, która naprawdę nie ma zaufania. Muszą zatem stosować sztuczki w celu bezpiecznej wymiany swoich komunikatów. Algorytm Diffie-Hellman pozwala na stworzenie klucza prywatnego między dwiema stronami poprzez wymianę wiadomości w niezabezpieczonej sieci. Po stworzeniu klucza z algorytmem Diffie-Hellman, wiadomości są wysyłane otwarcie w sieci, i każdy, kto przechwytuje przesłane wiadomości, nie powinien być w stanie wywnioskować z niego wygenerowanego klucza.





-   Alicja i Bartek wybierają bardzo dużą liczbę losową, którą zachowują w tajemnicy. Niech x to liczba wybrana przez Alicje, a y to liczba wybrana przez Bartka.

-   Alicja oblicza P1 = g^x mod p i przekazuje wynik do Bartka

-   Bartek oblicza P2 = g^y mod p i przesyła wynik do Alicji

![](image10.png)

-   Alicja oblicza K1 = P2^x mod p, a Bartek oblicza K2 = P1^x mod p


W tym momencie wartość K1 obliczona przez Alicję jest równa (g^y mod p)^x mod p. Wartość K2 obliczona przez Bartka jest równa (g^x mod p)^y mod p. Prawa arytmetyczne dowodzą, że dwie wartości K1 i K2 są równe. Alicja i Bartek byli w stanie ustalić wspólny klucz prywatny.

![](image9.png)

Poufność jest zagwarantowana przez fakt, że potencjalny napastnik, który przechwyciłby komunikację Alicji i Bartka, nie miałby możliwości znalezienia klucza prywatnego na podstawie informacji przekazanych publicznie. x i y są bardzo dużymi liczbami, Niezwykle trudno jest znaleźć wartość tych informacji z jawnie przekazanych: p, g, P1 i P2. A bez x i y, niemożliwe jest znalezienie ostatniego klucza. Możesz sprawdzić ten wspaniały film z YouTube, aby uzyskać dalsze wyjaśnienia. Nikt inny niż Alicja i Bartek znają ten wspólny sekret, ponieważ nikt inny nie ma klucza prywatnego.

{{< iframe src="https://www.youtube.com/embed/YEBfamv-_do" width="560" height="315" allowfullscreen="true" >}}

</br>

Największą słabością wymiany Diffie Hellman jest to, że sama nie ustala tożsamości drugiej strony (brak autentyczności), co sprawia, że jest podatny na atak ze środka.

Podczas kluczowej wymiany z Diffie-Hellman każda ze stron nie ma dowodów na to, że komunikuje się bezpośrednio z odpowiednim partnerem. Atakujący, Ewa, może bardzo dobrze przechwycić wymieniane wiadomości i przepisać je, aby udawać, że są Bartkiem do Alicji i Alicją do Bartka. Ponieważ Diffie Hellman nie ustala tożsamości, kiedy Alicja uważa, że negocjuje klucz z Bartkiem, rzeczywiście negocjuje z Ewą i to samo (oddzielnie) dla Bartka, wtedy każdy uważa, że bezpiecznie komunikuje się z drugim, kiedy w rzeczywistości każdy z nich ma bezpieczne połączenie z hakerem, który odczytuje swoje wiadomości, następnie ponownie zaszyfrowuje je i wysyła lub odczytuje i wysyła różne wiadomości.

W idealnym przypadku Diffie-Hellman powinien być zatem stosowany przy użyciu rozpoznanej metody uwierzytelniania, takiej jak podpisy cyfrowe. Może porozmawiamy o tym w przyszłym poście?


Pozdrawiamy internet, możesz klaskać & śledzić nas, do zobaczenia następnym razem. 🤫 </br>
 {{<tweet id="1143493043783372801">}}
