
let title=document.querySelector("h1");
title.innerHTML=asabenehChallenges2020.description + " in " 
title.style.textAlign="center";
title.style.fontFamily="Montserrat, sans-serif";
title.style.fontSize="25px";
title.style.fontWeight="600";

let changeColor=document.createElement("span");
changeColor.textContent=asabenehChallenges2020.challengeYear;
changeColor.style.fontSize="60px";
title.appendChild(changeColor);
/*Alternativa: title.innerHTML = `${asabenehChallenges2020.description} in <span class="change-color">${asabenehChallenges2020.challengeYear}</span>` */
let colorCount= 0;
let colorArray= ["steelblue","aqua","teal","navy","purple","lightsalmon","yellow","gold","green","red","grey","orange","#2ecc71", "#3498db", "#e74c3c", "#f1c40f", "#9b59b6"];
/*La funzione crea una sorta di ciclo manuale che prende un parametro(span 2020) e gli da il colore grazie alla variabile contatore che viene associata all'indice dell'array, ogni volta che la funzione viene richiamata il contatore aumenta, scorrendo così l'array. Quando arriva alla fine dell'array, il contatore ricomincia dalla pozione 0  */
function changeColorYear(year){
    //Accedi alla posizione del contatore
    year.style.color= colorArray[colorCount];
    //Dalla prossima volta aumenta
    colorCount++;
    //Se supera l'array il contatore riparte da zero
    if(colorCount >= colorArray.length ){
        colorCount = 0
    }
}
changeColorYear(changeColor);//esegue subito la prima volta  
setInterval(() => changeColorYear(changeColor), 1000);

let subTitle= document.querySelector("h2");
subTitle.innerHTML=asabenehChallenges2020.challengeSubtitle;
subTitle.style.textAlign="center";
subTitle.style.fontFamily="Montserrat, sans-serif";
subTitle.style.fontSize="16px";
subTitle.style.fontWeight="100";
subTitle.style.textDecoration="underline";

let data= document.querySelector('h3');
data.style.textAlign="center"
data.style.fontFamily="Montserrat, sans-serif";
data.style.fontSize="12px";
data.style.padding="5px";
data.style.width="200px";
data.style.margin="auto";

function dateParagraph(paragraph){
    let todayDate=new Date().toLocaleDateString("en-EN",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});
    //Elimino at e spazi vuoti
    todayDate= todayDate.replace(" at "," ")
    paragraph.innerHTML= todayDate
    /*Uso innerHTML per sovrascrivere il paragrafo */
    /*Ogni volta che il paragrafo verrà sovrascritto il tempo andrà avanti  */    
    /*Dato che io faccio tutto dentro la funzione non devo fare il return, fa tutto innerHTML */
}
let colorDateCount=0;
function changeColorDate(dataBackground){
    //Accedi alla posizione del contatore
    dataBackground.style.backgroundColor= colorArray[colorDateCount];
    //Dalla prossima volta aumenta
    colorDateCount++;
    //Se supera l'array il contatore riparte da zero
    if(colorDateCount >= colorArray.length ){
        colorDateCount = 0
    }
}
dateParagraph(data);
setInterval(() => dateParagraph(data), 1000);
changeColorDate(data);
setInterval(() => changeColorDate(data), 1000);
/*Ogni elemento è un div con un suo colore di sfondo, e contiene un a, un elemento detail e un paragrafo  */

let wrapper=document.querySelector(".wrapper");
asabenehChallenges2020.challenges.forEach((challenge) => {
    /*Ciclo l'oggettone con le informazioni e creo i vari elementi html che servono  */
    let challengeBox= document.createElement("div");
    let challengeTitle= document.createElement("a");
    let challengeDetails= document.createElement("details");
    let challengeSummary=document.createElement("summary");
    let challengeListBox=document.createElement("ul");
    let challengeStatus=document.createElement("p");
    //Inserisco i contenuti nei tag e lo stile
    challengeBox.className="challenge-box";
    challengeBox.style.backgroundColor=colorByStatus(challenge.status);
    challengeBox.style.width="600px";
    challengeBox.style.margin="20px auto";
    challengeBox.style.padding="10px 20px";
    challengeBox.style.display = "flex";
    challengeBox.style.flexDirection = "row";
    challengeBox.style.justifyContent = "space-between";
    challengeBox.style.alignItems = "center";

    //REGOLE LINK A SINISTRA DIV CHALLENGE
    challengeTitle.textContent= challenge.name;
    challengeTitle.href="#";
    challengeTitle.style.textDecoration="none";
    //Mettendo flex 1 a tutti si suddividono lo spazio in modo equo
    challengeTitle.style.flex="2";
    challengeTitle.style.fontFamily="Monserrat, sans-serif"
    //REGOLE DETAILS E SUMMARY
    challengeDetails.style.flex="2";
    challengeDetails.style.cursor="pointer";
    challengeSummary.textContent= challenge.name.replace("30 Days Of","").trimStart();
    challengeSummary.style.fontFamily="Monserrat, sans-serif"
    //REGOLE DETAILS 
    //REGOLE STATUS A DESTRA
    challengeStatus.style.flex="1";
    challengeStatus.style.textAlign="right";
    challengeStatus.style.fontFamily="Monserrat, sans-serif"
    //REGOLE DETAILS 


    /* Ciclo gli array Topics per inserire gli elementi nei li e li appendo all'ul */
    challenge.topics.forEach((topic) => {
        let challengeList= document.createElement("li");
        challengeList.textContent=topic;
        challengeList.style.listStyleType="none";
        challengeList.style.fontFamily="Monserrat, sans-serif";
        challengeList.style.paddingBottom="5px"
    //REGOLE DETAILS 
        challengeListBox.appendChild(challengeList);
    });

    challengeStatus.textContent= challenge.status;
    /*Appendo dall'interno verso l'esterno tutti gli elementi dei div che andraanno dentro wrapper,vedi gerarchia sotto  */
    challengeDetails.appendChild(challengeSummary);
    challengeDetails.appendChild(challengeListBox);
    challengeBox.appendChild(challengeTitle);
    challengeBox.appendChild(challengeDetails);
    challengeBox.appendChild(challengeStatus);
    wrapper.appendChild(challengeBox);
})

/*Esempio visivo della gerarchia:
Bisogna assemblare dall'interno verso l'esterno

wrapper
  └── div
       ├── a
       ├── details
       │    ├── summary
       │    └── ul
       │         ├── li
       │         ├── li
       │         └── li
       └── p */

/*La funzione controlla lo status e ritorna un colore che verrà utilizzato sopra come colore di sfondo per i div  */       
function colorByStatus(status){
    if(status === "Done" ) return "green"
    if(status === "Ongoing") return "yellow"
    if(status === "Coming") return "red"
    return "black"
}

//FOOTER
let footer=document.createElement("div");
footer.className="footer";
footer.style.paddingTop="50px"

//TOP-FOOTER
let topFooter=document.createElement("div");
topFooter.className="top-footer";
//TITOLO TOP-FOOTER
let topFooterTitle=document.createElement("h4");
topFooterTitle.textContent=asabenehChallenges2020.author.firstName +" " + asabenehChallenges2020.author.lastName;
topFooterTitle.style.textAlign="center";
topFooterTitle.style.fontFamily="Montserrat, sans-serif";
topFooterTitle.style.fontSize="20px";
//DIV SOCIALS
/*Creo il div poi ciclo l'array dentro l'oggetto e creo i miei link con icona, è necessario innerhtml per inserirla  */
let socials=document.createElement("div");
socials.className="socials";
asabenehChallenges2020.author.socialLinks.forEach((link) =>{
    let socialLink=document.createElement("a");
    //REGOLE ICONE SOCIAL
    socialLink.href=link.url;
    socialLink.target="_blank";
    socialLink.innerHTML=link.fontawesomeIcon;
    socialLink.style.fontSize="25px";
    socialLink.style.color="#333";
    socialLink.style.padding="0 5px";
    //REGOLE DIV SOCIALS
    socials.style.width="110px";
    socials.style.margin="auto";
    socials.appendChild(socialLink);
})

//PARAGRAFO TESTO
let bio=document.createElement("p");
bio.textContent=asabenehChallenges2020.author.bio;
bio.style.width="690px";
bio.style.textAlign="center";
bio.style.margin="20px auto";
bio.style.fontFamily="Montserrat, sans-serif";
bio.style.fontSize="16px";
bio.style.fontWeight="400";
bio.style.lineHeight="20px";

topFooter.appendChild(topFooterTitle);
topFooter.appendChild(socials);
topFooter.appendChild(bio);
footer.appendChild(topFooter);
document.body.appendChild(footer);

//DIV INFO
let info=document.createElement("div");
info.className="info";
info.style.width="750px";
info.style.margin="auto";
info.style.marginBottom="30px";
info.style.paddingTop="20px";
info.style.display="flex";
info.style.justifyContent="space-between";
info.style.gap="30px"

//DIV TITLES
let titles=document.createElement("div");
titles.className="titles";
titles.style.display="flex";
titles.style.flexDirection="column";
titles.style.flex="1";
titles.style.marginTop="0";
//TITOLO TITLES
let titleOfTitles=document.createElement("h5");
titleOfTitles.textContent="Titles";
titleOfTitles.style.marginBottom="10px";
titleOfTitles.style.marginLeft="2px";
titleOfTitles.style.fontFamily="Montserrat, sans-serif";
titleOfTitles.style.fontSize="16px";
//UL DI TITLES
let titleListBox=document.createElement("ul");
titleListBox.style.listStyleType="none";
titleListBox.style.padding="0";
titleListBox.style.margin="0";
//Solo le variabili vanno senza virgolette
asabenehChallenges2020["author"]["titles"].forEach((title) =>{
    let iconTitle=document.createElement("span");
    iconTitle.innerHTML=title[0];
    iconTitle.style.marginRight="5px";
    let workTitle=document.createElement("li");
    workTitle.innerHTML=title[1];
    workTitle.style.marginBottom="8px";
    workTitle.style.fontFamily="Montserrat, sans-serif";
    workTitle.style.fontSize="16px";
    workTitle.prepend(iconTitle);
    titleListBox.appendChild(workTitle);
})

titles.appendChild(titleOfTitles);
titles.appendChild(titleListBox);
info.appendChild(titles);
footer.appendChild(info);

//DIV SKILLS
let skills=document.createElement("div");
skills.className="skills";
skills.style.flex="1";
skills.style.flexDirection="column";
skills.style.marginTop="0";
//TITOLO DI SKILLS
let skillTitle=document.createElement("h5");
skillTitle.textContent="Skills";
skillTitle.style.marginBottom="10px";
skillTitle.style.marginLeft="2px";
skillTitle.style.fontFamily="Montserrat, sans-serif";
skillTitle.style.fontSize="16px";
//UL DI SKILLS
let skillListBox=document.createElement("ul");
skillListBox.style.listStyleType="none";
skillListBox.style.padding="0";
skillListBox.style.margin="0";
asabenehChallenges2020.author.skills.forEach((skill) =>{
    let iconSkill=document.createElement("span");
    //Gli emoji sono caratteri di testo--> stringhe
    iconSkill.innerHTML="✅";
    iconSkill.style.marginRight="5px";
    let skillList=document.createElement("li");
    skillList.innerHTML=skill;
    skillList.style.marginBottom="8px";
    skillList.style.fontFamily="Montserrat, sans-serif";
    skillList.style.fontSize="16px";
    skillList.prepend(iconSkill);
    skillListBox.appendChild(skillList);
})
//Appendo gli elementi al div skills e poi al div info
skills.appendChild(skillTitle);
skills.appendChild(skillListBox);
info.appendChild(skills);

//DIV QUALIFICATIONS
let quals=document.createElement("div");
quals.className="qualifications";
quals.style.flex="2";
quals.style.flexDirection="column";
quals.style.marginTop="0";
//TITOLO QUALIFICATIONS
let qualTitle=document.createElement("h5");
qualTitle.innerHTML="Qualifications";
qualTitle.style.marginBottom="10px";
qualTitle.style.marginLeft="2px";
qualTitle.style.fontFamily="Montserrat, sans-serif";
qualTitle.style.fontSize="16px";
//UL QUALIFICATIONS
let qualListBox=document.createElement("ul");
qualListBox.style.listStyleType="none";
qualListBox.style.padding="0";
qualListBox.style.margin="0";
asabenehChallenges2020["author"]["qualifications"].forEach((qual)=>{    
 let IconQual=document.createElement("span");
      if(qual.includes("Computer")) {
        IconQual.innerHTML = "📖";
    } else {
        IconQual.innerHTML = "👨‍🎓";
    }
    IconQual.style.marginRight="5px";
    let qualList=document.createElement("li");
    qualList.innerHTML=qual;
    qualList.style.marginBottom="8px";
    qualList.style.fontFamily="Montserrat, sans-serif";
    qualList.style.fontSize="16px";
    qualList.prepend(IconQual);
    qualListBox.appendChild(qualList);
});

quals.appendChild(qualTitle);
quals.appendChild(qualListBox);
info.appendChild(quals);

//DIV KEYWORDS
let keywords=document.createElement("div");
keywords.className="keywords";
keywords.style.display="flex";
keywords.style.flexWrap="wrap";
keywords.style.gap="15px";
keywords.style.alignItems="center";
keywords.style.justifyContent = "center";
keywords.style.width="50%";
keywords.style.margin="auto";
keywords.style.padding="4px 10px";
//TITOLO KEYWORS
let keywordsTitle=document.createElement("h5");
keywordsTitle.innerHTML="Keywords";
keywordsTitle.style.width="100%";
keywordsTitle.style.marginBottom="0";
keywordsTitle.style.fontFamily="Montserrat, sans-serif";
keywordsTitle.style.fontSize="16px";
keywordsTitle.style.fontWeight="600";
keywords.appendChild(keywordsTitle);

//TAG
asabenehChallenges2020.keywords.forEach((keyword) =>{
let tag=document.createElement("span");
tag.innerHTML="#"+ " " + keyword;
tag.style.whiteSpace="nowrap";
//Numero random per pescare un colore a caso per gli sfondi span
let Rand=Math.floor(Math.random()*colorArray.length);
let colorRand=colorArray[Rand];
tag.style.backgroundColor=colorRand;
tag.style.padding = "5px 10px";
tag.style.borderRadius = "20px";
tag.style.fontFamily = "Montserrat, sans-serif";
tag.style.fontSize = "14px";
tag.style.fontStyle="italic";
tag.style.fontWeight = "500";
tag.style.display = "inline-block";
keywords.appendChild(tag);
})
footer.appendChild(keywords);