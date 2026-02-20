let myAge=25;
let yourAge=30;
if (myAge>yourAge){
    let ageGap= myAge-yourAge;
    console.log(`Io sono ${ageGap} anni più vecchio di te`);
}else if(myAge===yourAge){
    console.log("Abbiamo la stessa età");
}else{
    let ageDifference= yourAge-myAge;
    console.log(`Sei ${ageDifference} anni più giovane di me`);
}