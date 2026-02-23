//#region ESERCIZIO 1
/* Leggere le API dei paesi utilizzando fetch e stampare il nome del paese, la capitale, le lingue, la popolazione e l'area. */
/* Per capire come fare conviene guardare la struttura dei dati, in questo caso è un array di oggetti. Stampo il primo oggetto e da lì cerco di capire come prendere i dati. Poi siccome è un array di oggetti, lo ciclo e stampo le informazioni per ogni paese dopo averle salvate in delle variabili  */
const countriesAPI = 'https://restcountries.com/v3.1/independent?status=true';
async function getCountries(){
    try {
        const response = await fetch(countriesAPI);
        const countries = await response.json();
        countries.forEach((country)=>{
            const countryName= country.name.official;
            const countryCapital= country.capital[0];
            const countryLanguages = Object.values(country.languages).join(", ");
            const countryPopulation = country.population;
            const countryArea = country.area; 
            console.log(`Nome: ${countryName} \nCapitale: ${countryCapital}\nLingue:${countryLanguages}\nPopolazione:${countryPopulation}\nArea:${countryArea}`);
            console.log("----------------");
        })
    } catch (error) {
        console.error(error)
    }
}
getCountries()
//nome => countries.name.official
// capitale => countries.capital[0]
// lingue => Object.values(countries.languages).join(", ")
// popolazione => countries.population
// area => countries.area
//#endregion
