import React from "react"
import s from "./FooterLogo.module.scss"
import logo from "@/assets/img/logo/logo.svg"
import Image from "next/image"
import Link from "next/link"
import { pagesConstants } from "@/constants/pages/pages"

const FooterLogo = () => {
  return (
    <div className={s["block"]}>
      <Link href={pagesConstants.pages.main.path}>
        <Image
          src={logo}
          alt="лого"
          priority
          width={436}
          height={125}
          style={{
            width: "100%",
            height: "auto",
          }}
        ></Image>
      </Link>{" "}
    </div>
  )
}

export default FooterLogo
