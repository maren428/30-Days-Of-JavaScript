//#region ESERCIZIO 1
const catsAPI = 'https://api.thecatapi.com/v1/breeds';
async function getMediumWeight(){
   try {
   const response = await fetch(catsAPI);
   const cats = await response.json();
   let insiemePesiMedi = Array();
   cats.forEach((cat)=>{
   const rangePeso= cat.weight.metric.split(" - ");
   const pesoMinimo = Number(rangePeso[0]);
   const pesoMassimo = Number(rangePeso[1]);
   const pesoMedioSingolo = (pesoMinimo + pesoMassimo)/2;
   insiemePesiMedi.push(pesoMedioSingolo); 
   })
   let sommaPesoMedio = 0;
   //Avrei potuto usare reduce per sommare tutto
   for(let i=0; i<insiemePesiMedi.length;i++){
      sommaPesoMedio += insiemePesiMedi[i]
   }
   const pesoMedioTotale = parseFloat((sommaPesoMedio/insiemePesiMedi.length).toFixed(2));
   // console.log(`Il peso medio dei gatti è : ${pesoMedioTotale} Kg`) 
   } catch (error) {
    console.error("L'errore è:",error.message)  
   }
}
getMediumWeight()
// Peso in kg => cats.weight.metric
//#endregion
//#region ESERCIZIO 2
const countriesAPI = 'https://restcountries.com/v3.1/independent?status=true';
async function tenBiggerCountries(){
    try {
        const response = await fetch(countriesAPI);
        const countries = await response.json();
        const countriesArea = [];
        countries.forEach((country)=>{
           countriesArea.push([country.name.common,country.area])
        })
      const countriesAreaInOrder = [...countriesArea].sort((a,b)=>b[1]-a[1])
      // console.log("I 10 Paesi più grandi sono: " + "\n")
      countriesAreaInOrder.slice(0,10).forEach((country)=>{
         // console.log(`${country[0]} con ${country[1]} Km²`)
      })       
    } catch (error) {
      console.error("L'errore è: ",error.message);
    }
}
tenBiggerCountries()
//#endregion
//#region ESERCIZIO 3
async function numberOfLanguages(){
    try {
        const response = await fetch(countriesAPI);
        const countries = await response.json();
        const listOfLangs = [];
        countries.forEach((country)=>{
        const countryLanguage = Object.values(country.languages);
        listOfLangs.push(countryLanguage);  
        })
        const officialLangs = [...listOfLangs].flat().sort();
        const setOfOfficialLangs = new Set(officialLangs);
        console.log(`Nel mondo vengono parlate ${setOfOfficialLangs.size} Lingue Ufficiali`)

      
    } catch (error) {
        console.error(error)
    }
}
numberOfLanguages()
//#endregion