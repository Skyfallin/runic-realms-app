import Image from "next/image"
import React from "react"

const MyComponent = () => {
  return (
    <div className="-translate-y-1/10 absolute top-1/2 transform">
      <Image
        src="/text-logo.png" // Your image path
        alt="Description"
        width={500} // Adjust as needed
        height={300} // Adjust as needed
        objectFit="cover" // Adjust as needed
      />
    </div>
  )
}

export default MyComponent
