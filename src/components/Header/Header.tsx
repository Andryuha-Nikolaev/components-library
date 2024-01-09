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
        <ul className={classNames(s["nav"])}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
        </ul>
      </Container>
    </header>
  )
}

export default Header
