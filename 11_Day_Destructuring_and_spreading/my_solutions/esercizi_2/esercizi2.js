const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
];
//#region ESERCIZIO 1
//Versione esplicita
/* users.forEach((user)=>{
    let {name, scores, skills, age}=user
    console.log(name,scores,skills,age)
}); */
//Versione compatta e moderna
users.forEach(({name,scores,skills,age})=>{
    // console.log(name,scores,skills,age)
});
//#endregion
//#region ESERCIZIO 2
users.forEach(({name,skills})=>{
    if(skills.length < 2){
        // console.log(name)
    }
});
//#endregion
