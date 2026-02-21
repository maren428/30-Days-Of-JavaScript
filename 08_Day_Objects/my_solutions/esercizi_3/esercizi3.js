//#region ESERCIZIO 1
const contoPersona= {
    nome: "Paolo",
    cognome: "Rossi",
    /*Il modo che mi rende dinamico questo pezzo di codice è fare un array con dentro degli oggetti, così posso fare una descrizione e il suo valore, dopo viene facile anche da ciclare  */
    entrate: [
        {
            descrizione: "Stipendio",
            cifra:1800
        },
        {
            descrizione: "Affitto stanze",
            cifra:1200
        },
        {
            descrizione: "Vendita macchina", 
            cifra:5000
        }
    ],
    spese: [
       { 
        descrizione: "Affitto",
        cifra:500

       },
       {
        descrizione: "Luce",
        cifra:120
    },
       {
        descrizione:"Gas",
        cifra:200
    },
       {
        descrizione:"Assicurazione macchina",
        cifra:300
       }
],
/*Funzione che cicla gli oggetti dentro entrate: il mio riferimento è l'oggettone --> this e poi entrate, quindi il ciclo arriverà a this.entrate.length  */
    entrate_totali: function(){
        let somma_entrate=0;
        for(let i=0; i<this.entrate.length; i++){
            somma_entrate+=this.entrate[i].cifra
        }
        return somma_entrate
    },
    uscite_totali: function() {
        let somma_uscite=0;
        for(let i=0; i<this.spese.length; i++){
            somma_uscite+=this.spese[i].cifra
        }
        return somma_uscite
      
    },
/*Quando si usano i template literals direttamente come valore, this viene valutato subito (quando l'oggetto viene creato) e non funziona.
Bisogna fare una funzione con return per essere corretti.  */
    informazioni_sul_conto: function(){
    return `Il conto è intestato a ${this.nome} ${this.cognome}`
    },
/*Aggiungo entrate, inserendo la nuova entrata come parametro nella funzione e poi la pusho dentro dato che entrate è un array */    
    aggiungi_entrate: function(entrata){
        this.entrate.push(entrata)
    },
    aggiungi_spese:function(spesa){
        this.spese.push(spesa)
    },
/*Per sfruttare i valori ritornati dalle funzioni precedenti, richiamo le funzioni dentro a delle variabili e poi nel return dell'attuale funzione sottraggo le 2 variabili  */    
    bilancio_del_conto: function(){
        const entrate_totali= this.entrate_totali();
        const uscite_totali= this.uscite_totali();
        return entrate_totali - uscite_totali
    }
}
/* console.log(contoPersona.entrate_totali())
console.log(contoPersona.uscite_totali())
contoPersona.aggiungi_entrate({descrizione: "Regalo", cifra:100})
console.log(contoPersona.entrate_totali())
contoPersona.aggiungi_spese({descrizione:"Acquisto mobili", cifra:500})
console.log(contoPersona.uscite_totali())
console.log(contoPersona.bilancio_del_conto())
console.log(contoPersona.informazioni_sul_conto()) */
/*per ciclare un oggeto dentro un oggetto: mi prendo l'oggetto dell'oggetto */
//#endregion
//#region ESERCIZIO 2
  const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];
function SignUp(id,username,email,password){
/*Il metodo some itera un array e verfica che almeno una condizione sia tue o false e ritorna uno dei due di conseguenza  */ 
/*Prendi l'array users --> users.some e per ogni elemento di users --> user(come dire users[i]) fai i confronti */  
    const userVerify= users.some( user =>
    user._id === id ||
    user.username === username ||
    user.email === email 
/*Non serve controllare la password, per questioni di sicurezza e privacy, però il parametro servirà dopo nella creazione del nuovo utente  */    
);
    if(userVerify){
        console.log("Hai già registrato un account")
       /*Blocca il codice, così quello dopo non viene eseguito
        e indica che l'operazione è fallita(oppure per controllare errori)  */
        return false;
    }
/*Se usi return non serve l'else  */    
/*Non è necessario metter l'else perché se il codice si ferma prima, non verrebbe letto, sarebbe superfluo */
/*Aggiungo il nuovo utente in modo dinamico, usando i parametri, inserisco la data con un nuovo oggetto data e lo converto in formato leggibile italiano con toLocaleString it, metto loggedin su false  */  
const newUser= {
        _id: id,
        username: username,
        email: email,
        password: password,
        createdAt:new Date().toLocaleString("it-IT"),
        isLoggedIn: false
}
users.push(newUser)
console.log(`Benvenuto ${username}! Il tuo account è stato creato con successo`);
/*Comunica il risultato alla funzione, serve anche per controllare  il flusso del programma */
/*Potrei mettere la funzione dentro una variabile e poi fare un if che sfrutti il risultato e se è vera reindirizza alla pagina di login altrimenti da un messaggio di errore */
/*const result = signUp('id', 'Mario', 'mario@m.com', 'pass');

if (result) {
    console.log("✅ Registrazione riuscita!");
} else {
    console.log("❌ Registrazione fallita!");
}  */
return true   
}
/* SignUp('abc57t','Giovanna','giovanna@giovanna.com','12abg8');
SignUp('ghderc', 'Thomas', 'thomas@thomas.com', '123333'); */
//#endregion
//#region ESERCIZIO 2-b
function SignIn(username,password){
/*Applico il metodo find che itera tutto l'array, testa ogni condizione e ritorna il primo elemento che le soddisfa tutte, se non trova nulla ritorna undefined */
/* 
// .find() itera:
// 1° giro: user = { username: 'Alex', password: '123' }
//    'Alex' === 'Thomas' && '123' === '456'  → false, continua

// 2° giro: user = { username: 'Thomas', password: '456' }
//    'Thomas' === 'Thomas' && '456' === '456'  → true, RITORNA questo oggetto

// Risultato: user = { username: 'Thomas', password: '456', ... } */
/*In questo caso mi restituisce come valore della variabile -->user, cioè l'oggetto utente */    
    const credentialVerify= users.find(user =>
    user.username === username &&
    user.password === password    
    );
    if(credentialVerify){
        credentialVerify.isLoggedIn = true;
        console.log(`Bentornato ${username}! Hai effettuato l'accesso`)
        return true
    }
/*Non serve mettere un altro if, sarebbe ridondante, tanto se l'if di sopra è vero, quà non arriva  */    
        console.log("Hai inserito nome utente o password non validi! Riprova")
        return false
    
}
/* SignIn('Thomas','123333');
SignIn('Thom','12333345'); */
//#endregion
//#region ESERCIZIO 3

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
function rateProduct(id,name,description,price,rate){
/*Il metodo find mi fa memorizzare l'oggetto dentro una variabile, quindi dopo posso prendermi anche il suo indice o puhare dentro della roba  */    
    const checkProduct= products.find(product => 
        product._id === id &&
        product.name === name &&
        product.description === description &&
        product.price === price
    );
    if(!checkProduct){
        // console.log("Inserisci un prodotto valido")
        return false 
    }
    //const indexpro=products.findIndex((element)=> element["_id"]===id)
    
console.log("Hai inserito correttamente la tua valutazione")
checkProduct.ratings.push(rate)
return true;
}
/* rateProduct('hedfcg','TV','Smart TV:Procaster', 400,{userId: 'abc789',rate: 7})  */  
// console.log(products) 
//#endregion
//#region  ESERCIZIO 3-b
function averageRatings(id){
    const checkProduct = products.find(product => 
    product._id === id);
if(!checkProduct){
    console.log("Il prodotto non esiste")
    return false
}
let sumRatings= 0;
for(let i=0; i<checkProduct.ratings.length; i++){  
   sumRatings+= parseFloat(checkProduct.ratings[i].rate)
}

return sumRatings / checkProduct.ratings.length
}
// console.log(averageRatings('eedfcf'))
//#endregion
//#region ESERCIZIO 4
function likeProduct(id,userId){
    const checkProduct = products.find(product => 
    product._id === id);
if(!checkProduct){
    console.log("Il prodotto non esiste")
    return false
}
if(checkProduct.likes.includes(userId)){
    checkProduct.likes.splice(checkProduct.likes.indexOf(userId),1);
    console.log(`Hai rimosso il like di ${userId} da ${checkProduct.description}`);
}else{
    checkProduct.likes.push(userId);
    console.log(`Hai aggiunto il like di ${userId} da ${checkProduct.description}`);
}
return checkProduct
}
console.log(likeProduct('eedfcf','zwf8md'))
console.log(likeProduct('eedfcf','zwf8md'))
//#endregion
