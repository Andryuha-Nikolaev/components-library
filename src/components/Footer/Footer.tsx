"use client"

import React from "react"
import s from "./Footer.module.scss"
import classNames from "classnames"
import Container from "@/common/MainContainer/MainContainer"
import FooterLogo from "./components/FooterLogo/FooterLogo"
import SocialMediaBlock from "@/ui/social-media/SocialMediaBlock/SocialMediaBlock"
import AntiDoping from "./components/AntiDoping/AntiDoping"
import RootText from "@/ui/texts/RootText/RootText"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import BottomBlock from "./components/BottomBlock/BottomBlock"
import { usePathname } from "next/navigation"

const Footer = () => {
  const pathname = usePathname()

  return (
    <footer
      className={classNames(s["footer"])}
      itemScope
      itemType="http://schema.org/Organization"
    >
      <Container>
        <div className={classNames(s["wrap"])}>
          {pathname === "/" && (
            <div className={classNames(s["anti-doping"])}>
              <AntiDoping />
            </div>
          )}
          <div className={classNames(s["logo-block"])}>
            <FooterLogo />
          </div>

          <div className={classNames(s["content"])}>
            <div className={classNames(s["info"])}>
              <div className={classNames(s["info-content"])}>
                <RootText as="h6" fontVariant="russo">
                  Адрес
                </RootText>
                <RootButton
                  link="https://yandex.ru/maps/-/CDu~uO~j"
                  appearance="link"
                  role="link"
                >
                  г. Москва, Лужнецкая наб., д.&nbsp;8, Олимпийский комитет
                  России (Федерация&nbsp;дзюдо России, офис&nbsp;272)
                </RootButton>
              </div>
              <div className={classNames(s["info-content"])}>
                <RootText as="h6" fontVariant="russo">
                  Дирекция ФДР
                </RootText>

                <RootText as="text-lg" colorVariant="dark-gray">
                  Email:{" "}
                  <RootButton
                    textDecoration="underline"
                    className={classNames(s["link"])}
                    link="mailto:fdr@judo.ru"
                    appearance="link"
                    role="link"
                    linkTarget="_self"
                  >
                    fdr@judo.ru
                  </RootButton>
                </RootText>
                <RootText as="text-lg" colorVariant="dark-gray">
                  Тел.:{" "}
                  <RootButton
                    textDecoration="underline"
                    className={classNames(s["link"])}
                    link="tel:+74956370695"
                    appearance="link"
                    role="link"
                    linkTarget="_self"
                  >
                    8 (495) 637-06-95
                  </RootButton>
                </RootText>
              </div>
            </div>

            <div
              className={classNames(
                s["social-block"],
                pathname !== "/" && s["nohome"]
              )}
            >
              <SocialMediaBlock variant="footer" />
            </div>
            <div
              className={classNames(s["copy"], pathname !== "/" && s["nohome"])}
            >
              <RootText>
                При цитировании материалов ссылка на&nbsp;пресс-службу
                Федерации&nbsp;дзюдо России и&nbsp;официальный сайт www.judo.ru
                обязательна
              </RootText>
            </div>
          </div>
        </div>
        <div className={classNames(s["bottom-block"])}>
          <BottomBlock />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
