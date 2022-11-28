// 'use strict'

let courses = [
    {
        pavadinimas: "JS",
        aprasymas: "labai lengva programavimo kalba",
        lektorius: "Jolita",
        kaina: {
            akcijai: 50,
            pagrindine: 100,
            galutine: 30
        },
        tag: ["js", "programing", "web"]
    },
    {
        pavadinimas: "SQL",
        aprasymas: "strukturizuota database kalba",
        lektorius: "Dovydas",
        kaina: {
            akcijai: 20,
            pagrindine: 80,
            galutine: 10
        },
        tag: ["sql", "database", "it"]
    },
    {
        pavadinimas: "HTML",
        aprasymas: "ne programavimo kalba",
        lektorius: "Zigmas",
        kaina: {
            akcijai: 19.99,
            pagrindine: 89.99,
            galutine: 9.99
        },
        tag: ["html", "markup", "webpages"]
    },
]

for (i in courses) {
    // console.log(courses[i])
    for(j in courses [i]){
        // console.log(courses[i][j])
        if(!Array.isArray(courses[i][j])) {
             } else if (typeof courses[i][j] === "object") {
                console.log(courses[i][j])
        }       
    }
}


// Second type

for (let i in duomenys) {
    //   console.log(i)
      if (!Array.isArray(duomenys[i])) {
    // if (typeof duomenys[i] === "object") {
        // console.log(`${i}: ${duomenys[i]}`);
      } else {
        for (let k = 0; k < duomenys[i].length; k++) {
            console.log(i);
          for (let j in duomenys[i][k]) {
            console.log(`${j}: ${duomenys[i][k][j]}`);
          }
        }
      }
    }
