import { Flex } from "grid-styled"
import * as React from "react"
import Player from "../Player"
import Titres from "../Titres"

interface IAlbum {
  annee: number
  artiste: string
  name: string
  url: string
}

interface IProps {
  album?: IAlbum
}

const albumData = {
  annee: 2012,
  artiste: "Rihanna",
  name: "Stay",
  url: "http://www.chartsinfrance.net/style/breves/2/photo_1361547790.jpg"
}

const PlayingAlbum = ({ album = albumData }: IProps) => (
  <Flex alignItems="flex-end">
    <div>
      <img src={album.url} width="300px" />
    </div>
    <Flex
      flexDirection="column"
      justifyContent="space-around"
      px="10px"
      color="white"
    >
      <p style={{ marginBottom: "5px", fontWeight: 600, fontSize: "18px" }}>
        {album.name} - {album.annee}
      </p>
    </Flex>
  </Flex>
)

const Main = () => (
  <Flex width="100%" justifyContent="space-between">
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      width="100%"
      mr="70px"
    >
      <PlayingAlbum  />
      <Player />
    </Flex>
    <Flex>
      <Titres />
    </Flex>
  </Flex>
)

export default Main
