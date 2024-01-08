import { Flex } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

const BlurBar = () => {
  return (
    <Flex
      position="absolute"
      className="left-0 right-0 top-0 bg-black/30 backdrop-blur-md"
      style={{ zIndex: 2 }}
      height="4.5rem"
      alignItems="center"
      justifyContent="center"
    >
      <Link href="/" passHref>
        <Image
          src="/runic-realms-logo.svg"
          alt="Runic Realms Logo"
          width={2800}
          height={500}
          style={{
            maxWidth: "30%",
            maxHeight: "75%",
            position: "absolute",
            left: "4.5rem",
            bottom: "0.5rem",
          }}
          priority={true}
        />
      </Link>
    </Flex>
  )
}

export default BlurBar
