/* eslint-disable indent */
/* eslint-disable prettier/prettier */
var db = require("../models/story.js");

    function getAll (req, res) {
        db.stories.findAll({}).then(function(data) {
            var obj = {
                stories : data,
            };
            res.send("/", obj);
        });
    }

    function newStory (req, res) {
        db.stories.create({
            title: req.body.title,
            genre: req.body.genres,
            body: req.body.story
        }).then(function(){
            res.redirect("/");
        });
    }
    function updateStory (req, res) {
        db.stories.update({
            where: {
                title: req.params.title
            }
        }).then(function() {
            res.redirect("/");
        });
    }
    function del(req, res) {
        db.stories.destroy({
            where : req.params.id
        }).then(function() {
            res.redirect("/");
        });
    }

module.exports = {
    delete: del,
    updateStory:updateStory,
    newStory: newStory,
    getAll:getAll
};