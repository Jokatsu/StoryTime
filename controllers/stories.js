/* eslint-disable indent */
/* eslint-disable prettier/prettier */
var db = require("../models");
const {validToken} = require('./../utilities/tokenService');

function authorized({signedCookies: {token}}, res, next){
    console.log('hit authorized route')
    if (token){
        validToken(token).then(({user: {id, username}}) => {
            db.User.findOne({where: {username, id}}).then(user => {
                if (user){
                    console.log('authorization success!');
                    next();                
                } else {
                    return res.render("login");
                }
            }).catch(err => {
                console.log(err);
                if (err) res.render("login");
            })
        })
    }
}

    function getAll (req, res) {
        console.log("getRes")
        db.Story.findAll({}).then(function(data) {
            var obj = {
                stories : data,
            };
            res.render("/", obj);
        });
    }

    function getOne({params: {id}}, res){
        db.Story.findOne({where: {id}}).then(story => {
            res.json(story);
        }).catch(err => {
            if (err) throw err;
        })
    }

    function newStory ({signedCookies: {token}, body: {title, genre, text}}, res) {
        if (token){
            validToken(token).then(({user: {id}}) => {
                let UserId = id;
                db.Story.create({ title, genre, text, UserId }).then(function(data){
                    res.json(data);
                });
                res.redirect("/")
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
    function removeOne(req, res) {
        db.Story.destroy({
            where : req.params.id
        }).then(function() {
            res.redirect("/");
        });
    }

module.exports = {
    authorized,
    removeOne,
    updateStory,
    newStory,
    getAll,
    getOne
};