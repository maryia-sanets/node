const { v4: uuidv4 } = require('uuid');

const todos = [{
  id: uuidv4(),
  title: "samsepi0l",
  completed: false
}, {
  id: uuidv4(),
  title: "D0loresH4ze",
  completed: true
}];

module.exports = todos;