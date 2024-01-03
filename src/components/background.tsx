import { Box } from "@chakra-ui/react"
import Image from "next/image"

const Background = () => {
  return (
    <Box className="background-container">
      <Image
        src="/background-full.svg"
        alt="MMORPG Server Site Background"
        priority={true}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Box className="transition-image"></Box>
    </Box>
  )
}

export { Background }
