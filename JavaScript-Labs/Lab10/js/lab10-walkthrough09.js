
$(function () {
    $("#consume").on("click", function () {
        $("#results").text("Loading cities...");

        $.get("cities.json")
            .done(function (data) {
                var list = $("<ul></ul>");

                $.each(data, function (index, city) {
                    $("<li></li>")
                        .text(city.name)
                        .appendTo(list);
                });

                $("#results").empty().append(list);
            })
            .fail(function (xhr) {
                $("#results").text(
                    "GET request failed: " + xhr.status
                );
            });
    });
});
