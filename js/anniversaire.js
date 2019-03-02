$(document).ready(function () {
    $("#first-card ~ .wish-card").hide();

    $("#first-card").on("click", function() {
        $("#second-card").fadeIn(1800);
    });

    $("#second-card").on("click", function() {
        $("#third-card").fadeIn(1800);
    });

    $("#third-card").on("click", function() {
        $("#fourth-card").fadeIn(1800);
    });

    $("#fourth-card").on("click", function () {
        $("body").css("background-color", "red");
     });
});