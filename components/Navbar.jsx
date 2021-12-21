// Nextjs imports
import Link from "next/link";

// Chakra imports
import { Box, Flex, Heading, Button, Input } from "@chakra-ui/react";

// Component imports
import Mobilenavbar from "./mobile/Mobilenavbar";

const Navbar = () => (
  <Box as="header" w="100%">
    <Flex
      as="nav"
      justifyContent="space-between"
      w={["100%", 11 / 12]}
      mx="auto"
      padding="4"
      align="center"
    >
      <Heading as="h2" size="xl">
        Next Commerce
      </Heading>
      <Mobilenavbar />
      <Flex display={{ base: "none", md: "flex" }}>
        <Input placeholder="🔍 Search..." marginRight="7" />
        <Link href="/">
          <a>
            <Button
              bgGradient="linear(to-r,#7928CA, #FF0080 )"
              variant="solid"
              color="white"
            >
              Sign in
            </Button>
          </a>
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;
