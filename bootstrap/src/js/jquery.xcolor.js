
// http://www.xarg.org/project/jquery-color-plugin-xcolor/
// http://www.xarg.org/project/jquery-color-plugin-xcolor/
// Copyright (c) 2010, Robert Eisele (robert@xarg.org)
// Dual licensed under the MIT or GPL Version 2 licenses.
(function (h, k) {
    function e(a) {
        function d(a, b) {
            var d;
            k !== a && (a = parseFloat(a));
            if (k === b) d = b = 255; else if (1 === b) {
                if (k === a || 1 === a)return 1;
                b = 100;
                d = 1
            } else d = b;
            return isNaN(a) || 0 >= a ? 0 : b < a ? d : 1 > a || 1 === b ? 1 === d ? a : a * d | 0 : a * d / b
        }

        function b(a, b, c) {
            function e(a, b, d) {
                d = ++d % 1;
                return 1 > 6 * d ? a + 6 * (b - a) * d : 1 > 2 * d ? b : 2 > 3 * d ? a + (b - a) * (4 - 6 * d) : a
            }

            a = d(a, 360) / 360;
            b = d(b, 1);
            c = d(c, 1);
            if (0 === b)return c = Math.round(255 * c), [c, c, c];
            b = 0.5 > c ? c + c * b : c + b - c * b;
            c = c + c - b;
            return [Math.round(255 * e(c, b, a + 1 / 3)), Math.round(255 * e(c, b, a)), Math.round(255 * e(c,
                    b, a - 1 / 3))]
        }

        function c(a, b, c) {
            a = d(a, 360) / 60;
            b = d(b, 1);
            c = d(c, 1);
            var e = a | 0, n = a - e;
            a = Math.round(255 * c * (1 - b));
            var l = Math.round(255 * c * (1 - b * n));
            b = Math.round(255 * c * (1 - b * (1 - n)));
            c = Math.round(255 * c);
            switch (e) {
                case 1:
                    return [l, c, a];
                case 2:
                    return [a, c, b];
                case 3:
                    return [a, l, c];
                case 4:
                    return [b, a, c];
                case 5:
                    return [c, a, l]
            }
            return [c, b, a]
        }

        this.setColor = function (a) {
            this.c = !0;
            if ("number" === typeof a) this.a = (a >> 24 & 255) / 255, this.r = a >> 16 & 255, this.g = a >> 8 & 255, this.b = a & 255; else {
                for (; "object" === typeof a;) {
                    if (0 in a && 1 in a && 2 in a) {
                        this.a =
                            d(a[3], 1);
                        this.r = d(a[0]);
                        this.g = d(a[1]);
                        this.b = d(a[2]);
                        return
                    }
                    if ("r" in a && "g" in a && "b" in a) {
                        this.a = d(a.a, 1);
                        this.r = d(a.r);
                        this.g = d(a.g);
                        this.b = d(a.b);
                        return
                    }
                    if ("h" in a && "s" in a) {
                        var f;
                        if ("l" in a) f = b(a.h, a.s, a.l); else if ("v" in a) f = c(a.h, a.s, a.v); else if ("b" in a) f = c(a.h, a.s, a.b); else break;
                        this.a = d(a.a, 1);
                        this.r = f[0];
                        this.g = f[1];
                        this.b = f[2];
                        return
                    }
                    break
                }
                if ("string" === typeof a) {
                    a = a.toLowerCase().replace(/[^a-z0-9,.()#%]/g, "");
                    if ("transparent" === a) {
                        this.a = this.r = this.g = this.b = 0;
                        return
                    }
                    if ("rand" === a) {
                        a =
                            16777215 * Math.random() | 0;
                        this.a = 1;
                        this.r = a >> 16 & 255;
                        this.g = a >> 8 & 255;
                        this.b = a & 255;
                        return
                    }
                    k !== q[a] && (a = "#" + q[a]);
                    if (f = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/.exec(a)) {
                        this.a = 1;
                        this.r = parseInt(f[1], 16);
                        this.g = parseInt(f[2], 16);
                        this.b = parseInt(f[3], 16);
                        return
                    }
                    if (f = /^#?([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(a)) {
                        this.a = 1;
                        this.r = parseInt(f[1] + f[1], 16);
                        this.g = parseInt(f[2] + f[2], 16);
                        this.b = parseInt(f[3] + f[3], 16);
                        return
                    }
                    if (f = /^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?\)$/.exec(a)) {
                        this.a = d(f[5],
                            1);
                        this.r = d(f[1]);
                        this.g = d(f[2]);
                        this.b = d(f[3]);
                        return
                    }
                    if (f = /^rgba?\(([0-9.]+\%),([0-9.]+\%),([0-9.]+\%)(,([0-9.]+)\%?)?\)$/.exec(a)) {
                        this.a = d(f[5], 1);
                        this.r = Math.round(2.55 * d(f[1], 100));
                        this.g = Math.round(2.55 * d(f[2], 100));
                        this.b = Math.round(2.55 * d(f[3], 100));
                        return
                    }
                    if (f = /^hs([bvl])a?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?\)$/.exec(a)) {
                        a = ("l" === f[1] ? b : c)(parseInt(f[2], 10), parseInt(f[3], 10), parseInt(f[4], 10));
                        this.a = d(f[6], 1);
                        this.r = a[0];
                        this.g = a[1];
                        this.b = a[2];
                        return
                    }
                    if (f = /^(\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?$/.exec(a)) {
                        this.a =
                            d(f[5], 1);
                        this.r = d(f[1]);
                        this.g = d(f[2]);
                        this.b = d(f[3]);
                        return
                    }
                }
                this.c = !1
            }
        };
        this.getColor = function (a) {
            if (k !== a)switch (a.toLowerCase()) {
                case "rgb":
                    return this.getRGB();
                case "hsv":
                case "hsb":
                    return this.getHSV();
                case "hsl":
                    return this.getHSL();
                case "int":
                    return this.getInt();
                case "array":
                    return this.getArray();
                case "fraction":
                    return this.getFraction();
                case "css":
                case "style":
                    return this.getCSS();
                case "name":
                    return this.getName()
            }
            return this.getHex()
        };
        this.getRGB = function () {
            return this.c ? {
                    r: this.r, g: this.g,
                    b: this.b, a: this.a
                } : null
        };
        this.getCSS = function () {
            return this.c ? 0 === this.a ? "transparent" : 1 === this.a ? "rgb(" + this.r + "," + this.g + "," + this.b + ")" : r(this.r, this.g, this.b, this.a) : null
        };
        this.getArray = function () {
            return this.c ? [this.r, this.g, this.b, 100 * this.a | 0] : null
        };
        this.getName = function () {
            if (this.c) {
                var a = null, b, d = q, c = this.getHSL(), n;
                for (n in d) {
                    var l = (new e(d[n])).getHSL(), l = Math.sqrt(0.5 * (c.h - l.h) * (c.h - l.h) + 0.5 * (c.s - l.s) * (c.s - l.s) + (c.l - l.l) * (c.l - l.l));
                    if (null === a || l < a) a = l, b = n
                }
                return b
            }
            return null
        };
        this.getFraction =
            function () {
                return this.c ? {r: this.r / 255, g: this.g / 255, b: this.b / 255, a: this.a} : null
            };
        this.getHSL = function () {
            if (this.c) {
                var a = this.r / 255, b = this.g / 255, d = this.b / 255, c = Math.min(a, b, d), e = Math.max(a, b, d), l = e - c, h = (e + c) / 2;
                0 === l ? c = a = 0 : (a = a === e ? (b - d) / l : b === e ? 2 + (d - a) / l : 4 + (a - b) / l, c = l / (0.5 > h ? e + c : 2 - e - c));
                return {h: Math.round((6 + a) % 6 * 60), s: Math.round(100 * c), l: Math.round(100 * h), a: this.a}
            }
            return null
        };
        this.getHSV = function () {
            if (this.c) {
                var a = this.r / 255, b = this.g / 255, c = this.b / 255, d = Math.min(a, b, c), e = Math.max(a, b, c), d = e - d;
                return {
                    h: Math.round((6 + (0 === d ? 0 : a === e ? (b - c) / d : b === e ? 2 + (c - a) / d : 4 + (a - b) / d)) % 6 * 60),
                    s: Math.round(100 * (0 === e ? 0 : d / e)),
                    v: Math.round(100 * e),
                    a: this.a
                }
            }
            return null
        };
        this.getHex = function () {
            return this.c ? "#" + "0123456789abcdef".charAt(this.r >> 4) + "0123456789abcdef".charAt(this.r & 15) + "0123456789abcdef".charAt(this.g >> 4) + "0123456789abcdef".charAt(this.g & 15) + "0123456789abcdef".charAt(this.b >> 4) + "0123456789abcdef".charAt(this.b & 15) : null
        };
        this.getInt = function (a) {
            return this.c ? k !== a ? (100 * this.a | 0) << 24 ^ this.r << 16 ^ this.g <<
                    8 ^ this.b : (this.r << 16 ^ this.g << 8 ^ this.b) & 16777215 : null
        };
        this.toString = function () {
            return this.getHex()
        };
        this.setColor(a)
    }

    function s(a, d) {
        var b = "";
        do if (b = h.css(a, d), "" !== b && "transparent" !== b && "rgba(0, 0, 0, 0)" !== b || h.nodeName(a, "body"))break; while (a = a.parentNode);
        "" === b && (b = h.support.rgba ? "transparent" : "backgroundColor" === d ? "white" : "black");
        return new e(b)
    }

    var q = {
        // ABB Grey scale
        "abb-grey-0": "#000000",
        "abb-grey-10": "#0A0A0A",
        "abb-grey-15": "#0F0F0F",
        "abb-grey-20": "#141414",
        "abb-grey-25": "#191919",
        "abb-grey-30": "#1E1E1E",
        "abb-grey-36": "#242424",
        "abb-grey-40": "#282828",
        "abb-grey-45": "#2D2D2D",
        "abb-grey-50": "#323232",
        "abb-grey-55": "#373737",
        "abb-grey-60": "#3C3C3C",
        "abb-grey-65": "#414141",
        "abb-grey-70": "#464646",
        "abb-grey-80": "#505050",
        "abb-grey-90": "#5A5A5A",
        "abb-grey-100": "#646464",
        "abb-grey-110": "#6E6E6E",
        "abb-grey-120": "#787878",
        "abb-grey-130": "#828282",
        "abb-grey-140": "#8C8C8C",
        "abb-grey-150": "#969696",
        "abb-grey-160": "#A0A0A0",
        "abb-grey-170": "#AAAAAA",
        "abb-grey-180": "#B4B4B4",
        "abb-grey-190": "#BEBEBE",
        "abb-grey-195": "#C3C3C3",
        "abb-grey-200": "#C8C8C8",
        "abb-grey-205": "#CDCDCD",
        "abb-grey-210": "#D2D2D2",
        "abb-grey-215": "#D7D7D7",
        "abb-grey-220": "#DCDCDC",
        "abb-grey-225": "#E1E1E1",
        "abb-grey-230": "#E6E6E6",
        "abb-grey-235": "#EBEBEB",
        "abb-grey-240": "#F0F0F0",
        "abb-grey-245": "#F5F5F5",
        "abb-grey-250": "#FAFAFA",
        "abb-grey-255": "#FFFFFF",

        // ABB Blue scale - Backgrounds

        "abb-blue-1": "#143F61",
        "abb-blue-2": "#17486E",
        "abb-blue-3": "#194D76",
        "abb-blue-4": "#1B5380",
        "abb-blue-5": "#1C5785",
        "abb-blue-6": "#1E5B8F",
        "abb-blue-7": "#206397",
        "abb-blue-8": "#2269A1",
        "abb-blue-9": "#236EA8",
        "abb-blue-10": "#267BBD",
        "abb-blue-11": "#0088CC",
        "abb-blue-12": "#0096E0",

        // ABB Blue scale - Accents

        "abb-blue-13": "#0AAEFF",
        "abb-blue-14": "#47C2FF",
        "abb-blue-15": "#70CFFF",
        "abb-blue-16": "#99DDFF",
        "abb-blue-17": "#C2EBFF",
        "abb-blue-18": "#D6F1FF",

        // ABB Data visualization colors

        "abb-data-purple-1": "#BAACDD",
        "abb-data-purple-2": "#A288CE",
        "abb-data-purple-3": "#8664BF",
        "abb-data-purple-4": "#6C46AA",
        "abb-data-purple-5": "#553786",
        "abb-data-purple-6": "#462D6E",

        "abb-data-pink-1": "#DAA5CE",
        "abb-data-pink-2": "#C675B3",
        "abb-data-pink-3": "#B7519F",
        "abb-data-pink-4": "#973E82",
        "abb-data-pink-5": "#732F63",
        "abb-data-pink-6": "#5B254E",

        "abb-data-peach-1": "#EBCAB9",
        "abb-data-peach-2": "#DFAC92",
        "abb-data-peach-3": "#D48E6A",
        "abb-data-peach-4": "#BE704C",
        "abb-data-peach-5": "#9B5237",
        "abb-data-peach-6": "#804425",

        "abb-data-turquoise-1": "#B9EEF0",
        "abb-data-turquoise-2": "#90E4E6",
        "abb-data-turquoise-3": "#58D7DA",
        "abb-data-turquoise-4": "#28B1B5",
        "abb-data-turquoise-5": "#1F888B",
        "abb-data-turquoise-6": "#196D6F",

        "abb-data-asphalt-1": "#DEE4E6",
        "abb-data-asphalt-2": "#C2CDCF",
        "abb-data-asphalt-3": "#A5B6B9",
        "abb-data-asphalt-4": "#889FA3",
        "abb-data-asphalt-5": "#6D878C",
        "abb-data-asphalt-6": "#566B6F",

        "abb-data-green-1": "#96E8C6",
        "abb-data-green-2": "#68DFAA",
        "abb-data-green-3": "#21BE89",
        "abb-data-green-4": "#049669",
        "abb-data-green-5": "#00704B",
        "abb-data-green-6": "#015637",

        "abb-data-blue-1": "#99DDFF",
        "abb-data-blue-2": "#70CFFF",
        "abb-data-blue-3": "#0AAEFF",
        "abb-data-blue-4": "#0088CC",
        "abb-data-blue-5": "#236EA8",
        "abb-data-blue-6": "#1C5785",

        // ABB Critical colors

        "abb-critical-yellow": "#FFD800",
        "abb-critical-orange": "#FF7300",
        "abb-critical-red": "#F03040",
        "abb-critical-magenta": "#CB2BD5",
        "abb-critical-cyan": "#14F0F0",
        "abb-critical-blue": "#0052FF",


        // ABB Branding Colors -----------------------------------------------------------------------------------------------
        // Comments or questions": Branding team (lena.sattler@ch.abb.com)

        // Branding Base colors

        "abb-brand-red-1": "#ff000f",
        "abb-brand-red-2": "#e6000d",
        "abb-brand-black": "#000000",
        "abb-brand-grey-1": "#262626",
        "abb-brand-grey-2": "#6e6e6e",
        "abb-brand-grey-3": "#a9a9a9",
        "abb-brand-grey-4": "#d2d2d2",
        "abb-brand-grey-5": "#f0f0f0",
        "abb-brand-grey-6": "#fafafa",

        // Branding Functional colors

        "abb-brand-functional-blue": "#004c97",
        "abb-brand-functional-green": "#007a33",
        "abb-brand-functional-yellow": "#ffd100",
        "abb-brand-functional-red-grey": "#817275",
        "abb-brand-functional-green-grey": "#6b7173",
        "abb-brand-functional-blue-grey": "#5b6f80",
        "abb-brand-functional-violet-grey": "#78838e"
    }, r;
    h.each("color backgroundColor borderColor borderTopColor borderBottomColor borderLeftColor borderRightColor outlineColor".split(" "), function (a, d) {
        h.cssHooks[d] = {
            set: function (a, c) {
                a.style[d] = (new e(c)).getCSS()
            }
        };
        h.fx.step[d] = function (a) {
            if (k === a.xinit) {
                if ("string" === typeof a.end && -1 !== a.end.indexOf(";")) {
                    var c, g = a.end.split(";");
                    if (2 < g.length) {
                        for (c in g)g[c] = -1 === g[c].indexOf("native") ? new e(g[c]) : s(a.elem, d);
                        a.start = null;
                        a.end =
                            g
                    } else a.start = new e(g[0]), a.end = new e(g[1])
                } else a.start = s(a.elem, d), a.end = new e(a.end);
                a.xinit = 1
            }
            c = a.start;
            var g = a.end, f = a.pos;
            if (null === c) {
                var h = f * (g.length - 1), f = 1 > f ? h | 0 : g.length - 2;
                c = g[f];
                g = g[f + 1];
                f = h - f
            }
            a.elem.style[d] = r(c.r + f * (g.r - c.r) | 0, c.g + f * (g.g - c.g) | 0, c.b + f * (g.b - c.b) | 0, c.a + f * (g.a - c.a))
        }
    });
    h(function () {
        var a = document.createElement("div").style;
        r = function (a, b, c, e) {
            return "rgba(" + a + "," + b + "," + c + "," + e + ")"
        };
        a.cssText = "background-color:rgba(1,1,1,.5)";
        (h.support.rgba = -1 < a.backgroundColor.indexOf("rgba")) ||
        (r = function (a, b, c) {
            return "rgb(" + a + "," + b + "," + c + ")"
        })
    });
    h.xcolor = new function () {
        this.test = function (a) {
            a = new e(a);
            return a.c ? a : null
        };
        this.red = function (a) {
            a = new e(a);
            return a.c ? (a.g = 255, a.b = 255, a) : null
        };
        this.blue = function (a) {
            a = new e(a);
            return a.c ? (a.r = 255, a.g = 255, a) : null
        };
        this.green = function (a) {
            a = new e(a);
            return a.c ? (a.r = 255, a.b = 255, a) : null
        };
        this.sepia = function (a) {
            a = new e(a);
            if (a.c) {
                var d = a.r, b = a.g, c = a.b;
                a.r = Math.round(0.393 * d + 0.769 * b + 0.189 * c);
                a.g = Math.round(0.349 * d + 0.686 * b + 0.168 * c);
                a.b = Math.round(0.272 *
                    d + 0.534 * b + 0.131 * c);
                return a
            }
            return null
        };
        this.random = function () {
            return new e([255 * Math.random() | 0, 255 * Math.random() | 0, 255 * Math.random() | 0])
        };
        this.inverse = function (a) {
            a = new e(a);
            return a.c ? (a.r ^= 255, a.g ^= 255, a.b ^= 255, a) : null
        };
        this.opacity = function (a, d, b) {
            a = new e(a);
            d = new e(d);
            return a.c & d.c ? (1 < b && (b /= 100), b = Math.max(b - 1 + d.a, 0), a.r = Math.round((d.r - a.r) * b + a.r), a.g = Math.round((d.g - a.g) * b + a.g), a.b = Math.round((d.b - a.b) * b + a.b), a) : null
        };
        this.greyfilter = function (a, d) {
            var b, c = new e(a);
            if (c.c) {
                switch (d) {
                    case 1:
                        b =
                            0.35 + 13 * (c.r + c.g + c.b) / 60;
                        break;
                    case 2:
                        b = (13 * (c.r + c.g + c.b) + 5355) / 60;
                        break;
                    default:
                        b = 0.3 * c.r + 0.59 * c.g + 0.11 * c.b
                }
                c.r = c.g = c.b = Math.min(b | 0, 255);
                return c
            }
            return null
        };
        this.webround = function (a) {
            a = new e(a);
            return a.c ? (255 < (a.r += 51 - a.r % 51) && (a.r = 255), 255 < (a.g += 51 - a.g % 51) && (a.g = 255), 255 < (a.b += 51 - a.b % 51) && (a.b = 255), a) : null
        };
        this.distance = function (a, d) {
            var b = new e(a), c = new e(d);
            return b.c & c.c ? Math.sqrt(3 * (c.r - b.r) * (c.r - b.r) + 4 * (c.g - b.g) * (c.g - b.g) + 2 * (c.b - b.b) * (c.b - b.b)) : null
        };
        this.readable = function (a, d, b) {
            d = new e(d);
            a = new e(a);
            b = b || 10;
            return d.c & a.c ? (a = 0.299 * a.r + 0.587 * a.g + 0.114 * a.b - 0.299 * d.r - 0.587 * d.g - 0.114 * d.b, !(a < 1.5 + 141.162 * Math.pow(0.975, b) && a > -0.5 - 154.709 * Math.pow(0.99, b))) : null
        };
        this.combine = function (a, d) {
            var b = new e(a), c = new e(d);
            return b.c & c.c ? (b.r ^= c.r, b.g ^= c.g, b.b ^= c.b, b) : null
        };
        this.breed = function (a, d) {
            var b = new e(a), c = new e(d), g = 0, f = 6;
            if (b.c & c.c) {
                for (; f--;)0.5 > Math.random() && (g |= 15 << (f << 2));
                b.r = b.r & g >> 16 & 255 | c.r & (g >> 16 & 255 ^ 255);
                b.g = b.g & g >> 8 & 255 | c.g & (g >> 8 & 255 ^ 255);
                b.b = b.b & g >> 0 & 255 | c.b & (g >> 0 & 255 ^ 255);
                return b
            }
            return null
        };
        this.additive = function (a, d) {
            var b = new e(a), c = new e(d);
            return b.c & c.c ? (255 < (b.r += c.r) && (b.r = 255), 255 < (b.g += c.g) && (b.g = 255), 255 < (b.b += c.b) && (b.b = 255), b) : null
        };
        this.subtractive = function (a, d) {
            var b = new e(a), c = new e(d);
            return b.c & c.c ? (0 > (b.r += c.r - 255) && (b.r = 0), 0 > (b.g += c.g - 255) && (b.g = 0), 0 > (b.b += c.b - 255) && (b.b = 0), b) : null
        };
        this.subtract = function (a, d) {
            var b = new e(a), c = new e(d);
            return b.c & c.c ? (0 > (b.r -= c.r) && (b.r = 0), 0 > (b.g -= c.g) && (b.g = 0), 0 > (b.b -= c.b) && (b.b = 0), b) : null
        };
        this.multiply = function (a,
                                  d) {
            var b = new e(a), c = new e(d);
            return b.c & c.c ? (b.r = b.r / 255 * c.r | 0, b.g = b.g / 255 * c.g | 0, b.b = b.b / 255 * c.b | 0, b) : null
        };
        this.average = function (a, d) {
            var b = new e(a), c = new e(d);
            return b.c & c.c ? (b.r = b.r + c.r >> 1, b.g = b.g + c.g >> 1, b.b = b.b + c.b >> 1, b) : null
        };
        this.triad = function (a) {
            a = new e(a);
            return a.c ? [a, new e([a.b, a.r, a.g]), new e([a.g, a.b, a.r])] : null
        };
        this.tetrad = function (a) {
            a = new e(a);
            return a.c ? [a, new e([a.b, a.r, a.b]), new e([a.b, a.g, a.r]), new e([a.r, a.b, a.r])] : null
        };
        this.gradientlevel = function (a, d, b, c) {
            k === c && (c = 1);
            if (b >
                c)return null;
            a = new e(a);
            d = new e(d);
            return a.c & d.c ? (a.r = a.r + (d.r - a.r) / c * b | 0, a.g = a.g + (d.g - a.g) / c * b | 0, a.b = a.b + (d.b - a.b) / c * b | 0, a) : null
        };
        this.gradientarray = function (a, d, b) {
            if (d > b || !a.length)return null;
            if (1 == a.length)return new e(a[0]);
            var c = d * (a.length - 1) / (b + 1) | 0;
            b = b / (a.length - 1);
            return h.xcolor.gradientlevel(a[c], a[c + 1], d - c * b, b)
        };
        this.nearestname = function (a) {
            a = new e(a);
            return a.c ? a.getName() : null
        };
        this.darken = function (a, d, b) {
            if (k === d) d = 1; else if (0 > d)return this.lighten(a, -d, b);
            k === b && (b = 32);
            a = new e(a);
            return a.c ? (0 > (a.r -= b * d) && (a.r = 0), 0 > (a.g -= b * d) && (a.g = 0), 0 > (a.b -= b * d) && (a.b = 0), a) : null
        };
        this.lighten = function (a, d, b) {
            if (k === d) d = 1; else if (0 > d)return this.darken(a, -d, b);
            k === b && (b = 32);
            a = new e(a);
            return a.c ? (255 < (a.r += b * d) && (a.r = 255), 255 < (a.g += b * d) && (a.g = 255), 255 < (a.b += b * d) && (a.b = 255), a) : null
        };
        this.analogous = function (a, d, b) {
            k === d && (d = 8);
            k === b && (b = 30);
            var c = new e(a);
            if (c.c) {
                a = c.getHSV();
                b = 360 / b;
                c = [c];
                for (a.h = (a.h - (b * d >> 1) + 720) % 360; --d;)a.h += b, a.h %= 360, c.push(new e(a));
                return c
            }
            return null
        };
        this.complementary =
            function (a) {
                a = new e(a);
                return a.c ? (a = a.getHSL(), a.h = (a.h + 180) % 360, new e(a)) : null
            };
        this.splitcomplement = function (a) {
            var d = new e(a);
            return d.c ? (a = d.getHSV(), d = [d], a.h += 72, a.h %= 360, d.push(new e(a)), a.h += 144, a.h %= 360, d.push(new e(a)), d) : null
        };
        this.monochromatic = function (a, d) {
            k === d && (d = 6);
            var b = new e(a);
            if (b.c) {
                for (var c = b.getHSV(), b = [b]; --d;)c.v += 20, c.v %= 100, b.push(new e(c));
                return b
            }
            return null
        }
    };
    h.fn.readable = function () {
        var a = this[0], d = "", b = "";
        do if ("" !== d || "transparent" !== (d = h.css(a, "color")) && "rgba(0, 0, 0, 0)" !==
            d || (d = ""), "" !== b || "transparent" !== (b = h.css(a, "backgroundColor")) && "rgba(0, 0, 0, 0)" !== b || (b = ""), "" !== d && "" !== b || h.nodeName(a, "body"))break; while (a = a.parentNode);
        "" === d && (d = "black");
        "" === b && (b = "white");
        return h.xcolor.readable(b, d)
    };
    h.fn.colorize = function (a, d, b) {
        var c = {
            gradient: function (a, b) {
                return a / b
            }, flip: function (a, b, c, d) {
                return " " === d ? c : !c
            }, pillow: function (a, b) {
                a *= 2;
                return a <= b ? a / b : 2 - a / b
            }
        };
        if ("function" !== typeof b) {
            if (void 0 === c[b])return;
            b = c[b]
        }
        a = new e(a);
        d = new e(d);
        this.each(function () {
            var c =
                this.childNodes, e = 0, h = 0;
            if (a.c & d.c) {
                for (var k = c.length; k--; e += c[k].textContent.length);
                (function l(c) {
                    var g = 0, k;
                    if (3 === c.nodeType) {
                        var m = a, t = d, q = e, u, v, p = 0, w, s = b;
                        k = c.nodeValue.length;
                        v = document.createElement("span");
                        for (g = 0; g < k; ++g)u = document.createElement("span"), w = c.nodeValue.charAt(g), p = s(h, q, p, w), u.style.color = r(m.r + p * (t.r - m.r) | 0, m.g + p * (t.g - m.g) | 0, m.b + p * (t.b - m.b) | 0, m.a + p * (t.a - m.a)), u.appendChild(document.createTextNode(w)), v.appendChild(u), ++h;
                        c.parentNode.replaceChild(v, c)
                    } else for (k = c.childNodes.length; g <
                    k; ++g)l(c.childNodes[g])
                })(this)
            }
        })
    }
})(jQuery);
