/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"indice-de-barthel","title":"Índice de Barthel","fields":[["alim","Alimentação","sel",{"opts":{"0":"0 – Incapaz","5":"5 – Precisa de ajuda (cortar, passar manteiga)","10":"10 – Independente"}}],["banho","Banho","sel",{"opts":{"0":"0 – Dependente","5":"5 – Independente"}}],["higiene","Higiene pessoal (rosto, cabelo, dentes, barba)","sel",{"opts":{"0":"0 – Precisa de ajuda","5":"5 – Independente"}}],["vestir","Vestir-se","sel",{"opts":{"0":"0 – Dependente","5":"5 – Precisa de ajuda, mas faz cerca de metade sozinho","10":"10 – Independente (inclui botões, zíper, cadarços)"}}],["intestino","Controle intestinal","sel",{"opts":{"0":"0 – Não preenche os critérios de controle intestinal de 5 ou 10 pontos","5":"5 – Acidentes ocasionais ou precisa de ajuda para usar supositório/enema","10":"10 – Controla o intestino sem acidentes; usa supositório/enema sem ajuda, se necessário"}}],["bexiga","Controle vesical","sel",{"opts":{"0":"0 – Incontinente ou cateterizado sem conseguir manejar","5":"5 – Acidente ocasional","10":"10 – Continente"}}],["vaso","Uso do vaso sanitário","sel",{"opts":{"0":"0 – Dependente","5":"5 – Precisa de alguma ajuda","10":"10 – Independente"}}],["transf","Transferência (cama–cadeira)","sel",{"opts":{"0":"0 – Incapaz, sem equilíbrio sentado","5":"5 – Grande ajuda (1 ou 2 pessoas), consegue sentar","10":"10 – Pequena ajuda (verbal ou física)","15":"15 – Independente"}}],["mobil","Mobilidade em superfície plana","sel",{"opts":{"0":"0 – Imóvel ou percorre menos de 50 jardas (45,72 m)","5":"5 – Independente em cadeira de rodas por ≥ 50 jardas (45,72 m)","10":"10 – Anda com ajuda de uma pessoa por ≥ 50 jardas (45,72 m)","15":"15 – Anda sozinho por ≥ 50 jardas (45,72 m; pode usar bengala)"}}],["escadas","Escadas","sel",{"opts":{"0":"0 – Incapaz","5":"5 – Precisa de ajuda ou supervisão","10":"10 – Independente"}}]],"config":{"unit":"de 100","label":"Índice de Barthel","fields":[["alim","sel",0],["banho","sel",0],["higiene","sel",0],["vestir","sel",0],["intestino","sel",0],["bexiga","sel",0],["vaso","sel",0],["transf","sel",0],["mobil","sel",0],["escadas","sel",0]],"bands":[[0,"high","Dependência total (0 a 20)",""],[21,"high","Dependência grave (21 a 60)",""],[61,"mid","Dependência moderada (61 a 90)",""],[91,"low","Dependência leve (91 a 99)",""],[100,"low","Independente (100)","Pontuação máxima não significa viver sozinho com segurança: o índice não avalia atividades instrumentais, cognição nem segurança."]]},"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);


function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
