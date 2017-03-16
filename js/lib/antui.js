function amAutoClear() {
    var e = document.querySelectorAll(".am-input-autoclear");
    e && Array.prototype.forEach.call(e, function(e) {
        var t = e.querySelector(".am-icon-clear"),
            n = e.querySelector('input[type="text"],input[type="password"],input[type="number"],input[type="tel"],input[type="email"],input[type="url"],input[type="search"]');
        t && n && (t.addEventListener("touchstart", function() { n.value = "", n.focus(), t.style.visibility = "hidden" }, !1), t.addEventListener("click", function() { n.value = "", n.focus(), t.style.visibility = "hidden" }, !1), n.addEventListener("focus", function() { t.style.visibility = n.value.length > 0 ? "visible" : "hidden" }, !1), n.addEventListener("input", function() { t.style.visibility = n.value.length > 0 ? "visible" : "hidden" }, !1), n.addEventListener("blur", function() { setTimeout(function() { t.style.visibility = "hidden" }, 20) }, !1)) }) }

function amTextareaAutoHeight() {
    var e = document.querySelectorAll(".am-textarea-autoheight");
    e && Array.prototype.forEach.call(e, function(e) {
        var t = e.currentStyle || document.defaultView.getComputedStyle(e, null),
            n = Math.ceil(t.height.slice(0, -2)),
            r = e.clientHeight;
        e.style.resize = "none", e.addEventListener("input", function() {
            var t = Math.floor((e.scrollHeight - r + n) / n);
            e.setAttribute("rows", t) }, !1) }) }

function amInputAutoLight() {
    function e(e) {
        if (document.getElementById(e)) {
            var t = document.querySelectorAll("[data-am-required-for=" + e + "]"),
                n = !0;
            return Array.prototype.forEach.call(t, function(e) {
                var t = Number(e.getAttribute("data-am-required-length")) || 1;
                n = n && e.value.length >= t }), n }
        return !0 }

    function t(e) {
        var t = e.target.getAttribute("data-am-required-for");
        n(t) }

    function n(t) {
        var n = document.getElementById(t);
        n && (e(t) ? n.removeAttribute("disabled") : n.setAttribute("disabled", "disabled")) }
    var r = document.querySelectorAll("[data-am-required-for]"),
        a = {};
    Array.prototype.forEach.call(r, function(e) { e.addEventListener("input", t), e.addEventListener("focus", t), e.addEventListener("blur", t);
        var r = e.getAttribute("data-am-required-for");
        a[r] || (n(r), a[r] = !0) }) }

function amTouchActive(e, t) { t = t || {};
    var n, r = !1,
        a = t.activeClass || "hover",
        i = t.lockTime || 1e3,
        u = function(e) {
            var t = e.currentTarget;
            r || (t.className = t.className + " " + a, n = setTimeout(function() { t.className = t.className.replace(a, "") }, i)) },
        l = function(e) { r = !0, o(e) },
        o = function(e) {
            var t = e.currentTarget;
            t.className = t.className.replace(a, ""), clearTimeout(n), r = !1 };
    e = "object" == typeof e && e.length > 1 ? e : [e];
    for (var c = 0; c < e.length; c++)
        for (var d = document.querySelectorAll(e[c]), s = 0; s < d.length; s++) {
            var v = d[s];
            v && v.addEventListener && (v.addEventListener("touchstart", u, !1), v.addEventListener("touchmove", l, !1), v.addEventListener("touchend", o, !1), v.addEventListener("touchcancel", o, !1)) } }
