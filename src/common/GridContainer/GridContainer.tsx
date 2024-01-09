import React, { ComponentPropsWithoutRef } from "react"

import s from "./GridContainer.module.scss"

export interface ContainerProps extends ComponentPropsWithoutRef<"div"> {}

export default function GridContainer({ children }: ContainerProps) {
  return <div className={s["grid-container"]}>{children}</div>
}
