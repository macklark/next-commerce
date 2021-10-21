import {
  Box,
  useColorModeValue,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Text,
  Divider,
  InputGroup,
  InputRightElement,
  IconButton,
  // Alert,
  // AlertIcon,
  // AlertTitle,
  // AlertDescription,
} from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";

import { useState, useRef } from "react";

import { FcGoogle } from "react-icons/fc";
import { HiEye, HiEyeOff } from "react-icons/hi";

// async function createUser(username, email, password) {
//   const response = await fetch("/api/auth/signup", {
//     method: "POST",
//     body: JSON.stringify({ username, email, password }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message);
//   }

//   return data;
// }

function Signup() {
  const [hidePassword, openPassword] = useState(false);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    console.log(
      usernameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    );

    // try {
    //   const result = await createUser(
    //     usernameRef.current.value,
    //     emailRef.current.value,
    //     passwordRef.current.value
    //   );

    //   console.log(result);
    // } catch (err) {
    //   console.log(err);
    // }
  }

  return (
    <Box
      bg={useColorModeValue("gray.50", "inherit")}
      minH="100vh"
      py="8"
      px={{ base: "4", lg: "8" }}
    >
      <Head>
        <title>Next-commerce | Sign up</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Ganesh portfolio" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box maxW="md" mx="auto">
        <Box
          bg={useColorModeValue("white", "gray.700")}
          py="7"
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
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  ref={usernameRef}
                />
              </FormControl>
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
                    autoComplete="password"
                    required
                    ref={passwordRef}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="confirm password">
                <FormLabel>Confirm password</FormLabel>
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
                    name="confirm password"
                    type={hidePassword ? "text" : "password"}
                    autoComplete="confirm password"
                    required
                  />
                </InputGroup>
              </FormControl>
              <Button
                type="submit"
                colorScheme="twitter"
                size="lg"
                fontSize="md"
              >
                Sign up
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
            <Text ml="2">Sign up with Google</Text>
          </Button>
          <Text mt="3" textAlign="center">
            Already signed up |{" "}
            <Link href="/authenticate/login">
              <a>Login</a>
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;
