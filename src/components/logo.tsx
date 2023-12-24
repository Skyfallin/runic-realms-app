import { Box, Button } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import { ImageCarousel } from "./carousel"

const Logo = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        // background="red.500"
        alignItems="center"
        justifyContent="center"
        h="100%"
        gap="4"
        ml="4rem"
        mt="4rem"
      >
        <Image
          src="/text-logo.png"
          alt="Description"
          width={700}
          height={350}
          objectFit="cover"
          // className="bg-blue-500"
        />
        <Button
          className="button box-shadow logo-button"
          color="white"
          size="lg"
          w={[50, 100, 150]}
        >
          PLAY NOW
        </Button>
        <ImageCarousel mt="8" />
      </Box>
    </>
  )
}

export default Logo
