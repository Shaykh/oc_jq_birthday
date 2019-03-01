$(document).ready(function () {
    $("#first-wish ~ .wish-card").hide();

    $("#first-wish").on("click", function() {
        $("#second-wish").fadeIn(1800);
    });

    $("#second-wish").on("click", function() {
        $("#third-wish").fadeIn(1800);
    });

    $("#third-wish").on("click", function() {
        $("#fourth-wish").fadeIn(1800);
    });
});