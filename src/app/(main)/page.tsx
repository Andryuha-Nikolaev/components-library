import type { Metadata } from "next"
import metaConstants from "@/constants/meta/meta"

export const metadata: Metadata = {
  title: `Home | ${metaConstants.META_SITE_NAME}`,
  description: metaConstants.META_SITE_DESCRIPTION,
}

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
