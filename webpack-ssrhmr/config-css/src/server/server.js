import express from "express"
import ReactDOM from "react-dom/server"
import { App } from "../App.tsx"
import { indexTemplate } from "./indexTemplate"
import compression from "compression"
import helmet from "helmet"

const PORT = process.env.PORT || 3000

const app = express()
app.use(compression())
// app.use(
//     helmet({
//         contentSecurityPolicy: false,
//         crossOriginEmbedderPolicy: false,
//     })
// )

app.use("/static", express.static("./dist/client"))
app.get("*", (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(App())))
})

app.listen(PORT, () => {
    console.log(`server started on port http://localhost:${PORT}`)
})
