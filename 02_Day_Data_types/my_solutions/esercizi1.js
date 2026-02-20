console.log("ciao, come stai?\nTutto bene?")
console.log("C:\\users\\giacomo");

let sfida="30 Days of Javascript";
console.log(sfida);
console.log(sfida.length);
console.log(sfida.toLowerCase());
console.log(sfida.toUpperCase());
console.log(sfida.substring(3,7));
console.log(sfida.slice(3,7));
console.log(sfida.slice(3));
console.log(sfida.includes('Script')); 
//includes() è case sensitive

let sfidaLista= sfida.split("");//divide carattere per carattere, perché il separatore è una stringa vuota
console.log(sfidaLista);
console.log(sfida.split(" "));//la stringa viene divisa ad ogni spazio
console.log(sfida.split(","));//la stringa viene divisa ad ogni virgola,che quà non ci sono

let aziende= "Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon";

console.log(aziende.split(","));
console.log(sfida.replace("Javascript","Python"));//.replace è case sensitive
console.log(sfida.charAt(15));
let indexJ=sfida.indexOf("J");
console.log(sfida.charCodeAt(indexJ));
console.log(sfida.indexOf("a"));
console.log(sfida.lastIndexOf("a"));

let because="You cannot end a sentence with because because because is a conjunction";
console.log(because.indexOf("because"));
console.log(because.lastIndexOf("because"));
console.log(because.search("because"));

let sfidaTrim=" 30 Days of Javascript ";
console.log(sfidaTrim.trim());
console.log(sfida.startsWith("30"));
console.log(sfida.endsWith("t"));
console.log(sfida.match(/a/gi));

let frase1="30 Days of";
console.log(frase1.concat(" Javascript"));
console.log(sfida.repeat(2));//repeat vuole tra parentesi il numero di volte che vuoi ripetere
