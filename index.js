const express = require('express');
const path = require ('path');
const exphbs = require('express-handlebars')
const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine) //регистрируем движок в экспресс
app.set('view engine', 'hbs') //используем движок
app.set('views', 'views') //место где хранятся все шаблоны html


app.get('/', (req,res) => {
    res.render('index') //указываем страницу для рендера
})

app.get('/about', (req,res)=> {
    res.render('about') //указываем страницу для рендера
})


const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=>{
    console.log('Server has been started');
});