!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t();
}(this, function() {
    "use strict";
    function e(e) {
        var t = function(e, t) {
            if ("object" != typeof e || !e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
                var n = i.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        }(e, "string");
        return "symbol" == typeof t ? t : t + "";
    }
    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function n(t, i) {
        for(var n = 0; n < i.length; n++){
            var s = i[n];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, e(s.key), s);
        }
    }
    function s(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e;
    }
    var l = Date.now();
    function o() {
        var e = {}, t = !0, i = 0, n = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i++);
        for(var s = function(i) {
            for(var n in i)Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = o(!0, e[n], i[n]) : e[n] = i[n]);
        }; i < n; i++){
            var l = arguments[i];
            s(l);
        }
        return e;
    }
    function r(e, t) {
        if ((E(e) || e === window || e === document) && (e = [
            e
        ]), L(e) || I(e) || (e = [
            e
        ]), 0 != M(e)) {
            if (L(e) && !I(e)) for(var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++);
            else if (I(e)) {
                for(var s in e)if (P(e, s) && !1 === t.call(e[s], e[s], s, e)) break;
            }
        }
    }
    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = e[l] = e[l] || [], s = {
            all: n,
            evt: null,
            found: null
        };
        return t && i && M(n) > 0 && r(n, function(e, n) {
            if (e.eventName == t && e.fn.toString() == i.toString()) return s.found = !0, s.evt = n, !1;
        }), s;
    }
    function h(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = t.onElement, n = t.withCallback, s = t.avoidDuplicate, l = void 0 === s || s, o = t.once, h = void 0 !== o && o, d = t.useCapture, c = void 0 !== d && d, u = arguments.length > 2 ? arguments[2] : void 0, g = i || [];
        function v(e) {
            C(n) && n.call(u, e, this), h && v.destroy();
        }
        return k(g) && (g = document.querySelectorAll(g)), v.destroy = function() {
            r(g, function(t) {
                var i = a(t, e, v);
                i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, v, c);
            });
        }, r(g, function(t) {
            var i = a(t, e, v);
            (t.addEventListener && l && !i.found || !l) && (t.addEventListener(e, v, c), i.all.push({
                eventName: e,
                fn: v
            }));
        }), v;
    }
    function d(e, t) {
        r(t.split(" "), function(t) {
            return e.classList.add(t);
        });
    }
    function c(e, t) {
        r(t.split(" "), function(t) {
            return e.classList.remove(t);
        });
    }
    function u(e, t) {
        return e.classList.contains(t);
    }
    function g(e, t) {
        for(; e !== document.body;){
            if (!(e = e.parentElement)) return !1;
            if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e;
        }
    }
    function v(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || "" === t) return !1;
        if ("none" === t) return C(i) && i(), !1;
        var n = b(), s = t.split(" ");
        r(s, function(t) {
            d(e, "g" + t);
        }), h(n, {
            onElement: e,
            avoidDuplicate: !1,
            once: !0,
            withCallback: function(e, t) {
                r(s, function(e) {
                    c(t, "g" + e);
                }), C(i) && i();
            }
        });
    }
    function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" === t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
        e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t;
    }
    function p(e) {
        e.style.display = "block";
    }
    function m(e) {
        e.style.display = "none";
    }
    function y(e) {
        var t = document.createDocumentFragment(), i = document.createElement("div");
        for(i.innerHTML = e; i.firstChild;)t.appendChild(i.firstChild);
        return t;
    }
    function x() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        };
    }
    function b() {
        var e, t = document.createElement("fakeelement"), i = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
        };
        for(e in i)if (void 0 !== t.style[e]) return i[e];
    }
    function S(e, t, i, n) {
        if (e()) t();
        else {
            var s;
            i || (i = 100);
            var l = setInterval(function() {
                e() && (clearInterval(l), s && clearTimeout(s), t());
            }, i);
            n && (s = setTimeout(function() {
                clearInterval(l);
            }, n));
        }
    }
    function w(e, t, i) {
        if (O(e)) console.error("Inject assets error");
        else if (C(t) && (i = t, t = !1), k(t) && t in window) C(i) && i();
        else {
            var n;
            if (-1 !== e.indexOf(".css")) {
                if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void (C(i) && i());
                var s = document.getElementsByTagName("head")[0], l = s.querySelectorAll('link[rel="stylesheet"]'), o = document.createElement("link");
                return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", l ? s.insertBefore(o, l[0]) : s.appendChild(o), void (C(i) && i());
            }
            if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
                if (C(i)) {
                    if (k(t)) return S(function() {
                        return void 0 !== window[t];
                    }, function() {
                        i();
                    }), !1;
                    i();
                }
            } else {
                var r = document.createElement("script");
                r.type = "text/javascript", r.src = e, r.onload = function() {
                    if (C(i)) {
                        if (k(t)) return S(function() {
                            return void 0 !== window[t];
                        }, function() {
                            i();
                        }), !1;
                        i();
                    }
                }, document.body.appendChild(r);
            }
        }
    }
    function T() {
        return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
    }
    function C(e) {
        return "function" == typeof e;
    }
    function k(e) {
        return "string" == typeof e;
    }
    function E(e) {
        return !(!e || !e.nodeType || 1 != e.nodeType);
    }
    function A(e) {
        return Array.isArray(e);
    }
    function L(e) {
        return e && e.length && isFinite(e.length);
    }
    function I(e) {
        return "object" === t(e) && null != e && !C(e) && !A(e);
    }
    function O(e) {
        return null == e;
    }
    function P(e, t) {
        return null !== e && hasOwnProperty.call(e, t);
    }
    function M(e) {
        if (I(e)) {
            if (e.keys) return e.keys().length;
            var t = 0;
            for(var i in e)P(e, i) && t++;
            return t;
        }
        return e.length;
    }
    function z(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
    }
    function X() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1, t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
        if (!t.length) return !1;
        if (1 == t.length) return t[0];
        "string" == typeof e && (e = parseInt(e));
        var i = [];
        r(t, function(e) {
            i.push(e.getAttribute("data-taborder"));
        });
        var n = Math.max.apply(Math, i.map(function(e) {
            return parseInt(e);
        })), s = e < 0 ? 1 : e + 1;
        s > n && (s = "1");
        var l = i.filter(function(e) {
            return e >= parseInt(s);
        }), o = l.sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(o, '"]'));
    }
    function Y(e) {
        if (e.events.hasOwnProperty("keyboard")) return !1;
        e.events.keyboard = h("keydown", {
            onElement: window,
            withCallback: function(t, i) {
                var n = (t = t || window.event).keyCode;
                if (9 == n) {
                    var s = document.querySelector(".gbtn.focused");
                    if (!s) {
                        var l = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                        if ("input" == l || "textarea" == l || "button" == l) return;
                    }
                    t.preventDefault();
                    var o = document.querySelectorAll(".gbtn[data-taborder]");
                    if (!o || o.length <= 0) return;
                    if (!s) {
                        var r = X();
                        return void (r && (r.focus(), d(r, "focused")));
                    }
                    var a = X(s.getAttribute("data-taborder"));
                    c(s, "focused"), a && (a.focus(), d(a, "focused"));
                }
                39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close();
            }
        });
    }
    var q = s(function e(t, n) {
        var s = this, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (i(this, e), this.img = t, this.slide = n, this.onclose = l, this.img.setZoomEvents) return !1;
        this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(e) {
            return s.dragStart(e);
        }, !1), this.img.addEventListener("mouseup", function(e) {
            return s.dragEnd(e);
        }, !1), this.img.addEventListener("mousemove", function(e) {
            return s.drag(e);
        }, !1), this.img.addEventListener("click", function(e) {
            return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void (s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn();
        }, !1), this.img.setZoomEvents = !0;
    }, [
        {
            key: "zoomIn",
            value: function() {
                var e = this.widowWidth();
                if (!(this.zoomedIn || e <= 768)) {
                    var t = this.img;
                    if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
                        var i = e / 2 - t.naturalWidth / 2;
                        this.setTranslate(this.img.parentNode, i, 0);
                    }
                    this.slide.classList.add("zoomed"), this.zoomedIn = !0;
                }
            }
        },
        {
            key: "zoomOut",
            value: function() {
                this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose();
            }
        },
        {
            key: "dragStart",
            value: function(e) {
                e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1;
            }
        },
        {
            key: "dragEnd",
            value: function(e) {
                var t = this;
                e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function() {
                    t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging");
                }, 100);
            }
        },
        {
            key: "drag",
            value: function(e) {
                this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY));
            }
        },
        {
            key: "onMove",
            value: function(e) {
                if (this.zoomedIn) {
                    var t = e.clientX - this.img.naturalWidth / 2, i = e.clientY - this.img.naturalHeight / 2;
                    this.setTranslate(this.img, t, i);
                }
            }
        },
        {
            key: "setTranslate",
            value: function(e, t, i) {
                e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)";
            }
        },
        {
            key: "widowWidth",
            value: function() {
                return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            }
        }
    ]), N = s(function e() {
        var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i(this, e);
        var s = n.dragEl, l = n.toleranceX, o = void 0 === l ? 40 : l, r = n.toleranceY, a = void 0 === r ? 65 : r, h = n.slide, d = void 0 === h ? null : h, c = n.instance, u = void 0 === c ? null : c;
        this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o, this.toleranceY = a, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = d, this.instance = u, this.el.addEventListener("mousedown", function(e) {
            return t.dragStart(e);
        }, !1), this.el.addEventListener("mouseup", function(e) {
            return t.dragEnd(e);
        }, !1), this.el.addEventListener("mousemove", function(e) {
            return t.drag(e);
        }, !1);
    }, [
        {
            key: "dragStart",
            value: function(e) {
                if (this.slide.classList.contains("zoomed")) this.active = !1;
                else {
                    "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                    var t = e.target.nodeName.toLowerCase();
                    e.target.classList.contains("nodrag") || g(e.target, ".nodrag") || -1 !== [
                        "input",
                        "select",
                        "textarea",
                        "button",
                        "a"
                    ].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && g(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = g(e.target, ".ginner-container")));
                }
            }
        },
        {
            key: "dragEnd",
            value: function(e) {
                var t = this;
                e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function() {
                    t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = "";
                }, 100);
            }
        },
        {
            key: "drag",
            value: function(e) {
                if (this.active) {
                    e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                    var t = Math.abs(this.currentX), i = Math.abs(this.currentY);
                    if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                        this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                        var n = this.shouldChange();
                        if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void ("left" == n && this.instance.nextSlide());
                    }
                    if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                        this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                        var s = this.shouldClose();
                        return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0), void (this.instance.settings.dragAutoSnap && s && this.instance.close());
                    }
                }
            }
        },
        {
            key: "shouldChange",
            value: function() {
                var e = !1;
                if (Math.abs(this.currentX) >= this.toleranceX) {
                    var t = this.currentX > 0 ? "right" : "left";
                    ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t);
                }
                return e;
            }
        },
        {
            key: "shouldClose",
            value: function() {
                var e = !1;
                return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e;
            }
        },
        {
            key: "setTranslate",
            value: function(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
            }
        }
    ]);
    function D(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = new Image, o = "gSlideTitle_" + i, r = "gSlideDesc_" + i;
        l.addEventListener("load", function() {
            C(n) && n();
        }, !1), l.src = t.href, "" != t.sizes && "" != t.srcset && (l.sizes = t.sizes, l.srcset = t.srcset), l.alt = "", O(t.alt) || "" === t.alt || (l.alt = t.alt), "" !== t.title && l.setAttribute("aria-labelledby", o), "" !== t.description && l.setAttribute("aria-describedby", r), t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (l.style.width = t.width), t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (l.style.height = t.height), s.insertBefore(l, s.firstChild);
    }
    function _(e, t, i, n) {
        var s = this, l = e.querySelector(".ginner-container"), o = "gvideo" + i, r = e.querySelector(".gslide-media"), a = this.getAllPlayers();
        d(l, "gvideo-container"), r.insertBefore(y('<div class="gvideo-wrapper"></div>'), r.firstChild);
        var h = e.querySelector(".gvideo-wrapper");
        w(this.settings.plyr.css, "Plyr");
        var c = t.href, u = null == t ? void 0 : t.videoProvider, g = !1;
        r.style.maxWidth = t.width, w(this.settings.plyr.js, "Plyr", function() {
            if (!u && c.match(/vimeo\.com\/([0-9]*)/) && (u = "vimeo"), !u && (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/)) && (u = "youtube"), "local" === u || !u) {
                u = "local";
                var l = '<video id="' + o + '" ';
                l += 'style="background:#000; max-width: '.concat(t.width, ';" '), l += 'preload="metadata" ', l += 'x-webkit-airplay="allow" ', l += "playsinline ", l += "controls ", l += 'class="gvideo-local">', l += '<source src="'.concat(c, '">'), g = y(l += "</video>");
            }
            var r = g || y('<div id="'.concat(o, '" data-plyr-provider="').concat(u, '" data-plyr-embed-id="').concat(c, '"></div>'));
            d(h, "".concat(u, "-video gvideo")), h.appendChild(r), h.setAttribute("data-id", o), h.setAttribute("data-index", i);
            var v = P(s.settings.plyr, "config") ? s.settings.plyr.config : {}, f = new Plyr("#" + o, v);
            f.on("ready", function(e) {
                a[o] = e.detail.plyr, C(n) && n();
            }), S(function() {
                return e.querySelector("iframe") && "true" == e.querySelector("iframe").dataset.ready;
            }, function() {
                s.resize(e);
            }), f.on("enterfullscreen", W), f.on("exitfullscreen", W);
        });
    }
    function W(e) {
        var t = g(e.target, ".gslide-media");
        "enterfullscreen" === e.type && d(t, "fullscreen"), "exitfullscreen" === e.type && c(t, "fullscreen");
    }
    function B(e, t, i, n) {
        var s, l = this, o = e.querySelector(".gslide-media"), r = !(!P(t, "href") || !t.href) && t.href.split("#").pop().trim(), a = !(!P(t, "content") || !t.content) && t.content;
        if (a && (k(a) && (s = y('<div class="ginlined-content">'.concat(a, "</div>"))), E(a))) {
            "none" == a.style.display && (a.style.display = "block");
            var c = document.createElement("div");
            c.className = "ginlined-content", c.appendChild(a), s = c;
        }
        if (r) {
            var u = document.getElementById(r);
            if (!u) return !1;
            var g = u.cloneNode(!0);
            g.style.height = t.height, g.style.maxWidth = t.width, d(g, "ginlined-content"), s = g;
        }
        if (!s) return console.error("Unable to append inline slide content", t), !1;
        o.style.height = t.height, o.style.width = t.width, o.appendChild(s), this.events["inlineclose" + r] = h("click", {
            onElement: o.querySelectorAll(".gtrigger-close"),
            withCallback: function(e) {
                e.preventDefault(), l.close();
            }
        }), C(n) && n();
    }
    function H(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = function(e) {
            var t = e.url, i = e.allow, n = e.callback, s = e.appendTo, l = document.createElement("iframe");
            return l.className = "vimeo-video gvideo", l.src = t, l.style.width = "100%", l.style.height = "100%", i && l.setAttribute("allow", i), l.onload = function() {
                l.onload = null, d(l, "node-ready"), C(n) && n();
            }, s && s.appendChild(l), l;
        }({
            url: t.href,
            callback: n
        });
        s.parentNode.style.maxWidth = t.width, s.parentNode.style.height = t.height, s.appendChild(l);
    }
    var j = s(function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i(this, e), this.defaults = {
            href: "",
            sizes: "",
            srcset: "",
            title: "",
            type: "",
            videoProvider: "",
            description: "",
            alt: "",
            descPosition: "bottom",
            effect: "",
            width: "",
            height: "",
            content: !1,
            zoomable: !0,
            draggable: !0
        }, I(t) && (this.defaults = o(this.defaults, t));
    }, [
        {
            key: "sourceType",
            value: function(e) {
                var t = e;
                return null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/) ? "image" : e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/) || e.match(/vimeo\.com\/([0-9]*)/) || null !== e.match(/\.(mp4|ogg|webm|mov)/) ? "video" : null !== e.match(/\.(mp3|wav|wma|aac|ogg)/) ? "audio" : e.indexOf("#") > -1 && "" !== t.split("#").pop().trim() ? "inline" : e.indexOf("goajax=true") > -1 ? "ajax" : "external";
            }
        },
        {
            key: "parseConfig",
            value: function(e, t) {
                var i = this, n = o({
                    descPosition: t.descPosition
                }, this.defaults);
                if (I(e) && !E(e)) {
                    P(e, "type") || (P(e, "content") && e.content ? e.type = "inline" : P(e, "href") && (e.type = this.sourceType(e.href)));
                    var s = o(n, e);
                    return this.setSize(s, t), s;
                }
                var l = "", a = e.getAttribute("data-glightbox"), h = e.nodeName.toLowerCase();
                if ("a" === h && (l = e.href), "img" === h && (l = e.src, n.alt = e.alt), n.href = l, r(n, function(s, l) {
                    P(t, l) && "width" !== l && (n[l] = t[l]);
                    var o = e.dataset[l];
                    O(o) || (n[l] = i.sanitizeValue(o));
                }), n.content && (n.type = "inline"), !n.type && l && (n.type = this.sourceType(l)), O(a)) {
                    if (!n.title && "a" == h) {
                        var d = e.title;
                        O(d) || "" === d || (n.title = d);
                    }
                    if (!n.title && "img" == h) {
                        var c = e.alt;
                        O(c) || "" === c || (n.title = c);
                    }
                } else {
                    var u = [];
                    r(n, function(e, t) {
                        u.push(";\\s?" + t);
                    }), u = u.join("\\s?:|"), "" !== a.trim() && r(n, function(e, t) {
                        var s = a, l = new RegExp("s?" + t + "s?:s?(.*?)(" + u + "s?:|$)"), o = s.match(l);
                        if (o && o.length && o[1]) {
                            var r = o[1].trim().replace(/;\s*$/, "");
                            n[t] = i.sanitizeValue(r);
                        }
                    });
                }
                if (n.description && "." === n.description.substring(0, 1)) {
                    var g;
                    try {
                        g = document.querySelector(n.description).innerHTML;
                    } catch (e) {
                        if (!(e instanceof DOMException)) throw e;
                    }
                    g && (n.description = g);
                }
                if (!n.description) {
                    var v = e.querySelector(".glightbox-desc");
                    v && (n.description = v.innerHTML);
                }
                return this.setSize(n, t, e), this.slideConfig = n, n;
            }
        },
        {
            key: "setSize",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width), s = this.checkSize(t.height);
                return e.width = P(e, "width") && "" !== e.width ? this.checkSize(e.width) : n, e.height = P(e, "height") && "" !== e.height ? this.checkSize(e.height) : s, i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width, e._hasCustomHeight = !!i.dataset.height), e;
            }
        },
        {
            key: "checkSize",
            value: function(e) {
                return z(e) ? "".concat(e, "px") : e;
            }
        },
        {
            key: "sanitizeValue",
            value: function(e) {
                return "true" !== e && "false" !== e ? e : "true" === e;
            }
        }
    ]), V = s(function e(t, n, s) {
        i(this, e), this.element = t, this.instance = n, this.index = s;
    }, [
        {
            key: "setContent",
            value: function() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (u(t, "loaded")) return !1;
                var n = this.instance.settings, s = this.slideConfig, l = T();
                C(n.beforeSlideLoad) && n.beforeSlideLoad({
                    index: this.index,
                    slide: t,
                    player: !1
                });
                var o = s.type, r = s.descPosition, a = t.querySelector(".gslide-media"), h = t.querySelector(".gslide-title"), c = t.querySelector(".gslide-desc"), g = t.querySelector(".gdesc-inner"), v = i, f = "gSlideTitle_" + this.index, p = "gSlideDesc_" + this.index;
                if (C(n.afterSlideLoad) && (v = function() {
                    C(i) && i(), n.afterSlideLoad({
                        index: e.index,
                        slide: t,
                        player: e.instance.getSlidePlayerInstance(e.index)
                    });
                }), "" == s.title && "" == s.description ? g && g.parentNode.parentNode.removeChild(g.parentNode) : (h && "" !== s.title ? (h.id = f, h.innerHTML = s.title) : h.parentNode.removeChild(h), c && "" !== s.description ? (c.id = p, l && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText), c.innerHTML = s.smallDescription, this.descriptionEvents(c, s)) : c.innerHTML = s.description) : c.parentNode.removeChild(c), d(a.parentNode, "desc-".concat(r)), d(g.parentNode, "description-".concat(r))), d(a, "gslide-".concat(o)), d(t, "loaded"), "video" !== o) {
                    if ("external" !== o) return "inline" === o ? (B.apply(this.instance, [
                        t,
                        s,
                        this.index,
                        v
                    ]), void (s.draggable && new N({
                        dragEl: t.querySelector(".gslide-inline"),
                        toleranceX: n.dragToleranceX,
                        toleranceY: n.dragToleranceY,
                        slide: t,
                        instance: this.instance
                    }))) : void ("image" !== o ? C(v) && v() : D(t, s, this.index, function() {
                        var i = t.querySelector("img");
                        s.draggable && new N({
                            dragEl: i,
                            toleranceX: n.dragToleranceX,
                            toleranceY: n.dragToleranceY,
                            slide: t,
                            instance: e.instance
                        }), s.zoomable && i.naturalWidth > i.offsetWidth && (d(i, "zoomable"), new q(i, t, function() {
                            e.instance.resize();
                        })), C(v) && v();
                    }));
                    H.apply(this, [
                        t,
                        s,
                        this.index,
                        v
                    ]);
                } else _.apply(this.instance, [
                    t,
                    s,
                    this.index,
                    v
                ]);
            }
        },
        {
            key: "slideShortDesc",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = document.createElement("div");
                n.innerHTML = e;
                var s = n.innerText, l = i;
                if ((e = s.trim()).length <= t) return e;
                var o = e.substr(0, t - 1);
                return l ? (n = null, o + '... <a href="#" class="desc-more">' + i + "</a>") : o;
            }
        },
        {
            key: "descriptionEvents",
            value: function(e, t) {
                var i = this, n = e.querySelector(".desc-more");
                if (!n) return !1;
                h("click", {
                    onElement: n,
                    withCallback: function(e, n) {
                        e.preventDefault();
                        var s = document.body, l = g(n, ".gslide-desc");
                        if (!l) return !1;
                        l.innerHTML = t.description, d(s, "gdesc-open");
                        var o = h("click", {
                            onElement: [
                                s,
                                g(l, ".gslide-description")
                            ],
                            withCallback: function(e, n) {
                                "a" !== e.target.nodeName.toLowerCase() && (c(s, "gdesc-open"), d(s, "gdesc-closed"), l.innerHTML = t.smallDescription, i.descriptionEvents(l, t), setTimeout(function() {
                                    c(s, "gdesc-closed");
                                }, 400), o.destroy());
                            }
                        });
                    }
                });
            }
        },
        {
            key: "create",
            value: function() {
                return y(this.instance.settings.slideHTML);
            }
        },
        {
            key: "getConfig",
            value: function() {
                E(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                var e = new j(this.instance.settings.slideExtraAttributes);
                return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig;
            }
        }
    ]);
    function F(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y);
    }
    function R(e, t) {
        var i = function(e, t) {
            var i = F(e) * F(t);
            if (0 === i) return 0;
            var n = function(e, t) {
                return e.x * t.x + e.y * t.y;
            }(e, t) / i;
            return n > 1 && (n = 1), Math.acos(n);
        }(e, t);
        return function(e, t) {
            return e.x * t.y - t.x * e.y;
        }(e, t) > 0 && (i *= -1), 180 * i / Math.PI;
    }
    var G = s(function e(t) {
        i(this, e), this.handlers = [], this.el = t;
    }, [
        {
            key: "add",
            value: function(e) {
                this.handlers.push(e);
            }
        },
        {
            key: "del",
            value: function(e) {
                e || (this.handlers = []);
                for(var t = this.handlers.length; t >= 0; t--)this.handlers[t] === e && this.handlers.splice(t, 1);
            }
        },
        {
            key: "dispatch",
            value: function() {
                for(var e = 0, t = this.handlers.length; e < t; e++){
                    var i = this.handlers[e];
                    "function" == typeof i && i.apply(this.el, arguments);
                }
            }
        }
    ]);
    function Z(e, t) {
        var i = new G(e);
        return i.add(t), i;
    }
    var U = s(function e(t, n) {
        i(this, e), this.element = "string" == typeof t ? document.querySelector(t) : t, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
            x: null,
            y: null
        }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
        var s = function() {};
        this.rotate = Z(this.element, n.rotate || s), this.touchStart = Z(this.element, n.touchStart || s), this.multipointStart = Z(this.element, n.multipointStart || s), this.multipointEnd = Z(this.element, n.multipointEnd || s), this.pinch = Z(this.element, n.pinch || s), this.swipe = Z(this.element, n.swipe || s), this.tap = Z(this.element, n.tap || s), this.doubleTap = Z(this.element, n.doubleTap || s), this.longTap = Z(this.element, n.longTap || s), this.singleTap = Z(this.element, n.singleTap || s), this.pressMove = Z(this.element, n.pressMove || s), this.twoFingerPressMove = Z(this.element, n.twoFingerPressMove || s), this.touchMove = Z(this.element, n.touchMove || s), this.touchEnd = Z(this.element, n.touchEnd || s), this.touchCancel = Z(this.element, n.touchCancel || s), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
            x: null,
            y: null
        };
    }, [
        {
            key: "start",
            value: function(e) {
                if (e.touches) {
                    if (e.target && e.target.nodeName && [
                        "a",
                        "button",
                        "input"
                    ].indexOf(e.target.nodeName.toLowerCase()) >= 0) console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase());
                    else {
                        this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                        var t = this.preV;
                        if (e.touches.length > 1) {
                            this._cancelLongTap(), this._cancelSingleTap();
                            var i = {
                                x: e.touches[1].pageX - this.x1,
                                y: e.touches[1].pageY - this.y1
                            };
                            t.x = i.x, t.y = i.y, this.pinchStartLen = F(t), this.multipointStart.dispatch(e, this.element);
                        }
                        this._preventTap = !1, this.longTapTimeout = setTimeout((function() {
                            this.longTap.dispatch(e, this.element), this._preventTap = !0;
                        }).bind(this), 750);
                    }
                }
            }
        },
        {
            key: "move",
            value: function(e) {
                if (e.touches) {
                    var t = this.preV, i = e.touches.length, n = e.touches[0].pageX, s = e.touches[0].pageY;
                    if (this.isDoubleTap = !1, i > 1) {
                        var l = e.touches[1].pageX, o = e.touches[1].pageY, r = {
                            x: e.touches[1].pageX - n,
                            y: e.touches[1].pageY - s
                        };
                        null !== t.x && (this.pinchStartLen > 0 && (e.zoom = F(r) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = R(r, t), this.rotate.dispatch(e, this.element)), t.x = r.x, t.y = r.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + l - this.sx2) / 2, e.deltaY = (s - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = l, this.sy2 = o;
                    } else {
                        if (null !== this.x2) {
                            e.deltaX = n - this.x2, e.deltaY = s - this.y2;
                            var a = Math.abs(this.x1 - this.x2), h = Math.abs(this.y1 - this.y2);
                            (a > 10 || h > 10) && (this._preventTap = !0);
                        } else e.deltaX = 0, e.deltaY = 0;
                        this.pressMove.dispatch(e, this.element);
                    }
                    this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = s, i > 1 && e.preventDefault();
                }
            }
        },
        {
            key: "end",
            value: function(e) {
                if (e.changedTouches) {
                    this._cancelLongTap();
                    var t = this;
                    e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
                        t.swipe.dispatch(e, t.element);
                    }, 0)) : (this.tapTimeout = setTimeout(function() {
                        t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1);
                    }, 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout(function() {
                        t.singleTap.dispatch(e, t.element);
                    }, 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null;
                }
            }
        },
        {
            key: "cancelAll",
            value: function() {
                this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout);
            }
        },
        {
            key: "cancel",
            value: function(e) {
                this.cancelAll(), this.touchCancel.dispatch(e, this.element);
            }
        },
        {
            key: "_cancelLongTap",
            value: function() {
                clearTimeout(this.longTapTimeout);
            }
        },
        {
            key: "_cancelSingleTap",
            value: function() {
                clearTimeout(this.singleTapTimeout);
            }
        },
        {
            key: "_swipeDirection",
            value: function(e, t, i, n) {
                return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down";
            }
        },
        {
            key: "on",
            value: function(e, t) {
                this[e] && this[e].add(t);
            }
        },
        {
            key: "off",
            value: function(e, t) {
                this[e] && this[e].del(t);
            }
        },
        {
            key: "destroy",
            value: function() {
                return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null;
            }
        }
    ]);
    function $(e) {
        var t = function() {
            var e, t = document.createElement("fakeelement"), i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for(e in i)if (void 0 !== t.style[e]) return i[e];
        }(), i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u(e, "gslide-media") ? e : e.querySelector(".gslide-media"), s = g(n, ".ginner-container"), l = e.querySelector(".gslide-description");
        i > 769 && (n = s), d(n, "greset"), f(n, "translate3d(0, 0, 0)"), h(t, {
            onElement: n,
            once: !0,
            withCallback: function(e, t) {
                c(n, "greset");
            }
        }), n.style.opacity = "", l && (l.style.opacity = "");
    }
    function J(e) {
        if (e.events.hasOwnProperty("touch")) return !1;
        var t, i, n, s = x(), l = s.width, o = s.height, r = !1, a = null, h = null, v = null, p = !1, m = 1, y = 1, b = !1, S = !1, w = null, T = null, C = null, k = null, E = 0, A = 0, L = !1, I = !1, O = {}, P = {}, M = 0, z = 0, X = document.getElementById("glightbox-slider"), Y = document.querySelector(".goverlay"), q = new U(X, {
            touchStart: function(t) {
                if (r = !0, (u(t.targetTouches[0].target, "ginner-container") || g(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1), g(t.targetTouches[0].target, ".gslide-inline") && !u(t.targetTouches[0].target.parentNode, "gslide-inline") && (r = !1), r) {
                    if (P = t.targetTouches[0], O.pageX = t.targetTouches[0].pageX, O.pageY = t.targetTouches[0].pageY, M = t.targetTouches[0].clientX, z = t.targetTouches[0].clientY, a = e.activeSlide, h = a.querySelector(".gslide-media"), n = a.querySelector(".gslide-inline"), v = null, u(h, "gslide-image") && (v = h.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (h = a.querySelector(".ginner-container")), c(Y, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
                    t.preventDefault();
                }
            },
            touchMove: function(s) {
                if (r && (P = s.targetTouches[0], !b && !S)) {
                    if (n && n.offsetHeight > o) {
                        var a = O.pageX - P.pageX;
                        if (Math.abs(a) <= 13) return !1;
                    }
                    p = !0;
                    var d, c = s.targetTouches[0].clientX, u = s.targetTouches[0].clientY, g = M - c, m = z - u;
                    if (Math.abs(g) > Math.abs(m) ? (L = !1, I = !0) : (I = !1, L = !0), t = P.pageX - O.pageX, E = 100 * t / l, i = P.pageY - O.pageY, A = 100 * i / o, L && v && (d = 1 - Math.abs(i) / o, Y.style.opacity = d, e.settings.touchFollowAxis && (E = 0)), I && (d = 1 - Math.abs(t) / l, h.style.opacity = d, e.settings.touchFollowAxis && (A = 0)), !v) return f(h, "translate3d(".concat(E, "%, 0, 0)"));
                    f(h, "translate3d(".concat(E, "%, ").concat(A, "%, 0)"));
                }
            },
            touchEnd: function() {
                if (r) {
                    if (p = !1, S || b) return C = w, void (k = T);
                    var t = Math.abs(parseInt(A)), i = Math.abs(parseInt(E));
                    if (!(t > 29 && v)) return t < 29 && i < 25 ? (d(Y, "greset"), Y.style.opacity = 1, $(h)) : void 0;
                    e.close();
                }
            },
            multipointEnd: function() {
                setTimeout(function() {
                    b = !1;
                }, 50);
            },
            multipointStart: function() {
                b = !0, m = y || 1;
            },
            pinch: function(e) {
                if (!v || p) return !1;
                b = !0, v.scaleX = v.scaleY = m * e.zoom;
                var t = m * e.zoom;
                if (S = !0, t <= 1) return S = !1, t = 1, k = null, C = null, w = null, T = null, void v.setAttribute("style", "");
                t > 4.5 && (t = 4.5), v.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), y = t;
            },
            pressMove: function(e) {
                if (S && !b) {
                    var t = P.pageX - O.pageX, i = P.pageY - O.pageY;
                    C && (t += C), k && (i += k), w = t, T = i;
                    var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                    y && (n += " scale3d(".concat(y, ", ").concat(y, ", 1)")), f(v, n);
                }
            },
            swipe: function(t) {
                if (!S) {
                    if (b) b = !1;
                    else {
                        if ("Left" == t.direction) {
                            if (e.index == e.elements.length - 1) return $(h);
                            e.nextSlide();
                        }
                        if ("Right" == t.direction) {
                            if (0 == e.index) return $(h);
                            e.prevSlide();
                        }
                    }
                }
            }
        });
        e.events.touch = q;
    }
    var K = T(), Q = null !== T() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints, ee = document.getElementsByTagName("html")[0], te = {
        selector: ".glightbox",
        elements: null,
        skin: "clean",
        theme: "clean",
        closeButton: !0,
        startAt: null,
        autoplayVideos: !0,
        autofocusVideos: !0,
        descPosition: "bottom",
        width: "900px",
        height: "506px",
        videosWidth: "960px",
        beforeSlideChange: null,
        afterSlideChange: null,
        beforeSlideLoad: null,
        afterSlideLoad: null,
        slideInserted: null,
        slideRemoved: null,
        slideExtraAttributes: null,
        onOpen: null,
        onClose: null,
        loop: !1,
        zoomable: !0,
        draggable: !0,
        dragAutoSnap: !1,
        dragToleranceX: 40,
        dragToleranceY: 65,
        preload: !0,
        oneSlidePerOpen: !1,
        touchNavigation: !0,
        touchFollowAxis: !0,
        keyboardNavigation: !0,
        closeOnOutsideClick: !0,
        plugins: !1,
        plyr: {
            css: "https://cdn.plyr.io/3.6.12/plyr.css",
            js: "https://cdn.plyr.io/3.6.12/plyr.js",
            config: {
                ratio: "16:9",
                fullscreen: {
                    enabled: !0,
                    iosNative: !0
                },
                youtube: {
                    noCookie: !0,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3
                },
                vimeo: {
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    transparent: !1
                }
            }
        },
        openEffect: "zoom",
        closeEffect: "zoom",
        slideEffect: "slide",
        moreText: "See more",
        moreLength: 60,
        cssEfects: {
            fade: {
                in: "fadeIn",
                out: "fadeOut"
            },
            zoom: {
                in: "zoomIn",
                out: "zoomOut"
            },
            slide: {
                in: "slideInRight",
                out: "slideOutLeft"
            },
            slideBack: {
                in: "slideInLeft",
                out: "slideOutRight"
            },
            none: {
                in: "none",
                out: "none"
            }
        },
        svg: {
            close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
            next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
            prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
        },
        slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
        lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
    }, ie = s(function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i(this, e), this.customOptions = t, this.settings = o(te, t), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1;
    }, [
        {
            key: "init",
            value: function() {
                var e = this, t = this.getSelector();
                t && (this.baseEvents = h("click", {
                    onElement: t,
                    withCallback: function(t, i) {
                        t.preventDefault(), e.open(i);
                    }
                })), this.elements = this.getElements();
            }
        },
        {
            key: "open",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (0 === this.elements.length) return !1;
                this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                var i = z(t) ? t : this.settings.startAt;
                if (E(e)) {
                    var n = e.getAttribute("data-gallery");
                    n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), O(i) && (i = this.getElementIndex(e)) < 0 && (i = 0);
                }
                z(i) || (i = 0), this.build(), v(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                var s = document.body, l = window.innerWidth - document.documentElement.clientWidth;
                if (l > 0) {
                    var o = document.createElement("style");
                    o.type = "text/css", o.className = "gcss-styles", o.innerText = ".gscrollbar-fixer {margin-right: ".concat(l, "px}"), document.head.appendChild(o), d(s, "gscrollbar-fixer");
                }
                d(s, "glightbox-open"), d(ee, "glightbox-open"), K && (d(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 === this.elements.length ? (d(this.prevButton, "glightbox-button-hidden"), d(this.nextButton, "glightbox-button-hidden")) : (c(this.prevButton, "glightbox-button-hidden"), c(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), C(this.settings.onOpen) && this.settings.onOpen(), Q && this.settings.touchNavigation && J(this), this.settings.keyboardNavigation && Y(this);
            }
        },
        {
            key: "openAt",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                this.open(null, e);
            }
        },
        {
            key: "showSlide",
            value: function() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                p(this.loader), this.index = parseInt(t);
                var n = this.slidesContainer.querySelector(".current");
                n && c(n, "current"), this.slideAnimateOut();
                var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                if (u(s, "loaded")) this.slideAnimateIn(s, i), m(this.loader);
                else {
                    p(this.loader);
                    var l = this.elements[t], o = {
                        index: this.index,
                        slide: s,
                        slideNode: s,
                        slideConfig: l.slideConfig,
                        slideIndex: this.index,
                        trigger: l.node,
                        player: null
                    };
                    this.trigger("slide_before_load", o), l.instance.setContent(s, function() {
                        m(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", o);
                    });
                }
                this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && u(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s;
            }
        },
        {
            key: "preloadSlide",
            value: function(e) {
                var t = this;
                if (e < 0 || e > this.elements.length - 1) return !1;
                if (O(this.elements[e])) return !1;
                var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                if (u(i, "loaded")) return !1;
                var n = this.elements[e], s = n.type, l = {
                    index: e,
                    slide: i,
                    slideNode: i,
                    slideConfig: n.slideConfig,
                    slideIndex: e,
                    trigger: n.node,
                    player: null
                };
                this.trigger("slide_before_load", l), "video" === s || "external" === s ? setTimeout(function() {
                    n.instance.setContent(i, function() {
                        t.trigger("slide_after_load", l);
                    });
                }, 200) : n.instance.setContent(i, function() {
                    t.trigger("slide_after_load", l);
                });
            }
        },
        {
            key: "prevSlide",
            value: function() {
                this.goToSlide(this.index - 1);
            }
        },
        {
            key: "nextSlide",
            value: function() {
                this.goToSlide(this.index + 1);
            }
        },
        {
            key: "goToSlide",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
                e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e);
            }
        },
        {
            key: "insertSlide",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                t < 0 && (t = this.elements.length);
                var i = new V(e, this, t), n = i.getConfig(), s = o({}, n), l = i.create(), r = this.elements.length - 1;
                s.index = t, s.node = !1, s.instance = i, s.slideConfig = n, this.elements.splice(t, 0, s);
                var a = null, h = null;
                if (this.slidesContainer) {
                    if (t > r) this.slidesContainer.appendChild(l);
                    else {
                        var d = this.slidesContainer.querySelectorAll(".gslide")[t];
                        this.slidesContainer.insertBefore(l, d);
                    }
                    (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 === this.index && 0 === t && (this.index = 1), this.updateNavigationClasses(), a = this.slidesContainer.querySelectorAll(".gslide")[t], h = this.getSlidePlayerInstance(t), s.slideNode = a;
                }
                this.trigger("slide_inserted", {
                    index: t,
                    slide: a,
                    slideNode: a,
                    slideConfig: n,
                    slideIndex: t,
                    trigger: null,
                    player: h
                }), C(this.settings.slideInserted) && this.settings.slideInserted({
                    index: t,
                    slide: a,
                    player: h
                });
            }
        },
        {
            key: "removeSlide",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                if (e < 0 || e > this.elements.length - 1) return !1;
                var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), C(this.settings.slideRemoved) && this.settings.slideRemoved(e);
            }
        },
        {
            key: "slideAnimateIn",
            value: function(e, t) {
                var i = this, n = e.querySelector(".gslide-media"), s = e.querySelector(".gslide-description"), l = {
                    index: this.prevActiveSlideIndex,
                    slide: this.prevActiveSlide,
                    slideNode: this.prevActiveSlide,
                    slideIndex: this.prevActiveSlide,
                    slideConfig: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                    trigger: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                    player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                }, o = {
                    index: this.index,
                    slide: this.activeSlide,
                    slideNode: this.activeSlide,
                    slideConfig: this.elements[this.index].slideConfig,
                    slideIndex: this.index,
                    trigger: this.elements[this.index].node,
                    player: this.getSlidePlayerInstance(this.index)
                };
                if (n.offsetWidth > 0 && s && (m(s), s.style.display = ""), c(e, this.effectsClasses), t) v(e, this.settings.cssEfects[this.settings.openEffect].in, function() {
                    i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                        prev: l,
                        current: o
                    }), C(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                        l,
                        o
                    ]);
                });
                else {
                    var r = this.settings.slideEffect, a = "none" !== r ? this.settings.cssEfects[r].in : r;
                    this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a = this.settings.cssEfects.slideBack.in), v(e, a, function() {
                        i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                            prev: l,
                            current: o
                        }), C(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                            l,
                            o
                        ]);
                    });
                }
                setTimeout(function() {
                    i.resize(e);
                }, 100), d(e, "current");
            }
        },
        {
            key: "slideAnimateOut",
            value: function() {
                if (!this.prevActiveSlide) return !1;
                var e = this.prevActiveSlide;
                c(e, this.effectsClasses), d(e, "prev");
                var t = this.settings.slideEffect, i = "none" !== t ? this.settings.cssEfects[t].out : t;
                this.slidePlayerPause(e), this.trigger("slide_before_change", {
                    prev: {
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        slideNode: this.prevActiveSlide,
                        slideIndex: this.prevActiveSlideIndex,
                        slideConfig: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                        trigger: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    },
                    current: {
                        index: this.index,
                        slide: this.activeSlide,
                        slideNode: this.activeSlide,
                        slideIndex: this.index,
                        slideConfig: this.elements[this.index].slideConfig,
                        trigger: this.elements[this.index].node,
                        player: this.getSlidePlayerInstance(this.index)
                    }
                }), C(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [
                    {
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    },
                    {
                        index: this.index,
                        slide: this.activeSlide,
                        player: this.getSlidePlayerInstance(this.index)
                    }
                ]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out), v(e, i, function() {
                    var t = e.querySelector(".ginner-container"), i = e.querySelector(".gslide-media"), n = e.querySelector(".gslide-description");
                    t.style.transform = "", i.style.transform = "", c(i, "greset"), i.style.opacity = "", n && (n.style.opacity = ""), c(e, "prev");
                });
            }
        },
        {
            key: "getAllPlayers",
            value: function() {
                return this.videoPlayers;
            }
        },
        {
            key: "getSlidePlayerInstance",
            value: function(e) {
                var t = "gvideo" + e, i = this.getAllPlayers();
                return !(!P(i, t) || !i[t]) && i[t];
            }
        },
        {
            key: "stopSlideVideo",
            value: function(e) {
                if (E(e)) {
                    var t = e.querySelector(".gvideo-wrapper");
                    t && (e = t.getAttribute("data-index"));
                }
                console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                var i = this.getSlidePlayerInstance(e);
                i && i.playing && i.pause();
            }
        },
        {
            key: "slidePlayerPause",
            value: function(e) {
                if (E(e)) {
                    var t = e.querySelector(".gvideo-wrapper");
                    t && (e = t.getAttribute("data-index"));
                }
                var i = this.getSlidePlayerInstance(e);
                i && i.playing && i.pause();
            }
        },
        {
            key: "playSlideVideo",
            value: function(e) {
                if (E(e)) {
                    var t = e.querySelector(".gvideo-wrapper");
                    t && (e = t.getAttribute("data-index"));
                }
                console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                var i = this.getSlidePlayerInstance(e);
                i && !i.playing && i.play();
            }
        },
        {
            key: "slidePlayerPlay",
            value: function(e) {
                var t;
                if (!K || null !== (t = this.settings.plyr.config) && void 0 !== t && t.muted) {
                    if (E(e)) {
                        var i = e.querySelector(".gvideo-wrapper");
                        i && (e = i.getAttribute("data-index"));
                    }
                    var n = this.getSlidePlayerInstance(e);
                    n && !n.playing && (n.play(), this.settings.autofocusVideos && n.elements.container.focus());
                }
            }
        },
        {
            key: "setElements",
            value: function(e) {
                var t = this;
                this.settings.elements = !1;
                var i = [];
                e && e.length && r(e, function(e, n) {
                    var s = new V(e, t, n), l = s.getConfig(), r = o({}, l);
                    r.slideConfig = l, r.instance = s, r.index = n, i.push(r);
                }), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (r(this.elements, function() {
                    var e = y(t.settings.slideHTML);
                    t.slidesContainer.appendChild(e);
                }), this.showSlide(0, !0)));
            }
        },
        {
            key: "getElementIndex",
            value: function(e) {
                var t = !1;
                return r(this.elements, function(i, n) {
                    if (P(i, "node") && i.node == e) return t = n, !0;
                }), t;
            }
        },
        {
            key: "getElements",
            value: function() {
                var e = this, t = [];
                this.elements = this.elements ? this.elements : [], !O(this.settings.elements) && A(this.settings.elements) && this.settings.elements.length && r(this.settings.elements, function(i, n) {
                    var s = new V(i, e, n), l = s.getConfig(), r = o({}, l);
                    r.node = !1, r.index = n, r.instance = s, r.slideConfig = l, t.push(r);
                });
                var i = !1;
                return this.getSelector() && (i = document.querySelectorAll(this.getSelector())), i ? (r(i, function(i, n) {
                    var s = new V(i, e, n), l = s.getConfig(), r = o({}, l);
                    r.node = i, r.index = n, r.instance = s, r.slideConfig = l, r.gallery = i.getAttribute("data-gallery"), t.push(r);
                }), t) : t;
            }
        },
        {
            key: "getGalleryElements",
            value: function(e, t) {
                return e.filter(function(e) {
                    return e.gallery == t;
                });
            }
        },
        {
            key: "getSelector",
            value: function() {
                return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector);
            }
        },
        {
            key: "getActiveSlide",
            value: function() {
                return this.slidesContainer.querySelectorAll(".gslide")[this.index];
            }
        },
        {
            key: "getActiveSlideIndex",
            value: function() {
                return this.index;
            }
        },
        {
            key: "getAnimationClasses",
            value: function() {
                var e = [];
                for(var t in this.settings.cssEfects)if (this.settings.cssEfects.hasOwnProperty(t)) {
                    var i = this.settings.cssEfects[t];
                    e.push("g".concat(i.in)), e.push("g".concat(i.out));
                }
                return e.join(" ");
            }
        },
        {
            key: "build",
            value: function() {
                var e = this;
                if (this.built) return !1;
                var t = document.body.childNodes, i = [];
                r(t, function(e) {
                    e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i.push(e), e.setAttribute("aria-hidden", "true"));
                });
                var n = P(this.settings.svg, "next") ? this.settings.svg.next : "", s = P(this.settings.svg, "prev") ? this.settings.svg.prev : "", l = P(this.settings.svg, "close") ? this.settings.svg.close : "", o = this.settings.lightboxHTML;
                o = y(o = (o = (o = o.replace(/{nextSVG}/g, n)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, l)), document.body.appendChild(o);
                var a = document.getElementById("glightbox-body");
                this.modal = a;
                var c = a.querySelector(".gclose");
                this.prevButton = a.querySelector(".gprev"), this.nextButton = a.querySelector(".gnext"), this.overlay = a.querySelector(".goverlay"), this.loader = a.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i, this.events = {}, d(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && c && (this.events.close = h("click", {
                    onElement: c,
                    withCallback: function(t, i) {
                        t.preventDefault(), e.close();
                    }
                })), c && !this.settings.closeButton && c.parentNode.removeChild(c), this.nextButton && (this.events.next = h("click", {
                    onElement: this.nextButton,
                    withCallback: function(t, i) {
                        t.preventDefault(), e.nextSlide();
                    }
                })), this.prevButton && (this.events.prev = h("click", {
                    onElement: this.prevButton,
                    withCallback: function(t, i) {
                        t.preventDefault(), e.prevSlide();
                    }
                })), this.settings.closeOnOutsideClick && (this.events.outClose = h("click", {
                    onElement: a,
                    withCallback: function(t, i) {
                        e.preventOutsideClick || u(document.body, "glightbox-mobile") || g(t.target, ".ginner-container") || g(t.target, ".gbtn") || u(t.target, "gnext") || u(t.target, "gprev") || e.close();
                    }
                })), r(this.elements, function(t, i) {
                    e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i];
                }), Q && d(document.body, "glightbox-touch"), this.events.resize = h("resize", {
                    onElement: window,
                    withCallback: function() {
                        e.resize();
                    }
                }), this.built = !0;
            }
        },
        {
            key: "resize",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if ((e = e || this.activeSlide) && !u(e, "zoomed")) {
                    var t = x(), i = e.querySelector(".gvideo-wrapper"), n = e.querySelector(".gslide-image"), s = this.slideDescription, l = t.width, o = t.height;
                    if (l <= 768 ? d(document.body, "glightbox-mobile") : c(document.body, "glightbox-mobile"), i || n) {
                        var r = !1;
                        if (s && (u(s, "description-bottom") || u(s, "description-top")) && !u(s, "gabsolute") && (r = !0), n) {
                            if (l <= 768) n.querySelector("img");
                            else if (r) {
                                var a, h = s.offsetHeight, g = n.querySelector("img"), v = this.elements[this.index].node, f = null !== (a = v.getAttribute("data-height")) && void 0 !== a ? a : "100vh";
                                g.setAttribute("style", "max-height: calc(".concat(f, " - ").concat(h, "px)")), s.setAttribute("style", "max-width: ".concat(g.offsetWidth, "px;"));
                            }
                        }
                        if (i) {
                            var p = P(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                            if (!p) {
                                var m = i.clientWidth, y = i.clientHeight, b = m / y;
                                p = "".concat(m / b, ":").concat(y / b);
                            }
                            var S = p.split(":"), w = this.settings.videosWidth, T = this.settings.videosWidth, C = (T = z(w) || -1 !== w.indexOf("px") ? parseInt(w) : -1 !== w.indexOf("vw") ? l * parseInt(w) / 100 : -1 !== w.indexOf("vh") ? o * parseInt(w) / 100 : -1 !== w.indexOf("%") ? l * parseInt(w) / 100 : parseInt(i.clientWidth)) / (parseInt(S[0]) / parseInt(S[1]));
                            if (C = Math.floor(C), r && (o -= s.offsetHeight), T > l || C > o || o < C && l > T) {
                                var k = i.offsetWidth, E = i.offsetHeight, A = o / E, L = {
                                    width: k * A,
                                    height: E * A
                                };
                                i.parentNode.setAttribute("style", "max-width: ".concat(L.width, "px")), r && s.setAttribute("style", "max-width: ".concat(L.width, "px;"));
                            } else i.parentNode.style.maxWidth = "".concat(w), r && s.setAttribute("style", "max-width: ".concat(w, ";"));
                        }
                    }
                }
            }
        },
        {
            key: "reload",
            value: function() {
                this.init();
            }
        },
        {
            key: "updateNavigationClasses",
            value: function() {
                var e = this.loop();
                c(this.nextButton, "disabled"), c(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (d(this.prevButton, "disabled"), d(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || d(this.nextButton, "disabled") : d(this.prevButton, "disabled");
            }
        },
        {
            key: "loop",
            value: function() {
                var e = P(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                return e = P(this.settings, "loop") ? this.settings.loop : e, e;
            }
        },
        {
            key: "close",
            value: function() {
                var e = this;
                if (!this.lightboxOpen) {
                    if (this.events) {
                        for(var t in this.events)this.events.hasOwnProperty(t) && this.events[t].destroy();
                        this.events = null;
                    }
                    return !1;
                }
                if (this.closing) return !1;
                this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && r(this.bodyHiddenChildElms, function(e) {
                    e.removeAttribute("aria-hidden");
                }), d(this.modal, "glightbox-closing"), v(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), v(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
                    if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
                        for(var t in e.events)e.events.hasOwnProperty(t) && e.events[t].destroy();
                        e.events = null;
                    }
                    var i = document.body;
                    c(ee, "glightbox-open"), c(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), C(e.settings.onClose) && e.settings.onClose();
                    var n = document.querySelector(".gcss-styles");
                    n && n.parentNode.removeChild(n), e.lightboxOpen = !1, e.closing = null;
                });
            }
        },
        {
            key: "destroy",
            value: function() {
                this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy();
            }
        },
        {
            key: "on",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!e || !C(t)) throw new TypeError("Event name and callback must be defined");
                this.apiEvents.push({
                    evt: e,
                    once: i,
                    callback: t
                });
            }
        },
        {
            key: "once",
            value: function(e, t) {
                this.on(e, t, !0);
            }
        },
        {
            key: "trigger",
            value: function(e) {
                var t = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = [];
                r(this.apiEvents, function(t, s) {
                    var l = t.evt, o = t.once, r = t.callback;
                    l == e && (r(i), o && n.push(s));
                }), n.length && r(n, function(e) {
                    return t.apiEvents.splice(e, 1);
                });
            }
        },
        {
            key: "clearAllEvents",
            value: function() {
                this.apiEvents.splice(0, this.apiEvents.length);
            }
        },
        {
            key: "version",
            value: function() {
                return "3.3.0";
            }
        }
    ]);
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = new ie(e);
        return t.init(), t;
    };
});

//# sourceMappingURL=index.031cfdd5.js.map
