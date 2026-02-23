/* getelementbyclass restituisce un array (HTML COLLECTION)
quindi per beccare il div devo prendere il primo elemento */
/*Salvo il div principale in una variabile e gli le regole per farlo stare centrato, width e padding  */
const wrapper= document.getElementsByClassName('wrapper')[0];
wrapper.style.width="1220px";
wrapper.style.margin="auto";
wrapper.style.padding="30px 0";

/*Salvo l'h1 in una variabile e gli do le regole per lo stile  */
const mainTitle = document.querySelector('h1');
mainTitle.style.textAlign= "center";
mainTitle.style.fontFamily= "Montserrat, sans-serif";
mainTitle.style.fontSize= "25px";
mainTitle.style.fontWeight= "600"; 

/*Salvo l'h2 in una variabile e gli do lo stile  */
const secondTitle= document.querySelector('h2');
secondTitle.style.textAlign= "center";
secondTitle.style.fontFamily= "Montserrat, sans-serif";
secondTitle.style.fontSize= "20px";
secondTitle.style.fontWeight= "100";
secondTitle.style.textDecoration= "underline";

/*Creo una variabile contatore che inizializzo a zero e un array di riferimento con i colori che userò per la scritta 2020  */
let colorCount= 0;
let colorArray= ["steelblue","aqua","teal","navy","purple","lightsalmon","canaryyellow"];
/*La funzione crea una sorta di ciclo manuale che prende un parametro e gli da il colore grazie alla variabile contatore che viene associata all'indice dell'array, ogni volta che la funzione viene richiamata il contatore aumenta, scorrendo così l'array. Quando arriva alla fine dell'array, il contatore ricomincia dalla pozione 0  */
/*Cambia colore allo span 2020  */
function changeColorYear(year){
    //Accedi alla posizione del contatore
    year.style.color= colorArray[colorCount];
    //Dalla prossima volta aumenta
    colorCount++;
    //Se supera l'array il contatore riparte da zero
    if(colorCount >= colorArray.length ){
        colorCount = 0
    }
}
/*Salvo p dentro una variabile, gli do lo stile  */
let data= document.querySelector('p');
data.style.textAlign="center"
data.style.fontFamily="Montserrat, sans-serif";
data.style.fontSize="12px";
data.style.padding="5px";
data.style.width="200px";
data.style.margin="auto";
/*La funzione prende un parametro, crea un oggetto data formattato tramite localedtaestring, versione inglese dopo la virgola si trovano le options, cioè il modo in cui voglio che sia scritto ogni elemento della data  */
function dateParagraph(paragraph){
    let todayDate=new Date().toLocaleDateString("en-EN",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});
    //Elimino at e spazi vuoti
    todayDate= todayDate.replace(" at "," ")
    paragraph.innerHTML= todayDate
    /*Uso innerHTML per sovrascrivere il paragrafo */
    /*Ogni volta che il paragrafo verrà sovrascritto il tempo andrà avanti  */    
    /*Dato che io faccio tutto dentro la funzione non devo fare il return, fa tutto innerHTML */
}
/*Stessa funzione di changeColorYear che cambia colore di sfondo al paragrafo data  */
let colorDateCount=0;
let arrayColors=["aqua","teal","navy","purple","canaryyellow","steelblue","lightsalmon"]
function changeColorDate(dataBackground){
    //Accedi alla posizione del contatore
    dataBackground.style.backgroundColor= arrayColors[colorDateCount];
    //Dalla prossima volta aumenta
    colorDateCount++;
    //Se supera l'array il contatore riparte da zero
    if(colorDateCount >= arrayColors.length ){
        colorDateCount = 0
    }
}

//La funzione viene eseguita al caricamento del DOM
document.addEventListener('DOMContentLoaded', function() {
  const changeColor=document.querySelector('span');
  changeColor.style.fontSize= "70px"  
  changeColorYear(changeColor);//esegue subito la prima volta  
  setInterval(() => changeColorYear(changeColor), 1000);
  dateParagraph(data);
  setInterval(() => dateParagraph(data), 1000);
  changeColorDate(data);
  setInterval(() => changeColorDate(data), 1000);
  /*Richaimo qua dentro le funzioni di sopra per far eseguire il codice una volta, e poi farle andare in loop ogni secondo  */
  /*SetInterval va scritto così per poter passare delle funzioni come parametri */
  /*Dentro allo stesso "evento" posso mettere più funzioni e più setinterval  */
});
/*Salvo il contenitore della lista in una variabile e gli do lo stile   */
const wrapperList= document.querySelector(".wrapper-list");
wrapperList.style.width="600px";
wrapperList.style.margin="30px auto";

const list= document.querySelector("ul");
list.style.listStyleType="none";

/*Salvo tutti i tag li in una variabile,faccio un ciclo e in base alla classe che hanno gli do un colore di sfondo diverso  */
const listElements= document.querySelectorAll("li");
listElements.forEach((listElement) => {
    listElement.style.marginBottom="5px"
    listElement.style.padding="15px"
    listElement.style.fontFamily="Montserrat, sans-serif"
    if(listElement.classList.contains("done")){
        listElement.style.backgroundColor="green"
    }else if(listElement.classList.contains("ongoing")){
        listElement.style.backgroundColor="yellow"
    }else{
        listElement.style.backgroundColor="red"
    }
})














