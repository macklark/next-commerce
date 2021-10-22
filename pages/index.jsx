import { Flex, Button, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

import Dashboard from "../components/dashboard";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const products = await prisma.product.findMany();
  return {
    props: {
      products,
    },
  };
}

const Navbar = () => {
  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      align="center"
      mx="auto"
      w="100%"
      py="4"
      px="6"
      bgColor={"twitter.400"}
    >
      <Heading color={"white"} size="lg">
        Next-commerce
      </Heading>
      <Flex align="center">
        <Link href="/">
          <Button colorScheme={"messenger"} variant="solid" mr="5">
            Sign In
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Next-commerce | Home</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Ganesh portfolio" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Dashboard products={products} />
    </>
  );
}
