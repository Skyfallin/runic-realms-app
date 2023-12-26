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
      <main className="background portal-grid grid min-h-screen grid-cols-4 grid-rows-2">
        <Box className="logo-content-container">
          <LogoContent />
        </Box>
        <Box
          position="relative"
          // className="bg-green-500 opacity-50"
          display="flex"
          justifyContent="center"
        ></Box>
        <Box className="footer-right"></Box>
        <Navigation activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </main>
    </>
  )
}

export default Home
