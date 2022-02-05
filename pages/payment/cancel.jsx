import Navbar from "../../components/Navbar";

import { Flex, Text } from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";

import Head from "next/head";

const Cancel = () => (
  <>
    <Head>
      <title>Payment unsuccessful !</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Next Commerce post payment success page"
      />
      <meta></meta>
    </Head>
    <Navbar />
    <Flex justifyContent="center" mt="5em" alignItems="center">
      <CloseIcon color="red.400" w={10} h={10} />
      <Text ml="15px" fontSize="xl">
        Payment is unsuccessful !
      </Text>
    </Flex>
  </>
);

export default Cancel;
