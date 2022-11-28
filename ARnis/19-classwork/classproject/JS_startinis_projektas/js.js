import data from "./data.js";

console.log(data);

//*************************************//
localStorage.setItem("katinukas", "Rainius");
let katinukas = localStorage.getItem("katinukas");
console.log("katinukas", katinukas);

//*************************************//
let cats = ["Rainius", "Ryzas", "Pilkis"];
let katai = {
  vardas: "ryzas",
  kailis: "pilkas",
};
localStorage.setItem("katinukai", JSON.stringify(katai));

let katinukaiIsLs = JSON.parse(localStorage.getItem("katinukai"));
console.log("katinukaiIsLs", katinukaiIsLs);

//*************************************//
// isvalyti LS:
// localStorage.clear()

//*************************************//


// ClassWork 11-25 

// Sukuriam funkcija, kuri gauna konkretaus filmo informacija
// is data.js failo, pagal ID

function getMovieFromFile(movieId) {
    const favorite_movie = data.find(movie => movie.id === movieId);
    return favorite_movie;
}

// console.log(getMovieFromFile(985939));

const setFavoriteMovie = () => {
    function tikrina() {
        const kintamasis_tikrinimui = localStorage.getItem("favorite_movie");
        if (kintamasis_tikrinimui === null) {
            return [];
        } else {
            return JSON.parse(kintamasis_tikrinimui);
        }
    }
     const movies_array = tikrina();

     const movie_from_file = getMovieFromFile(985939);
     const new_movie = {
         id: movie_from_file.id,
         title: movie_from_file.title
     }
    // patikrinti ar tos filmas dar neegzistuoja

     movies_array.push(new_movie);
     localStorage.setItem('favorite_movies', JSON.stringify(movies_array));
}

setFavoriteMovie();

// 

const getMovieFromLocalStorage = () => {
    const items = JSON.parse(localStorage.getItem('favorite_movies'))
    items.map(item => console.log(item.title));

}

getMovieFromLocalStorage();

// const removeMovieFromFavoriteList = () => {
//     // let items = JSON.parse(localStorage.getItem('favorite_movies'));
//     // const filtered = items.findIndex(item => item.id === 985939);
//     // items = items.splice(filtered, 1 )
//     // localStorage.setItem('items', JSON.stringify(filtered));
// }

    const deleteMovie = (movieId) => {
        const items = JSON.parse(localStorage.getItem('favorite_movies'));
        const index = items.findIndex(movie => movie.id === movieId);
        console.log(index);
        if (index > -1 ) {
            items.splice(index, 1)
        }
        localStorage.setItem('favorite_movies', JSON.stringify(items));
    }

deleteMovie(985939)
console.log('works?')
getMovieFromLocalStorage();

// removeMovieFromFavoriteList();

// console.log('Labas');
// getMovieFromLocalStorage();