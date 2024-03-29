import type { Metadata } from "next"
import metaConstants from "@/constants/meta/meta"
import { Open_Sans } from "next/font/google"
import { Providers } from "@/redux/provider"
import "../style/globals.scss"
import Header from "@/components/Header/Header"
import ModalWrapper from "@/modal/ModalWrapper/ModalWrapper"
import CustomScrollbarWrapper from "@/common/CustomScrollbarWrapper/CustomScrollbarWrapper"
import RootStreak from "@/ui/other/RootStreak/RootStreak"

const inter = Open_Sans({ subsets: ["latin", "cyrillic"], preload: true })

export const metadata: Metadata = {
  title: metaConstants.META_SITE_NAME,
  description: metaConstants.META_SITE_DESCRIPTION,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers count={0}>
          <CustomScrollbarWrapper />
          <Header />
          <RootStreak variant="fixed-header" />
          {children}
          <ModalWrapper />
        </Providers>
      </body>
    </html>
  )
}
