"use client"
import React from "react"
import s from "./HeaderTopNavigation.module.scss"
import classNames from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { pagesWithoutSubpages } from "@/constants/pages/pages"

const HeaderTopNavigation = () => {
  const pathname = usePathname()

  return (
    <div className={classNames(s["wrap"])}>
      <ul className={classNames(s["nav"])}>
        {pagesWithoutSubpages.map((link) => {
          const isActive = pathname === link.path

          return (
            <li key={`header-top-nav-${link.name}`}>
              <Link
                className={classNames(s["link"], isActive && s["active"])}
                href={link.path}
              >
                <div
                  className={classNames(
                    s["link-text"],
                    isActive && s["active"]
                  )}
                >
                  {link.name}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HeaderTopNavigation
