"use client"

import React from "react"
import s from "./Header.module.scss"
import classNames from "classnames"
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation"
import Container from "@/common/MainContainer/MainContainer"
import { useAppSelector } from "@/redux/hooks"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
]

const Header = () => {
  const isFixedHeader = useAppSelector((state) => state.site.isFixedHeader)

  return (
    <header
      id="header"
      className={classNames(s["header"], isFixedHeader && s["fixed"])}
    >
      <Container>
        <div className={classNames(s["block"])}>
          <p>Header</p>
          <HeaderNavigation navLinks={navLinks} />
        </div>
      </Container>
    </header>
  )
}

export default Header
