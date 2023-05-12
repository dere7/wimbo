import { Box, Card, Heading, Image, Text } from "rebass"

const SongItem = ({ song }) => (
  <Card
    sx={{
      display: "flex",
      borderRadius: 6,
      p: 0,
      m: 2,
      overflow: "hidden",
      width: 330,
      height: 120,
      boxShadow: "none",
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
    <Box p={3}>
      <Heading>{song.title}</Heading>
      <Text>{song.artist}</Text>
    </Box>
  </Card>
)
export default SongItem
