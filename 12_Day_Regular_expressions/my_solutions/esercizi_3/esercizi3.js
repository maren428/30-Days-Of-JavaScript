const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(text){
    let cleaned= text.replace(/[^\w\s]/gi, '');
    return cleaned
}
/* Per poter usare quello che una funzione ritorna come parametro in un'altra funzione, salvo semplicemente la funzione dentro una variabile e poi la utilizzo come parametro nell'altra. In alternativa posso richiamare la funzione dentro la funzione come se fosse un normale parametro => const risultato = moltiplica(somma(2, 3), 4); */
let cleanedText= cleanText(sentence);
console.log(cleanedText);

function mostFrequentWords(paragraph,numWords){
    const pattern=  /[a-zA-Z]+/g;
    const words= paragraph.match(pattern);
    const setOfWords= new Set(words);
    const wordCount= Array();
    setOfWords.forEach((w) => {
     const filterWord=words.filter((word)=> word===w)
        wordCount.push({ word : w, count: filterWord.length})
    })
    const sortedWords = wordCount.sort((a, b) => b.count - a.count);
    return numWords ? sortedWords.slice(0, numWords) : sortedWords;
    
}
console.log(mostFrequentWords(cleanedText,3));