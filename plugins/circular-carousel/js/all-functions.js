jQuery(document).ready(function (e) {
    var t = 2, n = 0;
    scrollinit = function (r, i, s, o, u, a, f, l) {
        function p(e) {
            jQuery(".inifiniteLoader").removeClass("fadeOutDown").addClass("fadeInUp");
            jQuery(".numpostinfi").removeClass("fadeInUp").addClass("fadeOutDown");
            jQuery.ajax({
                url: "http://www.google.com",
                type: "post",
                data: "page=pages/" + t,
                dataType: "html",
                success: function (e) {
                    jQuery(".inifiniteLoader").removeClass("fadeInUp").addClass("fadeOutDown");
                    jQuery(".numpostinfi").removeClass("fadeOutDown").addClass("fadeInUp");
                    jQuery("#articlehold").append(e);
                    h = 0;
                    scrollinit(r, i, s, o, u, a, f, l);
                    jQuery(document).ready(function (e) {
                        e("a").on("touchend", function (t) {
                            var n = e(this);
                            var r = n.attr("href")
                        })
                    });
                    // jQuery(document).ready(function (e) {
                    //     e("a[rel^='prettyPhoto']").prettyPhoto({allow_resize: false})
                    // });
                    // jQuery(document).ready(function (e) {
                    //     e("a[rel^='prettyPhotoImages']").prettyPhoto({theme: "pp_default", allow_resize: true})
                    // });
                    jQuery(document).ready(function (e) {
                        if (Modernizr.csstransforms3d != false) {
                            var t = document.getElementsByClassName("hover-effect");
                            for (var n = 0, r = t.length; n < r; n++) {
                                t[n].addEventListener("mouseover", function () {
                                    var e = this.getElementsByTagName("img")[0];
                                    if (e) {
                                        move(e).rotate(10).scale(2).duration("1s").end()
                                    }
                                });
                                t[n].addEventListener("mouseout", function () {
                                    var e = this.getElementsByTagName("img")[0];
                                    if (e) {
                                        move(e).rotate(0).scale(1).duration("1s").end()
                                    }
                                })
                            }
                        }
                    });
                    if (Modernizr.csstransforms3d !== false) {
                        var t = document.getElementsByClassName("go-anim");
                        if (t.length > 0) {
                            for (var n = 0, c = t.length; n < c; n++) {
                                t[n].addEventListener("mouseover", function () {
                                    var e = this.getElementsByClassName("ss-container")[0];
                                    var t = this.getElementsByClassName("ribbon")[0];
                                    if (e) {
                                        move(this).set("margin-top", -20).duration("0.7s").end();
                                        if (t) {
                                            move(t).set("margin-top", -15).duration("0.7s").end()
                                        }
                                    } else {
                                        move(this).set("margin-top", -20).duration("0.7s").end()
                                    }
                                });
                                t[n].addEventListener("mouseout", function () {
                                    var e = this.getElementsByClassName("ss-container")[0];
                                    var t = this.getElementsByClassName("ribbon")[0];
                                    if (e) {
                                        move(this).set("margin-top", 0).duration("0.7s").end();
                                        if (t) {
                                            move(t).set("margin-top", -0).duration("0.7s").end()
                                        }
                                    } else {
                                        move(this).set("margin-top", 0).duration("0.7s").end()
                                    }
                                })
                            }
                        }
                    }
                }
            });
            return false
        }

        function y(t, r, i, s, o, u, a) {
            d = ["classic", "cube", "carousel2", "concave", "coverflow", "spiraltop", "spiralbottom", "classictilt"];
            if (!t) {
                t = "carousel2"
            }
            e("#effects").removeClass().addClass(t);
            v = 0;
            if (window.lastslide !== "") {
                g.slide(window.lastslide - 1)
            } else {
                g.slide(0)
            }
            if (n !== 1) {
                g.slide(r);
                n = 1
            }
            if (i !== false) {
                E()
            } else {
                window.gokb = ""
            }
            if (s !== false) {
                b()
            }
            if (o !== false) {
                x()
            } else {
                window.remvoetuch = function () {
                }
            }
            if (u !== false) {
                M()
            }
            if (Modernizr.csstransforms3d === false) {
                e("#effects").removeClass().addClass("classic")
            }
        }

        function b() {
            document.getElementById("next-arrow").addEventListener("click", w);
            document.getElementById("prev-arrow").addEventListener("click", g.prev)
        }

        function w() {
            g.next();
            var t = e("#ss-holder section").length;
            e("#ss-holder section").each(function () {
                if (e(this).hasClass("bespoke-active") && Number(e(this).attr("rel")) + 1 === t) {
                    if (window.initajax() !== false) {
                        document.removeEventListener("keydown", gokb);
                        document.getElementById("next-arrow").removeEventListener("click", w)
                    }
                }
            })
        }

        function E(t) {
            document.getElementById("next-arrow").removeEventListener("click", w);
            if (/Firefox/.test(navigator.userAgent)) {
                document.addEventListener("keydown", function (e) {
                    if (e.which >= 37 && e.which <= 40) {
                        e.preventDefault()
                    }
                })
            }
            window.gokb = function (t) {
                if (window.bopen === 1) {
                    hideInstructions();
                    window.bopen = 2
                }
                var n = t.which;
                if (n === 37) {
                    g.prev()
                }
                if (n === 32 || n === 39) {
                    g.next()
                }
                if (n === 38) {
                    if (Modernizr.csstransforms3d !== false) {
                        C()
                    }
                }
                if (n === 40) {
                    if (Modernizr.csstransforms3d !== false) {
                        N()
                    }
                }
                var r = e("#ss-holder section").length;
                e("#ss-holder section").each(function () {
                    if (e(this).hasClass("bespoke-active") && Number(e(this).attr("rel")) + 1 === r) {
                        if (window.initajax() !== false) {
                            document.removeEventListener("keydown", gokb)
                        }
                    }
                })
            };
            document.addEventListener("keydown", gokb)
        }

        function S(e) {
            if (e.wheelDelta) {
                return e.wheelDelta
            }
            if (e.originalEvent.detail) {
                return e.originalEvent.detail * -40
            }
            if (e.originalEvent && e.originalEvent.wheelDelta) {
                return e.originalEvent.wheelDelta
            }
        }

        function x() {
            var t = 0;
            var n = document.getElementById("ss-holder"), r, i, s = function (e, t) {
                return function (t) {
                    if (t.touches.length === 1) {
                        e(t.touches[0].pageX)
                    }
                }
            }, o = s(function (e) {
                r = e;
                i = 0;
                t = 0;
                n.addEventListener("touchend", a)
            }), u = s(function (e) {
                i = e - r
            }, true), a = function () {
                if (jQuery(document).width() < 30) {
                    if (jQuery(window).scrollTop() > jQuery(document).height() - jQuery(window).height() - 80) {
                        if (window.initajax() === false) {
                            n.addEventListener("touchstart", o);
                            n.addEventListener("touchmove", u);
                            n.addEventListener("touchend", a)
                        } else {
                            n.removeEventListener("touchstart", o);
                            n.removeEventListener("touchmove", u);
                            n.removeEventListener("touchend", a)
                        }
                    }
                }
                if (Math.abs(i) < 50) {
                    return
                }
                if (i > 0) {
                    g.prev()
                } else {
                    g.next()
                }
                var t = e("#ss-holder section").length;
                e("#ss-holder section").each(function () {
                    if (e(this).hasClass("bespoke-active") && Number(e(this).attr("rel")) + 1 === t && jQuery(document).width() > 530) {
                        if (window.initajax() === false) {
                            n.addEventListener("touchstart", o);
                            n.addEventListener("touchmove", u);
                            n.addEventListener("touchend", a)
                        } else {
                            n.removeEventListener("touchstart", o);
                            n.removeEventListener("touchmove", u);
                            n.removeEventListener("touchend", a)
                        }
                    }
                })
            };
            window.remvoetuch = function () {
                n.removeEventListener("touchstart", o);
                n.removeEventListener("touchmove", u);
                n.removeEventListener("touchend", a)
            };
            window.addtuch = function () {
                n.addEventListener("touchstart", o);
                n.addEventListener("touchmove", u);
                n.addEventListener("touchend", a)
            };
            window.addtuch()
        }

        function T(t) {
            var n = d[t];
            e("#effects").removeClass().addClass(n);
            v = t
        }

        function N() {
            k(1);
            if (window.bopen === 1) {
                hideInstructions();
                window.bopen = 2
            }
        }

        function C() {
            k(-1);
            if (window.bopen === 1) {
                hideInstructions();
                window.bopen = 2
            }
        }

        function k(e) {
            T(A(v + e, d.length))
        }

        function L() {
            return !!("ontouchstart" in window) || navigator.msMaxTouchPoints
        }

        function A(e, t) {
            return (e % t + t) % t
        }

        function M() {
            e("#ss-holder section").unbind("click");
            var t = document.getElementById("main");
            e("#ss-holder section").click(function () {
                var t = e(this).attr("rel");
                var n = Number(t) + 1;
                if (e(this).hasClass("bespoke-inactive")) {
                    if (n === O) {
                        if (window.initajax() === false) {
                            document.addEventListener("keydown", gokb);
                            window.remvoetuch();
                            x()
                        } else {
                            document.removeEventListener("keydown", gokb);
                            window.remvoetuch()
                        }
                    }
                    g.slide(t)
                }
            })
        }

        var r = r, c = i, s = s, o = o, u = u, a = a, f = f, l = l, h = 0;
        g = bespoke.from("#ss-holder article");
        y(r, s, o, u, a, f, l);
        if (!c) {
            c = 0
        }
        window.initajax = function () {
            if (t > c) {
                return false
            } else {
                if (h != 1) {
                    p(t);
                    h = 1
                } else {
                    return false
                }
            }
            t++
        };
        "use strict";
        var d, v, m, g;
        window.gomouse = function H() {
            function n() {
                g.prev();
                setTimeout(H, 200)
            }

            function r() {
                g.next();
                setTimeout(H, 200)
            }

            var t = e("#ss-holder section").length;
            e("#ss-holder section").each(function () {
                if (e(this).hasClass("bespoke-active") && Number(e(this).attr("rel")) + 1 === t && jQuery(document).width() > 30) {
                    if (window.initajax() === false) {
                        document.addEventListener("keydown", gokb)
                    } else {
                        document.removeEventListener("keydown", gokb);
                        e("#ss-holder").unbind("mousewheel DOMMouseScroll")
                    }
                }
            });
            e("#ss-holder").bind("mousewheel DOMMouseScroll", function (t) {
                if (S(t) > 0) {
                    e("#ss-holder").unbind("mousewheel DOMMouseScroll");
                    setTimeout(n, 200)
                }
                if (S(t) < 0) {
                    e("#ss-holder").unbind("mousewheel DOMMouseScroll");
                    setTimeout(r, 200)
                }
            })
        };
        if (l !== false) {
            window.gomouse()
        }
        var O = e("#ss-holder section").length;
        window.lastslide = O;
        if (Modernizr.csstransforms3d !== false) {
            var _ = document.getElementsByClassName("go-anim");
            if (_.length > 0) {
                for (var D = 0, P = _.length; D < P; D++) {
                    _[D].addEventListener("mouseover", function () {
                        var e = this.getElementsByClassName("ss-container")[0];
                        var t = this.getElementsByClassName("ribbon")[0];
                        if (e) {
                            move(this).set("margin-top", -20).duration("0.7s").end();
                            if (t) {
                                move(t).set("margin-top", -15).duration("0.7s").end()
                            }
                        } else {
                            move(this).set("margin-top", -20).duration("0.7s").end()
                        }
                    });
                    _[D].addEventListener("mouseout", function () {
                        var e = this.getElementsByClassName("ss-container")[0];
                        var t = this.getElementsByClassName("ribbon")[0];
                        if (e) {
                            move(this).set("margin-top", 0).duration("0.7s").end();
                            if (t) {
                                move(t).set("margin-top", -0).duration("0.7s").end()
                            }
                        } else {
                            move(this).set("margin-top", 0).duration("0.7s").end()
                        }
                    })
                }
            }
        }
    }
});
jQuery(document).ready(function (e) {
    jQuery(".inifiniteLoaderP").removeClass("fadeOutDown").addClass("fadeInUp");
    e(window).bind("load", function () {
        jQuery(".inifiniteLoaderP").removeClass("fadeInUp").addClass("fadeOutDown");
        jQuery(".numpostinfi").removeClass("fadeOutDown").addClass("fadeInUp")
    })
});
jQuery(document).ready(function (e) {
    e("a").on("touchend", function (t) {
        var n = e(this);
        var r = n.attr("href")
    })
});
// jQuery(document).ready(function (e) {
//     e("a[rel^='prettyPhoto']").prettyPhoto({allow_resize: false})
// });
// jQuery(document).ready(function (e) {
//     e("a[rel^='prettyPhotoImages']").prettyPhoto({theme: "pp_default", allow_resize: true})
// });
// jQuery(document).ready(function (e) {
//     if (Modernizr.csstransforms3d != false) {
//         var t = document.getElementsByClassName("hover-effect");
//         for (var n = 0, r = t.length; n < r; n++) {
//             t[n].addEventListener("mouseover", function () {
//                 var e = this.getElementsByTagName("img")[0];
//                 if (e) {
//                     move(e).rotate(10).scale(2).duration("1s").end()
//                 }
//             });
//             t[n].addEventListener("mouseout", function () {
//                 var e = this.getElementsByTagName("img")[0];
//                 if (e) {
//                     move(e).rotate(0).scale(1).duration("1s").end()
//                 }
//             })
//         }
//     }
// });
// (function (e) {
//     function r() {
//         this.callbacks = {}
//     }
//
//     var t = window.getComputedStyle || window.currentStyle;
//     var n = {
//         top: "px",
//         bottom: "px",
//         left: "px",
//         right: "px",
//         width: "px",
//         height: "px",
//         "font-size": "px",
//         margin: "px",
//         "margin-top": "px",
//         "margin-bottom": "px",
//         "margin-left": "px",
//         "margin-right": "px",
//         padding: "px",
//         "padding-top": "px",
//         "padding-bottom": "px",
//         "padding-left": "px",
//         "padding-right": "px"
//     };
//     e.move = function (e) {
//         return new Move(move.select(e))
//     };
//     e.move.version = "0.0.3";
//     move.defaults = {duration: 500};
//     move.ease = {
//         "in": "ease-in",
//         out: "ease-out",
//         "in-out": "ease-in-out",
//         snap: "cubic-bezier(0,1,.5,1)",
//         linear: "cubic-bezier(0.250, 0.250, 0.750, 0.750)",
//         "ease-in-quad": "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
//         "ease-in-cubic": "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
//         "ease-in-quart": "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
//         "ease-in-quint": "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
//         "ease-in-sine": "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
//         "ease-in-expo": "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
//         "ease-in-circ": "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
//         "ease-in-back": "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
//         "ease-out-quad": "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
//         "ease-out-cubic": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
//         "ease-out-quart": "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
//         "ease-out-quint": "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
//         "ease-out-sine": "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
//         "ease-out-expo": "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
//         "ease-out-circ": "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
//         "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
//         "ease-out-quad": "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
//         "ease-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
//         "ease-in-out-quart": "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
//         "ease-in-out-quint": "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
//         "ease-in-out-sine": "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
//         "ease-in-out-expo": "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
//         "ease-in-out-circ": "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
//         "ease-in-out-back": "cubic-bezier(0.680, -0.550, 0.265, 1.550)"
//     };
//     move.select = function (e) {
//         if ("string" != typeof e) return e;
//         return document.getElementById(e) || document.querySelectorAll(e)[0]
//     };
//     r.prototype.on = function (e, t) {
//         (this.callbacks[e] = this.callbacks[e] || []).push(t);
//         return this
//     };
//     r.prototype.emit = function (e) {
//         var t = Array.prototype.slice.call(arguments, 1), n = this.callbacks[e], r;
//         if (n) {
//             r = n.length;
//             for (var i = 0; i < r; ++i) {
//                 n[i].apply(this, t)
//             }
//         }
//         return this
//     };
//     e.Move = function i(e) {
//         if (!(this instanceof i)) return new i(e);
//         r.call(this);
//         this.el = e;
//         this._props = {};
//         this._rotate = 0;
//         this._transitionProps = [];
//         this._transforms = [];
//         this.duration(move.defaults.duration)
//     };
//     Move.prototype = new r;
//     Move.prototype.constructor = Move;
//     Move.prototype.transform = function (e) {
//         this._transforms.push(e);
//         return this
//     };
//     Move.prototype.skew = function (e, t) {
//         t = t || 0;
//         return this.transform("skew(" + e + "deg, " + t + "deg)")
//     };
//     Move.prototype.skewX = function (e) {
//         return this.transform("skewX(" + e + "deg)")
//     };
//     Move.prototype.skewY = function (e) {
//         return this.transform("skewY(" + e + "deg)")
//     };
//     Move.prototype.translate = Move.prototype.to = function (e, t) {
//         t = t || 0;
//         return this.transform("translate(" + e + "px, " + t + "px)")
//     };
//     Move.prototype.translateX = Move.prototype.x = function (e) {
//         return this.transform("translateX(" + e + "px)")
//     };
//     Move.prototype.translateY = Move.prototype.y = function (e) {
//         return this.transform("translateY(" + e + "px)")
//     };
//     Move.prototype.scale = function (e, t) {
//         t = null == t ? e : t;
//         return this.transform("scale(" + e + ", " + t + ")")
//     };
//     Move.prototype.scaleX = function (e) {
//         return this.transform("scaleX(" + e + ")")
//     };
//     Move.prototype.scaleY = function (e) {
//         return this.transform("scaleY(" + e + ")")
//     };
//     Move.prototype.rotate = function (e) {
//         return this.transform("rotate(" + e + "deg)")
//     };
//     Move.prototype.ease = function (e) {
//         e = move.ease[e] || e || "ease";
//         return this.setVendorProperty("transition-timing-function", e)
//     };
//     Move.prototype.animate = function (e, t) {
//         for (var n in t) {
//             if (t.hasOwnProperty(n)) {
//                 this.setVendorProperty("animation-" + n, t[n])
//             }
//         }
//         return this.setVendorProperty("animation-name", e)
//     };
//     Move.prototype.duration = function (e) {
//         e = this._duration = "string" == typeof e ? parseFloat(e) * 1e3 : e;
//         return this.setVendorProperty("transition-duration", e + "ms")
//     };
//     Move.prototype.delay = function (e) {
//         e = "string" == typeof e ? parseFloat(e) * 1e3 : e;
//         return this.setVendorProperty("transition-delay", e + "ms")
//     };
//     Move.prototype.setProperty = function (e, t) {
//         this._props[e] = t;
//         return this
//     };
//     Move.prototype.setVendorProperty = function (e, t) {
//         this.setProperty("-webkit-" + e, t);
//         this.setProperty("-moz-" + e, t);
//         this.setProperty("-ms-" + e, t);
//         this.setProperty("-o-" + e, t);
//         return this
//     };
//     Move.prototype.set = function (e, t) {
//         this.transition(e);
//         if ("number" == typeof t && n[e]) t += n[e];
//         this._props[e] = t;
//         return this
//     };
//     Move.prototype.add = function (e, n) {
//         if (!t) return;
//         var r = this;
//         return this.on("start", function () {
//             var t = parseInt(r.current(e), 10);
//             r.set(e, t + n + "px")
//         })
//     };
//     Move.prototype.sub = function (e, n) {
//         if (!t) return;
//         var r = this;
//         return this.on("start", function () {
//             var t = parseInt(r.current(e), 10);
//             r.set(e, t - n + "px")
//         })
//     };
//     Move.prototype.current = function (e) {
//         return t(this.el).getPropertyValue(e)
//     };
//     Move.prototype.transition = function (e) {
//         if (!this._transitionProps.indexOf(e)) return this;
//         this._transitionProps.push(e);
//         return this
//     };
//     Move.prototype.applyProperties = function () {
//         var e = this._props, t = this.el;
//         for (var n in e) {
//             if (e.hasOwnProperty(n)) {
//                 t.style.setProperty(n, e[n], "")
//             }
//         }
//         return this
//     };
//     Move.prototype.move = Move.prototype.select = function (e) {
//         this.el = move.select(e);
//         return this
//     };
//     Move.prototype.then = function (e) {
//         if (e instanceof Move) {
//             this.on("end", function () {
//                 e.end()
//             })
//         } else if ("function" == typeof e) {
//             this.on("end", e)
//         } else {
//             var t = new Move(this.el);
//             t._transforms = this._transforms.slice(0);
//             this.then(t);
//             t.parent = this;
//             return t
//         }
//         return this
//     };
//     Move.prototype.pop = function () {
//         return this.parent
//     };
//     Move.prototype.end = function (e) {
//         var t = this;
//         this.emit("start");
//         if (this._transforms.length) {
//             this.setVendorProperty("transform", this._transforms.join(" "))
//         }
//         this.setVendorProperty("transition-properties", this._transitionProps.join(", "));
//         this.applyProperties();
//         if (e) this.then(e);
//         setTimeout(function () {
//             t.emit("end")
//         }, this._duration);
//         return this
//     }
// })(this);