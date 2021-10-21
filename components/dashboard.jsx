import { useState } from "react";
import {
  Box,
  SimpleGrid,
  useBreakpointValue,
  Stack,
  Text,
  useColorModeValue,
  AspectRatio,
  Image,
  Skeleton,
  Button,
} from "@chakra-ui/react";

function Dashboard({ products }) {
  const [productsList, updateProductsList] = useState(products);
  return (
    // <>
    //   {productsList.map((product) => {
    //     return (
    //       <div key={product.id}>
    //         <h2>{product.title}</h2>
    //         <p>{product.description}</p>
    //       </div>
    //     );
    //   })}
    // </>
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <SimpleGrid
        columns={{ base: "1", md: "2", lg: "3", xl: "4" }}
        columnGap={{ base: "4", md: "20" }}
        rowGap={{ base: "8", md: "10" }}
      >
        {productsList.map((product) => {
          return (
            <div key={product.id}>
              <Stack spacing={useBreakpointValue({ base: "4", md: "5" })}>
                <Box position="relative">
                  <AspectRatio ratio={6 / 9}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      draggable="false"
                      fallback={<Skeleton />}
                      borderRadius={useBreakpointValue({
                        base: "md",
                        md: "xl",
                      })}
                      objectFit="cover"
                    />
                  </AspectRatio>
                </Box>
                <Stack>
                  <Stack spacing="1" bgColor="gray.100" borderRadius="xl" p="5">
                    <Text
                      fontWeight="medium"
                      color={useColorModeValue("gray.700", "gray.400")}
                    >
                      {product.title}
                    </Text>
                    <Stack align="center" pt="5">
                      <Button colorScheme="blue" isFullWidth>
                        Order now
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </div>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Dashboard;
