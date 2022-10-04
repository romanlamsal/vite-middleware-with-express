# Vite Middleware with Express

Reference repository to create a dev environment which is made up of an express server and a vite powered frontend.
Vite is used in middleware mode there but could also be used standalone.

The frontend is __not__ server-side rendered.

## Watchmode

Nodemon is used to watch for file changes and [tsx](https://github.com/esbuild-kit/tsx) runs the `server.ts`. Because
everytime the server starts a new `vite.config.ts.timestamp-*.mjs` file is generated, nodemon will indefinitely loop. 
This is obviously annoying, so `nodemon.json` is the configuration to only watch for file changes in .ts files.

Vite's HMR is still working as usual.

## This is not production-ready

... at all. Since SSR is not included (which would be the only real use-case) you are better
off to just build your vite app independently and serve it some other way.
