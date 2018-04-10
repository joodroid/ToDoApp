// @flow

import type {State} from './types/State.js';

type UpdateFunction = (State) => State;
type EventHandlerObject = {[eventName: string]: UpdateFunction};

// eventHandlers is just a set of Object
// the Object inside eventHandlers is a bunch of function to handle specified case

// the return of these set object of function is a new State

let eventHandlers: EventHandlerObject = {
  toggleDone: (oldState, id) => {
    let {todoItems} = oldState;
    let newTodoItems = [];
    for (let todoItem of todoItems) {
      if (id === todoItem.id) {
        newTodoItems.push({...todoItem, isDone: !todoItem.isDone});
      } else {
        newTodoItems.push({...todoItem});
      }
    }
    // return Object.assign({}, oldState, {todoItems: newTodoItems});
    return {...oldState, todoItems: newTodoItems};
  },

  typeInNewItem: (oldState, textInput) => {
    return {...oldState, newItem: textInput};
  },

  toggleDelete: (oldState, id) => {
    let newTodoItems = [];
    let {todoItems} = oldState;
    for (let todoItem of todoItems) {
      if (id !== todoItem.id) {
        newTodoItems.push({...todoItem});
      }
    }
    return {...oldState, todoItems: newTodoItems};
  },

  addToList: (oldState, id) => {
    if (oldState.newItem !== '' && id != null) {
      let newItemList = {
        id,
        content: oldState.newItem,
        isDone: false,
      };
      return {
        ...oldState,
        todoItems: [...oldState.todoItems, newItemList],
        newItem: '',
      };
    } else {
      return oldState;
    }
  },
};

export default eventHandlers;
