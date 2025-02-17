"use client"

import { cn } from "@lib/util/cn"

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"
import { motion } from "framer-motion"
import { twMerge } from "tailwind-merge"

export const Accordion: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <dl className={cn("flex flex-col items-start justify-start", className)}>
      {children}
    </dl>
  )
}

const TabContext = createContext<{
  isOpen: boolean
  setOpenState: Dispatch<SetStateAction<boolean>>
} | null>(null)

export const Tab: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  const [isOpen, setOpenState] = useState(false)

  return (
    <TabContext.Provider value={{ isOpen, setOpenState }}>
      <div className={cn("w-full py-4", className)}>{children}</div>
    </TabContext.Provider>
  )
}

export const Trigger: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  const { setOpenState, isOpen } = useContext(TabContext)!

  return (
    <dt>
      <button
        aria-expanded={isOpen}
        onClick={() => setOpenState((e) => !e)}
        className={cn(
          "flex w-full items-center justify-between gap-2 text-start text-xl font-normal",
          className
        )}
      >
        <span>{children}</span>
        <IconChevronDown
          className={twMerge(
            isOpen ? "rotate-180" : "rotate-0",
            "min-w-[20px] transition-all duration-300"
          )}
        />
      </button>
    </dt>
  )
}

export const Content: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  const { isOpen } = useContext(TabContext)!
  return (
    <motion.dd
      layout
      aria-hidden={isOpen}
      className={cn("overflow-hidden text-secondary", className)}
      initial={{ height: 0, pointerEvents: "none" }}
      animate={
        isOpen
          ? { height: "fit-content", pointerEvents: "auto", marginTop: "1rem" }
          : { height: 0, pointerEvents: "none" }
      }
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.dd>
  )
}

const IconChevronDown = ({ className }: { className?: string }) => (
  <div className={className}>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_790_11)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.5892 13.089C10.4329 13.2453 10.221 13.333 10 13.333C9.77903 13.333 9.56711 13.2453 9.41083 13.089L4.69667 8.37488C4.61708 8.29801 4.55359 8.20605 4.50992 8.10438C4.46624 8.00271 4.44325 7.89336 4.44229 7.78271C4.44133 7.67206 4.46242 7.56233 4.50432 7.45992C4.54622 7.3575 4.60809 7.26446 4.68634 7.18622C4.76458 7.10797 4.85763 7.04609 4.96004 7.00419C5.06245 6.96229 5.17219 6.94121 5.28284 6.94217C5.39348 6.94313 5.50283 6.96612 5.6045 7.00979C5.70617 7.05347 5.79813 7.11695 5.875 7.19655L10 11.3215L14.125 7.19655C14.2822 7.04475 14.4927 6.96075 14.7112 6.96265C14.9297 6.96455 15.1387 7.05219 15.2932 7.2067C15.4477 7.3612 15.5353 7.57021 15.5372 7.78871C15.5391 8.00721 15.4551 8.21771 15.3033 8.37488L10.5892 13.089Z"
          fill="#9CA3AF"
        />
      </g>
      <defs>
        <clipPath id="clip0_790_11">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
)
