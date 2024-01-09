import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About us",
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
