import { Box } from "@chakra-ui/react"
import Head from "next/head"
import React from "react"
import LogoContent from "~/components/logo-content"
import { Navigation } from "~/components/navigation"
import { ScrollContent } from "~/components/scroll-content"
import { SocialPanel } from "~/components/social-panel"

const Home = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [showSocialPanel, setShowSocialPanel] = React.useState(false)

  React.useEffect(() => {
    const checkScroll = () => {
      const yPos = window.scrollY
      const triggerHeight = 700 // TODO: constant

      if (yPos > triggerHeight) {
        setShowSocialPanel(true)
      } else {
        setShowSocialPanel(false)
      }
    }

    window.addEventListener("scroll", checkScroll)

    return () => {
      window.removeEventListener("scroll", checkScroll)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Runic Realms, Minecraft's Magic MMO</title>
        <meta
          name="description"
          content="Runic Realms is an MMORPG server for Minecraft Java Edition, set in a world of magic! 
          Choose your fantasy class, then quest and fight your way to the top!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="background">
        <section className="initial-view">
          <Box className="logo-content-container fade-in">
            <LogoContent />
          </Box>
          <Navigation
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </section>
        <section className="scrolling-content">
          <ScrollContent />
          {showSocialPanel && <SocialPanel />}
        </section>
      </main>
    </>
  )
}

export default Home
