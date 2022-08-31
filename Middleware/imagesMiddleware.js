const multer = require('multer')

const updload = multer({dest:'./Images'})

function imageURL(req,res,next){
    try{
        const imagePet = "http://localhost:8080/" + req.file.path
        req.body.imagePet = imagePet
        next()
    }catch(err){
        res.status(500).send(err)
    }
    
}

module.exports = {updload,imageURL}