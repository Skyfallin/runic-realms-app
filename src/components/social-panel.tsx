import { Box, IconButton } from "@chakra-ui/react"
import { FaReddit, FaTwitter, FaYoutube } from "react-icons/fa"
import { type ButtonPayload } from "~/types/button-payload"

const iconArray: Array<ButtonPayload> = [
  {
    label: "Reddit Icon",
    icon: <FaReddit />,
    url: "",
    type: "external",
  },
  {
    label: "Twitter Icon",
    icon: <FaTwitter />,
    url: "",
    type: "external",
  },
  {
    label: "YouTube Icon",
    icon: <FaYoutube />,
    url: "",
    type: "external",
  },
]

const handleClick = (url: string) => {
  window.location.href = url
}

const SocialPanel = () => {
  return (
    <Box display="flex" justifyContent={"flex-end"} gap="4" my={"auto"}>
      {iconArray.map((payload) => (
        <IconButton
          aria-label="Reddit Icon"
          icon={payload.icon}
          onClick={() => handleClick(payload.url)}
          className="opacity-100 hover:opacity-75"
          rounded="full"
          variant="ghost"
          fontSize="40px"
          size="lg"
        />
      ))}
    </Box>
  )
}

export { SocialPanel }
