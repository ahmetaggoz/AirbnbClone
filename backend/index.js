const express = require('express')
const server = express();
const port = 2023;
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/routes.js')
const uri = "mongodb+srv://ahmetaggoz1388:Yasam1388*@ilkcluster.64jkf9z.mongodb.net/"

async function main() {
    try{
        mongoose.connect(uri)
        console.log('mongo ile bağlantı başarılı')
    }catch(err){
        console.error(err)
    }
}

main()
server.listen(port, ()=>{
    console.log(port, " 'u dinleniyor")
})


server.use(cors())
server.use(express.json())
server.use(routes)