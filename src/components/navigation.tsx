import { Box, Button, ButtonGroup } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { FaBullhorn, FaCoins, FaHome, FaMap } from "react-icons/fa"
import { MdForum } from "react-icons/md"
import { type ButtonPayload } from "~/types/button-payload"

type RunicNavigationProps = {
  activeIndex: number
  setActiveIndex: (index: number) => void
}

const Navigation: React.FC<Readonly<RunicNavigationProps>> = ({
  activeIndex,
  setActiveIndex,
}) => {
  const router = useRouter()

  const buttons: Array<ButtonPayload> = [
    { label: "Home", icon: <FaHome />, type: "internal", url: "" },
    {
      label: "News",
      icon: <FaBullhorn />,
      type: "internal",
      url: "/forums/news",
    },
    {
      label: "Store",
      icon: <FaCoins />,
      type: "external",
      url: "https://runicrealms.buycraft.net/",
    },
    { label: "Map", icon: <FaMap />, type: "internal", url: "/map" },
    { label: "Forums", icon: <MdForum />, type: "internal", url: "/forums" },
  ]

  const determineClassName = (label: string, index: number): string => {
    if (label === "Store") {
      return "highlight-button box-shadow"
    }
    return "outline-button"
  }

  const handleClick = async (payload: ButtonPayload, index: number) => {
    setActiveIndex(index)
    if (payload.type === "external") {
      window.location.href = payload.url
    } else {
      await router.push(payload.url)
    }
  }

  return (
    <Box className="navbar fade-in fade-in-delayed">
      <ButtonGroup spacing="1rem" className="drop-shadow-2xl">
        {buttons.map((payload, index) => (
          <Button
            className={determineClassName(payload.label, index)}
            color="white"
            key={payload.label}
            onClick={() => handleClick(payload, index)}
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
