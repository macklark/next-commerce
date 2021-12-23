// Chakra imports
import {
  Box,
  Menu,
  MenuList,
  MenuItem,
  Button,
  MenuButton,
} from "@chakra-ui/react";

const Mobilenavbar = () => (
  <Menu>
    <MenuButton
      display={{ base: "flex", md: "none" }}
      cursor="pointer"
      as={Button}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
      </svg>
    </MenuButton>
    <MenuList>
      <MenuItem>Sign in</MenuItem>
    </MenuList>
  </Menu>
);

export default Mobilenavbar;
