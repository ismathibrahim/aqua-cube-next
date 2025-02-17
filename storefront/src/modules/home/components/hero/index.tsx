"use client"

import { CloudinaryContext, Video } from "cloudinary-react"
import LetterPullUp from "@modules/common/components/letter-pull-up"
import FadeInUp from "@modules/common/components/fade-in-up"
import Image from "next/image"

import heroImage from '@assets/images/home/hero.webp'

const Hero = () => {
  return (
    <div
      className="h-[105vh] -mt-16 w-full relative bg-cover overflow-hidden hero-area"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      {/* <Image
        src={heroImage}
        alt="Hero image"
        fill
        className="object-cover"
        priority
      /> */}
      {/* <CloudinaryContext
        cloudName="do8le5jjv"
        style={{ width: "100%", height: "100%" }}
      >
        <Video
          publicId="Videos/ac-hero_l81bvm"
          width="100%"
          height="100%"
          controls={false}
          loop
          autoPlay
          muted
          sourceTypes={["mp4", "hls"]}
          sourceTransformation={{
            streaming_profile: "auto",
          }}
          // fallback="Cannot play video"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </CloudinaryContext> */}
      <div className="absolute z-0 top-0 left-0 w-full h-full bg-black bg-opacity-50 mix-blend-multiply" />
      <div className="absolute inset-0 flex flex-col justify-end items-start px-4 sm:px-12 md:px-20 pb-36 lg:p-32 gap-6">
        <LetterPullUp
          text="Unleash Your Adventure"
          className="text-[48px] sm:text-[72px] md:text-[90px] lg:text-[104px] leading-none text-white font-medium"
        />

        <FadeInUp delay={1}>
          <p className="text-lg text-white font-normal">
            Shop the largest selection of watersports gear in the Maldives
          </p>
        </FadeInUp>

        <FadeInUp delay={2}>
          <button className="mt-4 sm:mt-10 bg-white px-8 py-4 rounded-full flex items-center gap-4 hover:bg-gray-200 duration-150">
            Explore{" "}
          </button>
        </FadeInUp>
      </div>
    </div>
  )
}

export default Hero
