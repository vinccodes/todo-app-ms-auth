// get all the todoItems
const todoItem = document.querySelectorAll('span.not')
const delBtn = document.querySelectorAll('.del')
const todoComplete = document.querySelectorAll('span.completed')

Array.from(delBtn).forEach((element)=>{
    console.log('clicked delete')
    element.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((element)=>{
    element.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((element)=>{
    element.addEventListener('click', markIncomplete)
})

async function deleteTodo(){
    // get the todo's ID from the parentNode in the DOM
    // this refers to item calling the function
    const todoId = this.parentNode.dataset.id;
    
    // Our Client-Side JS should send a fetch-request to our server
    // to delete
    try {
        // perform a fetch 
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })

        const data = await response.json()
        console.log(data)
        location.reload()
        
    }
    catch(err){
        console.log(err)
    }
}

async function markComplete() {
    // get the id of the todo
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })

        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch(err) {
        console.log(err)
    }
}

async function markIncomplete(){
    // get the todo ID
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/markIncomplete', {
            method: 'put', 
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch(err){
        console.log(err)
    }
}