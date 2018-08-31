import { Flex } from "grid-styled"
import * as React from "react"
import { FaCircle } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const artistesData = [
  { name: "Rihanna" },
  { name: "Ed Sheran" },
  { name: "James Blunt" },
  { name: "Stromae" },
  { name: "Orelsan" },
  { name: "Majid Jordan" },
  { name: "Justin Bieber" },
  { name: "Les fantaisites de carrfour" },
  { name: "Jay Z" },
  { name: "Kayne West" },
  { name: "Drake" },
  { name: "Sizzla" },
  { name: "Damian Marley" },
  { name: "Beyonce" }
]

interface IArtiste {
  name: string
}

const ArtisteWrapper = styled(Flex)`
  width: 100%;
  color: #d6d6d8;
  cursor: pointer;

  :hover {
    background-color: #6dcbfa;
  }
`

const Artiste = ({ name }: IArtiste) => (
  <ArtisteWrapper p="22px" mb="10px" alignItems="center">
    <FaCircle size="0.3rem" color="#6dcbfa" style={{ marginRight: "20px" }} />
    <NavLink
      to={`/artiste/${name}`}
      style={{ color: "white", textDecoration: 'none'}}
      activeStyle={{
        color: "rgb(205, 37, 143)",
        fontWeight: "bold",
      }}
    >
      {name}
    </NavLink>
  </ArtisteWrapper>
)

interface IArtistes {
  artistes?: IArtiste[]
}

const Artites = ({ artistes = artistesData }: IArtistes) => (
  <Flex flexDirection="column" width="100%">
    {artistes.map((artiste: IArtiste) => (
      <Artiste key={"key-" + artiste.name} {...artiste} />
    ))}
  </Flex>
)

export default Artites
