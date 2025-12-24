const http = require('node:http')


const server = http.createServer()

server.on('request', (req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {
            'content-type': 'text/plain'
        })
        res.end("Home")

    } else if (req.url === "/product") {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write(`
            <html>
            <body>
            <ul>
            <li>Hello</li>
            <li>Page : Products</li>
            </ul>
            </body>
            </html>
            `)
        res.end()
    } else if (req.url === "/about") {
        res.writeHead(200, {
            'content-type': 'application/json'
        })
        res.end(JSON.stringify({
            id: 1,
            userName: "Mohammad",
            password: "101378"
        }))
    } else {
        res.write("404 Url Not Found .")
        res.end()
    }

})

server.listen('3000', () => {
    console.log("Run server 3000");

})