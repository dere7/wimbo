import { useLoaderData } from "react-router-dom"
import songsService from "../services/songs"
import SongForm from "../components/SongForm"

export const loader = async ({ params }) => {
  const song = await songsService.getSong(params.id)
  return song
}

const UpdateSong = () => {
  const song = useLoaderData()
  return <SongForm song={song} />
}
export default UpdateSong
