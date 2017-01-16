document.querySelector('button#test-1').onclick = function () {
    swal({
        title: "Information message",
        text: "If needed, additional text. Lorem ipsum dolor sit amet, in mei adhuc possim quaestio, cibo quas falli mel ex, at sumo nostro appareat usu.",
        type: "info",
        showCancelButton: false,
        confirmButtonText: "OK",
        confirmButtonClass: 'btn-default',
        closeOnConfirm: true
    });
};
document.querySelector('button#test-2').onclick = function () {
    swal({
        title: "Are you sure to delete this alarm?",
        text: "You will not be able to recover the information unless you back up your file",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Continue",
        confirmButtonClass: 'btn-primary',
        closeOnConfirm: false
    }, function () {
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
    });
};
document.querySelector('button#test-3').onclick = function () {
    swal({
        title: "This alarm is linked to a rule",
        text: "Please select the action you want to perform",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: 'btn-primary',
        cancelButtonText: "Cancel",
        confirmButtonText: "Save and overwrite rule",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            swal("Saved", "Changes have been saved and rule has been updated", "success");
        } else {
            swal("Cancelled", "No changes were saved", "error");
        }
    });
};
document.querySelector('button#test-4').onclick = function () {
    swal("Oops...", "Something went wrong!", "error");
};
document.querySelector('button#test-5').onclick = function () {
    swal({
        title: "New alarm created",
        text: "Alarm 200TTX201 has been created and added to Jackfish 2 master alarm database",
        timer: 2000,
        showConfirmButton: false,
        showCancelButton: false
    });
};
document.querySelector('#test-6').onclick = function () {
    swal({
        title: "Are you sure to delete this alarm?",
        text: "HighHigh alarm from tag 200TT201X will be deleted",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Continue",
        confirmButtonClass: 'btn-primary',
        closeOnConfirm: false
    }, function () {
        swal("Deleted!", "The alarm has been deleted.", "success");
    });
};
document.querySelector('#test-7').onclick = function () {
    swal({
        title: "Are you sure to delete this tag?",
        text: "The tag 200TT201X together with all its configured alarms: Low, LowLow, High will be deleted",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Continue",
        confirmButtonClass: 'btn-primary',
        closeOnConfirm: false
    }, function () {
        swal("Deleted!", "The tag and its alarms have been deleted.", "success");
    });
};
