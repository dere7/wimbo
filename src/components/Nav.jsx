import { Box, Button, Flex, Heading, Link } from "rebass"
import Container from "./Container"
import { Link as RouterLink, useNavigate } from "react-router-dom"

const Nav = () => {
  const navigate = useNavigate()

  return (
    <Box bg='white' p={2}>
      <Container>
        <Flex justifyContent='space-between' alignItems='center'>
          <RouterLink to='/'>
            <Link as='div' variant='nav'>
              <Heading fontSize={[3, 4, 5]}>Wimbo</Heading>
            </Link>
          </RouterLink>
          <Button
            onClick={() => navigate("/songs/add")}
            variant='outline'
            sx={{ cursor: "pointer", ":hover": { bg: "ButtonHighlight" } }}
          >
            Add Song
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
export default Nav
