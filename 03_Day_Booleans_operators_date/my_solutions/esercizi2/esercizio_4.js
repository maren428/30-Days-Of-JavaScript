const pi=3.14;
let raggio= prompt("Inserisci il raggio:", "0");
raggio=Number(raggio);
if(isNaN(raggio)|| raggio <=0){
    alert("Inserisci numeri validi e maggiori di zero!");
} else {
    alert(`L'area del triangolo è: ${pi* raggio * raggio }
La circonferenza del cerchio è: ${2* pi * raggio}`);
}