$(document).ready(function() {

  $(".homepage a").click(event) {
//^^the links on the homepage are now a jQuery object and when someone clicks on them, something is going to happen//

    event.preventDefault();
    var navigate= "." + $(this) .attr  ("rel");
    console.log(navigate);
    $(".container").children().removeClass("currentPage");
    $(navigate).addClass("currentPage");
  });
});
