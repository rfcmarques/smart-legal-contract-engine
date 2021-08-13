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
        $('#contract #span' + elem).css({
            'color': 'rgb(0, 153, 255)',
            'font-weight': 'bold'
        });
    } else {
        $('#contract #span' + elem).text(spantext);
        $('#contract #span' + elem).css({
            'color': 'red',
            'font-weight': 'normal'
        });
    }
}

function onChangeAmount(elem) {
    spantext = "{{" + elem + "}}";

    if ($('#' + elem).val()) {
        str = $('#' + elem).val() + " " + $('#currency').val()
        $('#contract #span' + elem).text(str);
        $('#contract #span' + elem).css({
            'color': 'rgb(0, 153, 255)',
            'font-weight': 'bold'
        });
    } else {
        $('#contract #span' + elem).text(spantext);
        $('#contract #span' + elem).css({
            'color': 'red',
            'font-weight': 'normal'
        });
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
        $('#contract #span' + elem).css({
            'color': 'rgb(0, 153, 255)',
            'font-weight': 'bold'
        });
    } else {
        $('#contract #span' + elem).text(spantext);
        $('#contract #span' + elem).css({
            'color': 'red',
            'font-weight': 'normal'
        });
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
            $('#contract #span' + elem).css({
                'color': 'rgb(0, 153, 255)',
                'font-weight': 'bold'
            });
        })
    } else {
        $('#contract #span' + elem).text(spantext);
        $('#contract #span' + elem).css({
            'color': 'red',
            'font-weight': 'normal'
        });
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
 * Date: 23-07-2021
 *
 * The code below sets the regex for
 * the input fields
 *
 */

$('input[type=text]').each(function () {
    var textrgx = new RegExp('[^A-Za-z ,0-9]+');

    $(this).on('keyup', function () {
        if ($(this).val()) {
            if (textrgx.test($(this).val())) {
                $(this).addClass("is-invalid");
                $(this).removeClass("is-valid");
            } else {
                $(this).addClass("is-valid");
                $(this).removeClass("is-invalid");
            }
        } else {
            $(this).removeClass("is-valid");
            $(this).removeClass("is-invalid");
        }
    })
})

$('input[type=number]').each(function () {
    var numbrgx = new RegExp('^[0-9]+$');

    $(this).on('keyup', function () {
        if (!numbrgx.test($(this).val())) {
            $(this).addClass("is-invalid");
            $(this).removeClass("is-valid");
        } else {
            $(this).addClass("is-valid");
            $(this).removeClass("is-invalid");
        }
    })
})

/*
 *
 * SUBMIT BUTTON AREA
 * Author: Rui Marques
 * Date: 04-08-2021
 *
 * The code below sets the behavior
 * for the submit button that throws
 * a sweetalert on the top-right corner
 *
 */

$('#btnCreate').on('click', function () {
    setTimeout(function () {
        $('#contractform').trigger('reset');
        window.location.reload();
    }, 5000)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: "success",
        title: "PDF gerado com sucesso!"
    })
})

/*
 *
 * VALIDATION AREA
 * Author: Rui Marques
 * Date: 10-08-2021
 *
 * The code below sets the validation
 * for the input fields and enables
 * the submit button
 *
 */

$(function () {
    var submitButton = $('#btnCreate').attr('disabled', true);

    $("#contractform input:required").change(function () {
        var valid = true;
        $.each($('#contractform input:required'), function (index, value) {
            if (!$(value).val()) {
                valid = false;
            }
        });
        if (valid) {
            $(submitButton).attr("disabled", false);
        } else {
            $(submitButton).attr("disabled", true);
        }
    });
})