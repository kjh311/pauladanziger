/*
 * Interlace.js
 * https://github.com/Wildtyto/Interlace.js
 *
 * Copyright (c) 2016 Wildtyto
 * Licensed under the MIT licenses.
 */
! function(e) { "use strict";

    function t() { var e = {}; return e.list = [], e.scan = n, e["new"] = a, e }

    function n() { i() }

    function a(e) { return r(e) }

    function i() { for (var e = document.querySelectorAll("[data-interlace-src]"), t = e.length, n = 0; t - n;) c(e[n++]) }

    function r(e) { var t = document.createElement("div"); return e.interlaceSrc && (t.dataset.interlaceSrc = e.interlaceSrc), e.interlaceTitle && (t.dataset.interlaceTitle = e.interlaceTitle), e.interlaceAlt && (t.dataset.interlaceAlt = e.interlaceAlt), e.interlaceLow && (t.dataset.interlaceLow = e.interlaceLow), e.interlaceTip === !0 && (t.dataset.interlaceTip = ""), c(t), t }

    function c(t) { var n = document.createElement("img");
        l(t, n), d(t, n), o(t), e.list.unshift(t) }

    function l(e, t) {
        function n() { i.removeEventListener("load", n), a() }

        function a() { t.src = c } var i = document.createElement("img"),
            r = e.dataset.interlaceLow,
            c = e.dataset.interlaceSrc;
        e.appendChild(i), r ? (i.addEventListener("load", n, !1), i.src = r) : a() }

    function d(e, t) {
        function n() { t.removeEventListener("load", n), e.dataset.interlace = "loaded" } var a = e.dataset.interlaceTitle,
            i = e.dataset.interlaceAlt;
        t.addEventListener("load", n, !1), e.appendChild(t), a && (t.title = a), i && (t.alt = i) }

    function o(e) { var t, n = e.dataset.interlaceTip; for (t in e.dataset) 0 === t.indexOf("interlace") && delete e.dataset[t];
        e.dataset.interlace = "" === n ? "loading" : "" }! function() { e = window.Interlace = e || t(), e.scan() }() }(window.Interlace);