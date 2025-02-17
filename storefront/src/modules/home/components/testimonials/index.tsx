"use client"

import Carousel from "@modules/common/components/carousel"
import FadeInUp from "@modules/common/components/fade-in-up"
import LetterPullUp from "@modules/common/components/letter-pull-up"
import React from "react"

const data = [
  {
    name: "Person 1",
    description: "Pro Kitesurfer",
    image:
      "https://images.unsplash.com/photo-1646856671799-6f1ab6aa134c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    text: "I've been shopping with Aqua Cube for years and I've never been disappointed. Their selection of gear is unbeatable. Highly recommend!",
    social: "@persons_instagram",
  },
  {
    name: "Person 2",
    description: "Watersports Manager - Some Resort",

    image:
      "https://images.unsplash.com/photo-1646856671799-6f1ab6aa134c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    text: "We get all our gear from Aqua Cube. Their prices are the best in the market and we always get our products delivered on time.",
    social: "@persons_tiktok",
  },
  {
    name: "Person 3",
    description: "Pro Windsurfer",

    image:
      "https://images.unsplash.com/photo-1646856671799-6f1ab6aa134c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    text: "Highly recommend Aqua Cube!",
    social: "@persons_instagram",
  },
]
const Testimonials = () => {
  return (
    <div className={`bg-[#212121] py-10 sm:py-20`}>
      <div className="max-w-[90vw] mx-auto">
        <LetterPullUp
          text="Making Waves: Customer Stories"
          className="text-white text-4xl md:text-5xl  leading-snug"
        />

        <FadeInUp delay={0.5}>
          <p className="text-lg mt-6 mb-10 text-gray-400">
            Hear what good things our regular customers have to say about us.
          </p>
        </FadeInUp>

        <Carousel
          containerClassName="gap-4 sm:gap-6"
          options={{ dragFree: true }}
        >
          {data.map((item, index) => (
            <FadeInUp
              key={index}
              delay={0.3 * index}
              className="bg-[#2B2B2B] flex flex-col p-5 sm:p-8 gap-8 rounded-[20px] flex-grow-0 flex-shrink-0 basis-[65%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="flex gap-3">
                <div className="h-14 w-14 rounded-full bg-gray-500 relative"></div>
                <div className="shrink-1">
                  <p className="text-2xl text-white">{item.name}</p>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>

              <p className="text-lg text-white">&quot;{item.text}&quot;</p>

              <div className="flex gap-3 text-gray-400 mt-auto">
                {item.social}
              </div>
            </FadeInUp>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials
