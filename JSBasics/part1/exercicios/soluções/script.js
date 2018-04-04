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

function newTodo() {
//creating checkBox element
let cb = document.createElement( "input" )
cb.type = "checkbox"
cb.setAttribute( "class", classNames.TODO_CHECKBOX)
cb.checked = false;
// create deleteButton
let bt = document.createElement("button")
bt.innerHTML = "delete"
bt.setAttribute ("class" , classNames.TODO_DELETE)

// creating toDoItem element
let paragraph = document.createElement('p')
paragraph.appendChild(cb)
paragraph.setAttribute("class", classNames.TODO_ITEM)
//asking user for toDo
let toDo = prompt('What do you have to do?')
paragraph.innerHTML += toDo
paragraph.appendChild(bt)
// everytime that check changes refresh uncheckedCountSpan
paragraph.addEventListener('change', function () {
  uncheckedCount  = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length
  uncheckedCountSpan.innerHTML = uncheckedCount
})
  // deleteButton functionality
bt.addEventListener('click', function(){
  paragraph.remove();
  itemCount = document.querySelectorAll('input[type="checkbox"]').length
  uncheckedCount  = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length
  itemCountSpan.innerHTML = itemCount
  uncheckedCountSpan.innerHTML = uncheckedCount
})
	// if the user gives a toDo, append to the list
if (toDo){
  let toDoItem = document.createElement( "ul" )
  toDoItem.appendChild(paragraph)
  list.appendChild(toDoItem)
  itemCount = document.querySelectorAll('input[type="checkbox"]').length
  uncheckedCount  = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length
}
// update itemCountSpan and uncheckedCountSpan
itemCountSpan.innerHTML = itemCount
uncheckedCountSpan.innerHTML = uncheckedCount
console.log(list)
}
