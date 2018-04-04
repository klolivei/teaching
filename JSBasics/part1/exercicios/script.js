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
let itemCount = document.querySelectorAll('input[type="checkbox"]').length
let uncheckedCount  = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length

function newTodo (){
  var toDo  = alert("Crie sua lógica")
}
