import { Box, Button, ButtonGroup } from "@chakra-ui/react"
import { Campaign, Forum, Home, Map, ShoppingCart } from "@mui/icons-material"

type RunicNavigationProps = {
  activeIndex: number
  setActiveIndex: (index: number) => void
}

const RunicNavigation: React.FC<Readonly<RunicNavigationProps>> = ({
  activeIndex,
  setActiveIndex,
}) => {
  const buttons = [
    { label: "Home", icon: <Home /> },
    { label: "News", icon: <Campaign /> },
    { label: "Store", icon: <ShoppingCart /> },
    { label: "Map", icon: <Map /> },
    { label: "Forums", icon: <Forum /> },
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

export { RunicNavigation }
