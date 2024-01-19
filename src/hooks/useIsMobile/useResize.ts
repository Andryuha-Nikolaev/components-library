import { useEffect, useState } from "react"

const useResize = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [wrapperWidth, setWrapperWidth] = useState(0)

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
  }, [])

  console.log(wrapperWidth)

  return { isMobile, wrapperWidth }
}

export default useResize
