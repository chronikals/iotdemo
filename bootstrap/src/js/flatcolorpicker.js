/* ========================================================================
 * FlatColorPicker: v0.2
 * https://github.com/takien/FlatColorPicker
 * ========================================================================
 * Copyright 2014 Takien.com
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 * ======================================================================== */


+function ($) {
    'use strict';

    // FlatColorPicker PUBLIC CLASS DEFINITION
    // ===============================

    var FlatColorPicker = function (element, options) {
        this.init('flatcolorpicker', element, options)
    }

    if (!$.fn.popover) throw new Error('FlatColorPicker requires Popover from Bootstrap')

    FlatColorPicker.VERSION = '0.2'

    FlatColorPicker.DEFAULTS = $.extend({}, $.fn.popover.Constructor.DEFAULTS, {
        placement: 'bottom',
        trigger: 'click',
        colors: '000000, 0A0A0A, 0F0F0F, 141414, 191919, 1E1E1E, 242424, 282828, 2D2D2D, 323232, 373737, 3C3C3C, 414141, 464646, 505050, 5A5A5A, 646464, 6E6E6E, 787878, 828282, 8C8C8C, 969696, A0A0A0, AAAAAA, B4B4B4, BEBEBE, C3C3C3, C8C8C8, CDCDCD, D2D2D2, D7D7D7, DCDCDC, E1E1E1, E6E6E6, EBEBEB, F0F0F0, F5F5F5, FAFAFA, FFFFFF, 143F61, 17486E, 194D76, 1B5380, 1C5785, 1E5B8F, 206397, 2269A1, 236EA8, 267BBD, 0088CC, 0096E0, 0AAEFF, 47C2FF, 70CFFF, 99DDFF, C2EBFF, D6F1FF, BAACDD, A288CE, 8664BF, 6C46AA, 553786, 462D6E, DAA5CE, C675B3, B7519F, 973E82, 732F63, 5B254E, EBCAB9, DFAC92, D48E6A, BE704C, 9B5237, 804425, B9EEF0, 90E4E6, 58D7DA, 28B1B5, 1F888B, 196D6F, DEE4E6, C2CDCF, A5B6B9, 889FA3, 6D878C, 566B6F, 96E8C6, 68DFAA, 21BE89, 049669, 00704B, 015637',
        content: '',
        template: '<div class="flatcolorpicker-popover popover" role="tooltip"><div class="arrow"></div>\
<div class="popover-header"><button type="button" class="close" data-dismiss="popover"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>\
<h3 class="popover-title"></h3></div>\
<div class="row" style="margin-top: 20px;"><div class="col-sm-6">\
<div class="flatcolorpicker-filter input-group">\
<input type="text" class="form-control" placeholder="Type a color name or code to filter" />\
<span class="input-group-btn">\
 <button class="btn btn-default" type="button"><i class="cux abb-cux-close cux-16"></i></button>\
</span>\
</div>\
</div><div class="col-sm-5 col-sm-offset-1">\
<div class="btn-group btn-group-justified flatcolorpicker-display-filter">\
<div class="btn-group"><button class="btn btn-default-toggle active">HEX</button></div>\
<div class="btn-group"><button class="btn btn-default-toggle">RGB</button></div>\
<div class="btn-group"><button class="btn btn-default-toggle">Name</button></div>\
<div class="btn-group"><button class="btn btn-default-toggle">None</button></div>\
</div>\
</div></div>\
<div class="row" style="margin-top:20px; margin-bottom: 20px;"><div class="col-sm-12">\
<div class="popover-content flatcolorpicker-content" style="padding:0"></div>\
</div>'
    })


    // NOTE: FlatColorPicker EXTENDS Popover
    // ================================

    FlatColorPicker.prototype = $.extend({}, $.fn.popover.Constructor.prototype)

    FlatColorPicker.prototype.constructor = FlatColorPicker

    FlatColorPicker.prototype.getDefaults = function () {
        return FlatColorPicker.DEFAULTS
    }

    FlatColorPicker.prototype.setContent = function () {
        var $tip = this.tip()
        var title = this.getTitle()
        var content = this.getContent()

        $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
        $tip.find('.popover-content').children().detach().end()['html'](content)

        $tip.removeClass('fade top bottom left right in')

        // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
        // this manually by checking the contents.
        if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();

        this.formatContent();
        this.insertColor();
        this.filter();
        this.filterLabel();
        this.Close();
    }

    FlatColorPicker.prototype.getContent = function () {
        var o = this.options,
            c = this.c();
        return '<div class="' + c + '-item"><div class="' + c + '-hex">' + o.colors.split(',').join('</div></div><div class="' + c + '-item"><div class="' + c + '-hex">').toLowerCase() + '</div></div>';
    }

    FlatColorPicker.prototype.close = function () {
        return this.tip().find('.close');
    }

    FlatColorPicker.prototype.formatContent = function () {
        var c = this.c(),
            tip = this.tip(),
            col = tip.find('.' + c + '-item'),
            hex = '';

        col.each(function () {
            hex = '#' + $(this).find('.' + c + '-hex').text();
            $(this).css({
                backgroundColor: hex,
                'color': (Math.round($.xcolor.distance(hex, '#FFF')) > 250) ? '#FFF' : '#666'
            }).append('<div class="' + c + '-rgb">' + $.xcolor.test(hex).getCSS().replace(/rgb\(|\)/g, '') + '</div><div class="' + c + '-name">' + $.xcolor.test(hex).getName() + '</div>');
        });
    }

    FlatColorPicker.prototype.insertColor = function () {
        var c = this.c(),
            tip = this.tip(),
            inp = this.$element,
            rec = tip.find('.' + c + '-recent'),
            hex = '';
        tip.on('click', '.' + c + '-item', function (e) {

            hex = $(this).find('.' + c + '-hex').text();
            inp.val('#' + hex.toUpperCase()).change();

            rec.find("." + c + "-item:contains('" + hex + "')").remove();

            if (rec.find('.' + c + '-item').length > 9) {
                rec.find('.' + c + '-item').last().remove();
            }
            rec.prepend($(this).wrapAll('<div></div>').parent().html());
            e.preventDefault();
        });
    }

    FlatColorPicker.prototype.filter = function () {
        var c = this.c(),
            tip = this.tip();

        tip.on('change keyup keydown', '.' + c + '-filter input', function () {
            tip.find('.' + c + '-content .' + c + '-item').hide();
            tip.find('.' + c + '-content .' + c + '-item:contains("' + $(this).val().replace('#', '').toLowerCase() + '")').show();
        });

        tip.on('click', '.' + c + '-filter .btn', function (e) {
            $('.' + c + '-filter input').val('').change();
            e.preventDefault();
        });
    }

    FlatColorPicker.prototype.filterLabel = function () {
        var c = this.c(),
            tip = this.tip();

        tip.find('.' + c + '-item > div').hide();
        tip.find('.' + c + '-item .' + c + '-' + tip.find('.' + c + '-display-filter .active').text().toLowerCase()).show();

        tip.on('click', '.' + c + '-display-filter .btn', function (e) {
            tip.find('.' + c + '-item > div').hide();
            tip.find('.' + c + '-item .' + c + '-' + $(this).text().toLowerCase()).show();
            $(this).parents('.' + c + '-display-filter').find('.btn').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
    }

    FlatColorPicker.prototype.Close = function () {
        var c = this.c(),
            tip = this.tip();
        tip.find('.close').click(function () {
            $('.' + c).flatcolorpicker('hide');
        });
    }


    FlatColorPicker.prototype.c = function () {
        return 'flatcolorpicker';
    }


    // FlatColorPicker PLUGIN DEFINITION
    // =========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.flatcolorpicker')
            var options = typeof option == 'object' && option
            var selector = options && options.selector

            if (!data && option == 'destroy') return
            if (selector) {
                if (!data) $this.data('bs.flatcolorpicker', (data = {}))
                if (!data[selector]) data[selector] = new FlatColorPicker(this, options)
            } else {
                if (!data) $this.data('bs.flatcolorpicker', (data = new FlatColorPicker(this, options)))
            }
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.flatcolorpicker

    $.fn.flatcolorpicker = Plugin
    $.fn.flatcolorpicker.Constructor = FlatColorPicker


    // POPOVER NO CONFLICT
    // ===================

    $.fn.flatcolorpicker.noConflict = function () {
        $.fn.flatcolorpicker = old
        return this
    }

}(jQuery);