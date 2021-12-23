// Nextjs imports
import Link from "next/link";

// Chakra imports
import { Box, Flex, Heading, Button, Input } from "@chakra-ui/react";

// Component imports
import Mobilenavbar from "./mobile/Mobilenavbar";

// Clerk auth imports
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

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
      <Flex display={{ base: "none", md: "flex" }} align="center" w="40%">
        <Input placeholder="🔍 Search..." marginRight="7" />
        <SignedOut>
          <Link href="/signIn">
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
        </SignedOut>
        <SignedIn>
          <UserButton userProfileUrl="/user" afterSignOutAll="/" />
        </SignedIn>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;
