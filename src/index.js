// let form = document.getElementbyId('#create-task-form')
// form.addEventListener('submit', handleSubmit)

// function handleSubmit(e){
//   e.preventDefault()
//   console.log(e)
// }


// function addToDo (task) {
//   let ul = document.getElementById ("tasks")
//   let li = document.createElement('li')
//   li.textContent = task
//   ul.append(li)
// }
// addToDo ("Buy milk")
// addToDo ("Clean Car")






let form = document.getElementById('create-task-form')
form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    let input = e.target["new-task-description"].value
    toDo(input)
    form.reset()
}
function toDo(task){
  let ul = document.getElementById('tasks')
  let li = document.createElement ('li')
  li.textContent = task
  ul.append(li)
}
toDo("Get your Milk")
toDo("Get your Car")
toDo("Get your Damn")
toDo("Get your movem")
// toDo(input)

// let button = document.querySelector('button')
// button.textContent = 'Click me'


// function toGrabMilk(go){
//   console.log(go)
// }

// function add(num){
//   return num + 2
// }
// toDo("")
// add(3)