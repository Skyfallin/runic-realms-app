import { Box, IconButton } from "@chakra-ui/react"
import { FaReddit, FaTwitter, FaYoutube } from "react-icons/fa"

const SocialPanel = () => {
  return (
    <Box display="flex" justifyContent={"flex-end"} gap="4" my={"auto"}>
      <IconButton
        aria-label="Reddit Icon"
        icon={<FaReddit />}
        // onClick={handleNext}
        className="opacity-100 hover:opacity-75"
        rounded="full"
        variant="ghost"
        fontSize="40px"
        size="lg"
      />
      <IconButton
        aria-label="Twitter Icon"
        icon={<FaTwitter />}
        // onClick={handleNext}
        className="opacity-100 hover:opacity-75"
        rounded="full"
        variant="ghost"
        fontSize="40px"
        size="lg"
      />
      <IconButton
        aria-label="YouTube Icon"
        icon={<FaYoutube />}
        // onClick={handleNext}
        className="opacity-100 hover:opacity-75"
        rounded="full"
        variant="ghost"
        fontSize="40px"
        size="lg"
      />
    </Box>
  )
}

export { SocialPanel }
