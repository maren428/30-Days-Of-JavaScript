let giornoInput=prompt("Che giorno è oggi?","Lunedì");
let giorno=giornoInput.toLowerCase();
if(giorno==="lunedì"||
   giorno==="martedì"||
   giorno==="mercoledì"||
   giorno==="giovedì"||
   giorno==="venerdì"
){
alert(`${giorno} è un giorno lavorativo`);
}else if(giorno==="sabato"||giorno==="domenica") {
alert(`${giorno} è un giorno di fine settimana`);    
}else {
alert("Il giorno inserito non è un giorno valido");
}