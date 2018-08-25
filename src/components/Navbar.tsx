import * as React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Ul = styled.ul`
  list-style: none;
`

const Li = styled.li`
  padding: 10px;
`

const NavBar = () =>
  <Ul>
    <Li>
      <Link to="/">Compas</Link>
    </Li>
    <Li>
      <Link to="/about">About</Link>
    </Li>
    <Li>
      <Link to="/topics/2">Topics</Link>
    </Li>
  </Ul>


export default NavBar
