import { useEffect, useState } from "react"

const useScrollLock = (activeState: boolean) => {
  const [openCount, setOpenCount] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // console.log(scrollY)

  const bodyFixed = () => {
    // const wrapper = document.querySelector("#wrapper") as HTMLElement | null
    // const hasVerticalScrollbar = document.body.scrollHeight > window.innerHeight
    // if (hasVerticalScrollbar && wrapper) {
    //   wrapper.style.overflowY = "scroll"
    // }

    // const scrollY =
    //   document.documentElement.style.getPropertyValue("--scroll-y")

    const customScrollbarThumb = document.querySelector(
      "#custom-scrollbar-thumb"
    ) as HTMLElement | null

    if (customScrollbarThumb) {
      customScrollbarThumb.style.visibility = "hidden"
    }

    document.body.style.position = "fixed"
    document.body.style.top = `-${scrollY}px`
  }

  const bodyStatic = () => {
    const customScrollbarThumb = document.querySelector(
      "#custom-scrollbar-thumb"
    ) as HTMLElement | null

    if (customScrollbarThumb) {
      customScrollbarThumb.style.visibility = "visible"
    }
    // const wrapper = document.querySelector("#wrapper") as HTMLElement | null
    const scrollY = document.body.style.top
    document.body.style.position = ""
    document.body.style.top = ""
    // document.documentElement.style.scrollBehavior = "auto"

    window.scrollTo(0, parseInt(scrollY || "0") * -1)
    // document.documentElement.style.scrollBehavior = "smooth"
    // if (wrapper) {
    //   wrapper.style.overflowY = ""
    // }
  }

  const handleScroll = () => {
    // document.documentElement.style.setProperty(
    //   "--scroll-y",
    //   `${window.scrollY}px`
    // )

    setScrollY(window.scrollY)
  }

  useEffect(() => {
    if (activeState) {
      setOpenCount(1)
    }
  }, [activeState])

  useEffect(() => {
    if (activeState) {
      bodyFixed()
    } else if (openCount > 0) {
      bodyStatic()
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeState])
}

export default useScrollLock
