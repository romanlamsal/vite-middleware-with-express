import express from "express"
import { createServer as createViteServer } from "vite"

async function createServer() {
    console.log("Whipping up server")
    const app = express()

    app.get("/api/data", (req, res) => {
        res.json([
            {
                name: "foo",
            },
            {
                name: "bar",
            },
            { name: "baz" },
            { name: "foobarbaz" },
        ])
    })
    console.log("Step 1: DONE.")

    const vite = await createViteServer({
        configFile: "./vite.config.ts",
        clearScreen: false,
        server: {
            middlewareMode: true,
        },
    })

    app.use(vite.middlewares)
    console.log("Step 2: DONE.")

    return app
}

createServer()
    .then(app => {
        const port = 3030
        app.listen(port, () => {
            console.log(`Started server under http://localhost:${port}`)
        })
    })
    .catch(err => {
        console.error("Something wrong:", err)
    })
