<!-- Button Builder Example -->

    //Script for light button
    $(function () {
        var show_result = function () {
            $('#resultLight').text($('#buttonIconLight').html().trim());
        };

        var show_color = function () {
            /*
            var classy = document.getElementById('buttonIconLight').firstElementChild.getAttribute("class");
            var style = getComputedStyle(document.getElementById('buttonIconLight').firstElementChild, "");

            backgroundColor = style.getPropertyValue("background-color");

            borderTopColor = style.getPropertyValue("border-top-color");
            borderTopStyle = style.getPropertyValue("border-top-style");
            borderTopWidth = style.getPropertyValue("border-top-width");

            borderBottomColor = style.getPropertyValue("border-bottom-color");
            borderBottomWidth = style.getPropertyValue("border-bottom-width");
            borderBottomStyle = style.getPropertyValue("border-bottom-style");

            borderRadius = style.getPropertyValue("border-radius");

            color = style.getPropertyValue("color");

            fontSize = style.getPropertyValue("font-size");
            fontFamily = style.getPropertyValue("font-family");

            height = style.getPropertyValue("height");
            padding = style.getPropertyValue("padding");


            $('#printBackground2').text('Background color:  ' + backgroundColor);
            $('#printBorder2').text('Border:  ' + borderTopWidth + ' ' + borderTopStyle + ' ' + borderTopColor);
            $('#printBorderRadius2').text('Border radius:  ' + borderRadius);
            $('#printBorderBottom2').text('Border bottom:  ' + borderBottomWidth + ' ' + borderBottomStyle + ' ' + borderBottomColor);
            $('#printText2').text('Text color:  ' + color);
            $('#printFontSize2').text('Font:  ' + fontSize + ' ' + fontFamily);
            $('#printHeight2').text('Height:  ' + height);
            $('#printPadding2').text('Padding:  ' + padding);
             */
        };

        $('#btn-text').on('focusout', function (e) {
            $('#btn-icon-positions button[value="' + $('#buttonIconLight').data('position') + '"]').trigger('click')
            show_result();
            show_color();

        });

        $('#btn-colors button').on('click', function (e) {
            $('#buttonIconLight a').removeClass('btn-default btn-primary btn-link btn-branding btn-red').addClass($(this).val());
            show_result();
            show_color();

        });

        $('#btn-sizes button').on('click', function (e) {
            $('#buttonIconLight a').removeClass('btn-xs btn-sm btn-lg btn-xl').addClass($(this).val());
            show_result();
            show_color();

        });

        $('#btn-sizes a').on('click', function (e) {
            $('#buttonIconLight a').toggleClass('btn-block');
            show_result();
            show_color();

        });

        $('#btn-icon').iconpicker({
            rows: 5,
            cols: 10,
            align: 'left'
        });

        $('#btn-icon').on('change', function (e) {
            $('#buttonIconLight a > i').attr('class', '').addClass('cux ' + e.icon);
            show_result();
            show_color();

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
            show_color();

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
        $('#buttonIconDark a').removeClass('btn-default-dark btn-primary-dark btn-link-dark  btn-branding btn-red-dark').addClass($(this).val() + '-dark');
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


//Script for reading CSS and printing it in pseudocode
$(function () {



});