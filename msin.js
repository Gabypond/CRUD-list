function addToTable() {

let name = document.getElementById('name').value;
let date = document.getElementById('date').value;
let comments = document.getElementById('comments').value;
let table = documento.getElementById('listAdd')

let tableSize = table.rows.length;
let row = table.insertRow(tableSize);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);

row.id = tableSize;

let btnCode = "<button class='remove-btn' onclick-'removeToTable(this)'>Excluir</button>";

cell1.innerHTML = tableSize;
cell2.innerHTML = name;
cell3.innerHTML = date;
cell4.innerHTML = comments;


document.getElementById('name') = '';
document.getElementById('date') = '';
document.getElementById('comments') = '';

}   
function myFunction() {
    
}

