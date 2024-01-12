import {
  Box,
  Link as ChakraLink,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react"
import { useState } from "react"
import { CgClose } from "react-icons/cg"
import { TiThMenu } from "react-icons/ti"

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [display, changeDisplay] = useState("none")

  return (
    <Box className="hamburger-menu only-on-mobile">
      <IconButton
        aria-label="Hamburger Icon"
        icon={isOpen ? <CgClose /> : <TiThMenu />}
        onClick={() => {
          isOpen ? onClose() : onOpen()
          changeDisplay(display === "none" ? "flex" : "none")
        }}
      />

      {/* Menu Items */}
      <VStack
        pos="absolute"
        top="80px"
        right="0px"
        display={display}
        flexDirection="column"
        p="20px"
        bg="gray.50"
        spacing="24px"
        shadow="md"
        borderRadius="md"
        className="z-10"
      >
        {/* Add your menu items here */}
        <ChakraLink href="#">Menu Item 1</ChakraLink>
        <ChakraLink href="#">Menu Item 2</ChakraLink>
        <ChakraLink href="#">Menu Item 3</ChakraLink>
        {/* etc. */}
      </VStack>
    </Box>
  )
}

export default HamburgerMenu
