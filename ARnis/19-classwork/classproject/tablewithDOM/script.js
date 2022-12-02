'use strict'

// 1st STEP - 
const my_ul_list = document.getElementById('ul_list');
const my_ol_list = document.getElementById('ol_list');
const my_button = document.querySelector('button');
const my_text = document.querySelector('h2');

// console.log(my_ul_list)
// console.log(my_ol_list)
// console.log(my_button)
// console.log(my_text)

 // 2nd STEP - 
function createList () {
    // This lane just to check --> console.log(my_ul_list.value)
    // This lane just to check --> console.log(my_ol_list.value)

    // 2.1 Creating UL list
    const notNumeratedList = document.createElement("UL")
    // 2.2 Appending notNumaratedlist into body HTML.
    document.body.appendChild(notNumeratedList);
    // 2.3 Creating loop for UL list 
   for (let i = 0; i < my_ul_list.value; i++) {
    // 2.4 Creating LI list
        const my_not_numberated_list = document.createElement('li');
        my_not_numberated_list.innerText = 'Just a random string;'
    // 2.5 Setting created (2.4) LI list for UL. 
        notNumeratedList.appendChild(my_not_numberated_list);
    // 2.6 Creati OL list for LI list
        const my_ol_list = document.createElement('ol');
    // 2.7 Setting created (2.6) Ol list for LI list
        my_not_numberated_list.appendChild(my_ol_list);

        for(let i = 0; i < my_ul_list.value; i++) {
            const li_item = document.createElement('li')
            li_item.innerText = 'Just a second random string;'
            my_ol_list.appendChild(li_item);
        }
   } 

}

// 3rd STEP - 
my_button.addEventListener('click', createList);