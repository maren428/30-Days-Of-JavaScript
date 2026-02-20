let numero=prompt("Inserisci un numero:","0");
numero=Number(numero);
if(isNaN(numero)){
    alert("Inserisci un numero valido")
    
}else if(numero%2===0) {
    alert(`${numero} è un numero pari`)
}
else {
    alert(`${numero} è un numero dispari`)
}
