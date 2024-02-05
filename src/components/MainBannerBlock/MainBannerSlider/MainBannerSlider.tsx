"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import type { Banner } from "@/data/banners"
import s from "./MainBannerSlider.module.scss"
import Image from "next/image"
import classNames from "classnames"
import RootText from "@/ui/texts/RootText/RootText"
import RootButton from "@/ui/buttons/RootButton/RootButton"

const MainBannerSlider = ({ banners }: { banners: Banner[] }) => {
  return (
    <div>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className={classNames(s["swiper"], "main-banner-slider")}
        navigation={true}
        grabCursor={true}
        spaceBetween={20}
      >
        {banners.map((item, index) => (
          <SwiperSlide key={`banner-slide-${index}`} className={s["slide"]}>
            <div
              className={s["wrap"]}
              itemScope
              itemType="http://schema.org/NewsArticle"
            >
              <meta itemProp="headline" content={item.title} />
              <meta itemProp="datePublished" content={item.date} />
              <meta itemProp="articleBody" content={item.text} />

              <div className={s["first-block"]}>
                <div className={s["text-block"]}>
                  <RootText colorVariant="dark-gray">{item.date}</RootText>
                  <RootText className={s["title"]} tag="h3">
                    {item.title}
                  </RootText>
                  <RootText as="text-lg">{item.text}</RootText>
                </div>
                <div className={s["btn-wrap"]}>
                  <RootButton
                    role="next-link"
                    buttonPosition="left"
                    link={item.btn_link}
                  >
                    {item.btn_text}
                  </RootButton>
                </div>
              </div>
              <div
                className={s["img-wrap"]}
                itemProp="image"
                itemType="http://schema.org/ImageObject"
              >
                <Image
                  quality={90}
                  priority={true}
                  src={item.img_link}
                  alt="Баннер"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  sizes="808px, 544px"
                ></Image>
                <meta itemProp="url" content={item.img_link} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MainBannerSlider
