//auth0 imports
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

// component imports
import Navbar from "../components/Navbar";

// chakra imports
import { Box, Text, Grid, GridItem, Spinner } from "@chakra-ui/react";

//swr imports
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Cart = () => {
  const { data, error } = useSWR("/api/products/getCart", fetcher);

  if (error) {
    return (
      <Box>
        <Text>Error: {error.message}</Text>
      </Box>
    );
  }

  return (
    <>
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
                  <Box key={product.id}>
                    <Text>{product.name}</Text>
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
