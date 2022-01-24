// Nextjs imports
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Component imports
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// Chakra imports
import {
  Grid,
  GridItem,
  Box,
  Text,
  Button,
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  Spinner,
} from "@chakra-ui/react";

// SWR imports
import useSWR, { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
// For development
// const API = "http://localhost:3000/api/products/getAll";
const API = `${process.env.NEXT_PUBLIC_SERVER_SIDE_URL}/api/products/getAll`;

export async function getServerSideProps() {
  const productsInfo = await fetcher(API);
  return {
    props: {
      fallback: {
        [API]: productsInfo,
      },
    },
  };
}

const Layout = ({ data }) => (
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
      <GridItem colSpan={2} display={{ base: "none", md: "none", lg: "grid" }}>
        <Sidebar />
      </GridItem>
      <GridItem colSpan={5}>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={4}
          h="100px"
        >
          {data.products.map((product) => {
            return (
              <GridItem
                colSpan={1}
                rounded="md"
                boxShadow="base"
                key={product.id}
              >
                <Image
                  src={product.image}
                  alt="blue shirt"
                  width="100%"
                  height="70%"
                  layout="responsive"
                  priority="low"
                />
                <Text fontSize="2xl" px="2" pt="2">
                  {product.name}
                </Text>
                <Text fontSize="lg" px="2">
                  ${product.price}
                </Text>
                <Flex justifyContent="center">
                  <Link href={"/products/" + product.id} passHref>
                    <Button
                      width="100%"
                      margin="2"
                      color="white"
                      bgGradient="linear(to-r,#7928CA, #FF0080 )"
                    >
                      Add to cart
                    </Button>
                  </Link>
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
      </GridItem>
    </Grid>
  </Box>
);

const Home = () => {
  const { data, error } = useSWR(API);

  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Error occured</AlertTitle>
      </Alert>
    );

  return (
    <>
      <Head>
        <title>Next Commerce</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      {data ? (
        <Layout data={data} />
      ) : (
        <Flex justifyContent="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}
    </>
  );
};

export default function SWRwrapper({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Home />
    </SWRConfig>
  );
}
