//#region ESERCIZIO 1
function fullName(){
    let nome="Giovannina";
    let cognome="Pasqualina"
    console.log(nome,cognome);
}
//#endregion
// fullName();
//#region ESERCIZIO 2
function fullName(firstName,lastName){
    return firstName + lastName
}
// console.log(fullName("Paola","Babbani"));
//#endregion
//#region ESERCIZIO 3
function addNumbers(num1,num2){
    let num3=num1+num2;
    return num3;
}
// console.log(addNumbers(2,5));
//#endregion
//#region ESERCIZIO 4
function areaRettangolo(base,altezza){
    let area=base*altezza;
    return area;
}
// console.log(areaRettangolo(7,4));
//#endregionù
//#region ESERCIZIO 5
function perimetroRettangolo(base,altezza){
    let perimetro=2*(base+altezza);
    return perimetro;
}
// console.log(perimetroRettangolo(10,5));
//#endregion
//#region ESERCIZIO 6 
function volumePrismaRettangolare(base,altezza,profondità){
    let volume=base*altezza*profondità;
    return volume;
}
// console.log(volumePrismaRettangolare(6,5,4));
//#endregion
//#region ESERCIZIO 7
function areaOfCircle(r){
    let area=Math.PI*r*r;
    return area;
}
//console.log(areaOfCircle(20));

//#endregion
//#region ESERCIZIO 8
function circonferenza(r){
    let perimetro=2*Math.PI*r;
    return perimetro;
}
// console.log(circonferenza(10));
//#endregion
//#region ESERCIZIO 9
function densita(massa,volume){
    let dens=massa/volume;
    return dens;
}
// console.log(densita(1570,100));
//#endregion
//#region ESERCIZIO 10
function velocita(spazio,tempo){
    let vel=spazio/tempo;
    return vel; 
}
// console.log(velocita(100,20));
//#endregion
//#region ESERCIZIO 11
function peso(M,G){
    let P=M*G;
    return P;
}
// console.log(peso(500,9.81));
//#endregion
//#region ESERCIZIO 12
function convertCelsiusToFahrenheit(oC){
    let oF=(oC*9/5)+32;
    return oF;
}
// console.log(convertCelsiusToFahrenheit(30));
//#endregion
//#region ESERCIZIO 13
function indiceMassaCorporea(peso,altezza){
    let IMC=peso/(altezza**2);
    return IMC;
}
function controllaMassaCorporea(IMC){
    if(IMC<18.5){
        console.log("Sottopeso");
    }else if(IMC>18.5 && IMC<24.9 ){
        console.log("Peso normale");
    }else if(IMC>25 && IMC<29.9 ) {
        console.log("Sovrappeso");
    }else if(IMC>=30){
        console.log("Obesità");
    }
}
let IMC=indiceMassaCorporea(55,1.70);
//controllaMassaCorporea(IMC);
//#endregion
//#region ESERCIZIO 14
// let input=prompt("Inserire il mese", "Marzo").toLowerCase();
//console.log(new Date(`${input} 1,2025`).getMonth()+1)

function checkSeason(mese){
const mesi=["dicembre","gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre"];
let meseNumero=mesi.indexOf(mese)+1;
if(meseNumero>=1 && meseNumero<=3 ){
    alert("Siamo in Inverno");
}else if(meseNumero>=4 && meseNumero<=6){
    alert("Siamo in Primavera");
}else if(meseNumero>=7 && meseNumero<=9){
    alert("Siamo in Estate");
}else if(meseNumero>=10 && meseNumero<=12){
    alert("Siamo in Autunno");
}
}

// checkSeason(input);
//#endregion
//#region ESERCIZIO 15
function findMax(a,b,c){
    if(a>b && a>c){
        return a;
        
    }else if (b>a && b>c){
         return b;
    }else if(c>a && c>b){
         return c;
    }else{
         return "Sono uguali";
    }
}
// console.log(findMax(10,10,10));
//#endregion
