import { Box, Flex } from "grid-styled"
import * as React from "react"
import { FaPlayCircle, FaStepBackward, FaStepForward } from "react-icons/fa"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  height: 5px;
  width: 100%;
`

interface ICursorprops {
  pourcentage: number
}

const Cursor = styled.div`
  background-color: #6dcbfa;
  height: 100%;
  border-radius: 5px;
  width: ${(props: ICursorprops) => props.pourcentage}%;
`

const Player = () => (
  <Flex flexDirection="column" width="100%">
    <Flex alignItems="center">
      <Flex alignItems="center">
        <FaStepBackward size="1rem" color="white" />
        <Box mx="15px">
          <FaPlayCircle size="2rem" color="#6dcbfa" />
        </Box>
        <FaStepForward size="1rem" color="white" />
      </Flex>
      <Box ml="35px" color="white">
        <p>I'm a Mess</p>
      </Box>
    </Flex>
    <Box mt="15px">
      <Wrapper>
        <Cursor pourcentage={80} />
      </Wrapper>
    </Box>
  </Flex>
)

export default Player
