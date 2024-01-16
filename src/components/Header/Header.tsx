import React from "react"
import s from "./Header.module.scss"
import classNames from "classnames"
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation"
import Container from "@/common/MainContainer/MainContainer"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
]

const Header = () => {
  return (
    <header className={classNames(s["header"])}>
      <Container>
        <p>Header</p>
        <HeaderNavigation navLinks={navLinks} />
      </Container>
    </header>
  )
}

export default Header
