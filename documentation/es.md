<!-- ELUCENIA technical documentation · indice-de-barthel · es · no clinical/professional/rights approval -->

# Índice de Barthel

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/indice-de-barthel)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Alimentación

`alim`

- `0` — 0 – Incapaz
- `5` — 5 – Necesita ayuda (cortar, untar mantequilla)
- `10` — 10 – Independiente

### Baño

`banho`

- `0` — 0 – Dependiente
- `5` — 5 – Independiente

### Higiene personal (cara, cabello, dientes, afeitado)

`higiene`

- `0` — 0 – Necesita ayuda
- `5` — 5 – Independiente

### Vestirse

`vestir`

- `0` — 0 – Dependiente
- `5` — 5 – Necesita ayuda, pero hace aproximadamente la mitad solo
- `10` — 10 – Independiente (incluidos botones, cremallera y cordones)

### Control intestinal

`intestino`

- `0` — 0 – No cumple los criterios de control intestinal de 5 o 10 puntos
- `5` — 5 – Accidentes ocasionales o necesita ayuda para usar un supositorio/enema
- `10` — 10 – Controla el intestino sin accidentes; usa un supositorio/enema sin ayuda si es necesario

### Control vesical

`bexiga`

- `0` — 0 – Incontinente o con sonda sin poder manejarla
- `5` — 5 – Accidente ocasional
- `10` — 10 – Continente

### Uso del inodoro

`vaso`

- `0` — 0 – Dependiente
- `5` — 5 – Necesita alguna ayuda
- `10` — 10 – Independiente

### Transferencia (cama–silla)

`transf`

- `0` — 0 – Incapaz, sin equilibrio sentado
- `5` — 5 – Ayuda importante (1 o 2 personas), puede sentarse
- `10` — 10 – Ayuda menor (verbal o física)
- `15` — 15 – Independiente

### Movilidad en superficie plana

`mobil`

- `0` — 0 – Inmóvil o recorre menos de 50 yardas (45,72 m)
- `5` — 5 – Maneja la silla de ruedas de forma independiente durante ≥ 50 yardas (45,72 m)
- `10` — 10 – Camina con ayuda de una persona durante ≥ 50 yardas (45,72 m)
- `15` — 15 – Camina de forma independiente durante ≥ 50 yardas (45,72 m; puede usar bastón)

### Escaleras

`escadas`

- `0` — 0 – Incapaz
- `5` — 5 – Necesita ayuda o supervisión
- `10` — 10 – Independiente

## Edición del método

Barthel/Mahoney 1965: 10 actividades, suma de 0–100 en múltiplos de 5; movilidad ≥ 50 yardas (45,72 m); no incluye la versión modificada de Shah 1989

## Fórmula documentada

Suma de 10 actividades, en múltiplos de 5: alimentación, vestido, intestino, vejiga, retrete y escaleras (0–10); traslado y movilidad (0–15); baño y aseo (0–5). Total: 0–100.

## Límites y población

Utilice las rúbricas de la versión 0–100 adoptada y registre el momento de la evaluación funcional. La versión modificada estudiada por Shah en rehabilitación tras ictus no es intercambiable, ítem por ítem, con la original local. La validación brasileña citada todavía requiere lectura primaria en esta revisión. En la reimpresión del texto de 1965, las definiciones detalladas de movilidad utilizan al menos 50 yardas, equivalentes a 45,72 m, no más de 50 m. En el control intestinal, la ausencia de accidentes y el uso de supositorio/enema sin ayuda, si es necesario, permiten 10 puntos; necesitar ayuda para un supositorio/enema o tener accidentes ocasionales recibe 5 puntos. Cuando no se cumplen los criterios de 5 o 10, la regla general de la reimpresión asigna 0. Comprobar la suma no certifica la equivalencia completa de las demás rúbricas ni la autonomía para vivir solo.

## Referencias

- [Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. Md State Med J, 1965.](https://pubmed.ncbi.nlm.nih.gov/14258950/)

- [Shah S, Vanclay F, Cooper B. Improving the sensitivity of the Barthel Index for stroke rehabilitation. J Clin Epidemiol, 1989.](https://doi.org/10.1016/0895-4356(89)90065-6)

- [Minosso JSM et al. Validação, no Brasil, do Índice de Barthel em idosos atendidos em ambulatórios. Acta Paul Enferm, 2010.](https://doi.org/10.1590/S0103-21002010000200011)

- [Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. Original-text reprint; detailed mobility definitions use at least 50 yards.](https://wiki.ihe.net/images/2/22/Barthel_reprint.pdf)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
