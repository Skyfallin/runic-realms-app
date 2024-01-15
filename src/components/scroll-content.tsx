import { Box, Button, Flex, Text } from "@chakra-ui/react"
import React from "react"
import { FaCoins } from "react-icons/fa"
import { type CarouselText } from "~/types/carousel-text"
import ImageCarousel from "./image-carousel"
import { StoreIcons } from "./store-icons"

const imageTextContents: Array<CarouselText> = [
  {
    title: "Explore Alterra",
    text:
      "Enter the Realm of Alterra—a beautiful, " +
      "hand-built 6k x 6k custom adventure map! Fight your way through the spindly Silkwood Forest, " +
      "brave the cold of the viking village of Whaletown, " +
      "or discover the secrets of the once-great ruins of Dead Man's Rest!",
  },
  {
    title: "Choose Your Class",
    text:
      "Choose from 5 classes, each with 3 subclass trees to master! " +
      "Combine spells from each subclass to customize your character and create your playstyle! " +
      "Will you guard your allies with the astral powers of the Starweaver, " +
      "or strike fear into your enemies as a Dreadlord?",
  },
  {
    title: "Experience the Story",
    text:
      "Unravel the mysteries of the realm! Join Theia Ark and her Redbrand forces " +
      "against the tyranny of Azana! Rally the High Mages of Wintervale " +
      "and investigate a sinister, otherwordly force that threatens the kingdoms " +
      "of Alterra!",
  },
  {
    title: "Earn Your Loot",
    text:
      "Venture into dark caverns or ancient fortresses to " +
      "level-up and gain powerful weapons and armor! " +
      "Increase stats like intelligence and strength, " +
      "and find unique item perks to change your playstyle!",
  },
  {
    title: "Hone Your Craft",
    text:
      "Train your gathering skills like fishing and herbalism by collecting reagents in the world, then " +
      "master one of three crafting specializations: Alchemist, Blacksmith, or Jeweler! " +
      "Combine your crafting reagents to create powerful items to aid you in battle!",
  },
]

const handleStoreButtonClick = () => {
  window.location.href = "https://runicrealms.buycraft.net/"
}

const ScrollContent = () => {
  const [currentImage, setCurrentImage] = React.useState(0)

  return (
    <>
      <Box className="carousel-container">
        <ImageCarousel
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
      </Box>
      <Box className="explore-alterra-container">
        <Text
          fontWeight="bold"
          fontFamily="'IM Fell English', serif"
          as="i"
          className="scroll-content-title"
        >
          {imageTextContents[currentImage]?.title}
        </Text>
        <Text fontSize="lg" className="scroll-content-text" textAlign="center">
          {imageTextContents[currentImage]?.text}
        </Text>
      </Box>
      <Box className="take-up-arms-container">
        <Text
          fontWeight="bold"
          fontFamily="'IM Fell English', serif"
          as="i"
          className="scroll-content-title"
        >
          Take Up Arms
        </Text>
        <Text fontSize="lg" className="scroll-content-text" textAlign="center">
          The Realm of Alterra features{" "}
          <span className="font-bold">six unique</span> and challenging
          <span className="font-bold"> dungeons</span>, presenting increasingly
          complex boss mechanics for the brave party willing to test their might
          in battle!
        </Text>
      </Box>
      <Box className="dungeon-bossfight-container" mx="auto" my="auto">
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

      <Box className="profession-tent-container" mx="auto" my="auto">
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
      <Box className="adventure-together-container">
        <Text
          fontWeight="bold"
          fontFamily="'IM Fell English', serif"
          as="i"
          className="scroll-content-title"
        >
          Adventure Together
        </Text>
        <Text fontSize="lg" className="scroll-content-text">
          Play alone or with friends! Runic Realms is designed for both solo
          players and groups! Call your allies, hone your{" "}
          <span className="font-bold">tradeskills</span>, and become your own
          fellowship by forming a <span className="font-bold">Guild</span>!
        </Text>
      </Box>
      <Flex className="support-server-container" gap={3}>
        <Text
          fontWeight="bold"
          fontFamily="'IM Fell English', serif"
          as="i"
          className="scroll-content-title"
        >
          Support the Server
        </Text>
        <Button
          className="highlight-button box-shadow zoom-on-hover"
          color="white"
          onClick={() => console.log("store")}
          width={[48, 96, 144]}
          variant={"ghost"}
        >
          <Box
            display="flex"
            alignItems="center"
            gap="2"
            onClick={() => handleStoreButtonClick()}
          >
            <FaCoins />
            To the store!
          </Box>
        </Button>
      </Flex>
      <Box className="store-icons-container" mx="auto" my="auto">
        <StoreIcons />
      </Box>
      <Box
        className="hide-on-mobile"
        gridRow={5}
        gridColumn={2}
        mx="auto"
        my="auto"
      >
        <Text>JOIN NOW at play.runicrealms.com</Text>
      </Box>
      <Box className="copyright-container hide-on-mobile" mx="auto" my="auto">
        <Text>Copyright Runic Realms © 2018-2024</Text>
      </Box>
    </>
  )
}

export { ScrollContent }
