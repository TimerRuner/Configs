import React from "react"
import { hot } from "react-hot-loader/root"
import { Header } from "./shared/Header"

export function AppCopmonent() {
    return <Header />
}

export const App = hot(() => <AppCopmonent />)
