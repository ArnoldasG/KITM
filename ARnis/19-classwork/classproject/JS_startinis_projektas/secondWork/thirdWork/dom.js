
const my_div = document.getElementById('main');
const link = document.createElement('a');
link.textContent = "Read the documentation";

my_div.appendChild(link);
link.href = "https://google.com"
link.target = "_blank "

const my_p_array = document.querySelectorAll('p');
for (let i=0; i<my_p_array.length; i++) {
    my_p_array[i].style.color = 'red';
}
