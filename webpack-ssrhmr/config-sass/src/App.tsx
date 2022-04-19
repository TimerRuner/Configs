import React from "react"
import { hot } from "react-hot-loader/root"
import "./main.global.scss"
import { Provider } from "react-redux"
import { store } from "./store"
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header"

export function AppCopmonent() {
    return (
        <Provider store={store}>
            <Layout>
                <Header />
            </Layout>
        </Provider>
    )
}

export const App = hot(() => <AppCopmonent />)
