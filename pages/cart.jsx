//Nextjs imports
import Image from "next/image";
import Head from "next/head";

//auth0 imports
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

// component imports
import Navbar from "../components/Navbar";

// chakra imports
import {
  Box,
  Text,
  Grid,
  GridItem,
  Spinner,
  Flex,
  IconButton,
} from "@chakra-ui/react";

//swr imports
import useSWR from "swr";

// React icons
import { FiTrash2 } from "react-icons/fi";

// supabase imports
import supabase from "../utils/supabaseClient";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Cart = () => {
  const { data, error } = useSWR("/api/products/getCart", fetcher, {
    refreshInterval: 1000,
  });

  if (error) {
    return (
      <Box>
        <Text>Error: {error.message}</Text>
      </Box>
    );
  }

  const deleteHandler = async (id) => {
    const { data, error } = await supabase.from("cart").delete().eq("id", id);

    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Next Commerce | Cart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Next Commerce cart page" />
        <meta></meta>
      </Head>
      <Navbar />
      <Box maxW="7xl" mx="auto" my={{ md: "50px" }}>
        <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase">
          my cart
        </Text>

        <Grid templateColumns={{ md: "repeat(10, 1fr)" }} gap={10}>
          <GridItem colSpan={5} margin={{ base: "2em", md: "0em" }}>
            {data ? (
              data.cart.map((product) => {
                return (
                  <Box key={product.id} mt="20px">
                    <Flex>
                      <Image
                        src={product.image_url}
                        alt={product.name}
                        width="200%"
                        height="140%"
                        priority="low"
                      />
                      <Box ml="20px">
                        <Text fontSize="lg">{product.name}</Text>
                        <Text fontSize="md" fontWeight="light" mt="5px">
                          Size - {product.size}
                        </Text>
                        <Text>${product.price}</Text>
                        <IconButton
                          aria-label="remove from cart"
                          icon={<FiTrash2 />}
                          colorScheme="red"
                          mt="30px"
                          onClick={() => deleteHandler(product.id)}
                        />
                      </Box>
                    </Flex>
                  </Box>
                );
              })
            ) : (
              <Box mt="20px">
                <Spinner />
              </Box>
            )}
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default withPageAuthRequired(Cart);
