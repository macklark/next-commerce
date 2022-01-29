// Nextjs imports
import Link from "next/link";
import { useRouter } from "next/router";

// React imports
import { useState } from "react";

// Chakra imports
import {
  Box,
  Flex,
  Heading,
  Button,
  Input,
  IconButton,
  Spacer,
  Avatar,
} from "@chakra-ui/react";

// React icons
import { FaShoppingCart } from "react-icons/fa";

// Icons import
import { SearchIcon } from "@chakra-ui/icons";

// Component imports
import Mobilenavbar from "./mobile/Mobilenavbar";

// Auth0 imports
import { useUser } from "@auth0/nextjs-auth0";

const Navbar = () => {
  const { user } = useUser();

  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const searchHandler = () => {
    if (searchInput !== "") {
      router.push(`/result/?q=${searchInput}`);
    }
  };

  return (
    <Box as="header" w="100%">
      <Flex
        as="nav"
        w={["100%", 11 / 12]}
        mx="auto"
        padding="4"
        align="center"
        display={{ base: "none", md: "flex" }}
      >
        <Heading as="h2" size="xl">
          Next Commerce
        </Heading>
        <Spacer />
        <Flex align="center" w="40%">
          <Input
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <IconButton
            aria-label="search"
            icon={<SearchIcon />}
            onClick={searchHandler}
            mx="10px"
          />
          <Link href="/cart">
            <a>
              <IconButton
                aria-label="add to cart"
                mr="10px"
                icon={<FaShoppingCart />}
              />
            </a>
          </Link>
          {user ? (
            <>
              <Link href="/api/auth/logout">
                <a>
                  <Button
                    bgGradient="linear(to-r, #7928CA, #FF0080 )"
                    variant="solid"
                    color="white"
                    mr="10px"
                  >
                    Logout
                  </Button>
                </a>
              </Link>
              <Avatar name={user.name} src={user.picture} />
            </>
          ) : (
            <Link href="/api/auth/login">
              <a>
                <Button
                  bgGradient="linear(to-r, #7928CA, #FF0080 )"
                  variant="solid"
                  color="white"
                >
                  Sign in
                </Button>
              </a>
            </Link>
          )}
        </Flex>
      </Flex>
      <Mobilenavbar />
    </Box>
  );
};

export default Navbar;
