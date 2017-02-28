
// Show modal dialog with condition monitoring information
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus();
})

// Load alerts file from json as page is loaded
$(document).ready(function () {
    $('#active-alerts').bootstrapTable({
        url: 'alerts.json',
        columns: [{
            field: 'state'
        }, {
            field: 'status',
            title: 'Status',
            formatter: operateFormatter
        }, {
            field: 'time',
            title: 'Time'
        }, {
            field: 'tag',
            title: 'Tag'
        }, {
            field: 'description',
            title: 'Description'
        }, {
            field: 'message',
            title: 'Message'
        }, {
            field: 'condition',
            title: 'Condition'
        },]
    });

    // Replace status string with an icon based on type
    function operateFormatter(value, row, index) {
        if (value == "error1") {
            return [
                '<a class="like" href="javascript:void(0)" title="Like">',
                '<i class="cux abb-cux-error-circle-full cux-16" style="color: #f03040"></i>',
                '</a>  '
            ].join('');
        }
        if (value == "error2") {
            return [
                '<a class="like" href="javascript:void(0)" title="Like">',
                '<i class="cux abb-cux-warning-triangle cux-16" style="color: #cb2bd5"></i>',
                '</a>  '
            ].join('');
        }
        if (value == "alert") {
            return [
                '<a class="like" href="javascript:void(0)" title="Like">',
                '<i class="cux abb-cux-warning-triangle cux-16" style="color: #ffd800"></i>',
                '</a>  '
            ].join('');
        }
    }

    // Print values in auxiliar dev input fields
    var e1 = document.getElementById('table-tag');
    var e2 = document.getElementById('table-condition');

    // Generate modal based on selection, link to json with status description
    var selectedTag = e1.value;
    var selectedDescription = "png22two_slot";
    var selectedCondition = e2.value;

    populateModal();

    function populateModal() {

        $.getJSON("umc-data.json", function (json) {
            $.each(json, function (i, v) {
                if (v.conditionID == selectedCondition) {
                    modalPossibleCause.append(v.possibleCause);
                    modalSuggestedAction.append(v.suggestedAction);
                    modalSeverity.append(v.severity);
                }
            });
        });

        document.getElementById("modalTag").append(selectedTag);
        document.getElementById("modalDescription").append(selectedDescription);
    }

});

// Get motor name and condition when a row is clicked
(function () {
    if (window.addEventListener) {
        window.addEventListener('load', run, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', run);
    }

    function run() {
        var t = document.getElementById('active-alerts');
        var rows = t.rows; //rows collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement
        for (var i = 0; i < rows.length; i++) {
            rows[i].onclick = function () {
                if (this.parentNode.nodeName == 'THEAD') {
                    return;
                }
                var cells = this.cells;
                var f1 = document.getElementById('table-tag');
                var f2 = document.getElementById('table-condition');
                f1.value = cells[3].innerHTML;
                f2.value = cells[5].innerHTML;
            };
        }
    }

})();

// Function that will connect the selections
$(function () {

});


