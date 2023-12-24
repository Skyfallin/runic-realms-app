import { Box, IconButton } from "@chakra-ui/react"
// Import the specific social media icons you need
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"

const SocialPanel = () => {
  return (
    <Box className="fixed left-0  transform">
      {/* Social media icons will go here */}
      <FaTwitter />
    </Box>
  )
}

export { SocialPanel }
