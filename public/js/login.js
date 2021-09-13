$('#createaccount')
    .mouseenter(function () {
        $(this).find("span").text("Create account")
    })
    .mouseleave(function () {
        $(this).find("span").text("Don't have an account?")
    });