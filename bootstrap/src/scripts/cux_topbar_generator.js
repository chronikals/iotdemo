<!-- Topbar Builder Example -->

//Script for light button
$(function () {
    var show_result = function () {
        //$('#resultBar').text($('#topBar').html().trim());

        options = {
            "indent":"auto",
            "indent-spaces":2,
            "wrap":80,
            "markup":true,
            "output-xml":false,
            "numeric-entities":true,
            "quote-marks":true,
            "quote-nbsp":false,
            "show-body-only":true,
            "quote-ampersand":false,
            "break-before-br":true,
            "uppercase-tags":false,
            "uppercase-attributes":false,
            "drop-font-tags":true,
            "tidy-mark":false
        }

        var html = $('#topBar').html().trim();

        $('#resultBar').text(html);

    };

    show_result();

    $('#bar-name').on('focusout', function (e) {
        var text = $('#bar-name').val();
        $('#productName a').empty();
        $('#productName a').append(' ' + text);
        show_result();
    });

    $('#choice1-text').on('focusout', function (e) {
        var text = $('#choice1-text').val();
        var icon = $('#choice1-icon > i');
        $('#bar-choice1-text').empty()
        $('#bar-choice1-text').append(icon).append(' ' + text)
        show_result();
    });

    $('#choice2-text').on('focusout', function (e) {
        var text = $('#choice2-text').val();
        $('#bar-choice2-text').empty();
        $('#bar-choice2-text').append(' ' + text);
        show_result();
    });

    $('#choice3-text').on('focusout', function (e) {
        var text = $('#choice3-text').val();
        $('#bar-choice3-text').empty();
        $('#bar-choice3-text').append(' ' + text);
        if ('#bar-choice1-icon' != '')
            show_result();
    });

    $('#choice4-text').on('focusout', function (e) {
        var text = $('#choice4-text').val();
        $('#bar-choice4-text').empty();
        $('#bar-choice4-text').append(' ' + text);
        show_result();
    });

    $('#choice5-text').on('focusout', function (e) {
        var text = $('#choice5-text').val();
        $('#bar-choice5-text').empty();
        $('#bar-choice5-text').append(' ' + text);
        show_result();
    });

    $('#choice1-icon').on('change', function (e) {
        $('#bar-choice1-icon').empty();
        $('#bar-choice1-icon').attr('class', '').addClass('cux ' + e.icon + ' ' + 'cux-20');
        show_result();
    });

    $('#choice2-icon').on('change', function (e) {
        $('#bar-choice2-icon').empty();
        $('#bar-choice2-icon').attr('class', '').addClass('cux ' + e.icon + ' ' + 'cux-20');
        show_result();
    });

    $('#choice3-icon').on('change', function (e) {
        $('#bar-choice3-icon').empty();
        $('#bar-choice3-icon').attr('class', '').addClass('cux ' + e.icon + ' ' + 'cux-20');
        show_result();
    });

    $('#choice4-icon').on('change', function (e) {
        $('#bar-choice4-icon').empty();
        $('#bar-choice4-icon').attr('class', '').addClass('cux ' + e.icon + ' ' + 'cux-20');
        show_result();
    });

    $('#choice5-icon').on('change', function (e) {
        $('#bar-choice5-icon').empty();
        $('#bar-choice5-icon').attr('class', '').addClass('cux ' + e.icon + ' ' + 'cux-20');
        show_result();
    });
});