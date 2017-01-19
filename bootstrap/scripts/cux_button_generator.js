<!-- Button Builder Example -->

    //Script for light button
    $(function () {
        var show_result = function () {
            $('#resultLight').text($('#buttonIconLight').html().trim());
        };

        show_result();

        $('#btn-text').on('focusout', function (e) {
            $('#btn-icon-positions button[value="' + $('#buttonIconLight').data('position') + '"]').trigger('click')
            show_result();
        });

        $('#btn-colors button').on('click', function (e) {
            $('#buttonIconLight a').removeClass('btn-default btn-primary btn-link').addClass($(this).val());
            show_result();
        });

        $('#btn-sizes button').on('click', function (e) {
            $('#buttonIconLight a').removeClass('btn-xs btn-sm btn-lg btn-xl').addClass($(this).val());
            show_result();
        });

        $('#btn-sizes a').on('click', function (e) {
            $('#buttonIconLight a').toggleClass('btn-block');
            show_result();
        });

        $('#btn-icon').iconpicker({
            rows: 5,
            cols: 10,
            align: 'left'
        });

        $('#btn-icon').on('change', function (e) {
            $('#buttonIconLight a > i').attr('class', '').addClass('cux ' + e.icon);
            show_result();
        });

        $('#btn-icon-positions button').on('click', function (e) {
            var icon = $('#buttonIconLight a > i');
            var text = $('#btn-text').val();
            $('#buttonIconLight a').empty();
            if ($(this).val() == 'left') {
                $('#buttonIconLight a').append(icon).append(' ' + text);
            }
            else {
                $('#buttonIconLight a').append(text + ' ').append(icon);
            }
            $('#buttonIconLight').data('position', $(this).val());
            show_result();
        });
    });

//Script for dark button
$(function () {
    var show_result = function () {
        $('#resultDark').text($('#buttonIconDark').html().trim());
    };

    show_result();

    $('#btn-text').on('focusout', function (e) {
        $('#btn-icon-positions button[value="' + $('#buttonIconDark').data('position') + '"]').trigger('click')
        show_result();
    });

    $('#btn-colors button').on('click', function (e) {
        $('#buttonIconDark a').removeClass('btn-default-dark btn-primary-dark btn-link-dark').addClass($(this).val() + '-dark');
        show_result();
    });

    $('#btn-sizes button').on('click', function (e) {
        $('#buttonIconDark a').removeClass('btn-xs btn-sm btn-lg btn-xl').addClass($(this).val());
        show_result();
    });

    $('#btn-sizes a').on('click', function (e) {
        $('#buttonIconDark a').toggleClass('btn-block');
        show_result();
    });

    $('#btn-icon').iconpicker({
        rows: 5,
        cols: 10,
        align: 'left'
    });

    $('#btn-icon').on('change', function (e) {
        $('#buttonIconDark a > i').attr('class', '').addClass('cux ' + e.icon);
        show_result();
    });

    $('#btn-icon-positions button').on('click', function (e) {
        var icon = $('#buttonIconDark a > i');
        var text = $('#btn-text').val();
        $('#buttonIconDark a').empty();
        if ($(this).val() == 'left') {
            $('#buttonIconDark a').append(icon).append(' ' + text);
        }
        else {
            $('#buttonIconDark a').append(text + ' ').append(icon);
        }
        $('#buttonIconDark').data('position', $(this).val());
        show_result();
    });
});