import { Box, Button } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import { ImageCarousel } from "./image-carousel"

const LogoContent = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        // background="red.500"
        alignItems="center"
        justifyContent="center"
        h="100%"
        gap="2"
        className="fixed"
        // ml="12rem"
        // mt="18rem"
      >
        <Image
          src="/text-logo.png"
          alt="Description"
          width={700}
          height={350}
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
    </>
  )
}

export default LogoContent
