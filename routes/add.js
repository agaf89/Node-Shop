const {Router} = require('express')
const Course = require ('../models/courses.js')

const router = Router()

router.get('/', (req,res)=> {
    res.render('add',{
        title: 'Add course',
        isAdd: true
    }) //указываем страницу для рендера
})

router.post('/', async (req, res)=> {
    res.redirect('/courses')
    const course = new Course(req.body.title, req.body.price, req.body.img)
    await course.save()
})

module.exports = router