//#region ESERCIZIO 1
const cane = {};
//#endregion
//#region ESERCIZIO 2
// console.log(cane);
//#endregion
//#region ESERCIZIO 3
/* Aggiungere all'oggetto cane le proprietà nome, zampe, colore, età e abbaio. La proprietà abbaia è un metodo che restituisce woof woof. */
cane.nome= "Spike"
cane.zampe=4
cane.colore="nero"
cane.eta=2
cane.abbaia = function (){
    return "Woof woof"
}
// console.log(cane);
// console.log(cane.abbaia());
//#endregion
//#region ESERCIZIO 4
// Ottenere il valore di nome, zampe, colore, età e abbaio dall'oggetto cane
/* console.log(cane.nome)
console.log(cane.zampe)
console.log(cane.colore)
console.log(cane.eta)
console.log(cane.abbaia()) */
//#endregion
//#region ESERCIZIO 5
// Impostare nuove proprietà per l'oggetto cane: razza, getDogInfo
cane.razza= "Dalmata";
cane.getDogInfo = function(){
    return `${this.nome} è un cane di razza ${this.razza}, di ${this.eta} anni e di colore ${this.colore} `
}
// console.log(cane.getDogInfo())
//#endregion