import React, { useState } from "react"
import { Box, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const images = [
  "/carousel-images/azana-pixel-perfection.png",
  "/carousel-images/ignaroths-lair.png",
]

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  // Adjust the box size based on the breakpoint
  // const boxSize = useBreakpointValue({ base: "100%", md: "500px" })

  return (
    <Box
      // bg="purple"
      // position="relative"
      // maxW={boxSize}
      mx="auto"
      // position="absolute"
      // bottom={0}
      overflow="hidden"
      borderRadius="md"
      // className="shadow-lg"
      maxW="50%"
      mt="8"
    >
      <Flex
        // w="full"
        // height="30%"
        transition="transform 0.5s ease-in-out"
        transform={`translateX(-${currentImage * 100}%)`}
      >
        {images.map((src, index) => (
          <img
            src={src}
            alt={`Slide ${index}`}
            className="h-full w-full object-cover"
          />
        ))}
      </Flex>

      {/* Pagination buttons */}
      {/* <Flex justify="center" bottom={2} w="full">
        {images.map((_, index) => (
          <Box
            key={index}
            w={2}
            h={2}
            bg={currentImage === index ? "whiteAlpha.900" : "whiteAlpha.500"}
            rounded="full"
            mx={1}
            transition="background-color 0.3s"
            _hover={{ bg: "whiteAlpha.800" }}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </Flex> */}

      {/* Icon buttons */}
      <Flex
        justify="space-between"
        align="flex-end"
        // position="absolute"
        top="50%"
        w="full"
        px={2}
        transform="translateY(-50%)"
      >
        <IconButton
          aria-label="Previous image"
          icon={<FaArrowLeft />}
          onClick={handlePrev}
          className="hover:bg-opacity-50"
        />
        <IconButton
          aria-label="Next image"
          icon={<FaArrowRight />}
          onClick={handleNext}
          className="hover:bg-opacity-50"
        />
      </Flex>
    </Box>
  )
}

export default ImageCarousel
