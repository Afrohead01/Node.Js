const http = require('http');

 server = http.createServer((req, res)=>{
    const url = req.url
    if (url==='/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title></title><head>')
        res.write('<body><form action="/node" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title></title><head>')
    res.write('<body><h1>Welcome To my Node JS project!</h1></body>')
    res.write('</html>')
    res.end()
});



server.listen(3000)
