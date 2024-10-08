import { Box, Button, Flex, Heading, useToast } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import { PiSwordFill } from "react-icons/pi"

const ip = "play.runicrealms.com"

const LogoContent = () => {
  const [hover, setHover] = React.useState(false)
  const toast = useToast()

  const showToast = () => {
    toast({
      title: "IP copied to clipboard!",
      description: "Paste our IP in Minecraft → Multiplayer to play!",
      position: "top-left",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
  }

  const handleClick = () => {
    navigator.clipboard.writeText(ip).then(
      () => {
        showToast()
      },
      () => {
        console.error("Failed to copy text.")
      },
    )
  }

  return (
    <Box className="logo-container">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100%"
        gap={4}
        textAlign="center"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="/runic-realms-logo.svg"
            alt="Runic Realms Logo"
            width={2800}
            height={500}
            priority={true}
          />
          <Heading
            as="h1"
            fontStyle="italic"
            fontFamily="'IM Fell English', serif"
            mt={2}
            whiteSpace="nowrap"
          >
            Minecraft's Magic MMO
          </Heading>
        </Flex>
        <Button
          className="button highlight-button-cam box-shadow zoom-on-hover"
          color="white"
          onClick={() => handleClick()}
          w={[144, 188, 188]}
          size="lg"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Box display="flex" alignItems="center" gap="2" whiteSpace="nowrap">
            <PiSwordFill />
            {hover ? "COPY IP" : "PLAY NOW"}
          </Box>
        </Button>
      </Flex>
    </Box>
  )
}

export default LogoContent
