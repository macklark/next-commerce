import Navbar from "../../components/Navbar";

import { Flex, Text } from "@chakra-ui/react";

import { CheckCircleIcon } from "@chakra-ui/icons";

import Head from "next/head";

const Success = () => {
  return (
    <>
      <Head>
        <title>Payment Successful !</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Next Commerce post payment success page"
        />
        <meta></meta>
      </Head>
      <Navbar />
      <Flex justifyContent="center" mt="5em" alignItems="center">
        <CheckCircleIcon color="green.400" w={10} h={10} />
        <Text ml="15px" fontSize="xl">
          Payment is successful !
        </Text>
      </Flex>
      <Flex justifyContent="center" mt="20px">
        <Text>Order ID: {Math.random().toString(36).substring(2, 10)}</Text>
      </Flex>
    </>
  );
};

export default Success;
