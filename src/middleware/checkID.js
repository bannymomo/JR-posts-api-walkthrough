const models = require('../models/post');
function checkID(req,res,next){
    let { id } = req.params;
    id = Number(id);
    if(!models.doesIdExist(id)){
        return res.sendStatus(404);
    } 
    req.params.id = id;
    next();
};

module.exports = checkID;