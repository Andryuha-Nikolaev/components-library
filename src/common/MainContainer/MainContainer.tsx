import React, { ComponentPropsWithoutRef } from "react"

import s from "./MainContainer.module.scss"

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className={s["container"]}>{children}</div>
}
