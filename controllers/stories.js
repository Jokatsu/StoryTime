/* eslint-disable indent */
/* eslint-disable prettier/prettier */
var db = require("../models");
const {validToken} = require('./../utilities/tokenService');

    function getAll (req, res) {
        console.log("getRes")
        db.Story.findAll({}).then(function(data) {
            var obj = {
                stories : data,
            };
            res.render("index", obj);
        });
    }

    function newStory ({signedCookies: {token}, body: {title, genre, text}}, res) {
        if (token){
            validToken(token).then(({user: {id}}) => {
                let UserId = id;;
                db.Story.create({ title, genre, text, UserId }).then(function(){
                    res.redirect("/");
                });
            }).catch(err => {
                if (err) throw err;
            })
        }
    }

    function updateStory (req, res) {
        db.Story.update({
            where: {
                title: req.params.title
            }
        }).then(function() {
            res.redirect("/");
        });
    }
    function del(req, res) {
        db.Story.destroy({
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