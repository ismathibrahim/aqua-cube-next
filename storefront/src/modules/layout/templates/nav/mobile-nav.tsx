import React from "react"
import { Accordion, Content, Tab, Trigger } from "./accordion"
import Link from "next/link"
import FadeInUp from "@modules/common/components/fade-in-up"

interface MobileNavProps {
  categories: any[]
  brands: any[]
  closeMobileMenu: () => void
}
const MobileNav = ({ categories, brands, closeMobileMenu }: MobileNavProps) => {
  return (
    <div className="pt-3 border-t">
      <Accordion>
        <FadeInUp delay={0.1}>
          <Tab>
            <Trigger>
              <p className="text-2xl">Categories</p>
            </Trigger>
            <Content>
              {categories?.map((c) => (
                <li
                  className="flex flex-col gap-2 text-ui-fg-subtle text-sm "
                  key={c.id}
                >
                  <Link href={`/${c.handle}`} onClick={closeMobileMenu}>
                    <p
                      className={`block  px-4 py-2 rounded-md hover:bg-gray-100`}
                    >
                      {c.name}
                    </p>
                  </Link>
                </li>
              ))}
            </Content>
          </Tab>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <Tab>
            <Trigger>
              <p className="text-2xl">Brands</p>
            </Trigger>
            <Content>
              {brands?.map((c) => (
                <li
                  className="flex flex-col gap-2 text-ui-fg-subtle text-sm "
                  key={c.id}
                >
                  {/* <Link href={`/${c}`}> */}
                  <p
                    className={`block  px-4 py-2 rounded-md hover:bg-gray-100`}
                  >
                    {c}
                  </p>
                  {/* </Link> */}
                </li>
              ))}
            </Content>
          </Tab>
        </FadeInUp>
      </Accordion>
      <FadeInUp delay={0.3}>
        <p className="text-2xl mt-4">Contact</p>
      </FadeInUp>
    </div>
  )
}

export default MobileNav
