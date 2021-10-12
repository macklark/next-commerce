import { Flex, Button, Heading } from "@chakra-ui/react";
import Head from "next/head";

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
      <Button colorScheme={"messenger"} variant="solid">
        Sign In
      </Button>
    </Flex>
  );
};

export default function Home() {
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
    </>
  );
}
