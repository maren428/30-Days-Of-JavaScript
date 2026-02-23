/*INNERHTML E TEXTCONTENT, SOSTITUISCONO del contenuto, NON AGGIUNGONO;
ES: Ho un tag <h1></h1> vuoto--> 
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'
Sostituisco il vuoto con del testo.

const lists = `...` // Stringa contenente HTML con vari <li>
const ul = document.querySelector('ul') // Seleziona il tag <ul> (che è vuoto)
ul.innerHTML = lists // INSERISCE tutto l'HTML dentro <ul> 
TEXTCONTENT inserisce solo testo, INNERHTML inserisce anche dei tag */
/*Posso anche rimuovere il contenuto di tutti i figli di un elemento genitore con INNERHTML
const ul = document.querySelector('ul')
ul.innerHTML = ''  */

//ESERCIZI LIVELLO 1
//#region ESERCIZIO 1
const paragraph= document.querySelector("p");
// console.log(paragraph);
//#endregion
//#region ESERCIZIO 2
const firstParagraph= document.querySelector("#primo");
const secondParagraph= document.querySelector("#secondo");
const thirdParagraph= document.querySelector("#terzo");
const fourthParagraph= document.querySelector("#quarto");
/* console.log(firstParagraph);
console.log(secondParagraph);
console.log(thirdParagraph);
console.log(fourthParagraph); */
//#endregion
//#region ESERCIZIO 3 
const allParagraphs= document.querySelectorAll("p");
// console.log(allParagraphs);
//stampo il primo paragrafo
// console.log(allParagraphs[0])
//#endregion
//#region ESERCIZIO 4
for(let i=0; i<allParagraphs.length; i++){
        // console.log(allParagraphs[i])
}
//#endregion
//#region ESERCIZIO 5
fourthParagraph.textContent= "Buongiorno";
//#endregion
//#region ESERCIZIO 6
allParagraphs[0].className= 'first';
allParagraphs[1].className='second';
allParagraphs[2].className='third';
allParagraphs[3].className='fourth';
allParagraphs[0].classList.add('square');
allParagraphs[1].classList.add('circle');
allParagraphs[2].classList.add('round');
allParagraphs[3].classList.add('cross');
allParagraphs[0].id='other-1';
allParagraphs[1].id='other-2';
allParagraphs[2].id='other-3';
allParagraphs[3].id='other-4';
allParagraphs[0].setAttribute('id','first-paragraph');
allParagraphs[1].setAttribute('id','second-paragraph');
allParagraphs[2].setAttribute('id','third-paragraph');
allParagraphs[3].setAttribute('id','fourth-paragraph');
allParagraphs[0].setAttribute('class','red');
allParagraphs[1].setAttribute('class','blue');
allParagraphs[2].setAttribute('class','green');
allParagraphs[3].setAttribute('class','yellow');
/* console.log(allParagraphs[0]);
console.log(allParagraphs[1]);
console.log(allParagraphs[2]);
console.log(allParagraphs[3]); */
//#endregion

//ESERCIZI LIVELLO 2
 //#region ESERCIZIO 1
/* allParagraphs.forEach((paragraph) =>{
paragraph.style.fontFamily= "Plus Jakarta Sans, sans-serif"
paragraph.style.textAlign= "center"
paragraph.style.margin= "30px auto"
paragraph.style.width= "300px"
paragraph.style.padding= "50px"
paragraph.style.borderRadius= "20px"
       if(paragraph.classList.contains('blue')){
           paragraph.style.backgroundColor= "steelblue"
           
               
        } else if(paragraph.classList.contains('red')) {
           paragraph.style.backgroundColor= "red"
    
        }else if(paragraph.classList.contains('yellow')){
           paragraph.style.backgroundColor= "yellow"     
        }else {
           paragraph.style.backgroundColor= "green"     
        }
})  */
//#endregion
//#region ESERCIZIO 2
allParagraphs.forEach((paragraph,i) =>{
paragraph.style.fontFamily= "Plus Jakarta Sans, sans-serif"
paragraph.style.textAlign= "center"
paragraph.style.margin= "30px auto"
paragraph.style.width= "300px"
paragraph.style.padding= "50px"
paragraph.style.borderRadius= "20px"
  if(i % 2 === 0){
    paragraph.style.backgroundColor= "green"
  }else {
     paragraph.style.backgroundColor= "red"
  }

})
//#endregion



