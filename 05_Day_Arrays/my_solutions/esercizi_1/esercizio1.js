console.log("1-----")
const list=Array();
console.log(list);

console.log("2-----")
let nomi=["Gina","Pina","Crocchio","Roger","Anton","Peppe"];
console.log(nomi);

console.log("3-----")
console.log(nomi.length);

console.log("4-----")
console.log(nomi[0]);
console.log(nomi[2]);
console.log(nomi[5]);

console.log("5-----")
const mixedDataTypes=["Gino",24,true,"pallone",754,false];
console.log(mixedDataTypes.length);

console.log("6-7----")
const itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
console.log(itCompanies);

console.log("8----")
console.log(itCompanies.length);

console.log("9----")
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

console.log("10----")
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

console.log("11----")
itCompanies[0]="FACEBOOK";
itCompanies[1]="GOOGLE";
itCompanies[2]="MICROSOFT";
itCompanies[3]="APPLE";
itCompanies[4]="IBM";
itCompanies[5]="ORACLE";
itCompanies[6]="AMAZON";
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

console.log("12----")
itCompanies[0]="Facebook";
itCompanies[1]="Google";
itCompanies[2]="Microsoft";
itCompanies[3]="Apple";
itCompanies[4]="IBM";
itCompanies[5]="Oracle";
itCompanies[6]="Amazon";
let frase=`${itCompanies.slice(0,6).toString()} and ${itCompanies[6]} are big IT companies`;
console.log(frase);

console.log("13----")
let company="Gog"
let index=itCompanies.indexOf(company);
if(index===-1){
    console.log(`${company} non è stata trovata`)
}else{
    console.log(`${company}`)
};

//per controllare se qualcosa esiste si usa includes() di solito
console.log("13----")
let company2="Oracle"
if(itCompanies.includes(company2)){
    console.log(`${company2}`)
}else{
    console.log(`${company2} non è stata trovata`)
};

console.log("15----")
console.log(itCompanies.sort());

console.log("16----")
console.log(itCompanies.reverse());

console.log("17----")
console.log(itCompanies.slice(0,3));

console.log("18----")
console.log(itCompanies.slice(4,7));

console.log("19----")
console.log(itCompanies.slice(2,5));

console.log("20----")
itCompanies.shift();
console.log(itCompanies);

console.log("21----")
console.log(itCompanies.splice(2,2));//tolgo gli elementi centrali splice(indice iniziale,numero elementi da rimuovere)
console.log(itCompanies);

console.log("22----")
itCompanies.pop();
console.log(itCompanies);

console.log("23----")
itCompanies.splice(0,itCompanies.length);
console.log(itCompanies);
