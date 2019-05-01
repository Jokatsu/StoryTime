$(document).ready(function () {
    // Getting jQuery references to the post body, title, form, and author select




    // Adding an event listener for when the form is submitted
    $("#storyBtn").on("click", function () {
      window.location.href = "/";
        var input = {
            title: $("#title").val(),
            genre: $("#genres").val(),
            text: $("#story").val()
        }
        $.ajax({
            type: "POST",
            url: "/stories/create",
            data: input
        }).then(function () {
            console.log("Posted");
        });
    });

});



  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  // Sets a flag for whether or not we're updating a post to be false initially
  // var updating = false;

  // A function for handling what happens when the form to create a new post is submitted
  // function handleFormSubmit(input) {
  //   // event.preventDefault();
  //   if (
  //     !titleInput.val().trim() ||
  //     !bodyInput.val().trim() ||
  //     !genreSelect.val()
  //   ) {
  //     return;
  //   }

  //   // If we're updating a post run updatePost to update a post
  //   // Otherwise run submitPost to create a whole new post
  //   if (updating) {
  //     newStory.id = storyId;
  //     updateStory(newStory);
  //   } else {
  //     submitStory(newStory);
  //   }
  // }
  // event.preventDefault();
  // var newStory = {
  //   title: $("#title")
  //     .val()
  //     .trim(),
  //   text: $("#story")
  //     .val()
  //     .trim(),
  //   genre: genreSelect
  // };
  // Submits a new post and brings user to blog page upon completion
//   function submitStory(newStory) {
//     $.post("/", newStory, function (req, res) {
//       res.render("/");
//     });
//   }
  // A function to get Authors and then render our list of Authors
  // function getGenres() {
  //   $.get("/api/", renderAuthorList);
  // }

  // function createGenreRow(genre) {
  //   var listOption = $("<option>");
  //   listOption.attr("value", genre.id);
  //   listOption.text(genre.name);
  //   return listOption;
  // }

//   // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
//   $.get(queryUrl, function (data) {
//     if (data) {
//       // If this post exists, prefill our cms forms with its data
//       titleInput.val(data.title);
//       bodyInput.val(data.body);
//       authorId = data.AuthorId || data.id;
//       // If we have a post with this id, set a flag for us to know to update the post
//       // when we hit submit
//       updating = true;
//     }
//   });
// });
