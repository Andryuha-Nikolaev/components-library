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
  template?: "button" | "link"
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
  template = "button",
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
    s[template],
    s[`var${styleVariant}`],
    template === "button" && s[buttonPosition],
    isDisabled && s["disabled"]
  )

  const buttonStyle = {
    textTransform: textTransform,
  }

  return (
    <>
      {role === "button" && (
        <button
          onClick={onClick}
          style={buttonStyle}
          className={buttonClassName}
          type={buttonType}
        >
          {children}
        </button>
      )}
      {role === "link" && (
        <a
          style={buttonStyle}
          className={buttonClassName}
          href={link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {children} {withArrow && <ArrowIcon />}
        </a>
      )}
      {role === "next-link" && (
        <Link
          style={buttonStyle}
          className={buttonClassName}
          href={link ? link : ""}
          target={linkTarget}
        >
          {children} {withArrow && <ArrowIcon />}
        </Link>
      )}
    </>
  )
}

export default RootButton
