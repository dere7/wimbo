import { Box, Text } from "rebass"
import Container from "./Container"

const Footer = () => (
  <Box as='footer' sx={{ borderTop: "1px solid #ccc", p: [2, 3, 4] }}>
    <Container>
      <Text textAlign='center'>
        &copy;2023. Made with 💙 by <a href='https://github.com/dere7'>Dereje7</a>.
      </Text>
    </Container>
  </Box>
)
export default Footer
