import { news } from "@/data/news"

import { NextResponse, NextRequest } from "next/server"

function parseDate(dateString: string): Date | null {
  const dateParts = dateString.split(".")
  if (dateParts.length !== 3) {
    return null
  }

  const day = parseInt(dateParts[0], 10)
  const month = parseInt(dateParts[1], 10) - 1 // месяцы в JS начинаются с 0
  const year = parseInt(dateParts[2], 10)

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return null
  }

  return new Date(year, month, day)
}

const topNews = news.filter((item) => item.type === "top")

const advertisingNews = news.filter((item) => item.type === "advertising")

const allNews = news.filter((item) => item.type !== "advertising")

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const category = searchParams.get("category")
  const start = searchParams.get("_start")
  const end = searchParams.get("_end")
  const top = searchParams.get("top")
  const advertising = searchParams.get("advertising")
  const from = searchParams.get("from")
  const to = searchParams.get("to")

  let currentNews = allNews

  if (top) {
    currentNews = topNews
  }

  if (advertising) {
    currentNews = advertisingNews
  }

  if (category) {
    currentNews = currentNews.filter((item) => item.category === category)
  }

  if (from && to) {
    const startDate = parseDate(from)
    const endDate = parseDate(to)

    if (startDate && endDate) {
      currentNews = currentNews.filter((item) => {
        const newsDate = parseDate(item.date)
        return newsDate && newsDate >= startDate && newsDate <= endDate
      })
    }
  }

  if (start && end) {
    currentNews = currentNews.slice(+start - 1, +end)
  }

  return NextResponse.json(currentNews)
}
