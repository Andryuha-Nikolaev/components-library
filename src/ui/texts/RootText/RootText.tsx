import React from "react"
import s from "./RootText.module.scss"
import classNames from "classnames"

type RootTextProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  children: React.ReactNode
}

const RootText = ({ tag, children }: RootTextProps) => {
  switch (tag) {
    case "h1":
      return <h1>{children}</h1>
    //  break
    case "h2":
      return <h2>{children}</h2>
    //  break
    case "p":
      return <p>{children}</p>
    //  break
    default:
      return null
  }

  // return <div>RootText</div>
}

export default RootText
