// Pnotify scripts

//Use fontawesome for icons -> Needs to be changed to CUX
PNotify.prototype.options.styling = "fontawesome";

//Warning high contrast
function pnotifyWarningContrast (text, type) {
    new PNotify({
        text: 'Indicates a warning that might need attention',
        type: 'warning'
    });
}

//Success high contrast
function pnotifySuccessContrast (text, type) {
    new PNotify({
        text: 'Indicates a successful or positive action',
        type: 'success'
    });
}

//Error high contrast
function pnotifyErrorContrast (text, type) {
    new PNotify({
        text: 'Indicates a dangerous or potentially negative action',
        type: 'error'
    });
}

//Info high contrast
function pnotifyInfoContrast (text, type) {
    new PNotify({
        text: 'Indicates a neutral informative change or action',
        type: 'info'
    });
}

//Warning button high contrast
function pnotifyWarningButtonContrast (text, type, hide, confirm) {
    new PNotify({
        type: 'warning',
        text: 'You have three options to choose from.',
        hide: false,
        confirm: {
            confirm: true,
            buttons: [{
                text: 'Fries',
                addClass: 'btn-warning',
                click: function(notice) {
                    notice.update({
                        text: 'You want fries.',
                        icon: true,
                        type: 'warning',
                        hide: true,
                        confirm: {
                            confirm: false
                        },
                        buttons: {
                            closer: true,
                            sticker: true
                        }
                    });
                }
            }, {
                text: 'Mashed Potatoes',
                addClass: 'btn-warning',
                click: function(notice) {
                    notice.update({
                        text: 'You want mashed potatoes.',
                        icon: true,
                        type: 'warning',
                        hide: true,
                        confirm: {
                            confirm: false
                        },
                        buttons: {
                            closer: true,
                            sticker: true
                        }
                    });
                }
            }, {
                text: 'Fruit',
                addClass: 'btn-warning',
                click: function(notice) {
                    notice.update({
                        text: 'You want fruit.',
                        icon: true,
                        type: 'warning',
                        hide: true,
                        confirm: {
                            confirm: false
                        },
                        buttons: {
                            closer: true,
                            sticker: true
                        }
                    });
                }
            }]
        },
        buttons: {
            closer: false,
            sticker: false
        },
        history: {
            history: false
        }
    });
}

//Success button high contrast
function pnotifySuccessButtonContrast (text, type, hide, confirm) {
    new PNotify({
        type: 'success',
        text: 'You have three options to choose from.',
        hide: false,
        confirm: {
            confirm: true,
            buttons: [{
                text: 'Fries',
                addClass: 'btn-success',
                click: function(notice) {
                    notice.update({
                        text: 'You want fries.',
                        icon: true,
                        type: 'success',
                        hide: true,
                        confirm: {
                            confirm: false
                        },
                        buttons: {
                            closer: true,
                            sticker: true
                        }
                    });
                }
            }, {
                text: 'Mashed Potatoes',
                addClass: 'btn-success',
                click: function(notice) {
                    notice.update({
                        text: 'You want mashed potatoes.',
                        icon: true,
                        type: 'success',
                        hide: true,
                        confirm: {
                            confirm: false
                        },
                        buttons: {
                            closer: true,
                            sticker: true
                        }
                    });
                }
            }, {
                text: 'Fruit',
                addClass: 'btn-success',
                click: function(notice) {
                    notice.update({
                        text: 'You want fruit.',
                        icon: true,
                        type: 'success',
                        hide: true,
                        confirm: {
                            confirm: false
                        },
                        buttons: {
                            closer: true,
                            sticker: true
                        }
                    });
                }
            }]
        },
        buttons: {
            closer: false,
            sticker: false
        },
        history: {
            history: false
        }
    });
}

//Error button high contrast
function pnotifyErrorButtonContrast (text, type, hide, confirm) {
    new PNotify({
        type: 'error',
        text: 'You have three options to choose from.',
        hide: false,
        confirm: {
            confirm: true,
            buttons: [{
                text: 'Fries',
                addClass: 'btn-danger',
                click: function(notice) {
                    notice.update({
                        text: 'You want fries.',
                        icon: true,
                        type: 'error',
                        hide: true,
                        confirm: {
                            confirm: false
                        },
                        buttons: {
                            closer: true,
                            sticker: true
                        }
                    });
                }
            }, {
                text: 'Mashed Potatoes',
                addClass: 'btn-danger',
                click: function(notice) {
                    notice.update({
                        text: 'You want mashed potatoes.',
                        icon: true,
                        type: 'error',
                        hide: true,
                        confirm: {
                            confirm: false
                        },
                        buttons: {
                            closer: true,
                            sticker: true
                        }
                    });
                }
            }, {
                text: 'Fruit',
                addClass: 'btn-danger',
                click: function(notice) {
                    notice.update({
                        text: 'You want fruit.',
                        icon: true,
                        type: 'error',
                        hide: true,
                        confirm: {
                            confirm: false
                        },
                        buttons: {
                            closer: true,
                            sticker: true
                        }
                    });
                }
            }]
        },
        buttons: {
            closer: false,
            sticker: false
        },
        history: {
            history: false
        }
    });
}

//Info button high contrast
function pnotifyInfoButtonContrast (text, type, hide, confirm) {
    new PNotify({
        text: 'You have three options to choose from.',
        type:'info',
        hide: false,
        confirm: {
            confirm: true,
            buttons: [{
                text: 'Fries',
                addClass: 'btn-primary',
                click: function(notice) {
                    notice.update({
                        text: 'You want fries.',
                        icon: true,
                        type: 'info',
                        hide: true,
                        confirm: {
                            confirm: false
                        },
                        buttons: {
                            closer: true,
                            sticker: true
                        }
                    });
                }
            }, {
                text: 'Mashed Potatoes',
                addClass: 'btn-primary',
                click: function(notice) {
                    notice.update({
                        text: 'You want mashed potatoes.',
                        icon: true,
                        type: 'info',
                        hide: true,
                        confirm: {
                            confirm: false
                        },
                        buttons: {
                            closer: true,
                            sticker: true
                        }
                    });
                }
            }, {
                text: 'Fruit',
                addClass: 'btn-primary',
                click: function(notice) {
                    notice.update({
                        text: 'You want fruit.',
                        icon: true,
                        type: 'info',
                        hide: true,
                        confirm: {
                            confirm: false
                        },
                        buttons: {
                            closer: true,
                            sticker: true
                        }
                    });
                }
            }]
        },
        buttons: {
            closer: false,
            sticker: false
        },
        history: {
            history: false
        }
    });
}


//Warning discrete
function pnotifyWarningDiscrete (text, type, addclass) {
    new PNotify({
        text: 'Indicates a warning that might need attention',
        type: 'warning',
        addclass: 'discrete-warning'
    });
}

//Success discrete
function pnotifySuccessDiscrete (text, type, addclass) {
    new PNotify({
        text: 'Indicates a successful or positive action',
        type: 'success',
        addclass: 'discrete-success'
    });
}

//Error discrete
function pnotifyErrorDiscrete(text, type, addclass) {
    new PNotify({
        text: 'Indicates a dangerous or potentially negative action',
        type: 'error',
        addclass: 'discrete-danger'
    });
}

//Info discrete
function pnotifyInfoDiscrete (text, type, addclass) {
    new PNotify({
        text: 'Indicates a neutral informative change or action',
        type: 'info',
        addclass: 'discrete-info'
    });
}


//Warning discrete with buttons
function pnotifyWarningButtonDiscrete (text, type, addclass, hide, confirm, buttons, history) {
    new PNotify({
        text: 'Are you sure you want to do this horrible action?',
        addclass: 'discrete-warning',
        hide: false,
        confirm: {
            confirm: true
        },
        buttons: {
            closer: false,
            sticker: false
        },
        history: {
            history: false
        }
    });
}

//Success discrete with buttons
function pnotifySuccessButtonDiscrete (text, type, addclass, hide, confrm, buttons, history) {
    new PNotify({
        text: 'Are you sure you want to do this horrible action?',
        addclass: 'discrete-success',
        type: 'success',
        hide: false,
        confirm: {
            confirm: true
        },
        buttons: {
            closer: false,
            sticker: false
        },
        history: {
            history: false
        }
    });
}

//Error discrete with buttons
function pnotifyErrorButtonDiscrete(text, type, addclass, hide, confrm, buttons, history) {
    new PNotify({
        text: 'Are you sure you want to do this horrible action?',
        addclass: 'discrete-danger',
        type: 'error',
        hide: false,
        confirm: {
            confirm: true
        },
        buttons: {
            closer: false,
            sticker: false
        },
        history: {
            history: false
        }
    });
}

//Info discrete with buttons
function pnotifyInfoButtonDiscrete (text, type, addclass, hide, confrm, buttons, history) {
    new PNotify({
        text: 'Are you sure you want to do this horrible action?',
        addclass: 'discrete-info',
        type: 'info',
        hide: false,
        confirm: {
            confirm: true
        },
        buttons: {
            closer: false,
            sticker: false
        },
        history: {
            history: false
        }
    });
}