import { useEffect, useState } from "react"

const useScrollLock = (activeState: boolean) => {
  const [openCount, setOpenCount] = useState(0)

  useEffect(() => {
    const hasVerticalScrollbar = document.body.scrollHeight > window.innerHeight
    if (hasVerticalScrollbar) {
      console.log("Есть вертикальная прокрутка")
    } else {
      console.log("Нет вертикальной прокрутки")
    }
    if (activeState) {
      setOpenCount(1)
    }
  }, [activeState])

  console.log(openCount)

  useEffect(() => {
    const bodyFixed = () => {
      const scrollY =
        document.documentElement.style.getPropertyValue("--scroll-y")
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}`
    }

    const bodyStatic = () => {
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      // document.documentElement.style.scrollBehavior = "auto"
      // eslint-disable-next-line radix
      window.scrollTo(0, parseInt(scrollY || "0") * -1)
      // document.documentElement.style.scrollBehavior = "smooth"
    }

    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      )
    }

    if (activeState) {
      bodyFixed()
    } else if (openCount > 0) {
      bodyStatic()
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeState, openCount])
}

export default useScrollLock
