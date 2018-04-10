// @flow

import eventHandlers from '../eventHandlers.js';

// here, we test the output, which is the "State"
// input old-state and the change, output will be new-state

it('should increaseCount', () => {
  let state = {
    todoItems: [],
    newItem: '',
  };
  let newState = eventHandlers.increaseCount(state, '0');
  expect(newState).toEqual({
    todoItems: [],
    newItem: '',
  });
});
