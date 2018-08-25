import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from "./App"
import "./index.css"
import registerServiceWorker from "./registerServiceWorker"

const todos = (state = [], action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          completed: false,
          id: action.id,
          text: action.text,
        }
      ]
    default:
      return state
  }
}

const store = createStore(todos)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
)
registerServiceWorker()
