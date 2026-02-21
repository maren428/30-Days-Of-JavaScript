const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\b\w{4}\b/g  //  exactly four character words
const matches = txt.match(pattern)
// console.log(matches)
/* \b...\b si chiama word boundary, si mette a inizio e fine di una stringa, per indicare la ricerca di una parola completa. In questo modo vengono escluse le sottostringhe delle stringhe. Es. se io cerco cat mi prende solo quello e non anche categoria */

let pattern2 = /^[A-Z][a-z]{3,12}$/;
let name = 'Asabeneh';
let result = pattern2.test(name)

// console.log(result) // true
/*  La stringa deve iniziare con una maiuscola, seguita da 3-12 minuscole, e nient'altro.
Questo pattern è tipico per validare nomi propri in formato "Prima lettera maiuscola, resto minuscolo" con lunghezza controllata. */
//#region ESERCIZIO 1
let exercise_1= 'Guadagna 4000 euro di stipendio al mese, 10000 euro di bonus annuale, 5500 euro di corsi online al mese.';
let exercise_pattern= /\d+/g;
let matches_1= exercise_1.match(exercise_pattern);
[month_pay,year_bonus,online_course]= matches_1;
/* console.log(`Il reddito annuale è ${Number(month_pay)*12+Number(year_bonus)+Number(online_course)*12}`); */
//#endregion
//#region ESERCIZIO 2
// console.log(Math.abs(-4-8))
let exercise_2= "The position of some particles on the horizontal x-axis -1,2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";
/* Per prendere i numeri negativi inserisco il -opzionale con -?, così prendo i numeri ad una cifra positivi o negativi */
let exercise_2_pattern= /-?\d/g;
//Match crea un array di stringhe con la roba che trova
let points=exercise_2.match(exercise_2_pattern);
let num_points= Array();
//Ciclo l'array di stringhe e trasformo gli elementi in numeri 
for(let i=0; i<points.length;i++){
    num_points.push(Number(points[i]))
}
//Faccio una copia dell'array e ordino i numeri in ordine crescente
let sorted_points= [...num_points].sort((a,b) => a - b);
//Destrutturo creando variabili solo per il primo ed ultimo elemento 
[first_point,,,,,,,last_point]= sorted_points;
/* Calcolo la distanza tra i due punti con il valore assoluto: formula semplificata della distanza tra due punti, perché y=0 in questo caso */
let distance= Math.abs(first_point-last_point);
// console.log(distance);
//#endregion
//#region ESERCIZIO 3
function is_valid_variable(string){
    /* Devo controllare che il nome sia valido dall' inizio ^ alla fine $  (* per permettere nomi con 0 o più caratteri, quindi permette di usare nomi con una sola lettera anche) */
    /* Per concatenare le condizioni,vanno scritte attaccate dentro la stessa quadra, la prima indica l'inizio con ^,la seconda quadra indica il resto delle lettere o la continuazione  */
    let pattern= /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    let isValid= pattern.test(string);
    return isValid
}
// console.log(is_valid_variable("first-name"));
//#endregion
