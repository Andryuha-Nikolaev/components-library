import type { Metadata } from "next"
import { pagesConstants } from "@/constants/pages/pages"
import MainBannerBlock from "@/components/MainBannerBlock/MainBannerBlock"
import MainPageNewsBlock from "@/components/MainPageNewsBlock/MainPageNewsBlock"

export const metadata: Metadata = {
  ...pagesConstants.pages.main.meta,
}

export default async function Home() {
  return (
    <div itemScope itemType="http://schema.org/WebPage">
      <meta itemProp="name" content="Главная страница" />
      <meta
        itemProp="description"
        content="Главная страница Федерации Дзюдо России"
      />
      <meta itemProp="url" content={`${process.env["NEXT_PUBLIC_BASE_URL"]}`} />
      <MainBannerBlock />
      <MainPageNewsBlock />
    </div>
  )
}
