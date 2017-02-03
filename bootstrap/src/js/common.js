/*!
 * jQuery JavaScript Library v2.1.3 | Copyright (c) 2005, 2014 jQuery Foundation, Inc. and other contributors | MIT license | http://jquery.com
 * Select2 v4.0.0-beta.3 | Copyright (c) 2012-2015 Kevin Brown, Igor Vaynberg, and Select2 contributors | MIT license | http://select2.github.io
 * Bootstrap Colorpicker v2.0 | Copyright (c) 2012 Stefan Petre | Apache license v2 | http://mjolnic.com/bootstrap-colorpicker
 * noUiSlider v7.0.10 | Copyright (c) Leon Gersen | WTFPL | http://refreshless.com/nouislider
 * pnotify v2.0.1 | Copyright (c) SciActive.com | GPL LGPL and MPL | https://github.com/sciactive/pnotify
 * jquery.pulsate v1.0.0 | by Kilian Valkhof | MIT | https://github.com/Kilian/jQuery.pulsate
 * Highcharts JS v4.1.4 | Copyright (c) 2009-2014 Torstein Honsi | www.highcharts.com/license | http://www.highcharts.com
/* jquery.pjaxr v1.2.0 | Copyright (c) 2013-2015 Stephan Gro� | MIT license | http://www.minddust.com
 * http://stackoverflow.com/a/1186309/268125
 * flatuicolors.com color definitions (2016-07-25)
 */
function createCookie(t, e, i) {
    "use strict";
    var n;
    if (i) {
        var o = new Date;
        o.setTime(o.getTime() + 24 * i * 60 * 60 * 1e3), n = "; expires=" + o.toGMTString()
    } else n = "";
    document.cookie = t + "=" + e + n + "; path=/"
}! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = t.length,
            i = J.type(t);
        return "function" === i || J.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (J.isFunction(e)) return J.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return J.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (ae.test(e)) return J.filter(e, t, i);
            e = J.filter(e, t)
        }
        return J.grep(t, function(t) {
            return Y.call(e, t) >= 0 !== i
        })
    }

    function o(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function r(t) {
        var e = fe[t] = {};
        return J.each(t.match(de) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function s() {
        Z.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), J.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = J.expando + a.uid++
    }

    function l(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(xe, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : be.test(i) ? J.parseJSON(i) : i
                } catch (o) {}
                ye.set(t, e, i)
            } else i = void 0;
        return i
    }

    function c() {
        return !0
    }

    function h() {
        return !1
    }

    function u() {
        try {
            return Z.activeElement
        } catch (t) {}
    }

    function p(t, e) {
        return J.nodeName(t, "table") && J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function d(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function f(t) {
        var e = $e.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function g(t, e) {
        for (var i = 0, n = t.length; n > i; i++) ve.set(t[i], "globalEval", !e || ve.get(e[i], "globalEval"))
    }

    function m(t, e) {
        var i, n, o, r, s, a, l, c;
        if (1 === e.nodeType) {
            if (ve.hasData(t) && (r = ve.access(t), s = ve.set(e, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c)
                    for (i = 0, n = c[o].length; n > i; i++) J.event.add(e, o, c[o][i])
            }
            ye.hasData(t) && (a = ye.access(t), l = J.extend({}, a), ye.set(e, l))
        }
    }

    function v(t, e) {
        var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && J.nodeName(t, e) ? J.merge([t], i) : i
    }

    function y(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && Ce.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
    }

    function b(e, i) {
        var n, o = J(i.createElement(e)).appendTo(i.body),
            r = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(o[0])) ? n.display : J.css(o[0], "display");
        return o.detach(), r
    }

    function x(t) {
        var e = Z,
            i = He[t];
        return i || (i = b(t, e), "none" !== i && i || (ze = (ze || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = ze[0].contentDocument, e.write(), e.close(), i = b(t, e), ze.detach()), He[t] = i), i
    }

    function w(t, e, i) {
        var n, o, r, s, a = t.style;
        return i = i || We(t), i && (s = i.getPropertyValue(e) || i[e]), i && ("" !== s || J.contains(t.ownerDocument, t) || (s = J.style(t, e)), Be.test(s) && Fe.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function k(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function T(t, e) {
        if (e in t) return e;
        for (var i = e[0].toUpperCase() + e.slice(1), n = e, o = Ve.length; o--;)
            if (e = Ve[o] + i, e in t) return e;
        return n
    }

    function C(t, e, i) {
        var n = qe.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function S(t, e, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === i && (s += J.css(t, i + ke[r], !0, o)), n ? ("content" === i && (s -= J.css(t, "padding" + ke[r], !0, o)), "margin" !== i && (s -= J.css(t, "border" + ke[r] + "Width", !0, o))) : (s += J.css(t, "padding" + ke[r], !0, o), "padding" !== i && (s += J.css(t, "border" + ke[r] + "Width", !0, o)));
        return s
    }

    function A(t, e, i) {
        var n = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = We(t),
            s = "border-box" === J.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = w(t, e, r), (0 > o || null == o) && (o = t.style[e]), Be.test(o)) return o;
            n = s && (K.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + S(t, e, i || (s ? "border" : "content"), n, r) + "px"
    }

    function P(t, e) {
        for (var i, n, o, r = [], s = 0, a = t.length; a > s; s++) n = t[s], n.style && (r[s] = ve.get(n, "olddisplay"), i = n.style.display, e ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Te(n) && (r[s] = ve.access(n, "olddisplay", x(n.nodeName)))) : (o = Te(n), "none" === i && o || ve.set(n, "olddisplay", o ? i : J.css(n, "display"))));
        for (s = 0; a > s; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
        return t
    }

    function E(t, e, i, n, o) {
        return new E.prototype.init(t, e, i, n, o)
    }

    function L() {
        return setTimeout(function() {
            Ke = void 0
        }), Ke = J.now()
    }

    function D(t, e) {
        var i, n = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = ke[n], o["margin" + i] = o["padding" + i] = t;
        return e && (o.opacity = o.width = t), o
    }

    function O(t, e, i) {
        for (var n, o = (ii[e] || []).concat(ii["*"]), r = 0, s = o.length; s > r; r++)
            if (n = o[r].call(i, e, t)) return n
    }

    function _(t, e, i) {
        var n, o, r, s, a, l, c, h, u = this,
            p = {},
            d = t.style,
            f = t.nodeType && Te(t),
            g = ve.get(t, "fxshow");
        i.queue || (a = J._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, J.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], c = J.css(t, "display"), h = "none" === c ? ve.get(t, "olddisplay") || x(t.nodeName) : c, "inline" === h && "none" === J.css(t, "float") && (d.display = "inline-block")), i.overflow && (d.overflow = "hidden", u.always(function() {
            d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (o = e[n], Qe.exec(o)) {
                if (delete e[n], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[n]) continue;
                    f = !0
                }
                p[n] = g && g[n] || J.style(t, n)
            } else c = void 0;
        if (J.isEmptyObject(p)) "inline" === ("none" === c ? x(t.nodeName) : c) && (d.display = c);
        else {
            g ? "hidden" in g && (f = g.hidden) : g = ve.access(t, "fxshow", {}), r && (g.hidden = !f), f ? J(t).show() : u.done(function() {
                J(t).hide()
            }), u.done(function() {
                var e;
                ve.remove(t, "fxshow");
                for (e in p) J.style(t, e, p[e])
            });
            for (n in p) s = O(f ? g[n] : 0, n, u), n in g || (g[n] = s.start, f && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function M(t, e) {
        var i, n, o, r, s;
        for (i in t)
            if (n = J.camelCase(i), o = e[n], r = t[i], J.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), s = J.cssHooks[n], s && "expand" in s) {
                r = s.expand(r), delete t[n];
                for (i in r) i in t || (t[i] = r[i], e[i] = o)
            } else e[n] = o
    }

    function N(t, e, i) {
        var n, o, r = 0,
            s = ei.length,
            a = J.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = Ke || L(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, r = 1 - n, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                return a.notifyWith(t, [c, r, i]), 1 > r && l ? i : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: J.extend({}, e),
                opts: J.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Ke || L(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = J.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n > i; i++) c.tweens[i].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                }
            }),
            h = c.props;
        for (M(h, c.opts.specialEasing); s > r; r++)
            if (n = ei[r].call(c, t, h, c.opts)) return n;
        return J.map(h, O, c), J.isFunction(c.opts.start) && c.opts.start.call(t, c), J.fx.timer(J.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function I(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, o = 0,
                r = e.toLowerCase().match(de) || [];
            if (J.isFunction(i))
                for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function $(t, e, i, n) {
        function o(a) {
            var l;
            return r[a] = !0, J.each(t[a] || [], function(t, a) {
                var c = a(e, i, n);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            s = t === bi;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function j(t, e) {
        var i, n, o = J.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && J.extend(!0, t, n), t
    }

    function R(t, e, i) {
        for (var n, o, r, s, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (o in a)
                if (a[o] && a[o].test(n)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in i) r = l[0];
        else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
    }

    function z(t, e, i, n) {
        var o, r, s, a, l, c = {},
            h = t.dataTypes.slice();
        if (h[1])
            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (r = h.shift(); r;)
            if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = h.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = c[l + " " + r] || c["* " + r], !s)
                for (o in c)
                    if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], h.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: s ? u : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function H(t, e, i, n) {
        var o;
        if (J.isArray(e)) J.each(e, function(e, o) {
            i || Ci.test(t) ? n(t, o) : H(t + "[" + ("object" == typeof o ? e : "") + "]", o, i, n)
        });
        else if (i || "object" !== J.type(e)) n(t, e);
        else
            for (o in e) H(t + "[" + o + "]", e[o], i, n)
    }

    function F(t) {
        return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var B = [],
        W = B.slice,
        X = B.concat,
        q = B.push,
        Y = B.indexOf,
        G = {},
        U = G.toString,
        V = G.hasOwnProperty,
        K = {},
        Z = t.document,
        Q = "2.1.3",
        J = function(t, e) {
            return new J.fn.init(t, e)
        },
        te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ee = /^-ms-/,
        ie = /-([\da-z])/gi,
        ne = function(t, e) {
            return e.toUpperCase()
        };
    J.fn = J.prototype = {
        jquery: Q,
        constructor: J,
        selector: "",
        length: 0,
        toArray: function() {
            return W.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : W.call(this)
        },
        pushStack: function(t) {
            var e = J.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return J.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(J.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(W.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: q,
        sort: B.sort,
        splice: B.splice
    }, J.extend = J.fn.extend = function() {
        var t, e, i, n, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || J.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = s[e], n = t[e], s !== n && (c && n && (J.isPlainObject(n) || (o = J.isArray(n))) ? (o ? (o = !1, r = i && J.isArray(i) ? i : []) : r = i && J.isPlainObject(i) ? i : {}, s[e] = J.extend(c, r, n)) : void 0 !== n && (s[e] = n));
        return s
    }, J.extend({
        expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === J.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !J.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" !== J.type(t) || t.nodeType || J.isWindow(t) ? !1 : t.constructor && !V.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? G[U.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, i = eval;
            t = J.trim(t), t && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"), e.text = t, Z.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) {
            return t.replace(ee, "ms-").replace(ie, ne)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var o, r = 0,
                s = t.length,
                a = i(t);
            if (n) {
                if (a)
                    for (; s > r && (o = e.apply(t[r], n), o !== !1); r++);
                else
                    for (r in t)
                        if (o = e.apply(t[r], n), o === !1) break
            } else if (a)
                for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
            else
                for (r in t)
                    if (o = e.call(t[r], r, t[r]), o === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(te, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? J.merge(n, "string" == typeof t ? [t] : t) : q.call(n, t)), n
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : Y.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, o = t.length; i > n; n++) t[o++] = e[n];
            return t.length = o, t
        },
        grep: function(t, e, i) {
            for (var n, o = [], r = 0, s = t.length, a = !i; s > r; r++) n = !e(t[r], r), n !== a && o.push(t[r]);
            return o
        },
        map: function(t, e, n) {
            var o, r = 0,
                s = t.length,
                a = i(t),
                l = [];
            if (a)
                for (; s > r; r++) o = e(t[r], r, n), null != o && l.push(o);
            else
                for (r in t) o = e(t[r], r, n), null != o && l.push(o);
            return X.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, o;
            return "string" == typeof e && (i = t[e], e = t, t = i), J.isFunction(t) ? (n = W.call(arguments, 2), o = function() {
                return t.apply(e || this, n.concat(W.call(arguments)))
            }, o.guid = t.guid = t.guid || J.guid++, o) : void 0
        },
        now: Date.now,
        support: K
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        G["[object " + e + "]"] = e.toLowerCase()
    });
    var oe = function(t) {
        function e(t, e, i, n) {
            var o, r, s, a, l, c, u, d, f, g;
            if ((e ? e.ownerDocument || e : H) !== _ && O(e), e = e || _, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
            if (!n && N) {
                if (11 !== a && (o = ye.exec(t)))
                    if (s = o[1]) {
                        if (9 === a) {
                            if (r = e.getElementById(s), !r || !r.parentNode) return i;
                            if (r.id === s) return i.push(r), i
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && R(e, r) && r.id === s) return i.push(r), i
                    } else {
                        if (o[2]) return Q.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = o[3]) && w.getElementsByClassName) return Q.apply(i, e.getElementsByClassName(s)), i
                    }
                if (w.qsa && (!I || !I.test(t))) {
                    if (d = u = z, f = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (c = S(t), (u = e.getAttribute("id")) ? d = u.replace(xe, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + p(c[l]);
                        f = be.test(t) && h(e.parentNode) || e, g = c.join(",")
                    }
                    if (g) try {
                        return Q.apply(i, f.querySelectorAll(g)), i
                    } catch (m) {} finally {
                        u || e.removeAttribute("id")
                    }
                }
            }
            return P(t.replace(le, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > k.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[z] = !0, t
        }

        function o(t) {
            var e = _.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) k.attrHandle[i[n]] = e
        }

        function s(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function c(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function h(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function u() {}

        function p(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function d(t, e, i) {
            var n = e.dir,
                o = i && "parentNode" === n,
                r = B++;
            return e.first ? function(e, i, r) {
                for (; e = e[n];)
                    if (1 === e.nodeType || o) return t(e, i, r)
            } : function(e, i, s) {
                var a, l, c = [F, r];
                if (s) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || o) && t(e, i, s)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || o) {
                            if (l = e[z] || (e[z] = {}), (a = l[n]) && a[0] === F && a[1] === r) return c[2] = a[2];
                            if (l[n] = c, c[2] = t(e, i, s)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var o = t.length; o--;)
                    if (!t[o](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function g(t, i, n) {
            for (var o = 0, r = i.length; r > o; o++) e(t, i[o], n);
            return n
        }

        function m(t, e, i, n, o) {
            for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (!i || i(r, n, o)) && (s.push(r), c && e.push(a));
            return s
        }

        function v(t, e, i, o, r, s) {
            return o && !o[z] && (o = v(o)), r && !r[z] && (r = v(r, s)), n(function(n, s, a, l) {
                var c, h, u, p = [],
                    d = [],
                    f = s.length,
                    v = n || g(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !n && e ? v : m(v, p, t, a, l),
                    b = i ? r || (n ? t : f || o) ? [] : s : y;
                if (i && i(y, b, a, l), o)
                    for (c = m(b, d), o(c, [], a, l), h = c.length; h--;)(u = c[h]) && (b[d[h]] = !(y[d[h]] = u));
                if (n) {
                    if (r || t) {
                        if (r) {
                            for (c = [], h = b.length; h--;)(u = b[h]) && c.push(y[h] = u);
                            r(null, b = [], c, l)
                        }
                        for (h = b.length; h--;)(u = b[h]) && (c = r ? te(n, u) : p[h]) > -1 && (n[c] = !(s[c] = u))
                    }
                } else b = m(b === s ? b.splice(f, b.length) : b), r ? r(null, s, b, l) : Q.apply(s, b)
            })
        }

        function y(t) {
            for (var e, i, n, o = t.length, r = k.relative[t[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = d(function(t) {
                    return t === e
                }, s, !0), c = d(function(t) {
                    return te(e, t) > -1
                }, s, !0), h = [function(t, i, n) {
                    var o = !r && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                    return e = null, o
                }]; o > a; a++)
                if (i = k.relative[t[a].type]) h = [d(f(h), i)];
                else {
                    if (i = k.filter[t[a].type].apply(null, t[a].matches), i[z]) {
                        for (n = ++a; o > n && !k.relative[t[n].type]; n++);
                        return v(a > 1 && f(h), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), i, n > a && y(t.slice(a, n)), o > n && y(t = t.slice(n)), o > n && p(t))
                    }
                    h.push(i)
                }
            return f(h)
        }

        function b(t, i) {
            var o = i.length > 0,
                r = t.length > 0,
                s = function(n, s, a, l, c) {
                    var h, u, p, d = 0,
                        f = "0",
                        g = n && [],
                        v = [],
                        y = E,
                        b = n || r && k.find.TAG("*", c),
                        x = F += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (c && (E = s !== _ && s); f !== w && null != (h = b[f]); f++) {
                        if (r && h) {
                            for (u = 0; p = t[u++];)
                                if (p(h, s, a)) {
                                    l.push(h);
                                    break
                                }
                            c && (F = x)
                        }
                        o && ((h = !p && h) && d--, n && g.push(h))
                    }
                    if (d += f, o && f !== d) {
                        for (u = 0; p = i[u++];) p(g, v, s, a);
                        if (n) {
                            if (d > 0)
                                for (; f--;) g[f] || v[f] || (v[f] = K.call(l));
                            v = m(v)
                        }
                        Q.apply(l, v), c && !n && v.length > 0 && d + i.length > 1 && e.uniqueSort(l)
                    }
                    return c && (F = x, E = y), g
                };
            return o ? n(s) : s
        }
        var x, w, k, T, C, S, A, P, E, L, D, O, _, M, N, I, $, j, R, z = "sizzle" + 1 * new Date,
            H = t.document,
            F = 0,
            B = 0,
            W = i(),
            X = i(),
            q = i(),
            Y = function(t, e) {
                return t === e && (D = !0), 0
            },
            G = 1 << 31,
            U = {}.hasOwnProperty,
            V = [],
            K = V.pop,
            Z = V.push,
            Q = V.push,
            J = V.slice,
            te = function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ne.replace("w", "w#"),
            re = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
            se = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ie + "+", "g"),
            le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            ce = new RegExp("^" + ie + "*," + ie + "*"),
            he = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            ue = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            pe = new RegExp(se),
            de = new RegExp("^" + oe + "$"),
            fe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            xe = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            ke = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            Te = function() {
                O()
            };
        try {
            Q.apply(V = J.call(H.childNodes), H.childNodes), V[H.childNodes.length].nodeType
        } catch (Ce) {
            Q = {
                apply: V.length ? function(t, e) {
                    Z.apply(t, J.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        w = e.support = {}, C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, O = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : H;
            return n !== _ && 9 === n.nodeType && n.documentElement ? (_ = n, M = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Te, !1) : i.attachEvent && i.attachEvent("onunload", Te)), N = !C(n), w.attributes = o(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = o(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(n.getElementsByClassName), w.getById = o(function(t) {
                return M.appendChild(t).id = z, !n.getElementsByName || !n.getElementsByName(z).length
            }), w.getById ? (k.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && N) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, k.filter.ID = function(t) {
                var e = t.replace(we, ke);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete k.find.ID, k.filter.ID = function(t) {
                var e = t.replace(we, ke);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), k.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }, k.find.CLASS = w.getElementsByClassName && function(t, e) {
                return N ? e.getElementsByClassName(t) : void 0
            }, $ = [], I = [], (w.qsa = ve.test(n.querySelectorAll)) && (o(function(t) {
                M.appendChild(t).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + ie + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + z + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + z + "+*").length || I.push(".#.+[+~]")
            }), o(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
            })), (w.matchesSelector = ve.test(j = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function(t) {
                w.disconnectedMatch = j.call(t, "div"), j.call(t, "[s!='']:x"), $.push("!=", se)
            }), I = I.length && new RegExp(I.join("|")), $ = $.length && new RegExp($.join("|")), e = ve.test(M.compareDocumentPosition), R = e || ve.test(M.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, Y = e ? function(t, e) {
                if (t === e) return D = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === H && R(H, t) ? -1 : e === n || e.ownerDocument === H && R(H, e) ? 1 : L ? te(L, t) - te(L, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return D = !0, 0;
                var i, o = 0,
                    r = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    c = [e];
                if (!r || !a) return t === n ? -1 : e === n ? 1 : r ? -1 : a ? 1 : L ? te(L, t) - te(L, e) : 0;
                if (r === a) return s(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) c.unshift(i);
                for (; l[o] === c[o];) o++;
                return o ? s(l[o], c[o]) : l[o] === H ? -1 : c[o] === H ? 1 : 0
            }, n) : _
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== _ && O(t), i = i.replace(ue, "='$1']"), !(!w.matchesSelector || !N || $ && $.test(i) || I && I.test(i))) try {
                var n = j.call(t, i);
                if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (o) {}
            return e(i, _, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== _ && O(t), R(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== _ && O(t);
            var i = k.attrHandle[e.toLowerCase()],
                n = i && U.call(k.attrHandle, e.toLowerCase()) ? i(t, e, !N) : void 0;
            return void 0 !== n ? n : w.attributes || !N ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                o = 0;
            if (D = !w.detectDuplicates, L = !w.sortStable && t.slice(0), t.sort(Y), D) {
                for (; e = t[o++];) e === t[o] && (n = i.push(o));
                for (; n--;) t.splice(i[n], 1)
            }
            return L = null, t
        }, T = e.getText = function(t) {
            var e, i = "",
                n = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else
                for (; e = t[n++];) i += T(e);
            return i
        }, k = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(we, ke), t[3] = (t[3] || t[4] || t[5] || "").replace(we, ke), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && pe.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(we, ke).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && W(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === i : i ? (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(ae, " ") + " ").indexOf(n) > -1 : "|=" === i ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, i, n, o) {
                    var r = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === o ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var c, h, u, p, d, f, g = r !== s ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (u = e; u = u[g];)
                                        if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                for (h = m[z] || (m[z] = {}), c = h[t] || [], d = c[0] === F && c[1], p = c[0] === F && c[2], u = d && m.childNodes[d]; u = ++d && u && u[g] || (p = d = 0) || f.pop();)
                                    if (1 === u.nodeType && ++p && u === e) {
                                        h[t] = [F, d, p];
                                        break
                                    }
                            } else if (y && (c = (e[z] || (e[z] = {}))[t]) && c[0] === F) p = c[1];
                            else
                                for (;
                                    (u = ++d && u && u[g] || (p = d = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++p || (y && ((u[z] || (u[z] = {}))[t] = [F, p]), u !== e)););
                            return p -= o, p === n || p % n === 0 && p / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var o, r = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[z] ? r(i) : r.length > 1 ? (o = [t, t, "", i], k.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, o = r(t, i), s = o.length; s--;) n = te(t, o[s]), t[n] = !(e[n] = o[s])
                    }) : function(t) {
                        return r(t, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        o = A(t.replace(le, "$1"));
                    return o[z] ? n(function(t, e, i, n) {
                        for (var r, s = o(t, null, n, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function(t, n, r) {
                        return e[0] = t, o(e, null, r, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(we, ke),
                        function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function(t) {
                    return de.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, ke).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === M
                },
                focus: function(t) {
                    return t === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !k.pseudos.empty(t)
                },
                header: function(t) {
                    return me.test(t.nodeName)
                },
                input: function(t) {
                    return ge.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: c(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[x] = a(x);
        for (x in {
                submit: !0,
                reset: !0
            }) k.pseudos[x] = l(x);
        return u.prototype = k.filters = k.pseudos, k.setFilters = new u, S = e.tokenize = function(t, i) {
            var n, o, r, s, a, l, c, h = X[t + " "];
            if (h) return i ? 0 : h.slice(0);
            for (a = t, l = [], c = k.preFilter; a;) {
                (!n || (o = ce.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = he.exec(a)) && (n = o.shift(), r.push({
                    value: n,
                    type: o[0].replace(le, " ")
                }), a = a.slice(n.length));
                for (s in k.filter) !(o = fe[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : X(t, l).slice(0)
        }, A = e.compile = function(t, e) {
            var i, n = [],
                o = [],
                r = q[t + " "];
            if (!r) {
                for (e || (e = S(t)), i = e.length; i--;) r = y(e[i]), r[z] ? n.push(r) : o.push(r);
                r = q(t, b(o, n)), r.selector = t
            }
            return r
        }, P = e.select = function(t, e, i, n) {
            var o, r, s, a, l, c = "function" == typeof t && t,
                u = !n && S(t = c.selector || t);
            if (i = i || [], 1 === u.length) {
                if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && N && k.relative[r[1].type]) {
                    if (e = (k.find.ID(s.matches[0].replace(we, ke), e) || [])[0], !e) return i;
                    c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (o = fe.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !k.relative[a = s.type]);)
                    if ((l = k.find[a]) && (n = l(s.matches[0].replace(we, ke), be.test(r[0].type) && h(e.parentNode) || e))) {
                        if (r.splice(o, 1), t = n.length && p(r), !t) return Q.apply(i, n), i;
                        break
                    }
            }
            return (c || A(t, u))(n, e, !N, i, be.test(t) && h(e.parentNode) || e), i
        }, w.sortStable = z.split("").sort(Y).join("") === z, w.detectDuplicates = !!D, O(), w.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(_.createElement("div"))
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), o(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(ee, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    J.find = oe, J.expr = oe.selectors, J.expr[":"] = J.expr.pseudos, J.unique = oe.uniqueSort, J.text = oe.getText, J.isXMLDoc = oe.isXML, J.contains = oe.contains;
    var re = J.expr.match.needsContext,
        se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    J.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? J.find.matchesSelector(n, t) ? [n] : [] : J.find.matches(t, J.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, J.fn.extend({
        find: function(t) {
            var e, i = this.length,
                n = [],
                o = this;
            if ("string" != typeof t) return this.pushStack(J(t).filter(function() {
                for (e = 0; i > e; e++)
                    if (J.contains(o[e], this)) return !0
            }));
            for (e = 0; i > e; e++) J.find(t, o[e], n);
            return n = this.pushStack(i > 1 ? J.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && re.test(t) ? J(t) : t || [], !1).length
        }
    });
    var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        he = J.fn.init = function(t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ce.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || le).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof J ? e[0] : e, J.merge(this, J.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), se.test(i[1]) && J.isPlainObject(e))
                        for (i in e) J.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return n = Z.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = Z, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : J.isFunction(t) ? "undefined" != typeof le.ready ? le.ready(t) : t(J) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), J.makeArray(t, this))
        };
    he.prototype = J.fn, le = J(Z);
    var ue = /^(?:parents|prev(?:Until|All))/,
        pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    J.extend({
        dir: function(t, e, i) {
            for (var n = [], o = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && J(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), J.fn.extend({
        has: function(t) {
            var e = J(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++)
                    if (J.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, o = this.length, r = [], s = re.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; o > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && J.find.matchesSelector(i, t))) {
                        r.push(i);
                        break
                    }
            return this.pushStack(r.length > 1 ? J.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? Y.call(J(t), this[0]) : Y.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(J.unique(J.merge(this.get(), J(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), J.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return J.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return J.dir(t, "parentNode", i)
        },
        next: function(t) {
            return o(t, "nextSibling")
        },
        prev: function(t) {
            return o(t, "previousSibling")
        },
        nextAll: function(t) {
            return J.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return J.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return J.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return J.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return J.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return J.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || J.merge([], t.childNodes)
        }
    }, function(t, e) {
        J.fn[t] = function(i, n) {
            var o = J.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = J.filter(n, o)), this.length > 1 && (pe[t] || J.unique(o), ue.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var de = /\S+/g,
        fe = {};
    J.Callbacks = function(t) {
        t = "string" == typeof t ? fe[t] || r(t) : J.extend({}, t);
        var e, i, n, o, s, a, l = [],
            c = !t.once && [],
            h = function(r) {
                for (e = t.memory && r, i = !0, a = o || 0, o = 0, s = l.length, n = !0; l && s > a; a++)
                    if (l[a].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                n = !1, l && (c ? c.length && h(c.shift()) : e ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function r(e) {
                            J.each(e, function(e, i) {
                                var n = J.type(i);
                                "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && r(i)
                            })
                        }(arguments), n ? s = l.length : e && (o = i, h(e))
                    }
                    return this
                },
                remove: function() {
                    return l && J.each(arguments, function(t, e) {
                        for (var i;
                            (i = J.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (s >= i && s--, a >= i && a--)
                    }), this
                },
                has: function(t) {
                    return t ? J.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = c = e = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, e || u.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(t, e) {
                    return !l || i && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : h(e)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, J.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", J.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return J.Deferred(function(i) {
                            J.each(e, function(e, r) {
                                var s = J.isFunction(t[e]) && t[e];
                                o[r[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && J.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? J.extend(t, n) : n
                    }
                },
                o = {};
            return n.pipe = n.then, J.each(e, function(t, r) {
                var s = r[2],
                    a = r[3];
                n[r[1]] = s.add, a && s.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? n : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), n.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, i, n, o = 0,
                r = W.call(arguments),
                s = r.length,
                a = 1 !== s || t && J.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : J.Deferred(),
                c = function(t, i, n) {
                    return function(o) {
                        i[t] = this, n[t] = arguments.length > 1 ? W.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (s > 1)
                for (e = new Array(s), i = new Array(s), n = new Array(s); s > o; o++) r[o] && J.isFunction(r[o].promise) ? r[o].promise().done(c(o, n, r)).fail(l.reject).progress(c(o, i, e)) : --a;
            return a || l.resolveWith(n, r), l.promise()
        }
    });
    var ge;
    J.fn.ready = function(t) {
        return J.ready.promise().done(t), this
    }, J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? J.readyWait++ : J.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, t !== !0 && --J.readyWait > 0 || (ge.resolveWith(Z, [J]), J.fn.triggerHandler && (J(Z).triggerHandler("ready"), J(Z).off("ready"))))
        }
    }), J.ready.promise = function(e) {
        return ge || (ge = J.Deferred(), "complete" === Z.readyState ? setTimeout(J.ready) : (Z.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), ge.promise(e)
    }, J.ready.promise();
    var me = J.access = function(t, e, i, n, o, r, s) {
        var a = 0,
            l = t.length,
            c = null == i;
        if ("object" === J.type(i)) {
            o = !0;
            for (a in i) J.access(t, e, a, i[a], !0, r, s)
        } else if (void 0 !== n && (o = !0, J.isFunction(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                return c.call(J(t), i)
            })), e))
            for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
        return o ? t : c ? e.call(t) : l ? e(t[0], i) : r
    };
    J.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, a.uid = 1, a.accepts = J.acceptData, a.prototype = {
        key: function(t) {
            if (!a.accepts(t)) return 0;
            var e = {},
                i = t[this.expando];
            if (!i) {
                i = a.uid++;
                try {
                    e[this.expando] = {
                        value: i
                    }, Object.defineProperties(t, e)
                } catch (n) {
                    e[this.expando] = i, J.extend(t, e)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function(t, e, i) {
            var n, o = this.key(t),
                r = this.cache[o];
            if ("string" == typeof e) r[e] = i;
            else if (J.isEmptyObject(r)) J.extend(this.cache[o], e);
            else
                for (n in e) r[n] = e[n];
            return r
        },
        get: function(t, e) {
            var i = this.cache[this.key(t)];
            return void 0 === e ? i : i[e]
        },
        access: function(t, e, i) {
            var n;
            return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, J.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n, o, r = this.key(t),
                s = this.cache[r];
            if (void 0 === e) this.cache[r] = {};
            else {
                J.isArray(e) ? n = e.concat(e.map(J.camelCase)) : (o = J.camelCase(e), e in s ? n = [e, o] : (n = o, n = n in s ? [n] : n.match(de) || [])), i = n.length;
                for (; i--;) delete s[n[i]]
            }
        },
        hasData: function(t) {
            return !J.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var ve = new a,
        ye = new a,
        be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        xe = /([A-Z])/g;
    J.extend({
        hasData: function(t) {
            return ye.hasData(t) || ve.hasData(t)
        },
        data: function(t, e, i) {
            return ye.access(t, e, i)
        },
        removeData: function(t, e) {
            ye.remove(t, e)
        },
        _data: function(t, e, i) {
            return ve.access(t, e, i)
        },
        _removeData: function(t, e) {
            ve.remove(t, e)
        }
    }), J.fn.extend({
        data: function(t, e) {
            var i, n, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = ye.get(r), 1 === r.nodeType && !ve.get(r, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = J.camelCase(n.slice(5)), l(r, n, o[n])));
                    ve.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                ye.set(this, t)
            }) : me(this, function(e) {
                var i, n = J.camelCase(t);
                if (r && void 0 === e) {
                    if (i = ye.get(r, t), void 0 !== i) return i;
                    if (i = ye.get(r, n), void 0 !== i) return i;
                    if (i = l(r, n, void 0), void 0 !== i) return i
                } else this.each(function() {
                    var i = ye.get(this, n);
                    ye.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && ye.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                ye.remove(this, t)
            })
        }
    }), J.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = ve.get(t, e), i && (!n || J.isArray(i) ? n = ve.access(t, e, J.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = J.queue(t, e),
                n = i.length,
                o = i.shift(),
                r = J._queueHooks(t, e),
                s = function() {
                    J.dequeue(t, e)
                };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return ve.get(t, i) || ve.access(t, i, {
                empty: J.Callbacks("once memory").add(function() {
                    ve.remove(t, [e + "queue", i])
                })
            })
        }
    }), J.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? J.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = J.queue(this, t, e);
                J._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && J.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                J.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                o = J.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --n || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = ve.get(r[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ke = ["Top", "Right", "Bottom", "Left"],
        Te = function(t, e) {
            return t = e || t, "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t)
        },
        Ce = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = Z.createDocumentFragment(),
            e = t.appendChild(Z.createElement("div")),
            i = Z.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), K.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Se = "undefined";
    K.focusinBubbles = "onfocusin" in t;
    var Ae = /^key/,
        Pe = /^(?:mouse|pointer|contextmenu)|click/,
        Ee = /^(?:focusinfocus|focusoutblur)$/,
        Le = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function(t, e, i, n, o) {
            var r, s, a, l, c, h, u, p, d, f, g, m = ve.get(t);
            if (m)
                for (i.handler && (r = i, i = r.handler, o = r.selector), i.guid || (i.guid = J.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                        return typeof J !== Se && J.event.triggered !== e.type ? J.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(de) || [""], c = e.length; c--;) a = Le.exec(e[c]) || [], d = g = a[1], f = (a[2] || "").split(".").sort(), d && (u = J.event.special[d] || {}, d = (o ? u.delegateType : u.bindType) || d, u = J.event.special[d] || {}, h = J.extend({
                    type: d,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && J.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, r), (p = l[d]) || (p = l[d] = [], p.delegateCount = 0, u.setup && u.setup.call(t, n, f, s) !== !1 || t.addEventListener && t.addEventListener(d, s, !1)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, h) : p.push(h), J.event.global[d] = !0)
        },
        remove: function(t, e, i, n, o) {
            var r, s, a, l, c, h, u, p, d, f, g, m = ve.hasData(t) && ve.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(de) || [""], c = e.length; c--;)
                    if (a = Le.exec(e[c]) || [], d = g = a[1], f = (a[2] || "").split(".").sort(), d) {
                        for (u = J.event.special[d] || {}, d = (n ? u.delegateType : u.bindType) || d, p = l[d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) h = p[r], !o && g !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (p.splice(r, 1), h.selector && p.delegateCount--, u.remove && u.remove.call(t, h));
                        s && !p.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || J.removeEvent(t, d, m.handle), delete l[d])
                    } else
                        for (d in l) J.event.remove(t, d + e[c], i, n, !0);
                J.isEmptyObject(l) && (delete m.handle, ve.remove(t, "events"))
            }
        },
        trigger: function(e, i, n, o) {
            var r, s, a, l, c, h, u, p = [n || Z],
                d = V.call(e, "type") ? e.type : e,
                f = V.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !Ee.test(d + J.event.triggered) && (d.indexOf(".") >= 0 && (f = d.split("."), d = f.shift(), f.sort()), c = d.indexOf(":") < 0 && "on" + d, e = e[J.expando] ? e : new J.Event(d, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : J.makeArray(i, [e]), u = J.event.special[d] || {}, o || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                if (!o && !u.noBubble && !J.isWindow(n)) {
                    for (l = u.delegateType || d, Ee.test(l + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (n.ownerDocument || Z) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (r = 0;
                    (s = p[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : u.bindType || d, h = (ve.get(s, "events") || {})[e.type] && ve.get(s, "handle"), h && h.apply(s, i), h = c && s[c], h && h.apply && J.acceptData(s) && (e.result = h.apply(s, i), e.result === !1 && e.preventDefault());
                return e.type = d, o || e.isDefaultPrevented() || u._default && u._default.apply(p.pop(), i) !== !1 || !J.acceptData(n) || c && J.isFunction(n[d]) && !J.isWindow(n) && (a = n[c], a && (n[c] = null), J.event.triggered = d, n[d](), J.event.triggered = void 0, a && (n[c] = a)), e.result
            }
        },
        dispatch: function(t) {
            t = J.event.fix(t);
            var e, i, n, o, r, s = [],
                a = W.call(arguments),
                l = (ve.get(this, "events") || {})[t.type] || [],
                c = J.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (s = J.event.handlers.call(this, t, l), e = 0;
                    (o = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, i = 0;
                        (r = o.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, n = ((J.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, o, r, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== t.type) {
                        for (n = [], i = 0; a > i; i++) r = e[i], o = r.selector + " ", void 0 === n[o] && (n[o] = r.needsContext ? J(o, this).index(l) >= 0 : J.find(o, this, null, [l]).length), n[o] && n.push(r);
                        n.length && s.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, o, r = e.button;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Z, n = i.documentElement, o = i.body, t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[J.expando]) return t;
            var e, i, n, o = t.type,
                r = t,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Pe.test(o) ? this.mouseHooks : Ae.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new J.Event(r), e = n.length; e--;) i = n[e], t[i] = r[i];
            return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, r) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== u() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return J.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var o = J.extend(new J.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? J.event.trigger(o, null, e) : J.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault()
        }
    }, J.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    }, J.Event = function(t, e) {
        return this instanceof J.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? c : h) : this.type = t, e && J.extend(this, e), this.timeStamp = t && t.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(t, e)
    }, J.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        J.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return (!o || o !== n && !J.contains(n, o)) && (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), K.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            J.event.simulate(e, t.target, J.event.fix(t), !0)
        };
        J.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    o = ve.access(n, e);
                o || n.addEventListener(t, i, !0), ve.access(n, e, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    o = ve.access(n, e) - 1;
                o ? ve.access(n, e, o) : (n.removeEventListener(t, i, !0), ve.remove(n, e))
            }
        }
    }), J.fn.extend({
        on: function(t, e, i, n, o) {
            var r, s;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (s in t) this.on(s, e, i, t[s], o);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = h;
            else if (!n) return this;
            return 1 === o && (r = n, n = function(t) {
                return J().off(t), r.apply(this, arguments)
            }, n.guid = r.guid || (r.guid = J.guid++)), this.each(function() {
                J.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, o;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, J(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = h), this.each(function() {
                J.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                J.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? J.event.trigger(t, e, i, !0) : void 0
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Oe = /<([\w:]+)/,
        _e = /<|&#?\w+;/,
        Me = /<(?:script|style|link)/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ie = /^$|\/(?:java|ecma)script/i,
        $e = /^true\/(.*)/,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Re = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, J.extend({
        clone: function(t, e, i) {
            var n, o, r, s, a = t.cloneNode(!0),
                l = J.contains(t.ownerDocument, t);
            if (!(K.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || J.isXMLDoc(t)))
                for (s = v(a), r = v(t), n = 0, o = r.length; o > n; n++) y(r[n], s[n]);
            if (e)
                if (i)
                    for (r = r || v(t), s = s || v(a), n = 0, o = r.length; o > n; n++) m(r[n], s[n]);
                else m(t, a);
            return s = v(a, "script"), s.length > 0 && g(s, !l && v(t, "script")), a
        },
        buildFragment: function(t, e, i, n) {
            for (var o, r, s, a, l, c, h = e.createDocumentFragment(), u = [], p = 0, d = t.length; d > p; p++)
                if (o = t[p], o || 0 === o)
                    if ("object" === J.type(o)) J.merge(u, o.nodeType ? [o] : o);
                    else if (_e.test(o)) {
                for (r = r || h.appendChild(e.createElement("div")), s = (Oe.exec(o) || ["", ""])[1].toLowerCase(), a = Re[s] || Re._default, r.innerHTML = a[1] + o.replace(De, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
                J.merge(u, r.childNodes), r = h.firstChild, r.textContent = ""
            } else u.push(e.createTextNode(o));
            for (h.textContent = "", p = 0; o = u[p++];)
                if ((!n || -1 === J.inArray(o, n)) && (l = J.contains(o.ownerDocument, o), r = v(h.appendChild(o), "script"), l && g(r), i))
                    for (c = 0; o = r[c++];) Ie.test(o.type || "") && i.push(o);
            return h
        },
        cleanData: function(t) {
            for (var e, i, n, o, r = J.event.special, s = 0; void 0 !== (i = t[s]); s++) {
                if (J.acceptData(i) && (o = i[ve.expando], o && (e = ve.cache[o]))) {
                    if (e.events)
                        for (n in e.events) r[n] ? J.event.remove(i, n) : J.removeEvent(i, n, e.handle);
                    ve.cache[o] && delete ve.cache[o]
                }
                delete ye.cache[i[ye.expando]]
            }
        }
    }), J.fn.extend({
        text: function(t) {
            return me(this, function(t) {
                return void 0 === t ? J.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? J.filter(t, this) : this, o = 0; null != (i = n[o]); o++) e || 1 !== i.nodeType || J.cleanData(v(i)), i.parentNode && (e && J.contains(i.ownerDocument, i) && g(v(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (J.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return J.clone(this, t, e)
            })
        },
        html: function(t) {
            return me(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Me.test(t) && !Re[(Oe.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(De, "<$1></$2>");
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (J.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (o) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, J.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = X.apply([], t);
            var i, n, o, r, s, a, l = 0,
                c = this.length,
                h = this,
                u = c - 1,
                p = t[0],
                g = J.isFunction(p);
            if (g || c > 1 && "string" == typeof p && !K.checkClone && Ne.test(p)) return this.each(function(i) {
                var n = h.eq(i);
                g && (t[0] = p.call(this, i, n.html())), n.domManip(t, e)
            });
            if (c && (i = J.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                for (o = J.map(v(i, "script"), d), r = o.length; c > l; l++) s = i, l !== u && (s = J.clone(s, !0, !0), r && J.merge(o, v(s, "script"))), e.call(this[l], s, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, J.map(o, f), l = 0; r > l; l++) s = o[l], Ie.test(s.type || "") && !ve.access(s, "globalEval") && J.contains(a, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(je, "")))
            }
            return this
        }
    }), J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        J.fn[t] = function(t) {
            for (var i, n = [], o = J(t), r = o.length - 1, s = 0; r >= s; s++) i = s === r ? this : this.clone(!0), J(o[s])[e](i), q.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var ze, He = {},
        Fe = /^margin/,
        Be = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
        We = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        };
    ! function() {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", o.appendChild(r);
            var e = t.getComputedStyle(s, null);
            i = "1%" !== e.top, n = "4px" === e.width, o.removeChild(r)
        }
        var i, n, o = Z.documentElement,
            r = Z.createElement("div"),
            s = Z.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(s), t.getComputedStyle && J.extend(K, {
            pixelPosition: function() {
                return e(), i
            },
            boxSizingReliable: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                var e, i = s.appendChild(Z.createElement("div"));
                return i.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", s.style.width = "1px", o.appendChild(r), e = !parseFloat(t.getComputedStyle(i, null).marginRight), o.removeChild(r), s.removeChild(i), e
            }
        }))
    }(), J.swap = function(t, e, i, n) {
        var o, r, s = {};
        for (r in e) s[r] = t.style[r], t.style[r] = e[r];
        o = i.apply(t, n || []);
        for (r in e) t.style[r] = s[r];
        return o
    };
    var Xe = /^(none|table(?!-c[ea]).+)/,
        qe = new RegExp("^(" + we + ")(.*)$", "i"),
        Ye = new RegExp("^([+-])=(" + we + ")", "i"),
        Ge = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ue = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ve = ["Webkit", "O", "Moz", "ms"];
    J.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = w(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = J.camelCase(e),
                    l = t.style;
                return e = J.cssProps[a] || (J.cssProps[a] = T(l, a)), s = J.cssHooks[e] || J.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e] : (r = typeof i, "string" === r && (o = Ye.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(J.css(t, e)), r = "number"), null != i && i === i && ("number" !== r || J.cssNumber[a] || (i += "px"), K.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i)), void 0)
            }
        },
        css: function(t, e, i, n) {
            var o, r, s, a = J.camelCase(e);
            return e = J.cssProps[a] || (J.cssProps[a] = T(t.style, a)), s = J.cssHooks[e] || J.cssHooks[a], s && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = w(t, e, n)), "normal" === o && e in Ue && (o = Ue[e]), "" === i || i ? (r = parseFloat(o), i === !0 || J.isNumeric(r) ? r || 0 : o) : o
        }
    }), J.each(["height", "width"], function(t, e) {
        J.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? Xe.test(J.css(t, "display")) && 0 === t.offsetWidth ? J.swap(t, Ge, function() {
                    return A(t, e, n)
                }) : A(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var o = n && We(t);
                return C(t, i, n ? S(t, e, n, "border-box" === J.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), J.cssHooks.marginRight = k(K.reliableMarginRight, function(t, e) {
        return e ? J.swap(t, {
            display: "inline-block"
        }, w, [t, "marginRight"]) : void 0
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        J.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + ke[n] + e] = r[n] || r[n - 2] || r[0];
                return o
            }
        }, Fe.test(t) || (J.cssHooks[t + e].set = C)
    }), J.fn.extend({
        css: function(t, e) {
            return me(this, function(t, e, i) {
                var n, o, r = {},
                    s = 0;
                if (J.isArray(e)) {
                    for (n = We(t), o = e.length; o > s; s++) r[e[s]] = J.css(t, e[s], !1, n);
                    return r
                }
                return void 0 !== i ? J.style(t, e, i) : J.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return P(this, !0)
        },
        hide: function() {
            return P(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Te(this) ? J(this).show() : J(this).hide()
            })
        }
    }), J.Tween = E, E.prototype = {
        constructor: E,
        init: function(t, e, i, n, o, r) {
            this.elem = t, this.prop = i, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (J.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = E.propHooks[this.prop];
            return t && t.get ? t.get(this) : E.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = E.propHooks[this.prop];
            return this.pos = e = this.options.duration ? J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : E.propHooks._default.set(this), this
        }
    }, E.prototype.init.prototype = E.prototype, E.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = J.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                J.fx.step[t.prop] ? J.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop]) ? J.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, E.propHooks.scrollTop = E.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, J.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, J.fx = E.prototype.init, J.fx.step = {};
    var Ke, Ze, Qe = /^(?:toggle|show|hide)$/,
        Je = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
        ti = /queueHooks$/,
        ei = [_],
        ii = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    o = Je.exec(e),
                    r = o && o[3] || (J.cssNumber[t] ? "" : "px"),
                    s = (J.cssNumber[t] || "px" !== r && +n) && Je.exec(J.css(i.elem, t)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], o = o || [], s = +n || 1;
                    do a = a || ".5", s /= a, J.style(i.elem, t, s + r); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return o && (s = i.start = +s || +n || 0, i.unit = r, i.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), i
            }]
        };
    J.Animation = J.extend(N, {
            tweener: function(t, e) {
                J.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, o = t.length; o > n; n++) i = t[n], ii[i] = ii[i] || [], ii[i].unshift(e)
            },
            prefilter: function(t, e) {
                e ? ei.unshift(t) : ei.push(t)
            }
        }), J.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? J.extend({}, t) : {
                complete: i || !i && e || J.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !J.isFunction(e) && e
            };
            return n.duration = J.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in J.fx.speeds ? J.fx.speeds[n.duration] : J.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                J.isFunction(n.old) && n.old.call(this), n.queue && J.dequeue(this, n.queue)
            }, n
        }, J.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(Te).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var o = J.isEmptyObject(t),
                    r = J.speed(e, i, n),
                    s = function() {
                        var e = N(this, J.extend({}, t), r);
                        (o || ve.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        r = J.timers,
                        s = ve.get(this);
                    if (o) s[o] && s[o].stop && n(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && ti.test(o) && n(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i), e = !1, r.splice(o, 1));
                    (e || !i) && J.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = ve.get(this),
                        n = i[t + "queue"],
                        o = i[t + "queueHooks"],
                        r = J.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, J.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), J.each(["toggle", "show", "hide"], function(t, e) {
            var i = J.fn[e];
            J.fn[e] = function(t, n, o) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(D(e, !0), t, n, o)
            }
        }), J.each({
            slideDown: D("show"),
            slideUp: D("hide"),
            slideToggle: D("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            J.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), J.timers = [], J.fx.tick = function() {
            var t, e = 0,
                i = J.timers;
            for (Ke = J.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
            i.length || J.fx.stop(), Ke = void 0
        }, J.fx.timer = function(t) {
            J.timers.push(t), t() ? J.fx.start() : J.timers.pop()
        }, J.fx.interval = 13, J.fx.start = function() {
            Ze || (Ze = setInterval(J.fx.tick, J.fx.interval))
        }, J.fx.stop = function() {
            clearInterval(Ze), Ze = null
        }, J.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, J.fn.delay = function(t, e) {
            return t = J.fx ? J.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var t = Z.createElement("input"),
                e = Z.createElement("select"),
                i = e.appendChild(Z.createElement("option"));
            t.type = "checkbox", K.checkOn = "" !== t.value, K.optSelected = i.selected, e.disabled = !0, K.optDisabled = !i.disabled, t = Z.createElement("input"), t.value = "t", t.type = "radio", K.radioValue = "t" === t.value
        }();
    var ni, oi, ri = J.expr.attrHandle;
    J.fn.extend({
        attr: function(t, e) {
            return me(this, J.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                J.removeAttr(this, t)
            })
        }
    }), J.extend({
        attr: function(t, e, i) {
            var n, o, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === Se ? J.prop(t, e, i) : (1 === r && J.isXMLDoc(t) || (e = e.toLowerCase(), n = J.attrHooks[e] || (J.expr.match.bool.test(e) ? oi : ni)), void 0 === i ? n && "get" in n && null !== (o = n.get(t, e)) ? o : (o = J.find.attr(t, e), null == o ? void 0 : o) : null !== i ? n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o : (t.setAttribute(e, i + ""), i) : void J.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, o = 0,
                r = e && e.match(de);
            if (r && 1 === t.nodeType)
                for (; i = r[o++];) n = J.propFix[i] || i, J.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!K.radioValue && "radio" === e && J.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), oi = {
        set: function(t, e, i) {
            return e === !1 ? J.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = ri[e] || J.find.attr;
        ri[e] = function(t, e, n) {
            var o, r;
            return n || (r = ri[e], ri[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, ri[e] = r), o
        }
    });
    var si = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
        prop: function(t, e) {
            return me(this, J.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[J.propFix[t] || t]
            })
        }
    }), J.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, i) {
            var n, o, r, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return r = 1 !== s || !J.isXMLDoc(t), r && (e = J.propFix[e] || e, o = J.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || si.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), K.optSelected || (J.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        J.propFix[this.toLowerCase()] = this
    });
    var ai = /[\t\r\n\f]/g;
    J.fn.extend({
        addClass: function(t) {
            var e, i, n, o, r, s, a = "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).addClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(de) || []; c > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ai, " ") : " ")) {
                        for (r = 0; o = e[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        s = J.trim(n), i.className !== s && (i.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, o, r, s, a = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).removeClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(de) || []; c > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ai, " ") : "")) {
                        for (r = 0; o = e[r++];)
                            for (; n.indexOf(" " + o + " ") >= 0;) n = n.replace(" " + o + " ", " ");
                        s = t ? J.trim(n) : "", i.className !== s && (i.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(J.isFunction(t) ? function(i) {
                J(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function() {
                if ("string" === i)
                    for (var e, n = 0, o = J(this), r = t.match(de) || []; e = r[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else(i === Se || "boolean" === i) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(ai, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var li = /\r/g;
    J.fn.extend({
        val: function(t) {
            var e, i, n, o = this[0]; {
                if (arguments.length) return n = J.isFunction(t), this.each(function(i) {
                    var o;
                    1 === this.nodeType && (o = n ? t.call(this, i, J(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : J.isArray(o) && (o = J.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), e = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                });
                if (o) return e = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(li, "") : null == i ? "" : i)
            }
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = J.find.attr(t, "value");
                    return null != e ? e : J.trim(J.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== o || (K.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && J.nodeName(i.parentNode, "optgroup"))) {
                            if (e = J(i).val(), r) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var i, n, o = t.options, r = J.makeArray(e), s = o.length; s--;) n = o[s], (n.selected = J.inArray(n.value, r) >= 0) && (i = !0);
                    return i || (t.selectedIndex = -1), r
                }
            }
        }
    }), J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = {
            set: function(t, e) {
                return J.isArray(e) ? t.checked = J.inArray(J(t).val(), e) >= 0 : void 0
            }
        }, K.checkOn || (J.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        J.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), J.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var ci = J.now(),
        hi = /\?/;
    J.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, J.parseXML = function(t) {
        var e, i;
        if (!t || "string" != typeof t) return null;
        try {
            i = new DOMParser, e = i.parseFromString(t, "text/xml")
        } catch (n) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + t), e
    };
    var ui = /#.*$/,
        pi = /([?&])_=[^&]*/,
        di = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        fi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        gi = /^(?:GET|HEAD)$/,
        mi = /^\/\//,
        vi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        yi = {},
        bi = {},
        xi = "*/".concat("*"),
        wi = t.location.href,
        ki = vi.exec(wi.toLowerCase()) || [];
    J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wi,
            type: "GET",
            isLocal: fi.test(ki[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? j(j(t, J.ajaxSettings), e) : j(J.ajaxSettings, t)
        },
        ajaxPrefilter: I(yi),
        ajaxTransport: I(bi),
        ajax: function(t, e) {
            function i(t, e, i, s) {
                var l, h, v, y, x, k = e;
                2 !== b && (b = 2, a && clearTimeout(a), n = void 0, r = s || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (y = R(u, w, i)), y = z(u, y, w, l), l ? (u.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (J.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (J.etag[o] = x)), 204 === t || "HEAD" === u.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = y.state, h = y.data, v = y.error, l = !v)) : (v = k, (t || !k) && (k = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || k) + "", l ? f.resolveWith(p, [h, k, w]) : f.rejectWith(p, [w, k, v]), w.statusCode(m), m = void 0, c && d.trigger(l ? "ajaxSuccess" : "ajaxError", [w, u, l ? h : v]), g.fireWith(p, [w, k]), c && (d.trigger("ajaxComplete", [w, u]), --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, o, r, s, a, l, c, h, u = J.ajaxSetup({}, e),
                p = u.context || u,
                d = u.context && (p.nodeType || p.jquery) ? J(p) : J.event,
                f = J.Deferred(),
                g = J.Callbacks("once memory"),
                m = u.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!s)
                                for (s = {}; e = di.exec(r);) s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? r : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return b || (t = y[i] = y[i] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (u.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) m[e] = [m[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return n && n.abort(e), i(0, e), this
                    }
                };
            if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, u.url = ((t || u.url || wi) + "").replace(ui, "").replace(mi, ki[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = J.trim(u.dataType || "*").toLowerCase().match(de) || [""], null == u.crossDomain && (l = vi.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === ki[1] && l[2] === ki[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (ki[3] || ("http:" === ki[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = J.param(u.data, u.traditional)), $(yi, u, e, w), 2 === b) return w;
            c = J.event && u.global, c && 0 === J.active++ && J.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !gi.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (hi.test(o) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = pi.test(o) ? o.replace(pi, "$1_=" + ci++) : o + (hi.test(o) ? "&" : "?") + "_=" + ci++)), u.ifModified && (J.lastModified[o] && w.setRequestHeader("If-Modified-Since", J.lastModified[o]), J.etag[o] && w.setRequestHeader("If-None-Match", J.etag[o])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + xi + "; q=0.01" : "") : u.accepts["*"]);
            for (h in u.headers) w.setRequestHeader(h, u.headers[h]);
            if (u.beforeSend && (u.beforeSend.call(p, w, u) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (h in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[h](u[h]);
            if (n = $(bi, u, e, w)) {
                w.readyState = 1, c && d.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, u.timeout));
                try {
                    b = 1, n.send(v, i)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    i(-1, k)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, i) {
            return J.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return J.get(t, void 0, e, "script")
        }
    }), J.each(["get", "post"], function(t, e) {
        J[e] = function(t, i, n, o) {
            return J.isFunction(i) && (o = o || n, n = i, i = void 0), J.ajax({
                url: t,
                type: e,
                dataType: o,
                data: i,
                success: n
            })
        }
    }), J._evalUrl = function(t) {
        return J.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, J.fn.extend({
        wrapAll: function(t) {
            var e;
            return J.isFunction(t) ? this.each(function(e) {
                J(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = J(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return this.each(J.isFunction(t) ? function(e) {
                J(this).wrapInner(t.call(this, e))
            } : function() {
                var e = J(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = J.isFunction(t);
            return this.each(function(i) {
                J(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        }
    }), J.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, J.expr.filters.visible = function(t) {
        return !J.expr.filters.hidden(t)
    };
    var Ti = /%20/g,
        Ci = /\[\]$/,
        Si = /\r?\n/g,
        Ai = /^(?:submit|button|image|reset|file)$/i,
        Pi = /^(?:input|select|textarea|keygen)/i;
    J.param = function(t, e) {
        var i, n = [],
            o = function(t, e) {
                e = J.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(t) || t.jquery && !J.isPlainObject(t)) J.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (i in t) H(i, t[i], e, o);
        return n.join("&").replace(Ti, "+")
    }, J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = J.prop(this, "elements");
                return t ? J.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !J(this).is(":disabled") && Pi.test(this.nodeName) && !Ai.test(t) && (this.checked || !Ce.test(t))
            }).map(function(t, e) {
                var i = J(this).val();
                return null == i ? null : J.isArray(i) ? J.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Si, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Si, "\r\n")
                }
            }).get()
        }
    }), J.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var Ei = 0,
        Li = {},
        Di = {
            0: 200,
            1223: 204
        },
        Oi = J.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Li) Li[t]()
    }), K.cors = !!Oi && "withCredentials" in Oi, K.ajax = Oi = !!Oi, J.ajaxTransport(function(t) {
        var e;
        return K.cors || Oi && !t.crossDomain ? {
            send: function(i, n) {
                var o, r = t.xhr(),
                    s = ++Ei;
                if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) r[o] = t.xhrFields[o];
                t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (o in i) r.setRequestHeader(o, i[o]);
                e = function(t) {
                    return function() {
                        e && (delete Li[s], e = r.onload = r.onerror = null, "abort" === t ? r.abort() : "error" === t ? n(r.status, r.statusText) : n(Di[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                            text: r.responseText
                        } : void 0, r.getAllResponseHeaders()))
                    }
                }, r.onload = e(), r.onerror = e("error"), e = Li[s] = e("abort");
                try {
                    r.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (e) throw a
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return J.globalEval(t), t
            }
        }
    }), J.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), J.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, o) {
                    e = J("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), Z.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var _i = [],
        Mi = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = _i.pop() || J.expando + "_" + ci++;
            return this[t] = !0, t
        }
    }), J.ajaxPrefilter("json jsonp", function(e, i, n) {
        var o, r, s, a = e.jsonp !== !1 && (Mi.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Mi.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Mi, "$1" + o) : e.jsonp !== !1 && (e.url += (hi.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return s || J.error(o + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
            s = arguments
        }, n.always(function() {
            t[o] = r, e[o] && (e.jsonpCallback = i.jsonpCallback, _i.push(o)), s && J.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), J.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || Z;
        var n = se.exec(t),
            o = !i && [];
        return n ? [e.createElement(n[1])] : (n = J.buildFragment([t], e, o), o && o.length && J(o).remove(), J.merge([], n.childNodes))
    };
    var Ni = J.fn.load;
    J.fn.load = function(t, e, i) {
        if ("string" != typeof t && Ni) return Ni.apply(this, arguments);
        var n, o, r, s = this,
            a = t.indexOf(" ");
        return a >= 0 && (n = J.trim(t.slice(a)), t = t.slice(0, a)), J.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && J.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, s.html(n ? J("<div>").append(J.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            s.each(i, r || [t.responseText, e, t])
        }), this
    }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        J.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), J.expr.filters.animated = function(t) {
        return J.grep(J.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Ii = t.document.documentElement;
    J.offset = {
        setOffset: function(t, e, i) {
            var n, o, r, s, a, l, c, h = J.css(t, "position"),
                u = J(t),
                p = {};
            "static" === h && (t.style.position = "relative"), a = u.offset(), r = J.css(t, "top"), l = J.css(t, "left"), c = ("absolute" === h || "fixed" === h) && (r + l).indexOf("auto") > -1, c ? (n = u.position(), s = n.top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), J.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + o), "using" in e ? e.using.call(t, p) : u.css(p)
        }
    }, J.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                J.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = n && n.ownerDocument;
            if (r) return e = r.documentElement, J.contains(e, n) ? (typeof n.getBoundingClientRect !== Se && (o = n.getBoundingClientRect()), i = F(r), {
                top: o.top + i.pageYOffset - e.clientTop,
                left: o.left + i.pageXOffset - e.clientLeft
            }) : o
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === J.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), J.nodeName(t[0], "html") || (n = t.offset()), n.top += J.css(t[0], "borderTopWidth", !0), n.left += J.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - J.css(i, "marginTop", !0),
                    left: e.left - n.left - J.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Ii; t && !J.nodeName(t, "html") && "static" === J.css(t, "position");) t = t.offsetParent;
                return t || Ii
            })
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var n = "pageYOffset" === i;
        J.fn[e] = function(o) {
            return me(this, function(e, o, r) {
                var s = F(e);
                return void 0 === r ? s ? s[i] : e[o] : void(s ? s.scrollTo(n ? t.pageXOffset : r, n ? r : t.pageYOffset) : e[o] = r)
            }, e, o, arguments.length, null)
        }
    }), J.each(["top", "left"], function(t, e) {
        J.cssHooks[e] = k(K.pixelPosition, function(t, i) {
            return i ? (i = w(t, e), Be.test(i) ? J(t).position()[e] + "px" : i) : void 0
        })
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        J.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            J.fn[n] = function(n, o) {
                var r = arguments.length && (i || "boolean" != typeof n),
                    s = i || (n === !0 || o === !0 ? "margin" : "border");
                return me(this, function(e, i, n) {
                    var o;
                    return J.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? J.css(e, i, s) : J.style(e, i, n, s)
                }, e, r ? n : void 0, r, null)
            }
        })
    }), J.fn.size = function() {
        return this.length
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return J
    });
    var $i = t.jQuery,
        ji = t.$;
    return J.noConflict = function(e) {
        return t.$ === J && (t.$ = ji), e && t.jQuery === J && (t.jQuery = $i), J
    }, typeof e === Se && (t.jQuery = t.$ = J), J
}), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var o = function() {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.collapse"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || i.data("bs.collapse", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
            var o = t(n);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var o = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var o = t(this);
        o.attr("data-target") || n.preventDefault();
        var r = e(o),
            s = r.data("bs.collapse"),
            a = s ? "toggle" : o.data();
        i.call(r, a)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.tooltip"),
                r = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || n.data("bs.tooltip", o = new i(this, r)), "string" == typeof e && o[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var o = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            var h = this.getPosition(),
                u = r[0].offsetWidth,
                p = r[0].offsetHeight;
            if (c) {
                var d = a,
                    f = this.options.container ? t(this.options.container) : this.$element.parent(),
                    g = this.getPosition(f);
                a = "bottom" == a && h.bottom + p > g.bottom ? "top" : "top" == a && h.top - p < g.top ? "bottom" : "right" == a && h.right + u > g.width ? "left" : "left" == a && h.left - u < g.left ? "right" : a, r.removeClass(d).addClass(a)
            }
            var m = this.getCalculatedOffset(a, h, u, p);
            this.applyPlacement(m, a);
            var v = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            o = n[0].offsetWidth,
            r = n[0].offsetHeight,
            s = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top = e.top + s, e.left = e.left + a, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            c = n[0].offsetHeight;
        "top" == i && c != r && (e.top = e.top + r - c);
        var h = this.getViewportAdjustedDelta(i, e, l, c);
        h.left ? e.left += h.left : e.top += h.top;
        var u = /top|bottom/.test(i),
            p = u ? 2 * h.left - o + l : 2 * h.top - r + c,
            d = u ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(p, n[0][d], u)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function n() {
            "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this,
            r = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            n = "BODY" == i.tagName,
            o = i.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = n ? {
                top: 0,
                left: 0
            } : e.offset(),
            s = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, s, a, r)
    }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + n;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var c = e.left - r,
                h = e.left + r + i;
            c < s.left ? o.left = s.left - c : h > s.width && (o.left = s.left + s.width - h)
        }
        return o
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type)
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.popover"),
                r = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || n.data("bs.popover", o = new i(this, r)), "string" == typeof e && o[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.4", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e, n) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.modal"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new i(this, s)), "string" == typeof e ? r[e](n) : s.show && r.show(n)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var n = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var n = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var n = t(this),
            o = n.attr("href"),
            r = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, r.data(), n.data());
        n.is("a") && i.preventDefault(), r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        n = function(e) {
            t(e).on("click", i, this.close)
        };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        function i() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery),
function(t) {
    "function" == typeof define && define.amd ? define("pnotify", ["jquery"], t) : t(jQuery)
}(function(t) {
    var e, i, n = {
            dir1: "down",
            dir2: "left",
            push: "bottom",
            spacing1: 25,
            spacing2: 25,
            context: t("body")
        },
        o = t(window),
        r = function() {
            i = t("body"), PNotify.prototype.options.stack.context = i, o = t(window), o.bind("resize", function() {
                e && clearTimeout(e), e = setTimeout(function() {
                    PNotify.positionAll(!0)
                }, 10)
            })
        };
    return PNotify = function(t) {
        this.parseOptions(t), this.init()
    }, t.extend(PNotify.prototype, {
        version: "2.0.1",
        options: {
            title: !1,
            title_escape: !1,
            text: !1,
            text_escape: !1,
            styling: "bootstrap3",
            addclass: "",
            cornerclass: "",
            auto_display: !0,
            width: "300px",
            min_height: "16px",
            type: "notice",
            icon: !0,
            opacity: 1,
            animation: "fade",
            animate_speed: "slow",
            position_animate_speed: 500,
            shadow: !0,
            hide: !0,
            delay: 8e3,
            mouse_reset: !0,
            remove: !0,
            insert_brs: !0,
            destroy: !0,
            stack: n
        },
        modules: {},
        runModules: function(t, e) {
            var i;
            for (var n in this.modules) i = "object" == typeof e && n in e ? e[n] : e, "function" == typeof this.modules[n][t] && this.modules[n][t](this, "object" == typeof this.options[n] ? this.options[n] : {}, i)
        },
        state: "initializing",
        timer: null,
        styles: null,
        elem: null,
        container: null,
        title_container: null,
        text_container: null,
        animating: !1,
        timerHide: !1,
        init: function() {
            var e = this;
            return this.modules = {}, t.extend(!0, this.modules, PNotify.prototype.modules), this.styles = "object" == typeof this.options.styling ? this.options.styling : PNotify.styling[this.options.styling], this.elem = t("<div />", {
                "class": "ui-pnotify " + this.options.addclass,
                css: {
                    display: "none"
                },
                mouseenter: function() {
                    if (e.options.mouse_reset && "out" === e.animating) {
                        if (!e.timerHide) return;
                        e.cancelRemove()
                    }
                    e.options.hide && e.options.mouse_reset && e.cancelRemove()
                },
                mouseleave: function() {
                    e.options.hide && e.options.mouse_reset && e.queueRemove(), PNotify.positionAll()
                }
            }), this.container = t("<div />", {
                "class": this.styles.container + " ui-pnotify-container " + ("error" === this.options.type ? this.styles.error : "info" === this.options.type ? this.styles.info : "success" === this.options.type ? this.styles.success : this.styles.notice)
            }).appendTo(this.elem), "" !== this.options.cornerclass && this.container.removeClass("ui-corner-all").addClass(this.options.cornerclass), this.options.shadow && this.container.addClass("ui-pnotify-shadow"), this.options.icon !== !1 && t("<div />", {
                "class": "ui-pnotify-icon"
            }).append(t("<span />", {
                "class": this.options.icon === !0 ? "error" === this.options.type ? this.styles.error_icon : "info" === this.options.type ? this.styles.info_icon : "success" === this.options.type ? this.styles.success_icon : this.styles.notice_icon : this.options.icon
            })).prependTo(this.container), this.title_container = t("<h4 />", {
                "class": "ui-pnotify-title"
            }).appendTo(this.container), this.options.title === !1 ? this.title_container.hide() : this.options.title_escape ? this.title_container.text(this.options.title) : this.title_container.html(this.options.title), this.text_container = t("<div />", {
                "class": "ui-pnotify-text"
            }).appendTo(this.container), this.options.text === !1 ? this.text_container.hide() : this.options.text_escape ? this.text_container.text(this.options.text) : this.text_container.html(this.options.insert_brs ? String(this.options.text).replace(/\n/g, "<br />") : this.options.text), "string" == typeof this.options.width && this.elem.css("width", this.options.width), "string" == typeof this.options.min_height && this.container.css("min-height", this.options.min_height), PNotify.notices = "top" === this.options.stack.push ? t.merge([this], PNotify.notices) : t.merge(PNotify.notices, [this]), "top" === this.options.stack.push && this.queuePosition(!1, 1), this.options.stack.animation = !1, this.runModules("init"), this.options.auto_display && this.open(), this
        },
        update: function(e) {
            var i = this.options;
            return this.parseOptions(i, e), this.options.cornerclass !== i.cornerclass && this.container.removeClass("ui-corner-all " + i.cornerclass).addClass(this.options.cornerclass), this.options.shadow !== i.shadow && (this.options.shadow ? this.container.addClass("ui-pnotify-shadow") : this.container.removeClass("ui-pnotify-shadow")), this.options.addclass === !1 ? this.elem.removeClass(i.addclass) : this.options.addclass !== i.addclass && this.elem.removeClass(i.addclass).addClass(this.options.addclass), this.options.title === !1 ? this.title_container.slideUp("fast") : this.options.title !== i.title && (this.options.title_escape ? this.title_container.text(this.options.title) : this.title_container.html(this.options.title), i.title === !1 && this.title_container.slideDown(200)), this.options.text === !1 ? this.text_container.slideUp("fast") : this.options.text !== i.text && (this.options.text_escape ? this.text_container.text(this.options.text) : this.text_container.html(this.options.insert_brs ? String(this.options.text).replace(/\n/g, "<br />") : this.options.text), i.text === !1 && this.text_container.slideDown(200)), this.options.type !== i.type && this.container.removeClass(this.styles.error + " " + this.styles.notice + " " + this.styles.success + " " + this.styles.info).addClass("error" === this.options.type ? this.styles.error : "info" === this.options.type ? this.styles.info : "success" === this.options.type ? this.styles.success : this.styles.notice), (this.options.icon !== i.icon || this.options.icon === !0 && this.options.type !== i.type) && (this.container.find("div.ui-pnotify-icon").remove(), this.options.icon !== !1 && t("<div />", {
                "class": "ui-pnotify-icon"
            }).append(t("<span />", {
                "class": this.options.icon === !0 ? "error" === this.options.type ? this.styles.error_icon : "info" === this.options.type ? this.styles.info_icon : "success" === this.options.type ? this.styles.success_icon : this.styles.notice_icon : this.options.icon
            })).prependTo(this.container)), this.options.width !== i.width && this.elem.animate({
                width: this.options.width
            }), this.options.min_height !== i.min_height && this.container.animate({
                minHeight: this.options.min_height
            }), this.options.opacity !== i.opacity && this.elem.fadeTo(this.options.animate_speed, this.options.opacity), this.options.hide ? i.hide || this.queueRemove() : this.cancelRemove(), this.queuePosition(!0), this.runModules("update", i), this
        },
        open: function() {
            this.state = "opening", this.runModules("beforeOpen");
            var t = this;
            return this.elem.parent().length || this.elem.appendTo(this.options.stack.context ? this.options.stack.context : i), "top" !== this.options.stack.push && this.position(!0), "fade" === this.options.animation || "fade" === this.options.animation.effect_in ? this.elem.show().fadeTo(0, 0).hide() : 1 !== this.options.opacity && this.elem.show().fadeTo(0, this.options.opacity).hide(), this.animateIn(function() {
                t.queuePosition(!0), t.options.hide && t.queueRemove(), t.state = "open", t.runModules("afterOpen")
            }), this
        },
        remove: function(e) {
            this.state = "closing", this.timerHide = !!e, this.runModules("beforeClose");
            var i = this;
            return this.timer && (window.clearTimeout(this.timer), this.timer = null), this.animateOut(function() {
                if (i.state = "closed", i.runModules("afterClose"), i.queuePosition(!0), i.options.remove && i.elem.detach(), i.runModules("beforeDestroy"), i.options.destroy && null !== PNotify.notices) {
                    var e = t.inArray(i, PNotify.notices); - 1 !== e && PNotify.notices.splice(e, 1)
                }
                i.runModules("afterDestroy")
            }), this
        },
        get: function() {
            return this.elem
        },
        parseOptions: function(e, i) {
            this.options = t.extend(!0, {}, PNotify.prototype.options), this.options.stack = PNotify.prototype.options.stack;
            var n, o = [e, i];
            for (var r in o) {
                if (n = o[r], "undefined" == typeof n) break;
                if ("object" != typeof n) this.options.text = n;
                else
                    for (var s in n) this.modules[s] ? t.extend(!0, this.options[s], n[s]) : this.options[s] = n[s]
            }
        },
        animateIn: function(t) {
            this.animating = "in";
            var e;
            e = "undefined" != typeof this.options.animation.effect_in ? this.options.animation.effect_in : this.options.animation, "none" === e ? (this.elem.show(), t()) : "show" === e ? this.elem.show(this.options.animate_speed, t) : "fade" === e ? this.elem.show().fadeTo(this.options.animate_speed, this.options.opacity, t) : "slide" === e ? this.elem.slideDown(this.options.animate_speed, t) : "function" == typeof e ? e("in", t, this.elem) : this.elem.show(e, "object" == typeof this.options.animation.options_in ? this.options.animation.options_in : {}, this.options.animate_speed, t), this.elem.parent().hasClass("ui-effects-wrapper") && this.elem.parent().css({
                position: "fixed",
                overflow: "visible"
            }), "slide" !== e && this.elem.css("overflow", "visible"), this.container.css("overflow", "hidden")
        },
        animateOut: function(t) {
            this.animating = "out";
            var e;
            e = "undefined" != typeof this.options.animation.effect_out ? this.options.animation.effect_out : this.options.animation, "none" === e ? (this.elem.hide(), t()) : "show" === e ? this.elem.hide(this.options.animate_speed, t) : "fade" === e ? this.elem.fadeOut(this.options.animate_speed, t) : "slide" === e ? this.elem.slideUp(this.options.animate_speed, t) : "function" == typeof e ? e("out", t, this.elem) : this.elem.hide(e, "object" == typeof this.options.animation.options_out ? this.options.animation.options_out : {}, this.options.animate_speed, t), this.elem.parent().hasClass("ui-effects-wrapper") && this.elem.parent().css({
                position: "fixed",
                overflow: "visible"
            }), "slide" !== e && this.elem.css("overflow", "visible"), this.container.css("overflow", "hidden")
        },
        position: function(t) {
            var e = this.options.stack,
                n = this.elem;
            if (n.parent().hasClass("ui-effects-wrapper") && (n = this.elem.css({
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0"
                }).parent()), "undefined" == typeof e.context && (e.context = i), e) {
                "number" != typeof e.nextpos1 && (e.nextpos1 = e.firstpos1), "number" != typeof e.nextpos2 && (e.nextpos2 = e.firstpos2), "number" != typeof e.addpos2 && (e.addpos2 = 0);
                var r = "none" === n.css("display");
                if (!r || t) {
                    var s, a, l, c = {};
                    switch (e.dir1) {
                        case "down":
                            l = "top";
                            break;
                        case "up":
                            l = "bottom";
                            break;
                        case "left":
                            l = "right";
                            break;
                        case "right":
                            l = "left"
                    }
                    s = parseInt(n.css(l).replace(/(?:\..*|[^0-9.])/g, "")), isNaN(s) && (s = 0), "undefined" != typeof e.firstpos1 || r || (e.firstpos1 = s, e.nextpos1 = e.firstpos1);
                    var h;
                    switch (e.dir2) {
                        case "down":
                            h = "top";
                            break;
                        case "up":
                            h = "bottom";
                            break;
                        case "left":
                            h = "right";
                            break;
                        case "right":
                            h = "left"
                    }
                    if (a = parseInt(n.css(h).replace(/(?:\..*|[^0-9.])/g, "")), isNaN(a) && (a = 0), "undefined" != typeof e.firstpos2 || r || (e.firstpos2 = a, e.nextpos2 = e.firstpos2), ("down" === e.dir1 && e.nextpos1 + n.height() > (e.context.is(i) ? o.height() : e.context.prop("scrollHeight")) || "up" === e.dir1 && e.nextpos1 + n.height() > (e.context.is(i) ? o.height() : e.context.prop("scrollHeight")) || "left" === e.dir1 && e.nextpos1 + n.width() > (e.context.is(i) ? o.width() : e.context.prop("scrollWidth")) || "right" === e.dir1 && e.nextpos1 + n.width() > (e.context.is(i) ? o.width() : e.context.prop("scrollWidth"))) && (e.nextpos1 = e.firstpos1, e.nextpos2 += e.addpos2 + ("undefined" == typeof e.spacing2 ? 25 : e.spacing2), e.addpos2 = 0), e.animation && e.nextpos2 < a) switch (e.dir2) {
                        case "down":
                            c.top = e.nextpos2 + "px";
                            break;
                        case "up":
                            c.bottom = e.nextpos2 + "px";
                            break;
                        case "left":
                            c.right = e.nextpos2 + "px";
                            break;
                        case "right":
                            c.left = e.nextpos2 + "px"
                    } else "number" == typeof e.nextpos2 && n.css(h, e.nextpos2 + "px");
                    switch (e.dir2) {
                        case "down":
                        case "up":
                            n.outerHeight(!0) > e.addpos2 && (e.addpos2 = n.height());
                            break;
                        case "left":
                        case "right":
                            n.outerWidth(!0) > e.addpos2 && (e.addpos2 = n.width())
                    }
                    if ("number" == typeof e.nextpos1)
                        if (e.animation && (s > e.nextpos1 || c.top || c.bottom || c.right || c.left)) switch (e.dir1) {
                            case "down":
                                c.top = e.nextpos1 + "px";
                                break;
                            case "up":
                                c.bottom = e.nextpos1 + "px";
                                break;
                            case "left":
                                c.right = e.nextpos1 + "px";
                                break;
                            case "right":
                                c.left = e.nextpos1 + "px"
                        } else n.css(l, e.nextpos1 + "px");
                    switch ((c.top || c.bottom || c.right || c.left) && n.animate(c, {
                        duration: this.options.position_animate_speed,
                        queue: !1
                    }), e.dir1) {
                        case "down":
                        case "up":
                            e.nextpos1 += n.height() + ("undefined" == typeof e.spacing1 ? 25 : e.spacing1);
                            break;
                        case "left":
                        case "right":
                            e.nextpos1 += n.width() + ("undefined" == typeof e.spacing1 ? 25 : e.spacing1)
                    }
                }
                return this
            }
        },
        queuePosition: function(t, i) {
            return e && clearTimeout(e), i || (i = 10), e = setTimeout(function() {
                PNotify.positionAll(t)
            }, i), this
        },
        cancelRemove: function() {
            return this.timer && window.clearTimeout(this.timer), "closing" === this.state && (this.elem.stop(!0), this.state = "open", this.animating = "in", this.elem.css("height", "auto").animate({
                width: this.options.width,
                opacity: this.options.opacity
            }, "fast")), this
        },
        queueRemove: function() {
            var t = this;
            return this.cancelRemove(), this.timer = window.setTimeout(function() {
                t.remove(!0)
            }, isNaN(this.options.delay) ? 0 : this.options.delay), this
        }
    }), t.extend(PNotify, {
        notices: [],
        removeAll: function() {
            t.each(PNotify.notices, function() {
                this.remove && this.remove()
            })
        },
        positionAll: function(i) {
            e && clearTimeout(e), e = null, t.each(PNotify.notices, function() {
                var t = this.options.stack;
                t && (t.nextpos1 = t.firstpos1, t.nextpos2 = t.firstpos2, t.addpos2 = 0, t.animation = i)
            }), t.each(PNotify.notices, function() {
                this.position()
            })
        },
        styling: {
            jqueryui: {
                container: "ui-widget ui-widget-content ui-corner-all",
                notice: "ui-state-highlight",
                notice_icon: "ui-icon ui-icon-info",
                info: "",
                info_icon: "ui-icon ui-icon-info",
                success: "ui-state-default",
                success_icon: "ui-icon ui-icon-circle-check",
                error: "ui-state-error",
                error_icon: "ui-icon ui-icon-alert"
            },
            bootstrap2: {
                container: "alert",
                notice: "",
                notice_icon: "icon-exclamation-sign",
                info: "alert-info",
                info_icon: "icon-info-sign",
                success: "alert-success",
                success_icon: "icon-ok-sign",
                error: "alert-error",
                error_icon: "icon-warning-sign"
            },
            bootstrap3: {
                container: "alert",
                notice: "alert-warning",
                notice_icon: "glyphicon glyphicon-exclamation-sign",
                info: "alert-info",
                info_icon: "glyphicon glyphicon-info-sign",
                success: "alert-success",
                success_icon: "glyphicon glyphicon-ok-sign",
                error: "alert-danger",
                error_icon: "glyphicon glyphicon-warning-sign"
            }
        }
    }), PNotify.styling.fontawesome = t.extend({}, PNotify.styling.bootstrap3), t.extend(PNotify.styling.fontawesome, {
        notice_icon: "fa fa-exclamation-circle",
        info_icon: "fa fa-info",
        success_icon: "fa fa-check",
        error_icon: "fa fa-warning"
    }), document.body ? r() : t(r), PNotify
}),
function(t) {
    "function" == typeof define && define.amd ? define("pnotify.buttons", ["jquery", "pnotify"], t) : t(jQuery, PNotify)
}(function(t, e) {
    e.prototype.options.buttons = {
        closer: !0,
        closer_hover: !0,
        sticker: !0,
        sticker_hover: !0,
        labels: {
            close: "Close",
            stick: "Stick"
        }
    }, e.prototype.modules.buttons = {
        myOptions: null,
        closer: null,
        sticker: null,
        init: function(e, i) {
            var n = this;
            this.myOptions = i, e.elem.on({
                mouseenter: function() {
                    !n.myOptions.sticker || e.options.nonblock && e.options.nonblock.nonblock || n.sticker.trigger("pnotify_icon").css("visibility", "visible"), !n.myOptions.closer || e.options.nonblock && e.options.nonblock.nonblock || n.closer.css("visibility", "visible")
                },
                mouseleave: function() {
                    n.myOptions.sticker_hover && n.sticker.css("visibility", "hidden"), n.myOptions.closer_hover && n.closer.css("visibility", "hidden")
                }
            }), this.sticker = t("<div />", {
                "class": "ui-pnotify-sticker",
                css: {
                    cursor: "pointer",
                    visibility: i.sticker_hover ? "hidden" : "visible"
                },
                click: function() {
                    e.options.hide = !e.options.hide, e.options.hide ? e.queueRemove() : e.cancelRemove(), t(this).trigger("pnotify_icon")
                }
            }).bind("pnotify_icon", function() {
                t(this).children().removeClass(e.styles.pin_up + " " + e.styles.pin_down).addClass(e.options.hide ? e.styles.pin_up : e.styles.pin_down)
            }).append(t("<span />", {
                "class": e.styles.pin_up,
                title: i.labels.stick
            })).prependTo(e.container), (!i.sticker || e.options.nonblock && e.options.nonblock.nonblock) && this.sticker.css("display", "none"), this.closer = t("<div />", {
                "class": "ui-pnotify-closer",
                css: {
                    cursor: "pointer",
                    visibility: i.closer_hover ? "hidden" : "visible"
                },
                click: function() {
                    e.remove(!1), n.sticker.css("visibility", "hidden"), n.closer.css("visibility", "hidden")
                }
            }).append(t("<span />", {
                "class": e.styles.closer,
                title: i.labels.close
            })).prependTo(e.container), (!i.closer || e.options.nonblock && e.options.nonblock.nonblock) && this.closer.css("display", "none")
        },
        update: function(t, e) {
            this.myOptions = e, !e.closer || t.options.nonblock && t.options.nonblock.nonblock ? this.closer.css("display", "none") : e.closer && this.closer.css("display", "block"), !e.sticker || t.options.nonblock && t.options.nonblock.nonblock ? this.sticker.css("display", "none") : e.sticker && this.sticker.css("display", "block"), this.sticker.trigger("pnotify_icon"), e.sticker_hover ? this.sticker.css("visibility", "hidden") : t.options.nonblock && t.options.nonblock.nonblock || this.sticker.css("visibility", "visible"), e.closer_hover ? this.closer.css("visibility", "hidden") : t.options.nonblock && t.options.nonblock.nonblock || this.closer.css("visibility", "visible")
        }
    }, t.extend(e.styling.jqueryui, {
        closer: "ui-icon ui-icon-close",
        pin_up: "ui-icon ui-icon-pin-w",
        pin_down: "ui-icon ui-icon-pin-s"
    }), t.extend(e.styling.bootstrap2, {
        closer: "icon-remove",
        pin_up: "icon-pause",
        pin_down: "icon-play"
    }), t.extend(e.styling.bootstrap3, {
        closer: "glyphicon glyphicon-remove",
        pin_up: "glyphicon glyphicon-pause",
        pin_down: "glyphicon glyphicon-play"
    }), t.extend(e.styling.fontawesome, {
        closer: "fa fa-times",
        pin_up: "fa fa-pause",
        pin_down: "fa fa-play"
    })
}),
function(t) {
    "function" == typeof define && define.amd ? define("pnotify.callbacks", ["jquery", "pnotify"], t) : t(jQuery, PNotify)
}(function(t, e) {
    var i = e.prototype.init,
        n = e.prototype.open,
        o = e.prototype.remove;
    e.prototype.init = function() {
        this.options.before_init && this.options.before_init(this.options), i.apply(this, arguments), this.options.after_init && this.options.after_init(this)
    }, e.prototype.open = function() {
        var t;
        this.options.before_open && (t = this.options.before_open(this)), t !== !1 && (n.apply(this, arguments), this.options.after_open && this.options.after_open(this))
    }, e.prototype.remove = function(t) {
        var e;
        this.options.before_close && (e = this.options.before_close(this, t)), e !== !1 && (o.apply(this, arguments), this.options.after_close && this.options.after_close(this, t))
    }
}),
function(t) {
    "function" == typeof define && define.amd ? define("pnotify.confirm", ["jquery", "pnotify"], t) : t(jQuery, PNotify)
}(function(t, e) {
    e.prototype.options.confirm = {
        confirm: !1,
        prompt: !1,
        prompt_class: "",
        prompt_default: "",
        prompt_multi_line: !1,
        align: "right",
        buttons: [{
            text: "Ok",
            addClass: "",
            promptTrigger: !0,
            click: function(t, e) {
                t.remove(), t.get().trigger("pnotify.confirm", [t, e])
            }
        }, {
            text: "Cancel",
            addClass: "",
            click: function(t) {
                t.remove(), t.get().trigger("pnotify.cancel", t)
            }
        }]
    }, e.prototype.modules.confirm = {
        container: null,
        prompt: null,
        init: function(e, i) {
            this.container = t('<div style="margin-top:5px;clear:both;" />').css("text-align", i.align).appendTo(e.container), i.confirm || i.prompt ? this.makeDialog(e, i) : this.container.hide()
        },
        update: function(t, e) {
            e.confirm ? (this.makeDialog(t, e), this.container.show()) : this.container.hide().empty()
        },
        afterOpen: function(t, e) {
            e.prompt && this.prompt.focus()
        },
        makeDialog: function(e, i) {
            var n, o, r = !1,
                s = this;
            this.container.empty(), i.prompt && (this.prompt = t("<" + (i.prompt_multi_line ? 'textarea rows="5"' : 'input type="text"') + ' style="margin-bottom:5px;clear:both;" />').addClass(e.styles.input + " " + i.prompt_class).val(i.prompt_default).appendTo(this.container));
            for (var a in i.buttons) n = i.buttons[a], r ? this.container.append(" ") : r = !0, o = t('<button type="button" />').addClass(e.styles.btn + " " + n.addClass).text(n.text).appendTo(this.container).on("click", function(t) {
                return function() {
                    "function" == typeof t.click && t.click(e, i.prompt ? s.prompt.val() : null)
                }
            }(n)), i.prompt && !i.prompt_multi_line && n.promptTrigger && this.prompt.keypress(function(t) {
                return function(e) {
                    13 == e.keyCode && t.click()
                }
            }(o)), e.styles.text && o.wrapInner('<span class="' + e.styles.text + '"></span>'), e.styles.btnhover && o.hover(function(t) {
                return function() {
                    t.addClass(e.styles.btnhover)
                }
            }(o), function(t) {
                return function() {
                    t.removeClass(e.styles.btnhover)
                }
            }(o)), e.styles.btnactive && o.on("mousedown", function(t) {
                return function() {
                    t.addClass(e.styles.btnactive)
                }
            }(o)).on("mouseup", function(t) {
                return function() {
                    t.removeClass(e.styles.btnactive)
                }
            }(o)), e.styles.btnfocus && o.on("focus", function(t) {
                return function() {
                    t.addClass(e.styles.btnfocus)
                }
            }(o)).on("blur", function(t) {
                return function() {
                    t.removeClass(e.styles.btnfocus)
                }
            }(o))
        }
    }, t.extend(e.styling.jqueryui, {
        btn: "ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only",
        btnhover: "ui-state-hover",
        btnactive: "ui-state-active",
        btnfocus: "ui-state-focus",
        input: "",
        text: "ui-button-text"
    }), t.extend(e.styling.bootstrap2, {
        btn: "btn",
        input: ""
    }), t.extend(e.styling.bootstrap3, {
        btn: "btn btn-default",
        input: "form-control"
    }), t.extend(e.styling.fontawesome, {
        btn: "btn btn-default",
        input: "form-control"
    })
}),
function(t) {
    "function" == typeof define && define.amd ? define("pnotify.desktop", ["jquery", "pnotify"], t) : t(jQuery, PNotify)
}(function(t, e) {
    var i, n = function(t, e) {
        return (n = "Notification" in window ? function(t, e) {
            return new Notification(t, e)
        } : "mozNotification" in navigator ? function(t, e) {
            return navigator.mozNotification.createNotification(t, e.body, e.icon).show()
        } : "webkitNotifications" in window ? function(t, e) {
            return window.webkitNotifications.createNotification(e.icon, t, e.body)
        } : function() {
            return null
        })(t, e)
    };
    e.prototype.options.desktop = {
        desktop: !1,
        icon: null,
        tag: null
    }, e.prototype.modules.desktop = {
        tag: null,
        icon: null,
        genNotice: function(t, e) {
            this.icon = null === e.icon ? "http://sciactive.com/pnotify/includes/desktop/" + t.options.type + ".png" : e.icon === !1 ? null : e.icon, (null === this.tag || null !== e.tag) && (this.tag = null === e.tag ? "PNotify-" + Math.round(1e6 * Math.random()) : e.tag), t.desktop = n(t.options.title, {
                icon: this.icon,
                body: t.options.text,
                tag: this.tag
            }), "close" in t.desktop || (t.desktop.close = function() {
                t.desktop.cancel()
            }), t.desktop.onclick = function() {
                t.elem.trigger("click")
            }, t.desktop.onclose = function() {
                "closing" !== t.state && "closed" !== t.state && t.remove()
            }
        },
        init: function(t, n) {
            n.desktop && (i = e.desktop.checkPermission(), 0 == i && this.genNotice(t, n))
        },
        update: function(t, e) {
            0 == i && e.desktop && this.genNotice(t, e)
        },
        beforeOpen: function(t, e) {
            0 == i && e.desktop && t.elem.css({
                left: "-10000px",
                display: "none"
            })
        },
        afterOpen: function(t, e) {
            0 == i && e.desktop && (t.elem.css({
                left: "-10000px",
                display: "none"
            }), "show" in t.desktop && t.desktop.show())
        },
        beforeClose: function(t, e) {
            0 == i && e.desktop && t.elem.css({
                left: "-10000px",
                display: "none"
            })
        },
        afterClose: function(t, e) {
            0 == i && e.desktop && (t.elem.css({
                left: "-10000px",
                display: "none"
            }), t.desktop.close())
        }
    }, e.desktop = {
        permission: function() {
            "undefined" != typeof Notification && "requestPermission" in Notification ? Notification.requestPermission() : "webkitNotifications" in window && window.webkitNotifications.requestPermission()
        },
        checkPermission: function() {
            return "undefined" != typeof Notification && "permission" in Notification ? "granted" == Notification.permission ? 0 : 1 : "webkitNotifications" in window ? window.webkitNotifications.checkPermission() : 1
        }
    }, i = e.desktop.checkPermission()
}),
function(t) {
    "function" == typeof define && define.amd ? define("pnotify.history", ["jquery", "pnotify"], t) : t(jQuery, PNotify)
}(function(t, e) {
    var i, n;
    t(function() {
        t("body").on("pnotify.history-all", function() {
            t.each(e.notices, function() {
                this.modules.history.inHistory && (this.elem.is(":visible") ? this.options.hide && this.queueRemove() : this.open && this.open())
            })
        }).on("pnotify.history-last", function() {
            var t, i = "top" === e.prototype.options.stack.push,
                n = i ? 0 : -1;
            do {
                if (t = -1 === n ? e.notices.slice(n) : e.notices.slice(n, n + 1), !t[0]) return !1;
                n = i ? n + 1 : n - 1
            } while (!t[0].modules.history.inHistory || t[0].elem.is(":visible"));
            t[0].open && t[0].open()
        })
    }), e.prototype.options.history = {
        history: !0,
        menu: !1,
        fixed: !0,
        maxonscreen: 1 / 0,
        labels: {
            redisplay: "Redisplay",
            all: "All",
            last: "Last"
        }
    }, e.prototype.modules.history = {
        inHistory: !1,
        init: function(e, o) {
            if (e.options.destroy = !1, this.inHistory = o.history, o.menu && "undefined" == typeof i) {
                i = t("<div />", {
                    "class": "ui-pnotify-history-container " + e.styles.hi_menu,
                    mouseleave: function() {
                        i.animate({
                            top: "-" + n + "px"
                        }, {
                            duration: 100,
                            queue: !1
                        })
                    }
                }).append(t("<div />", {
                    "class": "ui-pnotify-history-header",
                    text: o.labels.redisplay
                })).append(t("<button />", {
                    "class": "ui-pnotify-history-all " + e.styles.hi_btn,
                    text: o.labels.all,
                    mouseenter: function() {
                        t(this).addClass(e.styles.hi_btnhov)
                    },
                    mouseleave: function() {
                        t(this).removeClass(e.styles.hi_btnhov)
                    },
                    click: function() {
                        return t(this).trigger("pnotify.history-all"), !1
                    }
                })).append(t("<button />", {
                    "class": "ui-pnotify-history-last " + e.styles.hi_btn,
                    text: o.labels.last,
                    mouseenter: function() {
                        t(this).addClass(e.styles.hi_btnhov)
                    },
                    mouseleave: function() {
                        t(this).removeClass(e.styles.hi_btnhov)
                    },
                    click: function() {
                        return t(this).trigger("pnotify.history-last"), !1
                    }
                })).appendTo("body");
                var r = t("<span />", {
                    "class": "ui-pnotify-history-pulldown " + e.styles.hi_hnd,
                    mouseenter: function() {
                        i.animate({
                            top: "0"
                        }, {
                            duration: 100,
                            queue: !1
                        })
                    }
                }).appendTo(i);
                console.log(r.offset()), n = r.offset().top + 2, i.css({
                    top: "-" + n + "px"
                }), o.fixed && i.addClass("ui-pnotify-history-fixed")
            }
        },
        update: function(t, e) {
            this.inHistory = e.history, e.fixed && i ? i.addClass("ui-pnotify-history-fixed") : i && i.removeClass("ui-pnotify-history-fixed")
        },
        beforeOpen: function(i, n) {
            if (e.notices && e.notices.length > n.maxonscreen) {
                var o;
                o = "top" !== i.options.stack.push ? e.notices.slice(0, e.notices.length - n.maxonscreen) : e.notices.slice(n.maxonscreen, e.notices.length), t.each(o, function() {
                    this.remove && this.remove()
                })
            }
        }
    }, t.extend(e.styling.jqueryui, {
        hi_menu: "ui-state-default ui-corner-bottom",
        hi_btn: "ui-state-default ui-corner-all",
        hi_btnhov: "ui-state-hover",
        hi_hnd: "ui-icon ui-icon-grip-dotted-horizontal"
    }), t.extend(e.styling.bootstrap2, {
        hi_menu: "well",
        hi_btn: "btn",
        hi_btnhov: "",
        hi_hnd: "icon-chevron-down"
    }), t.extend(e.styling.bootstrap3, {
        hi_menu: "well",
        hi_btn: "btn btn-default",
        hi_btnhov: "",
        hi_hnd: "glyphicon glyphicon-chevron-down"
    }), t.extend(e.styling.fontawesome, {
        hi_menu: "well",
        hi_btn: "btn btn-default",
        hi_btnhov: "",
        hi_hnd: "fa fa-chevron-down"
    })
}),
function(t) {
    "function" == typeof define && define.amd ? define("pnotify.nonblock", ["jquery", "pnotify"], t) : t(jQuery, PNotify)
}(function(t, e) {
    var i, n = /^on/,
        o = /^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/,
        r = /^(focus|blur|select|change|reset)$|^key(press|down|up)$/,
        s = /^(scroll|resize|(un)?load|abort|error)$/,
        a = function(e, i) {
            var a;
            if (e = e.toLowerCase(), document.createEvent && this.dispatchEvent) {
                if (e = e.replace(n, ""), e.match(o) ? (t(this).offset(), a = document.createEvent("MouseEvents"), a.initMouseEvent(e, i.bubbles, i.cancelable, i.view, i.detail, i.screenX, i.screenY, i.clientX, i.clientY, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.button, i.relatedTarget)) : e.match(r) ? (a = document.createEvent("UIEvents"), a.initUIEvent(e, i.bubbles, i.cancelable, i.view, i.detail)) : e.match(s) && (a = document.createEvent("HTMLEvents"), a.initEvent(e, i.bubbles, i.cancelable)), !a) return;
                this.dispatchEvent(a)
            } else e.match(n) || (e = "on" + e), a = document.createEventObject(i), this.fireEvent(e, a)
        },
        l = function(e, n, o) {
            e.elem.css("display", "none");
            var r = document.elementFromPoint(n.clientX, n.clientY);
            e.elem.css("display", "block");
            var s = t(r),
                l = s.css("cursor");
            e.elem.css("cursor", "auto" !== l ? l : "default"), i && i.get(0) == r || (i && (a.call(i.get(0), "mouseleave", n.originalEvent), a.call(i.get(0), "mouseout", n.originalEvent)), a.call(r, "mouseenter", n.originalEvent), a.call(r, "mouseover", n.originalEvent)), a.call(r, o, n.originalEvent), i = s
        };
    e.prototype.options.nonblock = {
        nonblock: !1,
        nonblock_opacity: .2
    }, e.prototype.modules.nonblock = {
        myOptions: null,
        init: function(t, e) {
            var n = this;
            this.myOptions = e, t.elem.on({
                mouseenter: function(e) {
                    n.myOptions.nonblock && e.stopPropagation(), n.myOptions.nonblock && t.elem.stop().animate({
                        opacity: n.myOptions.nonblock_opacity
                    }, "fast")
                },
                mouseleave: function(e) {
                    n.myOptions.nonblock && e.stopPropagation(), i = null, t.elem.css("cursor", "auto"), n.myOptions.nonblock && "out" !== t.animating && t.elem.stop().animate({
                        opacity: t.options.opacity
                    }, "fast")
                },
                mouseover: function(t) {
                    n.myOptions.nonblock && t.stopPropagation()
                },
                mouseout: function(t) {
                    n.myOptions.nonblock && t.stopPropagation()
                },
                mousemove: function(e) {
                    n.myOptions.nonblock && (e.stopPropagation(), l(t, e, "onmousemove"))
                },
                mousedown: function(e) {
                    n.myOptions.nonblock && (e.stopPropagation(), e.preventDefault(), l(t, e, "onmousedown"))
                },
                mouseup: function(e) {
                    n.myOptions.nonblock && (e.stopPropagation(), e.preventDefault(), l(t, e, "onmouseup"))
                },
                click: function(e) {
                    n.myOptions.nonblock && (e.stopPropagation(), l(t, e, "onclick"))
                },
                dblclick: function(e) {
                    n.myOptions.nonblock && (e.stopPropagation(), l(t, e, "ondblclick"))
                }
            })
        },
        update: function(t, e) {
            this.myOptions = e
        }
    }
}),
function(t) {
    var e = {
            init: function(e) {
                var n = {
                    color: t(this).css("background-color"),
                    reach: 20,
                    speed: 1e3,
                    pause: 0,
                    glow: !0,
                    repeat: !0,
                    onHover: !1
                };
                return t(this).css({
                    "-moz-outline-radius": t(this).css("border-top-left-radius"),
                    "-webkit-outline-radius": t(this).css("border-top-left-radius"),
                    "outline-radius": t(this).css("border-top-left-radius")
                }), e && t.extend(n, e), n.color = t("<div style='background:" + n.color + "'></div>").css("background-color"), n.repeat !== !0 && !isNaN(n.repeat) && n.repeat > 0 && (n.repeat -= 1), this.each(function() {
                    n.onHover ? t(this).bind("mouseover", function() {
                        i(n, this, 0)
                    }).bind("mouseout", function() {
                        t(this).pulsate("destroy")
                    }) : i(n, this, 0)
                })
            },
            destroy: function() {
                return this.each(function() {
                    clearTimeout(this.timer), t(this).css("outline", 0)
                })
            }
        },
        i = function(e, o, r) {
            var s = e.reach,
                r = r > s ? 0 : r,
                a = (s - r) / s,
                l = e.color.split(","),
                c = "rgba(" + l[0].split("(")[1] + "," + l[1] + "," + l[2].split(")")[0] + "," + a + ")",
                h = {
                    outline: "2px solid " + c
                };
            e.glow ? (h["box-shadow"] = "0px 0px " + parseInt(r / 1.5) + "px " + c, userAgent = navigator.userAgent || "", /(chrome)[ \/]([\w.]+)/.test(userAgent.toLowerCase()) && (h["outline-offset"] = r + "px", h["outline-radius"] = "100 px")) : h["outline-offset"] = r + "px", t(o).css(h);
            var u = function() {
                if (r >= s && !e.repeat) return t(o).pulsate("destroy"), !1;
                if (r >= s && e.repeat !== !0 && !isNaN(e.repeat) && e.repeat > 0) e.repeat = e.repeat - 1;
                else if (e.pause && r >= s) return n(e, o, r + 1), !1;
                i(e, o, r + 1)
            };
            o.timer && clearTimeout(o.timer), o.timer = setTimeout(u, e.speed / s)
        },
        n = function(t, e, n) {
            innerfunc = function() {
                i(t, e, n)
            }, e.timer = setTimeout(innerfunc, t.pause)
        };
    t.fn.pulsate = function(i) {
        return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.pulsate") : e.init.apply(this, arguments)
    }
}(jQuery),
function(t) {
    "use strict";
    "object" == typeof exports ? module.exports = t(window.jQuery) : "function" == typeof define && define.amd ? define(["jquery"], t) : window.jQuery && !window.jQuery.fn.colorpicker && t(window.jQuery)
}(function(t) {
    "use strict";
    var e = function(e, i) {
        this.value = {
            h: 0,
            s: 0,
            b: 0,
            a: 1
        }, this.origFormat = null, i && t.extend(this.colors, i), e && (void 0 !== e.toLowerCase ? (e += "", this.setColor(e)) : void 0 !== e.h && (this.value = e))
    };
    e.prototype = {
        constructor: e,
        colors: {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32",
            transparent: "transparent"
        },
        _sanitizeNumber: function(t) {
            return "number" == typeof t ? t : isNaN(t) || null === t || "" === t || void 0 === t ? 1 : "" === t ? 0 : void 0 !== t.toLowerCase ? (t.match(/^\./) && (t = "0" + t), Math.ceil(100 * parseFloat(t)) / 100) : 1
        },
        isTransparent: function(t) {
            return t ? (t = t.toLowerCase().trim(), "transparent" === t || t.match(/#?00000000/) || t.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/)) : !1
        },
        rgbaIsTransparent: function(t) {
            return 0 === t.r && 0 === t.g && 0 === t.b && 0 === t.a
        },
        setColor: function(t) {
            t = t.toLowerCase().trim(), t && (this.value = this.isTransparent(t) ? {
                h: 0,
                s: 0,
                b: 0,
                a: 0
            } : this.stringToHSB(t) || {
                h: 0,
                s: 0,
                b: 0,
                a: 1
            })
        },
        stringToHSB: function(e) {
            e = e.toLowerCase();
            var i;
            "undefined" != typeof this.colors[e] && (e = this.colors[e], i = "alias");
            var n = this,
                o = !1;
            return t.each(this.stringParsers, function(t, r) {
                var s = r.re.exec(e),
                    a = s && r.parse.apply(n, [s]),
                    l = i || r.format || "rgba";
                return a ? (o = l.match(/hsla?/) ? n.RGBtoHSB.apply(n, n.HSLtoRGB.apply(n, a)) : n.RGBtoHSB.apply(n, a), n.origFormat = l, !1) : !0
            }), o
        },
        setHue: function(t) {
            this.value.h = 1 - t
        },
        setSaturation: function(t) {
            this.value.s = t
        },
        setBrightness: function(t) {
            this.value.b = 1 - t
        },
        setAlpha: function(t) {
            this.value.a = Math.round(parseInt(100 * (1 - t), 10) / 100 * 100) / 100
        },
        toRGB: function(t, e, i, n) {
            t || (t = this.value.h, e = this.value.s, i = this.value.b), t *= 360;
            var o, r, s, a, l;
            return t = t % 360 / 60, l = i * e, a = l * (1 - Math.abs(t % 2 - 1)), o = r = s = i - l, t = ~~t, o += [l, a, 0, 0, a, l][t], r += [a, l, l, a, 0, 0][t], s += [0, 0, a, l, l, a][t], {
                r: Math.round(255 * o),
                g: Math.round(255 * r),
                b: Math.round(255 * s),
                a: n || this.value.a
            }
        },
        toHex: function(t, e, i, n) {
            var o = this.toRGB(t, e, i, n);
            return this.rgbaIsTransparent(o) ? "transparent" : "#" + (1 << 24 | parseInt(o.r) << 16 | parseInt(o.g) << 8 | parseInt(o.b)).toString(16).substr(1)
        },
        toHSL: function(t, e, i, n) {
            t = t || this.value.h, e = e || this.value.s, i = i || this.value.b, n = n || this.value.a;
            var o = t,
                r = (2 - e) * i,
                s = e * i;
            return s /= r > 0 && 1 >= r ? r : 2 - r, r /= 2, s > 1 && (s = 1), {
                h: isNaN(o) ? 0 : o,
                s: isNaN(s) ? 0 : s,
                l: isNaN(r) ? 0 : r,
                a: isNaN(n) ? 0 : n
            }
        },
        toAlias: function(t, e, i, n) {
            var o = this.toHex(t, e, i, n);
            for (var r in this.colors)
                if (this.colors[r] === o) return r;
            return !1
        },
        RGBtoHSB: function(t, e, i, n) {
            t /= 255, e /= 255, i /= 255;
            var o, r, s, a;
            return s = Math.max(t, e, i), a = s - Math.min(t, e, i), o = 0 === a ? null : s === t ? (e - i) / a : s === e ? (i - t) / a + 2 : (t - e) / a + 4, o = (o + 360) % 6 * 60 / 360, r = 0 === a ? 0 : a / s, {
                h: this._sanitizeNumber(o),
                s: r,
                b: s,
                a: this._sanitizeNumber(n)
            }
        },
        HueToRGB: function(t, e, i) {
            return 0 > i ? i += 1 : i > 1 && (i -= 1), 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
        },
        HSLtoRGB: function(t, e, i, n) {
            0 > e && (e = 0);
            var o;
            o = .5 >= i ? i * (1 + e) : i + e - i * e;
            var r = 2 * i - o,
                s = t + 1 / 3,
                a = t,
                l = t - 1 / 3,
                c = Math.round(255 * this.HueToRGB(r, o, s)),
                h = Math.round(255 * this.HueToRGB(r, o, a)),
                u = Math.round(255 * this.HueToRGB(r, o, l));
            return [c, h, u, this._sanitizeNumber(n)]
        },
        toString: function(t) {
            t = t || "rgba";
            var e = !1;
            switch (t) {
                case "rgb":
                    return e = this.toRGB(), this.rgbaIsTransparent(e) ? "transparent" : "rgb(" + e.r + "," + e.g + "," + e.b + ")";
                case "rgba":
                    return e = this.toRGB(), "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a + ")";
                case "hsl":
                    return e = this.toHSL(), "hsl(" + Math.round(360 * e.h) + "," + Math.round(100 * e.s) + "%," + Math.round(100 * e.l) + "%)";
                case "hsla":
                    return e = this.toHSL(), "hsla(" + Math.round(360 * e.h) + "," + Math.round(100 * e.s) + "%," + Math.round(100 * e.l) + "%," + e.a + ")";
                case "hex":
                    return this.toHex();
                case "alias":
                    return this.toAlias() || this.toHex();
                default:
                    return e
            }
        },
        stringParsers: [{
            re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
            format: "rgb",
            parse: function(t) {
                return [t[1], t[2], t[3], 1]
            }
        }, {
            re: /rgb\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
            format: "rgb",
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], 1]
            }
        }, {
            re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function(t) {
                return [t[1], t[2], t[3], t[4]]
            }
        }, {
            re: /rgba\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        }, {
            re: /hsl\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
            format: "hsl",
            parse: function(t) {
                return [t[1] / 360, t[2] / 100, t[3] / 100, t[4]]
            }
        }, {
            re: /hsla\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
            format: "hsla",
            parse: function(t) {
                return [t[1] / 360, t[2] / 100, t[3] / 100, t[4]]
            }
        }, {
            re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            format: "hex",
            parse: function(t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), 1]
            }
        }, {
            re: /#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
            format: "hex",
            parse: function(t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), 1]
            }
        }],
        colorNameToHex: function(t) {
            return "undefined" != typeof this.colors[t.toLowerCase()] ? this.colors[t.toLowerCase()] : !1
        }
    };
    var i = {
            horizontal: !1,
            inline: !1,
            color: !1,
            format: !1,
            input: "input",
            container: !1,
            component: ".add-on, .input-group-addon",
            sliders: {
                saturation: {
                    maxLeft: 100,
                    maxTop: 100,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 0,
                    maxTop: 100,
                    callLeft: !1,
                    callTop: "setHue"
                },
                alpha: {
                    maxLeft: 0,
                    maxTop: 100,
                    callLeft: !1,
                    callTop: "setAlpha"
                }
            },
            slidersHorz: {
                saturation: {
                    maxLeft: 100,
                    maxTop: 100,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 100,
                    maxTop: 0,
                    callLeft: "setHue",
                    callTop: !1
                },
                alpha: {
                    maxLeft: 100,
                    maxTop: 0,
                    callLeft: "setAlpha",
                    callTop: !1
                }
            },
            template: '<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div><div class="colorpicker-selectors"></div></div>',
            align: "right",
            customClass: null,
            colorSelectors: null
        },
        n = function(n, o) {
            if (this.element = t(n).addClass("colorpicker-element"), this.options = t.extend(!0, {}, i, this.element.data(), o), this.component = this.options.component, this.component = this.component !== !1 ? this.element.find(this.component) : !1, this.component && 0 === this.component.length && (this.component = !1), this.container = this.options.container === !0 ? this.element : this.options.container, this.container = this.container !== !1 ? t(this.container) : !1, this.input = this.element.is("input") ? this.element : this.options.input ? this.element.find(this.options.input) : !1, this.input && 0 === this.input.length && (this.input = !1), this.color = new e(this.options.color !== !1 ? this.options.color : this.getValue(), this.options.colorSelectors), this.format = this.options.format !== !1 ? this.options.format : this.color.origFormat, this.options.color !== !1 && (this.updateInput(this.color), this.updateData(this.color)), this.picker = t(this.options.template), this.options.customClass && this.picker.addClass(this.options.customClass), this.picker.addClass(this.options.inline ? "colorpicker-inline colorpicker-visible" : "colorpicker-hidden"), this.options.horizontal && this.picker.addClass("colorpicker-horizontal"), ("rgba" === this.format || "hsla" === this.format || this.options.format === !1) && this.picker.addClass("colorpicker-with-alpha"), "right" === this.options.align && this.picker.addClass("colorpicker-right"), this.options.inline === !0 && this.picker.addClass("colorpicker-no-arrow"), this.options.colorSelectors) {
                var r = this;
                t.each(this.options.colorSelectors, function(e, i) {
                    var n = t("<i />").css("background-color", i).data("class", e);
                    n.click(function() {
                        r.setValue(t(this).css("background-color"))
                    }), r.picker.find(".colorpicker-selectors").append(n)
                }), this.picker.find(".colorpicker-selectors").show()
            }
            this.picker.on("mousedown.colorpicker touchstart.colorpicker", t.proxy(this.mousedown, this)), this.picker.appendTo(this.container ? this.container : t("body")), this.input !== !1 && (this.input.on({
                "keyup.colorpicker": t.proxy(this.keyup, this)
            }), this.input.on({
                "change.colorpicker": t.proxy(this.change, this)
            }), this.component === !1 && this.element.on({
                "focus.colorpicker": t.proxy(this.show, this)
            }), this.options.inline === !1 && this.element.on({
                "focusout.colorpicker": t.proxy(this.hide, this)
            })), this.component !== !1 && this.component.on({
                "click.colorpicker": t.proxy(this.show, this)
            }), this.input === !1 && this.component === !1 && this.element.on({
                "click.colorpicker": t.proxy(this.show, this)
            }), this.input !== !1 && this.component !== !1 && "color" === this.input.attr("type") && this.input.on({
                "click.colorpicker": t.proxy(this.show, this),
                "focus.colorpicker": t.proxy(this.show, this)
            }), this.update(), t(t.proxy(function() {
                this.element.trigger("create")
            }, this))
        };
    n.Color = e, n.prototype = {
        constructor: n,
        destroy: function() {
            this.picker.remove(), this.element.removeData("colorpicker", "color").off(".colorpicker"), this.input !== !1 && this.input.off(".colorpicker"), this.component !== !1 && this.component.off(".colorpicker"), this.element.removeClass("colorpicker-element"), this.element.trigger({
                type: "destroy"
            })
        },
        reposition: function() {
            if (this.options.inline !== !1 || this.options.container) return !1;
            var t = this.container && this.container[0] !== document.body ? "position" : "offset",
                e = this.component || this.element,
                i = e[t]();
            "right" === this.options.align && (i.left -= this.picker.outerWidth() - e.outerWidth()), this.picker.css({
                top: i.top + e.outerHeight(),
                left: i.left
            })
        },
        show: function(e) {
            return this.isDisabled() ? !1 : (this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"), this.reposition(), t(window).on("resize.colorpicker", t.proxy(this.reposition, this)), !e || this.hasInput() && "color" !== this.input.attr("type") || e.stopPropagation && e.preventDefault && (e.stopPropagation(), e.preventDefault()), !this.component && this.input || this.options.inline !== !1 || t(window.document).on({
                "mousedown.colorpicker": t.proxy(this.hide, this)
            }), void this.element.trigger({
                type: "showPicker",
                color: this.color
            }))
        },
        hide: function() {
            this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"), t(window).off("resize.colorpicker", this.reposition), t(document).off({
                "mousedown.colorpicker": this.hide
            }), this.update(), this.element.trigger({
                type: "hidePicker",
                color: this.color
            })
        },
        updateData: function(t) {
            return t = t || this.color.toString(this.format), this.element.data("color", t), t
        },
        updateInput: function(t) {
            if (t = t || this.color.toString(this.format), this.input !== !1) {
                if (this.options.colorSelectors) {
                    var i = new e(t, this.options.colorSelectors),
                        n = i.toAlias();
                    "undefined" != typeof this.options.colorSelectors[n] && (t = n)
                }
                this.input.prop("value", t)
            }
            return t
        },
        updatePicker: function(t) {
            void 0 !== t && (this.color = new e(t, this.options.colorSelectors));
            var i = this.options.horizontal === !1 ? this.options.sliders : this.options.slidersHorz,
                n = this.picker.find("i");
            return 0 !== n.length ? (this.options.horizontal === !1 ? (i = this.options.sliders, n.eq(1).css("top", i.hue.maxTop * (1 - this.color.value.h)).end().eq(2).css("top", i.alpha.maxTop * (1 - this.color.value.a))) : (i = this.options.slidersHorz, n.eq(1).css("left", i.hue.maxLeft * (1 - this.color.value.h)).end().eq(2).css("left", i.alpha.maxLeft * (1 - this.color.value.a))), n.eq(0).css({
                top: i.saturation.maxTop - this.color.value.b * i.saturation.maxTop,
                left: this.color.value.s * i.saturation.maxLeft
            }), this.picker.find(".colorpicker-saturation").css("backgroundColor", this.color.toHex(this.color.value.h, 1, 1, 1)), this.picker.find(".colorpicker-alpha").css("backgroundColor", this.color.toHex()), this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor", this.color.toString(this.format)), t) : void 0
        },
        updateComponent: function(t) {
            if (t = t || this.color.toString(this.format), this.component !== !1) {
                var e = this.component.find("i").eq(0);
                e.length > 0 ? e.css({
                    backgroundColor: t
                }) : this.component.css({
                    backgroundColor: t
                })
            }
            return t
        },
        update: function(t) {
            var e;
            return (this.getValue(!1) !== !1 || t === !0) && (e = this.updateComponent(), this.updateInput(e), this.updateData(e), this.updatePicker()), e
        },
        setValue: function(t) {
            this.color = new e(t, this.options.colorSelectors), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: t
            })
        },
        getValue: function(t) {
            t = void 0 === t ? "#000000" : t;
            var e;
            return e = this.hasInput() ? this.input.val() : this.element.data("color"), (void 0 === e || "" === e || null === e) && (e = t), e
        },
        hasInput: function() {
            return this.input !== !1
        },
        isDisabled: function() {
            return this.hasInput() ? this.input.prop("disabled") === !0 : !1
        },
        disable: function() {
            return this.hasInput() ? (this.input.prop("disabled", !0), this.element.trigger({
                type: "disable",
                color: this.color,
                value: this.getValue()
            }), !0) : !1
        },
        enable: function() {
            return this.hasInput() ? (this.input.prop("disabled", !1), this.element.trigger({
                type: "enable",
                color: this.color,
                value: this.getValue()
            }), !0) : !1
        },
        currentSlider: null,
        mousePointer: {
            left: 0,
            top: 0
        },
        mousedown: function(e) {
            !e.pageX && !e.pageY && e.originalEvent && e.originalEvent.touches && (e.pageX = e.originalEvent.touches[0].pageX, e.pageY = e.originalEvent.touches[0].pageY), e.stopPropagation(), e.preventDefault();
            var i = t(e.target),
                n = i.closest("div"),
                o = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
            if (!n.is(".colorpicker")) {
                if (n.is(".colorpicker-saturation")) this.currentSlider = t.extend({}, o.saturation);
                else if (n.is(".colorpicker-hue")) this.currentSlider = t.extend({}, o.hue);
                else {
                    if (!n.is(".colorpicker-alpha")) return !1;
                    this.currentSlider = t.extend({}, o.alpha)
                }
                var r = n.offset();
                this.currentSlider.guide = n.find("i")[0].style, this.currentSlider.left = e.pageX - r.left, this.currentSlider.top = e.pageY - r.top, this.mousePointer = {
                    left: e.pageX,
                    top: e.pageY
                }, t(document).on({
                    "mousemove.colorpicker": t.proxy(this.mousemove, this),
                    "touchmove.colorpicker": t.proxy(this.mousemove, this),
                    "mouseup.colorpicker": t.proxy(this.mouseup, this),
                    "touchend.colorpicker": t.proxy(this.mouseup, this)
                }).trigger("mousemove")
            }
            return !1
        },
        mousemove: function(t) {
            !t.pageX && !t.pageY && t.originalEvent && t.originalEvent.touches && (t.pageX = t.originalEvent.touches[0].pageX, t.pageY = t.originalEvent.touches[0].pageY), t.stopPropagation(), t.preventDefault();
            var e = Math.max(0, Math.min(this.currentSlider.maxLeft, this.currentSlider.left + ((t.pageX || this.mousePointer.left) - this.mousePointer.left))),
                i = Math.max(0, Math.min(this.currentSlider.maxTop, this.currentSlider.top + ((t.pageY || this.mousePointer.top) - this.mousePointer.top)));
            return this.currentSlider.guide.left = e + "px", this.currentSlider.guide.top = i + "px", this.currentSlider.callLeft && this.color[this.currentSlider.callLeft].call(this.color, e / this.currentSlider.maxLeft), this.currentSlider.callTop && this.color[this.currentSlider.callTop].call(this.color, i / this.currentSlider.maxTop), "setAlpha" === this.currentSlider.callTop && this.options.format === !1 && (1 !== this.color.value.a ? (this.format = "rgba", this.color.origFormat = "rgba") : (this.format = "hex", this.color.origFormat = "hex")), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color
            }), !1
        },
        mouseup: function(e) {
            return e.stopPropagation(), e.preventDefault(), t(document).off({
                "mousemove.colorpicker": this.mousemove,
                "touchmove.colorpicker": this.mousemove,
                "mouseup.colorpicker": this.mouseup,
                "touchend.colorpicker": this.mouseup
            }), !1
        },
        change: function(t) {
            this.keyup(t)
        },
        keyup: function(t) {
            38 === t.keyCode ? (this.color.value.a < 1 && (this.color.value.a = Math.round(100 * (this.color.value.a + .01)) / 100), this.update(!0)) : 40 === t.keyCode ? (this.color.value.a > 0 && (this.color.value.a = Math.round(100 * (this.color.value.a - .01)) / 100), this.update(!0)) : (this.color = new e(this.input.val(), this.options.colorSelectors), this.color.origFormat && this.options.format === !1 && (this.format = this.color.origFormat), this.getValue(!1) !== !1 && (this.updateData(), this.updateComponent(), this.updatePicker())), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: this.input.val()
            })
        }
    }, t.colorpicker = n, t.fn.colorpicker = function(e) {
        var i = arguments,
            o = null,
            r = this.each(function() {
                var r = t(this),
                    s = r.data("colorpicker"),
                    a = "object" == typeof e ? e : {};
                s || "string" == typeof e ? "string" == typeof e && (o = s[e].apply(s, Array.prototype.slice.call(i, 1))) : r.data("colorpicker", new n(this, a))
            });
        return "getValue" === e ? o : r
    }, t.fn.colorpicker.constructor = n
}),
function() {
    if (window.define) var t = window.define;
    if (window.require) var e = window.require;
    if (window.jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var t = jQuery.fn.select2.amd.define,
        e = jQuery.fn.select2.amd.require;
    var n, e, t;
    ! function(i) {
        function o(t, e) {
            return x.call(t, e)
        }

        function r(t, e) {
            var i, n, o, r, s, a, l, c, h, u, p, d = e && e.split("/"),
                f = y.map,
                g = f && f["*"] || {};
            if (t && "." === t.charAt(0))
                if (e) {
                    for (d = d.slice(0, d.length - 1), t = t.split("/"), s = t.length - 1, y.nodeIdCompat && k.test(t[s]) && (t[s] = t[s].replace(k, "")), t = d.concat(t), h = 0; h < t.length; h += 1)
                        if (p = t[h], "." === p) t.splice(h, 1), h -= 1;
                        else if (".." === p) {
                        if (1 === h && (".." === t[2] || ".." === t[0])) break;
                        h > 0 && (t.splice(h - 1, 2), h -= 2)
                    }
                    t = t.join("/")
                } else 0 === t.indexOf("./") && (t = t.substring(2));
            if ((d || g) && f) {
                for (i = t.split("/"), h = i.length; h > 0; h -= 1) {
                    if (n = i.slice(0, h).join("/"), d)
                        for (u = d.length; u > 0; u -= 1)
                            if (o = f[d.slice(0, u).join("/")], o && (o = o[n])) {
                                r = o, a = h;
                                break
                            }
                    if (r) break;
                    !l && g && g[n] && (l = g[n], c = h)
                }!r && l && (r = l, a = c), r && (i.splice(0, a, r), t = i.join("/"))
            }
            return t
        }

        function s(t, e) {
            return function() {
                return d.apply(i, w.call(arguments, 0).concat([t, e]))
            }
        }

        function a(t) {
            return function(e) {
                return r(e, t)
            }
        }

        function l(t) {
            return function(e) {
                m[t] = e
            }
        }

        function c(t) {
            if (o(v, t)) {
                var e = v[t];
                delete v[t], b[t] = !0, p.apply(i, e)
            }
            if (!o(m, t) && !o(b, t)) throw new Error("No " + t);
            return m[t]
        }

        function h(t) {
            var e, i = t ? t.indexOf("!") : -1;
            return i > -1 && (e = t.substring(0, i), t = t.substring(i + 1, t.length)), [e, t]
        }

        function u(t) {
            return function() {
                return y && y.config && y.config[t] || {}
            }
        }
        var p, d, f, g, m = {},
            v = {},
            y = {},
            b = {},
            x = Object.prototype.hasOwnProperty,
            w = [].slice,
            k = /\.js$/;
        f = function(t, e) {
            var i, n = h(t),
                o = n[0];
            return t = n[1], o && (o = r(o, e), i = c(o)), o ? t = i && i.normalize ? i.normalize(t, a(e)) : r(t, e) : (t = r(t, e), n = h(t), o = n[0], t = n[1], o && (i = c(o))), {
                f: o ? o + "!" + t : t,
                n: t,
                pr: o,
                p: i
            }
        }, g = {
            require: function(t) {
                return s(t)
            },
            exports: function(t) {
                var e = m[t];
                return "undefined" != typeof e ? e : m[t] = {}
            },
            module: function(t) {
                return {
                    id: t,
                    uri: "",
                    exports: m[t],
                    config: u(t)
                }
            }
        }, p = function(t, e, n, r) {
            var a, h, u, p, d, y, x = [],
                w = typeof n;
            if (r = r || t, "undefined" === w || "function" === w) {
                for (e = !e.length && n.length ? ["require", "exports", "module"] : e, d = 0; d < e.length; d += 1)
                    if (p = f(e[d], r), h = p.f, "require" === h) x[d] = g.require(t);
                    else if ("exports" === h) x[d] = g.exports(t), y = !0;
                else if ("module" === h) a = x[d] = g.module(t);
                else if (o(m, h) || o(v, h) || o(b, h)) x[d] = c(h);
                else {
                    if (!p.p) throw new Error(t + " missing " + h);
                    p.p.load(p.n, s(r, !0), l(h), {}), x[d] = m[h]
                }
                u = n ? n.apply(m[t], x) : void 0, t && (a && a.exports !== i && a.exports !== m[t] ? m[t] = a.exports : u === i && y || (m[t] = u))
            } else t && (m[t] = n)
        }, n = e = d = function(t, e, n, o, r) {
            if ("string" == typeof t) return g[t] ? g[t](e) : c(f(t, e).f);
            if (!t.splice) {
                if (y = t, y.deps && d(y.deps, y.callback), !e) return;
                e.splice ? (t = e, e = n, n = null) : t = i
            }
            return e = e || function() {}, "function" == typeof n && (n = o, o = r), o ? p(i, t, e, n) : setTimeout(function() {
                p(i, t, e, n)
            }, 4), d
        }, d.config = function(t) {
            return d(t)
        }, n._defined = m, t = function(t, e, i) {
            e.splice || (i = e, e = []), o(m, t) || o(v, t) || (v[t] = [t, e, i])
        }, t.amd = {
            jQuery: !0
        }
    }(), t("almond", function() {}), t("jquery", [], function() {
        var t = jQuery || $;
        return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
    }), t("select2/utils", [], function() {
        function t(t) {
            var e = t.prototype,
                i = [];
            for (var n in e) {
                var o = e[n];
                "function" == typeof o && "constructor" !== n && i.push(n)
            }
            return i
        }
        var e = {};
        e.Extend = function(t, e) {
            function i() {
                this.constructor = t
            }
            var n = {}.hasOwnProperty;
            for (var o in e) n.call(e, o) && (t[o] = e[o]);
            return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
        }, e.Decorate = function(e, i) {
            function n() {
                var t = Array.prototype.unshift,
                    n = i.prototype.constructor.length,
                    o = e.prototype.constructor;
                n > 0 && (t.call(arguments, e.prototype.constructor), o = i.prototype.constructor), o.apply(this, arguments)
            }

            function o() {
                this.constructor = n
            }
            var r = t(i),
                s = t(e);
            i.displayName = e.displayName, n.prototype = new o;
            for (var a = 0; a < s.length; a++) {
                var l = s[a];
                n.prototype[l] = e.prototype[l]
            }
            for (var c = (function(t) {
                    var e = function() {};
                    t in n.prototype && (e = n.prototype[t]);
                    var o = i.prototype[t];
                    return function() {
                        var t = Array.prototype.unshift;
                        return t.call(arguments, e), o.apply(this, arguments)
                    }
                }), h = 0; h < r.length; h++) {
                var u = r[h];
                n.prototype[u] = c(u)
            }
            return n
        };
        var i = function() {
            this.listeners = {}
        };
        return i.prototype.on = function(t, e) {
            this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
        }, i.prototype.trigger = function(t) {
            var e = Array.prototype.slice;
            this.listeners = this.listeners || {}, t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
        }, i.prototype.invoke = function(t, e) {
            for (var i = 0, n = t.length; n > i; i++) t[i].apply(this, e)
        }, e.Observable = i, e.generateChars = function(t) {
            for (var e = "", i = 0; t > i; i++) {
                var n = Math.floor(36 * Math.random());
                e += n.toString(36)
            }
            return e
        }, e.bind = function(t, e) {
            return function() {
                t.apply(e, arguments)
            }
        }, e._convertData = function(t) {
            for (var e in t) {
                var i = e.split("-"),
                    n = t;
                if (1 !== i.length) {
                    for (var o = 0; o < i.length; o++) {
                        var r = i[o];
                        r = r.substring(0, 1).toLowerCase() + r.substring(1), r in n || (n[r] = {}), o == i.length - 1 && (n[r] = t[e]), n = n[r]
                    }
                    delete t[e]
                }
            }
            return t
        }, e.hasScroll = function(t, e) {
            var i = $(e),
                n = e.style.overflowX,
                o = e.style.overflowY;
            return n !== o || "hidden" !== o && "visible" !== o ? "scroll" === n || "scroll" === o ? !0 : i.innerHeight() < e.scrollHeight || i.innerWidth() < e.scrollWidth : !1
        }, e
    }), t("select2/results", ["jquery", "./utils"], function(t, e) {
        function i(t, e, n) {
            this.$element = t, this.data = n, this.options = e, i.__super__.constructor.call(this)
        }
        return e.Extend(i, e.Observable), i.prototype.render = function() {
            var e = t('<ul class="select2-results__options" role="tree"></ul>');
            return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e, e
        }, i.prototype.clear = function() {
            this.$results.empty()
        }, i.prototype.displayMessage = function(e) {
            this.clear(), this.hideLoading();
            var i = t('<li role="treeitem" class="select2-results__option"></li>'),
                n = this.options.get("translations").get(e.message);
            i.text(n(e.args)), this.$results.append(i)
        }, i.prototype.append = function(t) {
            this.hideLoading();
            var e = [];
            if (null == t.results || 0 === t.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                message: "noResults"
            }));
            t.results = this.sort(t.results);
            for (var i = 0; i < t.results.length; i++) {
                var n = t.results[i],
                    o = this.option(n);
                e.push(o)
            }
            this.$results.append(e)
        }, i.prototype.position = function(t, e) {
            var i = e.find(".select2-results");
            i.append(t)
        }, i.prototype.sort = function(t) {
            var e = this.options.get("sorter");
            return e(t)
        }, i.prototype.setClasses = function() {
            var e = this;
            this.data.current(function(i) {
                var n = t.map(i, function(t) {
                        return t.id.toString()
                    }),
                    o = e.$results.find(".select2-results__option[aria-selected]");
                o.each(function() {
                    var e = t(this),
                        i = t.data(this, "data");
                    null != i.id && n.indexOf(i.id.toString()) > -1 ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                });
                var r = o.filter("[aria-selected=true]");
                r.length > 0 ? r.first().trigger("mouseenter") : o.first().trigger("mouseenter")
            })
        }, i.prototype.showLoading = function(t) {
            this.hideLoading();
            var e = this.options.get("translations").get("searching"),
                i = {
                    disabled: !0,
                    loading: !0,
                    text: e(t)
                },
                n = this.option(i);
            n.className += " loading-results", this.$results.prepend(n)
        }, i.prototype.hideLoading = function() {
            this.$results.find(".loading-results").remove()
        }, i.prototype.option = function(e) {
            var i = document.createElement("li");
            i.className = "select2-results__option";
            var n = {
                role: "treeitem",
                "aria-selected": "false"
            };
            e.disabled && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == e.id && delete n["aria-selected"], null != e._resultId && (i.id = e._resultId), e.children && (n.role = "group", n["aria-label"] = e.text, delete n["aria-selected"]);
            for (var o in n) {
                var r = n[o];
                i.setAttribute(o, r)
            }
            if (e.children) {
                var s = t(i),
                    a = document.createElement("strong");
                a.className = "select2-results__group"; {
                    t(a)
                }
                this.template(e, a);
                for (var l = [], c = 0; c < e.children.length; c++) {
                    var h = e.children[c],
                        u = this.option(h);
                    l.push(u)
                }
                var p = t("<ul></ul>", {
                    "class": "select2-results__options select2-results__options--nested"
                });
                p.append(l), s.append(a), s.append(p)
            } else this.template(e, i);
            return t.data(i, "data", e), i
        }, i.prototype.bind = function(e) {
            var i = this,
                n = e.id + "-results";
            this.$results.attr("id", n), e.on("results:all", function(t) {
                i.clear(), i.append(t.data), e.isOpen() && i.setClasses()
            }), e.on("results:append", function(t) {
                i.append(t.data), e.isOpen() && i.setClasses()
            }), e.on("query", function(t) {
                i.showLoading(t)
            }), e.on("select", function() {
                e.isOpen() && i.setClasses()
            }), e.on("unselect", function() {
                e.isOpen() && i.setClasses()
            }), e.on("open", function() {
                i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible()
            }), e.on("close", function() {
                i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant")
            }), e.on("results:select", function() {
                var t = i.getHighlightedResults();
                if (0 !== t.length) {
                    var e = t.data("data");
                    "true" == t.attr("aria-selected") ? i.options.get("multiple") ? i.trigger("unselect", {
                        data: e
                    }) : i.trigger("close") : i.trigger("select", {
                        data: e
                    })
                }
            }), e.on("results:previous", function() {
                var t = i.getHighlightedResults(),
                    e = i.$results.find("[aria-selected]"),
                    n = e.index(t);
                if (0 !== n) {
                    var o = n - 1;
                    0 === t.length && (o = 0);
                    var r = e.eq(o);
                    r.trigger("mouseenter");
                    var s = i.$results.offset().top,
                        a = r.offset().top,
                        l = i.$results.scrollTop() + (a - s);
                    0 === o ? i.$results.scrollTop(0) : 0 > a - s && i.$results.scrollTop(l)
                }
            }), e.on("results:next", function() {
                var t = i.getHighlightedResults(),
                    e = i.$results.find("[aria-selected]"),
                    n = e.index(t),
                    o = n + 1;
                if (!(o >= e.length)) {
                    var r = e.eq(o);
                    r.trigger("mouseenter");
                    var s = i.$results.offset().top + i.$results.outerHeight(!1),
                        a = r.offset().top + r.outerHeight(!1),
                        l = i.$results.scrollTop() + a - s;
                    0 === o ? i.$results.scrollTop(0) : a > s && i.$results.scrollTop(l)
                }
            }), e.on("results:focus", function(t) {
                t.element.addClass("select2-results__option--highlighted")
            }), e.on("results:message", function(t) {
                i.displayMessage(t)
            }), t.fn.mousewheel && this.$results.on("mousewheel", function(t) {
                var e = i.$results.scrollTop(),
                    n = i.$results.get(0).scrollHeight - i.$results.scrollTop() + t.deltaY,
                    o = t.deltaY > 0 && e - t.deltaY <= 0,
                    r = t.deltaY < 0 && n <= i.$results.height();
                o ? (i.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : r && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), t.preventDefault(), t.stopPropagation())
            }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(e) {
                var n = t(this),
                    o = n.data("data");
                return "true" === n.attr("aria-selected") ? void(i.options.get("multiple") ? i.trigger("unselect", {
                    originalEvent: e,
                    data: o
                }) : i.trigger("close")) : void i.trigger("select", {
                    originalEvent: e,
                    data: o
                })
            }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function() {
                var e = t(this).data("data");
                i.getHighlightedResults().removeClass("select2-results__option--highlighted"), i.trigger("results:focus", {
                    data: e,
                    element: t(this)
                })
            })
        }, i.prototype.getHighlightedResults = function() {
            var t = this.$results.find(".select2-results__option--highlighted");
            return t
        }, i.prototype.destroy = function() {
            this.$results.remove()
        }, i.prototype.ensureHighlightVisible = function() {
            var t = this.getHighlightedResults();
            if (0 !== t.length) {
                var e = this.$results.find("[aria-selected]"),
                    i = e.index(t),
                    n = this.$results.offset().top,
                    o = t.offset().top,
                    r = this.$results.scrollTop() + (o - n),
                    s = o - n;
                r -= 2 * t.outerHeight(!1), 2 >= i ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || 0 > s) && this.$results.scrollTop(r)
            }
        }, i.prototype.template = function(t, e) {
            var i = this.options.get("templateResult"),
                n = i(t);
            null == n ? e.style.display = "none" : e.innerHTML = n
        }, i
    }), t("select2/keys", [], function() {
        var t = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46,
            isArrow: function(t) {
                switch (t = t.which ? t.which : t) {
                    case KEY.LEFT:
                    case KEY.RIGHT:
                    case KEY.UP:
                    case KEY.DOWN:
                        return !0
                }
                return !1
            }
        };
        return t
    }), t("select2/selection/base", ["jquery", "../utils", "../keys"], function(t, e, i) {
        function n(t, e) {
            this.$element = t, this.options = e, n.__super__.constructor.call(this)
        }
        return e.Extend(n, e.Observable), n.prototype.render = function() {
            var e = t('<span class="select2-selection" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></span>');
            return e.attr("title", this.$element.attr("title")), this.$selection = e, e
        }, n.prototype.bind = function(t) {
            var e = this,
                n = (t.id + "-container", t.id + "-results");
            this.container = t, this.$selection.attr("aria-owns", n), this.$selection.on("keydown", function(t) {
                e.trigger("keypress", t), t.which === i.SPACE && t.preventDefault()
            }), t.on("results:focus", function(t) {
                e.$selection.attr("aria-activedescendant", t.data._resultId)
            }), t.on("selection:update", function(t) {
                e.update(t.data)
            }), t.on("open", function() {
                e.$selection.attr("aria-expanded", "true"), e._attachCloseHandler(t)
            }), t.on("close", function() {
                e.$selection.attr("aria-expanded", "false"), e.$selection.removeAttr("aria-activedescendant"), e.$selection.focus(), e._detachCloseHandler(t)
            }), t.on("enable", function() {
                e.$selection.attr("tabindex", "0")
            }), t.on("disable", function() {
                e.$selection.attr("tabindex", "-1")
            })
        }, n.prototype._attachCloseHandler = function(e) {
            t(document.body).on("mousedown.select2." + e.id, function(e) {
                var i = t(e.target),
                    n = i.closest(".select2"),
                    o = t(".select2.select2-container--open");
                o.each(function() {
                    var e = t(this);
                    if (this != n[0]) {
                        var i = e.data("element");
                        i.select2("close")
                    }
                })
            })
        }, n.prototype._detachCloseHandler = function(e) {
            t(document.body).off("mousedown.select2." + e.id)
        }, n.prototype.position = function(t, e) {
            var i = e.find(".selection");
            i.append(t)
        }, n.prototype.destroy = function() {
            this._detachCloseHandler(this.container)
        }, n.prototype.update = function() {
            throw new Error("The `update` method must be defined in child classes.")
        }, n
    }), t("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(t, e, i) {
        function n() {
            n.__super__.constructor.apply(this, arguments)
        }
        return i.Extend(n, e), n.prototype.render = function() {
            var t = n.__super__.render.call(this);
            return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t
        }, n.prototype.bind = function(t) {
            var e = this;
            n.__super__.bind.apply(this, arguments);
            var i = t.id + "-container";
            this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function(t) {
                1 === t.which && e.trigger("toggle", {
                    originalEvent: t
                })
            }), this.$selection.on("focus", function() {}), this.$selection.on("blur", function() {}), t.on("selection:update", function(t) {
                e.update(t.data)
            })
        }, n.prototype.clear = function() {
            this.$selection.find(".select2-selection__rendered").empty()
        }, n.prototype.display = function(t) {
            var e = this.options.get("templateSelection");
            return e(t)
        }, n.prototype.selectionContainer = function() {
            return t("<span></span>")
        }, n.prototype.update = function(t) {
            if (0 === t.length) return void this.clear();
            var e = t[0],
                i = this.display(e);
            this.$selection.find(".select2-selection__rendered").html(i)
        }, n
    }), t("select2/selection/multiple", ["jquery", "./base", "../utils"], function(t, e, i) {
        function n() {
            n.__super__.constructor.apply(this, arguments)
        }
        return i.Extend(n, e), n.prototype.render = function() {
            var t = n.__super__.render.call(this);
            return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t
        }, n.prototype.bind = function() {
            var e = this;
            n.__super__.bind.apply(this, arguments), this.$selection.on("click", function(t) {
                e.trigger("toggle", {
                    originalEvent: t
                })
            }), this.$selection.on("click", ".select2-selection__choice__remove", function(i) {
                var n = t(this),
                    o = n.parent(),
                    r = o.data("data");
                e.trigger("unselect", {
                    originalEvent: i,
                    data: r
                })
            })
        }, n.prototype.clear = function() {
            this.$selection.find(".select2-selection__rendered").empty()
        }, n.prototype.display = function(t) {
            var e = this.options.get("templateSelection");
            return e(t)
        }, n.prototype.selectionContainer = function() {
            var e = t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
            return e
        }, n.prototype.update = function(t) {
            if (this.clear(), 0 !== t.length) {
                for (var e = [], i = 0; i < t.length; i++) {
                    var n = t[i],
                        o = this.display(n),
                        r = this.selectionContainer();
                    r.append(o), r.data("data", n), e.push(r)
                }
                this.$selection.find(".select2-selection__rendered").append(e)
            }
        }, n
    }), t("select2/selection/placeholder", ["../utils"], function() {
        function t(t, e, i) {
            this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i)
        }
        return t.prototype.normalizePlaceholder = function(t, e) {
            return "string" == typeof e && (e = {
                id: "",
                text: e
            }), e
        }, t.prototype.createPlaceholder = function(t, e) {
            var i = this.selectionContainer();
            return i.html(this.display(e)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i
        }, t.prototype.update = function(t, e) {
            var i = 1 == e.length && e[0].id != this.placeholder.id,
                n = e.length > 1;
            if (n || i) return t.call(this, e);
            this.clear();
            var o = this.createPlaceholder(this.placeholder);
            this.$selection.find(".select2-selection__rendered").append(o)
        }, t
    }), t("select2/selection/allowClear", ["jquery"], function(t) {
        function e() {}
        return e.prototype.bind = function(e, i, n) {
            var o = this;
            e.call(this, i, n), this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                if (!o.options.get("disabled")) {
                    e.stopPropagation();
                    for (var i = t(this).data("data"), n = 0; n < i.length; n++) {
                        var r = {
                            data: i[n]
                        };
                        if (o.trigger("unselect", r), r.prevented) return
                    }
                    o.$element.val(o.placeholder.id).trigger("change"), o.trigger("toggle")
                }
            })
        }, e.prototype.update = function(e, i) {
            if (e.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                var n = t('<span class="select2-selection__clear">&times;</span>');
                n.data("data", i), this.$selection.find(".select2-selection__rendered").append(n)
            }
        }, e
    }), t("select2/selection/search", ["jquery", "../utils", "../keys"], function(t, e, i) {
        function n(t, e, i) {
            t.call(this, e, i)
        }
        return n.prototype.render = function(e) {
            var i = t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" role="textbox" /></li>');
            this.$searchContainer = i, this.$search = i.find("input");
            var n = e.call(this);
            return n
        }, n.prototype.bind = function(t, e, n) {
            var o = this;
            t.call(this, e, n), e.on("open", function() {
                o.$search.attr("tabindex", 0), o.$search.focus()
            }), e.on("close", function() {
                o.$search.attr("tabindex", -1), o.$search.val("")
            }), e.on("enable", function() {
                o.$search.prop("disabled", !1)
            }), e.on("disable", function() {
                o.$search.prop("disabled", !0)
            }), this.$selection.on("keydown", ".select2-search--inline", function(t) {
                t.stopPropagation(), o.trigger("keypress", t), o._keyUpPrevented = t.isDefaultPrevented();
                var e = t.which;
                if (e === i.BACKSPACE && "" === o.$search.val()) {
                    var n = o.$searchContainer.prev(".select2-selection__choice");
                    if (n.length > 0) {
                        var r = n.data("data");
                        o.searchRemoveChoice(r)
                    }
                }
            }), this.$selection.on("keyup", ".select2-search--inline", function(t) {
                o.handleSearch(t)
            })
        }, n.prototype.createPlaceholder = function(t, e) {
            this.$search.attr("placeholder", e.text)
        }, n.prototype.update = function(t, e) {
            this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch()
        }, n.prototype.handleSearch = function() {
            if (this.resizeSearch(), !this._keyUpPrevented) {
                var t = this.$search.val();
                this.trigger("query", {
                    term: t
                })
            }
            this._keyUpPrevented = !1
        }, n.prototype.searchRemoveChoice = function(t, e) {
            this.trigger("unselect", {
                data: e
            }), this.trigger("open"), this.$search.val(e.text + " ")
        }, n.prototype.resizeSearch = function() {
            this.$search.css("width", "25px");
            var t = "";
            if ("" !== this.$search.attr("placeholder")) t = this.$selection.find(".select2-selection__rendered").innerWidth();
            else {
                var e = this.$search.val().length + 1;
                t = .75 * e + "em"
            }
            this.$search.css("width", t)
        }, n
    }), t("select2/selection/eventRelay", ["jquery"], function(t) {
        function e() {}
        return e.prototype.bind = function(e, i, n) {
            var o = this,
                r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                s = ["opening", "closing", "selecting", "unselecting"];
            e.call(this, i, n), i.on("*", function(e, i) {
                if (-1 !== r.indexOf(e)) {
                    i = i || {};
                    var n = t.Event("select2:" + e, {
                        params: i
                    });
                    o.$element.trigger(n), -1 !== s.indexOf(e) && (i.prevented = n.isDefaultPrevented())
                }
            })
        }, e
    }), t("select2/translation", ["jquery"], function(t) {
        function i(t) {
            this.dict = t || {}
        }
        return i.prototype.all = function() {
            return this.dict
        }, i.prototype.get = function(t) {
            return this.dict[t]
        }, i.prototype.extend = function(e) {
            this.dict = t.extend({}, e.all(), this.dict)
        }, i._cache = {}, i.loadPath = function(t) {
            if (!(t in i._cache)) {
                var n = e(t);
                i._cache[t] = n
            }
            return new i(i._cache[t])
        }, i
    }), t("select2/diacritics", [], function() {
        var t = {
            "?": "A",
            "A": "A",
            "�": "A",
            "�": "A",
            "�": "A",
            "?": "A",
            "?": "A",
            "?": "A",
            "?": "A",
            "�": "A",
            "A": "A",
            "A": "A",
            "?": "A",
            "?": "A",
            "?": "A",
            "?": "A",
            "?": "A",
            "?": "A",
            "�": "A",
            "A": "A",
            "?": "A",
            "�": "A",
            "?": "A",
            "A": "A",
            "?": "A",
            "?": "A",
            "?": "A",
            "?": "A",
            "?": "A",
            "?": "A",
            "A": "A",
            "?": "A",
            "?": "A",
            "?": "AA",
            "�": "AE",
            "?": "AE",
            "?": "AE",
            "?": "AO",
            "?": "AU",
            "?": "AV",
            "?": "AV",
            "?": "AY",
            "?": "B",
            "B": "B",
            "?": "B",
            "?": "B",
            "?": "B",
            "?": "B",
            "?": "B",
            "?": "B",
            "?": "C",
            "C": "C",
            "C": "C",
            "C": "C",
            "C": "C",
            "C": "C",
            "�": "C",
            "?": "C",
            "?": "C",
            "?": "C",
            "?": "C",
            "?": "D",
            "D": "D",
            "?": "D",
            "D": "D",
            "?": "D",
            "?": "D",
            "?": "D",
            "?": "D",
            "�": "D",
            "?": "D",
            "?": "D",
            "�": "D",
            "?": "D",
            "?": "DZ",
            "?": "DZ",
            "?": "Dz",
            "?": "Dz",
            "?": "E",
            "E": "E",
            "�": "E",
            "�": "E",
            "�": "E",
            "?": "E",
            "?": "E",
            "?": "E",
            "?": "E",
            "?": "E",
            "E": "E",
            "?": "E",
            "?": "E",
            "E": "E",
            "E": "E",
            "�": "E",
            "?": "E",
            "E": "E",
            "?": "E",
            "?": "E",
            "?": "E",
            "?": "E",
            "?": "E",
            "?": "E",
            "E": "E",
            "?": "E",
            "?": "E",
            "?": "E",
            "?": "E",
            "?": "F",
            "F": "F",
            "?": "F",
            "�": "F",
            "?": "F",
            "?": "G",
            "G": "G",
            "?": "G",
            "G": "G",
            "?": "G",
            "G": "G",
            "G": "G",
            "G": "G",
            "G": "G",
            "G": "G",
            "?": "G",
            "?": "G",
            "?": "G",
            "?": "G",
            "?": "H",
            "H": "H",
            "H": "H",
            "?": "H",
            "?": "H",
            "?": "H",
            "?": "H",
            "?": "H",
            "?": "H",
            "H": "H",
            "?": "H",
            "?": "H",
            "?": "H",
            "?": "I",
            "I": "I",
            "�": "I",
            "�": "I",
            "�": "I",
            "I": "I",
            "I": "I",
            "I": "I",
            "I": "I",
            "�": "I",
            "?": "I",
            "?": "I",
            "I": "I",
            "?": "I",
            "?": "I",
            "?": "I",
            "I": "I",
            "?": "I",
            "I": "I",
            "?": "J",
            "J": "J",
            "J": "J",
            "?": "J",
            "?": "K",
            "K": "K",
            "?": "K",
            "K": "K",
            "?": "K",
            "K": "K",
            "?": "K",
            "?": "K",
            "?": "K",
            "?": "K",
            "?": "K",
            "?": "K",
            "?": "K",
            "?": "L",
            "L": "L",
            "?": "L",
            "L": "L",
            "L": "L",
            "?": "L",
            "?": "L",
            "L": "L",
            "?": "L",
            "?": "L",
            "L": "L",
            "?": "L",
            "?": "L",
            "?": "L",
            "?": "L",
            "?": "L",
            "?": "L",
            "?": "LJ",
            "?": "Lj",
            "?": "M",
            "M": "M",
            "?": "M",
            "?": "M",
            "?": "M",
            "?": "M",
            "?": "M",
            "?": "N",
            "N": "N",
            "?": "N",
            "N": "N",
            "�": "N",
            "?": "N",
            "N": "N",
            "?": "N",
            "N": "N",
            "?": "N",
            "?": "N",
            "?": "N",
            "?": "N",
            "?": "N",
            "?": "N",
            "?": "NJ",
            "?": "Nj",
            "?": "O",
            "O": "O",
            "�": "O",
            "�": "O",
            "�": "O",
            "?": "O",
            "?": "O",
            "?": "O",
            "?": "O",
            "�": "O",
            "?": "O",
            "?": "O",
            "?": "O",
            "O": "O",
            "?": "O",
            "?": "O",
            "O": "O",
            "?": "O",
            "?": "O",
            "�": "O",
            "?": "O",
            "?": "O",
            "O": "O",
            "O": "O",
            "?": "O",
            "?": "O",
            "O": "O",
            "?": "O",
            "?": "O",
            "?": "O",
            "?": "O",
            "?": "O",
            "?": "O",
            "?": "O",
            "O": "O",
            "O": "O",
            "�": "O",
            "?": "O",
            "?": "O",
            "O": "O",
            "?": "O",
            "?": "O",
            "?": "OI",
            "?": "OO",
            "?": "OU",
            "?": "P",
            "P": "P",
            "?": "P",
            "?": "P",
            "?": "P",
            "?": "P",
            "?": "P",
            "?": "P",
            "?": "P",
            "?": "Q",
            "Q": "Q",
            "?": "Q",
            "?": "Q",
            "?": "Q",
            "?": "R",
            "R": "R",
            "R": "R",
            "?": "R",
            "R": "R",
            "?": "R",
            "?": "R",
            "?": "R",
            "?": "R",
            "R": "R",
            "?": "R",
            "?": "R",
            "?": "R",
            "?": "R",
            "?": "R",
            "?": "R",
            "?": "S",
            "S": "S",
            "?": "S",
            "S": "S",
            "?": "S",
            "S": "S",
            "?": "S",
            "�": "S",
            "?": "S",
            "?": "S",
            "?": "S",
            "?": "S",
            "S": "S",
            "?": "S",
            "?": "S",
            "?": "S",
            "?": "T",
            "T": "T",
            "?": "T",
            "T": "T",
            "?": "T",
            "?": "T",
            "T": "T",
            "?": "T",
            "?": "T",
            "T": "T",
            "?": "T",
            "T": "T",
            "?": "T",
            "?": "T",
            "?": "TZ",
            "?": "U",
            "U": "U",
            "�": "U",
            "�": "U",
            "�": "U",
            "U": "U",
            "?": "U",
            "U": "U",
            "?": "U",
            "U": "U",
            "�": "U",
            "U": "U",
            "U": "U",
            "U": "U",
            "U": "U",
            "?": "U",
            "U": "U",
            "U": "U",
            "U": "U",
            "?": "U",
            "?": "U",
            "U": "U",
            "?": "U",
            "?": "U",
            "?": "U",
            "?": "U",
            "?": "U",
            "?": "U",
            "?": "U",
            "U": "U",
            "?": "U",
            "?": "U",
            "?": "U",
            "?": "V",
            "V": "V",
            "?": "V",
            "?": "V",
            "?": "V",
            "?": "V",
            "?": "V",
            "?": "VY",
            "?": "W",
            "W": "W",
            "?": "W",
            "?": "W",
            "W": "W",
            "?": "W",
            "?": "W",
            "?": "W",
            "?": "W",
            "?": "X",
            "X": "X",
            "?": "X",
            "?": "X",
            "?": "Y",
            "Y": "Y",
            "?": "Y",
            "�": "Y",
            "Y": "Y",
            "?": "Y",
            "?": "Y",
            "?": "Y",
            "�": "Y",
            "?": "Y",
            "?": "Y",
            "?": "Y",
            "?": "Y",
            "?": "Y",
            "?": "Z",
            "Z": "Z",
            "Z": "Z",
            "?": "Z",
            "Z": "Z",
            "�": "Z",
            "?": "Z",
            "?": "Z",
            "?": "Z",
            "?": "Z",
            "?": "Z",
            "?": "Z",
            "?": "Z",
            "?": "a",
            "a": "a",
            "?": "a",
            "�": "a",
            "�": "a",
            "�": "a",
            "?": "a",
            "?": "a",
            "?": "a",
            "?": "a",
            "�": "a",
            "a": "a",
            "a": "a",
            "?": "a",
            "?": "a",
            "?": "a",
            "?": "a",
            "?": "a",
            "?": "a",
            "�": "a",
            "a": "a",
            "?": "a",
            "�": "a",
            "?": "a",
            "a": "a",
            "?": "a",
            "?": "a",
            "?": "a",
            "?": "a",
            "?": "a",
            "?": "a",
            "a": "a",
            "?": "a",
            "?": "a",
            "?": "aa",
            "�": "ae",
            "?": "ae",
            "?": "ae",
            "?": "ao",
            "?": "au",
            "?": "av",
            "?": "av",
            "?": "ay",
            "?": "b",
            "b": "b",
            "?": "b",
            "?": "b",
            "?": "b",
            "b": "b",
            "?": "b",
            "?": "b",
            "?": "c",
            "c": "c",
            "c": "c",
            "c": "c",
            "c": "c",
            "c": "c",
            "�": "c",
            "?": "c",
            "?": "c",
            "?": "c",
            "?": "c",
            "?": "c",
            "?": "d",
            "d": "d",
            "?": "d",
            "d": "d",
            "?": "d",
            "?": "d",
            "?": "d",
            "?": "d",
            "d": "d",
            "?": "d",
            "?": "d",
            "?": "d",
            "?": "d",
            "?": "dz",
            "?": "dz",
            "?": "e",
            "e": "e",
            "�": "e",
            "�": "e",
            "�": "e",
            "?": "e",
            "?": "e",
            "?": "e",
            "?": "e",
            "?": "e",
            "e": "e",
            "?": "e",
            "?": "e",
            "e": "e",
            "e": "e",
            "�": "e",
            "?": "e",
            "e": "e",
            "?": "e",
            "?": "e",
            "?": "e",
            "?": "e",
            "?": "e",
            "?": "e",
            "e": "e",
            "?": "e",
            "?": "e",
            "?": "e",
            "?": "e",
            "?": "e",
            "?": "f",
            "f": "f",
            "?": "f",
            "�": "f",
            "?": "f",
            "?": "g",
            "g": "g",
            "?": "g",
            "g": "g",
            "?": "g",
            "g": "g",
            "g": "g",
            "g": "g",
            "g": "g",
            "g": "g",
            "?": "g",
            "?": "g",
            "?": "g",
            "?": "g",
            "?": "h",
            "h": "h",
            "h": "h",
            "?": "h",
            "?": "h",
            "?": "h",
            "?": "h",
            "?": "h",
            "?": "h",
            "?": "h",
            "h": "h",
            "?": "h",
            "?": "h",
            "?": "h",
            "?": "hv",
            "?": "i",
            "i": "i",
            "�": "i",
            "�": "i",
            "�": "i",
            "i": "i",
            "i": "i",
            "i": "i",
            "�": "i",
            "?": "i",
            "?": "i",
            "i": "i",
            "?": "i",
            "?": "i",
            "?": "i",
            "i": "i",
            "?": "i",
            "?": "i",
            "i": "i",
            "?": "j",
            "j": "j",
            "j": "j",
            "j": "j",
            "?": "j",
            "?": "k",
            "k": "k",
            "?": "k",
            "k": "k",
            "?": "k",
            "k": "k",
            "?": "k",
            "?": "k",
            "?": "k",
            "?": "k",
            "?": "k",
            "?": "k",
            "?": "k",
            "?": "l",
            "l": "l",
            "?": "l",
            "l": "l",
            "l": "l",
            "?": "l",
            "?": "l",
            "l": "l",
            "?": "l",
            "?": "l",
            "?": "l",
            "l": "l",
            "l": "l",
            "?": "l",
            "?": "l",
            "?": "l",
            "?": "l",
            "?": "l",
            "?": "lj",
            "?": "m",
            "m": "m",
            "?": "m",
            "?": "m",
            "?": "m",
            "?": "m",
            "?": "m",
            "?": "n",
            "n": "n",
            "?": "n",
            "n": "n",
            "�": "n",
            "?": "n",
            "n": "n",
            "?": "n",
            "n": "n",
            "?": "n",
            "?": "n",
            "?": "n",
            "?": "n",
            "?": "n",
            "?": "n",
            "?": "n",
            "?": "nj",
            "?": "o",
            "o": "o",
            "�": "o",
            "�": "o",
            "�": "o",
            "?": "o",
            "?": "o",
            "?": "o",
            "?": "o",
            "�": "o",
            "?": "o",
            "?": "o",
            "?": "o",
            "o": "o",
            "?": "o",
            "?": "o",
            "o": "o",
            "?": "o",
            "?": "o",
            "�": "o",
            "?": "o",
            "?": "o",
            "o": "o",
            "o": "o",
            "?": "o",
            "?": "o",
            "o": "o",
            "?": "o",
            "?": "o",
            "?": "o",
            "?": "o",
            "?": "o",
            "?": "o",
            "?": "o",
            "o": "o",
            "o": "o",
            "�": "o",
            "?": "o",
            "?": "o",
            "?": "o",
            "?": "o",
            "?": "o",
            "?": "oi",
            "?": "ou",
            "?": "oo",
            "?": "p",
            "p": "p",
            "?": "p",
            "?": "p",
            "?": "p",
            "?": "p",
            "?": "p",
            "?": "p",
            "?": "p",
            "?": "q",
            "q": "q",
            "?": "q",
            "?": "q",
            "?": "q",
            "?": "r",
            "r": "r",
            "r": "r",
            "?": "r",
            "r": "r",
            "?": "r",
            "?": "r",
            "?": "r",
            "?": "r",
            "r": "r",
            "?": "r",
            "?": "r",
            "?": "r",
            "?": "r",
            "?": "r",
            "?": "r",
            "?": "s",
            "s": "s",
            "�": "s",
            "s": "s",
            "?": "s",
            "s": "s",
            "?": "s",
            "�": "s",
            "?": "s",
            "?": "s",
            "?": "s",
            "?": "s",
            "s": "s",
            "?": "s",
            "?": "s",
            "?": "s",
            "?": "s",
            "?": "t",
            "t": "t",
            "?": "t",
            "?": "t",
            "t": "t",
            "?": "t",
            "?": "t",
            "t": "t",
            "?": "t",
            "?": "t",
            "t": "t",
            "?": "t",
            "?": "t",
            "?": "t",
            "?": "t",
            "?": "tz",
            "?": "u",
            "u": "u",
            "�": "u",
            "�": "u",
            "�": "u",
            "u": "u",
            "?": "u",
            "u": "u",
            "?": "u",
            "u": "u",
            "�": "u",
            "u": "u",
            "u": "u",
            "u": "u",
            "u": "u",
            "?": "u",
            "u": "u",
            "u": "u",
            "u": "u",
            "?": "u",
            "?": "u",
            "u": "u",
            "?": "u",
            "?": "u",
            "?": "u",
            "?": "u",
            "?": "u",
            "?": "u",
            "?": "u",
            "u": "u",
            "?": "u",
            "?": "u",
            "?": "u",
            "?": "v",
            "v": "v",
            "?": "v",
            "?": "v",
            "?": "v",
            "?": "v",
            "?": "v",
            "?": "vy",
            "?": "w",
            "w": "w",
            "?": "w",
            "?": "w",
            "w": "w",
            "?": "w",
            "?": "w",
            "?": "w",
            "?": "w",
            "?": "w",
            "?": "x",
            "x": "x",
            "?": "x",
            "?": "x",
            "?": "y",
            "y": "y",
            "?": "y",
            "�": "y",
            "y": "y",
            "?": "y",
            "?": "y",
            "?": "y",
            "�": "y",
            "?": "y",
            "?": "y",
            "?": "y",
            "?": "y",
            "?": "y",
            "?": "y",
            "?": "z",
            "z": "z",
            "z": "z",
            "?": "z",
            "z": "z",
            "�": "z",
            "?": "z",
            "?": "z",
            "z": "z",
            "?": "z",
            "?": "z",
            "?": "z",
            "?": "z",
            "?": "?",
            "?": "?",
            "?": "?",
            "?": "?",
            "?": "?",
            "?": "?",
            "?": "?",
            "?": "?",
            "?": "O",
            "?": "a",
            "?": "e",
            "?": "?",
            "?": "?",
            "?": "?",
            "?": "?",
            "?": "?",
            "?": "?",
            "?": "?",
            "?": "?",
            "?": "?",
            "?": "s"
        };
        return t
    }), t("select2/data/base", ["../utils"], function(t) {
        function e() {
            e.__super__.constructor.call(this)
        }
        return t.Extend(e, t.Observable), e.prototype.current = function() {
            throw new Error("The `current` method must be defined in child classes.")
        }, e.prototype.query = function() {
            throw new Error("The `query` method must be defined in child classes.")
        }, e.prototype.bind = function() {}, e.prototype.destroy = function() {}, e.prototype.generateResultId = function(e, i) {
            var n = e.id + "-result-";
            return n += t.generateChars(4), n += null != i.id ? "-" + i.id.toString() : "-" + t.generateChars(4)
        }, e
    }), t("select2/data/select", ["./base", "../utils", "jquery"], function(t, e, i) {
        function n(t, e) {
            this.$element = t, this.options = e, n.__super__.constructor.call(this)
        }
        return e.Extend(n, t), n.prototype.current = function(t) {
            var e = [],
                n = this;
            this.$element.find(":selected").each(function() {
                var t = i(this),
                    o = n.item(t);
                e.push(o)
            }), t(e)
        }, n.prototype.select = function(t) {
            var e = this;
            if (i(t.element).is("option")) return t.element.selected = !0, void this.$element.trigger("change");
            if (this.$element.prop("multiple")) this.current(function(i) {
                var n = [];
                t = [t], t.push.apply(t, i);
                for (var o = 0; o < t.length; o++) id = t[o].id, -1 === n.indexOf(id) && n.push(id);
                e.$element.val(n), e.$element.trigger("change")
            });
            else {
                var n = t.id;
                this.$element.val(n), this.$element.trigger("change")
            }
        }, n.prototype.unselect = function(t) {
            var e = this;
            if (this.$element.prop("multiple")) return i(t.element).is("option") ? (t.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(i) {
                for (var n = [], o = 0; o < i.length; o++) id = i[o].id, id !== t.id && -1 === n.indexOf(id) && n.push(id);
                e.$element.val(n), e.$element.trigger("change")
            })
        }, n.prototype.bind = function(t) {
            var e = this;
            this.container = t, t.on("select", function(t) {
                e.select(t.data)
            }), t.on("unselect", function(t) {
                e.unselect(t.data)
            })
        }, n.prototype.destroy = function() {
            this.$element.find("*").each(function() {
                i.removeData(this, "data")
            })
        }, n.prototype.query = function(t, e) {
            var n = [],
                o = this,
                r = this.$element.children();
            r.each(function() {
                var e = i(this);
                if (e.is("option") || e.is("optgroup")) {
                    var r = o.item(e),
                        s = o.matches(t, r);
                    null !== s && n.push(s)
                }
            }), e({
                results: n
            })
        }, n.prototype.option = function(t) {
            var e;
            t.children ? (e = document.createElement("optgroup"), e.label = t.text) : (e = document.createElement("option"), e.innerText = t.text), t.id && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0);
            var n = i(e),
                o = this._normalizeItem(t);
            return o.element = e, i.data(e, "data", o), n
        }, n.prototype.item = function(t) {
            var e = {};
            if (e = i.data(t[0], "data"), null != e) return e;
            if (t.is("option")) e = {
                id: t.val(),
                text: t.html(),
                disabled: t.prop("disabled"),
                selected: t.prop("selected")
            };
            else if (t.is("optgroup")) {
                e = {
                    text: t.prop("label"),
                    children: []
                };
                for (var n = t.children("option"), o = [], r = 0; r < n.length; r++) {
                    var s = i(n[r]),
                        a = this.item(s);
                    o.push(a)
                }
                e.children = o
            }
            return e = this._normalizeItem(e), e.element = t[0], i.data(t[0], "data", e), e
        }, n.prototype._normalizeItem = function(t) {
            i.isPlainObject(t) || (t = {
                id: t,
                text: t
            }), t = i.extend({}, {
                text: ""
            }, t);
            var e = {
                selected: !1,
                disabled: !1
            };
            return null != t.id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), i.extend({}, e, t)
        }, n.prototype.matches = function(t, e) {
            var i = this.options.get("matcher");
            return i(t, e)
        }, n
    }), t("select2/data/array", ["./select", "../utils", "jquery"], function(t, e, i) {
        function n(t, e) {
            var i = e.get("data") || [];
            n.__super__.constructor.call(this, t, e), t.append(this.convertToOptions(i))
        }
        return e.Extend(n, t), n.prototype.select = function(t) {
            var e = this.$element.find('option[value="' + t.id + '"]');
            0 === e.length && (e = this.option(t), this.$element.append(e)), n.__super__.select.call(this, t)
        }, n.prototype.convertToOptions = function(t) {
            function e(t) {
                return function() {
                    return i(this).val() == t.id
                }
            }
            for (var n = this, o = this.$element.find("option"), r = o.map(function() {
                    return n.item(i(this)).id
                }).get(), s = [], a = 0; a < t.length; a++) {
                var l = this._normalizeItem(t[a]);
                if (r.indexOf(l.id) >= 0) {
                    var c = o.filter(e(l)),
                        h = this.item(c),
                        u = (i.extend(!0, {}, h, l), this.option(h));
                    c.replaceWith(u)
                } else {
                    var p = this.option(l);
                    if (l.children) {
                        var d = this.convertToOptions(l.children);
                        p.append(d)
                    }
                    s.push(p)
                }
            }
            return s
        }, n
    }), t("select2/data/ajax", ["./array", "../utils", "jquery"], function(t, e, i) {
        function n(e, i) {
            this.ajaxOptions = i.get("ajax"), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), t.__super__.constructor.call(this, e, i)
        }
        return e.Extend(n, t), n.prototype.processResults = function(t) {
            return t
        }, n.prototype.query = function(t, e) {
            function n() {
                var n = i.ajax(r);
                n.success(function(n) {
                    var r = o.processResults(n, t);
                    console && console.error && (r && r.results && i.isArray(r.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), e(r)
                }), o._request = n
            }
            var o = this;
            this._request && (this._request.abort(), this._request = null);
            var r = i.extend({
                type: "GET"
            }, this.ajaxOptions);
            "function" == typeof r.url && (r.url = r.url(t)), "function" == typeof r.data && (r.data = r.data(t)), this.ajaxOptions.delay && "" !== t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(n, this.ajaxOptions.delay)) : n()
        }, n
    }), t("select2/data/tags", ["jquery"], function(t) {
        function e(e, i, n) {
            var o = n.get("tags"),
                r = n.get("createTag");
            if (void 0 !== r && (this.createTag = r), e.call(this, i, n), t.isArray(o))
                for (var s = 0; s < o.length; s++) {
                    var a = o[s],
                        l = this._normalizeItem(a),
                        c = this.option(l);
                    this.$element.append(c)
                }
        }
        return e.prototype.query = function(t, e, i) {
            function n(t, r) {
                for (var s = t.results, a = 0; a < s.length; a++) {
                    var l = s[a],
                        c = null != l.children && !n({
                            results: l.children
                        }, !0),
                        h = l.text === e.term;
                    if (h || c) return r ? !1 : (t.data = s, void i(t))
                }
                if (r) return !0;
                var u = o.createTag(e);
                if (null != u) {
                    var p = o.option(u);
                    p.attr("data-select2-tag", !0), o.$element.append(p), o.insertTag(s, u)
                }
                t.results = s, i(t)
            }
            var o = this;
            return this._removeOldTags(), null == e.term || "" === e.term || null != e.page ? void t.call(this, e, i) : void t.call(this, e, n)
        }, e.prototype.createTag = function(t, e) {
            return {
                id: e.term,
                text: e.term
            }
        }, e.prototype.insertTag = function(t, e, i) {
            e.unshift(i)
        }, e.prototype._removeOldTags = function() {
            var e = (this._lastTag, this.$element.find("option[data-select2-tag]"));
            e.each(function() {
                this.selected || t(this).remove()
            })
        }, e
    }), t("select2/data/tokenizer", ["jquery"], function(t) {
        function e(t, e, i) {
            var n = i.get("tokenizer");
            void 0 !== n && (this.tokenizer = n), t.call(this, e, i)
        }
        return e.prototype.bind = function(t, e, i) {
            t.call(this, e, i), this.$search = e.dropdown.$search || e.selection.$search || i.find(".select2-search__field")
        }, e.prototype.query = function(t, e, i) {
            function n(t) {
                o.select(t)
            }
            var o = this;
            e.term = e.term || "";
            var r = this.tokenizer(e, this.options, n);
            r.term !== e.term && (this.$search.length && (this.$search.val(r.term), this.$search.focus()), e.term = r.term), t.call(this, e, i)
        }, e.prototype.tokenizer = function(e, i, n, o) {
            for (var r = n.get("tokenSeparators") || [], s = i.term, a = 0, l = this.createTag || function(t) {
                    return {
                        id: t.term,
                        text: t.term
                    }
                }; a < s.length;) {
                var c = s[a];
                if (-1 !== r.indexOf(c)) {
                    var h = s.substr(0, a),
                        u = t.extend({}, i, {
                            term: h
                        }),
                        p = l(u);
                    o(p), s = s.substr(a + 1) || "", a = 0
                } else a++
            }
            return {
                term: s
            }
        }, e
    }), t("select2/data/minimumInputLength", [], function() {
        function t(t, e, i) {
            this.minimumInputLength = i.get("minimumInputLength"), t.call(this, e, i)
        }
        return t.prototype.query = function(t, e, i) {
            return e.term = e.term || "", e.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                message: "inputTooShort",
                args: {
                    minimum: this.minimumInputLength,
                    input: e.term,
                    params: e
                }
            }) : void t.call(this, e, i)
        }, t
    }), t("select2/data/maximumInputLength", [], function() {
        function t(t, e, i) {
            this.maximumInputLength = i.get("maximumInputLength"), t.call(this, e, i)
        }
        return t.prototype.query = function(t, e, i) {
            return e.term = e.term || "", this.maximumInputLength > 0 && e.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                message: "inputTooLong",
                args: {
                    minimum: this.maximumInputLength,
                    input: e.term,
                    params: e
                }
            }) : void t.call(this, e, i)
        }, t
    }), t("select2/data/maximumSelectionLength", [], function() {
        function t(t, e, i) {
            this.maximumSelectionLength = i.get("maximumSelectionLength"), t.call(this, e, i)
        }
        return t.prototype.query = function(t, e, i) {
            var n = this;
            this.current(function(o) {
                var r = null != o ? o.length : 0;
                return n.maximumSelectionLength > 0 && r >= n.maximumSelectionLength ? void n.trigger("results:message", {
                    message: "maximumSelected",
                    args: {
                        maximum: n.maximumSelectionLength
                    }
                }) : void t.call(n, e, i)
            })
        }, t
    }), t("select2/dropdown", ["jquery", "./utils"], function(t, e) {
        function i(t, e) {
            this.$element = t, this.options = e, i.__super__.constructor.call(this)
        }
        return e.Extend(i, e.Observable), i.prototype.render = function() {
            var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
            return e.attr("dir", this.options.get("dir")), this.$dropdown = e, e
        }, i.prototype.position = function() {}, i.prototype.destroy = function() {
            this.$dropdown.remove()
        }, i.prototype.bind = function(t) {
            var e = this;
            t.on("select", function(t) {
                e._onSelect(t)
            }), t.on("unselect", function(t) {
                e._onUnSelect(t)
            })
        }, i.prototype._onSelect = function() {
            this.trigger("close")
        }, i.prototype._onUnSelect = function() {
            this.trigger("close")
        }, i
    }), t("select2/dropdown/search", ["jquery", "../utils"], function(t) {
        function e() {}
        return e.prototype.render = function(e) {
            var i = e.call(this),
                n = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" role="textbox" /></span>');
            return this.$searchContainer = n, this.$search = n.find("input"), i.prepend(n), i
        }, e.prototype.bind = function(t, e, i) {
            var n = this;
            t.call(this, e, i), this.$search.on("keydown", function(t) {
                n.trigger("keypress", t), n._keyUpPrevented = t.isDefaultPrevented()
            }), this.$search.on("keyup", function(t) {
                n.handleSearch(t)
            }), e.on("open", function() {
                n.$search.attr("tabindex", 0), n.$search.focus(), window.setTimeout(function() {
                    n.$search.focus()
                }, 0)
            }), e.on("close", function() {
                n.$search.attr("tabindex", -1), n.$search.val("")
            }), e.on("results:all", function(t) {
                if (null == t.query.term || "" === t.query.term) {
                    var e = n.showSearch(t);
                    e ? n.$searchContainer.removeClass("select2-search--hide") : n.$searchContainer.addClass("select2-search--hide")
                }
            })
        }, e.prototype.handleSearch = function() {
            if (!this._keyUpPrevented) {
                var t = this.$search.val();
                this.trigger("query", {
                    term: t
                })
            }
            this._keyUpPrevented = !1
        }, e.prototype.showSearch = function() {
            return !0
        }, e
    }), t("select2/dropdown/hidePlaceholder", [], function() {
        function t(t, e, i, n) {
            this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i, n)
        }
        return t.prototype.append = function(t, e) {
            e.results = this.removePlaceholder(e.results), t.call(this, e)
        }, t.prototype.normalizePlaceholder = function(t, e) {
            return "string" == typeof e && (e = {
                id: "",
                text: e
            }), e
        }, t.prototype.removePlaceholder = function(t, e) {
            for (var i = e.slice(0), n = e.length - 1; n >= 0; n--) {
                var o = e[n];
                this.placeholder.id === o.id && i.splice(n, 1)
            }
            return i
        }, t
    }), t("select2/dropdown/infiniteScroll", ["jquery"], function(t) {
        function e(t, e, i, n) {
            this.lastParams = {}, t.call(this, e, i, n), this.$loadingMore = this.createLoadingMore(), this.loading = !1
        }
        return e.prototype.append = function(t, e) {
            this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore)
        }, e.prototype.bind = function(e, i, n) {
            var o = this;
            e.call(this, i, n), i.on("query", function(t) {
                o.lastParams = t, o.loading = !0
            }), i.on("query:append", function(t) {
                o.lastParams = t, o.loading = !0
            }), this.$results.on("scroll", function() {
                var e = t.contains(document.documentElement, o.$loadingMore[0]);
                if (!o.loading && e) {
                    var i = o.$results.offset().top + o.$results.outerHeight(!1),
                        n = o.$loadingMore.offset().top + o.$loadingMore.outerHeight(!1);
                    i + 50 >= n && o.loadMore()
                }
            })
        }, e.prototype.loadMore = function() {
            this.loading = !0;
            var e = t.extend({}, {
                page: 1
            }, this.lastParams);
            e.page++, this.trigger("query:append", e)
        }, e.prototype.showLoadingMore = function(t, e) {
            return e.pagination && e.pagination.more
        }, e.prototype.createLoadingMore = function() {
            var e = t('<li class="option load-more" role="treeitem"></li>'),
                i = this.options.get("translations").get("loadingMore");
            return e.html(i(this.lastParams)), e
        }, e
    }), t("select2/dropdown/attachBody", ["jquery", "../utils"], function(t, e) {
        function i(t, e, i) {
            this.$dropdownParent = i.get("dropdownParent") || document.body, t.call(this, e, i)
        }
        return i.prototype.bind = function(t, e, i) {
            var n = this,
                o = !1;
            t.call(this, e, i), e.on("open", function() {
                n._showDropdown(), n._attachPositioningHandler(e), o || (o = !0, e.on("results:all", function() {
                    n._positionDropdown(), n._resizeDropdown()
                }), e.on("results:append", function() {
                    n._positionDropdown(), n._resizeDropdown()
                }))
            }), e.on("close", function() {
                n._hideDropdown(), n._detachPositioningHandler(e)
            }), this.$dropdownContainer.on("mousedown", function(t) {
                t.stopPropagation()
            })
        }, i.prototype.position = function(t, e, i) {
            e.attr("class", i.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({
                position: "absolute",
                top: -999999
            }), this.$container = i
        }, i.prototype.render = function(e) {
            var i = t("<span></span>"),
                n = e.call(this);
            return i.append(n), this.$dropdownContainer = i, i
        }, i.prototype._hideDropdown = function() {
            this.$dropdownContainer.detach()
        }, i.prototype._attachPositioningHandler = function(i) {
            var n = this,
                o = "scroll.select2." + i.id,
                r = "resize.select2." + i.id,
                s = "orientationchange.select2." + i.id;
            $watchers = this.$container.parents().filter(e.hasScroll), $watchers.each(function() {
                t(this).data("select2-scroll-position", {
                    x: t(this).scrollLeft(),
                    y: t(this).scrollTop()
                })
            }), $watchers.on(o, function() {
                var e = t(this).data("select2-scroll-position");
                t(this).scrollTop(e.y)
            }), t(window).on(o + " " + r + " " + s, function() {
                n._positionDropdown(), n._resizeDropdown()
            })
        }, i.prototype._detachPositioningHandler = function(i) {
            var n = "scroll.select2." + i.id,
                o = "resize.select2." + i.id,
                r = "orientationchange.select2." + i.id;
            $watchers = this.$container.parents().filter(e.hasScroll), $watchers.off(n), t(window).off(n + " " + o + " " + r)
        }, i.prototype._positionDropdown = function() {
            var e = t(window),
                i = this.$dropdown.hasClass("select2-dropdown--above"),
                n = this.$dropdown.hasClass("select2-dropdown--below"),
                o = null,
                r = (this.$container.position(), this.$container.offset());
            r.bottom = r.top + this.$container.outerHeight(!1);
            var s = {
                height: this.$container.outerHeight(!1)
            };
            s.top = r.top, s.bottom = r.top + s.height;
            var a = {
                    height: this.$dropdown.outerHeight(!1)
                },
                l = {
                    top: e.scrollTop(),
                    bottom: e.scrollTop() + e.height()
                },
                c = l.top < r.top - a.height,
                h = l.bottom > r.bottom + a.height,
                u = {
                    left: r.left,
                    top: s.bottom
                };
            i || n || (o = "below"), h || !c || i ? !c && h && i && (o = "below") : o = "above", ("above" == o || i && "below" !== o) && (u.top = s.top - a.height), null != o && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + o), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + o)), this.$dropdownContainer.css(u)
        }, i.prototype._resizeDropdown = function() {
            this.$dropdownContainer.width(), this.$dropdown.css({
                width: this.$container.outerWidth(!1) + "px"
            })
        }, i.prototype._showDropdown = function() {
            this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
        }, i
    }), t("select2/dropdown/minimumResultsForSearch", [], function() {
        function t(e) {
            count = 0;
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.children ? count += t(n.children) : count++
            }
            return count
        }

        function e(t, e, i, n) {
            this.minimumResultsForSearch = i.get("minimumResultsForSearch"), t.call(this, e, i, n)
        }
        return e.prototype.showSearch = function(e, i) {
            return t(i.data.results) < this.minimumResultsForSearch ? !1 : e.call(this, i)
        }, e
    }), t("select2/dropdown/selectOnClose", [], function() {
        function t() {}
        return t.prototype.bind = function(t, e, i) {
            var n = this;
            t.call(this, e, i), e.on("close", function() {
                n._handleSelectOnClose()
            })
        }, t.prototype._handleSelectOnClose = function() {
            var t = this.getHighlightedResults();
            t.length < 1 || t.trigger("mouseup")
        }, t
    }), t("select2/i18n/en", [], function() {
        return {
            errorLoading: function() {
                return "The results could not be loaded."
            },
            inputTooLong: function(t) {
                var e = t.input.length - t.maximum,
                    i = "Please delete " + e + " character";
                return 1 != e && (i += "s"), i
            },
            inputTooShort: function(t) {
                var e = t.minimum - t.input.length,
                    i = "Please enter " + e + " or more characters";
                return i
            },
            loadingMore: function() {
                return "Loading more results"
            },
            maximumSelected: function(t) {
                var e = "You can only select " + t.maximum + " item";
                return 1 != t.maximum && (e += "s"), e
            },
            noResults: function() {
                return "No results found"
            },
            searching: function() {
                return "Searching"
            }
        }
    }), t("select2/defaults", ["jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./i18n/en"], function(t, i, n, o, r, s, a, l, c, h, u, p, d, f, g, m, v, y, b, x, w, k, T, C, S, A, P) {
        function E() {
            this.reset()
        }
        E.prototype.apply = function(u) {
            if (u = t.extend({}, this.defaults, u), null == u.dataAdapter) {
                if (u.dataAdapter = null != u.ajax ? f : null != u.data ? d : p, u.minimumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, v)), u.maximumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, y)), u.maximumSelectionLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, b)), null != u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, g)), (null != u.tokenSeparators || null != u.tokenizer) && (u.dataAdapter = c.Decorate(u.dataAdapter, m)), null != u.query) {
                    var P = e(u.amdBase + "compat/query");
                    u.dataAdapter = c.Decorate(u.dataAdapter, P)
                }
                if (null != u.initSelection) {
                    var E = e(u.amdBase + "compat/initSelection");
                    u.dataAdapter = c.Decorate(u.dataAdapter, E)
                }
            }
            if (null == u.resultsAdapter && (u.resultsAdapter = i, null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, T)), null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, k)), u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, A))), null == u.dropdownAdapter) {
                if (u.multiple) u.dropdownAdapter = x;
                else {
                    var L = c.Decorate(x, w);
                    u.dropdownAdapter = L
                }
                u.minimumResultsForSearch > 0 && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, S)), u.dropdownAdapter = c.Decorate(u.dropdownAdapter, C)
            }
            if (null == u.selectionAdapter && (u.selectionAdapter = u.multiple ? o : n, null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, r), u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, s))), u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)), u.selectionAdapter = c.Decorate(u.selectionAdapter, l)), "string" == typeof u.language)
                if (u.language.indexOf("-") > 0) {
                    var D = u.language.split("-"),
                        O = D[0];
                    u.language = [u.language, O]
                } else u.language = [u.language];
            if (t.isArray(u.language)) {
                var _ = new h;
                u.language.push("en");
                for (var M = u.language, N = 0; N < M.length; N++) {
                    var I = M[N],
                        $ = {};
                    try {
                        $ = h.loadPath(I)
                    } catch (j) {
                        try {
                            I = this.defaults.amdLanguageBase + I, $ = h.loadPath(I)
                        } catch (R) {
                            console && console.warn && console.warn('Select2: The lanugage file for "' + I + '" could not be automatically loaded. A fallback will be used instead.');
                            continue
                        }
                    }
                    _.extend($)
                }
                u.translations = _
            } else u.translations = new h(u.language);
            return u
        }, E.prototype.reset = function() {
            function e(t) {
                function e(t) {
                    return u[t] || t
                }
                return t.replace(/[^\u0000-\u007E]/g, e)
            }

            function i(n, o) {
                if ("" === t.trim(n.term)) return o;
                if (o.children && o.children.length > 0) {
                    for (var r = t.extend(!0, {}, o), s = o.children.length - 1; s >= 0; s--) {
                        var a = o.children[s],
                            l = i(n, a);
                        null == l && r.children.splice(s, 1)
                    }
                    return r.children.length > 0 ? r : i(n, r)
                }
                var c = e(o.text).toUpperCase(),
                    h = e(n.term).toUpperCase();
                return c.indexOf(h) > -1 ? o : null
            }
            this.defaults = {
                amdBase: "select2/",
                amdLanguageBase: "select2/i18n/",
                language: P,
                matcher: i,
                minimumInputLength: 0,
                maximumInputLength: 0,
                maximumSelectionLength: 0,
                minimumResultsForSearch: 0,
                selectOnClose: !1,
                sorter: function(t) {
                    return t
                },
                templateResult: function(t) {
                    return t.text
                },
                templateSelection: function(t) {
                    return t.text
                },
                theme: "default",
                width: "resolve"
            }
        }, E.prototype.set = function(e, i) {
            var n = t.camelCase(e),
                o = {};
            o[n] = i;
            var r = c._convertData(o);
            t.extend(this.defaults, r)
        };
        var L = new E;
        return L
    }), t("select2/options", ["jquery", "./defaults", "./utils"], function(t, e, i) {
        function n(t, i) {
            this.options = t, null != i && this.fromElement(i), this.options = e.apply(this.options)
        }
        return n.prototype.fromElement = function(e) {
            var n = ["select2"];
            null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (this.options.dir = e.prop("dir") ? e.prop("dir") : e.closest("[dir]").prop("dir") ? e.closest("[dir]").prop("dir") : "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2-tags") && (console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2-tags")), e.data("tags", !0)), e.data("ajax-url") && (console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.data("ajax--url", e.data("ajax-url")));
            var o = e.data();
            o = i._convertData(o);
            for (var r in o) n.indexOf(r) > -1 || (t.isPlainObject(this.options[r]) ? t.extend(this.options[r], o[r]) : this.options[r] = o[r]);
            return this
        }, n.prototype.get = function(t) {
            return this.options[t]
        }, n.prototype.set = function(t, e) {
            this.options[t] = e
        }, n
    }), t("select2/core", ["jquery", "./options", "./utils", "./keys"], function(t, e, n, o) {
        var r = function(t, i) {
            null != t.data("select2") && t.data("select2").destroy(), this.$element = t, this.id = this._generateId(t), i = i || {}, this.options = new e(i, t), r.__super__.constructor.call(this);
            var n = this.options.get("dataAdapter");
            this.data = new n(t, this.options);
            var o = this.render();
            this._placeContainer(o);
            var s = this.options.get("selectionAdapter");
            this.selection = new s(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, o);
            var a = this.options.get("dropdownAdapter");
            this.dropdown = new a(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, o);
            var l = this.options.get("resultsAdapter");
            this.results = new l(t, this.options, this.data), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
            var c = this;
            this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.data.current(function(t) {
                c.trigger("selection:update", {
                    data: t
                })
            }), t.hide(), this._syncAttributes(), this._tabindex = t.attr("tabindex") || 0, t.attr("tabindex", "-1"), t.data("select2", this)
        };
        return n.Extend(r, n.Observable), r.prototype._generateId = function(t) {
            var e = "";
            return e = null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), e = "select2-" + e
        }, r.prototype._placeContainer = function(t) {
            t.insertAfter(this.$element);
            var e = this._resolveWidth(this.$element, this.options.get("width"));
            null != e && t.css("width", e)
        }, r.prototype._resolveWidth = function(t, e) {
            var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
            if ("resolve" == e) {
                var o = this._resolveWidth(t, "style");
                return null != o ? o : this._resolveWidth(t, "element")
            }
            if ("element" == e) {
                var r = t.outerWidth(!1);
                return 0 >= r ? "auto" : r + "px"
            }
            if ("style" == e) {
                var s = t.attr("style");
                if ("string" != typeof s) return null;
                var a = s.split(";");
                for (i = 0, l = a.length; i < l; i += 1) {
                    attr = a[i].replace(/\s/g, "");
                    var c = attr.match(n);
                    if (null !== c && c.length >= 1) return c[1]
                }
                return null
            }
            return e
        }, r.prototype._bindAdapters = function() {
            this.data.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
        }, r.prototype._registerDomEvents = function() {
            var e = this;
            this.$element.on("change.select2", function() {
                e.data.current(function(t) {
                    e.trigger("selection:update", {
                        data: t
                    })
                })
            }), this._sync = n.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
            var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            null != i && (this._observer = new i(function(i) {
                t.each(i, e._sync)
            }), this._observer.observe(this.$element[0], {
                attributes: !0,
                subtree: !1
            }))
        }, r.prototype._registerDataEvents = function() {
            var t = this;
            this.data.on("*", function(e, i) {
                t.trigger(e, i)
            })
        }, r.prototype._registerSelectionEvents = function() {
            var t = this,
                e = ["toggle"];
            this.selection.on("toggle", function() {
                t.toggleDropdown()
            }), this.selection.on("*", function(i, n) {
                -1 === e.indexOf(i) && t.trigger(i, n)
            })
        }, r.prototype._registerDropdownEvents = function() {
            var t = this;
            this.dropdown.on("*", function(e, i) {
                t.trigger(e, i)
            })
        }, r.prototype._registerResultsEvents = function() {
            var t = this;
            this.results.on("*", function(e, i) {
                t.trigger(e, i)
            })
        }, r.prototype._registerEvents = function() {
            var t = this;
            this.on("open", function() {
                t.$container.addClass("select2-container--open")
            }), this.on("close", function() {
                t.$container.removeClass("select2-container--open")
            }), this.on("enable", function() {
                t.$container.removeClass("select2-container--disabled")
            }), this.on("disable", function() {
                t.$container.addClass("select2-container--disabled")
            }), this.on("query", function(e) {
                this.data.query(e, function(i) {
                    t.trigger("results:all", {
                        data: i,
                        query: e
                    })
                })
            }), this.on("query:append", function(e) {
                this.data.query(e, function(i) {
                    t.trigger("results:append", {
                        data: i,
                        query: e
                    })
                })
            }), this.on("keypress", function(e) {
                var i = e.which;
                t.isOpen() ? i === o.ENTER ? (t.trigger("results:select"), e.preventDefault()) : i === o.UP ? (t.trigger("results:previous"), e.preventDefault()) : i === o.DOWN ? (t.trigger("results:next"), e.preventDefault()) : (i === o.ESC || i === o.TAB) && (t.close(), e.preventDefault()) : (i === o.ENTER || i === o.SPACE || (i === o.DOWN || i === o.UP) && e.altKey) && (t.open(), e.preventDefault())
            })
        }, r.prototype._syncAttributes = function() {
            this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable")) : this.trigger("enable")
        }, r.prototype.trigger = function(t, e) {
            var i = r.__super__.trigger,
                n = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting"
                };
            if (t in n) {
                var o = n[t],
                    s = {
                        prevented: !1,
                        name: t,
                        args: e
                    };
                if (i.call(this, o, s), s.prevented) return void(e.prevented = !0)
            }
            i.call(this, t, e)
        }, r.prototype.toggleDropdown = function() {
            this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
        }, r.prototype.open = function() {
            this.isOpen() || (this.trigger("query", {}), this.trigger("open"))
        }, r.prototype.close = function() {
            this.isOpen() && this.trigger("close")
        }, r.prototype.isOpen = function() {
            return this.$container.hasClass("select2-container--open")
        }, r.prototype.enable = function(t) {
            console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), 0 === t.length && (t = [!0]);
            var e = !t[0];
            this.$element.prop("disabled", e)
        }, r.prototype.val = function(e) {
            if (console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), 0 === e.length) return this.$element.val();
            var i = e[0];
            t.isArray(i) && (i = t.map(i, function(t) {
                return t.toString()
            })), this.$element.val(i).trigger("change")
        }, r.prototype.destroy = function() {
            this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer && (this._observer.disconnect(), this._observer = null), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this._tabindex), this.$element.show(), this.$element.removeData("select2"), this.data.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.data = null, this.selection = null, this.dropdown = null, this.results = null
        }, r.prototype.render = function() {
            var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
            return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
        }, r
    }), t("jquery.select2", ["jquery", "./select2/core", "./select2/defaults"], function(t, i, n) {
        try {
            e("jquery.mousewheel")
        } catch (o) {}
        return null == t.fn.select2 && (t.fn.select2 = function(e) {
            if (e = e || {}, "object" == typeof e) return this.each(function() {
                {
                    var n = t.extend({}, e, !0);
                    new i(t(this), n)
                }
            }), this;
            if ("string" == typeof e) {
                var n = this.data("select2"),
                    o = Array.prototype.slice.call(arguments, 1);
                return n[e](o)
            }
            throw new Error("Invalid arguments for Select2: " + e)
        }), null == t.fn.select2.defaults && (t.fn.select2.defaults = n), i
    }), e("jquery.select2"), jQuery.fn.select2.amd = {
        define: t,
        require: e
    }
}(),
function() {
    "use strict";

    function t(t) {
        return t.split("").reverse().join("")
    }

    function e(t, e) {
        return t.substring(0, e.length) === e
    }

    function i(t, e) {
        return t.slice(-1 * e.length) === e
    }

    function n(t, e, i) {
        if ((t[e] || t[i]) && t[e] === t[i]) throw new Error(e)
    }

    function o(t) {
        return "number" == typeof t && isFinite(t)
    }

    function r(t, e) {
        var i = Math.pow(10, e);
        return (Math.round(t * i) / i).toFixed(e)
    }

    function s(e, i, n, s, a, l, c, h, u, p, d, f) {
        var g, m, v, y = f,
            b = "",
            x = "";
        return l && (f = l(f)), o(f) ? (e !== !1 && 0 === parseFloat(f.toFixed(e)) && (f = 0), 0 > f && (g = !0, f = Math.abs(f)), e !== !1 && (f = r(f, e)), f = f.toString(), -1 !== f.indexOf(".") ? (m = f.split("."), v = m[0], n && (b = n + m[1])) : v = f, i && (v = t(v).match(/.{1,3}/g), v = t(v.join(t(i)))), g && h && (x += h), s && (x += s), g && u && (x += u), x += v, x += b, a && (x += a), p && (x = p(x, y)), x) : !1
    }

    function a(t, n, r, s, a, l, c, h, u, p, d, f) {
        var g, m = "";
        return d && (f = d(f)), f && "string" == typeof f ? (h && e(f, h) && (f = f.replace(h, ""), g = !0), s && e(f, s) && (f = f.replace(s, "")), u && e(f, u) && (f = f.replace(u, ""), g = !0), a && i(f, a) && (f = f.slice(0, -1 * a.length)), n && (f = f.split(n).join("")), r && (f = f.replace(r, ".")), g && (m += "-"), m += f, m = m.replace(/[^0-9\.\-.]/g, ""), "" === m ? !1 : (m = Number(m), c && (m = c(m)), o(m) ? m : !1)) : !1
    }

    function l(t) {
        var e, i, o, r = {};
        for (e = 0; e < u.length; e += 1)
            if (i = u[e], o = t[i], void 0 === o) r[i] = "negative" !== i || r.negativeBefore ? "mark" === i && "." !== r.thousand ? "." : !1 : "-";
            else if ("decimals" === i) {
            if (!(o >= 0 && 8 > o)) throw new Error(i);
            r[i] = o
        } else if ("encoder" === i || "decoder" === i || "edit" === i || "undo" === i) {
            if ("function" != typeof o) throw new Error(i);
            r[i] = o
        } else {
            if ("string" != typeof o) throw new Error(i);
            r[i] = o
        }
        return n(r, "mark", "thousand"), n(r, "prefix", "negative"), n(r, "prefix", "negativeBefore"), r
    }

    function c(t, e, i) {
        var n, o = [];
        for (n = 0; n < u.length; n += 1) o.push(t[u[n]]);
        return o.push(i), e.apply("", o)
    }

    function h(t) {
        return this instanceof h ? void("object" == typeof t && (t = l(t), this.to = function(e) {
            return c(t, s, e)
        }, this.from = function(e) {
            return c(t, a, e)
        })) : new h(t)
    }
    var u = ["decimals", "thousand", "mark", "prefix", "postfix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];
    window.wNumb = h
}(),
function(t) {
    "use strict";

    function e(e) {
        return e instanceof t || t.zepto && t.zepto.isZ(e)
    }

    function i(e, i) {
        return "string" == typeof e && 0 === e.indexOf("-inline-") ? (this.method = i || "html", this.target = this.el = t(e.replace("-inline-", "") || "<div/>"), !0) : void 0
    }

    function n(e) {
        if ("string" == typeof e && 0 !== e.indexOf("-")) {
            this.method = "val";
            var i = document.createElement("input");
            return i.name = e, i.type = "hidden", this.target = this.el = t(i), !0
        }
    }

    function o(t) {
        return "function" == typeof t ? (this.target = !1, this.method = t, !0) : void 0
    }

    function r(t, i) {
        return e(t) && !i ? (t.is("input, select, textarea") ? (this.method = "val", this.target = t.on("change.liblink", this.changeHandler)) : (this.target = t, this.method = "html"), !0) : void 0
    }

    function s(t, i) {
        return e(t) && ("function" == typeof i || "string" == typeof i && t[i]) ? (this.method = i, this.target = t, !0) : void 0
    }

    function a(e, i, n) {
        var o = this,
            r = !1;
        if (this.changeHandler = function(e) {
                var i = o.formatInstance.from(t(this).val());
                return i === !1 || isNaN(i) ? (t(this).val(o.lastSetValue), !1) : void o.changeHandlerMethod.call("", e, i)
            }, this.el = !1, this.formatInstance = n, t.each(h, function(t, n) {
                return r = n.call(o, e, i), !r
            }), !r) throw new RangeError("(Link) Invalid Link.")
    }

    function l(t) {
        this.items = [], this.elements = [], this.origin = t
    }

    function c(e, i, n, o) {
        0 === e && (e = this.LinkDefaultFlag), this.linkAPI || (this.linkAPI = {}), this.linkAPI[e] || (this.linkAPI[e] = new l(this));
        var r = new a(i, n, o || this.LinkDefaultFormatter);
        r.target || (r.target = t(this)), r.changeHandlerMethod = this.LinkConfirm(e, r.el), this.linkAPI[e].push(r, r.el), this.LinkUpdate(e)
    }
    var h = [i, n, o, r, s];
    a.prototype.set = function(t) {
        var e = Array.prototype.slice.call(arguments),
            i = e.slice(1);
        this.lastSetValue = this.formatInstance.to(t), i.unshift(this.lastSetValue), ("function" == typeof this.method ? this.method : this.target[this.method]).apply(this.target, i)
    }, l.prototype.push = function(t, e) {
        this.items.push(t), e && this.elements.push(e)
    }, l.prototype.reconfirm = function(t) {
        var e;
        for (e = 0; e < this.elements.length; e += 1) this.origin.LinkConfirm(t, this.elements[e])
    }, l.prototype.remove = function() {
        var t;
        for (t = 0; t < this.items.length; t += 1) this.items[t].target.off(".liblink");
        for (t = 0; t < this.elements.length; t += 1) this.elements[t].remove()
    }, l.prototype.change = function(t) {
        if (this.origin.LinkIsEmitting) return !1;
        this.origin.LinkIsEmitting = !0;
        var e, i = Array.prototype.slice.call(arguments, 1);
        for (i.unshift(t), e = 0; e < this.items.length; e += 1) this.items[e].set.apply(this.items[e], i);
        this.origin.LinkIsEmitting = !1
    }, t.fn.Link = function(e) {
        var i = this;
        if (e === !1) return i.each(function() {
            this.linkAPI && (t.map(this.linkAPI, function(t) {
                t.remove()
            }), delete this.linkAPI)
        });
        if (void 0 === e) e = 0;
        else if ("string" != typeof e) throw new Error("Flag must be string.");
        return {
            to: function(t, n, o) {
                return i.each(function() {
                    c.call(this, e, t, n, o)
                })
            }
        }
    }
}(window.jQuery || window.Zepto),
function(t) {
    "use strict";

    function e(e) {
        return t.grep(e, function(i, n) {
            return n === t.inArray(i, e)
        })
    }

    function i(t, e) {
        return Math.round(t / e) * e
    }

    function n(t) {
        return "number" == typeof t && !isNaN(t) && isFinite(t)
    }

    function o(t) {
        var e = Math.pow(10, 7);
        return Number((Math.round(t * e) / e).toFixed(7))
    }

    function r(t, e, i) {
        t.addClass(e), setTimeout(function() {
            t.removeClass(e)
        }, i)
    }

    function s(t) {
        return Math.max(Math.min(t, 100), 0)
    }

    function a(e) {
        return t.isArray(e) ? e : [e]
    }

    function l(t) {
        var e = t.split(".");
        return e.length > 1 ? e[1].length : 0
    }

    function c(t, e) {
        return 100 / (e - t)
    }

    function h(t, e) {
        return 100 * e / (t[1] - t[0])
    }

    function u(t, e) {
        return h(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0])
    }

    function p(t, e) {
        return e * (t[1] - t[0]) / 100 + t[0]
    }

    function d(t, e) {
        for (var i = 1; t >= e[i];) i += 1;
        return i
    }

    function f(t, e, i) {
        if (i >= t.slice(-1)[0]) return 100;
        var n, o, r, s, a = d(i, t);
        return n = t[a - 1], o = t[a], r = e[a - 1], s = e[a], r + u([n, o], i) / c(r, s)
    }

    function g(t, e, i) {
        if (i >= 100) return t.slice(-1)[0];
        var n, o, r, s, a = d(i, e);
        return n = t[a - 1], o = t[a], r = e[a - 1], s = e[a], p([n, o], (i - r) * c(r, s))
    }

    function m(t, e, n, o) {
        if (100 === o) return o;
        var r, s, a = d(o, t);
        return n ? (r = t[a - 1], s = t[a], o - r > (s - r) / 2 ? s : r) : e[a - 1] ? t[a - 1] + i(o - t[a - 1], e[a - 1]) : o
    }

    function v(t, e, i) {
        var o;
        if ("number" == typeof e && (e = [e]), "[object Array]" !== Object.prototype.toString.call(e)) throw new Error("noUiSlider: 'range' contains invalid value.");
        if (o = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t), !n(o) || !n(e[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
        i.xPct.push(o), i.xVal.push(e[0]), o ? i.xSteps.push(isNaN(e[1]) ? !1 : e[1]) : isNaN(e[1]) || (i.xSteps[0] = e[1])
    }

    function y(t, e, i) {
        return e ? void(i.xSteps[t] = h([i.xVal[t], i.xVal[t + 1]], e) / c(i.xPct[t], i.xPct[t + 1])) : !0
    }

    function b(t, e, i, n) {
        this.xPct = [], this.xVal = [], this.xSteps = [n || !1], this.xNumSteps = [!1], this.snap = e, this.direction = i;
        var o, r = [];
        for (o in t) t.hasOwnProperty(o) && r.push([t[o], o]);
        for (r.sort(function(t, e) {
                return t[0] - e[0]
            }), o = 0; o < r.length; o++) v(r[o][1], r[o][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), o = 0; o < this.xNumSteps.length; o++) y(o, this.xNumSteps[o], this)
    }

    function x(t, e) {
        if (!n(e)) throw new Error("noUiSlider: 'step' is not numeric.");
        t.singleStep = e
    }

    function w(e, i) {
        if ("object" != typeof i || t.isArray(i)) throw new Error("noUiSlider: 'range' is not an object.");
        if (void 0 === i.min || void 0 === i.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        e.spectrum = new b(i, e.snap, e.dir, e.singleStep)
    }

    function k(e, i) {
        if (i = a(i), !t.isArray(i) || !i.length || i.length > 2) throw new Error("noUiSlider: 'start' option is incorrect.");
        e.handles = i.length, e.start = i
    }

    function T(t, e) {
        if (t.snap = e, "boolean" != typeof e) throw new Error("noUiSlider: 'snap' option must be a boolean.")
    }

    function C(t, e) {
        if (t.animate = e, "boolean" != typeof e) throw new Error("noUiSlider: 'animate' option must be a boolean.")
    }

    function S(t, e) {
        if ("lower" === e && 1 === t.handles) t.connect = 1;
        else if ("upper" === e && 1 === t.handles) t.connect = 2;
        else if (e === !0 && 2 === t.handles) t.connect = 3;
        else {
            if (e !== !1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
            t.connect = 0
        }
    }

    function A(t, e) {
        switch (e) {
            case "horizontal":
                t.ort = 0;
                break;
            case "vertical":
                t.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.")
        }
    }

    function P(t, e) {
        if (!n(e)) throw new Error("noUiSlider: 'margin' option must be numeric.");
        if (t.margin = t.spectrum.getMargin(e), !t.margin) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
    }

    function E(t, e) {
        if (!n(e)) throw new Error("noUiSlider: 'limit' option must be numeric.");
        if (t.limit = t.spectrum.getMargin(e), !t.limit) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")
    }

    function L(t, e) {
        switch (e) {
            case "ltr":
                t.dir = 0;
                break;
            case "rtl":
                t.dir = 1, t.connect = [0, 2, 1, 3][t.connect];
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.")
        }
    }

    function D(t, e) {
        if ("string" != typeof e) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        var i = e.indexOf("tap") >= 0,
            n = e.indexOf("drag") >= 0,
            o = e.indexOf("fixed") >= 0,
            r = e.indexOf("snap") >= 0;
        t.events = {
            tap: i || r,
            drag: n,
            fixed: o,
            snap: r
        }
    }

    function O(t, e) {
        if (t.format = e, "function" == typeof e.to && "function" == typeof e.from) return !0;
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
    }

    function _(e) {
        var i, n = {
            margin: 0,
            limit: 0,
            animate: !0,
            format: Z
        };
        return i = {
            step: {
                r: !1,
                t: x
            },
            start: {
                r: !0,
                t: k
            },
            connect: {
                r: !0,
                t: S
            },
            direction: {
                r: !0,
                t: L
            },
            snap: {
                r: !1,
                t: T
            },
            animate: {
                r: !1,
                t: C
            },
            range: {
                r: !0,
                t: w
            },
            orientation: {
                r: !1,
                t: A
            },
            margin: {
                r: !1,
                t: P
            },
            limit: {
                r: !1,
                t: E
            },
            behaviour: {
                r: !0,
                t: D
            },
            format: {
                r: !1,
                t: O
            }
        }, e = t.extend({
            connect: !1,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal"
        }, e), t.each(i, function(t, i) {
            if (void 0 === e[t]) {
                if (i.r) throw new Error("noUiSlider: '" + t + "' is required.");
                return !0
            }
            i.t(n, e[t])
        }), n.style = n.ort ? "top" : "left", n
    }

    function M(t, e, i) {
        var n = t + e[0],
            o = t + e[1];
        return i ? (0 > n && (o += Math.abs(n)), o > 100 && (n -= o - 100), [s(n), s(o)]) : [n, o]
    }

    function N(t) {
        t.preventDefault();
        var e, i, n = 0 === t.type.indexOf("touch"),
            o = 0 === t.type.indexOf("mouse"),
            r = 0 === t.type.indexOf("pointer"),
            s = t;
        return 0 === t.type.indexOf("MSPointer") && (r = !0), t.originalEvent && (t = t.originalEvent), n && (e = t.changedTouches[0].pageX, i = t.changedTouches[0].pageY), (o || r) && (r || void 0 !== window.pageXOffset || (window.pageXOffset = document.documentElement.scrollLeft, window.pageYOffset = document.documentElement.scrollTop), e = t.clientX + window.pageXOffset, i = t.clientY + window.pageYOffset), s.points = [e, i], s.cursor = o, s
    }

    function I(e, i) {
        var n = t("<div><div/></div>").addClass(K[2]),
            o = ["-lower", "-upper"];
        return e && o.reverse(), n.children().addClass(K[3] + " " + K[3] + o[i]), n
    }

    function $(t, e, i) {
        switch (t) {
            case 1:
                e.addClass(K[7]), i[0].addClass(K[6]);
                break;
            case 3:
                i[1].addClass(K[6]);
            case 2:
                i[0].addClass(K[7]);
            case 0:
                e.addClass(K[6])
        }
    }

    function j(t, e, i) {
        var n, o = [];
        for (n = 0; t > n; n += 1) o.push(I(e, n).appendTo(i));
        return o
    }

    function R(e, i, n) {
        return n.addClass([K[0], K[8 + e], K[4 + i]].join(" ")), t("<div/>").appendTo(n).addClass(K[1])
    }

    function z(e, i, n) {
        function o() {
            return E[["width", "height"][i.ort]]()
        }

        function c(t) {
            var e, i = [D.val()];
            for (e = 0; e < t.length; e += 1) D.trigger(t[e], i)
        }

        function h(t) {
            return 1 === t.length ? t[0] : i.dir ? t.reverse() : t
        }

        function u(t) {
            return function(e, i) {
                D.val([t ? null : i, t ? i : null], !0)
            }
        }

        function p(e) {
            var i = t.inArray(e, z);
            D[0].linkAPI && D[0].linkAPI[e] && D[0].linkAPI[e].change(I[i], L[i].children(), D)
        }

        function d(e, n) {
            var o = t.inArray(e, z);
            return n && n.appendTo(L[o].children()), i.dir && i.handles > 1 && (o = 1 === o ? 0 : 1), u(o)
        }

        function f() {
            var t, e;
            for (t = 0; t < z.length; t += 1) this.linkAPI && this.linkAPI[e = z[t]] && this.linkAPI[e].reconfirm(e)
        }

        function g(t, e, n, o) {
            return t = t.replace(/\s/g, U + " ") + U, e.on(t, function(t) {
                return D.attr("disabled") ? !1 : D.hasClass(K[14]) ? !1 : (t = N(t), t.calcPoint = t.points[i.ort], void n(t, o))
            })
        }

        function m(t, e) {
            var i, n = e.handles || L,
                r = !1,
                s = 100 * (t.calcPoint - e.start) / o(),
                a = n[0][0] !== L[0][0] ? 1 : 0;
            i = M(s, e.positions, n.length > 1), r = w(n[0], i[a], 1 === n.length), n.length > 1 && (r = w(n[1], i[a ? 0 : 1], !1) || r), r && c(["slide"])
        }

        function v(e) {
            t("." + K[15]).removeClass(K[15]), e.cursor && t("body").css("cursor", "").off(U), Y.off(U), D.removeClass(K[12]), c(["set", "change"])
        }

        function y(e, i) {
            1 === i.handles.length && i.handles[0].children().addClass(K[15]), e.stopPropagation(), g(V.move, Y, m, {
                start: e.calcPoint,
                handles: i.handles,
                positions: [O[0], O[L.length - 1]]
            }), g(V.end, Y, v, null), e.cursor && (t("body").css("cursor", t(e.target).css("cursor")), L.length > 1 && D.addClass(K[12]), t("body").on("selectstart" + U, !1))
        }

        function b(e) {
            var n, s = e.calcPoint,
                a = 0;
            e.stopPropagation(), t.each(L, function() {
                a += this.offset()[i.style]
            }), a = a / 2 > s || 1 === L.length ? 0 : 1, s -= E.offset()[i.style], n = 100 * s / o(), i.events.snap || r(D, K[14], 300), w(L[a], n), c(["slide", "set", "change"]), i.events.snap && y(e, {
                handles: [L[a]]
            })
        }

        function x(t) {
            var e, i;
            if (!t.fixed)
                for (e = 0; e < L.length; e += 1) g(V.start, L[e].children(), y, {
                    handles: [L[e]]
                });
            t.tap && g(V.start, E, b, {
                handles: L
            }), t.drag && (i = E.find("." + K[7]).addClass(K[10]), t.fixed && (i = i.add(E.children().not(i).children())), g(V.start, i, y, {
                handles: L
            }))
        }

        function w(t, e, n) {
            var o = t[0] !== L[0][0] ? 1 : 0,
                r = O[0] + i.margin,
                a = O[1] - i.margin,
                l = O[0] + i.limit,
                c = O[1] - i.limit;
            return L.length > 1 && (e = o ? Math.max(e, r) : Math.min(e, a)), n !== !1 && i.limit && L.length > 1 && (e = o ? Math.min(e, l) : Math.max(e, c)), e = _.getStep(e), e = s(parseFloat(e.toFixed(7))), e === O[o] ? !1 : (t.css(i.style, e + "%"), t.is(":first-child") && t.toggleClass(K[17], e > 50), O[o] = e, I[o] = _.fromStepping(e), p(z[o]), !0)
        }

        function k(t, e) {
            var n, o, r;
            for (i.limit && (t += 1), n = 0; t > n; n += 1) o = n % 2, r = e[o], null !== r && r !== !1 && ("number" == typeof r && (r = String(r)), r = i.format.from(r), (r === !1 || isNaN(r) || w(L[o], _.toStepping(r), n === 3 - i.dir) === !1) && p(z[o]))
        }

        function T(t) {
            if (D[0].LinkIsEmitting) return this;
            var e, n = a(t);
            return i.dir && i.handles > 1 && n.reverse(), i.animate && -1 !== O[0] && r(D, K[14], 300), e = L.length > 1 ? 3 : 1, 1 === n.length && (e = 1), k(e, n), c(["set"]), this
        }

        function C() {
            var t, e = [];
            for (t = 0; t < i.handles; t += 1) e[t] = i.format.to(I[t]);
            return h(e)
        }

        function S() {
            return t(this).off(U).removeClass(K.join(" ")).empty(), delete this.LinkUpdate, delete this.LinkConfirm, delete this.LinkDefaultFormatter, delete this.LinkDefaultFlag, delete this.reappend, delete this.vGet, delete this.vSet, delete this.getCurrentStep, delete this.getInfo, delete this.destroy, n
        }

        function A() {
            var e = t.map(O, function(t, e) {
                var i = _.getApplicableStep(t),
                    n = l(String(i[2])),
                    o = I[e],
                    r = 100 === t ? null : i[2],
                    s = Number((o - i[2]).toFixed(n)),
                    a = 0 === t ? null : s >= i[1] ? i[2] : i[0] || !1;
                return [
                    [a, r]
                ]
            });
            return h(e)
        }

        function P() {
            return n
        }
        var E, L, D = t(e),
            O = [-1, -1],
            _ = i.spectrum,
            I = [],
            z = ["lower", "upper"].slice(0, i.handles);
        if (i.dir && z.reverse(), e.LinkUpdate = p, e.LinkConfirm = d, e.LinkDefaultFormatter = i.format, e.LinkDefaultFlag = "lower", e.reappend = f, D.hasClass(K[0])) throw new Error("Slider was already initialized.");
        E = R(i.dir, i.ort, D), L = j(i.handles, i.dir, E), $(i.connect, D, L), x(i.events), e.vSet = T, e.vGet = C, e.destroy = S, e.getCurrentStep = A, e.getOriginalOptions = P, e.getInfo = function() {
            return [_, i.style, i.ort]
        }, D.val(i.start)
    }

    function H(t) {
        var e = _(t, this);
        return this.each(function() {
            z(this, e, t)
        })
    }

    function F(e) {
        return this.each(function() {
            if (!this.destroy) return void t(this).noUiSlider(e);
            var i = t(this).val(),
                n = this.destroy(),
                o = t.extend({}, n, e);
            t(this).noUiSlider(o), this.reappend(), n.start === o.start && t(this).val(i)
        })
    }

    function B() {
        return this[0][arguments.length ? "vSet" : "vGet"].apply(this[0], arguments)
    }

    function W(e, i, n, o) {
        if ("range" === i || "steps" === i) return e.xVal;
        if ("count" === i) {
            var r, s = 100 / (n - 1),
                a = 0;
            for (n = [];
                (r = a++ * s) <= 100;) n.push(r);
            i = "positions"
        }
        return "positions" === i ? t.map(n, function(t) {
            return e.fromStepping(o ? e.getStep(t) : t)
        }) : "values" === i ? o ? t.map(n, function(t) {
            return e.fromStepping(e.getStep(e.toStepping(t)))
        }) : n : void 0
    }

    function X(i, n, o, r) {
        var s = i.direction,
            a = {},
            l = i.xVal[0],
            c = i.xVal[i.xVal.length - 1],
            h = !1,
            u = !1,
            p = 0;
        return i.direction = 0, r = e(r.slice().sort(function(t, e) {
            return t - e
        })), r[0] !== l && (r.unshift(l), h = !0), r[r.length - 1] !== c && (r.push(c), u = !0), t.each(r, function(e) {
            var s, l, c, d, f, g, m, v, y, b, x = r[e],
                w = r[e + 1];
            if ("steps" === o && (s = i.xNumSteps[e]), s || (s = w - x), x !== !1 && void 0 !== w)
                for (l = x; w >= l; l += s) {
                    for (d = i.toStepping(l), f = d - p, v = f / n, y = Math.round(v), b = f / y, c = 1; y >= c; c += 1) g = p + c * b, a[g.toFixed(5)] = ["x", 0];
                    m = t.inArray(l, r) > -1 ? 1 : "steps" === o ? 2 : 0, !e && h && (m = 0), l === w && u || (a[d.toFixed(5)] = [l, m]), p = d
                }
        }), i.direction = s, a
    }

    function q(e, i, n, o, r, s) {
        function a(t) {
            return ["-normal", "-large", "-sub"][t]
        }

        function l(t, i, n) {
            return 'class="' + i + " " + i + "-" + h + " " + i + a(n[1], n[0]) + '" style="' + e + ": " + t + '%"'
        }

        function c(t, e) {
            n && (t = 100 - t), e[1] = e[1] && r ? r(e[0], e[1]) : e[1], u.append("<div " + l(t, "noUi-marker", e) + "></div>"), e[1] && u.append("<div " + l(t, "noUi-value", e) + ">" + s.to(e[0]) + "</div>")
        }
        var h = ["horizontal", "vertical"][i],
            u = t("<div/>");
        return u.addClass("noUi-pips noUi-pips-" + h), t.each(o, c), u
    }
    var Y = t(document),
        G = t.fn.val,
        U = ".nui",
        V = window.navigator.pointerEnabled ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup"
        } : window.navigator.msPointerEnabled ? {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
        } : {
            start: "mousedown touchstart",
            move: "mousemove touchmove",
            end: "mouseup touchend"
        },
        K = ["noUi-target", "noUi-base", "noUi-origin", "noUi-handle", "noUi-horizontal", "noUi-vertical", "noUi-background", "noUi-connect", "noUi-ltr", "noUi-rtl", "noUi-dragable", "", "noUi-state-drag", "", "noUi-state-tap", "noUi-active", "", "noUi-stacking"];
    b.prototype.getMargin = function(t) {
        return 2 === this.xPct.length ? h(this.xVal, t) : !1
    }, b.prototype.toStepping = function(t) {
        return t = f(this.xVal, this.xPct, t), this.direction && (t = 100 - t), t
    }, b.prototype.fromStepping = function(t) {
        return this.direction && (t = 100 - t), o(g(this.xVal, this.xPct, t))
    }, b.prototype.getStep = function(t) {
        return this.direction && (t = 100 - t), t = m(this.xPct, this.xSteps, this.snap, t), this.direction && (t = 100 - t), t
    }, b.prototype.getApplicableStep = function(t) {
        var e = d(t, this.xPct),
            i = 100 === t ? 2 : 1;
        return [this.xNumSteps[e - 2], this.xVal[e - i], this.xNumSteps[e - i]]
    }, b.prototype.convert = function(t) {
        return this.getStep(this.toStepping(t))
    };
    var Z = {
        to: function(t) {
            return t.toFixed(2)
        },
        from: Number
    };
    t.fn.val = function(e) {
        function i(t) {
            return t.hasClass(K[0]) ? B : G
        }
        if (!arguments.length) {
            var n = t(this[0]);
            return i(n).call(n)
        }
        var o = t.isFunction(e);
        return this.each(function(n) {
            var r = e,
                s = t(this);
            o && (r = e.call(this, n, s.val())), i(s).call(s, r)
        })
    }, t.fn.noUiSlider = function(t, e) {
        switch (t) {
            case "step":
                return this[0].getCurrentStep();
            case "options":
                return this[0].getOriginalOptions()
        }
        return (e ? F : H).call(this, t)
    }, t.fn.noUiSlider_pips = function(e) {
        var i = e.mode,
            n = e.density || 1,
            o = e.filter || !1,
            r = e.values || !1,
            s = e.format || {
                to: Math.round
            },
            a = e.stepped || !1;
        return this.each(function() {
            var e = this.getInfo(),
                l = W(e[0], i, r, a),
                c = X(e[0], n, i, l);
            return t(this).append(q(e[1], e[2], e[0].direction, c, o, s))
        })
    }
}(window.jQuery || window.Zepto),
function(t, e) {
    "object" == typeof module && module.exports ? module.exports = t.document ? e(t) : e : t.Highcharts = e(t)
}("undefined" != typeof window ? window : this, function(t) {
    function e(e, i) {
        var n = "Highcharts error #" + e + ": www.highcharts.com/errors/" + e;
        if (i) throw new Error(n);
        t.console && console.log(n)
    }

    function i(t, e, i) {
        this.options = e, this.elem = t, this.prop = i
    }

    function n() {
        var t, e, i = arguments,
            n = {},
            o = function(t, e) {
                var i, n;
                "object" != typeof t && (t = {});
                for (n in e) e.hasOwnProperty(n) && (i = e[n], t[n] = i && "object" == typeof i && "[object Array]" !== Object.prototype.toString.call(i) && "renderTo" !== n && "number" != typeof i.nodeType ? o(t[n] || {}, i) : e[n]);
                return t
            };
        for (i[0] === !0 && (n = i[1], i = Array.prototype.slice.call(i, 2)), e = i.length, t = 0; e > t; t++) n = o(n, i[t]);
        return n
    }

    function o(t, e) {
        return parseInt(t, e || 10)
    }

    function r(t) {
        return "string" == typeof t
    }

    function s(t) {
        return t && "object" == typeof t
    }

    function a(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function l(t, e) {
        for (var i = t.length; i--;)
            if (t[i] === e) {
                t.splice(i, 1);
                break
            }
    }

    function c(t) {
        return t !== z && null !== t
    }

    function h(t, e, i) {
        var n, o;
        if (r(e)) c(i) ? t.setAttribute(e, i) : t && t.getAttribute && (o = t.getAttribute(e));
        else if (c(e) && s(e))
            for (n in e) t.setAttribute(n, e[n]);
        return o
    }

    function u(t) {
        return a(t) ? t : [t]
    }

    function p(t, e, i) {
        return e ? setTimeout(t, e, i) : void t.call(0, i)
    }

    function d(t, e) {
        Ae && !_e && e && e.opacity !== z && (e.filter = "alpha(opacity=" + 100 * e.opacity + ")"), vi(t.style, e)
    }

    function f(t, e, i, n, o) {
        var r = pe.createElement(t);
        return e && vi(r, e), o && d(r, {
            padding: 0,
            border: "none",
            margin: 0
        }), i && d(r, i), n && n.appendChild(r), r
    }

    function g(t, e) {
        var i = function() {};
        return i.prototype = new t, vi(i.prototype, e), i
    }

    function m(t, e, i) {
        return new Array((e || 2) + 1 - String(t).length).join(i || 0) + t
    }

    function v(t, e) {
        return /%$/.test(t) ? e * parseFloat(t) / 100 : parseFloat(t)
    }

    function y(t) {
        return 6e4 * (Z && Z(t) || K || 0)
    }

    function b(t, e) {
        var i, n = /f$/,
            o = /\.([0-9])/,
            r = W.lang;
        return n.test(t) ? (i = t.match(o), i = i ? i[1] : -1, null !== e && (e = ue.numberFormat(e, i, r.decimalPoint, t.indexOf(",") > -1 ? r.thousandsSep : ""))) : e = X(t, e), e
    }

    function x(t, e) {
        for (var i, n, o, r, s, a, l, c = "{", h = !1, u = []; - 1 !== (l = t.indexOf(c));) {
            if (i = t.slice(0, l), h) {
                for (n = i.split(":"), o = n.shift().split("."), s = o.length, a = e, r = 0; s > r; r++) a = a[o[r]];
                n.length && (a = b(n.join(":"), a)), u.push(a)
            } else u.push(i);
            t = t.slice(l + 1), h = !h, c = h ? "}" : "{"
        }
        return u.push(t), u.join("")
    }

    function w(t) {
        return de.pow(10, ge(de.log(t) / de.LN10))
    }

    function k(t, e, i, n, o) {
        var r, s, a = t;
        for (i = bi(i, 1), r = t / i, e || (e = [1, 2, 2.5, 5, 10], n === !1 && (1 === i ? e = [1, 2, 5, 10] : .1 >= i && (e = [1 / i]))), s = 0; s < e.length && (a = e[s], !(o && a * i >= t || !o && r <= (e[s] + (e[s + 1] || e[s])) / 2)); s++);
        return a *= i
    }

    function T(t, e) {
        var i, n, o = t.length;
        for (n = 0; o > n; n++) t[n].safeI = n;
        for (t.sort(function(t, n) {
                return i = e(t, n), 0 === i ? t.safeI - n.safeI : i
            }), n = 0; o > n; n++) delete t[n].safeI
    }

    function C(t) {
        for (var e = t.length, i = t[0]; e--;) t[e] < i && (i = t[e]);
        return i
    }

    function S(t) {
        for (var e = t.length, i = t[0]; e--;) t[e] > i && (i = t[e]);
        return i
    }

    function A(t, e) {
        var i;
        for (i in t) t[i] && t[i] !== e && t[i].destroy && t[i].destroy(), delete t[i]
    }

    function P(t) {
        B || (B = f(Be)), t && B.appendChild(t), B.innerHTML = ""
    }

    function E(t, e) {
        return parseFloat(t.toPrecision(e || 14))
    }

    function L(t, e) {
        e.renderer.globalAnimation = bi(t, e.animation)
    }

    function D(t) {
        return s(t) ? n(t) : {
            duration: t ? 500 : 0
        }
    }

    function O() {
        var e = W.global,
            i = e.useUTC,
            n = i ? "getUTC" : "get",
            o = i ? "setUTC" : "set";
        U = e.Date || t.Date, K = i && e.timezoneOffset, Z = i && e.getTimezoneOffset, V = function(t, e, n, o, r, s) {
            var a;
            return i ? (a = U.UTC.apply(0, arguments), a += y(a)) : a = new U(t, e, bi(n, 1), bi(o, 0), bi(r, 0), bi(s, 0)).getTime(), a
        }, Q = n + "Minutes", J = n + "Hours", te = n + "Day", ee = n + "Date", ie = n + "Month", ne = n + "FullYear", oe = o + "Milliseconds", re = o + "Seconds", se = o + "Minutes", ae = o + "Hours", le = o + "Date", ce = o + "Month", he = o + "FullYear"
    }

    function _(t) {
        return W = n(!0, W, t), O(), W
    }

    function M() {
        return W
    }

    function N(t) {
        return this instanceof N ? void this.init(t) : new N(t)
    }

    function I() {}

    function $(t, e) {
        var i = pe.getElementsByTagName("head")[0],
            n = pe.createElement("script");
        n.type = "text/javascript", n.src = t, n.onload = e, i.appendChild(n)
    }

    function j(t, e, i, n) {
        this.axis = t, this.pos = e, this.type = i || "", this.isNew = !0, i || n || this.addLabel()
    }

    function R(t, e, i, n, o) {
        var r = t.chart.inverted;
        this.axis = t, this.isNegative = i, this.options = e, this.x = n, this.total = null, this.points = {}, this.stack = o, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = {
            align: e.align || (r ? i ? "left" : "right" : "center"),
            verticalAlign: e.verticalAlign || (r ? "middle" : i ? "bottom" : "top"),
            y: bi(e.y, r ? 4 : i ? 14 : -6),
            x: bi(e.x, r ? i ? -6 : 6 : 0)
        }, this.textAlign = e.textAlign || (r ? i ? "right" : "left" : "center")
    }
    var z, H, F, B, W, X, q, Y, G, U, V, K, Z, Q, J, te, ee, ie, ne, oe, re, se, ae, le, ce, he, ue, pe = t.document,
        de = Math,
        fe = de.round,
        ge = de.floor,
        me = de.ceil,
        ve = de.max,
        ye = de.min,
        be = de.abs,
        xe = de.cos,
        we = de.sin,
        ke = de.PI,
        Te = 2 * ke / 360,
        Ce = t.navigator && t.navigator.userAgent || "",
        Se = t.opera,
        Ae = /(msie|trident|edge)/i.test(Ce) && !Se,
        Pe = pe && 8 === pe.documentMode,
        Ee = !Ae && /AppleWebKit/.test(Ce),
        Le = /Firefox/.test(Ce),
        De = /(Mobile|Android|Windows Phone)/.test(Ce),
        Oe = "http://www.w3.org/2000/svg",
        _e = pe && pe.createElementNS && !!pe.createElementNS(Oe, "svg").createSVGRect,
        Me = Le && parseInt(Ce.split("Firefox/")[1], 10) < 4,
        Ne = pe && !_e && !Ae && !!pe.createElement("canvas").getContext,
        Ie = {},
        $e = 0,
        je = function() {},
        Re = [],
        ze = 0,
        He = "Highcharts",
        Fe = "4.2.5",
        Be = "div",
        We = "absolute",
        Xe = "relative",
        qe = "hidden",
        Ye = "highcharts-",
        Ge = "visible",
        Ue = "px",
        Ve = "none",
        Ke = "M",
        Ze = "L",
        Qe = /^[0-9]+$/,
        Je = "",
        ti = "hover",
        ei = "select",
        ii = ["plotTop", "marginRight", "marginBottom", "plotLeft"],
        ni = "stroke-width",
        oi = {};
    ue = t.Highcharts ? e(16, !0) : {
        win: t
    }, ue.seriesTypes = oi;
    var ri, si, ai, li, ci, hi, ui, pi, di, fi, gi, mi = [];
    i.prototype = {
        dSetter: function() {
            var t, e = this.paths[0],
                i = this.paths[1],
                n = [],
                o = this.now,
                r = e.length;
            if (1 === o) n = this.toD;
            else if (r === i.length && 1 > o)
                for (; r--;) t = parseFloat(e[r]), n[r] = isNaN(t) ? e[r] : o * parseFloat(i[r] - t) + t;
            else n = i;
            this.elem.attr("d", n)
        },
        update: function() {
            var t = this.elem,
                e = this.prop,
                i = this.now,
                n = this.options.step;
            this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i) : t.style[e] = i + this.unit, n && n.call(t, i, this)
        },
        run: function(t, e, i) {
            var n, o = this,
                r = function(t) {
                    return r.stopped ? !1 : o.step(t)
                };
            this.startTime = +new U, this.start = t, this.end = e, this.unit = i, this.now = this.start, this.pos = 0, r.elem = this.elem, r() && 1 === mi.push(r) && (r.timerId = setInterval(function() {
                for (n = 0; n < mi.length; n++) mi[n]() || mi.splice(n--, 1);
                mi.length || clearInterval(r.timerId)
            }, 13))
        },
        step: function(t) {
            var e, i, n, o = +new U,
                r = this.options,
                s = this.elem,
                a = r.complete,
                l = r.duration,
                c = r.curAnim;
            if (s.attr && !s.element) e = !1;
            else if (t || o >= l + this.startTime) {
                this.now = this.end, this.pos = 1, this.update(), c[this.prop] = !0, i = !0;
                for (n in c) c[n] !== !0 && (i = !1);
                i && a && a.call(s), e = !1
            } else this.pos = r.easing((o - this.startTime) / l), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0;
            return e
        },
        initPath: function(t, e, i) {
            e = e || "";
            var n, o, r, s = t.shift,
                a = e.indexOf("C") > -1,
                l = a ? 7 : 3,
                c = e.split(" "),
                h = [].concat(i),
                u = t.isArea,
                p = u ? 2 : 1,
                d = function(t) {
                    for (r = t.length; r--;)(t[r] === Ke || t[r] === Ze) && t.splice(r + 1, 0, t[r + 1], t[r + 2], t[r + 1], t[r + 2])
                };
            if (a && (d(c), d(h)), s <= h.length / l && c.length === h.length)
                for (; s--;) h = h.slice(0, l).concat(h), u && (h = h.concat(h.slice(h.length - l)));
            if (t.shift = 0, c.length)
                for (n = h.length; c.length < n;) o = c.slice().splice(c.length / p - l, l * p), a && (o[l - 6] = o[l - 2], o[l - 5] = o[l - 1]), [].splice.apply(c, [c.length / p, 0].concat(o));
            return [c, h]
        }
    };
    var vi = ue.extend = function(t, e) {
            var i;
            t || (t = {});
            for (i in e) t[i] = e[i];
            return t
        },
        yi = ue.isNumber = function(t) {
            return "number" == typeof t && !isNaN(t)
        },
        bi = ue.pick = function() {
            var t, e, i = arguments,
                n = i.length;
            for (t = 0; n > t; t++)
                if (e = i[t], e !== z && null !== e) return e
        },
        xi = ue.wrap = function(t, e, i) {
            var n = t[e];
            t[e] = function() {
                var t = Array.prototype.slice.call(arguments);
                return t.unshift(n), i.apply(this, t)
            }
        };
    X = function(t, e, i) {
        if (!yi(e)) return W.lang.invalidDate || "";
        t = bi(t, "%Y-%m-%d %H:%M:%S");
        var n, o = new U(e - y(e)),
            r = o[J](),
            s = o[te](),
            a = o[ee](),
            l = o[ie](),
            c = o[ne](),
            h = W.lang,
            u = h.weekdays,
            p = h.shortWeekdays,
            d = vi({
                a: p ? p[s] : u[s].substr(0, 3),
                A: u[s],
                d: m(a),
                e: m(a, 2, " "),
                w: s,
                b: h.shortMonths[l],
                B: h.months[l],
                m: m(l + 1),
                y: c.toString().substr(2, 2),
                Y: c,
                H: m(r),
                k: r,
                I: m(r % 12 || 12),
                l: r % 12 || 12,
                M: m(o[Q]()),
                p: 12 > r ? "AM" : "PM",
                P: 12 > r ? "am" : "pm",
                S: m(o.getSeconds()),
                L: m(fe(e % 1e3), 3)
            }, ue.dateFormats);
        for (n in d)
            for (; - 1 !== t.indexOf("%" + n);) t = t.replace("%" + n, "function" == typeof d[n] ? d[n](e) : d[n]);
        return i ? t.substr(0, 1).toUpperCase() + t.substr(1) : t
    }, Y = {
        millisecond: 1,
        second: 1e3,
        minute: 6e4,
        hour: 36e5,
        day: 864e5,
        week: 6048e5,
        month: 24192e5,
        year: 314496e5
    }, ue.numberFormat = function(t, e, i, n) {
        t = +t || 0, e = +e;
        var r, s, a, l, c = W.lang,
            h = (t.toString().split(".")[1] || "").length,
            u = Math.abs(t);
        return -1 === e ? e = Math.min(h, 20) : yi(e) || (e = 2), s = String(o(u.toFixed(e))), a = s.length > 3 ? s.length % 3 : 0, i = bi(i, c.decimalPoint), n = bi(n, c.thousandsSep), l = 0 > t ? "-" : "", l += a ? s.substr(0, a) + n : "", l += s.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + n), e && (r = Math.abs(u - s + Math.pow(10, -Math.max(e, h) - 1)), l += i + r.toFixed(e).slice(2)), l
    }, Math.easeInOutSine = function(t) {
        return -.5 * (Math.cos(Math.PI * t) - 1)
    }, ri = function(e, i) {
        var n;
        return "width" === i ? Math.min(e.offsetWidth, e.scrollWidth) - ri(e, "padding-left") - ri(e, "padding-right") : "height" === i ? Math.min(e.offsetHeight, e.scrollHeight) - ri(e, "padding-top") - ri(e, "padding-bottom") : (n = t.getComputedStyle(e, void 0), n && o(n.getPropertyValue(i)))
    }, si = function(t, e) {
        return e.indexOf ? e.indexOf(t) : [].indexOf.call(e, t)
    }, li = function(t, e) {
        return [].filter.call(t, e)
    }, hi = function(t, e) {
        for (var i = [], n = 0, o = t.length; o > n; n++) i[n] = e.call(t[n], t[n], n, t);
        return i
    }, ci = function(e) {
        var i = pe.documentElement,
            n = e.getBoundingClientRect();
        return {
            top: n.top + (t.pageYOffset || i.scrollTop) - (i.clientTop || 0),
            left: n.left + (t.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
        }
    }, gi = function(t) {
        for (var e = mi.length; e--;) mi[e].elem === t && (mi[e].stopped = !0)
    }, ai = function(t, e) {
        return Array.prototype.forEach.call(t, e)
    }, ui = function(e, i, n) {
        function o(i) {
            i.target = i.srcElement || t, n.call(e, i)
        }
        var r = e.hcEvents = e.hcEvents || {};
        e.addEventListener ? e.addEventListener(i, n, !1) : e.attachEvent && (e.hcEventsIE || (e.hcEventsIE = {}), e.hcEventsIE[n.toString()] = o, e.attachEvent("on" + i, o)), r[i] || (r[i] = []), r[i].push(n)
    }, pi = function(t, e, i) {
        function n(e, i) {
            t.removeEventListener ? t.removeEventListener(e, i, !1) : t.attachEvent && (i = t.hcEventsIE[i.toString()], t.detachEvent("on" + e, i))
        }

        function o() {
            var i, o, r;
            if (t.nodeName) {
                e ? (i = {}, i[e] = !0) : i = a;
                for (r in i)
                    if (a[r])
                        for (o = a[r].length; o--;) n(r, a[r][o])
            }
        }
        var r, s, a = t.hcEvents;
        a && (e ? (r = a[e] || [], i ? (s = si(i, r), s > -1 && (r.splice(s, 1), a[e] = r), n(e, i)) : (o(), a[e] = [])) : (o(), t.hcEvents = {}))
    }, di = function(t, e, i, n) {
        var o, r, s, a, l, c = t.hcEvents;
        if (i = i || {}, pe.createEvent && (t.dispatchEvent || t.fireEvent)) o = pe.createEvent("Events"), o.initEvent(e, !0, !0), o.target = t, vi(o, i), t.dispatchEvent ? t.dispatchEvent(o) : t.fireEvent(e, o);
        else if (c)
            for (r = c[e] || [], s = r.length, i.preventDefault || (i.preventDefault = function() {
                    i.defaultPrevented = !0
                }), i.target = t, i.type || (i.type = e), a = 0; s > a; a++) l = r[a], l.call(t, i) === !1 && i.preventDefault();
        n && !i.defaultPrevented && n(i)
    }, fi = function(t, e, o) {
        var r, a, l, c, h, u = "";
        s(o) || (c = arguments, o = {
            duration: c[2],
            easing: c[3],
            complete: c[4]
        }), yi(o.duration) || (o.duration = 400), o.easing = "function" == typeof o.easing ? o.easing : Math[o.easing] || Math.easeInOutSine, o.curAnim = n(e);
        for (h in e) l = new i(t, o, h), a = null, "d" === h ? (l.paths = l.initPath(t, t.d, e.d), l.toD = e.d, r = 0, a = 1) : t.attr ? r = t.attr(h) : (r = parseFloat(ri(t, h)) || 0, "opacity" !== h && (u = "px")), a || (a = e[h]), a.match && a.match("px") && (a = a.replace(/px/g, "")), l.run(r, a, u)
    }, t.jQuery && (t.jQuery.fn.highcharts = function() {
        var t = [].slice.call(arguments);
        return this[0] ? t[0] ? (new(ue[r(t[0]) ? t.shift() : "Chart"])(this[0], t[0], t[1]), this) : Re[h(this[0], "data-highcharts-chart")] : void 0
    }), pe && !pe.defaultView && (ri = function(t, e) {
        var i, n = {
            width: "clientWidth",
            height: "clientHeight"
        }[e];
        return t.style[e] ? o(t.style[e]) : ("opacity" === e && (e = "filter"), n ? (t.style.zoom = 1, Math.max(t[n] - 2 * ri(t, "padding"), 0)) : (i = t.currentStyle[e.replace(/\-(\w)/g, function(t, e) {
            return e.toUpperCase()
        })], "filter" === e && (i = i.replace(/alpha\(opacity=([0-9]+)\)/, function(t, e) {
            return e / 100
        })), "" === i ? 1 : o(i)))
    }), Array.prototype.forEach || (ai = function(t, e) {
        for (var i = 0, n = t.length; n > i; i++)
            if (e.call(t[i], t[i], i, t) === !1) return i
    }), Array.prototype.indexOf || (si = function(t, e) {
        var i, n = 0;
        if (e)
            for (i = e.length; i > n; n++)
                if (e[n] === t) return n;
        return -1
    }), Array.prototype.filter || (li = function(t, e) {
        for (var i = [], n = 0, o = t.length; o > n; n++) e(t[n], n) && i.push(t[n]);
        return i
    }), ue.Fx = i, ue.inArray = si, ue.each = ai, ue.grep = li, ue.offset = ci, ue.map = hi, ue.addEvent = ui, ue.removeEvent = pi, ue.fireEvent = di, ue.animate = fi, ue.animObject = D, ue.stop = gi, W = {
        colors: ["#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#2b908f", "#f45b5b", "#91e8e1"],
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            decimalPoint: ".",
            numericSymbols: ["k", "M", "G", "T", "P", "E"],
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com/4.2.5/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            }
        },
        title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            style: {
                color: "#333333",
                fontSize: "18px"
            },
            widthAdjust: -44
        },
        subtitle: {
            text: "",
            align: "center",
            style: {
                color: "#555555"
            },
            widthAdjust: -44
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1e3
                },
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0,
                            lineWidthPlus: 1,
                            radiusPlus: 2
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: {
                    align: "center",
                    formatter: function() {
                        return null === this.y ? "" : ue.numberFormat(this.y, -1)
                    },
                    style: {
                        color: "contrast",
                        fontSize: "11px",
                        fontWeight: "bold",
                        textShadow: "0 0 6px contrast, 0 0 3px contrast"
                    },
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    padding: 5
                },
                cropThreshold: 300,
                pointRange: 0,
                softThreshold: !0,
                states: {
                    hover: {
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {
                            size: 10,
                            opacity: .25
                        }
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0,
                turboThreshold: 1e3
            }
        },
        labels: {
            style: {
                position: We,
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {
                activeColor: "#274b6d",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                color: "#333333",
                fontSize: "12px",
                fontWeight: "bold"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: We,
                width: "13px",
                height: "13px"
            },
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: Xe,
                top: "45%"
            },
            style: {
                position: We,
                backgroundColor: "white",
                opacity: .5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: _e,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            footerFormat: "",
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">?</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: De ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                pointerEvents: "none",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var wi = W.plotOptions,
        ki = wi.line;
    O(), N.prototype = {
        parsers: [{
            regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
            parse: function(t) {
                return [o(t[1]), o(t[2]), o(t[3]), parseFloat(t[4], 10)]
            }
        }, {
            regex: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            parse: function(t) {
                return [o(t[1], 16), o(t[2], 16), o(t[3], 16), 1]
            }
        }, {
            regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
            parse: function(t) {
                return [o(t[1]), o(t[2]), o(t[3]), 1]
            }
        }],
        init: function(t) {
            var e, i, n, o;
            if (this.input = t, t && t.stops) this.stops = hi(t.stops, function(t) {
                return new N(t[1])
            });
            else
                for (n = this.parsers.length; n-- && !i;) o = this.parsers[n], e = o.regex.exec(t), e && (i = o.parse(e));
            this.rgba = i || []
        },
        get: function(t) {
            var e, i = this.input,
                o = this.rgba;
            return this.stops ? (e = n(i), e.stops = [].concat(e.stops), ai(this.stops, function(i, n) {
                e.stops[n] = [e.stops[n][0], i.get(t)]
            })) : e = o && yi(o[0]) ? "rgb" === t || !t && 1 === o[3] ? "rgb(" + o[0] + "," + o[1] + "," + o[2] + ")" : "a" === t ? o[3] : "rgba(" + o.join(",") + ")" : i, e
        },
        brighten: function(t) {
            var e, i = this.rgba;
            if (this.stops) ai(this.stops, function(e) {
                e.brighten(t)
            });
            else if (yi(t) && 0 !== t)
                for (e = 0; 3 > e; e++) i[e] += o(255 * t), i[e] < 0 && (i[e] = 0), i[e] > 255 && (i[e] = 255);
            return this
        },
        setOpacity: function(t) {
            return this.rgba[3] = t, this
        }
    }, I.prototype = {
        opacity: 1,
        textProps: ["direction", "fontSize", "fontWeight", "fontFamily", "fontStyle", "color", "lineHeight", "width", "textDecoration", "textOverflow", "textShadow"],
        init: function(t, e) {
            var i = this;
            i.element = "span" === e ? f(e) : pe.createElementNS(Oe, e), i.renderer = t
        },
        animate: function(t, e, i) {
            var n = bi(e, this.renderer.globalAnimation, !0);
            return gi(this), n ? (i && (n.complete = i), fi(this, t, n)) : this.attr(t, null, i), this
        },
        colorGradient: function(t, e, i) {
            var o, r, s, l, h, u, p, d, f, g, m, v, y, b = this.renderer,
                x = [];
            if (t.linearGradient ? r = "linearGradient" : t.radialGradient && (r = "radialGradient"), r) {
                s = t[r], h = b.gradients, p = t.stops, g = i.radialReference, a(s) && (t[r] = s = {
                    x1: s[0],
                    y1: s[1],
                    x2: s[2],
                    y2: s[3],
                    gradientUnits: "userSpaceOnUse"
                }), "radialGradient" === r && g && !c(s.gradientUnits) && (l = s, s = n(s, b.getRadialAttr(g, l), {
                    gradientUnits: "userSpaceOnUse"
                }));
                for (m in s) "id" !== m && x.push(m, s[m]);
                for (m in p) x.push(p[m]);
                x = x.join(","), h[x] ? v = h[x].attr("id") : (s.id = v = Ye + $e++, h[x] = u = b.createElement(r).attr(s).add(b.defs), u.radAttr = l, u.stops = [], ai(p, function(t) {
                    var e;
                    0 === t[1].indexOf("rgba") ? (o = N(t[1]), d = o.get("rgb"), f = o.get("a")) : (d = t[1], f = 1), e = b.createElement("stop").attr({
                        offset: t[0],
                        "stop-color": d,
                        "stop-opacity": f
                    }).add(u), u.stops.push(e)
                })), y = "url(" + b.url + "#" + v + ")", i.setAttribute(e, y), i.gradient = x, t.toString = function() {
                    return y
                }
            }
        },
        applyTextShadow: function(t) {
            var e, i = this.element,
                n = -1 !== t.indexOf("contrast"),
                r = {},
                s = this.renderer.forExport,
                a = s || i.style.textShadow !== z && !Ae;
            n && (r.textShadow = t = t.replace(/contrast/g, this.renderer.getContrast(i.style.fill))), (Ee || s) && (r.textRendering = "geometricPrecision"), a ? this.css(r) : (this.fakeTS = !0, this.ySetter = this.xSetter, e = [].slice.call(i.getElementsByTagName("tspan")), ai(t.split(/\s?,\s?/g), function(t) {
                var n, r, s = i.firstChild;
                t = t.split(" "), n = t[t.length - 1], r = t[t.length - 2], r && ai(e, function(t, e) {
                    var a;
                    0 === e && (t.setAttribute("x", i.getAttribute("x")), e = i.getAttribute("y"), t.setAttribute("y", e || 0), null === e && i.setAttribute("y", 0)), a = t.cloneNode(1), h(a, {
                        "class": Ye + "text-shadow",
                        fill: n,
                        stroke: n,
                        "stroke-opacity": 1 / ve(o(r), 3),
                        "stroke-width": r,
                        "stroke-linejoin": "round"
                    }), i.insertBefore(a, s)
                })
            }))
        },
        attr: function(t, e, i) {
            var n, o, r, s, a, l = this.element,
                c = this;
            if ("string" == typeof t && e !== z && (n = t, t = {}, t[n] = e), "string" == typeof t) c = (this[t + "Getter"] || this._defaultGetter).call(this, t, l);
            else {
                for (n in t) o = t[n], s = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(n) && (r || (this.symbolAttr(t), r = !0), s = !0), !this.rotation || "x" !== n && "y" !== n || (this.doTransform = !0), s || (a = this[n + "Setter"] || this._defaultSetter, a.call(this, o, n, l), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(n) && this.updateShadows(n, o, a));
                this.doTransform && (this.updateTransform(), this.doTransform = !1)
            }
            return i && i(), c
        },
        updateShadows: function(t, e, i) {
            for (var n = this.shadows, o = n.length; o--;) i.call(n[o], "height" === t ? Math.max(e - (n[o].cutHeight || 0), 0) : "d" === t ? this.d : e, t, n[o])
        },
        addClass: function(t) {
            var e = this.element,
                i = h(e, "class") || "";
            return -1 === i.indexOf(t) && h(e, "class", i + " " + t), this
        },
        symbolAttr: function(t) {
            var e = this;
            ai(["x", "y", "r", "start", "end", "width", "height", "innerR", "anchorX", "anchorY"], function(i) {
                e[i] = bi(t[i], e[i])
            }), e.attr({
                d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
            })
        },
        clip: function(t) {
            return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : Ve)
        },
        crisp: function(t) {
            var e, i, n = this,
                o = {},
                r = n.strokeWidth || 0;
            i = fe(r) % 2 / 2, t.x = ge(t.x || n.x || 0) + i, t.y = ge(t.y || n.y || 0) + i, t.width = ge((t.width || n.width || 0) - 2 * i), t.height = ge((t.height || n.height || 0) - 2 * i), t.strokeWidth = r;
            for (e in t) n[e] !== t[e] && (n[e] = o[e] = t[e]);
            return o
        },
        css: function(t) {
            var e, i, n, r = this,
                s = r.styles,
                a = {},
                l = r.element,
                c = "",
                u = !s;
            if (t && t.color && (t.fill = t.color), s)
                for (i in t) t[i] !== s[i] && (a[i] = t[i], u = !0);
            if (u) {
                if (e = r.textWidth = t && t.width && "text" === l.nodeName.toLowerCase() && o(t.width) || r.textWidth, s && (t = vi(s, a)), r.styles = t, e && (Ne || !_e && r.renderer.forExport) && delete t.width, Ae && !_e) d(r.element, t);
                else {
                    n = function(t, e) {
                        return "-" + e.toLowerCase()
                    };
                    for (i in t) c += i.replace(/([A-Z])/g, n) + ":" + t[i] + ";";
                    h(l, "style", c)
                }
                e && r.added && r.renderer.buildText(r)
            }
            return r
        },
        on: function(t, e) {
            var i = this,
                n = i.element;
            return F && "click" === t ? (n.ontouchstart = function(t) {
                i.touchEventFired = U.now(), t.preventDefault(), e.call(n, t)
            }, n.onclick = function(t) {
                (-1 === Ce.indexOf("Android") || U.now() - (i.touchEventFired || 0) > 1100) && e.call(n, t)
            }) : n["on" + t] = e, this
        },
        setRadialReference: function(t) {
            var e = this.renderer.gradients[this.element.gradient];
            return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this
        },
        translate: function(t, e) {
            return this.attr({
                translateX: t,
                translateY: e
            })
        },
        invert: function() {
            var t = this;
            return t.inverted = !0, t.updateTransform(), t
        },
        updateTransform: function() {
            var t, e = this,
                i = e.translateX || 0,
                n = e.translateY || 0,
                o = e.scaleX,
                r = e.scaleY,
                s = e.inverted,
                a = e.rotation,
                l = e.element;
            s && (i += e.attr("width"), n += e.attr("height")), t = ["translate(" + i + "," + n + ")"], s ? t.push("rotate(90) scale(-1,1)") : a && t.push("rotate(" + a + " " + (l.getAttribute("x") || 0) + " " + (l.getAttribute("y") || 0) + ")"), (c(o) || c(r)) && t.push("scale(" + bi(o, 1) + " " + bi(r, 1) + ")"), t.length && l.setAttribute("transform", t.join(" "))
        },
        toFront: function() {
            var t = this.element;
            return t.parentNode.appendChild(t), this
        },
        align: function(t, e, i) {
            var n, o, s, a, c, h = {},
                u = this.renderer,
                p = u.alignedObjects;
            return t ? (this.alignOptions = t, this.alignByTranslate = e, (!i || r(i)) && (this.alignTo = c = i || "renderer", l(p, this), p.push(this), i = null)) : (t = this.alignOptions, e = this.alignByTranslate, c = this.alignTo), i = bi(i, u[c], u), n = t.align, o = t.verticalAlign, s = (i.x || 0) + (t.x || 0), a = (i.y || 0) + (t.y || 0), ("right" === n || "center" === n) && (s += (i.width - (t.width || 0)) / {
                right: 1,
                center: 2
            }[n]), h[e ? "translateX" : "x"] = fe(s), ("bottom" === o || "middle" === o) && (a += (i.height - (t.height || 0)) / ({
                bottom: 1,
                middle: 2
            }[o] || 1)), h[e ? "translateY" : "y"] = fe(a), this[this.placed ? "animate" : "attr"](h), this.placed = !0, this.alignAttr = h, this
        },
        getBBox: function(t, e) {
            var i, n, o, r, s, a, l, c, h = this,
                u = h.renderer,
                p = h.element,
                d = h.styles,
                f = h.textStr,
                g = p.style,
                m = u.cache,
                v = u.cacheKeys;
            if (r = bi(e, h.rotation), s = r * Te, f !== z && (c = ["", r || 0, d && d.fontSize, p.style.width].join(","), c = "" === f || Qe.test(f) ? "num:" + f.toString().length + c : f + c), c && !t && (i = m[c]), !i) {
                if (p.namespaceURI === Oe || u.forExport) {
                    try {
                        l = this.fakeTS && function(t) {
                            ai(p.querySelectorAll("." + Ye + "text-shadow"), function(e) {
                                e.style.display = t
                            })
                        }, Le && g.textShadow ? (a = g.textShadow, g.textShadow = "") : l && l(Ve), i = p.getBBox ? vi({}, p.getBBox()) : {
                            width: p.offsetWidth,
                            height: p.offsetHeight
                        }, a ? g.textShadow = a : l && l("")
                    } catch (y) {}(!i || i.width < 0) && (i = {
                        width: 0,
                        height: 0
                    })
                } else i = h.htmlGetBBox();
                if (u.isSVG && (n = i.width, o = i.height, Ae && d && "11px" === d.fontSize && "16.9" === o.toPrecision(3) && (i.height = o = 14), r && (i.width = be(o * we(s)) + be(n * xe(s)), i.height = be(o * xe(s)) + be(n * we(s)))), c) {
                    for (; v.length > 250;) delete m[v.shift()];
                    m[c] || v.push(c), m[c] = i
                }
            }
            return i
        },
        show: function(t) {
            return this.attr({
                visibility: t ? "inherit" : Ge
            })
        },
        hide: function() {
            return this.attr({
                visibility: qe
            })
        },
        fadeOut: function(t) {
            var e = this;
            e.animate({
                opacity: 0
            }, {
                duration: t || 150,
                complete: function() {
                    e.attr({
                        y: -9999
                    })
                }
            })
        },
        add: function(t) {
            var e, i = this.renderer,
                n = this.element;
            return t && (this.parentGroup = t), this.parentInverted = t && t.inverted, void 0 !== this.textStr && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(n), this.onAdd && this.onAdd(), this
        },
        safeRemoveChild: function(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
        },
        destroy: function() {
            var t, e, i, n = this,
                o = n.element || {},
                r = n.shadows,
                s = n.renderer.isSVG && "SPAN" === o.nodeName && n.parentGroup;
            if (o.onclick = o.onmouseout = o.onmouseover = o.onmousemove = o.point = null, gi(n), n.clipPath && (n.clipPath = n.clipPath.destroy()), n.stops) {
                for (i = 0; i < n.stops.length; i++) n.stops[i] = n.stops[i].destroy();
                n.stops = null
            }
            for (n.safeRemoveChild(o), r && ai(r, function(t) {
                    n.safeRemoveChild(t)
                }); s && s.div && 0 === s.div.childNodes.length;) t = s.parentGroup, n.safeRemoveChild(s.div), delete s.div, s = t;
            n.alignTo && l(n.renderer.alignedObjects, n);
            for (e in n) delete n[e];
            return null
        },
        shadow: function(t, e, i) {
            var n, o, r, s, a, l, c = [],
                u = this.element;
            if (t) {
                for (s = bi(t.width, 3), a = (t.opacity || .15) / s, l = this.parentInverted ? "(-1,-1)" : "(" + bi(t.offsetX, 1) + ", " + bi(t.offsetY, 1) + ")", n = 1; s >= n; n++) o = u.cloneNode(0), r = 2 * s + 1 - 2 * n, h(o, {
                    isShadow: "true",
                    stroke: t.color || "black",
                    "stroke-opacity": a * n,
                    "stroke-width": r,
                    transform: "translate" + l,
                    fill: Ve
                }), i && (h(o, "height", ve(h(o, "height") - r, 0)), o.cutHeight = r), e ? e.element.appendChild(o) : u.parentNode.insertBefore(o, u), c.push(o);
                this.shadows = c
            }
            return this
        },
        xGetter: function(t) {
            return "circle" === this.element.nodeName && (t = {
                x: "cx",
                y: "cy"
            }[t] || t), this._defaultGetter(t)
        },
        _defaultGetter: function(t) {
            var e = bi(this[t], this.element ? this.element.getAttribute(t) : null, 0);
            return /^[\-0-9\.]+$/.test(e) && (e = parseFloat(e)), e
        },
        dSetter: function(t, e, i) {
            t && t.join && (t = t.join(" ")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), i.setAttribute(e, t), this[e] = t
        },
        dashstyleSetter: function(t) {
            var e, i = this["stroke-width"];
            if ("inherit" === i && (i = 1), t = t && t.toLowerCase()) {
                for (t = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","), e = t.length; e--;) t[e] = o(t[e]) * i;
                t = t.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t)
            }
        },
        alignSetter: function(t) {
            this.element.setAttribute("text-anchor", {
                left: "start",
                center: "middle",
                right: "end"
            }[t])
        },
        opacitySetter: function(t, e, i) {
            this[e] = t, i.setAttribute(e, t)
        },
        titleSetter: function(t) {
            var e = this.element.getElementsByTagName("title")[0];
            e || (e = pe.createElementNS(Oe, "title"), this.element.appendChild(e)), e.firstChild && e.removeChild(e.firstChild), e.appendChild(pe.createTextNode(String(bi(t), "").replace(/<[^>]*>/g, "")))
        },
        textSetter: function(t) {
            t !== this.textStr && (delete this.bBox, this.textStr = t, this.added && this.renderer.buildText(this))
        },
        fillSetter: function(t, e, i) {
            "string" == typeof t ? i.setAttribute(e, t) : t && this.colorGradient(t, e, i)
        },
        visibilitySetter: function(t, e, i) {
            "inherit" === t ? i.removeAttribute(e) : i.setAttribute(e, t)
        },
        zIndexSetter: function(t, e) {
            var i, n, r, s, a, l = this.renderer,
                h = this.parentGroup,
                u = h || l,
                p = u.element || l.box,
                d = this.element,
                f = this.added;
            if (c(t) && (d.zIndex = t, t = +t, this[e] === t && (f = !1), this[e] = t), f) {
                for (t = this.zIndex, t && h && (h.handleZ = !0), i = p.childNodes, a = 0; a < i.length && !s; a++) n = i[a], r = n.zIndex, n !== d && (o(r) > t || !c(t) && c(r)) && (p.insertBefore(d, n), s = !0);
                s || p.appendChild(d)
            }
            return s
        },
        _defaultSetter: function(t, e, i) {
            i.setAttribute(e, t)
        }
    }, I.prototype.yGetter = I.prototype.xGetter, I.prototype.translateXSetter = I.prototype.translateYSetter = I.prototype.rotationSetter = I.prototype.verticalAlignSetter = I.prototype.scaleXSetter = I.prototype.scaleYSetter = function(t, e) {
        this[e] = t, this.doTransform = !0
    }, I.prototype["stroke-widthSetter"] = I.prototype.strokeSetter = function(t, e, i) {
        this[e] = t, this.stroke && this["stroke-width"] ? (this.strokeWidth = this["stroke-width"], I.prototype.fillSetter.call(this, this.stroke, "stroke", i), i.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === e && 0 === t && this.hasStroke && (i.removeAttribute("stroke"), this.hasStroke = !1)
    };
    var Ti = function() {
        this.init.apply(this, arguments)
    };
    Ti.prototype = {
        Element: I,
        init: function(e, i, n, o, r, s) {
            var a, l, c, u = this;
            a = u.createElement("svg").attr({
                version: "1.1"
            }).css(this.getStyle(o)), l = a.element, e.appendChild(l), -1 === e.innerHTML.indexOf("xmlns") && h(l, "xmlns", Oe), u.isSVG = !0, u.box = l, u.boxWrapper = a, u.alignedObjects = [], u.url = (Le || Ee) && pe.getElementsByTagName("base").length ? t.location.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", c = this.createElement("desc").add(), c.element.appendChild(pe.createTextNode("Created with " + He + " " + Fe)), u.defs = this.createElement("defs").add(), u.allowHTML = s, u.forExport = r, u.gradients = {}, u.cache = {}, u.cacheKeys = [], u.imgCount = 0, u.setSize(i, n, !1);
            var p, f;
            Le && e.getBoundingClientRect && (u.subPixelFix = p = function() {
                d(e, {
                    left: 0,
                    top: 0
                }), f = e.getBoundingClientRect(), d(e, {
                    left: me(f.left) - f.left + Ue,
                    top: me(f.top) - f.top + Ue
                })
            }, p(), ui(t, "resize", p))
        },
        getStyle: function(t) {
            return this.style = vi({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, t), this.style
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var e = this,
                i = e.defs;
            return e.box = null, e.boxWrapper = e.boxWrapper.destroy(), A(e.gradients || {}), e.gradients = null, i && (e.defs = i.destroy()), e.subPixelFix && pi(t, "resize", e.subPixelFix), e.alignedObjects = null, null
        },
        createElement: function(t) {
            var e = new this.Element;
            return e.init(this, t), e
        },
        draw: function() {},
        getRadialAttr: function(t, e) {
            return {
                cx: t[0] - t[2] / 2 + e.cx * t[2],
                cy: t[1] - t[2] / 2 + e.cy * t[2],
                r: e.r * t[2]
            }
        },
        buildText: function(t) {
            for (var e, i, n, r, s = t.element, a = this, l = a.forExport, c = bi(t.textStr, "").toString(), u = -1 !== c.indexOf("<"), p = s.childNodes, f = h(s, "x"), g = t.styles, m = t.textWidth, v = g && g.lineHeight, y = g && g.textShadow, b = g && "ellipsis" === g.textOverflow, x = p.length, w = m && !t.added && this.box, k = function(t) {
                    return v ? o(v) : a.fontMetrics(/(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize : g && g.fontSize || a.style.fontSize || 12, t).h
                }, T = function(t) {
                    return t.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                }; x--;) s.removeChild(p[x]);
            u || y || b || -1 !== c.indexOf(" ") ? (i = /<.*style="([^"]+)".*>/, n = /<.*href="(http[^"]+)".*>/, w && w.appendChild(s), e = u ? c.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [c], e = li(e, function(t) {
                return "" !== t
            }), ai(e, function(e, o) {
                var c, u = 0;
                e = e.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"), c = e.split("|||"), ai(c, function(e) {
                    if ("" !== e || 1 === c.length) {
                        var p, v = {},
                            y = pe.createElementNS(Oe, "tspan");
                        if (i.test(e) && (p = e.match(i)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), h(y, "style", p)), n.test(e) && !l && (h(y, "onclick", 'location.href="' + e.match(n)[1] + '"'), d(y, {
                                cursor: "pointer"
                            })), e = T(e.replace(/<(.|\n)*?>/g, "") || " "), " " !== e) {
                            if (y.appendChild(pe.createTextNode(e)), u ? v.dx = 0 : o && null !== f && (v.x = f), h(y, v), s.appendChild(y), !u && o && (!_e && l && d(y, {
                                    display: "block"
                                }), h(y, "dy", k(y))), m) {
                                for (var x, w, C, S = e.replace(/([^\^])-/g, "$1- ").split(" "), A = c.length > 1 || o || S.length > 1 && "nowrap" !== g.whiteSpace, P = [], E = k(y), L = 1, D = t.rotation, O = e, _ = O.length;
                                    (A || b) && (S.length || P.length);) t.rotation = 0, C = t.getBBox(!0), w = C.width, !_e && a.forExport && (w = a.measureSpanWidth(y.firstChild.data, t.styles)), x = w > m, void 0 === r && (r = x), b && r ? (_ /= 2, "" === O || !x && .5 > _ ? S = [] : (O = e.substring(0, O.length + (x ? -1 : 1) * me(_)), S = [O + (m > 3 ? "�" : "")], y.removeChild(y.firstChild))) : x && 1 !== S.length ? (y.removeChild(y.firstChild), P.unshift(S.pop())) : (S = P, P = [], S.length && (L++, y = pe.createElementNS(Oe, "tspan"), h(y, {
                                    dy: E,
                                    x: f
                                }), p && h(y, "style", p), s.appendChild(y)), w > m && (m = w)), S.length && y.appendChild(pe.createTextNode(S.join(" ").replace(/- /g, "-")));
                                t.rotation = D
                            }
                            u++
                        }
                    }
                })
            }), r && t.attr("title", t.textStr), w && w.removeChild(s), y && t.applyTextShadow && t.applyTextShadow(y)) : s.appendChild(pe.createTextNode(T(c)))
        },
        getContrast: function(t) {
            return t = N(t).rgba, t[0] + t[1] + t[2] > 384 ? "#000000" : "#FFFFFF"
        },
        button: function(t, e, i, o, r, s, a, l, c) {
            var h, u, p, d, f, g, m = this.label(t, e, i, c, null, null, null, null, "button"),
                v = 0,
                y = {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                };
            return r = n({
                "stroke-width": 1,
                stroke: "#CCCCCC",
                fill: {
                    linearGradient: y,
                    stops: [
                        [0, "#FEFEFE"],
                        [1, "#F6F6F6"]
                    ]
                },
                r: 2,
                padding: 5,
                style: {
                    color: "black"
                }
            }, r), p = r.style, delete r.style, s = n(r, {
                stroke: "#68A",
                fill: {
                    linearGradient: y,
                    stops: [
                        [0, "#FFF"],
                        [1, "#ACF"]
                    ]
                }
            }, s), d = s.style, delete s.style, a = n(r, {
                stroke: "#68A",
                fill: {
                    linearGradient: y,
                    stops: [
                        [0, "#9BD"],
                        [1, "#CDF"]
                    ]
                }
            }, a), f = a.style, delete a.style, l = n(r, {
                style: {
                    color: "#CCC"
                }
            }, l), g = l.style, delete l.style, ui(m.element, Ae ? "mouseover" : "mouseenter", function() {
                3 !== v && m.attr(s).css(d)
            }), ui(m.element, Ae ? "mouseout" : "mouseleave", function() {
                3 !== v && (h = [r, s, a][v], u = [p, d, f][v], m.attr(h).css(u))
            }), m.setState = function(t) {
                m.state = v = t, t ? 2 === t ? m.attr(a).css(f) : 3 === t && m.attr(l).css(g) : m.attr(r).css(p)
            }, m.on("click", function(t) {
                3 !== v && o.call(m, t)
            }).attr(r).css(vi({
                cursor: "default"
            }, p))
        },
        crispLine: function(t, e) {
            return t[1] === t[4] && (t[1] = t[4] = fe(t[1]) - e % 2 / 2), t[2] === t[5] && (t[2] = t[5] = fe(t[2]) + e % 2 / 2), t
        },
        path: function(t) {
            var e = {
                fill: Ve
            };
            return a(t) ? e.d = t : s(t) && vi(e, t), this.createElement("path").attr(e)
        },
        circle: function(t, e, i) {
            var n = s(t) ? t : {
                    x: t,
                    y: e,
                    r: i
                },
                o = this.createElement("circle");
            return o.xSetter = o.ySetter = function(t, e, i) {
                i.setAttribute("c" + e, t)
            }, o.attr(n)
        },
        arc: function(t, e, i, n, o, r) {
            var a;
            return s(t) && (e = t.y, i = t.r, n = t.innerR, o = t.start, r = t.end, t = t.x), a = this.symbol("arc", t || 0, e || 0, i || 0, i || 0, {
                innerR: n || 0,
                start: o || 0,
                end: r || 0
            }), a.r = i, a
        },
        rect: function(t, e, i, n, o, r) {
            o = s(t) ? t.r : o;
            var a = this.createElement("rect"),
                l = s(t) ? t : t === z ? {} : {
                    x: t,
                    y: e,
                    width: ve(i, 0),
                    height: ve(n, 0)
                };
            return r !== z && (a.strokeWidth = r, l = a.crisp(l)), o && (l.r = o), a.rSetter = function(t, e, i) {
                h(i, {
                    rx: t,
                    ry: t
                })
            }, a.attr(l)
        },
        setSize: function(t, e, i) {
            var n = this,
                o = n.alignedObjects,
                r = o.length;
            for (n.width = t, n.height = e, n.boxWrapper[bi(i, !0) ? "animate" : "attr"]({
                    width: t,
                    height: e
                }); r--;) o[r].align()
        },
        g: function(t) {
            var e = this.createElement("g");
            return c(t) ? e.attr({
                "class": Ye + t
            }) : e
        },
        image: function(t, e, i, n, o) {
            var r, s = {
                preserveAspectRatio: Ve
            };
            return arguments.length > 1 && vi(s, {
                x: e,
                y: i,
                width: n,
                height: o
            }), r = this.createElement("image").attr(s), r.element.setAttributeNS ? r.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", t) : r.element.setAttribute("hc-svg-href", t), r
        },
        symbol: function(t, e, i, n, o, r) {
            var s, a, l, c, h = this,
                u = this.symbols[t],
                p = u && u(fe(e), fe(i), n, o, r),
                g = /^url\((.*?)\)$/;
            return p ? (s = this.path(p), vi(s, {
                symbolName: t,
                x: e,
                y: i,
                width: n,
                height: o
            }), r && vi(s, r)) : g.test(t) && (c = function(t, e) {
                t.element && (t.attr({
                    width: e[0],
                    height: e[1]
                }), t.alignByTranslate || t.translate(fe((n - e[0]) / 2), fe((o - e[1]) / 2)))
            }, a = t.match(g)[1], l = Ie[a] || r && r.width && r.height && [r.width, r.height], s = this.image(a).attr({
                x: e,
                y: i
            }), s.isImg = !0, l ? c(s, l) : (s.attr({
                width: 0,
                height: 0
            }), f("img", {
                onload: function() {
                    0 === this.width && (d(this, {
                        position: We,
                        top: "-999em"
                    }), pe.body.appendChild(this)), c(s, Ie[a] = [this.width, this.height]), this.parentNode && this.parentNode.removeChild(this), h.imgCount--, !h.imgCount && Re[h.chartIndex].onload && Re[h.chartIndex].onload()
                },
                src: a
            }), this.imgCount++)), s
        },
        symbols: {
            circle: function(t, e, i, n) {
                var o = .166 * i;
                return [Ke, t + i / 2, e, "C", t + i + o, e, t + i + o, e + n, t + i / 2, e + n, "C", t - o, e + n, t - o, e, t + i / 2, e, "Z"]
            },
            square: function(t, e, i, n) {
                return [Ke, t, e, Ze, t + i, e, t + i, e + n, t, e + n, "Z"]
            },
            triangle: function(t, e, i, n) {
                return [Ke, t + i / 2, e, Ze, t + i, e + n, t, e + n, "Z"]
            },
            "triangle-down": function(t, e, i, n) {
                return [Ke, t, e, Ze, t + i, e, t + i / 2, e + n, "Z"]
            },
            diamond: function(t, e, i, n) {
                return [Ke, t + i / 2, e, Ze, t + i, e + n / 2, t + i / 2, e + n, t, e + n / 2, "Z"]
            },
            arc: function(t, e, i, n, o) {
                var r = o.start,
                    s = o.r || i || n,
                    a = o.end - .001,
                    l = o.innerR,
                    c = o.open,
                    h = xe(r),
                    u = we(r),
                    p = xe(a),
                    d = we(a),
                    f = o.end - r < ke ? 0 : 1;
                return [Ke, t + s * h, e + s * u, "A", s, s, 0, f, 1, t + s * p, e + s * d, c ? Ke : Ze, t + l * p, e + l * d, "A", l, l, 0, f, 0, t + l * h, e + l * u, c ? "" : "Z"]
            },
            callout: function(t, e, i, n, o) {
                var r, s = 6,
                    a = 6,
                    l = ye(o && o.r || 0, i, n),
                    c = l + a,
                    h = o && o.anchorX,
                    u = o && o.anchorY;
                return r = ["M", t + l, e, "L", t + i - l, e, "C", t + i, e, t + i, e, t + i, e + l, "L", t + i, e + n - l, "C", t + i, e + n, t + i, e + n, t + i - l, e + n, "L", t + l, e + n, "C", t, e + n, t, e + n, t, e + n - l, "L", t, e + l, "C", t, e, t, e, t + l, e], h && h > i && u > e + c && e + n - c > u ? r.splice(13, 3, "L", t + i, u - a, t + i + s, u, t + i, u + a, t + i, e + n - l) : h && 0 > h && u > e + c && e + n - c > u ? r.splice(33, 3, "L", t, u + a, t - s, u, t, u - a, t, e + l) : u && u > n && h > t + c && t + i - c > h ? r.splice(23, 3, "L", h + a, e + n, h, e + n + s, h - a, e + n, t + l, e + n) : u && 0 > u && h > t + c && t + i - c > h && r.splice(3, 3, "L", h - a, e, h, e - s, h + a, e, i - l, e), r
            }
        },
        clipRect: function(t, e, i, n) {
            var o, r = Ye + $e++,
                s = this.createElement("clipPath").attr({
                    id: r
                }).add(this.defs);
            return o = this.rect(t, e, i, n, 0).add(s), o.id = r, o.clipPath = s, o.count = 0, o
        },
        text: function(t, e, i, n) {
            var o, r = this,
                s = Ne || !_e && r.forExport,
                a = {};
            return !n || !r.allowHTML && r.forExport ? (a.x = Math.round(e || 0), i && (a.y = Math.round(i)), (t || 0 === t) && (a.text = t), o = r.createElement("text").attr(a), s && o.css({
                position: We
            }), n || (o.xSetter = function(t, e, i) {
                var n, o, r = i.getElementsByTagName("tspan"),
                    s = i.getAttribute(e);
                for (o = 0; o < r.length; o++) n = r[o], n.getAttribute(e) === s && n.setAttribute(e, t);
                i.setAttribute(e, t)
            }), o) : r.html(t, e, i)
        },
        fontMetrics: function(e, i) {
            var n, r, s;
            return e = e || this.style.fontSize, !e && i && t.getComputedStyle && (i = i.element || i, s = t.getComputedStyle(i, ""), e = s && s.fontSize), e = /px/.test(e) ? o(e) : /em/.test(e) ? 12 * parseFloat(e) : 12, n = 24 > e ? e + 3 : fe(1.2 * e), r = fe(.8 * n), {
                h: n,
                b: r,
                f: e
            }
        },
        rotCorr: function(t, e, i) {
            var n = t;
            return e && i && (n = ve(n * xe(e * Te), 4)), {
                x: -t / 3 * we(e * Te),
                y: n
            }
        },
        label: function(t, e, i, o, r, s, a, l, h) {
            var u, p, d, f, g, m, v, y, b, x, w, k = this,
                T = k.g(h),
                C = k.text("", 0, 0, a).attr({
                    zIndex: 1
                }),
                S = 0,
                A = 3,
                P = 0,
                E = 0,
                L = {};
            b = function() {
                var t, e, i = C.element.style;
                p = (void 0 === d || void 0 === f || T.styles.textAlign) && c(C.textStr) && C.getBBox(), T.width = (d || p.width || 0) + 2 * A + P, T.height = (f || p.height || 0) + 2 * A, v = A + k.fontMetrics(i && i.fontSize, C).b, y && (u || (t = E, e = (l ? -v : 0) + E, T.box = u = o ? k.symbol(o, t, e, T.width, T.height, L) : k.rect(t, e, T.width, T.height, 0, L[ni]), u.isImg || u.attr("fill", Ve), u.add(T)), u.isImg || u.attr(vi({
                    width: fe(T.width),
                    height: fe(T.height)
                }, L)), L = null)
            }, x = function() {
                var t, e = T.styles,
                    i = e && e.textAlign,
                    n = P + A;
                t = l ? 0 : v, c(d) && p && ("center" === i || "right" === i) && (n += {
                    center: .5,
                    right: 1
                }[i] * (d - p.width)), (n !== C.x || t !== C.y) && (C.attr("x", n), t !== z && C.attr("y", t)), C.x = n, C.y = t
            }, w = function(t, e) {
                u ? u.attr(t, e) : L[t] = e
            }, T.onAdd = function() {
                C.add(T), T.attr({
                    text: t || 0 === t ? t : "",
                    x: e,
                    y: i
                }), u && c(r) && T.attr({
                    anchorX: r,
                    anchorY: s
                })
            }, T.widthSetter = function(t) {
                d = t
            }, T.heightSetter = function(t) {
                f = t
            }, T.paddingSetter = function(t) {
                c(t) && t !== A && (A = T.padding = t, x())
            }, T.paddingLeftSetter = function(t) {
                c(t) && t !== P && (P = t, x())
            }, T.alignSetter = function(t) {
                t = {
                    left: 0,
                    center: .5,
                    right: 1
                }[t], t !== S && (S = t, p && T.attr({
                    x: g
                }))
            }, T.textSetter = function(t) {
                t !== z && C.textSetter(t), b(), x()
            }, T["stroke-widthSetter"] = function(t, e) {
                t && (y = !0), E = t % 2 / 2, w(e, t)
            }, T.strokeSetter = T.fillSetter = T.rSetter = function(t, e) {
                "fill" === e && t && (y = !0), w(e, t)
            }, T.anchorXSetter = function(t, e) {
                r = t, w(e, fe(t) - E - g)
            }, T.anchorYSetter = function(t, e) {
                s = t, w(e, t - m)
            }, T.xSetter = function(t) {
                T.x = t, S && (t -= S * ((d || p.width) + 2 * A)), g = fe(t), T.attr("translateX", g)
            }, T.ySetter = function(t) {
                m = T.y = fe(t), T.attr("translateY", m)
            };
            var D = T.css;
            return vi(T, {
                css: function(t) {
                    if (t) {
                        var e = {};
                        t = n(t), ai(T.textProps, function(i) {
                            t[i] !== z && (e[i] = t[i], delete t[i])
                        }), C.css(e)
                    }
                    return D.call(T, t)
                },
                getBBox: function() {
                    return {
                        width: p.width + 2 * A,
                        height: p.height + 2 * A,
                        x: p.x - A,
                        y: p.y - A
                    }
                },
                shadow: function(t) {
                    return u && u.shadow(t), T
                },
                destroy: function() {
                    pi(T.element, "mouseenter"), pi(T.element, "mouseleave"), C && (C = C.destroy()), u && (u = u.destroy()), I.prototype.destroy.call(T), T = k = b = x = w = null
                }
            })
        }
    }, H = Ti, vi(I.prototype, {
        htmlCss: function(t) {
            var e = this,
                i = e.element,
                n = t && "SPAN" === i.tagName && t.width;
            return n && (delete t.width, e.textWidth = n, e.updateTransform()), t && "ellipsis" === t.textOverflow && (t.whiteSpace = "nowrap", t.overflow = "hidden"), e.styles = vi(e.styles, t), d(e.element, t), e
        },
        htmlGetBBox: function() {
            var t = this,
                e = t.element;
            return "text" === e.nodeName && (e.style.position = We), {
                x: e.offsetLeft,
                y: e.offsetTop,
                width: e.offsetWidth,
                height: e.offsetHeight
            }
        },
        htmlUpdateTransform: function() {
            if (!this.added) return void(this.alignOnAdd = !0);
            var t = this,
                e = t.renderer,
                i = t.element,
                n = t.translateX || 0,
                r = t.translateY || 0,
                s = t.x || 0,
                a = t.y || 0,
                l = t.textAlign || "left",
                h = {
                    left: 0,
                    center: .5,
                    right: 1
                }[l],
                u = t.shadows,
                p = t.styles;
            if (d(i, {
                    marginLeft: n,
                    marginTop: r
                }), u && ai(u, function(t) {
                    d(t, {
                        marginLeft: n + 1,
                        marginTop: r + 1
                    })
                }), t.inverted && ai(i.childNodes, function(t) {
                    e.invertChild(t, i)
                }), "SPAN" === i.tagName) {
                var f, g = t.rotation,
                    m = o(t.textWidth),
                    v = p && p.whiteSpace,
                    y = [g, l, i.innerHTML, t.textWidth, t.textAlign].join(",");
                y !== t.cTT && (f = e.fontMetrics(i.style.fontSize).b, c(g) && t.setSpanRotation(g, h, f), i.offsetWidth > m && /[ \-]/.test(i.textContent || i.innerText) ? (d(i, {
                    width: m + Ue,
                    display: "block",
                    whiteSpace: v || "normal"
                }), t.hasTextWidth = !0) : t.hasTextWidth && (d(i, {
                    width: "",
                    display: "",
                    whiteSpace: v || "nowrap"
                }), t.hasTextWidth = !1), t.getSpanCorrection(t.hasTextWidth ? m : i.offsetWidth, f, h, g, l)), d(i, {
                    left: s + (t.xCorr || 0) + Ue,
                    top: a + (t.yCorr || 0) + Ue
                }), Ee && (f = i.offsetHeight), t.cTT = y
            }
        },
        setSpanRotation: function(t, e, i) {
            var n = {},
                o = Ae ? "-ms-transform" : Ee ? "-webkit-transform" : Le ? "MozTransform" : Se ? "-o-transform" : "";
            n[o] = n.transform = "rotate(" + t + "deg)", n[o + (Le ? "Origin" : "-origin")] = n.transformOrigin = 100 * e + "% " + i + "px", d(this.element, n)
        },
        getSpanCorrection: function(t, e, i) {
            this.xCorr = -t * i, this.yCorr = -e
        }
    }), vi(Ti.prototype, {
        html: function(t, e, i) {
            var n = this.createElement("span"),
                o = n.element,
                r = n.renderer,
                s = r.isSVG,
                a = function(t, e) {
                    ai(["opacity", "visibility"], function(i) {
                        xi(t, i + "Setter", function(t, i, n, o) {
                            t.call(this, i, n, o), e[n] = i
                        })
                    })
                };
            return n.textSetter = function(t) {
                t !== o.innerHTML && delete this.bBox, o.innerHTML = this.textStr = t, n.htmlUpdateTransform()
            }, s && a(n, n.element.style), n.xSetter = n.ySetter = n.alignSetter = n.rotationSetter = function(t, e) {
                "align" === e && (e = "textAlign"), n[e] = t, n.htmlUpdateTransform()
            }, n.attr({
                text: t,
                x: fe(e),
                y: fe(i)
            }).css({
                position: We,
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize
            }), o.style.whiteSpace = "nowrap", n.css = n.htmlCss, s && (n.add = function(t) {
                var e, i, s = r.box.parentNode,
                    l = [];
                if (this.parentGroup = t, t) {
                    if (e = t.div, !e) {
                        for (i = t; i;) l.push(i), i = i.parentGroup;
                        ai(l.reverse(), function(t) {
                            var i, n = h(t.element, "class");
                            n && (n = {
                                className: n
                            }), e = t.div = t.div || f(Be, n, {
                                position: We,
                                left: (t.translateX || 0) + Ue,
                                top: (t.translateY || 0) + Ue,
                                opacity: t.opacity
                            }, e || s), i = e.style, vi(t, {
                                translateXSetter: function(e, n) {
                                    i.left = e + Ue, t[n] = e, t.doTransform = !0
                                },
                                translateYSetter: function(e, n) {
                                    i.top = e + Ue, t[n] = e, t.doTransform = !0
                                }
                            }), a(t, i)
                        })
                    }
                } else e = s;
                return e.appendChild(o), n.added = !0, n.alignOnAdd && n.htmlUpdateTransform(), n
            }), n
        }
    });
    var Ci, Si;
    if (!_e && !Ne) {
        Si = {
            init: function(t, e) {
                var i = this,
                    n = ["<", e, ' filled="f" stroked="f"'],
                    o = ["position: ", We, ";"],
                    r = e === Be;
                ("shape" === e || r) && o.push("left:0;top:0;width:1px;height:1px;"), o.push("visibility: ", r ? qe : Ge), n.push(' style="', o.join(""), '"/>'), e && (n = r || "span" === e || "img" === e ? n.join("") : t.prepVML(n), i.element = f(n)), i.renderer = t
            },
            add: function(t) {
                var e = this,
                    i = e.renderer,
                    n = e.element,
                    o = i.box,
                    r = t && t.inverted,
                    s = t ? t.element || t : o;
                return t && (this.parentGroup = t), r && i.invertChild(n, s), s.appendChild(n), e.added = !0, e.alignOnAdd && !e.deferUpdateTransform && e.updateTransform(), e.onAdd && e.onAdd(), e
            },
            updateTransform: I.prototype.htmlUpdateTransform,
            setSpanRotation: function() {
                var t = this.rotation,
                    e = xe(t * Te),
                    i = we(t * Te);
                d(this.element, {
                    filter: t ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", e, ", M12=", -i, ", M21=", i, ", M22=", e, ", sizingMethod='auto expand')"].join("") : Ve
                })
            },
            getSpanCorrection: function(t, e, i, n, o) {
                var r, s = n ? xe(n * Te) : 1,
                    a = n ? we(n * Te) : 0,
                    l = bi(this.elemHeight, this.element.offsetHeight),
                    c = o && "left" !== o;
                this.xCorr = 0 > s && -t, this.yCorr = 0 > a && -l, r = 0 > s * a, this.xCorr += a * e * (r ? 1 - i : i), this.yCorr -= s * e * (n ? r ? i : 1 - i : 1), c && (this.xCorr -= t * i * (0 > s ? -1 : 1), n && (this.yCorr -= l * i * (0 > a ? -1 : 1)), d(this.element, {
                    textAlign: o
                }))
            },
            pathToVML: function(t) {
                for (var e = t.length, i = []; e--;) yi(t[e]) ? i[e] = fe(10 * t[e]) - 5 : "Z" === t[e] ? i[e] = "x" : (i[e] = t[e], !t.isArc || "wa" !== t[e] && "at" !== t[e] || (i[e + 5] === i[e + 7] && (i[e + 7] += t[e + 7] > t[e + 5] ? 1 : -1), i[e + 6] === i[e + 8] && (i[e + 8] += t[e + 8] > t[e + 6] ? 1 : -1)));
                return i.join(" ") || "x"
            },
            clip: function(t) {
                var e, i, n = this;
                return t ? (e = t.members, l(e, n), e.push(n), n.destroyClip = function() {
                    l(e, n)
                }, i = t.getCSS(n)) : (n.destroyClip && n.destroyClip(), i = {
                    clip: Pe ? "inherit" : "rect(auto)"
                }), n.css(i)
            },
            css: I.prototype.htmlCss,
            safeRemoveChild: function(t) {
                t.parentNode && P(t)
            },
            destroy: function() {
                return this.destroyClip && this.destroyClip(), I.prototype.destroy.apply(this)
            },
            on: function(e, i) {
                return this.element["on" + e] = function() {
                    var e = t.event;
                    e.target = e.srcElement, i(e)
                }, this
            },
            cutOffPath: function(t, e) {
                var i;
                return t = t.split(/[ ,]/), i = t.length, (9 === i || 11 === i) && (t[i - 4] = t[i - 2] = o(t[i - 2]) - 10 * e), t.join(" ")
            },
            shadow: function(t, e, i) {
                var n, r, s, a, l, c, h, u = [],
                    p = this.element,
                    d = this.renderer,
                    g = p.style,
                    m = p.path;
                if (m && "string" != typeof m.value && (m = "x"), l = m, t) {
                    for (c = bi(t.width, 3), h = (t.opacity || .15) / c, n = 1; 3 >= n; n++) a = 2 * c + 1 - 2 * n, i && (l = this.cutOffPath(m.value, a + .5)), s = ['<shape isShadow="true" strokeweight="', a, '" filled="false" path="', l, '" coordsize="10 10" style="', p.style.cssText, '" />'], r = f(d.prepVML(s), null, {
                        left: o(g.left) + bi(t.offsetX, 1),
                        top: o(g.top) + bi(t.offsetY, 1)
                    }), i && (r.cutOff = a + 1), s = ['<stroke color="', t.color || "black", '" opacity="', h * n, '"/>'], f(d.prepVML(s), null, null, r), e ? e.element.appendChild(r) : p.parentNode.insertBefore(r, p), u.push(r);
                    this.shadows = u
                }
                return this
            },
            updateShadows: je,
            setAttr: function(t, e) {
                Pe ? this.element[t] = e : this.element.setAttribute(t, e)
            },
            classSetter: function(t) {
                this.element.className = t
            },
            dashstyleSetter: function(t, e, i) {
                var n = i.getElementsByTagName("stroke")[0] || f(this.renderer.prepVML(["<stroke/>"]), null, null, i);
                n[e] = t || "solid", this[e] = t
            },
            dSetter: function(t, e, i) {
                var n, o = this.shadows;
                if (t = t || [], this.d = t.join && t.join(" "), i.path = t = this.pathToVML(t), o)
                    for (n = o.length; n--;) o[n].path = o[n].cutOff ? this.cutOffPath(t, o[n].cutOff) : t;
                this.setAttr(e, t)
            },
            fillSetter: function(t, e, i) {
                var n = i.nodeName;
                "SPAN" === n ? i.style.color = t : "IMG" !== n && (i.filled = t !== Ve, this.setAttr("fillcolor", this.renderer.color(t, i, e, this)))
            },
            "fill-opacitySetter": function(t, e, i) {
                f(this.renderer.prepVML(["<", e.split("-")[0], ' opacity="', t, '"/>']), null, null, i)
            },
            opacitySetter: je,
            rotationSetter: function(t, e, i) {
                var n = i.style;
                this[e] = n[e] = t, n.left = -fe(we(t * Te) + 1) + Ue, n.top = fe(xe(t * Te)) + Ue
            },
            strokeSetter: function(t, e, i) {
                this.setAttr("strokecolor", this.renderer.color(t, i, e, this))
            },
            "stroke-widthSetter": function(t, e, i) {
                i.stroked = !!t, this[e] = t, yi(t) && (t += Ue), this.setAttr("strokeweight", t)
            },
            titleSetter: function(t, e) {
                this.setAttr(e, t)
            },
            visibilitySetter: function(t, e, i) {
                "inherit" === t && (t = Ge), this.shadows && ai(this.shadows, function(i) {
                    i.style[e] = t
                }), "DIV" === i.nodeName && (t = t === qe ? "-999em" : 0, Pe || (i.style[e] = t ? Ge : qe), e = "top"), i.style[e] = t
            },
            xSetter: function(t, e, i) {
                this[e] = t, "x" === e ? e = "left" : "y" === e && (e = "top"), this.updateClipping ? (this[e] = t, this.updateClipping()) : i.style[e] = t
            },
            zIndexSetter: function(t, e, i) {
                i.style[e] = t
            }
        }, Si["stroke-opacitySetter"] = Si["fill-opacitySetter"], ue.VMLElement = Si = g(I, Si), Si.prototype.ySetter = Si.prototype.widthSetter = Si.prototype.heightSetter = Si.prototype.xSetter;
        var Ai = {
            Element: Si,
            isIE8: Ce.indexOf("MSIE 8.0") > -1,
            init: function(t, e, i, n) {
                var o, r, s, a = this;
                if (a.alignedObjects = [], o = a.createElement(Be).css(vi(this.getStyle(n), {
                        position: "relative"
                    })), r = o.element, t.appendChild(o.element), a.isVML = !0, a.box = r, a.boxWrapper = o, a.gradients = {}, a.cache = {}, a.cacheKeys = [], a.imgCount = 0, a.setSize(e, i, !1), !pe.namespaces.hcv) {
                    pe.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"), s = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
                    try {
                        pe.createStyleSheet().cssText = s
                    } catch (l) {
                        pe.styleSheets[0].cssText += s
                    }
                }
            },
            isHidden: function() {
                return !this.box.offsetWidth
            },
            clipRect: function(t, e, i, n) {
                var o = this.createElement(),
                    r = s(t);
                return vi(o, {
                    members: [],
                    count: 0,
                    left: (r ? t.x : t) + 1,
                    top: (r ? t.y : e) + 1,
                    width: (r ? t.width : i) - 1,
                    height: (r ? t.height : n) - 1,
                    getCSS: function(t) {
                        var e = t.element,
                            i = e.nodeName,
                            n = "shape" === i,
                            o = t.inverted,
                            r = this,
                            s = r.top - (n ? e.offsetTop : 0),
                            a = r.left,
                            l = a + r.width,
                            c = s + r.height,
                            h = {
                                clip: "rect(" + fe(o ? a : s) + "px," + fe(o ? c : l) + "px," + fe(o ? l : c) + "px," + fe(o ? s : a) + "px)"
                            };
                        return !o && Pe && "DIV" === i && vi(h, {
                            width: l + Ue,
                            height: c + Ue
                        }), h
                    },
                    updateClipping: function() {
                        ai(o.members, function(t) {
                            t.element && t.css(o.getCSS(t))
                        })
                    }
                })
            },
            color: function(t, e, i, n) {
                var o, r, s, a = this,
                    l = /^rgba/,
                    c = Ve;
                if (t && t.linearGradient ? s = "gradient" : t && t.radialGradient && (s = "pattern"), s) {
                    var h, u, p, d, g, m, v, y, b, x, w, k, T = t.linearGradient || t.radialGradient,
                        C = "",
                        S = t.stops,
                        A = [],
                        P = function() {
                            r = ['<fill colors="' + A.join(",") + '" opacity="', y, '" o:opacity2="', v, '" type="', s, '" ', C, 'focus="100%" method="any" />'], f(a.prepVML(r), null, null, e)
                        };
                    if (w = S[0], k = S[S.length - 1], w[0] > 0 && S.unshift([0, w[1]]), k[0] < 1 && S.push([1, k[1]]), ai(S, function(t, e) {
                            l.test(t[1]) ? (o = N(t[1]), h = o.get("rgb"), u = o.get("a")) : (h = t[1], u = 1), A.push(100 * t[0] + "% " + h), e ? (y = u, b = h) : (v = u, x = h)
                        }), "fill" === i)
                        if ("gradient" === s) p = T.x1 || T[0] || 0, d = T.y1 || T[1] || 0, g = T.x2 || T[2] || 0, m = T.y2 || T[3] || 0, C = 'angle="' + (90 - 180 * de.atan((m - d) / (g - p)) / ke) + '"', P();
                        else {
                            var E, L = T.r,
                                D = 2 * L,
                                O = 2 * L,
                                _ = T.cx,
                                M = T.cy,
                                I = e.radialReference,
                                $ = function() {
                                    I && (E = n.getBBox(), _ += (I[0] - E.x) / E.width - .5, M += (I[1] - E.y) / E.height - .5, D *= I[2] / E.width, O *= I[2] / E.height), C = 'src="' + W.global.VMLRadialGradientURL + '" size="' + D + "," + O + '" origin="0.5,0.5" position="' + _ + "," + M + '" color2="' + x + '" ', P()
                                };
                            n.added ? $() : n.onAdd = $, c = b
                        } else c = h
                } else if (l.test(t) && "IMG" !== e.tagName) o = N(t), n[i + "-opacitySetter"](o.get("a"), i, e), c = o.get("rgb");
                else {
                    var j = e.getElementsByTagName(i);
                    j.length && (j[0].opacity = 1, j[0].type = "solid"), c = t
                }
                return c
            },
            prepVML: function(t) {
                var e = "display:inline-block;behavior:url(#default#VML);",
                    i = this.isIE8;
                return t = t.join(""), i ? (t = t.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), t = -1 === t.indexOf('style="') ? t.replace("/>", ' style="' + e + '" />') : t.replace('style="', 'style="' + e)) : t = t.replace("<", "<hcv:"), t
            },
            text: Ti.prototype.html,
            path: function(t) {
                var e = {
                    coordsize: "10 10"
                };
                return a(t) ? e.d = t : s(t) && vi(e, t), this.createElement("shape").attr(e)
            },
            circle: function(t, e, i) {
                var n = this.symbol("circle");
                return s(t) && (i = t.r, e = t.y, t = t.x), n.isCircle = !0, n.r = i, n.attr({
                    x: t,
                    y: e
                })
            },
            g: function(t) {
                var e, i;
                return t && (i = {
                    className: Ye + t,
                    "class": Ye + t
                }), e = this.createElement(Be).attr(i)
            },
            image: function(t, e, i, n, o) {
                var r = this.createElement("img").attr({
                    src: t
                });
                return arguments.length > 1 && r.attr({
                    x: e,
                    y: i,
                    width: n,
                    height: o
                }), r
            },
            createElement: function(t) {
                return "rect" === t ? this.symbol(t) : Ti.prototype.createElement.call(this, t)
            },
            invertChild: function(t, e) {
                var i = this,
                    n = e.style,
                    r = "IMG" === t.tagName && t.style;
                d(t, {
                    flip: "x",
                    left: o(n.width) - (r ? o(r.top) : 1),
                    top: o(n.height) - (r ? o(r.left) : 1),
                    rotation: -90
                }), ai(t.childNodes, function(e) {
                    i.invertChild(e, t)
                })
            },
            symbols: {
                arc: function(t, e, i, n, o) {
                    var r, s = o.start,
                        a = o.end,
                        l = o.r || i || n,
                        c = o.innerR,
                        h = xe(s),
                        u = we(s),
                        p = xe(a),
                        d = we(a);
                    return a - s === 0 ? ["x"] : (r = ["wa", t - l, e - l, t + l, e + l, t + l * h, e + l * u, t + l * p, e + l * d], o.open && !c && r.push("e", Ke, t, e), r.push("at", t - c, e - c, t + c, e + c, t + c * p, e + c * d, t + c * h, e + c * u, "x", "e"), r.isArc = !0, r)
                },
                circle: function(t, e, i, n, o) {
                    return o && (i = n = 2 * o.r), o && o.isCircle && (t -= i / 2, e -= n / 2), ["wa", t, e, t + i, e + n, t + i, e + n / 2, t + i, e + n / 2, "e"]
                },
                rect: function(t, e, i, n, o) {
                    return Ti.prototype.symbols[c(o) && o.r ? "callout" : "square"].call(0, t, e, i, n, o)
                }
            }
        };
        ue.VMLRenderer = Ci = function() {
            this.init.apply(this, arguments)
        }, Ci.prototype = n(Ti.prototype, Ai), H = Ci
    }
    Ti.prototype.measureSpanWidth = function(t, e) {
        var i, n = pe.createElement("span"),
            o = pe.createTextNode(t);
        return n.appendChild(o), d(n, e), this.box.appendChild(n), i = n.offsetWidth, P(n), i
    };
    var Pi, Ei;
    Ne && (ue.CanVGRenderer = Pi = function() {
        Oe = "http://www.w3.org/1999/xhtml"
    }, Pi.prototype.symbols = {}, Ei = function() {
        function t() {
            var t, i = e.length;
            for (t = 0; i > t; t++) e[t]();
            e = []
        }
        var e = [];
        return {
            push: function(i, n) {
                0 === e.length && $(n, t), e.push(i)
            }
        }
    }(), H = Pi), j.prototype = {
        addLabel: function() {
            var t, e, i = this,
                o = i.axis,
                r = o.options,
                s = o.chart,
                a = o.categories,
                l = o.names,
                h = i.pos,
                u = r.labels,
                p = o.tickPositions,
                d = h === p[0],
                f = h === p[p.length - 1],
                g = a ? bi(a[h], l[h], h) : h,
                m = i.label,
                v = p.info;
            o.isDatetimeAxis && v && (e = r.dateTimeLabelFormats[v.higherRanks[h] || v.unitName]), i.isFirst = d, i.isLast = f, t = o.labelFormatter.call({
                axis: o,
                chart: s,
                isFirst: d,
                isLast: f,
                dateTimeLabelFormat: e,
                value: o.isLog ? E(o.lin2log(g)) : g
            }), c(m) ? m && m.attr({
                text: t
            }) : (i.label = m = c(t) && u.enabled ? s.renderer.text(t, 0, 0, u.useHTML).css(n(u.style)).add(o.labelGroup) : null, i.labelLength = m && m.getBBox().width, i.rotation = 0)
        },
        getLabelSize: function() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
        },
        handleOverflow: function(t) {
            var e, i, n, o = this.axis,
                r = t.x,
                s = o.chart.chartWidth,
                a = o.chart.spacing,
                l = bi(o.labelLeft, ye(o.pos, a[3])),
                c = bi(o.labelRight, ve(o.pos + o.len, s - a[1])),
                h = this.label,
                u = this.rotation,
                p = {
                    left: 0,
                    center: .5,
                    right: 1
                }[o.labelAlign],
                d = h.getBBox().width,
                f = o.getSlotWidth(),
                g = f,
                m = p,
                v = 1,
                y = {};
            u ? 0 > u && l > r - p * d ? n = fe(r / xe(u * Te) - l) : u > 0 && r + p * d > c && (n = fe((s - r) / xe(u * Te))) : (e = r - p * d, i = r + (1 - p) * d, l > e ? g = t.x + g * (1 - p) - l : i > c && (g = c - t.x + g * p, v = -1), g = ye(f, g), f > g && "center" === o.labelAlign && (t.x += v * (f - g - m * (f - ye(d, g)))), (d > g || o.autoRotation && h.styles.width) && (n = g)), n && (y.width = n, o.options.labels.style.textOverflow || (y.textOverflow = "ellipsis"), h.css(y))
        },
        getPosition: function(t, e, i, n) {
            var o = this.axis,
                r = o.chart,
                s = n && r.oldChartHeight || r.chartHeight;
            return {
                x: t ? o.translate(e + i, null, null, n) + o.transB : o.left + o.offset + (o.opposite ? (n && r.oldChartWidth || r.chartWidth) - o.right - o.left : 0),
                y: t ? s - o.bottom + o.offset - (o.opposite ? o.height : 0) : s - o.translate(e + i, null, null, n) - o.transB
            }
        },
        getLabelPosition: function(t, e, i, n, o, r, s, a) {
            var l, h = this.axis,
                u = h.transA,
                p = h.reversed,
                d = h.staggerLines,
                f = h.tickRotCorr || {
                    x: 0,
                    y: 0
                },
                g = o.y;
            return c(g) || (g = 0 === h.side ? i.rotation ? -8 : -i.getBBox().height : 2 === h.side ? f.y + 8 : xe(i.rotation * Te) * (f.y - i.getBBox(!1, 0).height / 2)), t = t + o.x + f.x - (r && n ? r * u * (p ? -1 : 1) : 0), e = e + g - (r && !n ? r * u * (p ? 1 : -1) : 0), d && (l = s / (a || 1) % d, h.opposite && (l = d - l - 1), e += l * (h.labelOffset / d)), {
                x: t,
                y: fe(e)
            }
        },
        getMarkPath: function(t, e, i, n, o, r) {
            return r.crispLine([Ke, t, e, Ze, t + (o ? 0 : -i), e + (o ? i : 0)], n)
        },
        render: function(t, e, i) {
            var n, o, r, s = this,
                a = s.axis,
                l = a.options,
                c = a.chart,
                h = c.renderer,
                u = a.horiz,
                p = s.type,
                d = s.label,
                f = s.pos,
                g = l.labels,
                m = s.gridLine,
                v = p ? p + "Grid" : "grid",
                y = p ? p + "Tick" : "tick",
                b = l[v + "LineWidth"],
                x = l[v + "LineColor"],
                w = l[v + "LineDashStyle"],
                k = a.tickSize(y),
                T = l[y + "Color"],
                C = s.mark,
                S = g.step,
                A = !0,
                P = a.tickmarkOffset,
                E = s.getPosition(u, f, P, e),
                L = E.x,
                D = E.y,
                O = u && L === a.pos + a.len || !u && D === a.pos ? -1 : 1;
            i = bi(i, 1), this.isActive = !0, b && (n = a.getPlotLinePath(f + P, b * O, e, !0), m === z && (r = {
                stroke: x,
                "stroke-width": b
            }, w && (r.dashstyle = w), p || (r.zIndex = 1), e && (r.opacity = 0), s.gridLine = m = b ? h.path(n).attr(r).add(a.gridGroup) : null), !e && m && n && m[s.isNew ? "attr" : "animate"]({
                d: n,
                opacity: i
            })), k && (a.opposite && (k[0] = -k[0]), o = s.getMarkPath(L, D, k[0], k[1] * O, u, h), C ? C.animate({
                d: o,
                opacity: i
            }) : s.mark = h.path(o).attr({
                stroke: T,
                "stroke-width": k[1],
                opacity: i
            }).add(a.axisGroup)), d && yi(L) && (d.xy = E = s.getLabelPosition(L, D, d, u, g, P, t, S), s.isFirst && !s.isLast && !bi(l.showFirstLabel, 1) || s.isLast && !s.isFirst && !bi(l.showLastLabel, 1) ? A = !1 : !u || a.isRadial || g.step || g.rotation || e || 0 === i || s.handleOverflow(E), S && t % S && (A = !1), A && yi(E.y) ? (E.opacity = i, d[s.isNew ? "attr" : "animate"](E), s.isNew = !1) : d.attr("y", -9999))
        },
        destroy: function() {
            A(this, this.axis)
        }
    }, ue.PlotLineOrBand = function(t, e) {
        this.axis = t, e && (this.options = e, this.id = e.id)
    }, ue.PlotLineOrBand.prototype = {
        render: function() {
            var t, e, i = this,
                o = i.axis,
                r = o.horiz,
                s = i.options,
                a = s.label,
                l = i.label,
                h = s.width,
                u = s.to,
                p = s.from,
                d = c(p) && c(u),
                f = s.value,
                g = s.dashStyle,
                m = i.svgElem,
                v = [],
                y = s.color,
                b = bi(s.zIndex, 0),
                x = s.events,
                w = {},
                k = o.chart.renderer,
                T = o.log2lin;
            if (o.isLog && (p = T(p), u = T(u), f = T(f)), h) v = o.getPlotLinePath(f, h), w = {
                stroke: y,
                "stroke-width": h
            }, g && (w.dashstyle = g);
            else {
                if (!d) return;
                v = o.getPlotBandPath(p, u, s), y && (w.fill = y), s.borderWidth && (w.stroke = s.borderColor, w["stroke-width"] = s.borderWidth)
            }
            if (w.zIndex = b, m) v ? (m.show(), m.animate({
                d: v
            })) : (m.hide(), l && (i.label = l = l.destroy()));
            else if (v && v.length && (i.svgElem = m = k.path(v).attr(w).add(), x)) {
                t = function(t) {
                    m.on(t, function(e) {
                        x[t].apply(i, [e])
                    })
                };
                for (e in x) t(e)
            }
            return a && c(a.text) && v && v.length && o.width > 0 && o.height > 0 && !v.flat ? (a = n({
                align: r && d && "center",
                x: r ? !d && 4 : 10,
                verticalAlign: !r && d && "middle",
                y: r ? d ? 16 : 10 : d ? 6 : -4,
                rotation: r && !d && 90
            }, a), this.renderLabel(a, v, d, b)) : l && l.hide(), i
        },
        renderLabel: function(t, e, i, n) {
            var o, r, s, a, l, c = this,
                h = c.label,
                u = c.axis.chart.renderer;
            h || (o = {
                align: t.textAlign || t.align,
                rotation: t.rotation
            }, o.zIndex = n, c.label = h = u.text(t.text, 0, 0, t.useHTML).attr(o).css(t.style).add()), r = [e[1], e[4], i ? e[6] : e[1]], s = [e[2], e[5], i ? e[7] : e[2]], a = C(r), l = C(s), h.align(t, !1, {
                x: a,
                y: l,
                width: S(r) - a,
                height: S(s) - l
            }), h.show()
        },
        destroy: function() {
            l(this.axis.plotLinesAndBands, this), delete this.axis, A(this)
        }
    }, G = {
        getPlotBandPath: function(t, e) {
            var i = this.getPlotLinePath(e, null, null, !0),
                n = this.getPlotLinePath(t, null, null, !0);
            return n && i ? (n.flat = n.toString() === i.toString(), n.push(i[4], i[5], i[1], i[2])) : n = null, n
        },
        addPlotBand: function(t) {
            return this.addPlotBandOrLine(t, "plotBands")
        },
        addPlotLine: function(t) {
            return this.addPlotBandOrLine(t, "plotLines")
        },
        addPlotBandOrLine: function(t, e) {
            var i = new ue.PlotLineOrBand(this, t).render(),
                n = this.userOptions;
            return i && (e && (n[e] = n[e] || [], n[e].push(t)), this.plotLinesAndBands.push(i)), i
        },
        removePlotBandOrLine: function(t) {
            for (var e = this.plotLinesAndBands, i = this.options, n = this.userOptions, o = e.length; o--;) e[o].id === t && e[o].destroy();
            ai([i.plotLines || [], n.plotLines || [], i.plotBands || [], n.plotBands || []], function(e) {
                for (o = e.length; o--;) e[o].id === t && l(e, e[o])
            })
        }
    };
    var Li = ue.Axis = function() {
        this.init.apply(this, arguments)
    };
    Li.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#D8D8D8",
            labels: {
                enabled: !0,
                style: {
                    color: "#606060",
                    cursor: "default",
                    fontSize: "11px"
                },
                x: 0
            },
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: .01,
            maxPadding: .01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            title: {
                align: "middle",
                style: {
                    color: "#707070"
                }
            },
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: -8
            },
            lineWidth: 0,
            maxPadding: .05,
            minPadding: .05,
            startOnTick: !0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return ue.numberFormat(this.total, -1)
                },
                style: n(wi.line.dataLabels.style, {
                    color: "#000000"
                })
            }
        },
        defaultLeftAxisOptions: {
            labels: {
                x: -15
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                x: 15
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0
            },
            title: {
                rotation: 0
            }
        },
        init: function(t, e) {
            var i = e.isX,
                n = this;
            n.chart = t, n.horiz = t.inverted ? !i : i, n.isXAxis = i, n.coll = i ? "xAxis" : "yAxis", n.opposite = e.opposite, n.side = e.side || (n.horiz ? n.opposite ? 0 : 2 : n.opposite ? 1 : 3), n.setOptions(e);
            var o = this.options,
                r = o.type,
                s = "datetime" === r;
            n.labelFormatter = o.labels.formatter || n.defaultLabelFormatter, n.userOptions = e, n.minPixelPadding = 0, n.reversed = o.reversed, n.visible = o.visible !== !1, n.zoomEnabled = o.zoomEnabled !== !1, n.categories = o.categories || "category" === r, n.names = n.names || [], n.isLog = "logarithmic" === r, n.isDatetimeAxis = s, n.isLinked = c(o.linkedTo), n.ticks = {}, n.labelEdge = [], n.minorTicks = {}, n.plotLinesAndBands = [], n.alternateBands = {}, n.len = 0, n.minRange = n.userMinRange = o.minRange || o.maxZoom, n.range = o.range, n.offset = o.offset || 0, n.stacks = {}, n.oldStacks = {}, n.stacksTouched = 0, n.max = null, n.min = null, n.crosshair = bi(o.crosshair, u(t.options.tooltip.crosshairs)[i ? 0 : 1], !1);
            var a, l = n.options.events; - 1 === si(n, t.axes) && (i && !this.isColorAxis ? t.axes.splice(t.xAxis.length, 0, n) : t.axes.push(n), t[n.coll].push(n)), n.series = n.series || [], t.inverted && i && n.reversed === z && (n.reversed = !0), n.removePlotBand = n.removePlotBandOrLine, n.removePlotLine = n.removePlotBandOrLine;
            for (a in l) ui(n, a, l[a]);
            n.isLog && (n.val2lin = n.log2lin, n.lin2val = n.lin2log)
        },
        setOptions: function(t) {
            this.options = n(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], n(W[this.coll], t))
        },
        defaultLabelFormatter: function() {
            var t, e, i = this.axis,
                n = this.value,
                o = i.categories,
                r = this.dateTimeLabelFormat,
                s = W.lang.numericSymbols,
                a = s && s.length,
                l = i.options.labels.format,
                c = i.isLog ? n : i.tickInterval;
            if (l) e = x(l, this);
            else if (o) e = n;
            else if (r) e = X(r, n);
            else if (a && c >= 1e3)
                for (; a-- && e === z;) t = Math.pow(1e3, a + 1), c >= t && 10 * n % t === 0 && null !== s[a] && (e = ue.numberFormat(n / t, -1) + s[a]);
            return e === z && (e = be(n) >= 1e4 ? ue.numberFormat(n, -1) : ue.numberFormat(n, -1, z, "")), e
        },
        getSeriesExtremes: function() {
            var t = this,
                e = t.chart;
            t.hasVisibleSeries = !1, t.dataMin = t.dataMax = t.threshold = null, t.softThreshold = !t.isXAxis, t.buildStacks && t.buildStacks(), ai(t.series, function(i) {
                if (i.visible || !e.options.chart.ignoreHiddenSeries) {
                    var n, o, r, s = i.options,
                        a = s.threshold;
                    t.hasVisibleSeries = !0, t.isLog && 0 >= a && (a = null), t.isXAxis ? (n = i.xData, n.length && (o = C(n), yi(o) || o instanceof U || (n = li(n, function(t) {
                        return yi(t)
                    }), o = C(n)), t.dataMin = ye(bi(t.dataMin, n[0]), o), t.dataMax = ve(bi(t.dataMax, n[0]), S(n)))) : (i.getExtremes(), r = i.dataMax, o = i.dataMin, c(o) && c(r) && (t.dataMin = ye(bi(t.dataMin, o), o), t.dataMax = ve(bi(t.dataMax, r), r)), c(a) && (t.threshold = a), (!s.softThreshold || t.isLog) && (t.softThreshold = !1))
                }
            })
        },
        translate: function(t, e, i, n, o, r) {
            var s, a = this.linkedParent || this,
                l = 1,
                c = 0,
                h = n ? a.oldTransA : a.transA,
                u = n ? a.oldMin : a.min,
                p = a.minPixelPadding,
                d = (a.isOrdinal || a.isBroken || a.isLog && o) && a.lin2val;
            return h || (h = a.transA), i && (l *= -1, c = a.len), a.reversed && (l *= -1, c -= l * (a.sector || a.len)), e ? (t = t * l + c, t -= p, s = t / h + u, d && (s = a.lin2val(s))) : (d && (t = a.val2lin(t)), "between" === r && (r = .5), s = l * (t - u) * h + c + l * p + (yi(r) ? h * r * a.pointRange : 0)), s
        },
        toPixels: function(t, e) {
            return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
        },
        toValue: function(t, e) {
            return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function(t, e, i, n, o) {
            var r, s, a, l, c, h = this,
                u = h.chart,
                p = h.left,
                d = h.top,
                f = i && u.oldChartHeight || u.chartHeight,
                g = i && u.oldChartWidth || u.chartWidth,
                m = h.transB,
                v = function(t, e, i) {
                    return (e > t || t > i) && (n ? t = ye(ve(e, t), i) : c = !0), t
                };
            return o = bi(o, h.translate(t, null, null, i)), r = a = fe(o + m), s = l = fe(f - o - m), yi(o) ? h.horiz ? (s = d, l = f - h.bottom, r = a = v(r, p, p + h.width)) : (r = p, a = g - h.right, s = l = v(s, d, d + h.height)) : c = !0, c && !n ? null : u.renderer.crispLine([Ke, r, s, Ze, a, l], e || 1)
        },
        getLinearTickPositions: function(t, e, i) {
            var n, o, r = E(ge(e / t) * t),
                s = E(me(i / t) * t),
                a = [];
            if (e === i && yi(e)) return [e];
            for (n = r; s >= n && (a.push(n), n = E(n + t), n !== o);) o = n;
            return a
        },
        getMinorTickPositions: function() {
            var t, e, i, n = this,
                o = n.options,
                r = n.tickPositions,
                s = n.minorTickInterval,
                a = [],
                l = n.pointRangePadding || 0,
                c = n.min - l,
                h = n.max + l,
                u = h - c;
            if (u && u / s < n.len / 3)
                if (n.isLog)
                    for (i = r.length, e = 1; i > e; e++) a = a.concat(n.getLogTickPositions(s, r[e - 1], r[e], !0));
                else if (n.isDatetimeAxis && "auto" === o.minorTickInterval) a = a.concat(n.getTimeTicks(n.normalizeTimeTickInterval(s), c, h, o.startOfWeek));
            else
                for (t = c + (r[0] - c) % s; h >= t; t += s) a.push(t);
            return 0 !== a.length && n.trimTicks(a, o.startOnTick, o.endOnTick), a
        },
        adjustForMinRange: function() {
            var t, e, i, n, o, r, s, a, l, h = this,
                u = h.options,
                p = h.min,
                d = h.max,
                f = h.dataMax - h.dataMin >= h.minRange;
            h.isXAxis && h.minRange === z && !h.isLog && (c(u.min) || c(u.max) ? h.minRange = null : (ai(h.series, function(t) {
                for (o = t.xData, r = t.xIncrement ? 1 : o.length - 1, i = r; i > 0; i--) n = o[i] - o[i - 1], (e === z || e > n) && (e = n)
            }), h.minRange = ye(5 * e, h.dataMax - h.dataMin))), d - p < h.minRange && (l = h.minRange, t = (l - d + p) / 2, s = [p - t, bi(u.min, p - t)], f && (s[2] = h.dataMin), p = S(s), a = [p + l, bi(u.max, p + l)], f && (a[2] = h.dataMax), d = C(a), l > d - p && (s[0] = d - l, s[1] = bi(u.min, d - l), p = S(s))), h.min = p, h.max = d
        },
        getClosest: function() {
            var t;
            return ai(this.series, function(e) {
                var i = e.closestPointRange;
                !e.noSharedTooltip && c(i) && (t = c(t) ? ye(t, i) : i)
            }), t
        },
        setAxisTranslation: function(t) {
            var e, i, n = this,
                o = n.max - n.min,
                s = n.axisPointRange || 0,
                a = 0,
                l = 0,
                c = n.linkedParent,
                h = !!n.categories,
                u = n.transA,
                p = n.isXAxis;
            (p || h || s) && (c ? (a = c.minPointOffset, l = c.pointRangePadding) : (e = n.getClosest(), ai(n.series, function(t) {
                var i = h ? 1 : p ? bi(t.options.pointRange, e, 0) : n.axisPointRange || 0,
                    o = t.options.pointPlacement;
                s = ve(s, i), n.single || (a = ve(a, r(o) ? 0 : i / 2), l = ve(l, "on" === o ? 0 : i))
            })), i = n.ordinalSlope && e ? n.ordinalSlope / e : 1, n.minPointOffset = a *= i, n.pointRangePadding = l *= i, n.pointRange = ye(s, o), p && (n.closestPointRange = e)), t && (n.oldTransA = u), n.translationSlope = n.transA = u = n.len / (o + l || 1), n.transB = n.horiz ? n.left : n.bottom, n.minPixelPadding = u * a
        },
        minFromRange: function() {
            return this.max - this.range
        },
        setTickInterval: function(t) {
            var i, n, o, r, s, a, l, h = this,
                u = h.chart,
                p = h.options,
                d = h.isLog,
                f = h.log2lin,
                g = h.isDatetimeAxis,
                m = h.isXAxis,
                v = h.isLinked,
                y = p.maxPadding,
                b = p.minPadding,
                x = p.tickInterval,
                T = p.tickPixelInterval,
                C = h.categories,
                S = h.threshold,
                A = h.softThreshold;
            g || C || v || this.getTickAmount(), a = bi(h.userMin, p.min), l = bi(h.userMax, p.max), v ? (h.linkedParent = u[h.coll][p.linkedTo], n = h.linkedParent.getExtremes(), h.min = bi(n.min, n.dataMin), h.max = bi(n.max, n.dataMax), p.type !== h.linkedParent.options.type && e(11, 1)) : (!A && c(S) && (h.dataMin >= S ? (r = S, b = 0) : h.dataMax <= S && (s = S, y = 0)), h.min = bi(a, r, h.dataMin), h.max = bi(l, s, h.dataMax)), d && (!t && ye(h.min, bi(h.dataMin, h.min)) <= 0 && e(10, 1), h.min = E(f(h.min), 15), h.max = E(f(h.max), 15)), h.range && c(h.max) && (h.userMin = h.min = a = ve(h.min, h.minFromRange()), h.userMax = l = h.max, h.range = null), di(h, "foundExtremes"), h.beforePadding && h.beforePadding(), h.adjustForMinRange(), C || h.axisPointRange || h.usePercentage || v || !c(h.min) || !c(h.max) || (i = h.max - h.min, i && (!c(a) && b && (h.min -= i * b), !c(l) && y && (h.max += i * y))), yi(p.floor) && (h.min = ve(h.min, p.floor)), yi(p.ceiling) && (h.max = ye(h.max, p.ceiling)), A && c(h.dataMin) && (S = S || 0, !c(a) && h.min < S && h.dataMin >= S ? h.min = S : !c(l) && h.max > S && h.dataMax <= S && (h.max = S)), h.tickInterval = h.min === h.max || void 0 === h.min || void 0 === h.max ? 1 : v && !x && T === h.linkedParent.options.tickPixelInterval ? x = h.linkedParent.tickInterval : bi(x, this.tickAmount ? (h.max - h.min) / ve(this.tickAmount - 1, 1) : void 0, C ? 1 : (h.max - h.min) * T / ve(h.len, T)), m && !t && ai(h.series, function(t) {
                t.processData(h.min !== h.oldMin || h.max !== h.oldMax)
            }), h.setAxisTranslation(!0), h.beforeSetTickPositions && h.beforeSetTickPositions(), h.postProcessTickInterval && (h.tickInterval = h.postProcessTickInterval(h.tickInterval)), h.pointRange && !x && (h.tickInterval = ve(h.pointRange, h.tickInterval)), o = bi(p.minTickInterval, h.isDatetimeAxis && h.closestPointRange), !x && h.tickInterval < o && (h.tickInterval = o), g || d || x || (h.tickInterval = k(h.tickInterval, null, w(h.tickInterval), bi(p.allowDecimals, !(h.tickInterval > .5 && h.tickInterval < 5 && h.max > 1e3 && h.max < 9999)), !!this.tickAmount)), !this.tickAmount && this.len && (h.tickInterval = h.unsquish()), this.setTickPositions()
        },
        setTickPositions: function() {
            var t, e, i = this.options,
                n = i.tickPositions,
                o = i.tickPositioner,
                r = i.startOnTick,
                s = i.endOnTick;
            this.tickmarkOffset = this.categories && "between" === i.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.minorTickInterval = "auto" === i.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : i.minorTickInterval, this.tickPositions = t = n && n.slice(), t || (t = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, i.units), this.min, this.max, i.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), t.length > this.len && (t = [t[0], t.pop()]), this.tickPositions = t, o && (o = o.apply(this, [this.min, this.max]), o && (this.tickPositions = t = o))), this.isLinked || (this.trimTicks(t, r, s), this.min === this.max && c(this.min) && !this.tickAmount && (e = !0, this.min -= .5, this.max += .5), this.single = e, n || o || this.adjustTickAmount())
        },
        trimTicks: function(t, e, i) {
            var n = t[0],
                o = t[t.length - 1],
                r = this.minPointOffset || 0;
            if (e) this.min = n;
            else
                for (; this.min - r > t[0];) t.shift();
            if (i) this.max = o;
            else
                for (; this.max + r < t[t.length - 1];) t.pop();
            0 === t.length && c(n) && t.push((o + n) / 2)
        },
        alignToOthers: function() {
            var t, e = {},
                i = this.options;
            return this.chart.options.chart.alignTicks !== !1 && i.alignTicks !== !1 && ai(this.chart[this.coll], function(i) {
                var n = i.options,
                    o = i.horiz,
                    r = [o ? n.left : n.top, n.width, n.height, n.pane].join(",");
                i.series.length && (e[r] ? t = !0 : e[r] = 1)
            }), t
        },
        getTickAmount: function() {
            var t = this.options,
                e = t.tickAmount,
                i = t.tickPixelInterval;
            !c(t.tickInterval) && this.len < i && !this.isRadial && !this.isLog && t.startOnTick && t.endOnTick && (e = 2), !e && this.alignToOthers() && (e = me(this.len / i) + 1), 4 > e && (this.finalTickAmt = e, e = 5), this.tickAmount = e
        },
        adjustTickAmount: function() {
            var t, e, i = this.tickInterval,
                n = this.tickPositions,
                o = this.tickAmount,
                r = this.finalTickAmt,
                s = n && n.length;
            if (o > s) {
                for (; n.length < o;) n.push(E(n[n.length - 1] + i));
                this.transA *= (s - 1) / (o - 1), this.max = n[n.length - 1]
            } else s > o && (this.tickInterval *= 2, this.setTickPositions());
            if (c(r)) {
                for (t = e = n.length; t--;)(3 === r && t % 2 === 1 || 2 >= r && t > 0 && e - 1 > t) && n.splice(t, 1);
                this.finalTickAmt = z
            }
        },
        setScale: function() {
            var t, e, i = this;
            i.oldMin = i.min, i.oldMax = i.max, i.oldAxisLength = i.len, i.setAxisSize(), e = i.len !== i.oldAxisLength, ai(i.series, function(e) {
                (e.isDirtyData || e.isDirty || e.xAxis.isDirty) && (t = !0)
            }), e || t || i.isLinked || i.forceRedraw || i.userMin !== i.oldUserMin || i.userMax !== i.oldUserMax || i.alignToOthers() ? (i.resetStacks && i.resetStacks(), i.forceRedraw = !1, i.getSeriesExtremes(), i.setTickInterval(), i.oldUserMin = i.userMin, i.oldUserMax = i.userMax, i.isDirty || (i.isDirty = e || i.min !== i.oldMin || i.max !== i.oldMax)) : i.cleanStacks && i.cleanStacks()
        },
        setExtremes: function(t, e, i, n, o) {
            var r = this,
                s = r.chart;
            i = bi(i, !0), ai(r.series, function(t) {
                delete t.kdTree
            }), o = vi(o, {
                min: t,
                max: e
            }), di(r, "setExtremes", o, function() {
                r.userMin = t, r.userMax = e, r.eventArgs = o, i && s.redraw(n)
            })
        },
        zoom: function(t, e) {
            var i = this.dataMin,
                n = this.dataMax,
                o = this.options,
                r = ye(i, bi(o.min, i)),
                s = ve(n, bi(o.max, n));
            return this.allowZoomOutside || (c(i) && r >= t && (t = r), c(n) && e >= s && (e = s)), this.displayBtn = t !== z || e !== z, this.setExtremes(t, e, !1, z, {
                trigger: "zoom"
            }), !0
        },
        setAxisSize: function() {
            var t = this.chart,
                e = this.options,
                i = e.offsetLeft || 0,
                n = e.offsetRight || 0,
                o = this.horiz,
                r = bi(e.width, t.plotWidth - i + n),
                s = bi(e.height, t.plotHeight),
                a = bi(e.top, t.plotTop),
                l = bi(e.left, t.plotLeft + i),
                c = /%$/;
            c.test(s) && (s = Math.round(parseFloat(s) / 100 * t.plotHeight)), c.test(a) && (a = Math.round(parseFloat(a) / 100 * t.plotHeight + t.plotTop)), this.left = l, this.top = a, this.width = r, this.height = s, this.bottom = t.chartHeight - s - a, this.right = t.chartWidth - r - l, this.len = ve(o ? r : s, 0), this.pos = o ? l : a
        },
        getExtremes: function() {
            var t = this,
                e = t.isLog,
                i = t.lin2log;
            return {
                min: e ? E(i(t.min)) : t.min,
                max: e ? E(i(t.max)) : t.max,
                dataMin: t.dataMin,
                dataMax: t.dataMax,
                userMin: t.userMin,
                userMax: t.userMax
            }
        },
        getThreshold: function(t) {
            var e = this,
                i = e.isLog,
                n = e.lin2log,
                o = i ? n(e.min) : e.min,
                r = i ? n(e.max) : e.max;
            return null === t ? t = 0 > r ? r : o : o > t ? t = o : t > r && (t = r), e.translate(t, 0, 1, 0, 1)
        },
        autoLabelAlign: function(t) {
            var e, i = (bi(t, 0) - 90 * this.side + 720) % 360;
            return e = i > 15 && 165 > i ? "right" : i > 195 && 345 > i ? "left" : "center"
        },
        tickSize: function(t) {
            var e = this.options,
                i = e[t + "Length"],
                n = bi(e[t + "Width"], "tick" === t && this.isXAxis ? 1 : 0);
            return n && i ? ("inside" === e[t + "Position"] && (i = -i), [i, n]) : void 0
        },
        labelMetrics: function() {
            return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[0] && this.ticks[0].label)
        },
        unsquish: function() {
            var t, e, i, n = this.options.labels,
                o = this.horiz,
                r = this.tickInterval,
                s = r,
                a = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / r),
                l = n.rotation,
                h = this.labelMetrics(),
                u = Number.MAX_VALUE,
                p = function(t) {
                    var e = t / (a || 1);
                    return e = e > 1 ? me(e) : 1, e * r
                };
            return o ? (i = !n.staggerLines && !n.step && (c(l) ? [l] : a < bi(n.autoRotationLimit, 80) && n.autoRotation), i && ai(i, function(i) {
                var n;
                (i === l || i && i >= -90 && 90 >= i) && (e = p(be(h.h / we(Te * i))), n = e + be(i / 360), u > n && (u = n, t = i, s = e))
            })) : n.step || (s = p(h.h)), this.autoRotation = i, this.labelRotation = bi(t, l), s
        },
        getSlotWidth: function() {
            var t = this.chart,
                e = this.horiz,
                i = this.options.labels,
                n = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                o = t.margin[3];
            return e && (i.step || 0) < 2 && !i.rotation && (this.staggerLines || 1) * t.plotWidth / n || !e && (o && o - t.spacing[3] || .33 * t.chartWidth)
        },
        renderUnsquish: function() {
            var t, e, i, o, s = this.chart,
                a = s.renderer,
                l = this.tickPositions,
                c = this.ticks,
                h = this.options.labels,
                u = this.horiz,
                p = this.getSlotWidth(),
                d = ve(1, fe(p - 2 * (h.padding || 5))),
                f = {},
                g = this.labelMetrics(),
                m = h.style.textOverflow,
                v = 0;
            if (r(h.rotation) || (f.rotation = h.rotation || 0), this.autoRotation) ai(l, function(t) {
                t = c[t], t && t.labelLength > v && (v = t.labelLength)
            }), v > d && v > g.h ? f.rotation = this.labelRotation : this.labelRotation = 0;
            else if (p && (t = {
                    width: d + Ue
                }, !m))
                for (t.textOverflow = "clip", i = l.length; !u && i--;) o = l[i], e = c[o].label, e && ("ellipsis" === e.styles.textOverflow ? e.css({
                    textOverflow: "clip"
                }) : c[o].labelLength > p && e.css({
                    width: p + "px"
                }), e.getBBox().height > this.len / l.length - (g.h - g.f) && (e.specCss = {
                    textOverflow: "ellipsis"
                }));
            f.rotation && (t = {
                width: (v > .5 * s.chartHeight ? .33 * s.chartHeight : s.chartHeight) + Ue
            }, m || (t.textOverflow = "ellipsis")), this.labelAlign = h.align || this.autoLabelAlign(this.labelRotation), this.labelAlign && (f.align = this.labelAlign), ai(l, function(e) {
                var i = c[e],
                    o = i && i.label;
                o && (o.attr(f), t && o.css(n(t, o.specCss)), delete o.specCss, i.rotation = f.rotation)
            }), this.tickRotCorr = a.rotCorr(g.b, this.labelRotation || 0, 0 !== this.side)
        },
        hasData: function() {
            return this.hasVisibleSeries || c(this.min) && c(this.max) && !!this.tickPositions
        },
        getOffset: function() {
            var t, e, i, n, o, r, s, a, l = this,
                h = l.chart,
                u = h.renderer,
                p = l.options,
                d = l.tickPositions,
                f = l.ticks,
                g = l.horiz,
                m = l.side,
                v = h.inverted ? [1, 0, 3, 2][m] : m,
                y = 0,
                b = 0,
                x = p.title,
                w = p.labels,
                k = 0,
                T = l.opposite,
                C = h.axisOffset,
                S = h.clipOffset,
                A = [-1, 1, 1, -1][m],
                P = l.axisParent,
                E = this.tickSize("tick");
            if (t = l.hasData(), l.showAxis = e = t || bi(p.showEmpty, !0), l.staggerLines = l.horiz && w.staggerLines, l.axisGroup || (l.gridGroup = u.g("grid").attr({
                    zIndex: p.gridZIndex || 1
                }).add(P), l.axisGroup = u.g("axis").attr({
                    zIndex: p.zIndex || 2
                }).add(P), l.labelGroup = u.g("axis-labels").attr({
                    zIndex: w.zIndex || 7
                }).addClass(Ye + l.coll.toLowerCase() + "-labels").add(P)), t || l.isLinked) ai(d, function(t) {
                f[t] ? f[t].addLabel() : f[t] = new j(l, t)
            }), l.renderUnsquish(), w.reserveSpace === !1 || 0 !== m && 2 !== m && {
                1: "left",
                3: "right"
            }[m] !== l.labelAlign && "center" !== l.labelAlign || ai(d, function(t) {
                k = ve(f[t].getLabelSize(), k)
            }), l.staggerLines && (k *= l.staggerLines, l.labelOffset = k * (l.opposite ? -1 : 1));
            else
                for (r in f) f[r].destroy(), delete f[r];
            x && x.text && x.enabled !== !1 && (l.axisTitle || (s = x.textAlign, s || (s = (g ? {
                low: "left",
                middle: "center",
                high: "right"
            } : {
                low: T ? "right" : "left",
                middle: "center",
                high: T ? "left" : "right"
            })[x.align]), l.axisTitle = u.text(x.text, 0, 0, x.useHTML).attr({
                zIndex: 7,
                rotation: x.rotation || 0,
                align: s
            }).addClass(Ye + this.coll.toLowerCase() + "-title").css(x.style).add(l.axisGroup), l.axisTitle.isNew = !0), e && (y = l.axisTitle.getBBox()[g ? "height" : "width"], i = x.offset, b = c(i) ? 0 : bi(x.margin, g ? 5 : 10)), l.axisTitle[e ? "show" : "hide"](!0)), l.offset = A * bi(p.offset, C[m]), l.tickRotCorr = l.tickRotCorr || {
                x: 0,
                y: 0
            }, a = 0 === m ? -l.labelMetrics().h : 2 === m ? l.tickRotCorr.y : 0, n = Math.abs(k) + b, k && (n -= a, n += A * (g ? bi(w.y, l.tickRotCorr.y + 8 * A) : w.x)), l.axisTitleMargin = bi(i, n), C[m] = ve(C[m], l.axisTitleMargin + y + A * l.offset, n, t && d.length && E ? E[0] : 0), o = p.offset ? 0 : 2 * ge(p.lineWidth / 2), S[v] = ve(S[v], o)
        },
        getLinePath: function(t) {
            var e = this.chart,
                i = this.opposite,
                n = this.offset,
                o = this.horiz,
                r = this.left + (i ? this.width : 0) + n,
                s = e.chartHeight - this.bottom - (i ? this.height : 0) + n;
            return i && (t *= -1), e.renderer.crispLine([Ke, o ? this.left : r, o ? s : this.top, Ze, o ? e.chartWidth - this.right : r, o ? s : e.chartHeight - this.bottom], t)
        },
        getTitlePosition: function() {
            var t = this.horiz,
                e = this.left,
                i = this.top,
                n = this.len,
                r = this.options.title,
                s = t ? e : i,
                a = this.opposite,
                l = this.offset,
                c = r.x || 0,
                h = r.y || 0,
                u = o(r.style.fontSize || 12),
                p = {
                    low: s + (t ? 0 : n),
                    middle: s + n / 2,
                    high: s + (t ? n : 0)
                }[r.align],
                d = (t ? i + this.height : e) + (t ? 1 : -1) * (a ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? u : 0);
            return {
                x: t ? p + c : d + (a ? this.width : 0) + l + c,
                y: t ? d + h - (a ? this.height : 0) + l : p + h
            }
        },
        render: function() {
            var t, e, i, n = this,
                o = n.chart,
                r = o.renderer,
                s = n.options,
                a = n.isLog,
                l = n.lin2log,
                c = n.isLinked,
                h = n.tickPositions,
                u = n.axisTitle,
                d = n.ticks,
                f = n.minorTicks,
                g = n.alternateBands,
                m = s.stackLabels,
                v = s.alternateGridColor,
                y = n.tickmarkOffset,
                b = s.lineWidth,
                x = o.hasRendered,
                w = x && yi(n.oldMin),
                k = n.showAxis,
                T = D(r.globalAnimation);
            n.labelEdge.length = 0, n.overlap = !1, ai([d, f, g], function(t) {
                var e;
                for (e in t) t[e].isActive = !1
            }), (n.hasData() || c) && (n.minorTickInterval && !n.categories && ai(n.getMinorTickPositions(), function(t) {
                f[t] || (f[t] = new j(n, t, "minor")), w && f[t].isNew && f[t].render(null, !0), f[t].render(null, !1, 1)
            }), h.length && (ai(h, function(t, e) {
                (!c || t >= n.min && t <= n.max) && (d[t] || (d[t] = new j(n, t)), w && d[t].isNew && d[t].render(e, !0, .1), d[t].render(e))
            }), y && (0 === n.min || n.single) && (d[-1] || (d[-1] = new j(n, -1, null, !0)), d[-1].render(-1))), v && ai(h, function(t, r) {
                i = h[r + 1] !== z ? h[r + 1] + y : n.max - y, r % 2 === 0 && t < n.max && i <= n.max + (o.polar ? -y : y) && (g[t] || (g[t] = new ue.PlotLineOrBand(n)), e = t + y, g[t].options = {
                    from: a ? l(e) : e,
                    to: a ? l(i) : i,
                    color: v
                }, g[t].render(), g[t].isActive = !0)
            }), n._addedPlotLB || (ai((s.plotLines || []).concat(s.plotBands || []), function(t) {
                n.addPlotBandOrLine(t)
            }), n._addedPlotLB = !0)), ai([d, f, g], function(t) {
                var e, i, n = [],
                    r = T.duration,
                    s = function() {
                        for (i = n.length; i--;) t[n[i]] && !t[n[i]].isActive && (t[n[i]].destroy(), delete t[n[i]])
                    };
                for (e in t) t[e].isActive || (t[e].render(e, !1, 0), t[e].isActive = !1, n.push(e));
                p(s, t !== g && o.hasRendered && r ? r : 0)
            }), b && (t = n.getLinePath(b), n.axisLine ? n.axisLine.animate({
                d: t
            }) : n.axisLine = r.path(t).attr({
                stroke: s.lineColor,
                "stroke-width": b,
                zIndex: 7
            }).add(n.axisGroup), n.axisLine[k ? "show" : "hide"](!0)), u && k && (u[u.isNew ? "attr" : "animate"](n.getTitlePosition()), u.isNew = !1), m && m.enabled && n.renderStackTotals(), n.isDirty = !1
        },
        redraw: function() {
            this.visible && (this.render(), ai(this.plotLinesAndBands, function(t) {
                t.render()
            })), ai(this.series, function(t) {
                t.isDirty = !0
            })
        },
        destroy: function(t) {
            var e, i, n = this,
                o = n.stacks,
                r = n.plotLinesAndBands;
            t || pi(n);
            for (e in o) A(o[e]), o[e] = null;
            for (ai([n.ticks, n.minorTicks, n.alternateBands], function(t) {
                    A(t)
                }), i = r.length; i--;) r[i].destroy();
            ai(["stackTotalGroup", "axisLine", "axisTitle", "axisGroup", "cross", "gridGroup", "labelGroup"], function(t) {
                n[t] && (n[t] = n[t].destroy())
            }), this.cross && this.cross.destroy()
        },
        drawCrosshair: function(t, e) {
            var i, n, o, r, s, a = this.crosshair;
            if (this.crosshair && (c(e) || !bi(a.snap, !0)) !== !1) {
                if (bi(a.snap, !0) ? c(e) && (n = this.isXAxis ? e.plotX : this.len - e.plotY) : n = this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos, i = this.isRadial ? this.getPlotLinePath(this.isXAxis ? e.x : bi(e.stackY, e.y)) || null : this.getPlotLinePath(null, null, null, null, n) || null, null === i) return void this.hideCrosshair();
                r = this.categories && !this.isRadial, s = bi(a.width, r ? this.transA : 1), this.cross ? this.cross.attr({
                    d: i,
                    visibility: "visible",
                    "stroke-width": s
                }) : (o = {
                    "pointer-events": "none",
                    "stroke-width": s,
                    stroke: a.color || (r ? "rgba(155,200,255,0.2)" : "#C0C0C0"),
                    zIndex: bi(a.zIndex, 2)
                }, a.dashStyle && (o.dashstyle = a.dashStyle), this.cross = this.chart.renderer.path(i).attr(o).add())
            } else this.hideCrosshair()
        },
        hideCrosshair: function() {
            this.cross && this.cross.hide()
        }
    }, vi(Li.prototype, G), Li.prototype.getTimeTicks = function(t, e, i, n) {
        var o, r, s = [],
            a = {},
            l = W.global.useUTC,
            h = new U(e - y(e)),
            u = t.unitRange,
            p = t.count;
        if (c(e)) {
            h[oe](u >= Y.second ? 0 : p * ge(h.getMilliseconds() / p)), u >= Y.second && h[re](u >= Y.minute ? 0 : p * ge(h.getSeconds() / p)), u >= Y.minute && h[se](u >= Y.hour ? 0 : p * ge(h[Q]() / p)), u >= Y.hour && h[ae](u >= Y.day ? 0 : p * ge(h[J]() / p)), u >= Y.day && h[le](u >= Y.month ? 1 : p * ge(h[ee]() / p)), u >= Y.month && (h[ce](u >= Y.year ? 0 : p * ge(h[ie]() / p)), r = h[ne]()), u >= Y.year && (r -= r % p, h[he](r)), u === Y.week && h[le](h[ee]() - h[te]() + bi(n, 1)), o = 1, (K || Z) && (h = h.getTime(), h = new U(h + y(h))), r = h[ne]();
            for (var d = h.getTime(), f = h[ie](), g = h[ee](), m = !l || !!Z, v = (Y.day + (l ? y(h) : 60 * h.getTimezoneOffset() * 1e3)) % Y.day; i > d;) s.push(d), u === Y.year ? d = V(r + o * p, 0) : u === Y.month ? d = V(r, f + o * p) : !m || u !== Y.day && u !== Y.week ? d += u * p : d = V(r, f, g + o * p * (u === Y.day ? 1 : 7)), o++;
            s.push(d), ai(li(s, function(t) {
                return u <= Y.hour && t % Y.day === v
            }), function(t) {
                a[t] = "day"
            })
        }
        return s.info = vi(t, {
            higherRanks: a,
            totalRange: u * p
        }), s
    }, Li.prototype.normalizeTimeTickInterval = function(t, e) {
        var i, n, o = e || [
                ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                ["second", [1, 2, 5, 10, 15, 30]],
                ["minute", [1, 2, 5, 10, 15, 30]],
                ["hour", [1, 2, 3, 4, 6, 8, 12]],
                ["day", [1, 2]],
                ["week", [1, 2]],
                ["month", [1, 2, 3, 4, 6]],
                ["year", null]
            ],
            r = o[o.length - 1],
            s = Y[r[0]],
            a = r[1];
        for (n = 0; n < o.length; n++)
            if (r = o[n], s = Y[r[0]], a = r[1], o[n + 1]) {
                var l = (s * a[a.length - 1] + Y[o[n + 1][0]]) / 2;
                if (l >= t) break
            }
        return s === Y.year && 5 * s > t && (a = [1, 2, 5]), i = k(t / s, a, "year" === r[0] ? ve(w(t / s), 1) : 1), {
            unitRange: s,
            count: i,
            unitName: r[0]
        }
    }, Li.prototype.getLogTickPositions = function(t, e, i, n) {
        var o = this,
            r = o.options,
            s = o.len,
            a = o.lin2log,
            l = o.log2lin,
            c = [];
        if (n || (o._minorAutoInterval = null), t >= .5) t = fe(t), c = o.getLinearTickPositions(t, e, i);
        else if (t >= .08) {
            var h, u, p, d, f, g, m, v = ge(e);
            for (h = t > .3 ? [1, 2, 4] : t > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], u = v; i + 1 > u && !m; u++)
                for (d = h.length, p = 0; d > p && !m; p++) f = l(a(u) * h[p]), f > e && (!n || i >= g) && g !== z && c.push(g), g > i && (m = !0), g = f
        } else {
            var y = a(e),
                b = a(i),
                x = r[n ? "minorTickInterval" : "tickInterval"],
                T = "auto" === x ? null : x,
                C = r.tickPixelInterval / (n ? 5 : 1),
                S = n ? s / o.tickPositions.length : s;
            t = bi(T, o._minorAutoInterval, (b - y) * C / (S || 1)), t = k(t, null, w(t)), c = hi(o.getLinearTickPositions(t, y, b), l), n || (o._minorAutoInterval = t / 5)
        }
        return n || (o.tickInterval = t), c
    }, Li.prototype.log2lin = function(t) {
        return de.log(t) / de.LN10
    }, Li.prototype.lin2log = function(t) {
        return de.pow(10, t)
    };
    var Di = ue.Tooltip = function() {
        this.init.apply(this, arguments)
    };
    Di.prototype = {
        init: function(t, e) {
            var i = e.borderWidth,
                n = e.style,
                r = o(n.padding);
            this.chart = t, this.options = e, this.crosshairs = [], this.now = {
                x: 0,
                y: 0
            }, this.isHidden = !0, this.label = t.renderer.label("", 0, 0, e.shape || "callout", null, null, e.useHTML, null, "tooltip").attr({
                padding: r,
                fill: e.backgroundColor,
                "stroke-width": i,
                r: e.borderRadius,
                zIndex: 8
            }).css(n).css({
                padding: 0
            }).add().attr({
                y: -9999
            }), Ne || this.label.shadow(e.shadow), this.shared = e.shared
        },
        destroy: function() {
            this.label && (this.label = this.label.destroy()), clearTimeout(this.hideTimer), clearTimeout(this.tooltipTimeout)
        },
        move: function(t, e, i, n) {
            var o = this,
                r = o.now,
                s = o.options.animation !== !1 && !o.isHidden && (be(t - r.x) > 1 || be(e - r.y) > 1),
                a = o.followPointer || o.len > 1;
            vi(r, {
                x: s ? (2 * r.x + t) / 3 : t,
                y: s ? (r.y + e) / 2 : e,
                anchorX: a ? z : s ? (2 * r.anchorX + i) / 3 : i,
                anchorY: a ? z : s ? (r.anchorY + n) / 2 : n
            }), o.label.attr(r), s && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                o && o.move(t, e, i, n)
            }, 32))
        },
        hide: function(t) {
            var e = this;
            clearTimeout(this.hideTimer), t = bi(t, this.options.hideDelay, 500), this.isHidden || (this.hideTimer = p(function() {
                e.label[t ? "fadeOut" : "hide"](), e.isHidden = !0
            }, t))
        },
        getAnchor: function(t, e) {
            var i, n, o, r = this.chart,
                s = r.inverted,
                a = r.plotTop,
                l = r.plotLeft,
                c = 0,
                h = 0;
            return t = u(t), i = t[0].tooltipPos, this.followPointer && e && (e.chartX === z && (e = r.pointer.normalize(e)), i = [e.chartX - r.plotLeft, e.chartY - a]), i || (ai(t, function(t) {
                n = t.series.yAxis, o = t.series.xAxis, c += t.plotX + (!s && o ? o.left - l : 0), h += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!s && n ? n.top - a : 0)
            }), c /= t.length, h /= t.length, i = [s ? r.plotWidth - h : c, this.shared && !s && t.length > 1 && e ? e.chartY - a : s ? r.plotHeight - c : h]), hi(i, fe)
        },
        getPosition: function(t, e, i) {
            var n, o = this.chart,
                r = this.distance,
                s = {},
                a = i.h || 0,
                l = ["y", o.chartHeight, e, i.plotY + o.plotTop, o.plotTop, o.plotTop + o.plotHeight],
                c = ["x", o.chartWidth, t, i.plotX + o.plotLeft, o.plotLeft, o.plotLeft + o.plotWidth],
                h = !this.followPointer && bi(i.ttBelow, !o.inverted == !!i.negative),
                u = function(t, e, i, n, o, l) {
                    var c = n - r > i,
                        u = e > n + r + i,
                        p = n - r - i,
                        d = n + r;
                    if (h && u) s[t] = d;
                    else if (!h && c) s[t] = p;
                    else if (c) s[t] = ye(l - i, 0 > p - a ? p : p - a);
                    else {
                        if (!u) return !1;
                        s[t] = ve(o, d + a + i > e ? d : d + a)
                    }
                },
                p = function(t, e, i, n) {
                    var o;
                    return r > n || n > e - r ? o = !1 : s[t] = i / 2 > n ? 1 : n > e - i / 2 ? e - i - 2 : n - i / 2, o
                },
                d = function(t) {
                    var e = l;
                    l = c, c = e, n = t
                },
                f = function() {
                    u.apply(0, l) !== !1 ? p.apply(0, c) !== !1 || n || (d(!0), f()) : n ? s.x = s.y = 0 : (d(!0), f())
                };
            return (o.inverted || this.len > 1) && d(), f(), s
        },
        defaultFormatter: function(t) {
            var e, i = this.points || u(this);
            return e = [t.tooltipFooterHeaderFormatter(i[0])], e = e.concat(t.bodyFormatter(i)), e.push(t.tooltipFooterHeaderFormatter(i[0], !0)), e.join("")
        },
        refresh: function(t, e) {
            var i, n, o, r, s, a, l = this,
                c = l.chart,
                h = l.label,
                p = l.options,
                d = {},
                f = [],
                g = p.formatter || l.defaultFormatter,
                m = c.hoverPoints,
                v = l.shared;
            clearTimeout(this.hideTimer), l.followPointer = u(t)[0].series.tooltipOptions.followPointer, o = l.getAnchor(t, e), i = o[0], n = o[1], !v || t.series && t.series.noSharedTooltip ? d = t.getLabelConfig() : (c.hoverPoints = t, m && ai(m, function(t) {
                t.setState()
            }), ai(t, function(t) {
                t.setState(ti), f.push(t.getLabelConfig())
            }), d = {
                x: t[0].category,
                y: t[0].y
            }, d.points = f, this.len = f.length, t = t[0]), r = g.call(d, l), a = t.series, this.distance = bi(a.tooltipOptions.distance, 16), r === !1 ? this.hide() : (l.isHidden && (gi(h), h.attr("opacity", 1).show()), h.attr({
                text: r
            }), s = p.borderColor || t.color || a.color || "#606060", h.attr({
                stroke: s
            }), l.updatePosition({
                plotX: i,
                plotY: n,
                negative: t.negative,
                ttBelow: t.ttBelow,
                h: o[2] || 0
            }), this.isHidden = !1), di(c, "tooltipRefresh", {
                text: r,
                x: i + c.plotLeft,
                y: n + c.plotTop,
                borderColor: s
            })
        },
        updatePosition: function(t) {
            var e = this.chart,
                i = this.label,
                n = (this.options.positioner || this.getPosition).call(this, i.width, i.height, t);
            this.move(fe(n.x), fe(n.y || 0), t.plotX + e.plotLeft, t.plotY + e.plotTop)
        },
        getXDateFormat: function(t, e, i) {
            var n, o, r, s = e.dateTimeLabelFormats,
                a = i && i.closestPointRange,
                l = "01-01 00:00:00.000",
                c = {
                    millisecond: 15,
                    second: 12,
                    minute: 9,
                    hour: 6,
                    day: 3
                },
                h = "millisecond";
            if (a) {
                r = X("%m-%d %H:%M:%S.%L", t.x);
                for (o in Y) {
                    if (a === Y.week && +X("%w", t.x) === i.options.startOfWeek && r.substr(6) === l.substr(6)) {
                        o = "week";
                        break
                    }
                    if (Y[o] > a) {
                        o = h;
                        break
                    }
                    if (c[o] && r.substr(c[o]) !== l.substr(c[o])) break;
                    "week" !== o && (h = o)
                }
                o && (n = s[o])
            } else n = s.day;
            return n || s.year
        },
        tooltipFooterHeaderFormatter: function(t, e) {
            var i = e ? "footer" : "header",
                n = t.series,
                o = n.tooltipOptions,
                r = o.xDateFormat,
                s = n.xAxis,
                a = s && "datetime" === s.options.type && yi(t.key),
                l = o[i + "Format"];
            return a && !r && (r = this.getXDateFormat(t, o, s)), a && r && (l = l.replace("{point.key}", "{point.key:" + r + "}")), x(l, {
                point: t,
                series: n
            })
        },
        bodyFormatter: function(t) {
            return hi(t, function(t) {
                var e = t.series.tooltipOptions;
                return (e.pointFormatter || t.point.tooltipFormatter).call(t.point, e.pointFormat)
            })
        }
    };
    var Oi;
    F = pe && pe.documentElement.ontouchstart !== z;
    var _i = ue.Pointer = function(t, e) {
        this.init(t, e)
    };
    if (_i.prototype = {
            init: function(t, e) {
                var i, n, o = e.chart,
                    r = o.events,
                    s = Ne ? "" : o.zoomType,
                    a = t.inverted;
                this.options = e, this.chart = t, this.zoomX = i = /x/.test(s), this.zoomY = n = /y/.test(s), this.zoomHor = i && !a || n && a, this.zoomVert = n && !a || i && a, this.hasZoom = i || n, this.runChartClick = r && !!r.click, this.pinchDown = [], this.lastValidTouch = {}, ue.Tooltip && e.tooltip.enabled && (t.tooltip = new Di(t, e.tooltip), this.followTouchMove = bi(e.tooltip.followTouchMove, !0)), this.setDOMEvents()
            },
            normalize: function(e, i) {
                var n, o, r;
                return e = e || t.event, e.target || (e.target = e.srcElement), r = e.touches ? e.touches.length ? e.touches.item(0) : e.changedTouches[0] : e, i || (this.chartPosition = i = ci(this.chart.container)), r.pageX === z ? (n = ve(e.x, e.clientX - i.left), o = e.y) : (n = r.pageX - i.left, o = r.pageY - i.top), vi(e, {
                    chartX: fe(n),
                    chartY: fe(o)
                })
            },
            getCoordinates: function(t) {
                var e = {
                    xAxis: [],
                    yAxis: []
                };
                return ai(this.chart.axes, function(i) {
                    e[i.isXAxis ? "xAxis" : "yAxis"].push({
                        axis: i,
                        value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
                    })
                }), e
            },
            runPointActions: function(t) {
                var e, i, n, o, r, s, a, l = this,
                    c = l.chart,
                    h = c.series,
                    u = c.tooltip,
                    p = u ? u.shared : !1,
                    d = c.hoverPoint,
                    f = c.hoverSeries,
                    g = [Number.MAX_VALUE, Number.MAX_VALUE],
                    m = [],
                    v = [];
                if (!p && !f)
                    for (i = 0; i < h.length; i++)(h[i].directTouch || !h[i].options.stickyTracking) && (h = []);
                if (r = f && (p ? f.noSharedTooltip : f.directTouch), r && d ? v = [d] : (ai(h, function(e) {
                        o = e.noSharedTooltip && p, s = !p && e.directTouch, e.visible && !o && !s && bi(e.options.enableMouseTracking, !0) && (a = e.searchPoint(t, !o && 1 === e.kdDimensions), a && m.push(a))
                    }), ai(m, function(t) {
                        t && ai(["dist", "distX"], function(e, i) {
                            if (yi(t[e])) {
                                var n = t[e] < g[i],
                                    o = t[e] === g[i] && t.series.group.zIndex >= v[i].series.group.zIndex;
                                (n || o) && (g[i] = t[e], v[i] = t)
                            }
                        })
                    })), p)
                    for (i = m.length; i--;)(m[i].clientX !== v[1].clientX || m[i].series.noSharedTooltip) && m.splice(i, 1);
                v[0] && (v[0] !== this.prevKDPoint || u && u.isHidden) ? p && !v[0].series.noSharedTooltip ? (m.length && u && u.refresh(m, t), ai(m, function(e) {
                    e.onMouseOver(t, e !== (f && f.directTouch && d || v[0]))
                }), this.prevKDPoint = v[1]) : (u && u.refresh(v[0], t), f && f.directTouch || v[0].onMouseOver(t), this.prevKDPoint = v[0]) : (e = f && f.tooltipOptions.followPointer, u && e && !u.isHidden && (n = u.getAnchor([{}], t), u.updatePosition({
                    plotX: n[0],
                    plotY: n[1]
                }))), l._onDocumentMouseMove || (l._onDocumentMouseMove = function(t) {
                    Re[Oi] && Re[Oi].pointer.onDocumentMouseMove(t)
                }, ui(pe, "mousemove", l._onDocumentMouseMove)), ai(p ? m : [bi(d, v[1])], function(e) {
                    ai(c.axes, function(i) {
                        e && e.series[i.coll] !== i || i.drawCrosshair(t, e)
                    })
                })
            },
            reset: function(t, e) {
                var i = this,
                    n = i.chart,
                    o = n.hoverSeries,
                    r = n.hoverPoint,
                    s = n.hoverPoints,
                    a = n.tooltip,
                    l = a && a.shared ? s : r;
                t && l && ai(u(l), function(e) {
                    e.series.isCartesian && void 0 === e.plotX && (t = !1)
                }), t ? a && l && (a.refresh(l), r && (r.setState(r.state, !0), ai(n.axes, function(t) {
                    bi(t.crosshair && t.crosshair.snap, !0) ? t.drawCrosshair(null, r) : t.hideCrosshair()
                }))) : (r && r.onMouseOut(), s && ai(s, function(t) {
                    t.setState()
                }), o && o.onMouseOut(), a && a.hide(e), i._onDocumentMouseMove && (pi(pe, "mousemove", i._onDocumentMouseMove), i._onDocumentMouseMove = null), ai(n.axes, function(t) {
                    t.hideCrosshair()
                }), i.hoverX = n.hoverPoints = n.hoverPoint = null)
            },
            scaleGroups: function(t, e) {
                var i, n = this.chart;
                ai(n.series, function(o) {
                    i = t || o.getPlotBox(), o.xAxis && o.xAxis.zoomEnabled && (o.group.attr(i), o.markerGroup && (o.markerGroup.attr(i), o.markerGroup.clip(e ? n.clipRect : null)), o.dataLabelsGroup && o.dataLabelsGroup.attr(i))
                }), n.clipRect.attr(e || n.clipBox)
            },
            dragStart: function(t) {
                var e = this.chart;
                e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = this.mouseDownX = t.chartX, e.mouseDownY = this.mouseDownY = t.chartY
            },
            drag: function(t) {
                var e, i, n = this.chart,
                    o = n.options.chart,
                    r = t.chartX,
                    s = t.chartY,
                    a = this.zoomHor,
                    l = this.zoomVert,
                    c = n.plotLeft,
                    h = n.plotTop,
                    u = n.plotWidth,
                    p = n.plotHeight,
                    d = this.selectionMarker,
                    f = this.mouseDownX,
                    g = this.mouseDownY,
                    m = o.panKey && t[o.panKey + "Key"];
                d && d.touch || (c > r ? r = c : r > c + u && (r = c + u), h > s ? s = h : s > h + p && (s = h + p), this.hasDragged = Math.sqrt(Math.pow(f - r, 2) + Math.pow(g - s, 2)), this.hasDragged > 10 && (e = n.isInsidePlot(f - c, g - h), n.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !m && (d || (this.selectionMarker = d = n.renderer.rect(c, h, a ? 1 : u, l ? 1 : p, 0).attr({
                    fill: o.selectionMarkerFill || "rgba(69,114,167,0.25)",
                    zIndex: 7
                }).add())), d && a && (i = r - f, d.attr({
                    width: be(i),
                    x: (i > 0 ? 0 : i) + f
                })), d && l && (i = s - g, d.attr({
                    height: be(i),
                    y: (i > 0 ? 0 : i) + g
                })), e && !d && o.panning && n.pan(t, o.panning)))
            },
            drop: function(t) {
                var e = this,
                    i = this.chart,
                    n = this.hasPinched;
                if (this.selectionMarker) {
                    var o, r = {
                            originalEvent: t,
                            xAxis: [],
                            yAxis: []
                        },
                        s = this.selectionMarker,
                        a = s.attr ? s.attr("x") : s.x,
                        l = s.attr ? s.attr("y") : s.y,
                        h = s.attr ? s.attr("width") : s.width,
                        u = s.attr ? s.attr("height") : s.height;
                    (this.hasDragged || n) && (ai(i.axes, function(i) {
                        if (i.zoomEnabled && c(i.min) && (n || e[{
                                xAxis: "zoomX",
                                yAxis: "zoomY"
                            }[i.coll]])) {
                            var s = i.horiz,
                                p = "touchend" === t.type ? i.minPixelPadding : 0,
                                d = i.toValue((s ? a : l) + p),
                                f = i.toValue((s ? a + h : l + u) - p);
                            r[i.coll].push({
                                axis: i,
                                min: ye(d, f),
                                max: ve(d, f)
                            }), o = !0
                        }
                    }), o && di(i, "selection", r, function(t) {
                        i.zoom(vi(t, n ? {
                            animation: !1
                        } : null))
                    })), this.selectionMarker = this.selectionMarker.destroy(), n && this.scaleGroups()
                }
                i && (d(i.container, {
                    cursor: i._cursor
                }), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
            },
            onContainerMouseDown: function(t) {
                t = this.normalize(t), t.preventDefault && t.preventDefault(), this.dragStart(t)
            },
            onDocumentMouseUp: function(t) {
                Re[Oi] && Re[Oi].pointer.drop(t)
            },
            onDocumentMouseMove: function(t) {
                var e = this.chart,
                    i = this.chartPosition;
                t = this.normalize(t, i), !i || this.inClass(t.target, "highcharts-tracker") || e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || this.reset()
            },
            onContainerMouseLeave: function(t) {
                var e = Re[Oi];
                e && (t.relatedTarget || t.toElement) && (e.pointer.reset(), e.pointer.chartPosition = null)
            },
            onContainerMouseMove: function(t) {
                var e = this.chart;
                c(Oi) && Re[Oi] && Re[Oi].mouseIsDown || (Oi = e.index), t = this.normalize(t), t.returnValue = !1, "mousedown" === e.mouseIsDown && this.drag(t), !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || e.openMenu || this.runPointActions(t)
            },
            inClass: function(t, e) {
                for (var i; t;) {
                    if (i = h(t, "class")) {
                        if (-1 !== i.indexOf(e)) return !0;
                        if (-1 !== i.indexOf(Ye + "container")) return !1
                    }
                    t = t.parentNode
                }
            },
            onTrackerMouseOut: function(t) {
                var e = this.chart.hoverSeries,
                    i = t.relatedTarget || t.toElement;
                !e || !i || e.options.stickyTracking || this.inClass(i, Ye + "tooltip") || this.inClass(i, Ye + "series-" + e.index) || e.onMouseOut()
            },
            onContainerClick: function(t) {
                var e = this.chart,
                    i = e.hoverPoint,
                    n = e.plotLeft,
                    o = e.plotTop;
                t = this.normalize(t), e.cancelClick || (i && this.inClass(t.target, Ye + "tracker") ? (di(i.series, "click", vi(t, {
                    point: i
                })), e.hoverPoint && i.firePointEvent("click", t)) : (vi(t, this.getCoordinates(t)), e.isInsidePlot(t.chartX - n, t.chartY - o) && di(e, "click", t)))
            },
            setDOMEvents: function() {
                var t = this,
                    e = t.chart.container;
                e.onmousedown = function(e) {
                    t.onContainerMouseDown(e)
                }, e.onmousemove = function(e) {
                    t.onContainerMouseMove(e)
                }, e.onclick = function(e) {
                    t.onContainerClick(e)
                }, ui(e, "mouseleave", t.onContainerMouseLeave), 1 === ze && ui(pe, "mouseup", t.onDocumentMouseUp), F && (e.ontouchstart = function(e) {
                    t.onContainerTouchStart(e)
                }, e.ontouchmove = function(e) {
                    t.onContainerTouchMove(e)
                }, 1 === ze && ui(pe, "touchend", t.onDocumentTouchEnd))
            },
            destroy: function() {
                var t;
                pi(this.chart.container, "mouseleave", this.onContainerMouseLeave), ze || (pi(pe, "mouseup", this.onDocumentMouseUp), pi(pe, "touchend", this.onDocumentTouchEnd)), clearInterval(this.tooltipTimeout);
                for (t in this) this[t] = null
            }
        }, vi(ue.Pointer.prototype, {
            pinchTranslate: function(t, e, i, n, o, r) {
                (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, t, e, i, n, o, r), (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, t, e, i, n, o, r)
            },
            pinchTranslateDirection: function(t, e, i, n, o, r, s, a) {
                var l, c, h, u, p, d, f = this.chart,
                    g = t ? "x" : "y",
                    m = t ? "X" : "Y",
                    v = "chart" + m,
                    y = t ? "width" : "height",
                    b = f["plot" + (t ? "Left" : "Top")],
                    x = a || 1,
                    w = f.inverted,
                    k = f.bounds[t ? "h" : "v"],
                    T = 1 === e.length,
                    C = e[0][v],
                    S = i[0][v],
                    A = !T && e[1][v],
                    P = !T && i[1][v],
                    E = function() {
                        !T && be(C - A) > 20 && (x = a || be(S - P) / be(C - A)), h = (b - S) / x + C, l = f["plot" + (t ? "Width" : "Height")] / x
                    };
                E(), c = h, c < k.min ? (c = k.min, u = !0) : c + l > k.max && (c = k.max - l, u = !0), u ? (S -= .8 * (S - s[g][0]), T || (P -= .8 * (P - s[g][1])), E()) : s[g] = [S, P], w || (r[g] = h - b, r[y] = l), d = w ? t ? "scaleY" : "scaleX" : "scale" + m, p = w ? 1 / x : x, o[y] = l, o[g] = c, n[d] = x, n["translate" + m] = p * b + (S - p * C)
            },
            pinch: function(t) {
                var e = this,
                    i = e.chart,
                    n = e.pinchDown,
                    o = t.touches,
                    r = o.length,
                    s = e.lastValidTouch,
                    a = e.hasZoom,
                    l = e.selectionMarker,
                    c = {},
                    h = 1 === r && (e.inClass(t.target, Ye + "tracker") && i.runTrackerClick || e.runChartClick),
                    u = {};
                r > 1 && (e.initiated = !0), a && e.initiated && !h && t.preventDefault(), hi(o, function(t) {
                    return e.normalize(t)
                }), "touchstart" === t.type ? (ai(o, function(t, e) {
                    n[e] = {
                        chartX: t.chartX,
                        chartY: t.chartY
                    }
                }), s.x = [n[0].chartX, n[1] && n[1].chartX], s.y = [n[0].chartY, n[1] && n[1].chartY], ai(i.axes, function(t) {
                    if (t.zoomEnabled) {
                        var e = i.bounds[t.horiz ? "h" : "v"],
                            n = t.minPixelPadding,
                            o = t.toPixels(bi(t.options.min, t.dataMin)),
                            r = t.toPixels(bi(t.options.max, t.dataMax)),
                            s = ye(o, r),
                            a = ve(o, r);
                        e.min = ye(t.pos, s - n), e.max = ve(t.pos + t.len, a + n)
                    }
                }), e.res = !0) : n.length && (l || (e.selectionMarker = l = vi({
                    destroy: je,
                    touch: !0
                }, i.plotBox)), e.pinchTranslate(n, o, c, l, u, s), e.hasPinched = a, e.scaleGroups(c, u), !a && e.followTouchMove && 1 === r ? this.runPointActions(e.normalize(t)) : e.res && (e.res = !1, this.reset(!1, 0)))
            },
            touch: function(t, e) {
                var i, n, o = this.chart;
                Oi = o.index, 1 === t.touches.length ? (t = this.normalize(t), o.isInsidePlot(t.chartX - o.plotLeft, t.chartY - o.plotTop) && !o.openMenu ? (e && this.runPointActions(t), "touchmove" === t.type && (n = this.pinchDown, i = n[0] ? Math.sqrt(Math.pow(n[0].chartX - t.chartX, 2) + Math.pow(n[0].chartY - t.chartY, 2)) >= 4 : !1), bi(i, !0) && this.pinch(t)) : e && this.reset()) : 2 === t.touches.length && this.pinch(t)
            },
            onContainerTouchStart: function(t) {
                this.touch(t, !0)
            },
            onContainerTouchMove: function(t) {
                this.touch(t)
            },
            onDocumentTouchEnd: function(t) {
                Re[Oi] && Re[Oi].pointer.drop(t)
            }
        }), t.PointerEvent || t.MSPointerEvent) {
        var Mi = {},
            Ni = !!t.PointerEvent,
            Ii = function() {
                var t, e = [];
                e.item = function(t) {
                    return this[t]
                };
                for (t in Mi) Mi.hasOwnProperty(t) && e.push({
                    pageX: Mi[t].pageX,
                    pageY: Mi[t].pageY,
                    target: Mi[t].target
                });
                return e
            },
            $i = function(t, e, i, n) {
                var o;
                "touch" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_TOUCH || !Re[Oi] || (n(t), o = Re[Oi].pointer, o[e]({
                    type: i,
                    target: t.currentTarget,
                    preventDefault: je,
                    touches: Ii()
                }))
            };
        vi(_i.prototype, {
            onContainerPointerDown: function(t) {
                $i(t, "onContainerTouchStart", "touchstart", function(t) {
                    Mi[t.pointerId] = {
                        pageX: t.pageX,
                        pageY: t.pageY,
                        target: t.currentTarget
                    }
                })
            },
            onContainerPointerMove: function(t) {
                $i(t, "onContainerTouchMove", "touchmove", function(t) {
                    Mi[t.pointerId] = {
                        pageX: t.pageX,
                        pageY: t.pageY
                    }, Mi[t.pointerId].target || (Mi[t.pointerId].target = t.currentTarget)
                })
            },
            onDocumentPointerUp: function(t) {
                $i(t, "onDocumentTouchEnd", "touchend", function(t) {
                    delete Mi[t.pointerId]
                })
            },
            batchMSEvents: function(t) {
                t(this.chart.container, Ni ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown), t(this.chart.container, Ni ? "pointermove" : "MSPointerMove", this.onContainerPointerMove), t(pe, Ni ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
            }
        }), xi(_i.prototype, "init", function(t, e, i) {
            t.call(this, e, i), this.hasZoom && d(e.container, {
                "-ms-touch-action": Ve,
                "touch-action": Ve
            })
        }), xi(_i.prototype, "setDOMEvents", function(t) {
            t.apply(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(ui)
        }), xi(_i.prototype, "destroy", function(t) {
            this.batchMSEvents(pi), t.call(this)
        })
    }
    var ji = ue.Legend = function(t, e) {
        this.init(t, e)
    };
    ji.prototype = {
        init: function(t, e) {
            var i, o = this,
                r = e.itemStyle,
                s = e.itemMarginTop || 0;
            this.options = e, e.enabled && (o.itemStyle = r, o.itemHiddenStyle = n(r, e.itemHiddenStyle), o.itemMarginTop = s, o.padding = i = bi(e.padding, 8), o.initialItemX = i, o.initialItemY = i - 5, o.maxItemWidth = 0, o.chart = t, o.itemHeight = 0, o.symbolWidth = bi(e.symbolWidth, 16), o.pages = [], o.render(), ui(o.chart, "endResize", function() {
                o.positionCheckboxes()
            }))
        },
        colorizeItem: function(t, e) {
            var i, n, o = this,
                r = o.options,
                s = t.legendItem,
                a = t.legendLine,
                l = t.legendSymbol,
                c = o.itemHiddenStyle.color,
                h = e ? r.itemStyle.color : c,
                u = e ? t.legendColor || t.color || "#CCC" : c,
                p = t.options && t.options.marker,
                d = {
                    fill: u
                };
            if (s && s.css({
                    fill: h,
                    color: h
                }), a && a.attr({
                    stroke: u
                }), l) {
                if (p && l.isMarker) {
                    d.stroke = u, p = t.convertAttribs(p);
                    for (i in p) n = p[i], n !== z && (d[i] = n)
                }
                l.attr(d)
            }
        },
        positionItem: function(t) {
            var e = this,
                i = e.options,
                n = i.symbolPadding,
                o = !i.rtl,
                r = t._legendItemPos,
                s = r[0],
                a = r[1],
                l = t.checkbox,
                c = t.legendGroup;
            c && c.element && c.translate(o ? s : e.legendWidth - s - 2 * n - 4, a), l && (l.x = s, l.y = a)
        },
        destroyItem: function(t) {
            var e = t.checkbox;
            ai(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(e) {
                t[e] && (t[e] = t[e].destroy())
            }), e && P(t.checkbox)
        },
        destroy: function() {
            var t = this,
                e = t.group,
                i = t.box;
            i && (t.box = i.destroy()), e && (t.group = e.destroy())
        },
        positionCheckboxes: function(t) {
            var e, i = this.group.alignAttr,
                n = this.clipHeight || this.legendHeight,
                o = this.titleHeight;
            i && (e = i.translateY, ai(this.allItems, function(r) {
                var s, a = r.checkbox;
                a && (s = e + o + a.y + (t || 0) + 3, d(a, {
                    left: i.translateX + r.checkboxOffset + a.x - 20 + Ue,
                    top: s + Ue,
                    display: s > e - 6 && e + n - 6 > s ? "" : Ve
                }))
            }))
        },
        renderTitle: function() {
            var t, e = this.options,
                i = this.padding,
                n = e.title,
                o = 0;
            n.text && (this.title || (this.title = this.chart.renderer.label(n.text, i - 3, i - 4, null, null, null, null, null, "legend-title").attr({
                zIndex: 1
            }).css(n.style).add(this.group)), t = this.title.getBBox(), o = t.height, this.offsetWidth = t.width, this.contentGroup.attr({
                translateY: o
            })), this.titleHeight = o
        },
        setText: function(t) {
            var e = this.options;
            t.legendItem.attr({
                text: e.labelFormat ? x(e.labelFormat, t) : e.labelFormatter.call(t)
            })
        },
        renderItem: function(t) {
            var e, i, o, r = this,
                s = r.chart,
                a = s.renderer,
                l = r.options,
                c = "horizontal" === l.layout,
                h = r.symbolWidth,
                u = l.symbolPadding,
                p = r.itemStyle,
                d = r.itemHiddenStyle,
                f = r.padding,
                g = c ? bi(l.itemDistance, 20) : 0,
                m = !l.rtl,
                v = l.width,
                y = l.itemMarginBottom || 0,
                b = r.itemMarginTop,
                x = r.initialItemX,
                w = t.legendItem,
                k = t.series && t.series.drawLegendSymbol ? t.series : t,
                T = k.options,
                C = r.createCheckboxForItem && T && T.showCheckbox,
                S = l.useHTML;
            w || (t.legendGroup = a.g("legend-item").attr({
                zIndex: 1
            }).add(r.scrollGroup), t.legendItem = w = a.text("", m ? h + u : -u, r.baseline || 0, S).css(n(t.visible ? p : d)).attr({
                align: m ? "left" : "right",
                zIndex: 2
            }).add(t.legendGroup), r.baseline || (r.fontMetrics = a.fontMetrics(p.fontSize, w), r.baseline = r.fontMetrics.f + 3 + b, w.attr("y", r.baseline)), k.drawLegendSymbol(r, t), r.setItemEvents && r.setItemEvents(t, w, S, p, d), C && r.createCheckboxForItem(t)), r.colorizeItem(t, t.visible), r.setText(t), i = w.getBBox(), o = t.checkboxOffset = l.itemWidth || t.legendItemWidth || h + u + i.width + g + (C ? 20 : 0), r.itemHeight = e = fe(t.legendItemHeight || i.height), c && r.itemX - x + o > (v || s.chartWidth - 2 * f - x - l.x) && (r.itemX = x, r.itemY += b + r.lastLineHeight + y, r.lastLineHeight = 0), r.maxItemWidth = ve(r.maxItemWidth, o), r.lastItemY = b + r.itemY + y, r.lastLineHeight = ve(e, r.lastLineHeight), t._legendItemPos = [r.itemX, r.itemY], c ? r.itemX += o : (r.itemY += b + e + y, r.lastLineHeight = e), r.offsetWidth = v || ve((c ? r.itemX - x - g : o) + f, r.offsetWidth)
        },
        getAllItems: function() {
            var t = [];
            return ai(this.chart.series, function(e) {
                var i = e.options;
                bi(i.showInLegend, c(i.linkedTo) ? !1 : z, !0) && (t = t.concat(e.legendItems || ("point" === i.legendType ? e.data : e)))
            }), t
        },
        adjustMargins: function(t, e) {
            var i = this.chart,
                n = this.options,
                o = n.align.charAt(0) + n.verticalAlign.charAt(0) + n.layout.charAt(0);
            this.display && !n.floating && ai([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(r, s) {
                r.test(o) && !c(t[s]) && (i[ii[s]] = ve(i[ii[s]], i.legend[(s + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][s] * n[s % 2 ? "x" : "y"] + bi(n.margin, 12) + e[s]))
            })
        },
        render: function() {
            var t, e, i, n, o = this,
                r = o.chart,
                s = r.renderer,
                a = o.group,
                l = o.box,
                c = o.options,
                h = o.padding,
                u = c.borderWidth,
                p = c.backgroundColor;
            o.itemX = o.initialItemX, o.itemY = o.initialItemY, o.offsetWidth = 0, o.lastItemY = 0, a || (o.group = a = s.g("legend").attr({
                zIndex: 7
            }).add(), o.contentGroup = s.g().attr({
                zIndex: 1
            }).add(a), o.scrollGroup = s.g().add(o.contentGroup)), o.renderTitle(), t = o.getAllItems(), T(t, function(t, e) {
                return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
            }), c.reversed && t.reverse(), o.allItems = t, o.display = e = !!t.length, o.lastLineHeight = 0, ai(t, function(t) {
                o.renderItem(t)
            }), i = (c.width || o.offsetWidth) + h, n = o.lastItemY + o.lastLineHeight + o.titleHeight, n = o.handleOverflow(n), n += h, (u || p) && (l ? i > 0 && n > 0 && (l[l.isNew ? "attr" : "animate"](l.crisp({
                width: i,
                height: n
            })), l.isNew = !1) : (o.box = l = s.rect(0, 0, i, n, c.borderRadius, u || 0).attr({
                stroke: c.borderColor,
                "stroke-width": u || 0,
                fill: p || Ve
            }).add(a).shadow(c.shadow), l.isNew = !0), l[e ? "show" : "hide"]()), o.legendWidth = i, o.legendHeight = n, ai(t, function(t) {
                o.positionItem(t)
            }), e && a.align(vi({
                width: i,
                height: n
            }, c), !0, "spacingBox"), r.isResizing || this.positionCheckboxes()
        },
        handleOverflow: function(t) {
            var e, i, n = this,
                o = this.chart,
                r = o.renderer,
                s = this.options,
                a = s.y,
                l = "top" === s.verticalAlign,
                c = o.spacingBox.height + (l ? -a : a) - this.padding,
                h = s.maxHeight,
                u = this.clipRect,
                p = s.navigation,
                d = bi(p.animation, !0),
                f = p.arrowSize || 12,
                g = this.nav,
                m = this.pages,
                v = this.padding,
                y = this.allItems,
                b = function(t) {
                    u.attr({
                        height: t
                    }), n.contentGroup.div && (n.contentGroup.div.style.clip = "rect(" + v + "px,9999px," + (v + t) + "px,0)")
                };
            return "horizontal" === s.layout && (c /= 2), h && (c = ye(c, h)), m.length = 0, t > c && p.enabled !== !1 ? (this.clipHeight = e = ve(c - 20 - this.titleHeight - v, 0), this.currentPage = bi(this.currentPage, 1), this.fullHeight = t, ai(y, function(t, n) {
                var o = t._legendItemPos[1],
                    r = fe(t.legendItem.getBBox().height),
                    s = m.length;
                (!s || o - m[s - 1] > e && (i || o) !== m[s - 1]) && (m.push(i || o), s++), n === y.length - 1 && o + r - m[s - 1] > e && m.push(o), o !== i && (i = o)
            }), u || (u = n.clipRect = r.clipRect(0, v, 9999, 0), n.contentGroup.clip(u)), b(e), g || (this.nav = g = r.g().attr({
                zIndex: 1
            }).add(this.group), this.up = r.symbol("triangle", 0, 0, f, f).on("click", function() {
                n.scroll(-1, d)
            }).add(g), this.pager = r.text("", 15, 10).css(p.style).add(g), this.down = r.symbol("triangle-down", 0, 0, f, f).on("click", function() {
                n.scroll(1, d)
            }).add(g)), n.scroll(0), t = c) : g && (b(o.chartHeight), g.hide(), this.scrollGroup.attr({
                translateY: 1
            }), this.clipHeight = 0), t
        },
        scroll: function(t, e) {
            var i, n = this.pages,
                o = n.length,
                r = this.currentPage + t,
                s = this.clipHeight,
                a = this.options.navigation,
                l = a.activeColor,
                c = a.inactiveColor,
                h = this.pager,
                u = this.padding;
            r > o && (r = o), r > 0 && (e !== z && L(e, this.chart), this.nav.attr({
                translateX: u,
                translateY: s + this.padding + 7 + this.titleHeight,
                visibility: Ge
            }), this.up.attr({
                fill: 1 === r ? c : l
            }).css({
                cursor: 1 === r ? "default" : "pointer"
            }), h.attr({
                text: r + "/" + o
            }), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: r === o ? c : l
            }).css({
                cursor: r === o ? "default" : "pointer"
            }), i = -n[r - 1] + this.initialItemY, this.scrollGroup.animate({
                translateY: i
            }), this.currentPage = r, this.positionCheckboxes(i))
        }
    };
    var Ri = ue.LegendSymbolMixin = {
        drawRectangle: function(t, e) {
            var i = t.options.symbolHeight || t.fontMetrics.f;
            e.legendSymbol = this.chart.renderer.rect(0, t.baseline - i + 1, t.symbolWidth, i, t.options.symbolRadius || 0).attr({
                zIndex: 3
            }).add(e.legendGroup)
        },
        drawLineMarker: function(t) {
            var e, i, n, o = this.options,
                r = o.marker,
                s = t.symbolWidth,
                a = this.chart.renderer,
                l = this.legendGroup,
                c = t.baseline - fe(.3 * t.fontMetrics.b);
            o.lineWidth && (n = {
                "stroke-width": o.lineWidth
            }, o.dashStyle && (n.dashstyle = o.dashStyle), this.legendLine = a.path([Ke, 0, c, Ze, s, c]).attr(n).add(l)), r && r.enabled !== !1 && (e = r.radius, this.legendSymbol = i = a.symbol(this.symbol, s / 2 - e, c - e, 2 * e, 2 * e, r).add(l), i.isMarker = !0)
        }
    };
    (/Trident\/7\.0/.test(Ce) || Le) && xi(ji.prototype, "positionItem", function(t, e) {
        var i = this,
            n = function() {
                e._legendItemPos && t.call(i, e)
            };
        n(), setTimeout(n)
    });
    var zi = ue.Chart = function() {
        this.getArgs.apply(this, arguments)
    };
    ue.chart = function(t, e, i) {
        return new zi(t, e, i)
    }, zi.prototype = {
        callbacks: [],
        getArgs: function() {
            var t = [].slice.call(arguments);
            (r(t[0]) || t[0].nodeName) && (this.renderTo = t.shift()), this.init(t[0], t[1])
        },
        init: function(t, e) {
            var i, o = t.series;
            t.series = null, i = n(W, t), i.series = t.series = o, this.userOptions = t;
            var r = i.chart;
            this.margin = this.splashArray("margin", r), this.spacing = this.splashArray("spacing", r);
            var s = r.events;
            this.bounds = {
                h: {},
                v: {}
            }, this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.hasCartesianSeries = r.showAxes;
            var a, l = this;
            if (l.index = Re.length, Re.push(l), ze++, r.reflow !== !1 && ui(l, "load", function() {
                    l.initReflow()
                }), s)
                for (a in s) ui(l, a, s[a]);
            l.xAxis = [], l.yAxis = [], l.animation = Ne ? !1 : bi(r.animation, !0), l.pointCount = l.colorCounter = l.symbolCounter = 0, l.firstRender()
        },
        initSeries: function(t) {
            var i, n = this,
                o = n.options.chart,
                r = t.type || o.type || o.defaultSeriesType,
                s = oi[r];
            return s || e(17, !0), i = new s, i.init(this, t), i
        },
        isInsidePlot: function(t, e, i) {
            var n = i ? e : t,
                o = i ? t : e;
            return n >= 0 && n <= this.plotWidth && o >= 0 && o <= this.plotHeight
        },
        redraw: function(t) {
            var e, i, n, o = this,
                r = o.axes,
                s = o.series,
                a = o.pointer,
                l = o.legend,
                c = o.isDirtyLegend,
                h = o.hasCartesianSeries,
                u = o.isDirtyBox,
                p = s.length,
                d = p,
                f = o.renderer,
                g = f.isHidden(),
                m = [];
            for (L(t, o), g && o.cloneRenderTo(), o.layOutTitles(); d--;)
                if (n = s[d], n.options.stacking && (e = !0, n.isDirty)) {
                    i = !0;
                    break
                }
            if (i)
                for (d = p; d--;) n = s[d], n.options.stacking && (n.isDirty = !0);
            ai(s, function(t) {
                t.isDirty && "point" === t.options.legendType && (t.updateTotals && t.updateTotals(), c = !0), t.isDirtyData && di(t, "updatedData")
            }), c && l.options.enabled && (l.render(), o.isDirtyLegend = !1), e && o.getStacks(), h && (o.isResizing || (o.maxTicks = null, ai(r, function(t) {
                t.setScale()
            }))), o.getMargins(), h && (ai(r, function(t) {
                t.isDirty && (u = !0)
            }), ai(r, function(t) {
                var i = t.min + "," + t.max;
                t.extKey !== i && (t.extKey = i, m.push(function() {
                    di(t, "afterSetExtremes", vi(t.eventArgs, t.getExtremes())), delete t.eventArgs
                })), (u || e) && t.redraw()
            })), u && o.drawChartBox(), ai(s, function(t) {
                t.isDirty && t.visible && (!t.isCartesian || t.xAxis) && t.redraw()
            }), a && a.reset(!0), f.draw(), di(o, "redraw"), g && o.cloneRenderTo(!0), ai(m, function(t) {
                t.call()
            })
        },
        get: function(t) {
            var e, i, n, o = this,
                r = o.axes,
                s = o.series;
            for (e = 0; e < r.length; e++)
                if (r[e].options.id === t) return r[e];
            for (e = 0; e < s.length; e++)
                if (s[e].options.id === t) return s[e];
            for (e = 0; e < s.length; e++)
                for (n = s[e].points || [], i = 0; i < n.length; i++)
                    if (n[i].id === t) return n[i];
            return null
        },
        getAxes: function() {
            var t, e = this,
                i = this.options,
                n = i.xAxis = u(i.xAxis || {}),
                o = i.yAxis = u(i.yAxis || {});
            ai(n, function(t, e) {
                t.index = e, t.isX = !0
            }), ai(o, function(t, e) {
                t.index = e
            }), t = n.concat(o), ai(t, function(t) {
                new Li(e, t)
            })
        },
        getSelectedPoints: function() {
            var t = [];
            return ai(this.series, function(e) {
                t = t.concat(li(e.points || [], function(t) {
                    return t.selected
                }))
            }), t
        },
        getSelectedSeries: function() {
            return li(this.series, function(t) {
                return t.selected
            })
        },
        setTitle: function(t, e, i) {
            var o, r, s = this,
                a = s.options;
            o = a.title = n(a.title, t), r = a.subtitle = n(a.subtitle, e), ai([
                ["title", t, o],
                ["subtitle", e, r]
            ], function(t) {
                var e = t[0],
                    i = s[e],
                    n = t[1],
                    o = t[2];
                i && n && (s[e] = i = i.destroy()), o && o.text && !i && (s[e] = s.renderer.text(o.text, 0, 0, o.useHTML).attr({
                    align: o.align,
                    "class": Ye + e,
                    zIndex: o.zIndex || 4
                }).css(o.style).add())
            }), s.layOutTitles(i)
        },
        layOutTitles: function(t) {
            var e, i = 0,
                n = this.title,
                o = this.subtitle,
                r = this.options,
                s = r.title,
                a = r.subtitle,
                l = this.renderer,
                c = this.spacingBox;
            n && (n.css({
                width: (s.width || c.width + s.widthAdjust) + Ue
            }).align(vi({
                y: l.fontMetrics(s.style.fontSize, n).b - 3
            }, s), !1, c), s.floating || s.verticalAlign || (i = n.getBBox().height)), o && (o.css({
                width: (a.width || c.width + a.widthAdjust) + Ue
            }).align(vi({
                y: i + (s.margin - 13) + l.fontMetrics(a.style.fontSize, n).b
            }, a), !1, c), a.floating || a.verticalAlign || (i = me(i + o.getBBox().height))), e = this.titleOffset !== i, this.titleOffset = i, !this.isDirtyBox && e && (this.isDirtyBox = e, this.hasRendered && bi(t, !0) && this.isDirtyBox && this.redraw())
        },
        getChartSize: function() {
            var t = this,
                e = t.options.chart,
                i = e.width,
                n = e.height,
                o = t.renderToClone || t.renderTo;
            c(i) || (t.containerWidth = ri(o, "width")), c(n) || (t.containerHeight = ri(o, "height")), t.chartWidth = ve(0, i || t.containerWidth || 600), t.chartHeight = ve(0, bi(n, t.containerHeight > 19 ? t.containerHeight : 400))
        },
        cloneRenderTo: function(t) {
            var e = this.renderToClone,
                i = this.container;
            t ? e && (this.renderTo.appendChild(i), P(e), delete this.renderToClone) : (i && i.parentNode === this.renderTo && this.renderTo.removeChild(i), this.renderToClone = e = this.renderTo.cloneNode(0), d(e, {
                position: We,
                top: "-9999px",
                display: "block"
            }), e.style.setProperty && e.style.setProperty("display", "block", "important"), pe.body.appendChild(e), i && e.appendChild(i))
        },
        getContainer: function() {
            var t, i, n, s, a, l = this,
                c = l.options,
                u = c.chart,
                p = l.renderTo,
                d = "data-highcharts-chart",
                g = "highcharts-" + $e++;
            p || (l.renderTo = p = u.renderTo), r(p) && (l.renderTo = p = pe.getElementById(p)), p || e(13, !0), s = o(h(p, d)), yi(s) && Re[s] && Re[s].hasRendered && Re[s].destroy(), h(p, d, l.index), p.innerHTML = "", u.skipClone || p.offsetWidth || l.cloneRenderTo(), l.getChartSize(), i = l.chartWidth, n = l.chartHeight, l.container = t = f(Be, {
                className: Ye + "container" + (u.className ? " " + u.className : ""),
                id: g
            }, vi({
                position: Xe,
                overflow: qe,
                width: i + Ue,
                height: n + Ue,
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, u.style), l.renderToClone || p), l._cursor = t.style.cursor, a = ue[u.renderer] || H, l.renderer = new a(t, i, n, u.style, u.forExport, c.exporting && c.exporting.allowHTML), Ne && l.renderer.create(l, t, i, n), l.renderer.chartIndex = l.index
        },
        getMargins: function(t) {
            var e = this,
                i = e.spacing,
                n = e.margin,
                o = e.titleOffset;
            e.resetMargins(), o && !c(n[0]) && (e.plotTop = ve(e.plotTop, o + e.options.title.margin + i[0])), e.legend.adjustMargins(n, i), e.extraBottomMargin && (e.marginBottom += e.extraBottomMargin), e.extraTopMargin && (e.plotTop += e.extraTopMargin), t || this.getAxisMargins()
        },
        getAxisMargins: function() {
            var t = this,
                e = t.axisOffset = [0, 0, 0, 0],
                i = t.margin;
            t.hasCartesianSeries && ai(t.axes, function(t) {
                t.visible && t.getOffset()
            }), ai(ii, function(n, o) {
                c(i[o]) || (t[n] += e[o])
            }), t.setChartSize()
        },
        reflow: function(e) {
            var i = this,
                n = i.options.chart,
                o = i.renderTo,
                r = n.width || ri(o, "width"),
                s = n.height || ri(o, "height"),
                a = e ? e.target : t;
            i.hasUserSize || i.isPrinting || !r || !s || a !== t && a !== pe || ((r !== i.containerWidth || s !== i.containerHeight) && (clearTimeout(i.reflowTimeout), i.reflowTimeout = p(function() {
                i.container && (i.setSize(r, s, !1), i.hasUserSize = null)
            }, e ? 100 : 0)), i.containerWidth = r, i.containerHeight = s)
        },
        initReflow: function() {
            var e = this,
                i = function(t) {
                    e.reflow(t)
                };
            ui(t, "resize", i), ui(e, "destroy", function() {
                pi(t, "resize", i)
            })
        },
        setSize: function(t, e, i) {
            var n, o, r, s = this,
                a = s.renderer;
            s.isResizing += 1, L(i, s), s.oldChartHeight = s.chartHeight, s.oldChartWidth = s.chartWidth, c(t) && (s.chartWidth = n = ve(0, fe(t)), s.hasUserSize = !!n), c(e) && (s.chartHeight = o = ve(0, fe(e))), r = a.globalAnimation, (r ? fi : d)(s.container, {
                width: n + Ue,
                height: o + Ue
            }, r), s.setChartSize(!0), a.setSize(n, o, i), s.maxTicks = null, ai(s.axes, function(t) {
                t.isDirty = !0, t.setScale()
            }), ai(s.series, function(t) {
                t.isDirty = !0
            }), s.isDirtyLegend = !0, s.isDirtyBox = !0, s.layOutTitles(), s.getMargins(), s.redraw(i), s.oldChartHeight = null, di(s, "resize"), p(function() {
                s && di(s, "endResize", null, function() {
                    s.isResizing -= 1
                })
            }, D(r).duration)
        },
        setChartSize: function(t) {
            var e, i, n, o, r, s, a, l = this,
                c = l.inverted,
                h = l.renderer,
                u = l.chartWidth,
                p = l.chartHeight,
                d = l.options.chart,
                f = l.spacing,
                g = l.clipOffset;
            l.plotLeft = n = fe(l.plotLeft), l.plotTop = o = fe(l.plotTop), l.plotWidth = r = ve(0, fe(u - n - l.marginRight)), l.plotHeight = s = ve(0, fe(p - o - l.marginBottom)), l.plotSizeX = c ? s : r, l.plotSizeY = c ? r : s, l.plotBorderWidth = d.plotBorderWidth || 0, l.spacingBox = h.spacingBox = {
                x: f[3],
                y: f[0],
                width: u - f[3] - f[1],
                height: p - f[0] - f[2]
            }, l.plotBox = h.plotBox = {
                x: n,
                y: o,
                width: r,
                height: s
            }, a = 2 * ge(l.plotBorderWidth / 2), e = me(ve(a, g[3]) / 2), i = me(ve(a, g[0]) / 2), l.clipBox = {
                x: e,
                y: i,
                width: ge(l.plotSizeX - ve(a, g[1]) / 2 - e),
                height: ve(0, ge(l.plotSizeY - ve(a, g[2]) / 2 - i))
            }, t || ai(l.axes, function(t) {
                t.setAxisSize(), t.setAxisTranslation()
            })
        },
        resetMargins: function() {
            var t = this;
            ai(ii, function(e, i) {
                t[e] = bi(t.margin[i], t.spacing[i])
            }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [0, 0, 0, 0]
        },
        drawChartBox: function() {
            var t, e, i = this,
                n = i.options.chart,
                o = i.renderer,
                r = i.chartWidth,
                s = i.chartHeight,
                a = i.chartBackground,
                l = i.plotBackground,
                c = i.plotBorder,
                h = i.plotBGImage,
                u = n.borderWidth || 0,
                p = n.backgroundColor,
                d = n.plotBackgroundColor,
                f = n.plotBackgroundImage,
                g = n.plotBorderWidth || 0,
                m = i.plotLeft,
                v = i.plotTop,
                y = i.plotWidth,
                b = i.plotHeight,
                x = i.plotBox,
                w = i.clipRect,
                k = i.clipBox;
            t = u + (n.shadow ? 8 : 0), (u || p) && (a ? a.animate(a.crisp({
                width: r - t,
                height: s - t
            })) : (e = {
                fill: p || Ve
            }, u && (e.stroke = n.borderColor, e["stroke-width"] = u), i.chartBackground = o.rect(t / 2, t / 2, r - t, s - t, n.borderRadius, u).attr(e).addClass(Ye + "background").add().shadow(n.shadow))), d && (l ? l.animate(x) : i.plotBackground = o.rect(m, v, y, b, 0).attr({
                fill: d
            }).add().shadow(n.plotShadow)), f && (h ? h.animate(x) : i.plotBGImage = o.image(f, m, v, y, b).add()), w ? w.animate({
                width: k.width,
                height: k.height
            }) : i.clipRect = o.clipRect(k), g && (c ? (c.strokeWidth = -g, c.animate(c.crisp({
                x: m,
                y: v,
                width: y,
                height: b
            }))) : i.plotBorder = o.rect(m, v, y, b, 0, -g).attr({
                stroke: n.plotBorderColor,
                "stroke-width": g,
                fill: Ve,
                zIndex: 1
            }).add()), i.isDirtyBox = !1
        },
        propFromSeries: function() {
            var t, e, i, n = this,
                o = n.options.chart,
                r = n.options.series;
            ai(["inverted", "angular", "polar"], function(s) {
                for (t = oi[o.type || o.defaultSeriesType], i = n[s] || o[s] || t && t.prototype[s], e = r && r.length; !i && e--;) t = oi[r[e].type], t && t.prototype[s] && (i = !0);
                n[s] = i
            })
        },
        linkSeries: function() {
            var t = this,
                e = t.series;
            ai(e, function(t) {
                t.linkedSeries.length = 0
            }), ai(e, function(e) {
                var i = e.options.linkedTo;
                r(i) && (i = ":previous" === i ? t.series[e.index - 1] : t.get(i), i && (i.linkedSeries.push(e), e.linkedParent = i, e.visible = bi(e.options.visible, i.options.visible, e.visible)))
            })
        },
        renderSeries: function() {
            ai(this.series, function(t) {
                t.translate(), t.render()
            })
        },
        renderLabels: function() {
            var t = this,
                e = t.options.labels;
            e.items && ai(e.items, function(i) {
                var n = vi(e.style, i.style),
                    r = o(n.left) + t.plotLeft,
                    s = o(n.top) + t.plotTop + 12;
                delete n.left, delete n.top, t.renderer.text(i.html, r, s).attr({
                    zIndex: 2
                }).css(n).add()
            })
        },
        render: function() {
            var t, e, i, n, o = this,
                r = o.axes,
                s = o.renderer,
                a = o.options;
            o.setTitle(), o.legend = new ji(o, a.legend), o.getStacks && o.getStacks(), o.getMargins(!0), o.setChartSize(), t = o.plotWidth, e = o.plotHeight = o.plotHeight - 21, ai(r, function(t) {
                t.setScale()
            }), o.getAxisMargins(), i = t / o.plotWidth > 1.1, n = e / o.plotHeight > 1.05, (i || n) && (o.maxTicks = null, ai(r, function(t) {
                (t.horiz && i || !t.horiz && n) && t.setTickInterval(!0)
            }), o.getMargins()), o.drawChartBox(), o.hasCartesianSeries && ai(r, function(t) {
                t.visible && t.render()
            }), o.seriesGroup || (o.seriesGroup = s.g("series-group").attr({
                zIndex: 3
            }).add()), o.renderSeries(), o.renderLabels(), o.showCredits(a.credits), o.hasRendered = !0
        },
        showCredits: function(e) {
            e.enabled && !this.credits && (this.credits = this.renderer.text(e.text, 0, 0).on("click", function() {
                e.href && (t.location.href = e.href)
            }).attr({
                align: e.position.align,
                zIndex: 8
            }).css(e.style).add().align(e.position))
        },
        destroy: function() {
            var t, e = this,
                i = e.axes,
                n = e.series,
                o = e.container,
                r = o && o.parentNode;
            for (di(e, "destroy"), Re[e.index] = z, ze--, e.renderTo.removeAttribute("data-highcharts-chart"), pi(e), t = i.length; t--;) i[t] = i[t].destroy();
            for (t = n.length; t--;) n[t] = n[t].destroy();
            ai(["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "scroller", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"], function(t) {
                var i = e[t];
                i && i.destroy && (e[t] = i.destroy())
            }), o && (o.innerHTML = "", pi(o), r && P(o));
            for (t in e) delete e[t]
        },
        isReadyToRender: function() {
            var e = this;
            return !_e && t == t.top && "complete" !== pe.readyState || Ne && !t.canvg ? (Ne ? Ei.push(function() {
                e.firstRender()
            }, e.options.global.canvasToolsURL) : pe.attachEvent("onreadystatechange", function() {
                pe.detachEvent("onreadystatechange", e.firstRender), "complete" === pe.readyState && e.firstRender()
            }), !1) : !0
        },
        firstRender: function() {
            var t = this,
                e = t.options;
            t.isReadyToRender() && (t.getContainer(), di(t, "init"), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes(), ai(e.series || [], function(e) {
                t.initSeries(e)
            }), t.linkSeries(), di(t, "beforeRender"), ue.Pointer && (t.pointer = new _i(t, e)), t.render(), t.renderer.draw(), !t.renderer.imgCount && t.onload && t.onload(), t.cloneRenderTo(!0))
        },
        onload: function() {
            var t = this;
            ai([this.callback].concat(this.callbacks), function(e) {
                e && void 0 !== t.index && e.apply(t, [t])
            }), di(t, "load"), this.onload = null
        },
        splashArray: function(t, e) {
            var i = e[t],
                n = s(i) ? i : [i, i, i, i];
            return [bi(e[t + "Top"], n[0]), bi(e[t + "Right"], n[1]), bi(e[t + "Bottom"], n[2]), bi(e[t + "Left"], n[3])]
        }
    };
    var Hi = ue.CenteredSeriesMixin = {
            getCenter: function() {
                var t, e, i, n = this.options,
                    o = this.chart,
                    r = 2 * (n.slicedOffset || 0),
                    s = o.plotWidth - 2 * r,
                    a = o.plotHeight - 2 * r,
                    l = n.center,
                    c = [bi(l[0], "50%"), bi(l[1], "50%"), n.size || "100%", n.innerSize || 0],
                    h = ye(s, a);
                for (e = 0; 4 > e; ++e) i = c[e], t = 2 > e || 2 === e && /%$/.test(i), c[e] = v(i, [s, a, h, c[2]][e]) + (t ? r : 0);
                return c[3] > c[2] && (c[3] = c[2]), c
            }
        },
        Fi = function() {};
    Fi.prototype = {
        init: function(t, e, i) {
            var n, o = this;
            return o.series = t, o.color = t.color, o.applyOptions(e, i), o.pointAttr = {}, t.options.colorByPoint && (n = t.options.colors || t.chart.options.colors, o.color = o.color || n[t.colorCounter++], t.colorCounter === n.length && (t.colorCounter = 0)), t.chart.pointCount++, o
        },
        applyOptions: function(t, e) {
            var i = this,
                n = i.series,
                o = n.options.pointValKey || n.pointValKey;
            return t = Fi.prototype.optionsToObject.call(this, t), vi(i, t), i.options = i.options ? vi(i.options, t) : t, o && (i.y = i[o]), i.isNull = null === i.x || null === i.y, void 0 === i.x && n && (i.x = void 0 === e ? n.autoIncrement() : e), i
        },
        optionsToObject: function(t) {
            var e, i = {},
                n = this.series,
                o = n.options.keys,
                r = o || n.pointArrayMap || ["y"],
                s = r.length,
                l = 0,
                c = 0;
            if (yi(t) || null === t) i[r[0]] = t;
            else if (a(t))
                for (!o && t.length > s && (e = typeof t[0], "string" === e ? i.name = t[0] : "number" === e && (i.x = t[0]), l++); s > c;) o && void 0 === t[l] || (i[r[c]] = t[l]), l++, c++;
            else "object" == typeof t && (i = t, t.dataLabels && (n._hasPointLabels = !0), t.marker && (n._hasPointMarkers = !0));
            return i
        },
        destroy: function() {
            var t, e = this,
                i = e.series,
                n = i.chart,
                o = n.hoverPoints;
            n.pointCount--, o && (e.setState(), l(o, e), o.length || (n.hoverPoints = null)), e === n.hoverPoint && e.onMouseOut(), (e.graphic || e.dataLabel) && (pi(e), e.destroyElements()), e.legendItem && n.legend.destroyItem(e);
            for (t in e) e[t] = null
        },
        destroyElements: function() {
            for (var t, e = this, i = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], n = 6; n--;) t = i[n], e[t] && (e[t] = e[t].destroy())
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                color: this.color,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        tooltipFormatter: function(t) {
            var e = this.series,
                i = e.tooltipOptions,
                n = bi(i.valueDecimals, ""),
                o = i.valuePrefix || "",
                r = i.valueSuffix || "";
            return ai(e.pointArrayMap || ["y"], function(e) {
                e = "{point." + e, (o || r) && (t = t.replace(e + "}", o + e + "}" + r)), t = t.replace(e + "}", e + ":,." + n + "f}")
            }), x(t, {
                point: this,
                series: this.series
            })
        },
        firePointEvent: function(t, e, i) {
            var n = this,
                o = this.series,
                r = o.options;
            (r.point.events[t] || n.options && n.options.events && n.options.events[t]) && this.importEvents(), "click" === t && r.allowPointSelect && (i = function(t) {
                n.select && n.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
            }), di(this, t, e, i)
        },
        visible: !0
    };
    var Bi = ue.Series = function() {};
    Bi.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: Fi,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        directTouch: !1,
        axisTypes: ["xAxis", "yAxis"],
        colorCounter: 0,
        parallelArrays: ["x", "y"],
        init: function(t, e) {
            var i, n, o = this,
                r = t.series,
                s = function(t, e) {
                    return bi(t.options.index, t._i) - bi(e.options.index, e._i)
                };
            o.chart = t, o.options = e = o.setOptions(e), o.linkedSeries = [], o.bindAxes(), vi(o, {
                name: e.name,
                state: Je,
                pointAttr: {},
                visible: e.visible !== !1,
                selected: e.selected === !0
            }), Ne && (e.animation = !1), n = e.events;
            for (i in n) ui(o, i, n[i]);
            (n && n.click || e.point && e.point.events && e.point.events.click || e.allowPointSelect) && (t.runTrackerClick = !0), o.getColor(), o.getSymbol(), ai(o.parallelArrays, function(t) {
                o[t + "Data"] = []
            }), o.setData(e.data, !1), o.isCartesian && (t.hasCartesianSeries = !0), r.push(o), o._i = r.length - 1, T(r, s), this.yAxis && T(this.yAxis.series, s), ai(r, function(t, e) {
                t.index = e, t.name = t.name || "Series " + (e + 1)
            })
        },
        bindAxes: function() {
            var t, i = this,
                n = i.options,
                o = i.chart;
            ai(i.axisTypes || [], function(r) {
                ai(o[r], function(e) {
                    t = e.options, (n[r] === t.index || n[r] !== z && n[r] === t.id || n[r] === z && 0 === t.index) && (e.series.push(i), i[r] = e, e.isDirty = !0)
                }), i[r] || i.optionalAxis === r || e(18, !0)
            })
        },
        updateParallelArrays: function(t, e) {
            var i = t.series,
                n = arguments,
                o = yi(e) ? function(n) {
                    var o = "y" === n && i.toYData ? i.toYData(t) : t[n];
                    i[n + "Data"][e] = o
                } : function(t) {
                    Array.prototype[e].apply(i[t + "Data"], Array.prototype.slice.call(n, 2))
                };
            ai(i.parallelArrays, o)
        },
        autoIncrement: function() {
            var t, e, i = this.options,
                n = this.xIncrement,
                o = i.pointIntervalUnit;
            return n = bi(n, i.pointStart, 0), this.pointInterval = e = bi(this.pointInterval, i.pointInterval, 1), o && (t = new U(n), "day" === o ? t = +t[le](t[ee]() + e) : "month" === o ? t = +t[ce](t[ie]() + e) : "year" === o && (t = +t[he](t[ne]() + e)), e = t - n), this.xIncrement = n + e, n
        },
        setOptions: function(t) {
            var e, i, o = this.chart,
                r = o.options,
                s = r.plotOptions,
                a = o.userOptions || {},
                l = a.plotOptions || {},
                h = s[this.type];
            return this.userOptions = t, e = n(h, s.series, t), this.tooltipOptions = n(W.tooltip, W.plotOptions[this.type].tooltip, a.tooltip, l.series && l.series.tooltip, l[this.type] && l[this.type].tooltip, t.tooltip), null === h.marker && delete e.marker, this.zoneAxis = e.zoneAxis, i = this.zones = (e.zones || []).slice(), !e.negativeColor && !e.negativeFillColor || e.zones || i.push({
                value: e[this.zoneAxis + "Threshold"] || e.threshold || 0,
                color: e.negativeColor,
                fillColor: e.negativeFillColor
            }), i.length && c(i[i.length - 1].value) && i.push({
                color: this.color,
                fillColor: this.fillColor
            }), e
        },
        getCyclic: function(t, e, i) {
            var n, o = this.userOptions,
                r = "_" + t + "Index",
                s = t + "Counter";
            e || (c(o[r]) ? n = o[r] : (o[r] = n = this.chart[s] % i.length, this.chart[s] += 1), e = i[n]), this[t] = e
        },
        getColor: function() {
            this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || wi[this.type].color, this.chart.options.colors)
        },
        getSymbol: function() {
            var t = this.options.marker;
            this.getCyclic("symbol", t.symbol, this.chart.options.symbols), /^url/.test(this.symbol) && (t.radius = 0)
        },
        drawLegendSymbol: Ri.drawLineMarker,
        setData: function(t, i, n, o) {
            var s, l, h, u = this,
                p = u.points,
                d = p && p.length || 0,
                f = u.options,
                g = u.chart,
                m = null,
                v = u.xAxis,
                y = v && !!v.categories,
                b = f.turboThreshold,
                x = this.xData,
                w = this.yData,
                k = u.pointArrayMap,
                T = k && k.length;
            if (t = t || [], s = t.length, i = bi(i, !0), o !== !1 && s && d === s && !u.cropped && !u.hasGroupedData && u.visible) ai(t, function(t, e) {
                p[e].update && t !== f.data[e] && p[e].update(t, !1, null, !1)
            });
            else {
                if (u.xIncrement = null, u.colorCounter = 0, ai(this.parallelArrays, function(t) {
                        u[t + "Data"].length = 0
                    }), b && s > b) {
                    for (l = 0; null === m && s > l;) m = t[l], l++;
                    if (yi(m)) {
                        var C = bi(f.pointStart, 0),
                            S = bi(f.pointInterval, 1);
                        for (l = 0; s > l; l++) x[l] = C, w[l] = t[l], C += S;
                        u.xIncrement = C
                    } else if (a(m))
                        if (T)
                            for (l = 0; s > l; l++) h = t[l], x[l] = h[0], w[l] = h.slice(1, T + 1);
                        else
                            for (l = 0; s > l; l++) h = t[l], x[l] = h[0], w[l] = h[1];
                    else e(12)
                } else
                    for (l = 0; s > l; l++) t[l] !== z && (h = {
                        series: u
                    }, u.pointClass.prototype.applyOptions.apply(h, [t[l]]), u.updateParallelArrays(h, l), y && c(h.name) && (v.names[h.x] = h.name));
                for (r(w[0]) && e(14, !0), u.data = [], u.options.data = u.userOptions.data = t, l = d; l--;) p[l] && p[l].destroy && p[l].destroy();
                v && (v.minRange = v.userMinRange), u.isDirty = u.isDirtyData = g.isDirtyBox = !0, n = !1
            }
            "point" === f.legendType && (this.processData(), this.generatePoints()), i && g.redraw(n)
        },
        processData: function(t) {
            var i, n, o, r, s, a, l, c, h = this,
                u = h.xData,
                p = h.yData,
                d = u.length,
                f = 0,
                g = h.xAxis,
                m = h.options,
                v = m.cropThreshold,
                y = h.getExtremesFromAll || m.getExtremesFromAll,
                b = h.isCartesian,
                x = g && g.val2lin,
                w = g && g.isLog;
            if (b && !h.isDirty && !g.isDirty && !h.yAxis.isDirty && !t) return !1;
            for (g && (a = g.getExtremes(), l = a.min, c = a.max), b && h.sorted && !y && (!v || d > v || h.forceCrop) && (u[d - 1] < l || u[0] > c ? (u = [], p = []) : (u[0] < l || u[d - 1] > c) && (i = this.cropData(h.xData, h.yData, l, c), u = i.xData, p = i.yData, f = i.start, n = !0)), s = u.length || 1; --s;) o = w ? x(u[s]) - x(u[s - 1]) : u[s] - u[s - 1], o > 0 && (r === z || r > o) ? r = o : 0 > o && h.requireSorting && e(15);
            h.cropped = n, h.cropStart = f, h.processedXData = u, h.processedYData = p, h.closestPointRange = r
        },
        cropData: function(t, e, i, n) {
            var o, r, s = t.length,
                a = 0,
                l = s,
                c = bi(this.cropShoulder, 1);
            for (o = 0; s > o; o++)
                if (t[o] >= i) {
                    a = ve(0, o - c);
                    break
                }
            for (r = o; s > r; r++)
                if (t[r] > n) {
                    l = r + c;
                    break
                }
            return {
                xData: t.slice(a, l),
                yData: e.slice(a, l),
                start: a,
                end: l
            }
        },
        generatePoints: function() {
            var t, e, i, n, o = this,
                r = o.options,
                s = r.data,
                a = o.data,
                l = o.processedXData,
                c = o.processedYData,
                h = o.pointClass,
                p = l.length,
                d = o.cropStart || 0,
                f = o.hasGroupedData,
                g = [];
            if (!a && !f) {
                var m = [];
                m.length = s.length, a = o.data = m
            }
            for (n = 0; p > n; n++) e = d + n, f ? (g[n] = (new h).init(o, [l[n]].concat(u(c[n]))), g[n].dataGroup = o.groupMap[n]) : (a[e] ? i = a[e] : s[e] !== z && (a[e] = i = (new h).init(o, s[e], l[n])), g[n] = i), g[n].index = e;
            if (a && (p !== (t = a.length) || f))
                for (n = 0; t > n; n++) n !== d || f || (n += p), a[n] && (a[n].destroyElements(), a[n].plotX = z);
            o.data = a, o.points = g
        },
        getExtremes: function(t) {
            var e, i, n, o, r, s, a, l = this.xAxis,
                c = this.yAxis,
                h = this.processedXData,
                u = [],
                p = 0,
                d = l.getExtremes(),
                f = d.min,
                g = d.max;
            for (t = t || this.stackedYData || this.processedYData || [], e = t.length, s = 0; e > s; s++)
                if (o = h[s], r = t[s], i = null !== r && r !== z && (!c.isLog || r.length || r > 0), n = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (h[s + 1] || o) >= f && (h[s - 1] || o) <= g, i && n)
                    if (a = r.length)
                        for (; a--;) null !== r[a] && (u[p++] = r[a]);
                    else u[p++] = r;
            this.dataMin = C(u), this.dataMax = S(u)
        },
        translate: function() {
            this.processedXData || this.processData(), this.generatePoints();
            var t, i, n, o, r, s = this,
                a = s.options,
                l = a.stacking,
                h = s.xAxis,
                u = h.categories,
                p = s.yAxis,
                d = s.points,
                f = d.length,
                g = !!s.modifyValue,
                m = a.pointPlacement,
                v = "between" === m || yi(m),
                y = a.threshold,
                b = a.startFromThreshold ? y : 0,
                x = Number.MAX_VALUE;
            for (t = 0; f > t; t++) {
                var w, k, T = d[t],
                    C = T.x,
                    S = T.y,
                    A = T.low,
                    P = l && p.stacks[(s.negStacks && (b ? 0 : y) > S ? "-" : "") + s.stackKey];
                p.isLog && null !== S && 0 >= S && (T.y = S = null, e(10)), T.plotX = i = E(ye(ve(-1e5, h.translate(C, 0, 0, 0, 1, m, "flags" === this.type)), 1e5)), l && s.visible && !T.isNull && P && P[C] && (r = s.getStackIndicator(r, C, s.index), w = P[C], k = w.points[r.key], A = k[0], S = k[1], A === b && (A = bi(y, p.min)), p.isLog && 0 >= A && (A = null), T.total = T.stackTotal = w.total, T.percentage = w.total && T.y / w.total * 100, T.stackY = S, w.setOffset(s.pointXOffset || 0, s.barW || 0)), T.yBottom = c(A) ? p.translate(A, 0, 1, 0, 1) : null, g && (S = s.modifyValue(S, T)), T.plotY = n = "number" == typeof S && 1 / 0 !== S ? ye(ve(-1e5, p.translate(S, 0, 1, 0, 1)), 1e5) : z, T.isInside = n !== z && n >= 0 && n <= p.len && i >= 0 && i <= h.len, T.clientX = v ? h.translate(C, 0, 0, 0, 1) : i, T.negative = T.y < (y || 0), T.category = u && u[T.x] !== z ? u[T.x] : T.x, T.isNull || (void 0 !== o && (x = ye(x, be(i - o))), o = i)
            }
            s.closestPointRangePx = x
        },
        getValidPoints: function(t, e) {
            var i = this.chart;
            return li(t || this.points || [], function(t) {
                return e && !i.isInsidePlot(t.plotX, t.plotY, i.inverted) ? !1 : !t.isNull
            })
        },
        setClip: function(t) {
            var e = this.chart,
                i = this.options,
                n = e.renderer,
                o = e.inverted,
                r = this.clipBox,
                s = r || e.clipBox,
                a = this.sharedClipKey || ["_sharedClip", t && t.duration, t && t.easing, s.height, i.xAxis, i.yAxis].join(","),
                l = e[a],
                c = e[a + "m"];
            l || (t && (s.width = 0, e[a + "m"] = c = n.clipRect(-99, o ? -e.plotLeft : -e.plotTop, 99, o ? e.chartWidth : e.chartHeight)), e[a] = l = n.clipRect(s)), t && (l.count += 1), i.clip !== !1 && (this.group.clip(t || r ? l : e.clipRect), this.markerGroup.clip(c), this.sharedClipKey = a), t || (l.count -= 1, l.count <= 0 && a && e[a] && (r || (e[a] = e[a].destroy()), e[a + "m"] && (e[a + "m"] = e[a + "m"].destroy())))
        },
        animate: function(t) {
            var e, i, n = this,
                o = n.chart,
                r = n.options.animation;
            r && !s(r) && (r = wi[n.type].animation), t ? n.setClip(r) : (i = this.sharedClipKey, e = o[i], e && e.animate({
                width: o.plotSizeX
            }, r), o[i + "m"] && o[i + "m"].animate({
                width: o.plotSizeX + 99
            }, r), n.animate = null)
        },
        afterAnimate: function() {
            this.setClip(), di(this, "afterAnimate")
        },
        drawPoints: function() {
            var t, e, i, n, o, r, s, a, l, c, h, u, p, d = this,
                f = d.points,
                g = d.chart,
                m = d.options,
                v = m.marker,
                y = d.pointAttr[""],
                b = d.markerGroup,
                x = d.xAxis,
                w = bi(v.enabled, x.isRadial, d.closestPointRangePx > 2 * v.radius);
            if (v.enabled !== !1 || d._hasPointMarkers)
                for (n = f.length; n--;) o = f[n], e = ge(o.plotX), i = o.plotY, l = o.graphic, c = o.marker || {}, h = !!o.marker, u = w && c.enabled === z || c.enabled, p = o.isInside, u && yi(i) && null !== o.y ? (t = o.pointAttr[o.selected ? ei : Je] || y, r = t.r, s = bi(c.symbol, d.symbol), a = 0 === s.indexOf("url"), l ? l[p ? "show" : "hide"](!0).attr(t).animate(vi({
                    x: e - r,
                    y: i - r
                }, l.symbolName ? {
                    width: 2 * r,
                    height: 2 * r
                } : {})) : p && (r > 0 || a) && (o.graphic = l = g.renderer.symbol(s, e - r, i - r, 2 * r, 2 * r, h ? c : v).attr(t).add(b))) : l && (o.graphic = l.destroy())
        },
        convertAttribs: function(t, e, i, n) {
            var o, r, s = this.pointAttrToOptions,
                a = {};
            t = t || {}, e = e || {}, i = i || {}, n = n || {};
            for (o in s) r = s[o], a[o] = bi(t[r], e[o], i[o], n[o]);
            return a
        },
        getAttribs: function() {
            var t, e, i, n, o, r, s, a, l, h = this,
                u = h.options,
                p = wi[h.type].marker ? u.marker : u,
                d = p.states,
                f = d[ti],
                g = h.color,
                m = h.options.negativeColor,
                v = {
                    stroke: g,
                    fill: g
                },
                y = h.points || [],
                b = [],
                x = h.pointAttrToOptions,
                w = h.hasPointSpecificOptions,
                k = p.lineColor,
                T = p.fillColor,
                C = u.turboThreshold,
                S = h.zones,
                A = h.zoneAxis || "y";
            if (u.marker ? (f.radius = f.radius || p.radius + f.radiusPlus, f.lineWidth = f.lineWidth || p.lineWidth + f.lineWidthPlus) : (f.color = f.color || N(f.color || g).brighten(f.brightness).get(), f.negativeColor = f.negativeColor || N(f.negativeColor || m).brighten(f.brightness).get()), b[Je] = h.convertAttribs(p, v), ai([ti, ei], function(t) {
                    b[t] = h.convertAttribs(d[t], b[Je])
                }), h.pointAttr = b, e = y.length, !C || C > e || w)
                for (; e--;) {
                    if (o = y[e], p = o.options && o.options.marker || o.options, p && p.enabled === !1 && (p.radius = 0), s = null, S.length) {
                        for (i = 0, n = S[i]; o[A] >= n.value;) n = S[++i];
                        o.color = o.fillColor = s = bi(n.color, h.color)
                    }
                    if (w = u.colorByPoint || o.color, o.options)
                        for (l in x) c(p[x[l]]) && (w = !0);
                    w ? (p = p || {}, r = [], d = p.states || {}, t = d[ti] = d[ti] || {}, (!u.marker || o.negative && !t.fillColor && !f.fillColor) && (t[h.pointAttrToOptions.fill] = t.color || !o.options.color && f[o.negative && m ? "negativeColor" : "color"] || N(o.color).brighten(t.brightness || f.brightness).get()), a = {
                        color: o.color
                    }, T || (a.fillColor = o.color), k || (a.lineColor = o.color), p.hasOwnProperty("color") && !p.color && delete p.color, s && !f.fillColor && (t.fillColor = s), r[Je] = h.convertAttribs(vi(a, p), b[Je]), r[ti] = h.convertAttribs(d[ti], b[ti], r[Je]), r[ei] = h.convertAttribs(d[ei], b[ei], r[Je])) : r = b, o.pointAttr = r
                }
        },
        destroy: function() {
            var t, e, i, n, o, r = this,
                s = r.chart,
                a = /AppleWebKit\/533/.test(Ce),
                c = r.data || [];
            for (di(r, "destroy"), pi(r), ai(r.axisTypes || [], function(t) {
                    o = r[t], o && (l(o.series, r), o.isDirty = o.forceRedraw = !0)
                }), r.legendItem && r.chart.legend.destroyItem(r), e = c.length; e--;) i = c[e], i && i.destroy && i.destroy();
            r.points = null, clearTimeout(r.animationTimeout);
            for (n in r) r[n] instanceof I && !r[n].survive && (t = a && "group" === n ? "hide" : "destroy", r[n][t]());
            s.hoverSeries === r && (s.hoverSeries = null), l(s.series, r);
            for (n in r) delete r[n]
        },
        getGraphPath: function(t, e, i) {
            var n, o, r = this,
                s = r.options,
                a = s.step,
                l = [];
            return t = t || r.points, n = t.reversed, n && t.reverse(), a = {
                right: 1,
                center: 2
            }[a] || a && 3, a && n && (a = 4 - a), !s.connectNulls || e || i || (t = this.getValidPoints(t)), ai(t, function(n, h) {
                var u, p = n.plotX,
                    d = n.plotY,
                    f = t[h - 1];
                (n.leftCliff || f && f.rightCliff) && !i && (o = !0), n.isNull && !c(e) && h > 0 ? o = !s.connectNulls : n.isNull && !e ? o = !0 : (0 === h || o ? u = [Ke, n.plotX, n.plotY] : r.getPointSpline ? u = r.getPointSpline(t, n, h) : a ? (u = 1 === a ? [Ze, f.plotX, d] : 2 === a ? [Ze, (f.plotX + p) / 2, f.plotY, Ze, (f.plotX + p) / 2, d] : [Ze, p, f.plotY], u.push(Ze, p, d)) : u = [Ze, p, d], l.push.apply(l, u), o = !1)
            }), r.graphPath = l, l
        },
        drawGraph: function() {
            var t = this,
                e = this.options,
                i = [
                    ["graph", e.lineColor || this.color, e.dashStyle]
                ],
                n = e.lineWidth,
                o = "square" !== e.linecap,
                r = (this.gappedPath || this.getGraphPath).call(this),
                s = this.fillGraph && this.color || Ve,
                a = this.zones;
            ai(a, function(n, o) {
                i.push(["zoneGraph" + o, n.color || t.color, n.dashStyle || e.dashStyle])
            }), ai(i, function(i, a) {
                var l, c = i[0],
                    h = t[c];
                h ? h.animate({
                    d: r
                }) : (n || s) && r.length && (l = {
                    stroke: i[1],
                    "stroke-width": n,
                    fill: s,
                    zIndex: 1
                }, i[2] ? l.dashstyle = i[2] : o && (l["stroke-linecap"] = l["stroke-linejoin"] = "round"), t[c] = t.chart.renderer.path(r).attr(l).add(t.group).shadow(2 > a && e.shadow))
            })
        },
        applyZones: function() {
            var t, e, i, n, o, r, s, a = this,
                l = this.chart,
                c = l.renderer,
                h = this.zones,
                u = this.clips || [],
                p = this.graph,
                d = this.area,
                f = ve(l.chartWidth, l.chartHeight),
                g = this[(this.zoneAxis || "y") + "Axis"],
                m = g.reversed,
                v = l.inverted,
                y = g.horiz,
                b = !1;
            h.length && (p || d) && g.min !== z && (p && p.hide(), d && d.hide(), n = g.getExtremes(), ai(h, function(h, x) {
                t = m ? y ? l.plotWidth : 0 : y ? 0 : g.toPixels(n.min), t = ye(ve(bi(e, t), 0), f), e = ye(ve(fe(g.toPixels(bi(h.value, n.max), !0)), 0), f), b && (t = e = g.toPixels(n.max)), o = Math.abs(t - e), r = ye(t, e), s = ve(t, e), g.isXAxis ? (i = {
                    x: v ? s : r,
                    y: 0,
                    width: o,
                    height: f
                }, y || (i.x = l.plotHeight - i.x)) : (i = {
                    x: 0,
                    y: v ? s : r,
                    width: f,
                    height: o
                }, y && (i.y = l.plotWidth - i.y)), l.inverted && c.isVML && (i = g.isXAxis ? {
                    x: 0,
                    y: m ? r : s,
                    height: i.width,
                    width: l.chartWidth
                } : {
                    x: i.y - l.plotLeft - l.spacingBox.x,
                    y: 0,
                    width: i.height,
                    height: l.chartHeight
                }), u[x] ? u[x].animate(i) : (u[x] = c.clipRect(i), p && a["zoneGraph" + x].clip(u[x]), d && a["zoneArea" + x].clip(u[x])), b = h.value > n.max
            }), this.clips = u)
        },
        invertGroups: function() {
            function t() {
                var t = {
                    width: e.yAxis.len,
                    height: e.xAxis.len
                };
                ai(["group", "markerGroup"], function(i) {
                    e[i] && e[i].attr(t).invert()
                })
            }
            var e = this,
                i = e.chart;
            e.xAxis && (ui(i, "resize", t), ui(e, "destroy", function() {
                pi(i, "resize", t)
            }), t(), e.invertGroups = t)
        },
        plotGroup: function(t, e, i, n, o) {
            var r = this[t],
                s = !r;
            return s && (this[t] = r = this.chart.renderer.g(e).attr({
                zIndex: n || .1
            }).add(o), r.addClass("highcharts-series-" + this.index)), r.attr({
                visibility: i
            })[s ? "attr" : "animate"](this.getPlotBox()), r
        },
        getPlotBox: function() {
            var t = this.chart,
                e = this.xAxis,
                i = this.yAxis;
            return t.inverted && (e = i, i = this.xAxis), {
                translateX: e ? e.left : t.plotLeft,
                translateY: i ? i.top : t.plotTop,
                scaleX: 1,
                scaleY: 1
            }
        },
        render: function() {
            var t, e = this,
                i = e.chart,
                n = e.options,
                o = !!e.animate && i.renderer.isSVG && D(n.animation).duration,
                r = e.visible ? "inherit" : "hidden",
                s = n.zIndex,
                a = e.hasRendered,
                l = i.seriesGroup;
            t = e.plotGroup("group", "series", r, s, l), e.markerGroup = e.plotGroup("markerGroup", "markers", r, s, l), o && e.animate(!0), e.getAttribs(), t.inverted = e.isCartesian ? i.inverted : !1, e.drawGraph && (e.drawGraph(), e.applyZones()), ai(e.points, function(t) {
                t.redraw && t.redraw()
            }), e.drawDataLabels && e.drawDataLabels(), e.visible && e.drawPoints(), e.drawTracker && e.options.enableMouseTracking !== !1 && e.drawTracker(), i.inverted && e.invertGroups(), n.clip === !1 || e.sharedClipKey || a || t.clip(i.clipRect), o && e.animate(), a || (e.animationTimeout = p(function() {
                e.afterAnimate()
            }, o)), e.isDirty = e.isDirtyData = !1, e.hasRendered = !0
        },
        redraw: function() {
            var t = this,
                e = t.chart,
                i = t.isDirty || t.isDirtyData,
                n = t.group,
                o = t.xAxis,
                r = t.yAxis;
            n && (e.inverted && n.attr({
                width: e.plotWidth,
                height: e.plotHeight
            }), n.animate({
                translateX: bi(o && o.left, e.plotLeft),
                translateY: bi(r && r.top, e.plotTop)
            })), t.translate(), t.render(), i && delete this.kdTree
        },
        kdDimensions: 1,
        kdAxisArray: ["clientX", "plotY"],
        searchPoint: function(t, e) {
            var i = this,
                n = i.xAxis,
                o = i.yAxis,
                r = i.chart.inverted;
            return this.searchKDTree({
                clientX: r ? n.len - t.chartY + n.pos : t.chartX - n.pos,
                plotY: r ? o.len - t.chartX + o.pos : t.chartY - o.pos
            }, e)
        },
        buildKDTree: function() {
            function t(e, n, o) {
                var r, s, a = e && e.length;
                return a ? (r = i.kdAxisArray[n % o], e.sort(function(t, e) {
                    return t[r] - e[r]
                }), s = Math.floor(a / 2), {
                    point: e[s],
                    left: t(e.slice(0, s), n + 1, o),
                    right: t(e.slice(s + 1), n + 1, o)
                }) : void 0
            }

            function e() {
                i.kdTree = t(i.getValidPoints(null, !i.directTouch), n, n)
            }
            var i = this,
                n = i.kdDimensions;
            delete i.kdTree, p(e, i.options.kdNow ? 0 : 1)
        },
        searchKDTree: function(t, e) {
            function i(t, e) {
                var i = c(t[r]) && c(e[r]) ? Math.pow(t[r] - e[r], 2) : null,
                    n = c(t[s]) && c(e[s]) ? Math.pow(t[s] - e[s], 2) : null,
                    o = (i || 0) + (n || 0);
                e.dist = c(o) ? Math.sqrt(o) : Number.MAX_VALUE, e.distX = c(i) ? Math.sqrt(i) : Number.MAX_VALUE
            }

            function n(t, e, r, s) {
                var l, c, h, u, p, d = e.point,
                    f = o.kdAxisArray[r % s],
                    g = d;
                return i(t, d), l = t[f] - d[f], c = 0 > l ? "left" : "right", h = 0 > l ? "right" : "left", e[c] && (u = n(t, e[c], r + 1, s), g = u[a] < g[a] ? u : d), e[h] && Math.sqrt(l * l) < g[a] && (p = n(t, e[h], r + 1, s), g = p[a] < g[a] ? p : g), g
            }
            var o = this,
                r = this.kdAxisArray[0],
                s = this.kdAxisArray[1],
                a = e ? "distX" : "dist";
            return this.kdTree || this.buildKDTree(), this.kdTree ? n(t, this.kdTree, this.kdDimensions, this.kdDimensions) : void 0
        }
    }, R.prototype = {
        destroy: function() {
            A(this, this.axis)
        },
        render: function(t) {
            var e = this.options,
                i = e.format,
                n = i ? x(i, this) : e.formatter.call(this);
            this.label ? this.label.attr({
                text: n,
                visibility: "hidden"
            }) : this.label = this.axis.chart.renderer.text(n, null, null, e.useHTML).css(e.style).attr({
                align: this.textAlign,
                rotation: e.rotation,
                visibility: qe
            }).add(t)
        },
        setOffset: function(t, e) {
            var i, n = this,
                o = n.axis,
                r = o.chart,
                s = r.inverted,
                a = o.reversed,
                l = this.isNegative && !a || !this.isNegative && a,
                c = o.translate(o.usePercentage ? 100 : this.total, 0, 0, 0, 1),
                h = o.translate(0),
                u = be(c - h),
                p = r.xAxis[0].translate(this.x) + t,
                d = r.plotHeight,
                f = {
                    x: s ? l ? c : c - u : p,
                    y: s ? d - p - e : l ? d - c - u : d - c,
                    width: s ? u : e,
                    height: s ? e : u
                },
                g = this.label;
            g && (g.align(this.alignOptions, null, f), i = g.alignAttr, g[this.options.crop === !1 || r.isInsidePlot(i.x, i.y) ? "show" : "hide"](!0))
        }
    }, zi.prototype.getStacks = function() {
        var t = this;
        ai(t.yAxis, function(t) {
            t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks)
        }), ai(t.series, function(e) {
            !e.options.stacking || e.visible !== !0 && t.options.chart.ignoreHiddenSeries !== !1 || (e.stackKey = e.type + bi(e.options.stack, ""))
        })
    }, Li.prototype.buildStacks = function() {
        var t, e, i = this.series,
            n = bi(this.options.reversedStacks, !0),
            o = i.length;
        if (!this.isXAxis) {
            for (this.usePercentage = !1, e = o; e--;) i[n ? e : o - e - 1].setStackedPoints();
            for (e = o; e--;) t = i[n ? e : o - e - 1], t.setStackCliffs && t.setStackCliffs();
            if (this.usePercentage)
                for (e = 0; o > e; e++) i[e].setPercentStacks()
        }
    }, Li.prototype.renderStackTotals = function() {
        var t, e, i, n = this,
            o = n.chart,
            r = o.renderer,
            s = n.stacks,
            a = n.stackTotalGroup;
        a || (n.stackTotalGroup = a = r.g("stack-labels").attr({
            visibility: Ge,
            zIndex: 6
        }).add()), a.translate(o.plotLeft, o.plotTop);
        for (t in s) {
            e = s[t];
            for (i in e) e[i].render(a)
        }
    }, Li.prototype.resetStacks = function() {
        var t, e, i = this.stacks;
        if (!this.isXAxis)
            for (t in i)
                for (e in i[t]) i[t][e].touched < this.stacksTouched ? (i[t][e].destroy(), delete i[t][e]) : (i[t][e].total = null, i[t][e].cum = 0)
    }, Li.prototype.cleanStacks = function() {
        var t, e, i;
        if (!this.isXAxis) {
            this.oldStacks && (t = this.stacks = this.oldStacks);
            for (e in t)
                for (i in t[e]) t[e][i].cum = t[e][i].total
        }
    }, Bi.prototype.setStackedPoints = function() {
        if (this.options.stacking && (this.visible === !0 || this.chart.options.chart.ignoreHiddenSeries === !1)) {
            var t, e, i, n, o, r, s, a, l, c = this,
                h = c.processedXData,
                u = c.processedYData,
                p = [],
                d = u.length,
                f = c.options,
                g = f.threshold,
                m = f.startFromThreshold ? g : 0,
                v = f.stack,
                y = f.stacking,
                b = c.stackKey,
                x = "-" + b,
                w = c.negStacks,
                k = c.yAxis,
                T = k.stacks,
                C = k.oldStacks;
            for (k.stacksTouched += 1, s = 0; d > s; s++) a = h[s], l = u[s], t = c.getStackIndicator(t, a, c.index), r = t.key, e = w && (m ? 0 : g) > l, o = e ? x : b, T[o] || (T[o] = {}), T[o][a] || (C[o] && C[o][a] ? (T[o][a] = C[o][a], T[o][a].total = null) : T[o][a] = new R(k, k.options.stackLabels, e, a, v)), i = T[o][a], null !== l && (i.points[r] = i.points[c.index] = [bi(i.cum, m)], i.touched = k.stacksTouched, t.index > 0 && c.singleStacks === !1 && (i.points[r][0] = i.points[c.index + "," + a + ",0"][0])), "percent" === y ? (n = e ? b : x, w && T[n] && T[n][a] ? (n = T[n][a], i.total = n.total = ve(n.total, i.total) + be(l) || 0) : i.total = E(i.total + (be(l) || 0))) : i.total = E(i.total + (l || 0)), i.cum = bi(i.cum, m) + (l || 0), null !== l && (i.points[r].push(i.cum), p[s] = i.cum);
            "percent" === y && (k.usePercentage = !0), this.stackedYData = p, k.oldStacks = {}
        }
    }, Bi.prototype.setPercentStacks = function() {
        var t, e = this,
            i = e.stackKey,
            n = e.yAxis.stacks,
            o = e.processedXData;
        ai([i, "-" + i], function(i) {
            for (var r, s, a, l, c = o.length; c--;) r = o[c], t = e.getStackIndicator(t, r, e.index), s = n[i] && n[i][r], a = s && s.points[t.key], a && (l = s.total ? 100 / s.total : 0, a[0] = E(a[0] * l), a[1] = E(a[1] * l), e.stackedYData[c] = a[1])
        })
    }, Bi.prototype.getStackIndicator = function(t, e, i) {
        return c(t) && t.x === e ? t.index++ : t = {
            x: e,
            index: 0
        }, t.key = [i, e, t.index].join(","), t
    }, vi(zi.prototype, {
        addSeries: function(t, e, i) {
            var n, o = this;
            return t && (e = bi(e, !0), di(o, "addSeries", {
                options: t
            }, function() {
                n = o.initSeries(t), o.isDirtyLegend = !0, o.linkSeries(), e && o.redraw(i)
            })), n
        },
        addAxis: function(t, e, i, o) {
            var r = e ? "xAxis" : "yAxis",
                s = this.options,
                a = n(t, {
                    index: this[r].length,
                    isX: e
                });
            new Li(this, a), s[r] = u(s[r] || {}), s[r].push(a), bi(i, !0) && this.redraw(o)
        },
        showLoading: function(t) {
            var e = this,
                i = e.options,
                n = e.loadingDiv,
                o = i.loading,
                r = function() {
                    n && d(n, {
                        left: e.plotLeft + Ue,
                        top: e.plotTop + Ue,
                        width: e.plotWidth + Ue,
                        height: e.plotHeight + Ue
                    })
                };
            n || (e.loadingDiv = n = f(Be, {
                className: Ye + "loading"
            }, vi(o.style, {
                zIndex: 10,
                display: Ve
            }), e.container), e.loadingSpan = f("span", null, o.labelStyle, n), ui(e, "redraw", r)), e.loadingSpan.innerHTML = t || i.lang.loading, e.loadingShown || (d(n, {
                opacity: 0,
                display: ""
            }), fi(n, {
                opacity: o.style.opacity
            }, {
                duration: o.showDuration || 0
            }), e.loadingShown = !0), r()
        },
        hideLoading: function() {
            var t = this.options,
                e = this.loadingDiv;
            e && fi(e, {
                opacity: 0
            }, {
                duration: t.loading.hideDuration || 100,
                complete: function() {
                    d(e, {
                        display: Ve
                    })
                }
            }), this.loadingShown = !1
        }
    }), vi(Fi.prototype, {
        update: function(t, e, i, n) {
            function o() {
                l.applyOptions(t), null === l.y && h && (l.graphic = h.destroy()), s(t) && !a(t) && (l.redraw = function() {
                    h && h.element && t && t.marker && t.marker.symbol && (l.graphic = h.destroy()), t && t.dataLabels && l.dataLabel && (l.dataLabel = l.dataLabel.destroy()), l.redraw = null
                }), r = l.index, c.updateParallelArrays(l, r), d && l.name && (d[l.x] = l.name), p.data[r] = s(p.data[r]) && !a(p.data[r]) ? l.options : t, c.isDirty = c.isDirtyData = !0, !c.fixedBox && c.hasCartesianSeries && (u.isDirtyBox = !0), "point" === p.legendType && (u.isDirtyLegend = !0), e && u.redraw(i)
            }
            var r, l = this,
                c = l.series,
                h = l.graphic,
                u = c.chart,
                p = c.options,
                d = c.xAxis && c.xAxis.names;
            e = bi(e, !0), n === !1 ? o() : l.firePointEvent("update", {
                options: t
            }, o)
        },
        remove: function(t, e) {
            this.series.removePoint(si(this, this.series.data), t, e)
        }
    }), vi(Bi.prototype, {
        addPoint: function(t, e, i, n) {
            var o, r, s, a, l = this,
                c = l.options,
                h = l.data,
                u = l.graph,
                p = l.area,
                d = l.chart,
                f = l.xAxis && l.xAxis.names,
                g = u && u.shift || 0,
                m = ["graph", "area"],
                v = c.data,
                y = l.xData;
            if (L(n, d), i) {
                for (s = l.zones.length; s--;) m.push("zoneGraph" + s, "zoneArea" + s);
                ai(m, function(t) {
                    l[t] && (l[t].shift = g + (c.step ? 2 : 1))
                })
            }
            if (p && (p.isArea = !0), e = bi(e, !0), o = {
                    series: l
                }, l.pointClass.prototype.applyOptions.apply(o, [t]), a = o.x, s = y.length, l.requireSorting && a < y[s - 1])
                for (r = !0; s && y[s - 1] > a;) s--;
            l.updateParallelArrays(o, "splice", s, 0, 0), l.updateParallelArrays(o, s), f && o.name && (f[a] = o.name), v.splice(s, 0, t), r && (l.data.splice(s, 0, null), l.processData()), "point" === c.legendType && l.generatePoints(), i && (h[0] && h[0].remove ? h[0].remove(!1) : (h.shift(), l.updateParallelArrays(o, "shift"), v.shift())), l.isDirty = !0, l.isDirtyData = !0, e && (l.getAttribs(), d.redraw())
        },
        removePoint: function(t, e, i) {
            var n = this,
                o = n.data,
                r = o[t],
                s = n.points,
                a = n.chart,
                l = function() {
                    s && s.length === o.length && s.splice(t, 1), o.splice(t, 1), n.options.data.splice(t, 1), n.updateParallelArrays(r || {
                        series: n
                    }, "splice", t, 1), r && r.destroy(), n.isDirty = !0, n.isDirtyData = !0, e && a.redraw()
                };
            L(i, a), e = bi(e, !0), r ? r.firePointEvent("remove", null, l) : l()
        },
        remove: function(t, e) {
            var i = this,
                n = i.chart;
            di(i, "remove", null, function() {
                i.destroy(), n.isDirtyLegend = n.isDirtyBox = !0, n.linkSeries(), bi(t, !0) && n.redraw(e)
            })
        },
        update: function(t, e) {
            var i, o = this,
                r = this.chart,
                s = this.userOptions,
                a = this.type,
                l = oi[a].prototype,
                c = ["group", "markerGroup", "dataLabelsGroup"];
            (t.type && t.type !== a || void 0 !== t.zIndex) && (c.length = 0), ai(c, function(t) {
                c[t] = o[t], delete o[t]
            }), t = n(s, {
                animation: !1,
                index: this.index,
                pointStart: this.xData[0]
            }, {
                data: this.options.data
            }, t), this.remove(!1);
            for (i in l) this[i] = z;
            vi(this, oi[t.type || a].prototype), ai(c, function(t) {
                o[t] = c[t]
            }), this.init(r, t), r.linkSeries(), bi(e, !0) && r.redraw(!1)
        }
    }), vi(Li.prototype, {
        update: function(t, e) {
            var i = this.chart;
            t = i.options[this.coll][this.options.index] = n(this.userOptions, t), this.destroy(!0), this._addedPlotLB = this.chart._labelPanes = z, this.init(i, vi(t, {
                events: z
            })), i.isDirtyBox = !0, bi(e, !0) && i.redraw()
        },
        remove: function(t) {
            for (var e = this.chart, i = this.coll, n = this.series, o = n.length; o--;) n[o] && n[o].remove(!1);
            l(e.axes, this), l(e[i], this), e.options[i].splice(this.options.index, 1), ai(e[i], function(t, e) {
                t.options.index = e
            }), this.destroy(), e.isDirtyBox = !0, bi(t, !0) && e.redraw()
        },
        setTitle: function(t, e) {
            this.update({
                title: t
            }, e)
        },
        setCategories: function(t, e) {
            this.update({
                categories: t
            }, e)
        }
    });
    var Wi = g(Bi);
    oi.line = Wi, wi.area = n(ki, {
        softThreshold: !1,
        threshold: 0
    });
    var Xi = g(Bi, {
        type: "area",
        singleStacks: !1,
        getStackPoints: function() {
            var t, e, i, n = this,
                o = [],
                r = [],
                s = this.xAxis,
                a = this.yAxis,
                l = a.stacks[this.stackKey],
                c = {},
                h = this.points,
                u = n.index,
                p = a.series,
                d = p.length,
                f = bi(a.options.reversedStacks, !0) ? 1 : -1;
            if (this.options.stacking) {
                for (e = 0; e < h.length; e++) c[h[e].x] = h[e];
                for (i in l) null !== l[i].total && r.push(i);
                r.sort(function(t, e) {
                    return t - e
                }), t = hi(p, function() {
                    return this.visible
                }), ai(r, function(i, n) {
                    var h, p, g = 0;
                    if (c[i] && !c[i].isNull) o.push(c[i]), ai([-1, 1], function(o) {
                        var s = 1 === o ? "rightNull" : "leftNull",
                            a = 1 === o ? "rightCliff" : "leftCliff",
                            g = 0,
                            m = l[r[n + o]];
                        if (m)
                            for (e = u; e >= 0 && d > e;) h = m.points[e], h || (e === u ? c[i][s] = !0 : t[e] && (p = l[i].points[e], p && (g -= p[1] - p[0]))), e += f;
                        c[i][a] = g
                    });
                    else {
                        for (e = u; e >= 0 && d > e;) {
                            if (h = l[i].points[e]) {
                                g = h[1];
                                break
                            }
                            e += f
                        }
                        g = a.toPixels(g, !0), o.push({
                            isNull: !0,
                            plotX: s.toPixels(i, !0),
                            plotY: g,
                            yBottom: g
                        })
                    }
                })
            }
            return o
        },
        getGraphPath: function(t) {
            var e, i, n, o, r, s, a, l, c = Bi.prototype.getGraphPath,
                h = this.options,
                u = h.stacking,
                p = this.yAxis,
                d = [],
                f = [],
                g = this.index,
                m = p.stacks[this.stackKey],
                v = h.threshold,
                y = p.getThreshold(h.threshold),
                b = h.connectNulls || "percent" === u,
                x = function(e, i, n) {
                    var o, r, a = t[e],
                        l = u && m[a.x].points[g],
                        c = a[n + "Null"] || 0,
                        h = a[n + "Cliff"] || 0,
                        b = !0;
                    h || c ? (o = (c ? l[0] : l[1]) + h, r = l[0] + h, b = !!c) : !u && t[i] && t[i].isNull && (o = r = v), void 0 !== o && (f.push({
                        plotX: s,
                        plotY: null === o ? y : p.getThreshold(o),
                        isNull: b
                    }), d.push({
                        plotX: s,
                        plotY: null === r ? y : p.getThreshold(r)
                    }))
                };
            for (t = t || this.points, u && (t = this.getStackPoints()), o = 0; o < t.length; o++) a = t[o].isNull, s = bi(t[o].rectPlotX, t[o].plotX), l = bi(t[o].yBottom, y), (!a || b) && (b || x(o, o - 1, "left"), a && !u && b || (f.push(t[o]), d.push({
                x: o,
                plotX: s,
                plotY: l
            })), b || x(o, o + 1, "right"));
            return i = c.call(this, f, !0, !0), d.reversed = !0, n = c.call(this, d, !0, !0), n.length && (n[0] = Ze), r = i.concat(n), e = c.call(this, f, !1, b), this.areaPath = r, e
        },
        drawGraph: function() {
            this.areaPath = [], Bi.prototype.drawGraph.apply(this);
            var t = this,
                e = this.areaPath,
                i = this.options,
                n = this.zones,
                o = [
                    ["area", this.color, i.fillColor]
                ];
            ai(n, function(e, n) {
                o.push(["zoneArea" + n, e.color || t.color, e.fillColor || i.fillColor])
            }), ai(o, function(n) {
                var o, r = n[0],
                    s = t[r];
                s ? s.animate({
                    d: e
                }) : (o = {
                    fill: n[2] || n[1],
                    zIndex: 0
                }, n[2] || (o["fill-opacity"] = bi(i.fillOpacity, .75)), t[r] = t.chart.renderer.path(e).attr(o).add(t.group))
            })
        },
        drawLegendSymbol: Ri.drawRectangle
    });
    oi.area = Xi, wi.spline = n(ki);
    var qi = g(Bi, {
        type: "spline",
        getPointSpline: function(t, e, i) {
            var n, o, r, s, a, l = 1.5,
                c = l + 1,
                h = e.plotX,
                u = e.plotY,
                p = t[i - 1],
                d = t[i + 1];
            if (p && !p.isNull && d && !d.isNull) {
                var f = p.plotX,
                    g = p.plotY,
                    m = d.plotX,
                    v = d.plotY,
                    y = 0;
                n = (l * h + f) / c, o = (l * u + g) / c, r = (l * h + m) / c, s = (l * u + v) / c, r !== n && (y = (s - o) * (r - h) / (r - n) + u - s), o += y, s += y, o > g && o > u ? (o = ve(g, u), s = 2 * u - o) : g > o && u > o && (o = ye(g, u), s = 2 * u - o), s > v && s > u ? (s = ve(v, u), o = 2 * u - s) : v > s && u > s && (s = ye(v, u), o = 2 * u - s), e.rightContX = r, e.rightContY = s
            }
            return a = ["C", bi(p.rightContX, p.plotX), bi(p.rightContY, p.plotY), bi(n, h), bi(o, u), h, u], p.rightContX = p.rightContY = null, a
        }
    });
    oi.spline = qi, wi.areaspline = n(wi.area);
    var Yi = Xi.prototype,
        Gi = g(qi, {
            type: "areaspline",
            getStackPoints: Yi.getStackPoints,
            getGraphPath: Yi.getGraphPath,
            setStackCliffs: Yi.setStackCliffs,
            drawGraph: Yi.drawGraph,
            drawLegendSymbol: Ri.drawRectangle
        });
    oi.areaspline = Gi, wi.column = n(ki, {
        borderColor: "#FFFFFF",
        borderRadius: 0,
        groupPadding: .2,
        marker: null,
        pointPadding: .1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {
                brightness: .1,
                shadow: !1,
                halo: !1
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        },
        dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
        },
        softThreshold: !1,
        startFromThreshold: !0,
        stickyTracking: !1,
        tooltip: {
            distance: 6
        },
        threshold: 0
    });
    var Ui = g(Bi, {
        type: "column",
        pointAttrToOptions: {
            stroke: "borderColor",
            fill: "color",
            r: "borderRadius"
        },
        cropShoulder: 0,
        directTouch: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        negStacks: !0,
        init: function() {
            Bi.prototype.init.apply(this, arguments);
            var t = this,
                e = t.chart;
            e.hasRendered && ai(e.series, function(e) {
                e.type === t.type && (e.isDirty = !0)
            })
        },
        getColumnMetrics: function() {
            var t, e = this,
                i = e.options,
                n = e.xAxis,
                o = e.yAxis,
                r = n.reversed,
                s = {},
                a = 0;
            i.grouping === !1 ? a = 1 : ai(e.chart.series, function(i) {
                var n, r = i.options,
                    l = i.yAxis;
                i.type === e.type && i.visible && o.len === l.len && o.pos === l.pos && (r.stacking ? (t = i.stackKey, s[t] === z && (s[t] = a++), n = s[t]) : r.grouping !== !1 && (n = a++), i.columnIndex = n)
            });
            var l = ye(be(n.transA) * (n.ordinalSlope || i.pointRange || n.closestPointRange || n.tickInterval || 1), n.len),
                c = l * i.groupPadding,
                h = l - 2 * c,
                u = h / a,
                p = ye(i.maxPointWidth || n.len, bi(i.pointWidth, u * (1 - 2 * i.pointPadding))),
                d = (u - p) / 2,
                f = (e.columnIndex || 0) + (r ? 1 : 0),
                g = d + (c + f * u - l / 2) * (r ? -1 : 1);
            return e.columnMetrics = {
                width: p,
                offset: g
            }, e.columnMetrics
        },
        crispCol: function(t, e, i, n) {
            var o, r, s, a = this.chart,
                l = this.borderWidth,
                c = -(l % 2 ? .5 : 0),
                h = l % 2 ? .5 : 1;
            return a.inverted && a.renderer.isVML && (h += 1), o = Math.round(t + i) + c, t = Math.round(t) + c, i = o - t, r = Math.round(e + n) + h, s = be(e) <= .5 && r > .5, e = Math.round(e) + h, n = r - e, s && n && (e -= 1, n += 1), {
                x: t,
                y: e,
                width: i,
                height: n
            }
        },
        translate: function() {
            var t = this,
                e = t.chart,
                i = t.options,
                n = t.borderWidth = bi(i.borderWidth, t.closestPointRange * t.xAxis.transA < 2 ? 0 : 1),
                o = t.yAxis,
                r = i.threshold,
                s = t.translatedThreshold = o.getThreshold(r),
                a = bi(i.minPointLength, 5),
                l = t.getColumnMetrics(),
                c = l.width,
                h = t.barW = ve(c, 1 + 2 * n),
                u = t.pointXOffset = l.offset;
            e.inverted && (s -= .5), i.pointPadding && (h = me(h)), Bi.prototype.translate.apply(t), ai(t.points, function(i) {
                var n, r = ye(bi(i.yBottom, s), 9e4),
                    l = 999 + be(r),
                    p = ye(ve(-l, i.plotY), o.len + l),
                    d = i.plotX + u,
                    f = h,
                    g = ye(p, r),
                    m = ve(p, r) - g;
                be(m) < a && a && (m = a, n = !o.reversed && !i.negative || o.reversed && i.negative, g = be(g - s) > a ? r - a : s - (n ? a : 0)), i.barX = d, i.pointWidth = c, i.tooltipPos = e.inverted ? [o.len + o.pos - e.plotLeft - p, t.xAxis.len - d - f / 2, m] : [d + f / 2, p + o.pos - e.plotTop, m], i.shapeType = "rect", i.shapeArgs = t.crispCol(d, g, f, m)
            })
        },
        getSymbol: je,
        drawLegendSymbol: Ri.drawRectangle,
        drawGraph: je,
        drawPoints: function() {
            var t, e, i = this,
                o = this.chart,
                r = i.options,
                s = o.renderer,
                a = r.animationLimit || 250;
            ai(i.points, function(l) {
                var h, u = l.plotY,
                    p = l.graphic;
                yi(u) && null !== l.y ? (t = l.shapeArgs, h = c(i.borderWidth) ? {
                    "stroke-width": i.borderWidth
                } : {}, e = l.pointAttr[l.selected ? ei : Je] || i.pointAttr[Je], p ? (gi(p), p.attr(h).attr(e)[o.pointCount < a ? "animate" : "attr"](n(t))) : l.graphic = p = s[l.shapeType](t).attr(h).attr(e).add(l.group || i.group).shadow(r.shadow, null, r.stacking && !r.borderRadius)) : p && (l.graphic = p.destroy())
            })
        },
        animate: function(t) {
            var e, i = this,
                n = this.yAxis,
                o = i.options,
                r = this.chart.inverted,
                s = {};
            _e && (t ? (s.scaleY = .001, e = ye(n.pos + n.len, ve(n.pos, n.toPixels(o.threshold))), r ? s.translateX = e - n.len : s.translateY = e, i.group.attr(s)) : (s[r ? "translateX" : "translateY"] = n.pos, i.group.animate(s, vi(D(i.options.animation), {
                step: function(t, e) {
                    i.group.attr({
                        scaleY: ve(.001, e.pos)
                    })
                }
            })), i.animate = null))
        },
        remove: function() {
            var t = this,
                e = t.chart;
            e.hasRendered && ai(e.series, function(e) {
                e.type === t.type && (e.isDirty = !0)
            }), Bi.prototype.remove.apply(t, arguments)
        }
    });
    oi.column = Ui, wi.bar = n(wi.column);
    var Vi = g(Ui, {
        type: "bar",
        inverted: !0
    });
    oi.bar = Vi, wi.scatter = n(ki, {
        lineWidth: 0,
        marker: {
            enabled: !0
        },
        tooltip: {
            headerFormat: '<span style="color:{point.color}">?</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        }
    });
    var Ki = g(Bi, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
        takeOrdinalPosition: !1,
        kdDimensions: 2,
        drawGraph: function() {
            this.options.lineWidth && Bi.prototype.drawGraph.call(this)
        }
    });
    oi.scatter = Ki, wi.pie = n(ki, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
            distance: 30,
            enabled: !0,
            formatter: function() {
                return null === this.y ? void 0 : this.point.name
            },
            x: 0
        },
        ignoreHiddenPoint: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        states: {
            hover: {
                brightness: .1,
                shadow: !1
            }
        },
        stickyTracking: !1,
        tooltip: {
            followPointer: !0
        }
    });
    var Zi = g(Fi, {
            init: function() {
                Fi.prototype.init.apply(this, arguments);
                var t, e = this;
                return e.name = bi(e.name, "Slice"), t = function(t) {
                    e.slice("select" === t.type)
                }, ui(e, "select", t), ui(e, "unselect", t), e
            },
            setVisible: function(t, e) {
                var i = this,
                    n = i.series,
                    o = n.chart,
                    r = n.options.ignoreHiddenPoint;
                e = bi(e, r), t !== i.visible && (i.visible = i.options.visible = t = t === z ? !i.visible : t, n.options.data[si(i, n.data)] = i.options, ai(["graphic", "dataLabel", "connector", "shadowGroup"], function(e) {
                    i[e] && i[e][t ? "show" : "hide"](!0)
                }), i.legendItem && o.legend.colorizeItem(i, t), t || "hover" !== i.state || i.setState(""), r && (n.isDirty = !0), e && o.redraw())
            },
            slice: function(t, e, i) {
                var n, o = this,
                    r = o.series,
                    s = r.chart;
                L(i, s), e = bi(e, !0), o.sliced = o.options.sliced = t = c(t) ? t : !o.sliced, r.options.data[si(o, r.data)] = o.options, n = t ? o.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                }, o.graphic.animate(n), o.shadowGroup && o.shadowGroup.animate(n)
            },
            haloPath: function(t) {
                var e = this.shapeArgs,
                    i = this.series.chart;
                return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(i.plotLeft + e.x, i.plotTop + e.y, e.r + t, e.r + t, {
                    innerR: this.shapeArgs.r,
                    start: e.start,
                    end: e.end
                })
            }
        }),
        Qi = {
            type: "pie",
            isCartesian: !1,
            pointClass: Zi,
            requireSorting: !1,
            directTouch: !0,
            noSharedTooltip: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            axisTypes: [],
            pointAttrToOptions: {
                stroke: "borderColor",
                "stroke-width": "borderWidth",
                fill: "color"
            },
            animate: function(t) {
                var e = this,
                    i = e.points,
                    n = e.startAngleRad;
                t || (ai(i, function(t) {
                    var i = t.graphic,
                        o = t.shapeArgs;
                    i && (i.attr({
                        r: t.startR || e.center[3] / 2,
                        start: n,
                        end: n
                    }), i.animate({
                        r: o.r,
                        start: o.start,
                        end: o.end
                    }, e.options.animation))
                }), e.animate = null)
            },
            updateTotals: function() {
                var t, e, i = 0,
                    n = this.points,
                    o = n.length,
                    r = this.options.ignoreHiddenPoint;
                for (t = 0; o > t; t++) e = n[t], i += r && !e.visible ? 0 : e.y;
                for (this.total = i, t = 0; o > t; t++) e = n[t], e.percentage = i > 0 && (e.visible || !r) ? e.y / i * 100 : 0, e.total = i
            },
            generatePoints: function() {
                Bi.prototype.generatePoints.call(this), this.updateTotals()
            },
            translate: function(t) {
                this.generatePoints();
                var e, i, n, o, r, s, a, l = this,
                    c = 0,
                    h = 1e3,
                    u = l.options,
                    p = u.slicedOffset,
                    d = p + u.borderWidth,
                    f = u.startAngle || 0,
                    g = l.startAngleRad = ke / 180 * (f - 90),
                    m = l.endAngleRad = ke / 180 * (bi(u.endAngle, f + 360) - 90),
                    v = m - g,
                    y = l.points,
                    b = u.dataLabels.distance,
                    x = u.ignoreHiddenPoint,
                    w = y.length;
                for (t || (l.center = t = l.getCenter()), l.getX = function(e, i) {
                        return n = de.asin(ye((e - t[1]) / (t[2] / 2 + b), 1)), t[0] + (i ? -1 : 1) * xe(n) * (t[2] / 2 + b)
                    }, s = 0; w > s; s++) a = y[s], e = g + c * v, (!x || a.visible) && (c += a.percentage / 100), i = g + c * v, a.shapeType = "arc", a.shapeArgs = {
                    x: t[0],
                    y: t[1],
                    r: t[2] / 2,
                    innerR: t[3] / 2,
                    start: fe(e * h) / h,
                    end: fe(i * h) / h
                }, n = (i + e) / 2, n > 1.5 * ke ? n -= 2 * ke : -ke / 2 > n && (n += 2 * ke), a.slicedTranslation = {
                    translateX: fe(xe(n) * p),
                    translateY: fe(we(n) * p)
                }, o = xe(n) * t[2] / 2, r = we(n) * t[2] / 2, a.tooltipPos = [t[0] + .7 * o, t[1] + .7 * r], a.half = -ke / 2 > n || n > ke / 2 ? 1 : 0, a.angle = n, d = ye(d, b / 2), a.labelPos = [t[0] + o + xe(n) * b, t[1] + r + we(n) * b, t[0] + o + xe(n) * d, t[1] + r + we(n) * d, t[0] + o, t[1] + r, 0 > b ? "center" : a.half ? "right" : "left", n]
            },
            drawGraph: null,
            drawPoints: function() {
                var t, e, i, n, o, r, s = this,
                    a = s.chart,
                    l = a.renderer,
                    c = s.options.shadow;
                c && !s.shadowGroup && (s.shadowGroup = l.g("shadow").add(s.group)), ai(s.points, function(a) {
                    null !== a.y && (e = a.graphic, o = a.shapeArgs, i = a.shadowGroup, n = a.pointAttr[a.selected ? ei : Je], n.stroke || (n.stroke = n.fill), c && !i && (i = a.shadowGroup = l.g("shadow").add(s.shadowGroup)), t = a.sliced ? a.slicedTranslation : {
                        translateX: 0,
                        translateY: 0
                    }, i && i.attr(t), e ? e.setRadialReference(s.center).attr(n).animate(vi(o, t)) : (r = {
                        "stroke-linejoin": "round"
                    }, a.visible || (r.visibility = "hidden"), a.graphic = e = l[a.shapeType](o).setRadialReference(s.center).attr(n).attr(r).attr(t).add(s.group).shadow(c, i)))
                })
            },
            searchPoint: je,
            sortByAngle: function(t, e) {
                t.sort(function(t, i) {
                    return void 0 !== t.angle && (i.angle - t.angle) * e
                })
            },
            drawLegendSymbol: Ri.drawRectangle,
            getCenter: Hi.getCenter,
            getSymbol: je
        };
    Qi = g(Bi, Qi), oi.pie = Qi, Bi.prototype.drawDataLabels = function() {
            var t, e, i, o, r = this,
                s = r.options,
                a = s.cursor,
                l = s.dataLabels,
                h = r.points,
                u = r.hasRendered || 0,
                p = bi(l.defer, !0),
                d = r.chart.renderer;
            (l.enabled || r._hasPointLabels) && (r.dlProcessOptions && r.dlProcessOptions(l), o = r.plotGroup("dataLabelsGroup", "data-labels", p && !u ? "hidden" : "visible", l.zIndex || 6), p && (o.attr({
                opacity: +u
            }), u || ui(r, "afterAnimate", function() {
                r.visible && o.show(), o[s.animation ? "animate" : "attr"]({
                    opacity: 1
                }, {
                    duration: 200
                })
            })), e = l, ai(h, function(h) {
                var u, p, f, g, m, v, y = h.dataLabel,
                    b = h.connector,
                    w = !0,
                    k = {};
                if (t = h.dlOptions || h.options && h.options.dataLabels, u = bi(t && t.enabled, e.enabled) && null !== h.y, y && !u) h.dataLabel = y.destroy();
                else if (u) {
                    if (l = n(e, t), v = l.style, m = l.rotation, p = h.getLabelConfig(), i = l.format ? x(l.format, p) : l.formatter.call(p, l), v.color = bi(l.color, v.color, r.color, "black"), y) c(i) ? (y.attr({
                        text: i
                    }), w = !1) : (h.dataLabel = y = y.destroy(), b && (h.connector = b.destroy()));
                    else if (c(i)) {
                        f = {
                            fill: l.backgroundColor,
                            stroke: l.borderColor,
                            "stroke-width": l.borderWidth,
                            r: l.borderRadius || 0,
                            rotation: m,
                            padding: l.padding,
                            zIndex: 1
                        }, "contrast" === v.color && (k.color = l.inside || l.distance < 0 || s.stacking ? d.getContrast(h.color || r.color) : "#000000"), a && (k.cursor = a);
                        for (g in f) f[g] === z && delete f[g];
                        y = h.dataLabel = d[m ? "text" : "label"](i, 0, -9999, l.shape, null, null, l.useHTML).attr(f).css(vi(v, k)).add(o).shadow(l.shadow)
                    }
                    y && r.alignDataLabel(h, y, l, null, w)
                }
            }))
        }, Bi.prototype.alignDataLabel = function(t, e, i, n, o) {
            var r, s, a, l, c = this.chart,
                h = c.inverted,
                u = bi(t.plotX, -9999),
                p = bi(t.plotY, -9999),
                d = e.getBBox(),
                f = c.renderer.fontMetrics(i.style.fontSize).b,
                g = i.rotation,
                m = i.align,
                v = this.visible && (t.series.forceDL || c.isInsidePlot(u, fe(p), h) || n && c.isInsidePlot(u, h ? n.x + 1 : n.y + n.height - 1, h)),
                y = "justify" === bi(i.overflow, "justify");
            v && (n = vi({
                x: h ? c.plotWidth - p : u,
                y: fe(h ? c.plotHeight - u : p),
                width: 0,
                height: 0
            }, n), vi(i, {
                width: d.width,
                height: d.height
            }), g ? (y = !1, a = c.renderer.rotCorr(f, g), l = {
                x: n.x + i.x + n.width / 2 + a.x,
                y: n.y + i.y + {
                    top: 0,
                    middle: .5,
                    bottom: 1
                }[i.verticalAlign] * n.height
            }, e[o ? "attr" : "animate"](l).attr({
                align: m
            }), r = (g + 720) % 360, s = r > 180 && 360 > r, "left" === m ? l.y -= s ? d.height : 0 : "center" === m ? (l.x -= d.width / 2, l.y -= d.height / 2) : "right" === m && (l.x -= d.width, l.y -= s ? 0 : d.height)) : (e.align(i, null, n), l = e.alignAttr), y ? this.justifyDataLabel(e, i, l, d, n, o) : bi(i.crop, !0) && (v = c.isInsidePlot(l.x, l.y) && c.isInsidePlot(l.x + d.width, l.y + d.height)), i.shape && !g && e.attr({
                anchorX: t.plotX,
                anchorY: t.plotY
            })), v || (gi(e), e.attr({
                y: -9999
            }), e.placed = !1)
        }, Bi.prototype.justifyDataLabel = function(t, e, i, n, o, r) {
            var s, a, l = this.chart,
                c = e.align,
                h = e.verticalAlign,
                u = t.box ? 0 : t.padding || 0;
            s = i.x + u, 0 > s && ("right" === c ? e.align = "left" : e.x = -s, a = !0), s = i.x + n.width - u, s > l.plotWidth && ("left" === c ? e.align = "right" : e.x = l.plotWidth - s, a = !0), s = i.y + u, 0 > s && ("bottom" === h ? e.verticalAlign = "top" : e.y = -s, a = !0), s = i.y + n.height - u, s > l.plotHeight && ("top" === h ? e.verticalAlign = "bottom" : e.y = l.plotHeight - s, a = !0), a && (t.placed = !r, t.align(e, null, o))
        }, oi.pie && (oi.pie.prototype.drawDataLabels = function() {
            var t, e, i, n, o, r, s, a, l, c, h, u, p, d = this,
                f = d.data,
                g = d.chart,
                m = d.options.dataLabels,
                v = bi(m.connectorPadding, 10),
                y = bi(m.connectorWidth, 1),
                b = g.plotWidth,
                x = g.plotHeight,
                w = bi(m.softConnector, !0),
                k = m.distance,
                T = d.center,
                C = T[2] / 2,
                A = T[1],
                P = k > 0,
                E = [
                    [],
                    []
                ],
                L = [0, 0, 0, 0],
                D = function(t, e) {
                    return e.y - t.y
                };
            if (d.visible && (m.enabled || d._hasPointLabels)) {
                for (Bi.prototype.drawDataLabels.apply(d), ai(f, function(t) {
                        t.dataLabel && t.visible && (E[t.half].push(t), t.dataLabel._pos = null)
                    }), u = 2; u--;) {
                    var O, _, M, N, I = [],
                        $ = [],
                        j = E[u],
                        R = j.length;
                    if (R) {
                        for (d.sortByAngle(j, u - .5), p = s = 0; !s && j[p];) s = j[p] && j[p].dataLabel && (j[p].dataLabel.getBBox().height || 21), p++;
                        if (k > 0) {
                            for (M = ye(A + C + k, g.plotHeight), _ = ve(0, A - C - k); M >= _; _ += s) I.push(_);
                            if (O = I.length, R > O) {
                                for (h = [].concat(j), h.sort(D), p = R; p--;) h[p].rank = p;
                                for (p = R; p--;) j[p].rank >= O && j.splice(p, 1);
                                R = j.length
                            }
                            for (p = 0; R > p; p++) {
                                t = j[p], r = t.labelPos;
                                var z, H, F = 9999;
                                for (H = 0; O > H; H++) z = be(I[H] - r[1]), F > z && (F = z, N = H);
                                if (p > N && null !== I[p]) N = p;
                                else if (R - p + N > O && null !== I[p])
                                    for (N = O - R + p; null === I[N];) N++;
                                else
                                    for (; null === I[N];) N++;
                                $.push({
                                    i: N,
                                    y: I[N]
                                }), I[N] = null
                            }
                            $.sort(D)
                        }
                        for (p = 0; R > p; p++) {
                            var B, W;
                            t = j[p], r = t.labelPos, n = t.dataLabel, c = t.visible === !1 ? qe : "inherit", W = r[1], k > 0 ? (B = $.pop(), N = B.i, l = B.y, (W > l && null !== I[N + 1] || l > W && null !== I[N - 1]) && (l = ye(ve(0, W), g.plotHeight))) : l = W, a = m.justify ? T[0] + (u ? -1 : 1) * (C + k) : d.getX(l === A - C - k || l === A + C + k ? W : l, u), n._attr = {
                                visibility: c,
                                align: r[6]
                            }, n._pos = {
                                x: a + m.x + ({
                                    left: v,
                                    right: -v
                                }[r[6]] || 0),
                                y: l + m.y - 10
                            }, n.connX = a, n.connY = l, null === this.options.size && (o = n.width, v > a - o ? L[3] = ve(fe(o - a + v), L[3]) : a + o > b - v && (L[1] = ve(fe(a + o - b + v), L[1])), 0 > l - s / 2 ? L[0] = ve(fe(-l + s / 2), L[0]) : l + s / 2 > x && (L[2] = ve(fe(l + s / 2 - x), L[2])))
                        }
                    }
                }(0 === S(L) || this.verifyDataLabelOverflow(L)) && (this.placeDataLabels(), P && y && ai(this.points, function(t) {
                    e = t.connector, r = t.labelPos, n = t.dataLabel, n && n._pos && t.visible ? (c = n._attr.visibility, a = n.connX, l = n.connY, i = w ? [Ke, a + ("left" === r[6] ? 5 : -5), l, "C", a, l, 2 * r[2] - r[4], 2 * r[3] - r[5], r[2], r[3], Ze, r[4], r[5]] : [Ke, a + ("left" === r[6] ? 5 : -5), l, Ze, r[2], r[3], Ze, r[4], r[5]], e ? (e.animate({
                        d: i
                    }), e.attr("visibility", c)) : t.connector = e = d.chart.renderer.path(i).attr({
                        "stroke-width": y,
                        stroke: m.connectorColor || t.color || "#606060",
                        visibility: c
                    }).add(d.dataLabelsGroup)) : e && (t.connector = e.destroy())
                }))
            }
        }, oi.pie.prototype.placeDataLabels = function() {
            ai(this.points, function(t) {
                var e, i = t.dataLabel;
                i && t.visible && (e = i._pos, e ? (i.attr(i._attr), i[i.moved ? "animate" : "attr"](e), i.moved = !0) : i && i.attr({
                    y: -9999
                }))
            })
        }, oi.pie.prototype.alignDataLabel = je, oi.pie.prototype.verifyDataLabelOverflow = function(t) {
            var e, i = this.center,
                n = this.options,
                o = n.center,
                r = n.minSize || 80,
                s = r;
            return null !== o[0] ? s = ve(i[2] - ve(t[1], t[3]), r) : (s = ve(i[2] - t[1] - t[3], r), i[0] += (t[3] - t[1]) / 2), null !== o[1] ? s = ve(ye(s, i[2] - ve(t[0], t[2])), r) : (s = ve(ye(s, i[2] - t[0] - t[2]), r), i[1] += (t[0] - t[2]) / 2), s < i[2] ? (i[2] = s, i[3] = Math.min(v(n.innerSize || 0, s), s), this.translate(i), this.drawDataLabels && this.drawDataLabels()) : e = !0, e
        }), oi.column && (oi.column.prototype.alignDataLabel = function(t, e, i, o, r) {
            var s, a = this.chart.inverted,
                l = t.series,
                c = t.dlBox || t.shapeArgs,
                h = bi(t.below, t.plotY > bi(this.translatedThreshold, l.yAxis.len)),
                u = bi(i.inside, !!this.options.stacking);
            c && (o = n(c), o.y < 0 && (o.height += o.y, o.y = 0), s = o.y + o.height - l.yAxis.len, s > 0 && (o.height -= s), a && (o = {
                x: l.yAxis.len - o.y - o.height,
                y: l.xAxis.len - o.x - o.width,
                width: o.height,
                height: o.width
            }), u || (a ? (o.x += h ? 0 : o.width, o.width = 0) : (o.y += h ? o.height : 0, o.height = 0))), i.align = bi(i.align, !a || u ? "center" : h ? "right" : "left"), i.verticalAlign = bi(i.verticalAlign, a || u ? "middle" : h ? "top" : "bottom"), Bi.prototype.alignDataLabel.call(this, t, e, i, o, r)
        }),
        function(t) {
            var e = t.Chart,
                i = t.each,
                n = t.pick,
                o = t.addEvent;
            e.prototype.callbacks.push(function(t) {
                function e() {
                    var e = [];
                    i(t.series, function(t) {
                        var o = t.options.dataLabels,
                            r = t.dataLabelCollections || ["dataLabel"];
                        (o.enabled || t._hasPointLabels) && !o.allowOverlap && t.visible && i(r, function(o) {
                            i(t.points, function(t) {
                                t[o] && (t[o].labelrank = n(t.labelrank, t.shapeArgs && t.shapeArgs.height), e.push(t[o]))
                            })
                        })
                    }), t.hideOverlappingLabels(e)
                }
                e(), o(t, "redraw", e)
            }), e.prototype.hideOverlappingLabels = function(t) {
                var e, n, o, r, s, a, l, c, h, u, p, d = t.length,
                    f = function(t, e, i, n, o, r, s, a) {
                        return !(o > t + i || t > o + s || r > e + n || e > r + a)
                    };
                for (n = 0; d > n; n++) e = t[n], e && (e.oldOpacity = e.opacity, e.newOpacity = 1);
                for (t.sort(function(t, e) {
                        return (e.labelrank || 0) - (t.labelrank || 0)
                    }), n = 0; d > n; n++)
                    for (r = t[n], o = n + 1; d > o; ++o) s = t[o], r && s && r.placed && s.placed && 0 !== r.newOpacity && 0 !== s.newOpacity && (l = r.alignAttr, c = s.alignAttr, h = r.parentGroup, u = s.parentGroup, p = 2 * (r.box ? 0 : r.padding), a = f(l.x + h.translateX, l.y + h.translateY, r.width - p, r.height - p, c.x + u.translateX, c.y + u.translateY, s.width - p, s.height - p), a && ((r.labelrank < s.labelrank ? r : s).newOpacity = 0));
                i(t, function(t) {
                    var e, i;
                    t && (i = t.newOpacity, t.oldOpacity !== i && t.placed && (i ? t.show(!0) : e = function() {
                        t.hide()
                    }, t.alignAttr.opacity = i, t[t.isOld ? "animate" : "attr"](t.alignAttr, null, e)), t.isOld = !0)
                })
            }
        }(ue);
    var Ji = ue.TrackerMixin = {
        drawTrackerPoint: function() {
            var t = this,
                e = t.chart,
                i = e.pointer,
                n = t.options.cursor,
                o = n && {
                    cursor: n
                },
                r = function(t) {
                    for (var i, n = t.target; n && !i;) i = n.point, n = n.parentNode;
                    i !== z && i !== e.hoverPoint && i.onMouseOver(t)
                };
            ai(t.points, function(t) {
                t.graphic && (t.graphic.element.point = t), t.dataLabel && (t.dataLabel.element.point = t)
            }), t._hasTracking || (ai(t.trackerGroups, function(e) {
                t[e] && (t[e].addClass(Ye + "tracker").on("mouseover", r).on("mouseout", function(t) {
                    i.onTrackerMouseOut(t)
                }).css(o), F && t[e].on("touchstart", r))
            }), t._hasTracking = !0)
        },
        drawTrackerGraph: function() {
            var t, e = this,
                i = e.options,
                n = i.trackByArea,
                o = [].concat(n ? e.areaPath : e.graphPath),
                r = o.length,
                s = e.chart,
                a = s.pointer,
                l = s.renderer,
                c = s.options.tooltip.snap,
                h = e.tracker,
                u = i.cursor,
                p = u && {
                    cursor: u
                },
                d = function() {
                    s.hoverSeries !== e && e.onMouseOver()
                },
                f = "rgba(192,192,192," + (_e ? 1e-4 : .002) + ")";
            if (r && !n)
                for (t = r + 1; t--;) o[t] === Ke && o.splice(t + 1, 0, o[t + 1] - c, o[t + 2], Ze), (t && o[t] === Ke || t === r) && o.splice(t, 0, Ze, o[t - 2] + c, o[t - 1]);
            h ? h.attr({
                d: o
            }) : (e.tracker = l.path(o).attr({
                "stroke-linejoin": "round",
                visibility: e.visible ? Ge : qe,
                stroke: f,
                fill: n ? f : Ve,
                "stroke-width": i.lineWidth + (n ? 0 : 2 * c),
                zIndex: 2
            }).add(e.group), ai([e.tracker, e.markerGroup], function(t) {
                t.addClass(Ye + "tracker").on("mouseover", d).on("mouseout", function(t) {
                    a.onTrackerMouseOut(t)
                }).css(p), F && t.on("touchstart", d)
            }))
        }
    };
    return oi.column && (Ui.prototype.drawTracker = Ji.drawTrackerPoint), oi.pie && (oi.pie.prototype.drawTracker = Ji.drawTrackerPoint), oi.scatter && (Ki.prototype.drawTracker = Ji.drawTrackerPoint), vi(ji.prototype, {
        setItemEvents: function(t, e, i, n, o) {
            var r = this;
            (i ? e : t.legendGroup).on("mouseover", function() {
                t.setState(ti), e.css(r.options.itemHoverStyle)
            }).on("mouseout", function() {
                e.css(t.visible ? n : o), t.setState()
            }).on("click", function(e) {
                var i = "legendItemClick",
                    n = function() {
                        t.setVisible && t.setVisible()
                    };
                e = {
                    browserEvent: e
                }, t.firePointEvent ? t.firePointEvent(i, e, n) : di(t, i, e, n)
            })
        },
        createCheckboxForItem: function(t) {
            var e = this;
            t.checkbox = f("input", {
                type: "checkbox",
                checked: t.selected,
                defaultChecked: t.selected
            }, e.options.itemCheckboxStyle, e.chart.container), ui(t.checkbox, "click", function(e) {
                var i = e.target;
                di(t.series || t, "checkboxClick", {
                    checked: i.checked,
                    item: t
                }, function() {
                    t.select()
                })
            })
        }
    }), W.legend.itemStyle.cursor = "pointer", vi(zi.prototype, {
        showResetZoom: function() {
            function t() {
                e.zoomOut()
            }
            var e = this,
                i = W.lang,
                n = e.options.chart.resetZoomButton,
                o = n.theme,
                r = o.states,
                s = "chart" === n.relativeTo ? null : "plotBox";
            this.resetZoomButton = e.renderer.button(i.resetZoom, null, null, t, o, r && r.hover).attr({
                align: n.position.align,
                title: i.resetZoomTitle
            }).add().align(n.position, !1, s)
        },
        zoomOut: function() {
            var t = this;
            di(t, "selection", {
                resetSelection: !0
            }, function() {
                t.zoom()
            })
        },
        zoom: function(t) {
            var e, i, n = this,
                o = n.pointer,
                r = !1;
            !t || t.resetSelection ? ai(n.axes, function(t) {
                e = t.zoom()
            }) : ai(t.xAxis.concat(t.yAxis), function(t) {
                var i = t.axis,
                    n = i.isXAxis;
                (o[n ? "zoomX" : "zoomY"] || o[n ? "pinchX" : "pinchY"]) && (e = i.zoom(t.min, t.max), i.displayBtn && (r = !0))
            }), i = n.resetZoomButton, r && !i ? n.showResetZoom() : !r && s(i) && (n.resetZoomButton = i.destroy()), e && n.redraw(bi(n.options.chart.animation, t && t.animation, n.pointCount < 100))
        },
        pan: function(t, e) {
            var i, n = this,
                o = n.hoverPoints;
            o && ai(o, function(t) {
                t.setState()
            }), ai("xy" === e ? [1, 0] : [1], function(e) {
                var o = n[e ? "xAxis" : "yAxis"][0],
                    r = o.horiz,
                    s = t[r ? "chartX" : "chartY"],
                    a = r ? "mouseDownX" : "mouseDownY",
                    l = n[a],
                    c = (o.pointRange || 0) / 2,
                    h = o.getExtremes(),
                    u = o.toValue(l - s, !0) + c,
                    p = o.toValue(l + o.len - s, !0) - c,
                    d = l > s;
                o.series.length && (d || u > ye(h.dataMin, h.min)) && (!d || p < ve(h.dataMax, h.max)) && (o.setExtremes(u, p, !1, !1, {
                    trigger: "pan"
                }), i = !0), n[a] = s
            }), i && n.redraw(!1), d(n.container, {
                cursor: "move"
            })
        }
    }), vi(Fi.prototype, {
        select: function(t, e) {
            var i = this,
                n = i.series,
                o = n.chart;
            t = bi(t, !i.selected), i.firePointEvent(t ? "select" : "unselect", {
                accumulate: e
            }, function() {
                i.selected = i.options.selected = t, n.options.data[si(i, n.data)] = i.options, i.setState(t && ei), e || ai(o.getSelectedPoints(), function(t) {
                    t.selected && t !== i && (t.selected = t.options.selected = !1, n.options.data[si(t, n.data)] = t.options, t.setState(Je), t.firePointEvent("unselect"))
                })
            })
        },
        onMouseOver: function(t, e) {
            var i = this,
                n = i.series,
                o = n.chart,
                r = o.tooltip,
                s = o.hoverPoint;
            o.hoverSeries !== n && n.onMouseOver(), s && s !== i && s.onMouseOut(), i.series && (i.firePointEvent("mouseOver"), !r || r.shared && !n.noSharedTooltip || r.refresh(i, t), i.setState(ti), e || (o.hoverPoint = i))
        },
        onMouseOut: function() {
            var t = this.series.chart,
                e = t.hoverPoints;
            this.firePointEvent("mouseOut"), e && -1 !== si(this, e) || (this.setState(), t.hoverPoint = null)
        },
        importEvents: function() {
            if (!this.hasImportedEvents) {
                var t, e = this,
                    i = n(e.series.options.point, e.options),
                    o = i.events;
                e.events = o;
                for (t in o) ui(e, t, o[t]);
                this.hasImportedEvents = !0
            }
        },
        setState: function(t, e) {
            var i, o, r, s, a = this,
                l = ge(a.plotX),
                c = a.plotY,
                h = a.series,
                u = h.options.states,
                p = wi[h.type].marker && h.options.marker,
                d = p && !p.enabled,
                f = p && p.states[t],
                g = f && f.enabled === !1,
                m = h.stateMarkerGraphic,
                v = a.marker || {},
                y = h.chart,
                b = h.halo;
            t = t || Je, s = a.pointAttr[t] || h.pointAttr[t], t === a.state && !e || a.selected && t !== ei || u[t] && u[t].enabled === !1 || t && (g || d && f.enabled === !1) || t && v.states && v.states[t] && v.states[t].enabled === !1 || (a.graphic ? (i = p && a.graphic.symbolName && s.r, a.graphic.attr(n(s, i ? {
                x: l - i,
                y: c - i,
                width: 2 * i,
                height: 2 * i
            } : {})), m && m.hide()) : (t && f && (i = f.radius, r = v.symbol || h.symbol, m && m.currentSymbol !== r && (m = m.destroy()), m ? m[e ? "animate" : "attr"]({
                x: l - i,
                y: c - i
            }) : r && (h.stateMarkerGraphic = m = y.renderer.symbol(r, l - i, c - i, 2 * i, 2 * i).attr(s).add(h.markerGroup), m.currentSymbol = r)), m && (m[t && y.isInsidePlot(l, c, y.inverted) ? "show" : "hide"](), m.element.point = a)), o = u[t] && u[t].halo, o && o.size ? (b || (h.halo = b = y.renderer.path().add(y.seriesGroup)), b.attr(vi({
                fill: a.color || h.color,
                "fill-opacity": o.opacity,
                zIndex: -1
            }, o.attributes))[e ? "animate" : "attr"]({
                d: a.haloPath(o.size)
            })) : b && b.attr({
                d: []
            }), a.state = t)
        },
        haloPath: function(t) {
            var e = this.series,
                i = e.chart,
                n = e.getPlotBox(),
                o = i.inverted,
                r = Math.floor(this.plotX);
            return i.renderer.symbols.circle(n.translateX + (o ? e.yAxis.len - this.plotY : r) - t, n.translateY + (o ? e.xAxis.len - r : this.plotY) - t, 2 * t, 2 * t)
        }
    }), vi(Bi.prototype, {
        onMouseOver: function() {
            var t = this,
                e = t.chart,
                i = e.hoverSeries;
            i && i !== t && i.onMouseOut(), t.options.events.mouseOver && di(t, "mouseOver"), t.setState(ti), e.hoverSeries = t
        },
        onMouseOut: function() {
            var t = this,
                e = t.options,
                i = t.chart,
                n = i.tooltip,
                o = i.hoverPoint;
            i.hoverSeries = null, o && o.onMouseOut(), t && e.events.mouseOut && di(t, "mouseOut"), !n || e.stickyTracking || n.shared && !t.noSharedTooltip || n.hide(), t.setState()
        },
        setState: function(t) {
            var e, i = this,
                n = i.options,
                o = i.graph,
                r = n.states,
                s = n.lineWidth,
                a = 0;
            if (t = t || Je, i.state !== t) {
                if (i.state = t, r[t] && r[t].enabled === !1) return;
                if (t && (s = r[t].lineWidth || s + (r[t].lineWidthPlus || 0)), o && !o.dashstyle)
                    for (e = {
                            "stroke-width": s
                        }, o.attr(e); i["zoneGraph" + a];) i["zoneGraph" + a].attr(e), a += 1
            }
        },
        setVisible: function(t, e) {
            var i, n = this,
                o = n.chart,
                r = n.legendItem,
                s = o.options.chart.ignoreHiddenSeries,
                a = n.visible;
            n.visible = t = n.userOptions.visible = t === z ? !a : t, i = t ? "show" : "hide", ai(["group", "dataLabelsGroup", "markerGroup", "tracker"], function(t) {
                n[t] && n[t][i]()
            }), (o.hoverSeries === n || (o.hoverPoint && o.hoverPoint.series) === n) && n.onMouseOut(), r && o.legend.colorizeItem(n, t), n.isDirty = !0, n.options.stacking && ai(o.series, function(t) {
                t.options.stacking && t.visible && (t.isDirty = !0)
            }), ai(n.linkedSeries, function(e) {
                e.setVisible(t, !1)
            }), s && (o.isDirtyBox = !0), e !== !1 && o.redraw(), di(n, i)
        },
        show: function() {
            this.setVisible(!0)
        },
        hide: function() {
            this.setVisible(!1)
        },
        select: function(t) {
            var e = this;
            e.selected = t = t === z ? !e.selected : t, e.checkbox && (e.checkbox.checked = t), di(e, t ? "select" : "unselect")
        },
        drawTracker: Ji.drawTrackerGraph
    }), vi(ue, {
        Color: N,
        Point: Fi,
        Tick: j,
        Renderer: H,
        SVGElement: I,
        SVGRenderer: Ti,
        arrayMin: C,
        arrayMax: S,
        charts: Re,
        correctFloat: E,
        dateFormat: X,
        error: e,
        format: x,
        pathAnim: q,
        getOptions: M,
        hasBidiBug: Me,
        isTouchDevice: De,
        setOptions: _,
        addEvent: ui,
        removeEvent: pi,
        createElement: f,
        discardElement: P,
        css: d,
        each: ai,
        map: hi,
        merge: n,
        splat: u,
        stableSort: T,
        extendClass: g,
        pInt: o,
        svg: _e,
        canvas: Ne,
        vml: !_e && !Ne,
        product: He,
        version: Fe
    }), ue
}),
function(t, e) {
    "use strict";
    var i, n, o, r = t,
        s = r.document,
        a = r.navigator,
        l = r.setTimeout,
        c = r.clearTimeout,
        h = r.setInterval,
        u = r.clearInterval,
        p = r.getComputedStyle,
        d = r.encodeURIComponent,
        f = r.ActiveXObject,
        g = r.Error,
        m = r.Number.parseInt || r.parseInt,
        v = r.Number.parseFloat || r.parseFloat,
        y = r.Number.isNaN || r.isNaN,
        b = r.Date.now,
        x = r.Object.keys,
        w = r.Object.defineProperty,
        k = r.Object.prototype.hasOwnProperty,
        T = r.Array.prototype.slice,
        C = function() {
            var t = function(t) {
                return t
            };
            if ("function" == typeof r.wrap && "function" == typeof r.unwrap) try {
                var e = s.createElement("div"),
                    i = r.unwrap(e);
                1 === e.nodeType && i && 1 === i.nodeType && (t = r.unwrap)
            } catch (n) {}
            return t
        }(),
        S = function(t) {
            return T.call(t, 0)
        },
        A = function() {
            var t, i, n, o, r, s, a = S(arguments),
                l = a[0] || {};
            for (t = 1, i = a.length; i > t; t++)
                if (null != (n = a[t]))
                    for (o in n) k.call(n, o) && (r = l[o], s = n[o], l !== s && s !== e && (l[o] = s));
            return l
        },
        P = function(t) {
            var e, i, n, o;
            if ("object" != typeof t || null == t || "number" == typeof t.nodeType) e = t;
            else if ("number" == typeof t.length)
                for (e = [], i = 0, n = t.length; n > i; i++) k.call(t, i) && (e[i] = P(t[i]));
            else {
                e = {};
                for (o in t) k.call(t, o) && (e[o] = P(t[o]))
            }
            return e
        },
        E = function(t, e) {
            for (var i = {}, n = 0, o = e.length; o > n; n++) e[n] in t && (i[e[n]] = t[e[n]]);
            return i
        },
        L = function(t, e) {
            var i = {};
            for (var n in t) - 1 === e.indexOf(n) && (i[n] = t[n]);
            return i
        },
        D = function(t) {
            if (t)
                for (var e in t) k.call(t, e) && delete t[e];
            return t
        },
        O = function(t, e) {
            if (t && 1 === t.nodeType && t.ownerDocument && e && (1 === e.nodeType && e.ownerDocument && e.ownerDocument === t.ownerDocument || 9 === e.nodeType && !e.ownerDocument && e === t.ownerDocument))
                do {
                    if (t === e) return !0;
                    t = t.parentNode
                } while (t);
            return !1
        },
        _ = function(t) {
            var e;
            return "string" == typeof t && t && (e = t.split("#")[0].split("?")[0], e = t.slice(0, t.lastIndexOf("/") + 1)), e
        },
        M = function(t) {
            var e, i;
            return "string" == typeof t && t && (i = t.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), i && i[1] ? e = i[1] : (i = t.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), i && i[1] && (e = i[1]))), e
        },
        N = function() {
            var t, e;
            try {
                throw new g
            } catch (i) {
                e = i
            }
            return e && (t = e.sourceURL || e.fileName || M(e.stack)), t
        },
        I = function() {
            var t, i, n;
            if (s.currentScript && (t = s.currentScript.src)) return t;
            if (i = s.getElementsByTagName("script"), 1 === i.length) return i[0].src || e;
            if ("readyState" in i[0])
                for (n = i.length; n--;)
                    if ("interactive" === i[n].readyState && (t = i[n].src)) return t;
            return "loading" === s.readyState && (t = i[i.length - 1].src) ? t : (t = N()) ? t : e
        },
        $ = function() {
            var t, i, n, o = s.getElementsByTagName("script");
            for (t = o.length; t--;) {
                if (!(n = o[t].src)) {
                    i = null;
                    break
                }
                if (n = _(n), null == i) i = n;
                else if (i !== n) {
                    i = null;
                    break
                }
            }
            return i || e
        },
        j = function() {
            var t = _(I()) || $() || "";
            return t + "ZeroClipboard.swf"
        },
        R = function() {
            return null == t.opener && (!!t.top && t != t.top || !!t.parent && t != t.parent)
        }(),
        z = {
            bridge: null,
            version: "0.0.0",
            pluginType: "unknown",
            disabled: null,
            outdated: null,
            sandboxed: null,
            unavailable: null,
            degraded: null,
            deactivated: null,
            overdue: null,
            ready: null
        },
        H = "11.0.0",
        F = {},
        B = {},
        W = null,
        X = 0,
        q = 0,
        Y = {
            ready: "Flash communication is established",
            error: {
                "flash-disabled": "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.",
                "flash-outdated": "Flash is too outdated to support ZeroClipboard",
                "flash-sandboxed": "Attempting to run Flash in a sandboxed iframe, which is impossible",
                "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
                "flash-degraded": "Flash is unable to preserve data fidelity when communicating with JavaScript",
                "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.",
                "flash-overdue": "Flash communication was established but NOT within the acceptable time limit",
                "version-mismatch": "ZeroClipboard JS version number does not match ZeroClipboard SWF version number",
                "clipboard-error": "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard",
                "config-mismatch": "ZeroClipboard configuration does not match Flash's reality",
                "swf-not-found": "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"
            }
        },
        G = ["flash-unavailable", "flash-degraded", "flash-overdue", "version-mismatch", "config-mismatch", "clipboard-error"],
        U = ["flash-disabled", "flash-outdated", "flash-sandboxed", "flash-unavailable", "flash-degraded", "flash-deactivated", "flash-overdue"],
        V = new RegExp("^flash-(" + U.map(function(t) {
            return t.replace(/^flash-/, "")
        }).join("|") + ")$"),
        K = new RegExp("^flash-(" + U.slice(1).map(function(t) {
            return t.replace(/^flash-/, "")
        }).join("|") + ")$"),
        Z = {
            swfPath: j(),
            trustedDomains: t.location.host ? [t.location.host] : [],
            cacheBust: !0,
            forceEnhancedClipboard: !1,
            flashLoadTimeout: 3e4,
            autoActivate: !0,
            bubbleEvents: !0,
            containerId: "global-zeroclipboard-html-bridge",
            containerClass: "global-zeroclipboard-container",
            swfObjectId: "global-zeroclipboard-flash-bridge",
            hoverClass: "zeroclipboard-is-hover",
            activeClass: "zeroclipboard-is-active",
            forceHandCursor: !1,
            title: null,
            zIndex: 999999999
        },
        Q = function(t) {
            if ("object" == typeof t && null !== t)
                for (var e in t)
                    if (k.call(t, e))
                        if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(e)) Z[e] = t[e];
                        else if (null == z.bridge)
                if ("containerId" === e || "swfObjectId" === e) {
                    if (!de(t[e])) throw new Error("The specified `" + e + "` value is not valid as an HTML4 Element ID");
                    Z[e] = t[e]
                } else Z[e] = t[e]; {
                    if ("string" != typeof t || !t) return P(Z);
                    if (k.call(Z, t)) return Z[t]
                }
        },
        J = function() {
            return qe(), {
                browser: E(a, ["userAgent", "platform", "appName"]),
                flash: L(z, ["bridge"]),
                zeroclipboard: {
                    version: Ge.version,
                    config: Ge.config()
                }
            }
        },
        te = function() {
            return !!(z.disabled || z.outdated || z.sandboxed || z.unavailable || z.degraded || z.deactivated)
        },
        ee = function(t, n) {
            var o, r, s, a = {};
            if ("string" == typeof t && t) s = t.toLowerCase().split(/\s+/);
            else if ("object" == typeof t && t && "undefined" == typeof n)
                for (o in t) k.call(t, o) && "string" == typeof o && o && "function" == typeof t[o] && Ge.on(o, t[o]);
            if (s && s.length) {
                for (o = 0, r = s.length; r > o; o++) t = s[o].replace(/^on/, ""), a[t] = !0, F[t] || (F[t] = []), F[t].push(n);
                if (a.ready && z.ready && Ge.emit({
                        type: "ready"
                    }), a.error) {
                    for (o = 0, r = U.length; r > o; o++)
                        if (z[U[o].replace(/^flash-/, "")] === !0) {
                            Ge.emit({
                                type: "error",
                                name: U[o]
                            });
                            break
                        }
                    i !== e && Ge.version !== i && Ge.emit({
                        type: "error",
                        name: "version-mismatch",
                        jsVersion: Ge.version,
                        swfVersion: i
                    })
                }
            }
            return Ge
        },
        ie = function(t, e) {
            var i, n, o, r, s;
            if (0 === arguments.length) r = x(F);
            else if ("string" == typeof t && t) r = t.split(/\s+/);
            else if ("object" == typeof t && t && "undefined" == typeof e)
                for (i in t) k.call(t, i) && "string" == typeof i && i && "function" == typeof t[i] && Ge.off(i, t[i]);
            if (r && r.length)
                for (i = 0, n = r.length; n > i; i++)
                    if (t = r[i].toLowerCase().replace(/^on/, ""), s = F[t], s && s.length)
                        if (e)
                            for (o = s.indexOf(e); - 1 !== o;) s.splice(o, 1), o = s.indexOf(e, o);
                        else s.length = 0;
            return Ge
        },
        ne = function(t) {
            var e;
            return e = "string" == typeof t && t ? P(F[t]) || null : P(F)
        },
        oe = function(t) {
            var e, i, n;
            return t = fe(t), t && !we(t) ? "ready" === t.type && z.overdue === !0 ? Ge.emit({
                type: "error",
                name: "flash-overdue"
            }) : (e = A({}, t), be.call(this, e), "copy" === t.type && (n = Le(B), i = n.data, W = n.formatMap), i) : void 0
        },
        re = function() {
            var t = z.sandboxed;
            if (qe(), "boolean" != typeof z.ready && (z.ready = !1), z.sandboxed !== t && z.sandboxed === !0) z.ready = !1, Ge.emit({
                type: "error",
                name: "flash-sandboxed"
            });
            else if (!Ge.isFlashUnusable() && null === z.bridge) {
                var e = Z.flashLoadTimeout;
                "number" == typeof e && e >= 0 && (X = l(function() {
                    "boolean" != typeof z.deactivated && (z.deactivated = !0), z.deactivated === !0 && Ge.emit({
                        type: "error",
                        name: "flash-deactivated"
                    })
                }, e)), z.overdue = !1, Pe()
            }
        },
        se = function() {
            Ge.clearData(), Ge.blur(), Ge.emit("destroy"), Ee(), Ge.off()
        },
        ae = function(t, e) {
            var i;
            if ("object" == typeof t && t && "undefined" == typeof e) i = t, Ge.clearData();
            else {
                if ("string" != typeof t || !t) return;
                i = {}, i[t] = e
            }
            for (var n in i) "string" == typeof n && n && k.call(i, n) && "string" == typeof i[n] && i[n] && (B[n] = i[n])
        },
        le = function(t) {
            "undefined" == typeof t ? (D(B), W = null) : "string" == typeof t && k.call(B, t) && delete B[t]
        },
        ce = function(t) {
            return "undefined" == typeof t ? P(B) : "string" == typeof t && k.call(B, t) ? B[t] : void 0
        },
        he = function(t) {
            if (t && 1 === t.nodeType) {
                n && (je(n, Z.activeClass), n !== t && je(n, Z.hoverClass)), n = t, $e(t, Z.hoverClass);
                var e = t.getAttribute("title") || Z.title;
                if ("string" == typeof e && e) {
                    var i = Ae(z.bridge);
                    i && i.setAttribute("title", e)
                }
                var o = Z.forceHandCursor === !0 || "pointer" === Re(t, "cursor");
                We(o), Be()
            }
        },
        ue = function() {
            var t = Ae(z.bridge);
            t && (t.removeAttribute("title"), t.style.left = "0px", t.style.top = "-9999px", t.style.width = "1px", t.style.height = "1px"), n && (je(n, Z.hoverClass), je(n, Z.activeClass), n = null)
        },
        pe = function() {
            return n || null
        },
        de = function(t) {
            return "string" == typeof t && t && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(t)
        },
        fe = function(t) {
            var e;
            if ("string" == typeof t && t ? (e = t, t = {}) : "object" == typeof t && t && "string" == typeof t.type && t.type && (e = t.type), e) {
                e = e.toLowerCase(), !t.target && (/^(copy|aftercopy|_click)$/.test(e) || "error" === e && "clipboard-error" === t.name) && (t.target = o), A(t, {
                    type: e,
                    target: t.target || n || null,
                    relatedTarget: t.relatedTarget || null,
                    currentTarget: z && z.bridge || null,
                    timeStamp: t.timeStamp || b() || null
                });
                var i = Y[t.type];
                return "error" === t.type && t.name && i && (i = i[t.name]), i && (t.message = i), "ready" === t.type && A(t, {
                    target: null,
                    version: z.version
                }), "error" === t.type && (V.test(t.name) && A(t, {
                    target: null,
                    minimumVersion: H
                }), K.test(t.name) && A(t, {
                    version: z.version
                })), "copy" === t.type && (t.clipboardData = {
                    setData: Ge.setData,
                    clearData: Ge.clearData
                }), "aftercopy" === t.type && (t = De(t, W)), t.target && !t.relatedTarget && (t.relatedTarget = ge(t.target)), me(t)
            }
        },
        ge = function(t) {
            var e = t && t.getAttribute && t.getAttribute("data-clipboard-target");
            return e ? s.getElementById(e) : null
        },
        me = function(t) {
            if (t && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(t.type)) {
                var i = t.target,
                    n = "_mouseover" === t.type && t.relatedTarget ? t.relatedTarget : e,
                    o = "_mouseout" === t.type && t.relatedTarget ? t.relatedTarget : e,
                    a = ze(i),
                    l = r.screenLeft || r.screenX || 0,
                    c = r.screenTop || r.screenY || 0,
                    h = s.body.scrollLeft + s.documentElement.scrollLeft,
                    u = s.body.scrollTop + s.documentElement.scrollTop,
                    p = a.left + ("number" == typeof t._stageX ? t._stageX : 0),
                    d = a.top + ("number" == typeof t._stageY ? t._stageY : 0),
                    f = p - h,
                    g = d - u,
                    m = l + f,
                    v = c + g,
                    y = "number" == typeof t.movementX ? t.movementX : 0,
                    b = "number" == typeof t.movementY ? t.movementY : 0;
                delete t._stageX, delete t._stageY, A(t, {
                    srcElement: i,
                    fromElement: n,
                    toElement: o,
                    screenX: m,
                    screenY: v,
                    pageX: p,
                    pageY: d,
                    clientX: f,
                    clientY: g,
                    x: f,
                    y: g,
                    movementX: y,
                    movementY: b,
                    offsetX: 0,
                    offsetY: 0,
                    layerX: 0,
                    layerY: 0
                })
            }
            return t
        },
        ve = function(t) {
            var e = t && "string" == typeof t.type && t.type || "";
            return !/^(?:(?:before)?copy|destroy)$/.test(e)
        },
        ye = function(t, e, i, n) {
            n ? l(function() {
                t.apply(e, i)
            }, 0) : t.apply(e, i)
        },
        be = function(t) {
            if ("object" == typeof t && t && t.type) {
                var e = ve(t),
                    i = F["*"] || [],
                    n = F[t.type] || [],
                    o = i.concat(n);
                if (o && o.length) {
                    var s, a, l, c, h, u = this;
                    for (s = 0, a = o.length; a > s; s++) l = o[s], c = u, "string" == typeof l && "function" == typeof r[l] && (l = r[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (c = l, l = l.handleEvent), "function" == typeof l && (h = A({}, t), ye(l, c, [h], e))
                }
                return this
            }
        },
        xe = function(t) {
            var e = null;
            return (R === !1 || t && "error" === t.type && t.name && -1 !== G.indexOf(t.name)) && (e = !1), e
        },
        we = function(t) {
            var e = t.target || n || null,
                r = "swf" === t._source;
            switch (delete t._source, t.type) {
                case "error":
                    var s = "flash-sandboxed" === t.name || xe(t);
                    "boolean" == typeof s && (z.sandboxed = s), -1 !== U.indexOf(t.name) ? A(z, {
                        disabled: "flash-disabled" === t.name,
                        outdated: "flash-outdated" === t.name,
                        unavailable: "flash-unavailable" === t.name,
                        degraded: "flash-degraded" === t.name,
                        deactivated: "flash-deactivated" === t.name,
                        overdue: "flash-overdue" === t.name,
                        ready: !1
                    }) : "version-mismatch" === t.name && (i = t.swfVersion, A(z, {
                        disabled: !1,
                        outdated: !1,
                        unavailable: !1,
                        degraded: !1,
                        deactivated: !1,
                        overdue: !1,
                        ready: !1
                    })), Fe();
                    break;
                case "ready":
                    i = t.swfVersion;
                    var a = z.deactivated === !0;
                    A(z, {
                        disabled: !1,
                        outdated: !1,
                        sandboxed: !1,
                        unavailable: !1,
                        degraded: !1,
                        deactivated: !1,
                        overdue: a,
                        ready: !a
                    }), Fe();
                    break;
                case "beforecopy":
                    o = e;
                    break;
                case "copy":
                    var l, c, h = t.relatedTarget;
                    !B["text/html"] && !B["text/plain"] && h && (c = h.value || h.outerHTML || h.innerHTML) && (l = h.value || h.textContent || h.innerText) ? (t.clipboardData.clearData(), t.clipboardData.setData("text/plain", l), c !== l && t.clipboardData.setData("text/html", c)) : !B["text/plain"] && t.target && (l = t.target.getAttribute("data-clipboard-text")) && (t.clipboardData.clearData(), t.clipboardData.setData("text/plain", l));
                    break;
                case "aftercopy":
                    ke(t), Ge.clearData(), e && e !== Ie() && e.focus && e.focus();
                    break;
                case "_mouseover":
                    Ge.focus(e), Z.bubbleEvents === !0 && r && (e && e !== t.relatedTarget && !O(t.relatedTarget, e) && Te(A({}, t, {
                        type: "mouseenter",
                        bubbles: !1,
                        cancelable: !1
                    })), Te(A({}, t, {
                        type: "mouseover"
                    })));
                    break;
                case "_mouseout":
                    Ge.blur(), Z.bubbleEvents === !0 && r && (e && e !== t.relatedTarget && !O(t.relatedTarget, e) && Te(A({}, t, {
                        type: "mouseleave",
                        bubbles: !1,
                        cancelable: !1
                    })), Te(A({}, t, {
                        type: "mouseout"
                    })));
                    break;
                case "_mousedown":
                    $e(e, Z.activeClass), Z.bubbleEvents === !0 && r && Te(A({}, t, {
                        type: t.type.slice(1)
                    }));
                    break;
                case "_mouseup":
                    je(e, Z.activeClass), Z.bubbleEvents === !0 && r && Te(A({}, t, {
                        type: t.type.slice(1)
                    }));
                    break;
                case "_click":
                    o = null, Z.bubbleEvents === !0 && r && Te(A({}, t, {
                        type: t.type.slice(1)
                    }));
                    break;
                case "_mousemove":
                    Z.bubbleEvents === !0 && r && Te(A({}, t, {
                        type: t.type.slice(1)
                    }))
            }
            return /^_(?:click|mouse(?:over|out|down|up|move))$/.test(t.type) ? !0 : void 0
        },
        ke = function(t) {
            if (t.errors && t.errors.length > 0) {
                var e = P(t);
                A(e, {
                    type: "error",
                    name: "clipboard-error"
                }), delete e.success, l(function() {
                    Ge.emit(e)
                }, 0)
            }
        },
        Te = function(t) {
            if (t && "string" == typeof t.type && t) {
                var e, i = t.target || null,
                    n = i && i.ownerDocument || s,
                    o = {
                        view: n.defaultView || r,
                        canBubble: !0,
                        cancelable: !0,
                        detail: "click" === t.type ? 1 : 0,
                        button: "number" == typeof t.which ? t.which - 1 : "number" == typeof t.button ? t.button : n.createEvent ? 0 : 1
                    },
                    a = A(o, t);
                i && n.createEvent && i.dispatchEvent && (a = [a.type, a.canBubble, a.cancelable, a.view, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, a.button, a.relatedTarget], e = n.createEvent("MouseEvents"), e.initMouseEvent && (e.initMouseEvent.apply(e, a), e._source = "js", i.dispatchEvent(e)))
            }
        },
        Ce = function() {
            var t = Z.flashLoadTimeout;
            if ("number" == typeof t && t >= 0) {
                var e = Math.min(1e3, t / 10),
                    i = Z.swfObjectId + "_fallbackContent";
                q = h(function() {
                    var t = s.getElementById(i);
                    He(t) && (Fe(), z.deactivated = null, Ge.emit({
                        type: "error",
                        name: "swf-not-found"
                    }))
                }, e)
            }
        },
        Se = function() {
            var t = s.createElement("div");
            return t.id = Z.containerId, t.className = Z.containerClass, t.style.position = "absolute", t.style.left = "0px", t.style.top = "-9999px", t.style.width = "1px", t.style.height = "1px", t.style.zIndex = "" + Xe(Z.zIndex), t
        },
        Ae = function(t) {
            for (var e = t && t.parentNode; e && "OBJECT" === e.nodeName && e.parentNode;) e = e.parentNode;
            return e || null
        },
        Pe = function() {
            var t, e = z.bridge,
                i = Ae(e);
            if (!e) {
                var n = Ne(r.location.host, Z),
                    o = "never" === n ? "none" : "all",
                    a = _e(A({
                        jsVersion: Ge.version
                    }, Z)),
                    l = Z.swfPath + Oe(Z.swfPath, Z);
                i = Se();
                var c = s.createElement("div");
                i.appendChild(c), s.body.appendChild(i);
                var h = s.createElement("div"),
                    u = "activex" === z.pluginType;
                h.innerHTML = '<object id="' + Z.swfObjectId + '" name="' + Z.swfObjectId + '" width="100%" height="100%" ' + (u ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + l + '"') + ">" + (u ? '<param name="movie" value="' + l + '"/>' : "") + '<param name="allowScriptAccess" value="' + n + '"/><param name="allowNetworking" value="' + o + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + a + '"/><div id="' + Z.swfObjectId + '_fallbackContent">&nbsp;</div></object>', e = h.firstChild, h = null, C(e).ZeroClipboard = Ge, i.replaceChild(e, c), Ce()
            }
            return e || (e = s[Z.swfObjectId], e && (t = e.length) && (e = e[t - 1]), !e && i && (e = i.firstChild)), z.bridge = e || null, e
        },
        Ee = function() {
            var t = z.bridge;
            if (t) {
                var n = Ae(t);
                n && ("activex" === z.pluginType && "readyState" in t ? (t.style.display = "none", function o() {
                    if (4 === t.readyState) {
                        for (var e in t) "function" == typeof t[e] && (t[e] = null);
                        t.parentNode && t.parentNode.removeChild(t), n.parentNode && n.parentNode.removeChild(n)
                    } else l(o, 10)
                }()) : (t.parentNode && t.parentNode.removeChild(t), n.parentNode && n.parentNode.removeChild(n))), Fe(), z.ready = null, z.bridge = null, z.deactivated = null, i = e
            }
        },
        Le = function(t) {
            var e = {},
                i = {};
            if ("object" == typeof t && t) {
                for (var n in t)
                    if (n && k.call(t, n) && "string" == typeof t[n] && t[n]) switch (n.toLowerCase()) {
                        case "text/plain":
                        case "text":
                        case "air:text":
                        case "flash:text":
                            e.text = t[n], i.text = n;
                            break;
                        case "text/html":
                        case "html":
                        case "air:html":
                        case "flash:html":
                            e.html = t[n], i.html = n;
                            break;
                        case "application/rtf":
                        case "text/rtf":
                        case "rtf":
                        case "richtext":
                        case "air:rtf":
                        case "flash:rtf":
                            e.rtf = t[n], i.rtf = n
                    }
                    return {
                        data: e,
                        formatMap: i
                    }
            }
        },
        De = function(t, e) {
            if ("object" != typeof t || !t || "object" != typeof e || !e) return t;
            var i = {};
            for (var n in t)
                if (k.call(t, n))
                    if ("errors" === n) {
                        i[n] = t[n] ? t[n].slice() : [];
                        for (var o = 0, r = i[n].length; r > o; o++) i[n][o].format = e[i[n][o].format]
                    } else if ("success" !== n && "data" !== n) i[n] = t[n];
            else {
                i[n] = {};
                var s = t[n];
                for (var a in s) a && k.call(s, a) && k.call(e, a) && (i[n][e[a]] = s[a])
            }
            return i
        },
        Oe = function(t, e) {
            var i = null == e || e && e.cacheBust === !0;
            return i ? (-1 === t.indexOf("?") ? "?" : "&") + "noCache=" + b() : ""
        },
        _e = function(t) {
            var e, i, n, o, s = "",
                a = [];
            if (t.trustedDomains && ("string" == typeof t.trustedDomains ? o = [t.trustedDomains] : "object" == typeof t.trustedDomains && "length" in t.trustedDomains && (o = t.trustedDomains)), o && o.length)
                for (e = 0, i = o.length; i > e; e++)
                    if (k.call(o, e) && o[e] && "string" == typeof o[e]) {
                        if (n = Me(o[e]), !n) continue;
                        if ("*" === n) {
                            a.length = 0, a.push(n);
                            break
                        }
                        a.push.apply(a, [n, "//" + n, r.location.protocol + "//" + n])
                    }
            return a.length && (s += "trustedOrigins=" + d(a.join(","))), t.forceEnhancedClipboard === !0 && (s += (s ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof t.swfObjectId && t.swfObjectId && (s += (s ? "&" : "") + "swfObjectId=" + d(t.swfObjectId)), "string" == typeof t.jsVersion && t.jsVersion && (s += (s ? "&" : "") + "jsVersion=" + d(t.jsVersion)), s
        },
        Me = function(t) {
            if (null == t || "" === t) return null;
            if (t = t.replace(/^\s+|\s+$/g, ""), "" === t) return null;
            var e = t.indexOf("//");
            t = -1 === e ? t : t.slice(e + 2);
            var i = t.indexOf("/");
            return t = -1 === i ? t : -1 === e || 0 === i ? null : t.slice(0, i), t && ".swf" === t.slice(-4).toLowerCase() ? null : t || null
        },
        Ne = function() {
            var t = function(t) {
                var e, i, n, o = [];
                if ("string" == typeof t && (t = [t]), "object" != typeof t || !t || "number" != typeof t.length) return o;
                for (e = 0, i = t.length; i > e; e++)
                    if (k.call(t, e) && (n = Me(t[e]))) {
                        if ("*" === n) {
                            o.length = 0, o.push("*");
                            break
                        } - 1 === o.indexOf(n) && o.push(n)
                    }
                return o
            };
            return function(e, i) {
                var n = Me(i.swfPath);
                null === n && (n = e);
                var o = t(i.trustedDomains),
                    r = o.length;
                if (r > 0) {
                    if (1 === r && "*" === o[0]) return "always";
                    if (-1 !== o.indexOf(e)) return 1 === r && e === n ? "sameDomain" : "always"
                }
                return "never"
            }
        }(),
        Ie = function() {
            try {
                return s.activeElement
            } catch (t) {
                return null
            }
        },
        $e = function(t, e) {
            var i, n, o, r = [];
            if ("string" == typeof e && e && (r = e.split(/\s+/)), t && 1 === t.nodeType && r.length > 0)
                if (t.classList)
                    for (i = 0, n = r.length; n > i; i++) t.classList.add(r[i]);
                else if (t.hasOwnProperty("className")) {
                for (o = " " + t.className + " ", i = 0, n = r.length; n > i; i++) - 1 === o.indexOf(" " + r[i] + " ") && (o += r[i] + " ");
                t.className = o.replace(/^\s+|\s+$/g, "")
            }
            return t
        },
        je = function(t, e) {
            var i, n, o, r = [];
            if ("string" == typeof e && e && (r = e.split(/\s+/)), t && 1 === t.nodeType && r.length > 0)
                if (t.classList && t.classList.length > 0)
                    for (i = 0, n = r.length; n > i; i++) t.classList.remove(r[i]);
                else if (t.className) {
                for (o = (" " + t.className + " ").replace(/[\r\n\t]/g, " "), i = 0, n = r.length; n > i; i++) o = o.replace(" " + r[i] + " ", " ");
                t.className = o.replace(/^\s+|\s+$/g, "")
            }
            return t
        },
        Re = function(t, e) {
            var i = p(t, null).getPropertyValue(e);
            return "cursor" !== e || i && "auto" !== i || "A" !== t.nodeName ? i : "pointer"
        },
        ze = function(t) {
            var e = {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
            if (t.getBoundingClientRect) {
                var i = t.getBoundingClientRect(),
                    n = r.pageXOffset,
                    o = r.pageYOffset,
                    a = s.documentElement.clientLeft || 0,
                    l = s.documentElement.clientTop || 0,
                    c = 0,
                    h = 0;
                if ("relative" === Re(s.body, "position")) {
                    var u = s.body.getBoundingClientRect(),
                        p = s.documentElement.getBoundingClientRect();
                    c = u.left - p.left || 0, h = u.top - p.top || 0
                }
                e.left = i.left + n - a - c, e.top = i.top + o - l - h, e.width = "width" in i ? i.width : i.right - i.left, e.height = "height" in i ? i.height : i.bottom - i.top
            }
            return e
        },
        He = function(t) {
            if (!t) return !1;
            var e = p(t, null),
                i = v(e.height) > 0,
                n = v(e.width) > 0,
                o = v(e.top) >= 0,
                r = v(e.left) >= 0,
                s = i && n && o && r,
                a = s ? null : ze(t),
                l = "none" !== e.display && "collapse" !== e.visibility && (s || !!a && (i || a.height > 0) && (n || a.width > 0) && (o || a.top >= 0) && (r || a.left >= 0));
            return l
        },
        Fe = function() {
            c(X), X = 0, u(q), q = 0
        },
        Be = function() {
            var t;
            if (n && (t = Ae(z.bridge))) {
                var e = ze(n);
                A(t.style, {
                    width: e.width + "px",
                    height: e.height + "px",
                    top: e.top + "px",
                    left: e.left + "px",
                    zIndex: "" + Xe(Z.zIndex)
                })
            }
        },
        We = function(t) {
            z.ready === !0 && (z.bridge && "function" == typeof z.bridge.setHandCursor ? z.bridge.setHandCursor(t) : z.ready = !1)
        },
        Xe = function(t) {
            if (/^(?:auto|inherit)$/.test(t)) return t;
            var e;
            return "number" != typeof t || y(t) ? "string" == typeof t && (e = Xe(m(t, 10))) : e = t, "number" == typeof e ? e : "auto"
        },
        qe = function(e) {
            var i, n, o, r = z.sandboxed,
                s = null;
            if (e = e === !0, R === !1) s = !1;
            else {
                try {
                    n = t.frameElement || null
                } catch (a) {
                    o = {
                        name: a.name,
                        message: a.message
                    }
                }
                if (n && 1 === n.nodeType && "IFRAME" === n.nodeName) try {
                    s = n.hasAttribute("sandbox")
                } catch (a) {
                    s = null
                } else {
                    try {
                        i = document.domain || null
                    } catch (a) {
                        i = null
                    }(null === i || o && "SecurityError" === o.name && /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(o.message.toLowerCase())) && (s = !0)
                }
            }
            return z.sandboxed = s, r === s || e || Ye(f), s
        },
        Ye = function(t) {
            function e(t) {
                var e = t.match(/[\d]+/g);
                return e.length = 3, e.join(".")
            }

            function i(t) {
                return !!t && (t = t.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(t) || "chrome.plugin" === t.slice(-13))
            }

            function n(t) {
                t && (l = !0, t.version && (u = e(t.version)), !u && t.description && (u = e(t.description)), t.filename && (h = i(t.filename)))
            }
            var o, r, s, l = !1,
                c = !1,
                h = !1,
                u = "";
            if (a.plugins && a.plugins.length) o = a.plugins["Shockwave Flash"], n(o), a.plugins["Shockwave Flash 2.0"] && (l = !0, u = "2.0.0.11");
            else if (a.mimeTypes && a.mimeTypes.length) s = a.mimeTypes["application/x-shockwave-flash"], o = s && s.enabledPlugin, n(o);
            else if ("undefined" != typeof t) {
                c = !0;
                try {
                    r = new t("ShockwaveFlash.ShockwaveFlash.7"), l = !0, u = e(r.GetVariable("$version"))
                } catch (p) {
                    try {
                        r = new t("ShockwaveFlash.ShockwaveFlash.6"), l = !0, u = "6.0.21"
                    } catch (d) {
                        try {
                            r = new t("ShockwaveFlash.ShockwaveFlash"), l = !0, u = e(r.GetVariable("$version"))
                        } catch (f) {
                            c = !1
                        }
                    }
                }
            }
            z.disabled = l !== !0, z.outdated = u && v(u) < v(H), z.version = u || "0.0.0", z.pluginType = h ? "pepper" : c ? "activex" : l ? "netscape" : "unknown"
        };
    Ye(f), qe(!0);
    var Ge = function() {
        return this instanceof Ge ? void("function" == typeof Ge._createClient && Ge._createClient.apply(this, S(arguments))) : new Ge
    };
    w(Ge, "version", {
        value: "2.2.0",
        writable: !1,
        configurable: !0,
        enumerable: !0
    }), Ge.config = function() {
        return Q.apply(this, S(arguments))
    }, Ge.state = function() {
        return J.apply(this, S(arguments))
    }, Ge.isFlashUnusable = function() {
        return te.apply(this, S(arguments))
    }, Ge.on = function() {
        return ee.apply(this, S(arguments))
    }, Ge.off = function() {
        return ie.apply(this, S(arguments))
    }, Ge.handlers = function() {
        return ne.apply(this, S(arguments))
    }, Ge.emit = function() {
        return oe.apply(this, S(arguments))
    }, Ge.create = function() {
        return re.apply(this, S(arguments))
    }, Ge.destroy = function() {
        return se.apply(this, S(arguments))
    }, Ge.setData = function() {
        return ae.apply(this, S(arguments))
    }, Ge.clearData = function() {
        return le.apply(this, S(arguments))
    }, Ge.getData = function() {
        return ce.apply(this, S(arguments))
    }, Ge.focus = Ge.activate = function() {
        return he.apply(this, S(arguments))
    }, Ge.blur = Ge.deactivate = function() {
        return ue.apply(this, S(arguments))
    }, Ge.activeElement = function() {
        return pe.apply(this, S(arguments))
    };
    var Ue = 0,
        Ve = {},
        Ke = 0,
        Ze = {},
        Qe = {};
    A(Z, {
        autoActivate: !0
    });
    var Je = function(t) {
            var e = this;
            e.id = "" + Ue++, Ve[e.id] = {
                instance: e,
                elements: [],
                handlers: {}
            }, t && e.clip(t), Ge.on("*", function(t) {
                return e.emit(t)
            }), Ge.on("destroy", function() {
                e.destroy()
            }), Ge.create()
        },
        ti = function(t, n) {
            var o, r, s, a = {},
                l = Ve[this.id],
                c = l && l.handlers;
            if (!l) throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");
            if ("string" == typeof t && t) s = t.toLowerCase().split(/\s+/);
            else if ("object" == typeof t && t && "undefined" == typeof n)
                for (o in t) k.call(t, o) && "string" == typeof o && o && "function" == typeof t[o] && this.on(o, t[o]);
            if (s && s.length) {
                for (o = 0, r = s.length; r > o; o++) t = s[o].replace(/^on/, ""), a[t] = !0, c[t] || (c[t] = []), c[t].push(n);
                if (a.ready && z.ready && this.emit({
                        type: "ready",
                        client: this
                    }), a.error) {
                    for (o = 0, r = U.length; r > o; o++)
                        if (z[U[o].replace(/^flash-/, "")]) {
                            this.emit({
                                type: "error",
                                name: U[o],
                                client: this
                            });
                            break
                        }
                    i !== e && Ge.version !== i && this.emit({
                        type: "error",
                        name: "version-mismatch",
                        jsVersion: Ge.version,
                        swfVersion: i
                    })
                }
            }
            return this
        },
        ei = function(t, e) {
            var i, n, o, r, s, a = Ve[this.id],
                l = a && a.handlers;
            if (!l) return this;
            if (0 === arguments.length) r = x(l);
            else if ("string" == typeof t && t) r = t.split(/\s+/);
            else if ("object" == typeof t && t && "undefined" == typeof e)
                for (i in t) k.call(t, i) && "string" == typeof i && i && "function" == typeof t[i] && this.off(i, t[i]);
            if (r && r.length)
                for (i = 0, n = r.length; n > i; i++)
                    if (t = r[i].toLowerCase().replace(/^on/, ""), s = l[t], s && s.length)
                        if (e)
                            for (o = s.indexOf(e); - 1 !== o;) s.splice(o, 1), o = s.indexOf(e, o);
                        else s.length = 0;
            return this
        },
        ii = function(t) {
            var e = null,
                i = Ve[this.id] && Ve[this.id].handlers;
            return i && (e = "string" == typeof t && t ? i[t] ? i[t].slice(0) : [] : P(i)), e
        },
        ni = function(t) {
            if (li.call(this, t)) {
                "object" == typeof t && t && "string" == typeof t.type && t.type && (t = A({}, t));
                var e = A({}, fe(t), {
                    client: this
                });
                ci.call(this, e)
            }
            return this
        },
        oi = function(t) {
            if (!Ve[this.id]) throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");
            t = hi(t);
            for (var e = 0; e < t.length; e++)
                if (k.call(t, e) && t[e] && 1 === t[e].nodeType) {
                    t[e].zcClippingId ? -1 === Ze[t[e].zcClippingId].indexOf(this.id) && Ze[t[e].zcClippingId].push(this.id) : (t[e].zcClippingId = "zcClippingId_" + Ke++, Ze[t[e].zcClippingId] = [this.id], Z.autoActivate === !0 && ui(t[e]));
                    var i = Ve[this.id] && Ve[this.id].elements; - 1 === i.indexOf(t[e]) && i.push(t[e])
                }
            return this
        },
        ri = function(t) {
            var e = Ve[this.id];
            if (!e) return this;
            var i, n = e.elements;
            t = "undefined" == typeof t ? n.slice(0) : hi(t);
            for (var o = t.length; o--;)
                if (k.call(t, o) && t[o] && 1 === t[o].nodeType) {
                    for (i = 0; - 1 !== (i = n.indexOf(t[o], i));) n.splice(i, 1);
                    var r = Ze[t[o].zcClippingId];
                    if (r) {
                        for (i = 0; - 1 !== (i = r.indexOf(this.id, i));) r.splice(i, 1);
                        0 === r.length && (Z.autoActivate === !0 && pi(t[o]), delete t[o].zcClippingId)
                    }
                }
            return this
        },
        si = function() {
            var t = Ve[this.id];
            return t && t.elements ? t.elements.slice(0) : []
        },
        ai = function() {
            Ve[this.id] && (this.unclip(), this.off(), delete Ve[this.id])
        },
        li = function(t) {
            if (!t || !t.type) return !1;
            if (t.client && t.client !== this) return !1;
            var e = Ve[this.id],
                i = e && e.elements,
                n = !!i && i.length > 0,
                o = !t.target || n && -1 !== i.indexOf(t.target),
                r = t.relatedTarget && n && -1 !== i.indexOf(t.relatedTarget),
                s = t.client && t.client === this;
            return e && (o || r || s) ? !0 : !1
        },
        ci = function(t) {
            var e = Ve[this.id];
            if ("object" == typeof t && t && t.type && e) {
                var i = ve(t),
                    n = e && e.handlers["*"] || [],
                    o = e && e.handlers[t.type] || [],
                    s = n.concat(o);
                if (s && s.length) {
                    var a, l, c, h, u, p = this;
                    for (a = 0, l = s.length; l > a; a++) c = s[a], h = p, "string" == typeof c && "function" == typeof r[c] && (c = r[c]), "object" == typeof c && c && "function" == typeof c.handleEvent && (h = c, c = c.handleEvent), "function" == typeof c && (u = A({}, t), ye(c, h, [u], i))
                }
            }
        },
        hi = function(t) {
            return "string" == typeof t && (t = []), "number" != typeof t.length ? [t] : t
        },
        ui = function(t) {
            if (t && 1 === t.nodeType) {
                var e = function(t) {
                        (t || (t = r.event)) && ("js" !== t._source && (t.stopImmediatePropagation(), t.preventDefault()), delete t._source)
                    },
                    i = function(i) {
                        (i || (i = r.event)) && (e(i), Ge.focus(t))
                    };
                t.addEventListener("mouseover", i, !1), t.addEventListener("mouseout", e, !1), t.addEventListener("mouseenter", e, !1), t.addEventListener("mouseleave", e, !1), t.addEventListener("mousemove", e, !1), Qe[t.zcClippingId] = {
                    mouseover: i,
                    mouseout: e,
                    mouseenter: e,
                    mouseleave: e,
                    mousemove: e
                }
            }
        },
        pi = function(t) {
            if (t && 1 === t.nodeType) {
                var e = Qe[t.zcClippingId];
                if ("object" == typeof e && e) {
                    for (var i, n, o = ["move", "leave", "enter", "out", "over"], r = 0, s = o.length; s > r; r++) i = "mouse" + o[r], n = e[i], "function" == typeof n && t.removeEventListener(i, n, !1);
                    delete Qe[t.zcClippingId]
                }
            }
        };
    Ge._createClient = function() {
        Je.apply(this, S(arguments))
    }, Ge.prototype.on = function() {
        return ti.apply(this, S(arguments))
    }, Ge.prototype.off = function() {
        return ei.apply(this, S(arguments))
    }, Ge.prototype.handlers = function() {
        return ii.apply(this, S(arguments))
    }, Ge.prototype.emit = function() {
        return ni.apply(this, S(arguments))
    }, Ge.prototype.clip = function() {
        return oi.apply(this, S(arguments))
    }, Ge.prototype.unclip = function() {
        return ri.apply(this, S(arguments))
    }, Ge.prototype.elements = function() {
        return si.apply(this, S(arguments))
    }, Ge.prototype.destroy = function() {
        return ai.apply(this, S(arguments))
    }, Ge.prototype.setText = function(t) {
        if (!Ve[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Ge.setData("text/plain", t), this
    }, Ge.prototype.setHtml = function(t) {
        if (!Ve[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Ge.setData("text/html", t), this
    }, Ge.prototype.setRichText = function(t) {
        if (!Ve[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Ge.setData("application/rtf", t), this
    }, Ge.prototype.setData = function() {
        if (!Ve[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Ge.setData.apply(this, S(arguments)), this
    }, Ge.prototype.clearData = function() {
        if (!Ve[this.id]) throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");
        return Ge.clearData.apply(this, S(arguments)), this
    }, Ge.prototype.getData = function() {
        if (!Ve[this.id]) throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");
        return Ge.getData.apply(this, S(arguments))
    }, "function" == typeof define && define.amd ? define(function() {
        return Ge
    }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = Ge : t.ZeroClipboard = Ge
}(function() {
    return this || window
}()),
function(t) {
    "use strict";

    function e(t, e) {
        return this.on("click.pjaxr", t, function(t) {
            r(t, e)
        })
    }

    function i(e) {
        return t.isReady ? t(document).one("pjaxr:done", e) : t(document).ready(e)
    }

    function n(e) {
        return t.isReady || t(document).ready(e), t(document).on("pjaxr:done", e)
    }

    function o(i, n) {
        if ("string" == typeof i) {
            var o = document.createElement("A");
            o.href = i, i = o
        }
        if ("A" !== i.tagName.toUpperCase()) throw "$.fn.pjaxr requires an anchor element";
        if ((location.protocol === i.protocol && location.hostname === i.hostname || ":" === i.protocol && "" === i.hostname) && (!i.hash || i.href.replace(i.hash, "") !== location.href.replace(location.hash, "")) && i.href !== location.href + "#") {
            var r = t.isFunction(i.href) ? i.href() : i.href,
                s = r; - 1 == s.indexOf("pjaxr") && (s += -1 == r.indexOf("?") ? "?pjaxr" : "&pjaxr");
            var u = {
                    url: s,
                    plainUrl: r,
                    type: "GET",
                    dataType: "html"
                },
                f = e.options = t.extend(!0, {}, t.ajaxSettings, u, t.fn.pjaxr.defaults, n);
            y || (y = t("body").data("pjaxr-namespace") || "");
            var g;
            f.beforeSend = function(t, e) {
                return c("pjaxr:beforeSend", [t, e]) ? (t.setRequestHeader("X-PJAX", "true"), t.setRequestHeader("X-PJAX-NAMESPACE", y), e.timeout > 0 && (g = setTimeout(function() {
                    c("pjaxr:timeout", [t, f]) && t.abort("timeout")
                }, e.timeout), e.timeout = 0), !0) : !1
            }, e.state || (e.state = {
                id: p(),
                namespace: y,
                url: window.location.href,
                title: document.title
            }, window.history.replaceState(e.state, e.state.title, e.state.url));
            var m = e.xhr;
            m && m.readyState < 4 && (m.onreadystatechange = t.noop, m.abort()), m = e.xhr = t.ajax(f), m.readyState > 0 && (c("pjaxr:start", [f]), c("pjaxr:send", [f])), m.done(function(i, n, o) {
                c("pjaxr:success", [f]);
                var r = "function" == typeof f.version ? f.version() : f.version,
                    s = o.getResponseHeader("X-PJAX-Version");
                if (r && s && r !== s) return void d(f.plainUrl);
                var u = i.match(/<pjaxr-head>([\s\S.]*)<\/pjaxr-head>/i),
                    g = i.match(/<pjaxr-body>([\s\S.]*)<\/pjaxr-body>/i);
                if (!u && !g) return void d(f.plainUrl);
                c("pjaxr:success", [i, n, o, f]), document.activeElement.blur();
                var m = p();
                if (u) var v = t(h(u[0])),
                    b = a("forward", v.children(), null, null),
                    x = b[0],
                    w = b[1],
                    k = b[2];
                if (g) var T = t(h(g[0])),
                    C = l(T.children()),
                    S = C[0],
                    A = C[1];
                var P = i.match(/<pjaxr-namespace>([\s\S.]*)<\/pjaxr-namespace>/i);
                P && (y = t(h(P[0].replace(/(\r\n|\n|\r|\s|\t)/gm, ""))).html()), t(document).find("input[autofocus], textarea[autofocus]").last().focus(), "number" == typeof f.scrollTo && t(window).scrollTop(f.scrollTo), t.extend(e.state, {
                    head_revert: u ? w : null,
                    head_remove: u ? k : null,
                    body_revert: g ? A : null
                }), (f.push || f.replace) && window.history.replaceState(e.state, e.state.title, e.state.url), e.state = {
                    id: m,
                    namespace: y,
                    url: f.plainUrl,
                    title: document.title,
                    head_apply: u ? x : null,
                    body_apply: g ? S : null
                }, f.push ? window.history.pushState(e.state, e.state.title, e.state.url) : f.replace && window.history.replaceState(e.state, e.state.title, e.state.url), c("pjaxr:done", [i, n, o, f])
            }), m.fail(function(t, e, i) {
                "abort" !== e && c("pjaxr:fail", [t, e, i, f]) && d(f.plainUrl)
            }), m.always(function() {
                g && clearTimeout(g), c("pjaxr:always", [f]), c("pjaxr:end", [f])
            })
        }
    }

    function r(t, e) {
        var i = t.currentTarget;
        if ("A" !== i.tagName.toUpperCase()) throw "$.fn.pjaxr requires an anchor element";
        if (!(t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.isDefaultPrevented())) {
            if (!c("pjaxr:click")) return void t.preventDefault();
            o(i, e), t.preventDefault()
        }
    }

    function s(e, i) {
        var n = [],
            o = [],
            r = [];
        return e && e.length > 0 && t.each(e, function(e, s) {
            var a = t(s);
            if (a.is("title")) document.title = a.text();
            else if (a.is("meta")) {
                var l, c = a.attr("name"),
                    h = a.attr("property");
                c ? l = t('head > meta[name="' + c + '"]') : h && (l = t('head > meta[property="' + h + '"]')), void 0 !== l && (l.length > 0 ? (r.push(u(l)), l.remove()) : o.push(u(a)), i === !0 && (t("head").append(a), n.push(u(a))))
            } else if (a.is("link")) {
                var p = a.attr("href");
                if (p) {
                    var d = t('head > link[href="' + p + '"]');
                    d.length > 0 ? (r.push(u(d)), d.remove()) : o.push(u(a)), i === !0 && (t("head").append(a), n.push(u(a)))
                }
            } else if (a.is("script")) {
                var f = a.attr("src");
                if (f) {
                    var g = t('head > script[src="' + f + '"]');
                    g.length > 0 ? (r.push(u(g)), g.remove()) : o.push(u(a)), i === !0 && (t("head").append(a), n.push(u(a)))
                }
            } else a.is("style") && i === !0 && (t("head").append(a), n.push(u(a)), o.push(u(a)))
        }), [n, o, r]
    }

    function a(e, i, n, o) {
        var r = [],
            a = [],
            l = [];
        if ("forward" === e) t("head > [data-remove-on-pjaxr]").each(function() {
            var e = t(this);
            l.push(u(e)), e.remove()
        });
        else if ("back" === e) {
            var c = s(n, !1),
                h = s(o, !0);
            t.extend(a, c[1]), t.extend(l, h[2])
        }
        var p = s(i, !0);
        return t.extend(r, p[0]), t.extend(a, p[1]), t.extend(l, p[2]), [r, a, l]
    }

    function l(e) {
        var i = [],
            n = [];
        return e && e.length > 0 && t.each(e, function(e, o) {
            var r = t(o),
                s = r.attr("id");
            if (s) {
                var a = t("#" + s);
                if (a.length > 0) {
                    n.push(u(a));
                    try {
                        a.html(r.html())
                    } catch (l) {
                        window.console && console.error(l)
                    }
                    i.push(u(a))
                }
            }
        }), [i, n]
    }

    function c(e, i) {
        var n = t.Event(e);
        return t(document).trigger(n, i), !n.isDefaultPrevented()
    }

    function h(e) {
        return t.parseHTML(e, document, !0)
    }

    function u(t) {
        return t.clone().wrap("<p>").parent().html()
    }

    function p() {
        return (new Date).getTime()
    }

    function d(t) {
        window.location.href = t
    }

    function f(t) {
        var i = t.state;
        if (i) {
            if (b && x == i.url) return;
            c("pjaxr:start", [e.options]), document.title = i.title;
            var n = e.state.id < i.id ? "forward" : "back";
            a(n, i.head_apply, i.head_revert, i.head_remove);
            var o = "forward" === n ? i.body_apply : i.body_revert;
            o && o.length > 0 && l(o), e.state = i, y = i.namespace, document.body.offsetHeight, c("pjaxr:end", [e.options])
        }
        b = !1
    }

    function g() {
        return t("meta").filter(function() {
            return "X-PJAX-VERSION" === String(t(this).attr("http-equiv")).toUpperCase()
        }).attr("content")
    }

    function m() {
        t.fn.pjaxr = e, t.fn.pjaxrReady = i, t.fn.pjaxrAlways = n, t.fn.pjaxr.click = r, t.fn.pjaxr.request = o, t.fn.pjaxr.enable = t.noop, t.fn.pjaxr.disable = v, t.fn.pjaxr.defaults = {
            timeout: 650,
            push: !0,
            replace: !1,
            scrollTo: 0,
            version: g
        }, t(window).on("popstate.pjaxr", f)
    }

    function v() {
        t.fn.pjaxr = function() {
            return this
        }, t.fn.pjaxrReady = function(e) {
            return t(document).ready(e)
        }, t.fn.pjaxrAlways = function(e) {
            return t(document).ready(e)
        }, t.fn.pjaxr.enable = m, t.fn.pjaxr.disable = t.noop, t(window).off("popstate.pjaxr", f)
    }
    var y, b = !0,
        x = window.location.href,
        w = window.history.state;
    w && (e.state = w), "state" in window.history && (b = !1), t.inArray("state", t.event.props) < 0 && t.event.props.push("state"), t.support.pjaxr = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/), t.support.pjaxr ? m() : v()
}(jQuery), $.fn.serializeObject = function() {
    var t = {},
        e = this.serializeArray();
    $.each(e, function() {
        void 0 !== t[this.name] ? (t[this.name].push || (t[this.name] = [t[this.name]]), t[this.name].push(this.value || "")) : t[this.name] = this.value || ""
    });
    var i = $(this);
    return i.find("[multiple], input[type=checkbox]").each(function() {
        t[$(this).attr("name")] instanceof Array || !($(this).is("[multiple]") || i.find('input[name="' + $(this).attr("name") + '"]').length > 1) ? 1 == i.find('input[name="' + $(this).attr("name") + '"]').length && (t[$(this).attr("name")] = $(this).is(":checked")) : t[$(this).attr("name")] = void 0 === t[$(this).attr("name")] ? [] : [t[$(this).attr("name")]]
    }), t
}