<!-- ELUCENIA technical documentation · indice-de-barthel · pt-BR · no clinical/professional/rights approval -->

# Índice de Barthel

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/indice-de-barthel)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Alimentação

`alim`

- `0` — 0 – Incapaz
- `5` — 5 – Precisa de ajuda (cortar, passar manteiga)
- `10` — 10 – Independente

### Banho

`banho`

- `0` — 0 – Dependente
- `5` — 5 – Independente

### Higiene pessoal (rosto, cabelo, dentes, barba)

`higiene`

- `0` — 0 – Precisa de ajuda
- `5` — 5 – Independente

### Vestir-se

`vestir`

- `0` — 0 – Dependente
- `5` — 5 – Precisa de ajuda, mas faz cerca de metade sozinho
- `10` — 10 – Independente (inclui botões, zíper, cadarços)

### Controle intestinal

`intestino`

- `0` — 0 – Não preenche os critérios de controle intestinal de 5 ou 10 pontos
- `5` — 5 – Acidentes ocasionais ou precisa de ajuda para usar supositório/enema
- `10` — 10 – Controla o intestino sem acidentes; usa supositório/enema sem ajuda, se necessário

### Controle vesical

`bexiga`

- `0` — 0 – Incontinente ou cateterizado sem conseguir manejar
- `5` — 5 – Acidente ocasional
- `10` — 10 – Continente

### Uso do vaso sanitário

`vaso`

- `0` — 0 – Dependente
- `5` — 5 – Precisa de alguma ajuda
- `10` — 10 – Independente

### Transferência (cama–cadeira)

`transf`

- `0` — 0 – Incapaz, sem equilíbrio sentado
- `5` — 5 – Grande ajuda (1 ou 2 pessoas), consegue sentar
- `10` — 10 – Pequena ajuda (verbal ou física)
- `15` — 15 – Independente

### Mobilidade em superfície plana

`mobil`

- `0` — 0 – Imóvel ou percorre menos de 50 jardas (45,72 m)
- `5` — 5 – Independente em cadeira de rodas por ≥ 50 jardas (45,72 m)
- `10` — 10 – Anda com ajuda de uma pessoa por ≥ 50 jardas (45,72 m)
- `15` — 15 – Anda sozinho por ≥ 50 jardas (45,72 m; pode usar bengala)

### Escadas

`escadas`

- `0` — 0 – Incapaz
- `5` — 5 – Precisa de ajuda ou supervisão
- `10` — 10 – Independente

## Edição do método

Barthel/Mahoney 1965: 10 atividades, soma 0–100 em múltiplos de 5; mobilidade ≥ 50 jardas (45,72 m); sem a versão modificada de Shah 1989

## Fórmula documentada

Soma das 10 atividades, em múltiplos de 5: alimentação, vestir, intestino, bexiga, vaso e escadas (0 a 10); transferência e mobilidade (0 a 15); banho e higiene (0 a 5). Total: 0 a 100.

## Limites e população

Use as rubricas da versão 0–100 adotada e registre o momento de avaliação funcional. A versão modificada estudada por Shah em reabilitação após AVC não é intercambiável, item a item, com a original local. A validação brasileira citada ainda requer leitura primária nesta revisão. Na reimpressão do texto de 1965, as definições detalhadas de mobilidade usam pelo menos 50 jardas, equivalentes a 45,72 m, e não mais de 50 m. No controle intestinal, a ausência de acidentes e o uso de supositório/enema sem ajuda, se necessário, permitem 10 pontos; a necessidade de ajuda para supositório/enema ou acidentes ocasionais recebem 5 pontos. Quando os critérios de 5 ou 10 não são preenchidos, a regra geral da reimpressão atribui 0. Conferir a soma não certifica equivalência integral das demais rubricas nem autonomia para viver sozinho.

## Referências

- [Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. Md State Med J, 1965.](https://pubmed.ncbi.nlm.nih.gov/14258950/)

- [Shah S, Vanclay F, Cooper B. Improving the sensitivity of the Barthel Index for stroke rehabilitation. J Clin Epidemiol, 1989.](https://doi.org/10.1016/0895-4356(89)90065-6)

- [Minosso JSM et al. Validação, no Brasil, do Índice de Barthel em idosos atendidos em ambulatórios. Acta Paul Enferm, 2010.](https://doi.org/10.1590/S0103-21002010000200011)

- [Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. Original-text reprint; detailed mobility definitions use at least 50 yards.](https://wiki.ihe.net/images/2/22/Barthel_reprint.pdf)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Independente (100)

Pontuação máxima não significa viver sozinho com segurança: o índice não avalia atividades instrumentais, cognição nem segurança.


### 2

Dependência leve (91 a 99)


### 3

Dependência moderada (61 a 90)


### 4

Dependência total (0 a 20)

