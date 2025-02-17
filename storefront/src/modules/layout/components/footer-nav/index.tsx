import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import { Text } from "@medusajs/ui"
import Link from "next/link"
import MedusaCTA from "../medusa-cta"
import { getCategoriesList } from "@lib/data/categories"

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
interface Props {
  categories: any
}

const FooterNav = async ({categories}:Props) => {

  return (
    <div className="bg-[#151515] w-full">
      <div className="max-w-[90vw] mx-auto flex flex-col">
        <div className="flex flex-col gap-y-6 sm:flex-row items-start justify-between py-8 sm:py-16 md:py-16">
          <div>
            <Link href="/" className="text-2xl text-white">
              Aqua Cube
            </Link>
            <div className="text-sm mt-4">
              <p className="text-gray-300">Aqua Cube Pvt Ltd</p>
              <p className="text-gray-400">
                Ma. Peetral, Vaidheri Hingun, K. Male’20204, Maldives
              </p>
            </div>
          </div>
          <div className="text-small-regular grid grid-cols-2 md:grid-cols-4 gap-x-10 md:gap-x-16 gap-y-8 mt-5 sm:mt-0">
            {categories && (
              <div className="flex flex-col gap-y-2">
                <span className="text-lg text-white mb-2">Shop</span>
                <ul className="grid grid-cols-1 gap-2">
                  {categories?.map((c:any) => {
                    if (c.parent_category || c.handle === "brands") {
                      return
                    }

                    return (
                      <li
                        className="flex flex-col gap-2 text-gray-400 text-base"
                        key={c.id}
                      >
                        <Link
                          className={clsx("hover:text-gray-500")}
                          href={`/categories/${c.handle}`}
                        >
                          {c.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            <div className="flex flex-col gap-y-2">
              <span className="text-lg text-white mb-2">Brands</span>
              <ul
                className={"grid grid-cols-1 gap-y-2 text-gray-400 text-base"}
              >
                {BRANDS.map((brand) => (
                  <li key={brand}>
                    <p
                      className="hover:text-gray-500"
                      // href={`/collections/${brand}`}
                    >
                      {brand}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="text-lg text-white mb-2">Company</span>
              <ul className="grid grid-cols-1 gap-y-2 text-gray-400 text-base">
                <li>
                  <Link className="hover:text-gray-500" href={`/contact`}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-500" href={`/team-riders`}>
                    Team Riders
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="text-lg text-white mb-2">Support</span>
              <ul className="grid grid-cols-1 gap-y-2 text-gray-400 text-base">
                <li>
                  <Link className="hover:text-gray-500" href={`/shipping`}>
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-500"
                    href={`/returns-and-refunds`}
                  >
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-500"
                    href={`/terms-and-conditions`}
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-500"
                    href={`/privacy-policy`}
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Aqua Cube. All rights reserved.
          </Text>
          {/* <MedusaCTA /> */}
        </div>
      </div>
    </div>
  )
}

export default FooterNav
