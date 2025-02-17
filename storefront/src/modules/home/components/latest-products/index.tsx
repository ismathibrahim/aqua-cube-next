"use client"

import Carousel from "@modules/common/components/carousel"
import FadeInUp from "@modules/common/components/fade-in-up"
import LetterPullUp from "@modules/common/components/letter-pull-up"
import LetterPullup from "@modules/common/components/letter-pull-up"
import ProductPreview from "@modules/products/components/product-preview"
import { useProducts } from "medusa-react"
import Link from "next/link"
import React from "react"

const LatestProducts = () => {
  const { products, isLoading } = useProducts()

  return (
    <section className="max-w-[90vw] mx-auto mt-[186px] mb-[100px]">
      <div className="flex justify-between items-center gap-3 mb-6">
        <LetterPullUp text="Latest Drops" className="text-4xl font-medium" />
        <Link href="/shop" className="text-ui-fg-subtle hover:text-ui-fg-base">
          View All
        </Link>
      </div>
      {isLoading && <span>Loading...</span>}
      {products && !products.length && <span>No Products</span>}
      {products && products.length > 0 && (
        <Carousel containerClassName="gap-4" options={{ dragFree: true }}>
          {products.map((product, index) => (
            <FadeInUp
              key={product.id}
              delay={0.3 * index}
              className="flex-grow-0 flex-shrink-0 basis-[60%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <ProductPreview
                key={product.id}
                id={product.id as string}
                title={product.title as string}
                handle={product.handle as string}
                thumbnail={product?.thumbnail as any}
              />
            </FadeInUp>
          ))}
        </Carousel>
      )}
    </section>
  )
}

export default LatestProducts
