// Chakra imports
import {
  Box,
  Menu,
  MenuList,
  MenuItem,
  Button,
  MenuButton,
} from "@chakra-ui/react";

// React imports
import { useState } from "react";

const Mobilenavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu>
      <MenuButton
        display={{ base: "flex", md: "none" }}
        cursor="pointer"
        as={Button}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
        )}
      </MenuButton>
      <MenuList>
        <MenuItem>Sign in</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Mobilenavbar;
