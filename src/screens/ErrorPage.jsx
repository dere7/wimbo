import { useRouteError } from "react-router-dom"
import { Flex, Heading, Text } from "rebass"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      minHeight='100vh'
    >
      <Heading mb={2} color='tomato'>
        Oops! unexcepted error occured
      </Heading>
      <Text fontSize={4}>
        <i>{error.statusText || error.message}</i>
      </Text>
    </Flex>
  )
}
export default ErrorPage
