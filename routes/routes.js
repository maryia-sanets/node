const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { HEADER } = require('../constant');
const { NON_EXISTENT_ID_MESSAGE } = require('../constant');

const router = express.Router();

let todos = require('../public/todos');
const isExistedId = require('../utils');

router.get('/', (req, res) => {
  res.set(HEADER);
  res.send(JSON.stringify(todos));
  res.end();
});

router.post('/add', (req, res) => {
  const newTodo = {
    id: uuidv4(),
    title: req.body.title,
    completed: false
  };

  todos = [newTodo, ...todos];
  res.set(HEADER);
  res.send(JSON.stringify(todos));
});

router.delete('/:id/delete', (req, res) => {
  try {
    const id = req.params.id;
    if (isExistedId(todos, id)) {
      todos = todos.filter(todo => todo.id !== id);
      res.set(HEADER);
      return res.send(JSON.stringify(todos));
    }
    return res.status(404).json(NON_EXISTENT_ID_MESSAGE);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }

})

router.put('/:id/update', (req, res) => {
  try {
    const id = req.params.id;
    if (isExistedId(todos, id)) {
      todos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo;
      });
      res.set(HEADER);
      return res.send(JSON.stringify(todos));
    }
    return res.status(404).json(NON_EXISTENT_ID_MESSAGE);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
})

module.exports = router;
