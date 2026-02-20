let base = prompt("Inserisci la base:", "0");
let altezza= prompt("Inserisci l'altezza:", "0");
base=Number(base);
altezza=Number(altezza);
if(isNaN(base)|| isNan(altezza) || base <=0 || altezza <=0){
    alert("Inserisci numeri validi e maggiori di zero!");
} else {
    alert(`L'area del rettangolo è: ${base * altezza}
Il perimetro è: ${2*(base+altezza)}`);
}
