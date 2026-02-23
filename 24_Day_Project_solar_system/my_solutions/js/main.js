
let mercury= document.createElement("option");
mercury.value="mercury";
mercury.innerHTML="MERCURY";

let venus= document.createElement("option");
venus.value="venus";
venus.innerHTML="VENUS";

let earth= document.createElement("option");
earth.value="earth";
earth.innerHTML="EARTH";

let moon= document.createElement("option");
moon.value="moon";
moon.innerHTML="MOON";

let mars= document.createElement("option");
mars.value="mars";
mars.innerHTML="MARS";

let jupiter= document.createElement("option");
jupiter.value="jupiter";
jupiter.innerHTML="JUPITER";

let saturn= document.createElement("option");
saturn.value="saturn";
saturn.innerHTML="SATURN";

let uranus= document.createElement("option");
uranus.value="uranus";
uranus.innerHTML="URANUS";

let neptune= document.createElement("option");
neptune.value="neptune";
neptune.innerHTML="NEPTUNE";

let pluto= document.createElement("option");
pluto.value="pluto";
pluto.innerHTML="PLUTO";

let planetSelector= document.querySelector("select");
planetSelector.appendChild(mercury);
planetSelector.appendChild(venus);
planetSelector.appendChild(earth);
planetSelector.appendChild(moon);
planetSelector.appendChild(mars);
planetSelector.appendChild(jupiter);
planetSelector.appendChild(saturn);
planetSelector.appendChild(uranus);
planetSelector.appendChild(neptune);
planetSelector.appendChild(pluto);

/* Per il div immagine e trafiletto:creo le regole in una classe nel css, questa classe viene applicata quando clicco sul bottone. */
/* Stessa cosa per i controlli iniziali */

let mass= document.getElementById("mass");
let calculateButton=document.querySelector("button");
/* L'immagine già esiste in html la variabile va creata fuori, con il click poi cambia */
//Modifico un attributo con il click
let planetImg=document.getElementsByClassName("planet-image")[0];
let flexItemImage=document.getElementsByClassName("flex-item-image")[0];
let flexContainer=document.getElementsByClassName("flex-container")[0];
let errorMessage=document.createElement("p");
let flexItemDescription=document.getElementsByClassName("flex-item-description")[0];

calculateButton.addEventListener("click", ()=>{
    let gravity=0;
    flexItemImage.classList.remove("error");
    flexContainer.classList.remove("error");
    flexContainer.classList.remove("flex-items");
    flexItemImage.classList.remove("planet-selected");
    flexItemDescription.classList.remove("planet-description");
    // flexItemImage.innerHTML="";
    /*Valori input, mi servono quando clicco quindi vanno creati dentro la funzione */
    //Leggo un valore dinamico
    let massValue=mass.value;
    let planetValue=planetSelector.value;
    if(massValue === ""){
        flexItemImage.innerHTML = "";
        errorMessage.innerHTML="Mass is required";
        flexItemImage.appendChild(errorMessage);
        flexItemImage.classList.add("flex-item-image","error");
        flexContainer.classList.add("flex-container","error");
        return
    }
    if(planetValue === "none"){
        flexItemImage.innerHTML = "";
        errorMessage.innerHTML="You did not choose a planet yet";
        flexItemImage.appendChild(errorMessage);
        flexItemImage.classList.add("flex-item-image","error");
        flexContainer.classList.add("flex-container","error");
        return
    }
    // console.log( parseFloat(100*8.9).toFixed(2))
    
/* Peso=massa*gravità

sulla terra
massa 100kg
peso=100*9.8=980.00N */
flexItemImage.innerHTML = "";
flexItemImage.appendChild(planetImg);
flexContainer.classList.add("flex-container","flex-items");
flexItemImage.classList.add("flex-item-image","planet-selected");
flexItemDescription.classList.add("flex-item-description","planet-description")
//dare classe 
    //flexcontainer
    //description
switch(planetValue){
    case "earth":
    planetImg.src="./img/earth.png";
    gravity=9.80;
    break;
    case "jupiter":
    planetImg.src="./img/jupiter.png";
    gravity=24.79;
    break;
    case "mars":
    planetImg.src="./img/mars.png";
    gravity=3.71;
    break;
    case "mercury":
    planetImg.src="./img/mercury.png";
    gravity=3.70;
    break;
    case "moon":
    planetImg.src="./img/moon.png";
    gravity=1.62;
    break;
    case "neptune":
    planetImg.src="./img/neptune.png";
    gravity=11.15;
    break;
    case "pluto":
    planetImg.src="./img/pluto.png";
    gravity=0.62;
    break;
    case "saturn":
    planetImg.src="./img/saturn.png";
    gravity=10.44;
    break;
    case "uranus":
    planetImg.src="./img/uranus.png";
    gravity=8.87;
    break;
    case "venus":
    planetImg.src="./img/venus.png";
    gravity=8.87;
    break;                                   
}

flexItemDescription.innerHTML="";
let descriptionTitle=document.createElement("h3");
descriptionTitle.textContent="The weight of the object on";
descriptionTitle.className="description-title";

let descriptionPlanet=document.createElement("span");
descriptionPlanet.innerHTML=` ${planetValue.toUpperCase()}`;
descriptionPlanet.className="planet-name"
descriptionTitle.appendChild(descriptionPlanet);
flexItemDescription.appendChild(descriptionTitle);

let planetWeight=document.createElement("p");
planetWeight.innerHTML=`${parseFloat(massValue * gravity).toFixed(2)} N`;
planetWeight.className="planet-weight";
flexItemDescription.appendChild(planetWeight);
})