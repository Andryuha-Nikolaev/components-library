import React from "react"
import s from "./ScrollTopButton.module.scss"
import ScrollTopIcon from "@/ui/icons/ScrollTopIcon/ScrollTopIcon"
import RootText from "@/ui/texts/RootText/RootText"
import anchorsConstants from "@/constants/anchors/anchors"

const ScrollTopButton = () => {
  const handleScrollTop = () => {
    const target = document.getElementById(anchorsConstants.ANCHOR_TOP)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={s["wrap"]}>
      <button className={s["btn"]} onClick={handleScrollTop}>
        <ScrollTopIcon />
      </button>
      <RootText tag="p">наверх</RootText>
    </div>
  )
}

export default ScrollTopButton
