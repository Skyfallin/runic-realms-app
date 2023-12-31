import { Box } from "@chakra-ui/react"
import Head from "next/head"
import React from "react"
import LogoContent from "~/components/logo-content"
import { Navigation } from "~/components/navigation"
import { ScrollContent } from "~/components/scroll-content"
import { SocialPanel } from "~/components/social-panel"

const Home = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <>
      <Head>
        <title>Runic Realms, Minecraft's Magic MMO</title>
        <meta name="description" content="Generated by create-t3-app" />
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
          {/* <Box
            background="red"
            my="auto"
            position="absolute"
            bottom={0}
            height="50px"
            width={50}
          > */}
          <SocialPanel />
          {/* </Box> */}
        </section>
      </main>
    </>
  )
}

export default Home
