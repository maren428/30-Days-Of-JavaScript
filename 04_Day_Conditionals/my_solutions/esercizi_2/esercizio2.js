let mese="Aprile";
switch (true){
case mese==="Settembre" || mese==="Ottobre"||mese==="Novembre":
console.log("La stagione è Autunno");
break;
case mese==="Dicembre" || mese==="Gennaio"||mese==="Febbraio":
console.log("La stagione è Inverno");
break;
case mese==="Marzo" || mese==="Aprile"||mese==="Maggio":
console.log("La stagione è Primavera");
break;
case mese==="Giugno" || mese==="Luglio"||mese==="Agosto":
console.log("La stagione è Estate");
break;
default:
console.log("Non siamo in nessuna stagione");    
}

let mese2="Dicembre";
if(mese2==="Settembre" || mese2==="Ottobre"||mese2==="Novembre"){
console.log("La stagione è Autunno");
}else if (mese2==="Dicembre" || mese2==="Gennaio"||mese2==="Febbraio"){
console.log("La stagione è Inverno");
}else if(mese2==="Marzo" || mese2==="Aprile"||mese2==="Maggio"){
console.log("La stagione è Primavera");
}else if(mese2==="Giugno" || mese2==="Luglio"||mese2==="Agosto"){
console.log("La stagione è Estate");
}else{
console.log("Non siamo in nessuna stagione");     
}
