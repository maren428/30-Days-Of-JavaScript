let johnHolmes="The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(johnHolmes);

let madreTeresa="Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(madreTeresa);


console.log(typeof"10"=== typeof 10);
let num=10;
let numS="10";
let num2=+numS;
console.log(num2);
console.log(typeof num === typeof num2);

let stringFloat="9.8";
numFloat=parseFloat(stringFloat);
console.log(numFloat);
console.log(Math.round(numFloat));//Math.round arrotonda i numeri come faremmo noi in matematica

let linguaggio1="Python";
let linguaggio2="Jargon";
console.log(linguaggio1.includes("on"));
console.log(linguaggio2.includes("on"));

let sentence="I hope this course is not full of jargon";
console.log(sentence.includes("jargon"));

let randomNum= Math.random();
let rand100= Math.floor(randomNum * 101);
console.log(rand100);

let rand50_100= Math.floor(Math.random() * (100-50+1)) + 50;
console.log(rand50_100);//numeri random tra 50 e 100 compresi

let rand255= Math.floor(Math.random() * 256);
console.log(rand255);//numeri random tra 0 e 255 compresi

let string="Javascript";
console.log(string.length-1);//length-1 corrisponde all'ultimo indice
let randChar=Math.floor(Math.random() *10);
console.log(randChar);

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");

let because="You cannot end a sentence with because because because is a conjunction";
let firstIndex=because.indexOf("because");
let secondIndex=because.lastIndexOf("e");
console.log((secondIndex));
console.log(because.slice(firstIndex,54));


