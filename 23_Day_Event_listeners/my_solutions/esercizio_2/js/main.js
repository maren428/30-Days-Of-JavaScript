/* 
html
<div>
<p>Premi un tasto qualsiasi</p>
</div>
js
funzione ----> Svuota il p e ne cambia il contenuto
<div>
<p>Hai premuto ${tasto}</p>
</div>

<div>codice del tasto</div>
*/
let paragraph=document.querySelector("p");
let keyContainer=document.createElement("div");
keyContainer.id="key-container";
let keyName=document.createElement("h2");
let keyNameAccent=document.createElement("span");
let keyBox=document.createElement("h3");
keyContainer.appendChild(keyName);
keyContainer.appendChild(keyBox);


document.addEventListener("keydown", (e) =>{
paragraph.remove();
document.body.appendChild(keyContainer);
keyNameAccent.innerHTML=e.key;
keyName.innerHTML="Hai premuto "
keyName.appendChild(keyNameAccent);
keyBox.innerHTML=e.keyCode;
})
