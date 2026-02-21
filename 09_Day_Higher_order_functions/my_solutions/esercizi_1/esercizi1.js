/*Quando si usano il metodo filter l'element che inserisco come parametro nella funzione callback,
è il valore che viene ritornato se soddisfa la condizione */
/*Find è come filter, e restituisce il primo che trova  */
/*// CRESCENTE ↑
array.sort((a, b) => a - b)

// DECRESCENTE ↓
array.sort((a, b) => b - a)

// Per oggetti (crescente per age)
array.sort((a, b) => a.age - b.age)  */
//#region ESERCIZIO 3
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
// countries.forEach((country) => console.log(country));
//#endregion
//#region ESERCIZIO 4
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// names.forEach((name) => console.log(name));
//#endregion
//#region ESERCIZIO 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach((number) => console.log(number));
//#endregion
//#region ESERCIZIO 6
const countriesUpperCase= countries.map((country) => country.toUpperCase())
// console.log(countriesUpperCase)
//#endregion
//#region ESERCIZIO 7
const countriesLengths= countries.map((country) => country.length );
// console.log(countriesLengths)
//#endregion
//#region ESERCIZIO 8
const square= numbers.map((number) => number**2);
// console.log(square);
//#endregion
//#region ESERCIZIO 9
const namesUpperCase= names.map((name) => name.toUpperCase());
// console.log(namesUpperCase);
//#endregion
//#region ESERCIZIO 10
/*Come mappare gli oggetti  */
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
const productAndPrice= products.map(({product,price}) => ({[product] : price}));
// console.log(productAndPrice)
//#endregion
//#region ESERCIZIO 11
const land= countries.filter((country) => country.includes('land'));
// console.log(land)
//#endregion
//#region ESERCIZIO 12
const sixLetters= countries.filter((country) => country.length === 6);
// console.log(sixLetters);
//#endregion
//#region ESERCIZIO 13
const sixOrMoreLetters= countries.filter((country) => country.length >= 6);
// console.log(sixOrMoreLetters);
//#endregion
//#region ESERCIZIO 14
const eCountry= countries.filter((country) => country.startsWith('E'));
// console.log(eCountry);
//#endregion
//#region ESERCIZIO 15
/*Filtra solo i prodotti con dei prezzi che hanno il valore  */
const prices= products.filter((product) => product.price && product.price !== ' ' );
// console.log(prices);
//#endregion
//#region ESERCIZIO 16
function getStringLists(miscArray){
    const stringElements= [];
    miscArray.forEach((element) => stringElements.push(element.toString()));
    return stringElements    
}
// console.log(getStringLists([1,2,'patata',true,714]));   
//#endregionù
//#region ESERCIZIO 17
const sum= numbers.reduce((acc,curr) => acc+curr, 0);
// console.log(sum);
//#endregion
//#region ESERCIZIO 18
const countries2 = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

const sentence = countries2.reduce((acc, country, index) => {
  if (index === 0) {
    return country;
  } else if (index === countries2.length - 1) {
    return acc + ' and ' + country;
  } else {
    return acc + ', ' + country;
  }
}, '') + ' are north European countries';
// console.log(sentence);
//#endregion
//#region ESERCIZIO 20
const lengthNames= names.some((name) => name.length > 7);
// console.log(lengthNames);
//#endregion
//#region ESERCIZIO 21
const containsLand= countries.every((country) => country.includes('land'));
// console.log(containsLand);
//#endregion
//#region ESERCIZIO 23
/*Find restituisce il primo elemento che rispetta quelle condizioni  */
const sixLettersCountry= countries.find((country) => country.length === 6);
// console.log(sixLettersCountry);
//#endregion
//#region ESERCIZIO 24
const sixLettersCountrys= countries.findIndex((country) => country.length === 6);
// console.log(sixLettersCountrys);
//#endregion
//#region ESERCIZIO 25
const findNorway= countries.findIndex((country) => country.includes('Norway'));
// console.log(findNorway);
//#endregion
//#region ESERCIZIO 26
const findRussia= countries.findIndex((country) => country.includes('Russia'));
// console.log(findRussia);
//#endregion