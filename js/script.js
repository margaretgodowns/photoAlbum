$(document).ready(function() {

  $(".homepage a").click(function(event){

    event.preventDefault();
    var navigate= "." + $(this) .attr  ("rel");
    console.log(navigate);
    $(".container").children().removeClass("currentPage");
    $(navigate).addClass("currentPage");
  });

  $(".nav").click(function(event){
      $(".homepage").siblings().removeClass("currentPage");
    $(".homepage").addClass("currentPage");

  });



$(".imgList a").click(function(event){
  event.preventDefault();
  $(this).toggleClass("bigPicture");        $(this).closest('li').siblings().toggleClass("hidden");
  });

});
