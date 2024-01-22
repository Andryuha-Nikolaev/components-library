import type { Metadata } from "next"
import Link from "next/link"
import metaConstants from "@/constants/meta/meta"

export const metadata: Metadata = {
  title: `About us | ${metaConstants.META_SITE_NAME}`,
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>About us</h1>
      <ul>
        <li>
          <Link href="/about/contacts">contacts</Link>
        </li>
        <li>
          <Link href="/about/team">team</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}
