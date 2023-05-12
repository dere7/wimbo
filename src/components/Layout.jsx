import { Flex } from "rebass"
import Nav from "./Nav"
import Footer from "./Footer"
import Container from "./Container"

const Layout = ({ children }) => (
  <Flex flexDirection='column' minHeight={"100vh"}>
    <Nav />
    <Container w={1} flex={1}>
      {children}
    </Container>
    <Footer />
  </Flex>
)
export default Layout
