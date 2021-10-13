import {
  Box,
  useColorModeValue,
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Divider,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "inherit")}
      minH="100vh"
      py="12"
      px={{ base: "4", lg: "8" }}
    >
      <Box maxW="md" mx="auto">
        <Box
          bg={useColorModeValue("white", "gray.700")}
          py="8"
          px={{ base: "4", md: "10" }}
          shadow="base"
          rounded={{ sm: "lg" }}
        >
          <Heading
            textAlign="center"
            size="xl"
            fontWeight="bold"
            mb="14"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
          >
            Next Commerce
          </Heading>
          <chakra.form>
            <Stack spacing="6">
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="twitter"
                size="lg"
                fontSize="md"
              >
                Login
              </Button>
            </Stack>
          </chakra.form>
          <Flex align="center" color="gray.300" my="5">
            <Box flex="1">
              <Divider borderColor="currentcolor" />
            </Box>
            <Text
              as="span"
              px="3"
              color={useColorModeValue("gray.600", "gray.400")}
              fontWeight="medium"
            >
              or
            </Text>
            <Box flex="1">
              <Divider borderColor="currentcolor" />
            </Box>
          </Flex>
          <Button color="currentColor" variant="outline" w="full">
            <FcGoogle />
            <Text ml="2">Sign In with Google</Text>
          </Button>
        </Box>
        <Text mt="5" textAlign="center">
          New ? |{" "}
          <Link href="/">
            <a>Sign up</a>
          </Link>
        </Text>
      </Box>
      <style jsx>{`
        a {
          color: #7928ca;
        }
      `}</style>
    </Box>
  );
}

export default Login;
