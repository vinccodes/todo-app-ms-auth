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
    },
    markComplete: async(req, res)=>{
        try {
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }
        catch(err) {
            console.log(err)
        }
    },
    markIncomplete: async(req, res)=>{
        try {
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }
        catch(err){
            console.log(err)
        }
    },
    deleteTodos: async (req, res) =>{
        console.log(req.body.todoIdFromJSFile)
        try {
            // find the todo
            const todo = await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted it')
            
        }
        catch(err) {
            console.log(err)
        }
    }


}

