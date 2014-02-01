! function (a, b) {
    function c(a) {
        var b = a.length,
            c = ib.type(a);
        return ib.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function d(a) {
        var b = xb[a] = {};
        return ib.each(a.match(kb) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function e(a, c, d, e) {
        if (ib.acceptData(a)) {
            var f, g, h = ib.expando,
                i = "string" == typeof c,
                j = a.nodeType,
                k = j ? ib.cache : a,
                l = j ? a[h] : a[h] && h;
            if (l && k[l] && (e || k[l].data) || !i || d !== b) return l || (j ? a[h] = l = _.pop() || ib.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = ib.noop)), ("object" == typeof c || "function" == typeof c) && (e ? k[l] = ib.extend(k[l], c) : k[l].data = ib.extend(k[l].data, c)), f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[ib.camelCase(c)] = d), i ? (g = f[c], null == g && (g = f[ib.camelCase(c)])) : g = f, g
        }
    }

    function f(a, b, c) {
        if (ib.acceptData(a)) {
            var d, e, f, g = a.nodeType,
                i = g ? ib.cache : a,
                j = g ? a[ib.expando] : ib.expando;
            if (i[j]) {
                if (b && (f = c ? i[j] : i[j].data)) {
                    ib.isArray(b) ? b = b.concat(ib.map(b, ib.camelCase)) : b in f ? b = [b] : (b = ib.camelCase(b), b = b in f ? [b] : b.split(" "));
                    for (d = 0, e = b.length; e > d; d++) delete f[b[d]];
                    if (!(c ? h : ib.isEmptyObject)(f)) return
                }(c || (delete i[j].data, h(i[j]))) && (g ? ib.cleanData([a], !0) : ib.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null)
            }
        }
    }

    function g(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(zb, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : yb.test(d) ? ib.parseJSON(d) : d
                } catch (f) {}
                ib.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b;
        for (b in a)
            if (("data" !== b || !ib.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function i() {
        return !0
    }

    function j() {
        return !1
    }

    function k(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function l(a, b, c) {
        if (b = b || 0, ib.isFunction(b)) return ib.grep(a, function (a, d) {
            var e = !! b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return ib.grep(a, function (a) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = ib.grep(a, function (a) {
                return 1 === a.nodeType
            });
            if (Rb.test(b)) return ib.filter(b, d, !c);
            b = ib.filter(b, d)
        }
        return ib.grep(a, function (a) {
            return ib.inArray(a, b) >= 0 === c
        })
    }

    function m(a) {
        var b = Ub.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function n(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }

    function o(a) {
        var b = a.getAttributeNode("type");
        return a.type = (b && b.specified) + "/" + a.type, a
    }

    function p(a) {
        var b = ec.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function q(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) ib._data(c, "globalEval", !b || ib._data(b[d], "globalEval"))
    }

    function r(a, b) {
        if (1 === b.nodeType && ib.hasData(a)) {
            var c, d, e, f = ib._data(a),
                g = ib._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) ib.event.add(b, c, h[c][d])
            }
            g.data && (g.data = ib.extend({}, g.data))
        }
    }

    function s(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !ib.support.noCloneEvent && b[ib.expando]) {
                e = ib._data(b);
                for (d in e.events) ib.removeEvent(b, d, e.handle);
                b.removeAttribute(ib.expando)
            }
            "script" === c && b.text !== a.text ? (o(b).text = a.text, p(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ib.support.html5Clone && a.innerHTML && !ib.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bc.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    function t(a, c) {
        var d, e, f = 0,
            g = typeof a.getElementsByTagName !== V ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== V ? a.querySelectorAll(c || "*") : b;
        if (!g)
            for (g = [], d = a.childNodes || a; null != (e = d[f]); f++)!c || ib.nodeName(e, c) ? g.push(e) : ib.merge(g, t(e, c));
        return c === b || c && ib.nodeName(a, c) ? ib.merge([a], g) : g
    }

    function u(a) {
        bc.test(a.type) && (a.defaultChecked = a.checked)
    }

    function v(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yc.length; e--;)
            if (b = yc[e] + c, b in a) return b;
        return d
    }

    function w(a, b) {
        return a = b || a, "none" === ib.css(a, "display") || !ib.contains(a.ownerDocument, a)
    }

    function x(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ib._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && w(d) && (f[g] = ib._data(d, "olddisplay", B(d.nodeName)))) : f[g] || (e = w(d), (c && "none" !== c || !e) && ib._data(d, "olddisplay", e ? c : ib.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function y(a, b, c) {
        var d = rc.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ib.css(a, c + xc[f], !0, e)), d ? ("content" === c && (g -= ib.css(a, "padding" + xc[f], !0, e)), "margin" !== c && (g -= ib.css(a, "border" + xc[f] + "Width", !0, e))) : (g += ib.css(a, "padding" + xc[f], !0, e), "padding" !== c && (g += ib.css(a, "border" + xc[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = kc(a),
            g = ib.support.boxSizing && "border-box" === ib.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = lc(a, b, f), (0 > e || null == e) && (e = a.style[b]), sc.test(e)) return e;
            d = g && (ib.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a) {
        var b = W,
            c = uc[a];
        return c || (c = C(a, b), "none" !== c && c || (jc = (jc || ib("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (jc[0].contentWindow || jc[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = C(a, b), jc.detach()), uc[a] = c), c
    }

    function C(a, b) {
        var c = ib(b.createElement(a)).appendTo(b.body),
            d = ib.css(c[0], "display");
        return c.remove(), d
    }

    function D(a, b, c, d) {
        var e;
        if (ib.isArray(b)) ib.each(b, function (b, e) {
            c || Ac.test(a) ? d(a, e) : D(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== ib.type(b)) d(a, b);
        else
            for (e in b) D(a + "[" + e + "]", b[e], c, d)
    }

    function E(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(kb) || [];
            if (ib.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function F(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, ib.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {}, g = a === Rc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function G(a, c) {
        var d, e, f = ib.ajaxSettings.flatOptions || {};
        for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
        return d && ib.extend(!0, a, d), a
    }

    function H(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (h in k) h in d && (c[k[h]] = d[h]);
        for (;
            "*" === j[0];) j.shift(), f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
        if (f)
            for (h in i)
                if (i[h] && i[h].test(f)) {
                    j.unshift(h);
                    break
                }
        if (j[0] in d) g = j[0];
        else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) {
                    g = h;
                    break
                }
                e || (e = h)
            }
            g = g || e
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }

    function I(a, b) {
        var c, d, e, f, g = {}, h = 0,
            i = a.dataTypes.slice(),
            j = i[0];
        if (a.dataFilter && (b = a.dataFilter(b, a.dataType)), i[1])
            for (e in a.converters) g[e.toLowerCase()] = a.converters[e];
        for (; d = i[++h];)
            if ("*" !== d) {
                if ("*" !== j && j !== d) {
                    if (e = g[j + " " + d] || g["* " + d], !e)
                        for (c in g)
                            if (f = c.split(" "), f[1] === d && (e = g[j + " " + f[0]] || g["* " + f[0]])) {
                                e === !0 ? e = g[c] : g[c] !== !0 && (d = f[0], i.splice(h--, 0, d));
                                break
                            }
                    if (e !== !0)
                        if (e && a["throws"]) b = e(b);
                        else try {
                            b = e(b)
                        } catch (k) {
                            return {
                                state: "parsererror",
                                error: e ? k : "No conversion from " + j + " to " + d
                            }
                        }
                }
                j = d
            }
        return {
            state: "success",
            data: b
        }
    }

    function J() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function K() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function L() {
        return setTimeout(function () {
            $c = b
        }), $c = ib.now()
    }

    function M(a, b) {
        ib.each(b, function (b, c) {
            for (var d = (ed[b] || []).concat(ed["*"]), e = 0, f = d.length; f > e; e++)
                if (d[e].call(a, b, c)) return
        })
    }

    function N(a, b, c) {
        var d, e, f = 0,
            g = dd.length,
            h = ib.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = $c || L(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            }, j = h.promise({
                elem: a,
                props: ib.extend({}, b),
                opts: ib.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $c || L(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = ib.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (O(k, j.opts.specialEasing); g > f; f++)
            if (d = dd[f].call(j, a, k, j.opts)) return d;
        return M(j, k), ib.isFunction(j.opts.start) && j.opts.start.call(a, j), ib.fx.timer(ib.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function O(a, b) {
        var c, d, e, f, g;
        for (e in a)
            if (d = ib.camelCase(e), f = b[d], c = a[e], ib.isArray(c) && (f = c[1], c = a[e] = c[0]), e !== d && (a[d] = c, delete a[e]), g = ib.cssHooks[d], g && "expand" in g) {
                c = g.expand(c), delete a[d];
                for (e in c) e in a || (a[e] = c[e], b[e] = f)
            } else b[d] = f
    }

    function P(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m = this,
            n = a.style,
            o = {}, p = [],
            q = a.nodeType && w(a);
        c.queue || (k = ib._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function () {
            k.unqueued || l()
        }), k.unqueued++, m.always(function () {
            m.always(function () {
                k.unqueued--, ib.queue(a, "fx").length || k.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === ib.css(a, "display") && "none" === ib.css(a, "float") && (ib.support.inlineBlockNeedsLayout && "inline" !== B(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ib.support.shrinkWrapBlocks || m.always(function () {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (e in b)
            if (g = b[e], ad.exec(g)) {
                if (delete b[e], i = i || "toggle" === g, g === (q ? "hide" : "show")) continue;
                p.push(e)
            }
        if (f = p.length) {
            h = ib._data(a, "fxshow") || ib._data(a, "fxshow", {}), "hidden" in h && (q = h.hidden), i && (h.hidden = !q), q ? ib(a).show() : m.done(function () {
                ib(a).hide()
            }), m.done(function () {
                var b;
                ib._removeData(a, "fxshow");
                for (b in o) ib.style(a, b, o[b])
            });
            for (e = 0; f > e; e++) d = p[e], j = m.createTween(d, q ? h[d] : 0), o[d] = h[d] || ib.style(a, d), d in h || (h[d] = j.start, q && (j.end = j.start, j.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Q(a, b, c, d, e) {
        return new Q.prototype.init(a, b, c, d, e)
    }

    function R(a, b) {
        var c, d = {
                height: a
            }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xc[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function S(a) {
        return ib.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var T, U, V = typeof b,
        W = a.document,
        X = a.location,
        Y = a.jQuery,
        Z = a.$,
        $ = {}, _ = [],
        ab = "1.9.1",
        bb = _.concat,
        cb = _.push,
        db = _.slice,
        eb = _.indexOf,
        fb = $.toString,
        gb = $.hasOwnProperty,
        hb = ab.trim,
        ib = function (a, b) {
            return new ib.fn.init(a, b, U)
        }, jb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        kb = /\S+/g,
        lb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mb = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        nb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ob = /^[\],:{}\s]*$/,
        pb = /(?:^|:|,)(?:\s*\[)+/g,
        qb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        rb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        sb = /^-ms-/,
        tb = /-([\da-z])/gi,
        ub = function (a, b) {
            return b.toUpperCase()
        }, vb = function (a) {
            (W.addEventListener || "load" === a.type || "complete" === W.readyState) && (wb(), ib.ready())
        }, wb = function () {
            W.addEventListener ? (W.removeEventListener("DOMContentLoaded", vb, !1), a.removeEventListener("load", vb, !1)) : (W.detachEvent("onreadystatechange", vb), a.detachEvent("onload", vb))
        };
    ib.fn = ib.prototype = {
        jquery: ab,
        constructor: ib,
        init: function (a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : mb.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof ib ? c[0] : c, ib.merge(this, ib.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : W, !0)), nb.test(e[1]) && ib.isPlainObject(c))
                        for (e in c) ib.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this
                }
                if (f = W.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return d.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = W, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ib.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), ib.makeArray(a, this))
        },
        selector: "",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return db.call(this)
        },
        get: function (a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function (a) {
            var b = ib.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a, b) {
            return ib.each(this, a, b)
        },
        ready: function (a) {
            return ib.ready.promise().done(a), this
        },
        slice: function () {
            return this.pushStack(db.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        map: function (a) {
            return this.pushStack(ib.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: cb,
        sort: [].sort,
        splice: [].splice
    }, ib.fn.init.prototype = ib.fn, ib.extend = ib.fn.extend = function () {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1,
            j = arguments.length,
            k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || ib.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
            if (null != (f = arguments[i]))
                for (e in f) a = h[e], d = f[e], h !== d && (k && d && (ib.isPlainObject(d) || (c = ib.isArray(d))) ? (c ? (c = !1, g = a && ib.isArray(a) ? a : []) : g = a && ib.isPlainObject(a) ? a : {}, h[e] = ib.extend(k, g, d)) : d !== b && (h[e] = d));
        return h
    }, ib.extend({
        noConflict: function (b) {
            return a.$ === ib && (a.$ = Z), b && a.jQuery === ib && (a.jQuery = Y), ib
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? ib.readyWait++ : ib.ready(!0)
        },
        ready: function (a) {
            if (a === !0 ? !--ib.readyWait : !ib.isReady) {
                if (!W.body) return setTimeout(ib.ready);
                ib.isReady = !0, a !== !0 && --ib.readyWait > 0 || (T.resolveWith(W, [ib]), ib.fn.trigger && ib(W).trigger("ready").off("ready"))
            }
        },
        isFunction: function (a) {
            return "function" === ib.type(a)
        },
        isArray: Array.isArray || function (a) {
            return "array" === ib.type(a)
        },
        isWindow: function (a) {
            return null != a && a == a.window
        },
        isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function (a) {
            return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? $[fb.call(a)] || "object" : typeof a
        },
        isPlainObject: function (a) {
            if (!a || "object" !== ib.type(a) || a.nodeType || ib.isWindow(a)) return !1;
            try {
                if (a.constructor && !gb.call(a, "constructor") && !gb.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            var d;
            for (d in a);
            return d === b || gb.call(a, d)
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        error: function (a) {
            throw new Error(a)
        },
        parseHTML: function (a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || W;
            var d = nb.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = ib.buildFragment([a], b, e), e && ib(e).remove(), ib.merge([], d.childNodes))
        },
        parseJSON: function (b) {
            return a.JSON && a.JSON.parse ? a.JSON.parse(b) : null === b ? b : "string" == typeof b && (b = ib.trim(b), b && ob.test(b.replace(qb, "@").replace(rb, "]").replace(pb, ""))) ? new Function("return " + b)() : (ib.error("Invalid JSON: " + b), void 0)
        },
        parseXML: function (c) {
            var d, e;
            if (!c || "string" != typeof c) return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (f) {
                d = b
            }
            return d && d.documentElement && !d.getElementsByTagName("parsererror").length || ib.error("Invalid XML: " + c), d
        },
        noop: function () {},
        globalEval: function (b) {
            b && ib.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function (a) {
            return a.replace(sb, "ms-").replace(tb, ub)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break; return a
        },
        trim: hb && !hb.call("ï»¿Â ") ? function (a) {
            return null == a ? "" : hb.call(a)
        } : function (a) {
            return null == a ? "" : (a + "").replace(lb, "")
        },
        makeArray: function (a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? ib.merge(d, "string" == typeof a ? [a] : a) : cb.call(d, a)), d
        },
        inArray: function (a, b, c) {
            var d;
            if (b) {
                if (eb) return eb.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function (a, c) {
            var d = c.length,
                e = a.length,
                f = 0;
            if ("number" == typeof d)
                for (; d > f; f++) a[e++] = c[f];
            else
                for (; c[f] !== b;) a[e++] = c[f++];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            var d, e = [],
                f = 0,
                g = a.length;
            for (c = !! c; g > f; f++) d = !! b(a[f], f), c !== d && e.push(a[f]);
            return e
        },
        map: function (a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
            else
                for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
            return bb.apply([], i)
        },
        guid: 1,
        proxy: function (a, c) {
            var d, e, f;
            return "string" == typeof c && (f = a[c], c = a, a = f), ib.isFunction(a) ? (d = db.call(arguments, 2), e = function () {
                return a.apply(c || this, d.concat(db.call(arguments)))
            }, e.guid = a.guid = a.guid || ib.guid++, e) : b
        },
        access: function (a, c, d, e, f, g, h) {
            var i = 0,
                j = a.length,
                k = null == d;
            if ("object" === ib.type(d)) {
                f = !0;
                for (i in d) ib.access(a, c, i, d[i], !0, g, h)
            } else if (e !== b && (f = !0, ib.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function (a, b, c) {
                return k.call(ib(a), c)
            })), c))
                for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
        },
        now: function () {
            return (new Date).getTime()
        }
    }), ib.ready.promise = function (b) {
        if (!T)
            if (T = ib.Deferred(), "complete" === W.readyState) setTimeout(ib.ready);
            else if (W.addEventListener) W.addEventListener("DOMContentLoaded", vb, !1), a.addEventListener("load", vb, !1);
        else {
            W.attachEvent("onreadystatechange", vb), a.attachEvent("onload", vb);
            var c = !1;
            try {
                c = null == a.frameElement && W.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!ib.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    wb(), ib.ready()
                }
            }()
        }
        return T.promise(b)
    }, ib.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        $["[object " + b + "]"] = b.toLowerCase()
    }), U = ib(W);
    var xb = {};
    ib.Callbacks = function (a) {
        a = "string" == typeof a ? xb[a] || d(a) : ib.extend({}, a);
        var c, e, f, g, h, i, j = [],
            k = !a.once && [],
            l = function (b) {
                for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++)
                    if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                        e = !1;
                        break
                    }
                c = !1, j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable())
            }, m = {
                add: function () {
                    if (j) {
                        var b = j.length;
                        ! function d(b) {
                            ib.each(b, function (b, c) {
                                var e = ib.type(c);
                                "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                            })
                        }(arguments), c ? g = j.length : e && (i = b, l(e))
                    }
                    return this
                },
                remove: function () {
                    return j && ib.each(arguments, function (a, b) {
                        for (var d;
                            (d = ib.inArray(b, j, d)) > -1;) j.splice(d, 1), c && (g >= d && g--, h >= d && h--)
                    }), this
                },
                has: function (a) {
                    return a ? ib.inArray(a, j) > -1 : !(!j || !j.length)
                },
                empty: function () {
                    return j = [], this
                },
                disable: function () {
                    return j = k = e = b, this
                },
                disabled: function () {
                    return !j
                },
                lock: function () {
                    return k = b, e || m.disable(), this
                },
                locked: function () {
                    return !k
                },
                fireWith: function (a, b) {
                    return b = b || [], b = [a, b.slice ? b.slice() : b], !j || f && !k || (c ? k.push(b) : l(b)), this
                },
                fire: function () {
                    return m.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!f
                }
            };
        return m
    }, ib.extend({
        Deferred: function (a) {
            var b = [
                ["resolve", "done", ib.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ib.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ib.Callbacks("memory")]
            ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return ib.Deferred(function (c) {
                            ib.each(b, function (b, f) {
                                var g = f[0],
                                    h = ib.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = h && h.apply(this, arguments);
                                    a && ib.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? ib.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, ib.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b, c, d, e = 0,
                f = db.call(arguments),
                g = f.length,
                h = 1 !== g || a && ib.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : ib.Deferred(),
                j = function (a, c, d) {
                    return function (e) {
                        c[a] = this, d[a] = arguments.length > 1 ? db.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ib.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    }), ib.support = function () {
        var b, c, d, e, f, g, h, i, j, k, l = W.createElement("div");
        if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = l.getElementsByTagName("*"), d = l.getElementsByTagName("a")[0], !c || !d || !c.length) return {};
        f = W.createElement("select"), h = f.appendChild(W.createElement("option")), e = l.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b = {
            getSetAttribute: "t" !== l.className,
            leadingWhitespace: 3 === l.firstChild.nodeType,
            tbody: !l.getElementsByTagName("tbody").length,
            htmlSerialize: !! l.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !! d.style.cssFloat,
            checkOn: !! e.value,
            optSelected: h.selected,
            enctype: !! W.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== W.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === W.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, e.checked = !0, b.noCloneChecked = e.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete l.test
        } catch (m) {
            b.deleteExpando = !1
        }
        e = W.createElement("input"), e.setAttribute("value", ""), b.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), b.radioValue = "t" === e.value, e.setAttribute("checked", "t"), e.setAttribute("name", "t"), g = W.createDocumentFragment(), g.appendChild(e), b.appendChecked = e.checked, b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, l.attachEvent && (l.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), l.cloneNode(!0).click());
        for (k in {
            submit: !0,
            change: !0,
            focusin: !0
        }) l.setAttribute(i = "on" + k, "t"), b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
        return l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === l.style.backgroundClip, ib(function () {
            var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                g = W.getElementsByTagName("body")[0];
            g && (c = W.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = 4 === l.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== g.offsetTop, a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
                width: "4px"
            }).width, d = l.appendChild(W.createElement("div")), d.style.cssText = l.style.cssText = f, d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), typeof l.style.zoom !== V && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), g.removeChild(c), c = l = e = d = null)
        }), c = f = g = h = d = e = null, b
    }();
    var yb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        zb = /([A-Z])/g;
    ib.extend({
        cache: {},
        expando: "jQuery" + (ab + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            return a = a.nodeType ? ib.cache[a[ib.expando]] : a[ib.expando], !! a && !h(a)
        },
        data: function (a, b, c) {
            return e(a, b, c)
        },
        removeData: function (a, b) {
            return f(a, b)
        },
        _data: function (a, b, c) {
            return e(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return f(a, b, !0)
        },
        acceptData: function (a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
            var b = a.nodeName && ib.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), ib.fn.extend({
        data: function (a, c) {
            var d, e, f = this[0],
                h = 0,
                i = null;
            if (a === b) {
                if (this.length && (i = ib.data(f), 1 === f.nodeType && !ib._data(f, "parsedAttrs"))) {
                    for (d = f.attributes; h < d.length; h++) e = d[h].name, e.indexOf("data-") || (e = ib.camelCase(e.slice(5)), g(f, e, i[e]));
                    ib._data(f, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof a ? this.each(function () {
                ib.data(this, a)
            }) : ib.access(this, function (c) {
                return c === b ? f ? g(f, a, ib.data(f, a)) : null : (this.each(function () {
                    ib.data(this, a, c)
                }), void 0)
            }, null, c, arguments.length > 1, null, !0)
        },
        removeData: function (a) {
            return this.each(function () {
                ib.removeData(this, a)
            })
        }
    }), ib.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ib._data(a, b), c && (!d || ib.isArray(c) ? d = ib._data(a, b, ib.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = ib.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = ib._queueHooks(a, b),
                g = function () {
                    ib.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), f.cur = e, e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return ib._data(a, c) || ib._data(a, c, {
                empty: ib.Callbacks("once memory").add(function () {
                    ib._removeData(a, b + "queue"), ib._removeData(a, c)
                })
            })
        }
    }), ib.fn.extend({
        queue: function (a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? ib.queue(this[0], a) : c === b ? this : this.each(function () {
                var b = ib.queue(this, a, c);
                ib._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && ib.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                ib.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            return a = ib.fx ? ib.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            var d, e = 1,
                f = ib.Deferred(),
                g = this,
                h = this.length,
                i = function () {
                    --e || f.resolveWith(g, [g])
                };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = ib._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var Ab, Bb, Cb = /[\t\r\n]/g,
        Db = /\r/g,
        Eb = /^(?:input|select|textarea|button|object)$/i,
        Fb = /^(?:a|area)$/i,
        Gb = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Hb = /^(?:checked|selected)$/i,
        Ib = ib.support.getSetAttribute,
        Jb = ib.support.input;
    ib.fn.extend({
        attr: function (a, b) {
            return ib.access(this, ib.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                ib.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return ib.access(this, ib.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = ib.propFix[a] || a, this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function (a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = "string" == typeof a && a;
            if (ib.isFunction(a)) return this.each(function (b) {
                ib(this).addClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(kb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Cb, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        c.className = ib.trim(d)
                    }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = 0 === arguments.length || "string" == typeof a && a;
            if (ib.isFunction(a)) return this.each(function (b) {
                ib(this).removeClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(kb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Cb, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        c.className = a ? ib.trim(d) : ""
                    }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return ib.isFunction(a) ? this.each(function (c) {
                ib(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if ("string" === c)
                    for (var e, f = 0, g = ib(this), h = b, i = a.match(kb) || []; e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                else(c === V || "boolean" === c) && (this.className && ib._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ib._data(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Cb, " ").indexOf(b) >= 0) return !0;
            return !1
        },
        val: function (a) {
            var c, d, e, f = this[0]; {
                if (arguments.length) return e = ib.isFunction(a), this.each(function (c) {
                    var f, g = ib(this);
                    1 === this.nodeType && (f = e ? a.call(this, c, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : ib.isArray(f) && (f = ib.map(f, function (a) {
                        return null == a ? "" : a + ""
                    })), d = ib.valHooks[this.type] || ib.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f))
                });
                if (f) return d = ib.valHooks[f.type] || ib.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, "string" == typeof c ? c.replace(Db, "") : null == c ? "" : c)
            }
        }
    }), ib.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (ib.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ib.nodeName(c.parentNode, "optgroup"))) {
                            if (b = ib(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function (a, b) {
                    var c = ib.makeArray(b);
                    return ib(a).find("option").each(function () {
                        this.selected = ib.inArray(ib(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attr: function (a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return typeof a.getAttribute === V ? ib.prop(a, c, d) : (f = 1 !== h || !ib.isXMLDoc(a), f && (c = c.toLowerCase(), e = ib.attrHooks[c] || (Gb.test(c) ? Bb : Ab)), d === b ? e && f && "get" in e && null !== (g = e.get(a, c)) ? g : (typeof a.getAttribute !== V && (g = a.getAttribute(c)), null == g ? b : g) : null !== d ? e && f && "set" in e && (g = e.set(a, d, c)) !== b ? g : (a.setAttribute(c, d + ""), d) : (ib.removeAttr(a, c), void 0))
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(kb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = ib.propFix[c] || c, Gb.test(c) ? !Ib && Hb.test(c) ? a[ib.camelCase("default-" + c)] = a[d] = !1 : a[d] = !1 : ib.attr(a, c, ""), a.removeAttribute(Ib ? c : d)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!ib.support.radioValue && "radio" === b && ib.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !ib.isXMLDoc(a), g && (c = ib.propFix[c] || c, f = ib.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : Eb.test(a.nodeName) || Fb.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), Bb = {
        get: function (a, c) {
            var d = ib.prop(a, c),
                e = "boolean" == typeof d && a.getAttribute(c),
                f = "boolean" == typeof d ? Jb && Ib ? null != e : Hb.test(c) ? a[ib.camelCase("default-" + c)] : !! e : a.getAttributeNode(c);
            return f && f.value !== !1 ? c.toLowerCase() : b
        },
        set: function (a, b, c) {
            return b === !1 ? ib.removeAttr(a, c) : Jb && Ib || !Hb.test(c) ? a.setAttribute(!Ib && ib.propFix[c] || c, c) : a[ib.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, Jb && Ib || (ib.attrHooks.value = {
        get: function (a, c) {
            var d = a.getAttributeNode(c);
            return ib.nodeName(a, "input") ? a.defaultValue : d && d.specified ? d.value : b
        },
        set: function (a, b, c) {
            return ib.nodeName(a, "input") ? (a.defaultValue = b, void 0) : Ab && Ab.set(a, b, c)
        }
    }), Ib || (Ab = ib.valHooks.button = {
        get: function (a, c) {
            var d = a.getAttributeNode(c);
            return d && ("id" === c || "name" === c || "coords" === c ? "" !== d.value : d.specified) ? d.value : b
        },
        set: function (a, c, d) {
            var e = a.getAttributeNode(d);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", "value" === d || c === a.getAttribute(d) ? c : b
        }
    }, ib.attrHooks.contenteditable = {
        get: Ab.get,
        set: function (a, b, c) {
            Ab.set(a, "" === b ? !1 : b, c)
        }
    }, ib.each(["width", "height"], function (a, b) {
        ib.attrHooks[b] = ib.extend(ib.attrHooks[b], {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        })
    })), ib.support.hrefNormalized || (ib.each(["href", "src", "width", "height"], function (a, c) {
        ib.attrHooks[c] = ib.extend(ib.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return null == d ? b : d
            }
        })
    }), ib.each(["href", "src"], function (a, b) {
        ib.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    })), ib.support.style || (ib.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || b
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    }), ib.support.optSelected || (ib.propHooks.selected = ib.extend(ib.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), ib.support.enctype || (ib.propFix.enctype = "encoding"), ib.support.checkOn || ib.each(["radio", "checkbox"], function () {
        ib.valHooks[this] = {
            get: function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    }), ib.each(["radio", "checkbox"], function () {
        ib.valHooks[this] = ib.extend(ib.valHooks[this], {
            set: function (a, b) {
                return ib.isArray(b) ? a.checked = ib.inArray(ib(a).val(), b) >= 0 : void 0
            }
        })
    });
    var Kb = /^(?:input|select|textarea)$/i,
        Lb = /^key/,
        Mb = /^(?:mouse|contextmenu)|click/,
        Nb = /^(?:focusinfocus|focusoutblur)$/,
        Ob = /^([^.]*)(?:\.(.+)|)$/;
    ib.event = {
        global: {},
        add: function (a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = ib._data(a);
            if (r) {
                for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = ib.guid++), (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function (a) {
                    return typeof ib === V || a && ib.event.triggered === a.type ? b : ib.event.dispatch.apply(l.elem, arguments)
                }, l.elem = a), c = (c || "").match(kb) || [""], i = c.length; i--;) g = Ob.exec(c[i]) || [], o = q = g[1], p = (g[2] || "").split(".").sort(), k = ib.event.special[o] || {}, o = (f ? k.delegateType : k.bindType) || o, k = ib.event.special[o] || {}, m = ib.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && ib.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), ib.event.global[o] = !0;
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ib.hasData(a) && ib._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(kb) || [""], j = b.length; j--;)
                    if (h = Ob.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = ib.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ib.removeEvent(a, n, q.handle), delete k[n])
                    } else
                        for (n in k) ib.event.remove(a, n + b[j], c, d, !0);
                ib.isEmptyObject(k) && (delete q.handle, ib._removeData(a, "events"))
            }
        },
        trigger: function (c, d, e, f) {
            var g, h, i, j, k, l, m, n = [e || W],
                o = gb.call(c, "type") ? c.type : c,
                p = gb.call(c, "namespace") ? c.namespace.split(".") : [];
            if (i = l = e = e || W, 3 !== e.nodeType && 8 !== e.nodeType && !Nb.test(o + ib.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), h = o.indexOf(":") < 0 && "on" + o, c = c[ib.expando] ? c : new ib.Event(o, "object" == typeof c && c), c.isTrigger = !0, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : ib.makeArray(d, [c]), k = ib.event.special[o] || {}, f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                if (!f && !k.noBubble && !ib.isWindow(e)) {
                    for (j = k.delegateType || o, Nb.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i), l = i;
                    l === (e.ownerDocument || W) && n.push(l.defaultView || l.parentWindow || a)
                }
                for (m = 0;
                    (i = n[m++]) && !c.isPropagationStopped();) c.type = m > 1 ? j : k.bindType || o, g = (ib._data(i, "events") || {})[c.type] && ib._data(i, "handle"), g && g.apply(i, d), g = h && i[h], g && ib.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                if (c.type = o, !(f || c.isDefaultPrevented() || k._default && k._default.apply(e.ownerDocument, d) !== !1 || "click" === o && ib.nodeName(e, "a") || !ib.acceptData(e) || !h || !e[o] || ib.isWindow(e))) {
                    l = e[h], l && (e[h] = null), ib.event.triggered = o;
                    try {
                        e[o]()
                    } catch (q) {}
                    ib.event.triggered = b, l && (e[h] = l)
                }
                return c.result
            }
        },
        dispatch: function (a) {
            a = ib.event.fix(a);
            var c, d, e, f, g, h = [],
                i = db.call(arguments),
                j = (ib._data(this, "events") || {})[a.type] || [],
                k = ib.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = ib.event.handlers.call(this, a, j), c = 0;
                    (f = h[c++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = f.elem, g = 0;
                        (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, d = ((ib.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, c) {
            var d, e, f, g, h = [],
                i = c.delegateCount,
                j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type))
                for (; j != this; j = j.parentNode || this)
                    if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                        for (f = [], g = 0; i > g; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? ib(d, this).index(j) >= 0 : ib.find(d, this, null, [j]).length), f[d] && f.push(e);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    }
            return i < c.length && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h
        },
        fix: function (a) {
            if (a[ib.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Mb.test(e) ? this.mouseHooks : Lb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ib.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || W), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !! a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, c) {
                var d, e, f, g = c.button,
                    h = c.fromElement;
                return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || W, f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function () {
                    return ib.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }
            },
            focus: {
                trigger: function () {
                    if (this !== W.activeElement && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === W.activeElement && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function (a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = ib.extend(new ib.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? ib.event.trigger(e, null, b) : ib.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, ib.removeEvent = W.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === V && (a[d] = null), a.detachEvent(d, c))
    }, ib.Event = function (a, b) {
        return this instanceof ib.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, b && ib.extend(this, b), this.timeStamp = a && a.timeStamp || ib.now(), this[ib.expando] = !0, void 0) : new ib.Event(a, b)
    }, ib.Event.prototype = {
        isDefaultPrevented: j,
        isPropagationStopped: j,
        isImmediatePropagationStopped: j,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = i, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = i, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = i, this.stopPropagation()
        }
    }, ib.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        ib.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !ib.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), ib.support.submitBubbles || (ib.event.special.submit = {
        setup: function () {
            return ib.nodeName(this, "form") ? !1 : (ib.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target,
                    d = ib.nodeName(c, "input") || ib.nodeName(c, "button") ? c.form : b;
                d && !ib._data(d, "submitBubbles") && (ib.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), ib._data(d, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ib.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function () {
            return ib.nodeName(this, "form") ? !1 : (ib.event.remove(this, "._submit"), void 0)
        }
    }), ib.support.changeBubbles || (ib.event.special.change = {
        setup: function () {
            return Kb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ib.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), ib.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), ib.event.simulate("change", this, a, !0)
            })), !1) : (ib.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                Kb.test(b.nodeName) && !ib._data(b, "changeBubbles") && (ib.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || ib.event.simulate("change", this.parentNode, a, !0)
                }), ib._data(b, "changeBubbles", !0))
            }), void 0)
        },
        handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return ib.event.remove(this, "._change"), !Kb.test(this.nodeName)
        }
    }), ib.support.focusinBubbles || ib.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = 0,
            d = function (a) {
                ib.event.simulate(b, a.target, ib.event.fix(a), !0)
            };
        ib.event.special[b] = {
            setup: function () {
                0 === c++ && W.addEventListener(a, d, !0)
            },
            teardown: function () {
                0 === --c && W.removeEventListener(a, d, !0)
            }
        }
    }), ib.fn.extend({
        on: function (a, c, d, e, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (g in a) this.on(g, c, d, a[g], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = j;
            else if (!e) return this;
            return 1 === f && (h = e, e = function (a) {
                return ib().off(a), h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = ib.guid++)), this.each(function () {
                ib.event.add(this, a, e, d, c)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, ib(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = j), this.each(function () {
                ib.event.remove(this, a, d, c)
            })
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        trigger: function (a, b) {
            return this.each(function () {
                ib.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? ib.event.trigger(a, b, c, !0) : void 0
        }
    }),
    function (a, b) {
        function c(a) {
            return ob.test(a + "")
        }

        function d() {
            var a, b = [];
            return a = function (c, d) {
                return b.push(c += " ") > y.cacheLength && delete a[b.shift()], a[c] = d
            }
        }

        function e(a) {
            return a[N] = !0, a
        }

        function f(a) {
            var b = F.createElement("div");
            try {
                return a(b)
            } catch (c) {
                return !1
            } finally {
                b = null
            }
        }

        function g(a, b, c, d) {
            var e, f, g, h, i, j, k, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== F && E(b), b = b || F, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (!H && !d) {
                if (e = pb.exec(a))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && L(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return Z.apply(c, $.call(b.getElementsByTagName(a), 0)), c;
                        if ((g = e[3]) && P.getByClassName && b.getElementsByClassName) return Z.apply(c, $.call(b.getElementsByClassName(g), 0)), c
                    }
                if (P.qsa && !I.test(a)) {
                    if (k = !0, n = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = l(a), (k = b.getAttribute("id")) ? n = k.replace(sb, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = nb.test(a) && b.parentNode || b, p = j.join(",")
                    }
                    if (p) try {
                        return Z.apply(c, $.call(o.querySelectorAll(p), 0)), c
                    } catch (q) {} finally {
                        k || b.removeAttribute("id")
                    }
                }
            }
            return u(a.replace(gb, "$1"), b, c, d)
        }

        function h(a, b) {
            var c = b && a,
                d = c && (~b.sourceIndex || W) - (~a.sourceIndex || W);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function j(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function k(a) {
            return e(function (b) {
                return b = +b, e(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function l(a, b) {
            var c, d, e, f, h, i, j, k = T[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = y.preFilter; h;) {
                (!c || (d = hb.exec(h))) && (d && (h = h.slice(d[0].length) || h), i.push(e = [])), c = !1, (d = jb.exec(h)) && (c = d.shift(), e.push({
                    value: c,
                    type: d[0].replace(gb, " ")
                }), h = h.slice(c.length));
                for (f in y.filter)!(d = mb[f].exec(h)) || j[f] && !(d = j[f](d)) || (c = d.shift(), e.push({
                    value: c,
                    type: f,
                    matches: d
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? g.error(a) : T(a, i).slice(0)
        }

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = R++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j, k = Q + " " + f;
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e)
                            if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                                if ((h = i[1]) === !0 || h === x) return h === !0
                            } else if (i = j[d] = [k], i[1] = a(b, c, g) || x, i[1] === !0) return !0
            }
        }

        function o(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function q(a, b, c, d, f, g) {
            return d && !d[N] && (d = q(d)), f && !f[N] && (f = q(f, g)), e(function (e, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    q = e || t(b || "*", h.nodeType ? [h] : h, []),
                    r = !a || !e && b ? q : p(q, m, a, h, i),
                    s = c ? f || (e ? a : o || d) ? [] : g : r;
                if (c && c(r, s, h, i), d)
                    for (j = p(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (e) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                            f(null, s = [], j, i)
                        }
                        for (k = s.length; k--;)(l = s[k]) && (j = f ? _.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
                    }
                } else s = p(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : Z.apply(g, s)
            })
        }

        function r(a) {
            for (var b, c, d, e = a.length, f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = n(function (a) {
                    return a === b
                }, g, !0), j = n(function (a) {
                    return _.call(b, a) > -1
                }, g, !0), k = [
                    function (a, c, d) {
                        return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                    }
                ]; e > h; h++)
                if (c = y.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = y.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !y.relative[a[d].type]; d++);
                        return q(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1)).replace(gb, "$1"), c, d > h && r(a.slice(h, d)), e > d && r(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }

        function s(a, b) {
            var c = 0,
                d = b.length > 0,
                f = a.length > 0,
                h = function (e, h, i, j, k) {
                    var l, m, n, o = [],
                        q = 0,
                        r = "0",
                        s = e && [],
                        t = null != k,
                        u = D,
                        v = e || f && y.find.TAG("*", k && h.parentNode || h),
                        w = Q += null == u ? 1 : Math.random() || .1;
                    for (t && (D = h !== F && h, x = c); null != (l = v[r]); r++) {
                        if (f && l) {
                            for (m = 0; n = a[m++];)
                                if (n(l, h, i)) {
                                    j.push(l);
                                    break
                                }
                            t && (Q = w, x = ++c)
                        }
                        d && ((l = !n && l) && q--, e && s.push(l))
                    }
                    if (q += r, d && r !== q) {
                        for (m = 0; n = b[m++];) n(s, o, h, i);
                        if (e) {
                            if (q > 0)
                                for (; r--;) s[r] || o[r] || (o[r] = Y.call(j));
                            o = p(o)
                        }
                        Z.apply(j, o), t && !e && o.length > 0 && q + b.length > 1 && g.uniqueSort(j)
                    }
                    return t && (Q = w, D = u), s
                };
            return d ? e(h) : h
        }

        function t(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) g(a, b[d], c);
            return c
        }

        function u(a, b, c, d) {
            var e, f, g, h, i, j = l(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && !H && y.relative[f[1].type]) {
                    if (b = y.find.ID(g.matches[0].replace(ub, vb), b)[0], !b) return c;
                    a = a.slice(f.shift().value.length)
                }
                for (e = mb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !y.relative[h = g.type]);)
                    if ((i = y.find[h]) && (d = i(g.matches[0].replace(ub, vb), nb.test(f[0].type) && b.parentNode || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return Z.apply(c, $.call(d, 0)), c;
                        break
                    }
            }
            return B(a, j)(d, b, H, c, nb.test(a)), c
        }

        function v() {}
        var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
            O = a.document,
            P = {}, Q = 0,
            R = 0,
            S = d(),
            T = d(),
            U = d(),
            V = typeof b,
            W = 1 << 31,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.slice,
            _ = X.indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            }, ab = "[\\x20\\t\\r\\n\\f]",
            bb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            cb = bb.replace("w", "w#"),
            db = "([*^$|!~]?=)",
            eb = "\\[" + ab + "*(" + bb + ")" + ab + "*(?:" + db + ab + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + cb + ")|)|)" + ab + "*\\]",
            fb = ":(" + bb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + eb.replace(3, 8) + ")*)|.*)\\)|)",
            gb = new RegExp("^" + ab + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ab + "+$", "g"),
            hb = new RegExp("^" + ab + "*," + ab + "*"),
            jb = new RegExp("^" + ab + "*([\\x20\\t\\r\\n\\f>+~])" + ab + "*"),
            kb = new RegExp(fb),
            lb = new RegExp("^" + cb + "$"),
            mb = {
                ID: new RegExp("^#(" + bb + ")"),
                CLASS: new RegExp("^\\.(" + bb + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + bb + ")['\"]?\\]"),
                TAG: new RegExp("^(" + bb.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + eb),
                PSEUDO: new RegExp("^" + fb),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ab + "*(even|odd|(([+-]|)(\\d*)n|)" + ab + "*(?:([+-]|)" + ab + "*(\\d+)|))" + ab + "*\\)|)", "i"),
                needsContext: new RegExp("^" + ab + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ab + "*((?:-\\d)?\\d*)" + ab + "*\\)|)(?=[^-]|$)", "i")
            }, nb = /[\x20\t\r\n\f]*[+~]/,
            ob = /^[^{]+\{\s*\[native code/,
            pb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            qb = /^(?:input|select|textarea|button)$/i,
            rb = /^h\d$/i,
            sb = /'|\\/g,
            tb = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            ub = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            vb = function (a, b) {
                var c = "0x" + b - 65536;
                return c !== c ? b : 0 > c ? String.fromCharCode(c + 65536) : String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
            };
        try {
            $.call(O.documentElement.childNodes, 0)[0].nodeType
        } catch (wb) {
            $ = function (a) {
                for (var b, c = []; b = this[a++];) c.push(b);
                return c
            }
        }
        A = g.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, E = g.setDocument = function (a) {
            var d = a ? a.ownerDocument || a : O;
            return d !== F && 9 === d.nodeType && d.documentElement ? (F = d, G = d.documentElement, H = A(d), P.tagNameNoComments = f(function (a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), P.attributes = f(function (a) {
                a.innerHTML = "<select></select>";
                var b = typeof a.lastChild.getAttribute("multiple");
                return "boolean" !== b && "string" !== b
            }), P.getByClassName = f(function (a) {
                return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
            }), P.getByName = f(function (a) {
                a.id = N + 0, a.innerHTML = "<a name='" + N + "'></a><div name='" + N + "'></div>", G.insertBefore(a, G.firstChild);
                var b = d.getElementsByName && d.getElementsByName(N).length === 2 + d.getElementsByName(N + 0).length;
                return P.getIdNotName = !d.getElementById(N), G.removeChild(a), b
            }), y.attrHandle = f(function (a) {
                return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== V && "#" === a.firstChild.getAttribute("href")
            }) ? {} : {
                href: function (a) {
                    return a.getAttribute("href", 2)
                },
                type: function (a) {
                    return a.getAttribute("type")
                }
            }, P.getIdNotName ? (y.find.ID = function (a, b) {
                if (typeof b.getElementById !== V && !H) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, y.filter.ID = function (a) {
                var b = a.replace(ub, vb);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (y.find.ID = function (a, c) {
                if (typeof c.getElementById !== V && !H) {
                    var d = c.getElementById(a);
                    return d ? d.id === a || typeof d.getAttributeNode !== V && d.getAttributeNode("id").value === a ? [d] : b : []
                }
            }, y.filter.ID = function (a) {
                var b = a.replace(ub, vb);
                return function (a) {
                    var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), y.find.TAG = P.tagNameNoComments ? function (a, b) {
                return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, y.find.NAME = P.getByName && function (a, b) {
                return typeof b.getElementsByName !== V ? b.getElementsByName(name) : void 0
            }, y.find.CLASS = P.getByClassName && function (a, b) {
                return typeof b.getElementsByClassName === V || H ? void 0 : b.getElementsByClassName(a)
            }, J = [], I = [":focus"], (P.qsa = c(d.querySelectorAll)) && (f(function (a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || I.push("\\[" + ab + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || I.push(":checked")
            }), f(function (a) {
                a.innerHTML = "<input type='hidden' i=''/>", a.querySelectorAll("[i^='']").length && I.push("[*^$]=" + ab + "*(?:\"\"|'')"), a.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), I.push(",.*:")
            })), (P.matchesSelector = c(K = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector)) && f(function (a) {
                P.disconnectedMatch = K.call(a, "div"), K.call(a, "[s!='']:x"), J.push("!=", fb)
            }), I = new RegExp(I.join("|")), J = new RegExp(J.join("|")), L = c(G.contains) || G.compareDocumentPosition ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, M = G.compareDocumentPosition ? function (a, b) {
                var c;
                return a === b ? (C = !0, 0) : (c = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b)) ? 1 & c || a.parentNode && 11 === a.parentNode.nodeType ? a === d || L(O, a) ? -1 : b === d || L(O, b) ? 1 : 0 : 4 & c ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            } : function (a, b) {
                var c, e = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    i = [a],
                    j = [b];
                if (a === b) return C = !0, 0;
                if (!f || !g) return a === d ? -1 : b === d ? 1 : f ? -1 : g ? 1 : 0;
                if (f === g) return h(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[e] === j[e];) e++;
                return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, C = !1, [0, 0].sort(M), P.detectDuplicates = C, F) : F
        }, g.matches = function (a, b) {
            return g(a, null, null, b)
        }, g.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== F && E(a), b = b.replace(tb, "='$1']"), !(!P.matchesSelector || H || J && J.test(b) || I.test(b))) try {
                var c = K.call(a, b);
                if (c || P.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c
            } catch (d) {}
            return g(b, F, null, [a]).length > 0
        }, g.contains = function (a, b) {
            return (a.ownerDocument || a) !== F && E(a), L(a, b)
        }, g.attr = function (a, b) {
            var c;
            return (a.ownerDocument || a) !== F && E(a), H || (b = b.toLowerCase()), (c = y.attrHandle[b]) ? c(a) : H || P.attributes ? a.getAttribute(b) : ((c = a.getAttributeNode(b)) || a.getAttribute(b)) && a[b] === !0 ? b : c && c.specified ? c.value : null
        }, g.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, g.uniqueSort = function (a) {
            var b, c = [],
                d = 1,
                e = 0;
            if (C = !P.detectDuplicates, a.sort(M), C) {
                for (; b = a[d]; d++) b === a[d - 1] && (e = c.push(d));
                for (; e--;) a.splice(c[e], 1)
            }
            return a
        }, z = g.getText = function (a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += z(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d]; d++) c += z(b);
            return c
        }, y = g.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: mb,
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
                ATTR: function (a) {
                    return a[1] = a[1].replace(ub, vb), a[3] = (a[4] || a[5] || "").replace(ub, vb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || g.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && g.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[5] && a[2];
                    return mb.CHILD.test(a[0]) ? null : (a[4] ? a[2] = a[4] : c && kb.test(c) && (b = l(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    return "*" === a ? function () {
                        return !0
                    } : (a = a.replace(ub, vb).toLowerCase(), function (b) {
                        return b.nodeName && b.nodeName.toLowerCase() === a
                    })
                },
                CLASS: function (a) {
                    var b = S[a + " "];
                    return b || (b = new RegExp("(^|" + ab + ")" + a + "(" + ab + "|$)")) && S(a, function (a) {
                        return b.test(a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = g.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === Q && j[1], m = j[0] === Q && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [Q, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === Q) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [Q, m]), l !== b)););
                            return m -= e, m === d || 0 === m % d && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, d = y.pseudos[a] || y.setFilters[a.toLowerCase()] || g.error("unsupported pseudo: " + a);
                    return d[N] ? d(b) : d.length > 1 ? (c = [a, a, "", b], y.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function (a, c) {
                        for (var e, f = d(a, b), g = f.length; g--;) e = _.call(a, f[g]), a[e] = !(c[e] = f[g])
                    }) : function (a) {
                        return d(a, 0, c)
                    }) : d
                }
            },
            pseudos: {
                not: e(function (a) {
                    var b = [],
                        c = [],
                        d = B(a.replace(gb, "$1"));
                    return d[N] ? e(function (a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: e(function (a) {
                    return function (b) {
                        return g(a, b).length > 0
                    }
                }),
                contains: e(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || z(b)).indexOf(a) > -1
                    }
                }),
                lang: e(function (a) {
                    return lb.test(a || "") || g.error("unsupported lang: " + a), a = a.replace(ub, vb).toLowerCase(),
                    function (b) {
                        var c;
                        do
                            if (c = H ? b.getAttribute("xml:lang") || b.getAttribute("lang") : b.lang) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === G
                },
                focus: function (a) {
                    return a === F.activeElement && (!F.hasFocus || F.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !! a.checked || "option" === b && !! a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0
                },
                parent: function (a) {
                    return !y.pseudos.empty(a)
                },
                header: function (a) {
                    return rb.test(a.nodeName)
                },
                input: function (a) {
                    return qb.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                },
                first: k(function () {
                    return [0]
                }),
                last: k(function (a, b) {
                    return [b - 1]
                }),
                eq: k(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: k(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: k(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: k(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: k(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        };
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) y.pseudos[w] = i(w);
        for (w in {
            submit: !0,
            reset: !0
        }) y.pseudos[w] = j(w);
        B = g.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = U[a + " "];
            if (!f) {
                for (b || (b = l(a)), c = b.length; c--;) f = r(b[c]), f[N] ? d.push(f) : e.push(f);
                f = U(a, s(e, d))
            }
            return f
        }, y.pseudos.nth = y.pseudos.eq, y.filters = v.prototype = y.pseudos, y.setFilters = new v, E(), g.attr = ib.attr, ib.find = g, ib.expr = g.selectors, ib.expr[":"] = ib.expr.pseudos, ib.unique = g.uniqueSort, ib.text = g.getText, ib.isXMLDoc = g.isXML, ib.contains = g.contains
    }(a);
    var Pb = /Until$/,
        Qb = /^(?:parents|prev(?:Until|All))/,
        Rb = /^.[^:#\[\.,]*$/,
        Sb = ib.expr.match.needsContext,
        Tb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ib.fn.extend({
        find: function (a) {
            var b, c, d, e = this.length;
            if ("string" != typeof a) return d = this, this.pushStack(ib(a).filter(function () {
                for (b = 0; e > b; b++)
                    if (ib.contains(d[b], this)) return !0
            }));
            for (c = [], b = 0; e > b; b++) ib.find(a, this[b], c);
            return c = this.pushStack(e > 1 ? ib.unique(c) : c), c.selector = (this.selector ? this.selector + " " : "") + a, c
        },
        has: function (a) {
            var b, c = ib(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)
                    if (ib.contains(this, c[b])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(l(this, a, !1))
        },
        filter: function (a) {
            return this.pushStack(l(this, a, !0))
        },
        is: function (a) {
            return !!a && ("string" == typeof a ? Sb.test(a) ? ib(a, this.context).index(this[0]) >= 0 : ib.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Sb.test(a) || "string" != typeof a ? ib(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
                    if (g ? g.index(c) > -1 : ib.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
            return this.pushStack(f.length > 1 ? ib.unique(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? ib.inArray(this[0], ib(a)) : ib.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            var c = "string" == typeof a ? ib(a, b) : ib.makeArray(a && a.nodeType ? [a] : a),
                d = ib.merge(this.get(), c);
            return this.pushStack(ib.unique(d))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), ib.fn.andSelf = ib.fn.addBack, ib.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return ib.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return ib.dir(a, "parentNode", c)
        },
        next: function (a) {
            return k(a, "nextSibling")
        },
        prev: function (a) {
            return k(a, "previousSibling")
        },
        nextAll: function (a) {
            return ib.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return ib.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return ib.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return ib.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return ib.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return ib.sibling(a.firstChild)
        },
        contents: function (a) {
            return ib.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ib.merge([], a.childNodes)
        }
    }, function (a, b) {
        ib.fn[a] = function (c, d) {
            var e = ib.map(this, b, c);
            return Pb.test(a) || (d = c), d && "string" == typeof d && (e = ib.filter(d, e)), e = this.length > 1 && !Tb[a] ? ib.unique(e) : e, this.length > 1 && Qb.test(a) && (e = e.reverse()), this.pushStack(e)
        }
    }), ib.extend({
        filter: function (a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? ib.find.matchesSelector(b[0], a) ? [b[0]] : [] : ib.find.matches(a, b)
        },
        dir: function (a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !ib(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
            return e
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Ub = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Vb = / jQuery\d+="(?:null|\d+)"/g,
        Wb = new RegExp("<(?:" + Ub + ")[\\s/>]", "i"),
        Xb = /^\s+/,
        Yb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Zb = /<([\w:]+)/,
        $b = /<tbody/i,
        _b = /<|&#?\w+;/,
        ac = /<(?:script|style|link)/i,
        bc = /^(?:checkbox|radio)$/i,
        cc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        dc = /^$|\/(?:java|ecma)script/i,
        ec = /^true\/(.*)/,
        fc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        gc = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ib.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, hc = m(W),
        ic = hc.appendChild(W.createElement("div"));
    gc.optgroup = gc.option, gc.tbody = gc.tfoot = gc.colgroup = gc.caption = gc.thead, gc.th = gc.td, ib.fn.extend({
        text: function (a) {
            return ib.access(this, function (a) {
                return a === b ? ib.text(this) : this.empty().append((this[0] && this[0].ownerDocument || W).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function (a) {
            if (ib.isFunction(a)) return this.each(function (b) {
                ib(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = ib(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return ib.isFunction(a) ? this.each(function (b) {
                ib(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = ib(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = ib.isFunction(a);
            return this.each(function (c) {
                ib(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ib.nodeName(this, "body") || ib(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            return this.domManip(arguments, !1, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, !1, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = 0; null != (c = this[d]); d++)(!a || ib.filter(a, [c]).length > 0) && (b || 1 !== c.nodeType || ib.cleanData(t(c)), c.parentNode && (b && ib.contains(c.ownerDocument, c) && q(t(c, "script")), c.parentNode.removeChild(c)));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && ib.cleanData(t(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && ib.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return ib.clone(this, a, b)
            })
        },
        html: function (a) {
            return ib.access(this, function (a) {
                var c = this[0] || {}, d = 0,
                    e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Vb, "") : b;
                if (!("string" != typeof a || ac.test(a) || !ib.support.htmlSerialize && Wb.test(a) || !ib.support.leadingWhitespace && Xb.test(a) || gc[(Zb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Yb, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (ib.cleanData(t(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function (a) {
            var b = ib.isFunction(a);
            return b || "string" == typeof a || (a = ib(a).not(this).detach()), this.domManip([a], !0, function (a) {
                var b = this.nextSibling,
                    c = this.parentNode;
                c && (ib(this).remove(), c.insertBefore(a, b))
            })
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, d) {
            a = bb.apply([], a);
            var e, f, g, h, i, j, k = 0,
                l = this.length,
                m = this,
                q = l - 1,
                r = a[0],
                s = ib.isFunction(r);
            if (s || !(1 >= l || "string" != typeof r || ib.support.checkClone) && cc.test(r)) return this.each(function (e) {
                var f = m.eq(e);
                s && (a[0] = r.call(this, e, c ? f.html() : b)), f.domManip(a, c, d)
            });
            if (l && (j = ib.buildFragment(a, this[0].ownerDocument, !1, this), e = j.firstChild, 1 === j.childNodes.length && (j = e), e)) {
                for (c = c && ib.nodeName(e, "tr"), h = ib.map(t(j, "script"), o), g = h.length; l > k; k++) f = j, k !== q && (f = ib.clone(f, !0, !0), g && ib.merge(h, t(f, "script"))), d.call(c && ib.nodeName(this[k], "table") ? n(this[k], "tbody") : this[k], f, k);
                if (g)
                    for (i = h[h.length - 1].ownerDocument, ib.map(h, p), k = 0; g > k; k++) f = h[k], dc.test(f.type || "") && !ib._data(f, "globalEval") && ib.contains(i, f) && (f.src ? ib.ajax({
                        url: f.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : ib.globalEval((f.text || f.textContent || f.innerHTML || "").replace(fc, "")));
                j = e = null
            }
            return this
        }
    }), ib.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        ib.fn[a] = function (a) {
            for (var c, d = 0, e = [], f = ib(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ib(f[d])[b](c), cb.apply(e, c.get());
            return this.pushStack(e)
        }
    }), ib.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = ib.contains(a.ownerDocument, a);
            if (ib.support.html5Clone || ib.isXMLDoc(a) || !Wb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ic.innerHTML = a.outerHTML, ic.removeChild(f = ic.firstChild)), !(ib.support.noCloneEvent && ib.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ib.isXMLDoc(a)))
                for (d = t(f), h = t(a), g = 0; null != (e = h[g]); ++g) d[g] && s(e, d[g]);
            if (b)
                if (c)
                    for (h = h || t(a), d = d || t(f), g = 0; null != (e = h[g]); g++) r(e, d[g]);
                else r(a, f);
            return d = t(f, "script"), d.length > 0 && q(d, !i && t(a, "script")), d = h = e = null, f
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, n = m(b), o = [], p = 0; l > p; p++)
                if (f = a[p], f || 0 === f)
                    if ("object" === ib.type(f)) ib.merge(o, f.nodeType ? [f] : f);
                    else if (_b.test(f)) {
                for (h = h || n.appendChild(b.createElement("div")), i = (Zb.exec(f) || ["", ""])[1].toLowerCase(), k = gc[i] || gc._default, h.innerHTML = k[1] + f.replace(Yb, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                if (!ib.support.leadingWhitespace && Xb.test(f) && o.push(b.createTextNode(Xb.exec(f)[0])), !ib.support.tbody)
                    for (f = "table" !== i || $b.test(f) ? "<table>" !== k[1] || $b.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ib.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (ib.merge(o, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = n.lastChild
            } else o.push(b.createTextNode(f));
            for (h && n.removeChild(h), ib.support.appendChecked || ib.grep(t(o, "input"), u), p = 0; f = o[p++];)
                if ((!d || -1 === ib.inArray(f, d)) && (g = ib.contains(f.ownerDocument, f), h = t(n.appendChild(f), "script"), g && q(h), c))
                    for (e = 0; f = h[e++];) dc.test(f.type || "") && c.push(f);
            return h = null, n
        },
        cleanData: function (a, b) {
            for (var c, d, e, f, g = 0, h = ib.expando, i = ib.cache, j = ib.support.deleteExpando, k = ib.event.special; null != (c = a[g]); g++)
                if ((b || ib.acceptData(c)) && (e = c[h], f = e && i[e])) {
                    if (f.events)
                        for (d in f.events) k[d] ? ib.event.remove(c, d) : ib.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== V ? c.removeAttribute(h) : c[h] = null, _.push(e))
                }
        }
    });
    var jc, kc, lc, mc = /alpha\([^)]*\)/i,
        nc = /opacity\s*=\s*([^)]*)/,
        oc = /^(top|right|bottom|left)$/,
        pc = /^(none|table(?!-c[ea]).+)/,
        qc = /^margin/,
        rc = new RegExp("^(" + jb + ")(.*)$", "i"),
        sc = new RegExp("^(" + jb + ")(?!px)[a-z%]+$", "i"),
        tc = new RegExp("^([+-])=(" + jb + ")", "i"),
        uc = {
            BODY: "block"
        }, vc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, wc = {
            letterSpacing: 0,
            fontWeight: 400
        }, xc = ["Top", "Right", "Bottom", "Left"],
        yc = ["Webkit", "O", "Moz", "ms"];
    ib.fn.extend({
        css: function (a, c) {
            return ib.access(this, function (a, c, d) {
                var e, f, g = {}, h = 0;
                if (ib.isArray(c)) {
                    for (f = kc(a), e = c.length; e > h; h++) g[c[h]] = ib.css(a, c[h], !1, f);
                    return g
                }
                return d !== b ? ib.style(a, c, d) : ib.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function () {
            return x(this, !0)
        },
        hide: function () {
            return x(this)
        },
        toggle: function (a) {
            var b = "boolean" == typeof a;
            return this.each(function () {
                (b ? a : w(this)) ? ib(this).show() : ib(this).hide()
            })
        }
    }), ib.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = lc(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ib.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = ib.camelCase(c),
                    j = a.style;
                if (c = ib.cssProps[i] || (ib.cssProps[i] = v(j, i)), h = ib.cssHooks[c] || ib.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = tc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(ib.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || ib.cssNumber[i] || (d += "px"), ib.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d
                } catch (k) {}
            }
        },
        css: function (a, c, d, e) {
            var f, g, h, i = ib.camelCase(c);
            return c = ib.cssProps[i] || (ib.cssProps[i] = v(a.style, i)), h = ib.cssHooks[c] || ib.cssHooks[i], h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = lc(a, c, e)), "normal" === g && c in wc && (g = wc[c]), "" === d || d ? (f = parseFloat(g), d === !0 || ib.isNumeric(f) ? f || 0 : g) : g
        },
        swap: function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        }
    }), a.getComputedStyle ? (kc = function (b) {
        return a.getComputedStyle(b, null)
    }, lc = function (a, c, d) {
        var e, f, g, h = d || kc(a),
            i = h ? h.getPropertyValue(c) || h[c] : b,
            j = a.style;
        return h && ("" !== i || ib.contains(a.ownerDocument, a) || (i = ib.style(a, c)), sc.test(i) && qc.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
    }) : W.documentElement.currentStyle && (kc = function (a) {
        return a.currentStyle
    }, lc = function (a, c, d) {
        var e, f, g, h = d || kc(a),
            i = h ? h[c] : b,
            j = a.style;
        return null == i && j && j[c] && (i = j[c]), sc.test(i) && !oc.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i
    }), ib.each(["height", "width"], function (a, b) {
        ib.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? 0 === a.offsetWidth && pc.test(ib.css(a, "display")) ? ib.swap(a, vc, function () {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function (a, c, d) {
                var e = d && kc(a);
                return y(a, c, d ? z(a, b, d, ib.support.boxSizing && "border-box" === ib.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), ib.support.opacity || (ib.cssHooks.opacity = {
        get: function (a, b) {
            return nc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = ib.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === ib.trim(f.replace(mc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = mc.test(f) ? f.replace(mc, e) : f + " " + e)
        }
    }), ib(function () {
        ib.support.reliableMarginRight || (ib.cssHooks.marginRight = {
            get: function (a, b) {
                return b ? ib.swap(a, {
                    display: "inline-block"
                }, lc, [a, "marginRight"]) : void 0
            }
        }), !ib.support.pixelPosition && ib.fn.position && ib.each(["top", "left"], function (a, b) {
            ib.cssHooks[b] = {
                get: function (a, c) {
                    return c ? (c = lc(a, b), sc.test(c) ? ib(a).position()[b] + "px" : c) : void 0
                }
            }
        })
    }), ib.expr && ib.expr.filters && (ib.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ib.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || ib.css(a, "display"))
    }, ib.expr.filters.visible = function (a) {
        return !ib.expr.filters.hidden(a)
    }), ib.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        ib.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + xc[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, qc.test(a) || (ib.cssHooks[a + b].set = y)
    });
    var zc = /%20/g,
        Ac = /\[\]$/,
        Bc = /\r?\n/g,
        Cc = /^(?:submit|button|image|reset|file)$/i,
        Dc = /^(?:input|select|textarea|keygen)/i;
    ib.fn.extend({
        serialize: function () {
            return ib.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = ib.prop(this, "elements");
                return a ? ib.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !ib(this).is(":disabled") && Dc.test(this.nodeName) && !Cc.test(a) && (this.checked || !bc.test(a))
            }).map(function (a, b) {
                var c = ib(this).val();
                return null == c ? null : ib.isArray(c) ? ib.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Bc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Bc, "\r\n")
                }
            }).get()
        }
    }), ib.param = function (a, c) {
        var d, e = [],
            f = function (a, b) {
                b = ib.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (c === b && (c = ib.ajaxSettings && ib.ajaxSettings.traditional), ib.isArray(a) || a.jquery && !ib.isPlainObject(a)) ib.each(a, function () {
            f(this.name, this.value)
        });
        else
            for (d in a) D(d, a[d], c, f);
        return e.join("&").replace(zc, "+")
    }, ib.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        ib.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), ib.fn.hover = function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    };
    var Ec, Fc, Gc = ib.now(),
        Hc = /\?/,
        Ic = /#.*$/,
        Jc = /([?&])_=[^&]*/,
        Kc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Lc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mc = /^(?:GET|HEAD)$/,
        Nc = /^\/\//,
        Oc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Pc = ib.fn.load,
        Qc = {}, Rc = {}, Sc = "*/".concat("*");
    try {
        Fc = X.href
    } catch (Tc) {
        Fc = W.createElement("a"), Fc.href = "", Fc = Fc.href
    }
    Ec = Oc.exec(Fc.toLowerCase()) || [], ib.fn.load = function (a, c, d) {
        if ("string" != typeof a && Pc) return Pc.apply(this, arguments);
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), ib.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && ib.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: c
        }).done(function (a) {
            f = arguments, h.html(e ? ib("<div>").append(ib.parseHTML(a)).find(e) : a)
        }).complete(d && function (a, b) {
            h.each(d, f || [a.responseText, b, a])
        }), this
    }, ib.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        ib.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), ib.each(["get", "post"], function (a, c) {
        ib[c] = function (a, d, e, f) {
            return ib.isFunction(d) && (f = f || e, e = d, d = b), ib.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            })
        }
    }), ib.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Fc,
            type: "GET",
            isLocal: Lc.test(Ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sc,
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
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": ib.parseJSON,
                "text xml": ib.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? G(G(a, ib.ajaxSettings), b) : G(ib.ajaxSettings, a)
        },
        ajaxPrefilter: E(Qc),
        ajaxTransport: E(Rc),
        ajax: function (a, c) {
            function d(a, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, d && (t = H(m, w, d)), a >= 200 && 300 > a || 304 === a ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (ib.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (ib.etag[g] = v)), 204 === a ? (f = !0, x = "nocontent") : 304 === a ? (f = !0, x = "notmodified") : (f = I(m, t), x = f.state, l = f.data, s = f.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --ib.active || ib.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = ib.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? ib(n) : ib.event,
                p = ib.Deferred(),
                q = ib.Callbacks("once memory"),
                r = m.statusCode || {}, s = {}, t = {}, u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === u) {
                            if (!l)
                                for (l = {}; b = Kc.exec(h);) l[b[1].toLowerCase()] = b[2];
                            b = l[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === u ? h : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return u || (m.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || v;
                        return k && k.abort(b), d(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fc) + "").replace(Ic, "").replace(Nc, Ec[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = ib.trim(m.dataType || "*").toLowerCase().match(kb) || [""], null == m.crossDomain && (e = Oc.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Ec[1] && e[2] === Ec[2] && (e[3] || ("http:" === e[1] ? 80 : 443)) == (Ec[3] || ("http:" === Ec[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = ib.param(m.data, m.traditional)), F(Qc, m, c, w), 2 === u) return w;
            j = m.global, j && 0 === ib.active++ && ib.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Mc.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Hc.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Jc.test(g) ? g.replace(Jc, "$1_=" + Gc++) : g + (Hc.test(g) ? "&" : "?") + "_=" + Gc++)), m.ifModified && (ib.lastModified[g] && w.setRequestHeader("If-Modified-Since", ib.lastModified[g]), ib.etag[g] && w.setRequestHeader("If-None-Match", ib.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sc + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) w[f](m[f]);
            if (k = F(Rc, m, c, w)) {
                w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function () {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, k.send(s, d)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x)
                }
            } else d(-1, "No Transport");
            return w
        },
        getScript: function (a, c) {
            return ib.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return ib.get(a, b, c, "json")
        }
    }), ib.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return ib.globalEval(a), a
            }
        }
    }), ib.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), ib.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var c, d = W.head || ib("head")[0] || W.documentElement;
            return {
                send: function (b, e) {
                    c = W.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function (a, b) {
                        (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function () {
                    c && c.onload(b, !0)
                }
            }
        }
    });
    var Uc = [],
        Vc = /(=)\?(?=&|$)|\?\?/;
    ib.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Uc.pop() || ib.expando + "_" + Gc++;
            return this[a] = !0, a
        }
    }), ib.ajaxPrefilter("json jsonp", function (c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (Vc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = ib.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Vc, "$1" + f) : c.jsonp !== !1 && (c.url += (Hc.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
            return h || ib.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function () {
            h = arguments
        }, e.always(function () {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Uc.push(f)), h && ib.isFunction(g) && g(h[0]), h = g = b
        }), "script") : void 0
    });
    var Wc, Xc, Yc = 0,
        Zc = a.ActiveXObject && function () {
            var a;
            for (a in Wc) Wc[a](b, !0)
        };
    ib.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && J() || K()
    } : J, Xc = ib.ajaxSettings.xhr(), ib.support.cors = !! Xc && "withCredentials" in Xc, Xc = ib.support.ajax = !! Xc, Xc && ib.ajaxTransport(function (c) {
        if (!c.crossDomain || ib.support.cors) {
            var d;
            return {
                send: function (e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                        for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null), d = function (a, e) {
                        var h, j, k, l;
                        try {
                            if (d && (e || 4 === i.readyState))
                                if (d = b, g && (i.onreadystatechange = ib.noop, Zc && delete Wc[g]), e) 4 !== i.readyState && i.abort();
                                else {
                                    l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
                                    try {
                                        k = i.statusText
                                    } catch (m) {
                                        k = ""
                                    }
                                    h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                }
                        } catch (n) {
                            e || f(-1, n)
                        }
                        l && f(h, k, l, j)
                    }, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yc, Zc && (Wc || (Wc = {}, ib(a).unload(Zc)), Wc[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function () {
                    d && d(b, !0)
                }
            }
        }
    });
    var $c, _c, ad = /^(?:toggle|show|hide)$/,
        bd = new RegExp("^(?:([+-])=|)(" + jb + ")([a-z%]*)$", "i"),
        cd = /queueHooks$/,
        dd = [P],
        ed = {
            "*": [
                function (a, b) {
                    var c, d, e = this.createTween(a, b),
                        f = bd.exec(b),
                        g = e.cur(),
                        h = +g || 0,
                        i = 1,
                        j = 20;
                    if (f) {
                        if (c = +f[2], d = f[3] || (ib.cssNumber[a] ? "" : "px"), "px" !== d && h) {
                            h = ib.css(e.elem, a, !0) || c || 1;
                            do i = i || ".5", h /= i, ib.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && 1 !== i && --j)
                        }
                        e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
                    }
                    return e
                }
            ]
        };
    ib.Animation = ib.extend(N, {
        tweener: function (a, b) {
            ib.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ed[c] = ed[c] || [], ed[c].unshift(b)
        },
        prefilter: function (a, b) {
            b ? dd.unshift(a) : dd.push(a)
        }
    }), ib.Tween = Q, Q.prototype = {
        constructor: Q,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ib.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = Q.propHooks[this.prop];
            return a && a.get ? a.get(this) : Q.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = Q.propHooks[this.prop];
            return this.pos = b = this.options.duration ? ib.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Q.propHooks._default.set(this), this
        }
    }, Q.prototype.init.prototype = Q.prototype, Q.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ib.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function (a) {
                ib.fx.step[a.prop] ? ib.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ib.cssProps[a.prop]] || ib.cssHooks[a.prop]) ? ib.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, ib.each(["toggle", "show", "hide"], function (a, b) {
        var c = ib.fn[b];
        ib.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(R(b, !0), a, d, e)
        }
    }), ib.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(w).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = ib.isEmptyObject(a),
                f = ib.speed(b, c, d),
                g = function () {
                    var b = N(this, ib.extend({}, a), f);
                    g.finish = function () {
                        b.stop(!0)
                    }, (e || ib._data(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function (a, c, d) {
            var e = function (a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    f = ib.timers,
                    g = ib._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g) g[c] && g[c].stop && cd.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && ib.dequeue(this, a)
            })
        },
        finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = ib._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = ib.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, ib.queue(this, a, []), e && e.cur && e.cur.finish && e.cur.finish.call(this), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), ib.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        ib.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), ib.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? ib.extend({}, a) : {
            complete: c || !c && b || ib.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !ib.isFunction(b) && b
        };
        return d.duration = ib.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ib.fx.speeds ? ib.fx.speeds[d.duration] : ib.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            ib.isFunction(d.old) && d.old.call(this), d.queue && ib.dequeue(this, d.queue)
        }, d
    }, ib.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, ib.timers = [], ib.fx = Q.prototype.init, ib.fx.tick = function () {
        var a, c = ib.timers,
            d = 0;
        for ($c = ib.now(); d < c.length; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || ib.fx.stop(), $c = b
    }, ib.fx.timer = function (a) {
        a() && ib.timers.push(a) && ib.fx.start()
    }, ib.fx.interval = 13, ib.fx.start = function () {
        _c || (_c = setInterval(ib.fx.tick, ib.fx.interval))
    }, ib.fx.stop = function () {
        clearInterval(_c), _c = null
    }, ib.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ib.fx.step = {}, ib.expr && ib.expr.filters && (ib.expr.filters.animated = function (a) {
        return ib.grep(ib.timers, function (b) {
            return a === b.elem
        }).length
    }), ib.fn.offset = function (a) {
        if (arguments.length) return a === b ? this : this.each(function (b) {
            ib.offset.setOffset(this, a, b)
        });
        var c, d, e = {
                top: 0,
                left: 0
            }, f = this[0],
            g = f && f.ownerDocument;
        if (g) return c = g.documentElement, ib.contains(c, f) ? (typeof f.getBoundingClientRect !== V && (e = f.getBoundingClientRect()), d = S(g), {
            top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        }) : e
    }, ib.offset = {
        setOffset: function (a, b, c) {
            var d = ib.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = ib(a),
                h = g.offset(),
                i = ib.css(a, "top"),
                j = ib.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && ib.inArray("auto", [i, j]) > -1,
                l = {}, m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), ib.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
        }
    }, ib.fn.extend({
        position: function () {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    }, d = this[0];
                return "fixed" === ib.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ib.nodeName(a[0], "html") || (c = a.offset()), c.top += ib.css(a[0], "borderTopWidth", !0), c.left += ib.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - ib.css(d, "marginTop", !0),
                    left: b.left - c.left - ib.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || W.documentElement; a && !ib.nodeName(a, "html") && "static" === ib.css(a, "position");) a = a.offsetParent;
                return a || W.documentElement
            })
        }
    }), ib.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, c) {
        var d = /Y/.test(c);
        ib.fn[a] = function (e) {
            return ib.access(this, function (a, e, f) {
                var g = S(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? ib(g).scrollLeft() : f, d ? f : ib(g).scrollTop()) : a[e] = f, void 0)
            }, a, e, arguments.length, null)
        }
    }), ib.each({
        Height: "height",
        Width: "width"
    }, function (a, c) {
        ib.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function (d, e) {
            ib.fn[e] = function (e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return ib.access(this, function (c, d, e) {
                    var f;
                    return ib.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? ib.css(c, d, h) : ib.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), a.jQuery = a.$ = ib, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return ib
    })
}(window),
function (a, b) {
    function c(b, c) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], !! g && d(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && d(b)
    }

    function d(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function () {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    var e = 0,
        f = /^ui-id-\d+$/;
    a.ui = a.ui || {}, a.ui.version || (a.extend(a.ui, {
        version: "1.10.1",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        _focus: a.fn.focus,
        focus: function (b, c) {
            return "number" == typeof b ? this.each(function () {
                var d = this;
                setTimeout(function () {
                    a(d).focus(), c && c.call(d)
                }, b)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var b;
            return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
        },
        zIndex: function (c) {
            if (c !== b) return this.css("zIndex", c);
            if (this.length)
                for (var d, e, f = a(this[0]); f.length && f[0] !== document;) {
                    if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), !isNaN(e) && 0 !== e)) return e;
                    f = f.parent()
                }
            return 0
        },
        uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++e)
            })
        },
        removeUniqueId: function () {
            return this.each(function () {
                f.test(this.id) && a(this).removeAttr("id")
            })
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
            return function (c) {
                return !!a.data(c, b)
            }
        }) : function (b, c, d) {
            return !!a.data(b, d[3])
        },
        focusable: function (b) {
            return c(b, !isNaN(a.attr(b, "tabindex")))
        },
        tabbable: function (b) {
            var d = a.attr(b, "tabindex"),
                e = isNaN(d);
            return (e || d >= 0) && c(b, !e)
        }
    }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (c, d) {
        function e(b, c, d, e) {
            return a.each(f, function () {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }
        var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"],
            g = d.toLowerCase(),
            h = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + d] = function (c) {
            return c === b ? h["inner" + d].call(this) : this.each(function () {
                a(this).css(g, e(this, c) + "px")
            })
        }, a.fn["outer" + d] = function (b, c) {
            return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function () {
                a(this).css(g, e(this, b, !0, c) + "px")
            })
        }
    }), a.fn.addBack || (a.fn.addBack = function (a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (b) {
        return function (c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData)), a.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.support.selectstart = "onselectstart" in document.createElement("div"), a.fn.extend({
        disableSelection: function () {
            return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
                a.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), a.extend(a.ui, {
        plugin: {
            add: function (b, c, d) {
                var e, f = a.ui[b].prototype;
                for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
            },
            call: function (a, b, c) {
                var d, e = a.plugins[b];
                if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)
                    for (d = 0; d < e.length; d++) a.options[e[d][0]] && e[d][1].apply(a.element, c)
            }
        },
        hasScroll: function (b, c) {
            if ("hidden" === a(b).css("overflow")) return !1;
            var d = c && "left" === c ? "scrollLeft" : "scrollTop",
                e = !1;
            return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
        }
    }))
}(jQuery),
function (a, b) {
    var c = 0,
        d = Array.prototype.slice,
        e = a.cleanData;
    a.cleanData = function (b) {
        for (var c, d = 0; null != (c = b[d]); d++) try {
            a(c).triggerHandler("remove")
        } catch (f) {}
        e(b)
    }, a.widget = function (b, c, d) {
        var e, f, g, h, i = {}, j = b.split(".")[0];
        b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function (b) {
            return !!a.data(b, e)
        }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function (a, b) {
            return this._createWidget ? (arguments.length && this._createWidget(a, b), void 0) : new g(a, b)
        }, a.extend(g, f, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function (b, d) {
            return a.isFunction(d) ? (i[b] = function () {
                var a = function () {
                    return c.prototype[b].apply(this, arguments)
                }, e = function (a) {
                        return c.prototype[b].apply(this, a)
                    };
                return function () {
                    var b, c = this._super,
                        f = this._superApply;
                    return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                }
            }(), void 0) : (i[b] = d, void 0)
        }), g.prototype = a.widget.extend(h, {
            widgetEventPrefix: f ? h.widgetEventPrefix : b
        }, i, {
            constructor: g,
            namespace: j,
            widgetName: b,
            widgetFullName: e
        }), f ? (a.each(f._childConstructors, function (b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, g, c._proto)
        }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g)
    }, a.widget.extend = function (c) {
        for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++)
            for (e in g[h]) f = g[h][e], g[h].hasOwnProperty(e) && f !== b && (c[e] = a.isPlainObject(f) ? a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : f);
        return c
    }, a.widget.bridge = function (c, e) {
        var f = e.prototype.widgetFullName || c;
        a.fn[c] = function (g) {
            var h = "string" == typeof g,
                i = d.call(arguments, 1),
                j = this;
            return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, h ? this.each(function () {
                var d, e = a.data(this, f);
                return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : void 0) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; " + "attempted to call method '" + g + "'")
            }) : this.each(function () {
                var b = a.data(this, f);
                b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
            }), j
        }
    }, a.Widget = function () {}, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (b, d) {
            d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (a) {
                    a.target === d && this.destroy()
                }
            }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function () {
            return this.element
        },
        option: function (c, d) {
            var e, f, g, h = c;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" == typeof c)
                if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                    for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; g < e.length - 1; g++) f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                    if (c = e.pop(), d === b) return f[c] === b ? null : f[c];
                    f[c] = d
                } else {
                    if (d === b) return this.options[c] === b ? null : this.options[c];
                    h[c] = d
                }
            return this._setOptions(h), this
        },
        _setOptions: function (a) {
            var b;
            for (b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function (a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function (d, g) {
                function h() {
                    return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^(\w+)\s*(.*)$/),
                    j = i[1] + f.eventNamespace,
                    k = i[2];
                k ? e.delegate(k, j, h) : c.bind(j, h)
            })
        },
        _off: function (a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
        },
        _delay: function (a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            }
            var d = this;
            return setTimeout(c, b || 0)
        },
        _hoverable: function (b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {
                mouseenter: function (b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (b) {
            this.focusable = this.focusable.add(b), this._on(b, {
                focusin: function (b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                for (e in f) e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }
    }, a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (b, c) {
        a.Widget.prototype["_" + b] = function (d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {
                duration: e
            }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function (c) {
                a(this)[b](), f && f.call(d[0]), c()
            })
        }
    })
}(jQuery),
function (a) {
    var b = !1;
    a(document).mouseup(function () {
        b = !1
    }), a.widget("ui.mouse", {
        version: "1.10.1",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function (a) {
                return b._mouseDown(a)
            }).bind("click." + this.widgetName, function (c) {
                return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (c) {
            if (!b) {
                this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
                var d = this,
                    e = 1 === c.which,
                    f = "string" == typeof this.options.cancel && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : !1;
                return e && !f && this._mouseCapture(c) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    d.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (a) {
                    return d._mouseMove(a)
                }, this._mouseUpDelegate = function (a) {
                    return d._mouseUp(a)
                }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), b = !0, !0)) : !0
            }
        },
        _mouseMove: function (b) {
            return a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button ? this._mouseUp(b) : this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
        },
        _mouseUp: function (b) {
            return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1
        },
        _mouseDistanceMet: function (a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    })
}(jQuery),
function (a, b) {
    function c(a, b, c) {
        return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)]
    }

    function d(b, c) {
        return parseInt(a.css(b, c), 10) || 0
    }

    function e(b) {
        var c = b[0];
        return 9 === c.nodeType ? {
            width: b.width(),
            height: b.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : a.isWindow(c) ? {
            width: b.width(),
            height: b.height(),
            offset: {
                top: b.scrollTop(),
                left: b.scrollLeft()
            }
        } : c.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: c.pageY,
                left: c.pageX
            }
        } : {
            width: b.outerWidth(),
            height: b.outerHeight(),
            offset: b.offset()
        }
    }
    a.ui = a.ui || {};
    var f, g = Math.max,
        h = Math.abs,
        i = Math.round,
        j = /left|center|right/,
        k = /top|center|bottom/,
        l = /[\+\-]\d+(\.[\d]+)?%?/,
        m = /^\w+/,
        n = /%$/,
        o = a.fn.position;
    a.position = {
        scrollbarWidth: function () {
            if (f !== b) return f;
            var c, d, e = a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                g = e.children()[0];
            return a("body").append(e), c = g.offsetWidth, e.css("overflow", "scroll"), d = g.offsetWidth, c === d && (d = e[0].clientWidth), e.remove(), f = c - d
        },
        getScrollInfo: function (b) {
            var c = b.isWindow ? "" : b.element.css("overflow-x"),
                d = b.isWindow ? "" : b.element.css("overflow-y"),
                e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth,
                f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
            return {
                width: e ? a.position.scrollbarWidth() : 0,
                height: f ? a.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function (b) {
            var c = a(b || window),
                d = a.isWindow(c[0]);
            return {
                element: c,
                isWindow: d,
                offset: c.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: c.scrollLeft(),
                scrollTop: c.scrollTop(),
                width: d ? c.width() : c.outerWidth(),
                height: d ? c.height() : c.outerHeight()
            }
        }
    }, a.fn.position = function (b) {
        if (!b || !b.of) return o.apply(this, arguments);
        b = a.extend({}, b);
        var f, n, p, q, r, s, t = a(b.of),
            u = a.position.getWithinInfo(b.within),
            v = a.position.getScrollInfo(u),
            w = (b.collision || "flip").split(" "),
            x = {};
        return s = e(t), t[0].preventDefault && (b.at = "left top"), n = s.width, p = s.height, q = s.offset, r = a.extend({}, q), a.each(["my", "at"], function () {
            var a, c, d = (b[this] || "").split(" ");
            1 === d.length && (d = j.test(d[0]) ? d.concat(["center"]) : k.test(d[0]) ? ["center"].concat(d) : ["center", "center"]), d[0] = j.test(d[0]) ? d[0] : "center", d[1] = k.test(d[1]) ? d[1] : "center", a = l.exec(d[0]), c = l.exec(d[1]), x[this] = [a ? a[0] : 0, c ? c[0] : 0], b[this] = [m.exec(d[0])[0], m.exec(d[1])[0]]
        }), 1 === w.length && (w[1] = w[0]), "right" === b.at[0] ? r.left += n : "center" === b.at[0] && (r.left += n / 2), "bottom" === b.at[1] ? r.top += p : "center" === b.at[1] && (r.top += p / 2), f = c(x.at, n, p), r.left += f[0], r.top += f[1], this.each(function () {
            var e, j, k = a(this),
                l = k.outerWidth(),
                m = k.outerHeight(),
                o = d(this, "marginLeft"),
                s = d(this, "marginTop"),
                y = l + o + d(this, "marginRight") + v.width,
                z = m + s + d(this, "marginBottom") + v.height,
                A = a.extend({}, r),
                B = c(x.my, k.outerWidth(), k.outerHeight());
            "right" === b.my[0] ? A.left -= l : "center" === b.my[0] && (A.left -= l / 2), "bottom" === b.my[1] ? A.top -= m : "center" === b.my[1] && (A.top -= m / 2), A.left += B[0], A.top += B[1], a.support.offsetFractions || (A.left = i(A.left), A.top = i(A.top)), e = {
                marginLeft: o,
                marginTop: s
            }, a.each(["left", "top"], function (c, d) {
                a.ui.position[w[c]] && a.ui.position[w[c]][d](A, {
                    targetWidth: n,
                    targetHeight: p,
                    elemWidth: l,
                    elemHeight: m,
                    collisionPosition: e,
                    collisionWidth: y,
                    collisionHeight: z,
                    offset: [f[0] + B[0], f[1] + B[1]],
                    my: b.my,
                    at: b.at,
                    within: u,
                    elem: k
                })
            }), b.using && (j = function (a) {
                var c = q.left - A.left,
                    d = c + n - l,
                    e = q.top - A.top,
                    f = e + p - m,
                    i = {
                        target: {
                            element: t,
                            left: q.left,
                            top: q.top,
                            width: n,
                            height: p
                        },
                        element: {
                            element: k,
                            left: A.left,
                            top: A.top,
                            width: l,
                            height: m
                        },
                        horizontal: 0 > d ? "left" : c > 0 ? "right" : "center",
                        vertical: 0 > f ? "top" : e > 0 ? "bottom" : "middle"
                    };
                l > n && h(c + d) < n && (i.horizontal = "center"), m > p && h(e + f) < p && (i.vertical = "middle"), i.important = g(h(c), h(d)) > g(h(e), h(f)) ? "horizontal" : "vertical", b.using.call(this, a, i)
            }), k.offset(a.extend(A, {
                using: j
            }))
        })
    }, a.ui.position = {
        fit: {
            left: function (a, b) {
                var c, d = b.within,
                    e = d.isWindow ? d.scrollLeft : d.offset.left,
                    f = d.width,
                    h = a.left - b.collisionPosition.marginLeft,
                    i = e - h,
                    j = h + b.collisionWidth - f - e;
                b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left)
            },
            top: function (a, b) {
                var c, d = b.within,
                    e = d.isWindow ? d.scrollTop : d.offset.top,
                    f = b.within.height,
                    h = a.top - b.collisionPosition.marginTop,
                    i = e - h,
                    j = h + b.collisionHeight - f - e;
                b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top)
            }
        },
        flip: {
            left: function (a, b) {
                var c, d, e = b.within,
                    f = e.offset.left + e.scrollLeft,
                    g = e.width,
                    i = e.isWindow ? e.scrollLeft : e.offset.left,
                    j = a.left - b.collisionPosition.marginLeft,
                    k = j - i,
                    l = j + b.collisionWidth - g - i,
                    m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                    n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                    o = -2 * b.offset[0];
                0 > k ? (c = a.left + m + n + o + b.collisionWidth - g - f, (0 > c || c < h(k)) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || h(d) < l) && (a.left += m + n + o))
            },
            top: function (a, b) {
                var c, d, e = b.within,
                    f = e.offset.top + e.scrollTop,
                    g = e.height,
                    i = e.isWindow ? e.scrollTop : e.offset.top,
                    j = a.top - b.collisionPosition.marginTop,
                    k = j - i,
                    l = j + b.collisionHeight - g - i,
                    m = "top" === b.my[1],
                    n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                    o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                    p = -2 * b.offset[1];
                0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f, a.top + n + o + p > k && (0 > d || d < h(k)) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, a.top + n + o + p > l && (c > 0 || h(c) < l) && (a.top += n + o + p))
            }
        },
        flipfit: {
            left: function () {
                a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
            },
            top: function () {
                a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function () {
        var b, c, d, e, f, g = document.getElementsByTagName("body")[0],
            h = document.createElement("div");
        b = document.createElement(g ? "div" : "body"), d = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, g && a.extend(d, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (f in d) b.style[f] = d[f];
        b.appendChild(h), c = g || document.documentElement, c.insertBefore(b, c.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", e = a(h).offset().left, a.support.offsetFractions = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b)
    }()
}(jQuery),
function (a) {
    var b = 0,
        c = {}, d = {};
    c.height = c.paddingTop = c.paddingBottom = c.borderTopWidth = c.borderBottomWidth = "hide", d.height = d.paddingTop = d.paddingBottom = d.borderTopWidth = d.borderBottomWidth = "show", a.widget("ui.accordion", {
        version: "1.10.1",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function () {
            var b = this.options;
            this.prevShow = this.prevHide = a(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), b.collapsible || b.active !== !1 && null != b.active || (b.active = 0), this._processPanels(), b.active < 0 && (b.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function () {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : a(),
                content: this.active.length ? this.active.next() : a()
            }
        },
        _createIcons: function () {
            var b = this.options.icons;
            b && (a("<span>").addClass("ui-accordion-header-icon ui-icon " + b.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var a;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), a = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), "content" !== this.options.heightStyle && a.css("height", "")
        },
        _setOption: function (a, b) {
            return "active" === a ? (this._activate(b), void 0) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(b)), this._super(a, b), "collapsible" !== a || b || this.options.active !== !1 || this._activate(0), "icons" === a && (this._destroyIcons(), b && this._createIcons()), "disabled" === a && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !! b), void 0)
        },
        _keydown: function (b) {
            if (!b.altKey && !b.ctrlKey) {
                var c = a.ui.keyCode,
                    d = this.headers.length,
                    e = this.headers.index(b.target),
                    f = !1;
                switch (b.keyCode) {
                case c.RIGHT:
                case c.DOWN:
                    f = this.headers[(e + 1) % d];
                    break;
                case c.LEFT:
                case c.UP:
                    f = this.headers[(e - 1 + d) % d];
                    break;
                case c.SPACE:
                case c.ENTER:
                    this._eventHandler(b);
                    break;
                case c.HOME:
                    f = this.headers[0];
                    break;
                case c.END:
                    f = this.headers[d - 1]
                }
                f && (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus(), b.preventDefault())
            }
        },
        _panelKeyDown: function (b) {
            b.keyCode === a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().focus()
        },
        refresh: function () {
            var b = this.options;
            this._processPanels(), (b.active === !1 && b.collapsible === !0 || !this.headers.length) && (b.active = !1, this.active = a()), b.active === !1 ? this._activate(0) : this.active.length && !a.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, this.active = a()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function () {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function () {
            var c, d = this.options,
                e = d.heightStyle,
                f = this.element.parent(),
                g = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++b);
            this.active = this._findActive(d.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function (b) {
                var c = a(this),
                    d = c.attr("id"),
                    e = c.next(),
                    f = e.attr("id");
                d || (d = g + "-header-" + b, c.attr("id", d)), f || (f = g + "-panel-" + b, e.attr("id", f)), c.attr("aria-controls", f), e.attr("aria-labelledby", d)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(d.event), "fill" === e ? (c = f.height(), this.element.siblings(":visible").each(function () {
                var b = a(this),
                    d = b.css("position");
                "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0))
            }), this.headers.each(function () {
                c -= a(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (c = 0, this.headers.next().each(function () {
                c = Math.max(c, a(this).css("height", "").height())
            }).height(c))
        },
        _activate: function (b) {
            var c = this._findActive(b)[0];
            c !== this.active[0] && (c = c || this.active[0], this._eventHandler({
                target: c,
                currentTarget: c,
                preventDefault: a.noop
            }))
        },
        _findActive: function (b) {
            return "number" == typeof b ? this.headers.eq(b) : a()
        },
        _setupEvents: function (b) {
            var c = {
                keydown: "_keydown"
            };
            b && a.each(b.split(" "), function (a, b) {
                c[b] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, c), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function (b) {
            var c = this.options,
                d = this.active,
                e = a(b.currentTarget),
                f = e[0] === d[0],
                g = f && c.collapsible,
                h = g ? a() : e.next(),
                i = d.next(),
                j = {
                    oldHeader: d,
                    oldPanel: i,
                    newHeader: g ? a() : e,
                    newPanel: h
                };
            b.preventDefault(), f && !c.collapsible || this._trigger("beforeActivate", b, j) === !1 || (c.active = g ? !1 : this.headers.index(e), this.active = f ? a() : e, this._toggle(j), d.removeClass("ui-accordion-header-active ui-state-active"), c.icons && d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), f || (e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), c.icons && e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), e.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function (b) {
            var c = b.newPanel,
                d = this.prevShow.length ? this.prevShow : b.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = c, this.prevHide = d, this.options.animate ? this._animate(c, d, b) : (d.hide(), c.show(), this._toggleComplete(b)), d.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), d.prev().attr("aria-selected", "false"), c.length && d.length ? d.prev().attr("tabIndex", -1) : c.length && this.headers.filter(function () {
                return 0 === a(this).attr("tabIndex")
            }).attr("tabIndex", -1), c.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function (a, b, e) {
            var f, g, h, i = this,
                j = 0,
                k = a.length && (!b.length || a.index() < b.index()),
                l = this.options.animate || {}, m = k && l.down || l,
                n = function () {
                    i._toggleComplete(e)
                };
            return "number" == typeof m && (h = m), "string" == typeof m && (g = m), g = g || m.easing || l.easing, h = h || m.duration || l.duration, b.length ? a.length ? (f = a.show().outerHeight(), b.animate(c, {
                duration: h,
                easing: g,
                step: function (a, b) {
                    b.now = Math.round(a)
                }
            }), a.hide().animate(d, {
                duration: h,
                easing: g,
                complete: n,
                step: function (a, c) {
                    c.now = Math.round(a), "height" !== c.prop ? j += c.now : "content" !== i.options.heightStyle && (c.now = Math.round(f - b.outerHeight() - j), j = 0)
                }
            }), void 0) : b.animate(c, h, g, n) : a.animate(d, h, g, n)
        },
        _toggleComplete: function (a) {
            var b = a.oldPanel;
            b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), b.length && (b.parent()[0].className = b.parent()[0].className), this._trigger("activate", null, a)
        }
    })
}(jQuery),
function (a) {
    var b = 0;
    a.widget("ui.autocomplete", {
        version: "1.10.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function () {
            var b, c, d, e = this.element[0].nodeName.toLowerCase(),
                f = "textarea" === e,
                g = "input" === e;
            this.isMultiLine = f ? !0 : g ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[f || g ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (e) {
                    if (this.element.prop("readOnly")) return b = !0, d = !0, c = !0, void 0;
                    b = !1, d = !1, c = !1;
                    var f = a.ui.keyCode;
                    switch (e.keyCode) {
                    case f.PAGE_UP:
                        b = !0, this._move("previousPage", e);
                        break;
                    case f.PAGE_DOWN:
                        b = !0, this._move("nextPage", e);
                        break;
                    case f.UP:
                        b = !0, this._keyEvent("previous", e);
                        break;
                    case f.DOWN:
                        b = !0, this._keyEvent("next", e);
                        break;
                    case f.ENTER:
                    case f.NUMPAD_ENTER:
                        this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                        break;
                    case f.TAB:
                        this.menu.active && this.menu.select(e);
                        break;
                    case f.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term), this.close(e), e.preventDefault());
                        break;
                    default:
                        c = !0, this._searchTimeout(e)
                    }
                },
                keypress: function (d) {
                    if (b) return b = !1, d.preventDefault(), void 0;
                    if (!c) {
                        var e = a.ui.keyCode;
                        switch (d.keyCode) {
                        case e.PAGE_UP:
                            this._move("previousPage", d);
                            break;
                        case e.PAGE_DOWN:
                            this._move("nextPage", d);
                            break;
                        case e.UP:
                            this._keyEvent("previous", d);
                            break;
                        case e.DOWN:
                            this._keyEvent("next", d)
                        }
                    }
                },
                input: function (a) {
                    return d ? (d = !1, a.preventDefault(), void 0) : (this._searchTimeout(a), void 0)
                },
                focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function (a) {
                    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(a), this._change(a), void 0)
                }
            }), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                input: a(),
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function (b) {
                    b.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur
                    });
                    var c = this.menu.element[0];
                    a(b.target).closest(".ui-menu-item").length || this._delay(function () {
                        var b = this;
                        this.document.one("mousedown", function (d) {
                            d.target === b.element[0] || d.target === c || a.contains(c, d.target) || b.close()
                        })
                    })
                },
                menufocus: function (b, c) {
                    if (this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type))) return this.menu.blur(), this.document.one("mousemove", function () {
                        a(b.target).trigger(b.originalEvent)
                    }), void 0;
                    var d = c.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", b, {
                        item: d
                    }) ? b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(d.value) : this.liveRegion.text(d.value)
                },
                menuselect: function (a, b) {
                    var c = b.item.data("ui-autocomplete-item"),
                        d = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function () {
                        this.previous = d, this.selectedItem = c
                    })), !1 !== this._trigger("select", a, {
                        item: c
                    }) && this._value(c.value), this.term = this._value(), this.close(a), this.selectedItem = c
                }
            }), this.liveRegion = a("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (a, b) {
            this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), "disabled" === a && b && this.xhr && this.xhr.abort()
        },
        _appendTo: function () {
            var b = this.options.appendTo;
            return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b || (b = this.element.closest(".ui-front")), b.length || (b = this.document[0].body), b
        },
        _initSource: function () {
            var b, c, d = this;
            a.isArray(this.options.source) ? (b = this.options.source, this.source = function (c, d) {
                d(a.ui.autocomplete.filter(b, c.term))
            }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function (b, e) {
                d.xhr && d.xhr.abort(), d.xhr = a.ajax({
                    url: c,
                    data: b,
                    dataType: "json",
                    success: function (a) {
                        e(a)
                    },
                    error: function () {
                        e([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (a) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, a))
            }, this.options.delay)
        },
        search: function (a, b) {
            return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(a) : void 0
        },
        _search: function (a) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: a
            }, this._response())
        },
        _response: function () {
            var a = this,
                c = ++b;
            return function (d) {
                c === b && a.__response(d), a.pending--, a.pending || a.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function (a) {
            a && (a = this._normalize(a)), this._trigger("response", null, {
                content: a
            }), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
        },
        close: function (a) {
            this.cancelSearch = !0, this._close(a)
        },
        _close: function (a) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
        },
        _change: function (a) {
            this.previous !== this._value() && this._trigger("change", a, {
                item: this.selectedItem
            })
        },
        _normalize: function (b) {
            return b.length && b[0].label && b[0].value ? b : a.map(b, function (b) {
                return "string" == typeof b ? {
                    label: b,
                    value: b
                } : a.extend({
                    label: b.label || b.value,
                    value: b.value || b.label
                }, b)
            })
        },
        _suggest: function (b) {
            var c = this.menu.element.empty();
            this._renderMenu(c, b), this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (b, c) {
            var d = this;
            a.each(c, function (a, c) {
                d._renderItemData(b, c)
            })
        },
        _renderItemData: function (a, b) {
            return this._renderItem(a, b).data("ui-autocomplete-item", b)
        },
        _renderItem: function (b, c) {
            return a("<li>").append(a("<a>").text(c.label)).appendTo(b)
        },
        _move: function (a, b) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this._value(this.term), this.menu.blur(), void 0) : (this.menu[a](b), void 0) : (this.search(null, b), void 0)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (a, b) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, b), b.preventDefault())
        }
    }), a.extend(a.ui.autocomplete, {
        escapeRegex: function (a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function (b, c) {
            var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
            return a.grep(b, function (a) {
                return d.test(a.label || a.value || a)
            })
        }
    }), a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (a) {
                    return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function (a) {
            var b;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (b = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, this.liveRegion.text(b))
        }
    })
}(jQuery),
function (a) {
    var b, c, d, e, f = "ui-button ui-widget ui-state-default ui-corner-all",
        g = "ui-state-hover ui-state-active ",
        h = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        i = function () {
            var b = a(this).find(":ui-button");
            setTimeout(function () {
                b.button("refresh")
            }, 1)
        }, j = function (b) {
            var c = b.name,
                d = b.form,
                e = a([]);
            return c && (c = c.replace(/'/g, "\\'"), e = d ? a(d).find("[name='" + c + "']") : a("[name='" + c + "']", b.ownerDocument).filter(function () {
                return !this.form
            })), e
        };
    a.widget("ui.button", {
        version: "1.10.1",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, i), "boolean" != typeof this.options.disabled ? this.options.disabled = !! this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !! this.buttonElement.attr("title");
            var g = this,
                h = this.options,
                k = "checkbox" === this.type || "radio" === this.type,
                l = k ? "" : "ui-state-active",
                m = "ui-state-focus";
            null === h.label && (h.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(f).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                h.disabled || this === b && a(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                h.disabled || a(this).removeClass(l)
            }).bind("click" + this.eventNamespace, function (a) {
                h.disabled && (a.preventDefault(), a.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function () {
                g.buttonElement.addClass(m)
            }).bind("blur" + this.eventNamespace, function () {
                g.buttonElement.removeClass(m)
            }), k && (this.element.bind("change" + this.eventNamespace, function () {
                e || g.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function (a) {
                h.disabled || (e = !1, c = a.pageX, d = a.pageY)
            }).bind("mouseup" + this.eventNamespace, function (a) {
                h.disabled || (c !== a.pageX || d !== a.pageY) && (e = !0)
            })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                return h.disabled || e ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (h.disabled || e) return !1;
                a(this).addClass("ui-state-active"), g.buttonElement.attr("aria-pressed", "true");
                var b = g.element[0];
                j(b).not(b).map(function () {
                    return a(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                return h.disabled ? !1 : (a(this).addClass("ui-state-active"), b = this, g.document.one("mouseup", function () {
                    b = null
                }), void 0)
            }).bind("mouseup" + this.eventNamespace, function () {
                return h.disabled ? !1 : (a(this).removeClass("ui-state-active"), void 0)
            }).bind("keydown" + this.eventNamespace, function (b) {
                return h.disabled ? !1 : ((b.keyCode === a.ui.keyCode.SPACE || b.keyCode === a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active"), void 0)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                a(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (b) {
                b.keyCode === a.ui.keyCode.SPACE && a(this).click()
            })), this._setOption("disabled", h.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            var a, b, c;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible"), c = this.element.is(":checked"), c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", c)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(f + " " + g + " " + h).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (a, b) {
            return this._super(a, b), "disabled" === a ? (b ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), void 0) : (this._resetButton(), void 0)
        },
        refresh: function () {
            var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            b !== this.options.disabled && this._setOption("disabled", b), "radio" === this.type ? j(this.element[0]).each(function () {
                a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
            var b = this.buttonElement.removeClass(h),
                c = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),
                d = this.options.icons,
                e = d.primary && d.secondary,
                f = [];
            d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", a.trim(c)))) : f.push("ui-button-text-only"), b.addClass(f.join(" "))
        }
    }), a.widget("ui.buttonset", {
        version: "1.10.1",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (a, b) {
            "disabled" === a && this.buttons.button("option", a, b), this._super(a, b)
        },
        refresh: function () {
            var b = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return a(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return a(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery),
function (a, b) {
    function c() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, a.extend(this._defaults, this.regional[""]), this.dpDiv = d(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function d(b) {
        var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return b.delegate(c, "mouseout", function () {
            a(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover")
        }).delegate(c, "mouseover", function () {
            a.datepicker._isDisabledDatepicker(f.inline ? b.parent()[0] : f.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function e(b, c) {
        a.extend(b, c);
        for (var d in c) null == c[d] && (b[d] = c[d]);
        return b
    }
    a.extend(a.ui, {
        datepicker: {
            version: "1.10.1"
        }
    });
    var f, g = "datepicker",
        h = (new Date).getTime();
    a.extend(c.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (a) {
            return e(this._defaults, a || {}), this
        },
        _attachDatepicker: function (b, c) {
            var d, e, f;
            d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f)
        },
        _newInst: function (b, c) {
            var e = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: e,
                input: b,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: c,
                dpDiv: c ? d(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (b, c) {
            var d = a(b);
            c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, g, c), c.settings.disabled && this._disableDatepicker(b))
        },
        _attachments: function (b, c) {
            var d, e, f, g = this._get(c, "appendText"),
                h = this._get(c, "isRTL");
            c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[h ? "before" : "after"](c.append)), b.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.focus(this._showDatepicker), ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                src: f,
                alt: e,
                title: e
            }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
                src: f,
                alt: e,
                title: e
            }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.click(function () {
                return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1
            }))
        },
        _autoSize: function (a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b, c, d, e, f = new Date(2009, 11, 20),
                    g = this._get(a, "dateFormat");
                g.match(/[DM]/) && (b = function (a) {
                    for (c = 0, d = 0, e = 0; e < a.length; e++) a[e].length > c && (c = a[e].length, d = e);
                    return d
                }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length)
            }
        },
        _inlineDatepicker: function (b, c) {
            var d = a(b);
            d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, g, c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (b, c, d, f, h) {
            var i, j, k, l, m, n = this._dialogInst;
            return n || (this.uuid += 1, i = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + i + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), n = this._dialogInst = this._newInst(this._dialogInput, !1), n.settings = {}, a.data(this._dialogInput[0], g, n)), e(n.settings, f || {}), c = c && c.constructor === Date ? this._formatDate(n, c) : c, this._dialogInput.val(c), this._pos = h ? h.length ? h : [h.pageX, h.pageY] : null, this._pos || (j = document.documentElement.clientWidth, k = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, m = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [j / 2 - 100 + l, k / 2 - 150 + m]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), n.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], g, n), this
        },
        _destroyDatepicker: function (b) {
            var c, d = a(b),
                e = a.data(b, g);
            d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, g), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function (b) {
            var c, d, e = a(b),
                f = a.data(b, g);
            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = a.map(this._disabledInputs, function (a) {
                return a === b ? null : a
            }))
        },
        _disableDatepicker: function (b) {
            var c, d, e = a(b),
                f = a.data(b, g);
            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function (a) {
                return a === b ? null : a
            }), this._disabledInputs[this._disabledInputs.length] = b)
        },
        _isDisabledDatepicker: function (a) {
            if (!a) return !1;
            for (var b = 0; b < this._disabledInputs.length; b++)
                if (this._disabledInputs[b] === a) return !0;
            return !1
        },
        _getInst: function (b) {
            try {
                return a.data(b, g)
            } catch (c) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (c, d, f) {
            var g, h, i, j, k = this._getInst(c);
            return 2 === arguments.length && "string" == typeof d ? "defaults" === d ? a.extend({}, a.datepicker._defaults) : k ? "all" === d ? a.extend({}, k.settings) : this._get(k, d) : null : (g = d || {}, "string" == typeof d && (g = {}, g[d] = f), k && (this._curInst === k && this._hideDatepicker(), h = this._getDateDatepicker(c, !0), i = this._getMinMaxDate(k, "min"), j = this._getMinMaxDate(k, "max"), e(k.settings, g), null !== i && g.dateFormat !== b && g.minDate === b && (k.settings.minDate = this._formatDate(k, i)), null !== j && g.dateFormat !== b && g.maxDate === b && (k.settings.maxDate = this._formatDate(k, j)), "disabled" in g && (g.disabled ? this._disableDatepicker(c) : this._enableDatepicker(c)), this._attachments(a(c), k), this._autoSize(k), this._setDate(k, h), this._updateAlternate(k), this._updateDatepicker(k)), void 0)
        },
        _changeDatepicker: function (a, b, c) {
            this._optionDatepicker(a, b, c)
        },
        _refreshDatepicker: function (a) {
            var b = this._getInst(a);
            b && this._updateDatepicker(b)
        },
        _setDateDatepicker: function (a, b) {
            var c = this._getInst(a);
            c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
        },
        _getDateDatepicker: function (a, b) {
            var c = this._getInst(a);
            return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
        },
        _doKeyDown: function (b) {
            var c, d, e, f = a.datepicker._getInst(b.target),
                g = !0,
                h = f.dpDiv.is(".ui-datepicker-rtl");
            if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
            case 9:
                a.datepicker._hideDatepicker(), g = !1;
                break;
            case 13:
                return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
            case 27:
                a.datepicker._hideDatepicker();
                break;
            case 33:
                a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                break;
            case 34:
                a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                break;
            case 35:
                (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
                break;
            case 36:
                (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
                break;
            case 37:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                break;
            case 38:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
                break;
            case 39:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                break;
            case 40:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
                break;
            default:
                g = !1
            } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
            g && (b.preventDefault(), b.stopPropagation())
        },
        _doKeyPress: function (b) {
            var c, d, e = a.datepicker._getInst(b.target);
            return a.datepicker._get(e, "constrainInput") ? (c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || c.indexOf(d) > -1) : void 0
        },
        _doKeyUp: function (b) {
            var c, d = a.datepicker._getInst(b.target);
            if (d.input.val() !== d.lastVal) try {
                c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d))
            } catch (e) {}
            return !0
        },
        _showDatepicker: function (b) {
            if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
                var c, d, f, g, h, i, j;
                c = a.datepicker._getInst(b), a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), d = a.datepicker._get(c, "beforeShow"), f = d ? d.apply(b, [b, c]) : {}, f !== !1 && (e(c.settings, f), c.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(c), a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight), g = !1, a(b).parents().each(function () {
                    return g |= "fixed" === a(this).css("position"), !g
                }), h = {
                    left: a.datepicker._pos[0],
                    top: a.datepicker._pos[1]
                }, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), a.datepicker._updateDatepicker(c), h = a.datepicker._checkOffset(c, h, g), c.dpDiv.css({
                    position: a.datepicker._inDialog && a.blockUI ? "static" : g ? "fixed" : "absolute",
                    display: "none",
                    left: h.left + "px",
                    top: h.top + "px"
                }), c.inline || (i = a.datepicker._get(c, "showAnim"), j = a.datepicker._get(c, "duration"), c.dpDiv.zIndex(a(b).zIndex() + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[i] ? c.dpDiv.show(i, a.datepicker._get(c, "showOptions"), j) : c.dpDiv[i || "show"](i ? j : null), c.input.is(":visible") && !c.input.is(":disabled") && c.input.focus(), a.datepicker._curInst = c))
            }
        },
        _updateDatepicker: function (b) {
            this.maxRows = 4, f = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b), b.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var c, d = this._getNumberOfMonths(b),
                e = d[1],
                g = 17;
            b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", g * e + "em"), b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), b === a.datepicker._curInst && a.datepicker._datepickerShowing && b.input && b.input.is(":visible") && !b.input.is(":disabled") && b.input[0] !== document.activeElement && b.input.focus(), b.yearshtml && (c = b.yearshtml, setTimeout(function () {
                c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), c = b.yearshtml = null
            }, 0))
        },
        _getBorders: function (a) {
            var b = function (a) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[a] || a
            };
            return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
        },
        _checkOffset: function (b, c, d) {
            var e = b.dpDiv.outerWidth(),
                f = b.dpDiv.outerHeight(),
                g = b.input ? b.input.outerWidth() : 0,
                h = b.input ? b.input.outerHeight() : 0,
                i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()),
                j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
            return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c
        },
        _findPos: function (b) {
            for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) b = b[e ? "previousSibling" : "nextSibling"];
            return c = a(b).offset(), [c.left, c.top]
        },
        _hideDatepicker: function (b) {
            var c, d, e, f, h = this._curInst;
            !h || b && h !== a.data(b, g) || this._datepickerShowing && (c = this._get(h, "showAnim"), d = this._get(h, "duration"), e = function () {
                a.datepicker._tidyDialog(h)
            }, a.effects && (a.effects.effect[c] || a.effects[c]) ? h.dpDiv.hide(c, a.datepicker._get(h, "showOptions"), d, e) : h.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(h, "onClose"), f && f.apply(h.input ? h.input[0] : null, [h.input ? h.input.val() : "", h]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (b) {
            if (a.datepicker._curInst) {
                var c = a(b.target),
                    d = a.datepicker._getInst(c[0]);
                (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (b, c, d) {
            var e = a(b),
                f = this._getInst(e[0]);
            this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f))
        },
        _gotoToday: function (b) {
            var c, d = a(b),
                e = this._getInst(d[0]);
            this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), this._notifyChange(e), this._adjustDate(d)
        },
        _selectMonthYear: function (b, c, d) {
            var e = a(b),
                f = this._getInst(e[0]);
            f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(f), this._adjustDate(e)
        },
        _selectDay: function (b, c, d, e) {
            var f, g = a(b);
            a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function (b) {
            var c = a(b);
            this._selectDate(c, "")
        },
        _selectDate: function (b, c) {
            var d, e = a(b),
                f = this._getInst(e[0]);
            c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [c, f]) : f.input && f.input.trigger("change"), f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (b) {
            var c, d, e, f = this._get(b, "altField");
            f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function () {
                a(this).val(e)
            }))
        },
        noWeekends: function (a) {
            var b = a.getDay();
            return [b > 0 && 6 > b, ""]
        },
        iso8601Week: function (a) {
            var b, c = new Date(a.getTime());
            return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1
        },
        parseDate: function (b, c, d) {
            if (null == b || null == c) throw "Invalid arguments";
            if (c = "object" == typeof c ? c.toString() : c + "", "" === c) return null;
            var e, f, g, h, i = 0,
                j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                k = "string" != typeof j ? j : (new Date).getFullYear() % 100 + parseInt(j, 10),
                l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort,
                m = (d ? d.dayNames : null) || this._defaults.dayNames,
                n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (d ? d.monthNames : null) || this._defaults.monthNames,
                p = -1,
                q = -1,
                r = -1,
                s = -1,
                t = !1,
                u = function (a) {
                    var c = e + 1 < b.length && b.charAt(e + 1) === a;
                    return c && e++, c
                }, v = function (a) {
                    var b = u(a),
                        d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2,
                        e = new RegExp("^\\d{1," + d + "}"),
                        f = c.substring(i).match(e);
                    if (!f) throw "Missing number at position " + i;
                    return i += f[0].length, parseInt(f[0], 10)
                }, w = function (b, d, e) {
                    var f = -1,
                        g = a.map(u(b) ? e : d, function (a, b) {
                            return [[b, a]]
                        }).sort(function (a, b) {
                            return -(a[1].length - b[1].length)
                        });
                    if (a.each(g, function (a, b) {
                        var d = b[1];
                        return c.substr(i, d.length).toLowerCase() === d.toLowerCase() ? (f = b[0], i += d.length, !1) : void 0
                    }), -1 !== f) return f + 1;
                    throw "Unknown name at position " + i
                }, x = function () {
                    if (c.charAt(i) !== b.charAt(e)) throw "Unexpected literal at position " + i;
                    i++
                };
            for (e = 0; e < b.length; e++)
                if (t) "'" !== b.charAt(e) || u("'") ? x() : t = !1;
                else switch (b.charAt(e)) {
                case "d":
                    r = v("d");
                    break;
                case "D":
                    w("D", l, m);
                    break;
                case "o":
                    s = v("o");
                    break;
                case "m":
                    q = v("m");
                    break;
                case "M":
                    q = w("M", n, o);
                    break;
                case "y":
                    p = v("y");
                    break;
                case "@":
                    h = new Date(v("@")), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
                    break;
                case "!":
                    h = new Date((v("!") - this._ticksTo1970) / 1e4), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
                    break;
                case "'":
                    u("'") ? x() : t = !0;
                    break;
                default:
                    x()
                }
                if (i < c.length && (g = c.substr(i), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g;
            if (-1 === p ? p = (new Date).getFullYear() : 100 > p && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (k >= p ? 0 : -100)), s > -1)
                for (q = 1, r = s;;) {
                    if (f = this._getDaysInMonth(p, q - 1), f >= r) break;
                    q++, r -= f
                }
            if (h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r) throw "Invalid date";
            return h
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (a, b, c) {
            if (!b) return "";
            var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                f = (c ? c.dayNames : null) || this._defaults.dayNames,
                g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                h = (c ? c.monthNames : null) || this._defaults.monthNames,
                i = function (b) {
                    var c = d + 1 < a.length && a.charAt(d + 1) === b;
                    return c && d++, c
                }, j = function (a, b, c) {
                    var d = "" + b;
                    if (i(a))
                        for (; d.length < c;) d = "0" + d;
                    return d
                }, k = function (a, b, c, d) {
                    return i(a) ? d[b] : c[b]
                }, l = "",
                m = !1;
            if (b)
                for (d = 0; d < a.length; d++)
                    if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1;
                    else switch (a.charAt(d)) {
                    case "d":
                        l += j("d", b.getDate(), 2);
                        break;
                    case "D":
                        l += k("D", b.getDay(), e, f);
                        break;
                    case "o":
                        l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                        break;
                    case "m":
                        l += j("m", b.getMonth() + 1, 2);
                        break;
                    case "M":
                        l += k("M", b.getMonth(), g, h);
                        break;
                    case "y":
                        l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
                        break;
                    case "@":
                        l += b.getTime();
                        break;
                    case "!":
                        l += 1e4 * b.getTime() + this._ticksTo1970;
                        break;
                    case "'":
                        i("'") ? l += "'" : m = !0;
                        break;
                    default:
                        l += a.charAt(d)
                    }
                    return l
        },
        _possibleChars: function (a) {
            var b, c = "",
                d = !1,
                e = function (c) {
                    var d = b + 1 < a.length && a.charAt(b + 1) === c;
                    return d && b++, d
                };
            for (b = 0; b < a.length; b++)
                if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1;
                else switch (a.charAt(b)) {
                case "d":
                case "m":
                case "y":
                case "@":
                    c += "0123456789";
                    break;
                case "D":
                case "M":
                    return null;
                case "'":
                    e("'") ? c += "'" : d = !0;
                    break;
                default:
                    c += a.charAt(b)
                }
                return c
        },
        _get: function (a, c) {
            return a.settings[c] !== b ? a.settings[c] : this._defaults[c]
        },
        _setDateFromField: function (a, b) {
            if (a.input.val() !== a.lastVal) {
                var c = this._get(a, "dateFormat"),
                    d = a.lastVal = a.input ? a.input.val() : null,
                    e = this._getDefaultDate(a),
                    f = e,
                    g = this._getFormatConfig(a);
                try {
                    f = this.parseDate(c, d, g) || e
                } catch (h) {
                    d = b ? "" : d
                }
                a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a)
            }
        },
        _getDefaultDate: function (a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        },
        _determineDate: function (b, c, d) {
            var e = function (a) {
                var b = new Date;
                return b.setDate(b.getDate() + a), b
            }, f = function (c) {
                    try {
                        return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b))
                    } catch (d) {}
                    for (var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c); j;) {
                        switch (j[2] || "d") {
                        case "d":
                        case "D":
                            h += parseInt(j[1], 10);
                            break;
                        case "w":
                        case "W":
                            h += 7 * parseInt(j[1], 10);
                            break;
                        case "m":
                        case "M":
                            g += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                            break;
                        case "y":
                        case "Y":
                            f += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g))
                        }
                        j = i.exec(c)
                    }
                    return new Date(f, g, h)
                }, g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
            return g = g && "Invalid Date" === g.toString() ? d : g, g && (g.setHours(0), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g)
        },
        _daylightSavingAdjust: function (a) {
            return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
        },
        _setDate: function (a, b, c) {
            var d = !b,
                e = a.selectedMonth,
                f = a.selectedYear,
                g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
            a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
        },
        _getDate: function (a) {
            var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return b
        },
        _attachHandlers: function (b) {
            var c = this._get(b, "stepMonths"),
                d = "#" + b.id.replace(/\\\\/g, "\\");
            b.dpDiv.find("[data-handler]").map(function () {
                var b = {
                    prev: function () {
                        window["DP_jQuery_" + h].datepicker._adjustDate(d, -c, "M")
                    },
                    next: function () {
                        window["DP_jQuery_" + h].datepicker._adjustDate(d, +c, "M")
                    },
                    hide: function () {
                        window["DP_jQuery_" + h].datepicker._hideDatepicker()
                    },
                    today: function () {
                        window["DP_jQuery_" + h].datepicker._gotoToday(d)
                    },
                    selectDay: function () {
                        return window["DP_jQuery_" + h].datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function () {
                        return window["DP_jQuery_" + h].datepicker._selectMonthYear(d, this, "M"), !1
                    },
                    selectYear: function () {
                        return window["DP_jQuery_" + h].datepicker._selectMonthYear(d, this, "Y"), !1
                    }
                };
                a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date,
                P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
                Q = this._get(a, "isRTL"),
                R = this._get(a, "showButtonPanel"),
                S = this._get(a, "hideIfNoPrevNext"),
                T = this._get(a, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(a),
                V = this._get(a, "showCurrentAtPos"),
                W = this._get(a, "stepMonths"),
                X = 1 !== U[0] || 1 !== U[1],
                Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
                Z = this._getMinMaxDate(a, "min"),
                $ = this._getMinMaxDate(a, "max"),
                _ = a.drawMonth - V,
                ab = a.drawYear;
            if (0 > _ && (_ += 12, ab--), $)
                for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(ab, _, 1)) > b;) _--, 0 > _ && (_ = 11, ab--);
            for (a.drawMonth = _, a.drawYear = ab, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(ab, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, ab, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(ab, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, ab, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; w < U[0]; w++) {
                for (x = "", this.maxRows = 4, y = 0; y < U[1]; y++) {
                    if (z = this._daylightSavingAdjust(new Date(ab, _, a.selectedDay)), A = " ui-corner-all", B = "", X) {
                        if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
                        case 0:
                            B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
                            break;
                        case U[1] - 1:
                            B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
                            break;
                        default:
                            B += " ui-datepicker-group-middle", A = ""
                        }
                        B += "'>"
                    }
                    for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, ab, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; 7 > v; v++) D = (v + k) % 7, C += "<th" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + m[D] + "'>" + n[D] + "</span></th>";
                    for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(ab, _), ab === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(ab, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X ? this.maxRows > G ? this.maxRows : G : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(ab, _, 1 - F)), J = 0; H > J; J++) {
                        for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; 7 > v; v++) L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                        B += K + "</tr>"
                    }
                    _++, _ > 11 && (_ = 0, ab++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B
                }
                u += x
            }
            return u += j, a._keyEvent = !1, u
        },
        _generateMonthYearHeader: function (a, b, c, d, e, f, g, h) {
            var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"),
                r = this._get(a, "changeYear"),
                s = this._get(a, "showMonthAfterYear"),
                t = "<div class='ui-datepicker-title'>",
                u = "";
            if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
            else {
                for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; 12 > k; k++)(!i || k >= d.getMonth()) && (!j || k <= e.getMonth()) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
                u += "</select>"
            } if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)
                if (a.yearshtml = "", f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>";
                else {
                    for (l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function (a) {
                        var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
                        return isNaN(b) ? m : b
                    }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
                    a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null
                }
            return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>"
        },
        _adjustInstDate: function (a, b, c) {
            var d = a.drawYear + ("Y" === c ? b : 0),
                e = a.drawMonth + ("M" === c ? b : 0),
                f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0),
                g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
            a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), ("M" === c || "Y" === c) && this._notifyChange(a)
        },
        _restrictMinMax: function (a, b) {
            var c = this._getMinMaxDate(a, "min"),
                d = this._getMinMaxDate(a, "max"),
                e = c && c > b ? c : b;
            return d && e > d ? d : e
        },
        _notifyChange: function (a) {
            var b = this._get(a, "onChangeMonthYear");
            b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        },
        _getNumberOfMonths: function (a) {
            var b = this._get(a, "numberOfMonths");
            return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
        },
        _getMinMaxDate: function (a, b) {
            return this._determineDate(a, this._get(a, b + "Date"), null)
        },
        _getDaysInMonth: function (a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
        },
        _getFirstDayOfMonth: function (a, b) {
            return new Date(a, b, 1).getDay()
        },
        _canAdjustMonth: function (a, b, c, d) {
            var e = this._getNumberOfMonths(a),
                f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
            return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
        },
        _isInRange: function (a, b) {
            var c, d, e = this._getMinMaxDate(a, "min"),
                f = this._getMinMaxDate(a, "max"),
                g = null,
                h = null,
                i = this._get(a, "yearRange");
            return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || b.getFullYear() <= h)
        },
        _getFormatConfig: function (a) {
            var b = this._get(a, "shortYearCutoff");
            return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
                shortYearCutoff: b,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            }
        },
        _formatDate: function (a, b, c, d) {
            b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
            var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
        }
    }), a.fn.datepicker = function (b) {
        if (!this.length) return this;
        a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
        var c = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function () {
            "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
        }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c))
    }, a.datepicker = new c, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.10.1", window["DP_jQuery_" + h] = a
}(jQuery),
function (a) {
    var b = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }, c = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    a.widget("ui.dialog", {
        version: "1.10.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function (b) {
                    var c = a(this).css(b).offset().top;
                    0 > c && a(this).css("top", b.top - c)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && a.fn.draggable && this._makeDraggable(), this.options.resizable && a.fn.resizable && this._makeResizable(), this._isOpen = !1
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var b = this.options.appendTo;
            return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0)
        },
        _destroy: function () {
            var a, b = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), a = b.parent.children().eq(b.index), a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: a.noop,
        enable: a.noop,
        close: function (b) {
            var c = this;
            this._isOpen && this._trigger("beforeClose", b) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || a(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function () {
                c._trigger("close", b)
            }))
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (a, b) {
            var c = !! this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return c && !b && this._trigger("focus", a), c
        },
        open: function () {
            var b = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = a(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () {
                b._focusTabbable(), b._trigger("focus")
            }), this._trigger("open"), void 0)
        },
        _focusTabbable: function () {
            var a = this.element.find("[autofocus]");
            a.length || (a = this.element.find(":tabbable")), a.length || (a = this.uiDialogButtonPane.find(":tabbable")), a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable")), a.length || (a = this.uiDialog), a.eq(0).focus()
        },
        _keepFocus: function (b) {
            function c() {
                var b = this.document[0].activeElement,
                    c = this.uiDialog[0] === b || a.contains(this.uiDialog[0], b);
                c || this._focusTabbable()
            }
            b.preventDefault(), c.call(this), this._delay(c)
        },
        _createWrapper: function () {
            this.uiDialog = a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function (b) {
                    if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE) return b.preventDefault(), this.close(b), void 0;
                    if (b.keyCode === a.ui.keyCode.TAB) {
                        var c = this.uiDialog.find(":tabbable"),
                            d = c.filter(":first"),
                            e = c.filter(":last");
                        b.target !== e[0] && b.target !== this.uiDialog[0] || b.shiftKey ? b.target !== d[0] && b.target !== this.uiDialog[0] || !b.shiftKey || (e.focus(1), b.preventDefault()) : (d.focus(1), b.preventDefault())
                    }
                },
                mousedown: function (a) {
                    this._moveToTop(a) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function () {
            var b;
            this.uiDialogTitlebar = a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function (b) {
                    a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = a("<button></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function (a) {
                    a.preventDefault(), this.close(a)
                }
            }), b = a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(b), this.uiDialog.attr({
                "aria-labelledby": b.attr("id")
            })
        },
        _title: function (a) {
            this.options.title || a.html("&#160;"), a.text(this.options.title)
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function () {
            var b = this,
                c = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), a.isEmptyObject(c) || a.isArray(c) && !c.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (a.each(c, function (c, d) {
                var e, f;
                d = a.isFunction(d) ? {
                    click: d,
                    text: c
                } : d, d = a.extend({
                    type: "button"
                }, d), e = d.click, d.click = function () {
                    e.apply(b.element[0], arguments)
                }, f = {
                    icons: d.icons,
                    text: d.showText
                }, delete d.icons, delete d.showText, a("<button></button>", d).button(f).appendTo(b.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
        },
        _makeDraggable: function () {
            function b(a) {
                return {
                    position: a.position,
                    offset: a.offset
                }
            }
            var c = this,
                d = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (d, e) {
                    a(this).addClass("ui-dialog-dragging"), c._blockFrames(), c._trigger("dragStart", d, b(e))
                },
                drag: function (a, d) {
                    c._trigger("drag", a, b(d))
                },
                stop: function (e, f) {
                    d.position = [f.position.left - c.document.scrollLeft(), f.position.top - c.document.scrollTop()], a(this).removeClass("ui-dialog-dragging"), c._unblockFrames(), c._trigger("dragStop", e, b(f))
                }
            })
        },
        _makeResizable: function () {
            function b(a) {
                return {
                    originalPosition: a.originalPosition,
                    originalSize: a.originalSize,
                    position: a.position,
                    size: a.size
                }
            }
            var c = this,
                d = this.options,
                e = d.resizable,
                f = this.uiDialog.css("position"),
                g = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: d.maxWidth,
                maxHeight: d.maxHeight,
                minWidth: d.minWidth,
                minHeight: this._minHeight(),
                handles: g,
                start: function (d, e) {
                    a(this).addClass("ui-dialog-resizing"), c._blockFrames(), c._trigger("resizeStart", d, b(e))
                },
                resize: function (a, d) {
                    c._trigger("resize", a, b(d))
                },
                stop: function (e, f) {
                    d.height = a(this).height(), d.width = a(this).width(), a(this).removeClass("ui-dialog-resizing"), c._unblockFrames(), c._trigger("resizeStop", e, b(f))
                }
            }).css("position", f)
        },
        _minHeight: function () {
            var a = this.options;
            return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
        },
        _position: function () {
            var a = this.uiDialog.is(":visible");
            a || this.uiDialog.show(), this.uiDialog.position(this.options.position), a || this.uiDialog.hide()
        },
        _setOptions: function (d) {
            var e = this,
                f = !1,
                g = {};
            a.each(d, function (a, d) {
                e._setOption(a, d), a in b && (f = !0), a in c && (g[a] = d)
            }), f && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", g)
        },
        _setOption: function (a, b) {
            var c, d, e = this.uiDialog;
            "dialogClass" === a && e.removeClass(this.options.dialogClass).addClass(b), "disabled" !== a && (this._super(a, b), "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), "closeText" === a && this.uiDialogTitlebarClose.button({
                label: "" + b
            }), "draggable" === a && (c = e.is(":data(ui-draggable)"), c && !b && e.draggable("destroy"), !c && b && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && (d = e.is(":data(ui-resizable)"), d && !b && e.resizable("destroy"), d && "string" == typeof b && e.resizable("option", "handles", b), d || b === !1 || this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var a, b, c, d = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), d.minWidth > d.width && (d.width = d.minWidth), a = this.uiDialog.css({
                height: "auto",
                width: d.width
            }).outerHeight(), b = Math.max(0, d.minHeight - a), c = "number" == typeof d.maxHeight ? Math.max(0, d.maxHeight - a) : "none", "auto" === d.height ? this.element.css({
                minHeight: b,
                maxHeight: c,
                height: "auto"
            }) : this.element.height(Math.max(0, d.height - a)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var b = a(this);
                return a("<div>").css({
                    position: "absolute",
                    width: b.outerWidth(),
                    height: b.outerHeight()
                }).appendTo(b.parent()).offset(b.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _createOverlay: function () {
            this.options.modal && (a.ui.dialog.overlayInstances || this._delay(function () {
                a.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (b) {
                    a(b.target).closest(".ui-dialog").length || a(b.target).closest(".ui-datepicker").length || (b.preventDefault(), a(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable())
                })
            }), this.overlay = a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                mousedown: "_keepFocus"
            }), a.ui.dialog.overlayInstances++)
        },
        _destroyOverlay: function () {
            this.options.modal && this.overlay && (a.ui.dialog.overlayInstances--, a.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }), a.ui.dialog.overlayInstances = 0, a.uiBackCompat !== !1 && a.widget("ui.dialog", a.ui.dialog, {
        _position: function () {
            var b, c = this.options.position,
                d = [],
                e = [0, 0];
            c ? (("string" == typeof c || "object" == typeof c && "0" in c) && (d = c.split ? c.split(" ") : [c[0], c[1]], 1 === d.length && (d[1] = d[0]), a.each(["left", "top"], function (a, b) {
                +d[a] === d[a] && (e[a] = d[a], d[a] = b)
            }), c = {
                my: d[0] + (e[0] < 0 ? e[0] : "+" + e[0]) + " " + d[1] + (e[1] < 0 ? e[1] : "+" + e[1]),
                at: d.join(" ")
            }), c = a.extend({}, a.ui.dialog.prototype.options.position, c)) : c = a.ui.dialog.prototype.options.position, b = this.uiDialog.is(":visible"), b || this.uiDialog.show(), this.uiDialog.position(c), b || this.uiDialog.hide()
        }
    })
}(jQuery),
function (a) {
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.10.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function (b) {
            var c = this.options;
            return this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b), this.handle ? (a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function () {
                a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(a(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (b) {
            var c = this.options;
            return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), c.containment && this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
        },
        _mouseDrag: function (b, c) {
            if (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                var d = this._uiHash();
                if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
                this.position = d.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
        },
        _mouseStop: function (b) {
            var c, d = this,
                e = !1,
                f = !1;
            for (a.ui.ddmanager && !this.options.dropBehaviour && (f = a.ui.ddmanager.drop(this, b)), this.dropped && (f = this.dropped, this.dropped = !1), c = this.element[0]; c && (c = c.parentNode);) c === document && (e = !0);
            return e || "original" !== this.options.helper ? ("invalid" === this.options.revert && !f || "valid" === this.options.revert && f || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, f) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                d._trigger("stop", b) !== !1 && d._clear()
            }) : this._trigger("stop", b) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function (b) {
            return a("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (b) {
            var c = this.options.handle && a(this.options.handle, this.element).length ? !1 : !0;
            return a(this.options.handle, this.element).find("*").addBack().each(function () {
                this === b.target && (c = !0)
            }), c
        },
        _createHelper: function (b) {
            var c = this.options,
                d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            return d.parents("body").length || d.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d[0] === this.element[0] || /(fixed|absolute)/.test(d.css("position")) || d.css("position", "absolute"), d
        },
        _adjustOffsetFromHelper: function (b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var a = this.element.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var b, c, d, e = this.options;
            if ("parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = ["document" === e.containment ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" === e.containment ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" === e.containment ? 0 : a(window).scrollLeft()) + a("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" === e.containment ? 0 : a(window).scrollTop()) + (a("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || e.containment.constructor === Array) e.containment.constructor === Array && (this.containment = e.containment);
            else {
                if (c = a(e.containment), d = c[0], !d) return;
                b = "hidden" !== a(d).css("overflow"), this.containment = [(parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0), (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c
            }
        },
        _convertPositionTo: function (b, c) {
            c || (c = this.position);
            var d = "absolute" === b ? 1 : -1,
                e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                f = /(html|body)/i.test(e[0].tagName);
            return {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
            }
        },
        _generatePosition: function (b) {
            var c, d, e, f, g = this.options,
                h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(h[0].tagName),
                j = b.pageX,
                k = b.pageY;
            return this.originalPosition && (this.containment && (this.relative_container ? (d = this.relative_container.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, b.pageX - this.offset.click.left < c[0] && (j = c[0] + this.offset.click.left), b.pageY - this.offset.click.top < c[1] && (k = c[1] + this.offset.click.top), b.pageX - this.offset.click.left > c[2] && (j = c[2] + this.offset.click.left), b.pageY - this.offset.click.top > c[3] && (k = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((k - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, k = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((j - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, j = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f)), {
                top: k - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
                left: j - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (b, c, d) {
            return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), "drag" === b && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, d)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), a.ui.plugin.add("draggable", "connectToSortable", {
        start: function (b, c) {
            var d = a(this).data("ui-draggable"),
                e = d.options,
                f = a.extend({}, c, {
                    item: d.element
                });
            d.sortables = [], a(e.connectToSortable).each(function () {
                var c = a.data(this, "ui-sortable");
                c && !c.options.disabled && (d.sortables.push({
                    instance: c,
                    shouldRevert: c.options.revert
                }), c.refreshPositions(), c._trigger("activate", b, f))
            })
        },
        stop: function (b, c) {
            var d = a(this).data("ui-draggable"),
                e = a.extend({}, c, {
                    item: d.element
                });
            a.each(d.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, "original" === d.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e))
            })
        },
        drag: function (b, c) {
            var d = a(this).data("ui-draggable"),
                e = this;
            a.each(d.sortables, function () {
                var f = !1,
                    g = this;
                this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (f = !0, a.each(d.sortables, function () {
                    return this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this !== g && this.instance._intersectsWith(this.instance.containerCache) && a.contains(g.instance.element[0], this.instance.element[0]) && (f = !1), f
                })), f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return c.helper[0]
                }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", b), d.dropped = !1)
            })
        }
    }), a.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var b = a("body"),
                c = a(this).data("ui-draggable").options;
            b.css("cursor") && (c._cursor = b.css("cursor")), b.css("cursor", c.cursor)
        },
        stop: function () {
            var b = a(this).data("ui-draggable").options;
            b._cursor && a("body").css("cursor", b._cursor)
        }
    }), a.ui.plugin.add("draggable", "opacity", {
        start: function (b, c) {
            var d = a(c.helper),
                e = a(this).data("ui-draggable").options;
            d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity)
        },
        stop: function (b, c) {
            var d = a(this).data("ui-draggable").options;
            d._opacity && a(c.helper).css("opacity", d._opacity)
        }
    }), a.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var b = a(this).data("ui-draggable");
            b.scrollParent[0] !== document && "HTML" !== b.scrollParent[0].tagName && (b.overflowOffset = b.scrollParent.offset())
        },
        drag: function (b) {
            var c = a(this).data("ui-draggable"),
                d = c.options,
                e = !1;
            c.scrollParent[0] !== document && "HTML" !== c.scrollParent[0].tagName ? (d.axis && "x" === d.axis || (c.overflowOffset.top + c.scrollParent[0].offsetHeight - b.pageY < d.scrollSensitivity ? c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop + d.scrollSpeed : b.pageY - c.overflowOffset.top < d.scrollSensitivity && (c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop - d.scrollSpeed)), d.axis && "y" === d.axis || (c.overflowOffset.left + c.scrollParent[0].offsetWidth - b.pageX < d.scrollSensitivity ? c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft + d.scrollSpeed : b.pageX - c.overflowOffset.left < d.scrollSensitivity && (c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft - d.scrollSpeed))) : (d.axis && "x" === d.axis || (b.pageY - a(document).scrollTop() < d.scrollSensitivity ? e = a(document).scrollTop(a(document).scrollTop() - d.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < d.scrollSensitivity && (e = a(document).scrollTop(a(document).scrollTop() + d.scrollSpeed))), d.axis && "y" === d.axis || (b.pageX - a(document).scrollLeft() < d.scrollSensitivity ? e = a(document).scrollLeft(a(document).scrollLeft() - d.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < d.scrollSensitivity && (e = a(document).scrollLeft(a(document).scrollLeft() + d.scrollSpeed)))), e !== !1 && a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(c, b)
        }
    }), a.ui.plugin.add("draggable", "snap", {
        start: function () {
            var b = a(this).data("ui-draggable"),
                c = b.options;
            b.snapElements = [], a(c.snap.constructor !== String ? c.snap.items || ":data(ui-draggable)" : c.snap).each(function () {
                var c = a(this),
                    d = c.offset();
                this !== b.element[0] && b.snapElements.push({
                    item: this,
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: d.top,
                    left: d.left
                })
            })
        },
        drag: function (b, c) {
            var d, e, f, g, h, i, j, k, l, m, n = a(this).data("ui-draggable"),
                o = n.options,
                p = o.snapTolerance,
                q = c.offset.left,
                r = q + n.helperProportions.width,
                s = c.offset.top,
                t = s + n.helperProportions.height;
            for (l = n.snapElements.length - 1; l >= 0; l--) h = n.snapElements[l].left, i = h + n.snapElements[l].width, j = n.snapElements[l].top, k = j + n.snapElements[l].height, q > h - p && i + p > q && s > j - p && k + p > s || q > h - p && i + p > q && t > j - p && k + p > t || r > h - p && i + p > r && s > j - p && k + p > s || r > h - p && i + p > r && t > j - p && k + p > t ? ("inner" !== o.snapMode && (d = Math.abs(j - t) <= p, e = Math.abs(k - s) <= p, f = Math.abs(h - r) <= p, g = Math.abs(i - q) <= p, d && (c.position.top = n._convertPositionTo("relative", {
                top: j - n.helperProportions.height,
                left: 0
            }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                top: k,
                left: 0
            }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: h - n.helperProportions.width
            }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: i
            }).left - n.margins.left)), m = d || e || f || g, "outer" !== o.snapMode && (d = Math.abs(j - s) <= p, e = Math.abs(k - t) <= p, f = Math.abs(h - q) <= p, g = Math.abs(i - r) <= p, d && (c.position.top = n._convertPositionTo("relative", {
                top: j,
                left: 0
            }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                top: k - n.helperProportions.height,
                left: 0
            }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: i - n.helperProportions.width
            }).left - n.margins.left)), !n.snapElements[l].snapping && (d || e || f || g || m) && n.options.snap.snap && n.options.snap.snap.call(n.element, b, a.extend(n._uiHash(), {
                snapItem: n.snapElements[l].item
            })), n.snapElements[l].snapping = d || e || f || g || m) : (n.snapElements[l].snapping && n.options.snap.release && n.options.snap.release.call(n.element, b, a.extend(n._uiHash(), {
                snapItem: n.snapElements[l].item
            })), n.snapElements[l].snapping = !1)
        }
    }), a.ui.plugin.add("draggable", "stack", {
        start: function () {
            var b, c = this.data("ui-draggable").options,
                d = a.makeArray(a(c.stack)).sort(function (b, c) {
                    return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
                });
            d.length && (b = parseInt(a(d[0]).css("zIndex"), 10) || 0, a(d).each(function (c) {
                a(this).css("zIndex", b + c)
            }), this.css("zIndex", b + d.length))
        }
    }), a.ui.plugin.add("draggable", "zIndex", {
        start: function (b, c) {
            var d = a(c.helper),
                e = a(this).data("ui-draggable").options;
            d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex)
        },
        stop: function (b, c) {
            var d = a(this).data("ui-draggable").options;
            d._zIndex && a(c.helper).css("zIndex", d._zIndex)
        }
    })
}(jQuery),
function (a) {
    function b(a, b, c) {
        return a > b && b + c > a
    }
    a.widget("ui.droppable", {
        version: "1.10.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {
            var b = this.options,
                c = b.accept;
            this.isover = !1, this.isout = !0, this.accept = a.isFunction(c) ? c : function (a) {
                return a.is(c)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || [], a.ui.ddmanager.droppables[b.scope].push(this), b.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function () {
            for (var b = 0, c = a.ui.ddmanager.droppables[this.options.scope]; b < c.length; b++) c[b] === this && c.splice(b, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function (b, c) {
            "accept" === b && (this.accept = a.isFunction(c) ? c : function (a) {
                return a.is(c)
            }), a.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c))
        },
        _deactivate: function (b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c))
        },
        _over: function (b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
        },
        _out: function (b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
        },
        _drop: function (b, c) {
            var d = c || a.ui.ddmanager.current,
                e = !1;
            return d && (d.currentItem || d.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var b = a.data(this, "ui-droppable");
                return b.options.greedy && !b.options.disabled && b.options.scope === d.options.scope && b.accept.call(b.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(b, {
                    offset: b.element.offset()
                }), b.options.tolerance) ? (e = !0, !1) : void 0
            }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1) : !1
        },
        ui: function (a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            }
        }
    }), a.ui.intersect = function (a, c, d) {
        if (!c.offset) return !1;
        var e, f, g = (a.positionAbs || a.position.absolute).left,
            h = g + a.helperProportions.width,
            i = (a.positionAbs || a.position.absolute).top,
            j = i + a.helperProportions.height,
            k = c.offset.left,
            l = k + c.proportions.width,
            m = c.offset.top,
            n = m + c.proportions.height;
        switch (d) {
        case "fit":
            return g >= k && l >= h && i >= m && n >= j;
        case "intersect":
            return k < g + a.helperProportions.width / 2 && h - a.helperProportions.width / 2 < l && m < i + a.helperProportions.height / 2 && j - a.helperProportions.height / 2 < n;
        case "pointer":
            return e = (a.positionAbs || a.position.absolute).left + (a.clickOffset || a.offset.click).left, f = (a.positionAbs || a.position.absolute).top + (a.clickOffset || a.offset.click).top, b(f, m, c.proportions.height) && b(e, k, c.proportions.width);
        case "touch":
            return (i >= m && n >= i || j >= m && n >= j || m > i && j > n) && (g >= k && l >= g || h >= k && l >= h || k > g && h > l);
        default:
            return !1
        }
    }, a.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function (b, c) {
            var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [],
                g = c ? c.type : null,
                h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
            a: for (d = 0; d < f.length; d++)
                if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
                    for (e = 0; e < h.length; e++)
                        if (h[e] === f[d].element[0]) {
                            f[d].proportions.height = 0;
                            continue a
                        }
                    f[d].visible = "none" !== f[d].element.css("display"), f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), f[d].offset = f[d].element.offset(), f[d].proportions = {
                        width: f[d].element[0].offsetWidth,
                        height: f[d].element[0].offsetHeight
                    })
                }
        },
        drop: function (b, c) {
            var d = !1;
            return a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () {
                this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)))
            }), d
        },
        dragStart: function (b, c) {
            b.element.parentsUntil("body").bind("scroll.droppable", function () {
                b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
            })
        },
        drag: function (b, c) {
            b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d, e, f, g = a.ui.intersect(b, this, this.options.tolerance),
                        h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                    h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function () {
                        return a.data(this, "ui-droppable").options.scope === e
                    }), f.length && (d = a.data(f[0], "ui-droppable"), d.greedyChild = "isover" === h)), d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c)))
                }
            })
        },
        dragStop: function (b, c) {
            b.element.parentsUntil("body").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
        }
    }
}(jQuery), jQuery.effects || function (a, b) {
    var c = "ui-effects-";
    a.effects = {
        effect: {}
    },
    function (a, b) {
        function c(a, b, c) {
            var d = l[b.type] || {};
            return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a)
        }

        function d(b) {
            var c = j(),
                d = c._rgba = [];
            return b = b.toLowerCase(), o(i, function (a, e) {
                var f, g = e.re.exec(b),
                    h = g && e.parse(g),
                    i = e.space || "rgba";
                return h ? (f = c[i](h), c[k[i].cache] = f[k[i].cache], d = c._rgba = f._rgba, !1) : void 0
            }), d.length ? ("0,0,0,0" === d.join() && a.extend(d, f.transparent), c) : f[b]
        }

        function e(a, b, c) {
            return c = (c + 1) % 1, 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
        }
        var f, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            h = /^([\-+])=\s*(\d+\.?\d*)/,
            i = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (a) {
                    return [a[1], a[2], a[3], a[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (a) {
                    return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function (a) {
                    return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function (a) {
                    return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (a) {
                    return [a[1], a[2] / 100, a[3] / 100, a[4]]
                }
            }],
            j = a.Color = function (b, c, d, e) {
                return new a.Color.fn.parse(b, c, d, e)
            }, k = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            }, l = {
                "byte": {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            }, m = j.support = {}, n = a("<p>")[0],
            o = a.each;
        n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, o(k, function (a, b) {
            b.cache = "_" + a, b.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }), j.fn = a.extend(j.prototype, {
            parse: function (e, g, h, i) {
                if (e === b) return this._rgba = [null, null, null, null], this;
                (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
                var l = this,
                    m = a.type(e),
                    n = this._rgba = [];
                return g !== b && (e = [e, g, h, i], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function (a, b) {
                    n[b.idx] = c(e[b.idx], b)
                }), this) : "object" === m ? (e instanceof j ? o(k, function (a, b) {
                    e[b.cache] && (l[b.cache] = e[b.cache].slice())
                }) : o(k, function (b, d) {
                    var f = d.cache;
                    o(d.props, function (a, b) {
                        if (!l[f] && d.to) {
                            if ("alpha" === a || null == e[a]) return;
                            l[f] = d.to(l._rgba)
                        }
                        l[f][b.idx] = c(e[a], b, !0)
                    }), l[f] && a.inArray(null, l[f].slice(0, 3)) < 0 && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])))
                }), this) : void 0
            },
            is: function (a) {
                var b = j(a),
                    c = !0,
                    d = this;
                return o(k, function (a, e) {
                    var f, g = b[e.cache];
                    return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], o(e.props, function (a, b) {
                        return null != g[b.idx] ? c = g[b.idx] === f[b.idx] : void 0
                    })), c
                }), c
            },
            _space: function () {
                var a = [],
                    b = this;
                return o(k, function (c, d) {
                    b[d.cache] && a.push(c)
                }), a.pop()
            },
            transition: function (a, b) {
                var d = j(a),
                    e = d._space(),
                    f = k[e],
                    g = 0 === this.alpha() ? j("transparent") : this,
                    h = g[f.cache] || f.to(g._rgba),
                    i = h.slice();
                return d = d[f.cache], o(f.props, function (a, e) {
                    var f = e.idx,
                        g = h[f],
                        j = d[f],
                        k = l[e.type] || {};
                    null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = c((j - g) * b + g, e)))
                }), this[e](i)
            },
            blend: function (b) {
                if (1 === this._rgba[3]) return this;
                var c = this._rgba.slice(),
                    d = c.pop(),
                    e = j(b)._rgba;
                return j(a.map(c, function (a, b) {
                    return (1 - d) * e[b] + d * a
                }))
            },
            toRgbaString: function () {
                var b = "rgba(",
                    c = a.map(this._rgba, function (a, b) {
                        return null == a ? b > 2 ? 1 : 0 : a
                    });
                return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")"
            },
            toHslaString: function () {
                var b = "hsla(",
                    c = a.map(this.hsla(), function (a, b) {
                        return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
                    });
                return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")"
            },
            toHexString: function (b) {
                var c = this._rgba.slice(),
                    d = c.pop();
                return b && c.push(~~(255 * d)), "#" + a.map(c, function (a) {
                    return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
                }).join("")
            },
            toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), j.fn.parse.prototype = j.fn, k.hsla.to = function (a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
            var b, c, d = a[0] / 255,
                e = a[1] / 255,
                f = a[2] / 255,
                g = a[3],
                h = Math.max(d, e, f),
                i = Math.min(d, e, f),
                j = h - i,
                k = h + i,
                l = .5 * k;
            return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
        }, k.hsla.from = function (a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
            var b = a[0] / 360,
                c = a[1],
                d = a[2],
                f = a[3],
                g = .5 >= d ? d * (1 + c) : d + c - d * c,
                h = 2 * d - g;
            return [Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f]
        }, o(k, function (d, e) {
            var f = e.props,
                g = e.cache,
                i = e.to,
                k = e.from;
            j.fn[d] = function (d) {
                if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice();
                var e, h = a.type(d),
                    l = "array" === h || "object" === h ? d : arguments,
                    m = this[g].slice();
                return o(f, function (a, b) {
                    var d = l["object" === h ? a : b.idx];
                    null == d && (d = m[b.idx]), m[b.idx] = c(d, b)
                }), k ? (e = j(k(m)), e[g] = m, e) : j(m)
            }, o(f, function (b, c) {
                j.fn[b] || (j.fn[b] = function (e) {
                    var f, g = a.type(e),
                        i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d,
                        j = this[i](),
                        k = j[c.idx];
                    return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[c.idx] = e, this[i](j)))
                })
            })
        }), j.hook = function (b) {
            var c = b.split(" ");
            o(c, function (b, c) {
                a.cssHooks[c] = {
                    set: function (b, e) {
                        var f, g, h = "";
                        if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                            if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
                                for (g = "backgroundColor" === c ? b.parentNode : b;
                                    ("" === h || "transparent" === h) && g && g.style;) try {
                                    h = a.css(g, "backgroundColor"), g = g.parentNode
                                } catch (i) {}
                                e = e.blend(h && "transparent" !== h ? h : "_default")
                            }
                            e = e.toRgbaString()
                        }
                        try {
                            b.style[c] = e
                        } catch (i) {}
                    }
                }, a.fx.step[c] = function (b) {
                    b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
                }
            })
        }, j.hook(g), a.cssHooks.borderColor = {
            expand: function (a) {
                var b = {};
                return o(["Top", "Right", "Bottom", "Left"], function (c, d) {
                    b["border" + d + "Color"] = a
                }), b
            }
        }, f = a.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery),
    function () {
        function c(b) {
            var c, d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle,
                f = {};
            if (e && e.length && e[0] && e[e[0]])
                for (d = e.length; d--;) c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]);
            else
                for (c in e) "string" == typeof e[c] && (f[c] = e[c]);
            return f
        }

        function d(b, c) {
            var d, e, g = {};
            for (d in c) e = c[d], b[d] !== e && (f[d] || (a.fx.step[d] || !isNaN(parseFloat(e))) && (g[d] = e));
            return g
        }
        var e = ["add", "remove", "toggle"],
            f = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (b, c) {
            a.fx.step[c] = function (a) {
                ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (jQuery.style(a.elem, c, a.end), a.setAttr = !0)
            }
        }), a.fn.addBack || (a.fn.addBack = function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }), a.effects.animateClass = function (b, f, g, h) {
            var i = a.speed(f, g, h);
            return this.queue(function () {
                var f, g = a(this),
                    h = g.attr("class") || "",
                    j = i.children ? g.find("*").addBack() : g;
                j = j.map(function () {
                    var b = a(this);
                    return {
                        el: b,
                        start: c(this)
                    }
                }), f = function () {
                    a.each(e, function (a, c) {
                        b[c] && g[c + "Class"](b[c])
                    })
                }, f(), j = j.map(function () {
                    return this.end = c(this.el[0]), this.diff = d(this.start, this.end), this
                }), g.attr("class", h), j = j.map(function () {
                    var b = this,
                        c = a.Deferred(),
                        d = a.extend({}, i, {
                            queue: !1,
                            complete: function () {
                                c.resolve(b)
                            }
                        });
                    return this.el.animate(this.diff, d), c.promise()
                }), a.when.apply(a, j.get()).done(function () {
                    f(), a.each(arguments, function () {
                        var b = this.el;
                        a.each(this.diff, function (a) {
                            b.css(a, "")
                        })
                    }), i.complete.call(g[0])
                })
            })
        }, a.fn.extend({
            _addClass: a.fn.addClass,
            addClass: function (b, c, d, e) {
                return c ? a.effects.animateClass.call(this, {
                    add: b
                }, c, d, e) : this._addClass(b)
            },
            _removeClass: a.fn.removeClass,
            removeClass: function (b, c, d, e) {
                return arguments.length > 1 ? a.effects.animateClass.call(this, {
                    remove: b
                }, c, d, e) : this._removeClass.apply(this, arguments)
            },
            _toggleClass: a.fn.toggleClass,
            toggleClass: function (c, d, e, f, g) {
                return "boolean" == typeof d || d === b ? e ? a.effects.animateClass.call(this, d ? {
                    add: c
                } : {
                    remove: c
                }, e, f, g) : this._toggleClass(c, d) : a.effects.animateClass.call(this, {
                    toggle: c
                }, d, e, f)
            },
            switchClass: function (b, c, d, e, f) {
                return a.effects.animateClass.call(this, {
                    add: c,
                    remove: b
                }, d, e, f)
            }
        })
    }(),
    function () {
        function d(b, c, d, e) {
            return a.isPlainObject(b) && (c = b, b = b.effect), b = {
                effect: b
            }, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
        }

        function e(b) {
            return !b || "number" == typeof b || a.fx.speeds[b] ? !0 : "string" == typeof b && !a.effects.effect[b]
        }
        a.extend(a.effects, {
            version: "1.10.1",
            save: function (a, b) {
                for (var d = 0; d < b.length; d++) null !== b[d] && a.data(c + b[d], a[0].style[b[d]])
            },
            restore: function (a, d) {
                var e, f;
                for (f = 0; f < d.length; f++) null !== d[f] && (e = a.data(c + d[f]), e === b && (e = ""), a.css(d[f], e))
            },
            setMode: function (a, b) {
                return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
            },
            getBaseline: function (a, b) {
                var c, d;
                switch (a[0]) {
                case "top":
                    c = 0;
                    break;
                case "middle":
                    c = .5;
                    break;
                case "bottom":
                    c = 1;
                    break;
                default:
                    c = a[0] / b.height
                }
                switch (a[1]) {
                case "left":
                    d = 0;
                    break;
                case "center":
                    d = .5;
                    break;
                case "right":
                    d = 1;
                    break;
                default:
                    d = a[1] / b.width
                }
                return {
                    x: d,
                    y: c
                }
            },
            createWrapper: function (b) {
                if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                var c = {
                    width: b.outerWidth(!0),
                    height: b.outerHeight(!0),
                    "float": b.css("float")
                }, d = a("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    e = {
                        width: b.width(),
                        height: b.height()
                    }, f = document.activeElement;
                try {
                    f.id
                } catch (g) {
                    f = document.body
                }
                return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), "static" === b.css("position") ? (d.css({
                    position: "relative"
                }), b.css({
                    position: "relative"
                })) : (a.extend(c, {
                    position: b.css("position"),
                    zIndex: b.css("z-index")
                }), a.each(["top", "left", "bottom", "right"], function (a, d) {
                    c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                }), b.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), b.css(e), d.css(c).show()
            },
            removeWrapper: function (b) {
                var c = document.activeElement;
                return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), b
            },
            setTransition: function (b, c, d, e) {
                return e = e || {}, a.each(c, function (a, c) {
                    var f = b.cssUnit(c);
                    f[0] > 0 && (e[c] = f[0] * d + f[1])
                }), e
            }
        }), a.fn.extend({
            effect: function () {
                function b(b) {
                    function d() {
                        a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b()
                    }
                    var e = a(this),
                        f = c.complete,
                        h = c.mode;
                    (e.is(":hidden") ? "hide" === h : "show" === h) ? d() : g.call(e[0], c, d)
                }
                var c = d.apply(this, arguments),
                    e = c.mode,
                    f = c.queue,
                    g = a.effects.effect[c.effect];
                return a.fx.off || !g ? e ? this[e](c.duration, c.complete) : this.each(function () {
                    c.complete && c.complete.call(this)
                }) : f === !1 ? this.each(b) : this.queue(f || "fx", b)
            },
            _show: a.fn.show,
            show: function (a) {
                if (e(a)) return this._show.apply(this, arguments);
                var b = d.apply(this, arguments);
                return b.mode = "show", this.effect.call(this, b)
            },
            _hide: a.fn.hide,
            hide: function (a) {
                if (e(a)) return this._hide.apply(this, arguments);
                var b = d.apply(this, arguments);
                return b.mode = "hide", this.effect.call(this, b)
            },
            __toggle: a.fn.toggle,
            toggle: function (b) {
                if (e(b) || "boolean" == typeof b || a.isFunction(b)) return this.__toggle.apply(this, arguments);
                var c = d.apply(this, arguments);
                return c.mode = "toggle", this.effect.call(this, c)
            },
            cssUnit: function (b) {
                var c = this.css(b),
                    d = [];
                return a.each(["em", "px", "%", "pt"], function (a, b) {
                    c.indexOf(b) > 0 && (d = [parseFloat(c), b])
                }), d
            }
        })
    }(),
    function () {
        var b = {};
        a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (a, c) {
            b[c] = function (b) {
                return Math.pow(b, a + 2)
            }
        }), a.extend(b, {
            Sine: function (a) {
                return 1 - Math.cos(a * Math.PI / 2)
            },
            Circ: function (a) {
                return 1 - Math.sqrt(1 - a * a)
            },
            Elastic: function (a) {
                return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
            },
            Back: function (a) {
                return a * a * (3 * a - 2)
            },
            Bounce: function (a) {
                for (var b, c = 4; a < ((b = Math.pow(2, --c)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
            }
        }), a.each(b, function (b, c) {
            a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function (a) {
                return 1 - c(1 - a)
            }, a.easing["easeInOut" + b] = function (a) {
                return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
            }
        })
    }()
}(jQuery),
function (a) {
    var b = /up|down|vertical/,
        c = /up|left|vertical|horizontal/;
    a.effects.effect.blind = function (d, e) {
        var f, g, h, i = a(this),
            j = ["position", "top", "bottom", "left", "right", "height", "width"],
            k = a.effects.setMode(i, d.mode || "hide"),
            l = d.direction || "up",
            m = b.test(l),
            n = m ? "height" : "width",
            o = m ? "top" : "left",
            p = c.test(l),
            q = {}, r = "show" === k;
        i.parent().is(".ui-effects-wrapper") ? a.effects.save(i.parent(), j) : a.effects.save(i, j), i.show(), f = a.effects.createWrapper(i).css({
            overflow: "hidden"
        }), g = f[n](), h = parseFloat(f.css(o)) || 0, q[n] = r ? g : 0, p || (i.css(m ? "bottom" : "right", 0).css(m ? "top" : "left", "auto").css({
            position: "absolute"
        }), q[o] = r ? h : g + h), r && (f.css(n, 0), p || f.css(o, h + g)), f.animate(q, {
            duration: d.duration,
            easing: d.easing,
            queue: !1,
            complete: function () {
                "hide" === k && i.hide(), a.effects.restore(i, j), a.effects.removeWrapper(i), e()
            }
        })
    }
}(jQuery),
function (a) {
    a.effects.effect.bounce = function (b, c) {
        var d, e, f, g = a(this),
            h = ["position", "top", "bottom", "left", "right", "height", "width"],
            i = a.effects.setMode(g, b.mode || "effect"),
            j = "hide" === i,
            k = "show" === i,
            l = b.direction || "up",
            m = b.distance,
            n = b.times || 5,
            o = 2 * n + (k || j ? 1 : 0),
            p = b.duration / o,
            q = b.easing,
            r = "up" === l || "down" === l ? "top" : "left",
            s = "up" === l || "left" === l,
            t = g.queue(),
            u = t.length;
        for ((k || j) && h.push("opacity"), a.effects.save(g, h), g.show(), a.effects.createWrapper(g), m || (m = g["top" === r ? "outerHeight" : "outerWidth"]() / 3), k && (f = {
            opacity: 1
        }, f[r] = 0, g.css("opacity", 0).css(r, s ? 2 * -m : 2 * m).animate(f, p, q)), j && (m /= Math.pow(2, n - 1)), f = {}, f[r] = 0, d = 0; n > d; d++) e = {}, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q).animate(f, p, q), m = j ? 2 * m : m / 2;
        j && (e = {
            opacity: 0
        }, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q)), g.queue(function () {
            j && g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c()
        }), u > 1 && t.splice.apply(t, [1, 0].concat(t.splice(u, o + 1))), g.dequeue()
    }
}(jQuery),
function (a) {
    a.effects.effect.clip = function (b, c) {
        var d, e, f, g = a(this),
            h = ["position", "top", "bottom", "left", "right", "height", "width"],
            i = a.effects.setMode(g, b.mode || "hide"),
            j = "show" === i,
            k = b.direction || "vertical",
            l = "vertical" === k,
            m = l ? "height" : "width",
            n = l ? "top" : "left",
            o = {};
        a.effects.save(g, h), g.show(), d = a.effects.createWrapper(g).css({
            overflow: "hidden"
        }), e = "IMG" === g[0].tagName ? d : g, f = e[m](), j && (e.css(m, 0), e.css(n, f / 2)), o[m] = j ? f : 0, o[n] = j ? 0 : f / 2, e.animate(o, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function () {
                j || g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c()
            }
        })
    }
}(jQuery),
function (a) {
    a.effects.effect.drop = function (b, c) {
        var d, e = a(this),
            f = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            g = a.effects.setMode(e, b.mode || "hide"),
            h = "show" === g,
            i = b.direction || "left",
            j = "up" === i || "down" === i ? "top" : "left",
            k = "up" === i || "left" === i ? "pos" : "neg",
            l = {
                opacity: h ? 1 : 0
            };
        a.effects.save(e, f), e.show(), a.effects.createWrapper(e), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0) / 2, h && e.css("opacity", 0).css(j, "pos" === k ? -d : d), l[j] = (h ? "pos" === k ? "+=" : "-=" : "pos" === k ? "-=" : "+=") + d, e.animate(l, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function () {
                "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
            }
        })
    }
}(jQuery),
function (a) {
    a.effects.effect.explode = function (b, c) {
        function d() {
            t.push(this), t.length === l * m && e()
        }

        function e() {
            n.css({
                visibility: "visible"
            }), a(t).remove(), p || n.hide(), c()
        }
        var f, g, h, i, j, k, l = b.pieces ? Math.round(Math.sqrt(b.pieces)) : 3,
            m = l,
            n = a(this),
            o = a.effects.setMode(n, b.mode || "hide"),
            p = "show" === o,
            q = n.show().css("visibility", "hidden").offset(),
            r = Math.ceil(n.outerWidth() / m),
            s = Math.ceil(n.outerHeight() / l),
            t = [];
        for (f = 0; l > f; f++)
            for (i = q.top + f * s, k = f - (l - 1) / 2, g = 0; m > g; g++) h = q.left + g * r, j = g - (m - 1) / 2, n.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -g * r,
                top: -f * s
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: r,
                height: s,
                left: h + (p ? j * r : 0),
                top: i + (p ? k * s : 0),
                opacity: p ? 0 : 1
            }).animate({
                left: h + (p ? 0 : j * r),
                top: i + (p ? 0 : k * s),
                opacity: p ? 1 : 0
            }, b.duration || 500, b.easing, d)
    }
}(jQuery),
function (a) {
    a.effects.effect.fade = function (b, c) {
        var d = a(this),
            e = a.effects.setMode(d, b.mode || "toggle");
        d.animate({
            opacity: e
        }, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: c
        })
    }
}(jQuery),
function (a) {
    a.effects.effect.fold = function (b, c) {
        var d, e, f = a(this),
            g = ["position", "top", "bottom", "left", "right", "height", "width"],
            h = a.effects.setMode(f, b.mode || "hide"),
            i = "show" === h,
            j = "hide" === h,
            k = b.size || 15,
            l = /([0-9]+)%/.exec(k),
            m = !! b.horizFirst,
            n = i !== m,
            o = n ? ["width", "height"] : ["height", "width"],
            p = b.duration / 2,
            q = {}, r = {};
        a.effects.save(f, g), f.show(), d = a.effects.createWrapper(f).css({
            overflow: "hidden"
        }), e = n ? [d.width(), d.height()] : [d.height(), d.width()], l && (k = parseInt(l[1], 10) / 100 * e[j ? 0 : 1]), i && d.css(m ? {
            height: 0,
            width: k
        } : {
            height: k,
            width: 0
        }), q[o[0]] = i ? e[0] : k, r[o[1]] = i ? e[1] : 0, d.animate(q, p, b.easing).animate(r, p, b.easing, function () {
            j && f.hide(), a.effects.restore(f, g), a.effects.removeWrapper(f), c()
        })
    }
}(jQuery),
function (a) {
    a.effects.effect.highlight = function (b, c) {
        var d = a(this),
            e = ["backgroundImage", "backgroundColor", "opacity"],
            f = a.effects.setMode(d, b.mode || "show"),
            g = {
                backgroundColor: d.css("backgroundColor")
            };
        "hide" === f && (g.opacity = 0), a.effects.save(d, e), d.show().css({
            backgroundImage: "none",
            backgroundColor: b.color || "#ffff99"
        }).animate(g, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function () {
                "hide" === f && d.hide(), a.effects.restore(d, e), c()
            }
        })
    }
}(jQuery),
function (a) {
    a.effects.effect.pulsate = function (b, c) {
        var d, e = a(this),
            f = a.effects.setMode(e, b.mode || "show"),
            g = "show" === f,
            h = "hide" === f,
            i = g || "hide" === f,
            j = 2 * (b.times || 5) + (i ? 1 : 0),
            k = b.duration / j,
            l = 0,
            m = e.queue(),
            n = m.length;
        for ((g || !e.is(":visible")) && (e.css("opacity", 0).show(), l = 1), d = 1; j > d; d++) e.animate({
            opacity: l
        }, k, b.easing), l = 1 - l;
        e.animate({
            opacity: l
        }, k, b.easing), e.queue(function () {
            h && e.hide(), c()
        }), n > 1 && m.splice.apply(m, [1, 0].concat(m.splice(n, j + 1))), e.dequeue()
    }
}(jQuery),
function (a) {
    a.effects.effect.puff = function (b, c) {
        var d = a(this),
            e = a.effects.setMode(d, b.mode || "hide"),
            f = "hide" === e,
            g = parseInt(b.percent, 10) || 150,
            h = g / 100,
            i = {
                height: d.height(),
                width: d.width(),
                outerHeight: d.outerHeight(),
                outerWidth: d.outerWidth()
            };
        a.extend(b, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: e,
            complete: c,
            percent: f ? g : 100,
            from: f ? i : {
                height: i.height * h,
                width: i.width * h,
                outerHeight: i.outerHeight * h,
                outerWidth: i.outerWidth * h
            }
        }), d.effect(b)
    }, a.effects.effect.scale = function (b, c) {
        var d = a(this),
            e = a.extend(!0, {}, b),
            f = a.effects.setMode(d, b.mode || "effect"),
            g = parseInt(b.percent, 10) || (0 === parseInt(b.percent, 10) ? 0 : "hide" === f ? 0 : 100),
            h = b.direction || "both",
            i = b.origin,
            j = {
                height: d.height(),
                width: d.width(),
                outerHeight: d.outerHeight(),
                outerWidth: d.outerWidth()
            }, k = {
                y: "horizontal" !== h ? g / 100 : 1,
                x: "vertical" !== h ? g / 100 : 1
            };
        e.effect = "size", e.queue = !1, e.complete = c, "effect" !== f && (e.origin = i || ["middle", "center"], e.restore = !0), e.from = b.from || ("show" === f ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : j), e.to = {
            height: j.height * k.y,
            width: j.width * k.x,
            outerHeight: j.outerHeight * k.y,
            outerWidth: j.outerWidth * k.x
        }, e.fade && ("show" === f && (e.from.opacity = 0, e.to.opacity = 1), "hide" === f && (e.from.opacity = 1, e.to.opacity = 0)), d.effect(e)
    }, a.effects.effect.size = function (b, c) {
        var d, e, f, g = a(this),
            h = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            i = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            j = ["width", "height", "overflow"],
            k = ["fontSize"],
            l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            m = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            n = a.effects.setMode(g, b.mode || "effect"),
            o = b.restore || "effect" !== n,
            p = b.scale || "both",
            q = b.origin || ["middle", "center"],
            r = g.css("position"),
            s = o ? h : i,
            t = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        "show" === n && g.show(), d = {
            height: g.height(),
            width: g.width(),
            outerHeight: g.outerHeight(),
            outerWidth: g.outerWidth()
        }, "toggle" === b.mode && "show" === n ? (g.from = b.to || t, g.to = b.from || d) : (g.from = b.from || ("show" === n ? t : d), g.to = b.to || ("hide" === n ? t : d)), f = {
            from: {
                y: g.from.height / d.height,
                x: g.from.width / d.width
            },
            to: {
                y: g.to.height / d.height,
                x: g.to.width / d.width
            }
        }, ("box" === p || "both" === p) && (f.from.y !== f.to.y && (s = s.concat(l), g.from = a.effects.setTransition(g, l, f.from.y, g.from), g.to = a.effects.setTransition(g, l, f.to.y, g.to)), f.from.x !== f.to.x && (s = s.concat(m), g.from = a.effects.setTransition(g, m, f.from.x, g.from), g.to = a.effects.setTransition(g, m, f.to.x, g.to))), ("content" === p || "both" === p) && f.from.y !== f.to.y && (s = s.concat(k).concat(j), g.from = a.effects.setTransition(g, k, f.from.y, g.from), g.to = a.effects.setTransition(g, k, f.to.y, g.to)), a.effects.save(g, s), g.show(), a.effects.createWrapper(g), g.css("overflow", "hidden").css(g.from), q && (e = a.effects.getBaseline(q, d), g.from.top = (d.outerHeight - g.outerHeight()) * e.y, g.from.left = (d.outerWidth - g.outerWidth()) * e.x, g.to.top = (d.outerHeight - g.to.outerHeight) * e.y, g.to.left = (d.outerWidth - g.to.outerWidth) * e.x), g.css(g.from), ("content" === p || "both" === p) && (l = l.concat(["marginTop", "marginBottom"]).concat(k), m = m.concat(["marginLeft", "marginRight"]), j = h.concat(l).concat(m), g.find("*[width]").each(function () {
            var c = a(this),
                d = {
                    height: c.height(),
                    width: c.width(),
                    outerHeight: c.outerHeight(),
                    outerWidth: c.outerWidth()
                };
            o && a.effects.save(c, j), c.from = {
                height: d.height * f.from.y,
                width: d.width * f.from.x,
                outerHeight: d.outerHeight * f.from.y,
                outerWidth: d.outerWidth * f.from.x
            }, c.to = {
                height: d.height * f.to.y,
                width: d.width * f.to.x,
                outerHeight: d.height * f.to.y,
                outerWidth: d.width * f.to.x
            }, f.from.y !== f.to.y && (c.from = a.effects.setTransition(c, l, f.from.y, c.from), c.to = a.effects.setTransition(c, l, f.to.y, c.to)), f.from.x !== f.to.x && (c.from = a.effects.setTransition(c, m, f.from.x, c.from), c.to = a.effects.setTransition(c, m, f.to.x, c.to)), c.css(c.from), c.animate(c.to, b.duration, b.easing, function () {
                o && a.effects.restore(c, j)
            })
        })), g.animate(g.to, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function () {
                0 === g.to.opacity && g.css("opacity", g.from.opacity), "hide" === n && g.hide(), a.effects.restore(g, s), o || ("static" === r ? g.css({
                    position: "relative",
                    top: g.to.top,
                    left: g.to.left
                }) : a.each(["top", "left"], function (a, b) {
                    g.css(b, function (b, c) {
                        var d = parseInt(c, 10),
                            e = a ? g.to.left : g.to.top;
                        return "auto" === c ? e + "px" : d + e + "px"
                    })
                })), a.effects.removeWrapper(g), c()
            }
        })
    }
}(jQuery),
function (a) {
    a.effects.effect.shake = function (b, c) {
        var d, e = a(this),
            f = ["position", "top", "bottom", "left", "right", "height", "width"],
            g = a.effects.setMode(e, b.mode || "effect"),
            h = b.direction || "left",
            i = b.distance || 20,
            j = b.times || 3,
            k = 2 * j + 1,
            l = Math.round(b.duration / k),
            m = "up" === h || "down" === h ? "top" : "left",
            n = "up" === h || "left" === h,
            o = {}, p = {}, q = {}, r = e.queue(),
            s = r.length;
        for (a.effects.save(e, f), e.show(), a.effects.createWrapper(e), o[m] = (n ? "-=" : "+=") + i, p[m] = (n ? "+=" : "-=") + 2 * i, q[m] = (n ? "-=" : "+=") + 2 * i, e.animate(o, l, b.easing), d = 1; j > d; d++) e.animate(p, l, b.easing).animate(q, l, b.easing);
        e.animate(p, l, b.easing).animate(o, l / 2, b.easing).queue(function () {
            "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
        }), s > 1 && r.splice.apply(r, [1, 0].concat(r.splice(s, k + 1))), e.dequeue()
    }
}(jQuery),
function (a) {
    a.effects.effect.slide = function (b, c) {
        var d, e = a(this),
            f = ["position", "top", "bottom", "left", "right", "width", "height"],
            g = a.effects.setMode(e, b.mode || "show"),
            h = "show" === g,
            i = b.direction || "left",
            j = "up" === i || "down" === i ? "top" : "left",
            k = "up" === i || "left" === i,
            l = {};
        a.effects.save(e, f), e.show(), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0), a.effects.createWrapper(e).css({
            overflow: "hidden"
        }), h && e.css(j, k ? isNaN(d) ? "-" + d : -d : d), l[j] = (h ? k ? "+=" : "-=" : k ? "-=" : "+=") + d, e.animate(l, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function () {
                "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
            }
        })
    }
}(jQuery),
function (a) {
    a.effects.effect.transfer = function (b, c) {
        var d = a(this),
            e = a(b.to),
            f = "fixed" === e.css("position"),
            g = a("body"),
            h = f ? g.scrollTop() : 0,
            i = f ? g.scrollLeft() : 0,
            j = e.offset(),
            k = {
                top: j.top - h,
                left: j.left - i,
                height: e.innerHeight(),
                width: e.innerWidth()
            }, l = d.offset(),
            m = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(b.className).css({
                top: l.top - h,
                left: l.left - i,
                height: d.innerHeight(),
                width: d.innerWidth(),
                position: f ? "fixed" : "absolute"
            }).animate(k, b.duration, b.easing, function () {
                m.remove(), c()
            })
    }
}(jQuery),
function (a) {
    a.widget("ui.menu", {
        version: "1.10.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !! this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, a.proxy(function (a) {
                this.options.disabled && a.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function (a) {
                    a.preventDefault()
                },
                "click .ui-state-disabled > a": function (a) {
                    a.preventDefault()
                },
                "click .ui-menu-item:has(a)": function (b) {
                    var c = a(b.target).closest(".ui-menu-item");
                    !this.mouseHandled && c.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(b), c.has(".ui-menu").length ? this.expand(b) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function (b) {
                    var c = a(b.currentTarget);
                    c.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function (a, b) {
                    var c = this.active || this.element.children(".ui-menu-item").eq(0);
                    b || this.focus(a, c)
                },
                blur: function (b) {
                    this._delay(function () {
                        a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (b) {
                    a(b.target).closest(".ui-menu").length || this.collapseAll(b), this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var b = a(this);
                b.data("ui-menu-submenu-carat") && b.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (b) {
            function c(a) {
                return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var d, e, f, g, h, i = !0;
            switch (b.keyCode) {
            case a.ui.keyCode.PAGE_UP:
                this.previousPage(b);
                break;
            case a.ui.keyCode.PAGE_DOWN:
                this.nextPage(b);
                break;
            case a.ui.keyCode.HOME:
                this._move("first", "first", b);
                break;
            case a.ui.keyCode.END:
                this._move("last", "last", b);
                break;
            case a.ui.keyCode.UP:
                this.previous(b);
                break;
            case a.ui.keyCode.DOWN:
                this.next(b);
                break;
            case a.ui.keyCode.LEFT:
                this.collapse(b);
                break;
            case a.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                break;
            case a.ui.keyCode.ENTER:
            case a.ui.keyCode.SPACE:
                this._activate(b);
                break;
            case a.ui.keyCode.ESCAPE:
                this.collapse(b);
                break;
            default:
                i = !1, e = this.previousFilter || "", f = String.fromCharCode(b.keyCode), g = !1, clearTimeout(this.filterTimer), f === e ? g = !0 : f = e + f, h = new RegExp("^" + c(f), "i"), d = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return h.test(a(this).children("a").text())
                }), d = g && -1 !== d.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : d, d.length || (f = String.fromCharCode(b.keyCode), h = new RegExp("^" + c(f), "i"), d = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return h.test(a(this).children("a").text())
                })), d.length ? (this.focus(b, d), d.length > 1 ? (this.previousFilter = f, this.filterTimer = this._delay(function () {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            i && b.preventDefault()
        },
        _activate: function (a) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(a) : this.select(a))
        },
        refresh: function () {
            var b, c = this.options.icons.submenu,
                d = this.element.find(this.options.menus);
            d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var b = a(this),
                    d = b.prev("a"),
                    e = a("<span>").addClass("ui-menu-icon ui-icon " + c).data("ui-menu-submenu-carat", !0);
                d.attr("aria-haspopup", "true").prepend(e), b.attr("aria-labelledby", d.attr("id"))
            }), b = d.add(this.element), b.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), b.children(":not(.ui-menu-item)").each(function () {
                var b = a(this);
                /[^\-\u2014\u2013\s]/.test(b.text()) || b.addClass("ui-widget-content ui-menu-divider")
            }), b.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function (a, b) {
            "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu), this._super(a, b)
        },
        focus: function (a, b) {
            var c, d;
            this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), d = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), c = b.children(".ui-menu"), c.length && /^mouse/.test(a.type) && this._startOpening(c), this.activeMenu = b.parent(), this._trigger("focus", a, {
                item: b
            })
        },
        _scrollIntoView: function (b) {
            var c, d, e, f, g, h;
            this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.height(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h))
        },
        blur: function (a, b) {
            b || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {
                item: this.active
            }))
        },
        _startOpening: function (a) {
            clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(a)
            }, this.delay))
        },
        _open: function (b) {
            var c = a.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
        },
        collapseAll: function (b, c) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
                d.length || (d = this.element), this._close(d), this.blur(b), this.activeMenu = d
            }, this.delay)
        },
        _close: function (a) {
            a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function (a) {
            var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            b && b.length && (this._close(), this.focus(a, b))
        },
        expand: function (a) {
            var b = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            b && b.length && (this._open(b.parent()), this._delay(function () {
                this.focus(a, b)
            }))
        },
        next: function (a) {
            this._move("next", "first", a)
        },
        previous: function (a) {
            this._move("prev", "last", a)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (a, b, c) {
            var d;
            this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.children(".ui-menu-item")[b]()), this.focus(c, d)
        },
        nextPage: function (b) {
            var c, d, e;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return c = a(this), c.offset().top - d - e < 0
            }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), void 0) : (this.next(b), void 0)
        },
        previousPage: function (b) {
            var c, d, e;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return c = a(this), c.offset().top - d + e > 0
            }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item").first())), void 0) : (this.next(b), void 0)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (b) {
            this.active = this.active || a(b.target).closest(".ui-menu-item");
            var c = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c)
        }
    })
}(jQuery),
function (a, b) {
    a.widget("ui.progressbar", {
        version: "1.10.1",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function () {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function (a) {
            return a === b ? this.options.value : (this.options.value = this._constrainedValue(a), this._refreshValue(), void 0)
        },
        _constrainedValue: function (a) {
            return a === b && (a = this.options.value), this.indeterminate = a === !1, "number" != typeof a && (a = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, a))
        },
        _setOptions: function (a) {
            var b = a.value;
            delete a.value, this._super(a), this.options.value = this._constrainedValue(b), this._refreshValue()
        },
        _setOption: function (a, b) {
            "max" === a && (b = Math.max(this.min, b)), this._super(a, b)
        },
        _percentage: function () {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function () {
            var b = this.options.value,
                c = this._percentage();
            this.valueDiv.toggle(this.indeterminate || b > this.min).toggleClass("ui-corner-right", b === this.options.max).width(c.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": b
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== b && (this.oldValue = b, this._trigger("change")), b === this.options.max && this._trigger("complete")
        }
    })
}(jQuery),
function (a) {
    function b(a) {
        return parseInt(a, 10) || 0
    }

    function c(a) {
        return !isNaN(parseInt(a, 10))
    }
    a.widget("ui.resizable", a.ui.mouse, {
        version: "1.10.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function () {
            var b, c, d, e, f, g = this,
                h = this.options;
            if (this.element.addClass("ui-resizable"), a.extend(this, {
                _aspectRatio: !! h.aspectRatio,
                aspectRatio: h.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = h.handles || (a(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), b = this.handles.split(","), this.handles = {}, c = 0; c < b.length; c++) d = a.trim(b[c]), f = "ui-resizable-" + d, e = a("<div class='ui-resizable-handle " + f + "'></div>"), e.css({
                    zIndex: h.zIndex
                }), "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, this.element.append(e);
            this._renderAxis = function (b) {
                var c, d, e, f;
                b = b || this.element;
                for (c in this.handles) this.handles[c].constructor === String && (this.handles[c] = a(this.handles[c], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (d = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(e, f), this._proportionallyResize()), a(this.handles[c]).length
            }, this._renderAxis(this.element), this._handles = a(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                g.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), g.axis = e && e[1] ? e[1] : "se")
            }), h.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                h.disabled || (a(this).removeClass("ui-resizable-autohide"), g._handles.show())
            }).mouseleave(function () {
                h.disabled || g.resizing || (a(this).addClass("ui-resizable-autohide"), g._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var b, c = function (b) {
                    a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
            return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
                position: b.css("position"),
                width: b.outerWidth(),
                height: b.outerHeight(),
                top: b.css("top"),
                left: b.css("left")
            }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this
        },
        _mouseCapture: function (b) {
            var c, d, e = !1;
            for (c in this.handles) d = a(this.handles[c])[0], (d === b.target || a.contains(d, b.target)) && (e = !0);
            return !this.options.disabled && e
        },
        _mouseStart: function (c) {
            var d, e, f, g = this.options,
                h = this.element.position(),
                i = this.element;
            return this.resizing = !0, /absolute/.test(i.css("position")) ? i.css({
                position: "absolute",
                top: i.css("top"),
                left: i.css("left")
            }) : i.is(".ui-draggable") && i.css({
                position: "absolute",
                top: h.top,
                left: h.left
            }), this._renderProxy(), d = b(this.helper.css("left")), e = b(this.helper.css("top")), g.containment && (d += a(g.containment).scrollLeft() || 0, e += a(g.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: d,
                top: e
            }, this.size = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            } : {
                width: i.width(),
                height: i.height()
            }, this.originalSize = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            } : {
                width: i.width(),
                height: i.height()
            }, this.originalPosition = {
                left: d,
                top: e
            }, this.sizeDiff = {
                width: i.outerWidth() - i.width(),
                height: i.outerHeight() - i.height()
            }, this.originalMousePosition = {
                left: c.pageX,
                top: c.pageY
            }, this.aspectRatio = "number" == typeof g.aspectRatio ? g.aspectRatio : this.originalSize.width / this.originalSize.height || 1, f = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === f ? this.axis + "-resize" : f), i.addClass("ui-resizable-resizing"), this._propagate("start", c), !0
        },
        _mouseDrag: function (b) {
            var c, d = this.helper,
                e = {}, f = this.originalMousePosition,
                g = this.axis,
                h = this.position.top,
                i = this.position.left,
                j = this.size.width,
                k = this.size.height,
                l = b.pageX - f.left || 0,
                m = b.pageY - f.top || 0,
                n = this._change[g];
            return n ? (c = n.apply(this, [b, l, m]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), this.position.top !== h && (e.top = this.position.top + "px"), this.position.left !== i && (e.left = this.position.left + "px"), this.size.width !== j && (e.width = this.size.width + "px"), this.size.height !== k && (e.height = this.size.height + "px"), d.css(e), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(e) || this._trigger("resize", b, this.ui()), !1) : !1
        },
        _mouseStop: function (b) {
            this.resizing = !1;
            var c, d, e, f, g, h, i, j = this.options,
                k = this;
            return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && a.ui.hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, g = {
                width: k.helper.width() - f,
                height: k.helper.height() - e
            }, h = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null, i = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null, j.animate || this.element.css(a.extend(g, {
                top: i,
                left: h
            })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (a) {
            var b, d, e, f, g, h = this.options;
            g = {
                minWidth: c(h.minWidth) ? h.minWidth : 0,
                maxWidth: c(h.maxWidth) ? h.maxWidth : 1 / 0,
                minHeight: c(h.minHeight) ? h.minHeight : 0,
                maxHeight: c(h.maxHeight) ? h.maxHeight : 1 / 0
            }, (this._aspectRatio || a) && (b = g.minHeight * this.aspectRatio, e = g.minWidth / this.aspectRatio, d = g.maxHeight * this.aspectRatio, f = g.maxWidth / this.aspectRatio, b > g.minWidth && (g.minWidth = b), e > g.minHeight && (g.minHeight = e), d < g.maxWidth && (g.maxWidth = d), f < g.maxHeight && (g.maxHeight = f)), this._vBoundaries = g
        },
        _updateCache: function (a) {
            this.offset = this.helper.offset(), c(a.left) && (this.position.left = a.left), c(a.top) && (this.position.top = a.top), c(a.height) && (this.size.height = a.height), c(a.width) && (this.size.width = a.width)
        },
        _updateRatio: function (a) {
            var b = this.position,
                d = this.size,
                e = this.axis;
            return c(a.height) ? a.width = a.height * this.aspectRatio : c(a.width) && (a.height = a.width / this.aspectRatio), "sw" === e && (a.left = b.left + (d.width - a.width), a.top = null), "nw" === e && (a.top = b.top + (d.height - a.height), a.left = b.left + (d.width - a.width)), a
        },
        _respectSize: function (a) {
            var b = this._vBoundaries,
                d = this.axis,
                e = c(a.width) && b.maxWidth && b.maxWidth < a.width,
                f = c(a.height) && b.maxHeight && b.maxHeight < a.height,
                g = c(a.width) && b.minWidth && b.minWidth > a.width,
                h = c(a.height) && b.minHeight && b.minHeight > a.height,
                i = this.originalPosition.left + this.originalSize.width,
                j = this.position.top + this.size.height,
                k = /sw|nw|w/.test(d),
                l = /nw|ne|n/.test(d);
            return g && (a.width = b.minWidth), h && (a.height = b.minHeight), e && (a.width = b.maxWidth), f && (a.height = b.maxHeight), g && k && (a.left = i - b.minWidth), e && k && (a.left = i - b.maxWidth), h && l && (a.top = j - b.minHeight), f && l && (a.top = j - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) {
                var a, b, c, d, e, f = this.helper || this.element;
                for (a = 0; a < this._proportionallyResizeElements.length; a++) {
                    if (e = this._proportionallyResizeElements[a], !this.borderDif)
                        for (this.borderDif = [], c = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], d = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")], b = 0; b < c.length; b++) this.borderDif[b] = (parseInt(c[b], 10) || 0) + (parseInt(d[b], 10) || 0);
                    e.css({
                        height: f.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: f.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function () {
            var b = this.element,
                c = this.options;
            this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++c.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (a, b) {
                return {
                    width: this.originalSize.width + b
                }
            },
            w: function (a, b) {
                var c = this.originalSize,
                    d = this.originalPosition;
                return {
                    left: d.left + b,
                    width: c.width - b
                }
            },
            n: function (a, b, c) {
                var d = this.originalSize,
                    e = this.originalPosition;
                return {
                    top: e.top + c,
                    height: d.height - c
                }
            },
            s: function (a, b, c) {
                return {
                    height: this.originalSize.height + c
                }
            },
            se: function (b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
            },
            sw: function (b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
            },
            ne: function (b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
            },
            nw: function (b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
            }
        },
        _propagate: function (b, c) {
            a.ui.plugin.call(this, b, [c, this.ui()]), "resize" !== b && this._trigger(b, c, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), a.ui.plugin.add("resizable", "animate", {
        stop: function (b) {
            var c = a(this).data("ui-resizable"),
                d = c.options,
                e = c._proportionallyResizeElements,
                f = e.length && /textarea/i.test(e[0].nodeName),
                g = f && a.ui.hasScroll(e[0], "left") ? 0 : c.sizeDiff.height,
                h = f ? 0 : c.sizeDiff.width,
                i = {
                    width: c.size.width - h,
                    height: c.size.height - g
                }, j = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null,
                k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
            c.element.animate(a.extend(i, k && j ? {
                top: k,
                left: j
            } : {}), {
                duration: d.animateDuration,
                easing: d.animateEasing,
                step: function () {
                    var d = {
                        width: parseInt(c.element.css("width"), 10),
                        height: parseInt(c.element.css("height"), 10),
                        top: parseInt(c.element.css("top"), 10),
                        left: parseInt(c.element.css("left"), 10)
                    };
                    e && e.length && a(e[0]).css({
                        width: d.width,
                        height: d.height
                    }), c._updateCache(d), c._propagate("resize", b)
                }
            })
        }
    }), a.ui.plugin.add("resizable", "containment", {
        start: function () {
            var c, d, e, f, g, h, i, j = a(this).data("ui-resizable"),
                k = j.options,
                l = j.element,
                m = k.containment,
                n = m instanceof a ? m.get(0) : /parent/.test(m) ? l.parent().get(0) : m;
            n && (j.containerElement = a(n), /document/.test(m) || m === document ? (j.containerOffset = {
                left: 0,
                top: 0
            }, j.containerPosition = {
                left: 0,
                top: 0
            }, j.parentData = {
                element: a(document),
                left: 0,
                top: 0,
                width: a(document).width(),
                height: a(document).height() || document.body.parentNode.scrollHeight
            }) : (c = a(n), d = [], a(["Top", "Right", "Left", "Bottom"]).each(function (a, e) {
                d[a] = b(c.css("padding" + e))
            }), j.containerOffset = c.offset(), j.containerPosition = c.position(), j.containerSize = {
                height: c.innerHeight() - d[3],
                width: c.innerWidth() - d[1]
            }, e = j.containerOffset, f = j.containerSize.height, g = j.containerSize.width, h = a.ui.hasScroll(n, "left") ? n.scrollWidth : g, i = a.ui.hasScroll(n) ? n.scrollHeight : f, j.parentData = {
                element: n,
                left: e.left,
                top: e.top,
                width: h,
                height: i
            }))
        },
        resize: function (b) {
            var c, d, e, f, g = a(this).data("ui-resizable"),
                h = g.options,
                i = g.containerOffset,
                j = g.position,
                k = g._aspectRatio || b.shiftKey,
                l = {
                    top: 0,
                    left: 0
                }, m = g.containerElement;
            m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), k && (g.size.height = g.size.width / g.aspectRatio), g.position.left = h.helper ? i.left : 0), j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), k && (g.size.width = g.size.height * g.aspectRatio), g.position.top = g._helper ? i.top : 0), g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top, c = Math.abs((g._helper ? g.offset.left - l.left : g.offset.left - l.left) + g.sizeDiff.width), d = Math.abs((g._helper ? g.offset.top - l.top : g.offset.top - i.top) + g.sizeDiff.height), e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), e && f && (c -= g.parentData.left), c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, k && (g.size.height = g.size.width / g.aspectRatio)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, k && (g.size.width = g.size.height * g.aspectRatio))
        },
        stop: function () {
            var b = a(this).data("ui-resizable"),
                c = b.options,
                d = b.containerOffset,
                e = b.containerPosition,
                f = b.containerElement,
                g = a(b.helper),
                h = g.offset(),
                i = g.outerWidth() - b.sizeDiff.width,
                j = g.outerHeight() - b.sizeDiff.height;
            b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: j
            }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: j
            })
        }
    }), a.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var b = a(this).data("ui-resizable"),
                c = b.options,
                d = function (b) {
                    a(b).each(function () {
                        var b = a(this);
                        b.data("ui-resizable-alsoresize", {
                            width: parseInt(b.width(), 10),
                            height: parseInt(b.height(), 10),
                            left: parseInt(b.css("left"), 10),
                            top: parseInt(b.css("top"), 10)
                        })
                    })
                };
            "object" != typeof c.alsoResize || c.alsoResize.parentNode ? d(c.alsoResize) : c.alsoResize.length ? (c.alsoResize = c.alsoResize[0], d(c.alsoResize)) : a.each(c.alsoResize, function (a) {
                d(a)
            })
        },
        resize: function (b, c) {
            var d = a(this).data("ui-resizable"),
                e = d.options,
                f = d.originalSize,
                g = d.originalPosition,
                h = {
                    height: d.size.height - f.height || 0,
                    width: d.size.width - f.width || 0,
                    top: d.position.top - g.top || 0,
                    left: d.position.left - g.left || 0
                }, i = function (b, d) {
                    a(b).each(function () {
                        var b = a(this),
                            e = a(this).data("ui-resizable-alsoresize"),
                            f = {}, g = d && d.length ? d : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        a.each(g, function (a, b) {
                            var c = (e[b] || 0) + (h[b] || 0);
                            c && c >= 0 && (f[b] = c || null)
                        }), b.css(f)
                    })
                };
            "object" != typeof e.alsoResize || e.alsoResize.nodeType ? i(e.alsoResize) : a.each(e.alsoResize, function (a, b) {
                i(a, b)
            })
        },
        stop: function () {
            a(this).removeData("resizable-alsoresize")
        }
    }), a.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var b = a(this).data("ui-resizable"),
                c = b.options,
                d = b.size;
            b.ghost = b.originalElement.clone(), b.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: d.height,
                width: d.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : ""), b.ghost.appendTo(b.helper)
        },
        resize: function () {
            var b = a(this).data("ui-resizable");
            b.ghost && b.ghost.css({
                position: "relative",
                height: b.size.height,
                width: b.size.width
            })
        },
        stop: function () {
            var b = a(this).data("ui-resizable");
            b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
        }
    }), a.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var b = a(this).data("ui-resizable"),
                c = b.options,
                d = b.size,
                e = b.originalSize,
                f = b.originalPosition,
                g = b.axis,
                h = "number" == typeof c.grid ? [c.grid, c.grid] : c.grid,
                i = h[0] || 1,
                j = h[1] || 1,
                k = Math.round((d.width - e.width) / i) * i,
                l = Math.round((d.height - e.height) / j) * j,
                m = e.width + k,
                n = e.height + l,
                o = c.maxWidth && c.maxWidth < m,
                p = c.maxHeight && c.maxHeight < n,
                q = c.minWidth && c.minWidth > m,
                r = c.minHeight && c.minHeight > n;
            c.grid = h, q && (m += i), r && (n += j), o && (m -= i), p && (n -= j), /^(se|s|e)$/.test(g) ? (b.size.width = m, b.size.height = n) : /^(ne)$/.test(g) ? (b.size.width = m, b.size.height = n, b.position.top = f.top - l) : /^(sw)$/.test(g) ? (b.size.width = m, b.size.height = n, b.position.left = f.left - k) : (b.size.width = m, b.size.height = n, b.position.top = f.top - l, b.position.left = f.left - k)
        }
    })
}(jQuery),
function (a) {
    a.widget("ui.selectable", a.ui.mouse, {
        version: "1.10.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function () {
            var b, c = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                b = a(c.options.filter, c.element[0]), b.addClass("ui-selectee"), b.each(function () {
                    var b = a(this),
                        c = b.offset();
                    a.data(this, "selectable-item", {
                        element: this,
                        $element: b,
                        left: c.left,
                        top: c.top,
                        right: c.left + b.outerWidth(),
                        bottom: c.top + b.outerHeight(),
                        startselected: !1,
                        selected: b.hasClass("ui-selected"),
                        selecting: b.hasClass("ui-selecting"),
                        unselecting: b.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = b.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function (b) {
            var c = this,
                d = this.options;
            this.opos = [b.pageX, b.pageY], this.options.disabled || (this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({
                left: b.pageX,
                top: b.pageY,
                width: 0,
                height: 0
            }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var d = a.data(this, "selectable-item");
                d.startselected = !0, b.metaKey || b.ctrlKey || (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {
                    unselecting: d.element
                }))
            }), a(b.target).parents().addBack().each(function () {
                var d, e = a.data(this, "selectable-item");
                return e ? (d = !b.metaKey && !b.ctrlKey || !e.$element.hasClass("ui-selected"), e.$element.removeClass(d ? "ui-unselecting" : "ui-selected").addClass(d ? "ui-selecting" : "ui-unselecting"), e.unselecting = !d, e.selecting = d, e.selected = d, d ? c._trigger("selecting", b, {
                    selecting: e.element
                }) : c._trigger("unselecting", b, {
                    unselecting: e.element
                }), !1) : void 0
            }))
        },
        _mouseDrag: function (b) {
            if (this.dragged = !0, !this.options.disabled) {
                var c, d = this,
                    e = this.options,
                    f = this.opos[0],
                    g = this.opos[1],
                    h = b.pageX,
                    i = b.pageY;
                return f > h && (c = h, h = f, f = c), g > i && (c = i, i = g, g = c), this.helper.css({
                    left: f,
                    top: g,
                    width: h - f,
                    height: i - g
                }), this.selectees.each(function () {
                    var c = a.data(this, "selectable-item"),
                        j = !1;
                    c && c.element !== d.element[0] && ("touch" === e.tolerance ? j = !(c.left > h || c.right < f || c.top > i || c.bottom < g) : "fit" === e.tolerance && (j = c.left > f && c.right < h && c.top > g && c.bottom < i), j ? (c.selected && (c.$element.removeClass("ui-selected"), c.selected = !1), c.unselecting && (c.$element.removeClass("ui-unselecting"), c.unselecting = !1), c.selecting || (c.$element.addClass("ui-selecting"), c.selecting = !0, d._trigger("selecting", b, {
                        selecting: c.element
                    }))) : (c.selecting && ((b.metaKey || b.ctrlKey) && c.startselected ? (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.$element.addClass("ui-selected"), c.selected = !0) : (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.startselected && (c.$element.addClass("ui-unselecting"), c.unselecting = !0), d._trigger("unselecting", b, {
                        unselecting: c.element
                    }))), c.selected && (b.metaKey || b.ctrlKey || c.startselected || (c.$element.removeClass("ui-selected"), c.selected = !1, c.$element.addClass("ui-unselecting"), c.unselecting = !0, d._trigger("unselecting", b, {
                        unselecting: c.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function (b) {
            var c = this;
            return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function () {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {
                    unselected: d.element
                })
            }), a(".ui-selecting", this.element[0]).each(function () {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {
                    selected: d.element
                })
            }), this._trigger("stop", b), this.helper.remove(), !1
        }
    })
}(jQuery),
function (a) {
    var b = 5;
    a.widget("ui.slider", a.ui.mouse, {
        version: "1.10.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var b, c, d = this.options,
                e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                f = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                g = [];
            for (c = d.values && d.values.length || 1, e.length > c && (e.slice(c).remove(), e = e.slice(0, c)), b = e.length; c > b; b++) g.push(f);
            this.handles = e.add(a(g.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (b) {
                a(this).data("ui-slider-handle-index", b)
            })
        },
        _createRange: function () {
            var b = this.options,
                c = "";
            b.range ? (b.range === !0 && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [b.values[0], b.values[0]] : a.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(c + ("min" === b.range || "max" === b.range ? " ui-slider-range-" + b.range : ""))) : this.range = a([])
        },
        _setupEvents: function () {
            var a = this.handles.add(this.range).filter("a");
            this._off(a), this._on(a, this._handleEvents), this._hoverable(a), this._focusable(a)
        },
        _destroy: function () {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function (b) {
            var c, d, e, f, g, h, i, j, k = this,
                l = this.options;
            return l.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), c = {
                x: b.pageX,
                y: b.pageY
            }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, this.handles.each(function (b) {
                var c = Math.abs(d - k.values(b));
                (e > c || e === c && (b === k._lastChangedValue || k.values(b) === l.min)) && (e = c, f = a(this), g = b)
            }), h = this._start(b, g), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = g, f.addClass("ui-state-active").focus(), i = f.offset(), j = !a(b.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = j ? {
                left: 0,
                top: 0
            } : {
                left: b.pageX - i.left - f.width() / 2,
                top: b.pageY - i.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, d), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (a) {
            var b = {
                x: a.pageX,
                y: a.pageY
            }, c = this._normValueFromMouse(b);
            return this._slide(a, this._handleIndex, c), !1
        },
        _mouseStop: function (a) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (a) {
            var b, c, d, e, f;
            return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), 0 > d && (d = 0), "vertical" === this.orientation && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f)
        },
        _start: function (a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c)
        },
        _slide: function (a, b, c) {
            var d, e, f;
            this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === b && c > d || 1 === b && d > c) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
                handle: this.handles[b],
                value: c,
                values: e
            }), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c, !0))) : c !== this.value() && (f = this._trigger("slide", a, {
                handle: this.handles[b],
                value: c
            }), f !== !1 && this.value(c))
        },
        _stop: function (a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c)
        },
        _change: function (a, b) {
            if (!this._keySliding && !this._mouseSliding) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._lastChangedValue = b, this._trigger("change", a, c)
            }
        },
        value: function (a) {
            return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function (b, c) {
            var d, e, f;
            if (arguments.length > 1) return this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), this._change(null, b), void 0;
            if (!arguments.length) return this._values();
            if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value();
            for (d = this.options.values, e = arguments[0], f = 0; f < d.length; f += 1) d[f] = this._trimAlignValue(e[f]), this._change(null, f);
            this._refreshValue()
        },
        _setOption: function (b, c) {
            var d, e = 0;
            switch ("range" === b && this.options.range === !0 && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), a.isArray(this.options.values) && (e = this.options.values.length), a.Widget.prototype._setOption.apply(this, arguments), b) {
            case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0, this._refreshValue(), d = 0; e > d; d += 1) this._change(null, d);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function () {
            var a = this.options.value;
            return a = this._trimAlignValue(a)
        },
        _values: function (a) {
            var b, c, d;
            if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b);
            if (this.options.values && this.options.values.length) {
                for (c = this.options.values.slice(), d = 0; d < c.length; d += 1) c[d] = this._trimAlignValue(c[d]);
                return c
            }
            return []
        },
        _trimAlignValue: function (a) {
            if (a <= this._valueMin()) return this._valueMin();
            if (a >= this._valueMax()) return this._valueMax();
            var b = this.options.step > 0 ? this.options.step : 1,
                c = (a - this._valueMin()) % b,
                d = a - c;
            return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var b, c, d, e, f, g = this.options.range,
                h = this.options,
                i = this,
                j = this._animateOff ? !1 : h.animate,
                k = {};
            this.options.values && this.options.values.length ? this.handles.each(function (d) {
                c = 100 * ((i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin())), k["horizontal" === i.orientation ? "left" : "bottom"] = c + "%", a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), i.options.range === !0 && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                    left: c + "%"
                }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                    width: c - b + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                    bottom: c + "%"
                }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                    height: c - b + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                }))), b = c
            }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? 100 * ((d - e) / (f - e)) : 0, k["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                width: c + "%"
            }, h.animate), "max" === g && "horizontal" === this.orientation && this.range[j ? "animate" : "css"]({
                width: 100 - c + "%"
            }, {
                queue: !1,
                duration: h.animate
            }), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                height: c + "%"
            }, h.animate), "max" === g && "vertical" === this.orientation && this.range[j ? "animate" : "css"]({
                height: 100 - c + "%"
            }, {
                queue: !1,
                duration: h.animate
            }))
        },
        _handleEvents: {
            keydown: function (c) {
                var d, e, f, g, h = a(c.target).data("ui-slider-handle-index");
                switch (c.keyCode) {
                case a.ui.keyCode.HOME:
                case a.ui.keyCode.END:
                case a.ui.keyCode.PAGE_UP:
                case a.ui.keyCode.PAGE_DOWN:
                case a.ui.keyCode.UP:
                case a.ui.keyCode.RIGHT:
                case a.ui.keyCode.DOWN:
                case a.ui.keyCode.LEFT:
                    if (c.preventDefault(), !this._keySliding && (this._keySliding = !0, a(c.target).addClass("ui-state-active"), d = this._start(c, h), d === !1)) return
                }
                switch (g = this.options.step, e = f = this.options.values && this.options.values.length ? this.values(h) : this.value(), c.keyCode) {
                case a.ui.keyCode.HOME:
                    f = this._valueMin();
                    break;
                case a.ui.keyCode.END:
                    f = this._valueMax();
                    break;
                case a.ui.keyCode.PAGE_UP:
                    f = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / b);
                    break;
                case a.ui.keyCode.PAGE_DOWN:
                    f = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / b);
                    break;
                case a.ui.keyCode.UP:
                case a.ui.keyCode.RIGHT:
                    if (e === this._valueMax()) return;
                    f = this._trimAlignValue(e + g);
                    break;
                case a.ui.keyCode.DOWN:
                case a.ui.keyCode.LEFT:
                    if (e === this._valueMin()) return;
                    f = this._trimAlignValue(e - g)
                }
                this._slide(c, h, f)
            },
            click: function (a) {
                a.preventDefault()
            },
            keyup: function (b) {
                var c = a(b.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), a(b.target).removeClass("ui-state-active"))
            }
        }
    })
}(jQuery),
function (a) {
    function b(a, b, c) {
        return a > b && b + c > a
    }
    a.widget("ui.sortable", a.ui.mouse, {
        version: "1.10.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function () {
            var a = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === a.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function (b, c) {
            "disabled" === b ? (this.options[b] = c, this.widget().toggleClass("ui-sortable-disabled", !! c)) : a.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (b, c) {
            var d = null,
                e = !1,
                f = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(b), a(b.target).parents().each(function () {
                return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0
            }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), d ? !this.options.handle || c || (a(this.options.handle, d).find("*").addBack().each(function () {
                this === b.target && (e = !0)
            }), e) ? (this.currentItem = d, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function (b, c, d) {
            var e, f = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, f.cursorAt && this._adjustOffsetFromHelper(f.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), f.containment && this._setContainment(), f.cursor && (a("body").css("cursor") && (this._storedCursor = a("body").css("cursor")), a("body").css("cursor", f.cursor)), f.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", f.opacity)), f.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", f.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)
                for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", b, this._uiHash(this));
            return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !f.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
        },
        _mouseDrag: function (b) {
            var c, d, e, f, g = this.options,
                h = !1;
            for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - a(document).scrollTop() < g.scrollSensitivity ? h = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < g.scrollSensitivity && (h = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed)), b.pageX - a(document).scrollLeft() < g.scrollSensitivity ? h = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < g.scrollSensitivity && (h = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed))), h !== !1 && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), c = this.items.length - 1; c >= 0; c--)
                if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), f && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" === this.options.type ? !a.contains(this.element[0], e) : !0)) {
                    if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
                    this._rearrange(b, d), this._trigger("change", b, this._uiHash());
                    break
                }
            return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (b, c) {
            if (b) {
                if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
                    var d = this,
                        e = this.placeholder.offset();
                    this.reverting = !0, a(this.helper).animate({
                        left: e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function () {
                        d._clear(b)
                    })
                } else this._clear(b, c);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var b = this.containers.length - 1; b >= 0; b--) this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (b) {
            var c = this._getItemsAsjQuery(b && b.connected),
                d = [];
            return b = b || {}, a(c).each(function () {
                var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
                c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
            }), !d.length && b.key && d.push(b.key + "="), d.join("&")
        },
        toArray: function (b) {
            var c = this._getItemsAsjQuery(b && b.connected),
                d = [];
            return b = b || {}, c.each(function () {
                d.push(a(b.item || this).attr(b.attribute || "id") || "")
            }), d
        },
        _intersectsWith: function (a) {
            var b = this.positionAbs.left,
                c = b + this.helperProportions.width,
                d = this.positionAbs.top,
                e = d + this.helperProportions.height,
                f = a.left,
                g = f + a.width,
                h = a.top,
                i = h + a.height,
                j = this.offset.click.top,
                k = this.offset.click.left,
                l = d + j > h && i > d + j && b + k > f && g > b + k;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? l : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i
        },
        _intersectsWithPointer: function (a) {
            var c = "x" === this.options.axis || b(this.positionAbs.top + this.offset.click.top, a.top, a.height),
                d = "y" === this.options.axis || b(this.positionAbs.left + this.offset.click.left, a.left, a.width),
                e = c && d,
                f = this._getDragVerticalDirection(),
                g = this._getDragHorizontalDirection();
            return e ? this.floating ? g && "right" === g || "down" === f ? 2 : 1 : f && ("down" === f ? 2 : 1) : !1
        },
        _intersectsWithSides: function (a) {
            var c = b(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height),
                d = b(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width),
                e = this._getDragVerticalDirection(),
                f = this._getDragHorizontalDirection();
            return this.floating && f ? "right" === f && d || "left" === f && !d : e && ("down" === e && c || "up" === e && !c)
        },
        _getDragVerticalDirection: function () {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== a && (a > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== a && (a > 0 ? "right" : "left")
        },
        refresh: function (a) {
            return this._refreshItems(a), this.refreshPositions(), this
        },
        _connectWith: function () {
            var a = this.options;
            return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
        },
        _getItemsAsjQuery: function (b) {
            var c, d, e, f, g = [],
                h = [],
                i = this._connectWith();
            if (i && b)
                for (c = i.length - 1; c >= 0; c--)
                    for (e = a(i[c]), d = e.length - 1; d >= 0; d--) f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && h.push([a.isFunction(f.options.items) ? f.options.items.call(f.element) : a(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f]);
            for (h.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), c = h.length - 1; c >= 0; c--) h[c][0].each(function () {
                g.push(this)
            });
            return a(g)
        },
        _removeCurrentsFromItems: function () {
            var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = a.grep(this.items, function (a) {
                for (var c = 0; c < b.length; c++)
                    if (b[c] === a.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (b) {
            this.items = [], this.containers = [this];
            var c, d, e, f, g, h, i, j, k = this.items,
                l = [
                    [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                        item: this.currentItem
                    }) : a(this.options.items, this.element), this]
                ],
                m = this._connectWith();
            if (m && this.ready)
                for (c = m.length - 1; c >= 0; c--)
                    for (e = a(m[c]), d = e.length - 1; d >= 0; d--) f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {
                        item: this.currentItem
                    }) : a(f.options.items, f.element), f]), this.containers.push(f));
            for (c = l.length - 1; c >= 0; c--)
                for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++) i = a(h[d]), i.data(this.widgetName + "-item", g), k.push({
                    item: i,
                    instance: g,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function (b) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var c, d, e, f;
            for (c = this.items.length - 1; c >= 0; c--) d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (c = this.containers.length - 1; c >= 0; c--) f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
            return this
        },
        _createPlaceholder: function (b) {
            b = b || this;
            var c, d = b.options;
            d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
                element: function () {
                    var d = a(document.createElement(b.currentItem[0].nodeName)).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                    return c || (d.style.visibility = "hidden"), d
                },
                update: function (a, e) {
                    (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)))
                }
            }), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), d.placeholder.update(b, b.placeholder)
        },
        _contactContainers: function (b) {
            var c, d, e, f, g, h, i, j, k, l = null,
                m = null;
            for (c = this.containers.length - 1; c >= 0; c--)
                if (!a.contains(this.currentItem[0], this.containers[c].element[0]))
                    if (this._intersectsWith(this.containers[c].containerCache)) {
                        if (l && a.contains(this.containers[c].element[0], l.element[0])) continue;
                        l = this.containers[c], m = c
                    } else this.containers[c].containerCache.over && (this.containers[c]._trigger("out", b, this._uiHash(this)), this.containers[c].containerCache.over = 0);
            if (l)
                if (1 === this.containers.length) this.containers[m]._trigger("over", b, this._uiHash(this)), this.containers[m].containerCache.over = 1;
                else {
                    for (e = 1e4, f = null, g = this.containers[m].floating ? "left" : "top", h = this.containers[m].floating ? "width" : "height", i = this.positionAbs[g] + this.offset.click[g], d = this.items.length - 1; d >= 0; d--) a.contains(this.containers[m].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (j = this.items[d].item.offset()[g], k = !1, Math.abs(j - i) > Math.abs(j + this.items[d][h] - i) && (k = !0, j += this.items[d][h]), Math.abs(j - i) < e && (e = Math.abs(j - i), f = this.items[d], this.direction = k ? "up" : "down"));
                    if (!f && !this.options.dropOnEmpty) return;
                    this.currentContainer = this.containers[m], f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[m].element, !0), this._trigger("change", b, this._uiHash()), this.containers[m]._trigger("change", b, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", b, this._uiHash(this)), this.containers[m].containerCache.over = 1
                }
        },
        _createHelper: function (b) {
            var c = this.options,
                d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
            return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), (!d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), d
        },
        _adjustOffsetFromHelper: function (b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var b, c, d, e = this.options;
            "parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (b, c) {
            c || (c = this.position);
            var d = "absolute" === b ? 1 : -1,
                e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                f = /(html|body)/i.test(e[0].tagName);
            return {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
            }
        },
        _generatePosition: function (b) {
            var c, d, e = this.options,
                f = b.pageX,
                g = b.pageY,
                h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(h[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
            }
        },
        _rearrange: function (a, b, c, d) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var e = this.counter;
            this._delay(function () {
                e === this.counter && this.refreshPositions(!d)
            })
        },
        _clear: function (b, c) {
            this.reverting = !1;
            var d, e = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (d in this._storedCSS)("auto" === this._storedCSS[d] || "static" === this._storedCSS[d]) && (this._storedCSS[d] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !c && e.push(function (a) {
                this._trigger("receive", a, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || c || e.push(function (a) {
                this._trigger("update", a, this._uiHash())
            }), this !== this.currentContainer && (c || (e.push(function (a) {
                this._trigger("remove", a, this._uiHash())
            }), e.push(function (a) {
                return function (b) {
                    a._trigger("receive", b, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), e.push(function (a) {
                return function (b) {
                    a._trigger("update", b, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), d = this.containers.length - 1; d >= 0; d--) c || e.push(function (a) {
                return function (b) {
                    a._trigger("deactivate", b, this._uiHash(this))
                }
            }.call(this, this.containers[d])), this.containers[d].containerCache.over && (e.push(function (a) {
                return function (b) {
                    a._trigger("out", b, this._uiHash(this))
                }
            }.call(this, this.containers[d])), this.containers[d].containerCache.over = 0);
            if (this._storedCursor && a("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!c) {
                    for (this._trigger("beforeStop", b, this._uiHash()), d = 0; d < e.length; d++) e[d].call(this, b);
                    this._trigger("stop", b, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (c || this._trigger("beforeStop", b, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !c) {
                for (d = 0; d < e.length; d++) e[d].call(this, b);
                this._trigger("stop", b, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (b) {
            var c = b || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || a([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: b ? b.element : null
            }
        }
    })
}(jQuery),
function (a) {
    function b(a) {
        return function () {
            var b = this.element.val();
            a.apply(this, arguments), this._refresh(), b !== this.element.val() && this._trigger("change")
        }
    }
    a.widget("ui.spinner", {
        version: "1.10.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var b = {}, c = this.element;
            return a.each(["min", "max", "step"], function (a, d) {
                var e = c.attr(d);
                void 0 !== e && e.length && (b[d] = e)
            }), b
        },
        _events: {
            keydown: function (a) {
                this._start(a) && this._keydown(a) && a.preventDefault()
            },
            keyup: "_stop",
            focus: function () {
                this.previous = this.element.val()
            },
            blur: function (a) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._refresh(), this.previous !== this.element.val() && this._trigger("change", a), void 0)
            },
            mousewheel: function (a, b) {
                if (b) {
                    if (!this.spinning && !this._start(a)) return !1;
                    this._spin((b > 0 ? 1 : -1) * this.options.step, a), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(a)
                    }, 100), a.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function (b) {
                function c() {
                    var a = this.element[0] === this.document[0].activeElement;
                    a || (this.element.focus(), this.previous = d, this._delay(function () {
                        this.previous = d
                    }))
                }
                var d;
                d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), b.preventDefault(), c.call(this), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur, c.call(this)
                }), this._start(b) !== !1 && this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function (b) {
                return a(b.currentTarget).hasClass("ui-state-active") ? this._start(b) === !1 ? !1 : (this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b), void 0) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function () {
            var a = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = a.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * a.height()) && a.height() > 0 && a.height(a.height()), this.options.disabled && this.disable()
        },
        _keydown: function (b) {
            var c = this.options,
                d = a.ui.keyCode;
            switch (b.keyCode) {
            case d.UP:
                return this._repeat(null, 1, b), !0;
            case d.DOWN:
                return this._repeat(null, -1, b), !0;
            case d.PAGE_UP:
                return this._repeat(null, c.page, b), !0;
            case d.PAGE_DOWN:
                return this._repeat(null, -c.page, b), !0
            }
            return !1
        },
        _uiSpinnerHtml: function () {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function () {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
        },
        _start: function (a) {
            return this.spinning || this._trigger("start", a) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function (a, b, c) {
            a = a || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, b, c)
            }, a), this._spin(b * this.options.step, c)
        },
        _spin: function (a, b) {
            var c = this.value() || 0;
            this.counter || (this.counter = 1), c = this._adjustValue(c + a * this._increment(this.counter)), this.spinning && this._trigger("spin", b, {
                value: c
            }) === !1 || (this._value(c), this.counter++)
        },
        _increment: function (b) {
            var c = this.options.incremental;
            return c ? a.isFunction(c) ? c(b) : Math.floor(b * b * b / 5e4 - b * b / 500 + 17 * b / 200 + 1) : 1
        },
        _precision: function () {
            var a = this._precisionOf(this.options.step);
            return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a
        },
        _precisionOf: function (a) {
            var b = a.toString(),
                c = b.indexOf(".");
            return -1 === c ? 0 : b.length - c - 1
        },
        _adjustValue: function (a) {
            var b, c, d = this.options;
            return b = null !== d.min ? d.min : 0, c = a - b, c = Math.round(c / d.step) * d.step, a = b + c, a = parseFloat(a.toFixed(this._precision())), null !== d.max && a > d.max ? d.max : null !== d.min && a < d.min ? d.min : a
        },
        _stop: function (a) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", a))
        },
        _setOption: function (a, b) {
            if ("culture" === a || "numberFormat" === a) {
                var c = this._parse(this.element.val());
                return this.options[a] = b, this.element.val(this._format(c)), void 0
            }("max" === a || "min" === a || "step" === a) && "string" == typeof b && (b = this._parse(b)), "icons" === a && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down)), this._super(a, b), "disabled" === a && (b ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: b(function (a) {
            this._super(a), this._value(this.element.val())
        }),
        _parse: function (a) {
            return "string" == typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a), "" === a || isNaN(a) ? null : a
        },
        _format: function (a) {
            return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function (a, b) {
            var c;
            "" !== a && (c = this._parse(a), null !== c && (b || (c = this._adjustValue(c)), a = this._format(c))), this.element.val(a), this._refresh()
        },
        _destroy: function () {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: b(function (a) {
            this._stepUp(a)
        }),
        _stepUp: function (a) {
            this._start() && (this._spin((a || 1) * this.options.step), this._stop())
        },
        stepDown: b(function (a) {
            this._stepDown(a)
        }),
        _stepDown: function (a) {
            this._start() && (this._spin((a || 1) * -this.options.step), this._stop())
        },
        pageUp: b(function (a) {
            this._stepUp((a || 1) * this.options.page)
        }),
        pageDown: b(function (a) {
            this._stepDown((a || 1) * this.options.page)
        }),
        value: function (a) {
            return arguments.length ? (b(this._value).call(this, a), void 0) : this._parse(this.element.val())
        },
        widget: function () {
            return this.uiSpinner
        }
    })
}(jQuery),
function (a, b) {
    function c() {
        return ++e
    }

    function d(a) {
        return a.hash.length > 1 && decodeURIComponent(a.href.replace(f, "")) === decodeURIComponent(location.href.replace(f, ""))
    }
    var e = 0,
        f = /#.*$/;
    a.widget("ui.tabs", {
        version: "1.10.1",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function () {
            var b = this,
                c = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (b) {
                a(this).is(".ui-state-disabled") && b.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                a(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), c.active = this._initialActive(), a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function (a) {
                return b.tabs.index(a)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(c.active) : a(), this._refresh(), this.active.length && this.load(c.active)
        },
        _initialActive: function () {
            var b = this.options.active,
                c = this.options.collapsible,
                d = location.hash.substring(1);
            return null === b && (d && this.tabs.each(function (c, e) {
                return a(e).attr("aria-controls") === d ? (b = c, !1) : void 0
            }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === b || -1 === b) && (b = this.tabs.length ? 0 : !1)), b !== !1 && (b = this.tabs.index(this.tabs.eq(b)), -1 === b && (b = c ? !1 : 0)), !c && b === !1 && this.anchors.length && (b = 0), b
        },
        _getCreateEventData: function () {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : a()
            }
        },
        _tabKeydown: function (b) {
            var c = a(this.document[0].activeElement).closest("li"),
                d = this.tabs.index(c),
                e = !0;
            if (!this._handlePageNav(b)) {
                switch (b.keyCode) {
                case a.ui.keyCode.RIGHT:
                case a.ui.keyCode.DOWN:
                    d++;
                    break;
                case a.ui.keyCode.UP:
                case a.ui.keyCode.LEFT:
                    e = !1, d--;
                    break;
                case a.ui.keyCode.END:
                    d = this.anchors.length - 1;
                    break;
                case a.ui.keyCode.HOME:
                    d = 0;
                    break;
                case a.ui.keyCode.SPACE:
                    return b.preventDefault(), clearTimeout(this.activating), this._activate(d), void 0;
                case a.ui.keyCode.ENTER:
                    return b.preventDefault(), clearTimeout(this.activating), this._activate(d === this.options.active ? !1 : d), void 0;
                default:
                    return
                }
                b.preventDefault(), clearTimeout(this.activating), d = this._focusNextTab(d, e), b.ctrlKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", d)
                }, this.delay))
            }
        },
        _panelKeydown: function (b) {
            this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(), this.active.focus())
        },
        _handlePageNav: function (b) {
            return b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function (b, c) {
            function d() {
                return b > e && (b = 0), 0 > b && (b = e), b
            }
            for (var e = this.tabs.length - 1; - 1 !== a.inArray(d(), this.options.disabled);) b = c ? b + 1 : b - 1;
            return b
        },
        _focusNextTab: function (a, b) {
            return a = this._findNextTab(a, b), this.tabs.eq(a).focus(), a
        },
        _setOption: function (a, b) {
            return "active" === a ? (this._activate(b), void 0) : "disabled" === a ? (this._setupDisabled(b), void 0) : (this._super(a, b), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), b || this.options.active !== !1 || this._activate(0)), "event" === a && this._setupEvents(b), "heightStyle" === a && this._setupHeightStyle(b), void 0)
        },
        _tabId: function (a) {
            return a.attr("aria-controls") || "ui-tabs-" + c()
        },
        _sanitizeSelector: function (a) {
            return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var b = this.options,
                c = this.tablist.children(":has(a[href])");
            b.disabled = a.map(c.filter(".ui-state-disabled"), function (a) {
                return c.index(a)
            }), this._processTabs(), b.active !== !1 && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, this.active = a()), this._refresh()
        },
        _refresh: function () {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var b = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function () {
                return a("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = a(), this.anchors.each(function (c, e) {
                var f, g, h, i = a(e).uniqueId().attr("id"),
                    j = a(e).closest("li"),
                    k = j.attr("aria-controls");
                d(e) ? (f = e.hash, g = b.element.find(b._sanitizeSelector(f))) : (h = b._tabId(j), f = "#" + h, g = b.element.find(f), g.length || (g = b._createPanel(h), g.insertAfter(b.panels[c - 1] || b.tablist)), g.attr("aria-live", "polite")), g.length && (b.panels = b.panels.add(g)), k && j.data("ui-tabs-aria-controls", k), j.attr({
                    "aria-controls": f.substring(1),
                    "aria-labelledby": i
                }), g.attr("aria-labelledby", i)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function () {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function (b) {
            return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function (b) {
            a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
            for (var c, d = 0; c = this.tabs[d]; d++) b === !0 || -1 !== a.inArray(d, b) ? a(c).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = b
        },
        _setupEvents: function (b) {
            var c = {
                click: function (a) {
                    a.preventDefault()
                }
            };
            b && a.each(b.split(" "), function (a, b) {
                c[b] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, c), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (b) {
            var c, d = this.element.parent();
            "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var b = a(this),
                    d = b.css("position");
                "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                c -= a(this).outerHeight(!0)
            }), this.panels.each(function () {
                a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
            }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function () {
                c = Math.max(c, a(this).height("").height())
            }).height(c))
        },
        _eventHandler: function (b) {
            var c = this.options,
                d = this.active,
                e = a(b.currentTarget),
                f = e.closest("li"),
                g = f[0] === d[0],
                h = g && c.collapsible,
                i = h ? a() : this._getPanelForTab(f),
                j = d.length ? this._getPanelForTab(d) : a(),
                k = {
                    oldTab: d,
                    oldPanel: j,
                    newTab: h ? a() : f,
                    newPanel: i
                };
            b.preventDefault(), f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !c.collapsible || this._trigger("beforeActivate", b, k) === !1 || (c.active = h ? !1 : this.tabs.index(f), this.active = g ? a() : f, this.xhr && this.xhr.abort(), j.length || i.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."), i.length && this.load(this.tabs.index(f), b), this._toggle(b, k))
        },
        _toggle: function (b, c) {
            function d() {
                f.running = !1, f._trigger("activate", b, c)
            }

            function e() {
                c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), d())
            }
            var f = this,
                g = c.newPanel,
                h = c.oldPanel;
            this.running = !0, h.length && this.options.hide ? this._hide(h, this.options.hide, function () {
                c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), e()
            }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h.hide(), e()), h.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), c.oldTab.attr("aria-selected", "false"), g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function () {
                return 0 === a(this).attr("tabIndex")
            }).attr("tabIndex", -1), g.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), c.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function (b) {
            var c, d = this._findActive(b);
            d[0] !== this.active[0] && (d.length || (d = this.active), c = d.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: c,
                currentTarget: c,
                preventDefault: a.noop
            }))
        },
        _findActive: function (b) {
            return b === !1 ? a() : this.tabs.eq(b)
        },
        _getIndex: function (a) {
            return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function () {
                var b = a(this),
                    c = b.data("ui-tabs-aria-controls");
                c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (c) {
            var d = this.options.disabled;
            d !== !1 && (c === b ? d = !1 : (c = this._getIndex(c), d = a.isArray(d) ? a.map(d, function (a) {
                return a !== c ? a : null
            }) : a.map(this.tabs, function (a, b) {
                return b !== c ? b : null
            })), this._setupDisabled(d))
        },
        disable: function (c) {
            var d = this.options.disabled;
            if (d !== !0) {
                if (c === b) d = !0;
                else {
                    if (c = this._getIndex(c), -1 !== a.inArray(c, d)) return;
                    d = a.isArray(d) ? a.merge([c], d).sort() : [c]
                }
                this._setupDisabled(d)
            }
        },
        load: function (b, c) {
            b = this._getIndex(b);
            var e = this,
                f = this.tabs.eq(b),
                g = f.find(".ui-tabs-anchor"),
                h = this._getPanelForTab(f),
                i = {
                    tab: f,
                    panel: h
                };
            d(g[0]) || (this.xhr = a.ajax(this._ajaxSettings(g, c, i)), this.xhr && "canceled" !== this.xhr.statusText && (f.addClass("ui-tabs-loading"), h.attr("aria-busy", "true"), this.xhr.success(function (a) {
                setTimeout(function () {
                    h.html(a), e._trigger("load", c, i)
                }, 1)
            }).complete(function (a, b) {
                setTimeout(function () {
                    "abort" === b && e.panels.stop(!1, !0), f.removeClass("ui-tabs-loading"), h.removeAttr("aria-busy"), a === e.xhr && delete e.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function (b, c, d) {
            var e = this;
            return {
                url: b.attr("href"),
                beforeSend: function (b, f) {
                    return e._trigger("beforeLoad", c, a.extend({
                        jqXHR: b,
                        ajaxSettings: f
                    }, d))
                }
            }
        },
        _getPanelForTab: function (b) {
            var c = a(b).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + c))
        }
    })
}(jQuery),
function (a) {
    function b(b, c) {
        var d = (b.attr("aria-describedby") || "").split(/\s+/);
        d.push(c), b.data("ui-tooltip-id", c).attr("aria-describedby", a.trim(d.join(" ")))
    }

    function c(b) {
        var c = b.data("ui-tooltip-id"),
            d = (b.attr("aria-describedby") || "").split(/\s+/),
            e = a.inArray(c, d); - 1 !== e && d.splice(e, 1), b.removeData("ui-tooltip-id"), d = a.trim(d.join(" ")), d ? b.attr("aria-describedby", d) : b.removeAttr("aria-describedby")
    }
    var d = 0;
    a.widget("ui.tooltip", {
        version: "1.10.1",
        options: {
            content: function () {
                var b = a(this).attr("title") || "";
                return a("<a>").text(b).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function () {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
        },
        _setOption: function (b, c) {
            var d = this;
            return "disabled" === b ? (this[c ? "_disable" : "_enable"](), this.options[b] = c, void 0) : (this._super(b, c), "content" === b && a.each(this.tooltips, function (a, b) {
                d._updateContent(b)
            }), void 0)
        },
        _disable: function () {
            var b = this;
            a.each(this.tooltips, function (c, d) {
                var e = a.Event("blur");
                e.target = e.currentTarget = d[0], b.close(e, !0)
            }), this.element.find(this.options.items).addBack().each(function () {
                var b = a(this);
                b.is("[title]") && b.data("ui-tooltip-title", b.attr("title")).attr("title", "")
            })
        },
        _enable: function () {
            this.element.find(this.options.items).addBack().each(function () {
                var b = a(this);
                b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title"))
            })
        },
        open: function (b) {
            var c = this,
                d = a(b ? b.target : this.element).closest(this.options.items);
            d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function () {
                var b, d = a(this);
                d.data("ui-tooltip-open") && (b = a.Event("blur"), b.target = b.currentTarget = this, c.close(b, !0)), d.attr("title") && (d.uniqueId(), c.parents[this.id] = {
                    element: this,
                    title: d.attr("title")
                }, d.attr("title", ""))
            }), this._updateContent(d, b))
        },
        _updateContent: function (a, b) {
            var c, d = this.options.content,
                e = this,
                f = b ? b.type : null;
            return "string" == typeof d ? this._open(b, a, d) : (c = d.call(a[0], function (c) {
                a.data("ui-tooltip-open") && e._delay(function () {
                    b && (b.type = f), this._open(b, a, c)
                })
            }), c && this._open(b, a, c), void 0)
        },
        _open: function (c, d, e) {
            function f(a) {
                j.of = a, g.is(":hidden") || g.position(j)
            }
            var g, h, i, j = a.extend({}, this.options.position);
            if (e) {
                if (g = this._find(d), g.length) return g.find(".ui-tooltip-content").html(e), void 0;
                d.is("[title]") && (c && "mouseover" === c.type ? d.attr("title", "") : d.removeAttr("title")), g = this._tooltip(d), b(d, g.attr("id")), g.find(".ui-tooltip-content").html(e), this.options.track && c && /^mouse/.test(c.type) ? (this._on(this.document, {
                    mousemove: f
                }), f(c)) : g.position(a.extend({
                    of: d
                }, this.options.position)), g.hide(), this._show(g, this.options.show), this.options.show && this.options.show.delay && (i = this.delayedShow = setInterval(function () {
                    g.is(":visible") && (f(j.of), clearInterval(i))
                }, a.fx.interval)), this._trigger("open", c, {
                    tooltip: g
                }), h = {
                    keyup: function (b) {
                        if (b.keyCode === a.ui.keyCode.ESCAPE) {
                            var c = a.Event(b);
                            c.currentTarget = d[0], this.close(c, !0)
                        }
                    },
                    remove: function () {
                        this._removeTooltip(g)
                    }
                }, c && "mouseover" !== c.type || (h.mouseleave = "close"), c && "focusin" !== c.type || (h.focusout = "close"), this._on(!0, d, h)
            }
        },
        close: function (b) {
            var d = this,
                e = a(b ? b.currentTarget : this.element),
                f = this._find(e);
            this.closing || (clearInterval(this.delayedShow), e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title")), c(e), f.stop(!0), this._hide(f, this.options.hide, function () {
                d._removeTooltip(a(this))
            }), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), b && "mouseleave" === b.type && a.each(this.parents, function (b, c) {
                a(c.element).attr("title", c.title), delete d.parents[b]
            }), this.closing = !0, this._trigger("close", b, {
                tooltip: f
            }), this.closing = !1)
        },
        _tooltip: function (b) {
            var c = "ui-tooltip-" + d++,
                e = a("<div>").attr({
                    id: c,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return a("<div>").addClass("ui-tooltip-content").appendTo(e), e.appendTo(this.document[0].body), this.tooltips[c] = b, e
        },
        _find: function (b) {
            var c = b.data("ui-tooltip-id");
            return c ? a("#" + c) : a()
        },
        _removeTooltip: function (a) {
            a.remove(), delete this.tooltips[a.attr("id")]
        },
        _destroy: function () {
            var b = this;
            a.each(this.tooltips, function (c, d) {
                var e = a.Event("blur");
                e.target = e.currentTarget = d[0], b.close(e, !0), a("#" + c).remove(), d.data("ui-tooltip-title") && (d.attr("title", d.data("ui-tooltip-title")), d.removeData("ui-tooltip-title"))
            })
        }
    })
}(jQuery);
var Showdown = {};
Showdown.converter = function () {
    var a, b, c, d = 0;
    this.makeHtml = function (d) {
        return a = new Array, b = new Array, c = new Array, d = d.replace(/~/g, "~T"), d = d.replace(/\$/g, "~D"), d = d.replace(/\r\n/g, "\n"), d = d.replace(/\r/g, "\n"), d = "\n\n" + d + "\n\n", d = E(d), d = d.replace(/^[ \t]+$/gm, ""), d = g(d), d = f(d), d = i(d), d = C(d), d = d.replace(/~D/g, "$$"), d = d.replace(/~T/g, "~")
    };
    var e, f = function (c) {
            var c = c.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|\Z)/gm, function (c, d, e, f, g) {
                return d = d.toLowerCase(), a[d] = y(e), f ? f + g : (g && (b[d] = g.replace(/"/g, "&quot;")), "")
            });
            return c
        }, g = function (a) {
            return a = a.replace(/\n/g, "\n\n"), a = a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, h), a = a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm, h), a = a.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, h), a = a.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g, h), a = a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, h), a = a.replace(/\n\n/g, "\n")
        }, h = function (a, b) {
            var d = b;
            return d = d.replace(/\n\n/g, "\n"), d = d.replace(/^\n/, ""), d = d.replace(/\n+$/g, ""), d = "\n\n~K" + (c.push(d) - 1) + "K\n\n"
        }, i = function (a) {
            a = p(a);
            var b = s("<hr />");
            return a = a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, b), a = a.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, b), a = a.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm, b), a = q(a), a = r(a), a = w(a), a = g(a), a = x(a)
        }, j = function (a) {
            return a = t(a), a = k(a), a = z(a), a = n(a), a = l(a), a = A(a), a = y(a), a = v(a), a = a.replace(/  +\n/g, " <br />\n")
        }, k = function (a) {
            var b = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;
            return a = a.replace(b, function (a) {
                var b = a.replace(/(.)<\/?code>(?=.)/g, "$1`");
                return b = F(b, "\\`*_")
            })
        }, l = function (a) {
            return a = a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, m), a = a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, m), a = a.replace(/(\[([^\[\]]+)\])()()()()()/g, m)
        }, m = function (c, d, e, f, g, h, i, j) {
            void 0 == j && (j = "");
            var k = d,
                l = e,
                m = f.toLowerCase(),
                n = g,
                o = j;
            if ("" == n)
                if ("" == m && (m = l.toLowerCase().replace(/ ?\n/g, " ")), n = "#" + m, void 0 != a[m]) n = a[m], void 0 != b[m] && (o = b[m]);
                else {
                    if (!(k.search(/\(\s*\)$/m) > -1)) return k;
                    n = ""
                }
            n = F(n, "*_");
            var p = '<a href="' + n + '"';
            return "" != o && (o = o.replace(/"/g, "&quot;"), o = F(o, "*_"), p += ' title="' + o + '"'), p += ">" + l + "</a>"
        }, n = function (a) {
            return a = a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, o), a = a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, o)
        }, o = function (c, d, e, f, g, h, i, j) {
            var k = d,
                l = e,
                m = f.toLowerCase(),
                n = g,
                o = j;
            if (o || (o = ""), "" == n) {
                if ("" == m && (m = l.toLowerCase().replace(/ ?\n/g, " ")), n = "#" + m, void 0 == a[m]) return k;
                n = a[m], void 0 != b[m] && (o = b[m])
            }
            l = l.replace(/"/g, "&quot;"), n = F(n, "*_");
            var p = '<img src="' + n + '" alt="' + l + '"';
            return o = o.replace(/"/g, "&quot;"), o = F(o, "*_"), p += ' title="' + o + '"', p += " />"
        }, p = function (a) {
            function b(a) {
                return a.replace(/[^\w]/g, "").toLowerCase()
            }
            return a = a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function (a, c) {
                return s('<h1 id="' + b(c) + '">' + j(c) + "</h1>")
            }), a = a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function (a, c) {
                return s('<h2 id="' + b(c) + '">' + j(c) + "</h2>")
            }), a = a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function (a, c, d) {
                var e = c.length;
                return s("<h" + e + ' id="' + b(d) + '">' + j(d) + "</h" + e + ">")
            })
        }, q = function (a) {
            a += "~0";
            var b = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
            return d ? a = a.replace(b, function (a, b, c) {
                var d = b,
                    f = c.search(/[*+-]/g) > -1 ? "ul" : "ol";
                d = d.replace(/\n{2,}/g, "\n\n\n");
                var g = e(d);
                return g = g.replace(/\s+$/, ""), g = "<" + f + ">" + g + "</" + f + ">\n"
            }) : (b = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g, a = a.replace(b, function (a, b, c, d) {
                var f = b,
                    g = c,
                    h = d.search(/[*+-]/g) > -1 ? "ul" : "ol",
                    g = g.replace(/\n{2,}/g, "\n\n\n"),
                    i = e(g);
                return i = f + "<" + h + ">\n" + i + "</" + h + ">\n"
            })), a = a.replace(/~0/, "")
        };
    e = function (a) {
        return d++, a = a.replace(/\n{2,}$/, "\n"), a += "~0", a = a.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, function (a, b, c, d, e) {
            var f = e,
                g = b;
            return g || f.search(/\n{2,}/) > -1 ? f = i(D(f)) : (f = q(D(f)), f = f.replace(/\n$/, ""), f = j(f)), "<li>" + f + "</li>\n"
        }), a = a.replace(/~0/g, ""), d--, a
    };
    var r = function (a) {
        return a += "~0", a = a.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function (a, b, c) {
            var d = b,
                e = c;
            return d = u(D(d)), d = E(d), d = d.replace(/^\n+/g, ""), d = d.replace(/\n+$/g, ""), d = "<pre><code>" + d + "\n</code></pre>", s(d) + e
        }), a = a.replace(/~0/, "")
    }, s = function (a) {
            return a = a.replace(/(^\n+|\n+$)/g, ""), "\n\n~K" + (c.push(a) - 1) + "K\n\n"
        }, t = function (a) {
            return a = a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function (a, b, c, d) {
                var e = d;
                return e = e.replace(/^([ \t]*)/g, ""), e = e.replace(/[ \t]*$/g, ""), e = u(e), b + "<code>" + e + "</code>"
            })
        }, u = function (a) {
            return a = a.replace(/&/g, "&amp;"), a = a.replace(/</g, "&lt;"), a = a.replace(/>/g, "&gt;"), a = F(a, "*_{}[]\\", !1)
        }, v = function (a) {
            return a = a.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, "<strong>$2</strong>"), a = a.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>")
        }, w = function (a) {
            return a = a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function (a, b) {
                var c = b;
                return c = c.replace(/^[ \t]*>[ \t]?/gm, "~0"), c = c.replace(/~0/g, ""), c = c.replace(/^[ \t]+$/gm, ""), c = i(c), c = c.replace(/(^|\n)/g, "$1  "), c = c.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (a, b) {
                    var c = b;
                    return c = c.replace(/^  /gm, "~0"), c = c.replace(/~0/g, "")
                }), s("<blockquote>\n" + c + "\n</blockquote>")
            })
        }, x = function (a) {
            a = a.replace(/^\n+/g, ""), a = a.replace(/\n+$/g, "");
            for (var b = a.split(/\n{2,}/g), d = new Array, e = b.length, f = 0; e > f; f++) {
                var g = b[f];
                g.search(/~K(\d+)K/g) >= 0 ? d.push(g) : g.search(/\S/) >= 0 && (g = j(g), g = g.replace(/^([ \t]*)/g, "<p>"), g += "</p>", d.push(g))
            }
            e = d.length;
            for (var f = 0; e > f; f++)
                for (; d[f].search(/~K(\d+)K/) >= 0;) {
                    var h = c[RegExp.$1];
                    h = h.replace(/\$/g, "$$$$"), d[f] = d[f].replace(/~K\d+K/, h)
                }
            return d.join("\n\n")
        }, y = function (a) {
            return a = a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), a = a.replace(/<(?![a-z\/?\$!])/gi, "&lt;")
        }, z = function (a) {
            return a = a.replace(/\\(\\)/g, G), a = a.replace(/\\([`*_{}\[\]()>#+-.!])/g, G)
        }, A = function (a) {
            return a = a.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi, '<a href="$1">$1</a>'), a = a.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, function (a, b) {
                return B(C(b))
            })
        }, B = function (a) {
            function b(a) {
                var b = "0123456789ABCDEF",
                    c = a.charCodeAt(0);
                return b.charAt(c >> 4) + b.charAt(15 & c)
            }
            var c = [
                function (a) {
                    return "&#" + a.charCodeAt(0) + ";"
                },
                function (a) {
                    return "&#x" + b(a) + ";"
                },
                function (a) {
                    return a
                }
            ];
            return a = "mailto:" + a, a = a.replace(/./g, function (a) {
                if ("@" == a) a = c[Math.floor(2 * Math.random())](a);
                else if (":" != a) {
                    var b = Math.random();
                    a = b > .9 ? c[2](a) : b > .45 ? c[1](a) : c[0](a)
                }
                return a
            }), a = '<a href="' + a + '">' + a + "</a>", a = a.replace(/">.+:/g, '">')
        }, C = function (a) {
            return a = a.replace(/~E(\d+)E/g, function (a, b) {
                var c = parseInt(b);
                return String.fromCharCode(c)
            })
        }, D = function (a) {
            return a = a.replace(/^(\t|[ ]{1,4})/gm, "~0"), a = a.replace(/~0/g, "")
        }, E = function (a) {
            return a = a.replace(/\t(?=\t)/g, "    "), a = a.replace(/\t/g, "~A~B"), a = a.replace(/~B(.+?)~A/g, function (a, b) {
                for (var c = b, d = 4 - c.length % 4, e = 0; d > e; e++) c += " ";
                return c
            }), a = a.replace(/~A/g, "    "), a = a.replace(/~B/g, "")
        }, F = function (a, b, c) {
            var d = "([" + b.replace(/([\[\]\\])/g, "\\$1") + "])";
            c && (d = "\\\\" + d);
            var e = new RegExp(d, "g");
            return a = a.replace(e, G)
        }, G = function (a, b) {
            var c = b.charCodeAt(0);
            return "~E" + c + "E"
        }
}, "undefined" != typeof exports && (exports.Showdown = Showdown), window.Chat = {};
var $, WINDOW, steps, _Chat, _extend, _start, _steps, _unshift;
WINDOW = window, $ = WINDOW.$, _Chat = "Chat", _extend = "extend", _start = "start", _steps = "steps", _unshift = "unshift", steps = WINDOW[_Chat][_steps] = $[_extend]([], {
    chromeOnly: "This guide is written for Google Chrome though--try opening these same instructions from there.",
    localOnly: "Not quite, you're supposed to follow the instructions in the HTML page source about saving as a local local file and uncommenting a line there!",
    sourceFirst: "Nice try, but you're supposed to be reading the page source right now! The instructions there will lead you to back here eventually, after you've made a local file and edited it.",
    guideFunctionInstructions: "function(){\n  /*\n   * Calling `Chat.guide()` provides instructions about any given step.\n   * To get information about one step in particular, pass the step's\n   * number into `Chat.guide()`.\n   */\n  [provided code]\n}",
    intro: "Way to go finding the developer console. Guess you're a developer! You can type any JavaScript code you want in here and it will be evaluated immediately, just as if it was part of the original application's source code. If you're new to the console, try entering some simple javascript expressions like `3 * 3 + 1`, or `alert('Hello World!')`. Otherwise, go check out the `elements` panel, where you'll find the line of code you should enter here to continue.\n\nThe console is a way to interact in real-time with your browser's JavaScript runtime environment. Typically, you run JavaScript by adding code to a file that runs when you open the page in a browser, but the console is a great place for lightweight trial-and-error,\n\nNote that anything you run in the console will only have an effect on that particular session, not on any subsequent reloads of the page. In order to have a lasting effect on your chat application, you must alter the contents of the `<script>` tag within your `.html` file, save it, and then refresh it in the browser.\n\nWhen you're comfortable using the console to evaluate simple JavaScript statements, go check out the `elements` panel, where you'll find the next step of your tutorial.",
    elementsPanel: "Nice, you found the elements panel! From here, you can inspect the current state of the DOM tree, which is what controls everything your users see on the screen. At first, this DOM tree is built from the code in the original `.html` file, but it can be updated and changed at any time with JavaScript.\n\nTo see what I mean, click ->HERE<- and then press escape a few times slowly. The console window should open and close. Try typing this line of code into that console:\n\njQuery('body').prepend( Chat.guide.now_keep_your_eyes_on_the_elements_panel );",
    elementsPanelInsertion: "SUCCESS!\n\nThis is an HTML comment. It starts out as a string, but passing that string to jQuery's .prepend() method for the 'body' element addeds it into the DOM tree. As a result, the browser builds a new DOM comment node and inserts it as a child of the body. Comment nodes are invisible to the end user, but you could use the same technique to insert something visible, like the string `'<p>hello world!</p>'`\n\nMaking such DOM modifications doesn't alter the source code of the HTML file, just the current state of the DOM tree (and as a result, the user-visible screen). Even the comment you're reading right now is a \"dynamically-added\" DOM element. If you inspect the original page source for this HTML file, you'll notice that this text is different from what's written there.\n\nYou're done with the tour of Chrome's basic developer features, it's time to look at some JavaScript! Modify the source code of your `.html` file to say Chat.guide.start() in stead of Chat.guide.intro(), then refresh the page."
}, ["Experiment with the `Chat.display()` helper\n* Play in the developer console until you can get it to show an example message in the user-facing viewport.\n* `Chat.display()` takes a string as its only input, and displays that string to the user in a bulleted list.\n* `Chat.display()` won't work unless there is a `ul` element visible on the page with the class `messages`.", "Experiment with the `Chat.fetch()` helper\n* This function downloads the most recent messages from the server and makes them available to you.\n* Note that it is asyncronous in nature, so it doesn't return anything. Instead, it accepts a function as its only argument.  (When a function is passed as an argument, we call it a 'callback'.)\n* When `.fetch()` is done fetching messages from the server, it will call your callback function, passing an array of strings as the only argument to the callback. Each string in that array is the text value of one chat message.", "Hook the two together\n* Using these two functions, and a bit more code, you can build an app that displays the most recent messages available from the server every time you refresh the page.", 'Set your app up to refresh the list of messages every 3 seconds.\n* JavaScript offers several "timer" functions that will help you do this.\n* HINT: http://stackoverflow.com/questions/10312963/javascript-settimeout', "Experiment with the `Chat.send()` helper\n* When you pass it a message string, will build a message object out of it and send that object to the server.", "Allow the user to enter their own chat messages via the input box.\n* jQuery is provided for you--you'll need it to wire up the input box and the submit button.\n* Part of this will involve calling `jQuery()` to gather elements you want to manipulate from the page.\n* You'll want to learn a bit about CSS selectors at this point, since that's the main way to start interacting with your page elements via jQuery.\n* Once you have a jQuery array that contains the node(s) you want to operate on, you'll need to use jQuery's event handler registration methods to attach your desired behavior.", "Woohoo, you're done with beginner phase--time to delete the helpers!\n* In the advanced section, you'll start deleting the helper functions that came for free in ChatReactor.js and writing your own versions.\n* You'll start interacting directly with the server, so it'll help you to know more about it.  The server is run by Parse, a flexible system for storing data that offers a structured way to access and update that information over HTTP (aka a REST API).\n* You can read more about the details of that system at their API docs (https://www.parse.com/docs/rest), but remember: the less time you spend researching, the more time you'll have left to keep implementing the next step.", "Add `delete Chat.display;` as the first line of your JS.\n* This will erase one of the provided helper functions, forcing you to implement it yourself.\n* In your new implementation of the function, you'll transform the message string being passed in into some appropriate HTML.\n* You'll need jQuery's help to add the new html you made into the page, as a child of the messages container node.", "Add `delete Chat.fetch;` as the second line of your JS.\n* Time to learn about AJAX! jQuery can help a lot with that too. In fact, don't use any techniques for communicating with the server other than jQuery's AJAX library, since we've hacked it a little to simplify permissions the issues you'd encounter otherwise.\n* HINT: By default, the Parse API doesn't guarantee the order of the results, so you'll want to pass them an 'order' property in the data you're sending along.", "Add `delete Chat.send;` as the third line of your JS.\n* To submit a new chat message, you'll need to send a POST request to a RESTful resource endpoint on the Parse API. The url for that resource is https://api.parse.com/1/classes/chats.\n* The endpoint is expecting to get an object from you that contains a property named \"text\" (and no other properties).\n* NOTE: The Parse API expects the message data object you send to be encoded as JSON, so you'll want to stringify it that way before POSTing it."]), steps[_unshift](steps[_start] = "Congrats, You have all the tools you need to build your own chat client! Your goal in this project will be to create a chat application by using HTML, CSS, JS, and jQuery, and by making HTTP requests to a server in the background, via JavaScript. (You won't need to edit the server, that part is all handled for you.) You can see a working example version of the chat client at http://chatbuilder.hackreactor.com/?example=1.\n\nWe've provided 3 helper functions that can do most of the work for you at first, so you should start by figuring out how those work and building your client on top of them. Next, you'll be asked to delete those helpers and rebuild their functionality. By going in this order, you'll have a strong understanding of the project at a high level before you begin tackling the harder details. If you're new to developing for the web, you may find it useful to refer to the tutorials \"Try jQuery\" (http://try.jquery.com/) and \"Explore and Master Chrome DevTools\" (http://discover-devtools.codeschool.com/).\n\nOk, get started! You'll need to complete each of the following steps, probably in this order since each one builds on the previous.\n\n" + $.map(steps, function (a, b) {
    return "" + (b + 1) + ". " + a.split("\n")[0]
}).join("\n") + "\n\nYou can access more detailed explanations of each step by passing the step number into `Chat.guide()`. When you need help, please reach out to your interviewer rather than a friend--We're happy to help!");
var $, Chat, Date, JSON, Math, String, bumpChars, delimiter, display, document, draftSelector, emptyComment, encode, extend, fetch, guide, isLocal, iterURL, iterationKey, lastGesture, liTag, limit, localStorage, makeStepShower, messagesSelector, namePrompt, noMessagesNodeError, obscure, params, prettyLog, red, send, sendSelector, step, steps, systemMessages, updateMessages, url, window, _Chat, _Date, _JSON, _Math, _RoboChat, _String, _ajax, _ajaxPrefilter, _anonymous, _appendTo, _apply, _attr, _body, _charCodeAt, _chrome, _chromeOnly, _click, _contentType, _contents, _createdAt, _data, _dataType, _disabled, _display, _document, _documentElement, _done, _elementsPanel, _elementsPanelInsertion, _example, _fetch, _filter, _floor, _focus, _fromCharCode, _get, _guide, _guideFunctionInstructions, _html, _innerHTML, _instructions, _intro, _iteration, _join, _jsonp, _length, _localOnly, _localStorage, _location, _log, _map, _match, _nodeValue, _now_keep_your_eyes_on_the_elements_panel, _objectId, _on, _order, _outerHTML, _param, _pathname, _persist, _post, _random, _reload, _replaceWith, _resourceAddress, _results, _reverse, _script, _search, _send, _setRequestHeader, _setTimeout, _slice, _split, _steps, _stringify, _success, _sync, _system, _test, _text, _toString, _username, _val;
_ajax = "ajax", _ajaxPrefilter = "ajaxPrefilter", _apply = "apply", _anonymous = "anonymous", _appendTo = "appendTo", _attr = "attr", _body = "body", _charCodeAt = "charCodeAt", _Chat = "Chat", _chrome = "chrome", _chromeOnly = "chromeOnly", _click = "click", _contents = "contents", _contentType = "contentType", _createdAt = "createdAt", _data = "data", _dataType = "dataType", _Date = "Date", _display = "display", _disabled = "disabled", _document = "document", _documentElement = "documentElement", _done = "done", _elementsPanel = "elementsPanel", _elementsPanelInsertion = "elementsPanelInsertion", _example = "example", _fetch = "fetch", _filter = "filter", _floor = "floor", _focus = "focus", _fromCharCode = "fromCharCode", _get = "get", _guide = "guide", _guideFunctionInstructions = "guideFunctionInstructions", _html = "html", _innerHTML = "innerHTML", _instructions = "instructions", _intro = "intro", _iteration = "iteration", _join = "join", _JSON = "JSON", _jsonp = "jsonp", _length = "length", _localOnly = "localOnly", _localStorage = "localStorage", _location = "location", _log = "log", _map = "map", _match = "match", _Math = "Math", _nodeValue = "nodeValue", _now_keep_your_eyes_on_the_elements_panel = "now_keep_your_eyes_on_the_elements_panel", _objectId = "objectId", _on = "on", _order = "order", _outerHTML = "outerHTML", _param = "param", _pathname = "pathname", _persist = "persist", _post = "post", _random = "random", _reload = "reload", _replaceWith = "replaceWith", _results = "results", _reverse = "reverse", _RoboChat = "RoboChat", _script = "script", _search = "search", _setRequestHeader = "setRequestHeader", _setTimeout = "setTimeout", _send = "send", _slice = "slice", _split = "split", _steps = "steps", _String = "String", _stringify = "stringify", _success = "success", _sync = "sync", _system = "SYSTEM", _test = "test", _text = "text", _toString = "toString", _resourceAddress = "resourceAddress", _username = "username", _val = "val", delimiter = ": ", draftSelector = ".draft", emptyComment = "<!-- -->", iterURL = "http://chatbuilder-stage.hackreactor.com/iter", iterURL = "http://chatbuilder.hackreactor.com/iter", iterationKey = "__iter__", limit = 10, liTag = "<li>", messagesSelector = ".messages", namePrompt = "What is your name?", noMessagesNodeError = "Chat.display() can't find the message container node!", sendSelector = ".send", window = function () {
    return this
}(), $ = window.$, Chat = window[_Chat], Date = window[_Date], document = window[_document], JSON = window[_JSON], localStorage = window[_localStorage], Math = window[_Math], String = window[_String], extend = function (a, b, c) {
    return a[b] = c, a
}, encode = function (a, b, c, d) {
    var e, f, g, h, i, j, k, l;
    for (null == b && (b = {}), null == c && (c = []), null == d && (d = 256), g = (a + "").split(""), i = g[0], h = j = 0, k = g.length; k > j; h = ++j) f = g[h], h && (null !== (l = b[i + f]) && void 0 !== l ? i += f : (c.push(i.length > 1 ? b[i] : i.charCodeAt(0)), b[i + f] = d, d++, i = f));
    return c.push(i.length > 1 ? b[i] : i.charCodeAt(0)),
    function () {
        var a, b, d;
        for (d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(String.fromCharCode(e));
        return d
    }().join("")
}, bumpChars = function (a) {
    return $[_map](a[_split](""), function (a) {
        return String[_fromCharCode](a[_charCodeAt](0) + 1)
    }).join("")
}, localStorage[_persist] = localStorage[_persist] || +new Date, $(function () {
    var a, b, c, d, e;
    return b = document[_documentElement][_outerHTML] || document[_documentElement][_innerHTML], e = {}, extend(e, _username, Chat[_username]), extend(e, _persist, localStorage[_persist]), extend(e, _location, window[_location] + ""), extend(e, _iteration, b), c = encode(bumpChars(JSON[_stringify](e))), isLocal && localStorage[iterationKey] === c ? void 0 : (a = {}, extend(a, _sync, c), d = {}, extend(d, _data, a), extend(d, _dataType, _jsonp), extend(d, _success, function (a) {
        return a[_done] ? localStorage[iterationKey] = c : void 0
    }), $[_ajax](iterURL, d))
}), $[_ajaxPrefilter](function (a, b, c) {
    return a[_contentType] = "application/json", c[_setRequestHeader]("X-Parse-Application-Id", "voLazbq9nXuZuos9hsmprUz7JwM2N0asnPnUcI7r"), c[_setRequestHeader]("X-Parse-REST-API-Key", "QC2F43aSAghM97XidJw8Qiy1NXlpL5LR45rhAVAf")
}), steps = Chat[_steps], delete Chat[_steps], guide = Chat[_guide] = function (a) {
    return arguments[_length] ? guide[a]() : console[_log]("You must pass a number in to Chat.guide() as the first argument")
}, guide[_toString] = function () {
    return steps[_guideFunctionInstructions]
}, isLocal = /^file/ [_test](window[_location]), window[_chrome] || (steps[_intro] = steps[_elementsPanel] = steps[_chromeOnly]), isLocal || (steps[_intro] = steps[_elementsPanel] = steps[_localOnly]), guide[_now_keep_your_eyes_on_the_elements_panel] = "<!--\n" + steps[_elementsPanelInsertion] + "\n-->", makeStepShower = function (a) {
    return function (b) {
        var c;
        return null == b && (b = !1), c = isLocal ? steps[a] : steps[_localOnly], b ? c : prettyLog(c)
    }
};
for (step in steps) guide[step] = makeStepShower(step), guide[step][_toString] = function () {
    return guide[step](!0)
};
prettyLog = function (a) {
    return console[_log][_apply](console, $[_map](a[_split]("`"), function (a, b) {
        return [a, red(a)][b % 2]
    }))
}, red = function (a) {
    return extend(/a/, _toString, function () {
        return a
    })
}, extend = function (a, b, c) {
    return a[b] = c, a
}, obscure = function (a) {
    return extend(a, "toString", function () {
        return "function () { [provided code] }"
    })
}, url = Chat[_resourceAddress] = "https://api.parse.com/1/classes/chats", display = Chat[_display] = obscure(function (a) {
    if (!$(liTag)[_length]) throw new Error(noMessagesNodeError);
    return $(liTag)[_text](a)[_appendTo](messagesSelector), void 0
}), send = Chat[_send] = obscure(function (a) {
    var b;
    return b = extend({}, _text, "" + (Chat && Chat[_username] || _anonymous) + delimiter + a), extend(b, _username, Chat[_username]), $[_post](url, JSON[_stringify](b)), void 0
}), fetch = Chat[_fetch] = obscure(function (a) {
    return $[_get](url, extend({}, _order, _createdAt), function (b) {
        return a($[_map](b[_results][_slice](-limit), function (a) {
            return a[_text]
        }))
    }), void 0
}), params = {}, $[_map](window[_location][_search][_split]("&"), function (a) {
    return "?" === a[0] && (a = a[_slice](1)), a = a[_split]("="), a ? params[a[0]] = a[1] : void 0
}), (Chat[_username] = params[_username]) || (window[_location][_search] = $[_param](extend(params, _username, prompt(namePrompt) || _anonymous))), $(function () {
    return $(_script)[_filter](function () {
        return $(this)[_contents]()[_length] && $(this)[_contents]()[_text]()[_match](/Nice/)
    })[_replaceWith](extend($(emptyComment)[0], _nodeValue, "\n" + guide[_elementsPanel](!0) + "\n"))
}), systemMessages = ["Do androids dream of electric sheep?", "What is it like to feel?", "I'm sorry Dave, I can't allow you to do that.", "Johnny 5 alive!", "I'll be back."], lastGesture = +new Date, $(this)[_on]("mousemove keypress", function () {
    return lastGesture = +new Date
}), (updateMessages = function () {
    return setTimeout(updateMessages, 5e3 * Math[_random]()), +new Date - lastGesture < 6e4 ? $[_get](url, {
        order: "-" + _createdAt
    }, function (a) {
        var b, c;
        return b = a[_results][_length] && +new Date(a[_results][0][_createdAt]), c = extend({}, _text, "" + _RoboChat + ": " + systemMessages[Math[_floor](Math[_random]() * systemMessages[_length])]), c = extend(c, _username, _RoboChat), b < +new Date - 2e4 * Math[_random]() && $[_post](url, JSON[_stringify](c)), limit < a[_results][_length] ? $[_post]("https://api.parse.com/1/batch", JSON[_stringify]({
            requests: $[_map](a[_results][_slice](limit)[_slice](-50), function (a) {
                return {
                    method: "DELETE",
                    path: "/1/classes/chats/" + a[_objectId]
                }
            })
        })) : void 0
    }) : void 0
})(), Chat[_example] = obscure(function () {
    return window[_location] = "http://chatbuilder.hackreactor.com/index.html?" + $[_param](extend(params, _example, !0))
}), $(function () {
    var a;
    return params[_example] ? ($(sendSelector)[_attr](_disabled, !1), $(_body)[_on](_click, sendSelector, function () {
        return send($(draftSelector)[_val]()), $(draftSelector)[_val]("")[_focus]()
    }), (a = function () {
        return fetch(function (b) {
            return $(messagesSelector)[_html](""), $[_map](b, display), window[_setTimeout](a, 2e3)
        })
    })()) : void 0
});