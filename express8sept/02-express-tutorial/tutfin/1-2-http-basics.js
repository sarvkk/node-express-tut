const http = require('http')
const {readFileSync} = require('fs');

//get all files
const HomePage=readFileSync("./navbar-app/index.html")
const HomeStyles=readFileSync("./navbar-app/styles.css")
const HomeImage=readFileSync("./navbar-app/logo.svg")
const HomeLogic=readFileSync("./navbar-app/browser-app.js")

const server= http.createServer((req,res)=>{
    const url=req.url;
    //home-page
    if(url === '/'){
        res.writeHead(200,{'content-type':"text/html"})
        res.write(HomePage)
        res.end()
    }
    //about-page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':"text/html"})
        res.write("<h1>About</h1>")
        res.end()
    }
    //styles
    else if(url === '/styles.css'){
        res.writeHead(200,{'content-type':"text/css"})
        res.write(HomeStyles)
        res.end()
    }
    //logo-image
    else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type':"image/svg+xml"})
        res.write(HomeImage)
        res.end()
    }
    //logic
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':"text/javascript"})
        res.write(HomeLogic)
        res.end()
    }
    //404
    else{
        res.writeHead(404,{'content-type':"text/html"})
        res.write('<h1>Page Not Found</h1>');
        res.end()
    }
    
})
server.listen(8000)