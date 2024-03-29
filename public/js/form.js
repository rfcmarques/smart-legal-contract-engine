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
            'font-weight': 600
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
            'font-weight': 600
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
            'font-weight': 600
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
            'font-weight': 600
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
    var textrgx = new RegExp('[^A-Za-zÀ-ȕ0-9(),-_., ]+');

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

$('input[type=number]').each(function () {
    $(this).on('keypress', function (evt) {
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
    })
})

$('form').on('focus', 'input[type=number]', function (e) {
    $(this).on('wheel', function (e) {
        e.preventDefault();
    })
})

$('form').on('keydown', 'input[type=number]', function (e){
    if (e.which == 38 || e.which == 40) {
        e.preventDefault();
    }
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
        window.location.replace('/user');
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

$(function () {
    $("#collapseOne input").change(function () {
        var valid = true;
        $.each($('#collapseOne input'), function (index, value) {
            if (!$(value).val()) {
                valid = false;
            }
        });
        if (valid) {
            $('#headingOne button').addClass('bg-success text-white');
            $('#headingTwo button').click();
        } else {
            $('#headingOne button').removeClass('bg-success text-white');
        }
    });

    $("#collapseTwo input").change(function () {
        var valid = true;
        $.each($('#collapseTwo input'), function (index, value) {
            if (!$(value).val()) {
                valid = false;
            }
        });
        if (valid) {
            $('#headingTwo button').addClass('bg-success text-white');
            $('#headingThree button').click();
        } else {
            $('#headingTwo button').removeClass('bg-success text-white');
        }
    });

    $("#collapseThree input").change(function () {
        var valid = true;
        $.each($('#collapseThree input:required'), function (index, value) {
            if (!$(value).val()) {
                valid = false;
            } else if (!$('#contractDurationUnit').val()) {
                valid = false;
            }
        });
        if (valid) {
            $('#headingThree button').addClass('bg-success text-white');
            $('#headingFour button').click();
        } else {
            $('#headingFour button').removeClass('bg-success text-white');
        }
    });

    $("#collapseFour input").change(function () {
        var valid = true;
        $.each($('#collapseFour input:required'), function (index, value) {
            if (!$(value).val()) {
                valid = false;
            }
        });
        if (valid) {
            $('#headingFour button').addClass('bg-success text-white');
        } else {
            $('#headingFour button').removeClass('bg-success text-white');
        }
    });
})