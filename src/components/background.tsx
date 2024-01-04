import { Box } from "@chakra-ui/react"
import Image from "next/image"

const Background = () => {
  return (
    <Box className="background-container">
      <Image
        src="/background-full.svg"
        alt="Site Background"
        priority={true}
        fill
        objectFit="cover"
        objectPosition="center"
      />
      <Image
        src="/transition-paper-light.svg"
        alt="Background Transition Image"
        priority={true}
        height={500}
        width={3200}
        className="transition-image"
      />
    </Box>
  )
}

export { Background }
