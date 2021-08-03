require('dotenv').config()
const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT   

//Handlebars
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials')

//Servir contenido estático
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('home',{
        nombre: 'Raul Jaque',
        titulo: 'Ejercicio de NodeJs  '
    })
})

app.get('/elements',(req,res)=>{
    res.render('elements',{
        nombre: 'Raul Jaque',
        titulo: 'Ejercicio de NodeJs  '
    })
})

app.get('/generic',(req,res)=>{
    res.render('generic',{
        nombre: 'Raul Jaque',
        titulo: 'Ejercicio de NodeJs  '
    })
})

app.get('*',(req,res)=>{
    res.send('404 | PAGE NOT FOUND')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})