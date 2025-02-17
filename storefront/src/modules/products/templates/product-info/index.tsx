"use client"

import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React, { useState } from "react"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [seeMore, setSeeMore] = useState(false)

  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 mx-auto">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading
          level="h2"
          className="text-3xl leading-10 text-neutral-800"
          data-testid="product-title"
        >
          {product.title}
        </Heading>

        <Text className="text-medium text-ui-fg-subtle duration-300 transition-all">
          {product.description?.length && product.description?.length > 280 ? (
            <>
              {seeMore
                ? product.description
                : product.description?.slice(0, 280) + "..."}
            </>
          ) : (
            product.description
          )}

          {product.description?.length && product.description?.length > 280 ? (
            <span
              className="text-medium text-gray-800 hover:text-gray-900 cursor-pointer underline"
              onClick={() => setSeeMore(!seeMore)}
            >
              {seeMore ? "Show less" : "Show more"}
            </span>
          ) : null}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
