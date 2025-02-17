import React from "react"

import Aerofoils from '@assets/images/brands/aerofoils.png'
import ION from '@assets/images/brands/ion.png'
import Cabrinha from '@assets/images/brands/cabrinha.png'
import Connelly from '@assets/images/brands/connelly.png'
import Duotone from '@assets/images/brands/duotone.png'
import Flite from '@assets/images/brands/flite.png'
import North from '@assets/images/brands/north.png'
import Topcat from '@assets/images/brands/topcat.png'
import Image from "next/image"
import Marquee from "@modules/common/components/marquee"

const BrandLogos = [
  Aerofoils,
  ION,
  Cabrinha,
  Connelly,
  Duotone,
  Flite,
  North,
  Topcat
]

const BrandsScroller = () => {
  return (
    <section className="my-28">
      <Marquee pauseOnHover className="[--duration:40s] [--gap:8rem]">
        {BrandLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="Brand Logo"
            // width={100}
            height={20}
            className="max-h-10"
          />
        ))}
      </Marquee>
    </section>
  )
}

export default BrandsScroller
