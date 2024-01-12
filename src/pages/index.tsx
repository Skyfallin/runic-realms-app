import { Box, Flex } from "@chakra-ui/react"
import Head from "next/head"
import { Background } from "~/components/background"
import { DownArrow } from "~/components/down-arrow"
import LogoContent from "~/components/logo-content"
import { Navigation } from "~/components/navigation"
import { ScrollContent } from "~/components/scroll-content"
import { SocialPanel } from "~/components/social-panel"

const Home = () => {
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
      <main>
        <DownArrow />
        <Flex flexDirection="column">
          <section className="top-container">
            <Background />
            <Box gridRow={1} gridColumn={2} zIndex={10}>
              <LogoContent />
            </Box>
            <Navigation />
          </section>
          <section className="bottom-container">
            <ScrollContent />
            <Flex className="social-panel">
              <SocialPanel fontSize={"32px"} />
            </Flex>
          </section>
        </Flex>
      </main>
    </>
  )
}

export default Home
