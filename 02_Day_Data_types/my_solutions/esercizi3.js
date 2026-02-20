let love="Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(love.match(/love/gi));

let because="You cannot end a sentence with because because because is a conjunction";
console.log(because.match(/because/g));

const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let rimuoviCose=sentence2.replace(/%|@|&|#|;|!|\$/g,"");
console.log(rimuoviCose);
//per rimuovere più cose insieme si possono usare le regex separando con il pipe ogni cosa.
//il $ è un simbolo speciale quindi per usarlo si mette \davanti

let guadagno="He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let index5000=guadagno.indexOf(5000);
console.log(index5000);
let guadagno1=guadagno.slice(index5000,13);
console.log(guadagno1);
let index10000=guadagno.indexOf(10000);
console.log(index10000);
let guadagno2=guadagno.slice(index10000,47);
console.log(guadagno2);
let index15000=guadagno.indexOf(15000);
console.log(index15000);
let guadagno3=guadagno.slice(index15000,72);
console.log(guadagno3);
let guadagno1_num=+guadagno1;
console.log(typeof guadagno1_num);
let guadagno2_num=+guadagno2;
let guadagno3_num=+guadagno3;
let guadagno_totale=guadagno1_num*12+guadagno2_num+guadagno3_num*12;
console.log(`Il guadagno annuale è ${guadagno_totale}€.`);

let salario=guadagno.match(/\d+/g);
console.log(salario);
salario_num=salario.map(Number);//passo la funzione Number a .map che può essere usato solo sugli array, come in questo caso
console.log(salario_num);
let [salario_mensile, bonus_annuale, corsi_mensili] = salario_num;
console.log(salario_mensile,bonus_annuale,corsi_mensili);
let guadagno_annuale=salario_mensile*12+bonus_annuale+corsi_mensili*12;
console.log(`Il guadagno annuale è ${guadagno_annuale}€.`);
//dentro le variabili posso fare delle espressioni,perché = conta come assegnazione
