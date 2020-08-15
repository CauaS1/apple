const express = require('express')
const server = express()
const path = require("path"); // precisa importar

function mainPage(req, res) {
  res.sendFile(path.resolve(__dirname, './views', 'index.html'));
} //dirname: pasta atual
// "'..'" siginifica para voltar uma pasta, ou "'/views'" caso precise entrar numa pasta  

function macPage(req, res) {
  res.sendFile(path.resolve(__dirname, './views', 'mac.html'))
}

server
.use(express.static("public"))
.get("/", mainPage)
.get('/mac', macPage)
.listen(5500)