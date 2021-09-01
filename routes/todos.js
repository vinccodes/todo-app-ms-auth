const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')

router.get('/', todosController.getTodos)
router.post('/', todosController.createTodos)
router.put('/markComplete', todosController.markComplete)
router.put('/markIncomplete', todosController.markIncomplete)
router.delete('/deleteTodo', todosController.deleteTodos)

module.exports = router