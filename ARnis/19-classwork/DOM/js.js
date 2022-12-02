

// console.log(window);

const my_container = document.querySelector('.container');
console.log(my_container);

const my_button = document.querySelector('button');

console.log(my_button);
console.log(my_button.innerText);

my_button.style.background = 'maroon'
my_button.style.color = 'white';
my_button.style.fontSize = '20px';
my_button.style.borderRadius = '15px';


const my_input = document.getElementById('my_input');
my_input.style.borderRadius = '15px';
my_input.style.fontSize = '20px';
my_input.setAttribute('placeholder', 'Enter amount ');
my_input.style.padding = '0px 0px 0px 75px';




const getName = (event) => {
    event.preventDefault();

    if(my_input.value.length < 3) {
        alert('The name must be more than 3 symbols')
    } 
    console.log(my_input.value);
    // isvalyti input lauka
    my_input.value = ('');

}

my_button.addEventListener('click', getName)

// console.log(my_input);


