import { Box, Button, ButtonGroup } from "@chakra-ui/react"
import { FaBullhorn, FaCoins, FaHome, FaMap } from "react-icons/fa"
import { MdForum } from "react-icons/md"

type RunicNavigationProps = {
  activeIndex: number
  setActiveIndex: (index: number) => void
}

const Navigation: React.FC<Readonly<RunicNavigationProps>> = ({
  activeIndex,
  setActiveIndex,
}) => {
  const buttons = [
    { label: "Home", icon: <FaHome />, type: "internal" },
    { label: "News", icon: <FaBullhorn />, type: "external" },
    { label: "Store", icon: <FaCoins />, type: "external" },
    { label: "Map", icon: <FaMap />, type: "internal" },
    { label: "Forums", icon: <MdForum />, type: "external" },
  ]

  const determineClassName = (label: string, index: number): string => {
    if (label === "Store") {
      return "shiny-gold-button"
    } else if (index === activeIndex) {
      return ""
    }
    return ""
  }

  return (
    <div className="fixed right-8 top-0 p-4">
      <div className="flex space-x-8">
        <ButtonGroup spacing="8" className="drop-shadow-2xl">
          {buttons.map((payload, index) => (
            <Button
              className={determineClassName(payload.label, index)}
              color="white"
              borderRadius={"full"}
              key={payload.label}
              onClick={() => setActiveIndex(index)}
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
      </div>
    </div>
  )
}

export { Navigation }
