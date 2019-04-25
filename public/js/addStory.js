var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "storytimeDB"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get("/", function(req, res) {
  connection.query("SELECT * FROM stories;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { stories: data });
  });
});

// Create a new story
app.post("/stories", function(req, res) {
  connection.query(
    "INSERT INTO stories (story) VALUES (?)",
    [req.body.story],
    function(_err, result) {
      if (_err) {
        return res.status(500).end();
      }

      res.json({ id: result.insertId });
      console.log({ id: result.insertId });
    }
  );
});

// Update a story
app.put("/stories/:id", function(req, res) {
  connection.query(
    "UPDATE stories SET story = ? WHERE id = ?",
    [req.body.story, req.params.id],
    function(_err, result) {
      if (_err) {
        return res.status(500).end();
      } else if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
