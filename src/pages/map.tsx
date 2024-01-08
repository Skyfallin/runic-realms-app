import { Box } from "@chakra-ui/react"
import { Navigation } from "~/components/navigation"

const MapPage = () => {
  return (
    <Box position="relative">
      <Navigation activeIndex={1} />
      <iframe
        src="/map/index.html" // Nginx serves the 'overviewer' directory at the '/map' path
        style={{ width: "100%", height: "100vh", border: "none" }}
        title="Minecraft Map - Alterra"
      />
    </Box>
  )
}

export default MapPage
