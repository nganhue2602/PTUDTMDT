
/* Exercise 10.10 - jqXHR Handling */

$(function () {

    // Hide loading icon initially
    $(".animLoading").hide();

    $("#consume").click(function () {

        // Clear previous results
        $("#results ul").empty();

        // Show loading icon
        $(".animLoading").show();

        // Send GET request to local JSON
        var url = "cities.json";

        $.get(url, null, null, "json")

            .done(function (data) {

                $.each(data, function (index, value) {
                    var li = $("<li></li>").text(value.name);
                    li.appendTo("div#results ul");
                });

                console.log("Data loaded successfully");
            })

            .fail(function (xhr, status, error) {

                alert(
                    "failed loading data - status=" +
                    status + " error=" + error
                );
            })

            .always(function () {

                $(".animLoading").fadeOut("slow");
            });

    });

});
