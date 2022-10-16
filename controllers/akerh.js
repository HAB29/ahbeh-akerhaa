const express = require('express')
const router = express.Router()

// router go here 
router.get ('/movies',(req,res)=>{
    const badMovies = ['Dumb and Dumber', 'Titanic']
    res.render ('movies.ejs',{movies: badMovies})
})
router.get('/Products',(req,res)=>{
    const badProducts = ['labello','Bioderma','Essence']
res.render('Products.ejs',{products: badProducts})
})
module.exports = router