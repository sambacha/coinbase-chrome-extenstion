/*! For license information please see requestProvider.js.LICENSE.txt */
(() => {
  var t = {
      19394: (t, e, r) => {
        "use strict";
        const n = r(17187);
        function i(t, e, r) {
          try {
            Reflect.apply(t, e, r);
          } catch (t) {
            setTimeout(() => {
              throw t;
            });
          }
        }
        class o extends n.EventEmitter {
          emit(t, ...e) {
            let r = "error" === t;
            const n = this._events;
            if (void 0 !== n) r = r && void 0 === n.error;
            else if (!r) return !1;
            if (r) {
              let t;
              if ((e.length > 0 && ([t] = e), t instanceof Error)) throw t;
              const r = new Error(
                "Unhandled error." + (t ? ` (${t.message})` : "")
              );
              throw ((r.context = t), r);
            }
            const o = n[t];
            if (void 0 === o) return !1;
            if ("function" == typeof o) i(o, this, e);
            else {
              const t = o.length,
                r = (function (t) {
                  const e = t.length,
                    r = new Array(e);
                  for (let n = 0; n < e; n += 1) r[n] = t[n];
                  return r;
                })(o);
              for (let n = 0; n < t; n += 1) i(r[n], this, e);
            }
            return !0;
          }
        }
        e.Z = o;
      },
      79742: (t, e) => {
        "use strict";
        (e.byteLength = function (t) {
          var e = u(t),
            r = e[0],
            n = e[1];
          return (3 * (r + n)) / 4 - n;
        }),
          (e.toByteArray = function (t) {
            var e,
              r,
              o = u(t),
              s = o[0],
              a = o[1],
              h = new i(
                (function (t, e, r) {
                  return (3 * (e + r)) / 4 - r;
                })(0, s, a)
              ),
              l = 0,
              c = a > 0 ? s - 4 : s;
            for (r = 0; r < c; r += 4)
              (e =
                (n[t.charCodeAt(r)] << 18) |
                (n[t.charCodeAt(r + 1)] << 12) |
                (n[t.charCodeAt(r + 2)] << 6) |
                n[t.charCodeAt(r + 3)]),
                (h[l++] = (e >> 16) & 255),
                (h[l++] = (e >> 8) & 255),
                (h[l++] = 255 & e);
            2 === a &&
              ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
              (h[l++] = 255 & e));
            1 === a &&
              ((e =
                (n[t.charCodeAt(r)] << 10) |
                (n[t.charCodeAt(r + 1)] << 4) |
                (n[t.charCodeAt(r + 2)] >> 2)),
              (h[l++] = (e >> 8) & 255),
              (h[l++] = 255 & e));
            return h;
          }),
          (e.fromByteArray = function (t) {
            for (
              var e,
                n = t.length,
                i = n % 3,
                o = [],
                s = 16383,
                a = 0,
                u = n - i;
              a < u;
              a += s
            )
              o.push(h(t, a, a + s > u ? u : a + s));
            1 === i
              ? ((e = t[n - 1]), o.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
              : 2 === i &&
                ((e = (t[n - 2] << 8) + t[n - 1]),
                o.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="));
            return o.join("");
          });
        for (
          var r = [],
            n = [],
            i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            o =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            s = 0,
            a = o.length;
          s < a;
          ++s
        )
          (r[s] = o[s]), (n[o.charCodeAt(s)] = s);
        function u(t) {
          var e = t.length;
          if (e % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var r = t.indexOf("=");
          return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
        }
        function h(t, e, n) {
          for (var i, o, s = [], a = e; a < n; a += 3)
            (i =
              ((t[a] << 16) & 16711680) +
              ((t[a + 1] << 8) & 65280) +
              (255 & t[a + 2])),
              s.push(
                r[((o = i) >> 18) & 63] +
                  r[(o >> 12) & 63] +
                  r[(o >> 6) & 63] +
                  r[63 & o]
              );
          return s.join("");
        }
        (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
      },
      48764: (t, e, r) => {
        "use strict";
        const n = r(79742),
          i = r(80645),
          o =
            "function" == typeof Symbol && "function" == typeof Symbol.for
              ? Symbol.for("nodejs.util.inspect.custom")
              : null;
        (e.Buffer = u),
          (e.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return u.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50);
        const s = 2147483647;
        function a(t) {
          if (t > s)
            throw new RangeError(
              'The value "' + t + '" is invalid for option "size"'
            );
          const e = new Uint8Array(t);
          return Object.setPrototypeOf(e, u.prototype), e;
        }
        function u(t, e, r) {
          if ("number" == typeof t) {
            if ("string" == typeof e)
              throw new TypeError(
                'The "string" argument must be of type string. Received type number'
              );
            return c(t);
          }
          return h(t, e, r);
        }
        function h(t, e, r) {
          if ("string" == typeof t)
            return (function (t, e) {
              ("string" == typeof e && "" !== e) || (e = "utf8");
              if (!u.isEncoding(e))
                throw new TypeError("Unknown encoding: " + e);
              const r = 0 | g(t, e);
              let n = a(r);
              const i = n.write(t, e);
              i !== r && (n = n.slice(0, i));
              return n;
            })(t, e);
          if (ArrayBuffer.isView(t))
            return (function (t) {
              if (V(t, Uint8Array)) {
                const e = new Uint8Array(t);
                return d(e.buffer, e.byteOffset, e.byteLength);
              }
              return f(t);
            })(t);
          if (null == t)
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof t
            );
          if (V(t, ArrayBuffer) || (t && V(t.buffer, ArrayBuffer)))
            return d(t, e, r);
          if (
            "undefined" != typeof SharedArrayBuffer &&
            (V(t, SharedArrayBuffer) || (t && V(t.buffer, SharedArrayBuffer)))
          )
            return d(t, e, r);
          if ("number" == typeof t)
            throw new TypeError(
              'The "value" argument must not be of type number. Received type number'
            );
          const n = t.valueOf && t.valueOf();
          if (null != n && n !== t) return u.from(n, e, r);
          const i = (function (t) {
            if (u.isBuffer(t)) {
              const e = 0 | p(t.length),
                r = a(e);
              return 0 === r.length || t.copy(r, 0, 0, e), r;
            }
            if (void 0 !== t.length)
              return "number" != typeof t.length || K(t.length) ? a(0) : f(t);
            if ("Buffer" === t.type && Array.isArray(t.data)) return f(t.data);
          })(t);
          if (i) return i;
          if (
            "undefined" != typeof Symbol &&
            null != Symbol.toPrimitive &&
            "function" == typeof t[Symbol.toPrimitive]
          )
            return u.from(t[Symbol.toPrimitive]("string"), e, r);
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        }
        function l(t) {
          if ("number" != typeof t)
            throw new TypeError('"size" argument must be of type number');
          if (t < 0)
            throw new RangeError(
              'The value "' + t + '" is invalid for option "size"'
            );
        }
        function c(t) {
          return l(t), a(t < 0 ? 0 : 0 | p(t));
        }
        function f(t) {
          const e = t.length < 0 ? 0 : 0 | p(t.length),
            r = a(e);
          for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
          return r;
        }
        function d(t, e, r) {
          if (e < 0 || t.byteLength < e)
            throw new RangeError('"offset" is outside of buffer bounds');
          if (t.byteLength < e + (r || 0))
            throw new RangeError('"length" is outside of buffer bounds');
          let n;
          return (
            (n =
              void 0 === e && void 0 === r
                ? new Uint8Array(t)
                : void 0 === r
                ? new Uint8Array(t, e)
                : new Uint8Array(t, e, r)),
            Object.setPrototypeOf(n, u.prototype),
            n
          );
        }
        function p(t) {
          if (t >= s)
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                s.toString(16) +
                " bytes"
            );
          return 0 | t;
        }
        function g(t, e) {
          if (u.isBuffer(t)) return t.length;
          if (ArrayBuffer.isView(t) || V(t, ArrayBuffer)) return t.byteLength;
          if ("string" != typeof t)
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                typeof t
            );
          const r = t.length,
            n = arguments.length > 2 && !0 === arguments[2];
          if (!n && 0 === r) return 0;
          let i = !1;
          for (;;)
            switch (e) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;
              case "utf8":
              case "utf-8":
                return $(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;
              case "hex":
                return r >>> 1;
              case "base64":
                return W(t).length;
              default:
                if (i) return n ? -1 : $(t).length;
                (e = ("" + e).toLowerCase()), (i = !0);
            }
        }
        function m(t, e, r) {
          let n = !1;
          if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
          if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
            return "";
          if ((r >>>= 0) <= (e >>>= 0)) return "";
          for (t || (t = "utf8"); ; )
            switch (t) {
              case "hex":
                return N(this, e, r);
              case "utf8":
              case "utf-8":
                return T(this, e, r);
              case "ascii":
                return O(this, e, r);
              case "latin1":
              case "binary":
                return P(this, e, r);
              case "base64":
                return R(this, e, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return k(this, e, r);
              default:
                if (n) throw new TypeError("Unknown encoding: " + t);
                (t = (t + "").toLowerCase()), (n = !0);
            }
        }
        function y(t, e, r) {
          const n = t[e];
          (t[e] = t[r]), (t[r] = n);
        }
        function v(t, e, r, n, i) {
          if (0 === t.length) return -1;
          if (
            ("string" == typeof r
              ? ((n = r), (r = 0))
              : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
            K((r = +r)) && (r = i ? 0 : t.length - 1),
            r < 0 && (r = t.length + r),
            r >= t.length)
          ) {
            if (i) return -1;
            r = t.length - 1;
          } else if (r < 0) {
            if (!i) return -1;
            r = 0;
          }
          if (("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)))
            return 0 === e.length ? -1 : w(t, e, r, n, i);
          if ("number" == typeof e)
            return (
              (e &= 255),
              "function" == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(t, e, r)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                : w(t, [e], r, n, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function w(t, e, r, n, i) {
          let o,
            s = 1,
            a = t.length,
            u = e.length;
          if (
            void 0 !== n &&
            ("ucs2" === (n = String(n).toLowerCase()) ||
              "ucs-2" === n ||
              "utf16le" === n ||
              "utf-16le" === n)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (s = 2), (a /= 2), (u /= 2), (r /= 2);
          }
          function h(t, e) {
            return 1 === s ? t[e] : t.readUInt16BE(e * s);
          }
          if (i) {
            let n = -1;
            for (o = r; o < a; o++)
              if (h(t, o) === h(e, -1 === n ? 0 : o - n)) {
                if ((-1 === n && (n = o), o - n + 1 === u)) return n * s;
              } else -1 !== n && (o -= o - n), (n = -1);
          } else
            for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
              let r = !0;
              for (let n = 0; n < u; n++)
                if (h(t, o + n) !== h(e, n)) {
                  r = !1;
                  break;
                }
              if (r) return o;
            }
          return -1;
        }
        function b(t, e, r, n) {
          r = Number(r) || 0;
          const i = t.length - r;
          n ? (n = Number(n)) > i && (n = i) : (n = i);
          const o = e.length;
          let s;
          for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
            const n = parseInt(e.substr(2 * s, 2), 16);
            if (K(n)) return s;
            t[r + s] = n;
          }
          return s;
        }
        function _(t, e, r, n) {
          return G($(e, t.length - r), t, r, n);
        }
        function E(t, e, r, n) {
          return G(
            (function (t) {
              const e = [];
              for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
              return e;
            })(e),
            t,
            r,
            n
          );
        }
        function M(t, e, r, n) {
          return G(W(e), t, r, n);
        }
        function S(t, e, r, n) {
          return G(
            (function (t, e) {
              let r, n, i;
              const o = [];
              for (let s = 0; s < t.length && !((e -= 2) < 0); ++s)
                (r = t.charCodeAt(s)),
                  (n = r >> 8),
                  (i = r % 256),
                  o.push(i),
                  o.push(n);
              return o;
            })(e, t.length - r),
            t,
            r,
            n
          );
        }
        function R(t, e, r) {
          return 0 === e && r === t.length
            ? n.fromByteArray(t)
            : n.fromByteArray(t.slice(e, r));
        }
        function T(t, e, r) {
          r = Math.min(t.length, r);
          const n = [];
          let i = e;
          for (; i < r; ) {
            const e = t[i];
            let o = null,
              s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
            if (i + s <= r) {
              let r, n, a, u;
              switch (s) {
                case 1:
                  e < 128 && (o = e);
                  break;
                case 2:
                  (r = t[i + 1]),
                    128 == (192 & r) &&
                      ((u = ((31 & e) << 6) | (63 & r)), u > 127 && (o = u));
                  break;
                case 3:
                  (r = t[i + 1]),
                    (n = t[i + 2]),
                    128 == (192 & r) &&
                      128 == (192 & n) &&
                      ((u = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)),
                      u > 2047 && (u < 55296 || u > 57343) && (o = u));
                  break;
                case 4:
                  (r = t[i + 1]),
                    (n = t[i + 2]),
                    (a = t[i + 3]),
                    128 == (192 & r) &&
                      128 == (192 & n) &&
                      128 == (192 & a) &&
                      ((u =
                        ((15 & e) << 18) |
                        ((63 & r) << 12) |
                        ((63 & n) << 6) |
                        (63 & a)),
                      u > 65535 && u < 1114112 && (o = u));
              }
            }
            null === o
              ? ((o = 65533), (s = 1))
              : o > 65535 &&
                ((o -= 65536),
                n.push(((o >>> 10) & 1023) | 55296),
                (o = 56320 | (1023 & o))),
              n.push(o),
              (i += s);
          }
          return (function (t) {
            const e = t.length;
            if (e <= A) return String.fromCharCode.apply(String, t);
            let r = "",
              n = 0;
            for (; n < e; )
              r += String.fromCharCode.apply(String, t.slice(n, (n += A)));
            return r;
          })(n);
        }
        (e.kMaxLength = s),
          (u.TYPED_ARRAY_SUPPORT = (function () {
            try {
              const t = new Uint8Array(1),
                e = {
                  foo: function () {
                    return 42;
                  },
                };
              return (
                Object.setPrototypeOf(e, Uint8Array.prototype),
                Object.setPrototypeOf(t, e),
                42 === t.foo()
              );
            } catch (t) {
              return !1;
            }
          })()),
          u.TYPED_ARRAY_SUPPORT ||
            "undefined" == typeof console ||
            "function" != typeof console.error ||
            console.error(
              "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
            ),
          Object.defineProperty(u.prototype, "parent", {
            enumerable: !0,
            get: function () {
              if (u.isBuffer(this)) return this.buffer;
            },
          }),
          Object.defineProperty(u.prototype, "offset", {
            enumerable: !0,
            get: function () {
              if (u.isBuffer(this)) return this.byteOffset;
            },
          }),
          (u.poolSize = 8192),
          (u.from = function (t, e, r) {
            return h(t, e, r);
          }),
          Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(u, Uint8Array),
          (u.alloc = function (t, e, r) {
            return (function (t, e, r) {
              return (
                l(t),
                t <= 0
                  ? a(t)
                  : void 0 !== e
                  ? "string" == typeof r
                    ? a(t).fill(e, r)
                    : a(t).fill(e)
                  : a(t)
              );
            })(t, e, r);
          }),
          (u.allocUnsafe = function (t) {
            return c(t);
          }),
          (u.allocUnsafeSlow = function (t) {
            return c(t);
          }),
          (u.isBuffer = function (t) {
            return null != t && !0 === t._isBuffer && t !== u.prototype;
          }),
          (u.compare = function (t, e) {
            if (
              (V(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
              V(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
              !u.isBuffer(t) || !u.isBuffer(e))
            )
              throw new TypeError(
                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
              );
            if (t === e) return 0;
            let r = t.length,
              n = e.length;
            for (let i = 0, o = Math.min(r, n); i < o; ++i)
              if (t[i] !== e[i]) {
                (r = t[i]), (n = e[i]);
                break;
              }
            return r < n ? -1 : n < r ? 1 : 0;
          }),
          (u.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (u.concat = function (t, e) {
            if (!Array.isArray(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return u.alloc(0);
            let r;
            if (void 0 === e)
              for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
            const n = u.allocUnsafe(e);
            let i = 0;
            for (r = 0; r < t.length; ++r) {
              let e = t[r];
              if (V(e, Uint8Array))
                i + e.length > n.length
                  ? (u.isBuffer(e) || (e = u.from(e)), e.copy(n, i))
                  : Uint8Array.prototype.set.call(n, e, i);
              else {
                if (!u.isBuffer(e))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                  );
                e.copy(n, i);
              }
              i += e.length;
            }
            return n;
          }),
          (u.byteLength = g),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function () {
            const t = this.length;
            if (t % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (let e = 0; e < t; e += 2) y(this, e, e + 1);
            return this;
          }),
          (u.prototype.swap32 = function () {
            const t = this.length;
            if (t % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (let e = 0; e < t; e += 4)
              y(this, e, e + 3), y(this, e + 1, e + 2);
            return this;
          }),
          (u.prototype.swap64 = function () {
            const t = this.length;
            if (t % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (let e = 0; e < t; e += 8)
              y(this, e, e + 7),
                y(this, e + 1, e + 6),
                y(this, e + 2, e + 5),
                y(this, e + 3, e + 4);
            return this;
          }),
          (u.prototype.toString = function () {
            const t = this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? T(this, 0, t)
              : m.apply(this, arguments);
          }),
          (u.prototype.toLocaleString = u.prototype.toString),
          (u.prototype.equals = function (t) {
            if (!u.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === u.compare(this, t);
          }),
          (u.prototype.inspect = function () {
            let t = "";
            const r = e.INSPECT_MAX_BYTES;
            return (
              (t = this.toString("hex", 0, r)
                .replace(/(.{2})/g, "$1 ")
                .trim()),
              this.length > r && (t += " ... "),
              "<Buffer " + t + ">"
            );
          }),
          o && (u.prototype[o] = u.prototype.inspect),
          (u.prototype.compare = function (t, e, r, n, i) {
            if (
              (V(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
              !u.isBuffer(t))
            )
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                  typeof t
              );
            if (
              (void 0 === e && (e = 0),
              void 0 === r && (r = t ? t.length : 0),
              void 0 === n && (n = 0),
              void 0 === i && (i = this.length),
              e < 0 || r > t.length || n < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (n >= i && e >= r) return 0;
            if (n >= i) return -1;
            if (e >= r) return 1;
            if (this === t) return 0;
            let o = (i >>>= 0) - (n >>>= 0),
              s = (r >>>= 0) - (e >>>= 0);
            const a = Math.min(o, s),
              h = this.slice(n, i),
              l = t.slice(e, r);
            for (let t = 0; t < a; ++t)
              if (h[t] !== l[t]) {
                (o = h[t]), (s = l[t]);
                break;
              }
            return o < s ? -1 : s < o ? 1 : 0;
          }),
          (u.prototype.includes = function (t, e, r) {
            return -1 !== this.indexOf(t, e, r);
          }),
          (u.prototype.indexOf = function (t, e, r) {
            return v(this, t, e, r, !0);
          }),
          (u.prototype.lastIndexOf = function (t, e, r) {
            return v(this, t, e, r, !1);
          }),
          (u.prototype.write = function (t, e, r, n) {
            if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
            else if (void 0 === r && "string" == typeof e)
              (n = e), (r = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (e >>>= 0),
                isFinite(r)
                  ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                  : ((n = r), (r = void 0));
            }
            const i = this.length - e;
            if (
              ((void 0 === r || r > i) && (r = i),
              (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            let o = !1;
            for (;;)
              switch (n) {
                case "hex":
                  return b(this, t, e, r);
                case "utf8":
                case "utf-8":
                  return _(this, t, e, r);
                case "ascii":
                case "latin1":
                case "binary":
                  return E(this, t, e, r);
                case "base64":
                  return M(this, t, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return S(this, t, e, r);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + n);
                  (n = ("" + n).toLowerCase()), (o = !0);
              }
          }),
          (u.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        const A = 4096;
        function O(t, e, r) {
          let n = "";
          r = Math.min(t.length, r);
          for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
          return n;
        }
        function P(t, e, r) {
          let n = "";
          r = Math.min(t.length, r);
          for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
          return n;
        }
        function N(t, e, r) {
          const n = t.length;
          (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
          let i = "";
          for (let n = e; n < r; ++n) i += Z[t[n]];
          return i;
        }
        function k(t, e, r) {
          const n = t.slice(e, r);
          let i = "";
          for (let t = 0; t < n.length - 1; t += 2)
            i += String.fromCharCode(n[t] + 256 * n[t + 1]);
          return i;
        }
        function I(t, e, r) {
          if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > r)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function B(t, e, r, n, i, o) {
          if (!u.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > i || e < o)
            throw new RangeError('"value" argument is out of bounds');
          if (r + n > t.length) throw new RangeError("Index out of range");
        }
        function x(t, e, r, n, i) {
          z(e, n, i, t, r, 7);
          let o = Number(e & BigInt(4294967295));
          (t[r++] = o),
            (o >>= 8),
            (t[r++] = o),
            (o >>= 8),
            (t[r++] = o),
            (o >>= 8),
            (t[r++] = o);
          let s = Number((e >> BigInt(32)) & BigInt(4294967295));
          return (
            (t[r++] = s),
            (s >>= 8),
            (t[r++] = s),
            (s >>= 8),
            (t[r++] = s),
            (s >>= 8),
            (t[r++] = s),
            r
          );
        }
        function C(t, e, r, n, i) {
          z(e, n, i, t, r, 7);
          let o = Number(e & BigInt(4294967295));
          (t[r + 7] = o),
            (o >>= 8),
            (t[r + 6] = o),
            (o >>= 8),
            (t[r + 5] = o),
            (o >>= 8),
            (t[r + 4] = o);
          let s = Number((e >> BigInt(32)) & BigInt(4294967295));
          return (
            (t[r + 3] = s),
            (s >>= 8),
            (t[r + 2] = s),
            (s >>= 8),
            (t[r + 1] = s),
            (s >>= 8),
            (t[r] = s),
            r + 8
          );
        }
        function L(t, e, r, n, i, o) {
          if (r + n > t.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }
        function j(t, e, r, n, o) {
          return (
            (e = +e),
            (r >>>= 0),
            o || L(t, 0, r, 4),
            i.write(t, e, r, n, 23, 4),
            r + 4
          );
        }
        function F(t, e, r, n, o) {
          return (
            (e = +e),
            (r >>>= 0),
            o || L(t, 0, r, 8),
            i.write(t, e, r, n, 52, 8),
            r + 8
          );
        }
        (u.prototype.slice = function (t, e) {
          const r = this.length;
          (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            (e = void 0 === e ? r : ~~e) < 0
              ? (e += r) < 0 && (e = 0)
              : e > r && (e = r),
            e < t && (e = t);
          const n = this.subarray(t, e);
          return Object.setPrototypeOf(n, u.prototype), n;
        }),
          (u.prototype.readUintLE = u.prototype.readUIntLE =
            function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || I(t, e, this.length);
              let n = this[t],
                i = 1,
                o = 0;
              for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
              return n;
            }),
          (u.prototype.readUintBE = u.prototype.readUIntBE =
            function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || I(t, e, this.length);
              let n = this[t + --e],
                i = 1;
              for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
              return n;
            }),
          (u.prototype.readUint8 = u.prototype.readUInt8 =
            function (t, e) {
              return (t >>>= 0), e || I(t, 1, this.length), this[t];
            }),
          (u.prototype.readUint16LE = u.prototype.readUInt16LE =
            function (t, e) {
              return (
                (t >>>= 0),
                e || I(t, 2, this.length),
                this[t] | (this[t + 1] << 8)
              );
            }),
          (u.prototype.readUint16BE = u.prototype.readUInt16BE =
            function (t, e) {
              return (
                (t >>>= 0),
                e || I(t, 2, this.length),
                (this[t] << 8) | this[t + 1]
              );
            }),
          (u.prototype.readUint32LE = u.prototype.readUInt32LE =
            function (t, e) {
              return (
                (t >>>= 0),
                e || I(t, 4, this.length),
                (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                  16777216 * this[t + 3]
              );
            }),
          (u.prototype.readUint32BE = u.prototype.readUInt32BE =
            function (t, e) {
              return (
                (t >>>= 0),
                e || I(t, 4, this.length),
                16777216 * this[t] +
                  ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
              );
            }),
          (u.prototype.readBigUInt64LE = Q(function (t) {
            H((t >>>= 0), "offset");
            const e = this[t],
              r = this[t + 7];
            (void 0 !== e && void 0 !== r) || J(t, this.length - 8);
            const n =
                e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
              i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
            return BigInt(n) + (BigInt(i) << BigInt(32));
          })),
          (u.prototype.readBigUInt64BE = Q(function (t) {
            H((t >>>= 0), "offset");
            const e = this[t],
              r = this[t + 7];
            (void 0 !== e && void 0 !== r) || J(t, this.length - 8);
            const n =
                e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
              i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
            return (BigInt(n) << BigInt(32)) + BigInt(i);
          })),
          (u.prototype.readIntLE = function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || I(t, e, this.length);
            let n = this[t],
              i = 1,
              o = 0;
            for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
            return (i *= 128), n >= i && (n -= Math.pow(2, 8 * e)), n;
          }),
          (u.prototype.readIntBE = function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || I(t, e, this.length);
            let n = e,
              i = 1,
              o = this[t + --n];
            for (; n > 0 && (i *= 256); ) o += this[t + --n] * i;
            return (i *= 128), o >= i && (o -= Math.pow(2, 8 * e)), o;
          }),
          (u.prototype.readInt8 = function (t, e) {
            return (
              (t >>>= 0),
              e || I(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (u.prototype.readInt16LE = function (t, e) {
            (t >>>= 0), e || I(t, 2, this.length);
            const r = this[t] | (this[t + 1] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (u.prototype.readInt16BE = function (t, e) {
            (t >>>= 0), e || I(t, 2, this.length);
            const r = this[t + 1] | (this[t] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (u.prototype.readInt32LE = function (t, e) {
            return (
              (t >>>= 0),
              e || I(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (u.prototype.readInt32BE = function (t, e) {
            return (
              (t >>>= 0),
              e || I(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (u.prototype.readBigInt64LE = Q(function (t) {
            H((t >>>= 0), "offset");
            const e = this[t],
              r = this[t + 7];
            (void 0 !== e && void 0 !== r) || J(t, this.length - 8);
            const n =
              this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
            return (
              (BigInt(n) << BigInt(32)) +
              BigInt(
                e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24
              )
            );
          })),
          (u.prototype.readBigInt64BE = Q(function (t) {
            H((t >>>= 0), "offset");
            const e = this[t],
              r = this[t + 7];
            (void 0 !== e && void 0 !== r) || J(t, this.length - 8);
            const n =
              (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
            return (
              (BigInt(n) << BigInt(32)) +
              BigInt(
                this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r
              )
            );
          })),
          (u.prototype.readFloatLE = function (t, e) {
            return (
              (t >>>= 0), e || I(t, 4, this.length), i.read(this, t, !0, 23, 4)
            );
          }),
          (u.prototype.readFloatBE = function (t, e) {
            return (
              (t >>>= 0), e || I(t, 4, this.length), i.read(this, t, !1, 23, 4)
            );
          }),
          (u.prototype.readDoubleLE = function (t, e) {
            return (
              (t >>>= 0), e || I(t, 8, this.length), i.read(this, t, !0, 52, 8)
            );
          }),
          (u.prototype.readDoubleBE = function (t, e) {
            return (
              (t >>>= 0), e || I(t, 8, this.length), i.read(this, t, !1, 52, 8)
            );
          }),
          (u.prototype.writeUintLE = u.prototype.writeUIntLE =
            function (t, e, r, n) {
              if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
              }
              let i = 1,
                o = 0;
              for (this[e] = 255 & t; ++o < r && (i *= 256); )
                this[e + o] = (t / i) & 255;
              return e + r;
            }),
          (u.prototype.writeUintBE = u.prototype.writeUIntBE =
            function (t, e, r, n) {
              if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
              }
              let i = r - 1,
                o = 1;
              for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
                this[e + i] = (t / o) & 255;
              return e + r;
            }),
          (u.prototype.writeUint8 = u.prototype.writeUInt8 =
            function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || B(this, t, e, 1, 255, 0),
                (this[e] = 255 & t),
                e + 1
              );
            }),
          (u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
            function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || B(this, t, e, 2, 65535, 0),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                e + 2
              );
            }),
          (u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
            function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || B(this, t, e, 2, 65535, 0),
                (this[e] = t >>> 8),
                (this[e + 1] = 255 & t),
                e + 2
              );
            }),
          (u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
            function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || B(this, t, e, 4, 4294967295, 0),
                (this[e + 3] = t >>> 24),
                (this[e + 2] = t >>> 16),
                (this[e + 1] = t >>> 8),
                (this[e] = 255 & t),
                e + 4
              );
            }),
          (u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
            function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || B(this, t, e, 4, 4294967295, 0),
                (this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t),
                e + 4
              );
            }),
          (u.prototype.writeBigUInt64LE = Q(function (t, e = 0) {
            return x(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (u.prototype.writeBigUInt64BE = Q(function (t, e = 0) {
            return C(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (u.prototype.writeIntLE = function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), !n)) {
              const n = Math.pow(2, 8 * r - 1);
              B(this, t, e, r, n - 1, -n);
            }
            let i = 0,
              o = 1,
              s = 0;
            for (this[e] = 255 & t; ++i < r && (o *= 256); )
              t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
                (this[e + i] = (((t / o) >> 0) - s) & 255);
            return e + r;
          }),
          (u.prototype.writeIntBE = function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), !n)) {
              const n = Math.pow(2, 8 * r - 1);
              B(this, t, e, r, n - 1, -n);
            }
            let i = r - 1,
              o = 1,
              s = 0;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
                (this[e + i] = (((t / o) >> 0) - s) & 255);
            return e + r;
          }),
          (u.prototype.writeInt8 = function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || B(this, t, e, 1, 127, -128),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (u.prototype.writeInt16LE = function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || B(this, t, e, 2, 32767, -32768),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
          (u.prototype.writeInt16BE = function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || B(this, t, e, 2, 32767, -32768),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            );
          }),
          (u.prototype.writeInt32LE = function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || B(this, t, e, 4, 2147483647, -2147483648),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              (this[e + 2] = t >>> 16),
              (this[e + 3] = t >>> 24),
              e + 4
            );
          }),
          (u.prototype.writeInt32BE = function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || B(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
          (u.prototype.writeBigInt64LE = Q(function (t, e = 0) {
            return x(
              this,
              t,
              e,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff")
            );
          })),
          (u.prototype.writeBigInt64BE = Q(function (t, e = 0) {
            return C(
              this,
              t,
              e,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff")
            );
          })),
          (u.prototype.writeFloatLE = function (t, e, r) {
            return j(this, t, e, !0, r);
          }),
          (u.prototype.writeFloatBE = function (t, e, r) {
            return j(this, t, e, !1, r);
          }),
          (u.prototype.writeDoubleLE = function (t, e, r) {
            return F(this, t, e, !0, r);
          }),
          (u.prototype.writeDoubleBE = function (t, e, r) {
            return F(this, t, e, !1, r);
          }),
          (u.prototype.copy = function (t, e, r, n) {
            if (!u.isBuffer(t))
              throw new TypeError("argument should be a Buffer");
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              n > 0 && n < r && (n = r),
              n === r)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
              throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
              t.length - e < n - r && (n = t.length - e + r);
            const i = n - r;
            return (
              this === t && "function" == typeof Uint8Array.prototype.copyWithin
                ? this.copyWithin(e, r, n)
                : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
              i
            );
          }),
          (u.prototype.fill = function (t, e, r, n) {
            if ("string" == typeof t) {
              if (
                ("string" == typeof e
                  ? ((n = e), (e = 0), (r = this.length))
                  : "string" == typeof r && ((n = r), (r = this.length)),
                void 0 !== n && "string" != typeof n)
              )
                throw new TypeError("encoding must be a string");
              if ("string" == typeof n && !u.isEncoding(n))
                throw new TypeError("Unknown encoding: " + n);
              if (1 === t.length) {
                const e = t.charCodeAt(0);
                (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
              }
            } else
              "number" == typeof t
                ? (t &= 255)
                : "boolean" == typeof t && (t = Number(t));
            if (e < 0 || this.length < e || this.length < r)
              throw new RangeError("Out of range index");
            if (r <= e) return this;
            let i;
            if (
              ((e >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              t || (t = 0),
              "number" == typeof t)
            )
              for (i = e; i < r; ++i) this[i] = t;
            else {
              const o = u.isBuffer(t) ? t : u.from(t, n),
                s = o.length;
              if (0 === s)
                throw new TypeError(
                  'The value "' + t + '" is invalid for argument "value"'
                );
              for (i = 0; i < r - e; ++i) this[i + e] = o[i % s];
            }
            return this;
          });
        const U = {};
        function q(t, e, r) {
          U[t] = class extends r {
            constructor() {
              super(),
                Object.defineProperty(this, "message", {
                  value: e.apply(this, arguments),
                  writable: !0,
                  configurable: !0,
                }),
                (this.name = `${this.name} [${t}]`),
                this.stack,
                delete this.name;
            }
            get code() {
              return t;
            }
            set code(t) {
              Object.defineProperty(this, "code", {
                configurable: !0,
                enumerable: !0,
                value: t,
                writable: !0,
              });
            }
            toString() {
              return `${this.name} [${t}]: ${this.message}`;
            }
          };
        }
        function D(t) {
          let e = "",
            r = t.length;
          const n = "-" === t[0] ? 1 : 0;
          for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
          return `${t.slice(0, r)}${e}`;
        }
        function z(t, e, r, n, i, o) {
          if (t > r || t < e) {
            const n = "bigint" == typeof e ? "n" : "";
            let i;
            throw (
              ((i =
                o > 3
                  ? 0 === e || e === BigInt(0)
                    ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}`
                    : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${
                        8 * (o + 1) - 1
                      }${n}`
                  : `>= ${e}${n} and <= ${r}${n}`),
              new U.ERR_OUT_OF_RANGE("value", i, t))
            );
          }
          !(function (t, e, r) {
            H(e, "offset"),
              (void 0 !== t[e] && void 0 !== t[e + r]) ||
                J(e, t.length - (r + 1));
          })(n, i, o);
        }
        function H(t, e) {
          if ("number" != typeof t)
            throw new U.ERR_INVALID_ARG_TYPE(e, "number", t);
        }
        function J(t, e, r) {
          if (Math.floor(t) !== t)
            throw (
              (H(t, r), new U.ERR_OUT_OF_RANGE(r || "offset", "an integer", t))
            );
          if (e < 0) throw new U.ERR_BUFFER_OUT_OF_BOUNDS();
          throw new U.ERR_OUT_OF_RANGE(
            r || "offset",
            `>= ${r ? 1 : 0} and <= ${e}`,
            t
          );
        }
        q(
          "ERR_BUFFER_OUT_OF_BOUNDS",
          function (t) {
            return t
              ? `${t} is outside of buffer bounds`
              : "Attempt to access memory outside buffer bounds";
          },
          RangeError
        ),
          q(
            "ERR_INVALID_ARG_TYPE",
            function (t, e) {
              return `The "${t}" argument must be of type number. Received type ${typeof e}`;
            },
            TypeError
          ),
          q(
            "ERR_OUT_OF_RANGE",
            function (t, e, r) {
              let n = `The value of "${t}" is out of range.`,
                i = r;
              return (
                Number.isInteger(r) && Math.abs(r) > 2 ** 32
                  ? (i = D(String(r)))
                  : "bigint" == typeof r &&
                    ((i = String(r)),
                    (r > BigInt(2) ** BigInt(32) ||
                      r < -(BigInt(2) ** BigInt(32))) &&
                      (i = D(i)),
                    (i += "n")),
                (n += ` It must be ${e}. Received ${i}`),
                n
              );
            },
            RangeError
          );
        const Y = /[^+/0-9A-Za-z-_]/g;
        function $(t, e) {
          let r;
          e = e || 1 / 0;
          const n = t.length;
          let i = null;
          const o = [];
          for (let s = 0; s < n; ++s) {
            if (((r = t.charCodeAt(s)), r > 55295 && r < 57344)) {
              if (!i) {
                if (r > 56319) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === n) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = r;
                continue;
              }
              if (r < 56320) {
                (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
                continue;
              }
              r = 65536 + (((i - 55296) << 10) | (r - 56320));
            } else i && (e -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), r < 128)) {
              if ((e -= 1) < 0) break;
              o.push(r);
            } else if (r < 2048) {
              if ((e -= 2) < 0) break;
              o.push((r >> 6) | 192, (63 & r) | 128);
            } else if (r < 65536) {
              if ((e -= 3) < 0) break;
              o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              o.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              );
            }
          }
          return o;
        }
        function W(t) {
          return n.toByteArray(
            (function (t) {
              if ((t = (t = t.split("=")[0]).trim().replace(Y, "")).length < 2)
                return "";
              for (; t.length % 4 != 0; ) t += "=";
              return t;
            })(t)
          );
        }
        function G(t, e, r, n) {
          let i;
          for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
            e[i + r] = t[i];
          return i;
        }
        function V(t, e) {
          return (
            t instanceof e ||
            (null != t &&
              null != t.constructor &&
              null != t.constructor.name &&
              t.constructor.name === e.name)
          );
        }
        function K(t) {
          return t != t;
        }
        const Z = (function () {
          const t = "0123456789abcdef",
            e = new Array(256);
          for (let r = 0; r < 16; ++r) {
            const n = 16 * r;
            for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
          }
          return e;
        })();
        function Q(t) {
          return "undefined" == typeof BigInt ? X : t;
        }
        function X() {
          throw new Error("BigInt not supported");
        }
      },
      96008: (t, e) => {
        "use strict";
        (function (t) {
          (t[(t.ETHEREUM_MAINNET = 1)] = "ETHEREUM_MAINNET"),
            (t[(t.OPTIMISM_MAINNET = 10)] = "OPTIMISM_MAINNET"),
            (t[(t.POLYGON_MAINNET = 137)] = "POLYGON_MAINNET"),
            (t[(t.ETHEREUM_CLASSIC_MAINNET = 61)] = "ETHEREUM_CLASSIC_MAINNET"),
            (t[(t.BSC_MAINNET = 56)] = "BSC_MAINNET"),
            (t[(t.ROPSTEN = 3)] = "ROPSTEN"),
            (t[(t.RINKEBY = 4)] = "RINKEBY"),
            (t[(t.GOERLI = 5)] = "GOERLI"),
            (t[(t.KOVAN = 42)] = "KOVAN"),
            (t[(t.OPTIMISM_KOVAN = 69)] = "OPTIMISM_KOVAN"),
            (t[(t.POLYGON_TESTNET = 80001)] = "POLYGON_TESTNET"),
            (t[(t.BSC_TESTNET = 97)] = "BSC_TESTNET");
        })(e.l || (e.l = {})),
          (function (t) {
            function e(e) {
              switch (e) {
                case t.ETHEREUM_MAINNET:
                  return "https://mainnet-infura.wallet.coinbase.com/v3";
                case t.ROPSTEN:
                  return "https://ropsten-infura.wallet.coinbase.com/v3";
                case t.RINKEBY:
                  return "https://rinkeby-infura.wallet.coinbase.com/v3";
                case t.KOVAN:
                  return "https://kovan-infura.wallet.coinbase.com/v3";
                case t.GOERLI:
                  return "https://goerli-node.wallet.coinbase.com";
                case t.OPTIMISM_KOVAN:
                  return "https://optimism-node.wallet.coinbase.com";
                case t.OPTIMISM_MAINNET:
                  return "https://optimism-mainnet.wallet.coinbase.com";
                case t.POLYGON_MAINNET:
                  return "https://polygon-mainnet-infura.wallet.coinbase.com/v3";
                case t.POLYGON_TESTNET:
                  return "https://polygon-mumbai-infura.wallet.coinbase.com/v3";
                case t.BSC_MAINNET:
                  return "https://bsc-dataseed.binance.org";
                case t.BSC_TESTNET:
                  return "https://data-seed-prebsc-1-s1.binance.org:8545";
                default:
                  throw new Error(
                    "no node url exists for chainId " + e.valueOf()
                  );
              }
            }
            (t.baseAssetCurrencyCode = function (e) {
              switch (e) {
                case t.POLYGON_TESTNET:
                case t.POLYGON_MAINNET:
                  return "MATIC".toLocaleUpperCase("en-US");
                case t.BSC_MAINNET:
                case t.BSC_TESTNET:
                  return "BNB".toLocaleUpperCase("en-US");
                default:
                  return;
              }
            }),
              (t.baseAssetImageUrl = function (e) {
                switch (e) {
                  case t.POLYGON_MAINNET:
                  case t.POLYGON_TESTNET:
                    return "https://wallet-api-production.s3.amazonaws.com/uploads/b474d4bf3af389e5f26ed66956f1da8a/maticLogo.png";
                  case t.BSC_MAINNET:
                  case t.BSC_TESTNET:
                    return "https://wallet-api-production.s3.amazonaws.com/uploads/e12b5eaa48ec08814f6b81c68e1b3fc7/bnb_logo.png";
                  default:
                    return;
                }
              }),
              (t.baseAssetDisplayName = function (e) {
                switch (e) {
                  case t.ETHEREUM_MAINNET:
                    return "Ethereum";
                  case t.OPTIMISM_MAINNET:
                    return "Optimistic Ethereum";
                  case t.POLYGON_MAINNET:
                    return "Matic";
                  case t.ETHEREUM_CLASSIC_MAINNET:
                    return "Ethereum Classic";
                  case t.ROPSTEN:
                    return "Ropsten Ethereum";
                  case t.RINKEBY:
                    return "Rinkeby Ethereum";
                  case t.GOERLI:
                    return "G\xf6rli Ethereum";
                  case t.KOVAN:
                    return "Kovan Ethereum";
                  case t.OPTIMISM_KOVAN:
                    return "Optimistic Kovan";
                  case t.POLYGON_TESTNET:
                    return "Testnet Matic";
                  case t.BSC_MAINNET:
                  case t.BSC_TESTNET:
                    return "BNB";
                }
              }),
              (t.displayName = function (e) {
                switch (e) {
                  case t.ETHEREUM_MAINNET:
                    return "Ethereum";
                  case t.OPTIMISM_MAINNET:
                    return "Optimism Mainnet";
                  case t.POLYGON_MAINNET:
                    return "Polygon Mainnet";
                  case t.ETHEREUM_CLASSIC_MAINNET:
                    return "Ethereum Classic";
                  case t.BSC_MAINNET:
                    return "Binance Smart Chain";
                  case t.ROPSTEN:
                    return "Ropsten";
                  case t.RINKEBY:
                    return "Rinkeby";
                  case t.GOERLI:
                    return "G\xf6rli";
                  case t.KOVAN:
                    return "Kovan";
                  case t.OPTIMISM_KOVAN:
                    return "Optimistic Kovan";
                  case t.POLYGON_TESTNET:
                    return "Polygon Mumbai";
                  case t.BSC_TESTNET:
                    return "Binance Smart Chain Testnet";
                }
              }),
              (t.isTestnet = function (e) {
                switch (e) {
                  case t.ETHEREUM_MAINNET:
                  case t.OPTIMISM_MAINNET:
                  case t.POLYGON_MAINNET:
                  case t.ETHEREUM_CLASSIC_MAINNET:
                  case t.BSC_MAINNET:
                    return !1;
                  case t.RINKEBY:
                  case t.ROPSTEN:
                  case t.GOERLI:
                  case t.KOVAN:
                  case t.OPTIMISM_KOVAN:
                  case t.POLYGON_TESTNET:
                  case t.BSC_TESTNET:
                    return !0;
                }
              }),
              (t.blockExplorerUrl = function (e) {
                switch (e) {
                  case t.ETHEREUM_MAINNET:
                    return "https://etherscan.io";
                  case t.OPTIMISM_MAINNET:
                    return "https://optimistic.etherscan.io";
                  case t.POLYGON_MAINNET:
                    return "https://polygonscan.com";
                  case t.BSC_MAINNET:
                    return "https://bscscan.com";
                  case t.ROPSTEN:
                    return "https://ropsten.etherscan.io";
                  case t.RINKEBY:
                    return "https://rinkeby.etherscan.io";
                  case t.GOERLI:
                    return "https://goerli.etherscan.io";
                  case t.KOVAN:
                    return "https://kovan.etherscan.io";
                  case t.POLYGON_TESTNET:
                    return "https://explorer-mumbai.maticvigil.com";
                  case t.OPTIMISM_KOVAN:
                    return "https://kovan-optimistic.etherscan.io";
                  case t.BSC_TESTNET:
                    return "https://testnet.bscscan.com";
                  default:
                    throw new Error("Unsupported Ethereum network. $thiz");
                }
              }),
              (t.rpcUrl = e),
              (t.etherscanCompatibleTxHistoryApi = function (e) {
                switch (e) {
                  case t.ETHEREUM_MAINNET:
                    return "https://mainnet-etherscan.wallet.coinbase.com";
                  case t.ROPSTEN:
                    return "https://ropsten-etherscan.wallet.coinbase.com";
                  case t.RINKEBY:
                    return "https://rinkeby-etherscan.wallet.coinbase.com";
                  case t.KOVAN:
                    return "https://kovan-etherscan.wallet.coinbase.com";
                  case t.GOERLI:
                    return "https://goerli-etherscan.wallet.coinbase.com";
                  case t.OPTIMISM_KOVAN:
                    return "https://kovan-optimistic.etherscan.io";
                  case t.OPTIMISM_MAINNET:
                    return "https://optimism-etherscan.wallet.coinbase.com";
                  case t.POLYGON_TESTNET:
                    return "https://explorer-mumbai.maticvigil.com";
                  case t.POLYGON_MAINNET:
                    return "https://api.polygonscan.com";
                  case t.BSC_MAINNET:
                    return "https://api.bscscan.com";
                  case t.BSC_TESTNET:
                    return "https://api-testnet.bscscan.com";
                  default:
                    throw new Error(
                      "no etherscan api for chainId " + e.valueOf()
                    );
                }
              }),
              (t.rpcUrlWithInfuraKey = function (r, n) {
                return t.nodeRequiresInfuraKey(r)
                  ? ((i = e(r)), (o = n) ? i + "/" + o : i)
                  : e(r);
                var i, o;
              }),
              (t.nodeRequiresInfuraKey = function (t) {
                var e = t.valueOf();
                return (
                  1 == e ||
                  3 == e ||
                  4 == e ||
                  42 == e ||
                  137 == e ||
                  80001 == e
                );
              }),
              (t.fromChainId = function (e) {
                switch (Number(e)) {
                  case t.ETHEREUM_MAINNET.valueOf():
                    return t.ETHEREUM_MAINNET;
                  case t.OPTIMISM_MAINNET.valueOf():
                    return t.OPTIMISM_MAINNET;
                  case t.POLYGON_MAINNET.valueOf():
                    return t.POLYGON_MAINNET;
                  case t.ETHEREUM_CLASSIC_MAINNET.valueOf():
                    return t.ETHEREUM_CLASSIC_MAINNET;
                  case t.BSC_MAINNET.valueOf():
                    return t.BSC_MAINNET;
                  case t.ROPSTEN.valueOf():
                    return t.ROPSTEN;
                  case t.RINKEBY.valueOf():
                    return t.RINKEBY;
                  case t.GOERLI.valueOf():
                    return t.GOERLI;
                  case t.KOVAN.valueOf():
                    return t.KOVAN;
                  case t.OPTIMISM_KOVAN.valueOf():
                    return t.OPTIMISM_KOVAN;
                  case t.POLYGON_TESTNET.valueOf():
                    return t.POLYGON_TESTNET;
                  case t.BSC_TESTNET.valueOf():
                    return t.BSC_TESTNET;
                  default:
                    return;
                }
              });
          })(e.l || (e.l = {}));
      },
      17187: (t) => {
        "use strict";
        var e,
          r = "object" == typeof Reflect ? Reflect : null,
          n =
            r && "function" == typeof r.apply
              ? r.apply
              : function (t, e, r) {
                  return Function.prototype.apply.call(t, e, r);
                };
        e =
          r && "function" == typeof r.ownKeys
            ? r.ownKeys
            : Object.getOwnPropertySymbols
            ? function (t) {
                return Object.getOwnPropertyNames(t).concat(
                  Object.getOwnPropertySymbols(t)
                );
              }
            : function (t) {
                return Object.getOwnPropertyNames(t);
              };
        var i =
          Number.isNaN ||
          function (t) {
            return t != t;
          };
        function o() {
          o.init.call(this);
        }
        (t.exports = o),
          (t.exports.once = function (t, e) {
            return new Promise(function (r, n) {
              function i(r) {
                t.removeListener(e, o), n(r);
              }
              function o() {
                "function" == typeof t.removeListener &&
                  t.removeListener("error", i),
                  r([].slice.call(arguments));
              }
              g(t, e, o, { once: !0 }),
                "error" !== e &&
                  (function (t, e, r) {
                    "function" == typeof t.on && g(t, "error", e, r);
                  })(t, i, { once: !0 });
            });
          }),
          (o.EventEmitter = o),
          (o.prototype._events = void 0),
          (o.prototype._eventsCount = 0),
          (o.prototype._maxListeners = void 0);
        var s = 10;
        function a(t) {
          if ("function" != typeof t)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof t
            );
        }
        function u(t) {
          return void 0 === t._maxListeners
            ? o.defaultMaxListeners
            : t._maxListeners;
        }
        function h(t, e, r, n) {
          var i, o, s, h;
          if (
            (a(r),
            void 0 === (o = t._events)
              ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
              : (void 0 !== o.newListener &&
                  (t.emit("newListener", e, r.listener ? r.listener : r),
                  (o = t._events)),
                (s = o[e])),
            void 0 === s)
          )
            (s = o[e] = r), ++t._eventsCount;
          else if (
            ("function" == typeof s
              ? (s = o[e] = n ? [r, s] : [s, r])
              : n
              ? s.unshift(r)
              : s.push(r),
            (i = u(t)) > 0 && s.length > i && !s.warned)
          ) {
            s.warned = !0;
            var l = new Error(
              "Possible EventEmitter memory leak detected. " +
                s.length +
                " " +
                String(e) +
                " listeners added. Use emitter.setMaxListeners() to increase limit"
            );
            (l.name = "MaxListenersExceededWarning"),
              (l.emitter = t),
              (l.type = e),
              (l.count = s.length),
              (h = l),
              console && console.warn && console.warn(h);
          }
          return t;
        }
        function l() {
          if (!this.fired)
            return (
              this.target.removeListener(this.type, this.wrapFn),
              (this.fired = !0),
              0 === arguments.length
                ? this.listener.call(this.target)
                : this.listener.apply(this.target, arguments)
            );
        }
        function c(t, e, r) {
          var n = {
              fired: !1,
              wrapFn: void 0,
              target: t,
              type: e,
              listener: r,
            },
            i = l.bind(n);
          return (i.listener = r), (n.wrapFn = i), i;
        }
        function f(t, e, r) {
          var n = t._events;
          if (void 0 === n) return [];
          var i = n[e];
          return void 0 === i
            ? []
            : "function" == typeof i
            ? r
              ? [i.listener || i]
              : [i]
            : r
            ? (function (t) {
                for (var e = new Array(t.length), r = 0; r < e.length; ++r)
                  e[r] = t[r].listener || t[r];
                return e;
              })(i)
            : p(i, i.length);
        }
        function d(t) {
          var e = this._events;
          if (void 0 !== e) {
            var r = e[t];
            if ("function" == typeof r) return 1;
            if (void 0 !== r) return r.length;
          }
          return 0;
        }
        function p(t, e) {
          for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
          return r;
        }
        function g(t, e, r, n) {
          if ("function" == typeof t.on) n.once ? t.once(e, r) : t.on(e, r);
          else {
            if ("function" != typeof t.addEventListener)
              throw new TypeError(
                'The "emitter" argument must be of type EventEmitter. Received type ' +
                  typeof t
              );
            t.addEventListener(e, function i(o) {
              n.once && t.removeEventListener(e, i), r(o);
            });
          }
        }
        Object.defineProperty(o, "defaultMaxListeners", {
          enumerable: !0,
          get: function () {
            return s;
          },
          set: function (t) {
            if ("number" != typeof t || t < 0 || i(t))
              throw new RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                  t +
                  "."
              );
            s = t;
          },
        }),
          (o.init = function () {
            (void 0 !== this._events &&
              this._events !== Object.getPrototypeOf(this)._events) ||
              ((this._events = Object.create(null)), (this._eventsCount = 0)),
              (this._maxListeners = this._maxListeners || void 0);
          }),
          (o.prototype.setMaxListeners = function (t) {
            if ("number" != typeof t || t < 0 || i(t))
              throw new RangeError(
                'The value of "n" is out of range. It must be a non-negative number. Received ' +
                  t +
                  "."
              );
            return (this._maxListeners = t), this;
          }),
          (o.prototype.getMaxListeners = function () {
            return u(this);
          }),
          (o.prototype.emit = function (t) {
            for (var e = [], r = 1; r < arguments.length; r++)
              e.push(arguments[r]);
            var i = "error" === t,
              o = this._events;
            if (void 0 !== o) i = i && void 0 === o.error;
            else if (!i) return !1;
            if (i) {
              var s;
              if ((e.length > 0 && (s = e[0]), s instanceof Error)) throw s;
              var a = new Error(
                "Unhandled error." + (s ? " (" + s.message + ")" : "")
              );
              throw ((a.context = s), a);
            }
            var u = o[t];
            if (void 0 === u) return !1;
            if ("function" == typeof u) n(u, this, e);
            else {
              var h = u.length,
                l = p(u, h);
              for (r = 0; r < h; ++r) n(l[r], this, e);
            }
            return !0;
          }),
          (o.prototype.addListener = function (t, e) {
            return h(this, t, e, !1);
          }),
          (o.prototype.on = o.prototype.addListener),
          (o.prototype.prependListener = function (t, e) {
            return h(this, t, e, !0);
          }),
          (o.prototype.once = function (t, e) {
            return a(e), this.on(t, c(this, t, e)), this;
          }),
          (o.prototype.prependOnceListener = function (t, e) {
            return a(e), this.prependListener(t, c(this, t, e)), this;
          }),
          (o.prototype.removeListener = function (t, e) {
            var r, n, i, o, s;
            if ((a(e), void 0 === (n = this._events))) return this;
            if (void 0 === (r = n[t])) return this;
            if (r === e || r.listener === e)
              0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete n[t],
                  n.removeListener &&
                    this.emit("removeListener", t, r.listener || e));
            else if ("function" != typeof r) {
              for (i = -1, o = r.length - 1; o >= 0; o--)
                if (r[o] === e || r[o].listener === e) {
                  (s = r[o].listener), (i = o);
                  break;
                }
              if (i < 0) return this;
              0 === i
                ? r.shift()
                : (function (t, e) {
                    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                    t.pop();
                  })(r, i),
                1 === r.length && (n[t] = r[0]),
                void 0 !== n.removeListener &&
                  this.emit("removeListener", t, s || e);
            }
            return this;
          }),
          (o.prototype.off = o.prototype.removeListener),
          (o.prototype.removeAllListeners = function (t) {
            var e, r, n;
            if (void 0 === (r = this._events)) return this;
            if (void 0 === r.removeListener)
              return (
                0 === arguments.length
                  ? ((this._events = Object.create(null)),
                    (this._eventsCount = 0))
                  : void 0 !== r[t] &&
                    (0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : delete r[t]),
                this
              );
            if (0 === arguments.length) {
              var i,
                o = Object.keys(r);
              for (n = 0; n < o.length; ++n)
                "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
              return (
                this.removeAllListeners("removeListener"),
                (this._events = Object.create(null)),
                (this._eventsCount = 0),
                this
              );
            }
            if ("function" == typeof (e = r[t])) this.removeListener(t, e);
            else if (void 0 !== e)
              for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
            return this;
          }),
          (o.prototype.listeners = function (t) {
            return f(this, t, !0);
          }),
          (o.prototype.rawListeners = function (t) {
            return f(this, t, !1);
          }),
          (o.listenerCount = function (t, e) {
            return "function" == typeof t.listenerCount
              ? t.listenerCount(e)
              : d.call(t, e);
          }),
          (o.prototype.listenerCount = d),
          (o.prototype.eventNames = function () {
            return this._eventsCount > 0 ? e(this._events) : [];
          });
      },
      80645: (t, e) => {
        (e.read = function (t, e, r, n, i) {
          var o,
            s,
            a = 8 * i - n - 1,
            u = (1 << a) - 1,
            h = u >> 1,
            l = -7,
            c = r ? i - 1 : 0,
            f = r ? -1 : 1,
            d = t[e + c];
          for (
            c += f, o = d & ((1 << -l) - 1), d >>= -l, l += a;
            l > 0;
            o = 256 * o + t[e + c], c += f, l -= 8
          );
          for (
            s = o & ((1 << -l) - 1), o >>= -l, l += n;
            l > 0;
            s = 256 * s + t[e + c], c += f, l -= 8
          );
          if (0 === o) o = 1 - h;
          else {
            if (o === u) return s ? NaN : (1 / 0) * (d ? -1 : 1);
            (s += Math.pow(2, n)), (o -= h);
          }
          return (d ? -1 : 1) * s * Math.pow(2, o - n);
        }),
          (e.write = function (t, e, r, n, i, o) {
            var s,
              a,
              u,
              h = 8 * o - i - 1,
              l = (1 << h) - 1,
              c = l >> 1,
              f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              d = n ? 0 : o - 1,
              p = n ? 1 : -1,
              g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
            for (
              e = Math.abs(e),
                isNaN(e) || e === 1 / 0
                  ? ((a = isNaN(e) ? 1 : 0), (s = l))
                  : ((s = Math.floor(Math.log(e) / Math.LN2)),
                    e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                    (e += s + c >= 1 ? f / u : f * Math.pow(2, 1 - c)) * u >=
                      2 && (s++, (u /= 2)),
                    s + c >= l
                      ? ((a = 0), (s = l))
                      : s + c >= 1
                      ? ((a = (e * u - 1) * Math.pow(2, i)), (s += c))
                      : ((a = e * Math.pow(2, c - 1) * Math.pow(2, i)),
                        (s = 0)));
              i >= 8;
              t[r + d] = 255 & a, d += p, a /= 256, i -= 8
            );
            for (
              s = (s << i) | a, h += i;
              h > 0;
              t[r + d] = 255 & s, d += p, s /= 256, h -= 8
            );
            t[r + d - p] |= 128 * g;
          });
      },
      35717: (t) => {
        "function" == typeof Object.create
          ? (t.exports = function (t, e) {
              e &&
                ((t.super_ = e),
                (t.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })));
            })
          : (t.exports = function (t, e) {
              if (e) {
                t.super_ = e;
                var r = function () {};
                (r.prototype = e.prototype),
                  (t.prototype = new r()),
                  (t.prototype.constructor = t);
              }
            });
      },
      34155: (t) => {
        var e,
          r,
          n = (t.exports = {});
        function i() {
          throw new Error("setTimeout has not been defined");
        }
        function o() {
          throw new Error("clearTimeout has not been defined");
        }
        function s(t) {
          if (e === setTimeout) return setTimeout(t, 0);
          if ((e === i || !e) && setTimeout)
            return (e = setTimeout), setTimeout(t, 0);
          try {
            return e(t, 0);
          } catch (r) {
            try {
              return e.call(null, t, 0);
            } catch (r) {
              return e.call(this, t, 0);
            }
          }
        }
        !(function () {
          try {
            e = "function" == typeof setTimeout ? setTimeout : i;
          } catch (t) {
            e = i;
          }
          try {
            r = "function" == typeof clearTimeout ? clearTimeout : o;
          } catch (t) {
            r = o;
          }
        })();
        var a,
          u = [],
          h = !1,
          l = -1;
        function c() {
          h &&
            a &&
            ((h = !1),
            a.length ? (u = a.concat(u)) : (l = -1),
            u.length && f());
        }
        function f() {
          if (!h) {
            var t = s(c);
            h = !0;
            for (var e = u.length; e; ) {
              for (a = u, u = []; ++l < e; ) a && a[l].run();
              (l = -1), (e = u.length);
            }
            (a = null),
              (h = !1),
              (function (t) {
                if (r === clearTimeout) return clearTimeout(t);
                if ((r === o || !r) && clearTimeout)
                  return (r = clearTimeout), clearTimeout(t);
                try {
                  r(t);
                } catch (e) {
                  try {
                    return r.call(null, t);
                  } catch (e) {
                    return r.call(this, t);
                  }
                }
              })(t);
          }
        }
        function d(t, e) {
          (this.fun = t), (this.array = e);
        }
        function p() {}
        (n.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
          u.push(new d(t, e)), 1 !== u.length || h || s(f);
        }),
          (d.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (n.title = "browser"),
          (n.browser = !0),
          (n.env = {}),
          (n.argv = []),
          (n.version = ""),
          (n.versions = {}),
          (n.on = p),
          (n.addListener = p),
          (n.once = p),
          (n.off = p),
          (n.removeListener = p),
          (n.removeAllListeners = p),
          (n.emit = p),
          (n.prependListener = p),
          (n.prependOnceListener = p),
          (n.listeners = function (t) {
            return [];
          }),
          (n.binding = function (t) {
            throw new Error("process.binding is not supported");
          }),
          (n.cwd = function () {
            return "/";
          }),
          (n.chdir = function (t) {
            throw new Error("process.chdir is not supported");
          }),
          (n.umask = function () {
            return 0;
          });
      },
      89509: (t, e, r) => {
        var n = r(48764),
          i = n.Buffer;
        function o(t, e) {
          for (var r in t) e[r] = t[r];
        }
        function s(t, e, r) {
          return i(t, e, r);
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
          ? (t.exports = n)
          : (o(n, e), (e.Buffer = s)),
          (s.prototype = Object.create(i.prototype)),
          o(i, s),
          (s.from = function (t, e, r) {
            if ("number" == typeof t)
              throw new TypeError("Argument must not be a number");
            return i(t, e, r);
          }),
          (s.alloc = function (t, e, r) {
            if ("number" != typeof t)
              throw new TypeError("Argument must be a number");
            var n = i(t);
            return (
              void 0 !== e
                ? "string" == typeof r
                  ? n.fill(e, r)
                  : n.fill(e)
                : n.fill(0),
              n
            );
          }),
          (s.allocUnsafe = function (t) {
            if ("number" != typeof t)
              throw new TypeError("Argument must be a number");
            return i(t);
          }),
          (s.allocUnsafeSlow = function (t) {
            if ("number" != typeof t)
              throw new TypeError("Argument must be a number");
            return n.SlowBuffer(t);
          });
      },
      42830: (t, e, r) => {
        t.exports = i;
        var n = r(17187).EventEmitter;
        function i() {
          n.call(this);
        }
        r(35717)(i, n),
          (i.Readable = r(56577)),
          (i.Writable = r(20323)),
          (i.Duplex = r(68656)),
          (i.Transform = r(94473)),
          (i.PassThrough = r(2366)),
          (i.finished = r(81086)),
          (i.pipeline = r(56472)),
          (i.Stream = i),
          (i.prototype.pipe = function (t, e) {
            var r = this;
            function i(e) {
              t.writable && !1 === t.write(e) && r.pause && r.pause();
            }
            function o() {
              r.readable && r.resume && r.resume();
            }
            r.on("data", i),
              t.on("drain", o),
              t._isStdio ||
                (e && !1 === e.end) ||
                (r.on("end", a), r.on("close", u));
            var s = !1;
            function a() {
              s || ((s = !0), t.end());
            }
            function u() {
              s || ((s = !0), "function" == typeof t.destroy && t.destroy());
            }
            function h(t) {
              if ((l(), 0 === n.listenerCount(this, "error"))) throw t;
            }
            function l() {
              r.removeListener("data", i),
                t.removeListener("drain", o),
                r.removeListener("end", a),
                r.removeListener("close", u),
                r.removeListener("error", h),
                t.removeListener("error", h),
                r.removeListener("end", l),
                r.removeListener("close", l),
                t.removeListener("close", l);
            }
            return (
              r.on("error", h),
              t.on("error", h),
              r.on("end", l),
              r.on("close", l),
              t.on("close", l),
              t.emit("pipe", r),
              t
            );
          });
      },
      58106: (t) => {
        "use strict";
        var e = {};
        function r(t, r, n) {
          n || (n = Error);
          var i = (function (t) {
            var e, n;
            function i(e, n, i) {
              return (
                t.call(
                  this,
                  (function (t, e, n) {
                    return "string" == typeof r ? r : r(t, e, n);
                  })(e, n, i)
                ) || this
              );
            }
            return (
              (n = t),
              ((e = i).prototype = Object.create(n.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = n),
              i
            );
          })(n);
          (i.prototype.name = n.name), (i.prototype.code = t), (e[t] = i);
        }
        function n(t, e) {
          if (Array.isArray(t)) {
            var r = t.length;
            return (
              (t = t.map(function (t) {
                return String(t);
              })),
              r > 2
                ? "one of "
                    .concat(e, " ")
                    .concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1]
                : 2 === r
                ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
                : "of ".concat(e, " ").concat(t[0])
            );
          }
          return "of ".concat(e, " ").concat(String(t));
        }
        r(
          "ERR_INVALID_OPT_VALUE",
          function (t, e) {
            return 'The value "' + e + '" is invalid for option "' + t + '"';
          },
          TypeError
        ),
          r(
            "ERR_INVALID_ARG_TYPE",
            function (t, e, r) {
              var i, o, s, a;
              if (
                ("string" == typeof e &&
                ((o = "not "), e.substr(!s || s < 0 ? 0 : +s, o.length) === o)
                  ? ((i = "must not be"), (e = e.replace(/^not /, "")))
                  : (i = "must be"),
                (function (t, e, r) {
                  return (
                    (void 0 === r || r > t.length) && (r = t.length),
                    t.substring(r - e.length, r) === e
                  );
                })(t, " argument"))
              )
                a = "The ".concat(t, " ").concat(i, " ").concat(n(e, "type"));
              else {
                var u = (function (t, e, r) {
                  return (
                    "number" != typeof r && (r = 0),
                    !(r + e.length > t.length) && -1 !== t.indexOf(e, r)
                  );
                })(t, ".")
                  ? "property"
                  : "argument";
                a = 'The "'
                  .concat(t, '" ')
                  .concat(u, " ")
                  .concat(i, " ")
                  .concat(n(e, "type"));
              }
              return (a += ". Received type ".concat(typeof r));
            },
            TypeError
          ),
          r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
          r("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
            return "The " + t + " method is not implemented";
          }),
          r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
          r("ERR_STREAM_DESTROYED", function (t) {
            return "Cannot call " + t + " after a stream was destroyed";
          }),
          r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
          r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
          r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
          r(
            "ERR_STREAM_NULL_VALUES",
            "May not write null values to stream",
            TypeError
          ),
          r(
            "ERR_UNKNOWN_ENCODING",
            function (t) {
              return "Unknown encoding: " + t;
            },
            TypeError
          ),
          r(
            "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
            "stream.unshift() after end event"
          ),
          (t.exports.q = e);
      },
      68656: (t, e, r) => {
        "use strict";
        var n = r(34155),
          i =
            Object.keys ||
            function (t) {
              var e = [];
              for (var r in t) e.push(r);
              return e;
            };
        t.exports = l;
        var o = r(56577),
          s = r(20323);
        r(35717)(l, o);
        for (var a = i(s.prototype), u = 0; u < a.length; u++) {
          var h = a[u];
          l.prototype[h] || (l.prototype[h] = s.prototype[h]);
        }
        function l(t) {
          if (!(this instanceof l)) return new l(t);
          o.call(this, t),
            s.call(this, t),
            (this.allowHalfOpen = !0),
            t &&
              (!1 === t.readable && (this.readable = !1),
              !1 === t.writable && (this.writable = !1),
              !1 === t.allowHalfOpen &&
                ((this.allowHalfOpen = !1), this.once("end", c)));
        }
        function c() {
          this._writableState.ended || n.nextTick(f, this);
        }
        function f(t) {
          t.end();
        }
        Object.defineProperty(l.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
          Object.defineProperty(l.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(l.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(l.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                this._readableState.destroyed &&
                this._writableState.destroyed
              );
            },
            set: function (t) {
              void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                ((this._readableState.destroyed = t),
                (this._writableState.destroyed = t));
            },
          });
      },
      2366: (t, e, r) => {
        "use strict";
        t.exports = i;
        var n = r(94473);
        function i(t) {
          if (!(this instanceof i)) return new i(t);
          n.call(this, t);
        }
        r(35717)(i, n),
          (i.prototype._transform = function (t, e, r) {
            r(null, t);
          });
      },
      56577: (t, e, r) => {
        "use strict";
        var n,
          i = r(34155);
        (t.exports = R), (R.ReadableState = S);
        r(17187).EventEmitter;
        var o = function (t, e) {
            return t.listeners(e).length;
          },
          s = r(83194),
          a = r(48764).Buffer,
          u = r.g.Uint8Array || function () {};
        var h,
          l = r(40964);
        h = l && l.debuglog ? l.debuglog("stream") : function () {};
        var c,
          f,
          d,
          p = r(39686),
          g = r(71029),
          m = r(30094).getHighWaterMark,
          y = r(58106).q,
          v = y.ERR_INVALID_ARG_TYPE,
          w = y.ERR_STREAM_PUSH_AFTER_EOF,
          b = y.ERR_METHOD_NOT_IMPLEMENTED,
          _ = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        r(35717)(R, s);
        var E = g.errorOrDestroy,
          M = ["error", "close", "destroy", "pause", "resume"];
        function S(t, e, i) {
          (n = n || r(68656)),
            (t = t || {}),
            "boolean" != typeof i && (i = e instanceof n),
            (this.objectMode = !!t.objectMode),
            i && (this.objectMode = this.objectMode || !!t.readableObjectMode),
            (this.highWaterMark = m(this, t, "readableHighWaterMark", i)),
            (this.buffer = new p()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.paused = !0),
            (this.emitClose = !1 !== t.emitClose),
            (this.autoDestroy = !!t.autoDestroy),
            (this.destroyed = !1),
            (this.defaultEncoding = t.defaultEncoding || "utf8"),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            t.encoding &&
              (c || (c = r(54729).s),
              (this.decoder = new c(t.encoding)),
              (this.encoding = t.encoding));
        }
        function R(t) {
          if (((n = n || r(68656)), !(this instanceof R))) return new R(t);
          var e = this instanceof n;
          (this._readableState = new S(t, this, e)),
            (this.readable = !0),
            t &&
              ("function" == typeof t.read && (this._read = t.read),
              "function" == typeof t.destroy && (this._destroy = t.destroy)),
            s.call(this);
        }
        function T(t, e, r, n, i) {
          h("readableAddChunk", e);
          var o,
            s = t._readableState;
          if (null === e)
            (s.reading = !1),
              (function (t, e) {
                if ((h("onEofChunk"), e.ended)) return;
                if (e.decoder) {
                  var r = e.decoder.end();
                  r &&
                    r.length &&
                    (e.buffer.push(r),
                    (e.length += e.objectMode ? 1 : r.length));
                }
                (e.ended = !0),
                  e.sync
                    ? N(t)
                    : ((e.needReadable = !1),
                      e.emittedReadable || ((e.emittedReadable = !0), k(t)));
              })(t, s);
          else if (
            (i ||
              (o = (function (t, e) {
                var r;
                (n = e),
                  a.isBuffer(n) ||
                    n instanceof u ||
                    "string" == typeof e ||
                    void 0 === e ||
                    t.objectMode ||
                    (r = new v("chunk", ["string", "Buffer", "Uint8Array"], e));
                var n;
                return r;
              })(s, e)),
            o)
          )
            E(t, o);
          else if (s.objectMode || (e && e.length > 0))
            if (
              ("string" == typeof e ||
                s.objectMode ||
                Object.getPrototypeOf(e) === a.prototype ||
                (e = (function (t) {
                  return a.from(t);
                })(e)),
              n)
            )
              s.endEmitted ? E(t, new _()) : A(t, s, e, !0);
            else if (s.ended) E(t, new w());
            else {
              if (s.destroyed) return !1;
              (s.reading = !1),
                s.decoder && !r
                  ? ((e = s.decoder.write(e)),
                    s.objectMode || 0 !== e.length ? A(t, s, e, !1) : I(t, s))
                  : A(t, s, e, !1);
            }
          else n || ((s.reading = !1), I(t, s));
          return !s.ended && (s.length < s.highWaterMark || 0 === s.length);
        }
        function A(t, e, r, n) {
          e.flowing && 0 === e.length && !e.sync
            ? ((e.awaitDrain = 0), t.emit("data", r))
            : ((e.length += e.objectMode ? 1 : r.length),
              n ? e.buffer.unshift(r) : e.buffer.push(r),
              e.needReadable && N(t)),
            I(t, e);
        }
        Object.defineProperty(R.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function (t) {
            this._readableState && (this._readableState.destroyed = t);
          },
        }),
          (R.prototype.destroy = g.destroy),
          (R.prototype._undestroy = g.undestroy),
          (R.prototype._destroy = function (t, e) {
            e(t);
          }),
          (R.prototype.push = function (t, e) {
            var r,
              n = this._readableState;
            return (
              n.objectMode
                ? (r = !0)
                : "string" == typeof t &&
                  ((e = e || n.defaultEncoding) !== n.encoding &&
                    ((t = a.from(t, e)), (e = "")),
                  (r = !0)),
              T(this, t, e, !1, r)
            );
          }),
          (R.prototype.unshift = function (t) {
            return T(this, t, null, !0, !1);
          }),
          (R.prototype.isPaused = function () {
            return !1 === this._readableState.flowing;
          }),
          (R.prototype.setEncoding = function (t) {
            c || (c = r(54729).s);
            var e = new c(t);
            (this._readableState.decoder = e),
              (this._readableState.encoding =
                this._readableState.decoder.encoding);
            for (var n = this._readableState.buffer.head, i = ""; null !== n; )
              (i += e.write(n.data)), (n = n.next);
            return (
              this._readableState.buffer.clear(),
              "" !== i && this._readableState.buffer.push(i),
              (this._readableState.length = i.length),
              this
            );
          });
        var O = 1073741824;
        function P(t, e) {
          return t <= 0 || (0 === e.length && e.ended)
            ? 0
            : e.objectMode
            ? 1
            : t != t
            ? e.flowing && e.length
              ? e.buffer.head.data.length
              : e.length
            : (t > e.highWaterMark &&
                (e.highWaterMark = (function (t) {
                  return (
                    t >= O
                      ? (t = O)
                      : (t--,
                        (t |= t >>> 1),
                        (t |= t >>> 2),
                        (t |= t >>> 4),
                        (t |= t >>> 8),
                        (t |= t >>> 16),
                        t++),
                    t
                  );
                })(t)),
              t <= e.length
                ? t
                : e.ended
                ? e.length
                : ((e.needReadable = !0), 0));
        }
        function N(t) {
          var e = t._readableState;
          h("emitReadable", e.needReadable, e.emittedReadable),
            (e.needReadable = !1),
            e.emittedReadable ||
              (h("emitReadable", e.flowing),
              (e.emittedReadable = !0),
              i.nextTick(k, t));
        }
        function k(t) {
          var e = t._readableState;
          h("emitReadable_", e.destroyed, e.length, e.ended),
            e.destroyed ||
              (!e.length && !e.ended) ||
              (t.emit("readable"), (e.emittedReadable = !1)),
            (e.needReadable =
              !e.flowing && !e.ended && e.length <= e.highWaterMark),
            j(t);
        }
        function I(t, e) {
          e.readingMore || ((e.readingMore = !0), i.nextTick(B, t, e));
        }
        function B(t, e) {
          for (
            ;
            !e.reading &&
            !e.ended &&
            (e.length < e.highWaterMark || (e.flowing && 0 === e.length));

          ) {
            var r = e.length;
            if ((h("maybeReadMore read 0"), t.read(0), r === e.length)) break;
          }
          e.readingMore = !1;
        }
        function x(t) {
          var e = t._readableState;
          (e.readableListening = t.listenerCount("readable") > 0),
            e.resumeScheduled && !e.paused
              ? (e.flowing = !0)
              : t.listenerCount("data") > 0 && t.resume();
        }
        function C(t) {
          h("readable nexttick read 0"), t.read(0);
        }
        function L(t, e) {
          h("resume", e.reading),
            e.reading || t.read(0),
            (e.resumeScheduled = !1),
            t.emit("resume"),
            j(t),
            e.flowing && !e.reading && t.read(0);
        }
        function j(t) {
          var e = t._readableState;
          for (h("flow", e.flowing); e.flowing && null !== t.read(); );
        }
        function F(t, e) {
          return 0 === e.length
            ? null
            : (e.objectMode
                ? (r = e.buffer.shift())
                : !t || t >= e.length
                ? ((r = e.decoder
                    ? e.buffer.join("")
                    : 1 === e.buffer.length
                    ? e.buffer.first()
                    : e.buffer.concat(e.length)),
                  e.buffer.clear())
                : (r = e.buffer.consume(t, e.decoder)),
              r);
          var r;
        }
        function U(t) {
          var e = t._readableState;
          h("endReadable", e.endEmitted),
            e.endEmitted || ((e.ended = !0), i.nextTick(q, e, t));
        }
        function q(t, e) {
          if (
            (h("endReadableNT", t.endEmitted, t.length),
            !t.endEmitted &&
              0 === t.length &&
              ((t.endEmitted = !0),
              (e.readable = !1),
              e.emit("end"),
              t.autoDestroy))
          ) {
            var r = e._writableState;
            (!r || (r.autoDestroy && r.finished)) && e.destroy();
          }
        }
        function D(t, e) {
          for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
          return -1;
        }
        (R.prototype.read = function (t) {
          h("read", t), (t = parseInt(t, 10));
          var e = this._readableState,
            r = t;
          if (
            (0 !== t && (e.emittedReadable = !1),
            0 === t &&
              e.needReadable &&
              ((0 !== e.highWaterMark
                ? e.length >= e.highWaterMark
                : e.length > 0) ||
                e.ended))
          )
            return (
              h("read: emitReadable", e.length, e.ended),
              0 === e.length && e.ended ? U(this) : N(this),
              null
            );
          if (0 === (t = P(t, e)) && e.ended)
            return 0 === e.length && U(this), null;
          var n,
            i = e.needReadable;
          return (
            h("need readable", i),
            (0 === e.length || e.length - t < e.highWaterMark) &&
              h("length less than watermark", (i = !0)),
            e.ended || e.reading
              ? h("reading or ended", (i = !1))
              : i &&
                (h("do read"),
                (e.reading = !0),
                (e.sync = !0),
                0 === e.length && (e.needReadable = !0),
                this._read(e.highWaterMark),
                (e.sync = !1),
                e.reading || (t = P(r, e))),
            null === (n = t > 0 ? F(t, e) : null)
              ? ((e.needReadable = e.length <= e.highWaterMark), (t = 0))
              : ((e.length -= t), (e.awaitDrain = 0)),
            0 === e.length &&
              (e.ended || (e.needReadable = !0), r !== t && e.ended && U(this)),
            null !== n && this.emit("data", n),
            n
          );
        }),
          (R.prototype._read = function (t) {
            E(this, new b("_read()"));
          }),
          (R.prototype.pipe = function (t, e) {
            var r = this,
              n = this._readableState;
            switch (n.pipesCount) {
              case 0:
                n.pipes = t;
                break;
              case 1:
                n.pipes = [n.pipes, t];
                break;
              default:
                n.pipes.push(t);
            }
            (n.pipesCount += 1), h("pipe count=%d opts=%j", n.pipesCount, e);
            var s =
              (!e || !1 !== e.end) && t !== i.stdout && t !== i.stderr ? u : m;
            function a(e, i) {
              h("onunpipe"),
                e === r &&
                  i &&
                  !1 === i.hasUnpiped &&
                  ((i.hasUnpiped = !0),
                  h("cleanup"),
                  t.removeListener("close", p),
                  t.removeListener("finish", g),
                  t.removeListener("drain", l),
                  t.removeListener("error", d),
                  t.removeListener("unpipe", a),
                  r.removeListener("end", u),
                  r.removeListener("end", m),
                  r.removeListener("data", f),
                  (c = !0),
                  !n.awaitDrain ||
                    (t._writableState && !t._writableState.needDrain) ||
                    l());
            }
            function u() {
              h("onend"), t.end();
            }
            n.endEmitted ? i.nextTick(s) : r.once("end", s), t.on("unpipe", a);
            var l = (function (t) {
              return function () {
                var e = t._readableState;
                h("pipeOnDrain", e.awaitDrain),
                  e.awaitDrain && e.awaitDrain--,
                  0 === e.awaitDrain &&
                    o(t, "data") &&
                    ((e.flowing = !0), j(t));
              };
            })(r);
            t.on("drain", l);
            var c = !1;
            function f(e) {
              h("ondata");
              var i = t.write(e);
              h("dest.write", i),
                !1 === i &&
                  (((1 === n.pipesCount && n.pipes === t) ||
                    (n.pipesCount > 1 && -1 !== D(n.pipes, t))) &&
                    !c &&
                    (h("false write response, pause", n.awaitDrain),
                    n.awaitDrain++),
                  r.pause());
            }
            function d(e) {
              h("onerror", e),
                m(),
                t.removeListener("error", d),
                0 === o(t, "error") && E(t, e);
            }
            function p() {
              t.removeListener("finish", g), m();
            }
            function g() {
              h("onfinish"), t.removeListener("close", p), m();
            }
            function m() {
              h("unpipe"), r.unpipe(t);
            }
            return (
              r.on("data", f),
              (function (t, e, r) {
                if ("function" == typeof t.prependListener)
                  return t.prependListener(e, r);
                t._events && t._events[e]
                  ? Array.isArray(t._events[e])
                    ? t._events[e].unshift(r)
                    : (t._events[e] = [r, t._events[e]])
                  : t.on(e, r);
              })(t, "error", d),
              t.once("close", p),
              t.once("finish", g),
              t.emit("pipe", r),
              n.flowing || (h("pipe resume"), r.resume()),
              t
            );
          }),
          (R.prototype.unpipe = function (t) {
            var e = this._readableState,
              r = { hasUnpiped: !1 };
            if (0 === e.pipesCount) return this;
            if (1 === e.pipesCount)
              return (
                (t && t !== e.pipes) ||
                  (t || (t = e.pipes),
                  (e.pipes = null),
                  (e.pipesCount = 0),
                  (e.flowing = !1),
                  t && t.emit("unpipe", this, r)),
                this
              );
            if (!t) {
              var n = e.pipes,
                i = e.pipesCount;
              (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
              for (var o = 0; o < i; o++)
                n[o].emit("unpipe", this, { hasUnpiped: !1 });
              return this;
            }
            var s = D(e.pipes, t);
            return (
              -1 === s ||
                (e.pipes.splice(s, 1),
                (e.pipesCount -= 1),
                1 === e.pipesCount && (e.pipes = e.pipes[0]),
                t.emit("unpipe", this, r)),
              this
            );
          }),
          (R.prototype.on = function (t, e) {
            var r = s.prototype.on.call(this, t, e),
              n = this._readableState;
            return (
              "data" === t
                ? ((n.readableListening = this.listenerCount("readable") > 0),
                  !1 !== n.flowing && this.resume())
                : "readable" === t &&
                  (n.endEmitted ||
                    n.readableListening ||
                    ((n.readableListening = n.needReadable = !0),
                    (n.flowing = !1),
                    (n.emittedReadable = !1),
                    h("on readable", n.length, n.reading),
                    n.length ? N(this) : n.reading || i.nextTick(C, this))),
              r
            );
          }),
          (R.prototype.addListener = R.prototype.on),
          (R.prototype.removeListener = function (t, e) {
            var r = s.prototype.removeListener.call(this, t, e);
            return "readable" === t && i.nextTick(x, this), r;
          }),
          (R.prototype.removeAllListeners = function (t) {
            var e = s.prototype.removeAllListeners.apply(this, arguments);
            return ("readable" !== t && void 0 !== t) || i.nextTick(x, this), e;
          }),
          (R.prototype.resume = function () {
            var t = this._readableState;
            return (
              t.flowing ||
                (h("resume"),
                (t.flowing = !t.readableListening),
                (function (t, e) {
                  e.resumeScheduled ||
                    ((e.resumeScheduled = !0), i.nextTick(L, t, e));
                })(this, t)),
              (t.paused = !1),
              this
            );
          }),
          (R.prototype.pause = function () {
            return (
              h("call pause flowing=%j", this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (h("pause"),
                (this._readableState.flowing = !1),
                this.emit("pause")),
              (this._readableState.paused = !0),
              this
            );
          }),
          (R.prototype.wrap = function (t) {
            var e = this,
              r = this._readableState,
              n = !1;
            for (var i in (t.on("end", function () {
              if ((h("wrapped end"), r.decoder && !r.ended)) {
                var t = r.decoder.end();
                t && t.length && e.push(t);
              }
              e.push(null);
            }),
            t.on("data", function (i) {
              (h("wrapped data"),
              r.decoder && (i = r.decoder.write(i)),
              r.objectMode && null == i) ||
                ((r.objectMode || (i && i.length)) &&
                  (e.push(i) || ((n = !0), t.pause())));
            }),
            t))
              void 0 === this[i] &&
                "function" == typeof t[i] &&
                (this[i] = (function (e) {
                  return function () {
                    return t[e].apply(t, arguments);
                  };
                })(i));
            for (var o = 0; o < M.length; o++)
              t.on(M[o], this.emit.bind(this, M[o]));
            return (
              (this._read = function (e) {
                h("wrapped _read", e), n && ((n = !1), t.resume());
              }),
              this
            );
          }),
          "function" == typeof Symbol &&
            (R.prototype[Symbol.asyncIterator] = function () {
              return void 0 === f && (f = r(20828)), f(this);
            }),
          Object.defineProperty(R.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._readableState.highWaterMark;
            },
          }),
          Object.defineProperty(R.prototype, "readableBuffer", {
            enumerable: !1,
            get: function () {
              return this._readableState && this._readableState.buffer;
            },
          }),
          Object.defineProperty(R.prototype, "readableFlowing", {
            enumerable: !1,
            get: function () {
              return this._readableState.flowing;
            },
            set: function (t) {
              this._readableState && (this._readableState.flowing = t);
            },
          }),
          (R._fromList = F),
          Object.defineProperty(R.prototype, "readableLength", {
            enumerable: !1,
            get: function () {
              return this._readableState.length;
            },
          }),
          "function" == typeof Symbol &&
            (R.from = function (t, e) {
              return void 0 === d && (d = r(31265)), d(R, t, e);
            });
      },
      94473: (t, e, r) => {
        "use strict";
        t.exports = l;
        var n = r(58106).q,
          i = n.ERR_METHOD_NOT_IMPLEMENTED,
          o = n.ERR_MULTIPLE_CALLBACK,
          s = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
          a = n.ERR_TRANSFORM_WITH_LENGTH_0,
          u = r(68656);
        function h(t, e) {
          var r = this._transformState;
          r.transforming = !1;
          var n = r.writecb;
          if (null === n) return this.emit("error", new o());
          (r.writechunk = null),
            (r.writecb = null),
            null != e && this.push(e),
            n(t);
          var i = this._readableState;
          (i.reading = !1),
            (i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
        }
        function l(t) {
          if (!(this instanceof l)) return new l(t);
          u.call(this, t),
            (this._transformState = {
              afterTransform: h.bind(this),
              needTransform: !1,
              transforming: !1,
              writecb: null,
              writechunk: null,
              writeencoding: null,
            }),
            (this._readableState.needReadable = !0),
            (this._readableState.sync = !1),
            t &&
              ("function" == typeof t.transform &&
                (this._transform = t.transform),
              "function" == typeof t.flush && (this._flush = t.flush)),
            this.on("prefinish", c);
        }
        function c() {
          var t = this;
          "function" != typeof this._flush || this._readableState.destroyed
            ? f(this, null, null)
            : this._flush(function (e, r) {
                f(t, e, r);
              });
        }
        function f(t, e, r) {
          if (e) return t.emit("error", e);
          if ((null != r && t.push(r), t._writableState.length)) throw new a();
          if (t._transformState.transforming) throw new s();
          return t.push(null);
        }
        r(35717)(l, u),
          (l.prototype.push = function (t, e) {
            return (
              (this._transformState.needTransform = !1),
              u.prototype.push.call(this, t, e)
            );
          }),
          (l.prototype._transform = function (t, e, r) {
            r(new i("_transform()"));
          }),
          (l.prototype._write = function (t, e, r) {
            var n = this._transformState;
            if (
              ((n.writecb = r),
              (n.writechunk = t),
              (n.writeencoding = e),
              !n.transforming)
            ) {
              var i = this._readableState;
              (n.needTransform ||
                i.needReadable ||
                i.length < i.highWaterMark) &&
                this._read(i.highWaterMark);
            }
          }),
          (l.prototype._read = function (t) {
            var e = this._transformState;
            null === e.writechunk || e.transforming
              ? (e.needTransform = !0)
              : ((e.transforming = !0),
                this._transform(
                  e.writechunk,
                  e.writeencoding,
                  e.afterTransform
                ));
          }),
          (l.prototype._destroy = function (t, e) {
            u.prototype._destroy.call(this, t, function (t) {
              e(t);
            });
          });
      },
      20323: (t, e, r) => {
        "use strict";
        var n,
          i = r(34155);
        function o(t) {
          var e = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function () {
              !(function (t, e, r) {
                var n = t.entry;
                t.entry = null;
                for (; n; ) {
                  var i = n.callback;
                  e.pendingcb--, i(r), (n = n.next);
                }
                e.corkedRequestsFree.next = t;
              })(e, t);
            });
        }
        (t.exports = R), (R.WritableState = S);
        var s = { deprecate: r(94927) },
          a = r(83194),
          u = r(48764).Buffer,
          h = r.g.Uint8Array || function () {};
        var l,
          c = r(71029),
          f = r(30094).getHighWaterMark,
          d = r(58106).q,
          p = d.ERR_INVALID_ARG_TYPE,
          g = d.ERR_METHOD_NOT_IMPLEMENTED,
          m = d.ERR_MULTIPLE_CALLBACK,
          y = d.ERR_STREAM_CANNOT_PIPE,
          v = d.ERR_STREAM_DESTROYED,
          w = d.ERR_STREAM_NULL_VALUES,
          b = d.ERR_STREAM_WRITE_AFTER_END,
          _ = d.ERR_UNKNOWN_ENCODING,
          E = c.errorOrDestroy;
        function M() {}
        function S(t, e, s) {
          (n = n || r(68656)),
            (t = t || {}),
            "boolean" != typeof s && (s = e instanceof n),
            (this.objectMode = !!t.objectMode),
            s && (this.objectMode = this.objectMode || !!t.writableObjectMode),
            (this.highWaterMark = f(this, t, "writableHighWaterMark", s)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var a = !1 === t.decodeStrings;
          (this.decodeStrings = !a),
            (this.defaultEncoding = t.defaultEncoding || "utf8"),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function (t) {
              !(function (t, e) {
                var r = t._writableState,
                  n = r.sync,
                  o = r.writecb;
                if ("function" != typeof o) throw new m();
                if (
                  ((function (t) {
                    (t.writing = !1),
                      (t.writecb = null),
                      (t.length -= t.writelen),
                      (t.writelen = 0);
                  })(r),
                  e)
                )
                  !(function (t, e, r, n, o) {
                    --e.pendingcb,
                      r
                        ? (i.nextTick(o, n),
                          i.nextTick(k, t, e),
                          (t._writableState.errorEmitted = !0),
                          E(t, n))
                        : (o(n),
                          (t._writableState.errorEmitted = !0),
                          E(t, n),
                          k(t, e));
                  })(t, r, n, e, o);
                else {
                  var s = P(r) || t.destroyed;
                  s ||
                    r.corked ||
                    r.bufferProcessing ||
                    !r.bufferedRequest ||
                    O(t, r),
                    n ? i.nextTick(A, t, r, s, o) : A(t, r, s, o);
                }
              })(e, t);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.emitClose = !1 !== t.emitClose),
            (this.autoDestroy = !!t.autoDestroy),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new o(this));
        }
        function R(t) {
          var e = this instanceof (n = n || r(68656));
          if (!e && !l.call(R, this)) return new R(t);
          (this._writableState = new S(t, this, e)),
            (this.writable = !0),
            t &&
              ("function" == typeof t.write && (this._write = t.write),
              "function" == typeof t.writev && (this._writev = t.writev),
              "function" == typeof t.destroy && (this._destroy = t.destroy),
              "function" == typeof t.final && (this._final = t.final)),
            a.call(this);
        }
        function T(t, e, r, n, i, o, s) {
          (e.writelen = n),
            (e.writecb = s),
            (e.writing = !0),
            (e.sync = !0),
            e.destroyed
              ? e.onwrite(new v("write"))
              : r
              ? t._writev(i, e.onwrite)
              : t._write(i, o, e.onwrite),
            (e.sync = !1);
        }
        function A(t, e, r, n) {
          r ||
            (function (t, e) {
              0 === e.length &&
                e.needDrain &&
                ((e.needDrain = !1), t.emit("drain"));
            })(t, e),
            e.pendingcb--,
            n(),
            k(t, e);
        }
        function O(t, e) {
          e.bufferProcessing = !0;
          var r = e.bufferedRequest;
          if (t._writev && r && r.next) {
            var n = e.bufferedRequestCount,
              i = new Array(n),
              s = e.corkedRequestsFree;
            s.entry = r;
            for (var a = 0, u = !0; r; )
              (i[a] = r), r.isBuf || (u = !1), (r = r.next), (a += 1);
            (i.allBuffers = u),
              T(t, e, !0, e.length, i, "", s.finish),
              e.pendingcb++,
              (e.lastBufferedRequest = null),
              s.next
                ? ((e.corkedRequestsFree = s.next), (s.next = null))
                : (e.corkedRequestsFree = new o(e)),
              (e.bufferedRequestCount = 0);
          } else {
            for (; r; ) {
              var h = r.chunk,
                l = r.encoding,
                c = r.callback;
              if (
                (T(t, e, !1, e.objectMode ? 1 : h.length, h, l, c),
                (r = r.next),
                e.bufferedRequestCount--,
                e.writing)
              )
                break;
            }
            null === r && (e.lastBufferedRequest = null);
          }
          (e.bufferedRequest = r), (e.bufferProcessing = !1);
        }
        function P(t) {
          return (
            t.ending &&
            0 === t.length &&
            null === t.bufferedRequest &&
            !t.finished &&
            !t.writing
          );
        }
        function N(t, e) {
          t._final(function (r) {
            e.pendingcb--,
              r && E(t, r),
              (e.prefinished = !0),
              t.emit("prefinish"),
              k(t, e);
          });
        }
        function k(t, e) {
          var r = P(e);
          if (
            r &&
            ((function (t, e) {
              e.prefinished ||
                e.finalCalled ||
                ("function" != typeof t._final || e.destroyed
                  ? ((e.prefinished = !0), t.emit("prefinish"))
                  : (e.pendingcb++, (e.finalCalled = !0), i.nextTick(N, t, e)));
            })(t, e),
            0 === e.pendingcb &&
              ((e.finished = !0), t.emit("finish"), e.autoDestroy))
          ) {
            var n = t._readableState;
            (!n || (n.autoDestroy && n.endEmitted)) && t.destroy();
          }
          return r;
        }
        r(35717)(R, a),
          (S.prototype.getBuffer = function () {
            for (var t = this.bufferedRequest, e = []; t; )
              e.push(t), (t = t.next);
            return e;
          }),
          (function () {
            try {
              Object.defineProperty(S.prototype, "buffer", {
                get: s.deprecate(
                  function () {
                    return this.getBuffer();
                  },
                  "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                  "DEP0003"
                ),
              });
            } catch (t) {}
          })(),
          "function" == typeof Symbol &&
          Symbol.hasInstance &&
          "function" == typeof Function.prototype[Symbol.hasInstance]
            ? ((l = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(R, Symbol.hasInstance, {
                value: function (t) {
                  return (
                    !!l.call(this, t) ||
                    (this === R && t && t._writableState instanceof S)
                  );
                },
              }))
            : (l = function (t) {
                return t instanceof this;
              }),
          (R.prototype.pipe = function () {
            E(this, new y());
          }),
          (R.prototype.write = function (t, e, r) {
            var n,
              o = this._writableState,
              s = !1,
              a = !o.objectMode && ((n = t), u.isBuffer(n) || n instanceof h);
            return (
              a &&
                !u.isBuffer(t) &&
                (t = (function (t) {
                  return u.from(t);
                })(t)),
              "function" == typeof e && ((r = e), (e = null)),
              a ? (e = "buffer") : e || (e = o.defaultEncoding),
              "function" != typeof r && (r = M),
              o.ending
                ? (function (t, e) {
                    var r = new b();
                    E(t, r), i.nextTick(e, r);
                  })(this, r)
                : (a ||
                    (function (t, e, r, n) {
                      var o;
                      return (
                        null === r
                          ? (o = new w())
                          : "string" == typeof r ||
                            e.objectMode ||
                            (o = new p("chunk", ["string", "Buffer"], r)),
                        !o || (E(t, o), i.nextTick(n, o), !1)
                      );
                    })(this, o, t, r)) &&
                  (o.pendingcb++,
                  (s = (function (t, e, r, n, i, o) {
                    if (!r) {
                      var s = (function (t, e, r) {
                        t.objectMode ||
                          !1 === t.decodeStrings ||
                          "string" != typeof e ||
                          (e = u.from(e, r));
                        return e;
                      })(e, n, i);
                      n !== s && ((r = !0), (i = "buffer"), (n = s));
                    }
                    var a = e.objectMode ? 1 : n.length;
                    e.length += a;
                    var h = e.length < e.highWaterMark;
                    h || (e.needDrain = !0);
                    if (e.writing || e.corked) {
                      var l = e.lastBufferedRequest;
                      (e.lastBufferedRequest = {
                        chunk: n,
                        encoding: i,
                        isBuf: r,
                        callback: o,
                        next: null,
                      }),
                        l
                          ? (l.next = e.lastBufferedRequest)
                          : (e.bufferedRequest = e.lastBufferedRequest),
                        (e.bufferedRequestCount += 1);
                    } else T(t, e, !1, a, n, i, o);
                    return h;
                  })(this, o, a, t, e, r))),
              s
            );
          }),
          (R.prototype.cork = function () {
            this._writableState.corked++;
          }),
          (R.prototype.uncork = function () {
            var t = this._writableState;
            t.corked &&
              (t.corked--,
              t.writing ||
                t.corked ||
                t.bufferProcessing ||
                !t.bufferedRequest ||
                O(this, t));
          }),
          (R.prototype.setDefaultEncoding = function (t) {
            if (
              ("string" == typeof t && (t = t.toLowerCase()),
              !(
                [
                  "hex",
                  "utf8",
                  "utf-8",
                  "ascii",
                  "binary",
                  "base64",
                  "ucs2",
                  "ucs-2",
                  "utf16le",
                  "utf-16le",
                  "raw",
                ].indexOf((t + "").toLowerCase()) > -1
              ))
            )
              throw new _(t);
            return (this._writableState.defaultEncoding = t), this;
          }),
          Object.defineProperty(R.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(R.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
          (R.prototype._write = function (t, e, r) {
            r(new g("_write()"));
          }),
          (R.prototype._writev = null),
          (R.prototype.end = function (t, e, r) {
            var n = this._writableState;
            return (
              "function" == typeof t
                ? ((r = t), (t = null), (e = null))
                : "function" == typeof e && ((r = e), (e = null)),
              null != t && this.write(t, e),
              n.corked && ((n.corked = 1), this.uncork()),
              n.ending ||
                (function (t, e, r) {
                  (e.ending = !0),
                    k(t, e),
                    r && (e.finished ? i.nextTick(r) : t.once("finish", r));
                  (e.ended = !0), (t.writable = !1);
                })(this, n, r),
              this
            );
          }),
          Object.defineProperty(R.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(R.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function (t) {
              this._writableState && (this._writableState.destroyed = t);
            },
          }),
          (R.prototype.destroy = c.destroy),
          (R.prototype._undestroy = c.undestroy),
          (R.prototype._destroy = function (t, e) {
            e(t);
          });
      },
      20828: (t, e, r) => {
        "use strict";
        var n,
          i = r(34155);
        function o(t, e, r) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        var s = r(81086),
          a = Symbol("lastResolve"),
          u = Symbol("lastReject"),
          h = Symbol("error"),
          l = Symbol("ended"),
          c = Symbol("lastPromise"),
          f = Symbol("handlePromise"),
          d = Symbol("stream");
        function p(t, e) {
          return { value: t, done: e };
        }
        function g(t) {
          var e = t[a];
          if (null !== e) {
            var r = t[d].read();
            null !== r &&
              ((t[c] = null), (t[a] = null), (t[u] = null), e(p(r, !1)));
          }
        }
        function m(t) {
          i.nextTick(g, t);
        }
        var y = Object.getPrototypeOf(function () {}),
          v = Object.setPrototypeOf(
            (o(
              (n = {
                get stream() {
                  return this[d];
                },
                next: function () {
                  var t = this,
                    e = this[h];
                  if (null !== e) return Promise.reject(e);
                  if (this[l]) return Promise.resolve(p(void 0, !0));
                  if (this[d].destroyed)
                    return new Promise(function (e, r) {
                      i.nextTick(function () {
                        t[h] ? r(t[h]) : e(p(void 0, !0));
                      });
                    });
                  var r,
                    n = this[c];
                  if (n)
                    r = new Promise(
                      (function (t, e) {
                        return function (r, n) {
                          t.then(function () {
                            e[l] ? r(p(void 0, !0)) : e[f](r, n);
                          }, n);
                        };
                      })(n, this)
                    );
                  else {
                    var o = this[d].read();
                    if (null !== o) return Promise.resolve(p(o, !1));
                    r = new Promise(this[f]);
                  }
                  return (this[c] = r), r;
                },
              }),
              Symbol.asyncIterator,
              function () {
                return this;
              }
            ),
            o(n, "return", function () {
              var t = this;
              return new Promise(function (e, r) {
                t[d].destroy(null, function (t) {
                  t ? r(t) : e(p(void 0, !0));
                });
              });
            }),
            n),
            y
          );
        t.exports = function (t) {
          var e,
            r = Object.create(
              v,
              (o((e = {}), d, { value: t, writable: !0 }),
              o(e, a, { value: null, writable: !0 }),
              o(e, u, { value: null, writable: !0 }),
              o(e, h, { value: null, writable: !0 }),
              o(e, l, { value: t._readableState.endEmitted, writable: !0 }),
              o(e, f, {
                value: function (t, e) {
                  var n = r[d].read();
                  n
                    ? ((r[c] = null), (r[a] = null), (r[u] = null), t(p(n, !1)))
                    : ((r[a] = t), (r[u] = e));
                },
                writable: !0,
              }),
              e)
            );
          return (
            (r[c] = null),
            s(t, function (t) {
              if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                var e = r[u];
                return (
                  null !== e &&
                    ((r[c] = null), (r[a] = null), (r[u] = null), e(t)),
                  void (r[h] = t)
                );
              }
              var n = r[a];
              null !== n &&
                ((r[c] = null), (r[a] = null), (r[u] = null), n(p(void 0, !0))),
                (r[l] = !0);
            }),
            t.on("readable", m.bind(null, r)),
            r
          );
        };
      },
      39686: (t, e, r) => {
        "use strict";
        function n(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function i(t, e, r) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function o(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        var s = r(48764).Buffer,
          a = r(69862).inspect,
          u = (a && a.custom) || "inspect";
        t.exports = (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.head = null),
              (this.tail = null),
              (this.length = 0);
          }
          var e, r, h;
          return (
            (e = t),
            (r = [
              {
                key: "push",
                value: function (t) {
                  var e = { data: t, next: null };
                  this.length > 0 ? (this.tail.next = e) : (this.head = e),
                    (this.tail = e),
                    ++this.length;
                },
              },
              {
                key: "unshift",
                value: function (t) {
                  var e = { data: t, next: this.head };
                  0 === this.length && (this.tail = e),
                    (this.head = e),
                    ++this.length;
                },
              },
              {
                key: "shift",
                value: function () {
                  if (0 !== this.length) {
                    var t = this.head.data;
                    return (
                      1 === this.length
                        ? (this.head = this.tail = null)
                        : (this.head = this.head.next),
                      --this.length,
                      t
                    );
                  }
                },
              },
              {
                key: "clear",
                value: function () {
                  (this.head = this.tail = null), (this.length = 0);
                },
              },
              {
                key: "join",
                value: function (t) {
                  if (0 === this.length) return "";
                  for (var e = this.head, r = "" + e.data; (e = e.next); )
                    r += t + e.data;
                  return r;
                },
              },
              {
                key: "concat",
                value: function (t) {
                  if (0 === this.length) return s.alloc(0);
                  for (
                    var e,
                      r,
                      n,
                      i = s.allocUnsafe(t >>> 0),
                      o = this.head,
                      a = 0;
                    o;

                  )
                    (e = o.data),
                      (r = i),
                      (n = a),
                      s.prototype.copy.call(e, r, n),
                      (a += o.data.length),
                      (o = o.next);
                  return i;
                },
              },
              {
                key: "consume",
                value: function (t, e) {
                  var r;
                  return (
                    t < this.head.data.length
                      ? ((r = this.head.data.slice(0, t)),
                        (this.head.data = this.head.data.slice(t)))
                      : (r =
                          t === this.head.data.length
                            ? this.shift()
                            : e
                            ? this._getString(t)
                            : this._getBuffer(t)),
                    r
                  );
                },
              },
              {
                key: "first",
                value: function () {
                  return this.head.data;
                },
              },
              {
                key: "_getString",
                value: function (t) {
                  var e = this.head,
                    r = 1,
                    n = e.data;
                  for (t -= n.length; (e = e.next); ) {
                    var i = e.data,
                      o = t > i.length ? i.length : t;
                    if (
                      (o === i.length ? (n += i) : (n += i.slice(0, t)),
                      0 == (t -= o))
                    ) {
                      o === i.length
                        ? (++r,
                          e.next
                            ? (this.head = e.next)
                            : (this.head = this.tail = null))
                        : ((this.head = e), (e.data = i.slice(o)));
                      break;
                    }
                    ++r;
                  }
                  return (this.length -= r), n;
                },
              },
              {
                key: "_getBuffer",
                value: function (t) {
                  var e = s.allocUnsafe(t),
                    r = this.head,
                    n = 1;
                  for (r.data.copy(e), t -= r.data.length; (r = r.next); ) {
                    var i = r.data,
                      o = t > i.length ? i.length : t;
                    if ((i.copy(e, e.length - t, 0, o), 0 == (t -= o))) {
                      o === i.length
                        ? (++n,
                          r.next
                            ? (this.head = r.next)
                            : (this.head = this.tail = null))
                        : ((this.head = r), (r.data = i.slice(o)));
                      break;
                    }
                    ++n;
                  }
                  return (this.length -= n), e;
                },
              },
              {
                key: u,
                value: function (t, e) {
                  return a(
                    this,
                    (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2
                          ? n(Object(r), !0).forEach(function (e) {
                              i(t, e, r[e]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(r)
                            )
                          : n(Object(r)).forEach(function (e) {
                              Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(r, e)
                              );
                            });
                      }
                      return t;
                    })({}, e, { depth: 0, customInspect: !1 })
                  );
                },
              },
            ]) && o(e.prototype, r),
            h && o(e, h),
            t
          );
        })();
      },
      71029: (t, e, r) => {
        "use strict";
        var n = r(34155);
        function i(t, e) {
          s(t, e), o(t);
        }
        function o(t) {
          (t._writableState && !t._writableState.emitClose) ||
            (t._readableState && !t._readableState.emitClose) ||
            t.emit("close");
        }
        function s(t, e) {
          t.emit("error", e);
        }
        t.exports = {
          destroy: function (t, e) {
            var r = this,
              a = this._readableState && this._readableState.destroyed,
              u = this._writableState && this._writableState.destroyed;
            return a || u
              ? (e
                  ? e(t)
                  : t &&
                    (this._writableState
                      ? this._writableState.errorEmitted ||
                        ((this._writableState.errorEmitted = !0),
                        n.nextTick(s, this, t))
                      : n.nextTick(s, this, t)),
                this)
              : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(t || null, function (t) {
                  !e && t
                    ? r._writableState
                      ? r._writableState.errorEmitted
                        ? n.nextTick(o, r)
                        : ((r._writableState.errorEmitted = !0),
                          n.nextTick(i, r, t))
                      : n.nextTick(i, r, t)
                    : e
                    ? (n.nextTick(o, r), e(t))
                    : n.nextTick(o, r);
                }),
                this);
          },
          undestroy: function () {
            this._readableState &&
              ((this._readableState.destroyed = !1),
              (this._readableState.reading = !1),
              (this._readableState.ended = !1),
              (this._readableState.endEmitted = !1)),
              this._writableState &&
                ((this._writableState.destroyed = !1),
                (this._writableState.ended = !1),
                (this._writableState.ending = !1),
                (this._writableState.finalCalled = !1),
                (this._writableState.prefinished = !1),
                (this._writableState.finished = !1),
                (this._writableState.errorEmitted = !1));
          },
          errorOrDestroy: function (t, e) {
            var r = t._readableState,
              n = t._writableState;
            (r && r.autoDestroy) || (n && n.autoDestroy)
              ? t.destroy(e)
              : t.emit("error", e);
          },
        };
      },
      81086: (t, e, r) => {
        "use strict";
        var n = r(58106).q.ERR_STREAM_PREMATURE_CLOSE;
        function i() {}
        t.exports = function t(e, r, o) {
          if ("function" == typeof r) return t(e, null, r);
          r || (r = {}),
            (o = (function (t) {
              var e = !1;
              return function () {
                if (!e) {
                  e = !0;
                  for (
                    var r = arguments.length, n = new Array(r), i = 0;
                    i < r;
                    i++
                  )
                    n[i] = arguments[i];
                  t.apply(this, n);
                }
              };
            })(o || i));
          var s = r.readable || (!1 !== r.readable && e.readable),
            a = r.writable || (!1 !== r.writable && e.writable),
            u = function () {
              e.writable || l();
            },
            h = e._writableState && e._writableState.finished,
            l = function () {
              (a = !1), (h = !0), s || o.call(e);
            },
            c = e._readableState && e._readableState.endEmitted,
            f = function () {
              (s = !1), (c = !0), a || o.call(e);
            },
            d = function (t) {
              o.call(e, t);
            },
            p = function () {
              var t;
              return s && !c
                ? ((e._readableState && e._readableState.ended) ||
                    (t = new n()),
                  o.call(e, t))
                : a && !h
                ? ((e._writableState && e._writableState.ended) ||
                    (t = new n()),
                  o.call(e, t))
                : void 0;
            },
            g = function () {
              e.req.on("finish", l);
            };
          return (
            !(function (t) {
              return t.setHeader && "function" == typeof t.abort;
            })(e)
              ? a && !e._writableState && (e.on("end", u), e.on("close", u))
              : (e.on("complete", l),
                e.on("abort", p),
                e.req ? g() : e.on("request", g)),
            e.on("end", f),
            e.on("finish", l),
            !1 !== r.error && e.on("error", d),
            e.on("close", p),
            function () {
              e.removeListener("complete", l),
                e.removeListener("abort", p),
                e.removeListener("request", g),
                e.req && e.req.removeListener("finish", l),
                e.removeListener("end", u),
                e.removeListener("close", u),
                e.removeListener("finish", l),
                e.removeListener("end", f),
                e.removeListener("error", d),
                e.removeListener("close", p);
            }
          );
        };
      },
      31265: (t) => {
        t.exports = function () {
          throw new Error("Readable.from is not available in the browser");
        };
      },
      56472: (t, e, r) => {
        "use strict";
        var n;
        var i = r(58106).q,
          o = i.ERR_MISSING_ARGS,
          s = i.ERR_STREAM_DESTROYED;
        function a(t) {
          if (t) throw t;
        }
        function u(t, e, i, o) {
          o = (function (t) {
            var e = !1;
            return function () {
              e || ((e = !0), t.apply(void 0, arguments));
            };
          })(o);
          var a = !1;
          t.on("close", function () {
            a = !0;
          }),
            void 0 === n && (n = r(81086)),
            n(t, { readable: e, writable: i }, function (t) {
              if (t) return o(t);
              (a = !0), o();
            });
          var u = !1;
          return function (e) {
            if (!a && !u)
              return (
                (u = !0),
                (function (t) {
                  return t.setHeader && "function" == typeof t.abort;
                })(t)
                  ? t.abort()
                  : "function" == typeof t.destroy
                  ? t.destroy()
                  : void o(e || new s("pipe"))
              );
          };
        }
        function h(t) {
          t();
        }
        function l(t, e) {
          return t.pipe(e);
        }
        function c(t) {
          return t.length
            ? "function" != typeof t[t.length - 1]
              ? a
              : t.pop()
            : a;
        }
        t.exports = function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          var n,
            i = c(e);
          if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2))
            throw new o("streams");
          var s = e.map(function (t, r) {
            var o = r < e.length - 1;
            return u(t, o, r > 0, function (t) {
              n || (n = t), t && s.forEach(h), o || (s.forEach(h), i(n));
            });
          });
          return e.reduce(l);
        };
      },
      30094: (t, e, r) => {
        "use strict";
        var n = r(58106).q.ERR_INVALID_OPT_VALUE;
        t.exports = {
          getHighWaterMark: function (t, e, r, i) {
            var o = (function (t, e, r) {
              return null != t.highWaterMark
                ? t.highWaterMark
                : e
                ? t[r]
                : null;
            })(e, i, r);
            if (null != o) {
              if (!isFinite(o) || Math.floor(o) !== o || o < 0)
                throw new n(i ? r : "highWaterMark", o);
              return Math.floor(o);
            }
            return t.objectMode ? 16 : 16384;
          },
        };
      },
      83194: (t, e, r) => {
        t.exports = r(17187).EventEmitter;
      },
      54729: (t, e, r) => {
        "use strict";
        var n = r(89509).Buffer,
          i =
            n.isEncoding ||
            function (t) {
              switch ((t = "" + t) && t.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                  return !0;
                default:
                  return !1;
              }
            };
        function o(t) {
          var e;
          switch (
            ((this.encoding = (function (t) {
              var e = (function (t) {
                if (!t) return "utf8";
                for (var e; ; )
                  switch (t) {
                    case "utf8":
                    case "utf-8":
                      return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return "utf16le";
                    case "latin1":
                    case "binary":
                      return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                      return t;
                    default:
                      if (e) return;
                      (t = ("" + t).toLowerCase()), (e = !0);
                  }
              })(t);
              if ("string" != typeof e && (n.isEncoding === i || !i(t)))
                throw new Error("Unknown encoding: " + t);
              return e || t;
            })(t)),
            this.encoding)
          ) {
            case "utf16le":
              (this.text = u), (this.end = h), (e = 4);
              break;
            case "utf8":
              (this.fillLast = a), (e = 4);
              break;
            case "base64":
              (this.text = l), (this.end = c), (e = 3);
              break;
            default:
              return (this.write = f), void (this.end = d);
          }
          (this.lastNeed = 0),
            (this.lastTotal = 0),
            (this.lastChar = n.allocUnsafe(e));
        }
        function s(t) {
          return t <= 127
            ? 0
            : t >> 5 == 6
            ? 2
            : t >> 4 == 14
            ? 3
            : t >> 3 == 30
            ? 4
            : t >> 6 == 2
            ? -1
            : -2;
        }
        function a(t) {
          var e = this.lastTotal - this.lastNeed,
            r = (function (t, e, r) {
              if (128 != (192 & e[0])) return (t.lastNeed = 0), "\ufffd";
              if (t.lastNeed > 1 && e.length > 1) {
                if (128 != (192 & e[1])) return (t.lastNeed = 1), "\ufffd";
                if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2]))
                  return (t.lastNeed = 2), "\ufffd";
              }
            })(this, t);
          return void 0 !== r
            ? r
            : this.lastNeed <= t.length
            ? (t.copy(this.lastChar, e, 0, this.lastNeed),
              this.lastChar.toString(this.encoding, 0, this.lastTotal))
            : (t.copy(this.lastChar, e, 0, t.length),
              void (this.lastNeed -= t.length));
        }
        function u(t, e) {
          if ((t.length - e) % 2 == 0) {
            var r = t.toString("utf16le", e);
            if (r) {
              var n = r.charCodeAt(r.length - 1);
              if (n >= 55296 && n <= 56319)
                return (
                  (this.lastNeed = 2),
                  (this.lastTotal = 4),
                  (this.lastChar[0] = t[t.length - 2]),
                  (this.lastChar[1] = t[t.length - 1]),
                  r.slice(0, -1)
                );
            }
            return r;
          }
          return (
            (this.lastNeed = 1),
            (this.lastTotal = 2),
            (this.lastChar[0] = t[t.length - 1]),
            t.toString("utf16le", e, t.length - 1)
          );
        }
        function h(t) {
          var e = t && t.length ? this.write(t) : "";
          if (this.lastNeed) {
            var r = this.lastTotal - this.lastNeed;
            return e + this.lastChar.toString("utf16le", 0, r);
          }
          return e;
        }
        function l(t, e) {
          var r = (t.length - e) % 3;
          return 0 === r
            ? t.toString("base64", e)
            : ((this.lastNeed = 3 - r),
              (this.lastTotal = 3),
              1 === r
                ? (this.lastChar[0] = t[t.length - 1])
                : ((this.lastChar[0] = t[t.length - 2]),
                  (this.lastChar[1] = t[t.length - 1])),
              t.toString("base64", e, t.length - r));
        }
        function c(t) {
          var e = t && t.length ? this.write(t) : "";
          return this.lastNeed
            ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
            : e;
        }
        function f(t) {
          return t.toString(this.encoding);
        }
        function d(t) {
          return t && t.length ? this.write(t) : "";
        }
        (e.s = o),
          (o.prototype.write = function (t) {
            if (0 === t.length) return "";
            var e, r;
            if (this.lastNeed) {
              if (void 0 === (e = this.fillLast(t))) return "";
              (r = this.lastNeed), (this.lastNeed = 0);
            } else r = 0;
            return r < t.length
              ? e
                ? e + this.text(t, r)
                : this.text(t, r)
              : e || "";
          }),
          (o.prototype.end = function (t) {
            var e = t && t.length ? this.write(t) : "";
            return this.lastNeed ? e + "\ufffd" : e;
          }),
          (o.prototype.text = function (t, e) {
            var r = (function (t, e, r) {
              var n = e.length - 1;
              if (n < r) return 0;
              var i = s(e[n]);
              if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;
              if (--n < r || -2 === i) return 0;
              if ((i = s(e[n])) >= 0) return i > 0 && (t.lastNeed = i - 2), i;
              if (--n < r || -2 === i) return 0;
              if ((i = s(e[n])) >= 0)
                return i > 0 && (2 === i ? (i = 0) : (t.lastNeed = i - 3)), i;
              return 0;
            })(this, t, e);
            if (!this.lastNeed) return t.toString("utf8", e);
            this.lastTotal = r;
            var n = t.length - (r - this.lastNeed);
            return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n);
          }),
          (o.prototype.fillLast = function (t) {
            if (this.lastNeed <= t.length)
              return (
                t.copy(
                  this.lastChar,
                  this.lastTotal - this.lastNeed,
                  0,
                  this.lastNeed
                ),
                this.lastChar.toString(this.encoding, 0, this.lastTotal)
              );
            t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
              (this.lastNeed -= t.length);
          });
      },
      94927: (t, e, r) => {
        function n(t) {
          try {
            if (!r.g.localStorage) return !1;
          } catch (t) {
            return !1;
          }
          var e = r.g.localStorage[t];
          return null != e && "true" === String(e).toLowerCase();
        }
        t.exports = function (t, e) {
          if (n("noDeprecation")) return t;
          var r = !1;
          return function () {
            if (!r) {
              if (n("throwDeprecation")) throw new Error(e);
              n("traceDeprecation") ? console.trace(e) : console.warn(e),
                (r = !0);
            }
            return t.apply(this, arguments);
          };
        };
      },
      32190: (t, e) => {
        "use strict";
        e.ScopedLocalStorage = void 0;
        e.ScopedLocalStorage = class {
          constructor(t) {
            this.scope = t;
          }
          setItem(t, e) {
            localStorage.setItem(this.scopedKey(t), e);
          }
          getItem(t) {
            return localStorage.getItem(this.scopedKey(t));
          }
          removeItem(t) {
            localStorage.removeItem(this.scopedKey(t));
          }
          clear() {
            const t = this.scopedKey(""),
              e = [];
            for (let r = 0; r < localStorage.length; r++) {
              const n = localStorage.key(r);
              "string" == typeof n && n.startsWith(t) && e.push(n);
            }
            e.forEach((t) => localStorage.removeItem(t));
          }
          scopedKey(t) {
            return `${this.scope}:${t}`;
          }
        };
      },
      74507: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.filterFromParam = e.FilterPolyfill = void 0);
        const n = r(82221),
          i = r(51974),
          o = { jsonrpc: "2.0", id: 0 };
        function s(t) {
          return {
            fromBlock: u(t.fromBlock),
            toBlock: u(t.toBlock),
            addresses:
              void 0 === t.address
                ? null
                : Array.isArray(t.address)
                ? t.address
                : [t.address],
            topics: t.topics || [],
          };
        }
        function a(t) {
          const e = {
            fromBlock: h(t.fromBlock),
            toBlock: h(t.toBlock),
            topics: t.topics,
          };
          return null !== t.addresses && (e.address = t.addresses), e;
        }
        function u(t) {
          if (void 0 === t || "latest" === t || "pending" === t)
            return "latest";
          if ("earliest" === t) return n.IntNumber(0);
          if (i.isHexString(t)) return i.intNumberFromHexString(t);
          throw new Error(`Invalid block option: ${t}`);
        }
        function h(t) {
          return "latest" === t ? t : i.hexStringFromIntNumber(t);
        }
        function l() {
          return Object.assign(Object.assign({}, o), {
            error: { code: -32e3, message: "filter not found" },
          });
        }
        function c() {
          return Object.assign(Object.assign({}, o), { result: [] });
        }
        (e.FilterPolyfill = class {
          constructor(t) {
            (this.logFilters = new Map()),
              (this.blockFilters = new Set()),
              (this.pendingTransactionFilters = new Set()),
              (this.cursors = new Map()),
              (this.timeouts = new Map()),
              (this.nextFilterId = n.IntNumber(1)),
              (this.provider = t);
          }
          async newFilter(t) {
            const e = s(t),
              r = this.makeFilterId(),
              n = await this.setInitialCursorPosition(r, e.fromBlock);
            return (
              console.log(
                `Installing new log filter(${r}):`,
                e,
                "initial cursor position:",
                n
              ),
              this.logFilters.set(r, e),
              this.setFilterTimeout(r),
              i.hexStringFromIntNumber(r)
            );
          }
          async newBlockFilter() {
            const t = this.makeFilterId(),
              e = await this.setInitialCursorPosition(t, "latest");
            return (
              console.log(
                `Installing new block filter (${t}) with initial cursor position:`,
                e
              ),
              this.blockFilters.add(t),
              this.setFilterTimeout(t),
              i.hexStringFromIntNumber(t)
            );
          }
          async newPendingTransactionFilter() {
            const t = this.makeFilterId(),
              e = await this.setInitialCursorPosition(t, "latest");
            return (
              console.log(
                `Installing new block filter (${t}) with initial cursor position:`,
                e
              ),
              this.pendingTransactionFilters.add(t),
              this.setFilterTimeout(t),
              i.hexStringFromIntNumber(t)
            );
          }
          uninstallFilter(t) {
            const e = i.intNumberFromHexString(t);
            return (
              console.log(`Uninstalling filter (${e})`),
              this.deleteFilter(e),
              !0
            );
          }
          getFilterChanges(t) {
            const e = i.intNumberFromHexString(t);
            return (
              this.timeouts.has(e) && this.setFilterTimeout(e),
              this.logFilters.has(e)
                ? this.getLogFilterChanges(e)
                : this.blockFilters.has(e)
                ? this.getBlockFilterChanges(e)
                : this.pendingTransactionFilters.has(e)
                ? this.getPendingTransactionFilterChanges(e)
                : Promise.resolve(l())
            );
          }
          async getFilterLogs(t) {
            const e = i.intNumberFromHexString(t),
              r = this.logFilters.get(e);
            return r
              ? this.sendAsyncPromise(
                  Object.assign(Object.assign({}, o), {
                    method: "eth_getLogs",
                    params: [a(r)],
                  })
                )
              : l();
          }
          makeFilterId() {
            return n.IntNumber(++this.nextFilterId);
          }
          sendAsyncPromise(t) {
            return new Promise((e, r) => {
              this.provider.sendAsync(t, (t, n) =>
                t
                  ? r(t)
                  : Array.isArray(n) || null == n
                  ? r(
                      new Error(
                        `unexpected response received: ${JSON.stringify(n)}`
                      )
                    )
                  : void e(n)
              );
            });
          }
          deleteFilter(t) {
            console.log(`Deleting filter (${t})`),
              this.logFilters.delete(t),
              this.blockFilters.delete(t),
              this.pendingTransactionFilters.delete(t),
              this.cursors.delete(t),
              this.timeouts.delete(t);
          }
          async getLogFilterChanges(t) {
            const e = this.logFilters.get(t),
              r = this.cursors.get(t);
            if (!r || !e) return l();
            const s = await this.getCurrentBlockHeight(),
              u = "latest" === e.toBlock ? s : e.toBlock;
            if (r > s) return c();
            if (r > e.toBlock) return c();
            console.log(`Fetching logs from ${r} to ${u} for filter ${t}`);
            const h = await this.sendAsyncPromise(
              Object.assign(Object.assign({}, o), {
                method: "eth_getLogs",
                params: [
                  a(
                    Object.assign(Object.assign({}, e), {
                      fromBlock: r,
                      toBlock: u,
                    })
                  ),
                ],
              })
            );
            if (Array.isArray(h.result)) {
              const e = h.result.map((t) =>
                  i.intNumberFromHexString(t.blockNumber || "0x0")
                ),
                o = Math.max(...e);
              if (o && o > r) {
                const e = n.IntNumber(o + 1);
                console.log(
                  `Moving cursor position for filter (${t}) from ${r} to ${e}`
                ),
                  this.cursors.set(t, e);
              }
            }
            return h;
          }
          async getBlockFilterChanges(t) {
            const e = this.cursors.get(t);
            if (!e) return l();
            const r = await this.getCurrentBlockHeight();
            if (e > r) return c();
            console.log(`Fetching blocks from ${e} to ${r} for filter (${t})`);
            const s = (
                await Promise.all(
                  i
                    .range(e, r + 1)
                    .map((t) => this.getBlockHashByNumber(n.IntNumber(t)))
                )
              ).filter((t) => !!t),
              a = n.IntNumber(e + s.length);
            return (
              console.log(
                `Moving cursor position for filter (${t}) from ${e} to ${a}`
              ),
              this.cursors.set(t, a),
              Object.assign(Object.assign({}, o), { result: s })
            );
          }
          async getPendingTransactionFilterChanges(t) {
            return Promise.resolve(c());
          }
          async setInitialCursorPosition(t, e) {
            const r = await this.getCurrentBlockHeight(),
              n = "number" == typeof e && e > r ? e : r;
            return this.cursors.set(t, n), n;
          }
          setFilterTimeout(t) {
            const e = this.timeouts.get(t);
            e && window.clearTimeout(e);
            const r = window.setTimeout(() => {
              console.log(`Filter (${t}) timed out`), this.deleteFilter(t);
            }, 3e5);
            this.timeouts.set(t, r);
          }
          async getCurrentBlockHeight() {
            const { result: t } = await this.sendAsyncPromise(
              Object.assign(Object.assign({}, o), {
                method: "eth_blockNumber",
                params: [],
              })
            );
            return i.intNumberFromHexString(i.ensureHexString(t));
          }
          async getBlockHashByNumber(t) {
            const e = await this.sendAsyncPromise(
              Object.assign(Object.assign({}, o), {
                method: "eth_getBlockByNumber",
                params: [i.hexStringFromIntNumber(t), !1],
              })
            );
            return e.result && "string" == typeof e.result.hash
              ? i.ensureHexString(e.result.hash)
              : null;
          }
        }),
          (e.filterFromParam = s);
      },
      31124: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.JSONRPCMethod = void 0),
          (function (t) {
            (t.eth_accounts = "eth_accounts"),
              (t.eth_coinbase = "eth_coinbase"),
              (t.net_version = "net_version"),
              (t.eth_chainId = "eth_chainId"),
              (t.eth_uninstallFilter = "eth_uninstallFilter"),
              (t.eth_requestAccounts = "eth_requestAccounts"),
              (t.eth_sign = "eth_sign"),
              (t.eth_ecRecover = "eth_ecRecover"),
              (t.personal_sign = "personal_sign"),
              (t.personal_ecRecover = "personal_ecRecover"),
              (t.eth_signTransaction = "eth_signTransaction"),
              (t.eth_sendRawTransaction = "eth_sendRawTransaction"),
              (t.eth_sendTransaction = "eth_sendTransaction"),
              (t.eth_signTypedData_v1 = "eth_signTypedData_v1"),
              (t.eth_signTypedData_v2 = "eth_signTypedData_v2"),
              (t.eth_signTypedData_v3 = "eth_signTypedData_v3"),
              (t.eth_signTypedData_v4 = "eth_signTypedData_v4"),
              (t.eth_signTypedData = "eth_signTypedData"),
              (t.walletlink_arbitrary = "walletlink_arbitrary"),
              (t.eth_subscribe = "eth_subscribe"),
              (t.eth_unsubscribe = "eth_unsubscribe"),
              (t.eth_newFilter = "eth_newFilter"),
              (t.eth_newBlockFilter = "eth_newBlockFilter"),
              (t.eth_newPendingTransactionFilter =
                "eth_newPendingTransactionFilter"),
              (t.eth_getFilterChanges = "eth_getFilterChanges"),
              (t.eth_getFilterLogs = "eth_getFilterLogs");
          })(e.JSONRPCMethod || (e.JSONRPCMethod = {}));
      },
      36450: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.SubscriptionManager = void 0);
        const n = r(46211),
          i = r(47177),
          o = () => {};
        e.SubscriptionManager = class {
          constructor(t) {
            const e = new n({
                provider: t,
                pollingInterval: 15e3,
                setSkipCacheFlag: !0,
              }),
              { events: r, middleware: o } = i({
                blockTracker: e,
                provider: t,
              });
            (this.events = r), (this.subscriptionMiddleware = o);
          }
          async handleRequest(t) {
            const e = {};
            return await this.subscriptionMiddleware(t, e, o, o), e;
          }
          destroy() {
            this.subscriptionMiddleware.destroy();
          }
        };
      },
      26890: function (t, e, r) {
        "use strict";
        var n = r(40226).Buffer,
          i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.WalletLinkProvider = void 0);
        const o = i(r(39298)),
          s = r(51974),
          a = i(r(88752)),
          u = r(74507),
          h = r(31124),
          l = r(82523),
          c = i(r(58982)),
          f = r(36450),
          d = "Addresses";
        class p extends c.default {
          constructor(t) {
            super(),
              (this._filterPolyfill = new u.FilterPolyfill(this)),
              (this._subscriptionManager = new f.SubscriptionManager(this)),
              (this._relay = null),
              (this._addresses = []),
              (this.hasMadeFirstChainChangedEmission = !1),
              (this.isChainOverridden = !1),
              (this._send = this.send),
              (this._sendAsync = this.sendAsync),
              (this.setProviderInfo = this.setProviderInfo.bind(this)),
              (this.updateProviderInfo = this.updateProviderInfo.bind(this)),
              (this.setAppInfo = this.setAppInfo.bind(this)),
              (this.enable = this.enable.bind(this)),
              (this.close = this.close.bind(this)),
              (this.send = this.send.bind(this)),
              (this.sendAsync = this.sendAsync.bind(this)),
              (this.request = this.request.bind(this)),
              (this._setAddresses = this._setAddresses.bind(this)),
              (this.scanQRCode = this.scanQRCode.bind(this)),
              (this.arbitraryRequest = this.arbitraryRequest.bind(this)),
              (this.childRequestEthereumAccounts =
                this.childRequestEthereumAccounts.bind(this)),
              (this._chainId = s.ensureIntNumber(t.chainId || 1)),
              (this._jsonRpcUrl = t.jsonRpcUrl),
              (this._overrideIsMetaMask = t.overrideIsMetaMask),
              (this._relayProvider = t.relayProvider),
              (this._storage = t.storage),
              (this._relayEventManager = t.relayEventManager);
            const e = s.prepend0x(this._chainId.toString(16));
            this.emit("connect", { chainIdStr: e });
            const r = this._storage.getItem(d);
            if (r) {
              const t = r.split(" ");
              "" !== t[0] &&
                ((this._addresses = t), this.emit("accountsChanged", t));
            }
            this._subscriptionManager.events.on("notification", (t) => {
              this.emit("message", { type: t.method, data: t.params });
            }),
              this._addresses.length > 0 && this.initializeRelay();
          }
          get selectedAddress() {
            return this._addresses[0] || void 0;
          }
          get networkVersion() {
            return this._chainId.toString(10);
          }
          get chainId() {
            return s.prepend0x(this._chainId.toString(16));
          }
          get isWalletLink() {
            return !0;
          }
          get isMetaMask() {
            return this._overrideIsMetaMask;
          }
          get host() {
            return this._jsonRpcUrl;
          }
          get connected() {
            return !0;
          }
          isConnected() {
            return !0;
          }
          setProviderInfo(t, e) {
            this.isChainOverridden || this.updateProviderInfo(t, e, !1);
          }
          updateProviderInfo(t, e, r) {
            r && (this.isChainOverridden = !0);
            let n = this._chainId;
            this._chainId = s.ensureIntNumber(e);
            let i = this._chainId !== n;
            (this._jsonRpcUrl = t),
              (!i && this.hasMadeFirstChainChangedEmission) ||
                (this.emit("chainChanged", this._chainId),
                (this.hasMadeFirstChainChangedEmission = !0));
          }
          setAppInfo(t, e) {
            this.initializeRelay().then((r) => r.setAppInfo(t, e));
          }
          async enable() {
            return this._addresses.length > 0
              ? this._addresses
              : await this._send(h.JSONRPCMethod.eth_requestAccounts);
          }
          close() {
            this.initializeRelay().then((t) => t.resetAndReload());
          }
          send(t, e) {
            if ("string" == typeof t) {
              const r = {
                jsonrpc: "2.0",
                id: 0,
                method: t,
                params: Array.isArray(e) ? e : void 0 !== e ? [e] : [],
              };
              return this._sendRequestAsync(r).then((t) => t.result);
            }
            if ("function" == typeof e) {
              const r = t,
                n = e;
              return this._sendAsync(r, n);
            }
            if (Array.isArray(t)) {
              return t.map((t) => this._sendRequest(t));
            }
            const r = t;
            return this._sendRequest(r);
          }
          sendAsync(t, e) {
            if ("function" != typeof e) throw new Error("callback is required");
            if (Array.isArray(t)) {
              const r = e;
              return void this._sendMultipleRequestsAsync(t)
                .then((t) => r(null, t))
                .catch((t) => r(t, null));
            }
            const r = e;
            this._sendRequestAsync(t)
              .then((t) => r(null, t))
              .catch((t) => r(t, null));
          }
          async request(t) {
            if (!t || "object" != typeof t || Array.isArray(t))
              throw l.ethErrors.rpc.invalidRequest({
                message: "Expected a single, non-array, object argument.",
                data: t,
              });
            const { method: e, params: r } = t;
            if ("string" != typeof e || 0 === e.length)
              throw l.ethErrors.rpc.invalidRequest({
                message: "'args.method' must be a non-empty string.",
                data: t,
              });
            if (
              void 0 !== r &&
              !Array.isArray(r) &&
              ("object" != typeof r || null === r)
            )
              throw l.ethErrors.rpc.invalidRequest({
                message:
                  "'args.params' must be an object or array if provided.",
                data: t,
              });
            const n = void 0 === r ? [] : r,
              i = this._relayEventManager.makeRequestId();
            return (
              await this._sendRequestAsync({
                method: e,
                params: n,
                jsonrpc: "2.0",
                id: i,
              })
            ).result;
          }
          async scanQRCode(t) {
            const e = await this.initializeRelay(),
              r = await e.scanQRCode(s.ensureRegExpString(t));
            if ("string" != typeof r.result)
              throw new Error("result was not a string");
            return r.result;
          }
          async arbitraryRequest(t) {
            const e = await this.initializeRelay(),
              r = await e.arbitraryRequest(t);
            if ("string" != typeof r.result)
              throw new Error("result was not a string");
            return r.result;
          }
          async childRequestEthereumAccounts(t, e, r, n, i) {
            const o = await this.initializeRelay();
            return await o.childRequestEthereumAccounts(t, e, r, n, i), !0;
          }
          supportsSubscriptions() {
            return !1;
          }
          subscribe() {
            throw new Error("Subscriptions are not supported");
          }
          unsubscribe() {
            throw new Error("Subscriptions are not supported");
          }
          disconnect() {
            return !0;
          }
          _sendRequest(t) {
            const e = { jsonrpc: "2.0", id: t.id },
              { method: r } = t;
            if (
              ((e.result = this._handleSynchronousMethods(t)),
              void 0 === e.result)
            )
              throw new Error(
                `WalletLink does not support calling ${r} synchronously without a callback. Please provide a callback parameter to call ${r} asynchronously.`
              );
            return e;
          }
          _setAddresses(t) {
            if (!Array.isArray(t)) throw new Error("addresses is not an array");
            let e = t.map((t) => s.ensureAddressString(t));
            JSON.stringify(e) !== JSON.stringify(this._addresses) &&
              ((this._addresses = e),
              this.emit("accountsChanged", this._addresses),
              this._storage.setItem(d, t.join(" ")),
              window.dispatchEvent(
                new CustomEvent("walletlink:addresses", {
                  detail: this._addresses,
                })
              ));
          }
          _sendRequestAsync(t) {
            return new Promise((e, r) => {
              try {
                const n = this._handleSynchronousMethods(t);
                if (void 0 !== n)
                  return e({ jsonrpc: "2.0", id: t.id, result: n });
                const i = this._handleAsynchronousFilterMethods(t);
                if (void 0 !== i)
                  return void i
                    .then((r) =>
                      e(Object.assign(Object.assign({}, r), { id: t.id }))
                    )
                    .catch((t) => r(t));
                const o = this._handleSubscriptionMethods(t);
                if (void 0 !== o)
                  return void o
                    .then((r) =>
                      e({ jsonrpc: "2.0", id: t.id, result: r.result })
                    )
                    .catch((t) => r(t));
              } catch (t) {
                return r(t);
              }
              this._handleAsynchronousMethods(t)
                .then((r) =>
                  e(Object.assign(Object.assign({}, r), { id: t.id }))
                )
                .catch((t) => r(t));
            });
          }
          _sendMultipleRequestsAsync(t) {
            return Promise.all(t.map((t) => this._sendRequestAsync(t)));
          }
          _handleSynchronousMethods(t) {
            const { method: e } = t,
              r = t.params || [];
            switch (e) {
              case h.JSONRPCMethod.eth_accounts:
                return this._eth_accounts();
              case h.JSONRPCMethod.eth_coinbase:
                return this._eth_coinbase();
              case h.JSONRPCMethod.eth_uninstallFilter:
                return this._eth_uninstallFilter(r);
              case h.JSONRPCMethod.net_version:
                return this._net_version();
              case h.JSONRPCMethod.eth_chainId:
                return this._eth_chainId();
              default:
                return;
            }
          }
          _handleAsynchronousMethods(t) {
            const { method: e } = t,
              r = t.params || [];
            switch (e) {
              case h.JSONRPCMethod.eth_requestAccounts:
                return this._eth_requestAccounts();
              case h.JSONRPCMethod.eth_sign:
                return this._eth_sign(r);
              case h.JSONRPCMethod.eth_ecRecover:
                return this._eth_ecRecover(r);
              case h.JSONRPCMethod.personal_sign:
                return this._personal_sign(r);
              case h.JSONRPCMethod.personal_ecRecover:
                return this._personal_ecRecover(r);
              case h.JSONRPCMethod.eth_signTransaction:
                return this._eth_signTransaction(r);
              case h.JSONRPCMethod.eth_sendRawTransaction:
                return this._eth_sendRawTransaction(r);
              case h.JSONRPCMethod.eth_sendTransaction:
                return this._eth_sendTransaction(r);
              case h.JSONRPCMethod.eth_signTypedData_v1:
                return this._eth_signTypedData_v1(r);
              case h.JSONRPCMethod.eth_signTypedData_v2:
                return this._throwUnsupportedMethodError();
              case h.JSONRPCMethod.eth_signTypedData_v3:
                return this._eth_signTypedData_v3(r);
              case h.JSONRPCMethod.eth_signTypedData_v4:
              case h.JSONRPCMethod.eth_signTypedData:
                return this._eth_signTypedData_v4(r);
              case h.JSONRPCMethod.walletlink_arbitrary:
                return this._walletlink_arbitrary(r);
            }
            if (!this._jsonRpcUrl) throw Error("Error: No jsonRpcUrl provided");
            return window
              .fetch(this._jsonRpcUrl, {
                method: "POST",
                body: JSON.stringify(t),
                mode: "cors",
                headers: { "Content-Type": "application/json" },
              })
              .then((t) => t.json())
              .then((t) => {
                if (!t) throw l.ethErrors.rpc.parse({});
                const e = t,
                  { error: r } = e;
                if (r) throw l.serializeError(r);
                return e;
              });
          }
          _handleAsynchronousFilterMethods(t) {
            const { method: e } = t,
              r = t.params || [];
            switch (e) {
              case h.JSONRPCMethod.eth_newFilter:
                return this._eth_newFilter(r);
              case h.JSONRPCMethod.eth_newBlockFilter:
                return this._eth_newBlockFilter();
              case h.JSONRPCMethod.eth_newPendingTransactionFilter:
                return this._eth_newPendingTransactionFilter();
              case h.JSONRPCMethod.eth_getFilterChanges:
                return this._eth_getFilterChanges(r);
              case h.JSONRPCMethod.eth_getFilterLogs:
                return this._eth_getFilterLogs(r);
            }
          }
          _handleSubscriptionMethods(t) {
            switch (t.method) {
              case h.JSONRPCMethod.eth_subscribe:
              case h.JSONRPCMethod.eth_unsubscribe:
                return this._subscriptionManager.handleRequest(t);
            }
          }
          _isKnownAddress(t) {
            try {
              const e = s.ensureAddressString(t);
              return this._addresses.includes(e);
            } catch (t) {}
            return !1;
          }
          _ensureKnownAddress(t) {
            if (!this._isKnownAddress(t))
              throw new Error("Unknown Ethereum address");
          }
          _prepareTransactionParams(t) {
            const e = t.from
              ? s.ensureAddressString(t.from)
              : this.selectedAddress;
            if (!e) throw new Error("Ethereum address is unavailable");
            this._ensureKnownAddress(e);
            return {
              fromAddress: e,
              toAddress: t.to ? s.ensureAddressString(t.to) : null,
              weiValue:
                null != t.value ? s.ensureBN(t.value) : new o.default(0),
              data: t.data ? s.ensureBuffer(t.data) : n.alloc(0),
              nonce: null != t.nonce ? s.ensureIntNumber(t.nonce) : null,
              gasPriceInWei: null != t.gasPrice ? s.ensureBN(t.gasPrice) : null,
              gasLimit: null != t.gas ? s.ensureBN(t.gas) : null,
              chainId: this._chainId,
            };
          }
          _requireAuthorization() {
            if (0 === this._addresses.length)
              throw l.ethErrors.provider.unauthorized({});
          }
          _throwUnsupportedMethodError() {
            throw l.ethErrors.provider.unsupportedMethod({});
          }
          async _signEthereumMessage(t, e, r, n) {
            this._ensureKnownAddress(e);
            try {
              const i = await this.initializeRelay();
              return {
                jsonrpc: "2.0",
                id: 0,
                result: (await i.signEthereumMessage(t, e, r, n)).result,
              };
            } catch (t) {
              if (
                "string" == typeof t.message &&
                t.message.match(/(denied|rejected)/i)
              )
                throw l.ethErrors.provider.userRejectedRequest(
                  "User denied message signature"
                );
              throw t;
            }
          }
          async _ethereumAddressFromSignedMessage(t, e, r) {
            const n = await this.initializeRelay();
            return {
              jsonrpc: "2.0",
              id: 0,
              result: (await n.ethereumAddressFromSignedMessage(t, e, r))
                .result,
            };
          }
          _eth_accounts() {
            return this._addresses;
          }
          _eth_coinbase() {
            return this.selectedAddress || null;
          }
          _net_version() {
            return this._chainId.toString(10);
          }
          _eth_chainId() {
            return s.hexStringFromIntNumber(this._chainId);
          }
          async _eth_requestAccounts() {
            if (this._addresses.length > 0)
              return Promise.resolve({
                jsonrpc: "2.0",
                id: 0,
                result: this._addresses,
              });
            let t;
            try {
              const e = await this.initializeRelay();
              t = await e.requestEthereumAccounts();
            } catch (t) {
              if (
                "string" == typeof t.message &&
                t.message.match(/(denied|rejected)/i)
              )
                throw l.ethErrors.provider.userRejectedRequest(
                  "User denied account authorization"
                );
              throw t;
            }
            if (!t.result) throw new Error("accounts received is empty");
            return (
              this._setAddresses(t.result),
              { jsonrpc: "2.0", id: 0, result: this._addresses }
            );
          }
          _eth_sign(t) {
            this._requireAuthorization();
            const e = s.ensureAddressString(t[0]),
              r = s.ensureBuffer(t[1]);
            return this._signEthereumMessage(r, e, !1);
          }
          _eth_ecRecover(t) {
            const e = s.ensureBuffer(t[0]),
              r = s.ensureBuffer(t[1]);
            return this._ethereumAddressFromSignedMessage(e, r, !1);
          }
          _personal_sign(t) {
            this._requireAuthorization();
            const e = s.ensureBuffer(t[0]),
              r = s.ensureAddressString(t[1]);
            return this._signEthereumMessage(e, r, !0);
          }
          _personal_ecRecover(t) {
            const e = s.ensureBuffer(t[0]),
              r = s.ensureBuffer(t[1]);
            return this._ethereumAddressFromSignedMessage(e, r, !0);
          }
          async _eth_signTransaction(t) {
            this._requireAuthorization();
            const e = this._prepareTransactionParams(t[0] || {});
            try {
              const t = await this.initializeRelay();
              return {
                jsonrpc: "2.0",
                id: 0,
                result: (await t.signEthereumTransaction(e)).result,
              };
            } catch (t) {
              if (
                "string" == typeof t.message &&
                t.message.match(/(denied|rejected)/i)
              )
                throw l.ethErrors.provider.userRejectedRequest(
                  "User denied transaction signature"
                );
              throw t;
            }
          }
          async _eth_sendRawTransaction(t) {
            const e = s.ensureBuffer(t[0]),
              r = await this.initializeRelay();
            return {
              jsonrpc: "2.0",
              id: 0,
              result: (await r.submitEthereumTransaction(e, this._chainId))
                .result,
            };
          }
          async _eth_sendTransaction(t) {
            this._requireAuthorization();
            const e = this._prepareTransactionParams(t[0] || {});
            try {
              const t = await this.initializeRelay();
              return {
                jsonrpc: "2.0",
                id: 0,
                result: (await t.signAndSubmitEthereumTransaction(e)).result,
              };
            } catch (t) {
              if (
                "string" == typeof t.message &&
                t.message.match(/(denied|rejected)/i)
              )
                throw l.ethErrors.provider.userRejectedRequest(
                  "User denied transaction signature"
                );
              throw t;
            }
          }
          async _eth_signTypedData_v1(t) {
            this._requireAuthorization();
            const e = s.ensureParsedJSONObject(t[0]),
              r = s.ensureAddressString(t[1]);
            this._ensureKnownAddress(r);
            const n = a.default.hashForSignTypedDataLegacy({ data: e }),
              i = JSON.stringify(e, null, 2);
            return this._signEthereumMessage(n, r, !1, i);
          }
          async _eth_signTypedData_v3(t) {
            this._requireAuthorization();
            const e = s.ensureAddressString(t[0]),
              r = s.ensureParsedJSONObject(t[1]);
            this._ensureKnownAddress(e);
            const n = a.default.hashForSignTypedData_v3({ data: r }),
              i = JSON.stringify(r, null, 2);
            return this._signEthereumMessage(n, e, !1, i);
          }
          async _eth_signTypedData_v4(t) {
            this._requireAuthorization();
            const e = s.ensureAddressString(t[0]),
              r = s.ensureParsedJSONObject(t[1]);
            this._ensureKnownAddress(e);
            const n = a.default.hashForSignTypedData_v4({ data: r }),
              i = JSON.stringify(r, null, 2);
            return this._signEthereumMessage(n, e, !1, i);
          }
          async _walletlink_arbitrary(t) {
            const e = t[0];
            if ("string" != typeof e)
              throw new Error("parameter must be a string");
            return {
              jsonrpc: "2.0",
              id: 0,
              result: await this.arbitraryRequest(e),
            };
          }
          _eth_uninstallFilter(t) {
            const e = s.ensureHexString(t[0]);
            return this._filterPolyfill.uninstallFilter(e);
          }
          async _eth_newFilter(t) {
            const e = t[0];
            return {
              jsonrpc: "2.0",
              id: 0,
              result: await this._filterPolyfill.newFilter(e),
            };
          }
          async _eth_newBlockFilter() {
            return {
              jsonrpc: "2.0",
              id: 0,
              result: await this._filterPolyfill.newBlockFilter(),
            };
          }
          async _eth_newPendingTransactionFilter() {
            return {
              jsonrpc: "2.0",
              id: 0,
              result: await this._filterPolyfill.newPendingTransactionFilter(),
            };
          }
          _eth_getFilterChanges(t) {
            const e = s.ensureHexString(t[0]);
            return this._filterPolyfill.getFilterChanges(e);
          }
          _eth_getFilterLogs(t) {
            const e = s.ensureHexString(t[0]);
            return this._filterPolyfill.getFilterLogs(e);
          }
          initializeRelay() {
            return this._relay
              ? Promise.resolve(this._relay)
              : this._relayProvider().then(
                  (t) => (
                    t.setAccountsCallback((t) => this._setAddresses(t)),
                    t.setChainIdCallback((t) => {
                      this.updateProviderInfo(
                        this._jsonRpcUrl,
                        parseInt(t),
                        !0
                      );
                    }),
                    t.setJsonRpcUrlCallback((t) => {
                      this.updateProviderInfo(t, this._chainId, !0);
                    }),
                    (this._relay = t),
                    t
                  )
                );
          }
        }
        e.WalletLinkProvider = p;
      },
      79576: (t, e, r) => {
        "use strict";
        e.WalletLinkRelayEventManager = void 0;
        const n = r(51974);
        e.WalletLinkRelayEventManager = class {
          constructor() {
            (this._nextRequestId = 0), (this.callbacks = new Map());
          }
          makeRequestId() {
            this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
            const t = this._nextRequestId,
              e = n.prepend0x(t.toString(16));
            return this.callbacks.get(e) && this.callbacks.delete(e), t;
          }
        };
      },
      82221: (t, e) => {
        "use strict";
        function r() {
          return (t) => t;
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.RegExpString =
            e.IntNumber =
            e.BigIntString =
            e.AddressString =
            e.HexString =
            e.OpaqueType =
              void 0),
          (e.OpaqueType = r),
          (e.HexString = (t) => t),
          (e.AddressString = (t) => t),
          (e.BigIntString = (t) => t),
          (e.IntNumber = function (t) {
            return Math.floor(t);
          }),
          (e.RegExpString = (t) => t);
      },
      51974: function (t, e, r) {
        "use strict";
        var n = r(40226).Buffer,
          i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getFavicon =
            e.range =
            e.isBigNumber =
            e.ensureParsedJSONObject =
            e.ensureBN =
            e.ensureRegExpString =
            e.ensureIntNumber =
            e.ensureBuffer =
            e.ensureAddressString =
            e.ensureEvenLengthHexString =
            e.ensureHexString =
            e.isHexString =
            e.prepend0x =
            e.strip0x =
            e.has0xPrefix =
            e.hexStringFromIntNumber =
            e.intNumberFromHexString =
            e.bigIntStringFromBN =
            e.hexStringFromBuffer =
              void 0);
        const o = i(r(39298)),
          s = r(82221),
          a = /^[0-9]*$/,
          u = /^[a-f0-9]*$/;
        function h(t) {
          return t.startsWith("0x") || t.startsWith("0X");
        }
        function l(t) {
          return h(t) ? t.slice(2) : t;
        }
        function c(t) {
          return h(t) ? "0x" + t.slice(2) : "0x" + t;
        }
        function f(t) {
          if ("string" != typeof t) return !1;
          const e = l(t).toLowerCase();
          return u.test(e);
        }
        function d(t, e = !1) {
          if ("string" == typeof t) {
            const r = l(t).toLowerCase();
            if (u.test(r)) return s.HexString(e ? "0x" + r : r);
          }
          throw new Error(`"${t}" is not a hexadecimal string`);
        }
        function p(t, e = !1) {
          let r = d(t, !1);
          return (
            r.length % 2 == 1 && (r = s.HexString("0" + r)),
            e ? s.HexString("0x" + r) : r
          );
        }
        function g(t) {
          if ("number" == typeof t && Number.isInteger(t))
            return s.IntNumber(t);
          if ("string" == typeof t) {
            if (a.test(t)) return s.IntNumber(Number(t));
            if (f(t))
              return s.IntNumber(new o.default(p(t, !1), 16).toNumber());
          }
          throw new Error(`Not an integer: ${t}`);
        }
        function m(t) {
          if (null == t || "function" != typeof t.constructor) return !1;
          const { constructor: e } = t;
          return "function" == typeof e.config && "number" == typeof e.EUCLID;
        }
        (e.hexStringFromBuffer = function (t, e = !1) {
          const r = t.toString("hex");
          return s.HexString(e ? "0x" + r : r);
        }),
          (e.bigIntStringFromBN = function (t) {
            return s.BigIntString(t.toString(10));
          }),
          (e.intNumberFromHexString = function (t) {
            return s.IntNumber(new o.default(p(t, !1), 16).toNumber());
          }),
          (e.hexStringFromIntNumber = function (t) {
            return s.HexString("0x" + new o.default(t).toString(16));
          }),
          (e.has0xPrefix = h),
          (e.strip0x = l),
          (e.prepend0x = c),
          (e.isHexString = f),
          (e.ensureHexString = d),
          (e.ensureEvenLengthHexString = p),
          (e.ensureAddressString = function (t) {
            if ("string" == typeof t) {
              const e = l(t).toLowerCase();
              if (f(e) && 40 === e.length) return s.AddressString(c(e));
            }
            throw new Error(`Invalid Ethereum address: ${t}`);
          }),
          (e.ensureBuffer = function (t) {
            if (n.isBuffer(t)) return t;
            if ("string" == typeof t) {
              if (f(t)) {
                const e = p(t, !1);
                return n.from(e, "hex");
              }
              return n.from(t, "utf8");
            }
            throw new Error(`Not binary data: ${t}`);
          }),
          (e.ensureIntNumber = g),
          (e.ensureRegExpString = function (t) {
            if (t instanceof RegExp) return s.RegExpString(t.toString());
            throw new Error(`Not a RegExp: ${t}`);
          }),
          (e.ensureBN = function (t) {
            if (null != t && (o.default.isBN(t) || m(t)))
              return new o.default(t.toString(10), 10);
            if ("number" == typeof t) return new o.default(g(t));
            if ("string" == typeof t) {
              if (a.test(t)) return new o.default(t, 10);
              if (f(t)) return new o.default(p(t, !1), 16);
            }
            throw new Error(`Not an integer: ${t}`);
          }),
          (e.ensureParsedJSONObject = function (t) {
            if ("string" == typeof t) return JSON.parse(t);
            if ("object" == typeof t) return t;
            throw new Error(`Not a JSON string or an object: ${t}`);
          }),
          (e.isBigNumber = m),
          (e.range = function (t, e) {
            return Array.from({ length: e - t }, (e, r) => t + r);
          }),
          (e.getFavicon = function () {
            const t =
                document.querySelector('link[sizes="192x192"]') ||
                document.querySelector('link[sizes="180x180"]') ||
                document.querySelector('link[rel="icon"]') ||
                document.querySelector('link[rel="shortcut icon"]'),
              { protocol: e, host: r } = document.location,
              n = t ? t.getAttribute("href") : null;
            return !n || n.startsWith("javascript:")
              ? null
              : n.startsWith("http://") ||
                n.startsWith("https://") ||
                n.startsWith("data:")
              ? n
              : n.startsWith("//")
              ? e + n
              : `${e}//${r}${n}`;
          });
      },
      68315: (t, e, r) => {
        var n = r(40226).Buffer;
        const i = r(23277),
          o = r(39298);
        function s(t) {
          return t.startsWith("int[")
            ? "int256" + t.slice(3)
            : "int" === t
            ? "int256"
            : t.startsWith("uint[")
            ? "uint256" + t.slice(4)
            : "uint" === t
            ? "uint256"
            : t.startsWith("fixed[")
            ? "fixed128x128" + t.slice(5)
            : "fixed" === t
            ? "fixed128x128"
            : t.startsWith("ufixed[")
            ? "ufixed128x128" + t.slice(6)
            : "ufixed" === t
            ? "ufixed128x128"
            : t;
        }
        function a(t) {
          return parseInt(/^\D+(\d+)$/.exec(t)[1], 10);
        }
        function u(t) {
          var e = /^\D+(\d+)x(\d+)$/.exec(t);
          return [parseInt(e[1], 10), parseInt(e[2], 10)];
        }
        function h(t) {
          var e = t.match(/(.*)\[(.*?)\]$/);
          return e ? ("" === e[2] ? "dynamic" : parseInt(e[2], 10)) : null;
        }
        function l(t) {
          var e = typeof t;
          if ("string" === e)
            return i.isHexString(t)
              ? new o(i.stripHexPrefix(t), 16)
              : new o(t, 10);
          if ("number" === e) return new o(t);
          if (t.toArray) return t;
          throw new Error("Argument is not a number");
        }
        function c(t, e) {
          var r, s, f, d;
          if ("address" === t) return c("uint160", l(e));
          if ("bool" === t) return c("uint8", e ? 1 : 0);
          if ("string" === t) return c("bytes", new n(e, "utf8"));
          if (
            (function (t) {
              return t.lastIndexOf("]") === t.length - 1;
            })(t)
          ) {
            if (void 0 === e.length) throw new Error("Not an array?");
            if ("dynamic" !== (r = h(t)) && 0 !== r && e.length > r)
              throw new Error("Elements exceed array size: " + r);
            for (d in ((f = []),
            (t = t.slice(0, t.lastIndexOf("["))),
            "string" == typeof e && (e = JSON.parse(e)),
            e))
              f.push(c(t, e[d]));
            if ("dynamic" === r) {
              var p = c("uint256", e.length);
              f.unshift(p);
            }
            return n.concat(f);
          }
          if ("bytes" === t)
            return (
              (e = new n(e)),
              (f = n.concat([c("uint256", e.length), e])),
              e.length % 32 != 0 &&
                (f = n.concat([f, i.zeros(32 - (e.length % 32))])),
              f
            );
          if (t.startsWith("bytes")) {
            if ((r = a(t)) < 1 || r > 32)
              throw new Error("Invalid bytes<N> width: " + r);
            return i.setLengthRight(e, 32);
          }
          if (t.startsWith("uint")) {
            if ((r = a(t)) % 8 || r < 8 || r > 256)
              throw new Error("Invalid uint<N> width: " + r);
            if ((s = l(e)).bitLength() > r)
              throw new Error(
                "Supplied uint exceeds width: " + r + " vs " + s.bitLength()
              );
            if (s < 0) throw new Error("Supplied uint is negative");
            return s.toArrayLike(n, "be", 32);
          }
          if (t.startsWith("int")) {
            if ((r = a(t)) % 8 || r < 8 || r > 256)
              throw new Error("Invalid int<N> width: " + r);
            if ((s = l(e)).bitLength() > r)
              throw new Error(
                "Supplied int exceeds width: " + r + " vs " + s.bitLength()
              );
            return s.toTwos(256).toArrayLike(n, "be", 32);
          }
          if (t.startsWith("ufixed")) {
            if (((r = u(t)), (s = l(e)) < 0))
              throw new Error("Supplied ufixed is negative");
            return c("uint256", s.mul(new o(2).pow(new o(r[1]))));
          }
          if (t.startsWith("fixed"))
            return (r = u(t)), c("int256", l(e).mul(new o(2).pow(new o(r[1]))));
          throw new Error("Unsupported or invalid type: " + t);
        }
        function f(t) {
          return "string" === t || "bytes" === t || "dynamic" === h(t);
        }
        function d(t, e) {
          if (t.length !== e.length)
            throw new Error("Number of types are not matching the values");
          for (var r, o, u = [], h = 0; h < t.length; h++) {
            var c = s(t[h]),
              f = e[h];
            if ("bytes" === c) u.push(f);
            else if ("string" === c) u.push(new n(f, "utf8"));
            else if ("bool" === c) u.push(new n(f ? "01" : "00", "hex"));
            else if ("address" === c) u.push(i.setLength(f, 20));
            else if (c.startsWith("bytes")) {
              if ((r = a(c)) < 1 || r > 32)
                throw new Error("Invalid bytes<N> width: " + r);
              u.push(i.setLengthRight(f, r));
            } else if (c.startsWith("uint")) {
              if ((r = a(c)) % 8 || r < 8 || r > 256)
                throw new Error("Invalid uint<N> width: " + r);
              if ((o = l(f)).bitLength() > r)
                throw new Error(
                  "Supplied uint exceeds width: " + r + " vs " + o.bitLength()
                );
              u.push(o.toArrayLike(n, "be", r / 8));
            } else {
              if (!c.startsWith("int"))
                throw new Error("Unsupported or invalid type: " + c);
              if ((r = a(c)) % 8 || r < 8 || r > 256)
                throw new Error("Invalid int<N> width: " + r);
              if ((o = l(f)).bitLength() > r)
                throw new Error(
                  "Supplied int exceeds width: " + r + " vs " + o.bitLength()
                );
              u.push(o.toTwos(r).toArrayLike(n, "be", r / 8));
            }
          }
          return n.concat(u);
        }
        t.exports = {
          rawEncode: function (t, e) {
            var r = [],
              i = [],
              o = 32 * t.length;
            for (var a in t) {
              var u = s(t[a]),
                h = c(u, e[a]);
              f(u)
                ? (r.push(c("uint256", o)), i.push(h), (o += h.length))
                : r.push(h);
            }
            return n.concat(r.concat(i));
          },
          solidityPack: d,
          soliditySHA3: function (t, e) {
            return i.keccak(d(t, e));
          },
        };
      },
      88752: (t, e, r) => {
        var n = r(40226).Buffer;
        const i = r(23277),
          o = r(68315),
          s = {
            type: "object",
            properties: {
              types: {
                type: "object",
                additionalProperties: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      name: { type: "string" },
                      type: { type: "string" },
                    },
                    required: ["name", "type"],
                  },
                },
              },
              primaryType: { type: "string" },
              domain: { type: "object" },
              message: { type: "object" },
            },
            required: ["types", "primaryType", "domain", "message"],
          },
          a = {
            encodeData(t, e, r, s = !0) {
              const a = ["bytes32"],
                u = [this.hashType(t, r)];
              if (s) {
                const h = (t, e, a) => {
                  if (void 0 !== r[e])
                    return [
                      "bytes32",
                      null == a
                        ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                        : i.keccak(this.encodeData(e, a, r, s)),
                    ];
                  if (void 0 === a)
                    throw new Error(
                      `missing value for field ${t} of type ${e}`
                    );
                  if ("bytes" === e) return ["bytes32", i.keccak(a)];
                  if ("string" === e)
                    return (
                      "string" == typeof a && (a = n.from(a, "utf8")),
                      ["bytes32", i.keccak(a)]
                    );
                  if (e.lastIndexOf("]") === e.length - 1) {
                    const r = e.slice(0, e.lastIndexOf("[")),
                      n = a.map((e) => h(t, r, e));
                    return [
                      "bytes32",
                      i.keccak(
                        o.rawEncode(
                          n.map(([t]) => t),
                          n.map(([, t]) => t)
                        )
                      ),
                    ];
                  }
                  return [e, a];
                };
                for (const n of r[t]) {
                  const [t, r] = h(n.name, n.type, e[n.name]);
                  a.push(t), u.push(r);
                }
              } else
                for (const o of r[t]) {
                  let t = e[o.name];
                  if (void 0 !== t)
                    if ("bytes" === o.type)
                      a.push("bytes32"), (t = i.keccak(t)), u.push(t);
                    else if ("string" === o.type)
                      a.push("bytes32"),
                        "string" == typeof t && (t = n.from(t, "utf8")),
                        (t = i.keccak(t)),
                        u.push(t);
                    else if (void 0 !== r[o.type])
                      a.push("bytes32"),
                        (t = i.keccak(this.encodeData(o.type, t, r, s))),
                        u.push(t);
                    else {
                      if (o.type.lastIndexOf("]") === o.type.length - 1)
                        throw new Error(
                          "Arrays currently unimplemented in encodeData"
                        );
                      a.push(o.type), u.push(t);
                    }
                }
              return o.rawEncode(a, u);
            },
            encodeType(t, e) {
              let r = "",
                n = this.findTypeDependencies(t, e).filter((e) => e !== t);
              n = [t].concat(n.sort());
              for (const t of n) {
                if (!e[t])
                  throw new Error("No type definition specified: " + t);
                r +=
                  t +
                  "(" +
                  e[t].map(({ name: t, type: e }) => e + " " + t).join(",") +
                  ")";
              }
              return r;
            },
            findTypeDependencies(t, e, r = []) {
              if (((t = t.match(/^\w*/)[0]), r.includes(t) || void 0 === e[t]))
                return r;
              r.push(t);
              for (const n of e[t])
                for (const t of this.findTypeDependencies(n.type, e, r))
                  !r.includes(t) && r.push(t);
              return r;
            },
            hashStruct(t, e, r, n = !0) {
              return i.keccak(this.encodeData(t, e, r, n));
            },
            hashType(t, e) {
              return i.keccak(this.encodeType(t, e));
            },
            sanitizeData(t) {
              const e = {};
              for (const r in s.properties) t[r] && (e[r] = t[r]);
              return (
                e.types &&
                  (e.types = Object.assign({ EIP712Domain: [] }, e.types)),
                e
              );
            },
            hash(t, e = !0) {
              const r = this.sanitizeData(t),
                o = [n.from("1901", "hex")];
              return (
                o.push(this.hashStruct("EIP712Domain", r.domain, r.types, e)),
                "EIP712Domain" !== r.primaryType &&
                  o.push(this.hashStruct(r.primaryType, r.message, r.types, e)),
                i.keccak(n.concat(o))
              );
            },
          };
        t.exports = {
          TYPED_MESSAGE_SCHEMA: s,
          TypedDataUtils: a,
          hashForSignTypedDataLegacy: function (t) {
            return (function (t) {
              const e = new Error("Expect argument to be non-empty array");
              if ("object" != typeof t || !t.length) throw e;
              const r = t.map(function (t) {
                  return "bytes" === t.type ? i.toBuffer(t.value) : t.value;
                }),
                n = t.map(function (t) {
                  return t.type;
                }),
                s = t.map(function (t) {
                  if (!t.name) throw e;
                  return t.type + " " + t.name;
                });
              return o.soliditySHA3(
                ["bytes32", "bytes32"],
                [
                  o.soliditySHA3(new Array(t.length).fill("string"), s),
                  o.soliditySHA3(n, r),
                ]
              );
            })(t.data);
          },
          hashForSignTypedData_v3: function (t) {
            return a.hash(t.data, !1);
          },
          hashForSignTypedData_v4: function (t) {
            return a.hash(t.data);
          },
        };
      },
      23277: (t, e, r) => {
        var n = r(40226).Buffer;
        const i = r(49443),
          o = r(39298);
        function s(t) {
          return n.allocUnsafe(t).fill(0);
        }
        function a(t, e, r) {
          const n = s(e);
          return (
            (t = u(t)),
            r
              ? t.length < e
                ? (t.copy(n), n)
                : t.slice(0, e)
              : t.length < e
              ? (t.copy(n, e - t.length), n)
              : t.slice(-e)
          );
        }
        function u(t) {
          if (!n.isBuffer(t))
            if (Array.isArray(t)) t = n.from(t);
            else if ("string" == typeof t)
              t = h(t)
                ? n.from((e = l(t)).length % 2 ? "0" + e : e, "hex")
                : n.from(t);
            else if ("number" == typeof t) t = intToBuffer(t);
            else if (null == t) t = n.allocUnsafe(0);
            else if (o.isBN(t)) t = t.toArrayLike(n);
            else {
              if (!t.toArray) throw new Error("invalid type");
              t = n.from(t.toArray());
            }
          var e;
          return t;
        }
        function h(t) {
          return "string" == typeof t && t.match(/^0x[0-9A-Fa-f]*$/);
        }
        function l(t) {
          return "string" == typeof t && t.startsWith("0x") ? t.slice(2) : t;
        }
        t.exports = {
          zeros: s,
          setLength: a,
          setLengthRight: function (t, e) {
            return a(t, e, !0);
          },
          isHexString: h,
          stripHexPrefix: l,
          toBuffer: u,
          bufferToHex: function (t) {
            return "0x" + (t = u(t)).toString("hex");
          },
          keccak: function (t, e) {
            return (
              (t = u(t)),
              e || (e = 256),
              i("keccak" + e)
                .update(t)
                .digest()
            );
          },
        };
      },
      49443: (t, e, r) => {
        t.exports = r(36729)(r(97322));
      },
      36729: (t, e, r) => {
        const n = r(2e4),
          i = r(15793);
        t.exports = function (t) {
          const e = n(t),
            r = i(t);
          return function (t, n) {
            switch ("string" == typeof t ? t.toLowerCase() : t) {
              case "keccak224":
                return new e(1152, 448, null, 224, n);
              case "keccak256":
                return new e(1088, 512, null, 256, n);
              case "keccak384":
                return new e(832, 768, null, 384, n);
              case "keccak512":
                return new e(576, 1024, null, 512, n);
              case "sha3-224":
                return new e(1152, 448, 6, 224, n);
              case "sha3-256":
                return new e(1088, 512, 6, 256, n);
              case "sha3-384":
                return new e(832, 768, 6, 384, n);
              case "sha3-512":
                return new e(576, 1024, 6, 512, n);
              case "shake128":
                return new r(1344, 256, 31, n);
              case "shake256":
                return new r(1088, 512, 31, n);
              default:
                throw new Error("Invald algorithm: " + t);
            }
          };
        };
      },
      2e4: (t, e, r) => {
        var n = r(40226).Buffer;
        const { Transform: i } = r(42830);
        t.exports = (t) =>
          class e extends i {
            constructor(e, r, n, i, o) {
              super(o),
                (this._rate = e),
                (this._capacity = r),
                (this._delimitedSuffix = n),
                (this._hashBitLength = i),
                (this._options = o),
                (this._state = new t()),
                this._state.initialize(e, r),
                (this._finalized = !1);
            }
            _transform(t, e, r) {
              let n = null;
              try {
                this.update(t, e);
              } catch (t) {
                n = t;
              }
              r(n);
            }
            _flush(t) {
              let e = null;
              try {
                this.push(this.digest());
              } catch (t) {
                e = t;
              }
              t(e);
            }
            update(t, e) {
              if (!n.isBuffer(t) && "string" != typeof t)
                throw new TypeError("Data must be a string or a buffer");
              if (this._finalized) throw new Error("Digest already called");
              return (
                n.isBuffer(t) || (t = n.from(t, e)), this._state.absorb(t), this
              );
            }
            digest(t) {
              if (this._finalized) throw new Error("Digest already called");
              (this._finalized = !0),
                this._delimitedSuffix &&
                  this._state.absorbLastFewBits(this._delimitedSuffix);
              let e = this._state.squeeze(this._hashBitLength / 8);
              return void 0 !== t && (e = e.toString(t)), this._resetState(), e;
            }
            _resetState() {
              return this._state.initialize(this._rate, this._capacity), this;
            }
            _clone() {
              const t = new e(
                this._rate,
                this._capacity,
                this._delimitedSuffix,
                this._hashBitLength,
                this._options
              );
              return (
                this._state.copy(t._state), (t._finalized = this._finalized), t
              );
            }
          };
      },
      15793: (t, e, r) => {
        var n = r(40226).Buffer;
        const { Transform: i } = r(42830);
        t.exports = (t) =>
          class e extends i {
            constructor(e, r, n, i) {
              super(i),
                (this._rate = e),
                (this._capacity = r),
                (this._delimitedSuffix = n),
                (this._options = i),
                (this._state = new t()),
                this._state.initialize(e, r),
                (this._finalized = !1);
            }
            _transform(t, e, r) {
              let n = null;
              try {
                this.update(t, e);
              } catch (t) {
                n = t;
              }
              r(n);
            }
            _flush() {}
            _read(t) {
              this.push(this.squeeze(t));
            }
            update(t, e) {
              if (!n.isBuffer(t) && "string" != typeof t)
                throw new TypeError("Data must be a string or a buffer");
              if (this._finalized) throw new Error("Squeeze already called");
              return (
                n.isBuffer(t) || (t = n.from(t, e)), this._state.absorb(t), this
              );
            }
            squeeze(t, e) {
              this._finalized ||
                ((this._finalized = !0),
                this._state.absorbLastFewBits(this._delimitedSuffix));
              let r = this._state.squeeze(t);
              return void 0 !== e && (r = r.toString(e)), r;
            }
            _resetState() {
              return this._state.initialize(this._rate, this._capacity), this;
            }
            _clone() {
              const t = new e(
                this._rate,
                this._capacity,
                this._delimitedSuffix,
                this._options
              );
              return (
                this._state.copy(t._state), (t._finalized = this._finalized), t
              );
            }
          };
      },
      38396: (t, e) => {
        const r = [
          1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
          2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136,
          0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648,
          32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128,
          2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648,
          32896, 2147483648, 2147483649, 0, 2147516424, 2147483648,
        ];
        e.p1600 = function (t) {
          for (let e = 0; e < 24; ++e) {
            const n = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40],
              i = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41],
              o = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42],
              s = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43],
              a = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44],
              u = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45],
              h = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46],
              l = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47],
              c = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48],
              f = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49];
            let d = c ^ ((o << 1) | (s >>> 31)),
              p = f ^ ((s << 1) | (o >>> 31));
            const g = t[0] ^ d,
              m = t[1] ^ p,
              y = t[10] ^ d,
              v = t[11] ^ p,
              w = t[20] ^ d,
              b = t[21] ^ p,
              _ = t[30] ^ d,
              E = t[31] ^ p,
              M = t[40] ^ d,
              S = t[41] ^ p;
            (d = n ^ ((a << 1) | (u >>> 31))),
              (p = i ^ ((u << 1) | (a >>> 31)));
            const R = t[2] ^ d,
              T = t[3] ^ p,
              A = t[12] ^ d,
              O = t[13] ^ p,
              P = t[22] ^ d,
              N = t[23] ^ p,
              k = t[32] ^ d,
              I = t[33] ^ p,
              B = t[42] ^ d,
              x = t[43] ^ p;
            (d = o ^ ((h << 1) | (l >>> 31))),
              (p = s ^ ((l << 1) | (h >>> 31)));
            const C = t[4] ^ d,
              L = t[5] ^ p,
              j = t[14] ^ d,
              F = t[15] ^ p,
              U = t[24] ^ d,
              q = t[25] ^ p,
              D = t[34] ^ d,
              z = t[35] ^ p,
              H = t[44] ^ d,
              J = t[45] ^ p;
            (d = a ^ ((c << 1) | (f >>> 31))),
              (p = u ^ ((f << 1) | (c >>> 31)));
            const Y = t[6] ^ d,
              $ = t[7] ^ p,
              W = t[16] ^ d,
              G = t[17] ^ p,
              V = t[26] ^ d,
              K = t[27] ^ p,
              Z = t[36] ^ d,
              Q = t[37] ^ p,
              X = t[46] ^ d,
              tt = t[47] ^ p;
            (d = h ^ ((n << 1) | (i >>> 31))),
              (p = l ^ ((i << 1) | (n >>> 31)));
            const et = t[8] ^ d,
              rt = t[9] ^ p,
              nt = t[18] ^ d,
              it = t[19] ^ p,
              ot = t[28] ^ d,
              st = t[29] ^ p,
              at = t[38] ^ d,
              ut = t[39] ^ p,
              ht = t[48] ^ d,
              lt = t[49] ^ p,
              ct = g,
              ft = m,
              dt = (v << 4) | (y >>> 28),
              pt = (y << 4) | (v >>> 28),
              gt = (w << 3) | (b >>> 29),
              mt = (b << 3) | (w >>> 29),
              yt = (E << 9) | (_ >>> 23),
              vt = (_ << 9) | (E >>> 23),
              wt = (M << 18) | (S >>> 14),
              bt = (S << 18) | (M >>> 14),
              _t = (R << 1) | (T >>> 31),
              Et = (T << 1) | (R >>> 31),
              Mt = (O << 12) | (A >>> 20),
              St = (A << 12) | (O >>> 20),
              Rt = (P << 10) | (N >>> 22),
              Tt = (N << 10) | (P >>> 22),
              At = (I << 13) | (k >>> 19),
              Ot = (k << 13) | (I >>> 19),
              Pt = (B << 2) | (x >>> 30),
              Nt = (x << 2) | (B >>> 30),
              kt = (L << 30) | (C >>> 2),
              It = (C << 30) | (L >>> 2),
              Bt = (j << 6) | (F >>> 26),
              xt = (F << 6) | (j >>> 26),
              Ct = (q << 11) | (U >>> 21),
              Lt = (U << 11) | (q >>> 21),
              jt = (D << 15) | (z >>> 17),
              Ft = (z << 15) | (D >>> 17),
              Ut = (J << 29) | (H >>> 3),
              qt = (H << 29) | (J >>> 3),
              Dt = (Y << 28) | ($ >>> 4),
              zt = ($ << 28) | (Y >>> 4),
              Ht = (G << 23) | (W >>> 9),
              Jt = (W << 23) | (G >>> 9),
              Yt = (V << 25) | (K >>> 7),
              $t = (K << 25) | (V >>> 7),
              Wt = (Z << 21) | (Q >>> 11),
              Gt = (Q << 21) | (Z >>> 11),
              Vt = (tt << 24) | (X >>> 8),
              Kt = (X << 24) | (tt >>> 8),
              Zt = (et << 27) | (rt >>> 5),
              Qt = (rt << 27) | (et >>> 5),
              Xt = (nt << 20) | (it >>> 12),
              te = (it << 20) | (nt >>> 12),
              ee = (st << 7) | (ot >>> 25),
              re = (ot << 7) | (st >>> 25),
              ne = (at << 8) | (ut >>> 24),
              ie = (ut << 8) | (at >>> 24),
              oe = (ht << 14) | (lt >>> 18),
              se = (lt << 14) | (ht >>> 18);
            (t[0] = ct ^ (~Mt & Ct)),
              (t[1] = ft ^ (~St & Lt)),
              (t[10] = Dt ^ (~Xt & gt)),
              (t[11] = zt ^ (~te & mt)),
              (t[20] = _t ^ (~Bt & Yt)),
              (t[21] = Et ^ (~xt & $t)),
              (t[30] = Zt ^ (~dt & Rt)),
              (t[31] = Qt ^ (~pt & Tt)),
              (t[40] = kt ^ (~Ht & ee)),
              (t[41] = It ^ (~Jt & re)),
              (t[2] = Mt ^ (~Ct & Wt)),
              (t[3] = St ^ (~Lt & Gt)),
              (t[12] = Xt ^ (~gt & At)),
              (t[13] = te ^ (~mt & Ot)),
              (t[22] = Bt ^ (~Yt & ne)),
              (t[23] = xt ^ (~$t & ie)),
              (t[32] = dt ^ (~Rt & jt)),
              (t[33] = pt ^ (~Tt & Ft)),
              (t[42] = Ht ^ (~ee & yt)),
              (t[43] = Jt ^ (~re & vt)),
              (t[4] = Ct ^ (~Wt & oe)),
              (t[5] = Lt ^ (~Gt & se)),
              (t[14] = gt ^ (~At & Ut)),
              (t[15] = mt ^ (~Ot & qt)),
              (t[24] = Yt ^ (~ne & wt)),
              (t[25] = $t ^ (~ie & bt)),
              (t[34] = Rt ^ (~jt & Vt)),
              (t[35] = Tt ^ (~Ft & Kt)),
              (t[44] = ee ^ (~yt & Pt)),
              (t[45] = re ^ (~vt & Nt)),
              (t[6] = Wt ^ (~oe & ct)),
              (t[7] = Gt ^ (~se & ft)),
              (t[16] = At ^ (~Ut & Dt)),
              (t[17] = Ot ^ (~qt & zt)),
              (t[26] = ne ^ (~wt & _t)),
              (t[27] = ie ^ (~bt & Et)),
              (t[36] = jt ^ (~Vt & Zt)),
              (t[37] = Ft ^ (~Kt & Qt)),
              (t[46] = yt ^ (~Pt & kt)),
              (t[47] = vt ^ (~Nt & It)),
              (t[8] = oe ^ (~ct & Mt)),
              (t[9] = se ^ (~ft & St)),
              (t[18] = Ut ^ (~Dt & Xt)),
              (t[19] = qt ^ (~zt & te)),
              (t[28] = wt ^ (~_t & Bt)),
              (t[29] = bt ^ (~Et & xt)),
              (t[38] = Vt ^ (~Zt & dt)),
              (t[39] = Kt ^ (~Qt & pt)),
              (t[48] = Pt ^ (~kt & Ht)),
              (t[49] = Nt ^ (~It & Jt)),
              (t[0] ^= r[2 * e]),
              (t[1] ^= r[2 * e + 1]);
          }
        };
      },
      97322: (t, e, r) => {
        var n = r(40226).Buffer;
        const i = r(38396);
        function o() {
          (this.state = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0,
          ]),
            (this.blockSize = null),
            (this.count = 0),
            (this.squeezing = !1);
        }
        (o.prototype.initialize = function (t, e) {
          for (let t = 0; t < 50; ++t) this.state[t] = 0;
          (this.blockSize = t / 8), (this.count = 0), (this.squeezing = !1);
        }),
          (o.prototype.absorb = function (t) {
            for (let e = 0; e < t.length; ++e)
              (this.state[~~(this.count / 4)] ^=
                t[e] << ((this.count % 4) * 8)),
                (this.count += 1),
                this.count === this.blockSize &&
                  (i.p1600(this.state), (this.count = 0));
          }),
          (o.prototype.absorbLastFewBits = function (t) {
            (this.state[~~(this.count / 4)] ^= t << ((this.count % 4) * 8)),
              0 != (128 & t) &&
                this.count === this.blockSize - 1 &&
                i.p1600(this.state),
              (this.state[~~((this.blockSize - 1) / 4)] ^=
                128 << (((this.blockSize - 1) % 4) * 8)),
              i.p1600(this.state),
              (this.count = 0),
              (this.squeezing = !0);
          }),
          (o.prototype.squeeze = function (t) {
            this.squeezing || this.absorbLastFewBits(1);
            const e = n.alloc(t);
            for (let r = 0; r < t; ++r)
              (e[r] =
                (this.state[~~(this.count / 4)] >>> ((this.count % 4) * 8)) &
                255),
                (this.count += 1),
                this.count === this.blockSize &&
                  (i.p1600(this.state), (this.count = 0));
            return e;
          }),
          (o.prototype.copy = function (t) {
            for (let e = 0; e < 50; ++e) t.state[e] = this.state[e];
            (t.blockSize = this.blockSize),
              (t.count = this.count),
              (t.squeezing = this.squeezing);
          }),
          (t.exports = o);
      },
      58982: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(53332);
        function i(t, e, r) {
          try {
            Reflect.apply(t, e, r);
          } catch (t) {
            setTimeout(() => {
              throw t;
            });
          }
        }
        class o extends n.EventEmitter {
          emit(t, ...e) {
            let r = "error" === t;
            const n = this._events;
            if (void 0 !== n) r = r && void 0 === n.error;
            else if (!r) return !1;
            if (r) {
              let t;
              if ((e.length > 0 && ([t] = e), t instanceof Error)) throw t;
              const r = new Error(
                "Unhandled error." + (t ? ` (${t.message})` : "")
              );
              throw ((r.context = t), r);
            }
            const o = n[t];
            if (void 0 === o) return !1;
            if ("function" == typeof o) i(o, this, e);
            else {
              const t = o.length,
                r = (function (t) {
                  const e = t.length,
                    r = new Array(e);
                  for (let n = 0; n < e; n += 1) r[n] = t[n];
                  return r;
                })(o);
              for (let n = 0; n < t; n += 1) i(r[n], this, e);
            }
            return !0;
          }
        }
        e.default = o;
      },
      40684: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(83227),
          i = r(43491),
          o = (function () {
            function t() {
              this._semaphore = new i.default(1);
            }
            return (
              (t.prototype.acquire = function () {
                return n.__awaiter(this, void 0, void 0, function () {
                  var t;
                  return n.__generator(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, this._semaphore.acquire()];
                      case 1:
                        return (t = e.sent()), [2, t[1]];
                    }
                  });
                });
              }),
              (t.prototype.runExclusive = function (t) {
                return this._semaphore.runExclusive(function () {
                  return t();
                });
              }),
              (t.prototype.isLocked = function () {
                return this._semaphore.isLocked();
              }),
              (t.prototype.release = function () {
                this._semaphore.release();
              }),
              t
            );
          })();
        e.default = o;
      },
      43491: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(83227),
          i = (function () {
            function t(t) {
              if (((this._maxConcurrency = t), (this._queue = []), t <= 0))
                throw new Error(
                  "semaphore must be initialized to a positive value"
                );
              this._value = t;
            }
            return (
              (t.prototype.acquire = function () {
                var t = this,
                  e = this.isLocked(),
                  r = new Promise(function (e) {
                    return t._queue.push(e);
                  });
                return e || this._dispatch(), r;
              }),
              (t.prototype.runExclusive = function (t) {
                return n.__awaiter(this, void 0, void 0, function () {
                  var e, r, i;
                  return n.__generator(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, this.acquire()];
                      case 1:
                        (e = n.sent()), (r = e[0]), (i = e[1]), (n.label = 2);
                      case 2:
                        return n.trys.push([2, , 4, 5]), [4, t(r)];
                      case 3:
                        return [2, n.sent()];
                      case 4:
                        return i(), [7];
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.isLocked = function () {
                return this._value <= 0;
              }),
              (t.prototype.release = function () {
                if (this._maxConcurrency > 1)
                  throw new Error(
                    "this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead"
                  );
                if (this._currentReleaser) {
                  var t = this._currentReleaser;
                  (this._currentReleaser = void 0), t();
                }
              }),
              (t.prototype._dispatch = function () {
                var t = this,
                  e = this._queue.shift();
                if (e) {
                  var r = !1;
                  (this._currentReleaser = function () {
                    r || ((r = !0), t._value++, t._dispatch());
                  }),
                    e([this._value--, this._currentReleaser]);
                }
              }),
              t
            );
          })();
        e.default = i;
      },
      48311: (t, e, r) => {
        "use strict";
        e.WU = void 0;
        var n = r(40684);
        Object.defineProperty(e, "WU", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        });
        var i = r(43491);
        var o = r(63656);
      },
      63656: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.withTimeout = void 0);
        var n = r(83227);
        e.withTimeout = function (t, e, r) {
          var i = this;
          return (
            void 0 === r && (r = new Error("timeout")),
            {
              acquire: function () {
                return new Promise(function (o, s) {
                  return n.__awaiter(i, void 0, void 0, function () {
                    var i, a;
                    return n.__generator(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            (i = !1),
                            setTimeout(function () {
                              (i = !0), s(r);
                            }, e),
                            [4, t.acquire()]
                          );
                        case 1:
                          return (
                            (a = n.sent()),
                            i ? (Array.isArray(a) ? a[1] : a)() : o(a),
                            [2]
                          );
                      }
                    });
                  });
                });
              },
              runExclusive: function (t) {
                return n.__awaiter(this, void 0, void 0, function () {
                  var e, r;
                  return n.__generator(this, function (n) {
                    switch (n.label) {
                      case 0:
                        (e = function () {}), (n.label = 1);
                      case 1:
                        return n.trys.push([1, , 7, 8]), [4, this.acquire()];
                      case 2:
                        return (
                          (r = n.sent()),
                          Array.isArray(r) ? ((e = r[1]), [4, t(r[0])]) : [3, 4]
                        );
                      case 3:
                        return [2, n.sent()];
                      case 4:
                        return (e = r), [4, t()];
                      case 5:
                        return [2, n.sent()];
                      case 6:
                        return [3, 8];
                      case 7:
                        return e(), [7];
                      case 8:
                        return [2];
                    }
                  });
                });
              },
              release: function () {
                t.release();
              },
              isLocked: function () {
                return t.isLocked();
              },
            }
          );
        };
      },
      40243: (t, e) => {
        "use strict";
        (e.byteLength = function (t) {
          var e = u(t),
            r = e[0],
            n = e[1];
          return (3 * (r + n)) / 4 - n;
        }),
          (e.toByteArray = function (t) {
            var e,
              r,
              o = u(t),
              s = o[0],
              a = o[1],
              h = new i(
                (function (t, e, r) {
                  return (3 * (e + r)) / 4 - r;
                })(0, s, a)
              ),
              l = 0,
              c = a > 0 ? s - 4 : s;
            for (r = 0; r < c; r += 4)
              (e =
                (n[t.charCodeAt(r)] << 18) |
                (n[t.charCodeAt(r + 1)] << 12) |
                (n[t.charCodeAt(r + 2)] << 6) |
                n[t.charCodeAt(r + 3)]),
                (h[l++] = (e >> 16) & 255),
                (h[l++] = (e >> 8) & 255),
                (h[l++] = 255 & e);
            2 === a &&
              ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
              (h[l++] = 255 & e));
            1 === a &&
              ((e =
                (n[t.charCodeAt(r)] << 10) |
                (n[t.charCodeAt(r + 1)] << 4) |
                (n[t.charCodeAt(r + 2)] >> 2)),
              (h[l++] = (e >> 8) & 255),
              (h[l++] = 255 & e));
            return h;
          }),
          (e.fromByteArray = function (t) {
            for (
              var e,
                n = t.length,
                i = n % 3,
                o = [],
                s = 16383,
                a = 0,
                u = n - i;
              a < u;
              a += s
            )
              o.push(h(t, a, a + s > u ? u : a + s));
            1 === i
              ? ((e = t[n - 1]), o.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
              : 2 === i &&
                ((e = (t[n - 2] << 8) + t[n - 1]),
                o.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="));
            return o.join("");
          });
        for (
          var r = [],
            n = [],
            i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            o =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            s = 0,
            a = o.length;
          s < a;
          ++s
        )
          (r[s] = o[s]), (n[o.charCodeAt(s)] = s);
        function u(t) {
          var e = t.length;
          if (e % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var r = t.indexOf("=");
          return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
        }
        function h(t, e, n) {
          for (var i, o, s = [], a = e; a < n; a += 3)
            (i =
              ((t[a] << 16) & 16711680) +
              ((t[a + 1] << 8) & 65280) +
              (255 & t[a + 2])),
              s.push(
                r[((o = i) >> 18) & 63] +
                  r[(o >> 12) & 63] +
                  r[(o >> 6) & 63] +
                  r[63 & o]
              );
          return s.join("");
        }
        (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
      },
      39298: function (t, e, r) {
        !(function (t, e) {
          "use strict";
          function n(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function i(t, e) {
            t.super_ = e;
            var r = function () {};
            (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t);
          }
          function o(t, e, r) {
            if (o.isBN(t)) return t;
            (this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
                this._init(t || 0, e || 10, r || "be"));
          }
          var s;
          "object" == typeof t ? (t.exports = o) : (e.BN = o),
            (o.BN = o),
            (o.wordSize = 26);
          try {
            s =
              "undefined" != typeof window && void 0 !== window.Buffer
                ? window.Buffer
                : r(42602).Buffer;
          } catch (t) {}
          function a(t, e) {
            var r = t.charCodeAt(e);
            return r >= 48 && r <= 57
              ? r - 48
              : r >= 65 && r <= 70
              ? r - 55
              : r >= 97 && r <= 102
              ? r - 87
              : void n(!1, "Invalid character in " + t);
          }
          function u(t, e, r) {
            var n = a(t, r);
            return r - 1 >= e && (n |= a(t, r - 1) << 4), n;
          }
          function h(t, e, r, i) {
            for (
              var o = 0, s = 0, a = Math.min(t.length, r), u = e;
              u < a;
              u++
            ) {
              var h = t.charCodeAt(u) - 48;
              (o *= i),
                (s = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h),
                n(h >= 0 && s < i, "Invalid character"),
                (o += s);
            }
            return o;
          }
          function l(t, e) {
            (t.words = e.words),
              (t.length = e.length),
              (t.negative = e.negative),
              (t.red = e.red);
          }
          if (
            ((o.isBN = function (t) {
              return (
                t instanceof o ||
                (null !== t &&
                  "object" == typeof t &&
                  t.constructor.wordSize === o.wordSize &&
                  Array.isArray(t.words))
              );
            }),
            (o.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (o.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (o.prototype._init = function (t, e, r) {
              if ("number" == typeof t) return this._initNumber(t, e, r);
              if ("object" == typeof t) return this._initArray(t, e, r);
              "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
              var i = 0;
              "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
                (i++, (this.negative = 1)),
                i < t.length &&
                  (16 === e
                    ? this._parseHex(t, i, r)
                    : (this._parseBase(t, e, i),
                      "le" === r && this._initArray(this.toArray(), e, r)));
            }),
            (o.prototype._initNumber = function (t, e, r) {
              t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                  ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                    (this.length = 2))
                  : (n(t < 9007199254740992),
                    (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                "le" === r && this._initArray(this.toArray(), e, r);
            }),
            (o.prototype._initArray = function (t, e, r) {
              if ((n("number" == typeof t.length), t.length <= 0))
                return (this.words = [0]), (this.length = 1), this;
              (this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var o,
                s,
                a = 0;
              if ("be" === r)
                for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                  (s = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                    (this.words[o] |= (s << a) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24) >= 26 && ((a -= 26), o++);
              else if ("le" === r)
                for (i = 0, o = 0; i < t.length; i += 3)
                  (s = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                    (this.words[o] |= (s << a) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24) >= 26 && ((a -= 26), o++);
              return this._strip();
            }),
            (o.prototype._parseHex = function (t, e, r) {
              (this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var i,
                o = 0,
                s = 0;
              if ("be" === r)
                for (n = t.length - 1; n >= e; n -= 2)
                  (i = u(t, e, n) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                      : (o += 8);
              else
                for (
                  n = (t.length - e) % 2 == 0 ? e + 1 : e;
                  n < t.length;
                  n += 2
                )
                  (i = u(t, e, n) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                      : (o += 8);
              this._strip();
            }),
            (o.prototype._parseBase = function (t, e, r) {
              (this.words = [0]), (this.length = 1);
              for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
              n--, (i = (i / e) | 0);
              for (
                var o = t.length - r,
                  s = o % n,
                  a = Math.min(o, o - s) + r,
                  u = 0,
                  l = r;
                l < a;
                l += n
              )
                (u = h(t, l, l + n, e)),
                  this.imuln(i),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u);
              if (0 !== s) {
                var c = 1;
                for (u = h(t, l, t.length, e), l = 0; l < s; l++) c *= e;
                this.imuln(c),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u);
              }
              this._strip();
            }),
            (o.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              (t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red);
            }),
            (o.prototype._move = function (t) {
              l(t, this);
            }),
            (o.prototype.clone = function () {
              var t = new o(null);
              return this.copy(t), t;
            }),
            (o.prototype._expand = function (t) {
              for (; this.length < t; ) this.words[this.length++] = 0;
              return this;
            }),
            (o.prototype._strip = function () {
              for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                this.length--;
              return this._normSign();
            }),
            (o.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            "undefined" != typeof Symbol && "function" == typeof Symbol.for)
          )
            try {
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = c;
            } catch (t) {
              o.prototype.inspect = c;
            }
          else o.prototype.inspect = c;
          function c() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var f = [
              "",
              "0",
              "00",
              "000",
              "0000",
              "00000",
              "000000",
              "0000000",
              "00000000",
              "000000000",
              "0000000000",
              "00000000000",
              "000000000000",
              "0000000000000",
              "00000000000000",
              "000000000000000",
              "0000000000000000",
              "00000000000000000",
              "000000000000000000",
              "0000000000000000000",
              "00000000000000000000",
              "000000000000000000000",
              "0000000000000000000000",
              "00000000000000000000000",
              "000000000000000000000000",
              "0000000000000000000000000",
            ],
            d = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            p = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          (o.prototype.toString = function (t, e) {
            var r;
            if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
              r = "";
              for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                var a = this.words[s],
                  u = (16777215 & ((a << i) | o)).toString(16);
                (r =
                  0 !== (o = (a >>> (24 - i)) & 16777215) ||
                  s !== this.length - 1
                    ? f[6 - u.length] + u + r
                    : u + r),
                  (i += 2) >= 26 && ((i -= 26), s--);
              }
              for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; )
                r = "0" + r;
              return 0 !== this.negative && (r = "-" + r), r;
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var h = d[t],
                l = p[t];
              r = "";
              var c = this.clone();
              for (c.negative = 0; !c.isZero(); ) {
                var g = c.modrn(l).toString(t);
                r = (c = c.idivn(l)).isZero() ? g + r : f[h - g.length] + g + r;
              }
              for (this.isZero() && (r = "0" + r); r.length % e != 0; )
                r = "0" + r;
              return 0 !== this.negative && (r = "-" + r), r;
            }
            n(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (t += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 &&
                    n(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
              );
            }),
            (o.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            s &&
              (o.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(s, t, e);
              }),
            (o.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            });
          function g(t, e, r) {
            r.negative = e.negative ^ t.negative;
            var n = (t.length + e.length) | 0;
            (r.length = n), (n = (n - 1) | 0);
            var i = 0 | t.words[0],
              o = 0 | e.words[0],
              s = i * o,
              a = 67108863 & s,
              u = (s / 67108864) | 0;
            r.words[0] = a;
            for (var h = 1; h < n; h++) {
              for (
                var l = u >>> 26,
                  c = 67108863 & u,
                  f = Math.min(h, e.length - 1),
                  d = Math.max(0, h - t.length + 1);
                d <= f;
                d++
              ) {
                var p = (h - d) | 0;
                (l +=
                  ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + c) /
                    67108864) |
                  0),
                  (c = 67108863 & s);
              }
              (r.words[h] = 0 | c), (u = 0 | l);
            }
            return 0 !== u ? (r.words[h] = 0 | u) : r.length--, r._strip();
          }
          (o.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            n(i <= o, "byte array longer than desired length"),
              n(o > 0, "Requested array length <= 0");
            var s = (function (t, e) {
              return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
            })(t, o);
            return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i), s;
          }),
            (o.prototype._toArrayLikeLE = function (t, e) {
              for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                var s = (this.words[i] << o) | n;
                (t[r++] = 255 & s),
                  r < t.length && (t[r++] = (s >> 8) & 255),
                  r < t.length && (t[r++] = (s >> 16) & 255),
                  6 === o
                    ? (r < t.length && (t[r++] = (s >> 24) & 255),
                      (n = 0),
                      (o = 0))
                    : ((n = s >>> 24), (o += 2));
              }
              if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0;
            }),
            (o.prototype._toArrayLikeBE = function (t, e) {
              for (
                var r = t.length - 1, n = 0, i = 0, o = 0;
                i < this.length;
                i++
              ) {
                var s = (this.words[i] << o) | n;
                (t[r--] = 255 & s),
                  r >= 0 && (t[r--] = (s >> 8) & 255),
                  r >= 0 && (t[r--] = (s >> 16) & 255),
                  6 === o
                    ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0))
                    : ((n = s >>> 24), (o += 2));
              }
              if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0;
            }),
            Math.clz32
              ? (o.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (o.prototype._countBits = function (t) {
                  var e = t,
                    r = 0;
                  return (
                    e >= 4096 && ((r += 13), (e >>>= 13)),
                    e >= 64 && ((r += 7), (e >>>= 7)),
                    e >= 8 && ((r += 4), (e >>>= 4)),
                    e >= 2 && ((r += 2), (e >>>= 2)),
                    r + e
                  );
                }),
            (o.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                r = 0;
              return (
                0 == (8191 & e) && ((r += 13), (e >>>= 13)),
                0 == (127 & e) && ((r += 7), (e >>>= 7)),
                0 == (15 & e) && ((r += 4), (e >>>= 4)),
                0 == (3 & e) && ((r += 2), (e >>>= 2)),
                0 == (1 & e) && r++,
                r
              );
            }),
            (o.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var r = this._zeroBits(this.words[e]);
                if (((t += r), 26 !== r)) break;
              }
              return t;
            }),
            (o.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (o.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (o.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (o.prototype.ineg = function () {
              return this.isZero() || (this.negative ^= 1), this;
            }),
            (o.prototype.iuor = function (t) {
              for (; this.length < t.length; ) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this._strip();
            }),
            (o.prototype.ior = function (t) {
              return n(0 == (this.negative | t.negative)), this.iuor(t);
            }),
            (o.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (o.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (o.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var r = 0; r < e.length; r++)
                this.words[r] = this.words[r] & t.words[r];
              return (this.length = e.length), this._strip();
            }),
            (o.prototype.iand = function (t) {
              return n(0 == (this.negative | t.negative)), this.iuand(t);
            }),
            (o.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (o.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (o.prototype.iuxor = function (t) {
              var e, r;
              this.length > t.length
                ? ((e = this), (r = t))
                : ((e = t), (r = this));
              for (var n = 0; n < r.length; n++)
                this.words[n] = e.words[n] ^ r.words[n];
              if (this !== e)
                for (; n < e.length; n++) this.words[n] = e.words[n];
              return (this.length = e.length), this._strip();
            }),
            (o.prototype.ixor = function (t) {
              return n(0 == (this.negative | t.negative)), this.iuxor(t);
            }),
            (o.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (o.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (o.prototype.inotn = function (t) {
              n("number" == typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                r = t % 26;
              this._expand(e), r > 0 && e--;
              for (var i = 0; i < e; i++)
                this.words[i] = 67108863 & ~this.words[i];
              return (
                r > 0 &&
                  (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, e) {
              n("number" == typeof t && t >= 0);
              var r = (t / 26) | 0,
                i = t % 26;
              return (
                this._expand(r + 1),
                (this.words[r] = e
                  ? this.words[r] | (1 << i)
                  : this.words[r] & ~(1 << i)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var e, r, n;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              this.length > t.length
                ? ((r = this), (n = t))
                : ((r = t), (n = this));
              for (var i = 0, o = 0; o < n.length; o++)
                (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26);
              for (; 0 !== i && o < r.length; o++)
                (e = (0 | r.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26);
              if (((this.length = r.length), 0 !== i))
                (this.words[this.length] = i), this.length++;
              else if (r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o];
              return this;
            }),
            (o.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                ? ((this.negative = 0),
                  (e = t.sub(this)),
                  (this.negative = 1),
                  e)
                : this.length > t.length
                ? this.clone().iadd(t)
                : t.clone().iadd(this);
            }),
            (o.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return (t.negative = 1), e._normSign();
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var r,
                n,
                i = this.cmp(t);
              if (0 === i)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this));
              for (var o = 0, s = 0; s < n.length; s++)
                (o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26),
                  (this.words[s] = 67108863 & e);
              for (; 0 !== o && s < r.length; s++)
                (o = (e = (0 | r.words[s]) + o) >> 26),
                  (this.words[s] = 67108863 & e);
              if (0 === o && s < r.length && r !== this)
                for (; s < r.length; s++) this.words[s] = r.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                r !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            });
          var m = function (t, e, r) {
            var n,
              i,
              o,
              s = t.words,
              a = e.words,
              u = r.words,
              h = 0,
              l = 0 | s[0],
              c = 8191 & l,
              f = l >>> 13,
              d = 0 | s[1],
              p = 8191 & d,
              g = d >>> 13,
              m = 0 | s[2],
              y = 8191 & m,
              v = m >>> 13,
              w = 0 | s[3],
              b = 8191 & w,
              _ = w >>> 13,
              E = 0 | s[4],
              M = 8191 & E,
              S = E >>> 13,
              R = 0 | s[5],
              T = 8191 & R,
              A = R >>> 13,
              O = 0 | s[6],
              P = 8191 & O,
              N = O >>> 13,
              k = 0 | s[7],
              I = 8191 & k,
              B = k >>> 13,
              x = 0 | s[8],
              C = 8191 & x,
              L = x >>> 13,
              j = 0 | s[9],
              F = 8191 & j,
              U = j >>> 13,
              q = 0 | a[0],
              D = 8191 & q,
              z = q >>> 13,
              H = 0 | a[1],
              J = 8191 & H,
              Y = H >>> 13,
              $ = 0 | a[2],
              W = 8191 & $,
              G = $ >>> 13,
              V = 0 | a[3],
              K = 8191 & V,
              Z = V >>> 13,
              Q = 0 | a[4],
              X = 8191 & Q,
              tt = Q >>> 13,
              et = 0 | a[5],
              rt = 8191 & et,
              nt = et >>> 13,
              it = 0 | a[6],
              ot = 8191 & it,
              st = it >>> 13,
              at = 0 | a[7],
              ut = 8191 & at,
              ht = at >>> 13,
              lt = 0 | a[8],
              ct = 8191 & lt,
              ft = lt >>> 13,
              dt = 0 | a[9],
              pt = 8191 & dt,
              gt = dt >>> 13;
            (r.negative = t.negative ^ e.negative), (r.length = 19);
            var mt =
              (((h + (n = Math.imul(c, D))) | 0) +
                ((8191 & (i = ((i = Math.imul(c, z)) + Math.imul(f, D)) | 0)) <<
                  13)) |
              0;
            (h =
              ((((o = Math.imul(f, z)) + (i >>> 13)) | 0) + (mt >>> 26)) | 0),
              (mt &= 67108863),
              (n = Math.imul(p, D)),
              (i = ((i = Math.imul(p, z)) + Math.imul(g, D)) | 0),
              (o = Math.imul(g, z));
            var yt =
              (((h + (n = (n + Math.imul(c, J)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(c, Y)) | 0) + Math.imul(f, J)) | 0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(f, Y)) | 0) + (i >>> 13)) | 0) +
                (yt >>> 26)) |
              0),
              (yt &= 67108863),
              (n = Math.imul(y, D)),
              (i = ((i = Math.imul(y, z)) + Math.imul(v, D)) | 0),
              (o = Math.imul(v, z)),
              (n = (n + Math.imul(p, J)) | 0),
              (i = ((i = (i + Math.imul(p, Y)) | 0) + Math.imul(g, J)) | 0),
              (o = (o + Math.imul(g, Y)) | 0);
            var vt =
              (((h + (n = (n + Math.imul(c, W)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(c, G)) | 0) + Math.imul(f, W)) | 0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(f, G)) | 0) + (i >>> 13)) | 0) +
                (vt >>> 26)) |
              0),
              (vt &= 67108863),
              (n = Math.imul(b, D)),
              (i = ((i = Math.imul(b, z)) + Math.imul(_, D)) | 0),
              (o = Math.imul(_, z)),
              (n = (n + Math.imul(y, J)) | 0),
              (i = ((i = (i + Math.imul(y, Y)) | 0) + Math.imul(v, J)) | 0),
              (o = (o + Math.imul(v, Y)) | 0),
              (n = (n + Math.imul(p, W)) | 0),
              (i = ((i = (i + Math.imul(p, G)) | 0) + Math.imul(g, W)) | 0),
              (o = (o + Math.imul(g, G)) | 0);
            var wt =
              (((h + (n = (n + Math.imul(c, K)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(c, Z)) | 0) + Math.imul(f, K)) | 0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(f, Z)) | 0) + (i >>> 13)) | 0) +
                (wt >>> 26)) |
              0),
              (wt &= 67108863),
              (n = Math.imul(M, D)),
              (i = ((i = Math.imul(M, z)) + Math.imul(S, D)) | 0),
              (o = Math.imul(S, z)),
              (n = (n + Math.imul(b, J)) | 0),
              (i = ((i = (i + Math.imul(b, Y)) | 0) + Math.imul(_, J)) | 0),
              (o = (o + Math.imul(_, Y)) | 0),
              (n = (n + Math.imul(y, W)) | 0),
              (i = ((i = (i + Math.imul(y, G)) | 0) + Math.imul(v, W)) | 0),
              (o = (o + Math.imul(v, G)) | 0),
              (n = (n + Math.imul(p, K)) | 0),
              (i = ((i = (i + Math.imul(p, Z)) | 0) + Math.imul(g, K)) | 0),
              (o = (o + Math.imul(g, Z)) | 0);
            var bt =
              (((h + (n = (n + Math.imul(c, X)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(c, tt)) | 0) + Math.imul(f, X)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(f, tt)) | 0) + (i >>> 13)) | 0) +
                (bt >>> 26)) |
              0),
              (bt &= 67108863),
              (n = Math.imul(T, D)),
              (i = ((i = Math.imul(T, z)) + Math.imul(A, D)) | 0),
              (o = Math.imul(A, z)),
              (n = (n + Math.imul(M, J)) | 0),
              (i = ((i = (i + Math.imul(M, Y)) | 0) + Math.imul(S, J)) | 0),
              (o = (o + Math.imul(S, Y)) | 0),
              (n = (n + Math.imul(b, W)) | 0),
              (i = ((i = (i + Math.imul(b, G)) | 0) + Math.imul(_, W)) | 0),
              (o = (o + Math.imul(_, G)) | 0),
              (n = (n + Math.imul(y, K)) | 0),
              (i = ((i = (i + Math.imul(y, Z)) | 0) + Math.imul(v, K)) | 0),
              (o = (o + Math.imul(v, Z)) | 0),
              (n = (n + Math.imul(p, X)) | 0),
              (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(g, X)) | 0),
              (o = (o + Math.imul(g, tt)) | 0);
            var _t =
              (((h + (n = (n + Math.imul(c, rt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(c, nt)) | 0) + Math.imul(f, rt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(f, nt)) | 0) + (i >>> 13)) | 0) +
                (_t >>> 26)) |
              0),
              (_t &= 67108863),
              (n = Math.imul(P, D)),
              (i = ((i = Math.imul(P, z)) + Math.imul(N, D)) | 0),
              (o = Math.imul(N, z)),
              (n = (n + Math.imul(T, J)) | 0),
              (i = ((i = (i + Math.imul(T, Y)) | 0) + Math.imul(A, J)) | 0),
              (o = (o + Math.imul(A, Y)) | 0),
              (n = (n + Math.imul(M, W)) | 0),
              (i = ((i = (i + Math.imul(M, G)) | 0) + Math.imul(S, W)) | 0),
              (o = (o + Math.imul(S, G)) | 0),
              (n = (n + Math.imul(b, K)) | 0),
              (i = ((i = (i + Math.imul(b, Z)) | 0) + Math.imul(_, K)) | 0),
              (o = (o + Math.imul(_, Z)) | 0),
              (n = (n + Math.imul(y, X)) | 0),
              (i = ((i = (i + Math.imul(y, tt)) | 0) + Math.imul(v, X)) | 0),
              (o = (o + Math.imul(v, tt)) | 0),
              (n = (n + Math.imul(p, rt)) | 0),
              (i = ((i = (i + Math.imul(p, nt)) | 0) + Math.imul(g, rt)) | 0),
              (o = (o + Math.imul(g, nt)) | 0);
            var Et =
              (((h + (n = (n + Math.imul(c, ot)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(c, st)) | 0) + Math.imul(f, ot)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(f, st)) | 0) + (i >>> 13)) | 0) +
                (Et >>> 26)) |
              0),
              (Et &= 67108863),
              (n = Math.imul(I, D)),
              (i = ((i = Math.imul(I, z)) + Math.imul(B, D)) | 0),
              (o = Math.imul(B, z)),
              (n = (n + Math.imul(P, J)) | 0),
              (i = ((i = (i + Math.imul(P, Y)) | 0) + Math.imul(N, J)) | 0),
              (o = (o + Math.imul(N, Y)) | 0),
              (n = (n + Math.imul(T, W)) | 0),
              (i = ((i = (i + Math.imul(T, G)) | 0) + Math.imul(A, W)) | 0),
              (o = (o + Math.imul(A, G)) | 0),
              (n = (n + Math.imul(M, K)) | 0),
              (i = ((i = (i + Math.imul(M, Z)) | 0) + Math.imul(S, K)) | 0),
              (o = (o + Math.imul(S, Z)) | 0),
              (n = (n + Math.imul(b, X)) | 0),
              (i = ((i = (i + Math.imul(b, tt)) | 0) + Math.imul(_, X)) | 0),
              (o = (o + Math.imul(_, tt)) | 0),
              (n = (n + Math.imul(y, rt)) | 0),
              (i = ((i = (i + Math.imul(y, nt)) | 0) + Math.imul(v, rt)) | 0),
              (o = (o + Math.imul(v, nt)) | 0),
              (n = (n + Math.imul(p, ot)) | 0),
              (i = ((i = (i + Math.imul(p, st)) | 0) + Math.imul(g, ot)) | 0),
              (o = (o + Math.imul(g, st)) | 0);
            var Mt =
              (((h + (n = (n + Math.imul(c, ut)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(c, ht)) | 0) + Math.imul(f, ut)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(f, ht)) | 0) + (i >>> 13)) | 0) +
                (Mt >>> 26)) |
              0),
              (Mt &= 67108863),
              (n = Math.imul(C, D)),
              (i = ((i = Math.imul(C, z)) + Math.imul(L, D)) | 0),
              (o = Math.imul(L, z)),
              (n = (n + Math.imul(I, J)) | 0),
              (i = ((i = (i + Math.imul(I, Y)) | 0) + Math.imul(B, J)) | 0),
              (o = (o + Math.imul(B, Y)) | 0),
              (n = (n + Math.imul(P, W)) | 0),
              (i = ((i = (i + Math.imul(P, G)) | 0) + Math.imul(N, W)) | 0),
              (o = (o + Math.imul(N, G)) | 0),
              (n = (n + Math.imul(T, K)) | 0),
              (i = ((i = (i + Math.imul(T, Z)) | 0) + Math.imul(A, K)) | 0),
              (o = (o + Math.imul(A, Z)) | 0),
              (n = (n + Math.imul(M, X)) | 0),
              (i = ((i = (i + Math.imul(M, tt)) | 0) + Math.imul(S, X)) | 0),
              (o = (o + Math.imul(S, tt)) | 0),
              (n = (n + Math.imul(b, rt)) | 0),
              (i = ((i = (i + Math.imul(b, nt)) | 0) + Math.imul(_, rt)) | 0),
              (o = (o + Math.imul(_, nt)) | 0),
              (n = (n + Math.imul(y, ot)) | 0),
              (i = ((i = (i + Math.imul(y, st)) | 0) + Math.imul(v, ot)) | 0),
              (o = (o + Math.imul(v, st)) | 0),
              (n = (n + Math.imul(p, ut)) | 0),
              (i = ((i = (i + Math.imul(p, ht)) | 0) + Math.imul(g, ut)) | 0),
              (o = (o + Math.imul(g, ht)) | 0);
            var St =
              (((h + (n = (n + Math.imul(c, ct)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(c, ft)) | 0) + Math.imul(f, ct)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(f, ft)) | 0) + (i >>> 13)) | 0) +
                (St >>> 26)) |
              0),
              (St &= 67108863),
              (n = Math.imul(F, D)),
              (i = ((i = Math.imul(F, z)) + Math.imul(U, D)) | 0),
              (o = Math.imul(U, z)),
              (n = (n + Math.imul(C, J)) | 0),
              (i = ((i = (i + Math.imul(C, Y)) | 0) + Math.imul(L, J)) | 0),
              (o = (o + Math.imul(L, Y)) | 0),
              (n = (n + Math.imul(I, W)) | 0),
              (i = ((i = (i + Math.imul(I, G)) | 0) + Math.imul(B, W)) | 0),
              (o = (o + Math.imul(B, G)) | 0),
              (n = (n + Math.imul(P, K)) | 0),
              (i = ((i = (i + Math.imul(P, Z)) | 0) + Math.imul(N, K)) | 0),
              (o = (o + Math.imul(N, Z)) | 0),
              (n = (n + Math.imul(T, X)) | 0),
              (i = ((i = (i + Math.imul(T, tt)) | 0) + Math.imul(A, X)) | 0),
              (o = (o + Math.imul(A, tt)) | 0),
              (n = (n + Math.imul(M, rt)) | 0),
              (i = ((i = (i + Math.imul(M, nt)) | 0) + Math.imul(S, rt)) | 0),
              (o = (o + Math.imul(S, nt)) | 0),
              (n = (n + Math.imul(b, ot)) | 0),
              (i = ((i = (i + Math.imul(b, st)) | 0) + Math.imul(_, ot)) | 0),
              (o = (o + Math.imul(_, st)) | 0),
              (n = (n + Math.imul(y, ut)) | 0),
              (i = ((i = (i + Math.imul(y, ht)) | 0) + Math.imul(v, ut)) | 0),
              (o = (o + Math.imul(v, ht)) | 0),
              (n = (n + Math.imul(p, ct)) | 0),
              (i = ((i = (i + Math.imul(p, ft)) | 0) + Math.imul(g, ct)) | 0),
              (o = (o + Math.imul(g, ft)) | 0);
            var Rt =
              (((h + (n = (n + Math.imul(c, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(c, gt)) | 0) + Math.imul(f, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(f, gt)) | 0) + (i >>> 13)) | 0) +
                (Rt >>> 26)) |
              0),
              (Rt &= 67108863),
              (n = Math.imul(F, J)),
              (i = ((i = Math.imul(F, Y)) + Math.imul(U, J)) | 0),
              (o = Math.imul(U, Y)),
              (n = (n + Math.imul(C, W)) | 0),
              (i = ((i = (i + Math.imul(C, G)) | 0) + Math.imul(L, W)) | 0),
              (o = (o + Math.imul(L, G)) | 0),
              (n = (n + Math.imul(I, K)) | 0),
              (i = ((i = (i + Math.imul(I, Z)) | 0) + Math.imul(B, K)) | 0),
              (o = (o + Math.imul(B, Z)) | 0),
              (n = (n + Math.imul(P, X)) | 0),
              (i = ((i = (i + Math.imul(P, tt)) | 0) + Math.imul(N, X)) | 0),
              (o = (o + Math.imul(N, tt)) | 0),
              (n = (n + Math.imul(T, rt)) | 0),
              (i = ((i = (i + Math.imul(T, nt)) | 0) + Math.imul(A, rt)) | 0),
              (o = (o + Math.imul(A, nt)) | 0),
              (n = (n + Math.imul(M, ot)) | 0),
              (i = ((i = (i + Math.imul(M, st)) | 0) + Math.imul(S, ot)) | 0),
              (o = (o + Math.imul(S, st)) | 0),
              (n = (n + Math.imul(b, ut)) | 0),
              (i = ((i = (i + Math.imul(b, ht)) | 0) + Math.imul(_, ut)) | 0),
              (o = (o + Math.imul(_, ht)) | 0),
              (n = (n + Math.imul(y, ct)) | 0),
              (i = ((i = (i + Math.imul(y, ft)) | 0) + Math.imul(v, ct)) | 0),
              (o = (o + Math.imul(v, ft)) | 0);
            var Tt =
              (((h + (n = (n + Math.imul(p, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(p, gt)) | 0) + Math.imul(g, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(g, gt)) | 0) + (i >>> 13)) | 0) +
                (Tt >>> 26)) |
              0),
              (Tt &= 67108863),
              (n = Math.imul(F, W)),
              (i = ((i = Math.imul(F, G)) + Math.imul(U, W)) | 0),
              (o = Math.imul(U, G)),
              (n = (n + Math.imul(C, K)) | 0),
              (i = ((i = (i + Math.imul(C, Z)) | 0) + Math.imul(L, K)) | 0),
              (o = (o + Math.imul(L, Z)) | 0),
              (n = (n + Math.imul(I, X)) | 0),
              (i = ((i = (i + Math.imul(I, tt)) | 0) + Math.imul(B, X)) | 0),
              (o = (o + Math.imul(B, tt)) | 0),
              (n = (n + Math.imul(P, rt)) | 0),
              (i = ((i = (i + Math.imul(P, nt)) | 0) + Math.imul(N, rt)) | 0),
              (o = (o + Math.imul(N, nt)) | 0),
              (n = (n + Math.imul(T, ot)) | 0),
              (i = ((i = (i + Math.imul(T, st)) | 0) + Math.imul(A, ot)) | 0),
              (o = (o + Math.imul(A, st)) | 0),
              (n = (n + Math.imul(M, ut)) | 0),
              (i = ((i = (i + Math.imul(M, ht)) | 0) + Math.imul(S, ut)) | 0),
              (o = (o + Math.imul(S, ht)) | 0),
              (n = (n + Math.imul(b, ct)) | 0),
              (i = ((i = (i + Math.imul(b, ft)) | 0) + Math.imul(_, ct)) | 0),
              (o = (o + Math.imul(_, ft)) | 0);
            var At =
              (((h + (n = (n + Math.imul(y, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(y, gt)) | 0) + Math.imul(v, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(v, gt)) | 0) + (i >>> 13)) | 0) +
                (At >>> 26)) |
              0),
              (At &= 67108863),
              (n = Math.imul(F, K)),
              (i = ((i = Math.imul(F, Z)) + Math.imul(U, K)) | 0),
              (o = Math.imul(U, Z)),
              (n = (n + Math.imul(C, X)) | 0),
              (i = ((i = (i + Math.imul(C, tt)) | 0) + Math.imul(L, X)) | 0),
              (o = (o + Math.imul(L, tt)) | 0),
              (n = (n + Math.imul(I, rt)) | 0),
              (i = ((i = (i + Math.imul(I, nt)) | 0) + Math.imul(B, rt)) | 0),
              (o = (o + Math.imul(B, nt)) | 0),
              (n = (n + Math.imul(P, ot)) | 0),
              (i = ((i = (i + Math.imul(P, st)) | 0) + Math.imul(N, ot)) | 0),
              (o = (o + Math.imul(N, st)) | 0),
              (n = (n + Math.imul(T, ut)) | 0),
              (i = ((i = (i + Math.imul(T, ht)) | 0) + Math.imul(A, ut)) | 0),
              (o = (o + Math.imul(A, ht)) | 0),
              (n = (n + Math.imul(M, ct)) | 0),
              (i = ((i = (i + Math.imul(M, ft)) | 0) + Math.imul(S, ct)) | 0),
              (o = (o + Math.imul(S, ft)) | 0);
            var Ot =
              (((h + (n = (n + Math.imul(b, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(b, gt)) | 0) + Math.imul(_, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(_, gt)) | 0) + (i >>> 13)) | 0) +
                (Ot >>> 26)) |
              0),
              (Ot &= 67108863),
              (n = Math.imul(F, X)),
              (i = ((i = Math.imul(F, tt)) + Math.imul(U, X)) | 0),
              (o = Math.imul(U, tt)),
              (n = (n + Math.imul(C, rt)) | 0),
              (i = ((i = (i + Math.imul(C, nt)) | 0) + Math.imul(L, rt)) | 0),
              (o = (o + Math.imul(L, nt)) | 0),
              (n = (n + Math.imul(I, ot)) | 0),
              (i = ((i = (i + Math.imul(I, st)) | 0) + Math.imul(B, ot)) | 0),
              (o = (o + Math.imul(B, st)) | 0),
              (n = (n + Math.imul(P, ut)) | 0),
              (i = ((i = (i + Math.imul(P, ht)) | 0) + Math.imul(N, ut)) | 0),
              (o = (o + Math.imul(N, ht)) | 0),
              (n = (n + Math.imul(T, ct)) | 0),
              (i = ((i = (i + Math.imul(T, ft)) | 0) + Math.imul(A, ct)) | 0),
              (o = (o + Math.imul(A, ft)) | 0);
            var Pt =
              (((h + (n = (n + Math.imul(M, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(M, gt)) | 0) + Math.imul(S, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(S, gt)) | 0) + (i >>> 13)) | 0) +
                (Pt >>> 26)) |
              0),
              (Pt &= 67108863),
              (n = Math.imul(F, rt)),
              (i = ((i = Math.imul(F, nt)) + Math.imul(U, rt)) | 0),
              (o = Math.imul(U, nt)),
              (n = (n + Math.imul(C, ot)) | 0),
              (i = ((i = (i + Math.imul(C, st)) | 0) + Math.imul(L, ot)) | 0),
              (o = (o + Math.imul(L, st)) | 0),
              (n = (n + Math.imul(I, ut)) | 0),
              (i = ((i = (i + Math.imul(I, ht)) | 0) + Math.imul(B, ut)) | 0),
              (o = (o + Math.imul(B, ht)) | 0),
              (n = (n + Math.imul(P, ct)) | 0),
              (i = ((i = (i + Math.imul(P, ft)) | 0) + Math.imul(N, ct)) | 0),
              (o = (o + Math.imul(N, ft)) | 0);
            var Nt =
              (((h + (n = (n + Math.imul(T, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(T, gt)) | 0) + Math.imul(A, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(A, gt)) | 0) + (i >>> 13)) | 0) +
                (Nt >>> 26)) |
              0),
              (Nt &= 67108863),
              (n = Math.imul(F, ot)),
              (i = ((i = Math.imul(F, st)) + Math.imul(U, ot)) | 0),
              (o = Math.imul(U, st)),
              (n = (n + Math.imul(C, ut)) | 0),
              (i = ((i = (i + Math.imul(C, ht)) | 0) + Math.imul(L, ut)) | 0),
              (o = (o + Math.imul(L, ht)) | 0),
              (n = (n + Math.imul(I, ct)) | 0),
              (i = ((i = (i + Math.imul(I, ft)) | 0) + Math.imul(B, ct)) | 0),
              (o = (o + Math.imul(B, ft)) | 0);
            var kt =
              (((h + (n = (n + Math.imul(P, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(P, gt)) | 0) + Math.imul(N, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(N, gt)) | 0) + (i >>> 13)) | 0) +
                (kt >>> 26)) |
              0),
              (kt &= 67108863),
              (n = Math.imul(F, ut)),
              (i = ((i = Math.imul(F, ht)) + Math.imul(U, ut)) | 0),
              (o = Math.imul(U, ht)),
              (n = (n + Math.imul(C, ct)) | 0),
              (i = ((i = (i + Math.imul(C, ft)) | 0) + Math.imul(L, ct)) | 0),
              (o = (o + Math.imul(L, ft)) | 0);
            var It =
              (((h + (n = (n + Math.imul(I, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(I, gt)) | 0) + Math.imul(B, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(B, gt)) | 0) + (i >>> 13)) | 0) +
                (It >>> 26)) |
              0),
              (It &= 67108863),
              (n = Math.imul(F, ct)),
              (i = ((i = Math.imul(F, ft)) + Math.imul(U, ct)) | 0),
              (o = Math.imul(U, ft));
            var Bt =
              (((h + (n = (n + Math.imul(C, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(C, gt)) | 0) + Math.imul(L, pt)) |
                    0)) <<
                  13)) |
              0;
            (h =
              ((((o = (o + Math.imul(L, gt)) | 0) + (i >>> 13)) | 0) +
                (Bt >>> 26)) |
              0),
              (Bt &= 67108863);
            var xt =
              (((h + (n = Math.imul(F, pt))) | 0) +
                ((8191 &
                  (i = ((i = Math.imul(F, gt)) + Math.imul(U, pt)) | 0)) <<
                  13)) |
              0;
            return (
              (h =
                ((((o = Math.imul(U, gt)) + (i >>> 13)) | 0) + (xt >>> 26)) |
                0),
              (xt &= 67108863),
              (u[0] = mt),
              (u[1] = yt),
              (u[2] = vt),
              (u[3] = wt),
              (u[4] = bt),
              (u[5] = _t),
              (u[6] = Et),
              (u[7] = Mt),
              (u[8] = St),
              (u[9] = Rt),
              (u[10] = Tt),
              (u[11] = At),
              (u[12] = Ot),
              (u[13] = Pt),
              (u[14] = Nt),
              (u[15] = kt),
              (u[16] = It),
              (u[17] = Bt),
              (u[18] = xt),
              0 !== h && ((u[19] = h), r.length++),
              r
            );
          };
          function y(t, e, r) {
            (r.negative = e.negative ^ t.negative),
              (r.length = t.length + e.length);
            for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
              var s = i;
              i = 0;
              for (
                var a = 67108863 & n,
                  u = Math.min(o, e.length - 1),
                  h = Math.max(0, o - t.length + 1);
                h <= u;
                h++
              ) {
                var l = o - h,
                  c = (0 | t.words[l]) * (0 | e.words[h]),
                  f = 67108863 & c;
                (a = 67108863 & (f = (f + a) | 0)),
                  (i +=
                    (s =
                      ((s = (s + ((c / 67108864) | 0)) | 0) + (f >>> 26)) |
                      0) >>> 26),
                  (s &= 67108863);
              }
              (r.words[o] = a), (n = s), (s = i);
            }
            return 0 !== n ? (r.words[o] = n) : r.length--, r._strip();
          }
          function v(t, e, r) {
            return y(t, e, r);
          }
          function w(t, e) {
            (this.x = t), (this.y = e);
          }
          Math.imul || (m = g),
            (o.prototype.mulTo = function (t, e) {
              var r = this.length + t.length;
              return 10 === this.length && 10 === t.length
                ? m(this, t, e)
                : r < 63
                ? g(this, t, e)
                : r < 1024
                ? y(this, t, e)
                : v(this, t, e);
            }),
            (w.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0;
                n < t;
                n++
              )
                e[n] = this.revBin(n, r, t);
              return e;
            }),
            (w.prototype.revBin = function (t, e, r) {
              if (0 === t || t === r - 1) return t;
              for (var n = 0, i = 0; i < e; i++)
                (n |= (1 & t) << (e - i - 1)), (t >>= 1);
              return n;
            }),
            (w.prototype.permute = function (t, e, r, n, i, o) {
              for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]]);
            }),
            (w.prototype.transform = function (t, e, r, n, i, o) {
              this.permute(o, t, e, r, n, i);
              for (var s = 1; s < i; s <<= 1)
                for (
                  var a = s << 1,
                    u = Math.cos((2 * Math.PI) / a),
                    h = Math.sin((2 * Math.PI) / a),
                    l = 0;
                  l < i;
                  l += a
                )
                  for (var c = u, f = h, d = 0; d < s; d++) {
                    var p = r[l + d],
                      g = n[l + d],
                      m = r[l + d + s],
                      y = n[l + d + s],
                      v = c * m - f * y;
                    (y = c * y + f * m),
                      (m = v),
                      (r[l + d] = p + m),
                      (n[l + d] = g + y),
                      (r[l + d + s] = p - m),
                      (n[l + d + s] = g - y),
                      d !== a &&
                        ((v = u * c - h * f), (f = u * f + h * c), (c = v));
                  }
            }),
            (w.prototype.guessLen13b = function (t, e) {
              var r = 1 | Math.max(e, t),
                n = 1 & r,
                i = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) i++;
              return 1 << (i + 1 + n);
            }),
            (w.prototype.conjugate = function (t, e, r) {
              if (!(r <= 1))
                for (var n = 0; n < r / 2; n++) {
                  var i = t[n];
                  (t[n] = t[r - n - 1]),
                    (t[r - n - 1] = i),
                    (i = e[n]),
                    (e[n] = -e[r - n - 1]),
                    (e[r - n - 1] = -i);
                }
            }),
            (w.prototype.normalize13b = function (t, e) {
              for (var r = 0, n = 0; n < e / 2; n++) {
                var i =
                  8192 * Math.round(t[2 * n + 1] / e) +
                  Math.round(t[2 * n] / e) +
                  r;
                (t[n] = 67108863 & i),
                  (r = i < 67108864 ? 0 : (i / 67108864) | 0);
              }
              return t;
            }),
            (w.prototype.convert13b = function (t, e, r, i) {
              for (var o = 0, s = 0; s < e; s++)
                (o += 0 | t[s]),
                  (r[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (r[2 * s + 1] = 8191 & o),
                  (o >>>= 13);
              for (s = 2 * e; s < i; ++s) r[s] = 0;
              n(0 === o), n(0 == (-8192 & o));
            }),
            (w.prototype.stub = function (t) {
              for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
              return e;
            }),
            (w.prototype.mulp = function (t, e, r) {
              var n = 2 * this.guessLen13b(t.length, e.length),
                i = this.makeRBT(n),
                o = this.stub(n),
                s = new Array(n),
                a = new Array(n),
                u = new Array(n),
                h = new Array(n),
                l = new Array(n),
                c = new Array(n),
                f = r.words;
              (f.length = n),
                this.convert13b(t.words, t.length, s, n),
                this.convert13b(e.words, e.length, h, n),
                this.transform(s, o, a, u, n, i),
                this.transform(h, o, l, c, n, i);
              for (var d = 0; d < n; d++) {
                var p = a[d] * l[d] - u[d] * c[d];
                (u[d] = a[d] * c[d] + u[d] * l[d]), (a[d] = p);
              }
              return (
                this.conjugate(a, u, n),
                this.transform(a, u, f, o, n, i),
                this.conjugate(f, o, n),
                this.normalize13b(f, n),
                (r.negative = t.negative ^ e.negative),
                (r.length = t.length + e.length),
                r._strip()
              );
            }),
            (o.prototype.mul = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
              );
            }),
            (o.prototype.mulf = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)), v(this, t, e)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              var e = t < 0;
              e && (t = -t), n("number" == typeof t), n(t < 67108864);
              for (var r = 0, i = 0; i < this.length; i++) {
                var o = (0 | this.words[i]) * t,
                  s = (67108863 & o) + (67108863 & r);
                (r >>= 26),
                  (r += (o / 67108864) | 0),
                  (r += s >>> 26),
                  (this.words[i] = 67108863 & s);
              }
              return (
                0 !== r && ((this.words[i] = r), this.length++),
                e ? this.ineg() : this
              );
            }),
            (o.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (o.prototype.sqr = function () {
              return this.mul(this);
            }),
            (o.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function (t) {
              var e = (function (t) {
                for (
                  var e = new Array(t.bitLength()), r = 0;
                  r < e.length;
                  r++
                ) {
                  var n = (r / 26) | 0,
                    i = r % 26;
                  e[r] = (t.words[n] >>> i) & 1;
                }
                return e;
              })(t);
              if (0 === e.length) return new o(1);
              for (
                var r = this, n = 0;
                n < e.length && 0 === e[n];
                n++, r = r.sqr()
              );
              if (++n < e.length)
                for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                  0 !== e[n] && (r = r.mul(i));
              return r;
            }),
            (o.prototype.iushln = function (t) {
              n("number" == typeof t && t >= 0);
              var e,
                r = t % 26,
                i = (t - r) / 26,
                o = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var s = 0;
                for (e = 0; e < this.length; e++) {
                  var a = this.words[e] & o,
                    u = ((0 | this.words[e]) - a) << r;
                  (this.words[e] = u | s), (s = a >>> (26 - r));
                }
                s && ((this.words[e] = s), this.length++);
              }
              if (0 !== i) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + i] = this.words[e];
                for (e = 0; e < i; e++) this.words[e] = 0;
                this.length += i;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (t) {
              return n(0 === this.negative), this.iushln(t);
            }),
            (o.prototype.iushrn = function (t, e, r) {
              var i;
              n("number" == typeof t && t >= 0),
                (i = e ? (e - (e % 26)) / 26 : 0);
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> o) << o),
                u = r;
              if (((i -= s), (i = Math.max(0, i)), u)) {
                for (var h = 0; h < s; h++) u.words[h] = this.words[h];
                u.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, h = 0; h < this.length; h++)
                  this.words[h] = this.words[h + s];
              else (this.words[0] = 0), (this.length = 1);
              var l = 0;
              for (h = this.length - 1; h >= 0 && (0 !== l || h >= i); h--) {
                var c = 0 | this.words[h];
                (this.words[h] = (l << (26 - o)) | (c >>> o)), (l = c & a);
              }
              return (
                u && 0 !== l && (u.words[u.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (t, e, r) {
              return n(0 === this.negative), this.iushrn(t, e, r);
            }),
            (o.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (o.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (o.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (o.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (o.prototype.testn = function (t) {
              n("number" == typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26,
                i = 1 << e;
              return !(this.length <= r) && !!(this.words[r] & i);
            }),
            (o.prototype.imaskn = function (t) {
              n("number" == typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26;
              if (
                (n(
                  0 === this.negative,
                  "imaskn works only with positive numbers"
                ),
                this.length <= r)
              )
                return this;
              if (
                (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e)
              ) {
                var i = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= i;
              }
              return this._strip();
            }),
            (o.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (o.prototype.iaddn = function (t) {
              return (
                n("number" == typeof t),
                n(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) <= t
                    ? ((this.words[0] = t - (0 | this.words[0])),
                      (this.negative = 0),
                      this)
                    : ((this.negative = 0),
                      this.isubn(t),
                      (this.negative = 1),
                      this)
                  : this._iaddn(t)
              );
            }),
            (o.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                (this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++;
              return (this.length = Math.max(this.length, e + 1)), this;
            }),
            (o.prototype.isubn = function (t) {
              if ((n("number" == typeof t), n(t < 67108864), t < 0))
                return this.iaddn(-t);
              if (0 !== this.negative)
                return (
                  (this.negative = 0), this.iaddn(t), (this.negative = 1), this
                );
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1);
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  (this.words[e] += 67108864), (this.words[e + 1] -= 1);
              return this._strip();
            }),
            (o.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (o.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (o.prototype.iabs = function () {
              return (this.negative = 0), this;
            }),
            (o.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function (t, e, r) {
              var i,
                o,
                s = t.length + r;
              this._expand(s);
              var a = 0;
              for (i = 0; i < t.length; i++) {
                o = (0 | this.words[i + r]) + a;
                var u = (0 | t.words[i]) * e;
                (a = ((o -= 67108863 & u) >> 26) - ((u / 67108864) | 0)),
                  (this.words[i + r] = 67108863 & o);
              }
              for (; i < this.length - r; i++)
                (a = (o = (0 | this.words[i + r]) + a) >> 26),
                  (this.words[i + r] = 67108863 & o);
              if (0 === a) return this._strip();
              for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
                (a = (o = -(0 | this.words[i]) + a) >> 26),
                  (this.words[i] = 67108863 & o);
              return (this.negative = 1), this._strip();
            }),
            (o.prototype._wordDiv = function (t, e) {
              var r = (this.length, t.length),
                n = this.clone(),
                i = t,
                s = 0 | i.words[i.length - 1];
              0 !== (r = 26 - this._countBits(s)) &&
                ((i = i.ushln(r)),
                n.iushln(r),
                (s = 0 | i.words[i.length - 1]));
              var a,
                u = n.length - i.length;
              if ("mod" !== e) {
                ((a = new o(null)).length = u + 1),
                  (a.words = new Array(a.length));
                for (var h = 0; h < a.length; h++) a.words[h] = 0;
              }
              var l = n.clone()._ishlnsubmul(i, 1, u);
              0 === l.negative && ((n = l), a && (a.words[u] = 1));
              for (var c = u - 1; c >= 0; c--) {
                var f =
                  67108864 * (0 | n.words[i.length + c]) +
                  (0 | n.words[i.length + c - 1]);
                for (
                  f = Math.min((f / s) | 0, 67108863), n._ishlnsubmul(i, f, c);
                  0 !== n.negative;

                )
                  f--,
                    (n.negative = 0),
                    n._ishlnsubmul(i, 1, c),
                    n.isZero() || (n.negative ^= 1);
                a && (a.words[c] = f);
              }
              return (
                a && a._strip(),
                n._strip(),
                "div" !== e && 0 !== r && n.iushrn(r),
                { div: a || null, mod: n }
              );
            }),
            (o.prototype.divmod = function (t, e, r) {
              return (
                n(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                  ? ((a = this.neg().divmod(t, e)),
                    "mod" !== e && (i = a.div.neg()),
                    "div" !== e &&
                      ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                    { div: i, mod: s })
                  : 0 === this.negative && 0 !== t.negative
                  ? ((a = this.divmod(t.neg(), e)),
                    "mod" !== e && (i = a.div.neg()),
                    { div: i, mod: a.mod })
                  : 0 != (this.negative & t.negative)
                  ? ((a = this.neg().divmod(t.neg(), e)),
                    "div" !== e &&
                      ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                    { div: a.div, mod: s })
                  : t.length > this.length || this.cmp(t) < 0
                  ? { div: new o(0), mod: this }
                  : 1 === t.length
                  ? "div" === e
                    ? { div: this.divn(t.words[0]), mod: null }
                    : "mod" === e
                    ? { div: null, mod: new o(this.modrn(t.words[0])) }
                    : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modrn(t.words[0])),
                      }
                  : this._wordDiv(t, e)
              );
              var i, s, a;
            }),
            (o.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (o.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (o.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (o.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                n = t.ushrn(1),
                i = t.andln(1),
                o = r.cmp(n);
              return o < 0 || (1 === i && 0 === o)
                ? e.div
                : 0 !== e.div.negative
                ? e.div.isubn(1)
                : e.div.iaddn(1);
            }),
            (o.prototype.modrn = function (t) {
              var e = t < 0;
              e && (t = -t), n(t <= 67108863);
              for (
                var r = (1 << 26) % t, i = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                i = (r * i + (0 | this.words[o])) % t;
              return e ? -i : i;
            }),
            (o.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (o.prototype.idivn = function (t) {
              var e = t < 0;
              e && (t = -t), n(t <= 67108863);
              for (var r = 0, i = this.length - 1; i >= 0; i--) {
                var o = (0 | this.words[i]) + 67108864 * r;
                (this.words[i] = (o / t) | 0), (r = o % t);
              }
              return this._strip(), e ? this.ineg() : this;
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              n(0 === t.negative), n(!t.isZero());
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              for (
                var i = new o(1),
                  s = new o(0),
                  a = new o(0),
                  u = new o(1),
                  h = 0;
                e.isEven() && r.isEven();

              )
                e.iushrn(1), r.iushrn(1), ++h;
              for (var l = r.clone(), c = e.clone(); !e.isZero(); ) {
                for (
                  var f = 0, d = 1;
                  0 == (e.words[0] & d) && f < 26;
                  ++f, d <<= 1
                );
                if (f > 0)
                  for (e.iushrn(f); f-- > 0; )
                    (i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(c)),
                      i.iushrn(1),
                      s.iushrn(1);
                for (
                  var p = 0, g = 1;
                  0 == (r.words[0] & g) && p < 26;
                  ++p, g <<= 1
                );
                if (p > 0)
                  for (r.iushrn(p); p-- > 0; )
                    (a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(c)),
                      a.iushrn(1),
                      u.iushrn(1);
                e.cmp(r) >= 0
                  ? (e.isub(r), i.isub(a), s.isub(u))
                  : (r.isub(e), a.isub(i), u.isub(s));
              }
              return { a, b: u, gcd: r.iushln(h) };
            }),
            (o.prototype._invmp = function (t) {
              n(0 === t.negative), n(!t.isZero());
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              for (
                var i, s = new o(1), a = new o(0), u = r.clone();
                e.cmpn(1) > 0 && r.cmpn(1) > 0;

              ) {
                for (
                  var h = 0, l = 1;
                  0 == (e.words[0] & l) && h < 26;
                  ++h, l <<= 1
                );
                if (h > 0)
                  for (e.iushrn(h); h-- > 0; )
                    s.isOdd() && s.iadd(u), s.iushrn(1);
                for (
                  var c = 0, f = 1;
                  0 == (r.words[0] & f) && c < 26;
                  ++c, f <<= 1
                );
                if (c > 0)
                  for (r.iushrn(c); c-- > 0; )
                    a.isOdd() && a.iadd(u), a.iushrn(1);
                e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s));
              }
              return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i;
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                r = t.clone();
              (e.negative = 0), (r.negative = 0);
              for (var n = 0; e.isEven() && r.isEven(); n++)
                e.iushrn(1), r.iushrn(1);
              for (;;) {
                for (; e.isEven(); ) e.iushrn(1);
                for (; r.isEven(); ) r.iushrn(1);
                var i = e.cmp(r);
                if (i < 0) {
                  var o = e;
                  (e = r), (r = o);
                } else if (0 === i || 0 === r.cmpn(1)) break;
                e.isub(r);
              }
              return r.iushln(n);
            }),
            (o.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (o.prototype.isEven = function () {
              return 0 == (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 == (1 & this.words[0]);
            }),
            (o.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (o.prototype.bincn = function (t) {
              n("number" == typeof t);
              var e = t % 26,
                r = (t - e) / 26,
                i = 1 << e;
              if (this.length <= r)
                return this._expand(r + 1), (this.words[r] |= i), this;
              for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                var a = 0 | this.words[s];
                (o = (a += o) >>> 26), (a &= 67108863), (this.words[s] = a);
              }
              return 0 !== o && ((this.words[s] = o), this.length++), this;
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (t) {
              var e,
                r = t < 0;
              if (0 !== this.negative && !r) return -1;
              if (0 === this.negative && r) return 1;
              if ((this._strip(), this.length > 1)) e = 1;
              else {
                r && (t = -t), n(t <= 67108863, "Number is too big");
                var i = 0 | this.words[0];
                e = i === t ? 0 : i < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, r = this.length - 1; r >= 0; r--) {
                var n = 0 | this.words[r],
                  i = 0 | t.words[r];
                if (n !== i) {
                  n < i ? (e = -1) : n > i && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (o.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (o.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (o.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (o.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (o.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (o.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (o.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (o.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (o.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (o.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (o.red = function (t) {
              return new T(t);
            }),
            (o.prototype.toRed = function (t) {
              return (
                n(!this.red, "Already a number in reduction context"),
                n(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (o.prototype.fromRed = function () {
              return (
                n(
                  this.red,
                  "fromRed works only with numbers in reduction context"
                ),
                this.red.convertFrom(this)
              );
            }),
            (o.prototype._forceRed = function (t) {
              return (this.red = t), this;
            }),
            (o.prototype.forceRed = function (t) {
              return (
                n(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (o.prototype.redAdd = function (t) {
              return (
                n(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (o.prototype.redIAdd = function (t) {
              return (
                n(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (o.prototype.redSub = function (t) {
              return (
                n(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (o.prototype.redISub = function (t) {
              return (
                n(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (o.prototype.redShl = function (t) {
              return (
                n(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (o.prototype.redMul = function (t) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (o.prototype.redIMul = function (t) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (o.prototype.redSqr = function () {
              return (
                n(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function () {
              return (
                n(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function () {
              return (
                n(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function () {
              return (
                n(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function () {
              return (
                n(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function (t) {
              return (
                n(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            });
          var b = { k256: null, p224: null, p192: null, p25519: null };
          function _(t, e) {
            (this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp());
          }
          function E() {
            _.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
            );
          }
          function M() {
            _.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
            );
          }
          function S() {
            _.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
            );
          }
          function R() {
            _.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
            );
          }
          function T(t) {
            if ("string" == typeof t) {
              var e = o._prime(t);
              (this.m = e.p), (this.prime = e);
            } else
              n(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null);
          }
          function A(t) {
            T.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv));
          }
          (_.prototype._tmp = function () {
            var t = new o(null);
            return (t.words = new Array(Math.ceil(this.n / 13))), t;
          }),
            (_.prototype.ireduce = function (t) {
              var e,
                r = t;
              do {
                this.split(r, this.tmp),
                  (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
              } while (e > this.n);
              var n = e < this.n ? -1 : r.ucmp(this.p);
              return (
                0 === n
                  ? ((r.words[0] = 0), (r.length = 1))
                  : n > 0
                  ? r.isub(this.p)
                  : void 0 !== r.strip
                  ? r.strip()
                  : r._strip(),
                r
              );
            }),
            (_.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (_.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            i(E, _),
            (E.prototype.split = function (t, e) {
              for (
                var r = 4194303, n = Math.min(t.length, 9), i = 0;
                i < n;
                i++
              )
                e.words[i] = t.words[i];
              if (((e.length = n), t.length <= 9))
                return (t.words[0] = 0), void (t.length = 1);
              var o = t.words[9];
              for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
                var s = 0 | t.words[i];
                (t.words[i - 10] = ((s & r) << 4) | (o >>> 22)), (o = s);
              }
              (o >>>= 22),
                (t.words[i - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
            }),
            (E.prototype.imulK = function (t) {
              (t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2);
              for (var e = 0, r = 0; r < t.length; r++) {
                var n = 0 | t.words[r];
                (e += 977 * n),
                  (t.words[r] = 67108863 & e),
                  (e = 64 * n + ((e / 67108864) | 0));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            i(M, _),
            i(S, _),
            i(R, _),
            (R.prototype.imulK = function (t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var n = 19 * (0 | t.words[r]) + e,
                  i = 67108863 & n;
                (n >>>= 26), (t.words[r] = i), (e = n);
              }
              return 0 !== e && (t.words[t.length++] = e), t;
            }),
            (o._prime = function (t) {
              if (b[t]) return b[t];
              var e;
              if ("k256" === t) e = new E();
              else if ("p224" === t) e = new M();
              else if ("p192" === t) e = new S();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new R();
              }
              return (b[t] = e), e;
            }),
            (T.prototype._verify1 = function (t) {
              n(0 === t.negative, "red works only with positives"),
                n(t.red, "red works only with red numbers");
            }),
            (T.prototype._verify2 = function (t, e) {
              n(
                0 == (t.negative | e.negative),
                "red works only with positives"
              ),
                n(t.red && t.red === e.red, "red works only with red numbers");
            }),
            (T.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (l(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (T.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (T.prototype.add = function (t, e) {
              this._verify2(t, e);
              var r = t.add(e);
              return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
            }),
            (T.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var r = t.iadd(e);
              return r.cmp(this.m) >= 0 && r.isub(this.m), r;
            }),
            (T.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var r = t.sub(e);
              return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
            }),
            (T.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var r = t.isub(e);
              return r.cmpn(0) < 0 && r.iadd(this.m), r;
            }),
            (T.prototype.shl = function (t, e) {
              return this._verify1(t), this.imod(t.ushln(e));
            }),
            (T.prototype.imul = function (t, e) {
              return this._verify2(t, e), this.imod(t.imul(e));
            }),
            (T.prototype.mul = function (t, e) {
              return this._verify2(t, e), this.imod(t.mul(e));
            }),
            (T.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (T.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (T.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((n(e % 2 == 1), 3 === e)) {
                var r = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, r);
              }
              for (
                var i = this.m.subn(1), s = 0;
                !i.isZero() && 0 === i.andln(1);

              )
                s++, i.iushrn(1);
              n(!i.isZero());
              var a = new o(1).toRed(this),
                u = a.redNeg(),
                h = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              for (
                l = new o(2 * l * l).toRed(this);
                0 !== this.pow(l, h).cmp(u);

              )
                l.redIAdd(u);
              for (
                var c = this.pow(l, i),
                  f = this.pow(t, i.addn(1).iushrn(1)),
                  d = this.pow(t, i),
                  p = s;
                0 !== d.cmp(a);

              ) {
                for (var g = d, m = 0; 0 !== g.cmp(a); m++) g = g.redSqr();
                n(m < p);
                var y = this.pow(c, new o(1).iushln(p - m - 1));
                (f = f.redMul(y)), (c = y.redSqr()), (d = d.redMul(c)), (p = m);
              }
              return f;
            }),
            (T.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (T.prototype.pow = function (t, e) {
              if (e.isZero()) return new o(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var r = new Array(16);
              (r[0] = new o(1).toRed(this)), (r[1] = t);
              for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
              var i = r[0],
                s = 0,
                a = 0,
                u = e.bitLength() % 26;
              for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
                for (var h = e.words[n], l = u - 1; l >= 0; l--) {
                  var c = (h >> l) & 1;
                  i !== r[0] && (i = this.sqr(i)),
                    0 !== c || 0 !== s
                      ? ((s <<= 1),
                        (s |= c),
                        (4 === ++a || (0 === n && 0 === l)) &&
                          ((i = this.mul(i, r[s])), (a = 0), (s = 0)))
                      : (a = 0);
                }
                u = 26;
              }
              return i;
            }),
            (T.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (T.prototype.convertFrom = function (t) {
              var e = t.clone();
              return (e.red = null), e;
            }),
            (o.mont = function (t) {
              return new A(t);
            }),
            i(A, T),
            (A.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (A.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return (e.red = null), e;
            }),
            (A.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return (t.words[0] = 0), (t.length = 1), t;
              var r = t.imul(e),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                o = i;
              return (
                i.cmp(this.m) >= 0
                  ? (o = i.isub(this.m))
                  : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (A.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
              var r = t.mul(e),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                s = i;
              return (
                i.cmp(this.m) >= 0
                  ? (s = i.isub(this.m))
                  : i.cmpn(0) < 0 && (s = i.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (A.prototype.invm = function (t) {
              return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
            });
        })((t = r.nmd(t)), this);
      },
      40226: (t, e, r) => {
        "use strict";
        var n = r(40243),
          i = r(21044),
          o = r(69482);
        function s() {
          return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function a(t, e) {
          if (s() < e) throw new RangeError("Invalid typed array length");
          return (
            u.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(e)).__proto__ = u.prototype)
              : (null === t && (t = new u(e)), (t.length = e)),
            t
          );
        }
        function u(t, e, r) {
          if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
            return new u(t, e, r);
          if ("number" == typeof t) {
            if ("string" == typeof e)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return c(this, t);
          }
          return h(this, t, e, r);
        }
        function h(t, e, r, n) {
          if ("number" == typeof e)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
            ? (function (t, e, r, n) {
                if ((e.byteLength, r < 0 || e.byteLength < r))
                  throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < r + (n || 0))
                  throw new RangeError("'length' is out of bounds");
                e =
                  void 0 === r && void 0 === n
                    ? new Uint8Array(e)
                    : void 0 === n
                    ? new Uint8Array(e, r)
                    : new Uint8Array(e, r, n);
                u.TYPED_ARRAY_SUPPORT
                  ? ((t = e).__proto__ = u.prototype)
                  : (t = f(t, e));
                return t;
              })(t, e, r, n)
            : "string" == typeof e
            ? (function (t, e, r) {
                ("string" == typeof r && "" !== r) || (r = "utf8");
                if (!u.isEncoding(r))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var n = 0 | p(e, r),
                  i = (t = a(t, n)).write(e, r);
                i !== n && (t = t.slice(0, i));
                return t;
              })(t, e, r)
            : (function (t, e) {
                if (u.isBuffer(e)) {
                  var r = 0 | d(e.length);
                  return 0 === (t = a(t, r)).length || e.copy(t, 0, 0, r), t;
                }
                if (e) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      e.buffer instanceof ArrayBuffer) ||
                    "length" in e
                  )
                    return "number" != typeof e.length || (n = e.length) != n
                      ? a(t, 0)
                      : f(t, e);
                  if ("Buffer" === e.type && o(e.data)) return f(t, e.data);
                }
                var n;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(t, e);
        }
        function l(t) {
          if ("number" != typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function c(t, e) {
          if ((l(e), (t = a(t, e < 0 ? 0 : 0 | d(e))), !u.TYPED_ARRAY_SUPPORT))
            for (var r = 0; r < e; ++r) t[r] = 0;
          return t;
        }
        function f(t, e) {
          var r = e.length < 0 ? 0 : 0 | d(e.length);
          t = a(t, r);
          for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
          return t;
        }
        function d(t) {
          if (t >= s())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                s().toString(16) +
                " bytes"
            );
          return 0 | t;
        }
        function p(t, e) {
          if (u.isBuffer(t)) return t.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          "string" != typeof t && (t = "" + t);
          var r = t.length;
          if (0 === r) return 0;
          for (var n = !1; ; )
            switch (e) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;
              case "utf8":
              case "utf-8":
              case void 0:
                return D(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;
              case "hex":
                return r >>> 1;
              case "base64":
                return z(t).length;
              default:
                if (n) return D(t).length;
                (e = ("" + e).toLowerCase()), (n = !0);
            }
        }
        function g(t, e, r) {
          var n = !1;
          if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
          if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
            return "";
          if ((r >>>= 0) <= (e >>>= 0)) return "";
          for (t || (t = "utf8"); ; )
            switch (t) {
              case "hex":
                return N(this, e, r);
              case "utf8":
              case "utf-8":
                return T(this, e, r);
              case "ascii":
                return O(this, e, r);
              case "latin1":
              case "binary":
                return P(this, e, r);
              case "base64":
                return R(this, e, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return k(this, e, r);
              default:
                if (n) throw new TypeError("Unknown encoding: " + t);
                (t = (t + "").toLowerCase()), (n = !0);
            }
        }
        function m(t, e, r) {
          var n = t[e];
          (t[e] = t[r]), (t[r] = n);
        }
        function y(t, e, r, n, i) {
          if (0 === t.length) return -1;
          if (
            ("string" == typeof r
              ? ((n = r), (r = 0))
              : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
            (r = +r),
            isNaN(r) && (r = i ? 0 : t.length - 1),
            r < 0 && (r = t.length + r),
            r >= t.length)
          ) {
            if (i) return -1;
            r = t.length - 1;
          } else if (r < 0) {
            if (!i) return -1;
            r = 0;
          }
          if (("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)))
            return 0 === e.length ? -1 : v(t, e, r, n, i);
          if ("number" == typeof e)
            return (
              (e &= 255),
              u.TYPED_ARRAY_SUPPORT &&
              "function" == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(t, e, r)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                : v(t, [e], r, n, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function v(t, e, r, n, i) {
          var o,
            s = 1,
            a = t.length,
            u = e.length;
          if (
            void 0 !== n &&
            ("ucs2" === (n = String(n).toLowerCase()) ||
              "ucs-2" === n ||
              "utf16le" === n ||
              "utf-16le" === n)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (s = 2), (a /= 2), (u /= 2), (r /= 2);
          }
          function h(t, e) {
            return 1 === s ? t[e] : t.readUInt16BE(e * s);
          }
          if (i) {
            var l = -1;
            for (o = r; o < a; o++)
              if (h(t, o) === h(e, -1 === l ? 0 : o - l)) {
                if ((-1 === l && (l = o), o - l + 1 === u)) return l * s;
              } else -1 !== l && (o -= o - l), (l = -1);
          } else
            for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
              for (var c = !0, f = 0; f < u; f++)
                if (h(t, o + f) !== h(e, f)) {
                  c = !1;
                  break;
                }
              if (c) return o;
            }
          return -1;
        }
        function w(t, e, r, n) {
          r = Number(r) || 0;
          var i = t.length - r;
          n ? (n = Number(n)) > i && (n = i) : (n = i);
          var o = e.length;
          if (o % 2 != 0) throw new TypeError("Invalid hex string");
          n > o / 2 && (n = o / 2);
          for (var s = 0; s < n; ++s) {
            var a = parseInt(e.substr(2 * s, 2), 16);
            if (isNaN(a)) return s;
            t[r + s] = a;
          }
          return s;
        }
        function b(t, e, r, n) {
          return H(D(e, t.length - r), t, r, n);
        }
        function _(t, e, r, n) {
          return H(
            (function (t) {
              for (var e = [], r = 0; r < t.length; ++r)
                e.push(255 & t.charCodeAt(r));
              return e;
            })(e),
            t,
            r,
            n
          );
        }
        function E(t, e, r, n) {
          return _(t, e, r, n);
        }
        function M(t, e, r, n) {
          return H(z(e), t, r, n);
        }
        function S(t, e, r, n) {
          return H(
            (function (t, e) {
              for (
                var r, n, i, o = [], s = 0;
                s < t.length && !((e -= 2) < 0);
                ++s
              )
                (n = (r = t.charCodeAt(s)) >> 8),
                  (i = r % 256),
                  o.push(i),
                  o.push(n);
              return o;
            })(e, t.length - r),
            t,
            r,
            n
          );
        }
        function R(t, e, r) {
          return 0 === e && r === t.length
            ? n.fromByteArray(t)
            : n.fromByteArray(t.slice(e, r));
        }
        function T(t, e, r) {
          r = Math.min(t.length, r);
          for (var n = [], i = e; i < r; ) {
            var o,
              s,
              a,
              u,
              h = t[i],
              l = null,
              c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
            if (i + c <= r)
              switch (c) {
                case 1:
                  h < 128 && (l = h);
                  break;
                case 2:
                  128 == (192 & (o = t[i + 1])) &&
                    (u = ((31 & h) << 6) | (63 & o)) > 127 &&
                    (l = u);
                  break;
                case 3:
                  (o = t[i + 1]),
                    (s = t[i + 2]),
                    128 == (192 & o) &&
                      128 == (192 & s) &&
                      (u = ((15 & h) << 12) | ((63 & o) << 6) | (63 & s)) >
                        2047 &&
                      (u < 55296 || u > 57343) &&
                      (l = u);
                  break;
                case 4:
                  (o = t[i + 1]),
                    (s = t[i + 2]),
                    (a = t[i + 3]),
                    128 == (192 & o) &&
                      128 == (192 & s) &&
                      128 == (192 & a) &&
                      (u =
                        ((15 & h) << 18) |
                        ((63 & o) << 12) |
                        ((63 & s) << 6) |
                        (63 & a)) > 65535 &&
                      u < 1114112 &&
                      (l = u);
              }
            null === l
              ? ((l = 65533), (c = 1))
              : l > 65535 &&
                ((l -= 65536),
                n.push(((l >>> 10) & 1023) | 55296),
                (l = 56320 | (1023 & l))),
              n.push(l),
              (i += c);
          }
          return (function (t) {
            var e = t.length;
            if (e <= A) return String.fromCharCode.apply(String, t);
            var r = "",
              n = 0;
            for (; n < e; )
              r += String.fromCharCode.apply(String, t.slice(n, (n += A)));
            return r;
          })(n);
        }
        (e.Buffer = u),
          (e.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return u.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50),
          (u.TYPED_ARRAY_SUPPORT =
            void 0 !== r.g.TYPED_ARRAY_SUPPORT
              ? r.g.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === t.foo() &&
                        "function" == typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (e.kMaxLength = s()),
          (u.poolSize = 8192),
          (u._augment = function (t) {
            return (t.__proto__ = u.prototype), t;
          }),
          (u.from = function (t, e, r) {
            return h(null, t, e, r);
          }),
          u.TYPED_ARRAY_SUPPORT &&
            ((u.prototype.__proto__ = Uint8Array.prototype),
            (u.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              u[Symbol.species] === u &&
              Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (u.alloc = function (t, e, r) {
            return (function (t, e, r, n) {
              return (
                l(e),
                e <= 0
                  ? a(t, e)
                  : void 0 !== r
                  ? "string" == typeof n
                    ? a(t, e).fill(r, n)
                    : a(t, e).fill(r)
                  : a(t, e)
              );
            })(null, t, e, r);
          }),
          (u.allocUnsafe = function (t) {
            return c(null, t);
          }),
          (u.allocUnsafeSlow = function (t) {
            return c(null, t);
          }),
          (u.isBuffer = function (t) {
            return !(null == t || !t._isBuffer);
          }),
          (u.compare = function (t, e) {
            if (!u.isBuffer(t) || !u.isBuffer(e))
              throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (
              var r = t.length, n = e.length, i = 0, o = Math.min(r, n);
              i < o;
              ++i
            )
              if (t[i] !== e[i]) {
                (r = t[i]), (n = e[i]);
                break;
              }
            return r < n ? -1 : n < r ? 1 : 0;
          }),
          (u.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (u.concat = function (t, e) {
            if (!o(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return u.alloc(0);
            var r;
            if (void 0 === e)
              for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
            var n = u.allocUnsafe(e),
              i = 0;
            for (r = 0; r < t.length; ++r) {
              var s = t[r];
              if (!u.isBuffer(s))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              s.copy(n, i), (i += s.length);
            }
            return n;
          }),
          (u.byteLength = p),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) m(this, e, e + 1);
            return this;
          }),
          (u.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4)
              m(this, e, e + 3), m(this, e + 1, e + 2);
            return this;
          }),
          (u.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8)
              m(this, e, e + 7),
                m(this, e + 1, e + 6),
                m(this, e + 2, e + 5),
                m(this, e + 3, e + 4);
            return this;
          }),
          (u.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? T(this, 0, t)
              : g.apply(this, arguments);
          }),
          (u.prototype.equals = function (t) {
            if (!u.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === u.compare(this, t);
          }),
          (u.prototype.inspect = function () {
            var t = "",
              r = e.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((t = this.toString("hex", 0, r).match(/.{2}/g).join(" ")),
                this.length > r && (t += " ... ")),
              "<Buffer " + t + ">"
            );
          }),
          (u.prototype.compare = function (t, e, r, n, i) {
            if (!u.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === e && (e = 0),
              void 0 === r && (r = t ? t.length : 0),
              void 0 === n && (n = 0),
              void 0 === i && (i = this.length),
              e < 0 || r > t.length || n < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (n >= i && e >= r) return 0;
            if (n >= i) return -1;
            if (e >= r) return 1;
            if (this === t) return 0;
            for (
              var o = (i >>>= 0) - (n >>>= 0),
                s = (r >>>= 0) - (e >>>= 0),
                a = Math.min(o, s),
                h = this.slice(n, i),
                l = t.slice(e, r),
                c = 0;
              c < a;
              ++c
            )
              if (h[c] !== l[c]) {
                (o = h[c]), (s = l[c]);
                break;
              }
            return o < s ? -1 : s < o ? 1 : 0;
          }),
          (u.prototype.includes = function (t, e, r) {
            return -1 !== this.indexOf(t, e, r);
          }),
          (u.prototype.indexOf = function (t, e, r) {
            return y(this, t, e, r, !0);
          }),
          (u.prototype.lastIndexOf = function (t, e, r) {
            return y(this, t, e, r, !1);
          }),
          (u.prototype.write = function (t, e, r, n) {
            if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
            else if (void 0 === r && "string" == typeof e)
              (n = e), (r = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (e |= 0),
                isFinite(r)
                  ? ((r |= 0), void 0 === n && (n = "utf8"))
                  : ((n = r), (r = void 0));
            }
            var i = this.length - e;
            if (
              ((void 0 === r || r > i) && (r = i),
              (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var o = !1; ; )
              switch (n) {
                case "hex":
                  return w(this, t, e, r);
                case "utf8":
                case "utf-8":
                  return b(this, t, e, r);
                case "ascii":
                  return _(this, t, e, r);
                case "latin1":
                case "binary":
                  return E(this, t, e, r);
                case "base64":
                  return M(this, t, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return S(this, t, e, r);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + n);
                  (n = ("" + n).toLowerCase()), (o = !0);
              }
          }),
          (u.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        var A = 4096;
        function O(t, e, r) {
          var n = "";
          r = Math.min(t.length, r);
          for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
          return n;
        }
        function P(t, e, r) {
          var n = "";
          r = Math.min(t.length, r);
          for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
          return n;
        }
        function N(t, e, r) {
          var n = t.length;
          (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
          for (var i = "", o = e; o < r; ++o) i += q(t[o]);
          return i;
        }
        function k(t, e, r) {
          for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2)
            i += String.fromCharCode(n[o] + 256 * n[o + 1]);
          return i;
        }
        function I(t, e, r) {
          if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > r)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function B(t, e, r, n, i, o) {
          if (!u.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > i || e < o)
            throw new RangeError('"value" argument is out of bounds');
          if (r + n > t.length) throw new RangeError("Index out of range");
        }
        function x(t, e, r, n) {
          e < 0 && (e = 65535 + e + 1);
          for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i)
            t[r + i] =
              (e & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
        }
        function C(t, e, r, n) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i)
            t[r + i] = (e >>> (8 * (n ? i : 3 - i))) & 255;
        }
        function L(t, e, r, n, i, o) {
          if (r + n > t.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }
        function j(t, e, r, n, o) {
          return o || L(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
        }
        function F(t, e, r, n, o) {
          return o || L(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
        }
        (u.prototype.slice = function (t, e) {
          var r,
            n = this.length;
          if (
            ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            (e = void 0 === e ? n : ~~e) < 0
              ? (e += n) < 0 && (e = 0)
              : e > n && (e = n),
            e < t && (e = t),
            u.TYPED_ARRAY_SUPPORT)
          )
            (r = this.subarray(t, e)).__proto__ = u.prototype;
          else {
            var i = e - t;
            r = new u(i, void 0);
            for (var o = 0; o < i; ++o) r[o] = this[o + t];
          }
          return r;
        }),
          (u.prototype.readUIntLE = function (t, e, r) {
            (t |= 0), (e |= 0), r || I(t, e, this.length);
            for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
              n += this[t + o] * i;
            return n;
          }),
          (u.prototype.readUIntBE = function (t, e, r) {
            (t |= 0), (e |= 0), r || I(t, e, this.length);
            for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
              n += this[t + --e] * i;
            return n;
          }),
          (u.prototype.readUInt8 = function (t, e) {
            return e || I(t, 1, this.length), this[t];
          }),
          (u.prototype.readUInt16LE = function (t, e) {
            return e || I(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
          (u.prototype.readUInt16BE = function (t, e) {
            return e || I(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
          (u.prototype.readUInt32LE = function (t, e) {
            return (
              e || I(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
          (u.prototype.readUInt32BE = function (t, e) {
            return (
              e || I(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
          (u.prototype.readIntLE = function (t, e, r) {
            (t |= 0), (e |= 0), r || I(t, e, this.length);
            for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
              n += this[t + o] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
          }),
          (u.prototype.readIntBE = function (t, e, r) {
            (t |= 0), (e |= 0), r || I(t, e, this.length);
            for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
              o += this[t + --n] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
          }),
          (u.prototype.readInt8 = function (t, e) {
            return (
              e || I(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (u.prototype.readInt16LE = function (t, e) {
            e || I(t, 2, this.length);
            var r = this[t] | (this[t + 1] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (u.prototype.readInt16BE = function (t, e) {
            e || I(t, 2, this.length);
            var r = this[t + 1] | (this[t] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (u.prototype.readInt32LE = function (t, e) {
            return (
              e || I(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (u.prototype.readInt32BE = function (t, e) {
            return (
              e || I(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (u.prototype.readFloatLE = function (t, e) {
            return e || I(t, 4, this.length), i.read(this, t, !0, 23, 4);
          }),
          (u.prototype.readFloatBE = function (t, e) {
            return e || I(t, 4, this.length), i.read(this, t, !1, 23, 4);
          }),
          (u.prototype.readDoubleLE = function (t, e) {
            return e || I(t, 8, this.length), i.read(this, t, !0, 52, 8);
          }),
          (u.prototype.readDoubleBE = function (t, e) {
            return e || I(t, 8, this.length), i.read(this, t, !1, 52, 8);
          }),
          (u.prototype.writeUIntLE = function (t, e, r, n) {
            ((t = +t), (e |= 0), (r |= 0), n) ||
              B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1,
              o = 0;
            for (this[e] = 255 & t; ++o < r && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + r;
          }),
          (u.prototype.writeUIntBE = function (t, e, r, n) {
            ((t = +t), (e |= 0), (r |= 0), n) ||
              B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1,
              o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + r;
          }),
          (u.prototype.writeUInt8 = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 1, 255, 0),
              u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (u.prototype.writeUInt16LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : x(this, t, e, !0),
              e + 2
            );
          }),
          (u.prototype.writeUInt16BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : x(this, t, e, !1),
              e + 2
            );
          }),
          (u.prototype.writeUInt32LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t))
                : C(this, t, e, !0),
              e + 4
            );
          }),
          (u.prototype.writeUInt32BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : C(this, t, e, !1),
              e + 4
            );
          }),
          (u.prototype.writeIntLE = function (t, e, r, n) {
            if (((t = +t), (e |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              B(this, t, e, r, i - 1, -i);
            }
            var o = 0,
              s = 1,
              a = 0;
            for (this[e] = 255 & t; ++o < r && (s *= 256); )
              t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
                (this[e + o] = (((t / s) >> 0) - a) & 255);
            return e + r;
          }),
          (u.prototype.writeIntBE = function (t, e, r, n) {
            if (((t = +t), (e |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              B(this, t, e, r, i - 1, -i);
            }
            var o = r - 1,
              s = 1,
              a = 0;
            for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
              t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
                (this[e + o] = (((t / s) >> 0) - a) & 255);
            return e + r;
          }),
          (u.prototype.writeInt8 = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 1, 127, -128),
              u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (u.prototype.writeInt16LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : x(this, t, e, !0),
              e + 2
            );
          }),
          (u.prototype.writeInt16BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : x(this, t, e, !1),
              e + 2
            );
          }),
          (u.prototype.writeInt32LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 4, 2147483647, -2147483648),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24))
                : C(this, t, e, !0),
              e + 4
            );
          }),
          (u.prototype.writeInt32BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || B(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : C(this, t, e, !1),
              e + 4
            );
          }),
          (u.prototype.writeFloatLE = function (t, e, r) {
            return j(this, t, e, !0, r);
          }),
          (u.prototype.writeFloatBE = function (t, e, r) {
            return j(this, t, e, !1, r);
          }),
          (u.prototype.writeDoubleLE = function (t, e, r) {
            return F(this, t, e, !0, r);
          }),
          (u.prototype.writeDoubleBE = function (t, e, r) {
            return F(this, t, e, !1, r);
          }),
          (u.prototype.copy = function (t, e, r, n) {
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              n > 0 && n < r && (n = r),
              n === r)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
              t.length - e < n - r && (n = t.length - e + r);
            var i,
              o = n - r;
            if (this === t && r < e && e < n)
              for (i = o - 1; i >= 0; --i) t[i + e] = this[i + r];
            else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < o; ++i) t[i + e] = this[i + r];
            else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
            return o;
          }),
          (u.prototype.fill = function (t, e, r, n) {
            if ("string" == typeof t) {
              if (
                ("string" == typeof e
                  ? ((n = e), (e = 0), (r = this.length))
                  : "string" == typeof r && ((n = r), (r = this.length)),
                1 === t.length)
              ) {
                var i = t.charCodeAt(0);
                i < 256 && (t = i);
              }
              if (void 0 !== n && "string" != typeof n)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof n && !u.isEncoding(n))
                throw new TypeError("Unknown encoding: " + n);
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < r)
              throw new RangeError("Out of range index");
            if (r <= e) return this;
            var o;
            if (
              ((e >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              t || (t = 0),
              "number" == typeof t)
            )
              for (o = e; o < r; ++o) this[o] = t;
            else {
              var s = u.isBuffer(t) ? t : D(new u(t, n).toString()),
                a = s.length;
              for (o = 0; o < r - e; ++o) this[o + e] = s[o % a];
            }
            return this;
          });
        var U = /[^+\/0-9A-Za-z-_]/g;
        function q(t) {
          return t < 16 ? "0" + t.toString(16) : t.toString(16);
        }
        function D(t, e) {
          var r;
          e = e || 1 / 0;
          for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
            if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
              if (!i) {
                if (r > 56319) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === n) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = r;
                continue;
              }
              if (r < 56320) {
                (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
                continue;
              }
              r = 65536 + (((i - 55296) << 10) | (r - 56320));
            } else i && (e -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), r < 128)) {
              if ((e -= 1) < 0) break;
              o.push(r);
            } else if (r < 2048) {
              if ((e -= 2) < 0) break;
              o.push((r >> 6) | 192, (63 & r) | 128);
            } else if (r < 65536) {
              if ((e -= 3) < 0) break;
              o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              o.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              );
            }
          }
          return o;
        }
        function z(t) {
          return n.toByteArray(
            (function (t) {
              if (
                (t = (function (t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                })(t).replace(U, "")).length < 2
              )
                return "";
              for (; t.length % 4 != 0; ) t += "=";
              return t;
            })(t)
          );
        }
        function H(t, e, r, n) {
          for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
            e[i + r] = t[i];
          return i;
        }
      },
      34331: (t, e, r) => {
        r(99775), r(2380);
        const n = r(92001),
          i = (t, e) => t + e,
          o = ["sync", "latest"];
        function s(t) {
          return Number.parseInt(t, 16);
        }
        t.exports = class extends n {
          constructor(t = {}) {
            super(),
              (this._blockResetDuration = t.blockResetDuration || 2e4),
              this._blockResetTimeout,
              (this._currentBlock = null),
              (this._isRunning = !1),
              (this._onNewListener = this._onNewListener.bind(this)),
              (this._onRemoveListener = this._onRemoveListener.bind(this)),
              (this._resetCurrentBlock = this._resetCurrentBlock.bind(this)),
              this._setupInternalEvents();
          }
          isRunning() {
            return this._isRunning;
          }
          getCurrentBlock() {
            return this._currentBlock;
          }
          async getLatestBlock() {
            if (this._currentBlock) return this._currentBlock;
            return await new Promise((t) => this.once("latest", t));
          }
          removeAllListeners(t) {
            t ? super.removeAllListeners(t) : super.removeAllListeners(),
              this._setupInternalEvents(),
              this._onRemoveListener();
          }
          _start() {}
          _end() {}
          _setupInternalEvents() {
            this.removeListener("newListener", this._onNewListener),
              this.removeListener("removeListener", this._onRemoveListener),
              this.on("newListener", this._onNewListener),
              this.on("removeListener", this._onRemoveListener);
          }
          _onNewListener(t, e) {
            o.includes(t) && this._maybeStart();
          }
          _onRemoveListener(t, e) {
            this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
          }
          _maybeStart() {
            this._isRunning ||
              ((this._isRunning = !0),
              this._cancelBlockResetTimeout(),
              this._start());
          }
          _maybeEnd() {
            this._isRunning &&
              ((this._isRunning = !1),
              this._setupBlockResetTimeout(),
              this._end());
          }
          _getBlockTrackerEventCount() {
            return o.map((t) => this.listenerCount(t)).reduce(i);
          }
          _newPotentialLatest(t) {
            const e = this._currentBlock;
            (e && s(t) <= s(e)) || this._setCurrentBlock(t);
          }
          _setCurrentBlock(t) {
            const e = this._currentBlock;
            (this._currentBlock = t),
              this.emit("latest", t),
              this.emit("sync", { oldBlock: e, newBlock: t });
          }
          _setupBlockResetTimeout() {
            this._cancelBlockResetTimeout(),
              (this._blockResetTimeout = setTimeout(
                this._resetCurrentBlock,
                this._blockResetDuration
              )),
              this._blockResetTimeout.unref && this._blockResetTimeout.unref();
          }
          _cancelBlockResetTimeout() {
            clearTimeout(this._blockResetTimeout);
          }
          _resetCurrentBlock() {
            this._currentBlock = null;
          }
        };
      },
      46211: (t, e, r) => {
        const n = r(2380),
          i = r(34331);
        function o(t, e) {
          return new Promise((r) => {
            const n = setTimeout(r, t);
            n.unref && e && n.unref();
          });
        }
        t.exports = class extends i {
          constructor(t = {}) {
            if (!t.provider)
              throw new Error("PollingBlockTracker - no provider specified.");
            const e = t.pollingInterval || 2e4,
              r = t.retryTimeout || e / 10,
              n = void 0 === t.keepEventLoopActive || t.keepEventLoopActive,
              i = t.setSkipCacheFlag || !1;
            super(Object.assign({ blockResetDuration: e }, t)),
              (this._provider = t.provider),
              (this._pollingInterval = e),
              (this._retryTimeout = r),
              (this._keepEventLoopActive = n),
              (this._setSkipCacheFlag = i);
          }
          async checkForLatestBlock() {
            return await this._updateLatestBlock(), await this.getLatestBlock();
          }
          _start() {
            this._performSync().catch((t) => this.emit("error", t));
          }
          async _performSync() {
            for (; this._isRunning; )
              try {
                await this._updateLatestBlock(),
                  await o(this._pollingInterval, !this._keepEventLoopActive);
              } catch (t) {
                const e = new Error(
                  `PollingBlockTracker - encountered an error while attempting to update latest block:\n${t.stack}`
                );
                try {
                  this.emit("error", e);
                } catch (t) {
                  console.error(e);
                }
                await o(this._retryTimeout, !this._keepEventLoopActive);
              }
          }
          async _updateLatestBlock() {
            const t = await this._fetchLatestBlock();
            this._newPotentialLatest(t);
          }
          async _fetchLatestBlock() {
            const t = {
              jsonrpc: "2.0",
              id: 1,
              method: "eth_blockNumber",
              params: [],
            };
            this._setSkipCacheFlag && (t.skipCache = !0);
            const e = await n((e) => this._provider.sendAsync(t, e))();
            if (e.error)
              throw new Error(
                `PollingBlockTracker - encountered error fetching block:\n${e.error}`
              );
            return e.result;
          }
        };
      },
      78186: (t, e, r) => {
        const n = r(41165);
        t.exports = class extends n {
          constructor() {
            super(), (this.allResults = []);
          }
          async update() {
            throw new Error(
              "BaseFilterWithHistory - no update method specified"
            );
          }
          addResults(t) {
            (this.allResults = this.allResults.concat(t)), super.addResults(t);
          }
          addInitialResults(t) {
            (this.allResults = this.allResults.concat(t)),
              super.addInitialResults(t);
          }
          getAllResults() {
            return this.allResults;
          }
        };
      },
      41165: (t, e, r) => {
        const n = r(58982).default;
        t.exports = class extends n {
          constructor() {
            super(), (this.updates = []);
          }
          async initialize() {}
          async update() {
            throw new Error("BaseFilter - no update method specified");
          }
          addResults(t) {
            (this.updates = this.updates.concat(t)),
              t.forEach((t) => this.emit("update", t));
          }
          addInitialResults(t) {}
          getChangesAndClear() {
            const t = this.updates;
            return (this.updates = []), t;
          }
        };
      },
      58901: (t, e, r) => {
        const n = r(41165),
          i = r(28961),
          { incrementHexInt: o } = r(21444);
        t.exports = class extends n {
          constructor({ provider: t, params: e }) {
            super(), (this.type = "block"), (this.provider = t);
          }
          async update({ oldBlock: t, newBlock: e }) {
            const r = e,
              n = o(t),
              s = (
                await i({ provider: this.provider, fromBlock: n, toBlock: r })
              ).map((t) => t.hash);
            this.addResults(s);
          }
        };
      },
      28961: (t) => {
        function e(t) {
          return null == t ? t : Number.parseInt(t, 16);
        }
        function r(t) {
          if (null == t) return t;
          return "0x" + t.toString(16);
        }
        t.exports = async function ({ provider: t, fromBlock: n, toBlock: i }) {
          n || (n = i);
          const o = e(n),
            s = e(i),
            a = Array(s - o + 1)
              .fill()
              .map((t, e) => o + e)
              .map(r);
          return await Promise.all(
            a.map((e) =>
              (function (t, e, r) {
                return new Promise((n, i) => {
                  t.sendAsync(
                    { id: 1, jsonrpc: "2.0", method: e, params: r },
                    (t, e) => {
                      if (t) return i(t);
                      n(e.result);
                    }
                  );
                });
              })(t, "eth_getBlockByNumber", [e, !1])
            )
          );
        };
      },
      21444: (t) => {
        function e(t) {
          return t.sort((t, e) =>
            "latest" === t || "earliest" === e
              ? 1
              : "latest" === e || "earliest" === t
              ? -1
              : r(t) - r(e)
          );
        }
        function r(t) {
          return null == t ? t : Number.parseInt(t, 16);
        }
        function n(t) {
          if (null == t) return t;
          let e = t.toString(16);
          return e.length % 2 && (e = "0" + e), "0x" + e;
        }
        function i() {
          return Math.floor(16 * Math.random()).toString(16);
        }
        t.exports = {
          minBlockRef: function (...t) {
            return e(t)[0];
          },
          maxBlockRef: function (...t) {
            const r = e(t);
            return r[r.length - 1];
          },
          sortBlockRefs: e,
          bnToHex: function (t) {
            return "0x" + t.toString(16);
          },
          blockRefIsNumber: function (t) {
            return t && !["earliest", "latest", "pending"].includes(t);
          },
          hexToInt: r,
          incrementHexInt: function (t) {
            if (null == t) return t;
            return n(r(t) + 1);
          },
          intToHex: n,
          unsafeRandomBytes: function (t) {
            let e = "0x";
            for (let r = 0; r < t; r++) (e += i()), (e += i());
            return e;
          },
        };
      },
      2509: (t, e, r) => {
        const n = r(48311).WU,
          { createAsyncMiddleware: i } = r(96794),
          o = r(26175),
          s = r(6590),
          a = r(58901),
          u = r(63820),
          { intToHex: h, hexToInt: l } = r(21444);
        function c(t) {
          return f(async (...e) => {
            const r = await t(...e);
            return h(r.id);
          });
        }
        function f(t) {
          return i(async (e, r) => {
            const n = await t.apply(null, e.params);
            r.result = n;
          });
        }
        function d(t, e) {
          const r = [];
          for (let e in t) r.push(t[e]);
          return r;
        }
        t.exports = function ({ blockTracker: t, provider: e }) {
          let r = 0,
            i = {};
          const p = new n(),
            g = (function ({ mutex: t }) {
              return (e) => async (r, n, i, o) => {
                (await t.acquire())(), e(r, n, i, o);
              };
            })({ mutex: p }),
            m = o({
              eth_newFilter: g(c(v)),
              eth_newBlockFilter: g(c(w)),
              eth_newPendingTransactionFilter: g(c(b)),
              eth_uninstallFilter: g(f(M)),
              eth_getFilterChanges: g(f(_)),
              eth_getFilterLogs: g(f(E)),
            }),
            y = async ({ oldBlock: t, newBlock: e }) => {
              if (0 === i.length) return;
              const r = await p.acquire();
              try {
                await Promise.all(
                  d(i).map(async (r) => {
                    try {
                      await r.update({ oldBlock: t, newBlock: e });
                    } catch (t) {
                      console.error(t);
                    }
                  })
                );
              } catch (t) {
                console.error(t);
              }
              r();
            };
          return (
            (m.newLogFilter = v),
            (m.newBlockFilter = w),
            (m.newPendingTransactionFilter = b),
            (m.uninstallFilter = M),
            (m.getFilterChanges = _),
            (m.getFilterLogs = E),
            (m.destroy = () => {
              !(async function () {
                const t = d(i).length;
                (i = {}), R({ prevFilterCount: t, newFilterCount: 0 });
              })();
            }),
            m
          );
          async function v(t) {
            const r = new s({ provider: e, params: t });
            await S(r);
            return r;
          }
          async function w() {
            const t = new a({ provider: e });
            await S(t);
            return t;
          }
          async function b() {
            const t = new u({ provider: e });
            await S(t);
            return t;
          }
          async function _(t) {
            const e = l(t),
              r = i[e];
            if (!r) throw new Error(`No filter for index "${e}"`);
            return r.getChangesAndClear();
          }
          async function E(t) {
            const e = l(t),
              r = i[e];
            if (!r) throw new Error(`No filter for index "${e}"`);
            return (
              "log" === r.type ? (results = r.getAllResults()) : (results = []),
              results
            );
          }
          async function M(t) {
            const e = l(t),
              r = i[e],
              n = Boolean(r);
            return (
              n &&
                (await (async function (t) {
                  const e = d(i).length;
                  delete i[t];
                  const r = d(i).length;
                  R({ prevFilterCount: e, newFilterCount: r });
                })(e)),
              n
            );
          }
          async function S(e) {
            const n = d(i).length,
              o = await t.getLatestBlock();
            await e.initialize({ currentBlock: o }),
              r++,
              (i[r] = e),
              (e.id = r),
              (e.idHex = h(r));
            return R({ prevFilterCount: n, newFilterCount: d(i).length }), r;
          }
          function R({ prevFilterCount: e, newFilterCount: r }) {
            0 === e && r > 0
              ? t.on("sync", y)
              : e > 0 && 0 === r && t.removeListener("sync", y);
          }
        };
      },
      6590: (t, e, r) => {
        const n = r(99775),
          i = r(4884),
          o = r(78186),
          {
            bnToHex: s,
            hexToInt: a,
            incrementHexInt: u,
            minBlockRef: h,
            blockRefIsNumber: l,
          } = r(21444);
        t.exports = class extends o {
          constructor({ provider: t, params: e }) {
            super(),
              (this.type = "log"),
              (this.ethQuery = new n(t)),
              (this.params = Object.assign(
                {
                  fromBlock: "latest",
                  toBlock: "latest",
                  address: void 0,
                  topics: [],
                },
                e
              )),
              this.params.address &&
                (Array.isArray(this.params.address) ||
                  (this.params.address = [this.params.address]),
                (this.params.address = this.params.address.map((t) =>
                  t.toLowerCase()
                )));
          }
          async initialize({ currentBlock: t }) {
            let e = this.params.fromBlock;
            ["latest", "pending"].includes(e) && (e = t),
              "earliest" === e && (e = "0x0"),
              (this.params.fromBlock = e);
            const r = h(this.params.toBlock, t),
              n = Object.assign({}, this.params, { toBlock: r }),
              i = await this._fetchLogs(n);
            this.addInitialResults(i);
          }
          async update({ oldBlock: t, newBlock: e }) {
            const r = e;
            let n;
            n = t ? u(t) : e;
            const i = Object.assign({}, this.params, {
                fromBlock: n,
                toBlock: r,
              }),
              o = (await this._fetchLogs(i)).filter((t) => this.matchLog(t));
            this.addResults(o);
          }
          async _fetchLogs(t) {
            return await i((e) => this.ethQuery.getLogs(t, e))();
          }
          matchLog(t) {
            if (a(this.params.fromBlock) >= a(t.blockNumber)) return !1;
            if (
              l(this.params.toBlock) &&
              a(this.params.toBlock) <= a(t.blockNumber)
            )
              return !1;
            const e = t.address && t.address.toLowerCase();
            if (this.params.address && e && !this.params.address.includes(e))
              return !1;
            return this.params.topics.every((e, r) => {
              let n = t.topics[r];
              if (!n) return !1;
              n = n.toLowerCase();
              let i = Array.isArray(e) ? e : [e];
              if (i.includes(null)) return !0;
              i = i.map((t) => t.toLowerCase());
              return i.includes(n);
            });
          }
        };
      },
      4884: (t) => {
        "use strict";
        const e = (t, e, r, n) =>
            function (...i) {
              return new (0, e.promiseModule)((o, s) => {
                e.multiArgs
                  ? i.push((...t) => {
                      e.errorFirst ? (t[0] ? s(t) : (t.shift(), o(t))) : o(t);
                    })
                  : e.errorFirst
                  ? i.push((t, e) => {
                      t ? s(t) : o(e);
                    })
                  : i.push(o);
                const a = this === r ? n : this;
                Reflect.apply(t, a, i);
              });
            },
          r = new WeakMap();
        t.exports = (t, n) => {
          n = {
            exclude: [/.+(?:Sync|Stream)$/],
            errorFirst: !0,
            promiseModule: Promise,
            ...n,
          };
          const i = typeof t;
          if (null === t || ("object" !== i && "function" !== i))
            throw new TypeError(
              `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${
                null === t ? "null" : i
              }\``
            );
          const o = new WeakMap(),
            s = new Proxy(t, {
              apply(t, r, i) {
                const a = o.get(t);
                if (a) return Reflect.apply(a, r, i);
                const u = n.excludeMain ? t : e(t, n, s, t);
                return o.set(t, u), Reflect.apply(u, r, i);
              },
              get(t, i) {
                const a = t[i];
                if (
                  !((t, e) => {
                    let i = r.get(t);
                    if ((i || ((i = {}), r.set(t, i)), e in i)) return i[e];
                    const o = (t) =>
                        "string" == typeof t || "symbol" == typeof e
                          ? e === t
                          : t.test(e),
                      s = Reflect.getOwnPropertyDescriptor(t, e),
                      a = void 0 === s || s.writable || s.configurable,
                      u =
                        (n.include ? n.include.some(o) : !n.exclude.some(o)) &&
                        a;
                    return (i[e] = u), u;
                  })(t, i) ||
                  a === Function.prototype[i]
                )
                  return a;
                const u = o.get(a);
                if (u) return u;
                if ("function" == typeof a) {
                  const r = e(a, n, s, t);
                  return o.set(a, r), r;
                }
                return a;
              },
            });
          return s;
        };
      },
      47177: (t, e, r) => {
        const n = r(58982).default,
          i = r(26175),
          { createAsyncMiddleware: o } = r(96794),
          s = r(2509),
          { unsafeRandomBytes: a, incrementHexInt: u } = r(21444),
          h = r(28961);
        function l(t) {
          return {
            hash: t.hash,
            parentHash: t.parentHash,
            sha3Uncles: t.sha3Uncles,
            miner: t.miner,
            stateRoot: t.stateRoot,
            transactionsRoot: t.transactionsRoot,
            receiptsRoot: t.receiptsRoot,
            logsBloom: t.logsBloom,
            difficulty: t.difficulty,
            number: t.number,
            gasLimit: t.gasLimit,
            gasUsed: t.gasUsed,
            nonce: t.nonce,
            mixHash: t.mixHash,
            timestamp: t.timestamp,
            extraData: t.extraData,
          };
        }
        t.exports = function ({ blockTracker: t, provider: e }) {
          const r = {},
            c = s({ blockTracker: t, provider: e });
          let f = !1;
          const d = new n(),
            p = i({
              eth_subscribe: o(async function (n, i) {
                if (f)
                  throw new Error(
                    "SubscriptionManager - attempting to use after destroying"
                  );
                const o = n.params[0],
                  s = a(16);
                let d;
                switch (o) {
                  case "newHeads":
                    d = p({ subId: s });
                    break;
                  case "logs":
                    const t = n.params[1];
                    d = m({ subId: s, filter: await c.newLogFilter(t) });
                    break;
                  default:
                    throw new Error(
                      `SubscriptionManager - unsupported subscription type "${o}"`
                    );
                }
                return (r[s] = d), void (i.result = s);
                function p({ subId: r }) {
                  const n = {
                    type: o,
                    destroy: async () => {
                      t.removeListener("sync", n.update);
                    },
                    update: async ({ oldBlock: t, newBlock: n }) => {
                      const i = n,
                        o = u(t);
                      (await h({ provider: e, fromBlock: o, toBlock: i }))
                        .map(l)
                        .forEach((t) => {
                          g(r, t);
                        });
                    },
                  };
                  return t.on("sync", n.update), n;
                }
                function m({ subId: t, filter: e }) {
                  e.on("update", (e) => g(t, e));
                  return {
                    type: o,
                    destroy: async () => await c.uninstallFilter(e.idHex),
                  };
                }
              }),
              eth_unsubscribe: o(async function (t, e) {
                if (f)
                  throw new Error(
                    "SubscriptionManager - attempting to use after destroying"
                  );
                const n = t.params[0],
                  i = r[n];
                if (!i) return void (e.result = !1);
                delete r[n], await i.destroy(), (e.result = !0);
              }),
            });
          return (
            (p.destroy = function () {
              d.removeAllListeners();
              for (const t in r) r[t].destroy(), delete r[t];
              f = !0;
            }),
            { events: d, middleware: p }
          );
          function g(t, e) {
            d.emit("notification", {
              jsonrpc: "2.0",
              method: "eth_subscription",
              params: { subscription: t, result: e },
            });
          }
        };
      },
      63820: (t, e, r) => {
        const n = r(41165),
          i = r(28961),
          { incrementHexInt: o } = r(21444);
        t.exports = class extends n {
          constructor({ provider: t }) {
            super(), (this.type = "tx"), (this.provider = t);
          }
          async update({ oldBlock: t }) {
            const e = t,
              r = o(t),
              n = await i({
                provider: this.provider,
                fromBlock: r,
                toBlock: e,
              }),
              s = [];
            for (const t of n) s.push(...t.transactions);
            this.addResults(s);
          }
        };
      },
      48749: (t) => {
        t.exports = function (t) {
          return (e, r, n, i) => {
            const o = t[e.method];
            return void 0 === o
              ? n()
              : "function" == typeof o
              ? o(e, r, n, i)
              : ((r.result = o), i());
          };
        };
      },
      26175: (t, e, r) => {
        t.exports = r(48749);
      },
      99775: (t, e, r) => {
        const n = r(55409),
          i = r(34831)();
        function o(t) {
          this.currentProvider = t;
        }
        function s(t) {
          return function () {
            const e = this;
            var r = [].slice.call(arguments),
              n = r.pop();
            e.sendAsync({ method: t, params: r }, n);
          };
        }
        function a(t, e) {
          return function () {
            const r = this;
            var n = [].slice.call(arguments),
              i = n.pop();
            n.length < t && n.push("latest"),
              r.sendAsync({ method: e, params: n }, i);
          };
        }
        (t.exports = o),
          (o.prototype.getBalance = a(2, "eth_getBalance")),
          (o.prototype.getCode = a(2, "eth_getCode")),
          (o.prototype.getTransactionCount = a(2, "eth_getTransactionCount")),
          (o.prototype.getStorageAt = a(3, "eth_getStorageAt")),
          (o.prototype.call = a(2, "eth_call")),
          (o.prototype.protocolVersion = s("eth_protocolVersion")),
          (o.prototype.syncing = s("eth_syncing")),
          (o.prototype.coinbase = s("eth_coinbase")),
          (o.prototype.mining = s("eth_mining")),
          (o.prototype.hashrate = s("eth_hashrate")),
          (o.prototype.gasPrice = s("eth_gasPrice")),
          (o.prototype.accounts = s("eth_accounts")),
          (o.prototype.blockNumber = s("eth_blockNumber")),
          (o.prototype.getBlockTransactionCountByHash = s(
            "eth_getBlockTransactionCountByHash"
          )),
          (o.prototype.getBlockTransactionCountByNumber = s(
            "eth_getBlockTransactionCountByNumber"
          )),
          (o.prototype.getUncleCountByBlockHash = s(
            "eth_getUncleCountByBlockHash"
          )),
          (o.prototype.getUncleCountByBlockNumber = s(
            "eth_getUncleCountByBlockNumber"
          )),
          (o.prototype.sign = s("eth_sign")),
          (o.prototype.sendTransaction = s("eth_sendTransaction")),
          (o.prototype.sendRawTransaction = s("eth_sendRawTransaction")),
          (o.prototype.estimateGas = s("eth_estimateGas")),
          (o.prototype.getBlockByHash = s("eth_getBlockByHash")),
          (o.prototype.getBlockByNumber = s("eth_getBlockByNumber")),
          (o.prototype.getTransactionByHash = s("eth_getTransactionByHash")),
          (o.prototype.getTransactionByBlockHashAndIndex = s(
            "eth_getTransactionByBlockHashAndIndex"
          )),
          (o.prototype.getTransactionByBlockNumberAndIndex = s(
            "eth_getTransactionByBlockNumberAndIndex"
          )),
          (o.prototype.getTransactionReceipt = s("eth_getTransactionReceipt")),
          (o.prototype.getUncleByBlockHashAndIndex = s(
            "eth_getUncleByBlockHashAndIndex"
          )),
          (o.prototype.getUncleByBlockNumberAndIndex = s(
            "eth_getUncleByBlockNumberAndIndex"
          )),
          (o.prototype.getCompilers = s("eth_getCompilers")),
          (o.prototype.compileLLL = s("eth_compileLLL")),
          (o.prototype.compileSolidity = s("eth_compileSolidity")),
          (o.prototype.compileSerpent = s("eth_compileSerpent")),
          (o.prototype.newFilter = s("eth_newFilter")),
          (o.prototype.newBlockFilter = s("eth_newBlockFilter")),
          (o.prototype.newPendingTransactionFilter = s(
            "eth_newPendingTransactionFilter"
          )),
          (o.prototype.uninstallFilter = s("eth_uninstallFilter")),
          (o.prototype.getFilterChanges = s("eth_getFilterChanges")),
          (o.prototype.getFilterLogs = s("eth_getFilterLogs")),
          (o.prototype.getLogs = s("eth_getLogs")),
          (o.prototype.getWork = s("eth_getWork")),
          (o.prototype.submitWork = s("eth_submitWork")),
          (o.prototype.submitHashrate = s("eth_submitHashrate")),
          (o.prototype.sendAsync = function (t, e) {
            var r;
            this.currentProvider.sendAsync(
              ((r = t), n({ id: i(), jsonrpc: "2.0", params: [] }, r)),
              function (t, r) {
                if (
                  (!t &&
                    r.error &&
                    (t = new Error(
                      "EthQuery - RPC Error - " + r.error.message
                    )),
                  t)
                )
                  return e(t);
                e(null, r.result);
              }
            );
          });
      },
      27285: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.EthereumProviderError = e.EthereumRpcError = void 0);
        const n = r(6222);
        class i extends Error {
          constructor(t, e, r) {
            if (!Number.isInteger(t))
              throw new Error('"code" must be an integer.');
            if (!e || "string" != typeof e)
              throw new Error('"message" must be a nonempty string.');
            super(e), (this.code = t), void 0 !== r && (this.data = r);
          }
          serialize() {
            const t = { code: this.code, message: this.message };
            return (
              void 0 !== this.data && (t.data = this.data),
              this.stack && (t.stack = this.stack),
              t
            );
          }
          toString() {
            return n.default(this.serialize(), o, 2);
          }
        }
        e.EthereumRpcError = i;
        function o(t, e) {
          if ("[Circular]" !== e) return e;
        }
        e.EthereumProviderError = class extends i {
          constructor(t, e, r) {
            if (
              !(function (t) {
                return Number.isInteger(t) && t >= 1e3 && t <= 4999;
              })(t)
            )
              throw new Error(
                '"code" must be an integer such that: 1000 <= code <= 4999'
              );
            super(t, e, r);
          }
        };
      },
      26420: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.errorValues = e.errorCodes = void 0),
          (e.errorCodes = {
            rpc: {
              invalidInput: -32e3,
              resourceNotFound: -32001,
              resourceUnavailable: -32002,
              transactionRejected: -32003,
              methodNotSupported: -32004,
              limitExceeded: -32005,
              parse: -32700,
              invalidRequest: -32600,
              methodNotFound: -32601,
              invalidParams: -32602,
              internal: -32603,
            },
            provider: {
              userRejectedRequest: 4001,
              unauthorized: 4100,
              unsupportedMethod: 4200,
              disconnected: 4900,
              chainDisconnected: 4901,
            },
          }),
          (e.errorValues = {
            "-32700": {
              standard: "JSON RPC 2.0",
              message:
                "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
            },
            "-32600": {
              standard: "JSON RPC 2.0",
              message: "The JSON sent is not a valid Request object.",
            },
            "-32601": {
              standard: "JSON RPC 2.0",
              message: "The method does not exist / is not available.",
            },
            "-32602": {
              standard: "JSON RPC 2.0",
              message: "Invalid method parameter(s).",
            },
            "-32603": {
              standard: "JSON RPC 2.0",
              message: "Internal JSON-RPC error.",
            },
            "-32000": { standard: "EIP-1474", message: "Invalid input." },
            "-32001": { standard: "EIP-1474", message: "Resource not found." },
            "-32002": {
              standard: "EIP-1474",
              message: "Resource unavailable.",
            },
            "-32003": {
              standard: "EIP-1474",
              message: "Transaction rejected.",
            },
            "-32004": {
              standard: "EIP-1474",
              message: "Method not supported.",
            },
            "-32005": {
              standard: "EIP-1474",
              message: "Request limit exceeded.",
            },
            4001: {
              standard: "EIP-1193",
              message: "User rejected the request.",
            },
            4100: {
              standard: "EIP-1193",
              message:
                "The requested account and/or method has not been authorized by the user.",
            },
            4200: {
              standard: "EIP-1193",
              message:
                "The requested method is not supported by this Ethereum provider.",
            },
            4900: {
              standard: "EIP-1193",
              message: "The provider is disconnected from all chains.",
            },
            4901: {
              standard: "EIP-1193",
              message: "The provider is disconnected from the specified chain.",
            },
          });
      },
      40734: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ethErrors = void 0);
        const n = r(27285),
          i = r(12826),
          o = r(26420);
        function s(t, e) {
          const [r, o] = u(e);
          return new n.EthereumRpcError(t, r || i.getMessageFromCode(t), o);
        }
        function a(t, e) {
          const [r, o] = u(e);
          return new n.EthereumProviderError(
            t,
            r || i.getMessageFromCode(t),
            o
          );
        }
        function u(t) {
          if (t) {
            if ("string" == typeof t) return [t];
            if ("object" == typeof t && !Array.isArray(t)) {
              const { message: e, data: r } = t;
              if (e && "string" != typeof e)
                throw new Error("Must specify string message.");
              return [e || void 0, r];
            }
          }
          return [];
        }
        e.ethErrors = {
          rpc: {
            parse: (t) => s(o.errorCodes.rpc.parse, t),
            invalidRequest: (t) => s(o.errorCodes.rpc.invalidRequest, t),
            invalidParams: (t) => s(o.errorCodes.rpc.invalidParams, t),
            methodNotFound: (t) => s(o.errorCodes.rpc.methodNotFound, t),
            internal: (t) => s(o.errorCodes.rpc.internal, t),
            server: (t) => {
              if (!t || "object" != typeof t || Array.isArray(t))
                throw new Error(
                  "Ethereum RPC Server errors must provide single object argument."
                );
              const { code: e } = t;
              if (!Number.isInteger(e) || e > -32005 || e < -32099)
                throw new Error(
                  '"code" must be an integer such that: -32099 <= code <= -32005'
                );
              return s(e, t);
            },
            invalidInput: (t) => s(o.errorCodes.rpc.invalidInput, t),
            resourceNotFound: (t) => s(o.errorCodes.rpc.resourceNotFound, t),
            resourceUnavailable: (t) =>
              s(o.errorCodes.rpc.resourceUnavailable, t),
            transactionRejected: (t) =>
              s(o.errorCodes.rpc.transactionRejected, t),
            methodNotSupported: (t) =>
              s(o.errorCodes.rpc.methodNotSupported, t),
            limitExceeded: (t) => s(o.errorCodes.rpc.limitExceeded, t),
          },
          provider: {
            userRejectedRequest: (t) =>
              a(o.errorCodes.provider.userRejectedRequest, t),
            unauthorized: (t) => a(o.errorCodes.provider.unauthorized, t),
            unsupportedMethod: (t) =>
              a(o.errorCodes.provider.unsupportedMethod, t),
            disconnected: (t) => a(o.errorCodes.provider.disconnected, t),
            chainDisconnected: (t) =>
              a(o.errorCodes.provider.chainDisconnected, t),
            custom: (t) => {
              if (!t || "object" != typeof t || Array.isArray(t))
                throw new Error(
                  "Ethereum Provider custom errors must provide single object argument."
                );
              const { code: e, message: r, data: i } = t;
              if (!r || "string" != typeof r)
                throw new Error('"message" must be a nonempty string');
              return new n.EthereumProviderError(e, r, i);
            },
          },
        };
      },
      82523: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getMessageFromCode =
            e.serializeError =
            e.EthereumProviderError =
            e.EthereumRpcError =
            e.ethErrors =
            e.errorCodes =
              void 0);
        const n = r(27285);
        Object.defineProperty(e, "EthereumRpcError", {
          enumerable: !0,
          get: function () {
            return n.EthereumRpcError;
          },
        }),
          Object.defineProperty(e, "EthereumProviderError", {
            enumerable: !0,
            get: function () {
              return n.EthereumProviderError;
            },
          });
        const i = r(12826);
        Object.defineProperty(e, "serializeError", {
          enumerable: !0,
          get: function () {
            return i.serializeError;
          },
        }),
          Object.defineProperty(e, "getMessageFromCode", {
            enumerable: !0,
            get: function () {
              return i.getMessageFromCode;
            },
          });
        const o = r(40734);
        Object.defineProperty(e, "ethErrors", {
          enumerable: !0,
          get: function () {
            return o.ethErrors;
          },
        });
        const s = r(26420);
        Object.defineProperty(e, "errorCodes", {
          enumerable: !0,
          get: function () {
            return s.errorCodes;
          },
        });
      },
      12826: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.serializeError =
            e.isValidCode =
            e.getMessageFromCode =
            e.JSON_RPC_SERVER_ERROR_MESSAGE =
              void 0);
        const n = r(26420),
          i = r(27285),
          o = n.errorCodes.rpc.internal,
          s = { code: o, message: a(o) };
        function a(
          t,
          r = "Unspecified error message. This is a bug, please report it."
        ) {
          if (Number.isInteger(t)) {
            const r = t.toString();
            if (c(n.errorValues, r)) return n.errorValues[r].message;
            if (h(t)) return e.JSON_RPC_SERVER_ERROR_MESSAGE;
          }
          return r;
        }
        function u(t) {
          if (!Number.isInteger(t)) return !1;
          const e = t.toString();
          return !!n.errorValues[e] || !!h(t);
        }
        function h(t) {
          return t >= -32099 && t <= -32e3;
        }
        function l(t) {
          return t && "object" == typeof t && !Array.isArray(t)
            ? Object.assign({}, t)
            : t;
        }
        function c(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        (e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
          (e.getMessageFromCode = a),
          (e.isValidCode = u),
          (e.serializeError = function (
            t,
            { fallbackError: e = s, shouldIncludeStack: r = !1 } = {}
          ) {
            var n, o;
            if (!e || !Number.isInteger(e.code) || "string" != typeof e.message)
              throw new Error(
                "Must provide fallback error with integer number code and string message."
              );
            if (t instanceof i.EthereumRpcError) return t.serialize();
            const h = {};
            if (
              t &&
              "object" == typeof t &&
              !Array.isArray(t) &&
              c(t, "code") &&
              u(t.code)
            ) {
              const e = t;
              (h.code = e.code),
                e.message && "string" == typeof e.message
                  ? ((h.message = e.message), c(e, "data") && (h.data = e.data))
                  : ((h.message = a(h.code)),
                    (h.data = { originalError: l(t) }));
            } else {
              h.code = e.code;
              const r = null === (n = t) || void 0 === n ? void 0 : n.message;
              (h.message = r && "string" == typeof r ? r : e.message),
                (h.data = { originalError: l(t) });
            }
            const f = null === (o = t) || void 0 === o ? void 0 : o.stack;
            return r && t && f && "string" == typeof f && (h.stack = f), h;
          });
      },
      53332: (t) => {
        "use strict";
        var e,
          r = "object" == typeof Reflect ? Reflect : null,
          n =
            r && "function" == typeof r.apply
              ? r.apply
              : function (t, e, r) {
                  return Function.prototype.apply.call(t, e, r);
                };
        e =
          r && "function" == typeof r.ownKeys
            ? r.ownKeys
            : Object.getOwnPropertySymbols
            ? function (t) {
                return Object.getOwnPropertyNames(t).concat(
                  Object.getOwnPropertySymbols(t)
                );
              }
            : function (t) {
                return Object.getOwnPropertyNames(t);
              };
        var i =
          Number.isNaN ||
          function (t) {
            return t != t;
          };
        function o() {
          o.init.call(this);
        }
        (t.exports = o),
          (t.exports.once = function (t, e) {
            return new Promise(function (r, n) {
              function i(r) {
                t.removeListener(e, o), n(r);
              }
              function o() {
                "function" == typeof t.removeListener &&
                  t.removeListener("error", i),
                  r([].slice.call(arguments));
              }
              g(t, e, o, { once: !0 }),
                "error" !== e &&
                  (function (t, e, r) {
                    "function" == typeof t.on && g(t, "error", e, r);
                  })(t, i, { once: !0 });
            });
          }),
          (o.EventEmitter = o),
          (o.prototype._events = void 0),
          (o.prototype._eventsCount = 0),
          (o.prototype._maxListeners = void 0);
        var s = 10;
        function a(t) {
          if ("function" != typeof t)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof t
            );
        }
        function u(t) {
          return void 0 === t._maxListeners
            ? o.defaultMaxListeners
            : t._maxListeners;
        }
        function h(t, e, r, n) {
          var i, o, s, h;
          if (
            (a(r),
            void 0 === (o = t._events)
              ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
              : (void 0 !== o.newListener &&
                  (t.emit("newListener", e, r.listener ? r.listener : r),
                  (o = t._events)),
                (s = o[e])),
            void 0 === s)
          )
            (s = o[e] = r), ++t._eventsCount;
          else if (
            ("function" == typeof s
              ? (s = o[e] = n ? [r, s] : [s, r])
              : n
              ? s.unshift(r)
              : s.push(r),
            (i = u(t)) > 0 && s.length > i && !s.warned)
          ) {
            s.warned = !0;
            var l = new Error(
              "Possible EventEmitter memory leak detected. " +
                s.length +
                " " +
                String(e) +
                " listeners added. Use emitter.setMaxListeners() to increase limit"
            );
            (l.name = "MaxListenersExceededWarning"),
              (l.emitter = t),
              (l.type = e),
              (l.count = s.length),
              (h = l),
              console && console.warn && console.warn(h);
          }
          return t;
        }
        function l() {
          if (!this.fired)
            return (
              this.target.removeListener(this.type, this.wrapFn),
              (this.fired = !0),
              0 === arguments.length
                ? this.listener.call(this.target)
                : this.listener.apply(this.target, arguments)
            );
        }
        function c(t, e, r) {
          var n = {
              fired: !1,
              wrapFn: void 0,
              target: t,
              type: e,
              listener: r,
            },
            i = l.bind(n);
          return (i.listener = r), (n.wrapFn = i), i;
        }
        function f(t, e, r) {
          var n = t._events;
          if (void 0 === n) return [];
          var i = n[e];
          return void 0 === i
            ? []
            : "function" == typeof i
            ? r
              ? [i.listener || i]
              : [i]
            : r
            ? (function (t) {
                for (var e = new Array(t.length), r = 0; r < e.length; ++r)
                  e[r] = t[r].listener || t[r];
                return e;
              })(i)
            : p(i, i.length);
        }
        function d(t) {
          var e = this._events;
          if (void 0 !== e) {
            var r = e[t];
            if ("function" == typeof r) return 1;
            if (void 0 !== r) return r.length;
          }
          return 0;
        }
        function p(t, e) {
          for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
          return r;
        }
        function g(t, e, r, n) {
          if ("function" == typeof t.on) n.once ? t.once(e, r) : t.on(e, r);
          else {
            if ("function" != typeof t.addEventListener)
              throw new TypeError(
                'The "emitter" argument must be of type EventEmitter. Received type ' +
                  typeof t
              );
            t.addEventListener(e, function i(o) {
              n.once && t.removeEventListener(e, i), r(o);
            });
          }
        }
        Object.defineProperty(o, "defaultMaxListeners", {
          enumerable: !0,
          get: function () {
            return s;
          },
          set: function (t) {
            if ("number" != typeof t || t < 0 || i(t))
              throw new RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                  t +
                  "."
              );
            s = t;
          },
        }),
          (o.init = function () {
            (void 0 !== this._events &&
              this._events !== Object.getPrototypeOf(this)._events) ||
              ((this._events = Object.create(null)), (this._eventsCount = 0)),
              (this._maxListeners = this._maxListeners || void 0);
          }),
          (o.prototype.setMaxListeners = function (t) {
            if ("number" != typeof t || t < 0 || i(t))
              throw new RangeError(
                'The value of "n" is out of range. It must be a non-negative number. Received ' +
                  t +
                  "."
              );
            return (this._maxListeners = t), this;
          }),
          (o.prototype.getMaxListeners = function () {
            return u(this);
          }),
          (o.prototype.emit = function (t) {
            for (var e = [], r = 1; r < arguments.length; r++)
              e.push(arguments[r]);
            var i = "error" === t,
              o = this._events;
            if (void 0 !== o) i = i && void 0 === o.error;
            else if (!i) return !1;
            if (i) {
              var s;
              if ((e.length > 0 && (s = e[0]), s instanceof Error)) throw s;
              var a = new Error(
                "Unhandled error." + (s ? " (" + s.message + ")" : "")
              );
              throw ((a.context = s), a);
            }
            var u = o[t];
            if (void 0 === u) return !1;
            if ("function" == typeof u) n(u, this, e);
            else {
              var h = u.length,
                l = p(u, h);
              for (r = 0; r < h; ++r) n(l[r], this, e);
            }
            return !0;
          }),
          (o.prototype.addListener = function (t, e) {
            return h(this, t, e, !1);
          }),
          (o.prototype.on = o.prototype.addListener),
          (o.prototype.prependListener = function (t, e) {
            return h(this, t, e, !0);
          }),
          (o.prototype.once = function (t, e) {
            return a(e), this.on(t, c(this, t, e)), this;
          }),
          (o.prototype.prependOnceListener = function (t, e) {
            return a(e), this.prependListener(t, c(this, t, e)), this;
          }),
          (o.prototype.removeListener = function (t, e) {
            var r, n, i, o, s;
            if ((a(e), void 0 === (n = this._events))) return this;
            if (void 0 === (r = n[t])) return this;
            if (r === e || r.listener === e)
              0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete n[t],
                  n.removeListener &&
                    this.emit("removeListener", t, r.listener || e));
            else if ("function" != typeof r) {
              for (i = -1, o = r.length - 1; o >= 0; o--)
                if (r[o] === e || r[o].listener === e) {
                  (s = r[o].listener), (i = o);
                  break;
                }
              if (i < 0) return this;
              0 === i
                ? r.shift()
                : (function (t, e) {
                    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                    t.pop();
                  })(r, i),
                1 === r.length && (n[t] = r[0]),
                void 0 !== n.removeListener &&
                  this.emit("removeListener", t, s || e);
            }
            return this;
          }),
          (o.prototype.off = o.prototype.removeListener),
          (o.prototype.removeAllListeners = function (t) {
            var e, r, n;
            if (void 0 === (r = this._events)) return this;
            if (void 0 === r.removeListener)
              return (
                0 === arguments.length
                  ? ((this._events = Object.create(null)),
                    (this._eventsCount = 0))
                  : void 0 !== r[t] &&
                    (0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : delete r[t]),
                this
              );
            if (0 === arguments.length) {
              var i,
                o = Object.keys(r);
              for (n = 0; n < o.length; ++n)
                "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
              return (
                this.removeAllListeners("removeListener"),
                (this._events = Object.create(null)),
                (this._eventsCount = 0),
                this
              );
            }
            if ("function" == typeof (e = r[t])) this.removeListener(t, e);
            else if (void 0 !== e)
              for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
            return this;
          }),
          (o.prototype.listeners = function (t) {
            return f(this, t, !0);
          }),
          (o.prototype.rawListeners = function (t) {
            return f(this, t, !1);
          }),
          (o.listenerCount = function (t, e) {
            return "function" == typeof t.listenerCount
              ? t.listenerCount(e)
              : d.call(t, e);
          }),
          (o.prototype.listenerCount = d),
          (o.prototype.eventNames = function () {
            return this._eventsCount > 0 ? e(this._events) : [];
          });
      },
      6222: (t) => {
        (t.exports = n),
          (n.default = n),
          (n.stable = s),
          (n.stableStringify = s);
        var e = [],
          r = [];
        function n(t, n, o) {
          var s;
          for (
            i(t, "", [], void 0),
              s =
                0 === r.length
                  ? JSON.stringify(t, n, o)
                  : JSON.stringify(t, u(n), o);
            0 !== e.length;

          ) {
            var a = e.pop();
            4 === a.length
              ? Object.defineProperty(a[0], a[1], a[3])
              : (a[0][a[1]] = a[2]);
          }
          return s;
        }
        function i(t, n, o, s) {
          var a;
          if ("object" == typeof t && null !== t) {
            for (a = 0; a < o.length; a++)
              if (o[a] === t) {
                var u = Object.getOwnPropertyDescriptor(s, n);
                return void (void 0 !== u.get
                  ? u.configurable
                    ? (Object.defineProperty(s, n, { value: "[Circular]" }),
                      e.push([s, n, t, u]))
                    : r.push([t, n])
                  : ((s[n] = "[Circular]"), e.push([s, n, t])));
              }
            if ((o.push(t), Array.isArray(t)))
              for (a = 0; a < t.length; a++) i(t[a], a, o, t);
            else {
              var h = Object.keys(t);
              for (a = 0; a < h.length; a++) {
                var l = h[a];
                i(t[l], l, o, t);
              }
            }
            o.pop();
          }
        }
        function o(t, e) {
          return t < e ? -1 : t > e ? 1 : 0;
        }
        function s(t, n, i) {
          var o,
            s = a(t, "", [], void 0) || t;
          for (
            o =
              0 === r.length
                ? JSON.stringify(s, n, i)
                : JSON.stringify(s, u(n), i);
            0 !== e.length;

          ) {
            var h = e.pop();
            4 === h.length
              ? Object.defineProperty(h[0], h[1], h[3])
              : (h[0][h[1]] = h[2]);
          }
          return o;
        }
        function a(t, n, i, s) {
          var u;
          if ("object" == typeof t && null !== t) {
            for (u = 0; u < i.length; u++)
              if (i[u] === t) {
                var h = Object.getOwnPropertyDescriptor(s, n);
                return void (void 0 !== h.get
                  ? h.configurable
                    ? (Object.defineProperty(s, n, { value: "[Circular]" }),
                      e.push([s, n, t, h]))
                    : r.push([t, n])
                  : ((s[n] = "[Circular]"), e.push([s, n, t])));
              }
            if ("function" == typeof t.toJSON) return;
            if ((i.push(t), Array.isArray(t)))
              for (u = 0; u < t.length; u++) a(t[u], u, i, t);
            else {
              var l = {},
                c = Object.keys(t).sort(o);
              for (u = 0; u < c.length; u++) {
                var f = c[u];
                a(t[f], f, i, t), (l[f] = t[f]);
              }
              if (void 0 === s) return l;
              e.push([s, n, t]), (s[n] = l);
            }
            i.pop();
          }
        }
        function u(t) {
          return (
            (t =
              void 0 !== t
                ? t
                : function (t, e) {
                    return e;
                  }),
            function (e, n) {
              if (r.length > 0)
                for (var i = 0; i < r.length; i++) {
                  var o = r[i];
                  if (o[1] === e && o[0] === n) {
                    (n = "[Circular]"), r.splice(i, 1);
                    break;
                  }
                }
              return t.call(this, e, n);
            }
          );
        }
      },
      21044: (t, e) => {
        (e.read = function (t, e, r, n, i) {
          var o,
            s,
            a = 8 * i - n - 1,
            u = (1 << a) - 1,
            h = u >> 1,
            l = -7,
            c = r ? i - 1 : 0,
            f = r ? -1 : 1,
            d = t[e + c];
          for (
            c += f, o = d & ((1 << -l) - 1), d >>= -l, l += a;
            l > 0;
            o = 256 * o + t[e + c], c += f, l -= 8
          );
          for (
            s = o & ((1 << -l) - 1), o >>= -l, l += n;
            l > 0;
            s = 256 * s + t[e + c], c += f, l -= 8
          );
          if (0 === o) o = 1 - h;
          else {
            if (o === u) return s ? NaN : (1 / 0) * (d ? -1 : 1);
            (s += Math.pow(2, n)), (o -= h);
          }
          return (d ? -1 : 1) * s * Math.pow(2, o - n);
        }),
          (e.write = function (t, e, r, n, i, o) {
            var s,
              a,
              u,
              h = 8 * o - i - 1,
              l = (1 << h) - 1,
              c = l >> 1,
              f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              d = n ? 0 : o - 1,
              p = n ? 1 : -1,
              g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
            for (
              e = Math.abs(e),
                isNaN(e) || e === 1 / 0
                  ? ((a = isNaN(e) ? 1 : 0), (s = l))
                  : ((s = Math.floor(Math.log(e) / Math.LN2)),
                    e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                    (e += s + c >= 1 ? f / u : f * Math.pow(2, 1 - c)) * u >=
                      2 && (s++, (u /= 2)),
                    s + c >= l
                      ? ((a = 0), (s = l))
                      : s + c >= 1
                      ? ((a = (e * u - 1) * Math.pow(2, i)), (s += c))
                      : ((a = e * Math.pow(2, c - 1) * Math.pow(2, i)),
                        (s = 0)));
              i >= 8;
              t[r + d] = 255 & a, d += p, a /= 256, i -= 8
            );
            for (
              s = (s << i) | a, h += i;
              h > 0;
              t[r + d] = 255 & s, d += p, s /= 256, h -= 8
            );
            t[r + d - p] |= 128 * g;
          });
      },
      69482: (t) => {
        var e = {}.toString;
        t.exports =
          Array.isArray ||
          function (t) {
            return "[object Array]" == e.call(t);
          };
      },
      29668: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.JsonRpcEngine = void 0);
        const i = n(r(58982)),
          o = r(10925);
        class s extends i.default {
          constructor() {
            super(), (this._middleware = []);
          }
          push(t) {
            this._middleware.push(t);
          }
          handle(t, e) {
            if (e && "function" != typeof e)
              throw new Error('"callback" must be a function if provided.');
            return Array.isArray(t)
              ? e
                ? this._handleBatch(t, e)
                : this._handleBatch(t)
              : e
              ? this._handle(t, e)
              : this._promiseHandle(t);
          }
          asMiddleware() {
            return async (t, e, r, n) => {
              try {
                const [i, o, a] = await s._runAllMiddleware(
                  t,
                  e,
                  this._middleware
                );
                return o
                  ? (await s._runReturnHandlers(a), n(i))
                  : r(async (t) => {
                      try {
                        await s._runReturnHandlers(a);
                      } catch (e) {
                        return t(e);
                      }
                      return t();
                    });
              } catch (t) {
                return n(t);
              }
            };
          }
          async _handleBatch(t, e) {
            try {
              const r = await Promise.all(
                t.map(this._promiseHandle.bind(this))
              );
              return e ? e(null, r) : r;
            } catch (t) {
              if (e) return e(t);
              throw t;
            }
          }
          _promiseHandle(t) {
            return new Promise((e) => {
              this._handle(t, (t, r) => {
                e(r);
              });
            });
          }
          async _handle(t, e) {
            if (!t || Array.isArray(t) || "object" != typeof t) {
              const r = new o.EthereumRpcError(
                o.errorCodes.rpc.invalidRequest,
                "Requests must be plain objects. Received: " + typeof t,
                { request: t }
              );
              return e(r, { id: void 0, jsonrpc: "2.0", error: r });
            }
            if ("string" != typeof t.method) {
              const r = new o.EthereumRpcError(
                o.errorCodes.rpc.invalidRequest,
                "Must specify a string method. Received: " + typeof t.method,
                { request: t }
              );
              return e(r, { id: t.id, jsonrpc: "2.0", error: r });
            }
            const r = Object.assign({}, t),
              n = { id: r.id, jsonrpc: r.jsonrpc };
            let i = null;
            try {
              await this._processRequest(r, n);
            } catch (t) {
              i = t;
            }
            return (
              i &&
                (delete n.result, n.error || (n.error = o.serializeError(i))),
              e(i, n)
            );
          }
          async _processRequest(t, e) {
            const [r, n, i] = await s._runAllMiddleware(t, e, this._middleware);
            if (
              (s._checkForCompletion(t, e, n), await s._runReturnHandlers(i), r)
            )
              throw r;
          }
          static async _runAllMiddleware(t, e, r) {
            const n = [];
            let i = null,
              o = !1;
            for (const a of r)
              if ((([i, o] = await s._runMiddleware(t, e, a, n)), o)) break;
            return [i, o, n.reverse()];
          }
          static _runMiddleware(t, e, r, n) {
            return new Promise((i) => {
              const s = (t) => {
                  const r = t || e.error;
                  r && (e.error = o.serializeError(r)), i([r, !0]);
                },
                u = (r) => {
                  e.error
                    ? s(e.error)
                    : (r &&
                        ("function" != typeof r &&
                          s(
                            new o.EthereumRpcError(
                              o.errorCodes.rpc.internal,
                              `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof r}" for request:\n${a(
                                t
                              )}`,
                              { request: t }
                            )
                          ),
                        n.push(r)),
                      i([null, !1]));
                };
              try {
                r(t, e, u, s);
              } catch (t) {
                s(t);
              }
            });
          }
          static async _runReturnHandlers(t) {
            for (const e of t)
              await new Promise((t, r) => {
                e((e) => (e ? r(e) : t()));
              });
          }
          static _checkForCompletion(t, e, r) {
            if (!("result" in e) && !("error" in e))
              throw new o.EthereumRpcError(
                o.errorCodes.rpc.internal,
                `JsonRpcEngine: Response has no error or result for request:\n${a(
                  t
                )}`,
                { request: t }
              );
            if (!r)
              throw new o.EthereumRpcError(
                o.errorCodes.rpc.internal,
                `JsonRpcEngine: Nothing ended request:\n${a(t)}`,
                { request: t }
              );
          }
        }
        function a(t) {
          return JSON.stringify(t, null, 2);
        }
        e.JsonRpcEngine = s;
      },
      56684: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createAsyncMiddleware = void 0),
          (e.createAsyncMiddleware = function (t) {
            return async (e, r, n, i) => {
              let o;
              const s = new Promise((t) => {
                o = t;
              });
              let a = null,
                u = !1;
              const h = async () => {
                (u = !0),
                  n((t) => {
                    (a = t), o();
                  }),
                  await s;
              };
              try {
                await t(e, r, h), u ? (await s, a(null)) : i(null);
              } catch (t) {
                a ? a(t) : i(t);
              }
            };
          });
      },
      14334: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createScaffoldMiddleware = void 0),
          (e.createScaffoldMiddleware = function (t) {
            return (e, r, n, i) => {
              const o = t[e.method];
              return void 0 === o
                ? n()
                : "function" == typeof o
                ? o(e, r, n, i)
                : ((r.result = o), i());
            };
          });
      },
      33875: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getUniqueId = void 0);
        const r = 4294967295;
        let n = Math.floor(Math.random() * r);
        e.getUniqueId = function () {
          return (n = (n + 1) % r), n;
        };
      },
      44198: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createIdRemapMiddleware = void 0);
        const n = r(33875);
        e.createIdRemapMiddleware = function () {
          return (t, e, r, i) => {
            const o = t.id,
              s = n.getUniqueId();
            (t.id = s),
              (e.id = s),
              r((r) => {
                (t.id = o), (e.id = o), r();
              });
          };
        };
      },
      96794: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, r, n) {
                  void 0 === n && (n = r),
                    Object.defineProperty(t, n, {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    });
                }
              : function (t, e, r, n) {
                  void 0 === n && (n = r), (t[n] = e[r]);
                }),
          i =
            (this && this.__exportStar) ||
            function (t, e) {
              for (var r in t)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(e, r) ||
                  n(e, t, r);
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          i(r(44198), e),
          i(r(56684), e),
          i(r(14334), e),
          i(r(33875), e),
          i(r(29668), e),
          i(r(59413), e);
      },
      59413: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.mergeMiddleware = void 0);
        const n = r(29668);
        e.mergeMiddleware = function (t) {
          const e = new n.JsonRpcEngine();
          return t.forEach((t) => e.push(t)), e.asMiddleware();
        };
      },
      16617: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.EthereumProviderError = e.EthereumRpcError = void 0);
        const n = r(6222);
        class i extends Error {
          constructor(t, e, r) {
            if (!Number.isInteger(t))
              throw new Error('"code" must be an integer.');
            if (!e || "string" != typeof e)
              throw new Error('"message" must be a nonempty string.');
            super(e), (this.code = t), void 0 !== r && (this.data = r);
          }
          serialize() {
            const t = { code: this.code, message: this.message };
            return (
              void 0 !== this.data && (t.data = this.data),
              this.stack && (t.stack = this.stack),
              t
            );
          }
          toString() {
            return n.default(this.serialize(), o, 2);
          }
        }
        e.EthereumRpcError = i;
        function o(t, e) {
          if ("[Circular]" !== e) return e;
        }
        e.EthereumProviderError = class extends i {
          constructor(t, e, r) {
            if (
              !(function (t) {
                return Number.isInteger(t) && t >= 1e3 && t <= 4999;
              })(t)
            )
              throw new Error(
                '"code" must be an integer such that: 1000 <= code <= 4999'
              );
            super(t, e, r);
          }
        };
      },
      35649: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.errorValues = e.errorCodes = void 0),
          (e.errorCodes = {
            rpc: {
              invalidInput: -32e3,
              resourceNotFound: -32001,
              resourceUnavailable: -32002,
              transactionRejected: -32003,
              methodNotSupported: -32004,
              limitExceeded: -32005,
              parse: -32700,
              invalidRequest: -32600,
              methodNotFound: -32601,
              invalidParams: -32602,
              internal: -32603,
            },
            provider: {
              userRejectedRequest: 4001,
              unauthorized: 4100,
              unsupportedMethod: 4200,
              disconnected: 4900,
              chainDisconnected: 4901,
            },
          }),
          (e.errorValues = {
            "-32700": {
              standard: "JSON RPC 2.0",
              message:
                "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
            },
            "-32600": {
              standard: "JSON RPC 2.0",
              message: "The JSON sent is not a valid Request object.",
            },
            "-32601": {
              standard: "JSON RPC 2.0",
              message: "The method does not exist / is not available.",
            },
            "-32602": {
              standard: "JSON RPC 2.0",
              message: "Invalid method parameter(s).",
            },
            "-32603": {
              standard: "JSON RPC 2.0",
              message: "Internal JSON-RPC error.",
            },
            "-32000": { standard: "EIP-1474", message: "Invalid input." },
            "-32001": { standard: "EIP-1474", message: "Resource not found." },
            "-32002": {
              standard: "EIP-1474",
              message: "Resource unavailable.",
            },
            "-32003": {
              standard: "EIP-1474",
              message: "Transaction rejected.",
            },
            "-32004": {
              standard: "EIP-1474",
              message: "Method not supported.",
            },
            "-32005": {
              standard: "EIP-1474",
              message: "Request limit exceeded.",
            },
            4001: {
              standard: "EIP-1193",
              message: "User rejected the request.",
            },
            4100: {
              standard: "EIP-1193",
              message:
                "The requested account and/or method has not been authorized by the user.",
            },
            4200: {
              standard: "EIP-1193",
              message:
                "The requested method is not supported by this Ethereum provider.",
            },
            4900: {
              standard: "EIP-1193",
              message: "The provider is disconnected from all chains.",
            },
            4901: {
              standard: "EIP-1193",
              message: "The provider is disconnected from the specified chain.",
            },
          });
      },
      21966: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ethErrors = void 0);
        const n = r(16617),
          i = r(14481),
          o = r(35649);
        function s(t, e) {
          const [r, o] = u(e);
          return new n.EthereumRpcError(t, r || i.getMessageFromCode(t), o);
        }
        function a(t, e) {
          const [r, o] = u(e);
          return new n.EthereumProviderError(
            t,
            r || i.getMessageFromCode(t),
            o
          );
        }
        function u(t) {
          if (t) {
            if ("string" == typeof t) return [t];
            if ("object" == typeof t && !Array.isArray(t)) {
              const { message: e, data: r } = t;
              if (e && "string" != typeof e)
                throw new Error("Must specify string message.");
              return [e || void 0, r];
            }
          }
          return [];
        }
        e.ethErrors = {
          rpc: {
            parse: (t) => s(o.errorCodes.rpc.parse, t),
            invalidRequest: (t) => s(o.errorCodes.rpc.invalidRequest, t),
            invalidParams: (t) => s(o.errorCodes.rpc.invalidParams, t),
            methodNotFound: (t) => s(o.errorCodes.rpc.methodNotFound, t),
            internal: (t) => s(o.errorCodes.rpc.internal, t),
            server: (t) => {
              if (!t || "object" != typeof t || Array.isArray(t))
                throw new Error(
                  "Ethereum RPC Server errors must provide single object argument."
                );
              const { code: e } = t;
              if (!Number.isInteger(e) || e > -32005 || e < -32099)
                throw new Error(
                  '"code" must be an integer such that: -32099 <= code <= -32005'
                );
              return s(e, t);
            },
            invalidInput: (t) => s(o.errorCodes.rpc.invalidInput, t),
            resourceNotFound: (t) => s(o.errorCodes.rpc.resourceNotFound, t),
            resourceUnavailable: (t) =>
              s(o.errorCodes.rpc.resourceUnavailable, t),
            transactionRejected: (t) =>
              s(o.errorCodes.rpc.transactionRejected, t),
            methodNotSupported: (t) =>
              s(o.errorCodes.rpc.methodNotSupported, t),
            limitExceeded: (t) => s(o.errorCodes.rpc.limitExceeded, t),
          },
          provider: {
            userRejectedRequest: (t) =>
              a(o.errorCodes.provider.userRejectedRequest, t),
            unauthorized: (t) => a(o.errorCodes.provider.unauthorized, t),
            unsupportedMethod: (t) =>
              a(o.errorCodes.provider.unsupportedMethod, t),
            disconnected: (t) => a(o.errorCodes.provider.disconnected, t),
            chainDisconnected: (t) =>
              a(o.errorCodes.provider.chainDisconnected, t),
            custom: (t) => {
              if (!t || "object" != typeof t || Array.isArray(t))
                throw new Error(
                  "Ethereum Provider custom errors must provide single object argument."
                );
              const { code: e, message: r, data: i } = t;
              if (!r || "string" != typeof r)
                throw new Error('"message" must be a nonempty string');
              return new n.EthereumProviderError(e, r, i);
            },
          },
        };
      },
      10925: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getMessageFromCode =
            e.serializeError =
            e.EthereumProviderError =
            e.EthereumRpcError =
            e.ethErrors =
            e.errorCodes =
              void 0);
        const n = r(16617);
        Object.defineProperty(e, "EthereumRpcError", {
          enumerable: !0,
          get: function () {
            return n.EthereumRpcError;
          },
        }),
          Object.defineProperty(e, "EthereumProviderError", {
            enumerable: !0,
            get: function () {
              return n.EthereumProviderError;
            },
          });
        const i = r(14481);
        Object.defineProperty(e, "serializeError", {
          enumerable: !0,
          get: function () {
            return i.serializeError;
          },
        }),
          Object.defineProperty(e, "getMessageFromCode", {
            enumerable: !0,
            get: function () {
              return i.getMessageFromCode;
            },
          });
        const o = r(21966);
        Object.defineProperty(e, "ethErrors", {
          enumerable: !0,
          get: function () {
            return o.ethErrors;
          },
        });
        const s = r(35649);
        Object.defineProperty(e, "errorCodes", {
          enumerable: !0,
          get: function () {
            return s.errorCodes;
          },
        });
      },
      14481: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.serializeError =
            e.isValidCode =
            e.getMessageFromCode =
            e.JSON_RPC_SERVER_ERROR_MESSAGE =
              void 0);
        const n = r(35649),
          i = r(16617),
          o = n.errorCodes.rpc.internal,
          s = { code: o, message: a(o) };
        function a(
          t,
          r = "Unspecified error message. This is a bug, please report it."
        ) {
          if (Number.isInteger(t)) {
            const r = t.toString();
            if (c(n.errorValues, r)) return n.errorValues[r].message;
            if (h(t)) return e.JSON_RPC_SERVER_ERROR_MESSAGE;
          }
          return r;
        }
        function u(t) {
          if (!Number.isInteger(t)) return !1;
          const e = t.toString();
          return !!n.errorValues[e] || !!h(t);
        }
        function h(t) {
          return t >= -32099 && t <= -32e3;
        }
        function l(t) {
          return t && "object" == typeof t && !Array.isArray(t)
            ? Object.assign({}, t)
            : t;
        }
        function c(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        (e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
          (e.getMessageFromCode = a),
          (e.isValidCode = u),
          (e.serializeError = function (
            t,
            { fallbackError: e = s, shouldIncludeStack: r = !1 } = {}
          ) {
            var n, o;
            if (!e || !Number.isInteger(e.code) || "string" != typeof e.message)
              throw new Error(
                "Must provide fallback error with integer number code and string message."
              );
            if (t instanceof i.EthereumRpcError) return t.serialize();
            const h = {};
            if (
              t &&
              "object" == typeof t &&
              !Array.isArray(t) &&
              c(t, "code") &&
              u(t.code)
            ) {
              const e = t;
              (h.code = e.code),
                e.message && "string" == typeof e.message
                  ? ((h.message = e.message), c(e, "data") && (h.data = e.data))
                  : ((h.message = a(h.code)),
                    (h.data = { originalError: l(t) }));
            } else {
              h.code = e.code;
              const r = null === (n = t) || void 0 === n ? void 0 : n.message;
              (h.message = r && "string" == typeof r ? r : e.message),
                (h.data = { originalError: l(t) });
            }
            const f = null === (o = t) || void 0 === o ? void 0 : o.stack;
            return r && t && f && "string" == typeof f && (h.stack = f), h;
          });
      },
      34831: (t) => {
        t.exports = function (t) {
          var e = (t = t || {}).max || Number.MAX_SAFE_INTEGER,
            r = void 0 !== t.start ? t.start : Math.floor(Math.random() * e);
          return function () {
            return (r %= e), r++;
          };
        };
      },
      2380: (t) => {
        "use strict";
        const e = (t, e) =>
          function () {
            const r = e.promiseModule,
              n = new Array(arguments.length);
            for (let t = 0; t < arguments.length; t++) n[t] = arguments[t];
            return new r((r, i) => {
              e.errorFirst
                ? n.push(function (t, n) {
                    if (e.multiArgs) {
                      const e = new Array(arguments.length - 1);
                      for (let t = 1; t < arguments.length; t++)
                        e[t - 1] = arguments[t];
                      t ? (e.unshift(t), i(e)) : r(e);
                    } else t ? i(t) : r(n);
                  })
                : n.push(function (t) {
                    if (e.multiArgs) {
                      const t = new Array(arguments.length - 1);
                      for (let e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      r(t);
                    } else r(t);
                  }),
                t.apply(this, n);
            });
          };
        t.exports = (t, r) => {
          r = Object.assign(
            {
              exclude: [/.+(Sync|Stream)$/],
              errorFirst: !0,
              promiseModule: Promise,
            },
            r
          );
          const n = (t) => {
            const e = (e) => ("string" == typeof e ? t === e : e.test(t));
            return r.include ? r.include.some(e) : !r.exclude.some(e);
          };
          let i;
          i =
            "function" == typeof t
              ? function () {
                  return r.excludeMain
                    ? t.apply(this, arguments)
                    : e(t, r).apply(this, arguments);
                }
              : Object.create(Object.getPrototypeOf(t));
          for (const o in t) {
            const s = t[o];
            i[o] = "function" == typeof s && n(o) ? e(s, r) : s;
          }
          return i;
        };
      },
      98862: (t) => {
        var e,
          r,
          n = (t.exports = {});
        function i() {
          throw new Error("setTimeout has not been defined");
        }
        function o() {
          throw new Error("clearTimeout has not been defined");
        }
        function s(t) {
          if (e === setTimeout) return setTimeout(t, 0);
          if ((e === i || !e) && setTimeout)
            return (e = setTimeout), setTimeout(t, 0);
          try {
            return e(t, 0);
          } catch (r) {
            try {
              return e.call(null, t, 0);
            } catch (r) {
              return e.call(this, t, 0);
            }
          }
        }
        !(function () {
          try {
            e = "function" == typeof setTimeout ? setTimeout : i;
          } catch (t) {
            e = i;
          }
          try {
            r = "function" == typeof clearTimeout ? clearTimeout : o;
          } catch (t) {
            r = o;
          }
        })();
        var a,
          u = [],
          h = !1,
          l = -1;
        function c() {
          h &&
            a &&
            ((h = !1),
            a.length ? (u = a.concat(u)) : (l = -1),
            u.length && f());
        }
        function f() {
          if (!h) {
            var t = s(c);
            h = !0;
            for (var e = u.length; e; ) {
              for (a = u, u = []; ++l < e; ) a && a[l].run();
              (l = -1), (e = u.length);
            }
            (a = null),
              (h = !1),
              (function (t) {
                if (r === clearTimeout) return clearTimeout(t);
                if ((r === o || !r) && clearTimeout)
                  return (r = clearTimeout), clearTimeout(t);
                try {
                  r(t);
                } catch (e) {
                  try {
                    return r.call(null, t);
                  } catch (e) {
                    return r.call(this, t);
                  }
                }
              })(t);
          }
        }
        function d(t, e) {
          (this.fun = t), (this.array = e);
        }
        function p() {}
        (n.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
          u.push(new d(t, e)), 1 !== u.length || h || s(f);
        }),
          (d.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (n.title = "browser"),
          (n.browser = !0),
          (n.env = {}),
          (n.argv = []),
          (n.version = ""),
          (n.versions = {}),
          (n.on = p),
          (n.addListener = p),
          (n.once = p),
          (n.off = p),
          (n.removeListener = p),
          (n.removeAllListeners = p),
          (n.emit = p),
          (n.prependListener = p),
          (n.prependOnceListener = p),
          (n.listeners = function (t) {
            return [];
          }),
          (n.binding = function (t) {
            throw new Error("process.binding is not supported");
          }),
          (n.cwd = function () {
            return "/";
          }),
          (n.chdir = function (t) {
            throw new Error("process.chdir is not supported");
          }),
          (n.umask = function () {
            return 0;
          });
      },
      92001: (t, e, r) => {
        const n = r(48421),
          i = r(53332);
        var o = "object" == typeof Reflect ? Reflect : null,
          s =
            o && "function" == typeof o.apply
              ? o.apply
              : function (t, e, r) {
                  return Function.prototype.apply.call(t, e, r);
                };
        function a() {
          i.call(this);
        }
        function u(t, e, r) {
          try {
            s(t, e, r);
          } catch (t) {
            setTimeout(() => {
              throw t;
            });
          }
        }
        function h(t, e) {
          for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
          return r;
        }
        (t.exports = a),
          n.inherits(a, i),
          (a.prototype.emit = function (t) {
            for (var e = [], r = 1; r < arguments.length; r++)
              e.push(arguments[r]);
            var n = "error" === t,
              i = this._events;
            if (void 0 !== i) n = n && void 0 === i.error;
            else if (!n) return !1;
            if (n) {
              var o;
              if ((e.length > 0 && (o = e[0]), o instanceof Error)) throw o;
              var s = new Error(
                "Unhandled error." + (o ? " (" + o.message + ")" : "")
              );
              throw ((s.context = o), s);
            }
            var a = i[t];
            if (void 0 === a) return !1;
            if ("function" == typeof a) u(a, this, e);
            else {
              var l = a.length,
                c = h(a, l);
              for (r = 0; r < l; ++r) u(c[r], this, e);
            }
            return !0;
          });
      },
      83227: (t, e, r) => {
        "use strict";
        r.r(e),
          r.d(e, {
            __extends: () => i,
            __assign: () => o,
            __rest: () => s,
            __decorate: () => a,
            __param: () => u,
            __metadata: () => h,
            __awaiter: () => l,
            __generator: () => c,
            __createBinding: () => f,
            __exportStar: () => d,
            __values: () => p,
            __read: () => g,
            __spread: () => m,
            __spreadArrays: () => y,
            __spreadArray: () => v,
            __await: () => w,
            __asyncGenerator: () => b,
            __asyncDelegator: () => _,
            __asyncValues: () => E,
            __makeTemplateObject: () => M,
            __importStar: () => R,
            __importDefault: () => T,
            __classPrivateFieldGet: () => A,
            __classPrivateFieldSet: () => O,
          });
        var n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            })(t, e);
        };
        function i(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Class extends value " +
                String(e) +
                " is not a constructor or null"
            );
          function r() {
            this.constructor = t;
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r()));
        }
        var o = function () {
          return (o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        };
        function s(t, e) {
          var r = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              e.indexOf(n) < 0 &&
              (r[n] = t[n]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
              e.indexOf(n[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, n[i]) &&
                (r[n[i]] = t[n[i]]);
          }
          return r;
        }
        function a(t, e, r, n) {
          var i,
            o = arguments.length,
            s =
              o < 3
                ? e
                : null === n
                ? (n = Object.getOwnPropertyDescriptor(e, r))
                : n;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(t, e, r, n);
          else
            for (var a = t.length - 1; a >= 0; a--)
              (i = t[a]) &&
                (s = (o < 3 ? i(s) : o > 3 ? i(e, r, s) : i(e, r)) || s);
          return o > 3 && s && Object.defineProperty(e, r, s), s;
        }
        function u(t, e) {
          return function (r, n) {
            e(r, n, t);
          };
        }
        function h(t, e) {
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.metadata
          )
            return Reflect.metadata(t, e);
        }
        function l(t, e, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(t) {
              try {
                u(n.next(t));
              } catch (t) {
                o(t);
              }
            }
            function a(t) {
              try {
                u(n.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function u(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(s, a);
            }
            u((n = n.apply(t, e || [])).next());
          });
        }
        function c(t, e) {
          var r,
            n,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = s.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = e.call(t, s);
                  } catch (t) {
                    (o = [6, t]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        }
        var f = Object.create
          ? function (t, e, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[r];
                  },
                });
            }
          : function (t, e, r, n) {
              void 0 === n && (n = r), (t[n] = e[r]);
            };
        function d(t, e) {
          for (var r in t)
            "default" === r ||
              Object.prototype.hasOwnProperty.call(e, r) ||
              f(e, t, r);
        }
        function p(t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && n >= t.length && (t = void 0),
                  { value: t && t[n++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        }
        function g(t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            i,
            o = r.call(t),
            s = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
              s.push(n.value);
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        }
        function m() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(g(arguments[e]));
          return t;
        }
        function y() {
          for (var t = 0, e = 0, r = arguments.length; e < r; e++)
            t += arguments[e].length;
          var n = Array(t),
            i = 0;
          for (e = 0; e < r; e++)
            for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++)
              n[i] = o[s];
          return n;
        }
        function v(t, e) {
          for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
            t[i] = e[r];
          return t;
        }
        function w(t) {
          return this instanceof w ? ((this.v = t), this) : new w(t);
        }
        function b(t, e, r) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var n,
            i = r.apply(t, e || []),
            o = [];
          return (
            (n = {}),
            s("next"),
            s("throw"),
            s("return"),
            (n[Symbol.asyncIterator] = function () {
              return this;
            }),
            n
          );
          function s(t) {
            i[t] &&
              (n[t] = function (e) {
                return new Promise(function (r, n) {
                  o.push([t, e, r, n]) > 1 || a(t, e);
                });
              });
          }
          function a(t, e) {
            try {
              (r = i[t](e)).value instanceof w
                ? Promise.resolve(r.value.v).then(u, h)
                : l(o[0][2], r);
            } catch (t) {
              l(o[0][3], t);
            }
            var r;
          }
          function u(t) {
            a("next", t);
          }
          function h(t) {
            a("throw", t);
          }
          function l(t, e) {
            t(e), o.shift(), o.length && a(o[0][0], o[0][1]);
          }
        }
        function _(t) {
          var e, r;
          return (
            (e = {}),
            n("next"),
            n("throw", function (t) {
              throw t;
            }),
            n("return"),
            (e[Symbol.iterator] = function () {
              return this;
            }),
            e
          );
          function n(n, i) {
            e[n] = t[n]
              ? function (e) {
                  return (r = !r)
                    ? { value: w(t[n](e)), done: "return" === n }
                    : i
                    ? i(e)
                    : e;
                }
              : i;
          }
        }
        function E(t) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var e,
            r = t[Symbol.asyncIterator];
          return r
            ? r.call(t)
            : ((t = p(t)),
              (e = {}),
              n("next"),
              n("throw"),
              n("return"),
              (e[Symbol.asyncIterator] = function () {
                return this;
              }),
              e);
          function n(r) {
            e[r] =
              t[r] &&
              function (e) {
                return new Promise(function (n, i) {
                  (function (t, e, r, n) {
                    Promise.resolve(n).then(function (e) {
                      t({ value: e, done: r });
                    }, e);
                  })(n, i, (e = t[r](e)).done, e.value);
                });
              };
          }
        }
        function M(t, e) {
          return (
            Object.defineProperty
              ? Object.defineProperty(t, "raw", { value: e })
              : (t.raw = e),
            t
          );
        }
        var S = Object.create
          ? function (t, e) {
              Object.defineProperty(t, "default", { enumerable: !0, value: e });
            }
          : function (t, e) {
              t.default = e;
            };
        function R(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t)
              "default" !== r &&
                Object.prototype.hasOwnProperty.call(t, r) &&
                f(e, t, r);
          return S(e, t), e;
        }
        function T(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function A(t, e, r, n) {
          if ("a" === r && !n)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof e ? t !== e || !n : !e.has(t))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t);
        }
        function O(t, e, r, n, i) {
          if ("m" === n) throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === n ? i.call(t, r) : i ? (i.value = r) : e.set(t, r), r;
        }
      },
      21764: (t) => {
        "function" == typeof Object.create
          ? (t.exports = function (t, e) {
              (t.super_ = e),
                (t.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                }));
            })
          : (t.exports = function (t, e) {
              t.super_ = e;
              var r = function () {};
              (r.prototype = e.prototype),
                (t.prototype = new r()),
                (t.prototype.constructor = t);
            });
      },
      63241: (t) => {
        t.exports = function (t) {
          return (
            t &&
            "object" == typeof t &&
            "function" == typeof t.copy &&
            "function" == typeof t.fill &&
            "function" == typeof t.readUInt8
          );
        };
      },
      48421: (t, e, r) => {
        var n = r(98862),
          i =
            Object.getOwnPropertyDescriptors ||
            function (t) {
              for (var e = Object.keys(t), r = {}, n = 0; n < e.length; n++)
                r[e[n]] = Object.getOwnPropertyDescriptor(t, e[n]);
              return r;
            },
          o = /%[sdj%]/g;
        (e.format = function (t) {
          if (!v(t)) {
            for (var e = [], r = 0; r < arguments.length; r++)
              e.push(u(arguments[r]));
            return e.join(" ");
          }
          r = 1;
          for (
            var n = arguments,
              i = n.length,
              s = String(t).replace(o, function (t) {
                if ("%%" === t) return "%";
                if (r >= i) return t;
                switch (t) {
                  case "%s":
                    return String(n[r++]);
                  case "%d":
                    return Number(n[r++]);
                  case "%j":
                    try {
                      return JSON.stringify(n[r++]);
                    } catch (t) {
                      return "[Circular]";
                    }
                  default:
                    return t;
                }
              }),
              a = n[r];
            r < i;
            a = n[++r]
          )
            m(a) || !_(a) ? (s += " " + a) : (s += " " + u(a));
          return s;
        }),
          (e.deprecate = function (t, r) {
            if (void 0 !== n && !0 === n.noDeprecation) return t;
            if (void 0 === n)
              return function () {
                return e.deprecate(t, r).apply(this, arguments);
              };
            var i = !1;
            return function () {
              if (!i) {
                if (n.throwDeprecation) throw new Error(r);
                n.traceDeprecation ? console.trace(r) : console.error(r),
                  (i = !0);
              }
              return t.apply(this, arguments);
            };
          });
        var s,
          a = {};
        function u(t, r) {
          var n = { seen: [], stylize: l };
          return (
            arguments.length >= 3 && (n.depth = arguments[2]),
            arguments.length >= 4 && (n.colors = arguments[3]),
            g(r) ? (n.showHidden = r) : r && e._extend(n, r),
            w(n.showHidden) && (n.showHidden = !1),
            w(n.depth) && (n.depth = 2),
            w(n.colors) && (n.colors = !1),
            w(n.customInspect) && (n.customInspect = !0),
            n.colors && (n.stylize = h),
            c(n, t, n.depth)
          );
        }
        function h(t, e) {
          var r = u.styles[e];
          return r
            ? "\x1b[" +
                u.colors[r][0] +
                "m" +
                t +
                "\x1b[" +
                u.colors[r][1] +
                "m"
            : t;
        }
        function l(t, e) {
          return t;
        }
        function c(t, r, n) {
          if (
            t.customInspect &&
            r &&
            S(r.inspect) &&
            r.inspect !== e.inspect &&
            (!r.constructor || r.constructor.prototype !== r)
          ) {
            var i = r.inspect(n, t);
            return v(i) || (i = c(t, i, n)), i;
          }
          var o = (function (t, e) {
            if (w(e)) return t.stylize("undefined", "undefined");
            if (v(e)) {
              var r =
                "'" +
                JSON.stringify(e)
                  .replace(/^"|"$/g, "")
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"') +
                "'";
              return t.stylize(r, "string");
            }
            if (y(e)) return t.stylize("" + e, "number");
            if (g(e)) return t.stylize("" + e, "boolean");
            if (m(e)) return t.stylize("null", "null");
          })(t, r);
          if (o) return o;
          var s = Object.keys(r),
            a = (function (t) {
              var e = {};
              return (
                t.forEach(function (t, r) {
                  e[t] = !0;
                }),
                e
              );
            })(s);
          if (
            (t.showHidden && (s = Object.getOwnPropertyNames(r)),
            M(r) &&
              (s.indexOf("message") >= 0 || s.indexOf("description") >= 0))
          )
            return f(r);
          if (0 === s.length) {
            if (S(r)) {
              var u = r.name ? ": " + r.name : "";
              return t.stylize("[Function" + u + "]", "special");
            }
            if (b(r))
              return t.stylize(RegExp.prototype.toString.call(r), "regexp");
            if (E(r)) return t.stylize(Date.prototype.toString.call(r), "date");
            if (M(r)) return f(r);
          }
          var h,
            l = "",
            _ = !1,
            R = ["{", "}"];
          (p(r) && ((_ = !0), (R = ["[", "]"])), S(r)) &&
            (l = " [Function" + (r.name ? ": " + r.name : "") + "]");
          return (
            b(r) && (l = " " + RegExp.prototype.toString.call(r)),
            E(r) && (l = " " + Date.prototype.toUTCString.call(r)),
            M(r) && (l = " " + f(r)),
            0 !== s.length || (_ && 0 != r.length)
              ? n < 0
                ? b(r)
                  ? t.stylize(RegExp.prototype.toString.call(r), "regexp")
                  : t.stylize("[Object]", "special")
                : (t.seen.push(r),
                  (h = _
                    ? (function (t, e, r, n, i) {
                        for (var o = [], s = 0, a = e.length; s < a; ++s)
                          P(e, String(s))
                            ? o.push(d(t, e, r, n, String(s), !0))
                            : o.push("");
                        return (
                          i.forEach(function (i) {
                            i.match(/^\d+$/) || o.push(d(t, e, r, n, i, !0));
                          }),
                          o
                        );
                      })(t, r, n, a, s)
                    : s.map(function (e) {
                        return d(t, r, n, a, e, _);
                      })),
                  t.seen.pop(),
                  (function (t, e, r) {
                    if (
                      t.reduce(function (t, e) {
                        return (
                          e.indexOf("\n") >= 0 && 0,
                          t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                        );
                      }, 0) > 60
                    )
                      return (
                        r[0] +
                        ("" === e ? "" : e + "\n ") +
                        " " +
                        t.join(",\n  ") +
                        " " +
                        r[1]
                      );
                    return r[0] + e + " " + t.join(", ") + " " + r[1];
                  })(h, l, R))
              : R[0] + l + R[1]
          );
        }
        function f(t) {
          return "[" + Error.prototype.toString.call(t) + "]";
        }
        function d(t, e, r, n, i, o) {
          var s, a, u;
          if (
            ((u = Object.getOwnPropertyDescriptor(e, i) || { value: e[i] }).get
              ? (a = u.set
                  ? t.stylize("[Getter/Setter]", "special")
                  : t.stylize("[Getter]", "special"))
              : u.set && (a = t.stylize("[Setter]", "special")),
            P(n, i) || (s = "[" + i + "]"),
            a ||
              (t.seen.indexOf(u.value) < 0
                ? (a = m(r)
                    ? c(t, u.value, null)
                    : c(t, u.value, r - 1)).indexOf("\n") > -1 &&
                  (a = o
                    ? a
                        .split("\n")
                        .map(function (t) {
                          return "  " + t;
                        })
                        .join("\n")
                        .substr(2)
                    : "\n" +
                      a
                        .split("\n")
                        .map(function (t) {
                          return "   " + t;
                        })
                        .join("\n"))
                : (a = t.stylize("[Circular]", "special"))),
            w(s))
          ) {
            if (o && i.match(/^\d+$/)) return a;
            (s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
              ? ((s = s.substr(1, s.length - 2)), (s = t.stylize(s, "name")))
              : ((s = s
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (s = t.stylize(s, "string")));
          }
          return s + ": " + a;
        }
        function p(t) {
          return Array.isArray(t);
        }
        function g(t) {
          return "boolean" == typeof t;
        }
        function m(t) {
          return null === t;
        }
        function y(t) {
          return "number" == typeof t;
        }
        function v(t) {
          return "string" == typeof t;
        }
        function w(t) {
          return void 0 === t;
        }
        function b(t) {
          return _(t) && "[object RegExp]" === R(t);
        }
        function _(t) {
          return "object" == typeof t && null !== t;
        }
        function E(t) {
          return _(t) && "[object Date]" === R(t);
        }
        function M(t) {
          return _(t) && ("[object Error]" === R(t) || t instanceof Error);
        }
        function S(t) {
          return "function" == typeof t;
        }
        function R(t) {
          return Object.prototype.toString.call(t);
        }
        function T(t) {
          return t < 10 ? "0" + t.toString(10) : t.toString(10);
        }
        (e.debuglog = function (t) {
          if (
            (w(s) && (s = "MISSING_ENV_VAR".NODE_DEBUG || ""),
            (t = t.toUpperCase()),
            !a[t])
          )
            if (new RegExp("\\b" + t + "\\b", "i").test(s)) {
              var r = n.pid;
              a[t] = function () {
                var n = e.format.apply(e, arguments);
                console.error("%s %d: %s", t, r, n);
              };
            } else a[t] = function () {};
          return a[t];
        }),
          (e.inspect = u),
          (u.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39],
          }),
          (u.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red",
          }),
          (e.isArray = p),
          (e.isBoolean = g),
          (e.isNull = m),
          (e.isNullOrUndefined = function (t) {
            return null == t;
          }),
          (e.isNumber = y),
          (e.isString = v),
          (e.isSymbol = function (t) {
            return "symbol" == typeof t;
          }),
          (e.isUndefined = w),
          (e.isRegExp = b),
          (e.isObject = _),
          (e.isDate = E),
          (e.isError = M),
          (e.isFunction = S),
          (e.isPrimitive = function (t) {
            return (
              null === t ||
              "boolean" == typeof t ||
              "number" == typeof t ||
              "string" == typeof t ||
              "symbol" == typeof t ||
              void 0 === t
            );
          }),
          (e.isBuffer = r(63241));
        var A = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        function O() {
          var t = new Date(),
            e = [T(t.getHours()), T(t.getMinutes()), T(t.getSeconds())].join(
              ":"
            );
          return [t.getDate(), A[t.getMonth()], e].join(" ");
        }
        function P(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        (e.log = function () {
          console.log("%s - %s", O(), e.format.apply(e, arguments));
        }),
          (e.inherits = r(21764)),
          (e._extend = function (t, e) {
            if (!e || !_(e)) return t;
            for (var r = Object.keys(e), n = r.length; n--; ) t[r[n]] = e[r[n]];
            return t;
          });
        var N =
          "undefined" != typeof Symbol
            ? Symbol("util.promisify.custom")
            : void 0;
        function k(t, e) {
          if (!t) {
            var r = new Error("Promise was rejected with a falsy value");
            (r.reason = t), (t = r);
          }
          return e(t);
        }
        (e.promisify = function (t) {
          if ("function" != typeof t)
            throw new TypeError(
              'The "original" argument must be of type Function'
            );
          if (N && t[N]) {
            var e;
            if ("function" != typeof (e = t[N]))
              throw new TypeError(
                'The "util.promisify.custom" argument must be of type Function'
              );
            return (
              Object.defineProperty(e, N, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
              e
            );
          }
          function e() {
            for (
              var e,
                r,
                n = new Promise(function (t, n) {
                  (e = t), (r = n);
                }),
                i = [],
                o = 0;
              o < arguments.length;
              o++
            )
              i.push(arguments[o]);
            i.push(function (t, n) {
              t ? r(t) : e(n);
            });
            try {
              t.apply(this, i);
            } catch (t) {
              r(t);
            }
            return n;
          }
          return (
            Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            N &&
              Object.defineProperty(e, N, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
            Object.defineProperties(e, i(t))
          );
        }),
          (e.promisify.custom = N),
          (e.callbackify = function (t) {
            if ("function" != typeof t)
              throw new TypeError(
                'The "original" argument must be of type Function'
              );
            function e() {
              for (var e = [], r = 0; r < arguments.length; r++)
                e.push(arguments[r]);
              var i = e.pop();
              if ("function" != typeof i)
                throw new TypeError(
                  "The last argument must be of type Function"
                );
              var o = this,
                s = function () {
                  return i.apply(o, arguments);
                };
              t.apply(this, e).then(
                function (t) {
                  n.nextTick(s, null, t);
                },
                function (t) {
                  n.nextTick(k, t, s);
                }
              );
            }
            return (
              Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
              Object.defineProperties(e, i(t)),
              e
            );
          });
      },
      55409: (t) => {
        t.exports = function () {
          for (var t = {}, r = 0; r < arguments.length; r++) {
            var n = arguments[r];
            for (var i in n) e.call(n, i) && (t[i] = n[i]);
          }
          return t;
        };
        var e = Object.prototype.hasOwnProperty;
      },
      69862: () => {},
      40964: () => {},
      42602: () => {},
    },
    e = {};
  function r(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var o = (e[n] = { id: n, loaded: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, r), (o.loaded = !0), o.exports;
  }
  (r.d = (t, e) => {
    for (var n in e)
      r.o(e, n) &&
        !r.o(t, n) &&
        Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
  }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
    (() => {
      "use strict";
      var t = r(26890),
        e = r(79576),
        n = r(32190),
        i = r(19394),
        o = r(31124);
      class s extends i.Z {
        constructor() {
          super(),
            (this.providers = new Array()),
            (this.selectedProvider = null),
            (this.overrideIsMetaMask = !1),
            (this.enable = this.enable.bind(this)),
            (this.send = this.send.bind(this)),
            (this.sendAsync = this.sendAsync.bind(this)),
            (this.request = this.request.bind(this));
        }
        async enable() {
          return null != this.selectedProvider
            ? this.selectedProvider.enable()
            : this.request({ method: o.JSONRPCMethod.eth_requestAccounts });
        }
        send(t, e) {
          if (this.selectedProvider) return this.selectedProvider.send(t, e);
          throw new Error("Not implemented send " + t);
        }
        sendAsync(t, e) {
          if (null != this.selectedProvider)
            return this.selectedProvider.sendAsync(t, e);
          if ("function" != typeof e) throw new Error("callback is required");
          if (
            t.method !== o.JSONRPCMethod.net_version &&
            t.method !== o.JSONRPCMethod.eth_accounts &&
            t.method !== o.JSONRPCMethod.eth_requestAccounts
          )
            throw new Error("Not implemented sendAsync " + t);
          {
            const r = e;
            this.request({ method: t.method })
              .then((e) => {
                r(null, { jsonrpc: "2.0", id: t.id, result: e });
              })
              .catch((t) => r(t, null));
          }
        }
        get isMetaMask() {
          return this.overrideIsMetaMask;
        }
        get chainId() {
          return this.selectedProvider ? this.selectedProvider.chainId : "0x1";
        }
        get networkVersion() {
          return this.selectedProvider
            ? this.selectedProvider.networkVersion
            : "1";
        }
        request(t) {
          if (
            this.selectedProvider &&
            this.shouldSelectProvider(this.selectedProvider)
          )
            return this.selectedProvider.request(t);
          if (
            ((this.selectedProvider = null),
            t.method === o.JSONRPCMethod.net_version)
          ) {
            for (var e = 0; e < this.providers.length; e++) {
              let r = this.providers[e];
              if ("0x1" != r.chainId)
                return this.setSelectedProvider(r), r.request(t);
            }
            return Promise.resolve("1");
          }
          if (t.method === o.JSONRPCMethod.eth_accounts) {
            for (e = 0; e < this.providers.length; e++) {
              let t = this.providers[e];
              if (this.hasSelectedAddress(t))
                return (
                  this.setSelectedProvider(t),
                  Promise.resolve([t.selectedAddress])
                );
            }
            return Promise.resolve([]);
          }
          return t.method === o.JSONRPCMethod.eth_requestAccounts
            ? new Promise((e, r) => {
                var n = 0;
                this.providers.forEach((i) => {
                  i.request(t)
                    .then((t) => {
                      this.selectedProvider ||
                        (this.setSelectedProvider(i),
                        i.isWalletLink &&
                          window.dispatchEvent(
                            new CustomEvent("walletlink:addresses", {
                              detail: t,
                            })
                          ),
                        this.emit("accountsChanged", t),
                        e(t));
                    })
                    .catch((t) => {
                      ++n === this.providers.length && r(t);
                    });
                });
              })
            : Promise.reject(
                new Error("No provider selected for request " + t.method)
              );
        }
        registerProviders(t) {
          for (var e = 0; e < t.length; e++) {
            let r = t[e];
            null == this.selectedProvider &&
              this.shouldSelectProvider(r) &&
              this.setSelectedProvider(r),
              r.isMetaMask && (this.overrideIsMetaMask = !0),
              this.providers.push(r);
          }
          let r = this.chainId;
          this.emit("connect", { chainId: r });
        }
        setSelectedProvider(t) {
          (this.selectedProvider = t),
            this.selectedProvider.on("chainChanged", (e) => {
              this.selectedProvider !== t ||
                this.shouldSelectProvider(t) ||
                (this.selectedProvider = null),
                this.emit("chainChanged", e);
            }),
            this.selectedProvider.on("accountsChanged", (e) => {
              this.selectedProvider !== t ||
                this.shouldSelectProvider(t) ||
                (this.selectedProvider = null),
                this.emit("accountsChanged", e);
            }),
            this.selectedProvider.on("connect", (t) => this.emit("connect", t)),
            this.selectedProvider.on("message", (t) => this.emit("message", t));
        }
        shouldSelectProvider(t) {
          return (
            (null != t.chainId && "0x1" != t.chainId) ||
            this.hasSelectedAddress(t)
          );
        }
        hasSelectedAddress(t) {
          return void 0 !== t.selectedAddress && null != t.selectedAddress;
        }
      }
      const a = (...t) => {};
      var u = r(96008);
      const h = u.l.ETHEREUM_MAINNET,
        l = u.l.rpcUrlWithInfuraKey(h, "fdea71e51fa145c4a6d6c2e94670c04f");
      if (
        ((window.walletLinkRequestProvider = new (class {
          constructor() {
            (this.relayEventManager = new e.WalletLinkRelayEventManager()),
              (this.storage = new n.ScopedLocalStorage(
                "-walletlink:https://www.walletlink.org"
              ));
          }
          provide() {
            return new t.WalletLinkProvider({
              relayProvider: () =>
                new Promise((t, e) => {
                  const r = new Uint8Array(16);
                  window.crypto.getRandomValues(r),
                    window.postMessage(
                      {
                        type: "extensionUIRequest",
                        data: {
                          id: r.toString(),
                          action: "loadWalletLinkRelay",
                        },
                      },
                      "*"
                    ),
                    window.addEventListener("message", (e) => {
                      "extensionUIResponse" == e.data.type &&
                        (a(
                          "In request provider got response from content script"
                        ),
                        a(e),
                        "loadedWalletLinkRelay" === e.data.data.action &&
                          t(window.walletLinkRelay));
                    });
                }),
              relayEventManager: this.relayEventManager,
              storage: this.storage,
              jsonRpcUrl: l,
              chainId: Number(h.valueOf()),
              overrideIsMetaMask: !1,
            });
          }
        })()),
        (window.walletLinkExtension =
          window.walletLinkRequestProvider.provide()),
        void 0 !== window.ethereum)
      ) {
        let t = new s();
        t.registerProviders([window.walletLinkExtension, window.ethereum]);
        const e = new Uint8Array(16);
        window.crypto.getRandomValues(e),
          window.postMessage(
            {
              type: "extensionUIRequest",
              data: { id: e.toString(), action: "hasMultipleProviders" },
            },
            "*"
          ),
          (window.ethereum = t);
      } else window.ethereum = window.walletLinkExtension;
      t.WalletLinkProvider.prototype.isToshi = function () {
        return !0;
      };
    })();
})();
