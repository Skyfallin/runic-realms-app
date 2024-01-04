import { Box } from "@chakra-ui/react"
import { FaArrowDown } from "react-icons/fa"

// CSS keyframes for bouncing animation
const bounceAnimation = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-30px); }
    60% { transform: translateY(-30px); }
  }
`
const arrowSize = "3em"

const DownArrow = () => {
  return (
    <Box
      position="absolute"
      top={`calc(100vh - ${arrowSize})`}
      height={50}
      w={50}
      left="50%"
      opacity={0}
      sx={{
        animation: `fadeInAnimation 1s ease 2s forwards, bounce 1.25s ease-in-out infinite 2s`,
      }}
      css={bounceAnimation}
      zIndex={200000}
    >
      <FaArrowDown size={arrowSize} />
    </Box>
  )
}

export { DownArrow }
