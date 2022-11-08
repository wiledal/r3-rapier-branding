import we from "react";
var B = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function lr() {
  if (Se)
    return F;
  Se = 1;
  var g = we, h = Symbol.for("react.element"), P = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, $ = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(_, f, x) {
    var v, b = {}, T = null, Y = null;
    x !== void 0 && (T = "" + x), f.key !== void 0 && (T = "" + f.key), f.ref !== void 0 && (Y = f.ref);
    for (v in f)
      E.call(f, v) && !W.hasOwnProperty(v) && (b[v] = f[v]);
    if (_ && _.defaultProps)
      for (v in f = _.defaultProps, f)
        b[v] === void 0 && (b[v] = f[v]);
    return { $$typeof: h, type: _, key: T, ref: Y, props: b, _owner: $.current };
  }
  return F.Fragment = P, F.jsx = j, F.jsxs = j, F;
}
var A = {};
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
function fr() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var g = we, h = Symbol.for("react.element"), P = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), _ = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), Q = Symbol.iterator, Ce = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Ce];
      return typeof r == "function" ? r : null;
    }
    var O = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        je("error", e, t);
      }
    }
    function je(e, r, t) {
      {
        var n = O.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ke = !1, De = !1, Fe = !1, Ae = !1, Ie = !1, ee;
    ee = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === W || Ie || e === $ || e === x || e === v || Ae || e === Y || ke || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === b || e.$$typeof === j || e.$$typeof === _ || e.$$typeof === f || e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case P:
          return "Portal";
        case W:
          return "Profiler";
        case $:
          return "StrictMode";
        case x:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return re(r) + ".Consumer";
          case j:
            var t = e;
            return re(t._context) + ".Provider";
          case f:
            return We(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case T: {
            var o = e, u = o._payload, i = o._init;
            try {
              return y(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, k = 0, te, ne, ae, ie, oe, ue, se;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Ye() {
      {
        if (k === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
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
        k++;
      }
    }
    function Le() {
      {
        if (k--, k === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: te
            }),
            info: S({}, e, {
              value: ne
            }),
            warn: S({}, e, {
              value: ae
            }),
            error: S({}, e, {
              value: ie
            }),
            group: S({}, e, {
              value: oe
            }),
            groupCollapsed: S({}, e, {
              value: ue
            }),
            groupEnd: S({}, e, {
              value: se
            })
          });
        }
        k < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = O.ReactCurrentDispatcher, q;
    function L(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var G = !1, M;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Me();
    }
    function fe(e, r) {
      if (!e || G)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = z.current, z.current = null, Ye();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (m) {
              n = m;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (m) {
              n = m;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            n = m;
          }
          e();
        }
      } catch (m) {
        if (m && n && typeof m.stack == "string") {
          for (var a = m.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, l = d.length - 1; s >= 1 && l >= 0 && a[s] !== d[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== d[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== d[l]) {
                    var p = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, p), p;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        G = !1, z.current = u, Le(), Error.prepareStackTrace = o;
      }
      var C = e ? e.displayName || e.name : "", Te = C ? L(C) : "";
      return typeof e == "function" && M.set(e, Te), Te;
    }
    function Ne(e, r, t) {
      return fe(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ve(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case x:
          return L("Suspense");
        case v:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ne(e.render);
          case b:
            return N(e.type, r, t);
          case T: {
            var n = e, o = n._payload, u = n._init;
            try {
              return N(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, ce = {}, de = O.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, o) {
      {
        var u = Function.call.bind(V);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (U(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), U(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, U(o), c("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Be = Array.isArray;
    function J(e) {
      return Be(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (qe(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ve(e);
    }
    var D = O.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, he, H;
    H = {};
    function Je(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = y(D.current.type);
        H[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(D.current.type), e.ref), H[t] = !0);
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          ge || (ge = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          he || (he = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, o, u, i) {
      var a = {
        $$typeof: h,
        type: e,
        key: r,
        ref: t,
        props: i,
        _owner: u
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
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, o) {
      {
        var u, i = {}, a = null, d = null;
        t !== void 0 && (pe(t), a = "" + t), He(r) && (pe(r.key), a = "" + r.key), Je(r) && (d = r.ref, Ke(r, o));
        for (u in r)
          V.call(r, u) && !Ge.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Xe(i, l), d && Ze(i, l);
        }
        return Qe(e, a, d, o, n, D.current, i);
      }
    }
    var K = O.ReactCurrentOwner, be = O.ReactDebugCurrentFrame;
    function w(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function ye() {
      {
        if (K.current) {
          var e = y(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
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
    function tr(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + y(e._owner.type) + "."), w(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), w(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Re(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Pe(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              Z(i.value) && Re(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = y(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var o = y(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            w(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), w(null);
            break;
          }
        }
        e.ref !== null && (w(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), w(null));
      }
    }
    function _e(e, r, t, n, o, u) {
      {
        var i = $e(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = rr(o);
          d ? a += d : a += ye();
          var s;
          e === null ? s = "null" : J(e) ? s = "array" : e !== void 0 && e.$$typeof === h ? (s = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = er(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var p = r.children;
          if (p !== void 0)
            if (n)
              if (J(p)) {
                for (var C = 0; C < p.length; C++)
                  Ee(p[C], e);
                Object.freeze && Object.freeze(p);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(p, e);
        }
        return e === E ? ar(l) : nr(l), l;
      }
    }
    function ir(e, r, t) {
      return _e(e, r, t, !0);
    }
    function or(e, r, t) {
      return _e(e, r, t, !1);
    }
    var ur = or, sr = ir;
    A.Fragment = E, A.jsx = ur, A.jsxs = sr;
  }()), A;
}
(function(g) {
  process.env.NODE_ENV === "production" ? g.exports = lr() : g.exports = fr();
})(B);
const cr = B.exports.Fragment, R = B.exports.jsx, I = B.exports.jsxs, Oe = ({
  href: g,
  label: h
}) => /* @__PURE__ */ R("a", {
  href: g,
  style: {
    display: "inline-flex",
    gap: 8,
    padding: "4px 8px",
    background: "#000",
    borderRadius: 4,
    fontWeight: "bold",
    letterSpacing: 0,
    color: "#fff",
    textDecoration: "none"
  },
  children: h
}), vr = ({
  colors: g = ["#24ff72", "#ffef00"],
  title: h,
  version: P,
  children: E
}) => /* @__PURE__ */ I(cr, {
  children: [/* @__PURE__ */ R("link", {
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ I("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: `linear-gradient(45deg, ${g[1]} 0%, ${g[0]} 100%)`,
      fontFamily: "Montserrat",
      letterSpacing: 1
    },
    children: [/* @__PURE__ */ R("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "radial-gradient(black 1px, transparent 0)",
        backgroundRepeat: "repeat",
        backgroundSize: "40px 40px",
        opacity: 0.5
      }
    }), /* @__PURE__ */ R("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      },
      children: E
    }), /* @__PURE__ */ R("div", {
      style: {
        position: "absolute",
        top: 40,
        left: 40,
        fontSize: 24,
        color: "black"
      },
      children: h
    }), /* @__PURE__ */ I("div", {
      style: {
        position: "absolute",
        bottom: 40,
        right: 40
      },
      children: [/* @__PURE__ */ I("div", {
        style: {
          position: "relative",
          fontSize: 24,
          marginBottom: 16
        },
        children: ["@react-three/", /* @__PURE__ */ R("strong", {
          children: "rapier"
        }), /* @__PURE__ */ R("span", {
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
          children: P
        })]
      }), /* @__PURE__ */ I("div", {
        style: {
          display: "flex",
          gap: 8,
          justifyContent: "flex-end"
        },
        children: [/* @__PURE__ */ R(Oe, {
          label: "GitHub",
          href: "https://github.com/pmndrs/react-three-rapier"
        }), /* @__PURE__ */ R(Oe, {
          label: "Discord",
          href: "https://github.com/pmndrs/react-three-rapier"
        })]
      })]
    })]
  })]
});
export {
  vr as R3RapierBranding
};
