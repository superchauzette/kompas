import { Flex } from "grid-styled"
import * as React from "react"
import styled from "styled-components"

const albumsData = [
  {
    annee: 2016,
    artiste: "Majid Jordan",
    name: "Majid Jordan",
    url:
      "https://test-12cdc.firebaseapp.com/musik/Majid_Jordan-Majid_Jordan-2016/00-majid_jordan-majid_jordan-web-2016.jpg"
  },
  {
    annee: 2013,
    artiste: "Stromae",
    name: "Racine Carré",
    url:
      "https://test-12cdc.firebaseapp.com/musik/Stromae%20-%20Racine%20Carr%C3%A9e%20%20(2013)/00-stromae-racine_carree-(web)-fr-2013.jpg"
  },
  {
    annee: 2015,
    artiste: "Justin Bieber",
    name: "Purpose",
    url:
      "https://test-12cdc.firebaseapp.com/musik/Justin%20Bieber%20-%20Purpose%20(2015)/Folder.jpg"
  },
  {
    annee: 2013,
    artiste: "Selahsue",
    name: "Reason",
    url: "http://imados.fr/content/4/1/3/604132/B9-CtDMIMAAMFvo.jpg"
  },
  {
    annee: 2011,
    artiste: "Orelsan",
    name: "Le chant des sirenes",
    url:
      "http://raprnbleblog.files.wordpress.com/2011/08/orelsan-le-chant-des-sirenes.jpg"
  },
  {
    annee: 2013,
    artiste: "James Blunt",
    name: "Moon landing",
    url:
      "https://media.rtl2.fr/online/image/2013/0904/7764293245_james-blunt.jpg"
  },
  {
    annee: 2014,
    artiste: "Kendji Girac",
    name: "Gossip",
    url:
      "http://www.gossip.fr/wp-content/uploads/news/2014-06/photo-kendji-thevoice-la-pochette-de-son-album-enfin-devoilee_539ab5245b7f7.png"
  }
]

interface IAlbum {
  annee: number
  artiste: string
  name: string
  url: string
}

interface IProps {
  albums?: IAlbum[]
}

const AlbumName = styled.p`
  color: white;
  font-weight: 600;
  margin-top: 10px;
`

const AlbumAnnee = styled.p`
  color: #ffffff85;
`
const Albums = ({ albums = albumsData }: IProps) => (
  <Flex style={{ height: "100%" }} alignItems="center" width="100%">
    {albums.map(album => (
      <Flex mr="20px" flexDirection="column" style={{ cursor: "pointer" }}>
        <img src={album.url} width="180px" height="180px" />
        <AlbumName>{album.name}</AlbumName>
        <AlbumAnnee>{album.annee}</AlbumAnnee>
      </Flex>
    ))}
  </Flex>
)

export default Albums
