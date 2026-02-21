/* import pkg from '../esercizi_2/esercizi2.js';
const { userIdGenerator } = pkg;
console.log(userIdGenerator()); */
//#region ESERCIZIO 1
function userIdGeneratedByUser(){
    let numChar=prompt("Inserisci il numero di caratteri:", "7");
    let numId=prompt("Inserisci il numero di ID che vuoi creare:", "9");
    let alfaNum="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for(let i=0; i<numId;i++){
        let id="";
        for(let j=0; j<numChar; j++){
        let rng=Math.floor(Math.random()*alfaNum.length)
        let lettera=alfaNum[rng];
        id +=lettera; 
        }
        // console.log(id)
    }
}
// userIdGeneratedByUser();
/*L'esercizio genera degli ID con lunghezza di caratteri e numero di ID casuali, decisi dall'utente tramite prompt. Ho bisogno di due cicli for l'esterno decide quanti id creare, l'interno decide quanti caratteri hanno gl id. Per far sì che la stringa si resetti ad ogni iterazione, va messa all'interno del primo ciclo.  */
//#endregion
//#region ESERCIZIO 2
function rgbColorGenerator(){
    let rgbNum=Math.floor(Math.random()*256);
    return rgbNum
}
// console.log(`rgb(${rgbColorGenerator()},${rgbColorGenerator()},${rgbColorGenerator()})`)
//#endregion
//#region ESERCIZIO 3
function arrayOfHexaColors(){
    let numColors=prompt('Inserisci il numero di colori che vuoi generare:', '7');
    let colorsArray=[];
    let hexaString='0123456789abcdef'
    //ciclo che crea un numero di colori e dentro un ciclo che crea i colori, poi vanno in un array
    for(let i=0; i<numColors; i++){
        let color='#'
        for(let j=0; j<6; j++){
             let rng=Math.floor(Math.random()*hexaString.length);
    let codeHexa=hexaString[rng];
    color+=codeHexa;
        }
        colorsArray.push(color)
    }
    return colorsArray
}
// console.log(arrayOfHexaColors());
/*L'esercizio genera un array con dentro un numero casuale di array, scelto dall'utente. Per farlo faccio un ciclo dentro un ciclo e poi pusho le stringhe dentro l'array  */
//#endregion
//#region ESERCIZIO 4
function arrayOfRgbColors(numColors){
    const matrixColors= Array();
    for(let i=0; i<numColors; i++){
        const color= Array();
        for(let j=0; j<3; j++){
        let rgbNum=Math.floor(Math.random()*256);
        color.push(rgbNum)    
        }
       matrixColors.push(color)       
    }
    return matrixColors
}
// console.log(arrayOfRgbColors(7));
/*L'esercizio crea una matrice con dentro un numero di array deciso dal parametro. Creo dentro la funzione un array vuoto che sarà la mia matrice. Poi faccio due cicli con dentro un array vuoto che si resetta ad ogni iterazione. Il ciclo esterno decide quanti array creare, quello interno genera i numeri casuali e fa un array da 3. Poi pusho gli array dentro l'array vuoto facendo così un array di array.   */
//#endregion
//#region ESERCIZIO 5
function convertHexaToRgb(hexaCode){
    let referenceString="0123456789abcdef";
    let cleanHexaCode=hexaCode.replace("#", "");

    const rgbToConvert= Array();
    for(let i=0; i<cleanHexaCode.length; i+=2){
        rgbToConvert.push(cleanHexaCode.slice(i, i+2))
    }
    for(let i=0; i<rgbToConvert.length;i++){
        let hexString= rgbToConvert[i]
        rgbToConvert[i]=referenceString.indexOf(hexString[0])*16+ referenceString.indexOf(hexString[1])
    }
    /*Prendo come riferimento una stringa che contiene tutti i caratteri esadecimali, poi sfrutto il fatto che un colore ha quei caratteri, quindi se ho la a sarà sempre quella la sua posizione all'interno della stringa riferimento. Quindi per avere il numero basta fare stringa.indexOf("a")--> 10   */
    return rgbToConvert
}
/*per scrivere una stringa con il codice rgb devo salavare la funzione in una variabile, così ho un riferimento e posso accedere alle posizioni dell'array per scrivere il risultato con i template literals  */
let rgbCode=convertHexaToRgb("#32a852");
// console.log(`rgb(${rgbCode[0]},${rgbCode[1]},${rgbCode[2]})`)
/*prendo una stringa hexa come parametro, gli tolgo il cancelletto, lo converto in array e dopo ciclo l'array e faccio le operazioni con i numeri  */
//#endregion
//#region ESERCIZIO 6
function rgbToHexa(...rgbCode){
    let referenceString="0123456789abcdef";
    let hexaCode="#";
    for(let i=0; i<rgbCode.length; i++){
        let primoDigit=Math.floor(rgbCode[i]/16);
        let secondoDigit=Math.floor(rgbCode[i]%16);
        hexaCode+=referenceString[primoDigit];
        hexaCode+=referenceString[secondoDigit];
    }
    return hexaCode
}
// console.log(rgbToHexa(50,168,82));
/*RICORDARSI CHE SE IL CODICE NON VA: USARE I CONSOLE.LOG, TIPO ALLA FINE DI UN CICLO, VEDERE QUALE VARIABILE NON VA E METTERE IL CONSOLE.LOG Lì SOTTO.
L'esercizio converte rgb in esadecimale, uso la cosa ... per trasformare i parametri in array, utilizzo la stringa di riferimento. Ciclo l'array e divido ogni elemento per 16, dopo faccio il modulo e ottengo due indici da ricercare nella stringa riferimento, così converto lettere in numeri. Dopo concateno prima uno e poi l'altro alla stringa "#" */
//#endregion
//#region ESERCIZIO 7
function generateColors(type,quantity){
    let colorsArray=[];
    switch(type.toLowerCase()){
        case "hexa":
    let hexaString='0123456789abcdef'
    for(let i=0; i<quantity; i++){
        let color='#'
        for(let j=0; j<6; j++){
             let rng=Math.floor(Math.random()*hexaString.length);
    let codeHexa=hexaString[rng];
    color+=codeHexa;
        }
        colorsArray.push(color)
    }    
        break;
        case "rgb":    
        for(let i=0; i<quantity; i++){
        let stringRgb="";    
        for(let j=0; j<3; j++){
            let rng=Math.floor(Math.random()*256);
            stringRgb+=`${rng},`;
            /*Invece di un array, metto i tre numeri casuali dentro una stringa e sfrutto i ternary operator per concatenare delle virgole
            "r,g,b" */
        }
        //elimino la virgola in più alla fine "r,g,b," --> "r,g,b" 
         stringRgb=stringRgb.slice(0,stringRgb.length-1)
        //racchiudo la stringa rgb dentro un'altra stringa per inserire il tutto tra parentesi sfruttando i template literals "rgb("r,g,b")"
        colorsArray.push(`rgb(${stringRgb})`)
    }
        break;
        default:
        // console.log("Hai inserito un tipo non valido")            
    }
    // console.log((colorsArray.length === 0)? "": colorsArray); 
}
generateColors("hexa",5);
generateColors("rgb",3);
generateColors("ccc",3);
//#endregion
/*L'esercizio genera una funzione che in base ai parametri genera colori rgb o esadeciamali. È stata sfruttata la struttura del case per fare il tutto(è come un if), si fa direttamente tolowercase() dentro il paramentro, visto che si tratta di una parola chiave. Nel console.log finale viene messo un ternary opearator che controlla la lunghezza dell'array finale, se questa è uguale a 0 stampa una stringa vuota, sennò avrebbe stampato []*/
//#region ESERCIZIO 8
function shuffleArray(toBeShuffled){
    for(let i=toBeShuffled.length-1; i>=0; i--){
        let shuffleIndex=Math.floor(Math.random()*(i+1))
        let tempShuffle=toBeShuffled[i];
        toBeShuffled[i]=toBeShuffled[shuffleIndex]
        toBeShuffled[shuffleIndex]=tempShuffle
    }
    return toBeShuffled
}
// console.log(shuffleArray(['banana','melone','ciliegia','pesca']));
/*L'esercizio crea una funzione che prende un'array e lo restituisce mescolato. Per fare ciò si manipolano gli indici scambiandoli con degli indici creati in modo randomico. Un ciclo scorre l'array al contrario, in modo da avere le stesse probabilità per tutti gli indici. Poi si usa una variabile temporanea per scambiare gli indici tra di loro  */
//#endregion
//#region ESERCIZIO 9
function factorial(num){
    //5!=5*4*3*2*1
    if(num=== 0){
        return 1
    }
    let Factorial=1;
    for(let i=num; i>=1; i--){
        Factorial*=i;
    }
    return Factorial
}
// console.log(factorial(0));
/*L'esercizio crea una funzione che calcola il fattoriale di un numero. Per farlo ciclo partendo dal numero fino a uno e uso una variabile cumulativa che parte da 1, altrimenti la moltiplicazione non funzionerebbe. Poi come per la somma, faccio aumentare la variabile cumulativa moltiplicando per i */
//#endregion
//#region ESERCIZIO 10
function isEmpty(parameter){
    if( parameter=== undefined){
        // console.log("Il parametro è vuoto")
     }else{//console.log(`Il parametro è ${typeof parameter} `)
        }
}
isEmpty();
/* function isEmpty(parameter) {
    //  Controlla undefined o null
    if (parameter === undefined || parameter === null) {
        return true;
    }

    //  Controlla stringa vuota
    if (typeof parameter === "string" && parameter.length === 0) {
        return true;
    }

    // Controlla array vuoto
    if (Array.isArray(parameter) && parameter.length === 0) {
        return true;
    }

    // Controlla oggetto vuoto
    if (typeof parameter === "object" && !Array.isArray(parameter) && Object.keys(parameter).length === 0) {
        return true;
    }

    // Se non rientra in nessuno dei casi sopra → non vuoto
    return false;
}
 */
//#endregion
//#region ESERCIZIO 12
function sumOfArrayItems(itemsToSum){
    let sum=0;
    for(let i=0; i<itemsToSum.length; i++){
        if(typeof itemsToSum[i] === "number"){
            sum+=itemsToSum[i]
        }else{
            return "Inserisci un array di numeri"
            //RETURN INTERROMPE IL CICLO SE TROVA VALORI NON VALIDI
        }
    }
    return sum
}
// console.log(sumOfArrayItems([10,11,1,0,1]));
/*L'esercizio prende un array e se gli elementi sono tutti number li somma, altrimenti se trova un valore di altro tipo interrompe il ciclo e restituisce una stringa con un messaggio */
//#endregion
//#region ESERCIZIO 13
function average(Items){
    let sum=0;
    for(let i=0; i<Items.length; i++){
        if(typeof Items[i] === "number"){
            sum+=Items[i]
        }else{
            return "Inserisci un array di numeri"
            //RETURN INTERROMPE IL CICLO SE TROVA VALORI NON VALIDI
        }
    }
    let mediumOfItems=sum/(Items.length);
    return mediumOfItems
}
// console.log(average([10,8,9.8,6,5]));
//#endregion
//#region ESERCIZIO 14
function modifyArray(arrayToModify){
    if(arrayToModify.length >=5){
        arrayToModify[4]=arrayToModify[4].toUpperCase();
        return arrayToModify
    }else{
        return "Elemento non trovato"
    }

}
// console.log(modifyArray(["ciao","heilà","come va","tutto bene","yuhu","la la la"]));
/*L'esercizio prende un array, se la sua lunghezza è uguale o superiore a 5, modifica il quinto elemento, altrimenti ritorna una stringa. Si possonop usare quanti return si vogliono, perché interrompono il codice, quindi ha senso farlo nel caso deglio if, così quando trova la condizione che viene soddisfatta esce dall'if.
RETURN È SIMILE A BREAK, INTERROMPE IL CODICE ANCHE IN CASO DI CONDIZIONI  */
//#endregion
//#region ESERCIZIO 15
/* function isPrime(num){
 if(num<=1){
    return "Non è un numero primo (deve essere > 1)"
 }else if (num%2 === 0 && num>2){
    return "Non è un numero primo (è pari)"
 }else if
}
console.log(isPrime(13)); */
//#endregion
//#region ESERCIZIO 16
function verifyUniquenesse(toVerify){
    for(i=0; i<toVerify.length; i++){
        for(j=i+1; j<toVerify.length; j++){
            if(toVerify[i] === toVerify[j]){
                return "Sono presenti duplicati"
            }
        } 
    }
    return "Non sono presenti duplicati"
}
// console.log(verifyUniquenesse(["banana","ciliege","pesca","banana"]));
/*L'esercizio prende un array e verifica se sono presenti dei duplicati, per farlo ho bisogno di un ciclo dentro un ciclo perché devo confrontare un elemento con il suo successivo, se il codice esce dal ciclo vuol dire che non trova duplicati e allora va messo un return lì che dice di non aver trovato duplicati per quel motivo  */
//#endregion
//#region ESERCIZIO 17
function controlData(arrayToControl){
    let arrayCounter=0;
    for(i=0; i<arrayToControl.length-1;i++){
        if(typeof arrayToControl[i] === typeof arrayToControl[i+1]){
            arrayCounter++
        }
    }
    return(arrayCounter === arrayToControl.length-1)? "Gli elementi sono dello stesso tipo" : "Gli elementi non sono dello stesso tipo" 
}
// console.log(controlData([1,2]));
/*L'esercizio prende un array e controlla se gli elementi sono dello stesso tipo. Viene sfruttata una variabile contatore che aumenta se il tipo dell'elemento e di quello successivo è uguale. Poi si controlla con un ternary operator--> la lunghezza è uguale? se sì, manda una stringa che dice che sono dello stesso tipo,altrimenti il contrario  */
//#endregion
//#region ESERCIZIO 18
function isValidVariable(varToControl){
    const referenceStart="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_";
    const referenceNext="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";
    //controllo se la stringa è vuota
    if(varToControl.length === 0){
        return "Il nome della variabile non è valido, stringa vuota"
    }
    //controllo se il primo carattere è valido
    let firstChar=varToControl[0];
    if(!referenceStart.includes(firstChar)){
        return "Il nome della variabile non è valido, inizia con un carattere non valido"
    }
    //controllo se i caratteri successivi sono validi
    for(let i=1; i<varToControl.length;i++){
        let nextChar= varToControl[i]
        if(!referenceNext.includes(nextChar)){
            return "Il nome della variabile non è valido, contiene un carattere non valido"
        }
    }
return "Il nome della variabile è valido"   
}
// console.log(isValidVariable(""));
//#region ESERCIZIO 19
function randomArray(){
    const random= Array();
    for(let i=0; i<7;i++){
        let randNum=Math.floor(Math.random()*10)
        //nel while va messa la condizione di uscita, e uso questo perché non so quante volte deve generare il numero
        while(random.includes(randNum)){
            randNum=Math.floor(Math.random()*10)
        }
        random.push(randNum)
    }
    return random
}
// console.log(randomArray());
//#endregion
//#region ESERCIZIO 20
function reverseCountries(Countries){
    let reverse= Array();
    for(let i=Countries.length-1; i>=0; i--){
        reverse.push(Countries[i])
    }
    return reverse
}
// console.log(reverseCountries(['Spain', 'United Kingdom', 'Ireland','Italy','Brasil']))
//#endregion
