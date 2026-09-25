# Índice de Barthel

Identificador: `indice-de-barthel`. Pacote independente da interface ELUCENIA, para navegador e Node.js.

## Situação

- Revisão: **needs-review**. Revisão documental e clínica independente pendente.
- Execução: **disponível para reprodução técnica da fórmula**.
- Validação clínica independente: **não realizada**. Os testes abaixo verificam aritmética e transporte dos campos.
- Fonte importada: Panorama Médico; arquivo `app/content/ferramentas/neuro-mente.php`.
- 4/4 casos de referência conferidos na importação. 0 casos independentes desta ferramenta.
- Dados: o exemplo funciona localmente, sem rede, armazenamento ou identificação de pacientes.

## Uso no Node.js

```js
const { calculate } = require('./calculator.js');
const example = require('./examples.json')[0];
console.log(calculate(example.input));
```

Execute `node test.cjs` (ou `npm test`) para conferir os exemplos. Abra `index.html` para usar a versão local do navegador. Não há dependências npm.

## Contrato

`calculate(input)` recebe um objeto, devolve `{id, main, label, raw, clinicalValidation}` ou `{error, code, field?}`. Consulte `tool.json` e `metadata.fields` para nomes, unidades, opções e intervalos. Números aceitam valores finitos ou strings numéricas; opções precisam corresponder às chaves documentadas. Campos obrigatórios vazios, booleanos inválidos, valores fora de intervalo e resultados não finitos são rejeitados. Somente checkbox omitido representa falso; um campo numérico ou uma opção obrigatória nunca é preenchido automaticamente.

Interpretações, ordens terapêuticas e tabelas herdadas não são retornadas pelo adaptador. Classificações e valores ainda dependem da população e das limitações da fonte.

## Fórmula / versão

Soma das 10 atividades, em múltiplos de 5: alimentação, vestir, intestino, bexiga, vaso e escadas (0 a 10); transferência e mobilidade (0 a 15); banho e higiene (0 a 5). Total: 0 a 100.

A transcrição acima documenta o acervo de origem e pode requerer atualização. 

## Condições e limites

Mede a independência em 10 atividades básicas de vida diária. Usado na reabilitação, após AVC e na avaliação geriátrica.

Confirme população, exclusões, unidades, versão e diretriz aplicável ao país e serviço. O resultado não deve ser utilizado isoladamente para diagnóstico, alta ou prescrição. O pacote não representa certificação clínica, aprovação regulatória ou indicação para toda população. Veja a revisão completa em `tool.json`.

## Fontes originais

- [Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. Md State Med J, 1965.](https://pubmed.ncbi.nlm.nih.gov/14258950/)
- [Shah S, Vanclay F, Cooper B. Improving the sensitivity of the Barthel Index for stroke rehabilitation. J Clin Epidemiol, 1989.](https://doi.org/10.1016/0895-4356(89)90065-6)
- [Minosso JSM et al. Validação, no Brasil, do Índice de Barthel em idosos atendidos em ambulatórios. Acta Paul Enferm, 2010.](https://doi.org/10.1590/S0103-21002010000200011)

## Exemplos e rastreabilidade

`examples.json` preserva `originalInput`, expectativa e entrada explícita do exemplo. Não foi necessário expandir opções zero nos exemplos.

## Direitos e repositório

Este pacote integra o acervo privado de desenvolvimento da ELUCENIA. A publicação externa depende de liberação expressa. A licença MIT (arquivo LICENSE) cobre o código de integração, preservando o aviso de autoria e a licença; não transfere direitos sobre instrumentos, traduções, questionários, artigos, marcas ou outros materiais de terceiros. Consulte NOTICE.md e as condições de cada titular. O acesso a este adaptador não publica nem licencia automaticamente o restante da plataforma ELUCENIA.

## Acesso ao repositório

Repositório privado da organização ELUCENIA. A abertura pública depende de liberação expressa.
