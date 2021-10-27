import {
  Flex,
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  Input,
  Stack,
  ModalBody,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

import Head from "next/head";
import Link from "next/link";

import { getAllProducts } from "../lib/helper";

import Dashboard from "../components/dashboard";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { useRef } from "react";

export async function getServerSideProps() {
  const [...products] = await getAllProducts();
  return {
    props: {
      products,
    },
  };
}

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputRef = useRef();

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
        <Stack mr="5">
          <Button
            leftIcon={<SearchIcon />}
            colorScheme="facebook"
            onClick={onOpen}
          >
            Search
          </Button>
        </Stack>
        <SignedOut>
          <Link href="/sign-in">
            <Button colorScheme={"messenger"} variant="solid" mr="5">
              Sign In
            </Button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton userProfileUrl="/user" afterSignOutAll="/" />
        </SignedIn>
      </Flex>
      <Modal finalFocusRef={inputRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Input placeholder="🔍 Search..." size="lg" />
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Next-commerce | Home</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Next commerce" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Dashboard products={products} />
    </>
  );
}
