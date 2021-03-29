const express = require('express');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
let todos = require('../public/todos');


router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(todos));
});

router.post('/add', (req, res) => {
  const newTodo = {
    id: uuidv4(),
    title: req.body.title,
    completed: false
  };

  todos = [newTodo, ...todos];
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(todos));
});

router.delete('/:id/delete', (req, res) => {
  const id = req.params.id;
  todos = todos.filter(todo => todo.id !== id);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(todos));
})

router.put('/:id/update', (req, res) => {
  const id = req.params.id;
  todos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed }
    }
    return todo;
  });
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(todos));
})

module.exports = router;
