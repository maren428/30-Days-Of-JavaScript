const secondiXanno= 365*24*60*60;
let anniVissuti=prompt("Inserisci il numero di anni che vivrai:","100");
anniVissuti=Number(anniVissuti);
let secondiVissuti=anniVissuti*secondiXanno;
if(isNaN(anniVissuti)||anniVissuti<=0){
    alert("Inserisci numeri validi e maggiori di zero")
}else{
    alert(`Hai vissuto ${secondiVissuti} secondi`)
};