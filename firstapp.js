const http = require('http');

const express = require('express');

const app = express();


app.use((req, res, next) =>{
    console.log("In the middleware");
    next();
});

app.use((req, res, next) =>{
    console.log("In the another middlewares");
    res.send('<h1>Hello from express </h1>');
    
});
http.createServer(app);
app.listen(5000);