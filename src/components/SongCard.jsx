import { Box, Card, Flex, Heading, Image, Text } from "rebass"

const ProductCard = ({ product }) => (
  <Card
    sx={{
      borderRadius: 6,
      p: 0,
      m: 2,
      overflow: "hidden",
      width: 361,
      ":hover": {
        boxShadow: "3px 3px 6px #ddd",
      },
    }}
  >
    <Image
      src={product.images[0]}
      width={361}
      height={161}
      sx={{ objectFit: "cover", bg: "GrayText" }}
    />
    <Box p={3}>
      <Heading>{product.title}</Heading>
      <Text>{product.description}</Text>
      <Flex alignItems='center'>
        <Box bg='gray' sx={{ px: 2, py: 1, borderRadius: 16, fontSize: 1 }}>
          {product.category}
        </Box>

        <Text
          flex='1'
          fontSize={[4, 5]}
          mt={2}
          textAlign='right'
          fontWeight='light'
          fontFamily='monospace'
        >
          ${product.price}
        </Text>
      </Flex>
    </Box>
  </Card>
)
export default ProductCard
