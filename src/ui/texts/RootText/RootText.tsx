import React, { createElement } from "react"
import s from "./RootText.module.scss"
import classNames from "classnames"

type TagsProps = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
type AsProps =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "text-lg"
  | "text-md"
  | "text-sm"
  | "span"

type RootTextProps = {
  tag?: TagsProps
  as?: AsProps
  children: React.ReactNode
  className?: string
  colorVariant?: "black" | "white" | "red" | "dark-gray"
  fontVariant?: "russo" | "open-sans"
  fontWeightVariant?: "normal" | "bold"
}

const RootText = ({
  tag = "p",
  as,
  children,
  className,
  colorVariant,
  fontVariant,
  fontWeightVariant,
}: RootTextProps) => {
  const textClassName = classNames(
    s["text"],
    colorVariant && s[colorVariant],
    fontVariant && s[fontVariant],
    fontWeightVariant && s[fontWeightVariant],
    as && s[as],
    className && className
  )

  const textProps = {
    className: textClassName,
  }

  return createElement(tag, textProps, children)
}

export default RootText
