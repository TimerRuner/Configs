import React from "react"
import { hot } from "react-hot-loader/root"
import "./main.global.css"

export function AppCopmonent() {
    return <div>content</div>
}

export const App = hot(() => <AppCopmonent />)
