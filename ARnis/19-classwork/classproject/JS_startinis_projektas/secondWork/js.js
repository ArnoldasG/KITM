import worldCountries from './worldCountries.js';

console.log(worldCountries)


// for (let i = 0; i < worldCountries.length; i++){
//     console.log(`${i + 1} data:`)
//     console.log('Country: ', worldCountries[i].name.common);


// if (!worldCountries[i].capital) {
//     console.log("Data about capital not found..")
// } else {
//     console.log ("Capital ", worldCountries[i].capital[0]);
// }

// console.log("===============================")
// }


const my_main_div = document.getElementById('main_div');

worldCountries.map((country, index)=>{
    console.log("Index No: ",index +1)
    console.log("Country: ",country.name.common);


// =====================================================================
    // Creating an element where will be entered country name
    const new_div = document.createElement('div');
    const my_country_name  = document.createElement('h2');
    const my_img = document.createElement('img');
    const my_country_capital = document.createElement('h3');
    my_img.src = country.flags.png;
    // Adding text/value/variable into created element
    my_country_name.innerText = country.name.common;
    my_country_capital.innerText = country.capital[0];
    // Adding my created element(with my content) into my_main_div. 
    new_div.appendChild(my_country_name);
    new_div.appendChild(my_img);
    new_div.appendChild(my_country_capital);
    // console.log(country.capital[0]);

// =====================================================================





    if (!country.capital) {
        console.log("Data about Country Capital is not found..");
        const my_country_capital = document.createElement('h3');
        my_country_capital.innerText = "Data about Country Capital is not found.";
    } else {
        console.log(`Capital City of ${country.name.common} is: `, country.capital[0]);
        const my_country_capital = document.createElement('h3');
        my_country_capital.innerText = country.capital[0];
    }
    console.log("=======================================================")
    // new_div.appendChild(my_country_capital);
    my_main_div.appendChild(new_div);

});



