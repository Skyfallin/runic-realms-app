import { Box, Button, ButtonGroup } from "@chakra-ui/react"
import { useRouter } from "next/router"
import {
  FaBullhorn,
  FaCoins,
  FaHome,
  FaInfoCircle,
  FaMap,
} from "react-icons/fa"
import { type ButtonPayload } from "~/types/button-payload"

const Navigation = () => {
  const router = useRouter()

  const buttons: Array<ButtonPayload> = [
    { label: "Home", icon: <FaHome />, type: "internal", url: "/" },
    {
      label: "News",
      icon: <FaBullhorn />,
      type: "external",
      url: "https://www.runicrealms.com/forums/news/", // TODO: latest contentful news post
    },
    {
      label: "Store",
      icon: <FaCoins />,
      type: "external",
      url: "https://store.runicrealms.com/",
    },
    { label: "Map", icon: <FaMap />, type: "internal", url: "/map" },
    {
      label: "About",
      icon: <FaInfoCircle />,
      type: "internal",
      url: "/",
    },
  ]

  const determineClassName = (label: string): string => {
    if (label === "Store") {
      return "highlight-button box-shadow"
    }
    return "outline-button"
  }

  const handleClick = async (payload: ButtonPayload) => {
    if (payload.type === "external") {
      window.location.href = payload.url
    } else {
      await router.push(payload.url)
    }
  }

  return (
    <Box className="navbar hide-on-mobile">
      <ButtonGroup spacing="1rem" className="drop-shadow-2xl">
        {buttons.map((payload) => (
          <Button
            className={determineClassName(payload.label)}
            color="white"
            key={payload.label}
            onClick={() => handleClick(payload)}
            width={[48, 96, 144]}
            variant={"ghost"}
          >
            <Box display="flex" alignItems="center" gap="2">
              {payload.icon}
              {payload.label}
            </Box>
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  )
}

export { Navigation }
