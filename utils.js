const isExistedId = (todos, id) => {
  return !!todos.find(todo => {
    return todo.id === id;
  });
}

module.exports = isExistedId;