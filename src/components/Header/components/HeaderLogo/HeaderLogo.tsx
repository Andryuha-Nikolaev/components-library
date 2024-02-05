import React from "react"
import s from "./HeaderLogo.module.scss"
// import logo from "@/assets/img/logo/logo.svg"
// import Image from "next/image"
import Link from "next/link"
import { pagesConstants } from "@/constants/pages/pages"
import RootText from "@/ui/texts/RootText/RootText"

const HeaderLogo = () => {
  return (
    <Link className={s["link"]} href={pagesConstants.pages.main.path}>
      <div className={s["block"]}>
        {/* <Image
          src={logo}
          alt="лого"
          priority
          width={222}
          height={64}
          style={{
            width: "100%",
            height: "auto",
          }}
        ></Image> */}
        <RootText colorVariant="white" as="h3">
          LOGO
        </RootText>
      </div>
    </Link>
  )
}

export default HeaderLogo
