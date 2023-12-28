import { Box, Button, Text } from "@chakra-ui/react"
import { StoreIcons } from "./store-icons"
import ImageCarousel from "./image-carousel"

const ScrollContent = () => {
  return (
    <>
      <Box gridRow={1} gridColumn={2}>
        <ImageCarousel />
      </Box>
      <Box gridRow={1} gridColumn={3}></Box>
      <Box gridRow={2} gridColumn={2}></Box>
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
          <source src="/video/tutorial-island.mp4" type="video/mp4" />
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
          <source src="/video/tutorial-island.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Box gridRow={3} gridColumn={3} mx="auto" my="auto">
        <Text>Challenging dungeon encounters and boss mechanics!</Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gridRow={4}
        gridColumn={2}
        mx="auto"
        my="auto"
      >
        <Text>Support the server with ranks!</Text>
        <Button
          size="lg"
          className="button highlight-button box-shadow"
          color="white"
        >
          Take me to the store!
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
      ></Box>
    </>
  )
}

export { ScrollContent }
