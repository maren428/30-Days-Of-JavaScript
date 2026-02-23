//#region ESERCIZIO 1
const catsAPI = 'https://api.thecatapi.com/v1/breeds';
async function getCatsName(){
   try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    cats.forEach((cat)=>{
        const catNames = cat.name;
        console.log(catNames);
    })
   } catch (error) {
    console.error("L'errore è:",error)  
   }
}
getCatsName()
//#endregion