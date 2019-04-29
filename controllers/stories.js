const db = require('../models');

function getAll(req,res){
    db.Story.findAll().then(function(dbStory) {
        res.json(dbStory);
    });
}
function getOne(req,res){
    db.Story.findOne({
        where: req.params
    }).then(function(dbStory) {
        res.json(dbStory);
    });
}

function deleteOne(req, res){
    db.Story.destroy({
        where: req.params
    }).then(function(dbStory) {
        res.json(dbStory);
    });
}

function updateOne(req,res){
    console.log('hit updateOne function')
}

function create(req,res){
    console.log('hit create function')    
}

module.exports = {
    getAll,
    getOne,
    updateOne,
    deleteOne,
    create
}