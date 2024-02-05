import React from "react"
import s from "./MainPageNewsBlock.module.scss"
import Container from "@/common/MainContainer/MainContainer"
import { pagesConstants } from "@/constants/pages/pages"
import RootText from "@/ui/texts/RootText/RootText"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import NewsItem from "@/ui/news/NewsItem/NewsItem"
import { getNews } from "@/services/getNews"
import type { NewsProps } from "@/data/news"
import MainPageNewsPanel from "./MainPageNewsPanel/MainPageNewsPanel"

async function MainPageNewsBlock() {
  const topNews: NewsProps[] | [] = await getNews({
    top: true,
    start: "1",
    end: "4",
  })

  // const allNews: NewsProps[] | [] = await getNews({
  //   start: "1",
  //   end: "6",
  // })

  return (
    <div className={s["block"]}>
      <Container>
        <RootText textAlign="center" tag="h2">
          {pagesConstants.pages.news.name}
        </RootText>
        <div className={s["wrap"]}>
          <div className={s["main-wrap"]}>
            <RootText tag="h5">Главное</RootText>
            <div className={s["main"]}>
              {topNews.map((item, index) => (
                <NewsItem
                  index={index}
                  item={item}
                  key={`top-news-main-page${index}`}
                  page="home"
                ></NewsItem>
              ))}
            </div>
          </div>
          <div className={s["panel"]}>
            <MainPageNewsPanel />
          </div>
        </div>
        <RootButton role="next-link" link={pagesConstants.pages.news.path}>
          Читать все новости
        </RootButton>
      </Container>
    </div>
  )
}

export default MainPageNewsBlock
