// Artalk v2.6.2
var __defProp = Object.defineProperty
    , __defProps = Object.defineProperties
    , __getOwnPropDescs = Object.getOwnPropertyDescriptors
    , __getOwnPropSymbols = Object.getOwnPropertySymbols
    , __hasOwnProp = Object.prototype.hasOwnProperty
    , __propIsEnum = Object.prototype.propertyIsEnumerable
    , __defNormalProp = (e,t,n)=>t in e ? __defProp(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
    , __spreadValues = (e,t)=>{
    for (var n in t || (t = {}))
        __hasOwnProp.call(t, n) && __defNormalProp(e, n, t[n]);
    if (__getOwnPropSymbols)
        for (var n of __getOwnPropSymbols(t))
            __propIsEnum.call(t, n) && __defNormalProp(e, n, t[n]);
    return e
}
    , __spreadProps = (e,t)=>__defProps(e, __getOwnPropDescs(t))
    , __publicField = (e,t,n)=>(__defNormalProp(e, "symbol" != typeof t ? t + "" : t, n),
    n)
    , __accessCheck = (e,t,n)=>{
    if (!t.has(e))
        throw TypeError("Cannot " + n)
}
    , __privateAdd = (e,t,n)=>{
    if (t.has(e))
        throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n)
}
    , __privateMethod = (e,t,n)=>(__accessCheck(e, t, "access private method"),
    n)
    , __async = (e,t,n)=>new Promise(((i,s)=>{
        var r = e=>{
            try {
                o(n.next(e))
            } catch (t) {
                s(t)
            }
        }
            , a = e=>{
            try {
                o(n.throw(e))
            } catch (t) {
                s(t)
            }
        }
            , o = e=>e.done ? i(e.value) : Promise.resolve(e.value).then(r, a);
        o((n = n.apply(e, t)).next())
    }
));
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Artalk = t()
}(this, (function() {
        var e, t, n, i;
        function s(e="") {
            const t = document.createElement("div");
            return t.innerHTML = e.trim(),
            t.firstElementChild || t
        }
        function r(e) {
            return parseFloat(getComputedStyle(e, null).height.replace("px", ""))
        }
        function a(e) {
            const t = RegExp(`[?&]${e}=([^&]*)`).exec(window.location.search);
            return t && decodeURIComponent(t[1].replace(/\+/g, " "))
        }
        function o(e) {
            const t = e.getBoundingClientRect();
            return {
                top: t.top + window.scrollY,
                left: t.left + window.scrollX
            }
        }
        function l(e, t) {
            let n = e.toString();
            for (; n.length < t; )
                n = `0 ${n}`;
            return n
        }
        function c(e, t) {
            try {
                const n = e.getTime()
                    , i = (new Date).getTime() - n
                    , s = Math.floor(i / 864e5);
                if (0 === s) {
                    const e = i % 864e5
                        , n = Math.floor(e / 36e5);
                    if (0 === n) {
                        const n = e % 36e5
                            , i = Math.floor(n / 6e4);
                        if (0 === i) {
                            const e = n % 6e4
                                , i = Math.round(e / 1e3);
                            return i < 10 ? t.$t("now") : `${i} ${t.$t("seconds")}`
                        }
                        return `${i} ${t.$t("minutes")}`
                    }
                    return `${n} ${t.$t("hours")}`
                }
                return s < 0 ? t.$t("now") : s < 8 ? `${s} ${t.$t("days")}` : function(e) {
                    const t = l(e.getDate(), 2)
                        , n = l(e.getMonth() + 1, 2);
                    return `${l(e.getFullYear(), 2)}-${n}-${t}`
                }(e)
            } catch (n) {
                return console.error(n),
                    " - "
            }
        }
        function d() {
            return __async(this, null, (function*() {
                    const e = navigator.userAgent;
                    if (!navigator.userAgentData || !navigator.userAgentData.getHighEntropyValues)
                        return e;
                    const t = navigator.userAgentData;
                    let n = null;
                    try {
                        n = yield t.getHighEntropyValues(["platformVersion"])
                    } catch (s) {
                        return console.error(s),
                            e
                    }
                    const i = Number(n.platformVersion.split(".")[0]);
                    return "Windows" === t.platform && i >= 13 ? e.replace(/Windows NT 10.0/, "Windows NT 11.0") : "macOS" === t.platform && i >= 11 ? e.replace(/(Mac OS X \d+_\d+_\d+|Mac OS X)/, `Mac OS X ${n.platformVersion.replace(/\./g, "_")}`) : e
                }
            ))
        }
        function h(e) {
            let t;
            try {
                t = new URL(e)
            } catch (n) {
                return !1
            }
            return "http:" === t.protocol || "https:" === t.protocol
        }
        function u(e, t) {
            return function(e, t) {
                return `${e.replace(/\/$/, "")}/${t.replace(/^\//, "")}`
            }(e.conf.server, t)
        }
        function p(e, t) {
            const n = e=>e && "object" == typeof e;
            return n(e) && n(t) ? (Object.keys(t).forEach((i=>{
                    const s = e[i]
                        , r = t[i];
                    Array.isArray(s) && Array.isArray(r) ? e[i] = s.concat(r) : n(s) && n(r) ? e[i] = p(__spreadValues({}, s), r) : e[i] = r
                }
            )),
                e) : t
        }
        class m {
            constructor(e) {
                __publicField(this, "$el"),
                    __publicField(this, "ctx"),
                    __publicField(this, "conf"),
                    this.ctx = e,
                    this.conf = e.conf
            }
            $t(e, t={}) {
                return this.ctx.$t(e, t)
            }
        }
        function g(e, t) {
            let n = e.querySelector(":scope > .atk-loading");
            n || (n = s('<div class="atk-loading atk-fade-in" style="display: none;">\n      <div class="atk-loading-spinner">\n        <svg viewBox="25 25 50 50"><circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle></svg>\n      </div>\n    </div>'),
            (null == t ? void 0 : t.transparentBg) && (n.style.background = "transparent"),
                e.appendChild(n)),
                n.style.display = "";
            const i = n.querySelector(".atk-loading-spinner");
            i && (i.style.display = "none",
                window.setTimeout((()=>{
                        i.style.display = ""
                    }
                ), 500))
        }
        function f(e) {
            const t = e.querySelector(":scope > .atk-loading");
            t && (t.style.display = "none")
        }
        function k(e, t=!0) {
            const n = o(e).top + r(e) / 2 - document.documentElement.clientHeight / 2;
            t ? window.scroll({
                top: n > 0 ? n : 0,
                left: 0
            }) : window.scroll(0, n > 0 ? n : 0)
        }
        function y(e, t, n) {
            const i = s(`<div class="atk-notify atk-fade-in" style="background-color: ${{
                s: "#57d59f",
                e: "#ff6f6c",
                w: "#ffc721",
                i: "#2ebcfc"
            }[n]}"><span class="atk-notify-content"></span></div>`);
            i.querySelector(".atk-notify-content").innerHTML = function(e) {
                const t = document.createElement("div");
                return t.innerText = e,
                    t.innerHTML
            }(t).replace("\n", "<br/>"),
                e.appendChild(i);
            const r = ()=>{
                    i.classList.add("atk-fade-out"),
                        setTimeout((()=>{
                                i.remove()
                            }
                        ), 200)
                }
            ;
            let a;
            a = window.setTimeout((()=>{
                    r()
                }
            ), 3e3),
                i.addEventListener("click", (()=>{
                        r(),
                            window.clearTimeout(a)
                    }
                ))
        }
        function b(e, t) {
            !function(e, t, n="in") {
                e.classList.add(`atk-fade-${n}`);
                const i = ()=>{
                        e.classList.remove(`atk-fade-${n}`),
                            e.removeEventListener("animationend", i),
                        t && t()
                    }
                ;
                e.addEventListener("animationend", i)
            }(e, t, "in")
        }
        function _(e, t, n='<span class="atk-error-title">Artalk Error</span>') {
            let i = e.querySelector(".atk-error-layer");
            if (null === t)
                return void (null !== i && i.remove());
            i || (i = s(`<div class="atk-error-layer">${n}<span class="atk-error-text"></span></div>`),
                e.appendChild(i));
            const r = i.querySelector(".atk-error-text");
            r.innerHTML = "",
            null !== t && (t instanceof HTMLElement ? r.appendChild(t) : r.innerText = t)
        }
        const $ = class e extends m {
                constructor(e, t, n) {
                    super(e),
                        __publicField(this, "name"),
                        __publicField(this, "$wrap"),
                        __publicField(this, "$mask"),
                        __publicField(this, "maskClickHideEnable", !0),
                        __publicField(this, "afterHide"),
                        this.name = t;
                    const {$wrap: i, $mask: r} = v();
                    this.$wrap = i,
                        this.$mask = r,
                        this.$el = this.$wrap.querySelector(`[data-layer-name="${t}"].atk-layer-item`),
                    null === this.$el && (n ? this.$el = n : (this.$el = s(),
                        this.$el.classList.add("atk-layer-item"))),
                        this.$el.setAttribute("data-layer-name", t),
                        this.$el.style.display = "none",
                        this.$wrap.append(this.$el)
                }
                getName() {
                    return this.name
                }
                getWrapEl() {
                    return this.$wrap
                }
                getEl() {
                    return this.$el
                }
                show() {
                    this.fireAllActionTimer(),
                        this.$wrap.style.display = "block",
                        this.$mask.style.display = "block",
                        this.$mask.classList.add("atk-fade-in"),
                        this.$el.style.display = "",
                        this.$mask.onclick = ()=>{
                            this.maskClickHideEnable && this.hide()
                        }
                        ,
                        this.pageBodyScrollBarHide()
                }
                hide() {
                    this.afterHide && this.afterHide(),
                        this.$wrap.classList.add("atk-fade-out"),
                        this.$el.style.display = "none",
                        this.pageBodyScrollBarShow(),
                        this.newActionTimer((()=>{
                                this.$wrap.style.display = "none",
                                    this.checkCleanLayer()
                            }
                        ), 450),
                        this.newActionTimer((()=>{
                                this.$wrap.style.display = "none",
                                    this.$wrap.classList.remove("atk-fade-out")
                            }
                        ), 200)
                }
                setMaskClickHide(e) {
                    this.maskClickHideEnable = e
                }
                pageBodyScrollBarHide() {
                    document.body.style.overflow = "hidden";
                    const e = parseInt(window.getComputedStyle(document.body, null).getPropertyValue("padding-right"), 10);
                    document.body.style.paddingRight = `${function() {
                        const e = document.createElement("p");
                        e.style.width = "100%",
                            e.style.height = "200px";
                        const t = document.createElement("div");
                        t.style.position = "absolute",
                            t.style.top = "0px",
                            t.style.left = "0px",
                            t.style.visibility = "hidden",
                            t.style.width = "200px",
                            t.style.height = "150px",
                            t.style.overflow = "hidden",
                            t.appendChild(e),
                            document.body.appendChild(t);
                        const n = e.offsetWidth;
                        t.style.overflow = "scroll";
                        let i = e.offsetWidth;
                        return n === i && (i = t.clientWidth),
                            document.body.removeChild(t),
                        n - i
                    }() + e || 0}px`
                }
                pageBodyScrollBarShow() {
                    document.body.style.overflow = e.BodyOrgOverflow,
                        document.body.style.paddingRight = e.BodyOrgPaddingRight
                }
                newActionTimer(t, n) {
                    const i = ()=>{
                        t(),
                            e.actionTimers = e.actionTimers.filter((e=>e.act !== i))
                    }
                        , s = window.setTimeout((()=>i()), n);
                    e.actionTimers.push({
                        act: i,
                        tid: s
                    })
                }
                fireAllActionTimer() {
                    e.actionTimers.forEach((e=>{
                            clearTimeout(e.tid),
                                e.act()
                        }
                    ))
                }
                disposeNow() {
                    this.$el.remove(),
                        this.pageBodyScrollBarShow(),
                        this.checkCleanLayer()
                }
                dispose() {
                    this.hide(),
                        this.$el.remove(),
                        this.checkCleanLayer()
                }
                checkCleanLayer() {
                    0 === this.getWrapEl().querySelectorAll(".atk-layer-item").length && (this.$wrap.style.display = "none")
                }
            }
        ;
        __publicField($, "BodyOrgOverflow"),
            __publicField($, "BodyOrgPaddingRight"),
            __publicField($, "actionTimers", []);
        let x = $;
        function v() {
            let e = document.querySelector(".atk-layer-wrap");
            e || (e = s('<div class="atk-layer-wrap" style="display: none;"><div class="atk-layer-mask"></div></div>'),
                document.body.appendChild(e));
            const t = e.querySelector(".atk-layer-mask");
            return {
                $wrap: e,
                $mask: t
            }
        }
        const w = window.matchMedia("(prefers-color-scheme: dark)");
        let C;
        function S(e) {
            T(e, e.conf.darkMode, !1)
        }
        function T(e, t, n=!0) {
            const i = t=>{
                    !function(e, t) {
                        t ? e.$root.classList.add(E) : e.$root.classList.remove(E);
                        const {$wrap: n} = v();
                        n && (t ? n.classList.add(E) : n.classList.remove(E))
                    }(e, t),
                    n && function(e, t) {
                        e.conf.darkMode = t
                    }(e, t)
                }
            ;
            "auto" === t ? (C || (C = e=>i(e.matches),
                w.addEventListener("change", C)),
                i(w.matches)) : (C && w.removeEventListener("change", C),
                i(t))
        }
        const E = "atk-dark-mode"
        function L() {
            return {
                async: !1,
                baseUrl: null,
                breaks: !1,
                extensions: null,
                gfm: !0,
                headerIds: !1,
                headerPrefix: "",
                highlight: null,
                hooks: null,
                langPrefix: "language-",
                mangle: !1,
                pedantic: !1,
                renderer: null,
                sanitize: !1,
                sanitizer: null,
                silent: !1,
                smartypants: !1,
                tokenizer: null,
                walkTokens: null,
                xhtml: !1
            }
        }
        let A = {
            async: !1,
            baseUrl: null,
            breaks: !1,
            extensions: null,
            gfm: !0,
            headerIds: !1,
            headerPrefix: "",
            highlight: null,
            hooks: null,
            langPrefix: "language-",
            mangle: !1,
            pedantic: !1,
            renderer: null,
            sanitize: !1,
            sanitizer: null,
            silent: !1,
            smartypants: !1,
            tokenizer: null,
            walkTokens: null,
            xhtml: !1
        };
        function F(e) {
            A = e
        }
        const O = /[&<>"']/
            , M = new RegExp(O.source,"g")
            , R = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/
            , P = new RegExp(R.source,"g")
            , B = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }
            , I = e=>B[e];
        function U(e, t) {
            if (t) {
                if (O.test(e))
                    return e.replace(M, I)
            } else if (R.test(e))
                return e.replace(P, I);
            return e
        }
        const D = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
        function q(e) {
            return e.replace(D, ((e,t)=>"colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""))
        }
        const z = /(^|[^\[])\^/g;
        function j(e, t) {
            e = "string" == typeof e ? e : e.source,
                t = t || "";
            const n = {
                replace: (t,i)=>(i = (i = "object" == typeof i && "source"in i ? i.source : i).replace(z, "$1"),
                    e = e.replace(t, i),
                    n),
                getRegex: ()=>new RegExp(e,t)
            };
            return n
        }
        const W = /[^\w:]/g
            , N = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
        function H(e, t, n) {
            if (e) {
                let e;
                try {
                    e = decodeURIComponent(q(n)).replace(W, "").toLowerCase()
                } catch (i) {
                    return null
                }
                if (0 === e.indexOf("javascript:") || 0 === e.indexOf("vbscript:") || 0 === e.indexOf("data:"))
                    return null
            }
            t && !N.test(n) && (n = function(e, t) {
                V[" " + e] || (Q.test(e) ? V[" " + e] = e + "/" : V[" " + e] = X(e, "/", !0));
                e = V[" " + e];
                const n = -1 === e.indexOf(":");
                return "//" === t.substring(0, 2) ? n ? t : e.replace(Z, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace(G, "$1") + t : e + t
            }(t, n));
            try {
                n = encodeURI(n).replace(/%25/g, "%")
            } catch (i) {
                return null
            }
            return n
        }
        const V = {}
            , Q = /^[^:]+:\/*[^/]*$/
            , Z = /^([^:]+:)[\s\S]*$/
            , G = /^([^:]+:\/*[^/]*)[\s\S]*$/;
        const K = {
            exec: ()=>null
        };
        function Y(e, t) {
            const n = e.replace(/\|/g, ((e,t,n)=>{
                    let i = !1
                        , s = t;
                    for (; --s >= 0 && "\\" === n[s]; )
                        i = !i;
                    return i ? "|" : " |"
                }
            )).split(/ \|/);
            let i = 0;
            if (n[0].trim() || n.shift(),
            n.length > 0 && !n[n.length - 1].trim() && n.pop(),
                t)
                if (n.length > t)
                    n.splice(t);
                else
                    for (; n.length < t; )
                        n.push("");
            for (; i < n.length; i++)
                n[i] = n[i].trim().replace(/\\\|/g, "|");
            return n
        }
        function X(e, t, n) {
            const i = e.length;
            if (0 === i)
                return "";
            let s = 0;
            for (; s < i; ) {
                const r = e.charAt(i - s - 1);
                if (r !== t || n) {
                    if (r === t || !n)
                        break;
                    s++
                } else
                    s++
            }
            return e.slice(0, i - s)
        }
        function J(e, t, n, i) {
            const s = t.href
                , r = t.title ? U(t.title) : null
                , a = e[1].replace(/\\([\[\]])/g, "$1");
            if ("!" !== e[0].charAt(0)) {
                i.state.inLink = !0;
                const e = {
                    type: "link",
                    raw: n,
                    href: s,
                    title: r,
                    text: a,
                    tokens: i.inlineTokens(a)
                };
                return i.state.inLink = !1,
                    e
            }
            return {
                type: "image",
                raw: n,
                href: s,
                title: r,
                text: U(a)
            }
        }
        class ee {
            constructor(e) {
                __publicField(this, "options"),
                    __publicField(this, "rules"),
                    __publicField(this, "lexer"),
                    this.options = e || A
            }
            space(e) {
                const t = this.rules.block.newline.exec(e);
                if (t && t[0].length > 0)
                    return {
                        type: "space",
                        raw: t[0]
                    }
            }
            code(e) {
                const t = this.rules.block.code.exec(e);
                if (t) {
                    const e = t[0].replace(/^ {1,4}/gm, "");
                    return {
                        type: "code",
                        raw: t[0],
                        codeBlockStyle: "indented",
                        text: this.options.pedantic ? e : X(e, "\n")
                    }
                }
            }
            fences(e) {
                const t = this.rules.block.fences.exec(e);
                if (t) {
                    const e = t[0]
                        , n = function(e, t) {
                        const n = e.match(/^(\s+)(?:```)/);
                        if (null === n)
                            return t;
                        const i = n[1];
                        return t.split("\n").map((e=>{
                                const t = e.match(/^\s+/);
                                if (null === t)
                                    return e;
                                const [n] = t;
                                return n.length >= i.length ? e.slice(i.length) : e
                            }
                        )).join("\n")
                    }(e, t[3] || "");
                    return {
                        type: "code",
                        raw: e,
                        lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2],
                        text: n
                    }
                }
            }
            heading(e) {
                const t = this.rules.block.heading.exec(e);
                if (t) {
                    let e = t[2].trim();
                    if (/#$/.test(e)) {
                        const t = X(e, "#");
                        this.options.pedantic ? e = t.trim() : t && !/ $/.test(t) || (e = t.trim())
                    }
                    return {
                        type: "heading",
                        raw: t[0],
                        depth: t[1].length,
                        text: e,
                        tokens: this.lexer.inline(e)
                    }
                }
            }
            hr(e) {
                const t = this.rules.block.hr.exec(e);
                if (t)
                    return {
                        type: "hr",
                        raw: t[0]
                    }
            }
            blockquote(e) {
                const t = this.rules.block.blockquote.exec(e);
                if (t) {
                    const e = t[0].replace(/^ *>[ \t]?/gm, "")
                        , n = this.lexer.state.top;
                    this.lexer.state.top = !0;
                    const i = this.lexer.blockTokens(e);
                    return this.lexer.state.top = n,
                        {
                            type: "blockquote",
                            raw: t[0],
                            tokens: i,
                            text: e
                        }
                }
            }
            list(e) {
                let t = this.rules.block.list.exec(e);
                if (t) {
                    let n = t[1].trim();
                    const i = n.length > 1
                        , s = {
                        type: "list",
                        raw: "",
                        ordered: i,
                        start: i ? +n.slice(0, -1) : "",
                        loose: !1,
                        items: []
                    };
                    n = i ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`,
                    this.options.pedantic && (n = i ? n : "[*+-]");
                    const r = new RegExp(`^( {0,3}${n})((?:[\t ][^\\n]*)?(?:\\n|$))`);
                    let a = ""
                        , o = ""
                        , l = !1;
                    for (; e; ) {
                        let n = !1;
                        if (!(t = r.exec(e)))
                            break;
                        if (this.rules.block.hr.test(e))
                            break;
                        a = t[0],
                            e = e.substring(a.length);
                        let i = t[2].split("\n", 1)[0].replace(/^\t+/, (e=>" ".repeat(3 * e.length)))
                            , c = e.split("\n", 1)[0]
                            , d = 0;
                        this.options.pedantic ? (d = 2,
                            o = i.trimLeft()) : (d = t[2].search(/[^ ]/),
                            d = d > 4 ? 1 : d,
                            o = i.slice(d),
                            d += t[1].length);
                        let h = !1;
                        if (!i && /^ *$/.test(c) && (a += c + "\n",
                            e = e.substring(c.length + 1),
                            n = !0),
                            !n) {
                            const t = new RegExp(`^ {0,${Math.min(3, d - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`)
                                , n = new RegExp(`^ {0,${Math.min(3, d - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)
                                , s = new RegExp(`^ {0,${Math.min(3, d - 1)}}(?:\`\`\`|~~~)`)
                                , r = new RegExp(`^ {0,${Math.min(3, d - 1)}}#`);
                            for (; e; ) {
                                const l = e.split("\n", 1)[0];
                                if (c = l,
                                this.options.pedantic && (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                                    s.test(c))
                                    break;
                                if (r.test(c))
                                    break;
                                if (t.test(c))
                                    break;
                                if (n.test(e))
                                    break;
                                if (c.search(/[^ ]/) >= d || !c.trim())
                                    o += "\n" + c.slice(d);
                                else {
                                    if (h)
                                        break;
                                    if (i.search(/[^ ]/) >= 4)
                                        break;
                                    if (s.test(i))
                                        break;
                                    if (r.test(i))
                                        break;
                                    if (n.test(i))
                                        break;
                                    o += "\n" + c
                                }
                                h || c.trim() || (h = !0),
                                    a += l + "\n",
                                    e = e.substring(l.length + 1),
                                    i = c.slice(d)
                            }
                        }
                        s.loose || (l ? s.loose = !0 : /\n *\n *$/.test(a) && (l = !0));
                        let u, p = null;
                        this.options.gfm && (p = /^\[[ xX]\] /.exec(o),
                        p && (u = "[ ] " !== p[0],
                            o = o.replace(/^\[[ xX]\] +/, ""))),
                            s.items.push({
                                type: "list_item",
                                raw: a,
                                task: !!p,
                                checked: u,
                                loose: !1,
                                text: o,
                                tokens: []
                            }),
                            s.raw += a
                    }
                    s.items[s.items.length - 1].raw = a.trimRight(),
                        s.items[s.items.length - 1].text = o.trimRight(),
                        s.raw = s.raw.trimRight();
                    for (let e = 0; e < s.items.length; e++)
                        if (this.lexer.state.top = !1,
                            s.items[e].tokens = this.lexer.blockTokens(s.items[e].text, []),
                            !s.loose) {
                            const t = s.items[e].tokens.filter((e=>"space" === e.type))
                                , n = t.length > 0 && t.some((e=>/\n.*\n/.test(e.raw)));
                            s.loose = n
                        }
                    if (s.loose)
                        for (let e = 0; e < s.items.length; e++)
                            s.items[e].loose = !0;
                    return s
                }
            }
            html(e) {
                const t = this.rules.block.html.exec(e);
                if (t) {
                    const e = {
                        type: "html",
                        block: !0,
                        raw: t[0],
                        pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
                        text: t[0]
                    };
                    if (this.options.sanitize) {
                        const n = this.options.sanitizer ? this.options.sanitizer(t[0]) : U(t[0])
                            , i = e;
                        i.type = "paragraph",
                            i.text = n,
                            i.tokens = this.lexer.inline(n)
                    }
                    return e
                }
            }
            def(e) {
                const t = this.rules.block.def.exec(e);
                if (t) {
                    const e = t[1].toLowerCase().replace(/\s+/g, " ")
                        , n = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : ""
                        , i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
                    return {
                        type: "def",
                        tag: e,
                        raw: t[0],
                        href: n,
                        title: i
                    }
                }
            }
            table(e) {
                const t = this.rules.block.table.exec(e);
                if (t) {
                    const e = {
                        type: "table",
                        raw: t[0],
                        header: Y(t[1]).map((e=>({
                            text: e,
                            tokens: []
                        }))),
                        align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : []
                    };
                    if (e.header.length === e.align.length) {
                        let t, n, i, s, r = e.align.length;
                        for (t = 0; t < r; t++) {
                            const n = e.align[t];
                            n && (/^ *-+: *$/.test(n) ? e.align[t] = "right" : /^ *:-+: *$/.test(n) ? e.align[t] = "center" : /^ *:-+ *$/.test(n) ? e.align[t] = "left" : e.align[t] = null)
                        }
                        for (r = e.rows.length,
                                 t = 0; t < r; t++)
                            e.rows[t] = Y(e.rows[t], e.header.length).map((e=>({
                                text: e,
                                tokens: []
                            })));
                        for (r = e.header.length,
                                 n = 0; n < r; n++)
                            e.header[n].tokens = this.lexer.inline(e.header[n].text);
                        for (r = e.rows.length,
                                 n = 0; n < r; n++)
                            for (s = e.rows[n],
                                     i = 0; i < s.length; i++)
                                s[i].tokens = this.lexer.inline(s[i].text);
                        return e
                    }
                }
            }
            lheading(e) {
                const t = this.rules.block.lheading.exec(e);
                if (t)
                    return {
                        type: "heading",
                        raw: t[0],
                        depth: "=" === t[2].charAt(0) ? 1 : 2,
                        text: t[1],
                        tokens: this.lexer.inline(t[1])
                    }
            }
            paragraph(e) {
                const t = this.rules.block.paragraph.exec(e);
                if (t) {
                    const e = "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
                    return {
                        type: "paragraph",
                        raw: t[0],
                        text: e,
                        tokens: this.lexer.inline(e)
                    }
                }
            }
            text(e) {
                const t = this.rules.block.text.exec(e);
                if (t)
                    return {
                        type: "text",
                        raw: t[0],
                        text: t[0],
                        tokens: this.lexer.inline(t[0])
                    }
            }
            escape(e) {
                const t = this.rules.inline.escape.exec(e);
                if (t)
                    return {
                        type: "escape",
                        raw: t[0],
                        text: U(t[1])
                    }
            }
            tag(e) {
                const t = this.rules.inline.tag.exec(e);
                if (t)
                    return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1),
                        !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1),
                        {
                            type: this.options.sanitize ? "text" : "html",
                            raw: t[0],
                            inLink: this.lexer.state.inLink,
                            inRawBlock: this.lexer.state.inRawBlock,
                            block: !1,
                            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : U(t[0]) : t[0]
                        }
            }
            link(e) {
                const t = this.rules.inline.link.exec(e);
                if (t) {
                    const e = t[2].trim();
                    if (!this.options.pedantic && /^</.test(e)) {
                        if (!/>$/.test(e))
                            return;
                        const t = X(e.slice(0, -1), "\\");
                        if ((e.length - t.length) % 2 == 0)
                            return
                    } else {
                        const e = function(e, t) {
                            if (-1 === e.indexOf(t[1]))
                                return -1;
                            let n = 0;
                            for (let i = 0; i < e.length; i++)
                                if ("\\" === e[i])
                                    i++;
                                else if (e[i] === t[0])
                                    n++;
                                else if (e[i] === t[1] && (n--,
                                n < 0))
                                    return i;
                            return -1
                        }(t[2], "()");
                        if (e > -1) {
                            const n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
                            t[2] = t[2].substring(0, e),
                                t[0] = t[0].substring(0, n).trim(),
                                t[3] = ""
                        }
                    }
                    let n = t[2]
                        , i = "";
                    if (this.options.pedantic) {
                        const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
                        e && (n = e[1],
                            i = e[3])
                    } else
                        i = t[3] ? t[3].slice(1, -1) : "";
                    return n = n.trim(),
                    /^</.test(n) && (n = this.options.pedantic && !/>$/.test(e) ? n.slice(1) : n.slice(1, -1)),
                        J(t, {
                            href: n ? n.replace(this.rules.inline._escapes, "$1") : n,
                            title: i ? i.replace(this.rules.inline._escapes, "$1") : i
                        }, t[0], this.lexer)
                }
            }
            reflink(e, t) {
                let n;
                if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                    let e = (n[2] || n[1]).replace(/\s+/g, " ");
                    if (e = t[e.toLowerCase()],
                        !e) {
                        const e = n[0].charAt(0);
                        return {
                            type: "text",
                            raw: e,
                            text: e
                        }
                    }
                    return J(n, e, n[0], this.lexer)
                }
            }
            emStrong(e, t, n="") {
                let i = this.rules.inline.emStrong.lDelim.exec(e);
                if (!i)
                    return;
                if (i[3] && n.match(/[\p{L}\p{N}]/u))
                    return;
                if (!(i[1] || i[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
                    const n = [...i[0]].length - 1;
                    let s, r, a = n, o = 0;
                    const l = "*" === i[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                    for (l.lastIndex = 0,
                             t = t.slice(-1 * e.length + n); null != (i = l.exec(t)); ) {
                        if (s = i[1] || i[2] || i[3] || i[4] || i[5] || i[6],
                            !s)
                            continue;
                        if (r = [...s].length,
                        i[3] || i[4]) {
                            a += r;
                            continue
                        }
                        if ((i[5] || i[6]) && n % 3 && !((n + r) % 3)) {
                            o += r;
                            continue
                        }
                        if (a -= r,
                        a > 0)
                            continue;
                        r = Math.min(r, r + a + o);
                        const t = [...e].slice(0, n + i.index + r + 1).join("");
                        if (Math.min(n, r) % 2) {
                            const e = t.slice(1, -1);
                            return {
                                type: "em",
                                raw: t,
                                text: e,
                                tokens: this.lexer.inlineTokens(e)
                            }
                        }
                        const l = t.slice(2, -2);
                        return {
                            type: "strong",
                            raw: t,
                            text: l,
                            tokens: this.lexer.inlineTokens(l)
                        }
                    }
                }
            }
            codespan(e) {
                const t = this.rules.inline.code.exec(e);
                if (t) {
                    let e = t[2].replace(/\n/g, " ");
                    const n = /[^ ]/.test(e)
                        , i = /^ /.test(e) && / $/.test(e);
                    return n && i && (e = e.substring(1, e.length - 1)),
                        e = U(e, !0),
                        {
                            type: "codespan",
                            raw: t[0],
                            text: e
                        }
                }
            }
            br(e) {
                const t = this.rules.inline.br.exec(e);
                if (t)
                    return {
                        type: "br",
                        raw: t[0]
                    }
            }
            del(e) {
                const t = this.rules.inline.del.exec(e);
                if (t)
                    return {
                        type: "del",
                        raw: t[0],
                        text: t[2],
                        tokens: this.lexer.inlineTokens(t[2])
                    }
            }
            autolink(e, t) {
                const n = this.rules.inline.autolink.exec(e);
                if (n) {
                    let e, i;
                    return "@" === n[2] ? (e = U(this.options.mangle ? t(n[1]) : n[1]),
                        i = "mailto:" + e) : (e = U(n[1]),
                        i = e),
                        {
                            type: "link",
                            raw: n[0],
                            text: e,
                            href: i,
                            tokens: [{
                                type: "text",
                                raw: e,
                                text: e
                            }]
                        }
                }
            }
            url(e, t) {
                let n;
                if (n = this.rules.inline.url.exec(e)) {
                    let e, i;
                    if ("@" === n[2])
                        e = U(this.options.mangle ? t(n[0]) : n[0]),
                            i = "mailto:" + e;
                    else {
                        let t;
                        do {
                            t = n[0],
                                n[0] = this.rules.inline._backpedal.exec(n[0])[0]
                        } while (t !== n[0]);
                        e = U(n[0]),
                            i = "www." === n[1] ? "http://" + n[0] : n[0]
                    }
                    return {
                        type: "link",
                        raw: n[0],
                        text: e,
                        href: i,
                        tokens: [{
                            type: "text",
                            raw: e,
                            text: e
                        }]
                    }
                }
            }
            inlineText(e, t) {
                const n = this.rules.inline.text.exec(e);
                if (n) {
                    let e;
                    return e = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n[0]) : U(n[0]) : n[0] : U(this.options.smartypants ? t(n[0]) : n[0]),
                        {
                            type: "text",
                            raw: n[0],
                            text: e
                        }
                }
            }
        }
        const te = {
            newline: /^(?: *(?:\n|$))+/,
            code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
            fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
            hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
            heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
            html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
            def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
            table: K,
            lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
            _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
            text: /^[^\n]+/,
            _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
            _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
        };
        te.def = j(te.def).replace("label", te._label).replace("title", te._title).getRegex(),
            te.bullet = /(?:[*+-]|\d{1,9}[.)])/,
            te.listItemStart = j(/^( *)(bull) */).replace("bull", te.bullet).getRegex(),
            te.list = j(te.list).replace(/bull/g, te.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + te.def.source + ")").getRegex(),
            te._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
            te._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/,
            te.html = j(te.html, "i").replace("comment", te._comment).replace("tag", te._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
            te.lheading = j(te.lheading).replace(/bull/g, te.bullet).getRegex(),
            te.paragraph = j(te._paragraph).replace("hr", te.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", te._tag).getRegex(),
            te.blockquote = j(te.blockquote).replace("paragraph", te.paragraph).getRegex(),
            te.normal = __spreadValues({}, te),
            te.gfm = __spreadProps(__spreadValues({}, te.normal), {
                table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
            }),
            te.gfm.table = j(te.gfm.table).replace("hr", te.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", te._tag).getRegex(),
            te.gfm.paragraph = j(te._paragraph).replace("hr", te.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", te.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", te._tag).getRegex(),
            te.pedantic = __spreadProps(__spreadValues({}, te.normal), {
                html: j("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", te._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                heading: /^(#{1,6})(.*)(?:\n+|$)/,
                fences: K,
                lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
                paragraph: j(te.normal._paragraph).replace("hr", te.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", te.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
            });
        const ne = {
            escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
            autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
            url: K,
            tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
            link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
            reflink: /^!?\[(label)\]\[(ref)\]/,
            nolink: /^!?\[(ref)\](?:\[\])?/,
            reflinkSearch: "reflink|nolink(?!\\()",
            emStrong: {
                lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
                rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
                rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/
            },
            code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
            br: /^( {2,}|\\)\n(?!\s*$)/,
            del: K,
            text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
            punctuation: /^((?![*_])[\spunctuation])/
        };
        function ie(e) {
            return e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…")
        }
        function se(e) {
            let t = "";
            for (let n = 0; n < e.length; n++) {
                t += "&#" + (Math.random() > .5 ? "x" + e.charCodeAt(n).toString(16) : e.charCodeAt(n).toString()) + ";"
            }
            return t
        }
        ne._punctuation = "\\p{P}$+<=>`^|~",
            ne.punctuation = j(ne.punctuation, "u").replace(/punctuation/g, ne._punctuation).getRegex(),
            ne.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
            ne.anyPunctuation = /\\[punct]/g,
            ne._escapes = /\\([punct])/g,
            ne._comment = j(te._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(),
            ne.emStrong.lDelim = j(ne.emStrong.lDelim, "u").replace(/punct/g, ne._punctuation).getRegex(),
            ne.emStrong.rDelimAst = j(ne.emStrong.rDelimAst, "gu").replace(/punct/g, ne._punctuation).getRegex(),
            ne.emStrong.rDelimUnd = j(ne.emStrong.rDelimUnd, "gu").replace(/punct/g, ne._punctuation).getRegex(),
            ne.anyPunctuation = j(ne.anyPunctuation, "gu").replace(/punct/g, ne._punctuation).getRegex(),
            ne._escapes = j(ne._escapes, "gu").replace(/punct/g, ne._punctuation).getRegex(),
            ne._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,
            ne._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
            ne.autolink = j(ne.autolink).replace("scheme", ne._scheme).replace("email", ne._email).getRegex(),
            ne._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
            ne.tag = j(ne.tag).replace("comment", ne._comment).replace("attribute", ne._attribute).getRegex(),
            ne._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
            ne._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,
            ne._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
            ne.link = j(ne.link).replace("label", ne._label).replace("href", ne._href).replace("title", ne._title).getRegex(),
            ne.reflink = j(ne.reflink).replace("label", ne._label).replace("ref", te._label).getRegex(),
            ne.nolink = j(ne.nolink).replace("ref", te._label).getRegex(),
            ne.reflinkSearch = j(ne.reflinkSearch, "g").replace("reflink", ne.reflink).replace("nolink", ne.nolink).getRegex(),
            ne.normal = __spreadValues({}, ne),
            ne.pedantic = __spreadProps(__spreadValues({}, ne.normal), {
                strong: {
                    start: /^__|\*\*/,
                    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    endAst: /\*\*(?!\*)/g,
                    endUnd: /__(?!_)/g
                },
                em: {
                    start: /^_|\*/,
                    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
                    endAst: /\*(?!\*)/g,
                    endUnd: /_(?!_)/g
                },
                link: j(/^!?\[(label)\]\((.*?)\)/).replace("label", ne._label).getRegex(),
                reflink: j(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ne._label).getRegex()
            }),
            ne.gfm = __spreadProps(__spreadValues({}, ne.normal), {
                escape: j(ne.escape).replace("])", "~|])").getRegex(),
                _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
                del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
                text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
            }),
            ne.gfm.url = j(ne.gfm.url, "i").replace("email", ne.gfm._extended_email).getRegex(),
            ne.breaks = __spreadProps(__spreadValues({}, ne.gfm), {
                br: j(ne.br).replace("{2,}", "*").getRegex(),
                text: j(ne.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
            });
        class re {
            constructor(e) {
                __publicField(this, "tokens"),
                    __publicField(this, "options"),
                    __publicField(this, "state"),
                    __publicField(this, "tokenizer"),
                    __publicField(this, "inlineQueue"),
                    this.tokens = [],
                    this.tokens.links = Object.create(null),
                    this.options = e || A,
                    this.options.tokenizer = this.options.tokenizer || new ee,
                    this.tokenizer = this.options.tokenizer,
                    this.tokenizer.options = this.options,
                    this.tokenizer.lexer = this,
                    this.inlineQueue = [],
                    this.state = {
                        inLink: !1,
                        inRawBlock: !1,
                        top: !0
                    };
                const t = {
                    block: te.normal,
                    inline: ne.normal
                };
                this.options.pedantic ? (t.block = te.pedantic,
                    t.inline = ne.pedantic) : this.options.gfm && (t.block = te.gfm,
                    this.options.breaks ? t.inline = ne.breaks : t.inline = ne.gfm),
                    this.tokenizer.rules = t
            }
            static get rules() {
                return {
                    block: te,
                    inline: ne
                }
            }
            static lex(e, t) {
                return new re(t).lex(e)
            }
            static lexInline(e, t) {
                return new re(t).inlineTokens(e)
            }
            lex(e) {
                let t;
                for (e = e.replace(/\r\n|\r/g, "\n"),
                         this.blockTokens(e, this.tokens); t = this.inlineQueue.shift(); )
                    this.inlineTokens(t.src, t.tokens);
                return this.tokens
            }
            blockTokens(e, t=[]) {
                let n, i, s, r;
                for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, ((e,t,n)=>t + "    ".repeat(n.length))); e; )
                    if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((i=>!!(n = i.call({
                        lexer: this
                    }, e, t)) && (e = e.substring(n.raw.length),
                        t.push(n),
                        !0)))))
                        if (n = this.tokenizer.space(e))
                            e = e.substring(n.raw.length),
                                1 === n.raw.length && t.length > 0 ? t[t.length - 1].raw += "\n" : t.push(n);
                        else if (n = this.tokenizer.code(e))
                            e = e.substring(n.raw.length),
                                i = t[t.length - 1],
                                !i || "paragraph" !== i.type && "text" !== i.type ? t.push(n) : (i.raw += "\n" + n.raw,
                                    i.text += "\n" + n.text,
                                    this.inlineQueue[this.inlineQueue.length - 1].src = i.text);
                        else if (n = this.tokenizer.fences(e))
                            e = e.substring(n.raw.length),
                                t.push(n);
                        else if (n = this.tokenizer.heading(e))
                            e = e.substring(n.raw.length),
                                t.push(n);
                        else if (n = this.tokenizer.hr(e))
                            e = e.substring(n.raw.length),
                                t.push(n);
                        else if (n = this.tokenizer.blockquote(e))
                            e = e.substring(n.raw.length),
                                t.push(n);
                        else if (n = this.tokenizer.list(e))
                            e = e.substring(n.raw.length),
                                t.push(n);
                        else if (n = this.tokenizer.html(e))
                            e = e.substring(n.raw.length),
                                t.push(n);
                        else if (n = this.tokenizer.def(e))
                            e = e.substring(n.raw.length),
                                i = t[t.length - 1],
                                !i || "paragraph" !== i.type && "text" !== i.type ? this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
                                    href: n.href,
                                    title: n.title
                                }) : (i.raw += "\n" + n.raw,
                                    i.text += "\n" + n.raw,
                                    this.inlineQueue[this.inlineQueue.length - 1].src = i.text);
                        else if (n = this.tokenizer.table(e))
                            e = e.substring(n.raw.length),
                                t.push(n);
                        else if (n = this.tokenizer.lheading(e))
                            e = e.substring(n.raw.length),
                                t.push(n);
                        else {
                            if (s = e,
                            this.options.extensions && this.options.extensions.startBlock) {
                                let t = 1 / 0;
                                const n = e.slice(1);
                                let i;
                                this.options.extensions.startBlock.forEach((e=>{
                                        i = e.call({
                                            lexer: this
                                        }, n),
                                        "number" == typeof i && i >= 0 && (t = Math.min(t, i))
                                    }
                                )),
                                t < 1 / 0 && t >= 0 && (s = e.substring(0, t + 1))
                            }
                            if (this.state.top && (n = this.tokenizer.paragraph(s)))
                                i = t[t.length - 1],
                                    r && "paragraph" === i.type ? (i.raw += "\n" + n.raw,
                                        i.text += "\n" + n.text,
                                        this.inlineQueue.pop(),
                                        this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(n),
                                    r = s.length !== e.length,
                                    e = e.substring(n.raw.length);
                            else if (n = this.tokenizer.text(e))
                                e = e.substring(n.raw.length),
                                    i = t[t.length - 1],
                                    i && "text" === i.type ? (i.raw += "\n" + n.raw,
                                        i.text += "\n" + n.text,
                                        this.inlineQueue.pop(),
                                        this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(n);
                            else if (e) {
                                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                                if (this.options.silent) {
                                    console.error(t);
                                    break
                                }
                                throw new Error(t)
                            }
                        }
                return this.state.top = !0,
                    t
            }
            inline(e, t=[]) {
                return this.inlineQueue.push({
                    src: e,
                    tokens: t
                }),
                    t
            }
            inlineTokens(e, t=[]) {
                let n, i, s, r, a, o, l = e;
                if (this.tokens.links) {
                    const e = Object.keys(this.tokens.links);
                    if (e.length > 0)
                        for (; null != (r = this.tokenizer.rules.inline.reflinkSearch.exec(l)); )
                            e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                }
                for (; null != (r = this.tokenizer.rules.inline.blockSkip.exec(l)); )
                    l = l.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                for (; null != (r = this.tokenizer.rules.inline.anyPunctuation.exec(l)); )
                    l = l.slice(0, r.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
                for (; e; )
                    if (a || (o = ""),
                        a = !1,
                        !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((i=>!!(n = i.call({
                            lexer: this
                        }, e, t)) && (e = e.substring(n.raw.length),
                            t.push(n),
                            !0)))))
                        if (n = this.tokenizer.escape(e))
                            e = e.substring(n.raw.length),
                                t.push(n);
                        else if (n = this.tokenizer.tag(e))
                            e = e.substring(n.raw.length),
                                i = t[t.length - 1],
                                i && "text" === n.type && "text" === i.type ? (i.raw += n.raw,
                                    i.text += n.text) : t.push(n);
                        else if (n = this.tokenizer.link(e))
                            e = e.substring(n.raw.length),
                                t.push(n);
                        else if (n = this.tokenizer.reflink(e, this.tokens.links))
                            e = e.substring(n.raw.length),
                                i = t[t.length - 1],
                                i && "text" === n.type && "text" === i.type ? (i.raw += n.raw,
                                    i.text += n.text) : t.push(n);
                        else if (n = this.tokenizer.emStrong(e, l, o))
                            e = e.substring(n.raw.length),
                                t.push(n);
                        else if (n = this.tokenizer.codespan(e))
                            e = e.substring(n.raw.length),
                                t.push(n);
                        else if (n = this.tokenizer.br(e))
                            e = e.substring(n.raw.length),
                                t.push(n);
                        else if (n = this.tokenizer.del(e))
                            e = e.substring(n.raw.length),
                                t.push(n);
                        else if (n = this.tokenizer.autolink(e, se))
                            e = e.substring(n.raw.length),
                                t.push(n);
                        else if (this.state.inLink || !(n = this.tokenizer.url(e, se))) {
                            if (s = e,
                            this.options.extensions && this.options.extensions.startInline) {
                                let t = 1 / 0;
                                const n = e.slice(1);
                                let i;
                                this.options.extensions.startInline.forEach((e=>{
                                        i = e.call({
                                            lexer: this
                                        }, n),
                                        "number" == typeof i && i >= 0 && (t = Math.min(t, i))
                                    }
                                )),
                                t < 1 / 0 && t >= 0 && (s = e.substring(0, t + 1))
                            }
                            if (n = this.tokenizer.inlineText(s, ie))
                                e = e.substring(n.raw.length),
                                "_" !== n.raw.slice(-1) && (o = n.raw.slice(-1)),
                                    a = !0,
                                    i = t[t.length - 1],
                                    i && "text" === i.type ? (i.raw += n.raw,
                                        i.text += n.text) : t.push(n);
                            else if (e) {
                                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                                if (this.options.silent) {
                                    console.error(t);
                                    break
                                }
                                throw new Error(t)
                            }
                        } else
                            e = e.substring(n.raw.length),
                                t.push(n);
                return t
            }
        }
        class ae {
            constructor(e) {
                __publicField(this, "options"),
                    this.options = e || A
            }
            code(e, t, n) {
                var i;
                const s = null == (i = (t || "").match(/^\S*/)) ? void 0 : i[0];
                if (this.options.highlight) {
                    const t = this.options.highlight(e, s);
                    null != t && t !== e && (n = !0,
                        e = t)
                }
                return e = e.replace(/\n$/, "") + "\n",
                    s ? '<pre><code class="' + this.options.langPrefix + U(s) + '">' + (n ? e : U(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : U(e, !0)) + "</code></pre>\n"
            }
            blockquote(e) {
                return `<blockquote>\n ${e}</blockquote>\n`
            }
            html(e, t) {
                return e
            }
            heading(e, t, n, i) {
                if (this.options.headerIds) {
                    return `<h ${t} id="${this.options.headerPrefix + i.slug(n)}">${e}</h ${t}>\n`
                }
                return `<h ${t}>${e}</h ${t}>\n`
            }
            hr() {
                return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
            }
            list(e, t, n) {
                const i = t ? "ol" : "ul";
                return "<" + i + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + i + ">\n"
            }
            listitem(e, t, n) {
                return `<li>${e}</li>\n`
            }
            checkbox(e) {
                return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
            }
            paragraph(e) {
                return `<p>${e}</p>\n`
            }
            table(e, t) {
                return t && (t = `<tbody>${t}</tbody>`),
                "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
            }
            tablerow(e) {
                return `<tr>\n ${e}</tr>\n`
            }
            tablecell(e, t) {
                const n = t.header ? "th" : "td";
                return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>\n`
            }
            strong(e) {
                return `<strong>${e}</strong>`
            }
            em(e) {
                return `<em>${e}</em>`
            }
            codespan(e) {
                return `<code>${e}</code>`
            }
            br() {
                return this.options.xhtml ? "<br/>" : "<br>"
            }
            del(e) {
                return `<del>${e}</del>`
            }
            link(e, t, n) {
                const i = H(this.options.sanitize, this.options.baseUrl, e);
                if (null === i)
                    return n;
                let s = '<a href="' + (e = i) + '"';
                return t && (s += ' title="' + t + '"'),
                    s += ">" + n + "</a>",
                    s
            }
            image(e, t, n) {
                const i = H(this.options.sanitize, this.options.baseUrl, e);
                if (null === i)
                    return n;
                let s = `<img src="${e = i}" alt="${n}"`;
                return t && (s += ` title="${t}"`),
                    s += this.options.xhtml ? "/>" : ">",
                    s
            }
            text(e) {
                return e
            }
        }
        class oe {
            strong(e) {
                return e
            }
            em(e) {
                return e
            }
            codespan(e) {
                return e
            }
            del(e) {
                return e
            }
            html(e) {
                return e
            }
            text(e) {
                return e
            }
            link(e, t, n) {
                return "" + n
            }
            image(e, t, n) {
                return "" + n
            }
            br() {
                return ""
            }
        }
        class le {
            constructor() {
                __publicField(this, "seen"),
                    this.seen = {}
            }
            serialize(e) {
                return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-")
            }
            getNextSafeSlug(e, t) {
                let n = e
                    , i = 0;
                if (this.seen.hasOwnProperty(n)) {
                    i = this.seen[e];
                    do {
                        i++,
                            n = e + "-" + i
                    } while (this.seen.hasOwnProperty(n))
                }
                return t || (this.seen[e] = i,
                    this.seen[n] = 0),
                    n
            }
            slug(e, t={}) {
                const n = this.serialize(e);
                return this.getNextSafeSlug(n, t.dryrun)
            }
        }
        class ce {
            constructor(e) {
                __publicField(this, "options"),
                    __publicField(this, "renderer"),
                    __publicField(this, "textRenderer"),
                    __publicField(this, "slugger"),
                    this.options = e || A,
                    this.options.renderer = this.options.renderer || new ae,
                    this.renderer = this.options.renderer,
                    this.renderer.options = this.options,
                    this.textRenderer = new oe,
                    this.slugger = new le
            }
            static parse(e, t) {
                return new ce(t).parse(e)
            }
            static parseInline(e, t) {
                return new ce(t).parseInline(e)
            }
            parse(e, t=!0) {
                let n = "";
                for (let i = 0; i < e.length; i++) {
                    const s = e[i];
                    if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type]) {
                        const e = s
                            , t = this.options.extensions.renderers[e.type].call({
                            parser: this
                        }, e);
                        if (!1 !== t || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(e.type)) {
                            n += t || "";
                            continue
                        }
                    }
                    switch (s.type) {
                        case "space":
                            continue;
                        case "hr":
                            n += this.renderer.hr();
                            continue;
                        case "heading":
                        {
                            const e = s;
                            n += this.renderer.heading(this.parseInline(e.tokens), e.depth, q(this.parseInline(e.tokens, this.textRenderer)), this.slugger);
                            continue
                        }
                        case "code":
                        {
                            const e = s;
                            n += this.renderer.code(e.text, e.lang, !!e.escaped);
                            continue
                        }
                        case "table":
                        {
                            const e = s;
                            let t = ""
                                , i = "";
                            for (let n = 0; n < e.header.length; n++)
                                i += this.renderer.tablecell(this.parseInline(e.header[n].tokens), {
                                    header: !0,
                                    align: e.align[n]
                                });
                            t += this.renderer.tablerow(i);
                            let r = "";
                            for (let n = 0; n < e.rows.length; n++) {
                                const t = e.rows[n];
                                i = "";
                                for (let n = 0; n < t.length; n++)
                                    i += this.renderer.tablecell(this.parseInline(t[n].tokens), {
                                        header: !1,
                                        align: e.align[n]
                                    });
                                r += this.renderer.tablerow(i)
                            }
                            n += this.renderer.table(t, r);
                            continue
                        }
                        case "blockquote":
                        {
                            const e = s
                                , t = this.parse(e.tokens);
                            n += this.renderer.blockquote(t);
                            continue
                        }
                        case "list":
                        {
                            const e = s
                                , t = e.ordered
                                , i = e.start
                                , r = e.loose;
                            let a = "";
                            for (let n = 0; n < e.items.length; n++) {
                                const t = e.items[n]
                                    , i = t.checked
                                    , s = t.task;
                                let o = "";
                                if (t.task) {
                                    const e = this.renderer.checkbox(!!i);
                                    r ? t.tokens.length > 0 && "paragraph" === t.tokens[0].type ? (t.tokens[0].text = e + " " + t.tokens[0].text,
                                    t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && "text" === t.tokens[0].tokens[0].type && (t.tokens[0].tokens[0].text = e + " " + t.tokens[0].tokens[0].text)) : t.tokens.unshift({
                                        type: "text",
                                        text: e
                                    }) : o += e
                                }
                                o += this.parse(t.tokens, r),
                                    a += this.renderer.listitem(o, s, !!i)
                            }
                            n += this.renderer.list(a, t, i);
                            continue
                        }
                        case "html":
                        {
                            const e = s;
                            n += this.renderer.html(e.text, e.block);
                            continue
                        }
                        case "paragraph":
                        {
                            const e = s;
                            n += this.renderer.paragraph(this.parseInline(e.tokens));
                            continue
                        }
                        case "text":
                        {
                            let r = s
                                , a = r.tokens ? this.parseInline(r.tokens) : r.text;
                            for (; i + 1 < e.length && "text" === e[i + 1].type; )
                                r = e[++i],
                                    a += "\n" + (r.tokens ? this.parseInline(r.tokens) : r.text);
                            n += t ? this.renderer.paragraph(a) : a;
                            continue
                        }
                        default:
                        {
                            const e = 'Token with "' + s.type + '" type was not found.';
                            if (this.options.silent)
                                return console.error(e),
                                    "";
                            throw new Error(e)
                        }
                    }
                }
                return n
            }
            parseInline(e, t) {
                t = t || this.renderer;
                let n = "";
                for (let i = 0; i < e.length; i++) {
                    const s = e[i];
                    if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type]) {
                        const e = this.options.extensions.renderers[s.type].call({
                            parser: this
                        }, s);
                        if (!1 !== e || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
                            n += e || "";
                            continue
                        }
                    }
                    switch (s.type) {
                        case "escape":
                        {
                            const e = s;
                            n += t.text(e.text);
                            break
                        }
                        case "html":
                        {
                            const e = s;
                            n += t.html(e.text);
                            break
                        }
                        case "link":
                        {
                            const e = s;
                            n += t.link(e.href, e.title, this.parseInline(e.tokens, t));
                            break
                        }
                        case "image":
                        {
                            const e = s;
                            n += t.image(e.href, e.title, e.text);
                            break
                        }
                        case "strong":
                        {
                            const e = s;
                            n += t.strong(this.parseInline(e.tokens, t));
                            break
                        }
                        case "em":
                        {
                            const e = s;
                            n += t.em(this.parseInline(e.tokens, t));
                            break
                        }
                        case "codespan":
                        {
                            const e = s;
                            n += t.codespan(e.text);
                            break
                        }
                        case "br":
                            n += t.br();
                            break;
                        case "del":
                        {
                            const e = s;
                            n += t.del(this.parseInline(e.tokens, t));
                            break
                        }
                        case "text":
                        {
                            const e = s;
                            n += t.text(e.text);
                            break
                        }
                        default:
                        {
                            const e = 'Token with "' + s.type + '" type was not found.';
                            if (this.options.silent)
                                return console.error(e),
                                    "";
                            throw new Error(e)
                        }
                    }
                }
                return n
            }
        }
        class de {
            constructor(e) {
                __publicField(this, "options"),
                    this.options = e || A
            }
            preprocess(e) {
                return e
            }
            postprocess(e) {
                return e
            }
        }
        __publicField(de, "passThroughHooks", new Set(["preprocess", "postprocess"]));
        e = new WeakSet,
            t = function(e, t) {
                return (s,r,a)=>{
                    "function" == typeof r && (a = r,
                        r = null);
                    const o = __spreadValues({}, r)
                        , l = __spreadValues(__spreadValues({}, this.defaults), o);
                    !0 === this.defaults.async && !1 === o.async && (l.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),
                        l.async = !0);
                    const c = __privateMethod(this, n, i).call(this, !!l.silent, !!l.async, a);
                    if (null == s)
                        return c(new Error("marked(): input parameter is undefined or null"));
                    if ("string" != typeof s)
                        return c(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
                    if (function(e, t) {
                        e && !e.silent && (t && console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),
                        (e.sanitize || e.sanitizer) && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),
                        (e.highlight || "language-" !== e.langPrefix) && console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),
                        e.mangle && console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),
                        e.baseUrl && console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),
                        e.smartypants && console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),
                        e.xhtml && console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),
                        (e.headerIds || e.headerPrefix) && console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))
                    }(l, a),
                    l.hooks && (l.hooks.options = l),
                        a) {
                        const n = a
                            , i = l.highlight;
                        let r;
                        try {
                            l.hooks && (s = l.hooks.preprocess(s)),
                                r = e(s, l)
                        } catch (d) {
                            return c(d)
                        }
                        const o = e=>{
                                let s;
                                if (!e)
                                    try {
                                        l.walkTokens && this.walkTokens(r, l.walkTokens),
                                            s = t(r, l),
                                        l.hooks && (s = l.hooks.postprocess(s))
                                    } catch (d) {
                                        e = d
                                    }
                                return l.highlight = i,
                                    e ? c(e) : n(null, s)
                            }
                        ;
                        if (!i || i.length < 3)
                            return o();
                        if (delete l.highlight,
                            !r.length)
                            return o();
                        let h = 0;
                        return this.walkTokens(r, (e=>{
                                "code" === e.type && (h++,
                                    setTimeout((()=>{
                                            i(e.text, e.lang, ((t,n)=>{
                                                    if (t)
                                                        return o(t);
                                                    null != n && n !== e.text && (e.text = n,
                                                        e.escaped = !0),
                                                        h--,
                                                    0 === h && o()
                                                }
                                            ))
                                        }
                                    ), 0))
                            }
                        )),
                            void (0 === h && o())
                    }
                    if (l.async)
                        return Promise.resolve(l.hooks ? l.hooks.preprocess(s) : s).then((t=>e(t, l))).then((e=>l.walkTokens ? Promise.all(this.walkTokens(e, l.walkTokens)).then((()=>e)) : e)).then((e=>t(e, l))).then((e=>l.hooks ? l.hooks.postprocess(e) : e)).catch(c);
                    try {
                        l.hooks && (s = l.hooks.preprocess(s));
                        const n = e(s, l);
                        l.walkTokens && this.walkTokens(n, l.walkTokens);
                        let i = t(n, l);
                        return l.hooks && (i = l.hooks.postprocess(i)),
                            i
                    } catch (d) {
                        return c(d)
                    }
                }
            }
            ,
            n = new WeakSet,
            i = function(e, t, n) {
                return i=>{
                    if (i.message += "\nPlease report this to https://github.com/markedjs/marked.",
                        e) {
                        const e = "<p>An error occurred:</p><pre>" + U(i.message + "", !0) + "</pre>";
                        return t ? Promise.resolve(e) : n ? void n(null, e) : e
                    }
                    if (t)
                        return Promise.reject(i);
                    if (!n)
                        throw i;
                    n(i)
                }
            }
        ;
        const he = new class {
                constructor(...i) {
                    __privateAdd(this, e),
                        __privateAdd(this, n),
                        __publicField(this, "defaults", {
                            async: !1,
                            baseUrl: null,
                            breaks: !1,
                            extensions: null,
                            gfm: !0,
                            headerIds: !1,
                            headerPrefix: "",
                            highlight: null,
                            hooks: null,
                            langPrefix: "language-",
                            mangle: !1,
                            pedantic: !1,
                            renderer: null,
                            sanitize: !1,
                            sanitizer: null,
                            silent: !1,
                            smartypants: !1,
                            tokenizer: null,
                            walkTokens: null,
                            xhtml: !1
                        }),
                        __publicField(this, "options", this.setOptions),
                        __publicField(this, "parse", __privateMethod(this, e, t).call(this, re.lex, ce.parse)),
                        __publicField(this, "parseInline", __privateMethod(this, e, t).call(this, re.lexInline, ce.parseInline)),
                        __publicField(this, "Parser", ce),
                        __publicField(this, "parser", ce.parse),
                        __publicField(this, "Renderer", ae),
                        __publicField(this, "TextRenderer", oe),
                        __publicField(this, "Lexer", re),
                        __publicField(this, "lexer", re.lex),
                        __publicField(this, "Tokenizer", ee),
                        __publicField(this, "Slugger", le),
                        __publicField(this, "Hooks", de),
                        this.use(...i)
                }
                walkTokens(e, t) {
                    var n, i;
                    let s = [];
                    for (const r of e)
                        switch (s = s.concat(t.call(this, r)),
                            r.type) {
                            case "table":
                            {
                                const e = r;
                                for (const n of e.header)
                                    s = s.concat(this.walkTokens(n.tokens, t));
                                for (const n of e.rows)
                                    for (const e of n)
                                        s = s.concat(this.walkTokens(e.tokens, t));
                                break
                            }
                            case "list":
                            {
                                const e = r;
                                s = s.concat(this.walkTokens(e.items, t));
                                break
                            }
                            default:
                            {
                                const e = r;
                                (null == (i = null == (n = this.defaults.extensions) ? void 0 : n.childTokens) ? void 0 : i[e.type]) ? this.defaults.extensions.childTokens[e.type].forEach((n=>{
                                        s = s.concat(this.walkTokens(e[n], t))
                                    }
                                )) : e.tokens && (s = s.concat(this.walkTokens(e.tokens, t)))
                            }
                        }
                    return s
                }
                use(...e) {
                    const t = this.defaults.extensions || {
                        renderers: {},
                        childTokens: {}
                    };
                    return e.forEach((e=>{
                            const n = __spreadValues({}, e);
                            if (n.async = this.defaults.async || n.async || !1,
                            e.extensions && (e.extensions.forEach((e=>{
                                    if (!e.name)
                                        throw new Error("extension name required");
                                    if ("renderer"in e) {
                                        const n = t.renderers[e.name];
                                        t.renderers[e.name] = n ? function(...t) {
                                                let i = e.renderer.apply(this, t);
                                                return !1 === i && (i = n.apply(this, t)),
                                                    i
                                            }
                                            : e.renderer
                                    }
                                    if ("tokenizer"in e) {
                                        if (!e.level || "block" !== e.level && "inline" !== e.level)
                                            throw new Error("extension level must be 'block' or 'inline'");
                                        const n = t[e.level];
                                        n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer],
                                        e.start && ("block" === e.level ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : "inline" === e.level && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]))
                                    }
                                    "childTokens"in e && e.childTokens && (t.childTokens[e.name] = e.childTokens)
                                }
                            )),
                                n.extensions = t),
                                e.renderer) {
                                const t = this.defaults.renderer || new ae(this.defaults);
                                for (const n in e.renderer) {
                                    const i = e.renderer[n]
                                        , s = n
                                        , r = t[s];
                                    t[s] = (...e)=>{
                                        let n = i.apply(t, e);
                                        return !1 === n && (n = r.apply(t, e)),
                                        n || ""
                                    }
                                }
                                n.renderer = t
                            }
                            if (e.tokenizer) {
                                const t = this.defaults.tokenizer || new ee(this.defaults);
                                for (const n in e.tokenizer) {
                                    const i = e.tokenizer[n]
                                        , s = n
                                        , r = t[s];
                                    t[s] = (...e)=>{
                                        let n = i.apply(t, e);
                                        return !1 === n && (n = r.apply(t, e)),
                                            n
                                    }
                                }
                                n.tokenizer = t
                            }
                            if (e.hooks) {
                                const t = this.defaults.hooks || new de;
                                for (const n in e.hooks) {
                                    const i = e.hooks[n]
                                        , s = n
                                        , r = t[s];
                                    de.passThroughHooks.has(n) ? t[s] = e=>{
                                            if (this.defaults.async)
                                                return Promise.resolve(i.call(t, e)).then((e=>r.call(t, e)));
                                            const n = i.call(t, e);
                                            return r.call(t, n)
                                        }
                                        : t[s] = (...e)=>{
                                            let n = i.apply(t, e);
                                            return !1 === n && (n = r.apply(t, e)),
                                                n
                                        }
                                }
                                n.hooks = t
                            }
                            if (e.walkTokens) {
                                const t = this.defaults.walkTokens
                                    , i = e.walkTokens;
                                n.walkTokens = function(e) {
                                    let n = [];
                                    return n.push(i.call(this, e)),
                                    t && (n = n.concat(t.call(this, e))),
                                        n
                                }
                            }
                            this.defaults = __spreadValues(__spreadValues({}, this.defaults), n)
                        }
                    )),
                        this
                }
                setOptions(e) {
                    return this.defaults = __spreadValues(__spreadValues({}, this.defaults), e),
                        this
                }
            }
        ;
        function ue(e, t, n) {
            return he.parse(e, t, n)
        }
        ue.options = ue.setOptions = function(e) {
            return he.setOptions(e),
                ue.defaults = he.defaults,
                F(ue.defaults),
                ue
        }
            ,
            ue.getDefaults = L,
            ue.defaults = A,
            ue.use = function(...e) {
                return he.use(...e),
                    ue.defaults = he.defaults,
                    F(ue.defaults),
                    ue
            }
            ,
            ue.walkTokens = function(e, t) {
                return he.walkTokens(e, t)
            }
            ,
            ue.parseInline = he.parseInline,
            ue.Parser = ce,
            ue.parser = ce.parse,
            ue.Renderer = ae,
            ue.TextRenderer = oe,
            ue.Lexer = re,
            ue.lexer = re.lex,
            ue.Tokenizer = ee,
            ue.Slugger = le,
            ue.Hooks = de,
            ue.parse = ue,
            ue.options,
            ue.setOptions,
            ue.use,
            ue.walkTokens,
            ue.parseInline;
        var pe = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
        function me(e) {
            return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
        }
        var ge = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }
            , fe = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }
            , ke = /(&amp;|&lt;|&gt;|&quot;|&#39;)/g
            , ye = /[&<>"']/g;
        function be(e) {
            return ge[e]
        }
        function _e(e) {
            return fe[e]
        }
        function $e(e) {
            return null == e ? "" : String(e).replace(ye, be)
        }
        function xe(e) {
            return null == e ? "" : String(e).replace(ke, _e)
        }
        $e.options = xe.options = {};
        var ve = {
            encode: $e,
            escape: $e,
            decode: xe,
            unescape: xe,
            version: "1.0.0-browser"
        };
        var we = function e(t) {
            for (var n, i, s = Array.prototype.slice.call(arguments, 1); s.length; )
                for (i in n = s.shift())
                    n.hasOwnProperty(i) && ("[object Object]" === Object.prototype.toString.call(t[i]) ? t[i] = e(t[i], n[i]) : t[i] = n[i]);
            return t
        }
            , Ce = function(e) {
            return "string" == typeof e ? e.toLowerCase() : e
        };
        function Se(e, t) {
            return e[t] = !0,
                e
        }
        var Te = function(e) {
            return e.reduce(Se, {})
        }
            , Ee = {
            uris: Te(["background", "base", "cite", "href", "longdesc", "src", "usemap"])
        }
            , Le = {
            voids: Te(["area", "br", "col", "hr", "img", "wbr", "input", "base", "basefont", "link", "meta"])
        }
            , Ae = ve
            , Fe = Ce
            , Oe = Le
            , Me = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/
            , Re = /^<\s*\/\s*([\w:-]+)[^>]*>/
            , Pe = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g
            , Be = /^</
            , Ie = /^<\s*\//;
        var Ue = ve
            , De = Ce
            , qe = Ee
            , ze = Le;
        var je = we
            , We = function(e, t) {
            for (var n, i = function() {
                var e = [];
                return e.lastItem = function() {
                    return e[e.length - 1]
                }
                    ,
                    e
            }(), s = e; e; )
                r();
            function r() {
                n = !0,
                    function() {
                        "\x3c!--" === e.substr(0, 4) ? (i = e.indexOf("--\x3e")) >= 0 && (t.comment && t.comment(e.substring(4, i)),
                            e = e.substring(i + 3),
                            n = !1) : Ie.test(e) ? a(Re, l) : Be.test(e) && a(Me, o);
                        var i;
                        !function() {
                            if (!n)
                                return;
                            var i, s = e.indexOf("<");
                            s >= 0 ? (i = e.substring(0, s),
                                e = e.substring(s)) : (i = e,
                                e = "");
                            t.chars && t.chars(i)
                        }()
                    }();
                var i = e === s;
                s = e,
                i && (e = "")
            }
            function a(t, i) {
                var s = e.match(t);
                s && (e = e.substring(s[0].length),
                    s[0].replace(t, i),
                    n = !1)
            }
            function o(e, n, s, r) {
                var a = {}
                    , o = Fe(n)
                    , l = Oe.voids[o] || !!r;
                s.replace(Pe, (function(e, t, n, i, s) {
                        a[t] = void 0 === n && void 0 === i && void 0 === s ? void 0 : Ae.decode(n || i || s || "")
                    }
                )),
                l || i.push(o),
                t.start && t.start(o, a, l)
            }
            function l(e, n) {
                var s, r = 0, a = Fe(n);
                if (a)
                    for (r = i.length - 1; r >= 0 && i[r] !== a; r--)
                        ;
                if (r >= 0) {
                    for (s = i.length - 1; s >= r; s--)
                        t.end && t.end(i[s]);
                    i.length = r
                }
            }
            l()
        }
            , Ne = function(e, t) {
            var n, i = t || {};
            return o(),
                {
                    start: function(e, t, a) {
                        var o = De(e);
                        if (n.ignoring)
                            return void r(o);
                        if (-1 === (i.allowedTags || []).indexOf(o))
                            return void r(o);
                        if (i.filter && !i.filter({
                            tag: o,
                            attrs: t
                        }))
                            return void r(o);
                        s("<"),
                            s(o),
                            Object.keys(t).forEach((function(e) {
                                    var n = t[e]
                                        , r = (i.allowedClasses || {})[o] || []
                                        , a = (i.allowedAttributes || {})[o] || []
                                        , l = De(e);
                                    ("class" === l && -1 === a.indexOf(l) ? (n = n.split(" ").filter((function(e) {
                                            return r && -1 !== r.indexOf(e)
                                        }
                                    )).join(" ").trim()).length : -1 !== a.indexOf(l) && (!0 !== qe.uris[l] || function(e) {
                                        var t = e[0];
                                        if ("#" === t || "/" === t)
                                            return !0;
                                        var n = e.indexOf(":");
                                        if (-1 === n)
                                            return !0;
                                        var s = e.indexOf("?");
                                        if (-1 !== s && n > s)
                                            return !0;
                                        var r = e.indexOf("#");
                                        return -1 !== r && n > r || i.allowedSchemes.some(a);
                                        function a(t) {
                                            return 0 === e.indexOf(t + ":")
                                        }
                                    }(n))) && (s(" "),
                                        s(e),
                                    "string" == typeof n && (s('="'),
                                        s(Ue.encode(n)),
                                        s('"')))
                                }
                            )),
                            s(a ? "/>" : ">")
                    },
                    end: function(e) {
                        var t = De(e);
                        -1 !== (i.allowedTags || []).indexOf(t) && !1 === n.ignoring ? (s("</"),
                            s(t),
                            s(">")) : a(t)
                    },
                    chars: function(e) {
                        !1 === n.ignoring && s(i.transformText ? i.transformText(e) : e)
                    }
                };
            function s(t) {
                e.push(t)
            }
            function r(e) {
                ze.voids[e] || (!1 === n.ignoring ? n = {
                    ignoring: e,
                    depth: 1
                } : n.ignoring === e && n.depth++)
            }
            function a(e) {
                n.ignoring === e && --n.depth <= 0 && o()
            }
            function o() {
                n = {
                    ignoring: !1,
                    depth: 0
                }
            }
        }
            , He = {
            allowedAttributes: {
                a: ["href", "name", "target", "title", "aria-label"],
                iframe: ["allowfullscreen", "frameborder", "src"],
                img: ["src", "alt", "title", "aria-label"]
            },
            allowedClasses: {},
            allowedSchemes: ["http", "https", "mailto"],
            allowedTags: ["a", "abbr", "article", "b", "blockquote", "br", "caption", "code", "del", "details", "div", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "ins", "kbd", "li", "main", "mark", "ol", "p", "pre", "section", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "th", "thead", "tr", "u", "ul"],
            filter: null
        };
        function Ve(e, t, n) {
            var i = []
                , s = !0 === n ? t : je({}, He, t)
                , r = Ne(i, s);
            return We(e, r),
                i.join("")
        }
        Ve.defaults = He;
        const Qe = me(Ve);
        var Ze = {
            exports: {}
        };
        Ze.exports = function() {
            function e(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports),
                    t.exports
            }
            var t = e((function(e) {
                    var t = e.exports = function() {
                            return new RegExp("(?:" + t.line().source + ")|(?:" + t.block().source + ")","gm")
                        }
                    ;
                    t.line = function() {
                        return /(?:^|\s)\/\/(.+?)$/gm
                    }
                        ,
                        t.block = function() {
                            return /\/\*([\S\s]*?)\*\//gm
                        }
                }
            ))
                , n = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"];
            function i(e) {
                return '<span style="color: slategray">' + e + "</span>"
            }
            return function(e, s) {
                void 0 === s && (s = {});
                var r = s.colors;
                void 0 === r && (r = n);
                var a = 0
                    , o = {}
                    , l = new RegExp("(" + /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source + "|" + /</.source + ")|(" + t().source + ")","gmi");
                return e.replace(l, (function(e, t, n) {
                        if (n)
                            return i(n);
                        if ("<" === t)
                            return "&lt;";
                        var s;
                        o[t] ? s = o[t] : (s = r[a],
                            o[t] = s);
                        var l = '<span style="color: #' + s + '">' + t + "</span>";
                        return a = ++a % r.length,
                            l
                    }
                ))
            }
        }();
        const Ge = me(Ze.exports);
        let Ke;
        function Ye() {
            return Ke
        }
        function Xe(e, t) {
            var n;
            let i = null == (n = Ye()) ? void 0 : n.parse(t);
            i || (i = t.replace(/```\s*([^]+?.*?[^]+?[^]+?)```/g, ((e,t)=>`<pre><code>${Ge(t)}</code></pre>`)).replace(/!\[(.*?)\]\((.*?)\)/g, ((e,t,n)=>`<img src="${n}" alt="${t}" />`)).replace(/\[(.*?)\]\((.*?)\)/g, ((e,t,n)=>`<a href="${n}" target="_blank">${t}</a>`)).replace(/\n/g, "<br>"));
            let s = Qe(i, {
                allowedClasses: {},
                allowedSchemes: ["http", "https", "mailto", "data"],
                allowedTags: ["a", "abbr", "article", "b", "blockquote", "br", "caption", "code", "del", "details", "div", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "ins", "kbd", "li", "main", "mark", "ol", "p", "pre", "section", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "th", "thead", "tr", "u", "ul"],
                allowedAttributes: {
                    "*": ["title", "accesskey"],
                    a: ["href", "name", "target", "aria-label", "rel"],
                    img: ["src", "alt", "title", "atk-emoticon", "aria-label"],
                    code: ["class"],
                    span: ["class", "style"]
                },
                filter: e=>([["code", /^hljs\W+language-(.*)$/], ["span", /^(hljs-.*)$/]].forEach((([t,n])=>{
                        e.tag === t && e.attrs.class && !n.test(e.attrs.class) && delete e.attrs.class
                    }
                )),
                "span" === e.tag && e.attrs.style && !/^color:(\W+)?#[0-9a-f]{3,6};?$/i.test(e.attrs.style) && delete e.attrs.style,
                    !0)
            });
            return e.markedReplacers.forEach((e=>{
                    "function" == typeof e && (s = e(s))
                }
            )),
                s
        }
        const Je = {
            placeholder: "Leave a comment",
            noComment: "No Comment",
            send: "Send",
            save: "Save",
            nick: "Nickname",
            email: "Email",
            link: "Website",
            emoticon: "Emoji",
            preview: "Preview",
            image: "Image",
            refresh: "Refresh",
            uploadFail: "Upload Failed",
            commentFail: "Failed to comment",
            restoredMsg: "Content has been restored",
            onlyAdminCanReply: "Only admin can reply",
            uploadLoginMsg: "Please fill in your name and email to upload",
            counter: "{count} Comments",
            sortLatest: "Latest",
            sortOldest: "Oldest",
            sortBest: "Best",
            sortAuthor: "Author",
            openComment: "Open Comment",
            closeComment: "Close Comment",
            listLoadFailMsg: "Failed to load comments",
            listRetry: "Click to retry",
            loadMore: "Load More",
            admin: "Admin",
            reply: "Reply",
            voteUp: "Up",
            voteDown: "Down",
            voteFail: "Vote Failed",
            readMore: "Read More",
            actionConfirm: "Confirm",
            collapse: "Collapse",
            collapsed: "Collapsed",
            collapsedMsg: "This comment has been collapsed",
            expand: "Expand",
            approved: "Approved",
            pending: "Pending",
            pendingMsg: "Pending, visible only to commenter.",
            edit: "Edit",
            editCancel: "Cancel Edit",
            delete: "Delete",
            deleteConfirm: "Confirm",
            pin: "Pin",
            unpin: "Unpin",
            seconds: "seconds ago",
            minutes: "minutes ago",
            hours: "hours ago",
            days: "days ago",
            now: "just now",
            adminCheck: "Enter admin password:",
            captchaCheck: "Enter the CAPTCHA to continue:",
            confirm: "Confirm",
            cancel: "Cancel",
            msgCenter: "Messages",
            ctrlCenter: "Admin",
            frontend: "Frontend",
            backend: "Backend",
            loading: "Loading",
            loadFail: "Load Failed",
            editing: "Editing",
            editFail: "Edit Failed",
            deleting: "Deleting",
            deleteFail: "Delete Failed",
            reqGot: "Request got",
            reqAborted: "Request timed out or terminated unexpectedly"
        }
            , et = "ArtalkI18n"
            , tt = {
            en: Je,
            "en-US": Je,
            "zh-CN": {
                placeholder: "键入内容...",
                noComment: "「此时无声胜有声」",
                send: "发送评论",
                save: "保存评论",
                nick: "昵称",
                email: "邮箱",
                link: "网址",
                emoticon: '<svg viewBox="0 0 1024 1024" width="24" height="24"><path d="M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z" fill="currentColor"></path></svg>',
                preview: '<svg viewBox="0 0 1024 1024" width="24" height="24"><path d="M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0" fill="currentColor"></path><path d="M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0" fill="currentColor"></path></svg>',
                image: '<svg viewBox="0 0 1024 1024" width="24" height="24"><path d="M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z" fill="currentColor"></path><path d="M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z" fill="currentColor"></path></svg>',
                refresh: '<svg viewBox="0 0 1024 1024" width="24" height="24"><path d="M512.34133333 931.38488889c-49.94844445 0-98.87288889-8.64711111-145.29422222-25.82755556-44.94222222-16.61155555-86.35733333-40.61866667-123.22133333-71.45244444-74.29688889-61.89511111-125.15555555-148.02488889-143.24622223-242.34666667l71.45244445-13.76711111c31.28888889 162.58844445 174.42133333 280.576 340.30933333 280.576 70.08711111 0 137.55733333-20.82133333 195.12888889-60.07466666 56.32-38.45688889 99.66933333-91.93244445 125.49688889-154.73777778l67.35644444 27.648c-31.28888889 76.00355555-83.74044445 140.74311111-151.77955555 187.16444444-69.85955555 47.67288889-151.43822222 72.81777778-236.20266667 72.81777778zM846.848 421.43288889C827.392 349.29777778 783.92888889 284.33066667 724.65066667 238.13688889c-61.21244445-47.55911111-134.59911111-72.704-212.30933334-72.704-69.97333333 0-137.44355555 20.70755555-194.90133333 59.96088889-56.32 38.57066667-99.78311111 91.93244445-125.61066667 154.624l-67.35644444-27.76177778c31.28888889-75.88977778 83.74044445-140.40177778 151.77955556-186.82311111 69.74577778-47.55911111 151.32444445-72.704 235.9751111-72.704 47.33155555 0 93.86666667 7.85066667 138.12622223 23.32444444 42.89422222 14.90488889 82.83022222 36.75022222 118.784 64.62577778 35.61244445 27.648 66.33244445 60.64355555 91.47733333 98.07644444 25.48622222 38.00177778 44.48711111 79.64444445 56.32 123.67644445l-70.08711111 19.00088889z" fill="currentColor"></path><path d="M30.26488889 669.35466667l93.52533333-162.58844445 162.58844445 93.52533333M997.71733333 345.20177778l-83.28533333 168.16355555-168.16355555-83.17155555" fill="currentColor"></path></svg>',
                uploadFail: "上传失败",
                commentFail: "评论失败",
                restoredMsg: "内容已自动恢复",
                onlyAdminCanReply: "仅管理员可评论",
                uploadLoginMsg: "填入你的名字邮箱才能上传哦",
                counter: "{count} 条评论",
                sortLatest: "最新",
                sortOldest: "最早",
                sortBest: "最热",
                sortAuthor: "作者",
                openComment: "打开评论",
                closeComment: "关闭评论",
                listLoadFailMsg: "无法获取评论列表数据",
                listRetry: "点击重新获取",
                loadMore: "加载更多",
                admin: "管理员",
                reply: "回复",
                voteUp: "赞同",
                voteDown: "反对",
                voteFail: "投票失败",
                readMore: "阅读更多",
                actionConfirm: "确认操作",
                collapse: "折叠",
                collapsed: "已折叠",
                collapsedMsg: "该评论已被系统或管理员折叠",
                expand: "展开",
                approved: "已审",
                pending: "待审",
                pendingMsg: "审核中，仅本人可见。",
                edit: "编辑",
                editCancel: "取消编辑",
                delete: "删除",
                deleteConfirm: "确认删除",
                pin: "置顶",
                unpin: "取消置顶",
                seconds: "秒前",
                minutes: "分钟前",
                hours: "小时前",
                days: "天前",
                now: "刚刚",
                adminCheck: "键入密码来验证管理员身份：",
                captchaCheck: "键入验证码继续：",
                confirm: "确认",
                cancel: "取消",
                msgCenter: "通知中心",
                ctrlCenter: "控制中心",
                frontend: "前端",
                backend: "后端",
                loading: "加载中",
                loadFail: "加载失败",
                editing: "修改中",
                editFail: "修改失败",
                deleting: "删除中",
                deleteFail: "删除失败",
                reqGot: "请求响应",
                reqAborted: "请求超时或意外终止"
            }
        };
        function nt(e) {
            return e = e.replace(/^([a-zA-Z]+)(-[a-zA-Z]+)?$/, ((e,t,n)=>t.toLowerCase() + (n || "").toUpperCase())),
                tt[e] ? tt[e] : window[et] && window[et][e] ? window[et][e] : tt.en
        }
        let it = "en"
            , st = nt(it);
        function rt(e) {
            e !== it && (it = e,
                st = "string" == typeof e ? nt(e) : e)
        }
        function at(e, t={}) {
            let n = (null == st ? void 0 : st[e]) || e;
            return n = n.replace(/\{\s*(\w+?)\s*\}/g, ((e,n)=>t[n] || "")),
                n
        }
        const ot = "2.6.2";
        const lt = new class {
            constructor() {
                __publicField(this, "ctx"),
                    __publicField(this, "data");
                const e = JSON.parse(window.localStorage.getItem("ArtalkUser") || "{}");
                this.data = {
                    nick: e.nick || "",
                    email: e.email || "",
                    link: e.link || "",
                    token: e.token || "",
                    isAdmin: e.isAdmin || !1
                }
            }
            setContext(e) {
                this.ctx = e
            }
            update(e={}) {
                var t;
                Object.entries(e).forEach((([e,t])=>{
                        this.data[e] = t
                    }
                )),
                    window.localStorage.setItem("ArtalkUser", JSON.stringify(this.data)),
                null == (t = this.ctx) || t.trigger("user-changed", this.data)
            }
            logout() {
                this.update({
                    token: "",
                    isAdmin: !1
                })
            }
            checkHasBasicUserInfo() {
                return !!this.data.nick && !!this.data.email
            }
        }
            , ct = window || {}
            , dt = navigator || {};
        class ht {
            constructor(e) {
                __publicField(this, "comment"),
                    __publicField(this, "$el"),
                    __publicField(this, "$main"),
                    __publicField(this, "$header"),
                    __publicField(this, "$headerNick"),
                    __publicField(this, "$headerBadgeWrap"),
                    __publicField(this, "$body"),
                    __publicField(this, "$content"),
                    __publicField(this, "$childrenWrap"),
                    __publicField(this, "$actions"),
                    __publicField(this, "voteBtnUp"),
                    __publicField(this, "voteBtnDown"),
                    __publicField(this, "$replyTo"),
                    __publicField(this, "$replyAt"),
                    this.comment = e
            }
            get ctx() {
                return this.comment.ctx
            }
            get data() {
                return this.comment.getData()
            }
            get conf() {
                return this.comment.conf
            }
            get cConf() {
                return this.comment.getConf()
            }
        }
        function ut(e) {
            if (e.$headerNick = e.$el.querySelector(".atk-nick"),
                e.data.link) {
                const t = s('<a target="_blank" rel="noreferrer noopener nofollow"></a>');
                t.innerText = e.data.nick,
                    t.href = h(e.data.link) ? e.data.link : `https://${e.data.link}`,
                    e.$headerNick.append(t)
            } else
                e.$headerNick.innerText = e.data.nick
        }
        function pt(e) {
            e.$headerBadgeWrap = e.$el.querySelector(".atk-badge-wrap"),
                e.$headerBadgeWrap.innerHTML = "";
            const t = e.data.badge_name
                , n = e.data.badge_color;
            if (t) {
                const i = s('<span class="atk-badge"></span>');
                i.innerText = t.replace("管理员", e.ctx.$t("admin")),
                    i.style.backgroundColor = n || "",
                    e.$headerBadgeWrap.append(i)
            }
            if (e.data.is_pinned) {
                const t = s(`<span class="atk-pinned-badge">${e.ctx.$t("pin")}</span>`);
                e.$headerBadgeWrap.append(t)
            }
        }
        function mt(e) {
            const t = e.$el.querySelector(".atk-date");
            t.innerText = e.comment.getDateFormatted(),
                t.setAttribute("data-atk-comment-date", String(+new Date(e.data.date)))
        }
        function gt(e) {
            if (!e.ctx.conf.uaBadge && !e.data.ip_region)
                return;
            let t = e.$header.querySelector("atk-ua-wrap");
            if (t || (t = s('<span class="atk-ua-wrap"></span>'),
                e.$header.append(t)),
                t.innerHTML = "",
                e.data.ip_region) {
                const n = s('<span class="atk-region-badge"></span>');
                n.innerText = e.data.ip_region,
                    t.append(n)
            }
            if (e.ctx.conf.uaBadge) {
                const {browser: n, os: i} = e.comment.getUserUA();
                if (String(n).trim()) {
                    const e = s('<span class="atk-ua ua-browser"></span>');
                    e.innerText = n,
                        t.append(e)
                }
                if (String(i).trim()) {
                    const e = s('<span class="atk-ua ua-os"></span>');
                    e.innerText = i,
                        t.append(e)
                }
            }
        }
        class ft {
            constructor(e, t) {
                __publicField(this, "ctx"),
                    __publicField(this, "conf"),
                    __publicField(this, "$el"),
                    __publicField(this, "isLoading", !1),
                    __publicField(this, "msgRecTimer"),
                    __publicField(this, "msgRecTimerFunc"),
                    __publicField(this, "isConfirming", !1),
                    __publicField(this, "confirmRecTimer"),
                    this.ctx = e,
                    this.$el = s('<span class="atk-common-action-btn"></span>'),
                    this.conf = "object" != typeof t ? {
                        text: t
                    } : t,
                    this.$el.innerText = this.getText(),
                this.conf.adminOnly && this.$el.setAttribute("atk-only-admin-show", "")
            }
            get isMessaging() {
                return !!this.msgRecTimer
            }
            appendTo(e) {
                return e.append(this.$el),
                    this
            }
            getText() {
                return "string" == typeof this.conf.text ? this.conf.text : this.conf.text()
            }
            setClick(e) {
                this.$el.onclick = t=>{
                    if (t.stopPropagation(),
                        !this.isLoading) {
                        if (this.conf.confirm && !this.isMessaging) {
                            const e = ()=>{
                                    this.isConfirming = !1,
                                        this.$el.classList.remove("atk-btn-confirm"),
                                        this.$el.innerText = this.getText()
                                }
                            ;
                            if (!this.isConfirming)
                                return this.isConfirming = !0,
                                    this.$el.classList.add("atk-btn-confirm"),
                                    this.$el.innerText = this.conf.confirmText || this.ctx.$t("actionConfirm"),
                                    void (this.confirmRecTimer = window.setTimeout((()=>e()), 5e3));
                            this.confirmRecTimer && window.clearTimeout(this.confirmRecTimer),
                                e()
                        }
                        if (this.msgRecTimer)
                            return this.fireMsgRecTimer(),
                                void this.clearMsgRecTimer();
                        e()
                    }
                }
            }
            updateText(e) {
                e && (this.conf.text = e),
                    this.setLoading(!1),
                    this.$el.innerText = this.getText()
            }
            setLoading(e, t) {
                this.isLoading !== e && (this.isLoading = e,
                    e ? (this.$el.classList.add("atk-btn-loading"),
                        this.$el.innerText = t || `${this.ctx.$t("loading")}...`) : (this.$el.classList.remove("atk-btn-loading"),
                        this.$el.innerText = this.getText()))
            }
            setError(e) {
                this.setMsg(e, "atk-btn-error")
            }
            setWarn(e) {
                this.setMsg(e, "atk-btn-warn")
            }
            setSuccess(e) {
                this.setMsg(e, "atk-btn-success")
            }
            setMsg(e, t, n, i) {
                this.setLoading(!1),
                t && this.$el.classList.add(t),
                    this.$el.innerText = e,
                    this.setMsgRecTimer((()=>{
                            this.$el.innerText = this.getText(),
                            t && this.$el.classList.remove(t),
                            i && i()
                        }
                    ), n || 2500)
            }
            setMsgRecTimer(e, t) {
                this.fireMsgRecTimer(),
                    this.clearMsgRecTimer(),
                    this.msgRecTimerFunc = e,
                    this.msgRecTimer = window.setTimeout((()=>{
                            e(),
                                this.clearMsgRecTimer()
                        }
                    ), t)
            }
            fireMsgRecTimer() {
                this.msgRecTimerFunc && this.msgRecTimerFunc()
            }
            clearMsgRecTimer() {
                this.msgRecTimer && window.clearTimeout(this.msgRecTimer),
                    this.msgRecTimer = void 0,
                    this.msgRecTimerFunc = void 0
            }
        }
        function kt(e) {
            e.ctx.conf.vote && (e.voteBtnUp = new ft(e.ctx,(()=>`${e.ctx.$t("voteUp")} (${e.data.vote_up || 0})`)).appendTo(e.$actions),
                e.voteBtnUp.setClick((()=>{
                        e.comment.getActions().vote("up")
                    }
                )),
            e.ctx.conf.voteDown && (e.voteBtnDown = new ft(e.ctx,(()=>`${e.ctx.$t("voteDown")} (${e.data.vote_down || 0})`)).appendTo(e.$actions),
                e.voteBtnDown.setClick((()=>{
                        e.comment.getActions().vote("down")
                    }
                ))))
        }
        function yt(e) {
            if (!e.data.is_allow_reply)
                return;
            const t = s(`<span>${e.ctx.$t("reply")}</span>`);
            e.$actions.append(t),
                t.addEventListener("click", (t=>{
                        t.stopPropagation(),
                            e.cConf.onReplyBtnClick ? e.cConf.onReplyBtnClick() : e.ctx.replyComment(e.data, e.$el)
                    }
                ))
        }
        function bt(e) {
            const t = new ft(e.ctx,{
                text: ()=>e.data.is_collapsed ? e.ctx.$t("expand") : e.ctx.$t("collapse"),
                adminOnly: !0
            });
            t.appendTo(e.$actions),
                t.setClick((()=>{
                        e.comment.getActions().adminEdit("collapsed", t)
                    }
                ))
        }
        function _t(e) {
            const t = new ft(e.ctx,{
                text: ()=>e.data.is_pending ? e.ctx.$t("pending") : e.ctx.$t("approved"),
                adminOnly: !0
            });
            t.appendTo(e.$actions),
                t.setClick((()=>{
                        e.comment.getActions().adminEdit("pending", t)
                    }
                ))
        }
        function $t(e) {
            const t = new ft(e.ctx,{
                text: ()=>e.data.is_pinned ? e.ctx.$t("unpin") : e.ctx.$t("pin"),
                adminOnly: !0
            });
            t.appendTo(e.$actions),
                t.setClick((()=>{
                        e.comment.getActions().adminEdit("pinned", t)
                    }
                ))
        }
        function xt(e) {
            const t = new ft(e.ctx,{
                text: e.ctx.$t("edit"),
                adminOnly: !0
            });
            t.appendTo(e.$actions),
                t.setClick((()=>{
                        e.ctx.editComment(e.data, e.$el)
                    }
                ))
        }
        function vt(e) {
            const t = new ft(e.ctx,{
                text: e.ctx.$t("delete"),
                confirm: !0,
                confirmText: e.ctx.$t("deleteConfirm"),
                adminOnly: !0
            });
            t.appendTo(e.$actions),
                t.setClick((()=>{
                        e.comment.getActions().adminDelete(t)
                    }
                ))
        }
        const wt = {
            Avatar: function(e) {
                const t = e.$el.querySelector(".atk-avatar")
                    , n = s("<img />")
                    , i = e.conf.avatarURLBuilder;
                if (n.src = i ? i(e.data) : e.comment.getGravatarURL(),
                    e.data.link) {
                    const i = s('<a target="_blank" rel="noreferrer noopener nofollow"></a>');
                    i.href = h(e.data.link) ? e.data.link : `https://${e.data.link}`,
                        i.append(n),
                        t.append(i)
                } else
                    t.append(n)
            },
            Header: function(e) {
                Object.entries({
                    renderNick: ut,
                    renderVerifyBadge: pt,
                    renderDate: mt,
                    renderUABadge: gt
                }).forEach((([t,n])=>{
                        n(e)
                    }
                ))
            },
            Content: function(e) {
                if (!e.data.is_collapsed)
                    return e.$content.innerHTML = e.comment.getContentMarked(),
                        void e.$content.classList.remove("atk-hide", "atk-collapsed");
                e.$content.classList.add("atk-hide", "atk-type-collapsed");
                const t = s(`\n    <div class="atk-collapsed">\n      <span class="atk-text">${e.ctx.$t("collapsedMsg")}</span>\n      <span class="atk-show-btn">${e.ctx.$t("expand")}</span>\n    </div>`);
                e.$body.insertAdjacentElement("beforeend", t);
                const n = t.querySelector(".atk-show-btn");
                n.addEventListener("click", (t=>{
                        t.stopPropagation(),
                            e.$content.classList.contains("atk-hide") ? (e.$content.innerHTML = e.comment.getContentMarked(),
                                e.$content.classList.remove("atk-hide"),
                                b(e.$content),
                                n.innerHTML = e.ctx.$t("collapse")) : (e.$content.innerHTML = "",
                                e.$content.classList.add("atk-hide"),
                                n.innerHTML = e.ctx.$t("expand"))
                    }
                ))
            },
            ReplyAt: function(e) {
                e.cConf.isFlatMode || 0 === e.data.rid || e.cConf.replyTo && (e.$replyAt = s('<span class="atk-item atk-reply-at"><span class="atk-arrow"></span><span class="atk-nick"></span></span>'),
                    e.$replyAt.querySelector(".atk-nick").innerText = `${e.cConf.replyTo.nick}`,
                    e.$replyAt.onclick = ()=>{
                        e.comment.getActions().goToReplyComment()
                    }
                    ,
                    e.$headerBadgeWrap.insertAdjacentElement("afterend", e.$replyAt))
            },
            ReplyTo: function(e) {
                if (!e.cConf.isFlatMode)
                    return;
                if (!e.cConf.replyTo)
                    return;
                e.$replyTo = s(`\n    <div class="atk-reply-to">\n      <div class="atk-meta">${e.ctx.$t("reply")} <span class="atk-nick"></span>:</div>\n      <div class="atk-content"></div>\n    </div>`);
                const t = e.$replyTo.querySelector(".atk-nick");
                t.innerText = `@${e.cConf.replyTo.nick}`,
                    t.onclick = ()=>{
                        e.comment.getActions().goToReplyComment()
                    }
                ;
                let n = Xe(e.ctx, e.cConf.replyTo.content);
                e.cConf.replyTo.is_collapsed && (n = `[${e.ctx.$t("collapsed")}]`),
                    e.$replyTo.querySelector(".atk-content").innerHTML = n,
                    e.$body.prepend(e.$replyTo)
            },
            Pending: function(e) {
                if (!e.data.is_pending)
                    return;
                const t = s(`<div class="atk-pending">${e.ctx.$t("pendingMsg")}</div>`);
                e.$body.prepend(t)
            },
            Actions: function(e) {
                Object.entries({
                    renderVote: kt,
                    renderReply: yt,
                    renderCollapse: bt,
                    renderModerator: _t,
                    renderPin: $t,
                    renderEdit: xt,
                    renderDel: vt
                }).forEach((([t,n])=>{
                        n(e)
                    }
                ))
            }
        };
        function Ct(e, t) {
            t.forEach((({el: t, max: n, imgContains: i})=>{
                    const a = ()=>{
                            t && (e.scrollable ? function(e) {
                                if (!e.el)
                                    return;
                                if (e.el.classList.contains(Et))
                                    return;
                                e.el.classList.add(Et),
                                    e.el.style.height = `${e.maxHeight}px`
                            }({
                                el: t,
                                maxHeight: n
                            }) : function(e) {
                                if (!e.el)
                                    return;
                                if (!e.maxHeight)
                                    return;
                                if (e.el.classList.contains(St))
                                    return;
                                e.el.classList.add(St),
                                    e.el.style.height = `${e.maxHeight}px`,
                                    e.el.style.overflow = "hidden";
                                const t = s(`<div class="atk-height-limit-btn">${at("readMore")}</span>`);
                                t.onclick = t=>{
                                    t.stopPropagation(),
                                        Tt(e.el),
                                    e.postBtnClick && e.postBtnClick(t)
                                }
                                    ,
                                    e.el.append(t)
                            }({
                                el: t,
                                maxHeight: n,
                                postBtnClick: e.postExpandBtnClick
                            }))
                        }
                        , o = ()=>{
                            t && r(t) > n && a()
                        }
                    ;
                    o(),
                    i && t && function(e, t) {
                        if (!e)
                            return;
                        const n = e.getElementsByTagName("img");
                        if (!n.length)
                            return;
                        let i = n.length;
                        for (let s = 0; s < n.length; s++)
                            n[s].complete ? i-- : n[s].addEventListener("load", (()=>{
                                    i--,
                                    0 === i && t()
                                }
                            )),
                            0 === i && t()
                    }(t, (()=>o()))
                }
            ))
        }
        const St = "atk-height-limit";
        function Tt(e) {
            e && e.classList.contains(St) && (e.classList.remove(St),
                Array.from(e.children).forEach((e=>{
                        e.classList.contains("atk-height-limit-btn") && e.remove()
                    }
                )),
                e.style.height = "",
                e.style.overflow = "")
        }
        const Et = "atk-height-limit-scroll";
        class Lt extends ht {
            constructor(e) {
                super(e)
            }
            render() {
                var e;
                return this.$el = s('<div class="atk-comment-wrap">\n  <div class="atk-comment">\n    <div class="atk-avatar"></div>\n    <div class="atk-main">\n      <div class="atk-header">\n        <span class="atk-item atk-nick"></span>\n        <span class="atk-badge-wrap"></span>\n        <span class="atk-item atk-date"></span>\n      </div>\n      <div class="atk-body">\n        <div class="atk-content"></div>\n      </div>\n      <div class="atk-footer">\n        <div class="atk-actions"></div>\n      </div>\n    </div>\n  </div>\n</div>\n'),
                    this.$main = this.$el.querySelector(".atk-main"),
                    this.$header = this.$el.querySelector(".atk-header"),
                    this.$body = this.$el.querySelector(".atk-body"),
                    this.$content = this.$body.querySelector(".atk-content"),
                    this.$actions = this.$el.querySelector(".atk-actions"),
                    this.$el.setAttribute("id", `atk-comment-${this.data.id}`),
                    e = this,
                    Object.entries(wt).forEach((([t,n])=>{
                            n(e)
                        }
                    )),
                    this.recoveryChildrenWrap(),
                    this.$el
            }
            checkHeightLimit() {
                const e = this.ctx.conf.heightLimit;
                if (!e || !e.content || !e.children)
                    return;
                const t = e.content
                    , n = e.children;
                Ct({
                    postExpandBtnClick: ()=>{
                        const e = this.comment.getChildren();
                        1 === e.length && Tt(e[0].getRender().$content)
                    }
                    ,
                    scrollable: e.scrollable
                }, [{
                    el: this.$content,
                    max: t,
                    imgContains: !0
                }, {
                    el: this.$replyTo,
                    max: t,
                    imgContains: !0
                }, {
                    el: this.$childrenWrap,
                    max: n,
                    imgContains: !1
                }])
            }
            heightLimitRemoveForChildren() {
                this.$childrenWrap && Tt(this.$childrenWrap)
            }
            playFadeAnim() {
                b(this.comment.getRender().$el)
            }
            playFadeAnimForBody() {
                b(this.comment.getRender().$body)
            }
            getChildrenWrap() {
                return this.$childrenWrap
            }
            renderChildrenWrap() {
                return this.$childrenWrap || (this.$childrenWrap = s('<div class="atk-comment-children"></div>'),
                    this.$main.append(this.$childrenWrap)),
                    this.$childrenWrap
            }
            recoveryChildrenWrap() {
                this.$childrenWrap && this.$main.append(this.$childrenWrap)
            }
            setUnread(e) {
                e ? this.$el.classList.add("atk-unread") : this.$el.classList.remove("atk-unread")
            }
            setOpenable(e) {
                e ? this.$el.classList.add("atk-openable") : this.$el.classList.remove("atk-openable")
            }
            setOpenURL(e) {
                this.setOpenable(!0),
                    this.$el.onclick = t=>{
                        t.preventDefault(),
                            window.open(e),
                        this.cConf.openEvt && this.cConf.openEvt()
                    }
            }
            setOpenAction(e) {
                this.setOpenable(!0),
                    this.$el.onclick = t=>{
                        t.preventDefault(),
                            e()
                    }
            }
        }
        class At {
            constructor(e) {
                __publicField(this, "comment"),
                    this.comment = e
            }
            get ctx() {
                return this.comment.ctx
            }
            get data() {
                return this.comment.getData()
            }
            get cConf() {
                return this.comment.getConf()
            }
            vote(e) {
                const t = "up" === e ? this.comment.getRender().voteBtnUp : this.comment.getRender().voteBtnDown;
                this.ctx.getApi().comment.vote(this.data.id, `comment_ ${e}`).then((e=>{
                        var t, n;
                        this.data.vote_up = e.up,
                            this.data.vote_down = e.down,
                        null == (t = this.comment.getRender().voteBtnUp) || t.updateText(),
                        null == (n = this.comment.getRender().voteBtnDown) || n.updateText()
                    }
                )).catch((e=>{
                        null == t || t.setError(this.ctx.$t("voteFail")),
                            console.log(e)
                    }
                ))
            }
            adminEdit(e, t) {
                if (t.isLoading)
                    return;
                t.setLoading(!0, `${this.ctx.$t("editing")}...`);
                const n = __spreadValues({}, this.data);
                "collapsed" === e ? n.is_collapsed = !n.is_collapsed : "pending" === e ? n.is_pending = !n.is_pending : "pinned" === e && (n.is_pinned = !n.is_pinned),
                    this.ctx.getApi().comment.commentEdit(n).then((e=>{
                            t.setLoading(!1),
                                this.comment.setData(e),
                                this.ctx.listRefreshUI()
                        }
                    )).catch((e=>{
                            console.error(e),
                                t.setError(this.ctx.$t("editFail"))
                        }
                    ))
            }
            adminDelete(e) {
                e.isLoading || (e.setLoading(!0, `${this.ctx.$t("deleting")}...`),
                    this.ctx.getApi().comment.commentDel(this.data.id, this.data.site_name).then((()=>{
                            e.setLoading(!1),
                            this.cConf.onDelete && this.cConf.onDelete(this.comment)
                        }
                    )).catch((t=>{
                            console.error(t),
                                e.setError(this.ctx.$t("deleteFail"))
                        }
                    )))
            }
            goToReplyComment() {
                const e = window.location.hash
                    , t = `#atk-comment-${this.data.rid}`;
                window.location.hash = t,
                t === e && window.dispatchEvent(new Event("hashchange"))
            }
        }
        class Ft extends m {
            constructor(e, t, n) {
                super(e),
                    __publicField(this, "renderInstance"),
                    __publicField(this, "actionInstance"),
                    __publicField(this, "data"),
                    __publicField(this, "cConf"),
                    __publicField(this, "parent"),
                    __publicField(this, "children", []),
                    __publicField(this, "nestCurt"),
                    __publicField(this, "nestMax"),
                    this.nestMax = e.conf.nestMax || 3,
                    this.cConf = n,
                    this.data = __spreadValues({}, t),
                    this.data.date = this.data.date.replace(/-/g, "/"),
                    this.parent = null,
                    this.nestCurt = 1,
                    this.actionInstance = new At(this),
                    this.renderInstance = new Lt(this)
            }
            render() {
                const e = this.renderInstance.render();
                this.$el && this.$el.replaceWith(e),
                    this.$el = e,
                this.cConf.afterRender && this.cConf.afterRender()
            }
            getActions() {
                return this.actionInstance
            }
            getRender() {
                return this.renderInstance
            }
            getData() {
                return this.data
            }
            setData(e) {
                this.data = e,
                    this.render(),
                    this.getRender().playFadeAnimForBody()
            }
            getParent() {
                return this.parent
            }
            getChildren() {
                return this.children
            }
            getNestCurt() {
                return this.nestCurt
            }
            getIsRoot() {
                return 0 === this.data.rid
            }
            getID() {
                return this.data.id
            }
            putChild(e, t="append") {
                e.parent = this,
                    e.nestCurt = this.nestCurt + 1,
                    this.children.push(e);
                const n = this.getChildrenEl();
                "append" === t ? n.append(e.getEl()) : "prepend" === t && n.prepend(e.getEl()),
                    e.getRender().playFadeAnim(),
                    e.getRender().checkHeightLimit()
            }
            getChildrenEl() {
                let e = this.getRender().getChildrenWrap();
                return e || (e = this.nestCurt < this.nestMax ? this.getRender().renderChildrenWrap() : this.parent.getChildrenEl()),
                    e
            }
            getParents() {
                const e = []
                    , t = n=>{
                        n.parent && (e.push(n.parent),
                            t(n.parent))
                    }
                ;
                return t(this),
                    e
            }
            getEl() {
                return this.$el
            }
            getGravatarURL() {
                return function(e, t) {
                    const {mirror: n, params: i} = e.conf.gravatar;
                    return `${n.replace(/\/$/, "")}/${t}?${i.replace(/^\?/, "")}`
                }(this.ctx, this.data.email_encrypted)
            }
            getContentMarked() {
                return Xe(this.ctx, this.data.content)
            }
            getDateFormatted() {
                return c(new Date(this.data.date), this.ctx)
            }
            getUserUA() {
                const e = function(e) {
                    const t = String(e || dt.userAgent)
                        , n = {
                        os: "",
                        osVersion: "",
                        engine: "",
                        browser: "",
                        device: "",
                        language: "",
                        version: ""
                    }
                        , i = {
                        Trident: t.includes("Trident") || t.includes("NET CLR"),
                        Presto: t.includes("Presto"),
                        WebKit: t.includes("AppleWebKit"),
                        Gecko: t.includes("Gecko/")
                    }
                        , s = {
                        Safari: t.includes("Safari"),
                        Chrome: t.includes("Chrome") || t.includes("CriOS"),
                        IE: t.includes("MSIE") || t.includes("Trident"),
                        Edge: t.includes("Edge") || t.includes("Edg"),
                        Firefox: t.includes("Firefox") || t.includes("FxiOS"),
                        "Firefox Focus": t.includes("Focus"),
                        Chromium: t.includes("Chromium"),
                        Opera: t.includes("Opera") || t.includes("OPR"),
                        Vivaldi: t.includes("Vivaldi"),
                        Yandex: t.includes("YaBrowser"),
                        Kindle: t.includes("Kindle") || t.includes("Silk/"),
                        360: t.includes("360EE") || t.includes("360SE"),
                        UC: t.includes("UC") || t.includes(" UBrowser"),
                        QQBrowser: t.includes("QQBrowser"),
                        QQ: t.includes("QQ/"),
                        Baidu: t.includes("Baidu") || t.includes("BIDUBrowser"),
                        Maxthon: t.includes("Maxthon"),
                        Sogou: t.includes("MetaSr") || t.includes("Sogou"),
                        LBBROWSER: t.includes("LBBROWSER"),
                        "2345Explorer": t.includes("2345Explorer"),
                        TheWorld: t.includes("TheWorld"),
                        MIUI: t.includes("MiuiBrowser"),
                        Quark: t.includes("Quark"),
                        Qiyu: t.includes("Qiyu"),
                        Wechat: t.includes("MicroMessenger"),
                        Taobao: t.includes("AliApp(TB"),
                        Alipay: t.includes("AliApp(AP"),
                        Weibo: t.includes("Weibo"),
                        Douban: t.includes("com.douban.frodo"),
                        Suning: t.includes("SNEBUY-APP"),
                        iQiYi: t.includes("IqiyiApp")
                    }
                        , r = {
                        Windows: t.includes("Windows"),
                        Linux: t.includes("Linux") || t.includes("X11"),
                        macOS: t.includes("Macintosh"),
                        Android: t.includes("Android") || t.includes("Adr"),
                        Ubuntu: t.includes("Ubuntu"),
                        FreeBSD: t.includes("FreeBSD"),
                        Debian: t.includes("Debian"),
                        "Windows Phone": t.includes("IEMobile") || t.includes("Windows Phone"),
                        BlackBerry: t.includes("BlackBerry") || t.includes("RIM"),
                        MeeGo: t.includes("MeeGo"),
                        Symbian: t.includes("Symbian"),
                        iOS: t.includes("like Mac OS X"),
                        "Chrome OS": t.includes("CrOS"),
                        WebOS: t.includes("hpwOS")
                    }
                        , a = {
                        Mobile: t.includes("Mobi") || t.includes("iPh") || t.includes("480"),
                        Tablet: t.includes("Tablet") || t.includes("Pad") || t.includes("Nexus 7")
                    };
                    a.Mobile ? a.Mobile = !t.includes("iPad") : s.Chrome && t.includes("Edg") ? (s.Chrome = !1,
                        s.Edge = !0) : ct.showModalDialog && ct.chrome && (s.Chrome = !1,
                        s[360] = !0),
                        n.device = "PC",
                        n.language = (()=>{
                                const e = (dt.browserLanguage || dt.language).split("-");
                                return e[1] && (e[1] = e[1].toUpperCase()),
                                    e.join("_")
                            }
                        )();
                    const o = {
                        engine: i,
                        browser: s,
                        os: r,
                        device: a
                    };
                    Object.entries(o).forEach((([e,t])=>{
                            Object.entries(t).forEach((([t,i])=>{
                                    !0 === i && (n[e] = t)
                                }
                            ))
                        }
                    ));
                    const l = {
                        Windows: ()=>{
                            const e = t.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
                            return {
                                6.4: "10",
                                6.3: "8.1",
                                6.2: "8",
                                6.1: "7",
                                "6.0": "Vista",
                                5.2: "XP",
                                5.1: "XP",
                                "5.0": "2000",
                                "10.0": "10",
                                "11.0": "11"
                            }[e] || e
                        }
                        ,
                        Android: ()=>t.replace(/^.*Android ([\d.]+);.*$/, "$1"),
                        iOS: ()=>t.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, "."),
                        Debian: ()=>t.replace(/^.*Debian\/([\d.]+).*$/, "$1"),
                        "Windows Phone": ()=>t.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2"),
                        macOS: ()=>t.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, "."),
                        WebOS: ()=>t.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1")
                    };
                    n.osVersion = "",
                    l[n.os] && (n.osVersion = l[n.os](),
                    n.osVersion === t && (n.osVersion = ""));
                    const c = {
                        Safari: ()=>t.replace(/^.*Version\/([\d.]+).*$/, "$1"),
                        Chrome: ()=>t.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1"),
                        IE: ()=>t.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1"),
                        Edge: ()=>t.replace(/^.*(Edge|Edg|Edg[A-Z]{1})\/([\d.]+).*$/, "$2"),
                        Firefox: ()=>t.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1"),
                        "Firefox Focus": ()=>t.replace(/^.*Focus\/([\d.]+).*$/, "$1"),
                        Chromium: ()=>t.replace(/^.*Chromium\/([\d.]+).*$/, "$1"),
                        Opera: ()=>t.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1"),
                        Vivaldi: ()=>t.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1"),
                        Yandex: ()=>t.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1"),
                        Kindle: ()=>t.replace(/^.*Version\/([\d.]+).*$/, "$1"),
                        Maxthon: ()=>t.replace(/^.*Maxthon\/([\d.]+).*$/, "$1"),
                        QQBrowser: ()=>t.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1"),
                        QQ: ()=>t.replace(/^.*QQ\/([\d.]+).*$/, "$1"),
                        Baidu: ()=>t.replace(/^.*BIDUBrowser[\s/]([\d.]+).*$/, "$1"),
                        UC: ()=>t.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1"),
                        Sogou: ()=>t.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1"),
                        "2345Explorer": ()=>t.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1"),
                        TheWorld: ()=>t.replace(/^.*TheWorld ([\d.]+).*$/, "$1"),
                        MIUI: ()=>t.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1"),
                        Quark: ()=>t.replace(/^.*Quark\/([\d.]+).*$/, "$1"),
                        Qiyu: ()=>t.replace(/^.*Qiyu\/([\d.]+).*$/, "$1"),
                        Wechat: ()=>t.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1"),
                        Taobao: ()=>t.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1"),
                        Alipay: ()=>t.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1"),
                        Weibo: ()=>t.replace(/^.*weibo__([\d.]+).*$/, "$1"),
                        Douban: ()=>t.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1"),
                        Suning: ()=>t.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1"),
                        iQiYi: ()=>t.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
                    };
                    return n.version = "",
                    c[n.browser] && (n.version = c[n.browser](),
                    n.version === t && (n.version = "")),
                    n.version.indexOf(".") && (n.version = n.version.substring(0, n.version.indexOf("."))),
                        "iOS" === n.os && t.includes("iPad") ? n.os = "iPadOS" : "Edge" !== n.browser || t.includes("Edg") ? "MIUI" === n.browser ? n.os = "Android" : "Chrome" === n.browser && Number(n.version) > 27 || "Opera" === n.browser && Number(n.version) > 12 || "Yandex" === n.browser ? n.engine = "Blink" : void 0 === n.browser && (n.browser = "Unknow App") : n.engine = "EdgeHTML",
                        n
                }(this.data.ua);
                return {
                    browser: `${e.browser} ${e.version}`,
                    os: `${e.os} ${e.osVersion}`
                }
            }
            getConf() {
                return this.cConf
            }
        }
        class Ot {
            constructor(e, t) {
                __publicField(this, "conf"),
                    __publicField(this, "total"),
                    __publicField(this, "$el"),
                    __publicField(this, "$input"),
                    __publicField(this, "inputTimer"),
                    __publicField(this, "$prevBtn"),
                    __publicField(this, "$nextBtn"),
                    __publicField(this, "page", 1),
                    this.total = e,
                    this.conf = t,
                    this.$el = s('<div class="atk-pagination-wrap">\n        <div class="atk-pagination">\n          <div class="atk-btn atk-btn-prev">Prev</div>\n          <input type="text" class="atk-input" aria-label="Enter the number of page" />\n          <div class="atk-btn atk-btn-next">Next</div>\n        </div>\n      </div>'),
                    this.$input = this.$el.querySelector(".atk-input"),
                    this.$input.value = `${this.page}`,
                    this.$input.oninput = ()=>this.input(),
                    this.$input.onkeydown = e=>this.keydown(e),
                    this.$prevBtn = this.$el.querySelector(".atk-btn-prev"),
                    this.$nextBtn = this.$el.querySelector(".atk-btn-next"),
                    this.$prevBtn.onclick = ()=>this.prev(),
                    this.$nextBtn.onclick = ()=>this.next(),
                    this.checkDisabled()
            }
            get pageSize() {
                return this.conf.pageSize
            }
            get offset() {
                return this.pageSize * (this.page - 1)
            }
            get maxPage() {
                return Math.ceil(this.total / this.pageSize)
            }
            update(e, t) {
                this.page = Math.ceil(e / this.pageSize) + 1,
                    this.total = t,
                    this.setInput(this.page),
                    this.checkDisabled()
            }
            setInput(e) {
                this.$input.value = `${e}`
            }
            input(e=!1) {
                window.clearTimeout(this.inputTimer);
                const t = this.$input.value.trim()
                    , n = ()=>{
                        if ("" === t)
                            return void this.setInput(this.page);
                        let e = Number(t);
                        Number.isNaN(e) || e < 1 ? this.setInput(this.page) : (e > this.maxPage && (this.setInput(this.maxPage),
                            e = this.maxPage),
                            this.change(e))
                    }
                ;
                e ? n() : this.inputTimer = window.setTimeout((()=>n()), 800)
            }
            prev() {
                const e = this.page - 1;
                e < 1 || this.change(e)
            }
            next() {
                const e = this.page + 1;
                e > this.maxPage || this.change(e)
            }
            change(e) {
                this.page = e,
                    this.conf.onChange(this.offset),
                    this.setInput(e),
                    this.checkDisabled()
            }
            checkDisabled() {
                this.page + 1 > this.maxPage ? this.$nextBtn.classList.add("atk-disabled") : this.$nextBtn.classList.remove("atk-disabled"),
                    this.page - 1 < 1 ? this.$prevBtn.classList.add("atk-disabled") : this.$prevBtn.classList.remove("atk-disabled")
            }
            keydown(e) {
                const t = e.keyCode || e.which;
                if (38 === t) {
                    const e = Number(this.$input.value) + 1;
                    if (e > this.maxPage)
                        return;
                    this.setInput(e),
                        this.input()
                } else if (40 === t) {
                    const e = Number(this.$input.value) - 1;
                    if (e < 1)
                        return;
                    this.setInput(e),
                        this.input()
                } else
                    13 === t && this.input(!0)
            }
            setLoading(e) {
                e ? g(this.$el) : f(this.$el)
            }
        }
        const Mt = {
            createInstance(e) {
                const t = new Ot(e.total,{
                    pageSize: e.pageSize,
                    onChange: t=>__async(this, null, (function*() {
                            if (!0 === e.list.conf.editorTravel && e.list.ctx.editorTravelBack(),
                                yield e.list.fetchComments(t),
                                e.list.repositionAt) {
                                (e.list.scrollListenerAt || window).scroll({
                                    top: e.list.repositionAt ? o(e.list.repositionAt).top : 0,
                                    left: 0
                                })
                            }
                        }
                    ))
                });
                return [t, t.$el]
            },
            setLoading(e) {
                this.instance.setLoading(e)
            },
            update(e, t) {
                this.instance.update(e, t)
            },
            next() {
                this.instance.next()
            }
        };
        class Rt {
            constructor(e) {
                __publicField(this, "conf"),
                    __publicField(this, "$el"),
                    __publicField(this, "$loading"),
                    __publicField(this, "$text"),
                    __publicField(this, "offset", 0),
                    __publicField(this, "total", 0),
                    __publicField(this, "origText", "Load More"),
                    this.conf = e,
                    this.origText = this.conf.text || this.origText,
                    this.$el = s(`<div class="atk-list-read-more" style="display: none;">\n      <div class="atk-list-read-more-inner">\n        <div class="atk-loading-icon" style="display: none;"></div>\n        <span class="atk-text">${this.origText}</span>\n      </div>\n    </div>`),
                    this.$loading = this.$el.querySelector(".atk-loading-icon"),
                    this.$text = this.$el.querySelector(".atk-text"),
                    this.$el.onclick = ()=>{
                        this.click()
                    }
            }
            get hasMore() {
                return this.total > this.offset + this.conf.pageSize
            }
            click() {
                this.hasMore && this.conf.onClick(this.offset + this.conf.pageSize),
                    this.checkDisabled()
            }
            show() {
                this.$el.style.display = ""
            }
            hide() {
                this.$el.style.display = "none"
            }
            setLoading(e) {
                this.$loading.style.display = e ? "" : "none",
                    this.$text.style.display = e ? "none" : ""
            }
            showErr(e) {
                this.setLoading(!1),
                    this.$text.innerText = e,
                    this.$el.classList.add("atk-err"),
                    window.setTimeout((()=>{
                            this.$text.innerText = this.origText,
                                this.$el.classList.remove("atk-err")
                        }
                    ), 2e3)
            }
            update(e, t) {
                this.offset = e,
                    this.total = t,
                    this.checkDisabled()
            }
            checkDisabled() {
                this.hasMore ? this.show() : this.hide()
            }
        }
        const Pt = {
            pagination: Mt,
            "read-more": {
                createInstance(e) {
                    const t = new Rt({
                        pageSize: e.pageSize,
                        onClick: t=>__async(this, null, (function*() {
                                yield e.list.fetchComments(t)
                            }
                        )),
                        text: at("loadMore")
                    });
                    if (e.list.conf.pagination.autoLoad) {
                        const n = e.list.scrollListenerAt || document;
                        this.autoLoadScrollEvent && n.removeEventListener("scroll", this.autoLoadScrollEvent),
                            this.autoLoadScrollEvent = ()=>{
                                if ("read-more" !== e.mode || !(null == t ? void 0 : t.hasMore) || e.list.getLoading())
                                    return;
                                const n = e.list.$el.querySelector(".atk-list-comments-wrap > .atk-comment-wrap:nth-last-child(3)");
                                n && function(e, t=document.documentElement) {
                                    const n = t.clientHeight
                                        , i = t.scrollTop
                                        , s = i + n
                                        , r = e.getBoundingClientRect();
                                    return r.top + i + r.height <= s
                                }(n, e.list.scrollListenerAt) && t.click()
                            }
                            ,
                            n.addEventListener("scroll", this.autoLoadScrollEvent)
                    }
                    return [t, t.$el]
                },
                setLoading(e) {
                    this.instance.setLoading(e)
                },
                update(e, t) {
                    this.instance.update(e, t)
                },
                showErr(e) {
                    this.instance.showErr(e)
                },
                next() {
                    this.instance.click()
                }
            }
        };
        class Bt {
            constructor(e) {
                __publicField(this, "conf"),
                    this.conf = e,
                    this.init()
            }
            getAdaptor() {
                return Pt[this.conf.mode]
            }
            init() {
                const e = this.getAdaptor()
                    , [t,n] = e.createInstance(this.conf);
                e.instance = t,
                    e.el = n,
                    this.conf.list.$el.append(e.el)
            }
            setLoading(e) {
                this.getAdaptor().setLoading(e)
            }
            update(e, t) {
                this.getAdaptor().update(e, t)
            }
            getEl() {
                return this.getAdaptor().el
            }
            showErr(e) {
                const t = this.getAdaptor()
                    , n = t.showErr;
                n && n.bind(t)(e)
            }
            setMode(e) {
                e !== this.conf.mode && (this.getEl().remove(),
                    this.conf.mode = e,
                    this.init())
            }
            next() {
                this.getAdaptor().next()
            }
        }
        function It(e, t, n) {
            const i = function(e, t) {
                const n = e.split(".")
                    , i = t.split(".");
                for (let s = 0; s < 3; s++) {
                    const e = Number(n[s])
                        , t = Number(i[s]);
                    if (e > t)
                        return 1;
                    if (t > e)
                        return -1;
                    if (!Number.isNaN(e) && Number.isNaN(t))
                        return 1;
                    if (Number.isNaN(e) && !Number.isNaN(t))
                        return -1
                }
                return 0
            }(t, n);
            if (0 !== i) {
                const r = s(`<div>请更新 Artalk ${at(i < 0 ? "frontend" : "backend")}以获得完整体验 (<a href="https://artalk.js.org/" target="_blank">帮助文档</a>)<br/><br/><span style="color: var(--at-color-meta);">当前版本：${at("frontend")} ${t} / ${at("backend")} ${n}</span><br/><br/></div>`)
                    , a = s('<span style="cursor:pointer">忽略</span>');
                return a.onclick = ()=>{
                    _(e.$el.parentElement, null),
                        e.ctx.conf.versionCheck = !1,
                        e.fetchComments(0)
                }
                    ,
                    r.append(a),
                    _(e.$el.parentElement, r, '<span class="atk-warn-title">Artalk Warn</span>'),
                    !0
            }
            return !1
        }
        function Ut(e) {
            const {$dropdownWrap: t, dropdownList: n} = e;
            if (t.querySelector(".atk-dropdown"))
                return;
            t.classList.add("atk-dropdown-wrap"),
                t.append(s('<span class="atk-arrow-down-icon"></span>'));
            let i = 0;
            const r = s('<ul class="atk-dropdown atk-fade-in"></ul>');
            n.forEach(((e,t)=>{
                    const n = e[0]
                        , a = e[1]
                        , o = s('<li class="atk-dropdown-item"><span></span></li>')
                        , l = o.querySelector("span");
                    l.innerText = n,
                        l.onclick = ()=>{
                            ((e,t,n,s)=>{
                                    s(),
                                        i = e,
                                        r.querySelectorAll(".active").forEach((e=>{
                                                e.classList.remove("active")
                                            }
                                        )),
                                        t.classList.add("active"),
                                        r.style.display = "none",
                                        setTimeout((()=>{
                                                r.style.display = ""
                                            }
                                        ), 80)
                                }
                            )(t, o, 0, a)
                        }
                        ,
                        r.append(o),
                    t === i && o.classList.add("active")
                }
            )),
                t.append(r)
        }
        const Dt = {
            el: "",
            pageKey: "",
            pageTitle: "",
            server: "",
            site: "",
            placeholder: "",
            noComment: "",
            sendBtn: "",
            darkMode: !1,
            editorTravel: !0,
            flatMode: "auto",
            nestMax: 2,
            nestSort: "DATE_ASC",
            emoticons: "https://cdn.jsdelivr.net/gh/ArtalkJS/Emoticons/grps/default.json",
            vote: !0,
            voteDown: !1,
            uaBadge: !0,
            listSort: !0,
            preview: !0,
            countEl: "#ArtalkCount",
            pvEl: "#ArtalkPV",
            gravatar: {
                mirror: "https://cravatar.cn/avatar/",
                params: "d=mp&s=240"
            },
            pagination: {
                pageSize: 20,
                readMore: !0,
                autoLoad: !0
            },
            heightLimit: {
                content: 300,
                children: 400,
                scrollable: !1
            },
            imgUpload: !0,
            reqTimeout: 15e3,
            versionCheck: !0,
            useBackendConf: !0,
            locale: "zh-CN"
        };
        function qt(e) {
            const t = p(Dt, e);
            if ("string" == typeof t.el && t.el)
                try {
                    const e = document.querySelector(t.el);
                    if (!e)
                        throw Error(`Target element "${t.el}" was not found.`);
                    t.el = e
                } catch (n) {
                    throw console.error(n),
                        new Error("Please check your Artalk `el` config.")
                }
            return t.server = t.server.replace(/\/$/, "").replace(/\/api\/?$/, ""),
            t.pageKey || (t.pageKey = `${window.location.pathname}`),
            t.pageTitle || (t.pageTitle = `${document.title}`),
            "auto" === t.locale && (t.locale = navigator.language),
                t
        }
        function zt(e) {
            const t = ["el", "pageKey", "pageTitle", "server", "site", "darkMode"];
            return Object.keys(e).forEach((n=>{
                    t.includes(n) && delete e[n]
                }
            )),
            e.emoticons && "string" == typeof e.emoticons && (e.emoticons = e.emoticons.trim(),
                e.emoticons.startsWith("[") || e.emoticons.startsWith("{") ? e.emoticons = JSON.parse(e.emoticons) : "false" === e.emoticons && (e.emoticons = !1)),
                e
        }
        class jt extends m {
            constructor(e) {
                super(e),
                    __publicField(this, "$commentsWrap"),
                    __publicField(this, "data"),
                    __publicField(this, "isLoading", !1),
                    __publicField(this, "confLoaded", !1),
                    __publicField(this, "noCommentText"),
                    __publicField(this, "_nestSortBy"),
                    __publicField(this, "_flatMode"),
                    __publicField(this, "_pageMode"),
                    __publicField(this, "pgHolder"),
                    __publicField(this, "_pageSize"),
                    __publicField(this, "scrollListenerAt"),
                    __publicField(this, "repositionAt"),
                    __publicField(this, "renderComment"),
                    __publicField(this, "paramsEditor"),
                    __publicField(this, "onAfterLoad"),
                    __publicField(this, "unread", []),
                    __publicField(this, "unreadHighlight"),
                    this.$el = s('<div class="atk-list-lite">\n      <div class="atk-list-comments-wrap"></div>\n    </div>'),
                    this.$commentsWrap = this.$el.querySelector(".atk-list-comments-wrap"),
                    window.setInterval((()=>{
                            this.$el.querySelectorAll("[data-atk-comment-date]").forEach((e=>{
                                    const t = e.getAttribute("data-atk-comment-date");
                                    e.innerText = c(new Date(Number(t)), this.ctx)
                                }
                            ))
                        }
                    ), 3e4),
                    this.ctx.on("conf-loaded", (()=>{}
                    ))
            }
            get nestSortBy() {
                return this._nestSortBy || this.ctx.conf.nestSort || "DATE_ASC"
            }
            set nestSortBy(e) {
                this._nestSortBy = e
            }
            get flatMode() {
                return void 0 !== this._flatMode ? this._flatMode : !0 === this.ctx.conf.flatMode || Number(this.ctx.conf.nestMax) <= 1 || !("auto" !== this.ctx.conf.flatMode || !window.matchMedia("(max-width: 768px)").matches)
            }
            set flatMode(e) {
                this._flatMode = e
            }
            get pageMode() {
                return this._pageMode || (this.conf.pagination.readMore ? "read-more" : "pagination")
            }
            set pageMode(e) {
                var t;
                this._pageMode = e,
                null == (t = this.pgHolder) || t.setMode(this._pageMode)
            }
            get pageSize() {
                return this._pageSize || this.conf.pagination.pageSize
            }
            set pageSize(e) {
                this._pageSize = e
            }
            getData() {
                return this.data
            }
            clearData() {
                this.data = void 0
            }
            getLoading() {
                return this.isLoading
            }
            getCommentsWrapEl() {
                return this.$commentsWrap
            }
            setLoading(e, t=!1) {
                var n;
                this.isLoading = e,
                    t ? function(e, t) {
                        e ? g(t) : f(t)
                    }(e, this.$el) : null == (n = this.pgHolder) || n.setLoading(e)
            }
            fetchComments(e) {
                return __async(this, null, (function*() {
                        if (this.isLoading)
                            return;
                        const t = 0 === e
                            , n = e=>this.setLoading(e, t);
                        let i;
                        n(!0),
                            this.ctx.trigger("list-load"),
                        ("read-more" === this.pageMode && t || "pagination" === this.pageMode) && this.ctx.clearAllComments();
                        try {
                            i = yield this.ctx.getApi().comment.get(e, this.pageSize, this.flatMode, this.paramsEditor)
                        } catch (s) {
                            throw this.onError(s.msg || String(s), e, s.data),
                                s
                        } finally {
                            n(!1)
                        }
                        _(this.$el, null);
                        try {
                            this.onLoad(i, e)
                        } catch (s) {
                            throw this.onError(String(s), e),
                                s
                        } finally {
                            n(!1)
                        }
                    }
                ))
            }
            onLoad(e, t) {
                if (this.data = e,
                    !this.confLoaded) {
                    const t = zt(e.conf.frontend_conf);
                    this.conf.useBackendConf ? this.ctx.updateConf(t) : this.ctx.updateConf({}),
                        this.confLoaded = !0
                }
                this.ctx.conf.versionCheck && It(this, ot, e.api_version.version) || (this.importComments(e.comments),
                    this.refreshPagination(t, this.flatMode ? e.total : e.total_roots),
                    this.refreshUI(),
                    this.ctx.updateNotifies(e.unread || []),
                    this.ctx.trigger("list-loaded"),
                this.onAfterLoad && this.onAfterLoad(e))
            }
            refreshPagination(e, t) {
                var n;
                this.pgHolder || (this.pgHolder = new Bt({
                    list: this,
                    mode: this.pageMode,
                    pageSize: this.pageSize,
                    total: t
                })),
                null == (n = this.pgHolder) || n.update(e, t)
            }
            onError(e, t, n) {
                var i;
                this.confLoaded || this.ctx.updateConf({}),
                    e = String(e),
                    console.error(e),
                    0 === t || "read-more" !== this.pageMode ? _(this.$el, function(e, t, n) {
                        const i = s(`<span>${t}，${at("listLoadFailMsg")}<br/></span>`)
                            , r = s(`<span style="cursor:pointer;">${at("listRetry")}</span>`);
                        r.onclick = ()=>e.fetchComments(0),
                            i.appendChild(r);
                        const a = s('<span atk-only-admin-show> | <span style="cursor:pointer;">打开控制台</span></span>');
                        i.appendChild(a),
                        lt.data.isAdmin || a.classList.add("atk-hide");
                        let o = "";
                        if (null == n ? void 0 : n.err_no_site) {
                            const t = {
                                create_name: e.ctx.conf.site,
                                create_urls: `${window.location.protocol}//${window.location.host}`
                            };
                            o = `sites|${JSON.stringify(t)}`
                        }
                        return a.onclick = ()=>e.ctx.showSidebar({
                            view: o
                        }),
                            i
                    }(this, e, n)) : null == (i = this.pgHolder) || i.showErr(this.$t("loadFail"))
            }
            refreshUI() {
                !function(e) {
                    const t = e.ctx.getCommentList().length <= 0;
                    let n = e.getCommentsWrapEl().querySelector(".atk-list-no-comment");
                    t ? n || (n = s('<div class="atk-list-no-comment"></div>'),
                        n.innerHTML = e.noCommentText || e.ctx.conf.noComment || e.ctx.$t("noComment"),
                        e.getCommentsWrapEl().appendChild(n)) : null == n || n.remove(),
                        e.ctx.checkAdminShowEl()
                }(this)
            }
            reload() {
                this.fetchComments(0)
            }
            createComment(e, t) {
                t || (t = this.ctx.getCommentDataList());
                const n = new Ft(this.ctx,e,{
                    isFlatMode: this.flatMode,
                    afterRender: ()=>{
                        this.renderComment && this.renderComment(n)
                    }
                    ,
                    onDelete: e=>{
                        this.ctx.deleteComment(e),
                            this.refreshUI()
                    }
                    ,
                    replyTo: e.rid ? t.find((t=>t.id === e.rid)) : void 0
                });
                return n.render(),
                    this.ctx.getCommentList().push(n),
                    n
            }
            importComments(e) {
                this.flatMode ? e.forEach((t=>{
                        this.putCommentFlatMode(t, e, "append")
                    }
                )) : this.importCommentsNest(e)
            }
            importCommentsNest(e) {
                const t = function(e, t="DATE_DESC", n=2) {
                    const i = [];
                    e.filter((e=>0 === e.rid)).forEach((t=>{
                            const s = {
                                id: t.id,
                                comment: t,
                                children: [],
                                level: 1
                            };
                            s.parent = s,
                                i.push(s),
                                function t(i) {
                                    const s = e.filter((e=>e.rid === i.id));
                                    0 !== s.length && (i.level >= n && (i = i.parent),
                                        s.forEach((e=>{
                                                const n = {
                                                    id: e.id,
                                                    comment: e,
                                                    children: [],
                                                    parent: i,
                                                    level: i.level + 1
                                                };
                                                i.children.push(n),
                                                    t(n)
                                            }
                                        )))
                                }(s)
                        }
                    ));
                    const s = (n,i)=>{
                            let s = n.id - i.id;
                            return "DATE_ASC" === t ? s = +new Date(n.comment.date) - +new Date(i.comment.date) : "DATE_DESC" === t ? s = +new Date(i.comment.date) - +new Date(n.comment.date) : "SRC_INDEX" === t ? s = e.indexOf(n.comment) - e.indexOf(i.comment) : "VOTE_UP_DESC" === t && (s = i.comment.vote_up - n.comment.vote_up),
                                s
                        }
                    ;
                    return function e(t) {
                        t.forEach((t=>{
                                t.children = t.children.sort(s),
                                    e(t.children)
                            }
                        ))
                    }(i),
                        i
                }(e, this.nestSortBy, this.conf.nestMax);
                t.forEach((t=>{
                        const n = this.createComment(t.comment, e);
                        this.$commentsWrap.appendChild(n.getEl()),
                            n.getRender().playFadeAnim();
                        const i = this;
                        !function t(n, s) {
                            s.children.forEach((s=>{
                                    const r = s.comment
                                        , a = i.createComment(r, e);
                                    n.putChild(a),
                                        t(a, s)
                                }
                            ))
                        }(n, t),
                            n.getRender().checkHeightLimit()
                    }
                ))
            }
            putCommentFlatMode(e, t, n) {
                e.is_collapsed && (e.is_allow_reply = !1);
                const i = this.createComment(e, t);
                return e.visible && ("append" === n && this.$commentsWrap.append(i.getEl()),
                "prepend" === n && this.$commentsWrap.prepend(i.getEl()),
                    i.getRender().playFadeAnim()),
                    i.getRender().checkHeightLimit(),
                    i
            }
            insertComment(e) {
                if (this.flatMode) {
                    k(this.putCommentFlatMode(e, this.ctx.getCommentDataList(), "prepend").getEl())
                } else {
                    const t = this.createComment(e);
                    if (0 === e.rid)
                        this.$commentsWrap.prepend(t.getEl());
                    else {
                        const n = this.ctx.findComment(e.rid);
                        n && (n.putChild(t, "DATE_ASC" === this.nestSortBy ? "append" : "prepend"),
                            t.getParents().forEach((e=>{
                                    e.getRender().heightLimitRemoveForChildren()
                                }
                            )))
                    }
                    t.getRender().checkHeightLimit(),
                        k(t.getEl()),
                        t.getRender().playFadeAnim()
                }
                this.data && (this.data.total += 1),
                    this.refreshUI(),
                    this.ctx.trigger("list-loaded"),
                    this.ctx.trigger("list-inserted", e)
            }
            updateComment(e) {
                const t = this.ctx.findComment(e.id);
                t && t.setData(e)
            }
            updateUnread(e) {
                this.unread = e,
                !0 === this.unreadHighlight && this.ctx.getCommentList().forEach((e=>{
                        const t = this.unread.find((t=>t.comment_id === e.getID()));
                        t ? (e.getRender().setUnread(!0),
                            e.getRender().setOpenAction((()=>{
                                    window.open(t.read_link),
                                        this.unread = this.unread.filter((t=>t.comment_id !== e.getID())),
                                        this.ctx.updateNotifies(this.unread)
                                }
                            ))) : e.getRender().setUnread(!1)
                    }
                ))
            }
        }
        class Wt extends jt {
            constructor(e) {
                const t = s('<div class="atk-list">\n  <div class="atk-list-header">\n    <div class="atk-comment-count">\n      <div class="atk-text"></div>\n    </div>\n    <div class="atk-right-action">\n      <span data-action="admin-close-comment" class="atk-hide" atk-only-admin-show></span>\n      <span data-action="open-sidebar" class="atk-hide atk-on">\n        <span class="atk-unread-badge" style="display: none;"></span>\n        <div class="atk-text"></div>\n      </span>\n    </div>\n  </div>\n  <div class="atk-list-body"></div>\n  <div class="atk-list-footer">\n    <div class="atk-copyright"></div>\n  </div>\n</div>\n');
                super(e),
                    __publicField(this, "$closeCommentBtn"),
                    __publicField(this, "$openSidebarBtn"),
                    __publicField(this, "$unreadBadge"),
                    __publicField(this, "$commentCount"),
                    __publicField(this, "$commentCountNum"),
                    __publicField(this, "$dropdownWrap"),
                    __publicField(this, "goToCommentFounded", !1),
                    __publicField(this, "goToCommentDelay", !0),
                    t.querySelector(".atk-list-body").append(this.$el),
                    this.$el = t,
                    this.repositionAt = this.$el,
                    this.initListActionBtn();
                this.$commentCount = this.$el.querySelector(".atk-comment-count");
                const n = ()=>{
                        this.$commentCount.innerHTML = this.$t("counter", {
                            count: '<span class="atk-comment-count-num">0</span>'
                        }),
                            this.$commentCountNum = this.$commentCount.querySelector(".atk-comment-count-num")
                    }
                ;
                n(),
                    this.$el.querySelector(".atk-copyright").innerHTML = `Powered By <a href="https://artalk.js.org" target="_blank" title="Artalk v ${ot}">Artalk</a>`,
                    this.ctx.on("conf-loaded", (()=>{
                            n(),
                                this.refreshUI()
                        }
                    ))
            }
            initListActionBtn() {
                this.$openSidebarBtn = this.$el.querySelector('[data-action="open-sidebar"]'),
                    this.$closeCommentBtn = this.$el.querySelector('[data-action="admin-close-comment"]'),
                    this.$unreadBadge = this.$el.querySelector(".atk-unread-badge"),
                    this.$openSidebarBtn.addEventListener("click", (()=>{
                            this.ctx.showSidebar()
                        }
                    )),
                    this.$closeCommentBtn.addEventListener("click", (()=>{
                            this.data && (this.data.page.admin_only = !this.data.page.admin_only,
                                this.adminPageEditSave())
                        }
                    ))
            }
            refreshUI() {
                var e;
                super.refreshUI(),
                    this.$commentCountNum.innerText = String(Number(null == (e = this.data) ? void 0 : e.total) || 0),
                    lt.data.nick && lt.data.email ? this.$openSidebarBtn.classList.remove("atk-hide") : this.$openSidebarBtn.classList.add("atk-hide"),
                    this.$openSidebarBtn.querySelector(".atk-text").innerText = lt.data.isAdmin ? this.$t("ctrlCenter") : this.$t("msgCenter"),
                    this.data && this.data.page && !0 === this.data.page.admin_only ? (this.ctx.editorClose(),
                        this.$closeCommentBtn.innerHTML = this.$t("openComment")) : (this.ctx.editorOpen(),
                        this.$closeCommentBtn.innerHTML = this.$t("closeComment")),
                    this.ctx.conf.listSort ? this.initDropdown() : function(e) {
                        var t, n;
                        const {$dropdownWrap: i} = e;
                        i.classList.remove("atk-dropdown-wrap"),
                        null == (t = i.querySelector(".atk-arrow-down-icon")) || t.remove(),
                        null == (n = i.querySelector(".atk-dropdown")) || n.remove()
                    }({
                        $dropdownWrap: this.$commentCount
                    })
            }
            onLoad(e, t) {
                super.onLoad(e, t),
                this.goToCommentFounded || this.checkGoToCommentByUrlHash(),
                !0 === this.ctx.conf.editorTravel && this.ctx.editorTravelBack()
            }
            checkGoToCommentByUrlHash() {
                var e;
                let t = Number(a("atk_comment"));
                if (!t) {
                    const e = window.location.hash.match(/#atk-comment-([0-9]+)/);
                    if (!e || !e[1] || Number.isNaN(Number(e[1])))
                        return;
                    t = Number(e[1])
                }
                if (!t)
                    return;
                const n = this.ctx.findComment(t);
                if (!n)
                    return void (null == (e = this.pgHolder) || e.next());
                const i = a("atk_notify_key");
                i && this.ctx.getApi().user.markRead(t, i).then((()=>{
                        this.unread = this.unread.filter((e=>e.comment_id !== t)),
                            this.updateUnread(this.unread)
                    }
                )),
                    n.getParents().forEach((e=>{
                            e.getRender().heightLimitRemoveForChildren()
                        }
                    ));
                const s = ()=>{
                        k(n.getEl(), !1),
                            n.getEl().classList.remove("atk-flash-once"),
                            window.setTimeout((()=>{
                                    n.getEl().classList.add("atk-flash-once")
                                }
                            ), 150)
                    }
                ;
                this.goToCommentDelay ? window.setTimeout((()=>s()), 350) : s(),
                    this.goToCommentFounded = !0,
                    this.goToCommentDelay = !0
            }
            adminPageEditSave() {
                this.data && this.data.page && (this.ctx.editorShowLoading(),
                    this.ctx.getApi().page.pageEdit(this.data.page).then((e=>{
                            this.data && (this.data.page = __spreadValues({}, e)),
                                this.refreshUI()
                        }
                    )).catch((e=>{
                            this.ctx.editorShowNotify(`${this.$t("editFail")}: ${e.msg || String(e)}`, "e")
                        }
                    )).finally((()=>{
                            this.ctx.editorHideLoading()
                        }
                    )))
            }
            showUnreadBadge(e) {
                e > 0 ? (this.$unreadBadge.innerText = `${Number(e || 0)}`,
                    this.$unreadBadge.style.display = "block") : this.$unreadBadge.style.display = "none"
            }
            initDropdown() {
                const e = e=>{
                        this.paramsEditor = e,
                            this.fetchComments(0)
                    }
                ;
                Ut({
                    $dropdownWrap: this.$commentCount,
                    dropdownList: [[this.$t("sortLatest"), ()=>{
                        e((e=>{
                                e.sort_by = "date_desc"
                            }
                        ))
                    }
                    ], [this.$t("sortBest"), ()=>{
                        e((e=>{
                                e.sort_by = "vote"
                            }
                        ))
                    }
                    ], [this.$t("sortOldest"), ()=>{
                        e((e=>{
                                e.sort_by = "date_asc"
                            }
                        ))
                    }
                    ], [this.$t("sortAuthor"), ()=>{
                        e((e=>{
                                e.view_only_admin = !0
                            }
                        ))
                    }
                    ]]
                })
            }
            updateUnread(e) {
                super.updateUnread(e),
                    this.showUnreadBadge((null == e ? void 0 : e.length) || 0)
            }
        }
        class Nt {
            constructor(e, t) {
                __publicField(this, "conf"),
                    __publicField(this, "$root"),
                    __publicField(this, "markedReplacers", []),
                    __publicField(this, "commentList", []),
                    __publicField(this, "eventList", []),
                    this.conf = e,
                    this.$root = t || document.createElement("div"),
                    this.$root.classList.add("artalk"),
                    this.$root.innerHTML = ""
            }
            inject(e, t) {
                this[e] = t
            }
            get(e) {
                return this[e]
            }
            getApi() {
                return this.api
            }
            getCommentList() {
                return this.commentList
            }
            getCommentDataList() {
                return this.commentList.map((e=>e.getData()))
            }
            findComment(e) {
                return this.commentList.find((t=>t.getData().id === e))
            }
            deleteComment(e) {
                let t;
                if ("number" == typeof e) {
                    const n = this.findComment(e);
                    if (!n)
                        throw Error(`Comment ${e} cannot be found`);
                    t = n
                } else
                    t = e;
                if (t.getEl().remove(),
                    this.commentList.splice(this.commentList.indexOf(t), 1),
                    this.list) {
                    const e = this.list.getData();
                    e && (e.total -= 1),
                        this.list.refreshUI()
                }
            }
            clearAllComments() {
                this.list && (this.list.getCommentsWrapEl().innerHTML = "",
                    this.list.clearData()),
                    this.commentList = []
            }
            insertComment(e) {
                var t;
                null == (t = this.list) || t.insertComment(e)
            }
            updateComment(e) {
                var t;
                null == (t = this.list) || t.updateComment(e)
            }
            replyComment(e, t, n) {
                this.editor.setReply(e, t, n)
            }
            cancelReplyComment() {
                this.editor.cancelReply()
            }
            editComment(e, t) {
                this.editor.setEditComment(e, t)
            }
            cancelEditComment() {
                this.editor.cancelEditComment()
            }
            updateNotifies(e) {
                var t;
                null == (t = this.list) || t.updateUnread(e)
            }
            listReload() {
                var e;
                null == (e = this.list) || e.reload()
            }
            reload() {
                this.listReload()
            }
            listRefreshUI() {
                var e;
                null == (e = this.list) || e.refreshUI()
            }
            listHashGotoCheck() {
                if (!(this.list && this.list instanceof Wt))
                    return;
                const e = this.list;
                e.goToCommentDelay = !1,
                    e.checkGoToCommentByUrlHash()
            }
            editorOpen() {
                this.editor.open()
            }
            editorClose() {
                this.editor.close()
            }
            editorShowLoading() {
                this.editor.showLoading()
            }
            editorHideLoading() {
                this.editor.hideLoading()
            }
            editorShowNotify(e, t) {
                this.editor.showNotify(e, t)
            }
            editorTravel(e) {
                this.editor.travel(e)
            }
            editorTravelBack() {
                this.editor.travelBack()
            }
            showSidebar(e) {
                this.sidebarLayer.show(e)
            }
            hideSidebar() {
                this.sidebarLayer.hide()
            }
            checkAdmin(e) {
                this.checkerLauncher.checkAdmin(e)
            }
            checkCaptcha(e) {
                this.checkerLauncher.checkCaptcha(e)
            }
            checkAdminShowEl() {
                const e = [];
                this.$root.querySelectorAll("[atk-only-admin-show]").forEach((t=>e.push(t)));
                const {$wrap: t} = v();
                t && t.querySelectorAll("[atk-only-admin-show]").forEach((t=>e.push(t)));
                const n = document.querySelector(".atk-sidebar");
                n && n.querySelectorAll("[atk-only-admin-show]").forEach((t=>e.push(t))),
                    e.forEach((e=>{
                            this.user.data.isAdmin ? e.classList.remove("atk-hide") : e.classList.add("atk-hide")
                        }
                    ))
            }
            on(e, t, n="internal") {
                this.eventList.push({
                    name: e,
                    handler: t,
                    scope: n
                })
            }
            off(e, t, n="internal") {
                this.eventList = this.eventList.filter((i=>t ? !(i.name === e && i.handler === t && i.scope === n) : !(i.name === e && i.scope === n)))
            }
            trigger(e, t, n) {
                this.eventList.filter((t=>t.name === e && (!n || t.scope === n))).map((e=>e.handler)).forEach((e=>e(t)))
            }
            $t(e, t={}) {
                return at(e, t)
            }
            setDarkMode(e) {
                T(this, e)
            }
            updateConf(e) {
                this.conf = p(this.conf, e),
                    this.trigger("conf-loaded")
            }
            getMarkedInstance() {
                return Ye()
            }
        }
        class Ht {
            constructor(e, t) {
                return __publicField(this, "ctx"),
                    __publicField(this, "$el"),
                    __publicField(this, "$content"),
                    __publicField(this, "$actions"),
                    this.ctx = e,
                    this.$el = s('<div class="atk-layer-dialog-wrap">\n        <div class="atk-layer-dialog">\n          <div class="atk-layer-dialog-content"></div>\n          <div class="atk-layer-dialog-actions"></div>\n        </div>\n      </div>'),
                    this.$actions = this.$el.querySelector(".atk-layer-dialog-actions"),
                    this.$content = this.$el.querySelector(".atk-layer-dialog-content"),
                    this.$content.appendChild(t),
                    this
            }
            setYes(e) {
                const t = s(`<button data-action="confirm">${this.ctx.$t("confirm")}</button>`);
                return t.onclick = this.onBtnClick(e),
                    this.$actions.appendChild(t),
                    this
            }
            setNo(e) {
                const t = s(`<button data-action="cancel">${this.ctx.$t("cancel")}</button>`);
                return t.onclick = this.onBtnClick(e),
                    this.$actions.appendChild(t),
                    this
            }
            onBtnClick(e) {
                return t=>{
                    const n = e(t.currentTarget, this);
                    void 0 !== n && !0 !== n || this.$el.remove()
                }
            }
        }
        function Vt(e) {
            const t = s('<div class="atk-checker-iframe-wrap"></div>')
                , n = s('<iframe class="atk-fade-in"></iframe>');
            n.style.display = "none",
                g(t, {
                    transparentBg: !0
                }),
                n.src = `${e.getCtx().conf.server}/api/captcha/get?t=${+new Date}`,
                n.onload = ()=>{
                    n.style.display = "",
                        f(t)
                }
                ,
                t.append(n);
            const i = s('<div class="atk-close-btn"><i class="atk-icon atk-icon-close"></i></div>');
            t.append(i),
                e.hideInteractInput();
            let r = !1;
            return function t() {
                return __async(this, null, (function*() {
                        var n;
                        if (yield(n = 1e3,
                            new Promise((e=>{
                                    window.setTimeout((()=>{
                                            e(null)
                                        }
                                    ), n)
                                }
                            ))),
                            r)
                            return;
                        let i = !1;
                        try {
                            i = (yield e.getCtx().getApi().captcha.captchaStatus()).is_pass
                        } catch (s) {
                            i = !1
                        }
                        i ? e.triggerSuccess() : t()
                    }
                ))
            }(),
                i.onclick = ()=>{
                    r = !0,
                        e.cancel()
                }
                ,
                t
        }
        const Qt = {
            request: (e,t)=>e.getApi().captcha.captchaCheck(t),
            body: e=>e.get("iframe") ? Vt(e) : function(e) {
                const t = s(`<span><img class="atk-captcha-img" src="${e.get("img_data") || ""}">${e.getCtx().$t("captchaCheck")}</span>`);
                return t.querySelector(".atk-captcha-img").onclick = ()=>{
                    const n = t.querySelector(".atk-captcha-img");
                    e.getApi().captcha.captchaGet().then((e=>{
                            n.setAttribute("src", e)
                        }
                    )).catch((e=>{
                            console.error("Failed to get captcha image ", e)
                        }
                    ))
                }
                    ,
                    t
            }(e),
            onSuccess(e, t, n, i) {
                e.set("val", n)
            },
            onError(e, t, n, i) {
                i.querySelector(".atk-captcha-img").click(),
                    i.querySelector('input[type="text"]').value = ""
            }
        }
            , Zt = {
            inputType: "password",
            request(e, t) {
                const n = {
                    name: lt.data.nick,
                    email: lt.data.email,
                    password: t
                };
                return (()=>__async(this, null, (function*() {
                        return (yield e.getApi().user.login(n.name, n.email, n.password)).token
                    }
                )))()
            },
            body: e=>s(`<span>${e.getCtx().$t("adminCheck")}</span>`),
            onSuccess(e, t, n, i) {
                lt.update({
                    isAdmin: !0,
                    token: t
                }),
                    e.getCtx().trigger("user-changed", lt.data),
                    e.getCtx().listReload()
            },
            onError(e, t, n, i) {}
        };
        class Gt {
            constructor(e) {
                __publicField(this, "ctx"),
                    __publicField(this, "launched", []),
                    this.ctx = e
            }
            checkCaptcha(e) {
                this.fire(Qt, e, (t=>{
                        t.set("img_data", e.imgData),
                            t.set("iframe", e.iframe)
                    }
                ))
            }
            checkAdmin(e) {
                this.fire(Zt, e)
            }
            fire(e, t, n) {
                if (this.launched.includes(e))
                    return;
                this.launched.push(e);
                const i = new x(this.ctx,`checker-${(new Date).getTime()}`);
                i.setMaskClickHide(!1),
                    i.show();
                const r = {};
                let a = !1;
                const o = {
                    set: (e,t)=>{
                        r[e] = t
                    }
                    ,
                    get: e=>r[e],
                    getCtx: ()=>this.ctx,
                    getApi: ()=>this.ctx.getApi(),
                    getLayer: ()=>i,
                    hideInteractInput: ()=>{
                        a = !0
                    }
                    ,
                    triggerSuccess: ()=>{
                        this.close(e, i),
                        e.onSuccess && e.onSuccess(o, "", "", l),
                        t.onSuccess && t.onSuccess("", h.$el)
                    }
                    ,
                    cancel: ()=>{
                        this.close(e, i),
                        t.onCancel && t.onCancel()
                    }
                };
                n && n(o);
                const l = s();
                l.appendChild(e.body(o));
                const c = s(`<input id="check" type="${e.inputType || "text"}" autocomplete="off" required placeholder="">`);
                let d;
                l.appendChild(c),
                    setTimeout((()=>c.focus()), 80),
                    c.onkeyup = e=>{
                        "Enter" !== e.key && 13 !== e.keyCode || (e.preventDefault(),
                            i.getEl().querySelector('button[data-action="confirm"]').click())
                    }
                ;
                const h = new Ht(this.ctx,l);
                h.setYes((n=>{
                        const s = c.value.trim();
                        d || (d = n.innerText);
                        const r = ()=>{
                                n.innerText = d || "",
                                    n.classList.remove("error")
                            }
                        ;
                        return n.innerText = `${this.ctx.$t("loading")}...`,
                            e.request(o, s).then((n=>{
                                    this.close(e, i),
                                    e.onSuccess && e.onSuccess(o, n, s, l),
                                    t.onSuccess && t.onSuccess(s, h.$el)
                                }
                            )).catch((t=>{
                                    var i;
                                    i = String(t.msg || String(t)),
                                        n.innerText = i,
                                        n.classList.add("error"),
                                    e.onError && e.onError(o, t, s, l);
                                    const a = setTimeout((()=>r()), 3e3);
                                    c.onfocus = ()=>{
                                        r(),
                                            clearTimeout(a)
                                    }
                                }
                            )),
                            !1
                    }
                )),
                    h.setNo((()=>(this.close(e, i),
                    t.onCancel && t.onCancel(),
                        !1))),
                a && (c.style.display = "none",
                    h.$el.querySelector(".atk-layer-dialog-actions").style.display = "none"),
                    i.getEl().append(h.$el),
                t.onMount && t.onMount(h.$el)
            }
            close(e, t) {
                t.disposeNow(),
                    this.launched = this.launched.filter((t=>t !== e))
            }
        }
        function Kt(e, t, n, i) {
            return __async(this, null, (function*() {
                    var s, r;
                    if (lt.data.token) {
                        const e = new Headers(n.headers);
                        e.set("Authorization", `Bearer ${lt.data.token}`),
                            n.headers = e
                    }
                    const a = yield function(e, t, n, i) {
                        var s;
                        const r = new AbortController;
                        null == (s = i.signal) || s.addEventListener("abort", (()=>r.abort()));
                        let a = fetch(t, __spreadProps(__spreadValues({}, i), {
                            signal: r.signal
                        }));
                        if (n > 0) {
                            const e = setTimeout((()=>r.abort()), n);
                            a.finally((()=>{
                                    clearTimeout(e)
                                }
                            ))
                        }
                        return a = a.catch((e=>{
                                throw "AbortError" === (e || {}).name ? new Error(at("reqAborted")) : e
                            }
                        )),
                            a
                    }(0, t, i || e.conf.reqTimeout || 15e3, n)
                        , o = a.status
                        , l = [401, 400].includes(o);
                    if (!a.ok && !l)
                        throw new Error(`${at("reqGot")} ${o}`);
                    let c = yield a.json();
                    const d = (i,s)=>{
                            Kt(e, t, n).then((e=>{
                                    i(e)
                                }
                            )).catch((e=>{
                                    s(e)
                                }
                            ))
                        }
                    ;
                    if ((null == (s = c.data) ? void 0 : s.need_captcha) ? c = yield new Promise(((t,n)=>{
                            e.checkCaptcha({
                                imgData: c.data.img_data,
                                iframe: c.data.iframe,
                                onSuccess: ()=>{
                                    d(t, n)
                                }
                                ,
                                onCancel: ()=>{
                                    n(c)
                                }
                            })
                        }
                    )) : ((null == (r = c.data) ? void 0 : r.need_login) || l) && (c = yield new Promise(((t,n)=>{
                            e.checkAdmin({
                                onSuccess: ()=>{
                                    d(t, n)
                                }
                                ,
                                onCancel: ()=>{
                                    n(c)
                                }
                            })
                        }
                    ))),
                        !c.success)
                        throw c;
                    return c
                }
            ))
        }
        function Yt(e) {
            const t = new FormData;
            return Object.keys(e).forEach((n=>t.append(n, String(e[n])))),
                t
        }
        !function() {
            function e(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                    "value"in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            function n(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    e
            }
            function i(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                t && r(e, t)
            }
            function s(e) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }
                )(e)
            }
            function r(e, t) {
                return (r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t,
                            e
                    }
                )(e, t)
            }
            function a() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }
            function o(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function l(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return o(e)
            }
            function c(e) {
                var t = a();
                return function() {
                    var n, i = s(e);
                    if (t) {
                        var r = s(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else
                        n = i.apply(this, arguments);
                    return l(this, n)
                }
            }
            function d(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = s(e)); )
                    ;
                return e
            }
            function h() {
                return h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
                    var i = d(e, t);
                    if (i) {
                        var s = Object.getOwnPropertyDescriptor(i, t);
                        return s.get ? s.get.call(arguments.length < 3 ? e : n) : s.value
                    }
                }
                    ,
                    h.apply(this, arguments)
            }
            var u = function() {
                function t() {
                    e(this, t),
                        Object.defineProperty(this, "listeners", {
                            value: {},
                            writable: !0,
                            configurable: !0
                        })
                }
                return n(t, [{
                    key: "addEventListener",
                    value: function(e, t, n) {
                        e in this.listeners || (this.listeners[e] = []),
                            this.listeners[e].push({
                                callback: t,
                                options: n
                            })
                    }
                }, {
                    key: "removeEventListener",
                    value: function(e, t) {
                        if (e in this.listeners)
                            for (var n = this.listeners[e], i = 0, s = n.length; i < s; i++)
                                if (n[i].callback === t)
                                    return void n.splice(i, 1)
                    }
                }, {
                    key: "dispatchEvent",
                    value: function(e) {
                        if (e.type in this.listeners) {
                            for (var t = this.listeners[e.type].slice(), n = 0, i = t.length; n < i; n++) {
                                var s = t[n];
                                try {
                                    s.callback.call(this, e)
                                } catch (r) {
                                    Promise.resolve().then((function() {
                                            throw r
                                        }
                                    ))
                                }
                                s.options && s.options.once && this.removeEventListener(e.type, s.callback)
                            }
                            return !e.defaultPrevented
                        }
                    }
                }]),
                    t
            }()
                , p = function(t) {
                i(a, t);
                var r = c(a);
                function a() {
                    var t;
                    return e(this, a),
                    (t = r.call(this)).listeners || u.call(o(t)),
                        Object.defineProperty(o(t), "aborted", {
                            value: !1,
                            writable: !0,
                            configurable: !0
                        }),
                        Object.defineProperty(o(t), "onabort", {
                            value: null,
                            writable: !0,
                            configurable: !0
                        }),
                        Object.defineProperty(o(t), "reason", {
                            value: void 0,
                            writable: !0,
                            configurable: !0
                        }),
                        t
                }
                return n(a, [{
                    key: "toString",
                    value: function() {
                        return "[object AbortSignal]"
                    }
                }, {
                    key: "dispatchEvent",
                    value: function(e) {
                        "abort" === e.type && (this.aborted = !0,
                        "function" == typeof this.onabort && this.onabort.call(this, e)),
                            h(s(a.prototype), "dispatchEvent", this).call(this, e)
                    }
                }]),
                    a
            }(u)
                , m = function() {
                function t() {
                    e(this, t),
                        Object.defineProperty(this, "signal", {
                            value: new p,
                            writable: !0,
                            configurable: !0
                        })
                }
                return n(t, [{
                    key: "abort",
                    value: function(e) {
                        var t;
                        try {
                            t = new Event("abort")
                        } catch (i) {
                            "undefined" != typeof document ? document.createEvent ? (t = document.createEvent("Event")).initEvent("abort", !1, !1) : (t = document.createEventObject()).type = "abort" : t = {
                                type: "abort",
                                bubbles: !1,
                                cancelable: !1
                            }
                        }
                        var n = e;
                        if (void 0 === n)
                            if ("undefined" == typeof document)
                                (n = new Error("This operation was aborted")).name = "AbortError";
                            else
                                try {
                                    n = new DOMException("signal is aborted without reason")
                                } catch (s) {
                                    (n = new Error("This operation was aborted")).name = "AbortError"
                                }
                        this.signal.reason = n,
                            this.signal.dispatchEvent(t)
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return "[object AbortController]"
                    }
                }]),
                    t
            }();
            function g(e) {
                return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),
                    !0) : "function" == typeof e.Request && !e.Request.prototype.hasOwnProperty("signal") || !e.AbortController
            }
            function f(e) {
                "function" == typeof e && (e = {
                    fetch: e
                });
                var t = e
                    , n = t.fetch
                    , i = t.Request
                    , s = void 0 === i ? n.Request : i
                    , r = t.AbortController
                    , a = t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
                    , o = void 0 !== a && a;
                if (!g({
                    fetch: n,
                    Request: s,
                    AbortController: r,
                    __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: o
                }))
                    return {
                        fetch: n,
                        Request: l
                    };
                var l = s;
                (l && !l.prototype.hasOwnProperty("signal") || o) && ((l = function(e, t) {
                        var n;
                        t && t.signal && (n = t.signal,
                            delete t.signal);
                        var i = new s(e,t);
                        return n && Object.defineProperty(i, "signal", {
                            writable: !1,
                            enumerable: !1,
                            configurable: !0,
                            value: n
                        }),
                            i
                    }
                ).prototype = s.prototype);
                var c = n;
                return {
                    fetch: function(e, t) {
                        var n = l && l.prototype.isPrototypeOf(e) ? e.signal : t ? t.signal : void 0;
                        if (n) {
                            var i;
                            try {
                                i = new DOMException("Aborted","AbortError")
                            } catch (r) {
                                (i = new Error("Aborted")).name = "AbortError"
                            }
                            if (n.aborted)
                                return Promise.reject(i);
                            var s = new Promise((function(e, t) {
                                    n.addEventListener("abort", (function() {
                                            return t(i)
                                        }
                                    ), {
                                        once: !0
                                    })
                                }
                            ));
                            return t && t.signal && delete t.signal,
                                Promise.race([s, c(e, t)])
                        }
                        return c(e, t)
                    },
                    Request: l
                }
            }
            "undefined" != typeof Symbol && Symbol.toStringTag && (m.prototype[Symbol.toStringTag] = "AbortController",
                p.prototype[Symbol.toStringTag] = "AbortSignal"),
                function(e) {
                    if (g(e))
                        if (e.fetch) {
                            var t = f(e)
                                , n = t.fetch
                                , i = t.Request;
                            e.fetch = n,
                                e.Request = i,
                                Object.defineProperty(e, "AbortController", {
                                    writable: !0,
                                    enumerable: !1,
                                    configurable: !0,
                                    value: m
                                }),
                                Object.defineProperty(e, "AbortSignal", {
                                    writable: !0,
                                    enumerable: !1,
                                    configurable: !0,
                                    value: p
                                })
                        } else
                            console.warn("fetch() is not available, cannot install abortcontroller-polyfill")
                }("undefined" != typeof self ? self : pe)
        }();
        class Xt {
            constructor(e, t) {
                __publicField(this, "api"),
                    __publicField(this, "ctx"),
                    this.api = e,
                    this.ctx = t
            }
            POST(e, t) {
                return __async(this, null, (function*() {
                        return function(e, t, n) {
                            return __async(this, null, (function*() {
                                    const i = {
                                        method: "POST"
                                    };
                                    return n = __spreadValues({
                                        site_name: e.conf.site || ""
                                    }, n || {}),
                                        i.body = Yt(n),
                                    (yield Kt(e, t, i)).data || {}
                                }
                            ))
                        }(this.ctx, this.api.baseURL + e, t)
                    }
                ))
            }
            Fetch(e, t, n) {
                return __async(this, null, (function*() {
                        return Kt(this.ctx, this.api.baseURL + e, t, n)
                    }
                ))
            }
        }
        const Jt = {
            comment: class extends Xt {
                get(e, t, n, i) {
                    const s = {
                        page_key: this.ctx.conf.pageKey,
                        site_name: this.ctx.conf.site || "",
                        limit: t,
                        offset: e
                    };
                    return n && (s.flat_mode = n),
                    lt.checkHasBasicUserInfo() && (s.name = lt.data.nick,
                        s.email = lt.data.email),
                    i && i(s),
                        this.POST("/get", s)
                }
                add(e) {
                    return __async(this, null, (function*() {
                            const t = {
                                name: e.nick,
                                email: e.email,
                                link: e.link,
                                content: e.content,
                                rid: e.rid,
                                page_key: e.page_key,
                                ua: yield d()
                            };
                            e.page_title && (t.page_title = e.page_title),
                            e.site_name && (t.site_name = e.site_name);
                            return (yield this.POST("/add", t)).comment
                        }
                    ))
                }
                commentEdit(e) {
                    return __async(this, null, (function*() {
                            const t = __spreadValues({}, e);
                            return (yield this.POST("/admin/comment-edit", t)).comment
                        }
                    ))
                }
                commentDel(e, t) {
                    const n = {
                        id: String(e),
                        site_name: t || ""
                    };
                    return this.POST("/admin/comment-del", n)
                }
                vote(e, t) {
                    return __async(this, null, (function*() {
                            const n = {
                                target_id: e,
                                type: t
                            };
                            lt.checkHasBasicUserInfo() && (n.name = lt.data.nick,
                                n.email = lt.data.email);
                            return yield this.POST("/vote", n)
                        }
                    ))
                }
            }
            ,
            page: class extends Xt {
                pageGet(e, t, n) {
                    return __async(this, null, (function*() {
                            const i = {
                                site_name: e || "",
                                offset: t || 0,
                                limit: n || 15
                            };
                            return yield this.POST("/admin/page-get", i)
                        }
                    ))
                }
                pageEdit(e) {
                    return __async(this, null, (function*() {
                            const t = {
                                id: e.id,
                                key: e.key,
                                title: e.title,
                                admin_only: e.admin_only,
                                site_name: e.site_name || this.ctx.conf.site
                            };
                            return (yield this.POST("/admin/page-edit", t)).page
                        }
                    ))
                }
                pageDel(e, t) {
                    const n = {
                        key: String(e),
                        site_name: t || ""
                    };
                    return this.POST("/admin/page-del", n)
                }
                pageFetch(e, t, n) {
                    return __async(this, null, (function*() {
                            const i = {};
                            e && (i.id = e),
                            t && (i.site_name = t),
                            n && (i.get_status = n);
                            return yield this.POST("/admin/page-fetch", i)
                        }
                    ))
                }
                pv() {
                    return __async(this, null, (function*() {
                            const e = {
                                page_key: this.ctx.conf.pageKey || "",
                                page_title: this.ctx.conf.pageTitle || ""
                            };
                            return (yield this.POST("/pv", e)).pv
                        }
                    ))
                }
                stat(e, t, n) {
                    return __async(this, null, (function*() {
                            const i = {
                                type: e
                            };
                            t && (i.page_keys = Array.isArray(t) ? t.join(",") : t),
                            n && (i.limit = n);
                            return yield this.POST("/stat", i)
                        }
                    ))
                }
            }
            ,
            site: class extends Xt {
                siteGet() {
                    return __async(this, null, (function*() {
                            return (yield this.POST("/admin/site-get", {})).sites
                        }
                    ))
                }
                siteAdd(e, t) {
                    return __async(this, null, (function*() {
                            const n = {
                                name: e,
                                urls: t,
                                site_name: ""
                            };
                            return (yield this.POST("/admin/site-add", n)).site
                        }
                    ))
                }
                siteEdit(e) {
                    return __async(this, null, (function*() {
                            const t = {
                                id: e.id,
                                name: e.name || "",
                                urls: e.urls || ""
                            };
                            return (yield this.POST("/admin/site-edit", t)).site
                        }
                    ))
                }
                siteDel(e, t=!1) {
                    const n = {
                        id: e,
                        del_content: t
                    };
                    return this.POST("/admin/site-del", n)
                }
                export() {
                    return __async(this, null, (function*() {
                            var e;
                            return (null == (e = (yield this.Fetch("/admin/export", {
                                method: "POST"
                            }, 0)).data) ? void 0 : e.data) || ""
                        }
                    ))
                }
            }
            ,
            user: class extends Xt {
                login(e, t, n) {
                    return __async(this, null, (function*() {
                            const i = {
                                name: e,
                                email: t,
                                password: n
                            };
                            return yield this.POST("/login", i)
                        }
                    ))
                }
                userGet(e, t) {
                    const n = new AbortController
                        , i = {
                        name: e,
                        email: t
                    };
                    return {
                        req: this.Fetch("/user-get", {
                            method: "POST",
                            body: Yt(i),
                            signal: n.signal
                        }).then((e=>({
                            user: e.data.user,
                            is_login: e.data.is_login,
                            unread: e.data.unread || [],
                            unread_count: e.data.unread_count || 0
                        }))),
                        abort: ()=>{
                            n.abort()
                        }
                    }
                }
                loginStatus() {
                    return __async(this, null, (function*() {
                            return (yield this.POST("/login-status", {
                                name: lt.data.nick,
                                email: lt.data.email
                            })) || {
                                is_login: !1,
                                is_admin: !1
                            }
                        }
                    ))
                }
                logout() {
                    return __async(this, null, (function*() {
                            return this.POST("/logout")
                        }
                    ))
                }
                markRead(e, t, n=!1) {
                    const i = {
                        comment_id: e,
                        notify_key: t
                    };
                    return n && (delete i.comment_id,
                        delete i.notify_key,
                        i.read_all = !0,
                        i.name = lt.data.nick,
                        i.email = lt.data.email),
                        this.POST("/mark-read", i)
                }
                userList(e, t, n) {
                    return __async(this, null, (function*() {
                            const i = {
                                offset: e || 0,
                                limit: t || 15
                            };
                            n && (i.type = n);
                            return yield this.POST("/admin/user-get", i)
                        }
                    ))
                }
                userAdd(e, t) {
                    return __async(this, null, (function*() {
                            const n = {
                                name: e.name || "",
                                email: e.email || "",
                                password: t || "",
                                link: e.link || "",
                                is_admin: e.is_admin || !1,
                                site_names: e.site_names_raw || "",
                                receive_email: e.receive_email || !0,
                                badge_name: e.badge_name || "",
                                badge_color: e.badge_color || ""
                            };
                            return (yield this.POST("/admin/user-add", n)).user
                        }
                    ))
                }
                userEdit(e, t) {
                    return __async(this, null, (function*() {
                            const n = {
                                id: e.id,
                                name: e.name || "",
                                email: e.email || "",
                                password: t || "",
                                link: e.link || "",
                                is_admin: e.is_admin || !1,
                                site_names: e.site_names_raw || "",
                                receive_email: e.receive_email || !0,
                                badge_name: e.badge_name || "",
                                badge_color: e.badge_color || ""
                            };
                            return (yield this.POST("/admin/user-edit", n)).user
                        }
                    ))
                }
                userDel(e) {
                    return this.POST("/admin/user-del", {
                        id: String(e)
                    })
                }
            }
            ,
            system: class extends Xt {
                conf() {
                    return __async(this, null, (function*() {
                            return zt((yield this.POST("/conf")).frontend_conf || {})
                        }
                    ))
                }
                getSettings() {
                    return __async(this, null, (function*() {
                            return yield this.POST("/admin/setting-get")
                        }
                    ))
                }
                saveSettings(e) {
                    return __async(this, null, (function*() {
                            return yield this.POST("/admin/setting-save", {
                                data: e
                            })
                        }
                    ))
                }
                version() {
                    return __async(this, null, (function*() {
                            const e = yield fetch(`${this.api.baseURL}/version`, {
                                method: "POST"
                            });
                            return yield e.json()
                        }
                    ))
                }
            }
            ,
            captcha: class extends Xt {
                captchaGet() {
                    return __async(this, null, (function*() {
                            return (yield this.POST("/captcha/refresh")).img_data || ""
                        }
                    ))
                }
                captchaCheck(e) {
                    return __async(this, null, (function*() {
                            return (yield this.POST("/captcha/check", {
                                value: e
                            })).img_data || ""
                        }
                    ))
                }
                captchaStatus() {
                    return __async(this, null, (function*() {
                            return (yield this.POST("/captcha/status")) || {
                                is_pass: !1
                            }
                        }
                    ))
                }
            }
            ,
            admin: class extends Xt {
                cacheFlushAll() {
                    return this.POST("/admin/cache-flush", {
                        flush_all: !0
                    })
                }
                cacheWarmUp() {
                    return this.POST("/admin/cache-warm", {})
                }
            }
            ,
            upload: class extends Xt {
                imgUpload(e) {
                    return __async(this, null, (function*() {
                            const t = Yt({
                                name: lt.data.nick,
                                email: lt.data.email,
                                page_key: this.ctx.conf.pageKey
                            });
                            t.set("file", e);
                            const n = {
                                method: "POST",
                                body: t
                            };
                            return (yield this.Fetch("/img-upload", n)).data || {}
                        }
                    ))
                }
            }
        };
        class en {
            constructor(e) {
                __publicField(this, "ctx"),
                    this.ctx = e,
                    Object.entries(Jt).forEach((([e,t])=>{
                            this[e] = new t(this,this.ctx)
                        }
                    ))
            }
            get baseURL() {
                return `${this.ctx.conf.server}/api`
            }
        }
        function tn(e) {
            const t = {
                editor: e,
                isMoved: !1,
                move: e=>function(e, t) {
                    if (e.isMoved)
                        return;
                    e.isMoved = !0;
                    const n = e.editor.getUI().$el;
                    n.after(s('<div class="atk-editor-travel-placeholder"></div>'));
                    const i = s("<div></div>");
                    t.after(i),
                        i.replaceWith(n),
                        n.classList.add("atk-fade-in")
                }(t, e),
                back: ()=>function(e) {
                    var t;
                    if (!e.isMoved)
                        return;
                    e.isMoved = !1,
                    null == (t = e.editor.ctx.$root.querySelector(".atk-editor-travel-placeholder")) || t.replaceWith(e.editor.getUI().$el),
                        e.editor.cancelReply()
                }(t)
            };
            return t
        }
        class nn {
            constructor(e) {
                __publicField(this, "editor"),
                    __publicField(this, "$panel"),
                    __publicField(this, "$btn"),
                    __publicField(this, "onHeaderInput"),
                    __publicField(this, "contentTransformer"),
                    __publicField(this, "onContentUpdated"),
                    this.editor = e
            }
            get ctx() {
                return this.editor.ctx
            }
            registerPanel(e="<div></div>") {
                return this.$panel = s(e),
                    this.$panel
            }
            registerBtn(e) {
                return this.$btn = s(`<span class="atk-plug-btn" data-plug-name="${this.constructor.name}">${e}</span>`),
                    this.$btn
            }
            registerHeaderInputEvt(e) {
                this.onHeaderInput = e
            }
            registerContentTransformer(e) {
                this.contentTransformer = e
            }
            registerContentUpdatedEvt(e) {
                this.onContentUpdated = e
            }
            getPanel() {
                return this.$panel
            }
            getBtn() {
                return this.$btn
            }
        }
        __publicField(nn, "Name");
        class sn extends nn {
            constructor(e) {
                super(e),
                    __publicField(this, "emoticons", []),
                    __publicField(this, "loadingTask", null),
                    __publicField(this, "$grpWrap"),
                    __publicField(this, "$grpSwitcher"),
                    __publicField(this, "isListLoaded", !1),
                    __publicField(this, "isImgLoaded", !1),
                    this.editor = e,
                    this.registerPanel('<div class="atk-editor-plug-emoticons"></div>'),
                    this.registerBtn(this.ctx.$t("emoticon")),
                    this.registerContentTransformer((e=>this.transEmoticonImageText(e))),
                    window.setTimeout((()=>{
                            this.loadEmoticonsData()
                        }
                    ), 1e3)
            }
            onPanelShow() {
                (()=>{
                        __async(this, null, (function*() {
                                yield this.loadEmoticonsData(),
                                this.isImgLoaded || (this.initEmoticonsList(),
                                    this.isImgLoaded = !0),
                                    setTimeout((()=>{
                                            this.changeListHeight()
                                        }
                                    ), 30)
                            }
                        ))
                    }
                )()
            }
            onPanelHide() {
                this.$panel.parentElement.style.height = "",
                    this.$btn.classList.remove('active')
            }
            loadEmoticonsData() {
                return __async(this, null, (function*() {
                        this.isListLoaded || (null === this.loadingTask ? (this.loadingTask = (()=>__async(this, null, (function*() {
                                g(this.$panel),
                                    this.emoticons = yield this.handleData(this.ctx.conf.emoticons),
                                    f(this.$panel),
                                    this.loadingTask = null,
                                    this.isListLoaded = !0
                            }
                        )))(),
                            yield this.loadingTask) : yield this.loadingTask)
                    }
                ))
            }
            handleData(e) {
                return __async(this, null, (function*() {
                        if (!Array.isArray(e) && ["object", "string"].includes(typeof e) && (e = [e]),
                            !Array.isArray(e))
                            return _(this.$panel, "表情包数据必须为 Array/Object/String 类型"),
                                f(this.$panel),
                                [];
                        const t = t=>{
                            "object" == typeof t && (t.name && e.find((e=>e.name === t.name)) || e.push(t))
                        }
                            , n = e=>__async(this, null, (function*() {
                                yield Promise.all(e.map(((e,i)=>__async(this, null, (function*() {
                                        if ("object" != typeof e || Array.isArray(e)) {
                                            if (Array.isArray(e))
                                                yield n(e);
                                            else if ("string" == typeof e) {
                                                const i = yield this.remoteLoad(e);
                                                Array.isArray(i) ? yield n(i) : "object" == typeof i && t(i)
                                            }
                                        } else
                                            t(e)
                                    }
                                )))))
                            }
                        ));
                        return yield n(e),
                            e.forEach((e=>{
                                    if (this.isOwOFormat(e)) {
                                        this.convertOwO(e).forEach((e=>{
                                                t(e)
                                            }
                                        ))
                                    } else
                                        Array.isArray(e) && e.forEach((e=>{
                                                t(e)
                                            }
                                        ))
                                }
                            )),
                            e = e.filter((e=>"object" == typeof e && !Array.isArray(e) && !!e && !!e.name)),
                            this.solveNullKey(e),
                            this.solveSameKey(e),
                            e
                    }
                ))
            }
            remoteLoad(e) {
                return __async(this, null, (function*() {
                        if (!e)
                            return [];
                        try {
                            const t = yield fetch(e);
                            return yield t.json()
                        } catch (t) {
                            return f(this.$panel),
                                _(this.$panel, `表情加载失败 ${String(t)}`),
                                []
                        }
                    }
                ))
            }
            solveNullKey(e) {
                e.forEach((e=>{
                        e.items.forEach(((t,n)=>{
                                t.key || (t.key = `${e.name} ${n + 1}`)
                            }
                        ))
                    }
                ))
            }
            solveSameKey(e) {
                const t = {};
                e.forEach((e=>{
                        e.items.forEach((e=>{
                                e.key && "" !== String(e.key).trim() && (t[e.key] ? t[e.key]++ : t[e.key] = 1,
                                t[e.key] > 1 && (e.key = `${e.key} ${t[e.key]}`))
                            }
                        ))
                    }
                ))
            }
            isOwOFormat(e) {
                try {
                    return "object" == typeof e && !!Object.values(e).length && Array.isArray(Object.keys(Object.values(e)[0].container)) && Object.keys(Object.values(e)[0].container[0]).includes("icon")
                } catch (t) {
                    return !1
                }
            }
            convertOwO(e) {
                const t = [];
                return Object.entries(e).forEach((([e,n])=>{
                        const i = {
                            name: e,
                            type: n.type,
                            items: []
                        };
                        n.container.forEach(((t,n)=>{
                                const s = t.icon;
                                if (/<(img|IMG)/.test(s)) {
                                    const e = /src=["'](.*?)["']/.exec(s);
                                    e && e.length > 1 && (t.icon = e[1])
                                }
                                i.items.push({
                                    key: t.text || `${e} ${n + 1}`,
                                    val: t.icon
                                })
                            }
                        )),
                            t.push(i)
                    }
                )),
                    t
            }
            initEmoticonsList() {
                this.$grpWrap = s('<div class="atk-grp-wrap"></div>'),
                    this.$panel.append(this.$grpWrap),
                    this.emoticons.forEach(((e,t)=>{
                            const n = s('<div class="atk-grp" style="display: none;"></div>');
                            this.$grpWrap.append(n),
                                n.setAttribute("data-index", String(t)),
                                n.setAttribute("data-grp-name", e.name),
                                n.setAttribute("data-type", e.type),
                                e.items.forEach((t=>{
                                        const i = s('<span class="atk-item"></span>');
                                        if (n.append(i),
                                        "image" === e.type) {
                                            const e = document.createElement("img");
                                            e.src = t.val,
                                                e.alt = t.key.replace(/\s[0-9]/i, ""),
                                                e.setAttribute("atk-emoticon", t.key),
                                            t.notitle && e.setAttribute("notitle", t.notitle),
                                                i.append(e)
                                        } else
                                            i.innerText = t.val;
                                        i.onclick = ()=>{
                                            "image" === e.type ? this.editor.insertContent(`:[${t.key}]`) : this.editor.insertContent(t.val || "")
                                        }
                                    }
                                ))
                        }
                    )),
                this.emoticons.length > 1 && (this.$grpSwitcher = s('<div class="atk-grp-switcher"></div>'),
                    this.$panel.append(this.$grpSwitcher),
                    this.emoticons.forEach(((e,t)=>{
                            const n = s("<span />");
                            n.innerText = e.name,
                                n.setAttribute("data-index", String(t)),
                                n.onclick = ()=>this.openGrp(t),
                                this.$grpSwitcher.append(n)
                        }
                    ))),
                this.emoticons.length > 0 && this.openGrp(0)
            }
            openGrp(e) {
                var t, n, i;
                Array.from(this.$grpWrap.children).forEach((t=>{
                        const n = t;
                        n.getAttribute("data-index") !== String(e) ? n.style.display = "none" : n.style.display = ""
                    }
                )),
                null == (t = this.$grpSwitcher) || t.querySelectorAll("span.active").forEach((e=>e.classList.remove("active"))),
                null == (i = null == (n = this.$grpSwitcher) ? void 0 : n.querySelector(`span[data-index="${e}"]`)) || i.classList.add("active"),
                    this.changeListHeight()
            }
            changeListHeight() {}
            transEmoticonImageText(e) {
                return this.emoticons && Array.isArray(this.emoticons) ? (this.emoticons.forEach((t=>{
                        "image" === t.type && Object.entries(t.items).forEach((([t,i])=>{
                                e = "true" === i.notitle ? e.split(`:[${i.key}]`).join(`<img src="${i.val}" atk-emoticon="${i.key}">`) : e.split(`:[${i.key}]`).join(`<img src="${i.val}" alt="${i.key.replace(/\s[0-9]/i, "")}" atk-emoticon="${i.key}">`)
                            }
                        ))
                    }
                )),
                    e) : e
            }
        }
        __publicField(sn, "Name", "emoticons");
        class rn extends nn {
            constructor(e) {
                super(e),
                    __publicField(this, "$imgUploadInput"),
                    __publicField(this, "allowImgExts", ["png", "jpg", "jpeg", "gif", "bmp", "svg", "webp"]),
                    this.$imgUploadInput = document.createElement("input"),
                    this.$imgUploadInput.type = "file",
                    this.$imgUploadInput.style.display = "none",
                    this.$imgUploadInput.accept = this.allowImgExts.map((e=>`.${e}`)).join(",");
                const t = this.registerBtn(`${this.ctx.$t("image")}`);
                t.after(this.$imgUploadInput),
                    t.onclick = ()=>{
                        const e = this.$imgUploadInput;
                        e.onchange = ()=>{
                            (()=>{
                                    __async(this, null, (function*() {
                                            if (!e.files || 0 === e.files.length)
                                                return;
                                            const t = e.files[0];
                                            this.uploadImg(t)
                                        }
                                    ))
                                }
                            )()
                        }
                            ,
                            e.click()
                    }
                    ,
                this.ctx.conf.imgUpload || this.getBtn().setAttribute("atk-only-admin-show", "");
                const n = e=>{
                        if (e)
                            for (let t = 0; t < e.length; t++) {
                                const n = e[t];
                                this.uploadImg(n)
                            }
                    }
                ;
                this.editor.getUI().$textarea.addEventListener("dragover", (e=>{
                        e.stopPropagation(),
                            e.preventDefault()
                    }
                )),
                    this.editor.getUI().$textarea.addEventListener("drop", (e=>{
                            var t;
                            const i = null == (t = e.dataTransfer) ? void 0 : t.files;
                            (null == i ? void 0 : i.length) && (e.preventDefault(),
                                n(i))
                        }
                    )),
                    this.editor.getUI().$textarea.addEventListener("paste", (e=>{
                            var t;
                            const i = null == (t = e.clipboardData) ? void 0 : t.files;
                            (null == i ? void 0 : i.length) && (e.preventDefault(),
                                n(i))
                        }
                    ))
            }
            uploadImg(e) {
                return __async(this, null, (function*() {
                        const t = /[^.]+$/.exec(e.name);
                        if (!t || !this.allowImgExts.includes(t[0]))
                            return;
                        if (!lt.checkHasBasicUserInfo())
                            return void this.editor.showNotify(this.ctx.$t("uploadLoginMsg"), "w");
                        let n = "\n";
                        "" === this.editor.getUI().$textarea.value.trim() && (n = "");
                        const i = `${n}![](Uploading ${e.name}...)`;
                        let s;
                        this.editor.insertContent(i);
                        try {
                            s = this.ctx.conf.imgUploader ? {
                                img_url: yield this.ctx.conf.imgUploader(e)
                            } : yield this.ctx.getApi().upload.imgUpload(e)
                        } catch (r) {
                            console.error(r),
                                this.editor.showNotify(`${this.ctx.$t("uploadFail")}，${r.msg}`, "e")
                        }
                        if (s && s.img_url) {
                            let e = s.img_url;
                            h(e) || (e = u(this.ctx, e)),
                                this.editor.setContent(this.editor.getUI().$textarea.value.replace(i, `${n}![](${e})`))
                        } else
                            this.editor.setContent(this.editor.getUI().$textarea.value.replace(i, ""))
                    }
                ))
            }
        }
        __publicField(rn, "Name", "upload");
        class an extends nn {
            constructor(e) {
                super(e),
                    __publicField(this, "isBind", !1),
                    this.registerPanel('<div class="atk-editor-plug-preview"></div>');
                const t = this.editor.$t("preview");
                this.registerBtn(t)
            }
            onPanelShow() {
                if (this.updateContent(),
                    !this.isBind) {
                    const e = ()=>{
                            this.updateContent()
                        }
                    ;
                    this.editor.getUI().$textarea.addEventListener("input", e),
                        this.editor.getUI().$textarea.addEventListener("change", e),
                        this.isBind = !0
                }
            }
            updateContent() {
                "none" !== this.$panel.style.display && (this.$panel.innerHTML = this.editor.getContentMarked())
            }
        }
        __publicField(an, "Name", "preview");
        class on extends nn {
            constructor(e) {
                super(e),
                    __publicField(this, "queryUserInfo", {
                        timeout: null,
                        abortFunc: null
                    }),
                    this.registerHeaderInputEvt(((e,t)=>{
                            "nick" !== e && "email" !== e || this.fetchUserInfo()
                        }
                    )),
                    this.editor.getUI().$link.addEventListener("change", (()=>{
                            const e = this.editor.getUI().$link.value.trim();
                            e && !/^(http|https):\/\//.test(e) && (this.editor.getUI().$link.value = `https://${e}`,
                                lt.update({
                                    link: this.editor.getUI().$link.value
                                }))
                        }
                    ))
            }
            fetchUserInfo() {
                lt.logout(),
                this.queryUserInfo.timeout && window.clearTimeout(this.queryUserInfo.timeout),
                this.queryUserInfo.abortFunc && this.queryUserInfo.abortFunc(),
                    this.queryUserInfo.timeout = window.setTimeout((()=>{
                            this.queryUserInfo.timeout = null;
                            const {req: e, abort: t} = this.ctx.getApi().user.userGet(lt.data.nick, lt.data.email);
                            this.queryUserInfo.abortFunc = t,
                                e.then((e=>{
                                        var t;
                                        e.is_login || lt.logout(),
                                            this.ctx.updateNotifies(e.unread),
                                        lt.checkHasBasicUserInfo() && !e.is_login && (null == (t = e.user) ? void 0 : t.is_admin) && this.showLoginDialog(),
                                        e.user && e.user.link && (this.editor.getUI().$link.value = e.user.link,
                                            lt.update({
                                                link: e.user.link
                                            }))
                                    }
                                )).catch((()=>{}
                                )).finally((()=>{
                                        this.queryUserInfo.abortFunc = null
                                    }
                                ))
                        }
                    ), 400)
            }
            showLoginDialog() {
                this.ctx.checkAdmin({
                    onSuccess: ()=>{}
                })
            }
        }
        __publicField(on, "Name", "headerInput");
        const ln = [sn, rn, an, on];
        function cn(e) {
            const t = {
                editor: e,
                plugList: {},
                openedPlugName: null,
                openPlugPanel: e=>dn(t, e),
                closePlugPanel: ()=>hn(t),
                triggerHeaderInputEvt: (e,n)=>function(e, t, n) {
                    Object.entries(e.plugList).forEach((([e,i])=>{
                            i.onHeaderInput && i.onHeaderInput(t, n)
                        }
                    ))
                }(t, e, n),
                triggerContentUpdatedEvt: e=>function(e, t) {
                    Object.entries(e.plugList).forEach((([e,n])=>{
                            n.onContentUpdated && n.onContentUpdated(t)
                        }
                    ))
                }(t, e),
                getTransformedContent: e=>function(e, t) {
                    let n = t;
                    return Object.entries(e.plugList).forEach((([e,t])=>{
                            t.contentTransformer && (n = t.contentTransformer(n))
                        }
                    )),
                        n
                }(t, e)
            };
            e.getUI().$plugPanelWrap.innerHTML = "",
                e.getUI().$plugPanelWrap.style.display = "none",
                e.getUI().$plugBtnWrap.innerHTML = "";
            const n = [{
                k: "upload",
                v: (i = e.conf).imgUpload
            }, {
                k: "emoticons",
                v: i.emoticons
            }, {
                k: "preview",
                v: i.preview
            }].filter((e=>!e.v)).flatMap((e=>e.k));
            var i;
            return ln.filter((e=>!n.includes(e.Name))).forEach((e=>{
                    !function(e, t) {
                        const n = t.Name
                            , i = new t(e.editor);
                        e.plugList[n] = i,
                            function(e, t, n) {
                                const i = n.getBtn();
                                if (!i)
                                    return;
                                e.editor.getUI().$plugBtnWrap.appendChild(i),
                                    i.onclick = i.onclick || (s=>{
                                            s.stopPropagation(),
                                                e.editor.getUI().$plugBtnWrap.querySelectorAll(".active").forEach((e=>e.classList.remove("active"))),
                                                t !== e.openedPlugName ? (dn(e, t),
                                                    i.classList.add("active")) : hn(e)
                                        }
                                    );
                                const s = n.getPanel();
                                s && (s.setAttribute("data-plug-name", t),
                                    s.style.display = "none",
                                    e.editor.getUI().$plugPanelWrap.appendChild(s))
                            }(e, n, i)
                    }(t, e)
                }
            )),
                t
        }
        function dn(e, t) {
            Object.entries(e.plugList).forEach((([e,n])=>{
                    const i = n.getPanel();
                    i && (e === t ? (i.style.display = "",
                    n.onPanelShow && n.onPanelShow()) : (i.style.display = "none",
                    n.onPanelHide && n.onPanelHide()))
                }
            )),
                e.editor.getUI().$plugPanelWrap.style.display = "",
                e.openedPlugName = t
        }
        function hn(e) {
            if (!e.openedPlugName)
                return;
            const t = e.plugList[e.openedPlugName];
            t && (t.onPanelHide && t.onPanelHide(),
                e.editor.getUI().$plugPanelWrap.style.display = "none",
                e.openedPlugName = null)
        }
        function un(e) {
            const t = {
                editor: e,
                comment: void 0,
                setReply: (e,n,i)=>function(e, t, n, i=!0) {
                    e.editor.cancelEditComment(),
                        pn(e);
                    const r = e.editor.getUI();
                    r.$sendReply || (r.$sendReply = s(`<div class="atk-send-reply">${e.editor.$t("reply")} <span class="atk-text"></span><span class="atk-cancel">×</span></div>`),
                        r.$sendReply.querySelector(".atk-text").innerText = `@${t.nick}`,
                        r.$sendReply.addEventListener("click", (()=>{
                                e.editor.cancelReply()
                            }
                        )),
                        r.$textareaWrap.append(r.$sendReply));
                    e.comment = t,
                        e.editor.travel(n),
                    i && k(r.$el);
                    r.$textarea.focus()
                }(t, e, n, i),
                cancelReply: ()=>pn(t)
            };
            return t
        }
        function pn(e) {
            if (!e.comment)
                return;
            const t = e.editor.getUI();
            t.$sendReply && (t.$sendReply.remove(),
                t.$sendReply = void 0),
                e.comment = void 0,
                e.editor.travelBack()
        }
        function mn(e) {
            const t = {
                editor: e,
                comment: void 0,
                setEdit: (e,n)=>function(e, t, n) {
                    gn(e),
                        e.editor.cancelReply();
                    const i = e.editor.getUI();
                    if (!i.$editCancelBtn) {
                        const t = s(`<div class="atk-send-reply">${e.editor.$t("editCancel")} <span class="atk-cancel">×</span></div>`);
                        t.onclick = ()=>{
                            gn(e)
                        }
                            ,
                            i.$textareaWrap.append(t),
                            i.$editCancelBtn = t
                    }
                    e.comment = t,
                        i.$header.style.display = "none",
                        e.editor.travel(n),
                        i.$nick.value = t.nick || "",
                        i.$email.value = t.email || "",
                        i.$link.value = t.link || "",
                        e.editor.setContent(t.content),
                        i.$textarea.focus(),
                        e.editor.refreshSendBtnText()
                }(t, e, n),
                cancelEdit: ()=>gn(t)
            };
            return function(e) {
                e.editor.getSubmitManager().registerCustom({
                    activeCond: ()=>!!e.comment,
                    req: ()=>__async(this, null, (function*() {
                            const t = {
                                content: e.editor.getFinalContent(),
                                nick: e.editor.getUI().$nick.value,
                                email: e.editor.getUI().$email.value,
                                link: e.editor.getUI().$link.value
                            };
                            return yield e.editor.ctx.getApi().comment.commentEdit(__spreadValues(__spreadValues({}, e.comment), t))
                        }
                    )),
                    post: t=>{
                        e.editor.ctx.updateComment(t)
                    }
                })
            }(t),
                t
        }
        function gn(e) {
            if (!e.comment)
                return;
            const t = e.editor.getUI();
            t.$editCancelBtn && (t.$editCancelBtn.remove(),
                t.$editCancelBtn = void 0),
                e.comment = void 0,
                e.editor.travelBack();
            const {nick: n, email: i, link: s} = lt.data;
            t.$nick.value = n,
                t.$email.value = i,
                t.$link.value = s,
                e.editor.setContent(""),
                e.editor.refreshSendBtnText(),
                t.$header.style.display = ""
        }
        function fn(e) {
            const t = {
                editor: e,
                do: ()=>function(e) {
                    return __async(this, null, (function*() {
                            if ("" === e.editor.getFinalContent().trim())
                                return void e.editor.focus();
                            const t = e.customs.find((e=>e.activeCond()));
                            e.editor.ctx.trigger("editor-submit"),
                                e.editor.showLoading();
                            try {
                                let n;
                                (null == t ? void 0 : t.pre) && t.pre(),
                                    n = (null == t ? void 0 : t.req) ? yield t.req() : yield function(e) {
                                        return __async(this, null, (function*() {
                                                const t = yield e.editor.ctx.getApi().comment.add(__spreadValues({}, function(e) {
                                                    var t;
                                                    const {nick: n, email: i, link: s} = lt.data
                                                        , r = e.editor.ctx.conf
                                                        , a = null == (t = e.editor.getReplyManager()) ? void 0 : t.comment;
                                                    return {
                                                        content: e.editor.getFinalContent(),
                                                        nick: n,
                                                        email: i,
                                                        link: s,
                                                        rid: a ? a.id : 0,
                                                        page_key: a ? a.page_key : r.pageKey,
                                                        page_title: a ? void 0 : r.pageTitle,
                                                        site_name: a ? a.site_name : r.site
                                                    }
                                                }(e)));
                                                return t
                                            }
                                        ))
                                    }(e),
                                    (null == t ? void 0 : t.post) ? t.post(n) : function(e, t) {
                                        const n = e.editor.getReplyManager()
                                            , i = e.editor.ctx.conf;
                                        (null == n ? void 0 : n.comment) && n.comment.page_key !== i.pageKey && window.open(`${n.comment.page_url}#atk-comment-${t.id}`);
                                        e.editor.ctx.insertComment(t)
                                    }(e, n)
                            } catch (n) {
                                return console.error(n),
                                    void e.editor.showNotify(`${e.editor.$t("commentFail")}，${n.msg || String(n)}`, "e")
                            } finally {
                                e.editor.hideLoading()
                            }
                            e.editor.reset(),
                                e.editor.ctx.trigger("editor-submitted")
                        }
                    ))
                }(t),
                customs: [],
                registerCustom: e=>{
                    t.customs.push(e)
                }
            };
            return t
        }
        const kn = {
            localStorage: function(e) {
                const t = window.localStorage.getItem("ArtalkContent") || "";
                "" !== t.trim() && (e.showNotify(e.$t("restoredMsg"), "i"),
                    e.setContent(t));
                e.getUI().$textarea.addEventListener("input", (()=>e.saveToLocalStorage()))
            },
            header: function(e) {
                const t = e.getHeaderInputEls();
                Object.entries(t).forEach((([t,n])=>{
                        n.value = lt.data[t] || "",
                            n.addEventListener("input", (()=>function(e, t, n) {
                                var i;
                                if (e.isEditMode)
                                    return;
                                lt.update({
                                    [t]: n.value.trim()
                                }),
                                null == (i = e.getPlugs()) || i.triggerHeaderInputEvt(t, n)
                            }(e, t, n))),
                            n.placeholder = `${e.$t(t)}`
                    }
                ))
            },
            textarea: function(e) {
                e.getUI().$textarea.placeholder = e.ctx.conf.placeholder || e.$t("placeholder"),
                    e.getUI().$textarea.addEventListener("keydown", (t=>{
                            9 === (t.keyCode || t.which) && (t.preventDefault(),
                                e.insertContent("\t"))
                        }
                    )),
                    e.getUI().$textarea.addEventListener("input", (()=>{
                            e.adjustTextareaHeight()
                        }
                    ))
            },
            submitBtn: function(e) {
                e.refreshSendBtnText(),
                    e.getUI().$submitBtn.addEventListener("click", (()=>e.submit()))
            },
            submitManager: function(e) {
                e.setSubmitManager(fn(e))
            },
            plugs: function(e) {
                e.setPlugs(cn(e))
            },
            mover: function(e) {
                if (!e.conf.editorTravel)
                    return;
                e.setMover(tn(e))
            },
            replyManager: function(e) {
                e.setReplyManager(un(e))
            },
            editModeManager: function(e) {
                e.setEditModeManager(mn(e))
            }
        };
        const yn = {
            $header: ".atk-header",
            $nick: '.atk-header [name="nick"]',
            $email: '.atk-header [name="email"]',
            $link: '.atk-header [name="link"]',
            $textareaWrap: ".atk-textarea-wrap",
            $textarea: ".atk-textarea",
            $bottom: ".atk-bottom",
            $submitBtn: ".atk-send-btn",
            $notifyWrap: ".atk-notify-wrap",
            $plugBtnWrap: ".atk-plug-btn-wrap",
            $plugPanelWrap: ".atk-plug-panel-wrap"
        };
        class bn extends m {
            constructor(e) {
                super(e),
                    __publicField(this, "ui"),
                    __publicField(this, "plugs"),
                    __publicField(this, "mover"),
                    __publicField(this, "reply"),
                    __publicField(this, "editMode"),
                    __publicField(this, "submitManager"),
                    this.ui = function() {
                        const e = s('<div class="atk-main-editor">\n  <div class="atk-header">\n    <input name="nick" class="atk-nick" type="text" required="required">\n    <input name="email" class="atk-email" type="email" required="required">\n    <input name="link" class="atk-link" type="url">\n  </div>\n  <div class="atk-textarea-wrap">\n    <textarea class="atk-textarea"></textarea>\n  </div>\n  <div class="atk-plug-panel-wrap" style="display: none;"></div>\n  <div class="atk-bottom">\n    <div class="atk-item atk-plug-btn-wrap"></div>\n    <div class="atk-item">\n      <button type="button" class="atk-send-btn"></button>\n    </div>\n  </div>\n  <div class="atk-notify-wrap"></div>\n</div>\n')
                            , t = {
                            $el: e
                        };
                        return Object.entries(yn).forEach((([n,i])=>{
                                t[n] = e.querySelector(i)
                            }
                        )),
                            t
                    }(),
                    this.$el = this.ui.$el,
                    this.ctx.on("conf-loaded", (()=>{
                            var e;
                            e = this,
                                Object.entries(kn).forEach((([t,n])=>{
                                        n(e)
                                    }
                                ))
                        }
                    ))
            }
            getUI() {
                return this.ui
            }
            getPlugs() {
                return this.plugs
            }
            setPlugs(e) {
                this.plugs = e
            }
            setMover(e) {
                this.mover = e
            }
            setReplyManager(e) {
                this.reply = e
            }
            getReplyManager() {
                return this.reply
            }
            get isReplyMode() {
                var e;
                return !!(null == (e = this.reply) ? void 0 : e.comment)
            }
            setEditModeManager(e) {
                this.editMode = e
            }
            get isEditMode() {
                var e;
                return !!(null == (e = this.editMode) ? void 0 : e.comment)
            }
            setSubmitManager(e) {
                this.submitManager = e
            }
            getSubmitManager() {
                return this.submitManager
            }
            getHeaderInputEls() {
                return {
                    nick: this.ui.$nick,
                    email: this.ui.$email,
                    link: this.ui.$link
                }
            }
            saveToLocalStorage() {
                window.localStorage.setItem("ArtalkContent", this.getContentOriginal().trim())
            }
            refreshSendBtnText() {
                this.isEditMode ? this.ui.$submitBtn.innerText = this.$t("save") : this.ui.$submitBtn.innerText = this.ctx.conf.sendBtn || this.$t("send")
            }
            getFinalContent() {
                let e = this.getContentOriginal();
                return this.plugs && (e = this.plugs.getTransformedContent(e)),
                    e
            }
            getContentOriginal() {
                return this.ui.$textarea.value || ""
            }
            getContentMarked() {
                return Xe(this.ctx, this.getFinalContent())
            }
            setContent(e) {
                this.ui.$textarea.value = e,
                    this.saveToLocalStorage(),
                this.plugs && this.plugs.triggerContentUpdatedEvt(e),
                    window.setTimeout((()=>{
                            this.adjustTextareaHeight()
                        }
                    ), 80)
            }
            insertContent(e) {
                const t = document.querySelector("#owo-big");
                if (t && t.style && (t.style.display = "none"),
                    document.selection)
                    this.ui.$textarea.focus(),
                        document.selection.createRange().text = e,
                        this.ui.$textarea.focus();
                else if (this.ui.$textarea.selectionStart || 0 === this.ui.$textarea.selectionStart) {
                    const t = this.ui.$textarea.selectionStart
                        , n = this.ui.$textarea.selectionEnd
                        , i = this.ui.$textarea.scrollTop;
                    this.setContent(this.ui.$textarea.value.substring(0, t) + e + this.ui.$textarea.value.substring(n, this.ui.$textarea.value.length)),
                        this.ui.$textarea.focus(),
                        this.ui.$textarea.selectionStart = t + e.length,
                        this.ui.$textarea.selectionEnd = t + e.length,
                        this.ui.$textarea.scrollTop = i
                } else
                    this.ui.$textarea.focus(),
                        this.ui.$textarea.value += e
            }
            adjustTextareaHeight() {
                const e = this.ui.$textarea.offsetHeight - this.ui.$textarea.clientHeight;
                this.ui.$textarea.style.height = "0px",
                    this.ui.$textarea.style.height = `${this.ui.$textarea.scrollHeight + e}px`
            }
            focus() {
                this.ui.$textarea.focus()
            }
            reset() {
                this.setContent(""),
                    this.cancelReply(),
                    this.cancelEditComment()
            }
            setReply(e, t, n=!0) {
                var i;
                null == (i = this.reply) || i.setReply(e, t, n)
            }
            cancelReply() {
                var e;
                null == (e = this.reply) || e.cancelReply()
            }
            setEditComment(e, t) {
                var n;
                null == (n = this.editMode) || n.setEdit(e, t)
            }
            cancelEditComment() {
                var e;
                null == (e = this.editMode) || e.cancelEdit()
            }
            showNotify(e, t) {
                y(this.ui.$notifyWrap, e, t)
            }
            showLoading() {
                g(this.ui.$el)
            }
            hideLoading() {
                f(this.ui.$el)
            }
            submit() {
                return __async(this, null, (function*() {
                        this.submitManager && (yield this.submitManager.do())
                    }
                ))
            }
            close() {
                this.ui.$textareaWrap.querySelector(".atk-comment-closed") || this.ui.$textareaWrap.prepend(s(`<div class="atk-comment-closed">${this.$t("onlyAdminCanReply")}</div>`)),
                    lt.data.isAdmin ? (this.ui.$textarea.style.display = "",
                        this.ui.$bottom.style.display = "") : (this.ui.$textarea.style.display = "none",
                        this.closePlugPanel(),
                        this.ui.$bottom.style.display = "none")
            }
            open() {
                var e;
                null == (e = this.ui.$textareaWrap.querySelector(".atk-comment-closed")) || e.remove(),
                    this.ui.$textarea.style.display = "",
                    this.ui.$bottom.style.display = ""
            }
            travel(e) {
                var t;
                null == (t = this.mover) || t.move(e)
            }
            travelBack() {
                var e;
                null == (e = this.mover) || e.back()
            }
            openPlugPanel(e) {
                var t;
                null == (t = this.plugs) || t.openPlugPanel(e)
            }
            closePlugPanel() {
                var e;
                null == (e = this.plugs) || e.closePlugPanel()
            }
        }
        class _n extends m {
            constructor(e) {
                super(e),
                    __publicField(this, "layer"),
                    __publicField(this, "$header"),
                    __publicField(this, "$closeBtn"),
                    __publicField(this, "$iframeWrap"),
                    __publicField(this, "$iframe"),
                    __publicField(this, "firstShow", !0),
                    this.$el = s('<div class="atk-sidebar-layer">\n  <div class="atk-sidebar-inner">\n    <div class="atk-sidebar-header">\n      <div class="atk-sidebar-close"><i class="atk-icon atk-icon-close"></i></div>\n    </div>\n    <div class="atk-sidebar-iframe-wrap"></div>\n  </div>\n</div>\n'),
                    this.$header = this.$el.querySelector(".atk-sidebar-header"),
                    this.$closeBtn = this.$header.querySelector(".atk-sidebar-close"),
                    this.$iframeWrap = this.$el.querySelector(".atk-sidebar-iframe-wrap"),
                    this.$closeBtn.onclick = ()=>{
                        this.hide()
                    }
                    ,
                    this.ctx.on("user-changed", (()=>{
                            this.firstShow = !0
                        }
                    ))
            }
            show() {
                return __async(this, arguments, (function*(e={}) {
                        if (this.$el.style.transform = "",
                        null == this.layer && (this.layer = new x(this.ctx,"sidebar",this.$el),
                                this.layer.afterHide = ()=>{
                                    !0 === this.ctx.conf.editorTravel && this.ctx.editorTravelBack()
                                }
                        ),
                            this.layer.show(),
                            (()=>{
                                    __async(this, null, (function*() {
                                            var t;
                                            const n = yield this.ctx.getApi().user.loginStatus();
                                            n.is_admin && !n.is_login && (null == (t = this.layer) || t.hide(),
                                                this.firstShow = !0,
                                                this.ctx.checkAdmin({
                                                    onSuccess: ()=>{
                                                        setTimeout((()=>{
                                                                this.show(e)
                                                            }
                                                        ), 500)
                                                    }
                                                    ,
                                                    onCancel: ()=>{}
                                                }))
                                        }
                                    ))
                                }
                            )(),
                            this.firstShow) {
                            this.$iframeWrap.innerHTML = "",
                                this.$iframe = s("<iframe></iframe>");
                            const t = u(this.ctx, "/sidebar/")
                                , n = {
                                pageKey: this.conf.pageKey,
                                site: this.conf.site || "",
                                user: JSON.stringify(lt.data),
                                time: +new Date
                            };
                            e.view && (n.view = e.view),
                            this.conf.darkMode && (n.darkMode = "1"),
                            "string" == typeof this.conf.locale && (n.locale = this.conf.locale);
                            const i = new URLSearchParams(n);
                            this.iframeLoad(`${t}?${i.toString()}`),
                                this.$iframeWrap.append(this.$iframe),
                                this.firstShow = !1
                        } else {
                            const e = this.$iframe.src.includes("darkMode=1");
                            this.conf.darkMode && !e && this.iframeLoad(`${this.$iframe.src}&darkMode=1`),
                            !this.conf.darkMode && e && this.iframeLoad(this.$iframe.src.replace("&darkMode=1", ""))
                        }
                        setTimeout((()=>{
                                this.$el.style.transform = "translate(0, 0)"
                            }
                        ), 100),
                            setTimeout((()=>{
                                    this.ctx.updateNotifies([])
                                }
                            ), 0),
                            this.ctx.trigger("sidebar-show")
                    }
                ))
            }
            hide() {
                var e;
                this.$el.style.transform = "",
                null == (e = this.layer) || e.hide(),
                    this.ctx.trigger("sidebar-hide")
            }
            iframeLoad(e) {
                this.$iframe && (this.$iframe.src = e,
                        g(this.$iframeWrap),
                        this.$iframe.onload = ()=>{
                            f(this.$iframeWrap)
                        }
                )
            }
        }
        const $n = {
            i18n(e) {
                rt(e.conf.locale),
                    e.on("conf-loaded", (()=>{
                            rt(e.conf.locale)
                        }
                    ))
            },
            markdown() {
                !function() {
                    try {
                        if (!ue.name)
                            return
                    } catch (i) {
                        return
                    }
                    const e = new ue.Renderer
                        , t = e.link;
                    e.link = (n,i,s)=>{
                        const r = null == n ? void 0 : n.startsWith(`${window.location.protocol}//${window.location.hostname}`);
                        return t.call(e, n, i, s).replace(/^<a /, `<a target="_blank" ${r ? "" : 'rel="noreferrer noopener nofollow"'} `)
                    }
                        ,
                        e.code = (e,t)=>{
                            const n = t || "plaintext";
                            let i = e;
                            return window.hljs ? n && window.hljs.getLanguage(n) && (i = window.hljs.highlight(n, e).value) : i = Ge(e),
                                `<pre rel="${n}">\n<code class="hljs language-${n}">${i.replace(/&amp;/g, "&")}</code>\n</pre>`
                        }
                    ;
                    const n = ue;
                    ue.setOptions({
                        renderer: e,
                        pedantic: !1,
                        gfm: !0,
                        breaks: !0,
                        smartLists: !0,
                        smartypants: !0,
                        xhtml: !1,
                        sanitize: !1,
                        silent: !0
                    }),
                        Ke = n
                }()
            },
            user: e=>(lt.setContext(e),
                lt),
            api: e=>new en(e),
            checkerLauncher: e=>new Gt(e),
            editor(e) {
                const t = new bn(e);
                return e.$root.appendChild(t.$el),
                    t
            },
            list(e) {
                const t = new Wt(e);
                return e.$root.appendChild(t.$el),
                    t.fetchComments(0),
                    t
            },
            layer(e) {
                x.BodyOrgOverflow = document.body.style.overflow,
                    x.BodyOrgPaddingRight = document.body.style.paddingRight
            },
            sidebarLayer: e=>new _n(e),
            eventsDefault(e) {
                window.addEventListener("hashchange", (()=>{
                        e.listHashGotoCheck()
                    }
                )),
                    e.on("user-changed", (()=>{
                            e.checkAdminShowEl(),
                                e.listRefreshUI()
                        }
                    ))
            },
            darkMode(e) {
                S(e),
                    e.on("conf-loaded", (()=>{
                            S(e)
                        }
                    ))
            }
        };
        function xn(e) {
            return __async(this, null, (function*() {
                    const t = e.ctx.conf.countEl;
                    t && document.querySelector(t) && vn(e, {
                        api: "page_comment",
                        countEl: t
                    });
                    const n = e.pvAdd ? yield e.ctx.getApi().page.pv() : void 0
                        , i = e.ctx.conf.pvEl;
                    i && document.querySelector(i) && vn(e, {
                        api: "page_pv",
                        countEl: i,
                        curtPageCount: n
                    })
                }
            ))
        }
        function vn(e, t) {
            return __async(this, null, (function*() {
                    let n = {};
                    const i = e.ctx.conf.pageKey;
                    t.curtPageCount && (n[i] = t.curtPageCount);
                    let s = Array.from(document.querySelectorAll(t.countEl)).map((e=>e.getAttribute("data-page-key") || i)).filter((e=>void 0 === n[e]));
                    if (s = [...new Set(s)],
                    s.length > 0) {
                        const i = yield e.ctx.getApi().page.stat(t.api, s);
                        n = __spreadValues(__spreadValues({}, n), i)
                    }
                    document.querySelectorAll(t.countEl).forEach((e=>{
                            const t = e.getAttribute("data-page-key") || i;
                            e.innerHTML = `${Number(n[t] || 0)}`
                        }
                    ))
                }
            ))
        }
        const wn = class e {
                constructor(t) {
                    __publicField(this, "conf"),
                        __publicField(this, "ctx"),
                        __publicField(this, "$root"),
                    e.instance && e.destroy(),
                        this.conf = qt(t),
                    this.conf.el instanceof HTMLElement && (this.$root = this.conf.el),
                        this.showOwoBig(this.conf.el),
                        this.ctx = new Nt(this.conf,this.$root),
                        Object.entries($n).forEach((([t,n])=>{
                                if (e.DisabledComponents.includes(t))
                                    return;
                                const i = n(this.ctx);
                                i && this.ctx.inject(t, i)
                            }
                        )),
                        e.plugins.forEach((e=>{
                                "function" == typeof e && e(this.ctx)
                            }
                        ))
                }
                /** 表情包放大  */
                showOwoBig(e) {
                    const t = 200
                        , i = document.querySelector("body");
                    let n = document.createElement("div");
                    document.querySelector("#owo-big") ? n = document.querySelector("#owo-big") : (n.id = "owo-big",
                        i.appendChild(n));
                    new MutationObserver((e=>{
                            var s, r, a, o, l, c, h, d;
                            for (let u = 0; u < e.length; u++) {
                                const p = e[u].addedNodes;
                                let m = 1
                                    , g = 0;
                                ((null == (r = null == (s = p[0]) ? void 0 : s.classList) ? void 0 : r.contains("atk-grp")) || (null == (o = null == (a = p[0]) ? void 0 : a.classList) ? void 0 : o.contains("atk-comment-wrap")) || (null == (l = p[0]) ? void 0 : l.attributes) && (null == (c = p[0]) ? void 0 : c.attributes["atk-emoticon"]) || "function" == typeof (null == (h = p[0]) ? void 0 : h.querySelector) && (null == (d = p[0]) ? void 0 : d.querySelector("img[atk-emoticon]"))) && (p[0].onmouseover = e=>{
                                        m && "IMG" === e.target.tagName && e.target.attributes["atk-emoticon"] && (m = 0,
                                            g = setTimeout((()=>{
                                                    const s = "true" === e.target.getAttribute("notitle") ? "" : e.target.alt || ""
                                                        , r = e.target.clientHeight
                                                        , a = e.target.clientWidth;
                                                    if (r <= t && a <= t) {
                                                        const o = e.target.naturalHeight
                                                            , l = e.target.naturalWidth
                                                            , c = 2 * r
                                                            , h = 2 * a
                                                            , d = o > r ? c < o && o < t ? c : o : r
                                                            , u = l > a ? h < l && l < t ? h : l : a;
                                                        let p = 0
                                                            , m = 0;
                                                        u / d >= 1 ? u >= t ? (p = t,
                                                            m = d * t / u) : (p = u,
                                                            m = d) : d >= t ? (m = t,
                                                            p = u * t / d) : (p = u,
                                                            m = d);
                                                        const g = e.y - e.offsetY;
                                                        let f = e.x - e.offsetX - (p - e.target.clientWidth) / 2;
                                                        f + p > i.clientWidth && (f -= f + p - i.clientWidth + 10),
                                                        f < 0 && (f = 10),
                                                        "" !== s && (m += 10),
                                                            n.style.cssText = `display:block;height:${m + 34}px;width:${p + 34}px;left:${f}px;top:${g}px;`,
                                                            n.innerHTML = `<img src="${e.target.src}"><p>${s}</p>`
                                                    }
                                                }
                                            ), 300))
                                    }
                                        ,
                                        p[0].onmouseout = ()=>{
                                            m = 1,
                                                n.style.display = "none",
                                                clearTimeout(g)
                                        }
                                )
                            }
                        }
                    )).observe(e, {
                        subtree: !0,
                        childList: !0
                    })
                }
                static init(t) {
                    return this.instance && e.destroy(),
                        this.instance = new e(t),
                        this.instance
                }
                use(t) {
                    e.plugins.push(t),
                    "function" == typeof t && t(this.ctx)
                }
                update(t) {
                    if (!e.instance)
                        throw Error("cannot call `update` function before call `load`");
                    return e.instance.ctx.updateConf(t),
                        e.instance
                }
                reload() {
                    this.ctx.listReload()
                }
                destroy() {
                    if (!e.instance)
                        throw Error("cannot call `destroy` function before call `load`");
                    e.instance.$root.remove(),
                        delete e.instance
                }
                on(e, t) {
                    this.ctx.on(e, t, "external")
                }
                off(e, t) {
                    this.ctx.off(e, t, "external")
                }
                trigger(e, t) {
                    this.ctx.trigger(e, t, "external")
                }
                setDarkMode(e) {
                    this.ctx.setDarkMode(e)
                }
                static use(e) {
                    this.plugins.push(e),
                    this.instance && "function" == typeof e && e(this.instance.ctx)
                }
                static update(e) {
                    var t;
                    return null == (t = this.instance) ? void 0 : t.update(e)
                }
                static reload() {
                    var e;
                    null == (e = this.instance) || e.reload()
                }
                static destroy() {
                    var e;
                    null == (e = this.instance) || e.destroy()
                }
                static on(e, t) {
                    var n;
                    null == (n = this.instance) || n.on(e, t)
                }
                static off(e, t) {
                    var n;
                    null == (n = this.instance) || n.off(e, t)
                }
                static trigger(e, t) {
                    var n;
                    null == (n = this.instance) || n.trigger(e, t)
                }
                static setDarkMode(e) {
                    var t;
                    null == (t = this.instance) || t.setDarkMode(e)
                }
                static loadCountWidget(e) {
                    const t = new Nt(qt(e));
                    t.inject("api", new en(t)),
                        xn({
                            ctx: t,
                            pvAdd: !1
                        })
                }
                static LoadCountWidget(e) {
                    console.warn("The method `LoadCountWidget` is deprecated, please use `loadCountWidget` instead."),
                        this.loadCountWidget(e)
                }
            }
        ;
        return __publicField(wn, "instance"),
            __publicField(wn, "ListLite", jt),
            __publicField(wn, "defaults", Dt),
            __publicField(wn, "plugins", [e=>{
                e.conf.useBackendConf ? e.on("list-loaded", (()=>{
                        xn({
                            ctx: e,
                            pvAdd: !0
                        })
                    }
                )) : xn({
                    ctx: e,
                    pvAdd: !0
                })
            }
            ]),
            __publicField(wn, "DisabledComponents", []),
            wn
    }
));
