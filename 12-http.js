
const http = require('http')

const server = http.createServer((req, res) => {
if(req.url === '/'){
    res.end('Welcome to the home page')
}
if(req.url === '/about'){
    res.end('Here is our history')
}
res.end(`
<h1>Oops!</h1>
<p>We can't find the page</p>
<a href="/">Back to home page</a>
`)
})

server.listen(3000)