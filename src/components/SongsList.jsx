import { useDispatch, useSelector } from "react-redux"
import { Flex, Text } from "rebass"
import SongItem from "./SongItem"
import { useEffect } from "react"
import { requestFetchSongs } from "../sagas"

const SongsList = () => {
  const songs = useSelector((state) => state.songs)
  const { loading: isLoading, error } = useSelector((state) => state.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestFetchSongs())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (error) return <Text sx={{ color: "tomato", p: 4 }}>{error}</Text>
  if (isLoading || !songs) return <p>Loading...</p>

  return (
    <Flex flexWrap='wrap'>
      {songs.map((song) => (
        <SongItem key={song.id} song={song} />
      ))}
    </Flex>
  )
}
export default SongsList
