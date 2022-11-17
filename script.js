// const cuvinte = ["ROSU", "GALBEN", "VERDE","ALBASTRU","PORTOCALIU","MOV","TURCOAZ","NEGRU","CASTANIU","GRI","ALB"];
const cuvinte = ["PRIETENUL_LA_NEVOIE_SE_CUNOASTE","CUM_ITI_VEI_ASTERNE_ASA_VEI_DORMI","BINE_FACI,_BINE_GASESTI","LA_POMUL_LAUDAT_SA_NU_TE_DUCI_CU_SACUL",
"APA_TRECE,_PIETRELE_RAMAN","CE_TIE_NU-TI_PLACE_ALTUIA_NU_FACE","CINE_SE_ASEAMANA_SE_ADUNA","BUTURUGA_MICA_RASTOARNA_CARUL_MARE",
"CE-I_IN_MANA_NU-I_MINCIUNA","GRABA_STRICA_TREABA","VORBA_LUNGA,_SARACIA_OMULUI","UNDE_NU-I_CAP_VAI_DE_PICIOARE","LUPU-SI_SCHIMBA_PARUL,_DAR_NARAVUL_BA"];

let x = cuvinte.length;
let incercari = 5;

cuvantAles = cuvinte[Math.floor(Math.random() * x)];
// document.getElementById('element01').innerHTML = cuvantAles;
let lungimeCuvant = cuvantAles.length;

function litere (){
  const tablaMea = document.getElementById("tabla");
  const row = document.createElement('div');
  tablaMea.append(row);
  for (let j = 0; j < lungimeCuvant; j++) {
    const cell = document.createElement('div');
    cell.className = "cell";
    cell.classList.add(cuvantAles[j]);
    cell.id = j;
    row.append(cell);
  }
}

function litereAlfabet (){
  const tablaMea = document.getElementById("tablaAlfabet");
  const row = document.createElement('div');
  tablaMea.append(row);
  for (let j = 0; j < 26; j++) {
    const cell = document.createElement('div');
    cell.className = "cell2";
    let litera = String.fromCharCode(65 + j);
    cell.id = litera;
    row.append(cell);
    cell.innerHTML = litera;
    cell.addEventListener('click',function(){
    handleClick(litera);
    })
  }
}

function handleClick(x) {
  let cell = document.getElementById(x);
  if (!cell.classList.contains('revealed')) {
    cell.classList.add('revealed');
    let gasit = false;
    for (let i = 0; i < lungimeCuvant; i++){
      let celll = document.getElementById(i);
      if (celll.classList.contains(x)){ 
        celll.classList.add('descoperit')
        celll.innerHTML = x;
        gasit = true;
        if (verificaVictorie()) {alert("Game over, you won");}
      }
    }
    if (gasit == false) { 
      incercari--;
      document.getElementById('element02').innerHTML = 'Incercari ramase: ' + incercari;
    }
    if (incercari ==0) {
      arataToate();
      alert("Game over, you lost");
    }
  }
}

function verificaVictorie(){
  let victorie = true;
  for(let i = 0; i < lungimeCuvant; i++){ 
    let cell = document.getElementById(i);
    if (!cell.classList.contains('descoperit')) {victorie =  false}
  }
  return victorie;
}

function arataToate(){
  for (let i = 0; i < lungimeCuvant; i++){
    let cell = document.getElementById(i);
    if (!cell.classList.contains('descoperit')) {
      cell.classList.add('nedescoperit')
      cell.innerHTML = cell.className.slice(5,6);
      // console.log(typeof(cell.className));
    }
  }
}

function spatiiAlbe(){
  for (let i = 0; i < lungimeCuvant; i++){
    let cell = document.getElementById(i);
    if (cell.classList.contains('_')) {
      cell.classList.add('spatiu');
      cell.classList.add('descoperit');
    }
  }
}

function caractereSpeciale(cs){
  for (let i = 0; i < lungimeCuvant; i++){
    let cell = document.getElementById(i);
    if (cell.classList.contains(cs)) {
       cell.classList.add('descoperit');
       cell.innerHTML = cs;
    }
  }
}


litere();
litereAlfabet();
spatiiAlbe();
caractereSpeciale('!');caractereSpeciale('?');caractereSpeciale('-');caractereSpeciale(',');