/*Set e Map sono tipi di dati più "avanzati" che richiedono una costruzione esplicita.
Set e Map "esistono" solo come costruttori, non hanno una loro parentesi speciale. Le graffe nel console.log sono solo per mostrarli, non per crearli.*/
/*Set è proprio come un insieme matematico, e Map è come una funzione matematica che associa elementi.(Array associativi) */

//#region ESERCIZIO 1
const emptySet= new Set();
// console.log(emptySet);
//#endregion
//#region ESERCIZIO 2
//Create a set containing 0 to 10 using loop
const numbers = [0,1,2,3,4,5,6,7,8,9,10];
setOfNumbers= new Set();
for(const number of numbers) {
  setOfNumbers.add(number)
}
// console.log(setOfNumbers)
//#endregion
//#region ESERCIZIO 3
/*Trova e toglie, in console appare true */
/* console.log(setOfNumbers.delete(5));
console.log(setOfNumbers.size);
console.log(setOfNumbers) */
//#endregion
//#region ESERCIZIO 4
setOfNumbers.clear();
// console.log(setOfNumbers);
//#endregion
//#region ESERCIZIO 5
const miscArrays= [1,true,'patate',34];
setOfStrings= new Set();
for(const miscArray of miscArrays ){
  setOfStrings.add(miscArray.toString())
}
// console.log(setOfStrings);
//#endregion
//#region ESERCIZIO 6
const countries = ['Finland', 'Sweden', 'Norway'];
const countriesMap= new Map();
for(const country of countries){
  countriesMap.set(country,country.length)
}
// console.log(countriesMap)
//ALTERNATIVA FOR EACH
/*const countries = ['Finland', 'Sweden', 'Norway'];
const countriesMap = new Map();
countries.forEach(country => countriesMap.set(country, country.length));

//ALTERNATIVA MAP() DENTRO NEW MAP()
const countries = ['Finland', 'Sweden', 'Norway'];
const countriesMap = new Map(
  countries.map(country => [country, country.length])
);
*/
//#endregion