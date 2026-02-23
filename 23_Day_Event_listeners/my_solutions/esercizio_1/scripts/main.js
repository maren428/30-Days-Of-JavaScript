let mainTitle=document.querySelector("h1");
mainTitle.style.textAlign="center";
mainTitle.style.fontFamily="Montserrat, sans-serif";
mainTitle.style.fontSize="30px";
mainTitle.style.fontWeight="600";
mainTitle.style.color="green";

let secondTitle=document.querySelector("h2");
secondTitle.style.textAlign="center";
secondTitle.style.fontFamily="Montserrat, sans-serif";
secondTitle.style.fontWeight="100";
secondTitle.style.fontSize="20px";
secondTitle.style.marginTop="-15px";

let thirdTitle=document.querySelector("h3");
thirdTitle.style.textAlign="center";
thirdTitle.style.fontFamily="Montserrat, sans-serif";
thirdTitle.style.fontSize="16px";
thirdTitle.style.fontWeight="100";
thirdTitle.style.marginTop="-15px";


let wrapper=document.querySelector(".wrapper");
wrapper.style.width="1200px";
wrapper.style.margin="auto";
let inputNumbers=document.createElement("div");
inputNumbers.id="input-numbers";
inputNumbers.style.width="700px";
inputNumbers.style.margin="auto";
let error=document.createElement("p");
error.style.color="red";
error.style.margin="0";
error.style.fontFamily="Montserrat, sans-serif";
error.style.fontSize="12px";
let inputNum= document.createElement("input");
inputNum.type="text";
inputNum.placeholder="Generate more numbers";
inputNum.style.width="400px";
inputNum.style.padding="8px";
inputNum.style.border="2px solid green";
inputNum.style.marginRight="20px";
inputNum.style.fontFamily="Montserrat, sans-serif";
let buttonNum=document.createElement("button");
buttonNum.textContent="Generate Numbers";
buttonNum.style.width="160px";
buttonNum.style.padding="10px";
buttonNum.style.border="none";
buttonNum.style.backgroundColor="green";
buttonNum.style.color="white";
buttonNum.style.fontFamily="Montserrat, sans-serif";
buttonNum.style.fontWeight="500";
buttonNum.style.fontSize="16px";

inputNumbers.appendChild(error);
inputNumbers.appendChild(inputNum);
inputNumbers.appendChild(buttonNum);
wrapper.appendChild(inputNumbers);

//Il valore di input deve essere un numero(non lettere)
//Inserisci un valore numerico nel campo input per generare numeri


/*Conviene creare il div contenitore dei numeri fuori dalla funzione, così poi ogni volta che richiamo la funzione per generare i numeri, svuoto il div e creo i nuovi. Inoltre dopo aver creato il div contenitore lo appendo già al wrapper, e non dentro il ciclo perché devo crearlo una volta sola.  */
const numbersContainer = document.createElement("div");
numbersContainer.style.width = "750px";
numbersContainer.style.margin = "auto";
numbersContainer.style.paddingTop="20px";
wrapper.appendChild(numbersContainer);

// Do un parametro alla funzione che genera i div con i numeri
function numberGenerator(num) {
    //Svuoto il div contenitore
    numbersContainer.innerHTML="";
    let grid = 0

    for (let i = 0; i <= num; i++) {
        if (grid === 8) {
            let clear = document.createElement("div");
            clear.style.clear = "both"
            wrapper.appendChild(clear)
            grid = 0
        }
        grid++
        let numBox = document.createElement("div");
        numBox.textContent = i

        if (isPrime(i)) {
            numBox.style.backgroundColor = "red"

        } else {
            if (i % 2 === 0) {
                numBox.style.backgroundColor = "green"

            } else if (i % 2 === 1) {
                numBox.style.backgroundColor = "yellow"
            }

        }
        numBox.style.width = "50px";
        numBox.style.padding = "2px 12px";
        numBox.style.float = "left";
        numBox.style.textAlign = "center";
        numBox.style.fontFamily = "Montserrat, sans-serif";
        numBox.style.fontSize = "25px";
        numBox.style.fontWeight="600";
        numBox.style.color = "white";
        numBox.style.marginRight = "5px";
        numBox.style.marginBottom = "5px";
        numbersContainer.appendChild(numBox);
    }
}

function isPrime(number) {
    let isPrime = true;
    if(number===0){
        return false
    }
    // check if number is equal to 1
    if (number === 1) {
       return false
    }

    // check if number is greater than 1
    else if (number > 1) {

        // looping through 2 to number/2
        for (let i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return (isPrime) ? true : false
}
/*Richiamo la funzione la prima volta con 50 come parametro,così quando la pagina si carica,vengono creati 50 numeri colorati */
numberGenerator(50)

/*Ascolto l'evento del click, salvo il contenuto dell'input e faccio dei controlli.*/
buttonNum.addEventListener("click", () => {
    let inputValue= inputNum.value;
    //Controllo se l'input è vuoto
    if(inputValue === ""){
        error.textContent="Inserisci un valore numerico nel campo input per generare numeri";
       /* Ricordarsi il return,così il codice si interrompe quà in caso si verifichi un errore */
        return
    }
    //Controllo se l'input non è un numero
    if(isNaN(inputValue)){
        error.textContent="Il valore di input deve essere un numero";
        return
    }
    //Controllo se l'input è negativo o uguale a zero
    if(inputValue <= 0){
        error.textContent="Inserisci un numero maggiore di zero"
        return
    }
    //Se è tutto ok, svuota la stringa di errore e prosegui
    error.textContent="";
    /*Richiamo la funzione che genera i numeri dandogli l'input come parametro */
    numberGenerator(inputValue);
})  