import { Flex } from "rebass"
import Nav from "./Nav"
import Footer from "./Footer"
import Container from "./Container"

const Layout = ({ children }) => (
  <Flex flexDirection='column' minHeight={"100vh"} variant='styles.root'>
    <Nav />
    <Container w={1} my={4} flex={1} px={[3]}>
      {children}
    </Container>
    <Footer />
  </Flex>
)
export default Layout
