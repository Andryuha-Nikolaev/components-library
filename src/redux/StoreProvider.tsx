"use client"

import React from "react"
import { store } from "./store"
import { Provider } from "react-redux"
import { initializeCount } from "./features/counterSlice"

export function StoreProvider({
  count,
  children,
}: {
  count: number
  children: React.ReactNode
}) {
  store.dispatch(initializeCount(count))
  return <Provider store={store}>{children}</Provider>
}
