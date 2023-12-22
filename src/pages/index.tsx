import Head from "next/head"
import RunicNavigation from "~/components/runic-navigation"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 AppTest</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="background grid min-h-screen grid-rows-2 bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <RunicNavigation />
      </main>
    </>
  )
}
