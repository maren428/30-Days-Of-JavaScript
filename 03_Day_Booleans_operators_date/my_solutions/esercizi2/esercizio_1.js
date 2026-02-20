//prompt('dici all'utente cosa scrivere', 'testo placeholder');

let base= prompt("Inserisci la base:", "0");
let altezza= prompt("Inserisci l'altezza:", "0"); // prompt() mi tira fuori una stringa
base= Number(base); //devo convertire la stringa in numero per poterci lavorare  
altezza = Number(altezza);
console.log(base);
console.log(altezza);
alert(`L'area del triangolo è: ${base * altezza * 0.5}`);

