let firstName="Giovanna";
let lastName="Pedrotti";
if(firstName.length>lastName.length){
    console.log(`Il tuo nome, ${firstName} è più lungo del tuo cognome, ${lastName}`)
}else if(firstName.length===lastName.length) {
    console.log(`Il tuo nome, ${firstName} è lungo come il tuo cognome, ${lastName}`)
}else{
    console.log(`Il tuo nome, ${firstName} è più corto del tuo cognome, ${lastName}`)
};