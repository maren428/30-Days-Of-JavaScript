
const oggi=new Date();
const anno=oggi.getFullYear();
const mese=(oggi.getMonth()+1).toString().padStart(2,"0");
const data=oggi.getDate().toString().padStart(2,"0");
const ore=oggi.getHours().toString().padStart(2,"0");
const minuti=oggi.getMinutes().toString().padStart(2,"0");
console.log(`${anno}-${mese}-${data} ${ore}:${minuti}`);
console.log(`${data}-${mese}-${anno} ${ore}:${minuti}`);
console.log(`${data}/${mese}/${anno} ${ore}:${minuti}`);
/*per aggiungere lo zero davanti ai minuti,giorni,ore ecc. devo trasformare prima in
stringa con toString(), poi con padStart(lunghezza totale,carattere da aggiungere) 
aggiungo lo zero all'inizio*/





