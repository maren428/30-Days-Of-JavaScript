//#region ESERCIZIO 1
function solveLinEquation (a,b,c,x,y){
let equazione=a*x+b*y+c;
return equazione;
}
// console.log(solveLinEquation(2,1,4,1,-5));
//#endregion
//#region ESERCIZIO 2
//a*x**2+b*x+c=0;
function solveQuadEquation(a=0,b=0,c=0){
let delta=b**2-(4*a*c);
let x1=((-1*b)+Math.sqrt(delta))/(2*a);
let x2=((-1*b)-Math.sqrt(delta))/(2*a);
return [x1,x2];
}
// console.log(solveQuadEquation(1,7,12));
//#endregion
//#region ESERCIZIO 3
function printArray(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}
// printArray([10,25,"Giovanna",true,89]);
//#endregion
//#region ESERCIZIO 4
//le variabili si definiscono fuori se le devo usare come parametro
function showDateTime(){
let data=new Date();
return `${(data.getDate()<9)?"0"+data.getDate():data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
}
// console.log(showDateTime());
//#endregion
//#region ESERCIZIO 5
function swapValues (val1,val2) {
    let temp=val1;
    val1=val2;
    val2=temp;
    /*per scambiare le variabili creo una variabile temporanea in cui salvo lo stato della prima variabile. Poi alla prima variabile do il valore della seconda, e così la sovrascrivo, motivo per il quale mi serve una variabile temporanea. Poi alla seconda assegno il valore della temporanea. */
    return [val1,val2];
    /* In JavaScript, quando passi un numero a una funzione, passi SOLO una copia del valore.  */
}

let x=3;
let y=4;
//[x,y]= swapValue(x,y)
// console.log(...swapValues(x,y));
//#endregion
//#region ESERCIZIO 6 
function reverseArray(arr){
    let reverseArr=[];
    for(let i=arr.length-1; i>=0; i--){
        reverseArr.push(arr[i])
    }
    return reverseArr
}
// console.log(reverseArray([1,2,3,4,5]));
// console.log(reverseArray(['A','B','C']));
//#endregion
//#region ESERCIZIO 7
function upperCaseArray(arr){
    let upperCase=new Array();
    for(let i=0; i<arr.length; i++){
        upperCase.push(arr[i].toUpperCase());
    }
    return upperCase
}
// console.log(upperCaseArray(['banana','melone','albicocca']));
/* l'esercizio crea una funzione che prende un array come parametro. La funzione cicla l'array e ne crea uno vuoto in cui viene pushato ogni valore dopo che è stato reso maiuscolo con il metodo toUppercase()   */
//#endregion
//#region ESERCIZIO 8
function addItem(...item){
    return item;
}
let miscArray=['banana','mela','carciofi','f'];
// console.log(addItem(miscArray));
//per fare una funzione che crea un array dandogli parametri infiniti, basta usare ... davanti al nome del parametro e ritornarlo, gli dico: prendi TUTTI i parametri e mettili in un array
//#endregion
//#region ESERCIZIO 9
function removeItem(index){
    miscArray.splice(index,1);
    return miscArray
}
// console.log(removeItem(miscArray.indexOf('carciofi')));
/* prendo un indice come parametro e un array. Faccio array.splice(indice, elementi da rimuovere) e ritorno l'array.
Nel console.log gli do l'indice che voglio io */
//#endregion
//#region ESERCIZIO 10
function sumOfNumbers(num){
    let sum=0;
    for(let i=1; i<=num; i++){
        sum+=i;
    }
    return sum;
}
// console.log(sumOfNumbers(10));
/*L'esercizio vuole che io sommi tutti i numeri di un intervallo e ho un numero come parametro in entrata.
Devo sommare a partire da 1 fino al numero scelto da me.
Creo una funzione somma numeri e siccome devo ritornare la somma, avrò bisogno di una variabile somma che inizialmente è 0, poi ad ogni passaggio del ciclo gli si aggiunge la variabile contatore, fino ad arrivare a num, il mio parametro. SE DEVO RITORNARE LA SOMMA, MI CREO UNA VARIABILE SOMMA, CHE PARTE DA 0!   
*/
//#endregion
//#region ESERCIZIO 11
function sumOfOdds(num){
    let sumOdds=0;
        for(let i=1; i<= num; i++){
            if(i%2 === 1) {
                sumOdds+=i
            }
        }    
    return sumOdds
}
// console.log(sumOfOdds(11));
//#endregion
//#region ESERCIZIO 12
function sumOfEven(num){
    let sumEven=0;
        for(let i=1; i<= num; i++){
            if(i%2 === 0) {
                sumEven+=i
            }
        }    
    return sumEven
}
// console.log(sumOfEven(12));
//#endregion
//#region ESERCIZIO 13
function EvensAndOdds(numInt){
    let Evens=0;
    let Odds=0;
    for(i=0; i<=numInt; i++){
        if(i%2 === 0){
            Evens++
        }else{
        Odds++
    }
    }
    return [Evens, Odds]
}
let totEvOdd= EvensAndOdds(100);
// console.log(`I numeri dispari sono ${totEvOdd[1]}`);
// console.log(`I numeri pari sono ${totEvOdd[0]}`);
/* L'esercizio prende un intervallo di numeri, in cui il numero deciso da me è il massimo. Creo due variabili pari e dispari che mi fanno da contatore. Faccio il ciclo con un if dentro che se il numero è pari fa aumentare la variabile pari o viceversa fa aumentare l'altra. Ritorno le due variabili come array, salvo il return in una variabile e siccome è un array le due variabile sono indice 0 e 1 e posso richiamarle così
*/
//#endregion
//#region ESERCIZIO 14
function sum(...sumNums){
    let sumArguments=0;
    for(i=0; i<sumNums.length;i++){
        //console.log(sumNums[i])
        sumArguments+=sumNums[i]
    }
    return sumArguments
}
// console.log(sum(2,4,6));
/*Come prima per accettare un numero indefinito di parametri, creo un array con ..., poi creo una variabile somma che parte da 0. ciclo l'array e siccome devo sommare tra di loro solo i parametri, la variabile somma aumenta di ogni elemento. 
 */
//#endregion
//#region ESERCIZIO 17
function randomHexaNumberGenerator(){
    let stringaEsa="0123456789abcdef";
    let id="#";
    for(let j=0; j<6; j++){
    let rng=Math.floor(Math.random()*stringaEsa.length);
    let codeEsa=stringaEsa[rng];
    id+=codeEsa;
    }
    return id
}
// console.log(randomHexaNumberGenerator());
/*Ho una stringa composta dalle "cifre" esadecimali, creo un'altra stringa che inizia per cancelletto e a cui sommo un elemento che corrisponde ad un indice casuale della stringa fino ad arrivare a sei, la lunghezza che voglio. Il numero random lo arrotondo con math.floor, e lo genero con math.random(che genera numeri tra 0 e 0,99) che moltiplico per la lunghezza della stringa  */
//#endregion
//#region ESERCIZIO 18
function userIdGenerator(){
    let alfaNum="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let id="";
for(let a=0; a<7; a++){
    //genero un indice a caso della stringa
    let rng=Math.floor(Math.random()*alfaNum.length)
    let lettera=alfaNum[rng];
    id +=lettera;   
}
return id
}
//console.log(userIdGenerator());
module.exports ={userIdGenerator}
//#endregion