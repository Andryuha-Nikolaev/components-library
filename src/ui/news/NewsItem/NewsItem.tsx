import React from "react"
import s from "./NewsItem.module.scss"
import RootText from "@/ui/texts/RootText/RootText"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import Image from "next/image"
import classNames from "classnames"
import image from "@/assets/test/judo-test.png"

type NewsItemProps = {
  page: "home" | "main-news" | "news"
}

const NewsItem = ({ page }: NewsItemProps) => {
  return (
    <div className={classNames(s["block"], s[page])}>
      <div className={s["img-wrap"]}>
        <Image
          quality={80}
          fill
          style={{
            objectFit: "cover",
          }}
          sizes="100vw, 100vw"
          src={image}
          alt="превью новости"
        ></Image>
      </div>
      <div className={s["info-wrap"]}>
        <RootText colorVariant="dark-gray">17.07.2023</RootText>
        <RootText colorVariant="dark-gray">Х дней назад</RootText>
      </div>
      <div className={s["link-wrap"]}>
        <RootButton
          appearance="link"
          link="/"
          role="next-link"
          styleVariant="3"
        >
          Суперфинал детской лиги дзюдо «Триумф Energy»
        </RootButton>
      </div>
    </div>
  )
}

export default NewsItem
