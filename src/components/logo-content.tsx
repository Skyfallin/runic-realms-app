import { Box, Button, Flex, Heading, useToast } from "@chakra-ui/react"
import Image from "next/image"
import { PiSwordFill } from "react-icons/pi"

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
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100%"
      gap={2}
    >
      <Flex
        className="fade-in"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Image
          src="/runic-realms-logo.svg"
          alt="Runic Realms Logo"
          width={2800}
          height={500}
          priority={true}
        />
        <Button
          className="button box-shadow zoom-on-hover"
          color="white"
          onClick={() => handleClick()}
          w={[50, 100, 150]}
          size="lg"
        >
          <Box display="flex" alignItems="center" gap="2" whiteSpace="nowrap">
            <PiSwordFill />
            PLAY NOW
          </Box>
        </Button>
      </Flex>
      <Heading
        as="h1"
        fontStyle="italic"
        fontFamily="'IM Fell English', serif"
        size="2xl"
        mt={2}
        whiteSpace="nowrap"
        className="swipe-in"
      >
        Minecraft's Magic MMO
      </Heading>
    </Flex>
  )
}

export default LogoContent
