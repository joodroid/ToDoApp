// @flow

import type {State} from './types/State.js';

let initialState: State = {
  todoItems: [
    {id: '4', content: 'Buy Oreos', isDone: false},
    {id: '9', content: 'Teach Bootcamp', isDone: false},
    {id: '1', content: 'Clean Laptop', isDone: false},
  ],
  newItem: '',
};

export default initialState;
