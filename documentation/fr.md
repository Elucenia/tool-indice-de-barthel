<!-- ELUCENIA technical documentation · indice-de-barthel · fr · no clinical/professional/rights approval -->

# Indice de Barthel

[conditions, sources et autorisations](https://elucenia.org/fr/outils/indice-de-barthel)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Alimentation

`alim`

- `0` — 0 – Incapable
- `5` — 5 – A besoin d’aide (couper, tartiner)
- `10` — 10 – Indépendant

### Toilette

`banho`

- `0` — 0 – Dépendant
- `5` — 5 – Indépendant

### Hygiène personnelle (visage, cheveux, dents, rasage)

`higiene`

- `0` — 0 – A besoin d’aide
- `5` — 5 – Indépendant

### S’habiller

`vestir`

- `0` — 0 – Dépendant
- `5` — 5 – A besoin d’aide, mais réalise environ la moitié seul
- `10` — 10 – Indépendant (y compris boutons, fermeture éclair et lacets)

### Continence intestinale

`intestino`

- `0` — 0 – Ne remplit pas les critères de contrôle intestinal à 5 ou 10 points
- `5` — 5 – Accidents occasionnels ou besoin d’aide pour utiliser un suppositoire/lavement
- `10` — 10 – Contrôle intestinal sans accident ; utilise un suppositoire/lavement sans aide si nécessaire

### Contrôle vésical

`bexiga`

- `0` — 0 – Incontinent ou porteur d’une sonde sans pouvoir la gérer
- `5` — 5 – Accident occasionnel
- `10` — 10 – Continent

### Utilisation des toilettes

`vaso`

- `0` — 0 – Dépendant
- `5` — 5 – A besoin d’une certaine aide
- `10` — 10 – Indépendant

### Transfert (lit–fauteuil)

`transf`

- `0` — 0 – Incapable, sans équilibre assis
- `5` — 5 – Aide importante (1 ou 2 personnes), peut s’asseoir
- `10` — 10 – Aide mineure (verbale ou physique)
- `15` — 15 – Indépendant

### Mobilité sur terrain plat

`mobil`

- `0` — 0 – Immobile ou parcourt moins de 50 yards (45,72 m)
- `5` — 5 – Se déplace seul en fauteuil roulant sur ≥ 50 yards (45,72 m)
- `10` — 10 – Marche avec l’aide d’une personne sur ≥ 50 yards (45,72 m)
- `15` — 15 – Marche seul sur ≥ 50 yards (45,72 m; une canne est autorisée)

### Escaliers

`escadas`

- `0` — 0 – Incapable
- `5` — 5 – A besoin d’aide ou de surveillance
- `10` — 10 – Indépendant

## Édition de la méthode

Barthel/Mahoney 1965 : 10 activités, somme de 0–100 par multiples de 5 ; mobilité ≥ 50 yards (45,72 m) ; hors version modifiée de Shah 1989

## Formule documentée

Somme de 10 activités, par multiples de 5 : alimentation, habillage, intestin, vessie, toilettes et escaliers (0–10) ; transfert et mobilité (0–15) ; bain et toilette personnelle (0–5). Total : 0–100.

## Limites et population

Utilisez les rubriques de la version 0–100 adoptée et enregistrez le moment de l’évaluation fonctionnelle. La version modifiée étudiée par Shah en réadaptation après AVC n’est pas interchangeable, item par item, avec l’originale locale. La validation brésilienne citée nécessite encore une lecture primaire dans cette revue. Dans la réimpression du texte de 1965, les définitions détaillées de mobilité utilisent au moins 50 yards, soit 45,72 m, et non plus de 50 m. Pour le contrôle intestinal, l’absence d’accidents et l’utilisation sans aide d’un suppositoire/lavement, si nécessaire, permettent 10 points ; le besoin d’aide pour un suppositoire/lavement ou des accidents occasionnels donnent 5 points. Si les critères de 5 ou 10 ne sont pas remplis, la règle générale de la réimpression attribue 0. Vérifier la somme ne certifie ni l’équivalence intégrale des autres rubriques ni l’autonomie pour vivre seul.

## Références

- [Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. Md State Med J, 1965.](https://pubmed.ncbi.nlm.nih.gov/14258950/)

- [Shah S, Vanclay F, Cooper B. Improving the sensitivity of the Barthel Index for stroke rehabilitation. J Clin Epidemiol, 1989.](https://doi.org/10.1016/0895-4356(89)90065-6)

- [Minosso JSM et al. Validação, no Brasil, do Índice de Barthel em idosos atendidos em ambulatórios. Acta Paul Enferm, 2010.](https://doi.org/10.1590/S0103-21002010000200011)

- [Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. Original-text reprint; detailed mobility definitions use at least 50 yards.](https://wiki.ihe.net/images/2/22/Barthel_reprint.pdf)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Indépendant (100)

Le score maximal ne signifie pas vivre seul en toute sécurité : l’indice n’évalue pas les activités instrumentales, la cognition ni la sécurité.


### 2

Dépendance légère (91 à 99)


### 3

Dépendance modérée (61 à 90)


### 4

Dépendance totale (0 à 20)

