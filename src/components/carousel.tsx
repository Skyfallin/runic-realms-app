import React, { useState } from "react"
import Image from "next/image"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { Box, Button } from "@chakra-ui/react"

const images = [
  "/azana-pixel-perfection.png",
  //   <Image
  //     src="/text-logo.png"
  //     alt="Description"
  //     width={700}
  //     height={350}
  //     objectFit="cover"
  //   />,
]

const ImageCarousel = ({ ...boxProps }) => {
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
    <Box
      className="relative flex items-center justify-center"
      {...boxProps}
      gap={"2"}
    >
      <Button
        onClick={goToPrevious}
        className="absolute left-0"
        color="white"
        variant="ghost"
      >
        <FaArrowLeft />
      </Button>

      <Image
        // src={images[currentImageIndex]}
        src="/azana-pixel-perfection.png"
        alt="Carousel Image"
        width={300}
        height={169}
        objectFit="cover"
        className="rounded shadow-inner"
      />

      <Button
        onClick={goToNext}
        className="absolute right-0"
        color="white"
        variant="ghost"
      >
        <FaArrowRight />
      </Button>
    </Box>
  )
}

export { ImageCarousel }
