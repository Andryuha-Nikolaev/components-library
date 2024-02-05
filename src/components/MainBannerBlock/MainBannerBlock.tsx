import React from "react"
import s from "./MainBannerBlock.module.scss"

import { getAllBanners } from "@/services/getBanners"
import type { Banner } from "@/data/banners"
import MainBannerSlider from "./MainBannerSlider/MainBannerSlider"
import Container from "@/common/MainContainer/MainContainer"

async function MainBannerBlock() {
  const banners: Banner[] = await getAllBanners()

  return (
    <section className={s["block"]}>
      <Container>
        <MainBannerSlider banners={banners}></MainBannerSlider>
      </Container>
    </section>
  )
}

export default MainBannerBlock
