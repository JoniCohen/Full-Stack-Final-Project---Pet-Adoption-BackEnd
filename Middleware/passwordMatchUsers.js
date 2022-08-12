function passwordMatch (req,res,next){
    if(req.body.password === req.body.confirmPassword){
        next();
        return ;
    }
    res.status(400).send("Error: Passwords don't match" )
}

module.exports = {passwordMatch}