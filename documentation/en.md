<!-- ELUCENIA technical documentation · indice-de-barthel · en · no clinical/professional/rights approval -->

# Barthel Index

[conditions, sources and permissions](https://elucenia.org/en/tools/indice-de-barthel)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Feeding

`alim`

- `0` — 0 – Unable
- `5` — 5 – Needs help (cutting food, spreading butter)
- `10` — 10 – Independent

### Bathing

`banho`

- `0` — 0 – Dependent
- `5` — 5 – Independent

### Personal grooming (face, hair, teeth, shaving)

`higiene`

- `0` — 0 – Needs help
- `5` — 5 – Independent

### Dressing

`vestir`

- `0` — 0 – Dependent
- `5` — 5 – Needs help but does about half independently
- `10` — 10 – Independent (including buttons, zipper, shoelaces)

### Bowel control

`intestino`

- `0` — 0 – Does not meet the bowel-control criteria for 5 or 10 points
- `5` — 5 – Occasional accidents or needs help using a suppository/enema
- `10` — 10 – Controls the bowels without accidents; uses a suppository/enema without help if needed

### Bladder control

`bexiga`

- `0` — 0 – Incontinent or catheterized and unable to manage it
- `5` — 5 – Occasional accident
- `10` — 10 – Continent

### Toilet use

`vaso`

- `0` — 0 – Dependent
- `5` — 5 – Needs some help
- `10` — 10 – Independent

### Transfer (bed–chair)

`transf`

- `0` — 0 – Unable, no sitting balance
- `5` — 5 – Major help (1 or 2 people), able to sit
- `10` — 10 – Minor help (verbal or physical)
- `15` — 15 – Independent

### Mobility on a level surface

`mobil`

- `0` — 0 – Immobile or travels less than 50 yards (45.72 m)
- `5` — 5 – Independently propels a wheelchair for ≥ 50 yards (45.72 m)
- `10` — 10 – Walks with one person’s help for ≥ 50 yards (45.72 m)
- `15` — 15 – Walks independently for ≥ 50 yards (45.72 m; may use a cane)

### Stairs

`escadas`

- `0` — 0 – Unable
- `5` — 5 – Needs help or supervision
- `10` — 10 – Independent

## Method edition

Barthel/Mahoney 1965: 10 activities, sum 0–100 in multiples of 5; mobility ≥ 50 yards (45.72 m); excludes the modified Shah 1989 version

## Documented formula

Sum of 10 activities, in multiples of 5: feeding, dressing, bowels, bladder, toilet and stairs (0–10); transfer and mobility (0–15); bathing and grooming (0–5). Total: 0–100.

## Limits and population

Use the rubrics of the adopted 0–100 version and record the time of functional assessment. The modified version studied by Shah in rehabilitation after stroke is not interchangeable, item by item, with the local original. The cited Brazilian validation still requires primary-source reading in this review. In the reprint of the 1965 text, the detailed mobility definitions use at least 50 yards, equivalent to 45.72 m, not more than 50 m. For bowel control, no accidents and using a suppository/enema without help if needed allow 10 points; needing help with a suppository/enema or having occasional accidents receives 5 points. When the criteria for 5 or 10 are not met, the reprint’s general rule assigns 0. Checking the sum does not certify complete equivalence of the other rubrics or the ability to live alone.

## References

- [Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. Md State Med J, 1965.](https://pubmed.ncbi.nlm.nih.gov/14258950/)

- [Shah S, Vanclay F, Cooper B. Improving the sensitivity of the Barthel Index for stroke rehabilitation. J Clin Epidemiol, 1989.](https://doi.org/10.1016/0895-4356(89)90065-6)

- [Minosso JSM et al. Validação, no Brasil, do Índice de Barthel em idosos atendidos em ambulatórios. Acta Paul Enferm, 2010.](https://doi.org/10.1590/S0103-21002010000200011)

- [Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. Original-text reprint; detailed mobility definitions use at least 50 yards.](https://wiki.ihe.net/images/2/22/Barthel_reprint.pdf)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

Independent (100)

Maximum score does not mean living alone safely: the index does not assess instrumental activities, cognition, or safety.


### 2

Mild dependence (91 to 99)


### 3

Moderate dependence (61 to 90)


### 4

Total dependence (0 to 20)

