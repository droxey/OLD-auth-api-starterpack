//voting up or down

//rewrite document on ready
$(document).ready(function() {
    $(".vote-up").submit(function(e) {
        e.preventDefault();

        var postId = $(this).data("id");

        $.ajax({
            type: "PUT",
            url: "/post/" + postId + "/voteup",
            success: function(data) {
                console.log("voted up!");
            },
            error: function(err) {
                console.log(err.messsage);
            }
        });
    });

    $(".vote-down").submit(function(e) {
        e.preventDefault();

        var postId = $(this).data("id");
        $.ajax({
            type: "PUT",
            url: "/post/" + postId + "/votedown",
            success: function(data) {
                console.log("voted down!");
            },
            error: function(err) {
                console.log(err.messsage);
            }
        });
    });
});
