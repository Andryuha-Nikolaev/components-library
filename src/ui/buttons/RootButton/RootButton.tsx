import React from "react"
import s from "./RootButton.module.scss"
import classNames from "classnames"

const RootButton = () => {
  return <button className={classNames(s["button"])}>RootButton</button>
}

export default RootButton
