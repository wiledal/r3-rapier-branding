import Se, { memo as Te, useState as fr, useRef as dr, useEffect as pr } from "react";
var U = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function vr() {
  if (we)
    return L;
  we = 1;
  var f = Se, b = Symbol.for("react.element"), y = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, O = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(k, d, P) {
    var h, E = {}, S = null, W = null;
    P !== void 0 && (S = "" + P), d.key !== void 0 && (S = "" + d.key), d.ref !== void 0 && (W = d.ref);
    for (h in d)
      g.call(d, h) && !m.hasOwnProperty(h) && (E[h] = d[h]);
    if (k && k.defaultProps)
      for (h in d = k.defaultProps, d)
        E[h] === void 0 && (E[h] = d[h]);
    return { $$typeof: b, type: k, key: S, ref: W, props: E, _owner: O.current };
  }
  return L.Fragment = y, L.jsx = x, L.jsxs = x, L;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function hr() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var f = Se, b = Symbol.for("react.element"), y = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), k = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), Q = Symbol.iterator, Pe = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var j = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Fe = !1, Ae = !1, Ie = !1, Le = !1, Me = !1, ee;
    ee = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === m || Me || e === O || e === P || e === h || Le || e === W || Fe || Ae || Ie || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === E || e.$$typeof === x || e.$$typeof === k || e.$$typeof === d || e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case y:
          return "Portal";
        case m:
          return "Profiler";
        case O:
          return "StrictMode";
        case P:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case k:
            var r = e;
            return re(r) + ".Consumer";
          case x:
            var t = e;
            return re(t._context) + ".Provider";
          case d:
            return $e(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case S: {
            var i = e, s = i._payload, o = i._init;
            try {
              return R(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, A = 0, te, ne, ae, oe, ie, se, le;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function Ye() {
      {
        if (A === 0) {
          te = console.log, ne = console.info, ae = console.warn, oe = console.error, ie = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Ne() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: te
            }),
            info: T({}, e, {
              value: ne
            }),
            warn: T({}, e, {
              value: ae
            }),
            error: T({}, e, {
              value: oe
            }),
            group: T({}, e, {
              value: ie
            }),
            groupCollapsed: T({}, e, {
              value: se
            }),
            groupEnd: T({}, e, {
              value: le
            })
          });
        }
        A < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = j.ReactCurrentDispatcher, z;
    function $(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            z = n && n[1] || "";
          }
        return `
` + z + e;
      }
    }
    var q = !1, Y;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Be();
    }
    function ce(e, r) {
      if (!e || q)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Z.current, Z.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              n = _;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), v = n.stack.split(`
`), u = a.length - 1, c = v.length - 1; u >= 1 && c >= 0 && a[u] !== v[c]; )
            c--;
          for (; u >= 1 && c >= 0; u--, c--)
            if (a[u] !== v[c]) {
              if (u !== 1 || c !== 1)
                do
                  if (u--, c--, c < 0 || a[u] !== v[c]) {
                    var C = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, C), C;
                  }
                while (u >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        q = !1, Z.current = s, Ne(), Error.prepareStackTrace = i;
      }
      var F = e ? e.displayName || e.name : "", _e = F ? $(F) : "";
      return typeof e == "function" && Y.set(e, _e), _e;
    }
    function Ve(e, r, t) {
      return ce(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Ue(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case P:
          return $("Suspense");
        case h:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ve(e.render);
          case E:
            return N(e.type, r, t);
          case S: {
            var n = e, i = n._payload, s = n._init;
            try {
              return N(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, fe = {}, de = j.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Ze(e, r, t, n, i) {
      {
        var s = Function.call.bind(B);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (V(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), V(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, V(i), p("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var ze = Array.isArray;
    function G(e) {
      return ze(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ve(e) {
      if (Ge(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), pe(e);
    }
    var I = j.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ge, J;
    J = {};
    function Xe(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = R(I.current.type);
        J[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(I.current.type), e.ref), J[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          he || (he = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          ge || (ge = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, i, s, o) {
      var a = {
        $$typeof: b,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, v = null;
        t !== void 0 && (ve(t), a = "" + t), He(r) && (ve(r.key), a = "" + r.key), Xe(r) && (v = r.ref, Ke(r, i));
        for (s in r)
          B.call(r, s) && !Je.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || v) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, c), v && er(o, c);
        }
        return rr(e, a, v, i, n, I.current, o);
      }
    }
    var X = j.ReactCurrentOwner, Ce = j.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function be() {
      {
        if (X.current) {
          var e = R(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var me = {};
    function ar(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + R(e._owner.type) + "."), D(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && ye(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = je(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              K(o.value) && ye(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var i = R(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function Re(e, r, t, n, i, s) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = nr(i);
          v ? a += v : a += be();
          var u;
          e === null ? u = "null" : G(e) ? u = "array" : e !== void 0 && e.$$typeof === b ? (u = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var c = tr(e, r, t, i, s);
        if (c == null)
          return c;
        if (o) {
          var C = r.children;
          if (C !== void 0)
            if (n)
              if (G(C)) {
                for (var F = 0; F < C.length; F++)
                  Ee(C[F], e);
                Object.freeze && Object.freeze(C);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(C, e);
        }
        return e === g ? ir(c) : or(c), c;
      }
    }
    function sr(e, r, t) {
      return Re(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Re(e, r, t, !1);
    }
    var ur = lr, cr = sr;
    M.Fragment = g, M.jsx = ur, M.jsxs = cr;
  }()), M;
}
(function(f) {
  process.env.NODE_ENV === "production" ? f.exports = vr() : f.exports = hr();
})(U);
const Oe = U.exports.Fragment, l = U.exports.jsx, w = U.exports.jsxs, gr = () => /* @__PURE__ */ l("div", {
  style: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "radial-gradient(black 1px, transparent 0), radial-gradient(black 1px, transparent 0)",
    backgroundRepeat: "repeat",
    backgroundSize: "80px 80px",
    backgroundPosition: "0 0, 40px 40px",
    opacity: 0.5
  }
}), Cr = [{
  label: "Something",
  url: "https://example.com"
}, {
  label: "Something else",
  url: "https://example.com"
}, {
  label: "Something other",
  url: "https://example.com"
}], br = Te(({
  title: f
}) => {
  const [b, y] = fr(!1), g = dr(null), O = () => {
  };
  return pr(() => {
    const m = (x) => {
      g.current && !g.current.contains(x.target) && y(!1);
    };
    return document.addEventListener("mousedown", m), () => {
      document.removeEventListener("mousedown", m);
    };
  }, []), /* @__PURE__ */ w(Oe, {
    children: [/* @__PURE__ */ w("button", {
      ref: g,
      className: "r3r-button",
      style: {
        font: "inherit",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        gap: 8,
        top: 40,
        left: 40,
        fontSize: 24,
        color: "black",
        background: "none",
        border: "none"
      },
      onClick: O,
      children: [f, " "]
    }), b && /* @__PURE__ */ l("div", {
      className: "r3r-animate-show",
      style: {
        position: "absolute",
        top: 88,
        left: 24,
        width: "100%",
        maxWidth: 240,
        background: "white",
        padding: 16,
        borderRadius: 8,
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.25)"
      },
      children: Cr.map((m) => /* @__PURE__ */ l("a", {
        href: m.url,
        className: "r3r-link",
        style: {
          display: "block",
          padding: 8,
          color: "black"
        },
        children: m.label
      }, m.label))
    })]
  });
}), mr = () => /* @__PURE__ */ l("svg", {
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: "20",
  xmlns: "http://www.w3.org/2000/svg",
  height: "14",
  viewBox: "3299 702 20 14",
  fill: "currentColor",
  version: "1.1",
  children: /* @__PURE__ */ l("path", {
    rx: "0",
    ry: "0",
    d: "M3313.76,716C3313.76,716,3313.144,715.283,3312.63,714.65C3314.873,714.033,3315.729,712.667,3315.729,712.667C3315.027,713.117,3314.36,713.433,3313.76,713.65C3312.904,714,3312.082,714.233,3311.277,714.367C3309.634,714.667,3308.127,714.583,3306.842,714.35C3305.866,714.167,3305.027,713.9,3304.325,713.633C3303.932,713.483,3303.503,713.3,3303.075,713.067C3303.024,713.033,3302.973,713.017,3302.921,712.983C3302.887,712.967,3302.87,712.95,3302.853,712.933C3302.545,712.767,3302.373,712.65,3302.373,712.65C3302.373,712.65,3303.195,713.983,3305.37,714.617C3304.856,715.25,3304.223,716,3304.223,716C3300.438,715.883,3299,713.467,3299,713.467C3299,708.1,3301.466,703.75,3301.466,703.75C3303.932,701.95,3306.277,702,3306.277,702L3306.449,702.2C3303.366,703.067,3301.945,704.383,3301.945,704.383C3301.945,704.383,3302.322,704.183,3302.955,703.9C3304.788,703.117,3306.243,702.9,3306.842,702.85C3306.945,702.833,3307.031,702.817,3307.134,702.817C3308.178,702.683,3309.36,702.65,3310.592,702.783C3312.219,702.967,3313.966,703.433,3315.747,704.383C3315.747,704.383,3314.394,703.133,3311.483,702.267L3311.723,702C3311.723,702,3314.068,701.95,3316.534,703.75C3316.534,703.75,3319,708.1,3319,713.467C3319,713.467,3317.545,715.883,3313.76,716ZL3313.76,716ZM3305.798,708.217C3304.822,708.217,3304.051,709.05,3304.051,710.067C3304.051,711.083,3304.839,711.917,3305.798,711.917C3306.774,711.917,3307.545,711.083,3307.545,710.067C3307.562,709.05,3306.774,708.217,3305.798,708.217ZM3312.048,708.217C3311.072,708.217,3310.301,709.05,3310.301,710.067C3310.301,711.083,3311.089,711.917,3312.048,711.917C3313.024,711.917,3313.795,711.083,3313.795,710.067C3313.795,709.05,3313.024,708.217,3312.048,708.217Z"
  })
}), yr = () => /* @__PURE__ */ l("svg", {
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: "20",
  xmlns: "http://www.w3.org/2000/svg",
  height: "17",
  id: "screenshot-0e3ec0cd-664b-80cb-8001-915a7c47ed93",
  viewBox: "3299 733 20 17",
  fill: "currentColor",
  version: "1.1",
  children: /* @__PURE__ */ l("path", {
    rx: "0",
    ry: "0",
    d: "M3312.478,742.893C3312.859,742.893,3313.181,743.081,3313.458,743.461C3313.734,743.837,3313.875,744.303,3313.875,744.853C3313.875,745.405,3313.736,745.871,3313.458,746.247C3313.181,746.624,3312.855,746.813,3312.478,746.813C3312.076,746.813,3311.731,746.626,3311.453,746.247C3311.18,745.871,3311.039,745.405,3311.039,744.853C3311.039,744.3,3311.175,743.836,3311.453,743.461C3311.731,743.08,3312.078,742.893,3312.478,742.893ZZM3317.39,737.794C3318.46,738.957,3319,740.367,3319,742.022C3319,743.095,3318.874,744.061,3318.631,744.92C3318.383,745.775,3318.071,746.476,3317.698,747.011C3317.315,747.557,3316.845,748.035,3316.305,748.425C3315.751,748.837,3315.241,749.13,3314.781,749.319C3314.321,749.508,3313.791,749.655,3313.192,749.756C3312.6,749.861,3312.153,749.917,3311.842,749.933C3311.543,749.946,3311.217,749.953,3310.866,749.953C3310.787,749.953,3310.523,749.962,3310.083,749.974C3309.654,749.992,3309.286,750,3308.999,750C3308.713,750,3308.344,749.991,3307.915,749.974C3307.654,749.965,3307.393,749.958,3307.133,749.953C3306.781,749.953,3306.453,749.948,3306.155,749.933C3305.844,749.918,3305.397,749.862,3304.808,749.756C3304.262,749.673,3303.729,749.526,3303.217,749.319C3302.757,749.132,3302.248,748.837,3301.697,748.425C3301.158,748.034,3300.686,747.556,3300.301,747.011C3299.928,746.476,3299.614,745.775,3299.368,744.92C3299.126,744.061,3299,743.095,3299,742.022C3299,740.367,3299.538,738.957,3300.611,737.794C3300.493,737.736,3300.486,737.157,3300.592,736.052C3300.688,734.947,3300.922,733.929,3301.302,733C3302.64,733.143,3304.285,733.899,3306.257,735.265C3306.923,735.091,3307.834,735.002,3308.996,735.002C3310.216,735.002,3311.127,735.091,3311.737,735.265C3312.635,734.658,3313.495,734.16,3314.315,733.782C3315.148,733.408,3315.747,733.186,3316.124,733.129L3316.688,733C3317.07,733.929,3317.304,734.95,3317.401,736.052C3317.511,737.156,3317.505,737.736,3317.39,737.794ZZM3309.047,748.993C3311.453,748.993,3313.267,748.704,3314.499,748.124C3315.727,747.544,3316.352,746.349,3316.352,744.548C3316.352,743.504,3315.96,742.63,3315.175,741.932C3314.783,741.561,3314.288,741.318,3313.756,741.235C3313.226,741.148,3312.408,741.148,3311.304,741.235C3310.203,741.325,3309.45,741.365,3309.045,741.365C3308.494,741.365,3307.896,741.335,3307.154,741.277C3306.575,741.232,3305.995,741.196,3305.415,741.169C3304.954,741.16,3304.494,741.212,3304.046,741.322C3303.55,741.441,3303.149,741.641,3302.824,741.93C3302.076,742.599,3301.697,743.469,3301.697,744.546C3301.697,746.347,3302.306,747.541,3303.522,748.12C3304.737,748.703,3306.545,748.99,3309.047,748.993ZZM3305.568,742.893C3305.945,742.893,3306.27,743.081,3306.545,743.461C3306.821,743.837,3306.961,744.303,3306.961,744.853C3306.961,745.405,3306.823,745.871,3306.545,746.247C3306.27,746.624,3305.943,746.813,3305.568,746.813C3305.163,746.813,3304.819,746.626,3304.542,746.247C3304.267,745.871,3304.126,745.405,3304.126,744.853C3304.126,744.3,3304.264,743.836,3304.542,743.461C3304.819,743.08,3305.164,742.893,3305.568,742.893ZZ"
  })
});
Te(() => /* @__PURE__ */ w("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    display: "block"
  },
  children: [/* @__PURE__ */ l("path", {
    d: "M18 6L6 18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ l("path", {
    d: "M6 6L18 18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}));
const ke = ({
  href: f,
  label: b,
  icon: y
}) => /* @__PURE__ */ w("a", {
  className: "r3r-button",
  href: f,
  target: "_blank",
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "4px 8px",
    background: "#000",
    borderRadius: 4,
    fontWeight: "bold",
    letterSpacing: 0,
    color: "#fff",
    textDecoration: "none"
  },
  children: [y, b]
}), Er = ({
  version: f
}) => /* @__PURE__ */ w("div", {
  style: {
    position: "absolute",
    bottom: 40,
    right: 40
  },
  children: [/* @__PURE__ */ w("div", {
    style: {
      position: "relative",
      fontSize: 24,
      marginBottom: 8
    },
    children: ["@react-three/", /* @__PURE__ */ l("strong", {
      children: "rapier"
    }), /* @__PURE__ */ l("span", {
      style: {
        display: "block",
        position: "absolute",
        fontSize: 10,
        background: "#fff",
        padding: 4,
        borderRadius: 4,
        top: -16,
        right: -16
      },
      children: f
    })]
  }), /* @__PURE__ */ w("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "flex-end"
    },
    children: [/* @__PURE__ */ l(ke, {
      label: "GitHub",
      icon: /* @__PURE__ */ l(yr, {}),
      href: "https://github.com/pmndrs/react-three-rapier"
    }), /* @__PURE__ */ l(ke, {
      icon: /* @__PURE__ */ l(mr, {}),
      label: "Discord",
      href: "https://discord.gg/ZZjjNvJ"
    })]
  })]
}), Rr = () => /* @__PURE__ */ l("style", {
  dangerouslySetInnerHTML: {
    __html: `
@keyframes r3r-show {
  0% {
      opacity: 0;
      transform: translateY(-10px);
  }
  100% {
      opacity: 1;
      transform: translateY(0);
  }
}

.r3r-animate-show {
  animation: r3r-show 0.2s ease both;
}

@keyframes r3r-show-scale {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.r3r-animate-show-scale {
  animation: r3r-show-scale 0.2s ease both;
}

.r3r-button {
  cursor: pointer;
  transition: transform 0.2s ease;
}
.r3r-button:hover {
  transform: scale(1.02);
}
.r3r-button:active {
  transform: scale(0.98);
  transition: none;
}

.r3r-link {
  cursor: pointer;
  transition: transform 0.2s ease; 
  text-decoration: none;
}
.r3r-link:hover {
  text-decoration: underline;
  color:red;
  transform: translateX(4px);
}
`
  }
}), wr = ({
  colors: f = ["#24ff72", "#ffef00"],
  title: b,
  version: y,
  children: g
}) => /* @__PURE__ */ w(Oe, {
  children: [/* @__PURE__ */ l("link", {
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ l(Rr, {}), /* @__PURE__ */ w("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: `linear-gradient(45deg, ${f[1]} 0%, ${f[0]} 100%)`,
      fontFamily: "Montserrat",
      letterSpacing: 1
    },
    children: [/* @__PURE__ */ l(gr, {}), /* @__PURE__ */ l("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      },
      children: g
    }), /* @__PURE__ */ l(br, {
      title: b
    }), /* @__PURE__ */ l(Er, {
      version: y
    })]
  })]
});
export {
  wr as R3RapierBranding
};
