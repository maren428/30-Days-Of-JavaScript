let firstName= "Silvia";
let lastName= "Giovannini";
let country= "Francia";
let city= "Parigi";
let age= 35;
let isMarried= false;
let year= 2025;
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);

console.log("10" === 10);
console.log(parseInt("9.8")===10);

console.log(5>3);
console.log(7<=9);
console.log(10 !== "10");

console.log(5 === "5");
console.log(7 !== 7);
console.log(2 >= 3 );

/* 4 > 3 true
4 >= 3 true
4 < 3 false
4 <= 3 false
4 == 4 true
4 === 4 true
4 != 4 false
4 !== 4 false
4 != '4' false
4 == '4' false --
4 === '4' false */ 

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

let word1="Python";
let word2="Jargon";
console.log(word1.length);
console.log(word2.length);
console.log(word1.length !== word2.length);

/* 4 > 3 && 10 < 12 true
4 > 3 && 10 > 12 false
4 > 3 || 10 < 12 true
4 > 3 || 10 > 12 true
!(4 > 3) false
!(4 < 3) true
!(false) true
!(4 > 3 && 10 < 12) false
!(4 > 3 && 10 > 12) true
!(4 === '4')  true */ 

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

let word3="dragon";
let word4="python";
console.log(!word3.includes("on")) && console.log(!word4.includes("on"));

let currentYear= new Date();
console.log(currentYear.getFullYear());

let currentMonth= new Date();
console.log(currentMonth.getMonth());

let currentDate= new Date();
console.log(currentDate.getDate());

let currentDay= new Date();
console.log(currentDay.getDay());

let currentHours = new Date();
console.log(currentHours.getHours());

let currentMinutes = new Date();
console.log(currentMinutes.getMinutes());

let millisecondsFromEpoch= new Date();
console.log(millisecondsFromEpoch.getTime());

