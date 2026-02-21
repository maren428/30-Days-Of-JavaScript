const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
function tenMostFrequentWords(text,numOfWords){
    //Pattern che trova parole con almeno una lettera
    const pattern=  /[a-zA-Z]+/g;
    //Creo un array con le parole
    const words= text.match(pattern);
    //Faccio il set dell'array: solo elementi unici
    const setOfWords= new Set(words);
    const wordCount= Array();
    //Ciclo il set e filtro l'array words, così creo degli array che contengono tutti la stessa parola ["a","a","a"] e posso sfruttare per contare quante volte compare la parola, prendendo la lunghezza degli array
    setOfWords.forEach((w) => {
     const filterWord=words.filter((word)=> word===w)
    /* Pusho dentro un array gli oggetti con parola e numero di volte che compare */ 
        wordCount.push({ word : w, count: filterWord.length})
    })
    /* Metto in ordine in base al count:numero di volte che compare la parola */
    const sortedWords = wordCount.sort((a, b) => b.count - a.count);
    /* Se ho il parametro numWords, allora mostra quel numero di parole, altrimenti mostra la conta di tutte le parole  */
    return numOfWords ? sortedWords.slice(0, numOfWords) : sortedWords;
    
}
console.log(tenMostFrequentWords(paragraph))
console.log(tenMostFrequentWords(paragraph,10));