<!-- Style generator script -->

$(function () {

    // A click on a button defined with class "btn" will activate the routine for parsing style and print as pseudocode
    $(".btn").on('click', function (e) {
        pseudo_button();
    });

    // A click on a navigation defined with class "nav" will activate the routine for parsing style and print as pseudocode
    $(".nav").on('click', function (e) {
        pseudo_navigation();
    });

    var pseudo_button = function () {

        var btnClass = document.activeElement.className;
        if (btnClass == "btn btn-default"){
            classToPrint = "Normal - light background";
        }
        else if (btnClass == "btn btn-primary"){
            classToPrint = "Primary - light background";
        }
        else if (btnClass == "btn btn-link"){
            classToPrint = "Discrete - light background";
        }
        else {
            classToPrint = btnClass;
        }

        var activeElement = document.activeElement;
        var style = getComputedStyle(activeElement, "");

        if (activeElement.className != "btn btn-branding")
        {

            backgroundColor = style.getPropertyValue("background-color");

            borderLeftColor = style.getPropertyValue("border-left-color");
            borderLeftStyle = style.getPropertyValue("border-left-style");
            borderLeftWidth = style.getPropertyValue("border-left-width");

            borderBottomColor = style.getPropertyValue("border-bottom-color");
            borderBottomWidth = style.getPropertyValue("border-bottom-width");
            borderBottomStyle = style.getPropertyValue("border-bottom-style");

            borderTopColor = style.getPropertyValue("border-top-color");
            borderTopWidth = style.getPropertyValue("border-top-width");
            borderTopStyle = style.getPropertyValue("border-top-style");

            borderRadius = style.getPropertyValue("border-radius");

            color = style.getPropertyValue("color");

            fontSize = style.getPropertyValue("font-size");
            fontFamily = style.getPropertyValue("font-family");

            height = style.getPropertyValue("height");
            padding = style.getPropertyValue("padding");

            $('#printType').text('Button type:  ' + classToPrint);
            $('#printBackground').text('Background color:  ' + backgroundColor);
            $('#printBorder').text('Border:  ' + borderLeftWidth + ' ' + borderLeftStyle + ' ' + borderLeftColor);
            $('#printBorderRadius').text('Border radius:  ' + borderRadius);
            $('#printBorderBottom').text('Border bottom:  ' + borderBottomWidth + ' ' + borderBottomStyle + ' ' + borderBottomColor);
            $('#printText').text('Text color:  ' + color);
            $('#printFontSize').text('Font:  ' + fontSize + ' ' + fontFamily);
            $('#printHeight').text('Height:  ' + height);
            $('#printPadding').text('Padding:  ' + padding);

            $('#preview').html($(activeElement.parentNode).html());

            $('#result').text($(activeElement).html());

        }
    };

    var pseudo_navigation = function () {

        var navClass = document.activeElement.parentNode.parentNode.className;
        if (navClass == "nav navbar-nav"){
            var navToPrint = "ABB Blackbar";
        }
        else {
            var navToPrint = navClass;
        }


        var style = getComputedStyle(document.activeElement, "");

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

        $('#printType').text('Navigation type:  ' + navToPrint);
        $('#printBackground').text('Background color:  ' + backgroundColor);
        $('#printBorder').text('Border top:  ' + borderTopWidth + ' ' + borderTopStyle + ' ' + borderTopColor);
        $('#printBorderRadius').text('Border radius:  ' + borderRadius);
        $('#printBorderBottom').text('Border bottom:  ' + borderBottomWidth + ' ' + borderBottomStyle + ' ' + borderBottomColor);
        $('#printText').text('Text color:  ' + color);
        $('#printFontSize').text('Font:  ' + fontSize + ' ' + fontFamily);
        $('#printHeight').text('Height:  ' + height);
        $('#printPadding').text('Padding:  ' + padding);
    };


});