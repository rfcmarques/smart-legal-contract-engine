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

function onChangeDate(elem) {
    spantext = "{{" + elem + "}}";

    if ($('#' + elem).val() != "") {
        $('#' + elem).on('change', () => {
            str = $('#' + elem).val();
            $('#contract #span' + elem).text(str);
        })
    } else {
        $('#contract #span' + elem).text(spantext);
    }
}

function setIntervals(elem) {
    if ($('#' + elem).val()) {
        $('#' + elem + '-2').val($('#' + elem).val());
    } else {
        $('#' + elem + '-2').val(0);
    }
}