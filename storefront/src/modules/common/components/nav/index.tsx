"use client"

import useToggleState from "@lib/hooks/use-toggle-state"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@modules/common/components/navigation-menu"
import CategoryCard from "@modules/home/components/categories-grid/category-card"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import React, { useState } from "react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"
import { useProductCategories } from "medusa-react"
import Link from "next/link"

import CategoryImage from "@assets/images/category-images/placeholder.png"
import { MobileMenuButton } from "@modules/layout/components/mobile-menu-button"
import MobileNav from "./mobile-nav"

const BRANDS = [
  "Aerofoils",
  "Cabrinha",
  "Connelly",
  "Duotone",
  "Esurf",
  "Fanatic",
  "Firewire",
  "Fliteboard",
  "ION",
  "JP Australia",
  "Neilpryde",
  "North",
  "Proline",
  "Seabob",
  "Tahe",
  "Topcat",
  "Wow Tubes",
]

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { product_categories } = useProductCategories()
  const parentCategories =
    product_categories?.filter(
      (c) => !c.parent_category?.id && c.handle !== "brands"
    ) || []

  const [hoveredCategory, setHoveredCategory] = useState(
    parentCategories?.[0] || null
  )

  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          if (!mobileMenuOpen) {
            setVisible(false)
          }
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={`sticky top-0 inset-x-0 z-50 group font-sans  flex w-full p-2 h-16`}
      >
        <header
          className={`relative px-4 sm:px-6 mx-auto rounded-xl w-full bg-white shadow-sm border duration-300  ${
            mobileMenuOpen ? "h-[98vh] " : "h-12"
          }`}
        >
          <div
            className={` text-[#1d1d1d] flex items-center justify-between w-full h-11 relative gap-3 duration-300`}
          >
            <div className="flex items-center h-full">
              <Link
                href="/"
                className="text-base font-bold hover:bg-blend-darken"
              >
                Aqua Cube
              </Link>
            </div>

            <NavigationMenu className="hidden lg:flex w-full lg:px-36 max-w-lg">
              <NavigationMenuList className="text-sm flex items-center">
                {/* <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[700px] lg:grid-cols-[.5fr_1fr] ">
                      <ul className="grid grid-cols-1 gap-2">
                        {parentCategories?.map((c) => (
                          <li
                            className="flex flex-col gap-2 text-ui-fg-subtle text-sm "
                            key={c.id}
                          >
                            <Link href={`/${c.handle}`}>
                              <NavigationMenuLink
                                className={`block  px-4 py-2 rounded-md ${
                                  hoveredCategory?.id === c.id
                                    ? "bg-gray-100 text-ui-fg-base"
                                    : ""
                                }`}
                                onMouseOver={() => setHoveredCategory(c)}
                              >
                                {c.name}
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="">
                        {hoveredCategory && (
                          <ul className="grid grid-cols-2 gap-2">
                            {hoveredCategory?.category_children?.map((c) => (
                              <li
                                className="flex flex-col gap-2 text-ui-fg-subtle text-sm "
                                key={c.id}
                              >
                                <NavigationMenuLink className="h-36">
                                  <CategoryCard
                                    handle={c.handle}
                                    name={c.name}
                                    thumbnail={CategoryImage}
                                    className="rounded-2xl"
                                  />
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Brands</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[700px]">
                      <ul className="grid grid-cols-3 gap-3">
                        {BRANDS?.map((brand) => {
                          return (
                            <li
                              className="flex flex-col gap-2 text-ui-fg-subtle text-sm "
                              key={brand}
                            >
                              {/* <Link href={`/${brand}`}> */}
                              <NavigationMenuLink className="block hover:text-ui-fg-base px-4 py-2 rounded-md hover:bg-gray-100">
                                {brand}
                              </NavigationMenuLink>
                              {/* </Link> */}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 hover:bg-gray-100 rounded-lg">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-x-6 h-full justify-end">
              {/* <div className="hidden small:flex items-center gap-x-6 h-full">
                {process.env.FEATURE_SEARCH_ENABLED && (
                  <DesktopSearchModal
                    state={searchModalState}
                    close={searchModalClose}
                    open={searchModalOpen}
                  />
                )}
                <Link
                className="hover:text-ui-fg-disabled text-sm"
                href="/account"
              >
                Account
              </Link>
              </div> */}

              <div onClick={() => setMobileMenuOpen(false)}>
                <CartDropdown />
              </div>
              <div className="-mr-2 lg:hidden">
                <MobileMenuButton
                  crossed={mobileMenuOpen}
                  setCrossedState={setMobileMenuOpen}
                />
              </div>
            </div>
          </div>

          <div className={` h-[92%] w-full duration-300 `}>
            {mobileMenuOpen && (
              <MobileNav
                categories={parentCategories}
                brands={BRANDS}
                closeMobileMenu={() => setMobileMenuOpen(false)}
              />
            )}
          </div>
        </header>
      </motion.div>
    </AnimatePresence>
  )
}

export default Nav
