import Footer from "@/components/Footer/Footer"
import Container from "@/common/MainContainer/MainContainer"

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}
