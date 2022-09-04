const jwt = require('jsonwebtoken');
require('dotenv').config()


function filterQuery(req,res,next){
    for(let key in req.query){
        if(req.query[key]===''){
            delete req.query[key]
        }
    }
    next()
}
async function auth(req,res,next){
    const { Token } = req.cookies;
  if (!Token) {
    res.status(401).send("Token Required");
    return;
  }
  jwt.verify(Token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).send("Unauthorized");
      return;
    }
    req.body.userId = decoded.id;
    next();
  });

}

module.exports = {filterQuery,auth}