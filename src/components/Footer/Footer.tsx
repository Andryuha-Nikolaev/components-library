import React from "react"
import s from "./Footer.module.scss"
import classNames from "classnames"
import Container from "@/common/MainContainer/MainContainer"

const Footer = () => {
  return (
    <footer className={classNames(s["footer"])}>
      <Container>Footer</Container>
    </footer>
  )
}

export default Footer
