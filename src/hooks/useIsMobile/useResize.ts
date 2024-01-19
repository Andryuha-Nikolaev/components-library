import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const useResize = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [wrapperWidth, setWrapperWidth] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)

      const wrapperElement = document.getElementById("wrapper")
      if (wrapperElement) {
        setWrapperWidth(wrapperElement.clientWidth)
        document.documentElement.style.setProperty(
          "--page-width",
          `${wrapperElement.clientWidth}px`
        )
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [pathname])

  return { isMobile, wrapperWidth }
}

export default useResize
