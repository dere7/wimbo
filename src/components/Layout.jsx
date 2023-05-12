import { Box, Flex } from "rebass"
import Nav from "./Nav"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <Flex flexDirection='column' minHeight={"100vh"}>
    <Nav />
    <Box flex={1}>{children}</Box>
    <Footer />
  </Flex>
)
export default Layout
