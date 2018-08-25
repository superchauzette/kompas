import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import "./index.css"
import App from "./pages/App"
import registerServiceWorker from "./registerServiceWorker"
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
)
registerServiceWorker()
