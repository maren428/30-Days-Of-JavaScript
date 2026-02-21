import {countries} from '../esercizi_2/countries_data.js';
//#region ESERCIZIO 1
//Sort degli oggetti, valido per i numeri items.sort((a, b) => a.property - b.property);
/*Sort oggetti valido per le stringhe sort((a,b) => a.property.localeCompare(b.property)); */
const sortedByName= countries.sort((a,b) => a.name.localeCompare(b.name));
// console.log(sortedByName)
const sortedByCapital= countries.sort((a,b) => a.capital.localeCompare(b.capital));
// console.log(sortedByCapital);
const sortedByPopulation=  countries.sort((a,b) => a.population - b.population);
// console.log(sortedByPopulation);
//#endregion
//#region ESERCIZIO 2
function mostSpokenLanguages(countriesArray,spokenLength){
    const languages= countriesArray.map((country) => country.languages).flat();
    const countLanguage={};
    languages.forEach((country) => {
        if(countLanguage[country]){
            countLanguage[country]++
        }else{
            countLanguage[country]= 1
        }
    })
    const spokenCount= [];
    const spoken= Object.keys(countLanguage);
    spoken.forEach((speak) =>{
        spokenCount.push({"country": `${speak}` , "count": countLanguage[speak]})
    })
    const spokenCountEdit=  spokenCount
    //Sort oggetto ordine decrescente
    .sort((a,b) => b.count - a.count)
    .slice(0,spokenLength);
    return spokenCountEdit
}
// console.log(mostSpokenLanguages(countries,7));
//#endregion
//#region ESERCIZIO 3
function mostPopulatedCountries(countriesArray,populationLength){
    /*Uso la funzione che crea l'oggetto quà perché voglio creare gli oggetti dentro l'array e gli do come parametri name e population del mega array countries  */
    const Population= countriesArray.map((country) =>populationAndCountry(country.name,country.population));
    const populationEdit= Population.sort((a,b) => b.population - a.population).slice(0,populationLength)
    return populationEdit
}
// console.log(mostPopulatedCountries(countries,10))
/*Creo una funzione che crea un oggetto e lo ritorna, la funzione non sa cosa gli sto passando  */
function populationAndCountry(name,population){
    return {"country": name, "population": population }
}
//#endregion
//#region ESERCIZIO 4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics= {
    //proprietà degli oggetti che crea un riferimento ad un altro oggetto
    data: ages,
    count: function(){
        return this.data.length
    },
    sum : function(){
        return this.data
        .reduce((acc,curr) => acc+curr,0)
    },
    min : function(){
        return this.data.sort((a,b) => a-b)[0]
    },
    max : function(){
        return Math.max(...this.data)
    },
    range : function(){
        return this.max() - this.min()
    },
    mean : function(){
        return Math.ceil(this.sum() / this.count())
    },
    median : function(){
        return this.data.sort((a,b) => a - b)[Math.floor(this.data.length-1)/2]
    },
    mode: function(){
        const modes= {};
        this.data.forEach((age) =>{
            if(modes[age]){
                modes[age]++
            }else{
                modes[age] = 1
            }
        })
        const modesArray= [];
        const modesKeys= Object.keys(modes);
        modesKeys.forEach((mode) =>{
            modesArray.push({"mode": Number(mode), "count": modes[mode]})
        })
        modesArray.sort((a,b) => b.count-a.count)
        return modesArray[0]
    },
    var : function(){
        const length= this.count();
        const mean= this.sum()/ length;

        const arrayOfDifferences= Array();
        this.data.forEach((age) =>{
            arrayOfDifferences.push((age - mean)**2)
        })
        const variance= arrayOfDifferences
        .reduce((acc,curr) => acc+curr,0)/length 
        return Number(variance.toFixed(1))
    },
    std : function(){
        return Number(Math.sqrt(this.var()).toFixed(1))
    },
    freqDist : function(){
        const modes= {};
        this.data.forEach((age) =>{
            if(modes[age]){
                modes[age]++
            }else{
                modes[age] = 1
            }
        })
        const modesArray= [];
        const modesKeys= Object.keys(modes);
        modesKeys.forEach((mode) =>{
        modesArray.push([((modes[mode]/this.count())*100).toFixed(1),Number(mode)])
        })
        return modesArray.sort((a,b)=> b[0]-a[0])
    }
}

console.log('Count:', statistics.count()) 
console.log('Sum: ', statistics.sum()) 
console.log('Min: ', statistics.min()) 
console.log('Max: ', statistics.max()) 
console.log('Range: ', statistics.range()) 
console.log('Mean: ', statistics.mean()) 
console.log('Median: ',statistics.median()) 
console.log('Mode: ', statistics.mode()) 
console.log('Variance: ',statistics.var()) 
console.log('Standard Deviation: ', statistics.std())
console.log('Frequency Distribution: ',statistics.freqDist()) 
//#endregion

