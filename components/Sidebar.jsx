// Chakra imports
import { Box, Text } from "@chakra-ui/react";

const Sidebar = () => (
  <Box p="5" rounded="md">
    <Text fontSize="2xl" mt="5" fontWeight="semibold" color="facebook.300">
      Apperal
    </Text>
    <Box mt="3">
      <Text
        color="gray.600"
        fontSize="md"
        cursor="pointer"
        padding="5px"
        _hover={{ background: "gray.200", color: "black" }}
        borderRadius="5px"
      >
        T-shirt's
      </Text>
    </Box>
  </Box>
);

export default Sidebar;
