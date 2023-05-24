const { urlencoded } = require('body-parser')
const express = require ('express')
const app = express()
const exphbs = require ('express-handlebars')

const PORT = 3000
const hostname = 'localhost'

/*----------------------Config/Express---------------------------*/
app.use(urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
/*-----------------Config Express-Handlebars---------------------*/
app.set('view engine ', 'handlebars')
app.engine('handlebars', exphbs.engine())
/*---------------------------------------------------------------*/
app.get('/', (req,res)=>{
    res.end('Testando Servidor')
})

/*---------------------------------------------------------------*/
app.listen(PORT, hostname, ()=>{
    console.log(`Servidor Rodando ${hostname} ${PORT}`)
})