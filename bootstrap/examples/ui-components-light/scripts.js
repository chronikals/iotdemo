// Typeahead code------------------------------------------------------------------

$('#search').typeahead({
name: 'search',
remote: {
url: 'http://suggestqueries.google.com/complete/search?client=chrome&q=%QUERY',
dataType: 'jsonp',
cache: false,
filter: function(parsedResponse){
return (parsedResponse.length > 1) ? parsedResponse[1] : [] ;
}
}
}).on('typeahead:selected', function(e){
e.target.form.submit();
});


//Tooltips-------------------------------------------------------------------------

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

//Popovers-------------------------------------------------------------------------

    $(function () {
    $('[data-toggle="popover"]').popover()
})

//Dropdown fix-------------------------------------------------------------------------
    $( document.body ).on( 'click', '.dropdown-menu li', function( event ) {

    var $target = $( event.currentTarget );

    $target.closest( '.btn-group' )
    .find( '[data-bind="label"]' ).text( $target.text() )
    .end()
    .children( '.dropdown-toggle' ).dropdown( 'toggle' );

    return false;
});

//Pnotify config-------------------------------------------------------------------------
PNotify.prototype.options.styling = "fontawesome";

