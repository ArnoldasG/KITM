const my_custom_rows = document.getElementById ('custom_rows')
const my_custom_col = document.getElementById ('custom_col')
const my_button = document.querySelector ('button');




function createTable () {

    const my_table = document.createElement('table');
    document.body.appendChild(my_table);
    for (let i = 0; i < my_custom_rows.value; i++) {

        const my_rows = document.createElement('tr');
        my_table.appendChild(my_rows);


        for (let j = 0; j < my_custom_col.value; j++) {
        const my_col = document.createElement('td');
        my_rows.appendChild(my_col);
        }
    }

}

my_button.addEventListener('click', createTable)