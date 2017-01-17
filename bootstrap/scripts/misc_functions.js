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
    $("#ex4").slider({
        reversed: true
    });
$("#ex5").slider({
    reversed: true
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
