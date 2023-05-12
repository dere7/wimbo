import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Box, Flex, Heading } from "rebass"
import ProductCard from "./components/SongCard"
import Container from "./components/Container"
import Layout from "./components/Layout"
import { requestFetchProduct } from "./sagas"
import { Global, css } from "@emotion/react"

function App() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.allProducts?.products)

  useEffect(() => {
    dispatch(requestFetchProduct())
  }, [])

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
        <Container>
          <Heading as='h1' mb={2} color='primary'>
            Products
          </Heading>
          {!products ? (
            <p>Loading...</p>
          ) : (
            <Flex flexWrap={"wrap"}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Flex>
          )}
        </Container>
      </Box>
    </Layout>
  )
}

export default App
