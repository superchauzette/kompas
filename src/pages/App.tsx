import { Box, Flex } from "grid-styled"
import * as React from "react"
// import { FaHeart, FaList } from "react-icons/fa"

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
  <Flex>
    <Flex
      flexDirection="column"
      width="250px"
      bg="#2a2a38"
      style={{ minWidth: "250px", height: "100vh", zIndex: 3 }}
    >
      <Box pl="20px" color="white" mb="20px" mt="20px">
        <h4>ARTISTES</h4>
      </Box>
      <Flex px="20px" style={{ overflowY: "scroll" }} width="100%">
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
            <Title color="white">Rihanna </Title>
          </Box>
          <Main />
        </Flex>
      </Flex>
      <Flex
        style={{ height: "36vh", overflow: "scroll", zIndex: 3 }}
        width="calc(100% - 70px)"
        flexDirection="column"
        justifyContent="center"
        ml="30px"
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
)

export default App
