// Next imports
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

// Supabase imports
import supabase from "../../utils/supabaseClient";

// Getting all products
import { getAllProducts } from "../../utils/helper";

// Chakra imports
import {
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  HStack,
  useRadio,
  useRadioGroup,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";

// React imports
import { useState } from "react";

// Auth0 imports
import { useUser } from "@auth0/nextjs-auth0";

export const getStaticPaths = async () => {
  const res = await getAllProducts();

  const paths = res.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  let { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id);

  if (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }

  return {
    props: {
      product,
    },
  };
};

const Group = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        _checked={{
          bg: "teal.600",
          color: "white",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

const Details = ({ product }) => {
  const { user } = useUser();
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const clickHandler = async (name, price, image, price_id) => {
    let totalPrice = price * Number(quantity);

    const reqBody = {
      name,
      user: user.name,
      size,
      quantity,
      totalPrice,
      image,
      price_id,
    };

    fetch("/api/postCart", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/cart");
  };

  const options = ["S", "M", "L", "XL", "XXL"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "size",
    onChange: (value) => setSize(value),
  });

  const group = getRootProps();

  return (
    <>
      <Head>
        <title>{product[0].name} | Next Commerce</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={product[0].name} />
      </Head>
      <Box maxW="7xl" mx="auto" my={{ md: "50px" }}>
        <Grid templateColumns={{ md: "repeat(10, 1fr)" }} gap={10}>
          <GridItem colSpan={5}>
            <Image
              src={product[0].image}
              alt={product[0].name}
              width="100%"
              height="70%"
              layout="responsive"
              priority
            />
          </GridItem>
          <GridItem colSpan={5} mx={{ base: "1em", md: "0em" }}>
            <Flex justifyContent="space-between" align="center">
              <Text fontSize="4xl" fontWeight="medium">
                {product[0].name}
              </Text>
              <Text fontSize="4xl" fontWeight="light">
                ${product[0].price}
              </Text>
            </Flex>
            <Text color="gray.400">Apperal</Text>
            <Box marginTop="3em">
              <Text textTransform="uppercase" fontSize="xl" color="gray.500">
                size
              </Text>
              <HStack {...group}>
                {options.map((value) => {
                  const radio = getRadioProps({ value });
                  return (
                    <Group key={value} {...radio}>
                      {value}
                    </Group>
                  );
                })}
              </HStack>
            </Box>
            <Box marginTop={{ base: "1em", md: "3em" }}>
              <Text textTransform="uppercase" fontSize="xl" color="gray.500">
                Qty
              </Text>
              <Box mt="15px">
                <NumberInput
                  size="lg"
                  maxW={32}
                  defaultValue={1}
                  min={1}
                  onChange={(e) => setQuantity(e)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Box>
            </Box>
            <Flex justifyContent="center">
              {user ? (
                <Button
                  textTransform="uppercase"
                  mt="3em"
                  width={{ base: "100%", md: "70%" }}
                  backgroundColor="black"
                  color="white"
                  _hover={{
                    backgroundColor: "gray.100",
                    color: "black",
                  }}
                  isDisabled={false}
                  onClick={() =>
                    clickHandler(
                      product[0].name,
                      product[0].price,
                      product[0].image,
                      product[0].price_id
                    )
                  }
                >
                  add to cart
                </Button>
              ) : (
                <>
                  <Button
                    textTransform="uppercase"
                    mt="3em"
                    width="70%"
                    backgroundColor="black"
                    color="white"
                    _hover={{
                      backgroundColor: "gray.100",
                      color: "black",
                    }}
                    onClick={onOpen}
                  >
                    add to cart
                  </Button>
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Sign In, before adding to cart</ModalHeader>
                      <Flex justifyContent="center">
                        <ModalFooter>
                          <Link href="/api/auth/login">
                            <a>
                              <Button
                                backgroundColor="black"
                                color="white"
                                _hover={{
                                  backgroundColor: "gray.100",
                                  color: "black",
                                }}
                              >
                                Sign In
                              </Button>
                            </a>
                          </Link>
                        </ModalFooter>
                      </Flex>
                    </ModalContent>
                  </Modal>
                </>
              )}
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Details;
