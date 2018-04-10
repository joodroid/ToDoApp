// @flow

import type {State} from './types/State.js';

let renderApp = (state: State) => {
  let {todoItems} = state;
  let html = `
    <style media="screen" type="text/css">
      body {
        margin-top: 50px;
        padding: 0;
        font-family: 'Oswald', sans-serif;
        text-align: center;
      }

      button {
        margin-left: 20px;
        font-size: 0.8em;
        float: left;
      }

      div {
        margin: 0 auto;
        width: 280px;
        max-width: 100%;
        background-color: #e0f7fa;
      }
      input {
        float: left;
        display: inline-block;
      }

      p {
        display: inline-block;
      }

      h4 {
        float: right;
      }

      </style>

      <h2>To do App</h2>

      <div>
  `;
  for (let todoItem of todoItems) {
    if (todoItem.isDone) {
      html =
        html +
        `
          <input
            type="checkbox"
            checked="checked"
            onClick="emitEvent('toggleDone','${todoItem.id}')"
          >
          <p>${todoItem.content}</p>
          <h4 onClick="emitEvent('toggleDelete','${todoItem.id}')">x</h4>
          <hr/>

        `;
    } else {
      html =
        html +
        `
          <input
            type="checkbox"
            onClick="emitEvent('toggleDone','${todoItem.id}')"
          >
          <p>${todoItem.content}</p>
          <h4 onClick="emitEvent('toggleDelete','${todoItem.id}')">x</h4>
          <hr/>

        `;
    }
  }
  let textInput = `

      <input
        value='${state.newItem}'
        onBlur="emitEvent('typeInNewItem', this.value)"
        type='text'
      />`;

  let newID = Math.random().toString();

  let buttonComponent = `
    <button
      onClick="emitEvent('addToList','${newID}')">
      Add to List
    </button>

    </div>

    `;

  html = html + textInput + buttonComponent;
  return html;
};

export default renderApp;
