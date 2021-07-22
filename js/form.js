/*
 *
 * DYNAMIC AREA
 * Author: Rui Marques
 * Date: 22-07-2021
 *
 * The code below makes the input fields
 * and the contract sample on the right
 * work dynamically 
 *
 */

function onChangeInput(elem) {
    spantext = "{{" + elem + "}}";

    if ($('#' + elem).val()) {
        str = $('#' + elem).val();
        $('#contract #span' + elem).text(str);
    } else {
        $('#contract #span' + elem).text(spantext);
    }
}

function onChangeAmount(elem) {
    spantext = "{{" + elem + "}}";

    if ($('#' + elem).val()) {
        str = $('#' + elem).val() + " " + $('#currency').val()
        $('#contract #span' + elem).text(str);
    } else {
        $('#contract #span' + elem).text(spantext);
    }
}

$('#currency').change(function () {
    $('#serviceCost').change();
})

function onChangeDuration(elem) {
    spantext = "{{" + elem + "}}";

    if ($('#' + elem).val() && $('#' + elem + 'Unit').val()) {
        str = $('#' + elem).val() + " " + $('#' + elem + 'Unit').val();
        $('#contract #span' + elem).text(str);
    } else {
        $('#contract #span' + elem).text(spantext);
    }
}

$('#contractDurationUnit').change(function () {
    $('#contractDuration').change();
})

function onChangeDate(elem) {
    spantext = "{{" + elem + "}}";

    if ($('#' + elem).val() != "") {
        $('#' + elem).on('change', () => {
            date = $('#' + elem).val();
            dd = date.split("-")[2];
            mm = date.split("-")[1];
            yy = date.split("-")[0];
            str = dd + "-" + mm + "-" + yy;
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

/*
 *
 * REGEX AREA
 * Author: Rui Marques
 * Date: 22-07-2021
 *
 * The code below sets the regex for
 * the input fields
 *
 */

$('#btnCreate').click(function () {
    var rgx = /^[a-zA-Z]$/;


    $('input[type=text]').addClass("is-valid");
    

})