const loadCountry=()=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res=>res.json())
    .then(data=>displayCountry(data))
}

const displayCountry=countrys=>{
    // console.log(countrys);
    const countryHtml=countrys.map(country=> getHtml(country));
    const allCounties=document.getElementById('country');
    allCounties.innerHTML=countryHtml.join(' ');
}

const getHtml=({name,flags,area})=>{
    return `
        <div class="country">
        <h1>${name.common}</h1>
        <p>Area:-${area}</p>
        <img src="${flags.png}">
        </div>
    `
}

/* //step 01 distrcharing
const getHtml=country=>{
    const{name,flags}=country
    return `
        <div class="country">
        <h1>${name.common}</h1>

        <img src="${flags.png}">
        </div>
    `
} */


/* //orginal 
const getHtml=country=>{
    
    return `
        <div class="country">
        <h1>${country.name.common}</h1>

        <img src="${country.flags.png}">
        </div>
    `
} */

loadCountry();