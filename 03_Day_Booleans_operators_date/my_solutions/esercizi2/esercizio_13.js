let annoNascita=prompt("Inserisci il tuo anno di nascita:","1970");
annoNascita=Number(annoNascita);
const annoCorrente= new Date().getFullYear();
let eta=annoCorrente-annoNascita;
let differenza_eta=18-eta;
if(eta>=18){
    alert(`Hai ${eta} anni. Sei grande abbastanza per guidare.`);
}
else{
    alert(`Hai ${eta} anni. Ti sarà permesso guidare tra ${differenza_eta} anni.`)
}

