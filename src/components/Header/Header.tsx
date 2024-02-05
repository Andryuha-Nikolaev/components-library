"use client"

import React, { useState, useEffect } from "react"
import s from "./Header.module.scss"
import classNames from "classnames"
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation"
import Container from "@/common/MainContainer/MainContainer"
import { useAppSelector } from "@/redux/hooks"
import HeaderLogo from "./components/HeaderLogo/HeaderLogo"
import HeaderButtons from "./components/HeaderButtons/HeaderButtons"
import BurgerIcon from "@/ui/icons/BurgerIcon/BurgerIcon"
import useScrollLock from "@/hooks/useScrollLock/useScrollLock"
import { usePathname } from "next/navigation"
import SocialMediaBlock from "@/ui/social-media/SocialMediaBlock/SocialMediaBlock"

const Header = () => {
  const isFixedHeader = useAppSelector((state) => state.site.isFixedHeader)
  const { isTablet } = useAppSelector((state) => state.site)

  const [isOpenBurger, setIsOpenBurger] = useState(false)

  const pathname = usePathname()

  const closeBurger = () => {
    setIsOpenBurger(false)
  }

  useEffect(() => {
    closeBurger()
  }, [pathname])

  useEffect(() => {
    if (!isTablet) {
      closeBurger()
    }
  }, [isTablet])

  useScrollLock(isOpenBurger)

  const toggleBurger = () => {
    setIsOpenBurger(!isOpenBurger)
  }

  return (
    <header
      id="header"
      className={classNames(s["header"], isFixedHeader && s["fixed"])}
    >
      <Container>
        <div className={classNames(s["block"])}>
          <HeaderLogo />
          <div className={classNames(s["burger"], isOpenBurger && s["open"])}>
            <div className={classNames(s["content"])}>
              <div className={classNames(s["nav-block"])}>
                <HeaderNavigation />
              </div>
              <div className={classNames(s["social-block"])}>
                <SocialMediaBlock variant="header" />
              </div>
            </div>
          </div>
          <HeaderButtons>
            <button
              aria-label="burger button"
              onClick={toggleBurger}
              className={classNames(s["burger-btn"])}
            >
              <BurgerIcon isOpen={isOpenBurger} />
            </button>
          </HeaderButtons>
        </div>
      </Container>
    </header>
  )
}

export default Header
