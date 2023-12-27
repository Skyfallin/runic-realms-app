import { Box } from "@chakra-ui/react"
import Head from "next/head"
import React from "react"
import LogoContent from "~/components/logo-content"
import { Navigation } from "~/components/navigation"

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
          <Box className="logo-content-container fade-in bg-red-500">
            <LogoContent />
          </Box>
          <Box position="relative" display="flex" justifyContent="center"></Box>
          <Box className="footer-right bg-green-500 opacity-50"></Box>
          <Navigation
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </section>
        <section className="scrolling-content">
          <Box
            className="bg-purple-500 opacity-50"
            gridRow={1}
            gridColumn={2}
          ></Box>
          <Box
            className="bg-blue-500 opacity-50"
            gridRow={2}
            gridColumn={2}
          ></Box>
          <Box
            className="bg-pink-500 opacity-50"
            gridRow={1}
            gridColumn={3}
          ></Box>
          <Box
            className="bg-yellow-500 opacity-50"
            gridRow={2}
            gridColumn={3}
          ></Box>
        </section>
      </main>
    </>
  )
}

export default Home
