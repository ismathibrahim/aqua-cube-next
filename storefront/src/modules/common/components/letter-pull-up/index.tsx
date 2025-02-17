"use client"

import { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface Props {
  text: string
  className?: string
}

export default function LetterPullUp({ text, className }: Props) {
  const ctrls = useAnimation()

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
    if (!inView) {
      ctrls.start("hidden")
    }
  }, [ctrls, inView])

  const wordAnimation = {
    hidden: {},
    visible: {},
  }

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <h2 aria-label={text} role="heading" className={className}>
      {text.split(" ").map((word, index) => {
        return (
          <motion.span
            ref={ref}
            className="inline-block mr-[0.25em] whitespace-nowrap"
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                  className="inline-block -mr-[0.05em]"
                >
                  {character}
                </motion.span>
              )
            })}
          </motion.span>
        )
      })}
    </h2>
  )
}
