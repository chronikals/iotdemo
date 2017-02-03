/*!
 * fa2png v0.1.0 | Copyright (c) 2016 Stephan Gro� | https://www.fa2png.io
 */
function getCookie(e) {
    "use strict";
    var t = null;
    if (document.cookie && "" !== document.cookie)
        for (var o = document.cookie.split(";"), n = 0; n < o.length; n++) {
            var i = jQuery.trim(o[n]);
            if (i.substring(0, e.length + 1) === e + "=") {
                t = decodeURIComponent(i.substring(e.length + 1));
                break
            }
        }
    return t
}

function csrfSafeMethod(e) {
    "use strict";
    return /^(GET|HEAD|OPTIONS|TRACE)$/.test(e)
}

function PM() {
    "use strict";

    function e(e) {
        for (var t = window.location.search.substring(1), o = t.split("&"), n = 0; n < o.length; n++) {
            var i = o[n].split("=");
            if (i[0] === e) return i[1]
        }
    }

    function t() {
        return getCookie("icon_color") || "#007dff"
    }

    function o() {
        return getCookie("icon_background") || "transparent"
    }

    function n() {
        return parseInt(getCookie("icon_size")) || 256
    }

    function i() {
        return parseInt(getCookie("icon_margin")) || 0
    }

    function a() {
        h = $("#icon-preview"), b = $("#icon-name-input"), v = $("#js-icon-color-colorpicker"), k = $("#js-icon-background-colorpicker"), x = $("#js-icon-background-clear"), w = $("#icon-disable-background-input"), y = $("#js-icon-size-slider"), C = $("#icon-size-input"), j = $("#js-icon-margin-slider"), _ = $("#icon-margin-input"), T = $("#js-icon-form"), D = $("#js-icon-generation-modal"), S = $("#js-icon-download-btn"), P = $("#js-icon-download-size"), z = $("#js-icon-base64"), L = z.find("input"), H = $("#js-icon-permalink"), A = H.find("input")
    }

    function r() {
        $('[data-toggle="popover"]').popover({
            trigger: "hover"
        })
    }

    function s() {
        b.length && b.select2({
            ajax: {
                url: "http://fa2png.io/api/autocomplete/icon/",
                dataType: "json",
                delay: 250,
                data: function(e) {
                    return {
                        q: e.term,
                        page: e.page
                    }
                },
                processResults: function(e, t) {
                    t.page = t.page || 1;
                    for (var o = 0; o < e.results.length; o++) e.results[o].hasOwnProperty("font") && md.addFont(e.results[o].font);
                    return {
                        results: e.results,
                        pagination: {
                            more: 20 * t.page < e.count
                        }
                    }
                },
                cache: !0
            },
            minimumInputLength: 1,
            escapeMarkup: function(e) {
                return e
            },
            templateResult: function(e) {
                return e.loading ? e.text : '<div class="container-fluid"><div class="row"><div class="col-xs-2">' + e.css + '</div><div class="col-xs-10">' + e.label + "</div></div></div>"
            },
            templateSelection: function(e) {
                return e.label || e.text
            }
        }).on("select2:select", function(e) {
            h.data("icon-css", e.params.data.css), g()
        })
    }

    function c() {
        if (w.length && w.change(function() {
                createCookie("icon_background_disabled", w.is(":checked"), N)
            }), v.length) {
            v.on("create", function() {
                g()
            }), v.on("changeColor", function(e) {
                h.data("icon-color", e.color.toHex()), createCookie("icon_color", e.color.toHex(), N), g()
            });
            var n = e("color");
            if (void 0 !== n) {
                var i = n.match(O);
                n = null === i || n !== i[0] ? t() : "#" + n
            } else n = t();
            h.data("icon-color", n), createCookie("icon_color", n, N), v.colorpicker($.extend(I, {
                color: n
            }))
        }
        if (k.length) {
            k.on("create", function() {
                g()
            }), k.on("changeColor", function(e) {
                w.closest("div").removeClass("hidden"), h.data("icon-background", e.color.toHex()), createCookie("icon_background", e.color.toHex(), N), g()
            }), x.on("click", function() {
                k.colorpicker("setValue", "transparent"), k.colorpicker("update", !0), w.prop("checked", !1), w.closest("div").addClass("hidden"), h.data("icon-background", "transparent"), createCookie("icon_background_disabled", !1, N), g()
            });
            var a = e("background");
            if (void 0 !== a) {
                var r = a.match(O);
                a = null === r || a !== r[0] ? o() : "#" + a
            } else a = o();
            h.data("icon-background", a), createCookie("icon_background", a, N), "transparent" !== a ? (w.closest("div").removeClass("hidden"), w.prop("checked", "true" === getCookie("icon_background_disabled"))) : createCookie("icon_background_disabled", !1, N), k.colorpicker($.extend(I, {
                color: a
            }))
        }
    }

    function d() {
        if (y.length) {
            var t = parseInt(e("size")) || n();
            8 > t && (t = 8), t > 1024 && (t = 1024), y.noUiSlider({
                start: [t],
                step: 1,
                range: {
                    min: [8],
                    max: [1024]
                }
            }), y.Link("lower").to(C, null, wNumb({
                decimals: 0
            })), y.on("slide change", function() {
                h.data("icon-size", C.val()), createCookie("icon_size", C.val(), N), g()
            }), C.on("keyup change", function() {
                h.data("icon-size", C.val()), createCookie("icon_size", C.val(), N), g()
            }), h.data("icon-size", C.val()), createCookie("icon_size", C.val(), N);
            var o = parseInt(e("margin")) || i();
            0 > o && (o = 0), o > 256 && (o = 256), j.noUiSlider({
                start: [o],
                step: 1,
                range: {
                    min: [0],
                    max: [256]
                }
            }), j.Link("lower").to(_, null, wNumb({
                decimals: 0
            })), j.on("slide change", function() {
                h.data("icon-margin", _.val()), createCookie("icon_margin", _.val(), N), g()
            }), _.on("keyup change", function() {
                h.data("icon-margin", _.val()), createCookie("icon_margin", _.val(), N), g()
            }), h.data("icon-margin", _.val()), createCookie("icon_margin", _.val(), N)
        }
    }

    function l() {
        window.PNotify.prototype.options.stack = {
            dir1: "down",
            dir2: "left",
            push: "bottom",
            spacing1: 10,
            spacing2: 20,
            context: $("body")
        }
    }

    function u() {
        T.length && T.submit(function(e) {
            e.preventDefault();
            var t = $(this),
                o = t.serializeObject();
            D.modal("show"), $.ajax({
                method: "POST",
                url: t.attr("action"),
                data: JSON.stringify(o),
                processData: !1,
                contentType: "application/json",
                dataType: "json",
                form: t
            }).done(function(e) {
                P.html(e.imageSize), S.attr("href", e.imageUrl), S.attr("download", e.imageName), S.removeClass("hidden"), S.pulsate({
                    color: "rgb(0,255,0)",
                    reach: 15,
                    speed: 800,
                    pause: 0,
                    glow: !1,
                    repeat: 3,
                    onHover: !1
                }), L.val(e.imageBase64), z.removeClass("hidden"), A.val(e.imagePermalink), H.removeClass("hidden")
            }).fail(function(e, t) {
                if ("error" === t)
                    if (400 === e.status) $.each(e.responseJSON, function(e, t) {
                        var o = {
                                title: '<span class="fa fa-warning"></span> Error: ' + e,
                                text: t[0],
                                type: "error",
                                buttons: {
                                    sticker: !1
                                }
                            },
                            n = new window.PNotify(o);
                        n.get().click(function() {
                            n.remove()
                        })
                    });
                    else if (403 === e.status) {
                    var o = {
                            title: '<span class="fa fa-warning"></span> Error',
                            text: e.responseJSON.detail,
                            type: "error",
                            buttons: {
                                sticker: !1
                            }
                        },
                        n = new window.PNotify(o);
                    n.get().click(function() {
                        n.remove()
                    })
                }
            }).always(function() {
                D.modal("hide")
            })
        })
    }

    function p() {
        ZeroClipboard.config({
            swfPath: "/static/ZeroClipboard.swf"
        });
        var e = new ZeroClipboard($("#js-icon-base64-btn"));
        e.on("ready", function() {
            e.on("copy", function(e) {
                var t = $("#js-icon-base64").find("input").val();
                e.clipboardData.setData("text/plain", t)
            })
        }), e.on("aftercopy", function(e) {
            var t = {
                    title: '<span class="fa fa-check"></span> Copied base64 data string',
                    text: e.data["text/plain"],
                    type: "info",
                    buttons: {
                        sticker: !1
                    }
                },
                o = new window.PNotify(t);
            o.get().click(function() {
                o.remove()
            })
        }), e.on("error", function() {
            ZeroClipboard.destroy()
        })
    }

    function f() {
        ZeroClipboard.config({
            swfPath: "/static/ZeroClipboard.swf"
        });
        var e = new ZeroClipboard($("#js-icon-permalink-btn"));
        e.on("ready", function() {
            e.on("copy", function(e) {
                var t = $("#js-icon-permalink").find("input").val();
                e.clipboardData.setData("text/plain", t)
            })
        }), e.on("aftercopy", function(e) {
            var t = {
                    title: '<span class="fa fa-check"></span> Copied permalink',
                    text: e.data["text/plain"],
                    type: "info",
                    buttons: {
                        sticker: !1
                    }
                },
                o = new window.PNotify(t);
            o.get().click(function() {
                o.remove()
            })
        }), e.on("error", function() {
            ZeroClipboard.destroy()
        })
    }

    function m() {
        var e = h.children().first();
        if (void 0 !== e) {
            e.css({
                position: "absolute"
            });
            var t = h.height(),
                o = h.width(),
                n = e.height(),
                i = e.width(),
                a = (t - n) / 2,
                r = (o - i) / 2;
            e.css({
                top: a,
                left: r
            })
        }
    }

    function g() {
        var e = h.data("icon-css"),
            i = h.data("icon-color"),
            a = h.data("icon-background"),
            r = h.data("icon-size");
        if (void 0 !== e) {
            h.html(e), S.addClass("hidden"), z.addClass("hidden"), H.addClass("hidden"), h.css(void 0 !== i ? {
                color: i
            } : {
                color: t()
            });
            var s = 8,
                c = 1024,
                d = void 0 !== r ? parseInt(r) : n();
            d = s > d ? s : d, d = d > c ? c : d, h.css({
                "font-size": d + "px"
            }), m()
        }
        var l = void 0 !== a ? a : o();
        h.css("background", l)
    }
    var h, b, v, k, x, w, y, C, j, _, T, D, S, P, z, L, H, A, N = 365,
        O = /^[0-9a-f]{6}$/i,
        I = {
            component: ".input-group-addon:last",
            format: "hex",
            colorSelectors: {
                "#1abc9c": "#1abc9c",
                "#2ecc71": "#2ecc71",
                "#3498db": "#3498db",
                "#9b59b6": "#9b59b6",
                "#f1c40f": "#f1c40f",
                "#e67e22": "#e67e22",
                "#e74c3c": "#e74c3c",
                "#ecf0f1": "#ecf0f1",
                "#95a5a6": "#95a5a6",
                "#34495e": "#34495e",
                "#16a085": "#16a085",
                "#27ae60": "#27ae60",
                "#2980b9": "#2980b9",
                "#8e44ad": "#8e44ad",
                "#f39c12": "#f39c12",
                "#d35400": "#d35400",
                "#c0392b": "#c0392b",
                "#bdc3c7": "#bdc3c7",
                "#7f8c8d": "#7f8c8d",
                "#2c3e50": "#2c3e50"
            },
            sliders: {
                saturation: {
                    maxLeft: 200,
                    maxTop: 200,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 0,
                    maxTop: 200,
                    callLeft: !1,
                    callTop: "setHue"
                },
                alpha: {
                    maxLeft: 0,
                    maxTop: 200,
                    callLeft: !1,
                    callTop: "setAlpha"
                }
            },
            template: '<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-selectors"></div></div>'
        };
    this.init = function() {
        a(), r(), s(), c(), d(), l(), u(), p(), f()
    }, this.refreshPosition = function() {
        m()
    }, this.refresh = function() {
        a(), g()
    }
}
var csrftoken = getCookie("csrftoken");
$.ajaxSetup({
        beforeSend: function(e, t) {
            "use strict";
            csrfSafeMethod(t.type) || this.crossDomain || e.setRequestHeader("X-CSRFToken", csrftoken)
        }
    }), window.pm = new PM, $(document).on("ready pjaxr:done", function() {
        "use strict";
        window.pm.init()
    }), $(window).on("resize", function() {
        "use strict";
        window.pm.refreshPosition()
    }), $(document).on("ready pjaxr:done", function() {
        "use strict";
        $("#js-cookielaw-alert").on("closed.bs.alert", function() {
            createCookie("cookie_law_accepted", "1", 3650)
        }), $("#js-brand-alert").on("closed.bs.alert", function() {
            createCookie("brand_note_agreed", "1", 3650)
        })
    }), $(document).on("ready pjaxr:done", function() {
        "use strict";
        var e = $("#js-icon-list-form");
        if (e.length) {
            var t = e.find("#id_font"),
                o = e.find("#id_o"),
                n = e.find("#id_tag");
            t.change(function() {
                e.submit()
            }), o.change(function() {
                e.submit()
            }), n.parent().find(".input-group-addon").click(function() {
                e.submit()
            })
        }
    }), 
    
    function(e) {
        "use strict";
        e.fonts = [], e.addFont = function(t) {
            "string" == typeof t && -1 === $.inArray(t, e.fonts) && (e.fonts.push(t), $("head").append('<link rel="stylesheet" url="/css/' + t + '.css">'))
        }
    }(window.md = window.md || {}), $(document).ready(function() {
        "use strict";
        $.support.pjaxr && $(document).pjaxr("a[data-pjaxr]"), md.addFont("font-awesome")
    });