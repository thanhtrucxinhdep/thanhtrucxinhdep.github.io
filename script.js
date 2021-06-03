
let todoList = [

]



let textInput = document.querySelector('.textinput input[type="text"]')
let TODO_KEY = 'TODO_APP'
let addBtn = document.querySelector('.textinput button')
let content = document.querySelector('.content')
let Data = JSON.parse(localStorage.getItem(TODO_KEY)) || []

textInput.onchange = (e) => {
    todoList.push( {name: e.target.value, isCompleted: false } )
    e.target.value = ''
}

function render() {
    todoList = JSON.parse(localStorage.getItem(TODO_KEY)) || []
    let result = todoList.map((todo,index) => `
    <div class="todo-list" data-id = "${index}">
    <ul class="todo-list-menu">
        <li class="todo-item" data-id="${index}">
            ${todo.name}
        </li>
        <div class="icons">
            <i class="fas fa-times" data-id="${index}"></i>
            <i class="far fa-check-circle" data-id="${index}"></i>
        </div>
    </ul>
    </div>
    `)
    content.innerHTML = result.join('')

    let items = document.querySelectorAll('li')
    let completeBtns = document.querySelectorAll('.icons i:last-child')
    let delBtns = document.querySelectorAll('.icons i:first-child')
    
    delBtns.forEach(delBtn => {
        delBtn.onclick = e => {
            const todoText = items[e.target.dataset.id].innerText
            todoList = todoList.filter(todo => todo.name !== todoText)
            localStorage.setItem(TODO_KEY, JSON.stringify(todoList))
            items[e.target.dataset.id].parentElement.parentElement.classList.add('deleted')
            items[e.target.dataset.id].parentElement.parentElement.addEventListener('transitionend', function() {
                render()
            })
        }
    })

    completeBtns.forEach(completeBtn => {
        completeBtn.onclick = (e) => {
            todoList[e.target.dataset.id].isCompleted = true;
            localStorage.setItem(TODO_KEY, JSON.stringify(todoList))
            isChecked(items)
        }
    })
    isChecked(items)

}
render()
addBtn.onclick = () => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoList))
    render()
}


function isChecked(items) {
    todoList.forEach((todo,index) => {
        if (todo.isCompleted === true){
            items[index].classList.add('completed')
        }
    })
}   