import { Box, Button } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import ImageCarousel from "./image-carousel"

const LogoContent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      // background="red.500"
      alignItems="center"
      justifyContent="center"
      h="100%"
      gap="2"
      className=""
      // ml="12rem"
      // mt="16rem"
      transform="translateY(-5%)"
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
      {/* <Box mt="auto"> */}
      <ImageCarousel />
      {/* </Box> */}
    </Box>
  )
}

export default LogoContent
