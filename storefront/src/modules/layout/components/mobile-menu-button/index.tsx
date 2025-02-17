"use client"

import { motion } from "framer-motion"

interface MobileMenuButtonProps {
  crossed: boolean
  setCrossedState: (crossed: any) => void
}

export const MobileMenuButton = ({
  crossed,
  setCrossedState,
}: MobileMenuButtonProps) => {
  return (
    <button
      aria-expanded={crossed}
      onClick={() => setCrossedState((e: boolean) => !e)}
      className={
        "flex aspect-square h-fit select-none flex-col items-center justify-center hover:bg-gray-100 rounded-md p-2"
      }
    >
      <motion.div
        style={{
          width: "20px",
          borderTop: "2px solid #1d1d1d",
          transformOrigin: "center",
        }}
        initial={{ translateY: "-3px" }}
        animate={
          crossed
            ? { rotate: "45deg", translateY: "1px" }
            : { translateY: "-3px", rotate: "0deg" }
        }
        transition={{ bounce: 0, duration: 0.1 }}
      />
      <motion.div
        transition={{ bounce: 0, duration: 0.1 }}
        style={{
          width: "20px",
          borderTop: "2px solid #1d1d1d",
          transformOrigin: "center",
        }}
        initial={{ translateY: "3px" }}
        animate={
          crossed
            ? { rotate: "-45deg", translateY: "-1px" }
            : { translateY: "3px", rotate: "0deg", scaleX: 1 }
        }
      />
    </button>
  )
}
