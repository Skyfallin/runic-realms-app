import { Box } from "@chakra-ui/react"

const BlurBar = () => {
  return (
    <Box
      className="absolute left-0 right-0 top-0 bg-black/30 backdrop-blur-md"
      style={{ zIndex: 2 }}
      height="4.5rem"
    ></Box>
  )
}

export default BlurBar
