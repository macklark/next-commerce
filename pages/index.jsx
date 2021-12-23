// Nextjs imports
import Head from "next/head";
import Image from "next/image";

// Component imports
import Navbar from "../components/Navbar";

// Chakra imports
import { Grid, GridItem, Box, Text, Button, Flex } from "@chakra-ui/react";

const Layout = () => (
  <Box w={["100%", 11 / 12]} mx="auto" padding="4">
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        lg: "repeat(7, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={4}
      h="200px"
    >
      <GridItem
        colSpan={2}
        bg="tomato"
        display={{ base: "none", lg: "grid", md: "none" }}
      />
      <GridItem colSpan={5}>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={4}
          h="100px"
        >
          <GridItem colSpan={1} rounded="md" boxShadow="base">
            <Image
              src="/blueshirt.jpg"
              alt="blue shirt"
              width="100%"
              height="70%"
              layout="responsive"
              priority="low"
            />
            <Text fontSize="2xl" px="2" pt="2">
              Blue T-shirt
            </Text>
            <Text fontSize="lg" px="2">
              $6.99
            </Text>
            <Flex justifyContent="center">
              <Button
                width="100%"
                margin="2"
                color="white"
                bgGradient="linear(to-r,#7928CA, #FF0080 )"
              >
                Add to cart
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  </Box>
);

const Home = () => (
  <>
    <Head>
      <title>Next Commerce</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    <Layout />
  </>
);

export default Home;
