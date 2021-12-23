// Chakra imports
import { Box, Text } from "@chakra-ui/react";

const Sidebar = () => (
  <Box p="5" rounded="md">
    <Text fontSize="3xl" fontWeight="bold">
      Filter
    </Text>
    <Text fontSize="2xl" mt="5" fontWeight="semibold" color="facebook.300">
      Price
    </Text>
    <Box mt="1">
      <Text color="gray.600" fontSize="md" cursor="pointer">
        Lowest to Largest
      </Text>
      <Text color="gray.600" fontSize="md" mt="1" cursor="pointer">
        Largest to Lowest
      </Text>
    </Box>
  </Box>
);

export default Sidebar;
