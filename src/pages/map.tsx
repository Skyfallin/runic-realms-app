// pages/map.js
const MapPage = () => {
  return (
    // <iframe
    //   src="/overviewer/index.html" // The path to your 'overviewer' main file
    //   style={{ width: "100%", height: "100vh", border: "none" }}
    //   title="Map"
    // />
    <iframe
      src="/map/index.html" // Assuming Nginx serves the 'overviewer' directory at the '/map' path
      style={{ width: "100%", height: "100vh", border: "none" }}
      title="Minecraft Map - Alterra"
    />
  )
}

export default MapPage
