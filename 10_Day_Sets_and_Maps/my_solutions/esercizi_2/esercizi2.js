
//#region ESERCIZIO 1
//Unione 
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
let C= new Set([...a, ...b]);
// console.log(C)
//#endregion
//#region ESERCIZIO 2
//Intersezione
let A= new Set(a);
let B = new Set(b);
//Potrei usare l'array a per filtrare e il set B, non array di b.includes perché sarebbe lento
// let D= new Set(a.filter((num) => B.has(num)))
/*Modo che usa i set, utile se a e b sono molto grandi e con tanti duplicati */
let D= new Set([...A].filter((num) => B.has(num)))
// console.log(D)
//#endregion
//#region ESERCIZIO 3
let E= new Set([...A].filter((num) => !B.has(num)))
// console.log(E)
//#endregion