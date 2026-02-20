let grade=75;
switch (true){
    case grade>=80 && grade<=100:
    console.log("Il tuo voto è A");
    break;
    case grade>=70 && grade<=89:
    console.log("Il tuo voto è B");
    break;
    case grade>=60 && grade<=69:
    console.log("Il tuo voto è C");
    break;
    case grade>=50 && grade<=59:
    console.log("Il tuo voto è D");
    break;
    case grade>=0 && grade<=49:
    console.log("Il tuo voto è F");
    break;
    default:
    console.log("Non hai inserito un voto");             
}