import { type AppType } from "next/dist/shared/lib/utils"
import { ChakraProvider } from "@chakra-ui/react"

import "~/styles/globals.css"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/bundle"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
