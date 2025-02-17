import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { Suspense } from "react"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import LatestProducts from "@modules/home/components/latest-products"
import CategoriesGrid from "@modules/home/components/categories-grid"
import Testimonials from "@modules/home/components/testimonials"
import StoreLocation from "@modules/home/components/store-location"
import BrandsScroller from "@modules/home/components/brands-scroller"

export const metadata: Metadata = {
  title: "Aqua Cube | Maldives Watersports Equipment & Gear",
  description: "Aqua Cube offers comprehensive watersports equipment for every marine adventure in the Maldives. Professional gear, expert advice, island-tested quality.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <Suspense fallback={<SkeletonHomepageProducts count={3} />}>
        <BrandsScroller />
        {/* <LatestProducts /> */}
        <CategoriesGrid />
        <Testimonials />
        {/* <FeaturedProducts collections={collections} /> */}
        <StoreLocation />
      </Suspense>
    </>
  )
}
