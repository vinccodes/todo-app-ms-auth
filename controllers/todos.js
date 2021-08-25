const Todo = require('../models/Todo')

module.exports = {
    getTodos: async(req, res) =>{
        try {
            const todos = await Todo.find();
            res.render('todos', { todos })
        }
        catch(err) {
            console.log("Error getting todos")
            console.log(err)
        }
        
    },
    createTodos: async (req, res) =>{
        try {
            // get the todo from the form
            const newTodo = new Todo({
                todo: req.body.todo,
                completed: false
            })
            // save it to database
            await newTodo.save()
            res.redirect('/todos')
        }
        catch(err) {
            console.log(err)
        }
        
    }
}

