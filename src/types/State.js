// @flow

type TodoThings = {
  id: string,
  content: string,
  isDone: boolean,
};

export type State = {
  todoItems: Array<TodoThings>,
  newItem: string,
};
