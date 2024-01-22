import React, { createElement } from "react"
import s from "./RootText.module.scss"
import classNames from "classnames"

type TagsProps = "h1" | "h2" | "h3" | "h4" | "p" | "span"

type RootTextProps = {
  tag: TagsProps
  as?: TagsProps
  children: React.ReactNode
  className?: string
  styleVariant?: "1" | "2"
}

const RootText = ({
  tag,
  as,
  children,
  className,
  styleVariant,
}: RootTextProps) => {
  const textClassName = classNames(
    s["text"],
    s[`variant${styleVariant}`],
    as ? s[as] : s[tag],
    className && className
  )

  const textProps = {
    className: textClassName,
  }

  return createElement(tag, textProps, children)
}

export default RootText
