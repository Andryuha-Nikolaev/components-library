import React from "react"
import s from "./Header.module.scss"
import classNames from "classnames"
import Link from "next/link"
import Container from "@/common/MainContainer/MainContainer"

const Header = () => {
  return (
    <header className={classNames(s["header"])}>
      <Container>
        <p>Header</p>
        <nav className={classNames(s["nav"])}>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/blog"}>Blog</Link>
        </nav>
      </Container>
    </header>
  )
}

export default Header
