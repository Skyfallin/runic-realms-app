import React from "react"
import { Box, Flex, IconButton } from "@chakra-ui/react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { type ImagePayload } from "~/types/image-payload"
import Image from "next/image"

interface ImageCarouselProps {
  currentImage: number
  setCurrentImage: (currentImage: number) => void
}

const images: Array<ImagePayload> = [
  {
    alt: "Image Alterra Locations",
    url: "/carousel-images/alterra-locations.png",
  },
  {
    alt: "Image Class Abilities",
    url: "/carousel-images/class-abilities.png",
  },
  {
    alt: "Image Dynamic Quests",
    url: "/carousel-images/dynamic-quests.png",
  },
  {
    alt: "Image Challenging Dungeons",
    url: "/carousel-images/challenging-dungeons.png",
  },
  {
    alt: "Image Crafting and Gathering",
    url: "/carousel-images/crafting-and-gathering.png",
  },
]

const ImageCarousel = ({
  currentImage,
  setCurrentImage,
}: Readonly<ImageCarouselProps>) => {
  const handleNext = () => {
    const nextImage: number =
      currentImage === images.length - 1 ? 0 : currentImage + 1
    setCurrentImage(nextImage)
  }

  const handlePrev = () => {
    const prevImage: number =
      currentImage === 0 ? images.length - 1 : currentImage - 1
    setCurrentImage(prevImage)
  }

  return (
    <Box
      overflow="hidden"
      position="relative"
      className="box-shadow zoom-on-hover rounded-md"
      w="90%"
    >
      <Flex
        transition="transform 0.5s ease-in-out"
        transform={`translateX(-${currentImage * 100}%)`}
      >
        {images.map((payload, index) => (
          <Image
            src={payload.url}
            alt={`Slide ${index}`}
            key={payload.alt}
            className="object-cover"
            width={1920}
            height={1080}
          />
        ))}
      </Flex>

      {/* Pagination buttons */}
      <Flex justifyContent="center" bottom={2} w="full" position="absolute">
        {images.map((payload, index) => (
          <Box
            key={payload.alt}
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
      </Flex>

      {/* Icon buttons */}
      <Flex
        justify="space-between"
        align="flex-end"
        position="absolute"
        top="50%"
        w="full"
        px={-2}
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
