/*Inserire una data specifica:
new Date(anno, mese, giorno, ore, minuti, secondi, millisecondi),
rispettare l'ordine
*/
const data=new Date(2003,0,5,9,7);
const anno=data.getFullYear();
const mese=(data.getMonth()+1).toString().padStart(2,"0");
const giorno=data.getDate().toString().padStart(2,"0");
const ore=data.getHours().toString().padStart(2,"0");
const minuti=data.getMinutes().toString().padStart(2,"0");
console.log(`${anno}-${mese}-${giorno} ${ore}:${minuti}`);