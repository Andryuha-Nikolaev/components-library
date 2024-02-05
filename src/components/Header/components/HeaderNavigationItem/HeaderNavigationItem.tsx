"use client"
import React from "react"
import s from "./HeaderNavigationItem.module.scss"
import classNames from "classnames"
import Link from "next/link"

const HeaderNavigationItem = ({
  item,
  pathname,
}: {
  pathname: string
  item: any
}) => {
  const isFact = pathname.includes(item.link)

  return (
    <li>
      <Link
        className={classNames(s["link"], isFact && s["fact"])}
        href={item.link}
      >
        {item.name}
      </Link>
    </li>
  )
}

export default HeaderNavigationItem
