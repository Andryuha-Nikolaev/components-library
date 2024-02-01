import React from "react"
import s from "./HeaderLogo.module.scss"
import logo from "@/assets/img/logo/logo.svg"
import Image from "next/image"
import Link from "next/link"
import { pagesConstants } from "@/constants/pages/pages"

const HeaderLogo = () => {
  return (
    <Link href={pagesConstants.pages.main.path}>
      <div className={s["block"]}>
        <Image
          src={logo}
          alt="лого"
          priority
          width={222}
          height={64}
          style={{
            width: "100%",
            height: "auto",
          }}
        ></Image>
      </div>
    </Link>
  )
}

export default HeaderLogo
