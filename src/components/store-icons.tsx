import { Box } from "@chakra-ui/react"
import Image from "next/image"

const StoreIcons = () => {
  return (
    <Box display="flex" overflow="hidden" width="100%" justifyContent="center">
      <Image
        src="/store/knight.svg"
        alt="Knight Store Icon Preview"
        className="shadow-large"
        height={500}
        width={500}
      />
      <Image
        src="/store/hero.svg"
        alt="Hero Store Icon Preview"
        className="shadow-large"
        height={500}
        width={500}
      />
      <Image
        src="/store/champion.svg"
        alt="Champion Store Icon Preview"
        className="shadow-large"
        height={500}
        width={500}
      />
    </Box>
  )
}

export { StoreIcons }
