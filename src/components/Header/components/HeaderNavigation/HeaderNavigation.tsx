"use client"
import React from "react"
import s from "./HeaderNavigation.module.scss"
import classNames from "classnames"
import { usePathname } from "next/navigation"
import HeaderNavigationItem from "../HeaderNavigationItem/HeaderNavigationItem"

const navArr = [
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
  { name: "UI", link: "/ui" },
]

const HeaderNavigation = () => {
  const pathname = usePathname()

  return (
    <nav className={classNames(s["wrap"])}>
      <ul className={classNames(s["nav"])}>
        {navArr.map((item) => (
          <HeaderNavigationItem
            key={`header-nav-${item.name}`}
            pathname={pathname}
            item={item}
          ></HeaderNavigationItem>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderNavigation
