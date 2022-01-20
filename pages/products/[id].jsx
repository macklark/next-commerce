// Next imports
import Image from "next/image";

// Supabase imports
import supabase from "../../utils/supabaseClient";

// Getting all products
import { getAllProducts } from "../../utils/helper";

// Chakra imports
import {
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";

export const getStaticPaths = async () => {
  const res = await getAllProducts();

  const paths = res.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  let { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id);

  if (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }

  return {
    props: {
      product,
    },
  };
};

const Details = ({ product }) => {
  return (
    <Box maxW="7xl" mx="auto" my="50px">
      <Grid templateColumns={{ md: "repeat(10, 1fr)" }} gap={10}>
        <GridItem colSpan={5}>
          <Image
            src={product[0].image}
            alt={product[0].name}
            width="100%"
            height="70%"
            layout="responsive"
          />
        </GridItem>
        <GridItem colSpan={5}>
          <Flex justifyContent="space-between" align="center">
            <Text fontSize="4xl" fontWeight="medium">
              {product[0].name}
            </Text>
            <Text fontSize="4xl" fontWeight="light">
              ${product[0].price}
            </Text>
          </Flex>
          <Text color="gray.400">Apperal</Text>
          <Box marginTop="3em">
            <Text textTransform="uppercase" fontSize="xl" color="gray.500">
              size
            </Text>
            <Flex mt="15px">
              {["S", "M", "L", "XL", "XXL"].map((size, index) => (
                <Text key={index} mx="1em" cursor="pointer" padding="5px">
                  {size}
                </Text>
              ))}
            </Flex>
          </Box>
          <Box marginTop="3em">
            <Text textTransform="uppercase" fontSize="xl" color="gray.500">
              Qty
            </Text>
            <Box mt="15px">
              <NumberInput size="lg" maxW={32} defaultValue={1} min={1}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
          </Box>
          <Flex justifyContent="center">
            <Button
              textTransform="uppercase"
              mt="3em"
              width="70%"
              backgroundColor="black"
              color="white"
              _hover={{
                backgroundColor: "gray.100",
                color: "black",
              }}
            >
              add to cart
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Details;
