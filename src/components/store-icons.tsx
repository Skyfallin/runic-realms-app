import { Box, Image } from "@chakra-ui/react"

const StoreIcons = () => {
  return (
    <Box display="flex" overflow="hidden" width="100%" justifyContent="center">
      <Image
        src="/store/knight.svg"
        alt="Knight Store Icon Preview"
        height="auto"
        objectFit="cover"
        width="33.3%"
        className="shadow-large"
      />
      <Image
        src="/store/hero.svg"
        alt="Hero Store Icon Preview"
        height="auto"
        objectFit="cover"
        width="33.3%"
      />
      <Image
        src="/store/champion.svg"
        alt="Champion Store Icon Preview"
        height="auto"
        objectFit="cover"
        width="33.3%"
      />
    </Box>
  )
}

export { StoreIcons }
