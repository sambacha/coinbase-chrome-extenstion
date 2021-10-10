(function () {
  var t,
    e = window,
    n = document,
    i = function (t) {
      return encodeURIComponent
        ? encodeURIComponent(t).replace(/\(/g, "%28").replace(/\)/g, "%29")
        : t;
    },
    r = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    o = /(^|\.)doubleclick\.net$/i;
  function a(t, e) {
    switch (e) {
      case 0:
        return "" + t;
      case 1:
        return 1 * t;
      case 2:
        return !!t;
      case 3:
        return 1e3 * t;
    }
    return t;
  }
  function s(t) {
    return "function" == typeof t;
  }
  function u(t) {
    return null != t && -1 < (t.constructor + "").indexOf("String");
  }
  function c(t, e) {
    return null == t || ("-" == t && !e) || "" == t;
  }
  function h(t) {
    if (!t || "" == t) return "";
    for (; t && -1 < " \n\r\t".indexOf(t.charAt(0)); ) t = t.substring(1);
    for (; t && -1 < " \n\r\t".indexOf(t.charAt(t.length - 1)); )
      t = t.substring(0, t.length - 1);
    return t;
  }
  function f() {
    return Math.round(2147483647 * Math.random());
  }
  function g() {}
  function l(t, e) {
    return encodeURIComponent instanceof Function
      ? e
        ? encodeURI(t)
        : encodeURIComponent(t)
      : (fn(68), escape(t));
  }
  function d(t) {
    if (((t = t.split("+").join(" ")), decodeURIComponent instanceof Function))
      try {
        return decodeURIComponent(t);
      } catch (t) {
        fn(17);
      }
    else fn(68);
    return unescape(t);
  }
  var p = function (t, e, n, i) {
    t.addEventListener
      ? t.addEventListener(e, n, !!i)
      : t.attachEvent && t.attachEvent("on" + e, n);
  };
  function v(t, e) {
    if (t) {
      var n = vn.createElement("script");
      return (
        (n.type = "text/javascript"),
        (n.async = !0),
        (n.src = t),
        (n.id = e),
        (t = vn.getElementsByTagName("script")[0]).parentNode.insertBefore(
          n,
          t
        ),
        n
      );
    }
  }
  function m(t) {
    return t && 0 < t.length ? t[0] : "";
  }
  function _(t) {
    var e = t ? t.length : 0;
    return 0 < e ? t[e - 1] : "";
  }
  var b = function () {
    (this.prefix = "ga."), (this.values = {});
  };
  function y(t) {
    return 0 == t.indexOf("www.") && (t = t.substring(4)), t.toLowerCase();
  }
  function w(t, e) {
    var n = {
      url: t,
      protocol: "http",
      host: "",
      path: "",
      R: new b(),
      anchor: "",
    };
    if (!t) return n;
    var i = t.indexOf("://");
    return (
      0 <= i && ((n.protocol = t.substring(0, i)), (t = t.substring(i + 3))),
      0 <= (i = t.search("/|\\?|#"))
        ? ((n.host = t.substring(0, i).toLowerCase()),
          0 <= (i = (t = t.substring(i)).indexOf("#")) &&
            ((n.anchor = t.substring(i + 1)), (t = t.substring(0, i))),
          0 <= (i = t.indexOf("?")) &&
            (k(n.R, t.substring(i + 1)), (t = t.substring(0, i))),
          n.anchor && e && k(n.R, n.anchor),
          t && "/" == t.charAt(0) && (t = t.substring(1)),
          (n.path = t),
          n)
        : ((n.host = t.toLowerCase()), n)
    );
  }
  function x(t, e) {
    function n(t) {
      var e = (t.hostname || "").split(":")[0].toLowerCase(),
        n = (t.protocol || "").toLowerCase();
      return (
        (n = 1 * t.port || ("http:" == n ? 80 : "https:" == n ? 443 : "")),
        0 == (t = t.pathname || "").indexOf("/") || (t = "/" + t),
        [e, "" + n, t]
      );
    }
    (e = e || vn.createElement("a")).href = vn.location.href;
    var i = (e.protocol || "").toLowerCase(),
      r = n(e),
      o = e.search || "",
      a = i + "//" + r[0] + (r[1] ? ":" + r[1] : "");
    return (
      0 == t.indexOf("//")
        ? (t = i + t)
        : 0 == t.indexOf("/")
        ? (t = a + t)
        : t && 0 != t.indexOf("?")
        ? 0 > t.split("/")[0].indexOf(":") &&
          (t = a + r[2].substring(0, r[2].lastIndexOf("/")) + "/" + t)
        : (t = a + r[2] + (t || o)),
      (e.href = t),
      (i = n(e)),
      {
        protocol: (e.protocol || "").toLowerCase(),
        host: i[0],
        port: i[1],
        path: i[2],
        query: e.search || "",
        url: t || "",
      }
    );
  }
  function k(t, e) {
    function n(e, n) {
      t.contains(e) || t.set(e, []), t.get(e).push(n);
    }
    e = h(e).split("&");
    for (var i = 0; i < e.length; i++)
      if (e[i]) {
        var r = e[i].indexOf("=");
        0 > r ? n(e[i], "1") : n(e[i].substring(0, r), e[i].substring(r + 1));
      }
  }
  function O(t, e) {
    return c(t) || ("[" == t.charAt(0) && "]" == t.charAt(t.length - 1))
      ? "-"
      : t.indexOf(vn.domain + (e && "/" != e ? e : "")) ==
        (0 == t.indexOf("http://") ? 7 : 0 == t.indexOf("https://") ? 8 : 0)
      ? "0"
      : t;
  }
  (b.prototype.set = function (t, e) {
    this.values[this.prefix + t] = e;
  }),
    (b.prototype.get = function (t) {
      return this.values[this.prefix + t];
    }),
    (b.prototype.contains = function (t) {
      return void 0 !== this.get(t);
    });
  var C = 0;
  function j(t, e, n) {
    1 <= C ||
      1 <= 100 * Math.random() ||
      mn() ||
      ((t = [
        "utmt=error",
        "utmerr=" + t,
        "utmwv=5.7.2",
        "utmn=" + f(),
        "utmsp=1",
      ]),
      e && t.push("api=" + e),
      n && t.push("msg=" + l(n.substring(0, 100))),
      er.w && t.push("aip=1"),
      Bi(t.join("&")),
      C++);
  }
  var S = 0,
    q = {};
  function T(t) {
    return P("x" + S++, t);
  }
  function P(t, e) {
    return (q[t] = !!e), t;
  }
  var A = T(),
    L = P("anonymizeIp"),
    E = T(),
    R = T(),
    I = T(),
    M = T(),
    D = T(),
    N = T(),
    X = T(),
    U = T(),
    $ = T(),
    K = T(),
    V = T(),
    G = T(),
    z = T(),
    F = T(),
    H = T(),
    B = T(),
    W = T(),
    Y = T(),
    Z = T(),
    J = T(),
    Q = T(),
    tt = T(),
    et = T(),
    nt = T(),
    it = T(),
    rt = T(),
    ot = T(),
    at = T(),
    st = T(),
    ut = T(),
    ct = T(),
    ht = T(),
    ft = T(),
    gt = T(),
    lt = T(!0),
    dt = P("currencyCode"),
    pt = P("storeGac"),
    vt = P("page"),
    mt = P("title"),
    _t = T(),
    bt = T(),
    yt = T(),
    wt = T(),
    xt = T(),
    kt = T(),
    Ot = T(),
    Ct = T(),
    jt = T(),
    St = T(!0),
    qt = T(!0),
    Tt = T(!0),
    Pt = T(!0),
    At = T(!0),
    Lt = T(!0),
    Et = T(!0),
    Rt = T(!0),
    It = T(!0),
    Mt = T(!0),
    Dt = T(!0),
    Nt = T(!0),
    Xt = T(!0),
    Ut = T(!0),
    $t = T(!0),
    Kt = T(!0),
    Vt = T(!0),
    Gt = T(!0),
    zt = T(!0),
    Ft = T(!0),
    Ht = T(!0),
    Bt = T(!0),
    Wt = T(!0),
    Yt = T(!0),
    Zt = T(!0),
    Jt = T(!0),
    Qt = T(!0),
    te = P("campaignParams"),
    ee = T(),
    ne = P("hitCallback"),
    ie = T();
  T();
  var re = T(),
    oe = T(),
    ae = T(),
    se = T(),
    ue = T(),
    ce = T(),
    he = T(),
    fe = T(),
    ge = T(),
    le = T(),
    de = T(),
    pe = T(),
    ve = T(),
    me = T();
  T();
  var _e = T(),
    be = T(),
    ye = T(),
    we = T(),
    xe = T(),
    ke = P("utmtCookieName"),
    Oe = P("displayFeatures"),
    Ce = T(),
    je = P("gtmid"),
    Se = P("uaName"),
    qe = P("uaDomain"),
    Te = P("uaPath"),
    Pe = P("linkid"),
    Ae = T(),
    Le = T(),
    Ee = T(),
    Re = T();
  function Ie(t) {
    var e = this.plugins_;
    if (e) return e.get(t);
  }
  var Me = function (t, e, n, i) {
      t[e] = function () {
        try {
          return null != i && fn(i), n.apply(this, arguments);
        } catch (t) {
          throw (j("exc", e, t && t.name), t);
        }
      };
    },
    De = function (t, e, n, i) {
      Ti.prototype[t] = function () {
        try {
          return fn(n), a(this.a.get(e), i);
        } catch (e) {
          throw (j("exc", t, e && e.name), e);
        }
      };
    },
    Ne = function (t, e, n, i, r) {
      Ti.prototype[t] = function (o) {
        try {
          fn(n), null == r ? this.a.set(e, a(o, i)) : this.a.set(e, r);
        } catch (e) {
          throw (j("exc", t, e && e.name), e);
        }
      };
    },
    Xe = new RegExp(/(^|\.)doubleclick\.net$/i),
    Ue = function (t, e) {
      return (
        !!Xe.test(vn.location.hostname) ||
        ("/" === e &&
          !(
            (0 != t.indexOf("www.google.") &&
              0 != t.indexOf(".google.") &&
              0 != t.indexOf("google.")) ||
            -1 < t.indexOf("google.org")
          ))
      );
    },
    $e = function (t) {
      var e = t.get(M),
        n = t.c(N, "/");
      Ue(e, n) && t.stopPropagation();
    },
    Ke = function () {
      var t = {},
        e = {},
        n = new nn();
      this.g = function (t, e) {
        n.add(t, e);
      };
      var i = new nn();
      this.v = function (t, e) {
        i.add(t, e);
      };
      var r = !1,
        o = !1,
        a = !0;
      (this.T = function () {
        r = !0;
      }),
        (this.j = function (t) {
          this.load(),
            this.set(ee, t, !0),
            (t = new Ve(this)),
            (r = !1),
            i.cb(this),
            (r = !0),
            (e = {}),
            this.store(),
            t.Ja();
        }),
        (this.load = function () {
          r &&
            ((r = !1),
            this.Ka(),
            Nn(this),
            o || ((o = !0), n.cb(this), Dn(this), Nn(this)),
            (r = !0));
        }),
        (this.store = function () {
          r && (o ? ((r = !1), Dn(this), (r = !0)) : this.load());
        }),
        (this.get = function (n) {
          return q[n] && this.load(), void 0 !== e[n] ? e[n] : t[n];
        }),
        (this.set = function (n, i, r) {
          q[n] && this.load(),
            r ? (e[n] = i) : (t[n] = i),
            q[n] && this.store();
        }),
        (this.Za = function (e) {
          t[e] = this.b(e, 0) + 1;
        }),
        (this.b = function (t, e) {
          return null == (t = this.get(t)) || "" === t ? e : 1 * t;
        }),
        (this.c = function (t, e) {
          return null == (t = this.get(t)) ? e : t + "";
        }),
        (this.Ka = function () {
          if (a) {
            var e = this.c(M, ""),
              n = this.c(N, "/");
            Ue(e, n) || ((t[D] = t[G] && "" != e ? rr(e) : 1), (a = !1));
          }
        });
    };
  Ke.prototype.stopPropagation = function () {
    throw "aborted";
  };
  var Ve = function (t) {
    var e = this;
    this.fb = 0;
    var n = t.get(ne);
    (this.Ua = function () {
      0 < e.fb && n && (e.fb--, e.fb || n());
    }),
      (this.Ja = function () {
        !e.fb && n && setTimeout(n, 10);
      }),
      t.set(ie, e, !0);
  };
  function Ge(t, e) {
    e = e || [];
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      if ("" + t == i || 0 == i.indexOf(t + ".")) return i;
    }
    return "-";
  }
  var ze = function (t, e, n) {
      if (
        ((n = n ? "" : t.c(D, "1")),
        6 !== (e = e.split(".")).length || en(e[0], n))
      )
        return !1;
      n = 1 * e[1];
      var i = 1 * e[2],
        r = 1 * e[3],
        o = 1 * e[4];
      return (
        (e = 1 * e[5]),
        0 <= n &&
          0 < i &&
          0 < r &&
          0 < o &&
          0 <= e &&
          (t.set(St, n),
          t.set(At, i),
          t.set(Lt, r),
          t.set(Et, o),
          t.set(Rt, e),
          !0)
      );
    },
    Fe = function (t) {
      var e = t.get(St),
        n = t.get(At),
        i = t.get(Lt),
        r = t.get(Et),
        o = t.b(Rt, 1);
      return [
        t.b(D, 1),
        null != e ? e : "-",
        n || "-",
        i || "-",
        r || "-",
        o,
      ].join(".");
    },
    He = function (t) {
      return [t.b(D, 1), t.b(Dt, 0), t.b(Nt, 1), t.b(Xt, 0)].join(".");
    },
    Be = function (t, e, n) {
      n = n ? "" : t.c(D, "1");
      var i = e.split(".");
      return (
        (4 !== i.length || en(i[0], n)) && (i = null),
        t.set(Dt, i ? 1 * i[1] : 0),
        t.set(Nt, i ? 1 * i[2] : 10),
        t.set(Xt, i ? 1 * i[3] : t.get(I)),
        null != i || !en(e, n)
      );
    },
    We = function (t, e) {
      var n = l(t.c(Tt, "")),
        i = [],
        r = t.get(lt);
      if (!e && r) {
        for (e = 0; e < r.length; e++) {
          var o = r[e];
          o &&
            1 == o.scope &&
            i.push(e + "=" + l(o.name) + "=" + l(o.value) + "=1");
        }
        0 < i.length && (n += "|" + i.join("^"));
      }
      return n ? t.b(D, 1) + "." + n : null;
    },
    Ye = function (t, e, n) {
      if (
        ((n = n ? "" : t.c(D, "1")),
        2 > (e = e.split(".")).length || en(e[0], n))
      )
        return !1;
      if (
        (0 < (e = e.slice(1).join(".").split("|")).length && t.set(Tt, d(e[0])),
        1 >= e.length)
      )
        return !0;
      for (
        e = e[1].split(-1 == e[1].indexOf(",") ? "^" : ","), n = 0;
        n < e.length;
        n++
      ) {
        var i = e[n].split("=");
        if (4 == i.length) {
          var r = {};
          (r.name = d(i[1])),
            (r.value = d(i[2])),
            (r.scope = 1),
            (t.get(lt)[i[0]] = r);
        }
      }
      return !0;
    },
    Ze = function (t, e) {
      return (e = Je(t, e))
        ? [t.b(D, 1), t.b(Ut, 0), t.b($t, 1), t.b(Kt, 1), e].join(".")
        : "";
    },
    Je = function (t) {
      function e(e, i) {
        c(t.get(e)) ||
          ((e = (e = (e = t.c(e, "")).split(" ").join("%20"))
            .split("+")
            .join("%20")),
          n.push(i + "=" + e));
      }
      var n = [];
      return (
        e(Gt, "utmcid"),
        e(Yt, "utmcsr"),
        e(Ft, "utmgclid"),
        e(Ht, "utmgclsrc"),
        e(Bt, "utmdclid"),
        e(Wt, "utmdsid"),
        e(zt, "utmccn"),
        e(Zt, "utmcmd"),
        e(Jt, "utmctr"),
        e(Qt, "utmcct"),
        n.join("|")
      );
    },
    Qe = function (t, e, n) {
      return (
        (n = n ? "" : t.c(D, "1")),
        5 > (e = e.split(".")).length || en(e[0], n)
          ? (t.set(Ut, void 0),
            t.set($t, void 0),
            t.set(Kt, void 0),
            t.set(Gt, void 0),
            t.set(zt, void 0),
            t.set(Yt, void 0),
            t.set(Zt, void 0),
            t.set(Jt, void 0),
            t.set(Qt, void 0),
            t.set(Ft, void 0),
            t.set(Ht, void 0),
            t.set(Bt, void 0),
            t.set(Wt, void 0),
            !1)
          : (t.set(Ut, 1 * e[1]),
            t.set($t, 1 * e[2]),
            t.set(Kt, 1 * e[3]),
            tn(t, e.slice(4).join(".")),
            !0)
      );
    },
    tn = function (t, e) {
      function n(t) {
        return (t = e.match(t + "=(.*?)(?:\\|utm|$)")) && 2 == t.length
          ? t[1]
          : void 0;
      }
      function i(e, n) {
        n
          ? ((n = r ? d(n) : n.split("%20").join(" ")), t.set(e, n))
          : t.set(e, void 0);
      }
      -1 == e.indexOf("=") && (e = d(e));
      var r = "2" == n("utmcvr");
      i(Gt, n("utmcid")),
        i(zt, n("utmccn")),
        i(Yt, n("utmcsr")),
        i(Zt, n("utmcmd")),
        i(Jt, n("utmctr")),
        i(Qt, n("utmcct")),
        i(Ft, n("utmgclid")),
        i(Ht, n("utmgclsrc")),
        i(Bt, n("utmdclid")),
        i(Wt, n("utmdsid"));
    },
    en = function (t, e) {
      return e ? t != e : !/^\d+$/.test(t);
    },
    nn = function () {
      this.filters = [];
    };
  function rn(t) {
    100 != t.get(it) &&
      t.get(St) % 1e4 >= 100 * t.get(it) &&
      t.stopPropagation();
  }
  function on(t) {
    mn(t.get(A)) && t.stopPropagation();
  }
  function an(t) {
    "file:" == vn.location.protocol && t.stopPropagation();
  }
  function sn(t) {
    _n() && t.stopPropagation();
  }
  function un(t) {
    t.get(mt) || t.set(mt, vn.title, !0),
      t.get(vt) || t.set(vt, vn.location.pathname + vn.location.search, !0);
  }
  function cn(t) {
    (t.get(A) && "UA-XXXXX-X" != t.get(A)) || t.stopPropagation();
  }
  (nn.prototype.add = function (t, e) {
    this.filters.push({ name: t, s: e });
  }),
    (nn.prototype.cb = function (t) {
      try {
        for (var e = 0; e < this.filters.length; e++)
          this.filters[e].s.call(pn, t);
      } catch (t) {}
    });
  var hn = new (function () {
    var t = [];
    (this.set = function (e) {
      t[e] = !0;
    }),
      (this.encode = function () {
        for (var e = [], n = 0; n < t.length; n++)
          t[n] && (e[Math.floor(n / 6)] ^= 1 << n % 6);
        for (n = 0; n < e.length; n++)
          e[n] =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
              e[n] || 0
            );
        return e.join("") + "~";
      });
  })();
  function fn(t) {
    hn.set(t);
  }
  var gn,
    ln,
    dn,
    pn = window,
    vn = document,
    mn = function (t) {
      var e = pn._gaUserPrefs;
      if ((e && e.ioo && e.ioo()) || (t && !0 === pn["ga-disable-" + t]))
        return !0;
      try {
        var n = pn.external;
        if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs) return !0;
      } catch (t) {}
      return !1;
    },
    _n = function () {
      return pn.navigator && "preview" == pn.navigator.loadPurpose;
    },
    bn = function (t) {
      var e = [],
        n = vn.cookie.split(";");
      t = new RegExp("^\\s*" + t + "=\\s*(.*?)\\s*$");
      for (var i = 0; i < n.length; i++) {
        var r = n[i].match(t);
        r && e.push(r[1]);
      }
      return e;
    },
    yn = function (t, e, n, i, r, o) {
      (r = !mn(r) && !Ue(i, n) && !_n()) &&
        ((e = wn(e)) && 2e3 < e.length && ((e = e.substring(0, 2e3)), fn(69)),
        (t = t + "=" + e + "; path=" + n + "; "),
        o &&
          (t +=
            "expires=" +
            new Date(new Date().getTime() + o).toGMTString() +
            "; "),
        i && (t += "domain=" + i + ";"),
        (vn.cookie = t));
    },
    wn = function (t) {
      if (!t) return t;
      var e = t.indexOf(";");
      if (
        (-1 != e && ((t = t.substring(0, e)), fn(141)),
        !(0 <= pn.navigator.userAgent.indexOf("Firefox")))
      )
        return t;
      e = 0;
      for (var n = (t = t.replace(/\n|\r/g, " ")).length; e < n; ++e) {
        var i = 255 & t.charCodeAt(e);
        (10 != i && 13 != i) ||
          (t = t.substring(0, e) + "?" + t.substring(e + 1));
      }
      return t;
    },
    xn = /^.*Version\/?(\d+)[^\d].*$/i,
    kn = function () {
      if (!ln) {
        var t = {},
          e = pn.navigator,
          n = pn.screen;
        (t.jb = n ? n.width + "x" + n.height : "-"),
          (t.P = n ? n.colorDepth + "-bit" : "-"),
          (t.language = (
            (e && (e.language || e.browserLanguage)) ||
            "-"
          ).toLowerCase()),
          (t.javaEnabled = e && e.javaEnabled() ? 1 : 0),
          (t.characterSet = vn.characterSet || vn.charset || "-");
        try {
          var i = vn.documentElement,
            r = vn.body,
            o = r && r.clientWidth && r.clientHeight;
          (e = []),
            i &&
            i.clientWidth &&
            i.clientHeight &&
            ("CSS1Compat" === vn.compatMode || !o)
              ? (e = [i.clientWidth, i.clientHeight])
              : o && (e = [r.clientWidth, r.clientHeight]);
          var a = 0 >= e[0] || 0 >= e[1] ? "" : e.join("x");
          t.Wa = a;
        } catch (t) {
          fn(135);
        }
        ln = t;
      }
    },
    On = function (t) {
      kn();
      var e = ln;
      if (
        (t.set(yt, e.jb),
        t.set(wt, e.P),
        t.set(Ot, e.language),
        t.set(Ct, e.characterSet),
        t.set(xt, e.javaEnabled),
        t.set(jt, e.Wa),
        t.get(z) && t.get(F))
      ) {
        if (!(e = dn)) {
          var n,
            i,
            r = "ShockwaveFlash";
          if ((e = (e = pn.navigator) ? e.plugins : void 0) && 0 < e.length)
            for (n = 0; n < e.length && !i; n++)
              -1 < (r = e[n]).name.indexOf("Shockwave Flash") &&
                (i = r.description.split("Shockwave Flash ")[1]);
          else {
            r = r + "." + r;
            try {
              i = (n = new ActiveXObject(r + ".7")).GetVariable("$version");
            } catch (t) {}
            if (!i)
              try {
                (n = new ActiveXObject(r + ".6")),
                  (i = "WIN 6,0,21,0"),
                  (n.AllowScriptAccess = "always"),
                  (i = n.GetVariable("$version"));
              } catch (t) {}
            if (!i)
              try {
                i = (n = new ActiveXObject(r)).GetVariable("$version");
              } catch (t) {}
            i &&
              (i =
                (i = i.split(" ")[1].split(","))[0] + "." + i[1] + " r" + i[2]);
          }
          e = i || "-";
        }
        (dn = e), t.set(kt, dn);
      } else t.set(kt, "-");
    },
    Cn = function (t) {
      if (s(t)) this.s = t;
      else {
        var e = t[0],
          n = e.lastIndexOf(":"),
          i = e.lastIndexOf(".");
        (this.h = this.i = this.l = ""),
          -1 == n && -1 == i
            ? (this.h = e)
            : -1 == n && -1 != i
            ? ((this.i = e.substring(0, i)), (this.h = e.substring(i + 1)))
            : -1 != n && -1 == i
            ? ((this.l = e.substring(0, n)), (this.h = e.substring(n + 1)))
            : n > i
            ? ((this.i = e.substring(0, i)),
              (this.l = e.substring(i + 1, n)),
              (this.h = e.substring(n + 1)))
            : ((this.i = e.substring(0, i)), (this.h = e.substring(i + 1))),
          (this.Xa = t.slice(1)),
          (this.Ma = !this.l && "_require" == this.h),
          (this.J = !this.i && !this.l && "_provide" == this.h);
      }
    },
    jn = function () {
      Me(jn.prototype, "push", jn.prototype.push, 5),
        Me(jn.prototype, "_getPlugin", Ie, 121),
        Me(jn.prototype, "_createAsyncTracker", jn.prototype.Sa, 33),
        Me(jn.prototype, "_getAsyncTracker", jn.prototype.Ta, 34),
        (this.I = new b()),
        (this.eb = []);
    };
  ((t = jn.prototype).Na = function (t, e, n) {
    var i = this.I.get(t);
    return (
      !!s(i) &&
      ((e.plugins_ = e.plugins_ || new b()),
      e.plugins_.set(t, new i(e, n || {})),
      !0)
    );
  }),
    (t.push = function (t) {
      var e = ir.Va.apply(this, arguments);
      for (
        e = ir.eb.concat(e), ir.eb = [];
        0 < e.length && !ir.O(e[0]) && (e.shift(), !(0 < ir.eb.length));

      );
      return (ir.eb = ir.eb.concat(e)), 0;
    }),
    (t.Va = function (t) {
      for (var e = [], n = 0; n < arguments.length; n++)
        try {
          var i = new Cn(arguments[n]);
          i.J ? this.O(i) : e.push(i);
        } catch (t) {}
      return e;
    }),
    (t.O = function (t) {
      try {
        if (t.s) t.s.apply(pn);
        else if (t.J) this.I.set(t.Xa[0], t.Xa[1]);
        else {
          var e = "_gat" == t.i ? er : "_gaq" == t.i ? ir : er.u(t.i);
          if (t.Ma) {
            if (!this.Na(t.Xa[0], e, t.Xa[2])) {
              if (!t.Pa) {
                var n,
                  i = x("" + t.Xa[1]),
                  r = i.protocol,
                  o = vn.location.protocol;
                if (
                  (n =
                    "https:" == r || r == o || ("http:" == r && "http:" == o))
                )
                  t: {
                    var a = x(vn.location.href);
                    if (
                      !(
                        i.query ||
                        0 <= i.url.indexOf("?") ||
                        0 <= i.path.indexOf("://") ||
                        (i.host == a.host && i.port == a.port)
                      )
                    ) {
                      var s = "http:" == i.protocol ? 80 : 443,
                        u = er.S;
                      for (e = 0; e < u.length; e++)
                        if (
                          i.host == u[e][0] &&
                          (i.port || s) == (u[e][1] || s) &&
                          0 == i.path.indexOf(u[e][2])
                        ) {
                          n = !0;
                          break t;
                        }
                    }
                    n = !1;
                  }
                n && !mn() && (t.Pa = v(i.url));
              }
              return !0;
            }
          } else t.l && (e = e.plugins_.get(t.l)), e[t.h].apply(e, t.Xa);
        }
      } catch (t) {}
    }),
    (t.Sa = function (t, e) {
      return er.hb(t, e || "");
    }),
    (t.Ta = function (t) {
      return er.u(t);
    });
  var Sn = function () {
    function t(t, e, n, i) {
      null == o[t] && (o[t] = {}),
        null == o[t][e] && (o[t][e] = []),
        (o[t][e][n] = i);
    }
    function e(t, e, n) {
      if (null != o[t] && null != o[t][e]) return o[t][e][n];
    }
    function n(t, e) {
      if (null != o[t] && null != o[t][e]) {
        var n;
        for (o[t][e] = void 0, e = !0, n = 0; n < a.length; n++)
          if (null != o[t][a[n]]) {
            e = !1;
            break;
          }
        e && (o[t] = void 0);
      }
    }
    function i(t) {
      var e,
        n = "",
        i = !1;
      for (e = 0; e < a.length; e++) {
        var r = t[a[e]];
        if (null != r) {
          i && (n += a[e]);
          var o = r,
            u = [];
          for (r = 0; r < o.length; r++)
            if (null != o[r]) {
              (i = ""), 1 != r && null == o[r - 1] && (i += r.toString() + "!");
              var c,
                h = o[r],
                f = "";
              for (c = 0; c < h.length; c++) {
                var g = h.charAt(c),
                  l = s[g];
                f += null != l ? l : g;
              }
              (i += f), u.push(i);
            }
          (n += "(" + u.join("*") + ")"), (i = !1);
        } else i = !0;
      }
      return n;
    }
    var r = this,
      o = [],
      a = ["k", "v"],
      s = { "'": "'0", ")": "'1", "*": "'2", "!": "'3" };
    (r.Ra = function (t) {
      return null != o[t];
    }),
      (r.A = function () {
        for (var t = "", e = 0; e < o.length; e++)
          null != o[e] && (t += e.toString() + i(o[e]));
        return t;
      }),
      (r.Qa = function (t) {
        if (null == t) return r.A();
        for (var e = t.A(), n = 0; n < o.length; n++)
          null == o[n] || t.Ra(n) || (e += n.toString() + i(o[n]));
        return e;
      }),
      (r.f = function (e, n, i) {
        return !!qn(i) && (t(e, "k", n, i), !0);
      }),
      (r.o = function (e, n, i) {
        return !!Tn(i) && (t(e, "v", n, i.toString()), !0);
      }),
      (r.getKey = function (t, n) {
        return e(t, "k", n);
      }),
      (r.N = function (t, n) {
        return e(t, "v", n);
      }),
      (r.L = function (t) {
        n(t, "k");
      }),
      (r.M = function (t) {
        n(t, "v");
      }),
      Me(r, "_setKey", r.f, 89),
      Me(r, "_setValue", r.o, 90),
      Me(r, "_getKey", r.getKey, 87),
      Me(r, "_getValue", r.N, 88),
      Me(r, "_clearKey", r.L, 85),
      Me(r, "_clearValue", r.M, 86);
  };
  function qn(t) {
    return "string" == typeof t;
  }
  function Tn(t) {
    return (
      ("number" == typeof t || (null != Number && t instanceof Number)) &&
      Math.round(t) == t &&
      !isNaN(t) &&
      1 / 0 != t
    );
  }
  var Pn,
    An,
    Ln,
    En,
    Rn = function (t) {
      var e = pn.gaGlobal;
      return t && !e && (pn.gaGlobal = e = {}), e;
    },
    In = function (t) {
      t.set(
        bt,
        (function () {
          var t = Rn(!0).hid;
          return null == t && ((t = f()), (Rn(!0).hid = t)), t;
        })()
      );
      var e = Rn();
      if (e && e.dh == t.get(D)) {
        var n = e.sid;
        n &&
          (t.get(It) ? fn(112) : fn(132),
          t.set(Et, n),
          t.get(qt) && t.set(Lt, n)),
          (e = e.vid),
          t.get(qt) &&
            e &&
            ((e = e.split(".")), t.set(St, 1 * e[0]), t.set(At, 1 * e[1]));
      }
    },
    Mn = function (t, e, n, i) {
      var r = t.c(M, ""),
        o = t.c(N, "/");
      (i = null != i ? i : t.b(X, 0)), (t = t.c(A, "")), yn(e, n, o, r, t, i);
    },
    Dn = function (t) {
      var a = t.c(M, ""),
        s = t.c(N, "/"),
        u = t.c(A, "");
      yn("__utma", Fe(t), s, a, u, t.get(X)),
        yn("__utmb", He(t), s, a, u, t.get(U)),
        yn("__utmc", "" + t.b(D, 1), s, a, u);
      var c = Ze(t, !0);
      if (
        (c
          ? yn("__utmz", c, s, a, u, t.get($))
          : yn("__utmz", "", s, a, "", -1),
        (c = We(t, !1))
          ? yn("__utmv", c, s, a, u, t.get(X))
          : yn("__utmv", "", s, a, "", -1),
        1 == t.get(pt) && (c = t.get(Ae)))
      ) {
        var h = t.get(Le);
        (a = t.c(M, "")), (s = t.c(N, "/")), (u = t.c(A, ""));
        var f = t.b(Ee, 0);
        if (
          ((t = Math.min(t.b(X, 7776e6), t.b($, 7776e6), 7776e6)),
          (t = Math.min(t, 1e3 * f + t - new Date().getTime())),
          (!h || "aw.ds" == h) &&
            ((h = ["1", f + "", i(c)].join(".")),
            0 < t &&
              ((c = "_gac_" + i(u)),
              !(
                (function (t) {
                  var i = e._gaUserPrefs;
                  if (
                    (i && i.ioo && i.ioo()) ||
                    (t && !0 === e["ga-disable-" + t])
                  )
                    return !0;
                  try {
                    var r = e.external;
                    if (r && r._gaUserPrefs && "oo" == r._gaUserPrefs)
                      return !0;
                  } catch (t) {}
                  (t = []),
                    (i = n.cookie.split(";")),
                    (r = /^\s*AMP_TOKEN=\s*(.*?)\s*$/);
                  for (var o = 0; o < i.length; o++) {
                    var a = i[o].match(r);
                    a && t.push(a[1]);
                  }
                  for (i = 0; i < t.length; i++)
                    if ("$OPT_OUT" == decodeURIComponent(t[i])) return !0;
                  return !1;
                })(u) ||
                o.test(vn.location.hostname) ||
                ("/" == s && r.test(a))
              ) &&
                ((u = h) && 1200 < u.length && (u = u.substring(0, 1200)),
                (s = c + "=" + u + "; path=" + s + "; "),
                t &&
                  (s +=
                    "expires=" +
                    new Date(new Date().getTime() + t).toGMTString() +
                    "; "),
                a && "none" !== a && (s += "domain=" + a + ";"),
                (a = vn.cookie),
                (vn.cookie = s),
                a == vn.cookie))))
        )
          for (
            a = [],
              s = vn.cookie.split(";"),
              t = new RegExp("^\\s*" + c + "=\\s*(.*?)\\s*$"),
              u = 0;
            u < s.length;
            u++
          )
            (c = s[u].match(t)) && a.push(c[1]);
      }
    },
    Nn = function (t) {
      var e = t.b(D, 1);
      if (!ze(t, Ge(e, bn("__utma")))) return t.set(Pt, !0), !1;
      var n = !Be(t, Ge(e, bn("__utmb")));
      if (
        (t.set(Mt, n),
        Qe(t, Ge(e, bn("__utmz"))),
        Ye(t, Ge(e, bn("__utmv"))),
        1 == t.get(pt))
      ) {
        e = t.get(Ae);
        var i = t.get(Le);
        if (!e || (i && "aw.ds" != i)) {
          if (vn) {
            (e = []), (i = vn.cookie.split(";"));
            for (
              var r = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, o = 0;
              o < i.length;
              o++
            ) {
              var a = i[o].match(r);
              a && e.push({ Oa: a[1], value: a[2] });
            }
            if (((i = {}), e && e.length))
              for (r = 0; r < e.length; r++)
                "1" == (o = e[r].value.split("."))[0] &&
                  3 == o.length &&
                  o[1] &&
                  (i[e[r].Oa] || (i[e[r].Oa] = []),
                  i[e[r].Oa].push({ timestamp: o[1], kb: o[2] }));
            e = i;
          } else e = {};
          (e = e[t.get(A)]) &&
            0 < e.length &&
            ((e = e[0]),
            t.set(Ee, e.timestamp),
            t.set(Ae, e.kb),
            t.set(Le, void 0));
        }
      }
      return (Pn = !n), !0;
    },
    Xn = function (t) {
      Pn ||
        0 < bn("__utmb").length ||
        (yn("__utmd", "1", t.c(N, "/"), t.c(M, ""), t.c(A, ""), 1e4),
        0 == bn("__utmd").length && t.stopPropagation());
    },
    Un = 0,
    $n = function (t) {
      null == t.get(St) || (t.get(Pt) && !t.get(_e))
        ? Vn(t)
        : t.get(Mt) && Gn(t);
    },
    Kn = function (t) {
      t.get(Vt) && !t.get(It) && (Gn(t), t.set($t, t.get(Rt)));
    },
    Vn = function (t) {
      1 < ++Un && fn(137);
      var e = t.get(I);
      t.set(qt, !0),
        t.set(
          St,
          f() ^
            (2147483647 &
              (function () {
                kn();
                var t = ln,
                  e = pn.navigator;
                e = (t =
                  e.appName +
                  e.version +
                  t.language +
                  e.platform +
                  e.userAgent +
                  t.javaEnabled +
                  t.jb +
                  t.P +
                  (vn.cookie ? vn.cookie : "") +
                  (vn.referrer ? vn.referrer : "")).length;
                for (var n = pn.history.length; 0 < n; ) t += n-- ^ e++;
                return rr(t);
              })())
        ),
        t.set(Tt, ""),
        t.set(At, e),
        t.set(Lt, e),
        t.set(Et, e),
        t.set(Rt, 1),
        t.set(It, !0),
        t.set(Dt, 0),
        t.set(Nt, 10),
        t.set(Xt, e),
        t.set(lt, []),
        t.set(Pt, !1),
        t.set(Mt, !1);
    },
    Gn = function (t) {
      1 < ++Un && fn(137),
        t.set(Lt, t.get(Et)),
        t.set(Et, t.get(I)),
        t.Za(Rt),
        t.set(It, !0),
        t.set(Dt, 0),
        t.set(Nt, 10),
        t.set(Xt, t.get(I)),
        t.set(Mt, !1);
    },
    zn =
      "daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p yahoo:q msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q cnn:query virgilio:qs baidu:wd baidu:word alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT search.smt.docomo:MT onet:qt onet:q kvasir:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q centrum.cz:q 360.cn:q sogou:query tut.by:query globo:q ukr:q so.com:q haosou.com:q auone:q".split(
        " "
      ),
    Fn = function (t) {
      if (t.get(H) && !t.get(_e)) {
        for (
          var e = !(
              c(t.get(Gt)) &&
              c(t.get(Yt)) &&
              c(t.get(Ft)) &&
              c(t.get(Bt))
            ),
            n = {},
            i = 0;
          i < Zn.length;
          i++
        ) {
          var r = Zn[i];
          n[r] = t.get(r);
        }
        (i = t.get(te))
          ? (fn(149), k((r = new b()), i), (i = r))
          : (i = w(vn.location.href, t.get(V)).R),
          ("1" == _(i.get(t.get(nt))) && e) ||
            ((i = Hn(t, i) || Bn(t)) ||
              e ||
              !t.get(It) ||
              (Yn(
                t,
                void 0,
                "(direct)",
                void 0,
                void 0,
                void 0,
                "(direct)",
                "(none)",
                void 0,
                void 0
              ),
              (i = !0)),
            i &&
              (t.set(Vt, Jn(t, n)),
              (e =
                "(direct)" == t.get(Yt) &&
                "(direct)" == t.get(zt) &&
                "(none)" == t.get(Zt)),
              t.get(Vt) || (t.get(It) && !e)) &&
              (t.set(Ut, t.get(I)), t.set($t, t.get(Rt)), t.Za(Kt)));
      }
    },
    Hn = function (t, e) {
      function n(n, i) {
        return (i = i || "-"), (n = _(e.get(t.get(n)))) && "-" != n ? d(n) : i;
      }
      var i = _(e.get(t.get(W))) || "-",
        r = _(e.get(t.get(J))) || "-",
        o = _(e.get(t.get(Z))) || "-",
        a = _(e.get("gclsrc")) || "-",
        s = _(e.get("dclid")) || "-";
      "-" != o && t.set(Ae, o), "-" != a && t.set(Le, a);
      var u = n(Y, "(not set)"),
        h = n(Q, "(not set)"),
        f = n(tt),
        g = n(et);
      if (c(i) && c(o) && c(s) && c(r)) return !1;
      var l = !c(o) && !c(a);
      l = c(r) && (!c(s) || l);
      var p = c(f);
      if (l || p) {
        var v = ni(t);
        (v = w(v, !0)),
          (v = Wn(t, v)) &&
            !c(v[1] && !v[2]) &&
            (l && (r = v[0]), p && (f = v[1]));
      }
      return Yn(t, i, r, o, a, s, u, h, f, g), !0;
    },
    Bn = function (t) {
      var e = ni(t),
        n = w(e, !0);
      if (
        ((e = !(
          null != e &&
          null != e &&
          "" != e &&
          "0" != e &&
          "-" != e &&
          0 <= e.indexOf("://")
        )) ||
          (e =
            n &&
            -1 < n.host.indexOf("google") &&
            n.R.contains("q") &&
            "cse" == n.path),
        e)
      )
        return !1;
      if ((e = Wn(t, n)) && !e[2])
        return (
          Yn(
            t,
            void 0,
            e[0],
            void 0,
            void 0,
            void 0,
            "(organic)",
            "organic",
            e[1],
            void 0
          ),
          !0
        );
      if (e || !t.get(It)) return !1;
      t: {
        e = t.get(ct);
        for (var i = y(n.host), r = 0; r < e.length; ++r)
          if (-1 < i.indexOf(e[r])) {
            t = !1;
            break t;
          }
        Yn(
          t,
          void 0,
          i,
          void 0,
          void 0,
          void 0,
          "(referral)",
          "referral",
          void 0,
          "/" + n.path
        ),
          (t = !0);
      }
      return t;
    },
    Wn = function (t, e) {
      for (var n = t.get(st), i = 0; i < n.length; ++i) {
        var r = n[i].split(":");
        if (-1 < e.host.indexOf(r[0].toLowerCase())) {
          var o = e.R.get(r[1]);
          if (
            o &&
            (!(o = m(o)) &&
              -1 < e.host.indexOf("google.") &&
              (o = "(not provided)"),
            !r[3] || -1 < e.url.indexOf(r[3]))
          ) {
            o || fn(151);
            t: {
              for (
                e = o, t = t.get(ut), e = d(e).toLowerCase(), n = 0;
                n < t.length;
                ++n
              )
                if (e == t[n]) {
                  t = !0;
                  break t;
                }
              t = !1;
            }
            return [r[2] || r[0], o, t];
          }
        }
      }
      return null;
    },
    Yn = function (t, e, n, i, r, o, a, s, u, c) {
      t.set(Gt, e),
        t.set(Yt, n),
        t.set(Ft, i),
        t.set(Ht, r),
        t.set(Bt, o),
        t.set(zt, a),
        t.set(Zt, s),
        t.set(Jt, u),
        t.set(Qt, c);
    },
    Zn = [zt, Gt, Ft, Bt, Yt, Zt, Jt, Qt],
    Jn = function (t, e) {
      function n(t) {
        return (t = ("" + t).split("+").join("%20")).split(" ").join("%20");
      }
      function i(n) {
        var i = "" + (t.get(n) || "");
        return (n = "" + (e[n] || "")), 0 < i.length && i == n;
      }
      if (i(Ft) || i(Bt)) return fn(131), !1;
      for (var r = 0; r < Zn.length; r++) {
        var o = Zn[r],
          a = e[o] || "-";
        if (((o = t.get(o) || "-"), n(a) != n(o))) return !0;
      }
      return !1;
    },
    Qn = new RegExp(/^https?:\/\/(www\.)?google(\.com?)?(\.[a-z]{2}t?)?\/?$/i),
    ti = /^https?:\/\/(r\.)?search\.yahoo\.com?(\.jp)?\/?[^?]*$/i,
    ei = /^https?:\/\/(www\.)?bing\.com\/?$/i,
    ni = function (t) {
      t = O(t.get(_t), t.get(N));
      try {
        if (Qn.test(t)) return fn(136), t + "?q=";
        if (ti.test(t)) return fn(150), t + "?p=(not provided)";
        if (ei.test(t)) return t + "?q=(not provided)";
      } catch (t) {
        fn(145);
      }
      return t;
    },
    ii = function (t) {
      (An = t.c(Ft, "")), (Ln = t.c(Ht, ""));
    },
    ri = function (t) {
      var e = t.c(Ft, ""),
        n = t.c(Ht, "");
      e != An &&
        (-1 < n.indexOf("ds")
          ? t.set(Wt, void 0)
          : !c(An) && -1 < Ln.indexOf("ds") && t.set(Wt, An));
    },
    oi = function (t) {
      ai(t, vn.location.href) ? (t.set(_e, !0), fn(12)) : t.set(_e, !1);
    },
    ai = function (t, e) {
      if (!t.get(K)) return !1;
      var n = w(e, t.get(V));
      e = m(n.R.get("__utma"));
      var i = m(n.R.get("__utmb")),
        r = m(n.R.get("__utmc")),
        o = m(n.R.get("__utmx")),
        a = m(n.R.get("__utmz")),
        s = m(n.R.get("__utmv"));
      if (((n = m(n.R.get("__utmk"))), rr("" + e + i + r + o + a + s) != n)) {
        if (
          ((e = d(e)),
          (i = d(i)),
          (r = d(r)),
          (o = d(o)),
          !(r = ui(e + i + r + o, a, s, n)))
        )
          return !1;
        (a = r[0]), (s = r[1]);
      }
      return (
        !!ze(t, e, !0) &&
        (Be(t, i, !0), Qe(t, a, !0), Ye(t, s, !0), di(t, o, !0), !0)
      );
    },
    si = function (t, e, n) {
      var i = Fe(t) || "-",
        r = He(t) || "-",
        o = "" + t.b(D, 1) || "-",
        a = pi(t) || "-",
        s = Ze(t, !1) || "-",
        u = rr("" + i + r + o + a + s + (t = We(t, !1) || "-")),
        c = [];
      return (
        c.push("__utma=" + i),
        c.push("__utmb=" + r),
        c.push("__utmc=" + o),
        c.push("__utmx=" + a),
        c.push("__utmz=" + s),
        c.push("__utmv=" + t),
        c.push("__utmk=" + u),
        (i = c.join("&"))
          ? ((r = e.indexOf("#")),
            n
              ? 0 > r
                ? e + "#" + i
                : e + "&" + i
              : ((n = ""),
                0 < r && ((n = e.substring(r)), (e = e.substring(0, r))),
                0 > e.indexOf("?") ? e + "?" + i + n : e + "&" + i + n))
          : e
      );
    },
    ui = function (t, e, n, i) {
      for (var r = 0; 3 > r; r++) {
        for (var o = 0; 3 > o; o++) {
          if (i == rr(t + e + n)) return fn(127), [e, n];
          var a = e.replace(/ /g, "%20"),
            s = n.replace(/ /g, "%20");
          if (i == rr(t + a + s)) return fn(128), [a, s];
          if (
            i ==
            rr(
              t + (a = a.replace(/\+/g, "%20")) + (s = s.replace(/\+/g, "%20"))
            )
          )
            return fn(129), [a, s];
          try {
            var u = e.match("utmctr=(.*?)(?:\\|utm|$)");
            if (
              u &&
              2 == u.length &&
              i == rr(t + (a = e.replace(u[1], l(d(u[1])))) + n)
            )
              return fn(139), [a, n];
          } catch (t) {}
          e = d(e);
        }
        n = d(n);
      }
    },
    ci = "|",
    hi = function (t, e, n, i, r, o, a, s, u) {
      var c = gi(t, e);
      return (
        c || ((c = {}), t.get(ht).push(c)),
        (c.id_ = e),
        (c.affiliation_ = n),
        (c.total_ = i),
        (c.tax_ = r),
        (c.shipping_ = o),
        (c.city_ = a),
        (c.state_ = s),
        (c.country_ = u),
        (c.items_ = c.items_ || []),
        c
      );
    },
    fi = function (t, e, n, i, r, o, a) {
      t: {
        if ((t = gi(t, e) || hi(t, e, "", 0, 0, 0, "", "", "")) && t.items_)
          for (var s = t.items_, u = 0; u < s.length; u++)
            if (s[u].sku_ == n) {
              s = s[u];
              break t;
            }
        s = null;
      }
      return (
        ((u = s || {}).transId_ = e),
        (u.sku_ = n),
        (u.name_ = i),
        (u.category_ = r),
        (u.price_ = o),
        (u.quantity_ = a),
        s || t.items_.push(u),
        u
      );
    },
    gi = function (t, e) {
      t = t.get(ht);
      for (var n = 0; n < t.length; n++) if (t[n].id_ == e) return t[n];
      return null;
    },
    li = function (t) {
      if (!En) {
        var e = vn.location.hash,
          n = pn.name,
          i = /^#?gaso=([^&]*)/;
        (n =
          (e = (e = (e && e.match(i)) || (n && n.match(i)))
            ? e[1]
            : m(bn("GASO"))) &&
          e.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) &&
          (Mn(t, "GASO", "" + e, 0),
          (er._gasoDomain = t.get(M)),
          (er._gasoCPath = t.get(N)),
          v(
            "https://www.google.com/analytics/web/inpage/pub/inpage.js?" +
              ((t = n[1]) ? "prefix=" + t + "&" : "") +
              f(),
            "_gasojs"
          )),
          (En = !0);
      }
    },
    di = function (t, e, n) {
      n && (e = d(e)),
        (n = t.b(D, 1)),
        2 > (e = e.split(".")).length ||
          !/^\d+$/.test(e[0]) ||
          ((e[0] = "" + n), Mn(t, "__utmx", e.join("."), void 0));
    },
    pi = function (t, e) {
      return "-" == (t = Ge(t.get(D), bn("__utmx"))) && (t = ""), e ? l(t) : t;
    },
    vi = function (t) {
      var e = pn.gaData && pn.gaData.expId;
      e && t.set(Ce, "" + e);
    },
    mi = function (t, e) {
      var n = Math.min(t.b(ge, 0), 100);
      if (t.b(St, 0) % 100 >= n) return !1;
      if (null == (n = wi() || xi())) return !1;
      var i = n[0];
      return (
        null != i &&
        1 / 0 != i &&
        !isNaN(i) &&
        (0 < i
          ? _i(n)
            ? e(yi(n))
            : e(yi(n.slice(0, 1)))
          : p(
              pn,
              "load",
              function () {
                mi(t, e);
              },
              !1
            ),
        !0)
      );
    },
    _i = function (t) {
      for (var e = 1; e < t.length; e++)
        if (isNaN(t[e]) || 1 / 0 == t[e] || 0 > t[e]) return !1;
      return !0;
    },
    bi = function (t) {
      return isNaN(t) || 0 > t
        ? 0
        : 5e3 > t
        ? 10 * Math.floor(t / 10)
        : 5e4 > t
        ? 100 * Math.floor(t / 100)
        : 41e5 > t
        ? 1e3 * Math.floor(t / 1e3)
        : 41e5;
    },
    yi = function (t) {
      for (var e = new Sn(), n = 0; n < t.length; n++)
        e.f(14, n + 1, "" + bi(t[n])), e.o(14, n + 1, t[n]);
      return e;
    },
    wi = function () {
      var t = pn.performance || pn.webkitPerformance;
      if ((t = t && t.timing)) {
        var e = t.navigationStart;
        if (0 != e)
          return [
            t.loadEventStart - e,
            t.domainLookupEnd - t.domainLookupStart,
            t.connectEnd - t.connectStart,
            t.responseStart - t.requestStart,
            t.responseEnd - t.responseStart,
            t.fetchStart - e,
            t.domInteractive - e,
            t.domContentLoadedEventStart - e,
          ];
        fn(133);
      }
    },
    xi = function () {
      if (pn.top == pn) {
        var t = pn.external,
          e = t && t.onloadT;
        if (
          (t && !t.isValidLoadTime && (e = void 0),
          2147483648 < e && (e = void 0),
          0 < e && t.setPageReadyTime(),
          null != e)
        )
          return [e];
      }
    },
    ki = function (t) {
      if (t.get(qt))
        try {
          t: {
            var e = bn(t.get(Se) || "_ga");
            if (e && !(1 > e.length)) {
              for (var n = [], i = 0; i < e.length; i++) {
                var r = e[i].split("."),
                  o = r.shift();
                if (("GA1" == o || "1" == o) && 1 < r.length) {
                  var a = r.shift().split("-");
                  1 == a.length && (a[1] = "1"), (a[0] *= 1), (a[1] *= 1);
                  var s = { Ya: a, $a: r.join(".") };
                } else s = void 0;
                s && n.push(s);
              }
              if (1 == n.length) {
                var u = n[0].$a;
                break t;
              }
              if (0 != n.length) {
                var c = t.get(qe) || t.get(M);
                if (
                  1 ==
                  (n = Oi(
                    n,
                    (0 == c.indexOf(".") ? c.substr(1) : c).split(".").length,
                    0
                  )).length
                ) {
                  u = n[0].$a;
                  break t;
                }
                var h = t.get(Te) || t.get(N);
                (e = h)
                  ? (1 < e.length &&
                      "/" == e.charAt(e.length - 1) &&
                      (e = e.substr(0, e.length - 1)),
                    0 != e.indexOf("/") && (e = "/" + e),
                    (h = e))
                  : (h = "/"),
                  (u = (n = Oi(n, "/" == h ? 1 : h.split("/").length, 1))[0]
                    .$a);
                break t;
              }
            }
            u = void 0;
          }
          if (u) {
            var f = ("" + u).split(".");
            2 == f.length &&
              /[0-9.]/.test(f) &&
              (fn(114), t.set(St, f[0]), t.set(At, f[1]), t.set(qt, !1));
          }
        } catch (t) {
          fn(115);
        }
    },
    Oi = function (t, e, n) {
      for (var i = [], r = [], o = 128, a = 0; a < t.length; a++) {
        var s = t[a];
        s.Ya[n] == e
          ? i.push(s)
          : s.Ya[n] == o
          ? r.push(s)
          : s.Ya[n] < o && ((r = [s]), (o = s.Ya[n]));
      }
      return 0 < i.length ? i : r;
    },
    Ci = /^gtm\d+$/,
    ji = function (t) {
      var e = !!t.b(Oe, 1);
      if (e)
        if ((fn(140), "page" != t.get(ee))) t.set(xe, "", !0);
        else if (
          ((e = t.c(ke, "")) ||
            (e =
              (e = t.c(R, "")) && "~0" != e
                ? Ci.test(e)
                  ? "__utmt_" + l(t.c(A, ""))
                  : "__utmt_" + l(e)
                : "__utmt"),
          0 < bn(e).length)
        )
          t.set(xe, "", !0);
        else if (
          (yn(e, "1", t.c(N, "/"), t.c(M, ""), t.c(A, ""), 6e5),
          0 < bn(e).length)
        ) {
          if ((t.set(xe, f(), !0), t.set(ye, 1, !0), void 0 !== pn.__ga4__))
            e = pn.__ga4__;
          else {
            if (void 0 === gn) {
              var n = pn.navigator.userAgent;
              if (n) {
                e = n;
                try {
                  e = decodeURIComponent(n);
                } catch (t) {}
                (n = !(
                  0 <= e.indexOf("Chrome") ||
                  0 <= e.indexOf("CriOS") ||
                  !(0 <= e.indexOf("Safari/") || 0 <= e.indexOf("Safari,"))
                )) && (n = 11 <= ((e = xn.exec(e)) ? Number(e[1]) : -1)),
                  (gn = n);
              } else gn = !1;
            }
            e = gn;
          }
          e
            ? (t.set(Re, Si(t), !0),
              t.set(we, "https://ssl.google-analytics.com/j/__utm.gif", !0))
            : t.set(we, zi() + "/r/__utm.gif?", !0);
        }
    },
    Si = function (t) {
      return {
        gb: "t=dc&_r=3&" + (t = qi(t)),
        google: "t=sr&slf_rd=1&_r=4&" + t,
        count: 0,
      };
    },
    qi = function (t) {
      function e(t, e) {
        n.push(t + "=" + l(e));
      }
      var n = [];
      return (
        e("v", "1"),
        e("_v", "5.7.2"),
        e("tid", t.get(A)),
        e("cid", t.get(St) + "." + t.get(At)),
        e("jid", t.get(xe)),
        e("aip", "1"),
        n.join("&") + "&z=" + f()
      );
    },
    Ti = function (t, e, n) {
      function i(t) {
        return function (e) {
          if ((e = e.get(be)[t]) && e.length)
            for (
              var n = (function (t, e) {
                  return {
                    type: e,
                    target: t,
                    stopPropagation: function () {
                      throw "aborted";
                    },
                  };
                })(r, t),
                i = 0;
              i < e.length;
              i++
            )
              e[i].call(r, n);
        };
      }
      var r = this;
      (this.a = new Ke()),
        (this.get = function (t) {
          return this.a.get(t);
        }),
        (this.set = function (t, e, n) {
          this.a.set(t, e, n);
        }),
        this.set(A, e || "UA-XXXXX-X"),
        this.set(R, t || ""),
        this.set(E, n || ""),
        this.set(I, Math.round(new Date().getTime() / 1e3)),
        this.set(N, "/"),
        this.set(X, 63072e6),
        this.set($, 15768e6),
        this.set(U, 18e5),
        this.set(K, !1),
        this.set(at, 50),
        this.set(V, !1),
        this.set(G, !0),
        this.set(z, !0),
        this.set(F, !0),
        this.set(H, !0),
        this.set(B, !0),
        this.set(Y, "utm_campaign"),
        this.set(W, "utm_id"),
        this.set(Z, "gclid"),
        this.set(J, "utm_source"),
        this.set(Q, "utm_medium"),
        this.set(tt, "utm_term"),
        this.set(et, "utm_content"),
        this.set(nt, "utm_nooverride"),
        this.set(it, 100),
        this.set(ge, 1),
        this.set(le, !1),
        this.set(rt, "/__utm.gif"),
        this.set(ot, 1),
        this.set(ht, []),
        this.set(lt, []),
        this.set(st, zn.slice(0)),
        this.set(ut, []),
        this.set(ct, []),
        this.B("auto"),
        this.set(_t, vn.referrer),
        this.set(pt, !0),
        this.set(Ee, Math.round(new Date().getTime() / 1e3)),
        (function (t) {
          try {
            var e = w(vn.location.href, !1),
              n = decodeURIComponent(_(e.R.get("utm_referrer"))) || "";
            n && t.set(_t, n);
            var i = decodeURIComponent(m(e.R.get("utm_expid"))) || "";
            i && ((i = i.split(".")[0]), t.set(Ce, "" + i));
          } catch (t) {
            fn(146);
          }
        })(this.a),
        this.set(be, { hit: [], load: [] }),
        this.a.g("0", oi),
        this.a.g("1", ii),
        this.a.g("2", $n),
        this.a.g("3", ki),
        this.a.g("4", Fn),
        this.a.g("5", ri),
        this.a.g("6", Kn),
        this.a.g("7", i("load")),
        this.a.g("8", li),
        this.a.v("A", on),
        this.a.v("B", an),
        this.a.v("C", sn),
        this.a.v("D", $n),
        this.a.v("E", rn),
        this.a.v("F", $e),
        this.a.v("G", Pi),
        this.a.v("H", cn),
        this.a.v("I", Xn),
        this.a.v("J", un),
        this.a.v("K", On),
        this.a.v("L", In),
        this.a.v("M", vi),
        this.a.v("N", ji),
        this.a.v("O", i("hit")),
        this.a.v("P", Gi),
        this.a.v("Q", Ai),
        0 === this.get(I) && fn(111),
        this.a.T(),
        (this.H = void 0);
    };
  ((t = Ti.prototype).m = function () {
    var t = this.get(ft);
    return t || ((t = new Sn()), this.set(ft, t)), t;
  }),
    (t.La = function (t) {
      for (var e in t) {
        var n = t[e];
        t.hasOwnProperty(e) && this.set(e, n, !0);
      }
    }),
    (t.K = function (t) {
      if (this.get(le)) return !1;
      var e = this,
        n = mi(this.a, function (n) {
          e.set(vt, t, !0), e.ib(n);
        });
      return this.set(le, n), n;
    }),
    (t.Fa = function (t) {
      t && u(t)
        ? (fn(13), this.set(vt, t, !0))
        : "object" == typeof t && null !== t && this.La(t),
        (this.H = t = this.get(vt)),
        this.a.j("page"),
        this.K(t);
    }),
    (t.F = function (t, e, n, i, r) {
      return (
        !(
          "" == t ||
          !qn(t) ||
          "" == e ||
          !qn(e) ||
          (null != n && !qn(n)) ||
          (null != i && !Tn(i))
        ) &&
        (this.set(oe, t, !0),
        this.set(ae, e, !0),
        this.set(se, n, !0),
        this.set(ue, i, !0),
        this.set(re, !!r, !0),
        this.a.j("event"),
        !0)
      );
    }),
    (t.Ha = function (t, e, n, i, r) {
      var o = this.a.b(ge, 0);
      return (
        1 * r === r && (o = r),
        !(this.a.b(St, 0) % 100 >= o) &&
          ((n = 1 * ("" + n)),
          !(
            "" == t ||
            !qn(t) ||
            "" == e ||
            !qn(e) ||
            !Tn(n) ||
            isNaN(n) ||
            0 > n ||
            0 > o ||
            100 < o ||
            !(null == i || ("" != i && qn(i)))
          ) &&
            (this.ib(
              (function (t, e, n, i) {
                var r = new Sn();
                return (
                  r.f(14, 90, e.substring(0, 500)),
                  r.f(14, 91, t.substring(0, 150)),
                  r.f(14, 92, "" + bi(n)),
                  null != i && r.f(14, 93, i.substring(0, 500)),
                  r.o(14, 90, n),
                  r
                );
              })(t, e, n, i)
            ),
            !0))
      );
    }),
    (t.Ga = function (t, e, n, i) {
      return (
        !(!t || !e) &&
        (this.set(ce, t, !0),
        this.set(he, e, !0),
        this.set(fe, n || vn.location.href, !0),
        i && this.set(vt, i, !0),
        this.a.j("social"),
        !0)
      );
    }),
    (t.Ea = function () {
      this.set(ge, 10), this.K(this.H);
    }),
    (t.Ia = function () {
      this.a.j("trans");
    }),
    (t.ib = function (t) {
      this.set(gt, t, !0), this.a.j("event");
    }),
    (t.ia = function (t) {
      this.initData();
      var e = this;
      return {
        _trackEvent: function (n, i, r) {
          fn(91), e.F(t, n, i, r);
        },
      };
    }),
    (t.ma = function (t) {
      return this.get(t);
    }),
    (t.xa = function (t, e) {
      if (t)
        if (u(t)) this.set(t, e);
        else if ("object" == typeof t)
          for (var n in t) t.hasOwnProperty(n) && this.set(n, t[n]);
    }),
    (t.addEventListener = function (t, e) {
      (t = this.get(be)[t]) && t.push(e);
    }),
    (t.removeEventListener = function (t, e) {
      t = this.get(be)[t];
      for (var n = 0; t && n < t.length; n++)
        if (t[n] == e) {
          t.splice(n, 1);
          break;
        }
    }),
    (t.qa = function () {
      return "5.7.2";
    }),
    (t.B = function (t) {
      this.get(G),
        (t =
          "auto" == t
            ? y(vn.domain)
            : t && "-" != t && "none" != t
            ? t.toLowerCase()
            : ""),
        this.set(M, t);
    }),
    (t.va = function (t) {
      this.set(G, !!t);
    }),
    (t.na = function (t, e) {
      return si(this.a, t, e);
    }),
    (t.link = function (t, e) {
      this.a.get(K) && t && (vn.location.href = si(this.a, t, e));
    }),
    (t.ua = function (t, e) {
      this.a.get(K) && t && t.action && (t.action = si(this.a, t.action, e));
    }),
    (t.za = function () {
      this.initData();
      var t = this.a,
        e = vn.getElementById
          ? vn.getElementById("utmtrans")
          : vn.utmform && vn.utmform.utmtrans
          ? vn.utmform.utmtrans
          : null;
      if (e && e.value) {
        t.set(ht, []), (e = e.value.split("UTM:"));
        for (var n = 0; n < e.length; n++) {
          e[n] = h(e[n]);
          for (var i = e[n].split(ci), r = 0; r < i.length; r++) i[r] = h(i[r]);
          "T" == i[0]
            ? hi(t, i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8])
            : "I" == i[0] && fi(t, i[1], i[2], i[3], i[4], i[5], i[6]);
        }
      }
    }),
    (t.$ = function (t, e, n, i, r, o, a, s) {
      return hi(this.a, t, e, n, i, r, o, a, s);
    }),
    (t.Y = function (t, e, n, i, r, o) {
      return fi(this.a, t, e, n, i, r, o);
    }),
    (t.Aa = function (t) {
      ci = t || "|";
    }),
    (t.ea = function () {
      this.set(ht, []);
    }),
    (t.wa = function (t, e, n, i) {
      var r = this.a;
      if (0 >= t || t > r.get(at)) t = !1;
      else if (!e || !n || 128 < e.length + n.length) t = !1;
      else {
        1 != i && 2 != i && (i = 3);
        var o = {};
        (o.name = e),
          (o.value = n),
          (o.scope = i),
          (r.get(lt)[t] = o),
          (t = !0);
      }
      return t && this.a.store(), t;
    }),
    (t.ka = function (t) {
      (this.a.get(lt)[t] = void 0), this.a.store();
    }),
    (t.ra = function (t) {
      return (t = this.a.get(lt)[t]) && 1 == t.scope ? t.value : void 0;
    }),
    (t.Ca = function (t, e, n) {
      12 == t && 1 == e ? this.set(Pe, n) : this.m().f(t, e, n);
    }),
    (t.Da = function (t, e, n) {
      this.m().o(t, e, n);
    }),
    (t.sa = function (t, e) {
      return this.m().getKey(t, e);
    }),
    (t.ta = function (t, e) {
      return this.m().N(t, e);
    }),
    (t.fa = function (t) {
      this.m().L(t);
    }),
    (t.ga = function (t) {
      this.m().M(t);
    }),
    (t.ja = function () {
      return new Sn();
    }),
    (t.W = function (t) {
      t && this.get(ut).push(t.toLowerCase());
    }),
    (t.ba = function () {
      this.set(ut, []);
    }),
    (t.X = function (t) {
      t && this.get(ct).push(t.toLowerCase());
    }),
    (t.ca = function () {
      this.set(ct, []);
    }),
    (t.Z = function (t, e, n, i, r) {
      t &&
        e &&
        ((t = [t, e.toLowerCase()].join(":")),
        (i || r) && (t = [t, i, r].join(":")),
        (i = this.get(st)).splice(n ? 0 : i.length, 0, t));
    }),
    (t.da = function () {
      this.set(st, []);
    }),
    (t.ha = function (t) {
      this.a.load();
      var e = this.get(N),
        n = pi(this.a);
      this.set(N, t), this.a.store(), di(this.a, n), this.set(N, e);
    }),
    (t.ya = function (t, e) {
      if (0 < t && 5 >= t && u(e) && "" != e) {
        var n = this.get(de) || [];
        (n[t] = e), this.set(de, n);
      }
    }),
    (t.V = function (t) {
      if ((t = "" + t).match(/^[A-Za-z0-9]{1,5}$/)) {
        var e = this.get(me) || [];
        e.push(t), this.set(me, e);
      }
    }),
    (t.initData = function () {
      this.a.load();
    }),
    (t.Ba = function (t) {
      t && "" != t && (this.set(Tt, t), this.a.j("var"));
    });
  var Pi = function (t) {
      if (
        ("trans" !== t.get(ee) && 500 <= t.b(Dt, 0) && t.stopPropagation(),
        "event" === t.get(ee))
      ) {
        var e = new Date().getTime(),
          n = t.b(Xt, 0),
          i = t.b(Et, 0);
        0 < (n = Math.floor((e - (n != i ? n : 1e3 * n)) / 1e3)) &&
          (t.set(Xt, e), t.set(Nt, Math.min(10, t.b(Nt, 0) + n))),
          0 >= t.b(Nt, 0) && t.stopPropagation();
      }
    },
    Ai = function (t) {
      "event" === t.get(ee) && t.set(Nt, Math.max(0, t.b(Nt, 10) - 1));
    },
    Li = function () {
      var t = [];
      (this.add = function (e, n, i) {
        i && (n = l("" + n)), t.push(e + "=" + n);
      }),
        (this.toString = function () {
          return t.join("&");
        });
    },
    Ei = function (t, e) {
      (e || 2 != t.get(ot)) && t.Za(Dt);
    },
    Ri = function (t, e) {
      e.add("utmwv", "5.7.2"), e.add("utms", t.get(Dt)), e.add("utmn", f());
      var n = vn.location.hostname;
      c(n) || e.add("utmhn", n, !0),
        100 != (t = t.get(it)) && e.add("utmsp", t, !0);
    },
    Ii = function (t, e) {
      e.add("utmht", new Date().getTime()),
        e.add("utmac", h(t.get(A))),
        t.get(Ce) && e.add("utmxkey", t.get(Ce), !0),
        t.get(re) && e.add("utmni", 1),
        t.get(je) && e.add("utmgtm", t.get(je), !0);
      var n = t.get(me);
      n && 0 < n.length && e.add("utmdid", n.join(".")),
        Di(t, e),
        !1 !== t.get(L) && (t.get(L) || er.w) && e.add("aip", 1),
        void 0 !== t.get(xe) && e.add("utmjid", t.c(xe, ""), !0),
        t.b(ye, 0) && e.add("utmredir", t.b(ye, 0), !0),
        er.bb || (er.bb = t.get(A)),
        (1 < er.ab() || er.bb != t.get(A)) && e.add("utmmt", 1),
        e.add("utmu", hn.encode());
    },
    Mi = function (t, e) {
      t = t.get(de) || [];
      for (var n = [], i = 1; i < t.length; i++)
        t[i] &&
          n.push(
            i +
              ":" +
              l(
                t[i]
                  .replace(/%/g, "%25")
                  .replace(/:/g, "%3A")
                  .replace(/,/g, "%2C")
              )
          );
      n.length && e.add("utmpg", n.join(","));
    },
    Di = function (t, e) {
      function n(t, e) {
        e && i.push(t + "=" + e + ";");
      }
      var i = [];
      n("__utma", Fe(t)),
        n("__utmz", Ze(t, !1)),
        n("__utmv", We(t, !0)),
        n("__utmx", pi(t)),
        e.add("utmcc", i.join("+"), !0);
    },
    Ni = function (t, e) {
      t.get(z) &&
        (e.add("utmcs", t.get(Ct), !0),
        e.add("utmsr", t.get(yt)),
        t.get(jt) && e.add("utmvp", t.get(jt)),
        e.add("utmsc", t.get(wt)),
        e.add("utmul", t.get(Ot)),
        e.add("utmje", t.get(xt)),
        e.add("utmfl", t.get(kt), !0));
    },
    Xi = function (t, e) {
      t.get(B) && t.get(mt) && e.add("utmdt", t.get(mt), !0),
        e.add("utmhid", t.get(bt)),
        e.add("utmr", O(t.get(_t), t.get(N)), !0),
        e.add("utmp", l(t.get(vt), !0), !0);
    },
    Ui = function (t, e) {
      for (
        var n = t.get(ft), i = t.get(gt), r = t.get(lt) || [], o = 0;
        o < r.length;
        o++
      ) {
        var a = r[o];
        a &&
          (n || (n = new Sn()),
          n.f(8, o, a.name),
          n.f(9, o, a.value),
          3 != a.scope && n.f(11, o, "" + a.scope));
      }
      c(t.get(oe)) ||
        c(t.get(ae), !0) ||
        (n || (n = new Sn()),
        n.f(5, 1, t.get(oe)),
        n.f(5, 2, t.get(ae)),
        null != (r = t.get(se)) && n.f(5, 3, r),
        null != (r = t.get(ue)) && n.o(5, 1, r)),
        c(t.get(Pe)) || (n || (n = new Sn()), n.f(12, 1, t.get(Pe))),
        n ? e.add("utme", n.Qa(i), !0) : i && e.add("utme", i.A(), !0);
    },
    $i = function (t, e, n) {
      var i = new Li();
      return (
        Ei(t, n),
        Ri(t, i),
        i.add("utmt", "tran"),
        i.add("utmtid", e.id_, !0),
        i.add("utmtst", e.affiliation_, !0),
        i.add("utmtto", e.total_, !0),
        i.add("utmttx", e.tax_, !0),
        i.add("utmtsp", e.shipping_, !0),
        i.add("utmtci", e.city_, !0),
        i.add("utmtrg", e.state_, !0),
        i.add("utmtco", e.country_, !0),
        Ui(t, i),
        Ni(t, i),
        Xi(t, i),
        (e = t.get(dt)) && i.add("utmcu", e, !0),
        n || (Mi(t, i), Ii(t, i)),
        i.toString()
      );
    },
    Ki = function (t, e, n) {
      var i = new Li();
      return (
        Ei(t, n),
        Ri(t, i),
        i.add("utmt", "item"),
        i.add("utmtid", e.transId_, !0),
        i.add("utmipc", e.sku_, !0),
        i.add("utmipn", e.name_, !0),
        i.add("utmiva", e.category_, !0),
        i.add("utmipr", e.price_, !0),
        i.add("utmiqt", e.quantity_, !0),
        Ui(t, i),
        Ni(t, i),
        Xi(t, i),
        (e = t.get(dt)) && i.add("utmcu", e, !0),
        n || (Mi(t, i), Ii(t, i)),
        i.toString()
      );
    },
    Vi = function (t, e) {
      var n = t.get(ee);
      if ("page" == n)
        (n = new Li()),
          Ei(t, e),
          Ri(t, n),
          Ui(t, n),
          Ni(t, n),
          Xi(t, n),
          e || (Mi(t, n), Ii(t, n)),
          (t = [n.toString()]);
      else if ("event" == n)
        (n = new Li()),
          Ei(t, e),
          Ri(t, n),
          n.add("utmt", "event"),
          Ui(t, n),
          Ni(t, n),
          Xi(t, n),
          e || (Mi(t, n), Ii(t, n)),
          (t = [n.toString()]);
      else if ("var" == n)
        (n = new Li()),
          Ei(t, e),
          Ri(t, n),
          n.add("utmt", "var"),
          !e && Ii(t, n),
          (t = [n.toString()]);
      else if ("trans" == n) {
        n = [];
        for (var i = t.get(ht), r = 0; r < i.length; ++r) {
          n.push($i(t, i[r], e));
          for (var o = i[r].items_, a = 0; a < o.length; ++a)
            n.push(Ki(t, o[a], e));
        }
        t = n;
      } else
        "social" == n
          ? e
            ? (t = [])
            : ((n = new Li()),
              Ei(t, e),
              Ri(t, n),
              n.add("utmt", "social"),
              n.add("utmsn", t.get(ce), !0),
              n.add("utmsa", t.get(he), !0),
              n.add("utmsid", t.get(fe), !0),
              Ui(t, n),
              Ni(t, n),
              Xi(t, n),
              Mi(t, n),
              Ii(t, n),
              (t = [n.toString()]))
          : "feedback" == n
          ? e
            ? (t = [])
            : ((n = new Li()),
              Ei(t, e),
              Ri(t, n),
              n.add("utmt", "feedback"),
              n.add("utmfbid", t.get(pe), !0),
              n.add("utmfbpr", t.get(ve), !0),
              Ui(t, n),
              Ni(t, n),
              Xi(t, n),
              Mi(t, n),
              Ii(t, n),
              (t = [n.toString()]))
          : (t = []);
      return t;
    },
    Gi = function (t) {
      var e = t.get(ot),
        n = t.get(ie),
        i = n && n.Ua,
        r = 0,
        o = t.get(Re);
      if (0 == e || 2 == e)
        for (
          var a = t.get(rt) + "?", s = Vi(t, !0), u = 0, c = s.length;
          u < c;
          u++
        )
          Bi(s[u], i, a, !0), r++;
      if (1 == e || 2 == e)
        for (s = Vi(t), t = t.c(we, ""), u = 0, c = s.length; u < c; u++)
          try {
            if (o) {
              var h = s[u];
              (e = (e = i) || g), Zi("", e, t + "?" + h, o);
            } else Bi(s[u], i, t);
            r++;
          } catch (t) {
            t && j(t.name, void 0, t.message);
          }
      n && (n.fb = r);
    },
    zi = function () {
      return "https:" == vn.location.protocol || er.G
        ? "https://ssl.google-analytics.com"
        : "http://www.google-analytics.com";
    },
    Fi = function (t) {
      (this.name = "len"), (this.message = t + "-8192");
    },
    Hi = function (t) {
      (this.name = "ff2post"), (this.message = t + "-2036");
    },
    Bi = function (t, e, n, i) {
      if (((e = e || g), i || 2036 >= t.length)) Wi(t, e, n);
      else {
        if (!(8192 >= t.length)) throw new Fi(t.length);
        if (0 <= pn.navigator.userAgent.indexOf("Firefox") && ![].reduce)
          throw new Hi(t.length);
        Zi(t, e) || Yi(t, e) || Ji(t, e) || e();
      }
    },
    Wi = function (t, e, n) {
      n = n || zi() + "/__utm.gif?";
      var i = new Image(1, 1);
      (i.src = n + t),
        (i.onload = function () {
          (i.onload = null), (i.onerror = null), e();
        }),
        (i.onerror = function () {
          (i.onload = null), (i.onerror = null), e();
        });
    },
    Yi = function (t, e) {
      if (0 != zi().indexOf(vn.location.protocol)) return !1;
      var n = pn.XDomainRequest;
      return (
        !!n &&
        ((n = new n()).open("POST", zi() + "/p/__utm.gif"),
        (n.onerror = function () {
          e();
        }),
        (n.onload = e),
        n.send(t),
        !0)
      );
    },
    Zi = function (t, e, n, i) {
      var r = pn.XMLHttpRequest;
      if (!r) return !1;
      var o = new r();
      return (
        "withCredentials" in o &&
        (o.open("POST", n || zi() + "/p/__utm.gif", !0),
        (o.withCredentials = !0),
        o.setRequestHeader("Content-Type", "text/plain"),
        (o.onreadystatechange = function () {
          if (4 == o.readyState) {
            if (i)
              try {
                var t = o.responseText;
                if (1 > t.length || "1" != t.charAt(0)) j("xhr", "ver", t), e();
                else if (3 < i.count++) j("xhr", "tmr", "" + i.count), e();
                else if (1 == t.length) e();
                else {
                  var n = t.charAt(1);
                  if ("d" == n) {
                    var r = i.gb;
                    (t = (t = e) || g),
                      Zi(
                        "",
                        t,
                        "https://stats.g.doubleclick.net/j/collect?" + r,
                        i
                      );
                  } else if ("g" == n) {
                    var a = "https://www.google.%/ads/ga-audiences?".replace(
                      "%",
                      "com"
                    );
                    Wi(i.google, e, a);
                    var s = t.substring(2);
                    if (s)
                      if (/^[a-z.]{1,6}$/.test(s)) {
                        var u =
                          "https://www.google.%/ads/ga-audiences?".replace(
                            "%",
                            s
                          );
                        Wi(i.google, g, u);
                      } else j("tld", "bcc", s);
                  } else j("xhr", "brc", n), e();
                }
              } catch (t) {
                e();
              }
            else e();
            o = null;
          }
        }),
        o.send(t),
        !0)
      );
    },
    Ji = function (t, e) {
      if (!vn.body)
        return (
          (function (t, e) {
            setTimeout(t, e);
          })(function () {
            Ji(t, e);
          }, 100),
          !0
        );
      t = encodeURIComponent(t);
      try {
        var n = vn.createElement('<iframe name="' + t + '"></iframe>');
      } catch (e) {
        (n = vn.createElement("iframe")).name = t;
      }
      (n.height = "0"),
        (n.width = "0"),
        (n.style.display = "none"),
        (n.style.visibility = "hidden");
      var i = zi() + "/u/post_iframe.html";
      return (
        p(pn, "beforeunload", function () {
          (n.src = ""), n.parentNode && n.parentNode.removeChild(n);
        }),
        setTimeout(e, 1e3),
        vn.body.appendChild(n),
        (n.src = i),
        !0
      );
    },
    Qi = function () {
      (this.G = this.w = !1),
        0 == f() % 1e4 && (fn(142), (this.G = !0)),
        (this.C = {}),
        (this.D = []),
        (this.U = 0),
        (this.S = [["www.google-analytics.com", "", "/plugins/"]]),
        (this._gasoCPath = this._gasoDomain = this.bb = void 0),
        (function () {
          function t(t, e, n) {
            Me(Qi.prototype, t, e, n);
          }
          t("_createTracker", Qi.prototype.hb, 55),
            t("_getTracker", Qi.prototype.oa, 0),
            t("_getTrackerByName", Qi.prototype.u, 51),
            t("_getTrackers", Qi.prototype.pa, 130),
            t("_anonymizeIp", Qi.prototype.aa, 16),
            t("_forceSSL", Qi.prototype.la, 125),
            t("_getPlugin", Ie, 120);
        })(),
        (function () {
          function t(t, e, n) {
            Me(Ti.prototype, t, e, n);
          }
          De("_getName", R, 58),
            De("_getAccount", A, 64),
            De("_visitCode", St, 54),
            De("_getClientInfo", z, 53, 1),
            De("_getDetectTitle", B, 56, 1),
            De("_getDetectFlash", F, 65, 1),
            De("_getLocalGifPath", rt, 57),
            De("_getServiceMode", ot, 59),
            Ne("_setClientInfo", z, 66, 2),
            Ne("_setAccount", A, 3),
            Ne("_setNamespace", E, 48),
            Ne("_setAllowLinker", K, 11, 2),
            Ne("_setDetectFlash", F, 61, 2),
            Ne("_setDetectTitle", B, 62, 2),
            Ne("_setLocalGifPath", rt, 46, 0),
            Ne("_setLocalServerMode", ot, 92, void 0, 0),
            Ne("_setRemoteServerMode", ot, 63, void 0, 1),
            Ne("_setLocalRemoteServerMode", ot, 47, void 0, 2),
            Ne("_setSampleRate", it, 45, 1),
            Ne("_setCampaignTrack", H, 36, 2),
            Ne("_setAllowAnchor", V, 7, 2),
            Ne("_setCampNameKey", Y, 41),
            Ne("_setCampContentKey", et, 38),
            Ne("_setCampIdKey", W, 39),
            Ne("_setCampMediumKey", Q, 40),
            Ne("_setCampNOKey", nt, 42),
            Ne("_setCampSourceKey", J, 43),
            Ne("_setCampTermKey", tt, 44),
            Ne("_setCampCIdKey", Z, 37),
            Ne("_setCookiePath", N, 9, 0),
            Ne("_setMaxCustomVariables", at, 0, 1),
            Ne("_setVisitorCookieTimeout", X, 28, 1),
            Ne("_setSessionCookieTimeout", U, 26, 1),
            Ne("_setCampaignCookieTimeout", $, 29, 1),
            Ne("_setReferrerOverride", _t, 49),
            Ne("_setSiteSpeedSampleRate", ge, 132),
            Ne("_storeGac", pt, 143),
            t("_trackPageview", Ti.prototype.Fa, 1),
            t("_trackEvent", Ti.prototype.F, 4),
            t("_trackPageLoadTime", Ti.prototype.Ea, 100),
            t("_trackSocial", Ti.prototype.Ga, 104),
            t("_trackTrans", Ti.prototype.Ia, 18),
            t("_sendXEvent", Ti.prototype.ib, 78),
            t("_createEventTracker", Ti.prototype.ia, 74),
            t("_getVersion", Ti.prototype.qa, 60),
            t("_setDomainName", Ti.prototype.B, 6),
            t("_setAllowHash", Ti.prototype.va, 8),
            t("_getLinkerUrl", Ti.prototype.na, 52),
            t("_link", Ti.prototype.link, 101),
            t("_linkByPost", Ti.prototype.ua, 102),
            t("_setTrans", Ti.prototype.za, 20),
            t("_addTrans", Ti.prototype.$, 21),
            t("_addItem", Ti.prototype.Y, 19),
            t("_clearTrans", Ti.prototype.ea, 105),
            t("_setTransactionDelim", Ti.prototype.Aa, 82),
            t("_setCustomVar", Ti.prototype.wa, 10),
            t("_deleteCustomVar", Ti.prototype.ka, 35),
            t("_getVisitorCustomVar", Ti.prototype.ra, 50),
            t("_setXKey", Ti.prototype.Ca, 83),
            t("_setXValue", Ti.prototype.Da, 84),
            t("_getXKey", Ti.prototype.sa, 76),
            t("_getXValue", Ti.prototype.ta, 77),
            t("_clearXKey", Ti.prototype.fa, 72),
            t("_clearXValue", Ti.prototype.ga, 73),
            t("_createXObj", Ti.prototype.ja, 75),
            t("_addIgnoredOrganic", Ti.prototype.W, 15),
            t("_clearIgnoredOrganic", Ti.prototype.ba, 97),
            t("_addIgnoredRef", Ti.prototype.X, 31),
            t("_clearIgnoredRef", Ti.prototype.ca, 32),
            t("_addOrganic", Ti.prototype.Z, 14),
            t("_clearOrganic", Ti.prototype.da, 70),
            t("_cookiePathCopy", Ti.prototype.ha, 30),
            t("_get", Ti.prototype.ma, 106),
            t("_set", Ti.prototype.xa, 107),
            t("_addEventListener", Ti.prototype.addEventListener, 108),
            t("_removeEventListener", Ti.prototype.removeEventListener, 109),
            t("_addDevId", Ti.prototype.V),
            t("_getPlugin", Ie, 122),
            t("_setPageGroup", Ti.prototype.ya, 126),
            t("_trackTiming", Ti.prototype.Ha, 124),
            t("_initData", Ti.prototype.initData, 2),
            t("_setVar", Ti.prototype.Ba, 22),
            Ne("_setSessionTimeout", U, 27, 3),
            Ne("_setCookieTimeout", $, 25, 3),
            Ne("_setCookiePersistence", X, 24, 1),
            t("_setAutoTrackOutbound", g, 79),
            t("_setTrackOutboundSubdomains", g, 81),
            t("_setHrefExamineLimit", g, 80);
        })();
    };
  ((t = Qi.prototype).oa = function (t, e) {
    return this.hb(t, void 0, e);
  }),
    (t.hb = function (t, e, n) {
      return (
        e && fn(23),
        n && fn(67),
        null == e && (e = "~" + er.U++),
        (t = new Ti(e, t, n)),
        (er.C[e] = t),
        er.D.push(t),
        t
      );
    }),
    (t.u = function (t) {
      return (t = t || ""), er.C[t] || er.hb(void 0, t);
    }),
    (t.pa = function () {
      return er.D.slice(0);
    }),
    (t.ab = function () {
      return er.D.length;
    }),
    (t.aa = function () {
      this.w = !0;
    }),
    (t.la = function () {
      this.G = !0;
    });
  var tr = function (t) {
      return "prerender" != vn.visibilityState && (t(), !0);
    },
    er = new Qi(),
    nr = pn._gat;
  nr && s(nr._getTracker) ? (er = nr) : (pn._gat = er);
  var ir = new jn();
  function rr(t) {
    var e,
      n = 1;
    if (t)
      for (n = 0, e = t.length - 1; 0 <= e; e--) {
        var i = t.charCodeAt(e);
        n =
          0 != (i = 266338304 & (n = ((n << 6) & 268435455) + i + (i << 14)))
            ? n ^ (i >> 21)
            : n;
      }
    return n;
  }
  !(function (t) {
    if (!tr(t)) {
      fn(123);
      var e = !1,
        n = function () {
          if (!e && tr(t)) {
            e = !0;
            var i = vn,
              r = n;
            i.removeEventListener
              ? i.removeEventListener("visibilitychange", r, !1)
              : i.detachEvent && i.detachEvent("onvisibilitychange", r);
          }
        };
      p(vn, "visibilitychange", n);
    }
  })(function () {
    var t = pn._gaq,
      e = !1;
    t &&
    s(t.push) &&
    !(e = "[object Array]" == Object.prototype.toString.call(Object(t)))
      ? (ir = t)
      : ((pn._gaq = ir), e && ir.push.apply(ir, t));
  });
}.call(this));
