'use strict'


let duomenys ={
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,                               
    "topping":
        [
            { "id": "5001", "type": "None" },
            { "id": "5002", "type": "Glazed" },
            { "id": "5005", "type": "Sugar" },
            { "id": "5007", "type": "Powdered Sugar" },
            { "id": "5006", "type": "Chocolate with Sprinkles" },
            { "id": "5003", "type": "Chocolate" },
            { "id": "5004", "type": "Maple" }
        ]
}

for (let i in duomenys) {
    // console.log(i);
    // console.log(duomenys[i]);   
     if (!Array.isArray(duomenys[i])) {
    console.log(`${i+ duomenys[i]}`);  
    } else {
    for (let j in duomenys[i]) {
        console.log(` ${i}:`); 
        for (let k in duomenys[i][j]){
            console.log(`${k}: ${duomenys[i][j][k]}`)
        }
         } 
    }
}
