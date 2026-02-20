let ore= prompt("Inserisci le tue ore settimanali:","0");
let paga_ore= prompt("Inserisci la tua paga all'ora:","0");
ore=Number(ore);
paga_ore=Number(paga_ore);
let paga_settimanale= ore*paga_ore;
if(isNaN(ore)||isNaN(paga_ore)||ore<=0||paga_ore<=0){
    alert("Inserisci numeri validi e maggiori di zero")
}else{
    alert(`La tua paga settimanale è ${paga_settimanale}€`);
}
