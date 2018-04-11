const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
//counters
var itemCount = document.querySelectorAll('input[type="checkbox"]').length
let uncheckedCount  = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length

function newTodo (){
  var cb = document.createElement( "input" )
  cb.type = "checkbox"
  cb.setAttribute( "class", classNames.TODO_CHECKBOX)
  cb.checked = false;
  var toDo =  prompt("O que voce tem que fazer");
  var paragrafo = document.createElement("p");
  paragrafo.appendChild(cb)
  paragrafo.innerHTML += toDo;
  paragrafo.addEventListener('change', function () {
    uncheckedCount  = document.querySelectorAll
    ('input[type="checkbox"]:not(:checked)').length
    uncheckedCountSpan.innerHTML = uncheckedCount
  })
  var listItem = document.createElement('li');
  listItem.appendChild(paragrafo);
  list.appendChild (listItem);
  itemCountSpan.innerHTML = document.querySelectorAll
  ('input[type="checkbox"]').length
  uncheckedCountSpan.innerHTML = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length
}
