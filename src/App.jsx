import { Box, Heading } from "rebass"
import Layout from "./components/Layout"
import { Global, css } from "@emotion/react"
import SongsList from "./components/SongsList"

function App() {
  return (
    <Layout>
      <Global
        styles={css`
          body {
            background-color: #eee;
            margin: 0;
            padding: 0;
            font-family: system-ui, sans-serif;
          }
        `}
      />
      <Box m={4} variant='styles.root'>
        <Heading as='h1' mb={2} color='primary'>
          Popular Songs
        </Heading>
        <SongsList />
      </Box>
    </Layout>
  )
}

export default App
