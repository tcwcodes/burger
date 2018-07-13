$(function() {

    $("#burger-submit").on("click", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger-input").val().trim()
        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        });
    });

});