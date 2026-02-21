//#region ESERCIZIO 1
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const studentText = JSON.stringify(student,["firstName","lastName","skills"],4);
// console.log(studentText);
//#endregion
//#region ESERCIZIO 2
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
const txtObj = JSON.parse(txt);
// console.log(txtObj);
//#endregion
//#region ESERCIZIO 3
const usersSkillCount = [];
/* Siccome non è possibile usare i metodi degli array con gli oggetti, mi creo degli array a coppie chiave,valore con Object.entries. Otterrò degli array con chiave=> es."Asab", valore=>{...} */
Object.entries(txtObj).forEach(([name, user]) => {
usersSkillCount.push([name,user.skills.length])});
//Si può fare direttamente il sort in un array di array
//Ordino in base al secondo elemento in ordine decrescente
usersSkillCount.sort((a,b)=>b[1]-a[1]);
let userWithMoreSkills = usersSkillCount[0];
console.log(`The user with more skills is ${userWithMoreSkills[0]} with ${userWithMoreSkills[1]} skills.`);
//#endregion
