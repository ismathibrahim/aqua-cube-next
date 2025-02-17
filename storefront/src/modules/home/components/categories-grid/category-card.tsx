import { cn } from "@lib/util/cn"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import React from "react"

interface CategoryCardProps {
  name: string
  handle: string
  thumbnail: StaticImageData
  className?: string
}

const CategoryCard = ({
  name,
  handle,
  thumbnail,
  className,
}: CategoryCardProps) => {
  return (
    <Link href={`/categories/${handle}`} key={handle}>
      <div
        className={cn(
          "rounded-[24px] overflow-hidden relative h-full cursor-pointer group",
          className
        )}
      >
        <Image
          key={handle}
          src={thumbnail}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-[1.025] transition-all duration-300"
        />
        {/* <div className="absolute bg-white rounded-[30px] py-2 px-4 top-2 right-2 hidden group-hover:block duration-300">
        <h3 className="text-lg font-medium">Shop Now</h3>
      </div> */}
        <div className="absolute bg-white rounded-[30px] py-2 px-4 left-2 bottom-2">
          <h3 className="text-sm font-medium">{name}</h3>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
