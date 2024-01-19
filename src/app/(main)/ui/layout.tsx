import type { Metadata } from "next"
import metaConstants from "@/constants/meta/meta"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import Header from "@/components/Header/Header"

export const metadata: Metadata = {
  title: `UI | ${metaConstants.META_SITE_NAME}`,
}

const linksArr = [
  {
    link: "/ui/buttons",
    name: "Кнопки",
  },
  {
    link: "/ui/texts",
    name: "Тексты",
  },
]

export default function UiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <h1>UI Page</h1>
      <ul>
        {linksArr.map((item) => (
          <li key={`ui-links-key-${item.name}`}>
            <RootButton
              appearance="link"
              styleVariant="2"
              withArrow
              link={item.link}
              textTransform="uppercase"
              role="next-link"
            >
              {item.name}
            </RootButton>
          </li>
        ))}
      </ul>
      {children}
    </div>
  )
}
