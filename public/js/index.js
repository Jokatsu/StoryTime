$(document).ready(function() {
  $(".parallax-window").parallax({
    imageSrc: "../images/4U6A0902.jpg"
  });
  jQuery(window)
    .trigger("resize")
    .trigger("scroll");


});

