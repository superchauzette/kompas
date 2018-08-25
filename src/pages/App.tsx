import { Flex } from "grid-styled"
import * as React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import NavBar from "../components/Navbar"
import About from "./Home/About"
import Home from "./Home/Home"
import Topic from "./Topic/Topic"

const Main = () => (
  <>
    <Route exact={true} path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics/:topicId" component={Topic} />
  </>
)

const App = () => (
  <Router>
    <Flex style={{ height: "100vh" }}>
      <Flex flexDirection="column" bg="lightblue" width="150px" alignItems="center" pt="50px">
        <NavBar />
      </Flex>
      <Flex flexDirection="column" bg="grey" width="100%" p="20px">
        <Main />
      </Flex>
    </Flex>
  </Router>
)

export default App
