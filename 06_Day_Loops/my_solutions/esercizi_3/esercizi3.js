//#region ESERCIZIO 1
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
//creo una copia separata dell'array
const copy=countries.slice();
// console.log(copy)
//#endregion
//#region ESERCIZIO 2
const countriesCopy=countries.slice();
const sortedCountries=countriesCopy.sort();
// console.log(sortedCountries);
//#endregion
//#region ESERCIZIO 3
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
/* console.log(webTechs.sort());
console.log(mernStack.sort()); */
//#endregion
//#region ESERCIZIO 4
const land=[];
for(let i=0; i<countries.length; i++){
  if(countries[i].includes("land")){
  land.push(countries[i])
}
}

// console.log(land);
//#endregion
//#region ESERCIZIO 5
const index=[];
for(let j=0; j<countries.length; j++){
  index.push(countries[j].length);
}
let max=Math.max(...index);
let maxIndex=index.indexOf(max);
let maxWord=countries[maxIndex];
// console.log(maxWord);
//#endregion
//#region ESERCIZIO 7
const four=[];
//inizializzo una variabile con false e sfrutto il suo stato per fare i miei controlli
let fourLetters=false;
for(let k=0; k<countries.length; k++){
  if(countries[k].length===4){
    four.push(countries[k])
    fourLetters=true;
  }
}
//sfrutto il fatto che la variabile sia false per fare un caso in cui il ciclo non trovi dei valori
 if(fourLetters===false){
    console.log("Non esistono paesi con quattro lettere")
  }
//#endregion 
//#region ESERCIZIO 8
const pluralWord=[];
let twoWord=false;
for(let l=0; l<countries.length; l++){
  if(countries[l].includes(" ")){
    pluralWord.push(countries[l]);
    twoWord=true;
  }
}
if(!twoWord){
  console.log("Non esistono paesi formati da due o più parole")
}
//#endregion
//#region ESERCIZIO 9
const countriesCapitalize=[];
for(let m=0; m<countries.length; m++){
  countries.reverse();
  //countries[m][0] è il primo indice della stringa interna all'array
  countriesCapitalize.push(countries[m].replace(countries[m][0],countries[m][0].toUpperCase()));
}
//console.log(countriesCapitalize);
//#endregion