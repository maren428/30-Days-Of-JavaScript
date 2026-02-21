const contoPersona= {
    nome: "Paolo",
    cognome: "Rossi",
    entrate: [
        {
            descrizione: "Stipendio",
            cifra:1800
        },
        {
            descrizione: "Affitto stanze",
            cifra:1200
        },
        {
            descrizione: "Vendita macchina", 
            cifra:5000
        }
    ],
    spese: [
       { 
        descrizione: "Affitto",
        cifra:500

       },
       {
        descrizione: "Luce",
        cifra:120
    },
       {
        descrizione:"Gas",
        cifra:200
    },
       {
        descrizione:"Assicurazione macchina",
        cifra:300
       }
],
    entrate_totali: function(){
        let somma_entrate=0;
        for(let i=0; i<this.entrate.length; i++){
            somma_entrate+=this.entrate[i].cifra
        }
        return somma_entrate
    },
    uscite_totali: function() {
        let somma_uscite=0;
        for(let i=0; i<this.spese.length; i++){
            somma_uscite+=this.spese[i].cifra
        }
        return somma_uscite
      
    },
    informazioni_sul_conto: function(){
    return `Il conto è intestato a ${this.nome} ${this.cognome}`
    },
    aggiungi_entrate: function(entrata){
        this.entrate.push(entrata)
    },
    aggiungi_spese:function(spesa){
        this.spese.push(spesa)
    },
    bilancio_del_conto: function(){
        const entrate_totali= this.entrate_totali();
        const uscite_totali= this.uscite_totali();
        return entrate_totali - uscite_totali
    }
}
const contoPersonaText = JSON.stringify(contoPersona,undefined,4);
localStorage.setItem("contoPersona",contoPersonaText);