$(document).ready(function () {
    $("#first-wish ~ .wish-card").hide();

    $("#first-wish").on("click", function() {
        $("#second-wish").fadeIn(1800);
    });
});