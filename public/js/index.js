$(document).ready(function() {
  $(".parallax-window").parallax({
    imageSrc: "../images/4U6A0902.jpg"
  });
  jQuery(window)
    .trigger("resize")
    .trigger("scroll");
  
  var storyContainer= ("#storyTable");
  $(document).on("click", "buttonDelete", deleteStory);
  $(document).on("click", "continueStory", continueStory);

  var stories;

  var url = window.location.search;
  var authorId;
  var genreId;

  if (url.indexOf("?author_id=") !== -1 ){
    authorId = url.split("=")[1];
    getStories(authorId)
  }
  else if (url.indexOf("?genre+id-") !== -1 ){
    genreId = url.split("=")[1]
    getGenres(genreId);
  }
  else {
    getStories();
  }
  function getStories(author) {
    authorId = author || "";
    if (authorId) {
      authorId = "/?author_id=" + authorId;
    }
    $.get("/api/stories" + authorId, function(data) {
      stories = data;
      if (!stories || !stories.length) {
        displayEmpty(author);
      }
      else {
        getRows();
      }
    });
  }
  function deleteStory (id) {
    $.ajax({
      method: "DELETE",
      url: "/api/stories/" + id
    }).then(function() {
      getStories(postCategorySelect.val());
    });
  }
  function getRows() {
    storyContainer.empty();
    var newStories = [];
    for (var i = 0; i < stories.length; i++) {
      newStories.push(newRows(stories[i]));
    }
    storyContainer.push(newStories);
  }
  function newRows(story) {
    var newPostCard = $("<div>");
    newPostCard.addClass("card");
    var newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("X");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-info");
    var storyTitle = $("<h2>");
    var storyAuthor = $("<h5>");
    storyAuthor.text("Author: ")
    var newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    var newPostBody = $("<p>");
    newPostTitle.text(story.title + " ");
    newPostBody.text(story.body);
    newPostCardHeading.append(deleteBtn);
    newPostCardHeading.append(editBtn);
    newPostCardHeading.append(storyTitle);
    newPostCardHeading.append(storyAuthor);
    newPostCard.data("post", story);
    return newPostCard;
  }

  function continueStory() {
    var currentStory = $(this).parent().parent().data("post");
    window.location.href = "/index?story_id=" + currentStory.id;
    )
  }
});

