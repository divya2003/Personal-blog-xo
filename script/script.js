$(document).ready(function() {
  // Function to change the navigation bar color on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 55) {
      // When the user has scrolled down 50 pixels or more
      $(".navbar").addClass("scrolled");
    } else {
      // When the user has scrolled back to the top
      $(".navbar").removeClass("scrolled");
    }
  });
});
