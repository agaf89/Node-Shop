const express = require('express');
const path = require ('path');
const exphbs = require('express-handlebars')
const app = express();
const homeRoute = require ('./routes/home')
const cardRoute = require('./routes/card')
const addRoute = require ('./routes/add.js')
const courseRoute = require('./routes/courses')

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine) //регистрируем движок в экспресс
app.set('view engine', 'hbs') //используем движок
app.set('views', 'views') //место где хранятся все шаблоны html
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use('/',homeRoute) //register router
app.use('/add',addRoute)//register router
app.use('/courses',courseRoute)//register router
app.use('/card',cardRoute)//register router




const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=>{
    console.log('Server has been started');
});