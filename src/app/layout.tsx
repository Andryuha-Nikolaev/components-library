import type { Metadata } from "next"
import metaConstants from "@/constants/meta/meta"
import { Open_Sans } from "next/font/google"
import { Providers } from "@/redux/provider"
import "../style/globals.scss"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Container from "@/common/MainContainer/MainContainer"
// import { getAllPosts } from "@/services/getPosts"

const inter = Open_Sans({ subsets: ["latin", "cyrillic"], preload: true })

export const metadata: Metadata = {
  title: `Home | ${metaConstants.META_SITE_NAME}`,
  description: metaConstants.META_SITE_DESCRIPTION,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const posts = await getAllPosts()

  return (
    <html lang="ru">
      <body className={inter.className}>
        {/* <Providers count={posts.length}>{children}</Providers> */}
        <Providers count={0}>
          <Header />
          <main>
            <Container>{children}</Container>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
