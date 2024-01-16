import React from "react"
import s from "./RootButton.module.scss"
import classNames from "classnames"
import Link from "next/link"
import ArrowIcon from "@/ui/icons/ArrowIcon/ArrowIcon"

type RootButtonProps = {
  children: React.ReactNode
  isDisabled?: boolean
  onClick?: () => void
  withArrow?: boolean
  appearance?: "button" | "link"
  styleVariant?: "1" | "2" | "3" | "4"
  buttonPosition?: "left" | "center" | "right"
  textTransform?: "none" | "uppercase" | "lowercase"
  buttonType?: "button" | "submit"
  role?: "button" | "next-link" | "link"
  linkTarget?: "_blank" | "_self"
  link?: string
}

const RootButton = ({
  children,
  isDisabled = false,
  onClick,
  withArrow = false,
  appearance = "button",
  styleVariant = "1",
  buttonPosition = "center",
  textTransform = "none",
  buttonType = "button",
  role = "button",
  linkTarget = "_self",
  link,
}: RootButtonProps) => {
  const buttonClassName = classNames(
    s["root"],
    s[appearance],
    s[`var${styleVariant}`],
    appearance === "button" && s[buttonPosition],
    isDisabled && s["disabled"],
    withArrow && s["with-arrow"]
  )

  const styleConfig = {
    textTransform: textTransform,
  }

  const buttonProps = {
    onClick,
    style: styleConfig,
    className: buttonClassName,
    type: buttonType,
  }

  const linkProps = {
    style: styleConfig,
    className: buttonClassName,
    href: link,
    target: "_blank",
    rel: "noreferrer noopener",
  }

  const nextLinkProps = {
    style: styleConfig,
    className: buttonClassName,
    href: link ? link : "",
    target: linkTarget,
  }

  let ButtonComponent

  const buttonContents = (
    <>
      {children}
      {withArrow && <ArrowIcon />}
    </>
  )

  switch (role) {
    case "button":
      ButtonComponent = <button {...buttonProps}>{buttonContents}</button>
      break
    case "link":
      ButtonComponent = <a {...linkProps}>{buttonContents}</a>
      break
    case "next-link":
      ButtonComponent = <Link {...nextLinkProps}>{buttonContents}</Link>
      break
    default:
      ButtonComponent = null
  }

  return ButtonComponent
}

export default RootButton
