import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "typeface-roboto"
import "./index.css"
import App from "./pages/App"
import registerServiceWorker from "./registerServiceWorker"
import configureStore from "./store"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route  path="/artiste/:artisteName" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
)
registerServiceWorker()
