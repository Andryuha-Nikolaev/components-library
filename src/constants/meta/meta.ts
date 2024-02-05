const metaConstants = {
  title: "Мета заголовок",
  description: "Мета описание",
  metadataBase: new URL(
    process.env["NEXT_PUBLIC_BASE_URL"] ?? "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    // images: [
    //   `${process.env["NEXT_PUBLIC_BASE_URL"] ?? "http://localhost:3000"}/og-image.png`,
    // ],
    locale: "ru_RU",
  },
}

export default metaConstants
