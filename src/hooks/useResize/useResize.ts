import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

type useResizeProps = {
  moreOrLess?: "more" | "less"
  resizeCallback?: () => void
  moreOrLessValue?: number
}

const useResize = ({
  moreOrLess,
  resizeCallback,
  moreOrLessValue,
}: useResizeProps) => {
  const [isСonditionFulfilled, setIsСonditionFulfilled] = useState(false)
  const [pageWidth, setPageWidth] = useState(0)
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      setPageWidth(windowWidth)

      if (resizeCallback) {
        resizeCallback()
      }

      setIsMobile(windowWidth < 768)
      setIsTablet(windowWidth < 1024)

      if (!!moreOrLess && !!moreOrLessValue) {
        const conditionCheck =
          moreOrLess === "more"
            ? windowWidth > moreOrLessValue
            : windowWidth < moreOrLessValue
        setIsСonditionFulfilled(conditionCheck)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [pathname, moreOrLess, moreOrLessValue, resizeCallback])

  return { isСonditionFulfilled, pageWidth, isMobile, isTablet }
}

export default useResize
