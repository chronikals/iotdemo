//Dropdown fix
$(document.body).on('click', '.dropdown-menu li', function (event) {

    var $target = $(event.currentTarget);

    $target.closest('.btn-group')
        .find('[data-bind="label"]').text($target.text())
        .end()
        .children('.dropdown-toggle').dropdown('toggle');

    return false;

});

//Tooltip & popovers script
$(function () {
    $('.required-icon').tooltip({
        placement: 'left',
        title: 'Required field'
    });
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$(function () {
    $('[data-toggle="popover"]').popover()
})

//Script for the sliders
$("#ex-light-1").slider({});
$("#ex-light-2").slider({});
$("#ex-light-3").slider({});
$("#ex-light-4").slider({});
$("#ex-light-5").slider({
    tooltip: 'always'
});

$("#ex-light-2-labels").css("opacity", "0.5");

$("#ex-light-2-enabled").click(function() {
    if(this.checked) {
        $("#ex-light-2").slider("enable");
        $("#ex-light-2-labels").css("opacity", "1");
    }
    else {
        $("#ex-light-2").slider("disable");
        $("#ex-light-2-labels").css("opacity", "0.5");
    }
});

$("#ex-dark-1").slider({});
$("#ex-dark-2").slider({});
$("#ex-dark-3").slider({});
$("#ex-dark-4").slider({});
$("#ex-dark-5").slider({
    tooltip: 'always'
});

$("#ex-dark-2-labels").css("opacity", "0.5");

$("#ex-dark-2-enabled").click(function() {
    if(this.checked) {
        $("#ex-dark-2").slider("enable");
        $("#ex-dark-2-labels").css("opacity", "1");
    }
    else {
        $("#ex-dark-2").slider("disable");
        $("#ex-dark-2-labels").css("opacity", "0.5");
    }
});


//Buttons radio/checkbox toggle behaviours
$('#option1').on('click', function () {
    $(this).button('complete') // button text will be "finished!"
});
$('#option2').on('click', function () {
    $(this).button('complete') // button text will be "finished!"
})


//Scripts for treefy
$(function () {
    $("#treefy").treeFy({
        treeColumn: 1
    });
});
$(function () {
    $("#treefy2").treeFy({
        treeColumn: 0
    });
});

$(function () {
    $("#treefydark").treeFy({
        treeColumn: 1
    });
});
$(function () {
    $("#treefy2dark").treeFy({
        treeColumn: 0
    });
});

//Copy to clipboard
new Clipboard('.btn');

//Color palette picker js
jQuery(document).ready(function($) {
    $('.flatcolorpicker').flatcolorpicker({
    });
});
