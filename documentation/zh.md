<!-- ELUCENIA technical documentation · indice-de-barthel · zh · no clinical/professional/rights approval -->

# Barthel 指数

[条件、来源与许可](https://elucenia.org/zh/tools/indice-de-barthel)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 进食

`alim`

- `0` — 0 – 不能完成
- `5` — 5 – 需要帮助（切食物、涂黄油）
- `10` — 10 – 独立

### 洗澡

`banho`

- `0` — 0 – 依赖他人
- `5` — 5 – 独立

### 个人卫生（脸、头发、牙齿、胡须）

`higiene`

- `0` — 0 – 需要帮助
- `5` — 5 – 独立

### 穿衣

`vestir`

- `0` — 0 – 依赖他人
- `5` — 5 – 需要帮助，但约一半能自行完成
- `10` — 10 – 独立（包括纽扣、拉链、鞋带）

### 大便控制

`intestino`

- `0` — 0 – 不符合肠道控制5分或10分的条件
- `5` — 5 – 偶有失禁，或使用栓剂/灌肠需要帮助
- `10` — 10 – 可控制排便且无失禁；必要时可无须帮助使用栓剂/灌肠

### 膀胱控制

`bexiga`

- `0` — 0 – 失禁或留置导尿且不能自行管理
- `5` — 5 – 偶尔失禁
- `10` — 10 – 能控制排泄

### 如厕

`vaso`

- `0` — 0 – 依赖他人
- `5` — 5 – 需要一些帮助
- `10` — 10 – 独立

### 转移（床–椅）

`transf`

- `0` — 0 – 不能完成，坐位平衡差
- `5` — 5 – 需较大帮助（1 或 2 人），能坐起
- `10` — 10 – 少量帮助（言语或身体）
- `15` — 15 – 独立

### 平地行走

`mobil`

- `0` — 0 – 无法移动或移动距离不足50码（45.72 m）
- `5` — 5 – 可独立操控轮椅移动≥50码（45.72 m）
- `10` — 10 – 在一人帮助下步行≥50码（45.72 m）
- `15` — 15 – 独立步行≥50码（45.72 m；可使用手杖）

### 上下楼梯

`escadas`

- `0` — 0 – 不能完成
- `5` — 5 – 需要帮助或监督
- `10` — 10 – 独立

## 方法版本

Barthel/Mahoney 1965：10项活动，以5的倍数求和，总分0–100；移动距离≥50码（45.72 m）；不包括Shah 1989修订版

## 已记录的公式

10项活动按5分的倍数相加：进食、穿衣、大便、小便、如厕、上下楼（0–10）；转移、移动（0–15）；洗澡、修饰（0–5）。总分0–100。

## 限制与适用人群

应采用所选0–100版本的评分条目，并记录功能评估时间。Shah在卒中后康复中研究的修订版不能逐项与本地原始版互换。此评审尚需阅读所引用的巴西验证研究的原始文献。 1965年原文的重印本在移动能力详细定义中要求至少50码，即45.72 m，而非超过50 m。肠道控制无失禁且必要时能无须帮助使用栓剂/灌肠，可得10分；使用栓剂/灌肠需要帮助或偶有失禁，得5分。不符合5分或10分条件时，重印本的一般规则赋予0分。核对总分不证明其余评分规则完全等效，也不证明能够独自生活。

## 参考文献

- [Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. Md State Med J, 1965.](https://pubmed.ncbi.nlm.nih.gov/14258950/)

- [Shah S, Vanclay F, Cooper B. Improving the sensitivity of the Barthel Index for stroke rehabilitation. J Clin Epidemiol, 1989.](https://doi.org/10.1016/0895-4356(89)90065-6)

- [Minosso JSM et al. Validação, no Brasil, do Índice de Barthel em idosos atendidos em ambulatórios. Acta Paul Enferm, 2010.](https://doi.org/10.1590/S0103-21002010000200011)

- [Mahoney FI, Barthel DW. Functional evaluation: the Barthel Index. Original-text reprint; detailed mobility definitions use at least 50 yards.](https://wiki.ihe.net/images/2/22/Barthel_reprint.pdf)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
