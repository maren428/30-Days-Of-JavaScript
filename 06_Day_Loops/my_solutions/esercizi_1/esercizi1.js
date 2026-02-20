// #region ESERCIZIO 1 e 3
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
//si mette ; perché sono 3 istruzioni separate

/* for(let i=0;i<=countries.length-1;i++){
    console.log(countries[i])
};

let j=0;
while(j<=countries.length-1){
console.log(countries[j])
j++
}

let k=0;
do {
   console.log(countries[k])
   k++
}while (k<=countries.length-1) */
//#endregion
// #region ESERCIZIO 2
for(let n=10;n>=0;n--){
    // console.log(countries[n])
}

let l=10;
while (l>=0) {
    // console.log(countries[l])
    l--
}

let m=10;
do {
    // console.log(countries[m])
    m--
} while (m>=0)
//#endregion    
//#region ESERCIZIO 4
let cancelletto="#";
for(let i=1;i<=7;i++){
    let c=1
   while(c<i){
    cancelletto+="#"
    c++
   }
//    console.log(cancelletto)
   cancelletto="#"
}
//#endregion
//#region ESERCIZIO 5
for(let o=0; o<=10;o++){
    let moltiplica=o*o;
    // console.log(`${o} x ${o} = ${moltiplica}`);
}
//#endregion
//#region ESERCIZIO 6
for(let p=0;p<=10;p++){
    // console.log(`${p}   ${p**2}   ${p**3}`)
}
//#endregion
//#region ESERCIZIO 7
for(let q=0; q<=100; q++){
    if(q%2===0){
        // console.log(q)
    }
//possono esistere if senza else, se si ha bisogno di una sola condizione 
}
//#endregion
//#region ESERCIZIO 8
for(let r=0; r<=100; r++){
    if(r%2===1){
        // console.log(r)
    }
}
//#endregion
//#region ESERCIZIO 9
let numeri=Array();
for(let s=0; s<=100; s++){
    if(s<2) continue;
    let primo= true;
    for(let t=2; t<s; t++){
        
    if(s%t===0){
        primo=false;
        break;
    }
    }
    if(primo){
        numeri.push(s);
    }
}
// console.log(numeri);
//#endregion
//#region ESERCIZIO 10
//per poter usare la variabile del ciclo devo creare un'altra variabile fuori a cui sommo il contatore
let somma=0;
for(let u=0; u<=100; u++){
    somma +=u;
}
// console.log(somma);
//#endregion
//#region ESERCIZIO 11
let sommaPari=0;
let sommaDispari=0;
for(let v=0; v<=100; v++){
    if(v%2===0){
        sommaPari+=v
    }
}
for(let w=0; w<=100; w++){
    if(w%2===1)
    sommaDispari+=w    
}
// console.log(`La somma dei numeri pari è ${sommaPari} e quella dei numeri dispari è ${sommaDispari}`);
//#endregion
//#region ESERCIZIO 12
let Pari=0;
let Dispari=0;
for(let v=0; v<=100; v++){
    if(v%2===0){
        Pari+=v
    }
}
for(let w=0; w<=100; w++){
    if(w%2===1)
    Dispari+=w    
} 
let numeriArray=[Pari, Dispari];
// console.log(numeriArray);
//#endregion
//#region ESERCIZIO 13
let numeriCasuali=Array();
for(let x=0; x<5; x++){
    let rand=Math.floor(Math.random()*11)
    numeriCasuali.push(rand);
}
// console.log(numeriCasuali);
//#endregion
//#region ESERCIZIO 14
let Casuali=Array();
for(let x=0; x<5; x++){
    let rand=Math.floor(Math.random()*11)
    //console.log(rand)
    if(Casuali.includes(rand)){
    rand=Math.floor(Math.random()*11);
    Casuali.push(rand);  

    }else{
      Casuali.push(rand)

    }
  //console.log(Casuali)
}
// console.log(Casuali,"c");
//#endregion
//#region ESERCIZIO 15
let alfaNum="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let id="";
for(let a=0; a<6; a++){
    //genero un indice a caso della stringa
    let rng=Math.floor(Math.random()*alfaNum.length)
    let lettera=alfaNum[rng];
    id +=lettera;
    
}
// console.log(id);
//#endregion