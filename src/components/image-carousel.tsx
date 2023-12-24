import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules"
import SwiperCore from "swiper"
import Image from "next/image"
import { Box } from "@chakra-ui/react"

// install Swiper modules
SwiperCore.use([Pagination, Navigation, EffectCoverflow])

export const images = [
  { src: "/azana-pixel-perfection.png", alt: "First" },
  { src: "/ignaroths-lair.png", alt: "Second" },
  { src: "/azana-pixel-perfection.png", alt: "Third" },
  { src: "/azana-pixel-perfection.png", alt: "Fourth" },
]

const ImageCarousel = () => {
  return (
    <Box position="absolute" bottom="0" width={"100%"}>
      <Swiper
        navigation
        centeredSlides
        slidesPerView={3}
        loop
        pagination={{ clickable: false }}
        effect="coverflow"
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => console.log(swiper)}
        className="rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                height={225}
                width={400}
                className="block  object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
    // <Swiper
    //   slidesPerView={3}
    //   centeredSlides={true}
    //   navigation={true}
    //   loop={true}
    //   pagination={{ clickable: true }}
    //   effect={"coverflow"}
    //   // coverflowEffect={{
    //   //   // rotate: 0,
    //   //   // stretch: 0,
    //   //   depth: 100,
    //   //   modifier: 1,
    //   //   // slideShadows: false,
    //   // }}
    // >
    //   <SwiperSlide>
    //     <Image
    //       src="/azana-pixel-perfection.png"
    //       alt="Image 4"
    //       layout="fill"
    //       objectFit="cover"
    //     />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <Image
    //       src="/azana-pixel-perfection.png"
    //       alt="Image 4"
    //       layout="fill"
    //       objectFit="cover"
    //     />{" "}
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <Image
    //       src="/azana-pixel-perfection.png"
    //       alt="Image 4"
    //       layout="fill"
    //       objectFit="cover"
    //     />{" "}
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <Image
    //       src="/azana-pixel-perfection.png"
    //       alt="Image 4"
    //       layout="fill"
    //       objectFit="cover"
    //     />
    //   </SwiperSlide>
    // </Swiper>
  )
}

export { ImageCarousel }
