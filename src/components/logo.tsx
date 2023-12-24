import { Box, Button } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"

const Logo = () => {
  return (
    <>
      <Box className="absolute right-0 top-1/2 -translate-y-3/4 transform ">
        <Image
          src="/text-logo.png"
          alt="Description"
          width={700}
          height={350}
          objectFit="cover"
        />
        <Box className="absolute right-1/2 top-[calc(50%+75px)] translate-x-1/2 transform">
          <Button
            className="button box-shadow logo-button"
            color="white"
            size="lg"
            w={[50, 100, 150]}
          >
            PLAY NOW
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Logo
