var db = require("../models");

module.exports = function(app) {
    app.get("/", function (req, res) {
        db.Story.findAll().then(function(dbStory) {
            res.json(dbStory);
        })
    })
    app.post("/create", function (req, res ) {
        db.Story.create({
            title: 
        })
    })
};
