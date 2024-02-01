import type { Metadata } from "next"
import { pagesConstants } from "@/constants/pages/pages"

export const metadata: Metadata = {
  ...pagesConstants.pages.main.meta,
}

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
