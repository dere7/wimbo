import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Box, Card, Heading, Image, Link, Text } from "rebass"
import { requestDeleteSong } from "../features/songs"

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
        minWidth: 330,
        maxWidth: 420,
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
        src={song.artwork}
        width={120}
        height={120}
        sx={{ objectFit: "cover", bg: "GrayText" }}
      />
      <Box p={3} flexGrow={1}>
        <Heading>{song.title}</Heading>
        <Text>{song.artist}</Text>
      </Box>
      <Box
        title='options'
        sx={{
          position: "absolute",
          width: 25,
          height: 25,
          top: 1,
          right: 1,
          p: 1,
          m: 2,
          borderRadius: "50%",
          ":hover": {
            bg: "ButtonHighlight",
          },
          ":hover .dropdown": {
            display: "block",
          },
        }}
      >
        <svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'>
          <rect fill='none' height='256' width='256' />
          <path d='M156,128a28,28,0,1,1-28-28A28.1,28.1,0,0,1,156,128ZM128,76a28,28,0,1,0-28-28A28.1,28.1,0,0,0,128,76Zm0,104a28,28,0,1,0,28,28A28.1,28.1,0,0,0,128,180Z' />
        </svg>
        <Box
          as='div'
          className='dropdown'
          sx={{
            boxShadow: "2px 2px 2px #f5f5f5",
            position: "absolute",
            top: 26,
            right: 0,
            display: "none",
            border: "1px solid #eee",
            borderRadius: 4,
            "a:first": {},
            a: {
              borderBottom: "1px solid #eee",
              cursor: "pointer",
              display: "block",
              px: 3,
              py: 1,
              ":hover": {
                bg: "ButtonHighlight",
              },
            },
          }}
        >
          <Link onClick={() => navigate(`/songs/${song.id}/edit`)}>update</Link>
          <Link color='tomato' onClick={handleDelete}>
            delete
          </Link>
        </Box>
      </Box>
    </Card>
  )
}
export default SongItem
