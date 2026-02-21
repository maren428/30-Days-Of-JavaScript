import {countries} from './countries_data.js';
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
/*Trovare il prezzo totale dei prodotti concatenando due o più iteratori di array (es. arr.map(callback).filter(callback).reduce(callback))*/
//#region ESERCIZIO 1
const totalPrice= products
/*Entro in price  */
.map((product) =>product.price)
/*Sono già in price e filtro i prezzi che hanno solo numero, no strighe vuote  */
.filter((price)=> typeof price === 'number' && price > 0 )
/*Sommo tutti i prezzi  */
.reduce((acc,curr) => acc+ curr,0);
// console.log(totalPrice);
//#endregion
//#region ESERCIZIO 2
const priceInTotal= products.reduce((acc,product) =>{
    if(typeof product.price === 'number' && product.price > 0){
    return acc + product.price
}
/*Bisogna ritornare l'accumulatore nel caso che il codice risulti false, altromenti non va*/ 
return acc
} ,0);
// console.log(priceInTotal);
//#endregion
//#region ESERCIZIO 3
function categorizeCountries(pattern){
  const patternArray=countries
  .map((country) => country.name)
  .filter((name) => name.toLowerCase().includes(pattern.toLowerCase()));
  return patternArray
}
// console.log(categorizeCountries('stan'));
//#endregion
//#region ESERCIZIO 4

function firstLetterCount(){
//Mi prendo le iniziali
 const countriesletter= countries.map((country) =>country.name[0])
//creo oggetto vuoto
 const letterCount={}
//Ciclo l'array con le lettere ripetute e lo sfrutto per contare quante volte si ripetono
countriesletter.forEach((country)=>{
//Se la lettera esiste già, aggiungi 1, altrimenti gli dai valore 1. Ogni lettera compare almeno una volta, quindi all'inizio non c'è e quindi la lettera è uguale a 1, poi se la trova ancora, aumenta ecc...
  if(letterCount[country]){
    letterCount[country]++
  }else{
    letterCount[country]=1
  }
})
const countryLetters=[]
const letters=Object.keys(letterCount)
letters.forEach((letter)=>{
/*Per prendere il valore nomeOggetto aka variabile[chiave], va scritto per forza con le quadre perché non è un singolo elemento ma è come se fosse chiave[i] */
  countryLetters.push({"letter":`${letter}`,"count":letterCount[letter]})
})
// console.log(countryLetters);
}
firstLetterCount();
//#endregion
//#region ESERCIZIO 5
function getFirstTenCountries(){
  const firstTenCountries= countries
  .map((country) => country.name)
  .slice(0,10)
  const sortedByLength= firstTenCountries
  .map((country) => country)
  .sort((b,a) => b.length - a.length );
  const endsWithA= firstTenCountries
  .map((country) => country)
  .filter((country) => country.endsWith('a'));
  return [firstTenCountries,sortedByLength,endsWithA]
}
// console.log(getFirstTenCountries());
//#endregion
//#region ESERCIZIO 6
function getLastTenCountries(){
  const lastTenCountries= countries
  .map((country) => country.name)
  //Per prendere gli ultimi 10 sottraggo 10 a -1, cioè l'ultimo indice
  .slice((countries.length-1)-10,-1);
  console.log(lastTenCountries);
}
getLastTenCountries();
//#endregion