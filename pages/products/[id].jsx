import { getAllProducts, getProductById } from "../../lib/helper";
import Head from "next/head";

import { Box, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";

export const getStaticPaths = async () => {
  const products = await getAllProducts();
  const paths = products.map((product) => ({
    params: {
      id: product.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const product = await getProductById(params.id);
  return {
    props: {
      product,
    },
  };
};

export default function ProductPage({ product }) {
  return (
    <Box maxW="7xl" mx="auto">
      <Head>
        <title>{product.title} | Next-commerce</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Next commerce" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SimpleGrid columns={{ base: "1", lg: "2" }}>
        <Box my="20px">
          <Image
            src={product.image}
            alt={product.title}
            draggable="false"
            borderRadius={{ base: "md", md: "xl" }}
            boxSize="600px"
            objectFit="cover"
          />
        </Box>
        <Box my="70px" mx={{ base: "10", lg: "0" }}>
          <Text fontSize="4xl" fontWeight="semibold">
            {product.title}
          </Text>
          <Text color="gray.400" fontSize="2xl">
            ${product.price}
          </Text>
          <Text my="40px">{product.description}</Text>
          <Button colorScheme="blue" w={{ base: "full", lg: "sm" }}>
            Add to cart
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
