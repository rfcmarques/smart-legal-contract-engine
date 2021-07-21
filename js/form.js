function onChangeInput(elem) {
    spantext = "{{" + elem + "}}";
    console.log($('#' + elem).val());

    if ($('#' + elem).val()) {
        str = $('#' + elem).val();
        $('#contract #span' + elem).text(str);
    } else {
        $('#contract #span' + elem).text(spantext);
    }
}

