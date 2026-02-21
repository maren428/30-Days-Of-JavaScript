//#region ESERCIZIO 1
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];
const skillsText = JSON.stringify(skills,undefined,4);
// console.log(skillsText);
/* Array → [] in JSON
Oggetti → {} in JSON */
//#endregion
//#region ESERCIZIO 2
let age = 250;
let ageText = JSON.stringify(age);
// console.log(ageText); 
//#endregion
//#region ESERCIZIO 3
let isMarried = true;
let isMarriedText = JSON.stringify(isMarried);
// console.log(isMarriedText);
//#endregion
/* È possibile trasformare in JSON qualsiasi tipo di dato, che sia numero,stringa, boolean, array, oggetto. Solo che in console non vengono mostrati gli apici per alcuni, si potrebbe usare typeof per verificare il tipo */
//#region ESERCIZIO 4
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
};
const studentText = JSON.stringify(student,undefined,4);
// console.log(studentText);
//#endregion