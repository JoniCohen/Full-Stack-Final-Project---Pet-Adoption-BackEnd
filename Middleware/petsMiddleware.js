function filterQuery(req,res,next){
    for(let key in req.query){
        if(req.query[key]===''){
            delete req.query[key]
        }
    }
    next()
}

module.exports = {filterQuery}