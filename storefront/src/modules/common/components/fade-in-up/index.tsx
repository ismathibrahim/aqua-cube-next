import React, { useEffect, useRef } from "react"
import { motion, useAnimation, MotionProps } from "framer-motion"

interface FadeInUpProps extends MotionProps {
  children: React.ReactNode
  duration?: number
  delay?: number
  threshold?: number
  className?: string
}

const FadeInUp: React.FC<FadeInUpProps> = ({
  children,
  duration = 0.5,
  delay = 0.5,
  threshold = 0.1,
  ...props
}) => {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
        }
      },
      {
        threshold: threshold,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls, threshold])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default FadeInUp
