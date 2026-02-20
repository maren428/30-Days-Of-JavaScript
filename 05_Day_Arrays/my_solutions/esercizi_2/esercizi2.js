console.log("2-----")
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let editText=text.replace(/[.,]/g,"");
console.log(editText);
const words=editText.split(" ");
console.log(words);
console.log(words.length);

console.log("3-----")
const shoppingCart=['Milk','Coffee','Tea','Honey'];
console.log(shoppingCart)
let item1='Meat';
if(shoppingCart.includes(item1)){
    console.log(`${item1} è già sulla lista`)
}else{
    shoppingCart.unshift(item1)    
};
console.log(shoppingCart);

let item2='Sugar';
if(shoppingCart.includes(item2)){
    console.log(`${item2} è già sulla lista`)
}else{
    shoppingCart.push(item2);
};
console.log(shoppingCart);

shoppingCart.splice(4,1);//splice può essere usato anche per rimuovere solo un elemento
console.log(shoppingCart);

shoppingCart[3]="Green Tea";
console.log(shoppingCart);

console.log("4-----")
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
country1='Ethiopia'
if(countries.includes(country1)){
    console.log(country1.toUpperCase())
}else{
    countries.unshift('Ethiopia')
}
console.log(countries);

console.log("5-----")
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
tech='Sass';
if(webTechs.includes(tech)){
    console.log(`${tech} è un compilatore CSS`)
}else{
    webTechs.push('Sass')
}
console.log(webTechs);

console.log("6-----")
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack= frontEnd.concat(backEnd);
console.log(fullStack);