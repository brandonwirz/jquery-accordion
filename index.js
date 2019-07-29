$(document).ready(function() {
  $(".accordion").on("click", ".headline", function() {
   $(this).toggleClass("active").next().slideToggle();
    });
});
