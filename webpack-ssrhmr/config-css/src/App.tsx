import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "./main.global.css"
import { Provider } from "react-redux"
import { store } from "./store"
import { Layout } from "./shared/Layout"

export function AppCopmonent() {
    return (
        <Provider store={store}>
            <Layout>
                <div></div>
            </Layout>
        </Provider>
    )
}

export const App = hot(() => <AppCopmonent />)
