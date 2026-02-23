const title=document.querySelector("h2");
title.style.textAlign="center";
title.style.textTransform="uppercase";
title.style.fontFamily="Montserrat, sans-serif";
title.style.fontSize="40px";
title.style.fontWeight="700"
title.style.marginTop="30px"

const title_2=document.querySelectorAll("h3");
title_2.forEach((title)=>{
    title.style.textAlign="center";
    title.style.fontFamily="Montserrat, sans-serif";
    title.style.fontSize="14px";
    title.style.fontWeight="400";
})

function countryDisplay(){
    let total_countries= document.querySelector("#total-countries");
    total_countries.innerHTML=`Total number of Countries: ${countries.length}`;
    total_countries.style.textAlign="center";
    total_countries.style.fontFamily="Montserrat, sans-serif";
    total_countries.style.fontSize="15px";
    total_countries.style.marginTop="5px";
     total_countries.style.marginBottom="5px";
    let countries_wrapper=document.querySelector(".countries-wrapper");
    countries_wrapper.style.width="1000px";
    countries_wrapper.style.margin="60px auto";

    for(let i=0; i<countries.length;i++){
        let grid=0;
         if (grid === 6) {
            let clear_div = document.createElement("div");
            clear_div.style.clear = "both"
            countries_wrapper.appendChild(clear_div)
            grid = 0
        }
        grid++
        let country_box= document.createElement("div");
        country_box.innerHTML=countries[i]
        country_box.style.width="145px";
        country_box.style.height="145px";
        country_box.style.padding="60px 12px"
        country_box.style.float="left";
        country_box.style.fontFamily="Montserrat, sans-serif";
        country_box.style.fontSize="12px"
        country_box.style.fontWeight="600";
        country_box.style.textTransform="uppercase";
        country_box.style.backgroundColor="white";
        country_box.style.boxShadow="0 0 2px 1px rgba(0, 0, 0, 0.1)";
        country_box.style.borderRadius="5px";
        country_box.style.marginRight="10px";
        country_box.style.marginBottom="10px";
        country_box.style.textAlign="center"
        countries_wrapper.appendChild(country_box)
    }
}
countryDisplay()