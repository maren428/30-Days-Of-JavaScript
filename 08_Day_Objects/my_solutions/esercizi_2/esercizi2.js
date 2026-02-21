const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
//#region ESERCIZIO 1
const arrayOfLengths= Array();
arrayOfLengths.push(users.Alex.skills.length,users.Asab.skills.length,users.Brook.skills.length,users.Daniel.skills.length,users.John.skills.length,users.Thomas.skills.length,users.Paul.skills.length)
//calcolo la lunghezza massima all'interno dell'array
let max=Math.max(...arrayOfLengths);
const keys= Object.keys(users);
let personWithMoreSkills= "";
for (let i=0; i< keys.length; i++){
    const userName= keys[i]
    let skillsCount= users[userName].skills.length
    if(skillsCount===max){
    //   console.log(userName)  
    }    
}
//#endregion
//#region ESERCIZIO 2
let loggedCount= 0;
for (let i=0; i<keys.length; i++){
    const person= keys[i]
    let logged= users[person].isLoggedIn
    if(logged){
        loggedCount++
    }
}
// console.log(`Gli utenti connessi sono ${loggedCount}`)
let morePoints=0;
for(let i=0; i<keys.length; i++){
    const person= keys[i]
    let points= users[person].points
    if(points >=50){
        morePoints ++
    }
}
// console.log(`Gli utenti con 50 o più punti sono ${morePoints}`)
//#endregion
//#region ESERCIZIO 3
const MERNdev= Array();
for(let i=0; i<keys.length;i++){
    const person= keys[i]
    let personSkills= users[person].skills;
    if(personSkills.includes("MongoDB") && personSkills.includes("Express") && personSkills.includes("React") && personSkills.includes("Node")){
        MERNdev.push(person)
    }
}
// console.log(`Gli sviluppatori di stack MERN sono ${MERNdev[0]} e ${MERNdev[1]}`)
//#endregion
//#region ESERCIZIO 4
const copyUsers= Object.assign({}, users )
copyUsers.Giovanna = {
    email: 'giovanna@giovanna.com',
    skills: ['HTML', 'CSS', 'JavaScript','Php'],
    age: 40,
    isLoggedIn: false,
    points: 40
}
// console.log(copyUsers)
// console.log(users)
//#endregion
//#region ESERCIZIO 5
// console.log(Object.keys(users))
// console.log(Object.values(users))
//#endregion
//#region ESERCIZIO 6
// console.log(Object.values(users))
//#endregion
//#region ESERCIZIO 7
const countries= {
    Italy: {
        capital: "Rome",
        population: 58.99, 
        languages: ["Italian"]
    },
    France: {
        capital: "Paris",
        population: 68.52,
        languages: ["French", "Breton", "Basque", "Catalan","Corsican","Occitan","Flemish" ]
    },
    Spain: {
        capital: "Madrid",
        population: 48.81,
        languages: ["Basque","Catalan", "Galician","Occitan"]
    }
}
const countriesKeys= Object.keys(countries);
console.log(`${countriesKeys[0]} \nCapital: ${countries[countriesKeys[0]].capital} \nPopulation: ${countries[countriesKeys[0]].population} millions \nLanguages: ${countries[countriesKeys[0]].languages}`)
//#endregion

