import { Box, Button } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"

const LogoContent = () => {
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
        className="button box-shadow logo-button"
        color="white"
        size="lg"
        w={[50, 100, 150]}
      >
        PLAY NOW
      </Button>
    </Box>
  )
}

export default LogoContent
