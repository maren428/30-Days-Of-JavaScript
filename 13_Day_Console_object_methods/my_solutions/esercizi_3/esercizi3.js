// while, for, for of, forEach
const names = ['Asabeneh', 'Brook', 'David', 'John'];
console.time("Ciclo while");
let i=0;
while(i< names.length){
console.log(names[i])
i++
}
console.timeEnd("Ciclo while");

console.time("Ciclo for");
for(let i=0; i<names.length;i++){
console.log(names[i])
}
console.timeEnd("Ciclo for")

console.time("Ciclo for of");
for(const name of names){
    console.log(name)
}
console.timeEnd("Ciclo for of")

console.time("Ciclo forEach");
names.forEach((name) => {
    console.log(name)
})
console.timeEnd("Ciclo forEach");