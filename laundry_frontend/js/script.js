$(function(){
    $("#login_btn").click(function(){
        $("#login_btn").hide();
        var username = $("#username").val();
        var password = $("#password").val();

        $post("login_page.php", {username:username, password:password}).done(function(data){
            if(data == "SUCCESS"){
                window.location = "admin_dashboard_products_updated.php";
            } else {
                $("#login_message").text("Invalid Username or Password! Try Again.");
                $("login_btn").show();
            }
        })

    });
});