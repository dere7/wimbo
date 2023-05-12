import { Heading } from "rebass"
import SongsList from "../components/SongsList"

const Home = () => (
  <>
    <Heading as='h1' mb={2} color='primary'>
      Popular Songs
    </Heading>
    <SongsList />
  </>
)
export default Home
