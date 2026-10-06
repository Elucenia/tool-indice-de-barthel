<!-- ELUCENIA technical documentation · indice-de-barthel · de · no clinical/professional/rights approval -->

# Barthel-Index

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/indice-de-barthel)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Nahrungsaufnahme

`alim`

- `0` — 0 – Nicht möglich
- `5` — 5 – Benötigt Hilfe (Schneiden, Butter streichen)
- `10` — 10 – Selbstständig

### Baden

`banho`

- `0` — 0 – Abhängig
- `5` — 5 – Selbstständig

### Körperpflege (Gesicht, Haare, Zähne, Rasur)

`higiene`

- `0` — 0 – Benötigt Hilfe
- `5` — 5 – Selbstständig

### Ankleiden

`vestir`

- `0` — 0 – Abhängig
- `5` — 5 – Benötigt Hilfe, erledigt aber etwa die Hälfte selbst
- `10` — 10 – Selbstständig (einschließlich Knöpfen, Reißverschluss und Schnürsenkeln)

### Darmkontrolle

`intestino`

- `0` — 0 – Erfüllt nicht die Kriterien für Darmkontrolle mit 5 oder 10 Punkten
- `5` — 5 – Gelegentliche Stuhlinkontinenz oder Hilfe bei der Anwendung eines Zäpfchens/Einlaufs erforderlich
- `10` — 10 – Kontrolliert den Stuhlgang ohne Inkontinenz; verwendet bei Bedarf ein Zäpfchen/einen Einlauf ohne Hilfe

### Blasenkontrolle

`bexiga`

- `0` — 0 – Inkontinent oder katheterisiert ohne selbstständige Versorgung
- `5` — 5 – Gelegentlicher Kontrollverlust
- `10` — 10 – Kontinent

### Toilettenbenutzung

`vaso`

- `0` — 0 – Abhängig
- `5` — 5 – Benötigt etwas Hilfe
- `10` — 10 – Selbstständig

### Transfer (Bett–Stuhl)

`transf`

- `0` — 0 – Nicht möglich, kein Gleichgewicht im Sitzen
- `5` — 5 – Umfangreiche Hilfe (1 oder 2 Personen), kann sitzen
- `10` — 10 – Geringe Hilfe (verbal oder körperlich)
- `15` — 15 – Selbstständig

### Mobilität auf ebener Fläche

`mobil`

- `0` — 0 – Unbeweglich oder legt weniger als 50 Yards (45,72 m) zurück
- `5` — 5 – Bewegt sich selbstständig im Rollstuhl über ≥ 50 Yards (45,72 m)
- `10` — 10 – Geht mit Hilfe einer Person ≥ 50 Yards (45,72 m)
- `15` — 15 – Geht selbstständig ≥ 50 Yards (45,72 m; Gehstock erlaubt)

### Treppen

`escadas`

- `0` — 0 – Nicht möglich
- `5` — 5 – Benötigt Hilfe oder Aufsicht
- `10` — 10 – Selbstständig

## Fassung der Methode

Barthel/Mahoney 1965: 10 Aktivitäten, Summe 0–100 in Schritten von 5; Mobilität ≥ 50 Yards (45,72 m); ohne die modifizierte Fassung von Shah 1989

## Dokumentierte Formel

Summe von 10 Aktivitäten in 5er-Schritten: Essen, Ankleiden, Darm, Blase, Toilettenbenutzung, Treppen (0–10); Transfer, Mobilität (0–15); Baden, Körperpflege (0–5). Gesamt: 0–100.

## Grenzen und Population

Verwenden Sie die Bewertungsrubriken der gewählten Version 0–100 und dokumentieren Sie den Zeitpunkt der funktionellen Beurteilung. Die von Shah in der Schlaganfallrehabilitation untersuchte modifizierte Version ist nicht Item für Item mit dem lokalen Original austauschbar. Die zitierte brasilianische Validierung erfordert in dieser Prüfung noch die Lektüre der Primärquelle. Im Nachdruck des Textes von 1965 verlangen die detaillierten Mobilitätsdefinitionen mindestens 50 Yards, entsprechend 45,72 m, nicht mehr als 50 m. Bei der Darmkontrolle ermöglichen das Ausbleiben von Stuhlinkontinenz und die bei Bedarf selbstständige Anwendung eines Zäpfchens/Einlaufs 10 Punkte; erforderliche Hilfe bei Zäpfchen/Einlauf oder gelegentliche Stuhlinkontinenz ergeben 5 Punkte. Werden die Kriterien für 5 oder 10 nicht erfüllt, vergibt die allgemeine Regel des Nachdrucks 0. Die Prüfung der Summe bestätigt weder die vollständige Gleichwertigkeit der übrigen Rubriken noch die Fähigkeit, allein zu leben.

## Referenzen

- [Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. Md State Med J, 1965.](https://pubmed.ncbi.nlm.nih.gov/14258950/)

- [Shah S, Vanclay F, Cooper B. Improving the sensitivity of the Barthel Index for stroke rehabilitation. J Clin Epidemiol, 1989.](https://doi.org/10.1016/0895-4356(89)90065-6)

- [Minosso JSM et al. Validação, no Brasil, do Índice de Barthel em idosos atendidos em ambulatórios. Acta Paul Enferm, 2010.](https://doi.org/10.1590/S0103-21002010000200011)

- [Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. Original-text reprint; detailed mobility definitions use at least 50 yards.](https://wiki.ihe.net/images/2/22/Barthel_reprint.pdf)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Unabhängig (100)

Die Höchstpunktzahl bedeutet nicht, sicher allein zu leben: Der Index bewertet keine instrumentellen Aktivitäten, Kognition oder Sicherheit.


### 2

Leichte Abhängigkeit (91 bis 99)


### 3

Mäßige Abhängigkeit (61 bis 90)


### 4

Vollständige Abhängigkeit (0 bis 20)

