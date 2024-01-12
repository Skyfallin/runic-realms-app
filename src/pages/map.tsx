import { Box } from "@chakra-ui/react"
import BlurBar from "~/components/blur-bar"
import HamburgerMenu from "~/components/mobile/hamburger-menu"
import { Navigation } from "~/components/navigation"

const MapPage = () => {
  return (
    <Box position="relative">
      <BlurBar />
      <Navigation />
      <HamburgerMenu />
      <iframe
        src="/overviewer/index.html"
        style={{ width: "100%", height: "100vh", border: "none" }}
        title="Minecraft Map - Alterra"
      />
    </Box>
  )
}

export default MapPage
