const mainTitle = document.querySelector("h1");
mainTitle.style.textAlign = "center";
mainTitle.style.fontFamily = "Montserrat, sans-serif";
mainTitle.style.fontSize = "27px";
mainTitle.style.fontWeight = "600";

const secondTitle = document.querySelector("h2");
secondTitle.style.textAlign = "center";
secondTitle.style.fontFamily = "Montserrat, sans-serif";
secondTitle.style.fontWeight = "100";
secondTitle.style.fontSize = "16px";
secondTitle.style.textDecoration = "underline";
secondTitle.style.marginTop = "-15px";

const thirdTitle = document.querySelector("h3");
thirdTitle.style.textAlign = "center";
thirdTitle.style.fontFamily = "Montserrat, sans-serif";
thirdTitle.style.fontWeight = "100";
thirdTitle.style.fontSize = "14px";
thirdTitle.style.textDecoration = "underline";
thirdTitle.style.marginTop = "-10px";

function numberGenerator() {
    let grid = 0
    const wrapper = document.querySelector(".wrapper");
    wrapper.style.width = "700px";
    wrapper.style.margin = "auto";

    for (let i = 0; i <= 101; i++) {
        if (grid === 6) {
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
        numBox.style.width = "50px"
        numBox.style.padding = "20px 30px"
        numBox.style.float = "left"
        numBox.style.textAlign = "center"
        numBox.style.fontFamily = "Montserrat, sans-serif";
        numBox.style.fontSize = "20px";
        numBox.style.color = "white"
        numBox.style.marginRight = "5px"
        numBox.style.marginBottom = "5px"
        wrapper.appendChild(numBox)
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


numberGenerator()
