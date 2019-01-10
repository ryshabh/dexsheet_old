  function singup() {
        console.log("check singup button working");
        $("#first").fadeOut("fast", function() {
            console.log("check singup button working2");
        $("#second").fadeIn("fast");
        });
        }

    function alreadaccount() {
        $("#second").fadeOut("fast", function() {
        $("#first").fadeIn("fast");
        });
        }