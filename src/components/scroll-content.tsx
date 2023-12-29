import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { StoreIcons } from "./store-icons"
import ImageCarousel from "./image-carousel"
import { SocialPanel } from "./social-panel"

const ScrollContent = () => {
  return (
    <>
      <Box gridRow={1} gridColumn={2}>
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
          fontSize="5xl"
          fontWeight="bold"
          fontFamily="'IM Fell English', serif"
          textAlign="center"
        >
          Explore Alterra
        </Text>
        <Text fontSize="lg" maxW="75%">
          Enter the Realm of Alterra--a beautiful, hand-built 6k x 6k custom
          map! Adventure through the , icy viking villages, the ruins of Dead
          Man's Rest,
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
          fontSize="5xl"
          fontWeight="bold"
          fontFamily="'IM Fell English', serif"
          textAlign="center"
        >
          A Shared Adventure
        </Text>
        <Text fontSize="lg">Play alone or with friends!</Text>
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
          <source src="/video/island-vista.mp4" type="video/mp4" />
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
          <source src="/video/island-vista.mp4" type="video/mp4" />
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
          fontSize="5xl"
          fontWeight="bold"
          fontFamily="'IM Fell English', serif"
          textAlign="center"
        >
          Overcome Boss Mechanics
        </Text>
        <Text fontSize="lg">
          Challenging dungeon encounters and boss mechanics!
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
          fontSize="5xl"
          fontWeight="bold"
          fontFamily="'IM Fell English', serif"
          textAlign="center"
        >
          Support the Server
        </Text>
        <Button
          size="lg"
          className="button highlight-button box-shadow"
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
