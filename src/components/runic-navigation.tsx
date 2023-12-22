import { Button } from "@chakra-ui/react"

export default function RunicNavigation() {
  return (
    <div className="fixed right-8 top-0 p-4">
      <div className="flex space-x-8">
        <Button className="rounded-full bg-white p-2">Button 1</Button>
        <Button
          borderRadius={15}
          className="rounded bg-white p-2"
          sx={{
            borderRadius: 25,
          }}
        >
          Button 2
        </Button>
        <Button
          borderRadius={15}
          className="rounded bg-white p-2"
          sx={{
            borderRadius: 25,
          }}
        >
          Button 3
        </Button>
        <Button
          borderRadius={15}
          className="rounded bg-white p-2"
          sx={{
            borderRadius: 25,
          }}
        >
          Button 4
        </Button>
      </div>
    </div>
  )
}
