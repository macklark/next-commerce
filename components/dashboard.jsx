import { Box, SimpleGrid, Stack, Text, Button, Image } from "@chakra-ui/react";

import Link from "next/link";

export default function Dashboard({ products }) {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "14" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <SimpleGrid
        columns={{ base: "1", md: "2", lg: "3", xl: "4" }}
        columnGap={{ base: "4", md: "6" }}
        rowGap={{ base: "8", md: "10" }}
      >
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Stack spacing={{ base: "4", md: "5" }} key={product.id}>
                <Box position="relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    draggable="false"
                    boxSize="315px"
                    objectFit="cover"
                    borderRadius={{ base: "md", md: "xl" }}
                  />
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
                    <Link href={`/products/${product.id}`}>
                      <Button colorScheme="blue" isFullWidth>
                        Order now
                      </Button>
                    </Link>
                  </Stack>
                </Stack>
              </Stack>
            </div>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
