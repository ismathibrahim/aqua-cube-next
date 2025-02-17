"use client"

import React from "react"
import CategoryCard from "./category-card"

import ApparelsImage from "@assets/images/category-images/apparels.jpg"
import CatamaransImage from "@assets/images/category-images/catamarans.jpg"
import ElectricImage from "@assets/images/category-images/electric.jpg"
import KayakingImage from "@assets/images/category-images/kayaking.jpg"
import KitesurfingImage from "@assets/images/category-images/kitesurfing.jpg"
import WindsurfingImage from "@assets/images/category-images/windsurfing.jpg"
import WaterskiingImage from "@assets/images/category-images/waterskiing.jpg"
import PaddleboardingImage from "@assets/images/category-images/paddleboarding.jpg"
import TowablesImage from "@assets/images/category-images/towables.jpg"
import SurfingImage from "@assets/images/category-images/surfing.jpg"
import WakeboardingImage from "@assets/images/category-images/wakeboarding.jpg"
import LetterPullup from "@modules/common/components/letter-pull-up"
import LetterPullUp from "@modules/common/components/letter-pull-up"
import FadeInUp from "@modules/common/components/fade-in-up"

const categories = [
  {
    name: "Apparel",
    thumbnail: ApparelsImage,
    handle: "apparel",
  },
  {
    name: "Catamarans",
    thumbnail: CatamaransImage,
    handle: "catamarans",
  },

  {
    name: "Kayaking",
    thumbnail: KayakingImage,
    handle: "kayaking",
  },

  {
    name: "Waterskiing",
    thumbnail: WaterskiingImage,
    handle: "waterskiing",
  },
  {
    name: "Electric Gear",
    thumbnail: ElectricImage,
    handle: "electric-gear",
  },
  {
    name: "Kitesurfing",
    thumbnail: KitesurfingImage,
    handle: "kitesurfing",
  },
  {
    name: "Windsurfing",
    thumbnail: WindsurfingImage,
    handle: "windsurfing",
  },
  {
    name: "Paddleboarding",
    thumbnail: PaddleboardingImage,
    handle: "paddleboarding",
  },
  {
    name: "Towables",
    thumbnail: TowablesImage,
    handle: "towables",
  },
  {
    name: "Surfing",
    thumbnail: SurfingImage,
    handle: "surfing",
  },
  {
    name: "Wakeboarding",
    thumbnail: WakeboardingImage,
    handle: "wakeboarding",
  },
]

const CategoriesGrid = () => {
  return (
    <section className="max-w-[90vw] mx-auto py-10 md:my-20">
      <LetterPullUp text="Categories" className="text-4xl font-medium" />
      <div className="mt-7 grid gap-3 grid-cols-2 md:grid-cols-3 grid-rows-3">
        {categories.map((category, index) => (
          <FadeInUp key={index}>
            <CategoryCard
              key={category.handle}
              {...category}
              className="h-36 sm:h-56 md:h-72"
            />
          </FadeInUp>
        ))}

        {/* <div className="grid grid-cols-3 gap-3 h-72">
          {categories.slice(4, 7).map((category) => (
            <CategoryCard key={category.handle} {...category} />
          ))}
        </div>

        <div className="grid grid-cols-4 gap-3 h-72">
          {categories.slice(7, 11).map((category) => (
            <CategoryCard key={category.handle} {...category} />
          ))}
        </div> */}
      </div>
      {/* <Button variant="secondary">See All</Button> */}
    </section>
  )
}

export default CategoriesGrid
