"use client"

import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import Carousel from "@modules/common/components/carousel"
import { useScreen } from "usehooks-ts"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const screen = useScreen()
  return (
    <div className="flex items-start relative">
       {screen.width < 1024 ? (
        <Carousel containerClassName="gap-3 sm:gap-4 py-1">
          {images.map((image, index) => {
            return (
              <div
                key={image.id}
                className="relative aspect-[29/34] w-full overflow-hidden flex-shrink-0 flex-grow-0 basis-[75%] lg:basis-1/2 "
                id={image.id}
              >
                <Image
                  src={image.url}
                  priority={index <= 2 ? true : false}
                  className="absolute inset-0 rounded-rounded"
                  alt={`Product image ${index + 1}`}
                  fill
                  sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            )
          })}
        </Carousel>
      ) : (
        <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
          {images.map((image, index) => {
            return (
              <div
                key={image.id}
                className="relative aspect-[29/34] w-full overflow-hidden rounded-rounded border border-neutral-200"
                id={image.id}
              >
                <Image
                  src={image.url}
                  priority={index <= 2 ? true : false}
                  className="absolute inset-0 rounded-rounded"
                  alt={`Product image ${index + 1}`}
                  fill
                  sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ImageGallery
