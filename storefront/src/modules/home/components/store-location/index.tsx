"use client"

import FadeInUp from "@modules/common/components/fade-in-up"
import LetterPullUp from "@modules/common/components/letter-pull-up"
import React from "react"

const StoreLocation = () => {
  return (
    <div className="bg-[#212121]">
      <div className="max-w-[90vw] mx-auto py-10 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <LetterPullUp
            text="Visit our shop in Male’ to experience in person"
            className="text-white text-3xl md:text-5xl leading-snug"
          />

          <FadeInUp delay={0.5}>
            <div className="bg-slate-200 h-52 w-full rounded-3xl"></div>
          </FadeInUp>
        </div>
      </div>
    </div>
  )
}

export default StoreLocation
