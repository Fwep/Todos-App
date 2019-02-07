export const allTodos = ({ todos }) => {
  return Object.keys(todos).map(id => todos[id]);
};

export function stepsByTodoId(state, todoId) {
  return Object.values(state.steps)
    .filter(step => step.todo_id = todoId);
};