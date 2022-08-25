const multer = require('multer')

const updload = multer({dest:'./Images'})

function imageURL(req,res,next){
    try{
        console.log(req.file)
        const imagePet = "http://localhost:8080/" + req.file.path
        console.log(imagePet)
        req.body.imagePet = imagePet
        next()
    }catch(err){
        res.status(500).send(err)
    }
    
}

module.exports = {updload,imageURL}