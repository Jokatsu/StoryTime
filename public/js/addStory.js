$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and author select
  var bodyInput = $("#storyInput");
  var titleInput = $("#storyTitle");
  var genreSelect = $("#genreInput");
  // Adding an event listener for when the form is submitted
  $("#submitBtn").on("click", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
  var postId;
  var authorId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In '?post_id=1', postId is 1
  if (url.indexOf("?story_id=") !== -1) {
    postId = url.split("=")[1];
    getStoryData(postId, "post");
  }
  // Otherwise if we have an author_id in our url, preset the author select box to be our Author
  else if (url.indexOf("?genre_id=") !== -1) {
    authorId = url.split("=")[1];
  }

  // Getting the authors, and their posts
  getGenres();

  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      !titleInput.val().trim() ||
      !bodyInput.val().trim() ||
      !genreSelect.val()
    ) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newStory = {
      title: titleInput.val().trim(),
      body: bodyInput.val().trim(),
      genre: genreSelect.val()
    };

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newStory.id = storyId;
      updateStory(newStory);
    } else {
      submitStory(newStory);
    }
  }
  event.preventDefault();
  var newStory ={
    title: $("#storyTitle").val().trim(),
    text: $("#storyInput").val().trim(),
    genre: selection
  }
  // Submits a new post and brings user to blog page upon completion
  function submitStory(post) {
    $.post("/api/stories", post, function() {
      window.location.href = "/";
    });
  }

  // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
  function getStoryData(id, type) {
    var queryUrl;
    switch (type) {
      case "post":
        queryUrl = "/api/stories/" + id;
        break;
      case "author":
        queryUrl = "/api/authors/" + id;
        break;
      default:
        return;
    }
    $.get(queryUrl, function(data) {
      if (data) {
        console.log(data.AuthorId || data.id);
        // If this post exists, prefill our cms forms with its data
        titleInput.val(data.title);
        bodyInput.val(data.body);
        authorId = data.AuthorId || data.id;
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

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

  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/stories",
      data: post
    }).then(function() {
      window.location.href = "/index";
    });
  }
});
