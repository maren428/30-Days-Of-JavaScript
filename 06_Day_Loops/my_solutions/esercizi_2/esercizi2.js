//#region ESERCIZIO 1
/* let alfaNum="ABCDFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let id="";
// let lunghezzaUtente=Number(prompt("Scegli la lunghezza dell'id","10"));
for(let i=0; i<lunghezzaUtente; i++){
    let rand=Math.floor(Math.random()*alfaNum.length);
    let carattere=alfaNum[rand];
    id+=carattere;
}
/* alert(`Il tuo id è ${id}`);
console.log(`Il tuo id è ${id}`); */
//#endregion 
//#region ESERCIZIO 2
let stringaEsa="0123456789abcdef";
let id="#";
for(let j=0; j<6; j++){
    let rng=Math.floor(Math.random()*stringaEsa.length);
    let codeEsa=stringaEsa[rng];
    id+=codeEsa;
}
// console.log(id);
//#endregion
//#region ESERCIZIO 3
let rgbArray=[];
for(k=0; k<3; k++){
    let rgbRand=Math.floor(Math.random()*256);
    rgbArray.push(rgbRand);
     
}
// console.log(`rgb(${rgbArray.join(',')})`);
//#endregion  
//#region ESERCIZIO 4
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
const countriesCaps=[];
for(let l=0; l<countries.length; l++){
    countriesCaps.push(countries[l].toUpperCase())
}
// console.log(countriesCaps);
//#endregion
//#region ESERCIZIO 5
const countriesLength=[];
for(let m=0; m<countries.length; m++){
    countriesLength.push(countries[m].length)
    countriesLength.push([1,2,3])
    //ciclo l'array e pusho dentro l'array vuoto la lunghezza dei suoi elementi
}
// console.log(countriesLength);
//#endregion
//#region ESERCIZIO 6 
const countriesMaster=[];
for(let n=0; n<countries.length; n++){
    countriesMaster.push([countries[n],countries[n].slice(0,3).toUpperCase(),countries[n].length])
    //pusho degli array dentro un array, sfrutto un unico ciclo per ciclare l'array iniziale, prenderne un pezzo e prendere la lunghezza dei suoi elementi
}
// console.log(countriesMaster);
//#endregion
//#region ESERCIZIO 7
const land=[];
for(let o=0; o<countries.length; o++){
    let verifica=countries[o].includes('land');
    if(verifica){
        land.push(countries[o])    
    }
    }
if(land.length===0){
    console.log("Tutti questi paesi non contengono land")
}
// console.log(land);
//#endregion
//#region ESERCIZIO 8
let ia=[];
for(let p=0; p<countries.length; p++){
    if(countries[p].endsWith('ia')){
        ia.push(countries[p])
    }
}
if(ia.length===0){
    // console.log("Questi paesi non finiscono con 'ia'")
}
// console.log(ia);
//#endregion
//#region ESERCIZIO 9
const countriesLengths=[];
for(let q=0; q<countries.length; q++){
    countriesLengths.push(Number(countries[q].length))
    //console.log(countriesLengths)
}
//console.log(countries[countriesLengths.indexOf(Math.max(...countriesLengths))])
let Massimo=Math.max(...countriesLengths);
let indiceMassimo=countriesLengths.indexOf(Massimo);
let countriesMassimo=countries[indiceMassimo];
// console.log(countriesMassimo);
//#endregion
//#region ESERCIZIO 10
let countries5=[];
for(let r=0; r<countries.length; r++){
    if(countries[r].length===5){
        countries5.push(countries[r])
    }
}
// console.log(countries5);
//#endregion
//#region ESERCIZIO 11
const webTechsLength=[];
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for(let s=0; s<webTechs.length; s++){
    webTechsLength.push(webTechs[s].length)
}
let Max=Math.max(...webTechsLength);
let indexMax=webTechsLength.indexOf(Max);
let MaxWord=webTechs[indexMax];
// console.log(MaxWord)

//#endregion
//#region ESERCIZIO 12
const webArrays=[];
//ciclo l'array e creo pusho due array dentro
for(let t=0; t<webTechs.length; t++){
    webArrays.push([webTechs[t], webTechs[t].length])
}
// console.log(webArrays);
//#endregion
//#region ESERCIZIO 13
const mernStack=["MongoDB","Express","React","Node"];
let MERN="";
for(let u=0; u<mernStack.length; u++){
    let iniziale=mernStack[u].slice(0,1);
    MERN+=iniziale
}
// console.log(MERN)
//#endregion
//#region ESERCIZIO 14
let webs= ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for(let v=0; v<webs.length; v++){
    // console.log(webs[v])
}
//come il for each 
for(let web of webs){
    // console.log(web);
}
//#endregion
//#region ESERCIZIO 15
//ages.sort((a,b) => a-b);
const fruitsIndex=[];
const fruits=['banana', 'orange', 'mango', 'lemon'];
for(let w=0; w<fruits.length; w++){
    fruitsIndex.push(fruits.indexOf(fruits[w]))
}
fruitsIndex.sort((a,b) => b-a);
// console.log(fruitsIndex)
const reverseFruits=[];
//ciclo l'array degli indici e gli dico che ogni indice corrisponde ad un elemento dell'array fruits
for(let x=0; x<fruitsIndex.length; x++){
    let index=fruitsIndex[x];
    index=fruits[fruitsIndex[x]]
    reverseFruits.push(index)
}
// console.log(reverseFruits)
//si poteva ciclare l'array al contrario e fare push
/* const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];

for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}

console.log(reversedFruits); */
//#endregion
//#region ESERCIZIO 16
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
//il metodo flat appiattisce di un livello per impostazione, si possono mettere valori diversi 
const flatFullStack=fullStack.flat();
const fullStackCaps=[];
for(let a=0; a<flatFullStack.length; a++){
    fullStackCaps.push(flatFullStack[a].toUpperCase())
}
console.log(fullStackCaps)
//#endregion