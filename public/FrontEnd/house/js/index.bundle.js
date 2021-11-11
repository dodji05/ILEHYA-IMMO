!function (t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {i: n, l: !1, exports: {}};
        return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }

    i.m = t, i.c = e, i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function (e) {
            return t[e]
        }.bind(null, r));
        return n
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 33)
}([function (t, e, i) {
    var n;
    /*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributorsowl
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
    !function (e, i) {
        "use strict";
        "object" == typeof t.exports ? t.exports = e.document ? i(e, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return i(t)
        } : i(e)
    }("undefined" != typeof window ? window : this, (function (i, r) {
        "use strict";
        var o = [], s = Object.getPrototypeOf, a = o.slice, l = o.flat ? function (t) {
                return o.flat.call(t)
            } : function (t) {
                return o.concat.apply([], t)
            }, c = o.push, u = o.indexOf, h = {}, d = h.toString, f = h.hasOwnProperty, p = f.toString, g = p.call(Object),
            m = {}, v = function (t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            }, y = function (t) {
                return null != t && t === t.window
            }, _ = i.document, b = {type: !0, src: !0, nonce: !0, noModule: !0};

        function w(t, e, i) {
            var n, r, o = (i = i || _).createElement("script");
            if (o.text = t, e) for (n in b) (r = e[n] || e.getAttribute && e.getAttribute(n)) && o.setAttribute(n, r);
            i.head.appendChild(o).parentNode.removeChild(o)
        }

        function x(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? h[d.call(t)] || "object" : typeof t
        }

        var k = function (t, e) {
            return new k.fn.init(t, e)
        };

        function C(t) {
            var e = !!t && "length" in t && t.length, i = x(t);
            return !v(t) && !y(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        k.fn = k.prototype = {
            jquery: "3.5.1", constructor: k, length: 0, toArray: function () {
                return a.call(this)
            }, get: function (t) {
                return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
            }, pushStack: function (t) {
                var e = k.merge(this.constructor(), t);
                return e.prevObject = this, e
            }, each: function (t) {
                return k.each(this, t)
            }, map: function (t) {
                return this.pushStack(k.map(this, (function (e, i) {
                    return t.call(e, i, e)
                })))
            }, slice: function () {
                return this.pushStack(a.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, even: function () {
                return this.pushStack(k.grep(this, (function (t, e) {
                    return (e + 1) % 2
                })))
            }, odd: function () {
                return this.pushStack(k.grep(this, (function (t, e) {
                    return e % 2
                })))
            }, eq: function (t) {
                var e = this.length, i = +t + (t < 0 ? e : 0);
                return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: c, sort: o.sort, splice: o.splice
        }, k.extend = k.fn.extend = function () {
            var t, e, i, n, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) n = t[e], "__proto__" !== e && s !== n && (c && n && (k.isPlainObject(n) || (r = Array.isArray(n))) ? (i = s[e], o = r && !Array.isArray(i) ? [] : r || k.isPlainObject(i) ? i : {}, r = !1, s[e] = k.extend(c, o, n)) : void 0 !== n && (s[e] = n));
            return s
        }, k.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isPlainObject: function (t) {
                var e, i;
                return !(!t || "[object Object]" !== d.call(t)) && (!(e = s(t)) || "function" == typeof (i = f.call(e, "constructor") && e.constructor) && p.call(i) === g)
            }, isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            }, globalEval: function (t, e, i) {
                w(t, {nonce: e && e.nonce}, i)
            }, each: function (t, e) {
                var i, n = 0;
                if (C(t)) for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++) ; else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
                return t
            }, makeArray: function (t, e) {
                var i = e || [];
                return null != t && (C(Object(t)) ? k.merge(i, "string" == typeof t ? [t] : t) : c.call(i, t)), i
            }, inArray: function (t, e, i) {
                return null == e ? -1 : u.call(e, t, i)
            }, merge: function (t, e) {
                for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
                return t.length = r, t
            }, grep: function (t, e, i) {
                for (var n = [], r = 0, o = t.length, s = !i; r < o; r++) !e(t[r], r) !== s && n.push(t[r]);
                return n
            }, map: function (t, e, i) {
                var n, r, o = 0, s = [];
                if (C(t)) for (n = t.length; o < n; o++) null != (r = e(t[o], o, i)) && s.push(r); else for (o in t) null != (r = e(t[o], o, i)) && s.push(r);
                return l(s)
            }, guid: 1, support: m
        }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = o[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (t, e) {
            h["[object " + e + "]"] = e.toLowerCase()
        }));
        var S =
            /*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
            function (t) {
                var e, i, n, r, o, s, a, l, c, u, h, d, f, p, g, m, v, y, _, b = "sizzle" + 1 * new Date,
                    w = t.document, x = 0, k = 0, C = lt(), S = lt(), T = lt(), M = lt(), D = function (t, e) {
                        return t === e && (h = !0), 0
                    }, O = {}.hasOwnProperty, E = [], P = E.pop, A = E.push, I = E.push, j = E.slice, N = function (t, e) {
                        for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                        return -1
                    },
                    F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    L = "[\\x20\\t\\r\\n\\f]",
                    R = "(?:\\\\[\\da-fA-F]{1,6}" + L + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    $ = "\\[" + L + "*(" + R + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + L + "*\\]",
                    z = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
                    W = new RegExp(L + "+", "g"),
                    H = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                    B = new RegExp("^" + L + "*," + L + "*"), V = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                    Y = new RegExp(L + "|>"), q = new RegExp(z), U = new RegExp("^" + R + "$"), G = {
                        ID: new RegExp("^#(" + R + ")"),
                        CLASS: new RegExp("^\\.(" + R + ")"),
                        TAG: new RegExp("^(" + R + "|[*])"),
                        ATTR: new RegExp("^" + $),
                        PSEUDO: new RegExp("^" + z),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + F + ")$", "i"),
                        needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                    }, Q = /HTML$/i, X = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
                    J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/,
                    et = new RegExp("\\\\[\\da-fA-F]{1,6}" + L + "?|\\\\([^\\r\\n\\f])", "g"), it = function (t, e) {
                        var i = "0x" + t.slice(1) - 65536;
                        return e || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
                    }, nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, rt = function (t, e) {
                        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    }, ot = function () {
                        d()
                    }, st = bt((function (t) {
                        return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                    }), {dir: "parentNode", next: "legend"});
                try {
                    I.apply(E = j.call(w.childNodes), w.childNodes), E[w.childNodes.length].nodeType
                } catch (t) {
                    I = {
                        apply: E.length ? function (t, e) {
                            A.apply(t, j.call(e))
                        } : function (t, e) {
                            for (var i = t.length, n = 0; t[i++] = e[n++];) ;
                            t.length = i - 1
                        }
                    }
                }

                function at(t, e, n, r) {
                    var o, a, c, u, h, p, v, y = e && e.ownerDocument, w = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return n;
                    if (!r && (d(e), e = e || f, g)) {
                        if (11 !== w && (h = J.exec(t))) if (o = h[1]) {
                            if (9 === w) {
                                if (!(c = e.getElementById(o))) return n;
                                if (c.id === o) return n.push(c), n
                            } else if (y && (c = y.getElementById(o)) && _(e, c) && c.id === o) return n.push(c), n
                        } else {
                            if (h[2]) return I.apply(n, e.getElementsByTagName(t)), n;
                            if ((o = h[3]) && i.getElementsByClassName && e.getElementsByClassName) return I.apply(n, e.getElementsByClassName(o)), n
                        }
                        if (i.qsa && !M[t + " "] && (!m || !m.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
                            if (v = t, y = e, 1 === w && (Y.test(t) || V.test(t))) {
                                for ((y = tt.test(t) && vt(e.parentNode) || e) === e && i.scope || ((u = e.getAttribute("id")) ? u = u.replace(nt, rt) : e.setAttribute("id", u = b)), a = (p = s(t)).length; a--;) p[a] = (u ? "#" + u : ":scope") + " " + _t(p[a]);
                                v = p.join(",")
                            }
                            try {
                                return I.apply(n, y.querySelectorAll(v)), n
                            } catch (e) {
                                M(t, !0)
                            } finally {
                                u === b && e.removeAttribute("id")
                            }
                        }
                    }
                    return l(t.replace(H, "$1"), e, n, r)
                }

                function lt() {
                    var t = [];
                    return function e(i, r) {
                        return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = r
                    }
                }

                function ct(t) {
                    return t[b] = !0, t
                }

                function ut(t) {
                    var e = f.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function ht(t, e) {
                    for (var i = t.split("|"), r = i.length; r--;) n.attrHandle[i[r]] = e
                }

                function dt(t, e) {
                    var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (n) return n;
                    if (i) for (; i = i.nextSibling;) if (i === e) return -1;
                    return t ? 1 : -1
                }

                function ft(t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function pt(t) {
                    return function (e) {
                        var i = e.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && e.type === t
                    }
                }

                function gt(t) {
                    return function (e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function mt(t) {
                    return ct((function (e) {
                        return e = +e, ct((function (i, n) {
                            for (var r, o = t([], i.length, e), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                        }))
                    }))
                }

                function vt(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }

                for (e in i = at.support = {}, o = at.isXML = function (t) {
                    var e = t.namespaceURI, i = (t.ownerDocument || t).documentElement;
                    return !Q.test(e || i && i.nodeName || "HTML")
                }, d = at.setDocument = function (t) {
                    var e, r, s = t ? t.ownerDocument || t : w;
                    return s != f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement, g = !o(f), w != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ot, !1) : r.attachEvent && r.attachEvent("onunload", ot)), i.scope = ut((function (t) {
                        return p.appendChild(t).appendChild(f.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                    })), i.attributes = ut((function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    })), i.getElementsByTagName = ut((function (t) {
                        return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length
                    })), i.getElementsByClassName = K.test(f.getElementsByClassName), i.getById = ut((function (t) {
                        return p.appendChild(t).id = b, !f.getElementsByName || !f.getElementsByName(b).length
                    })), i.getById ? (n.filter.ID = function (t) {
                        var e = t.replace(et, it);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }, n.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var i = e.getElementById(t);
                            return i ? [i] : []
                        }
                    }) : (n.filter.ID = function (t) {
                        var e = t.replace(et, it);
                        return function (t) {
                            var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return i && i.value === e
                        }
                    }, n.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var i, n, r, o = e.getElementById(t);
                            if (o) {
                                if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                                for (r = e.getElementsByName(t), n = 0; o = r[n++];) if ((i = o.getAttributeNode("id")) && i.value === t) return [o]
                            }
                            return []
                        }
                    }), n.find.TAG = i.getElementsByTagName ? function (t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var i, n = [], r = 0, o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return o
                    }, n.find.CLASS = i.getElementsByClassName && function (t, e) {
                        if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                    }, v = [], m = [], (i.qsa = K.test(f.querySelectorAll)) && (ut((function (t) {
                        var e;
                        p.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + L + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + L + "*(?:value|" + F + ")"), t.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), (e = f.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || m.push("\\[" + L + "*name" + L + "*=" + L + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]"), t.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                    })), ut((function (t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = f.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + L + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                    }))), (i.matchesSelector = K.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ut((function (t) {
                        i.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", z)
                    })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = K.test(p.compareDocumentPosition), _ = e || K.test(p.contains) ? function (t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function (t, e) {
                        if (e) for (; e = e.parentNode;) if (e === t) return !0;
                        return !1
                    }, D = e ? function (t, e) {
                        if (t === e) return h = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (1 & (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t == f || t.ownerDocument == w && _(w, t) ? -1 : e == f || e.ownerDocument == w && _(w, e) ? 1 : u ? N(u, t) - N(u, e) : 0 : 4 & n ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return h = !0, 0;
                        var i, n = 0, r = t.parentNode, o = e.parentNode, s = [t], a = [e];
                        if (!r || !o) return t == f ? -1 : e == f ? 1 : r ? -1 : o ? 1 : u ? N(u, t) - N(u, e) : 0;
                        if (r === o) return dt(t, e);
                        for (i = t; i = i.parentNode;) s.unshift(i);
                        for (i = e; i = i.parentNode;) a.unshift(i);
                        for (; s[n] === a[n];) n++;
                        return n ? dt(s[n], a[n]) : s[n] == w ? -1 : a[n] == w ? 1 : 0
                    }, f) : f
                }, at.matches = function (t, e) {
                    return at(t, null, null, e)
                }, at.matchesSelector = function (t, e) {
                    if (d(t), i.matchesSelector && g && !M[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                        var n = y.call(t, e);
                        if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                    } catch (t) {
                        M(e, !0)
                    }
                    return at(e, f, null, [t]).length > 0
                }, at.contains = function (t, e) {
                    return (t.ownerDocument || t) != f && d(t), _(t, e)
                }, at.attr = function (t, e) {
                    (t.ownerDocument || t) != f && d(t);
                    var r = n.attrHandle[e.toLowerCase()],
                        o = r && O.call(n.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
                    return void 0 !== o ? o : i.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
                }, at.escape = function (t) {
                    return (t + "").replace(nt, rt)
                }, at.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, at.uniqueSort = function (t) {
                    var e, n = [], r = 0, o = 0;
                    if (h = !i.detectDuplicates, u = !i.sortStable && t.slice(0), t.sort(D), h) {
                        for (; e = t[o++];) e === t[o] && (r = n.push(o));
                        for (; r--;) t.splice(n[r], 1)
                    }
                    return u = null, t
                }, r = at.getText = function (t) {
                    var e, i = "", n = 0, o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else for (; e = t[n++];) i += r(e);
                    return i
                }, (n = at.selectors = {
                    cacheLength: 50,
                    createPseudo: ct,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(et, it), t[3] = (t[3] || t[4] || t[5] || "").replace(et, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        }, CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                        }, PSEUDO: function (t) {
                            var e, i = !t[6] && t[2];
                            return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && q.test(i) && (e = s(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(et, it).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        }, CLASS: function (t) {
                            var e = C[t + " "];
                            return e || (e = new RegExp("(^|" + L + ")" + t + "(" + L + "|$)")) && C(t, (function (t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            }))
                        }, ATTR: function (t, e, i) {
                            return function (n) {
                                var r = at.attr(n, t);
                                return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r.replace(W, " ") + " ").indexOf(i) > -1 : "|=" === e && (r === i || r.slice(0, i.length + 1) === i + "-"))
                            }
                        }, CHILD: function (t, e, i, n, r) {
                            var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                            return 1 === n && 0 === r ? function (t) {
                                return !!t.parentNode
                            } : function (e, i, l) {
                                var c, u, h, d, f, p, g = o !== s ? "nextSibling" : "previousSibling", m = e.parentNode,
                                    v = a && e.nodeName.toLowerCase(), y = !l && !a, _ = !1;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (d = e; d = d[g];) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            p = g = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                        for (_ = (f = (c = (u = (h = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (_ = f = 0) || p.pop();) if (1 === d.nodeType && ++_ && d === e) {
                                            u[t] = [x, f, _];
                                            break
                                        }
                                    } else if (y && (_ = f = (c = (u = (h = (d = e)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === x && c[1]), !1 === _) for (; (d = ++f && d && d[g] || (_ = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++_ || (y && ((u = (h = d[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [x, _]), d !== e));) ;
                                    return (_ -= r) === n || _ % n == 0 && _ / n >= 0
                                }
                            }
                        }, PSEUDO: function (t, e) {
                            var i,
                                r = n.pseudos[t] || n.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                            return r[b] ? r(e) : r.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? ct((function (t, i) {
                                for (var n, o = r(t, e), s = o.length; s--;) t[n = N(t, o[s])] = !(i[n] = o[s])
                            })) : function (t) {
                                return r(t, 0, i)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: ct((function (t) {
                            var e = [], i = [], n = a(t.replace(H, "$1"));
                            return n[b] ? ct((function (t, e, i, r) {
                                for (var o, s = n(t, null, r, []), a = t.length; a--;) (o = s[a]) && (t[a] = !(e[a] = o))
                            })) : function (t, r, o) {
                                return e[0] = t, n(e, null, o, i), e[0] = null, !i.pop()
                            }
                        })), has: ct((function (t) {
                            return function (e) {
                                return at(t, e).length > 0
                            }
                        })), contains: ct((function (t) {
                            return t = t.replace(et, it), function (e) {
                                return (e.textContent || r(e)).indexOf(t) > -1
                            }
                        })), lang: ct((function (t) {
                            return U.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, it).toLowerCase(), function (e) {
                                var i;
                                do {
                                    if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        })), target: function (e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id
                        }, root: function (t) {
                            return t === p
                        }, focus: function (t) {
                            return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        }, enabled: gt(!1), disabled: gt(!0), checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        }, selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        }, empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                            return !0
                        }, parent: function (t) {
                            return !n.pseudos.empty(t)
                        }, header: function (t) {
                            return Z.test(t.nodeName)
                        }, input: function (t) {
                            return X.test(t.nodeName)
                        }, button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        }, text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        }, first: mt((function () {
                            return [0]
                        })), last: mt((function (t, e) {
                            return [e - 1]
                        })), eq: mt((function (t, e, i) {
                            return [i < 0 ? i + e : i]
                        })), even: mt((function (t, e) {
                            for (var i = 0; i < e; i += 2) t.push(i);
                            return t
                        })), odd: mt((function (t, e) {
                            for (var i = 1; i < e; i += 2) t.push(i);
                            return t
                        })), lt: mt((function (t, e, i) {
                            for (var n = i < 0 ? i + e : i > e ? e : i; --n >= 0;) t.push(n);
                            return t
                        })), gt: mt((function (t, e, i) {
                            for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                            return t
                        }))
                    }
                }).pseudos.nth = n.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) n.pseudos[e] = ft(e);
                for (e in {submit: !0, reset: !0}) n.pseudos[e] = pt(e);

                function yt() {
                }

                function _t(t) {
                    for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                    return n
                }

                function bt(t, e, i) {
                    var n = e.dir, r = e.next, o = r || n, s = i && "parentNode" === o, a = k++;
                    return e.first ? function (e, i, r) {
                        for (; e = e[n];) if (1 === e.nodeType || s) return t(e, i, r);
                        return !1
                    } : function (e, i, l) {
                        var c, u, h, d = [x, a];
                        if (l) {
                            for (; e = e[n];) if ((1 === e.nodeType || s) && t(e, i, l)) return !0
                        } else for (; e = e[n];) if (1 === e.nodeType || s) if (u = (h = e[b] || (e[b] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[n] || e; else {
                            if ((c = u[o]) && c[0] === x && c[1] === a) return d[2] = c[2];
                            if (u[o] = d, d[2] = t(e, i, l)) return !0
                        }
                        return !1
                    }
                }

                function wt(t) {
                    return t.length > 1 ? function (e, i, n) {
                        for (var r = t.length; r--;) if (!t[r](e, i, n)) return !1;
                        return !0
                    } : t[0]
                }

                function xt(t, e, i, n, r) {
                    for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++) (o = t[a]) && (i && !i(o, n, r) || (s.push(o), c && e.push(a)));
                    return s
                }

                function kt(t, e, i, n, r, o) {
                    return n && !n[b] && (n = kt(n)), r && !r[b] && (r = kt(r, o)), ct((function (o, s, a, l) {
                        var c, u, h, d = [], f = [], p = s.length, g = o || function (t, e, i) {
                                for (var n = 0, r = e.length; n < r; n++) at(t, e[n], i);
                                return i
                            }(e || "*", a.nodeType ? [a] : a, []), m = !t || !o && e ? g : xt(g, d, t, a, l),
                            v = i ? r || (o ? t : p || n) ? [] : s : m;
                        if (i && i(m, v, a, l), n) for (c = xt(v, f), n(c, [], a, l), u = c.length; u--;) (h = c[u]) && (v[f[u]] = !(m[f[u]] = h));
                        if (o) {
                            if (r || t) {
                                if (r) {
                                    for (c = [], u = v.length; u--;) (h = v[u]) && c.push(m[u] = h);
                                    r(null, v = [], c, l)
                                }
                                for (u = v.length; u--;) (h = v[u]) && (c = r ? N(o, h) : d[u]) > -1 && (o[c] = !(s[c] = h))
                            }
                        } else v = xt(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : I.apply(s, v)
                    }))
                }

                function Ct(t) {
                    for (var e, i, r, o = t.length, s = n.relative[t[0].type], a = s || n.relative[" "], l = s ? 1 : 0, u = bt((function (t) {
                        return t === e
                    }), a, !0), h = bt((function (t) {
                        return N(e, t) > -1
                    }), a, !0), d = [function (t, i, n) {
                        var r = !s && (n || i !== c) || ((e = i).nodeType ? u(t, i, n) : h(t, i, n));
                        return e = null, r
                    }]; l < o; l++) if (i = n.relative[t[l].type]) d = [bt(wt(d), i)]; else {
                        if ((i = n.filter[t[l].type].apply(null, t[l].matches))[b]) {
                            for (r = ++l; r < o && !n.relative[t[r].type]; r++) ;
                            return kt(l > 1 && wt(d), l > 1 && _t(t.slice(0, l - 1).concat({value: " " === t[l - 2].type ? "*" : ""})).replace(H, "$1"), i, l < r && Ct(t.slice(l, r)), r < o && Ct(t = t.slice(r)), r < o && _t(t))
                        }
                        d.push(i)
                    }
                    return wt(d)
                }

                return yt.prototype = n.filters = n.pseudos, n.setFilters = new yt, s = at.tokenize = function (t, e) {
                    var i, r, o, s, a, l, c, u = S[t + " "];
                    if (u) return e ? 0 : u.slice(0);
                    for (a = t, l = [], c = n.preFilter; a;) {
                        for (s in i && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = V.exec(a)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(H, " ")
                        }), a = a.slice(i.length)), n.filter) !(r = G[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                            value: i,
                            type: s,
                            matches: r
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return e ? a.length : a ? at.error(t) : S(t, l).slice(0)
                }, a = at.compile = function (t, e) {
                    var i, r = [], o = [], a = T[t + " "];
                    if (!a) {
                        for (e || (e = s(t)), i = e.length; i--;) (a = Ct(e[i]))[b] ? r.push(a) : o.push(a);
                        (a = T(t, function (t, e) {
                            var i = e.length > 0, r = t.length > 0, o = function (o, s, a, l, u) {
                                var h, p, m, v = 0, y = "0", _ = o && [], b = [], w = c,
                                    k = o || r && n.find.TAG("*", u), C = x += null == w ? 1 : Math.random() || .1,
                                    S = k.length;
                                for (u && (c = s == f || s || u); y !== S && null != (h = k[y]); y++) {
                                    if (r && h) {
                                        for (p = 0, s || h.ownerDocument == f || (d(h), a = !g); m = t[p++];) if (m(h, s || f, a)) {
                                            l.push(h);
                                            break
                                        }
                                        u && (x = C)
                                    }
                                    i && ((h = !m && h) && v--, o && _.push(h))
                                }
                                if (v += y, i && y !== v) {
                                    for (p = 0; m = e[p++];) m(_, b, s, a);
                                    if (o) {
                                        if (v > 0) for (; y--;) _[y] || b[y] || (b[y] = P.call(l));
                                        b = xt(b)
                                    }
                                    I.apply(l, b), u && !o && b.length > 0 && v + e.length > 1 && at.uniqueSort(l)
                                }
                                return u && (x = C, c = w), _
                            };
                            return i ? ct(o) : o
                        }(o, r))).selector = t
                    }
                    return a
                }, l = at.select = function (t, e, i, r) {
                    var o, l, c, u, h, d = "function" == typeof t && t, f = !r && s(t = d.selector || t);
                    if (i = i || [], 1 === f.length) {
                        if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && n.relative[l[1].type]) {
                            if (!(e = (n.find.ID(c.matches[0].replace(et, it), e) || [])[0])) return i;
                            d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                        }
                        for (o = G.needsContext.test(t) ? 0 : l.length; o-- && (c = l[o], !n.relative[u = c.type]);) if ((h = n.find[u]) && (r = h(c.matches[0].replace(et, it), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                            if (l.splice(o, 1), !(t = r.length && _t(l))) return I.apply(i, r), i;
                            break
                        }
                    }
                    return (d || a(t, f))(r, e, !g, i, !e || tt.test(t) && vt(e.parentNode) || e), i
                }, i.sortStable = b.split("").sort(D).join("") === b, i.detectDuplicates = !!h, d(), i.sortDetached = ut((function (t) {
                    return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
                })), ut((function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                })) || ht("type|href|height|width", (function (t, e, i) {
                    if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                })), i.attributes && ut((function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                })) || ht("value", (function (t, e, i) {
                    if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                })), ut((function (t) {
                    return null == t.getAttribute("disabled")
                })) || ht(F, (function (t, e, i) {
                    var n;
                    if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                })), at
            }(i);
        k.find = S, k.expr = S.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = S.uniqueSort, k.text = S.getText, k.isXMLDoc = S.isXML, k.contains = S.contains, k.escapeSelector = S.escape;
        var T = function (t, e, i) {
            for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                if (r && k(t).is(i)) break;
                n.push(t)
            }
            return n
        }, M = function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }, D = k.expr.match.needsContext;

        function O(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }

        var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function P(t, e, i) {
            return v(e) ? k.grep(t, (function (t, n) {
                return !!e.call(t, n, t) !== i
            })) : e.nodeType ? k.grep(t, (function (t) {
                return t === e !== i
            })) : "string" != typeof e ? k.grep(t, (function (t) {
                return u.call(e, t) > -1 !== i
            })) : k.filter(e, t, i)
        }

        k.filter = function (t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? k.find.matchesSelector(n, t) ? [n] : [] : k.find.matches(t, k.grep(e, (function (t) {
                return 1 === t.nodeType
            })))
        }, k.fn.extend({
            find: function (t) {
                var e, i, n = this.length, r = this;
                if ("string" != typeof t) return this.pushStack(k(t).filter((function () {
                    for (e = 0; e < n; e++) if (k.contains(r[e], this)) return !0
                })));
                for (i = this.pushStack([]), e = 0; e < n; e++) k.find(t, r[e], i);
                return n > 1 ? k.uniqueSort(i) : i
            }, filter: function (t) {
                return this.pushStack(P(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(P(this, t || [], !0))
            }, is: function (t) {
                return !!P(this, "string" == typeof t && D.test(t) ? k(t) : t || [], !1).length
            }
        });
        var A, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (k.fn.init = function (t, e, i) {
            var n, r;
            if (!t) return this;
            if (i = i || A, "string" == typeof t) {
                if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : I.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof k ? e[0] : e, k.merge(this, k.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : _, !0)), E.test(n[1]) && k.isPlainObject(e)) for (n in e) v(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return (r = _.getElementById(n[2])) && (this[0] = r, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : v(t) ? void 0 !== i.ready ? i.ready(t) : t(k) : k.makeArray(t, this)
        }).prototype = k.fn, A = k(_);
        var j = /^(?:parents|prev(?:Until|All))/, N = {children: !0, contents: !0, next: !0, prev: !0};

        function F(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType;) ;
            return t
        }

        k.fn.extend({
            has: function (t) {
                var e = k(t, this), i = e.length;
                return this.filter((function () {
                    for (var t = 0; t < i; t++) if (k.contains(this, e[t])) return !0
                }))
            }, closest: function (t, e) {
                var i, n = 0, r = this.length, o = [], s = "string" != typeof t && k(t);
                if (!D.test(t)) for (; n < r; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && k.find.matchesSelector(i, t))) {
                    o.push(i);
                    break
                }
                return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o)
            }, index: function (t) {
                return t ? "string" == typeof t ? u.call(k(t), this[0]) : u.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(k.uniqueSort(k.merge(this.get(), k(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), k.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return T(t, "parentNode")
            }, parentsUntil: function (t, e, i) {
                return T(t, "parentNode", i)
            }, next: function (t) {
                return F(t, "nextSibling")
            }, prev: function (t) {
                return F(t, "previousSibling")
            }, nextAll: function (t) {
                return T(t, "nextSibling")
            }, prevAll: function (t) {
                return T(t, "previousSibling")
            }, nextUntil: function (t, e, i) {
                return T(t, "nextSibling", i)
            }, prevUntil: function (t, e, i) {
                return T(t, "previousSibling", i)
            }, siblings: function (t) {
                return M((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return M(t.firstChild)
            }, contents: function (t) {
                return null != t.contentDocument && s(t.contentDocument) ? t.contentDocument : (O(t, "template") && (t = t.content || t), k.merge([], t.childNodes))
            }
        }, (function (t, e) {
            k.fn[t] = function (i, n) {
                var r = k.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = k.filter(n, r)), this.length > 1 && (N[t] || k.uniqueSort(r), j.test(t) && r.reverse()), this.pushStack(r)
            }
        }));
        var L = /[^\x20\t\r\n\f]+/g;

        function R(t) {
            return t
        }

        function $(t) {
            throw t
        }

        function z(t, e, i, n) {
            var r;
            try {
                t && v(r = t.promise) ? r.call(t).done(e).fail(i) : t && v(r = t.then) ? r.call(t, e, i) : e.apply(void 0, [t].slice(n))
            } catch (t) {
                i.apply(void 0, [t])
            }
        }

        k.Callbacks = function (t) {
            t = "string" == typeof t ? function (t) {
                var e = {};
                return k.each(t.match(L) || [], (function (t, i) {
                    e[i] = !0
                })), e
            }(t) : k.extend({}, t);
            var e, i, n, r, o = [], s = [], a = -1, l = function () {
                for (r = r || t.once, n = e = !0; s.length; a = -1) for (i = s.shift(); ++a < o.length;) !1 === o[a].apply(i[0], i[1]) && t.stopOnFalse && (a = o.length, i = !1);
                t.memory || (i = !1), e = !1, r && (o = i ? [] : "")
            }, c = {
                add: function () {
                    return o && (i && !e && (a = o.length - 1, s.push(i)), function e(i) {
                        k.each(i, (function (i, n) {
                            v(n) ? t.unique && c.has(n) || o.push(n) : n && n.length && "string" !== x(n) && e(n)
                        }))
                    }(arguments), i && !e && l()), this
                }, remove: function () {
                    return k.each(arguments, (function (t, e) {
                        for (var i; (i = k.inArray(e, o, i)) > -1;) o.splice(i, 1), i <= a && a--
                    })), this
                }, has: function (t) {
                    return t ? k.inArray(t, o) > -1 : o.length > 0
                }, empty: function () {
                    return o && (o = []), this
                }, disable: function () {
                    return r = s = [], o = i = "", this
                }, disabled: function () {
                    return !o
                }, lock: function () {
                    return r = s = [], i || e || (o = i = ""), this
                }, locked: function () {
                    return !!r
                }, fireWith: function (t, i) {
                    return r || (i = [t, (i = i || []).slice ? i.slice() : i], s.push(i), e || l()), this
                }, fire: function () {
                    return c.fireWith(this, arguments), this
                }, fired: function () {
                    return !!n
                }
            };
            return c
        }, k.extend({
            Deferred: function (t) {
                var e = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
                    n = "pending", r = {
                        state: function () {
                            return n
                        }, always: function () {
                            return o.done(arguments).fail(arguments), this
                        }, catch: function (t) {
                            return r.then(null, t)
                        }, pipe: function () {
                            var t = arguments;
                            return k.Deferred((function (i) {
                                k.each(e, (function (e, n) {
                                    var r = v(t[n[4]]) && t[n[4]];
                                    o[n[1]]((function () {
                                        var t = r && r.apply(this, arguments);
                                        t && v(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, r ? [t] : arguments)
                                    }))
                                })), t = null
                            })).promise()
                        }, then: function (t, n, r) {
                            var o = 0;

                            function s(t, e, n, r) {
                                return function () {
                                    var a = this, l = arguments, c = function () {
                                        var i, c;
                                        if (!(t < o)) {
                                            if ((i = n.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                            c = i && ("object" == typeof i || "function" == typeof i) && i.then, v(c) ? r ? c.call(i, s(o, e, R, r), s(o, e, $, r)) : (o++, c.call(i, s(o, e, R, r), s(o, e, $, r), s(o, e, R, e.notifyWith))) : (n !== R && (a = void 0, l = [i]), (r || e.resolveWith)(a, l))
                                        }
                                    }, u = r ? c : function () {
                                        try {
                                            c()
                                        } catch (i) {
                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(i, u.stackTrace), t + 1 >= o && (n !== $ && (a = void 0, l = [i]), e.rejectWith(a, l))
                                        }
                                    };
                                    t ? u() : (k.Deferred.getStackHook && (u.stackTrace = k.Deferred.getStackHook()), i.setTimeout(u))
                                }
                            }

                            return k.Deferred((function (i) {
                                e[0][3].add(s(0, i, v(r) ? r : R, i.notifyWith)), e[1][3].add(s(0, i, v(t) ? t : R)), e[2][3].add(s(0, i, v(n) ? n : $))
                            })).promise()
                        }, promise: function (t) {
                            return null != t ? k.extend(t, r) : r
                        }
                    }, o = {};
                return k.each(e, (function (t, i) {
                    var s = i[2], a = i[5];
                    r[i[1]] = s.add, a && s.add((function () {
                        n = a
                    }), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), s.add(i[3].fire), o[i[0]] = function () {
                        return o[i[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[i[0] + "With"] = s.fireWith
                })), r.promise(o), t && t.call(o, o), o
            }, when: function (t) {
                var e = arguments.length, i = e, n = Array(i), r = a.call(arguments), o = k.Deferred(),
                    s = function (t) {
                        return function (i) {
                            n[t] = this, r[t] = arguments.length > 1 ? a.call(arguments) : i, --e || o.resolveWith(n, r)
                        }
                    };
                if (e <= 1 && (z(t, o.done(s(i)).resolve, o.reject, !e), "pending" === o.state() || v(r[i] && r[i].then))) return o.then();
                for (; i--;) z(r[i], s(i), o.reject);
                return o.promise()
            }
        });
        var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        k.Deferred.exceptionHook = function (t, e) {
            i.console && i.console.warn && t && W.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, k.readyException = function (t) {
            i.setTimeout((function () {
                throw t
            }))
        };
        var H = k.Deferred();

        function B() {
            _.removeEventListener("DOMContentLoaded", B), i.removeEventListener("load", B), k.ready()
        }

        k.fn.ready = function (t) {
            return H.then(t).catch((function (t) {
                k.readyException(t)
            })), this
        }, k.extend({
            isReady: !1, readyWait: 1, ready: function (t) {
                (!0 === t ? --k.readyWait : k.isReady) || (k.isReady = !0, !0 !== t && --k.readyWait > 0 || H.resolveWith(_, [k]))
            }
        }), k.ready.then = H.then, "complete" === _.readyState || "loading" !== _.readyState && !_.documentElement.doScroll ? i.setTimeout(k.ready) : (_.addEventListener("DOMContentLoaded", B), i.addEventListener("load", B));
        var V = function (t, e, i, n, r, o, s) {
            var a = 0, l = t.length, c = null == i;
            if ("object" === x(i)) for (a in r = !0, i) V(t, e, a, i[a], !0, o, s); else if (void 0 !== n && (r = !0, v(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function (t, e, i) {
                return c.call(k(t), i)
            })), e)) for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
            return r ? t : c ? e.call(t) : l ? e(t[0], i) : o
        }, Y = /^-ms-/, q = /-([a-z])/g;

        function U(t, e) {
            return e.toUpperCase()
        }

        function G(t) {
            return t.replace(Y, "ms-").replace(q, U)
        }

        var Q = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

        function X() {
            this.expando = k.expando + X.uid++
        }

        X.uid = 1, X.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {}, Q(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            }, set: function (t, e, i) {
                var n, r = this.cache(t);
                if ("string" == typeof e) r[G(e)] = i; else for (n in e) r[G(n)] = e[n];
                return r
            }, get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][G(e)]
            }, access: function (t, e, i) {
                return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
            }, remove: function (t, e) {
                var i, n = t[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== e) {
                        i = (e = Array.isArray(e) ? e.map(G) : (e = G(e)) in n ? [e] : e.match(L) || []).length;
                        for (; i--;) delete n[e[i]]
                    }
                    (void 0 === e || k.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            }, hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !k.isEmptyObject(e)
            }
        };
        var Z = new X, K = new X, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, tt = /[A-Z]/g;

        function et(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType) if (n = "data-" + e.replace(tt, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = function (t) {
                        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : J.test(t) ? JSON.parse(t) : t)
                    }(i)
                } catch (t) {
                }
                K.set(t, e, i)
            } else i = void 0;
            return i
        }

        k.extend({
            hasData: function (t) {
                return K.hasData(t) || Z.hasData(t)
            }, data: function (t, e, i) {
                return K.access(t, e, i)
            }, removeData: function (t, e) {
                K.remove(t, e)
            }, _data: function (t, e, i) {
                return Z.access(t, e, i)
            }, _removeData: function (t, e) {
                Z.remove(t, e)
            }
        }), k.fn.extend({
            data: function (t, e) {
                var i, n, r, o = this[0], s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = K.get(o), 1 === o.nodeType && !Z.get(o, "hasDataAttrs"))) {
                        for (i = s.length; i--;) s[i] && 0 === (n = s[i].name).indexOf("data-") && (n = G(n.slice(5)), et(o, n, r[n]));
                        Z.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each((function () {
                    K.set(this, t)
                })) : V(this, (function (e) {
                    var i;
                    if (o && void 0 === e) return void 0 !== (i = K.get(o, t)) || void 0 !== (i = et(o, t)) ? i : void 0;
                    this.each((function () {
                        K.set(this, t, e)
                    }))
                }), null, e, arguments.length > 1, null, !0)
            }, removeData: function (t) {
                return this.each((function () {
                    K.remove(this, t)
                }))
            }
        }), k.extend({
            queue: function (t, e, i) {
                var n;
                if (t) return e = (e || "fx") + "queue", n = Z.get(t, e), i && (!n || Array.isArray(i) ? n = Z.access(t, e, k.makeArray(i)) : n.push(i)), n || []
            }, dequeue: function (t, e) {
                e = e || "fx";
                var i = k.queue(t, e), n = i.length, r = i.shift(), o = k._queueHooks(t, e);
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, (function () {
                    k.dequeue(t, e)
                }), o)), !n && o && o.empty.fire()
            }, _queueHooks: function (t, e) {
                var i = e + "queueHooks";
                return Z.get(t, i) || Z.access(t, i, {
                    empty: k.Callbacks("once memory").add((function () {
                        Z.remove(t, [e + "queue", i])
                    }))
                })
            }
        }), k.fn.extend({
            queue: function (t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? k.queue(this[0], t) : void 0 === e ? this : this.each((function () {
                    var i = k.queue(this, t, e);
                    k._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && k.dequeue(this, t)
                }))
            }, dequeue: function (t) {
                return this.each((function () {
                    k.dequeue(this, t)
                }))
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var i, n = 1, r = k.Deferred(), o = this, s = this.length, a = function () {
                    --n || r.resolveWith(o, [o])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) (i = Z.get(o[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            nt = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$", "i"), rt = ["Top", "Right", "Bottom", "Left"],
            ot = _.documentElement, st = function (t) {
                return k.contains(t.ownerDocument, t)
            }, at = {composed: !0};
        ot.getRootNode && (st = function (t) {
            return k.contains(t.ownerDocument, t) || t.getRootNode(at) === t.ownerDocument
        });
        var lt = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && st(t) && "none" === k.css(t, "display")
        };

        function ct(t, e, i, n) {
            var r, o, s = 20, a = n ? function () {
                    return n.cur()
                } : function () {
                    return k.css(t, e, "")
                }, l = a(), c = i && i[3] || (k.cssNumber[e] ? "" : "px"),
                u = t.nodeType && (k.cssNumber[e] || "px" !== c && +l) && nt.exec(k.css(t, e));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; s--;) k.style(t, e, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
                u *= 2, k.style(t, e, u + c), i = i || []
            }
            return i && (u = +u || +l || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = r)), r
        }

        var ut = {};

        function ht(t) {
            var e, i = t.ownerDocument, n = t.nodeName, r = ut[n];
            return r || (e = i.body.appendChild(i.createElement(n)), r = k.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), ut[n] = r, r)
        }

        function dt(t, e) {
            for (var i, n, r = [], o = 0, s = t.length; o < s; o++) (n = t[o]).style && (i = n.style.display, e ? ("none" === i && (r[o] = Z.get(n, "display") || null, r[o] || (n.style.display = "")), "" === n.style.display && lt(n) && (r[o] = ht(n))) : "none" !== i && (r[o] = "none", Z.set(n, "display", i)));
            for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
            return t
        }

        k.fn.extend({
            show: function () {
                return dt(this, !0)
            }, hide: function () {
                return dt(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function () {
                    lt(this) ? k(this).show() : k(this).hide()
                }))
            }
        });
        var ft, pt, gt = /^(?:checkbox|radio)$/i, mt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            vt = /^$|^module$|\/(?:java|ecma)script/i;
        ft = _.createDocumentFragment().appendChild(_.createElement("div")), (pt = _.createElement("input")).setAttribute("type", "radio"), pt.setAttribute("checked", "checked"), pt.setAttribute("name", "t"), ft.appendChild(pt), m.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked, ft.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue, ft.innerHTML = "<option></option>", m.option = !!ft.lastChild;
        var yt = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function _t(t, e) {
            var i;
            return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && O(t, e) ? k.merge([t], i) : i
        }

        function bt(t, e) {
            for (var i = 0, n = t.length; i < n; i++) Z.set(t[i], "globalEval", !e || Z.get(e[i], "globalEval"))
        }

        yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td, m.option || (yt.optgroup = yt.option = [1, "<select multiple='multiple'>", "</select>"]);
        var wt = /<|&#?\w+;/;

        function xt(t, e, i, n, r) {
            for (var o, s, a, l, c, u, h = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++) if ((o = t[f]) || 0 === o) if ("object" === x(o)) k.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) {
                for (s = s || h.appendChild(e.createElement("div")), a = (mt.exec(o) || ["", ""])[1].toLowerCase(), l = yt[a] || yt._default, s.innerHTML = l[1] + k.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
                k.merge(d, s.childNodes), (s = h.firstChild).textContent = ""
            } else d.push(e.createTextNode(o));
            for (h.textContent = "", f = 0; o = d[f++];) if (n && k.inArray(o, n) > -1) r && r.push(o); else if (c = st(o), s = _t(h.appendChild(o), "script"), c && bt(s), i) for (u = 0; o = s[u++];) vt.test(o.type || "") && i.push(o);
            return h
        }

        var kt = /^key/, Ct = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, St = /^([^.]*)(?:\.(.+)|)/;

        function Tt() {
            return !0
        }

        function Mt() {
            return !1
        }

        function Dt(t, e) {
            return t === function () {
                try {
                    return _.activeElement
                } catch (t) {
                }
            }() == ("focus" === e)
        }

        function Ot(t, e, i, n, r, o) {
            var s, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof i && (n = n || i, i = void 0), e) Ot(t, a, i, n, e[a], o);
                return t
            }
            if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = Mt; else if (!r) return t;
            return 1 === o && (s = r, (r = function (t) {
                return k().off(t), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = k.guid++)), t.each((function () {
                k.event.add(this, e, r, n, i)
            }))
        }

        function Et(t, e, i) {
            i ? (Z.set(t, e, !1), k.event.add(t, e, {
                namespace: !1, handler: function (t) {
                    var n, r, o = Z.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (o.length) (k.event.special[e] || {}).delegateType && t.stopPropagation(); else if (o = a.call(arguments), Z.set(this, e, o), n = i(this, e), this[e](), o !== (r = Z.get(this, e)) || n ? Z.set(this, e, !1) : r = {}, o !== r) return t.stopImmediatePropagation(), t.preventDefault(), r.value
                    } else o.length && (Z.set(this, e, {value: k.event.trigger(k.extend(o[0], k.Event.prototype), o.slice(1), this)}), t.stopImmediatePropagation())
                }
            })) : void 0 === Z.get(t, e) && k.event.add(t, e, Tt)
        }

        k.event = {
            global: {}, add: function (t, e, i, n, r) {
                var o, s, a, l, c, u, h, d, f, p, g, m = Z.get(t);
                if (Q(t)) for (i.handler && (i = (o = i).handler, r = o.selector), r && k.find.matchesSelector(ot, r), i.guid || (i.guid = k.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function (e) {
                    return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                }), c = (e = (e || "").match(L) || [""]).length; c--;) f = g = (a = St.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (h = k.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = k.event.special[f] || {}, u = k.extend({
                    type: f,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && k.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, n, p, s) || t.addEventListener && t.addEventListener(f, s)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), k.event.global[f] = !0)
            }, remove: function (t, e, i, n, r) {
                var o, s, a, l, c, u, h, d, f, p, g, m = Z.hasData(t) && Z.get(t);
                if (m && (l = m.events)) {
                    for (c = (e = (e || "").match(L) || [""]).length; c--;) if (f = g = (a = St.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                        for (h = k.event.special[f] || {}, d = l[f = (n ? h.delegateType : h.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && g !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));
                        s && !d.length && (h.teardown && !1 !== h.teardown.call(t, p, m.handle) || k.removeEvent(t, f, m.handle), delete l[f])
                    } else for (f in l) k.event.remove(t, f + e[c], i, n, !0);
                    k.isEmptyObject(l) && Z.remove(t, "handle events")
                }
            }, dispatch: function (t) {
                var e, i, n, r, o, s, a = new Array(arguments.length), l = k.event.fix(t),
                    c = (Z.get(this, "events") || Object.create(null))[l.type] || [], u = k.event.special[l.type] || {};
                for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
                if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                    for (s = k.event.handlers.call(this, l, c), e = 0; (r = s[e++]) && !l.isPropagationStopped();) for (l.currentTarget = r.elem, i = 0; (o = r.handlers[i++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (n = ((k.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, l), l.result
                }
            }, handlers: function (t, e) {
                var i, n, r, o, s, a = [], l = e.delegateCount, c = t.target;
                if (l && c.nodeType && !("click" === t.type && t.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                    for (o = [], s = {}, i = 0; i < l; i++) void 0 === s[r = (n = e[i]).selector + " "] && (s[r] = n.needsContext ? k(r, this).index(c) > -1 : k.find(r, this, null, [c]).length), s[r] && o.push(n);
                    o.length && a.push({elem: c, handlers: o})
                }
                return c = this, l < e.length && a.push({elem: c, handlers: e.slice(l)}), a
            }, addProp: function (t, e) {
                Object.defineProperty(k.Event.prototype, t, {
                    enumerable: !0, configurable: !0, get: v(e) ? function () {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[t]
                    }, set: function (e) {
                        Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                    }
                })
            }, fix: function (t) {
                return t[k.expando] ? t : new k.Event(t)
            }, special: {
                load: {noBubble: !0}, click: {
                    setup: function (t) {
                        var e = this || t;
                        return gt.test(e.type) && e.click && O(e, "input") && Et(e, "click", Tt), !1
                    }, trigger: function (t) {
                        var e = this || t;
                        return gt.test(e.type) && e.click && O(e, "input") && Et(e, "click"), !0
                    }, _default: function (t) {
                        var e = t.target;
                        return gt.test(e.type) && e.click && O(e, "input") && Z.get(e, "click") || O(e, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, k.removeEvent = function (t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, k.Event = function (t, e) {
            if (!(this instanceof k.Event)) return new k.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Tt : Mt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && k.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[k.expando] = !0
        }, k.Event.prototype = {
            constructor: k.Event,
            isDefaultPrevented: Mt,
            isPropagationStopped: Mt,
            isImmediatePropagationStopped: Mt,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = Tt, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = Tt, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = Tt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, k.each({
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
            code: !0,
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
            which: function (t) {
                var e = t.button;
                return null == t.which && kt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Ct.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, k.event.addProp), k.each({focus: "focusin", blur: "focusout"}, (function (t, e) {
            k.event.special[t] = {
                setup: function () {
                    return Et(this, t, Dt), !1
                }, trigger: function () {
                    return Et(this, t), !0
                }, delegateType: e
            }
        })), k.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function (t, e) {
            k.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var i, n = this, r = t.relatedTarget, o = t.handleObj;
                    return r && (r === n || k.contains(n, r)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        })), k.fn.extend({
            on: function (t, e, i, n) {
                return Ot(this, t, e, i, n)
            }, one: function (t, e, i, n) {
                return Ot(this, t, e, i, n, 1)
            }, off: function (t, e, i) {
                var n, r;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, k(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = Mt), this.each((function () {
                    k.event.remove(this, t, i, e)
                }))
            }
        });
        var Pt = /<script|<style|<link/i, At = /checked\s*(?:[^=]|=\s*.checked.)/i,
            It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function jt(t, e) {
            return O(t, "table") && O(11 !== e.nodeType ? e : e.firstChild, "tr") && k(t).children("tbody")[0] || t
        }

        function Nt(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function Ft(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Lt(t, e) {
            var i, n, r, o, s, a;
            if (1 === e.nodeType) {
                if (Z.hasData(t) && (a = Z.get(t).events)) for (r in Z.remove(e, "handle events"), a) for (i = 0, n = a[r].length; i < n; i++) k.event.add(e, r, a[r][i]);
                K.hasData(t) && (o = K.access(t), s = k.extend({}, o), K.set(e, s))
            }
        }

        function Rt(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && gt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function $t(t, e, i, n) {
            e = l(e);
            var r, o, s, a, c, u, h = 0, d = t.length, f = d - 1, p = e[0], g = v(p);
            if (g || d > 1 && "string" == typeof p && !m.checkClone && At.test(p)) return t.each((function (r) {
                var o = t.eq(r);
                g && (e[0] = p.call(this, r, o.html())), $t(o, e, i, n)
            }));
            if (d && (o = (r = xt(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === r.childNodes.length && (r = o), o || n)) {
                for (a = (s = k.map(_t(r, "script"), Nt)).length; h < d; h++) c = r, h !== f && (c = k.clone(c, !0, !0), a && k.merge(s, _t(c, "script"))), i.call(t[h], c, h);
                if (a) for (u = s[s.length - 1].ownerDocument, k.map(s, Ft), h = 0; h < a; h++) c = s[h], vt.test(c.type || "") && !Z.access(c, "globalEval") && k.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? k._evalUrl && !c.noModule && k._evalUrl(c.src, {nonce: c.nonce || c.getAttribute("nonce")}, u) : w(c.textContent.replace(It, ""), c, u))
            }
            return t
        }

        function zt(t, e, i) {
            for (var n, r = e ? k.filter(e, t) : t, o = 0; null != (n = r[o]); o++) i || 1 !== n.nodeType || k.cleanData(_t(n)), n.parentNode && (i && st(n) && bt(_t(n, "script")), n.parentNode.removeChild(n));
            return t
        }

        k.extend({
            htmlPrefilter: function (t) {
                return t
            }, clone: function (t, e, i) {
                var n, r, o, s, a = t.cloneNode(!0), l = st(t);
                if (!(m.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || k.isXMLDoc(t))) for (s = _t(a), n = 0, r = (o = _t(t)).length; n < r; n++) Rt(o[n], s[n]);
                if (e) if (i) for (o = o || _t(t), s = s || _t(a), n = 0, r = o.length; n < r; n++) Lt(o[n], s[n]); else Lt(t, a);
                return (s = _t(a, "script")).length > 0 && bt(s, !l && _t(t, "script")), a
            }, cleanData: function (t) {
                for (var e, i, n, r = k.event.special, o = 0; void 0 !== (i = t[o]); o++) if (Q(i)) {
                    if (e = i[Z.expando]) {
                        if (e.events) for (n in e.events) r[n] ? k.event.remove(i, n) : k.removeEvent(i, n, e.handle);
                        i[Z.expando] = void 0
                    }
                    i[K.expando] && (i[K.expando] = void 0)
                }
            }
        }), k.fn.extend({
            detach: function (t) {
                return zt(this, t, !0)
            }, remove: function (t) {
                return zt(this, t)
            }, text: function (t) {
                return V(this, (function (t) {
                    return void 0 === t ? k.text(this) : this.empty().each((function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    }))
                }), null, t, arguments.length)
            }, append: function () {
                return $t(this, arguments, (function (t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || jt(this, t).appendChild(t)
                }))
            }, prepend: function () {
                return $t(this, arguments, (function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = jt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                }))
            }, before: function () {
                return $t(this, arguments, (function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                }))
            }, after: function () {
                return $t(this, arguments, (function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                }))
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (k.cleanData(_t(t, !1)), t.textContent = "");
                return this
            }, clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map((function () {
                    return k.clone(this, t, e)
                }))
            }, html: function (t) {
                return V(this, (function (t) {
                    var e = this[0] || {}, i = 0, n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Pt.test(t) && !yt[(mt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = k.htmlPrefilter(t);
                        try {
                            for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (k.cleanData(_t(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {
                        }
                    }
                    e && this.empty().append(t)
                }), null, t, arguments.length)
            }, replaceWith: function () {
                var t = [];
                return $t(this, arguments, (function (e) {
                    var i = this.parentNode;
                    k.inArray(this, t) < 0 && (k.cleanData(_t(this)), i && i.replaceChild(e, this))
                }), t)
            }
        }), k.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function (t, e) {
            k.fn[t] = function (t) {
                for (var i, n = [], r = k(t), o = r.length - 1, s = 0; s <= o; s++) i = s === o ? this : this.clone(!0), k(r[s])[e](i), c.apply(n, i.get());
                return this.pushStack(n)
            }
        }));
        var Wt = new RegExp("^(" + it + ")(?!px)[a-z%]+$", "i"), Ht = function (t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = i), e.getComputedStyle(t)
        }, Bt = function (t, e, i) {
            var n, r, o = {};
            for (r in e) o[r] = t.style[r], t.style[r] = e[r];
            for (r in n = i.call(t), e) t.style[r] = o[r];
            return n
        }, Vt = new RegExp(rt.join("|"), "i");

        function Yt(t, e, i) {
            var n, r, o, s, a = t.style;
            return (i = i || Ht(t)) && ("" !== (s = i.getPropertyValue(e) || i[e]) || st(t) || (s = k.style(t, e)), !m.pixelBoxStyles() && Wt.test(s) && Vt.test(e) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
        }

        function qt(t, e) {
            return {
                get: function () {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }

        !function () {
            function t() {
                if (u) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ot.appendChild(c).appendChild(u);
                    var t = i.getComputedStyle(u);
                    n = "1%" !== t.top, l = 12 === e(t.marginLeft), u.style.right = "60%", s = 36 === e(t.right), r = 36 === e(t.width), u.style.position = "absolute", o = 12 === e(u.offsetWidth / 3), ot.removeChild(c), u = null
                }
            }

            function e(t) {
                return Math.round(parseFloat(t))
            }

            var n, r, o, s, a, l, c = _.createElement("div"), u = _.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(m, {
                boxSizingReliable: function () {
                    return t(), r
                }, pixelBoxStyles: function () {
                    return t(), s
                }, pixelPosition: function () {
                    return t(), n
                }, reliableMarginLeft: function () {
                    return t(), l
                }, scrollboxSize: function () {
                    return t(), o
                }, reliableTrDimensions: function () {
                    var t, e, n, r;
                    return null == a && (t = _.createElement("table"), e = _.createElement("tr"), n = _.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", e.style.height = "1px", n.style.height = "9px", ot.appendChild(t).appendChild(e).appendChild(n), r = i.getComputedStyle(e), a = parseInt(r.height) > 3, ot.removeChild(t)), a
                }
            }))
        }();
        var Ut = ["Webkit", "Moz", "ms"], Gt = _.createElement("div").style, Qt = {};

        function Xt(t) {
            var e = k.cssProps[t] || Qt[t];
            return e || (t in Gt ? t : Qt[t] = function (t) {
                for (var e = t[0].toUpperCase() + t.slice(1), i = Ut.length; i--;) if ((t = Ut[i] + e) in Gt) return t
            }(t) || t)
        }

        var Zt = /^(none|table(?!-c[ea]).+)/, Kt = /^--/,
            Jt = {position: "absolute", visibility: "hidden", display: "block"},
            te = {letterSpacing: "0", fontWeight: "400"};

        function ee(t, e, i) {
            var n = nt.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function ie(t, e, i, n, r, o) {
            var s = "width" === e ? 1 : 0, a = 0, l = 0;
            if (i === (n ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === i && (l += k.css(t, i + rt[s], !0, r)), n ? ("content" === i && (l -= k.css(t, "padding" + rt[s], !0, r)), "margin" !== i && (l -= k.css(t, "border" + rt[s] + "Width", !0, r))) : (l += k.css(t, "padding" + rt[s], !0, r), "padding" !== i ? l += k.css(t, "border" + rt[s] + "Width", !0, r) : a += k.css(t, "border" + rt[s] + "Width", !0, r));
            return !n && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l
        }

        function ne(t, e, i) {
            var n = Ht(t), r = (!m.boxSizingReliable() || i) && "border-box" === k.css(t, "boxSizing", !1, n), o = r,
                s = Yt(t, e, n), a = "offset" + e[0].toUpperCase() + e.slice(1);
            if (Wt.test(s)) {
                if (!i) return s;
                s = "auto"
            }
            return (!m.boxSizingReliable() && r || !m.reliableTrDimensions() && O(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === k.css(t, "display", !1, n)) && t.getClientRects().length && (r = "border-box" === k.css(t, "boxSizing", !1, n), (o = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + ie(t, e, i || (r ? "border" : "content"), o, n, s) + "px"
        }

        function re(t, e, i, n, r) {
            return new re.prototype.init(t, e, i, n, r)
        }

        k.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var i = Yt(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = G(e), l = Kt.test(e), c = t.style;
                    if (l || (e = Xt(a)), s = k.cssHooks[e] || k.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r : c[e];
                    "string" === (o = typeof i) && (r = nt.exec(i)) && r[1] && (i = ct(t, e, r), o = "number"), null != i && i == i && ("number" !== o || l || (i += r && r[3] || (k.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))
                }
            },
            css: function (t, e, i, n) {
                var r, o, s, a = G(e);
                return Kt.test(e) || (e = Xt(a)), (s = k.cssHooks[e] || k.cssHooks[a]) && "get" in s && (r = s.get(t, !0, i)), void 0 === r && (r = Yt(t, e, n)), "normal" === r && e in te && (r = te[e]), "" === i || i ? (o = parseFloat(r), !0 === i || isFinite(o) ? o || 0 : r) : r
            }
        }), k.each(["height", "width"], (function (t, e) {
            k.cssHooks[e] = {
                get: function (t, i, n) {
                    if (i) return !Zt.test(k.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ne(t, e, n) : Bt(t, Jt, (function () {
                        return ne(t, e, n)
                    }))
                }, set: function (t, i, n) {
                    var r, o = Ht(t), s = !m.scrollboxSize() && "absolute" === o.position,
                        a = (s || n) && "border-box" === k.css(t, "boxSizing", !1, o), l = n ? ie(t, e, n, a, o) : 0;
                    return a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - ie(t, e, "border", !1, o) - .5)), l && (r = nt.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = k.css(t, e)), ee(0, i, l)
                }
            }
        })), k.cssHooks.marginLeft = qt(m.reliableMarginLeft, (function (t, e) {
            if (e) return (parseFloat(Yt(t, "marginLeft")) || t.getBoundingClientRect().left - Bt(t, {marginLeft: 0}, (function () {
                return t.getBoundingClientRect().left
            }))) + "px"
        })), k.each({margin: "", padding: "", border: "Width"}, (function (t, e) {
            k.cssHooks[t + e] = {
                expand: function (i) {
                    for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[t + rt[n] + e] = o[n] || o[n - 2] || o[0];
                    return r
                }
            }, "margin" !== t && (k.cssHooks[t + e].set = ee)
        })), k.fn.extend({
            css: function (t, e) {
                return V(this, (function (t, e, i) {
                    var n, r, o = {}, s = 0;
                    if (Array.isArray(e)) {
                        for (n = Ht(t), r = e.length; s < r; s++) o[e[s]] = k.css(t, e[s], !1, n);
                        return o
                    }
                    return void 0 !== i ? k.style(t, e, i) : k.css(t, e)
                }), t, e, arguments.length > 1)
            }
        }), k.Tween = re, re.prototype = {
            constructor: re, init: function (t, e, i, n, r, o) {
                this.elem = t, this.prop = i, this.easing = r || k.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (k.cssNumber[i] ? "" : "px")
            }, cur: function () {
                var t = re.propHooks[this.prop];
                return t && t.get ? t.get(this) : re.propHooks._default.get(this)
            }, run: function (t) {
                var e, i = re.propHooks[this.prop];
                return this.options.duration ? this.pos = e = k.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : re.propHooks._default.set(this), this
            }
        }, re.prototype.init.prototype = re.prototype, re.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = k.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                }, set: function (t) {
                    k.fx.step[t.prop] ? k.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !k.cssHooks[t.prop] && null == t.elem.style[Xt(t.prop)] ? t.elem[t.prop] = t.now : k.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, re.propHooks.scrollTop = re.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, k.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }, _default: "swing"
        }, k.fx = re.prototype.init, k.fx.step = {};
        var oe, se, ae = /^(?:toggle|show|hide)$/, le = /queueHooks$/;

        function ce() {
            se && (!1 === _.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(ce) : i.setTimeout(ce, k.fx.interval), k.fx.tick())
        }

        function ue() {
            return i.setTimeout((function () {
                oe = void 0
            })), oe = Date.now()
        }

        function he(t, e) {
            var i, n = 0, r = {height: t};
            for (e = e ? 1 : 0; n < 4; n += 2 - e) r["margin" + (i = rt[n])] = r["padding" + i] = t;
            return e && (r.opacity = r.width = t), r
        }

        function de(t, e, i) {
            for (var n, r = (fe.tweeners[e] || []).concat(fe.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (n = r[o].call(i, e, t)) return n
        }

        function fe(t, e, i) {
            var n, r, o = 0, s = fe.prefilters.length, a = k.Deferred().always((function () {
                delete l.elem
            })), l = function () {
                if (r) return !1;
                for (var e = oe || ue(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(n);
                return a.notifyWith(t, [c, n, i]), n < 1 && s ? i : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
            }, c = a.promise({
                elem: t,
                props: k.extend({}, e),
                opts: k.extend(!0, {specialEasing: {}, easing: k.easing._default}, i),
                originalProperties: e,
                originalOptions: i,
                startTime: oe || ue(),
                duration: i.duration,
                tweens: [],
                createTween: function (e, i) {
                    var n = k.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function (e) {
                    var i = 0, n = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i < n; i++) c.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }), u = c.props;
            for (!function (t, e) {
                var i, n, r, o, s;
                for (i in t) if (r = e[n = G(i)], o = t[i], Array.isArray(o) && (r = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (s = k.cssHooks[n]) && "expand" in s) for (i in o = s.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = r); else e[n] = r
            }(u, c.opts.specialEasing); o < s; o++) if (n = fe.prefilters[o].call(c, t, u, c.opts)) return v(n.stop) && (k._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
            return k.map(u, de, c), v(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), k.fx.timer(k.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c
        }

        k.Animation = k.extend(fe, {
            tweeners: {
                "*": [function (t, e) {
                    var i = this.createTween(t, e);
                    return ct(i.elem, t, nt.exec(e), i), i
                }]
            }, tweener: function (t, e) {
                v(t) ? (e = t, t = ["*"]) : t = t.match(L);
                for (var i, n = 0, r = t.length; n < r; n++) i = t[n], fe.tweeners[i] = fe.tweeners[i] || [], fe.tweeners[i].unshift(e)
            }, prefilters: [function (t, e, i) {
                var n, r, o, s, a, l, c, u, h = "width" in e || "height" in e, d = this, f = {}, p = t.style,
                    g = t.nodeType && lt(t), m = Z.get(t, "fxshow");
                for (n in i.queue || (null == (s = k._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || a()
                }), s.unqueued++, d.always((function () {
                    d.always((function () {
                        s.unqueued--, k.queue(t, "fx").length || s.empty.fire()
                    }))
                }))), e) if (r = e[n], ae.test(r)) {
                    if (delete e[n], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[n]) continue;
                        g = !0
                    }
                    f[n] = m && m[n] || k.style(t, n)
                }
                if ((l = !k.isEmptyObject(e)) || !k.isEmptyObject(f)) for (n in h && 1 === t.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = Z.get(t, "display")), "none" === (u = k.css(t, "display")) && (c ? u = c : (dt([t], !0), c = t.style.display || c, u = k.css(t, "display"), dt([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === k.css(t, "float") && (l || (d.done((function () {
                    p.display = c
                })), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), i.overflow && (p.overflow = "hidden", d.always((function () {
                    p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                }))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = Z.access(t, "fxshow", {display: c}), o && (m.hidden = !g), g && dt([t], !0), d.done((function () {
                    for (n in g || dt([t]), Z.remove(t, "fxshow"), f) k.style(t, n, f[n])
                }))), l = de(g ? m[n] : 0, n, d), n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
            }], prefilter: function (t, e) {
                e ? fe.prefilters.unshift(t) : fe.prefilters.push(t)
            }
        }), k.speed = function (t, e, i) {
            var n = t && "object" == typeof t ? k.extend({}, t) : {
                complete: i || !i && e || v(t) && t,
                duration: t,
                easing: i && e || e && !v(e) && e
            };
            return k.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in k.fx.speeds ? n.duration = k.fx.speeds[n.duration] : n.duration = k.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                v(n.old) && n.old.call(this), n.queue && k.dequeue(this, n.queue)
            }, n
        }, k.fn.extend({
            fadeTo: function (t, e, i, n) {
                return this.filter(lt).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
            }, animate: function (t, e, i, n) {
                var r = k.isEmptyObject(t), o = k.speed(e, i, n), s = function () {
                    var e = fe(this, k.extend({}, t), o);
                    (r || Z.get(this, "finish")) && e.stop(!0)
                };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            }, stop: function (t, e, i) {
                var n = function (t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function () {
                    var e = !0, r = null != t && t + "queueHooks", o = k.timers, s = Z.get(this);
                    if (r) s[r] && s[r].stop && n(s[r]); else for (r in s) s[r] && s[r].stop && le.test(r) && n(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(i), e = !1, o.splice(r, 1));
                    !e && i || k.dequeue(this, t)
                }))
            }, finish: function (t) {
                return !1 !== t && (t = t || "fx"), this.each((function () {
                    var e, i = Z.get(this), n = i[t + "queue"], r = i[t + "queueHooks"], o = k.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, k.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                }))
            }
        }), k.each(["toggle", "show", "hide"], (function (t, e) {
            var i = k.fn[e];
            k.fn[e] = function (t, n, r) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(he(e, !0), t, n, r)
            }
        })), k.each({
            slideDown: he("show"),
            slideUp: he("hide"),
            slideToggle: he("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, (function (t, e) {
            k.fn[t] = function (t, i, n) {
                return this.animate(e, t, i, n)
            }
        })), k.timers = [], k.fx.tick = function () {
            var t, e = 0, i = k.timers;
            for (oe = Date.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || k.fx.stop(), oe = void 0
        }, k.fx.timer = function (t) {
            k.timers.push(t), k.fx.start()
        }, k.fx.interval = 13, k.fx.start = function () {
            se || (se = !0, ce())
        }, k.fx.stop = function () {
            se = null
        }, k.fx.speeds = {slow: 600, fast: 200, _default: 400}, k.fn.delay = function (t, e) {
            return t = k.fx && k.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function (e, n) {
                var r = i.setTimeout(e, t);
                n.stop = function () {
                    i.clearTimeout(r)
                }
            }))
        }, function () {
            var t = _.createElement("input"), e = _.createElement("select").appendChild(_.createElement("option"));
            t.type = "checkbox", m.checkOn = "" !== t.value, m.optSelected = e.selected, (t = _.createElement("input")).value = "t", t.type = "radio", m.radioValue = "t" === t.value
        }();
        var pe, ge = k.expr.attrHandle;
        k.fn.extend({
            attr: function (t, e) {
                return V(this, k.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each((function () {
                    k.removeAttr(this, t)
                }))
            }
        }), k.extend({
            attr: function (t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? k.prop(t, e, i) : (1 === o && k.isXMLDoc(t) || (r = k.attrHooks[e.toLowerCase()] || (k.expr.match.bool.test(e) ? pe : void 0)), void 0 !== i ? null === i ? void k.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = k.find.attr(t, e)) ? void 0 : n)
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!m.radioValue && "radio" === e && O(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            }, removeAttr: function (t, e) {
                var i, n = 0, r = e && e.match(L);
                if (r && 1 === t.nodeType) for (; i = r[n++];) t.removeAttribute(i)
            }
        }), pe = {
            set: function (t, e, i) {
                return !1 === e ? k.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, k.each(k.expr.match.bool.source.match(/\w+/g), (function (t, e) {
            var i = ge[e] || k.find.attr;
            ge[e] = function (t, e, n) {
                var r, o, s = e.toLowerCase();
                return n || (o = ge[s], ge[s] = r, r = null != i(t, e, n) ? s : null, ge[s] = o), r
            }
        }));
        var me = /^(?:input|select|textarea|button)$/i, ve = /^(?:a|area)$/i;

        function ye(t) {
            return (t.match(L) || []).join(" ")
        }

        function _e(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function be(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(L) || []
        }

        k.fn.extend({
            prop: function (t, e) {
                return V(this, k.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return this.each((function () {
                    delete this[k.propFix[t] || t]
                }))
            }
        }), k.extend({
            prop: function (t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(t) || (e = k.propFix[e] || e, r = k.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = k.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : me.test(t.nodeName) || ve.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), m.optSelected || (k.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }, set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
            k.propFix[this.toLowerCase()] = this
        })), k.fn.extend({
            addClass: function (t) {
                var e, i, n, r, o, s, a, l = 0;
                if (v(t)) return this.each((function (e) {
                    k(this).addClass(t.call(this, e, _e(this)))
                }));
                if ((e = be(t)).length) for (; i = this[l++];) if (r = _e(i), n = 1 === i.nodeType && " " + ye(r) + " ") {
                    for (s = 0; o = e[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                    r !== (a = ye(n)) && i.setAttribute("class", a)
                }
                return this
            }, removeClass: function (t) {
                var e, i, n, r, o, s, a, l = 0;
                if (v(t)) return this.each((function (e) {
                    k(this).removeClass(t.call(this, e, _e(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((e = be(t)).length) for (; i = this[l++];) if (r = _e(i), n = 1 === i.nodeType && " " + ye(r) + " ") {
                    for (s = 0; o = e[s++];) for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                    r !== (a = ye(n)) && i.setAttribute("class", a)
                }
                return this
            }, toggleClass: function (t, e) {
                var i = typeof t, n = "string" === i || Array.isArray(t);
                return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : v(t) ? this.each((function (i) {
                    k(this).toggleClass(t.call(this, i, _e(this), e), e)
                })) : this.each((function () {
                    var e, r, o, s;
                    if (n) for (r = 0, o = k(this), s = be(t); e = s[r++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== i || ((e = _e(this)) && Z.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Z.get(this, "__className__") || ""))
                }))
            }, hasClass: function (t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];) if (1 === i.nodeType && (" " + ye(_e(i)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var we = /\r/g;
        k.fn.extend({
            val: function (t) {
                var e, i, n, r = this[0];
                return arguments.length ? (n = v(t), this.each((function (i) {
                    var r;
                    1 === this.nodeType && (null == (r = n ? t.call(this, i, k(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = k.map(r, (function (t) {
                        return null == t ? "" : t + ""
                    }))), (e = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                }))) : r ? (e = k.valHooks[r.type] || k.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : "string" == typeof (i = r.value) ? i.replace(we, "") : null == i ? "" : i : void 0
            }
        }), k.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = k.find.attr(t, "value");
                        return null != e ? e : ye(k.text(t))
                    }
                }, select: {
                    get: function (t) {
                        var e, i, n, r = t.options, o = t.selectedIndex, s = "select-one" === t.type, a = s ? null : [],
                            l = s ? o + 1 : r.length;
                        for (n = o < 0 ? l : s ? o : 0; n < l; n++) if (((i = r[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !O(i.parentNode, "optgroup"))) {
                            if (e = k(i).val(), s) return e;
                            a.push(e)
                        }
                        return a
                    }, set: function (t, e) {
                        for (var i, n, r = t.options, o = k.makeArray(e), s = r.length; s--;) ((n = r[s]).selected = k.inArray(k.valHooks.option.get(n), o) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), k.each(["radio", "checkbox"], (function () {
            k.valHooks[this] = {
                set: function (t, e) {
                    if (Array.isArray(e)) return t.checked = k.inArray(k(t).val(), e) > -1
                }
            }, m.checkOn || (k.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        })), m.focusin = "onfocusin" in i;
        var xe = /^(?:focusinfocus|focusoutblur)$/, ke = function (t) {
            t.stopPropagation()
        };
        k.extend(k.event, {
            trigger: function (t, e, n, r) {
                var o, s, a, l, c, u, h, d, p = [n || _], g = f.call(t, "type") ? t.type : t,
                    m = f.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = d = a = n = n || _, 3 !== n.nodeType && 8 !== n.nodeType && !xe.test(g + k.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), c = g.indexOf(":") < 0 && "on" + g, (t = t[k.expando] ? t : new k.Event(g, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : k.makeArray(e, [t]), h = k.event.special[g] || {}, r || !h.trigger || !1 !== h.trigger.apply(n, e))) {
                    if (!r && !h.noBubble && !y(n)) {
                        for (l = h.delegateType || g, xe.test(l + g) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                        a === (n.ownerDocument || _) && p.push(a.defaultView || a.parentWindow || i)
                    }
                    for (o = 0; (s = p[o++]) && !t.isPropagationStopped();) d = s, t.type = o > 1 ? l : h.bindType || g, (u = (Z.get(s, "events") || Object.create(null))[t.type] && Z.get(s, "handle")) && u.apply(s, e), (u = c && s[c]) && u.apply && Q(s) && (t.result = u.apply(s, e), !1 === t.result && t.preventDefault());
                    return t.type = g, r || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(p.pop(), e) || !Q(n) || c && v(n[g]) && !y(n) && ((a = n[c]) && (n[c] = null), k.event.triggered = g, t.isPropagationStopped() && d.addEventListener(g, ke), n[g](), t.isPropagationStopped() && d.removeEventListener(g, ke), k.event.triggered = void 0, a && (n[c] = a)), t.result
                }
            }, simulate: function (t, e, i) {
                var n = k.extend(new k.Event, i, {type: t, isSimulated: !0});
                k.event.trigger(n, null, e)
            }
        }), k.fn.extend({
            trigger: function (t, e) {
                return this.each((function () {
                    k.event.trigger(t, e, this)
                }))
            }, triggerHandler: function (t, e) {
                var i = this[0];
                if (i) return k.event.trigger(t, e, i, !0)
            }
        }), m.focusin || k.each({focus: "focusin", blur: "focusout"}, (function (t, e) {
            var i = function (t) {
                k.event.simulate(e, t.target, k.event.fix(t))
            };
            k.event.special[e] = {
                setup: function () {
                    var n = this.ownerDocument || this.document || this, r = Z.access(n, e);
                    r || n.addEventListener(t, i, !0), Z.access(n, e, (r || 0) + 1)
                }, teardown: function () {
                    var n = this.ownerDocument || this.document || this, r = Z.access(n, e) - 1;
                    r ? Z.access(n, e, r) : (n.removeEventListener(t, i, !0), Z.remove(n, e))
                }
            }
        }));
        var Ce = i.location, Se = {guid: Date.now()}, Te = /\?/;
        k.parseXML = function (t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new i.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + t), e
        };
        var Me = /\[\]$/, De = /\r?\n/g, Oe = /^(?:submit|button|image|reset|file)$/i,
            Ee = /^(?:input|select|textarea|keygen)/i;

        function Pe(t, e, i, n) {
            var r;
            if (Array.isArray(e)) k.each(e, (function (e, r) {
                i || Me.test(t) ? n(t, r) : Pe(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
            })); else if (i || "object" !== x(e)) n(t, e); else for (r in e) Pe(t + "[" + r + "]", e[r], i, n)
        }

        k.param = function (t, e) {
            var i, n = [], r = function (t, e) {
                var i = v(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
            if (null == t) return "";
            if (Array.isArray(t) || t.jquery && !k.isPlainObject(t)) k.each(t, (function () {
                r(this.name, this.value)
            })); else for (i in t) Pe(i, t[i], e, r);
            return n.join("&")
        }, k.fn.extend({
            serialize: function () {
                return k.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map((function () {
                    var t = k.prop(this, "elements");
                    return t ? k.makeArray(t) : this
                })).filter((function () {
                    var t = this.type;
                    return this.name && !k(this).is(":disabled") && Ee.test(this.nodeName) && !Oe.test(t) && (this.checked || !gt.test(t))
                })).map((function (t, e) {
                    var i = k(this).val();
                    return null == i ? null : Array.isArray(i) ? k.map(i, (function (t) {
                        return {name: e.name, value: t.replace(De, "\r\n")}
                    })) : {name: e.name, value: i.replace(De, "\r\n")}
                })).get()
            }
        });
        var Ae = /%20/g, Ie = /#.*$/, je = /([?&])_=[^&]*/, Ne = /^(.*?):[ \t]*([^\r\n]*)$/gm, Fe = /^(?:GET|HEAD)$/,
            Le = /^\/\//, Re = {}, $e = {}, ze = "*/".concat("*"), We = _.createElement("a");

        function He(t) {
            return function (e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, r = 0, o = e.toLowerCase().match(L) || [];
                if (v(i)) for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function Be(t, e, i, n) {
            var r = {}, o = t === $e;

            function s(a) {
                var l;
                return r[a] = !0, k.each(t[a] || [], (function (t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
                })), l
            }

            return s(e.dataTypes[0]) || !r["*"] && s("*")
        }

        function Ve(t, e) {
            var i, n, r = k.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && k.extend(!0, t, n), t
        }

        We.href = Ce.href, k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ce.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ce.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ze,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? Ve(Ve(t, k.ajaxSettings), e) : Ve(k.ajaxSettings, t)
            },
            ajaxPrefilter: He(Re),
            ajaxTransport: He($e),
            ajax: function (t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, r, o, s, a, l, c, u, h, d, f = k.ajaxSetup({}, e), p = f.context || f,
                    g = f.context && (p.nodeType || p.jquery) ? k(p) : k.event, m = k.Deferred(),
                    v = k.Callbacks("once memory"), y = f.statusCode || {}, b = {}, w = {}, x = "canceled", C = {
                        readyState: 0, getResponseHeader: function (t) {
                            var e;
                            if (c) {
                                if (!s) for (s = {}; e = Ne.exec(o);) s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = s[t.toLowerCase() + " "]
                            }
                            return null == e ? null : e.join(", ")
                        }, getAllResponseHeaders: function () {
                            return c ? o : null
                        }, setRequestHeader: function (t, e) {
                            return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, b[t] = e), this
                        }, overrideMimeType: function (t) {
                            return null == c && (f.mimeType = t), this
                        }, statusCode: function (t) {
                            var e;
                            if (t) if (c) C.always(t[C.status]); else for (e in t) y[e] = [y[e], t[e]];
                            return this
                        }, abort: function (t) {
                            var e = t || x;
                            return n && n.abort(e), S(0, e), this
                        }
                    };
                if (m.promise(C), f.url = ((t || f.url || Ce.href) + "").replace(Le, Ce.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(L) || [""], null == f.crossDomain) {
                    l = _.createElement("a");
                    try {
                        l.href = f.url, l.href = l.href, f.crossDomain = We.protocol + "//" + We.host != l.protocol + "//" + l.host
                    } catch (t) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = k.param(f.data, f.traditional)), Be(Re, f, e, C), c) return C;
                for (h in (u = k.event && f.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Fe.test(f.type), r = f.url.replace(Ie, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ae, "+")) : (d = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (Te.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(je, "$1"), d = (Te.test(r) ? "&" : "?") + "_=" + Se.guid++ + d), f.url = r + d), f.ifModified && (k.lastModified[r] && C.setRequestHeader("If-Modified-Since", k.lastModified[r]), k.etag[r] && C.setRequestHeader("If-None-Match", k.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(h, f.headers[h]);
                if (f.beforeSend && (!1 === f.beforeSend.call(p, C, f) || c)) return C.abort();
                if (x = "abort", v.add(f.complete), C.done(f.success), C.fail(f.error), n = Be($e, f, e, C)) {
                    if (C.readyState = 1, u && g.trigger("ajaxSend", [C, f]), c) return C;
                    f.async && f.timeout > 0 && (a = i.setTimeout((function () {
                        C.abort("timeout")
                    }), f.timeout));
                    try {
                        c = !1, n.send(b, S)
                    } catch (t) {
                        if (c) throw t;
                        S(-1, t)
                    }
                } else S(-1, "No Transport");

                function S(t, e, s, l) {
                    var h, d, _, b, w, x = e;
                    c || (c = !0, a && i.clearTimeout(a), n = void 0, o = l || "", C.readyState = t > 0 ? 4 : 0, h = t >= 200 && t < 300 || 304 === t, s && (b = function (t, e, i) {
                        for (var n, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (n) for (r in a) if (a[r] && a[r].test(n)) {
                            l.unshift(r);
                            break
                        }
                        if (l[0] in i) o = l[0]; else {
                            for (r in i) {
                                if (!l[0] || t.converters[r + " " + l[0]]) {
                                    o = r;
                                    break
                                }
                                s || (s = r)
                            }
                            o = o || s
                        }
                        if (o) return o !== l[0] && l.unshift(o), i[o]
                    }(f, C, s)), !h && k.inArray("script", f.dataTypes) > -1 && (f.converters["text script"] = function () {
                    }), b = function (t, e, i, n) {
                        var r, o, s, a, l, c = {}, u = t.dataTypes.slice();
                        if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                        for (o = u.shift(); o;) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                            if (!(s = c[l + " " + o] || c["* " + o])) for (r in c) if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                break
                            }
                            if (!0 !== s) if (s && t.throws) e = s(e); else try {
                                e = s(e)
                            } catch (t) {
                                return {state: "parsererror", error: s ? t : "No conversion from " + l + " to " + o}
                            }
                        }
                        return {state: "success", data: e}
                    }(f, b, C, h), h ? (f.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (k.lastModified[r] = w), (w = C.getResponseHeader("etag")) && (k.etag[r] = w)), 204 === t || "HEAD" === f.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, d = b.data, h = !(_ = b.error))) : (_ = x, !t && x || (x = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || x) + "", h ? m.resolveWith(p, [d, x, C]) : m.rejectWith(p, [C, x, _]), C.statusCode(y), y = void 0, u && g.trigger(h ? "ajaxSuccess" : "ajaxError", [C, f, h ? d : _]), v.fireWith(p, [C, x]), u && (g.trigger("ajaxComplete", [C, f]), --k.active || k.event.trigger("ajaxStop")))
                }

                return C
            },
            getJSON: function (t, e, i) {
                return k.get(t, e, i, "json")
            },
            getScript: function (t, e) {
                return k.get(t, void 0, e, "script")
            }
        }), k.each(["get", "post"], (function (t, e) {
            k[e] = function (t, i, n, r) {
                return v(i) && (r = r || n, n = i, i = void 0), k.ajax(k.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: i,
                    success: n
                }, k.isPlainObject(t) && t))
            }
        })), k.ajaxPrefilter((function (t) {
            var e;
            for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
        })), k._evalUrl = function (t, e, i) {
            return k.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {
                    }
                },
                dataFilter: function (t) {
                    k.globalEval(t, e, i)
                }
            })
        }, k.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (v(t) && (t = t.call(this[0])), e = k(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                })).append(this)), this
            }, wrapInner: function (t) {
                return v(t) ? this.each((function (e) {
                    k(this).wrapInner(t.call(this, e))
                })) : this.each((function () {
                    var e = k(this), i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                }))
            }, wrap: function (t) {
                var e = v(t);
                return this.each((function (i) {
                    k(this).wrapAll(e ? t.call(this, i) : t)
                }))
            }, unwrap: function (t) {
                return this.parent(t).not("body").each((function () {
                    k(this).replaceWith(this.childNodes)
                })), this
            }
        }), k.expr.pseudos.hidden = function (t) {
            return !k.expr.pseudos.visible(t)
        }, k.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, k.ajaxSettings.xhr = function () {
            try {
                return new i.XMLHttpRequest
            } catch (t) {
            }
        };
        var Ye = {0: 200, 1223: 204}, qe = k.ajaxSettings.xhr();
        m.cors = !!qe && "withCredentials" in qe, m.ajax = qe = !!qe, k.ajaxTransport((function (t) {
            var e, n;
            if (m.cors || qe && !t.crossDomain) return {
                send: function (r, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                    e = function (t) {
                        return function () {
                            e && (e = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ye[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                        }
                    }, a.onload = e(), n = a.onerror = a.ontimeout = e("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                        4 === a.readyState && i.setTimeout((function () {
                            e && n()
                        }))
                    }, e = e("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                }, abort: function () {
                    e && e()
                }
            }
        })), k.ajaxPrefilter((function (t) {
            t.crossDomain && (t.contents.script = !1)
        })), k.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (t) {
                    return k.globalEval(t), t
                }
            }
        }), k.ajaxPrefilter("script", (function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        })), k.ajaxTransport("script", (function (t) {
            var e, i;
            if (t.crossDomain || t.scriptAttrs) return {
                send: function (n, r) {
                    e = k("<script>").attr(t.scriptAttrs || {}).prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function (t) {
                        e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), _.head.appendChild(e[0])
                }, abort: function () {
                    i && i()
                }
            }
        }));
        var Ue, Ge = [], Qe = /(=)\?(?=&|$)|\?\?/;
        k.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = Ge.pop() || k.expando + "_" + Se.guid++;
                return this[t] = !0, t
            }
        }), k.ajaxPrefilter("json jsonp", (function (t, e, n) {
            var r, o, s,
                a = !1 !== t.jsonp && (Qe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qe.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Qe, "$1" + r) : !1 !== t.jsonp && (t.url += (Te.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                return s || k.error(r + " was not called"), s[0]
            }, t.dataTypes[0] = "json", o = i[r], i[r] = function () {
                s = arguments
            }, n.always((function () {
                void 0 === o ? k(i).removeProp(r) : i[r] = o, t[r] && (t.jsonpCallback = e.jsonpCallback, Ge.push(r)), s && v(o) && o(s[0]), s = o = void 0
            })), "script"
        })), m.createHTMLDocument = ((Ue = _.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ue.childNodes.length), k.parseHTML = function (t, e, i) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (m.createHTMLDocument ? ((n = (e = _.implementation.createHTMLDocument("")).createElement("base")).href = _.location.href, e.head.appendChild(n)) : e = _), o = !i && [], (r = E.exec(t)) ? [e.createElement(r[1])] : (r = xt([t], e, o), o && o.length && k(o).remove(), k.merge([], r.childNodes)));
            var n, r, o
        }, k.fn.load = function (t, e, i) {
            var n, r, o, s = this, a = t.indexOf(" ");
            return a > -1 && (n = ye(t.slice(a)), t = t.slice(0, a)), v(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && k.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done((function (t) {
                o = arguments, s.html(n ? k("<div>").append(k.parseHTML(t)).find(n) : t)
            })).always(i && function (t, e) {
                s.each((function () {
                    i.apply(this, o || [t.responseText, e, t])
                }))
            }), this
        }, k.expr.pseudos.animated = function (t) {
            return k.grep(k.timers, (function (e) {
                return t === e.elem
            })).length
        }, k.offset = {
            setOffset: function (t, e, i) {
                var n, r, o, s, a, l, c = k.css(t, "position"), u = k(t), h = {};
                "static" === c && (t.style.position = "relative"), a = u.offset(), o = k.css(t, "top"), l = k.css(t, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (n = u.position()).top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), v(e) && (e = e.call(t, i, k.extend({}, a))), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : ("number" == typeof h.top && (h.top += "px"), "number" == typeof h.left && (h.left += "px"), u.css(h))
            }
        }, k.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each((function (e) {
                    k.offset.setOffset(this, t, e)
                }));
                var e, i, n = this[0];
                return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                    top: e.top + i.pageYOffset,
                    left: e.left + i.pageXOffset
                }) : {top: 0, left: 0} : void 0
            }, position: function () {
                if (this[0]) {
                    var t, e, i, n = this[0], r = {top: 0, left: 0};
                    if ("fixed" === k.css(n, "position")) e = n.getBoundingClientRect(); else {
                        for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === k.css(t, "position");) t = t.parentNode;
                        t && t !== n && 1 === t.nodeType && ((r = k(t).offset()).top += k.css(t, "borderTopWidth", !0), r.left += k.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - r.top - k.css(n, "marginTop", !0),
                        left: e.left - r.left - k.css(n, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map((function () {
                    for (var t = this.offsetParent; t && "static" === k.css(t, "position");) t = t.offsetParent;
                    return t || ot
                }))
            }
        }), k.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, (function (t, e) {
            var i = "pageYOffset" === e;
            k.fn[t] = function (n) {
                return V(this, (function (t, n, r) {
                    var o;
                    if (y(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r) return o ? o[e] : t[n];
                    o ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset) : t[n] = r
                }), t, n, arguments.length)
            }
        })), k.each(["top", "left"], (function (t, e) {
            k.cssHooks[e] = qt(m.pixelPosition, (function (t, i) {
                if (i) return i = Yt(t, e), Wt.test(i) ? k(t).position()[e] + "px" : i
            }))
        })), k.each({Height: "height", Width: "width"}, (function (t, e) {
            k.each({padding: "inner" + t, content: e, "": "outer" + t}, (function (i, n) {
                k.fn[n] = function (r, o) {
                    var s = arguments.length && (i || "boolean" != typeof r),
                        a = i || (!0 === r || !0 === o ? "margin" : "border");
                    return V(this, (function (e, i, r) {
                        var o;
                        return y(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? k.css(e, i, a) : k.style(e, i, r, a)
                    }), e, s ? r : void 0, s)
                }
            }))
        })), k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (t, e) {
            k.fn[e] = function (t) {
                return this.on(e, t)
            }
        })), k.fn.extend({
            bind: function (t, e, i) {
                return this.on(t, null, e, i)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, i, n) {
                return this.on(e, t, i, n)
            }, undelegate: function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }, hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (t, e) {
            k.fn[e] = function (t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }));
        var Xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        k.proxy = function (t, e) {
            var i, n, r;
            if ("string" == typeof e && (i = t[e], e = t, t = i), v(t)) return n = a.call(arguments, 2), (r = function () {
                return t.apply(e || this, n.concat(a.call(arguments)))
            }).guid = t.guid = t.guid || k.guid++, r
        }, k.holdReady = function (t) {
            t ? k.readyWait++ : k.ready(!0)
        }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = O, k.isFunction = v, k.isWindow = y, k.camelCase = G, k.type = x, k.now = Date.now, k.isNumeric = function (t) {
            var e = k.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, k.trim = function (t) {
            return null == t ? "" : (t + "").replace(Xe, "")
        }, void 0 === (n = function () {
            return k
        }.apply(e, [])) || (t.exports = n);
        var Ze = i.jQuery, Ke = i.$;
        return k.noConflict = function (t) {
            return i.$ === k && (i.$ = Ke), t && i.jQuery === k && (i.jQuery = Ze), k
        }, void 0 === r && (i.jQuery = i.$ = k), k
    }))
}, function (t, e, i) {
    /*!
  * Bootstrap util.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
    t.exports = function (t) {
        "use strict";

        function e(e) {
            var n = this, r = !1;
            return t(this).one(i.TRANSITION_END, (function () {
                r = !0
            })), setTimeout((function () {
                r || i.triggerTransitionEnd(n)
            }), e), this
        }

        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
        var i = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }, getSelectorFromElement: function (t) {
                var e = t.getAttribute("data-target");
                if (!e || "#" === e) {
                    var i = t.getAttribute("href");
                    e = i && "#" !== i ? i.trim() : ""
                }
                try {
                    return document.querySelector(e) ? e : null
                } catch (t) {
                    return null
                }
            }, getTransitionDurationFromElement: function (e) {
                if (!e) return 0;
                var i = t(e).css("transition-duration"), n = t(e).css("transition-delay"), r = parseFloat(i),
                    o = parseFloat(n);
                return r || o ? (i = i.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(i) + parseFloat(n))) : 0
            }, reflow: function (t) {
                return t.offsetHeight
            }, triggerTransitionEnd: function (e) {
                t(e).trigger("transitionend")
            }, supportsTransitionEnd: function () {
                return Boolean("transitionend")
            }, isElement: function (t) {
                return (t[0] || t).nodeType
            }, typeCheckConfig: function (t, e, n) {
                for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
                    var o = n[r], s = e[r],
                        a = s && i.isElement(s) ? "element" : null == (l = s) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                }
                var l
            }, findShadowRoot: function (t) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof t.getRootNode) {
                    var e = t.getRootNode();
                    return e instanceof ShadowRoot ? e : null
                }
                return t instanceof ShadowRoot ? t : t.parentNode ? i.findShadowRoot(t.parentNode) : null
            }, jQueryDetection: function () {
                if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var e = t.fn.jquery.split(" ")[0].split(".");
                if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }
        };
        return i.jQueryDetection(), t.fn.emulateTransitionEnd = e, t.event.special[i.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }, i
    }(i(0))
}, function (t, e, i) {
    "use strict";
    i.r(e), function (t) {
        /**!
         * @fileOverview Kickass library to create and place poppers near their reference elements.
         * @version 1.16.1
         * @license
         * Copyright (c) 2016 Federico Zivolo and contributors
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in all
         * copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
         * SOFTWARE.
         */
        var i = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
            n = function () {
                for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1) if (i && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
                return 0
            }();
        var r = i && window.Promise ? function (t) {
            var e = !1;
            return function () {
                e || (e = !0, window.Promise.resolve().then((function () {
                    e = !1, t()
                })))
            }
        } : function (t) {
            var e = !1;
            return function () {
                e || (e = !0, setTimeout((function () {
                    e = !1, t()
                }), n))
            }
        };

        function o(t) {
            return t && "[object Function]" === {}.toString.call(t)
        }

        function s(t, e) {
            if (1 !== t.nodeType) return [];
            var i = t.ownerDocument.defaultView.getComputedStyle(t, null);
            return e ? i[e] : i
        }

        function a(t) {
            return "HTML" === t.nodeName ? t : t.parentNode || t.host
        }

        function l(t) {
            if (!t) return document.body;
            switch (t.nodeName) {
                case"HTML":
                case"BODY":
                    return t.ownerDocument.body;
                case"#document":
                    return t.body
            }
            var e = s(t), i = e.overflow, n = e.overflowX, r = e.overflowY;
            return /(auto|scroll|overlay)/.test(i + r + n) ? t : l(a(t))
        }

        function c(t) {
            return t && t.referenceNode ? t.referenceNode : t
        }

        var u = i && !(!window.MSInputMethodContext || !document.documentMode),
            h = i && /MSIE 10/.test(navigator.userAgent);

        function d(t) {
            return 11 === t ? u : 10 === t ? h : u || h
        }

        function f(t) {
            if (!t) return document.documentElement;
            for (var e = d(10) ? document.body : null, i = t.offsetParent || null; i === e && t.nextElementSibling;) i = (t = t.nextElementSibling).offsetParent;
            var n = i && i.nodeName;
            return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === s(i, "position") ? f(i) : i : t ? t.ownerDocument.documentElement : document.documentElement
        }

        function p(t) {
            return null !== t.parentNode ? p(t.parentNode) : t
        }

        function g(t, e) {
            if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
            var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, n = i ? t : e, r = i ? e : t,
                o = document.createRange();
            o.setStart(n, 0), o.setEnd(r, 0);
            var s, a, l = o.commonAncestorContainer;
            if (t !== l && e !== l || n.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && f(s.firstElementChild) !== s ? f(l) : l;
            var c = p(t);
            return c.host ? g(c.host, e) : g(t, p(e).host)
        }

        function m(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                i = "top" === e ? "scrollTop" : "scrollLeft", n = t.nodeName;
            if ("BODY" === n || "HTML" === n) {
                var r = t.ownerDocument.documentElement, o = t.ownerDocument.scrollingElement || r;
                return o[i]
            }
            return t[i]
        }

        function v(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = m(e, "top"), r = m(e, "left"),
                o = i ? -1 : 1;
            return t.top += n * o, t.bottom += n * o, t.left += r * o, t.right += r * o, t
        }

        function y(t, e) {
            var i = "x" === e ? "Left" : "Top", n = "Left" === i ? "Right" : "Bottom";
            return parseFloat(t["border" + i + "Width"]) + parseFloat(t["border" + n + "Width"])
        }

        function _(t, e, i, n) {
            return Math.max(e["offset" + t], e["scroll" + t], i["client" + t], i["offset" + t], i["scroll" + t], d(10) ? parseInt(i["offset" + t]) + parseInt(n["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(n["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
        }

        function b(t) {
            var e = t.body, i = t.documentElement, n = d(10) && getComputedStyle(i);
            return {height: _("Height", e, i, n), width: _("Width", e, i, n)}
        }

        var w = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }, x = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(), k = function (t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }, C = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        };

        function S(t) {
            return C({}, t, {right: t.left + t.width, bottom: t.top + t.height})
        }

        function T(t) {
            var e = {};
            try {
                if (d(10)) {
                    e = t.getBoundingClientRect();
                    var i = m(t, "top"), n = m(t, "left");
                    e.top += i, e.left += n, e.bottom += i, e.right += n
                } else e = t.getBoundingClientRect()
            } catch (t) {
            }
            var r = {left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top},
                o = "HTML" === t.nodeName ? b(t.ownerDocument) : {}, a = o.width || t.clientWidth || r.width,
                l = o.height || t.clientHeight || r.height, c = t.offsetWidth - a, u = t.offsetHeight - l;
            if (c || u) {
                var h = s(t);
                c -= y(h, "x"), u -= y(h, "y"), r.width -= c, r.height -= u
            }
            return S(r)
        }

        function M(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = d(10),
                r = "HTML" === e.nodeName, o = T(t), a = T(e), c = l(t), u = s(e), h = parseFloat(u.borderTopWidth),
                f = parseFloat(u.borderLeftWidth);
            i && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
            var p = S({top: o.top - a.top - h, left: o.left - a.left - f, width: o.width, height: o.height});
            if (p.marginTop = 0, p.marginLeft = 0, !n && r) {
                var g = parseFloat(u.marginTop), m = parseFloat(u.marginLeft);
                p.top -= h - g, p.bottom -= h - g, p.left -= f - m, p.right -= f - m, p.marginTop = g, p.marginLeft = m
            }
            return (n && !i ? e.contains(c) : e === c && "BODY" !== c.nodeName) && (p = v(p, e)), p
        }

        function D(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = t.ownerDocument.documentElement, n = M(t, i), r = Math.max(i.clientWidth, window.innerWidth || 0),
                o = Math.max(i.clientHeight, window.innerHeight || 0), s = e ? 0 : m(i), a = e ? 0 : m(i, "left"),
                l = {top: s - n.top + n.marginTop, left: a - n.left + n.marginLeft, width: r, height: o};
            return S(l)
        }

        function O(t) {
            var e = t.nodeName;
            if ("BODY" === e || "HTML" === e) return !1;
            if ("fixed" === s(t, "position")) return !0;
            var i = a(t);
            return !!i && O(i)
        }

        function E(t) {
            if (!t || !t.parentElement || d()) return document.documentElement;
            for (var e = t.parentElement; e && "none" === s(e, "transform");) e = e.parentElement;
            return e || document.documentElement
        }

        function P(t, e, i, n) {
            var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = {top: 0, left: 0},
                s = r ? E(t) : g(t, c(e));
            if ("viewport" === n) o = D(s, r); else {
                var u = void 0;
                "scrollParent" === n ? "BODY" === (u = l(a(e))).nodeName && (u = t.ownerDocument.documentElement) : u = "window" === n ? t.ownerDocument.documentElement : n;
                var h = M(u, s, r);
                if ("HTML" !== u.nodeName || O(s)) o = h; else {
                    var d = b(t.ownerDocument), f = d.height, p = d.width;
                    o.top += h.top - h.marginTop, o.bottom = f + h.top, o.left += h.left - h.marginLeft, o.right = p + h.left
                }
            }
            var m = "number" == typeof (i = i || 0);
            return o.left += m ? i : i.left || 0, o.top += m ? i : i.top || 0, o.right -= m ? i : i.right || 0, o.bottom -= m ? i : i.bottom || 0, o
        }

        function A(t) {
            return t.width * t.height
        }

        function I(t, e, i, n, r) {
            var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === t.indexOf("auto")) return t;
            var s = P(i, n, o, r), a = {
                top: {width: s.width, height: e.top - s.top},
                right: {width: s.right - e.right, height: s.height},
                bottom: {width: s.width, height: s.bottom - e.bottom},
                left: {width: e.left - s.left, height: s.height}
            }, l = Object.keys(a).map((function (t) {
                return C({key: t}, a[t], {area: A(a[t])})
            })).sort((function (t, e) {
                return e.area - t.area
            })), c = l.filter((function (t) {
                var e = t.width, n = t.height;
                return e >= i.clientWidth && n >= i.clientHeight
            })), u = c.length > 0 ? c[0].key : l[0].key, h = t.split("-")[1];
            return u + (h ? "-" + h : "")
        }

        function j(t, e, i) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, r = n ? E(e) : g(e, c(i));
            return M(i, r, n)
        }

        function N(t) {
            var e = t.ownerDocument.defaultView.getComputedStyle(t),
                i = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                n = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
            return {width: t.offsetWidth + n, height: t.offsetHeight + i}
        }

        function F(t) {
            var e = {left: "right", right: "left", bottom: "top", top: "bottom"};
            return t.replace(/left|right|bottom|top/g, (function (t) {
                return e[t]
            }))
        }

        function L(t, e, i) {
            i = i.split("-")[0];
            var n = N(t), r = {width: n.width, height: n.height}, o = -1 !== ["right", "left"].indexOf(i),
                s = o ? "top" : "left", a = o ? "left" : "top", l = o ? "height" : "width", c = o ? "width" : "height";
            return r[s] = e[s] + e[l] / 2 - n[l] / 2, r[a] = i === a ? e[a] - n[c] : e[F(a)], r
        }

        function R(t, e) {
            return Array.prototype.find ? t.find(e) : t.filter(e)[0]
        }

        function $(t, e, i) {
            return (void 0 === i ? t : t.slice(0, function (t, e, i) {
                if (Array.prototype.findIndex) return t.findIndex((function (t) {
                    return t[e] === i
                }));
                var n = R(t, (function (t) {
                    return t[e] === i
                }));
                return t.indexOf(n)
            }(t, "name", i))).forEach((function (t) {
                t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var i = t.function || t.fn;
                t.enabled && o(i) && (e.offsets.popper = S(e.offsets.popper), e.offsets.reference = S(e.offsets.reference), e = i(e, t))
            })), e
        }

        function z() {
            if (!this.state.isDestroyed) {
                var t = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                t.offsets.reference = j(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = I(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = L(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = $(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
            }
        }

        function W(t, e) {
            return t.some((function (t) {
                var i = t.name;
                return t.enabled && i === e
            }))
        }

        function H(t) {
            for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < e.length; n++) {
                var r = e[n], o = r ? "" + r + i : t;
                if (void 0 !== document.body.style[o]) return o
            }
            return null
        }

        function B() {
            return this.state.isDestroyed = !0, W(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[H("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }

        function V(t) {
            var e = t.ownerDocument;
            return e ? e.defaultView : window
        }

        function Y(t, e, i, n) {
            i.updateBound = n, V(t).addEventListener("resize", i.updateBound, {passive: !0});
            var r = l(t);
            return function t(e, i, n, r) {
                var o = "BODY" === e.nodeName, s = o ? e.ownerDocument.defaultView : e;
                s.addEventListener(i, n, {passive: !0}), o || t(l(s.parentNode), i, n, r), r.push(s)
            }(r, "scroll", i.updateBound, i.scrollParents), i.scrollElement = r, i.eventsEnabled = !0, i
        }

        function q() {
            this.state.eventsEnabled || (this.state = Y(this.reference, this.options, this.state, this.scheduleUpdate))
        }

        function U() {
            var t, e;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, V(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach((function (t) {
                t.removeEventListener("scroll", e.updateBound)
            })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
        }

        function G(t) {
            return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
        }

        function Q(t, e) {
            Object.keys(e).forEach((function (i) {
                var n = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && G(e[i]) && (n = "px"), t.style[i] = e[i] + n
            }))
        }

        var X = i && /Firefox/i.test(navigator.userAgent);

        function Z(t, e, i) {
            var n = R(t, (function (t) {
                return t.name === e
            })), r = !!n && t.some((function (t) {
                return t.name === i && t.enabled && t.order < n.order
            }));
            if (!r) {
                var o = "`" + e + "`", s = "`" + i + "`";
                console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
            }
            return r
        }

        var K = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            J = K.slice(3);

        function tt(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = J.indexOf(t),
                n = J.slice(i + 1).concat(J.slice(0, i));
            return e ? n.reverse() : n
        }

        var et = "flip", it = "clockwise", nt = "counterclockwise";

        function rt(t, e, i, n) {
            var r = [0, 0], o = -1 !== ["right", "left"].indexOf(n), s = t.split(/(\+|\-)/).map((function (t) {
                return t.trim()
            })), a = s.indexOf(R(s, (function (t) {
                return -1 !== t.search(/,|\s/)
            })));
            s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
            return (c = c.map((function (t, n) {
                var r = (1 === n ? !o : o) ? "height" : "width", s = !1;
                return t.reduce((function (t, e) {
                    return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
                }), []).map((function (t) {
                    return function (t, e, i, n) {
                        var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +r[1], s = r[2];
                        if (!o) return t;
                        if (0 === s.indexOf("%")) {
                            var a = void 0;
                            switch (s) {
                                case"%p":
                                    a = i;
                                    break;
                                case"%":
                                case"%r":
                                default:
                                    a = n
                            }
                            return S(a)[e] / 100 * o
                        }
                        if ("vh" === s || "vw" === s) {
                            return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
                        }
                        return o
                    }(t, r, e, i)
                }))
            }))).forEach((function (t, e) {
                t.forEach((function (i, n) {
                    G(i) && (r[e] += i * ("-" === t[n - 1] ? -1 : 1))
                }))
            })), r
        }

        var ot = {
            placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
            }, onUpdate: function () {
            }, modifiers: {
                shift: {
                    order: 100, enabled: !0, fn: function (t) {
                        var e = t.placement, i = e.split("-")[0], n = e.split("-")[1];
                        if (n) {
                            var r = t.offsets, o = r.reference, s = r.popper, a = -1 !== ["bottom", "top"].indexOf(i),
                                l = a ? "left" : "top", c = a ? "width" : "height",
                                u = {start: k({}, l, o[l]), end: k({}, l, o[l] + o[c] - s[c])};
                            t.offsets.popper = C({}, s, u[n])
                        }
                        return t
                    }
                }, offset: {
                    order: 200, enabled: !0, fn: function (t, e) {
                        var i = e.offset, n = t.placement, r = t.offsets, o = r.popper, s = r.reference,
                            a = n.split("-")[0], l = void 0;
                        return l = G(+i) ? [+i, 0] : rt(i, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t
                    }, offset: 0
                }, preventOverflow: {
                    order: 300, enabled: !0, fn: function (t, e) {
                        var i = e.boundariesElement || f(t.instance.popper);
                        t.instance.reference === i && (i = f(i));
                        var n = H("transform"), r = t.instance.popper.style, o = r.top, s = r.left, a = r[n];
                        r.top = "", r.left = "", r[n] = "";
                        var l = P(t.instance.popper, t.instance.reference, e.padding, i, t.positionFixed);
                        r.top = o, r.left = s, r[n] = a, e.boundaries = l;
                        var c = e.priority, u = t.offsets.popper, h = {
                            primary: function (t) {
                                var i = u[t];
                                return u[t] < l[t] && !e.escapeWithReference && (i = Math.max(u[t], l[t])), k({}, t, i)
                            }, secondary: function (t) {
                                var i = "right" === t ? "left" : "top", n = u[i];
                                return u[t] > l[t] && !e.escapeWithReference && (n = Math.min(u[i], l[t] - ("right" === t ? u.width : u.height))), k({}, i, n)
                            }
                        };
                        return c.forEach((function (t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            u = C({}, u, h[e](t))
                        })), t.offsets.popper = u, t
                    }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
                }, keepTogether: {
                    order: 400, enabled: !0, fn: function (t) {
                        var e = t.offsets, i = e.popper, n = e.reference, r = t.placement.split("-")[0], o = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r), a = s ? "right" : "bottom", l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return i[a] < o(n[l]) && (t.offsets.popper[l] = o(n[l]) - i[c]), i[l] > o(n[a]) && (t.offsets.popper[l] = o(n[a])), t
                    }
                }, arrow: {
                    order: 500, enabled: !0, fn: function (t, e) {
                        var i;
                        if (!Z(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var n = e.element;
                        if ("string" == typeof n) {
                            if (!(n = t.instance.popper.querySelector(n))) return t
                        } else if (!t.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var r = t.placement.split("-")[0], o = t.offsets, a = o.popper, l = o.reference,
                            c = -1 !== ["left", "right"].indexOf(r), u = c ? "height" : "width", h = c ? "Top" : "Left",
                            d = h.toLowerCase(), f = c ? "left" : "top", p = c ? "bottom" : "right", g = N(n)[u];
                        l[p] - g < a[d] && (t.offsets.popper[d] -= a[d] - (l[p] - g)), l[d] + g > a[p] && (t.offsets.popper[d] += l[d] + g - a[p]), t.offsets.popper = S(t.offsets.popper);
                        var m = l[d] + l[u] / 2 - g / 2, v = s(t.instance.popper), y = parseFloat(v["margin" + h]),
                            _ = parseFloat(v["border" + h + "Width"]), b = m - t.offsets.popper[d] - y - _;
                        return b = Math.max(Math.min(a[u] - g, b), 0), t.arrowElement = n, t.offsets.arrow = (k(i = {}, d, Math.round(b)), k(i, f, ""), i), t
                    }, element: "[x-arrow]"
                }, flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (t, e) {
                        if (W(t.instance.modifiers, "inner")) return t;
                        if (t.flipped && t.placement === t.originalPlacement) return t;
                        var i = P(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                            n = t.placement.split("-")[0], r = F(n), o = t.placement.split("-")[1] || "", s = [];
                        switch (e.behavior) {
                            case et:
                                s = [n, r];
                                break;
                            case it:
                                s = tt(n);
                                break;
                            case nt:
                                s = tt(n, !0);
                                break;
                            default:
                                s = e.behavior
                        }
                        return s.forEach((function (a, l) {
                            if (n !== a || s.length === l + 1) return t;
                            n = t.placement.split("-")[0], r = F(n);
                            var c = t.offsets.popper, u = t.offsets.reference, h = Math.floor,
                                d = "left" === n && h(c.right) > h(u.left) || "right" === n && h(c.left) < h(u.right) || "top" === n && h(c.bottom) > h(u.top) || "bottom" === n && h(c.top) < h(u.bottom),
                                f = h(c.left) < h(i.left), p = h(c.right) > h(i.right), g = h(c.top) < h(i.top),
                                m = h(c.bottom) > h(i.bottom),
                                v = "left" === n && f || "right" === n && p || "top" === n && g || "bottom" === n && m,
                                y = -1 !== ["top", "bottom"].indexOf(n),
                                _ = !!e.flipVariations && (y && "start" === o && f || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m),
                                b = !!e.flipVariationsByContent && (y && "start" === o && p || y && "end" === o && f || !y && "start" === o && m || !y && "end" === o && g),
                                w = _ || b;
                            (d || v || w) && (t.flipped = !0, (d || v) && (n = s[l + 1]), w && (o = function (t) {
                                return "end" === t ? "start" : "start" === t ? "end" : t
                            }(o)), t.placement = n + (o ? "-" + o : ""), t.offsets.popper = C({}, t.offsets.popper, L(t.instance.popper, t.offsets.reference, t.placement)), t = $(t.instance.modifiers, t, "flip"))
                        })), t
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                }, inner: {
                    order: 700, enabled: !1, fn: function (t) {
                        var e = t.placement, i = e.split("-")[0], n = t.offsets, r = n.popper, o = n.reference,
                            s = -1 !== ["left", "right"].indexOf(i), a = -1 === ["top", "left"].indexOf(i);
                        return r[s ? "left" : "top"] = o[i] - (a ? r[s ? "width" : "height"] : 0), t.placement = F(e), t.offsets.popper = S(r), t
                    }
                }, hide: {
                    order: 800, enabled: !0, fn: function (t) {
                        if (!Z(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference, i = R(t.instance.modifiers, (function (t) {
                            return "preventOverflow" === t.name
                        })).boundaries;
                        if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                }, computeStyle: {
                    order: 850, enabled: !0, fn: function (t, e) {
                        var i = e.x, n = e.y, r = t.offsets.popper, o = R(t.instance.modifiers, (function (t) {
                            return "applyStyle" === t.name
                        })).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== o ? o : e.gpuAcceleration, a = f(t.instance.popper), l = T(a),
                            c = {position: r.position}, u = function (t, e) {
                                var i = t.offsets, n = i.popper, r = i.reference, o = Math.round, s = Math.floor,
                                    a = function (t) {
                                        return t
                                    }, l = o(r.width), c = o(n.width), u = -1 !== ["left", "right"].indexOf(t.placement),
                                    h = -1 !== t.placement.indexOf("-"), d = e ? u || h || l % 2 == c % 2 ? o : s : a,
                                    f = e ? o : a;
                                return {
                                    left: d(l % 2 == 1 && c % 2 == 1 && !h && e ? n.left - 1 : n.left),
                                    top: f(n.top),
                                    bottom: f(n.bottom),
                                    right: d(n.right)
                                }
                            }(t, window.devicePixelRatio < 2 || !X), h = "bottom" === i ? "top" : "bottom",
                            d = "right" === n ? "left" : "right", p = H("transform"), g = void 0, m = void 0;
                        if (m = "bottom" === h ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, g = "right" === d ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && p) c[p] = "translate3d(" + g + "px, " + m + "px, 0)", c[h] = 0, c[d] = 0, c.willChange = "transform"; else {
                            var v = "bottom" === h ? -1 : 1, y = "right" === d ? -1 : 1;
                            c[h] = m * v, c[d] = g * y, c.willChange = h + ", " + d
                        }
                        var _ = {"x-placement": t.placement};
                        return t.attributes = C({}, _, t.attributes), t.styles = C({}, c, t.styles), t.arrowStyles = C({}, t.offsets.arrow, t.arrowStyles), t
                    }, gpuAcceleration: !0, x: "bottom", y: "right"
                }, applyStyle: {
                    order: 900, enabled: !0, fn: function (t) {
                        var e, i;
                        return Q(t.instance.popper, t.styles), e = t.instance.popper, i = t.attributes, Object.keys(i).forEach((function (t) {
                            !1 !== i[t] ? e.setAttribute(t, i[t]) : e.removeAttribute(t)
                        })), t.arrowElement && Object.keys(t.arrowStyles).length && Q(t.arrowElement, t.arrowStyles), t
                    }, onLoad: function (t, e, i, n, r) {
                        var o = j(r, e, t, i.positionFixed),
                            s = I(i.placement, o, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                        return e.setAttribute("x-placement", s), Q(e, {position: i.positionFixed ? "fixed" : "absolute"}), i
                    }, gpuAcceleration: void 0
                }
            }
        }, st = function () {
            function t(e, i) {
                var n = this, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                w(this, t), this.scheduleUpdate = function () {
                    return requestAnimationFrame(n.update)
                }, this.update = r(this.update.bind(this)), this.options = C({}, t.Defaults, s), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(C({}, t.Defaults.modifiers, s.modifiers)).forEach((function (e) {
                    n.options.modifiers[e] = C({}, t.Defaults.modifiers[e] || {}, s.modifiers ? s.modifiers[e] : {})
                })), this.modifiers = Object.keys(this.options.modifiers).map((function (t) {
                    return C({name: t}, n.options.modifiers[t])
                })).sort((function (t, e) {
                    return t.order - e.order
                })), this.modifiers.forEach((function (t) {
                    t.enabled && o(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
                })), this.update();
                var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), this.state.eventsEnabled = a
            }

            return x(t, [{
                key: "update", value: function () {
                    return z.call(this)
                }
            }, {
                key: "destroy", value: function () {
                    return B.call(this)
                }
            }, {
                key: "enableEventListeners", value: function () {
                    return q.call(this)
                }
            }, {
                key: "disableEventListeners", value: function () {
                    return U.call(this)
                }
            }]), t
        }();
        st.Utils = ("undefined" != typeof window ? window : t).PopperUtils, st.placements = K, st.Defaults = ot, e.default = st
    }.call(this, i(3))
}, function (t, e) {
    var i;
    i = function () {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}, function (t, e, i) {
    /*!
  * Bootstrap tooltip.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
    t.exports = function (t, e, i) {
        "use strict";

        function n(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function r(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function o(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(i), !0).forEach((function (e) {
                    r(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
        var a = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], l = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }, c = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
            u = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

        function h(t, e, i) {
            if (0 === t.length) return t;
            if (i && "function" == typeof i) return i(t);
            for (var n = (new window.DOMParser).parseFromString(t, "text/html"), r = Object.keys(e), o = [].slice.call(n.body.querySelectorAll("*")), s = function (t, i) {
                var n = o[t], s = n.nodeName.toLowerCase();
                if (-1 === r.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                var l = [].slice.call(n.attributes), h = [].concat(e["*"] || [], e[s] || []);
                l.forEach((function (t) {
                    (function (t, e) {
                        var i = t.nodeName.toLowerCase();
                        if (-1 !== e.indexOf(i)) return -1 === a.indexOf(i) || Boolean(t.nodeValue.match(c) || t.nodeValue.match(u));
                        for (var n = e.filter((function (t) {
                            return t instanceof RegExp
                        })), r = 0, o = n.length; r < o; r++) if (i.match(n[r])) return !0;
                        return !1
                    })(t, h) || n.removeAttribute(t.nodeName)
                }))
            }, l = 0, h = o.length; l < h; l++) s(l);
            return n.body.innerHTML
        }

        var d = "tooltip", f = ".bs.tooltip", p = t.fn[d], g = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            m = ["sanitize", "whiteList", "sanitizeFn"], v = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
                popperConfig: "(null|object)"
            }, y = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, _ = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: l,
                popperConfig: null
            }, b = {
                HIDE: "hide" + f,
                HIDDEN: "hidden" + f,
                SHOW: "show" + f,
                SHOWN: "shown" + f,
                INSERTED: "inserted" + f,
                CLICK: "click" + f,
                FOCUSIN: "focusin" + f,
                FOCUSOUT: "focusout" + f,
                MOUSEENTER: "mouseenter" + f,
                MOUSELEAVE: "mouseleave" + f
            }, w = function () {
                function r(t, i) {
                    if (void 0 === e) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(i), this.tip = null, this._setListeners()
                }

                var o, a, l, c = r.prototype;
                return c.enable = function () {
                    this._isEnabled = !0
                }, c.disable = function () {
                    this._isEnabled = !1
                }, c.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, c.toggle = function (e) {
                    if (this._isEnabled) if (e) {
                        var i = this.constructor.DATA_KEY, n = t(e.currentTarget).data(i);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (t(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
                }, c.dispose = function () {
                    clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, c.show = function () {
                    var n = this;
                    if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var r = t.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        t(this.element).trigger(r);
                        var o = i.findShadowRoot(this.element),
                            s = t.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
                        if (r.isDefaultPrevented() || !s) return;
                        var a = this.getTipElement(), l = i.getUID(this.constructor.NAME);
                        a.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && t(a).addClass("fade");
                        var c = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                            u = this._getAttachment(c);
                        this.addAttachmentClass(u);
                        var h = this._getContainer();
                        t(a).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(a).appendTo(h), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new e(this.element, a, this._getPopperConfig(u)), t(a).addClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                        var d = function () {
                            n.config.animation && n._fixTransition();
                            var e = n._hoverState;
                            n._hoverState = null, t(n.element).trigger(n.constructor.Event.SHOWN), "out" === e && n._leave(null, n)
                        };
                        if (t(this.tip).hasClass("fade")) {
                            var f = i.getTransitionDurationFromElement(this.tip);
                            t(this.tip).one(i.TRANSITION_END, d).emulateTransitionEnd(f)
                        } else d()
                    }
                }, c.hide = function (e) {
                    var n = this, r = this.getTipElement(), o = t.Event(this.constructor.Event.HIDE), s = function () {
                        "show" !== n._hoverState && r.parentNode && r.parentNode.removeChild(r), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                    };
                    if (t(this.element).trigger(o), !o.isDefaultPrevented()) {
                        if (t(r).removeClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, t(this.tip).hasClass("fade")) {
                            var a = i.getTransitionDurationFromElement(r);
                            t(r).one(i.TRANSITION_END, s).emulateTransitionEnd(a)
                        } else s();
                        this._hoverState = ""
                    }
                }, c.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, c.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, c.addAttachmentClass = function (e) {
                    t(this.getTipElement()).addClass("bs-tooltip-" + e)
                }, c.getTipElement = function () {
                    return this.tip = this.tip || t(this.config.template)[0], this.tip
                }, c.setContent = function () {
                    var e = this.getTipElement();
                    this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass("fade show")
                }, c.setElementContent = function (e, i) {
                    "object" != typeof i || !i.nodeType && !i.jquery ? this.config.html ? (this.config.sanitize && (i = h(i, this.config.whiteList, this.config.sanitizeFn)), e.html(i)) : e.text(i) : this.config.html ? t(i).parent().is(e) || e.empty().append(i) : e.text(t(i).text())
                }, c.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                }, c._getPopperConfig = function (t) {
                    var e = this;
                    return s(s({}, {
                        placement: t,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: ".arrow"},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function (t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), this.config.popperConfig)
                }, c._getOffset = function () {
                    var t = this, e = {};
                    return "function" == typeof this.config.offset ? e.fn = function (e) {
                        return e.offsets = s(s({}, e.offsets), t.config.offset(e.offsets, t.element) || {}), e
                    } : e.offset = this.config.offset, e
                }, c._getContainer = function () {
                    return !1 === this.config.container ? document.body : i.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
                }, c._getAttachment = function (t) {
                    return y[t.toUpperCase()]
                }, c._setListeners = function () {
                    var e = this;
                    this.config.trigger.split(" ").forEach((function (i) {
                        if ("click" === i) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function (t) {
                            return e.toggle(t)
                        })); else if ("manual" !== i) {
                            var n = "hover" === i ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                r = "hover" === i ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                            t(e.element).on(n, e.config.selector, (function (t) {
                                return e._enter(t)
                            })).on(r, e.config.selector, (function (t) {
                                return e._leave(t)
                            }))
                        }
                    })), this._hideModalHandler = function () {
                        e.element && e.hide()
                    }, t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s(s({}, this.config), {}, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, c._fixTitle = function () {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, c._enter = function (e, i) {
                    var n = this.constructor.DATA_KEY;
                    (i = i || t(e.currentTarget).data(n)) || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t(i.getTipElement()).hasClass("show") || "show" === i._hoverState ? i._hoverState = "show" : (clearTimeout(i._timeout), i._hoverState = "show", i.config.delay && i.config.delay.show ? i._timeout = setTimeout((function () {
                        "show" === i._hoverState && i.show()
                    }), i.config.delay.show) : i.show())
                }, c._leave = function (e, i) {
                    var n = this.constructor.DATA_KEY;
                    (i = i || t(e.currentTarget).data(n)) || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), i._isWithActiveTrigger() || (clearTimeout(i._timeout), i._hoverState = "out", i.config.delay && i.config.delay.hide ? i._timeout = setTimeout((function () {
                        "out" === i._hoverState && i.hide()
                    }), i.config.delay.hide) : i.hide())
                }, c._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                    return !1
                }, c._getConfig = function (e) {
                    var n = t(this.element).data();
                    return Object.keys(n).forEach((function (t) {
                        -1 !== m.indexOf(t) && delete n[t]
                    })), "number" == typeof (e = s(s(s({}, this.constructor.Default), n), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), i.typeCheckConfig(d, e, this.constructor.DefaultType), e.sanitize && (e.template = h(e.template, e.whiteList, e.sanitizeFn)), e
                }, c._getDelegateConfig = function () {
                    var t = {};
                    if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t
                }, c._cleanTipClass = function () {
                    var e = t(this.getTipElement()), i = e.attr("class").match(g);
                    null !== i && i.length && e.removeClass(i.join(""))
                }, c._handlePopperPlacementChange = function (t) {
                    this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                }, c._fixTransition = function () {
                    var e = this.getTipElement(), i = this.config.animation;
                    null === e.getAttribute("x-placement") && (t(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i)
                }, r._jQueryInterface = function (e) {
                    return this.each((function () {
                        var i = t(this).data("bs.tooltip"), n = "object" == typeof e && e;
                        if ((i || !/dispose|hide/.test(e)) && (i || (i = new r(this, n), t(this).data("bs.tooltip", i)), "string" == typeof e)) {
                            if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                            i[e]()
                        }
                    }))
                }, o = r, l = [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return _
                    }
                }, {
                    key: "NAME", get: function () {
                        return d
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return "bs.tooltip"
                    }
                }, {
                    key: "Event", get: function () {
                        return b
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return f
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return v
                    }
                }], (a = null) && n(o.prototype, a), l && n(o, l), r
            }();
        return t.fn[d] = w._jQueryInterface, t.fn[d].Constructor = w, t.fn[d].noConflict = function () {
            return t.fn[d] = p, w._jQueryInterface
        }, w
    }(i(0), i(2), i(1))
}, function (t, e, i) {
    t.exports = function (t) {
        function e(n) {
            if (i[n]) return i[n].exports;
            var r = i[n] = {exports: {}, id: n, loaded: !1};
            return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
        }

        var i = {};
        return e.m = t, e.c = i, e.p = "dist/", e(0)
    }([function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var r = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            }, o = (n(i(1)), i(6)), s = n(o), a = n(i(7)), l = n(i(8)), c = n(i(9)), u = n(i(10)), h = n(i(11)),
            d = n(i(14)), f = [], p = !1, g = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            }, m = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (t && (p = !0), p) return f = (0, h.default)(f, g), (0, u.default)(f, g.once), f
            }, v = function () {
                f = (0, d.default)(), m()
            };
        t.exports = {
            init: function (t) {
                g = r(g, t), f = (0, d.default)();
                var e = document.all && !window.atob;
                return function (t) {
                    return !0 === t || "mobile" === t && c.default.mobile() || "phone" === t && c.default.phone() || "tablet" === t && c.default.tablet() || "function" == typeof t && !0 === t()
                }(g.disable) || e ? void f.forEach((function (t, e) {
                    t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay")
                })) : (g.disableMutationObserver || l.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), g.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", g.easing), document.querySelector("body").setAttribute("data-aos-duration", g.duration), document.querySelector("body").setAttribute("data-aos-delay", g.delay), "DOMContentLoaded" === g.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? m(!0) : "load" === g.startEvent ? window.addEventListener(g.startEvent, (function () {
                    m(!0)
                })) : document.addEventListener(g.startEvent, (function () {
                    m(!0)
                })), window.addEventListener("resize", (0, a.default)(m, g.debounceDelay, !0)), window.addEventListener("orientationchange", (0, a.default)(m, g.debounceDelay, !0)), window.addEventListener("scroll", (0, s.default)((function () {
                    (0, u.default)(f, g.once)
                }), g.throttleDelay)), g.disableMutationObserver || l.default.ready("[data-aos]", v), f)
            }, refresh: m, refreshHard: v
        }
    }, function (t, e) {
    }, , , , , function (t, e) {
        (function (e) {
            "use strict";

            function i(t, e, i) {
                function r(e) {
                    var i = d, n = f;
                    return d = f = void 0, y = e, g = t.apply(n, i)
                }

                function s(t) {
                    return y = t, m = setTimeout(c, e), x ? r(t) : g
                }

                function l(t) {
                    var i = t - v;
                    return void 0 === v || i >= e || i < 0 || k && t - y >= p
                }

                function c() {
                    var t = w();
                    return l(t) ? u(t) : void (m = setTimeout(c, function (t) {
                        var i = e - (t - v);
                        return k ? b(i, p - (t - y)) : i
                    }(t)))
                }

                function u(t) {
                    return m = void 0, C && d ? r(t) : (d = f = void 0, g)
                }

                function h() {
                    var t = w(), i = l(t);
                    if (d = arguments, f = this, v = t, i) {
                        if (void 0 === m) return s(v);
                        if (k) return m = setTimeout(c, e), r(v)
                    }
                    return void 0 === m && (m = setTimeout(c, e)), g
                }

                var d, f, p, g, m, v, y = 0, x = !1, k = !1, C = !0;
                if ("function" != typeof t) throw new TypeError(a);
                return e = o(e) || 0, n(i) && (x = !!i.leading, p = (k = "maxWait" in i) ? _(o(i.maxWait) || 0, e) : p, C = "trailing" in i ? !!i.trailing : C), h.cancel = function () {
                    void 0 !== m && clearTimeout(m), y = 0, d = v = f = m = void 0
                }, h.flush = function () {
                    return void 0 === m ? g : u(w())
                }, h
            }

            function n(t) {
                var e = void 0 === t ? "undefined" : s(t);
                return !!t && ("object" == e || "function" == e)
            }

            function r(t) {
                return "symbol" == (void 0 === t ? "undefined" : s(t)) || function (t) {
                    return !!t && "object" == (void 0 === t ? "undefined" : s(t))
                }(t) && y.call(t) == c
            }

            function o(t) {
                if ("number" == typeof t) return t;
                if (r(t)) return l;
                if (n(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = n(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(u, "");
                var i = d.test(t);
                return i || f.test(t) ? p(t.slice(2), i ? 2 : 8) : h.test(t) ? l : +t
            }

            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, a = "Expected a function", l = NaN, c = "[object Symbol]", u = /^\s+|\s+$/g, h = /^[-+]0x[0-9a-f]+$/i,
                d = /^0b[01]+$/i, f = /^0o[0-7]+$/i, p = parseInt,
                g = "object" == (void 0 === e ? "undefined" : s(e)) && e && e.Object === Object && e,
                m = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
                v = g || m || Function("return this")(), y = Object.prototype.toString, _ = Math.max, b = Math.min,
                w = function () {
                    return v.Date.now()
                };
            t.exports = function (t, e, r) {
                var o = !0, s = !0;
                if ("function" != typeof t) throw new TypeError(a);
                return n(r) && (o = "leading" in r ? !!r.leading : o, s = "trailing" in r ? !!r.trailing : s), i(t, e, {
                    leading: o,
                    maxWait: e,
                    trailing: s
                })
            }
        }).call(e, function () {
            return this
        }())
    }, function (t, e) {
        (function (e) {
            "use strict";

            function i(t) {
                var e = void 0 === t ? "undefined" : o(t);
                return !!t && ("object" == e || "function" == e)
            }

            function n(t) {
                return "symbol" == (void 0 === t ? "undefined" : o(t)) || function (t) {
                    return !!t && "object" == (void 0 === t ? "undefined" : o(t))
                }(t) && v.call(t) == l
            }

            function r(t) {
                if ("number" == typeof t) return t;
                if (n(t)) return a;
                if (i(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = i(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(c, "");
                var r = h.test(t);
                return r || d.test(t) ? f(t.slice(2), r ? 2 : 8) : u.test(t) ? a : +t
            }

            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, s = "Expected a function", a = NaN, l = "[object Symbol]", c = /^\s+|\s+$/g, u = /^[-+]0x[0-9a-f]+$/i,
                h = /^0b[01]+$/i, d = /^0o[0-7]+$/i, f = parseInt,
                p = "object" == (void 0 === e ? "undefined" : o(e)) && e && e.Object === Object && e,
                g = "object" == ("undefined" == typeof self ? "undefined" : o(self)) && self && self.Object === Object && self,
                m = p || g || Function("return this")(), v = Object.prototype.toString, y = Math.max, _ = Math.min,
                b = function () {
                    return m.Date.now()
                };
            t.exports = function (t, e, n) {
                function o(e) {
                    var i = d, n = f;
                    return d = f = void 0, w = e, g = t.apply(n, i)
                }

                function a(t) {
                    return w = t, m = setTimeout(c, e), x ? o(t) : g
                }

                function l(t) {
                    var i = t - v;
                    return void 0 === v || i >= e || i < 0 || k && t - w >= p
                }

                function c() {
                    var t = b();
                    return l(t) ? u(t) : void (m = setTimeout(c, function (t) {
                        var i = e - (t - v);
                        return k ? _(i, p - (t - w)) : i
                    }(t)))
                }

                function u(t) {
                    return m = void 0, C && d ? o(t) : (d = f = void 0, g)
                }

                function h() {
                    var t = b(), i = l(t);
                    if (d = arguments, f = this, v = t, i) {
                        if (void 0 === m) return a(v);
                        if (k) return m = setTimeout(c, e), o(v)
                    }
                    return void 0 === m && (m = setTimeout(c, e)), g
                }

                var d, f, p, g, m, v, w = 0, x = !1, k = !1, C = !0;
                if ("function" != typeof t) throw new TypeError(s);
                return e = r(e) || 0, i(n) && (x = !!n.leading, p = (k = "maxWait" in n) ? y(r(n.maxWait) || 0, e) : p, C = "trailing" in n ? !!n.trailing : C), h.cancel = function () {
                    void 0 !== m && clearTimeout(m), w = 0, d = v = f = m = void 0
                }, h.flush = function () {
                    return void 0 === m ? g : u(b())
                }, h
            }
        }).call(e, function () {
            return this
        }())
    }, function (t, e) {
        "use strict";

        function i() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        }

        function n(t) {
            t && t.forEach((function (t) {
                var e = Array.prototype.slice.call(t.addedNodes), i = Array.prototype.slice.call(t.removedNodes);
                if (function t(e) {
                    var i = void 0, n = void 0;
                    for (i = 0; i < e.length; i += 1) {
                        if ((n = e[i]).dataset && n.dataset.aos) return !0;
                        if (n.children && t(n.children)) return !0
                    }
                    return !1
                }(e.concat(i))) return r()
            }))
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
        };
        e.default = {
            isSupported: function () {
                return !!i()
            }, ready: function (t, e) {
                var o = window.document, s = new (i())(n);
                r = e, s.observe(o.documentElement, {childList: !0, subtree: !0, removedNodes: !0})
            }
        }
    }, function (t, e) {
        "use strict";

        function i() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            o = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            l = function () {
                function t() {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }

                return n(t, [{
                    key: "phone", value: function () {
                        var t = i();
                        return !(!r.test(t) && !o.test(t.substr(0, 4)))
                    }
                }, {
                    key: "mobile", value: function () {
                        var t = i();
                        return !(!s.test(t) && !a.test(t.substr(0, 4)))
                    }
                }, {
                    key: "tablet", value: function () {
                        return this.mobile() && !this.phone()
                    }
                }]), t
            }();
        e.default = new l
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = function (t, e) {
            var i = window.pageYOffset, n = window.innerHeight;
            t.forEach((function (t, r) {
                !function (t, e, i) {
                    var n = t.node.getAttribute("data-aos-once");
                    e > t.position ? t.node.classList.add("aos-animate") : void 0 !== n && ("false" === n || !i && "true" !== n) && t.node.classList.remove("aos-animate")
                }(t, n + i, e)
            }))
        }
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(i(12));
        e.default = function (t, e) {
            return t.forEach((function (t, i) {
                t.node.classList.add("aos-init"), t.position = (0, n.default)(t.node, e.offset)
            })), t
        }
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(i(13));
        e.default = function (t, e) {
            var i = 0, r = 0, o = window.innerHeight, s = {
                offset: t.getAttribute("data-aos-offset"),
                anchor: t.getAttribute("data-aos-anchor"),
                anchorPlacement: t.getAttribute("data-aos-anchor-placement")
            };
            switch (s.offset && !isNaN(s.offset) && (r = parseInt(s.offset)), s.anchor && document.querySelectorAll(s.anchor) && (t = document.querySelectorAll(s.anchor)[0]), i = (0, n.default)(t).top, s.anchorPlacement) {
                case"top-bottom":
                    break;
                case"center-bottom":
                    i += t.offsetHeight / 2;
                    break;
                case"bottom-bottom":
                    i += t.offsetHeight;
                    break;
                case"top-center":
                    i += o / 2;
                    break;
                case"bottom-center":
                    i += o / 2 + t.offsetHeight;
                    break;
                case"center-center":
                    i += o / 2 + t.offsetHeight / 2;
                    break;
                case"top-top":
                    i += o;
                    break;
                case"bottom-top":
                    i += t.offsetHeight + o;
                    break;
                case"center-top":
                    i += t.offsetHeight / 2 + o
            }
            return s.anchorPlacement || s.offset || isNaN(e) || (r = e), i + r
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = function (t) {
            for (var e = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0), i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0), t = t.offsetParent;
            return {top: i, left: e}
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = function (t) {
            return t = t || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(t, (function (t) {
                return {node: t}
            }))
        }
    }])
}, function (t, e, i) {
    window, t.exports = function (t) {
        var e = {};

        function i(n) {
            if (e[n]) return e[n].exports;
            var r = e[n] = {i: n, l: !1, exports: {}};
            return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
        }

        return i.m = t, i.c = e, i.d = function (t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
        }, i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, i.t = function (t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function (e) {
                return t[e]
            }.bind(null, r));
            return n
        }, i.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 3)
    }([function (t, e, i) {
        var n, r;
        /*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
        /*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
        !function (o, s) {
            "use strict";
            n = [i(2)], void 0 === (r = function (t) {
                return function (t, e) {
                    var i = t.jQuery, n = t.console;

                    function r(t, e) {
                        for (var i in e) t[i] = e[i];
                        return t
                    }

                    var o = Array.prototype.slice;

                    function s(t, e, a) {
                        if (!(this instanceof s)) return new s(t, e, a);
                        var l = t;
                        "string" == typeof t && (l = document.querySelectorAll(t)), l ? (this.elements = function (t) {
                            return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? o.call(t) : [t]
                        }(l), this.options = r({}, this.options), "function" == typeof e ? a = e : r(this.options, e), a && this.on("always", a), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (l || t))
                    }

                    s.prototype = Object.create(e.prototype), s.prototype.options = {}, s.prototype.getImages = function () {
                        this.images = [], this.elements.forEach(this.addElementImages, this)
                    }, s.prototype.addElementImages = function (t) {
                        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                        var e = t.nodeType;
                        if (e && a[e]) {
                            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                                var r = i[n];
                                this.addImage(r)
                            }
                            if ("string" == typeof this.options.background) {
                                var o = t.querySelectorAll(this.options.background);
                                for (n = 0; n < o.length; n++) {
                                    var s = o[n];
                                    this.addElementBackgroundImages(s)
                                }
                            }
                        }
                    };
                    var a = {1: !0, 9: !0, 11: !0};

                    function l(t) {
                        this.img = t
                    }

                    function c(t, e) {
                        this.url = t, this.element = e, this.img = new Image
                    }

                    return s.prototype.addElementBackgroundImages = function (t) {
                        var e = getComputedStyle(t);
                        if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                            var r = n && n[2];
                            r && this.addBackground(r, t), n = i.exec(e.backgroundImage)
                        }
                    }, s.prototype.addImage = function (t) {
                        var e = new l(t);
                        this.images.push(e)
                    }, s.prototype.addBackground = function (t, e) {
                        var i = new c(t, e);
                        this.images.push(i)
                    }, s.prototype.check = function () {
                        var t = this;

                        function e(e, i, n) {
                            setTimeout((function () {
                                t.progress(e, i, n)
                            }))
                        }

                        this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function (t) {
                            t.once("progress", e), t.check()
                        })) : this.complete()
                    }, s.prototype.progress = function (t, e, i) {
                        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && n && n.log("progress: " + i, t, e)
                    }, s.prototype.complete = function () {
                        var t = this.hasAnyBroken ? "fail" : "done";
                        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                            var e = this.hasAnyBroken ? "reject" : "resolve";
                            this.jqDeferred[e](this)
                        }
                    }, l.prototype = Object.create(e.prototype), l.prototype.check = function () {
                        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
                    }, l.prototype.getIsImageComplete = function () {
                        return this.img.complete && this.img.naturalWidth
                    }, l.prototype.confirm = function (t, e) {
                        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
                    }, l.prototype.handleEvent = function (t) {
                        var e = "on" + t.type;
                        this[e] && this[e](t)
                    }, l.prototype.onload = function () {
                        this.confirm(!0, "onload"), this.unbindEvents()
                    }, l.prototype.onerror = function () {
                        this.confirm(!1, "onerror"), this.unbindEvents()
                    }, l.prototype.unbindEvents = function () {
                        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                    }, c.prototype = Object.create(l.prototype), c.prototype.check = function () {
                        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
                    }, c.prototype.unbindEvents = function () {
                        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                    }, c.prototype.confirm = function (t, e) {
                        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
                    }, s.makeJQueryPlugin = function (e) {
                        (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function (t, e) {
                            return new s(this, t, e).jqDeferred.promise(i(this))
                        })
                    }, s.makeJQueryPlugin(), s
                }(o, t)
            }.apply(e, n)) || (t.exports = r)
        }("undefined" != typeof window ? window : this)
    }, function (t, e) {
        function i(t, e, i, n) {
            var r, o = null == (r = n) || "number" == typeof r || "boolean" == typeof r ? n : i(n), s = e.get(o);
            return void 0 === s && (s = t.call(this, n), e.set(o, s)), s
        }

        function n(t, e, i) {
            var n = Array.prototype.slice.call(arguments, 3), r = i(n), o = e.get(r);
            return void 0 === o && (o = t.apply(this, n), e.set(r, o)), o
        }

        function r(t, e, i, n, r) {
            return i.bind(e, t, n, r)
        }

        function o(t, e) {
            return r(t, this, 1 === t.length ? i : n, e.cache.create(), e.serializer)
        }

        function s() {
            return JSON.stringify(arguments)
        }

        function a() {
            this.cache = Object.create(null)
        }

        a.prototype.has = function (t) {
            return t in this.cache
        }, a.prototype.get = function (t) {
            return this.cache[t]
        }, a.prototype.set = function (t, e) {
            this.cache[t] = e
        };
        var l = {
            create: function () {
                return new a
            }
        };
        t.exports = function (t, e) {
            var i = e && e.cache ? e.cache : l, n = e && e.serializer ? e.serializer : s;
            return (e && e.strategy ? e.strategy : o)(t, {cache: i, serializer: n})
        }, t.exports.strategies = {
            variadic: function (t, e) {
                return r(t, this, n, e.cache.create(), e.serializer)
            }, monadic: function (t, e) {
                return r(t, this, i, e.cache.create(), e.serializer)
            }
        }
    }, function (t, e, i) {
        var n, r;
        "undefined" != typeof window && window, void 0 === (r = "function" == typeof (n = function () {
            "use strict";

            function t() {
            }

            var e = t.prototype;
            return e.on = function (t, e) {
                if (t && e) {
                    var i = this._events = this._events || {}, n = i[t] = i[t] || [];
                    return -1 == n.indexOf(e) && n.push(e), this
                }
            }, e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = this._onceEvents = this._onceEvents || {};
                    return (i[t] = i[t] || {})[e] = !0, this
                }
            }, e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = i.indexOf(e);
                    return -1 != n && i.splice(n, 1), this
                }
            }, e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    i = i.slice(0), e = e || [];
                    for (var n = this._onceEvents && this._onceEvents[t], r = 0; r < i.length; r++) {
                        var o = i[r];
                        n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e)
                    }
                    return this
                }
            }, e.allOff = function () {
                delete this._events, delete this._onceEvents
            }, t
        }) ? n.call(e, i, e, t) : n) || (t.exports = r)
    }, function (t, e, i) {
        "use strict";
        i.r(e);
        var n = "IDLE", r = "FILTERING", o = "SORTING", s = "SHUFFLING", a = {
                SAME_SIZE: "sameSize",
                SAME_HEIGHT: "sameHeight",
                SAME_WIDTH: "sameWidth",
                PACKED: "packed",
                HORIZONTAL: "horizontal",
                VERTICAL: "vertical"
            },
            l = /(^linear$)|(^ease-in-out$)|(^ease-in$)|(^ease-out$)|(^ease$)|(^step-start$)|(^step-end$)|(^steps\(\d\s*,\s*(end|start)\))$|(^cubic-bezier\((\d*\.*\d+)\s*,\s*(\d*\.*\d+)\s*,\s*(\d*\.*\d+)\s*,\s*(\d*\.*\d+)\))$/,
            c = function (t, e, i, n, r) {
                if (void 0 !== e) {
                    var o = new Error('Filterizr: expected type of option "' + t + '" to be "' + i + '", but its type is: "' + typeof e + '"'),
                        s = !1, a = !1, l = i.includes("array");
                    if ((typeof e).match(i) ? s = !0 : !s && l && (a = Array.isArray(e)), !s && !l) throw o;
                    if (!s && l && !a) throw o;
                    var c = function (t) {
                        return t ? " For further help read here: " + t : ""
                    };
                    if (Array.isArray(n)) {
                        var u = !1;
                        if (n.forEach((function (t) {
                            t === e && (u = !0)
                        })), !u) throw new Error('Filterizr: allowed values for option "' + t + '" are: ' + n.map((function (t) {
                            return '"' + t + '"'
                        })).join(", ") + '. Value received: "' + e + '".' + c(r))
                    } else if ("string" == typeof e && n instanceof RegExp && !e.match(n)) throw new Error('Filterizr: invalid value "' + e + '" for option "' + t + '" received.' + c(r))
                }
            }, u = function (t, e, i) {
                var n;
                return function () {
                    var r = this, o = arguments;
                    clearTimeout(n), n = window.setTimeout((function () {
                        n = null, i || t.apply(r, o)
                    }), e), i && !n && t.apply(r, o)
                }
            }, h = function (t, e) {
                return t.length === e.length && t.reduce((function (t, i, n) {
                    var r = i.getSortAttribute("index"), o = e[n].getSortAttribute("index");
                    return t && r === o
                }), !0)
            };

        function d(t) {
            return t && "object" == typeof t && !Array.isArray(t)
        }

        function f(t) {
            for (var e, i, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            if (!n.length) return t;
            var o = n.shift();
            if (d(t) && d(o)) for (var s in o) d(o[s]) ? (t[s] || Object.assign(t, ((e = {})[s] = {}, e)), f(t[s], o[s])) : Object.assign(t, ((i = {})[s] = o[s], i));
            return f.apply(void 0, [t].concat(n))
        }

        var p = function () {
        };

        function g(t, e) {
            Object.entries(e).forEach((function (e) {
                var i = e[0], n = e[1];
                t.style[i] = n
            }))
        }

        var m = function (t) {
            for (var e = t.slice(0), i = []; 0 !== e.length;) {
                var n = Math.floor(e.length * Math.random());
                i.push(e[n]), e.splice(n, 1)
            }
            return i
        }, v = function () {
            function t(t) {
                this.receiver = t, this.eventDictionary = {}
            }

            return t.prototype.on = function (t, e) {
                var i = this.receiver, n = i instanceof NodeList;
                !!this.eventDictionary[t] && delete this.eventDictionary[t], n && i.length ? (this.eventDictionary[t] = e, Array.from(i).forEach((function (i) {
                    i.addEventListener(t, e)
                }))) : !n && i && (this.eventDictionary[t] = e, i.addEventListener(t, e))
            }, t.prototype.off = function (t) {
                var e = this.receiver, i = this.eventDictionary[t], n = e instanceof NodeList;
                n && e.length ? Array.from(e).forEach((function (e) {
                    e.removeEventListener(t, i)
                })) : !n && e && e.removeEventListener(t, i), delete this.eventDictionary[t]
            }, t.prototype.destroy = function () {
                var t = this, e = this.receiver, i = e instanceof NodeList;
                i && e.length ? Array.from(e).forEach((function (e) {
                    return t.removeAllEvents(e)
                })) : !i && e && this.removeAllEvents(e)
            }, t.prototype.removeAllEvents = function (t) {
                var e = this;
                Object.keys(this.eventDictionary).forEach((function (i) {
                    t.removeEventListener(i, e.eventDictionary[i]), delete e.eventDictionary[i]
                }))
            }, t
        }(), y = {
            animationDuration: .5,
            callbacks: {
                onInit: p,
                onFilteringStart: p,
                onFilteringEnd: p,
                onShufflingStart: p,
                onShufflingEnd: p,
                onSortingStart: p,
                onSortingEnd: p
            },
            controlsSelector: "",
            delay: 0,
            delayMode: "progressive",
            easing: "ease-out",
            filter: "all",
            filterOutCss: {opacity: 0, transform: "scale(0.5)"},
            filterInCss: {opacity: 1, transform: "scale(1)"},
            gridItemsSelector: ".filtr-item",
            gutterPixels: 0,
            layout: a.SAME_SIZE,
            multifilterLogicalOperator: "or",
            searchTerm: "",
            setupControls: !0,
            spinner: {
                enabled: !1,
                fillColor: "#2184D0",
                styles: {height: "75px", margin: "0 auto", width: "75px", "z-index": 2}
            }
        }, _ = function () {
            function t(t) {
                this.filter = t
            }

            return t.prototype.get = function () {
                return this.filter
            }, t.prototype.set = function (t) {
                this.filter = t
            }, t.prototype.toggle = function (t) {
                this.filter = this.toggleFilter(this.filter, t)
            }, t.prototype.toggleFilter = function (t, e) {
                if ("all" === t) return e;
                if (Array.isArray(t)) {
                    if (t.includes(e)) {
                        var i = t.filter((function (t) {
                            return t !== e
                        }));
                        return 1 === i.length ? i[0] : i
                    }
                    return t.concat([e])
                }
                return t === e ? "all" : [t, e]
            }, t
        }(), b = function () {
            return (b = Object.assign || function (t) {
                for (var e, i = 1, n = arguments.length; i < n; i++) for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        }, w = function () {
            function t(t) {
                var e = f({}, y, this.validate(t));
                this.options = this.convertToFilterizrOptions(e)
            }

            return Object.defineProperty(t.prototype, "isSpinnerEnabled", {
                get: function () {
                    return this.options.spinner.enabled
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "areControlsEnabled", {
                get: function () {
                    return this.options.setupControls
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "controlsSelector", {
                get: function () {
                    return this.options.controlsSelector
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "filter", {
                get: function () {
                    return this.options.filter.get()
                }, set: function (t) {
                    this.options.filter.set(t)
                }, enumerable: !0, configurable: !0
            }), t.prototype.toggleFilter = function (t) {
                this.options.filter.toggle(t)
            }, Object.defineProperty(t.prototype, "searchTerm", {
                get: function () {
                    return this.options.searchTerm
                }, set: function (t) {
                    this.options.searchTerm = t
                }, enumerable: !0, configurable: !0
            }), t.prototype.get = function () {
                return this.options
            }, t.prototype.getRaw = function () {
                return this.convertToOptions(this.options)
            }, t.prototype.set = function (t) {
                var e = f({}, this.convertToOptions(this.options), this.validate(t));
                this.options = this.convertToFilterizrOptions(e)
            }, t.prototype.convertToFilterizrOptions = function (t) {
                return b({}, t, {filter: new _(t.filter)})
            }, t.prototype.convertToOptions = function (t) {
                return b({}, t, {filter: t.filter.get()})
            }, t.prototype.validate = function (t) {
                return c("animationDuration", t.animationDuration, "number"), c("callbacks", t.callbacks, "object"), c("controlsSelector", t.controlsSelector, "string"), c("delay", t.delay, "number"), c("easing", t.easing, "string", l, "https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp"), c("delayMode", t.delayMode, "string", ["progressive", "alternate"]), c("filter", t.filter, "string|number|array"), c("filterOutCss", t.filterOutCss, "object"), c("filterInCss", t.filterOutCss, "object"), c("gridItemsSelector", t.gridItemsSelector, "string"), c("gutterPixels", t.gutterPixels, "number"), c("layout", t.layout, "string", Object.values(a)), c("multifilterLogicalOperator", t.multifilterLogicalOperator, "string", ["and", "or"]), c("searchTerm", t.searchTerm, "string"), c("setupControls", t.setupControls, "boolean"), t
            }, t
        }(), x = function () {
            function t(t, e) {
                void 0 === e && (e = ""), this.filterizr = t, this.selector = e, this.filterControls = new v(document.querySelectorAll(e + "[data-filter]")), this.multiFilterControls = new v(document.querySelectorAll(e + "[data-multifilter]")), this.shuffleControls = new v(document.querySelectorAll(e + "[data-shuffle]")), this.searchControls = new v(document.querySelectorAll(e + "[data-search]")), this.sortAscControls = new v(document.querySelectorAll(e + "[data-sortAsc]")), this.sortDescControls = new v(document.querySelectorAll(e + "[data-sortDesc]")), this.initialize()
            }

            return t.prototype.destroy = function () {
                this.filterControls.destroy(), this.multiFilterControls.destroy(), this.shuffleControls.destroy(), this.searchControls.destroy(), this.sortAscControls.destroy(), this.sortDescControls.destroy()
            }, t.prototype.initialize = function () {
                var t = this.filterizr, e = this.selector;
                this.filterControls.on("click", (function (e) {
                    var i = e.currentTarget.getAttribute("data-filter");
                    t.filter(i)
                })), this.multiFilterControls.on("click", (function (e) {
                    var i = e.target.getAttribute("data-multifilter");
                    t.toggleFilter(i)
                })), this.shuffleControls.on("click", t.shuffle.bind(t)), this.searchControls.on("keyup", u((function (e) {
                    var i = e.target.value;
                    t.search(i)
                }), 250, !1)), this.sortAscControls.on("click", (function () {
                    var i = document.querySelector(e + "[data-sortOrder]").value;
                    t.sort(i, "asc")
                })), this.sortDescControls.on("click", (function () {
                    var i = document.querySelector(e + "[data-sortOrder]").value;
                    t.sort(i, "desc")
                }))
            }, t
        }(), k = function () {
            function t(t, e) {
                this.node = t, this.options = e, this.eventReceiver = new v(this.node)
            }

            return Object.defineProperty(t.prototype, "dimensions", {
                get: function () {
                    return {width: this.node.clientWidth, height: this.node.clientHeight}
                }, enumerable: !0, configurable: !0
            }), t.prototype.destroy = function () {
                this.styles.destroy()
            }, t.prototype.trigger = function (t) {
                var e = new Event(t);
                this.node.dispatchEvent(e)
            }, t
        }();

        function C(t, e) {
            var i = e.get(), n = i.delay;
            return "progressive" === i.delayMode ? n * t : t % 2 == 0 ? n : 0
        }

        var S, T = function (t, e, i, n) {
            return new (i || (i = Promise))((function (r, o) {
                function s(t) {
                    try {
                        l(n.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function a(t) {
                    try {
                        l(n.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function l(t) {
                    t.done ? r(t.value) : new i((function (e) {
                        e(t.value)
                    })).then(s, a)
                }

                l((n = n.apply(t, e || [])).next())
            }))
        }, M = function (t, e) {
            var i, n, r, o, s = {
                label: 0, sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                }, trys: [], ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                return this
            }), o;

            function a(o) {
                return function (a) {
                    return function (o) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                            switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {value: o[1], done: !1};
                                case 5:
                                    s.label++, n = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = e.call(t, s)
                        } catch (t) {
                            o = [6, t], n = 0
                        } finally {
                            i = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {value: o[0] ? o[1] : void 0, done: !0}
                    }([o, a])
                }
            }
        }, D = function () {
            function t() {
            }

            return t.animate = function (e, i) {
                return T(this, void 0, void 0, (function () {
                    return M(this, (function (n) {
                        switch (n.label) {
                            case 0:
                                return [4, t.process({node: e, targetStyles: i, eventReceiver: new v(e)})];
                            case 1:
                                return n.sent(), [2]
                        }
                    }))
                }))
            }, t.process = function (t) {
                return T(this, void 0, void 0, (function () {
                    return M(this, (function (e) {
                        return [2, new Promise((function (e) {
                            t.eventReceiver.on("transitionend", (function () {
                                t.eventReceiver.destroy(), e()
                            })), setTimeout((function () {
                                g(t.node, t.targetStyles)
                            }), 10)
                        }))]
                    }))
                }))
            }, t
        }().animate, O = function () {
            function t(t, e) {
                this.node = t, this.options = e
            }

            return t.prototype.destroy = function () {
                this.node.removeAttribute("style")
            }, t.prototype.animate = function (t) {
                return function (t, e, i, n) {
                    return new (i || (i = Promise))((function (r, o) {
                        function s(t) {
                            try {
                                l(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                l(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function l(t) {
                            t.done ? r(t.value) : new i((function (e) {
                                e(t.value)
                            })).then(s, a)
                        }

                        l((n = n.apply(t, e || [])).next())
                    }))
                }(this, void 0, void 0, (function () {
                    return function (t, e) {
                        var i, n, r, o, s = {
                            label: 0, sent: function () {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            }, trys: [], ops: []
                        };
                        return o = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                            return this
                        }), o;

                        function a(o) {
                            return function (a) {
                                return function (o) {
                                    if (i) throw new TypeError("Generator is already executing.");
                                    for (; s;) try {
                                        if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                        switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                            case 0:
                                            case 1:
                                                r = o;
                                                break;
                                            case 4:
                                                return s.label++, {value: o[1], done: !1};
                                            case 5:
                                                s.label++, n = o[1], o = [0];
                                                continue;
                                            case 7:
                                                o = s.ops.pop(), s.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                    s.label = o[1];
                                                    break
                                                }
                                                if (6 === o[0] && s.label < r[1]) {
                                                    s.label = r[1], r = o;
                                                    break
                                                }
                                                if (r && s.label < r[2]) {
                                                    s.label = r[2], s.ops.push(o);
                                                    break
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue
                                        }
                                        o = e.call(t, s)
                                    } catch (t) {
                                        o = [6, t], n = 0
                                    } finally {
                                        i = r = 0
                                    }
                                    if (5 & o[0]) throw o[1];
                                    return {value: o[0] ? o[1] : void 0, done: !0}
                                }([o, a])
                            }
                        }
                    }(this, (function (e) {
                        return D(this.node, t), [2]
                    }))
                }))
            }, t.prototype.set = function (t) {
                g(this.node, t)
            }, t.prototype.remove = function (t) {
                this.node.style.removeProperty(t)
            }, t
        }(), E = (S = function (t, e) {
            return (S = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
        }, function (t, e) {
            function i() {
                this.constructor = t
            }

            S(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }), P = i(0), A = function (t) {
            function e(e, i, n) {
                var r = t.call(this, e, n) || this;
                return r._index = i, r
            }

            return E(e, t), e.prototype.initialize = function () {
                var t;
                this.set((t = this.options, Object.assign({}, t.get().filterOutCss, {
                    "-webkit-backface-visibility": "hidden",
                    perspective: "1000px",
                    "-webkit-perspective": "1000px",
                    "-webkit-transform-style": "preserve-3d",
                    position: "absolute"
                })))
            }, e.prototype.setFilteredStyles = function (t, e) {
                this.set(function (t, e) {
                    return Object.assign({}, e, {transform: (e.transform || "") + " translate3d(" + t.left + "px, " + t.top + "px, 0)"})
                }(t, e))
            }, e.prototype.updateTransitionStyle = function () {
                var t, e, i;
                this.set((t = this._index, {transition: "all " + (i = (e = this.options).get()).animationDuration + "s " + i.easing + " " + C(t, e) + "ms, width 1ms"}))
            }, e.prototype.updateWidth = function () {
                var t = this.options.get().gutterPixels, e = this.node.parentElement.clientWidth,
                    i = this.node.clientWidth, n = i - t * (1 / Math.floor(e / i) + 1) + "px";
                this.set({width: n})
            }, e.prototype.enableTransitions = function () {
                return function (t, e, i, n) {
                    return new (i || (i = Promise))((function (r, o) {
                        function s(t) {
                            try {
                                l(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                l(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function l(t) {
                            t.done ? r(t.value) : new i((function (e) {
                                e(t.value)
                            })).then(s, a)
                        }

                        l((n = n.apply(t, e || [])).next())
                    }))
                }(this, void 0, void 0, (function () {
                    var t = this;
                    return function (t, e) {
                        var i, n, r, o, s = {
                            label: 0, sent: function () {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            }, trys: [], ops: []
                        };
                        return o = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                            return this
                        }), o;

                        function a(o) {
                            return function (a) {
                                return function (o) {
                                    if (i) throw new TypeError("Generator is already executing.");
                                    for (; s;) try {
                                        if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                        switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                            case 0:
                                            case 1:
                                                r = o;
                                                break;
                                            case 4:
                                                return s.label++, {value: o[1], done: !1};
                                            case 5:
                                                s.label++, n = o[1], o = [0];
                                                continue;
                                            case 7:
                                                o = s.ops.pop(), s.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                    s.label = o[1];
                                                    break
                                                }
                                                if (6 === o[0] && s.label < r[1]) {
                                                    s.label = r[1], r = o;
                                                    break
                                                }
                                                if (r && s.label < r[2]) {
                                                    s.label = r[2], s.ops.push(o);
                                                    break
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue
                                        }
                                        o = e.call(t, s)
                                    } catch (t) {
                                        o = [6, t], n = 0
                                    } finally {
                                        i = r = 0
                                    }
                                    if (5 & o[0]) throw o[1];
                                    return {value: o[0] ? o[1] : void 0, done: !0}
                                }([o, a])
                            }
                        }
                    }(this, (function (e) {
                        return [2, new Promise((function (e) {
                            t.node.querySelectorAll("img").length ? P(t.node, (function () {
                                setTimeout((function () {
                                    t.updateTransitionStyle(), e()
                                }), 10)
                            })) : setTimeout((function () {
                                t.updateTransitionStyle(), e()
                            }), 10)
                        }))]
                    }))
                }))
            }, e.prototype.disableTransitions = function () {
                this.remove("transition")
            }, e.prototype.setZIndex = function (t) {
                this.set({"z-index": t})
            }, e.prototype.removeZIndex = function () {
                this.remove("z-index")
            }, e.prototype.removeWidth = function () {
                this.remove("width")
            }, e.prototype.setHidden = function () {
                this.set({display: "none"})
            }, e.prototype.setVisible = function () {
                this.remove("display")
            }, e
        }(O), I = function () {
            var t = function (e, i) {
                return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(e, i)
            };
            return function (e, i) {
                function n() {
                    this.constructor = e
                }

                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(), j = function () {
            return (j = Object.assign || function (t) {
                for (var e, i = 1, n = arguments.length; i < n; i++) for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        }, N = function (t) {
            function e(e, i, n) {
                var r = t.call(this, e, n) || this;
                return r.filteredOut = !1, r.lastPosition = {left: 0, top: 0}, r.sortData = j({}, function (t) {
                    for (var e = {category: "", sort: ""}, i = 0, n = t.attributes, r = n.length; i < r; i++) {
                        var o = n[i], s = o.nodeName, a = o.nodeValue;
                        s.includes("data") && (e[s.slice(5, s.length)] = a)
                    }
                    return delete e.category, delete e.sort, e
                }(e), {
                    index: i,
                    sortData: e.getAttribute("data-sort")
                }), r.styledNode = new A(e, i, n), r.styles.initialize(), r.bindEvents(), r
            }

            return I(e, t), Object.defineProperty(e.prototype, "styles", {
                get: function () {
                    return this.styledNode
                }, enumerable: !0, configurable: !0
            }), e.prototype.destroy = function () {
                t.prototype.destroy.call(this), this.unbindEvents()
            }, e.prototype.filterIn = function (t) {
                var e = this.options.get().filterInCss;
                this.styles.setFilteredStyles(t, e), this.lastPosition = t, this.filteredOut = !1
            }, e.prototype.filterOut = function () {
                var t = this.options.get().filterOutCss;
                this.styles.setFilteredStyles(this.lastPosition, t), this.filteredOut = !0
            }, e.prototype.contentsMatchSearch = function (t) {
                return this.node.textContent.toLowerCase().includes(t)
            }, e.prototype.getCategories = function () {
                return this.node.getAttribute("data-category").split(/\s*,\s*/g)
            }, e.prototype.getSortAttribute = function (t) {
                return this.sortData[t]
            }, e.prototype.bindEvents = function () {
                var t = this;
                this.eventReceiver.on("transitionend", (function () {
                    t.filteredOut ? (t.node.classList.add("filteredOut"), t.styles.setZIndex(-1e3), t.styles.setHidden()) : (t.node.classList.remove("filteredOut"), t.styles.removeZIndex())
                }))
            }, e.prototype.unbindEvents = function () {
                this.eventReceiver.off("transitionend")
            }, e
        }(k), F = function () {
            var t = function (e, i) {
                return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(e, i)
            };
            return function (e, i) {
                function n() {
                    this.constructor = e
                }

                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(), L = function (t, e, i, n) {
            return new (i || (i = Promise))((function (r, o) {
                function s(t) {
                    try {
                        l(n.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function a(t) {
                    try {
                        l(n.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function l(t) {
                    t.done ? r(t.value) : new i((function (e) {
                        e(t.value)
                    })).then(s, a)
                }

                l((n = n.apply(t, e || [])).next())
            }))
        }, R = function (t, e) {
            var i, n, r, o, s = {
                label: 0, sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                }, trys: [], ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                return this
            }), o;

            function a(o) {
                return function (a) {
                    return function (o) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                            switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {value: o[1], done: !1};
                                case 5:
                                    s.label++, n = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = e.call(t, s)
                        } catch (t) {
                            o = [6, t], n = 0
                        } finally {
                            i = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {value: o[0] ? o[1] : void 0, done: !0}
                    }([o, a])
                }
            }
        }, $ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._filterItems = e.map((function (t) {
                    return t.styles
                })), i
            }

            return F(e, t), e.prototype.resetDisplay = function () {
                this._filterItems.forEach((function (t) {
                    return t.setVisible()
                }))
            }, e.prototype.removeWidth = function () {
                this._filterItems.forEach((function (t) {
                    return t.removeWidth()
                }))
            }, e.prototype.updateWidth = function () {
                this._filterItems.forEach((function (t) {
                    return t.updateWidth()
                }))
            }, e.prototype.updateTransitionStyle = function () {
                this._filterItems.forEach((function (t) {
                    return t.updateTransitionStyle()
                }))
            }, e.prototype.disableTransitions = function () {
                this._filterItems.forEach((function (t) {
                    return t.disableTransitions()
                }))
            }, e.prototype.enableTransitions = function () {
                return L(this, void 0, void 0, (function () {
                    var t = this;
                    return R(this, (function (e) {
                        return this._filterItems.forEach((function (e) {
                            return L(t, void 0, void 0, (function () {
                                return R(this, (function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, e.enableTransitions()];
                                        case 1:
                                            return [2, t.sent()]
                                    }
                                }))
                            }))
                        })), [2]
                    }))
                }))
            }, e.prototype.updateWidthWithTransitionsDisabled = function () {
                this.disableTransitions(), this.removeWidth(), this.updateWidth(), this.enableTransitions()
            }, e
        }((function () {
        })), z = function () {
            function t(t, e) {
                this.filterItems = t, this.styledFilterItems = new $(t), this.options = e
            }

            return Object.defineProperty(t.prototype, "styles", {
                get: function () {
                    return this.styledFilterItems
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "length", {
                get: function () {
                    return this.filterItems.length
                }, enumerable: !0, configurable: !0
            }), t.prototype.getItem = function (t) {
                return this.filterItems[t]
            }, t.prototype.destroy = function () {
                this.filterItems.forEach((function (t) {
                    return t.destroy()
                }))
            }, t.prototype.push = function (t) {
                return this.filterItems.push(t)
            }, t.prototype.remove = function (t) {
                this.filterItems = this.filterItems.filter((function (e) {
                    return e.node !== t
                }))
            }, t.prototype.getFiltered = function (t) {
                var e = this, i = this.options.searchTerm, n = this.search(this.filterItems, i);
                return "all" === t ? n : n.filter((function (i) {
                    return e.shouldBeFiltered(i.getCategories(), t)
                }))
            }, t.prototype.getFilteredOut = function (t) {
                var e = this, i = this.options.searchTerm;
                return this.filterItems.filter((function (n) {
                    var r = n.getCategories(), o = e.shouldBeFiltered(r, t), s = n.contentsMatchSearch(i);
                    return !o || !s
                }))
            }, t.prototype.sort = function (t, e) {
                void 0 === t && (t = "index"), void 0 === e && (e = "asc");
                var i, n = (i = function (e) {
                    return e.getSortAttribute(t)
                }, this.filterItems.slice(0).sort(function (t) {
                    return function (e, i) {
                        var n = t(e), r = t(i);
                        return n < r ? -1 : n > r ? 1 : 0
                    }
                }(i))), r = "asc" === e ? n : n.reverse();
                this.filterItems = r
            }, t.prototype.shuffle = function () {
                var t = this, e = this.getFiltered(this.options.filter);
                if (e.length > 1) {
                    var i = this.getFiltered(this.options.filter).map((function (e) {
                        return t.filterItems.indexOf(e)
                    })).slice(), n = void 0;
                    do {
                        n = m(e)
                    } while (h(e, n));
                    (n = m(e)).forEach((function (e, n) {
                        var r, o = i[n];
                        t.filterItems = Object.assign([], t.filterItems, ((r = {})[o] = e, r))
                    }))
                }
            }, t.prototype.search = function (t, e) {
                return e ? t.filter((function (t) {
                    return t.contentsMatchSearch(e)
                })) : t
            }, t.prototype.shouldBeFiltered = function (t, e) {
                var i, n, r = this.options.getRaw().multifilterLogicalOperator;
                return Array.isArray(e) ? "or" === r ? !!(i = t, n = e, Array.prototype.filter.call(i, (function (t) {
                    return n.includes(t)
                }))).length : function (t, e) {
                    return t.reduce((function (t, i) {
                        return t && e.includes(i)
                    }), !0)
                }(e, t) : t.includes(e)
            }, t
        }(), W = function () {
            return (W = Object.assign || function (t) {
                for (var e, i = 1, n = arguments.length; i < n; i++) for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        }, H = function (t) {
            return {padding: t.get().gutterPixels + "px"}
        }, B = function () {
            var t = function (e, i) {
                return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(e, i)
            };
            return function (e, i) {
                function n() {
                    this.constructor = e
                }

                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(), V = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return B(e, t), e.prototype.initialize = function () {
                var t;
                this.set((t = this.options, W({}, H(t), {
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap"
                })))
            }, e.prototype.updatePaddings = function () {
                this.set(H(this.options))
            }, e.prototype.setHeight = function (t) {
                this.set({height: t + "px"})
            }, e
        }(O), Y = function () {
            var t = function (e, i) {
                return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(e, i)
            };
            return function (e, i) {
                function n() {
                    this.constructor = e
                }

                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(), q = function (t) {
            function e(e, i) {
                var r = this;
                if (!e) throw new Error("Filterizr: could not initialize container, check the selector or node you passed to the constructor exists.");
                return (r = t.call(this, e, i) || this).styledNode = new V(e, i), r._filterizrState = n, r.styles.initialize(), r.filterItems = r.makeFilterItems(r.options), r.bindEvents(), r
            }

            return Y(e, t), Object.defineProperty(e.prototype, "styles", {
                get: function () {
                    return this.styledNode
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "filterizrState", {
                set: function (t) {
                    this._filterizrState = t
                }, enumerable: !0, configurable: !0
            }), e.prototype.destroy = function () {
                t.prototype.destroy.call(this), this.unbindEvents(), this.filterItems.destroy()
            }, e.prototype.makeFilterItems = function (t) {
                var e = Array.from(this.node.querySelectorAll(t.get().gridItemsSelector)).map((function (e, i) {
                    return new N(e, i, t)
                })), i = new z(e, t);
                if (!i.length) throw new Error("Filterizr: cannot initialize empty container. Make sure the gridItemsSelector option corresponds to the selector of your grid's items");
                return i.styles.updateWidth(), i
            }, e.prototype.insertItem = function (t) {
                var e = t.cloneNode(!0);
                e.removeAttribute("style"), this.node.appendChild(e);
                var i = new N(e, this.filterItems.length, this.options);
                i.styles.enableTransitions(), i.styles.updateWidth(), this.filterItems.push(i)
            }, e.prototype.removeItem = function (t) {
                this.filterItems.remove(t), this.node.removeChild(t)
            }, e.prototype.setHeight = function (t) {
                this.dimensions.height = t, this.styles.setHeight(t)
            }, e.prototype.bindEvents = function () {
                var t = this, e = this.options.get(), i = e.animationDuration, a = e.callbacks, l = e.delay,
                    c = e.delayMode, h = e.gridItemsSelector, d = "progressive" === c ? l * this.filterItems.length : l;
                this.eventReceiver.on("transitionend", u((function (e) {
                    if (Array.from(e.target.classList).reduce((function (t, e) {
                        return t || h.includes(e)
                    }), !1)) {
                        switch (t._filterizrState) {
                            case r:
                                t.trigger("filteringEnd");
                                break;
                            case o:
                                t.trigger("sortingEnd");
                                break;
                            case s:
                                t.trigger("shufflingEnd")
                        }
                        t.filterizrState = n
                    }
                }), 100 * i + d, !1)), this.eventReceiver.on("init", a.onInit), this.eventReceiver.on("filteringStart", a.onFilteringStart), this.eventReceiver.on("filteringEnd", a.onFilteringEnd), this.eventReceiver.on("shufflingStart", a.onShufflingStart), this.eventReceiver.on("shufflingEnd", a.onShufflingEnd), this.eventReceiver.on("sortingStart", a.onSortingStart), this.eventReceiver.on("sortingEnd", a.onSortingEnd)
            }, e.prototype.unbindEvents = function () {
                this.eventReceiver.off("transitionend"), this.eventReceiver.off("init"), this.eventReceiver.off("filteringStart"), this.eventReceiver.off("filteringEnd"), this.eventReceiver.off("shufflingStart"), this.eventReceiver.off("shufflingEnd"), this.eventReceiver.off("sortingStart"), this.eventReceiver.off("sortingEnd")
            }, e
        }(k), U = function () {
            var t = function (e, i) {
                return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(e, i)
            };
            return function (e, i) {
                function n() {
                    this.constructor = e
                }

                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(), G = function () {
            return (G = Object.assign || function (t) {
                for (var e, i = 1, n = arguments.length; i < n; i++) for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        }, Q = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return U(e, t), e.prototype.initialize = function () {
                var t = this.options.get().spinner.styles;
                this.set(G({}, t, {opacity: 1, transition: "all ease-out 500ms"}))
            }, e.prototype.fadeOut = function () {
                return function (t, e, i, n) {
                    return new (i || (i = Promise))((function (r, o) {
                        function s(t) {
                            try {
                                l(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                l(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function l(t) {
                            t.done ? r(t.value) : new i((function (e) {
                                e(t.value)
                            })).then(s, a)
                        }

                        l((n = n.apply(t, e || [])).next())
                    }))
                }(this, void 0, void 0, (function () {
                    return function (t, e) {
                        var i, n, r, o, s = {
                            label: 0, sent: function () {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            }, trys: [], ops: []
                        };
                        return o = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                            return this
                        }), o;

                        function a(o) {
                            return function (a) {
                                return function (o) {
                                    if (i) throw new TypeError("Generator is already executing.");
                                    for (; s;) try {
                                        if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                        switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                            case 0:
                                            case 1:
                                                r = o;
                                                break;
                                            case 4:
                                                return s.label++, {value: o[1], done: !1};
                                            case 5:
                                                s.label++, n = o[1], o = [0];
                                                continue;
                                            case 7:
                                                o = s.ops.pop(), s.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                    s.label = o[1];
                                                    break
                                                }
                                                if (6 === o[0] && s.label < r[1]) {
                                                    s.label = r[1], r = o;
                                                    break
                                                }
                                                if (r && s.label < r[2]) {
                                                    s.label = r[2], s.ops.push(o);
                                                    break
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue
                                        }
                                        o = e.call(t, s)
                                    } catch (t) {
                                        o = [6, t], n = 0
                                    } finally {
                                        i = r = 0
                                    }
                                    if (5 & o[0]) throw o[1];
                                    return {value: o[0] ? o[1] : void 0, done: !0}
                                }([o, a])
                            }
                        }
                    }(this, (function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.animate({opacity: 0})];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, e
        }(O), X = function () {
            function t(t, e) {
                var i, n;
                this.filterContainer = t, this.node = (i = '<?xml version="1.0" encoding="UTF-8"?><svg stroke="' + e.get().spinner.fillColor + '" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>', (n = document.createElement("img")).classList.add("Filterizr__spinner"), n.src = "data:image/svg+xml;base64," + window.btoa(i), n.alt = "Spinner", n), this.styledNode = new Q(this.node, e), this.initialize()
            }

            return Object.defineProperty(t.prototype, "styles", {
                get: function () {
                    return this.styledNode
                }, enumerable: !0, configurable: !0
            }), t.prototype.destroy = function () {
                return function (t, e, i, n) {
                    return new (i || (i = Promise))((function (r, o) {
                        function s(t) {
                            try {
                                l(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                l(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function l(t) {
                            t.done ? r(t.value) : new i((function (e) {
                                e(t.value)
                            })).then(s, a)
                        }

                        l((n = n.apply(t, e || [])).next())
                    }))
                }(this, void 0, void 0, (function () {
                    return function (t, e) {
                        var i, n, r, o, s = {
                            label: 0, sent: function () {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            }, trys: [], ops: []
                        };
                        return o = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                            return this
                        }), o;

                        function a(o) {
                            return function (a) {
                                return function (o) {
                                    if (i) throw new TypeError("Generator is already executing.");
                                    for (; s;) try {
                                        if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                        switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                            case 0:
                                            case 1:
                                                r = o;
                                                break;
                                            case 4:
                                                return s.label++, {value: o[1], done: !1};
                                            case 5:
                                                s.label++, n = o[1], o = [0];
                                                continue;
                                            case 7:
                                                o = s.ops.pop(), s.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                    s.label = o[1];
                                                    break
                                                }
                                                if (6 === o[0] && s.label < r[1]) {
                                                    s.label = r[1], r = o;
                                                    break
                                                }
                                                if (r && s.label < r[2]) {
                                                    s.label = r[2], s.ops.push(o);
                                                    break
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue
                                        }
                                        o = e.call(t, s)
                                    } catch (t) {
                                        o = [6, t], n = 0
                                    } finally {
                                        i = r = 0
                                    }
                                    if (5 & o[0]) throw o[1];
                                    return {value: o[0] ? o[1] : void 0, done: !0}
                                }([o, a])
                            }
                        }
                    }(this, (function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.styles.fadeOut()];
                            case 1:
                                return t.sent(), this.filterContainer.node.removeChild(this.node), [2]
                        }
                    }))
                }))
            }, t.prototype.initialize = function () {
                this.styles.initialize(), this.filterContainer.node.appendChild(this.node)
            }, t
        }(), Z = i(1), K = i.n(Z);

        function J(t, e) {
            return t.reduce((function (t, i) {
                return t + i.width + e
            }), 0)
        }

        function tt(t, e) {
            return t.length ? t.reduce((function (t, i) {
                return t + i.height + e
            }), 0) : 0
        }

        var et = function () {
            return (et = Object.assign || function (t) {
                for (var e, i = 1, n = arguments.length; i < n; i++) for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        }, it = function () {
            function t(t) {
                this.init(t)
            }

            return t.prototype.init = function (t) {
                this.root = {x: 0, y: 0, w: t}
            }, t.prototype.fit = function (t) {
                var e, i, n, r = t.length, o = r > 0 ? t[0].h : 0;
                for (this.root.h = o, e = 0; e < r; e++) n = t[e], (i = this.findNode(this.root, n.w, n.h)) ? n.fit = this.splitNode(i, n.w, n.h) : n.fit = this.growDown(n.w, n.h)
            }, t.prototype.findNode = function (t, e, i) {
                return t.used ? this.findNode(t.right, e, i) || this.findNode(t.down, e, i) : e <= t.w && i <= t.h ? t : null
            }, t.prototype.splitNode = function (t, e, i) {
                return t.used = !0, t.down = {x: t.x, y: t.y + i, w: t.w, h: t.h - i}, t.right = {
                    x: t.x + e,
                    y: t.y,
                    w: t.w - e,
                    h: i
                }, t
            }, t.prototype.growDown = function (t, e) {
                var i;
                return this.root = {
                    used: !0,
                    x: 0,
                    y: 0,
                    w: this.root.w,
                    h: this.root.h + e,
                    down: {x: 0, y: this.root.h, w: this.root.w, h: e},
                    right: this.root
                }, (i = this.findNode(this.root, t, e)) ? this.splitNode(i, t, e) : null
            }, t
        }(), nt = K()((function (t, e, i) {
            var n = i.gutterPixels, r = i.layout;
            if (!e.length) return {containerHeight: 0, itemsPositions: []};
            switch (r) {
                case a.HORIZONTAL:
                    return function (t, e) {
                        return {
                            containerHeight: Math.max.apply(Math, t.map((function (t) {
                                return t.height
                            }))) + 2 * e, itemsPositions: t.map((function (i, n) {
                                return {left: J(t.slice(0, n), e), top: 0}
                            }))
                        }
                    }(e, n);
                case a.VERTICAL:
                    return function (t, e) {
                        return {
                            containerHeight: tt(t, e) + e, itemsPositions: t.map((function (i, n) {
                                return {left: 0, top: tt(t.slice(0, n), e)}
                            }))
                        }
                    }(e, n);
                case a.SAME_HEIGHT:
                    return function (t, e, i) {
                        var n = e.map((function (t, n) {
                            var r = t.width;
                            return e.slice(0, n).reduce((function (t, e) {
                                return t + e.width + 2 * i
                            }), 0) + r + i
                        })), r = n.reduce((function (e, i, n) {
                            var r, o = Object.keys(e).length;
                            return et({}, e, i > t * o && ((r = {})[o] = n, r))
                        }), {0: 0}), o = e.map((function (o, s) {
                            var a = o.height, l = Math.floor(n[s] / t);
                            return {
                                left: e.slice(r[l], s).reduce((function (t, e) {
                                    return t + e.width + i
                                }), 0), top: (a + i) * l
                            }
                        }));
                        return {containerHeight: Object.keys(r).length * (e[0].height + i) + i, itemsPositions: o}
                    }(t, e, n);
                case a.SAME_WIDTH:
                    return function (t, e, i) {
                        var n = Math.floor(t / (e[0].width + i)), r = e.map((function (t, r) {
                            var o = t.width, s = Math.floor(r / n);
                            return {
                                left: (r - n * s) * (o + i), top: e.slice(0, r).filter((function (t, e) {
                                    return (r - e) % n == 0
                                })).reduce((function (t, e) {
                                    return t + e.height + i
                                }), 0)
                            }
                        })), o = e.reduce((function (t, e, r) {
                            var o = e.height, s = Math.floor(r / n);
                            return t[r - n * s] += o + i, t
                        }), Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0));
                        return {containerHeight: Math.max.apply(Math, o) + i, itemsPositions: r}
                    }(t, e, n);
                case a.PACKED:
                    return function (t, e, i) {
                        var n = new it(t), r = e.map((function (t) {
                            var e = t.width, n = t.height;
                            return {w: e + i, h: n + i}
                        }));
                        n.fit(r);
                        var o = r.map((function (t) {
                            var e = t.fit;
                            return {left: e.x, top: e.y}
                        }));
                        return {containerHeight: n.root.h + i, itemsPositions: o}
                    }(t, e, n);
                case a.SAME_SIZE:
                default:
                    return function (t, e, i) {
                        var n = Math.floor(t / (e[0].width + i)), r = e.map((function (t, e) {
                            var r = t.width, o = t.height, s = Math.floor(e / n);
                            return {left: (e - n * s) * (r + i), top: s * (o + i)}
                        }));
                        return {containerHeight: Math.ceil(e.length / n) * (e[0].height + i) + i, itemsPositions: r}
                    }(t, e, n)
            }
        }));

        function rt(t) {
            if (!t) throw new Error("Filterizr as a jQuery plugin, requires jQuery to work. If you would prefer to use the vanilla JS version, please use the correct bundle file.");
            t.fn.filterizr = function () {
                var e = "." + t.trim(this.get(0).className).replace(/\s+/g, "."), i = arguments;
                if (!this._fltr && 0 === i.length || 1 === i.length && "object" == typeof i[0]) {
                    var n = i.length > 0 ? i[0] : y;
                    this._fltr = new lt(e, n)
                } else if (i.length >= 1 && "string" == typeof i[0]) {
                    var r = i[0], o = Array.prototype.slice.call(i, 1), s = this._fltr;
                    switch (r) {
                        case"filter":
                            return s.filter.apply(s, o), this;
                        case"insertItem":
                            return s.insertItem.apply(s, o), this;
                        case"removeItem":
                            return s.removeItem.apply(s, o), this;
                        case"toggleFilter":
                            return s.toggleFilter.apply(s, o), this;
                        case"sort":
                            return s.sort.apply(s, o), this;
                        case"shuffle":
                            return s.shuffle.apply(s, o), this;
                        case"search":
                            return s.search.apply(s, o), this;
                        case"setOptions":
                            return s.setOptions.apply(s, o), this;
                        case"destroy":
                            return s.destroy.apply(s, o), delete this._fltr, this;
                        default:
                            throw new Error("Filterizr: " + r + " is not part of the Filterizr API. Please refer to the docs for more information.")
                    }
                }
                return this
            }
        }

        var ot = function (t, e, i, n) {
            return new (i || (i = Promise))((function (r, o) {
                function s(t) {
                    try {
                        l(n.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function a(t) {
                    try {
                        l(n.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function l(t) {
                    t.done ? r(t.value) : new i((function (e) {
                        e(t.value)
                    })).then(s, a)
                }

                l((n = n.apply(t, e || [])).next())
            }))
        }, st = function (t, e) {
            var i, n, r, o, s = {
                label: 0, sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                }, trys: [], ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                return this
            }), o;

            function a(o) {
                return function (a) {
                    return function (o) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                            switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {value: o[1], done: !1};
                                case 5:
                                    s.label++, n = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = e.call(t, s)
                        } catch (t) {
                            o = [6, t], n = 0
                        } finally {
                            i = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {value: o[0] ? o[1] : void 0, done: !0}
                    }([o, a])
                }
            }
        }, at = i(0), lt = function () {
            function t(t, e) {
                void 0 === t && (t = ".filtr-container"), void 0 === e && (e = {}), this.options = new w(e);
                var i = this.options, n = i.areControlsEnabled, r = i.controlsSelector, o = i.isSpinnerEnabled;
                this.windowEventReceiver = new v(window), this.filterContainer = new q(function (t) {
                    return "string" == typeof t ? document.querySelector(t) : t
                }(t), this.options), this.imagesHaveLoaded = !this.filterContainer.node.querySelectorAll("img").length, n && (this.filterControls = new x(this, r)), o && (this.spinner = new X(this.filterContainer, this.options)), this.initialize()
            }

            return Object.defineProperty(t.prototype, "filterItems", {
                get: function () {
                    return this.filterContainer.filterItems
                }, enumerable: !0, configurable: !0
            }), t.prototype.filter = function (t) {
                var e = this.filterContainer;
                e.trigger("filteringStart"), e.filterizrState = r, t = Array.isArray(t) ? t.map((function (t) {
                    return t.toString()
                })) : t.toString(), this.options.filter = t, this.render()
            }, t.prototype.destroy = function () {
                var t = this.windowEventReceiver, e = this.filterControls;
                this.filterContainer.destroy(), t.destroy(), this.options.areControlsEnabled && e && e.destroy()
            }, t.prototype.insertItem = function (t) {
                return ot(this, void 0, void 0, (function () {
                    return st(this, (function (e) {
                        switch (e.label) {
                            case 0:
                                return this.filterContainer.insertItem(t), [4, this.waitForImagesToLoad()];
                            case 1:
                                return e.sent(), this.render(), [2]
                        }
                    }))
                }))
            }, t.prototype.removeItem = function (t) {
                this.filterContainer.removeItem(t), this.render()
            }, t.prototype.sort = function (t, e) {
                void 0 === t && (t = "index"), void 0 === e && (e = "asc");
                var i = this.filterContainer, n = this.filterItems;
                i.trigger("sortingStart"), i.filterizrState = o, n.sort(t, e), this.render()
            }, t.prototype.search = function (t) {
                void 0 === t && (t = this.options.get().searchTerm), this.options.searchTerm = t.toLowerCase(), this.render()
            }, t.prototype.shuffle = function () {
                var t = this.filterContainer, e = this.filterItems;
                t.trigger("shufflingStart"), t.filterizrState = s, e.shuffle(), this.render()
            }, t.prototype.setOptions = function (t) {
                var e = this.filterContainer, i = this.filterItems,
                    n = "animationDuration" in t || "delay" in t || "delayMode" in t;
                (t.callbacks || n) && e.unbindEvents(), this.options.set(t), (t.easing || n) && i.styles.updateTransitionStyle(), (t.callbacks || n) && e.bindEvents(), "searchTerm" in t && this.search(t.searchTerm), ("filter" in t || "multifilterLomultifilterLogicalOperator" in t) && this.filter(this.options.filter), "gutterPixels" in t && (this.filterContainer.styles.updatePaddings(), this.filterItems.styles.updateWidthWithTransitionsDisabled(), this.render())
            }, t.prototype.toggleFilter = function (t) {
                this.options.toggleFilter(t), this.filter(this.options.filter)
            }, t.prototype.render = function () {
                var t = this.filterContainer, e = this.filterItems, i = this.options, n = e.getFiltered(i.filter);
                e.styles.resetDisplay(), e.getFilteredOut(i.filter).forEach((function (t) {
                    t.filterOut()
                }));
                var r = nt(t.dimensions.width, n.map((function (t) {
                    return t.dimensions
                })), this.options.get()), o = r.containerHeight, s = r.itemsPositions;
                t.setHeight(o), n.forEach((function (t, e) {
                    t.filterIn(s[e])
                }))
            }, t.prototype.initialize = function () {
                return ot(this, void 0, void 0, (function () {
                    var t, e, i, n;
                    return st(this, (function (r) {
                        switch (r.label) {
                            case 0:
                                return e = (t = this).filterContainer, i = t.filterItems, n = t.spinner, this.bindEvents(), [4, this.waitForImagesToLoad()];
                            case 1:
                                return r.sent(), this.options.isSpinnerEnabled ? [4, n.destroy()] : [3, 3];
                            case 2:
                                r.sent(), r.label = 3;
                            case 3:
                                return this.render(), [4, i.styles.enableTransitions()];
                            case 4:
                                return r.sent(), e.trigger("init"), [2]
                        }
                    }))
                }))
            }, t.prototype.bindEvents = function () {
                var t = this, e = this.filterItems;
                this.windowEventReceiver.on("resize", u((function () {
                    e.styles.updateWidthWithTransitionsDisabled(), t.render()
                }), 50, !1))
            }, t.prototype.waitForImagesToLoad = function () {
                return ot(this, void 0, void 0, (function () {
                    var t, e, i, n = this;
                    return st(this, (function (r) {
                        return e = (t = this).imagesHaveLoaded, i = t.filterContainer, e ? [2, Promise.resolve()] : [2, new Promise((function (t) {
                            at(i.node, (function () {
                                n.imagesHaveLoaded = !0, t()
                            }))
                        }))]
                    }))
                }))
            }, t.FilterContainer = q, t.FilterItem = N, t.defaultOptions = y, t.installAsJQueryPlugin = rt, t
        }();
        i.d(e, "default", (function () {
            return lt
        }))
    }]).default
}, function (t, e, i) {
    /*!
  * Bootstrap alert.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
    t.exports = function (t, e) {
        "use strict";

        function i(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
        var n = "alert", r = t.fn[n], o = function () {
            function n(t) {
                this._element = t
            }

            var r, o, s, a = n.prototype;
            return a.close = function (t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, a.dispose = function () {
                t.removeData(this._element, "bs.alert"), this._element = null
            }, a._getRootElement = function (i) {
                var n = e.getSelectorFromElement(i), r = !1;
                return n && (r = document.querySelector(n)), r || (r = t(i).closest(".alert")[0]), r
            }, a._triggerCloseEvent = function (e) {
                var i = t.Event("close.bs.alert");
                return t(e).trigger(i), i
            }, a._removeElement = function (i) {
                var n = this;
                if (t(i).removeClass("show"), t(i).hasClass("fade")) {
                    var r = e.getTransitionDurationFromElement(i);
                    t(i).one(e.TRANSITION_END, (function (t) {
                        return n._destroyElement(i, t)
                    })).emulateTransitionEnd(r)
                } else this._destroyElement(i)
            }, a._destroyElement = function (e) {
                t(e).detach().trigger("closed.bs.alert").remove()
            }, n._jQueryInterface = function (e) {
                return this.each((function () {
                    var i = t(this), r = i.data("bs.alert");
                    r || (r = new n(this), i.data("bs.alert", r)), "close" === e && r[e](this)
                }))
            }, n._handleDismiss = function (t) {
                return function (e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, r = n, s = [{
                key: "VERSION", get: function () {
                    return "4.5.0"
                }
            }], (o = null) && i(r.prototype, o), s && i(r, s), n
        }();
        return t(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', o._handleDismiss(new o)), t.fn[n] = o._jQueryInterface, t.fn[n].Constructor = o, t.fn[n].noConflict = function () {
            return t.fn[n] = r, o._jQueryInterface
        }, o
    }(i(0), i(1))
}, function (t, e, i) {
    /*!
  * Bootstrap button.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
    t.exports = function (t) {
        "use strict";

        function e(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
        var i = "button", n = t.fn[i], r = function () {
            function i(t) {
                this._element = t
            }

            var n, r, o, s = i.prototype;
            return s.toggle = function () {
                var e = !0, i = !0, n = t(this._element).closest('[data-toggle="buttons"]')[0];
                if (n) {
                    var r = this._element.querySelector('input:not([type="hidden"])');
                    if (r) {
                        if ("radio" === r.type) if (r.checked && this._element.classList.contains("active")) e = !1; else {
                            var o = n.querySelector(".active");
                            o && t(o).removeClass("active")
                        }
                        e && ("checkbox" !== r.type && "radio" !== r.type || (r.checked = !this._element.classList.contains("active")), t(r).trigger("change")), r.focus(), i = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (i && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && t(this._element).toggleClass("active"))
            }, s.dispose = function () {
                t.removeData(this._element, "bs.button"), this._element = null
            }, i._jQueryInterface = function (e) {
                return this.each((function () {
                    var n = t(this).data("bs.button");
                    n || (n = new i(this), t(this).data("bs.button", n)), "toggle" === e && n[e]()
                }))
            }, n = i, o = [{
                key: "VERSION", get: function () {
                    return "4.5.0"
                }
            }], (r = null) && e(n.prototype, r), o && e(n, o), i
        }();
        return t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
            var i = e.target, n = i;
            if (t(i).hasClass("btn") || (i = t(i).closest(".btn")[0]), !i || i.hasAttribute("disabled") || i.classList.contains("disabled")) e.preventDefault(); else {
                var o = i.querySelector('input:not([type="hidden"])');
                if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void e.preventDefault();
                "LABEL" === n.tagName && o && "checkbox" === o.type && e.preventDefault(), r._jQueryInterface.call(t(i), "toggle")
            }
        })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
            var i = t(e.target).closest(".btn")[0];
            t(i).toggleClass("focus", /^focus(in)?$/.test(e.type))
        })), t(window).on("load.bs.button.data-api", (function () {
            for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, i = t.length; e < i; e++) {
                var n = t[e], r = n.querySelector('input:not([type="hidden"])');
                r.checked || r.hasAttribute("checked") ? n.classList.add("active") : n.classList.remove("active")
            }
            for (var o = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < s; o++) {
                var a = t[o];
                "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
            }
        })), t.fn[i] = r._jQueryInterface, t.fn[i].Constructor = r, t.fn[i].noConflict = function () {
            return t.fn[i] = n, r._jQueryInterface
        }, r
    }(i(0))
}, function (t, e, i) {
    /*!
  * Bootstrap carousel.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
    t.exports = function (t, e) {
        "use strict";

        function i(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function n(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function r(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(i), !0).forEach((function (e) {
                    n(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
        var s = "carousel", a = "bs.carousel", l = "." + a, c = t.fn[s],
            u = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, h = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            }, d = {TOUCH: "touch", PEN: "pen"}, f = function () {
                function n(t, e) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                }

                var r, c, f, p = n.prototype;
                return p.next = function () {
                    this._isSliding || this._slide("next")
                }, p.nextWhenVisible = function () {
                    !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                }, p.prev = function () {
                    this._isSliding || this._slide("prev")
                }, p.pause = function (t) {
                    t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (e.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, p.cycle = function (t) {
                    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, p.to = function (e) {
                    var i = this;
                    this._activeElement = this._element.querySelector(".active.carousel-item");
                    var n = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one("slid.bs.carousel", (function () {
                        return i.to(e)
                    })); else {
                        if (n === e) return this.pause(), void this.cycle();
                        var r = e > n ? "next" : "prev";
                        this._slide(r, this._items[e])
                    }
                }, p.dispose = function () {
                    t(this._element).off(l), t.removeData(this._element, a), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, p._getConfig = function (t) {
                    return t = o(o({}, u), t), e.typeCheckConfig(s, t, h), t
                }, p._handleSwipe = function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
                    }
                }, p._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard && t(this._element).on("keydown.bs.carousel", (function (t) {
                        return e._keydown(t)
                    })), "hover" === this._config.pause && t(this._element).on("mouseenter.bs.carousel", (function (t) {
                        return e.pause(t)
                    })).on("mouseleave.bs.carousel", (function (t) {
                        return e.cycle(t)
                    })), this._config.touch && this._addTouchEventListeners()
                }, p._addTouchEventListeners = function () {
                    var e = this;
                    if (this._touchSupported) {
                        var i = function (t) {
                            e._pointerEvent && d[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        }, n = function (t) {
                            e._pointerEvent && d[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function (t) {
                                return e.cycle(t)
                            }), 500 + e._config.interval))
                        };
                        t(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function (t) {
                            return t.preventDefault()
                        })), this._pointerEvent ? (t(this._element).on("pointerdown.bs.carousel", (function (t) {
                            return i(t)
                        })), t(this._element).on("pointerup.bs.carousel", (function (t) {
                            return n(t)
                        })), this._element.classList.add("pointer-event")) : (t(this._element).on("touchstart.bs.carousel", (function (t) {
                            return i(t)
                        })), t(this._element).on("touchmove.bs.carousel", (function (t) {
                            return function (t) {
                                t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                            }(t)
                        })), t(this._element).on("touchend.bs.carousel", (function (t) {
                            return n(t)
                        })))
                    }
                }, p._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                        case 37:
                            t.preventDefault(), this.prev();
                            break;
                        case 39:
                            t.preventDefault(), this.next()
                    }
                }, p._getItemIndex = function (t) {
                    return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t)
                }, p._getItemByDirection = function (t, e) {
                    var i = "next" === t, n = "prev" === t, r = this._getItemIndex(e), o = this._items.length - 1;
                    if ((n && 0 === r || i && r === o) && !this._config.wrap) return e;
                    var s = (r + ("prev" === t ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                }, p._triggerSlideEvent = function (e, i) {
                    var n = this._getItemIndex(e),
                        r = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                        o = t.Event("slide.bs.carousel", {relatedTarget: e, direction: i, from: r, to: n});
                    return t(this._element).trigger(o), o
                }, p._setActiveIndicatorElement = function (e) {
                    if (this._indicatorsElement) {
                        var i = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                        t(i).removeClass("active");
                        var n = this._indicatorsElement.children[this._getItemIndex(e)];
                        n && t(n).addClass("active")
                    }
                }, p._slide = function (i, n) {
                    var r, o, s, a = this, l = this._element.querySelector(".active.carousel-item"),
                        c = this._getItemIndex(l), u = n || l && this._getItemByDirection(i, l), h = this._getItemIndex(u),
                        d = Boolean(this._interval);
                    if ("next" === i ? (r = "carousel-item-left", o = "carousel-item-next", s = "left") : (r = "carousel-item-right", o = "carousel-item-prev", s = "right"), u && t(u).hasClass("active")) this._isSliding = !1; else if (!this._triggerSlideEvent(u, s).isDefaultPrevented() && l && u) {
                        this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(u);
                        var f = t.Event("slid.bs.carousel", {relatedTarget: u, direction: s, from: c, to: h});
                        if (t(this._element).hasClass("slide")) {
                            t(u).addClass(o), e.reflow(u), t(l).addClass(r), t(u).addClass(r);
                            var p = parseInt(u.getAttribute("data-interval"), 10);
                            p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                            var g = e.getTransitionDurationFromElement(l);
                            t(l).one(e.TRANSITION_END, (function () {
                                t(u).removeClass(r + " " + o).addClass("active"), t(l).removeClass("active " + o + " " + r), a._isSliding = !1, setTimeout((function () {
                                    return t(a._element).trigger(f)
                                }), 0)
                            })).emulateTransitionEnd(g)
                        } else t(l).removeClass("active"), t(u).addClass("active"), this._isSliding = !1, t(this._element).trigger(f);
                        d && this.cycle()
                    }
                }, n._jQueryInterface = function (e) {
                    return this.each((function () {
                        var i = t(this).data(a), r = o(o({}, u), t(this).data());
                        "object" == typeof e && (r = o(o({}, r), e));
                        var s = "string" == typeof e ? e : r.slide;
                        if (i || (i = new n(this, r), t(this).data(a, i)), "number" == typeof e) i.to(e); else if ("string" == typeof s) {
                            if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                            i[s]()
                        } else r.interval && r.ride && (i.pause(), i.cycle())
                    }))
                }, n._dataApiClickHandler = function (i) {
                    var r = e.getSelectorFromElement(this);
                    if (r) {
                        var s = t(r)[0];
                        if (s && t(s).hasClass("carousel")) {
                            var l = o(o({}, t(s).data()), t(this).data()), c = this.getAttribute("data-slide-to");
                            c && (l.interval = !1), n._jQueryInterface.call(t(s), l), c && t(s).data(a).to(c), i.preventDefault()
                        }
                    }
                }, r = n, f = [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return u
                    }
                }], (c = null) && i(r.prototype, c), f && i(r, f), n
            }();
        return t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", f._dataApiClickHandler), t(window).on("load.bs.carousel.data-api", (function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), i = 0, n = e.length; i < n; i++) {
                var r = t(e[i]);
                f._jQueryInterface.call(r, r.data())
            }
        })), t.fn[s] = f._jQueryInterface, t.fn[s].Constructor = f, t.fn[s].noConflict = function () {
            return t.fn[s] = c, f._jQueryInterface
        }, f
    }(i(0), i(1))
}, function (t, e, i) {
    /*!
  * Bootstrap collapse.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
    t.exports = function (t, e) {
        "use strict";

        function i(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function n(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function r(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(i), !0).forEach((function (e) {
                    n(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
        var s = "collapse", a = "bs.collapse", l = t.fn[s], c = {toggle: !0, parent: ""},
            u = {toggle: "boolean", parent: "(string|element)"}, h = function () {
                function n(t, i) {
                    this._isTransitioning = !1, this._element = t, this._config = this._getConfig(i), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                    for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), r = 0, o = n.length; r < o; r++) {
                        var s = n[r], a = e.getSelectorFromElement(s),
                            l = [].slice.call(document.querySelectorAll(a)).filter((function (e) {
                                return e === t
                            }));
                        null !== a && l.length > 0 && (this._selector = a, this._triggerArray.push(s))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }

                var r, l, h, d = n.prototype;
                return d.toggle = function () {
                    t(this._element).hasClass("show") ? this.hide() : this.show()
                }, d.show = function () {
                    var i, r, o = this;
                    if (!(this._isTransitioning || t(this._element).hasClass("show") || (this._parent && 0 === (i = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function (t) {
                        return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains("collapse")
                    }))).length && (i = null), i && (r = t(i).not(this._selector).data(a)) && r._isTransitioning))) {
                        var s = t.Event("show.bs.collapse");
                        if (t(this._element).trigger(s), !s.isDefaultPrevented()) {
                            i && (n._jQueryInterface.call(t(i).not(this._selector), "hide"), r || t(i).data(a, null));
                            var l = this._getDimension();
                            t(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[l] = 0, this._triggerArray.length && t(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                            var c = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                                u = e.getTransitionDurationFromElement(this._element);
                            t(this._element).one(e.TRANSITION_END, (function () {
                                t(o._element).removeClass("collapsing").addClass("collapse show"), o._element.style[l] = "", o.setTransitioning(!1), t(o._element).trigger("shown.bs.collapse")
                            })).emulateTransitionEnd(u), this._element.style[l] = this._element[c] + "px"
                        }
                    }
                }, d.hide = function () {
                    var i = this;
                    if (!this._isTransitioning && t(this._element).hasClass("show")) {
                        var n = t.Event("hide.bs.collapse");
                        if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var r = this._getDimension();
                            this._element.style[r] = this._element.getBoundingClientRect()[r] + "px", e.reflow(this._element), t(this._element).addClass("collapsing").removeClass("collapse show");
                            var o = this._triggerArray.length;
                            if (o > 0) for (var s = 0; s < o; s++) {
                                var a = this._triggerArray[s], l = e.getSelectorFromElement(a);
                                null !== l && (t([].slice.call(document.querySelectorAll(l))).hasClass("show") || t(a).addClass("collapsed").attr("aria-expanded", !1))
                            }
                            this.setTransitioning(!0), this._element.style[r] = "";
                            var c = e.getTransitionDurationFromElement(this._element);
                            t(this._element).one(e.TRANSITION_END, (function () {
                                i.setTransitioning(!1), t(i._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                            })).emulateTransitionEnd(c)
                        }
                    }
                }, d.setTransitioning = function (t) {
                    this._isTransitioning = t
                }, d.dispose = function () {
                    t.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, d._getConfig = function (t) {
                    return (t = o(o({}, c), t)).toggle = Boolean(t.toggle), e.typeCheckConfig(s, t, u), t
                }, d._getDimension = function () {
                    return t(this._element).hasClass("width") ? "width" : "height"
                }, d._getParent = function () {
                    var i, r = this;
                    e.isElement(this._config.parent) ? (i = this._config.parent, void 0 !== this._config.parent.jquery && (i = this._config.parent[0])) : i = document.querySelector(this._config.parent);
                    var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        s = [].slice.call(i.querySelectorAll(o));
                    return t(s).each((function (t, e) {
                        r._addAriaAndCollapsedClass(n._getTargetFromElement(e), [e])
                    })), i
                }, d._addAriaAndCollapsedClass = function (e, i) {
                    var n = t(e).hasClass("show");
                    i.length && t(i).toggleClass("collapsed", !n).attr("aria-expanded", n)
                }, n._getTargetFromElement = function (t) {
                    var i = e.getSelectorFromElement(t);
                    return i ? document.querySelector(i) : null
                }, n._jQueryInterface = function (e) {
                    return this.each((function () {
                        var i = t(this), r = i.data(a), s = o(o(o({}, c), i.data()), "object" == typeof e && e ? e : {});
                        if (!r && s.toggle && "string" == typeof e && /show|hide/.test(e) && (s.toggle = !1), r || (r = new n(this, s), i.data(a, r)), "string" == typeof e) {
                            if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
                            r[e]()
                        }
                    }))
                }, r = n, h = [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return c
                    }
                }], (l = null) && i(r.prototype, l), h && i(r, h), n
            }();
        return t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function (i) {
            "A" === i.currentTarget.tagName && i.preventDefault();
            var n = t(this), r = e.getSelectorFromElement(this), o = [].slice.call(document.querySelectorAll(r));
            t(o).each((function () {
                var e = t(this), i = e.data(a) ? "toggle" : n.data();
                h._jQueryInterface.call(e, i)
            }))
        })), t.fn[s] = h._jQueryInterface, t.fn[s].Constructor = h, t.fn[s].noConflict = function () {
            return t.fn[s] = l, h._jQueryInterface
        }, h
    }(i(0), i(1))
}, function (t, e, i) {
    /*!
  * Bootstrap dropdown.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
    t.exports = function (t, e, i) {
        "use strict";

        function n(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function r(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function o(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(i), !0).forEach((function (e) {
                    r(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
        var a = "dropdown", l = "bs.dropdown", c = "." + l, u = t.fn[a], h = new RegExp("38|40|27"), d = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        }, f = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        }, p = function () {
            function r(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var o, u, p, g = r.prototype;
            return g.toggle = function () {
                if (!this._element.disabled && !t(this._element).hasClass("disabled")) {
                    var e = t(this._menu).hasClass("show");
                    r._clearMenus(), e || this.show(!0)
                }
            }, g.show = function (n) {
                if (void 0 === n && (n = !1), !(this._element.disabled || t(this._element).hasClass("disabled") || t(this._menu).hasClass("show"))) {
                    var o = {relatedTarget: this._element}, s = t.Event("show.bs.dropdown", o),
                        a = r._getParentFromElement(this._element);
                    if (t(a).trigger(s), !s.isDefaultPrevented()) {
                        if (!this._inNavbar && n) {
                            if (void 0 === e) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var l = this._element;
                            "parent" === this._config.reference ? l = a : i.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(a).addClass("position-static"), this._popper = new e(l, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === t(a).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass("show"), t(a).toggleClass("show").trigger(t.Event("shown.bs.dropdown", o))
                    }
                }
            }, g.hide = function () {
                if (!this._element.disabled && !t(this._element).hasClass("disabled") && t(this._menu).hasClass("show")) {
                    var e = {relatedTarget: this._element}, i = t.Event("hide.bs.dropdown", e),
                        n = r._getParentFromElement(this._element);
                    t(n).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass("show"), t(n).toggleClass("show").trigger(t.Event("hidden.bs.dropdown", e)))
                }
            }, g.dispose = function () {
                t.removeData(this._element, l), t(this._element).off(c), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, g.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, g._addEventListeners = function () {
                var e = this;
                t(this._element).on("click.bs.dropdown", (function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                }))
            }, g._getConfig = function (e) {
                return e = s(s(s({}, this.constructor.Default), t(this._element).data()), e), i.typeCheckConfig(a, e, this.constructor.DefaultType), e
            }, g._getMenuElement = function () {
                if (!this._menu) {
                    var t = r._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(".dropdown-menu"))
                }
                return this._menu
            }, g._getPlacement = function () {
                var e = t(this._element.parentNode), i = "bottom-start";
                return e.hasClass("dropup") ? i = t(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? i = "right-start" : e.hasClass("dropleft") ? i = "left-start" : t(this._menu).hasClass("dropdown-menu-right") && (i = "bottom-end"), i
            }, g._detectNavbar = function () {
                return t(this._element).closest(".navbar").length > 0
            }, g._getOffset = function () {
                var t = this, e = {};
                return "function" == typeof this._config.offset ? e.fn = function (e) {
                    return e.offsets = s(s({}, e.offsets), t._config.offset(e.offsets, t._element) || {}), e
                } : e.offset = this._config.offset, e
            }, g._getPopperConfig = function () {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {enabled: !1}), s(s({}, t), this._config.popperConfig)
            }, r._jQueryInterface = function (e) {
                return this.each((function () {
                    var i = t(this).data(l);
                    if (i || (i = new r(this, "object" == typeof e ? e : null), t(this).data(l, i)), "string" == typeof e) {
                        if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                }))
            }, r._clearMenus = function (e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), n = 0, o = i.length; n < o; n++) {
                    var s = r._getParentFromElement(i[n]), a = t(i[n]).data(l), c = {relatedTarget: i[n]};
                    if (e && "click" === e.type && (c.clickEvent = e), a) {
                        var u = a._menu;
                        if (t(s).hasClass("show") && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(s, e.target))) {
                            var h = t.Event("hide.bs.dropdown", c);
                            t(s).trigger(h), h.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[n].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), t(u).removeClass("show"), t(s).removeClass("show").trigger(t.Event("hidden.bs.dropdown", c)))
                        }
                    }
                }
            }, r._getParentFromElement = function (t) {
                var e, n = i.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)), e || t.parentNode
            }, r._dataApiKeydownHandler = function (e) {
                if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(".dropdown-menu").length) : !h.test(e.which)) && !this.disabled && !t(this).hasClass("disabled")) {
                    var i = r._getParentFromElement(this), n = t(i).hasClass("show");
                    if (n || 27 !== e.which) {
                        if (e.preventDefault(), e.stopPropagation(), !n || n && (27 === e.which || 32 === e.which)) return 27 === e.which && t(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void t(this).trigger("click");
                        var o = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function (e) {
                            return t(e).is(":visible")
                        }));
                        if (0 !== o.length) {
                            var s = o.indexOf(e.target);
                            38 === e.which && s > 0 && s--, 40 === e.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                        }
                    }
                }
            }, o = r, p = [{
                key: "VERSION", get: function () {
                    return "4.5.0"
                }
            }, {
                key: "Default", get: function () {
                    return d
                }
            }, {
                key: "DefaultType", get: function () {
                    return f
                }
            }], (u = null) && n(o.prototype, u), p && n(o, p), r
        }();
        return t(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', p._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", p._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", p._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function (e) {
            e.preventDefault(), e.stopPropagation(), p._jQueryInterface.call(t(this), "toggle")
        })).on("click.bs.dropdown.data-api", ".dropdown form", (function (t) {
            t.stopPropagation()
        })), t.fn[a] = p._jQueryInterface, t.fn[a].Constructor = p, t.fn[a].noConflict = function () {
            return t.fn[a] = u, p._jQueryInterface
        }, p
    }(i(0), i(2), i(1))
}, function (t, e, i) {
    /*!
  * Bootstrap modal.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
    t.exports = function (t, e) {
        "use strict";

        function i(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function n(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function r(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(i), !0).forEach((function (e) {
                    n(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
        var s = "modal", a = ".bs.modal", l = t.fn[s], c = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
            u = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"},
            h = function () {
                function n(t, e) {
                    this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                }

                var r, l, h, d = n.prototype;
                return d.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t)
                }, d.show = function (e) {
                    var i = this;
                    if (!this._isShown && !this._isTransitioning) {
                        t(this._element).hasClass("fade") && (this._isTransitioning = !0);
                        var n = t.Event("show.bs.modal", {relatedTarget: e});
                        t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function (t) {
                            return i.hide(t)
                        })), t(this._dialog).on("mousedown.dismiss.bs.modal", (function () {
                            t(i._element).one("mouseup.dismiss.bs.modal", (function (e) {
                                t(e.target).is(i._element) && (i._ignoreBackdropClick = !0)
                            }))
                        })), this._showBackdrop((function () {
                            return i._showElement(e)
                        })))
                    }
                }, d.hide = function (i) {
                    var n = this;
                    if (i && i.preventDefault(), this._isShown && !this._isTransitioning) {
                        var r = t.Event("hide.bs.modal");
                        if (t(this._element).trigger(r), this._isShown && !r.isDefaultPrevented()) {
                            this._isShown = !1;
                            var o = t(this._element).hasClass("fade");
                            if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off("focusin.bs.modal"), t(this._element).removeClass("show"), t(this._element).off("click.dismiss.bs.modal"), t(this._dialog).off("mousedown.dismiss.bs.modal"), o) {
                                var s = e.getTransitionDurationFromElement(this._element);
                                t(this._element).one(e.TRANSITION_END, (function (t) {
                                    return n._hideModal(t)
                                })).emulateTransitionEnd(s)
                            } else this._hideModal()
                        }
                    }
                }, d.dispose = function () {
                    [window, this._element, this._dialog].forEach((function (e) {
                        return t(e).off(a)
                    })), t(document).off("focusin.bs.modal"), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                }, d.handleUpdate = function () {
                    this._adjustDialog()
                }, d._getConfig = function (t) {
                    return t = o(o({}, c), t), e.typeCheckConfig(s, t, u), t
                }, d._triggerBackdropTransition = function () {
                    var i = this;
                    if ("static" === this._config.backdrop) {
                        var n = t.Event("hidePrevented.bs.modal");
                        if (t(this._element).trigger(n), n.defaultPrevented) return;
                        this._element.classList.add("modal-static");
                        var r = e.getTransitionDurationFromElement(this._element);
                        t(this._element).one(e.TRANSITION_END, (function () {
                            i._element.classList.remove("modal-static")
                        })).emulateTransitionEnd(r), this._element.focus()
                    } else this.hide()
                }, d._showElement = function (i) {
                    var n = this, r = t(this._element).hasClass("fade"),
                        o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0, r && e.reflow(this._element), t(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                    var s = t.Event("shown.bs.modal", {relatedTarget: i}), a = function () {
                        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s)
                    };
                    if (r) {
                        var l = e.getTransitionDurationFromElement(this._dialog);
                        t(this._dialog).one(e.TRANSITION_END, a).emulateTransitionEnd(l)
                    } else a()
                }, d._enforceFocus = function () {
                    var e = this;
                    t(document).off("focusin.bs.modal").on("focusin.bs.modal", (function (i) {
                        document !== i.target && e._element !== i.target && 0 === t(e._element).has(i.target).length && e._element.focus()
                    }))
                }, d._setEscapeEvent = function () {
                    var e = this;
                    this._isShown ? t(this._element).on("keydown.dismiss.bs.modal", (function (t) {
                        e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                    })) : this._isShown || t(this._element).off("keydown.dismiss.bs.modal")
                }, d._setResizeEvent = function () {
                    var e = this;
                    this._isShown ? t(window).on("resize.bs.modal", (function (t) {
                        return e.handleUpdate(t)
                    })) : t(window).off("resize.bs.modal")
                }, d._hideModal = function () {
                    var e = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function () {
                        t(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger("hidden.bs.modal")
                    }))
                }, d._removeBackdrop = function () {
                    this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                }, d._showBackdrop = function (i) {
                    var n = this, r = t(this._element).hasClass("fade") ? "fade" : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", r && this._backdrop.classList.add(r), t(this._backdrop).appendTo(document.body), t(this._element).on("click.dismiss.bs.modal", (function (t) {
                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && n._triggerBackdropTransition()
                        })), r && e.reflow(this._backdrop), t(this._backdrop).addClass("show"), !i) return;
                        if (!r) return void i();
                        var o = e.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(e.TRANSITION_END, i).emulateTransitionEnd(o)
                    } else if (!this._isShown && this._backdrop) {
                        t(this._backdrop).removeClass("show");
                        var s = function () {
                            n._removeBackdrop(), i && i()
                        };
                        if (t(this._element).hasClass("fade")) {
                            var a = e.getTransitionDurationFromElement(this._backdrop);
                            t(this._backdrop).one(e.TRANSITION_END, s).emulateTransitionEnd(a)
                        } else s()
                    } else i && i()
                }, d._adjustDialog = function () {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, d._resetAdjustments = function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, d._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, d._setScrollbar = function () {
                    var e = this;
                    if (this._isBodyOverflowing) {
                        var i = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                            n = [].slice.call(document.querySelectorAll(".sticky-top"));
                        t(i).each((function (i, n) {
                            var r = n.style.paddingRight, o = t(n).css("padding-right");
                            t(n).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                        })), t(n).each((function (i, n) {
                            var r = n.style.marginRight, o = t(n).css("margin-right");
                            t(n).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                        }));
                        var r = document.body.style.paddingRight, o = t(document.body).css("padding-right");
                        t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                    }
                    t(document.body).addClass("modal-open")
                }, d._resetScrollbar = function () {
                    var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                    t(e).each((function (e, i) {
                        var n = t(i).data("padding-right");
                        t(i).removeData("padding-right"), i.style.paddingRight = n || ""
                    }));
                    var i = [].slice.call(document.querySelectorAll(".sticky-top"));
                    t(i).each((function (e, i) {
                        var n = t(i).data("margin-right");
                        void 0 !== n && t(i).css("margin-right", n).removeData("margin-right")
                    }));
                    var n = t(document.body).data("padding-right");
                    t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
                }, d._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e
                }, n._jQueryInterface = function (e, i) {
                    return this.each((function () {
                        var r = t(this).data("bs.modal"),
                            s = o(o(o({}, c), t(this).data()), "object" == typeof e && e ? e : {});
                        if (r || (r = new n(this, s), t(this).data("bs.modal", r)), "string" == typeof e) {
                            if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
                            r[e](i)
                        } else s.show && r.show(i)
                    }))
                }, r = n, h = [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return c
                    }
                }], (l = null) && i(r.prototype, l), h && i(r, h), n
            }();
        return t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function (i) {
            var n, r = this, s = e.getSelectorFromElement(this);
            s && (n = document.querySelector(s));
            var a = t(n).data("bs.modal") ? "toggle" : o(o({}, t(n).data()), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || i.preventDefault();
            var l = t(n).one("show.bs.modal", (function (e) {
                e.isDefaultPrevented() || l.one("hidden.bs.modal", (function () {
                    t(r).is(":visible") && r.focus()
                }))
            }));
            h._jQueryInterface.call(t(n), a, this)
        })), t.fn[s] = h._jQueryInterface, t.fn[s].Constructor = h, t.fn[s].noConflict = function () {
            return t.fn[s] = l, h._jQueryInterface
        }, h
    }(i(0), i(1))
}, function (t, e, i) {
    /*!
  * Bootstrap scrollspy.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
    t.exports = function (t, e) {
        "use strict";

        function i(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function n(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function r(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(i), !0).forEach((function (e) {
                    n(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
        var s = "scrollspy", a = t.fn[s], l = {offset: 10, method: "auto", target: ""},
            c = {offset: "number", method: "string", target: "(string|element)"}, u = function () {
                function n(e, i) {
                    var n = this;
                    this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on("scroll.bs.scrollspy", (function (t) {
                        return n._process(t)
                    })), this.refresh(), this._process()
                }

                var r, a, u, h = n.prototype;
                return h.refresh = function () {
                    var i = this, n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                        r = "auto" === this._config.method ? n : this._config.method,
                        o = "position" === r ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function (i) {
                        var n, s = e.getSelectorFromElement(i);
                        if (s && (n = document.querySelector(s)), n) {
                            var a = n.getBoundingClientRect();
                            if (a.width || a.height) return [t(n)[r]().top + o, s]
                        }
                        return null
                    })).filter((function (t) {
                        return t
                    })).sort((function (t, e) {
                        return t[0] - e[0]
                    })).forEach((function (t) {
                        i._offsets.push(t[0]), i._targets.push(t[1])
                    }))
                }, h.dispose = function () {
                    t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, h._getConfig = function (i) {
                    if ("string" != typeof (i = o(o({}, l), "object" == typeof i && i ? i : {})).target && e.isElement(i.target)) {
                        var n = t(i.target).attr("id");
                        n || (n = e.getUID(s), t(i.target).attr("id", n)), i.target = "#" + n
                    }
                    return e.typeCheckConfig(s, i, c), i
                }, h._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, h._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, h._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, h._process = function () {
                    var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
                        i = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(), t >= i) {
                        var n = this._targets[this._targets.length - 1];
                        this._activeTarget !== n && this._activate(n)
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }, h._activate = function (e) {
                    this._activeTarget = e, this._clear();
                    var i = this._selector.split(",").map((function (t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    })), n = t([].slice.call(document.querySelectorAll(i.join(","))));
                    n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active")) : (n.addClass("active"), n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), t(this._scrollElement).trigger("activate.bs.scrollspy", {relatedTarget: e})
                }, h._clear = function () {
                    [].slice.call(document.querySelectorAll(this._selector)).filter((function (t) {
                        return t.classList.contains("active")
                    })).forEach((function (t) {
                        return t.classList.remove("active")
                    }))
                }, n._jQueryInterface = function (e) {
                    return this.each((function () {
                        var i = t(this).data("bs.scrollspy");
                        if (i || (i = new n(this, "object" == typeof e && e), t(this).data("bs.scrollspy", i)), "string" == typeof e) {
                            if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                            i[e]()
                        }
                    }))
                }, r = n, u = [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return l
                    }
                }], (a = null) && i(r.prototype, a), u && i(r, u), n
            }();
        return t(window).on("load.bs.scrollspy.data-api", (function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), i = e.length; i--;) {
                var n = t(e[i]);
                u._jQueryInterface.call(n, n.data())
            }
        })), t.fn[s] = u._jQueryInterface, t.fn[s].Constructor = u, t.fn[s].noConflict = function () {
            return t.fn[s] = a, u._jQueryInterface
        }, u
    }(i(0), i(1))
}, function (t, e, i) {
    /*!
  * Bootstrap tab.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
    t.exports = function (t, e) {
        "use strict";

        function i(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
        var n = t.fn.tab, r = function () {
            function n(t) {
                this._element = t
            }

            var r, o, s, a = n.prototype;
            return a.show = function () {
                var i = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass("active") || t(this._element).hasClass("disabled"))) {
                    var n, r, o = t(this._element).closest(".nav, .list-group")[0],
                        s = e.getSelectorFromElement(this._element);
                    if (o) {
                        var a = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
                        r = (r = t.makeArray(t(o).find(a)))[r.length - 1]
                    }
                    var l = t.Event("hide.bs.tab", {relatedTarget: this._element}),
                        c = t.Event("show.bs.tab", {relatedTarget: r});
                    if (r && t(r).trigger(l), t(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
                        s && (n = document.querySelector(s)), this._activate(this._element, o);
                        var u = function () {
                            var e = t.Event("hidden.bs.tab", {relatedTarget: i._element}),
                                n = t.Event("shown.bs.tab", {relatedTarget: r});
                            t(r).trigger(e), t(i._element).trigger(n)
                        };
                        n ? this._activate(n, n.parentNode, u) : u()
                    }
                }
            }, a.dispose = function () {
                t.removeData(this._element, "bs.tab"), this._element = null
            }, a._activate = function (i, n, r) {
                var o = this,
                    s = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(".active") : t(n).find("> li > .active"))[0],
                    a = r && s && t(s).hasClass("fade"), l = function () {
                        return o._transitionComplete(i, s, r)
                    };
                if (s && a) {
                    var c = e.getTransitionDurationFromElement(s);
                    t(s).removeClass("show").one(e.TRANSITION_END, l).emulateTransitionEnd(c)
                } else l()
            }, a._transitionComplete = function (i, n, r) {
                if (n) {
                    t(n).removeClass("active");
                    var o = t(n.parentNode).find("> .dropdown-menu .active")[0];
                    o && t(o).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(i).addClass("active"), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !0), e.reflow(i), i.classList.contains("fade") && i.classList.add("show"), i.parentNode && t(i.parentNode).hasClass("dropdown-menu")) {
                    var s = t(i).closest(".dropdown")[0];
                    if (s) {
                        var a = [].slice.call(s.querySelectorAll(".dropdown-toggle"));
                        t(a).addClass("active")
                    }
                    i.setAttribute("aria-expanded", !0)
                }
                r && r()
            }, n._jQueryInterface = function (e) {
                return this.each((function () {
                    var i = t(this), r = i.data("bs.tab");
                    if (r || (r = new n(this), i.data("bs.tab", r)), "string" == typeof e) {
                        if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
                        r[e]()
                    }
                }))
            }, r = n, s = [{
                key: "VERSION", get: function () {
                    return "4.5.0"
                }
            }], (o = null) && i(r.prototype, o), s && i(r, s), n
        }();
        return t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function (e) {
            e.preventDefault(), r._jQueryInterface.call(t(this), "show")
        })), t.fn.tab = r._jQueryInterface, t.fn.tab.Constructor = r, t.fn.tab.noConflict = function () {
            return t.fn.tab = n, r._jQueryInterface
        }, r
    }(i(0), i(1))
}, function (t, e, i) {
    /*!
  * Bootstrap toast.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
    t.exports = function (t, e) {
        "use strict";

        function i(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function n(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function r(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(i), !0).forEach((function (e) {
                    n(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
        var s = "toast", a = t.fn[s], l = {animation: "boolean", autohide: "boolean", delay: "number"},
            c = {animation: !0, autohide: !0, delay: 500}, u = function () {
                function n(t, e) {
                    this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
                }

                var r, a, u, h = n.prototype;
                return h.show = function () {
                    var i = this, n = t.Event("show.bs.toast");
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        this._config.animation && this._element.classList.add("fade");
                        var r = function () {
                            i._element.classList.remove("showing"), i._element.classList.add("show"), t(i._element).trigger("shown.bs.toast"), i._config.autohide && (i._timeout = setTimeout((function () {
                                i.hide()
                            }), i._config.delay))
                        };
                        if (this._element.classList.remove("hide"), e.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                            var o = e.getTransitionDurationFromElement(this._element);
                            t(this._element).one(e.TRANSITION_END, r).emulateTransitionEnd(o)
                        } else r()
                    }
                }, h.hide = function () {
                    if (this._element.classList.contains("show")) {
                        var e = t.Event("hide.bs.toast");
                        t(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                    }
                }, h.dispose = function () {
                    clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains("show") && this._element.classList.remove("show"), t(this._element).off("click.dismiss.bs.toast"), t.removeData(this._element, "bs.toast"), this._element = null, this._config = null
                }, h._getConfig = function (i) {
                    return i = o(o(o({}, c), t(this._element).data()), "object" == typeof i && i ? i : {}), e.typeCheckConfig(s, i, this.constructor.DefaultType), i
                }, h._setListeners = function () {
                    var e = this;
                    t(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function () {
                        return e.hide()
                    }))
                }, h._close = function () {
                    var i = this, n = function () {
                        i._element.classList.add("hide"), t(i._element).trigger("hidden.bs.toast")
                    };
                    if (this._element.classList.remove("show"), this._config.animation) {
                        var r = e.getTransitionDurationFromElement(this._element);
                        t(this._element).one(e.TRANSITION_END, n).emulateTransitionEnd(r)
                    } else n()
                }, n._jQueryInterface = function (e) {
                    return this.each((function () {
                        var i = t(this), r = i.data("bs.toast");
                        if (r || (r = new n(this, "object" == typeof e && e), i.data("bs.toast", r)), "string" == typeof e) {
                            if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
                            r[e](this)
                        }
                    }))
                }, r = n, u = [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return l
                    }
                }, {
                    key: "Default", get: function () {
                        return c
                    }
                }], (a = null) && i(r.prototype, a), u && i(r, u), n
            }();
        return t.fn[s] = u._jQueryInterface, t.fn[s].Constructor = u, t.fn[s].noConflict = function () {
            return t.fn[s] = a, u._jQueryInterface
        }, u
    }(i(0), i(1))
}, function (t, e, i) {
    /*!
  * Bootstrap popover.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
    t.exports = function (t, e) {
        "use strict";

        function i(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function n(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function r(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(i), !0).forEach((function (e) {
                    n(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
        var s = "popover", a = ".bs.popover", l = t.fn[s], c = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            u = o(o({}, e.Default), {}, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }), h = o(o({}, e.DefaultType), {}, {content: "(string|element|function)"}), d = {
                HIDE: "hide" + a,
                HIDDEN: "hidden" + a,
                SHOW: "show" + a,
                SHOWN: "shown" + a,
                INSERTED: "inserted" + a,
                CLICK: "click" + a,
                FOCUSIN: "focusin" + a,
                FOCUSOUT: "focusout" + a,
                MOUSEENTER: "mouseenter" + a,
                MOUSELEAVE: "mouseleave" + a
            }, f = function (e) {
                var n, r;

                function o() {
                    return e.apply(this, arguments) || this
                }

                r = e, (n = o).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r;
                var l, f, p, g = o.prototype;
                return g.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, g.addAttachmentClass = function (e) {
                    t(this.getTipElement()).addClass("bs-popover-" + e)
                }, g.getTipElement = function () {
                    return this.tip = this.tip || t(this.config.template)[0], this.tip
                }, g.setContent = function () {
                    var e = t(this.getTipElement());
                    this.setElementContent(e.find(".popover-header"), this.getTitle());
                    var i = this._getContent();
                    "function" == typeof i && (i = i.call(this.element)), this.setElementContent(e.find(".popover-body"), i), e.removeClass("fade show")
                }, g._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }, g._cleanTipClass = function () {
                    var e = t(this.getTipElement()), i = e.attr("class").match(c);
                    null !== i && i.length > 0 && e.removeClass(i.join(""))
                }, o._jQueryInterface = function (e) {
                    return this.each((function () {
                        var i = t(this).data("bs.popover"), n = "object" == typeof e ? e : null;
                        if ((i || !/dispose|hide/.test(e)) && (i || (i = new o(this, n), t(this).data("bs.popover", i)), "string" == typeof e)) {
                            if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                            i[e]()
                        }
                    }))
                }, l = o, p = [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return u
                    }
                }, {
                    key: "NAME", get: function () {
                        return s
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return "bs.popover"
                    }
                }, {
                    key: "Event", get: function () {
                        return d
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return a
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return h
                    }
                }], (f = null) && i(l.prototype, f), p && i(l, p), o
            }(e);
        return t.fn[s] = f._jQueryInterface, t.fn[s].Constructor = f, t.fn[s].noConflict = function () {
            return t.fn[s] = l, f._jQueryInterface
        }, f
    }(i(0), i(4))
}, function (t, e) {
    $(document).ready((function () {
        $(document).on("click", ".dropdown-menu", (function (t) {
            t.stopPropagation()
        })), $(window).width() < 992 && ($(".has-megasubmenu a").click((function () {
            $(this).next(".megasubmenu").toggle(), $(".dropdown").on("hide.bs.dropdown", (function () {
                $(this).find(".megasubmenu").hide()
            }))
        })), $(".dropdown-menu a").click((function () {
            $(this).next(".submenu").length && $(this).next(".submenu").toggle(), $(".dropdown").on("hide.bs.dropdown", (function () {
                $(this).find(".submenu").hide()
            }))
        }))), $("[data-trigger]").on("click", (function () {
            var t = $(this).attr("data-trigger");
            $(t).toggleClass("show"), $("body").toggleClass("offcanvas-active"), $(".screen-overlay").toggleClass("show")
        })), $(document).on("keydown", (function (t) {
            27 === t.keyCode && ($(".mobile-offcanvas").removeClass("show"), $("body").removeClass("overlay-active"))
        })), $(".btn-close, .screen-overlay").click((function () {
            $(".screen-overlay").removeClass("show"), $(".mobile-offcanvas").removeClass("show"), $("body").removeClass("offcanvas-active")
        }))
    }))
}, function (t, e) {
    var i, n, r;
    !function (t, e, i, n) {
        function r(e, i) {
            this.settings = null, this.options = t.extend({}, r.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {start: null, current: null},
                direction: null
            }, this._states = {
                current: {},
                tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
            }, t.each(["onResize", "onThrottledResize"], t.proxy((function (e, i) {
                this._handlers[i] = t.proxy(this[i], this)
            }), this)), t.each(r.Plugins, t.proxy((function (t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
            }), this)), t.each(r.Workers, t.proxy((function (e, i) {
                this._pipe.push({filter: i.filter, run: t.proxy(i.run, this)})
            }), this)), this.setup(), this.initialize()
        }

        r.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            checkVisibility: !0,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            fallbackEasing: "swing",
            slideTransition: "",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, r.Width = {Default: "default", Inner: "inner", Outer: "outer"}, r.Type = {
            Event: "event",
            State: "state"
        }, r.Plugins = {}, r.Workers = [{
            filter: ["width", "settings"], run: function () {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"], run: function (t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"], run: function () {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"], run: function (t) {
                var e = this.settings.margin || "", i = !this.settings.autoWidth, n = this.settings.rtl,
                    r = {width: "auto", "margin-left": n ? e : "", "margin-right": n ? "" : e};
                !i && this.$stage.children().css(r), t.css = r
            }
        }, {
            filter: ["width", "items", "settings"], run: function (t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, i = null,
                    n = this._items.length, r = !this.settings.autoWidth, o = [];
                for (t.items = {
                    merge: !1,
                    width: e
                }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[n] = r ? e * i : this._items[n].width();
                this._widths = o
            }
        }, {
            filter: ["items", "settings"], run: function () {
                var e = [], i = this._items, n = this.settings, r = Math.max(2 * n.items, 4),
                    o = 2 * Math.ceil(i.length / 2), s = n.loop && i.length ? n.rewind ? r : Math.max(r, o) : 0, a = "",
                    l = "";
                for (s /= 2; s > 0;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l, s -= 1;
                this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"], run: function () {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, r = 0, o = []; ++i < e;) n = o[i - 1] || 0, r = this._widths[this.relative(i)] + this.settings.margin, o.push(n + r * t);
                this._coordinates = o
            }
        }, {
            filter: ["width", "items", "settings"], run: function () {
                var t = this.settings.stagePadding, e = this._coordinates, i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
                this.$stage.css(i)
            }
        }, {
            filter: ["width", "items", "settings"], run: function (t) {
                var e = this._coordinates.length, i = !this.settings.autoWidth, n = this.$stage.children();
                if (i && t.items.merge) for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css); else i && (t.css.width = t.items.width, n.css(t.css))
            }
        }, {
            filter: ["items"], run: function () {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"], run: function (t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
            }
        }, {
            filter: ["position"], run: function () {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"], run: function () {
                var t, e, i, n, r = this.settings.rtl ? 1 : -1, o = 2 * this.settings.stagePadding,
                    s = this.coordinates(this.current()) + o, a = s + this.width() * r, l = [];
                for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * r, (this.op(t, "<=", s) && this.op(t, ">", a) || this.op(e, "<", s) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
            }
        }], r.prototype.initializeStage = function () {
            this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {class: this.settings.stageClass}).wrap(t("<div/>", {class: this.settings.stageOuterClass})), this.$element.append(this.$stage.parent()))
        }, r.prototype.initializeItems = function () {
            var e = this.$element.find(".owl-item");
            if (e.length) return this._items = e.get().map((function (e) {
                return t(e)
            })), this._mergers = this._items.map((function () {
                return 1
            })), void this.refresh();
            this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
        }, r.prototype.initialize = function () {
            var t, e, i;
            (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
            this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, r.prototype.isVisible = function () {
            return !this.settings.checkVisibility || this.$element.is(":visible")
        }, r.prototype.setup = function () {
            var e = this.viewport(), i = this.options.responsive, n = -1, r = null;
            i ? (t.each(i, (function (t) {
                t <= e && t > n && (n = Number(t))
            })), "function" == typeof (r = t.extend({}, this.options, i[n])).stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : r = t.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: r
                }
            }), this._breakpoint = n, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, r.prototype.optionsLogic = function () {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, r.prototype.prepare = function (e) {
            var i = this.trigger("prepare", {content: e});
            return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {content: i.data}), i.data
        }, r.prototype.update = function () {
            for (var e = 0, i = this._pipe.length, n = t.proxy((function (t) {
                return this[t]
            }), this._invalidated), r = {}; e < i;) (this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(r), e++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, r.prototype.width = function (t) {
            switch (t = t || r.Width.Default) {
                case r.Width.Inner:
                case r.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, r.prototype.refresh = function () {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, r.prototype.onThrottledResize = function () {
            e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, r.prototype.onResize = function () {
            return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
        }, r.prototype.registerEventHandlers = function () {
            t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", (function () {
                return !1
            }))), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
        }, r.prototype.onDragStart = function (e) {
            var n = null;
            3 !== e.which && (t.support.transform ? n = {
                x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4],
                y: n[16 === n.length ? 13 : 5]
            } : (n = this.$stage.position(), n = {
                x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
                y: n.top
            }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy((function (e) {
                var n = this.difference(this._drag.pointer, this.pointer(e));
                t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }), this)))
        }, r.prototype.onDragMove = function (t) {
            var e = null, i = null, n = null, r = this.difference(this._drag.pointer, this.pointer(t)),
                o = this.difference(this._drag.stage.start, r);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * r.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + n), i + n)), this._drag.stage.current = o, this.animate(o.x))
        }, r.prototype.onDragEnd = function (e) {
            var n = this.difference(this._drag.pointer, this.pointer(e)), r = this._drag.stage.current,
                o = n.x > 0 ^ this.settings.rtl ? "left" : "right";
            t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== n.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", (function () {
                return !1
            }))), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, r.prototype.closest = function (e, i) {
            var r = -1, o = this.width(), s = this.coordinates();
            return this.settings.freeDrag || t.each(s, t.proxy((function (t, a) {
                return "left" === i && e > a - 30 && e < a + 30 ? r = t : "right" === i && e > a - o - 30 && e < a - o + 30 ? r = t + 1 : this.op(e, "<", a) && this.op(e, ">", s[t + 1] !== n ? s[t + 1] : a - o) && (r = "left" === i ? t + 1 : t), -1 === r
            }), this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? r = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (r = e = this.maximum())), r
        }, r.prototype.animate = function (e) {
            var i = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
            }) : i ? this.$stage.animate({left: e + "px"}, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: e + "px"})
        }, r.prototype.is = function (t) {
            return this._states.current[t] && this._states.current[t] > 0
        }, r.prototype.current = function (t) {
            if (t === n) return this._current;
            if (0 === this._items.length) return n;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {property: {name: "position", value: t}});
                e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, r.prototype.invalidate = function (e) {
            return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, (function (t, e) {
                return e
            }))
        }, r.prototype.reset = function (t) {
            (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, r.prototype.normalize = function (t, e) {
            var i = this._items.length, r = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || t >= i + r) && (t = ((t - r / 2) % i + i) % i + r / 2), t
        }, r.prototype.relative = function (t) {
            return t -= this._clones.length / 2, this.normalize(t, !0)
        }, r.prototype.maximum = function (t) {
            var e, i, n, r = this.settings, o = this._coordinates.length;
            if (r.loop) o = this._clones.length / 2 + this._items.length - 1; else if (r.autoWidth || r.merge) {
                if (e = this._items.length) for (i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n);) ;
                o = e + 1
            } else o = r.center ? this._items.length - 1 : this._items.length - r.items;
            return t && (o -= this._clones.length / 2), Math.max(o, 0)
        }, r.prototype.minimum = function (t) {
            return t ? 0 : this._clones.length / 2
        }, r.prototype.items = function (t) {
            return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, r.prototype.mergers = function (t) {
            return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, r.prototype.clones = function (e) {
            var i = this._clones.length / 2, r = i + this._items.length, o = function (t) {
                return t % 2 == 0 ? r + t / 2 : i - (t + 1) / 2
            };
            return e === n ? t.map(this._clones, (function (t, e) {
                return o(e)
            })) : t.map(this._clones, (function (t, i) {
                return t === e ? o(i) : null
            }))
        }, r.prototype.speed = function (t) {
            return t !== n && (this._speed = t), this._speed
        }, r.prototype.coordinates = function (e) {
            var i, r = 1, o = e - 1;
            return e === n ? t.map(this._coordinates, t.proxy((function (t, e) {
                return this.coordinates(e)
            }), this)) : (this.settings.center ? (this.settings.rtl && (r = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * r) : i = this._coordinates[o] || 0, i = Math.ceil(i))
        }, r.prototype.duration = function (t, e, i) {
            return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, r.prototype.to = function (t, e) {
            var i = this.current(), n = null, r = t - this.relative(i), o = (r > 0) - (r < 0), s = this._items.length,
                a = this.minimum(), l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(r) > s / 2 && (r += -1 * o * s), (n = (((t = i + r) - a) % s + s) % s + a) !== t && n - r <= l && n - r > 0 && (i = n - r, t = n, this.reset(i))) : this.settings.rewind ? t = (t % (l += 1) + l) % l : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
        }, r.prototype.next = function (t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, r.prototype.prev = function (t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, r.prototype.onTransitionEnd = function (t) {
            if (t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated")
        }, r.prototype.viewport = function () {
            var n;
            return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
        }, r.prototype.replace = function (e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter((function () {
                return 1 === this.nodeType
            })).each(t.proxy((function (t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }), this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, r.prototype.add = function (e, i) {
            var r = this.relative(this._current);
            i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
                content: e,
                position: i
            }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[r] && this.reset(this._items[r].index()), this.invalidate("items"), this.trigger("added", {
                content: e,
                position: i
            })
        }, r.prototype.remove = function (t) {
            (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, r.prototype.preloadAutoWidthImages = function (e) {
            e.each(t.proxy((function (e, i) {
                this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy((function (t) {
                    i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }), this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
            }), this))
        }, r.prototype.destroy = function () {
            for (var n in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[n].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, r.prototype.op = function (t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case"<":
                    return n ? t > i : t < i;
                case">":
                    return n ? t < i : t > i;
                case">=":
                    return n ? t <= i : t >= i;
                case"<=":
                    return n ? t >= i : t <= i
            }
        }, r.prototype.on = function (t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, r.prototype.off = function (t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
        }, r.prototype.trigger = function (e, i, n, o, s) {
            var a = {item: {count: this._items.length, index: this.current()}},
                l = t.camelCase(t.grep(["on", e, n], (function (t) {
                    return t
                })).join("-").toLowerCase()),
                c = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, a, i));
            return this._supress[e] || (t.each(this._plugins, (function (t, e) {
                e.onTrigger && e.onTrigger(c)
            })), this.register({
                type: r.Type.Event,
                name: e
            }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
        }, r.prototype.enter = function (e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy((function (t, e) {
                this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
            }), this))
        }, r.prototype.leave = function (e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy((function (t, e) {
                this._states.current[e]--
            }), this))
        }, r.prototype.register = function (e) {
            if (e.type === r.Type.Event) {
                if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                    var i = t.event.special[e.name]._default;
                    t.event.special[e.name]._default = function (t) {
                        return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                    }, t.event.special[e.name].owl = !0
                }
            } else e.type === r.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy((function (i, n) {
                return t.inArray(i, this._states.tags[e.name]) === n
            }), this)))
        }, r.prototype.suppress = function (e) {
            t.each(e, t.proxy((function (t, e) {
                this._supress[e] = !0
            }), this))
        }, r.prototype.release = function (e) {
            t.each(e, t.proxy((function (t, e) {
                delete this._supress[e]
            }), this))
        }, r.prototype.pointer = function (t) {
            var i = {x: null, y: null};
            return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
        }, r.prototype.isNumeric = function (t) {
            return !isNaN(parseFloat(t))
        }, r.prototype.difference = function (t, e) {
            return {x: t.x - e.x, y: t.y - e.y}
        }, t.fn.owlCarousel = function (e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each((function () {
                var n = t(this), o = n.data("owl.carousel");
                o || (o = new r(this, "object" == typeof e && e), n.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], (function (e, i) {
                    o.register({
                        type: r.Type.Event,
                        name: i
                    }), o.$element.on(i + ".owl.carousel.core", t.proxy((function (t) {
                        t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                    }), o))
                }))), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
            }))
        }, t.fn.owlCarousel.Constructor = r
    }(window.Zepto || window.jQuery, window, document), i = window.Zepto || window.jQuery, n = window, document, (r = function (t) {
        this._core = t, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": i.proxy((function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }), this)
        }, this._core.options = i.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    }).Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, r.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = n.setInterval(i.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, r.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, r.prototype.destroy = function () {
        var t, e;
        for (t in n.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, i.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r, function (t, e, i, n) {
        var r = function (e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy((function (e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                        var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items,
                            r = i.center && -1 * n || 0,
                            o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + r,
                            s = this._core.clones().length, a = t.proxy((function (t, e) {
                                this.load(e)
                            }), this);
                        for (i.lazyLoadEager > 0 && (n += i.lazyLoadEager, i.loop && (o -= i.lazyLoadEager, n++)); r++ < n;) this.load(s / 2 + this._core.relative(o)), s && t.each(this._core.clones(this._core.relative(o)), a), o++
                    }
                }), this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {lazyLoad: !1, lazyLoadEager: 0}, r.prototype.load = function (i) {
            var n = this._core.$stage.children().eq(i), r = n && n.find(".owl-lazy");
            !r || t.inArray(n.get(0), this._loaded) > -1 || (r.each(t.proxy((function (i, n) {
                var r, o = t(n),
                    s = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
                this._core.trigger("load", {
                    element: o,
                    url: s
                }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy((function () {
                    o.css("opacity", 1), this._core.trigger("loaded", {element: o, url: s}, "lazy")
                }), this)).attr("src", s) : o.is("source") ? o.one("load.owl.lazy", t.proxy((function () {
                    this._core.trigger("loaded", {element: o, url: s}, "lazy")
                }), this)).attr("srcset", s) : ((r = new Image).onload = t.proxy((function () {
                    o.css({
                        "background-image": 'url("' + s + '")',
                        opacity: "1"
                    }), this._core.trigger("loaded", {element: o, url: s}, "lazy")
                }), this), r.src = s)
            }), this)), this._loaded.push(n.get(0)))
        }, r.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Lazy = r
    }(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        var r = function (i) {
            this._core = i, this._previousHeight = null, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": t.proxy((function (t) {
                    t.namespace && this._core.settings.autoHeight && this.update()
                }), this), "changed.owl.carousel": t.proxy((function (t) {
                    t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
                }), this), "loaded.owl.lazy": t.proxy((function (t) {
                    t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }), this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
            var n = this;
            t(e).on("load", (function () {
                n._core.settings.autoHeight && n.update()
            })), t(e).resize((function () {
                n._core.settings.autoHeight && (null != n._intervalId && clearTimeout(n._intervalId), n._intervalId = setTimeout((function () {
                    n.update()
                }), 250))
            }))
        };
        r.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, r.prototype.update = function () {
            var e = this._core._current, i = e + this._core.settings.items, n = this._core.settings.lazyLoad,
                r = this._core.$stage.children().toArray().slice(e, i), o = [], s = 0;
            t.each(r, (function (e, i) {
                o.push(t(i).height())
            })), (s = Math.max.apply(null, o)) <= 1 && n && this._previousHeight && (s = this._previousHeight), this._previousHeight = s, this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
        }, r.prototype.destroy = function () {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
    }(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        var r = function (e) {
            this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": t.proxy((function (t) {
                    t.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
                }), this), "resize.owl.carousel": t.proxy((function (t) {
                    t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                }), this), "refreshed.owl.carousel": t.proxy((function (t) {
                    t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }), this), "changed.owl.carousel": t.proxy((function (t) {
                    t.namespace && "position" === t.property.name && this._playing && this.stop()
                }), this), "prepared.owl.carousel": t.proxy((function (e) {
                    if (e.namespace) {
                        var i = t(e.content).find(".owl-video");
                        i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                    }
                }), this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy((function (t) {
                this.play(t)
            }), this))
        };
        r.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, r.prototype.fetch = function (t, e) {
            var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                r = t.attr("data-width") || this._core.settings.videoWidth,
                o = t.attr("data-height") || this._core.settings.videoHeight, s = t.attr("href");
            if (!s) throw new Error("Missing video URL.");
            if ((n = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube"; else if (n[3].indexOf("vimeo") > -1) i = "vimeo"; else {
                if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                i = "vzaar"
            }
            n = n[6], this._videos[s] = {
                type: i,
                id: n,
                width: r,
                height: o
            }, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
        }, r.prototype.thumbnail = function (e, i) {
            var n, r, o = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
                s = e.find("img"), a = "src", l = "", c = this._core.settings, u = function (i) {
                    '<div class="owl-video-play-icon"></div>', n = c.lazyLoad ? t("<div/>", {
                        class: "owl-video-tn " + l,
                        srcType: i
                    }) : t("<div/>", {
                        class: "owl-video-tn",
                        style: "opacity:1;background-image:url(" + i + ")"
                    }), e.after(n), e.after('<div class="owl-video-play-icon"></div>')
                };
            if (e.wrap(t("<div/>", {
                class: "owl-video-wrapper",
                style: o
            })), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), s.length) return u(s.attr(a)), s.remove(), !1;
            "youtube" === i.type ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(r)) : "vimeo" === i.type ? t.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (t) {
                    r = t[0].thumbnail_large, u(r)
                }
            }) : "vzaar" === i.type && t.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (t) {
                    r = t.framegrab_url, u(r)
                }
            })
        }, r.prototype.stop = function () {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, r.prototype.play = function (e) {
            var i, n = t(e.target).closest("." + this._core.settings.itemClass), r = this._videos[n.attr("data-video")],
                o = r.width || "100%", s = r.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), (i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", s), i.attr("width", o), "youtube" === r.type ? i.attr("src", "//www.youtube.com/embed/" + r.id + "?autoplay=1&rel=0&v=" + r.id) : "vimeo" === r.type ? i.attr("src", "//player.vimeo.com/video/" + r.id + "?autoplay=1") : "vzaar" === r.type && i.attr("src", "//view.vzaar.com/" + r.id + "/player?autoplay=true"), t(i).wrap('<div class="owl-video-frame" />').insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
        }, r.prototype.isInFullScreen = function () {
            var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return e && t(e).parent().hasClass("owl-video-frame")
        }, r.prototype.destroy = function () {
            var t, e;
            for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Video = r
    }(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        var r = function (e) {
            this.core = e, this.core.options = t.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
                "change.owl.carousel": t.proxy((function (t) {
                    t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }), this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy((function (t) {
                    t.namespace && (this.swapping = "translated" == t.type)
                }), this), "translate.owl.carousel": t.proxy((function (t) {
                    t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }), this)
            }, this.core.$element.on(this.handlers)
        };
        r.Defaults = {animateOut: !1, animateIn: !1}, r.prototype.swap = function () {
            if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                this.core.speed(0);
                var e, i = t.proxy(this.clear, this), n = this.core.$stage.children().eq(this.previous),
                    r = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn,
                    s = this.core.settings.animateOut;
                this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({left: e + "px"}).addClass("animated owl-animated-out").addClass(s)), o && r.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
            }
        }, r.prototype.clear = function (e) {
            t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, r.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Animate = r
    }(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        var r = function (e) {
            this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
                "changed.owl.carousel": t.proxy((function (t) {
                    t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
                }), this), "initialized.owl.carousel": t.proxy((function (t) {
                    t.namespace && this._core.settings.autoplay && this.play()
                }), this), "play.owl.autoplay": t.proxy((function (t, e, i) {
                    t.namespace && this.play(e, i)
                }), this), "stop.owl.autoplay": t.proxy((function (t) {
                    t.namespace && this.stop()
                }), this), "mouseover.owl.autoplay": t.proxy((function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }), this), "mouseleave.owl.autoplay": t.proxy((function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }), this), "touchstart.owl.core": t.proxy((function () {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }), this), "touchend.owl.core": t.proxy((function () {
                    this._core.settings.autoplayHoverPause && this.play()
                }), this)
            }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, r.Defaults, this._core.options)
        };
        r.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, r.prototype._next = function (n) {
            this._call = e.setTimeout(t.proxy(this._next, this, n), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
        }, r.prototype.read = function () {
            return (new Date).getTime() - this._time
        }, r.prototype.play = function (i, n) {
            var r;
            this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, r = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - r, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, n), i - r)
        }, r.prototype.stop = function () {
            this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
        }, r.prototype.pause = function () {
            this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
        }, r.prototype.destroy = function () {
            var t, e;
            for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.autoplay = r
    }(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        "use strict";
        var r = function (e) {
            this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": t.proxy((function (e) {
                    e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }), this), "added.owl.carousel": t.proxy((function (t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                }), this), "remove.owl.carousel": t.proxy((function (t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }), this), "changed.owl.carousel": t.proxy((function (t) {
                    t.namespace && "position" == t.property.name && this.draw()
                }), this), "initialized.owl.carousel": t.proxy((function (t) {
                    t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }), this), "refreshed.owl.carousel": t.proxy((function (t) {
                    t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }), this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        r.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, r.prototype.initialize = function () {
            var e, i = this._core.settings;
            for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy((function (t) {
                this.prev(i.navSpeed)
            }), this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy((function (t) {
                this.next(i.navSpeed)
            }), this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy((function (e) {
                var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(n, i.dotsSpeed)
            }), this)), this._overrides) this._core[e] = t.proxy(this[e], this)
        }, r.prototype.destroy = function () {
            var t, e, i, n, r;
            for (t in r = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) "$relative" === e && r.navContainer ? this._controls[e].html("") : this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, r.prototype.update = function () {
            var t, e, i = this._core.clones().length / 2, n = i + this._core.items().length, r = this._core.maximum(!0),
                o = this._core.settings, s = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
            if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy) for (this._pages = [], t = i, e = 0, 0; t < n; t++) {
                if (e >= s || 0 === e) {
                    if (this._pages.push({
                        start: Math.min(r, t - i),
                        end: t - i + s - 1
                    }), Math.min(r, t - i) === r) break;
                    e = 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
        }, r.prototype.draw = function () {
            var e, i = this._core.settings, n = this._core.items().length <= i.items,
                r = this._core.relative(this._core.current()), o = i.loop || i.rewind;
            this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !o && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
        }, r.prototype.onTrigger = function (e) {
            var i = this._core.settings;
            e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
            }
        }, r.prototype.current = function () {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, t.proxy((function (t, i) {
                return t.start <= e && t.end >= e
            }), this)).pop()
        }, r.prototype.getPosition = function (e) {
            var i, n, r = this._core.settings;
            return "page" == r.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += r.slideBy : i -= r.slideBy), i
        }, r.prototype.next = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
        }, r.prototype.prev = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
        }, r.prototype.to = function (e, i, n) {
            var r;
            !n && this._pages.length ? (r = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % r + r) % r].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
        }, t.fn.owlCarousel.Constructor.Plugins.Navigation = r
    }(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        "use strict";
        var r = function (i) {
            this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy((function (i) {
                    i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                }), this), "prepared.owl.carousel": t.proxy((function (e) {
                    if (e.namespace) {
                        var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!i) return;
                        this._hashes[i] = e.content
                    }
                }), this), "changed.owl.carousel": t.proxy((function (i) {
                    if (i.namespace && "position" === i.property.name) {
                        var n = this._core.items(this._core.relative(this._core.current())),
                            r = t.map(this._hashes, (function (t, e) {
                                return t === n ? e : null
                            })).join();
                        if (!r || e.location.hash.slice(1) === r) return;
                        e.location.hash = r
                    }
                }), this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy((function (t) {
                var i = e.location.hash.substring(1), n = this._core.$stage.children(),
                    r = this._hashes[i] && n.index(this._hashes[i]);
                void 0 !== r && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
            }), this))
        };
        r.Defaults = {URLhashListener: !1}, r.prototype.destroy = function () {
            var i, n;
            for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Hash = r
    }(window.Zepto || window.jQuery, window, document), function (t, e, i, n) {
        function r(e, i) {
            var n = !1, r = e.charAt(0).toUpperCase() + e.slice(1);
            return t.each((e + " " + a.join(r + " ") + r).split(" "), (function (t, e) {
                if (void 0 !== s[e]) return n = !i || e, !1
            })), n
        }

        function o(t) {
            return r(t, !0)
        }

        var s = t("<support>").get(0).style, a = "Webkit Moz O ms".split(" "), l = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        }, c = function () {
            return !!r("transform")
        }, u = function () {
            return !!r("perspective")
        }, h = function () {
            return !!r("animation")
        };
        (function () {
            return !!r("transition")
        })() && (t.support.transition = String(o("transition")), t.support.transition.end = l.transition.end[t.support.transition]), h() && (t.support.animation = String(o("animation")), t.support.animation.end = l.animation.end[t.support.animation]), c() && (t.support.transform = String(o("transform")), t.support.transform3d = u())
    }(window.Zepto || window.jQuery, window, document)
}, function (t, e) {
    !function (t) {
        t.fn.niceSelect = function (e) {
            if ("string" == typeof e) return "update" == e ? this.each((function () {
                var e = t(this), n = t(this).next(".nice-select"), r = n.hasClass("open");
                n.length && (n.remove(), i(e), r && e.next().trigger("click"))
            })) : "destroy" == e ? (this.each((function () {
                var e = t(this), i = t(this).next(".nice-select");
                i.length && (i.remove(), e.css("display", ""))
            })), 0 == t(".nice-select").length && t(document).off(".nice_select")) : console.log('Method "' + e + '" does not exist.'), this;

            function i(e) {
                e.after(t("<div></div>").addClass("nice-select").addClass(e.attr("class") || "").addClass(e.attr("disabled") ? "disabled" : "").attr("tabindex", e.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
                var i = e.next(), n = e.find("option"), r = e.find("option:selected");
                i.find(".current").html(r.data("display") || r.text()), n.each((function (e) {
                    var n = t(this), r = n.data("display");
                    i.find("ul").append(t("<li></li>").attr("data-value", n.val()).attr("data-display", r || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
                }))
            }

            this.hide(), this.each((function () {
                var e = t(this);
                e.next().hasClass("nice-select") || i(e)
            })), t(document).off(".nice_select"), t(document).on("click.nice_select", ".nice-select", (function (e) {
                var i = t(this);
                t(".nice-select").not(i).removeClass("open"), i.toggleClass("open"), i.hasClass("open") ? (i.find(".option"), i.find(".focus").removeClass("focus"), i.find(".selected").addClass("focus")) : i.focus()
            })), t(document).on("click.nice_select", (function (e) {
                0 === t(e.target).closest(".nice-select").length && t(".nice-select").removeClass("open").find(".option")
            })), t(document).on("click.nice_select", ".nice-select .option:not(.disabled)", (function (e) {
                var i = t(this), n = i.closest(".nice-select");
                n.find(".selected").removeClass("selected"), i.addClass("selected");
                var r = i.data("display") || i.text();
                n.find(".current").text(r), n.prev("select").val(i.data("value")).trigger("change")
            })), t(document).on("keydown.nice_select", ".nice-select", (function (e) {
                var i = t(this), n = t(i.find(".focus") || i.find(".list .option.selected"));
                if (32 == e.keyCode || 13 == e.keyCode) return i.hasClass("open") ? n.trigger("click") : i.trigger("click"), !1;
                if (40 == e.keyCode) {
                    if (i.hasClass("open")) {
                        var r = n.nextAll(".option:not(.disabled)").first();
                        r.length > 0 && (i.find(".focus").removeClass("focus"), r.addClass("focus"))
                    } else i.trigger("click");
                    return !1
                }
                if (38 == e.keyCode) {
                    if (i.hasClass("open")) {
                        var o = n.prevAll(".option:not(.disabled)").first();
                        o.length > 0 && (i.find(".focus").removeClass("focus"), o.addClass("focus"))
                    } else i.trigger("click");
                    return !1
                }
                if (27 == e.keyCode) i.hasClass("open") && i.trigger("click"); else if (9 == e.keyCode && i.hasClass("open")) return !1
            }));
            var n = document.createElement("a").style;
            return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && t("html").addClass("no-csspointerevents"), this
        }
    }(jQuery)
}, function (t, e, i) {
    var n, r;
    !function (o) {
        "undefined" != typeof jQuery && jQuery || !i(21) ? "undefined" != typeof jQuery && jQuery || "object" != typeof e ? o(jQuery, document, window, navigator) : o(i(0), document, window, navigator) : (n = [i(0)], void 0 === (r = function (t) {
            return o(t, document, window, navigator)
        }.apply(e, n)) || (t.exports = r))
    }((function (t, e, i, n, r) {
        "use strict";
        var o, s, a = 0,
            l = (s = /msie\s\d+/i, 0 < (o = n.userAgent).search(s) && s.exec(o).toString().split(" ")[1] < 9 && (t("html").addClass("lt-ie9"), !0));

        function c(n, o, s) {
            this.VERSION = "2.3.1", this.input = n, this.plugin_count = s, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.has_tab_index = !0, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, o = o || {}, this.$cache = {
                win: t(i),
                body: t(e.body),
                input: t(n),
                cont: null,
                rs: null,
                min: null,
                max: null,
                from: null,
                to: null,
                single: null,
                bar: null,
                line: null,
                s_single: null,
                s_from: null,
                s_to: null,
                shad_single: null,
                shad_from: null,
                shad_to: null,
                edge: null,
                grid: null,
                grid_labels: []
            }, this.coords = {
                x_gap: 0,
                x_pointer: 0,
                w_rs: 0,
                w_rs_old: 0,
                w_handle: 0,
                p_gap: 0,
                p_gap_left: 0,
                p_gap_right: 0,
                p_step: 0,
                p_pointer: 0,
                p_handle: 0,
                p_single_fake: 0,
                p_single_real: 0,
                p_from_fake: 0,
                p_from_real: 0,
                p_to_fake: 0,
                p_to_real: 0,
                p_bar_x: 0,
                p_bar_w: 0,
                grid_gap: 0,
                big_num: 0,
                big: [],
                big_w: [],
                big_p: [],
                big_x: []
            }, this.labels = {
                w_min: 0,
                w_max: 0,
                w_from: 0,
                w_to: 0,
                w_single: 0,
                p_min: 0,
                p_max: 0,
                p_from_fake: 0,
                p_from_left: 0,
                p_to_fake: 0,
                p_to_left: 0,
                p_single_fake: 0,
                p_single_left: 0
            };
            var a, l, c, u = this.$cache.input, h = u.prop("value");
            for (c in a = {
                skin: "flat",
                type: "single",
                min: 10,
                max: 100,
                from: null,
                to: null,
                step: 1,
                min_interval: 0,
                max_interval: 0,
                drag_interval: !1,
                values: [],
                p_values: [],
                from_fixed: !1,
                from_min: null,
                from_max: null,
                from_shadow: !1,
                to_fixed: !1,
                to_min: null,
                to_max: null,
                to_shadow: !1,
                prettify_enabled: !0,
                prettify_separator: " ",
                prettify: null,
                force_edges: !1,
                keyboard: !0,
                grid: !1,
                grid_margin: !0,
                grid_num: 4,
                grid_snap: !1,
                hide_min_max: !1,
                hide_from_to: !1,
                prefix: "",
                postfix: "",
                max_postfix: "",
                decorate_both: !0,
                values_separator: " — ",
                input_values_separator: ";",
                disable: !1,
                block: !1,
                extra_classes: "",
                scope: null,
                onStart: null,
                onChange: null,
                onFinish: null,
                onUpdate: null
            }, "INPUT" !== u[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", u[0]), (l = {
                skin: u.data("skin"),
                type: u.data("type"),
                min: u.data("min"),
                max: u.data("max"),
                from: u.data("from"),
                to: u.data("to"),
                step: u.data("step"),
                min_interval: u.data("minInterval"),
                max_interval: u.data("maxInterval"),
                drag_interval: u.data("dragInterval"),
                values: u.data("values"),
                from_fixed: u.data("fromFixed"),
                from_min: u.data("fromMin"),
                from_max: u.data("fromMax"),
                from_shadow: u.data("fromShadow"),
                to_fixed: u.data("toFixed"),
                to_min: u.data("toMin"),
                to_max: u.data("toMax"),
                to_shadow: u.data("toShadow"),
                prettify_enabled: u.data("prettifyEnabled"),
                prettify_separator: u.data("prettifySeparator"),
                force_edges: u.data("forceEdges"),
                keyboard: u.data("keyboard"),
                grid: u.data("grid"),
                grid_margin: u.data("gridMargin"),
                grid_num: u.data("gridNum"),
                grid_snap: u.data("gridSnap"),
                hide_min_max: u.data("hideMinMax"),
                hide_from_to: u.data("hideFromTo"),
                prefix: u.data("prefix"),
                postfix: u.data("postfix"),
                max_postfix: u.data("maxPostfix"),
                decorate_both: u.data("decorateBoth"),
                values_separator: u.data("valuesSeparator"),
                input_values_separator: u.data("inputValuesSeparator"),
                disable: u.data("disable"),
                block: u.data("block"),
                extra_classes: u.data("extraClasses")
            }).values = l.values && l.values.split(","), l) l.hasOwnProperty(c) && (l[c] !== r && "" !== l[c] || delete l[c]);
            h !== r && "" !== h && ((h = h.split(l.input_values_separator || o.input_values_separator || ";"))[0] && h[0] == +h[0] && (h[0] = +h[0]), h[1] && h[1] == +h[1] && (h[1] = +h[1]), o && o.values && o.values.length ? (a.from = h[0] && o.values.indexOf(h[0]), a.to = h[1] && o.values.indexOf(h[1])) : (a.from = h[0] && +h[0], a.to = h[1] && +h[1])), t.extend(a, o), t.extend(a, l), this.options = a, this.update_check = {}, this.validate(), this.result = {
                input: this.$cache.input,
                slider: null,
                min: this.options.min,
                max: this.options.max,
                from: this.options.from,
                from_percent: 0,
                from_value: null,
                to: this.options.to,
                to_percent: 0,
                to_value: null
            }, this.init()
        }

        Function.prototype.bind || (Function.prototype.bind = function (t) {
            var e = this, i = [].slice;
            if ("function" != typeof e) throw new TypeError;
            var n = i.call(arguments, 1), r = function () {
                if (this instanceof r) {
                    var o = function () {
                    };
                    o.prototype = e.prototype;
                    var s = new o, a = e.apply(s, n.concat(i.call(arguments)));
                    return Object(a) === a ? a : s
                }
                return e.apply(t, n.concat(i.call(arguments)))
            };
            return r
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
            var i;
            if (null == this) throw new TypeError('"this" is null or not defined');
            var n = Object(this), r = n.length >>> 0;
            if (0 == r) return -1;
            var o = +e || 0;
            if (Math.abs(o) === 1 / 0 && (o = 0), r <= o) return -1;
            for (i = Math.max(0 <= o ? o : r - Math.abs(o), 0); i < r;) {
                if (i in n && n[i] === t) return i;
                i++
            }
            return -1
        }), c.prototype = {
            init: function (t) {
                this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
            }, append: function () {
                var t = '<span class="irs irs--' + this.options.skin + " js-irs-" + this.plugin_count + " " + this.options.extra_classes + '"></span>';
                this.$cache.input.before(t), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
            }, setTopHandler: function () {
                var t = this.options.min, e = this.options.max, i = this.options.from, n = this.options.to;
                t < i && n === e ? this.$cache.s_from.addClass("type_last") : n < e && this.$cache.s_to.addClass("type_last")
            }, changeLevel: function (t) {
                switch (t) {
                    case"single":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
                        break;
                    case"from":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                        break;
                    case"to":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                        break;
                    case"both":
                        this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
                }
            }, appendDisableMask: function () {
                this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled")
            }, removeDisableMask: function () {
                this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled")
            }, remove: function () {
                this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), l && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
            }, bindEvents: function () {
                this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), l && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
            }, pointerFocus: function (t) {
                var e, i;
                this.target || (e = (i = "single" === this.options.type ? this.$cache.single : this.$cache.from).offset().left, e += i.width() / 2 - 1, this.pointerClick("single", {
                    preventDefault: function () {
                    }, pageX: e
                }))
            }, pointerMove: function (t) {
                if (this.dragging) {
                    var e = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX;
                    this.coords.x_pointer = e - this.coords.x_gap, this.calc()
                }
            }, pointerUp: function (e) {
                this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, l && t("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (t.contains(this.$cache.cont[0], e.target) || this.dragging) && this.callOnFinish(), this.dragging = !1)
            }, pointerDown: function (e, i) {
                i.preventDefault();
                var n = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
                2 !== i.button && ("both" === e && this.setTempMinInterval(), e = e || this.target || "from", this.current_plugin = this.plugin_count, this.target = e, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = n - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(e), l && t("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
            }, pointerClick: function (t, e) {
                e.preventDefault();
                var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
                2 !== e.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
            }, key: function (t, e) {
                if (!(this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)) {
                    switch (e.which) {
                        case 83:
                        case 65:
                        case 40:
                        case 37:
                            e.preventDefault(), this.moveByKey(!1);
                            break;
                        case 87:
                        case 68:
                        case 38:
                        case 39:
                            e.preventDefault(), this.moveByKey(!0)
                    }
                    return !0
                }
            }, moveByKey: function (t) {
                var e = this.coords.p_pointer, i = (this.options.max - this.options.min) / 100;
                i = this.options.step / i, t ? e += i : e -= i, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * e), this.is_key = !0, this.calc()
            }, setMinMax: function () {
                if (this.options) {
                    if (this.options.hide_min_max) return this.$cache.min[0].style.display = "none", void (this.$cache.max[0].style.display = "none");
                    if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max])); else {
                        var t = this._prettify(this.options.min), e = this._prettify(this.options.max);
                        this.result.min_pretty = t, this.result.max_pretty = e, this.$cache.min.html(this.decorate(t, this.options.min)), this.$cache.max.html(this.decorate(e, this.options.max))
                    }
                    this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)
                }
            }, setTempMinInterval: function () {
                var t = this.result.to - this.result.from;
                null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t
            }, restoreOriginalMinInterval: function () {
                null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
            }, calc: function (t) {
                if (this.options && (this.calc_count++, 10 !== this.calc_count && !t || (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                    this.calcPointerPercent();
                    var e = this.getHandleX();
                    switch ("both" === this.target && (this.coords.p_gap = 0, e = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, e = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(e)), this.target) {
                        case"base":
                            var i = (this.options.max - this.options.min) / 100,
                                n = (this.result.from - this.options.min) / i,
                                r = (this.result.to - this.options.min) / i;
                            this.coords.p_single_real = this.toFixed(n), this.coords.p_from_real = this.toFixed(n), this.coords.p_to_real = this.toFixed(r), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                            break;
                        case"single":
                            if (this.options.from_fixed) break;
                            this.coords.p_single_real = this.convertToRealPercent(e), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                            break;
                        case"from":
                            if (this.options.from_fixed) break;
                            this.coords.p_from_real = this.convertToRealPercent(e), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                            break;
                        case"to":
                            if (this.options.to_fixed) break;
                            this.coords.p_to_real = this.convertToRealPercent(e), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case"both":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            e = this.toFixed(e + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(e) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(e) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case"both_one":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            var o = this.convertToRealPercent(e), s = this.result.from_percent,
                                a = this.result.to_percent - s, l = a / 2, c = o - l, u = o + l;
                            c < 0 && (u = (c = 0) + a), 100 < u && (c = (u = 100) - a), this.coords.p_from_real = this.calcWithStep(c), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(u), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                    }
                    "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
                }
            }, calcPointerPercent: function () {
                this.coords.w_rs ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
            }, convertToRealPercent: function (t) {
                return t / (100 - this.coords.p_handle) * 100
            }, convertToFakePercent: function (t) {
                return t / 100 * (100 - this.coords.p_handle)
            }, getHandleX: function () {
                var t = 100 - this.coords.p_handle, e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                return e < 0 ? e = 0 : t < e && (e = t), e
            }, calcHandlePercent: function () {
                "single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
            }, chooseHandle: function (t) {
                return "single" === this.options.type ? "single" : this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 <= t ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
            }, calcMinMax: function () {
                this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
            }, calcLabels: function () {
                this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))
            }, updateScene: function () {
                this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
            }, drawHandles: function () {
                this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), this.coords.w_rs === this.coords.w_rs_old && !this.force_redraw || (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.bar[0].style.left = 0, this.$cache.bar[0].style.width = this.coords.p_bar_w + this.coords.p_bar_x + "%", this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%") : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", this.old_from === this.result.from && !this.force_redraw || (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), this.old_to === this.result.to && !this.force_redraw || (this.$cache.to[0].style.left = this.labels.p_to_left + "%")), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1))
            }, drawLabels: function () {
                if (this.options) {
                    var t, e, i, n, r, o = this.options.values.length, s = this.options.p_values;
                    if (!this.options.hide_from_to) if ("single" === this.options.type) t = o ? this.decorate(s[this.result.from]) : (n = this._prettify(this.result.from), this.decorate(n, this.result.from)), this.$cache.single.html(t), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible"; else {
                        i = o ? (this.options.decorate_both ? (t = this.decorate(s[this.result.from]), t += this.options.values_separator, t += this.decorate(s[this.result.to])) : t = this.decorate(s[this.result.from] + this.options.values_separator + s[this.result.to]), e = this.decorate(s[this.result.from]), this.decorate(s[this.result.to])) : (n = this._prettify(this.result.from), r = this._prettify(this.result.to), this.options.decorate_both ? (t = this.decorate(n, this.result.from), t += this.options.values_separator, t += this.decorate(r, this.result.to)) : t = this.decorate(n + this.options.values_separator + r, this.result.to), e = this.decorate(n, this.result.from), this.decorate(r, this.result.to)), this.$cache.single.html(t), this.$cache.from.html(e), this.$cache.to.html(i), this.calcLabels();
                        var a = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                            l = this.labels.p_single_left + this.labels.p_single_fake,
                            c = this.labels.p_to_left + this.labels.p_to_fake, u = Math.max(l, c);
                        this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", u = this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", c) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", Math.max(l, c))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), a < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", u > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible"
                    }
                }
            }, drawShadow: function () {
                var t, e, i, n, r = this.options, o = this.$cache,
                    s = "number" == typeof r.from_min && !isNaN(r.from_min),
                    a = "number" == typeof r.from_max && !isNaN(r.from_max),
                    l = "number" == typeof r.to_min && !isNaN(r.to_min),
                    c = "number" == typeof r.to_max && !isNaN(r.to_max);
                "single" === r.type ? r.from_shadow && (s || a) ? (t = this.convertToPercent(s ? r.from_min : r.min), e = this.convertToPercent(a ? r.from_max : r.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), e = this.toFixed(e - this.coords.p_handle / 100 * e), t += this.coords.p_handle / 2, o.shad_single[0].style.display = "block", o.shad_single[0].style.left = t + "%", o.shad_single[0].style.width = e + "%") : o.shad_single[0].style.display = "none" : (r.from_shadow && (s || a) ? (t = this.convertToPercent(s ? r.from_min : r.min), e = this.convertToPercent(a ? r.from_max : r.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), e = this.toFixed(e - this.coords.p_handle / 100 * e), t += this.coords.p_handle / 2, o.shad_from[0].style.display = "block", o.shad_from[0].style.left = t + "%", o.shad_from[0].style.width = e + "%") : o.shad_from[0].style.display = "none", r.to_shadow && (l || c) ? (i = this.convertToPercent(l ? r.to_min : r.min), n = this.convertToPercent(c ? r.to_max : r.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), n = this.toFixed(n - this.coords.p_handle / 100 * n), i += this.coords.p_handle / 2, o.shad_to[0].style.display = "block", o.shad_to[0].style.left = i + "%", o.shad_to[0].style.width = n + "%") : o.shad_to[0].style.display = "none")
            }, writeToInput: function () {
                "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to))
            }, callOnStart: function () {
                this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result))
            }, callOnChange: function () {
                this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result))
            }, callOnFinish: function () {
                this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result))
            }, callOnUpdate: function () {
                this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result))
            }, toggleInput: function () {
                this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index
            }, convertToPercent: function (t, e) {
                var i, n = this.options.max - this.options.min, r = n / 100;
                return n ? (i = (e ? t : t - this.options.min) / r, this.toFixed(i)) : (this.no_diapason = !0, 0)
            }, convertToValue: function (t) {
                var e, i, n = this.options.min, r = this.options.max, o = n.toString().split(".")[1],
                    s = r.toString().split(".")[1], a = 0, l = 0;
                if (0 === t) return this.options.min;
                if (100 === t) return this.options.max;
                o && (a = e = o.length), s && (a = i = s.length), e && i && (a = i <= e ? e : i), n < 0 && (n = +(n + (l = Math.abs(n))).toFixed(a), r = +(r + l).toFixed(a));
                var c, u = (r - n) / 100 * t + n, h = this.options.step.toString().split(".")[1];
                return u = h ? +u.toFixed(h.length) : (u /= this.options.step, +(u *= this.options.step).toFixed(0)), l && (u -= l), (c = h ? +u.toFixed(h.length) : this.toFixed(u)) < this.options.min ? c = this.options.min : c > this.options.max && (c = this.options.max), c
            }, calcWithStep: function (t) {
                var e = Math.round(t / this.coords.p_step) * this.coords.p_step;
                return 100 < e && (e = 100), 100 === t && (e = 100), this.toFixed(e)
            }, checkMinInterval: function (t, e, i) {
                var n, r, o = this.options;
                return o.min_interval ? (n = this.convertToValue(t), r = this.convertToValue(e), "from" === i ? r - n < o.min_interval && (n = r - o.min_interval) : n - r < o.min_interval && (n = r + o.min_interval), this.convertToPercent(n)) : t
            }, checkMaxInterval: function (t, e, i) {
                var n, r, o = this.options;
                return o.max_interval ? (n = this.convertToValue(t), r = this.convertToValue(e), "from" === i ? r - n > o.max_interval && (n = r - o.max_interval) : n - r > o.max_interval && (n = r + o.max_interval), this.convertToPercent(n)) : t
            }, checkDiapason: function (t, e, i) {
                var n = this.convertToValue(t), r = this.options;
                return "number" != typeof e && (e = r.min), "number" != typeof i && (i = r.max), n < e && (n = e), i < n && (n = i), this.convertToPercent(n)
            }, toFixed: function (t) {
                return +(t = t.toFixed(20))
            }, _prettify: function (t) {
                return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t) : t
            }, prettify: function (t) {
                return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
            }, checkEdges: function (t, e) {
                return this.options.force_edges && (t < 0 ? t = 0 : 100 - e < t && (t = 100 - e)), this.toFixed(t)
            }, validate: function () {
                var t, e, i = this.options, n = this.result, r = i.values, o = r.length;
                if ("string" == typeof i.min && (i.min = +i.min), "string" == typeof i.max && (i.max = +i.max), "string" == typeof i.from && (i.from = +i.from), "string" == typeof i.to && (i.to = +i.to), "string" == typeof i.step && (i.step = +i.step), "string" == typeof i.from_min && (i.from_min = +i.from_min), "string" == typeof i.from_max && (i.from_max = +i.from_max), "string" == typeof i.to_min && (i.to_min = +i.to_min), "string" == typeof i.to_max && (i.to_max = +i.to_max), "string" == typeof i.grid_num && (i.grid_num = +i.grid_num), i.max < i.min && (i.max = i.min), o) for (i.p_values = [], i.min = 0, i.max = o - 1, i.step = 1, i.grid_num = i.max, i.grid_snap = !0, e = 0; e < o; e++) t = +r[e], t = isNaN(t) ? r[e] : (r[e] = t, this._prettify(t)), i.p_values.push(t);
                "number" == typeof i.from && !isNaN(i.from) || (i.from = i.min), "number" == typeof i.to && !isNaN(i.to) || (i.to = i.max), "single" === i.type ? (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max)) : (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max), i.to < i.min && (i.to = i.min), i.to > i.max && (i.to = i.max), this.update_check.from && (this.update_check.from !== i.from && i.from > i.to && (i.from = i.to), this.update_check.to !== i.to && i.to < i.from && (i.to = i.from)), i.from > i.to && (i.from = i.to), i.to < i.from && (i.to = i.from)), ("number" != typeof i.step || isNaN(i.step) || !i.step || i.step < 0) && (i.step = 1), "number" == typeof i.from_min && i.from < i.from_min && (i.from = i.from_min), "number" == typeof i.from_max && i.from > i.from_max && (i.from = i.from_max), "number" == typeof i.to_min && i.to < i.to_min && (i.to = i.to_min), "number" == typeof i.to_max && i.from > i.to_max && (i.to = i.to_max), n && (n.min !== i.min && (n.min = i.min), n.max !== i.max && (n.max = i.max), (n.from < n.min || n.from > n.max) && (n.from = i.from), (n.to < n.min || n.to > n.max) && (n.to = i.to)), ("number" != typeof i.min_interval || isNaN(i.min_interval) || !i.min_interval || i.min_interval < 0) && (i.min_interval = 0), ("number" != typeof i.max_interval || isNaN(i.max_interval) || !i.max_interval || i.max_interval < 0) && (i.max_interval = 0), i.min_interval && i.min_interval > i.max - i.min && (i.min_interval = i.max - i.min), i.max_interval && i.max_interval > i.max - i.min && (i.max_interval = i.max - i.min)
            }, decorate: function (t, e) {
                var i = "", n = this.options;
                return n.prefix && (i += n.prefix), i += t, n.max_postfix && (n.values.length && t === n.p_values[n.max] || e === n.max) && (i += n.max_postfix, n.postfix && (i += " ")), n.postfix && (i += n.postfix), i
            }, updateFrom: function () {
                this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
            }, updateTo: function () {
                this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
            }, updateResult: function () {
                this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
            }, appendGrid: function () {
                if (this.options.grid) {
                    var t, e, i, n, r, o, s = this.options, a = s.max - s.min, l = s.grid_num, c = 0, u = 4, h = "";
                    for (this.calcGridMargin(), s.grid_snap && (l = a / s.step), 50 < l && (l = 50), i = this.toFixed(100 / l), 4 < l && (u = 3), 7 < l && (u = 2), 14 < l && (u = 1), 28 < l && (u = 0), t = 0; t < l + 1; t++) {
                        for (n = u, 100 < (c = this.toFixed(i * t)) && (c = 100), r = ((this.coords.big[t] = c) - i * (t - 1)) / (n + 1), e = 1; e <= n && 0 !== c; e++) h += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(c - r * e) + '%"></span>';
                        h += '<span class="irs-grid-pol" style="left: ' + c + '%"></span>', o = this.convertToValue(c), h += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + c + '%">' + (o = s.values.length ? s.p_values[o] : this._prettify(o)) + "</span>"
                    }
                    this.coords.big_num = Math.ceil(l + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(h), this.cacheGridLabels()
                }
            }, cacheGridLabels: function () {
                var t, e, i = this.coords.big_num;
                for (e = 0; e < i; e++) t = this.$cache.grid.find(".js-grid-text-" + e), this.$cache.grid_labels.push(t);
                this.calcGridLabels()
            }, calcGridLabels: function () {
                var t, e, i = [], n = [], r = this.coords.big_num;
                for (t = 0; t < r; t++) this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1), this.coords.big_p[t] = this.toFixed(this.coords.big_w[t] / this.coords.w_rs * 100), this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2), i[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t]), n[t] = this.toFixed(i[t] + this.coords.big_p[t]);
                for (this.options.force_edges && (i[0] < -this.coords.grid_gap && (i[0] = -this.coords.grid_gap, n[0] = this.toFixed(i[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), n[r - 1] > 100 + this.coords.grid_gap && (n[r - 1] = 100 + this.coords.grid_gap, i[r - 1] = this.toFixed(n[r - 1] - this.coords.big_p[r - 1]), this.coords.big_x[r - 1] = this.toFixed(this.coords.big_p[r - 1] - this.coords.grid_gap))), this.calcGridCollision(2, i, n), this.calcGridCollision(4, i, n), t = 0; t < r; t++) e = this.$cache.grid_labels[t][0], this.coords.big_x[t] !== Number.POSITIVE_INFINITY && (e.style.marginLeft = -this.coords.big_x[t] + "%")
            }, calcGridCollision: function (t, e, i) {
                var n, r, o, s = this.coords.big_num;
                for (n = 0; n < s && !(s <= (r = n + t / 2)); n += t) o = this.$cache.grid_labels[r][0], i[n] <= e[r] ? o.style.visibility = "visible" : o.style.visibility = "hidden"
            }, calcGridMargin: function () {
                this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && ("single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
            }, update: function (e) {
                this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = t.extend(this.options, e), this.validate(), this.updateResult(e), this.toggleInput(), this.remove(), this.init(!0))
            }, reset: function () {
                this.input && (this.updateResult(), this.update())
            }, destroy: function () {
                this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), t.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null)
            }
        }, t.fn.ionRangeSlider = function (e) {
            return this.each((function () {
                t.data(this, "ionRangeSlider") || t.data(this, "ionRangeSlider", new c(this, e, a++))
            }))
        }, function () {
            for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !i.requestAnimationFrame; ++n) i.requestAnimationFrame = i[e[n] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[n] + "CancelAnimationFrame"] || i[e[n] + "CancelRequestAnimationFrame"];
            i.requestAnimationFrame || (i.requestAnimationFrame = function (e, n) {
                var r = (new Date).getTime(), o = Math.max(0, 16 - (r - t)), s = i.setTimeout((function () {
                    e(r + o)
                }), o);
                return t = r + o, s
            }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function (t) {
                clearTimeout(t)
            })
        }()
    }))
}, function (t, e) {
    (function (e) {
        t.exports = e
    }).call(this, {})
}, function (t, e, i) {
    (function (e) {
        /*!
 * Chart.js v2.9.3
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
        var i;
        i = function () {
            "use strict";

            function t() {
                throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
            }

            function i(t, e) {
                return t(e = {exports: {}}, e.exports), e.exports
            }

            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self;
            var n = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }, r = i((function (t) {
                var e = {};
                for (var i in n) n.hasOwnProperty(i) && (e[n[i]] = i);
                var r = t.exports = {
                    rgb: {channels: 3, labels: "rgb"},
                    hsl: {channels: 3, labels: "hsl"},
                    hsv: {channels: 3, labels: "hsv"},
                    hwb: {channels: 3, labels: "hwb"},
                    cmyk: {channels: 4, labels: "cmyk"},
                    xyz: {channels: 3, labels: "xyz"},
                    lab: {channels: 3, labels: "lab"},
                    lch: {channels: 3, labels: "lch"},
                    hex: {channels: 1, labels: ["hex"]},
                    keyword: {channels: 1, labels: ["keyword"]},
                    ansi16: {channels: 1, labels: ["ansi16"]},
                    ansi256: {channels: 1, labels: ["ansi256"]},
                    hcg: {channels: 3, labels: ["h", "c", "g"]},
                    apple: {channels: 3, labels: ["r16", "g16", "b16"]},
                    gray: {channels: 1, labels: ["gray"]}
                };
                for (var o in r) if (r.hasOwnProperty(o)) {
                    if (!("channels" in r[o])) throw new Error("missing channels property: " + o);
                    if (!("labels" in r[o])) throw new Error("missing channel labels property: " + o);
                    if (r[o].labels.length !== r[o].channels) throw new Error("channel and label counts mismatch: " + o);
                    var s = r[o].channels, a = r[o].labels;
                    delete r[o].channels, delete r[o].labels, Object.defineProperty(r[o], "channels", {value: s}), Object.defineProperty(r[o], "labels", {value: a})
                }
                r.rgb.hsl = function (t) {
                    var e, i, n = t[0] / 255, r = t[1] / 255, o = t[2] / 255, s = Math.min(n, r, o),
                        a = Math.max(n, r, o), l = a - s;
                    return a === s ? e = 0 : n === a ? e = (r - o) / l : r === a ? e = 2 + (o - n) / l : o === a && (e = 4 + (n - r) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (s + a) / 2, [e, 100 * (a === s ? 0 : i <= .5 ? l / (a + s) : l / (2 - a - s)), 100 * i]
                }, r.rgb.hsv = function (t) {
                    var e, i, n, r, o, s = t[0] / 255, a = t[1] / 255, l = t[2] / 255, c = Math.max(s, a, l),
                        u = c - Math.min(s, a, l), h = function (t) {
                            return (c - t) / 6 / u + .5
                        };
                    return 0 === u ? r = o = 0 : (o = u / c, e = h(s), i = h(a), n = h(l), s === c ? r = n - i : a === c ? r = 1 / 3 + e - n : l === c && (r = 2 / 3 + i - e), r < 0 ? r += 1 : r > 1 && (r -= 1)), [360 * r, 100 * o, 100 * c]
                }, r.rgb.hwb = function (t) {
                    var e = t[0], i = t[1], n = t[2];
                    return [r.rgb.hsl(t)[0], 1 / 255 * Math.min(e, Math.min(i, n)) * 100, 100 * (n = 1 - 1 / 255 * Math.max(e, Math.max(i, n)))]
                }, r.rgb.cmyk = function (t) {
                    var e, i = t[0] / 255, n = t[1] / 255, r = t[2] / 255;
                    return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - r))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * e]
                }, r.rgb.keyword = function (t) {
                    var i = e[t];
                    if (i) return i;
                    var r, o, s, a = 1 / 0;
                    for (var l in n) if (n.hasOwnProperty(l)) {
                        var c = n[l],
                            u = (o = t, s = c, Math.pow(o[0] - s[0], 2) + Math.pow(o[1] - s[1], 2) + Math.pow(o[2] - s[2], 2));
                        u < a && (a = u, r = l)
                    }
                    return r
                }, r.keyword.rgb = function (t) {
                    return n[t]
                }, r.rgb.xyz = function (t) {
                    var e = t[0] / 255, i = t[1] / 255, n = t[2] / 255;
                    return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
                }, r.rgb.lab = function (t) {
                    var e = r.rgb.xyz(t), i = e[0], n = e[1], o = e[2];
                    return n /= 100, o /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))]
                }, r.hsl.rgb = function (t) {
                    var e, i, n, r, o, s = t[0] / 360, a = t[1] / 100, l = t[2] / 100;
                    if (0 === a) return [o = 255 * l, o, o];
                    e = 2 * l - (i = l < .5 ? l * (1 + a) : l + a - l * a), r = [0, 0, 0];
                    for (var c = 0; c < 3; c++) (n = s + 1 / 3 * -(c - 1)) < 0 && n++, n > 1 && n--, o = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, r[c] = 255 * o;
                    return r
                }, r.hsl.hsv = function (t) {
                    var e = t[0], i = t[1] / 100, n = t[2] / 100, r = i, o = Math.max(n, .01);
                    return i *= (n *= 2) <= 1 ? n : 2 - n, r *= o <= 1 ? o : 2 - o, [e, 100 * (0 === n ? 2 * r / (o + r) : 2 * i / (n + i)), (n + i) / 2 * 100]
                }, r.hsv.rgb = function (t) {
                    var e = t[0] / 60, i = t[1] / 100, n = t[2] / 100, r = Math.floor(e) % 6, o = e - Math.floor(e),
                        s = 255 * n * (1 - i), a = 255 * n * (1 - i * o), l = 255 * n * (1 - i * (1 - o));
                    switch (n *= 255, r) {
                        case 0:
                            return [n, l, s];
                        case 1:
                            return [a, n, s];
                        case 2:
                            return [s, n, l];
                        case 3:
                            return [s, a, n];
                        case 4:
                            return [l, s, n];
                        case 5:
                            return [n, s, a]
                    }
                }, r.hsv.hsl = function (t) {
                    var e, i, n, r = t[0], o = t[1] / 100, s = t[2] / 100, a = Math.max(s, .01);
                    return n = (2 - o) * s, i = o * a, [r, 100 * (i = (i /= (e = (2 - o) * a) <= 1 ? e : 2 - e) || 0), 100 * (n /= 2)]
                }, r.hwb.rgb = function (t) {
                    var e, i, n, r, o, s, a, l = t[0] / 360, c = t[1] / 100, u = t[2] / 100, h = c + u;
                    switch (h > 1 && (c /= h, u /= h), n = 6 * l - (e = Math.floor(6 * l)), 0 != (1 & e) && (n = 1 - n), r = c + n * ((i = 1 - u) - c), e) {
                        default:
                        case 6:
                        case 0:
                            o = i, s = r, a = c;
                            break;
                        case 1:
                            o = r, s = i, a = c;
                            break;
                        case 2:
                            o = c, s = i, a = r;
                            break;
                        case 3:
                            o = c, s = r, a = i;
                            break;
                        case 4:
                            o = r, s = c, a = i;
                            break;
                        case 5:
                            o = i, s = c, a = r
                    }
                    return [255 * o, 255 * s, 255 * a]
                }, r.cmyk.rgb = function (t) {
                    var e = t[0] / 100, i = t[1] / 100, n = t[2] / 100, r = t[3] / 100;
                    return [255 * (1 - Math.min(1, e * (1 - r) + r)), 255 * (1 - Math.min(1, i * (1 - r) + r)), 255 * (1 - Math.min(1, n * (1 - r) + r))]
                }, r.xyz.rgb = function (t) {
                    var e, i, n, r = t[0] / 100, o = t[1] / 100, s = t[2] / 100;
                    return i = -.9689 * r + 1.8758 * o + .0415 * s, n = .0557 * r + -.204 * o + 1.057 * s, e = (e = 3.2406 * r + -1.5372 * o + -.4986 * s) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
                }, r.xyz.lab = function (t) {
                    var e = t[0], i = t[1], n = t[2];
                    return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
                }, r.lab.xyz = function (t) {
                    var e, i, n, r = t[0];
                    e = t[1] / 500 + (i = (r + 16) / 116), n = i - t[2] / 200;
                    var o = Math.pow(i, 3), s = Math.pow(e, 3), a = Math.pow(n, 3);
                    return i = o > .008856 ? o : (i - 16 / 116) / 7.787, e = s > .008856 ? s : (e - 16 / 116) / 7.787, n = a > .008856 ? a : (n - 16 / 116) / 7.787, [e *= 95.047, i *= 100, n *= 108.883]
                }, r.lab.lch = function (t) {
                    var e, i = t[0], n = t[1], r = t[2];
                    return (e = 360 * Math.atan2(r, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + r * r), e]
                }, r.lch.lab = function (t) {
                    var e, i = t[0], n = t[1];
                    return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
                }, r.rgb.ansi16 = function (t) {
                    var e = t[0], i = t[1], n = t[2], o = 1 in arguments ? arguments[1] : r.rgb.hsv(t)[2];
                    if (0 === (o = Math.round(o / 50))) return 30;
                    var s = 30 + (Math.round(n / 255) << 2 | Math.round(i / 255) << 1 | Math.round(e / 255));
                    return 2 === o && (s += 60), s
                }, r.hsv.ansi16 = function (t) {
                    return r.rgb.ansi16(r.hsv.rgb(t), t[2])
                }, r.rgb.ansi256 = function (t) {
                    var e = t[0], i = t[1], n = t[2];
                    return e === i && i === n ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(i / 255 * 5) + Math.round(n / 255 * 5)
                }, r.ansi16.rgb = function (t) {
                    var e = t % 10;
                    if (0 === e || 7 === e) return t > 50 && (e += 3.5), [e = e / 10.5 * 255, e, e];
                    var i = .5 * (1 + ~~(t > 50));
                    return [(1 & e) * i * 255, (e >> 1 & 1) * i * 255, (e >> 2 & 1) * i * 255]
                }, r.ansi256.rgb = function (t) {
                    if (t >= 232) {
                        var e = 10 * (t - 232) + 8;
                        return [e, e, e]
                    }
                    var i;
                    return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((i = t % 36) / 6) / 5 * 255, i % 6 / 5 * 255]
                }, r.rgb.hex = function (t) {
                    var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
                    return "000000".substring(e.length) + e
                }, r.hex.rgb = function (t) {
                    var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                    if (!e) return [0, 0, 0];
                    var i = e[0];
                    3 === e[0].length && (i = i.split("").map((function (t) {
                        return t + t
                    })).join(""));
                    var n = parseInt(i, 16);
                    return [n >> 16 & 255, n >> 8 & 255, 255 & n]
                }, r.rgb.hcg = function (t) {
                    var e, i = t[0] / 255, n = t[1] / 255, r = t[2] / 255, o = Math.max(Math.max(i, n), r),
                        s = Math.min(Math.min(i, n), r), a = o - s;
                    return e = a <= 0 ? 0 : o === i ? (n - r) / a % 6 : o === n ? 2 + (r - i) / a : 4 + (i - n) / a + 4, e /= 6, [360 * (e %= 1), 100 * a, 100 * (a < 1 ? s / (1 - a) : 0)]
                }, r.hsl.hcg = function (t) {
                    var e = t[1] / 100, i = t[2] / 100, n = 1, r = 0;
                    return (n = i < .5 ? 2 * e * i : 2 * e * (1 - i)) < 1 && (r = (i - .5 * n) / (1 - n)), [t[0], 100 * n, 100 * r]
                }, r.hsv.hcg = function (t) {
                    var e = t[1] / 100, i = t[2] / 100, n = e * i, r = 0;
                    return n < 1 && (r = (i - n) / (1 - n)), [t[0], 100 * n, 100 * r]
                }, r.hcg.rgb = function (t) {
                    var e = t[0] / 360, i = t[1] / 100, n = t[2] / 100;
                    if (0 === i) return [255 * n, 255 * n, 255 * n];
                    var r, o = [0, 0, 0], s = e % 1 * 6, a = s % 1, l = 1 - a;
                    switch (Math.floor(s)) {
                        case 0:
                            o[0] = 1, o[1] = a, o[2] = 0;
                            break;
                        case 1:
                            o[0] = l, o[1] = 1, o[2] = 0;
                            break;
                        case 2:
                            o[0] = 0, o[1] = 1, o[2] = a;
                            break;
                        case 3:
                            o[0] = 0, o[1] = l, o[2] = 1;
                            break;
                        case 4:
                            o[0] = a, o[1] = 0, o[2] = 1;
                            break;
                        default:
                            o[0] = 1, o[1] = 0, o[2] = l
                    }
                    return r = (1 - i) * n, [255 * (i * o[0] + r), 255 * (i * o[1] + r), 255 * (i * o[2] + r)]
                }, r.hcg.hsv = function (t) {
                    var e = t[1] / 100, i = e + t[2] / 100 * (1 - e), n = 0;
                    return i > 0 && (n = e / i), [t[0], 100 * n, 100 * i]
                }, r.hcg.hsl = function (t) {
                    var e = t[1] / 100, i = t[2] / 100 * (1 - e) + .5 * e, n = 0;
                    return i > 0 && i < .5 ? n = e / (2 * i) : i >= .5 && i < 1 && (n = e / (2 * (1 - i))), [t[0], 100 * n, 100 * i]
                }, r.hcg.hwb = function (t) {
                    var e = t[1] / 100, i = e + t[2] / 100 * (1 - e);
                    return [t[0], 100 * (i - e), 100 * (1 - i)]
                }, r.hwb.hcg = function (t) {
                    var e = t[1] / 100, i = 1 - t[2] / 100, n = i - e, r = 0;
                    return n < 1 && (r = (i - n) / (1 - n)), [t[0], 100 * n, 100 * r]
                }, r.apple.rgb = function (t) {
                    return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
                }, r.rgb.apple = function (t) {
                    return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
                }, r.gray.rgb = function (t) {
                    return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
                }, r.gray.hsl = r.gray.hsv = function (t) {
                    return [0, 0, t[0]]
                }, r.gray.hwb = function (t) {
                    return [0, 100, t[0]]
                }, r.gray.cmyk = function (t) {
                    return [0, 0, 0, t[0]]
                }, r.gray.lab = function (t) {
                    return [t[0], 0, 0]
                }, r.gray.hex = function (t) {
                    var e = 255 & Math.round(t[0] / 100 * 255),
                        i = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
                    return "000000".substring(i.length) + i
                }, r.rgb.gray = function (t) {
                    return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]
                }
            }));

            function o(t) {
                var e = function () {
                    for (var t = {}, e = Object.keys(r), i = e.length, n = 0; n < i; n++) t[e[n]] = {
                        distance: -1,
                        parent: null
                    };
                    return t
                }(), i = [t];
                for (e[t].distance = 0; i.length;) for (var n = i.pop(), o = Object.keys(r[n]), s = o.length, a = 0; a < s; a++) {
                    var l = o[a], c = e[l];
                    -1 === c.distance && (c.distance = e[n].distance + 1, c.parent = n, i.unshift(l))
                }
                return e
            }

            function s(t, e) {
                return function (i) {
                    return e(t(i))
                }
            }

            function a(t, e) {
                for (var i = [e[t].parent, t], n = r[e[t].parent][t], o = e[t].parent; e[o].parent;) i.unshift(e[o].parent), n = s(r[e[o].parent][o], n), o = e[o].parent;
                return n.conversion = i, n
            }

            r.rgb, r.hsl, r.hsv, r.hwb, r.cmyk, r.xyz, r.lab, r.lch, r.hex, r.keyword, r.ansi16, r.ansi256, r.hcg, r.apple, r.gray;
            var l = {};
            Object.keys(r).forEach((function (t) {
                l[t] = {}, Object.defineProperty(l[t], "channels", {value: r[t].channels}), Object.defineProperty(l[t], "labels", {value: r[t].labels});
                var e = function (t) {
                    for (var e = o(t), i = {}, n = Object.keys(e), r = n.length, s = 0; s < r; s++) {
                        var l = n[s];
                        null !== e[l].parent && (i[l] = a(l, e))
                    }
                    return i
                }(t);
                Object.keys(e).forEach((function (i) {
                    var n = e[i];
                    l[t][i] = function (t) {
                        var e = function (e) {
                            if (null == e) return e;
                            arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                            var i = t(e);
                            if ("object" == typeof i) for (var n = i.length, r = 0; r < n; r++) i[r] = Math.round(i[r]);
                            return i
                        };
                        return "conversion" in t && (e.conversion = t.conversion), e
                    }(n), l[t][i].raw = function (t) {
                        var e = function (e) {
                            return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e))
                        };
                        return "conversion" in t && (e.conversion = t.conversion), e
                    }(n)
                }))
            }));
            var c = l, u = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }, h = {
                getRgba: d, getHsla: f, getRgb: function (t) {
                    var e = d(t);
                    return e && e.slice(0, 3)
                }, getHsl: function (t) {
                    var e = f(t);
                    return e && e.slice(0, 3)
                }, getHwb: p, getAlpha: function (t) {
                    var e = d(t);
                    return e || (e = f(t)) || (e = p(t)) ? e[3] : void 0
                }, hexString: function (t, e) {
                    return e = void 0 !== e && 3 === t.length ? e : t[3], "#" + _(t[0]) + _(t[1]) + _(t[2]) + (e >= 0 && e < 1 ? _(Math.round(255 * e)) : "")
                }, rgbString: function (t, e) {
                    return e < 1 || t[3] && t[3] < 1 ? g(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                }, rgbaString: g, percentString: function (t, e) {
                    if (e < 1 || t[3] && t[3] < 1) return m(t, e);
                    var i = Math.round(t[0] / 255 * 100), n = Math.round(t[1] / 255 * 100),
                        r = Math.round(t[2] / 255 * 100);
                    return "rgb(" + i + "%, " + n + "%, " + r + "%)"
                }, percentaString: m, hslString: function (t, e) {
                    return e < 1 || t[3] && t[3] < 1 ? v(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                }, hslaString: v, hwbString: function (t, e) {
                    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                }, keyword: function (t) {
                    return b[t.slice(0, 3)]
                }
            };

            function d(t) {
                if (t) {
                    var e = [0, 0, 0], i = 1, n = t.match(/^#([a-fA-F0-9]{3,4})$/i), r = "";
                    if (n) {
                        r = (n = n[1])[3];
                        for (var o = 0; o < e.length; o++) e[o] = parseInt(n[o] + n[o], 16);
                        r && (i = Math.round(parseInt(r + r, 16) / 255 * 100) / 100)
                    } else if (n = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
                        for (r = n[2], n = n[1], o = 0; o < e.length; o++) e[o] = parseInt(n.slice(2 * o, 2 * o + 2), 16);
                        r && (i = Math.round(parseInt(r, 16) / 255 * 100) / 100)
                    } else if (n = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (o = 0; o < e.length; o++) e[o] = parseInt(n[o + 1]);
                        i = parseFloat(n[4])
                    } else if (n = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (o = 0; o < e.length; o++) e[o] = Math.round(2.55 * parseFloat(n[o + 1]));
                        i = parseFloat(n[4])
                    } else if (n = t.match(/(\w+)/)) {
                        if ("transparent" == n[1]) return [0, 0, 0, 0];
                        if (!(e = u[n[1]])) return
                    }
                    for (o = 0; o < e.length; o++) e[o] = y(e[o], 0, 255);
                    return i = i || 0 == i ? y(i, 0, 1) : 1, e[3] = i, e
                }
            }

            function f(t) {
                if (t) {
                    var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        var i = parseFloat(e[4]);
                        return [y(parseInt(e[1]), 0, 360), y(parseFloat(e[2]), 0, 100), y(parseFloat(e[3]), 0, 100), y(isNaN(i) ? 1 : i, 0, 1)]
                    }
                }
            }

            function p(t) {
                if (t) {
                    var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        var i = parseFloat(e[4]);
                        return [y(parseInt(e[1]), 0, 360), y(parseFloat(e[2]), 0, 100), y(parseFloat(e[3]), 0, 100), y(isNaN(i) ? 1 : i, 0, 1)]
                    }
                }
            }

            function g(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }

            function m(t, e) {
                return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
            }

            function v(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }

            function y(t, e, i) {
                return Math.min(Math.max(e, t), i)
            }

            function _(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e
            }

            var b = {};
            for (var w in u) b[u[w]] = w;
            var x = function (t) {
                return t instanceof x ? t : this instanceof x ? (this.valid = !1, this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1
                }, void ("string" == typeof t ? (e = h.getRgba(t)) ? this.setValues("rgb", e) : (e = h.getHsla(t)) ? this.setValues("hsl", e) : (e = h.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new x(t);
                var e
            };
            x.prototype = {
                isValid: function () {
                    return this.valid
                }, rgb: function () {
                    return this.setSpace("rgb", arguments)
                }, hsl: function () {
                    return this.setSpace("hsl", arguments)
                }, hsv: function () {
                    return this.setSpace("hsv", arguments)
                }, hwb: function () {
                    return this.setSpace("hwb", arguments)
                }, cmyk: function () {
                    return this.setSpace("cmyk", arguments)
                }, rgbArray: function () {
                    return this.values.rgb
                }, hslArray: function () {
                    return this.values.hsl
                }, hsvArray: function () {
                    return this.values.hsv
                }, hwbArray: function () {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                }, cmykArray: function () {
                    return this.values.cmyk
                }, rgbaArray: function () {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                }, hslaArray: function () {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                }, alpha: function (t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                }, red: function (t) {
                    return this.setChannel("rgb", 0, t)
                }, green: function (t) {
                    return this.setChannel("rgb", 1, t)
                }, blue: function (t) {
                    return this.setChannel("rgb", 2, t)
                }, hue: function (t) {
                    return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                }, saturation: function (t) {
                    return this.setChannel("hsl", 1, t)
                }, lightness: function (t) {
                    return this.setChannel("hsl", 2, t)
                }, saturationv: function (t) {
                    return this.setChannel("hsv", 1, t)
                }, whiteness: function (t) {
                    return this.setChannel("hwb", 1, t)
                }, blackness: function (t) {
                    return this.setChannel("hwb", 2, t)
                }, value: function (t) {
                    return this.setChannel("hsv", 2, t)
                }, cyan: function (t) {
                    return this.setChannel("cmyk", 0, t)
                }, magenta: function (t) {
                    return this.setChannel("cmyk", 1, t)
                }, yellow: function (t) {
                    return this.setChannel("cmyk", 2, t)
                }, black: function (t) {
                    return this.setChannel("cmyk", 3, t)
                }, hexString: function () {
                    return h.hexString(this.values.rgb)
                }, rgbString: function () {
                    return h.rgbString(this.values.rgb, this.values.alpha)
                }, rgbaString: function () {
                    return h.rgbaString(this.values.rgb, this.values.alpha)
                }, percentString: function () {
                    return h.percentString(this.values.rgb, this.values.alpha)
                }, hslString: function () {
                    return h.hslString(this.values.hsl, this.values.alpha)
                }, hslaString: function () {
                    return h.hslaString(this.values.hsl, this.values.alpha)
                }, hwbString: function () {
                    return h.hwbString(this.values.hwb, this.values.alpha)
                }, keyword: function () {
                    return h.keyword(this.values.rgb, this.values.alpha)
                }, rgbNumber: function () {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                }, luminosity: function () {
                    for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                        var n = t[i] / 255;
                        e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                }, contrast: function (t) {
                    var e = this.luminosity(), i = t.luminosity();
                    return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
                }, level: function (t) {
                    var e = this.contrast(t);
                    return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                }, dark: function () {
                    var t = this.values.rgb;
                    return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                }, light: function () {
                    return !this.dark()
                }, negate: function () {
                    for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this
                }, lighten: function (t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t, this.setValues("hsl", e), this
                }, darken: function (t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t, this.setValues("hsl", e), this
                }, saturate: function (t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t, this.setValues("hsl", e), this
                }, desaturate: function (t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t, this.setValues("hsl", e), this
                }, whiten: function (t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t, this.setValues("hwb", e), this
                }, blacken: function (t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t, this.setValues("hwb", e), this
                }, greyscale: function () {
                    var t = this.values.rgb, e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]), this
                }, clearer: function (t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t), this
                }, opaquer: function (t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t), this
                }, rotate: function (t) {
                    var e = this.values.hsl, i = (e[0] + t) % 360;
                    return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
                }, mix: function (t, e) {
                    var i = t, n = void 0 === e ? .5 : e, r = 2 * n - 1, o = this.alpha() - i.alpha(),
                        s = ((r * o == -1 ? r : (r + o) / (1 + r * o)) + 1) / 2, a = 1 - s;
                    return this.rgb(s * this.red() + a * i.red(), s * this.green() + a * i.green(), s * this.blue() + a * i.blue()).alpha(this.alpha() * n + i.alpha() * (1 - n))
                }, toJSON: function () {
                    return this.rgb()
                }, clone: function () {
                    var t, e, i = new x, n = this.values, r = i.values;
                    for (var o in n) n.hasOwnProperty(o) && (t = n[o], "[object Array]" === (e = {}.toString.call(t)) ? r[o] = t.slice(0) : "[object Number]" === e ? r[o] = t : console.error("unexpected color value:", t));
                    return i
                }
            }, x.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, x.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, x.prototype.getValues = function (t) {
                for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
                return 1 !== e.alpha && (i.a = e.alpha), i
            }, x.prototype.setValues = function (t, e) {
                var i, n, r = this.values, o = this.spaces, s = this.maxes, a = 1;
                if (this.valid = !0, "alpha" === t) a = e; else if (e.length) r[t] = e.slice(0, t.length), a = e[t.length]; else if (void 0 !== e[t.charAt(0)]) {
                    for (i = 0; i < t.length; i++) r[t][i] = e[t.charAt(i)];
                    a = e.a
                } else if (void 0 !== e[o[t][0]]) {
                    var l = o[t];
                    for (i = 0; i < t.length; i++) r[t][i] = e[l[i]];
                    a = e.alpha
                }
                if (r.alpha = Math.max(0, Math.min(1, void 0 === a ? r.alpha : a)), "alpha" === t) return !1;
                for (i = 0; i < t.length; i++) n = Math.max(0, Math.min(s[t][i], r[t][i])), r[t][i] = Math.round(n);
                for (var u in o) u !== t && (r[u] = c[t][u](r[t]));
                return !0
            }, x.prototype.setSpace = function (t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
            }, x.prototype.setChannel = function (t, e, i) {
                var n = this.values[t];
                return void 0 === i ? n[e] : (i === n[e] || (n[e] = i, this.setValues(t, n)), this)
            }, "undefined" != typeof window && (window.Color = x);
            var k, C = x, S = {
                noop: function () {
                }, uid: (k = 0, function () {
                    return k++
                }), isNullOrUndef: function (t) {
                    return null == t
                }, isArray: function (t) {
                    if (Array.isArray && Array.isArray(t)) return !0;
                    var e = Object.prototype.toString.call(t);
                    return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
                }, isObject: function (t) {
                    return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                }, isFinite: function (t) {
                    return ("number" == typeof t || t instanceof Number) && isFinite(t)
                }, valueOrDefault: function (t, e) {
                    return void 0 === t ? e : t
                }, valueAtIndexOrDefault: function (t, e, i) {
                    return S.valueOrDefault(S.isArray(t) ? t[e] : t, i)
                }, callback: function (t, e, i) {
                    if (t && "function" == typeof t.call) return t.apply(i, e)
                }, each: function (t, e, i, n) {
                    var r, o, s;
                    if (S.isArray(t)) if (o = t.length, n) for (r = o - 1; r >= 0; r--) e.call(i, t[r], r); else for (r = 0; r < o; r++) e.call(i, t[r], r); else if (S.isObject(t)) for (o = (s = Object.keys(t)).length, r = 0; r < o; r++) e.call(i, t[s[r]], s[r])
                }, arrayEquals: function (t, e) {
                    var i, n, r, o;
                    if (!t || !e || t.length !== e.length) return !1;
                    for (i = 0, n = t.length; i < n; ++i) if (r = t[i], o = e[i], r instanceof Array && o instanceof Array) {
                        if (!S.arrayEquals(r, o)) return !1
                    } else if (r !== o) return !1;
                    return !0
                }, clone: function (t) {
                    if (S.isArray(t)) return t.map(S.clone);
                    if (S.isObject(t)) {
                        for (var e = {}, i = Object.keys(t), n = i.length, r = 0; r < n; ++r) e[i[r]] = S.clone(t[i[r]]);
                        return e
                    }
                    return t
                }, _merger: function (t, e, i, n) {
                    var r = e[t], o = i[t];
                    S.isObject(r) && S.isObject(o) ? S.merge(r, o, n) : e[t] = S.clone(o)
                }, _mergerIf: function (t, e, i) {
                    var n = e[t], r = i[t];
                    S.isObject(n) && S.isObject(r) ? S.mergeIf(n, r) : e.hasOwnProperty(t) || (e[t] = S.clone(r))
                }, merge: function (t, e, i) {
                    var n, r, o, s, a, l = S.isArray(e) ? e : [e], c = l.length;
                    if (!S.isObject(t)) return t;
                    for (n = (i = i || {}).merger || S._merger, r = 0; r < c; ++r) if (e = l[r], S.isObject(e)) for (a = 0, s = (o = Object.keys(e)).length; a < s; ++a) n(o[a], t, e, i);
                    return t
                }, mergeIf: function (t, e) {
                    return S.merge(t, e, {merger: S._mergerIf})
                }, extend: Object.assign || function (t) {
                    return S.merge(t, [].slice.call(arguments, 1), {
                        merger: function (t, e, i) {
                            e[t] = i[t]
                        }
                    })
                }, inherits: function (t) {
                    var e = this, i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                        return e.apply(this, arguments)
                    }, n = function () {
                        this.constructor = i
                    };
                    return n.prototype = e.prototype, i.prototype = new n, i.extend = S.inherits, t && S.extend(i.prototype, t), i.__super__ = e.prototype, i
                }, _deprecated: function (t, e, i, n) {
                    void 0 !== e && console.warn(t + ': "' + i + '" is deprecated. Please use "' + n + '" instead')
                }
            }, T = S;
            S.callCallback = S.callback, S.indexOf = function (t, e, i) {
                return Array.prototype.indexOf.call(t, e, i)
            }, S.getValueOrDefault = S.valueOrDefault, S.getValueAtIndexOrDefault = S.valueAtIndexOrDefault;
            var M = {
                linear: function (t) {
                    return t
                }, easeInQuad: function (t) {
                    return t * t
                }, easeOutQuad: function (t) {
                    return -t * (t - 2)
                }, easeInOutQuad: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                }, easeInCubic: function (t) {
                    return t * t * t
                }, easeOutCubic: function (t) {
                    return (t -= 1) * t * t + 1
                }, easeInOutCubic: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                }, easeInQuart: function (t) {
                    return t * t * t * t
                }, easeOutQuart: function (t) {
                    return -((t -= 1) * t * t * t - 1)
                }, easeInOutQuart: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                }, easeInQuint: function (t) {
                    return t * t * t * t * t
                }, easeOutQuint: function (t) {
                    return (t -= 1) * t * t * t * t + 1
                }, easeInOutQuint: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                }, easeInSine: function (t) {
                    return 1 - Math.cos(t * (Math.PI / 2))
                }, easeOutSine: function (t) {
                    return Math.sin(t * (Math.PI / 2))
                }, easeInOutSine: function (t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                }, easeInExpo: function (t) {
                    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                }, easeOutExpo: function (t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                }, easeInOutExpo: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                }, easeInCirc: function (t) {
                    return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
                }, easeOutCirc: function (t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }, easeInOutCirc: function (t) {
                    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                }, easeInElastic: function (t) {
                    var e = 1.70158, i = 0, n = 1;
                    return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i))
                }, easeOutElastic: function (t) {
                    var e = 1.70158, i = 0, n = 1;
                    return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
                }, easeInOutElastic: function (t) {
                    var e = 1.70158, i = 0, n = 1;
                    return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
                }, easeInBack: function (t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                }, easeOutBack: function (t) {
                    var e = 1.70158;
                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                }, easeInOutBack: function (t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                }, easeInBounce: function (t) {
                    return 1 - M.easeOutBounce(1 - t)
                }, easeOutBounce: function (t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }, easeInOutBounce: function (t) {
                    return t < .5 ? .5 * M.easeInBounce(2 * t) : .5 * M.easeOutBounce(2 * t - 1) + .5
                }
            }, D = {effects: M};
            T.easingEffects = M;
            var O = Math.PI, E = O / 180, P = 2 * O, A = O / 2, I = O / 4, j = 2 * O / 3, N = {
                clear: function (t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                }, roundedRect: function (t, e, i, n, r, o) {
                    if (o) {
                        var s = Math.min(o, r / 2, n / 2), a = e + s, l = i + s, c = e + n - s, u = i + r - s;
                        t.moveTo(e, l), a < c && l < u ? (t.arc(a, l, s, -O, -A), t.arc(c, l, s, -A, 0), t.arc(c, u, s, 0, A), t.arc(a, u, s, A, O)) : a < c ? (t.moveTo(a, i), t.arc(c, l, s, -A, A), t.arc(a, l, s, A, O + A)) : l < u ? (t.arc(a, l, s, -O, 0), t.arc(a, u, s, 0, O)) : t.arc(a, l, s, -O, O), t.closePath(), t.moveTo(e, i)
                    } else t.rect(e, i, n, r)
                }, drawPoint: function (t, e, i, n, r, o) {
                    var s, a, l, c, u, h = (o || 0) * E;
                    if (e && "object" == typeof e && ("[object HTMLImageElement]" === (s = e.toString()) || "[object HTMLCanvasElement]" === s)) return t.save(), t.translate(n, r), t.rotate(h), t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), void t.restore();
                    if (!(isNaN(i) || i <= 0)) {
                        switch (t.beginPath(), e) {
                            default:
                                t.arc(n, r, i, 0, P), t.closePath();
                                break;
                            case"triangle":
                                t.moveTo(n + Math.sin(h) * i, r - Math.cos(h) * i), h += j, t.lineTo(n + Math.sin(h) * i, r - Math.cos(h) * i), h += j, t.lineTo(n + Math.sin(h) * i, r - Math.cos(h) * i), t.closePath();
                                break;
                            case"rectRounded":
                                c = i - (u = .516 * i), a = Math.cos(h + I) * c, l = Math.sin(h + I) * c, t.arc(n - a, r - l, u, h - O, h - A), t.arc(n + l, r - a, u, h - A, h), t.arc(n + a, r + l, u, h, h + A), t.arc(n - l, r + a, u, h + A, h + O), t.closePath();
                                break;
                            case"rect":
                                if (!o) {
                                    c = Math.SQRT1_2 * i, t.rect(n - c, r - c, 2 * c, 2 * c);
                                    break
                                }
                                h += I;
                            case"rectRot":
                                a = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - a, r - l), t.lineTo(n + l, r - a), t.lineTo(n + a, r + l), t.lineTo(n - l, r + a), t.closePath();
                                break;
                            case"crossRot":
                                h += I;
                            case"cross":
                                a = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - a, r - l), t.lineTo(n + a, r + l), t.moveTo(n + l, r - a), t.lineTo(n - l, r + a);
                                break;
                            case"star":
                                a = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - a, r - l), t.lineTo(n + a, r + l), t.moveTo(n + l, r - a), t.lineTo(n - l, r + a), h += I, a = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - a, r - l), t.lineTo(n + a, r + l), t.moveTo(n + l, r - a), t.lineTo(n - l, r + a);
                                break;
                            case"line":
                                a = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - a, r - l), t.lineTo(n + a, r + l);
                                break;
                            case"dash":
                                t.moveTo(n, r), t.lineTo(n + Math.cos(h) * i, r + Math.sin(h) * i)
                        }
                        t.fill(), t.stroke()
                    }
                }, _isPointInArea: function (t, e) {
                    return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6
                }, clipArea: function (t, e) {
                    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                }, unclipArea: function (t) {
                    t.restore()
                }, lineTo: function (t, e, i, n) {
                    var r = i.steppedLine;
                    if (r) {
                        if ("middle" === r) {
                            var o = (e.x + i.x) / 2;
                            t.lineTo(o, n ? i.y : e.y), t.lineTo(o, n ? e.y : i.y)
                        } else "after" === r && !n || "after" !== r && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
                        t.lineTo(i.x, i.y)
                    } else i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
                }
            }, F = N;
            T.clear = N.clear, T.drawRoundedRectangle = function (t) {
                t.beginPath(), N.roundedRect.apply(N, arguments)
            };
            var L = {
                _set: function (t, e) {
                    return T.merge(this[t] || (this[t] = {}), e)
                }
            };
            L._set("global", {
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                defaultLineHeight: 1.2,
                showLines: !0
            });
            var R = L, $ = T.valueOrDefault, z = {
                toLineHeight: function (t, e) {
                    var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!i || "normal" === i[1]) return 1.2 * e;
                    switch (t = +i[2], i[3]) {
                        case"px":
                            return t;
                        case"%":
                            t /= 100
                    }
                    return e * t
                }, toPadding: function (t) {
                    var e, i, n, r;
                    return T.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, n = +t.bottom || 0, r = +t.left || 0) : e = i = n = r = +t || 0, {
                        top: e,
                        right: i,
                        bottom: n,
                        left: r,
                        height: e + n,
                        width: r + i
                    }
                }, _parseFont: function (t) {
                    var e = R.global, i = $(t.fontSize, e.defaultFontSize), n = {
                        family: $(t.fontFamily, e.defaultFontFamily),
                        lineHeight: T.options.toLineHeight($(t.lineHeight, e.defaultLineHeight), i),
                        size: i,
                        style: $(t.fontStyle, e.defaultFontStyle),
                        weight: null,
                        string: ""
                    };
                    return n.string = function (t) {
                        return !t || T.isNullOrUndef(t.size) || T.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
                    }(n), n
                }, resolve: function (t, e, i, n) {
                    var r, o, s, a = !0;
                    for (r = 0, o = t.length; r < o; ++r) if (void 0 !== (s = t[r]) && (void 0 !== e && "function" == typeof s && (s = s(e), a = !1), void 0 !== i && T.isArray(s) && (s = s[i], a = !1), void 0 !== s)) return n && !a && (n.cacheable = !1), s
                }
            }, W = {
                _factorize: function (t) {
                    var e, i = [], n = Math.sqrt(t);
                    for (e = 1; e < n; e++) t % e == 0 && (i.push(e), i.push(t / e));
                    return n === (0 | n) && i.push(n), i.sort((function (t, e) {
                        return t - e
                    })).pop(), i
                }, log10: Math.log10 || function (t) {
                    var e = Math.log(t) * Math.LOG10E, i = Math.round(e);
                    return t === Math.pow(10, i) ? i : e
                }
            }, H = W;
            T.log10 = W.log10;
            var B = T, V = D, Y = F, q = z, U = H, G = {
                getRtlAdapter: function (t, e, i) {
                    return t ? function (t, e) {
                        return {
                            x: function (i) {
                                return t + t + e - i
                            }, setWidth: function (t) {
                                e = t
                            }, textAlign: function (t) {
                                return "center" === t ? t : "right" === t ? "left" : "right"
                            }, xPlus: function (t, e) {
                                return t - e
                            }, leftForLtr: function (t, e) {
                                return t - e
                            }
                        }
                    }(e, i) : {
                        x: function (t) {
                            return t
                        }, setWidth: function (t) {
                        }, textAlign: function (t) {
                            return t
                        }, xPlus: function (t, e) {
                            return t + e
                        }, leftForLtr: function (t, e) {
                            return t
                        }
                    }
                }, overrideTextDirection: function (t, e) {
                    var i, n;
                    "ltr" !== e && "rtl" !== e || (n = [(i = t.canvas.style).getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = n)
                }, restoreTextDirection: function (t) {
                    var e = t.prevTextDirection;
                    void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
                }
            };
            B.easing = V, B.canvas = Y, B.options = q, B.math = U, B.rtl = G;
            var Q = function (t) {
                B.extend(this, t), this.initialize.apply(this, arguments)
            };
            B.extend(Q.prototype, {
                _type: void 0, initialize: function () {
                    this.hidden = !1
                }, pivot: function () {
                    var t = this;
                    return t._view || (t._view = B.extend({}, t._model)), t._start = {}, t
                }, transition: function (t) {
                    var e = this, i = e._model, n = e._start, r = e._view;
                    return i && 1 !== t ? (r || (r = e._view = {}), n || (n = e._start = {}), function (t, e, i, n) {
                        var r, o, s, a, l, c, u, h, d, f = Object.keys(i);
                        for (r = 0, o = f.length; r < o; ++r) if (c = i[s = f[r]], e.hasOwnProperty(s) || (e[s] = c), (a = e[s]) !== c && "_" !== s[0]) {
                            if (t.hasOwnProperty(s) || (t[s] = a), (u = typeof c) == typeof (l = t[s])) if ("string" === u) {
                                if ((h = C(l)).valid && (d = C(c)).valid) {
                                    e[s] = d.mix(h, n).rgbString();
                                    continue
                                }
                            } else if (B.isFinite(l) && B.isFinite(c)) {
                                e[s] = l + (c - l) * n;
                                continue
                            }
                            e[s] = c
                        }
                    }(n, r, i, t), e) : (e._view = B.extend({}, i), e._start = null, e)
                }, tooltipPosition: function () {
                    return {x: this._model.x, y: this._model.y}
                }, hasValue: function () {
                    return B.isNumber(this._model.x) && B.isNumber(this._model.y)
                }
            }), Q.extend = B.inherits;
            var X = Q, Z = X.extend({
                chart: null,
                currentStep: 0,
                numSteps: 60,
                easing: "",
                render: null,
                onAnimationProgress: null,
                onAnimationComplete: null
            }), K = Z;
            Object.defineProperty(Z.prototype, "animationObject", {
                get: function () {
                    return this
                }
            }), Object.defineProperty(Z.prototype, "chartInstance", {
                get: function () {
                    return this.chart
                }, set: function (t) {
                    this.chart = t
                }
            }), R._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: B.noop,
                    onComplete: B.noop
                }
            });
            var J = {
                animations: [], request: null, addAnimation: function (t, e, i, n) {
                    var r, o, s = this.animations;
                    for (e.chart = t, e.startTime = Date.now(), e.duration = i, n || (t.animating = !0), r = 0, o = s.length; r < o; ++r) if (s[r].chart === t) return void (s[r] = e);
                    s.push(e), 1 === s.length && this.requestAnimationFrame()
                }, cancelAnimation: function (t) {
                    var e = B.findIndex(this.animations, (function (e) {
                        return e.chart === t
                    }));
                    -1 !== e && (this.animations.splice(e, 1), t.animating = !1)
                }, requestAnimationFrame: function () {
                    var t = this;
                    null === t.request && (t.request = B.requestAnimFrame.call(window, (function () {
                        t.request = null, t.startDigest()
                    })))
                }, startDigest: function () {
                    this.advance(), this.animations.length > 0 && this.requestAnimationFrame()
                }, advance: function () {
                    for (var t, e, i, n, r = this.animations, o = 0; o < r.length;) e = (t = r[o]).chart, i = t.numSteps, n = Math.floor((Date.now() - t.startTime) / t.duration * i) + 1, t.currentStep = Math.min(n, i), B.callback(t.render, [e, t], e), B.callback(t.onAnimationProgress, [t], e), t.currentStep >= i ? (B.callback(t.onAnimationComplete, [t], e), e.animating = !1, r.splice(o, 1)) : ++o
                }
            }, tt = B.options.resolve, et = ["push", "pop", "shift", "splice", "unshift"];

            function it(t, e) {
                var i = t._chartjs;
                if (i) {
                    var n = i.listeners, r = n.indexOf(e);
                    -1 !== r && n.splice(r, 1), n.length > 0 || (et.forEach((function (e) {
                        delete t[e]
                    })), delete t._chartjs)
                }
            }

            var nt = function (t, e) {
                this.initialize(t, e)
            };
            B.extend(nt.prototype, {
                datasetElementType: null,
                dataElementType: null,
                _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
                _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
                initialize: function (t, e) {
                    var i = this;
                    i.chart = t, i.index = e, i.linkScales(), i.addElements(), i._type = i.getMeta().type
                },
                updateIndex: function (t) {
                    this.index = t
                },
                linkScales: function () {
                    var t = this.getMeta(), e = this.chart, i = e.scales, n = this.getDataset(), r = e.options.scales;
                    null !== t.xAxisID && t.xAxisID in i && !n.xAxisID || (t.xAxisID = n.xAxisID || r.xAxes[0].id), null !== t.yAxisID && t.yAxisID in i && !n.yAxisID || (t.yAxisID = n.yAxisID || r.yAxes[0].id)
                },
                getDataset: function () {
                    return this.chart.data.datasets[this.index]
                },
                getMeta: function () {
                    return this.chart.getDatasetMeta(this.index)
                },
                getScaleForId: function (t) {
                    return this.chart.scales[t]
                },
                _getValueScaleId: function () {
                    return this.getMeta().yAxisID
                },
                _getIndexScaleId: function () {
                    return this.getMeta().xAxisID
                },
                _getValueScale: function () {
                    return this.getScaleForId(this._getValueScaleId())
                },
                _getIndexScale: function () {
                    return this.getScaleForId(this._getIndexScaleId())
                },
                reset: function () {
                    this._update(!0)
                },
                destroy: function () {
                    this._data && it(this._data, this)
                },
                createMetaDataset: function () {
                    var t = this.datasetElementType;
                    return t && new t({_chart: this.chart, _datasetIndex: this.index})
                },
                createMetaData: function (t) {
                    var e = this.dataElementType;
                    return e && new e({_chart: this.chart, _datasetIndex: this.index, _index: t})
                },
                addElements: function () {
                    var t, e, i = this.getMeta(), n = this.getDataset().data || [], r = i.data;
                    for (t = 0, e = n.length; t < e; ++t) r[t] = r[t] || this.createMetaData(t);
                    i.dataset = i.dataset || this.createMetaDataset()
                },
                addElementAndReset: function (t) {
                    var e = this.createMetaData(t);
                    this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                },
                buildOrUpdateElements: function () {
                    var t, e, i = this, n = i.getDataset(), r = n.data || (n.data = []);
                    i._data !== r && (i._data && it(i._data, i), r && Object.isExtensible(r) && (e = i, (t = r)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                        configurable: !0,
                        enumerable: !1,
                        value: {listeners: [e]}
                    }), et.forEach((function (e) {
                        var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1), n = t[e];
                        Object.defineProperty(t, e, {
                            configurable: !0, enumerable: !1, value: function () {
                                var e = Array.prototype.slice.call(arguments), r = n.apply(this, e);
                                return B.each(t._chartjs.listeners, (function (t) {
                                    "function" == typeof t[i] && t[i].apply(t, e)
                                })), r
                            }
                        })
                    })))), i._data = r), i.resyncElements()
                },
                _configure: function () {
                    this._config = B.merge({}, [this.chart.options.datasets[this._type], this.getDataset()], {
                        merger: function (t, e, i) {
                            "_meta" !== t && "data" !== t && B._merger(t, e, i)
                        }
                    })
                },
                _update: function (t) {
                    this._configure(), this._cachedDataOpts = null, this.update(t)
                },
                update: B.noop,
                transition: function (t) {
                    for (var e = this.getMeta(), i = e.data || [], n = i.length, r = 0; r < n; ++r) i[r].transition(t);
                    e.dataset && e.dataset.transition(t)
                },
                draw: function () {
                    var t = this.getMeta(), e = t.data || [], i = e.length, n = 0;
                    for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
                },
                getStyle: function (t) {
                    var e, i = this.getMeta(), n = i.dataset;
                    return this._configure(), n && void 0 === t ? e = this._resolveDatasetElementOptions(n || {}) : (t = t || 0, e = this._resolveDataElementOptions(i.data[t] || {}, t)), !1 !== e.fill && null !== e.fill || (e.backgroundColor = e.borderColor), e
                },
                _resolveDatasetElementOptions: function (t, e) {
                    var i, n, r, o, s = this, a = s.chart, l = s._config, c = t.custom || {},
                        u = a.options.elements[s.datasetElementType.prototype._type] || {},
                        h = s._datasetElementOptions, d = {},
                        f = {chart: a, dataset: s.getDataset(), datasetIndex: s.index, hover: e};
                    for (i = 0, n = h.length; i < n; ++i) r = h[i], o = e ? "hover" + r.charAt(0).toUpperCase() + r.slice(1) : r, d[r] = tt([c[o], l[o], u[o]], f);
                    return d
                },
                _resolveDataElementOptions: function (t, e) {
                    var i = this, n = t && t.custom, r = i._cachedDataOpts;
                    if (r && !n) return r;
                    var o, s, a, l, c = i.chart, u = i._config,
                        h = c.options.elements[i.dataElementType.prototype._type] || {}, d = i._dataElementOptions,
                        f = {}, p = {chart: c, dataIndex: e, dataset: i.getDataset(), datasetIndex: i.index},
                        g = {cacheable: !n};
                    if (n = n || {}, B.isArray(d)) for (s = 0, a = d.length; s < a; ++s) f[l = d[s]] = tt([n[l], u[l], h[l]], p, e, g); else for (s = 0, a = (o = Object.keys(d)).length; s < a; ++s) f[l = o[s]] = tt([n[l], u[d[l]], u[l], h[l]], p, e, g);
                    return g.cacheable && (i._cachedDataOpts = Object.freeze(f)), f
                },
                removeHoverStyle: function (t) {
                    B.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
                },
                setHoverStyle: function (t) {
                    var e = this.chart.data.datasets[t._datasetIndex], i = t._index, n = t.custom || {}, r = t._model,
                        o = B.getHoverColor;
                    t.$previousStyle = {
                        backgroundColor: r.backgroundColor,
                        borderColor: r.borderColor,
                        borderWidth: r.borderWidth
                    }, r.backgroundColor = tt([n.hoverBackgroundColor, e.hoverBackgroundColor, o(r.backgroundColor)], void 0, i), r.borderColor = tt([n.hoverBorderColor, e.hoverBorderColor, o(r.borderColor)], void 0, i), r.borderWidth = tt([n.hoverBorderWidth, e.hoverBorderWidth, r.borderWidth], void 0, i)
                },
                _removeDatasetHoverStyle: function () {
                    var t = this.getMeta().dataset;
                    t && this.removeHoverStyle(t)
                },
                _setDatasetHoverStyle: function () {
                    var t, e, i, n, r, o, s = this.getMeta().dataset, a = {};
                    if (s) {
                        for (o = s._model, r = this._resolveDatasetElementOptions(s, !0), t = 0, e = (n = Object.keys(r)).length; t < e; ++t) a[i = n[t]] = o[i], o[i] = r[i];
                        s.$previousStyle = a
                    }
                },
                resyncElements: function () {
                    var t = this.getMeta(), e = this.getDataset().data, i = t.data.length, n = e.length;
                    n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i)
                },
                insertElements: function (t, e) {
                    for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
                },
                onDataPush: function () {
                    var t = arguments.length;
                    this.insertElements(this.getDataset().data.length - t, t)
                },
                onDataPop: function () {
                    this.getMeta().data.pop()
                },
                onDataShift: function () {
                    this.getMeta().data.shift()
                },
                onDataSplice: function (t, e) {
                    this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                },
                onDataUnshift: function () {
                    this.insertElements(0, arguments.length)
                }
            }), nt.extend = B.inherits;
            var rt = nt, ot = 2 * Math.PI;

            function st(t, e) {
                var i = e.startAngle, n = e.endAngle, r = e.pixelMargin, o = r / e.outerRadius, s = e.x, a = e.y;
                t.beginPath(), t.arc(s, a, e.outerRadius, i - o, n + o), e.innerRadius > r ? (o = r / e.innerRadius, t.arc(s, a, e.innerRadius - r, n + o, i - o, !0)) : t.arc(s, a, r, n + Math.PI / 2, i - Math.PI / 2), t.closePath(), t.clip()
            }

            function at(t, e, i) {
                var n = "inner" === e.borderAlign;
                n ? (t.lineWidth = 2 * e.borderWidth, t.lineJoin = "round") : (t.lineWidth = e.borderWidth, t.lineJoin = "bevel"), i.fullCircles && function (t, e, i, n) {
                    var r, o = i.endAngle;
                    for (n && (i.endAngle = i.startAngle + ot, st(t, i), i.endAngle = o, i.endAngle === i.startAngle && i.fullCircles && (i.endAngle += ot, i.fullCircles--)), t.beginPath(), t.arc(i.x, i.y, i.innerRadius, i.startAngle + ot, i.startAngle, !0), r = 0; r < i.fullCircles; ++r) t.stroke();
                    for (t.beginPath(), t.arc(i.x, i.y, e.outerRadius, i.startAngle, i.startAngle + ot), r = 0; r < i.fullCircles; ++r) t.stroke()
                }(t, e, i, n), n && st(t, i), t.beginPath(), t.arc(i.x, i.y, e.outerRadius, i.startAngle, i.endAngle), t.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0), t.closePath(), t.stroke()
            }

            R._set("global", {
                elements: {
                    arc: {
                        backgroundColor: R.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2,
                        borderAlign: "center"
                    }
                }
            });
            var lt = X.extend({
                _type: "arc", inLabelRange: function (t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                }, inRange: function (t, e) {
                    var i = this._view;
                    if (i) {
                        for (var n = B.getAngleFromPoint(i, {
                            x: t,
                            y: e
                        }), r = n.angle, o = n.distance, s = i.startAngle, a = i.endAngle; a < s;) a += ot;
                        for (; r > a;) r -= ot;
                        for (; r < s;) r += ot;
                        var l = r >= s && r <= a, c = o >= i.innerRadius && o <= i.outerRadius;
                        return l && c
                    }
                    return !1
                }, getCenterPoint: function () {
                    var t = this._view, e = (t.startAngle + t.endAngle) / 2, i = (t.innerRadius + t.outerRadius) / 2;
                    return {x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i}
                }, getArea: function () {
                    var t = this._view;
                    return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                }, tooltipPosition: function () {
                    var t = this._view, e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                        i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                    return {x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i}
                }, draw: function () {
                    var t, e = this._chart.ctx, i = this._view, n = "inner" === i.borderAlign ? .33 : 0, r = {
                        x: i.x,
                        y: i.y,
                        innerRadius: i.innerRadius,
                        outerRadius: Math.max(i.outerRadius - n, 0),
                        pixelMargin: n,
                        startAngle: i.startAngle,
                        endAngle: i.endAngle,
                        fullCircles: Math.floor(i.circumference / ot)
                    };
                    if (e.save(), e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, r.fullCircles) {
                        for (r.endAngle = r.startAngle + ot, e.beginPath(), e.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), e.closePath(), t = 0; t < r.fullCircles; ++t) e.fill();
                        r.endAngle = r.startAngle + i.circumference % ot
                    }
                    e.beginPath(), e.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), e.closePath(), e.fill(), i.borderWidth && at(e, i, r), e.restore()
                }
            }), ct = B.valueOrDefault, ut = R.global.defaultColor;
            R._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: ut,
                        borderWidth: 3,
                        borderColor: ut,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            });
            var ht = X.extend({
                _type: "line", draw: function () {
                    var t, e, i, n = this, r = n._view, o = n._chart.ctx, s = r.spanGaps, a = n._children.slice(),
                        l = R.global, c = l.elements.line, u = -1, h = n._loop;
                    if (a.length) {
                        if (n._loop) {
                            for (t = 0; t < a.length; ++t) if (e = B.previousItem(a, t), !a[t]._view.skip && e._view.skip) {
                                a = a.slice(t).concat(a.slice(0, t)), h = s;
                                break
                            }
                            h && a.push(a[0])
                        }
                        for (o.save(), o.lineCap = r.borderCapStyle || c.borderCapStyle, o.setLineDash && o.setLineDash(r.borderDash || c.borderDash), o.lineDashOffset = ct(r.borderDashOffset, c.borderDashOffset), o.lineJoin = r.borderJoinStyle || c.borderJoinStyle, o.lineWidth = ct(r.borderWidth, c.borderWidth), o.strokeStyle = r.borderColor || l.defaultColor, o.beginPath(), (i = a[0]._view).skip || (o.moveTo(i.x, i.y), u = 0), t = 1; t < a.length; ++t) i = a[t]._view, e = -1 === u ? B.previousItem(a, t) : a[u], i.skip || (u !== t - 1 && !s || -1 === u ? o.moveTo(i.x, i.y) : B.canvas.lineTo(o, e._view, i), u = t);
                        h && o.closePath(), o.stroke(), o.restore()
                    }
                }
            }), dt = B.valueOrDefault, ft = R.global.defaultColor;

            function pt(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
            }

            R._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: ft,
                        borderColor: ft,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            });
            var gt = X.extend({
                _type: "point", inRange: function (t, e) {
                    var i = this._view;
                    return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
                }, inLabelRange: pt, inXRange: pt, inYRange: function (t) {
                    var e = this._view;
                    return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
                }, getCenterPoint: function () {
                    var t = this._view;
                    return {x: t.x, y: t.y}
                }, getArea: function () {
                    return Math.PI * Math.pow(this._view.radius, 2)
                }, tooltipPosition: function () {
                    var t = this._view;
                    return {x: t.x, y: t.y, padding: t.radius + t.borderWidth}
                }, draw: function (t) {
                    var e = this._view, i = this._chart.ctx, n = e.pointStyle, r = e.rotation, o = e.radius, s = e.x,
                        a = e.y, l = R.global, c = l.defaultColor;
                    e.skip || (void 0 === t || B.canvas._isPointInArea(e, t)) && (i.strokeStyle = e.borderColor || c, i.lineWidth = dt(e.borderWidth, l.elements.point.borderWidth), i.fillStyle = e.backgroundColor || c, B.canvas.drawPoint(i, n, o, s, a, r))
                }
            }), mt = R.global.defaultColor;

            function vt(t) {
                return t && void 0 !== t.width
            }

            function yt(t) {
                var e, i, n, r, o;
                return vt(t) ? (o = t.width / 2, e = t.x - o, i = t.x + o, n = Math.min(t.y, t.base), r = Math.max(t.y, t.base)) : (o = t.height / 2, e = Math.min(t.x, t.base), i = Math.max(t.x, t.base), n = t.y - o, r = t.y + o), {
                    left: e,
                    top: n,
                    right: i,
                    bottom: r
                }
            }

            function _t(t, e, i) {
                return t === e ? i : t === i ? e : t
            }

            function bt(t, e, i) {
                var n, r, o, s, a = t.borderWidth, l = function (t) {
                    var e = t.borderSkipped, i = {};
                    return e ? (t.horizontal ? t.base > t.x && (e = _t(e, "left", "right")) : t.base < t.y && (e = _t(e, "bottom", "top")), i[e] = !0, i) : i
                }(t);
                return B.isObject(a) ? (n = +a.top || 0, r = +a.right || 0, o = +a.bottom || 0, s = +a.left || 0) : n = r = o = s = +a || 0, {
                    t: l.top || n < 0 ? 0 : n > i ? i : n,
                    r: l.right || r < 0 ? 0 : r > e ? e : r,
                    b: l.bottom || o < 0 ? 0 : o > i ? i : o,
                    l: l.left || s < 0 ? 0 : s > e ? e : s
                }
            }

            function wt(t, e, i) {
                var n = null === e, r = null === i, o = !(!t || n && r) && yt(t);
                return o && (n || e >= o.left && e <= o.right) && (r || i >= o.top && i <= o.bottom)
            }

            R._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: mt,
                        borderColor: mt,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            });
            var xt = X.extend({
                _type: "rectangle", draw: function () {
                    var t = this._chart.ctx, e = this._view, i = function (t) {
                        var e = yt(t), i = e.right - e.left, n = e.bottom - e.top, r = bt(t, i / 2, n / 2);
                        return {
                            outer: {x: e.left, y: e.top, w: i, h: n},
                            inner: {x: e.left + r.l, y: e.top + r.t, w: i - r.l - r.r, h: n - r.t - r.b}
                        }
                    }(e), n = i.outer, r = i.inner;
                    t.fillStyle = e.backgroundColor, t.fillRect(n.x, n.y, n.w, n.h), n.w === r.w && n.h === r.h || (t.save(), t.beginPath(), t.rect(n.x, n.y, n.w, n.h), t.clip(), t.fillStyle = e.borderColor, t.rect(r.x, r.y, r.w, r.h), t.fill("evenodd"), t.restore())
                }, height: function () {
                    var t = this._view;
                    return t.base - t.y
                }, inRange: function (t, e) {
                    return wt(this._view, t, e)
                }, inLabelRange: function (t, e) {
                    var i = this._view;
                    return vt(i) ? wt(i, t, null) : wt(i, null, e)
                }, inXRange: function (t) {
                    return wt(this._view, t, null)
                }, inYRange: function (t) {
                    return wt(this._view, null, t)
                }, getCenterPoint: function () {
                    var t, e, i = this._view;
                    return vt(i) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {x: t, y: e}
                }, getArea: function () {
                    var t = this._view;
                    return vt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
                }, tooltipPosition: function () {
                    var t = this._view;
                    return {x: t.x, y: t.y}
                }
            }), kt = {}, Ct = lt, St = ht, Tt = gt, Mt = xt;
            kt.Arc = Ct, kt.Line = St, kt.Point = Tt, kt.Rectangle = Mt;
            var Dt = B._deprecated, Ot = B.valueOrDefault;

            function Et(t, e, i) {
                var n, r, o = i.barThickness, s = e.stackCount, a = e.pixels[t],
                    l = B.isNullOrUndef(o) ? function (t, e) {
                        var i, n, r, o, s = t._length;
                        for (r = 1, o = e.length; r < o; ++r) s = Math.min(s, Math.abs(e[r] - e[r - 1]));
                        for (r = 0, o = t.getTicks().length; r < o; ++r) n = t.getPixelForTick(r), s = r > 0 ? Math.min(s, Math.abs(n - i)) : s, i = n;
                        return s
                    }(e.scale, e.pixels) : -1;
                return B.isNullOrUndef(o) ? (n = l * i.categoryPercentage, r = i.barPercentage) : (n = o * s, r = 1), {
                    chunk: n / s,
                    ratio: r,
                    start: a - n / 2
                }
            }

            R._set("bar", {
                hover: {mode: "label"},
                scales: {
                    xAxes: [{type: "category", offset: !0, gridLines: {offsetGridLines: !0}}],
                    yAxes: [{type: "linear"}]
                }
            }), R._set("global", {datasets: {bar: {categoryPercentage: .8, barPercentage: .9}}});
            var Pt = rt.extend({
                dataElementType: kt.Rectangle,
                _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
                initialize: function () {
                    var t, e, i = this;
                    rt.prototype.initialize.apply(i, arguments), (t = i.getMeta()).stack = i.getDataset().stack, t.bar = !0, e = i._getIndexScale().options, Dt("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), Dt("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), Dt("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), Dt("bar chart", i._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), Dt("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
                },
                update: function (t) {
                    var e, i, n = this.getMeta().data;
                    for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
                },
                updateElement: function (t, e, i) {
                    var n = this, r = n.getMeta(), o = n.getDataset(), s = n._resolveDataElementOptions(t, e);
                    t._xScale = n.getScaleForId(r.xAxisID), t._yScale = n.getScaleForId(r.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
                        backgroundColor: s.backgroundColor,
                        borderColor: s.borderColor,
                        borderSkipped: s.borderSkipped,
                        borderWidth: s.borderWidth,
                        datasetLabel: o.label,
                        label: n.chart.data.labels[e]
                    }, B.isArray(o.data[e]) && (t._model.borderSkipped = null), n._updateElementGeometry(t, e, i, s), t.pivot()
                },
                _updateElementGeometry: function (t, e, i, n) {
                    var r = this, o = t._model, s = r._getValueScale(), a = s.getBasePixel(), l = s.isHorizontal(),
                        c = r._ruler || r.getRuler(), u = r.calculateBarValuePixels(r.index, e, n),
                        h = r.calculateBarIndexPixels(r.index, e, c, n);
                    o.horizontal = l, o.base = i ? a : u.base, o.x = l ? i ? a : u.head : h.center, o.y = l ? h.center : i ? a : u.head, o.height = l ? h.size : void 0, o.width = l ? void 0 : h.size
                },
                _getStacks: function (t) {
                    var e, i, n = this._getIndexScale(), r = n._getMatchingVisibleMetas(this._type),
                        o = n.options.stacked, s = r.length, a = [];
                    for (e = 0; e < s && (i = r[e], (!1 === o || -1 === a.indexOf(i.stack) || void 0 === o && void 0 === i.stack) && a.push(i.stack), i.index !== t); ++e) ;
                    return a
                },
                getStackCount: function () {
                    return this._getStacks().length
                },
                getStackIndex: function (t, e) {
                    var i = this._getStacks(t), n = void 0 !== e ? i.indexOf(e) : -1;
                    return -1 === n ? i.length - 1 : n
                },
                getRuler: function () {
                    var t, e, i = this._getIndexScale(), n = [];
                    for (t = 0, e = this.getMeta().data.length; t < e; ++t) n.push(i.getPixelForValue(null, t, this.index));
                    return {
                        pixels: n,
                        start: i._startPixel,
                        end: i._endPixel,
                        stackCount: this.getStackCount(),
                        scale: i
                    }
                },
                calculateBarValuePixels: function (t, e, i) {
                    var n, r, o, s, a, l, c, u = this.chart, h = this._getValueScale(), d = h.isHorizontal(),
                        f = u.data.datasets, p = h._getMatchingVisibleMetas(this._type),
                        g = h._parseValue(f[t].data[e]), m = i.minBarLength, v = h.options.stacked,
                        y = this.getMeta().stack, _ = void 0 === g.start ? 0 : g.max >= 0 && g.min >= 0 ? g.min : g.max,
                        b = void 0 === g.start ? g.end : g.max >= 0 && g.min >= 0 ? g.max - g.min : g.min - g.max,
                        w = p.length;
                    if (v || void 0 === v && void 0 !== y) for (n = 0; n < w && (r = p[n]).index !== t; ++n) r.stack === y && (o = void 0 === (c = h._parseValue(f[r.index].data[e])).start ? c.end : c.min >= 0 && c.max >= 0 ? c.max : c.min, (g.min < 0 && o < 0 || g.max >= 0 && o > 0) && (_ += o));
                    return s = h.getPixelForValue(_), l = (a = h.getPixelForValue(_ + b)) - s, void 0 !== m && Math.abs(l) < m && (l = m, a = b >= 0 && !d || b < 0 && d ? s - m : s + m), {
                        size: l,
                        base: s,
                        head: a,
                        center: a + l / 2
                    }
                },
                calculateBarIndexPixels: function (t, e, i, n) {
                    var r = "flex" === n.barThickness ? function (t, e, i) {
                            var n, r = e.pixels, o = r[t], s = t > 0 ? r[t - 1] : null,
                                a = t < r.length - 1 ? r[t + 1] : null, l = i.categoryPercentage;
                            return null === s && (s = o - (null === a ? e.end - e.start : a - o)), null === a && (a = o + o - s), n = o - (o - Math.min(s, a)) / 2 * l, {
                                chunk: Math.abs(a - s) / 2 * l / e.stackCount,
                                ratio: i.barPercentage,
                                start: n
                            }
                        }(e, i, n) : Et(e, i, n), o = this.getStackIndex(t, this.getMeta().stack),
                        s = r.start + r.chunk * o + r.chunk / 2,
                        a = Math.min(Ot(n.maxBarThickness, 1 / 0), r.chunk * r.ratio);
                    return {base: s - a / 2, head: s + a / 2, center: s, size: a}
                },
                draw: function () {
                    var t = this.chart, e = this._getValueScale(), i = this.getMeta().data, n = this.getDataset(),
                        r = i.length, o = 0;
                    for (B.canvas.clipArea(t.ctx, t.chartArea); o < r; ++o) {
                        var s = e._parseValue(n.data[o]);
                        isNaN(s.min) || isNaN(s.max) || i[o].draw()
                    }
                    B.canvas.unclipArea(t.ctx)
                },
                _resolveDataElementOptions: function () {
                    var t = this, e = B.extend({}, rt.prototype._resolveDataElementOptions.apply(t, arguments)),
                        i = t._getIndexScale().options, n = t._getValueScale().options;
                    return e.barPercentage = Ot(i.barPercentage, e.barPercentage), e.barThickness = Ot(i.barThickness, e.barThickness), e.categoryPercentage = Ot(i.categoryPercentage, e.categoryPercentage), e.maxBarThickness = Ot(i.maxBarThickness, e.maxBarThickness), e.minBarLength = Ot(n.minBarLength, e.minBarLength), e
                }
            }), At = B.valueOrDefault, It = B.options.resolve;
            R._set("bubble", {
                hover: {mode: "single"},
                scales: {
                    xAxes: [{type: "linear", position: "bottom", id: "x-axis-0"}],
                    yAxes: [{type: "linear", position: "left", id: "y-axis-0"}]
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (t, e) {
                            var i = e.datasets[t.datasetIndex].label || "",
                                n = e.datasets[t.datasetIndex].data[t.index];
                            return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
                        }
                    }
                }
            });
            var jt = rt.extend({
                dataElementType: kt.Point,
                _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
                update: function (t) {
                    var e = this, i = e.getMeta().data;
                    B.each(i, (function (i, n) {
                        e.updateElement(i, n, t)
                    }))
                },
                updateElement: function (t, e, i) {
                    var n = this, r = n.getMeta(), o = t.custom || {}, s = n.getScaleForId(r.xAxisID),
                        a = n.getScaleForId(r.yAxisID), l = n._resolveDataElementOptions(t, e),
                        c = n.getDataset().data[e], u = n.index,
                        h = i ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof c ? c : NaN, e, u),
                        d = i ? a.getBasePixel() : a.getPixelForValue(c, e, u);
                    t._xScale = s, t._yScale = a, t._options = l, t._datasetIndex = u, t._index = e, t._model = {
                        backgroundColor: l.backgroundColor,
                        borderColor: l.borderColor,
                        borderWidth: l.borderWidth,
                        hitRadius: l.hitRadius,
                        pointStyle: l.pointStyle,
                        rotation: l.rotation,
                        radius: i ? 0 : l.radius,
                        skip: o.skip || isNaN(h) || isNaN(d),
                        x: h,
                        y: d
                    }, t.pivot()
                },
                setHoverStyle: function (t) {
                    var e = t._model, i = t._options, n = B.getHoverColor;
                    t.$previousStyle = {
                        backgroundColor: e.backgroundColor,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth,
                        radius: e.radius
                    }, e.backgroundColor = At(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = At(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = At(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius
                },
                _resolveDataElementOptions: function (t, e) {
                    var i = this, n = i.chart, r = i.getDataset(), o = t.custom || {}, s = r.data[e] || {},
                        a = rt.prototype._resolveDataElementOptions.apply(i, arguments),
                        l = {chart: n, dataIndex: e, dataset: r, datasetIndex: i.index};
                    return i._cachedDataOpts === a && (a = B.extend({}, a)), a.radius = It([o.radius, s.r, i._config.radius, n.options.elements.point.radius], l, e), a
                }
            }), Nt = B.valueOrDefault, Ft = Math.PI, Lt = 2 * Ft, Rt = Ft / 2;
            R._set("doughnut", {
                animation: {animateRotate: !0, animateScale: !1},
                hover: {mode: "single"},
                legendCallback: function (t) {
                    var e, i, n, r = document.createElement("ul"), o = t.data, s = o.datasets, a = o.labels;
                    if (r.setAttribute("class", t.id + "-legend"), s.length) for (e = 0, i = s[0].data.length; e < i; ++e) (n = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = s[0].backgroundColor[e], a[e] && n.appendChild(document.createTextNode(a[e]));
                    return r.outerHTML
                },
                legend: {
                    labels: {
                        generateLabels: function (t) {
                            var e = t.data;
                            return e.labels.length && e.datasets.length ? e.labels.map((function (i, n) {
                                var r = t.getDatasetMeta(0), o = r.controller.getStyle(n);
                                return {
                                    text: i,
                                    fillStyle: o.backgroundColor,
                                    strokeStyle: o.borderColor,
                                    lineWidth: o.borderWidth,
                                    hidden: isNaN(e.datasets[0].data[n]) || r.data[n].hidden,
                                    index: n
                                }
                            })) : []
                        }
                    }, onClick: function (t, e) {
                        var i, n, r, o = e.index, s = this.chart;
                        for (i = 0, n = (s.data.datasets || []).length; i < n; ++i) (r = s.getDatasetMeta(i)).data[o] && (r.data[o].hidden = !r.data[o].hidden);
                        s.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: -Rt,
                circumference: Lt,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (t, e) {
                            var i = e.labels[t.index], n = ": " + e.datasets[t.datasetIndex].data[t.index];
                            return B.isArray(i) ? (i = i.slice())[0] += n : i += n, i
                        }
                    }
                }
            });
            var $t = rt.extend({
                dataElementType: kt.Arc,
                linkScales: B.noop,
                _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
                getRingIndex: function (t) {
                    for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
                    return e
                },
                update: function (t) {
                    var e, i, n, r, o = this, s = o.chart, a = s.chartArea, l = s.options, c = 1, u = 1, h = 0, d = 0,
                        f = o.getMeta(), p = f.data, g = l.cutoutPercentage / 100 || 0, m = l.circumference,
                        v = o._getRingWeight(o.index);
                    if (m < Lt) {
                        var y = l.rotation % Lt, _ = (y += y >= Ft ? -Lt : y < -Ft ? Lt : 0) + m, b = Math.cos(y),
                            w = Math.sin(y), x = Math.cos(_), k = Math.sin(_), C = y <= 0 && _ >= 0 || _ >= Lt,
                            S = y <= Rt && _ >= Rt || _ >= Lt + Rt, T = y <= -Rt && _ >= -Rt || _ >= Ft + Rt,
                            M = y === -Ft || _ >= Ft ? -1 : Math.min(b, b * g, x, x * g),
                            D = T ? -1 : Math.min(w, w * g, k, k * g), O = C ? 1 : Math.max(b, b * g, x, x * g),
                            E = S ? 1 : Math.max(w, w * g, k, k * g);
                        c = (O - M) / 2, u = (E - D) / 2, h = -(O + M) / 2, d = -(E + D) / 2
                    }
                    for (n = 0, r = p.length; n < r; ++n) p[n]._options = o._resolveDataElementOptions(p[n], n);
                    for (s.borderWidth = o.getMaxBorderWidth(), e = (a.right - a.left - s.borderWidth) / c, i = (a.bottom - a.top - s.borderWidth) / u, s.outerRadius = Math.max(Math.min(e, i) / 2, 0), s.innerRadius = Math.max(s.outerRadius * g, 0), s.radiusLength = (s.outerRadius - s.innerRadius) / (o._getVisibleDatasetWeightTotal() || 1), s.offsetX = h * s.outerRadius, s.offsetY = d * s.outerRadius, f.total = o.calculateTotal(), o.outerRadius = s.outerRadius - s.radiusLength * o._getRingWeightOffset(o.index), o.innerRadius = Math.max(o.outerRadius - s.radiusLength * v, 0), n = 0, r = p.length; n < r; ++n) o.updateElement(p[n], n, t)
                },
                updateElement: function (t, e, i) {
                    var n = this, r = n.chart, o = r.chartArea, s = r.options, a = s.animation,
                        l = (o.left + o.right) / 2, c = (o.top + o.bottom) / 2, u = s.rotation, h = s.rotation,
                        d = n.getDataset(),
                        f = i && a.animateRotate || t.hidden ? 0 : n.calculateCircumference(d.data[e]) * (s.circumference / Lt),
                        p = i && a.animateScale ? 0 : n.innerRadius, g = i && a.animateScale ? 0 : n.outerRadius,
                        m = t._options || {};
                    B.extend(t, {
                        _datasetIndex: n.index,
                        _index: e,
                        _model: {
                            backgroundColor: m.backgroundColor,
                            borderColor: m.borderColor,
                            borderWidth: m.borderWidth,
                            borderAlign: m.borderAlign,
                            x: l + r.offsetX,
                            y: c + r.offsetY,
                            startAngle: u,
                            endAngle: h,
                            circumference: f,
                            outerRadius: g,
                            innerRadius: p,
                            label: B.valueAtIndexOrDefault(d.label, e, r.data.labels[e])
                        }
                    });
                    var v = t._model;
                    i && a.animateRotate || (v.startAngle = 0 === e ? s.rotation : n.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot()
                },
                calculateTotal: function () {
                    var t, e = this.getDataset(), i = this.getMeta(), n = 0;
                    return B.each(i.data, (function (i, r) {
                        t = e.data[r], isNaN(t) || i.hidden || (n += Math.abs(t))
                    })), n
                },
                calculateCircumference: function (t) {
                    var e = this.getMeta().total;
                    return e > 0 && !isNaN(t) ? Lt * (Math.abs(t) / e) : 0
                },
                getMaxBorderWidth: function (t) {
                    var e, i, n, r, o, s, a, l, c = 0, u = this.chart;
                    if (!t) for (e = 0, i = u.data.datasets.length; e < i; ++e) if (u.isDatasetVisible(e)) {
                        t = (n = u.getDatasetMeta(e)).data, e !== this.index && (o = n.controller);
                        break
                    }
                    if (!t) return 0;
                    for (e = 0, i = t.length; e < i; ++e) r = t[e], o ? (o._configure(), s = o._resolveDataElementOptions(r, e)) : s = r._options, "inner" !== s.borderAlign && (a = s.borderWidth, c = (l = s.hoverBorderWidth) > (c = a > c ? a : c) ? l : c);
                    return c
                },
                setHoverStyle: function (t) {
                    var e = t._model, i = t._options, n = B.getHoverColor;
                    t.$previousStyle = {
                        backgroundColor: e.backgroundColor,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth
                    }, e.backgroundColor = Nt(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Nt(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Nt(i.hoverBorderWidth, i.borderWidth)
                },
                _getRingWeightOffset: function (t) {
                    for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
                    return e
                },
                _getRingWeight: function (t) {
                    return Math.max(Nt(this.chart.data.datasets[t].weight, 1), 0)
                },
                _getVisibleDatasetWeightTotal: function () {
                    return this._getRingWeightOffset(this.chart.data.datasets.length)
                }
            });
            R._set("horizontalBar", {
                hover: {mode: "index", axis: "y"},
                scales: {
                    xAxes: [{type: "linear", position: "bottom"}],
                    yAxes: [{type: "category", position: "left", offset: !0, gridLines: {offsetGridLines: !0}}]
                },
                elements: {rectangle: {borderSkipped: "left"}},
                tooltips: {mode: "index", axis: "y"}
            }), R._set("global", {datasets: {horizontalBar: {categoryPercentage: .8, barPercentage: .9}}});
            var zt = Pt.extend({
                _getValueScaleId: function () {
                    return this.getMeta().xAxisID
                }, _getIndexScaleId: function () {
                    return this.getMeta().yAxisID
                }
            }), Wt = B.valueOrDefault, Ht = B.options.resolve, Bt = B.canvas._isPointInArea;

            function Vt(t, e) {
                var i = t && t.options.ticks || {}, n = i.reverse, r = void 0 === i.min ? e : 0,
                    o = void 0 === i.max ? e : 0;
                return {start: n ? o : r, end: n ? r : o}
            }

            function Yt(t, e, i) {
                var n = i / 2, r = Vt(t, n), o = Vt(e, n);
                return {top: o.end, right: r.end, bottom: o.start, left: r.start}
            }

            function qt(t) {
                var e, i, n, r;
                return B.isObject(t) ? (e = t.top, i = t.right, n = t.bottom, r = t.left) : e = i = n = r = t, {
                    top: e,
                    right: i,
                    bottom: n,
                    left: r
                }
            }

            R._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {mode: "label"},
                scales: {xAxes: [{type: "category", id: "x-axis-0"}], yAxes: [{type: "linear", id: "y-axis-0"}]}
            });
            var Ut = rt.extend({
                datasetElementType: kt.Line,
                dataElementType: kt.Point,
                _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
                _dataElementOptions: {
                    backgroundColor: "pointBackgroundColor",
                    borderColor: "pointBorderColor",
                    borderWidth: "pointBorderWidth",
                    hitRadius: "pointHitRadius",
                    hoverBackgroundColor: "pointHoverBackgroundColor",
                    hoverBorderColor: "pointHoverBorderColor",
                    hoverBorderWidth: "pointHoverBorderWidth",
                    hoverRadius: "pointHoverRadius",
                    pointStyle: "pointStyle",
                    radius: "pointRadius",
                    rotation: "pointRotation"
                },
                update: function (t) {
                    var e, i, n = this, r = n.getMeta(), o = r.dataset, s = r.data || [], a = n.chart.options,
                        l = n._config, c = n._showLine = Wt(l.showLine, a.showLines);
                    for (n._xScale = n.getScaleForId(r.xAxisID), n._yScale = n.getScaleForId(r.yAxisID), c && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), o._scale = n._yScale, o._datasetIndex = n.index, o._children = s, o._model = n._resolveDatasetElementOptions(o), o.pivot()), e = 0, i = s.length; e < i; ++e) n.updateElement(s[e], e, t);
                    for (c && 0 !== o._model.tension && n.updateBezierControlPoints(), e = 0, i = s.length; e < i; ++e) s[e].pivot()
                },
                updateElement: function (t, e, i) {
                    var n, r, o = this, s = o.getMeta(), a = t.custom || {}, l = o.getDataset(), c = o.index,
                        u = l.data[e], h = o._xScale, d = o._yScale, f = s.dataset._model,
                        p = o._resolveDataElementOptions(t, e);
                    n = h.getPixelForValue("object" == typeof u ? u : NaN, e, c), r = i ? d.getBasePixel() : o.calculatePointY(u, e, c), t._xScale = h, t._yScale = d, t._options = p, t._datasetIndex = c, t._index = e, t._model = {
                        x: n,
                        y: r,
                        skip: a.skip || isNaN(n) || isNaN(r),
                        radius: p.radius,
                        pointStyle: p.pointStyle,
                        rotation: p.rotation,
                        backgroundColor: p.backgroundColor,
                        borderColor: p.borderColor,
                        borderWidth: p.borderWidth,
                        tension: Wt(a.tension, f ? f.tension : 0),
                        steppedLine: !!f && f.steppedLine,
                        hitRadius: p.hitRadius
                    }
                },
                _resolveDatasetElementOptions: function (t) {
                    var e = this, i = e._config, n = t.custom || {}, r = e.chart.options, o = r.elements.line,
                        s = rt.prototype._resolveDatasetElementOptions.apply(e, arguments);
                    return s.spanGaps = Wt(i.spanGaps, r.spanGaps), s.tension = Wt(i.lineTension, o.tension), s.steppedLine = Ht([n.steppedLine, i.steppedLine, o.stepped]), s.clip = qt(Wt(i.clip, Yt(e._xScale, e._yScale, s.borderWidth))), s
                },
                calculatePointY: function (t, e, i) {
                    var n, r, o, s, a, l, c, u = this.chart, h = this._yScale, d = 0, f = 0;
                    if (h.options.stacked) {
                        for (a = +h.getRightValue(t), c = (l = u._getSortedVisibleDatasetMetas()).length, n = 0; n < c && (o = l[n]).index !== i; ++n) r = u.data.datasets[o.index], "line" === o.type && o.yAxisID === h.id && ((s = +h.getRightValue(r.data[e])) < 0 ? f += s || 0 : d += s || 0);
                        return a < 0 ? h.getPixelForValue(f + a) : h.getPixelForValue(d + a)
                    }
                    return h.getPixelForValue(t)
                },
                updateBezierControlPoints: function () {
                    var t, e, i, n, r = this.chart, o = this.getMeta(), s = o.dataset._model, a = r.chartArea,
                        l = o.data || [];

                    function c(t, e, i) {
                        return Math.max(Math.min(t, i), e)
                    }

                    if (s.spanGaps && (l = l.filter((function (t) {
                        return !t._model.skip
                    }))), "monotone" === s.cubicInterpolationMode) B.splineCurveMonotone(l); else for (t = 0, e = l.length; t < e; ++t) i = l[t]._model, n = B.splineCurve(B.previousItem(l, t)._model, i, B.nextItem(l, t)._model, s.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
                    if (r.options.elements.line.capBezierPoints) for (t = 0, e = l.length; t < e; ++t) i = l[t]._model, Bt(i, a) && (t > 0 && Bt(l[t - 1]._model, a) && (i.controlPointPreviousX = c(i.controlPointPreviousX, a.left, a.right), i.controlPointPreviousY = c(i.controlPointPreviousY, a.top, a.bottom)), t < l.length - 1 && Bt(l[t + 1]._model, a) && (i.controlPointNextX = c(i.controlPointNextX, a.left, a.right), i.controlPointNextY = c(i.controlPointNextY, a.top, a.bottom)))
                },
                draw: function () {
                    var t, e = this.chart, i = this.getMeta(), n = i.data || [], r = e.chartArea, o = e.canvas, s = 0,
                        a = n.length;
                    for (this._showLine && (t = i.dataset._model.clip, B.canvas.clipArea(e.ctx, {
                        left: !1 === t.left ? 0 : r.left - t.left,
                        right: !1 === t.right ? o.width : r.right + t.right,
                        top: !1 === t.top ? 0 : r.top - t.top,
                        bottom: !1 === t.bottom ? o.height : r.bottom + t.bottom
                    }), i.dataset.draw(), B.canvas.unclipArea(e.ctx)); s < a; ++s) n[s].draw(r)
                },
                setHoverStyle: function (t) {
                    var e = t._model, i = t._options, n = B.getHoverColor;
                    t.$previousStyle = {
                        backgroundColor: e.backgroundColor,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth,
                        radius: e.radius
                    }, e.backgroundColor = Wt(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Wt(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Wt(i.hoverBorderWidth, i.borderWidth), e.radius = Wt(i.hoverRadius, i.radius)
                }
            }), Gt = B.options.resolve;
            R._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {display: !1},
                    gridLines: {circular: !0},
                    pointLabels: {display: !1},
                    ticks: {beginAtZero: !0}
                },
                animation: {animateRotate: !0, animateScale: !0},
                startAngle: -.5 * Math.PI,
                legendCallback: function (t) {
                    var e, i, n, r = document.createElement("ul"), o = t.data, s = o.datasets, a = o.labels;
                    if (r.setAttribute("class", t.id + "-legend"), s.length) for (e = 0, i = s[0].data.length; e < i; ++e) (n = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = s[0].backgroundColor[e], a[e] && n.appendChild(document.createTextNode(a[e]));
                    return r.outerHTML
                },
                legend: {
                    labels: {
                        generateLabels: function (t) {
                            var e = t.data;
                            return e.labels.length && e.datasets.length ? e.labels.map((function (i, n) {
                                var r = t.getDatasetMeta(0), o = r.controller.getStyle(n);
                                return {
                                    text: i,
                                    fillStyle: o.backgroundColor,
                                    strokeStyle: o.borderColor,
                                    lineWidth: o.borderWidth,
                                    hidden: isNaN(e.datasets[0].data[n]) || r.data[n].hidden,
                                    index: n
                                }
                            })) : []
                        }
                    }, onClick: function (t, e) {
                        var i, n, r, o = e.index, s = this.chart;
                        for (i = 0, n = (s.data.datasets || []).length; i < n; ++i) (r = s.getDatasetMeta(i)).data[o].hidden = !r.data[o].hidden;
                        s.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (t, e) {
                            return e.labels[t.index] + ": " + t.yLabel
                        }
                    }
                }
            });
            var Qt = rt.extend({
                dataElementType: kt.Arc,
                linkScales: B.noop,
                _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
                _getIndexScaleId: function () {
                    return this.chart.scale.id
                },
                _getValueScaleId: function () {
                    return this.chart.scale.id
                },
                update: function (t) {
                    var e, i, n, r = this, o = r.getDataset(), s = r.getMeta(), a = r.chart.options.startAngle || 0,
                        l = r._starts = [], c = r._angles = [], u = s.data;
                    for (r._updateRadius(), s.count = r.countVisibleElements(), e = 0, i = o.data.length; e < i; e++) l[e] = a, n = r._computeAngle(e), c[e] = n, a += n;
                    for (e = 0, i = u.length; e < i; ++e) u[e]._options = r._resolveDataElementOptions(u[e], e), r.updateElement(u[e], e, t)
                },
                _updateRadius: function () {
                    var t = this, e = t.chart, i = e.chartArea, n = e.options,
                        r = Math.min(i.right - i.left, i.bottom - i.top);
                    e.outerRadius = Math.max(r / 2, 0), e.innerRadius = Math.max(n.cutoutPercentage ? e.outerRadius / 100 * n.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
                },
                updateElement: function (t, e, i) {
                    var n = this, r = n.chart, o = n.getDataset(), s = r.options, a = s.animation, l = r.scale,
                        c = r.data.labels, u = l.xCenter, h = l.yCenter, d = s.startAngle,
                        f = t.hidden ? 0 : l.getDistanceFromCenterForValue(o.data[e]), p = n._starts[e],
                        g = p + (t.hidden ? 0 : n._angles[e]),
                        m = a.animateScale ? 0 : l.getDistanceFromCenterForValue(o.data[e]), v = t._options || {};
                    B.extend(t, {
                        _datasetIndex: n.index,
                        _index: e,
                        _scale: l,
                        _model: {
                            backgroundColor: v.backgroundColor,
                            borderColor: v.borderColor,
                            borderWidth: v.borderWidth,
                            borderAlign: v.borderAlign,
                            x: u,
                            y: h,
                            innerRadius: 0,
                            outerRadius: i ? m : f,
                            startAngle: i && a.animateRotate ? d : p,
                            endAngle: i && a.animateRotate ? d : g,
                            label: B.valueAtIndexOrDefault(c, e, c[e])
                        }
                    }), t.pivot()
                },
                countVisibleElements: function () {
                    var t = this.getDataset(), e = this.getMeta(), i = 0;
                    return B.each(e.data, (function (e, n) {
                        isNaN(t.data[n]) || e.hidden || i++
                    })), i
                },
                setHoverStyle: function (t) {
                    var e = t._model, i = t._options, n = B.getHoverColor, r = B.valueOrDefault;
                    t.$previousStyle = {
                        backgroundColor: e.backgroundColor,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth
                    }, e.backgroundColor = r(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = r(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = r(i.hoverBorderWidth, i.borderWidth)
                },
                _computeAngle: function (t) {
                    var e = this, i = this.getMeta().count, n = e.getDataset(), r = e.getMeta();
                    if (isNaN(n.data[t]) || r.data[t].hidden) return 0;
                    var o = {chart: e.chart, dataIndex: t, dataset: n, datasetIndex: e.index};
                    return Gt([e.chart.options.elements.arc.angle, 2 * Math.PI / i], o, t)
                }
            });
            R._set("pie", B.clone(R.doughnut)), R._set("pie", {cutoutPercentage: 0});
            var Xt = $t, Zt = B.valueOrDefault;
            R._set("radar", {
                spanGaps: !1,
                scale: {type: "radialLinear"},
                elements: {line: {fill: "start", tension: 0}}
            });
            var Kt = rt.extend({
                datasetElementType: kt.Line,
                dataElementType: kt.Point,
                linkScales: B.noop,
                _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
                _dataElementOptions: {
                    backgroundColor: "pointBackgroundColor",
                    borderColor: "pointBorderColor",
                    borderWidth: "pointBorderWidth",
                    hitRadius: "pointHitRadius",
                    hoverBackgroundColor: "pointHoverBackgroundColor",
                    hoverBorderColor: "pointHoverBorderColor",
                    hoverBorderWidth: "pointHoverBorderWidth",
                    hoverRadius: "pointHoverRadius",
                    pointStyle: "pointStyle",
                    radius: "pointRadius",
                    rotation: "pointRotation"
                },
                _getIndexScaleId: function () {
                    return this.chart.scale.id
                },
                _getValueScaleId: function () {
                    return this.chart.scale.id
                },
                update: function (t) {
                    var e, i, n = this, r = n.getMeta(), o = r.dataset, s = r.data || [], a = n.chart.scale,
                        l = n._config;
                    for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), o._scale = a, o._datasetIndex = n.index, o._children = s, o._loop = !0, o._model = n._resolveDatasetElementOptions(o), o.pivot(), e = 0, i = s.length; e < i; ++e) n.updateElement(s[e], e, t);
                    for (n.updateBezierControlPoints(), e = 0, i = s.length; e < i; ++e) s[e].pivot()
                },
                updateElement: function (t, e, i) {
                    var n = this, r = t.custom || {}, o = n.getDataset(), s = n.chart.scale,
                        a = s.getPointPositionForValue(e, o.data[e]), l = n._resolveDataElementOptions(t, e),
                        c = n.getMeta().dataset._model, u = i ? s.xCenter : a.x, h = i ? s.yCenter : a.y;
                    t._scale = s, t._options = l, t._datasetIndex = n.index, t._index = e, t._model = {
                        x: u,
                        y: h,
                        skip: r.skip || isNaN(u) || isNaN(h),
                        radius: l.radius,
                        pointStyle: l.pointStyle,
                        rotation: l.rotation,
                        backgroundColor: l.backgroundColor,
                        borderColor: l.borderColor,
                        borderWidth: l.borderWidth,
                        tension: Zt(r.tension, c ? c.tension : 0),
                        hitRadius: l.hitRadius
                    }
                },
                _resolveDatasetElementOptions: function () {
                    var t = this, e = t._config, i = t.chart.options,
                        n = rt.prototype._resolveDatasetElementOptions.apply(t, arguments);
                    return n.spanGaps = Zt(e.spanGaps, i.spanGaps), n.tension = Zt(e.lineTension, i.elements.line.tension), n
                },
                updateBezierControlPoints: function () {
                    var t, e, i, n, r = this.getMeta(), o = this.chart.chartArea, s = r.data || [];

                    function a(t, e, i) {
                        return Math.max(Math.min(t, i), e)
                    }

                    for (r.dataset._model.spanGaps && (s = s.filter((function (t) {
                        return !t._model.skip
                    }))), t = 0, e = s.length; t < e; ++t) i = s[t]._model, n = B.splineCurve(B.previousItem(s, t, !0)._model, i, B.nextItem(s, t, !0)._model, i.tension), i.controlPointPreviousX = a(n.previous.x, o.left, o.right), i.controlPointPreviousY = a(n.previous.y, o.top, o.bottom), i.controlPointNextX = a(n.next.x, o.left, o.right), i.controlPointNextY = a(n.next.y, o.top, o.bottom)
                },
                setHoverStyle: function (t) {
                    var e = t._model, i = t._options, n = B.getHoverColor;
                    t.$previousStyle = {
                        backgroundColor: e.backgroundColor,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth,
                        radius: e.radius
                    }, e.backgroundColor = Zt(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Zt(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Zt(i.hoverBorderWidth, i.borderWidth), e.radius = Zt(i.hoverRadius, i.radius)
                }
            });
            R._set("scatter", {
                hover: {mode: "single"},
                scales: {
                    xAxes: [{id: "x-axis-1", type: "linear", position: "bottom"}],
                    yAxes: [{id: "y-axis-1", type: "linear", position: "left"}]
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (t) {
                            return "(" + t.xLabel + ", " + t.yLabel + ")"
                        }
                    }
                }
            }), R._set("global", {datasets: {scatter: {showLine: !1}}});
            var Jt = {
                bar: Pt,
                bubble: jt,
                doughnut: $t,
                horizontalBar: zt,
                line: Ut,
                polarArea: Qt,
                pie: Xt,
                radar: Kt,
                scatter: Ut
            };

            function te(t, e) {
                return t.native ? {x: t.x, y: t.y} : B.getRelativePosition(t, e)
            }

            function ee(t, e) {
                var i, n, r, o, s, a, l = t._getSortedVisibleDatasetMetas();
                for (n = 0, o = l.length; n < o; ++n) for (r = 0, s = (i = l[n].data).length; r < s; ++r) (a = i[r])._view.skip || e(a)
            }

            function ie(t, e) {
                var i = [];
                return ee(t, (function (t) {
                    t.inRange(e.x, e.y) && i.push(t)
                })), i
            }

            function ne(t, e, i, n) {
                var r = Number.POSITIVE_INFINITY, o = [];
                return ee(t, (function (t) {
                    if (!i || t.inRange(e.x, e.y)) {
                        var s = t.getCenterPoint(), a = n(e, s);
                        a < r ? (o = [t], r = a) : a === r && o.push(t)
                    }
                })), o
            }

            function re(t) {
                var e = -1 !== t.indexOf("x"), i = -1 !== t.indexOf("y");
                return function (t, n) {
                    var r = e ? Math.abs(t.x - n.x) : 0, o = i ? Math.abs(t.y - n.y) : 0;
                    return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2))
                }
            }

            function oe(t, e, i) {
                var n = te(e, t);
                i.axis = i.axis || "x";
                var r = re(i.axis), o = i.intersect ? ie(t, n) : ne(t, n, !1, r), s = [];
                return o.length ? (t._getSortedVisibleDatasetMetas().forEach((function (t) {
                    var e = t.data[o[0]._index];
                    e && !e._view.skip && s.push(e)
                })), s) : []
            }

            var se = {
                modes: {
                    single: function (t, e) {
                        var i = te(e, t), n = [];
                        return ee(t, (function (t) {
                            if (t.inRange(i.x, i.y)) return n.push(t), n
                        })), n.slice(0, 1)
                    }, label: oe, index: oe, dataset: function (t, e, i) {
                        var n = te(e, t);
                        i.axis = i.axis || "xy";
                        var r = re(i.axis), o = i.intersect ? ie(t, n) : ne(t, n, !1, r);
                        return o.length > 0 && (o = t.getDatasetMeta(o[0]._datasetIndex).data), o
                    }, "x-axis": function (t, e) {
                        return oe(t, e, {intersect: !1})
                    }, point: function (t, e) {
                        return ie(t, te(e, t))
                    }, nearest: function (t, e, i) {
                        var n = te(e, t);
                        i.axis = i.axis || "xy";
                        var r = re(i.axis);
                        return ne(t, n, i.intersect, r)
                    }, x: function (t, e, i) {
                        var n = te(e, t), r = [], o = !1;
                        return ee(t, (function (t) {
                            t.inXRange(n.x) && r.push(t), t.inRange(n.x, n.y) && (o = !0)
                        })), i.intersect && !o && (r = []), r
                    }, y: function (t, e, i) {
                        var n = te(e, t), r = [], o = !1;
                        return ee(t, (function (t) {
                            t.inYRange(n.y) && r.push(t), t.inRange(n.x, n.y) && (o = !0)
                        })), i.intersect && !o && (r = []), r
                    }
                }
            }, ae = B.extend;

            function le(t, e) {
                return B.where(t, (function (t) {
                    return t.pos === e
                }))
            }

            function ce(t, e) {
                return t.sort((function (t, i) {
                    var n = e ? i : t, r = e ? t : i;
                    return n.weight === r.weight ? n.index - r.index : n.weight - r.weight
                }))
            }

            function ue(t, e, i, n) {
                return Math.max(t[i], e[i]) + Math.max(t[n], e[n])
            }

            function he(t, e, i) {
                var n, r, o = i.box, s = t.maxPadding;
                if (i.size && (t[i.pos] -= i.size), i.size = i.horizontal ? o.height : o.width, t[i.pos] += i.size, o.getPadding) {
                    var a = o.getPadding();
                    s.top = Math.max(s.top, a.top), s.left = Math.max(s.left, a.left), s.bottom = Math.max(s.bottom, a.bottom), s.right = Math.max(s.right, a.right)
                }
                if (n = e.outerWidth - ue(s, t, "left", "right"), r = e.outerHeight - ue(s, t, "top", "bottom"), n !== t.w || r !== t.h) return t.w = n, t.h = r, i.horizontal ? n !== t.w : r !== t.h
            }

            function de(t, e) {
                var i = e.maxPadding;

                function n(t) {
                    var n = {left: 0, top: 0, right: 0, bottom: 0};
                    return t.forEach((function (t) {
                        n[t] = Math.max(e[t], i[t])
                    })), n
                }

                return n(t ? ["left", "right"] : ["top", "bottom"])
            }

            function fe(t, e, i) {
                var n, r, o, s, a, l, c = [];
                for (n = 0, r = t.length; n < r; ++n) (s = (o = t[n]).box).update(o.width || e.w, o.height || e.h, de(o.horizontal, e)), he(e, i, o) && (l = !0, c.length && (a = !0)), s.fullWidth || c.push(o);
                return a && fe(c, e, i) || l
            }

            function pe(t, e, i) {
                var n, r, o, s, a = i.padding, l = e.x, c = e.y;
                for (n = 0, r = t.length; n < r; ++n) s = (o = t[n]).box, o.horizontal ? (s.left = s.fullWidth ? a.left : e.left, s.right = s.fullWidth ? i.outerWidth - a.right : e.left + e.w, s.top = c, s.bottom = c + s.height, s.width = s.right - s.left, c = s.bottom) : (s.left = l, s.right = l + s.width, s.top = e.top, s.bottom = e.top + e.h, s.height = s.bottom - s.top, l = s.right);
                e.x = l, e.y = c
            }

            R._set("global", {layout: {padding: {top: 0, right: 0, bottom: 0, left: 0}}});
            var ge, me = {
                defaults: {}, addBox: function (t, e) {
                    t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () {
                        return [{
                            z: 0, draw: function () {
                                e.draw.apply(e, arguments)
                            }
                        }]
                    }, t.boxes.push(e)
                }, removeBox: function (t, e) {
                    var i = t.boxes ? t.boxes.indexOf(e) : -1;
                    -1 !== i && t.boxes.splice(i, 1)
                }, configure: function (t, e, i) {
                    for (var n, r = ["fullWidth", "position", "weight"], o = r.length, s = 0; s < o; ++s) n = r[s], i.hasOwnProperty(n) && (e[n] = i[n])
                }, update: function (t, e, i) {
                    if (t) {
                        var n = t.options.layout || {}, r = B.options.toPadding(n.padding), o = e - r.width,
                            s = i - r.height, a = function (t) {
                                var e = function (t) {
                                        var e, i, n, r = [];
                                        for (e = 0, i = (t || []).length; e < i; ++e) n = t[e], r.push({
                                            index: e,
                                            box: n,
                                            pos: n.position,
                                            horizontal: n.isHorizontal(),
                                            weight: n.weight
                                        });
                                        return r
                                    }(t), i = ce(le(e, "left"), !0), n = ce(le(e, "right")), r = ce(le(e, "top"), !0),
                                    o = ce(le(e, "bottom"));
                                return {
                                    leftAndTop: i.concat(r),
                                    rightAndBottom: n.concat(o),
                                    chartArea: le(e, "chartArea"),
                                    vertical: i.concat(n),
                                    horizontal: r.concat(o)
                                }
                            }(t.boxes), l = a.vertical, c = a.horizontal, u = Object.freeze({
                                outerWidth: e,
                                outerHeight: i,
                                padding: r,
                                availableWidth: o,
                                vBoxMaxWidth: o / 2 / l.length,
                                hBoxMaxHeight: s / 2
                            }), h = ae({maxPadding: ae({}, r), w: o, h: s, x: r.left, y: r.top}, r);
                        !function (t, e) {
                            var i, n, r;
                            for (i = 0, n = t.length; i < n; ++i) (r = t[i]).width = r.horizontal ? r.box.fullWidth && e.availableWidth : e.vBoxMaxWidth, r.height = r.horizontal && e.hBoxMaxHeight
                        }(l.concat(c), u), fe(l, h, u), fe(c, h, u) && fe(l, h, u), function (t) {
                            var e = t.maxPadding;

                            function i(i) {
                                var n = Math.max(e[i] - t[i], 0);
                                return t[i] += n, n
                            }

                            t.y += i("top"), t.x += i("left"), i("right"), i("bottom")
                        }(h), pe(a.leftAndTop, h, u), h.x += h.w, h.y += h.h, pe(a.rightAndBottom, h, u), t.chartArea = {
                            left: h.left,
                            top: h.top,
                            right: h.left + h.w,
                            bottom: h.top + h.h
                        }, B.each(a.chartArea, (function (e) {
                            var i = e.box;
                            ae(i, t.chartArea), i.update(h.w, h.h)
                        }))
                    }
                }
            }, ve = (ge = Object.freeze({
                __proto__: null,
                default: "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n"
            })) && ge.default || ge, ye = ["animationstart", "webkitAnimationStart"], _e = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup",
                pointerenter: "mouseenter",
                pointerdown: "mousedown",
                pointermove: "mousemove",
                pointerup: "mouseup",
                pointerleave: "mouseout",
                pointerout: "mouseout"
            };

            function be(t, e) {
                var i = B.getStyle(t, e), n = i && i.match(/^(\d+)(\.\d+)?px$/);
                return n ? Number(n[1]) : void 0
            }

            var we = !!function () {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0
                        }
                    });
                    window.addEventListener("e", null, e)
                } catch (t) {
                }
                return t
            }() && {passive: !0};

            function xe(t, e, i) {
                t.addEventListener(e, i, we)
            }

            function ke(t, e, i) {
                t.removeEventListener(e, i, we)
            }

            function Ce(t, e, i, n, r) {
                return {type: t, chart: e, native: r || null, x: void 0 !== i ? i : null, y: void 0 !== n ? n : null}
            }

            function Se(t) {
                var e = document.createElement("div");
                return e.className = t || "", e
            }

            function Te(t, e, i) {
                var n, r, o, s, a = t.$chartjs || (t.$chartjs = {}), l = a.resizer = function (t) {
                    var e = Se("chartjs-size-monitor"), i = Se("chartjs-size-monitor-expand"),
                        n = Se("chartjs-size-monitor-shrink");
                    i.appendChild(Se()), n.appendChild(Se()), e.appendChild(i), e.appendChild(n), e._reset = function () {
                        i.scrollLeft = 1e6, i.scrollTop = 1e6, n.scrollLeft = 1e6, n.scrollTop = 1e6
                    };
                    var r = function () {
                        e._reset(), t()
                    };
                    return xe(i, "scroll", r.bind(i, "expand")), xe(n, "scroll", r.bind(n, "shrink")), e
                }((n = function () {
                    if (a.resizer) {
                        var n = i.options.maintainAspectRatio && t.parentNode, r = n ? n.clientWidth : 0;
                        e(Ce("resize", i)), n && n.clientWidth < r && i.canvas && e(Ce("resize", i))
                    }
                }, o = !1, s = [], function () {
                    s = Array.prototype.slice.call(arguments), r = r || this, o || (o = !0, B.requestAnimFrame.call(window, (function () {
                        o = !1, n.apply(r, s)
                    })))
                }));
                !function (t, e) {
                    var i = t.$chartjs || (t.$chartjs = {}), n = i.renderProxy = function (t) {
                        "chartjs-render-animation" === t.animationName && e()
                    };
                    B.each(ye, (function (e) {
                        xe(t, e, n)
                    })), i.reflow = !!t.offsetParent, t.classList.add("chartjs-render-monitor")
                }(t, (function () {
                    if (a.resizer) {
                        var e = t.parentNode;
                        e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset()
                    }
                }))
            }

            function Me(t) {
                var e = t.$chartjs || {}, i = e.resizer;
                delete e.resizer, function (t) {
                    var e = t.$chartjs || {}, i = e.renderProxy;
                    i && (B.each(ye, (function (e) {
                        ke(t, e, i)
                    })), delete e.renderProxy), t.classList.remove("chartjs-render-monitor")
                }(t), i && i.parentNode && i.parentNode.removeChild(i)
            }

            var De = {
                disableCSSInjection: !1,
                _enabled: "undefined" != typeof window && "undefined" != typeof document,
                _ensureLoaded: function (t) {
                    if (!this.disableCSSInjection) {
                        var e = t.getRootNode ? t.getRootNode() : document;
                        !function (t, e) {
                            var i = t.$chartjs || (t.$chartjs = {});
                            if (!i.containsStyles) {
                                i.containsStyles = !0, e = "/* Chart.js */\n" + e;
                                var n = document.createElement("style");
                                n.setAttribute("type", "text/css"), n.appendChild(document.createTextNode(e)), t.appendChild(n)
                            }
                        }(e.host ? e : document.head, ve)
                    }
                },
                acquireContext: function (t, e) {
                    "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                    var i = t && t.getContext && t.getContext("2d");
                    return i && i.canvas === t ? (this._ensureLoaded(t), function (t, e) {
                        var i = t.style, n = t.getAttribute("height"), r = t.getAttribute("width");
                        if (t.$chartjs = {
                            initial: {
                                height: n,
                                width: r,
                                style: {display: i.display, height: i.height, width: i.width}
                            }
                        }, i.display = i.display || "block", null === r || "" === r) {
                            var o = be(t, "width");
                            void 0 !== o && (t.width = o)
                        }
                        if (null === n || "" === n) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2); else {
                            var s = be(t, "height");
                            void 0 !== o && (t.height = s)
                        }
                    }(t, e), i) : null
                },
                releaseContext: function (t) {
                    var e = t.canvas;
                    if (e.$chartjs) {
                        var i = e.$chartjs.initial;
                        ["height", "width"].forEach((function (t) {
                            var n = i[t];
                            B.isNullOrUndef(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
                        })), B.each(i.style || {}, (function (t, i) {
                            e.style[i] = t
                        })), e.width = e.width, delete e.$chartjs
                    }
                },
                addEventListener: function (t, e, i) {
                    var n = t.canvas;
                    if ("resize" !== e) {
                        var r = i.$chartjs || (i.$chartjs = {});
                        xe(n, e, (r.proxies || (r.proxies = {}))[t.id + "_" + e] = function (e) {
                            i(function (t, e) {
                                var i = _e[t.type] || t.type, n = B.getRelativePosition(t, e);
                                return Ce(i, e, n.x, n.y, t)
                            }(e, t))
                        })
                    } else Te(n, i, t)
                },
                removeEventListener: function (t, e, i) {
                    var n = t.canvas;
                    if ("resize" !== e) {
                        var r = ((i.$chartjs || {}).proxies || {})[t.id + "_" + e];
                        r && ke(n, e, r)
                    } else Me(n)
                }
            };
            B.addEvent = xe, B.removeEvent = ke;
            var Oe = De._enabled ? De : {
                acquireContext: function (t) {
                    return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
                }
            }, Ee = B.extend({
                initialize: function () {
                }, acquireContext: function () {
                }, releaseContext: function () {
                }, addEventListener: function () {
                }, removeEventListener: function () {
                }
            }, Oe);
            R._set("global", {plugins: {}});
            var Pe = {
                _plugins: [], _cacheId: 0, register: function (t) {
                    var e = this._plugins;
                    [].concat(t).forEach((function (t) {
                        -1 === e.indexOf(t) && e.push(t)
                    })), this._cacheId++
                }, unregister: function (t) {
                    var e = this._plugins;
                    [].concat(t).forEach((function (t) {
                        var i = e.indexOf(t);
                        -1 !== i && e.splice(i, 1)
                    })), this._cacheId++
                }, clear: function () {
                    this._plugins = [], this._cacheId++
                }, count: function () {
                    return this._plugins.length
                }, getAll: function () {
                    return this._plugins
                }, notify: function (t, e, i) {
                    var n, r, o, s, a, l = this.descriptors(t), c = l.length;
                    for (n = 0; n < c; ++n) if ("function" == typeof (a = (o = (r = l[n]).plugin)[e]) && ((s = [t].concat(i || [])).push(r.options), !1 === a.apply(o, s))) return !1;
                    return !0
                }, descriptors: function (t) {
                    var e = t.$plugins || (t.$plugins = {});
                    if (e.id === this._cacheId) return e.descriptors;
                    var i = [], n = [], r = t && t.config || {}, o = r.options && r.options.plugins || {};
                    return this._plugins.concat(r.plugins || []).forEach((function (t) {
                        if (-1 === i.indexOf(t)) {
                            var e = t.id, r = o[e];
                            !1 !== r && (!0 === r && (r = B.clone(R.global.plugins[e])), i.push(t), n.push({
                                plugin: t,
                                options: r || {}
                            }))
                        }
                    })), e.descriptors = n, e.id = this._cacheId, n
                }, _invalidate: function (t) {
                    delete t.$plugins
                }
            }, Ae = {
                constructors: {}, defaults: {}, registerScaleType: function (t, e, i) {
                    this.constructors[t] = e, this.defaults[t] = B.clone(i)
                }, getScaleConstructor: function (t) {
                    return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                }, getScaleDefaults: function (t) {
                    return this.defaults.hasOwnProperty(t) ? B.merge({}, [R.scale, this.defaults[t]]) : {}
                }, updateScaleDefaults: function (t, e) {
                    this.defaults.hasOwnProperty(t) && (this.defaults[t] = B.extend(this.defaults[t], e))
                }, addScalesToLayout: function (t) {
                    B.each(t.scales, (function (e) {
                        e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, me.addBox(t, e)
                    }))
                }
            }, Ie = B.valueOrDefault, je = B.rtl.getRtlAdapter;
            R._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: B.noop,
                        title: function (t, e) {
                            var i = "", n = e.labels, r = n ? n.length : 0;
                            if (t.length > 0) {
                                var o = t[0];
                                o.label ? i = o.label : o.xLabel ? i = o.xLabel : r > 0 && o.index < r && (i = n[o.index])
                            }
                            return i
                        },
                        afterTitle: B.noop,
                        beforeBody: B.noop,
                        beforeLabel: B.noop,
                        label: function (t, e) {
                            var i = e.datasets[t.datasetIndex].label || "";
                            return i && (i += ": "), B.isNullOrUndef(t.value) ? i += t.yLabel : i += t.value, i
                        },
                        labelColor: function (t, e) {
                            var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                            return {borderColor: i.borderColor, backgroundColor: i.backgroundColor}
                        },
                        labelTextColor: function () {
                            return this._options.bodyFontColor
                        },
                        afterLabel: B.noop,
                        afterBody: B.noop,
                        beforeFooter: B.noop,
                        footer: B.noop,
                        afterFooter: B.noop
                    }
                }
            });
            var Ne = {
                average: function (t) {
                    if (!t.length) return !1;
                    var e, i, n = 0, r = 0, o = 0;
                    for (e = 0, i = t.length; e < i; ++e) {
                        var s = t[e];
                        if (s && s.hasValue()) {
                            var a = s.tooltipPosition();
                            n += a.x, r += a.y, ++o
                        }
                    }
                    return {x: n / o, y: r / o}
                }, nearest: function (t, e) {
                    var i, n, r, o = e.x, s = e.y, a = Number.POSITIVE_INFINITY;
                    for (i = 0, n = t.length; i < n; ++i) {
                        var l = t[i];
                        if (l && l.hasValue()) {
                            var c = l.getCenterPoint(), u = B.distanceBetweenPoints(e, c);
                            u < a && (a = u, r = l)
                        }
                    }
                    if (r) {
                        var h = r.tooltipPosition();
                        o = h.x, s = h.y
                    }
                    return {x: o, y: s}
                }
            };

            function Fe(t, e) {
                return e && (B.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
            }

            function Le(t) {
                return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
            }

            function Re(t) {
                var e = R.global;
                return {
                    xPadding: t.xPadding,
                    yPadding: t.yPadding,
                    xAlign: t.xAlign,
                    yAlign: t.yAlign,
                    rtl: t.rtl,
                    textDirection: t.textDirection,
                    bodyFontColor: t.bodyFontColor,
                    _bodyFontFamily: Ie(t.bodyFontFamily, e.defaultFontFamily),
                    _bodyFontStyle: Ie(t.bodyFontStyle, e.defaultFontStyle),
                    _bodyAlign: t.bodyAlign,
                    bodyFontSize: Ie(t.bodyFontSize, e.defaultFontSize),
                    bodySpacing: t.bodySpacing,
                    titleFontColor: t.titleFontColor,
                    _titleFontFamily: Ie(t.titleFontFamily, e.defaultFontFamily),
                    _titleFontStyle: Ie(t.titleFontStyle, e.defaultFontStyle),
                    titleFontSize: Ie(t.titleFontSize, e.defaultFontSize),
                    _titleAlign: t.titleAlign,
                    titleSpacing: t.titleSpacing,
                    titleMarginBottom: t.titleMarginBottom,
                    footerFontColor: t.footerFontColor,
                    _footerFontFamily: Ie(t.footerFontFamily, e.defaultFontFamily),
                    _footerFontStyle: Ie(t.footerFontStyle, e.defaultFontStyle),
                    footerFontSize: Ie(t.footerFontSize, e.defaultFontSize),
                    _footerAlign: t.footerAlign,
                    footerSpacing: t.footerSpacing,
                    footerMarginTop: t.footerMarginTop,
                    caretSize: t.caretSize,
                    cornerRadius: t.cornerRadius,
                    backgroundColor: t.backgroundColor,
                    opacity: 0,
                    legendColorBackground: t.multiKeyBackground,
                    displayColors: t.displayColors,
                    borderColor: t.borderColor,
                    borderWidth: t.borderWidth
                }
            }

            function $e(t, e) {
                return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding
            }

            function ze(t) {
                return Fe([], Le(t))
            }

            var We = X.extend({
                initialize: function () {
                    this._model = Re(this._options), this._lastActive = []
                }, getTitle: function () {
                    var t = this, e = t._options, i = e.callbacks, n = i.beforeTitle.apply(t, arguments),
                        r = i.title.apply(t, arguments), o = i.afterTitle.apply(t, arguments), s = [];
                    return s = Fe(s, Le(n)), s = Fe(s, Le(r)), s = Fe(s, Le(o))
                }, getBeforeBody: function () {
                    return ze(this._options.callbacks.beforeBody.apply(this, arguments))
                }, getBody: function (t, e) {
                    var i = this, n = i._options.callbacks, r = [];
                    return B.each(t, (function (t) {
                        var o = {before: [], lines: [], after: []};
                        Fe(o.before, Le(n.beforeLabel.call(i, t, e))), Fe(o.lines, n.label.call(i, t, e)), Fe(o.after, Le(n.afterLabel.call(i, t, e))), r.push(o)
                    })), r
                }, getAfterBody: function () {
                    return ze(this._options.callbacks.afterBody.apply(this, arguments))
                }, getFooter: function () {
                    var t = this, e = t._options.callbacks, i = e.beforeFooter.apply(t, arguments),
                        n = e.footer.apply(t, arguments), r = e.afterFooter.apply(t, arguments), o = [];
                    return o = Fe(o, Le(i)), o = Fe(o, Le(n)), o = Fe(o, Le(r))
                }, update: function (t) {
                    var e, i, n, r, o, s, a, l, c, u, h = this, d = h._options, f = h._model, p = h._model = Re(d),
                        g = h._active, m = h._data, v = {xAlign: f.xAlign, yAlign: f.yAlign}, y = {x: f.x, y: f.y},
                        _ = {width: f.width, height: f.height}, b = {x: f.caretX, y: f.caretY};
                    if (g.length) {
                        p.opacity = 1;
                        var w = [], x = [];
                        b = Ne[d.position].call(h, g, h._eventPosition);
                        var k = [];
                        for (e = 0, i = g.length; e < i; ++e) k.push((n = g[e], r = void 0, o = void 0, s = void 0, a = void 0, l = void 0, c = void 0, u = void 0, r = n._xScale, o = n._yScale || n._scale, s = n._index, a = n._datasetIndex, l = n._chart.getDatasetMeta(a).controller, c = l._getIndexScale(), u = l._getValueScale(), {
                            xLabel: r ? r.getLabelForIndex(s, a) : "",
                            yLabel: o ? o.getLabelForIndex(s, a) : "",
                            label: c ? "" + c.getLabelForIndex(s, a) : "",
                            value: u ? "" + u.getLabelForIndex(s, a) : "",
                            index: s,
                            datasetIndex: a,
                            x: n._model.x,
                            y: n._model.y
                        }));
                        d.filter && (k = k.filter((function (t) {
                            return d.filter(t, m)
                        }))), d.itemSort && (k = k.sort((function (t, e) {
                            return d.itemSort(t, e, m)
                        }))), B.each(k, (function (t) {
                            w.push(d.callbacks.labelColor.call(h, t, h._chart)), x.push(d.callbacks.labelTextColor.call(h, t, h._chart))
                        })), p.title = h.getTitle(k, m), p.beforeBody = h.getBeforeBody(k, m), p.body = h.getBody(k, m), p.afterBody = h.getAfterBody(k, m), p.footer = h.getFooter(k, m), p.x = b.x, p.y = b.y, p.caretPadding = d.caretPadding, p.labelColors = w, p.labelTextColors = x, p.dataPoints = k, _ = function (t, e) {
                            var i = t._chart.ctx, n = 2 * e.yPadding, r = 0, o = e.body, s = o.reduce((function (t, e) {
                                return t + e.before.length + e.lines.length + e.after.length
                            }), 0);
                            s += e.beforeBody.length + e.afterBody.length;
                            var a = e.title.length, l = e.footer.length, c = e.titleFontSize, u = e.bodyFontSize,
                                h = e.footerFontSize;
                            n += a * c, n += a ? (a - 1) * e.titleSpacing : 0, n += a ? e.titleMarginBottom : 0, n += s * u, n += s ? (s - 1) * e.bodySpacing : 0, n += l ? e.footerMarginTop : 0, n += l * h, n += l ? (l - 1) * e.footerSpacing : 0;
                            var d = 0, f = function (t) {
                                r = Math.max(r, i.measureText(t).width + d)
                            };
                            return i.font = B.fontString(c, e._titleFontStyle, e._titleFontFamily), B.each(e.title, f), i.font = B.fontString(u, e._bodyFontStyle, e._bodyFontFamily), B.each(e.beforeBody.concat(e.afterBody), f), d = e.displayColors ? u + 2 : 0, B.each(o, (function (t) {
                                B.each(t.before, f), B.each(t.lines, f), B.each(t.after, f)
                            })), d = 0, i.font = B.fontString(h, e._footerFontStyle, e._footerFontFamily), B.each(e.footer, f), {
                                width: r += 2 * e.xPadding,
                                height: n
                            }
                        }(this, p), y = function (t, e, i, n) {
                            var r = t.x, o = t.y, s = t.caretSize, a = t.caretPadding, l = t.cornerRadius, c = i.xAlign,
                                u = i.yAlign, h = s + a, d = l + a;
                            return "right" === c ? r -= e.width : "center" === c && ((r -= e.width / 2) + e.width > n.width && (r = n.width - e.width), r < 0 && (r = 0)), "top" === u ? o += h : o -= "bottom" === u ? e.height + h : e.height / 2, "center" === u ? "left" === c ? r += h : "right" === c && (r -= h) : "left" === c ? r -= d : "right" === c && (r += d), {
                                x: r,
                                y: o
                            }
                        }(p, _, v = function (t, e) {
                            var i, n, r, o, s, a = t._model, l = t._chart, c = t._chart.chartArea, u = "center",
                                h = "center";
                            a.y < e.height ? h = "top" : a.y > l.height - e.height && (h = "bottom");
                            var d = (c.left + c.right) / 2, f = (c.top + c.bottom) / 2;
                            "center" === h ? (i = function (t) {
                                return t <= d
                            }, n = function (t) {
                                return t > d
                            }) : (i = function (t) {
                                return t <= e.width / 2
                            }, n = function (t) {
                                return t >= l.width - e.width / 2
                            }), r = function (t) {
                                return t + e.width + a.caretSize + a.caretPadding > l.width
                            }, o = function (t) {
                                return t - e.width - a.caretSize - a.caretPadding < 0
                            }, s = function (t) {
                                return t <= f ? "top" : "bottom"
                            }, i(a.x) ? (u = "left", r(a.x) && (u = "center", h = s(a.y))) : n(a.x) && (u = "right", o(a.x) && (u = "center", h = s(a.y)));
                            var p = t._options;
                            return {xAlign: p.xAlign ? p.xAlign : u, yAlign: p.yAlign ? p.yAlign : h}
                        }(this, _), h._chart)
                    } else p.opacity = 0;
                    return p.xAlign = v.xAlign, p.yAlign = v.yAlign, p.x = y.x, p.y = y.y, p.width = _.width, p.height = _.height, p.caretX = b.x, p.caretY = b.y, h._model = p, t && d.custom && d.custom.call(h, p), h
                }, drawCaret: function (t, e) {
                    var i = this._chart.ctx, n = this._view, r = this.getCaretPosition(t, e, n);
                    i.lineTo(r.x1, r.y1), i.lineTo(r.x2, r.y2), i.lineTo(r.x3, r.y3)
                }, getCaretPosition: function (t, e, i) {
                    var n, r, o, s, a, l, c = i.caretSize, u = i.cornerRadius, h = i.xAlign, d = i.yAlign, f = t.x,
                        p = t.y, g = e.width, m = e.height;
                    if ("center" === d) a = p + m / 2, "left" === h ? (r = (n = f) - c, o = n, s = a + c, l = a - c) : (r = (n = f + g) + c, o = n, s = a - c, l = a + c); else if ("left" === h ? (n = (r = f + u + c) - c, o = r + c) : "right" === h ? (n = (r = f + g - u - c) - c, o = r + c) : (n = (r = i.caretX) - c, o = r + c), "top" === d) a = (s = p) - c, l = s; else {
                        a = (s = p + m) + c, l = s;
                        var v = o;
                        o = n, n = v
                    }
                    return {x1: n, x2: r, x3: o, y1: s, y2: a, y3: l}
                }, drawTitle: function (t, e, i) {
                    var n, r, o, s = e.title, a = s.length;
                    if (a) {
                        var l = je(e.rtl, e.x, e.width);
                        for (t.x = $e(e, e._titleAlign), i.textAlign = l.textAlign(e._titleAlign), i.textBaseline = "middle", n = e.titleFontSize, r = e.titleSpacing, i.fillStyle = e.titleFontColor, i.font = B.fontString(n, e._titleFontStyle, e._titleFontFamily), o = 0; o < a; ++o) i.fillText(s[o], l.x(t.x), t.y + n / 2), t.y += n + r, o + 1 === a && (t.y += e.titleMarginBottom - r)
                    }
                }, drawBody: function (t, e, i) {
                    var n, r, o, s, a, l, c, u, h = e.bodyFontSize, d = e.bodySpacing, f = e._bodyAlign, p = e.body,
                        g = e.displayColors, m = 0, v = g ? $e(e, "left") : 0, y = je(e.rtl, e.x, e.width),
                        _ = function (e) {
                            i.fillText(e, y.x(t.x + m), t.y + h / 2), t.y += h + d
                        }, b = y.textAlign(f);
                    for (i.textAlign = f, i.textBaseline = "middle", i.font = B.fontString(h, e._bodyFontStyle, e._bodyFontFamily), t.x = $e(e, b), i.fillStyle = e.bodyFontColor, B.each(e.beforeBody, _), m = g && "right" !== b ? "center" === f ? h / 2 + 1 : h + 2 : 0, a = 0, c = p.length; a < c; ++a) {
                        for (n = p[a], r = e.labelTextColors[a], o = e.labelColors[a], i.fillStyle = r, B.each(n.before, _), l = 0, u = (s = n.lines).length; l < u; ++l) {
                            if (g) {
                                var w = y.x(v);
                                i.fillStyle = e.legendColorBackground, i.fillRect(y.leftForLtr(w, h), t.y, h, h), i.lineWidth = 1, i.strokeStyle = o.borderColor, i.strokeRect(y.leftForLtr(w, h), t.y, h, h), i.fillStyle = o.backgroundColor, i.fillRect(y.leftForLtr(y.xPlus(w, 1), h - 2), t.y + 1, h - 2, h - 2), i.fillStyle = r
                            }
                            _(s[l])
                        }
                        B.each(n.after, _)
                    }
                    m = 0, B.each(e.afterBody, _), t.y -= d
                }, drawFooter: function (t, e, i) {
                    var n, r, o = e.footer, s = o.length;
                    if (s) {
                        var a = je(e.rtl, e.x, e.width);
                        for (t.x = $e(e, e._footerAlign), t.y += e.footerMarginTop, i.textAlign = a.textAlign(e._footerAlign), i.textBaseline = "middle", n = e.footerFontSize, i.fillStyle = e.footerFontColor, i.font = B.fontString(n, e._footerFontStyle, e._footerFontFamily), r = 0; r < s; ++r) i.fillText(o[r], a.x(t.x), t.y + n / 2), t.y += n + e.footerSpacing
                    }
                }, drawBackground: function (t, e, i, n) {
                    i.fillStyle = e.backgroundColor, i.strokeStyle = e.borderColor, i.lineWidth = e.borderWidth;
                    var r = e.xAlign, o = e.yAlign, s = t.x, a = t.y, l = n.width, c = n.height, u = e.cornerRadius;
                    i.beginPath(), i.moveTo(s + u, a), "top" === o && this.drawCaret(t, n), i.lineTo(s + l - u, a), i.quadraticCurveTo(s + l, a, s + l, a + u), "center" === o && "right" === r && this.drawCaret(t, n), i.lineTo(s + l, a + c - u), i.quadraticCurveTo(s + l, a + c, s + l - u, a + c), "bottom" === o && this.drawCaret(t, n), i.lineTo(s + u, a + c), i.quadraticCurveTo(s, a + c, s, a + c - u), "center" === o && "left" === r && this.drawCaret(t, n), i.lineTo(s, a + u), i.quadraticCurveTo(s, a, s + u, a), i.closePath(), i.fill(), e.borderWidth > 0 && i.stroke()
                }, draw: function () {
                    var t = this._chart.ctx, e = this._view;
                    if (0 !== e.opacity) {
                        var i = {width: e.width, height: e.height}, n = {x: e.x, y: e.y},
                            r = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                            o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                        this._options.enabled && o && (t.save(), t.globalAlpha = r, this.drawBackground(n, e, t, i), n.y += e.yPadding, B.rtl.overrideTextDirection(t, e.textDirection), this.drawTitle(n, e, t), this.drawBody(n, e, t), this.drawFooter(n, e, t), B.rtl.restoreTextDirection(t, e.textDirection), t.restore())
                    }
                }, handleEvent: function (t) {
                    var e, i = this, n = i._options;
                    return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : (i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), n.reverse && i._active.reverse()), (e = !B.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
                        x: t.x,
                        y: t.y
                    }, i.update(!0), i.pivot())), e
                }
            }), He = Ne, Be = We;
            Be.positioners = He;
            var Ve = B.valueOrDefault;

            function Ye() {
                return B.merge({}, [].slice.call(arguments), {
                    merger: function (t, e, i, n) {
                        if ("xAxes" === t || "yAxes" === t) {
                            var r, o, s, a = i[t].length;
                            for (e[t] || (e[t] = []), r = 0; r < a; ++r) s = i[t][r], o = Ve(s.type, "xAxes" === t ? "category" : "linear"), r >= e[t].length && e[t].push({}), !e[t][r].type || s.type && s.type !== e[t][r].type ? B.merge(e[t][r], [Ae.getScaleDefaults(o), s]) : B.merge(e[t][r], s)
                        } else B._merger(t, e, i, n)
                    }
                })
            }

            function qe() {
                return B.merge({}, [].slice.call(arguments), {
                    merger: function (t, e, i, n) {
                        var r = e[t] || {}, o = i[t];
                        "scales" === t ? e[t] = Ye(r, o) : "scale" === t ? e[t] = B.merge(r, [Ae.getScaleDefaults(o.type), o]) : B._merger(t, e, i, n)
                    }
                })
            }

            function Ue(t) {
                var e = t.options;
                B.each(t.scales, (function (e) {
                    me.removeBox(t, e)
                })), e = qe(R.global, R[t.config.type], e), t.options = t.config.options = e, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = e.tooltips, t.tooltip.initialize()
            }

            function Ge(t, e, i) {
                var n, r = function (t) {
                    return t.id === n
                };
                do {
                    n = e + i++
                } while (B.findIndex(t, r) >= 0);
                return n
            }

            function Qe(t) {
                return "top" === t || "bottom" === t
            }

            function Xe(t, e) {
                return function (i, n) {
                    return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t]
                }
            }

            R._set("global", {
                elements: {},
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {onHover: null, mode: "nearest", intersect: !0, animationDuration: 400},
                onClick: null,
                maintainAspectRatio: !0,
                responsive: !0,
                responsiveAnimationDuration: 0
            });
            var Ze = function (t, e) {
                return this.construct(t, e), this
            };
            B.extend(Ze.prototype, {
                construct: function (t, e) {
                    var i = this;
                    e = function (t) {
                        var e = (t = t || {}).data = t.data || {};
                        return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = qe(R.global, R[t.type], t.options || {}), t
                    }(e);
                    var n = Ee.acquireContext(t, e), r = n && n.canvas, o = r && r.height, s = r && r.width;
                    i.id = B.uid(), i.ctx = n, i.canvas = r, i.config = e, i.width = s, i.height = o, i.aspectRatio = o ? s / o : null, i.options = e.options, i._bufferedRender = !1, i._layers = [], i.chart = i, i.controller = i, Ze.instances[i.id] = i, Object.defineProperty(i, "data", {
                        get: function () {
                            return i.config.data
                        }, set: function (t) {
                            i.config.data = t
                        }
                    }), n && r ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                }, initialize: function () {
                    var t = this;
                    return Pe.notify(t, "beforeInit"), B.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.initToolTip(), Pe.notify(t, "afterInit"), t
                }, clear: function () {
                    return B.canvas.clear(this), this
                }, stop: function () {
                    return J.cancelAnimation(this), this
                }, resize: function (t) {
                    var e = this, i = e.options, n = e.canvas, r = i.maintainAspectRatio && e.aspectRatio || null,
                        o = Math.max(0, Math.floor(B.getMaximumWidth(n))),
                        s = Math.max(0, Math.floor(r ? o / r : B.getMaximumHeight(n)));
                    if ((e.width !== o || e.height !== s) && (n.width = e.width = o, n.height = e.height = s, n.style.width = o + "px", n.style.height = s + "px", B.retinaScale(e, i.devicePixelRatio), !t)) {
                        var a = {width: o, height: s};
                        Pe.notify(e, "resize", [a]), i.onResize && i.onResize(e, a), e.stop(), e.update({duration: i.responsiveAnimationDuration})
                    }
                }, ensureScalesHaveIDs: function () {
                    var t = this.options, e = t.scales || {}, i = t.scale;
                    B.each(e.xAxes, (function (t, i) {
                        t.id || (t.id = Ge(e.xAxes, "x-axis-", i))
                    })), B.each(e.yAxes, (function (t, i) {
                        t.id || (t.id = Ge(e.yAxes, "y-axis-", i))
                    })), i && (i.id = i.id || "scale")
                }, buildOrUpdateScales: function () {
                    var t = this, e = t.options, i = t.scales || {}, n = [],
                        r = Object.keys(i).reduce((function (t, e) {
                            return t[e] = !1, t
                        }), {});
                    e.scales && (n = n.concat((e.scales.xAxes || []).map((function (t) {
                        return {options: t, dtype: "category", dposition: "bottom"}
                    })), (e.scales.yAxes || []).map((function (t) {
                        return {options: t, dtype: "linear", dposition: "left"}
                    })))), e.scale && n.push({
                        options: e.scale,
                        dtype: "radialLinear",
                        isDefault: !0,
                        dposition: "chartArea"
                    }), B.each(n, (function (e) {
                        var n = e.options, o = n.id, s = Ve(n.type, e.dtype);
                        Qe(n.position) !== Qe(e.dposition) && (n.position = e.dposition), r[o] = !0;
                        var a = null;
                        if (o in i && i[o].type === s) (a = i[o]).options = n, a.ctx = t.ctx, a.chart = t; else {
                            var l = Ae.getScaleConstructor(s);
                            if (!l) return;
                            a = new l({id: o, type: s, options: n, ctx: t.ctx, chart: t}), i[a.id] = a
                        }
                        a.mergeTicksOptions(), e.isDefault && (t.scale = a)
                    })), B.each(r, (function (t, e) {
                        t || delete i[e]
                    })), t.scales = i, Ae.addScalesToLayout(this)
                }, buildOrUpdateControllers: function () {
                    var t, e, i = this, n = [], r = i.data.datasets;
                    for (t = 0, e = r.length; t < e; t++) {
                        var o = r[t], s = i.getDatasetMeta(t), a = o.type || i.config.type;
                        if (s.type && s.type !== a && (i.destroyDatasetMeta(t), s = i.getDatasetMeta(t)), s.type = a, s.order = o.order || 0, s.index = t, s.controller) s.controller.updateIndex(t), s.controller.linkScales(); else {
                            var l = Jt[s.type];
                            if (void 0 === l) throw new Error('"' + s.type + '" is not a chart type.');
                            s.controller = new l(i, t), n.push(s.controller)
                        }
                    }
                    return n
                }, resetElements: function () {
                    var t = this;
                    B.each(t.data.datasets, (function (e, i) {
                        t.getDatasetMeta(i).controller.reset()
                    }), t)
                }, reset: function () {
                    this.resetElements(), this.tooltip.initialize()
                }, update: function (t) {
                    var e, i, n = this;
                    if (t && "object" == typeof t || (t = {
                        duration: t,
                        lazy: arguments[1]
                    }), Ue(n), Pe._invalidate(n), !1 !== Pe.notify(n, "beforeUpdate")) {
                        n.tooltip._data = n.data;
                        var r = n.buildOrUpdateControllers();
                        for (e = 0, i = n.data.datasets.length; e < i; e++) n.getDatasetMeta(e).controller.buildOrUpdateElements();
                        n.updateLayout(), n.options.animation && n.options.animation.duration && B.each(r, (function (t) {
                            t.reset()
                        })), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], Pe.notify(n, "afterUpdate"), n._layers.sort(Xe("z", "_idx")), n._bufferedRender ? n._bufferedRequest = {
                            duration: t.duration,
                            easing: t.easing,
                            lazy: t.lazy
                        } : n.render(t)
                    }
                }, updateLayout: function () {
                    var t = this;
                    !1 !== Pe.notify(t, "beforeLayout") && (me.update(this, this.width, this.height), t._layers = [], B.each(t.boxes, (function (e) {
                        e._configure && e._configure(), t._layers.push.apply(t._layers, e._layers())
                    }), t), t._layers.forEach((function (t, e) {
                        t._idx = e
                    })), Pe.notify(t, "afterScaleUpdate"), Pe.notify(t, "afterLayout"))
                }, updateDatasets: function () {
                    if (!1 !== Pe.notify(this, "beforeDatasetsUpdate")) {
                        for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                        Pe.notify(this, "afterDatasetsUpdate")
                    }
                }, updateDataset: function (t) {
                    var e = this.getDatasetMeta(t), i = {meta: e, index: t};
                    !1 !== Pe.notify(this, "beforeDatasetUpdate", [i]) && (e.controller._update(), Pe.notify(this, "afterDatasetUpdate", [i]))
                }, render: function (t) {
                    var e = this;
                    t && "object" == typeof t || (t = {duration: t, lazy: arguments[1]});
                    var i = e.options.animation, n = Ve(t.duration, i && i.duration), r = t.lazy;
                    if (!1 !== Pe.notify(e, "beforeRender")) {
                        var o = function (t) {
                            Pe.notify(e, "afterRender"), B.callback(i && i.onComplete, [t], e)
                        };
                        if (i && n) {
                            var s = new K({
                                numSteps: n / 16.66, easing: t.easing || i.easing, render: function (t, e) {
                                    var i = B.easing.effects[e.easing], n = e.currentStep, r = n / e.numSteps;
                                    t.draw(i(r), r, n)
                                }, onAnimationProgress: i.onProgress, onAnimationComplete: o
                            });
                            J.addAnimation(e, s, n, r)
                        } else e.draw(), o(new K({numSteps: 0, chart: e}));
                        return e
                    }
                }, draw: function (t) {
                    var e, i, n = this;
                    if (n.clear(), B.isNullOrUndef(t) && (t = 1), n.transition(t), !(n.width <= 0 || n.height <= 0) && !1 !== Pe.notify(n, "beforeDraw", [t])) {
                        for (i = n._layers, e = 0; e < i.length && i[e].z <= 0; ++e) i[e].draw(n.chartArea);
                        for (n.drawDatasets(t); e < i.length; ++e) i[e].draw(n.chartArea);
                        n._drawTooltip(t), Pe.notify(n, "afterDraw", [t])
                    }
                }, transition: function (t) {
                    for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                    this.tooltip.transition(t)
                }, _getSortedDatasetMetas: function (t) {
                    var e, i, n = [];
                    for (e = 0, i = (this.data.datasets || []).length; e < i; ++e) t && !this.isDatasetVisible(e) || n.push(this.getDatasetMeta(e));
                    return n.sort(Xe("order", "index")), n
                }, _getSortedVisibleDatasetMetas: function () {
                    return this._getSortedDatasetMetas(!0)
                }, drawDatasets: function (t) {
                    var e, i;
                    if (!1 !== Pe.notify(this, "beforeDatasetsDraw", [t])) {
                        for (i = (e = this._getSortedVisibleDatasetMetas()).length - 1; i >= 0; --i) this.drawDataset(e[i], t);
                        Pe.notify(this, "afterDatasetsDraw", [t])
                    }
                }, drawDataset: function (t, e) {
                    var i = {meta: t, index: t.index, easingValue: e};
                    !1 !== Pe.notify(this, "beforeDatasetDraw", [i]) && (t.controller.draw(e), Pe.notify(this, "afterDatasetDraw", [i]))
                }, _drawTooltip: function (t) {
                    var e = this.tooltip, i = {tooltip: e, easingValue: t};
                    !1 !== Pe.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), Pe.notify(this, "afterTooltipDraw", [i]))
                }, getElementAtEvent: function (t) {
                    return se.modes.single(this, t)
                }, getElementsAtEvent: function (t) {
                    return se.modes.label(this, t, {intersect: !0})
                }, getElementsAtXAxis: function (t) {
                    return se.modes["x-axis"](this, t, {intersect: !0})
                }, getElementsAtEventForMode: function (t, e, i) {
                    var n = se.modes[e];
                    return "function" == typeof n ? n(this, t, i) : []
                }, getDatasetAtEvent: function (t) {
                    return se.modes.dataset(this, t, {intersect: !0})
                }, getDatasetMeta: function (t) {
                    var e = this.data.datasets[t];
                    e._meta || (e._meta = {});
                    var i = e._meta[this.id];
                    return i || (i = e._meta[this.id] = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: e.order || 0,
                        index: t
                    }), i
                }, getVisibleDatasetCount: function () {
                    for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
                    return t
                }, isDatasetVisible: function (t) {
                    var e = this.getDatasetMeta(t);
                    return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                }, generateLegend: function () {
                    return this.options.legendCallback(this)
                }, destroyDatasetMeta: function (t) {
                    var e = this.id, i = this.data.datasets[t], n = i._meta && i._meta[e];
                    n && (n.controller.destroy(), delete i._meta[e])
                }, destroy: function () {
                    var t, e, i = this, n = i.canvas;
                    for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t) i.destroyDatasetMeta(t);
                    n && (i.unbindEvents(), B.canvas.clear(i), Ee.releaseContext(i.ctx), i.canvas = null, i.ctx = null), Pe.notify(i, "destroy"), delete Ze.instances[i.id]
                }, toBase64Image: function () {
                    return this.canvas.toDataURL.apply(this.canvas, arguments)
                }, initToolTip: function () {
                    var t = this;
                    t.tooltip = new Be({_chart: t, _chartInstance: t, _data: t.data, _options: t.options.tooltips}, t)
                }, bindEvents: function () {
                    var t = this, e = t._listeners = {}, i = function () {
                        t.eventHandler.apply(t, arguments)
                    };
                    B.each(t.options.events, (function (n) {
                        Ee.addEventListener(t, n, i), e[n] = i
                    })), t.options.responsive && (i = function () {
                        t.resize()
                    }, Ee.addEventListener(t, "resize", i), e.resize = i)
                }, unbindEvents: function () {
                    var t = this, e = t._listeners;
                    e && (delete t._listeners, B.each(e, (function (e, i) {
                        Ee.removeEventListener(t, i, e)
                    })))
                }, updateHoverStyle: function (t, e, i) {
                    var n, r, o, s = i ? "set" : "remove";
                    for (r = 0, o = t.length; r < o; ++r) (n = t[r]) && this.getDatasetMeta(n._datasetIndex).controller[s + "HoverStyle"](n);
                    "dataset" === e && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + s + "DatasetHoverStyle"]()
                }, eventHandler: function (t) {
                    var e = this, i = e.tooltip;
                    if (!1 !== Pe.notify(e, "beforeEvent", [t])) {
                        e._bufferedRender = !0, e._bufferedRequest = null;
                        var n = e.handleEvent(t);
                        i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), Pe.notify(e, "afterEvent", [t]);
                        var r = e._bufferedRequest;
                        return r ? e.render(r) : n && !e.animating && (e.stop(), e.render({
                            duration: e.options.hover.animationDuration,
                            lazy: !0
                        })), e._bufferedRender = !1, e._bufferedRequest = null, e
                    }
                }, handleEvent: function (t) {
                    var e, i = this, n = i.options || {}, r = n.hover;
                    return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, r.mode, r), B.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, r.mode, !1), i.active.length && r.mode && i.updateHoverStyle(i.active, r.mode, !0), e = !B.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e
                }
            }), Ze.instances = {};
            var Ke = Ze;

            function Je() {
                throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
            }

            function ti(t) {
                this.options = t || {}
            }

            Ze.Controller = Ze, Ze.types = {}, B.configMerge = qe, B.scaleMerge = Ye, B.extend(ti.prototype, {
                formats: Je,
                parse: Je,
                format: Je,
                add: Je,
                diff: Je,
                startOf: Je,
                endOf: Je,
                _create: function (t) {
                    return t
                }
            }), ti.override = function (t) {
                B.extend(ti.prototype, t)
            };
            var ei = {_date: ti}, ii = {
                formatters: {
                    values: function (t) {
                        return B.isArray(t) ? t : "" + t
                    }, linear: function (t, e, i) {
                        var n = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                        Math.abs(n) > 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
                        var r = B.log10(Math.abs(n)), o = "";
                        if (0 !== t) if (Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1])) < 1e-4) {
                            var s = B.log10(Math.abs(t)), a = Math.floor(s) - Math.floor(r);
                            a = Math.max(Math.min(a, 20), 0), o = t.toExponential(a)
                        } else {
                            var l = -1 * Math.floor(r);
                            l = Math.max(Math.min(l, 20), 0), o = t.toFixed(l)
                        } else o = "0";
                        return o
                    }, logarithmic: function (t, e, i) {
                        var n = t / Math.pow(10, Math.floor(B.log10(t)));
                        return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === e || e === i.length - 1 ? t.toExponential() : ""
                    }
                }
            }, ni = B.isArray, ri = B.isNullOrUndef, oi = B.valueOrDefault, si = B.valueAtIndexOrDefault;

            function ai(t, e, i) {
                var n, r = t.getTicks().length, o = Math.min(e, r - 1), s = t.getPixelForTick(o), a = t._startPixel,
                    l = t._endPixel;
                if (!(i && (n = 1 === r ? Math.max(s - a, l - s) : 0 === e ? (t.getPixelForTick(1) - s) / 2 : (s - t.getPixelForTick(o - 1)) / 2, (s += o < e ? n : -n) < a - 1e-6 || s > l + 1e-6))) return s
            }

            function li(t, e, i, n) {
                var r, o, s, a, l, c, u, h, d, f, p, g, m, v = i.length, y = [], _ = [], b = [];
                for (r = 0; r < v; ++r) {
                    if (a = i[r].label, l = i[r].major ? e.major : e.minor, t.font = c = l.string, u = n[c] = n[c] || {
                        data: {},
                        gc: []
                    }, h = l.lineHeight, d = f = 0, ri(a) || ni(a)) {
                        if (ni(a)) for (o = 0, s = a.length; o < s; ++o) p = a[o], ri(p) || ni(p) || (d = B.measureText(t, u.data, u.gc, d, p), f += h)
                    } else d = B.measureText(t, u.data, u.gc, d, a), f = h;
                    y.push(d), _.push(f), b.push(h / 2)
                }

                function w(t) {
                    return {width: y[t] || 0, height: _[t] || 0, offset: b[t] || 0}
                }

                return function (t, e) {
                    B.each(t, (function (t) {
                        var i, n = t.gc, r = n.length / 2;
                        if (r > e) {
                            for (i = 0; i < r; ++i) delete t.data[n[i]];
                            n.splice(0, r)
                        }
                    }))
                }(n, v), g = y.indexOf(Math.max.apply(null, y)), m = _.indexOf(Math.max.apply(null, _)), {
                    first: w(0),
                    last: w(v - 1),
                    widest: w(g),
                    highest: w(m)
                }
            }

            function ci(t) {
                return t.drawTicks ? t.tickMarkLength : 0
            }

            function ui(t) {
                var e, i;
                return t.display ? (e = B.options._parseFont(t), i = B.options.toPadding(t.padding), e.lineHeight + i.height) : 0
            }

            function hi(t, e) {
                return B.extend(B.options._parseFont({
                    fontFamily: oi(e.fontFamily, t.fontFamily),
                    fontSize: oi(e.fontSize, t.fontSize),
                    fontStyle: oi(e.fontStyle, t.fontStyle),
                    lineHeight: oi(e.lineHeight, t.lineHeight)
                }), {color: B.options.resolve([e.fontColor, t.fontColor, R.global.defaultFontColor])})
            }

            function di(t) {
                var e = hi(t, t.minor);
                return {minor: e, major: t.major.enabled ? hi(t, t.major) : e}
            }

            function fi(t) {
                var e, i, n, r = [];
                for (i = 0, n = t.length; i < n; ++i) void 0 !== (e = t[i])._index && r.push(e);
                return r
            }

            function pi(t, e, i, n) {
                var r, o, s, a, l = oi(i, 0), c = Math.min(oi(n, t.length), t.length), u = 0;
                for (e = Math.ceil(e), n && (e = (r = n - i) / Math.floor(r / e)), a = l; a < 0;) u++, a = Math.round(l + u * e);
                for (o = Math.max(l, 0); o < c; o++) s = t[o], o === a ? (s._index = o, u++, a = Math.round(l + u * e)) : delete s.label
            }

            R._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0,0,0,0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {display: !1, labelString: "", padding: {top: 4, bottom: 4}},
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: ii.formatters.values,
                    minor: {},
                    major: {}
                }
            });
            var gi = X.extend({
                zeroLineIndex: 0,
                getPadding: function () {
                    return {
                        left: this.paddingLeft || 0,
                        top: this.paddingTop || 0,
                        right: this.paddingRight || 0,
                        bottom: this.paddingBottom || 0
                    }
                },
                getTicks: function () {
                    return this._ticks
                },
                _getLabels: function () {
                    var t = this.chart.data;
                    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
                },
                mergeTicksOptions: function () {
                },
                beforeUpdate: function () {
                    B.callback(this.options.beforeUpdate, [this])
                },
                update: function (t, e, i) {
                    var n, r, o, s, a, l = this, c = l.options.ticks, u = c.sampleSize;
                    if (l.beforeUpdate(), l.maxWidth = t, l.maxHeight = e, l.margins = B.extend({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, i), l._ticks = null, l.ticks = null, l._labelSizes = null, l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l._gridLineItems = null, l._labelItems = null, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), s = l.buildTicks() || [], (!(s = l.afterBuildTicks(s) || s) || !s.length) && l.ticks) for (s = [], n = 0, r = l.ticks.length; n < r; ++n) s.push({
                        value: l.ticks[n],
                        major: !1
                    });
                    return l._ticks = s, a = u < s.length, o = l._convertTicksToLabels(a ? function (t, e) {
                        for (var i = [], n = t.length / e, r = 0, o = t.length; r < o; r += n) i.push(t[Math.floor(r)]);
                        return i
                    }(s, u) : s), l._configure(), l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l._ticksToDraw = c.display && (c.autoSkip || "auto" === c.source) ? l._autoSkip(s) : s, a && (o = l._convertTicksToLabels(l._ticksToDraw)), l.ticks = o, l.afterUpdate(), l.minSize
                },
                _configure: function () {
                    var t, e, i = this, n = i.options.ticks.reverse;
                    i.isHorizontal() ? (t = i.left, e = i.right) : (t = i.top, e = i.bottom, n = !n), i._startPixel = t, i._endPixel = e, i._reversePixels = n, i._length = e - t
                },
                afterUpdate: function () {
                    B.callback(this.options.afterUpdate, [this])
                },
                beforeSetDimensions: function () {
                    B.callback(this.options.beforeSetDimensions, [this])
                },
                setDimensions: function () {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                },
                afterSetDimensions: function () {
                    B.callback(this.options.afterSetDimensions, [this])
                },
                beforeDataLimits: function () {
                    B.callback(this.options.beforeDataLimits, [this])
                },
                determineDataLimits: B.noop,
                afterDataLimits: function () {
                    B.callback(this.options.afterDataLimits, [this])
                },
                beforeBuildTicks: function () {
                    B.callback(this.options.beforeBuildTicks, [this])
                },
                buildTicks: B.noop,
                afterBuildTicks: function (t) {
                    var e = this;
                    return ni(t) && t.length ? B.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = B.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t)
                },
                beforeTickToLabelConversion: function () {
                    B.callback(this.options.beforeTickToLabelConversion, [this])
                },
                convertTicksToLabels: function () {
                    var t = this.options.ticks;
                    this.ticks = this.ticks.map(t.userCallback || t.callback, this)
                },
                afterTickToLabelConversion: function () {
                    B.callback(this.options.afterTickToLabelConversion, [this])
                },
                beforeCalculateTickRotation: function () {
                    B.callback(this.options.beforeCalculateTickRotation, [this])
                },
                calculateTickRotation: function () {
                    var t, e, i, n, r, o, s, a = this, l = a.options, c = l.ticks, u = a.getTicks().length,
                        h = c.minRotation || 0, d = c.maxRotation, f = h;
                    !a._isVisible() || !c.display || h >= d || u <= 1 || !a.isHorizontal() ? a.labelRotation = h : (e = (t = a._getLabelSizes()).widest.width, i = t.highest.height - t.highest.offset, n = Math.min(a.maxWidth, a.chart.width - e), e + 6 > (r = l.offset ? a.maxWidth / u : n / (u - 1)) && (r = n / (u - (l.offset ? .5 : 1)), o = a.maxHeight - ci(l.gridLines) - c.padding - ui(l.scaleLabel), s = Math.sqrt(e * e + i * i), f = B.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / r, 1)), Math.asin(Math.min(o / s, 1)) - Math.asin(i / s))), f = Math.max(h, Math.min(d, f))), a.labelRotation = f)
                },
                afterCalculateTickRotation: function () {
                    B.callback(this.options.afterCalculateTickRotation, [this])
                },
                beforeFit: function () {
                    B.callback(this.options.beforeFit, [this])
                },
                fit: function () {
                    var t = this, e = t.minSize = {width: 0, height: 0}, i = t.chart, n = t.options, r = n.ticks,
                        o = n.scaleLabel, s = n.gridLines, a = t._isVisible(), l = "bottom" === n.position,
                        c = t.isHorizontal();
                    if (c ? e.width = t.maxWidth : a && (e.width = ci(s) + ui(o)), c ? a && (e.height = ci(s) + ui(o)) : e.height = t.maxHeight, r.display && a) {
                        var u = di(r), h = t._getLabelSizes(), d = h.first, f = h.last, p = h.widest, g = h.highest,
                            m = .4 * u.minor.lineHeight, v = r.padding;
                        if (c) {
                            var y = 0 !== t.labelRotation, _ = B.toRadians(t.labelRotation), b = Math.cos(_),
                                w = Math.sin(_), x = w * p.width + b * (g.height - (y ? g.offset : 0)) + (y ? 0 : m);
                            e.height = Math.min(t.maxHeight, e.height + x + v);
                            var k, C, S = t.getPixelForTick(0) - t.left,
                                T = t.right - t.getPixelForTick(t.getTicks().length - 1);
                            y ? (k = l ? b * d.width + w * d.offset : w * (d.height - d.offset), C = l ? w * (f.height - f.offset) : b * f.width + w * f.offset) : (k = d.width / 2, C = f.width / 2), t.paddingLeft = Math.max((k - S) * t.width / (t.width - S), 0) + 3, t.paddingRight = Math.max((C - T) * t.width / (t.width - T), 0) + 3
                        } else {
                            var M = r.mirror ? 0 : p.width + v + m;
                            e.width = Math.min(t.maxWidth, e.width + M), t.paddingTop = d.height / 2, t.paddingBottom = f.height / 2
                        }
                    }
                    t.handleMargins(), c ? (t.width = t._length = i.width - t.margins.left - t.margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = i.height - t.margins.top - t.margins.bottom)
                },
                handleMargins: function () {
                    var t = this;
                    t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left), t.margins.top = Math.max(t.paddingTop, t.margins.top), t.margins.right = Math.max(t.paddingRight, t.margins.right), t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom))
                },
                afterFit: function () {
                    B.callback(this.options.afterFit, [this])
                },
                isHorizontal: function () {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t
                },
                isFullWidth: function () {
                    return this.options.fullWidth
                },
                getRightValue: function (t) {
                    if (ri(t)) return NaN;
                    if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;
                    if (t) if (this.isHorizontal()) {
                        if (void 0 !== t.x) return this.getRightValue(t.x)
                    } else if (void 0 !== t.y) return this.getRightValue(t.y);
                    return t
                },
                _convertTicksToLabels: function (t) {
                    var e, i, n, r = this;
                    for (r.ticks = t.map((function (t) {
                        return t.value
                    })), r.beforeTickToLabelConversion(), e = r.convertTicksToLabels(t) || r.ticks, r.afterTickToLabelConversion(), i = 0, n = t.length; i < n; ++i) t[i].label = e[i];
                    return e
                },
                _getLabelSizes: function () {
                    var t = this, e = t._labelSizes;
                    return e || (t._labelSizes = e = li(t.ctx, di(t.options.ticks), t.getTicks(), t.longestTextCache), t.longestLabelWidth = e.widest.width), e
                },
                _parseValue: function (t) {
                    var e, i, n, r;
                    return ni(t) ? (e = +this.getRightValue(t[0]), i = +this.getRightValue(t[1]), n = Math.min(e, i), r = Math.max(e, i)) : (e = void 0, i = t = +this.getRightValue(t), n = t, r = t), {
                        min: n,
                        max: r,
                        start: e,
                        end: i
                    }
                },
                _getScaleLabel: function (t) {
                    var e = this._parseValue(t);
                    return void 0 !== e.start ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t)
                },
                getLabelForIndex: B.noop,
                getPixelForValue: B.noop,
                getValueForPixel: B.noop,
                getPixelForTick: function (t) {
                    var e = this.options.offset, i = this._ticks.length, n = 1 / Math.max(i - (e ? 0 : 1), 1);
                    return t < 0 || t > i - 1 ? null : this.getPixelForDecimal(t * n + (e ? n / 2 : 0))
                },
                getPixelForDecimal: function (t) {
                    return this._reversePixels && (t = 1 - t), this._startPixel + t * this._length
                },
                getDecimalForPixel: function (t) {
                    var e = (t - this._startPixel) / this._length;
                    return this._reversePixels ? 1 - e : e
                },
                getBasePixel: function () {
                    return this.getPixelForValue(this.getBaseValue())
                },
                getBaseValue: function () {
                    var t = this.min, e = this.max;
                    return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                },
                _autoSkip: function (t) {
                    var e, i, n, r, o = this.options.ticks, s = this._length,
                        a = o.maxTicksLimit || s / this._tickSize() + 1, l = o.major.enabled ? function (t) {
                            var e, i, n = [];
                            for (e = 0, i = t.length; e < i; e++) t[e].major && n.push(e);
                            return n
                        }(t) : [], c = l.length, u = l[0], h = l[c - 1];
                    if (c > a) return function (t, e, i) {
                        var n, r, o = 0, s = e[0];
                        for (i = Math.ceil(i), n = 0; n < t.length; n++) r = t[n], n === s ? (r._index = n, s = e[++o * i]) : delete r.label
                    }(t, l, c / a), fi(t);
                    if (n = function (t, e, i, n) {
                        var r, o, s, a, l = function (t) {
                            var e, i, n = t.length;
                            if (n < 2) return !1;
                            for (i = t[0], e = 1; e < n; ++e) if (t[e] - t[e - 1] !== i) return !1;
                            return i
                        }(t), c = (e.length - 1) / n;
                        if (!l) return Math.max(c, 1);
                        for (s = 0, a = (r = B.math._factorize(l)).length - 1; s < a; s++) if ((o = r[s]) > c) return o;
                        return Math.max(c, 1)
                    }(l, t, 0, a), c > 0) {
                        for (e = 0, i = c - 1; e < i; e++) pi(t, n, l[e], l[e + 1]);
                        return r = c > 1 ? (h - u) / (c - 1) : null, pi(t, n, B.isNullOrUndef(r) ? 0 : u - r, u), pi(t, n, h, B.isNullOrUndef(r) ? t.length : h + r), fi(t)
                    }
                    return pi(t, n), fi(t)
                },
                _tickSize: function () {
                    var t = this.options.ticks, e = B.toRadians(this.labelRotation), i = Math.abs(Math.cos(e)),
                        n = Math.abs(Math.sin(e)), r = this._getLabelSizes(), o = t.autoSkipPadding || 0,
                        s = r ? r.widest.width + o : 0, a = r ? r.highest.height + o : 0;
                    return this.isHorizontal() ? a * i > s * n ? s / i : a / n : a * n < s * i ? a / i : s / n
                },
                _isVisible: function () {
                    var t, e, i, n = this.chart, r = this.options.display;
                    if ("auto" !== r) return !!r;
                    for (t = 0, e = n.data.datasets.length; t < e; ++t) if (n.isDatasetVisible(t) && ((i = n.getDatasetMeta(t)).xAxisID === this.id || i.yAxisID === this.id)) return !0;
                    return !1
                },
                _computeGridLineItems: function (t) {
                    var e, i, n, r, o, s, a, l, c, u, h, d, f, p, g, m, v, y = this, _ = y.chart, b = y.options,
                        w = b.gridLines, x = b.position, k = w.offsetGridLines, C = y.isHorizontal(),
                        S = y._ticksToDraw, T = S.length + (k ? 1 : 0), M = ci(w), D = [],
                        O = w.drawBorder ? si(w.lineWidth, 0, 0) : 0, E = O / 2, P = B._alignPixel, A = function (t) {
                            return P(_, t, O)
                        };
                    for ("top" === x ? (e = A(y.bottom), a = y.bottom - M, c = e - E, h = A(t.top) + E, f = t.bottom) : "bottom" === x ? (e = A(y.top), h = t.top, f = A(t.bottom) - E, a = e + E, c = y.top + M) : "left" === x ? (e = A(y.right), s = y.right - M, l = e - E, u = A(t.left) + E, d = t.right) : (e = A(y.left), u = t.left, d = A(t.right) - E, s = e + E, l = y.left + M), i = 0; i < T; ++i) n = S[i] || {}, ri(n.label) && i < S.length || (i === y.zeroLineIndex && b.offset === k ? (p = w.zeroLineWidth, g = w.zeroLineColor, m = w.zeroLineBorderDash || [], v = w.zeroLineBorderDashOffset || 0) : (p = si(w.lineWidth, i, 1), g = si(w.color, i, "rgba(0,0,0,0.1)"), m = w.borderDash || [], v = w.borderDashOffset || 0), void 0 !== (r = ai(y, n._index || i, k)) && (o = P(_, r, p), C ? s = l = u = d = o : a = c = h = f = o, D.push({
                        tx1: s,
                        ty1: a,
                        tx2: l,
                        ty2: c,
                        x1: u,
                        y1: h,
                        x2: d,
                        y2: f,
                        width: p,
                        color: g,
                        borderDash: m,
                        borderDashOffset: v
                    })));
                    return D.ticksLength = T, D.borderValue = e, D
                },
                _computeLabelItems: function () {
                    var t, e, i, n, r, o, s, a, l, c, u, h, d = this, f = d.options, p = f.ticks, g = f.position,
                        m = p.mirror, v = d.isHorizontal(), y = d._ticksToDraw, _ = di(p), b = p.padding,
                        w = ci(f.gridLines), x = -B.toRadians(d.labelRotation), k = [];
                    for ("top" === g ? (o = d.bottom - w - b, s = x ? "left" : "center") : "bottom" === g ? (o = d.top + w + b, s = x ? "right" : "center") : "left" === g ? (r = d.right - (m ? 0 : w) - b, s = m ? "left" : "right") : (r = d.left + (m ? 0 : w) + b, s = m ? "right" : "left"), t = 0, e = y.length; t < e; ++t) n = (i = y[t]).label, ri(n) || (a = d.getPixelForTick(i._index || t) + p.labelOffset, c = (l = i.major ? _.major : _.minor).lineHeight, u = ni(n) ? n.length : 1, v ? (r = a, h = "top" === g ? ((x ? 1 : .5) - u) * c : (x ? 0 : .5) * c) : (o = a, h = (1 - u) * c / 2), k.push({
                        x: r,
                        y: o,
                        rotation: x,
                        label: n,
                        font: l,
                        textOffset: h,
                        textAlign: s
                    }));
                    return k
                },
                _drawGrid: function (t) {
                    var e = this, i = e.options.gridLines;
                    if (i.display) {
                        var n, r, o, s, a, l = e.ctx, c = e.chart, u = B._alignPixel,
                            h = i.drawBorder ? si(i.lineWidth, 0, 0) : 0,
                            d = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
                        for (o = 0, s = d.length; o < s; ++o) n = (a = d[o]).width, r = a.color, n && r && (l.save(), l.lineWidth = n, l.strokeStyle = r, l.setLineDash && (l.setLineDash(a.borderDash), l.lineDashOffset = a.borderDashOffset), l.beginPath(), i.drawTicks && (l.moveTo(a.tx1, a.ty1), l.lineTo(a.tx2, a.ty2)), i.drawOnChartArea && (l.moveTo(a.x1, a.y1), l.lineTo(a.x2, a.y2)), l.stroke(), l.restore());
                        if (h) {
                            var f, p, g, m, v = h, y = si(i.lineWidth, d.ticksLength - 1, 1), _ = d.borderValue;
                            e.isHorizontal() ? (f = u(c, e.left, v) - v / 2, p = u(c, e.right, y) + y / 2, g = m = _) : (g = u(c, e.top, v) - v / 2, m = u(c, e.bottom, y) + y / 2, f = p = _), l.lineWidth = h, l.strokeStyle = si(i.color, 0), l.beginPath(), l.moveTo(f, g), l.lineTo(p, m), l.stroke()
                        }
                    }
                },
                _drawLabels: function () {
                    var t = this;
                    if (t.options.ticks.display) {
                        var e, i, n, r, o, s, a, l, c = t.ctx,
                            u = t._labelItems || (t._labelItems = t._computeLabelItems());
                        for (e = 0, n = u.length; e < n; ++e) {
                            if (s = (o = u[e]).font, c.save(), c.translate(o.x, o.y), c.rotate(o.rotation), c.font = s.string, c.fillStyle = s.color, c.textBaseline = "middle", c.textAlign = o.textAlign, a = o.label, l = o.textOffset, ni(a)) for (i = 0, r = a.length; i < r; ++i) c.fillText("" + a[i], 0, l), l += s.lineHeight; else c.fillText(a, 0, l);
                            c.restore()
                        }
                    }
                },
                _drawTitle: function () {
                    var t = this, e = t.ctx, i = t.options, n = i.scaleLabel;
                    if (n.display) {
                        var r, o, s = oi(n.fontColor, R.global.defaultFontColor), a = B.options._parseFont(n),
                            l = B.options.toPadding(n.padding), c = a.lineHeight / 2, u = i.position, h = 0;
                        if (t.isHorizontal()) r = t.left + t.width / 2, o = "bottom" === u ? t.bottom - c - l.bottom : t.top + c + l.top; else {
                            var d = "left" === u;
                            r = d ? t.left + c + l.top : t.right - c - l.top, o = t.top + t.height / 2, h = d ? -.5 * Math.PI : .5 * Math.PI
                        }
                        e.save(), e.translate(r, o), e.rotate(h), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = s, e.font = a.string, e.fillText(n.labelString, 0, 0), e.restore()
                    }
                },
                draw: function (t) {
                    this._isVisible() && (this._drawGrid(t), this._drawTitle(), this._drawLabels())
                },
                _layers: function () {
                    var t = this, e = t.options, i = e.ticks && e.ticks.z || 0, n = e.gridLines && e.gridLines.z || 0;
                    return t._isVisible() && i !== n && t.draw === t._draw ? [{
                        z: n, draw: function () {
                            t._drawGrid.apply(t, arguments), t._drawTitle.apply(t, arguments)
                        }
                    }, {
                        z: i, draw: function () {
                            t._drawLabels.apply(t, arguments)
                        }
                    }] : [{
                        z: i, draw: function () {
                            t.draw.apply(t, arguments)
                        }
                    }]
                },
                _getMatchingVisibleMetas: function (t) {
                    var e = this, i = e.isHorizontal();
                    return e.chart._getSortedVisibleDatasetMetas().filter((function (n) {
                        return (!t || n.type === t) && (i ? n.xAxisID === e.id : n.yAxisID === e.id)
                    }))
                }
            });
            gi.prototype._draw = gi.prototype.draw;
            var mi = gi, vi = B.isNullOrUndef, yi = mi.extend({
                determineDataLimits: function () {
                    var t, e = this, i = e._getLabels(), n = e.options.ticks, r = n.min, o = n.max, s = 0,
                        a = i.length - 1;
                    void 0 !== r && (t = i.indexOf(r)) >= 0 && (s = t), void 0 !== o && (t = i.indexOf(o)) >= 0 && (a = t), e.minIndex = s, e.maxIndex = a, e.min = i[s], e.max = i[a]
                }, buildTicks: function () {
                    var t = this._getLabels(), e = this.minIndex, i = this.maxIndex;
                    this.ticks = 0 === e && i === t.length - 1 ? t : t.slice(e, i + 1)
                }, getLabelForIndex: function (t, e) {
                    var i = this.chart;
                    return i.getDatasetMeta(e).controller._getValueScaleId() === this.id ? this.getRightValue(i.data.datasets[e].data[t]) : this._getLabels()[t]
                }, _configure: function () {
                    var t = this, e = t.options.offset, i = t.ticks;
                    mi.prototype._configure.call(t), t.isHorizontal() || (t._reversePixels = !t._reversePixels), i && (t._startValue = t.minIndex - (e ? .5 : 0), t._valueRange = Math.max(i.length - (e ? 0 : 1), 1))
                }, getPixelForValue: function (t, e, i) {
                    var n, r, o, s = this;
                    return vi(e) || vi(i) || (t = s.chart.data.datasets[i].data[e]), vi(t) || (n = s.isHorizontal() ? t.x : t.y), (void 0 !== n || void 0 !== t && isNaN(e)) && (r = s._getLabels(), t = B.valueOrDefault(n, t), e = -1 !== (o = r.indexOf(t)) ? o : e, isNaN(e) && (e = t)), s.getPixelForDecimal((e - s._startValue) / s._valueRange)
                }, getPixelForTick: function (t) {
                    var e = this.ticks;
                    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex)
                }, getValueForPixel: function (t) {
                    var e = Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
                    return Math.min(Math.max(e, 0), this.ticks.length - 1)
                }, getBasePixel: function () {
                    return this.bottom
                }
            }), _i = {position: "bottom"};
            yi._defaults = _i;
            var bi = B.noop, wi = B.isNullOrUndef, xi = mi.extend({
                getRightValue: function (t) {
                    return "string" == typeof t ? +t : mi.prototype.getRightValue.call(this, t)
                }, handleTickRangeOptions: function () {
                    var t = this, e = t.options.ticks;
                    if (e.beginAtZero) {
                        var i = B.sign(t.min), n = B.sign(t.max);
                        i < 0 && n < 0 ? t.max = 0 : i > 0 && n > 0 && (t.min = 0)
                    }
                    var r = void 0 !== e.min || void 0 !== e.suggestedMin,
                        o = void 0 !== e.max || void 0 !== e.suggestedMax;
                    void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), r !== o && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                }, getTickLimit: function () {
                    var t, e = this.options.ticks, i = e.stepSize, n = e.maxTicksLimit;
                    return i ? t = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1 : (t = this._computeTickLimit(), n = n || 11), n && (t = Math.min(n, t)), t
                }, _computeTickLimit: function () {
                    return Number.POSITIVE_INFINITY
                }, handleDirectionalChanges: bi, buildTicks: function () {
                    var t = this, e = t.options.ticks, i = t.getTickLimit(), n = {
                        maxTicks: i = Math.max(2, i),
                        min: e.min,
                        max: e.max,
                        precision: e.precision,
                        stepSize: B.valueOrDefault(e.fixedStepSize, e.stepSize)
                    }, r = t.ticks = function (t, e) {
                        var i, n, r, o, s = [], a = t.stepSize, l = a || 1, c = t.maxTicks - 1, u = t.min, h = t.max,
                            d = t.precision, f = e.min, p = e.max, g = B.niceNum((p - f) / c / l) * l;
                        if (g < 1e-14 && wi(u) && wi(h)) return [f, p];
                        (o = Math.ceil(p / g) - Math.floor(f / g)) > c && (g = B.niceNum(o * g / c / l) * l), a || wi(d) ? i = Math.pow(10, B._decimalPlaces(g)) : (i = Math.pow(10, d), g = Math.ceil(g * i) / i), n = Math.floor(f / g) * g, r = Math.ceil(p / g) * g, a && (!wi(u) && B.almostWhole(u / g, g / 1e3) && (n = u), !wi(h) && B.almostWhole(h / g, g / 1e3) && (r = h)), o = (r - n) / g, o = B.almostEquals(o, Math.round(o), g / 1e3) ? Math.round(o) : Math.ceil(o), n = Math.round(n * i) / i, r = Math.round(r * i) / i, s.push(wi(u) ? n : u);
                        for (var m = 1; m < o; ++m) s.push(Math.round((n + m * g) * i) / i);
                        return s.push(wi(h) ? r : h), s
                    }(n, t);
                    t.handleDirectionalChanges(), t.max = B.max(r), t.min = B.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                }, convertTicksToLabels: function () {
                    var t = this;
                    t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), mi.prototype.convertTicksToLabels.call(t)
                }, _configure: function () {
                    var t, e = this, i = e.getTicks(), n = e.min, r = e.max;
                    mi.prototype._configure.call(e), e.options.offset && i.length && (n -= t = (r - n) / Math.max(i.length - 1, 1) / 2, r += t), e._startValue = n, e._endValue = r, e._valueRange = r - n
                }
            }), ki = {position: "left", ticks: {callback: ii.formatters.linear}};

            function Ci(t, e, i, n) {
                var r, o, s = t.options, a = function (t, e, i) {
                    var n = [i.type, void 0 === e && void 0 === i.stack ? i.index : "", i.stack].join(".");
                    return void 0 === t[n] && (t[n] = {pos: [], neg: []}), t[n]
                }(e, s.stacked, i), l = a.pos, c = a.neg, u = n.length;
                for (r = 0; r < u; ++r) o = t._parseValue(n[r]), isNaN(o.min) || isNaN(o.max) || i.data[r].hidden || (l[r] = l[r] || 0, c[r] = c[r] || 0, s.relativePoints ? l[r] = 100 : o.min < 0 || o.max < 0 ? c[r] += o.min : l[r] += o.max)
            }

            function Si(t, e, i) {
                var n, r, o = i.length;
                for (n = 0; n < o; ++n) r = t._parseValue(i[n]), isNaN(r.min) || isNaN(r.max) || e.data[n].hidden || (t.min = Math.min(t.min, r.min), t.max = Math.max(t.max, r.max))
            }

            var Ti = xi.extend({
                determineDataLimits: function () {
                    var t, e, i, n, r = this, o = r.options, s = r.chart.data.datasets,
                        a = r._getMatchingVisibleMetas(), l = o.stacked, c = {}, u = a.length;
                    if (r.min = Number.POSITIVE_INFINITY, r.max = Number.NEGATIVE_INFINITY, void 0 === l) for (t = 0; !l && t < u; ++t) l = void 0 !== (e = a[t]).stack;
                    for (t = 0; t < u; ++t) i = s[(e = a[t]).index].data, l ? Ci(r, c, e, i) : Si(r, e, i);
                    B.each(c, (function (t) {
                        n = t.pos.concat(t.neg), r.min = Math.min(r.min, B.min(n)), r.max = Math.max(r.max, B.max(n))
                    })), r.min = B.isFinite(r.min) && !isNaN(r.min) ? r.min : 0, r.max = B.isFinite(r.max) && !isNaN(r.max) ? r.max : 1, r.handleTickRangeOptions()
                }, _computeTickLimit: function () {
                    var t;
                    return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = B.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight))
                }, handleDirectionalChanges: function () {
                    this.isHorizontal() || this.ticks.reverse()
                }, getLabelForIndex: function (t, e) {
                    return this._getScaleLabel(this.chart.data.datasets[e].data[t])
                }, getPixelForValue: function (t) {
                    return this.getPixelForDecimal((+this.getRightValue(t) - this._startValue) / this._valueRange)
                }, getValueForPixel: function (t) {
                    return this._startValue + this.getDecimalForPixel(t) * this._valueRange
                }, getPixelForTick: function (t) {
                    var e = this.ticksAsNumbers;
                    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
                }
            }), Mi = ki;
            Ti._defaults = Mi;
            var Di = B.valueOrDefault, Oi = B.math.log10,
                Ei = {position: "left", ticks: {callback: ii.formatters.logarithmic}};

            function Pi(t, e) {
                return B.isFinite(t) && t >= 0 ? t : e
            }

            var Ai = mi.extend({
                determineDataLimits: function () {
                    var t, e, i, n, r, o, s = this, a = s.options, l = s.chart, c = l.data.datasets,
                        u = s.isHorizontal();

                    function h(t) {
                        return u ? t.xAxisID === s.id : t.yAxisID === s.id
                    }

                    s.min = Number.POSITIVE_INFINITY, s.max = Number.NEGATIVE_INFINITY, s.minNotZero = Number.POSITIVE_INFINITY;
                    var d = a.stacked;
                    if (void 0 === d) for (t = 0; t < c.length; t++) if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && h(e) && void 0 !== e.stack) {
                        d = !0;
                        break
                    }
                    if (a.stacked || d) {
                        var f = {};
                        for (t = 0; t < c.length; t++) {
                            var p = [(e = l.getDatasetMeta(t)).type, void 0 === a.stacked && void 0 === e.stack ? t : "", e.stack].join(".");
                            if (l.isDatasetVisible(t) && h(e)) for (void 0 === f[p] && (f[p] = []), r = 0, o = (n = c[t].data).length; r < o; r++) {
                                var g = f[p];
                                i = s._parseValue(n[r]), isNaN(i.min) || isNaN(i.max) || e.data[r].hidden || i.min < 0 || i.max < 0 || (g[r] = g[r] || 0, g[r] += i.max)
                            }
                        }
                        B.each(f, (function (t) {
                            if (t.length > 0) {
                                var e = B.min(t), i = B.max(t);
                                s.min = Math.min(s.min, e), s.max = Math.max(s.max, i)
                            }
                        }))
                    } else for (t = 0; t < c.length; t++) if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && h(e)) for (r = 0, o = (n = c[t].data).length; r < o; r++) i = s._parseValue(n[r]), isNaN(i.min) || isNaN(i.max) || e.data[r].hidden || i.min < 0 || i.max < 0 || (s.min = Math.min(i.min, s.min), s.max = Math.max(i.max, s.max), 0 !== i.min && (s.minNotZero = Math.min(i.min, s.minNotZero)));
                    s.min = B.isFinite(s.min) ? s.min : null, s.max = B.isFinite(s.max) ? s.max : null, s.minNotZero = B.isFinite(s.minNotZero) ? s.minNotZero : null, this.handleTickRangeOptions()
                }, handleTickRangeOptions: function () {
                    var t = this, e = t.options.ticks;
                    t.min = Pi(e.min, t.min), t.max = Pi(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(Oi(t.min)) - 1), t.max = Math.pow(10, Math.floor(Oi(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(Oi(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(Oi(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(Oi(t.max))) : t.minNotZero = 1)
                }, buildTicks: function () {
                    var t = this, e = t.options.ticks, i = !t.isHorizontal(), n = {min: Pi(e.min), max: Pi(e.max)},
                        r = t.ticks = function (t, e) {
                            var i, n, r = [], o = Di(t.min, Math.pow(10, Math.floor(Oi(e.min)))),
                                s = Math.floor(Oi(e.max)), a = Math.ceil(e.max / Math.pow(10, s));
                            0 === o ? (i = Math.floor(Oi(e.minNotZero)), n = Math.floor(e.minNotZero / Math.pow(10, i)), r.push(o), o = n * Math.pow(10, i)) : (i = Math.floor(Oi(o)), n = Math.floor(o / Math.pow(10, i)));
                            var l = i < 0 ? Math.pow(10, Math.abs(i)) : 1;
                            do {
                                r.push(o), 10 == ++n && (n = 1, l = ++i >= 0 ? 1 : l), o = Math.round(n * Math.pow(10, i) * l) / l
                            } while (i < s || i === s && n < a);
                            var c = Di(t.max, o);
                            return r.push(c), r
                        }(n, t);
                    t.max = B.max(r), t.min = B.min(r), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && r.reverse()
                }, convertTicksToLabels: function () {
                    this.tickValues = this.ticks.slice(), mi.prototype.convertTicksToLabels.call(this)
                }, getLabelForIndex: function (t, e) {
                    return this._getScaleLabel(this.chart.data.datasets[e].data[t])
                }, getPixelForTick: function (t) {
                    var e = this.tickValues;
                    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
                }, _getFirstTickValue: function (t) {
                    var e = Math.floor(Oi(t));
                    return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                }, _configure: function () {
                    var t = this, e = t.min, i = 0;
                    mi.prototype._configure.call(t), 0 === e && (e = t._getFirstTickValue(t.minNotZero), i = Di(t.options.ticks.fontSize, R.global.defaultFontSize) / t._length), t._startValue = Oi(e), t._valueOffset = i, t._valueRange = (Oi(t.max) - Oi(e)) / (1 - i)
                }, getPixelForValue: function (t) {
                    var e = this, i = 0;
                    return (t = +e.getRightValue(t)) > e.min && t > 0 && (i = (Oi(t) - e._startValue) / e._valueRange + e._valueOffset), e.getPixelForDecimal(i)
                }, getValueForPixel: function (t) {
                    var e = this, i = e.getDecimalForPixel(t);
                    return 0 === i && 0 === e.min ? 0 : Math.pow(10, e._startValue + (i - e._valueOffset) * e._valueRange)
                }
            }), Ii = Ei;
            Ai._defaults = Ii;
            var ji = B.valueOrDefault, Ni = B.valueAtIndexOrDefault, Fi = B.options.resolve, Li = {
                display: !0,
                animate: !0,
                position: "chartArea",
                angleLines: {display: !0, color: "rgba(0,0,0,0.1)", lineWidth: 1, borderDash: [], borderDashOffset: 0},
                gridLines: {circular: !1},
                ticks: {
                    showLabelBackdrop: !0,
                    backdropColor: "rgba(255,255,255,0.75)",
                    backdropPaddingY: 2,
                    backdropPaddingX: 2,
                    callback: ii.formatters.linear
                },
                pointLabels: {
                    display: !0, fontSize: 10, callback: function (t) {
                        return t
                    }
                }
            };

            function Ri(t) {
                var e = t.ticks;
                return e.display && t.display ? ji(e.fontSize, R.global.defaultFontSize) + 2 * e.backdropPaddingY : 0
            }

            function $i(t, e, i, n, r) {
                return t === n || t === r ? {start: e - i / 2, end: e + i / 2} : t < n || t > r ? {
                    start: e - i,
                    end: e
                } : {start: e, end: e + i}
            }

            function zi(t) {
                return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
            }

            function Wi(t, e, i, n) {
                var r, o, s = i.y + n / 2;
                if (B.isArray(e)) for (r = 0, o = e.length; r < o; ++r) t.fillText(e[r], i.x, s), s += n; else t.fillText(e, i.x, s)
            }

            function Hi(t, e, i) {
                90 === t || 270 === t ? i.y -= e.h / 2 : (t > 270 || t < 90) && (i.y -= e.h)
            }

            function Bi(t) {
                return B.isNumber(t) ? t : 0
            }

            var Vi = xi.extend({
                setDimensions: function () {
                    var t = this;
                    t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Ri(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
                }, determineDataLimits: function () {
                    var t = this, e = t.chart, i = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY;
                    B.each(e.data.datasets, (function (r, o) {
                        if (e.isDatasetVisible(o)) {
                            var s = e.getDatasetMeta(o);
                            B.each(r.data, (function (e, r) {
                                var o = +t.getRightValue(e);
                                isNaN(o) || s.data[r].hidden || (i = Math.min(o, i), n = Math.max(o, n))
                            }))
                        }
                    })), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions()
                }, _computeTickLimit: function () {
                    return Math.ceil(this.drawingArea / Ri(this.options))
                }, convertTicksToLabels: function () {
                    var t = this;
                    xi.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map((function () {
                        var e = B.callback(t.options.pointLabels.callback, arguments, t);
                        return e || 0 === e ? e : ""
                    }))
                }, getLabelForIndex: function (t, e) {
                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                }, fit: function () {
                    var t = this.options;
                    t.display && t.pointLabels.display ? function (t) {
                        var e, i, n, r = B.options._parseFont(t.options.pointLabels),
                            o = {l: 0, r: t.width, t: 0, b: t.height - t.paddingTop}, s = {};
                        t.ctx.font = r.string, t._pointLabelSizes = [];
                        var a, l, c, u = t.chart.data.labels.length;
                        for (e = 0; e < u; e++) {
                            n = t.getPointPosition(e, t.drawingArea + 5), a = t.ctx, l = r.lineHeight, c = t.pointLabels[e], i = B.isArray(c) ? {
                                w: B.longestText(a, a.font, c),
                                h: c.length * l
                            } : {w: a.measureText(c).width, h: l}, t._pointLabelSizes[e] = i;
                            var h = t.getIndexAngle(e), d = B.toDegrees(h) % 360, f = $i(d, n.x, i.w, 0, 180),
                                p = $i(d, n.y, i.h, 90, 270);
                            f.start < o.l && (o.l = f.start, s.l = h), f.end > o.r && (o.r = f.end, s.r = h), p.start < o.t && (o.t = p.start, s.t = h), p.end > o.b && (o.b = p.end, s.b = h)
                        }
                        t.setReductions(t.drawingArea, o, s)
                    }(this) : this.setCenterPoint(0, 0, 0, 0)
                }, setReductions: function (t, e, i) {
                    var n = this, r = e.l / Math.sin(i.l), o = Math.max(e.r - n.width, 0) / Math.sin(i.r),
                        s = -e.t / Math.cos(i.t), a = -Math.max(e.b - (n.height - n.paddingTop), 0) / Math.cos(i.b);
                    r = Bi(r), o = Bi(o), s = Bi(s), a = Bi(a), n.drawingArea = Math.min(Math.floor(t - (r + o) / 2), Math.floor(t - (s + a) / 2)), n.setCenterPoint(r, o, s, a)
                }, setCenterPoint: function (t, e, i, n) {
                    var r = this, o = r.width - e - r.drawingArea, s = t + r.drawingArea, a = i + r.drawingArea,
                        l = r.height - r.paddingTop - n - r.drawingArea;
                    r.xCenter = Math.floor((s + o) / 2 + r.left), r.yCenter = Math.floor((a + l) / 2 + r.top + r.paddingTop)
                }, getIndexAngle: function (t) {
                    var e = this.chart,
                        i = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360;
                    return (i < 0 ? i + 360 : i) * Math.PI * 2 / 360
                }, getDistanceFromCenterForValue: function (t) {
                    var e = this;
                    if (B.isNullOrUndef(t)) return NaN;
                    var i = e.drawingArea / (e.max - e.min);
                    return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i
                }, getPointPosition: function (t, e) {
                    var i = this.getIndexAngle(t) - Math.PI / 2;
                    return {x: Math.cos(i) * e + this.xCenter, y: Math.sin(i) * e + this.yCenter}
                }, getPointPositionForValue: function (t, e) {
                    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                }, getBasePosition: function (t) {
                    var e = this.min, i = this.max;
                    return this.getPointPositionForValue(t || 0, this.beginAtZero ? 0 : e < 0 && i < 0 ? i : e > 0 && i > 0 ? e : 0)
                }, _drawGrid: function () {
                    var t, e, i, n = this, r = n.ctx, o = n.options, s = o.gridLines, a = o.angleLines,
                        l = ji(a.lineWidth, s.lineWidth), c = ji(a.color, s.color);
                    if (o.pointLabels.display && function (t) {
                        var e = t.ctx, i = t.options, n = i.pointLabels, r = Ri(i),
                            o = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
                            s = B.options._parseFont(n);
                        e.save(), e.font = s.string, e.textBaseline = "middle";
                        for (var a = t.chart.data.labels.length - 1; a >= 0; a--) {
                            var l = 0 === a ? r / 2 : 0, c = t.getPointPosition(a, o + l + 5),
                                u = Ni(n.fontColor, a, R.global.defaultFontColor);
                            e.fillStyle = u;
                            var h = t.getIndexAngle(a), d = B.toDegrees(h);
                            e.textAlign = zi(d), Hi(d, t._pointLabelSizes[a], c), Wi(e, t.pointLabels[a], c, s.lineHeight)
                        }
                        e.restore()
                    }(n), s.display && B.each(n.ticks, (function (t, i) {
                        0 !== i && (e = n.getDistanceFromCenterForValue(n.ticksAsNumbers[i]), function (t, e, i, n) {
                            var r, o = t.ctx, s = e.circular, a = t.chart.data.labels.length, l = Ni(e.color, n - 1),
                                c = Ni(e.lineWidth, n - 1);
                            if ((s || a) && l && c) {
                                if (o.save(), o.strokeStyle = l, o.lineWidth = c, o.setLineDash && (o.setLineDash(e.borderDash || []), o.lineDashOffset = e.borderDashOffset || 0), o.beginPath(), s) o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI); else {
                                    r = t.getPointPosition(0, i), o.moveTo(r.x, r.y);
                                    for (var u = 1; u < a; u++) r = t.getPointPosition(u, i), o.lineTo(r.x, r.y)
                                }
                                o.closePath(), o.stroke(), o.restore()
                            }
                        }(n, s, e, i))
                    })), a.display && l && c) {
                        for (r.save(), r.lineWidth = l, r.strokeStyle = c, r.setLineDash && (r.setLineDash(Fi([a.borderDash, s.borderDash, []])), r.lineDashOffset = Fi([a.borderDashOffset, s.borderDashOffset, 0])), t = n.chart.data.labels.length - 1; t >= 0; t--) e = n.getDistanceFromCenterForValue(o.ticks.reverse ? n.min : n.max), i = n.getPointPosition(t, e), r.beginPath(), r.moveTo(n.xCenter, n.yCenter), r.lineTo(i.x, i.y), r.stroke();
                        r.restore()
                    }
                }, _drawLabels: function () {
                    var t = this, e = t.ctx, i = t.options.ticks;
                    if (i.display) {
                        var n, r, o = t.getIndexAngle(0), s = B.options._parseFont(i),
                            a = ji(i.fontColor, R.global.defaultFontColor);
                        e.save(), e.font = s.string, e.translate(t.xCenter, t.yCenter), e.rotate(o), e.textAlign = "center", e.textBaseline = "middle", B.each(t.ticks, (function (o, l) {
                            (0 !== l || i.reverse) && (n = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]), i.showLabelBackdrop && (r = e.measureText(o).width, e.fillStyle = i.backdropColor, e.fillRect(-r / 2 - i.backdropPaddingX, -n - s.size / 2 - i.backdropPaddingY, r + 2 * i.backdropPaddingX, s.size + 2 * i.backdropPaddingY)), e.fillStyle = a, e.fillText(o, 0, -n))
                        })), e.restore()
                    }
                }, _drawTitle: B.noop
            }), Yi = Li;
            Vi._defaults = Yi;
            var qi = B._deprecated, Ui = B.options.resolve, Gi = B.valueOrDefault,
                Qi = Number.MIN_SAFE_INTEGER || -9007199254740991, Xi = Number.MAX_SAFE_INTEGER || 9007199254740991,
                Zi = {
                    millisecond: {common: !0, size: 1, steps: 1e3},
                    second: {common: !0, size: 1e3, steps: 60},
                    minute: {common: !0, size: 6e4, steps: 60},
                    hour: {common: !0, size: 36e5, steps: 24},
                    day: {common: !0, size: 864e5, steps: 30},
                    week: {common: !1, size: 6048e5, steps: 4},
                    month: {common: !0, size: 2628e6, steps: 12},
                    quarter: {common: !1, size: 7884e6, steps: 4},
                    year: {common: !0, size: 3154e7}
                }, Ki = Object.keys(Zi);

            function Ji(t, e) {
                return t - e
            }

            function tn(t) {
                return B.valueOrDefault(t.time.min, t.ticks.min)
            }

            function en(t) {
                return B.valueOrDefault(t.time.max, t.ticks.max)
            }

            function nn(t, e, i, n) {
                var r = function (t, e, i) {
                        for (var n, r, o, s = 0, a = t.length - 1; s >= 0 && s <= a;) {
                            if (r = t[(n = s + a >> 1) - 1] || null, o = t[n], !r) return {lo: null, hi: o};
                            if (o[e] < i) s = n + 1; else {
                                if (!(r[e] > i)) return {lo: r, hi: o};
                                a = n - 1
                            }
                        }
                        return {lo: o, hi: null}
                    }(t, e, i), o = r.lo ? r.hi ? r.lo : t[t.length - 2] : t[0],
                    s = r.lo ? r.hi ? r.hi : t[t.length - 1] : t[1], a = s[e] - o[e], l = a ? (i - o[e]) / a : 0,
                    c = (s[n] - o[n]) * l;
                return o[n] + c
            }

            function rn(t, e) {
                var i = t._adapter, n = t.options.time, r = n.parser, o = r || n.format, s = e;
                return "function" == typeof r && (s = r(s)), B.isFinite(s) || (s = "string" == typeof o ? i.parse(s, o) : i.parse(s)), null !== s ? +s : (r || "function" != typeof o || (s = o(e), B.isFinite(s) || (s = i.parse(s))), s)
            }

            function on(t, e) {
                if (B.isNullOrUndef(e)) return null;
                var i = t.options.time, n = rn(t, t.getRightValue(e));
                return null === n || i.round && (n = +t._adapter.startOf(n, i.round)), n
            }

            function sn(t, e, i, n) {
                var r, o, s, a = Ki.length;
                for (r = Ki.indexOf(t); r < a - 1; ++r) if (s = (o = Zi[Ki[r]]).steps ? o.steps : Xi, o.common && Math.ceil((i - e) / (s * o.size)) <= n) return Ki[r];
                return Ki[a - 1]
            }

            function an(t, e, i) {
                var n, r, o = [], s = {}, a = e.length;
                for (n = 0; n < a; ++n) s[r = e[n]] = n, o.push({value: r, major: !1});
                return 0 !== a && i ? function (t, e, i, n) {
                    var r, o, s = t._adapter, a = +s.startOf(e[0].value, n), l = e[e.length - 1].value;
                    for (r = a; r <= l; r = +s.add(r, 1, n)) (o = i[r]) >= 0 && (e[o].major = !0);
                    return e
                }(t, o, s, i) : o
            }

            var ln = mi.extend({
                initialize: function () {
                    this.mergeTicksOptions(), mi.prototype.initialize.call(this)
                }, update: function () {
                    var t = this, e = t.options, i = e.time || (e.time = {}),
                        n = t._adapter = new ei._date(e.adapters.date);
                    return qi("time scale", i.format, "time.format", "time.parser"), qi("time scale", i.min, "time.min", "ticks.min"), qi("time scale", i.max, "time.max", "ticks.max"), B.mergeIf(i.displayFormats, n.formats()), mi.prototype.update.apply(t, arguments)
                }, getRightValue: function (t) {
                    return t && void 0 !== t.t && (t = t.t), mi.prototype.getRightValue.call(this, t)
                }, determineDataLimits: function () {
                    var t, e, i, n, r, o, s, a = this, l = a.chart, c = a._adapter, u = a.options,
                        h = u.time.unit || "day", d = Xi, f = Qi, p = [], g = [], m = [], v = a._getLabels();
                    for (t = 0, i = v.length; t < i; ++t) m.push(on(a, v[t]));
                    for (t = 0, i = (l.data.datasets || []).length; t < i; ++t) if (l.isDatasetVisible(t)) if (r = l.data.datasets[t].data, B.isObject(r[0])) for (g[t] = [], e = 0, n = r.length; e < n; ++e) o = on(a, r[e]), p.push(o), g[t][e] = o; else g[t] = m.slice(0), s || (p = p.concat(m), s = !0); else g[t] = [];
                    m.length && (d = Math.min(d, m[0]), f = Math.max(f, m[m.length - 1])), p.length && (p = i > 1 ? function (t) {
                        var e, i, n, r = {}, o = [];
                        for (e = 0, i = t.length; e < i; ++e) r[n = t[e]] || (r[n] = !0, o.push(n));
                        return o
                    }(p).sort(Ji) : p.sort(Ji), d = Math.min(d, p[0]), f = Math.max(f, p[p.length - 1])), d = on(a, tn(u)) || d, f = on(a, en(u)) || f, d = d === Xi ? +c.startOf(Date.now(), h) : d, f = f === Qi ? +c.endOf(Date.now(), h) + 1 : f, a.min = Math.min(d, f), a.max = Math.max(d + 1, f), a._table = [], a._timestamps = {
                        data: p,
                        datasets: g,
                        labels: m
                    }
                }, buildTicks: function () {
                    var t, e, i, n = this, r = n.min, o = n.max, s = n.options, a = s.ticks, l = s.time,
                        c = n._timestamps, u = [], h = n.getLabelCapacity(r), d = a.source, f = s.distribution;
                    for (c = "data" === d || "auto" === d && "series" === f ? c.data : "labels" === d ? c.labels : function (t, e, i, n) {
                        var r, o = t._adapter, s = t.options, a = s.time, l = a.unit || sn(a.minUnit, e, i, n),
                            c = Ui([a.stepSize, a.unitStepSize, 1]), u = "week" === l && a.isoWeekday, h = e, d = [];
                        if (u && (h = +o.startOf(h, "isoWeek", u)), h = +o.startOf(h, u ? "day" : l), o.diff(i, e, l) > 1e5 * c) throw e + " and " + i + " are too far apart with stepSize of " + c + " " + l;
                        for (r = h; r < i; r = +o.add(r, c, l)) d.push(r);
                        return r !== i && "ticks" !== s.bounds || d.push(r), d
                    }(n, r, o, h), "ticks" === s.bounds && c.length && (r = c[0], o = c[c.length - 1]), r = on(n, tn(s)) || r, o = on(n, en(s)) || o, t = 0, e = c.length; t < e; ++t) (i = c[t]) >= r && i <= o && u.push(i);
                    return n.min = r, n.max = o, n._unit = l.unit || (a.autoSkip ? sn(l.minUnit, n.min, n.max, h) : function (t, e, i, n, r) {
                        var o, s;
                        for (o = Ki.length - 1; o >= Ki.indexOf(i); o--) if (s = Ki[o], Zi[s].common && t._adapter.diff(r, n, s) >= e - 1) return s;
                        return Ki[i ? Ki.indexOf(i) : 0]
                    }(n, u.length, l.minUnit, n.min, n.max)), n._majorUnit = a.major.enabled && "year" !== n._unit ? function (t) {
                        for (var e = Ki.indexOf(t) + 1, i = Ki.length; e < i; ++e) if (Zi[Ki[e]].common) return Ki[e]
                    }(n._unit) : void 0, n._table = function (t, e, i, n) {
                        if ("linear" === n || !t.length) return [{time: e, pos: 0}, {time: i, pos: 1}];
                        var r, o, s, a, l, c = [], u = [e];
                        for (r = 0, o = t.length; r < o; ++r) (a = t[r]) > e && a < i && u.push(a);
                        for (u.push(i), r = 0, o = u.length; r < o; ++r) l = u[r + 1], s = u[r - 1], a = u[r], void 0 !== s && void 0 !== l && Math.round((l + s) / 2) === a || c.push({
                            time: a,
                            pos: r / (o - 1)
                        });
                        return c
                    }(n._timestamps.data, r, o, f), n._offsets = function (t, e, i, n, r) {
                        var o, s, a = 0, l = 0;
                        return r.offset && e.length && (o = nn(t, "time", e[0], "pos"), a = 1 === e.length ? 1 - o : (nn(t, "time", e[1], "pos") - o) / 2, s = nn(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? s : (s - nn(t, "time", e[e.length - 2], "pos")) / 2), {
                            start: a,
                            end: l,
                            factor: 1 / (a + 1 + l)
                        }
                    }(n._table, u, 0, 0, s), a.reverse && u.reverse(), an(n, u, n._majorUnit)
                }, getLabelForIndex: function (t, e) {
                    var i = this, n = i._adapter, r = i.chart.data, o = i.options.time,
                        s = r.labels && t < r.labels.length ? r.labels[t] : "", a = r.datasets[e].data[t];
                    return B.isObject(a) && (s = i.getRightValue(a)), o.tooltipFormat ? n.format(rn(i, s), o.tooltipFormat) : "string" == typeof s ? s : n.format(rn(i, s), o.displayFormats.datetime)
                }, tickFormatFunction: function (t, e, i, n) {
                    var r = this._adapter, o = this.options, s = o.time.displayFormats, a = s[this._unit],
                        l = this._majorUnit, c = s[l], u = i[e], h = o.ticks, d = l && c && u && u.major,
                        f = r.format(t, n || (d ? c : a)), p = d ? h.major : h.minor,
                        g = Ui([p.callback, p.userCallback, h.callback, h.userCallback]);
                    return g ? g(f, e, i) : f
                }, convertTicksToLabels: function (t) {
                    var e, i, n = [];
                    for (e = 0, i = t.length; e < i; ++e) n.push(this.tickFormatFunction(t[e].value, e, t));
                    return n
                }, getPixelForOffset: function (t) {
                    var e = this._offsets, i = nn(this._table, "time", t, "pos");
                    return this.getPixelForDecimal((e.start + i) * e.factor)
                }, getPixelForValue: function (t, e, i) {
                    var n = null;
                    if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = on(this, t)), null !== n) return this.getPixelForOffset(n)
                }, getPixelForTick: function (t) {
                    var e = this.getTicks();
                    return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
                }, getValueForPixel: function (t) {
                    var e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end,
                        n = nn(this._table, "pos", i, "time");
                    return this._adapter._create(n)
                }, _getLabelSize: function (t) {
                    var e = this.options.ticks, i = this.ctx.measureText(t).width,
                        n = B.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation), r = Math.cos(n),
                        o = Math.sin(n), s = Gi(e.fontSize, R.global.defaultFontSize);
                    return {w: i * r + s * o, h: i * o + s * r}
                }, getLabelWidth: function (t) {
                    return this._getLabelSize(t).w
                }, getLabelCapacity: function (t) {
                    var e = this, i = e.options.time, n = i.displayFormats, r = n[i.unit] || n.millisecond,
                        o = e.tickFormatFunction(t, 0, an(e, [t], e._majorUnit), r), s = e._getLabelSize(o),
                        a = Math.floor(e.isHorizontal() ? e.width / s.w : e.height / s.h);
                    return e.options.offset && a--, a > 0 ? a : 1
                }
            }), cn = {
                position: "bottom",
                distribution: "linear",
                bounds: "data",
                adapters: {},
                time: {
                    parser: !1,
                    unit: !1,
                    round: !1,
                    displayFormat: !1,
                    isoWeekday: !1,
                    minUnit: "millisecond",
                    displayFormats: {}
                },
                ticks: {autoSkip: !1, source: "auto", major: {enabled: !1}}
            };
            ln._defaults = cn;
            var un = {category: yi, linear: Ti, logarithmic: Ai, radialLinear: Vi, time: ln}, hn = i((function (e, i) {
                e.exports = function () {
                    var i, n;

                    function r() {
                        return i.apply(null, arguments)
                    }

                    function o(t) {
                        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
                    }

                    function s(t) {
                        return null != t && "[object Object]" === Object.prototype.toString.call(t)
                    }

                    function a(t) {
                        return void 0 === t
                    }

                    function l(t) {
                        return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
                    }

                    function c(t) {
                        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
                    }

                    function u(t, e) {
                        var i, n = [];
                        for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
                        return n
                    }

                    function h(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }

                    function d(t, e) {
                        for (var i in e) h(e, i) && (t[i] = e[i]);
                        return h(e, "toString") && (t.toString = e.toString), h(e, "valueOf") && (t.valueOf = e.valueOf), t
                    }

                    function f(t, e, i, n) {
                        return Ce(t, e, i, n, !0).utc()
                    }

                    function p(t) {
                        return null == t._pf && (t._pf = {
                            empty: !1,
                            unusedTokens: [],
                            unusedInput: [],
                            overflow: -2,
                            charsLeftOver: 0,
                            nullInput: !1,
                            invalidMonth: null,
                            invalidFormat: !1,
                            userInvalidated: !1,
                            iso: !1,
                            parsedDateParts: [],
                            meridiem: null,
                            rfc2822: !1,
                            weekdayMismatch: !1
                        }), t._pf
                    }

                    function g(t) {
                        if (null == t._isValid) {
                            var e = p(t), i = n.call(e.parsedDateParts, (function (t) {
                                    return null != t
                                })),
                                r = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
                            if (t._strict && (r = r && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return r;
                            t._isValid = r
                        }
                        return t._isValid
                    }

                    function m(t) {
                        var e = f(NaN);
                        return null != t ? d(p(e), t) : p(e).userInvalidated = !0, e
                    }

                    n = Array.prototype.some ? Array.prototype.some : function (t) {
                        for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++) if (n in e && t.call(this, e[n], n, e)) return !0;
                        return !1
                    };
                    var v = r.momentProperties = [];

                    function y(t, e) {
                        var i, n, r;
                        if (a(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), a(e._i) || (t._i = e._i), a(e._f) || (t._f = e._f), a(e._l) || (t._l = e._l), a(e._strict) || (t._strict = e._strict), a(e._tzm) || (t._tzm = e._tzm), a(e._isUTC) || (t._isUTC = e._isUTC), a(e._offset) || (t._offset = e._offset), a(e._pf) || (t._pf = p(e)), a(e._locale) || (t._locale = e._locale), v.length > 0) for (i = 0; i < v.length; i++) a(r = e[n = v[i]]) || (t[n] = r);
                        return t
                    }

                    var _ = !1;

                    function b(t) {
                        y(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === _ && (_ = !0, r.updateOffset(this), _ = !1)
                    }

                    function w(t) {
                        return t instanceof b || null != t && null != t._isAMomentObject
                    }

                    function x(t) {
                        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                    }

                    function k(t) {
                        var e = +t, i = 0;
                        return 0 !== e && isFinite(e) && (i = x(e)), i
                    }

                    function C(t, e, i) {
                        var n, r = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), s = 0;
                        for (n = 0; n < r; n++) (i && t[n] !== e[n] || !i && k(t[n]) !== k(e[n])) && s++;
                        return s + o
                    }

                    function S(t) {
                        !1 === r.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
                    }

                    function T(t, e) {
                        var i = !0;
                        return d((function () {
                            if (null != r.deprecationHandler && r.deprecationHandler(null, t), i) {
                                for (var n, o = [], s = 0; s < arguments.length; s++) {
                                    if (n = "", "object" == typeof arguments[s]) {
                                        for (var a in n += "\n[" + s + "] ", arguments[0]) n += a + ": " + arguments[0][a] + ", ";
                                        n = n.slice(0, -2)
                                    } else n = arguments[s];
                                    o.push(n)
                                }
                                S(t + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), i = !1
                            }
                            return e.apply(this, arguments)
                        }), e)
                    }

                    var M, D = {};

                    function O(t, e) {
                        null != r.deprecationHandler && r.deprecationHandler(t, e), D[t] || (S(e), D[t] = !0)
                    }

                    function E(t) {
                        return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
                    }

                    function P(t, e) {
                        var i, n = d({}, t);
                        for (i in e) h(e, i) && (s(t[i]) && s(e[i]) ? (n[i] = {}, d(n[i], t[i]), d(n[i], e[i])) : null != e[i] ? n[i] = e[i] : delete n[i]);
                        for (i in t) h(t, i) && !h(e, i) && s(t[i]) && (n[i] = d({}, n[i]));
                        return n
                    }

                    function A(t) {
                        null != t && this.set(t)
                    }

                    r.suppressDeprecationWarnings = !1, r.deprecationHandler = null, M = Object.keys ? Object.keys : function (t) {
                        var e, i = [];
                        for (e in t) h(t, e) && i.push(e);
                        return i
                    };
                    var I = {};

                    function j(t, e) {
                        var i = t.toLowerCase();
                        I[i] = I[i + "s"] = I[e] = t
                    }

                    function N(t) {
                        return "string" == typeof t ? I[t] || I[t.toLowerCase()] : void 0
                    }

                    function F(t) {
                        var e, i, n = {};
                        for (i in t) h(t, i) && (e = N(i)) && (n[e] = t[i]);
                        return n
                    }

                    var L = {};

                    function R(t, e) {
                        L[t] = e
                    }

                    function $(t, e, i) {
                        var n = "" + Math.abs(t), r = e - n.length;
                        return (t >= 0 ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n
                    }

                    var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                        W = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, H = {}, B = {};

                    function V(t, e, i, n) {
                        var r = n;
                        "string" == typeof n && (r = function () {
                            return this[n]()
                        }), t && (B[t] = r), e && (B[e[0]] = function () {
                            return $(r.apply(this, arguments), e[1], e[2])
                        }), i && (B[i] = function () {
                            return this.localeData().ordinal(r.apply(this, arguments), t)
                        })
                    }

                    function Y(t, e) {
                        return t.isValid() ? (e = q(e, t.localeData()), H[e] = H[e] || function (t) {
                            var e, i, n, r = t.match(z);
                            for (e = 0, i = r.length; e < i; e++) B[r[e]] ? r[e] = B[r[e]] : r[e] = (n = r[e]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
                            return function (e) {
                                var n, o = "";
                                for (n = 0; n < i; n++) o += E(r[n]) ? r[n].call(e, t) : r[n];
                                return o
                            }
                        }(e), H[e](t)) : t.localeData().invalidDate()
                    }

                    function q(t, e) {
                        var i = 5;

                        function n(t) {
                            return e.longDateFormat(t) || t
                        }

                        for (W.lastIndex = 0; i >= 0 && W.test(t);) t = t.replace(W, n), W.lastIndex = 0, i -= 1;
                        return t
                    }

                    var U = /\d/, G = /\d\d/, Q = /\d{3}/, X = /\d{4}/, Z = /[+-]?\d{6}/, K = /\d\d?/, J = /\d\d\d\d?/,
                        tt = /\d\d\d\d\d\d?/, et = /\d{1,3}/, it = /\d{1,4}/, nt = /[+-]?\d{1,6}/, rt = /\d+/,
                        ot = /[+-]?\d+/, st = /Z|[+-]\d\d:?\d\d/gi, at = /Z|[+-]\d\d(?::?\d\d)?/gi,
                        lt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                        ct = {};

                    function ut(t, e, i) {
                        ct[t] = E(e) ? e : function (t, n) {
                            return t && i ? i : e
                        }
                    }

                    function ht(t, e) {
                        return h(ct, t) ? ct[t](e._strict, e._locale) : new RegExp(dt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function (t, e, i, n, r) {
                            return e || i || n || r
                        }))))
                    }

                    function dt(t) {
                        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                    }

                    var ft = {};

                    function pt(t, e) {
                        var i, n = e;
                        for ("string" == typeof t && (t = [t]), l(e) && (n = function (t, i) {
                            i[e] = k(t)
                        }), i = 0; i < t.length; i++) ft[t[i]] = n
                    }

                    function gt(t, e) {
                        pt(t, (function (t, i, n, r) {
                            n._w = n._w || {}, e(t, n._w, n, r)
                        }))
                    }

                    function mt(t, e, i) {
                        null != e && h(ft, t) && ft[t](e, i._a, i, t)
                    }

                    function vt(t) {
                        return yt(t) ? 366 : 365
                    }

                    function yt(t) {
                        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                    }

                    V("Y", 0, 0, (function () {
                        var t = this.year();
                        return t <= 9999 ? "" + t : "+" + t
                    })), V(0, ["YY", 2], 0, (function () {
                        return this.year() % 100
                    })), V(0, ["YYYY", 4], 0, "year"), V(0, ["YYYYY", 5], 0, "year"), V(0, ["YYYYYY", 6, !0], 0, "year"), j("year", "y"), R("year", 1), ut("Y", ot), ut("YY", K, G), ut("YYYY", it, X), ut("YYYYY", nt, Z), ut("YYYYYY", nt, Z), pt(["YYYYY", "YYYYYY"], 0), pt("YYYY", (function (t, e) {
                        e[0] = 2 === t.length ? r.parseTwoDigitYear(t) : k(t)
                    })), pt("YY", (function (t, e) {
                        e[0] = r.parseTwoDigitYear(t)
                    })), pt("Y", (function (t, e) {
                        e[0] = parseInt(t, 10)
                    })), r.parseTwoDigitYear = function (t) {
                        return k(t) + (k(t) > 68 ? 1900 : 2e3)
                    };
                    var _t, bt = wt("FullYear", !0);

                    function wt(t, e) {
                        return function (i) {
                            return null != i ? (kt(this, t, i), r.updateOffset(this, e), this) : xt(this, t)
                        }
                    }

                    function xt(t, e) {
                        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
                    }

                    function kt(t, e, i) {
                        t.isValid() && !isNaN(i) && ("FullYear" === e && yt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), Ct(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i))
                    }

                    function Ct(t, e) {
                        if (isNaN(t) || isNaN(e)) return NaN;
                        var i = function (t, e) {
                            return (t % e + e) % e
                        }(e, 12);
                        return t += (e - i) / 12, 1 === i ? yt(t) ? 29 : 28 : 31 - i % 7 % 2
                    }

                    _t = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
                        var e;
                        for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
                        return -1
                    }, V("M", ["MM", 2], "Mo", (function () {
                        return this.month() + 1
                    })), V("MMM", 0, 0, (function (t) {
                        return this.localeData().monthsShort(this, t)
                    })), V("MMMM", 0, 0, (function (t) {
                        return this.localeData().months(this, t)
                    })), j("month", "M"), R("month", 8), ut("M", K), ut("MM", K, G), ut("MMM", (function (t, e) {
                        return e.monthsShortRegex(t)
                    })), ut("MMMM", (function (t, e) {
                        return e.monthsRegex(t)
                    })), pt(["M", "MM"], (function (t, e) {
                        e[1] = k(t) - 1
                    })), pt(["MMM", "MMMM"], (function (t, e, i, n) {
                        var r = i._locale.monthsParse(t, n, i._strict);
                        null != r ? e[1] = r : p(i).invalidMonth = t
                    }));
                    var St = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                        Tt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        Mt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

                    function Dt(t, e, i) {
                        var n, r, o, s = t.toLocaleLowerCase();
                        if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) o = f([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(o, "").toLocaleLowerCase();
                        return i ? "MMM" === e ? -1 !== (r = _t.call(this._shortMonthsParse, s)) ? r : null : -1 !== (r = _t.call(this._longMonthsParse, s)) ? r : null : "MMM" === e ? -1 !== (r = _t.call(this._shortMonthsParse, s)) || -1 !== (r = _t.call(this._longMonthsParse, s)) ? r : null : -1 !== (r = _t.call(this._longMonthsParse, s)) || -1 !== (r = _t.call(this._shortMonthsParse, s)) ? r : null
                    }

                    function Ot(t, e) {
                        var i;
                        if (!t.isValid()) return t;
                        if ("string" == typeof e) if (/^\d+$/.test(e)) e = k(e); else if (!l(e = t.localeData().monthsParse(e))) return t;
                        return i = Math.min(t.date(), Ct(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
                    }

                    function Et(t) {
                        return null != t ? (Ot(this, t), r.updateOffset(this, !0), this) : xt(this, "Month")
                    }

                    var Pt = lt, At = lt;

                    function It() {
                        function t(t, e) {
                            return e.length - t.length
                        }

                        var e, i, n = [], r = [], o = [];
                        for (e = 0; e < 12; e++) i = f([2e3, e]), n.push(this.monthsShort(i, "")), r.push(this.months(i, "")), o.push(this.months(i, "")), o.push(this.monthsShort(i, ""));
                        for (n.sort(t), r.sort(t), o.sort(t), e = 0; e < 12; e++) n[e] = dt(n[e]), r[e] = dt(r[e]);
                        for (e = 0; e < 24; e++) o[e] = dt(o[e]);
                        this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
                    }

                    function jt(t, e, i, n, r, o, s) {
                        var a;
                        return t < 100 && t >= 0 ? (a = new Date(t + 400, e, i, n, r, o, s), isFinite(a.getFullYear()) && a.setFullYear(t)) : a = new Date(t, e, i, n, r, o, s), a
                    }

                    function Nt(t) {
                        var e;
                        if (t < 100 && t >= 0) {
                            var i = Array.prototype.slice.call(arguments);
                            i[0] = t + 400, e = new Date(Date.UTC.apply(null, i)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)
                        } else e = new Date(Date.UTC.apply(null, arguments));
                        return e
                    }

                    function Ft(t, e, i) {
                        var n = 7 + e - i;
                        return -(7 + Nt(t, 0, n).getUTCDay() - e) % 7 + n - 1
                    }

                    function Lt(t, e, i, n, r) {
                        var o, s, a = 1 + 7 * (e - 1) + (7 + i - n) % 7 + Ft(t, n, r);
                        return a <= 0 ? s = vt(o = t - 1) + a : a > vt(t) ? (o = t + 1, s = a - vt(t)) : (o = t, s = a), {
                            year: o,
                            dayOfYear: s
                        }
                    }

                    function Rt(t, e, i) {
                        var n, r, o = Ft(t.year(), e, i), s = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
                        return s < 1 ? n = s + $t(r = t.year() - 1, e, i) : s > $t(t.year(), e, i) ? (n = s - $t(t.year(), e, i), r = t.year() + 1) : (r = t.year(), n = s), {
                            week: n,
                            year: r
                        }
                    }

                    function $t(t, e, i) {
                        var n = Ft(t, e, i), r = Ft(t + 1, e, i);
                        return (vt(t) - n + r) / 7
                    }

                    function zt(t, e) {
                        return t.slice(e, 7).concat(t.slice(0, e))
                    }

                    V("w", ["ww", 2], "wo", "week"), V("W", ["WW", 2], "Wo", "isoWeek"), j("week", "w"), j("isoWeek", "W"), R("week", 5), R("isoWeek", 5), ut("w", K), ut("ww", K, G), ut("W", K), ut("WW", K, G), gt(["w", "ww", "W", "WW"], (function (t, e, i, n) {
                        e[n.substr(0, 1)] = k(t)
                    })), V("d", 0, "do", "day"), V("dd", 0, 0, (function (t) {
                        return this.localeData().weekdaysMin(this, t)
                    })), V("ddd", 0, 0, (function (t) {
                        return this.localeData().weekdaysShort(this, t)
                    })), V("dddd", 0, 0, (function (t) {
                        return this.localeData().weekdays(this, t)
                    })), V("e", 0, 0, "weekday"), V("E", 0, 0, "isoWeekday"), j("day", "d"), j("weekday", "e"), j("isoWeekday", "E"), R("day", 11), R("weekday", 11), R("isoWeekday", 11), ut("d", K), ut("e", K), ut("E", K), ut("dd", (function (t, e) {
                        return e.weekdaysMinRegex(t)
                    })), ut("ddd", (function (t, e) {
                        return e.weekdaysShortRegex(t)
                    })), ut("dddd", (function (t, e) {
                        return e.weekdaysRegex(t)
                    })), gt(["dd", "ddd", "dddd"], (function (t, e, i, n) {
                        var r = i._locale.weekdaysParse(t, n, i._strict);
                        null != r ? e.d = r : p(i).invalidWeekday = t
                    })), gt(["d", "e", "E"], (function (t, e, i, n) {
                        e[n] = k(t)
                    }));
                    var Wt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        Ht = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Bt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

                    function Vt(t, e, i) {
                        var n, r, o, s = t.toLocaleLowerCase();
                        if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) o = f([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(o, "").toLocaleLowerCase();
                        return i ? "dddd" === e ? -1 !== (r = _t.call(this._weekdaysParse, s)) ? r : null : "ddd" === e ? -1 !== (r = _t.call(this._shortWeekdaysParse, s)) ? r : null : -1 !== (r = _t.call(this._minWeekdaysParse, s)) ? r : null : "dddd" === e ? -1 !== (r = _t.call(this._weekdaysParse, s)) || -1 !== (r = _t.call(this._shortWeekdaysParse, s)) || -1 !== (r = _t.call(this._minWeekdaysParse, s)) ? r : null : "ddd" === e ? -1 !== (r = _t.call(this._shortWeekdaysParse, s)) || -1 !== (r = _t.call(this._weekdaysParse, s)) || -1 !== (r = _t.call(this._minWeekdaysParse, s)) ? r : null : -1 !== (r = _t.call(this._minWeekdaysParse, s)) || -1 !== (r = _t.call(this._weekdaysParse, s)) || -1 !== (r = _t.call(this._shortWeekdaysParse, s)) ? r : null
                    }

                    var Yt = lt, qt = lt, Ut = lt;

                    function Gt() {
                        function t(t, e) {
                            return e.length - t.length
                        }

                        var e, i, n, r, o, s = [], a = [], l = [], c = [];
                        for (e = 0; e < 7; e++) i = f([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), r = this.weekdaysShort(i, ""), o = this.weekdays(i, ""), s.push(n), a.push(r), l.push(o), c.push(n), c.push(r), c.push(o);
                        for (s.sort(t), a.sort(t), l.sort(t), c.sort(t), e = 0; e < 7; e++) a[e] = dt(a[e]), l[e] = dt(l[e]), c[e] = dt(c[e]);
                        this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
                    }

                    function Qt() {
                        return this.hours() % 12 || 12
                    }

                    function Xt(t, e) {
                        V(t, 0, 0, (function () {
                            return this.localeData().meridiem(this.hours(), this.minutes(), e)
                        }))
                    }

                    function Zt(t, e) {
                        return e._meridiemParse
                    }

                    V("H", ["HH", 2], 0, "hour"), V("h", ["hh", 2], 0, Qt), V("k", ["kk", 2], 0, (function () {
                        return this.hours() || 24
                    })), V("hmm", 0, 0, (function () {
                        return "" + Qt.apply(this) + $(this.minutes(), 2)
                    })), V("hmmss", 0, 0, (function () {
                        return "" + Qt.apply(this) + $(this.minutes(), 2) + $(this.seconds(), 2)
                    })), V("Hmm", 0, 0, (function () {
                        return "" + this.hours() + $(this.minutes(), 2)
                    })), V("Hmmss", 0, 0, (function () {
                        return "" + this.hours() + $(this.minutes(), 2) + $(this.seconds(), 2)
                    })), Xt("a", !0), Xt("A", !1), j("hour", "h"), R("hour", 13), ut("a", Zt), ut("A", Zt), ut("H", K), ut("h", K), ut("k", K), ut("HH", K, G), ut("hh", K, G), ut("kk", K, G), ut("hmm", J), ut("hmmss", tt), ut("Hmm", J), ut("Hmmss", tt), pt(["H", "HH"], 3), pt(["k", "kk"], (function (t, e, i) {
                        var n = k(t);
                        e[3] = 24 === n ? 0 : n
                    })), pt(["a", "A"], (function (t, e, i) {
                        i._isPm = i._locale.isPM(t), i._meridiem = t
                    })), pt(["h", "hh"], (function (t, e, i) {
                        e[3] = k(t), p(i).bigHour = !0
                    })), pt("hmm", (function (t, e, i) {
                        var n = t.length - 2;
                        e[3] = k(t.substr(0, n)), e[4] = k(t.substr(n)), p(i).bigHour = !0
                    })), pt("hmmss", (function (t, e, i) {
                        var n = t.length - 4, r = t.length - 2;
                        e[3] = k(t.substr(0, n)), e[4] = k(t.substr(n, 2)), e[5] = k(t.substr(r)), p(i).bigHour = !0
                    })), pt("Hmm", (function (t, e, i) {
                        var n = t.length - 2;
                        e[3] = k(t.substr(0, n)), e[4] = k(t.substr(n))
                    })), pt("Hmmss", (function (t, e, i) {
                        var n = t.length - 4, r = t.length - 2;
                        e[3] = k(t.substr(0, n)), e[4] = k(t.substr(n, 2)), e[5] = k(t.substr(r))
                    }));
                    var Kt, Jt = wt("Hours", !0), te = {
                        calendar: {
                            sameDay: "[Today at] LT",
                            nextDay: "[Tomorrow at] LT",
                            nextWeek: "dddd [at] LT",
                            lastDay: "[Yesterday at] LT",
                            lastWeek: "[Last] dddd [at] LT",
                            sameElse: "L"
                        },
                        longDateFormat: {
                            LTS: "h:mm:ss A",
                            LT: "h:mm A",
                            L: "MM/DD/YYYY",
                            LL: "MMMM D, YYYY",
                            LLL: "MMMM D, YYYY h:mm A",
                            LLLL: "dddd, MMMM D, YYYY h:mm A"
                        },
                        invalidDate: "Invalid date",
                        ordinal: "%d",
                        dayOfMonthOrdinalParse: /\d{1,2}/,
                        relativeTime: {
                            future: "in %s",
                            past: "%s ago",
                            s: "a few seconds",
                            ss: "%d seconds",
                            m: "a minute",
                            mm: "%d minutes",
                            h: "an hour",
                            hh: "%d hours",
                            d: "a day",
                            dd: "%d days",
                            M: "a month",
                            MM: "%d months",
                            y: "a year",
                            yy: "%d years"
                        },
                        months: Tt,
                        monthsShort: Mt,
                        week: {dow: 0, doy: 6},
                        weekdays: Wt,
                        weekdaysMin: Bt,
                        weekdaysShort: Ht,
                        meridiemParse: /[ap]\.?m?\.?/i
                    }, ee = {}, ie = {};

                    function ne(t) {
                        return t ? t.toLowerCase().replace("_", "-") : t
                    }

                    function re(i) {
                        var n = null;
                        if (!ee[i] && e && e.exports) try {
                            n = Kt._abbr, t(), oe(n)
                        } catch (t) {
                        }
                        return ee[i]
                    }

                    function oe(t, e) {
                        var i;
                        return t && ((i = a(e) ? ae(t) : se(t, e)) ? Kt = i : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), Kt._abbr
                    }

                    function se(t, e) {
                        if (null !== e) {
                            var i, n = te;
                            if (e.abbr = t, null != ee[t]) O("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = ee[t]._config; else if (null != e.parentLocale) if (null != ee[e.parentLocale]) n = ee[e.parentLocale]._config; else {
                                if (null == (i = re(e.parentLocale))) return ie[e.parentLocale] || (ie[e.parentLocale] = []), ie[e.parentLocale].push({
                                    name: t,
                                    config: e
                                }), null;
                                n = i._config
                            }
                            return ee[t] = new A(P(n, e)), ie[t] && ie[t].forEach((function (t) {
                                se(t.name, t.config)
                            })), oe(t), ee[t]
                        }
                        return delete ee[t], null
                    }

                    function ae(t) {
                        var e;
                        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Kt;
                        if (!o(t)) {
                            if (e = re(t)) return e;
                            t = [t]
                        }
                        return function (t) {
                            for (var e, i, n, r, o = 0; o < t.length;) {
                                for (e = (r = ne(t[o]).split("-")).length, i = (i = ne(t[o + 1])) ? i.split("-") : null; e > 0;) {
                                    if (n = re(r.slice(0, e).join("-"))) return n;
                                    if (i && i.length >= e && C(r, i, !0) >= e - 1) break;
                                    e--
                                }
                                o++
                            }
                            return Kt
                        }(t)
                    }

                    function le(t) {
                        var e, i = t._a;
                        return i && -2 === p(t).overflow && (e = i[1] < 0 || i[1] > 11 ? 1 : i[2] < 1 || i[2] > Ct(i[0], i[1]) ? 2 : i[3] < 0 || i[3] > 24 || 24 === i[3] && (0 !== i[4] || 0 !== i[5] || 0 !== i[6]) ? 3 : i[4] < 0 || i[4] > 59 ? 4 : i[5] < 0 || i[5] > 59 ? 5 : i[6] < 0 || i[6] > 999 ? 6 : -1, p(t)._overflowDayOfYear && (e < 0 || e > 2) && (e = 2), p(t)._overflowWeeks && -1 === e && (e = 7), p(t)._overflowWeekday && -1 === e && (e = 8), p(t).overflow = e), t
                    }

                    function ce(t, e, i) {
                        return null != t ? t : null != e ? e : i
                    }

                    function ue(t) {
                        var e, i, n, o, s, a = [];
                        if (!t._d) {
                            for (n = function (t) {
                                var e = new Date(r.now());
                                return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
                            }(t), t._w && null == t._a[2] && null == t._a[1] && function (t) {
                                var e, i, n, r, o, s, a, l;
                                if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1, s = 4, i = ce(e.GG, t._a[0], Rt(Se(), 1, 4).year), n = ce(e.W, 1), ((r = ce(e.E, 1)) < 1 || r > 7) && (l = !0); else {
                                    o = t._locale._week.dow, s = t._locale._week.doy;
                                    var c = Rt(Se(), o, s);
                                    i = ce(e.gg, t._a[0], c.year), n = ce(e.w, c.week), null != e.d ? ((r = e.d) < 0 || r > 6) && (l = !0) : null != e.e ? (r = e.e + o, (e.e < 0 || e.e > 6) && (l = !0)) : r = o
                                }
                                n < 1 || n > $t(i, o, s) ? p(t)._overflowWeeks = !0 : null != l ? p(t)._overflowWeekday = !0 : (a = Lt(i, n, r, o, s), t._a[0] = a.year, t._dayOfYear = a.dayOfYear)
                            }(t), null != t._dayOfYear && (s = ce(t._a[0], n[0]), (t._dayOfYear > vt(s) || 0 === t._dayOfYear) && (p(t)._overflowDayOfYear = !0), i = Nt(s, 0, t._dayOfYear), t._a[1] = i.getUTCMonth(), t._a[2] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = n[e];
                            for (; e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                            24 === t._a[3] && 0 === t._a[4] && 0 === t._a[5] && 0 === t._a[6] && (t._nextDay = !0, t._a[3] = 0), t._d = (t._useUTC ? Nt : jt).apply(null, a), o = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[3] = 24), t._w && void 0 !== t._w.d && t._w.d !== o && (p(t).weekdayMismatch = !0)
                        }
                    }

                    var he = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                        de = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                        fe = /Z|[+-]\d\d(?::?\d\d)?/,
                        pe = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
                        ge = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
                        me = /^\/?Date\((\-?\d+)/i;

                    function ve(t) {
                        var e, i, n, r, o, s, a = t._i, l = he.exec(a) || de.exec(a);
                        if (l) {
                            for (p(t).iso = !0, e = 0, i = pe.length; e < i; e++) if (pe[e][1].exec(l[1])) {
                                r = pe[e][0], n = !1 !== pe[e][2];
                                break
                            }
                            if (null == r) return void (t._isValid = !1);
                            if (l[3]) {
                                for (e = 0, i = ge.length; e < i; e++) if (ge[e][1].exec(l[3])) {
                                    o = (l[2] || " ") + ge[e][0];
                                    break
                                }
                                if (null == o) return void (t._isValid = !1)
                            }
                            if (!n && null != o) return void (t._isValid = !1);
                            if (l[4]) {
                                if (!fe.exec(l[4])) return void (t._isValid = !1);
                                s = "Z"
                            }
                            t._f = r + (o || "") + (s || ""), xe(t)
                        } else t._isValid = !1
                    }

                    var ye = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

                    function _e(t) {
                        var e = parseInt(t, 10);
                        return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
                    }

                    var be = {
                        UT: 0,
                        GMT: 0,
                        EDT: -240,
                        EST: -300,
                        CDT: -300,
                        CST: -360,
                        MDT: -360,
                        MST: -420,
                        PDT: -420,
                        PST: -480
                    };

                    function we(t) {
                        var e, i, n, r, o, s, a,
                            l = ye.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                        if (l) {
                            var c = (e = l[4], i = l[3], n = l[2], r = l[5], o = l[6], s = l[7], a = [_e(e), Mt.indexOf(i), parseInt(n, 10), parseInt(r, 10), parseInt(o, 10)], s && a.push(parseInt(s, 10)), a);
                            if (!function (t, e, i) {
                                return !t || Ht.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() || (p(i).weekdayMismatch = !0, i._isValid = !1, !1)
                            }(l[1], c, t)) return;
                            t._a = c, t._tzm = function (t, e, i) {
                                if (t) return be[t];
                                if (e) return 0;
                                var n = parseInt(i, 10), r = n % 100;
                                return (n - r) / 100 * 60 + r
                            }(l[8], l[9], l[10]), t._d = Nt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), p(t).rfc2822 = !0
                        } else t._isValid = !1
                    }

                    function xe(t) {
                        if (t._f !== r.ISO_8601) if (t._f !== r.RFC_2822) {
                            t._a = [], p(t).empty = !0;
                            var e, i, n, o, s, a = "" + t._i, l = a.length, c = 0;
                            for (n = q(t._f, t._locale).match(z) || [], e = 0; e < n.length; e++) o = n[e], (i = (a.match(ht(o, t)) || [])[0]) && ((s = a.substr(0, a.indexOf(i))).length > 0 && p(t).unusedInput.push(s), a = a.slice(a.indexOf(i) + i.length), c += i.length), B[o] ? (i ? p(t).empty = !1 : p(t).unusedTokens.push(o), mt(o, i, t)) : t._strict && !i && p(t).unusedTokens.push(o);
                            p(t).charsLeftOver = l - c, a.length > 0 && p(t).unusedInput.push(a), t._a[3] <= 12 && !0 === p(t).bigHour && t._a[3] > 0 && (p(t).bigHour = void 0), p(t).parsedDateParts = t._a.slice(0), p(t).meridiem = t._meridiem, t._a[3] = function (t, e, i) {
                                var n;
                                return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? ((n = t.isPM(i)) && e < 12 && (e += 12), n || 12 !== e || (e = 0), e) : e
                            }(t._locale, t._a[3], t._meridiem), ue(t), le(t)
                        } else we(t); else ve(t)
                    }

                    function ke(t) {
                        var e = t._i, i = t._f;
                        return t._locale = t._locale || ae(t._l), null === e || void 0 === i && "" === e ? m({nullInput: !0}) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), w(e) ? new b(le(e)) : (c(e) ? t._d = e : o(i) ? function (t) {
                            var e, i, n, r, o;
                            if (0 === t._f.length) return p(t).invalidFormat = !0, void (t._d = new Date(NaN));
                            for (r = 0; r < t._f.length; r++) o = 0, e = y({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], xe(e), g(e) && (o += p(e).charsLeftOver, o += 10 * p(e).unusedTokens.length, p(e).score = o, (null == n || o < n) && (n = o, i = e));
                            d(t, i || e)
                        }(t) : i ? xe(t) : function (t) {
                            var e = t._i;
                            a(e) ? t._d = new Date(r.now()) : c(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? function (t) {
                                var e = me.exec(t._i);
                                null === e ? (ve(t), !1 === t._isValid && (delete t._isValid, we(t), !1 === t._isValid && (delete t._isValid, r.createFromInputFallback(t)))) : t._d = new Date(+e[1])
                            }(t) : o(e) ? (t._a = u(e.slice(0), (function (t) {
                                return parseInt(t, 10)
                            })), ue(t)) : s(e) ? function (t) {
                                if (!t._d) {
                                    var e = F(t._i);
                                    t._a = u([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], (function (t) {
                                        return t && parseInt(t, 10)
                                    })), ue(t)
                                }
                            }(t) : l(e) ? t._d = new Date(e) : r.createFromInputFallback(t)
                        }(t), g(t) || (t._d = null), t))
                    }

                    function Ce(t, e, i, n, r) {
                        var a, l = {};
                        return !0 !== i && !1 !== i || (n = i, i = void 0), (s(t) && function (t) {
                            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                            var e;
                            for (e in t) if (t.hasOwnProperty(e)) return !1;
                            return !0
                        }(t) || o(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = r, l._l = i, l._i = t, l._f = e, l._strict = n, (a = new b(le(ke(l))))._nextDay && (a.add(1, "d"), a._nextDay = void 0), a
                    }

                    function Se(t, e, i, n) {
                        return Ce(t, e, i, n, !1)
                    }

                    r.createFromInputFallback = T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function (t) {
                        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
                    })), r.ISO_8601 = function () {
                    }, r.RFC_2822 = function () {
                    };
                    var Te = T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
                            var t = Se.apply(null, arguments);
                            return this.isValid() && t.isValid() ? t < this ? this : t : m()
                        })),
                        Me = T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
                            var t = Se.apply(null, arguments);
                            return this.isValid() && t.isValid() ? t > this ? this : t : m()
                        }));

                    function De(t, e) {
                        var i, n;
                        if (1 === e.length && o(e[0]) && (e = e[0]), !e.length) return Se();
                        for (i = e[0], n = 1; n < e.length; ++n) e[n].isValid() && !e[n][t](i) || (i = e[n]);
                        return i
                    }

                    var Oe = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

                    function Ee(t) {
                        var e = F(t), i = e.year || 0, n = e.quarter || 0, r = e.month || 0,
                            o = e.week || e.isoWeek || 0, s = e.day || 0, a = e.hour || 0, l = e.minute || 0,
                            c = e.second || 0, u = e.millisecond || 0;
                        this._isValid = function (t) {
                            for (var e in t) if (-1 === _t.call(Oe, e) || null != t[e] && isNaN(t[e])) return !1;
                            for (var i = !1, n = 0; n < Oe.length; ++n) if (t[Oe[n]]) {
                                if (i) return !1;
                                parseFloat(t[Oe[n]]) !== k(t[Oe[n]]) && (i = !0)
                            }
                            return !0
                        }(e), this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * a * 60 * 60, this._days = +s + 7 * o, this._months = +r + 3 * n + 12 * i, this._data = {}, this._locale = ae(), this._bubble()
                    }

                    function Pe(t) {
                        return t instanceof Ee
                    }

                    function Ae(t) {
                        return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
                    }

                    function Ie(t, e) {
                        V(t, 0, 0, (function () {
                            var t = this.utcOffset(), i = "+";
                            return t < 0 && (t = -t, i = "-"), i + $(~~(t / 60), 2) + e + $(~~t % 60, 2)
                        }))
                    }

                    Ie("Z", ":"), Ie("ZZ", ""), ut("Z", at), ut("ZZ", at), pt(["Z", "ZZ"], (function (t, e, i) {
                        i._useUTC = !0, i._tzm = Ne(at, t)
                    }));
                    var je = /([\+\-]|\d\d)/gi;

                    function Ne(t, e) {
                        var i = (e || "").match(t);
                        if (null === i) return null;
                        var n = ((i[i.length - 1] || []) + "").match(je) || ["-", 0, 0], r = 60 * n[1] + k(n[2]);
                        return 0 === r ? 0 : "+" === n[0] ? r : -r
                    }

                    function Fe(t, e) {
                        var i, n;
                        return e._isUTC ? (i = e.clone(), n = (w(t) || c(t) ? t.valueOf() : Se(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + n), r.updateOffset(i, !1), i) : Se(t).local()
                    }

                    function Le(t) {
                        return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
                    }

                    function Re() {
                        return !!this.isValid() && this._isUTC && 0 === this._offset
                    }

                    r.updateOffset = function () {
                    };
                    var $e = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                        ze = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

                    function We(t, e) {
                        var i, n, r, o, s, a, c = t, u = null;
                        return Pe(t) ? c = {
                            ms: t._milliseconds,
                            d: t._days,
                            M: t._months
                        } : l(t) ? (c = {}, e ? c[e] = t : c.milliseconds = t) : (u = $e.exec(t)) ? (i = "-" === u[1] ? -1 : 1, c = {
                            y: 0,
                            d: k(u[2]) * i,
                            h: k(u[3]) * i,
                            m: k(u[4]) * i,
                            s: k(u[5]) * i,
                            ms: k(Ae(1e3 * u[6])) * i
                        }) : (u = ze.exec(t)) ? (i = "-" === u[1] ? -1 : 1, c = {
                            y: He(u[2], i),
                            M: He(u[3], i),
                            w: He(u[4], i),
                            d: He(u[5], i),
                            h: He(u[6], i),
                            m: He(u[7], i),
                            s: He(u[8], i)
                        }) : null == c ? c = {} : "object" == typeof c && ("from" in c || "to" in c) && (o = Se(c.from), s = Se(c.to), r = o.isValid() && s.isValid() ? (s = Fe(s, o), o.isBefore(s) ? a = Be(o, s) : ((a = Be(s, o)).milliseconds = -a.milliseconds, a.months = -a.months), a) : {
                            milliseconds: 0,
                            months: 0
                        }, (c = {}).ms = r.milliseconds, c.M = r.months), n = new Ee(c), Pe(t) && h(t, "_locale") && (n._locale = t._locale), n
                    }

                    function He(t, e) {
                        var i = t && parseFloat(t.replace(",", "."));
                        return (isNaN(i) ? 0 : i) * e
                    }

                    function Be(t, e) {
                        var i = {};
                        return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
                    }

                    function Ve(t, e) {
                        return function (i, n) {
                            var r;
                            return null === n || isNaN(+n) || (O(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = i, i = n, n = r), Ye(this, We(i = "string" == typeof i ? +i : i, n), t), this
                        }
                    }

                    function Ye(t, e, i, n) {
                        var o = e._milliseconds, s = Ae(e._days), a = Ae(e._months);
                        t.isValid() && (n = null == n || n, a && Ot(t, xt(t, "Month") + a * i), s && kt(t, "Date", xt(t, "Date") + s * i), o && t._d.setTime(t._d.valueOf() + o * i), n && r.updateOffset(t, s || a))
                    }

                    We.fn = Ee.prototype, We.invalid = function () {
                        return We(NaN)
                    };
                    var qe = Ve(1, "add"), Ue = Ve(-1, "subtract");

                    function Ge(t, e) {
                        var i = 12 * (e.year() - t.year()) + (e.month() - t.month()), n = t.clone().add(i, "months");
                        return -(i + (e - n < 0 ? (e - n) / (n - t.clone().add(i - 1, "months")) : (e - n) / (t.clone().add(i + 1, "months") - n))) || 0
                    }

                    function Qe(t) {
                        var e;
                        return void 0 === t ? this._locale._abbr : (null != (e = ae(t)) && (this._locale = e), this)
                    }

                    r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                    var Xe = T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function (t) {
                        return void 0 === t ? this.localeData() : this.locale(t)
                    }));

                    function Ze() {
                        return this._locale
                    }

                    function Ke(t, e) {
                        return (t % e + e) % e
                    }

                    function Je(t, e, i) {
                        return t < 100 && t >= 0 ? new Date(t + 400, e, i) - 126227808e5 : new Date(t, e, i).valueOf()
                    }

                    function ti(t, e, i) {
                        return t < 100 && t >= 0 ? Date.UTC(t + 400, e, i) - 126227808e5 : Date.UTC(t, e, i)
                    }

                    function ei(t, e) {
                        V(0, [t, t.length], 0, e)
                    }

                    function ii(t, e, i, n, r) {
                        var o;
                        return null == t ? Rt(this, n, r).year : (e > (o = $t(t, n, r)) && (e = o), ni.call(this, t, e, i, n, r))
                    }

                    function ni(t, e, i, n, r) {
                        var o = Lt(t, e, i, n, r), s = Nt(o.year, 0, o.dayOfYear);
                        return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
                    }

                    V(0, ["gg", 2], 0, (function () {
                        return this.weekYear() % 100
                    })), V(0, ["GG", 2], 0, (function () {
                        return this.isoWeekYear() % 100
                    })), ei("gggg", "weekYear"), ei("ggggg", "weekYear"), ei("GGGG", "isoWeekYear"), ei("GGGGG", "isoWeekYear"), j("weekYear", "gg"), j("isoWeekYear", "GG"), R("weekYear", 1), R("isoWeekYear", 1), ut("G", ot), ut("g", ot), ut("GG", K, G), ut("gg", K, G), ut("GGGG", it, X), ut("gggg", it, X), ut("GGGGG", nt, Z), ut("ggggg", nt, Z), gt(["gggg", "ggggg", "GGGG", "GGGGG"], (function (t, e, i, n) {
                        e[n.substr(0, 2)] = k(t)
                    })), gt(["gg", "GG"], (function (t, e, i, n) {
                        e[n] = r.parseTwoDigitYear(t)
                    })), V("Q", 0, "Qo", "quarter"), j("quarter", "Q"), R("quarter", 7), ut("Q", U), pt("Q", (function (t, e) {
                        e[1] = 3 * (k(t) - 1)
                    })), V("D", ["DD", 2], "Do", "date"), j("date", "D"), R("date", 9), ut("D", K), ut("DD", K, G), ut("Do", (function (t, e) {
                        return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
                    })), pt(["D", "DD"], 2), pt("Do", (function (t, e) {
                        e[2] = k(t.match(K)[0])
                    }));
                    var ri = wt("Date", !0);
                    V("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), j("dayOfYear", "DDD"), R("dayOfYear", 4), ut("DDD", et), ut("DDDD", Q), pt(["DDD", "DDDD"], (function (t, e, i) {
                        i._dayOfYear = k(t)
                    })), V("m", ["mm", 2], 0, "minute"), j("minute", "m"), R("minute", 14), ut("m", K), ut("mm", K, G), pt(["m", "mm"], 4);
                    var oi = wt("Minutes", !1);
                    V("s", ["ss", 2], 0, "second"), j("second", "s"), R("second", 15), ut("s", K), ut("ss", K, G), pt(["s", "ss"], 5);
                    var si, ai = wt("Seconds", !1);
                    for (V("S", 0, 0, (function () {
                        return ~~(this.millisecond() / 100)
                    })), V(0, ["SS", 2], 0, (function () {
                        return ~~(this.millisecond() / 10)
                    })), V(0, ["SSS", 3], 0, "millisecond"), V(0, ["SSSS", 4], 0, (function () {
                        return 10 * this.millisecond()
                    })), V(0, ["SSSSS", 5], 0, (function () {
                        return 100 * this.millisecond()
                    })), V(0, ["SSSSSS", 6], 0, (function () {
                        return 1e3 * this.millisecond()
                    })), V(0, ["SSSSSSS", 7], 0, (function () {
                        return 1e4 * this.millisecond()
                    })), V(0, ["SSSSSSSS", 8], 0, (function () {
                        return 1e5 * this.millisecond()
                    })), V(0, ["SSSSSSSSS", 9], 0, (function () {
                        return 1e6 * this.millisecond()
                    })), j("millisecond", "ms"), R("millisecond", 16), ut("S", et, U), ut("SS", et, G), ut("SSS", et, Q), si = "SSSS"; si.length <= 9; si += "S") ut(si, rt);

                    function li(t, e) {
                        e[6] = k(1e3 * ("0." + t))
                    }

                    for (si = "S"; si.length <= 9; si += "S") pt(si, li);
                    var ci = wt("Milliseconds", !1);
                    V("z", 0, 0, "zoneAbbr"), V("zz", 0, 0, "zoneName");
                    var ui = b.prototype;

                    function hi(t) {
                        return t
                    }

                    ui.add = qe, ui.calendar = function (t, e) {
                        var i = t || Se(), n = Fe(i, this).startOf("day"), o = r.calendarFormat(this, n) || "sameElse",
                            s = e && (E(e[o]) ? e[o].call(this, i) : e[o]);
                        return this.format(s || this.localeData().calendar(o, this, Se(i)))
                    }, ui.clone = function () {
                        return new b(this)
                    }, ui.diff = function (t, e, i) {
                        var n, r, o;
                        if (!this.isValid()) return NaN;
                        if (!(n = Fe(t, this)).isValid()) return NaN;
                        switch (r = 6e4 * (n.utcOffset() - this.utcOffset()), e = N(e)) {
                            case"year":
                                o = Ge(this, n) / 12;
                                break;
                            case"month":
                                o = Ge(this, n);
                                break;
                            case"quarter":
                                o = Ge(this, n) / 3;
                                break;
                            case"second":
                                o = (this - n) / 1e3;
                                break;
                            case"minute":
                                o = (this - n) / 6e4;
                                break;
                            case"hour":
                                o = (this - n) / 36e5;
                                break;
                            case"day":
                                o = (this - n - r) / 864e5;
                                break;
                            case"week":
                                o = (this - n - r) / 6048e5;
                                break;
                            default:
                                o = this - n
                        }
                        return i ? o : x(o)
                    }, ui.endOf = function (t) {
                        var e;
                        if (void 0 === (t = N(t)) || "millisecond" === t || !this.isValid()) return this;
                        var i = this._isUTC ? ti : Je;
                        switch (t) {
                            case"year":
                                e = i(this.year() + 1, 0, 1) - 1;
                                break;
                            case"quarter":
                                e = i(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                                break;
                            case"month":
                                e = i(this.year(), this.month() + 1, 1) - 1;
                                break;
                            case"week":
                                e = i(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                                break;
                            case"isoWeek":
                                e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                                break;
                            case"day":
                            case"date":
                                e = i(this.year(), this.month(), this.date() + 1) - 1;
                                break;
                            case"hour":
                                e = this._d.valueOf(), e += 36e5 - Ke(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                                break;
                            case"minute":
                                e = this._d.valueOf(), e += 6e4 - Ke(e, 6e4) - 1;
                                break;
                            case"second":
                                e = this._d.valueOf(), e += 1e3 - Ke(e, 1e3) - 1
                        }
                        return this._d.setTime(e), r.updateOffset(this, !0), this
                    }, ui.format = function (t) {
                        t || (t = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
                        var e = Y(this, t);
                        return this.localeData().postformat(e)
                    }, ui.from = function (t, e) {
                        return this.isValid() && (w(t) && t.isValid() || Se(t).isValid()) ? We({
                            to: this,
                            from: t
                        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                    }, ui.fromNow = function (t) {
                        return this.from(Se(), t)
                    }, ui.to = function (t, e) {
                        return this.isValid() && (w(t) && t.isValid() || Se(t).isValid()) ? We({
                            from: this,
                            to: t
                        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                    }, ui.toNow = function (t) {
                        return this.to(Se(), t)
                    }, ui.get = function (t) {
                        return E(this[t = N(t)]) ? this[t]() : this
                    }, ui.invalidAt = function () {
                        return p(this).overflow
                    }, ui.isAfter = function (t, e) {
                        var i = w(t) ? t : Se(t);
                        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = N(e) || "millisecond") ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
                    }, ui.isBefore = function (t, e) {
                        var i = w(t) ? t : Se(t);
                        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = N(e) || "millisecond") ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
                    }, ui.isBetween = function (t, e, i, n) {
                        var r = w(t) ? t : Se(t), o = w(e) ? e : Se(e);
                        return !!(this.isValid() && r.isValid() && o.isValid()) && ("(" === (n = n || "()")[0] ? this.isAfter(r, i) : !this.isBefore(r, i)) && (")" === n[1] ? this.isBefore(o, i) : !this.isAfter(o, i))
                    }, ui.isSame = function (t, e) {
                        var i, n = w(t) ? t : Se(t);
                        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = N(e) || "millisecond") ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
                    }, ui.isSameOrAfter = function (t, e) {
                        return this.isSame(t, e) || this.isAfter(t, e)
                    }, ui.isSameOrBefore = function (t, e) {
                        return this.isSame(t, e) || this.isBefore(t, e)
                    }, ui.isValid = function () {
                        return g(this)
                    }, ui.lang = Xe, ui.locale = Qe, ui.localeData = Ze, ui.max = Me, ui.min = Te, ui.parsingFlags = function () {
                        return d({}, p(this))
                    }, ui.set = function (t, e) {
                        if ("object" == typeof t) for (var i = function (t) {
                            var e = [];
                            for (var i in t) e.push({unit: i, priority: L[i]});
                            return e.sort((function (t, e) {
                                return t.priority - e.priority
                            })), e
                        }(t = F(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]); else if (E(this[t = N(t)])) return this[t](e);
                        return this
                    }, ui.startOf = function (t) {
                        var e;
                        if (void 0 === (t = N(t)) || "millisecond" === t || !this.isValid()) return this;
                        var i = this._isUTC ? ti : Je;
                        switch (t) {
                            case"year":
                                e = i(this.year(), 0, 1);
                                break;
                            case"quarter":
                                e = i(this.year(), this.month() - this.month() % 3, 1);
                                break;
                            case"month":
                                e = i(this.year(), this.month(), 1);
                                break;
                            case"week":
                                e = i(this.year(), this.month(), this.date() - this.weekday());
                                break;
                            case"isoWeek":
                                e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                                break;
                            case"day":
                            case"date":
                                e = i(this.year(), this.month(), this.date());
                                break;
                            case"hour":
                                e = this._d.valueOf(), e -= Ke(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                                break;
                            case"minute":
                                e = this._d.valueOf(), e -= Ke(e, 6e4);
                                break;
                            case"second":
                                e = this._d.valueOf(), e -= Ke(e, 1e3)
                        }
                        return this._d.setTime(e), r.updateOffset(this, !0), this
                    }, ui.subtract = Ue, ui.toArray = function () {
                        var t = this;
                        return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
                    }, ui.toObject = function () {
                        var t = this;
                        return {
                            years: t.year(),
                            months: t.month(),
                            date: t.date(),
                            hours: t.hours(),
                            minutes: t.minutes(),
                            seconds: t.seconds(),
                            milliseconds: t.milliseconds()
                        }
                    }, ui.toDate = function () {
                        return new Date(this.valueOf())
                    }, ui.toISOString = function (t) {
                        if (!this.isValid()) return null;
                        var e = !0 !== t, i = e ? this.clone().utc() : this;
                        return i.year() < 0 || i.year() > 9999 ? Y(i, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : E(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", Y(i, "Z")) : Y(i, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
                    }, ui.inspect = function () {
                        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                        var t = "moment", e = "";
                        this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
                        var i = "[" + t + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                            r = e + '[")]';
                        return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + r)
                    }, ui.toJSON = function () {
                        return this.isValid() ? this.toISOString() : null
                    }, ui.toString = function () {
                        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                    }, ui.unix = function () {
                        return Math.floor(this.valueOf() / 1e3)
                    }, ui.valueOf = function () {
                        return this._d.valueOf() - 6e4 * (this._offset || 0)
                    }, ui.creationData = function () {
                        return {
                            input: this._i,
                            format: this._f,
                            locale: this._locale,
                            isUTC: this._isUTC,
                            strict: this._strict
                        }
                    }, ui.year = bt, ui.isLeapYear = function () {
                        return yt(this.year())
                    }, ui.weekYear = function (t) {
                        return ii.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                    }, ui.isoWeekYear = function (t) {
                        return ii.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
                    }, ui.quarter = ui.quarters = function (t) {
                        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
                    }, ui.month = Et, ui.daysInMonth = function () {
                        return Ct(this.year(), this.month())
                    }, ui.week = ui.weeks = function (t) {
                        var e = this.localeData().week(this);
                        return null == t ? e : this.add(7 * (t - e), "d")
                    }, ui.isoWeek = ui.isoWeeks = function (t) {
                        var e = Rt(this, 1, 4).week;
                        return null == t ? e : this.add(7 * (t - e), "d")
                    }, ui.weeksInYear = function () {
                        var t = this.localeData()._week;
                        return $t(this.year(), t.dow, t.doy)
                    }, ui.isoWeeksInYear = function () {
                        return $t(this.year(), 1, 4)
                    }, ui.date = ri, ui.day = ui.days = function (t) {
                        if (!this.isValid()) return null != t ? this : NaN;
                        var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                        return null != t ? (t = function (t, e) {
                            return "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10)
                        }(t, this.localeData()), this.add(t - e, "d")) : e
                    }, ui.weekday = function (t) {
                        if (!this.isValid()) return null != t ? this : NaN;
                        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                        return null == t ? e : this.add(t - e, "d")
                    }, ui.isoWeekday = function (t) {
                        if (!this.isValid()) return null != t ? this : NaN;
                        if (null != t) {
                            var e = function (t, e) {
                                return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
                            }(t, this.localeData());
                            return this.day(this.day() % 7 ? e : e - 7)
                        }
                        return this.day() || 7
                    }, ui.dayOfYear = function (t) {
                        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                        return null == t ? e : this.add(t - e, "d")
                    }, ui.hour = ui.hours = Jt, ui.minute = ui.minutes = oi, ui.second = ui.seconds = ai, ui.millisecond = ui.milliseconds = ci, ui.utcOffset = function (t, e, i) {
                        var n, o = this._offset || 0;
                        if (!this.isValid()) return null != t ? this : NaN;
                        if (null != t) {
                            if ("string" == typeof t) {
                                if (null === (t = Ne(at, t))) return this
                            } else Math.abs(t) < 16 && !i && (t *= 60);
                            return !this._isUTC && e && (n = Le(this)), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), o !== t && (!e || this._changeInProgress ? Ye(this, We(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, r.updateOffset(this, !0), this._changeInProgress = null)), this
                        }
                        return this._isUTC ? o : Le(this)
                    }, ui.utc = function (t) {
                        return this.utcOffset(0, t)
                    }, ui.local = function (t) {
                        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Le(this), "m")), this
                    }, ui.parseZone = function () {
                        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
                            var t = Ne(st, this._i);
                            null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
                        }
                        return this
                    }, ui.hasAlignedHourOffset = function (t) {
                        return !!this.isValid() && (t = t ? Se(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
                    }, ui.isDST = function () {
                        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                    }, ui.isLocal = function () {
                        return !!this.isValid() && !this._isUTC
                    }, ui.isUtcOffset = function () {
                        return !!this.isValid() && this._isUTC
                    }, ui.isUtc = Re, ui.isUTC = Re, ui.zoneAbbr = function () {
                        return this._isUTC ? "UTC" : ""
                    }, ui.zoneName = function () {
                        return this._isUTC ? "Coordinated Universal Time" : ""
                    }, ui.dates = T("dates accessor is deprecated. Use date instead.", ri), ui.months = T("months accessor is deprecated. Use month instead", Et), ui.years = T("years accessor is deprecated. Use year instead", bt), ui.zone = T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function (t, e) {
                        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
                    })), ui.isDSTShifted = T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function () {
                        if (!a(this._isDSTShifted)) return this._isDSTShifted;
                        var t = {};
                        if (y(t, this), (t = ke(t))._a) {
                            var e = t._isUTC ? f(t._a) : Se(t._a);
                            this._isDSTShifted = this.isValid() && C(t._a, e.toArray()) > 0
                        } else this._isDSTShifted = !1;
                        return this._isDSTShifted
                    }));
                    var di = A.prototype;

                    function fi(t, e, i, n) {
                        var r = ae(), o = f().set(n, e);
                        return r[i](o, t)
                    }

                    function pi(t, e, i) {
                        if (l(t) && (e = t, t = void 0), t = t || "", null != e) return fi(t, e, i, "month");
                        var n, r = [];
                        for (n = 0; n < 12; n++) r[n] = fi(t, n, i, "month");
                        return r
                    }

                    function gi(t, e, i, n) {
                        "boolean" == typeof t ? (l(e) && (i = e, e = void 0), e = e || "") : (i = e = t, t = !1, l(e) && (i = e, e = void 0), e = e || "");
                        var r, o = ae(), s = t ? o._week.dow : 0;
                        if (null != i) return fi(e, (i + s) % 7, n, "day");
                        var a = [];
                        for (r = 0; r < 7; r++) a[r] = fi(e, (r + s) % 7, n, "day");
                        return a
                    }

                    di.calendar = function (t, e, i) {
                        var n = this._calendar[t] || this._calendar.sameElse;
                        return E(n) ? n.call(e, i) : n
                    }, di.longDateFormat = function (t) {
                        var e = this._longDateFormat[t], i = this._longDateFormat[t.toUpperCase()];
                        return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, (function (t) {
                            return t.slice(1)
                        })), this._longDateFormat[t])
                    }, di.invalidDate = function () {
                        return this._invalidDate
                    }, di.ordinal = function (t) {
                        return this._ordinal.replace("%d", t)
                    }, di.preparse = hi, di.postformat = hi, di.relativeTime = function (t, e, i, n) {
                        var r = this._relativeTime[i];
                        return E(r) ? r(t, e, i, n) : r.replace(/%d/i, t)
                    }, di.pastFuture = function (t, e) {
                        var i = this._relativeTime[t > 0 ? "future" : "past"];
                        return E(i) ? i(e) : i.replace(/%s/i, e)
                    }, di.set = function (t) {
                        var e, i;
                        for (i in t) E(e = t[i]) ? this[i] = e : this["_" + i] = e;
                        this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                    }, di.months = function (t, e) {
                        return t ? o(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || St).test(e) ? "format" : "standalone"][t.month()] : o(this._months) ? this._months : this._months.standalone
                    }, di.monthsShort = function (t, e) {
                        return t ? o(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[St.test(e) ? "format" : "standalone"][t.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                    }, di.monthsParse = function (t, e, i) {
                        var n, r, o;
                        if (this._monthsParseExact) return Dt.call(this, t, e, i);
                        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                            if (r = f([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(o.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
                            if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
                            if (!i && this._monthsParse[n].test(t)) return n
                        }
                    }, di.monthsRegex = function (t) {
                        return this._monthsParseExact ? (h(this, "_monthsRegex") || It.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = At), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
                    }, di.monthsShortRegex = function (t) {
                        return this._monthsParseExact ? (h(this, "_monthsRegex") || It.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = Pt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
                    }, di.week = function (t) {
                        return Rt(t, this._week.dow, this._week.doy).week
                    }, di.firstDayOfYear = function () {
                        return this._week.doy
                    }, di.firstDayOfWeek = function () {
                        return this._week.dow
                    }, di.weekdays = function (t, e) {
                        var i = o(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
                        return !0 === t ? zt(i, this._week.dow) : t ? i[t.day()] : i
                    }, di.weekdaysMin = function (t) {
                        return !0 === t ? zt(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin
                    }, di.weekdaysShort = function (t) {
                        return !0 === t ? zt(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort
                    }, di.weekdaysParse = function (t, e, i) {
                        var n, r, o;
                        if (this._weekdaysParseExact) return Vt.call(this, t, e, i);
                        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                            if (r = f([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;
                            if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
                            if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
                            if (!i && this._weekdaysParse[n].test(t)) return n
                        }
                    }, di.weekdaysRegex = function (t) {
                        return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Gt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = Yt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
                    }, di.weekdaysShortRegex = function (t) {
                        return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Gt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                    }, di.weekdaysMinRegex = function (t) {
                        return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Gt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ut), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                    }, di.isPM = function (t) {
                        return "p" === (t + "").toLowerCase().charAt(0)
                    }, di.meridiem = function (t, e, i) {
                        return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
                    }, oe("en", {
                        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (t) {
                            var e = t % 10;
                            return t + (1 === k(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
                        }
                    }), r.lang = T("moment.lang is deprecated. Use moment.locale instead.", oe), r.langData = T("moment.langData is deprecated. Use moment.localeData instead.", ae);
                    var mi = Math.abs;

                    function vi(t, e, i, n) {
                        var r = We(e, i);
                        return t._milliseconds += n * r._milliseconds, t._days += n * r._days, t._months += n * r._months, t._bubble()
                    }

                    function yi(t) {
                        return t < 0 ? Math.floor(t) : Math.ceil(t)
                    }

                    function _i(t) {
                        return 4800 * t / 146097
                    }

                    function bi(t) {
                        return 146097 * t / 4800
                    }

                    function wi(t) {
                        return function () {
                            return this.as(t)
                        }
                    }

                    var xi = wi("ms"), ki = wi("s"), Ci = wi("m"), Si = wi("h"), Ti = wi("d"), Mi = wi("w"),
                        Di = wi("M"), Oi = wi("Q"), Ei = wi("y");

                    function Pi(t) {
                        return function () {
                            return this.isValid() ? this._data[t] : NaN
                        }
                    }

                    var Ai = Pi("milliseconds"), Ii = Pi("seconds"), ji = Pi("minutes"), Ni = Pi("hours"),
                        Fi = Pi("days"), Li = Pi("months"), Ri = Pi("years"), $i = Math.round,
                        zi = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11};

                    function Wi(t, e, i, n, r) {
                        return r.relativeTime(e || 1, !!i, t, n)
                    }

                    var Hi = Math.abs;

                    function Bi(t) {
                        return (t > 0) - (t < 0) || +t
                    }

                    function Vi() {
                        if (!this.isValid()) return this.localeData().invalidDate();
                        var t, e, i = Hi(this._milliseconds) / 1e3, n = Hi(this._days), r = Hi(this._months);
                        t = x(i / 60), e = x(t / 60), i %= 60, t %= 60;
                        var o = x(r / 12), s = r %= 12, a = n, l = e, c = t,
                            u = i ? i.toFixed(3).replace(/\.?0+$/, "") : "", h = this.asSeconds();
                        if (!h) return "P0D";
                        var d = h < 0 ? "-" : "", f = Bi(this._months) !== Bi(h) ? "-" : "",
                            p = Bi(this._days) !== Bi(h) ? "-" : "", g = Bi(this._milliseconds) !== Bi(h) ? "-" : "";
                        return d + "P" + (o ? f + o + "Y" : "") + (s ? f + s + "M" : "") + (a ? p + a + "D" : "") + (l || c || u ? "T" : "") + (l ? g + l + "H" : "") + (c ? g + c + "M" : "") + (u ? g + u + "S" : "")
                    }

                    var Yi = Ee.prototype;
                    return Yi.isValid = function () {
                        return this._isValid
                    }, Yi.abs = function () {
                        var t = this._data;
                        return this._milliseconds = mi(this._milliseconds), this._days = mi(this._days), this._months = mi(this._months), t.milliseconds = mi(t.milliseconds), t.seconds = mi(t.seconds), t.minutes = mi(t.minutes), t.hours = mi(t.hours), t.months = mi(t.months), t.years = mi(t.years), this
                    }, Yi.add = function (t, e) {
                        return vi(this, t, e, 1)
                    }, Yi.subtract = function (t, e) {
                        return vi(this, t, e, -1)
                    }, Yi.as = function (t) {
                        if (!this.isValid()) return NaN;
                        var e, i, n = this._milliseconds;
                        if ("month" === (t = N(t)) || "quarter" === t || "year" === t) switch (e = this._days + n / 864e5, i = this._months + _i(e), t) {
                            case"month":
                                return i;
                            case"quarter":
                                return i / 3;
                            case"year":
                                return i / 12
                        } else switch (e = this._days + Math.round(bi(this._months)), t) {
                            case"week":
                                return e / 7 + n / 6048e5;
                            case"day":
                                return e + n / 864e5;
                            case"hour":
                                return 24 * e + n / 36e5;
                            case"minute":
                                return 1440 * e + n / 6e4;
                            case"second":
                                return 86400 * e + n / 1e3;
                            case"millisecond":
                                return Math.floor(864e5 * e) + n;
                            default:
                                throw new Error("Unknown unit " + t)
                        }
                    }, Yi.asMilliseconds = xi, Yi.asSeconds = ki, Yi.asMinutes = Ci, Yi.asHours = Si, Yi.asDays = Ti, Yi.asWeeks = Mi, Yi.asMonths = Di, Yi.asQuarters = Oi, Yi.asYears = Ei, Yi.valueOf = function () {
                        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
                    }, Yi._bubble = function () {
                        var t, e, i, n, r, o = this._milliseconds, s = this._days, a = this._months, l = this._data;
                        return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * yi(bi(a) + s), s = 0, a = 0), l.milliseconds = o % 1e3, t = x(o / 1e3), l.seconds = t % 60, e = x(t / 60), l.minutes = e % 60, i = x(e / 60), l.hours = i % 24, s += x(i / 24), r = x(_i(s)), a += r, s -= yi(bi(r)), n = x(a / 12), a %= 12, l.days = s, l.months = a, l.years = n, this
                    }, Yi.clone = function () {
                        return We(this)
                    }, Yi.get = function (t) {
                        return t = N(t), this.isValid() ? this[t + "s"]() : NaN
                    }, Yi.milliseconds = Ai, Yi.seconds = Ii, Yi.minutes = ji, Yi.hours = Ni, Yi.days = Fi, Yi.weeks = function () {
                        return x(this.days() / 7)
                    }, Yi.months = Li, Yi.years = Ri, Yi.humanize = function (t) {
                        if (!this.isValid()) return this.localeData().invalidDate();
                        var e = this.localeData(), i = function (t, e, i) {
                            var n = We(t).abs(), r = $i(n.as("s")), o = $i(n.as("m")), s = $i(n.as("h")),
                                a = $i(n.as("d")), l = $i(n.as("M")), c = $i(n.as("y")),
                                u = r <= zi.ss && ["s", r] || r < zi.s && ["ss", r] || o <= 1 && ["m"] || o < zi.m && ["mm", o] || s <= 1 && ["h"] || s < zi.h && ["hh", s] || a <= 1 && ["d"] || a < zi.d && ["dd", a] || l <= 1 && ["M"] || l < zi.M && ["MM", l] || c <= 1 && ["y"] || ["yy", c];
                            return u[2] = e, u[3] = +t > 0, u[4] = i, Wi.apply(null, u)
                        }(this, !t, e);
                        return t && (i = e.pastFuture(+this, i)), e.postformat(i)
                    }, Yi.toISOString = Vi, Yi.toString = Vi, Yi.toJSON = Vi, Yi.locale = Qe, Yi.localeData = Ze, Yi.toIsoString = T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Vi), Yi.lang = Xe, V("X", 0, 0, "unix"), V("x", 0, 0, "valueOf"), ut("x", ot), ut("X", /[+-]?\d+(\.\d{1,3})?/), pt("X", (function (t, e, i) {
                        i._d = new Date(1e3 * parseFloat(t, 10))
                    })), pt("x", (function (t, e, i) {
                        i._d = new Date(k(t))
                    })), r.version = "2.24.0", i = Se, r.fn = ui, r.min = function () {
                        var t = [].slice.call(arguments, 0);
                        return De("isBefore", t)
                    }, r.max = function () {
                        var t = [].slice.call(arguments, 0);
                        return De("isAfter", t)
                    }, r.now = function () {
                        return Date.now ? Date.now() : +new Date
                    }, r.utc = f, r.unix = function (t) {
                        return Se(1e3 * t)
                    }, r.months = function (t, e) {
                        return pi(t, e, "months")
                    }, r.isDate = c, r.locale = oe, r.invalid = m, r.duration = We, r.isMoment = w, r.weekdays = function (t, e, i) {
                        return gi(t, e, i, "weekdays")
                    }, r.parseZone = function () {
                        return Se.apply(null, arguments).parseZone()
                    }, r.localeData = ae, r.isDuration = Pe, r.monthsShort = function (t, e) {
                        return pi(t, e, "monthsShort")
                    }, r.weekdaysMin = function (t, e, i) {
                        return gi(t, e, i, "weekdaysMin")
                    }, r.defineLocale = se, r.updateLocale = function (t, e) {
                        if (null != e) {
                            var i, n, r = te;
                            null != (n = re(t)) && (r = n._config), e = P(r, e), (i = new A(e)).parentLocale = ee[t], ee[t] = i, oe(t)
                        } else null != ee[t] && (null != ee[t].parentLocale ? ee[t] = ee[t].parentLocale : null != ee[t] && delete ee[t]);
                        return ee[t]
                    }, r.locales = function () {
                        return M(ee)
                    }, r.weekdaysShort = function (t, e, i) {
                        return gi(t, e, i, "weekdaysShort")
                    }, r.normalizeUnits = N, r.relativeTimeRounding = function (t) {
                        return void 0 === t ? $i : "function" == typeof t && ($i = t, !0)
                    }, r.relativeTimeThreshold = function (t, e) {
                        return void 0 !== zi[t] && (void 0 === e ? zi[t] : (zi[t] = e, "s" === t && (zi.ss = e - 1), !0))
                    }, r.calendarFormat = function (t, e) {
                        var i = t.diff(e, "days", !0);
                        return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
                    }, r.prototype = ui, r.HTML5_FMT = {
                        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                        DATE: "YYYY-MM-DD",
                        TIME: "HH:mm",
                        TIME_SECONDS: "HH:mm:ss",
                        TIME_MS: "HH:mm:ss.SSS",
                        WEEK: "GGGG-[W]WW",
                        MONTH: "YYYY-MM"
                    }, r
                }()
            })), dn = {
                datetime: "MMM D, YYYY, h:mm:ss a",
                millisecond: "h:mm:ss.SSS a",
                second: "h:mm:ss a",
                minute: "h:mm a",
                hour: "hA",
                day: "MMM D",
                week: "ll",
                month: "MMM YYYY",
                quarter: "[Q]Q - YYYY",
                year: "YYYY"
            };
            ei._date.override("function" == typeof hn ? {
                _id: "moment", formats: function () {
                    return dn
                }, parse: function (t, e) {
                    return "string" == typeof t && "string" == typeof e ? t = hn(t, e) : t instanceof hn || (t = hn(t)), t.isValid() ? t.valueOf() : null
                }, format: function (t, e) {
                    return hn(t).format(e)
                }, add: function (t, e, i) {
                    return hn(t).add(e, i).valueOf()
                }, diff: function (t, e, i) {
                    return hn(t).diff(hn(e), i)
                }, startOf: function (t, e, i) {
                    return t = hn(t), "isoWeek" === e ? t.isoWeekday(i).valueOf() : t.startOf(e).valueOf()
                }, endOf: function (t, e) {
                    return hn(t).endOf(e).valueOf()
                }, _create: function (t) {
                    return hn(t)
                }
            } : {}), R._set("global", {plugins: {filler: {propagate: !0}}});
            var fn = {
                dataset: function (t) {
                    var e = t.fill, i = t.chart, n = i.getDatasetMeta(e),
                        r = n && i.isDatasetVisible(e) && n.dataset._children || [], o = r.length || 0;
                    return o ? function (t, e) {
                        return e < o && r[e]._view || null
                    } : null
                }, boundary: function (t) {
                    var e = t.boundary, i = e ? e.x : null, n = e ? e.y : null;
                    return B.isArray(e) ? function (t, i) {
                        return e[i]
                    } : function (t) {
                        return {x: null === i ? t.x : i, y: null === n ? t.y : n}
                    }
                }
            };

            function pn(t, e, i) {
                var n, r = t._model || {}, o = r.fill;
                if (void 0 === o && (o = !!r.backgroundColor), !1 === o || null === o) return !1;
                if (!0 === o) return "origin";
                if (n = parseFloat(o, 10), isFinite(n) && Math.floor(n) === n) return "-" !== o[0] && "+" !== o[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;
                switch (o) {
                    case"bottom":
                        return "start";
                    case"top":
                        return "end";
                    case"zero":
                        return "origin";
                    case"origin":
                    case"start":
                    case"end":
                        return o;
                    default:
                        return !1
                }
            }

            function gn(t) {
                return (t.el._scale || {}).getPointPositionForValue ? function (t) {
                    var e, i, n, r, o, s = t.el._scale, a = s.options, l = s.chart.data.labels.length, c = t.fill,
                        u = [];
                    if (!l) return null;
                    for (e = a.ticks.reverse ? s.max : s.min, i = a.ticks.reverse ? s.min : s.max, n = s.getPointPositionForValue(0, e), r = 0; r < l; ++r) o = "start" === c || "end" === c ? s.getPointPositionForValue(r, "start" === c ? e : i) : s.getBasePosition(r), a.gridLines.circular && (o.cx = n.x, o.cy = n.y, o.angle = s.getIndexAngle(r) - Math.PI / 2), u.push(o);
                    return u
                }(t) : function (t) {
                    var e, i = t.el._model || {}, n = t.el._scale || {}, r = t.fill, o = null;
                    if (isFinite(r)) return null;
                    if ("start" === r ? o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === r ? o = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? o = i.scaleZero : n.getBasePixel && (o = n.getBasePixel()), null != o) {
                        if (void 0 !== o.x && void 0 !== o.y) return o;
                        if (B.isFinite(o)) return {x: (e = n.isHorizontal()) ? o : null, y: e ? null : o}
                    }
                    return null
                }(t)
            }

            function mn(t, e, i) {
                var n, r = t[e].fill, o = [e];
                if (!i) return r;
                for (; !1 !== r && -1 === o.indexOf(r);) {
                    if (!isFinite(r)) return r;
                    if (!(n = t[r])) return !1;
                    if (n.visible) return r;
                    o.push(r), r = n.fill
                }
                return !1
            }

            function vn(t) {
                var e = t.fill, i = "dataset";
                return !1 === e ? null : (isFinite(e) || (i = "boundary"), fn[i](t))
            }

            function yn(t) {
                return t && !t.skip
            }

            function _n(t, e, i, n, r) {
                var o, s, a, l;
                if (n && r) {
                    for (t.moveTo(e[0].x, e[0].y), o = 1; o < n; ++o) B.canvas.lineTo(t, e[o - 1], e[o]);
                    if (void 0 === i[0].angle) for (t.lineTo(i[r - 1].x, i[r - 1].y), o = r - 1; o > 0; --o) B.canvas.lineTo(t, i[o], i[o - 1], !0); else for (s = i[0].cx, a = i[0].cy, l = Math.sqrt(Math.pow(i[0].x - s, 2) + Math.pow(i[0].y - a, 2)), o = r - 1; o > 0; --o) t.arc(s, a, l, i[o].angle, i[o - 1].angle, !0)
                }
            }

            function bn(t, e, i, n, r, o) {
                var s, a, l, c, u, h, d, f, p = e.length, g = n.spanGaps, m = [], v = [], y = 0, _ = 0;
                for (t.beginPath(), s = 0, a = p; s < a; ++s) u = i(c = e[l = s % p]._view, l, n), h = yn(c), d = yn(u), o && void 0 === f && h && (a = p + (f = s + 1)), h && d ? (y = m.push(c), _ = v.push(u)) : y && _ && (g ? (h && m.push(c), d && v.push(u)) : (_n(t, m, v, y, _), y = _ = 0, m = [], v = []));
                _n(t, m, v, y, _), t.closePath(), t.fillStyle = r, t.fill()
            }

            var wn = {
                id: "filler", afterDatasetsUpdate: function (t, e) {
                    var i, n, r, o, s = (t.data.datasets || []).length, a = e.propagate, l = [];
                    for (n = 0; n < s; ++n) o = null, (r = (i = t.getDatasetMeta(n)).dataset) && r._model && r instanceof kt.Line && (o = {
                        visible: t.isDatasetVisible(n),
                        fill: pn(r, n, s),
                        chart: t,
                        el: r
                    }), i.$filler = o, l.push(o);
                    for (n = 0; n < s; ++n) (o = l[n]) && (o.fill = mn(l, n, a), o.boundary = gn(o), o.mapper = vn(o))
                }, beforeDatasetsDraw: function (t) {
                    var e, i, n, r, o, s, a, l = t._getSortedVisibleDatasetMetas(), c = t.ctx;
                    for (i = l.length - 1; i >= 0; --i) (e = l[i].$filler) && e.visible && (r = (n = e.el)._view, o = n._children || [], s = e.mapper, a = r.backgroundColor || R.global.defaultColor, s && a && o.length && (B.canvas.clipArea(c, t.chartArea), bn(c, o, s, r, a, n._loop), B.canvas.unclipArea(c)))
                }
            }, xn = B.rtl.getRtlAdapter, kn = B.noop, Cn = B.valueOrDefault;

            function Sn(t, e) {
                return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
            }

            R._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    align: "center",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function (t, e) {
                        var i = e.datasetIndex, n = this.chart, r = n.getDatasetMeta(i);
                        r.hidden = null === r.hidden ? !n.data.datasets[i].hidden : null, n.update()
                    },
                    onHover: null,
                    onLeave: null,
                    labels: {
                        boxWidth: 40, padding: 10, generateLabels: function (t) {
                            var e = t.data.datasets, i = t.options.legend || {}, n = i.labels && i.labels.usePointStyle;
                            return t._getSortedDatasetMetas().map((function (i) {
                                var r = i.controller.getStyle(n ? 0 : void 0);
                                return {
                                    text: e[i.index].label,
                                    fillStyle: r.backgroundColor,
                                    hidden: !t.isDatasetVisible(i.index),
                                    lineCap: r.borderCapStyle,
                                    lineDash: r.borderDash,
                                    lineDashOffset: r.borderDashOffset,
                                    lineJoin: r.borderJoinStyle,
                                    lineWidth: r.borderWidth,
                                    strokeStyle: r.borderColor,
                                    pointStyle: r.pointStyle,
                                    rotation: r.rotation,
                                    datasetIndex: i.index
                                }
                            }), this)
                        }
                    }
                }, legendCallback: function (t) {
                    var e, i, n, r = document.createElement("ul"), o = t.data.datasets;
                    for (r.setAttribute("class", t.id + "-legend"), e = 0, i = o.length; e < i; e++) (n = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[e].backgroundColor, o[e].label && n.appendChild(document.createTextNode(o[e].label));
                    return r.outerHTML
                }
            });
            var Tn = X.extend({
                initialize: function (t) {
                    B.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1
                }, beforeUpdate: kn, update: function (t, e, i) {
                    var n = this;
                    return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                }, afterUpdate: kn, beforeSetDimensions: kn, setDimensions: function () {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                }, afterSetDimensions: kn, beforeBuildLabels: kn, buildLabels: function () {
                    var t = this, e = t.options.labels || {}, i = B.callback(e.generateLabels, [t.chart], t) || [];
                    e.filter && (i = i.filter((function (i) {
                        return e.filter(i, t.chart.data)
                    }))), t.options.reverse && i.reverse(), t.legendItems = i
                }, afterBuildLabels: kn, beforeFit: kn, fit: function () {
                    var t = this, e = t.options, i = e.labels, n = e.display, r = t.ctx, o = B.options._parseFont(i),
                        s = o.size, a = t.legendHitBoxes = [], l = t.minSize, c = t.isHorizontal();
                    if (c ? (l.width = t.maxWidth, l.height = n ? 10 : 0) : (l.width = n ? 10 : 0, l.height = t.maxHeight), n) {
                        if (r.font = o.string, c) {
                            var u = t.lineWidths = [0], h = 0;
                            r.textAlign = "left", r.textBaseline = "middle", B.each(t.legendItems, (function (t, e) {
                                var n = Sn(i, s) + s / 2 + r.measureText(t.text).width;
                                (0 === e || u[u.length - 1] + n + 2 * i.padding > l.width) && (h += s + i.padding, u[u.length - (e > 0 ? 0 : 1)] = 0), a[e] = {
                                    left: 0,
                                    top: 0,
                                    width: n,
                                    height: s
                                }, u[u.length - 1] += n + i.padding
                            })), l.height += h
                        } else {
                            var d = i.padding, f = t.columnWidths = [], p = t.columnHeights = [], g = i.padding, m = 0,
                                v = 0;
                            B.each(t.legendItems, (function (t, e) {
                                var n = Sn(i, s) + s / 2 + r.measureText(t.text).width;
                                e > 0 && v + s + 2 * d > l.height && (g += m + i.padding, f.push(m), p.push(v), m = 0, v = 0), m = Math.max(m, n), v += s + d, a[e] = {
                                    left: 0,
                                    top: 0,
                                    width: n,
                                    height: s
                                }
                            })), g += m, f.push(m), p.push(v), l.width += g
                        }
                        t.width = l.width, t.height = l.height
                    } else t.width = l.width = t.height = l.height = 0
                }, afterFit: kn, isHorizontal: function () {
                    return "top" === this.options.position || "bottom" === this.options.position
                }, draw: function () {
                    var t = this, e = t.options, i = e.labels, n = R.global, r = n.defaultColor, o = n.elements.line,
                        s = t.height, a = t.columnHeights, l = t.width, c = t.lineWidths;
                    if (e.display) {
                        var u, h = xn(e.rtl, t.left, t.minSize.width), d = t.ctx,
                            f = Cn(i.fontColor, n.defaultFontColor), p = B.options._parseFont(i), g = p.size;
                        d.textAlign = h.textAlign("left"), d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = f, d.fillStyle = f, d.font = p.string;
                        var m = Sn(i, g), v = t.legendHitBoxes, y = function (t, n) {
                            switch (e.align) {
                                case"start":
                                    return i.padding;
                                case"end":
                                    return t - n;
                                default:
                                    return (t - n + i.padding) / 2
                            }
                        }, _ = t.isHorizontal();
                        u = _ ? {x: t.left + y(l, c[0]), y: t.top + i.padding, line: 0} : {
                            x: t.left + i.padding,
                            y: t.top + y(s, a[0]),
                            line: 0
                        }, B.rtl.overrideTextDirection(t.ctx, e.textDirection);
                        var b = g + i.padding;
                        B.each(t.legendItems, (function (e, n) {
                            var f = d.measureText(e.text).width, p = m + g / 2 + f, w = u.x, x = u.y;
                            h.setWidth(t.minSize.width), _ ? n > 0 && w + p + i.padding > t.left + t.minSize.width && (x = u.y += b, u.line++, w = u.x = t.left + y(l, c[u.line])) : n > 0 && x + b > t.top + t.minSize.height && (w = u.x = w + t.columnWidths[u.line] + i.padding, u.line++, x = u.y = t.top + y(s, a[u.line]));
                            var k = h.x(w);
                            !function (t, e, n) {
                                if (!(isNaN(m) || m <= 0)) {
                                    d.save();
                                    var s = Cn(n.lineWidth, o.borderWidth);
                                    if (d.fillStyle = Cn(n.fillStyle, r), d.lineCap = Cn(n.lineCap, o.borderCapStyle), d.lineDashOffset = Cn(n.lineDashOffset, o.borderDashOffset), d.lineJoin = Cn(n.lineJoin, o.borderJoinStyle), d.lineWidth = s, d.strokeStyle = Cn(n.strokeStyle, r), d.setLineDash && d.setLineDash(Cn(n.lineDash, o.borderDash)), i && i.usePointStyle) {
                                        var a = m * Math.SQRT2 / 2, l = h.xPlus(t, m / 2), c = e + g / 2;
                                        B.canvas.drawPoint(d, n.pointStyle, a, l, c, n.rotation)
                                    } else d.fillRect(h.leftForLtr(t, m), e, m, g), 0 !== s && d.strokeRect(h.leftForLtr(t, m), e, m, g);
                                    d.restore()
                                }
                            }(k, x, e), v[n].left = h.leftForLtr(k, v[n].width), v[n].top = x, function (t, e, i, n) {
                                var r = g / 2, o = h.xPlus(t, m + r), s = e + r;
                                d.fillText(i.text, o, s), i.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(o, s), d.lineTo(h.xPlus(o, n), s), d.stroke())
                            }(k, x, e, f), _ ? u.x += p + i.padding : u.y += b
                        })), B.rtl.restoreTextDirection(t.ctx, e.textDirection)
                    }
                }, _getLegendItemAt: function (t, e) {
                    var i, n, r, o = this;
                    if (t >= o.left && t <= o.right && e >= o.top && e <= o.bottom) for (r = o.legendHitBoxes, i = 0; i < r.length; ++i) if (t >= (n = r[i]).left && t <= n.left + n.width && e >= n.top && e <= n.top + n.height) return o.legendItems[i];
                    return null
                }, handleEvent: function (t) {
                    var e, i = this, n = i.options, r = "mouseup" === t.type ? "click" : t.type;
                    if ("mousemove" === r) {
                        if (!n.onHover && !n.onLeave) return
                    } else {
                        if ("click" !== r) return;
                        if (!n.onClick) return
                    }
                    e = i._getLegendItemAt(t.x, t.y), "click" === r ? e && n.onClick && n.onClick.call(i, t.native, e) : (n.onLeave && e !== i._hoveredItem && (i._hoveredItem && n.onLeave.call(i, t.native, i._hoveredItem), i._hoveredItem = e), n.onHover && e && n.onHover.call(i, t.native, e))
                }
            });

            function Mn(t, e) {
                var i = new Tn({ctx: t.ctx, options: e, chart: t});
                me.configure(t, i, e), me.addBox(t, i), t.legend = i
            }

            var Dn = {
                id: "legend", _element: Tn, beforeInit: function (t) {
                    var e = t.options.legend;
                    e && Mn(t, e)
                }, beforeUpdate: function (t) {
                    var e = t.options.legend, i = t.legend;
                    e ? (B.mergeIf(e, R.global.legend), i ? (me.configure(t, i, e), i.options = e) : Mn(t, e)) : i && (me.removeBox(t, i), delete t.legend)
                }, afterEvent: function (t, e) {
                    var i = t.legend;
                    i && i.handleEvent(e)
                }
            }, On = B.noop;
            R._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            });
            var En = X.extend({
                initialize: function (t) {
                    B.extend(this, t), this.legendHitBoxes = []
                },
                beforeUpdate: On,
                update: function (t, e, i) {
                    var n = this;
                    return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                },
                afterUpdate: On,
                beforeSetDimensions: On,
                setDimensions: function () {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: On,
                beforeBuildLabels: On,
                buildLabels: On,
                afterBuildLabels: On,
                beforeFit: On,
                fit: function () {
                    var t, e = this, i = e.options, n = e.minSize = {}, r = e.isHorizontal();
                    i.display ? (t = (B.isArray(i.text) ? i.text.length : 1) * B.options._parseFont(i).lineHeight + 2 * i.padding, e.width = n.width = r ? e.maxWidth : t, e.height = n.height = r ? t : e.maxHeight) : e.width = n.width = e.height = n.height = 0
                },
                afterFit: On,
                isHorizontal: function () {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t
                },
                draw: function () {
                    var t = this, e = t.ctx, i = t.options;
                    if (i.display) {
                        var n, r, o, s = B.options._parseFont(i), a = s.lineHeight, l = a / 2 + i.padding, c = 0,
                            u = t.top, h = t.left, d = t.bottom, f = t.right;
                        e.fillStyle = B.valueOrDefault(i.fontColor, R.global.defaultFontColor), e.font = s.string, t.isHorizontal() ? (r = h + (f - h) / 2, o = u + l, n = f - h) : (r = "left" === i.position ? h + l : f - l, o = u + (d - u) / 2, n = d - u, c = Math.PI * ("left" === i.position ? -.5 : .5)), e.save(), e.translate(r, o), e.rotate(c), e.textAlign = "center", e.textBaseline = "middle";
                        var p = i.text;
                        if (B.isArray(p)) for (var g = 0, m = 0; m < p.length; ++m) e.fillText(p[m], 0, g, n), g += a; else e.fillText(p, 0, 0, n);
                        e.restore()
                    }
                }
            });

            function Pn(t, e) {
                var i = new En({ctx: t.ctx, options: e, chart: t});
                me.configure(t, i, e), me.addBox(t, i), t.titleBlock = i
            }

            var An = {}, In = wn, jn = Dn, Nn = {
                id: "title", _element: En, beforeInit: function (t) {
                    var e = t.options.title;
                    e && Pn(t, e)
                }, beforeUpdate: function (t) {
                    var e = t.options.title, i = t.titleBlock;
                    e ? (B.mergeIf(e, R.global.title), i ? (me.configure(t, i, e), i.options = e) : Pn(t, e)) : i && (me.removeBox(t, i), delete t.titleBlock)
                }
            };
            for (var Fn in An.filler = In, An.legend = jn, An.title = Nn, Ke.helpers = B, function () {
                function t(t, e, i) {
                    var n;
                    return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
                }

                function e(t) {
                    return null != t && "none" !== t
                }

                function i(i, n, r) {
                    var o = document.defaultView, s = B._getParentNode(i), a = o.getComputedStyle(i)[n],
                        l = o.getComputedStyle(s)[n], c = e(a), u = e(l), h = Number.POSITIVE_INFINITY;
                    return c || u ? Math.min(c ? t(a, i, r) : h, u ? t(l, s, r) : h) : "none"
                }

                B.where = function (t, e) {
                    if (B.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var i = [];
                    return B.each(t, (function (t) {
                        e(t) && i.push(t)
                    })), i
                }, B.findIndex = Array.prototype.findIndex ? function (t, e, i) {
                    return t.findIndex(e, i)
                } : function (t, e, i) {
                    i = void 0 === i ? t : i;
                    for (var n = 0, r = t.length; n < r; ++n) if (e.call(i, t[n], n, t)) return n;
                    return -1
                }, B.findNextWhere = function (t, e, i) {
                    B.isNullOrUndef(i) && (i = -1);
                    for (var n = i + 1; n < t.length; n++) {
                        var r = t[n];
                        if (e(r)) return r
                    }
                }, B.findPreviousWhere = function (t, e, i) {
                    B.isNullOrUndef(i) && (i = t.length);
                    for (var n = i - 1; n >= 0; n--) {
                        var r = t[n];
                        if (e(r)) return r
                    }
                }, B.isNumber = function (t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, B.almostEquals = function (t, e, i) {
                    return Math.abs(t - e) < i
                }, B.almostWhole = function (t, e) {
                    var i = Math.round(t);
                    return i - e <= t && i + e >= t
                }, B.max = function (t) {
                    return t.reduce((function (t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }), Number.NEGATIVE_INFINITY)
                }, B.min = function (t) {
                    return t.reduce((function (t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }), Number.POSITIVE_INFINITY)
                }, B.sign = Math.sign ? function (t) {
                    return Math.sign(t)
                } : function (t) {
                    return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
                }, B.toRadians = function (t) {
                    return t * (Math.PI / 180)
                }, B.toDegrees = function (t) {
                    return t * (180 / Math.PI)
                }, B._decimalPlaces = function (t) {
                    if (B.isFinite(t)) {
                        for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;
                        return i
                    }
                }, B.getAngleFromPoint = function (t, e) {
                    var i = e.x - t.x, n = e.y - t.y, r = Math.sqrt(i * i + n * n), o = Math.atan2(n, i);
                    return o < -.5 * Math.PI && (o += 2 * Math.PI), {angle: o, distance: r}
                }, B.distanceBetweenPoints = function (t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, B.aliasPixel = function (t) {
                    return t % 2 == 0 ? 0 : .5
                }, B._alignPixel = function (t, e, i) {
                    var n = t.currentDevicePixelRatio, r = i / 2;
                    return Math.round((e - r) * n) / n + r
                }, B.splineCurve = function (t, e, i, n) {
                    var r = t.skip ? e : t, o = e, s = i.skip ? e : i,
                        a = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                        l = Math.sqrt(Math.pow(s.x - o.x, 2) + Math.pow(s.y - o.y, 2)), c = a / (a + l),
                        u = l / (a + l), h = n * (c = isNaN(c) ? 0 : c), d = n * (u = isNaN(u) ? 0 : u);
                    return {
                        previous: {x: o.x - h * (s.x - r.x), y: o.y - h * (s.y - r.y)},
                        next: {x: o.x + d * (s.x - r.x), y: o.y + d * (s.y - r.y)}
                    }
                }, B.EPSILON = Number.EPSILON || 1e-14, B.splineCurveMonotone = function (t) {
                    var e, i, n, r, o, s, a, l, c, u = (t || []).map((function (t) {
                        return {model: t._model, deltaK: 0, mK: 0}
                    })), h = u.length;
                    for (e = 0; e < h; ++e) if (!(n = u[e]).model.skip) {
                        if (i = e > 0 ? u[e - 1] : null, (r = e < h - 1 ? u[e + 1] : null) && !r.model.skip) {
                            var d = r.model.x - n.model.x;
                            n.deltaK = 0 !== d ? (r.model.y - n.model.y) / d : 0
                        }
                        !i || i.model.skip ? n.mK = n.deltaK : !r || r.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2
                    }
                    for (e = 0; e < h - 1; ++e) n = u[e], r = u[e + 1], n.model.skip || r.model.skip || (B.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = r.mK = 0 : (o = n.mK / n.deltaK, s = r.mK / n.deltaK, (l = Math.pow(o, 2) + Math.pow(s, 2)) <= 9 || (a = 3 / Math.sqrt(l), n.mK = o * a * n.deltaK, r.mK = s * a * n.deltaK)));
                    for (e = 0; e < h; ++e) (n = u[e]).model.skip || (i = e > 0 ? u[e - 1] : null, r = e < h - 1 ? u[e + 1] : null, i && !i.model.skip && (c = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - c, n.model.controlPointPreviousY = n.model.y - c * n.mK), r && !r.model.skip && (c = (r.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + c, n.model.controlPointNextY = n.model.y + c * n.mK))
                }, B.nextItem = function (t, e, i) {
                    return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, B.previousItem = function (t, e, i) {
                    return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, B.niceNum = function (t, e) {
                    var i = Math.floor(B.log10(t)), n = t / Math.pow(10, i);
                    return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i)
                }, B.requestAnimFrame = "undefined" == typeof window ? function (t) {
                    t()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                    return window.setTimeout(t, 1e3 / 60)
                }, B.getRelativePosition = function (t, e) {
                    var i, n, r = t.originalEvent || t, o = t.target || t.srcElement, s = o.getBoundingClientRect(),
                        a = r.touches;
                    a && a.length > 0 ? (i = a[0].clientX, n = a[0].clientY) : (i = r.clientX, n = r.clientY);
                    var l = parseFloat(B.getStyle(o, "padding-left")), c = parseFloat(B.getStyle(o, "padding-top")),
                        u = parseFloat(B.getStyle(o, "padding-right")), h = parseFloat(B.getStyle(o, "padding-bottom")),
                        d = s.right - s.left - l - u, f = s.bottom - s.top - c - h;
                    return {
                        x: i = Math.round((i - s.left - l) / d * o.width / e.currentDevicePixelRatio),
                        y: n = Math.round((n - s.top - c) / f * o.height / e.currentDevicePixelRatio)
                    }
                }, B.getConstraintWidth = function (t) {
                    return i(t, "max-width", "clientWidth")
                }, B.getConstraintHeight = function (t) {
                    return i(t, "max-height", "clientHeight")
                }, B._calculatePadding = function (t, e, i) {
                    return (e = B.getStyle(t, e)).indexOf("%") > -1 ? i * parseInt(e, 10) / 100 : parseInt(e, 10)
                }, B._getParentNode = function (t) {
                    var e = t.parentNode;
                    return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
                }, B.getMaximumWidth = function (t) {
                    var e = B._getParentNode(t);
                    if (!e) return t.clientWidth;
                    var i = e.clientWidth,
                        n = i - B._calculatePadding(e, "padding-left", i) - B._calculatePadding(e, "padding-right", i),
                        r = B.getConstraintWidth(t);
                    return isNaN(r) ? n : Math.min(n, r)
                }, B.getMaximumHeight = function (t) {
                    var e = B._getParentNode(t);
                    if (!e) return t.clientHeight;
                    var i = e.clientHeight,
                        n = i - B._calculatePadding(e, "padding-top", i) - B._calculatePadding(e, "padding-bottom", i),
                        r = B.getConstraintHeight(t);
                    return isNaN(r) ? n : Math.min(n, r)
                }, B.getStyle = function (t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, B.retinaScale = function (t, e) {
                    var i = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
                    if (1 !== i) {
                        var n = t.canvas, r = t.height, o = t.width;
                        n.height = r * i, n.width = o * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = r + "px", n.style.width = o + "px")
                    }
                }, B.fontString = function (t, e, i) {
                    return e + " " + t + "px " + i
                }, B.longestText = function (t, e, i, n) {
                    var r = (n = n || {}).data = n.data || {}, o = n.garbageCollect = n.garbageCollect || [];
                    n.font !== e && (r = n.data = {}, o = n.garbageCollect = [], n.font = e), t.font = e;
                    var s, a, l, c, u, h = 0, d = i.length;
                    for (s = 0; s < d; s++) if (null != (c = i[s]) && !0 !== B.isArray(c)) h = B.measureText(t, r, o, h, c); else if (B.isArray(c)) for (a = 0, l = c.length; a < l; a++) null == (u = c[a]) || B.isArray(u) || (h = B.measureText(t, r, o, h, u));
                    var f = o.length / 2;
                    if (f > i.length) {
                        for (s = 0; s < f; s++) delete r[o[s]];
                        o.splice(0, f)
                    }
                    return h
                }, B.measureText = function (t, e, i, n, r) {
                    var o = e[r];
                    return o || (o = e[r] = t.measureText(r).width, i.push(r)), o > n && (n = o), n
                }, B.numberOfLabelLines = function (t) {
                    var e = 1;
                    return B.each(t, (function (t) {
                        B.isArray(t) && t.length > e && (e = t.length)
                    })), e
                }, B.color = C ? function (t) {
                    return t instanceof CanvasGradient && (t = R.global.defaultColor), C(t)
                } : function (t) {
                    return console.error("Color.js not found!"), t
                }, B.getHoverColor = function (t) {
                    return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : B.color(t).saturate(.5).darken(.1).rgbString()
                }
            }(), Ke._adapters = ei, Ke.Animation = K, Ke.animationService = J, Ke.controllers = Jt, Ke.DatasetController = rt, Ke.defaults = R, Ke.Element = X, Ke.elements = kt, Ke.Interaction = se, Ke.layouts = me, Ke.platform = Ee, Ke.plugins = Pe, Ke.Scale = mi, Ke.scaleService = Ae, Ke.Ticks = ii, Ke.Tooltip = Be, Ke.helpers.each(un, (function (t, e) {
                Ke.scaleService.registerScaleType(e, t, t._defaults)
            })), An) An.hasOwnProperty(Fn) && Ke.plugins.register(An[Fn]);
            Ke.platform.initialize();
            var Ln = Ke;
            return "undefined" != typeof window && (window.Chart = Ke), Ke.Chart = Ke, Ke.Legend = An.legend._element, Ke.Title = An.title._element, Ke.pluginService = Ke.plugins, Ke.PluginBase = Ke.Element.extend({}), Ke.canvasHelpers = Ke.helpers.canvas, Ke.layoutService = Ke.layouts, Ke.LinearScaleBase = xi, Ke.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function (t) {
                Ke[t] = function (e, i) {
                    return new Ke(e, Ke.helpers.merge(i || {}, {type: t.charAt(0).toLowerCase() + t.slice(1)}))
                }
            })), Ln
        }, t.exports = i()
    }).call(this, i(3))
}, function (t, e) {
    $(document).ready((function () {
        $(document).ready((function () {
            $("#nav-icon").click((function () {
                $(this).toggleClass("open")
            }))
        })), $("li.search > a", this).on("click", (function (t) {
            t.preventDefault(), $(".top-search").slideToggle("4000"), $(this).find("i").toggleClass("fa-times")
        })), $(".select_option").niceSelect(), $(document).ready((function () {
            $('a[href^="#demo"]').on("click", (function (t) {
                t.preventDefault();
                var e = this.hash, i = $(e);
                $("html, body").animate({scrollTop: i.offset().top}, 1e3, "swing", (function () {
                    window.location.hash = e
                })), $("html, body").animte({scrollTop: $targer.offset().top}, 1e3, "swing")
            }))
        })), $(".color-plate").on("click", (function () {
            var t = $(this).attr("data-color");
            $('link[id="skin"]').attr("href", "/css/themes/" + t + ".css"), $(".btn").addClass("btn-" + t)
        })), $(".panel-option").on("click", (function () {
            $(".option-panel").toggleClass("option-panel-collased")
        })), $(window).scroll((function () {
            $(this).scrollTop() > 80 ? $(".navbar-soft").addClass("fixed-top") : $(".navbar-soft").removeClass("fixed-top")
        })),
            $(".price-range").ionRangeSlider({
            // skin: "big",
            type: "double",
            grid: false,
            min: 25000,
            max: 450000,
            from: 100000,
            to: 250000,
            postfix: " Cfa"
        }),
        $(".count").length && $(window).on("scroll.myCount", (function () {
            var t = .7 * $(window).height(), e = $(".count").offset().top - t;
            $(document).scrollTop() > e && ($(window).off("scroll.myCount"), $(".count-value").each((function () {
                $(".start-count", this).text("0");
                var t = $(this).data("count");
                $(this).prop("Counter1", 0).animate({Counter1: t}, {
                    duration: 5e3, easing: "swing", step: function (t) {
                        $(".start-count", this).text(Math.ceil(t))
                    }
                })
            })))
        })), $(".slider__property-carousel-opacity").length && $(".slider__property-carousel-opacity").owlCarousel({
            loop: !0,
            dots: !1,
            nav: !0,
            center: !0,
            rtl: !1,
            autoplayHoverPause: !1,
            autoplay: !0,
            smartSpeed: 1200,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {items: 1, center: !1},
                480: {items: 1, center: !1},
                600: {items: 1, center: !1},
                768: {items: 2},
                992: {items: 2},
                1200: {items: 2},
                1366: {items: 2},
                1400: {items: 2}
            }
        }), $(".slider__property-carousel-large").length && $(".slider__property-carousel-large").owlCarousel({
            loop: !0,
            dots: !1,
            nav: !0,
            rtl: !1,
            autoplayHoverPause: !1,
            autoplay: !0,
            singleItem: !0,
            smartSpeed: 1200,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {items: 1, center: !1},
                480: {items: 1, center: !1},
                600: {items: 1, center: !1},
                768: {items: 1},
                992: {items: 2},
                1200: {items: 1},
                1366: {items: 1},
                1400: {items: 1}
            }
        }), $(".slider__property-carousel-large").length && $(".slider__property-carousel-large").owlCarousel({
            loop: !0,
            dots: !1,
            nav: !0,
            rtl: !1,
            autoplayHoverPause: !1,
            autoplay: !0,
            singleItem: !0,
            smartSpeed: 1200,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {items: 1, center: !1},
                480: {items: 1, center: !1},
                600: {items: 1, center: !1},
                768: {items: 2},
                992: {items: 2},
                1200: {items: 1},
                1366: {items: 1},
                1400: {items: 1}
            }
        }), $(".slider__property-carousel").length && $(".slider__property-carousel").owlCarousel({
            loop: !0,
            dots: !1,
            nav: !0,
            rtl: !1,
            autoplayHoverPause: !1,
            autoplay: !0,
            singleItem: !0,
            smartSpeed: 1200,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {items: 1, center: !1},
                480: {items: 1, center: !1},
                600: {items: 1, center: !1},
                768: {items: 2},
                992: {items: 2},
                1200: {items: 2},
                1366: {items: 4},
                1400: {items: 4}
            }
        }), $(".homepage__property-carousel").length && $(".homepage__property-carousel").owlCarousel({
            loop: !0,
            dots: !1,
            nav: !0,
            rtl: !1,
            autoplayHoverPause: !1,
            autoplay: !0,
            singleItem: !0,
            smartSpeed: 1200,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {items: 1, center: !1},
                480: {items: 1, center: !1},
                600: {items: 1, center: !1},
                768: {items: 2},
                992: {items: 2},
                1200: {items: 2},
                1366: {items: 3},
                1400: {items: 3}
            }
        }), $(".product__filter").collapse(), $(".testimonial").owlCarousel({
            loop: !0,
            margin: 20,
            nav: !1,
            dots: !1,
            autoplay: !0,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            smartSpeed: 1200,
            autoHeight: !0,
            responsive: {0: {items: 1}, 480: {items: 1}, 600: {items: 2}, 1e3: {items: 2}}
        }), $(".section__testimonial-wrap").owlCarousel({
            loop: !0,
            margin: 20,
            nav: !1,
            dots: !1,
            autoplay: !0,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            smartSpeed: 1200,
            autoHeight: !0,
            responsive: {0: {items: 1}, 480: {items: 1}, 600: {items: 1}, 1e3: {items: 1}}
        }), $(".recent__property-carousel").owlCarousel({
            loop: !0,
            margin: 20,
            nav: !0,
            dots: !1,
            autoplay: 0,

            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            smartSpeed: 1200,
            autoHeight: !0,
            responsive: {
                0: {items: 1, stagePadding: 60,},
                480: {items: 1, stagePadding: 60,},
                600: {items: 2},
                768: {items: 2},
                992: {items: 3},
                1200: {items: 3},
                1366: {items: 4},
                1400: {items: 4}
            }
        }), $(".featured__property-carousel").length && $(".featured__property-carousel").owlCarousel({
            loop: !0,
            margin: 30,
            dots: !1,
            nav: 1,
            rtl: !1,
            autoplayHoverPause: !1,
            autoplay: 0,
            singleItem: !1,
            smartSpeed: 1200,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            responsive: {
                0: {items: 1, center: !1},
                480: {items: 1, center: !1},
                600: {items: 1, center: !1},
                768: {items: 2},
                992: {items: 2},
                1200: {items: 2},
                1366: {items: 4},
                1400: {items: 4}
            }
        }), $(".similiar__property-carousel").length && $(".similiar__property-carousel").owlCarousel({
            loop: !0,
            margin: 30,
            dots: !1,
            nav: !1,
            rtl: !1,
            autoplayHoverPause: !1,
            autoplay: !0,
            singleItem: !0,
            smartSpeed: 1200,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            responsive: {
                0: {items: 1, center: !1},
                480: {items: 1, center: !1},
                600: {items: 1, center: !1},
                768: {items: 2},
                992: {items: 2},
                1200: {items: 3},
                1366: {items: 3},
                1400: {items: 3}
            }
        }), $(".parallax,.bg-img").each((function () {
            $(this).attr("data-background") && $(this).css("background-image", "url(" + $(this).data("background") + ")")
        })), $(".advanced-filter").on("click", (function () {
            $(this).find(".fa").hasClass("fa-minus-circle") ? ($(this).find(".fa").removeClass("fa-minus-circle"), $(this).find(".fa").addClass("fa-plus-circle")) : ($(this).find(".fa").removeClass("fa-plus-circle"), $(this).find(".fa").addClass("fa-minus-circle"))
        })), $(document).ready((function () {
            var t = $(".slider__image__detail-large"), e = $(".slider__image__detail-thumb");
            t.owlCarousel({
                items: 1,
                slideSpeed: 2e3,
                nav: !0,
                autoplay: !1,
                dots: !1,
                loop: !0,
                responsiveRefreshRate: 200,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            }).on("changed.owl.carousel", (function (t) {
                var i = t.item.count - 1, n = Math.round(t.item.index - t.item.count / 2 - .5);
                n < 0 && (n = i);
                n > i && (n = 0);
                e.find(".owl-item").removeClass("current").eq(n).addClass("current");
                var r = e.find(".owl-item.active").length - 1, o = e.find(".owl-item.active").first().index(),
                    s = e.find(".owl-item.active").last().index();
                n > s && e.data("owl.carousel").to(n, 100, !0);
                n < o && e.data("owl.carousel").to(n - r, 100, !0)
            })), e.on("initialized.owl.carousel", (function () {
                e.find(".owl-item").eq(0).addClass("current")
            })).owlCarousel({
                items: 4,
                dots: !1,
                nav: !1,
                margin: 5,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: 4,
                responsiveRefreshRate: 100,
                responsive: {0: {items: 4}, 480: {items: 4}, 600: {items: 4}, 1e3: {items: 4}}
            }).on("changed.owl.carousel", (function (e) {
                var i = e.item.index;
                t.data("owl.carousel").to(i, 100, !0)
            })), e.on("click", ".owl-item", (function () {
                var e = $(this).index();
                t.data("owl.carousel").to(e, 300, !0)
            }))
        })), $(document).ready((function () {
            var t = $(".slider__image__detail-large-two"), e = $(".slider__image__detail-thumb-two");
            t.owlCarousel({
                items: 1,
                slideSpeed: 2e3,
                nav: !0,
                autoplay: !1,
                dots: !1,
                loop: !0,
                responsiveRefreshRate: 200,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            }).on("changed.owl.carousel", (function (t) {
                var i = t.item.count - 1, n = Math.round(t.item.index - t.item.count / 2 - .5);
                n < 0 && (n = i);
                n > i && (n = 0);
                e.find(".owl-item").removeClass("current").eq(n).addClass("current");
                var r = e.find(".owl-item.active").length - 1, o = e.find(".owl-item.active").first().index(),
                    s = e.find(".owl-item.active").last().index();
                n > s && e.data("owl.carousel").to(n, 100, !0);
                n < o && e.data("owl.carousel").to(n - r, 100, !0)
            })), e.on("initialized.owl.carousel", (function () {
                e.find(".owl-item").eq(0).addClass("current")
            })).owlCarousel({
                items: 4,
                dots: !1,
                nav: !1,
                margin: 5,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: 4,
                responsiveRefreshRate: 100,
                responsive: {0: {items: 4}, 480: {items: 4}, 600: {items: 4}, 1e3: {items: 6}}
            }).on("changed.owl.carousel", (function (e) {
                var i = e.item.index;
                t.data("owl.carousel").to(i, 100, !0)
            })), e.on("click", ".owl-item", (function () {
                var e = $(this).index();
                t.data("owl.carousel").to(e, 300, !0)
            }))
        })), $(window).scroll((function () {
            $(this).scrollTop() >= 50 ? $("#return-to-top").fadeIn(200) : $("#return-to-top").fadeOut(200)
        })), $("#return-to-top").click((function () {
            $("body,html").animate({scrollTop: 0}, 500)
        })), $(".filtr-container").length > 0 && $((function () {
            $(".filtr-container").filterizr({delay: 1})
        })), $(".filterizr-filter li").click((function () {
            $(".filterizr-filter li").removeClass("filtr-active"), $(this).addClass("filtr-active")
        })), $(".filterizr-sorting li").click((function () {
            $(".filterizr-sorting li").removeClass("filtr-active"), $(this).addClass("filtr-active")
        })), $(".show__more-button").on("click", (function () {
            $(".show__more").toggleClass("visible")
        })), $("#myTab a").on("click", (function () {
            $(this).tab("show")
        }))
    }))
}, function (t, e, i) {
}, function (t, e, i) {
    t.exports = i.p + "favicon.ico"
}, function (t, e, i) {
    t.exports = i.p + "site.webmanifest"
}, function (t, e, i) {
    t.exports = i.p + "icon.png"
}, function (t, e, i) {
    t.exports = i.p + "browserconfig.xml"
}, function (t, e, i) {
    t.exports = i.p + "tile.png"
}, function (t, e, i) {
    t.exports = i.p + "tile-wide.png"
}, function (t, e, i) {
    t.exports = i.p + "robots.txt"
}, function (t, e, i) {
    t.exports = i.p + "humans.txt"
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var n = i(0), r = i.n(n);
    window.$ = window.jQuery = r.a;
    i(1), i(7), i(8), i(9), i(10), i(11), i(12), i(13), i(14), i(15), i(4), i(16), i(17), i(18);
    var o = i(5);
    i.n(o).a.init({easing: "ease-in-out-sine", duration: 1e3});
    i(19);
    var s = i(6);
    i.n(s).a.installAsJQueryPlugin(r.a);
    i(20), i(22), i(23), i(24), i(25), i(26), i(27), i(28), i(29), i(30), i(31), i(32)
}]);
//# sourceMappingURL=index.bundle.js.map