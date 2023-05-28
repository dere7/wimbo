import { Input, Label } from "@rebass/forms"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Box, Button, Card, Flex, Heading } from "rebass"
import { requestAddSongs, requestUpdateSong } from "../features/songs"
import { useNavigate } from "react-router-dom"

const SongForm = ({ song }) => {
  const [title, setTitle] = useState(song?.title || "")
  const [artist, setArtist] = useState(song?.artist || "")
  const [artwork, setArtwork] = useState(song?.artwork || "")

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
            <Label htmlFor='title'>Title*</Label>
            <Input
              id='title'
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>
          <Box py={2}>
            <Label htmlFor='artist'>Artist*</Label>
            <Input
              id='artist'
              value={artist}
              required
              onChange={(e) => setArtist(e.target.value)}
            />
          </Box>
          <Box py={2}>
            <Label htmlFor='cover'>Cover picture url</Label>
            <Input
              id='cover'
              value={artwork}
              onChange={(e) => setArtwork(e.target.value)}
            />
          </Box>
          <Flex>
            <Button
              sx={{
                cursor: "pointer",
                mt: 2,
                ml: "auto",
                ":hover": {
                  opacity: 0.9,
                },
              }}
            >
              {song ? "Add" : "Update"}
            </Button>
          </Flex>
        </Box>
      </Card>
    </Flex>
  )
}
export default SongForm
