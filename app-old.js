const http = require("http");

const server = http.createServer((req, res) => {


    res.write('HOla mundo')
    res.end();
});

server.listen(3000);
console.log("Escuchando en el puerto", 3000);
