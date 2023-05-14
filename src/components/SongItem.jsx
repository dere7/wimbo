import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Box, Card, Heading, Image, Link, Text } from "rebass"
import { requestDeleteSong } from "../features/songs"
import SongDropDown from "./SongDropDown"
import placeholder from "../static/cover.jpg"

const SongItem = ({ song }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleDelete = () => dispatch(requestDeleteSong(song.id))

  return (
    <Card
      sx={{
        display: "flex",
        borderRadius: 6,
        p: 0,
        m: 2,
        overflow: "hidden",
        width: 320,
        flexGrow: 1,
        height: 120,
        boxShadow: "none",
        position: "relative",
        ":hover": {
          boxShadow: "4px 4px 6px #ddd",
        },
      }}
    >
      <Image
        src={song.artwork || placeholder}
        width={120}
        height={120}
        sx={{ objectFit: "cover", bg: "GrayText" }}
      />
      <Box p={3} flexGrow={1}>
        <Heading>{song.title}</Heading>
        <Text>{song.artist}</Text>
      </Box>
      <SongDropDown>
        <Link onClick={() => navigate(`/songs/${song.id}/edit`)}>update</Link>
        <Link color='tomato' onClick={handleDelete}>
          delete
        </Link>
      </SongDropDown>
    </Card>
  )
}
export default SongItem
