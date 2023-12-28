import { Box, Button, useToast } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"

const ip = "play.runicrealms.com"

const LogoContent = () => {
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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100%"
      gap="2"
    >
      <Image
        src="/runic-realms-text.png"
        alt="Description"
        width={2800}
        height={500}
        objectFit="cover"
      />
      <Button
        className="button box-shadow zoom-on-hover"
        color="white"
        size="lg"
        w={[50, 100, 150]}
        onClick={() => handleClick()}
      >
        PLAY NOW
      </Button>
    </Box>
  )
}

export default LogoContent
