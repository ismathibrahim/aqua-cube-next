"use client"

import React from 'react'
import Carousel from "@modules/common/components/carousel"
import CategoryCard from "@modules/home/components/categories-grid/category-card"

import CategoryImage from "@assets/images/category-images/placeholder.png"

const SubCategoriesSlider = ({category}:any) => {
  return (
    <div className="text-base-large">
          <ul className="flex gap-2">
            <Carousel containerClassName="gap-2" options={{ dragFree: true }}>
              {category.category_children?.map((c:any) => (
                <li
                  key={c.id}
                  className="w-56 h-48 embla__slide flex-grow-0 flex-shrink-0 basis-[60%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                >
                  <CategoryCard
                    name={c.name}
                    handle={c.handle}
                    thumbnail={CategoryImage}
                  />
                  {/* <UnderlineLink href={`/${c.handle}`}>{c.name}</UnderlineLink> */}
                </li>
              ))}
            </Carousel>
          </ul>
        </div>
  )
}

export default SubCategoriesSlider