import { countries } from "./countries_data.js";
//#region ESERCIZIO 1
countries.forEach(({name,capital,population,languages}) =>{
    // console.log(`${name}: -Capitale:${capital} -Popolazione:${population} -Lingue:${languages.join(", ")}`)
});
//#endregion
//#region ESERCIZIO 2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
/* const [name,skills,scores] = student;
console.log(name,skills,scores[2],scores[3]) */
//È possibile destrutturare dentro una destrutturazione
const [name,skills, [, , jsScore,reactScore]]= student;
// console.log(name,skills,jsScore,reactScore);
//#endregion
//#region ESERCIZIO 3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];
function convertArrayToObject(people){
    let convertedArray= Array();
    people.forEach((person)=>{
        let [name,skills,scores]=person;
        convertedArray.push({"name": name, "skills": skills, "scores": scores});
    })
   /*  object property shorthand => Javascript capisce in automatico che le chaivi si chiamano così. Versione abbreviata
    convertedArray.push({ name, skills, scores }); */
    return convertedArray
}
// console.log(convertArrayToObject(students));
//#endregion
//#region ESERCIZIO 4

//#endregion
const studentData = {
    name: 'David',
    age: 25,
    skills: {
    frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
    ],
    backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
        { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
    }
};
/* Programmazione immutabile, copio la struttura creando delle ramificazioni nuove => “Tengo tutta la casa,
ma rifaccio il bagno,
e dentro il bagno rifaccio i lavandini.” */
/* Dove ho bisogno di creare delle modifiche, creo una copia dell'elemento da modificare =>
oggetto → usa { ... }
array → usa [ ... ]
E li “annidi” seguendo la struttura dei dati. */

const newStudent = {
    //Copio tutte le proprietà
    ...studentData,
    //Creo un nuovo oggetto skills con le stesse proprietà 
    skills: {
        ...studentData.skills,
        //Copio gli array creandone di nuovi
        frontEnd: [...studentData.skills.frontEnd],
        backEnd: [...studentData.skills.backEnd],
        dataBase: [...studentData.skills.dataBase],
        dataScience: [...studentData.skills.dataScience]
    }
}
/* Dopo aver copiato, aggiungo facendo il push() degli elementi nuovi, notare che l'originale rimane com'è */
newStudent.skills.frontEnd.push({skill: "Bootstrap", level: 8});
newStudent.skills.backEnd.push({skill: "Express", level:9});
newStudent.skills.dataBase.push({skill:"SQL", level: 8});
newStudent.skills.dataScience.push("SQL");
console.log(newStudent.skills.frontEnd);
console.log("-------");
console.log(studentData.skills.frontEnd);


