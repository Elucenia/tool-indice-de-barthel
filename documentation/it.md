<!-- ELUCENIA technical documentation · indice-de-barthel · it · no clinical/professional/rights approval -->

# Indice di Barthel

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/indice-de-barthel)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Alimentazione

`alim`

- `0` — 0 – Incapace
- `5` — 5 – Necessita di aiuto (tagliare, spalmare il burro)
- `10` — 10 – Indipendente

### Bagno

`banho`

- `0` — 0 – Dipendente
- `5` — 5 – Indipendente

### Igiene personale (viso, capelli, denti, rasatura)

`higiene`

- `0` — 0 – Necessita di aiuto
- `5` — 5 – Indipendente

### Vestirsi

`vestir`

- `0` — 0 – Dipendente
- `5` — 5 – Necessita di aiuto, ma svolge circa la metà da solo
- `10` — 10 – Indipendente (compresi bottoni, cerniera e lacci)

### Controllo intestinale

`intestino`

- `0` — 0 – Non soddisfa i criteri di controllo intestinale da 5 o 10 punti
- `5` — 5 – Episodi occasionali di incontinenza o necessita di aiuto per usare una supposta/un clistere
- `10` — 10 – Controlla l’intestino senza episodi di incontinenza; usa una supposta/un clistere senza aiuto se necessario

### Controllo vescicale

`bexiga`

- `0` — 0 – Incontinente o cateterizzato senza riuscire a gestirlo
- `5` — 5 – Episodio occasionale di incontinenza
- `10` — 10 – Continente

### Uso del WC

`vaso`

- `0` — 0 – Dipendente
- `5` — 5 – Necessita di qualche aiuto
- `10` — 10 – Indipendente

### Trasferimento (letto–sedia)

`transf`

- `0` — 0 – Incapace, senza equilibrio da seduto
- `5` — 5 – Aiuto importante (1 o 2 persone), riesce a sedersi
- `10` — 10 – Aiuto limitato (verbale o fisico)
- `15` — 15 – Indipendente

### Mobilità su superficie piana

`mobil`

- `0` — 0 – Immobile o percorre meno di 50 iarde (45,72 m)
- `5` — 5 – Si sposta autonomamente in sedia a rotelle per ≥ 50 iarde (45,72 m)
- `10` — 10 – Cammina con l’aiuto di una persona per ≥ 50 iarde (45,72 m)
- `15` — 15 – Cammina autonomamente per ≥ 50 iarde (45,72 m; può usare un bastone)

### Scale

`escadas`

- `0` — 0 – Incapace
- `5` — 5 – Necessita di aiuto o supervisione
- `10` — 10 – Indipendente

## Edizione del metodo

Barthel/Mahoney 1965: 10 attività, somma 0–100 in multipli di 5; mobilità ≥ 50 iarde (45,72 m); esclusa la versione modificata di Shah 1989

## Formula documentata

Somma di 10 attività, in multipli di 5: alimentazione, vestirsi, intestino, vescica, servizi e scale (0–10); trasferimento e mobilità (0–15); bagno e igiene (0–5). Totale: 0–100.

## Limiti e popolazione

Usare le rubriche della versione 0–100 adottata e registrare il momento della valutazione funzionale. La versione modificata studiata da Shah nella riabilitazione dopo ictus non è intercambiabile, item per item, con l’originale locale. La validazione brasiliana citata richiede ancora la lettura della fonte primaria in questa revisione. Nella ristampa del testo del 1965, le definizioni dettagliate della mobilità usano almeno 50 iarde, equivalenti a 45,72 m, non più di 50 m. Per il controllo intestinale, l’assenza di episodi di incontinenza e l’uso di supposta/clistere senza aiuto, se necessario, consentono 10 punti; la necessità di aiuto per supposta/clistere o episodi occasionali di incontinenza ricevono 5 punti. Se i criteri di 5 o 10 non sono soddisfatti, la regola generale della ristampa assegna 0. Verificare la somma non certifica l’equivalenza completa delle altre rubriche né l’autonomia per vivere da soli.

## Riferimenti

- [Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. Md State Med J, 1965.](https://pubmed.ncbi.nlm.nih.gov/14258950/)

- [Shah S, Vanclay F, Cooper B. Improving the sensitivity of the Barthel Index for stroke rehabilitation. J Clin Epidemiol, 1989.](https://doi.org/10.1016/0895-4356(89)90065-6)

- [Minosso JSM et al. Validação, no Brasil, do Índice de Barthel em idosos atendidos em ambulatórios. Acta Paul Enferm, 2010.](https://doi.org/10.1590/S0103-21002010000200011)

- [Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. Original-text reprint; detailed mobility definitions use at least 50 yards.](https://wiki.ihe.net/images/2/22/Barthel_reprint.pdf)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Indipendente (100)

Il punteggio massimo non significa vivere da soli in sicurezza: l’indice non valuta le attività strumentali, la cognizione né la sicurezza.


### 2

Dipendenza lieve (91 a 99)


### 3

Dipendenza moderata (61 a 90)


### 4

Dipendenza totale (0 a 20)

