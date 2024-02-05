import { CategoryName } from "@/data/news"

export type GetNewsParams = {
  category?: CategoryName | ""
  start?: string
  end?: string
  top?: boolean
  from?: string
  to?: string
  advertising?: boolean
}

const REVALIDATE = 3600
const baseUrl = process.env.NEXT_API_LOCAL_URL

export const getNews = async ({
  category,
  start,
  end,
  top,
  from,
  to,
  advertising,
}: GetNewsParams) => {
  // Создаем объект с параметрами, которые имеют значения
  const queryParams: { [key: string]: string | boolean } = {}

  if (category) queryParams.category = category
  if (start) queryParams._start = start
  if (end) queryParams._end = end
  if (top) queryParams.top = top.toString()
  if (from) queryParams.from = from
  if (to) queryParams.to = to
  if (advertising) queryParams.advertising = advertising.toString()

  // Собираем строку запроса из параметров
  const queryString = Object.keys(queryParams)
    .map((key) => `${key}=${queryParams[key]}`)
    .join("&")

  const response = await fetch(`${baseUrl}/news?${queryString}`, {
    next: {
      revalidate: REVALIDATE,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error("Unable to fetch news.")
  }

  return data
}
