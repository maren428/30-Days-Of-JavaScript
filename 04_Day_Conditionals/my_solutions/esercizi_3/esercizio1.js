let meseInput=prompt("Inserisci un mese:","Gennaio");
let mese=meseInput.toLowerCase();
if(mese==="novembre"||
mese==="aprile"||
mese==="giugno"||
mese==="settembre"    
){
alert(`${mese} ha 30 giorni`)
}else if(mese==="gennaio"||
mese==="marzo"||
mese==="maggio"||
mese==="luglio"||
mese==="agosto"||
mese==="ottobre"||
mese==="dicembre"    
){
alert(`${mese} ha 31 giorni`)
}else if (mese==="febbraio"){
alert(`${mese} ha 28 giorni`);
}else {
alert("Non hai inserito un mese valido");    
}