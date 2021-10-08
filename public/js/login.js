$('#createaccount')
    .mouseenter(function () {
        $(this).find("span").text("Crie uma conta")
    })
    .mouseleave(function () {
        $(this).find("span").text("Não tem uma conta?")
    });