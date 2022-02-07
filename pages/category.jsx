import supabase from "../utils/supabaseClient";

import Navbar from "../components/Navbar";

import { Box, Grid, GridItem, Text, Flex, Button } from "@chakra-ui/react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const getServerSideProps = async () => {
  let { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "t-shirt");

  if (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }

  return {
    props: {
      products,
    },
  };
};

const Category = ({ products }) => {
  return (
    <>
      <Head>
        <title>Result | Next Commerce</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Category page for Next commerce" />
      </Head>
      <Navbar />
      <Box w={["100%", 11 / 12]} mx="auto" padding="4">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          gap={4}
          h="200px"
        >
          {products.map((product) => (
            <GridItem
              colSpan={1}
              rounded="md"
              boxShadow="base"
              key={product.id}
            >
              <Image
                src={product.image}
                alt={product.name}
                width="100%"
                height="70%"
                layout="responsive"
                priority="low"
              />
              <Text fontSize="2xl" px="2" pt="2">
                {product.name}
              </Text>
              <Text fontSize="lg" px="2" mb="2">
                ${product.price}
              </Text>
              <Flex justifyContent="center">
                <Link href={"/products/" + product.id} passHref>
                  <Button
                    width="100%"
                    color="white"
                    m="1em"
                    bgGradient="linear(to-r, #7928CA, #FF0080)"
                  >
                    Add to cart
                  </Button>
                </Link>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Category;
