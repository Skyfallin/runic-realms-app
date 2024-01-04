import { IconButton } from "@chakra-ui/react"
import { FaDiscord, FaRedditAlien, FaTwitter, FaYoutube } from "react-icons/fa"
import { type ButtonPayload } from "~/types/button-payload"

interface SocialPanelProps {
  fontSize: string
}

const iconArray: Array<ButtonPayload> = [
  {
    label: "#5865f2",
    icon: <FaDiscord />,
    url: "https://discord.gg/5FjVVd4",
    type: "external",
  },
  {
    label: "#FF4500",
    icon: <FaRedditAlien />,
    url: "https://www.reddit.com/r/RunicRealms/",
    type: "external",
  },
  {
    label: "#1DA1F2",
    icon: <FaTwitter />,
    url: "https://twitter.com/RunicRealms",
    type: "external",
  },
  {
    label: "#FF0000",
    icon: <FaYoutube />,
    url: "https://www.youtube.com/@RunicRealms",
    type: "external",
  },
]

const handleClick = (url: string) => {
  window.location.href = url
}

const SocialPanel = ({ fontSize }: SocialPanelProps) => {
  return (
    <>
      {iconArray.map((payload) => (
        <IconButton
          aria-label="Social Media Icon"
          icon={payload.icon}
          key={payload.label}
          onClick={() => handleClick(payload.url)}
          variant="ghost"
          fontSize={fontSize}
          color="#312509"
          size="lg"
          _hover={{
            background: "transparent",
            color: payload.label,
          }}
        />
      ))}
    </>
  )
}

export { SocialPanel }
