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
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";

import { useState, useRef } from "react";

import { FcGoogle } from "react-icons/fc";
import { HiEye, HiEyeOff } from "react-icons/hi";

import { signIn } from "next-auth/client";

function Login() {
  const [hidePassword, openPassword] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    console.log(result);
    // console.log(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <Box
      bg={useColorModeValue("gray.50", "inherit")}
      minH="100vh"
      py="12"
      px={{ base: "4", lg: "8" }}
    >
      <Head>
        <title>Next-commerce | Login</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Ganesh portfolio" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
          <form onSubmit={submitHandler}>
            <Stack spacing="6">
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  ref={emailRef}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <InputRightElement>
                    <IconButton
                      bg="transparent !important"
                      variant="ghost"
                      aria-label={
                        hidePassword ? "Mask password" : "Reveal password"
                      }
                      icon={hidePassword ? <HiEye /> : <HiEyeOff />}
                      onClick={() => openPassword(!hidePassword)}
                    />
                  </InputRightElement>
                  <Input
                    name="password"
                    type={hidePassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    ref={passwordRef}
                  />
                </InputGroup>
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
          </form>
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
          <Link href="/authenticate/signup">
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
