// Chakra imports
import {
  Menu,
  MenuList,
  MenuItem,
  Button,
  MenuButton,
  Input,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";

// React imports
import { useState } from "react";

const Mobilenavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <Menu>
          <MenuButton
            cursor="pointer"
            as={Button}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
              </svg>
            )}
          </MenuButton>
          <MenuList>
            <MenuItem>Sign in</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex justifyContent="center">
        <Input
          display={{ base: "block", md: "none" }}
          placeholder="🔍 Search"
          w="90%"
        />
      </Flex>
    </Box>
  );
};

export default Mobilenavbar;
