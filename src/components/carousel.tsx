import React, { useState } from "react"
import Image from "next/image"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { Button } from "@chakra-ui/react"
import { Box } from "framer-motion"

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1,
    )
  }

  const goToNext = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1,
    )
  }

  return (
    <Box className="relative flex items-center justify-center">
      <Button onClick={goToPrevious} className="absolute left-0">
        <FaArrowLeft />
      </Button>

      <Image
        src={images[currentImageIndex]}
        alt="Carousel Image"
        borderRadius="md"
      />

      <Button onClick={goToNext} className="absolute right-0">
        <FaArrowRight />
      </Button>
    </Box>
  )
}

export { ImageCarousel }
