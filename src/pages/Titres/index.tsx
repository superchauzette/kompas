import { Box, Flex } from "grid-styled"
import * as React from "react"
import { FaHeart } from "react-icons/fa"

const titresData = [
  { name: "one", time: "2:36" },
  { name: "I'm a mess", time: "3:22" },
  { name: "Sing", time: "1:55" },
  { name: "Don't", time: "1:55" },
  { name: "Nina", time: "1:55" },
  { name: "Photograph", time: "4:18" },
  { name: "one", time: "2:36" },
  { name: "I'm a mess", time: "3:22" },
  { name: "Sing", time: "1:55" },
  { name: "Don't", time: "1:55" },
  { name: "Nina", time: "1:55" },
  { name: "Photograph", time: "4:18" }
]

interface ITitre {
  name: string
  time: string
}

interface ITitres {
  titres?: ITitre[]
}

const Titres = ({ titres = titresData }: ITitres) => (
  <Flex
    flexDirection="column"
    style={{ overflow: "scroll" }}
    pr="20px"
    mr="-20px"
  >
    {titres.map((titre, index) => (
      <Box
        bg="#1e1e2cf2"
        mb="8px"
        py="15px"
        px="12px"
        width="450px"
        style={{ borderRadius: "5px", cursor: "pointer" }}
      >
        <Flex justifyContent="space-between">
          <Flex color="#4c87a9">
            <FaHeart color={index === 4 || index === 1 ? "#cd258f" : "grey"} />
            <Flex ml="27px">{titre.name}</Flex>
          </Flex>
          <Flex color="#4c87a9">{titre.time}</Flex>
        </Flex>
      </Box>
    ))}
  </Flex>
)

export default Titres
