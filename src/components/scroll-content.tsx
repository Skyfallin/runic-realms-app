import { Box, Button, Text } from "@chakra-ui/react"
import { StoreIcons } from "./store-icons"
import ImageCarousel from "./image-carousel"
import { SocialPanel } from "./social-panel"

const ScrollContent = () => {
  return (
    <>
      {/* // TODO: MAKE THESE TEXT BOXES AN ARRAY AND .MAP */}
      <Box
        gridRow={1}
        gridColumn={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ImageCarousel />
      </Box>
      <Box
        gridRow={1}
        gridColumn={3}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontSize="6xl"
          fontWeight="bold"
          fontFamily="'IM Fell English', serif"
          textAlign="center"
          as="i"
        >
          Explore Alterra
        </Text>
        <Text fontSize="lg" maxW="75%">
          Enter the Realm of Alterra—a beautiful, hand-built 6k x 6k custom map!
          Adventure through the spindly
          <span className="font-bold"> Silkwood Forest</span>, brave the cold of
          the viking village of <span className="font-bold"> Whaletown</span>,
          or discover the secrets of the once-great ruins of
          <span className="font-bold"> Dead Man's Rest</span>!
        </Text>
      </Box>
      <Box
        gridRow={2}
        gridColumn={2}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontSize="6xl"
          fontWeight="bold"
          fontFamily="'IM Fell English', serif"
          textAlign="center"
          as="i"
        >
          Take Up Arms
        </Text>
        <Text fontSize="lg" maxW="75%">
          The Realm of Alterra features{" "}
          <span className="font-bold">six unique</span> and challenging
          <span className="font-bold"> dungeons</span>, presenting increasingly
          complex boss mechanics for the brave party willing to test their might
          in battle!
        </Text>
      </Box>
      <Box gridRow={2} gridColumn={3} width="90%" mx="auto" my="auto">
        <video
          controls={false}
          autoPlay
          disablePictureInPicture
          muted
          loop
          playsInline
          preload="auto"
          className="box-shadow zoom-on-hover rounded-md"
        >
          <source src="/video/dungeon-bossfight.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      <Box
        className="box-shadow zoom-on-hover rounded-md"
        gridRow={3}
        gridColumn={2}
        width="90%"
        mx="auto"
        my="auto"
      >
        <video
          controls={false}
          autoPlay
          disablePictureInPicture
          muted
          loop
          playsInline
          preload="auto"
          className="box-shadow zoom-on-hover rounded-md"
        >
          <source src="/video/profession-tent.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Box
        gridRow={3}
        gridColumn={3}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontSize="6xl"
          fontWeight="bold"
          fontFamily="'IM Fell English', serif"
          textAlign="center"
          as="i"
        >
          Adventure Together
        </Text>
        <Text fontSize="lg" maxW="75%">
          Play alone or with friends! Runic Realms is designed for both solo
          players and groups! Call your allies, hone your tradeskills, and
          become your own fellowship by forming a{" "}
          <span className="font-bold">Guild</span>!
        </Text>
      </Box>
      <Box
        display="flex"
        gridRow={4}
        gridColumn={2}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontSize="6xl"
          fontWeight="bold"
          fontFamily="'IM Fell English', serif"
          textAlign="center"
          as="i"
        >
          Support the Server
        </Text>
        <Button
          size="lg"
          className="button highlight-button box-shadow zoom-on-hover"
          color="white"
        >
          To the store!
        </Button>
      </Box>
      <Box gridRow={4} gridColumn={3} mx="auto" my="auto">
        <StoreIcons />
      </Box>
      <Box
        gridRow={5}
        className="col-span-4 bg-red-500"
        mx="auto"
        my="auto"
        height="100%"
        width="100%"
      >
        <SocialPanel />
      </Box>
    </>
  )
}

export { ScrollContent }
