!(function e(t, n, r) {
    function o(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var u = "function" == typeof require && require;
                if (!s && u) return u(a, !0);
                if (i) return i(a, !0);
                var l = Error("Cannot find module '" + a + "'");
                throw ((l.code = "MODULE_NOT_FOUND"), l);
            }
            var c = (n[a] = { exports: {} });
            t[a][0].call(
                c.exports,
                function (e) {
                    var n;
                    return o(t[a][1][e] || e);
                },
                c,
                c.exports,
                e,
                t,
                n,
                r
            );
        }
        return n[a].exports;
    }
    for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
    return o;
})(
    {
        1: [
            function (e, t, n) {
                var r, o;
                (r = "undefined" != typeof window ? window : this),
                    (o = function (e, t) {
                        "use strict";
                        function n(e, t) {
                            var n = (t = t || G).createElement("script");
                            (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
                        }
                        function r(e) {
                            var t = !!e && "length" in e && e.length,
                                n = eu.type(e);
                            return "function" !== n && !eu.isWindow(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
                        }
                        function o(e, t, n) {
                            return eu.isFunction(t)
                                ? eu.grep(e, function (e, r) {
                                      return !!t.call(e, r, e) !== n;
                                  })
                                : t.nodeType
                                ? eu.grep(e, function (e) {
                                      return (e === t) !== n;
                                  })
                                : "string" != typeof t
                                ? eu.grep(e, function (e) {
                                      return ee.call(t, e) > -1 !== n;
                                  })
                                : ey.test(t)
                                ? eu.filter(t, e, n)
                                : ((t = eu.filter(t, e)),
                                  eu.grep(e, function (e) {
                                      return ee.call(t, e) > -1 !== n && 1 === e.nodeType;
                                  }));
                        }
                        function i(e, t) {
                            for (; (e = e[t]) && 1 !== e.nodeType; );
                            return e;
                        }
                        function a(e) {
                            return e;
                        }
                        function s(e) {
                            throw e;
                        }
                        function u(e, t, n) {
                            var r;
                            try {
                                e && eu.isFunction((r = e.promise)) ? r.call(e).done(t).fail(n) : e && eu.isFunction((r = e.then)) ? r.call(e, t, n) : t.call(void 0, e);
                            } catch (o) {
                                n.call(void 0, o);
                            }
                        }
                        function l() {
                            G.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l), eu.ready();
                        }
                        function c() {
                            this.expando = eu.expando + c.uid++;
                        }
                        function f(e, t, n) {
                            var r, o;
                            if (void 0 === n && 1 === e.nodeType) {
                                if (((r = "data-" + t.replace(eA, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                                    try {
                                        n = ((o = n), "true" === o || ("false" !== o && ("null" === o ? null : o === +o + "" ? +o : eq.test(o) ? JSON.parse(o) : o)));
                                    } catch (i) {}
                                    eS.set(e, t, n);
                                } else n = void 0;
                            }
                            return n;
                        }
                        function p(e, t, n, r) {
                            var o,
                                i = 1,
                                a = 20,
                                s = r
                                    ? function () {
                                          return r.cur();
                                      }
                                    : function () {
                                          return eu.css(e, t, "");
                                      },
                                u = s(),
                                l = (n && n[3]) || (eu.cssNumber[t] ? "" : "px"),
                                c = (eu.cssNumber[t] || ("px" !== l && +u)) && eD.exec(eu.css(e, t));
                            if (c && c[3] !== l) {
                                (l = l || c[3]), (n = n || []), (c = +u || 1);
                                do (c /= i = i || ".5"), eu.style(e, t, c + l);
                                while (i !== (i = s() / u) && 1 !== i && --a);
                            }
                            return n && ((c = +c || +u || 0), (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = o))), o;
                        }
                        function h(e) {
                            var t,
                                n = e.ownerDocument,
                                r = e.nodeName,
                                o = eH[r];
                            return o || ((t = n.body.appendChild(n.createElement(r))), (o = eu.css(t, "display")), t.parentNode.removeChild(t), "none" === o && (o = "block"), (eH[r] = o)), o;
                        }
                        function d(e, t) {
                            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
                                (r = e[i]).style &&
                                    ((n = r.style.display),
                                    t
                                        ? ("none" === n && ((o[i] = eN.get(r, "display") || null), o[i] || (r.style.display = "")), "" === r.style.display && eL(r) && (o[i] = h(r)))
                                        : "none" !== n && ((o[i] = "none"), eN.set(r, "display", n)));
                            for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
                            return e;
                        }
                        function g(e, t) {
                            var n;
                            return (
                                (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && eu.nodeName(e, t)) ? eu.merge([e], n) : n
                            );
                        }
                        function v(e, t) {
                            for (var n = 0, r = e.length; n < r; n++) eN.set(e[n], "globalEval", !t || eN.get(t[n], "globalEval"));
                        }
                        function m(e, t, n, r, o) {
                            for (var i, a, s, u, l, c, f = t.createDocumentFragment(), p = [], h = 0, d = e.length; h < d; h++)
                                if ((i = e[h]) || 0 === i) {
                                    if ("object" === eu.type(i)) eu.merge(p, i.nodeType ? [i] : i);
                                    else if (e8.test(i)) {
                                        for (a = a || f.appendChild(t.createElement("div")), u = eM[(s = (eF.exec(i) || ["", ""])[1].toLowerCase())] || eM._default, a.innerHTML = u[1] + eu.htmlPrefilter(i) + u[2], c = u[0]; c--; )
                                            a = a.lastChild;
                                        eu.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
                                    } else p.push(t.createTextNode(i));
                                }
                            for (f.textContent = "", h = 0; (i = p[h++]); )
                                if (r && eu.inArray(i, r) > -1) o && o.push(i);
                                else if (((l = eu.contains(i.ownerDocument, i)), (a = g(f.appendChild(i), "script")), l && v(a), n)) for (c = 0; (i = a[c++]); ) e1.test(i.type || "") && n.push(i);
                            return f;
                        }
                        function y() {
                            return !0;
                        }
                        function $() {
                            return !1;
                        }
                        function _() {
                            try {
                                return G.activeElement;
                            } catch (e) {}
                        }
                        function b(e, t, n, r, o, i) {
                            var a, s;
                            if ("object" == typeof t) {
                                for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) b(e, s, n, r, t[s], i);
                                return e;
                            }
                            if ((null == r && null == o ? ((o = n), (r = n = void 0)) : null == o && ("string" == typeof n ? ((o = r), (r = void 0)) : ((o = r), (r = n), (n = void 0))), !1 === o)) o = $;
                            else if (!o) return e;
                            return (
                                1 === i &&
                                    ((a = o),
                                    ((o = function (e) {
                                        return eu().off(e), a.apply(this, arguments);
                                    }).guid = a.guid || (a.guid = eu.guid++))),
                                e.each(function () {
                                    eu.event.add(this, t, o, r, n);
                                })
                            );
                        }
                        function x(e, t) {
                            return (eu.nodeName(e, "table") && eu.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0]) || e;
                        }
                        function w(e) {
                            return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
                        }
                        function C(e) {
                            var t = ez.exec(e.type);
                            return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
                        }
                        function k(e, t) {
                            var n, r, o, i, a, s, u, l;
                            if (1 === t.nodeType) {
                                if (eN.hasData(e) && ((i = eN.access(e)), (a = eN.set(t, i)), (l = i.events))) for (o in (delete a.handle, (a.events = {}), l)) for (n = 0, r = l[o].length; n < r; n++) eu.event.add(t, o, l[o][n]);
                                eS.hasData(e) && ((s = eS.access(e)), (u = eu.extend({}, s)), eS.set(t, u));
                            }
                        }
                        function T(e, t) {
                            var n = t.nodeName.toLowerCase();
                            "input" === n && eP.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
                        }
                        function j(e, t, r, o) {
                            t = J.apply([], t);
                            var i,
                                a,
                                s,
                                u,
                                l,
                                c,
                                f = 0,
                                p = e.length,
                                h = p - 1,
                                d = t[0],
                                v = eu.isFunction(d);
                            if (v || (p > 1 && "string" == typeof d && !ea.checkClone && e7.test(d)))
                                return e.each(function (n) {
                                    var i = e.eq(n);
                                    v && (t[0] = d.call(this, n, i.html())), j(i, t, r, o);
                                });
                            if (p && ((a = (i = m(t, e[0].ownerDocument, !1, e, o)).firstChild), 1 === i.childNodes.length && (i = a), a || o)) {
                                for (u = (s = eu.map(g(i, "script"), w)).length; f < p; f++) (l = i), f !== h && ((l = eu.clone(l, !0, !0)), u && eu.merge(s, g(l, "script"))), r.call(e[f], l, f);
                                if (u)
                                    for (c = s[s.length - 1].ownerDocument, eu.map(s, C), f = 0; f < u; f++)
                                        (l = s[f]), e1.test(l.type || "") && !eN.access(l, "globalEval") && eu.contains(c, l) && (l.src ? eu._evalUrl && eu._evalUrl(l.src) : n(l.textContent.replace(eX, ""), c));
                            }
                            return e;
                        }
                        function N(e, t, n) {
                            for (var r, o = t ? eu.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
                                n || 1 !== r.nodeType || eu.cleanData(g(r)), r.parentNode && (n && eu.contains(r.ownerDocument, r) && v(g(r, "script")), r.parentNode.removeChild(r));
                            return e;
                        }
                        function S(e, t, n) {
                            var r,
                                o,
                                i,
                                a,
                                s = e.style;
                            return (
                                (n = n || eK(e)) &&
                                    ("" !== (a = n.getPropertyValue(t) || n[t]) || eu.contains(e.ownerDocument, e) || (a = eu.style(e, t)),
                                    !ea.pixelMarginRight() &&
                                        eU.test(a) &&
                                        e6.test(t) &&
                                        ((r = s.width), (o = s.minWidth), (i = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = o), (s.maxWidth = i))),
                                void 0 !== a ? a + "" : a
                            );
                        }
                        function q(e, t) {
                            return {
                                get: function () {
                                    return e() ? void delete this.get : (this.get = t).apply(this, arguments);
                                },
                            };
                        }
                        function A(e) {
                            if (e in eQ) return e;
                            for (var t = e[0].toUpperCase() + e.slice(1), n = eY.length; n--; ) if ((e = eY[n] + t) in eQ) return e;
                        }
                        function E(e, t, n) {
                            var r = eD.exec(t);
                            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
                        }
                        function D(e, t, n, r, o) {
                            var i,
                                a = 0;
                            for (i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; i < 4; i += 2)
                                "margin" === n && (a += eu.css(e, n + e0[i], !0, o)),
                                    r
                                        ? ("content" === n && (a -= eu.css(e, "padding" + e0[i], !0, o)), "margin" !== n && (a -= eu.css(e, "border" + e0[i] + "Width", !0, o)))
                                        : ((a += eu.css(e, "padding" + e0[i], !0, o)), "padding" !== n && (a += eu.css(e, "border" + e0[i] + "Width", !0, o)));
                            return a;
                        }
                        function L(e, t, n) {
                            var r,
                                o = !0,
                                i = eK(e),
                                a = "border-box" === eu.css(e, "boxSizing", !1, i);
                            if ((e.getClientRects().length && (r = e.getBoundingClientRect()[t]), r <= 0 || null == r)) {
                                if ((((r = S(e, t, i)) < 0 || null == r) && (r = e.style[t]), eU.test(r))) return r;
                                (o = a && (ea.boxSizingReliable() || r === e.style[t])), (r = parseFloat(r) || 0);
                            }
                            return r + D(e, t, n || (a ? "border" : "content"), o, i) + "px";
                        }
                        function O(e, t, n, r, o) {
                            return new O.prototype.init(e, t, n, r, o);
                        }
                        function H() {
                            eZ && (e.requestAnimationFrame(H), eu.fx.tick());
                        }
                        function P() {
                            return (
                                e.setTimeout(function () {
                                    eJ = void 0;
                                }),
                                (eJ = eu.now())
                            );
                        }
                        function F(e, t) {
                            var n,
                                r = 0,
                                o = { height: e };
                            for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = e0[r])] = o["padding" + n] = e;
                            return t && (o.opacity = o.width = e), o;
                        }
                        function M(e, t, n) {
                            for (var r, o = (I.tweeners[t] || []).concat(I.tweeners["*"]), i = 0, a = o.length; i < a; i++) if ((r = o[i].call(n, t, e))) return r;
                        }
                        function I(e, t, n) {
                            var r,
                                o,
                                i = 0,
                                a = I.prefilters.length,
                                s = eu.Deferred().always(function () {
                                    delete u.elem;
                                }),
                                u = function () {
                                    if (o) return !1;
                                    for (var t = eJ || P(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(i);
                                    return s.notifyWith(e, [l, i, n]), i < 1 && u ? n : (s.resolveWith(e, [l]), !1);
                                },
                                l = s.promise({
                                    elem: e,
                                    props: eu.extend({}, t),
                                    opts: eu.extend(!0, { specialEasing: {}, easing: eu.easing._default }, n),
                                    originalProperties: t,
                                    originalOptions: n,
                                    startTime: eJ || P(),
                                    duration: n.duration,
                                    tweens: [],
                                    createTween: function (t, n) {
                                        var r = eu.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                                        return l.tweens.push(r), r;
                                    },
                                    stop: function (t) {
                                        var n = 0,
                                            r = t ? l.tweens.length : 0;
                                        if (o) return this;
                                        for (o = !0; n < r; n++) l.tweens[n].run(1);
                                        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
                                    },
                                }),
                                c = l.props;
                            for (
                                (function e(t, n) {
                                    var r, o, i, a, s;
                                    for (r in t)
                                        if (((i = n[(o = eu.camelCase(r))]), (a = t[r]), eu.isArray(a) && ((i = a[1]), (a = t[r] = a[0])), r !== o && ((t[o] = a), delete t[r]), (s = eu.cssHooks[o]) && ("expand" in s)))
                                            for (r in ((a = s.expand(a)), delete t[o], a)) (r in t) || ((t[r] = a[r]), (n[r] = i));
                                        else n[o] = i;
                                })(c, l.opts.specialEasing);
                                i < a;
                                i++
                            )
                                if ((r = I.prefilters[i].call(l, e, c, l.opts))) return eu.isFunction(r.stop) && (eu._queueHooks(l.elem, l.opts.queue).stop = eu.proxy(r.stop, r)), r;
                            return (
                                eu.map(c, M, l),
                                eu.isFunction(l.opts.start) && l.opts.start.call(e, l),
                                eu.fx.timer(eu.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
                                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
                            );
                        }
                        function W(e) {
                            return (e.match(ew) || []).join(" ");
                        }
                        function B(e) {
                            return (e.getAttribute && e.getAttribute("class")) || "";
                        }
                        function R(e, t, n, r) {
                            var o;
                            if (eu.isArray(t))
                                eu.each(t, function (t, o) {
                                    n || th.test(e) ? r(e, o) : R(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r);
                                });
                            else if (n || "object" !== eu.type(t)) r(e, t);
                            else for (o in t) R(e + "[" + o + "]", t[o], n, r);
                        }
                        function z(e) {
                            return function (t, n) {
                                "string" != typeof t && ((n = t), (t = "*"));
                                var r,
                                    o = 0,
                                    i = t.toLowerCase().match(ew) || [];
                                if (eu.isFunction(n)) for (; (r = i[o++]); ) "+" === r[0] ? (e[(r = r.slice(1) || "*")] = e[r] || []).unshift(n) : (e[r] = e[r] || []).push(n);
                            };
                        }
                        function X(e, t, n, r) {
                            function o(s) {
                                var u;
                                return (
                                    (i[s] = !0),
                                    eu.each(e[s] || [], function (e, s) {
                                        var l = s(t, n, r);
                                        return "string" != typeof l || a || i[l] ? (a ? !(u = l) : void 0) : (t.dataTypes.unshift(l), o(l), !1);
                                    }),
                                    u
                                );
                            }
                            var i = {},
                                a = e === tC;
                            return o(t.dataTypes[0]) || (!i["*"] && o("*"));
                        }
                        function U(e, t) {
                            var n,
                                r,
                                o = eu.ajaxSettings.flatOptions || {};
                            for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                            return r && eu.extend(!0, e, r), e;
                        }
                        function K(e) {
                            return eu.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
                        }
                        var V = [],
                            G = e.document,
                            Y = Object.getPrototypeOf,
                            Q = V.slice,
                            J = V.concat,
                            Z = V.push,
                            ee = V.indexOf,
                            et = {},
                            en = et.toString,
                            er = et.hasOwnProperty,
                            eo = er.toString,
                            ei = eo.call(Object),
                            ea = {},
                            es = "3.1.1",
                            eu = function (e, t) {
                                return new eu.fn.init(e, t);
                            },
                            el = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                            ec = /^-ms-/,
                            ef = /-([a-z])/g,
                            ep = function (e, t) {
                                return t.toUpperCase();
                            };
                        (eu.fn = eu.prototype = {
                            jquery: es,
                            constructor: eu,
                            length: 0,
                            toArray: function () {
                                return Q.call(this);
                            },
                            get: function (e) {
                                return null == e ? Q.call(this) : e < 0 ? this[e + this.length] : this[e];
                            },
                            pushStack: function (e) {
                                var t = eu.merge(this.constructor(), e);
                                return (t.prevObject = this), t;
                            },
                            each: function (e) {
                                return eu.each(this, e);
                            },
                            map: function (e) {
                                return this.pushStack(
                                    eu.map(this, function (t, n) {
                                        return e.call(t, n, t);
                                    })
                                );
                            },
                            slice: function () {
                                return this.pushStack(Q.apply(this, arguments));
                            },
                            first: function () {
                                return this.eq(0);
                            },
                            last: function () {
                                return this.eq(-1);
                            },
                            eq: function (e) {
                                var t = this.length,
                                    n = +e + (e < 0 ? t : 0);
                                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                            },
                            end: function () {
                                return this.prevObject || this.constructor();
                            },
                            push: Z,
                            sort: V.sort,
                            splice: V.splice,
                        }),
                            (eu.extend = eu.fn.extend = function () {
                                var e,
                                    t,
                                    n,
                                    r,
                                    o,
                                    i,
                                    a = arguments[0] || {},
                                    s = 1,
                                    u = arguments.length,
                                    l = !1;
                                for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || eu.isFunction(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                                    if (null != (e = arguments[s]))
                                        for (t in e)
                                            (n = a[t]),
                                                a !== (r = e[t]) &&
                                                    (l && r && (eu.isPlainObject(r) || (o = eu.isArray(r)))
                                                        ? (o ? ((o = !1), (i = n && eu.isArray(n) ? n : [])) : (i = n && eu.isPlainObject(n) ? n : {}), (a[t] = eu.extend(l, i, r)))
                                                        : void 0 !== r && (a[t] = r));
                                return a;
                            }),
                            eu.extend({
                                expando: "jQuery" + (es + Math.random()).replace(/\D/g, ""),
                                isReady: !0,
                                error: function (e) {
                                    throw Error(e);
                                },
                                noop: function () {},
                                isFunction: function (e) {
                                    return "function" === eu.type(e);
                                },
                                isArray: Array.isArray,
                                isWindow: function (e) {
                                    return null != e && e === e.window;
                                },
                                isNumeric: function (e) {
                                    var t = eu.type(e);
                                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                                },
                                isPlainObject: function (e) {
                                    var t, n;
                                    return !(!e || "[object Object]" !== en.call(e)) && (!(t = Y(e)) || ("function" == typeof (n = er.call(t, "constructor") && t.constructor) && eo.call(n) === ei));
                                },
                                isEmptyObject: function (e) {
                                    var t;
                                    for (t in e) return !1;
                                    return !0;
                                },
                                type: function (e) {
                                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[en.call(e)] || "object" : typeof e;
                                },
                                globalEval: function (e) {
                                    n(e);
                                },
                                camelCase: function (e) {
                                    return e.replace(ec, "ms-").replace(ef, ep);
                                },
                                nodeName: function (e, t) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                                },
                                each: function (e, t) {
                                    var n,
                                        o = 0;
                                    if (r(e)) for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
                                    else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
                                    return e;
                                },
                                trim: function (e) {
                                    return null == e ? "" : (e + "").replace(el, "");
                                },
                                makeArray: function (e, t) {
                                    var n = t || [];
                                    return null != e && (r(Object(e)) ? eu.merge(n, "string" == typeof e ? [e] : e) : Z.call(n, e)), n;
                                },
                                inArray: function (e, t, n) {
                                    return null == t ? -1 : ee.call(t, e, n);
                                },
                                merge: function (e, t) {
                                    for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                                    return (e.length = o), e;
                                },
                                grep: function (e, t, n) {
                                    for (var r, o = [], i = 0, a = e.length, s = !n; i < a; i++) (r = !t(e[i], i)) !== s && o.push(e[i]);
                                    return o;
                                },
                                map: function (e, t, n) {
                                    var o,
                                        i,
                                        a = 0,
                                        s = [];
                                    if (r(e)) for (o = e.length; a < o; a++) null != (i = t(e[a], a, n)) && s.push(i);
                                    else for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
                                    return J.apply([], s);
                                },
                                guid: 1,
                                proxy: function (e, t) {
                                    var n, r, o;
                                    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), eu.isFunction(e)))
                                        return (
                                            (r = Q.call(arguments, 2)),
                                            ((o = function () {
                                                return e.apply(t || this, r.concat(Q.call(arguments)));
                                            }).guid = e.guid = e.guid || eu.guid++),
                                            o
                                        );
                                },
                                now: Date.now,
                                support: ea,
                            }),
                            "function" == typeof Symbol && (eu.fn[Symbol.iterator] = V[Symbol.iterator]),
                            eu.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                                et["[object " + t + "]"] = t.toLowerCase();
                            });
                        var eh = (function (e) {
                            function t(e, t, n, r) {
                                var o,
                                    i,
                                    a,
                                    s,
                                    u,
                                    l,
                                    c,
                                    p = t && t.ownerDocument,
                                    d = t ? t.nodeType : 9;
                                if (((n = n || []), "string" != typeof e || !e || (1 !== d && 9 !== d && 11 !== d))) return n;
                                if (!r && ((t ? t.ownerDocument || t : M) !== A && q(t), (t = t || A), D)) {
                                    if (11 !== d && (u = eg.exec(e))) {
                                        if ((o = u[1])) {
                                            if (9 === d) {
                                                if (!(a = t.getElementById(o))) return n;
                                                if (a.id === o) return n.push(a), n;
                                            } else if (p && (a = p.getElementById(o)) && P(t, a) && a.id === o) return n.push(a), n;
                                        } else {
                                            if (u[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                                            if ((o = u[3]) && _.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(o)), n;
                                        }
                                    }
                                    if (_.qsa && !z[e + " "] && (!L || !L.test(e))) {
                                        if (1 !== d) (p = t), (c = e);
                                        else if ("object" !== t.nodeName.toLowerCase()) {
                                            for ((s = t.getAttribute("id")) ? (s = s.replace(e$, e_)) : t.setAttribute("id", (s = F)), i = (l = C(e)).length; i--; ) l[i] = "#" + s + " " + h(l[i]);
                                            (c = l.join(",")), (p = (ev.test(e) && f(t.parentNode)) || t);
                                        }
                                        if (c)
                                            try {
                                                return Y.apply(n, p.querySelectorAll(c)), n;
                                            } catch (g) {
                                            } finally {
                                                s === F && t.removeAttribute("id");
                                            }
                                    }
                                }
                                return T(e.replace(ei, "$1"), t, n, r);
                            }
                            function n() {
                                function e(n, r) {
                                    return t.push(n + " ") > b.cacheLength && delete e[t.shift()], (e[n + " "] = r);
                                }
                                var t = [];
                                return e;
                            }
                            function r(e) {
                                return (e[F] = !0), e;
                            }
                            function o(e) {
                                var t = A.createElement("fieldset");
                                try {
                                    return !!e(t);
                                } catch (n) {
                                    return !1;
                                } finally {
                                    t.parentNode && t.parentNode.removeChild(t), (t = null);
                                }
                            }
                            function i(e, t) {
                                for (var n = e.split("|"), r = n.length; r--; ) b.attrHandle[n[r]] = t;
                            }
                            function a(e, t) {
                                var n = t && e,
                                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                                if (r) return r;
                                if (n) {
                                    for (; (n = n.nextSibling); ) if (n === t) return -1;
                                }
                                return e ? 1 : -1;
                            }
                            function s(e) {
                                return function (t) {
                                    return "input" === t.nodeName.toLowerCase() && t.type === e;
                                };
                            }
                            function u(e) {
                                return function (t) {
                                    var n = t.nodeName.toLowerCase();
                                    return ("input" === n || "button" === n) && t.type === e;
                                };
                            }
                            function l(e) {
                                return function (t) {
                                    return "form" in t
                                        ? t.parentNode && !1 === t.disabled
                                            ? "label" in t
                                                ? "label" in t.parentNode
                                                    ? t.parentNode.disabled === e
                                                    : t.disabled === e
                                                : t.isDisabled === e || (!e !== t.isDisabled && ex(t) === e)
                                            : t.disabled === e
                                        : "label" in t && t.disabled === e;
                                };
                            }
                            function c(e) {
                                return r(function (t) {
                                    return (
                                        (t = +t),
                                        r(function (n, r) {
                                            for (var o, i = e([], n.length, t), a = i.length; a--; ) n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                                        })
                                    );
                                });
                            }
                            function f(e) {
                                return e && void 0 !== e.getElementsByTagName && e;
                            }
                            function p() {}
                            function h(e) {
                                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                                return r;
                            }
                            function d(e, t, n) {
                                var r = t.dir,
                                    o = t.next,
                                    i = o || r,
                                    a = n && "parentNode" === i,
                                    s = W++;
                                return t.first
                                    ? function (t, n, o) {
                                          for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, o);
                                          return !1;
                                      }
                                    : function (t, n, u) {
                                          var l,
                                              c,
                                              f,
                                              p = [I, s];
                                          if (u) {
                                              for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                                          } else
                                              for (; (t = t[r]); )
                                                  if (1 === t.nodeType || a) {
                                                      if (((c = (f = t[F] || (t[F] = {}))[t.uniqueID] || (f[t.uniqueID] = {})), o && o === t.nodeName.toLowerCase())) t = t[r] || t;
                                                      else {
                                                          if ((l = c[i]) && l[0] === I && l[1] === s) return (p[2] = l[2]);
                                                          if (((c[i] = p), (p[2] = e(t, n, u)))) return !0;
                                                      }
                                                  }
                                          return !1;
                                      };
                            }
                            function g(e) {
                                return e.length > 1
                                    ? function (t, n, r) {
                                          for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                                          return !0;
                                      }
                                    : e[0];
                            }
                            function v(e, t, n, r, o) {
                                for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (i = e[s]) && ((n && !n(i, r, o)) || (a.push(i), l && t.push(s)));
                                return a;
                            }
                            function m(e, n, o, i, a, s) {
                                return (
                                    i && !i[F] && (i = m(i)),
                                    a && !a[F] && (a = m(a, s)),
                                    r(function (r, s, u, l) {
                                        var c,
                                            f,
                                            p,
                                            h = [],
                                            d = [],
                                            g = s.length,
                                            m =
                                                r ||
                                                (function e(n, r, o) {
                                                    for (var i = 0, a = r.length; i < a; i++) t(n, r[i], o);
                                                    return o;
                                                })(n || "*", u.nodeType ? [u] : u, []),
                                            y = e && (r || !n) ? v(m, h, e, u, l) : m,
                                            $ = o ? (a || (r ? e : g || i) ? [] : s) : y;
                                        if ((o && o(y, $, u, l), i)) for (c = v($, d), i(c, [], u, l), f = c.length; f--; ) (p = c[f]) && ($[d[f]] = !(y[d[f]] = p));
                                        if (r) {
                                            if (a || e) {
                                                if (a) {
                                                    for (c = [], f = $.length; f--; ) (p = $[f]) && c.push((y[f] = p));
                                                    a(null, ($ = []), c, l);
                                                }
                                                for (f = $.length; f--; ) (p = $[f]) && (c = a ? J(r, p) : h[f]) > -1 && (r[c] = !(s[c] = p));
                                            }
                                        } else ($ = v($ === s ? $.splice(g, $.length) : $)), a ? a(null, s, $, l) : Y.apply(s, $);
                                    })
                                );
                            }
                            function y(e) {
                                for (
                                    var t,
                                        n,
                                        r,
                                        o = e.length,
                                        i = b.relative[e[0].type],
                                        a = i || b.relative[" "],
                                        s = i ? 1 : 0,
                                        u = d(
                                            function (e) {
                                                return e === t;
                                            },
                                            a,
                                            !0
                                        ),
                                        l = d(
                                            function (e) {
                                                return J(t, e) > -1;
                                            },
                                            a,
                                            !0
                                        ),
                                        c = [
                                            function (e, n, r) {
                                                var o = (!i && (r || n !== j)) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                                                return (t = null), o;
                                            },
                                        ];
                                    s < o;
                                    s++
                                )
                                    if ((n = b.relative[e[s].type])) c = [d(g(c), n)];
                                    else {
                                        if ((n = b.filter[e[s].type].apply(null, e[s].matches))[F]) {
                                            for (r = ++s; r < o && !b.relative[e[r].type]; r++);
                                            return m(
                                                s > 1 && g(c),
                                                s > 1 && h(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ei, "$1"),
                                                n,
                                                s < r && y(e.slice(s, r)),
                                                r < o && y((e = e.slice(r))),
                                                r < o && h(e)
                                            );
                                        }
                                        c.push(n);
                                    }
                                return g(c);
                            }
                            var $,
                                _,
                                b,
                                x,
                                w,
                                C,
                                k,
                                T,
                                j,
                                N,
                                S,
                                q,
                                A,
                                E,
                                D,
                                L,
                                O,
                                H,
                                P,
                                F = "sizzle" + 1 * new Date(),
                                M = e.document,
                                I = 0,
                                W = 0,
                                B = n(),
                                R = n(),
                                z = n(),
                                X = function (e, t) {
                                    return e === t && (S = !0), 0;
                                },
                                U = {}.hasOwnProperty,
                                K = [],
                                V = K.pop,
                                G = K.push,
                                Y = K.push,
                                Q = K.slice,
                                J = function (e, t) {
                                    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                                    return -1;
                                },
                                Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                                ee = "[\\x20\\t\\r\\n\\f]",
                                et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                                en = "\\[" + ee + "*(" + et + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + ee + "*\\]",
                                er = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + en + ")*)|.*)\\)|)",
                                eo = RegExp(ee + "+", "g"),
                                ei = RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                                ea = RegExp("^" + ee + "*," + ee + "*"),
                                es = RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                                eu = RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                                el = RegExp(er),
                                ec = RegExp("^" + et + "$"),
                                ef = {
                                    ID: RegExp("^#(" + et + ")"),
                                    CLASS: RegExp("^\\.(" + et + ")"),
                                    TAG: RegExp("^(" + et + "|[*])"),
                                    ATTR: RegExp("^" + en),
                                    PSEUDO: RegExp("^" + er),
                                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                                    bool: RegExp("^(?:" + Z + ")$", "i"),
                                    needsContext: RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i"),
                                },
                                ep = /^(?:input|select|textarea|button)$/i,
                                eh = /^h\d$/i,
                                ed = /^[^{]+\{\s*\[native \w/,
                                eg = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                ev = /[+~]/,
                                em = RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                                ey = function (e, t, n) {
                                    var r = "0x" + t - 65536;
                                    return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
                                },
                                e$ = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                                e_ = function (e, t) {
                                    return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                                },
                                eb = function () {
                                    q();
                                },
                                ex = d(
                                    function (e) {
                                        return !0 === e.disabled && ("form" in e || "label" in e);
                                    },
                                    { dir: "parentNode", next: "legend" }
                                );
                            try {
                                Y.apply((K = Q.call(M.childNodes)), M.childNodes), K[M.childNodes.length].nodeType;
                            } catch (ew) {
                                Y = {
                                    apply: K.length
                                        ? function (e, t) {
                                              G.apply(e, Q.call(t));
                                          }
                                        : function (e, t) {
                                              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                                              e.length = n - 1;
                                          },
                                };
                            }
                            for ($ in ((_ = t.support = {}),
                            (w = t.isXML = function (e) {
                                var t = e && (e.ownerDocument || e).documentElement;
                                return !!t && "HTML" !== t.nodeName;
                            }),
                            (q = t.setDocument = function (e) {
                                var t,
                                    n,
                                    r = e ? e.ownerDocument || e : M;
                                return (
                                    r !== A &&
                                        9 === r.nodeType &&
                                        r.documentElement &&
                                        ((E = (A = r).documentElement),
                                        (D = !w(A)),
                                        M !== A && (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", eb, !1) : n.attachEvent && n.attachEvent("onunload", eb)),
                                        (_.attributes = o(function (e) {
                                            return (e.className = "i"), !e.getAttribute("className");
                                        })),
                                        (_.getElementsByTagName = o(function (e) {
                                            return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length;
                                        })),
                                        (_.getElementsByClassName = ed.test(A.getElementsByClassName)),
                                        (_.getById = o(function (e) {
                                            return (E.appendChild(e).id = F), !A.getElementsByName || !A.getElementsByName(F).length;
                                        })),
                                        _.getById
                                            ? ((b.filter.ID = function (e) {
                                                  var t = e.replace(em, ey);
                                                  return function (e) {
                                                      return e.getAttribute("id") === t;
                                                  };
                                              }),
                                              (b.find.ID = function (e, t) {
                                                  if (void 0 !== t.getElementById && D) {
                                                      var n = t.getElementById(e);
                                                      return n ? [n] : [];
                                                  }
                                              }))
                                            : ((b.filter.ID = function (e) {
                                                  var t = e.replace(em, ey);
                                                  return function (e) {
                                                      var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                                      return n && n.value === t;
                                                  };
                                              }),
                                              (b.find.ID = function (e, t) {
                                                  if (void 0 !== t.getElementById && D) {
                                                      var n,
                                                          r,
                                                          o,
                                                          i = t.getElementById(e);
                                                      if (i) {
                                                          if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                                          for (o = t.getElementsByName(e), r = 0; (i = o[r++]); ) if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                                      }
                                                      return [];
                                                  }
                                              })),
                                        (b.find.TAG = _.getElementsByTagName
                                            ? function (e, t) {
                                                  return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0;
                                              }
                                            : function (e, t) {
                                                  var n,
                                                      r = [],
                                                      o = 0,
                                                      i = t.getElementsByTagName(e);
                                                  if ("*" === e) {
                                                      for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                                                      return r;
                                                  }
                                                  return i;
                                              }),
                                        (b.find.CLASS =
                                            _.getElementsByClassName &&
                                            function (e, t) {
                                                if (void 0 !== t.getElementsByClassName && D) return t.getElementsByClassName(e);
                                            }),
                                        (O = []),
                                        (L = []),
                                        (_.qsa = ed.test(A.querySelectorAll)) &&
                                            (o(function (e) {
                                                (E.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                                    e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ee + "*(?:''|\"\")"),
                                                    e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:value|" + Z + ")"),
                                                    e.querySelectorAll("[id~=" + F + "-]").length || L.push("~="),
                                                    e.querySelectorAll(":checked").length || L.push(":checked"),
                                                    e.querySelectorAll("a#" + F + "+*").length || L.push(".#.+[+~]");
                                            }),
                                            o(function (e) {
                                                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                                var t = A.createElement("input");
                                                t.setAttribute("type", "hidden"),
                                                    e.appendChild(t).setAttribute("name", "D"),
                                                    e.querySelectorAll("[name=d]").length && L.push("name" + ee + "*[*^$|!~]?="),
                                                    2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"),
                                                    (E.appendChild(e).disabled = !0),
                                                    2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"),
                                                    e.querySelectorAll("*,:x"),
                                                    L.push(",.*:");
                                            })),
                                        (_.matchesSelector = ed.test((H = E.matches || E.webkitMatchesSelector || E.mozMatchesSelector || E.oMatchesSelector || E.msMatchesSelector))) &&
                                            o(function (e) {
                                                (_.disconnectedMatch = H.call(e, "*")), H.call(e, "[s!='']:x"), O.push("!=", er);
                                            }),
                                        (L = L.length && RegExp(L.join("|"))),
                                        (O = O.length && RegExp(O.join("|"))),
                                        (P =
                                            (t = ed.test(E.compareDocumentPosition)) || ed.test(E.contains)
                                                ? function (e, t) {
                                                      var n = 9 === e.nodeType ? e.documentElement : e,
                                                          r = t && t.parentNode;
                                                      return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                                  }
                                                : function (e, t) {
                                                      if (t) {
                                                          for (; (t = t.parentNode); ) if (t === e) return !0;
                                                      }
                                                      return !1;
                                                  }),
                                        (X = t
                                            ? function (e, t) {
                                                  if (e === t) return (S = !0), 0;
                                                  var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                                  return (
                                                      n ||
                                                      (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!_.sortDetached && t.compareDocumentPosition(e) === n)
                                                          ? e === A || (e.ownerDocument === M && P(M, e))
                                                              ? -1
                                                              : t === A || (t.ownerDocument === M && P(M, t))
                                                              ? 1
                                                              : N
                                                              ? J(N, e) - J(N, t)
                                                              : 0
                                                          : 4 & n
                                                          ? -1
                                                          : 1)
                                                  );
                                              }
                                            : function (e, t) {
                                                  if (e === t) return (S = !0), 0;
                                                  var n,
                                                      r = 0,
                                                      o = e.parentNode,
                                                      i = t.parentNode,
                                                      s = [e],
                                                      u = [t];
                                                  if (!o || !i) return e === A ? -1 : t === A ? 1 : o ? -1 : i ? 1 : N ? J(N, e) - J(N, t) : 0;
                                                  if (o === i) return a(e, t);
                                                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                                                  for (n = t; (n = n.parentNode); ) u.unshift(n);
                                                  for (; s[r] === u[r]; ) r++;
                                                  return r ? a(s[r], u[r]) : s[r] === M ? -1 : u[r] === M ? 1 : 0;
                                              })),
                                    A
                                );
                            }),
                            (t.matches = function (e, n) {
                                return t(e, null, null, n);
                            }),
                            (t.matchesSelector = function (e, n) {
                                if (((e.ownerDocument || e) !== A && q(e), (n = n.replace(eu, "='$1']")), _.matchesSelector && D && !z[n + " "] && (!O || !O.test(n)) && (!L || !L.test(n))))
                                    try {
                                        var r = H.call(e, n);
                                        if (r || _.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                                    } catch (o) {}
                                return t(n, A, null, [e]).length > 0;
                            }),
                            (t.contains = function (e, t) {
                                return (e.ownerDocument || e) !== A && q(e), P(e, t);
                            }),
                            (t.attr = function (e, t) {
                                (e.ownerDocument || e) !== A && q(e);
                                var n = b.attrHandle[t.toLowerCase()],
                                    r = n && U.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
                                return void 0 !== r ? r : _.attributes || !D ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                            }),
                            (t.escape = function (e) {
                                return (e + "").replace(e$, e_);
                            }),
                            (t.error = function (e) {
                                throw Error("Syntax error, unrecognized expression: " + e);
                            }),
                            (t.uniqueSort = function (e) {
                                var t,
                                    n = [],
                                    r = 0,
                                    o = 0;
                                if (((S = !_.detectDuplicates), (N = !_.sortStable && e.slice(0)), e.sort(X), S)) {
                                    for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
                                    for (; r--; ) e.splice(n[r], 1);
                                }
                                return (N = null), e;
                            }),
                            (x = t.getText = function (e) {
                                var t,
                                    n = "",
                                    r = 0,
                                    o = e.nodeType;
                                if (o) {
                                    if (1 === o || 9 === o || 11 === o) {
                                        if ("string" == typeof e.textContent) return e.textContent;
                                        for (e = e.firstChild; e; e = e.nextSibling) n += x(e);
                                    } else if (3 === o || 4 === o) return e.nodeValue;
                                } else for (; (t = e[r++]); ) n += x(t);
                                return n;
                            }),
                            ((b = t.selectors = {
                                cacheLength: 50,
                                createPseudo: r,
                                match: ef,
                                attrHandle: {},
                                find: {},
                                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                                preFilter: {
                                    ATTR: function (e) {
                                        return (e[1] = e[1].replace(em, ey)), (e[3] = (e[3] || e[4] || e[5] || "").replace(em, ey)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                                    },
                                    CHILD: function (e) {
                                        return (
                                            (e[1] = e[1].toLowerCase()),
                                            "nth" === e[1].slice(0, 3)
                                                ? (e[3] || t.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                                : e[3] && t.error(e[0]),
                                            e
                                        );
                                    },
                                    PSEUDO: function (e) {
                                        var t,
                                            n = !e[6] && e[2];
                                        return ef.CHILD.test(e[0])
                                            ? null
                                            : (e[3] ? (e[2] = e[4] || e[5] || "") : n && el.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                                    },
                                },
                                filter: {
                                    TAG: function (e) {
                                        var t = e.replace(em, ey).toLowerCase();
                                        return "*" === e
                                            ? function () {
                                                  return !0;
                                              }
                                            : function (e) {
                                                  return e.nodeName && e.nodeName.toLowerCase() === t;
                                              };
                                    },
                                    CLASS: function (e) {
                                        var t = B[e + " "];
                                        return (
                                            t ||
                                            ((t = RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")),
                                            B(e, function (e) {
                                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                            }))
                                        );
                                    },
                                    ATTR: function (e, n, r) {
                                        return function (o) {
                                            var i = t.attr(o, e);
                                            return null == i
                                                ? "!=" === n
                                                : !n ||
                                                      ((i += ""),
                                                      "=" === n
                                                          ? i === r
                                                          : "!=" === n
                                                          ? i !== r
                                                          : "^=" === n
                                                          ? r && 0 === i.indexOf(r)
                                                          : "*=" === n
                                                          ? r && i.indexOf(r) > -1
                                                          : "$=" === n
                                                          ? r && i.slice(-r.length) === r
                                                          : "~=" === n
                                                          ? (" " + i.replace(eo, " ") + " ").indexOf(r) > -1
                                                          : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"));
                                        };
                                    },
                                    CHILD: function (e, t, n, r, o) {
                                        var i = "nth" !== e.slice(0, 3),
                                            a = "last" !== e.slice(-4),
                                            s = "of-type" === t;
                                        return 1 === r && 0 === o
                                            ? function (e) {
                                                  return !!e.parentNode;
                                              }
                                            : function (t, n, u) {
                                                  var l,
                                                      c,
                                                      f,
                                                      p,
                                                      h,
                                                      d,
                                                      g = i !== a ? "nextSibling" : "previousSibling",
                                                      v = t.parentNode,
                                                      m = s && t.nodeName.toLowerCase(),
                                                      y = !u && !s,
                                                      $ = !1;
                                                  if (v) {
                                                      if (i) {
                                                          for (; g; ) {
                                                              for (p = t; (p = p[g]); ) if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                                              d = g = "only" === e && !d && "nextSibling";
                                                          }
                                                          return !0;
                                                      }
                                                      if (((d = [a ? v.firstChild : v.lastChild]), a && y)) {
                                                          for (
                                                              $ = (h = (l = (c = (f = (p = v)[F] || (p[F] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === I && l[1]) && l[2], p = h && v.childNodes[h];
                                                              (p = (++h && p && p[g]) || ($ = h = 0) || d.pop());

                                                          )
                                                              if (1 === p.nodeType && ++$ && p === t) {
                                                                  c[e] = [I, h, $];
                                                                  break;
                                                              }
                                                      } else if ((y && ($ = h = (l = (c = (f = (p = t)[F] || (p[F] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === I && l[1]), !1 === $))
                                                          for (
                                                              ;
                                                              (p = (++h && p && p[g]) || ($ = h = 0) || d.pop()) &&
                                                              ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++$ || (y && ((c = (f = p[F] || (p[F] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [I, $]), p !== t));

                                                          );
                                                      return ($ -= o) === r || ($ % r == 0 && $ / r >= 0);
                                                  }
                                              };
                                    },
                                    PSEUDO: function (e, n) {
                                        var o,
                                            i = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                        return i[F]
                                            ? i(n)
                                            : i.length > 1
                                            ? ((o = [e, e, "", n]),
                                              b.setFilters.hasOwnProperty(e.toLowerCase())
                                                  ? r(function (e, t) {
                                                        for (var r, o = i(e, n), a = o.length; a--; ) e[(r = J(e, o[a]))] = !(t[r] = o[a]);
                                                    })
                                                  : function (e) {
                                                        return i(e, 0, o);
                                                    })
                                            : i;
                                    },
                                },
                                pseudos: {
                                    not: r(function (e) {
                                        var t = [],
                                            n = [],
                                            o = k(e.replace(ei, "$1"));
                                        return o[F]
                                            ? r(function (e, t, n, r) {
                                                  for (var i, a = o(e, null, r, []), s = e.length; s--; ) (i = a[s]) && (e[s] = !(t[s] = i));
                                              })
                                            : function (e, r, i) {
                                                  return (t[0] = e), o(t, null, i, n), (t[0] = null), !n.pop();
                                              };
                                    }),
                                    has: r(function (e) {
                                        return function (n) {
                                            return t(e, n).length > 0;
                                        };
                                    }),
                                    contains: r(function (e) {
                                        return (
                                            (e = e.replace(em, ey)),
                                            function (t) {
                                                return (t.textContent || t.innerText || x(t)).indexOf(e) > -1;
                                            }
                                        );
                                    }),
                                    lang: r(function (e) {
                                        return (
                                            ec.test(e || "") || t.error("unsupported lang: " + e),
                                            (e = e.replace(em, ey).toLowerCase()),
                                            function (t) {
                                                var n;
                                                do if ((n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                                while ((t = t.parentNode) && 1 === t.nodeType);
                                                return !1;
                                            }
                                        );
                                    }),
                                    target: function (t) {
                                        var n = e.location && e.location.hash;
                                        return n && n.slice(1) === t.id;
                                    },
                                    root: function (e) {
                                        return e === E;
                                    },
                                    focus: function (e) {
                                        return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                                    },
                                    enabled: l(!1),
                                    disabled: l(!0),
                                    checked: function (e) {
                                        var t = e.nodeName.toLowerCase();
                                        return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                                    },
                                    selected: function (e) {
                                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                                    },
                                    empty: function (e) {
                                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                        return !0;
                                    },
                                    parent: function (e) {
                                        return !b.pseudos.empty(e);
                                    },
                                    header: function (e) {
                                        return eh.test(e.nodeName);
                                    },
                                    input: function (e) {
                                        return ep.test(e.nodeName);
                                    },
                                    button: function (e) {
                                        var t = e.nodeName.toLowerCase();
                                        return ("input" === t && "button" === e.type) || "button" === t;
                                    },
                                    text: function (e) {
                                        var t;
                                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                                    },
                                    first: c(function () {
                                        return [0];
                                    }),
                                    last: c(function (e, t) {
                                        return [t - 1];
                                    }),
                                    eq: c(function (e, t, n) {
                                        return [n < 0 ? n + t : n];
                                    }),
                                    even: c(function (e, t) {
                                        for (var n = 0; n < t; n += 2) e.push(n);
                                        return e;
                                    }),
                                    odd: c(function (e, t) {
                                        for (var n = 1; n < t; n += 2) e.push(n);
                                        return e;
                                    }),
                                    lt: c(function (e, t, n) {
                                        for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                                        return e;
                                    }),
                                    gt: c(function (e, t, n) {
                                        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                                        return e;
                                    }),
                                },
                            }).pseudos.nth = b.pseudos.eq),
                            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                                b.pseudos[$] = s($);
                            for ($ in { submit: !0, reset: !0 }) b.pseudos[$] = u($);
                            return (
                                (p.prototype = b.filters = b.pseudos),
                                (b.setFilters = new p()),
                                (C = t.tokenize = function (e, n) {
                                    var r,
                                        o,
                                        i,
                                        a,
                                        s,
                                        u,
                                        l,
                                        c = R[e + " "];
                                    if (c) return n ? 0 : c.slice(0);
                                    for (s = e, u = [], l = b.preFilter; s; ) {
                                        for (a in ((!r || (o = ea.exec(s))) && (o && (s = s.slice(o[0].length) || s), u.push((i = []))),
                                        (r = !1),
                                        (o = es.exec(s)) && ((r = o.shift()), i.push({ value: r, type: o[0].replace(ei, " ") }), (s = s.slice(r.length))),
                                        b.filter))
                                            (o = ef[a].exec(s)) && (!l[a] || (o = l[a](o))) && ((r = o.shift()), i.push({ value: r, type: a, matches: o }), (s = s.slice(r.length)));
                                        if (!r) break;
                                    }
                                    return n ? s.length : s ? t.error(e) : R(e, u).slice(0);
                                }),
                                (k = t.compile = function (e, n) {
                                    var o,
                                        i,
                                        a,
                                        s,
                                        u,
                                        l,
                                        c = [],
                                        f = [],
                                        p = z[e + " "];
                                    if (!p) {
                                        for (n || (n = C(e)), l = n.length; l--; ) (p = y(n[l]))[F] ? c.push(p) : f.push(p);
                                        (p = z(
                                            e,
                                            ((o = f),
                                            (a = (i = c).length > 0),
                                            (s = o.length > 0),
                                            (u = function (e, n, r, u, l) {
                                                var c,
                                                    f,
                                                    p,
                                                    h = 0,
                                                    d = "0",
                                                    g = e && [],
                                                    m = [],
                                                    y = j,
                                                    $ = e || (s && b.find.TAG("*", l)),
                                                    _ = (I += null == y ? 1 : Math.random() || 0.1),
                                                    x = $.length;
                                                for (l && (j = n === A || n || l); d !== x && null != (c = $[d]); d++) {
                                                    if (s && c) {
                                                        for (f = 0, n || c.ownerDocument === A || (q(c), (r = !D)); (p = o[f++]); )
                                                            if (p(c, n || A, r)) {
                                                                u.push(c);
                                                                break;
                                                            }
                                                        l && (I = _);
                                                    }
                                                    a && ((c = !p && c) && h--, e && g.push(c));
                                                }
                                                if (((h += d), a && d !== h)) {
                                                    for (f = 0; (p = i[f++]); ) p(g, m, n, r);
                                                    if (e) {
                                                        if (h > 0) for (; d--; ) g[d] || m[d] || (m[d] = V.call(u));
                                                        m = v(m);
                                                    }
                                                    Y.apply(u, m), l && !e && m.length > 0 && h + i.length > 1 && t.uniqueSort(u);
                                                }
                                                return l && ((I = _), (j = y)), g;
                                            }),
                                            a ? r(u) : u)
                                        )).selector = e;
                                    }
                                    return p;
                                }),
                                (T = t.select = function (e, t, n, r) {
                                    var o,
                                        i,
                                        a,
                                        s,
                                        u,
                                        l = "function" == typeof e && e,
                                        c = !r && C((e = l.selector || e));
                                    if (((n = n || []), 1 === c.length)) {
                                        if ((i = c[0] = c[0].slice(0)).length > 2 && "ID" === (a = i[0]).type && 9 === t.nodeType && D && b.relative[i[1].type]) {
                                            if (!(t = (b.find.ID(a.matches[0].replace(em, ey), t) || [])[0])) return n;
                                            l && (t = t.parentNode), (e = e.slice(i.shift().value.length));
                                        }
                                        for (o = ef.needsContext.test(e) ? 0 : i.length; o-- && ((a = i[o]), !b.relative[(s = a.type)]); )
                                            if ((u = b.find[s]) && (r = u(a.matches[0].replace(em, ey), (ev.test(i[0].type) && f(t.parentNode)) || t))) {
                                                if ((i.splice(o, 1), !(e = r.length && h(i)))) return Y.apply(n, r), n;
                                                break;
                                            }
                                    }
                                    return (l || k(e, c))(r, t, !D, n, !t || (ev.test(e) && f(t.parentNode)) || t), n;
                                }),
                                (_.sortStable = F.split("").sort(X).join("") === F),
                                (_.detectDuplicates = !!S),
                                q(),
                                (_.sortDetached = o(function (e) {
                                    return 1 & e.compareDocumentPosition(A.createElement("fieldset"));
                                })),
                                o(function (e) {
                                    return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                                }) ||
                                    i("type|href|height|width", function (e, t, n) {
                                        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                                    }),
                                (_.attributes &&
                                    o(function (e) {
                                        return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                                    })) ||
                                    i("value", function (e, t, n) {
                                        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                                    }),
                                o(function (e) {
                                    return null == e.getAttribute("disabled");
                                }) ||
                                    i(Z, function (e, t, n) {
                                        var r;
                                        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                                    }),
                                t
                            );
                        })(e);
                        (eu.find = eh),
                            (eu.expr = eh.selectors),
                            (eu.expr[":"] = eu.expr.pseudos),
                            (eu.uniqueSort = eu.unique = eh.uniqueSort),
                            (eu.text = eh.getText),
                            (eu.isXMLDoc = eh.isXML),
                            (eu.contains = eh.contains),
                            (eu.escapeSelector = eh.escape);
                        var ed = function (e, t, n) {
                                for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                                    if (1 === e.nodeType) {
                                        if (o && eu(e).is(n)) break;
                                        r.push(e);
                                    }
                                return r;
                            },
                            eg = function (e, t) {
                                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                                return n;
                            },
                            ev = eu.expr.match.needsContext,
                            em = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
                            ey = /^.[^:#\[\.,]*$/;
                        (eu.filter = function (e, t, n) {
                            var r = t[0];
                            return (
                                n && (e = ":not(" + e + ")"),
                                1 === t.length && 1 === r.nodeType
                                    ? eu.find.matchesSelector(r, e)
                                        ? [r]
                                        : []
                                    : eu.find.matches(
                                          e,
                                          eu.grep(t, function (e) {
                                              return 1 === e.nodeType;
                                          })
                                      )
                            );
                        }),
                            eu.fn.extend({
                                find: function (e) {
                                    var t,
                                        n,
                                        r = this.length,
                                        o = this;
                                    if ("string" != typeof e)
                                        return this.pushStack(
                                            eu(e).filter(function () {
                                                for (t = 0; t < r; t++) if (eu.contains(o[t], this)) return !0;
                                            })
                                        );
                                    for (n = this.pushStack([]), t = 0; t < r; t++) eu.find(e, o[t], n);
                                    return r > 1 ? eu.uniqueSort(n) : n;
                                },
                                filter: function (e) {
                                    return this.pushStack(o(this, e || [], !1));
                                },
                                not: function (e) {
                                    return this.pushStack(o(this, e || [], !0));
                                },
                                is: function (e) {
                                    return !!o(this, "string" == typeof e && ev.test(e) ? eu(e) : e || [], !1).length;
                                },
                            });
                        var e$,
                            e_ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                        ((eu.fn.init = function (e, t, n) {
                            var r, o;
                            if (!e) return this;
                            if (((n = n || e$), "string" == typeof e)) {
                                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : e_.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                                if (r[1]) {
                                    if (((t = t instanceof eu ? t[0] : t), eu.merge(this, eu.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), em.test(r[1]) && eu.isPlainObject(t)))
                                        for (r in t) eu.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                                    return this;
                                }
                                return (o = G.getElementById(r[2])) && ((this[0] = o), (this.length = 1)), this;
                            }
                            return e.nodeType ? ((this[0] = e), (this.length = 1), this) : eu.isFunction(e) ? (void 0 !== n.ready ? n.ready(e) : e(eu)) : eu.makeArray(e, this);
                        }).prototype = eu.fn),
                            (e$ = eu(G));
                        var eb = /^(?:parents|prev(?:Until|All))/,
                            ex = { children: !0, contents: !0, next: !0, prev: !0 };
                        eu.fn.extend({
                            has: function (e) {
                                var t = eu(e, this),
                                    n = t.length;
                                return this.filter(function () {
                                    for (var e = 0; e < n; e++) if (eu.contains(this, t[e])) return !0;
                                });
                            },
                            closest: function (e, t) {
                                var n,
                                    r = 0,
                                    o = this.length,
                                    i = [],
                                    a = "string" != typeof e && eu(e);
                                if (!ev.test(e)) {
                                    for (; r < o; r++)
                                        for (n = this[r]; n && n !== t; n = n.parentNode)
                                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && eu.find.matchesSelector(n, e))) {
                                                i.push(n);
                                                break;
                                            }
                                }
                                return this.pushStack(i.length > 1 ? eu.uniqueSort(i) : i);
                            },
                            index: function (e) {
                                return e ? ("string" == typeof e ? ee.call(eu(e), this[0]) : ee.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                            },
                            add: function (e, t) {
                                return this.pushStack(eu.uniqueSort(eu.merge(this.get(), eu(e, t))));
                            },
                            addBack: function (e) {
                                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                            },
                        }),
                            eu.each(
                                {
                                    parent: function (e) {
                                        var t = e.parentNode;
                                        return t && 11 !== t.nodeType ? t : null;
                                    },
                                    parents: function (e) {
                                        return ed(e, "parentNode");
                                    },
                                    parentsUntil: function (e, t, n) {
                                        return ed(e, "parentNode", n);
                                    },
                                    next: function (e) {
                                        return i(e, "nextSibling");
                                    },
                                    prev: function (e) {
                                        return i(e, "previousSibling");
                                    },
                                    nextAll: function (e) {
                                        return ed(e, "nextSibling");
                                    },
                                    prevAll: function (e) {
                                        return ed(e, "previousSibling");
                                    },
                                    nextUntil: function (e, t, n) {
                                        return ed(e, "nextSibling", n);
                                    },
                                    prevUntil: function (e, t, n) {
                                        return ed(e, "previousSibling", n);
                                    },
                                    siblings: function (e) {
                                        return eg((e.parentNode || {}).firstChild, e);
                                    },
                                    children: function (e) {
                                        return eg(e.firstChild);
                                    },
                                    contents: function (e) {
                                        return e.contentDocument || eu.merge([], e.childNodes);
                                    },
                                },
                                function (e, t) {
                                    eu.fn[e] = function (n, r) {
                                        var o = eu.map(this, t, n);
                                        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = eu.filter(r, o)), this.length > 1 && (ex[e] || eu.uniqueSort(o), eb.test(e) && o.reverse()), this.pushStack(o);
                                    };
                                }
                            );
                        var ew = /[^\x20\t\r\n\f]+/g;
                        (eu.Callbacks = function (e) {
                            e =
                                "string" == typeof e
                                    ? ((t = e),
                                      (n = {}),
                                      eu.each(t.match(ew) || [], function (e, t) {
                                          n[t] = !0;
                                      }),
                                      n)
                                    : eu.extend({}, e);
                            var t,
                                n,
                                r,
                                o,
                                i,
                                a,
                                s = [],
                                u = [],
                                l = -1,
                                c = function () {
                                    for (a = e.once, i = r = !0; u.length; l = -1) for (o = u.shift(); ++l < s.length; ) !1 === s[l].apply(o[0], o[1]) && e.stopOnFalse && ((l = s.length), (o = !1));
                                    e.memory || (o = !1), (r = !1), a && (s = o ? [] : "");
                                },
                                f = {
                                    add: function () {
                                        return (
                                            s &&
                                                (o && !r && ((l = s.length - 1), u.push(o)),
                                                (function t(n) {
                                                    eu.each(n, function (n, r) {
                                                        eu.isFunction(r) ? (e.unique && f.has(r)) || s.push(r) : r && r.length && "string" !== eu.type(r) && t(r);
                                                    });
                                                })(arguments),
                                                o && !r && c()),
                                            this
                                        );
                                    },
                                    remove: function () {
                                        return (
                                            eu.each(arguments, function (e, t) {
                                                for (var n; (n = eu.inArray(t, s, n)) > -1; ) s.splice(n, 1), n <= l && l--;
                                            }),
                                            this
                                        );
                                    },
                                    has: function (e) {
                                        return e ? eu.inArray(e, s) > -1 : s.length > 0;
                                    },
                                    empty: function () {
                                        return s && (s = []), this;
                                    },
                                    disable: function () {
                                        return (a = u = []), (s = o = ""), this;
                                    },
                                    disabled: function () {
                                        return !s;
                                    },
                                    lock: function () {
                                        return (a = u = []), o || r || (s = o = ""), this;
                                    },
                                    locked: function () {
                                        return !!a;
                                    },
                                    fireWith: function (e, t) {
                                        return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), r || c()), this;
                                    },
                                    fire: function () {
                                        return f.fireWith(this, arguments), this;
                                    },
                                    fired: function () {
                                        return !!i;
                                    },
                                };
                            return f;
                        }),
                            eu.extend({
                                Deferred: function (t) {
                                    var n = [
                                            ["notify", "progress", eu.Callbacks("memory"), eu.Callbacks("memory"), 2],
                                            ["resolve", "done", eu.Callbacks("once memory"), eu.Callbacks("once memory"), 0, "resolved"],
                                            ["reject", "fail", eu.Callbacks("once memory"), eu.Callbacks("once memory"), 1, "rejected"],
                                        ],
                                        r = "pending",
                                        o = {
                                            state: function () {
                                                return r;
                                            },
                                            always: function () {
                                                return i.done(arguments).fail(arguments), this;
                                            },
                                            catch: function (e) {
                                                return o.then(null, e);
                                            },
                                            pipe: function () {
                                                var e = arguments;
                                                return eu
                                                    .Deferred(function (t) {
                                                        eu.each(n, function (n, r) {
                                                            var o = eu.isFunction(e[r[4]]) && e[r[4]];
                                                            i[r[1]](function () {
                                                                var e = o && o.apply(this, arguments);
                                                                e && eu.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments);
                                                            });
                                                        }),
                                                            (e = null);
                                                    })
                                                    .promise();
                                            },
                                            then: function (t, r, o) {
                                                function i(t, n, r, o) {
                                                    return function () {
                                                        var l = this,
                                                            c = arguments,
                                                            f = function () {
                                                                var e, f;
                                                                if (!(t < u)) {
                                                                    if ((e = r.apply(l, c)) === n.promise()) throw TypeError("Thenable self-resolution");
                                                                    (f = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                                        eu.isFunction(f)
                                                                            ? o
                                                                                ? f.call(e, i(u, n, a, o), i(u, n, s, o))
                                                                                : (u++, f.call(e, i(u, n, a, o), i(u, n, s, o), i(u, n, a, n.notifyWith)))
                                                                            : (r !== a && ((l = void 0), (c = [e])), (o || n.resolveWith)(l, c));
                                                                }
                                                            },
                                                            p = o
                                                                ? f
                                                                : function () {
                                                                      try {
                                                                          f();
                                                                      } catch (e) {
                                                                          eu.Deferred.exceptionHook && eu.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= u && (r !== s && ((l = void 0), (c = [e])), n.rejectWith(l, c));
                                                                      }
                                                                  };
                                                        t ? p() : (eu.Deferred.getStackHook && (p.stackTrace = eu.Deferred.getStackHook()), e.setTimeout(p));
                                                    };
                                                }
                                                var u = 0;
                                                return eu
                                                    .Deferred(function (e) {
                                                        n[0][3].add(i(0, e, eu.isFunction(o) ? o : a, e.notifyWith)), n[1][3].add(i(0, e, eu.isFunction(t) ? t : a)), n[2][3].add(i(0, e, eu.isFunction(r) ? r : s));
                                                    })
                                                    .promise();
                                            },
                                            promise: function (e) {
                                                return null != e ? eu.extend(e, o) : o;
                                            },
                                        },
                                        i = {};
                                    return (
                                        eu.each(n, function (e, t) {
                                            var a = t[2],
                                                s = t[5];
                                            (o[t[1]] = a.add),
                                                s &&
                                                    a.add(
                                                        function () {
                                                            r = s;
                                                        },
                                                        n[3 - e][2].disable,
                                                        n[0][2].lock
                                                    ),
                                                a.add(t[3].fire),
                                                (i[t[0]] = function () {
                                                    return i[t[0] + "With"](this === i ? void 0 : this, arguments), this;
                                                }),
                                                (i[t[0] + "With"] = a.fireWith);
                                        }),
                                        o.promise(i),
                                        t && t.call(i, i),
                                        i
                                    );
                                },
                                when: function (e) {
                                    var t = arguments.length,
                                        n = t,
                                        r = Array(n),
                                        o = Q.call(arguments),
                                        i = eu.Deferred(),
                                        a = function (e) {
                                            return function (n) {
                                                (r[e] = this), (o[e] = arguments.length > 1 ? Q.call(arguments) : n), --t || i.resolveWith(r, o);
                                            };
                                        };
                                    if (t <= 1 && (u(e, i.done(a(n)).resolve, i.reject), "pending" === i.state() || eu.isFunction(o[n] && o[n].then))) return i.then();
                                    for (; n--; ) u(o[n], a(n), i.reject);
                                    return i.promise();
                                },
                            });
                        var eC = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                        (eu.Deferred.exceptionHook = function (t, n) {
                            e.console && e.console.warn && t && eC.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
                        }),
                            (eu.readyException = function (t) {
                                e.setTimeout(function () {
                                    throw t;
                                });
                            });
                        var ek = eu.Deferred();
                        (eu.fn.ready = function (e) {
                            return (
                                ek.then(e).catch(function (e) {
                                    eu.readyException(e);
                                }),
                                this
                            );
                        }),
                            eu.extend({
                                isReady: !1,
                                readyWait: 1,
                                holdReady: function (e) {
                                    e ? eu.readyWait++ : eu.ready(!0);
                                },
                                ready: function (e) {
                                    (!0 === e ? --eu.readyWait : eu.isReady) || ((eu.isReady = !0), (!0 !== e && --eu.readyWait > 0) || ek.resolveWith(G, [eu]));
                                },
                            }),
                            (eu.ready.then = ek.then),
                            "complete" !== G.readyState && ("loading" === G.readyState || G.documentElement.doScroll) ? (G.addEventListener("DOMContentLoaded", l), e.addEventListener("load", l)) : e.setTimeout(eu.ready);
                        var eT = function (e, t, n, r, o, i, a) {
                                var s = 0,
                                    u = e.length,
                                    l = null == n;
                                if ("object" === eu.type(n)) for (s in ((o = !0), n)) eT(e, t, s, n[s], !0, i, a);
                                else if (
                                    void 0 !== r &&
                                    ((o = !0),
                                    eu.isFunction(r) || (a = !0),
                                    l &&
                                        (a
                                            ? (t.call(e, r), (t = null))
                                            : ((l = t),
                                              (t = function (e, t, n) {
                                                  return l.call(eu(e), n);
                                              }))),
                                    t)
                                )
                                    for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                                return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
                            },
                            ej = function (e) {
                                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                            };
                        (c.uid = 1),
                            (c.prototype = {
                                cache: function (e) {
                                    var t = e[this.expando];
                                    return t || ((t = {}), ej(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                                },
                                set: function (e, t, n) {
                                    var r,
                                        o = this.cache(e);
                                    if ("string" == typeof t) o[eu.camelCase(t)] = n;
                                    else for (r in t) o[eu.camelCase(r)] = t[r];
                                    return o;
                                },
                                get: function (e, t) {
                                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][eu.camelCase(t)];
                                },
                                access: function (e, t, n) {
                                    return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                                },
                                remove: function (e, t) {
                                    var n,
                                        r = e[this.expando];
                                    if (void 0 !== r) {
                                        if (void 0 !== t) for (n = (t = eu.isArray(t) ? t.map(eu.camelCase) : ((t = eu.camelCase(t)) in r) ? [t] : t.match(ew) || []).length; n--; ) delete r[t[n]];
                                        (void 0 === t || eu.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                                    }
                                },
                                hasData: function (e) {
                                    var t = e[this.expando];
                                    return void 0 !== t && !eu.isEmptyObject(t);
                                },
                            });
                        var eN = new c(),
                            eS = new c(),
                            eq = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                            eA = /[A-Z]/g;
                        eu.extend({
                            hasData: function (e) {
                                return eS.hasData(e) || eN.hasData(e);
                            },
                            data: function (e, t, n) {
                                return eS.access(e, t, n);
                            },
                            removeData: function (e, t) {
                                eS.remove(e, t);
                            },
                            _data: function (e, t, n) {
                                return eN.access(e, t, n);
                            },
                            _removeData: function (e, t) {
                                eN.remove(e, t);
                            },
                        }),
                            eu.fn.extend({
                                data: function (e, t) {
                                    var n,
                                        r,
                                        o,
                                        i = this[0],
                                        a = i && i.attributes;
                                    if (void 0 === e) {
                                        if (this.length && ((o = eS.get(i)), 1 === i.nodeType && !eN.get(i, "hasDataAttrs"))) {
                                            for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && f(i, (r = eu.camelCase(r.slice(5))), o[r]);
                                            eN.set(i, "hasDataAttrs", !0);
                                        }
                                        return o;
                                    }
                                    return "object" == typeof e
                                        ? this.each(function () {
                                              eS.set(this, e);
                                          })
                                        : eT(
                                              this,
                                              function (t) {
                                                  var n;
                                                  if (i && void 0 === t) {
                                                      if (void 0 !== (n = eS.get(i, e)) || void 0 !== (n = f(i, e))) return n;
                                                  } else
                                                      this.each(function () {
                                                          eS.set(this, e, t);
                                                      });
                                              },
                                              null,
                                              t,
                                              arguments.length > 1,
                                              null,
                                              !0
                                          );
                                },
                                removeData: function (e) {
                                    return this.each(function () {
                                        eS.remove(this, e);
                                    });
                                },
                            }),
                            eu.extend({
                                queue: function (e, t, n) {
                                    var r;
                                    if (e) return (t = (t || "fx") + "queue"), (r = eN.get(e, t)), n && (!r || eu.isArray(n) ? (r = eN.access(e, t, eu.makeArray(n))) : r.push(n)), r || [];
                                },
                                dequeue: function (e, t) {
                                    t = t || "fx";
                                    var n = eu.queue(e, t),
                                        r = n.length,
                                        o = n.shift(),
                                        i = eu._queueHooks(e, t),
                                        a = function () {
                                            eu.dequeue(e, t);
                                        };
                                    "inprogress" === o && ((o = n.shift()), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire();
                                },
                                _queueHooks: function (e, t) {
                                    var n = t + "queueHooks";
                                    return (
                                        eN.get(e, n) ||
                                        eN.access(e, n, {
                                            empty: eu.Callbacks("once memory").add(function () {
                                                eN.remove(e, [t + "queue", n]);
                                            }),
                                        })
                                    );
                                },
                            }),
                            eu.fn.extend({
                                queue: function (e, t) {
                                    var n = 2;
                                    return (
                                        "string" != typeof e && ((t = e), (e = "fx"), n--),
                                        arguments.length < n
                                            ? eu.queue(this[0], e)
                                            : void 0 === t
                                            ? this
                                            : this.each(function () {
                                                  var n = eu.queue(this, e, t);
                                                  eu._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && eu.dequeue(this, e);
                                              })
                                    );
                                },
                                dequeue: function (e) {
                                    return this.each(function () {
                                        eu.dequeue(this, e);
                                    });
                                },
                                clearQueue: function (e) {
                                    return this.queue(e || "fx", []);
                                },
                                promise: function (e, t) {
                                    var n,
                                        r = 1,
                                        o = eu.Deferred(),
                                        i = this,
                                        a = this.length,
                                        s = function () {
                                            --r || o.resolveWith(i, [i]);
                                        };
                                    for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = eN.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                                    return s(), o.promise(t);
                                },
                            });
                        var eE = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                            eD = RegExp("^(?:([+-])=|)(" + eE + ")([a-z%]*)$", "i"),
                            e0 = ["Top", "Right", "Bottom", "Left"],
                            eL = function (e, t) {
                                return "none" === (e = t || e).style.display || ("" === e.style.display && eu.contains(e.ownerDocument, e) && "none" === eu.css(e, "display"));
                            },
                            eO = function (e, t, n, r) {
                                var o,
                                    i,
                                    a = {};
                                for (i in t) (a[i] = e.style[i]), (e.style[i] = t[i]);
                                for (i in ((o = n.apply(e, r || [])), t)) e.style[i] = a[i];
                                return o;
                            },
                            eH = {};
                        eu.fn.extend({
                            show: function () {
                                return d(this, !0);
                            },
                            hide: function () {
                                return d(this);
                            },
                            toggle: function (e) {
                                return "boolean" == typeof e
                                    ? e
                                        ? this.show()
                                        : this.hide()
                                    : this.each(function () {
                                          eL(this) ? eu(this).show() : eu(this).hide();
                                      });
                            },
                        });
                        var eP = /^(?:checkbox|radio)$/i,
                            eF = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                            e1 = /^$|\/(?:java|ecma)script/i,
                            eM = {
                                option: [1, "<select multiple='multiple'>", "</select>"],
                                thead: [1, "<table>", "</table>"],
                                col: [2, "<table><colgroup>", "</colgroup></table>"],
                                tr: [2, "<table><tbody>", "</tbody></table>"],
                                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                                _default: [0, "", ""],
                            };
                        (eM.optgroup = eM.option), (eM.tbody = eM.tfoot = eM.colgroup = eM.caption = eM.thead), (eM.th = eM.td);
                        var eI,
                            e9,
                            e8 = /<|&#?\w+;/;
                        (eI = G.createDocumentFragment().appendChild(G.createElement("div"))),
                            (e9 = G.createElement("input")).setAttribute("type", "radio"),
                            e9.setAttribute("checked", "checked"),
                            e9.setAttribute("name", "t"),
                            eI.appendChild(e9),
                            (ea.checkClone = eI.cloneNode(!0).cloneNode(!0).lastChild.checked),
                            (eI.innerHTML = "<textarea>x</textarea>"),
                            (ea.noCloneChecked = !!eI.cloneNode(!0).lastChild.defaultValue);
                        var eW = G.documentElement,
                            eB = /^key/,
                            e3 = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                            eR = /^([^.]*)(?:\.(.+)|)/;
                        (eu.event = {
                            global: {},
                            add: function (e, t, n, r, o) {
                                var i,
                                    a,
                                    s,
                                    u,
                                    l,
                                    c,
                                    f,
                                    p,
                                    h,
                                    d,
                                    g,
                                    v = eN.get(e);
                                if (v)
                                    for (
                                        n.handler && ((n = (i = n).handler), (o = i.selector)),
                                            o && eu.find.matchesSelector(eW, o),
                                            n.guid || (n.guid = eu.guid++),
                                            (u = v.events) || (u = v.events = {}),
                                            (a = v.handle) ||
                                                (a = v.handle = function (t) {
                                                    return void 0 !== eu && eu.event.triggered !== t.type ? eu.event.dispatch.apply(e, arguments) : void 0;
                                                }),
                                            l = (t = (t || "").match(ew) || [""]).length;
                                        l--;

                                    )
                                        (h = g = (s = eR.exec(t[l]) || [])[1]),
                                            (d = (s[2] || "").split(".").sort()),
                                            h &&
                                                ((f = eu.event.special[h] || {}),
                                                (h = (o ? f.delegateType : f.bindType) || h),
                                                (f = eu.event.special[h] || {}),
                                                (c = eu.extend({ type: h, origType: g, data: r, handler: n, guid: n.guid, selector: o, needsContext: o && eu.expr.match.needsContext.test(o), namespace: d.join(".") }, i)),
                                                (p = u[h]) || (((p = u[h] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, d, a)) || (e.addEventListener && e.addEventListener(h, a))),
                                                f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                                                o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                                                (eu.event.global[h] = !0));
                            },
                            remove: function (e, t, n, r, o) {
                                var i,
                                    a,
                                    s,
                                    u,
                                    l,
                                    c,
                                    f,
                                    p,
                                    h,
                                    d,
                                    g,
                                    v = eN.hasData(e) && eN.get(e);
                                if (v && (u = v.events)) {
                                    for (l = (t = (t || "").match(ew) || [""]).length; l--; )
                                        if (((h = g = (s = eR.exec(t[l]) || [])[1]), (d = (s[2] || "").split(".").sort()), h)) {
                                            for (f = eu.event.special[h] || {}, p = u[(h = (r ? f.delegateType : f.bindType) || h)] || [], s = s[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--; )
                                                (c = p[i]),
                                                    (!o && g !== c.origType) ||
                                                        (n && n.guid !== c.guid) ||
                                                        (s && !s.test(c.namespace)) ||
                                                        (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                                        (p.splice(i, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                            a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, d, v.handle)) || eu.removeEvent(e, h, v.handle), delete u[h]);
                                        } else for (h in u) eu.event.remove(e, h + t[l], n, r, !0);
                                    eu.isEmptyObject(u) && eN.remove(e, "handle events");
                                }
                            },
                            dispatch: function (e) {
                                var t,
                                    n,
                                    r,
                                    o,
                                    i,
                                    a,
                                    s = eu.event.fix(e),
                                    u = Array(arguments.length),
                                    l = (eN.get(this, "events") || {})[s.type] || [],
                                    c = eu.event.special[s.type] || {};
                                for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                                if (((s.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, s))) {
                                    for (a = eu.event.handlers.call(this, s, l), t = 0; (o = a[t++]) && !s.isPropagationStopped(); )
                                        for (s.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                                            (s.rnamespace && !s.rnamespace.test(i.namespace)) ||
                                                ((s.handleObj = i),
                                                (s.data = i.data),
                                                void 0 !== (r = ((eu.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                                    return c.postDispatch && c.postDispatch.call(this, s), s.result;
                                }
                            },
                            handlers: function (e, t) {
                                var n,
                                    r,
                                    o,
                                    i,
                                    a,
                                    s = [],
                                    u = t.delegateCount,
                                    l = e.target;
                                if (u && l.nodeType && !("click" === e.type && e.button >= 1)) {
                                    for (; l !== this; l = l.parentNode || this)
                                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                            for (i = [], a = {}, n = 0; n < u; n++)
                                                void 0 === a[(o = (r = t[n]).selector + " ")] && (a[o] = r.needsContext ? eu(o, this).index(l) > -1 : eu.find(o, this, null, [l]).length), a[o] && i.push(r);
                                            i.length && s.push({ elem: l, handlers: i });
                                        }
                                }
                                return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
                            },
                            addProp: function (e, t) {
                                Object.defineProperty(eu.Event.prototype, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: eu.isFunction(t)
                                        ? function () {
                                              if (this.originalEvent) return t(this.originalEvent);
                                          }
                                        : function () {
                                              if (this.originalEvent) return this.originalEvent[e];
                                          },
                                    set: function (t) {
                                        Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                                    },
                                });
                            },
                            fix: function (e) {
                                return e[eu.expando] ? e : new eu.Event(e);
                            },
                            special: {
                                load: { noBubble: !0 },
                                focus: {
                                    trigger: function () {
                                        if (this !== _() && this.focus) return this.focus(), !1;
                                    },
                                    delegateType: "focusin",
                                },
                                blur: {
                                    trigger: function () {
                                        if (this === _() && this.blur) return this.blur(), !1;
                                    },
                                    delegateType: "focusout",
                                },
                                click: {
                                    trigger: function () {
                                        if ("checkbox" === this.type && this.click && eu.nodeName(this, "input")) return this.click(), !1;
                                    },
                                    _default: function (e) {
                                        return eu.nodeName(e.target, "a");
                                    },
                                },
                                beforeunload: {
                                    postDispatch: function (e) {
                                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                                    },
                                },
                            },
                        }),
                            (eu.removeEvent = function (e, t, n) {
                                e.removeEventListener && e.removeEventListener(t, n);
                            }),
                            (eu.Event = function (e, t) {
                                return this instanceof eu.Event
                                    ? (e && e.type
                                          ? ((this.originalEvent = e),
                                            (this.type = e.type),
                                            (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? y : $),
                                            (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                                            (this.currentTarget = e.currentTarget),
                                            (this.relatedTarget = e.relatedTarget))
                                          : (this.type = e),
                                      t && eu.extend(this, t),
                                      (this.timeStamp = (e && e.timeStamp) || eu.now()),
                                      void (this[eu.expando] = !0))
                                    : new eu.Event(e, t);
                            }),
                            (eu.Event.prototype = {
                                constructor: eu.Event,
                                isDefaultPrevented: $,
                                isPropagationStopped: $,
                                isImmediatePropagationStopped: $,
                                isSimulated: !1,
                                preventDefault: function () {
                                    var e = this.originalEvent;
                                    (this.isDefaultPrevented = y), e && !this.isSimulated && e.preventDefault();
                                },
                                stopPropagation: function () {
                                    var e = this.originalEvent;
                                    (this.isPropagationStopped = y), e && !this.isSimulated && e.stopPropagation();
                                },
                                stopImmediatePropagation: function () {
                                    var e = this.originalEvent;
                                    (this.isImmediatePropagationStopped = y), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                                },
                            }),
                            eu.each(
                                {
                                    altKey: !0,
                                    bubbles: !0,
                                    cancelable: !0,
                                    changedTouches: !0,
                                    ctrlKey: !0,
                                    detail: !0,
                                    eventPhase: !0,
                                    metaKey: !0,
                                    pageX: !0,
                                    pageY: !0,
                                    shiftKey: !0,
                                    view: !0,
                                    char: !0,
                                    charCode: !0,
                                    key: !0,
                                    keyCode: !0,
                                    button: !0,
                                    buttons: !0,
                                    clientX: !0,
                                    clientY: !0,
                                    offsetX: !0,
                                    offsetY: !0,
                                    pointerId: !0,
                                    pointerType: !0,
                                    screenX: !0,
                                    screenY: !0,
                                    targetTouches: !0,
                                    toElement: !0,
                                    touches: !0,
                                    which: function (e) {
                                        var t = e.button;
                                        return null == e.which && eB.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && e3.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                                    },
                                },
                                eu.event.addProp
                            ),
                            eu.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                                eu.event.special[e] = {
                                    delegateType: t,
                                    bindType: t,
                                    handle: function (e) {
                                        var n,
                                            r = e.relatedTarget,
                                            o = e.handleObj;
                                        return (r && (r === this || eu.contains(this, r))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                                    },
                                };
                            }),
                            eu.fn.extend({
                                on: function (e, t, n, r) {
                                    return b(this, e, t, n, r);
                                },
                                one: function (e, t, n, r) {
                                    return b(this, e, t, n, r, 1);
                                },
                                off: function (e, t, n) {
                                    var r, o;
                                    if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), eu(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                                    if ("object" == typeof e) {
                                        for (o in e) this.off(o, t, e[o]);
                                        return this;
                                    }
                                    return (
                                        (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                                        !1 === n && (n = $),
                                        this.each(function () {
                                            eu.event.remove(this, e, n, t);
                                        })
                                    );
                                },
                            });
                        var e4 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                            e2 = /<script|<style|<link/i,
                            e7 = /checked\s*(?:[^=]|=\s*.checked.)/i,
                            ez = /^true\/(.*)/,
                            eX = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                        eu.extend({
                            htmlPrefilter: function (e) {
                                return e.replace(e4, "<$1></$2>");
                            },
                            clone: function (e, t, n) {
                                var r,
                                    o,
                                    i,
                                    a,
                                    s = e.cloneNode(!0),
                                    u = eu.contains(e.ownerDocument, e);
                                if (!(ea.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || eu.isXMLDoc(e))) for (a = g(s), i = g(e), r = 0, o = i.length; r < o; r++) T(i[r], a[r]);
                                if (t) {
                                    if (n) for (i = i || g(e), a = a || g(s), r = 0, o = i.length; r < o; r++) k(i[r], a[r]);
                                    else k(e, s);
                                }
                                return (a = g(s, "script")).length > 0 && v(a, !u && g(e, "script")), s;
                            },
                            cleanData: function (e) {
                                for (var t, n, r, o = eu.event.special, i = 0; void 0 !== (n = e[i]); i++)
                                    if (ej(n)) {
                                        if ((t = n[eN.expando])) {
                                            if (t.events) for (r in t.events) o[r] ? eu.event.remove(n, r) : eu.removeEvent(n, r, t.handle);
                                            n[eN.expando] = void 0;
                                        }
                                        n[eS.expando] && (n[eS.expando] = void 0);
                                    }
                            },
                        }),
                            eu.fn.extend({
                                detach: function (e) {
                                    return N(this, e, !0);
                                },
                                remove: function (e) {
                                    return N(this, e);
                                },
                                text: function (e) {
                                    return eT(
                                        this,
                                        function (e) {
                                            return void 0 === e
                                                ? eu.text(this)
                                                : this.empty().each(function () {
                                                      (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                                  });
                                        },
                                        null,
                                        e,
                                        arguments.length
                                    );
                                },
                                append: function () {
                                    return j(this, arguments, function (e) {
                                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && x(this, e).appendChild(e);
                                    });
                                },
                                prepend: function () {
                                    return j(this, arguments, function (e) {
                                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                            var t = x(this, e);
                                            t.insertBefore(e, t.firstChild);
                                        }
                                    });
                                },
                                before: function () {
                                    return j(this, arguments, function (e) {
                                        this.parentNode && this.parentNode.insertBefore(e, this);
                                    });
                                },
                                after: function () {
                                    return j(this, arguments, function (e) {
                                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                                    });
                                },
                                empty: function () {
                                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (eu.cleanData(g(e, !1)), (e.textContent = ""));
                                    return this;
                                },
                                clone: function (e, t) {
                                    return (
                                        (e = null != e && e),
                                        (t = null == t ? e : t),
                                        this.map(function () {
                                            return eu.clone(this, e, t);
                                        })
                                    );
                                },
                                html: function (e) {
                                    return eT(
                                        this,
                                        function (e) {
                                            var t = this[0] || {},
                                                n = 0,
                                                r = this.length;
                                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                            if ("string" == typeof e && !e2.test(e) && !eM[(eF.exec(e) || ["", ""])[1].toLowerCase()]) {
                                                e = eu.htmlPrefilter(e);
                                                try {
                                                    for (; n < r; n++) (t = this[n] || {}), 1 === t.nodeType && (eu.cleanData(g(t, !1)), (t.innerHTML = e));
                                                    t = 0;
                                                } catch (o) {}
                                            }
                                            t && this.empty().append(e);
                                        },
                                        null,
                                        e,
                                        arguments.length
                                    );
                                },
                                replaceWith: function () {
                                    var e = [];
                                    return j(
                                        this,
                                        arguments,
                                        function (t) {
                                            var n = this.parentNode;
                                            0 > eu.inArray(this, e) && (eu.cleanData(g(this)), n && n.replaceChild(t, this));
                                        },
                                        e
                                    );
                                },
                            }),
                            eu.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                                eu.fn[e] = function (e) {
                                    for (var n, r = [], o = eu(e), i = o.length - 1, a = 0; a <= i; a++) (n = a === i ? this : this.clone(!0)), eu(o[a])[t](n), Z.apply(r, n.get());
                                    return this.pushStack(r);
                                };
                            });
                        var e6 = /^margin/,
                            eU = RegExp("^(" + eE + ")(?!px)[a-z%]+$", "i"),
                            eK = function (t) {
                                var n = t.ownerDocument.defaultView;
                                return (n && n.opener) || (n = e), n.getComputedStyle(t);
                            };
                        !(function () {
                            function t() {
                                if (s) {
                                    (s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"), (s.innerHTML = ""), eW.appendChild(a);
                                    var t = e.getComputedStyle(s);
                                    (n = "1%" !== t.top), (i = "2px" === t.marginLeft), (r = "4px" === t.width), (s.style.marginRight = "50%"), (o = "4px" === t.marginRight), eW.removeChild(a), (s = null);
                                }
                            }
                            var n,
                                r,
                                o,
                                i,
                                a = G.createElement("div"),
                                s = G.createElement("div");
                            s.style &&
                                ((s.style.backgroundClip = "content-box"),
                                (s.cloneNode(!0).style.backgroundClip = ""),
                                (ea.clearCloneStyle = "content-box" === s.style.backgroundClip),
                                (a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
                                a.appendChild(s),
                                eu.extend(ea, {
                                    pixelPosition: function () {
                                        return t(), n;
                                    },
                                    boxSizingReliable: function () {
                                        return t(), r;
                                    },
                                    pixelMarginRight: function () {
                                        return t(), o;
                                    },
                                    reliableMarginLeft: function () {
                                        return t(), i;
                                    },
                                }));
                        })();
                        var e5 = /^(none|table(?!-c[ea]).+)/,
                            eV = { position: "absolute", visibility: "hidden", display: "block" },
                            eG = { letterSpacing: "0", fontWeight: "400" },
                            eY = ["Webkit", "Moz", "ms"],
                            eQ = G.createElement("div").style;
                        eu.extend({
                            cssHooks: {
                                opacity: {
                                    get: function (e, t) {
                                        if (t) {
                                            var n = S(e, "opacity");
                                            return "" === n ? "1" : n;
                                        }
                                    },
                                },
                            },
                            cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                            cssProps: { float: "cssFloat" },
                            style: function (e, t, n, r) {
                                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                    var o,
                                        i,
                                        a,
                                        s = eu.camelCase(t),
                                        u = e.style;
                                    return (
                                        (t = eu.cssProps[s] || (eu.cssProps[s] = A(s) || s)),
                                        (a = eu.cssHooks[t] || eu.cssHooks[s]),
                                        void 0 === n
                                            ? a && "get" in a && void 0 !== (o = a.get(e, !1, r))
                                                ? o
                                                : u[t]
                                            : ("string" == (i = typeof n) && (o = eD.exec(n)) && o[1] && ((n = p(e, t, o)), (i = "number")),
                                              void (
                                                  null != n &&
                                                  n == n &&
                                                  ("number" === i && (n += (o && o[3]) || (eu.cssNumber[s] ? "" : "px")),
                                                  ea.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                                                  (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u[t] = n))
                                              ))
                                    );
                                }
                            },
                            css: function (e, t, n, r) {
                                var o,
                                    i,
                                    a,
                                    s = eu.camelCase(t);
                                return (
                                    (t = eu.cssProps[s] || (eu.cssProps[s] = A(s) || s)),
                                    (a = eu.cssHooks[t] || eu.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)),
                                    void 0 === o && (o = S(e, t, r)),
                                    "normal" === o && t in eG && (o = eG[t]),
                                    "" === n || n ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o) : o
                                );
                            },
                        }),
                            eu.each(["height", "width"], function (e, t) {
                                eu.cssHooks[t] = {
                                    get: function (e, n, r) {
                                        if (n)
                                            return !e5.test(eu.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                                ? L(e, t, r)
                                                : eO(e, eV, function () {
                                                      return L(e, t, r);
                                                  });
                                    },
                                    set: function (e, n, r) {
                                        var o,
                                            i = r && eK(e),
                                            a = r && D(e, t, r, "border-box" === eu.css(e, "boxSizing", !1, i), i);
                                        return a && (o = eD.exec(n)) && "px" !== (o[3] || "px") && ((e.style[t] = n), (n = eu.css(e, t))), E(e, n, a);
                                    },
                                };
                            }),
                            (eu.cssHooks.marginLeft = q(ea.reliableMarginLeft, function (e, t) {
                                if (t)
                                    return (
                                        (parseFloat(S(e, "marginLeft")) ||
                                            e.getBoundingClientRect().left -
                                                eO(e, { marginLeft: 0 }, function () {
                                                    return e.getBoundingClientRect().left;
                                                })) + "px"
                                    );
                            })),
                            eu.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                                (eu.cssHooks[e + t] = {
                                    expand: function (n) {
                                        for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + e0[r] + t] = i[r] || i[r - 2] || i[0];
                                        return o;
                                    },
                                }),
                                    e6.test(e) || (eu.cssHooks[e + t].set = E);
                            }),
                            eu.fn.extend({
                                css: function (e, t) {
                                    return eT(
                                        this,
                                        function (e, t, n) {
                                            var r,
                                                o,
                                                i = {},
                                                a = 0;
                                            if (eu.isArray(t)) {
                                                for (r = eK(e), o = t.length; a < o; a++) i[t[a]] = eu.css(e, t[a], !1, r);
                                                return i;
                                            }
                                            return void 0 !== n ? eu.style(e, t, n) : eu.css(e, t);
                                        },
                                        e,
                                        t,
                                        arguments.length > 1
                                    );
                                },
                            }),
                            (eu.Tween = O),
                            (O.prototype = {
                                constructor: O,
                                init: function (e, t, n, r, o, i) {
                                    (this.elem = e), (this.prop = n), (this.easing = o || eu.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = i || (eu.cssNumber[n] ? "" : "px"));
                                },
                                cur: function () {
                                    var e = O.propHooks[this.prop];
                                    return e && e.get ? e.get(this) : O.propHooks._default.get(this);
                                },
                                run: function (e) {
                                    var t,
                                        n = O.propHooks[this.prop];
                                    return (
                                        this.options.duration ? (this.pos = t = eu.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                                        (this.now = (this.end - this.start) * t + this.start),
                                        this.options.step && this.options.step.call(this.elem, this.now, this),
                                        n && n.set ? n.set(this) : O.propHooks._default.set(this),
                                        this
                                    );
                                },
                            }),
                            (O.prototype.init.prototype = O.prototype),
                            (O.propHooks = {
                                _default: {
                                    get: function (e) {
                                        var t;
                                        return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = eu.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                                    },
                                    set: function (e) {
                                        eu.fx.step[e.prop]
                                            ? eu.fx.step[e.prop](e)
                                            : 1 === e.elem.nodeType && (null != e.elem.style[eu.cssProps[e.prop]] || eu.cssHooks[e.prop])
                                            ? eu.style(e.elem, e.prop, e.now + e.unit)
                                            : (e.elem[e.prop] = e.now);
                                    },
                                },
                            }),
                            (O.propHooks.scrollTop = O.propHooks.scrollLeft = {
                                set: function (e) {
                                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                                },
                            }),
                            (eu.easing = {
                                linear: function (e) {
                                    return e;
                                },
                                swing: function (e) {
                                    return 0.5 - Math.cos(e * Math.PI) / 2;
                                },
                                _default: "swing",
                            }),
                            (eu.fx = O.prototype.init),
                            (eu.fx.step = {});
                        var eJ,
                            eZ,
                            te,
                            tt,
                            tn = /^(?:toggle|show|hide)$/,
                            tr = /queueHooks$/;
                        (eu.Animation = eu.extend(I, {
                            tweeners: {
                                "*": [
                                    function (e, t) {
                                        var n = this.createTween(e, t);
                                        return p(n.elem, e, eD.exec(t), n), n;
                                    },
                                ],
                            },
                            tweener: function (e, t) {
                                eu.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(ew));
                                for (var n, r = 0, o = e.length; r < o; r++) (n = e[r]), (I.tweeners[n] = I.tweeners[n] || []), I.tweeners[n].unshift(t);
                            },
                            prefilters: [
                                function e(t, n, r) {
                                    var o,
                                        i,
                                        a,
                                        s,
                                        u,
                                        l,
                                        c,
                                        f,
                                        p = this,
                                        h = {},
                                        g = t.style,
                                        v = t.nodeType && eL(t),
                                        m = eN.get(t, "fxshow");
                                    for (o in (r.queue ||
                                        (null == (s = eu._queueHooks(t, "fx")).unqueued &&
                                            ((s.unqueued = 0),
                                            (u = s.empty.fire),
                                            (s.empty.fire = function () {
                                                s.unqueued || u();
                                            })),
                                        s.unqueued++,
                                        p.always(function () {
                                            p.always(function () {
                                                s.unqueued--, eu.queue(t, "fx").length || s.empty.fire();
                                            });
                                        })),
                                    n))
                                        if (((i = n[o]), tn.test(i))) {
                                            if ((delete n[o], (a = a || "toggle" === i), i === (v ? "hide" : "show"))) {
                                                if ("show" !== i || !m || void 0 === m[o]) continue;
                                                v = !0;
                                            }
                                            h[o] = (m && m[o]) || eu.style(t, o);
                                        }
                                    if ((l = !eu.isEmptyObject(n)) || !eu.isEmptyObject(h))
                                        for (o in (("width" in n || "height" in n) &&
                                            1 === t.nodeType &&
                                            ((r.overflow = [g.overflow, g.overflowX, g.overflowY]),
                                            null == (c = m && m.display) && (c = eN.get(t, "display")),
                                            "none" === (f = eu.css(t, "display")) && (c ? (f = c) : (d([t], !0), (c = t.style.display || c), (f = eu.css(t, "display")), d([t]))),
                                            ("inline" === f || ("inline-block" === f && null != c)) &&
                                                "none" === eu.css(t, "float") &&
                                                (l ||
                                                    (p.done(function () {
                                                        g.display = c;
                                                    }),
                                                    null == c && (c = "none" === (f = g.display) ? "" : f)),
                                                (g.display = "inline-block"))),
                                        r.overflow &&
                                            ((g.overflow = "hidden"),
                                            p.always(function () {
                                                (g.overflow = r.overflow[0]), (g.overflowX = r.overflow[1]), (g.overflowY = r.overflow[2]);
                                            })),
                                        (l = !1),
                                        h))
                                            l ||
                                                (m ? "hidden" in m && (v = m.hidden) : (m = eN.access(t, "fxshow", { display: c })),
                                                a && (m.hidden = !v),
                                                v && d([t], !0),
                                                p.done(function () {
                                                    for (o in (v || d([t]), eN.remove(t, "fxshow"), h)) eu.style(t, o, h[o]);
                                                })),
                                                (l = M(v ? m[o] : 0, o, p)),
                                                o in m || ((m[o] = l.start), v && ((l.end = l.start), (l.start = 0)));
                                },
                            ],
                            prefilter: function (e, t) {
                                t ? I.prefilters.unshift(e) : I.prefilters.push(e);
                            },
                        })),
                            (eu.speed = function (e, t, n) {
                                var r = e && "object" == typeof e ? eu.extend({}, e) : { complete: n || (!n && t) || (eu.isFunction(e) && e), duration: e, easing: (n && t) || (t && !eu.isFunction(t) && t) };
                                return (
                                    eu.fx.off || G.hidden ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in eu.fx.speeds ? (r.duration = eu.fx.speeds[r.duration]) : (r.duration = eu.fx.speeds._default)),
                                    (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                                    (r.old = r.complete),
                                    (r.complete = function () {
                                        eu.isFunction(r.old) && r.old.call(this), r.queue && eu.dequeue(this, r.queue);
                                    }),
                                    r
                                );
                            }),
                            eu.fn.extend({
                                fadeTo: function (e, t, n, r) {
                                    return this.filter(eL).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
                                },
                                animate: function (e, t, n, r) {
                                    var o = eu.isEmptyObject(e),
                                        i = eu.speed(t, n, r),
                                        a = function () {
                                            var t = I(this, eu.extend({}, e), i);
                                            (o || eN.get(this, "finish")) && t.stop(!0);
                                        };
                                    return (a.finish = a), o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
                                },
                                stop: function (e, t, n) {
                                    var r = function (e) {
                                        var t = e.stop;
                                        delete e.stop, t(n);
                                    };
                                    return (
                                        "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                                        t && !1 !== e && this.queue(e || "fx", []),
                                        this.each(function () {
                                            var t = !0,
                                                o = null != e && e + "queueHooks",
                                                i = eu.timers,
                                                a = eN.get(this);
                                            if (o) a[o] && a[o].stop && r(a[o]);
                                            else for (o in a) a[o] && a[o].stop && tr.test(o) && r(a[o]);
                                            for (o = i.length; o--; ) i[o].elem !== this || (null != e && i[o].queue !== e) || (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                                            (!t && n) || eu.dequeue(this, e);
                                        })
                                    );
                                },
                                finish: function (e) {
                                    return (
                                        !1 !== e && (e = e || "fx"),
                                        this.each(function () {
                                            var t,
                                                n = eN.get(this),
                                                r = n[e + "queue"],
                                                o = n[e + "queueHooks"],
                                                i = eu.timers,
                                                a = r ? r.length : 0;
                                            for (n.finish = !0, eu.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                            delete n.finish;
                                        })
                                    );
                                },
                            }),
                            eu.each(["toggle", "show", "hide"], function (e, t) {
                                var n = eu.fn[t];
                                eu.fn[t] = function (e, r, o) {
                                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, o);
                                };
                            }),
                            eu.each({ slideDown: F("show"), slideUp: F("hide"), slideToggle: F("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                                eu.fn[e] = function (e, n, r) {
                                    return this.animate(t, e, n, r);
                                };
                            }),
                            (eu.timers = []),
                            (eu.fx.tick = function () {
                                var e,
                                    t = 0,
                                    n = eu.timers;
                                for (eJ = eu.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                                n.length || eu.fx.stop(), (eJ = void 0);
                            }),
                            (eu.fx.timer = function (e) {
                                eu.timers.push(e), e() ? eu.fx.start() : eu.timers.pop();
                            }),
                            (eu.fx.interval = 13),
                            (eu.fx.start = function () {
                                eZ || (eZ = e.requestAnimationFrame ? e.requestAnimationFrame(H) : e.setInterval(eu.fx.tick, eu.fx.interval));
                            }),
                            (eu.fx.stop = function () {
                                e.cancelAnimationFrame ? e.cancelAnimationFrame(eZ) : e.clearInterval(eZ), (eZ = null);
                            }),
                            (eu.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                            (eu.fn.delay = function (t, n) {
                                return (
                                    (t = (eu.fx && eu.fx.speeds[t]) || t),
                                    (n = n || "fx"),
                                    this.queue(n, function (n, r) {
                                        var o = e.setTimeout(n, t);
                                        r.stop = function () {
                                            e.clearTimeout(o);
                                        };
                                    })
                                );
                            }),
                            (te = G.createElement("input")),
                            (tt = G.createElement("select").appendChild(G.createElement("option"))),
                            (te.type = "checkbox"),
                            (ea.checkOn = "" !== te.value),
                            (ea.optSelected = tt.selected),
                            ((te = G.createElement("input")).value = "t"),
                            (te.type = "radio"),
                            (ea.radioValue = "t" === te.value);
                        var to,
                            ti = eu.expr.attrHandle;
                        eu.fn.extend({
                            attr: function (e, t) {
                                return eT(this, eu.attr, e, t, arguments.length > 1);
                            },
                            removeAttr: function (e) {
                                return this.each(function () {
                                    eu.removeAttr(this, e);
                                });
                            },
                        }),
                            eu.extend({
                                attr: function (e, t, n) {
                                    var r,
                                        o,
                                        i = e.nodeType;
                                    if (3 !== i && 8 !== i && 2 !== i)
                                        return void 0 === e.getAttribute
                                            ? eu.prop(e, t, n)
                                            : ((1 === i && eu.isXMLDoc(e)) || (o = eu.attrHooks[t.toLowerCase()] || (eu.expr.match.bool.test(t) ? to : void 0)),
                                              void 0 !== n
                                                  ? null === n
                                                      ? void eu.removeAttr(e, t)
                                                      : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                                                      ? r
                                                      : (e.setAttribute(t, n + ""), n)
                                                  : o && "get" in o && null !== (r = o.get(e, t))
                                                  ? r
                                                  : null == (r = eu.find.attr(e, t))
                                                  ? void 0
                                                  : r);
                                },
                                attrHooks: {
                                    type: {
                                        set: function (e, t) {
                                            if (!ea.radioValue && "radio" === t && eu.nodeName(e, "input")) {
                                                var n = e.value;
                                                return e.setAttribute("type", t), n && (e.value = n), t;
                                            }
                                        },
                                    },
                                },
                                removeAttr: function (e, t) {
                                    var n,
                                        r = 0,
                                        o = t && t.match(ew);
                                    if (o && 1 === e.nodeType) for (; (n = o[r++]); ) e.removeAttribute(n);
                                },
                            }),
                            (to = {
                                set: function (e, t, n) {
                                    return !1 === t ? eu.removeAttr(e, n) : e.setAttribute(n, n), n;
                                },
                            }),
                            eu.each(eu.expr.match.bool.source.match(/\w+/g), function (e, t) {
                                var n = ti[t] || eu.find.attr;
                                ti[t] = function (e, t, r) {
                                    var o,
                                        i,
                                        a = t.toLowerCase();
                                    return r || ((i = ti[a]), (ti[a] = o), (o = null != n(e, t, r) ? a : null), (ti[a] = i)), o;
                                };
                            });
                        var ta = /^(?:input|select|textarea|button)$/i,
                            ts = /^(?:a|area)$/i;
                        eu.fn.extend({
                            prop: function (e, t) {
                                return eT(this, eu.prop, e, t, arguments.length > 1);
                            },
                            removeProp: function (e) {
                                return this.each(function () {
                                    delete this[eu.propFix[e] || e];
                                });
                            },
                        }),
                            eu.extend({
                                prop: function (e, t, n) {
                                    var r,
                                        o,
                                        i = e.nodeType;
                                    if (3 !== i && 8 !== i && 2 !== i)
                                        return (
                                            (1 === i && eu.isXMLDoc(e)) || ((t = eu.propFix[t] || t), (o = eu.propHooks[t])),
                                            void 0 !== n ? (o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e[t] = n)) : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                                        );
                                },
                                propHooks: {
                                    tabIndex: {
                                        get: function (e) {
                                            var t = eu.find.attr(e, "tabindex");
                                            return t ? parseInt(t, 10) : ta.test(e.nodeName) || (ts.test(e.nodeName) && e.href) ? 0 : -1;
                                        },
                                    },
                                },
                                propFix: { for: "htmlFor", class: "className" },
                            }),
                            ea.optSelected ||
                                (eu.propHooks.selected = {
                                    get: function (e) {
                                        var t = e.parentNode;
                                        return t && t.parentNode && t.parentNode.selectedIndex, null;
                                    },
                                    set: function (e) {
                                        var t = e.parentNode;
                                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                                    },
                                }),
                            eu.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                                eu.propFix[this.toLowerCase()] = this;
                            }),
                            eu.fn.extend({
                                addClass: function (e) {
                                    var t,
                                        n,
                                        r,
                                        o,
                                        i,
                                        a,
                                        s,
                                        u = 0;
                                    if (eu.isFunction(e))
                                        return this.each(function (t) {
                                            eu(this).addClass(e.call(this, t, B(this)));
                                        });
                                    if ("string" == typeof e && e) {
                                        for (t = e.match(ew) || []; (n = this[u++]); )
                                            if (((o = B(n)), (r = 1 === n.nodeType && " " + W(o) + " "))) {
                                                for (a = 0; (i = t[a++]); ) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                                                o !== (s = W(r)) && n.setAttribute("class", s);
                                            }
                                    }
                                    return this;
                                },
                                removeClass: function (e) {
                                    var t,
                                        n,
                                        r,
                                        o,
                                        i,
                                        a,
                                        s,
                                        u = 0;
                                    if (eu.isFunction(e))
                                        return this.each(function (t) {
                                            eu(this).removeClass(e.call(this, t, B(this)));
                                        });
                                    if (!arguments.length) return this.attr("class", "");
                                    if ("string" == typeof e && e) {
                                        for (t = e.match(ew) || []; (n = this[u++]); )
                                            if (((o = B(n)), (r = 1 === n.nodeType && " " + W(o) + " "))) {
                                                for (a = 0; (i = t[a++]); ) for (; r.indexOf(" " + i + " ") > -1; ) r = r.replace(" " + i + " ", " ");
                                                o !== (s = W(r)) && n.setAttribute("class", s);
                                            }
                                    }
                                    return this;
                                },
                                toggleClass: function (e, t) {
                                    var n = typeof e;
                                    return "boolean" == typeof t && "string" === n
                                        ? t
                                            ? this.addClass(e)
                                            : this.removeClass(e)
                                        : eu.isFunction(e)
                                        ? this.each(function (n) {
                                              eu(this).toggleClass(e.call(this, n, B(this), t), t);
                                          })
                                        : this.each(function () {
                                              var t, r, o, i;
                                              if ("string" === n) for (r = 0, o = eu(this), i = e.match(ew) || []; (t = i[r++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                                              else
                                                  (void 0 !== e && "boolean" !== n) ||
                                                      ((t = B(this)) && eN.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : eN.get(this, "__className__") || ""));
                                          });
                                },
                                hasClass: function (e) {
                                    var t,
                                        n,
                                        r = 0;
                                    for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && (" " + W(B(n)) + " ").indexOf(t) > -1) return !0;
                                    return !1;
                                },
                            });
                        var tu = /\r/g;
                        eu.fn.extend({
                            val: function (e) {
                                var t,
                                    n,
                                    r,
                                    o = this[0];
                                return arguments.length
                                    ? ((r = eu.isFunction(e)),
                                      this.each(function (n) {
                                          var o;
                                          1 === this.nodeType &&
                                              (null == (o = r ? e.call(this, n, eu(this).val()) : e)
                                                  ? (o = "")
                                                  : "number" == typeof o
                                                  ? (o += "")
                                                  : eu.isArray(o) &&
                                                    (o = eu.map(o, function (e) {
                                                        return null == e ? "" : e + "";
                                                    })),
                                              ((t = eu.valHooks[this.type] || eu.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value")) || (this.value = o));
                                      }))
                                    : o
                                    ? (t = eu.valHooks[o.type] || eu.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value"))
                                        ? n
                                        : "string" == typeof (n = o.value)
                                        ? n.replace(tu, "")
                                        : null == n
                                        ? ""
                                        : n
                                    : void 0;
                            },
                        }),
                            eu.extend({
                                valHooks: {
                                    option: {
                                        get: function (e) {
                                            var t = eu.find.attr(e, "value");
                                            return null != t ? t : W(eu.text(e));
                                        },
                                    },
                                    select: {
                                        get: function (e) {
                                            var t,
                                                n,
                                                r,
                                                o = e.options,
                                                i = e.selectedIndex,
                                                a = "select-one" === e.type,
                                                s = a ? null : [],
                                                u = a ? i + 1 : o.length;
                                            for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                                                if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !eu.nodeName(n.parentNode, "optgroup"))) {
                                                    if (((t = eu(n).val()), a)) return t;
                                                    s.push(t);
                                                }
                                            return s;
                                        },
                                        set: function (e, t) {
                                            for (var n, r, o = e.options, i = eu.makeArray(t), a = o.length; a--; ) ((r = o[a]).selected = eu.inArray(eu.valHooks.option.get(r), i) > -1) && (n = !0);
                                            return n || (e.selectedIndex = -1), i;
                                        },
                                    },
                                },
                            }),
                            eu.each(["radio", "checkbox"], function () {
                                (eu.valHooks[this] = {
                                    set: function (e, t) {
                                        if (eu.isArray(t)) return (e.checked = eu.inArray(eu(e).val(), t) > -1);
                                    },
                                }),
                                    ea.checkOn ||
                                        (eu.valHooks[this].get = function (e) {
                                            return null === e.getAttribute("value") ? "on" : e.value;
                                        });
                            });
                        var tl = /^(?:focusinfocus|focusoutblur)$/;
                        eu.extend(eu.event, {
                            trigger: function (t, n, r, o) {
                                var i,
                                    a,
                                    s,
                                    u,
                                    l,
                                    c,
                                    f,
                                    p = [r || G],
                                    h = er.call(t, "type") ? t.type : t,
                                    d = er.call(t, "namespace") ? t.namespace.split(".") : [];
                                if (
                                    ((a = s = r = r || G),
                                    3 !== r.nodeType &&
                                        8 !== r.nodeType &&
                                        !tl.test(h + eu.event.triggered) &&
                                        (h.indexOf(".") > -1 && ((h = (d = h.split(".")).shift()), d.sort()),
                                        (l = 0 > h.indexOf(":") && "on" + h),
                                        ((t = t[eu.expando] ? t : new eu.Event(h, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
                                        (t.namespace = d.join(".")),
                                        (t.rnamespace = t.namespace ? RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                                        (t.result = void 0),
                                        t.target || (t.target = r),
                                        (n = null == n ? [t] : eu.makeArray(n, [t])),
                                        (f = eu.event.special[h] || {}),
                                        o || !f.trigger || !1 !== f.trigger.apply(r, n)))
                                ) {
                                    if (!o && !f.noBubble && !eu.isWindow(r)) {
                                        for (u = f.delegateType || h, tl.test(u + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), (s = a);
                                        s === (r.ownerDocument || G) && p.push(s.defaultView || s.parentWindow || e);
                                    }
                                    for (i = 0; (a = p[i++]) && !t.isPropagationStopped(); )
                                        (t.type = i > 1 ? u : f.bindType || h),
                                            (c = (eN.get(a, "events") || {})[t.type] && eN.get(a, "handle")) && c.apply(a, n),
                                            (c = l && a[l]) && c.apply && ej(a) && ((t.result = c.apply(a, n)), !1 === t.result && t.preventDefault());
                                    return (
                                        (t.type = h),
                                        o ||
                                            t.isDefaultPrevented() ||
                                            (f._default && !1 !== f._default.apply(p.pop(), n)) ||
                                            !ej(r) ||
                                            (l && eu.isFunction(r[h]) && !eu.isWindow(r) && ((s = r[l]) && (r[l] = null), (eu.event.triggered = h), r[h](), (eu.event.triggered = void 0), s && (r[l] = s))),
                                        t.result
                                    );
                                }
                            },
                            simulate: function (e, t, n) {
                                var r = eu.extend(new eu.Event(), n, { type: e, isSimulated: !0 });
                                eu.event.trigger(r, null, t);
                            },
                        }),
                            eu.fn.extend({
                                trigger: function (e, t) {
                                    return this.each(function () {
                                        eu.event.trigger(e, t, this);
                                    });
                                },
                                triggerHandler: function (e, t) {
                                    var n = this[0];
                                    if (n) return eu.event.trigger(e, t, n, !0);
                                },
                            }),
                            eu.each(
                                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
                                function (e, t) {
                                    eu.fn[t] = function (e, n) {
                                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                                    };
                                }
                            ),
                            eu.fn.extend({
                                hover: function (e, t) {
                                    return this.mouseenter(e).mouseleave(t || e);
                                },
                            }),
                            (ea.focusin = "onfocusin" in e),
                            ea.focusin ||
                                eu.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                                    var n = function (e) {
                                        eu.event.simulate(t, e.target, eu.event.fix(e));
                                    };
                                    eu.event.special[t] = {
                                        setup: function () {
                                            var r = this.ownerDocument || this,
                                                o = eN.access(r, t);
                                            o || r.addEventListener(e, n, !0), eN.access(r, t, (o || 0) + 1);
                                        },
                                        teardown: function () {
                                            var r = this.ownerDocument || this,
                                                o = eN.access(r, t) - 1;
                                            o ? eN.access(r, t, o) : (r.removeEventListener(e, n, !0), eN.remove(r, t));
                                        },
                                    };
                                });
                        var tc = e.location,
                            tf = eu.now(),
                            tp = /\?/;
                        eu.parseXML = function (t) {
                            var n;
                            if (!t || "string" != typeof t) return null;
                            try {
                                n = new e.DOMParser().parseFromString(t, "text/xml");
                            } catch (r) {
                                n = void 0;
                            }
                            return (n && !n.getElementsByTagName("parsererror").length) || eu.error("Invalid XML: " + t), n;
                        };
                        var th = /\[\]$/,
                            td = /\r?\n/g,
                            tg = /^(?:submit|button|image|reset|file)$/i,
                            tv = /^(?:input|select|textarea|keygen)/i;
                        (eu.param = function (e, t) {
                            var n,
                                r = [],
                                o = function (e, t) {
                                    var n = eu.isFunction(t) ? t() : t;
                                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                                };
                            if (eu.isArray(e) || (e.jquery && !eu.isPlainObject(e)))
                                eu.each(e, function () {
                                    o(this.name, this.value);
                                });
                            else for (n in e) R(n, e[n], t, o);
                            return r.join("&");
                        }),
                            eu.fn.extend({
                                serialize: function () {
                                    return eu.param(this.serializeArray());
                                },
                                serializeArray: function () {
                                    return this.map(function () {
                                        var e = eu.prop(this, "elements");
                                        return e ? eu.makeArray(e) : this;
                                    })
                                        .filter(function () {
                                            var e = this.type;
                                            return this.name && !eu(this).is(":disabled") && tv.test(this.nodeName) && !tg.test(e) && (this.checked || !eP.test(e));
                                        })
                                        .map(function (e, t) {
                                            var n = eu(this).val();
                                            return null == n
                                                ? null
                                                : eu.isArray(n)
                                                ? eu.map(n, function (e) {
                                                      return { name: t.name, value: e.replace(td, "\r\n") };
                                                  })
                                                : { name: t.name, value: n.replace(td, "\r\n") };
                                        })
                                        .get();
                                },
                            });
                        var tm = /%20/g,
                            ty = /#.*$/,
                            t$ = /([?&])_=[^&]*/,
                            t_ = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                            tb = /^(?:GET|HEAD)$/,
                            tx = /^\/\//,
                            tw = {},
                            tC = {},
                            tk = "*/".concat("*"),
                            tT = G.createElement("a");
                        (tT.href = tc.href),
                            eu.extend({
                                active: 0,
                                lastModified: {},
                                etag: {},
                                ajaxSettings: {
                                    url: tc.href,
                                    type: "GET",
                                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tc.protocol),
                                    global: !0,
                                    processData: !0,
                                    async: !0,
                                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                    accepts: { "*": tk, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                                    contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                                    responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                                    converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": eu.parseXML },
                                    flatOptions: { url: !0, context: !0 },
                                },
                                ajaxSetup: function (e, t) {
                                    return t ? U(U(e, eu.ajaxSettings), t) : U(eu.ajaxSettings, e);
                                },
                                ajaxPrefilter: z(tw),
                                ajaxTransport: z(tC),
                                ajax: function (t, n) {
                                    function r(t, n, r, s) {
                                        var l,
                                            p,
                                            h,
                                            _,
                                            b,
                                            x = n;
                                        c ||
                                            ((c = !0),
                                            u && e.clearTimeout(u),
                                            (o = void 0),
                                            (a = s || ""),
                                            (w.readyState = t > 0 ? 4 : 0),
                                            (l = (t >= 200 && t < 300) || 304 === t),
                                            r &&
                                                (_ = (function e(t, n, r) {
                                                    for (var o, i, a, s, u = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === o && (o = t.mimeType || n.getResponseHeader("Content-Type"));
                                                    if (o) {
                                                        for (i in u)
                                                            if (u[i] && u[i].test(o)) {
                                                                l.unshift(i);
                                                                break;
                                                            }
                                                    }
                                                    if (l[0] in r) a = l[0];
                                                    else {
                                                        for (i in r) {
                                                            if (!l[0] || t.converters[i + " " + l[0]]) {
                                                                a = i;
                                                                break;
                                                            }
                                                            s || (s = i);
                                                        }
                                                        a = a || s;
                                                    }
                                                    if (a) return a !== l[0] && l.unshift(a), r[a];
                                                })(d, w, r)),
                                            (_ = (function e(t, n, r, o) {
                                                var i,
                                                    a,
                                                    s,
                                                    u,
                                                    l,
                                                    c = {},
                                                    f = t.dataTypes.slice();
                                                if (f[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                                                for (a = f.shift(); a; )
                                                    if ((t.responseFields[a] && (r[t.responseFields[a]] = n), !l && o && t.dataFilter && (n = t.dataFilter(n, t.dataType)), (l = a), (a = f.shift()))) {
                                                        if ("*" === a) a = l;
                                                        else if ("*" !== l && l !== a) {
                                                            if (!(s = c[l + " " + a] || c["* " + a])) {
                                                                for (i in c)
                                                                    if ((u = i.split(" "))[1] === a && (s = c[l + " " + u[0]] || c["* " + u[0]])) {
                                                                        !0 === s ? (s = c[i]) : !0 !== c[i] && ((a = u[0]), f.unshift(u[1]));
                                                                        break;
                                                                    }
                                                            }
                                                            if (!0 !== s) {
                                                                if (s && t.throws) n = s(n);
                                                                else
                                                                    try {
                                                                        n = s(n);
                                                                    } catch (p) {
                                                                        return { state: "parsererror", error: s ? p : "No conversion from " + l + " to " + a };
                                                                    }
                                                            }
                                                        }
                                                    }
                                                return { state: "success", data: n };
                                            })(d, _, w, l)),
                                            l
                                                ? (d.ifModified && ((b = w.getResponseHeader("Last-Modified")) && (eu.lastModified[i] = b), (b = w.getResponseHeader("etag")) && (eu.etag[i] = b)),
                                                  204 === t || "HEAD" === d.type ? (x = "nocontent") : 304 === t ? (x = "notmodified") : ((x = _.state), (p = _.data), (l = !(h = _.error))))
                                                : ((h = x), (!t && x) || ((x = "error"), t < 0 && (t = 0))),
                                            (w.status = t),
                                            (w.statusText = (n || x) + ""),
                                            l ? m.resolveWith(g, [p, x, w]) : m.rejectWith(g, [w, x, h]),
                                            w.statusCode($),
                                            ($ = void 0),
                                            f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [w, d, l ? p : h]),
                                            y.fireWith(g, [w, x]),
                                            f && (v.trigger("ajaxComplete", [w, d]), --eu.active || eu.event.trigger("ajaxStop")));
                                    }
                                    "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                                    var o,
                                        i,
                                        a,
                                        s,
                                        u,
                                        l,
                                        c,
                                        f,
                                        p,
                                        h,
                                        d = eu.ajaxSetup({}, n),
                                        g = d.context || d,
                                        v = d.context && (g.nodeType || g.jquery) ? eu(g) : eu.event,
                                        m = eu.Deferred(),
                                        y = eu.Callbacks("once memory"),
                                        $ = d.statusCode || {},
                                        _ = {},
                                        b = {},
                                        x = "canceled",
                                        w = {
                                            readyState: 0,
                                            getResponseHeader: function (e) {
                                                var t;
                                                if (c) {
                                                    if (!s) for (s = {}; (t = t_.exec(a)); ) s[t[1].toLowerCase()] = t[2];
                                                    t = s[e.toLowerCase()];
                                                }
                                                return null == t ? null : t;
                                            },
                                            getAllResponseHeaders: function () {
                                                return c ? a : null;
                                            },
                                            setRequestHeader: function (e, t) {
                                                return null == c && (_[(e = b[e.toLowerCase()] = b[e.toLowerCase()] || e)] = t), this;
                                            },
                                            overrideMimeType: function (e) {
                                                return null == c && (d.mimeType = e), this;
                                            },
                                            statusCode: function (e) {
                                                var t;
                                                if (e) {
                                                    if (c) w.always(e[w.status]);
                                                    else for (t in e) $[t] = [$[t], e[t]];
                                                }
                                                return this;
                                            },
                                            abort: function (e) {
                                                var t = e || x;
                                                return o && o.abort(t), r(0, t), this;
                                            },
                                        };
                                    if (
                                        (m.promise(w),
                                        (d.url = ((t || d.url || tc.href) + "").replace(tx, tc.protocol + "//")),
                                        (d.type = n.method || n.type || d.method || d.type),
                                        (d.dataTypes = (d.dataType || "*").toLowerCase().match(ew) || [""]),
                                        null == d.crossDomain)
                                    ) {
                                        l = G.createElement("a");
                                        try {
                                            (l.href = d.url), (l.href = l.href), (d.crossDomain = tT.protocol + "//" + tT.host != l.protocol + "//" + l.host);
                                        } catch (C) {
                                            d.crossDomain = !0;
                                        }
                                    }
                                    if ((d.data && d.processData && "string" != typeof d.data && (d.data = eu.param(d.data, d.traditional)), X(tw, d, n, w), c)) return w;
                                    for (p in ((f = eu.event && d.global) && 0 == eu.active++ && eu.event.trigger("ajaxStart"),
                                    (d.type = d.type.toUpperCase()),
                                    (d.hasContent = !tb.test(d.type)),
                                    (i = d.url.replace(ty, "")),
                                    d.hasContent
                                        ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(tm, "+"))
                                        : ((h = d.url.slice(i.length)),
                                          d.data && ((i += (tp.test(i) ? "&" : "?") + d.data), delete d.data),
                                          !1 === d.cache && ((i = i.replace(t$, "$1")), (h = (tp.test(i) ? "&" : "?") + "_=" + tf++ + h)),
                                          (d.url = i + h)),
                                    d.ifModified && (eu.lastModified[i] && w.setRequestHeader("If-Modified-Since", eu.lastModified[i]), eu.etag[i] && w.setRequestHeader("If-None-Match", eu.etag[i])),
                                    ((d.data && d.hasContent && !1 !== d.contentType) || n.contentType) && w.setRequestHeader("Content-Type", d.contentType),
                                    w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + tk + "; q=0.01" : "") : d.accepts["*"]),
                                    d.headers))
                                        w.setRequestHeader(p, d.headers[p]);
                                    if (d.beforeSend && (!1 === d.beforeSend.call(g, w, d) || c)) return w.abort();
                                    if (((x = "abort"), y.add(d.complete), w.done(d.success), w.fail(d.error), (o = X(tC, d, n, w)))) {
                                        if (((w.readyState = 1), f && v.trigger("ajaxSend", [w, d]), c)) return w;
                                        d.async &&
                                            d.timeout > 0 &&
                                            (u = e.setTimeout(function () {
                                                w.abort("timeout");
                                            }, d.timeout));
                                        try {
                                            (c = !1), o.send(_, r);
                                        } catch (k) {
                                            if (c) throw k;
                                            r(-1, k);
                                        }
                                    } else r(-1, "No Transport");
                                    return w;
                                },
                                getJSON: function (e, t, n) {
                                    return eu.get(e, t, n, "json");
                                },
                                getScript: function (e, t) {
                                    return eu.get(e, void 0, t, "script");
                                },
                            }),
                            eu.each(["get", "post"], function (e, t) {
                                eu[t] = function (e, n, r, o) {
                                    return eu.isFunction(n) && ((o = o || r), (r = n), (n = void 0)), eu.ajax(eu.extend({ url: e, type: t, dataType: o, data: n, success: r }, eu.isPlainObject(e) && e));
                                };
                            }),
                            (eu._evalUrl = function (e) {
                                return eu.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
                            }),
                            eu.fn.extend({
                                wrapAll: function (e) {
                                    var t;
                                    return (
                                        this[0] &&
                                            (eu.isFunction(e) && (e = e.call(this[0])),
                                            (t = eu(e, this[0].ownerDocument).eq(0).clone(!0)),
                                            this[0].parentNode && t.insertBefore(this[0]),
                                            t
                                                .map(function () {
                                                    for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                                    return e;
                                                })
                                                .append(this)),
                                        this
                                    );
                                },
                                wrapInner: function (e) {
                                    return eu.isFunction(e)
                                        ? this.each(function (t) {
                                              eu(this).wrapInner(e.call(this, t));
                                          })
                                        : this.each(function () {
                                              var t = eu(this),
                                                  n = t.contents();
                                              n.length ? n.wrapAll(e) : t.append(e);
                                          });
                                },
                                wrap: function (e) {
                                    var t = eu.isFunction(e);
                                    return this.each(function (n) {
                                        eu(this).wrapAll(t ? e.call(this, n) : e);
                                    });
                                },
                                unwrap: function (e) {
                                    return (
                                        this.parent(e)
                                            .not("body")
                                            .each(function () {
                                                eu(this).replaceWith(this.childNodes);
                                            }),
                                        this
                                    );
                                },
                            }),
                            (eu.expr.pseudos.hidden = function (e) {
                                return !eu.expr.pseudos.visible(e);
                            }),
                            (eu.expr.pseudos.visible = function (e) {
                                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                            }),
                            (eu.ajaxSettings.xhr = function () {
                                try {
                                    return new e.XMLHttpRequest();
                                } catch (t) {}
                            });
                        var tj = { 0: 200, 1223: 204 },
                            tN = eu.ajaxSettings.xhr();
                        (ea.cors = !!tN && "withCredentials" in tN),
                            (ea.ajax = tN = !!tN),
                            eu.ajaxTransport(function (t) {
                                var n, r;
                                if (ea.cors || (tN && !t.crossDomain))
                                    return {
                                        send: function (o, i) {
                                            var a,
                                                s = t.xhr();
                                            if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                                            for (a in (t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o))
                                                s.setRequestHeader(a, o[a]);
                                            (n = function (e) {
                                                return function () {
                                                    n &&
                                                        ((n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null),
                                                        "abort" === e
                                                            ? s.abort()
                                                            : "error" === e
                                                            ? "number" != typeof s.status
                                                                ? i(0, "error")
                                                                : i(s.status, s.statusText)
                                                            : i(
                                                                  tj[s.status] || s.status,
                                                                  s.statusText,
                                                                  "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText },
                                                                  s.getAllResponseHeaders()
                                                              ));
                                                };
                                            }),
                                                (s.onload = n()),
                                                (r = s.onerror = n("error")),
                                                void 0 !== s.onabort
                                                    ? (s.onabort = r)
                                                    : (s.onreadystatechange = function () {
                                                          4 === s.readyState &&
                                                              e.setTimeout(function () {
                                                                  n && r();
                                                              });
                                                      }),
                                                (n = n("abort"));
                                            try {
                                                s.send((t.hasContent && t.data) || null);
                                            } catch (u) {
                                                if (n) throw u;
                                            }
                                        },
                                        abort: function () {
                                            n && n();
                                        },
                                    };
                            }),
                            eu.ajaxPrefilter(function (e) {
                                e.crossDomain && (e.contents.script = !1);
                            }),
                            eu.ajaxSetup({
                                accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                                contents: { script: /\b(?:java|ecma)script\b/ },
                                converters: {
                                    "text script": function (e) {
                                        return eu.globalEval(e), e;
                                    },
                                },
                            }),
                            eu.ajaxPrefilter("script", function (e) {
                                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                            }),
                            eu.ajaxTransport("script", function (e) {
                                if (e.crossDomain) {
                                    var t, n;
                                    return {
                                        send: function (r, o) {
                                            (t = eu("<script>")
                                                .prop({ charset: e.scriptCharset, src: e.url })
                                                .on(
                                                    "load error",
                                                    (n = function (e) {
                                                        t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                                                    })
                                                )),
                                                G.head.appendChild(t[0]);
                                        },
                                        abort: function () {
                                            n && n();
                                        },
                                    };
                                }
                            });
                        var tS,
                            tq = [],
                            tA = /(=)\?(?=&|$)|\?\?/;
                        eu.ajaxSetup({
                            jsonp: "callback",
                            jsonpCallback: function () {
                                var e = tq.pop() || eu.expando + "_" + tf++;
                                return (this[e] = !0), e;
                            },
                        }),
                            eu.ajaxPrefilter("json jsonp", function (t, n, r) {
                                var o,
                                    i,
                                    a,
                                    s = !1 !== t.jsonp && (tA.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && tA.test(t.data) && "data");
                                if (s || "jsonp" === t.dataTypes[0])
                                    return (
                                        (o = t.jsonpCallback = eu.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                                        s ? (t[s] = t[s].replace(tA, "$1" + o)) : !1 !== t.jsonp && (t.url += (tp.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
                                        (t.converters["script json"] = function () {
                                            return a || eu.error(o + " was not called"), a[0];
                                        }),
                                        (t.dataTypes[0] = "json"),
                                        (i = e[o]),
                                        (e[o] = function () {
                                            a = arguments;
                                        }),
                                        r.always(function () {
                                            void 0 === i ? eu(e).removeProp(o) : (e[o] = i), t[o] && ((t.jsonpCallback = n.jsonpCallback), tq.push(o)), a && eu.isFunction(i) && i(a[0]), (a = i = void 0);
                                        }),
                                        "script"
                                    );
                            }),
                            (ea.createHTMLDocument = (((tS = G.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === tS.childNodes.length)),
                            (eu.parseHTML = function (e, t, n) {
                                var r, o, i;
                                return "string" != typeof e
                                    ? []
                                    : ("boolean" == typeof t && ((n = t), (t = !1)),
                                      t || (ea.createHTMLDocument ? (((r = (t = G.implementation.createHTMLDocument("")).createElement("base")).href = G.location.href), t.head.appendChild(r)) : (t = G)),
                                      (o = em.exec(e)),
                                      (i = !n && []),
                                      o ? [t.createElement(o[1])] : ((o = m([e], t, i)), i && i.length && eu(i).remove(), eu.merge([], o.childNodes)));
                            }),
                            (eu.fn.load = function (e, t, n) {
                                var r,
                                    o,
                                    i,
                                    a = this,
                                    s = e.indexOf(" ");
                                return (
                                    s > -1 && ((r = W(e.slice(s))), (e = e.slice(0, s))),
                                    eu.isFunction(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
                                    a.length > 0 &&
                                        eu
                                            .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                                            .done(function (e) {
                                                (i = arguments), a.html(r ? eu("<div>").append(eu.parseHTML(e)).find(r) : e);
                                            })
                                            .always(
                                                n &&
                                                    function (e, t) {
                                                        a.each(function () {
                                                            n.apply(this, i || [e.responseText, t, e]);
                                                        });
                                                    }
                                            ),
                                    this
                                );
                            }),
                            eu.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                                eu.fn[t] = function (e) {
                                    return this.on(t, e);
                                };
                            }),
                            (eu.expr.pseudos.animated = function (e) {
                                return eu.grep(eu.timers, function (t) {
                                    return e === t.elem;
                                }).length;
                            }),
                            (eu.offset = {
                                setOffset: function (e, t, n) {
                                    var r,
                                        o,
                                        i,
                                        a,
                                        s,
                                        u,
                                        l,
                                        c = eu.css(e, "position"),
                                        f = eu(e),
                                        p = {};
                                    "static" === c && (e.style.position = "relative"),
                                        (s = f.offset()),
                                        (i = eu.css(e, "top")),
                                        (u = eu.css(e, "left")),
                                        (l = ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1) ? ((a = (r = f.position()).top), (o = r.left)) : ((a = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
                                        eu.isFunction(t) && (t = t.call(e, n, eu.extend({}, s))),
                                        null != t.top && (p.top = t.top - s.top + a),
                                        null != t.left && (p.left = t.left - s.left + o),
                                        "using" in t ? t.using.call(e, p) : f.css(p);
                                },
                            }),
                            eu.fn.extend({
                                offset: function (e) {
                                    if (arguments.length)
                                        return void 0 === e
                                            ? this
                                            : this.each(function (t) {
                                                  eu.offset.setOffset(this, e, t);
                                              });
                                    var t,
                                        n,
                                        r,
                                        o,
                                        i = this[0];
                                    if (i)
                                        return i.getClientRects().length
                                            ? (r = i.getBoundingClientRect()).width || r.height
                                                ? ((n = K((o = i.ownerDocument))), (t = o.documentElement), { top: r.top + n.pageYOffset - t.clientTop, left: r.left + n.pageXOffset - t.clientLeft })
                                                : r
                                            : { top: 0, left: 0 };
                                },
                                position: function () {
                                    if (this[0]) {
                                        var e,
                                            t,
                                            n = this[0],
                                            r = { top: 0, left: 0 };
                                        return (
                                            "fixed" === eu.css(n, "position")
                                                ? (t = n.getBoundingClientRect())
                                                : ((e = this.offsetParent()),
                                                  (t = this.offset()),
                                                  eu.nodeName(e[0], "html") || (r = e.offset()),
                                                  (r = { top: r.top + eu.css(e[0], "borderTopWidth", !0), left: r.left + eu.css(e[0], "borderLeftWidth", !0) })),
                                            { top: t.top - r.top - eu.css(n, "marginTop", !0), left: t.left - r.left - eu.css(n, "marginLeft", !0) }
                                        );
                                    }
                                },
                                offsetParent: function () {
                                    return this.map(function () {
                                        for (var e = this.offsetParent; e && "static" === eu.css(e, "position"); ) e = e.offsetParent;
                                        return e || eW;
                                    });
                                },
                            }),
                            eu.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                                var n = "pageYOffset" === t;
                                eu.fn[e] = function (r) {
                                    return eT(
                                        this,
                                        function (e, r, o) {
                                            var i = K(e);
                                            return void 0 === o ? (i ? i[t] : e[r]) : void (i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : (e[r] = o));
                                        },
                                        e,
                                        r,
                                        arguments.length
                                    );
                                };
                            }),
                            eu.each(["top", "left"], function (e, t) {
                                eu.cssHooks[t] = q(ea.pixelPosition, function (e, n) {
                                    if (n) return (n = S(e, t)), eU.test(n) ? eu(e).position()[t] + "px" : n;
                                });
                            }),
                            eu.each({ Height: "height", Width: "width" }, function (e, t) {
                                eu.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                                    eu.fn[r] = function (o, i) {
                                        var a = arguments.length && (n || "boolean" != typeof o),
                                            s = n || (!0 === o || !0 === i ? "margin" : "border");
                                        return eT(
                                            this,
                                            function (t, n, o) {
                                                var i;
                                                return eu.isWindow(t)
                                                    ? 0 === r.indexOf("outer")
                                                        ? t["inner" + e]
                                                        : t.document.documentElement["client" + e]
                                                    : 9 === t.nodeType
                                                    ? ((i = t.documentElement), Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e]))
                                                    : void 0 === o
                                                    ? eu.css(t, n, s)
                                                    : eu.style(t, n, o, s);
                                            },
                                            t,
                                            a ? o : void 0,
                                            a
                                        );
                                    };
                                });
                            }),
                            eu.fn.extend({
                                bind: function (e, t, n) {
                                    return this.on(e, null, t, n);
                                },
                                unbind: function (e, t) {
                                    return this.off(e, null, t);
                                },
                                delegate: function (e, t, n, r) {
                                    return this.on(t, e, n, r);
                                },
                                undelegate: function (e, t, n) {
                                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                                },
                            }),
                            (eu.parseJSON = JSON.parse),
                            "function" == typeof define &&
                                define.amd &&
                                define("jquery", [], function () {
                                    return eu;
                                });
                        var tE = e.jQuery,
                            tD = e.$;
                        return (
                            (eu.noConflict = function (t) {
                                return e.$ === eu && (e.$ = tD), t && e.jQuery === eu && (e.jQuery = tE), eu;
                            }),
                            t || (e.jQuery = e.$ = eu),
                            eu
                        );
                    }),
                    "object" == typeof t && "object" == typeof t.exports
                        ? (t.exports = r.document
                              ? o(r, !0)
                              : function (e) {
                                    if (!e.document) throw Error("jQuery requires a window with a document");
                                    return o(e);
                                })
                        : o(r);
            },
            {},
        ],
        2: [
            function (e, t, n) {
                !(function (e, n, r) {
                    function o(e, t, n) {
                        return e.addEventListener ? void e.addEventListener(t, n, !1) : void e.attachEvent("on" + t, n);
                    }
                    function i(e) {
                        if ("keypress" == e.type) {
                            var t = String.fromCharCode(e.which);
                            return e.shiftKey || (t = t.toLowerCase()), t;
                        }
                        return f[e.which] ? f[e.which] : p[e.which] ? p[e.which] : String.fromCharCode(e.which).toLowerCase();
                    }
                    function a(e, t) {
                        return e.sort().join(",") === t.sort().join(",");
                    }
                    function s(e) {
                        return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e;
                    }
                    function u(e, t) {
                        var n,
                            r,
                            o,
                            i,
                            a,
                            u,
                            l,
                            p = [];
                        for (i = "+" === (l = e) ? ["+"] : (l = l.replace(/\+{2}/g, "+plus")).split("+"), u = 0; u < i.length; ++u)
                            d[(a = i[u])] && (a = d[a]), t && "keypress" != t && h[a] && ((a = h[a]), p.push("shift")), s(a) && p.push(a);
                        return (
                            (t =
                                ((n = a),
                                (r = p),
                                (o = t) ||
                                    (o = (function e() {
                                        if (!c) for (var t in ((c = {}), f)) (t > 95 && t < 112) || (f.hasOwnProperty(t) && (c[f[t]] = t));
                                        return c;
                                    })()[n]
                                        ? "keydown"
                                        : "keypress"),
                                "keypress" == o && r.length && (o = "keydown"),
                                o)),
                            { key: a, modifiers: p, action: t }
                        );
                    }
                    function l(e) {
                        function t(e) {
                            e = e || {};
                            var t,
                                n = !1;
                            for (t in g) e[t] ? (n = !0) : (g[t] = 0);
                            n || (y = !1);
                        }
                        function r(e, t, n, r, o, i) {
                            var u,
                                l,
                                c = [],
                                f = n.type;
                            if (!h._callbacks[e]) return [];
                            for ("keyup" == f && s(e) && (t = [e]), u = 0; u < h._callbacks[e].length; ++u)
                                if (((l = h._callbacks[e][u]), (r || !l.seq || g[l.seq] == l.level) && f == l.action && (("keypress" == f && !n.metaKey && !n.ctrlKey) || a(t, l.modifiers)))) {
                                    var p = !r && l.combo == o,
                                        d = r && l.seq == r && l.level == i;
                                    (p || d) && h._callbacks[e].splice(u, 1), c.push(l);
                                }
                            return c;
                        }
                        function c(e, t, n, r) {
                            var o, i;
                            h.stopCallback(t, t.target || t.srcElement, n, r) ||
                                (!1 === e(t, n) && ((o = t).preventDefault ? o.preventDefault() : (o.returnValue = !1), (i = t).stopPropagation ? i.stopPropagation() : (i.cancelBubble = !0)));
                        }
                        function f(e) {
                            "number" != typeof e.which && (e.which = e.keyCode);
                            var t,
                                n,
                                r = i(e);
                            if (r)
                                return "keyup" == e.type && v === r
                                    ? void (v = !1)
                                    : void h.handleKey(r, ((n = []), (t = e).shiftKey && n.push("shift"), t.altKey && n.push("alt"), t.ctrlKey && n.push("ctrl"), t.metaKey && n.push("meta"), n), e);
                        }
                        function p(e, n, o, a, s) {
                            h._directMap[e + ":" + o] = n;
                            var l,
                                f = (e = e.replace(/\s+/g, " ")).split(" ");
                            return f.length > 1
                                ? void (function e(n, r, o, a) {
                                      function s(e) {
                                          return function () {
                                              (y = e), ++g[n], clearTimeout(d), (d = setTimeout(t, 1e3));
                                          };
                                      }
                                      function l(e) {
                                          c(o, e, n), "keyup" !== a && (v = i(e)), setTimeout(t, 10);
                                      }
                                      g[n] = 0;
                                      for (var f = 0; f < r.length; ++f) {
                                          var h = f + 1 === r.length ? l : s(a || u(r[f + 1]).action);
                                          p(r[f], h, a, n, f);
                                      }
                                  })(e, f, n, o)
                                : ((l = u(e, o)),
                                  (h._callbacks[l.key] = h._callbacks[l.key] || []),
                                  r(l.key, l.modifiers, { type: l.action }, a, e, s),
                                  void h._callbacks[l.key][a ? "unshift" : "push"]({ callback: n, modifiers: l.modifiers, action: l.action, seq: a, level: s, combo: e }));
                        }
                        var h = this;
                        if (((e = e || n), !(h instanceof l))) return new l(e);
                        (h.target = e), (h._callbacks = {}), (h._directMap = {});
                        var d,
                            g = {},
                            v = !1,
                            m = !1,
                            y = !1;
                        (h._handleKey = function (e, n, o) {
                            var i,
                                a = r(e, n, o),
                                u = {},
                                l = 0,
                                f = !1;
                            for (i = 0; i < a.length; ++i) a[i].seq && (l = Math.max(l, a[i].level));
                            for (i = 0; i < a.length; ++i)
                                if (a[i].seq) {
                                    if (a[i].level != l) continue;
                                    (f = !0), (u[a[i].seq] = 1), c(a[i].callback, o, a[i].combo, a[i].seq);
                                } else f || c(a[i].callback, o, a[i].combo);
                            var p = "keypress" == o.type && m;
                            o.type != y || s(e) || p || t(u), (m = f && "keydown" == o.type);
                        }),
                            (h._bindMultiple = function (e, t, n) {
                                for (var r = 0; r < e.length; ++r) p(e[r], t, n);
                            }),
                            o(e, "keypress", f),
                            o(e, "keydown", f),
                            o(e, "keyup", f);
                    }
                    if (e) {
                        for (
                            var c,
                                f = {
                                    8: "backspace",
                                    9: "tab",
                                    13: "enter",
                                    16: "shift",
                                    17: "ctrl",
                                    18: "alt",
                                    20: "capslock",
                                    27: "esc",
                                    32: "space",
                                    33: "pageup",
                                    34: "pagedown",
                                    35: "end",
                                    36: "home",
                                    37: "left",
                                    38: "up",
                                    39: "right",
                                    40: "down",
                                    45: "ins",
                                    46: "del",
                                    91: "meta",
                                    93: "meta",
                                    224: "meta",
                                },
                                p = { 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" },
                                h = { "~": "`", "!": "1", "@": "2", "#": "3", $: "4", "%": "5", "^": "6", "&": "7", "*": "8", "(": "9", ")": "0", _: "-", "+": "=", ":": ";", '"': "'", "<": ",", ">": ".", "?": "/", "|": "\\" },
                                d = { option: "alt", command: "meta", return: "enter", escape: "esc", plus: "+", mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl" },
                                g = 1;
                            g < 20;
                            ++g
                        )
                            f[111 + g] = "f" + g;
                        for (g = 0; g <= 9; ++g) f[g + 96] = g;
                        (l.prototype.bind = function (e, t, n) {
                            return (e = e instanceof Array ? e : [e]), this._bindMultiple.call(this, e, t, n), this;
                        }),
                            (l.prototype.unbind = function (e, t) {
                                return this.bind.call(this, e, function () {}, t);
                            }),
                            (l.prototype.trigger = function (e, t) {
                                return this._directMap[e + ":" + t] && this._directMap[e + ":" + t]({}, e), this;
                            }),
                            (l.prototype.reset = function () {
                                var e = this;
                                return (e._callbacks = {}), (e._directMap = {}), e;
                            }),
                            (l.prototype.stopCallback = function (e, t) {
                                return (
                                    !((" " + t.className + " ").indexOf(" mousetrap ") > -1) &&
                                    !(function e(t, r) {
                                        return null !== t && t !== n && (t === r || e(t.parentNode, r));
                                    })(t, this.target) &&
                                    ("INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.isContentEditable)
                                );
                            }),
                            (l.prototype.handleKey = function () {
                                return this._handleKey.apply(this, arguments);
                            }),
                            (l.addKeycodes = function (e) {
                                for (var t in e) e.hasOwnProperty(t) && (f[t] = e[t]);
                                c = null;
                            }),
                            (l.init = function () {
                                var e = l(n);
                                for (var t in e)
                                    "_" !== t.charAt(0) &&
                                        (l[t] = (function (t) {
                                            return function () {
                                                return e[t].apply(e, arguments);
                                            };
                                        })(t));
                            }),
                            l.init(),
                            (e.Mousetrap = l),
                            void 0 !== t && t.exports && (t.exports = l),
                            "function" == typeof define &&
                                define.amd &&
                                define(function () {
                                    return l;
                                });
                    }
                })("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null);
            },
            {},
        ],
        3: [
            function (e, t, n) {
                (function (e) {
                    !(function (r) {
                        function o(e) {
                            throw RangeError(A[e]);
                        }
                        function i(e, t) {
                            for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
                            return r;
                        }
                        function a(e, t) {
                            var n = e.split("@"),
                                r = "";
                            return n.length > 1 && ((r = n[0] + "@"), (e = n[1])), r + i((e = e.replace(q, ".")).split("."), t).join(".");
                        }
                        function s(e) {
                            for (var t, n, r = [], o = 0, i = e.length; o < i; )
                                (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i ? (56320 == (64512 & (n = e.charCodeAt(o++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--)) : r.push(t);
                            return r;
                        }
                        function u(e) {
                            return i(e, function (e) {
                                var t = "";
                                return e > 65535 && ((e -= 65536), (t += L(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (t += L(e));
                            }).join("");
                        }
                        function l(e) {
                            return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : _;
                        }
                        function c(e, t) {
                            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
                        }
                        function f(e, t, n) {
                            var r = 0;
                            for (e = n ? D(e / C) : e >> 1, e += D(e / t); e > (E * x) >> 1; r += _) e = D(e / E);
                            return D(r + ((E + 1) * e) / (e + w));
                        }
                        function p(e) {
                            var t,
                                n,
                                r,
                                i,
                                a,
                                s,
                                c,
                                p,
                                h,
                                d,
                                g = [],
                                v = e.length,
                                m = 0,
                                y = T,
                                w = k;
                            for ((n = e.lastIndexOf(j)) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && o("not-basic"), g.push(e.charCodeAt(r));
                            for (i = n > 0 ? n + 1 : 0; i < v; ) {
                                for (a = m, s = 1, c = _; i >= v && o("invalid-input"), ((p = l(e.charCodeAt(i++))) >= _ || p > D(($ - m) / s)) && o("overflow"), (m += p * s), !(p < (h = c <= w ? b : c >= w + x ? x : c - w)); c += _)
                                    s > D($ / (d = _ - h)) && o("overflow"), (s *= d);
                                (w = f(m - a, (t = g.length + 1), 0 == a)), D(m / t) > $ - y && o("overflow"), (y += D(m / t)), (m %= t), g.splice(m++, 0, y);
                            }
                            return u(g);
                        }
                        function h(e) {
                            var t,
                                n,
                                r,
                                i,
                                a,
                                u,
                                l,
                                p,
                                h,
                                d,
                                g,
                                v,
                                m,
                                y,
                                w,
                                C = [];
                            for (v = (e = s(e)).length, t = T, n = 0, a = k, u = 0; u < v; ++u) (g = e[u]) < 128 && C.push(L(g));
                            for (r = i = C.length, i && C.push(j); r < v; ) {
                                for (l = $, u = 0; u < v; ++u) (g = e[u]) >= t && g < l && (l = g);
                                for (l - t > D(($ - n) / (m = r + 1)) && o("overflow"), n += (l - t) * m, t = l, u = 0; u < v; ++u)
                                    if (((g = e[u]) < t && ++n > $ && o("overflow"), g == t)) {
                                        for (p = n, h = _; !(p < (d = h <= a ? b : h >= a + x ? x : h - a)); h += _) (w = p - d), (y = _ - d), C.push(L(c(d + (w % y), 0))), (p = D(w / y));
                                        C.push(L(c(p, 0))), (a = f(n, m, r == i)), (n = 0), ++r;
                                    }
                                ++n, ++t;
                            }
                            return C.join("");
                        }
                        var d = "object" == typeof n && n && !n.nodeType && n,
                            g = "object" == typeof t && t && !t.nodeType && t,
                            v = "object" == typeof e && e;
                        (v.global !== v && v.window !== v && v.self !== v) || (r = v);
                        var m,
                            y,
                            $ = 2147483647,
                            _ = 36,
                            b = 1,
                            x = 26,
                            w = 38,
                            C = 700,
                            k = 72,
                            T = 128,
                            j = "-",
                            N = /^xn--/,
                            S = /[^\x20-\x7E]/,
                            q = /[\x2E\u3002\uFF0E\uFF61]/g,
                            A = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
                            E = _ - b,
                            D = Math.floor,
                            L = String.fromCharCode;
                        if (
                            ((m = {
                                version: "1.4.1",
                                ucs2: { decode: s, encode: u },
                                decode: p,
                                encode: h,
                                toASCII: function e(t) {
                                    return a(t, function (e) {
                                        return S.test(e) ? "xn--" + h(e) : e;
                                    });
                                },
                                toUnicode: function e(t) {
                                    return a(t, function (e) {
                                        return N.test(e) ? p(e.slice(4).toLowerCase()) : e;
                                    });
                                },
                            }),
                            "function" == typeof define && "object" == typeof define.amd && define.amd)
                        )
                            define("punycode", function () {
                                return m;
                            });
                        else if (d && g) {
                            if (t.exports == d) g.exports = m;
                            else for (y in m) m.hasOwnProperty(y) && (d[y] = m[y]);
                        } else r.punycode = m;
                    })(this);
                }.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
            },
            {},
        ],
        4: [
            function (e, t, n) {
                "use strict";
                function r(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }
                t.exports = function (e, t, n, i) {
                    (t = t || "&"), (n = n || "=");
                    var a = {};
                    if ("string" != typeof e || 0 === e.length) return a;
                    var s = /\+/g;
                    e = e.split(t);
                    var u = 1e3;
                    i && "number" == typeof i.maxKeys && (u = i.maxKeys);
                    var l = e.length;
                    u > 0 && l > u && (l = u);
                    for (var c = 0; c < l; ++c) {
                        var f,
                            p,
                            h,
                            d,
                            g = e[c].replace(s, "%20"),
                            v = g.indexOf(n);
                        v >= 0 ? ((f = g.substr(0, v)), (p = g.substr(v + 1))) : ((f = g), (p = "")), (h = decodeURIComponent(f)), (d = decodeURIComponent(p)), r(a, h) ? (o(a[h]) ? a[h].push(d) : (a[h] = [a[h], d])) : (a[h] = d);
                    }
                    return a;
                };
                var o =
                    Array.isArray ||
                    function (e) {
                        return "[object Array]" === Object.prototype.toString.call(e);
                    };
            },
            {},
        ],
        5: [
            function (e, t, n) {
                "use strict";
                function r(e, t) {
                    if (e.map) return e.map(t);
                    for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
                    return n;
                }
                var o = function (e) {
                    switch (typeof e) {
                        case "string":
                            return e;
                        case "boolean":
                            return e ? "true" : "false";
                        case "number":
                            return isFinite(e) ? e : "";
                        default:
                            return "";
                    }
                };
                t.exports = function (e, t, n, s) {
                    return (
                        (t = t || "&"),
                        (n = n || "="),
                        null === e && (e = void 0),
                        "object" == typeof e
                            ? r(a(e), function (a) {
                                  var s = encodeURIComponent(o(a)) + n;
                                  return i(e[a])
                                      ? r(e[a], function (e) {
                                            return s + encodeURIComponent(o(e));
                                        }).join(t)
                                      : s + encodeURIComponent(o(e[a]));
                              }).join(t)
                            : s
                            ? encodeURIComponent(o(s)) + n + encodeURIComponent(o(e))
                            : ""
                    );
                };
                var i =
                        Array.isArray ||
                        function (e) {
                            return "[object Array]" === Object.prototype.toString.call(e);
                        },
                    a =
                        Object.keys ||
                        function (e) {
                            var t = [];
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                            return t;
                        };
            },
            {},
        ],
        6: [
            function (e, t, n) {
                "use strict";
                (n.decode = n.parse = e("./decode")), (n.encode = n.stringify = e("./encode"));
            },
            { "./decode": 4, "./encode": 5 },
        ],
        7: [
            function (e, t, n) {
                "use strict";
                function r() {
                    (this.protocol = null),
                        (this.slashes = null),
                        (this.auth = null),
                        (this.host = null),
                        (this.port = null),
                        (this.hostname = null),
                        (this.hash = null),
                        (this.search = null),
                        (this.query = null),
                        (this.pathname = null),
                        (this.path = null),
                        (this.href = null);
                }
                function o(e, t, n) {
                    if (e && a.isObject(e) && e instanceof r) return e;
                    var o = new r();
                    return o.parse(e, t, n), o;
                }
                var i = e("punycode"),
                    a = e("./util");
                (n.parse = o),
                    (n.resolve = function e(t, n) {
                        return o(t, !1, !0).resolve(n);
                    }),
                    (n.resolveObject = function e(t, n) {
                        return t ? o(t, !1, !0).resolveObject(n) : n;
                    }),
                    (n.format = function e(t) {
                        return a.isString(t) && (t = o(t)), t instanceof r ? t.format() : r.prototype.format.call(t);
                    }),
                    (n.Url = r);
                var s = /^([a-z0-9.+-]+:)/i,
                    u = /:[0-9]*$/,
                    l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                    c = ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"])),
                    f = ["%", "/", "?", ";", "#"].concat(c),
                    p = ["/", "?", "#"],
                    h = /^[+a-z0-9A-Z_-]{0,63}$/,
                    d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                    g = { javascript: !0, "javascript:": !0 },
                    v = { javascript: !0, "javascript:": !0 },
                    m = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
                    y = e("querystring");
                (r.prototype.parse = function (e, t, n) {
                    if (!a.isString(e)) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
                    var r = e.indexOf("?"),
                        o = -1 !== r && r < e.indexOf("#") ? "?" : "#",
                        u = e.split(o);
                    u[0] = u[0].replace(/\\/g, "/");
                    var $ = (e = u.join(o));
                    if ((($ = $.trim()), !n && 1 === e.split("#").length)) {
                        var _ = l.exec($);
                        if (_)
                            return (
                                (this.path = $),
                                (this.href = $),
                                (this.pathname = _[1]),
                                _[2] ? ((this.search = _[2]), t ? (this.query = y.parse(this.search.substr(1))) : (this.query = this.search.substr(1))) : t && ((this.search = ""), (this.query = {})),
                                this
                            );
                    }
                    var b = s.exec($);
                    if (b) {
                        var x = (b = b[0]).toLowerCase();
                        (this.protocol = x), ($ = $.substr(b.length));
                    }
                    if (n || b || $.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                        var w = "//" === $.substr(0, 2);
                        !w || (b && v[b]) || (($ = $.substr(2)), (this.slashes = !0));
                    }
                    if (!v[b] && (w || (b && !m[b]))) {
                        for (var C, k, T = -1, j = 0; j < p.length; j++) {
                            var N = $.indexOf(p[j]);
                            -1 !== N && (-1 === T || N < T) && (T = N);
                        }
                        -1 !== (k = -1 === T ? $.lastIndexOf("@") : $.lastIndexOf("@", T)) && ((C = $.slice(0, k)), ($ = $.slice(k + 1)), (this.auth = decodeURIComponent(C))), (T = -1);
                        for (var j = 0; j < f.length; j++) {
                            var N = $.indexOf(f[j]);
                            -1 !== N && (-1 === T || N < T) && (T = N);
                        }
                        -1 === T && (T = $.length), (this.host = $.slice(0, T)), ($ = $.slice(T)), this.parseHost(), (this.hostname = this.hostname || "");
                        var S = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                        if (!S)
                            for (var q = this.hostname.split(/\./), j = 0, A = q.length; j < A; j++) {
                                var E = q[j];
                                if (E && !E.match(h)) {
                                    for (var D = "", L = 0, O = E.length; L < O; L++) D += E.charCodeAt(L) > 127 ? "x" : E[L];
                                    if (!D.match(h)) {
                                        var H = q.slice(0, j),
                                            P = q.slice(j + 1),
                                            F = E.match(d);
                                        F && (H.push(F[1]), P.unshift(F[2])), P.length && ($ = "/" + P.join(".") + $), (this.hostname = H.join("."));
                                        break;
                                    }
                                }
                            }
                        this.hostname.length > 255 ? (this.hostname = "") : (this.hostname = this.hostname.toLowerCase()), S || (this.hostname = i.toASCII(this.hostname));
                        var M = this.port ? ":" + this.port : "",
                            I = this.hostname || "";
                        (this.host = I + M), (this.href += this.host), S && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), "/" !== $[0] && ($ = "/" + $));
                    }
                    if (!g[x])
                        for (var j = 0, A = c.length; j < A; j++) {
                            var W = c[j];
                            if (-1 !== $.indexOf(W)) {
                                var B = encodeURIComponent(W);
                                B === W && (B = escape(W)), ($ = $.split(W).join(B));
                            }
                        }
                    var R = $.indexOf("#");
                    -1 !== R && ((this.hash = $.substr(R)), ($ = $.slice(0, R)));
                    var z = $.indexOf("?");
                    if (
                        (-1 !== z ? ((this.search = $.substr(z)), (this.query = $.substr(z + 1)), t && (this.query = y.parse(this.query)), ($ = $.slice(0, z))) : t && ((this.search = ""), (this.query = {})),
                        $ && (this.pathname = $),
                        m[x] && this.hostname && !this.pathname && (this.pathname = "/"),
                        this.pathname || this.search)
                    ) {
                        var M = this.pathname || "",
                            X = this.search || "";
                        this.path = M + X;
                    }
                    return (this.href = this.format()), this;
                }),
                    (r.prototype.format = function () {
                        var e = this.auth || "";
                        e && ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ":")), (e += "@"));
                        var t = this.protocol || "",
                            n = this.pathname || "",
                            r = this.hash || "",
                            o = !1,
                            i = "";
                        this.host ? (o = e + this.host) : this.hostname && ((o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]")), this.port && (o += ":" + this.port)),
                            this.query && a.isObject(this.query) && Object.keys(this.query).length && (i = y.stringify(this.query));
                        var s = this.search || (i && "?" + i) || "";
                        return (
                            t && ":" !== t.substr(-1) && (t += ":"),
                            this.slashes || ((!t || m[t]) && !1 !== o) ? ((o = "//" + (o || "")), n && "/" !== n.charAt(0) && (n = "/" + n)) : o || (o = ""),
                            r && "#" !== r.charAt(0) && (r = "#" + r),
                            s && "?" !== s.charAt(0) && (s = "?" + s),
                            t +
                                o +
                                (n = n.replace(/[?#]/g, function (e) {
                                    return encodeURIComponent(e);
                                })) +
                                (s = s.replace("#", "%23")) +
                                r
                        );
                    }),
                    (r.prototype.resolve = function (e) {
                        return this.resolveObject(o(e, !1, !0)).format();
                    }),
                    (r.prototype.resolveObject = function (e) {
                        if (a.isString(e)) {
                            var t = new r();
                            t.parse(e, !1, !0), (e = t);
                        }
                        for (var n = new r(), o = Object.keys(this), i = 0; i < o.length; i++) {
                            var s = o[i];
                            n[s] = this[s];
                        }
                        if (((n.hash = e.hash), "" === e.href)) return (n.href = n.format()), n;
                        if (e.slashes && !e.protocol) {
                            for (var u = Object.keys(e), l = 0; l < u.length; l++) {
                                var c = u[l];
                                "protocol" !== c && (n[c] = e[c]);
                            }
                            return m[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), (n.href = n.format()), n;
                        }
                        if (e.protocol && e.protocol !== n.protocol) {
                            if (!m[e.protocol]) {
                                for (var f = Object.keys(e), p = 0; p < f.length; p++) {
                                    var h = f[p];
                                    n[h] = e[h];
                                }
                                return (n.href = n.format()), n;
                            }
                            if (((n.protocol = e.protocol), e.host || v[e.protocol])) n.pathname = e.pathname;
                            else {
                                for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift()); );
                                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), (n.pathname = d.join("/"));
                            }
                            if (((n.search = e.search), (n.query = e.query), (n.host = e.host || ""), (n.auth = e.auth), (n.hostname = e.hostname || e.host), (n.port = e.port), n.pathname || n.search)) {
                                var g = n.pathname || "",
                                    y = n.search || "";
                                n.path = g + y;
                            }
                            return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
                        }
                        var $ = n.pathname && "/" === n.pathname.charAt(0),
                            _ = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
                            b = _ || $ || (n.host && e.pathname),
                            x = b,
                            w = (n.pathname && n.pathname.split("/")) || [],
                            d = (e.pathname && e.pathname.split("/")) || [],
                            C = n.protocol && !m[n.protocol];
                        if (
                            (C &&
                                ((n.hostname = ""),
                                (n.port = null),
                                n.host && ("" === w[0] ? (w[0] = n.host) : w.unshift(n.host)),
                                (n.host = ""),
                                e.protocol && ((e.hostname = null), (e.port = null), e.host && ("" === d[0] ? (d[0] = e.host) : d.unshift(e.host)), (e.host = null)),
                                (b = b && ("" === d[0] || "" === w[0]))),
                            _)
                        )
                            (n.host = e.host || "" === e.host ? e.host : n.host), (n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname), (n.search = e.search), (n.query = e.query), (w = d);
                        else if (d.length) w || (w = []), w.pop(), (w = w.concat(d)), (n.search = e.search), (n.query = e.query);
                        else if (!a.isNullOrUndefined(e.search)) {
                            if (C) {
                                n.hostname = n.host = w.shift();
                                var k = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                                k && ((n.auth = k.shift()), (n.host = n.hostname = k.shift()));
                            }
                            return (n.search = e.search), (n.query = e.query), (a.isNull(n.pathname) && a.isNull(n.search)) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), (n.href = n.format()), n;
                        }
                        if (!w.length) return (n.pathname = null), n.search ? (n.path = "/" + n.search) : (n.path = null), (n.href = n.format()), n;
                        for (var T = w.slice(-1)[0], j = ((n.host || e.host || w.length > 1) && ("." === T || ".." === T)) || "" === T, N = 0, S = w.length; S >= 0; S--)
                            "." === (T = w[S]) ? w.splice(S, 1) : ".." === T ? (w.splice(S, 1), N++) : N && (w.splice(S, 1), N--);
                        if (!b && !x) for (; N--; N) w.unshift("..");
                        !b || "" === w[0] || (w[0] && "/" === w[0].charAt(0)) || w.unshift(""), j && "/" !== w.join("/").substr(-1) && w.push("");
                        var q = "" === w[0] || (w[0] && "/" === w[0].charAt(0));
                        if (C) {
                            n.hostname = n.host = q ? "" : w.length ? w.shift() : "";
                            var k = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                            k && ((n.auth = k.shift()), (n.host = n.hostname = k.shift()));
                        }
                        return (
                            (b = b || (n.host && w.length)) && !q && w.unshift(""),
                            w.length ? (n.pathname = w.join("/")) : ((n.pathname = null), (n.path = null)),
                            (a.isNull(n.pathname) && a.isNull(n.search)) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
                            (n.auth = e.auth || n.auth),
                            (n.slashes = n.slashes || e.slashes),
                            (n.href = n.format()),
                            n
                        );
                    }),
                    (r.prototype.parseHost = function () {
                        var e = this.host,
                            t = u.exec(e);
                        t && (":" !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))), e && (this.hostname = e);
                    });
            },
            { "./util": 8, punycode: 3, querystring: 6 },
        ],
        8: [
            function (e, t, n) {
                "use strict";
                t.exports = {
                    isString: function (e) {
                        return "string" == typeof e;
                    },
                    isObject: function (e) {
                        return "object" == typeof e && null !== e;
                    },
                    isNull: function (e) {
                        return null === e;
                    },
                    isNullOrUndefined: function (e) {
                        return null == e;
                    },
                };
            },
            {},
        ],
        9: [
            function (e, t, n) {
                function r(e) {
                    i(e.currentTarget).parent().find(".dropdown-menu").toggleClass("open"), e.stopPropagation(), e.preventDefault();
                }
                function o(e) {
                    i(".dropdown-menu").removeClass("open");
                }
                var i = e("jquery");
                t.exports = {
                    init: function e() {
                        i(document).on("click", ".toggle-dropdown", r),
                            i(document).on("click", ".dropdown-menu", function (e) {
                                e.stopPropagation();
                            }),
                            i(document).on("click", o);
                    },
                };
            },
            { jquery: 1 },
        ],
        10: [
            function (e, t, n) {
                var r = e("./dropdown"),
                    o = e("./keyboard"),
                    i = e("./navigation"),
                    a = e("./sidebar"),
                    s = e("./toolbar"),
                    u = window.gitbook;
                u.events.on("start", function e() {
                    a.init(),
                        o.init(),
                        r.init(),
                        i.init(),
                        s.createButton({
                            index: 0,
                            icon: "fa fa-align-justify",
                            onClick: function (e) {
                                e.preventDefault(), a.toggle();
                            },
                        }),
                        s.createButton({
                            index: 1,
                            icon: "fa fa-home",
                            onClick: function (e) {
                                e.preventDefault(), window.location.href = "https://www.imteched.com/home";
                            },
                        });
                }),
                    (u.keyboard = o),
                    (u.navigation = i),
                    (u.sidebar = a),
                    (u.toolbar = s);
            },
            { "./dropdown": 9, "./keyboard": 11, "./navigation": 13, "./sidebar": 15, "./toolbar": 16 },
        ],
        11: [
            function (e, t, n) {
                function r(e, t) {
                    o.bind(e, function (e) {
                        return t(), !1;
                    });
                }
                var o = e("mousetrap"),
                    i = e("./navigation"),
                    a = e("./sidebar");
                t.exports = {
                    init: function e() {
                        r(["right"], function (e) {
                            i.goNext();
                        }),
                            r(["left"], function (e) {
                                i.goPrev();
                            }),
                            r(["s"], function (e) {
                                a.toggle();
                            });
                    },
                    bind: r,
                };
            },
            { "./navigation": 13, "./sidebar": 15, mousetrap: 2 },
        ],
        12: [
            function (e, t, n) {
                var r = window.gitbook;
                t.exports = {
                    show: function e(t) {
                        return (
                            r.state.$book.addClass("is-loading"),
                            t.always(function () {
                                r.state.$book.removeClass("is-loading");
                            }),
                            t
                        );
                    },
                };
            },
            {},
        ],
        13: [
            function (e, t, n) {
                function r() {
                    return v($.isSmallScreen() ? ".book-body" : ".body-inner");
                }
                function o(e) {
                    var t,
                        n = r(),
                        o = 0;
                    (t = e),
                        !r().find(t).length ||
                            (e && (o = a(e)),
                            n.unbind("scroll"),
                            n.animate({ scrollTop: o }, 800, "swing", function () {
                                n.scroll(l);
                            }),
                            s(null, e));
                }
                function i(e) {
                    return 0 === e.length;
                }
                function a(e) {
                    var t,
                        n,
                        o = r(),
                        a = o.find(".page-inner"),
                        s = o.find(e),
                        u = s.offsetParent(),
                        l = 0;
                    if (((t = [o, a, s, u]), (n = i), t.length > 0 && t.filter(n).length > 0)) return 0;
                    l = s.position().top;
                    for (var c = 0; c < 10 && !u.is(a) && !u.is(u.offsetParent()); c++) (l += (s = u).position().top), (u = s.offsetParent());
                    return Math.floor(l);
                }
                function s(e, t) {
                    if (
                        (e || t || (e = d.first()),
                        t &&
                            (e =
                                d.length > 1
                                    ? d
                                          .filter(function () {
                                              return u(v(this)) == t;
                                          })
                                          .first()
                                    : d.first()),
                        !e.is(g))
                    ) {
                        (g = e), d.removeClass("active"), e.addClass("active"), (t = u(e));
                        var n = window.location.pathname + window.location.hash,
                            r = window.location.pathname + t;
                        r != n && history.replaceState({ path: r }, null, r);
                    }
                }
                function u(e) {
                    var t = e.children("a").attr("href").split("#")[1];
                    return t && (t = "#" + t), t || "";
                }
                function l() {
                    var e = r(),
                        t = e.scrollTop(),
                        n = e.prop("scrollHeight"),
                        o = e.prop("clientHeight"),
                        i = d.length,
                        l = null;
                    v(d.get().reverse()).each(function (e) {
                        var n,
                            r = u(v(this));
                        r && !l && t >= (n = a(r)) && (l = v(this)), e != i - 1 || l || (l = v(this));
                    }),
                        l || t || (l = d.first()),
                        t && n - t == o && (l = d.last()),
                        s(l);
                }
                function c(e, t) {
                    var n = m.parse(x),
                        r = m.resolve(window.location.pathname, e),
                        i = m.parse(r),
                        a = i.hash,
                        s = i.pathname !== n.pathname,
                        u = Boolean(i.hostname);
                    if (!b || u) return void (location.href = e);
                    if (!s) return t && history.pushState({ path: r }, null, r), o(a);
                    x = r;
                    var l = v
                        .Deferred(function (e) {
                            v.ajax({
                                type: "GET",
                                url: r,
                                cache: !0,
                                headers: { "Access-Control-Expose-Headers": "X-Current-Location" },
                                success: function (n, i, s) {
                                    var u,
                                        l = s.getResponseHeader("X-Current-Location") || r,
                                        c = v(
                                            (n = n.replace(/<(\/?)(html|head|body)([^>]*)>/gi, function (e, t, n, r) {
                                                return "<" + t + "div" + (t ? "" : ' data-element="' + n + '"') + r + ">";
                                            }))
                                        ),
                                        f = c.find(".book");
                                    if (0 === f.length) {
                                        var h = Error("Invalid gitbook page, redirecting...");
                                        return e.reject(h);
                                    }
                                    t && history.pushState({ path: l }, null, l), (u = (c = v(n)).find("[data-element=head]")), (f = c.find(".book")), (document.title = u.find("title").text());
                                    var d = v("head");
                                    d.find("link[rel=prev]").remove(), d.find("link[rel=next]").remove(), d.append(u.find("link[rel=prev]")), d.append(u.find("link[rel=next]"));
                                    var g = v(".book").attr("class"),
                                        m = v(".book-summary").scrollTop();
                                    f.toggleClass("with-summary", v(".book").hasClass("with-summary")),
                                        v(".book").replaceWith(f),
                                        v(".book").attr("class", g),
                                        v(".book-summary").scrollTop(m),
                                        (_.state.$book = v(".book")),
                                        p(!a),
                                        a && o(a),
                                        e.resolve();
                                },
                            });
                        })
                        .promise();
                    return y.show(
                        l.fail(function (e) {
                            console.log(e);
                        })
                    );
                }
                function f() {
                    (e = parseInt(v(".body-inner").css("width"), 10)), (t = parseInt(v(".page-wrapper").css("width"), 10)), v(".navigation-next").css("margin-right", e - t + "px");
                    var e,
                        t,
                        n = r();
                    n.unbind("scroll"), n.scroll(l);
                }
                function p(e) {
                    var t = v(".book-body").find(".body-inner").find(".page-wrapper");
                    f(), t.focus();
                    var n = r();
                    !1 !== e && n.scrollTop(0),
                        (d = v(".book-summary .summary .chapter").filter(function () {
                            var e = v(this).children("a"),
                                t = null;
                            if (!e.length) return !1;
                            t = e.attr("href").split("#")[0];
                            var n = m.resolve(window.location.pathname, t);
                            return window.location.pathname == n;
                        })).length > 1
                            ? n.scroll(l)
                            : (g = d.first());
                }
                function h(e) {
                    var t,
                        n,
                        r = v(this),
                        o = r.attr("target");
                    if (!(t = e).metaKey && !t.altKey && !t.ctrlKey && !t.shiftKey && 0 === (n = e).button && !o) {
                        e.stopPropagation(), e.preventDefault();
                        var i = r.attr("href");
                        i && c(i, !0);
                    }
                }
                var d,
                    g,
                    v = e("jquery"),
                    m = e("url"),
                    y = e("./loading"),
                    $ = e("./platform"),
                    _ = window.gitbook,
                    b = void 0 !== history.pushState,
                    x = location.href;
                t.exports = {
                    init: function e() {
                        v.ajaxSetup({ cache: !1 }),
                            history.replaceState({ path: window.location.href }, ""),
                            (window.onpopstate = function (e) {
                                if (null !== e.state) return c(e.state.path, !1);
                            }),
                            v(document).on("click", ".navigation-prev", h),
                            v(document).on("click", ".navigation-next", h),
                            v(document).on("click", ".summary [data-path] a", h),
                            v(document).on("click", ".page-inner a", h),
                            v(window).resize(f),
                            p(!1);
                    },
                    goNext: function e() {
                        var t = v(".navigation-next").attr("href");
                        t && c(t, !0);
                    },
                    goPrev: function e() {
                        var t = v(".navigation-prev").attr("href");
                        t && c(t, !0);
                    },
                };
            },
            { "./loading": 12, "./platform": 14, jquery: 1, url: 7 },
        ],
        14: [
            function (e, t, n) {
                var r = e("jquery");
                t.exports = {
                    isMobile: function () {
                        return 600 >= r(document).width();
                    },
                    isSmallScreen: function () {
                        return 1240 >= r(document).width();
                    },
                };
            },
            { jquery: 1 },
        ],
        15: [
            function (e, t, n) {
                function r(e, t) {
                    (null != s.state && o() == e) || (null == t && (t = !0), s.state.$book.toggleClass("without-animation", !t), s.state.$book.toggleClass("with-summary", e), s.storage.set("sidebar", o()));
                }
                function o() {
                    return s.state.$book.hasClass("with-summary");
                }
                var i = e("jquery"),
                    a = e("./platform"),
                    s = window.gitbook;
                t.exports = {
                    init: function e() {
                        a.isMobile() || r(s.storage.get("sidebar", !0), !1),
                            i(document).on("click", ".book-summary li.chapter a", function (e) {
                                a.isMobile() && r(!1, !1);
                            });
                    },
                    isOpen: o,
                    toggle: r,
                    filter: function e(t) {
                        i(".book-summary")
                            .find("li")
                            .each(function () {
                                var e = i(this).data("path"),
                                    n = null == t || -1 !== t.indexOf(e);
                                i(this).toggle(n), n && i(this).parents("li").show();
                            });
                    },
                };
            },
            { "./platform": 14, jquery: 1 },
        ],
        16: [
            function (e, t, n) {
                function r(e) {
                    e.preventDefault();
                }
                function o(e) {
                    var t,
                        n = a(".book-header"),
                        o = n.find("h1"),
                        i = "pull-" + e.position,
                        s = a("<a>", { class: "btn", text: e.text ? " " + e.text : "", "aria-label": e.label, href: "#" });
                    if ((s.click(e.onClick), e.icon && a("<i>", { class: e.icon }).prependTo(s), e.dropdown)) {
                        var u,
                            l,
                            c = a("<div>", { class: "dropdown " + i + " " + e.className });
                        s.addClass("toggle-dropdown"), c.append(s);
                        var f =
                            ((u = e.dropdown),
                            (l = a("<div>", { class: "dropdown-menu", html: '<div class="dropdown-caret"><span class="caret-outer"></span><span class="caret-inner"></span></div>' })),
                            "string" == typeof u
                                ? l.append(u)
                                : u
                                      .map(function (e) {
                                          return a.isArray(e) ? e : [e];
                                      })
                                      .forEach(function (e) {
                                          var t = a("<div>", { class: "buttons" }),
                                              n = "size-" + e.length;
                                          e.forEach(function (e) {
                                              e = a.extend({ text: "", className: "", onClick: r }, e || {});
                                              var o = a("<button>", { class: "button " + n + " " + e.className, text: e.text });
                                              o.click(e.onClick), t.append(o);
                                          }),
                                              l.append(t);
                                      }),
                            l);
                        f.addClass("dropdown-" + ("right" == e.position ? "left" : "right")), c.append(f), (t = c);
                    } else s.addClass(i), s.addClass(e.className), (t = s);
                    var p,
                        h,
                        d,
                        g,
                        v = ".btn, .dropdown, h1";
                    t.addClass("js-toolbar-action"),
                        a.isNumeric(e.index) && e.index >= 0
                            ? ((p = n), (h = e.index), (d = t), (g = p.children(v).length), h < 0 && (h = Math.max(0, g + 1 + h)), p.append(d), h < g && p.children(v).eq(h).before(p.children(v).last()))
                            : t.insertBefore(o);
                }
                function i() {
                    a(".js-toolbar-action").remove(), u.forEach(o);
                }
                var a = e("jquery"),
                    s = window.gitbook,
                    u = [],
                    l = 0;
                s.events.on("page.change", function () {
                    i();
                }),
                    (t.exports = {
                        createButton: function e(t) {
                            return (t = a.extend({ label: "", icon: "", text: "", position: "left", className: "", onClick: r, dropdown: null, index: null, id: "btn-" + l++ }, t || {})), u.push(t), o(t), t.id;
                        },
                        removeButton: function e(t) {
                            (u = a.grep(u, function (e) {
                                return e.id != t;
                            })),
                                i();
                        },
                        removeButtons: function e(t) {
                            (u = a.grep(u, function (e) {
                                return -1 == t.indexOf(e.id);
                            })),
                                i();
                        },
                    });
            },
            { jquery: 1 },
        ],
    },
    {},
    [10]
);
