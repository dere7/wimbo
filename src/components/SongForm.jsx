import { Input, Label } from "@rebass/forms"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Box, Button, Card, Flex, Heading } from "rebass"
import { requestAddSongs, requestUpdateSong } from "../features/songs"
import { useNavigate } from "react-router-dom"

const SongForm = ({ song }) => {
  const [title, setTitle] = useState(song?.title)
  const [artist, setArtist] = useState(song?.artist)
  const [artwork, setArtwork] = useState(song?.artwork)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = { title, artist, artwork }
    if (song) dispatch(requestUpdateSong({ id: song.id, data }))
    else dispatch(requestAddSongs(data))
    navigate("/")
  }
  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      height='100%'
    >
      <Card sx={{ bg: "white", minWidth: 320, p: 4, borderRadius: 4 }}>
        <Heading textAlign='center'>{song ? "Update" : "Add"} Song</Heading>
        <Box as='form' onSubmit={handleSubmit}>
          <Box py={2}>
            <Label htmlFor='title'>Title</Label>
            <Input
              id='title'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>
          <Box py={2}>
            <Label htmlFor='artist'>Artist</Label>
            <Input
              id='artist'
              name='Artist'
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />
          </Box>
          <Box py={2}>
            <Label htmlFor='cover'>Cover picture</Label>
            <Input
              id='cover'
              name='picture'
              value={artwork}
              onChange={(e) => setArtwork(e.target.value)}
            />
          </Box>
          <Flex>
            <Box py={2} ml='auto'>
              <Button ml='auto'>Add</Button>
            </Box>
          </Flex>
        </Box>
      </Card>
    </Flex>
  )
}
export default SongForm
