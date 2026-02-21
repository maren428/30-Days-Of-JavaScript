import { countries } from "./countries_data.js";
//#region ESERCIZIO 1
const countLanguages= new Set();
countries.forEach((country) => countLanguages.add(...country.languages));
// const size= countLanguages.size;
// console.log(`L'array contiene ${size} lingue.`);
//console.log(countLanguages);
//#endregion
//#region ESERCIZIO 2
function mostSpokenLanguages(countries,num){
    const counts= Array();
    let languages=[]
    countries.forEach((country)=>{
        languages.push(...country.languages)
    })

 
    countLanguages.forEach((l) => {
     const filterLang=languages.filter((lng)=> lng===l)
            // console.log(filterLang)
            counts.push({ lang : l, count: filterLang.length})
    })
   const count=counts.sort((a,b)=> b.count-a.count).slice(0,num)

   return count
}
console.log(mostSpokenLanguages(countries,10))

//#endregion

