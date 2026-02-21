//#region ESERCIZIO 1
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

class Statistics {
    /* Inserisco il riferimento alla variabile esterna come proprietà, come se fosse il parametro di una funzione */
    constructor(ages){
        this.ages = ages
    }
    count(){
        return this.ages.length
    }
    sum(){
        return this.ages
        .reduce((acc,curr) => acc+curr,0)
    }
    min(){
        return this.ages.sort((a,b) => a-b)[0]
    }
    max(){
        return Math.max(...this.ages)
    }
    range(){
        return this.max() - this.min()
    }
    mean(){
        return Math.ceil(this.sum() / this.count())
    }
    median(){
        return this.ages.sort((a,b) => a - b)[Math.floor(this.ages.length-1)/2]
    }
    mode(){
        const modes= {};
        this.ages.forEach((age) =>{
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
    }
    var(){
        const length= this.count();
        const mean= this.sum()/ length;

        const arrayOfDifferences= Array();
        this.ages.forEach((age) =>{
            arrayOfDifferences.push((age - mean)**2)
        })
        const variance= arrayOfDifferences
        .reduce((acc,curr) => acc+curr,0)/length 
        return Number(variance.toFixed(1))
    }
    std(){
        return Number(Math.sqrt(this.var()).toFixed(1))
    }
    freqDist(){
        const modes= {};
        this.ages.forEach((age) =>{
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
    describe(){
    let modeToEdit= this.mode();
    let modeValues= Object.values(modeToEdit);
    let freqDistEdited = this.freqDist()
    /* Quando mappo posso direttamente creare una stringa con gli elementi degli array interni, senza bisogno di creare una stringa vuota esterna => è come se io facessi il push in questo modo */
    .map((element)=> `(${element[0]}, ${element[1]})`)
    .join(", ");    
    return `Count: ${this.count()}
    Sum: ${this.sum()}
    Min: ${this.min()}
    Max: ${this.max()}
    Range: ${this.range()}
    Mean: ${this.mean()}
    Median: ${this.median()}
    Mode: (${modeValues})
    Variance: ${this.var()}
    Standard Deviation: ${this.std()}
    Frequency Distribution: [${freqDistEdited}]`
    }
}
/* Alla creazione dell'istanza, do alla classe la variabile esterna come argomento */ 
const statistics = new Statistics(ages);
console.group("Statistics")
console.log(statistics.count())
console.log(statistics.sum())
console.log(statistics.min())
console.log(statistics.max())
console.log(statistics.range())
console.log(statistics.mean())
console.log(statistics.median())
console.log(statistics.mode())
console.log(statistics.var())
console.log(statistics.std())
console.log(statistics.freqDist())
console.groupEnd()

console.log(statistics.describe())
//#endregion
//#region ESERCIZIO 2
class ContoPersona {
    constructor(nome, cognome){
        this.nome = nome;
        this.cognome = cognome;
        // Inserisco queste proprietà come array vuoti
        this.entrate = [];
        this.spese = [];
    }
    entrateTotali(){
        let sommaEntrate = 0;
        this.entrate.forEach((entrata)=>{
            sommaEntrate += entrata[1]
        })
        return sommaEntrate
    }
    speseTotali(){
        let sommaSpese = 0;
        this.spese.forEach((spesa)=>{
            sommaSpese += spesa[1]
        })
        return sommaSpese
    }
    infoConto(){
        /* Per evitare problemi con l'indentatura, aggiungo \n manualmente per andare a capo */
        let info= `Il conto è intestato a ${this.nome} ${this.cognome}
        \nEntrate totali: ${this.entrateTotali()}\nSpese totali: ${this.speseTotali()}`        
        return info
    }
    /* Per aggiungere i dati in modo dinamico, do dei parametri alla funzione e faccio il push dentro la proprietà corrispondente mettendoli tra []*/
    aggiungiEntrata(descrizione, cifra){
        this.entrate.push([descrizione,cifra]);
    }
    aggiungiSpesa(desc,cif){
        this.spese.push([desc,cif]);
    }
}
const persona_1= new ContoPersona("Paolo", "Rossi");
/* Richiamo i metodi, scrivo quà gli argomenti come nelle funzioni normali */
persona_1.aggiungiEntrata("Stipendio",1800);
persona_1.aggiungiEntrata("Affitto stanze",1200);
persona_1.aggiungiEntrata("Vendita macchina",5000);
persona_1.aggiungiSpesa("Affitto",500);
persona_1.aggiungiSpesa("Luce",120);
persona_1.aggiungiSpesa("Gas",200);
persona_1.aggiungiSpesa("Assicurazione macchina",300);
console.log("Entrate totali:", persona_1.entrateTotali());
console.log("Spese totali", persona_1.speseTotali());
console.log("Info del conto:", persona_1.infoConto());
//#endregion

