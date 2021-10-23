import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Button,
  AspectRatio,
  Image,
} from "@chakra-ui/react";

export default function Dashboard({ products }) {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "14" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <p>Shake it up</p>
      <SimpleGrid
        columns={{ base: "1", md: "2", lg: "3", xl: "4" }}
        columnGap={{ base: "4", md: "6" }}
        rowGap={{ base: "8", md: "10" }}
      >
        {products.map((product) => {
          return (
            <Stack spacing={{ base: "4", md: "5" }} key={product.id}>
              <Box position="relative">
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    draggable="false"
                    borderRadius={{ base: "md", md: "xl" }}
                  />
                </AspectRatio>
              </Box>
              <Stack>
                <Stack spacing="1">
                  <Text fontWeight="medium" color="gray.700">
                    {product.title}
                  </Text>
                  <Text as="span" fontWeight="medium" color="gray.400">
                    ${product.price}
                  </Text>
                </Stack>
                <Stack align="center">
                  <Button colorScheme="blue" isFullWidth>
                    Order now
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
