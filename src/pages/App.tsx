import { Box, Flex } from "grid-styled"
import * as React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import styled from "styled-components"
import Albums from "./Albums"
import Artistes from "./Artistes"
import Main from "./Main"

const imageURL = {
  earpod:
    "https://images.pexels.com/photos/802958/pexels-photo-802958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  girl:
    "https://images.pexels.com/photos/1343257/pexels-photo-1343257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  micro:
    "https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
}

const Title = styled.h2`
  margin-top: 20px;
  color: ${props => props.color};
`

interface IBgImgProps {
  url: string
}

const BgImg = styled(Flex)`
  background-image: ${(props: IBgImgProps) => `url(${props.url})`};
  background-repeat: no-repeat, repeat;
  background-size: cover;
  filter: blur(5px);
`

const App = () => (
  <Router>
    <Flex>
      <Flex
        flexDirection="column"
        width="250px"
        bg="#2a2a38"
        style={{ minWidth: "250px", height: "100vh", zIndex: 3 }}
      >
        <Box mt="20px" mb="30px" pl="20px" color="white">
          <h3>Playlist</h3>
          <h3>Favories</h3>
        </Box>
        <Box pl="20px" color="white" mb="30px">
          <h3>Artistes</h3>
        </Box>

        <Flex style={{ overflow: "scroll" }} width="100%">
          <Artistes />
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        width="calc(100%-250px)"
        style={{ overflow: "hidden" }}
      >
        <Flex style={{ height: "64vh", zIndex: 3 }}>
          <Flex flexDirection="column" px="40px" width="100%">
            <Box mb="50px">
              <Title color="white">Rihanna</Title>
            </Box>
            <Main />
          </Flex>
        </Flex>
        <Flex
          style={{ height: "36vh", overflow: "scroll", zIndex: 3 }}
          width="100%"
          flexDirection="column"
          justifyContent="center"
        >
          <Albums />
        </Flex>
        <BgImg
          url={imageURL.micro}
          ml="-10px"
          mt="-10px"
          width="100%"
          style={{ height: "106%", position: "fixed" }}
        />
      </Flex>
    </Flex>
  </Router>
)

export default App
