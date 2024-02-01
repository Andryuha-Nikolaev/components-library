"use client"
import React from "react"
import s from "./HeaderNavigation.module.scss"
import classNames from "classnames"
import { usePathname } from "next/navigation"
import { pagesWithSubpages } from "@/constants/pages/pages"
import HeaderNavigationItem from "../HeaderNavigationItem/HeaderNavigationItem"
import useResize from "@/hooks/useResize/useResize"
import { useAppDispatch } from "@/redux/hooks"
import { setActiveItem } from "@/redux/features/accordionSlice"

const HeaderNavigation = ({ isShowHeader }: { isShowHeader: boolean }) => {
  const pathname = usePathname()
  const dispatch = useAppDispatch()

  const { isTablet, isMobile } = useResize({})

  return (
    <div className={classNames(s["wrap"])}>
      <ul
        onMouseLeave={() => {
          if (!isTablet) {
            dispatch(setActiveItem(null))
          }
        }}
        className={classNames(s["nav"])}
      >
        {pagesWithSubpages.map((item, index) => (
          <React.Fragment key={`header-nav-${item.name}`}>
            <HeaderNavigationItem
              isShowHeader={isShowHeader}
              isMobile={isMobile}
              isTablet={isTablet}
              pathname={pathname}
              item={item}
            ></HeaderNavigationItem>
            {index === 2 && (
              <li className={s["separator"]} key={`separator-${index}`}>
                <div className={s["separator-el"]}></div>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}

export default HeaderNavigation
