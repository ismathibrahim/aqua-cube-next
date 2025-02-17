import React, { ReactNode, useCallback, useEffect, useState } from "react"
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons"
import "../../../../styles/embla.css"
import { cn } from "@lib/util/cn"

type Props = {
  options?: EmblaOptionsType
  children: ReactNode[]
  showArrows?: boolean
  showProgress?: boolean
  containerClassName?: string
}

const Carousel = ({
  children,
  options,
  showArrows,
  showProgress,
  containerClassName,
}: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [scrollProgress, setScrollProgress] = useState(0)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll)
  }, [emblaApi, onScroll])

  return (
    <div className="embla w-full">
      <div className="embla__viewport " ref={emblaRef}>
        <div className={cn("embla__container", containerClassName)}>
          {children}
        </div>
      </div>

      <div className="embla__controls">
        {showArrows && (
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        )}

        {showProgress && (
          <div className="embla__progress">
            <div
              className="embla__progress__bar"
              style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Carousel
