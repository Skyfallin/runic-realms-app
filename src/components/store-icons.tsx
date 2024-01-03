import { Box } from "@chakra-ui/react"
import Image from "next/image"

const StoreIcons = () => {
  return (
    <Box
      display="grid"
      overflow="hidden"
      width="100%"
      gridTemplateColumns="repeat(3, 1fr)"
    >
      <Image
        src="/store/knight.svg"
        alt="Knight Store Icon Preview"
        className="shadow-large"
        height={500}
        width={500}
        layout="responsive"
      />
      <Image
        src="/store/hero.svg"
        alt="Hero Store Icon Preview"
        className="shadow-large"
        height={500}
        width={500}
        layout="responsive"
      />
      <Image
        src="/store/champion.svg"
        alt="Champion Store Icon Preview"
        className="shadow-large"
        height={500}
        width={500}
        layout="responsive"
      />
    </Box>
  )
}

export { StoreIcons }
