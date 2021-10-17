import {
  Flex,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Spinner,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

import { useSession, signOut } from "next-auth/client";

const Navbar = () => {
  const [session, loading] = useSession();
  console.log(session);

  const logoutHandler = () => {
    signOut();
  };

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
        {!session && !loading && (
          <Link href="/authenticate/login">
            <Button colorScheme={"messenger"} variant="solid" mr="5">
              Sign In
            </Button>
          </Link>
        )}
        {loading && <Spinner size="sm" />}
        {session && (
          <Menu isLazy id="menu-btn">
            <MenuButton as={Avatar} cursor="pointer" />
            <MenuList>
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
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
