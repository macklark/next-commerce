// Chakra imports
import {
  Button,
  Input,
  Box,
  Flex,
  Heading,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";

// React icons
import { HiMenu } from "react-icons/hi";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";

// Chakra icons
import { SearchIcon } from "@chakra-ui/icons";

// React imports
import { useRef } from "react";

// Nextjs imports
import Link from "next/link";

const Mobilenavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box as="header" w="100%" display={{ base: "block", md: "none" }}>
      <Flex
        as="nav"
        justifyContent="space-between"
        w={["100%", 11 / 12]}
        mx="auto"
        padding="4"
        align="center"
      >
        <Heading as="h3" size="lg">
          Next Commerce
        </Heading>
        <IconButton
          aria-label="open menu"
          icon={<HiMenu />}
          ref={btnRef}
          onClick={onOpen}
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          display={{ base: "block", md: "none" }}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>
              <Link href="/signIn">
                <a>
                  <Button leftIcon={<FaUserAlt />} w="100%">
                    Sign In
                  </Button>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Button leftIcon={<FaShoppingCart />} w="100%" mt="10px">
                    Cart
                  </Button>
                </a>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Flex justifyContent="center">
        <Input
          display={{ base: "block", md: "none" }}
          placeholder="Search..."
          w="80%"
        />
        <IconButton aria-label="search" icon={<SearchIcon />} ml="10px" />
      </Flex>
    </Box>
  );
};

export default Mobilenavbar;
