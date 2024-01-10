"use client"

import { store } from "./store"
import { Provider } from "react-redux"
import { initializeCount } from "./features/counterSlice"

export function Providers({
  count,
  children,
}: {
  count: number
  children: React.ReactNode
}) {
  console.log("prov")

  store.dispatch(initializeCount(count))
  return <Provider store={store}>{children}</Provider>
}
