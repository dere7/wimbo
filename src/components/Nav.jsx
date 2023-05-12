import { Box, Button, Flex, Heading } from "rebass"
import Container from "./Container"

const Nav = () => (
  <Box bg='white' p={2}>
    <Container>
      <Flex justifyContent='space-between' alignItems='center'>
        <Heading fontSize={[3, 4, 5]}>Wimbo</Heading>
        <Button
          variant='outline'
          sx={{ cursor: "pointer", ":hover": { bg: "ButtonHighlight" } }}
        >
          Add Song
        </Button>
      </Flex>
    </Container>
  </Box>
)
export default Nav
