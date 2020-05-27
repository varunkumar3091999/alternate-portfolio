const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 4000
const publicDirectaryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname,'./templates/views')
const partialspath = path.join(__dirname,'./templates/partials')

app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialspath)

app.use(express.static(publicDirectaryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Portfolio',
        name: 'BNK'
    })
})
app.get('/home', (req, res) => {
    res.render('index', {
        title: 'Portfolio',
        name: 'BNK'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
       
    })
})

app.get('/about#projects', (req, res) => {
    res.render('about#projcts', {
       
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        
    })
})



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

