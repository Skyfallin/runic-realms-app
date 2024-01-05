import { ChakraProvider } from "@chakra-ui/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { type AppType } from "next/dist/shared/lib/utils"

import "~/styles/globals.css"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <SpeedInsights />
    </ChakraProvider>
  )
}

export default MyApp
