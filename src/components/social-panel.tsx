import { Box, IconButton } from "@chakra-ui/react"
// Import the specific social media icons you need
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa"

const SocialPanel = () => {
  return (
    <Box display="flex">
      {/* Social media icons will go here */}
      <FaTwitter />
      <FaYoutube />
    </Box>
  )
}

export { SocialPanel }
