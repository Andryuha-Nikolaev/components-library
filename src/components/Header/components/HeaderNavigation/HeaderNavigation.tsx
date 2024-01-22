"use client"
import React from "react"
import s from "./HeaderNavigation.module.scss"
import classNames from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLink = {
  label: string
  href: string
}

type Props = {
  navLinks: NavLink[]
}

const HeaderNavigation = ({ navLinks }: Props) => {
  const pathname = usePathname()

  return (
    <div className={classNames(s["wrap"])}>
      <ul className={classNames(s["nav"])}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href

          return (
            <li key={`header-nav-${link.label}`}>
              <Link
                className={classNames(s["link"], isActive && s["active"])}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HeaderNavigation
