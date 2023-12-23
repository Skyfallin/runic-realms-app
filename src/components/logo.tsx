import { Box, Button } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"

const MyComponent = () => {
  return (
    <>
      <Box className="absolute right-0 top-1/2 -translate-y-1/2 transform">
        <Image
          src="/text-logo.png"
          alt="Description"
          width={700}
          height={350}
          objectFit="cover"
        />
        <Box className="absolute right-1/2 top-[calc(50%+75px)] translate-x-1/2 transform">
          <Button
            className="gradient-button"
            color="white"
            w={[50, 100, 150]}
            borderRadius="full"
          >
            PLAY NOW
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default MyComponent
