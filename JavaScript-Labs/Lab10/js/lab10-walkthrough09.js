
/* Exercise 10.9 - GET Requests */

$(function () {

    $("#consume").click(function () {

        var url =
            "https://www.randyconnolly.com/funwebdev/services/travel/cities.php";

        $("#results").text("Loading cities...");

        $.get(url, function (data, status) {

            if (status === "success") {

                if (typeof data === "string") {
                    data = JSON.parse(data);
                }

                $("#results").html("<ul></ul>");

                $.each(data, function (index, value) {
                    var li = $("<li></li>").text(value.name);
                    li.appendTo("#results ul");
                });
            }

        }).fail(function (xhr, status, error) {

            $("#results").text(
                "GET request failed: " + status
            );

            console.error("Request error:", error);
        });

    });

});
