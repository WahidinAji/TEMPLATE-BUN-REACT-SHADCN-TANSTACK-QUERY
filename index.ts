import index from "./web/index.html"

const server = Bun.serve({
  port: 4000,
  development: {
    hmr: true,
    console: true,
  },
  fetch(req){
    return new Response("Not FOund", { status: 404 })
  },
  routes: {
    "/": index
  }
})

console.log(`Listening on ${server.url}`);