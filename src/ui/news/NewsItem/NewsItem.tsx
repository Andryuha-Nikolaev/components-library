import React from "react"
import s from "./NewsItem.module.scss"
import RootText from "@/ui/texts/RootText/RootText"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import Image from "next/image"
import classNames from "classnames"
import type { NewsProps } from "@/data/news"

type NewsItemProps = {
  page: "home" | "main-news" | "news"
  item: NewsProps
  index?: number
}

const NewsItem = ({ page, item, index }: NewsItemProps) => {
  return (
    <div
      className={classNames(s["block"], s[page], index && s[`index${index}`])}
    >
      <div className={s["img-wrap"]}>
        <Image
          quality={80}
          fill
          style={{
            objectFit: "cover",
          }}
          // sizes="100vw, 100vw"
          src={item.previewImg}
          alt="превью новости"
        ></Image>
      </div>
      <div className={s["info-wrap"]}>
        <RootText colorVariant="dark-gray">{item.date}</RootText>
        <RootText colorVariant="dark-gray">Х дней назад</RootText>
      </div>
      <div className={s["link-wrap"]}>
        <RootButton
          appearance="link"
          link={`/news/${item.id}`}
          role="next-link"
          styleVariant="3"
        >
          {item.title}
        </RootButton>
      </div>
    </div>
  )
}

export default NewsItem
