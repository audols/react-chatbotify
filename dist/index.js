import "./react-chatbotify.css";
import * as ot from "react";
import zo, { createContext as wu, useContext as Tu, useState as Ve, useEffect as Ut, useRef as Zr, isValidElement as _u, createElement as $u, forwardRef as mn } from "react";
var Lu = { exports: {} }, Ci = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eu;
function es() {
  if (Eu)
    return Ci;
  Eu = 1;
  var j = zo, g = Symbol.for("react.element"), T = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, c = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(H, N, m) {
    var R, B = {}, _ = null, he = null;
    m !== void 0 && (_ = "" + m), N.key !== void 0 && (_ = "" + N.key), N.ref !== void 0 && (he = N.ref);
    for (R in N)
      C.call(N, R) && !P.hasOwnProperty(R) && (B[R] = N[R]);
    if (H && H.defaultProps)
      for (R in N = H.defaultProps, N)
        B[R] === void 0 && (B[R] = N[R]);
    return { $$typeof: g, type: H, key: _, ref: he, props: B, _owner: c.current };
  }
  return Ci.Fragment = T, Ci.jsx = W, Ci.jsxs = W, Ci;
}
var xi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cu;
function ts() {
  return Cu || (Cu = 1, process.env.NODE_ENV !== "production" && function() {
    var j = zo, g = Symbol.for("react.element"), T = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), H = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), he = Symbol.for("react.offscreen"), $ = Symbol.iterator, te = "@@iterator";
    function V(I) {
      if (I === null || typeof I != "object")
        return null;
      var Z = $ && I[$] || I[te];
      return typeof Z == "function" ? Z : null;
    }
    var k = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ee(I) {
      {
        for (var Z = arguments.length, K = new Array(Z > 1 ? Z - 1 : 0), fe = 1; fe < Z; fe++)
          K[fe - 1] = arguments[fe];
        le("error", I, K);
      }
    }
    function le(I, Z, K) {
      {
        var fe = k.ReactDebugCurrentFrame, Se = fe.getStackAddendum();
        Se !== "" && (Z += "%s", K = K.concat([Se]));
        var Ce = K.map(function(Ee) {
          return String(Ee);
        });
        Ce.unshift("Warning: " + Z), Function.prototype.apply.call(console[I], console, Ce);
      }
    }
    var ye = !1, Ae = !1, pe = !1, ce = !1, Xe = !1, ve;
    ve = Symbol.for("react.module.reference");
    function je(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === C || I === P || Xe || I === c || I === m || I === R || ce || I === he || ye || Ae || pe || typeof I == "object" && I !== null && (I.$$typeof === _ || I.$$typeof === B || I.$$typeof === W || I.$$typeof === H || I.$$typeof === N || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === ve || I.getModuleId !== void 0));
    }
    function ze(I, Z, K) {
      var fe = I.displayName;
      if (fe)
        return fe;
      var Se = Z.displayName || Z.name || "";
      return Se !== "" ? K + "(" + Se + ")" : K;
    }
    function we(I) {
      return I.displayName || "Context";
    }
    function Ke(I) {
      if (I == null)
        return null;
      if (typeof I.tag == "number" && ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof I == "function")
        return I.displayName || I.name || null;
      if (typeof I == "string")
        return I;
      switch (I) {
        case C:
          return "Fragment";
        case T:
          return "Portal";
        case P:
          return "Profiler";
        case c:
          return "StrictMode";
        case m:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case H:
            var Z = I;
            return we(Z) + ".Consumer";
          case W:
            var K = I;
            return we(K._context) + ".Provider";
          case N:
            return ze(I, I.render, "ForwardRef");
          case B:
            var fe = I.displayName || null;
            return fe !== null ? fe : Ke(I.type) || "Memo";
          case _: {
            var Se = I, Ce = Se._payload, Ee = Se._init;
            try {
              return Ke(Ee(Ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var De = Object.assign, Ue = 0, _e, st, jt, lt, Lt, Ye, He;
    function Ct() {
    }
    Ct.__reactDisabledLog = !0;
    function wt() {
      {
        if (Ue === 0) {
          _e = console.log, st = console.info, jt = console.warn, lt = console.error, Lt = console.group, Ye = console.groupCollapsed, He = console.groupEnd;
          var I = {
            configurable: !0,
            enumerable: !0,
            value: Ct,
            writable: !0
          };
          Object.defineProperties(console, {
            info: I,
            log: I,
            warn: I,
            error: I,
            group: I,
            groupCollapsed: I,
            groupEnd: I
          });
        }
        Ue++;
      }
    }
    function Ge() {
      {
        if (Ue--, Ue === 0) {
          var I = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: De({}, I, {
              value: _e
            }),
            info: De({}, I, {
              value: st
            }),
            warn: De({}, I, {
              value: jt
            }),
            error: De({}, I, {
              value: lt
            }),
            group: De({}, I, {
              value: Lt
            }),
            groupCollapsed: De({}, I, {
              value: Ye
            }),
            groupEnd: De({}, I, {
              value: He
            })
          });
        }
        Ue < 0 && ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = k.ReactCurrentDispatcher, Qe;
    function Oe(I, Z, K) {
      {
        if (Qe === void 0)
          try {
            throw Error();
          } catch (Se) {
            var fe = Se.stack.trim().match(/\n( *(at )?)/);
            Qe = fe && fe[1] || "";
          }
        return `
` + Qe + I;
      }
    }
    var ke = !1, pt;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      pt = new Ze();
    }
    function Tt(I, Z) {
      if (!I || ke)
        return "";
      {
        var K = pt.get(I);
        if (K !== void 0)
          return K;
      }
      var fe;
      ke = !0;
      var Se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ce;
      Ce = be.current, be.current = null, wt();
      try {
        if (Z) {
          var Ee = function() {
            throw Error();
          };
          if (Object.defineProperty(Ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ee, []);
            } catch (gt) {
              fe = gt;
            }
            Reflect.construct(I, [], Ee);
          } else {
            try {
              Ee.call();
            } catch (gt) {
              fe = gt;
            }
            I.call(Ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (gt) {
            fe = gt;
          }
          I();
        }
      } catch (gt) {
        if (gt && fe && typeof gt.stack == "string") {
          for (var Ie = gt.stack.split(`
`), Mt = fe.stack.split(`
`), Fe = Ie.length - 1, We = Mt.length - 1; Fe >= 1 && We >= 0 && Ie[Fe] !== Mt[We]; )
            We--;
          for (; Fe >= 1 && We >= 0; Fe--, We--)
            if (Ie[Fe] !== Mt[We]) {
              if (Fe !== 1 || We !== 1)
                do
                  if (Fe--, We--, We < 0 || Ie[Fe] !== Mt[We]) {
                    var at = `
` + Ie[Fe].replace(" at new ", " at ");
                    return I.displayName && at.includes("<anonymous>") && (at = at.replace("<anonymous>", I.displayName)), typeof I == "function" && pt.set(I, at), at;
                  }
                while (Fe >= 1 && We >= 0);
              break;
            }
        }
      } finally {
        ke = !1, be.current = Ce, Ge(), Error.prepareStackTrace = Se;
      }
      var Pt = I ? I.displayName || I.name : "", cr = Pt ? Oe(Pt) : "";
      return typeof I == "function" && pt.set(I, cr), cr;
    }
    function ct(I, Z, K) {
      return Tt(I, !1);
    }
    function it(I) {
      var Z = I.prototype;
      return !!(Z && Z.isReactComponent);
    }
    function xt(I, Z, K) {
      if (I == null)
        return "";
      if (typeof I == "function")
        return Tt(I, it(I));
      if (typeof I == "string")
        return Oe(I);
      switch (I) {
        case m:
          return Oe("Suspense");
        case R:
          return Oe("SuspenseList");
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case N:
            return ct(I.render);
          case B:
            return xt(I.type, Z, K);
          case _: {
            var fe = I, Se = fe._payload, Ce = fe._init;
            try {
              return xt(Ce(Se), Z, K);
            } catch {
            }
          }
        }
      return "";
    }
    var Nt = Object.prototype.hasOwnProperty, or = {}, It = k.ReactDebugCurrentFrame;
    function Qt(I) {
      if (I) {
        var Z = I._owner, K = xt(I.type, I._source, Z ? Z.type : null);
        It.setExtraStackFrame(K);
      } else
        It.setExtraStackFrame(null);
    }
    function Zt(I, Z, K, fe, Se) {
      {
        var Ce = Function.call.bind(Nt);
        for (var Ee in I)
          if (Ce(I, Ee)) {
            var Ie = void 0;
            try {
              if (typeof I[Ee] != "function") {
                var Mt = Error((fe || "React class") + ": " + K + " type `" + Ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof I[Ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Mt.name = "Invariant Violation", Mt;
              }
              Ie = I[Ee](Z, Ee, fe, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Fe) {
              Ie = Fe;
            }
            Ie && !(Ie instanceof Error) && (Qt(Se), ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", K, Ee, typeof Ie), Qt(null)), Ie instanceof Error && !(Ie.message in or) && (or[Ie.message] = !0, Qt(Se), ee("Failed %s type: %s", K, Ie.message), Qt(null));
          }
      }
    }
    var Ir = Array.isArray;
    function St(I) {
      return Ir(I);
    }
    function Dt(I) {
      {
        var Z = typeof Symbol == "function" && Symbol.toStringTag, K = Z && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return K;
      }
    }
    function $e(I) {
      try {
        return ir(I), !1;
      } catch {
        return !0;
      }
    }
    function ir(I) {
      return "" + I;
    }
    function ar(I) {
      if ($e(I))
        return ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dt(I)), ir(I);
    }
    var Yt = k.ReactCurrentOwner, et = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Xt, ur, Jt;
    Jt = {};
    function sr(I) {
      if (Nt.call(I, "ref")) {
        var Z = Object.getOwnPropertyDescriptor(I, "ref").get;
        if (Z && Z.isReactWarning)
          return !1;
      }
      return I.ref !== void 0;
    }
    function Kt(I) {
      if (Nt.call(I, "key")) {
        var Z = Object.getOwnPropertyDescriptor(I, "key").get;
        if (Z && Z.isReactWarning)
          return !1;
      }
      return I.key !== void 0;
    }
    function wr(I, Z) {
      if (typeof I.ref == "string" && Yt.current && Z && Yt.current.stateNode !== Z) {
        var K = Ke(Yt.current.type);
        Jt[K] || (ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ke(Yt.current.type), I.ref), Jt[K] = !0);
      }
    }
    function lr(I, Z) {
      {
        var K = function() {
          Xt || (Xt = !0, ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Z));
        };
        K.isReactWarning = !0, Object.defineProperty(I, "key", {
          get: K,
          configurable: !0
        });
      }
    }
    function Ht(I, Z) {
      {
        var K = function() {
          ur || (ur = !0, ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Z));
        };
        K.isReactWarning = !0, Object.defineProperty(I, "ref", {
          get: K,
          configurable: !0
        });
      }
    }
    var q = function(I, Z, K, fe, Se, Ce, Ee) {
      var Ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: I,
        key: Z,
        ref: K,
        props: Ee,
        // Record the component responsible for creating this element.
        _owner: Ce
      };
      return Ie._store = {}, Object.defineProperty(Ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.defineProperty(Ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.freeze && (Object.freeze(Ie.props), Object.freeze(Ie)), Ie;
    };
    function ue(I, Z, K, fe, Se) {
      {
        var Ce, Ee = {}, Ie = null, Mt = null;
        K !== void 0 && (ar(K), Ie = "" + K), Kt(Z) && (ar(Z.key), Ie = "" + Z.key), sr(Z) && (Mt = Z.ref, wr(Z, Se));
        for (Ce in Z)
          Nt.call(Z, Ce) && !et.hasOwnProperty(Ce) && (Ee[Ce] = Z[Ce]);
        if (I && I.defaultProps) {
          var Fe = I.defaultProps;
          for (Ce in Fe)
            Ee[Ce] === void 0 && (Ee[Ce] = Fe[Ce]);
        }
        if (Ie || Mt) {
          var We = typeof I == "function" ? I.displayName || I.name || "Unknown" : I;
          Ie && lr(Ee, We), Mt && Ht(Ee, We);
        }
        return q(I, Ie, Mt, Se, fe, Yt.current, Ee);
      }
    }
    var ae = k.ReactCurrentOwner, ge = k.ReactDebugCurrentFrame;
    function Le(I) {
      if (I) {
        var Z = I._owner, K = xt(I.type, I._source, Z ? Z.type : null);
        ge.setExtraStackFrame(K);
      } else
        ge.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function xe(I) {
      return typeof I == "object" && I !== null && I.$$typeof === g;
    }
    function tt() {
      {
        if (ae.current) {
          var I = Ke(ae.current.type);
          if (I)
            return `

Check the render method of \`` + I + "`.";
        }
        return "";
      }
    }
    function nt(I) {
      {
        if (I !== void 0) {
          var Z = I.fileName.replace(/^.*[\\\/]/, ""), K = I.lineNumber;
          return `

Check your code at ` + Z + ":" + K + ".";
        }
        return "";
      }
    }
    var ft = {};
    function mt(I) {
      {
        var Z = tt();
        if (!Z) {
          var K = typeof I == "string" ? I : I.displayName || I.name;
          K && (Z = `

Check the top-level render call using <` + K + ">.");
        }
        return Z;
      }
    }
    function At(I, Z) {
      {
        if (!I._store || I._store.validated || I.key != null)
          return;
        I._store.validated = !0;
        var K = mt(Z);
        if (ft[K])
          return;
        ft[K] = !0;
        var fe = "";
        I && I._owner && I._owner !== ae.current && (fe = " It was passed a child from " + Ke(I._owner.type) + "."), Le(I), ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, fe), Le(null);
      }
    }
    function Re(I, Z) {
      {
        if (typeof I != "object")
          return;
        if (St(I))
          for (var K = 0; K < I.length; K++) {
            var fe = I[K];
            xe(fe) && At(fe, Z);
          }
        else if (xe(I))
          I._store && (I._store.validated = !0);
        else if (I) {
          var Se = V(I);
          if (typeof Se == "function" && Se !== I.entries)
            for (var Ce = Se.call(I), Ee; !(Ee = Ce.next()).done; )
              xe(Ee.value) && At(Ee.value, Z);
        }
      }
    }
    function Pr(I) {
      {
        var Z = I.type;
        if (Z == null || typeof Z == "string")
          return;
        var K;
        if (typeof Z == "function")
          K = Z.propTypes;
        else if (typeof Z == "object" && (Z.$$typeof === N || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Z.$$typeof === B))
          K = Z.propTypes;
        else
          return;
        if (K) {
          var fe = Ke(Z);
          Zt(K, I.props, "prop", fe, I);
        } else if (Z.PropTypes !== void 0 && !ne) {
          ne = !0;
          var Se = Ke(Z);
          ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Se || "Unknown");
        }
        typeof Z.getDefaultProps == "function" && !Z.getDefaultProps.isReactClassApproved && ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Br(I) {
      {
        for (var Z = Object.keys(I.props), K = 0; K < Z.length; K++) {
          var fe = Z[K];
          if (fe !== "children" && fe !== "key") {
            Le(I), ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), Le(null);
            break;
          }
        }
        I.ref !== null && (Le(I), ee("Invalid attribute `ref` supplied to `React.Fragment`."), Le(null));
      }
    }
    function Ur(I, Z, K, fe, Se, Ce) {
      {
        var Ee = je(I);
        if (!Ee) {
          var Ie = "";
          (I === void 0 || typeof I == "object" && I !== null && Object.keys(I).length === 0) && (Ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Mt = nt(Se);
          Mt ? Ie += Mt : Ie += tt();
          var Fe;
          I === null ? Fe = "null" : St(I) ? Fe = "array" : I !== void 0 && I.$$typeof === g ? (Fe = "<" + (Ke(I.type) || "Unknown") + " />", Ie = " Did you accidentally export a JSX literal instead of a component?") : Fe = typeof I, ee("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Fe, Ie);
        }
        var We = ue(I, Z, K, Se, Ce);
        if (We == null)
          return We;
        if (Ee) {
          var at = Z.children;
          if (at !== void 0)
            if (fe)
              if (St(at)) {
                for (var Pt = 0; Pt < at.length; Pt++)
                  Re(at[Pt], I);
                Object.freeze && Object.freeze(at);
              } else
                ee("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(at, I);
        }
        return I === C ? Br(We) : Pr(We), We;
      }
    }
    function dt(I, Z, K) {
      return Ur(I, Z, K, !0);
    }
    function Rr(I, Z, K) {
      return Ur(I, Z, K, !1);
    }
    var sn = Rr, ln = dt;
    xi.Fragment = C, xi.jsx = sn, xi.jsxs = ln;
  }()), xi;
}
process.env.NODE_ENV === "production" ? Lu.exports = es() : Lu.exports = ts();
var Y = Lu.exports;
const Ru = wu({ botOptions: {}, setBotOptions: () => null }), Rt = () => Tu(Ru);
const rs = ({
  notificationToggledOn: j,
  audioToggledOn: g,
  handleToggleNotification: T,
  handleToggleAudio: C
}) => {
  var m, R, B, _, he, $, te, V, k, ee, le, ye;
  const { botOptions: c, setBotOptions: P } = Rt(), W = {
    background: `linear-gradient(to right, ${(m = c.theme) == null ? void 0 : m.secondaryColor},
			${(R = c.theme) == null ? void 0 : R.primaryColor})`,
    ...c.headerStyle
  }, H = {
    headerAvatar: {
      backgroundImage: `url(${(B = c.header) == null ? void 0 : B.avatar})`
    },
    notificationIcon: {
      backgroundImage: `url(${(_ = c.notification) == null ? void 0 : _.icon})`
    },
    audioIcon: {
      backgroundImage: `url(${(he = c.audio) == null ? void 0 : he.icon})`
    },
    closeChatIcon: {
      backgroundImage: `url(${($ = c.header) == null ? void 0 : $.closeChatIcon})`
    }
  }, N = () => {
    P({ ...c, isOpen: !1 });
  };
  return /* @__PURE__ */ Y.jsxs("div", { style: W, className: "rcb-chat-header-container", children: [
    /* @__PURE__ */ Y.jsxs("div", { className: "rcb-chat-header", children: [
      ((te = c.header) == null ? void 0 : te.showAvatar) && /* @__PURE__ */ Y.jsx("div", { style: H.headerAvatar, className: "rcb-bot-avatar" }),
      (V = c.header) == null ? void 0 : V.title
    ] }),
    /* @__PURE__ */ Y.jsxs("div", { className: "rcb-chat-header", children: [
      !((k = c.notification) != null && k.disabled) && !((ee = c.theme) != null && ee.embedded) && /* @__PURE__ */ Y.jsx(
        "div",
        {
          style: H.notificationIcon,
          onMouseDown: (Ae) => {
            Ae.preventDefault(), T();
          },
          className: `rcb-notification-icon-${j ? "on" : "off"}`
        }
      ),
      !((le = c.audio) != null && le.disabled) && /* @__PURE__ */ Y.jsx(
        "div",
        {
          style: H.audioIcon,
          onMouseDown: (Ae) => {
            Ae.preventDefault(), C();
          },
          className: `rcb-audio-icon-${g ? "on" : "off"}`
        }
      ),
      !((ye = c.theme) != null && ye.embedded) && /* @__PURE__ */ Y.jsx(
        "div",
        {
          style: H.closeChatIcon,
          onMouseDown: (Ae) => {
            Ae.stopPropagation(), N();
          },
          className: "rcb-close-chat-icon"
        }
      )
    ] })
  ] });
};
const ns = ({
  chatBodyRef: j,
  isScrolling: g,
  setIsScrolling: T,
  unreadCount: C
}) => {
  var he, $, te;
  const { botOptions: c } = Rt(), [P, W] = Ve(!1), H = {
    color: (he = c.theme) == null ? void 0 : he.primaryColor,
    borderColor: ($ = c.theme) == null ? void 0 : $.primaryColor,
    ...c.chatMessagePromptHoveredStyle
  }, N = () => {
    W(!0);
  }, m = () => {
    W(!1);
  };
  function R(V) {
    if (!j.current)
      return;
    const k = j.current.scrollTop, le = j.current.scrollHeight - j.current.clientHeight - k, ye = 20;
    let Ae = 0;
    function pe() {
      if (!j.current)
        return;
      Ae += ye;
      const ce = B(Ae, k, le, V);
      j.current.scrollTop = ce, Ae < V ? requestAnimationFrame(pe) : T(!1);
    }
    pe();
  }
  const B = (V, k, ee, le) => (V /= le / 2, V < 1 ? ee / 2 * V * V + k : (V--, -ee / 2 * (V * (V - 2) - 1) + k)), _ = () => {
    var k;
    return j.current && ((k = c.chatWindow) == null ? void 0 : k.showMessagePrompt) && g && C > 0 ? "visible" : "hidden";
  };
  return /* @__PURE__ */ Y.jsx("div", { className: `rcb-message-prompt-container ${_()}`, children: /* @__PURE__ */ Y.jsx(
    "div",
    {
      onMouseEnter: N,
      onMouseLeave: m,
      style: P ? H : c.chatMessagePromptStyle,
      onMouseDown: (V) => {
        V.preventDefault(), R(600);
      },
      className: "rcb-message-prompt-text",
      children: (te = c.chatWindow) == null ? void 0 : te.messagePromptText
    }
  ) });
}, Yu = wu({ messages: [], setMessages: () => null }), Hu = () => Tu(Yu);
const As = ({
  chatBodyRef: j,
  isBotTyping: g,
  isLoadingChatHistory: T,
  chatScrollHeight: C,
  setChatScrollHeight: c,
  setIsLoadingChatHistory: P,
  isScrolling: W,
  setIsScrolling: H,
  unreadCount: N,
  setUnreadCount: m
}) => {
  var ye, Ae, pe, ce, Xe, ve, je, ze, we, Ke;
  const { botOptions: R } = Rt(), { messages: B } = Hu(), _ = {
    ...R == null ? void 0 : R.bodyStyle,
    scrollbarWidth: (ye = R.chatWindow) != null && ye.showScrollbar ? "auto" : "none"
  }, he = {
    backgroundColor: (Ae = R.theme) == null ? void 0 : Ae.primaryColor,
    color: "#fff",
    maxWidth: (pe = R.userBubble) != null && pe.showAvatar ? "65%" : "70%",
    ...R.userBubbleStyle
  }, $ = (ce = R.userBubble) != null && ce.animate ? "rcb-user-message-entry" : "", te = {
    backgroundColor: (Xe = R.theme) == null ? void 0 : Xe.secondaryColor,
    color: "#fff",
    maxWidth: (ve = R.botBubble) != null && ve.showAvatar ? "65%" : "70%",
    ...R.botBubbleStyle
  }, V = (je = R.botBubble) != null && je.animate ? "rcb-bot-message-entry" : "";
  Ut(() => {
    var De;
    if (j.current) {
      if (T) {
        const { scrollHeight: Ue } = j.current, _e = Ue - C;
        j.current.scrollTop = j.current.scrollTop + _e, P(!1);
        return;
      }
      ((De = R.chatWindow) != null && De.autoJumpToBottom || !W) && (j.current.scrollTop = j.current.scrollHeight, R.isOpen && m(0));
    }
  }, [B.length, g]), Ut(() => {
    j.current && (c(j.current.scrollHeight), W || (j.current.scrollTop = j.current.scrollHeight, R.isOpen && m(0)));
  }, [(ze = j.current) == null ? void 0 : ze.scrollHeight]), Ut(() => {
    W || m(0);
  }, [W]);
  const k = () => {
    var st;
    if (!j.current)
      return;
    const { scrollTop: De, clientHeight: Ue, scrollHeight: _e } = j.current;
    H(
      De + Ue < _e - (((st = R.chatWindow) == null ? void 0 : st.messagePromptOffset) || 30)
    ), !W && De + Ue >= _e - 1 && (j.current.scrollTop = _e - Ue - 1);
  }, ee = (De) => {
    var Ue, _e, st;
    return /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
      (Ue = R == null ? void 0 : R.userBubble) != null && Ue.dangerouslySetInnerHtml ? /* @__PURE__ */ Y.jsx(
        "div",
        {
          style: { ...he, display: "inline" },
          className: `rcb-user-message ${$}`,
          dangerouslySetInnerHTML: { __html: De.content }
        }
      ) : /* @__PURE__ */ Y.jsx(
        "div",
        {
          style: he,
          className: `rcb-user-message ${$}`,
          children: De.content
        }
      ),
      ((_e = R.userBubble) == null ? void 0 : _e.showAvatar) && /* @__PURE__ */ Y.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(st = R.userBubble) == null ? void 0 : st.avatar})` },
          className: "rcb-message-user-avatar"
        }
      )
    ] });
  }, le = (De) => {
    var Ue, _e, st;
    return /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
      ((Ue = R.botBubble) == null ? void 0 : Ue.showAvatar) && /* @__PURE__ */ Y.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(_e = R.botBubble) == null ? void 0 : _e.avatar})` },
          className: "rcb-message-bot-avatar"
        }
      ),
      (st = R == null ? void 0 : R.botBubble) != null && st.dangerouslySetInnerHtml ? /* @__PURE__ */ Y.jsx(
        "div",
        {
          style: { ...te, display: "inline" },
          className: `rcb-bot-message ${V}`,
          dangerouslySetInnerHTML: { __html: De.content }
        }
      ) : /* @__PURE__ */ Y.jsx(
        "div",
        {
          style: te,
          className: `rcb-bot-message ${V}`,
          children: De.content
        }
      )
    ] });
  };
  return /* @__PURE__ */ Y.jsxs(
    "div",
    {
      style: _,
      className: "rcb-chat-body-container",
      ref: j,
      onScroll: k,
      children: [
        B.map((De, Ue) => typeof De.content != "string" ? /* @__PURE__ */ Y.jsx("div", { children: De.content }, Ue) : /* @__PURE__ */ Y.jsx(
          "div",
          {
            className: De.sender === "user" ? "rcb-user-message-container" : "rcb-bot-message-container",
            children: De.sender === "user" ? ee(De) : le(De)
          },
          Ue
        )),
        g && /* @__PURE__ */ Y.jsxs("div", { className: "rcb-bot-message-container", children: [
          ((we = R.botBubble) == null ? void 0 : we.showAvatar) && /* @__PURE__ */ Y.jsx(
            "div",
            {
              style: { backgroundImage: `url(${(Ke = R.botBubble) == null ? void 0 : Ke.avatar})` },
              className: "rcb-message-bot-avatar"
            }
          ),
          /* @__PURE__ */ Y.jsx(
            "div",
            {
              onMouseDown: (De) => {
                De.preventDefault();
              },
              className: `rcb-bot-message ${V}`,
              children: /* @__PURE__ */ Y.jsxs("div", { className: "rcb-typing-indicator", children: [
                /* @__PURE__ */ Y.jsx("span", { className: "rcb-dot" }),
                /* @__PURE__ */ Y.jsx("span", { className: "rcb-dot" }),
                /* @__PURE__ */ Y.jsx("span", { className: "rcb-dot" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ Y.jsx(
          ns,
          {
            chatBodyRef: j,
            isScrolling: W,
            setIsScrolling: H,
            unreadCount: N
          }
        )
      ]
    }
  );
};
const os = ({
  handleSubmit: j
}) => {
  var m, R, B;
  const { botOptions: g } = Rt(), [T, C] = Ve(!1), c = {
    backgroundColor: (m = g.theme) == null ? void 0 : m.primaryColor,
    ...g.sendButtonStyle
  }, P = {
    backgroundColor: (R = g.theme) == null ? void 0 : R.secondaryColor,
    ...g.sendButtonHoveredStyle
  }, W = {
    backgroundImage: `url(${(B = g.chatInput) == null ? void 0 : B.sendButtonIcon})`
  }, H = () => {
    C(!0);
  }, N = () => {
    C(!1);
  };
  return /* @__PURE__ */ Y.jsx(
    "div",
    {
      onMouseEnter: H,
      onMouseLeave: N,
      style: T ? P : c,
      onMouseDown: j,
      className: "rcb-send-button",
      children: /* @__PURE__ */ Y.jsx("span", { className: "rcb-send-icon", style: W })
    }
  );
}, xu = window.SpeechRecognition || window.webkitSpeechRecognition, Xr = xu != null ? new xu() : null;
let un, Na, Jn = !1, Jr = null;
const is = (j, g, T, C, c, P) => {
  var W;
  (W = j.voice) != null && W.sendAsAudio ? us(T, c) : as(j, g, T, C, P);
}, as = (j, g, T, C, c) => {
  var H, N, m;
  if (!Xr)
    return;
  if (!Jn)
    try {
      Jn = !0, Xr.lang = (H = j.voice) == null ? void 0 : H.language, Xr.start();
    } catch {
    }
  const P = (N = j.voice) == null ? void 0 : N.timeoutPeriod, W = (m = j.voice) == null ? void 0 : m.autoSendPeriod;
  Xr.onresult = (R) => {
    var _, he;
    clearTimeout(un), un = null, clearTimeout(Na);
    const B = R.results[R.results.length - 1][0].transcript;
    if (c.current) {
      const $ = (_ = j.chatInput) == null ? void 0 : _.characterLimit, te = c.current.value + B;
      $ != null && $ >= 0 && te.length > $ ? c.current.value = te.slice(0, $) : c.current.value = te, C(c.current.value.length);
    }
    un = setTimeout(() => vu(g), P), (he = j.voice) != null && he.autoSendDisabled || (Na = setTimeout(T, W));
  }, Xr.onend = () => {
    Jn ? (Xr.start(), un || (un = setTimeout(() => vu(g), P))) : (clearTimeout(un), un = null, clearTimeout(Na));
  }, un = setTimeout(() => vu(g), P);
}, us = (j, g) => {
  navigator.mediaDevices.getUserMedia({ audio: !0 }).then((T) => {
    if (Jr = new MediaRecorder(T), !Jn)
      try {
        Jn = !0, Jr.start();
      } catch {
      }
    Jr.ondataavailable = (C) => {
      g((c) => [...c, C.data]);
    }, Jr.onstop = () => {
      j(), T.getTracks().forEach((C) => C.stop());
    };
  }).catch((T) => {
    console.error("Unable to use microphone:", T);
  });
}, Su = () => {
  Xr && (Jn = !1, Xr && Xr.stop(), Jr && Jr.state !== "inactive" && (Jr.stop(), Jr = null), clearTimeout(un), un = null, clearTimeout(Na));
}, pu = (j, g) => {
  var T, C, c;
  (T = g.voice) != null && T.disabled || !((C = g.chatInput) != null && C.blockSpam) || !Xr || (j && !Jn ? (Jn = !0, (c = g.voice) != null && c.sendAsAudio ? Jr == null || Jr.start() : Xr.start()) : j || Su());
}, vu = (j) => {
  j(), Su();
};
const ss = ({
  inputRef: j,
  textAreaDisabled: g,
  voiceToggledOn: T,
  handleToggleVoice: C,
  triggerSendVoiceInput: c,
  setInputLength: P,
  setAudioChunks: W
}) => {
  var N;
  const { botOptions: H } = Rt();
  return Ut(() => {
    T ? is(
      H,
      C,
      c,
      P,
      W,
      j
    ) : Su();
  }, [T]), /* @__PURE__ */ Y.jsx(
    "div",
    {
      onMouseDown: (m) => {
        m.preventDefault(), C();
      },
      className: T && !g ? "rcb-voice-button-enabled" : "rcb-voice-button-disabled",
      children: /* @__PURE__ */ Y.jsx(
        "span",
        {
          className: T && !g ? "rcb-voice-icon-on" : "rcb-voice-icon-off",
          style: { backgroundImage: `url(${(N = H.voice) == null ? void 0 : N.icon})` }
        }
      )
    }
  );
};
const Fu = ({
  file: j,
  fileType: g,
  fileUrl: T
}) => {
  var P, W, H, N, m;
  const { botOptions: C } = Rt(), c = {
    backgroundColor: (P = C.theme) == null ? void 0 : P.primaryColor,
    maxWidth: (W = C.userBubble) != null && W.showAvatar ? "65%" : "70%",
    ...C.mediaDisplayContainerStyle
  };
  return /* @__PURE__ */ Y.jsx(Y.Fragment, { children: T ? /* @__PURE__ */ Y.jsxs("div", { className: "rcb-user-message-container", children: [
    g === "image" && T && /* @__PURE__ */ Y.jsx(
      "div",
      {
        style: c,
        className: "rcb-media-display-image-container rcb-media-entry",
        children: /* @__PURE__ */ Y.jsx("img", { src: T, alt: "Image Display", className: "rcb-media-display-image" })
      }
    ),
    g === "video" && T && /* @__PURE__ */ Y.jsx(
      "div",
      {
        style: c,
        className: "rcb-media-display-video-container rcb-media-entry",
        children: /* @__PURE__ */ Y.jsxs("video", { controls: !0, className: "rcb-media-display-video", children: [
          /* @__PURE__ */ Y.jsx("source", { src: T, type: j.type }),
          "Your browser does not support the video tag."
        ] })
      }
    ),
    g === "audio" && T && /* @__PURE__ */ Y.jsxs(
      "audio",
      {
        style: {
          maxWidth: (H = C.userBubble) != null && H.showAvatar ? "65%" : "70%"
        },
        controls: !0,
        className: "rcb-media-display-audio rcb-media-entry",
        children: [
          /* @__PURE__ */ Y.jsx("source", { src: T, type: j.type }),
          "Your browser does not support the audio tag."
        ]
      }
    ),
    ((N = C.userBubble) == null ? void 0 : N.showAvatar) && /* @__PURE__ */ Y.jsx(
      "div",
      {
        style: { backgroundImage: `url(${(m = C.userBubble) == null ? void 0 : m.avatar})` },
        className: "rcb-message-user-avatar"
      }
    )
  ] }) : /* @__PURE__ */ Y.jsx(Y.Fragment, {}) });
}, Du = ["Quickstart", "API Docs", "Examples", "Github", "Discord"], ls = {
  start: {
    message: "Hello, I am Tan Jin 👋! Welcome to React ChatBotify, I'm excited that you are using our chatbot 😊!",
    transition: { duration: 1e3 },
    chatDisabled: !0,
    path: "show_options"
  },
  show_options: {
    message: "It looks like you have not set up a conversation flow yet. No worries! Here are a few helpful things you can check out to get started:",
    options: Du,
    path: "process_options"
  },
  prompt_again: {
    message: "Do you need any other help?",
    options: Du,
    path: "process_options"
  },
  unknown_input: {
    message: "Sorry, I do not understand your message 😢! If you require further assistance, you may click on the Github option and open an issue there or visit our discord.",
    options: Du,
    path: "process_options"
  },
  process_options: {
    transition: { duration: 0 },
    path: (j) => {
      let g = "";
      switch (j.userInput) {
        case "Quickstart":
          g = "https://react-chatbotify.tjtanjin.com/docs/introduction/quickstart/";
          break;
        case "API Docs":
          g = "https://react-chatbotify.tjtanjin.com/docs/api/bot_options";
          break;
        case "Examples":
          g = "https://react-chatbotify.tjtanjin.com/docs/examples/basic_form";
          break;
        case "Github":
          g = "https://github.com/tjtanjin/react-chatbotify/";
          break;
        case "Discord":
          g = "https://discord.gg/6R4DK4G5Zh";
          break;
        default:
          return "unknown_input";
      }
      return j.injectMessage("Sit tight! I'll send you right there!"), setTimeout(() => {
        window.open(g);
      }, 1e3), "repeat";
    }
  },
  repeat: {
    transition: { duration: 3e3 },
    path: "prompt_again"
  }
}, Qr = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), cs = (j) => {
  const g = [];
  let T = "", C = !1;
  for (let c = 0; c < j.length; c++) {
    const P = j[c];
    P === "<" ? C ? (g.push(T), T = P) : (C = !0, T = P) : P === ">" ? (T += P, g.push(T), T = "", C = !1) : C ? T += P : g.push(P);
  }
  return T !== "" && g.push(T), g;
}, zu = (j) => {
  if (!j)
    return !1;
  const g = j.getBoundingClientRect(), T = window.innerHeight || document.documentElement.clientHeight, C = window.innerWidth || document.documentElement.clientWidth;
  return g.top >= 0 && g.left >= 0 && g.bottom <= T && g.right <= C;
}, Wu = async (j) => {
  if (!j)
    return { fileType: null, fileUrl: null };
  const g = j.type.split("/")[0];
  if (!["image", "video", "audio"].includes(g))
    return { fileType: null, fileUrl: null };
  try {
    const T = await new Promise((C, c) => {
      const P = new FileReader();
      P.onload = () => C(P.result), P.onerror = () => c(new Error("File reading failed")), P.readAsDataURL(j);
    });
    return { fileType: g, fileUrl: T };
  } catch {
    return { fileType: null, fileUrl: null };
  }
};
const fs = ({
  inputRef: j,
  textAreaDisabled: g,
  textAreaSensitiveMode: T,
  voiceToggledOn: C,
  getCurrPath: c,
  handleToggleVoice: P,
  handleActionInput: W,
  hasFlowStarted: H,
  setHasFlowStarted: N,
  injectMessage: m
}) => {
  var _e, st, jt, lt, Lt, Ye, He, Ct, wt, Ge, be;
  const { botOptions: R } = Rt(), [B, _] = Ve(!1), [he, $] = Ve(0), [te, V] = Ve([]), [k, ee] = Ve(!1);
  Ut(() => {
    var Oe, ke;
    const Qe = c();
    Qe && ((Oe = R.voice) != null && Oe.sendAsAudio ? (Ue(), V([])) : (W(Qe, (ke = j.current) == null ? void 0 : ke.value), $(0)));
  }, [k]);
  const le = {
    boxSizing: Qr ? "content-box" : "border-box",
    ...R.chatInputAreaStyle
  }, ye = {
    outline: g ? "" : "none",
    boxShadow: g ? "" : `0 0 5px ${(_e = R.theme) == null ? void 0 : _e.primaryColor}`,
    boxSizing: Qr ? "content-box" : "border-box",
    ...R.chatInputAreaStyle,
    // by default inherit the base style for input area
    ...R.chatInputAreaFocusedStyle
  }, Ae = {
    cursor: `url(${(st = R.theme) == null ? void 0 : st.actionDisabledIcon}), auto`,
    caretColor: "transparent",
    boxSizing: Qr ? "content-box" : "border-box",
    ...R.chatInputAreaStyle,
    // by default inherit the base style for input area
    ...R.chatInputAreaDisabledStyle
  }, pe = {
    color: "#989898",
    ...R.characterLimitStyle
  }, ce = {
    color: "#ff0000",
    ...R.characterLimitReachedStyle
  }, Xe = g ? (jt = R.chatInput) == null ? void 0 : jt.disabledPlaceholderText : (lt = R.chatInput) == null ? void 0 : lt.enabledPlaceholderText, ve = () => {
    g || _(!0);
  }, je = () => {
    _(!1);
  }, ze = (Qe) => {
    var Oe;
    if (Qe.key === "Enter") {
      if (Qe.shiftKey) {
        (Oe = R.chatInput) != null && Oe.allowNewline || Qe.preventDefault();
        return;
      }
      Ke(Qe);
    }
  }, we = (Qe) => {
    var Oe, ke;
    if (g && j.current) {
      j.current.value = "";
      return;
    }
    if (j.current) {
      const pt = (Oe = R.chatInput) == null ? void 0 : Oe.characterLimit, Tt = ((ke = R.chatInput) == null ? void 0 : ke.allowNewline) ? Qe.target.value : Qe.target.value.replace(/\n/g, " ");
      pt != null && pt >= 0 && Tt.length > pt ? j.current.value = Tt.slice(0, pt) : j.current.value = Tt, $(j.current.value.length);
    }
  }, Ke = (Qe) => {
    var ke;
    Qe.preventDefault();
    const Oe = c();
    Oe && (W(Oe, (ke = j.current) == null ? void 0 : ke.value), $(0));
  }, De = () => {
    ee((Qe) => !Qe);
  }, Ue = async () => {
    const Qe = new Blob(te, { type: "audio/wav" }), Oe = new File([Qe], "voice-input.wav", { type: "audio/wav" }), ke = await Wu(Oe);
    !ke.fileType || !ke.fileUrl || await m(/* @__PURE__ */ Y.jsx(
      Fu,
      {
        file: Oe,
        fileType: ke.fileType,
        fileUrl: ke.fileUrl
      }
    ), "user");
  };
  return /* @__PURE__ */ Y.jsxs(
    "div",
    {
      onMouseDown: (Qe) => {
        var Oe;
        Qe.stopPropagation(), !H && ((Oe = R.theme) == null ? void 0 : Oe.flowStartTrigger) === "ON_CHATBOT_INTERACT" && N(!0);
      },
      style: R.chatInputContainerStyle,
      className: "rcb-chat-input",
      children: [
        T && ((Lt = R.sensitiveInput) != null && Lt.maskInTextArea) ? /* @__PURE__ */ Y.jsx(
          "input",
          {
            ref: j,
            type: "password",
            className: "rcb-chat-input-textarea",
            style: g ? Ae : B ? ye : le,
            placeholder: Xe,
            onChange: we,
            onKeyDown: ze,
            onFocus: ve,
            onBlur: je
          }
        ) : /* @__PURE__ */ Y.jsx(
          "textarea",
          {
            ref: j,
            style: g ? Ae : B ? ye : le,
            rows: 1,
            className: "rcb-chat-input-textarea",
            placeholder: Xe,
            onChange: we,
            onKeyDown: ze,
            onFocus: ve,
            onBlur: je
          }
        ),
        /* @__PURE__ */ Y.jsxs("div", { className: "rcb-chat-input-button-container", children: [
          !((Ye = R.voice) != null && Ye.disabled) && Qr && /* @__PURE__ */ Y.jsx(
            ss,
            {
              inputRef: j,
              textAreaDisabled: g,
              voiceToggledOn: C,
              handleToggleVoice: P,
              triggerSendVoiceInput: De,
              setInputLength: $,
              setAudioChunks: V
            }
          ),
          /* @__PURE__ */ Y.jsx(os, { handleSubmit: Ke }),
          ((He = R.chatInput) == null ? void 0 : He.showCharacterCount) && ((Ct = R.chatInput) == null ? void 0 : Ct.characterLimit) != null && ((wt = R.chatInput) == null ? void 0 : wt.characterLimit) > 0 && /* @__PURE__ */ Y.jsxs(
            "div",
            {
              className: "rcb-chat-input-char-counter",
              style: he >= ((Ge = R.chatInput) == null ? void 0 : Ge.characterLimit) ? ce : pe,
              children: [
                he,
                "/",
                (be = R.chatInput) == null ? void 0 : be.characterLimit
              ]
            }
          )
        ] })
      ]
    }
  );
};
const ds = ({
  inputRef: j,
  textAreaDisabled: g
}) => {
  var R, B, _, he;
  const { botOptions: T } = Rt(), C = Zr(null), c = Zr(null), [P, W] = Ve(!1), H = {
    cursor: `url(${(R = T.theme) == null ? void 0 : R.actionDisabledIcon}), auto`
  };
  Ut(() => {
    const $ = (k) => {
      C.current && !C.current.contains(k.target) && c.current && !c.current.contains(k.target) && W(!1);
    }, te = () => {
      if (C.current && c.current) {
        const k = c.current.getBoundingClientRect(), ee = C.current.offsetHeight, le = k.top - ee - 8;
        C.current.style.left = `${k.left}px`, C.current.style.top = `${le}px`;
      }
    }, V = () => {
      te();
    };
    return document.addEventListener("mousedown", $), window.addEventListener("resize", V), () => {
      document.removeEventListener("mousedown", $), window.removeEventListener("resize", V);
    };
  }, []);
  const N = ($, te) => {
    $.preventDefault(), j.current && (j.current.value = j.current.value + te, setTimeout(() => {
      const V = j.current;
      if (V) {
        V.focus();
        const k = V.value.length;
        V.setSelectionRange(k, k);
      }
    }, 50)), W(!1);
  }, m = ($) => {
    $.preventDefault(), W(g ? !1 : !P);
  };
  return /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
    /* @__PURE__ */ Y.jsx(
      "div",
      {
        ref: c,
        style: g ? H : {},
        className: `${g ? "rcb-emoji-button-disabled" : "rcb-emoji-button-enabled"}`,
        onMouseDown: m,
        children: /* @__PURE__ */ Y.jsx(
          "span",
          {
            style: { backgroundImage: `url(${(B = T.emoji) == null ? void 0 : B.icon})` },
            className: `${g ? "rcb-emoji-icon-disabled" : "rcb-emoji-icon-enabled"}`
          }
        )
      }
    ),
    P && /* @__PURE__ */ Y.jsx("div", { className: "rcb-emoji-picker-popup", ref: C, children: (he = (_ = T.emoji) == null ? void 0 : _.list) == null ? void 0 : he.map(($, te) => /* @__PURE__ */ Y.jsx(
      "span",
      {
        className: "rcb-emoji",
        onMouseDown: (V) => N(V, $),
        children: $
      },
      te
    )) })
  ] });
}, Vu = wu({ paths: [], setPaths: () => null }), Ia = () => Tu(Vu);
const Ms = ({
  inputRef: j,
  flow: g,
  injectMessage: T,
  streamMessage: C,
  openChat: c,
  getCurrPath: P,
  getPrevPath: W,
  handleActionInput: H
}) => {
  var he, $, te, V, k;
  const { botOptions: N } = Rt(), { paths: m } = Ia(), [R, B] = Ve(!1);
  Ut(() => {
    const ee = P();
    if (!ee)
      return;
    const le = g[ee];
    le && B(typeof le.file == "function");
  }, [m]);
  const _ = async (ee) => {
    var ce, Xe, ve;
    const le = ee.target.files;
    if (!le)
      return;
    const ye = P();
    if (!ye)
      return;
    const Ae = g[ye];
    if (!Ae)
      return;
    const pe = Ae.file;
    if (pe != null) {
      const je = [];
      for (let ze = 0; ze < le.length; ze++) {
        if (je.push(le[ze].name), !((ce = N.fileAttachment) != null && ce.showMediaDisplay))
          continue;
        const we = await Wu(le[ze]);
        !we.fileType || !we.fileUrl || await T(/* @__PURE__ */ Y.jsx(
          Fu,
          {
            file: le[ze],
            fileType: we.fileType,
            fileUrl: we.fileUrl
          }
        ), "user");
      }
      await H(ye, "📄 " + je.join(", "), (Xe = N.chatInput) == null ? void 0 : Xe.sendAttachmentOutput), await pe({
        userInput: (ve = j.current) == null ? void 0 : ve.value,
        prevPath: W(),
        injectMessage: T,
        streamMessage: C,
        openChat: c,
        files: le
      });
    }
  };
  return /* @__PURE__ */ Y.jsx(Y.Fragment, { children: R ? /* @__PURE__ */ Y.jsxs("label", { className: "rcb-attach-button-enabled", children: [
    /* @__PURE__ */ Y.jsx(
      "input",
      {
        className: "rcb-attach-input",
        type: "file",
        onChange: _,
        multiple: (he = N.fileAttachment) == null ? void 0 : he.multiple,
        accept: ($ = N.fileAttachment) == null ? void 0 : $.accept
      }
    ),
    /* @__PURE__ */ Y.jsx(
      "span",
      {
        style: { backgroundImage: `url(${(te = N.fileAttachment) == null ? void 0 : te.icon})` },
        className: "rcb-attach-icon-enabled"
      }
    )
  ] }) : /* @__PURE__ */ Y.jsxs(
    "label",
    {
      className: "rcb-attach-button-disabled",
      style: { cursor: `url(${(V = N.theme) == null ? void 0 : V.actionDisabledIcon}), auto` },
      children: [
        /* @__PURE__ */ Y.jsx("input", { disabled: !0, type: "file" }),
        /* @__PURE__ */ Y.jsx(
          "span",
          {
            style: {
              backgroundImage: `url(${(k = N.fileAttachment) == null ? void 0 : k.icon})`
            },
            className: "rcb-attach-icon-disabled"
          }
        )
      ]
    }
  ) });
};
const gs = ({
  inputRef: j,
  flow: g,
  textAreaDisabled: T,
  injectMessage: C,
  streamMessage: c,
  openChat: P,
  getCurrPath: W,
  getPrevPath: H,
  handleActionInput: N
}) => {
  var R, B, _;
  const { botOptions: m } = Rt();
  return /* @__PURE__ */ Y.jsxs("div", { style: m.footerStyle, className: "rcb-chat-footer-container", children: [
    /* @__PURE__ */ Y.jsxs("div", { className: "rcb-chat-footer", children: [
      !((R = m.fileAttachment) != null && R.disabled) && /* @__PURE__ */ Y.jsx(
        Ms,
        {
          inputRef: j,
          flow: g,
          getCurrPath: W,
          openChat: P,
          getPrevPath: H,
          handleActionInput: N,
          injectMessage: C,
          streamMessage: c
        }
      ),
      !((B = m.emoji) != null && B.disabled) && /* @__PURE__ */ Y.jsx(ds, { inputRef: j, textAreaDisabled: T })
    ] }),
    /* @__PURE__ */ Y.jsx("span", { children: (_ = m.footer) == null ? void 0 : _.text })
  ] });
};
const hs = ({
  unreadCount: j
}) => {
  var P, W, H, N, m, R;
  const { botOptions: g, setBotOptions: T } = Rt(), C = () => {
    T({ ...g, isOpen: !g.isOpen });
  }, c = {
    backgroundImage: `url(${(P = g.chatButton) == null ? void 0 : P.icon}),
			linear-gradient(to right, ${(W = g.theme) == null ? void 0 : W.secondaryColor}, ${(H = g.theme) == null ? void 0 : H.primaryColor})`,
    width: 75,
    height: 75,
    ...g.chatButtonStyle
  };
  return /* @__PURE__ */ Y.jsx(Y.Fragment, { children: !((N = g.theme) != null && N.embedded) && /* @__PURE__ */ Y.jsx(
    "button",
    {
      "aria-label": "Open Chat",
      style: c,
      className: `rcb-toggle-button ${g.isOpen ? "rcb-button-hide" : "rcb-button-show"}`,
      onClick: C,
      children: !((m = g.notification) != null && m.disabled) && ((R = g.notification) == null ? void 0 : R.showCount) && /* @__PURE__ */ Y.jsx("span", { style: g.notificationBadgeStyle, className: "rcb-badge", children: j })
    }
  ) });
};
const ys = () => {
  var R, B, _, he, $;
  const { botOptions: j, setBotOptions: g } = Rt(), [T, C] = Ve(!1), [c, P] = Ve(!1), [W, H] = Ve(0);
  Ut(() => {
    var V, k, ee;
    const te = (V = j.tooltip) == null ? void 0 : V.mode;
    if (te === "ALWAYS")
      if (Qr) {
        let le;
        j.isOpen ? le = (((k = j.chatWindowStyle) == null ? void 0 : k.width) || 375) - (((ee = j.chatButtonStyle) == null ? void 0 : ee.width) || 75) : le = 0, H(le), C(!0);
      } else
        j.isOpen ? C(!1) : C(!0);
    else
      te === "NEVER" ? C(!1) : te === "START" ? c ? C(!1) : (P(!0), C(!0)) : te === "CLOSE" && C(!j.isOpen);
  }, [j.isOpen]);
  const N = {
    transform: `translateX(-${W}px)`,
    right: (((R = j.chatButtonStyle) == null ? void 0 : R.width) || 75) + 40,
    bottom: 30,
    backgroundColor: (B = j.theme) == null ? void 0 : B.secondaryColor,
    color: (_ = j.theme) == null ? void 0 : _.secondaryColor,
    ...j.tooltipStyle
  }, m = {
    borderColor: `transparent transparent transparent ${N.backgroundColor}`
  };
  return /* @__PURE__ */ Y.jsx(Y.Fragment, { children: !((he = j.theme) != null && he.embedded) && /* @__PURE__ */ Y.jsxs(
    "div",
    {
      style: N,
      className: `rcb-chat-tooltip ${T ? "rcb-tooltip-show" : "rcb-tooltip-hide"}`,
      onClick: () => g({ ...j, isOpen: !0 }),
      children: [
        /* @__PURE__ */ Y.jsx("span", { style: { color: "#fff" }, children: ($ = j.tooltip) == null ? void 0 : $.text }),
        /* @__PURE__ */ Y.jsx("span", { className: "rcb-chat-tooltip-tail", style: m })
      ]
    }
  ) });
};
const ps = ({
  chatHistory: j,
  showChatHistory: g
}) => {
  var N, m, R;
  const { botOptions: T } = Rt(), [C, c] = Ve(!1), P = {
    color: (N = T.theme) == null ? void 0 : N.primaryColor,
    borderColor: (m = T.theme) == null ? void 0 : m.primaryColor,
    ...T.chatHistoryButtonHoveredStyle
  }, W = () => {
    c(!0);
  }, H = () => {
    c(!1);
  };
  return /* @__PURE__ */ Y.jsx("div", { className: "rcb-view-history-container", children: /* @__PURE__ */ Y.jsx(
    "div",
    {
      onMouseEnter: W,
      onMouseLeave: H,
      style: C ? P : T.chatHistoryButtonStyle,
      onMouseDown: (B) => {
        B.preventDefault(), g(j);
      },
      className: "rcb-view-history-button",
      children: /* @__PURE__ */ Y.jsx("p", { children: (R = T.chatHistory) == null ? void 0 : R.viewChatHistoryButtonText })
    }
  ) });
};
const vs = ({
  checkboxes: j,
  checkedItems: g,
  path: T,
  handleActionInput: C
}) => {
  var te, V, k, ee, le, ye, Ae, pe, ce, Xe, ve;
  const { botOptions: c } = Rt(), { paths: P } = Ia(), [W, H] = Ve(/* @__PURE__ */ new Set()), [N, m] = Ve(!1), R = {
    cursor: N ? `url(${(te = c.theme) == null ? void 0 : te.actionDisabledIcon}), auto` : "pointer",
    color: (V = c.theme) == null ? void 0 : V.primaryColor,
    borderColor: (k = c.theme) == null ? void 0 : k.primaryColor,
    ...c.botCheckboxRowStyle
  }, B = {
    cursor: N || W.size < j.min ? `url(${(ee = c.theme) == null ? void 0 : ee.actionDisabledIcon}), auto` : "pointer",
    color: (le = c.theme) == null ? void 0 : le.primaryColor,
    borderColor: (ye = c.theme) == null ? void 0 : ye.primaryColor,
    ...c.botCheckboxNextStyle
  }, _ = {
    cursor: N ? `url(${(Ae = c.theme) == null ? void 0 : Ae.actionDisabledIcon}), auto` : "pointer",
    color: "transparent",
    ...c.botCheckMarkStyle
  }, he = {
    cursor: N ? `url(${(pe = c.theme) == null ? void 0 : pe.actionDisabledIcon}), auto` : "pointer",
    color: "#fff",
    borderColor: (ce = c.theme) == null ? void 0 : ce.primaryColor,
    backgroundColor: (Xe = c.theme) == null ? void 0 : Xe.primaryColor,
    ...c.botCheckMarkSelectedStyle
  };
  Ut(() => {
    P.length > 0 && P[P.length - 1] !== T && m(!0);
  }, [P]);
  const $ = (je) => {
    N || H((ze) => {
      const we = new Set(ze);
      if (we.has(je))
        g.delete(je), we.delete(je);
      else {
        if (W.size == j.max)
          return ze;
        g.add(je), we.add(je);
      }
      return we;
    });
  };
  return /* @__PURE__ */ Y.jsxs("div", { className: `rcb-checkbox-container ${(ve = c.botBubble) != null && ve.showAvatar ? "rcb-checkbox-offset" : ""}`, children: [
    j.items.map((je) => /* @__PURE__ */ Y.jsx(
      "div",
      {
        onMouseDown: (ze) => {
          ze.preventDefault(), $(je);
        },
        style: R,
        className: "rcb-checkbox-row-container",
        children: /* @__PURE__ */ Y.jsxs("div", { className: "rcb-checkbox-row", children: [
          /* @__PURE__ */ Y.jsx(
            "div",
            {
              style: W.has(je) ? he : _,
              className: "rcb-checkbox-mark"
            }
          ),
          /* @__PURE__ */ Y.jsx("div", { className: "rcb-checkbox-label", children: je })
        ] })
      },
      je
    )),
    /* @__PURE__ */ Y.jsx(
      "button",
      {
        style: B,
        className: "rcb-checkbox-next-button",
        disabled: N || W.size < j.min,
        onMouseDown: (je) => {
          var we;
          je.preventDefault();
          const ze = Array.from(g).join(", ");
          m(!0), C(T, ze, (we = c.chatInput) == null ? void 0 : we.sendCheckboxOutput);
        }
      }
    )
  ] });
}, Ds = (j, g, T, C) => {
  const c = j.checkboxes;
  if (!c || c.items.length == 0)
    return;
  c.min == null && (c.min = 1), c.max == null && (c.max = c.items.length), c.min > c.max && (c.min = c.max);
  const P = /* @__PURE__ */ new Set();
  T(/* @__PURE__ */ Y.jsx(
    vs,
    {
      checkboxes: c,
      checkedItems: P,
      path: g,
      handleActionInput: C
    }
  ));
}, Ls = async (j, g) => {
  const T = j.function;
  if (!T)
    return;
  const C = T(g);
  return C instanceof Promise ? await C : C;
}, Ns = async (j, g) => {
  const T = j.message;
  if (!T)
    return;
  if (typeof T == "string") {
    T.trim() !== "" && await g.injectMessage(T);
    return;
  }
  let C = T(g);
  C instanceof Promise && (C = await C), C && C.trim() !== "" && await g.injectMessage(C);
};
const js = ({
  options: j,
  path: g,
  handleActionInput: T
}) => {
  var he, $, te, V, k, ee;
  const { botOptions: C } = Rt(), { paths: c } = Ia(), [P, W] = Ve([]), [H, N] = Ve(!1), m = {
    cursor: H ? `url(${(he = C.theme) == null ? void 0 : he.actionDisabledIcon}), auto` : "pointer",
    color: ($ = C.theme) == null ? void 0 : $.primaryColor,
    borderColor: (te = C.theme) == null ? void 0 : te.primaryColor,
    backgroundColor: "#fff",
    ...C.botOptionStyle
  }, R = {
    color: "#fff",
    borderColor: (V = C.theme) == null ? void 0 : V.primaryColor,
    backgroundColor: (k = C.theme) == null ? void 0 : k.primaryColor,
    ...C.botOptionHoveredStyle
  };
  Ut(() => {
    c.length > 0 && c[c.length - 1] !== g && N(!0);
  }, [c]);
  const B = (le) => {
    W((ye) => {
      const Ae = [...ye];
      return Ae[le] = !0, Ae;
    });
  }, _ = (le) => {
    W((ye) => {
      const Ae = [...ye];
      return Ae[le] = !1, Ae;
    });
  };
  return /* @__PURE__ */ Y.jsx("div", { className: `rcb-options-container ${(ee = C.botBubble) != null && ee.showAvatar ? "rcb-options-offset" : ""}`, children: j.map((le, ye) => {
    const Ae = P[ye] && !H;
    return /* @__PURE__ */ Y.jsx(
      "div",
      {
        className: "rcb-options",
        style: Ae ? R : m,
        onMouseEnter: () => B(ye),
        onMouseLeave: () => _(ye),
        onMouseDown: (pe) => {
          var ce;
          pe.preventDefault(), !H && (N(!0), T(g, le, (ce = C.chatInput) == null ? void 0 : ce.sendOptionOutput));
        },
        children: le
      },
      le
    );
  }) });
}, Is = (j, g, T, C) => {
  const c = j.options;
  if (!c)
    return;
  T(/* @__PURE__ */ Y.jsx(js, { options: c, path: g, handleActionInput: C }));
}, ws = async (j, g, T) => {
  const C = j.path;
  if (!C)
    return !1;
  if (typeof C == "string")
    return T((W) => [...W, C]), !0;
  let c = C(g);
  if (c instanceof Promise && (c = await c), !c)
    return !1;
  const P = c;
  return T((W) => [...W, P]), !0;
}, Ts = async (j, g) => {
  const T = j.render;
  if (T) {
    if (typeof T == "function") {
      let C = T(g);
      if (C instanceof Promise && (C = await C), !C)
        return;
      await g.injectMessage(C);
      return;
    }
    await g.injectMessage(T);
  }
}, Ss = async (j, g, T, C, c) => {
  const P = j[g];
  if (!P)
    throw new Error("block is not valid.");
  const W = P.transition;
  let H;
  if (typeof W == "function" ? (H = W(T), H instanceof Promise && (H = await H)) : H = W, !H || H instanceof Promise || H.duration == null || typeof H.duration != "number")
    return;
  H.interruptable || (H.interruptable = !1);
  const N = setTimeout(async () => {
    await Gu(j, g, T, C);
  }, H.duration);
  H.interruptable && c(N);
}, ms = async (j, g, T, C, c, P, W, H) => {
  const N = j[g];
  if (!N)
    throw new Error("Block is not valid.");
  for (const m of Object.keys(N))
    switch (m) {
      case "message":
        await Ns(N, T);
        break;
      case "options":
        Is(N, g, T.injectMessage, H);
        break;
      case "checkboxes":
        Ds(N, g, T.injectMessage, H);
        break;
      case "render":
        await Ts(N, T);
        break;
      case "chatDisabled":
        N.chatDisabled && C(N.chatDisabled);
        break;
      case "isSensitive":
        N.isSensitive && c(N.isSensitive);
        break;
      case "transition":
        await Ss(j, g, T, P, W);
    }
}, Gu = async (j, g, T, C) => {
  const c = j[g];
  if (!c)
    throw new Error("Block is not valid.");
  const P = Object.keys(c);
  for (const W of P)
    W === "function" && await Ls(c, T);
  return P.includes("path") ? await ws(c, T, C) : !1;
};
var bA = {}, CA = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bu;
function Es() {
  if (bu)
    return CA;
  bu = 1;
  var j = zo;
  function g(A) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + A, h = 1; h < arguments.length; h++)
      s += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + A + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var T = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, c = {}, P = {};
  function W(A) {
    return T.call(P, A) ? !0 : T.call(c, A) ? !1 : C.test(A) ? P[A] = !0 : (c[A] = !0, !1);
  }
  function H(A, s, h, p, z, E, U) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = p, this.attributeNamespace = z, this.mustUseProperty = h, this.propertyName = A, this.type = s, this.sanitizeURL = E, this.removeEmptyString = U;
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A) {
    N[A] = new H(A, 0, !1, A, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(A) {
    var s = A[0];
    N[s] = new H(s, 1, !1, A[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(A) {
    N[A] = new H(A, 2, !1, A.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(A) {
    N[A] = new H(A, 2, !1, A, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A) {
    N[A] = new H(A, 3, !1, A.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(A) {
    N[A] = new H(A, 3, !0, A, null, !1, !1);
  }), ["capture", "download"].forEach(function(A) {
    N[A] = new H(A, 4, !1, A, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(A) {
    N[A] = new H(A, 6, !1, A, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(A) {
    N[A] = new H(A, 5, !1, A.toLowerCase(), null, !1, !1);
  });
  var m = /[\-:]([a-z])/g;
  function R(A) {
    return A[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A) {
    var s = A.replace(
      m,
      R
    );
    N[s] = new H(s, 1, !1, A, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A) {
    var s = A.replace(m, R);
    N[s] = new H(s, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(A) {
    var s = A.replace(m, R);
    N[s] = new H(s, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(A) {
    N[A] = new H(A, 1, !1, A.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new H("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(A) {
    N[A] = new H(A, 1, !1, A.toLowerCase(), null, !0, !0);
  });
  var B = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, _ = ["Webkit", "ms", "Moz", "O"];
  Object.keys(B).forEach(function(A) {
    _.forEach(function(s) {
      s = s + A.charAt(0).toUpperCase() + A.substring(1), B[s] = B[A];
    });
  });
  var he = /["'&<>]/;
  function $(A) {
    if (typeof A == "boolean" || typeof A == "number")
      return "" + A;
    A = "" + A;
    var s = he.exec(A);
    if (s) {
      var h = "", p, z = 0;
      for (p = s.index; p < A.length; p++) {
        switch (A.charCodeAt(p)) {
          case 34:
            s = "&quot;";
            break;
          case 38:
            s = "&amp;";
            break;
          case 39:
            s = "&#x27;";
            break;
          case 60:
            s = "&lt;";
            break;
          case 62:
            s = "&gt;";
            break;
          default:
            continue;
        }
        z !== p && (h += A.substring(z, p)), z = p + 1, h += s;
      }
      A = z !== p ? h + A.substring(z, p) : h;
    }
    return A;
  }
  var te = /([A-Z])/g, V = /^ms-/, k = Array.isArray;
  function ee(A, s) {
    return { insertionMode: A, selectedValue: s };
  }
  function le(A, s, h) {
    switch (s) {
      case "select":
        return ee(1, h.value != null ? h.value : h.defaultValue);
      case "svg":
        return ee(2, null);
      case "math":
        return ee(3, null);
      case "foreignObject":
        return ee(1, null);
      case "table":
        return ee(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ee(5, null);
      case "colgroup":
        return ee(7, null);
      case "tr":
        return ee(6, null);
    }
    return 4 <= A.insertionMode || A.insertionMode === 0 ? ee(1, null) : A;
  }
  var ye = /* @__PURE__ */ new Map();
  function Ae(A, s, h) {
    if (typeof h != "object")
      throw Error(g(62));
    s = !0;
    for (var p in h)
      if (T.call(h, p)) {
        var z = h[p];
        if (z != null && typeof z != "boolean" && z !== "") {
          if (p.indexOf("--") === 0) {
            var E = $(p);
            z = $(("" + z).trim());
          } else {
            E = p;
            var U = ye.get(E);
            U !== void 0 || (U = $(E.replace(te, "-$1").toLowerCase().replace(V, "-ms-")), ye.set(E, U)), E = U, z = typeof z == "number" ? z === 0 || T.call(B, p) ? "" + z : z + "px" : $(("" + z).trim());
          }
          s ? (s = !1, A.push(' style="', E, ":", z)) : A.push(";", E, ":", z);
        }
      }
    s || A.push('"');
  }
  function pe(A, s, h, p) {
    switch (h) {
      case "style":
        Ae(A, s, p);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < h.length) || h[0] !== "o" && h[0] !== "O" || h[1] !== "n" && h[1] !== "N") {
      if (s = N.hasOwnProperty(h) ? N[h] : null, s !== null) {
        switch (typeof p) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!s.acceptsBooleans)
              return;
        }
        switch (h = s.attributeName, s.type) {
          case 3:
            p && A.push(" ", h, '=""');
            break;
          case 4:
            p === !0 ? A.push(" ", h, '=""') : p !== !1 && A.push(" ", h, '="', $(p), '"');
            break;
          case 5:
            isNaN(p) || A.push(" ", h, '="', $(p), '"');
            break;
          case 6:
            !isNaN(p) && 1 <= p && A.push(" ", h, '="', $(p), '"');
            break;
          default:
            s.sanitizeURL && (p = "" + p), A.push(" ", h, '="', $(p), '"');
        }
      } else if (W(h)) {
        switch (typeof p) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = h.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-")
              return;
        }
        A.push(" ", h, '="', $(p), '"');
      }
    }
  }
  function ce(A, s, h) {
    if (s != null) {
      if (h != null)
        throw Error(g(60));
      if (typeof s != "object" || !("__html" in s))
        throw Error(g(61));
      s = s.__html, s != null && A.push("" + s);
    }
  }
  function Xe(A) {
    var s = "";
    return j.Children.forEach(A, function(h) {
      h != null && (s += h);
    }), s;
  }
  function ve(A, s, h, p) {
    A.push(we(h));
    var z = h = null, E;
    for (E in s)
      if (T.call(s, E)) {
        var U = s[E];
        if (U != null)
          switch (E) {
            case "children":
              h = U;
              break;
            case "dangerouslySetInnerHTML":
              z = U;
              break;
            default:
              pe(A, p, E, U);
          }
      }
    return A.push(">"), ce(A, z, h), typeof h == "string" ? (A.push($(h)), null) : h;
  }
  var je = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ze = /* @__PURE__ */ new Map();
  function we(A) {
    var s = ze.get(A);
    if (s === void 0) {
      if (!je.test(A))
        throw Error(g(65, A));
      s = "<" + A, ze.set(A, s);
    }
    return s;
  }
  function Ke(A, s, h, p, z) {
    switch (s) {
      case "select":
        A.push(we("select"));
        var E = null, U = null;
        for (se in h)
          if (T.call(h, se)) {
            var X = h[se];
            if (X != null)
              switch (se) {
                case "children":
                  E = X;
                  break;
                case "dangerouslySetInnerHTML":
                  U = X;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  pe(A, p, se, X);
              }
          }
        return A.push(">"), ce(A, U, E), E;
      case "option":
        U = z.selectedValue, A.push(we("option"));
        var oe = X = null, de = null, se = null;
        for (E in h)
          if (T.call(h, E)) {
            var Pe = h[E];
            if (Pe != null)
              switch (E) {
                case "children":
                  X = Pe;
                  break;
                case "selected":
                  de = Pe;
                  break;
                case "dangerouslySetInnerHTML":
                  se = Pe;
                  break;
                case "value":
                  oe = Pe;
                default:
                  pe(A, p, E, Pe);
              }
          }
        if (U != null)
          if (h = oe !== null ? "" + oe : Xe(X), k(U)) {
            for (p = 0; p < U.length; p++)
              if ("" + U[p] === h) {
                A.push(' selected=""');
                break;
              }
          } else
            "" + U === h && A.push(' selected=""');
        else
          de && A.push(' selected=""');
        return A.push(">"), ce(A, se, X), X;
      case "textarea":
        A.push(we("textarea")), se = U = E = null;
        for (X in h)
          if (T.call(h, X) && (oe = h[X], oe != null))
            switch (X) {
              case "children":
                se = oe;
                break;
              case "value":
                E = oe;
                break;
              case "defaultValue":
                U = oe;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(g(91));
              default:
                pe(
                  A,
                  p,
                  X,
                  oe
                );
            }
        if (E === null && U !== null && (E = U), A.push(">"), se != null) {
          if (E != null)
            throw Error(g(92));
          if (k(se) && 1 < se.length)
            throw Error(g(93));
          E = "" + se;
        }
        return typeof E == "string" && E[0] === `
` && A.push(`
`), E !== null && A.push($("" + E)), null;
      case "input":
        A.push(we("input")), oe = se = X = E = null;
        for (U in h)
          if (T.call(h, U) && (de = h[U], de != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(g(399, "input"));
              case "defaultChecked":
                oe = de;
                break;
              case "defaultValue":
                X = de;
                break;
              case "checked":
                se = de;
                break;
              case "value":
                E = de;
                break;
              default:
                pe(A, p, U, de);
            }
        return se !== null ? pe(A, p, "checked", se) : oe !== null && pe(A, p, "checked", oe), E !== null ? pe(A, p, "value", E) : X !== null && pe(A, p, "value", X), A.push("/>"), null;
      case "menuitem":
        A.push(we("menuitem"));
        for (var Ft in h)
          if (T.call(h, Ft) && (E = h[Ft], E != null))
            switch (Ft) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(g(400));
              default:
                pe(A, p, Ft, E);
            }
        return A.push(">"), null;
      case "title":
        A.push(we("title")), E = null;
        for (Pe in h)
          if (T.call(h, Pe) && (U = h[Pe], U != null))
            switch (Pe) {
              case "children":
                E = U;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(g(434));
              default:
                pe(A, p, Pe, U);
            }
        return A.push(">"), E;
      case "listing":
      case "pre":
        A.push(we(s)), U = E = null;
        for (oe in h)
          if (T.call(h, oe) && (X = h[oe], X != null))
            switch (oe) {
              case "children":
                E = X;
                break;
              case "dangerouslySetInnerHTML":
                U = X;
                break;
              default:
                pe(A, p, oe, X);
            }
        if (A.push(">"), U != null) {
          if (E != null)
            throw Error(g(60));
          if (typeof U != "object" || !("__html" in U))
            throw Error(g(61));
          h = U.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? A.push(`
`, h) : A.push("" + h));
        }
        return typeof E == "string" && E[0] === `
` && A.push(`
`), E;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        A.push(we(s));
        for (var zt in h)
          if (T.call(h, zt) && (E = h[zt], E != null))
            switch (zt) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(g(399, s));
              default:
                pe(A, p, zt, E);
            }
        return A.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ve(
          A,
          h,
          s,
          p
        );
      case "html":
        return z.insertionMode === 0 && A.push("<!DOCTYPE html>"), ve(A, h, s, p);
      default:
        if (s.indexOf("-") === -1 && typeof h.is != "string")
          return ve(A, h, s, p);
        A.push(we(s)), U = E = null;
        for (de in h)
          if (T.call(h, de) && (X = h[de], X != null))
            switch (de) {
              case "children":
                E = X;
                break;
              case "dangerouslySetInnerHTML":
                U = X;
                break;
              case "style":
                Ae(A, p, X);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                W(de) && typeof X != "function" && typeof X != "symbol" && A.push(" ", de, '="', $(X), '"');
            }
        return A.push(">"), ce(A, U, E), E;
    }
  }
  function De(A, s, h) {
    if (A.push('<!--$?--><template id="'), h === null)
      throw Error(g(395));
    return A.push(h), A.push('"></template>');
  }
  function Ue(A, s, h, p) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return A.push('<div hidden id="'), A.push(s.segmentPrefix), s = p.toString(16), A.push(s), A.push('">');
      case 2:
        return A.push('<svg aria-hidden="true" style="display:none" id="'), A.push(s.segmentPrefix), s = p.toString(16), A.push(s), A.push('">');
      case 3:
        return A.push('<math aria-hidden="true" style="display:none" id="'), A.push(s.segmentPrefix), s = p.toString(16), A.push(s), A.push('">');
      case 4:
        return A.push('<table hidden id="'), A.push(s.segmentPrefix), s = p.toString(16), A.push(s), A.push('">');
      case 5:
        return A.push('<table hidden><tbody id="'), A.push(s.segmentPrefix), s = p.toString(16), A.push(s), A.push('">');
      case 6:
        return A.push('<table hidden><tr id="'), A.push(s.segmentPrefix), s = p.toString(16), A.push(s), A.push('">');
      case 7:
        return A.push('<table hidden><colgroup id="'), A.push(s.segmentPrefix), s = p.toString(16), A.push(s), A.push('">');
      default:
        throw Error(g(397));
    }
  }
  function _e(A, s) {
    switch (s.insertionMode) {
      case 0:
      case 1:
        return A.push("</div>");
      case 2:
        return A.push("</svg>");
      case 3:
        return A.push("</math>");
      case 4:
        return A.push("</table>");
      case 5:
        return A.push("</tbody></table>");
      case 6:
        return A.push("</tr></table>");
      case 7:
        return A.push("</colgroup></table>");
      default:
        throw Error(g(397));
    }
  }
  var st = /[<\u2028\u2029]/g;
  function jt(A) {
    return JSON.stringify(A).replace(st, function(s) {
      switch (s) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function lt(A, s) {
    return s = s === void 0 ? "" : s, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: s + "P:", segmentPrefix: s + "S:", boundaryPrefix: s + "B:", idPrefix: s, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: A };
  }
  function Lt(A, s, h, p) {
    return h.generateStaticMarkup ? (A.push($(s)), !1) : (s === "" ? A = p : (p && A.push("<!-- -->"), A.push($(s)), A = !0), A);
  }
  var Ye = Object.assign, He = Symbol.for("react.element"), Ct = Symbol.for("react.portal"), wt = Symbol.for("react.fragment"), Ge = Symbol.for("react.strict_mode"), be = Symbol.for("react.profiler"), Qe = Symbol.for("react.provider"), Oe = Symbol.for("react.context"), ke = Symbol.for("react.forward_ref"), pt = Symbol.for("react.suspense"), Ze = Symbol.for("react.suspense_list"), Tt = Symbol.for("react.memo"), ct = Symbol.for("react.lazy"), it = Symbol.for("react.scope"), xt = Symbol.for("react.debug_trace_mode"), Nt = Symbol.for("react.legacy_hidden"), or = Symbol.for("react.default_value"), It = Symbol.iterator;
  function Qt(A) {
    if (A == null)
      return null;
    if (typeof A == "function")
      return A.displayName || A.name || null;
    if (typeof A == "string")
      return A;
    switch (A) {
      case wt:
        return "Fragment";
      case Ct:
        return "Portal";
      case be:
        return "Profiler";
      case Ge:
        return "StrictMode";
      case pt:
        return "Suspense";
      case Ze:
        return "SuspenseList";
    }
    if (typeof A == "object")
      switch (A.$$typeof) {
        case Oe:
          return (A.displayName || "Context") + ".Consumer";
        case Qe:
          return (A._context.displayName || "Context") + ".Provider";
        case ke:
          var s = A.render;
          return A = A.displayName, A || (A = s.displayName || s.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
        case Tt:
          return s = A.displayName || null, s !== null ? s : Qt(A.type) || "Memo";
        case ct:
          s = A._payload, A = A._init;
          try {
            return Qt(A(s));
          } catch {
          }
      }
    return null;
  }
  var Zt = {};
  function Ir(A, s) {
    if (A = A.contextTypes, !A)
      return Zt;
    var h = {}, p;
    for (p in A)
      h[p] = s[p];
    return h;
  }
  var St = null;
  function Dt(A, s) {
    if (A !== s) {
      A.context._currentValue2 = A.parentValue, A = A.parent;
      var h = s.parent;
      if (A === null) {
        if (h !== null)
          throw Error(g(401));
      } else {
        if (h === null)
          throw Error(g(401));
        Dt(A, h);
      }
      s.context._currentValue2 = s.value;
    }
  }
  function $e(A) {
    A.context._currentValue2 = A.parentValue, A = A.parent, A !== null && $e(A);
  }
  function ir(A) {
    var s = A.parent;
    s !== null && ir(s), A.context._currentValue2 = A.value;
  }
  function ar(A, s) {
    if (A.context._currentValue2 = A.parentValue, A = A.parent, A === null)
      throw Error(g(402));
    A.depth === s.depth ? Dt(A, s) : ar(A, s);
  }
  function Yt(A, s) {
    var h = s.parent;
    if (h === null)
      throw Error(g(402));
    A.depth === h.depth ? Dt(A, h) : Yt(A, h), s.context._currentValue2 = s.value;
  }
  function et(A) {
    var s = St;
    s !== A && (s === null ? ir(A) : A === null ? $e(s) : s.depth === A.depth ? Dt(s, A) : s.depth > A.depth ? ar(s, A) : Yt(s, A), St = A);
  }
  var Xt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(A, s) {
    A = A._reactInternals, A.queue !== null && A.queue.push(s);
  }, enqueueReplaceState: function(A, s) {
    A = A._reactInternals, A.replace = !0, A.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function ur(A, s, h, p) {
    var z = A.state !== void 0 ? A.state : null;
    A.updater = Xt, A.props = h, A.state = z;
    var E = { queue: [], replace: !1 };
    A._reactInternals = E;
    var U = s.contextType;
    if (A.context = typeof U == "object" && U !== null ? U._currentValue2 : p, U = s.getDerivedStateFromProps, typeof U == "function" && (U = U(h, z), z = U == null ? z : Ye({}, z, U), A.state = z), typeof s.getDerivedStateFromProps != "function" && typeof A.getSnapshotBeforeUpdate != "function" && (typeof A.UNSAFE_componentWillMount == "function" || typeof A.componentWillMount == "function"))
      if (s = A.state, typeof A.componentWillMount == "function" && A.componentWillMount(), typeof A.UNSAFE_componentWillMount == "function" && A.UNSAFE_componentWillMount(), s !== A.state && Xt.enqueueReplaceState(A, A.state, null), E.queue !== null && 0 < E.queue.length)
        if (s = E.queue, U = E.replace, E.queue = null, E.replace = !1, U && s.length === 1)
          A.state = s[0];
        else {
          for (E = U ? s[0] : A.state, z = !0, U = U ? 1 : 0; U < s.length; U++) {
            var X = s[U];
            X = typeof X == "function" ? X.call(A, E, h, p) : X, X != null && (z ? (z = !1, E = Ye({}, E, X)) : Ye(E, X));
          }
          A.state = E;
        }
      else
        E.queue = null;
  }
  var Jt = { id: 1, overflow: "" };
  function sr(A, s, h) {
    var p = A.id;
    A = A.overflow;
    var z = 32 - Kt(p) - 1;
    p &= ~(1 << z), h += 1;
    var E = 32 - Kt(s) + z;
    if (30 < E) {
      var U = z - z % 5;
      return E = (p & (1 << U) - 1).toString(32), p >>= U, z -= U, { id: 1 << 32 - Kt(s) + z | h << z | p, overflow: E + A };
    }
    return { id: 1 << E | h << z | p, overflow: A };
  }
  var Kt = Math.clz32 ? Math.clz32 : Ht, wr = Math.log, lr = Math.LN2;
  function Ht(A) {
    return A >>>= 0, A === 0 ? 32 : 31 - (wr(A) / lr | 0) | 0;
  }
  function q(A, s) {
    return A === s && (A !== 0 || 1 / A === 1 / s) || A !== A && s !== s;
  }
  var ue = typeof Object.is == "function" ? Object.is : q, ae = null, ge = null, Le = null, ne = null, xe = !1, tt = !1, nt = 0, ft = null, mt = 0;
  function At() {
    if (ae === null)
      throw Error(g(321));
    return ae;
  }
  function Re() {
    if (0 < mt)
      throw Error(g(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Pr() {
    return ne === null ? Le === null ? (xe = !1, Le = ne = Re()) : (xe = !0, ne = Le) : ne.next === null ? (xe = !1, ne = ne.next = Re()) : (xe = !0, ne = ne.next), ne;
  }
  function Br() {
    ge = ae = null, tt = !1, Le = null, mt = 0, ne = ft = null;
  }
  function Ur(A, s) {
    return typeof s == "function" ? s(A) : s;
  }
  function dt(A, s, h) {
    if (ae = At(), ne = Pr(), xe) {
      var p = ne.queue;
      if (s = p.dispatch, ft !== null && (h = ft.get(p), h !== void 0)) {
        ft.delete(p), p = ne.memoizedState;
        do
          p = A(p, h.action), h = h.next;
        while (h !== null);
        return ne.memoizedState = p, [p, s];
      }
      return [ne.memoizedState, s];
    }
    return A = A === Ur ? typeof s == "function" ? s() : s : h !== void 0 ? h(s) : s, ne.memoizedState = A, A = ne.queue = { last: null, dispatch: null }, A = A.dispatch = sn.bind(null, ae, A), [ne.memoizedState, A];
  }
  function Rr(A, s) {
    if (ae = At(), ne = Pr(), s = s === void 0 ? null : s, ne !== null) {
      var h = ne.memoizedState;
      if (h !== null && s !== null) {
        var p = h[1];
        e:
          if (p === null)
            p = !1;
          else {
            for (var z = 0; z < p.length && z < s.length; z++)
              if (!ue(s[z], p[z])) {
                p = !1;
                break e;
              }
            p = !0;
          }
        if (p)
          return h[0];
      }
    }
    return A = A(), ne.memoizedState = [A, s], A;
  }
  function sn(A, s, h) {
    if (25 <= mt)
      throw Error(g(301));
    if (A === ae)
      if (tt = !0, A = { action: h, next: null }, ft === null && (ft = /* @__PURE__ */ new Map()), h = ft.get(s), h === void 0)
        ft.set(s, A);
      else {
        for (s = h; s.next !== null; )
          s = s.next;
        s.next = A;
      }
  }
  function ln() {
    throw Error(g(394));
  }
  function I() {
  }
  var Z = { readContext: function(A) {
    return A._currentValue2;
  }, useContext: function(A) {
    return At(), A._currentValue2;
  }, useMemo: Rr, useReducer: dt, useRef: function(A) {
    ae = At(), ne = Pr();
    var s = ne.memoizedState;
    return s === null ? (A = { current: A }, ne.memoizedState = A) : s;
  }, useState: function(A) {
    return dt(Ur, A);
  }, useInsertionEffect: I, useLayoutEffect: function() {
  }, useCallback: function(A, s) {
    return Rr(function() {
      return A;
    }, s);
  }, useImperativeHandle: I, useEffect: I, useDebugValue: I, useDeferredValue: function(A) {
    return At(), A;
  }, useTransition: function() {
    return At(), [
      !1,
      ln
    ];
  }, useId: function() {
    var A = ge.treeContext, s = A.overflow;
    A = A.id, A = (A & ~(1 << 32 - Kt(A) - 1)).toString(32) + s;
    var h = K;
    if (h === null)
      throw Error(g(404));
    return s = nt++, A = ":" + h.idPrefix + "R" + A, 0 < s && (A += "H" + s.toString(32)), A + ":";
  }, useMutableSource: function(A, s) {
    return At(), s(A._source);
  }, useSyncExternalStore: function(A, s, h) {
    if (h === void 0)
      throw Error(g(407));
    return h();
  } }, K = null, fe = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Se(A) {
    return console.error(A), null;
  }
  function Ce() {
  }
  function Ee(A, s, h, p, z, E, U, X, oe) {
    var de = [], se = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: p === void 0 ? 12800 : p, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: se, pingedTasks: de, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: z === void 0 ? Se : z, onAllReady: E === void 0 ? Ce : E, onShellReady: U === void 0 ? Ce : U, onShellError: X === void 0 ? Ce : X, onFatalError: oe === void 0 ? Ce : oe }, h = Mt(s, 0, null, h, !1, !1), h.parentFlushed = !0, A = Ie(s, A, null, h, se, Zt, null, Jt), de.push(A), s;
  }
  function Ie(A, s, h, p, z, E, U, X) {
    A.allPendingTasks++, h === null ? A.pendingRootTasks++ : h.pendingTasks++;
    var oe = { node: s, ping: function() {
      var de = A.pingedTasks;
      de.push(oe), de.length === 1 && Bt(A);
    }, blockedBoundary: h, blockedSegment: p, abortSet: z, legacyContext: E, context: U, treeContext: X };
    return z.add(oe), oe;
  }
  function Mt(A, s, h, p, z, E) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: p, boundary: h, lastPushedText: z, textEmbedded: E };
  }
  function Fe(A, s) {
    if (A = A.onError(s), A != null && typeof A != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof A + '" instead');
    return A;
  }
  function We(A, s) {
    var h = A.onShellError;
    h(s), h = A.onFatalError, h(s), A.destination !== null ? (A.status = 2, A.destination.destroy(s)) : (A.status = 1, A.fatalError = s);
  }
  function at(A, s, h, p, z) {
    for (ae = {}, ge = s, nt = 0, A = h(p, z); tt; )
      tt = !1, nt = 0, mt += 1, ne = null, A = h(p, z);
    return Br(), A;
  }
  function Pt(A, s, h, p) {
    var z = h.render(), E = p.childContextTypes;
    if (E != null) {
      var U = s.legacyContext;
      if (typeof h.getChildContext != "function")
        p = U;
      else {
        h = h.getChildContext();
        for (var X in h)
          if (!(X in E))
            throw Error(g(108, Qt(p) || "Unknown", X));
        p = Ye({}, U, h);
      }
      s.legacyContext = p, ht(A, s, z), s.legacyContext = U;
    } else
      ht(A, s, z);
  }
  function cr(A, s) {
    if (A && A.defaultProps) {
      s = Ye({}, s), A = A.defaultProps;
      for (var h in A)
        s[h] === void 0 && (s[h] = A[h]);
      return s;
    }
    return s;
  }
  function gt(A, s, h, p, z) {
    if (typeof h == "function")
      if (h.prototype && h.prototype.isReactComponent) {
        z = Ir(h, s.legacyContext);
        var E = h.contextType;
        E = new h(p, typeof E == "object" && E !== null ? E._currentValue2 : z), ur(E, h, p, z), Pt(A, s, E, h);
      } else {
        E = Ir(h, s.legacyContext), z = at(A, s, h, p, E);
        var U = nt !== 0;
        if (typeof z == "object" && z !== null && typeof z.render == "function" && z.$$typeof === void 0)
          ur(z, h, p, E), Pt(A, s, z, h);
        else if (U) {
          p = s.treeContext, s.treeContext = sr(p, 1, 0);
          try {
            ht(A, s, z);
          } finally {
            s.treeContext = p;
          }
        } else
          ht(A, s, z);
      }
    else if (typeof h == "string") {
      switch (z = s.blockedSegment, E = Ke(z.chunks, h, p, A.responseState, z.formatContext), z.lastPushedText = !1, U = z.formatContext, z.formatContext = le(U, h, p), qt(A, s, E), z.formatContext = U, h) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          z.chunks.push("</", h, ">");
      }
      z.lastPushedText = !1;
    } else {
      switch (h) {
        case Nt:
        case xt:
        case Ge:
        case be:
        case wt:
          ht(A, s, p.children);
          return;
        case Ze:
          ht(A, s, p.children);
          return;
        case it:
          throw Error(g(343));
        case pt:
          e: {
            h = s.blockedBoundary, z = s.blockedSegment, E = p.fallback, p = p.children, U = /* @__PURE__ */ new Set();
            var X = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: U, errorDigest: null }, oe = Mt(A, z.chunks.length, X, z.formatContext, !1, !1);
            z.children.push(oe), z.lastPushedText = !1;
            var de = Mt(A, 0, null, z.formatContext, !1, !1);
            de.parentFlushed = !0, s.blockedBoundary = X, s.blockedSegment = de;
            try {
              if (qt(
                A,
                s,
                p
              ), A.responseState.generateStaticMarkup || de.lastPushedText && de.textEmbedded && de.chunks.push("<!-- -->"), de.status = 1, dr(X, de), X.pendingTasks === 0)
                break e;
            } catch (se) {
              de.status = 4, X.forceClientRender = !0, X.errorDigest = Fe(A, se);
            } finally {
              s.blockedBoundary = h, s.blockedSegment = z;
            }
            s = Ie(A, E, h, oe, U, s.legacyContext, s.context, s.treeContext), A.pingedTasks.push(s);
          }
          return;
      }
      if (typeof h == "object" && h !== null)
        switch (h.$$typeof) {
          case ke:
            if (p = at(A, s, h.render, p, z), nt !== 0) {
              h = s.treeContext, s.treeContext = sr(h, 1, 0);
              try {
                ht(A, s, p);
              } finally {
                s.treeContext = h;
              }
            } else
              ht(A, s, p);
            return;
          case Tt:
            h = h.type, p = cr(h, p), gt(A, s, h, p, z);
            return;
          case Qe:
            if (z = p.children, h = h._context, p = p.value, E = h._currentValue2, h._currentValue2 = p, U = St, St = p = { parent: U, depth: U === null ? 0 : U.depth + 1, context: h, parentValue: E, value: p }, s.context = p, ht(A, s, z), A = St, A === null)
              throw Error(g(403));
            p = A.parentValue, A.context._currentValue2 = p === or ? A.context._defaultValue : p, A = St = A.parent, s.context = A;
            return;
          case Oe:
            p = p.children, p = p(h._currentValue2), ht(A, s, p);
            return;
          case ct:
            z = h._init, h = z(h._payload), p = cr(h, p), gt(
              A,
              s,
              h,
              p,
              void 0
            );
            return;
        }
      throw Error(g(130, h == null ? h : typeof h, ""));
    }
  }
  function ht(A, s, h) {
    if (s.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case He:
          gt(A, s, h.type, h.props, h.ref);
          return;
        case Ct:
          throw Error(g(257));
        case ct:
          var p = h._init;
          h = p(h._payload), ht(A, s, h);
          return;
      }
      if (k(h)) {
        fr(A, s, h);
        return;
      }
      if (h === null || typeof h != "object" ? p = null : (p = It && h[It] || h["@@iterator"], p = typeof p == "function" ? p : null), p && (p = p.call(h))) {
        if (h = p.next(), !h.done) {
          var z = [];
          do
            z.push(h.value), h = p.next();
          while (!h.done);
          fr(A, s, z);
        }
        return;
      }
      throw A = Object.prototype.toString.call(h), Error(g(31, A === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : A));
    }
    typeof h == "string" ? (p = s.blockedSegment, p.lastPushedText = Lt(s.blockedSegment.chunks, h, A.responseState, p.lastPushedText)) : typeof h == "number" && (p = s.blockedSegment, p.lastPushedText = Lt(s.blockedSegment.chunks, "" + h, A.responseState, p.lastPushedText));
  }
  function fr(A, s, h) {
    for (var p = h.length, z = 0; z < p; z++) {
      var E = s.treeContext;
      s.treeContext = sr(E, p, z);
      try {
        qt(A, s, h[z]);
      } finally {
        s.treeContext = E;
      }
    }
  }
  function qt(A, s, h) {
    var p = s.blockedSegment.formatContext, z = s.legacyContext, E = s.context;
    try {
      return ht(A, s, h);
    } catch (oe) {
      if (Br(), typeof oe == "object" && oe !== null && typeof oe.then == "function") {
        h = oe;
        var U = s.blockedSegment, X = Mt(A, U.chunks.length, null, U.formatContext, U.lastPushedText, !0);
        U.children.push(X), U.lastPushedText = !1, A = Ie(A, s.node, s.blockedBoundary, X, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, h.then(A, A), s.blockedSegment.formatContext = p, s.legacyContext = z, s.context = E, et(E);
      } else
        throw s.blockedSegment.formatContext = p, s.legacyContext = z, s.context = E, et(E), oe;
    }
  }
  function Et(A) {
    var s = A.blockedBoundary;
    A = A.blockedSegment, A.status = 3, Mr(this, s, A);
  }
  function Kr(A, s, h) {
    var p = A.blockedBoundary;
    A.blockedSegment.status = 3, p === null ? (s.allPendingTasks--, s.status !== 2 && (s.status = 2, s.destination !== null && s.destination.push(null))) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, A = h === void 0 ? Error(g(432)) : h, p.errorDigest = s.onError(A), p.parentFlushed && s.clientRenderedBoundaries.push(p)), p.fallbackAbortableTasks.forEach(function(z) {
      return Kr(z, s, h);
    }), p.fallbackAbortableTasks.clear(), s.allPendingTasks--, s.allPendingTasks === 0 && (p = s.onAllReady, p()));
  }
  function dr(A, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var h = s.children[0];
      h.id = s.id, h.parentFlushed = !0, h.status === 1 && dr(A, h);
    } else
      A.completedSegments.push(s);
  }
  function Mr(A, s, h) {
    if (s === null) {
      if (h.parentFlushed) {
        if (A.completedRootSegment !== null)
          throw Error(g(389));
        A.completedRootSegment = h;
      }
      A.pendingRootTasks--, A.pendingRootTasks === 0 && (A.onShellError = Ce, s = A.onShellReady, s());
    } else
      s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && dr(s, h), s.parentFlushed && A.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(Et, A), s.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (dr(s, h), s.completedSegments.length === 1 && s.parentFlushed && A.partialBoundaries.push(s)));
    A.allPendingTasks--, A.allPendingTasks === 0 && (A = A.onAllReady, A());
  }
  function Bt(A) {
    if (A.status !== 2) {
      var s = St, h = fe.current;
      fe.current = Z;
      var p = K;
      K = A.responseState;
      try {
        var z = A.pingedTasks, E;
        for (E = 0; E < z.length; E++) {
          var U = z[E], X = A, oe = U.blockedSegment;
          if (oe.status === 0) {
            et(U.context);
            try {
              ht(X, U, U.node), X.responseState.generateStaticMarkup || oe.lastPushedText && oe.textEmbedded && oe.chunks.push("<!-- -->"), U.abortSet.delete(U), oe.status = 1, Mr(X, U.blockedBoundary, oe);
            } catch (bt) {
              if (Br(), typeof bt == "object" && bt !== null && typeof bt.then == "function") {
                var de = U.ping;
                bt.then(de, de);
              } else {
                U.abortSet.delete(U), oe.status = 4;
                var se = U.blockedBoundary, Pe = bt, Ft = Fe(X, Pe);
                if (se === null ? We(X, Pe) : (se.pendingTasks--, se.forceClientRender || (se.forceClientRender = !0, se.errorDigest = Ft, se.parentFlushed && X.clientRenderedBoundaries.push(se))), X.allPendingTasks--, X.allPendingTasks === 0) {
                  var zt = X.onAllReady;
                  zt();
                }
              }
            } finally {
            }
          }
        }
        z.splice(0, E), A.destination !== null && Sr(A, A.destination);
      } catch (bt) {
        Fe(A, bt), We(A, bt);
      } finally {
        K = p, fe.current = h, h === Z && et(s);
      }
    }
  }
  function Dr(A, s, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var p = h.id = A.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, A = A.responseState, s.push('<template id="'), s.push(A.placeholderPrefix), A = p.toString(16), s.push(A), s.push('"></template>');
      case 1:
        h.status = 2;
        var z = !0;
        p = h.chunks;
        var E = 0;
        h = h.children;
        for (var U = 0; U < h.length; U++) {
          for (z = h[U]; E < z.index; E++)
            s.push(p[E]);
          z = Tr(A, s, z);
        }
        for (; E < p.length - 1; E++)
          s.push(p[E]);
        return E < p.length && (z = s.push(p[E])), z;
      default:
        throw Error(g(390));
    }
  }
  function Tr(A, s, h) {
    var p = h.boundary;
    if (p === null)
      return Dr(A, s, h);
    if (p.parentFlushed = !0, p.forceClientRender)
      return A.responseState.generateStaticMarkup || (p = p.errorDigest, s.push("<!--$!-->"), s.push("<template"), p && (s.push(' data-dgst="'), p = $(p), s.push(p), s.push('"')), s.push("></template>")), Dr(A, s, h), A = A.responseState.generateStaticMarkup ? !0 : s.push("<!--/$-->"), A;
    if (0 < p.pendingTasks) {
      p.rootSegmentID = A.nextSegmentId++, 0 < p.completedSegments.length && A.partialBoundaries.push(p);
      var z = A.responseState, E = z.nextSuspenseID++;
      return z = z.boundaryPrefix + E.toString(16), p = p.id = z, De(s, A.responseState, p), Dr(A, s, h), s.push("<!--/$-->");
    }
    if (p.byteSize > A.progressiveChunkSize)
      return p.rootSegmentID = A.nextSegmentId++, A.completedBoundaries.push(p), De(s, A.responseState, p.id), Dr(A, s, h), s.push("<!--/$-->");
    if (A.responseState.generateStaticMarkup || s.push("<!--$-->"), h = p.completedSegments, h.length !== 1)
      throw Error(g(391));
    return Tr(A, s, h[0]), A = A.responseState.generateStaticMarkup ? !0 : s.push("<!--/$-->"), A;
  }
  function cn(A, s, h) {
    return Ue(s, A.responseState, h.formatContext, h.id), Tr(A, s, h), _e(s, h.formatContext);
  }
  function fn(A, s, h) {
    for (var p = h.completedSegments, z = 0; z < p.length; z++)
      qr(A, s, h, p[z]);
    if (p.length = 0, A = A.responseState, p = h.id, h = h.rootSegmentID, s.push(A.startInlineScript), A.sentCompleteBoundaryFunction ? s.push('$RC("') : (A.sentCompleteBoundaryFunction = !0, s.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), p === null)
      throw Error(g(395));
    return h = h.toString(16), s.push(p), s.push('","'), s.push(A.segmentPrefix), s.push(h), s.push('")<\/script>');
  }
  function qr(A, s, h, p) {
    if (p.status === 2)
      return !0;
    var z = p.id;
    if (z === -1) {
      if ((p.id = h.rootSegmentID) === -1)
        throw Error(g(392));
      return cn(A, s, p);
    }
    return cn(A, s, p), A = A.responseState, s.push(A.startInlineScript), A.sentCompleteSegmentFunction ? s.push('$RS("') : (A.sentCompleteSegmentFunction = !0, s.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), s.push(A.segmentPrefix), z = z.toString(16), s.push(z), s.push('","'), s.push(A.placeholderPrefix), s.push(z), s.push('")<\/script>');
  }
  function Sr(A, s) {
    try {
      var h = A.completedRootSegment;
      if (h !== null && A.pendingRootTasks === 0) {
        Tr(A, s, h), A.completedRootSegment = null;
        var p = A.responseState.bootstrapChunks;
        for (h = 0; h < p.length - 1; h++)
          s.push(p[h]);
        h < p.length && s.push(p[h]);
      }
      var z = A.clientRenderedBoundaries, E;
      for (E = 0; E < z.length; E++) {
        var U = z[E];
        p = s;
        var X = A.responseState, oe = U.id, de = U.errorDigest, se = U.errorMessage, Pe = U.errorComponentStack;
        if (p.push(X.startInlineScript), X.sentClientRenderFunction ? p.push('$RX("') : (X.sentClientRenderFunction = !0, p.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), oe === null)
          throw Error(g(395));
        if (p.push(oe), p.push('"'), de || se || Pe) {
          p.push(",");
          var Ft = jt(de || "");
          p.push(Ft);
        }
        if (se || Pe) {
          p.push(",");
          var zt = jt(se || "");
          p.push(zt);
        }
        if (Pe) {
          p.push(",");
          var bt = jt(Pe);
          p.push(bt);
        }
        if (!p.push(")<\/script>")) {
          A.destination = null, E++, z.splice(0, E);
          return;
        }
      }
      z.splice(0, E);
      var Lr = A.completedBoundaries;
      for (E = 0; E < Lr.length; E++)
        if (!fn(A, s, Lr[E])) {
          A.destination = null, E++, Lr.splice(0, E);
          return;
        }
      Lr.splice(0, E);
      var _t = A.partialBoundaries;
      for (E = 0; E < _t.length; E++) {
        var en = _t[E];
        e: {
          z = A, U = s;
          var mr = en.completedSegments;
          for (X = 0; X < mr.length; X++)
            if (!qr(z, U, en, mr[X])) {
              X++, mr.splice(0, X);
              var Yr = !1;
              break e;
            }
          mr.splice(0, X), Yr = !0;
        }
        if (!Yr) {
          A.destination = null, E++, _t.splice(0, E);
          return;
        }
      }
      _t.splice(0, E);
      var Nr = A.completedBoundaries;
      for (E = 0; E < Nr.length; E++)
        if (!fn(A, s, Nr[E])) {
          A.destination = null, E++, Nr.splice(0, E);
          return;
        }
      Nr.splice(0, E);
    } finally {
      A.allPendingTasks === 0 && A.pingedTasks.length === 0 && A.clientRenderedBoundaries.length === 0 && A.completedBoundaries.length === 0 && s.push(null);
    }
  }
  function dn(A, s) {
    try {
      var h = A.abortableTasks;
      h.forEach(function(p) {
        return Kr(p, A, s);
      }), h.clear(), A.destination !== null && Sr(A, A.destination);
    } catch (p) {
      Fe(A, p), We(A, p);
    }
  }
  function _r() {
  }
  function $r(A, s, h, p) {
    var z = !1, E = null, U = "", X = { push: function(de) {
      return de !== null && (U += de), !0;
    }, destroy: function(de) {
      z = !0, E = de;
    } }, oe = !1;
    if (A = Ee(A, lt(h, s ? s.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, _r, void 0, function() {
      oe = !0;
    }, void 0, void 0), Bt(A), dn(A, p), A.status === 1)
      A.status = 2, X.destroy(A.fatalError);
    else if (A.status !== 2 && A.destination === null) {
      A.destination = X;
      try {
        Sr(A, X);
      } catch (de) {
        Fe(A, de), We(A, de);
      }
    }
    if (z)
      throw E;
    if (!oe)
      throw Error(g(426));
    return U;
  }
  return CA.renderToNodeStream = function() {
    throw Error(g(207));
  }, CA.renderToStaticMarkup = function(A, s) {
    return $r(A, s, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, CA.renderToStaticNodeStream = function() {
    throw Error(g(208));
  }, CA.renderToString = function(A, s) {
    return $r(A, s, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, CA.version = "18.2.0", CA;
}
var Da = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ku;
function Cs() {
  if (ku)
    return Da;
  ku = 1;
  var j = zo;
  function g(o) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, M = 1; M < arguments.length; M++)
      l += "&args[]=" + encodeURIComponent(arguments[M]);
    return "Minified React error #" + o + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var T = null, C = 0;
  function c(o, l) {
    if (l.length !== 0)
      if (512 < l.length)
        0 < C && (o.enqueue(new Uint8Array(T.buffer, 0, C)), T = new Uint8Array(512), C = 0), o.enqueue(l);
      else {
        var M = T.length - C;
        M < l.length && (M === 0 ? o.enqueue(T) : (T.set(l.subarray(0, M), C), o.enqueue(T), l = l.subarray(M)), T = new Uint8Array(512), C = 0), T.set(l, C), C += l.length;
      }
  }
  function P(o, l) {
    return c(o, l), !0;
  }
  function W(o) {
    T && 0 < C && (o.enqueue(new Uint8Array(T.buffer, 0, C)), T = null, C = 0);
  }
  var H = new TextEncoder();
  function N(o) {
    return H.encode(o);
  }
  function m(o) {
    return H.encode(o);
  }
  function R(o, l) {
    typeof o.error == "function" ? o.error(l) : o.close();
  }
  var B = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, he = {}, $ = {};
  function te(o) {
    return B.call($, o) ? !0 : B.call(he, o) ? !1 : _.test(o) ? $[o] = !0 : (he[o] = !0, !1);
  }
  function V(o, l, M, v, b, x, F) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = v, this.attributeNamespace = b, this.mustUseProperty = M, this.propertyName = o, this.type = l, this.sanitizeURL = x, this.removeEmptyString = F;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    k[o] = new V(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var l = o[0];
    k[l] = new V(l, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    k[o] = new V(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    k[o] = new V(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    k[o] = new V(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    k[o] = new V(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    k[o] = new V(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    k[o] = new V(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    k[o] = new V(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var ee = /[\-:]([a-z])/g;
  function le(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var l = o.replace(
      ee,
      le
    );
    k[l] = new V(l, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var l = o.replace(ee, le);
    k[l] = new V(l, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var l = o.replace(ee, le);
    k[l] = new V(l, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    k[o] = new V(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new V("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    k[o] = new V(o, 1, !1, o.toLowerCase(), null, !0, !0);
  });
  var ye = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ae = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ye).forEach(function(o) {
    Ae.forEach(function(l) {
      l = l + o.charAt(0).toUpperCase() + o.substring(1), ye[l] = ye[o];
    });
  });
  var pe = /["'&<>]/;
  function ce(o) {
    if (typeof o == "boolean" || typeof o == "number")
      return "" + o;
    o = "" + o;
    var l = pe.exec(o);
    if (l) {
      var M = "", v, b = 0;
      for (v = l.index; v < o.length; v++) {
        switch (o.charCodeAt(v)) {
          case 34:
            l = "&quot;";
            break;
          case 38:
            l = "&amp;";
            break;
          case 39:
            l = "&#x27;";
            break;
          case 60:
            l = "&lt;";
            break;
          case 62:
            l = "&gt;";
            break;
          default:
            continue;
        }
        b !== v && (M += o.substring(b, v)), b = v + 1, M += l;
      }
      o = b !== v ? M + o.substring(b, v) : M;
    }
    return o;
  }
  var Xe = /([A-Z])/g, ve = /^ms-/, je = Array.isArray, ze = m("<script>"), we = m("<\/script>"), Ke = m('<script src="'), De = m('<script type="module" src="'), Ue = m('" async=""><\/script>'), _e = /(<\/|<)(s)(cript)/gi;
  function st(o, l, M, v) {
    return "" + l + (M === "s" ? "\\u0073" : "\\u0053") + v;
  }
  function jt(o, l, M, v, b) {
    o = o === void 0 ? "" : o, l = l === void 0 ? ze : m('<script nonce="' + ce(l) + '">');
    var x = [];
    if (M !== void 0 && x.push(l, N(("" + M).replace(_e, st)), we), v !== void 0)
      for (M = 0; M < v.length; M++)
        x.push(Ke, N(ce(v[M])), Ue);
    if (b !== void 0)
      for (v = 0; v < b.length; v++)
        x.push(De, N(ce(b[v])), Ue);
    return { bootstrapChunks: x, startInlineScript: l, placeholderPrefix: m(o + "P:"), segmentPrefix: m(o + "S:"), boundaryPrefix: o + "B:", idPrefix: o, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function lt(o, l) {
    return { insertionMode: o, selectedValue: l };
  }
  function Lt(o) {
    return lt(o === "http://www.w3.org/2000/svg" ? 2 : o === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Ye(o, l, M) {
    switch (l) {
      case "select":
        return lt(1, M.value != null ? M.value : M.defaultValue);
      case "svg":
        return lt(2, null);
      case "math":
        return lt(3, null);
      case "foreignObject":
        return lt(1, null);
      case "table":
        return lt(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return lt(5, null);
      case "colgroup":
        return lt(7, null);
      case "tr":
        return lt(6, null);
    }
    return 4 <= o.insertionMode || o.insertionMode === 0 ? lt(1, null) : o;
  }
  var He = m("<!-- -->");
  function Ct(o, l, M, v) {
    return l === "" ? v : (v && o.push(He), o.push(N(ce(l))), !0);
  }
  var wt = /* @__PURE__ */ new Map(), Ge = m(' style="'), be = m(":"), Qe = m(";");
  function Oe(o, l, M) {
    if (typeof M != "object")
      throw Error(g(62));
    l = !0;
    for (var v in M)
      if (B.call(M, v)) {
        var b = M[v];
        if (b != null && typeof b != "boolean" && b !== "") {
          if (v.indexOf("--") === 0) {
            var x = N(ce(v));
            b = N(ce(("" + b).trim()));
          } else {
            x = v;
            var F = wt.get(x);
            F !== void 0 || (F = m(ce(x.replace(Xe, "-$1").toLowerCase().replace(ve, "-ms-"))), wt.set(x, F)), x = F, b = typeof b == "number" ? b === 0 || B.call(ye, v) ? N("" + b) : N(b + "px") : N(ce(("" + b).trim()));
          }
          l ? (l = !1, o.push(Ge, x, be, b)) : o.push(Qe, x, be, b);
        }
      }
    l || o.push(Ze);
  }
  var ke = m(" "), pt = m('="'), Ze = m('"'), Tt = m('=""');
  function ct(o, l, M, v) {
    switch (M) {
      case "style":
        Oe(o, l, v);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < M.length) || M[0] !== "o" && M[0] !== "O" || M[1] !== "n" && M[1] !== "N") {
      if (l = k.hasOwnProperty(M) ? k[M] : null, l !== null) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!l.acceptsBooleans)
              return;
        }
        switch (M = N(l.attributeName), l.type) {
          case 3:
            v && o.push(ke, M, Tt);
            break;
          case 4:
            v === !0 ? o.push(ke, M, Tt) : v !== !1 && o.push(ke, M, pt, N(ce(v)), Ze);
            break;
          case 5:
            isNaN(v) || o.push(ke, M, pt, N(ce(v)), Ze);
            break;
          case 6:
            !isNaN(v) && 1 <= v && o.push(ke, M, pt, N(ce(v)), Ze);
            break;
          default:
            l.sanitizeURL && (v = "" + v), o.push(ke, M, pt, N(ce(v)), Ze);
        }
      } else if (te(M)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (l = M.toLowerCase().slice(0, 5), l !== "data-" && l !== "aria-")
              return;
        }
        o.push(ke, N(M), pt, N(ce(v)), Ze);
      }
    }
  }
  var it = m(">"), xt = m("/>");
  function Nt(o, l, M) {
    if (l != null) {
      if (M != null)
        throw Error(g(60));
      if (typeof l != "object" || !("__html" in l))
        throw Error(g(61));
      l = l.__html, l != null && o.push(N("" + l));
    }
  }
  function or(o) {
    var l = "";
    return j.Children.forEach(o, function(M) {
      M != null && (l += M);
    }), l;
  }
  var It = m(' selected=""');
  function Qt(o, l, M, v) {
    o.push(Dt(M));
    var b = M = null, x;
    for (x in l)
      if (B.call(l, x)) {
        var F = l[x];
        if (F != null)
          switch (x) {
            case "children":
              M = F;
              break;
            case "dangerouslySetInnerHTML":
              b = F;
              break;
            default:
              ct(o, v, x, F);
          }
      }
    return o.push(it), Nt(o, b, M), typeof M == "string" ? (o.push(N(ce(M))), null) : M;
  }
  var Zt = m(`
`), Ir = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, St = /* @__PURE__ */ new Map();
  function Dt(o) {
    var l = St.get(o);
    if (l === void 0) {
      if (!Ir.test(o))
        throw Error(g(65, o));
      l = m("<" + o), St.set(o, l);
    }
    return l;
  }
  var $e = m("<!DOCTYPE html>");
  function ir(o, l, M, v, b) {
    switch (l) {
      case "select":
        o.push(Dt("select"));
        var x = null, F = null;
        for (Te in M)
          if (B.call(M, Te)) {
            var J = M[Te];
            if (J != null)
              switch (Te) {
                case "children":
                  x = J;
                  break;
                case "dangerouslySetInnerHTML":
                  F = J;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  ct(o, v, Te, J);
              }
          }
        return o.push(it), Nt(o, F, x), x;
      case "option":
        F = b.selectedValue, o.push(Dt("option"));
        var Me = J = null, me = null, Te = null;
        for (x in M)
          if (B.call(M, x)) {
            var rt = M[x];
            if (rt != null)
              switch (x) {
                case "children":
                  J = rt;
                  break;
                case "selected":
                  me = rt;
                  break;
                case "dangerouslySetInnerHTML":
                  Te = rt;
                  break;
                case "value":
                  Me = rt;
                default:
                  ct(o, v, x, rt);
              }
          }
        if (F != null)
          if (M = Me !== null ? "" + Me : or(J), je(F)) {
            for (v = 0; v < F.length; v++)
              if ("" + F[v] === M) {
                o.push(It);
                break;
              }
          } else
            "" + F === M && o.push(It);
        else
          me && o.push(It);
        return o.push(it), Nt(o, Te, J), J;
      case "textarea":
        o.push(Dt("textarea")), Te = F = x = null;
        for (J in M)
          if (B.call(M, J) && (Me = M[J], Me != null))
            switch (J) {
              case "children":
                Te = Me;
                break;
              case "value":
                x = Me;
                break;
              case "defaultValue":
                F = Me;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(g(91));
              default:
                ct(o, v, J, Me);
            }
        if (x === null && F !== null && (x = F), o.push(it), Te != null) {
          if (x != null)
            throw Error(g(92));
          if (je(Te) && 1 < Te.length)
            throw Error(g(93));
          x = "" + Te;
        }
        return typeof x == "string" && x[0] === `
` && o.push(Zt), x !== null && o.push(N(ce("" + x))), null;
      case "input":
        o.push(Dt("input")), Me = Te = J = x = null;
        for (F in M)
          if (B.call(M, F) && (me = M[F], me != null))
            switch (F) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(g(399, "input"));
              case "defaultChecked":
                Me = me;
                break;
              case "defaultValue":
                J = me;
                break;
              case "checked":
                Te = me;
                break;
              case "value":
                x = me;
                break;
              default:
                ct(o, v, F, me);
            }
        return Te !== null ? ct(
          o,
          v,
          "checked",
          Te
        ) : Me !== null && ct(o, v, "checked", Me), x !== null ? ct(o, v, "value", x) : J !== null && ct(o, v, "value", J), o.push(xt), null;
      case "menuitem":
        o.push(Dt("menuitem"));
        for (var Gt in M)
          if (B.call(M, Gt) && (x = M[Gt], x != null))
            switch (Gt) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(g(400));
              default:
                ct(o, v, Gt, x);
            }
        return o.push(it), null;
      case "title":
        o.push(Dt("title")), x = null;
        for (rt in M)
          if (B.call(M, rt) && (F = M[rt], F != null))
            switch (rt) {
              case "children":
                x = F;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(g(434));
              default:
                ct(o, v, rt, F);
            }
        return o.push(it), x;
      case "listing":
      case "pre":
        o.push(Dt(l)), F = x = null;
        for (Me in M)
          if (B.call(M, Me) && (J = M[Me], J != null))
            switch (Me) {
              case "children":
                x = J;
                break;
              case "dangerouslySetInnerHTML":
                F = J;
                break;
              default:
                ct(o, v, Me, J);
            }
        if (o.push(it), F != null) {
          if (x != null)
            throw Error(g(60));
          if (typeof F != "object" || !("__html" in F))
            throw Error(g(61));
          M = F.__html, M != null && (typeof M == "string" && 0 < M.length && M[0] === `
` ? o.push(Zt, N(M)) : o.push(N("" + M)));
        }
        return typeof x == "string" && x[0] === `
` && o.push(Zt), x;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        o.push(Dt(l));
        for (var er in M)
          if (B.call(M, er) && (x = M[er], x != null))
            switch (er) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(g(399, l));
              default:
                ct(o, v, er, x);
            }
        return o.push(xt), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Qt(o, M, l, v);
      case "html":
        return b.insertionMode === 0 && o.push($e), Qt(o, M, l, v);
      default:
        if (l.indexOf("-") === -1 && typeof M.is != "string")
          return Qt(o, M, l, v);
        o.push(Dt(l)), F = x = null;
        for (me in M)
          if (B.call(M, me) && (J = M[me], J != null))
            switch (me) {
              case "children":
                x = J;
                break;
              case "dangerouslySetInnerHTML":
                F = J;
                break;
              case "style":
                Oe(o, v, J);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                te(me) && typeof J != "function" && typeof J != "symbol" && o.push(ke, N(me), pt, N(ce(J)), Ze);
            }
        return o.push(it), Nt(o, F, x), x;
    }
  }
  var ar = m("</"), Yt = m(">"), et = m('<template id="'), Xt = m('"></template>'), ur = m("<!--$-->"), Jt = m('<!--$?--><template id="'), sr = m('"></template>'), Kt = m("<!--$!-->"), wr = m("<!--/$-->"), lr = m("<template"), Ht = m('"'), q = m(' data-dgst="');
  m(' data-msg="'), m(' data-stck="');
  var ue = m("></template>");
  function ae(o, l, M) {
    if (c(o, Jt), M === null)
      throw Error(g(395));
    return c(o, M), P(o, sr);
  }
  var ge = m('<div hidden id="'), Le = m('">'), ne = m("</div>"), xe = m('<svg aria-hidden="true" style="display:none" id="'), tt = m('">'), nt = m("</svg>"), ft = m('<math aria-hidden="true" style="display:none" id="'), mt = m('">'), At = m("</math>"), Re = m('<table hidden id="'), Pr = m('">'), Br = m("</table>"), Ur = m('<table hidden><tbody id="'), dt = m('">'), Rr = m("</tbody></table>"), sn = m('<table hidden><tr id="'), ln = m('">'), I = m("</tr></table>"), Z = m('<table hidden><colgroup id="'), K = m('">'), fe = m("</colgroup></table>");
  function Se(o, l, M, v) {
    switch (M.insertionMode) {
      case 0:
      case 1:
        return c(o, ge), c(o, l.segmentPrefix), c(o, N(v.toString(16))), P(o, Le);
      case 2:
        return c(o, xe), c(o, l.segmentPrefix), c(o, N(v.toString(16))), P(o, tt);
      case 3:
        return c(o, ft), c(o, l.segmentPrefix), c(o, N(v.toString(16))), P(o, mt);
      case 4:
        return c(o, Re), c(o, l.segmentPrefix), c(o, N(v.toString(16))), P(o, Pr);
      case 5:
        return c(o, Ur), c(o, l.segmentPrefix), c(o, N(v.toString(16))), P(o, dt);
      case 6:
        return c(o, sn), c(o, l.segmentPrefix), c(o, N(v.toString(16))), P(o, ln);
      case 7:
        return c(
          o,
          Z
        ), c(o, l.segmentPrefix), c(o, N(v.toString(16))), P(o, K);
      default:
        throw Error(g(397));
    }
  }
  function Ce(o, l) {
    switch (l.insertionMode) {
      case 0:
      case 1:
        return P(o, ne);
      case 2:
        return P(o, nt);
      case 3:
        return P(o, At);
      case 4:
        return P(o, Br);
      case 5:
        return P(o, Rr);
      case 6:
        return P(o, I);
      case 7:
        return P(o, fe);
      default:
        throw Error(g(397));
    }
  }
  var Ee = m('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Ie = m('$RS("'), Mt = m('","'), Fe = m('")<\/script>'), We = m('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), at = m('$RC("'), Pt = m('","'), cr = m('")<\/script>'), gt = m('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), ht = m('$RX("'), fr = m('"'), qt = m(")<\/script>"), Et = m(","), Kr = /[<\u2028\u2029]/g;
  function dr(o) {
    return JSON.stringify(o).replace(Kr, function(l) {
      switch (l) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var Mr = Object.assign, Bt = Symbol.for("react.element"), Dr = Symbol.for("react.portal"), Tr = Symbol.for("react.fragment"), cn = Symbol.for("react.strict_mode"), fn = Symbol.for("react.profiler"), qr = Symbol.for("react.provider"), Sr = Symbol.for("react.context"), dn = Symbol.for("react.forward_ref"), _r = Symbol.for("react.suspense"), $r = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), s = Symbol.for("react.lazy"), h = Symbol.for("react.scope"), p = Symbol.for("react.debug_trace_mode"), z = Symbol.for("react.legacy_hidden"), E = Symbol.for("react.default_value"), U = Symbol.iterator;
  function X(o) {
    if (o == null)
      return null;
    if (typeof o == "function")
      return o.displayName || o.name || null;
    if (typeof o == "string")
      return o;
    switch (o) {
      case Tr:
        return "Fragment";
      case Dr:
        return "Portal";
      case fn:
        return "Profiler";
      case cn:
        return "StrictMode";
      case _r:
        return "Suspense";
      case $r:
        return "SuspenseList";
    }
    if (typeof o == "object")
      switch (o.$$typeof) {
        case Sr:
          return (o.displayName || "Context") + ".Consumer";
        case qr:
          return (o._context.displayName || "Context") + ".Provider";
        case dn:
          var l = o.render;
          return o = o.displayName, o || (o = l.displayName || l.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
        case A:
          return l = o.displayName || null, l !== null ? l : X(o.type) || "Memo";
        case s:
          l = o._payload, o = o._init;
          try {
            return X(o(l));
          } catch {
          }
      }
    return null;
  }
  var oe = {};
  function de(o, l) {
    if (o = o.contextTypes, !o)
      return oe;
    var M = {}, v;
    for (v in o)
      M[v] = l[v];
    return M;
  }
  var se = null;
  function Pe(o, l) {
    if (o !== l) {
      o.context._currentValue = o.parentValue, o = o.parent;
      var M = l.parent;
      if (o === null) {
        if (M !== null)
          throw Error(g(401));
      } else {
        if (M === null)
          throw Error(g(401));
        Pe(o, M);
      }
      l.context._currentValue = l.value;
    }
  }
  function Ft(o) {
    o.context._currentValue = o.parentValue, o = o.parent, o !== null && Ft(o);
  }
  function zt(o) {
    var l = o.parent;
    l !== null && zt(l), o.context._currentValue = o.value;
  }
  function bt(o, l) {
    if (o.context._currentValue = o.parentValue, o = o.parent, o === null)
      throw Error(g(402));
    o.depth === l.depth ? Pe(o, l) : bt(o, l);
  }
  function Lr(o, l) {
    var M = l.parent;
    if (M === null)
      throw Error(g(402));
    o.depth === M.depth ? Pe(o, M) : Lr(o, M), l.context._currentValue = l.value;
  }
  function _t(o) {
    var l = se;
    l !== o && (l === null ? zt(o) : o === null ? Ft(l) : l.depth === o.depth ? Pe(l, o) : l.depth > o.depth ? bt(l, o) : Lr(l, o), se = o);
  }
  var en = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, l) {
    o = o._reactInternals, o.queue !== null && o.queue.push(l);
  }, enqueueReplaceState: function(o, l) {
    o = o._reactInternals, o.replace = !0, o.queue = [l];
  }, enqueueForceUpdate: function() {
  } };
  function mr(o, l, M, v) {
    var b = o.state !== void 0 ? o.state : null;
    o.updater = en, o.props = M, o.state = b;
    var x = { queue: [], replace: !1 };
    o._reactInternals = x;
    var F = l.contextType;
    if (o.context = typeof F == "object" && F !== null ? F._currentValue : v, F = l.getDerivedStateFromProps, typeof F == "function" && (F = F(M, b), b = F == null ? b : Mr({}, b, F), o.state = b), typeof l.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function"))
      if (l = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), l !== o.state && en.enqueueReplaceState(o, o.state, null), x.queue !== null && 0 < x.queue.length)
        if (l = x.queue, F = x.replace, x.queue = null, x.replace = !1, F && l.length === 1)
          o.state = l[0];
        else {
          for (x = F ? l[0] : o.state, b = !0, F = F ? 1 : 0; F < l.length; F++) {
            var J = l[F];
            J = typeof J == "function" ? J.call(o, x, M, v) : J, J != null && (b ? (b = !1, x = Mr({}, x, J)) : Mr(x, J));
          }
          o.state = x;
        }
      else
        x.queue = null;
  }
  var Yr = { id: 1, overflow: "" };
  function Nr(o, l, M) {
    var v = o.id;
    o = o.overflow;
    var b = 32 - Mn(v) - 1;
    v &= ~(1 << b), M += 1;
    var x = 32 - Mn(l) + b;
    if (30 < x) {
      var F = b - b % 5;
      return x = (v & (1 << F) - 1).toString(32), v >>= F, b -= F, { id: 1 << 32 - Mn(l) + b | M << b | v, overflow: x + o };
    }
    return { id: 1 << x | M << b | v, overflow: o };
  }
  var Mn = Math.clz32 ? Math.clz32 : Kn, bo = Math.log, ko = Math.LN2;
  function Kn(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (bo(o) / ko | 0) | 0;
  }
  function Oo(o, l) {
    return o === l && (o !== 0 || 1 / o === 1 / l) || o !== o && l !== l;
  }
  var qn = typeof Object.is == "function" ? Object.is : Oo, jr = null, gn = null, En = null, qe = null, Er = !1, Wt = !1, Hr = 0, Cr = null, Cn = 0;
  function xr() {
    if (jr === null)
      throw Error(g(321));
    return jr;
  }
  function $t() {
    if (0 < Cn)
      throw Error(g(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function _n() {
    return qe === null ? En === null ? (Er = !1, En = qe = $t()) : (Er = !0, qe = En) : qe.next === null ? (Er = !1, qe = qe.next = $t()) : (Er = !0, qe = qe.next), qe;
  }
  function $n() {
    gn = jr = null, Wt = !1, En = null, Cn = 0, qe = Cr = null;
  }
  function kA(o, l) {
    return typeof l == "function" ? l(o) : l;
  }
  function OA(o, l, M) {
    if (jr = xr(), qe = _n(), Er) {
      var v = qe.queue;
      if (l = v.dispatch, Cr !== null && (M = Cr.get(v), M !== void 0)) {
        Cr.delete(v), v = qe.memoizedState;
        do
          v = o(v, M.action), M = M.next;
        while (M !== null);
        return qe.memoizedState = v, [v, l];
      }
      return [qe.memoizedState, l];
    }
    return o = o === kA ? typeof l == "function" ? l() : l : M !== void 0 ? M(l) : l, qe.memoizedState = o, o = qe.queue = { last: null, dispatch: null }, o = o.dispatch = Qo.bind(null, jr, o), [qe.memoizedState, o];
  }
  function QA(o, l) {
    if (jr = xr(), qe = _n(), l = l === void 0 ? null : l, qe !== null) {
      var M = qe.memoizedState;
      if (M !== null && l !== null) {
        var v = M[1];
        e:
          if (v === null)
            v = !1;
          else {
            for (var b = 0; b < v.length && b < l.length; b++)
              if (!qn(l[b], v[b])) {
                v = !1;
                break e;
              }
            v = !0;
          }
        if (v)
          return M[0];
      }
    }
    return o = o(), qe.memoizedState = [o, l], o;
  }
  function Qo(o, l, M) {
    if (25 <= Cn)
      throw Error(g(301));
    if (o === jr)
      if (Wt = !0, o = { action: M, next: null }, Cr === null && (Cr = /* @__PURE__ */ new Map()), M = Cr.get(l), M === void 0)
        Cr.set(l, o);
      else {
        for (l = M; l.next !== null; )
          l = l.next;
        l.next = o;
      }
  }
  function Po() {
    throw Error(g(394));
  }
  function xn() {
  }
  var zn = { readContext: function(o) {
    return o._currentValue;
  }, useContext: function(o) {
    return xr(), o._currentValue;
  }, useMemo: QA, useReducer: OA, useRef: function(o) {
    jr = xr(), qe = _n();
    var l = qe.memoizedState;
    return l === null ? (o = { current: o }, qe.memoizedState = o) : l;
  }, useState: function(o) {
    return OA(kA, o);
  }, useInsertionEffect: xn, useLayoutEffect: function() {
  }, useCallback: function(o, l) {
    return QA(function() {
      return o;
    }, l);
  }, useImperativeHandle: xn, useEffect: xn, useDebugValue: xn, useDeferredValue: function(o) {
    return xr(), o;
  }, useTransition: function() {
    return xr(), [!1, Po];
  }, useId: function() {
    var o = gn.treeContext, l = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Mn(o) - 1)).toString(32) + l;
    var M = bn;
    if (M === null)
      throw Error(g(404));
    return l = Hr++, o = ":" + M.idPrefix + "R" + o, 0 < l && (o += "H" + l.toString(32)), o + ":";
  }, useMutableSource: function(o, l) {
    return xr(), l(o._source);
  }, useSyncExternalStore: function(o, l, M) {
    if (M === void 0)
      throw Error(g(407));
    return M();
  } }, bn = null, hn = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Bo(o) {
    return console.error(o), null;
  }
  function yn() {
  }
  function eA(o, l, M, v, b, x, F, J, Me) {
    var me = [], Te = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: v === void 0 ? 12800 : v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Te, pingedTasks: me, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: b === void 0 ? Bo : b, onAllReady: x === void 0 ? yn : x, onShellReady: F === void 0 ? yn : F, onShellError: J === void 0 ? yn : J, onFatalError: Me === void 0 ? yn : Me }, M = tn(l, 0, null, M, !1, !1), M.parentFlushed = !0, o = tA(l, o, null, M, Te, oe, null, Yr), me.push(o), l;
  }
  function tA(o, l, M, v, b, x, F, J) {
    o.allPendingTasks++, M === null ? o.pendingRootTasks++ : M.pendingTasks++;
    var Me = { node: l, ping: function() {
      var me = o.pingedTasks;
      me.push(Me), me.length === 1 && HA(o);
    }, blockedBoundary: M, blockedSegment: v, abortSet: b, legacyContext: x, context: F, treeContext: J };
    return b.add(Me), Me;
  }
  function tn(o, l, M, v, b, x) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: M, lastPushedText: b, textEmbedded: x };
  }
  function rn(o, l) {
    if (o = o.onError(l), o != null && typeof o != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function kn(o, l) {
    var M = o.onShellError;
    M(l), M = o.onFatalError, M(l), o.destination !== null ? (o.status = 2, R(o.destination, l)) : (o.status = 1, o.fatalError = l);
  }
  function PA(o, l, M, v, b) {
    for (jr = {}, gn = l, Hr = 0, o = M(v, b); Wt; )
      Wt = !1, Hr = 0, Cn += 1, qe = null, o = M(v, b);
    return $n(), o;
  }
  function rA(o, l, M, v) {
    var b = M.render(), x = v.childContextTypes;
    if (x != null) {
      var F = l.legacyContext;
      if (typeof M.getChildContext != "function")
        v = F;
      else {
        M = M.getChildContext();
        for (var J in M)
          if (!(J in x))
            throw Error(g(108, X(v) || "Unknown", J));
        v = Mr({}, F, M);
      }
      l.legacyContext = v, Vt(o, l, b), l.legacyContext = F;
    } else
      Vt(o, l, b);
  }
  function BA(o, l) {
    if (o && o.defaultProps) {
      l = Mr({}, l), o = o.defaultProps;
      for (var M in o)
        l[M] === void 0 && (l[M] = o[M]);
      return l;
    }
    return l;
  }
  function On(o, l, M, v, b) {
    if (typeof M == "function")
      if (M.prototype && M.prototype.isReactComponent) {
        b = de(M, l.legacyContext);
        var x = M.contextType;
        x = new M(v, typeof x == "object" && x !== null ? x._currentValue : b), mr(x, M, v, b), rA(o, l, x, M);
      } else {
        x = de(M, l.legacyContext), b = PA(o, l, M, v, x);
        var F = Hr !== 0;
        if (typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0)
          mr(b, M, v, x), rA(o, l, b, M);
        else if (F) {
          v = l.treeContext, l.treeContext = Nr(v, 1, 0);
          try {
            Vt(o, l, b);
          } finally {
            l.treeContext = v;
          }
        } else
          Vt(o, l, b);
      }
    else if (typeof M == "string") {
      switch (b = l.blockedSegment, x = ir(b.chunks, M, v, o.responseState, b.formatContext), b.lastPushedText = !1, F = b.formatContext, b.formatContext = Ye(F, M, v), Qn(o, l, x), b.formatContext = F, M) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          b.chunks.push(ar, N(M), Yt);
      }
      b.lastPushedText = !1;
    } else {
      switch (M) {
        case z:
        case p:
        case cn:
        case fn:
        case Tr:
          Vt(o, l, v.children);
          return;
        case $r:
          Vt(o, l, v.children);
          return;
        case h:
          throw Error(g(343));
        case _r:
          e: {
            M = l.blockedBoundary, b = l.blockedSegment, x = v.fallback, v = v.children, F = /* @__PURE__ */ new Set();
            var J = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: F, errorDigest: null }, Me = tn(o, b.chunks.length, J, b.formatContext, !1, !1);
            b.children.push(Me), b.lastPushedText = !1;
            var me = tn(o, 0, null, b.formatContext, !1, !1);
            me.parentFlushed = !0, l.blockedBoundary = J, l.blockedSegment = me;
            try {
              if (Qn(
                o,
                l,
                v
              ), me.lastPushedText && me.textEmbedded && me.chunks.push(He), me.status = 1, Pn(J, me), J.pendingTasks === 0)
                break e;
            } catch (Te) {
              me.status = 4, J.forceClientRender = !0, J.errorDigest = rn(o, Te);
            } finally {
              l.blockedBoundary = M, l.blockedSegment = b;
            }
            l = tA(o, x, M, Me, F, l.legacyContext, l.context, l.treeContext), o.pingedTasks.push(l);
          }
          return;
      }
      if (typeof M == "object" && M !== null)
        switch (M.$$typeof) {
          case dn:
            if (v = PA(o, l, M.render, v, b), Hr !== 0) {
              M = l.treeContext, l.treeContext = Nr(M, 1, 0);
              try {
                Vt(o, l, v);
              } finally {
                l.treeContext = M;
              }
            } else
              Vt(o, l, v);
            return;
          case A:
            M = M.type, v = BA(M, v), On(o, l, M, v, b);
            return;
          case qr:
            if (b = v.children, M = M._context, v = v.value, x = M._currentValue, M._currentValue = v, F = se, se = v = { parent: F, depth: F === null ? 0 : F.depth + 1, context: M, parentValue: x, value: v }, l.context = v, Vt(o, l, b), o = se, o === null)
              throw Error(g(403));
            v = o.parentValue, o.context._currentValue = v === E ? o.context._defaultValue : v, o = se = o.parent, l.context = o;
            return;
          case Sr:
            v = v.children, v = v(M._currentValue), Vt(o, l, v);
            return;
          case s:
            b = M._init, M = b(M._payload), v = BA(M, v), On(o, l, M, v, void 0);
            return;
        }
      throw Error(g(
        130,
        M == null ? M : typeof M,
        ""
      ));
    }
  }
  function Vt(o, l, M) {
    if (l.node = M, typeof M == "object" && M !== null) {
      switch (M.$$typeof) {
        case Bt:
          On(o, l, M.type, M.props, M.ref);
          return;
        case Dr:
          throw Error(g(257));
        case s:
          var v = M._init;
          M = v(M._payload), Vt(o, l, M);
          return;
      }
      if (je(M)) {
        UA(o, l, M);
        return;
      }
      if (M === null || typeof M != "object" ? v = null : (v = U && M[U] || M["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(M))) {
        if (M = v.next(), !M.done) {
          var b = [];
          do
            b.push(M.value), M = v.next();
          while (!M.done);
          UA(o, l, b);
        }
        return;
      }
      throw o = Object.prototype.toString.call(M), Error(g(31, o === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : o));
    }
    typeof M == "string" ? (v = l.blockedSegment, v.lastPushedText = Ct(l.blockedSegment.chunks, M, o.responseState, v.lastPushedText)) : typeof M == "number" && (v = l.blockedSegment, v.lastPushedText = Ct(l.blockedSegment.chunks, "" + M, o.responseState, v.lastPushedText));
  }
  function UA(o, l, M) {
    for (var v = M.length, b = 0; b < v; b++) {
      var x = l.treeContext;
      l.treeContext = Nr(x, v, b);
      try {
        Qn(o, l, M[b]);
      } finally {
        l.treeContext = x;
      }
    }
  }
  function Qn(o, l, M) {
    var v = l.blockedSegment.formatContext, b = l.legacyContext, x = l.context;
    try {
      return Vt(o, l, M);
    } catch (Me) {
      if ($n(), typeof Me == "object" && Me !== null && typeof Me.then == "function") {
        M = Me;
        var F = l.blockedSegment, J = tn(o, F.chunks.length, null, F.formatContext, F.lastPushedText, !0);
        F.children.push(J), F.lastPushedText = !1, o = tA(o, l.node, l.blockedBoundary, J, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, M.then(o, o), l.blockedSegment.formatContext = v, l.legacyContext = b, l.context = x, _t(x);
      } else
        throw l.blockedSegment.formatContext = v, l.legacyContext = b, l.context = x, _t(x), Me;
    }
  }
  function Uo(o) {
    var l = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, YA(this, l, o);
  }
  function RA(o, l, M) {
    var v = o.blockedBoundary;
    o.blockedSegment.status = 3, v === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.close())) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, o = M === void 0 ? Error(g(432)) : M, v.errorDigest = l.onError(o), v.parentFlushed && l.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(b) {
      return RA(b, l, M);
    }), v.fallbackAbortableTasks.clear(), l.allPendingTasks--, l.allPendingTasks === 0 && (v = l.onAllReady, v()));
  }
  function Pn(o, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null) {
      var M = l.children[0];
      M.id = l.id, M.parentFlushed = !0, M.status === 1 && Pn(o, M);
    } else
      o.completedSegments.push(l);
  }
  function YA(o, l, M) {
    if (l === null) {
      if (M.parentFlushed) {
        if (o.completedRootSegment !== null)
          throw Error(g(389));
        o.completedRootSegment = M;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = yn, l = o.onShellReady, l());
    } else
      l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (M.parentFlushed && M.status === 1 && Pn(l, M), l.parentFlushed && o.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(Uo, o), l.fallbackAbortableTasks.clear()) : M.parentFlushed && M.status === 1 && (Pn(l, M), l.completedSegments.length === 1 && l.parentFlushed && o.partialBoundaries.push(l)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function HA(o) {
    if (o.status !== 2) {
      var l = se, M = hn.current;
      hn.current = zn;
      var v = bn;
      bn = o.responseState;
      try {
        var b = o.pingedTasks, x;
        for (x = 0; x < b.length; x++) {
          var F = b[x], J = o, Me = F.blockedSegment;
          if (Me.status === 0) {
            _t(F.context);
            try {
              Vt(J, F, F.node), Me.lastPushedText && Me.textEmbedded && Me.chunks.push(He), F.abortSet.delete(F), Me.status = 1, YA(J, F.blockedBoundary, Me);
            } catch (tr) {
              if ($n(), typeof tr == "object" && tr !== null && typeof tr.then == "function") {
                var me = F.ping;
                tr.then(me, me);
              } else {
                F.abortSet.delete(F), Me.status = 4;
                var Te = F.blockedBoundary, rt = tr, Gt = rn(J, rt);
                if (Te === null ? kn(J, rt) : (Te.pendingTasks--, Te.forceClientRender || (Te.forceClientRender = !0, Te.errorDigest = Gt, Te.parentFlushed && J.clientRenderedBoundaries.push(Te))), J.allPendingTasks--, J.allPendingTasks === 0) {
                  var er = J.onAllReady;
                  er();
                }
              }
            } finally {
            }
          }
        }
        b.splice(0, x), o.destination !== null && nA(o, o.destination);
      } catch (tr) {
        rn(o, tr), kn(o, tr);
      } finally {
        bn = v, hn.current = M, M === zn && _t(l);
      }
    }
  }
  function Bn(o, l, M) {
    switch (M.parentFlushed = !0, M.status) {
      case 0:
        var v = M.id = o.nextSegmentId++;
        return M.lastPushedText = !1, M.textEmbedded = !1, o = o.responseState, c(l, et), c(l, o.placeholderPrefix), o = N(v.toString(16)), c(l, o), P(l, Xt);
      case 1:
        M.status = 2;
        var b = !0;
        v = M.chunks;
        var x = 0;
        M = M.children;
        for (var F = 0; F < M.length; F++) {
          for (b = M[F]; x < b.index; x++)
            c(l, v[x]);
          b = Un(o, l, b);
        }
        for (; x < v.length - 1; x++)
          c(l, v[x]);
        return x < v.length && (b = P(l, v[x])), b;
      default:
        throw Error(g(390));
    }
  }
  function Un(o, l, M) {
    var v = M.boundary;
    if (v === null)
      return Bn(o, l, M);
    if (v.parentFlushed = !0, v.forceClientRender)
      v = v.errorDigest, P(l, Kt), c(l, lr), v && (c(l, q), c(l, N(ce(v))), c(l, Ht)), P(l, ue), Bn(o, l, M);
    else if (0 < v.pendingTasks) {
      v.rootSegmentID = o.nextSegmentId++, 0 < v.completedSegments.length && o.partialBoundaries.push(v);
      var b = o.responseState, x = b.nextSuspenseID++;
      b = m(b.boundaryPrefix + x.toString(16)), v = v.id = b, ae(l, o.responseState, v), Bn(o, l, M);
    } else if (v.byteSize > o.progressiveChunkSize)
      v.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(v), ae(l, o.responseState, v.id), Bn(o, l, M);
    else {
      if (P(l, ur), M = v.completedSegments, M.length !== 1)
        throw Error(g(391));
      Un(o, l, M[0]);
    }
    return P(l, wr);
  }
  function FA(o, l, M) {
    return Se(l, o.responseState, M.formatContext, M.id), Un(o, l, M), Ce(l, M.formatContext);
  }
  function WA(o, l, M) {
    for (var v = M.completedSegments, b = 0; b < v.length; b++)
      VA(o, l, M, v[b]);
    if (v.length = 0, o = o.responseState, v = M.id, M = M.rootSegmentID, c(l, o.startInlineScript), o.sentCompleteBoundaryFunction ? c(l, at) : (o.sentCompleteBoundaryFunction = !0, c(l, We)), v === null)
      throw Error(g(395));
    return M = N(M.toString(16)), c(l, v), c(l, Pt), c(l, o.segmentPrefix), c(l, M), P(l, cr);
  }
  function VA(o, l, M, v) {
    if (v.status === 2)
      return !0;
    var b = v.id;
    if (b === -1) {
      if ((v.id = M.rootSegmentID) === -1)
        throw Error(g(392));
      return FA(o, l, v);
    }
    return FA(o, l, v), o = o.responseState, c(l, o.startInlineScript), o.sentCompleteSegmentFunction ? c(l, Ie) : (o.sentCompleteSegmentFunction = !0, c(l, Ee)), c(l, o.segmentPrefix), b = N(b.toString(16)), c(l, b), c(l, Mt), c(l, o.placeholderPrefix), c(l, b), P(l, Fe);
  }
  function nA(o, l) {
    T = new Uint8Array(512), C = 0;
    try {
      var M = o.completedRootSegment;
      if (M !== null && o.pendingRootTasks === 0) {
        Un(o, l, M), o.completedRootSegment = null;
        var v = o.responseState.bootstrapChunks;
        for (M = 0; M < v.length - 1; M++)
          c(l, v[M]);
        M < v.length && P(l, v[M]);
      }
      var b = o.clientRenderedBoundaries, x;
      for (x = 0; x < b.length; x++) {
        var F = b[x];
        v = l;
        var J = o.responseState, Me = F.id, me = F.errorDigest, Te = F.errorMessage, rt = F.errorComponentStack;
        if (c(v, J.startInlineScript), J.sentClientRenderFunction ? c(v, ht) : (J.sentClientRenderFunction = !0, c(
          v,
          gt
        )), Me === null)
          throw Error(g(395));
        c(v, Me), c(v, fr), (me || Te || rt) && (c(v, Et), c(v, N(dr(me || "")))), (Te || rt) && (c(v, Et), c(v, N(dr(Te || "")))), rt && (c(v, Et), c(v, N(dr(rt)))), P(v, qt);
      }
      b.splice(0, x);
      var Gt = o.completedBoundaries;
      for (x = 0; x < Gt.length; x++)
        WA(o, l, Gt[x]);
      Gt.splice(0, x), W(l), T = new Uint8Array(512), C = 0;
      var er = o.partialBoundaries;
      for (x = 0; x < er.length; x++) {
        var tr = er[x];
        e: {
          b = o, F = l;
          var Rn = tr.completedSegments;
          for (J = 0; J < Rn.length; J++)
            if (!VA(
              b,
              F,
              tr,
              Rn[J]
            )) {
              J++, Rn.splice(0, J);
              var ZA = !1;
              break e;
            }
          Rn.splice(0, J), ZA = !0;
        }
        if (!ZA) {
          o.destination = null, x++, er.splice(0, x);
          return;
        }
      }
      er.splice(0, x);
      var AA = o.completedBoundaries;
      for (x = 0; x < AA.length; x++)
        WA(o, l, AA[x]);
      AA.splice(0, x);
    } finally {
      W(l), o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && l.close();
    }
  }
  function GA(o, l) {
    try {
      var M = o.abortableTasks;
      M.forEach(function(v) {
        return RA(v, o, l);
      }), M.clear(), o.destination !== null && nA(o, o.destination);
    } catch (v) {
      rn(o, v), kn(o, v);
    }
  }
  return Da.renderToReadableStream = function(o, l) {
    return new Promise(function(M, v) {
      var b, x, F = new Promise(function(Te, rt) {
        x = Te, b = rt;
      }), J = eA(o, jt(l ? l.identifierPrefix : void 0, l ? l.nonce : void 0, l ? l.bootstrapScriptContent : void 0, l ? l.bootstrapScripts : void 0, l ? l.bootstrapModules : void 0), Lt(l ? l.namespaceURI : void 0), l ? l.progressiveChunkSize : void 0, l ? l.onError : void 0, x, function() {
        var Te = new ReadableStream({ type: "bytes", pull: function(rt) {
          if (J.status === 1)
            J.status = 2, R(rt, J.fatalError);
          else if (J.status !== 2 && J.destination === null) {
            J.destination = rt;
            try {
              nA(J, rt);
            } catch (Gt) {
              rn(J, Gt), kn(J, Gt);
            }
          }
        }, cancel: function() {
          GA(J);
        } }, { highWaterMark: 0 });
        Te.allReady = F, M(Te);
      }, function(Te) {
        F.catch(function() {
        }), v(Te);
      }, b);
      if (l && l.signal) {
        var Me = l.signal, me = function() {
          GA(J, Me.reason), Me.removeEventListener("abort", me);
        };
        Me.addEventListener("abort", me);
      }
      HA(J);
    });
  }, Da.version = "18.2.0", Da;
}
var xA = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ou;
function xs() {
  return Ou || (Ou = 1, process.env.NODE_ENV !== "production" && function() {
    var j = zo, g = "18.2.0", T = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          i[u - 1] = arguments[u];
        P("warn", e, i);
      }
    }
    function c(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          i[u - 1] = arguments[u];
        P("error", e, i);
      }
    }
    function P(e, r, i) {
      {
        var u = T.ReactDebugCurrentFrame, d = u.getStackAddendum();
        d !== "" && (r += "%s", i = i.concat([d]));
        var D = i.map(function(w) {
          return String(w);
        });
        D.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, D);
      }
    }
    function W(e) {
      e();
    }
    function H(e) {
    }
    function N(e, r) {
      m(e, r);
    }
    function m(e, r) {
      return e.push(r);
    }
    function R(e) {
    }
    function B(e) {
      e.push(null);
    }
    function _(e) {
      return e;
    }
    function he(e) {
      return e;
    }
    function $(e, r) {
      e.destroy(r);
    }
    function te(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function V(e) {
      try {
        return k(e), !1;
      } catch {
        return !0;
      }
    }
    function k(e) {
      return "" + e;
    }
    function ee(e, r) {
      if (V(e))
        return c("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", r, te(e)), k(e);
    }
    function le(e, r) {
      if (V(e))
        return c("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", r, te(e)), k(e);
    }
    function ye(e) {
      if (V(e))
        return c("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", te(e)), k(e);
    }
    var Ae = Object.prototype.hasOwnProperty, pe = 0, ce = 1, Xe = 2, ve = 3, je = 4, ze = 5, we = 6, Ke = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", De = Ke + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ue = new RegExp("^[" + Ke + "][" + De + "]*$"), _e = {}, st = {};
    function jt(e) {
      return Ae.call(st, e) ? !0 : Ae.call(_e, e) ? !1 : Ue.test(e) ? (st[e] = !0, !0) : (_e[e] = !0, c("Invalid attribute name: `%s`", e), !1);
    }
    function lt(e, r, i, u) {
      if (i !== null && i.type === pe)
        return !1;
      switch (typeof r) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (u)
            return !1;
          if (i !== null)
            return !i.acceptsBooleans;
          var d = e.toLowerCase().slice(0, 5);
          return d !== "data-" && d !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Lt(e) {
      return He.hasOwnProperty(e) ? He[e] : null;
    }
    function Ye(e, r, i, u, d, D, w) {
      this.acceptsBooleans = r === Xe || r === ve || r === je, this.attributeName = u, this.attributeNamespace = d, this.mustUseProperty = i, this.propertyName = e, this.type = r, this.sanitizeURL = D, this.removeEmptyString = w;
    }
    var He = {}, Ct = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ct.forEach(function(e) {
      He[e] = new Ye(
        e,
        pe,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var r = e[0], i = e[1];
      He[r] = new Ye(
        r,
        ce,
        !1,
        // mustUseProperty
        i,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      He[e] = new Ye(
        e,
        Xe,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      He[e] = new Ye(
        e,
        Xe,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      He[e] = new Ye(
        e,
        ve,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      He[e] = new Ye(
        e,
        ve,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      He[e] = new Ye(
        e,
        je,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      He[e] = new Ye(
        e,
        we,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      He[e] = new Ye(
        e,
        ze,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var wt = /[\-\:]([a-z])/g, Ge = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var r = e.replace(wt, Ge);
      He[r] = new Ye(
        r,
        ce,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var r = e.replace(wt, Ge);
      He[r] = new Ye(
        r,
        ce,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var r = e.replace(wt, Ge);
      He[r] = new Ye(
        r,
        ce,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      He[e] = new Ye(
        e,
        ce,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var be = "xlinkHref";
    He[be] = new Ye(
      "xlinkHref",
      ce,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      He[e] = new Ye(
        e,
        ce,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Qe = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Oe(e, r) {
      return e + r.charAt(0).toUpperCase() + r.substring(1);
    }
    var ke = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Qe).forEach(function(e) {
      ke.forEach(function(r) {
        Qe[Oe(r, e)] = Qe[e];
      });
    });
    var pt = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ze(e, r) {
      pt[r.type] || r.onChange || r.onInput || r.readOnly || r.disabled || r.value == null || c("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), r.onChange || r.readOnly || r.disabled || r.checked == null || c("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Tt(e, r) {
      if (e.indexOf("-") === -1)
        return typeof r.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ct = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, it = {}, xt = new RegExp("^(aria)-[" + De + "]*$"), Nt = new RegExp("^(aria)[A-Z][" + De + "]*$");
    function or(e, r) {
      {
        if (Ae.call(it, r) && it[r])
          return !0;
        if (Nt.test(r)) {
          var i = "aria-" + r.slice(4).toLowerCase(), u = ct.hasOwnProperty(i) ? i : null;
          if (u == null)
            return c("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", r), it[r] = !0, !0;
          if (r !== u)
            return c("Invalid ARIA attribute `%s`. Did you mean `%s`?", r, u), it[r] = !0, !0;
        }
        if (xt.test(r)) {
          var d = r.toLowerCase(), D = ct.hasOwnProperty(d) ? d : null;
          if (D == null)
            return it[r] = !0, !1;
          if (r !== D)
            return c("Unknown ARIA attribute `%s`. Did you mean `%s`?", r, D), it[r] = !0, !0;
        }
      }
      return !0;
    }
    function It(e, r) {
      {
        var i = [];
        for (var u in r) {
          var d = or(e, u);
          d || i.push(u);
        }
        var D = i.map(function(w) {
          return "`" + w + "`";
        }).join(", ");
        i.length === 1 ? c("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", D, e) : i.length > 1 && c("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", D, e);
      }
    }
    function Qt(e, r) {
      Tt(e, r) || It(e, r);
    }
    var Zt = !1;
    function Ir(e, r) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        r != null && r.value === null && !Zt && (Zt = !0, e === "select" && r.multiple ? c("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : c("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var St = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Dt = function() {
    };
    {
      var $e = {}, ir = /^on./, ar = /^on[^A-Z]/, Yt = new RegExp("^(aria)-[" + De + "]*$"), et = new RegExp("^(aria)[A-Z][" + De + "]*$");
      Dt = function(e, r, i, u) {
        if (Ae.call($e, r) && $e[r])
          return !0;
        var d = r.toLowerCase();
        if (d === "onfocusin" || d === "onfocusout")
          return c("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), $e[r] = !0, !0;
        if (u != null) {
          var D = u.registrationNameDependencies, w = u.possibleRegistrationNames;
          if (D.hasOwnProperty(r))
            return !0;
          var O = w.hasOwnProperty(d) ? w[d] : null;
          if (O != null)
            return c("Invalid event handler property `%s`. Did you mean `%s`?", r, O), $e[r] = !0, !0;
          if (ir.test(r))
            return c("Unknown event handler property `%s`. It will be ignored.", r), $e[r] = !0, !0;
        } else if (ir.test(r))
          return ar.test(r) && c("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", r), $e[r] = !0, !0;
        if (Yt.test(r) || et.test(r))
          return !0;
        if (d === "innerhtml")
          return c("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), $e[r] = !0, !0;
        if (d === "aria")
          return c("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), $e[r] = !0, !0;
        if (d === "is" && i !== null && i !== void 0 && typeof i != "string")
          return c("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), $e[r] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return c("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", r), $e[r] = !0, !0;
        var G = Lt(r), re = G !== null && G.type === pe;
        if (St.hasOwnProperty(d)) {
          var ie = St[d];
          if (ie !== r)
            return c("Invalid DOM property `%s`. Did you mean `%s`?", r, ie), $e[r] = !0, !0;
        } else if (!re && r !== d)
          return c("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", r, d), $e[r] = !0, !0;
        return typeof i == "boolean" && lt(r, i, G, !1) ? (i ? c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, r, r, i, r) : c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, r, r, i, r, r, r), $e[r] = !0, !0) : re ? !0 : lt(r, i, G, !1) ? ($e[r] = !0, !1) : ((i === "false" || i === "true") && G !== null && G.type === ve && (c("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, r, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', r, i), $e[r] = !0), !0);
      };
    }
    var Xt = function(e, r, i) {
      {
        var u = [];
        for (var d in r) {
          var D = Dt(e, d, r[d], i);
          D || u.push(d);
        }
        var w = u.map(function(O) {
          return "`" + O + "`";
        }).join(", ");
        u.length === 1 ? c("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", w, e) : u.length > 1 && c("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", w, e);
      }
    };
    function ur(e, r, i) {
      Tt(e, r) || Xt(e, r, i);
    }
    var Jt = function() {
    };
    {
      var sr = /^(?:webkit|moz|o)[A-Z]/, Kt = /^-ms-/, wr = /-(.)/g, lr = /;\s*$/, Ht = {}, q = {}, ue = !1, ae = !1, ge = function(e) {
        return e.replace(wr, function(r, i) {
          return i.toUpperCase();
        });
      }, Le = function(e) {
        Ht.hasOwnProperty(e) && Ht[e] || (Ht[e] = !0, c(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ge(e.replace(Kt, "ms-"))
        ));
      }, ne = function(e) {
        Ht.hasOwnProperty(e) && Ht[e] || (Ht[e] = !0, c("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, xe = function(e, r) {
        q.hasOwnProperty(r) && q[r] || (q[r] = !0, c(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, r.replace(lr, "")));
      }, tt = function(e, r) {
        ue || (ue = !0, c("`NaN` is an invalid value for the `%s` css style property.", e));
      }, nt = function(e, r) {
        ae || (ae = !0, c("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Jt = function(e, r) {
        e.indexOf("-") > -1 ? Le(e) : sr.test(e) ? ne(e) : lr.test(r) && xe(e, r), typeof r == "number" && (isNaN(r) ? tt(e, r) : isFinite(r) || nt(e, r));
      };
    }
    var ft = Jt, mt = /["'&<>]/;
    function At(e) {
      ye(e);
      var r = "" + e, i = mt.exec(r);
      if (!i)
        return r;
      var u, d = "", D, w = 0;
      for (D = i.index; D < r.length; D++) {
        switch (r.charCodeAt(D)) {
          case 34:
            u = "&quot;";
            break;
          case 38:
            u = "&amp;";
            break;
          case 39:
            u = "&#x27;";
            break;
          case 60:
            u = "&lt;";
            break;
          case 62:
            u = "&gt;";
            break;
          default:
            continue;
        }
        w !== D && (d += r.substring(w, D)), w = D + 1, d += u;
      }
      return w !== D ? d + r.substring(w, D) : d;
    }
    function Re(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : At(e);
    }
    var Pr = /([A-Z])/g, Br = /^ms-/;
    function Ur(e) {
      return e.replace(Pr, "-$1").toLowerCase().replace(Br, "-ms-");
    }
    var dt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Rr = !1;
    function sn(e) {
      !Rr && dt.test(e) && (Rr = !0, c("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var ln = Array.isArray;
    function I(e) {
      return ln(e);
    }
    var Z = "<script>", K = "<\/script>", fe = '<script src="', Se = '<script type="module" src="', Ce = '" async=""><\/script>';
    function Ee(e) {
      return ye(e), ("" + e).replace(Ie, Mt);
    }
    var Ie = /(<\/|<)(s)(cript)/gi, Mt = function(e, r, i, u) {
      return "" + r + (i === "s" ? "\\u0073" : "\\u0053") + u;
    };
    function Fe(e, r, i, u, d) {
      var D = e === void 0 ? "" : e, w = r === void 0 ? Z : '<script nonce="' + Re(r) + '">', O = [];
      if (i !== void 0 && O.push(w, Ee(i), K), u !== void 0)
        for (var G = 0; G < u.length; G++)
          O.push(fe, Re(u[G]), Ce);
      if (d !== void 0)
        for (var re = 0; re < d.length; re++)
          O.push(Se, Re(d[re]), Ce);
      return {
        bootstrapChunks: O,
        startInlineScript: w,
        placeholderPrefix: D + "P:",
        segmentPrefix: D + "S:",
        boundaryPrefix: D + "B:",
        idPrefix: D,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var We = 0, at = 1, Pt = 2, cr = 3, gt = 4, ht = 5, fr = 6, qt = 7;
    function Et(e, r) {
      return {
        insertionMode: e,
        selectedValue: r
      };
    }
    function Kr(e, r, i) {
      switch (r) {
        case "select":
          return Et(at, i.value != null ? i.value : i.defaultValue);
        case "svg":
          return Et(Pt, null);
        case "math":
          return Et(cr, null);
        case "foreignObject":
          return Et(at, null);
        case "table":
          return Et(gt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Et(ht, null);
        case "colgroup":
          return Et(qt, null);
        case "tr":
          return Et(fr, null);
      }
      return e.insertionMode >= gt || e.insertionMode === We ? Et(at, null) : e;
    }
    var dr = null;
    function Mr(e) {
      var r = e.nextSuspenseID++;
      return e.boundaryPrefix + r.toString(16);
    }
    function Bt(e, r, i) {
      var u = e.idPrefix, d = ":" + u + "R" + r;
      return i > 0 && (d += "H" + i.toString(32)), d + ":";
    }
    function Dr(e) {
      return Re(e);
    }
    var Tr = "<!-- -->";
    function cn(e, r, i, u) {
      return r === "" ? u : (u && e.push(Tr), e.push(Dr(r)), !0);
    }
    function fn(e, r, i, u) {
      i && u && e.push(Tr);
    }
    var qr = /* @__PURE__ */ new Map();
    function Sr(e) {
      var r = qr.get(e);
      if (r !== void 0)
        return r;
      var i = Re(Ur(e));
      return qr.set(e, i), i;
    }
    var dn = ' style="', _r = ":", $r = ";";
    function A(e, r, i) {
      if (typeof i != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var u = !0;
      for (var d in i)
        if (Ae.call(i, d)) {
          var D = i[d];
          if (!(D == null || typeof D == "boolean" || D === "")) {
            var w = void 0, O = void 0, G = d.indexOf("--") === 0;
            G ? (w = Re(d), le(D, d), O = Re(("" + D).trim())) : (ft(d, D), w = Sr(d), typeof D == "number" ? D !== 0 && !Ae.call(Qe, d) ? O = D + "px" : O = "" + D : (le(D, d), O = Re(("" + D).trim()))), u ? (u = !1, e.push(dn, w, _r, O)) : e.push($r, w, _r, O);
          }
        }
      u || e.push(p);
    }
    var s = " ", h = '="', p = '"', z = '=""';
    function E(e, r, i, u) {
      switch (i) {
        case "style": {
          A(e, r, u);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(i.length > 2 && (i[0] === "o" || i[0] === "O") && (i[1] === "n" || i[1] === "N"))
      ) {
        var d = Lt(i);
        if (d !== null) {
          switch (typeof u) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!d.acceptsBooleans)
                return;
          }
          var D = d.attributeName, w = D;
          switch (d.type) {
            case ve:
              u && e.push(s, w, z);
              return;
            case je:
              u === !0 ? e.push(s, w, z) : u === !1 || e.push(s, w, h, Re(u), p);
              return;
            case ze:
              isNaN(u) || e.push(s, w, h, Re(u), p);
              break;
            case we:
              !isNaN(u) && u >= 1 && e.push(s, w, h, Re(u), p);
              break;
            default:
              d.sanitizeURL && (ee(u, D), u = "" + u, sn(u)), e.push(s, w, h, Re(u), p);
          }
        } else if (jt(i)) {
          switch (typeof u) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var O = i.toLowerCase().slice(0, 5);
              if (O !== "data-" && O !== "aria-")
                return;
            }
          }
          e.push(s, i, h, Re(u), p);
        }
      }
    }
    var U = ">", X = "/>";
    function oe(e, r, i) {
      if (r != null) {
        if (i != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof r != "object" || !("__html" in r))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var u = r.__html;
        u != null && (ye(u), e.push("" + u));
      }
    }
    var de = !1, se = !1, Pe = !1, Ft = !1, zt = !1, bt = !1, Lr = !1;
    function _t(e, r) {
      {
        var i = e[r];
        if (i != null) {
          var u = I(i);
          e.multiple && !u ? c("The `%s` prop supplied to <select> must be an array if `multiple` is true.", r) : !e.multiple && u && c("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", r);
        }
      }
    }
    function en(e, r, i) {
      Ze("select", r), _t(r, "value"), _t(r, "defaultValue"), r.value !== void 0 && r.defaultValue !== void 0 && !Pe && (c("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Pe = !0), e.push(Wt("select"));
      var u = null, d = null;
      for (var D in r)
        if (Ae.call(r, D)) {
          var w = r[D];
          if (w == null)
            continue;
          switch (D) {
            case "children":
              u = w;
              break;
            case "dangerouslySetInnerHTML":
              d = w;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              E(e, i, D, w);
              break;
          }
        }
      return e.push(U), oe(e, d, u), u;
    }
    function mr(e) {
      var r = "";
      return j.Children.forEach(e, function(i) {
        i != null && (r += i, !zt && typeof i != "string" && typeof i != "number" && (zt = !0, c("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), r;
    }
    var Yr = ' selected=""';
    function Nr(e, r, i, u) {
      var d = u.selectedValue;
      e.push(Wt("option"));
      var D = null, w = null, O = null, G = null;
      for (var re in r)
        if (Ae.call(r, re)) {
          var ie = r[re];
          if (ie == null)
            continue;
          switch (re) {
            case "children":
              D = ie;
              break;
            case "selected":
              O = ie, Lr || (c("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Lr = !0);
              break;
            case "dangerouslySetInnerHTML":
              G = ie;
              break;
            case "value":
              w = ie;
            default:
              E(e, i, re, ie);
              break;
          }
        }
      if (d != null) {
        var Ne;
        if (w !== null ? (ee(w, "value"), Ne = "" + w) : (G !== null && (bt || (bt = !0, c("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Ne = mr(D)), I(d))
          for (var ut = 0; ut < d.length; ut++) {
            ee(d[ut], "value");
            var Ot = "" + d[ut];
            if (Ot === Ne) {
              e.push(Yr);
              break;
            }
          }
        else
          ee(d, "select.value"), "" + d === Ne && e.push(Yr);
      } else
        O && e.push(Yr);
      return e.push(U), oe(e, G, D), D;
    }
    function Mn(e, r, i) {
      Ze("input", r), r.checked !== void 0 && r.defaultChecked !== void 0 && !se && (c("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", r.type), se = !0), r.value !== void 0 && r.defaultValue !== void 0 && !de && (c("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", r.type), de = !0), e.push(Wt("input"));
      var u = null, d = null, D = null, w = null;
      for (var O in r)
        if (Ae.call(r, O)) {
          var G = r[O];
          if (G == null)
            continue;
          switch (O) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              w = G;
              break;
            case "defaultValue":
              d = G;
              break;
            case "checked":
              D = G;
              break;
            case "value":
              u = G;
              break;
            default:
              E(e, i, O, G);
              break;
          }
        }
      return D !== null ? E(e, i, "checked", D) : w !== null && E(e, i, "checked", w), u !== null ? E(e, i, "value", u) : d !== null && E(e, i, "value", d), e.push(X), null;
    }
    function bo(e, r, i) {
      Ze("textarea", r), r.value !== void 0 && r.defaultValue !== void 0 && !Ft && (c("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ft = !0), e.push(Wt("textarea"));
      var u = null, d = null, D = null;
      for (var w in r)
        if (Ae.call(r, w)) {
          var O = r[w];
          if (O == null)
            continue;
          switch (w) {
            case "children":
              D = O;
              break;
            case "value":
              u = O;
              break;
            case "defaultValue":
              d = O;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              E(e, i, w, O);
              break;
          }
        }
      if (u === null && d !== null && (u = d), e.push(U), D != null) {
        if (c("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), u != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (I(D)) {
          if (D.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          ye(D[0]), u = "" + D[0];
        }
        ye(D), u = "" + D;
      }
      return typeof u == "string" && u[0] === `
` && e.push(gn), u !== null && (ee(u, "value"), e.push(Dr("" + u))), null;
    }
    function ko(e, r, i, u) {
      e.push(Wt(i));
      for (var d in r)
        if (Ae.call(r, d)) {
          var D = r[d];
          if (D == null)
            continue;
          switch (d) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(i + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              E(e, u, d, D);
              break;
          }
        }
      return e.push(X), null;
    }
    function Kn(e, r, i) {
      e.push(Wt("menuitem"));
      for (var u in r)
        if (Ae.call(r, u)) {
          var d = r[u];
          if (d == null)
            continue;
          switch (u) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              E(e, i, u, d);
              break;
          }
        }
      return e.push(U), null;
    }
    function Oo(e, r, i) {
      e.push(Wt("title"));
      var u = null;
      for (var d in r)
        if (Ae.call(r, d)) {
          var D = r[d];
          if (D == null)
            continue;
          switch (d) {
            case "children":
              u = D;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              E(e, i, d, D);
              break;
          }
        }
      e.push(U);
      {
        var w = Array.isArray(u) && u.length < 2 ? u[0] || null : u;
        Array.isArray(u) && u.length > 1 ? c("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : w != null && w.$$typeof != null ? c("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : w != null && typeof w != "string" && typeof w != "number" && c("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return u;
    }
    function qn(e, r, i, u) {
      e.push(Wt(i));
      var d = null, D = null;
      for (var w in r)
        if (Ae.call(r, w)) {
          var O = r[w];
          if (O == null)
            continue;
          switch (w) {
            case "children":
              d = O;
              break;
            case "dangerouslySetInnerHTML":
              D = O;
              break;
            default:
              E(e, u, w, O);
              break;
          }
        }
      return e.push(U), oe(e, D, d), typeof d == "string" ? (e.push(Dr(d)), null) : d;
    }
    function jr(e, r, i, u) {
      e.push(Wt(i));
      var d = null, D = null;
      for (var w in r)
        if (Ae.call(r, w)) {
          var O = r[w];
          if (O == null)
            continue;
          switch (w) {
            case "children":
              d = O;
              break;
            case "dangerouslySetInnerHTML":
              D = O;
              break;
            case "style":
              A(e, u, O);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              jt(w) && typeof O != "function" && typeof O != "symbol" && e.push(s, w, h, Re(O), p);
              break;
          }
        }
      return e.push(U), oe(e, D, d), d;
    }
    var gn = `
`;
    function En(e, r, i, u) {
      e.push(Wt(i));
      var d = null, D = null;
      for (var w in r)
        if (Ae.call(r, w)) {
          var O = r[w];
          if (O == null)
            continue;
          switch (w) {
            case "children":
              d = O;
              break;
            case "dangerouslySetInnerHTML":
              D = O;
              break;
            default:
              E(e, u, w, O);
              break;
          }
        }
      if (e.push(U), D != null) {
        if (d != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof D != "object" || !("__html" in D))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var G = D.__html;
        G != null && (typeof G == "string" && G.length > 0 && G[0] === `
` ? e.push(gn, G) : (ye(G), e.push("" + G)));
      }
      return typeof d == "string" && d[0] === `
` && e.push(gn), d;
    }
    var qe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Er = /* @__PURE__ */ new Map();
    function Wt(e) {
      var r = Er.get(e);
      if (r === void 0) {
        if (!qe.test(e))
          throw new Error("Invalid tag: " + e);
        r = "<" + e, Er.set(e, r);
      }
      return r;
    }
    var Hr = "<!DOCTYPE html>";
    function Cr(e, r, i, u, d) {
      switch (Qt(r, i), Ir(r, i), ur(r, i, null), !i.suppressContentEditableWarning && i.contentEditable && i.children != null && c("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), d.insertionMode !== Pt && d.insertionMode !== cr && r.indexOf("-") === -1 && typeof i.is != "string" && r.toLowerCase() !== r && c("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", r), r) {
        case "select":
          return en(e, i, u);
        case "option":
          return Nr(e, i, u, d);
        case "textarea":
          return bo(e, i, u);
        case "input":
          return Mn(e, i, u);
        case "menuitem":
          return Kn(e, i, u);
        case "title":
          return Oo(e, i, u);
        case "listing":
        case "pre":
          return En(e, i, r, u);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return ko(e, i, r, u);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return qn(e, i, r, u);
        case "html":
          return d.insertionMode === We && e.push(Hr), qn(e, i, r, u);
        default:
          return r.indexOf("-") === -1 && typeof i.is != "string" ? qn(e, i, r, u) : jr(e, i, r, u);
      }
    }
    var Cn = "</", xr = ">";
    function $t(e, r, i) {
      switch (r) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          e.push(Cn, r, xr);
      }
    }
    function _n(e, r) {
      for (var i = r.bootstrapChunks, u = 0; u < i.length - 1; u++)
        N(e, i[u]);
      return u < i.length ? m(e, i[u]) : !0;
    }
    var $n = '<template id="', kA = '"></template>';
    function OA(e, r, i) {
      N(e, $n), N(e, r.placeholderPrefix);
      var u = i.toString(16);
      return N(e, u), m(e, kA);
    }
    var QA = "<!--$-->", Qo = '<!--$?--><template id="', Po = '"></template>', xn = "<!--$!-->", zn = "<!--/$-->", bn = "<template", hn = '"', Bo = ' data-dgst="', yn = ' data-msg="', eA = ' data-stck="', tA = "></template>";
    function tn(e, r) {
      return m(e, QA);
    }
    function rn(e, r, i) {
      if (N(e, Qo), i === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return N(e, i), m(e, Po);
    }
    function kn(e, r, i, u, d) {
      var D;
      return D = m(e, xn), N(e, bn), i && (N(e, Bo), N(e, Re(i)), N(e, hn)), u && (N(e, yn), N(e, Re(u)), N(e, hn)), d && (N(e, eA), N(e, Re(d)), N(e, hn)), D = m(e, tA), D;
    }
    function PA(e, r) {
      return m(e, zn);
    }
    function rA(e, r) {
      return m(e, zn);
    }
    function BA(e, r) {
      return m(e, zn);
    }
    var On = '<div hidden id="', Vt = '">', UA = "</div>", Qn = '<svg aria-hidden="true" style="display:none" id="', Uo = '">', RA = "</svg>", Pn = '<math aria-hidden="true" style="display:none" id="', YA = '">', HA = "</math>", Bn = '<table hidden id="', Un = '">', FA = "</table>", WA = '<table hidden><tbody id="', VA = '">', nA = "</tbody></table>", GA = '<table hidden><tr id="', o = '">', l = "</tr></table>", M = '<table hidden><colgroup id="', v = '">', b = "</colgroup></table>";
    function x(e, r, i, u) {
      switch (i.insertionMode) {
        case We:
        case at:
          return N(e, On), N(e, r.segmentPrefix), N(e, u.toString(16)), m(e, Vt);
        case Pt:
          return N(e, Qn), N(e, r.segmentPrefix), N(e, u.toString(16)), m(e, Uo);
        case cr:
          return N(e, Pn), N(e, r.segmentPrefix), N(e, u.toString(16)), m(e, YA);
        case gt:
          return N(e, Bn), N(e, r.segmentPrefix), N(e, u.toString(16)), m(e, Un);
        case ht:
          return N(e, WA), N(e, r.segmentPrefix), N(e, u.toString(16)), m(e, VA);
        case fr:
          return N(e, GA), N(e, r.segmentPrefix), N(e, u.toString(16)), m(e, o);
        case qt:
          return N(e, M), N(e, r.segmentPrefix), N(e, u.toString(16)), m(e, v);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function F(e, r) {
      switch (r.insertionMode) {
        case We:
        case at:
          return m(e, UA);
        case Pt:
          return m(e, RA);
        case cr:
          return m(e, HA);
        case gt:
          return m(e, FA);
        case ht:
          return m(e, nA);
        case fr:
          return m(e, l);
        case qt:
          return m(e, b);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var J = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Me = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', me = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Te = J + ';$RS("', rt = '$RS("', Gt = '","', er = '")<\/script>';
    function tr(e, r, i) {
      N(e, r.startInlineScript), r.sentCompleteSegmentFunction ? N(e, rt) : (r.sentCompleteSegmentFunction = !0, N(e, Te)), N(e, r.segmentPrefix);
      var u = i.toString(16);
      return N(e, u), N(e, Gt), N(e, r.placeholderPrefix), N(e, u), m(e, er);
    }
    var Rn = Me + ';$RC("', ZA = '$RC("', AA = '","', wa = '")<\/script>';
    function Ta(e, r, i, u) {
      if (N(e, r.startInlineScript), r.sentCompleteBoundaryFunction ? N(e, ZA) : (r.sentCompleteBoundaryFunction = !0, N(e, Rn)), i === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var d = u.toString(16);
      return N(e, i), N(e, AA), N(e, r.segmentPrefix), N(e, d), m(e, wa);
    }
    var Sa = me + ';$RX("', ma = '$RX("', Ea = '"', Ca = ")<\/script>", Ro = ",";
    function xa(e, r, i, u, d, D) {
      if (N(e, r.startInlineScript), r.sentClientRenderFunction ? N(e, ma) : (r.sentClientRenderFunction = !0, N(e, Sa)), i === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return N(e, i), N(e, Ea), (u || d || D) && (N(e, Ro), N(e, Yo(u || ""))), (d || D) && (N(e, Ro), N(e, Yo(d || ""))), D && (N(e, Ro), N(e, Yo(D))), m(e, Ca);
    }
    var za = /[<\u2028\u2029]/g;
    function Yo(e) {
      var r = JSON.stringify(e);
      return r.replace(za, function(i) {
        switch (i) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function ba(e, r) {
      var i = Fe(r, void 0);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: i.bootstrapChunks,
        startInlineScript: i.startInlineScript,
        placeholderPrefix: i.placeholderPrefix,
        segmentPrefix: i.segmentPrefix,
        boundaryPrefix: i.boundaryPrefix,
        idPrefix: i.idPrefix,
        nextSuspenseID: i.nextSuspenseID,
        sentCompleteSegmentFunction: i.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: i.sentCompleteBoundaryFunction,
        sentClientRenderFunction: i.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: e
      };
    }
    function Ho() {
      return {
        insertionMode: at,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function zi(e, r, i, u) {
      return i.generateStaticMarkup ? (e.push(Re(r)), !1) : cn(e, r, i, u);
    }
    function bi(e, r, i, u) {
      if (!r.generateStaticMarkup)
        return fn(e, r, i, u);
    }
    function Fo(e, r) {
      return r.generateStaticMarkup ? !0 : tn(e);
    }
    function gr(e, r, i, u, d) {
      return r.generateStaticMarkup ? !0 : kn(e, r, i, u, d);
    }
    function ka(e, r) {
      return r.generateStaticMarkup ? !0 : PA(e);
    }
    function ki(e, r) {
      return r.generateStaticMarkup ? !0 : BA(e);
    }
    var rr = Object.assign, Oi = Symbol.for("react.element"), Wo = Symbol.for("react.portal"), XA = Symbol.for("react.fragment"), JA = Symbol.for("react.strict_mode"), KA = Symbol.for("react.profiler"), oA = Symbol.for("react.provider"), iA = Symbol.for("react.context"), aA = Symbol.for("react.forward_ref"), Yn = Symbol.for("react.suspense"), Vo = Symbol.for("react.suspense_list"), Go = Symbol.for("react.memo"), qA = Symbol.for("react.lazy"), Oa = Symbol.for("react.scope"), Qi = Symbol.for("react.debug_trace_mode"), Qa = Symbol.for("react.legacy_hidden"), Pa = Symbol.for("react.default_value"), Pi = Symbol.iterator, Bi = "@@iterator";
    function vt(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Pi && e[Pi] || e[Bi];
      return typeof r == "function" ? r : null;
    }
    function uA(e, r, i) {
      var u = e.displayName;
      if (u)
        return u;
      var d = r.displayName || r.name || "";
      return d !== "" ? i + "(" + d + ")" : i;
    }
    function Zo(e) {
      return e.displayName || "Context";
    }
    function yt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case XA:
          return "Fragment";
        case Wo:
          return "Portal";
        case KA:
          return "Profiler";
        case JA:
          return "StrictMode";
        case Yn:
          return "Suspense";
        case Vo:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case iA:
            var r = e;
            return Zo(r) + ".Consumer";
          case oA:
            var i = e;
            return Zo(i._context) + ".Provider";
          case aA:
            return uA(e, e.render, "ForwardRef");
          case Go:
            var u = e.displayName || null;
            return u !== null ? u : yt(e.type) || "Memo";
          case qA: {
            var d = e, D = d._payload, w = d._init;
            try {
              return yt(w(D));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Hn = 0, Xo, Jo, Ko, qo, _o, Ui, Ri;
    function _A() {
    }
    _A.__reactDisabledLog = !0;
    function $o() {
      {
        if (Hn === 0) {
          Xo = console.log, Jo = console.info, Ko = console.warn, qo = console.error, _o = console.group, Ui = console.groupCollapsed, Ri = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _A,
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
        Hn++;
      }
    }
    function sA() {
      {
        if (Hn--, Hn === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: rr({}, e, {
              value: Xo
            }),
            info: rr({}, e, {
              value: Jo
            }),
            warn: rr({}, e, {
              value: Ko
            }),
            error: rr({}, e, {
              value: qo
            }),
            group: rr({}, e, {
              value: _o
            }),
            groupCollapsed: rr({}, e, {
              value: Ui
            }),
            groupEnd: rr({}, e, {
              value: Ri
            })
          });
        }
        Hn < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var lA = T.ReactCurrentDispatcher, Fn;
    function cA(e, r, i) {
      {
        if (Fn === void 0)
          try {
            throw Error();
          } catch (d) {
            var u = d.stack.trim().match(/\n( *(at )?)/);
            Fn = u && u[1] || "";
          }
        return `
` + Fn + e;
      }
    }
    var fA = !1, $A;
    {
      var Yi = typeof WeakMap == "function" ? WeakMap : Map;
      $A = new Yi();
    }
    function ei(e, r) {
      if (!e || fA)
        return "";
      {
        var i = $A.get(e);
        if (i !== void 0)
          return i;
      }
      var u;
      fA = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var D;
      D = lA.current, lA.current = null, $o();
      try {
        if (r) {
          var w = function() {
            throw Error();
          };
          if (Object.defineProperty(w.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(w, []);
            } catch (vr) {
              u = vr;
            }
            Reflect.construct(e, [], w);
          } else {
            try {
              w.call();
            } catch (vr) {
              u = vr;
            }
            e.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (vr) {
            u = vr;
          }
          e();
        }
      } catch (vr) {
        if (vr && u && typeof vr.stack == "string") {
          for (var O = vr.stack.split(`
`), G = u.stack.split(`
`), re = O.length - 1, ie = G.length - 1; re >= 1 && ie >= 0 && O[re] !== G[ie]; )
            ie--;
          for (; re >= 1 && ie >= 0; re--, ie--)
            if (O[re] !== G[ie]) {
              if (re !== 1 || ie !== 1)
                do
                  if (re--, ie--, ie < 0 || O[re] !== G[ie]) {
                    var Ne = `
` + O[re].replace(" at new ", " at ");
                    return e.displayName && Ne.includes("<anonymous>") && (Ne = Ne.replace("<anonymous>", e.displayName)), typeof e == "function" && $A.set(e, Ne), Ne;
                  }
                while (re >= 1 && ie >= 0);
              break;
            }
        }
      } finally {
        fA = !1, lA.current = D, sA(), Error.prepareStackTrace = d;
      }
      var ut = e ? e.displayName || e.name : "", Ot = ut ? cA(ut) : "";
      return typeof e == "function" && $A.set(e, Ot), Ot;
    }
    function ti(e, r, i) {
      return ei(e, !0);
    }
    function ri(e, r, i) {
      return ei(e, !1);
    }
    function Hi(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Wn(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ei(e, Hi(e));
      if (typeof e == "string")
        return cA(e);
      switch (e) {
        case Yn:
          return cA("Suspense");
        case Vo:
          return cA("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case aA:
            return ri(e.render);
          case Go:
            return Wn(e.type, r, i);
          case qA: {
            var u = e, d = u._payload, D = u._init;
            try {
              return Wn(D(d), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var ni = {}, eo = T.ReactDebugCurrentFrame;
    function pn(e) {
      if (e) {
        var r = e._owner, i = Wn(e.type, e._source, r ? r.type : null);
        eo.setExtraStackFrame(i);
      } else
        eo.setExtraStackFrame(null);
    }
    function Ai(e, r, i, u, d) {
      {
        var D = Function.call.bind(Ae);
        for (var w in e)
          if (D(e, w)) {
            var O = void 0;
            try {
              if (typeof e[w] != "function") {
                var G = Error((u || "React class") + ": " + i + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              O = e[w](r, w, u, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              O = re;
            }
            O && !(O instanceof Error) && (pn(d), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", i, w, typeof O), pn(null)), O instanceof Error && !(O.message in ni) && (ni[O.message] = !0, pn(d), c("Failed %s type: %s", i, O.message), pn(null));
          }
      }
    }
    var oi;
    oi = {};
    var nn = {};
    Object.freeze(nn);
    function Fi(e, r) {
      {
        var i = e.contextTypes;
        if (!i)
          return nn;
        var u = {};
        for (var d in i)
          u[d] = r[d];
        {
          var D = yt(e) || "Unknown";
          Ai(i, u, "context", D);
        }
        return u;
      }
    }
    function vn(e, r, i, u) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var d = yt(r) || "Unknown";
            oi[d] || (oi[d] = !0, c("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return i;
        }
        var D = e.getChildContext();
        for (var w in D)
          if (!(w in u))
            throw new Error((yt(r) || "Unknown") + '.getChildContext(): key "' + w + '" is not defined in childContextTypes.');
        {
          var O = yt(r) || "Unknown";
          Ai(u, D, "child context", O);
        }
        return rr({}, i, D);
      }
    }
    var Dn;
    Dn = {};
    var ii = null, zr = null;
    function to(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function ro(e) {
      e.context._currentValue2 = e.value;
    }
    function dA(e, r) {
      if (e !== r) {
        to(e);
        var i = e.parent, u = r.parent;
        if (i === null) {
          if (u !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (u === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          dA(i, u);
        }
        ro(r);
      }
    }
    function ai(e) {
      to(e);
      var r = e.parent;
      r !== null && ai(r);
    }
    function MA(e) {
      var r = e.parent;
      r !== null && MA(r), ro(e);
    }
    function Wi(e, r) {
      to(e);
      var i = e.parent;
      if (i === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      i.depth === r.depth ? dA(i, r) : Wi(i, r);
    }
    function Vi(e, r) {
      var i = r.parent;
      if (i === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === i.depth ? dA(e, i) : Vi(e, i), ro(r);
    }
    function no(e) {
      var r = zr, i = e;
      r !== i && (r === null ? MA(i) : i === null ? ai(r) : r.depth === i.depth ? dA(r, i) : r.depth > i.depth ? Wi(r, i) : Vi(r, i), zr = i);
    }
    function gA(e, r) {
      var i;
      i = e._currentValue2, e._currentValue2 = r, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== Dn && c("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = Dn;
      var u = zr, d = {
        parent: u,
        depth: u === null ? 0 : u.depth + 1,
        context: e,
        parentValue: i,
        value: r
      };
      return zr = d, d;
    }
    function ui(e) {
      var r = zr;
      if (r === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      r.context !== e && c("The parent context is not the expected context. This is probably a bug in React.");
      {
        var i = r.parentValue;
        i === Pa ? r.context._currentValue2 = r.context._defaultValue : r.context._currentValue2 = i, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== Dn && c("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = Dn;
      }
      return zr = r.parent;
    }
    function Ba() {
      return zr;
    }
    function Vn(e) {
      var r = e._currentValue2;
      return r;
    }
    function Ao(e) {
      return e._reactInternals;
    }
    function si(e, r) {
      e._reactInternals = r;
    }
    var oo = {}, io = {}, hA, ao, Gn, yA, uo, Zn, so, lo, co;
    {
      hA = /* @__PURE__ */ new Set(), ao = /* @__PURE__ */ new Set(), Gn = /* @__PURE__ */ new Set(), so = /* @__PURE__ */ new Set(), yA = /* @__PURE__ */ new Set(), lo = /* @__PURE__ */ new Set(), co = /* @__PURE__ */ new Set();
      var Gi = /* @__PURE__ */ new Set();
      Zn = function(e, r) {
        if (!(e === null || typeof e == "function")) {
          var i = r + "_" + e;
          Gi.has(i) || (Gi.add(i), c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", r, e));
        }
      }, uo = function(e, r) {
        if (r === void 0) {
          var i = yt(e) || "Component";
          yA.has(i) || (yA.add(i), c("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      };
    }
    function Zi(e, r) {
      {
        var i = e.constructor, u = i && yt(i) || "ReactClass", d = u + "." + r;
        if (oo[d])
          return;
        c(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, r, r, u), oo[d] = !0;
      }
    }
    var Xi = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, r, i) {
        var u = Ao(e);
        u.queue === null ? Zi(e, "setState") : (u.queue.push(r), i != null && Zn(i, "setState"));
      },
      enqueueReplaceState: function(e, r, i) {
        var u = Ao(e);
        u.replace = !0, u.queue = [r], i != null && Zn(i, "setState");
      },
      enqueueForceUpdate: function(e, r) {
        var i = Ao(e);
        i.queue === null ? Zi(e, "forceUpdate") : r != null && Zn(r, "setState");
      }
    };
    function Ua(e, r, i, u, d) {
      var D = i(d, u);
      uo(r, D);
      var w = D == null ? u : rr({}, u, D);
      return w;
    }
    function Ra(e, r, i) {
      var u = nn, d = e.contextType;
      if ("contextType" in e) {
        var D = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === iA && d._context === void 0
        );
        if (!D && !co.has(e)) {
          co.add(e);
          var w = "";
          d === void 0 ? w = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? w = " However, it is set to a " + typeof d + "." : d.$$typeof === oA ? w = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? w = " Did you accidentally pass the Context.Consumer instead?" : w = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", c("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", yt(e) || "Component", w);
        }
      }
      typeof d == "object" && d !== null ? u = Vn(d) : u = i;
      var O = new e(r, u);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (O.state === null || O.state === void 0)) {
          var G = yt(e) || "Component";
          hA.has(G) || (hA.add(G), c("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", G, O.state === null ? "null" : "undefined", G));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof O.getSnapshotBeforeUpdate == "function") {
          var re = null, ie = null, Ne = null;
          if (typeof O.componentWillMount == "function" && O.componentWillMount.__suppressDeprecationWarning !== !0 ? re = "componentWillMount" : typeof O.UNSAFE_componentWillMount == "function" && (re = "UNSAFE_componentWillMount"), typeof O.componentWillReceiveProps == "function" && O.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? ie = "componentWillReceiveProps" : typeof O.UNSAFE_componentWillReceiveProps == "function" && (ie = "UNSAFE_componentWillReceiveProps"), typeof O.componentWillUpdate == "function" && O.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Ne = "componentWillUpdate" : typeof O.UNSAFE_componentWillUpdate == "function" && (Ne = "UNSAFE_componentWillUpdate"), re !== null || ie !== null || Ne !== null) {
            var ut = yt(e) || "Component", Ot = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Gn.has(ut) || (Gn.add(ut), c(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ut, Ot, re !== null ? `
  ` + re : "", ie !== null ? `
  ` + ie : "", Ne !== null ? `
  ` + Ne : ""));
          }
        }
      }
      return O;
    }
    function Ji(e, r, i) {
      {
        var u = yt(r) || "Component", d = e.render;
        d || (r.prototype && typeof r.prototype.render == "function" ? c("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : c("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && c("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && c("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), e.propTypes && c("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), e.contextType && c("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), e.contextTypes && c("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), r.contextType && r.contextTypes && !lo.has(r) && (lo.add(r), c("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof e.componentShouldUpdate == "function" && c("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), r.prototype && r.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && c("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", yt(r) || "A pure component"), typeof e.componentDidUnmount == "function" && c("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof e.componentDidReceiveProps == "function" && c("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof e.componentWillRecieveProps == "function" && c("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof e.UNSAFE_componentWillRecieveProps == "function" && c("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var D = e.props !== i;
        e.props !== void 0 && D && c("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), e.defaultProps && c("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !ao.has(r) && (ao.add(r), c("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", yt(r))), typeof e.getDerivedStateFromProps == "function" && c("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof e.getDerivedStateFromError == "function" && c("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof r.getSnapshotBeforeUpdate == "function" && c("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var w = e.state;
        w && (typeof w != "object" || I(w)) && c("%s.state: must be set to an object or null", u), typeof e.getChildContext == "function" && typeof r.childContextTypes != "object" && c("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function Ya(e, r) {
      var i = r.state;
      if (typeof r.componentWillMount == "function") {
        if (r.componentWillMount.__suppressDeprecationWarning !== !0) {
          var u = yt(e) || "Unknown";
          io[u] || (C(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            u
          ), io[u] = !0);
        }
        r.componentWillMount();
      }
      typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), i !== r.state && (c("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", yt(e) || "Component"), Xi.enqueueReplaceState(r, r.state, null));
    }
    function Ha(e, r, i, u) {
      if (e.queue !== null && e.queue.length > 0) {
        var d = e.queue, D = e.replace;
        if (e.queue = null, e.replace = !1, D && d.length === 1)
          r.state = d[0];
        else {
          for (var w = D ? d[0] : r.state, O = !0, G = D ? 1 : 0; G < d.length; G++) {
            var re = d[G], ie = typeof re == "function" ? re.call(r, w, i, u) : re;
            ie != null && (O ? (O = !1, w = rr({}, w, ie)) : rr(w, ie));
          }
          r.state = w;
        }
      } else
        e.queue = null;
    }
    function fo(e, r, i, u) {
      Ji(e, r, i);
      var d = e.state !== void 0 ? e.state : null;
      e.updater = Xi, e.props = i, e.state = d;
      var D = {
        queue: [],
        replace: !1
      };
      si(e, D);
      var w = r.contextType;
      if (typeof w == "object" && w !== null ? e.context = Vn(w) : e.context = u, e.state === i) {
        var O = yt(r) || "Component";
        so.has(O) || (so.add(O), c("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", O));
      }
      var G = r.getDerivedStateFromProps;
      typeof G == "function" && (e.state = Ua(e, r, G, d, i)), typeof r.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (Ya(r, e), Ha(D, e, i, u));
    }
    var Mo = {
      id: 1,
      overflow: ""
    };
    function Fa(e) {
      var r = e.overflow, i = e.id, u = i & ~Wa(i);
      return u.toString(32) + r;
    }
    function li(e, r, i) {
      var u = e.id, d = e.overflow, D = go(u) - 1, w = u & ~(1 << D), O = i + 1, G = go(r) + D;
      if (G > 30) {
        var re = D - D % 5, ie = (1 << re) - 1, Ne = (w & ie).toString(32), ut = w >> re, Ot = D - re, vr = go(r) + Ot, ya = O << Ot, pa = ya | ut, va = Ne + d;
        return {
          id: 1 << vr | pa,
          overflow: va
        };
      } else {
        var xo = O << D, Ku = xo | w, qu = d;
        return {
          id: 1 << G | Ku,
          overflow: qu
        };
      }
    }
    function go(e) {
      return 32 - Va(e);
    }
    function Wa(e) {
      return 1 << go(e) - 1;
    }
    var Va = Math.clz32 ? Math.clz32 : Fr, Ga = Math.log, Za = Math.LN2;
    function Fr(e) {
      var r = e >>> 0;
      return r === 0 ? 32 : 31 - (Ga(r) / Za | 0) | 0;
    }
    function ci(e, r) {
      return e === r && (e !== 0 || 1 / e === 1 / r) || e !== e && r !== r;
    }
    var ho = typeof Object.is == "function" ? Object.is : ci, Be = null, Ln = null, Nn = null, Je = null, hr = !1, jn = !1, yo = 0, kt = null, Wr = 0, In = 25, br = !1, wn;
    function Vr() {
      if (Be === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return br && c("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Be;
    }
    function Xa(e, r) {
      if (r === null)
        return c("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", wn), !1;
      e.length !== r.length && c(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, wn, "[" + e.join(", ") + "]", "[" + r.join(", ") + "]");
      for (var i = 0; i < r.length && i < e.length; i++)
        if (!ho(e[i], r[i]))
          return !1;
      return !0;
    }
    function Ki() {
      if (Wr > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function po() {
      return Je === null ? Nn === null ? (hr = !1, Nn = Je = Ki()) : (hr = !0, Je = Nn) : Je.next === null ? (hr = !1, Je = Je.next = Ki()) : (hr = !0, Je = Je.next), Je;
    }
    function fi(e, r) {
      Be = r, Ln = e, br = !1, yo = 0;
    }
    function Ja(e, r, i, u) {
      for (; jn; )
        jn = !1, yo = 0, Wr += 1, Je = null, i = e(r, u);
      return pA(), i;
    }
    function qi() {
      var e = yo !== 0;
      return e;
    }
    function pA() {
      br = !1, Be = null, Ln = null, jn = !1, Nn = null, Wr = 0, kt = null, Je = null;
    }
    function Ka(e) {
      return br && c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Vn(e);
    }
    function _i(e) {
      return wn = "useContext", Vr(), Vn(e);
    }
    function vo(e, r) {
      return typeof r == "function" ? r(e) : r;
    }
    function qa(e) {
      return wn = "useState", $i(
        vo,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function $i(e, r, i) {
      if (e !== vo && (wn = "useReducer"), Be = Vr(), Je = po(), hr) {
        var u = Je.queue, d = u.dispatch;
        if (kt !== null) {
          var D = kt.get(u);
          if (D !== void 0) {
            kt.delete(u);
            var w = Je.memoizedState, O = D;
            do {
              var G = O.action;
              br = !0, w = e(w, G), br = !1, O = O.next;
            } while (O !== null);
            return Je.memoizedState = w, [w, d];
          }
        }
        return [Je.memoizedState, d];
      } else {
        br = !0;
        var re;
        e === vo ? re = typeof r == "function" ? r() : r : re = i !== void 0 ? i(r) : r, br = !1, Je.memoizedState = re;
        var ie = Je.queue = {
          last: null,
          dispatch: null
        }, Ne = ie.dispatch = eu.bind(null, Be, ie);
        return [Je.memoizedState, Ne];
      }
    }
    function ea(e, r) {
      Be = Vr(), Je = po();
      var i = r === void 0 ? null : r;
      if (Je !== null) {
        var u = Je.memoizedState;
        if (u !== null && i !== null) {
          var d = u[1];
          if (Xa(i, d))
            return u[0];
        }
      }
      br = !0;
      var D = e();
      return br = !1, Je.memoizedState = [D, i], D;
    }
    function _a(e) {
      Be = Vr(), Je = po();
      var r = Je.memoizedState;
      if (r === null) {
        var i = {
          current: e
        };
        return Object.seal(i), Je.memoizedState = i, i;
      } else
        return r;
    }
    function $a(e, r) {
      wn = "useLayoutEffect", c("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function eu(e, r, i) {
      if (Wr >= In)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === Be) {
        jn = !0;
        var u = {
          action: i,
          next: null
        };
        kt === null && (kt = /* @__PURE__ */ new Map());
        var d = kt.get(r);
        if (d === void 0)
          kt.set(r, u);
        else {
          for (var D = d; D.next !== null; )
            D = D.next;
          D.next = u;
        }
      }
    }
    function tu(e, r) {
      return ea(function() {
        return e;
      }, r);
    }
    function ru(e, r, i) {
      return Vr(), r(e._source);
    }
    function nu(e, r, i) {
      if (i === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return i();
    }
    function Au(e) {
      return Vr(), e;
    }
    function Do() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function ta() {
      return Vr(), [!1, Do];
    }
    function di() {
      var e = Ln, r = Fa(e.treeContext), i = DA;
      if (i === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var u = yo++;
      return Bt(i, r, u);
    }
    function vA() {
    }
    var ra = {
      readContext: Ka,
      useContext: _i,
      useMemo: ea,
      useReducer: $i,
      useRef: _a,
      useState: qa,
      useInsertionEffect: vA,
      useLayoutEffect: $a,
      useCallback: tu,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: vA,
      // Effects are not run in the server environment.
      useEffect: vA,
      // Debugging effect
      useDebugValue: vA,
      useDeferredValue: Au,
      useTransition: ta,
      useId: di,
      // Subscriptions are not setup in a server environment.
      useMutableSource: ru,
      useSyncExternalStore: nu
    }, DA = null;
    function Lo(e) {
      DA = e;
    }
    function Mi(e) {
      try {
        var r = "", i = e;
        do {
          switch (i.tag) {
            case 0:
              r += cA(i.type, null, null);
              break;
            case 1:
              r += ri(i.type, null, null);
              break;
            case 2:
              r += ti(i.type, null, null);
              break;
          }
          i = i.parent;
        } while (i);
        return r;
      } catch (u) {
        return `
Error generating stack: ` + u.message + `
` + u.stack;
      }
    }
    var An = T.ReactCurrentDispatcher, No = T.ReactDebugCurrentFrame, jo = 0, Tn = 1, na = 2, gi = 3, Sn = 4, ou = 0, Aa = 1, kr = 2, iu = 12800;
    function au(e) {
      return console.error(e), null;
    }
    function LA() {
    }
    function hi(e, r, i, u, d, D, w, O, G) {
      var re = [], ie = /* @__PURE__ */ new Set(), Ne = {
        destination: null,
        responseState: r,
        progressiveChunkSize: u === void 0 ? iu : u,
        status: ou,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: ie,
        pingedTasks: re,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: d === void 0 ? au : d,
        onAllReady: D === void 0 ? LA : D,
        onShellReady: w === void 0 ? LA : w,
        onShellError: O === void 0 ? LA : O,
        onFatalError: G === void 0 ? LA : G
      }, ut = on(
        Ne,
        0,
        null,
        i,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      ut.parentFlushed = !0;
      var Ot = NA(Ne, e, null, ut, ie, nn, ii, Mo);
      return re.push(Ot), Ne;
    }
    function Io(e, r) {
      var i = e.pingedTasks;
      i.push(r), i.length === 1 && W(function() {
        return ga(e);
      });
    }
    function Gr(e, r) {
      return {
        id: dr,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: r,
        errorDigest: null
      };
    }
    function NA(e, r, i, u, d, D, w, O) {
      e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
      var G = {
        node: r,
        ping: function() {
          return Io(e, G);
        },
        blockedBoundary: i,
        blockedSegment: u,
        abortSet: d,
        legacyContext: D,
        context: w,
        treeContext: O
      };
      return G.componentStack = null, d.add(G), G;
    }
    function on(e, r, i, u, d, D) {
      return {
        status: jo,
        id: -1,
        // lazily assigned later
        index: r,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: u,
        boundary: i,
        lastPushedText: d,
        textEmbedded: D
      };
    }
    var Or = null;
    function yi() {
      return Or === null || Or.componentStack === null ? "" : Mi(Or.componentStack);
    }
    function yr(e, r) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: r
      };
    }
    function Xn(e, r) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: r
      };
    }
    function pi(e, r) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: r
      };
    }
    function pr(e) {
      e.componentStack === null ? c("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var an = null;
    function vi(e, r) {
      {
        var i;
        typeof r == "string" ? i = r : r && typeof r.message == "string" ? i = r.message : i = String(r);
        var u = an || yi();
        an = null, e.errorMessage = i, e.errorComponentStack = u;
      }
    }
    function jA(e, r) {
      var i = e.onError(r);
      if (i != null && typeof i != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
      return i;
    }
    function wo(e, r) {
      var i = e.onShellError;
      i(r);
      var u = e.onFatalError;
      u(r), e.destination !== null ? (e.status = kr, $(e.destination, r)) : (e.status = Aa, e.fatalError = r);
    }
    function oa(e, r, i) {
      yr(r, "Suspense");
      var u = r.blockedBoundary, d = r.blockedSegment, D = i.fallback, w = i.children, O = /* @__PURE__ */ new Set(), G = Gr(e, O), re = d.chunks.length, ie = on(
        e,
        re,
        G,
        d.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      d.children.push(ie), d.lastPushedText = !1;
      var Ne = on(
        e,
        0,
        null,
        d.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      Ne.parentFlushed = !0, r.blockedBoundary = G, r.blockedSegment = Ne;
      try {
        if (To(e, r, w), bi(Ne.chunks, e.responseState, Ne.lastPushedText, Ne.textEmbedded), Ne.status = Tn, TA(G, Ne), G.pendingTasks === 0) {
          pr(r);
          return;
        }
      } catch (Ot) {
        Ne.status = Sn, G.forceClientRender = !0, G.errorDigest = jA(e, Ot), vi(G, Ot);
      } finally {
        r.blockedBoundary = u, r.blockedSegment = d;
      }
      var ut = NA(e, D, u, ie, O, r.legacyContext, r.context, r.treeContext);
      ut.componentStack = r.componentStack, e.pingedTasks.push(ut), pr(r);
    }
    function ia(e, r, i, u) {
      yr(r, i);
      var d = r.blockedSegment, D = Cr(d.chunks, i, u, e.responseState, d.formatContext);
      d.lastPushedText = !1;
      var w = d.formatContext;
      d.formatContext = Kr(w, i, u), To(e, r, D), d.formatContext = w, $t(d.chunks, i), d.lastPushedText = !1, pr(r);
    }
    function uu(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Di(e, r, i, u, d) {
      var D = {};
      fi(r, D);
      var w = i(u, d);
      return Ja(i, u, w, d);
    }
    function IA(e, r, i, u, d) {
      var D = i.render();
      i.props !== d && (Ii || c("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", yt(u) || "a component"), Ii = !0);
      {
        var w = u.childContextTypes;
        if (w != null) {
          var O = r.legacyContext, G = vn(i, u, O, w);
          r.legacyContext = G, Ar(e, r, D), r.legacyContext = O;
          return;
        }
      }
      Ar(e, r, D);
    }
    function aa(e, r, i, u) {
      pi(r, i);
      var d = Fi(i, r.legacyContext), D = Ra(i, u, d);
      fo(D, i, u, d), IA(e, r, D, i, u), pr(r);
    }
    var Li = {}, wA = {}, Ni = {}, ji = {}, Ii = !1, ua = !1, sa = !1, wi = !1;
    function su(e, r, i, u) {
      var d;
      if (d = Fi(i, r.legacyContext), Xn(r, i), i.prototype && typeof i.prototype.render == "function") {
        var D = yt(i) || "Unknown";
        Li[D] || (c("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", D, D), Li[D] = !0);
      }
      var w = Di(e, r, i, u, d), O = qi();
      if (typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0) {
        var G = yt(i) || "Unknown";
        wA[G] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", G, G, G), wA[G] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0
      ) {
        {
          var re = yt(i) || "Unknown";
          wA[re] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", re, re, re), wA[re] = !0);
        }
        fo(w, i, u, d), IA(e, r, w, i, u);
      } else if (lu(i), O) {
        var ie = r.treeContext, Ne = 1, ut = 0;
        r.treeContext = li(ie, Ne, ut);
        try {
          Ar(e, r, w);
        } finally {
          r.treeContext = ie;
        }
      } else
        Ar(e, r, w);
      pr(r);
    }
    function lu(e) {
      {
        if (e && e.childContextTypes && c("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), typeof e.getDerivedStateFromProps == "function") {
          var r = yt(e) || "Unknown";
          ji[r] || (c("%s: Function components do not support getDerivedStateFromProps.", r), ji[r] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var i = yt(e) || "Unknown";
          Ni[i] || (c("%s: Function components do not support contextType.", i), Ni[i] = !0);
        }
      }
    }
    function la(e, r) {
      if (e && e.defaultProps) {
        var i = rr({}, r), u = e.defaultProps;
        for (var d in u)
          i[d] === void 0 && (i[d] = u[d]);
        return i;
      }
      return r;
    }
    function cu(e, r, i, u, d) {
      Xn(r, i.render);
      var D = Di(e, r, i.render, u, d), w = qi();
      if (w) {
        var O = r.treeContext, G = 1, re = 0;
        r.treeContext = li(O, G, re);
        try {
          Ar(e, r, D);
        } finally {
          r.treeContext = O;
        }
      } else
        Ar(e, r, D);
      pr(r);
    }
    function fu(e, r, i, u, d) {
      var D = i.type, w = la(D, u);
      Si(e, r, D, w, d);
    }
    function Ti(e, r, i, u) {
      i._context === void 0 ? i !== i.Consumer && (wi || (wi = !0, c("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var d = u.children;
      typeof d != "function" && c("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var D = Vn(i), w = d(D);
      Ar(e, r, w);
    }
    function du(e, r, i, u) {
      var d = i._context, D = u.value, w = u.children, O;
      O = r.context, r.context = gA(d, D), Ar(e, r, w), r.context = ui(d), O !== r.context && c("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function nr(e, r, i, u, d) {
      yr(r, "Lazy");
      var D = i._payload, w = i._init, O = w(D), G = la(O, u);
      Si(e, r, O, G, d), pr(r);
    }
    function Si(e, r, i, u, d) {
      if (typeof i == "function")
        if (uu(i)) {
          aa(e, r, i, u);
          return;
        } else {
          su(e, r, i, u);
          return;
        }
      if (typeof i == "string") {
        ia(e, r, i, u);
        return;
      }
      switch (i) {
        case Qa:
        case Qi:
        case JA:
        case KA:
        case XA: {
          Ar(e, r, u.children);
          return;
        }
        case Vo: {
          yr(r, "SuspenseList"), Ar(e, r, u.children), pr(r);
          return;
        }
        case Oa:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Yn: {
          oa(e, r, u);
          return;
        }
      }
      if (typeof i == "object" && i !== null)
        switch (i.$$typeof) {
          case aA: {
            cu(e, r, i, u, d);
            return;
          }
          case Go: {
            fu(e, r, i, u, d);
            return;
          }
          case oA: {
            du(e, r, i, u);
            return;
          }
          case iA: {
            Ti(e, r, i, u);
            return;
          }
          case qA: {
            nr(e, r, i, u);
            return;
          }
        }
      var D = "";
      throw (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (i == null ? i : typeof i) + "." + D));
    }
    function ca(e, r) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (ua || c("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ua = !0), e.entries === r && (sa || c("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), sa = !0);
    }
    function Ar(e, r, i) {
      try {
        return mi(e, r, i);
      } catch (u) {
        throw typeof u == "object" && u !== null && typeof u.then == "function" || (an = an !== null ? an : yi()), u;
      }
    }
    function mi(e, r, i) {
      if (r.node = i, typeof i == "object" && i !== null) {
        switch (i.$$typeof) {
          case Oi: {
            var u = i, d = u.type, D = u.props, w = u.ref;
            Si(e, r, d, D, w);
            return;
          }
          case Wo:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case qA: {
            var O = i, G = O._payload, re = O._init, ie;
            try {
              ie = re(G);
            } catch (xo) {
              throw typeof xo == "object" && xo !== null && typeof xo.then == "function" && yr(r, "Lazy"), xo;
            }
            Ar(e, r, ie);
            return;
          }
        }
        if (I(i)) {
          fa(e, r, i);
          return;
        }
        var Ne = vt(i);
        if (Ne) {
          ca(i, Ne);
          var ut = Ne.call(i);
          if (ut) {
            var Ot = ut.next();
            if (!Ot.done) {
              var vr = [];
              do
                vr.push(Ot.value), Ot = ut.next();
              while (!Ot.done);
              fa(e, r, vr);
              return;
            }
            return;
          }
        }
        var ya = Object.prototype.toString.call(i);
        throw new Error("Objects are not valid as a React child (found: " + (ya === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : ya) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof i == "string") {
        var pa = r.blockedSegment;
        pa.lastPushedText = zi(r.blockedSegment.chunks, i, e.responseState, pa.lastPushedText);
        return;
      }
      if (typeof i == "number") {
        var va = r.blockedSegment;
        va.lastPushedText = zi(r.blockedSegment.chunks, "" + i, e.responseState, va.lastPushedText);
        return;
      }
      typeof i == "function" && c("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function fa(e, r, i) {
      for (var u = i.length, d = 0; d < u; d++) {
        var D = r.treeContext;
        r.treeContext = li(D, u, d);
        try {
          To(e, r, i[d]);
        } finally {
          r.treeContext = D;
        }
      }
    }
    function Mu(e, r, i) {
      var u = r.blockedSegment, d = u.chunks.length, D = on(
        e,
        d,
        null,
        u.formatContext,
        // Adopt the parent segment's leading text embed
        u.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      u.children.push(D), u.lastPushedText = !1;
      var w = NA(e, r.node, r.blockedBoundary, D, r.abortSet, r.legacyContext, r.context, r.treeContext);
      r.componentStack !== null && (w.componentStack = r.componentStack.parent);
      var O = w.ping;
      i.then(O, O);
    }
    function To(e, r, i) {
      var u = r.blockedSegment.formatContext, d = r.legacyContext, D = r.context, w = null;
      w = r.componentStack;
      try {
        return Ar(e, r, i);
      } catch (O) {
        if (pA(), typeof O == "object" && O !== null && typeof O.then == "function") {
          Mu(e, r, O), r.blockedSegment.formatContext = u, r.legacyContext = d, r.context = D, no(D), r.componentStack = w;
          return;
        } else
          throw r.blockedSegment.formatContext = u, r.legacyContext = d, r.context = D, no(D), r.componentStack = w, O;
      }
    }
    function So(e, r, i, u) {
      var d = jA(e, u);
      if (r === null ? wo(e, u) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, r.errorDigest = d, vi(r, u), r.parentFlushed && e.clientRenderedBoundaries.push(r))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var D = e.onAllReady;
        D();
      }
    }
    function da(e) {
      var r = this, i = e.blockedBoundary, u = e.blockedSegment;
      u.status = gi, SA(r, i, u);
    }
    function Ma(e, r, i) {
      var u = e.blockedBoundary, d = e.blockedSegment;
      if (d.status = gi, u === null)
        r.allPendingTasks--, r.status !== kr && (r.status = kr, r.destination !== null && B(r.destination));
      else {
        if (u.pendingTasks--, !u.forceClientRender) {
          u.forceClientRender = !0;
          var D = i === void 0 ? new Error("The render was aborted by the server without a reason.") : i;
          u.errorDigest = r.onError(D);
          {
            var w = "The server did not finish this Suspense boundary: ";
            D && typeof D.message == "string" ? D = w + D.message : D = w + String(D);
            var O = Or;
            Or = e;
            try {
              vi(u, D);
            } finally {
              Or = O;
            }
          }
          u.parentFlushed && r.clientRenderedBoundaries.push(u);
        }
        if (u.fallbackAbortableTasks.forEach(function(re) {
          return Ma(re, r, i);
        }), u.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0) {
          var G = r.onAllReady;
          G();
        }
      }
    }
    function TA(e, r) {
      if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
        var i = r.children[0];
        i.id = r.id, i.parentFlushed = !0, i.status === Tn && TA(e, i);
      } else {
        var u = e.completedSegments;
        u.push(r);
      }
    }
    function SA(e, r, i) {
      if (r === null) {
        if (i.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = i;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = LA;
          var u = e.onShellReady;
          u();
        }
      } else if (r.pendingTasks--, !r.forceClientRender) {
        if (r.pendingTasks === 0)
          i.parentFlushed && i.status === Tn && TA(r, i), r.parentFlushed && e.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(da, e), r.fallbackAbortableTasks.clear();
        else if (i.parentFlushed && i.status === Tn) {
          TA(r, i);
          var d = r.completedSegments;
          d.length === 1 && r.parentFlushed && e.partialBoundaries.push(r);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var D = e.onAllReady;
        D();
      }
    }
    function mo(e, r) {
      var i = r.blockedSegment;
      if (i.status === jo) {
        no(r.context);
        var u = null;
        u = Or, Or = r;
        try {
          Ar(e, r, r.node), bi(i.chunks, e.responseState, i.lastPushedText, i.textEmbedded), r.abortSet.delete(r), i.status = Tn, SA(e, r.blockedBoundary, i);
        } catch (D) {
          if (pA(), typeof D == "object" && D !== null && typeof D.then == "function") {
            var d = r.ping;
            D.then(d, d);
          } else
            r.abortSet.delete(r), i.status = Sn, So(e, r.blockedBoundary, i, D);
        } finally {
          Or = u;
        }
      }
    }
    function ga(e) {
      if (e.status !== kr) {
        var r = Ba(), i = An.current;
        An.current = ra;
        var u;
        u = No.getCurrentStack, No.getCurrentStack = yi;
        var d = DA;
        Lo(e.responseState);
        try {
          var D = e.pingedTasks, w;
          for (w = 0; w < D.length; w++) {
            var O = D[w];
            mo(e, O);
          }
          D.splice(0, w), e.destination !== null && Co(e, e.destination);
        } catch (G) {
          jA(e, G), wo(e, G);
        } finally {
          Lo(d), An.current = i, No.getCurrentStack = u, i === ra && no(r);
        }
      }
    }
    function mA(e, r, i) {
      switch (i.parentFlushed = !0, i.status) {
        case jo: {
          var u = i.id = e.nextSegmentId++;
          return i.lastPushedText = !1, i.textEmbedded = !1, OA(r, e.responseState, u);
        }
        case Tn: {
          i.status = na;
          for (var d = !0, D = i.chunks, w = 0, O = i.children, G = 0; G < O.length; G++) {
            for (var re = O[G]; w < re.index; w++)
              N(r, D[w]);
            d = EA(e, r, re);
          }
          for (; w < D.length - 1; w++)
            N(r, D[w]);
          return w < D.length && (d = m(r, D[w])), d;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function EA(e, r, i) {
      var u = i.boundary;
      if (u === null)
        return mA(e, r, i);
      if (u.parentFlushed = !0, u.forceClientRender)
        return gr(r, e.responseState, u.errorDigest, u.errorMessage, u.errorComponentStack), mA(e, r, i), ki(r, e.responseState);
      if (u.pendingTasks > 0) {
        u.rootSegmentID = e.nextSegmentId++, u.completedSegments.length > 0 && e.partialBoundaries.push(u);
        var d = u.id = Mr(e.responseState);
        return rn(r, e.responseState, d), mA(e, r, i), rA(r, e.responseState);
      } else {
        if (u.byteSize > e.progressiveChunkSize)
          return u.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(u), rn(r, e.responseState, u.id), mA(e, r, i), rA(r, e.responseState);
        Fo(r, e.responseState);
        var D = u.completedSegments;
        if (D.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var w = D[0];
        return EA(e, r, w), ka(r, e.responseState);
      }
    }
    function gu(e, r, i) {
      return xa(r, e.responseState, i.id, i.errorDigest, i.errorMessage, i.errorComponentStack);
    }
    function Ei(e, r, i) {
      return x(r, e.responseState, i.formatContext, i.id), EA(e, r, i), F(r, i.formatContext);
    }
    function Eo(e, r, i) {
      for (var u = i.completedSegments, d = 0; d < u.length; d++) {
        var D = u[d];
        ha(e, r, i, D);
      }
      return u.length = 0, Ta(r, e.responseState, i.id, i.rootSegmentID);
    }
    function hu(e, r, i) {
      for (var u = i.completedSegments, d = 0; d < u.length; d++) {
        var D = u[d];
        if (!ha(e, r, i, D))
          return d++, u.splice(0, d), !1;
      }
      return u.splice(0, d), !0;
    }
    function ha(e, r, i, u) {
      if (u.status === na)
        return !0;
      var d = u.id;
      if (d === -1) {
        var D = u.id = i.rootSegmentID;
        if (D === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Ei(e, r, u);
      } else
        return Ei(e, r, u), tr(r, e.responseState, d);
    }
    function Co(e, r) {
      try {
        var i = e.completedRootSegment;
        i !== null && e.pendingRootTasks === 0 && (EA(e, r, i), e.completedRootSegment = null, _n(r, e.responseState));
        var u = e.clientRenderedBoundaries, d;
        for (d = 0; d < u.length; d++) {
          var D = u[d];
          if (!gu(e, r, D)) {
            e.destination = null, d++, u.splice(0, d);
            return;
          }
        }
        u.splice(0, d);
        var w = e.completedBoundaries;
        for (d = 0; d < w.length; d++) {
          var O = w[d];
          if (!Eo(e, r, O)) {
            e.destination = null, d++, w.splice(0, d);
            return;
          }
        }
        w.splice(0, d);
        var G = e.partialBoundaries;
        for (d = 0; d < G.length; d++) {
          var re = G[d];
          if (!hu(e, r, re)) {
            e.destination = null, d++, G.splice(0, d);
            return;
          }
        }
        G.splice(0, d);
        var ie = e.completedBoundaries;
        for (d = 0; d < ie.length; d++) {
          var Ne = ie[d];
          if (!Eo(e, r, Ne)) {
            e.destination = null, d++, ie.splice(0, d);
            return;
          }
        }
        ie.splice(0, d);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && c("There was still abortable task at the root when we closed. This is a bug in React."), B(r));
      }
    }
    function yu(e) {
      W(function() {
        return ga(e);
      });
    }
    function t(e, r) {
      if (e.status === Aa) {
        e.status = kr, $(r, e.fatalError);
        return;
      }
      if (e.status !== kr && e.destination === null) {
        e.destination = r;
        try {
          Co(e, r);
        } catch (i) {
          jA(e, i), wo(e, i);
        }
      }
    }
    function n(e, r) {
      try {
        var i = e.abortableTasks;
        i.forEach(function(u) {
          return Ma(u, e, r);
        }), i.clear(), e.destination !== null && Co(e, e.destination);
      } catch (u) {
        jA(e, u), wo(e, u);
      }
    }
    function a() {
    }
    function f(e, r, i, u) {
      var d = !1, D = null, w = "", O = {
        push: function(Ne) {
          return Ne !== null && (w += Ne), !0;
        },
        destroy: function(Ne) {
          d = !0, D = Ne;
        }
      }, G = !1;
      function re() {
        G = !0;
      }
      var ie = hi(e, ba(i, r ? r.identifierPrefix : void 0), Ho(), 1 / 0, a, void 0, re, void 0, void 0);
      if (yu(ie), n(ie, u), t(ie, O), d)
        throw D;
      if (!G)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return w;
    }
    function y(e, r) {
      return f(e, r, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function L(e, r) {
      return f(e, r, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function S() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function Q() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    xA.renderToNodeStream = S, xA.renderToStaticMarkup = L, xA.renderToStaticNodeStream = Q, xA.renderToString = y, xA.version = g;
  }()), xA;
}
var La = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qu;
function zs() {
  return Qu || (Qu = 1, process.env.NODE_ENV !== "production" && function() {
    var j = zo, g = "18.2.0", T = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(t) {
      {
        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), f = 1; f < n; f++)
          a[f - 1] = arguments[f];
        P("warn", t, a);
      }
    }
    function c(t) {
      {
        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), f = 1; f < n; f++)
          a[f - 1] = arguments[f];
        P("error", t, a);
      }
    }
    function P(t, n, a) {
      {
        var f = T.ReactDebugCurrentFrame, y = f.getStackAddendum();
        y !== "" && (n += "%s", a = a.concat([y]));
        var L = a.map(function(S) {
          return String(S);
        });
        L.unshift("Warning: " + n), Function.prototype.apply.call(console[t], console, L);
      }
    }
    function W(t) {
      t();
    }
    var H = 512, N = null, m = 0;
    function R(t) {
      N = new Uint8Array(H), m = 0;
    }
    function B(t, n) {
      if (n.length !== 0) {
        if (n.length > H) {
          m > 0 && (t.enqueue(new Uint8Array(N.buffer, 0, m)), N = new Uint8Array(H), m = 0), t.enqueue(n);
          return;
        }
        var a = n, f = N.length - m;
        f < a.length && (f === 0 ? t.enqueue(N) : (N.set(a.subarray(0, f), m), t.enqueue(N), a = a.subarray(f)), N = new Uint8Array(H), m = 0), N.set(a, m), m += a.length;
      }
    }
    function _(t, n) {
      return B(t, n), !0;
    }
    function he(t) {
      N && m > 0 && (t.enqueue(new Uint8Array(N.buffer, 0, m)), N = null, m = 0);
    }
    function $(t) {
      t.close();
    }
    var te = new TextEncoder();
    function V(t) {
      return te.encode(t);
    }
    function k(t) {
      return te.encode(t);
    }
    function ee(t, n) {
      typeof t.error == "function" ? t.error(n) : t.close();
    }
    function le(t) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, a = n && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return a;
      }
    }
    function ye(t) {
      try {
        return Ae(t), !1;
      } catch {
        return !0;
      }
    }
    function Ae(t) {
      return "" + t;
    }
    function pe(t, n) {
      if (ye(t))
        return c("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", n, le(t)), Ae(t);
    }
    function ce(t, n) {
      if (ye(t))
        return c("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", n, le(t)), Ae(t);
    }
    function Xe(t) {
      if (ye(t))
        return c("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", le(t)), Ae(t);
    }
    var ve = Object.prototype.hasOwnProperty, je = 0, ze = 1, we = 2, Ke = 3, De = 4, Ue = 5, _e = 6, st = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", jt = st + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", lt = new RegExp("^[" + st + "][" + jt + "]*$"), Lt = {}, Ye = {};
    function He(t) {
      return ve.call(Ye, t) ? !0 : ve.call(Lt, t) ? !1 : lt.test(t) ? (Ye[t] = !0, !0) : (Lt[t] = !0, c("Invalid attribute name: `%s`", t), !1);
    }
    function Ct(t, n, a, f) {
      if (a !== null && a.type === je)
        return !1;
      switch (typeof n) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (f)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var y = t.toLowerCase().slice(0, 5);
          return y !== "data-" && y !== "aria-";
        }
        default:
          return !1;
      }
    }
    function wt(t) {
      return be.hasOwnProperty(t) ? be[t] : null;
    }
    function Ge(t, n, a, f, y, L, S) {
      this.acceptsBooleans = n === we || n === Ke || n === De, this.attributeName = f, this.attributeNamespace = y, this.mustUseProperty = a, this.propertyName = t, this.type = n, this.sanitizeURL = L, this.removeEmptyString = S;
    }
    var be = {}, Qe = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Qe.forEach(function(t) {
      be[t] = new Ge(
        t,
        je,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
      var n = t[0], a = t[1];
      be[n] = new Ge(
        n,
        ze,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
      be[t] = new Ge(
        t,
        we,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
      be[t] = new Ge(
        t,
        we,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(t) {
      be[t] = new Ge(
        t,
        Ke,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      be[t] = new Ge(
        t,
        Ke,
        !0,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      be[t] = new Ge(
        t,
        De,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      be[t] = new Ge(
        t,
        _e,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(t) {
      be[t] = new Ge(
        t,
        Ue,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Oe = /[\-\:]([a-z])/g, ke = function(t) {
      return t[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      var n = t.replace(Oe, ke);
      be[n] = new Ge(
        n,
        ze,
        !1,
        // mustUseProperty
        t,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      var n = t.replace(Oe, ke);
      be[n] = new Ge(
        n,
        ze,
        !1,
        // mustUseProperty
        t,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      var n = t.replace(Oe, ke);
      be[n] = new Ge(
        n,
        ze,
        !1,
        // mustUseProperty
        t,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(t) {
      be[t] = new Ge(
        t,
        ze,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var pt = "xlinkHref";
    be[pt] = new Ge(
      "xlinkHref",
      ze,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(t) {
      be[t] = new Ge(
        t,
        ze,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Ze = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Tt(t, n) {
      return t + n.charAt(0).toUpperCase() + n.substring(1);
    }
    var ct = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ze).forEach(function(t) {
      ct.forEach(function(n) {
        Ze[Tt(n, t)] = Ze[t];
      });
    });
    var it = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function xt(t, n) {
      it[n.type] || n.onChange || n.onInput || n.readOnly || n.disabled || n.value == null || c("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), n.onChange || n.readOnly || n.disabled || n.checked == null || c("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Nt(t, n) {
      if (t.indexOf("-") === -1)
        return typeof n.is == "string";
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var or = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, It = {}, Qt = new RegExp("^(aria)-[" + jt + "]*$"), Zt = new RegExp("^(aria)[A-Z][" + jt + "]*$");
    function Ir(t, n) {
      {
        if (ve.call(It, n) && It[n])
          return !0;
        if (Zt.test(n)) {
          var a = "aria-" + n.slice(4).toLowerCase(), f = or.hasOwnProperty(a) ? a : null;
          if (f == null)
            return c("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", n), It[n] = !0, !0;
          if (n !== f)
            return c("Invalid ARIA attribute `%s`. Did you mean `%s`?", n, f), It[n] = !0, !0;
        }
        if (Qt.test(n)) {
          var y = n.toLowerCase(), L = or.hasOwnProperty(y) ? y : null;
          if (L == null)
            return It[n] = !0, !1;
          if (n !== L)
            return c("Unknown ARIA attribute `%s`. Did you mean `%s`?", n, L), It[n] = !0, !0;
        }
      }
      return !0;
    }
    function St(t, n) {
      {
        var a = [];
        for (var f in n) {
          var y = Ir(t, f);
          y || a.push(f);
        }
        var L = a.map(function(S) {
          return "`" + S + "`";
        }).join(", ");
        a.length === 1 ? c("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", L, t) : a.length > 1 && c("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", L, t);
      }
    }
    function Dt(t, n) {
      Nt(t, n) || St(t, n);
    }
    var $e = !1;
    function ir(t, n) {
      {
        if (t !== "input" && t !== "textarea" && t !== "select")
          return;
        n != null && n.value === null && !$e && ($e = !0, t === "select" && n.multiple ? c("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", t) : c("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", t));
      }
    }
    var ar = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Yt = function() {
    };
    {
      var et = {}, Xt = /^on./, ur = /^on[^A-Z]/, Jt = new RegExp("^(aria)-[" + jt + "]*$"), sr = new RegExp("^(aria)[A-Z][" + jt + "]*$");
      Yt = function(t, n, a, f) {
        if (ve.call(et, n) && et[n])
          return !0;
        var y = n.toLowerCase();
        if (y === "onfocusin" || y === "onfocusout")
          return c("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), et[n] = !0, !0;
        if (f != null) {
          var L = f.registrationNameDependencies, S = f.possibleRegistrationNames;
          if (L.hasOwnProperty(n))
            return !0;
          var Q = S.hasOwnProperty(y) ? S[y] : null;
          if (Q != null)
            return c("Invalid event handler property `%s`. Did you mean `%s`?", n, Q), et[n] = !0, !0;
          if (Xt.test(n))
            return c("Unknown event handler property `%s`. It will be ignored.", n), et[n] = !0, !0;
        } else if (Xt.test(n))
          return ur.test(n) && c("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", n), et[n] = !0, !0;
        if (Jt.test(n) || sr.test(n))
          return !0;
        if (y === "innerhtml")
          return c("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), et[n] = !0, !0;
        if (y === "aria")
          return c("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), et[n] = !0, !0;
        if (y === "is" && a !== null && a !== void 0 && typeof a != "string")
          return c("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), et[n] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return c("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", n), et[n] = !0, !0;
        var e = wt(n), r = e !== null && e.type === je;
        if (ar.hasOwnProperty(y)) {
          var i = ar[y];
          if (i !== n)
            return c("Invalid DOM property `%s`. Did you mean `%s`?", n, i), et[n] = !0, !0;
        } else if (!r && n !== y)
          return c("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", n, y), et[n] = !0, !0;
        return typeof a == "boolean" && Ct(n, a, e, !1) ? (a ? c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, n, n, a, n) : c('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, n, n, a, n, n, n), et[n] = !0, !0) : r ? !0 : Ct(n, a, e, !1) ? (et[n] = !0, !1) : ((a === "false" || a === "true") && e !== null && e.type === Ke && (c("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, n, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', n, a), et[n] = !0), !0);
      };
    }
    var Kt = function(t, n, a) {
      {
        var f = [];
        for (var y in n) {
          var L = Yt(t, y, n[y], a);
          L || f.push(y);
        }
        var S = f.map(function(Q) {
          return "`" + Q + "`";
        }).join(", ");
        f.length === 1 ? c("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", S, t) : f.length > 1 && c("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", S, t);
      }
    };
    function wr(t, n, a) {
      Nt(t, n) || Kt(t, n, a);
    }
    var lr = function() {
    };
    {
      var Ht = /^(?:webkit|moz|o)[A-Z]/, q = /^-ms-/, ue = /-(.)/g, ae = /;\s*$/, ge = {}, Le = {}, ne = !1, xe = !1, tt = function(t) {
        return t.replace(ue, function(n, a) {
          return a.toUpperCase();
        });
      }, nt = function(t) {
        ge.hasOwnProperty(t) && ge[t] || (ge[t] = !0, c(
          "Unsupported style property %s. Did you mean %s?",
          t,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          tt(t.replace(q, "ms-"))
        ));
      }, ft = function(t) {
        ge.hasOwnProperty(t) && ge[t] || (ge[t] = !0, c("Unsupported vendor-prefixed style property %s. Did you mean %s?", t, t.charAt(0).toUpperCase() + t.slice(1)));
      }, mt = function(t, n) {
        Le.hasOwnProperty(n) && Le[n] || (Le[n] = !0, c(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, t, n.replace(ae, "")));
      }, At = function(t, n) {
        ne || (ne = !0, c("`NaN` is an invalid value for the `%s` css style property.", t));
      }, Re = function(t, n) {
        xe || (xe = !0, c("`Infinity` is an invalid value for the `%s` css style property.", t));
      };
      lr = function(t, n) {
        t.indexOf("-") > -1 ? nt(t) : Ht.test(t) ? ft(t) : ae.test(n) && mt(t, n), typeof n == "number" && (isNaN(n) ? At(t, n) : isFinite(n) || Re(t, n));
      };
    }
    var Pr = lr, Br = /["'&<>]/;
    function Ur(t) {
      Xe(t);
      var n = "" + t, a = Br.exec(n);
      if (!a)
        return n;
      var f, y = "", L, S = 0;
      for (L = a.index; L < n.length; L++) {
        switch (n.charCodeAt(L)) {
          case 34:
            f = "&quot;";
            break;
          case 38:
            f = "&amp;";
            break;
          case 39:
            f = "&#x27;";
            break;
          case 60:
            f = "&lt;";
            break;
          case 62:
            f = "&gt;";
            break;
          default:
            continue;
        }
        S !== L && (y += n.substring(S, L)), S = L + 1, y += f;
      }
      return S !== L ? y + n.substring(S, L) : y;
    }
    function dt(t) {
      return typeof t == "boolean" || typeof t == "number" ? "" + t : Ur(t);
    }
    var Rr = /([A-Z])/g, sn = /^ms-/;
    function ln(t) {
      return t.replace(Rr, "-$1").toLowerCase().replace(sn, "-ms-");
    }
    var I = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Z = !1;
    function K(t) {
      !Z && I.test(t) && (Z = !0, c("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(t)));
    }
    var fe = Array.isArray;
    function Se(t) {
      return fe(t);
    }
    var Ce = k("<script>"), Ee = k("<\/script>"), Ie = k('<script src="'), Mt = k('<script type="module" src="'), Fe = k('" async=""><\/script>');
    function We(t) {
      return Xe(t), ("" + t).replace(at, Pt);
    }
    var at = /(<\/|<)(s)(cript)/gi, Pt = function(t, n, a, f) {
      return "" + n + (a === "s" ? "\\u0073" : "\\u0053") + f;
    };
    function cr(t, n, a, f, y) {
      var L = t === void 0 ? "" : t, S = n === void 0 ? Ce : k('<script nonce="' + dt(n) + '">'), Q = [];
      if (a !== void 0 && Q.push(S, V(We(a)), Ee), f !== void 0)
        for (var e = 0; e < f.length; e++)
          Q.push(Ie, V(dt(f[e])), Fe);
      if (y !== void 0)
        for (var r = 0; r < y.length; r++)
          Q.push(Mt, V(dt(y[r])), Fe);
      return {
        bootstrapChunks: Q,
        startInlineScript: S,
        placeholderPrefix: k(L + "P:"),
        segmentPrefix: k(L + "S:"),
        boundaryPrefix: L + "B:",
        idPrefix: L,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var gt = 0, ht = 1, fr = 2, qt = 3, Et = 4, Kr = 5, dr = 6, Mr = 7;
    function Bt(t, n) {
      return {
        insertionMode: t,
        selectedValue: n
      };
    }
    function Dr(t) {
      var n = t === "http://www.w3.org/2000/svg" ? fr : t === "http://www.w3.org/1998/Math/MathML" ? qt : gt;
      return Bt(n, null);
    }
    function Tr(t, n, a) {
      switch (n) {
        case "select":
          return Bt(ht, a.value != null ? a.value : a.defaultValue);
        case "svg":
          return Bt(fr, null);
        case "math":
          return Bt(qt, null);
        case "foreignObject":
          return Bt(ht, null);
        case "table":
          return Bt(Et, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Bt(Kr, null);
        case "colgroup":
          return Bt(Mr, null);
        case "tr":
          return Bt(dr, null);
      }
      return t.insertionMode >= Et || t.insertionMode === gt ? Bt(ht, null) : t;
    }
    var cn = null;
    function fn(t) {
      var n = t.nextSuspenseID++;
      return k(t.boundaryPrefix + n.toString(16));
    }
    function qr(t, n, a) {
      var f = t.idPrefix, y = ":" + f + "R" + n;
      return a > 0 && (y += "H" + a.toString(32)), y + ":";
    }
    function Sr(t) {
      return dt(t);
    }
    var dn = k("<!-- -->");
    function _r(t, n, a, f) {
      return n === "" ? f : (f && t.push(dn), t.push(V(Sr(n))), !0);
    }
    function $r(t, n, a, f) {
      a && f && t.push(dn);
    }
    var A = /* @__PURE__ */ new Map();
    function s(t) {
      var n = A.get(t);
      if (n !== void 0)
        return n;
      var a = k(dt(ln(t)));
      return A.set(t, a), a;
    }
    var h = k(' style="'), p = k(":"), z = k(";");
    function E(t, n, a) {
      if (typeof a != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var f = !0;
      for (var y in a)
        if (ve.call(a, y)) {
          var L = a[y];
          if (!(L == null || typeof L == "boolean" || L === "")) {
            var S = void 0, Q = void 0, e = y.indexOf("--") === 0;
            e ? (S = V(dt(y)), ce(L, y), Q = V(dt(("" + L).trim()))) : (Pr(y, L), S = s(y), typeof L == "number" ? L !== 0 && !ve.call(Ze, y) ? Q = V(L + "px") : Q = V("" + L) : (ce(L, y), Q = V(dt(("" + L).trim())))), f ? (f = !1, t.push(h, S, p, Q)) : t.push(z, S, p, Q);
          }
        }
      f || t.push(oe);
    }
    var U = k(" "), X = k('="'), oe = k('"'), de = k('=""');
    function se(t, n, a, f) {
      switch (a) {
        case "style": {
          E(t, n, f);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(a.length > 2 && (a[0] === "o" || a[0] === "O") && (a[1] === "n" || a[1] === "N"))
      ) {
        var y = wt(a);
        if (y !== null) {
          switch (typeof f) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!y.acceptsBooleans)
                return;
          }
          var L = y.attributeName, S = V(L);
          switch (y.type) {
            case Ke:
              f && t.push(U, S, de);
              return;
            case De:
              f === !0 ? t.push(U, S, de) : f === !1 || t.push(U, S, X, V(dt(f)), oe);
              return;
            case Ue:
              isNaN(f) || t.push(U, S, X, V(dt(f)), oe);
              break;
            case _e:
              !isNaN(f) && f >= 1 && t.push(U, S, X, V(dt(f)), oe);
              break;
            default:
              y.sanitizeURL && (pe(f, L), f = "" + f, K(f)), t.push(U, S, X, V(dt(f)), oe);
          }
        } else if (He(a)) {
          switch (typeof f) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Q = a.toLowerCase().slice(0, 5);
              if (Q !== "data-" && Q !== "aria-")
                return;
            }
          }
          t.push(U, V(a), X, V(dt(f)), oe);
        }
      }
    }
    var Pe = k(">"), Ft = k("/>");
    function zt(t, n, a) {
      if (n != null) {
        if (a != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof n != "object" || !("__html" in n))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var f = n.__html;
        f != null && (Xe(f), t.push(V("" + f)));
      }
    }
    var bt = !1, Lr = !1, _t = !1, en = !1, mr = !1, Yr = !1, Nr = !1;
    function Mn(t, n) {
      {
        var a = t[n];
        if (a != null) {
          var f = Se(a);
          t.multiple && !f ? c("The `%s` prop supplied to <select> must be an array if `multiple` is true.", n) : !t.multiple && f && c("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", n);
        }
      }
    }
    function bo(t, n, a) {
      xt("select", n), Mn(n, "value"), Mn(n, "defaultValue"), n.value !== void 0 && n.defaultValue !== void 0 && !_t && (c("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), _t = !0), t.push($t("select"));
      var f = null, y = null;
      for (var L in n)
        if (ve.call(n, L)) {
          var S = n[L];
          if (S == null)
            continue;
          switch (L) {
            case "children":
              f = S;
              break;
            case "dangerouslySetInnerHTML":
              y = S;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              se(t, a, L, S);
              break;
          }
        }
      return t.push(Pe), zt(t, y, f), f;
    }
    function ko(t) {
      var n = "";
      return j.Children.forEach(t, function(a) {
        a != null && (n += a, !mr && typeof a != "string" && typeof a != "number" && (mr = !0, c("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), n;
    }
    var Kn = k(' selected=""');
    function Oo(t, n, a, f) {
      var y = f.selectedValue;
      t.push($t("option"));
      var L = null, S = null, Q = null, e = null;
      for (var r in n)
        if (ve.call(n, r)) {
          var i = n[r];
          if (i == null)
            continue;
          switch (r) {
            case "children":
              L = i;
              break;
            case "selected":
              Q = i, Nr || (c("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Nr = !0);
              break;
            case "dangerouslySetInnerHTML":
              e = i;
              break;
            case "value":
              S = i;
            default:
              se(t, a, r, i);
              break;
          }
        }
      if (y != null) {
        var u;
        if (S !== null ? (pe(S, "value"), u = "" + S) : (e !== null && (Yr || (Yr = !0, c("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), u = ko(L)), Se(y))
          for (var d = 0; d < y.length; d++) {
            pe(y[d], "value");
            var D = "" + y[d];
            if (D === u) {
              t.push(Kn);
              break;
            }
          }
        else
          pe(y, "select.value"), "" + y === u && t.push(Kn);
      } else
        Q && t.push(Kn);
      return t.push(Pe), zt(t, e, L), L;
    }
    function qn(t, n, a) {
      xt("input", n), n.checked !== void 0 && n.defaultChecked !== void 0 && !Lr && (c("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), Lr = !0), n.value !== void 0 && n.defaultValue !== void 0 && !bt && (c("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), bt = !0), t.push($t("input"));
      var f = null, y = null, L = null, S = null;
      for (var Q in n)
        if (ve.call(n, Q)) {
          var e = n[Q];
          if (e == null)
            continue;
          switch (Q) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              S = e;
              break;
            case "defaultValue":
              y = e;
              break;
            case "checked":
              L = e;
              break;
            case "value":
              f = e;
              break;
            default:
              se(t, a, Q, e);
              break;
          }
        }
      return L !== null ? se(t, a, "checked", L) : S !== null && se(t, a, "checked", S), f !== null ? se(t, a, "value", f) : y !== null && se(t, a, "value", y), t.push(Ft), null;
    }
    function jr(t, n, a) {
      xt("textarea", n), n.value !== void 0 && n.defaultValue !== void 0 && !en && (c("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), en = !0), t.push($t("textarea"));
      var f = null, y = null, L = null;
      for (var S in n)
        if (ve.call(n, S)) {
          var Q = n[S];
          if (Q == null)
            continue;
          switch (S) {
            case "children":
              L = Q;
              break;
            case "value":
              f = Q;
              break;
            case "defaultValue":
              y = Q;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              se(t, a, S, Q);
              break;
          }
        }
      if (f === null && y !== null && (f = y), t.push(Pe), L != null) {
        if (c("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), f != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Se(L)) {
          if (L.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          Xe(L[0]), f = "" + L[0];
        }
        Xe(L), f = "" + L;
      }
      return typeof f == "string" && f[0] === `
` && t.push(Hr), f !== null && (pe(f, "value"), t.push(V(Sr("" + f)))), null;
    }
    function gn(t, n, a, f) {
      t.push($t(a));
      for (var y in n)
        if (ve.call(n, y)) {
          var L = n[y];
          if (L == null)
            continue;
          switch (y) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(a + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              se(t, f, y, L);
              break;
          }
        }
      return t.push(Ft), null;
    }
    function En(t, n, a) {
      t.push($t("menuitem"));
      for (var f in n)
        if (ve.call(n, f)) {
          var y = n[f];
          if (y == null)
            continue;
          switch (f) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              se(t, a, f, y);
              break;
          }
        }
      return t.push(Pe), null;
    }
    function qe(t, n, a) {
      t.push($t("title"));
      var f = null;
      for (var y in n)
        if (ve.call(n, y)) {
          var L = n[y];
          if (L == null)
            continue;
          switch (y) {
            case "children":
              f = L;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              se(t, a, y, L);
              break;
          }
        }
      t.push(Pe);
      {
        var S = Array.isArray(f) && f.length < 2 ? f[0] || null : f;
        Array.isArray(f) && f.length > 1 ? c("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : S != null && S.$$typeof != null ? c("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : S != null && typeof S != "string" && typeof S != "number" && c("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return f;
    }
    function Er(t, n, a, f) {
      t.push($t(a));
      var y = null, L = null;
      for (var S in n)
        if (ve.call(n, S)) {
          var Q = n[S];
          if (Q == null)
            continue;
          switch (S) {
            case "children":
              y = Q;
              break;
            case "dangerouslySetInnerHTML":
              L = Q;
              break;
            default:
              se(t, f, S, Q);
              break;
          }
        }
      return t.push(Pe), zt(t, L, y), typeof y == "string" ? (t.push(V(Sr(y))), null) : y;
    }
    function Wt(t, n, a, f) {
      t.push($t(a));
      var y = null, L = null;
      for (var S in n)
        if (ve.call(n, S)) {
          var Q = n[S];
          if (Q == null)
            continue;
          switch (S) {
            case "children":
              y = Q;
              break;
            case "dangerouslySetInnerHTML":
              L = Q;
              break;
            case "style":
              E(t, f, Q);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              He(S) && typeof Q != "function" && typeof Q != "symbol" && t.push(U, V(S), X, V(dt(Q)), oe);
              break;
          }
        }
      return t.push(Pe), zt(t, L, y), y;
    }
    var Hr = k(`
`);
    function Cr(t, n, a, f) {
      t.push($t(a));
      var y = null, L = null;
      for (var S in n)
        if (ve.call(n, S)) {
          var Q = n[S];
          if (Q == null)
            continue;
          switch (S) {
            case "children":
              y = Q;
              break;
            case "dangerouslySetInnerHTML":
              L = Q;
              break;
            default:
              se(t, f, S, Q);
              break;
          }
        }
      if (t.push(Pe), L != null) {
        if (y != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof L != "object" || !("__html" in L))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var e = L.__html;
        e != null && (typeof e == "string" && e.length > 0 && e[0] === `
` ? t.push(Hr, V(e)) : (Xe(e), t.push(V("" + e))));
      }
      return typeof y == "string" && y[0] === `
` && t.push(Hr), y;
    }
    var Cn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, xr = /* @__PURE__ */ new Map();
    function $t(t) {
      var n = xr.get(t);
      if (n === void 0) {
        if (!Cn.test(t))
          throw new Error("Invalid tag: " + t);
        n = k("<" + t), xr.set(t, n);
      }
      return n;
    }
    var _n = k("<!DOCTYPE html>");
    function $n(t, n, a, f, y) {
      switch (Dt(n, a), ir(n, a), wr(n, a, null), !a.suppressContentEditableWarning && a.contentEditable && a.children != null && c("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), y.insertionMode !== fr && y.insertionMode !== qt && n.indexOf("-") === -1 && typeof a.is != "string" && n.toLowerCase() !== n && c("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", n), n) {
        case "select":
          return bo(t, a, f);
        case "option":
          return Oo(t, a, f, y);
        case "textarea":
          return jr(t, a, f);
        case "input":
          return qn(t, a, f);
        case "menuitem":
          return En(t, a, f);
        case "title":
          return qe(t, a, f);
        case "listing":
        case "pre":
          return Cr(t, a, n, f);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return gn(t, a, n, f);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Er(t, a, n, f);
        case "html":
          return y.insertionMode === gt && t.push(_n), Er(t, a, n, f);
        default:
          return n.indexOf("-") === -1 && typeof a.is != "string" ? Er(t, a, n, f) : Wt(t, a, n, f);
      }
    }
    var kA = k("</"), OA = k(">");
    function QA(t, n, a) {
      switch (n) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          t.push(kA, V(n), OA);
      }
    }
    function Qo(t, n) {
      for (var a = n.bootstrapChunks, f = 0; f < a.length - 1; f++)
        B(t, a[f]);
      return f < a.length ? _(t, a[f]) : !0;
    }
    var Po = k('<template id="'), xn = k('"></template>');
    function zn(t, n, a) {
      B(t, Po), B(t, n.placeholderPrefix);
      var f = V(a.toString(16));
      return B(t, f), _(t, xn);
    }
    var bn = k("<!--$-->"), hn = k('<!--$?--><template id="'), Bo = k('"></template>'), yn = k("<!--$!-->"), eA = k("<!--/$-->"), tA = k("<template"), tn = k('"'), rn = k(' data-dgst="'), kn = k(' data-msg="'), PA = k(' data-stck="'), rA = k("></template>");
    function BA(t, n) {
      return _(t, bn);
    }
    function On(t, n, a) {
      if (B(t, hn), a === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return B(t, a), _(t, Bo);
    }
    function Vt(t, n, a, f, y) {
      var L;
      return L = _(t, yn), B(t, tA), a && (B(t, rn), B(t, V(dt(a))), B(t, tn)), f && (B(t, kn), B(t, V(dt(f))), B(t, tn)), y && (B(t, PA), B(t, V(dt(y))), B(t, tn)), L = _(t, rA), L;
    }
    function UA(t, n) {
      return _(t, eA);
    }
    function Qn(t, n) {
      return _(t, eA);
    }
    function Uo(t, n) {
      return _(t, eA);
    }
    var RA = k('<div hidden id="'), Pn = k('">'), YA = k("</div>"), HA = k('<svg aria-hidden="true" style="display:none" id="'), Bn = k('">'), Un = k("</svg>"), FA = k('<math aria-hidden="true" style="display:none" id="'), WA = k('">'), VA = k("</math>"), nA = k('<table hidden id="'), GA = k('">'), o = k("</table>"), l = k('<table hidden><tbody id="'), M = k('">'), v = k("</tbody></table>"), b = k('<table hidden><tr id="'), x = k('">'), F = k("</tr></table>"), J = k('<table hidden><colgroup id="'), Me = k('">'), me = k("</colgroup></table>");
    function Te(t, n, a, f) {
      switch (a.insertionMode) {
        case gt:
        case ht:
          return B(t, RA), B(t, n.segmentPrefix), B(t, V(f.toString(16))), _(t, Pn);
        case fr:
          return B(t, HA), B(t, n.segmentPrefix), B(t, V(f.toString(16))), _(t, Bn);
        case qt:
          return B(t, FA), B(t, n.segmentPrefix), B(t, V(f.toString(16))), _(t, WA);
        case Et:
          return B(t, nA), B(t, n.segmentPrefix), B(t, V(f.toString(16))), _(t, GA);
        case Kr:
          return B(t, l), B(t, n.segmentPrefix), B(t, V(f.toString(16))), _(t, M);
        case dr:
          return B(t, b), B(t, n.segmentPrefix), B(t, V(f.toString(16))), _(t, x);
        case Mr:
          return B(t, J), B(t, n.segmentPrefix), B(t, V(f.toString(16))), _(t, Me);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function rt(t, n) {
      switch (n.insertionMode) {
        case gt:
        case ht:
          return _(t, YA);
        case fr:
          return _(t, Un);
        case qt:
          return _(t, VA);
        case Et:
          return _(t, o);
        case Kr:
          return _(t, v);
        case dr:
          return _(t, F);
        case Mr:
          return _(t, me);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Gt = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", er = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', tr = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Rn = k(Gt + ';$RS("'), ZA = k('$RS("'), AA = k('","'), wa = k('")<\/script>');
    function Ta(t, n, a) {
      B(t, n.startInlineScript), n.sentCompleteSegmentFunction ? B(t, ZA) : (n.sentCompleteSegmentFunction = !0, B(t, Rn)), B(t, n.segmentPrefix);
      var f = V(a.toString(16));
      return B(t, f), B(t, AA), B(t, n.placeholderPrefix), B(t, f), _(t, wa);
    }
    var Sa = k(er + ';$RC("'), ma = k('$RC("'), Ea = k('","'), Ca = k('")<\/script>');
    function Ro(t, n, a, f) {
      if (B(t, n.startInlineScript), n.sentCompleteBoundaryFunction ? B(t, ma) : (n.sentCompleteBoundaryFunction = !0, B(t, Sa)), a === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var y = V(f.toString(16));
      return B(t, a), B(t, Ea), B(t, n.segmentPrefix), B(t, y), _(t, Ca);
    }
    var xa = k(tr + ';$RX("'), za = k('$RX("'), Yo = k('"'), ba = k(")<\/script>"), Ho = k(",");
    function zi(t, n, a, f, y, L) {
      if (B(t, n.startInlineScript), n.sentClientRenderFunction ? B(t, za) : (n.sentClientRenderFunction = !0, B(t, xa)), a === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return B(t, a), B(t, Yo), (f || y || L) && (B(t, Ho), B(t, V(Fo(f || "")))), (y || L) && (B(t, Ho), B(t, V(Fo(y || "")))), L && (B(t, Ho), B(t, V(Fo(L)))), _(t, ba);
    }
    var bi = /[<\u2028\u2029]/g;
    function Fo(t) {
      var n = JSON.stringify(t);
      return n.replace(bi, function(a) {
        switch (a) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var gr = Object.assign, ka = Symbol.for("react.element"), ki = Symbol.for("react.portal"), rr = Symbol.for("react.fragment"), Oi = Symbol.for("react.strict_mode"), Wo = Symbol.for("react.profiler"), XA = Symbol.for("react.provider"), JA = Symbol.for("react.context"), KA = Symbol.for("react.forward_ref"), oA = Symbol.for("react.suspense"), iA = Symbol.for("react.suspense_list"), aA = Symbol.for("react.memo"), Yn = Symbol.for("react.lazy"), Vo = Symbol.for("react.scope"), Go = Symbol.for("react.debug_trace_mode"), qA = Symbol.for("react.legacy_hidden"), Oa = Symbol.for("react.default_value"), Qi = Symbol.iterator, Qa = "@@iterator";
    function Pa(t) {
      if (t === null || typeof t != "object")
        return null;
      var n = Qi && t[Qi] || t[Qa];
      return typeof n == "function" ? n : null;
    }
    function Pi(t, n, a) {
      var f = t.displayName;
      if (f)
        return f;
      var y = n.displayName || n.name || "";
      return y !== "" ? a + "(" + y + ")" : a;
    }
    function Bi(t) {
      return t.displayName || "Context";
    }
    function vt(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case rr:
          return "Fragment";
        case ki:
          return "Portal";
        case Wo:
          return "Profiler";
        case Oi:
          return "StrictMode";
        case oA:
          return "Suspense";
        case iA:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case JA:
            var n = t;
            return Bi(n) + ".Consumer";
          case XA:
            var a = t;
            return Bi(a._context) + ".Provider";
          case KA:
            return Pi(t, t.render, "ForwardRef");
          case aA:
            var f = t.displayName || null;
            return f !== null ? f : vt(t.type) || "Memo";
          case Yn: {
            var y = t, L = y._payload, S = y._init;
            try {
              return vt(S(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var uA = 0, Zo, yt, Hn, Xo, Jo, Ko, qo;
    function _o() {
    }
    _o.__reactDisabledLog = !0;
    function Ui() {
      {
        if (uA === 0) {
          Zo = console.log, yt = console.info, Hn = console.warn, Xo = console.error, Jo = console.group, Ko = console.groupCollapsed, qo = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: _o,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        uA++;
      }
    }
    function Ri() {
      {
        if (uA--, uA === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: gr({}, t, {
              value: Zo
            }),
            info: gr({}, t, {
              value: yt
            }),
            warn: gr({}, t, {
              value: Hn
            }),
            error: gr({}, t, {
              value: Xo
            }),
            group: gr({}, t, {
              value: Jo
            }),
            groupCollapsed: gr({}, t, {
              value: Ko
            }),
            groupEnd: gr({}, t, {
              value: qo
            })
          });
        }
        uA < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _A = T.ReactCurrentDispatcher, $o;
    function sA(t, n, a) {
      {
        if ($o === void 0)
          try {
            throw Error();
          } catch (y) {
            var f = y.stack.trim().match(/\n( *(at )?)/);
            $o = f && f[1] || "";
          }
        return `
` + $o + t;
      }
    }
    var lA = !1, Fn;
    {
      var cA = typeof WeakMap == "function" ? WeakMap : Map;
      Fn = new cA();
    }
    function fA(t, n) {
      if (!t || lA)
        return "";
      {
        var a = Fn.get(t);
        if (a !== void 0)
          return a;
      }
      var f;
      lA = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = _A.current, _A.current = null, Ui();
      try {
        if (n) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (w) {
              f = w;
            }
            Reflect.construct(t, [], S);
          } else {
            try {
              S.call();
            } catch (w) {
              f = w;
            }
            t.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            f = w;
          }
          t();
        }
      } catch (w) {
        if (w && f && typeof w.stack == "string") {
          for (var Q = w.stack.split(`
`), e = f.stack.split(`
`), r = Q.length - 1, i = e.length - 1; r >= 1 && i >= 0 && Q[r] !== e[i]; )
            i--;
          for (; r >= 1 && i >= 0; r--, i--)
            if (Q[r] !== e[i]) {
              if (r !== 1 || i !== 1)
                do
                  if (r--, i--, i < 0 || Q[r] !== e[i]) {
                    var u = `
` + Q[r].replace(" at new ", " at ");
                    return t.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", t.displayName)), typeof t == "function" && Fn.set(t, u), u;
                  }
                while (r >= 1 && i >= 0);
              break;
            }
        }
      } finally {
        lA = !1, _A.current = L, Ri(), Error.prepareStackTrace = y;
      }
      var d = t ? t.displayName || t.name : "", D = d ? sA(d) : "";
      return typeof t == "function" && Fn.set(t, D), D;
    }
    function $A(t, n, a) {
      return fA(t, !0);
    }
    function Yi(t, n, a) {
      return fA(t, !1);
    }
    function ei(t) {
      var n = t.prototype;
      return !!(n && n.isReactComponent);
    }
    function ti(t, n, a) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return fA(t, ei(t));
      if (typeof t == "string")
        return sA(t);
      switch (t) {
        case oA:
          return sA("Suspense");
        case iA:
          return sA("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case KA:
            return Yi(t.render);
          case aA:
            return ti(t.type, n, a);
          case Yn: {
            var f = t, y = f._payload, L = f._init;
            try {
              return ti(L(y), n, a);
            } catch {
            }
          }
        }
      return "";
    }
    var ri = {}, Hi = T.ReactDebugCurrentFrame;
    function Wn(t) {
      if (t) {
        var n = t._owner, a = ti(t.type, t._source, n ? n.type : null);
        Hi.setExtraStackFrame(a);
      } else
        Hi.setExtraStackFrame(null);
    }
    function ni(t, n, a, f, y) {
      {
        var L = Function.call.bind(ve);
        for (var S in t)
          if (L(t, S)) {
            var Q = void 0;
            try {
              if (typeof t[S] != "function") {
                var e = Error((f || "React class") + ": " + a + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw e.name = "Invariant Violation", e;
              }
              Q = t[S](n, S, f, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (r) {
              Q = r;
            }
            Q && !(Q instanceof Error) && (Wn(y), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", a, S, typeof Q), Wn(null)), Q instanceof Error && !(Q.message in ri) && (ri[Q.message] = !0, Wn(y), c("Failed %s type: %s", a, Q.message), Wn(null));
          }
      }
    }
    var eo;
    eo = {};
    var pn = {};
    Object.freeze(pn);
    function Ai(t, n) {
      {
        var a = t.contextTypes;
        if (!a)
          return pn;
        var f = {};
        for (var y in a)
          f[y] = n[y];
        {
          var L = vt(t) || "Unknown";
          ni(a, f, "context", L);
        }
        return f;
      }
    }
    function oi(t, n, a, f) {
      {
        if (typeof t.getChildContext != "function") {
          {
            var y = vt(n) || "Unknown";
            eo[y] || (eo[y] = !0, c("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", y, y));
          }
          return a;
        }
        var L = t.getChildContext();
        for (var S in L)
          if (!(S in f))
            throw new Error((vt(n) || "Unknown") + '.getChildContext(): key "' + S + '" is not defined in childContextTypes.');
        {
          var Q = vt(n) || "Unknown";
          ni(f, L, "child context", Q);
        }
        return gr({}, a, L);
      }
    }
    var nn;
    nn = {};
    var Fi = null, vn = null;
    function Dn(t) {
      t.context._currentValue = t.parentValue;
    }
    function ii(t) {
      t.context._currentValue = t.value;
    }
    function zr(t, n) {
      if (t !== n) {
        Dn(t);
        var a = t.parent, f = n.parent;
        if (a === null) {
          if (f !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (f === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          zr(a, f);
        }
        ii(n);
      }
    }
    function to(t) {
      Dn(t);
      var n = t.parent;
      n !== null && to(n);
    }
    function ro(t) {
      var n = t.parent;
      n !== null && ro(n), ii(t);
    }
    function dA(t, n) {
      Dn(t);
      var a = t.parent;
      if (a === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === n.depth ? zr(a, n) : dA(a, n);
    }
    function ai(t, n) {
      var a = n.parent;
      if (a === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === a.depth ? zr(t, a) : ai(t, a), ii(n);
    }
    function MA(t) {
      var n = vn, a = t;
      n !== a && (n === null ? ro(a) : a === null ? to(n) : n.depth === a.depth ? zr(n, a) : n.depth > a.depth ? dA(n, a) : ai(n, a), vn = a);
    }
    function Wi(t, n) {
      var a;
      a = t._currentValue, t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== nn && c("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = nn;
      var f = vn, y = {
        parent: f,
        depth: f === null ? 0 : f.depth + 1,
        context: t,
        parentValue: a,
        value: n
      };
      return vn = y, y;
    }
    function Vi(t) {
      var n = vn;
      if (n === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      n.context !== t && c("The parent context is not the expected context. This is probably a bug in React.");
      {
        var a = n.parentValue;
        a === Oa ? n.context._currentValue = n.context._defaultValue : n.context._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== nn && c("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = nn;
      }
      return vn = n.parent;
    }
    function no() {
      return vn;
    }
    function gA(t) {
      var n = t._currentValue;
      return n;
    }
    function ui(t) {
      return t._reactInternals;
    }
    function Ba(t, n) {
      t._reactInternals = n;
    }
    var Vn = {}, Ao = {}, si, oo, io, hA, ao, Gn, yA, uo, Zn;
    {
      si = /* @__PURE__ */ new Set(), oo = /* @__PURE__ */ new Set(), io = /* @__PURE__ */ new Set(), yA = /* @__PURE__ */ new Set(), hA = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set(), Zn = /* @__PURE__ */ new Set();
      var so = /* @__PURE__ */ new Set();
      Gn = function(t, n) {
        if (!(t === null || typeof t == "function")) {
          var a = n + "_" + t;
          so.has(a) || (so.add(a), c("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", n, t));
        }
      }, ao = function(t, n) {
        if (n === void 0) {
          var a = vt(t) || "Component";
          hA.has(a) || (hA.add(a), c("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      };
    }
    function lo(t, n) {
      {
        var a = t.constructor, f = a && vt(a) || "ReactClass", y = f + "." + n;
        if (Vn[y])
          return;
        c(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, n, n, f), Vn[y] = !0;
      }
    }
    var co = {
      isMounted: function(t) {
        return !1;
      },
      enqueueSetState: function(t, n, a) {
        var f = ui(t);
        f.queue === null ? lo(t, "setState") : (f.queue.push(n), a != null && Gn(a, "setState"));
      },
      enqueueReplaceState: function(t, n, a) {
        var f = ui(t);
        f.replace = !0, f.queue = [n], a != null && Gn(a, "setState");
      },
      enqueueForceUpdate: function(t, n) {
        var a = ui(t);
        a.queue === null ? lo(t, "forceUpdate") : n != null && Gn(n, "setState");
      }
    };
    function Gi(t, n, a, f, y) {
      var L = a(y, f);
      ao(n, L);
      var S = L == null ? f : gr({}, f, L);
      return S;
    }
    function Zi(t, n, a) {
      var f = pn, y = t.contextType;
      if ("contextType" in t) {
        var L = (
          // Allow null for conditional declaration
          y === null || y !== void 0 && y.$$typeof === JA && y._context === void 0
        );
        if (!L && !Zn.has(t)) {
          Zn.add(t);
          var S = "";
          y === void 0 ? S = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof y != "object" ? S = " However, it is set to a " + typeof y + "." : y.$$typeof === XA ? S = " Did you accidentally pass the Context.Provider instead?" : y._context !== void 0 ? S = " Did you accidentally pass the Context.Consumer instead?" : S = " However, it is set to an object with keys {" + Object.keys(y).join(", ") + "}.", c("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", vt(t) || "Component", S);
        }
      }
      typeof y == "object" && y !== null ? f = gA(y) : f = a;
      var Q = new t(n, f);
      {
        if (typeof t.getDerivedStateFromProps == "function" && (Q.state === null || Q.state === void 0)) {
          var e = vt(t) || "Component";
          si.has(e) || (si.add(e), c("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", e, Q.state === null ? "null" : "undefined", e));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof Q.getSnapshotBeforeUpdate == "function") {
          var r = null, i = null, u = null;
          if (typeof Q.componentWillMount == "function" && Q.componentWillMount.__suppressDeprecationWarning !== !0 ? r = "componentWillMount" : typeof Q.UNSAFE_componentWillMount == "function" && (r = "UNSAFE_componentWillMount"), typeof Q.componentWillReceiveProps == "function" && Q.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? i = "componentWillReceiveProps" : typeof Q.UNSAFE_componentWillReceiveProps == "function" && (i = "UNSAFE_componentWillReceiveProps"), typeof Q.componentWillUpdate == "function" && Q.componentWillUpdate.__suppressDeprecationWarning !== !0 ? u = "componentWillUpdate" : typeof Q.UNSAFE_componentWillUpdate == "function" && (u = "UNSAFE_componentWillUpdate"), r !== null || i !== null || u !== null) {
            var d = vt(t) || "Component", D = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            io.has(d) || (io.add(d), c(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, d, D, r !== null ? `
  ` + r : "", i !== null ? `
  ` + i : "", u !== null ? `
  ` + u : ""));
          }
        }
      }
      return Q;
    }
    function Xi(t, n, a) {
      {
        var f = vt(n) || "Component", y = t.render;
        y || (n.prototype && typeof n.prototype.render == "function" ? c("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", f) : c("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", f)), t.getInitialState && !t.getInitialState.isReactClassApproved && !t.state && c("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", f), t.getDefaultProps && !t.getDefaultProps.isReactClassApproved && c("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", f), t.propTypes && c("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", f), t.contextType && c("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", f), t.contextTypes && c("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", f), n.contextType && n.contextTypes && !uo.has(n) && (uo.add(n), c("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", f)), typeof t.componentShouldUpdate == "function" && c("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", f), n.prototype && n.prototype.isPureReactComponent && typeof t.shouldComponentUpdate < "u" && c("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", vt(n) || "A pure component"), typeof t.componentDidUnmount == "function" && c("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", f), typeof t.componentDidReceiveProps == "function" && c("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", f), typeof t.componentWillRecieveProps == "function" && c("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", f), typeof t.UNSAFE_componentWillRecieveProps == "function" && c("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", f);
        var L = t.props !== a;
        t.props !== void 0 && L && c("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", f, f), t.defaultProps && c("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", f, f), typeof t.getSnapshotBeforeUpdate == "function" && typeof t.componentDidUpdate != "function" && !oo.has(n) && (oo.add(n), c("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", vt(n))), typeof t.getDerivedStateFromProps == "function" && c("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof t.getDerivedStateFromError == "function" && c("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof n.getSnapshotBeforeUpdate == "function" && c("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", f);
        var S = t.state;
        S && (typeof S != "object" || Se(S)) && c("%s.state: must be set to an object or null", f), typeof t.getChildContext == "function" && typeof n.childContextTypes != "object" && c("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", f);
      }
    }
    function Ua(t, n) {
      var a = n.state;
      if (typeof n.componentWillMount == "function") {
        if (n.componentWillMount.__suppressDeprecationWarning !== !0) {
          var f = vt(t) || "Unknown";
          Ao[f] || (C(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            f
          ), Ao[f] = !0);
        }
        n.componentWillMount();
      }
      typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), a !== n.state && (c("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", vt(t) || "Component"), co.enqueueReplaceState(n, n.state, null));
    }
    function Ra(t, n, a, f) {
      if (t.queue !== null && t.queue.length > 0) {
        var y = t.queue, L = t.replace;
        if (t.queue = null, t.replace = !1, L && y.length === 1)
          n.state = y[0];
        else {
          for (var S = L ? y[0] : n.state, Q = !0, e = L ? 1 : 0; e < y.length; e++) {
            var r = y[e], i = typeof r == "function" ? r.call(n, S, a, f) : r;
            i != null && (Q ? (Q = !1, S = gr({}, S, i)) : gr(S, i));
          }
          n.state = S;
        }
      } else
        t.queue = null;
    }
    function Ji(t, n, a, f) {
      Xi(t, n, a);
      var y = t.state !== void 0 ? t.state : null;
      t.updater = co, t.props = a, t.state = y;
      var L = {
        queue: [],
        replace: !1
      };
      Ba(t, L);
      var S = n.contextType;
      if (typeof S == "object" && S !== null ? t.context = gA(S) : t.context = f, t.state === a) {
        var Q = vt(n) || "Component";
        yA.has(Q) || (yA.add(Q), c("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Q));
      }
      var e = n.getDerivedStateFromProps;
      typeof e == "function" && (t.state = Gi(t, n, e, y, a)), typeof n.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function") && (Ua(n, t), Ra(L, t, a, f));
    }
    var Ya = {
      id: 1,
      overflow: ""
    };
    function Ha(t) {
      var n = t.overflow, a = t.id, f = a & ~Fa(a);
      return f.toString(32) + n;
    }
    function fo(t, n, a) {
      var f = t.id, y = t.overflow, L = Mo(f) - 1, S = f & ~(1 << L), Q = a + 1, e = Mo(n) + L;
      if (e > 30) {
        var r = L - L % 5, i = (1 << r) - 1, u = (S & i).toString(32), d = S >> r, D = L - r, w = Mo(n) + D, O = Q << D, G = O | d, re = u + y;
        return {
          id: 1 << w | G,
          overflow: re
        };
      } else {
        var ie = Q << L, Ne = ie | S, ut = y;
        return {
          id: 1 << e | Ne,
          overflow: ut
        };
      }
    }
    function Mo(t) {
      return 32 - li(t);
    }
    function Fa(t) {
      return 1 << Mo(t) - 1;
    }
    var li = Math.clz32 ? Math.clz32 : Va, go = Math.log, Wa = Math.LN2;
    function Va(t) {
      var n = t >>> 0;
      return n === 0 ? 32 : 31 - (go(n) / Wa | 0) | 0;
    }
    function Ga(t, n) {
      return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
    }
    var Za = typeof Object.is == "function" ? Object.is : Ga, Fr = null, ci = null, ho = null, Be = null, Ln = !1, Nn = !1, Je = 0, hr = null, jn = 0, yo = 25, kt = !1, Wr;
    function In() {
      if (Fr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return kt && c("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Fr;
    }
    function br(t, n) {
      if (n === null)
        return c("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Wr), !1;
      t.length !== n.length && c(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Wr, "[" + t.join(", ") + "]", "[" + n.join(", ") + "]");
      for (var a = 0; a < n.length && a < t.length; a++)
        if (!Za(t[a], n[a]))
          return !1;
      return !0;
    }
    function wn() {
      if (jn > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Vr() {
      return Be === null ? ho === null ? (Ln = !1, ho = Be = wn()) : (Ln = !0, Be = ho) : Be.next === null ? (Ln = !1, Be = Be.next = wn()) : (Ln = !0, Be = Be.next), Be;
    }
    function Xa(t, n) {
      Fr = n, ci = t, kt = !1, Je = 0;
    }
    function Ki(t, n, a, f) {
      for (; Nn; )
        Nn = !1, Je = 0, jn += 1, Be = null, a = t(n, f);
      return fi(), a;
    }
    function po() {
      var t = Je !== 0;
      return t;
    }
    function fi() {
      kt = !1, Fr = null, ci = null, Nn = !1, ho = null, jn = 0, hr = null, Be = null;
    }
    function Ja(t) {
      return kt && c("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), gA(t);
    }
    function qi(t) {
      return Wr = "useContext", In(), gA(t);
    }
    function pA(t, n) {
      return typeof n == "function" ? n(t) : n;
    }
    function Ka(t) {
      return Wr = "useState", _i(
        pA,
        // useReducer has a special case to support lazy useState initializers
        t
      );
    }
    function _i(t, n, a) {
      if (t !== pA && (Wr = "useReducer"), Fr = In(), Be = Vr(), Ln) {
        var f = Be.queue, y = f.dispatch;
        if (hr !== null) {
          var L = hr.get(f);
          if (L !== void 0) {
            hr.delete(f);
            var S = Be.memoizedState, Q = L;
            do {
              var e = Q.action;
              kt = !0, S = t(S, e), kt = !1, Q = Q.next;
            } while (Q !== null);
            return Be.memoizedState = S, [S, y];
          }
        }
        return [Be.memoizedState, y];
      } else {
        kt = !0;
        var r;
        t === pA ? r = typeof n == "function" ? n() : n : r = a !== void 0 ? a(n) : n, kt = !1, Be.memoizedState = r;
        var i = Be.queue = {
          last: null,
          dispatch: null
        }, u = i.dispatch = ea.bind(null, Fr, i);
        return [Be.memoizedState, u];
      }
    }
    function vo(t, n) {
      Fr = In(), Be = Vr();
      var a = n === void 0 ? null : n;
      if (Be !== null) {
        var f = Be.memoizedState;
        if (f !== null && a !== null) {
          var y = f[1];
          if (br(a, y))
            return f[0];
        }
      }
      kt = !0;
      var L = t();
      return kt = !1, Be.memoizedState = [L, a], L;
    }
    function qa(t) {
      Fr = In(), Be = Vr();
      var n = Be.memoizedState;
      if (n === null) {
        var a = {
          current: t
        };
        return Object.seal(a), Be.memoizedState = a, a;
      } else
        return n;
    }
    function $i(t, n) {
      Wr = "useLayoutEffect", c("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function ea(t, n, a) {
      if (jn >= yo)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (t === Fr) {
        Nn = !0;
        var f = {
          action: a,
          next: null
        };
        hr === null && (hr = /* @__PURE__ */ new Map());
        var y = hr.get(n);
        if (y === void 0)
          hr.set(n, f);
        else {
          for (var L = y; L.next !== null; )
            L = L.next;
          L.next = f;
        }
      }
    }
    function _a(t, n) {
      return vo(function() {
        return t;
      }, n);
    }
    function $a(t, n, a) {
      return In(), n(t._source);
    }
    function eu(t, n, a) {
      if (a === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return a();
    }
    function tu(t) {
      return In(), t;
    }
    function ru() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function nu() {
      return In(), [!1, ru];
    }
    function Au() {
      var t = ci, n = Ha(t.treeContext), a = di;
      if (a === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var f = Je++;
      return qr(a, n, f);
    }
    function Do() {
    }
    var ta = {
      readContext: Ja,
      useContext: qi,
      useMemo: vo,
      useReducer: _i,
      useRef: qa,
      useState: Ka,
      useInsertionEffect: Do,
      useLayoutEffect: $i,
      useCallback: _a,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Do,
      // Effects are not run in the server environment.
      useEffect: Do,
      // Debugging effect
      useDebugValue: Do,
      useDeferredValue: tu,
      useTransition: nu,
      useId: Au,
      // Subscriptions are not setup in a server environment.
      useMutableSource: $a,
      useSyncExternalStore: eu
    }, di = null;
    function vA(t) {
      di = t;
    }
    function ra(t) {
      try {
        var n = "", a = t;
        do {
          switch (a.tag) {
            case 0:
              n += sA(a.type, null, null);
              break;
            case 1:
              n += Yi(a.type, null, null);
              break;
            case 2:
              n += $A(a.type, null, null);
              break;
          }
          a = a.parent;
        } while (a);
        return n;
      } catch (f) {
        return `
Error generating stack: ` + f.message + `
` + f.stack;
      }
    }
    var DA = T.ReactCurrentDispatcher, Lo = T.ReactDebugCurrentFrame, Mi = 0, An = 1, No = 2, jo = 3, Tn = 4, na = 0, gi = 1, Sn = 2, ou = 12800;
    function Aa(t) {
      return console.error(t), null;
    }
    function kr() {
    }
    function iu(t, n, a, f, y, L, S, Q, e) {
      var r = [], i = /* @__PURE__ */ new Set(), u = {
        destination: null,
        responseState: n,
        progressiveChunkSize: f === void 0 ? ou : f,
        status: na,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: i,
        pingedTasks: r,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: y === void 0 ? Aa : y,
        onAllReady: L === void 0 ? kr : L,
        onShellReady: S === void 0 ? kr : S,
        onShellError: Q === void 0 ? kr : Q,
        onFatalError: e === void 0 ? kr : e
      }, d = Io(
        u,
        0,
        null,
        a,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      d.parentFlushed = !0;
      var D = hi(u, t, null, d, i, pn, Fi, Ya);
      return r.push(D), u;
    }
    function au(t, n) {
      var a = t.pingedTasks;
      a.push(n), a.length === 1 && W(function() {
        return TA(t);
      });
    }
    function LA(t, n) {
      return {
        id: cn,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: n,
        errorDigest: null
      };
    }
    function hi(t, n, a, f, y, L, S, Q) {
      t.allPendingTasks++, a === null ? t.pendingRootTasks++ : a.pendingTasks++;
      var e = {
        node: n,
        ping: function() {
          return au(t, e);
        },
        blockedBoundary: a,
        blockedSegment: f,
        abortSet: y,
        legacyContext: L,
        context: S,
        treeContext: Q
      };
      return e.componentStack = null, y.add(e), e;
    }
    function Io(t, n, a, f, y, L) {
      return {
        status: Mi,
        id: -1,
        // lazily assigned later
        index: n,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: f,
        boundary: a,
        lastPushedText: y,
        textEmbedded: L
      };
    }
    var Gr = null;
    function NA() {
      return Gr === null || Gr.componentStack === null ? "" : ra(Gr.componentStack);
    }
    function on(t, n) {
      t.componentStack = {
        tag: 0,
        parent: t.componentStack,
        type: n
      };
    }
    function Or(t, n) {
      t.componentStack = {
        tag: 1,
        parent: t.componentStack,
        type: n
      };
    }
    function yi(t, n) {
      t.componentStack = {
        tag: 2,
        parent: t.componentStack,
        type: n
      };
    }
    function yr(t) {
      t.componentStack === null ? c("Unexpectedly popped too many stack frames. This is a bug in React.") : t.componentStack = t.componentStack.parent;
    }
    var Xn = null;
    function pi(t, n) {
      {
        var a;
        typeof n == "string" ? a = n : n && typeof n.message == "string" ? a = n.message : a = String(n);
        var f = Xn || NA();
        Xn = null, t.errorMessage = a, t.errorComponentStack = f;
      }
    }
    function pr(t, n) {
      var a = t.onError(n);
      if (a != null && typeof a != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function an(t, n) {
      var a = t.onShellError;
      a(n);
      var f = t.onFatalError;
      f(n), t.destination !== null ? (t.status = Sn, ee(t.destination, n)) : (t.status = gi, t.fatalError = n);
    }
    function vi(t, n, a) {
      on(n, "Suspense");
      var f = n.blockedBoundary, y = n.blockedSegment, L = a.fallback, S = a.children, Q = /* @__PURE__ */ new Set(), e = LA(t, Q), r = y.chunks.length, i = Io(
        t,
        r,
        e,
        y.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      y.children.push(i), y.lastPushedText = !1;
      var u = Io(
        t,
        0,
        null,
        y.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      u.parentFlushed = !0, n.blockedBoundary = e, n.blockedSegment = u;
      try {
        if (mi(t, n, S), $r(u.chunks, t.responseState, u.lastPushedText, u.textEmbedded), u.status = An, So(e, u), e.pendingTasks === 0) {
          yr(n);
          return;
        }
      } catch (D) {
        u.status = Tn, e.forceClientRender = !0, e.errorDigest = pr(t, D), pi(e, D);
      } finally {
        n.blockedBoundary = f, n.blockedSegment = y;
      }
      var d = hi(t, L, f, i, Q, n.legacyContext, n.context, n.treeContext);
      d.componentStack = n.componentStack, t.pingedTasks.push(d), yr(n);
    }
    function jA(t, n, a, f) {
      on(n, a);
      var y = n.blockedSegment, L = $n(y.chunks, a, f, t.responseState, y.formatContext);
      y.lastPushedText = !1;
      var S = y.formatContext;
      y.formatContext = Tr(S, a, f), mi(t, n, L), y.formatContext = S, QA(y.chunks, a), y.lastPushedText = !1, yr(n);
    }
    function wo(t) {
      return t.prototype && t.prototype.isReactComponent;
    }
    function oa(t, n, a, f, y) {
      var L = {};
      Xa(n, L);
      var S = a(f, y);
      return Ki(a, f, S, y);
    }
    function ia(t, n, a, f, y) {
      var L = a.render();
      a.props !== y && (wA || c("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", vt(f) || "a component"), wA = !0);
      {
        var S = f.childContextTypes;
        if (S != null) {
          var Q = n.legacyContext, e = oi(a, f, Q, S);
          n.legacyContext = e, nr(t, n, L), n.legacyContext = Q;
          return;
        }
      }
      nr(t, n, L);
    }
    function uu(t, n, a, f) {
      yi(n, a);
      var y = Ai(a, n.legacyContext), L = Zi(a, f, y);
      Ji(L, a, f, y), ia(t, n, L, a, f), yr(n);
    }
    var Di = {}, IA = {}, aa = {}, Li = {}, wA = !1, Ni = !1, ji = !1, Ii = !1;
    function ua(t, n, a, f) {
      var y;
      if (y = Ai(a, n.legacyContext), Or(n, a), a.prototype && typeof a.prototype.render == "function") {
        var L = vt(a) || "Unknown";
        Di[L] || (c("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", L, L), Di[L] = !0);
      }
      var S = oa(t, n, a, f, y), Q = po();
      if (typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0) {
        var e = vt(a) || "Unknown";
        IA[e] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", e, e, e), IA[e] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0
      ) {
        {
          var r = vt(a) || "Unknown";
          IA[r] || (c("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", r, r, r), IA[r] = !0);
        }
        Ji(S, a, f, y), ia(t, n, S, a, f);
      } else if (sa(a), Q) {
        var i = n.treeContext, u = 1, d = 0;
        n.treeContext = fo(i, u, d);
        try {
          nr(t, n, S);
        } finally {
          n.treeContext = i;
        }
      } else
        nr(t, n, S);
      yr(n);
    }
    function sa(t) {
      {
        if (t && t.childContextTypes && c("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), typeof t.getDerivedStateFromProps == "function") {
          var n = vt(t) || "Unknown";
          Li[n] || (c("%s: Function components do not support getDerivedStateFromProps.", n), Li[n] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var a = vt(t) || "Unknown";
          aa[a] || (c("%s: Function components do not support contextType.", a), aa[a] = !0);
        }
      }
    }
    function wi(t, n) {
      if (t && t.defaultProps) {
        var a = gr({}, n), f = t.defaultProps;
        for (var y in f)
          a[y] === void 0 && (a[y] = f[y]);
        return a;
      }
      return n;
    }
    function su(t, n, a, f, y) {
      Or(n, a.render);
      var L = oa(t, n, a.render, f, y), S = po();
      if (S) {
        var Q = n.treeContext, e = 1, r = 0;
        n.treeContext = fo(Q, e, r);
        try {
          nr(t, n, L);
        } finally {
          n.treeContext = Q;
        }
      } else
        nr(t, n, L);
      yr(n);
    }
    function lu(t, n, a, f, y) {
      var L = a.type, S = wi(L, f);
      Ti(t, n, L, S, y);
    }
    function la(t, n, a, f) {
      a._context === void 0 ? a !== a.Consumer && (Ii || (Ii = !0, c("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
      var y = f.children;
      typeof y != "function" && c("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var L = gA(a), S = y(L);
      nr(t, n, S);
    }
    function cu(t, n, a, f) {
      var y = a._context, L = f.value, S = f.children, Q;
      Q = n.context, n.context = Wi(y, L), nr(t, n, S), n.context = Vi(y), Q !== n.context && c("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function fu(t, n, a, f, y) {
      on(n, "Lazy");
      var L = a._payload, S = a._init, Q = S(L), e = wi(Q, f);
      Ti(t, n, Q, e, y), yr(n);
    }
    function Ti(t, n, a, f, y) {
      if (typeof a == "function")
        if (wo(a)) {
          uu(t, n, a, f);
          return;
        } else {
          ua(t, n, a, f);
          return;
        }
      if (typeof a == "string") {
        jA(t, n, a, f);
        return;
      }
      switch (a) {
        case qA:
        case Go:
        case Oi:
        case Wo:
        case rr: {
          nr(t, n, f.children);
          return;
        }
        case iA: {
          on(n, "SuspenseList"), nr(t, n, f.children), yr(n);
          return;
        }
        case Vo:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case oA: {
          vi(t, n, f);
          return;
        }
      }
      if (typeof a == "object" && a !== null)
        switch (a.$$typeof) {
          case KA: {
            su(t, n, a, f, y);
            return;
          }
          case aA: {
            lu(t, n, a, f, y);
            return;
          }
          case XA: {
            cu(t, n, a, f);
            return;
          }
          case JA: {
            la(t, n, a, f);
            return;
          }
          case Yn: {
            fu(t, n, a, f);
            return;
          }
        }
      var L = "";
      throw (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (a == null ? a : typeof a) + "." + L));
    }
    function du(t, n) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      t[Symbol.toStringTag] === "Generator" && (Ni || c("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ni = !0), t.entries === n && (ji || c("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ji = !0);
    }
    function nr(t, n, a) {
      try {
        return Si(t, n, a);
      } catch (f) {
        throw typeof f == "object" && f !== null && typeof f.then == "function" || (Xn = Xn !== null ? Xn : NA()), f;
      }
    }
    function Si(t, n, a) {
      if (n.node = a, typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case ka: {
            var f = a, y = f.type, L = f.props, S = f.ref;
            Ti(t, n, y, L, S);
            return;
          }
          case ki:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Yn: {
            var Q = a, e = Q._payload, r = Q._init, i;
            try {
              i = r(e);
            } catch (ie) {
              throw typeof ie == "object" && ie !== null && typeof ie.then == "function" && on(n, "Lazy"), ie;
            }
            nr(t, n, i);
            return;
          }
        }
        if (Se(a)) {
          ca(t, n, a);
          return;
        }
        var u = Pa(a);
        if (u) {
          du(a, u);
          var d = u.call(a);
          if (d) {
            var D = d.next();
            if (!D.done) {
              var w = [];
              do
                w.push(D.value), D = d.next();
              while (!D.done);
              ca(t, n, w);
              return;
            }
            return;
          }
        }
        var O = Object.prototype.toString.call(a);
        throw new Error("Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof a == "string") {
        var G = n.blockedSegment;
        G.lastPushedText = _r(n.blockedSegment.chunks, a, t.responseState, G.lastPushedText);
        return;
      }
      if (typeof a == "number") {
        var re = n.blockedSegment;
        re.lastPushedText = _r(n.blockedSegment.chunks, "" + a, t.responseState, re.lastPushedText);
        return;
      }
      typeof a == "function" && c("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function ca(t, n, a) {
      for (var f = a.length, y = 0; y < f; y++) {
        var L = n.treeContext;
        n.treeContext = fo(L, f, y);
        try {
          mi(t, n, a[y]);
        } finally {
          n.treeContext = L;
        }
      }
    }
    function Ar(t, n, a) {
      var f = n.blockedSegment, y = f.chunks.length, L = Io(
        t,
        y,
        null,
        f.formatContext,
        // Adopt the parent segment's leading text embed
        f.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      f.children.push(L), f.lastPushedText = !1;
      var S = hi(t, n.node, n.blockedBoundary, L, n.abortSet, n.legacyContext, n.context, n.treeContext);
      n.componentStack !== null && (S.componentStack = n.componentStack.parent);
      var Q = S.ping;
      a.then(Q, Q);
    }
    function mi(t, n, a) {
      var f = n.blockedSegment.formatContext, y = n.legacyContext, L = n.context, S = null;
      S = n.componentStack;
      try {
        return nr(t, n, a);
      } catch (Q) {
        if (fi(), typeof Q == "object" && Q !== null && typeof Q.then == "function") {
          Ar(t, n, Q), n.blockedSegment.formatContext = f, n.legacyContext = y, n.context = L, MA(L), n.componentStack = S;
          return;
        } else
          throw n.blockedSegment.formatContext = f, n.legacyContext = y, n.context = L, MA(L), n.componentStack = S, Q;
      }
    }
    function fa(t, n, a, f) {
      var y = pr(t, f);
      if (n === null ? an(t, f) : (n.pendingTasks--, n.forceClientRender || (n.forceClientRender = !0, n.errorDigest = y, pi(n, f), n.parentFlushed && t.clientRenderedBoundaries.push(n))), t.allPendingTasks--, t.allPendingTasks === 0) {
        var L = t.onAllReady;
        L();
      }
    }
    function Mu(t) {
      var n = this, a = t.blockedBoundary, f = t.blockedSegment;
      f.status = jo, da(n, a, f);
    }
    function To(t, n, a) {
      var f = t.blockedBoundary, y = t.blockedSegment;
      if (y.status = jo, f === null)
        n.allPendingTasks--, n.status !== Sn && (n.status = Sn, n.destination !== null && $(n.destination));
      else {
        if (f.pendingTasks--, !f.forceClientRender) {
          f.forceClientRender = !0;
          var L = a === void 0 ? new Error("The render was aborted by the server without a reason.") : a;
          f.errorDigest = n.onError(L);
          {
            var S = "The server did not finish this Suspense boundary: ";
            L && typeof L.message == "string" ? L = S + L.message : L = S + String(L);
            var Q = Gr;
            Gr = t;
            try {
              pi(f, L);
            } finally {
              Gr = Q;
            }
          }
          f.parentFlushed && n.clientRenderedBoundaries.push(f);
        }
        if (f.fallbackAbortableTasks.forEach(function(r) {
          return To(r, n, a);
        }), f.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0) {
          var e = n.onAllReady;
          e();
        }
      }
    }
    function So(t, n) {
      if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
        var a = n.children[0];
        a.id = n.id, a.parentFlushed = !0, a.status === An && So(t, a);
      } else {
        var f = t.completedSegments;
        f.push(n);
      }
    }
    function da(t, n, a) {
      if (n === null) {
        if (a.parentFlushed) {
          if (t.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          t.completedRootSegment = a;
        }
        if (t.pendingRootTasks--, t.pendingRootTasks === 0) {
          t.onShellError = kr;
          var f = t.onShellReady;
          f();
        }
      } else if (n.pendingTasks--, !n.forceClientRender) {
        if (n.pendingTasks === 0)
          a.parentFlushed && a.status === An && So(n, a), n.parentFlushed && t.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(Mu, t), n.fallbackAbortableTasks.clear();
        else if (a.parentFlushed && a.status === An) {
          So(n, a);
          var y = n.completedSegments;
          y.length === 1 && n.parentFlushed && t.partialBoundaries.push(n);
        }
      }
      if (t.allPendingTasks--, t.allPendingTasks === 0) {
        var L = t.onAllReady;
        L();
      }
    }
    function Ma(t, n) {
      var a = n.blockedSegment;
      if (a.status === Mi) {
        MA(n.context);
        var f = null;
        f = Gr, Gr = n;
        try {
          nr(t, n, n.node), $r(a.chunks, t.responseState, a.lastPushedText, a.textEmbedded), n.abortSet.delete(n), a.status = An, da(t, n.blockedBoundary, a);
        } catch (L) {
          if (fi(), typeof L == "object" && L !== null && typeof L.then == "function") {
            var y = n.ping;
            L.then(y, y);
          } else
            n.abortSet.delete(n), a.status = Tn, fa(t, n.blockedBoundary, a, L);
        } finally {
          Gr = f;
        }
      }
    }
    function TA(t) {
      if (t.status !== Sn) {
        var n = no(), a = DA.current;
        DA.current = ta;
        var f;
        f = Lo.getCurrentStack, Lo.getCurrentStack = NA;
        var y = di;
        vA(t.responseState);
        try {
          var L = t.pingedTasks, S;
          for (S = 0; S < L.length; S++) {
            var Q = L[S];
            Ma(t, Q);
          }
          L.splice(0, S), t.destination !== null && Eo(t, t.destination);
        } catch (e) {
          pr(t, e), an(t, e);
        } finally {
          vA(y), DA.current = a, Lo.getCurrentStack = f, a === ta && MA(n);
        }
      }
    }
    function SA(t, n, a) {
      switch (a.parentFlushed = !0, a.status) {
        case Mi: {
          var f = a.id = t.nextSegmentId++;
          return a.lastPushedText = !1, a.textEmbedded = !1, zn(n, t.responseState, f);
        }
        case An: {
          a.status = No;
          for (var y = !0, L = a.chunks, S = 0, Q = a.children, e = 0; e < Q.length; e++) {
            for (var r = Q[e]; S < r.index; S++)
              B(n, L[S]);
            y = mo(t, n, r);
          }
          for (; S < L.length - 1; S++)
            B(n, L[S]);
          return S < L.length && (y = _(n, L[S])), y;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function mo(t, n, a) {
      var f = a.boundary;
      if (f === null)
        return SA(t, n, a);
      if (f.parentFlushed = !0, f.forceClientRender)
        return Vt(n, t.responseState, f.errorDigest, f.errorMessage, f.errorComponentStack), SA(t, n, a), Uo(n, t.responseState);
      if (f.pendingTasks > 0) {
        f.rootSegmentID = t.nextSegmentId++, f.completedSegments.length > 0 && t.partialBoundaries.push(f);
        var y = f.id = fn(t.responseState);
        return On(n, t.responseState, y), SA(t, n, a), Qn(n, t.responseState);
      } else {
        if (f.byteSize > t.progressiveChunkSize)
          return f.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(f), On(n, t.responseState, f.id), SA(t, n, a), Qn(n, t.responseState);
        BA(n, t.responseState);
        var L = f.completedSegments;
        if (L.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var S = L[0];
        return mo(t, n, S), UA(n, t.responseState);
      }
    }
    function ga(t, n, a) {
      return zi(n, t.responseState, a.id, a.errorDigest, a.errorMessage, a.errorComponentStack);
    }
    function mA(t, n, a) {
      return Te(n, t.responseState, a.formatContext, a.id), mo(t, n, a), rt(n, a.formatContext);
    }
    function EA(t, n, a) {
      for (var f = a.completedSegments, y = 0; y < f.length; y++) {
        var L = f[y];
        Ei(t, n, a, L);
      }
      return f.length = 0, Ro(n, t.responseState, a.id, a.rootSegmentID);
    }
    function gu(t, n, a) {
      for (var f = a.completedSegments, y = 0; y < f.length; y++) {
        var L = f[y];
        if (!Ei(t, n, a, L))
          return y++, f.splice(0, y), !1;
      }
      return f.splice(0, y), !0;
    }
    function Ei(t, n, a, f) {
      if (f.status === No)
        return !0;
      var y = f.id;
      if (y === -1) {
        var L = f.id = a.rootSegmentID;
        if (L === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return mA(t, n, f);
      } else
        return mA(t, n, f), Ta(n, t.responseState, y);
    }
    function Eo(t, n) {
      R();
      try {
        var a = t.completedRootSegment;
        a !== null && t.pendingRootTasks === 0 && (mo(t, n, a), t.completedRootSegment = null, Qo(n, t.responseState));
        var f = t.clientRenderedBoundaries, y;
        for (y = 0; y < f.length; y++) {
          var L = f[y];
          ga(t, n, L);
        }
        f.splice(0, y);
        var S = t.completedBoundaries;
        for (y = 0; y < S.length; y++) {
          var Q = S[y];
          EA(t, n, Q);
        }
        S.splice(0, y), he(n), R(n);
        var e = t.partialBoundaries;
        for (y = 0; y < e.length; y++) {
          var r = e[y];
          if (!gu(t, n, r)) {
            t.destination = null, y++, e.splice(0, y);
            return;
          }
        }
        e.splice(0, y);
        var i = t.completedBoundaries;
        for (y = 0; y < i.length; y++) {
          var u = i[y];
          EA(t, n, u);
        }
        i.splice(0, y);
      } finally {
        he(n), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && (t.abortableTasks.size !== 0 && c("There was still abortable task at the root when we closed. This is a bug in React."), $(n));
      }
    }
    function hu(t) {
      W(function() {
        return TA(t);
      });
    }
    function ha(t, n) {
      if (t.status === gi) {
        t.status = Sn, ee(n, t.fatalError);
        return;
      }
      if (t.status !== Sn && t.destination === null) {
        t.destination = n;
        try {
          Eo(t, n);
        } catch (a) {
          pr(t, a), an(t, a);
        }
      }
    }
    function Co(t, n) {
      try {
        var a = t.abortableTasks;
        a.forEach(function(f) {
          return To(f, t, n);
        }), a.clear(), t.destination !== null && Eo(t, t.destination);
      } catch (f) {
        pr(t, f), an(t, f);
      }
    }
    function yu(t, n) {
      return new Promise(function(a, f) {
        var y, L, S = new Promise(function(d, D) {
          L = d, y = D;
        });
        function Q() {
          var d = new ReadableStream(
            {
              type: "bytes",
              pull: function(D) {
                ha(r, D);
              },
              cancel: function(D) {
                Co(r);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          d.allReady = S, a(d);
        }
        function e(d) {
          S.catch(function() {
          }), f(d);
        }
        var r = iu(t, cr(n ? n.identifierPrefix : void 0, n ? n.nonce : void 0, n ? n.bootstrapScriptContent : void 0, n ? n.bootstrapScripts : void 0, n ? n.bootstrapModules : void 0), Dr(n ? n.namespaceURI : void 0), n ? n.progressiveChunkSize : void 0, n ? n.onError : void 0, L, Q, e, y);
        if (n && n.signal) {
          var i = n.signal, u = function() {
            Co(r, i.reason), i.removeEventListener("abort", u);
          };
          i.addEventListener("abort", u);
        }
        hu(r);
      });
    }
    La.renderToReadableStream = yu, La.version = g;
  }()), La;
}
var zA, Nu;
process.env.NODE_ENV === "production" ? (zA = Es(), Nu = Cs()) : (zA = xs(), Nu = zs());
bA.version = zA.version;
bA.renderToString = zA.renderToString;
bA.renderToStaticMarkup = zA.renderToStaticMarkup;
bA.renderToNodeStream = zA.renderToNodeStream;
bA.renderToStaticNodeStream = zA.renderToStaticNodeStream;
bA.renderToReadableStream = Nu.renderToReadableStream;
const bs = () => {
  var g;
  const { botOptions: j } = Rt();
  return /* @__PURE__ */ Y.jsx("div", { className: "rcb-line-break-container", children: /* @__PURE__ */ Y.jsx("div", { style: j.chatHistoryLineBreakStyle, className: "rcb-line-break-text", children: (g = j.chatHistory) == null ? void 0 : g.chatHistoryLineBreakText }) });
};
const ks = () => {
  var T;
  const { botOptions: j } = Rt(), g = {
    borderTop: `4px solid ${(T = j.theme) == null ? void 0 : T.primaryColor}`,
    ...j.loadingSpinnerStyle
  };
  return /* @__PURE__ */ Y.jsx("div", { className: "rcb-spinner-container", children: /* @__PURE__ */ Y.jsx("div", { style: g, className: "rcb-spinner" }) });
};
let Zu = !1, ju = "rcb-history", ja = 30, Xu = !1, Iu = [];
const Pu = async (j) => {
  if (Xu)
    return;
  const g = [], T = Zu ? Iu.length : 0;
  for (let c = j.length - 1; c >= T; c--) {
    const P = j[c];
    if (P.sender === "system" || (P.content !== "" && g.unshift(P), g.length === ja))
      break;
  }
  let C = g.map(Ps);
  if (C.length < ja) {
    const c = ja - C.length;
    C = [...Iu.slice(-c), ...C];
  }
  localStorage.setItem(ju, JSON.stringify(C));
}, Os = (j) => {
  if (j != null)
    try {
      return JSON.parse(j);
    } catch {
      return [];
    }
  return [];
}, Qs = (j) => {
  var g, T, C;
  ju = (g = j.chatHistory) == null ? void 0 : g.storageKey, ja = (T = j.chatHistory) == null ? void 0 : T.maxEntries, Xu = (C = j.chatHistory) == null ? void 0 : C.disabled, Iu = Os(localStorage.getItem(ju));
}, Ps = (j) => _u(j.content) ? structuredClone({
  content: bA.renderToString(j.content),
  type: "object",
  sender: j.sender
}) : { ...j, type: "string" }, Bu = (j, g, T, C) => {
  var c;
  if (Zu = !0, g != null)
    try {
      T((W) => {
        const H = {
          content: /* @__PURE__ */ Y.jsx(ks, {}),
          sender: "system"
        };
        return W.shift(), [H, ...W];
      });
      const P = JSON.parse(g).map((W) => {
        if (W.type === "object") {
          const H = Ju(W.content, j);
          return { ...W, content: H };
        }
        return W;
      });
      setTimeout(() => {
        var W;
        T((H) => {
          var m;
          H.shift();
          let N;
          return (m = j.chatHistory) != null && m.autoLoad ? N = {
            content: /* @__PURE__ */ Y.jsx(Y.Fragment, {}),
            sender: "system"
          } : N = {
            content: /* @__PURE__ */ Y.jsx(bs, {}),
            sender: "system"
          }, [...P, N, ...H];
        }), C(((W = j.chatInput) == null ? void 0 : W.disabled) || !1);
      }, 500);
    } catch {
      localStorage.removeItem((c = j.chatHistory) == null ? void 0 : c.storageKey);
    }
}, Ju = (j, g) => {
  const C = new DOMParser().parseFromString(j, "text/html");
  return Array.from(C.body.childNodes).map((W, H) => {
    var N;
    if (W.nodeType === Node.TEXT_NODE)
      return W.textContent;
    {
      const m = W.tagName.toLowerCase();
      let R = Array.from(W.attributes).reduce((he, $) => {
        const te = $.name.toLowerCase();
        if (te === "style") {
          const V = $.value.split(";").filter((ee) => ee.trim() !== ""), k = {};
          V.forEach((ee) => {
            const [le, ye] = ee.split(":").map((pe) => pe.trim()), Ae = le.replace(/-([a-z])/g, (pe, ce) => ce.toUpperCase());
            k[Ae] = ye;
          }), he[te] = k;
        } else
          he[te] = $.value;
        return he;
      }, {});
      const B = W.classList;
      (N = g.botBubble) != null && N.showAvatar && (R = Bs(B, R)), R = Us(B, R, g), R = Rs(B, R, g), R = Ys(B, R, g);
      const _ = Ju(W.innerHTML, g);
      return $u(m, { key: H, ...R }, _);
    }
  });
}, Bs = (j, g) => ((j.contains("rcb-options-container") || j.contains("rcb-checkbox-container")) && (Object.prototype.hasOwnProperty.call(g, "class") ? g.class = `${j.toString()} rcb-options-offset` : g.class = "rcb-options-offset"), g), Us = (j, g, T) => {
  var C, c, P, W, H;
  return j.contains("rcb-options") && (g.style = {
    ...g.style,
    color: ((C = T.botOptionStyle) == null ? void 0 : C.color) || ((c = T.theme) == null ? void 0 : c.primaryColor),
    borderColor: ((P = T.botOptionStyle) == null ? void 0 : P.color) || ((W = T.theme) == null ? void 0 : W.primaryColor),
    cursor: `url(${(H = T.theme) == null ? void 0 : H.actionDisabledIcon}), auto`,
    ...T.botOptionStyle
  }), g;
}, Rs = (j, g, T) => {
  var C, c, P, W, H;
  return j.contains("rcb-checkbox-row-container") && (g.style = {
    ...g.style,
    color: ((C = T.botCheckboxRowStyle) == null ? void 0 : C.color) || ((c = T.theme) == null ? void 0 : c.primaryColor),
    borderColor: ((P = T.botCheckboxRowStyle) == null ? void 0 : P.color) || ((W = T.theme) == null ? void 0 : W.primaryColor),
    cursor: `url(${(H = T.theme) == null ? void 0 : H.actionDisabledIcon}), auto`,
    ...T.botCheckboxRowStyle
  }), g;
}, Ys = (j, g, T) => {
  var C, c, P, W, H;
  return j.contains("rcb-checkbox-next-button") && (g.style = {
    ...g.style,
    color: ((C = T.botCheckboxNextStyle) == null ? void 0 : C.color) || ((c = T.theme) == null ? void 0 : c.primaryColor),
    borderColor: ((P = T.botCheckboxNextStyle) == null ? void 0 : P.color) || ((W = T.theme) == null ? void 0 : W.primaryColor),
    cursor: `url(${(H = T.theme) == null ? void 0 : H.actionDisabledIcon}), auto`,
    ...T.botCheckboxNextStyle
  }), g;
}, Hs = (j, g, T, C, c) => {
  const P = new SpeechSynthesisUtterance();
  P.text = j, P.lang = g, P.rate = C, P.volume = c;
  let W = !1;
  for (const H of T)
    if (window.speechSynthesis.getVoices().find((N) => {
      if (N.name === H) {
        P.voice = N, window.speechSynthesis.speak(P), W = !0;
        return;
      }
    }), W)
      break;
  W || window.speechSynthesis.speak(P);
}, Fs = (j, g, T) => {
  var C, c, P, W, H, N;
  (C = j.audio) != null && C.disabled || T.sender === "user" || typeof T.content != "string" || !(j != null && j.isOpen) && !((c = j.theme) != null && c.embedded) || !g || Hs(
    T.content,
    (P = j.audio) == null ? void 0 : P.language,
    (W = j.audio) == null ? void 0 : W.voiceNames,
    (H = j.audio) == null ? void 0 : H.rate,
    (N = j.audio) == null ? void 0 : N.volume
  );
};
const Ws = ({ flow: j }) => {
  var et, Xt, ur, Jt, sr, Kt, wr, lr, Ht;
  const { botOptions: g, setBotOptions: T } = Rt(), { messages: C, setMessages: c } = Hu(), { paths: P, setPaths: W } = Ia(), H = Zr(null), N = Zr(null), m = Zr(""), R = Zr(!1), B = Zr(!1), _ = Zr(null), he = Zr(), $ = Zr(null), [te, V] = Ve(!1), [k, ee] = Ve(!1), [le, ye] = Ve(!0), [Ae, pe] = Ve(!1), [ce, Xe] = Ve(!1), [ve, je] = Ve(!1), [ze, we] = Ve(!1), [Ke, De] = Ve(!1), [Ue, _e] = Ve(!1), [st, jt] = Ve(0), [lt, Lt] = Ve(!1), [Ye, He] = Ve(), [Ct, wt] = Ve(0), [Ge, be] = Ve(((et = window.visualViewport) == null ? void 0 : et.height) || window.innerHeight), [Qe, Oe] = Ve(((Xt = window.visualViewport) == null ? void 0 : Xt.width) || window.innerWidth), ke = Zr(0);
  Ut(() => {
    var q, ue, ae, ge, Le, ne, xe, tt;
    if (window.addEventListener("click", Ze), window.addEventListener("keydown", Ze), window.addEventListener("touchstart", Ze), (q = g.notification) != null && q.disabled, je((ue = g.chatInput) == null ? void 0 : ue.disabled), pe((ae = g.audio) == null ? void 0 : ae.defaultToggledOn), Xe((ge = g.voice) == null ? void 0 : ge.defaultToggledOn), (Le = g.chatHistory) != null && Le.disabled)
      localStorage.removeItem((ne = g.chatHistory) == null ? void 0 : ne.storageKey);
    else {
      const nt = localStorage.getItem((xe = g.chatHistory) == null ? void 0 : xe.storageKey);
      nt != null && (c([{
        content: /* @__PURE__ */ Y.jsx(ps, { chatHistory: nt, showChatHistory: Qt }),
        sender: "system"
      }]), (tt = g.chatHistory) != null && tt.autoLoad && Bu(g, nt, c, je));
    }
    return () => {
      window.removeEventListener("click", Ze), window.removeEventListener("keydown", Ze), window.removeEventListener("touchstart", Ze);
    };
  }, []), Ut(() => {
    Qs(g);
  }, [(ur = g.chatHistory) == null ? void 0 : ur.storageKey, (Jt = g.chatHistory) == null ? void 0 : Jt.maxEntries, (sr = g.chatHistory) == null ? void 0 : sr.disabled]), Ut(() => {
    var q;
    Qr || (q = g.theme) != null && q.embedded || navigator.virtualKeyboard && (navigator.virtualKeyboard.overlaysContent = !0, navigator.virtualKeyboard.addEventListener("geometrychange", (ue) => {
      if (!ue.target)
        return;
      const { x: ae, y: ge, width: Le, height: ne } = ue.target.boundingRect;
      ae == 0 && ge == 0 && Le == 0 && ne == 0 ? (setTimeout(() => {
        var xe;
        be((xe = window.visualViewport) == null ? void 0 : xe.height);
      }, 101), setTimeout(() => {
        var xe, tt;
        Ge != ((xe = window.visualViewport) == null ? void 0 : xe.height) && be((tt = window.visualViewport) == null ? void 0 : tt.height);
      }, 1001)) : setTimeout(() => {
        var xe;
        be(((xe = window.visualViewport) == null ? void 0 : xe.height) - ne);
      }, 101);
    }));
  }, []), Ut(() => {
    Pu(C), ct();
  }, [C.length]), Ut(() => {
    R.current || Pu(C);
  }, [R.current]), Ut(() => {
    var Le, ne, xe, tt;
    if (g.isOpen && (wt(0), be((Le = window.visualViewport) == null ? void 0 : Le.height), Oe((ne = window.visualViewport) == null ? void 0 : ne.width)), Qr)
      return;
    const q = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" }), ue = () => ke.current = window.scrollY, ae = () => {
      var nt, ft;
      be((nt = window.visualViewport) == null ? void 0 : nt.height), Oe((ft = window.visualViewport) == null ? void 0 : ft.width);
    }, ge = () => {
      var nt;
      window.removeEventListener("scroll", q), window.removeEventListener("scroll", ue), (nt = window.visualViewport) == null || nt.removeEventListener("resize", ae);
    };
    return g.isOpen ? (ge(), document.body.style.position = "fixed", window.addEventListener("scroll", q), (xe = window.visualViewport) == null || xe.addEventListener("resize", ae)) : (document.body.style.position = "static", ge(), window.scrollTo({ top: ke.current, left: 0, behavior: "auto" }), window.addEventListener("scroll", ue), (tt = window.visualViewport) == null || tt.removeEventListener("resize", ae)), ge;
  }, [g.isOpen]), Ut(() => {
    const q = it();
    if (!q)
      return;
    const ue = j[q];
    if (!ue) {
      Lt(!1);
      return;
    }
    const ae = {
      prevPath: xt(),
      userInput: m.current,
      injectMessage: Nt,
      streamMessage: It,
      openChat: Tt
    };
    pt(q, ue, ae);
  }, [P]), Ut(() => {
    var q;
    (k || ((q = g.theme) == null ? void 0 : q.flowStartTrigger) === "ON_LOAD") && W(["start"]);
  }, [k]);
  const pt = async (q, ue, ae) => {
    q === "start" && je(!0), await ms(
      j,
      q,
      ae,
      je,
      we,
      W,
      He,
      $e
    ), Lt(!1), Zt(), pu(B.current && !ue.chatDisabled, g), R.current = !1;
  }, Ze = () => {
    var ue;
    V(!0), !k && ((ue = g.theme) == null ? void 0 : ue.flowStartTrigger) === "ON_PAGE_INTERACT" && ee(!0);
    const q = new SpeechSynthesisUtterance();
    q.text = "", q.onend = () => {
      window.removeEventListener("click", Ze), window.removeEventListener("keydown", Ze), window.removeEventListener("touchstart", Ze);
    }, window.speechSynthesis.speak(q);
  }, Tt = (q) => {
    T({ ...g, isOpen: q });
  }, ct = () => {
    var ue, ae;
    if (!_.current || C.length === 0)
      return;
    const q = C[C.length - 1];
    if (!(!q || q.sender === "user" || lt || (ue = g.theme) != null && ue.embedded && zu(H.current)) && !(g.isOpen && !Ue) && (wt((ge) => ge + 1), !((ae = g.notification) != null && ae.disabled) && le && te && he.current)) {
      const ge = _.current.createBufferSource();
      ge.buffer = he.current, ge.connect($.current).connect(_.current.destination), ge.start();
    }
  }, it = () => P.length > 0 ? P[P.length - 1] : null, xt = () => P.length > 1 ? P[P.length - 2] : null, Nt = async (q, ue = "bot") => {
    var ne, xe, tt, nt, ft, mt;
    const ae = { content: q, sender: ue };
    Fs(g, Ae, ae);
    const ge = typeof ae.content == "string" && ae.sender === "bot" && ((ne = g == null ? void 0 : g.botBubble) == null ? void 0 : ne.simStream), Le = typeof ae.content == "string" && ae.sender === "user" && ((xe = g == null ? void 0 : g.userBubble) == null ? void 0 : xe.simStream);
    if (ge) {
      const At = (tt = g.botBubble) == null ? void 0 : tt.streamSpeed, Re = (nt = g.botBubble) == null ? void 0 : nt.dangerouslySetInnerHtml;
      await or(ae, At, Re);
    } else if (Le) {
      const At = (ft = g.userBubble) == null ? void 0 : ft.streamSpeed, Re = (mt = g.userBubble) == null ? void 0 : mt.dangerouslySetInnerHtml;
      await or(ae, At, Re);
    } else
      c((At) => [...At, ae]);
  }, or = async (q, ue, ae) => {
    Lt(!1), c((tt) => [...tt, q]), R.current = !0;
    let ge = q.content;
    ae && (ge = cs(ge));
    let Le = 0;
    const ne = ge.length;
    q.content = "", await new Promise((tt) => {
      const nt = setInterval(() => {
        if (Le >= ne) {
          clearInterval(nt), tt();
          return;
        }
        c((ft) => {
          const mt = [...ft];
          for (let At = mt.length - 1; At >= 0; At--)
            if (mt[At].sender === q.sender && typeof mt[At].content == "string") {
              const Re = ge[Le];
              Re && (q.content += Re, mt[At] = q), Le++;
              break;
            }
          return mt;
        });
      }, ue);
    }), R.current = !1;
  }, It = async (q, ue = "bot") => {
    const ae = { content: q, sender: ue };
    if (!R.current) {
      Lt(!1), c((ge) => [...ge, ae]), R.current = !0;
      return;
    }
    c((ge) => {
      const Le = [...ge];
      for (let ne = Le.length - 1; ne >= 0; ne--)
        if (Le[ne].sender === ue && typeof Le[ne].content == typeof q) {
          Le[ne] = ae;
          break;
        }
      return Le;
    });
  }, Qt = (q) => {
    De(!0), je(!0), Bu(g, q, c, je);
  }, Zt = () => {
    var ge;
    const q = it();
    if (!q)
      return;
    const ue = j[q];
    if (!ue)
      return;
    const ae = ue.chatDisabled ? ue.chatDisabled : (ge = g.chatInput) == null ? void 0 : ge.disabled;
    je(ae), ae || setTimeout(() => {
      var Le, ne, xe;
      (Le = g.theme) != null && Le.embedded ? zu(H.current) && ((ne = N.current) == null || ne.focus()) : q !== "start" && ((xe = N.current) == null || xe.focus());
    }, 100), ue.isSensitive ? we(ue.isSensitive) : we(!1);
  }, Ir = () => {
    ye((q) => !q);
  }, St = () => {
    pe((q) => !q);
  }, Dt = () => {
    ve || Xe((q) => !q);
  }, $e = async (q, ue, ae = !0) => {
    var ge, Le;
    clearTimeout(Ye), ue = ue.trim(), m.current = ue, ue !== "" && (ae && await ir(ue), H.current && (H.current.scrollTop = H.current.scrollHeight), N.current && (N.current.value = ""), (ge = g.chatInput) != null && ge.blockSpam && je(!0), B.current = ce, pu(!1, g), setTimeout(() => {
      Lt(!0);
    }, 400), setTimeout(async () => {
      const ne = { prevPath: xt(), userInput: ue, injectMessage: Nt, streamMessage: It, openChat: Tt };
      await Gu(j, q, ne, W) || (Zt(), pu(B.current, g), Lt(!1));
    }, (Le = g.chatInput) == null ? void 0 : Le.botDelay));
  }, ir = async (q) => {
    var ge, Le, ne;
    const ue = it();
    if (!ue)
      return;
    const ae = j[ue];
    if (ae) {
      if (ae.isSensitive) {
        if ((ge = g == null ? void 0 : g.sensitiveInput) != null && ge.hideInUserBubble)
          return;
        if ((Le = g == null ? void 0 : g.sensitiveInput) != null && Le.maskInUserBubble) {
          await Nt("*".repeat(((ne = g.sensitiveInput) == null ? void 0 : ne.asterisksCount) || 10), "user");
          return;
        }
      }
      await Nt(q, "user");
    }
  }, ar = () => {
    var ue;
    const q = "rcb-chat-bot ";
    return (ue = g.theme) != null && ue.embedded ? q + "rcb-window-embedded" : g.isOpen ? q + "rcb-window-open" : q + "rcb-window-close";
  }, Yt = () => {
    var q;
    return !Qr && !((q = g.theme) != null && q.embedded) ? {
      ...g.chatWindowStyle,
      borderRadius: "0px",
      left: "0px",
      right: "auto",
      top: "0px",
      bottom: "auto",
      width: `${Qe}px`,
      height: `${Ge}px`
    } : g.chatWindowStyle;
  };
  return /* @__PURE__ */ Y.jsxs(
    "div",
    {
      onMouseDown: (q) => {
        var ue, ae;
        !k && ((ue = g.theme) == null ? void 0 : ue.flowStartTrigger) === "ON_CHATBOT_INTERACT" && ee(!0), Qr ? (ae = N.current) == null || ae.blur() : q == null || q.preventDefault();
      },
      className: ar(),
      children: [
        /* @__PURE__ */ Y.jsx(ys, {}),
        /* @__PURE__ */ Y.jsx(hs, { unreadCount: Ct }),
        g.isOpen && !Qr && !((Kt = g.theme) != null && Kt.embedded) && /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
          /* @__PURE__ */ Y.jsx("style", { children: `
							html {
								overflow: hidden !important;
								touch-action: none !important;
								scroll-behavior: auto !important;
							}
						` }),
          /* @__PURE__ */ Y.jsx(
            "div",
            {
              style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                zIndex: 9999
              }
            }
          )
        ] }),
        /* @__PURE__ */ Y.jsxs(
          "div",
          {
            style: Yt(),
            className: "rcb-chat-window",
            children: [
              ((wr = g.theme) == null ? void 0 : wr.showHeader) && /* @__PURE__ */ Y.jsx(
                rs,
                {
                  notificationToggledOn: le,
                  handleToggleNotification: Ir,
                  audioToggledOn: Ae,
                  handleToggleAudio: St
                }
              ),
              /* @__PURE__ */ Y.jsx(
                As,
                {
                  chatBodyRef: H,
                  isBotTyping: lt,
                  isLoadingChatHistory: Ke,
                  chatScrollHeight: st,
                  setChatScrollHeight: jt,
                  setIsLoadingChatHistory: De,
                  isScrolling: Ue,
                  setIsScrolling: _e,
                  unreadCount: Ct,
                  setUnreadCount: wt
                }
              ),
              ((lr = g.theme) == null ? void 0 : lr.showInputRow) && /* @__PURE__ */ Y.jsx(
                fs,
                {
                  handleToggleVoice: Dt,
                  handleActionInput: $e,
                  inputRef: N,
                  textAreaDisabled: ve,
                  textAreaSensitiveMode: ze,
                  injectMessage: Nt,
                  voiceToggledOn: ce,
                  getCurrPath: it,
                  hasFlowStarted: k,
                  setHasFlowStarted: ee
                }
              ),
              ((Ht = g.theme) == null ? void 0 : Ht.showFooter) && /* @__PURE__ */ Y.jsx(
                gs,
                {
                  inputRef: N,
                  flow: j,
                  textAreaDisabled: ve,
                  handleActionInput: $e,
                  injectMessage: Nt,
                  streamMessage: It,
                  getCurrPath: it,
                  getPrevPath: xt,
                  openChat: Tt
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Vs = "data:image/png;base64,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", Gs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE/SURBVDhPfZPBUcMwEEWFK0gJ0AFXbu6ApAJCBYQKGCoIVJBQQegAbhyBDtIB6QDek1ee2JH5M3/WlrRff1dS+g8fKZ3L+K3iLGIPEi4JN3AJZ44FXuHLVRd7DARIXhHW8AC/gn7rYg4VfELknjgEyQ/wF/7Aqu2jNbsY6sDAHJooXfAWUydgbh1rdJSaPJrSdcQLaI3tlEjYtzRLTQ0Lrat1kMkDXPC9dYy5DbGGZ+gJzXSggDWrmoHILUGR5YST94htKUHY7R4hUsqZcpIaFu6JJnv+A0Q5ioydWLIwN3d2Bz2B44vTI+b70zHCT79LCTbF5KrVUWO9AzoY3EhVN9Bd8vHU4K6xRkfZ7fgq68A3YG3u8A3LVfZ92CdPYIGr3PTaY1LgDo6basIj3JZkcSJQgJC7FhEvWdfxAVL6AwEQafmbqcSDAAAAAElFTkSuQmCC", Uu = "data:image/png;base64,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", Zs = (j, g) => /* @__PURE__ */ ot.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 90, height: 90, viewBox: "0 0 90 90", ref: g, ...j }, /* @__PURE__ */ ot.createElement("path", { d: "M 38.062 25.827 C 28.834 30.776, 28.834 45.224, 38.062 50.173 C 50.593 56.893, 63.893 43.593, 57.173 31.062 C 54.984 26.980, 49.846 24, 45 24 C 43.058 24, 39.936 24.822, 38.062 25.827 M 35 60.576 C 27.228 64.982, 23.960 69.562, 21.023 80.160 C 19.910 84.175, 19 88.031, 19 88.730 C 19 89.724, 24.647 90, 45 90 C 65.353 90, 71 89.724, 71 88.730 C 71 86.070, 66.879 72.741, 65.265 70.180 C 58.196 58.961, 45.149 54.821, 35 60.576", stroke: "none", fill: "#5c5c5c", fillRule: "evenodd" }), /* @__PURE__ */ ot.createElement("path", { d: "M 0 45 L 0 90 9.317 90 L 18.634 90 20.370 82.636 C 22.366 74.170, 25.057 68.651, 29.062 64.804 C 38.455 55.783, 51.545 55.783, 60.938 64.804 C 64.948 68.655, 67.634 74.172, 69.638 82.670 L 71.382 90.068 80.941 89.784 L 90.500 89.500 90.760 44.750 L 91.021 0 45.510 0 L 0 0 0 45 M 0.460 45.500 C 0.460 70.250, 0.590 80.232, 0.749 67.682 C 0.908 55.132, 0.908 34.882, 0.749 22.682 C 0.590 10.482, 0.460 20.750, 0.460 45.500 M 38.062 25.827 C 28.834 30.776, 28.834 45.224, 38.062 50.173 C 50.593 56.893, 63.893 43.593, 57.173 31.062 C 54.984 26.980, 49.846 24, 45 24 C 43.058 24, 39.936 24.822, 38.062 25.827", stroke: "none", fill: "#c4c4c4", fillRule: "evenodd" }));
mn(Zs);
const Xs = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCAwIDkwIDkwIiB2ZXJzaW9uPSIxLjEiPjxwYXRoIGQ9Ik0gMzguMDYyIDI1LjgyNyBDIDI4LjgzNCAzMC43NzYsIDI4LjgzNCA0NS4yMjQsIDM4LjA2MiA1MC4xNzMgQyA1MC41OTMgNTYuODkzLCA2My44OTMgNDMuNTkzLCA1Ny4xNzMgMzEuMDYyIEMgNTQuOTg0IDI2Ljk4MCwgNDkuODQ2IDI0LCA0NSAyNCBDIDQzLjA1OCAyNCwgMzkuOTM2IDI0LjgyMiwgMzguMDYyIDI1LjgyNyBNIDM1IDYwLjU3NiBDIDI3LjIyOCA2NC45ODIsIDIzLjk2MCA2OS41NjIsIDIxLjAyMyA4MC4xNjAgQyAxOS45MTAgODQuMTc1LCAxOSA4OC4wMzEsIDE5IDg4LjczMCBDIDE5IDg5LjcyNCwgMjQuNjQ3IDkwLCA0NSA5MCBDIDY1LjM1MyA5MCwgNzEgODkuNzI0LCA3MSA4OC43MzAgQyA3MSA4Ni4wNzAsIDY2Ljg3OSA3Mi43NDEsIDY1LjI2NSA3MC4xODAgQyA1OC4xOTYgNTguOTYxLCA0NS4xNDkgNTQuODIxLCAzNSA2MC41NzYiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzVjNWM1YyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTSAwIDQ1IEwgMCA5MCA5LjMxNyA5MCBMIDE4LjYzNCA5MCAyMC4zNzAgODIuNjM2IEMgMjIuMzY2IDc0LjE3MCwgMjUuMDU3IDY4LjY1MSwgMjkuMDYyIDY0LjgwNCBDIDM4LjQ1NSA1NS43ODMsIDUxLjU0NSA1NS43ODMsIDYwLjkzOCA2NC44MDQgQyA2NC45NDggNjguNjU1LCA2Ny42MzQgNzQuMTcyLCA2OS42MzggODIuNjcwIEwgNzEuMzgyIDkwLjA2OCA4MC45NDEgODkuNzg0IEwgOTAuNTAwIDg5LjUwMCA5MC43NjAgNDQuNzUwIEwgOTEuMDIxIDAgNDUuNTEwIDAgTCAwIDAgMCA0NSBNIDAuNDYwIDQ1LjUwMCBDIDAuNDYwIDcwLjI1MCwgMC41OTAgODAuMjMyLCAwLjc0OSA2Ny42ODIgQyAwLjkwOCA1NS4xMzIsIDAuOTA4IDM0Ljg4MiwgMC43NDkgMjIuNjgyIEMgMC41OTAgMTAuNDgyLCAwLjQ2MCAyMC43NTAsIDAuNDYwIDQ1LjUwMCBNIDM4LjA2MiAyNS44MjcgQyAyOC44MzQgMzAuNzc2LCAyOC44MzQgNDUuMjI0LCAzOC4wNjIgNTAuMTczIEMgNTAuNTkzIDU2Ljg5MywgNjMuODkzIDQzLjU5MywgNTcuMTczIDMxLjA2MiBDIDU0Ljk4NCAyNi45ODAsIDQ5Ljg0NiAyNCwgNDUgMjQgQyA0My4wNTggMjQsIDM5LjkzNiAyNC44MjIsIDM4LjA2MiAyNS44MjciIHN0cm9rZT0ibm9uZSIgZmlsbD0iI2M0YzRjNCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+", Js = (j, g) => /* @__PURE__ */ ot.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 637 637", ref: g, ...j }, /* @__PURE__ */ ot.createElement("path", { d: "M477.5 112.69c-4.4.776-10.025 1.806-12.5 2.287l-4.5.876 4.5-.343c2.475-.189 8.55-1.04 13.5-1.891 10.71-1.842 35.6-2.115 42.307-.464 2.581.636 5.581 1.761 6.666 2.5 1.084.74 2.422 1.345 2.972 1.345 2.337 0-4.024-3.335-8.772-4.599-6.741-1.795-33.352-1.621-44.173.289m56 5.878c1.1.813 4.749 3.483 8.109 5.934 7.15 5.215 20.391 17.897 20.391 19.53 0 1.549 7.128 12.173 7.75 11.551.275-.275-1.131-2.957-3.125-5.961-1.994-3.003-3.625-5.752-3.625-6.108 0-2.727-14.777-16.353-25.3-23.331-4.803-3.185-7.971-4.403-4.2-1.615M336 134.973c-3.575.378-7.6 1.048-8.945 1.487-1.345.439-12.82 2.499-25.5 4.578s-21.853 3.821-20.383 3.871c1.469.05 7.994-.802 14.5-1.893 6.505-1.092 14.303-2.248 17.328-2.57 3.025-.322 8.95-1.454 13.167-2.516 4.216-1.061 9.702-1.93 12.191-1.93 2.488 0 4.802-.45 5.142-1 .34-.55.254-.936-.191-.858-.445.078-3.734.452-7.309.831m-179.5 30.092c-2.75.448-7.475 1.299-10.5 1.89-3.025.591-8.65 1.498-12.5 2.015-13.282 1.784-33.152 6.247-34.484 7.745-.284.319.609.272 1.984-.105 6.031-1.652 26.983-5.828 33.435-6.664 3.886-.504 9.54-1.395 12.565-1.981a304.111 304.111 0 0 1 10.749-1.847c2.887-.431 5.55-1.083 5.917-1.451.777-.776-.347-.714-7.166.398m368.083 8.335c2.155 1.87 4.142 3.176 4.417 2.903.613-.611-6.05-6.303-7.379-6.303-.525 0 .808 1.53 2.962 3.4M439 178.604c-4.125.751-12.9 2.287-19.5 3.413-6.6 1.125-15.681 2.707-20.18 3.515-4.498.807-9.336 1.468-10.75 1.468-1.413 0-2.57.459-2.57 1.019 0 .561 1.012.807 2.25.549 1.238-.259 6.525-1.19 11.75-2.069s14.45-2.49 20.5-3.578c6.05-1.089 15.725-2.821 21.5-3.85s9.15-1.862 7.5-1.852c-1.65.011-6.375.634-10.5 1.385m-353.5 3.161c-6.421 3.4-17.5 13.26-17.5 15.574 0 .514 2.844-1.98 6.321-5.543 4.298-4.405 8.662-7.65 13.634-10.137 4.023-2.013 6.691-3.646 5.929-3.63-.761.016-4.534 1.697-8.384 3.736m442.148 12.14c-1.774 3.261-5.164 6.882-10.069 10.755-4.067 3.212-7.236 6.002-7.043 6.2.193.198 3.702-2.377 7.798-5.724 6.476-5.292 13.699-14.437 12.416-15.72-.235-.234-1.631 1.786-3.102 4.489M65.162 204.543c-.639 1.403-1.162 6.782-1.162 11.952 0 8.967.177 9.739 3.836 16.697 5.391 10.256 7.493 11.337 21.789 11.208 10.108-.091 15.296-.819 37.875-5.314l5-.995-6 .506c-3.3.279-10.494 1.43-15.986 2.558-5.793 1.189-14.401 2.112-20.5 2.198-12.985.182-15.809-1.147-20.989-9.873-3.236-5.45-3.553-6.697-3.872-15.212-.192-5.155.143-10.678.755-12.434 1.355-3.887.842-4.776-.746-1.291M400 205.892c3.044.546 3.476.979 3.318 3.324-.1 1.483-.929 4.27-1.842 6.193-2.301 4.849-35.368 38.867-76.967 79.181C271.773 345.696 205.29 412.326 187.402 432 165.85 455.704 165 456.74 165 459.339c0 2.753 5.833 8.661 8.552 8.661 4.298 0 14.77-7.579 37.996-27.5 4.489-3.85 12.14-10.375 17.002-14.5 4.862-4.125 10.89-9.345 13.395-11.6 2.505-2.255 7.881-6.631 11.945-9.725 4.065-3.094 9.785-7.692 12.712-10.219 2.926-2.526 7.026-5.732 9.109-7.124 2.084-1.392 5.139-3.771 6.789-5.286 1.65-1.516 5.025-4.119 7.5-5.785 4.687-3.154 8.619-6.975 7.909-7.685-.447-.447-4.339 2.673-14.641 11.736-3.633 3.196-7.893 6.477-9.467 7.291-3.262 1.687-25.775 19.47-33.333 26.33-2.767 2.512-8.807 7.717-13.421 11.567a1421.14 1421.14 0 0 0-17.04 14.5c-16.502 14.308-26.065 21.785-31.507 24.634l-5.469 2.864-3.699-3.699c-3.232-3.233-3.562-3.989-2.618-5.999 3.762-8.003 79.185-85.056 159.792-163.244C384.421 238.379 406 215.145 406 208.964c0-2.328-2.929-4.008-6.684-3.832-2.539.118-2.471.193.684.76m-121 2.676c-.825.184-11.625 2.194-24 4.466-12.375 2.272-22.95 4.594-23.5 5.161-.68.701-.361.839 1 .434 1.1-.328 12.8-2.63 26-5.116 13.2-2.485 24.675-4.69 25.5-4.9 1.847-.469-2.914-.512-5-.045m222.73 6.714c-3.173 2.32-11.498 8.496-18.5 13.724-7.001 5.228-14.007 10.326-15.567 11.33-1.56 1.003-2.615 2.046-2.343 2.317.506.506 5.876-3.087 16.908-11.313 3.449-2.573 8.192-6.064 10.539-7.759 4.668-3.37 15.484-11.524 16.15-12.174.229-.224.004-.393-.5-.375-.504.018-3.513 1.93-6.687 4.25m63.382 8.968c-9.314 16.694-25.482 31.665-56.712 52.513-6.042 4.033-10.905 8.066-10.37 8.599.423.421 3.986-2.058 16.47-11.454 2.2-1.656 7.15-5.071 11-7.589 15.608-10.209 27.983-22.409 39.688-39.124 4.894-6.99 5.458-8.195 3.832-8.195-.539 0-2.298 2.363-3.908 5.25M344 225.857c-3.575 1.457-8.951 3.885-11.946 5.396-2.996 1.511-5.921 2.755-6.5 2.765-.58.01-3.034 1.36-5.454 3-5.827 3.948-4.905 3.762 4.534-.916 10.214-5.063 15.665-7.46 22.116-9.727 2.887-1.014 5.25-2.189 5.25-2.61 0-1.072-.66-.899-8 2.092m-34.139 16.11c-3.107 2.588-1.42 2.618 1.866.033 1.399-1.1 2.082-2 1.519-2-.564 0-2.087.885-3.385 1.967m151 3c-1.299 1.081-1.868 1.981-1.266 2 .602.018 1.91-.867 2.905-1.967 2.316-2.559 1.415-2.577-1.639-.033M285.5 251.994c-11.824 5.665-25.091 11.81-30.28 14.025-2.905 1.239-5.123 2.411-4.93 2.604.397.397 10.812-3.967 27.71-11.61 6.325-2.86 12.288-5.436 13.25-5.724 1.692-.505 2.52-2.351 1-2.229-.413.033-3.45 1.354-6.75 2.934m159.489 4.865c-7.195 5.813-15.602 13.861-10.989 10.52 4.658-3.373 19.551-15.77 19.833-16.508.585-1.529-.187-1.006-8.844 5.988m-24.446 18.207c-2.705 2.236-5.819 4.546-6.918 5.135-2.093 1.12-3.591 2.24-6.537 4.89-2.463 2.214-31.084 23.048-42.463 30.909-9.468 6.541-23.958 19-22.097 19 .55 0 3.92-2.636 7.49-5.857 3.569-3.222 10.538-8.612 15.486-11.98 4.948-3.367 11.471-8.055 14.496-10.418 3.025-2.363 12.25-9.221 20.5-15.24s15.225-11.206 15.5-11.526c.275-.32 2.637-2.098 5.25-3.95 2.613-1.852 4.75-3.742 4.75-4.199 0-1.241-.14-1.157-5.457 3.236M234 275c-1.925 1.054-3.05 1.916-2.5 1.916.55 0 2.575-.862 4.5-1.916 1.925-1.054 3.05-1.916 2.5-1.916-.55 0-2.575.862-4.5 1.916m-13.75 5.745c-1.787.89-3.25 1.995-3.25 2.457 0 .461 1.8-.08 4-1.202 2.2-1.122 4-2.257 4-2.52 0-.792-1.324-.44-4.75 1.265m-7.25 3.188c-.825.448-4.65 2.173-8.5 3.832-15.829 6.822-17.477 7.591-17.094 7.974.471.472 8.543-2.695 17.363-6.813 3.448-1.609 6.88-2.926 7.627-2.926.748 0 1.919-.675 2.604-1.5 1.342-1.617.416-1.88-2-.567m254.486 23.66c-12.092 9.127-24.893 18.689-28.445 21.25-3.553 2.562-8.278 6.255-10.5 8.208-2.223 1.953-7.416 5.996-11.541 8.985-4.125 2.99-7.987 5.892-8.583 6.45-.596.558-6.344 4.839-12.774 9.514-6.43 4.675-16.293 12.255-21.917 16.845-5.624 4.59-10.901 8.601-11.726 8.913-.825.312-3.585 2.407-6.133 4.655s-7.16 5.794-10.25 7.879c-3.089 2.086-5.617 4.238-5.617 4.783 0 .544 2.403-.825 5.341-3.043 2.937-2.217 5.709-4.032 6.159-4.032.45 0 3.109-2.049 5.909-4.554 5.666-5.069 26.414-21.446 27.169-21.446.265 0 3.391-2.468 6.947-5.484s8.378-6.692 10.717-8.169c4.275-2.698 20.23-14.651 33.258-24.914 7.756-6.11 9.114-7.141 32-24.303 15.906-11.928 23.468-18.012 22.486-18.089-.282-.023-10.407 7.426-22.5 16.552M176 300c-1.925 1.054-3.05 1.916-2.5 1.916.55 0 2.575-.862 4.5-1.916 1.925-1.054 3.05-1.916 2.5-1.916-.55 0-2.575.862-4.5 1.916m-12.75 5.22c-1.238.597-2.25 1.478-2.25 1.958 0 .481 1.35.175 3-.678 4.522-2.339 3.844-3.495-.75-1.28M144 314.039c-3.025 1.605-6.187 2.927-7.026 2.939-.839.012-6.892 2.839-13.45 6.283-9.056 4.754-12.386 7.051-13.844 9.547-2.697 4.618-1.527 4.986 1.403.441 1.936-3.003 4.705-4.887 13.917-9.469 6.325-3.146 12.091-5.734 12.813-5.75 1.979-.045 12.187-5.232 12.187-6.192 0-1.056.454-1.222-6 2.201m177.5 35.465c-16.174 12.733-20.703 16.626-20.072 17.257.292.292 2.497-1.222 4.9-3.365 2.402-2.143 9.612-7.905 16.02-12.804 6.409-4.9 11.652-9.287 11.652-9.75 0-.463-.113-.829-.25-.813-.137.015-5.65 4.279-12.25 9.475m-206.384 34.687c-.064 1.48.334 2.969.884 3.309.55.34 1 1.761 1 3.158s.657 3.958 1.46 5.691c.802 1.733 1.624 5.176 1.825 7.651l.366 4.5.174-5.136c.1-2.943-.463-6.358-1.319-8-.821-1.575-1.496-4.011-1.5-5.414-.003-1.403-.412-2.978-.909-3.5-.497-.522-1.119-1.85-1.384-2.95-.371-1.542-.508-1.383-.597.691m221.777 22.46c-.766.935-4.807 4.238-8.979 7.339-4.172 3.101-11.597 8.86-16.5 12.797-25.317 20.334-31.616 25.274-39.414 30.916-4.675 3.382-9.85 7.304-11.5 8.715-1.65 1.411-7.95 6.432-14 11.158-6.05 4.725-15.275 12.097-20.5 16.381-14.848 12.175-18.059 14.448-25.524 18.067-6.713 3.255-7.428 3.384-18.976 3.429-11.81.046-12.1-.007-18.325-3.382-7.783-4.22-10.61-7.574-16.788-19.915-5.646-11.279-5.259-10.617-5.857-10.019-.259.259 1.631 4.721 4.2 9.917 5.153 10.42 11.888 18.11 19.345 22.087 4.003 2.134 5.664 2.357 17.425 2.343 12.966-.017 13.019-.026 20.11-3.653 7.2-3.681 14.469-8.843 26.519-18.831 7.043-5.838 22.65-18.081 42.371-33.237A2182.748 2182.748 0 0 0 313 427.23c5.225-4.233 12.936-10.252 17.136-13.375 4.2-3.123 7.958-6.198 8.35-6.833 1.178-1.906-.094-2.201-1.593-.371", fill: "#cbdce6", fillRule: "evenodd" }), /* @__PURE__ */ ot.createElement("path", { d: "M477.5 113.673c-4.4.767-12.725 2.038-18.5 2.825-5.775.786-15 2.32-20.5 3.409s-14.95 2.679-21 3.533a5480.74 5480.74 0 0 0-18.5 2.646c-4.125.6-10.251 1.437-13.614 1.86-3.362.422-6.731 1.149-7.485 1.615-.755.467-2.841.722-4.637.567-1.795-.155-3.264.103-3.264.572s-1.8.681-4 .471c-2.609-.248-4 .027-4 .791 0 .718-.776.926-2 .538-1.1-.349-2-.197-2 .337 0 .556-1.696.745-3.952.443-2.174-.292-4.762-.178-5.75.252-.989.431-2.327.701-2.973.599-.646-.101-1.46.278-1.809.842-.349.565-2.67 1.027-5.158 1.027-2.489 0-7.975.869-12.191 1.93-4.217 1.062-10.123 2.192-13.124 2.512-6.912.737-27.965 4.046-45.543 7.16-4.4.779-11.375 1.826-15.5 2.326s-10.65 1.594-14.5 2.429c-3.85.836-13.975 2.472-22.5 3.635-8.525 1.163-16.175 2.387-17 2.719-.825.333-2.096.506-2.824.386-.728-.12-2.001.343-2.828 1.029-.868.721-3.585 1.138-6.426.987-2.934-.156-4.922.162-4.922.788 0 .632-1.192.811-3 .449-1.763-.353-3-.18-3 .419 0 .561-1.012 1.048-2.25 1.083-3.754.107-11.221 1.3-25.75 4.113-3.025.586-8.65 1.475-12.5 1.977-3.85.501-11.725 1.868-17.5 3.036-23.362 4.728-33.038 8.985-42.581 18.736-7.792 7.962-9.797 13.773-9.275 26.884.323 8.121.68 9.49 3.881 14.881 5.137 8.655 8.044 10.05 20.628 9.899 5.723-.068 15.102-1.066 21.5-2.287A1132.846 1132.846 0 0 1 134 237.027c6.325-1.044 13.975-2.398 17-3.008 3.025-.61 11.575-2.262 19-3.671 7.425-1.409 13.95-2.834 14.499-3.168.55-.333 2.238-.476 3.75-.318 1.513.159 2.751-.153 2.751-.693 0-.54.9-.746 2-.459 1.1.288 2 .099 2-.42s1.35-.745 3-.503c1.888.277 3 .002 3-.741 0-.726.771-.936 2-.546 1.127.358 2 .18 2-.408 0-.615 1.18-.806 2.879-.466 1.585.317 3.172.101 3.532-.482.359-.581 1.314-.803 2.121-.493.807.309 2.255.221 3.218-.198.963-.418 2.538-.663 3.5-.544.963.119 1.75-.31 1.75-.953 0-.67.696-.903 1.627-.546.894.344 2.225.128 2.956-.479.731-.607 1.819-.801 2.417-.431.598.37 1.63.226 2.294-.32.663-.546 11.331-2.852 23.706-5.125s29.25-5.455 37.5-7.07c16.046-3.143 46.405-8.559 58.169-10.377 3.943-.609 7.474-1.414 7.848-1.789.373-.375 1.31-.439 2.081-.143.771.296 1.402.118 1.402-.396 0-.513 1.35-.735 3-.493 1.66.243 3-.016 3-.58 0-.561.9-.784 2-.497 1.1.288 2 .099 2-.42s1.35-.745 3-.503c1.827.268 3-.003 3-.693 0-.708.936-.897 2.5-.505 1.64.412 2.5.209 2.5-.588 0-.669.674-.956 1.5-.639.825.316 1.5.139 1.5-.393 0-.533 1.157-.969 2.57-.969 1.414 0 6.252-.658 10.75-1.462 19.335-3.455 32.203-5.629 47.68-8.054 9.075-1.422 19.742-3.263 23.705-4.093C492.612 168.807 519 166.408 519 169c0 .55.745 1 1.656 1 2.571 0 8.344 4.878 8.344 7.051 0 1.072.337 1.952.75 1.956.413.004.872 2.495 1.021 5.536.219 4.478-.229 6.383-2.36 10.019-2.354 4.017-15.995 16.424-18.082 16.447-.456.005-3.635 2.142-7.064 4.75-3.43 2.608-8.155 6.128-10.5 7.822a1070.254 1070.254 0 0 0-10.537 7.759c-10.072 7.51-16.145 11.66-17.063 11.66-.47 0-1.67.9-2.665 2-.995 1.1-2.307 2-2.914 2-.608 0-1.678.917-2.378 2.039-.7 1.121-1.67 1.793-2.155 1.494-.485-.3-1.033-.143-1.218.348-.562 1.498-20.247 17.103-21.585 17.111-.687.005-1.25.449-1.25.989 0 .539-1.125 1.263-2.5 1.608-1.375.345-2.5.953-2.5 1.35 0 .397-2.137 2.238-4.75 4.09-2.613 1.852-4.975 3.63-5.25 3.95-.275.32-7.25 5.507-15.5 11.526s-17.475 12.877-20.5 15.24c-3.025 2.363-9.548 7.051-14.496 10.418-4.948 3.368-11.917 8.758-15.486 11.98-3.57 3.221-7.011 5.857-7.647 5.857-.636 0-1.441.739-1.788 1.643-.346.904-.917 1.357-1.267 1.006-.35-.35-1.27.268-2.045 1.374-.774 1.106-1.827 1.751-2.339 1.435-.513-.317-.932-.171-.932.325 0 .495-5.243 4.909-11.652 9.809-6.408 4.899-13.546 10.596-15.862 12.658-2.315 2.062-4.722 3.75-5.348 3.75-.626 0-1.138.525-1.138 1.167 0 .641-.285.882-.633.534-.348-.348-1.507.478-2.576 1.837-1.068 1.359-4.046 3.884-6.617 5.611-2.571 1.728-6.024 4.381-7.674 5.897-1.65 1.515-4.705 3.894-6.789 5.286-2.083 1.392-6.183 4.598-9.109 7.124-2.927 2.527-8.647 7.125-12.712 10.219-4.064 3.094-9.44 7.47-11.945 9.725-2.505 2.255-8.533 7.475-13.395 11.6a5073.016 5073.016 0 0 0-17.002 14.5c-23.388 20.06-33.695 27.5-38.097 27.5-2.685 0-8.451-5.979-8.451-8.763 0-2.491.935-3.627 22.402-27.237 17.888-19.674 84.371-86.304 137.107-137.41 41.599-40.314 74.666-74.332 76.967-79.181.913-1.923 1.742-4.715 1.842-6.203.154-2.296-.258-2.756-2.724-3.037-1.598-.183-4.523.33-6.5 1.139-1.977.808-7.419 2.701-12.094 4.205s-9.625 3.202-11 3.773c-1.375.57-2.837.964-3.25.875-.413-.088-.75.316-.75.898 0 .582-.45.781-1 .441s-1-.115-1 .5-.45.84-1 .5c-.55-.34-1-.115-1 .5s-.48.821-1.067.459c-.586-.363-1.697.173-2.468 1.191-.771 1.017-1.416 1.48-1.433 1.029-.018-.452-.765-.089-1.661.807s-2.246 1.392-3 1.103c-.754-.289-1.371-.196-1.371.208 0 .403-2.363 1.564-5.25 2.578-6.451 2.267-11.902 4.664-22.116 9.727-4.326 2.144-8.428 3.898-9.115 3.898-.687 0-2.322.833-3.634 1.851-1.312 1.019-3.51 2.116-4.885 2.439-4.705 1.105-10 3.199-10 3.955 0 .415-.9.755-2 .755s-2 .398-2 .883c0 .486-.788 1.119-1.75 1.406-.962.288-6.925 2.864-13.25 5.726C261.024 264.696 245.848 271 244.333 271c-.733 0-1.333.34-1.333.755 0 .416-1.463 1.271-3.25 1.901-6.089 2.147-10.248 3.859-11.75 4.837-.825.537-1.725 1.004-2 1.037-.275.033-2.357 1.033-4.626 2.222-2.27 1.189-4.343 1.946-4.608 1.681-.264-.265-1.05.205-1.746 1.043S213.144 286 212.396 286c-.747 0-4.179 1.334-7.627 2.964-3.448 1.63-10.372 4.532-15.387 6.45-9.757 3.731-18.572 7.578-24.632 10.751-2.063 1.08-3.75 1.639-3.75 1.244s-.824.027-1.831.938c-1.007.912-2.132 1.356-2.5.989-.368-.368-.669-.158-.669.466s-.675.876-1.5.56c-.825-.317-1.5-.092-1.5.5 0 .591-.675.816-1.5.5-.825-.317-1.5-.151-1.5.369 0 1.038-10.086 6.251-12.187 6.299-.722.016-6.486 2.604-12.807 5.75-9.349 4.652-11.993 6.465-14.162 9.709-1.466 2.195-2.474 4.301-2.239 4.681.235.381-.03.974-.589 1.32-1.419.877-1.274 8.852.188 10.314.662.662 1.095 2.823.962 4.802-.133 1.978.314 4.268.994 5.087.68.819 1.137 2.971 1.015 4.782-.149 2.202.291 3.49 1.326 3.887 1.092.419 1.362 1.337.915 3.116-.374 1.492-.206 2.522.413 2.522.576 0 1.041.787 1.033 1.75-.026 3.525 1.242 9.754 2.177 10.689.529.529.961 2.04.961 3.36 0 1.319.635 3.817 1.412 5.55.776 1.733 1.628 6.23 1.892 9.993s.979 7.341 1.588 7.95c.61.61 1.108 2.278 1.108 3.708 0 1.43.389 3.028.865 3.55 2.919 3.204 9.088 25.58 10.673 38.713.383 3.17 1.051 5.983 1.485 6.251.434.268.553 1.39.265 2.492-.288 1.103.034 2.677.716 3.499.683.822.906 1.495.496 1.495-.41 0-.244.604.369 1.342.612.738.828 1.627.48 1.976-.349.348-.081 1.3.595 2.114.675.814.962 1.912.636 2.439-.326.527-.252 1.109.164 1.294.416.184 2.943 4.68 5.616 9.991 6.221 12.359 9.043 15.701 16.815 19.915 6.225 3.375 6.515 3.428 18.325 3.382 11.548-.045 12.263-.174 18.976-3.429 7.465-3.619 10.676-5.892 25.524-18.067 5.225-4.284 14.45-11.656 20.5-16.381 6.05-4.726 12.35-9.747 14-11.158 1.65-1.411 6.825-5.333 11.5-8.715 7.798-5.642 14.097-10.582 39.414-30.916 4.903-3.937 12.328-9.696 16.5-12.797 4.172-3.101 8.199-6.388 8.949-7.303.75-.916 1.715-1.448 2.146-1.182.43.266 1.017-.13 1.305-.88.287-.749 3.597-3.411 7.354-5.914 3.758-2.503 8.154-5.937 9.769-7.631 1.615-1.694 3.415-3.087 4-3.095.585-.008 5.89-3.946 11.789-8.75s15.986-12.56 22.416-17.235c6.431-4.675 12.179-8.956 12.775-9.514.596-.558 4.458-3.46 8.583-6.45 4.125-2.989 9.318-7.032 11.541-8.985 2.222-1.953 6.947-5.646 10.5-8.208 11.361-8.19 50.401-37.654 52.043-39.277.871-.861 2.06-1.566 2.643-1.566.582 0 1.329-.704 1.659-1.563.33-.86 1.053-1.284 1.607-.941.554.342 1.007.238 1.007-.231 0-.924 8.321-7.527 13.567-10.765 23.683-14.622 42.885-32.402 52.232-48.365 1.815-3.099 3.998-6.168 4.851-6.818.852-.651 1.254-1.664.891-2.25-.362-.587-.237-1.067.278-1.067 2.029 0 3.381-9.319 3.893-26.826.377-12.886.202-18.66-.588-19.45-.618-.618-1.124-2.355-1.124-3.859s-.525-4.002-1.166-5.55c-.642-1.548-1.204-3.049-1.25-3.335-.046-.286-1.771-3.062-3.834-6.169-2.062-3.108-3.75-5.941-3.75-6.297 0-1.638-5.653-7.741-12.899-13.928-11.727-10.012-20.551-15.42-28.601-17.528-5.584-1.462-33.368-1.064-43 .615", fill: "#fbfbfb", fillRule: "evenodd" }));
mn(Js);
const Ks = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDYzNyA2MzciPjxwYXRoIGQ9Ik00NzcuNSAxMTIuNjljLTQuNC43NzYtMTAuMDI1IDEuODA2LTEyLjUgMi4yODdsLTQuNS44NzYgNC41LS4zNDNjMi40NzUtLjE4OSA4LjU1LTEuMDQgMTMuNS0xLjg5MSAxMC43MS0xLjg0MiAzNS42LTIuMTE1IDQyLjMwNy0uNDY0IDIuNTgxLjYzNiA1LjU4MSAxLjc2MSA2LjY2NiAyLjUgMS4wODQuNzQgMi40MjIgMS4zNDUgMi45NzIgMS4zNDUgMi4zMzcgMC00LjAyNC0zLjMzNS04Ljc3Mi00LjU5OS02Ljc0MS0xLjc5NS0zMy4zNTItMS42MjEtNDQuMTczLjI4OW01NiA1Ljg3OGMxLjEuODEzIDQuNzQ5IDMuNDgzIDguMTA5IDUuOTM0IDcuMTUgNS4yMTUgMjAuMzkxIDE3Ljg5NyAyMC4zOTEgMTkuNTMgMCAxLjU0OSA3LjEyOCAxMi4xNzMgNy43NSAxMS41NTEuMjc1LS4yNzUtMS4xMzEtMi45NTctMy4xMjUtNS45NjEtMS45OTQtMy4wMDMtMy42MjUtNS43NTItMy42MjUtNi4xMDggMC0yLjcyNy0xNC43NzctMTYuMzUzLTI1LjMtMjMuMzMxLTQuODAzLTMuMTg1LTcuOTcxLTQuNDAzLTQuMi0xLjYxNU0zMzYgMTM0Ljk3M2MtMy41NzUuMzc4LTcuNiAxLjA0OC04Ljk0NSAxLjQ4Ny0xLjM0NS40MzktMTIuODIgMi40OTktMjUuNSA0LjU3OHMtMjEuODUzIDMuODIxLTIwLjM4MyAzLjg3MWMxLjQ2OS4wNSA3Ljk5NC0uODAyIDE0LjUtMS44OTMgNi41MDUtMS4wOTIgMTQuMzAzLTIuMjQ4IDE3LjMyOC0yLjU3IDMuMDI1LS4zMjIgOC45NS0xLjQ1NCAxMy4xNjctMi41MTYgNC4yMTYtMS4wNjEgOS43MDItMS45MyAxMi4xOTEtMS45MyAyLjQ4OCAwIDQuODAyLS40NSA1LjE0Mi0xIC4zNC0uNTUuMjU0LS45MzYtLjE5MS0uODU4LS40NDUuMDc4LTMuNzM0LjQ1Mi03LjMwOS44MzFtLTE3OS41IDMwLjA5MmMtMi43NS40NDgtNy40NzUgMS4yOTktMTAuNSAxLjg5LTMuMDI1LjU5MS04LjY1IDEuNDk4LTEyLjUgMi4wMTUtMTMuMjgyIDEuNzg0LTMzLjE1MiA2LjI0Ny0zNC40ODQgNy43NDUtLjI4NC4zMTkuNjA5LjI3MiAxLjk4NC0uMTA1IDYuMDMxLTEuNjUyIDI2Ljk4My01LjgyOCAzMy40MzUtNi42NjQgMy44ODYtLjUwNCA5LjU0LTEuMzk1IDEyLjU2NS0xLjk4MWEzMDQuMTExIDMwNC4xMTEgMCAwIDEgMTAuNzQ5LTEuODQ3YzIuODg3LS40MzEgNS41NS0xLjA4MyA1LjkxNy0xLjQ1MS43NzctLjc3Ni0uMzQ3LS43MTQtNy4xNjYuMzk4bTM2OC4wODMgOC4zMzVjMi4xNTUgMS44NyA0LjE0MiAzLjE3NiA0LjQxNyAyLjkwMy42MTMtLjYxMS02LjA1LTYuMzAzLTcuMzc5LTYuMzAzLS41MjUgMCAuODA4IDEuNTMgMi45NjIgMy40TTQzOSAxNzguNjA0Yy00LjEyNS43NTEtMTIuOSAyLjI4Ny0xOS41IDMuNDEzLTYuNiAxLjEyNS0xNS42ODEgMi43MDctMjAuMTggMy41MTUtNC40OTguODA3LTkuMzM2IDEuNDY4LTEwLjc1IDEuNDY4LTEuNDEzIDAtMi41Ny40NTktMi41NyAxLjAxOSAwIC41NjEgMS4wMTIuODA3IDIuMjUuNTQ5IDEuMjM4LS4yNTkgNi41MjUtMS4xOSAxMS43NS0yLjA2OXMxNC40NS0yLjQ5IDIwLjUtMy41NzhjNi4wNS0xLjA4OSAxNS43MjUtMi44MjEgMjEuNS0zLjg1czkuMTUtMS44NjIgNy41LTEuODUyYy0xLjY1LjAxMS02LjM3NS42MzQtMTAuNSAxLjM4NW0tMzUzLjUgMy4xNjFjLTYuNDIxIDMuNC0xNy41IDEzLjI2LTE3LjUgMTUuNTc0IDAgLjUxNCAyLjg0NC0xLjk4IDYuMzIxLTUuNTQzIDQuMjk4LTQuNDA1IDguNjYyLTcuNjUgMTMuNjM0LTEwLjEzNyA0LjAyMy0yLjAxMyA2LjY5MS0zLjY0NiA1LjkyOS0zLjYzLS43NjEuMDE2LTQuNTM0IDEuNjk3LTguMzg0IDMuNzM2bTQ0Mi4xNDggMTIuMTRjLTEuNzc0IDMuMjYxLTUuMTY0IDYuODgyLTEwLjA2OSAxMC43NTUtNC4wNjcgMy4yMTItNy4yMzYgNi4wMDItNy4wNDMgNi4yLjE5My4xOTggMy43MDItMi4zNzcgNy43OTgtNS43MjQgNi40NzYtNS4yOTIgMTMuNjk5LTE0LjQzNyAxMi40MTYtMTUuNzItLjIzNS0uMjM0LTEuNjMxIDEuNzg2LTMuMTAyIDQuNDg5TTY1LjE2MiAyMDQuNTQzYy0uNjM5IDEuNDAzLTEuMTYyIDYuNzgyLTEuMTYyIDExLjk1MiAwIDguOTY3LjE3NyA5LjczOSAzLjgzNiAxNi42OTcgNS4zOTEgMTAuMjU2IDcuNDkzIDExLjMzNyAyMS43ODkgMTEuMjA4IDEwLjEwOC0uMDkxIDE1LjI5Ni0uODE5IDM3Ljg3NS01LjMxNGw1LS45OTUtNiAuNTA2Yy0zLjMuMjc5LTEwLjQ5NCAxLjQzLTE1Ljk4NiAyLjU1OC01Ljc5MyAxLjE4OS0xNC40MDEgMi4xMTItMjAuNSAyLjE5OC0xMi45ODUuMTgyLTE1LjgwOS0xLjE0Ny0yMC45ODktOS44NzMtMy4yMzYtNS40NS0zLjU1My02LjY5Ny0zLjg3Mi0xNS4yMTItLjE5Mi01LjE1NS4xNDMtMTAuNjc4Ljc1NS0xMi40MzQgMS4zNTUtMy44ODcuODQyLTQuNzc2LS43NDYtMS4yOTFNNDAwIDIwNS44OTJjMy4wNDQuNTQ2IDMuNDc2Ljk3OSAzLjMxOCAzLjMyNC0uMSAxLjQ4My0uOTI5IDQuMjctMS44NDIgNi4xOTMtMi4zMDEgNC44NDktMzUuMzY4IDM4Ljg2Ny03Ni45NjcgNzkuMTgxQzI3MS43NzMgMzQ1LjY5NiAyMDUuMjkgNDEyLjMyNiAxODcuNDAyIDQzMiAxNjUuODUgNDU1LjcwNCAxNjUgNDU2Ljc0IDE2NSA0NTkuMzM5YzAgMi43NTMgNS44MzMgOC42NjEgOC41NTIgOC42NjEgNC4yOTggMCAxNC43Ny03LjU3OSAzNy45OTYtMjcuNSA0LjQ4OS0zLjg1IDEyLjE0LTEwLjM3NSAxNy4wMDItMTQuNSA0Ljg2Mi00LjEyNSAxMC44OS05LjM0NSAxMy4zOTUtMTEuNiAyLjUwNS0yLjI1NSA3Ljg4MS02LjYzMSAxMS45NDUtOS43MjUgNC4wNjUtMy4wOTQgOS43ODUtNy42OTIgMTIuNzEyLTEwLjIxOSAyLjkyNi0yLjUyNiA3LjAyNi01LjczMiA5LjEwOS03LjEyNCAyLjA4NC0xLjM5MiA1LjEzOS0zLjc3MSA2Ljc4OS01LjI4NiAxLjY1LTEuNTE2IDUuMDI1LTQuMTE5IDcuNS01Ljc4NSA0LjY4Ny0zLjE1NCA4LjYxOS02Ljk3NSA3LjkwOS03LjY4NS0uNDQ3LS40NDctNC4zMzkgMi42NzMtMTQuNjQxIDExLjczNi0zLjYzMyAzLjE5Ni03Ljg5MyA2LjQ3Ny05LjQ2NyA3LjI5MS0zLjI2MiAxLjY4Ny0yNS43NzUgMTkuNDctMzMuMzMzIDI2LjMzLTIuNzY3IDIuNTEyLTguODA3IDcuNzE3LTEzLjQyMSAxMS41NjdhMTQyMS4xNCAxNDIxLjE0IDAgMCAwLTE3LjA0IDE0LjVjLTE2LjUwMiAxNC4zMDgtMjYuMDY1IDIxLjc4NS0zMS41MDcgMjQuNjM0bC01LjQ2OSAyLjg2NC0zLjY5OS0zLjY5OWMtMy4yMzItMy4yMzMtMy41NjItMy45ODktMi42MTgtNS45OTkgMy43NjItOC4wMDMgNzkuMTg1LTg1LjA1NiAxNTkuNzkyLTE2My4yNDRDMzg0LjQyMSAyMzguMzc5IDQwNiAyMTUuMTQ1IDQwNiAyMDguOTY0YzAtMi4zMjgtMi45MjktNC4wMDgtNi42ODQtMy44MzItMi41MzkuMTE4LTIuNDcxLjE5My42ODQuNzZtLTEyMSAyLjY3NmMtLjgyNS4xODQtMTEuNjI1IDIuMTk0LTI0IDQuNDY2LTEyLjM3NSAyLjI3Mi0yMi45NSA0LjU5NC0yMy41IDUuMTYxLS42OC43MDEtLjM2MS44MzkgMSAuNDM0IDEuMS0uMzI4IDEyLjgtMi42MyAyNi01LjExNiAxMy4yLTIuNDg1IDI0LjY3NS00LjY5IDI1LjUtNC45IDEuODQ3LS40NjktMi45MTQtLjUxMi01LS4wNDVtMjIyLjczIDYuNzE0Yy0zLjE3MyAyLjMyLTExLjQ5OCA4LjQ5Ni0xOC41IDEzLjcyNC03LjAwMSA1LjIyOC0xNC4wMDcgMTAuMzI2LTE1LjU2NyAxMS4zMy0xLjU2IDEuMDAzLTIuNjE1IDIuMDQ2LTIuMzQzIDIuMzE3LjUwNi41MDYgNS44NzYtMy4wODcgMTYuOTA4LTExLjMxMyAzLjQ0OS0yLjU3MyA4LjE5Mi02LjA2NCAxMC41MzktNy43NTkgNC42NjgtMy4zNyAxNS40ODQtMTEuNTI0IDE2LjE1LTEyLjE3NC4yMjktLjIyNC4wMDQtLjM5My0uNS0uMzc1LS41MDQuMDE4LTMuNTEzIDEuOTMtNi42ODcgNC4yNW02My4zODIgOC45NjhjLTkuMzE0IDE2LjY5NC0yNS40ODIgMzEuNjY1LTU2LjcxMiA1Mi41MTMtNi4wNDIgNC4wMzMtMTAuOTA1IDguMDY2LTEwLjM3IDguNTk5LjQyMy40MjEgMy45ODYtMi4wNTggMTYuNDctMTEuNDU0IDIuMi0xLjY1NiA3LjE1LTUuMDcxIDExLTcuNTg5IDE1LjYwOC0xMC4yMDkgMjcuOTgzLTIyLjQwOSAzOS42ODgtMzkuMTI0IDQuODk0LTYuOTkgNS40NTgtOC4xOTUgMy44MzItOC4xOTUtLjUzOSAwLTIuMjk4IDIuMzYzLTMuOTA4IDUuMjVNMzQ0IDIyNS44NTdjLTMuNTc1IDEuNDU3LTguOTUxIDMuODg1LTExLjk0NiA1LjM5Ni0yLjk5NiAxLjUxMS01LjkyMSAyLjc1NS02LjUgMi43NjUtLjU4LjAxLTMuMDM0IDEuMzYtNS40NTQgMy01LjgyNyAzLjk0OC00LjkwNSAzLjc2MiA0LjUzNC0uOTE2IDEwLjIxNC01LjA2MyAxNS42NjUtNy40NiAyMi4xMTYtOS43MjcgMi44ODctMS4wMTQgNS4yNS0yLjE4OSA1LjI1LTIuNjEgMC0xLjA3Mi0uNjYtLjg5OS04IDIuMDkybS0zNC4xMzkgMTYuMTFjLTMuMTA3IDIuNTg4LTEuNDIgMi42MTggMS44NjYuMDMzIDEuMzk5LTEuMSAyLjA4Mi0yIDEuNTE5LTItLjU2NCAwLTIuMDg3Ljg4NS0zLjM4NSAxLjk2N20xNTEgM2MtMS4yOTkgMS4wODEtMS44NjggMS45ODEtMS4yNjYgMiAuNjAyLjAxOCAxLjkxLS44NjcgMi45MDUtMS45NjcgMi4zMTYtMi41NTkgMS40MTUtMi41NzctMS42MzktLjAzM00yODUuNSAyNTEuOTk0Yy0xMS44MjQgNS42NjUtMjUuMDkxIDExLjgxLTMwLjI4IDE0LjAyNS0yLjkwNSAxLjIzOS01LjEyMyAyLjQxMS00LjkzIDIuNjA0LjM5Ny4zOTcgMTAuODEyLTMuOTY3IDI3LjcxLTExLjYxIDYuMzI1LTIuODYgMTIuMjg4LTUuNDM2IDEzLjI1LTUuNzI0IDEuNjkyLS41MDUgMi41Mi0yLjM1MSAxLTIuMjI5LS40MTMuMDMzLTMuNDUgMS4zNTQtNi43NSAyLjkzNG0xNTkuNDg5IDQuODY1Yy03LjE5NSA1LjgxMy0xNS42MDIgMTMuODYxLTEwLjk4OSAxMC41MiA0LjY1OC0zLjM3MyAxOS41NTEtMTUuNzcgMTkuODMzLTE2LjUwOC41ODUtMS41MjktLjE4Ny0xLjAwNi04Ljg0NCA1Ljk4OG0tMjQuNDQ2IDE4LjIwN2MtMi43MDUgMi4yMzYtNS44MTkgNC41NDYtNi45MTggNS4xMzUtMi4wOTMgMS4xMi0zLjU5MSAyLjI0LTYuNTM3IDQuODktMi40NjMgMi4yMTQtMzEuMDg0IDIzLjA0OC00Mi40NjMgMzAuOTA5LTkuNDY4IDYuNTQxLTIzLjk1OCAxOS0yMi4wOTcgMTkgLjU1IDAgMy45Mi0yLjYzNiA3LjQ5LTUuODU3IDMuNTY5LTMuMjIyIDEwLjUzOC04LjYxMiAxNS40ODYtMTEuOTggNC45NDgtMy4zNjcgMTEuNDcxLTguMDU1IDE0LjQ5Ni0xMC40MTggMy4wMjUtMi4zNjMgMTIuMjUtOS4yMjEgMjAuNS0xNS4yNHMxNS4yMjUtMTEuMjA2IDE1LjUtMTEuNTI2Yy4yNzUtLjMyIDIuNjM3LTIuMDk4IDUuMjUtMy45NSAyLjYxMy0xLjg1MiA0Ljc1LTMuNzQyIDQuNzUtNC4xOTkgMC0xLjI0MS0uMTQtMS4xNTctNS40NTcgMy4yMzZNMjM0IDI3NWMtMS45MjUgMS4wNTQtMy4wNSAxLjkxNi0yLjUgMS45MTYuNTUgMCAyLjU3NS0uODYyIDQuNS0xLjkxNiAxLjkyNS0xLjA1NCAzLjA1LTEuOTE2IDIuNS0xLjkxNi0uNTUgMC0yLjU3NS44NjItNC41IDEuOTE2bS0xMy43NSA1Ljc0NWMtMS43ODcuODktMy4yNSAxLjk5NS0zLjI1IDIuNDU3IDAgLjQ2MSAxLjgtLjA4IDQtMS4yMDIgMi4yLTEuMTIyIDQtMi4yNTcgNC0yLjUyIDAtLjc5Mi0xLjMyNC0uNDQtNC43NSAxLjI2NW0tNy4yNSAzLjE4OGMtLjgyNS40NDgtNC42NSAyLjE3My04LjUgMy44MzItMTUuODI5IDYuODIyLTE3LjQ3NyA3LjU5MS0xNy4wOTQgNy45NzQuNDcxLjQ3MiA4LjU0My0yLjY5NSAxNy4zNjMtNi44MTMgMy40NDgtMS42MDkgNi44OC0yLjkyNiA3LjYyNy0yLjkyNi43NDggMCAxLjkxOS0uNjc1IDIuNjA0LTEuNSAxLjM0Mi0xLjYxNy40MTYtMS44OC0yLS41NjdtMjU0LjQ4NiAyMy42NmMtMTIuMDkyIDkuMTI3LTI0Ljg5MyAxOC42ODktMjguNDQ1IDIxLjI1LTMuNTUzIDIuNTYyLTguMjc4IDYuMjU1LTEwLjUgOC4yMDgtMi4yMjMgMS45NTMtNy40MTYgNS45OTYtMTEuNTQxIDguOTg1LTQuMTI1IDIuOTktNy45ODcgNS44OTItOC41ODMgNi40NS0uNTk2LjU1OC02LjM0NCA0LjgzOS0xMi43NzQgOS41MTQtNi40MyA0LjY3NS0xNi4yOTMgMTIuMjU1LTIxLjkxNyAxNi44NDUtNS42MjQgNC41OS0xMC45MDEgOC42MDEtMTEuNzI2IDguOTEzLS44MjUuMzEyLTMuNTg1IDIuNDA3LTYuMTMzIDQuNjU1cy03LjE2IDUuNzk0LTEwLjI1IDcuODc5Yy0zLjA4OSAyLjA4Ni01LjYxNyA0LjIzOC01LjYxNyA0Ljc4MyAwIC41NDQgMi40MDMtLjgyNSA1LjM0MS0zLjA0MyAyLjkzNy0yLjIxNyA1LjcwOS00LjAzMiA2LjE1OS00LjAzMi40NSAwIDMuMTA5LTIuMDQ5IDUuOTA5LTQuNTU0IDUuNjY2LTUuMDY5IDI2LjQxNC0yMS40NDYgMjcuMTY5LTIxLjQ0Ni4yNjUgMCAzLjM5MS0yLjQ2OCA2Ljk0Ny01LjQ4NHM4LjM3OC02LjY5MiAxMC43MTctOC4xNjljNC4yNzUtMi42OTggMjAuMjMtMTQuNjUxIDMzLjI1OC0yNC45MTQgNy43NTYtNi4xMSA5LjExNC03LjE0MSAzMi0yNC4zMDMgMTUuOTA2LTExLjkyOCAyMy40NjgtMTguMDEyIDIyLjQ4Ni0xOC4wODktLjI4Mi0uMDIzLTEwLjQwNyA3LjQyNi0yMi41IDE2LjU1Mk0xNzYgMzAwYy0xLjkyNSAxLjA1NC0zLjA1IDEuOTE2LTIuNSAxLjkxNi41NSAwIDIuNTc1LS44NjIgNC41LTEuOTE2IDEuOTI1LTEuMDU0IDMuMDUtMS45MTYgMi41LTEuOTE2LS41NSAwLTIuNTc1Ljg2Mi00LjUgMS45MTZtLTEyLjc1IDUuMjJjLTEuMjM4LjU5Ny0yLjI1IDEuNDc4LTIuMjUgMS45NTggMCAuNDgxIDEuMzUuMTc1IDMtLjY3OCA0LjUyMi0yLjMzOSAzLjg0NC0zLjQ5NS0uNzUtMS4yOE0xNDQgMzE0LjAzOWMtMy4wMjUgMS42MDUtNi4xODcgMi45MjctNy4wMjYgMi45MzktLjgzOS4wMTItNi44OTIgMi44MzktMTMuNDUgNi4yODMtOS4wNTYgNC43NTQtMTIuMzg2IDcuMDUxLTEzLjg0NCA5LjU0Ny0yLjY5NyA0LjYxOC0xLjUyNyA0Ljk4NiAxLjQwMy40NDEgMS45MzYtMy4wMDMgNC43MDUtNC44ODcgMTMuOTE3LTkuNDY5IDYuMzI1LTMuMTQ2IDEyLjA5MS01LjczNCAxMi44MTMtNS43NSAxLjk3OS0uMDQ1IDEyLjE4Ny01LjIzMiAxMi4xODctNi4xOTIgMC0xLjA1Ni40NTQtMS4yMjItNiAyLjIwMW0xNzcuNSAzNS40NjVjLTE2LjE3NCAxMi43MzMtMjAuNzAzIDE2LjYyNi0yMC4wNzIgMTcuMjU3LjI5Mi4yOTIgMi40OTctMS4yMjIgNC45LTMuMzY1IDIuNDAyLTIuMTQzIDkuNjEyLTcuOTA1IDE2LjAyLTEyLjgwNCA2LjQwOS00LjkgMTEuNjUyLTkuMjg3IDExLjY1Mi05Ljc1IDAtLjQ2My0uMTEzLS44MjktLjI1LS44MTMtLjEzNy4wMTUtNS42NSA0LjI3OS0xMi4yNSA5LjQ3NW0tMjA2LjM4NCAzNC42ODdjLS4wNjQgMS40OC4zMzQgMi45NjkuODg0IDMuMzA5LjU1LjM0IDEgMS43NjEgMSAzLjE1OHMuNjU3IDMuOTU4IDEuNDYgNS42OTFjLjgwMiAxLjczMyAxLjYyNCA1LjE3NiAxLjgyNSA3LjY1MWwuMzY2IDQuNS4xNzQtNS4xMzZjLjEtMi45NDMtLjQ2My02LjM1OC0xLjMxOS04LS44MjEtMS41NzUtMS40OTYtNC4wMTEtMS41LTUuNDE0LS4wMDMtMS40MDMtLjQxMi0yLjk3OC0uOTA5LTMuNS0uNDk3LS41MjItMS4xMTktMS44NS0xLjM4NC0yLjk1LS4zNzEtMS41NDItLjUwOC0xLjM4My0uNTk3LjY5MW0yMjEuNzc3IDIyLjQ2Yy0uNzY2LjkzNS00LjgwNyA0LjIzOC04Ljk3OSA3LjMzOS00LjE3MiAzLjEwMS0xMS41OTcgOC44Ni0xNi41IDEyLjc5Ny0yNS4zMTcgMjAuMzM0LTMxLjYxNiAyNS4yNzQtMzkuNDE0IDMwLjkxNi00LjY3NSAzLjM4Mi05Ljg1IDcuMzA0LTExLjUgOC43MTUtMS42NSAxLjQxMS03Ljk1IDYuNDMyLTE0IDExLjE1OC02LjA1IDQuNzI1LTE1LjI3NSAxMi4wOTctMjAuNSAxNi4zODEtMTQuODQ4IDEyLjE3NS0xOC4wNTkgMTQuNDQ4LTI1LjUyNCAxOC4wNjctNi43MTMgMy4yNTUtNy40MjggMy4zODQtMTguOTc2IDMuNDI5LTExLjgxLjA0Ni0xMi4xLS4wMDctMTguMzI1LTMuMzgyLTcuNzgzLTQuMjItMTAuNjEtNy41NzQtMTYuNzg4LTE5LjkxNS01LjY0Ni0xMS4yNzktNS4yNTktMTAuNjE3LTUuODU3LTEwLjAxOS0uMjU5LjI1OSAxLjYzMSA0LjcyMSA0LjIgOS45MTcgNS4xNTMgMTAuNDIgMTEuODg4IDE4LjExIDE5LjM0NSAyMi4wODcgNC4wMDMgMi4xMzQgNS42NjQgMi4zNTcgMTcuNDI1IDIuMzQzIDEyLjk2Ni0uMDE3IDEzLjAxOS0uMDI2IDIwLjExLTMuNjUzIDcuMi0zLjY4MSAxNC40NjktOC44NDMgMjYuNTE5LTE4LjgzMSA3LjA0My01LjgzOCAyMi42NS0xOC4wODEgNDIuMzcxLTMzLjIzN0EyMTgyLjc0OCAyMTgyLjc0OCAwIDAgMCAzMTMgNDI3LjIzYzUuMjI1LTQuMjMzIDEyLjkzNi0xMC4yNTIgMTcuMTM2LTEzLjM3NSA0LjItMy4xMjMgNy45NTgtNi4xOTggOC4zNS02LjgzMyAxLjE3OC0xLjkwNi0uMDk0LTIuMjAxLTEuNTkzLS4zNzEiIGZpbGw9IiNjYmRjZTYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik00NzcuNSAxMTMuNjczYy00LjQuNzY3LTEyLjcyNSAyLjAzOC0xOC41IDIuODI1LTUuNzc1Ljc4Ni0xNSAyLjMyLTIwLjUgMy40MDlzLTE0Ljk1IDIuNjc5LTIxIDMuNTMzYTU0ODAuNzQgNTQ4MC43NCAwIDAgMC0xOC41IDIuNjQ2Yy00LjEyNS42LTEwLjI1MSAxLjQzNy0xMy42MTQgMS44Ni0zLjM2Mi40MjItNi43MzEgMS4xNDktNy40ODUgMS42MTUtLjc1NS40NjctMi44NDEuNzIyLTQuNjM3LjU2Ny0xLjc5NS0uMTU1LTMuMjY0LjEwMy0zLjI2NC41NzJzLTEuOC42ODEtNCAuNDcxYy0yLjYwOS0uMjQ4LTQgLjAyNy00IC43OTEgMCAuNzE4LS43NzYuOTI2LTIgLjUzOC0xLjEtLjM0OS0yLS4xOTctMiAuMzM3IDAgLjU1Ni0xLjY5Ni43NDUtMy45NTIuNDQzLTIuMTc0LS4yOTItNC43NjItLjE3OC01Ljc1LjI1Mi0uOTg5LjQzMS0yLjMyNy43MDEtMi45NzMuNTk5LS42NDYtLjEwMS0xLjQ2LjI3OC0xLjgwOS44NDItLjM0OS41NjUtMi42NyAxLjAyNy01LjE1OCAxLjAyNy0yLjQ4OSAwLTcuOTc1Ljg2OS0xMi4xOTEgMS45My00LjIxNyAxLjA2Mi0xMC4xMjMgMi4xOTItMTMuMTI0IDIuNTEyLTYuOTEyLjczNy0yNy45NjUgNC4wNDYtNDUuNTQzIDcuMTYtNC40Ljc3OS0xMS4zNzUgMS44MjYtMTUuNSAyLjMyNnMtMTAuNjUgMS41OTQtMTQuNSAyLjQyOWMtMy44NS44MzYtMTMuOTc1IDIuNDcyLTIyLjUgMy42MzUtOC41MjUgMS4xNjMtMTYuMTc1IDIuMzg3LTE3IDIuNzE5LS44MjUuMzMzLTIuMDk2LjUwNi0yLjgyNC4zODYtLjcyOC0uMTItMi4wMDEuMzQzLTIuODI4IDEuMDI5LS44NjguNzIxLTMuNTg1IDEuMTM4LTYuNDI2Ljk4Ny0yLjkzNC0uMTU2LTQuOTIyLjE2Mi00LjkyMi43ODggMCAuNjMyLTEuMTkyLjgxMS0zIC40NDktMS43NjMtLjM1My0zLS4xOC0zIC40MTkgMCAuNTYxLTEuMDEyIDEuMDQ4LTIuMjUgMS4wODMtMy43NTQuMTA3LTExLjIyMSAxLjMtMjUuNzUgNC4xMTMtMy4wMjUuNTg2LTguNjUgMS40NzUtMTIuNSAxLjk3Ny0zLjg1LjUwMS0xMS43MjUgMS44NjgtMTcuNSAzLjAzNi0yMy4zNjIgNC43MjgtMzMuMDM4IDguOTg1LTQyLjU4MSAxOC43MzYtNy43OTIgNy45NjItOS43OTcgMTMuNzczLTkuMjc1IDI2Ljg4NC4zMjMgOC4xMjEuNjggOS40OSAzLjg4MSAxNC44ODEgNS4xMzcgOC42NTUgOC4wNDQgMTAuMDUgMjAuNjI4IDkuODk5IDUuNzIzLS4wNjggMTUuMTAyLTEuMDY2IDIxLjUtMi4yODdBMTEzMi44NDYgMTEzMi44NDYgMCAwIDEgMTM0IDIzNy4wMjdjNi4zMjUtMS4wNDQgMTMuOTc1LTIuMzk4IDE3LTMuMDA4IDMuMDI1LS42MSAxMS41NzUtMi4yNjIgMTktMy42NzEgNy40MjUtMS40MDkgMTMuOTUtMi44MzQgMTQuNDk5LTMuMTY4LjU1LS4zMzMgMi4yMzgtLjQ3NiAzLjc1LS4zMTggMS41MTMuMTU5IDIuNzUxLS4xNTMgMi43NTEtLjY5MyAwLS41NC45LS43NDYgMi0uNDU5IDEuMS4yODggMiAuMDk5IDItLjQyczEuMzUtLjc0NSAzLS41MDNjMS44ODguMjc3IDMgLjAwMiAzLS43NDEgMC0uNzI2Ljc3MS0uOTM2IDItLjU0NiAxLjEyNy4zNTggMiAuMTggMi0uNDA4IDAtLjYxNSAxLjE4LS44MDYgMi44NzktLjQ2NiAxLjU4NS4zMTcgMy4xNzIuMTAxIDMuNTMyLS40ODIuMzU5LS41ODEgMS4zMTQtLjgwMyAyLjEyMS0uNDkzLjgwNy4zMDkgMi4yNTUuMjIxIDMuMjE4LS4xOTguOTYzLS40MTggMi41MzgtLjY2MyAzLjUtLjU0NC45NjMuMTE5IDEuNzUtLjMxIDEuNzUtLjk1MyAwLS42Ny42OTYtLjkwMyAxLjYyNy0uNTQ2Ljg5NC4zNDQgMi4yMjUuMTI4IDIuOTU2LS40NzkuNzMxLS42MDcgMS44MTktLjgwMSAyLjQxNy0uNDMxLjU5OC4zNyAxLjYzLjIyNiAyLjI5NC0uMzIuNjYzLS41NDYgMTEuMzMxLTIuODUyIDIzLjcwNi01LjEyNXMyOS4yNS01LjQ1NSAzNy41LTcuMDdjMTYuMDQ2LTMuMTQzIDQ2LjQwNS04LjU1OSA1OC4xNjktMTAuMzc3IDMuOTQzLS42MDkgNy40NzQtMS40MTQgNy44NDgtMS43ODkuMzczLS4zNzUgMS4zMS0uNDM5IDIuMDgxLS4xNDMuNzcxLjI5NiAxLjQwMi4xMTggMS40MDItLjM5NiAwLS41MTMgMS4zNS0uNzM1IDMtLjQ5MyAxLjY2LjI0MyAzLS4wMTYgMy0uNTggMC0uNTYxLjktLjc4NCAyLS40OTcgMS4xLjI4OCAyIC4wOTkgMi0uNDJzMS4zNS0uNzQ1IDMtLjUwM2MxLjgyNy4yNjggMy0uMDAzIDMtLjY5MyAwLS43MDguOTM2LS44OTcgMi41LS41MDUgMS42NC40MTIgMi41LjIwOSAyLjUtLjU4OCAwLS42NjkuNjc0LS45NTYgMS41LS42MzkuODI1LjMxNiAxLjUuMTM5IDEuNS0uMzkzIDAtLjUzMyAxLjE1Ny0uOTY5IDIuNTctLjk2OSAxLjQxNCAwIDYuMjUyLS42NTggMTAuNzUtMS40NjIgMTkuMzM1LTMuNDU1IDMyLjIwMy01LjYyOSA0Ny42OC04LjA1NCA5LjA3NS0xLjQyMiAxOS43NDItMy4yNjMgMjMuNzA1LTQuMDkzQzQ5Mi42MTIgMTY4LjgwNyA1MTkgMTY2LjQwOCA1MTkgMTY5YzAgLjU1Ljc0NSAxIDEuNjU2IDEgMi41NzEgMCA4LjM0NCA0Ljg3OCA4LjM0NCA3LjA1MSAwIDEuMDcyLjMzNyAxLjk1Mi43NSAxLjk1Ni40MTMuMDA0Ljg3MiAyLjQ5NSAxLjAyMSA1LjUzNi4yMTkgNC40NzgtLjIyOSA2LjM4My0yLjM2IDEwLjAxOS0yLjM1NCA0LjAxNy0xNS45OTUgMTYuNDI0LTE4LjA4MiAxNi40NDctLjQ1Ni4wMDUtMy42MzUgMi4xNDItNy4wNjQgNC43NS0zLjQzIDIuNjA4LTguMTU1IDYuMTI4LTEwLjUgNy44MjJhMTA3MC4yNTQgMTA3MC4yNTQgMCAwIDAtMTAuNTM3IDcuNzU5Yy0xMC4wNzIgNy41MS0xNi4xNDUgMTEuNjYtMTcuMDYzIDExLjY2LS40NyAwLTEuNjcuOS0yLjY2NSAyLS45OTUgMS4xLTIuMzA3IDItMi45MTQgMi0uNjA4IDAtMS42NzguOTE3LTIuMzc4IDIuMDM5LS43IDEuMTIxLTEuNjcgMS43OTMtMi4xNTUgMS40OTQtLjQ4NS0uMy0xLjAzMy0uMTQzLTEuMjE4LjM0OC0uNTYyIDEuNDk4LTIwLjI0NyAxNy4xMDMtMjEuNTg1IDE3LjExMS0uNjg3LjAwNS0xLjI1LjQ0OS0xLjI1Ljk4OSAwIC41MzktMS4xMjUgMS4yNjMtMi41IDEuNjA4LTEuMzc1LjM0NS0yLjUuOTUzLTIuNSAxLjM1IDAgLjM5Ny0yLjEzNyAyLjIzOC00Ljc1IDQuMDktMi42MTMgMS44NTItNC45NzUgMy42My01LjI1IDMuOTUtLjI3NS4zMi03LjI1IDUuNTA3LTE1LjUgMTEuNTI2cy0xNy40NzUgMTIuODc3LTIwLjUgMTUuMjRjLTMuMDI1IDIuMzYzLTkuNTQ4IDcuMDUxLTE0LjQ5NiAxMC40MTgtNC45NDggMy4zNjgtMTEuOTE3IDguNzU4LTE1LjQ4NiAxMS45OC0zLjU3IDMuMjIxLTcuMDExIDUuODU3LTcuNjQ3IDUuODU3LS42MzYgMC0xLjQ0MS43MzktMS43ODggMS42NDMtLjM0Ni45MDQtLjkxNyAxLjM1Ny0xLjI2NyAxLjAwNi0uMzUtLjM1LTEuMjcuMjY4LTIuMDQ1IDEuMzc0LS43NzQgMS4xMDYtMS44MjcgMS43NTEtMi4zMzkgMS40MzUtLjUxMy0uMzE3LS45MzItLjE3MS0uOTMyLjMyNSAwIC40OTUtNS4yNDMgNC45MDktMTEuNjUyIDkuODA5LTYuNDA4IDQuODk5LTEzLjU0NiAxMC41OTYtMTUuODYyIDEyLjY1OC0yLjMxNSAyLjA2Mi00LjcyMiAzLjc1LTUuMzQ4IDMuNzUtLjYyNiAwLTEuMTM4LjUyNS0xLjEzOCAxLjE2NyAwIC42NDEtLjI4NS44ODItLjYzMy41MzQtLjM0OC0uMzQ4LTEuNTA3LjQ3OC0yLjU3NiAxLjgzNy0xLjA2OCAxLjM1OS00LjA0NiAzLjg4NC02LjYxNyA1LjYxMS0yLjU3MSAxLjcyOC02LjAyNCA0LjM4MS03LjY3NCA1Ljg5Ny0xLjY1IDEuNTE1LTQuNzA1IDMuODk0LTYuNzg5IDUuMjg2LTIuMDgzIDEuMzkyLTYuMTgzIDQuNTk4LTkuMTA5IDcuMTI0LTIuOTI3IDIuNTI3LTguNjQ3IDcuMTI1LTEyLjcxMiAxMC4yMTktNC4wNjQgMy4wOTQtOS40NCA3LjQ3LTExLjk0NSA5LjcyNS0yLjUwNSAyLjI1NS04LjUzMyA3LjQ3NS0xMy4zOTUgMTEuNmE1MDczLjAxNiA1MDczLjAxNiAwIDAgMC0xNy4wMDIgMTQuNWMtMjMuMzg4IDIwLjA2LTMzLjY5NSAyNy41LTM4LjA5NyAyNy41LTIuNjg1IDAtOC40NTEtNS45NzktOC40NTEtOC43NjMgMC0yLjQ5MS45MzUtMy42MjcgMjIuNDAyLTI3LjIzNyAxNy44ODgtMTkuNjc0IDg0LjM3MS04Ni4zMDQgMTM3LjEwNy0xMzcuNDEgNDEuNTk5LTQwLjMxNCA3NC42NjYtNzQuMzMyIDc2Ljk2Ny03OS4xODEuOTEzLTEuOTIzIDEuNzQyLTQuNzE1IDEuODQyLTYuMjAzLjE1NC0yLjI5Ni0uMjU4LTIuNzU2LTIuNzI0LTMuMDM3LTEuNTk4LS4xODMtNC41MjMuMzMtNi41IDEuMTM5LTEuOTc3LjgwOC03LjQxOSAyLjcwMS0xMi4wOTQgNC4yMDVzLTkuNjI1IDMuMjAyLTExIDMuNzczYy0xLjM3NS41Ny0yLjgzNy45NjQtMy4yNS44NzUtLjQxMy0uMDg4LS43NS4zMTYtLjc1Ljg5OCAwIC41ODItLjQ1Ljc4MS0xIC40NDFzLTEtLjExNS0xIC41LS40NS44NC0xIC41Yy0uNTUtLjM0LTEtLjExNS0xIC41cy0uNDguODIxLTEuMDY3LjQ1OWMtLjU4Ni0uMzYzLTEuNjk3LjE3My0yLjQ2OCAxLjE5MS0uNzcxIDEuMDE3LTEuNDE2IDEuNDgtMS40MzMgMS4wMjktLjAxOC0uNDUyLS43NjUtLjA4OS0xLjY2MS44MDdzLTIuMjQ2IDEuMzkyLTMgMS4xMDNjLS43NTQtLjI4OS0xLjM3MS0uMTk2LTEuMzcxLjIwOCAwIC40MDMtMi4zNjMgMS41NjQtNS4yNSAyLjU3OC02LjQ1MSAyLjI2Ny0xMS45MDIgNC42NjQtMjIuMTE2IDkuNzI3LTQuMzI2IDIuMTQ0LTguNDI4IDMuODk4LTkuMTE1IDMuODk4LS42ODcgMC0yLjMyMi44MzMtMy42MzQgMS44NTEtMS4zMTIgMS4wMTktMy41MSAyLjExNi00Ljg4NSAyLjQzOS00LjcwNSAxLjEwNS0xMCAzLjE5OS0xMCAzLjk1NSAwIC40MTUtLjkuNzU1LTIgLjc1NXMtMiAuMzk4LTIgLjg4M2MwIC40ODYtLjc4OCAxLjExOS0xLjc1IDEuNDA2LS45NjIuMjg4LTYuOTI1IDIuODY0LTEzLjI1IDUuNzI2QzI2MS4wMjQgMjY0LjY5NiAyNDUuODQ4IDI3MSAyNDQuMzMzIDI3MWMtLjczMyAwLTEuMzMzLjM0LTEuMzMzLjc1NSAwIC40MTYtMS40NjMgMS4yNzEtMy4yNSAxLjkwMS02LjA4OSAyLjE0Ny0xMC4yNDggMy44NTktMTEuNzUgNC44MzctLjgyNS41MzctMS43MjUgMS4wMDQtMiAxLjAzNy0uMjc1LjAzMy0yLjM1NyAxLjAzMy00LjYyNiAyLjIyMi0yLjI3IDEuMTg5LTQuMzQzIDEuOTQ2LTQuNjA4IDEuNjgxLS4yNjQtLjI2NS0xLjA1LjIwNS0xLjc0NiAxLjA0M1MyMTMuMTQ0IDI4NiAyMTIuMzk2IDI4NmMtLjc0NyAwLTQuMTc5IDEuMzM0LTcuNjI3IDIuOTY0LTMuNDQ4IDEuNjMtMTAuMzcyIDQuNTMyLTE1LjM4NyA2LjQ1LTkuNzU3IDMuNzMxLTE4LjU3MiA3LjU3OC0yNC42MzIgMTAuNzUxLTIuMDYzIDEuMDgtMy43NSAxLjYzOS0zLjc1IDEuMjQ0cy0uODI0LjAyNy0xLjgzMS45MzhjLTEuMDA3LjkxMi0yLjEzMiAxLjM1Ni0yLjUuOTg5LS4zNjgtLjM2OC0uNjY5LS4xNTgtLjY2OS40NjZzLS42NzUuODc2LTEuNS41NmMtLjgyNS0uMzE3LTEuNS0uMDkyLTEuNS41IDAgLjU5MS0uNjc1LjgxNi0xLjUuNS0uODI1LS4zMTctMS41LS4xNTEtMS41LjM2OSAwIDEuMDM4LTEwLjA4NiA2LjI1MS0xMi4xODcgNi4yOTktLjcyMi4wMTYtNi40ODYgMi42MDQtMTIuODA3IDUuNzUtOS4zNDkgNC42NTItMTEuOTkzIDYuNDY1LTE0LjE2MiA5LjcwOS0xLjQ2NiAyLjE5NS0yLjQ3NCA0LjMwMS0yLjIzOSA0LjY4MS4yMzUuMzgxLS4wMy45NzQtLjU4OSAxLjMyLTEuNDE5Ljg3Ny0xLjI3NCA4Ljg1Mi4xODggMTAuMzE0LjY2Mi42NjIgMS4wOTUgMi44MjMuOTYyIDQuODAyLS4xMzMgMS45NzguMzE0IDQuMjY4Ljk5NCA1LjA4Ny42OC44MTkgMS4xMzcgMi45NzEgMS4wMTUgNC43ODItLjE0OSAyLjIwMi4yOTEgMy40OSAxLjMyNiAzLjg4NyAxLjA5Mi40MTkgMS4zNjIgMS4zMzcuOTE1IDMuMTE2LS4zNzQgMS40OTItLjIwNiAyLjUyMi40MTMgMi41MjIuNTc2IDAgMS4wNDEuNzg3IDEuMDMzIDEuNzUtLjAyNiAzLjUyNSAxLjI0MiA5Ljc1NCAyLjE3NyAxMC42ODkuNTI5LjUyOS45NjEgMi4wNC45NjEgMy4zNiAwIDEuMzE5LjYzNSAzLjgxNyAxLjQxMiA1LjU1Ljc3NiAxLjczMyAxLjYyOCA2LjIzIDEuODkyIDkuOTkzcy45NzkgNy4zNDEgMS41ODggNy45NWMuNjEuNjEgMS4xMDggMi4yNzggMS4xMDggMy43MDggMCAxLjQzLjM4OSAzLjAyOC44NjUgMy41NSAyLjkxOSAzLjIwNCA5LjA4OCAyNS41OCAxMC42NzMgMzguNzEzLjM4MyAzLjE3IDEuMDUxIDUuOTgzIDEuNDg1IDYuMjUxLjQzNC4yNjguNTUzIDEuMzkuMjY1IDIuNDkyLS4yODggMS4xMDMuMDM0IDIuNjc3LjcxNiAzLjQ5OS42ODMuODIyLjkwNiAxLjQ5NS40OTYgMS40OTUtLjQxIDAtLjI0NC42MDQuMzY5IDEuMzQyLjYxMi43MzguODI4IDEuNjI3LjQ4IDEuOTc2LS4zNDkuMzQ4LS4wODEgMS4zLjU5NSAyLjExNC42NzUuODE0Ljk2MiAxLjkxMi42MzYgMi40MzktLjMyNi41MjctLjI1MiAxLjEwOS4xNjQgMS4yOTQuNDE2LjE4NCAyLjk0MyA0LjY4IDUuNjE2IDkuOTkxIDYuMjIxIDEyLjM1OSA5LjA0MyAxNS43MDEgMTYuODE1IDE5LjkxNSA2LjIyNSAzLjM3NSA2LjUxNSAzLjQyOCAxOC4zMjUgMy4zODIgMTEuNTQ4LS4wNDUgMTIuMjYzLS4xNzQgMTguOTc2LTMuNDI5IDcuNDY1LTMuNjE5IDEwLjY3Ni01Ljg5MiAyNS41MjQtMTguMDY3IDUuMjI1LTQuMjg0IDE0LjQ1LTExLjY1NiAyMC41LTE2LjM4MSA2LjA1LTQuNzI2IDEyLjM1LTkuNzQ3IDE0LTExLjE1OCAxLjY1LTEuNDExIDYuODI1LTUuMzMzIDExLjUtOC43MTUgNy43OTgtNS42NDIgMTQuMDk3LTEwLjU4MiAzOS40MTQtMzAuOTE2IDQuOTAzLTMuOTM3IDEyLjMyOC05LjY5NiAxNi41LTEyLjc5NyA0LjE3Mi0zLjEwMSA4LjE5OS02LjM4OCA4Ljk0OS03LjMwMy43NS0uOTE2IDEuNzE1LTEuNDQ4IDIuMTQ2LTEuMTgyLjQzLjI2NiAxLjAxNy0uMTMgMS4zMDUtLjg4LjI4Ny0uNzQ5IDMuNTk3LTMuNDExIDcuMzU0LTUuOTE0IDMuNzU4LTIuNTAzIDguMTU0LTUuOTM3IDkuNzY5LTcuNjMxIDEuNjE1LTEuNjk0IDMuNDE1LTMuMDg3IDQtMy4wOTUuNTg1LS4wMDggNS44OS0zLjk0NiAxMS43ODktOC43NXMxNS45ODYtMTIuNTYgMjIuNDE2LTE3LjIzNWM2LjQzMS00LjY3NSAxMi4xNzktOC45NTYgMTIuNzc1LTkuNTE0LjU5Ni0uNTU4IDQuNDU4LTMuNDYgOC41ODMtNi40NSA0LjEyNS0yLjk4OSA5LjMxOC03LjAzMiAxMS41NDEtOC45ODUgMi4yMjItMS45NTMgNi45NDctNS42NDYgMTAuNS04LjIwOCAxMS4zNjEtOC4xOSA1MC40MDEtMzcuNjU0IDUyLjA0My0zOS4yNzcuODcxLS44NjEgMi4wNi0xLjU2NiAyLjY0My0xLjU2Ni41ODIgMCAxLjMyOS0uNzA0IDEuNjU5LTEuNTYzLjMzLS44NiAxLjA1My0xLjI4NCAxLjYwNy0uOTQxLjU1NC4zNDIgMS4wMDcuMjM4IDEuMDA3LS4yMzEgMC0uOTI0IDguMzIxLTcuNTI3IDEzLjU2Ny0xMC43NjUgMjMuNjgzLTE0LjYyMiA0Mi44ODUtMzIuNDAyIDUyLjIzMi00OC4zNjUgMS44MTUtMy4wOTkgMy45OTgtNi4xNjggNC44NTEtNi44MTguODUyLS42NTEgMS4yNTQtMS42NjQuODkxLTIuMjUtLjM2Mi0uNTg3LS4yMzctMS4wNjcuMjc4LTEuMDY3IDIuMDI5IDAgMy4zODEtOS4zMTkgMy44OTMtMjYuODI2LjM3Ny0xMi44ODYuMjAyLTE4LjY2LS41ODgtMTkuNDUtLjYxOC0uNjE4LTEuMTI0LTIuMzU1LTEuMTI0LTMuODU5cy0uNTI1LTQuMDAyLTEuMTY2LTUuNTVjLS42NDItMS41NDgtMS4yMDQtMy4wNDktMS4yNS0zLjMzNS0uMDQ2LS4yODYtMS43NzEtMy4wNjItMy44MzQtNi4xNjktMi4wNjItMy4xMDgtMy43NS01Ljk0MS0zLjc1LTYuMjk3IDAtMS42MzgtNS42NTMtNy43NDEtMTIuODk5LTEzLjkyOC0xMS43MjctMTAuMDEyLTIwLjU1MS0xNS40Mi0yOC42MDEtMTcuNTI4LTUuNTg0LTEuNDYyLTMzLjM2OC0xLjA2NC00MyAuNjE1IiBmaWxsPSIjZmJmYmZiIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=", qs = (j, g) => /* @__PURE__ */ ot.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 120 120", ref: g, ...j }, /* @__PURE__ */ ot.createElement("path", { d: "M56 4.407c-3.797 1.361-7.564 6.23-10.339 13.363C44.226 21.458 44 26.79 44 56.885c0 33.855.06 34.921 2.095 37.508 2.652 3.372 8.929 6.607 12.82 6.607 3.207 0 6.711-2.886 10.775-8.875C71.989 88.737 72 88.565 72 55.36V22H62l-.014 30.75c-.007 16.912-.261 31.672-.564 32.8-.687 2.558-3.841 4.61-5.882 3.827-1.344-.516-1.54-4.879-1.54-34.349 0-31.176.14-33.941 1.83-36.143 1.006-1.312 2.117-3.173 2.468-4.135.49-1.342 1.783-1.75 5.548-1.75 5.725 0 10.734 1.928 13.904 5.352C79.998 20.78 80 20.813 80 57.391 80 77.526 79.658 94 79.241 94c-.418 0-1.322.9-2.009 2-1.556 2.492-1.144 2.525 1.615.133C80.979 94.284 81 93.899 81 57.178V20.091l-2.666-2.666c-3.615-3.616-8.323-5.428-14.052-5.41-5.707.019-6.138.29-9.032 5.686C53.043 21.816 53 22.545 53 55.948 53 75.961 53.379 90 53.918 90c.505 0 1.547.241 2.315.536.769.295 2.605-.584 4.082-1.952L63 86.095V23h8v31.953c0 22.603-.351 32.771-1.198 34.75-2.011 4.693-7.979 10.261-11.018 10.28-4.059.025-9.081-2.743-11.572-6.379C45.036 90.429 45 89.823 45 56.317V22.258l3.127-7.078c2.753-6.233 3.647-7.324 7.489-9.129C62.471 2.828 70.71 3.24 78.767 7.206c10.764 5.299 10.225 2.682 10.229 49.64.004 39.363-.047 40.417-2.092 43.289-3.303 4.639-12.533 10.895-20.812 14.107-6.871 2.666-8.042 2.844-12.329 1.872-5.695-1.29-11.665-4.913-16.905-10.259C30.059 98.918 30 98.547 30 62.378V30h8v32.277c0 38.078-.713 35.502 11.86 42.859 3.395 1.987 6.719 3.137 9.065 3.137 3.977 0 10.861-3.284 15.015-7.163l2.56-2.39-3 1.932c-1.65 1.062-5.48 3.15-8.512 4.638-6.118 3.005-9.325 2.743-14.888-1.219-1.6-1.139-3.369-2.071-3.932-2.071-.562 0-2.405-1.678-4.095-3.728L39 94.544V29H29v33.941c0 21.549.365 34.167 1 34.559.55.34 1 1.337 1 2.215 0 .878 1.8 3.361 4 5.518 2.2 2.157 4 4.336 4 4.844s.638.923 1.417.923 1.566.337 1.75.75c.183.412 2.583 1.875 5.333 3.25 5.855 2.927 13.334 3.198 18 .65 1.65-.901 3.493-1.64 4.096-1.644 1.821-.01 7.404-3.086 7.404-4.079 0-.51.685-.927 1.522-.927.838 0 3.776-2.362 6.531-5.25l5.008-5.25-.281-42.276-.28-42.276-3.683-3.474c-2.026-1.911-4.276-3.477-5-3.481-.724-.003-2.667-.9-4.317-1.993-3.531-2.339-14.728-2.662-20.5-.593", fill: "#848484", fillRule: "evenodd" }), /* @__PURE__ */ ot.createElement("path", { d: "M55.376 6.101c-3.541 1.719-4.566 3.003-7.25 9.08L45 22.258v34.059c0 33.506.036 34.112 2.212 37.287 2.491 3.636 7.513 6.404 11.572 6.379 3.039-.019 9.007-5.587 11.018-10.28C70.649 87.724 71 77.556 71 54.953V23h-8v63.095l-2.685 2.489c-1.477 1.368-3.313 2.247-4.082 1.952-.768-.295-1.81-.536-2.315-.536C53.379 90 53 75.961 53 55.948c0-33.403.043-34.132 2.25-38.247 2.894-5.396 3.325-5.667 9.032-5.686 5.729-.018 10.437 1.794 14.052 5.41L81 20.091V93.99l-4.781 4.755c-5.979 5.946-12.481 9.528-17.294 9.528-2.346 0-5.67-1.15-9.065-3.137C37.287 97.779 38 100.355 38 62.277V30h-8v32.378c0 36.169.059 36.54 6.858 43.477 5.24 5.346 11.21 8.969 16.905 10.259 4.287.972 5.458.794 12.329-1.872 8.279-3.212 17.509-9.468 20.812-14.107 2.045-2.872 2.096-3.926 2.092-43.289-.004-46.958.535-44.341-10.229-49.64-7.992-3.935-16.712-4.346-23.391-1.105", fill: "#848484", fillRule: "evenodd" }));
mn(qs);
const _s = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyMCAxMjAiPjxwYXRoIGQ9Ik01NiA0LjQwN2MtMy43OTcgMS4zNjEtNy41NjQgNi4yMy0xMC4zMzkgMTMuMzYzQzQ0LjIyNiAyMS40NTggNDQgMjYuNzkgNDQgNTYuODg1YzAgMzMuODU1LjA2IDM0LjkyMSAyLjA5NSAzNy41MDggMi42NTIgMy4zNzIgOC45MjkgNi42MDcgMTIuODIgNi42MDcgMy4yMDcgMCA2LjcxMS0yLjg4NiAxMC43NzUtOC44NzVDNzEuOTg5IDg4LjczNyA3MiA4OC41NjUgNzIgNTUuMzZWMjJINjJsLS4wMTQgMzAuNzVjLS4wMDcgMTYuOTEyLS4yNjEgMzEuNjcyLS41NjQgMzIuOC0uNjg3IDIuNTU4LTMuODQxIDQuNjEtNS44ODIgMy44MjctMS4zNDQtLjUxNi0xLjU0LTQuODc5LTEuNTQtMzQuMzQ5IDAtMzEuMTc2LjE0LTMzLjk0MSAxLjgzLTM2LjE0MyAxLjAwNi0xLjMxMiAyLjExNy0zLjE3MyAyLjQ2OC00LjEzNS40OS0xLjM0MiAxLjc4My0xLjc1IDUuNTQ4LTEuNzUgNS43MjUgMCAxMC43MzQgMS45MjggMTMuOTA0IDUuMzUyQzc5Ljk5OCAyMC43OCA4MCAyMC44MTMgODAgNTcuMzkxIDgwIDc3LjUyNiA3OS42NTggOTQgNzkuMjQxIDk0Yy0uNDE4IDAtMS4zMjIuOS0yLjAwOSAyLTEuNTU2IDIuNDkyLTEuMTQ0IDIuNTI1IDEuNjE1LjEzM0M4MC45NzkgOTQuMjg0IDgxIDkzLjg5OSA4MSA1Ny4xNzhWMjAuMDkxbC0yLjY2Ni0yLjY2NmMtMy42MTUtMy42MTYtOC4zMjMtNS40MjgtMTQuMDUyLTUuNDEtNS43MDcuMDE5LTYuMTM4LjI5LTkuMDMyIDUuNjg2QzUzLjA0MyAyMS44MTYgNTMgMjIuNTQ1IDUzIDU1Ljk0OCA1MyA3NS45NjEgNTMuMzc5IDkwIDUzLjkxOCA5MGMuNTA1IDAgMS41NDcuMjQxIDIuMzE1LjUzNi43NjkuMjk1IDIuNjA1LS41ODQgNC4wODItMS45NTJMNjMgODYuMDk1VjIzaDh2MzEuOTUzYzAgMjIuNjAzLS4zNTEgMzIuNzcxLTEuMTk4IDM0Ljc1LTIuMDExIDQuNjkzLTcuOTc5IDEwLjI2MS0xMS4wMTggMTAuMjgtNC4wNTkuMDI1LTkuMDgxLTIuNzQzLTExLjU3Mi02LjM3OUM0NS4wMzYgOTAuNDI5IDQ1IDg5LjgyMyA0NSA1Ni4zMTdWMjIuMjU4bDMuMTI3LTcuMDc4YzIuNzUzLTYuMjMzIDMuNjQ3LTcuMzI0IDcuNDg5LTkuMTI5QzYyLjQ3MSAyLjgyOCA3MC43MSAzLjI0IDc4Ljc2NyA3LjIwNmMxMC43NjQgNS4yOTkgMTAuMjI1IDIuNjgyIDEwLjIyOSA0OS42NC4wMDQgMzkuMzYzLS4wNDcgNDAuNDE3LTIuMDkyIDQzLjI4OS0zLjMwMyA0LjYzOS0xMi41MzMgMTAuODk1LTIwLjgxMiAxNC4xMDctNi44NzEgMi42NjYtOC4wNDIgMi44NDQtMTIuMzI5IDEuODcyLTUuNjk1LTEuMjktMTEuNjY1LTQuOTEzLTE2LjkwNS0xMC4yNTlDMzAuMDU5IDk4LjkxOCAzMCA5OC41NDcgMzAgNjIuMzc4VjMwaDh2MzIuMjc3YzAgMzguMDc4LS43MTMgMzUuNTAyIDExLjg2IDQyLjg1OSAzLjM5NSAxLjk4NyA2LjcxOSAzLjEzNyA5LjA2NSAzLjEzNyAzLjk3NyAwIDEwLjg2MS0zLjI4NCAxNS4wMTUtNy4xNjNsMi41Ni0yLjM5LTMgMS45MzJjLTEuNjUgMS4wNjItNS40OCAzLjE1LTguNTEyIDQuNjM4LTYuMTE4IDMuMDA1LTkuMzI1IDIuNzQzLTE0Ljg4OC0xLjIxOS0xLjYtMS4xMzktMy4zNjktMi4wNzEtMy45MzItMi4wNzEtLjU2MiAwLTIuNDA1LTEuNjc4LTQuMDk1LTMuNzI4TDM5IDk0LjU0NFYyOUgyOXYzMy45NDFjMCAyMS41NDkuMzY1IDM0LjE2NyAxIDM0LjU1OS41NS4zNCAxIDEuMzM3IDEgMi4yMTUgMCAuODc4IDEuOCAzLjM2MSA0IDUuNTE4IDIuMiAyLjE1NyA0IDQuMzM2IDQgNC44NDRzLjYzOC45MjMgMS40MTcuOTIzIDEuNTY2LjMzNyAxLjc1Ljc1Yy4xODMuNDEyIDIuNTgzIDEuODc1IDUuMzMzIDMuMjUgNS44NTUgMi45MjcgMTMuMzM0IDMuMTk4IDE4IC42NSAxLjY1LS45MDEgMy40OTMtMS42NCA0LjA5Ni0xLjY0NCAxLjgyMS0uMDEgNy40MDQtMy4wODYgNy40MDQtNC4wNzkgMC0uNTEuNjg1LS45MjcgMS41MjItLjkyNy44MzggMCAzLjc3Ni0yLjM2MiA2LjUzMS01LjI1bDUuMDA4LTUuMjUtLjI4MS00Mi4yNzYtLjI4LTQyLjI3Ni0zLjY4My0zLjQ3NGMtMi4wMjYtMS45MTEtNC4yNzYtMy40NzctNS0zLjQ4MS0uNzI0LS4wMDMtMi42NjctLjktNC4zMTctMS45OTMtMy41MzEtMi4zMzktMTQuNzI4LTIuNjYyLTIwLjUtLjU5MyIgZmlsbD0iIzg0ODQ4NCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTU1LjM3NiA2LjEwMWMtMy41NDEgMS43MTktNC41NjYgMy4wMDMtNy4yNSA5LjA4TDQ1IDIyLjI1OHYzNC4wNTljMCAzMy41MDYuMDM2IDM0LjExMiAyLjIxMiAzNy4yODcgMi40OTEgMy42MzYgNy41MTMgNi40MDQgMTEuNTcyIDYuMzc5IDMuMDM5LS4wMTkgOS4wMDctNS41ODcgMTEuMDE4LTEwLjI4QzcwLjY0OSA4Ny43MjQgNzEgNzcuNTU2IDcxIDU0Ljk1M1YyM2gtOHY2My4wOTVsLTIuNjg1IDIuNDg5Yy0xLjQ3NyAxLjM2OC0zLjMxMyAyLjI0Ny00LjA4MiAxLjk1Mi0uNzY4LS4yOTUtMS44MS0uNTM2LTIuMzE1LS41MzZDNTMuMzc5IDkwIDUzIDc1Ljk2MSA1MyA1NS45NDhjMC0zMy40MDMuMDQzLTM0LjEzMiAyLjI1LTM4LjI0NyAyLjg5NC01LjM5NiAzLjMyNS01LjY2NyA5LjAzMi01LjY4NiA1LjcyOS0uMDE4IDEwLjQzNyAxLjc5NCAxNC4wNTIgNS40MUw4MSAyMC4wOTFWOTMuOTlsLTQuNzgxIDQuNzU1Yy01Ljk3OSA1Ljk0Ni0xMi40ODEgOS41MjgtMTcuMjk0IDkuNTI4LTIuMzQ2IDAtNS42Ny0xLjE1LTkuMDY1LTMuMTM3QzM3LjI4NyA5Ny43NzkgMzggMTAwLjM1NSAzOCA2Mi4yNzdWMzBoLTh2MzIuMzc4YzAgMzYuMTY5LjA1OSAzNi41NCA2Ljg1OCA0My40NzcgNS4yNCA1LjM0NiAxMS4yMSA4Ljk2OSAxNi45MDUgMTAuMjU5IDQuMjg3Ljk3MiA1LjQ1OC43OTQgMTIuMzI5LTEuODcyIDguMjc5LTMuMjEyIDE3LjUwOS05LjQ2OCAyMC44MTItMTQuMTA3IDIuMDQ1LTIuODcyIDIuMDk2LTMuOTI2IDIuMDkyLTQzLjI4OS0uMDA0LTQ2Ljk1OC41MzUtNDQuMzQxLTEwLjIyOS00OS42NC03Ljk5Mi0zLjkzNS0xNi43MTItNC4zNDYtMjMuMzkxLTEuMTA1IiBmaWxsPSIjODQ4NDg0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=", $s = (j, g) => /* @__PURE__ */ ot.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 102 102", ref: g, ...j }, /* @__PURE__ */ ot.createElement("path", { d: "M27.488 9.924c-2.565 1.065-10.486 8.948-10.494 10.444-.004.622-.657 2.38-1.453 3.906-2.086 3.998-3.033 13.938-1.586 16.642 1.96 3.661 5.374 2.374 6.409-2.416.476-2.2 1.217-4.9 1.648-6 2.397-6.116 4.19-9.5 5.035-9.5.524 0 .953-.61.953-1.355s1.384-2.502 3.076-3.903c2.359-1.954 3-3.212 2.75-5.395-.352-3.071-2.655-3.951-6.338-2.423m41.179-.257c-1.708 1.707-.494 5.956 2.342 8.196C72.654 19.162 74 20.849 74 21.613c0 .763.429 1.387.953 1.387.845 0 2.638 3.384 5.035 9.5.431 1.1 1.172 3.8 1.648 6 1.035 4.79 4.449 6.077 6.409 2.416 1.447-2.704.5-12.644-1.586-16.642-.796-1.526-1.449-3.284-1.453-3.906-.009-1.635-8.046-9.433-10.801-10.48-2.782-1.058-4.628-1.132-5.538-.221M28 10.708c-2.784 1.021-9.056 8.256-10.912 12.587C13.296 32.141 13.246 42 16.992 42c1.373 0 2.01-1.053 2.542-4.202 1.026-6.074 4.047-12.574 8.256-17.765 2.022-2.493 4.021-4.683 4.443-4.866.422-.184.767-1.421.767-2.75 0-2.429-1.572-2.966-5-1.709m41 1.584c0 1.398.345 2.691.767 2.875.422.183 2.421 2.373 4.443 4.866 4.209 5.191 7.23 11.691 8.256 17.765.885 5.239 3.988 5.966 5.039 1.18 2.198-10.009-6.836-26.894-15.295-28.586-2.94-.588-3.21-.428-3.21 1.9m-20.291-.668c-.39.39-.71 1.422-.711 2.293-.002.982-2.446 2.671-6.442 4.45-7.376 3.284-9.028 5.738-10.732 15.931-3.317 19.851-3.567 20.5-10.532 27.295-7.324 7.147-7.959 10.098-2.969 13.808C20.048 77.427 21.226 77.5 51 77.5s30.952-.073 33.677-2.099c4.99-3.71 4.355-6.661-2.969-13.808-6.965-6.795-7.215-7.444-10.532-27.295-1.701-10.178-3.36-12.647-10.696-15.921-4.442-1.982-6.492-3.474-6.692-4.868-.286-1.997-3.7-3.264-5.079-1.885m.979 1.022c-.379.378-.688 1.402-.688 2.276 0 1.018-2.182 2.434-6.084 3.947-7.079 2.745-9.339 5.676-10.874 14.106-3.6 19.776-4.094 21.506-7.274 25.506-1.756 2.211-3.574 4.178-4.038 4.371-2.732 1.141-5.815 5.592-5.537 7.993C15.801 76.079 18.467 76.5 51 76.5s35.199-.421 35.807-5.655c.278-2.401-2.805-6.852-5.537-7.993-.464-.193-2.282-2.16-4.038-4.371-3.18-4-3.674-5.73-7.274-25.506-1.533-8.416-3.798-11.362-10.834-14.09-4.191-1.625-6.134-2.94-6.335-4.286-.307-2.061-1.956-3.099-3.101-1.953M43 81.923C43 84.904 48.678 90 52 90s9-5.096 9-8.077C61 80.168 60.213 80 52 80s-9 .168-9 1.923m1 .441c0 .75 1.186 2.55 2.636 4 3.417 3.417 7.311 3.417 10.728 0C61.855 81.873 60.982 81 52 81c-6.089 0-8 .326-8 1.364", fill: "#fcec3c", fillRule: "evenodd" }), /* @__PURE__ */ ot.createElement("path", { d: "M28 10.708c-2.784 1.021-9.056 8.256-10.912 12.587C13.296 32.141 13.246 42 16.992 42c1.373 0 2.01-1.053 2.542-4.202 1.026-6.074 4.047-12.574 8.256-17.765 2.022-2.493 4.021-4.683 4.443-4.866.422-.184.767-1.421.767-2.75 0-2.429-1.572-2.966-5-1.709m41 1.584c0 1.398.345 2.691.767 2.875.422.183 2.421 2.373 4.443 4.866 4.209 5.191 7.23 11.691 8.256 17.765.885 5.239 3.988 5.966 5.039 1.18 2.198-10.009-6.836-26.894-15.295-28.586-2.94-.588-3.21-.428-3.21 1.9m-19.312.354c-.379.378-.688 1.402-.688 2.276 0 1.018-2.182 2.434-6.084 3.947-7.079 2.745-9.339 5.676-10.874 14.106-3.6 19.776-4.094 21.506-7.274 25.506-1.756 2.211-3.574 4.178-4.038 4.371-2.732 1.141-5.815 5.592-5.537 7.993C15.801 76.079 18.467 76.5 51 76.5s35.199-.421 35.807-5.655c.278-2.401-2.805-6.852-5.537-7.993-.464-.193-2.282-2.16-4.038-4.371-3.18-4-3.674-5.73-7.274-25.506-1.533-8.416-3.798-11.362-10.834-14.09-4.191-1.625-6.134-2.94-6.335-4.286-.307-2.061-1.956-3.099-3.101-1.953M44 82.364c0 .75 1.186 2.55 2.636 4 3.417 3.417 7.311 3.417 10.728 0C61.855 81.873 60.982 81 52 81c-6.089 0-8 .326-8 1.364", fill: "#fcec3c", fillRule: "evenodd" }));
mn($s);
const el = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMiAxMDIiPjxwYXRoIGQ9Ik0yNy40ODggOS45MjRjLTIuNTY1IDEuMDY1LTEwLjQ4NiA4Ljk0OC0xMC40OTQgMTAuNDQ0LS4wMDQuNjIyLS42NTcgMi4zOC0xLjQ1MyAzLjkwNi0yLjA4NiAzLjk5OC0zLjAzMyAxMy45MzgtMS41ODYgMTYuNjQyIDEuOTYgMy42NjEgNS4zNzQgMi4zNzQgNi40MDktMi40MTYuNDc2LTIuMiAxLjIxNy00LjkgMS42NDgtNiAyLjM5Ny02LjExNiA0LjE5LTkuNSA1LjAzNS05LjUuNTI0IDAgLjk1My0uNjEuOTUzLTEuMzU1czEuMzg0LTIuNTAyIDMuMDc2LTMuOTAzYzIuMzU5LTEuOTU0IDMtMy4yMTIgMi43NS01LjM5NS0uMzUyLTMuMDcxLTIuNjU1LTMuOTUxLTYuMzM4LTIuNDIzbTQxLjE3OS0uMjU3Yy0xLjcwOCAxLjcwNy0uNDk0IDUuOTU2IDIuMzQyIDguMTk2QzcyLjY1NCAxOS4xNjIgNzQgMjAuODQ5IDc0IDIxLjYxM2MwIC43NjMuNDI5IDEuMzg3Ljk1MyAxLjM4Ny44NDUgMCAyLjYzOCAzLjM4NCA1LjAzNSA5LjUuNDMxIDEuMSAxLjE3MiAzLjggMS42NDggNiAxLjAzNSA0Ljc5IDQuNDQ5IDYuMDc3IDYuNDA5IDIuNDE2IDEuNDQ3LTIuNzA0LjUtMTIuNjQ0LTEuNTg2LTE2LjY0Mi0uNzk2LTEuNTI2LTEuNDQ5LTMuMjg0LTEuNDUzLTMuOTA2LS4wMDktMS42MzUtOC4wNDYtOS40MzMtMTAuODAxLTEwLjQ4LTIuNzgyLTEuMDU4LTQuNjI4LTEuMTMyLTUuNTM4LS4yMjFNMjggMTAuNzA4Yy0yLjc4NCAxLjAyMS05LjA1NiA4LjI1Ni0xMC45MTIgMTIuNTg3QzEzLjI5NiAzMi4xNDEgMTMuMjQ2IDQyIDE2Ljk5MiA0MmMxLjM3MyAwIDIuMDEtMS4wNTMgMi41NDItNC4yMDIgMS4wMjYtNi4wNzQgNC4wNDctMTIuNTc0IDguMjU2LTE3Ljc2NSAyLjAyMi0yLjQ5MyA0LjAyMS00LjY4MyA0LjQ0My00Ljg2Ni40MjItLjE4NC43NjctMS40MjEuNzY3LTIuNzUgMC0yLjQyOS0xLjU3Mi0yLjk2Ni01LTEuNzA5bTQxIDEuNTg0YzAgMS4zOTguMzQ1IDIuNjkxLjc2NyAyLjg3NS40MjIuMTgzIDIuNDIxIDIuMzczIDQuNDQzIDQuODY2IDQuMjA5IDUuMTkxIDcuMjMgMTEuNjkxIDguMjU2IDE3Ljc2NS44ODUgNS4yMzkgMy45ODggNS45NjYgNS4wMzkgMS4xOCAyLjE5OC0xMC4wMDktNi44MzYtMjYuODk0LTE1LjI5NS0yOC41ODYtMi45NC0uNTg4LTMuMjEtLjQyOC0zLjIxIDEuOW0tMjAuMjkxLS42NjhjLS4zOS4zOS0uNzEgMS40MjItLjcxMSAyLjI5My0uMDAyLjk4Mi0yLjQ0NiAyLjY3MS02LjQ0MiA0LjQ1LTcuMzc2IDMuMjg0LTkuMDI4IDUuNzM4LTEwLjczMiAxNS45MzEtMy4zMTcgMTkuODUxLTMuNTY3IDIwLjUtMTAuNTMyIDI3LjI5NS03LjMyNCA3LjE0Ny03Ljk1OSAxMC4wOTgtMi45NjkgMTMuODA4QzIwLjA0OCA3Ny40MjcgMjEuMjI2IDc3LjUgNTEgNzcuNXMzMC45NTItLjA3MyAzMy42NzctMi4wOTljNC45OS0zLjcxIDQuMzU1LTYuNjYxLTIuOTY5LTEzLjgwOC02Ljk2NS02Ljc5NS03LjIxNS03LjQ0NC0xMC41MzItMjcuMjk1LTEuNzAxLTEwLjE3OC0zLjM2LTEyLjY0Ny0xMC42OTYtMTUuOTIxLTQuNDQyLTEuOTgyLTYuNDkyLTMuNDc0LTYuNjkyLTQuODY4LS4yODYtMS45OTctMy43LTMuMjY0LTUuMDc5LTEuODg1bS45NzkgMS4wMjJjLS4zNzkuMzc4LS42ODggMS40MDItLjY4OCAyLjI3NiAwIDEuMDE4LTIuMTgyIDIuNDM0LTYuMDg0IDMuOTQ3LTcuMDc5IDIuNzQ1LTkuMzM5IDUuNjc2LTEwLjg3NCAxNC4xMDYtMy42IDE5Ljc3Ni00LjA5NCAyMS41MDYtNy4yNzQgMjUuNTA2LTEuNzU2IDIuMjExLTMuNTc0IDQuMTc4LTQuMDM4IDQuMzcxLTIuNzMyIDEuMTQxLTUuODE1IDUuNTkyLTUuNTM3IDcuOTkzQzE1LjgwMSA3Ni4wNzkgMTguNDY3IDc2LjUgNTEgNzYuNXMzNS4xOTktLjQyMSAzNS44MDctNS42NTVjLjI3OC0yLjQwMS0yLjgwNS02Ljg1Mi01LjUzNy03Ljk5My0uNDY0LS4xOTMtMi4yODItMi4xNi00LjAzOC00LjM3MS0zLjE4LTQtMy42NzQtNS43My03LjI3NC0yNS41MDYtMS41MzMtOC40MTYtMy43OTgtMTEuMzYyLTEwLjgzNC0xNC4wOS00LjE5MS0xLjYyNS02LjEzNC0yLjk0LTYuMzM1LTQuMjg2LS4zMDctMi4wNjEtMS45NTYtMy4wOTktMy4xMDEtMS45NTNNNDMgODEuOTIzQzQzIDg0LjkwNCA0OC42NzggOTAgNTIgOTBzOS01LjA5NiA5LTguMDc3QzYxIDgwLjE2OCA2MC4yMTMgODAgNTIgODBzLTkgLjE2OC05IDEuOTIzbTEgLjQ0MWMwIC43NSAxLjE4NiAyLjU1IDIuNjM2IDQgMy40MTcgMy40MTcgNy4zMTEgMy40MTcgMTAuNzI4IDBDNjEuODU1IDgxLjg3MyA2MC45ODIgODEgNTIgODFjLTYuMDg5IDAtOCAuMzI2LTggMS4zNjQiIGZpbGw9IiNmY2VjM2MiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0yOCAxMC43MDhjLTIuNzg0IDEuMDIxLTkuMDU2IDguMjU2LTEwLjkxMiAxMi41ODdDMTMuMjk2IDMyLjE0MSAxMy4yNDYgNDIgMTYuOTkyIDQyYzEuMzczIDAgMi4wMS0xLjA1MyAyLjU0Mi00LjIwMiAxLjAyNi02LjA3NCA0LjA0Ny0xMi41NzQgOC4yNTYtMTcuNzY1IDIuMDIyLTIuNDkzIDQuMDIxLTQuNjgzIDQuNDQzLTQuODY2LjQyMi0uMTg0Ljc2Ny0xLjQyMS43NjctMi43NSAwLTIuNDI5LTEuNTcyLTIuOTY2LTUtMS43MDltNDEgMS41ODRjMCAxLjM5OC4zNDUgMi42OTEuNzY3IDIuODc1LjQyMi4xODMgMi40MjEgMi4zNzMgNC40NDMgNC44NjYgNC4yMDkgNS4xOTEgNy4yMyAxMS42OTEgOC4yNTYgMTcuNzY1Ljg4NSA1LjIzOSAzLjk4OCA1Ljk2NiA1LjAzOSAxLjE4IDIuMTk4LTEwLjAwOS02LjgzNi0yNi44OTQtMTUuMjk1LTI4LjU4Ni0yLjk0LS41ODgtMy4yMS0uNDI4LTMuMjEgMS45bS0xOS4zMTIuMzU0Yy0uMzc5LjM3OC0uNjg4IDEuNDAyLS42ODggMi4yNzYgMCAxLjAxOC0yLjE4MiAyLjQzNC02LjA4NCAzLjk0Ny03LjA3OSAyLjc0NS05LjMzOSA1LjY3Ni0xMC44NzQgMTQuMTA2LTMuNiAxOS43NzYtNC4wOTQgMjEuNTA2LTcuMjc0IDI1LjUwNi0xLjc1NiAyLjIxMS0zLjU3NCA0LjE3OC00LjAzOCA0LjM3MS0yLjczMiAxLjE0MS01LjgxNSA1LjU5Mi01LjUzNyA3Ljk5M0MxNS44MDEgNzYuMDc5IDE4LjQ2NyA3Ni41IDUxIDc2LjVzMzUuMTk5LS40MjEgMzUuODA3LTUuNjU1Yy4yNzgtMi40MDEtMi44MDUtNi44NTItNS41MzctNy45OTMtLjQ2NC0uMTkzLTIuMjgyLTIuMTYtNC4wMzgtNC4zNzEtMy4xOC00LTMuNjc0LTUuNzMtNy4yNzQtMjUuNTA2LTEuNTMzLTguNDE2LTMuNzk4LTExLjM2Mi0xMC44MzQtMTQuMDktNC4xOTEtMS42MjUtNi4xMzQtMi45NC02LjMzNS00LjI4Ni0uMzA3LTIuMDYxLTEuOTU2LTMuMDk5LTMuMTAxLTEuOTUzTTQ0IDgyLjM2NGMwIC43NSAxLjE4NiAyLjU1IDIuNjM2IDQgMy40MTcgMy40MTcgNy4zMTEgMy40MTcgMTAuNzI4IDBDNjEuODU1IDgxLjg3MyA2MC45ODIgODEgNTIgODFjLTYuMDg5IDAtOCAuMzI2LTggMS4zNjQiIGZpbGw9IiNmY2VjM2MiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==", tl = (j, g) => /* @__PURE__ */ ot.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 124, height: 124, viewBox: "0 0 124 124", ref: g, ...j }, /* @__PURE__ */ ot.createElement("path", { d: "M 17.667 16.667 C 17.300 17.033, 17 18.717, 17 20.407 C 17 23.062, 19.553 26.037, 35.740 42.241 L 54.481 61 35.165 80.335 C 16.849 98.669, 15.866 99.847, 16.174 103.085 C 16.480 106.292, 16.744 106.517, 20.500 106.783 C 24.468 107.065, 24.652 106.914, 43.490 88.033 L 62.481 69 81.570 88.070 C 100.452 106.933, 100.703 107.138, 104.580 106.821 C 108.236 106.522, 108.522 106.270, 108.826 103.085 C 109.134 99.847, 108.151 98.669, 89.835 80.335 L 70.519 61 89.335 42.165 C 107.162 24.319, 108.134 23.150, 107.826 19.915 C 107.522 16.730, 107.236 16.478, 103.580 16.180 C 99.706 15.863, 99.443 16.077, 81.070 34.430 L 62.480 53.001 44 34.500 C 26.879 17.361, 25.256 16, 21.927 16 C 19.950 16, 18.033 16.300, 17.667 16.667", stroke: "none", fill: "#fffcfc", fillRule: "evenodd" }), /* @__PURE__ */ ot.createElement("path", { d: "", stroke: "none", fill: "#fcfcfc", fillRule: "evenodd" }));
mn(tl);
const rl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiB2aWV3Qm94PSIwIDAgMTI0IDEyNCIgdmVyc2lvbj0iMS4xIj48cGF0aCBkPSJNIDE3LjY2NyAxNi42NjcgQyAxNy4zMDAgMTcuMDMzLCAxNyAxOC43MTcsIDE3IDIwLjQwNyBDIDE3IDIzLjA2MiwgMTkuNTUzIDI2LjAzNywgMzUuNzQwIDQyLjI0MSBMIDU0LjQ4MSA2MSAzNS4xNjUgODAuMzM1IEMgMTYuODQ5IDk4LjY2OSwgMTUuODY2IDk5Ljg0NywgMTYuMTc0IDEwMy4wODUgQyAxNi40ODAgMTA2LjI5MiwgMTYuNzQ0IDEwNi41MTcsIDIwLjUwMCAxMDYuNzgzIEMgMjQuNDY4IDEwNy4wNjUsIDI0LjY1MiAxMDYuOTE0LCA0My40OTAgODguMDMzIEwgNjIuNDgxIDY5IDgxLjU3MCA4OC4wNzAgQyAxMDAuNDUyIDEwNi45MzMsIDEwMC43MDMgMTA3LjEzOCwgMTA0LjU4MCAxMDYuODIxIEMgMTA4LjIzNiAxMDYuNTIyLCAxMDguNTIyIDEwNi4yNzAsIDEwOC44MjYgMTAzLjA4NSBDIDEwOS4xMzQgOTkuODQ3LCAxMDguMTUxIDk4LjY2OSwgODkuODM1IDgwLjMzNSBMIDcwLjUxOSA2MSA4OS4zMzUgNDIuMTY1IEMgMTA3LjE2MiAyNC4zMTksIDEwOC4xMzQgMjMuMTUwLCAxMDcuODI2IDE5LjkxNSBDIDEwNy41MjIgMTYuNzMwLCAxMDcuMjM2IDE2LjQ3OCwgMTAzLjU4MCAxNi4xODAgQyA5OS43MDYgMTUuODYzLCA5OS40NDMgMTYuMDc3LCA4MS4wNzAgMzQuNDMwIEwgNjIuNDgwIDUzLjAwMSA0NCAzNC41MDAgQyAyNi44NzkgMTcuMzYxLCAyNS4yNTYgMTYsIDIxLjkyNyAxNiBDIDE5Ljk1MCAxNiwgMTguMDMzIDE2LjMwMCwgMTcuNjY3IDE2LjY2NyIgc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmY2ZjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSIiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI2ZjZmNmYyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+", nl = (j, g) => /* @__PURE__ */ ot.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 85, height: 85, viewBox: "0 0 85 85", ref: g, ...j }, /* @__PURE__ */ ot.createElement("path", { d: "M 2 2.774 C 2 3.199, 4.397 10.721, 7.326 19.489 L 12.651 35.430 24.555 38.388 C 31.103 40.015, 35.794 41.572, 34.980 41.846 C 34.166 42.121, 28.806 43.526, 23.068 44.968 L 12.636 47.591 7.214 63.858 C 4.232 72.805, 2.013 80.346, 2.284 80.617 C 2.554 80.887, 20.603 72.199, 42.391 61.309 L 82.007 41.508 42.753 21.809 C 21.164 10.974, 3.163 2.084, 2.750 2.054 C 2.337 2.024, 2 2.348, 2 2.774 M 3.228 4.186 C 3.498 4.909, 5.880 12.052, 8.521 20.060 L 13.323 34.620 24.745 37.560 C 31.027 39.177, 36.166 40.950, 36.166 41.500 C 36.166 42.050, 31.029 43.822, 24.751 45.438 L 13.335 48.376 8.191 63.879 C 5.362 72.405, 3.149 79.472, 3.274 79.583 C 3.398 79.694, 20.714 71.169, 41.753 60.638 L 80.007 41.491 41.372 22.182 C 20.123 11.561, 2.958 3.463, 3.228 4.186", stroke: "none", fill: "#fcfcfc", fillRule: "evenodd" }), /* @__PURE__ */ ot.createElement("path", { d: "M 3.228 4.186 C 3.498 4.909, 5.880 12.052, 8.521 20.060 L 13.323 34.620 24.745 37.560 C 31.027 39.177, 36.166 40.950, 36.166 41.500 C 36.166 42.050, 31.029 43.822, 24.751 45.438 L 13.335 48.376 8.191 63.879 C 5.362 72.405, 3.149 79.472, 3.274 79.583 C 3.398 79.694, 20.714 71.169, 41.753 60.638 L 80.007 41.491 41.372 22.182 C 20.123 11.561, 2.958 3.463, 3.228 4.186", stroke: "none", fill: "#fcfcfc", fillRule: "evenodd" }));
mn(nl);
const Al = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NSIgaGVpZ2h0PSI4NSIgdmlld0JveD0iMCAwIDg1IDg1IiB2ZXJzaW9uPSIxLjEiPjxwYXRoIGQ9Ik0gMiAyLjc3NCBDIDIgMy4xOTksIDQuMzk3IDEwLjcyMSwgNy4zMjYgMTkuNDg5IEwgMTIuNjUxIDM1LjQzMCAyNC41NTUgMzguMzg4IEMgMzEuMTAzIDQwLjAxNSwgMzUuNzk0IDQxLjU3MiwgMzQuOTgwIDQxLjg0NiBDIDM0LjE2NiA0Mi4xMjEsIDI4LjgwNiA0My41MjYsIDIzLjA2OCA0NC45NjggTCAxMi42MzYgNDcuNTkxIDcuMjE0IDYzLjg1OCBDIDQuMjMyIDcyLjgwNSwgMi4wMTMgODAuMzQ2LCAyLjI4NCA4MC42MTcgQyAyLjU1NCA4MC44ODcsIDIwLjYwMyA3Mi4xOTksIDQyLjM5MSA2MS4zMDkgTCA4Mi4wMDcgNDEuNTA4IDQyLjc1MyAyMS44MDkgQyAyMS4xNjQgMTAuOTc0LCAzLjE2MyAyLjA4NCwgMi43NTAgMi4wNTQgQyAyLjMzNyAyLjAyNCwgMiAyLjM0OCwgMiAyLjc3NCBNIDMuMjI4IDQuMTg2IEMgMy40OTggNC45MDksIDUuODgwIDEyLjA1MiwgOC41MjEgMjAuMDYwIEwgMTMuMzIzIDM0LjYyMCAyNC43NDUgMzcuNTYwIEMgMzEuMDI3IDM5LjE3NywgMzYuMTY2IDQwLjk1MCwgMzYuMTY2IDQxLjUwMCBDIDM2LjE2NiA0Mi4wNTAsIDMxLjAyOSA0My44MjIsIDI0Ljc1MSA0NS40MzggTCAxMy4zMzUgNDguMzc2IDguMTkxIDYzLjg3OSBDIDUuMzYyIDcyLjQwNSwgMy4xNDkgNzkuNDcyLCAzLjI3NCA3OS41ODMgQyAzLjM5OCA3OS42OTQsIDIwLjcxNCA3MS4xNjksIDQxLjc1MyA2MC42MzggTCA4MC4wMDcgNDEuNDkxIDQxLjM3MiAyMi4xODIgQyAyMC4xMjMgMTEuNTYxLCAyLjk1OCAzLjQ2MywgMy4yMjggNC4xODYiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI2ZjZmNmYyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTSAzLjIyOCA0LjE4NiBDIDMuNDk4IDQuOTA5LCA1Ljg4MCAxMi4wNTIsIDguNTIxIDIwLjA2MCBMIDEzLjMyMyAzNC42MjAgMjQuNzQ1IDM3LjU2MCBDIDMxLjAyNyAzOS4xNzcsIDM2LjE2NiA0MC45NTAsIDM2LjE2NiA0MS41MDAgQyAzNi4xNjYgNDIuMDUwLCAzMS4wMjkgNDMuODIyLCAyNC43NTEgNDUuNDM4IEwgMTMuMzM1IDQ4LjM3NiA4LjE5MSA2My44NzkgQyA1LjM2MiA3Mi40MDUsIDMuMTQ5IDc5LjQ3MiwgMy4yNzQgNzkuNTgzIEMgMy4zOTggNzkuNjk0LCAyMC43MTQgNzEuMTY5LCA0MS43NTMgNjAuNjM4IEwgODAuMDA3IDQxLjQ5MSA0MS4zNzIgMjIuMTgyIEMgMjAuMTIzIDExLjU2MSwgMi45NTggMy40NjMsIDMuMjI4IDQuMTg2IiBzdHJva2U9Im5vbmUiIGZpbGw9IiNmY2ZjZmMiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==", ol = (j, g) => /* @__PURE__ */ ot.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 108 108", ref: g, ...j }, /* @__PURE__ */ ot.createElement("path", { d: "M37 21c0 .588 3.5 1 8.5 1 8.5 0 8.5 0 8.5 3.462 0 3.463 0 3.463-9.25 3.793-9.25.33-9.25.33 0 .537C54 30 54 30 54 33.464s0 3.464-9.75 3.79c-9.75.327-9.75.327.063.537 9.814.209 9.814.209 9.5 3.459-.313 3.25-.313 3.25-9.313 3.811-9 .561-9 .561-1.715.75 6.867.178 7.226.3 6.25 2.123-1.621 3.03-1.219 7.563.913 10.273 1.344 1.708 2.06 4.464 2.307 8.885.36 6.408.36 6.408.552.158.169-5.467.438-6.25 2.145-6.25 1.691 0 2 .839 2.308 6.25.355 6.25.355 6.25.547-.092.141-4.616.738-7.035 2.193-8.885 2.178-2.769 2.599-7.285.965-10.339-.979-1.829-.611-1.944 6.75-2.125 7.785-.192 7.785-.192-1.715-.75-9.5-.559-9.5-.559-9.811-3.773-.31-3.215-.31-3.215 10-3.539 10.311-.325 10.311-.325.061-.536C56 37 56 37 56 33.536s0-3.464 9.75-3.79c9.75-.327 9.75-.327 0-.537C56 29 56 29 56 25.5s0-3.5 8.5-3.5c5 0 8.5-.412 8.5-1 0-.63-6.667-1-18-1s-18 .37-18 1", fill: "#ec1c24", fillRule: "evenodd" }), /* @__PURE__ */ ot.createElement("path", { d: "M49.243 5.85c-4.078 1.175-9.259 6.193-11.773 11.403C36.112 20.07 35 22.515 35 22.687c0 .172 3.375.313 7.5.313 4.333 0 7.5.422 7.5 1 0 .57-2.959 1-6.878 1-4.893 0-7.236.433-8.122 1.5-2.394 2.885.52 4.5 8.122 4.5 3.919 0 6.878.43 6.878 1 0 .576-3.126 1-7.378 1-5.337 0-7.721.415-8.622 1.5-2.394 2.885.52 4.5 8.122 4.5 3.919 0 6.878.43 6.878 1 0 .562-2.793 1-6.378 1-4.449 0-6.754.454-7.622 1.5-2.11 2.542.535 4.477 6.372 4.663 5.128.163 5.128.163-.372.75s-5.5.587-5.146 6.424c.383 6.304 1.318 8.706 5.164 13.266C44.59 71.837 48.04 74 51.223 74 54 74 54 74 53.807 67.25c-.192-6.75-.192-6.75-.547-.5-.332 5.845-.512 6.25-2.773 6.25-3.056 0-9.053-5.209-11.405-9.905-.989-1.977-2.064-5.935-2.388-8.795-.588-5.199-.588-5.199 4.609-5.5 6.85-.396 6.659-2.167-.303-2.8-4-.364-5.5-.909-5.5-2 0-1.143 1.667-1.619 7-2s7-.857 7-2c0-1.156-1.722-1.615-7.5-2-5.778-.385-7.5-.844-7.5-2 0-1.167 1.778-1.611 8-2 6.222-.389 8-.833 8-2 0-1.156-1.722-1.615-7.5-2-5.778-.385-7.5-.844-7.5-2 0-1.156 1.722-1.615 7.5-2 5.778-.385 7.5-.844 7.5-2 0-1.166-1.589-1.565-7.139-1.792-7.139-.291-7.139-.291-5.163-4.5 7.238-15.415 26.223-15.338 34.485.14 2.173 4.07 2.173 4.07-5.505 4.361-6.029.229-7.678.613-7.678 1.791 0 1.167 1.778 1.611 8 2 6.222.389 8 .833 8 2s-1.778 1.611-8 2c-6.222.389-8 .833-8 2 0 1.176 1.833 1.608 8.5 2 6.667.392 8.5.824 8.5 2 0 1.167-1.778 1.611-8 2-6.222.389-8 .833-8 2 0 1.156 1.722 1.615 7.5 2 5.778.385 7.5.844 7.5 2 0 1.102-1.53 1.633-5.769 2-7.266.63-7.921 2.402-1.034 2.8 5.197.301 5.197.301 4.609 5.5-.324 2.86-1.408 6.836-2.41 8.836C68.759 67.405 62.098 73 59.154 73c-1.821 0-2.1-.723-2.414-6.25-.355-6.25-.355-6.25-.547.5-.19 6.649-.154 6.75 2.403 6.75 2.461 0 7.076-2.662 10.39-5.995 2.511-2.524 4.915-9.201 5.223-14.505.291-5 .291-5-5.209-5.587-5.5-.587-5.5-.587.128-.75 6.335-.183 9.057-2.03 6.872-4.663-.886-1.067-3.229-1.5-8.122-1.5C63.959 41 61 40.57 61 40c0-.576 3.126-1 7.378-1 8.107 0 11.072-1.548 8.622-4.5-.914-1.101-3.34-1.5-9.122-1.5C63.293 33 60 32.582 60 32c0-.576 3.126-1 7.378-1 8.107 0 11.072-1.548 8.622-4.5-.901-1.085-3.285-1.5-8.622-1.5C63.126 25 60 24.576 60 24c0-.576 3.111-1 7.333-1 4.034 0 7.602-.268 7.929-.596.807-.806-2.837-7.239-6.106-10.78-4.967-5.379-13.099-7.738-19.913-5.774M26.402 43.394c-.325.848-.434 5.944-.241 11.324.312 8.712.652 10.227 3.107 13.849 3.501 5.168 13.688 12.242 18.805 13.061C52 82.256 52 82.256 52 90.589s0 8.333-8.75 8.622c-8.59.284-8.75.335-8.75 2.789 0 2.5 0 2.5 20.5 2.5s20.5 0 20.5-2.5c0-2.454-.16-2.505-8.75-2.789-8.75-.289-8.75-.289-8.75-8.75 0-7.839.149-8.461 2.032-8.461 2.695 0 9.447-2.855 8.646-3.656-.346-.346-1.225-.135-1.953.47-.729.604-3.214 1.401-5.525 1.77-4.2.672-4.2.672-4.2 10.044S57 100 66 100c8.333 0 9 .148 9 2 0 1.933-.667 2-20 2s-20-.067-20-2c0-1.852.667-2 9-2 9 0 9 0 9-9.372s0-9.372-4.139-10.034c-5.197-.831-15.553-7.693-18.839-12.482-2.183-3.181-2.521-4.894-2.839-14.362-.312-9.306-.147-10.75 1.229-10.75 1.31 0 1.596 1.354 1.632 7.75.05 8.76 1.784 14.741 4.911 16.931 1.169.819 2.894 2.272 3.835 3.229 6.785 6.905 17.94 8.639 26.21 4.074 2.475-1.366 4.86-3.046 5.3-3.734.44-.687 1.267-1.25 1.839-1.25.572 0 1.924-1.013 3.005-2.25C78.755 63.614 80 59.329 80 51.032c0-6.473.291-8.032 1.5-8.032 2.247 0 2.16 18.613-.102 21.842-.881 1.258-1.364 2.525-1.074 2.816.291.29 1.253-.873 2.138-2.585 1.228-2.374 1.542-5.421 1.324-12.843-.264-8.968-.443-9.73-2.286-9.73-1.809 0-2.056.862-2.585 9-.71 10.919-1.638 13.34-6.584 17.172-12.856 9.96-19.798 10.52-31.26 2.518-8.431-5.885-9.333-7.59-9.997-18.904-.484-8.241-.848-9.817-2.327-10.099-.964-.184-2.019.359-2.345 1.207M74 74c-2.475 2.167-3.923 3.954-3.219 3.97.705.017 1.541-.645 1.857-1.47.317-.825 1.038-1.5 1.602-1.5.91 0 4.76-3.764 4.76-4.653 0-.652-.504-.284-5 3.653", fill: "#040404", fillRule: "evenodd" }), /* @__PURE__ */ ot.createElement("path", { d: "M49.357 6.85C44.516 8.319 38 15.261 38 18.95c0 .693 5.948 1.05 17.5 1.05 11 0 17.5.371 17.5 1 0 .55.442 1 .983 1 1.197 0-2.361-6.595-5.331-9.882-4.381-4.849-12.96-7.191-19.295-5.268m1.004 16.9c.118 1.482-.999 1.827-7.282 2.25-4.668.314-7.575.964-7.834 1.75-.31.942 1.952 1.25 9.172 1.25C54 29 54 29 54 25.5c0-2.765-.397-3.5-1.889-3.5-1.185 0-1.837.652-1.75 1.75M56 25.5C56 29 56 29 66.083 29c7.62 0 9.983-.305 9.671-1.25-.263-.8-3.264-1.43-8.333-1.75-6.759-.427-7.901-.757-7.782-2.25.087-1.098-.565-1.75-1.75-1.75-1.492 0-1.889.735-1.889 3.5m-5.639 6.25c.119 1.493-1.023 1.823-7.782 2.25-5.069.32-8.07.95-8.333 1.75-.312.945 2.051 1.25 9.671 1.25C54 37 54 37 54 33.5c0-2.765-.397-3.5-1.889-3.5-1.185 0-1.837.652-1.75 1.75M56 33.5C56 37 56 37 66.583 37c8.02 0 10.484-.303 10.171-1.25-.268-.812-3.363-1.425-8.833-1.75-7.235-.43-8.401-.747-8.282-2.25.087-1.098-.565-1.75-1.75-1.75-1.492 0-1.889.735-1.889 3.5m-6.639 6.25c.117 1.468-.975 1.83-6.783 2.25-4.388.317-7.077.972-7.346 1.789-.331 1.003 1.645 1.225 8.922 1C53.5 44.5 53.5 44.5 53.813 41.25c.277-2.868.026-3.25-2.139-3.25-1.721 0-2.41.521-2.313 1.75m6.826 1.5c.313 3.25.313 3.25 10.159 3.537 7.678.224 9.752.004 9.421-1-.274-.831-3.052-1.464-7.846-1.787-6.283-.423-7.4-.768-7.282-2.25.097-1.229-.592-1.75-2.313-1.75-2.165 0-2.416.382-2.139 3.25m-29.004 12.5c.318 9.468.656 11.181 2.839 14.362 3.286 4.789 13.642 11.651 18.839 12.482C53 81.256 53 81.256 53 90.628S53 100 44 100c-8.333 0-9 .148-9 2 0 1.933.667 2 20 2s20-.067 20-2c0-1.852-.667-2-9-2-9 0-9 0-9-9.372s0-9.372 4.044-10.019c2.224-.356 5.025-1.201 6.226-1.878 4.081-2.302 13.231-10.02 12.962-10.932-.148-.5.415-1.884 1.25-3.076C83.667 61.602 83.683 43 81.5 43c-1.209 0-1.5 1.559-1.5 8.032 0 8.297-1.245 12.582-4.856 16.718-1.081 1.237-2.433 2.25-3.005 2.25-.572 0-1.399.563-1.839 1.25-.44.688-2.825 2.368-5.3 3.734-8.27 4.565-19.425 2.831-26.21-4.074-.941-.957-2.666-2.41-3.835-3.229-3.127-2.19-4.861-8.171-4.911-16.931-.036-6.396-.322-7.75-1.632-7.75-1.376 0-1.541 1.444-1.229 10.75m19.067-6.5c.169.843-1.443 1.348-4.947 1.55-5.197.301-5.197.301-4.609 5.5.324 2.86 1.399 6.818 2.388 8.795C41.288 67.499 47.37 73 50.035 73 51.773 73 52 72.297 52 66.908c0-4.578-.497-6.724-2-8.635-2.178-2.769-2.599-7.285-.965-10.339.866-1.618.702-1.934-1-1.934-1.119 0-1.923.563-1.785 1.25m14.715.684c1.634 3.054 1.213 7.57-.965 10.339-1.503 1.911-2 4.057-2 8.635 0 7.261 1.138 7.735 7.144 2.978 4.811-3.81 7.385-8.727 8.162-15.586.588-5.199.588-5.199-4.609-5.5-3.504-.202-5.116-.707-4.947-1.55.138-.687-.666-1.25-1.785-1.25-1.702 0-1.866.316-1 1.934", fill: "#6f6f6f", fillRule: "evenodd" }));
mn(ol);
const il = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwOCAxMDgiPjxwYXRoIGQ9Ik0zNyAyMWMwIC41ODggMy41IDEgOC41IDEgOC41IDAgOC41IDAgOC41IDMuNDYyIDAgMy40NjMgMCAzLjQ2My05LjI1IDMuNzkzLTkuMjUuMzMtOS4yNS4zMyAwIC41MzdDNTQgMzAgNTQgMzAgNTQgMzMuNDY0czAgMy40NjQtOS43NSAzLjc5Yy05Ljc1LjMyNy05Ljc1LjMyNy4wNjMuNTM3IDkuODE0LjIwOSA5LjgxNC4yMDkgOS41IDMuNDU5LS4zMTMgMy4yNS0uMzEzIDMuMjUtOS4zMTMgMy44MTEtOSAuNTYxLTkgLjU2MS0xLjcxNS43NSA2Ljg2Ny4xNzggNy4yMjYuMyA2LjI1IDIuMTIzLTEuNjIxIDMuMDMtMS4yMTkgNy41NjMuOTEzIDEwLjI3MyAxLjM0NCAxLjcwOCAyLjA2IDQuNDY0IDIuMzA3IDguODg1LjM2IDYuNDA4LjM2IDYuNDA4LjU1Mi4xNTguMTY5LTUuNDY3LjQzOC02LjI1IDIuMTQ1LTYuMjUgMS42OTEgMCAyIC44MzkgMi4zMDggNi4yNS4zNTUgNi4yNS4zNTUgNi4yNS41NDctLjA5Mi4xNDEtNC42MTYuNzM4LTcuMDM1IDIuMTkzLTguODg1IDIuMTc4LTIuNzY5IDIuNTk5LTcuMjg1Ljk2NS0xMC4zMzktLjk3OS0xLjgyOS0uNjExLTEuOTQ0IDYuNzUtMi4xMjUgNy43ODUtLjE5MiA3Ljc4NS0uMTkyLTEuNzE1LS43NS05LjUtLjU1OS05LjUtLjU1OS05LjgxMS0zLjc3My0uMzEtMy4yMTUtLjMxLTMuMjE1IDEwLTMuNTM5IDEwLjMxMS0uMzI1IDEwLjMxMS0uMzI1LjA2MS0uNTM2QzU2IDM3IDU2IDM3IDU2IDMzLjUzNnMwLTMuNDY0IDkuNzUtMy43OWM5Ljc1LS4zMjcgOS43NS0uMzI3IDAtLjUzN0M1NiAyOSA1NiAyOSA1NiAyNS41czAtMy41IDguNS0zLjVjNSAwIDguNS0uNDEyIDguNS0xIDAtLjYzLTYuNjY3LTEtMTgtMXMtMTggLjM3LTE4IDEiIGZpbGw9IiNlYzFjMjQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik00OS4yNDMgNS44NWMtNC4wNzggMS4xNzUtOS4yNTkgNi4xOTMtMTEuNzczIDExLjQwM0MzNi4xMTIgMjAuMDcgMzUgMjIuNTE1IDM1IDIyLjY4N2MwIC4xNzIgMy4zNzUuMzEzIDcuNS4zMTMgNC4zMzMgMCA3LjUuNDIyIDcuNSAxIDAgLjU3LTIuOTU5IDEtNi44NzggMS00Ljg5MyAwLTcuMjM2LjQzMy04LjEyMiAxLjUtMi4zOTQgMi44ODUuNTIgNC41IDguMTIyIDQuNSAzLjkxOSAwIDYuODc4LjQzIDYuODc4IDEgMCAuNTc2LTMuMTI2IDEtNy4zNzggMS01LjMzNyAwLTcuNzIxLjQxNS04LjYyMiAxLjUtMi4zOTQgMi44ODUuNTIgNC41IDguMTIyIDQuNSAzLjkxOSAwIDYuODc4LjQzIDYuODc4IDEgMCAuNTYyLTIuNzkzIDEtNi4zNzggMS00LjQ0OSAwLTYuNzU0LjQ1NC03LjYyMiAxLjUtMi4xMSAyLjU0Mi41MzUgNC40NzcgNi4zNzIgNC42NjMgNS4xMjguMTYzIDUuMTI4LjE2My0uMzcyLjc1cy01LjUuNTg3LTUuMTQ2IDYuNDI0Yy4zODMgNi4zMDQgMS4zMTggOC43MDYgNS4xNjQgMTMuMjY2QzQ0LjU5IDcxLjgzNyA0OC4wNCA3NCA1MS4yMjMgNzQgNTQgNzQgNTQgNzQgNTMuODA3IDY3LjI1Yy0uMTkyLTYuNzUtLjE5Mi02Ljc1LS41NDctLjUtLjMzMiA1Ljg0NS0uNTEyIDYuMjUtMi43NzMgNi4yNS0zLjA1NiAwLTkuMDUzLTUuMjA5LTExLjQwNS05LjkwNS0uOTg5LTEuOTc3LTIuMDY0LTUuOTM1LTIuMzg4LTguNzk1LS41ODgtNS4xOTktLjU4OC01LjE5OSA0LjYwOS01LjUgNi44NS0uMzk2IDYuNjU5LTIuMTY3LS4zMDMtMi44LTQtLjM2NC01LjUtLjkwOS01LjUtMiAwLTEuMTQzIDEuNjY3LTEuNjE5IDctMnM3LS44NTcgNy0yYzAtMS4xNTYtMS43MjItMS42MTUtNy41LTItNS43NzgtLjM4NS03LjUtLjg0NC03LjUtMiAwLTEuMTY3IDEuNzc4LTEuNjExIDgtMiA2LjIyMi0uMzg5IDgtLjgzMyA4LTIgMC0xLjE1Ni0xLjcyMi0xLjYxNS03LjUtMi01Ljc3OC0uMzg1LTcuNS0uODQ0LTcuNS0yIDAtMS4xNTYgMS43MjItMS42MTUgNy41LTIgNS43NzgtLjM4NSA3LjUtLjg0NCA3LjUtMiAwLTEuMTY2LTEuNTg5LTEuNTY1LTcuMTM5LTEuNzkyLTcuMTM5LS4yOTEtNy4xMzktLjI5MS01LjE2My00LjUgNy4yMzgtMTUuNDE1IDI2LjIyMy0xNS4zMzggMzQuNDg1LjE0IDIuMTczIDQuMDcgMi4xNzMgNC4wNy01LjUwNSA0LjM2MS02LjAyOS4yMjktNy42NzguNjEzLTcuNjc4IDEuNzkxIDAgMS4xNjcgMS43NzggMS42MTEgOCAyIDYuMjIyLjM4OSA4IC44MzMgOCAycy0xLjc3OCAxLjYxMS04IDJjLTYuMjIyLjM4OS04IC44MzMtOCAyIDAgMS4xNzYgMS44MzMgMS42MDggOC41IDIgNi42NjcuMzkyIDguNS44MjQgOC41IDIgMCAxLjE2Ny0xLjc3OCAxLjYxMS04IDItNi4yMjIuMzg5LTggLjgzMy04IDIgMCAxLjE1NiAxLjcyMiAxLjYxNSA3LjUgMiA1Ljc3OC4zODUgNy41Ljg0NCA3LjUgMiAwIDEuMTAyLTEuNTMgMS42MzMtNS43NjkgMi03LjI2Ni42My03LjkyMSAyLjQwMi0xLjAzNCAyLjggNS4xOTcuMzAxIDUuMTk3LjMwMSA0LjYwOSA1LjUtLjMyNCAyLjg2LTEuNDA4IDYuODM2LTIuNDEgOC44MzZDNjguNzU5IDY3LjQwNSA2Mi4wOTggNzMgNTkuMTU0IDczYy0xLjgyMSAwLTIuMS0uNzIzLTIuNDE0LTYuMjUtLjM1NS02LjI1LS4zNTUtNi4yNS0uNTQ3LjUtLjE5IDYuNjQ5LS4xNTQgNi43NSAyLjQwMyA2Ljc1IDIuNDYxIDAgNy4wNzYtMi42NjIgMTAuMzktNS45OTUgMi41MTEtMi41MjQgNC45MTUtOS4yMDEgNS4yMjMtMTQuNTA1LjI5MS01IC4yOTEtNS01LjIwOS01LjU4Ny01LjUtLjU4Ny01LjUtLjU4Ny4xMjgtLjc1IDYuMzM1LS4xODMgOS4wNTctMi4wMyA2Ljg3Mi00LjY2My0uODg2LTEuMDY3LTMuMjI5LTEuNS04LjEyMi0xLjVDNjMuOTU5IDQxIDYxIDQwLjU3IDYxIDQwYzAtLjU3NiAzLjEyNi0xIDcuMzc4LTEgOC4xMDcgMCAxMS4wNzItMS41NDggOC42MjItNC41LS45MTQtMS4xMDEtMy4zNC0xLjUtOS4xMjItMS41QzYzLjI5MyAzMyA2MCAzMi41ODIgNjAgMzJjMC0uNTc2IDMuMTI2LTEgNy4zNzgtMSA4LjEwNyAwIDExLjA3Mi0xLjU0OCA4LjYyMi00LjUtLjkwMS0xLjA4NS0zLjI4NS0xLjUtOC42MjItMS41QzYzLjEyNiAyNSA2MCAyNC41NzYgNjAgMjRjMC0uNTc2IDMuMTExLTEgNy4zMzMtMSA0LjAzNCAwIDcuNjAyLS4yNjggNy45MjktLjU5Ni44MDctLjgwNi0yLjgzNy03LjIzOS02LjEwNi0xMC43OC00Ljk2Ny01LjM3OS0xMy4wOTktNy43MzgtMTkuOTEzLTUuNzc0TTI2LjQwMiA0My4zOTRjLS4zMjUuODQ4LS40MzQgNS45NDQtLjI0MSAxMS4zMjQuMzEyIDguNzEyLjY1MiAxMC4yMjcgMy4xMDcgMTMuODQ5IDMuNTAxIDUuMTY4IDEzLjY4OCAxMi4yNDIgMTguODA1IDEzLjA2MUM1MiA4Mi4yNTYgNTIgODIuMjU2IDUyIDkwLjU4OXMwIDguMzMzLTguNzUgOC42MjJjLTguNTkuMjg0LTguNzUuMzM1LTguNzUgMi43ODkgMCAyLjUgMCAyLjUgMjAuNSAyLjVzMjAuNSAwIDIwLjUtMi41YzAtMi40NTQtLjE2LTIuNTA1LTguNzUtMi43ODktOC43NS0uMjg5LTguNzUtLjI4OS04Ljc1LTguNzUgMC03LjgzOS4xNDktOC40NjEgMi4wMzItOC40NjEgMi42OTUgMCA5LjQ0Ny0yLjg1NSA4LjY0Ni0zLjY1Ni0uMzQ2LS4zNDYtMS4yMjUtLjEzNS0xLjk1My40Ny0uNzI5LjYwNC0zLjIxNCAxLjQwMS01LjUyNSAxLjc3LTQuMi42NzItNC4yLjY3Mi00LjIgMTAuMDQ0UzU3IDEwMCA2NiAxMDBjOC4zMzMgMCA5IC4xNDggOSAyIDAgMS45MzMtLjY2NyAyLTIwIDJzLTIwLS4wNjctMjAtMmMwLTEuODUyLjY2Ny0yIDktMiA5IDAgOSAwIDktOS4zNzJzMC05LjM3Mi00LjEzOS0xMC4wMzRjLTUuMTk3LS44MzEtMTUuNTUzLTcuNjkzLTE4LjgzOS0xMi40ODItMi4xODMtMy4xODEtMi41MjEtNC44OTQtMi44MzktMTQuMzYyLS4zMTItOS4zMDYtLjE0Ny0xMC43NSAxLjIyOS0xMC43NSAxLjMxIDAgMS41OTYgMS4zNTQgMS42MzIgNy43NS4wNSA4Ljc2IDEuNzg0IDE0Ljc0MSA0LjkxMSAxNi45MzEgMS4xNjkuODE5IDIuODk0IDIuMjcyIDMuODM1IDMuMjI5IDYuNzg1IDYuOTA1IDE3Ljk0IDguNjM5IDI2LjIxIDQuMDc0IDIuNDc1LTEuMzY2IDQuODYtMy4wNDYgNS4zLTMuNzM0LjQ0LS42ODcgMS4yNjctMS4yNSAxLjgzOS0xLjI1LjU3MiAwIDEuOTI0LTEuMDEzIDMuMDA1LTIuMjVDNzguNzU1IDYzLjYxNCA4MCA1OS4zMjkgODAgNTEuMDMyYzAtNi40NzMuMjkxLTguMDMyIDEuNS04LjAzMiAyLjI0NyAwIDIuMTYgMTguNjEzLS4xMDIgMjEuODQyLS44ODEgMS4yNTgtMS4zNjQgMi41MjUtMS4wNzQgMi44MTYuMjkxLjI5IDEuMjUzLS44NzMgMi4xMzgtMi41ODUgMS4yMjgtMi4zNzQgMS41NDItNS40MjEgMS4zMjQtMTIuODQzLS4yNjQtOC45NjgtLjQ0My05LjczLTIuMjg2LTkuNzMtMS44MDkgMC0yLjA1Ni44NjItMi41ODUgOS0uNzEgMTAuOTE5LTEuNjM4IDEzLjM0LTYuNTg0IDE3LjE3Mi0xMi44NTYgOS45Ni0xOS43OTggMTAuNTItMzEuMjYgMi41MTgtOC40MzEtNS44ODUtOS4zMzMtNy41OS05Ljk5Ny0xOC45MDQtLjQ4NC04LjI0MS0uODQ4LTkuODE3LTIuMzI3LTEwLjA5OS0uOTY0LS4xODQtMi4wMTkuMzU5LTIuMzQ1IDEuMjA3TTc0IDc0Yy0yLjQ3NSAyLjE2Ny0zLjkyMyAzLjk1NC0zLjIxOSAzLjk3LjcwNS4wMTcgMS41NDEtLjY0NSAxLjg1Ny0xLjQ3LjMxNy0uODI1IDEuMDM4LTEuNSAxLjYwMi0xLjUuOTEgMCA0Ljc2LTMuNzY0IDQuNzYtNC42NTMgMC0uNjUyLS41MDQtLjI4NC01IDMuNjUzIiBmaWxsPSIjMDQwNDA0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJNNDkuMzU3IDYuODVDNDQuNTE2IDguMzE5IDM4IDE1LjI2MSAzOCAxOC45NWMwIC42OTMgNS45NDggMS4wNSAxNy41IDEuMDUgMTEgMCAxNy41LjM3MSAxNy41IDEgMCAuNTUuNDQyIDEgLjk4MyAxIDEuMTk3IDAtMi4zNjEtNi41OTUtNS4zMzEtOS44ODItNC4zODEtNC44NDktMTIuOTYtNy4xOTEtMTkuMjk1LTUuMjY4bTEuMDA0IDE2LjljLjExOCAxLjQ4Mi0uOTk5IDEuODI3LTcuMjgyIDIuMjUtNC42NjguMzE0LTcuNTc1Ljk2NC03LjgzNCAxLjc1LS4zMS45NDIgMS45NTIgMS4yNSA5LjE3MiAxLjI1QzU0IDI5IDU0IDI5IDU0IDI1LjVjMC0yLjc2NS0uMzk3LTMuNS0xLjg4OS0zLjUtMS4xODUgMC0xLjgzNy42NTItMS43NSAxLjc1TTU2IDI1LjVDNTYgMjkgNTYgMjkgNjYuMDgzIDI5YzcuNjIgMCA5Ljk4My0uMzA1IDkuNjcxLTEuMjUtLjI2My0uOC0zLjI2NC0xLjQzLTguMzMzLTEuNzUtNi43NTktLjQyNy03LjkwMS0uNzU3LTcuNzgyLTIuMjUuMDg3LTEuMDk4LS41NjUtMS43NS0xLjc1LTEuNzUtMS40OTIgMC0xLjg4OS43MzUtMS44ODkgMy41bS01LjYzOSA2LjI1Yy4xMTkgMS40OTMtMS4wMjMgMS44MjMtNy43ODIgMi4yNS01LjA2OS4zMi04LjA3Ljk1LTguMzMzIDEuNzUtLjMxMi45NDUgMi4wNTEgMS4yNSA5LjY3MSAxLjI1QzU0IDM3IDU0IDM3IDU0IDMzLjVjMC0yLjc2NS0uMzk3LTMuNS0xLjg4OS0zLjUtMS4xODUgMC0xLjgzNy42NTItMS43NSAxLjc1TTU2IDMzLjVDNTYgMzcgNTYgMzcgNjYuNTgzIDM3YzguMDIgMCAxMC40ODQtLjMwMyAxMC4xNzEtMS4yNS0uMjY4LS44MTItMy4zNjMtMS40MjUtOC44MzMtMS43NS03LjIzNS0uNDMtOC40MDEtLjc0Ny04LjI4Mi0yLjI1LjA4Ny0xLjA5OC0uNTY1LTEuNzUtMS43NS0xLjc1LTEuNDkyIDAtMS44ODkuNzM1LTEuODg5IDMuNW0tNi42MzkgNi4yNWMuMTE3IDEuNDY4LS45NzUgMS44My02Ljc4MyAyLjI1LTQuMzg4LjMxNy03LjA3Ny45NzItNy4zNDYgMS43ODktLjMzMSAxLjAwMyAxLjY0NSAxLjIyNSA4LjkyMiAxQzUzLjUgNDQuNSA1My41IDQ0LjUgNTMuODEzIDQxLjI1Yy4yNzctMi44NjguMDI2LTMuMjUtMi4xMzktMy4yNS0xLjcyMSAwLTIuNDEuNTIxLTIuMzEzIDEuNzVtNi44MjYgMS41Yy4zMTMgMy4yNS4zMTMgMy4yNSAxMC4xNTkgMy41MzcgNy42NzguMjI0IDkuNzUyLjAwNCA5LjQyMS0xLS4yNzQtLjgzMS0zLjA1Mi0xLjQ2NC03Ljg0Ni0xLjc4Ny02LjI4My0uNDIzLTcuNC0uNzY4LTcuMjgyLTIuMjUuMDk3LTEuMjI5LS41OTItMS43NS0yLjMxMy0xLjc1LTIuMTY1IDAtMi40MTYuMzgyLTIuMTM5IDMuMjVtLTI5LjAwNCAxMi41Yy4zMTggOS40NjguNjU2IDExLjE4MSAyLjgzOSAxNC4zNjIgMy4yODYgNC43ODkgMTMuNjQyIDExLjY1MSAxOC44MzkgMTIuNDgyQzUzIDgxLjI1NiA1MyA4MS4yNTYgNTMgOTAuNjI4UzUzIDEwMCA0NCAxMDBjLTguMzMzIDAtOSAuMTQ4LTkgMiAwIDEuOTMzLjY2NyAyIDIwIDJzMjAtLjA2NyAyMC0yYzAtMS44NTItLjY2Ny0yLTktMi05IDAtOSAwLTktOS4zNzJzMC05LjM3MiA0LjA0NC0xMC4wMTljMi4yMjQtLjM1NiA1LjAyNS0xLjIwMSA2LjIyNi0xLjg3OCA0LjA4MS0yLjMwMiAxMy4yMzEtMTAuMDIgMTIuOTYyLTEwLjkzMi0uMTQ4LS41LjQxNS0xLjg4NCAxLjI1LTMuMDc2QzgzLjY2NyA2MS42MDIgODMuNjgzIDQzIDgxLjUgNDNjLTEuMjA5IDAtMS41IDEuNTU5LTEuNSA4LjAzMiAwIDguMjk3LTEuMjQ1IDEyLjU4Mi00Ljg1NiAxNi43MTgtMS4wODEgMS4yMzctMi40MzMgMi4yNS0zLjAwNSAyLjI1LS41NzIgMC0xLjM5OS41NjMtMS44MzkgMS4yNS0uNDQuNjg4LTIuODI1IDIuMzY4LTUuMyAzLjczNC04LjI3IDQuNTY1LTE5LjQyNSAyLjgzMS0yNi4yMS00LjA3NC0uOTQxLS45NTctMi42NjYtMi40MS0zLjgzNS0zLjIyOS0zLjEyNy0yLjE5LTQuODYxLTguMTcxLTQuOTExLTE2LjkzMS0uMDM2LTYuMzk2LS4zMjItNy43NS0xLjYzMi03Ljc1LTEuMzc2IDAtMS41NDEgMS40NDQtMS4yMjkgMTAuNzVtMTkuMDY3LTYuNWMuMTY5Ljg0My0xLjQ0MyAxLjM0OC00Ljk0NyAxLjU1LTUuMTk3LjMwMS01LjE5Ny4zMDEtNC42MDkgNS41LjMyNCAyLjg2IDEuMzk5IDYuODE4IDIuMzg4IDguNzk1QzQxLjI4OCA2Ny40OTkgNDcuMzcgNzMgNTAuMDM1IDczIDUxLjc3MyA3MyA1MiA3Mi4yOTcgNTIgNjYuOTA4YzAtNC41NzgtLjQ5Ny02LjcyNC0yLTguNjM1LTIuMTc4LTIuNzY5LTIuNTk5LTcuMjg1LS45NjUtMTAuMzM5Ljg2Ni0xLjYxOC43MDItMS45MzQtMS0xLjkzNC0xLjExOSAwLTEuOTIzLjU2My0xLjc4NSAxLjI1bTE0LjcxNS42ODRjMS42MzQgMy4wNTQgMS4yMTMgNy41Ny0uOTY1IDEwLjMzOS0xLjUwMyAxLjkxMS0yIDQuMDU3LTIgOC42MzUgMCA3LjI2MSAxLjEzOCA3LjczNSA3LjE0NCAyLjk3OCA0LjgxMS0zLjgxIDcuMzg1LTguNzI3IDguMTYyLTE1LjU4Ni41ODgtNS4xOTkuNTg4LTUuMTk5LTQuNjA5LTUuNS0zLjUwNC0uMjAyLTUuMTE2LS43MDctNC45NDctMS41NS4xMzgtLjY4Ny0uNjY2LTEuMjUtMS43ODUtMS4yNS0xLjcwMiAwLTEuODY2LjMxNi0xIDEuOTM0IiBmaWxsPSIjNmY2ZjZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=", al = (j, g) => /* @__PURE__ */ ot.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 128, height: 128, viewBox: "0 0 128 128", ref: g, ...j }, /* @__PURE__ */ ot.createElement("path", { d: "", stroke: "none", fill: "#888484", fillRule: "evenodd" }), /* @__PURE__ */ ot.createElement("path", { d: "M 50.275 13.539 C 27.688 19.622, 12 39.895, 12 63 C 12 91.033, 34.967 114, 63 114 C 95.918 114, 120.734 82.274, 112.511 50.703 C 105.357 23.236, 77.044 6.329, 50.275 13.539 M 52 21.360 C 33.022 26.527, 20.049 43.433, 20.049 63 C 20.049 86.859, 39.141 105.951, 63 105.951 C 90.669 105.951, 111.168 80.127, 104.940 53.115 C 101.406 37.784, 88.216 24.594, 72.885 21.060 C 67.044 19.713, 57.548 19.850, 52 21.360 M 40.455 42.455 C 38.907 44.002, 38 46.052, 38 48 C 38 49.948, 38.907 51.998, 40.455 53.545 C 42.002 55.093, 44.052 56, 46 56 C 52.991 56, 56.506 47.415, 51.545 42.455 C 49.998 40.907, 47.948 40, 46 40 C 44.052 40, 42.002 40.907, 40.455 42.455 M 74.455 42.455 C 72.907 44.002, 72 46.052, 72 48 C 72 49.948, 72.907 51.998, 74.455 53.545 C 79.415 58.506, 88 54.991, 88 48 C 88 43.889, 84.111 40, 80 40 C 78.052 40, 76.002 40.907, 74.455 42.455 M 31 73.335 C 31 76.979, 37.548 87.731, 40.260 88.540 C 41.492 88.908, 43.625 89.934, 45 90.821 C 49.563 93.764, 58.427 96.337, 64 96.337 C 69.573 96.337, 78.437 93.764, 83 90.821 C 84.375 89.934, 86.508 88.908, 87.740 88.540 C 90.452 87.731, 97 76.979, 97 73.335 C 97 70.929, 96.778 70.817, 93.250 71.439 C 91.188 71.804, 88.703 73.091, 87.730 74.301 C 86.756 75.510, 85.151 77.458, 84.162 78.630 C 79.558 84.087, 67.346 87.091, 57.791 85.118 C 54.376 84.412, 50.244 83.143, 48.608 82.297 C 45.814 80.853, 44.630 79.717, 40.270 74.301 C 39.297 73.091, 36.813 71.804, 34.750 71.439 C 31.222 70.817, 31 70.929, 31 73.335", stroke: "none", fill: "#848484", fillRule: "evenodd" }));
mn(al);
const ul = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgdmVyc2lvbj0iMS4xIj48cGF0aCBkPSIiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzg4ODQ4NCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTSA1MC4yNzUgMTMuNTM5IEMgMjcuNjg4IDE5LjYyMiwgMTIgMzkuODk1LCAxMiA2MyBDIDEyIDkxLjAzMywgMzQuOTY3IDExNCwgNjMgMTE0IEMgOTUuOTE4IDExNCwgMTIwLjczNCA4Mi4yNzQsIDExMi41MTEgNTAuNzAzIEMgMTA1LjM1NyAyMy4yMzYsIDc3LjA0NCA2LjMyOSwgNTAuMjc1IDEzLjUzOSBNIDUyIDIxLjM2MCBDIDMzLjAyMiAyNi41MjcsIDIwLjA0OSA0My40MzMsIDIwLjA0OSA2MyBDIDIwLjA0OSA4Ni44NTksIDM5LjE0MSAxMDUuOTUxLCA2MyAxMDUuOTUxIEMgOTAuNjY5IDEwNS45NTEsIDExMS4xNjggODAuMTI3LCAxMDQuOTQwIDUzLjExNSBDIDEwMS40MDYgMzcuNzg0LCA4OC4yMTYgMjQuNTk0LCA3Mi44ODUgMjEuMDYwIEMgNjcuMDQ0IDE5LjcxMywgNTcuNTQ4IDE5Ljg1MCwgNTIgMjEuMzYwIE0gNDAuNDU1IDQyLjQ1NSBDIDM4LjkwNyA0NC4wMDIsIDM4IDQ2LjA1MiwgMzggNDggQyAzOCA0OS45NDgsIDM4LjkwNyA1MS45OTgsIDQwLjQ1NSA1My41NDUgQyA0Mi4wMDIgNTUuMDkzLCA0NC4wNTIgNTYsIDQ2IDU2IEMgNTIuOTkxIDU2LCA1Ni41MDYgNDcuNDE1LCA1MS41NDUgNDIuNDU1IEMgNDkuOTk4IDQwLjkwNywgNDcuOTQ4IDQwLCA0NiA0MCBDIDQ0LjA1MiA0MCwgNDIuMDAyIDQwLjkwNywgNDAuNDU1IDQyLjQ1NSBNIDc0LjQ1NSA0Mi40NTUgQyA3Mi45MDcgNDQuMDAyLCA3MiA0Ni4wNTIsIDcyIDQ4IEMgNzIgNDkuOTQ4LCA3Mi45MDcgNTEuOTk4LCA3NC40NTUgNTMuNTQ1IEMgNzkuNDE1IDU4LjUwNiwgODggNTQuOTkxLCA4OCA0OCBDIDg4IDQzLjg4OSwgODQuMTExIDQwLCA4MCA0MCBDIDc4LjA1MiA0MCwgNzYuMDAyIDQwLjkwNywgNzQuNDU1IDQyLjQ1NSBNIDMxIDczLjMzNSBDIDMxIDc2Ljk3OSwgMzcuNTQ4IDg3LjczMSwgNDAuMjYwIDg4LjU0MCBDIDQxLjQ5MiA4OC45MDgsIDQzLjYyNSA4OS45MzQsIDQ1IDkwLjgyMSBDIDQ5LjU2MyA5My43NjQsIDU4LjQyNyA5Ni4zMzcsIDY0IDk2LjMzNyBDIDY5LjU3MyA5Ni4zMzcsIDc4LjQzNyA5My43NjQsIDgzIDkwLjgyMSBDIDg0LjM3NSA4OS45MzQsIDg2LjUwOCA4OC45MDgsIDg3Ljc0MCA4OC41NDAgQyA5MC40NTIgODcuNzMxLCA5NyA3Ni45NzksIDk3IDczLjMzNSBDIDk3IDcwLjkyOSwgOTYuNzc4IDcwLjgxNywgOTMuMjUwIDcxLjQzOSBDIDkxLjE4OCA3MS44MDQsIDg4LjcwMyA3My4wOTEsIDg3LjczMCA3NC4zMDEgQyA4Ni43NTYgNzUuNTEwLCA4NS4xNTEgNzcuNDU4LCA4NC4xNjIgNzguNjMwIEMgNzkuNTU4IDg0LjA4NywgNjcuMzQ2IDg3LjA5MSwgNTcuNzkxIDg1LjExOCBDIDU0LjM3NiA4NC40MTIsIDUwLjI0NCA4My4xNDMsIDQ4LjYwOCA4Mi4yOTcgQyA0NS44MTQgODAuODUzLCA0NC42MzAgNzkuNzE3LCA0MC4yNzAgNzQuMzAxIEMgMzkuMjk3IDczLjA5MSwgMzYuODEzIDcxLjgwNCwgMzQuNzUwIDcxLjQzOSBDIDMxLjIyMiA3MC44MTcsIDMxIDcwLjkyOSwgMzEgNzMuMzM1IiBzdHJva2U9Im5vbmUiIGZpbGw9IiM4NDg0ODQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==", sl = (j, g) => /* @__PURE__ */ ot.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 120 120", ref: g, ...j }, /* @__PURE__ */ ot.createElement("path", { d: "M35.741 27.792 22 41.66v37.68l13.741 13.868c9.876 9.966 14.307 13.787 15.75 13.58 1.979-.284 2.009-.985 2.009-46.288s-.03-46.004-2.009-46.288c-1.443-.207-5.874 3.614-15.75 13.58m.461.541L23 41.666v37.668l13.202 13.333C43.464 100 50.214 106 51.202 106 52.906 106 53 103.627 53 60.5S52.906 15 51.202 15c-.988 0-7.738 6-15 13.333M80.75 19.08c-2.769 1.613-2.083 2.885 2.7 5.001C92.116 27.914 105 48.743 105 58.919c0 1.42-.657 5.507-1.461 9.081-3.453 15.36-7.504 21.868-16.246 26.1-4.832 2.339-5.02 2.781-2.501 5.892 1.673 2.066 2.088 2.131 6.25.985 8.291-2.284 10.812-3.916 14.303-9.258 8.58-13.13 10.985-34.891 5.335-48.288-3.62-8.585-13.078-19.938-19.126-22.96-5.314-2.655-8.033-3.005-10.804-1.391m.5.582c-2.201.889-1.351 2.08 2.616 3.668 2.424.97 5.424 3.527 8.045 6.858 2.298 2.922 4.721 5.987 5.384 6.812C101.629 42.397 106 53.383 106 58.881c0 3.585-2.516 14.488-4.836 20.955-2.245 6.255-7.571 12.265-13.15 14.837-4.438 2.046-4.54 2.225-2.706 4.734 1.164 1.592 1.796 1.656 5.75.581 5.145-1.399 9.018-3.064 10.442-4.488 2.582-2.582 6.427-9.478 7.806-14 4.502-14.76 4.629-27.979.365-38.09-6.248-14.815-20.677-26.872-28.421-23.748m-9 13.461c-.687.703-1.25 2.687-1.25 4.409 0 2.512.735 3.612 3.706 5.55C80.401 46.798 82.5 51.22 82.5 59.5s-2.099 12.702-7.794 16.418C71.532 77.988 71 78.867 71 82.045c0 10.639 12.361 6.19 18.184-6.545 1.922-4.204 2.284-6.672 2.276-15.5-.012-12.018-2.078-18.299-7.861-23.904-3.636-3.524-9.345-5.019-11.349-2.973m.5.456c-.412.415-.733 2.142-.711 3.838.029 2.355.788 3.556 3.212 5.083 11.534 7.267 11.514 26.802-.035 34-2.839 1.77-3.18 2.46-2.962 6 .243 3.947.296 3.998 4.055 3.881 4.792-.15 8.678-3.677 11.843-10.749 1.925-4.299 2.297-6.835 2.297-15.632 0-11.737-2.082-18.358-7.365-23.42-2.764-2.648-8.911-4.433-10.334-3.001m-14.083 9.088c-1.368 1.367-.6 5.267 1.299 6.597 6.61 4.63 6.577 17.866-.057 22.512-3.115 2.182-2.228 6.63 1.404 7.047 2.146.246 3.582-.492 6.05-3.109 7.461-7.911 7.494-22.482.068-30.356-2.962-3.14-7.057-4.398-8.764-2.691M59 45.465c0 1.384.82 2.903 1.87 3.465C63.451 50.312 66 56.06 66 60.5s-2.549 10.188-5.13 11.57c-1.05.562-1.87 2.081-1.87 3.465 0 3.589 4.375 3.345 7.912-.441 6.703-7.175 6.703-22.013 0-29.188C63.375 42.12 59 41.876 59 45.465m-51.925 3.82C3.315 54.264 3 55.167 3 60.952c0 5.887.253 6.572 4.137 11.211 3.727 4.452 4.494 4.911 7.75 4.639L18.5 76.5v-32l-3.675-.306c-3.408-.284-3.972.087-7.75 5.091m.51.599C4.383 54.247 4 55.429 4 60.966c0 5.642.325 6.593 3.62 10.616 2.982 3.638 4.217 4.418 7 4.418H18V45h-3.415c-2.931 0-3.923.692-7 4.884", fill: "#fcec3c", fillRule: "evenodd" }), /* @__PURE__ */ ot.createElement("path", { d: "M36.202 28.333 23 41.666v37.668l13.202 13.333C43.464 100 50.214 106 51.202 106 52.906 106 53 103.627 53 60.5S52.906 15 51.202 15c-.988 0-7.738 6-15 13.333m45.048-8.671c-2.201.889-1.351 2.08 2.616 3.668 2.424.97 5.424 3.527 8.045 6.858 2.298 2.922 4.721 5.987 5.384 6.812C101.629 42.397 106 53.383 106 58.881c0 3.585-2.516 14.488-4.836 20.955-2.245 6.255-7.571 12.265-13.15 14.837-4.438 2.046-4.54 2.225-2.706 4.734 1.164 1.592 1.796 1.656 5.75.581 5.145-1.399 9.018-3.064 10.442-4.488 2.582-2.582 6.427-9.478 7.806-14 4.502-14.76 4.629-27.979.365-38.09-6.248-14.815-20.677-26.872-28.421-23.748m-8.5 13.917c-.412.415-.733 2.142-.711 3.838.029 2.355.788 3.556 3.212 5.083 11.534 7.267 11.514 26.802-.035 34-2.839 1.77-3.18 2.46-2.962 6 .243 3.947.296 3.998 4.055 3.881 4.792-.15 8.678-3.677 11.843-10.749 1.925-4.299 2.297-6.835 2.297-15.632 0-11.737-2.082-18.358-7.365-23.42-2.764-2.648-8.911-4.433-10.334-3.001M59 45.465c0 1.384.82 2.903 1.87 3.465C63.451 50.312 66 56.06 66 60.5s-2.549 10.188-5.13 11.57c-1.05.562-1.87 2.081-1.87 3.465 0 3.589 4.375 3.345 7.912-.441 6.703-7.175 6.703-22.013 0-29.188C63.375 42.12 59 41.876 59 45.465M7.585 49.884C4.383 54.247 4 55.429 4 60.966c0 5.642.325 6.593 3.62 10.616 2.982 3.638 4.217 4.418 7 4.418H18V45h-3.415c-2.931 0-3.923.692-7 4.884", fill: "#fcec3c", fillRule: "evenodd" }));
mn(sl);
const ll = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyMCAxMjAiPjxwYXRoIGQ9Ik0zNS43NDEgMjcuNzkyIDIyIDQxLjY2djM3LjY4bDEzLjc0MSAxMy44NjhjOS44NzYgOS45NjYgMTQuMzA3IDEzLjc4NyAxNS43NSAxMy41OCAxLjk3OS0uMjg0IDIuMDA5LS45ODUgMi4wMDktNDYuMjg4cy0uMDMtNDYuMDA0LTIuMDA5LTQ2LjI4OGMtMS40NDMtLjIwNy01Ljg3NCAzLjYxNC0xNS43NSAxMy41OG0uNDYxLjU0MUwyMyA0MS42NjZ2MzcuNjY4bDEzLjIwMiAxMy4zMzNDNDMuNDY0IDEwMCA1MC4yMTQgMTA2IDUxLjIwMiAxMDYgNTIuOTA2IDEwNiA1MyAxMDMuNjI3IDUzIDYwLjVTNTIuOTA2IDE1IDUxLjIwMiAxNWMtLjk4OCAwLTcuNzM4IDYtMTUgMTMuMzMzTTgwLjc1IDE5LjA4Yy0yLjc2OSAxLjYxMy0yLjA4MyAyLjg4NSAyLjcgNS4wMDFDOTIuMTE2IDI3LjkxNCAxMDUgNDguNzQzIDEwNSA1OC45MTljMCAxLjQyLS42NTcgNS41MDctMS40NjEgOS4wODEtMy40NTMgMTUuMzYtNy41MDQgMjEuODY4LTE2LjI0NiAyNi4xLTQuODMyIDIuMzM5LTUuMDIgMi43ODEtMi41MDEgNS44OTIgMS42NzMgMi4wNjYgMi4wODggMi4xMzEgNi4yNS45ODUgOC4yOTEtMi4yODQgMTAuODEyLTMuOTE2IDE0LjMwMy05LjI1OCA4LjU4LTEzLjEzIDEwLjk4NS0zNC44OTEgNS4zMzUtNDguMjg4LTMuNjItOC41ODUtMTMuMDc4LTE5LjkzOC0xOS4xMjYtMjIuOTYtNS4zMTQtMi42NTUtOC4wMzMtMy4wMDUtMTAuODA0LTEuMzkxbS41LjU4MmMtMi4yMDEuODg5LTEuMzUxIDIuMDggMi42MTYgMy42NjggMi40MjQuOTcgNS40MjQgMy41MjcgOC4wNDUgNi44NTggMi4yOTggMi45MjIgNC43MjEgNS45ODcgNS4zODQgNi44MTJDMTAxLjYyOSA0Mi4zOTcgMTA2IDUzLjM4MyAxMDYgNTguODgxYzAgMy41ODUtMi41MTYgMTQuNDg4LTQuODM2IDIwLjk1NS0yLjI0NSA2LjI1NS03LjU3MSAxMi4yNjUtMTMuMTUgMTQuODM3LTQuNDM4IDIuMDQ2LTQuNTQgMi4yMjUtMi43MDYgNC43MzQgMS4xNjQgMS41OTIgMS43OTYgMS42NTYgNS43NS41ODEgNS4xNDUtMS4zOTkgOS4wMTgtMy4wNjQgMTAuNDQyLTQuNDg4IDIuNTgyLTIuNTgyIDYuNDI3LTkuNDc4IDcuODA2LTE0IDQuNTAyLTE0Ljc2IDQuNjI5LTI3Ljk3OS4zNjUtMzguMDktNi4yNDgtMTQuODE1LTIwLjY3Ny0yNi44NzItMjguNDIxLTIzLjc0OG0tOSAxMy40NjFjLS42ODcuNzAzLTEuMjUgMi42ODctMS4yNSA0LjQwOSAwIDIuNTEyLjczNSAzLjYxMiAzLjcwNiA1LjU1QzgwLjQwMSA0Ni43OTggODIuNSA1MS4yMiA4Mi41IDU5LjVzLTIuMDk5IDEyLjcwMi03Ljc5NCAxNi40MThDNzEuNTMyIDc3Ljk4OCA3MSA3OC44NjcgNzEgODIuMDQ1YzAgMTAuNjM5IDEyLjM2MSA2LjE5IDE4LjE4NC02LjU0NSAxLjkyMi00LjIwNCAyLjI4NC02LjY3MiAyLjI3Ni0xNS41LS4wMTItMTIuMDE4LTIuMDc4LTE4LjI5OS03Ljg2MS0yMy45MDQtMy42MzYtMy41MjQtOS4zNDUtNS4wMTktMTEuMzQ5LTIuOTczbS41LjQ1NmMtLjQxMi40MTUtLjczMyAyLjE0Mi0uNzExIDMuODM4LjAyOSAyLjM1NS43ODggMy41NTYgMy4yMTIgNS4wODMgMTEuNTM0IDcuMjY3IDExLjUxNCAyNi44MDItLjAzNSAzNC0yLjgzOSAxLjc3LTMuMTggMi40Ni0yLjk2MiA2IC4yNDMgMy45NDcuMjk2IDMuOTk4IDQuMDU1IDMuODgxIDQuNzkyLS4xNSA4LjY3OC0zLjY3NyAxMS44NDMtMTAuNzQ5IDEuOTI1LTQuMjk5IDIuMjk3LTYuODM1IDIuMjk3LTE1LjYzMiAwLTExLjczNy0yLjA4Mi0xOC4zNTgtNy4zNjUtMjMuNDItMi43NjQtMi42NDgtOC45MTEtNC40MzMtMTAuMzM0LTMuMDAxbS0xNC4wODMgOS4wODhjLTEuMzY4IDEuMzY3LS42IDUuMjY3IDEuMjk5IDYuNTk3IDYuNjEgNC42MyA2LjU3NyAxNy44NjYtLjA1NyAyMi41MTItMy4xMTUgMi4xODItMi4yMjggNi42MyAxLjQwNCA3LjA0NyAyLjE0Ni4yNDYgMy41ODItLjQ5MiA2LjA1LTMuMTA5IDcuNDYxLTcuOTExIDcuNDk0LTIyLjQ4Mi4wNjgtMzAuMzU2LTIuOTYyLTMuMTQtNy4wNTctNC4zOTgtOC43NjQtMi42OTFNNTkgNDUuNDY1YzAgMS4zODQuODIgMi45MDMgMS44NyAzLjQ2NUM2My40NTEgNTAuMzEyIDY2IDU2LjA2IDY2IDYwLjVzLTIuNTQ5IDEwLjE4OC01LjEzIDExLjU3Yy0xLjA1LjU2Mi0xLjg3IDIuMDgxLTEuODcgMy40NjUgMCAzLjU4OSA0LjM3NSAzLjM0NSA3LjkxMi0uNDQxIDYuNzAzLTcuMTc1IDYuNzAzLTIyLjAxMyAwLTI5LjE4OEM2My4zNzUgNDIuMTIgNTkgNDEuODc2IDU5IDQ1LjQ2NW0tNTEuOTI1IDMuODJDMy4zMTUgNTQuMjY0IDMgNTUuMTY3IDMgNjAuOTUyYzAgNS44ODcuMjUzIDYuNTcyIDQuMTM3IDExLjIxMSAzLjcyNyA0LjQ1MiA0LjQ5NCA0LjkxMSA3Ljc1IDQuNjM5TDE4LjUgNzYuNXYtMzJsLTMuNjc1LS4zMDZjLTMuNDA4LS4yODQtMy45NzIuMDg3LTcuNzUgNS4wOTFtLjUxLjU5OUM0LjM4MyA1NC4yNDcgNCA1NS40MjkgNCA2MC45NjZjMCA1LjY0Mi4zMjUgNi41OTMgMy42MiAxMC42MTYgMi45ODIgMy42MzggNC4yMTcgNC40MTggNyA0LjQxOEgxOFY0NWgtMy40MTVjLTIuOTMxIDAtMy45MjMuNjkyLTcgNC44ODQiIGZpbGw9IiNmY2VjM2MiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0zNi4yMDIgMjguMzMzIDIzIDQxLjY2NnYzNy42NjhsMTMuMjAyIDEzLjMzM0M0My40NjQgMTAwIDUwLjIxNCAxMDYgNTEuMjAyIDEwNiA1Mi45MDYgMTA2IDUzIDEwMy42MjcgNTMgNjAuNVM1Mi45MDYgMTUgNTEuMjAyIDE1Yy0uOTg4IDAtNy43MzggNi0xNSAxMy4zMzNtNDUuMDQ4LTguNjcxYy0yLjIwMS44ODktMS4zNTEgMi4wOCAyLjYxNiAzLjY2OCAyLjQyNC45NyA1LjQyNCAzLjUyNyA4LjA0NSA2Ljg1OCAyLjI5OCAyLjkyMiA0LjcyMSA1Ljk4NyA1LjM4NCA2LjgxMkMxMDEuNjI5IDQyLjM5NyAxMDYgNTMuMzgzIDEwNiA1OC44ODFjMCAzLjU4NS0yLjUxNiAxNC40ODgtNC44MzYgMjAuOTU1LTIuMjQ1IDYuMjU1LTcuNTcxIDEyLjI2NS0xMy4xNSAxNC44MzctNC40MzggMi4wNDYtNC41NCAyLjIyNS0yLjcwNiA0LjczNCAxLjE2NCAxLjU5MiAxLjc5NiAxLjY1NiA1Ljc1LjU4MSA1LjE0NS0xLjM5OSA5LjAxOC0zLjA2NCAxMC40NDItNC40ODggMi41ODItMi41ODIgNi40MjctOS40NzggNy44MDYtMTQgNC41MDItMTQuNzYgNC42MjktMjcuOTc5LjM2NS0zOC4wOS02LjI0OC0xNC44MTUtMjAuNjc3LTI2Ljg3Mi0yOC40MjEtMjMuNzQ4bS04LjUgMTMuOTE3Yy0uNDEyLjQxNS0uNzMzIDIuMTQyLS43MTEgMy44MzguMDI5IDIuMzU1Ljc4OCAzLjU1NiAzLjIxMiA1LjA4MyAxMS41MzQgNy4yNjcgMTEuNTE0IDI2LjgwMi0uMDM1IDM0LTIuODM5IDEuNzctMy4xOCAyLjQ2LTIuOTYyIDYgLjI0MyAzLjk0Ny4yOTYgMy45OTggNC4wNTUgMy44ODEgNC43OTItLjE1IDguNjc4LTMuNjc3IDExLjg0My0xMC43NDkgMS45MjUtNC4yOTkgMi4yOTctNi44MzUgMi4yOTctMTUuNjMyIDAtMTEuNzM3LTIuMDgyLTE4LjM1OC03LjM2NS0yMy40Mi0yLjc2NC0yLjY0OC04LjkxMS00LjQzMy0xMC4zMzQtMy4wMDFNNTkgNDUuNDY1YzAgMS4zODQuODIgMi45MDMgMS44NyAzLjQ2NUM2My40NTEgNTAuMzEyIDY2IDU2LjA2IDY2IDYwLjVzLTIuNTQ5IDEwLjE4OC01LjEzIDExLjU3Yy0xLjA1LjU2Mi0xLjg3IDIuMDgxLTEuODcgMy40NjUgMCAzLjU4OSA0LjM3NSAzLjM0NSA3LjkxMi0uNDQxIDYuNzAzLTcuMTc1IDYuNzAzLTIyLjAxMyAwLTI5LjE4OEM2My4zNzUgNDIuMTIgNTkgNDEuODc2IDU5IDQ1LjQ2NU03LjU4NSA0OS44ODRDNC4zODMgNTQuMjQ3IDQgNTUuNDI5IDQgNjAuOTY2YzAgNS42NDIuMzI1IDYuNTkzIDMuNjIgMTAuNjE2IDIuOTgyIDMuNjM4IDQuMjE3IDQuNDE4IDcgNC40MThIMThWNDVoLTMuNDE1Yy0yLjkzMSAwLTMuOTIzLjY5Mi03IDQuODg0IiBmaWxsPSIjZmNlYzNjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=", cl = "data:audio/wav;base64,UklGRmaIAABXQVZFZm10IBAAAAABAAIAQB8AAAB9AAAEABAATElTVBoAAABJTkZPSVNGVA4AAABMYXZmNjAuMTYuMTAwAGRhdGEgiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAA//////7/////////AAABAAAAAgABAAEAAQAAAAIAAQABAP//AAD+////AAD+//7////+////AAD//wAA/v8AAAAA/v8AAP//AAAAAAAAAgD////////+////AAABAAEAAgD/////AQABAAAA//8CAP//AAAAAAAA/v8AAAAA//8AAAEA//8EAAAAAAAAAAAA//8BAP//AQABAAEA/////wEA/v///wAAAAACAAAAAAABAAAA//8AAP//AAACAP//////////AAAAAAEAAAAAAAEA//8AAAEAAQADAAIAAgAAAAAA/v///wEAAAAAAAEAAAAAAAEA//8AAAEAAQD//wAA//8AAAEAAAABAAEAAAABAP//AAD//wAAAgAAAP//AQD/////AAAAAP7/AgAAAAIAAAAAAAAAAAABAAAAAQABAP//AAABAP///v8AAP////8AAP//AAD//wAA//8BAP//AAD///7///8BAP7///8AAAIAAgABAAEA/v8AAP//AQADAAEAAAACAAEA/////////v///wEA/v////7/AAD+////AAAAAAAAAgAAAAAAAAD//wEAAAAAAAAAAQABAAIA/v8AAAAA//8AAAEAAAAAAP//AgD//wEA/////wAAAQACAAAAAAAAAP//AQD/////AQAAAAEA/v8AAAEAAQABAAEA///+////AQD//wEAAgD+//7/AAAAAAAAAQAAAAAAAQAAAAAAAAAAAP//AAD//wEAAQD//wAAAQABAP7///8AAP7/AAABAP7/AQABAAEAAAABAAEAAAD+/wIAAAABAAAAAQD/////AQACAP////8AAP//AQD//wEA/v8CAAEAAAAAAAAAAQAAAAIAAQAAAAEAAgD//wEAAAAAAP7///8BAP//AgAAAP///v8CAAAAAgD///////////7/AAACAAEAAgD//wAAAAABAP//AwAAAAMA//8AAAAAAQD+/wAAAAD//wAAAQD//wEA//8BAP7/AAABAAAA//8BAAAA//8AAP//AQADAP3////+////AgD+/////v8BAAEAAQACAAAAAAAAAAAA//8AAP//AAD+/wEA/v8AAP7/AAD//wAAAQACAAAAAQAAAP//AQAAAAAAAAABAAAAAAD+//////8AAAAAAAD//wAAAAABAAEA//8AAAEA//8AAP//AgD+/wAA///+/wAA/v///wAAAQABAAAAAQD//wAA//8AAAEA//8BAAAAAgABAP//AAACAAIAAQABAP//AAAAAAAA//8BAAIAAAABAAAA//8CAAEA/v//////AAAAAAEA////////AQAAAP//AAD//wAAAAAAAP3/AAAAAAEAAAACAAAAAAAAAP//AAD//wAAAAAAAAAAAAAAAP///v///wAAAAABAAAAAAD//wEAAAABAAEAAQD//wAAAAACAAAAAQD+/wAA//8BAAEAAAD+/wAA/////wAAAAABAAAAAAD//////v8AAAAA//8AAAAAAAAAAAIAAAABAAEAAAABAP7/AAD9//////////7///8BAP//AAD///3/AQABAP//AAD//wAAAAABAAAA//8AAP//AAD/////AQABAAEA//8AAAAA//8BAAMA//8AAAAA//8AAP7/AAD//wAAAAAAAP7/AQAAAAAA/v8CAP//AAABAAIAAQABAAAA//8BAAEAAQD///7/AQD//wAAAQABAP//AAD//wEAAAAAAAAAAQAAAAIA//8AAP////8AAP//AQD//////v///wEA/v8AAAIAAgACAAEAAAAAAAEAAAAAAAAAAAAAAAAAAQD//wAA/////wAAAQACAP////8AAAAAAAD//wAAAQD+/wEA//8AAAEAAwD//wEAAQAAAAAAAAABAP////8AAAAAAQAAAAAAAAAAAAEAAQAAAP////////7/AQABAAEAAQD///////8BAAAA//8AAAAAAgABAAEA/v8BAP7///8BAP3/AQABAAIAAAD//wEAAAAAAP//AAABAAIA//8CAAAAAQAAAAEA//8BAAAA/////wAAAAD//wEAAQD//wAAAAAAAP//AAAAAAAAAQABAAAAAQAAAP//AQD//////v8AAAEAAAAAAAAA//8AAAAAAAACAAEAAQAAAP//AAABAAEA/////wAAAgABAAAAAAAAAAEAAAABAP//AQABAP7////+/wEAAAAAAP//AAABAAAAAAABAAEAAAAAAAAA//8BAP///f/+/wEAAQD///7///8AAAAAAQAAAP////8AAAAAAAABAAAAAQD/////AAD//wEA//8AAAIA//8CAAAA//8AAAAAAAD+/wEAAAD+/wAA/////wAA////////AAAAAAAA//8BAAAAAAD//wAAAAD//wEA//8AAP//AQD+/wAAAAAAAP7/AAD+/wEAAQABAP//AAABAAEAAQD//wAA/////wEA//8AAAAAAgAAAAAA//8BAAAAAgAAAAAAAAAAAP7/AQD//wAAAAD+/wAAAAADAAIA/////wAAAQD//wIA//8BAAEA/v8AAAIAAAAAAP3///8AAAAAAAAAAAAAAAABAP///////wAA//8AAAEAAQABAAEAAQABAAAAAQAAAAAAAQABAP7/AQD//wAAAQABAAEA//8BAAAAAgAAAAEAAAABAP//AAD/////AAD//wIA/////wIAAAD///7/AAAAAAAAAAACAP//AAABAP////8AAAAAAAABAAAAAgAAAAAAAQD+/wEA/////wAA/////wAAAAAAAAAA/v//////AAAAAP//AAABAAAAAQAAAAIAAAACAAAA//8AAAAA//8AAP7/AAAAAP//AAACAP//AQABAP//AQABAAAA/////////v8AAP//AQAAAAAA///+/wAAAQD+/wEAAQAAAAEA/////wAAAQD//wAA//8AAAAA/v8BAAEA//8AAP7//v8BAAAAAAAAAAEA//8AAAEA/////wAAAAD//////////wEAAAABAAEA//8CAAEA/f8AAAAA//8BAAAABAABAAEAAQAAAAAAAAAAAP7///8AAAAA/v8BAAAA//8AAAIA//8AAP////8BAP//AAAAAAAAAAD/////AQD///7/////////AQD8////AgABAAIA////////AAD//wAAAAABAAAAAAAAAAEAAgAAAP//AQD//wAAAAAAAP/////+/wAAAAABAAAAAwABAP///////wEAAAADAP//AQACAAAA//8CAAEAAAAAAP///////wIAAAAAAAAAAQAAAAAAAgD//wEAAAABAAAA/v8AAAAAAAAAAAAAAAAAAAEA/v8AAP//AQD//wAA//////7///8AAAAAAAAAAP7/AQD//wAA//8AAAEAAAABAAEAAQD/////AAD//wEAAAD/////AQAAAAEAAAD//wEAAAD/////AgD//wAAAQD//////////wAAAAD//wAAAAABAAAAAAD//wAAAQD///7/AQD//wEAAAD/////AAD//wEA//8AAAEA//8CAAAAAQD//wEAAgAAAAEAAwAAAAAA/v8BAAEAAgD//wEAAAAAAAAAAAD//wEA//8AAAAAAQACAP///////wAAAQABAAEAAAAAAAEAAQD+/wEA/f////////8AAAAA//8AAAEA//8BAAAA/v///wEAAAAAAAEA/////wAAAAAAAP//AAAAAAIAAAABAAAA/////wAAAAD//wAA/v8AAAMAAQD+/wEAAAABAAEA//8BAP//AgAAAAAAAAD//wAA/////wEA/v8CAP3/AAACAP3/AQABAAAAAQACAAEA/v8AAAAA//8BAAAAAgAAAAAAAgACAAEA/v/9/wAAAQABAP7///8AAP//AgD+/////v8CAP////8BAP//AQACAAEAAQABAP//AAD///7/AAABAAEAAgD//wEA//8CAAEAAQABAAEAAAABAAAA/v8AAAEA/v8AAP//AAABAP//AQAAAAEAAgAAAAAA/v///wEAAQAAAAIAAAD/////AgAAAAEA/v8AAP7/AQAAAAAAAQAAAAEAAAACAAEA//8BAP////8AAAIAAAAAAP//AAAAAAIAAAAAAAAAAwABAP///v8BAAAAAAAAAP3/AAABAAEA/v////////////3//v8AAAAAAQABAAIAAAD+/////v8AAAAAAQABAAEAAQAAAP//AAAAAP//AQAAAP//AAABAAAAAAAAAAAA////////AAAAAP//AQD/////AAABAAEA//8CAP7///8AAP7//v8BAAEAAAD+/////////wEAAAAAAAAAAgD//wAAAQAAAP7/AQABAP//AQAAAAAAAAD/////AAACAP////8BAAAAAAD//wAA//8AAAEAAQABAAAAAAABAAAAAQD+/wEA/v8AAAEAAQD/////AAD//wAAAQABAP7//v//////AAACAAAAAAAAAAAAAAACAAAAAQAAAAAA//8BAP//AQD//wAA///+/wIAAQD//wAAAAD//wAA/v8AAP3///8AAAAAAAAAAAAA/f8AAAAA//8CAP7/AAD///7/AAAAAAAAAAD//wEAAAAAAAEAAAAAAAAA//8BAP////8BAP7///8CAAEA//8BAP3///////////8BAAAAAAAAAAEAAgD+//////8BAAMAAQADAAEAAAACAAAAAQD/////AAABAAMAAQAAAP//AQD//wAA//8AAAAA//8CAP7//////wAAAAAAAAIA/v8AAP//AAACAP//AwD//wAA//8AAP//AwD//wEAAQABAAEAAQACAAEAAAD//wAA//8AAAIAAAAAAP///////wAAAQD//wIA//8BAP7/AAD///////8AAAAAAAAAAAEAAAD//wAAAQD//wEA//8BAAAAAAD/////AgABAAIAAAABAAAAAAAAAP//AAAAAAAA//8AAAAAAAD/////AQAAAAAAAQD//wAA///+////AAAAAAEAAgABAAEAAAAAAP//AQAAAAAAAQD+/wAAAAABAAEAAAD/////AQABAP7///8AAAIAAAACAAAA//8AAP//AgACAAAA///+/wAAAAABAAAAAQAAAAEA/v8BAAEA//8CAP//AQD+/////v8AAAAAAAACAP//AAD+/wIA/v8BAAAAAAD/////AAAAAP7///8AAP7//////wEAAAABAAAAAAD//wAAAAAAAAAAAgACAAAAAAABAAAA/f8AAP7/AgAAAAEA//8BAAAAAAD///7/AQD//wAAAAAAAAEAAAAAAAEAAAAAAAAAAQAAAAAA//8AAAAAAAABAP///////wAAAgABAAEA//8AAP//AAACAP//AQABAAEA//8BAAAAAAABAAAA//8AAAEAAAAAAAIA/v8BAP//AQD//wEAAAABAAEAAQACAAEAAAAAAAEAAAABAAAAAAD/////AAABAAEA//8AAAAAAQABAP//AAAAAP//AAD/////AQD//wAAAAABAAEA//8BAAAA//8AAP///f/+/wAA/////wAAAQAAAAIAAAAAAAAAAAD+/wEA/f8CAAAA//8AAAEAAgAAAAMAAAABAAAAAAAAAP//AQAAAAAAAQABAAAAAQAAAP//AAAAAAAA//8AAAAAAAABAAAAAQAAAAAAAAABAAIAAAAAAP7/AQD//wAAAAD+////AAAAAAAAAAABAAAA/////wAA//8AAAAAAAD/////AgD//wAA//8CAP//AQACAAEA/f////////8BAAIAAQABAP//AAD//wAA///+////AAD+/wAAAQD/////AAAAAAAA/////wAAAAABAAAAAQAAAAAA//8AAAIAAAABAP//AQABAAEA//8AAAAAAAADAAEAAAABAP//AgD//wMA//8AAAAAAAD//wAAAAD9/wEA///+/wAA//8BAAEA//8BAAAA//8AAP///v8BAP///////////v8BAAAAAQABAAAAAAAAAAAA//8AAP7/AQAAAAAAAAAAAP7/AQAAAAAAAgABAAEAAAABAAEAAAAAAAAAAAD+/wAAAAD//wEAAAAAAAAAAAAAAP//AgABAAAAAAABAAEAAAD/////AAAAAP//AAABAP////8BAAAAAQABAP7//v/+////AQAAAAAAAQAAAAEAAgAAAAAAAQAAAAEAAAD+/////v8BAP//AAABAP//AQABAAAAAAD//wAA//8CAP//AAAAAAEAAAABAAAAAAAAAP//AAD+////AwAAAAAAAQD//wEAAAACAAEAAAADAAAAAAD/////AAAAAAEAAAABAAAA//8AAAEA//8BAP///v8AAP//AAD//wAAAQABAP//AQAAAAAA/////wEAAQAAAP////8AAAEA//8BAAAAAQAAAP////8AAAAAAQAAAAIAAQAAAAEAAAAAAAEAAAD//wEAAAAAAP////8AAAAA//8BAAEAAAAAAAIA///+/wIA/v8BAAAAAQACAAAAAQAAAP7///8AAP//AAAAAAEAAAAAAP7/AAD+////AAAAAAAAAAD//wAA/v8BAAMAAAABAAIAAgD//wAA//8BAAEA//8BAP7/AAAAAP7///8BAAAAAQAAAP7/AQD/////AAAAAAEAAAABAP//AQABAAAAAgABAAAAAAAAAP///////wEA//8AAAEA//8AAAAAAQAAAAIAAAABAP7//////wAAAQABAAAAAAABAAEA///+/wAA//8BAP///v8AAP///v8BAAAA//8CAAAAAQAAAAEAAQABAAAAAAD+/wAAAAD+/wAAAAAAAAAA/f////////8AAAAAAQABAP///////wEA//8BAAEAAAAAAAAA/////wEA/v//////AAAAAP//AAABAAAAAAD+/wAAAAD9////AQAAAAEAAwD//wEAAQAAAP//AgAAAAAAAAD+/wIAAAAAAAAAAAAAAAIA//8AAAEAAQACAAAAAQD//wAAAAD//wIAAQABAAAAAAD//wEA//8BAAEAAQAAAAAAAQABAP7/AAD//wEAAAACAP7/AQAAAAAAAAD//wIAAQACAAIAAQAAAAAAAAAAAP3///8BAAAAAQACAP//AgD9/wAAAAD//wEA/v////////8AAAAAAAD//wEAAQD//wMAAQAAAAEA//8AAAEA//8AAAAAAAACAAAAAAD//wAAAQD///////8AAAAA//8BAAIA/v8BAAEA/f8AAAAAAAAAAAAAAgD/////AAD+/wAAAAD//wAAAAAAAP//////////AgABAP///v8AAAIAAQAAAP//AAABAAAA/////wAAAAAAAAEAAAABAP///v///wIA//8BAAEAAQAAAAAA///+/wEAAAAAAAAA/////////v8BAP3/AAAAAAAAAAAAAAAA//8AAP//AAAAAP//AAABAAIAAAACAP////8DAAAAAAABAAAAAwABAP//AAABAP//AAAAAP////8BAAAAAgD//wAA///+/wAAAQD//wAA//8AAP7///8AAAAA/v8AAAAAAQD//wEA/v////////8AAAAAAQAAAP//AQACAAAAAAAAAP//AAD//wAAAAD//wAAAAD+/wAAAAAAAP//AQD//wAAAgAAAAAAAQABAAAAAwD+/wAAAAD///7/AQD//wIAAQAAAP//AAD//wAA//8CAAEAAAAAAAAA/////wAAAAD//wEAAQD///////8BAAAA//8BAAEAAAAAAAAA/v///wEAAAAAAAAAAAADAAAAAAAAAAAAAQABAAEAAAD+//7//v8AAP//AQAAAAAAAAABAAEAAgAAAAAAAQD//wAA/f8AAAAAAAABAAAAAQAAAAAAAAAAAAIA//8BAP///////wIA/////wAAAAABAAEA//8BAAAAAAD//wAAAQD//wEAAAAAAAIA/v8BAP//AAAAAAEAAAABAP//AAAAAAAAAQABAP7/AAABAAAAAQD//wIAAAAAAAEA///+/wAA//8AAP//AAAAAAAAAAABAP///////wIAAQAAAAEAAQAAAP7/AQAAAAAAAQAAAAAAAQD/////AQAAAAAA///+//7/AAD+/wEA//8AAAAA///+/wEAAAABAAIAAQABAAAA//8AAP//AAD//wAAAAD//wAAAAAAAP//AQAAAAAA////////AQAAAAAAAQD+////AQABAP7/AAD///7/AgD//wAAAAAAAP//AAAAAAEA//8BAAEAAgAAAAIAAAD//wEA/////wAAAQD///7/AQD//wEAAQD/////AAAAAAEAAgAAAAAAAQD//wEA//8AAP7//////wAA//8BAAEA//8BAAAAAQD/////AAABAP//AAACAP//AQAAAP//AAABAP////8AAAAAAAABAAEAAwABAAAAAgD//wAAAAD//wEAAAABAAAAAAABAAEA/////wAA//8AAAIAAAAAAAEAAQABAAEAAQABAP//AgAAAAAA//8BAP3//v///wAA//8AAAAAAQAAAP//AQD//wEAAAACAAIAAAABAAAA//8BAAEA//8BAP//AAAAAP//AQAAAAIAAAD//wAAAAAAAAEA////////AQAAAP//AQD//wAAAQD+/wEAAAABAP///v///wAAAAAAAP//AAAAAAIAAQD//wAAAgD+/wAAAAD//wAAAAABAP///P//////AAACAP////8AAAIAAAABAAAAAAAAAAAA//8AAAAAAQADAP//AQAAAAAAAAABAAEAAQAAAAAA/v8AAAAAAAD//wAAAQD//wAAAAD//wAA/v////////8CAAEA/v8BAP7/AAAAAAAA//8AAAEAAAD//wIAAQAAAAIAAQAAAAAAAAD///7/AQABAP//AAAAAP//AAACAAEA//8BAAAAAwAAAAAAAAD//wEAAAD//wAA///////////+/wAAAQABAAIAAAABAAEAAAD//wEAAAD/////AAD+/wIAAwABAAEA/v8BAAEAAAD//wAA//8AAP//AAAAAAEAAAAAAP//AAAAAAEAAQABAAEA/v///wAAAAD//wEAAAACAAAA/f/+/wAA/v///wAA//8AAAEAAQD///7/AAAAAAAAAAABAAAAAAACAAAAAAABAAAAAAABAP//AQD//wAA//8BAP7/AgABAAEAAQAAAAAAAQD//wEA/v8AAP////8AAP///////wIAAQD//wAAAAD//wAA/v///wAAAQD//wIA/////wEAAAAAAAIAAAABAAAAAAD//wEA//8AAAAA/////wAAAQAAAAAAAAD//wEAAQAAAAAAAAACAP///////wAAAgD//wAA/v8AAAIAAAAAAAEAAAABAP//AQABAAEAAQAAAP///v8BAAEAAAAAAP////8AAAAAAQD//wIAAQAAAAEAAAAAAAAA//8BAP//AAAAAP7//v///wEAAAAAAAIAAAAAAP//AAD//wEA//8BAAAAAAABAAEAAAABAP7///8AAAIAAAABAP//AAD//wEAAAAAAP//AAAAAAEAAAAAAAAAAAAAAP7/AQD//wAAAQD+/wEA/v8BAP7/AAABAAEAAAACAAIAAAADAAAA//8AAAEAAAABAP//AQD//wIA/////wEA//8AAAEA//8AAAEAAAAAAAAAAQABAAAAAAAAAAAAAAD//////////wAA//8AAP7/AAD+/wAAAQAAAAAA/////wAABAAAAAAA//8AAAEAAAAAAAAA/v8AAP//AAAAAAAAAAD//wAAAAD///////8BAAEAAAD/////AgABAAEA/v/+/wAAAQACAAEAAAD//wAAAwABAP//AgD+/wAA/v8AAAAAAAAAAAEA//8AAAEAAAD+/wEAAAAAAAEAAgAAAAEAAAABAP//AQD+/wIA/////wAAAQD//wAAAQD+/wAAAQABAAAA////////AAACAAAAAQAAAAIA//8BAP///v///wEA//8BAAEAAQD+/wAAAQD9/wAAAQAAAAEAAAABAAAAAgAAAP//AAD+/wAA/f8AAAAA////////AgAAAAcAAQD7/wEA/f8AAAIA//8GAP7//v/+//b/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+P/F//z/rv/i/7r/6v/Z/wYABwAoADAAKQBOABkATAD0/zQA1P8PANv/0//v/6//FwCi/ywAxP8oAPn//v82APT/WwD4/00A+/8yAPv//f/8/83/+v+w/+T/sf/j/9b/AQACACoAIgAtAEIAHwBPAAEAQADe/xcA0v/k/+X/t/8IAKv/IgC//yEA6/8EACMA9/9PAPf/VAD+/zcA+/8JAPn/1P8AALf/6f+w/+P/zf////j/HAAdAC0APgAfAEsABwBCAOP/IADV/+//2v/B//3/rP8PALv/GADd/xEAFgABAEMABABaAP//QgACABcA+//n/wAAwP/w/67/4v+///3/6f8WABcAKQA0ACIARgAQAEcA8f8pANn/9f/U/87/7f+v/wgAtP8RANP/FgANAAIAOQACAFQA/f9HAAAAIAABAO3//P/E/wEAs//q/7n/9P/i/wYAEQAZADEAJABBABMASAAAADEA3/8CANL/1v/g/7H/AACy/w8Axf8ZAPv/CQAzAAIAVQD//1AAAAAsAAIA9v/7/8r/AwC2//P/tf/m/+H/AwADABEAKQApADoAHgBHAAgAPADr/wkA1//f/93/vP/6/7L/CgDA/x4A7/8hACkAAgBPAPz/UgD1/zIABAAEAPz/0v/5/7f/AACy//H/2f/+/wEAAAAkABUAMwAdADoAEQA9APD/EADU//L/1P/H/+z/tf8LALv/HADk/ygAGgADAEMA//9TAPn/QAAAABAAAQDc//z/wf8DALD/7P/Q//z/9/8HABoAFgA3ACMAMAAOADwA+P8ZANv/+P/Y/9H/5v+8/wUAu/8WANf/HgAMAAoAPQABAFMA/f9HAP7/HwAEAN//+v/H/wMAs//2/8r/8//y/wMADgAQAC4AIwAyABMAJwD8/xcA3v8LANP/5v/f/8j/AgC4/w4A1P8eAAQACgAxAAEAUgD+/0gA/v8nAAIA8f/5/8r/BAC6/+3/wP/l/+b/AQAIABkAIwArAC4AIAAoAAkAGADj/w0A0f/r/9//0P8DAL3/CgDN/xkA//8IACUAAgBJAAAATwD+/ysAAQD7//3/z/8DAMT/+f/K/+L/5P/1////EgAcACYALgApAC4ACwAcAPL/EADZ//L/1f/U//f/uv8KAMX/DwDu/wcAHwADAEUABgBNAAEANQAAAAYAAQDf////xf/+/9P/4f/b//X/9v8LAA4AGAAlACoAMAAQABkA9v8TAOL/+f/W/9r/8f/I/wcAxP8MAOr/BwATAAQAOAAGAEcAAABCAAEADwAEAOP//v/F/wIAzf/o/93/8P/s/w4ACwAZACEAKgAyABMAIQD5/xgA6v8DANb/4P/y/9H/AQDJ/wkA4/8DAAoA/f8wAAQAQwABAEAA//8VAAIA7P/+/8r/BADP/+v/2v/s/+n/CwAIAA0AHAAjADQAHAAkAP//GQDy/wQA5v/i//b/0P/7/8f/AADh/wMAAAD+/yUAAAA7AAEAOAAAABwAAAD6/wAA1/8CAMr/AADb/+3/5f8BAAIACAAVABcALwAfACgA+/8XAPn/DgDe/+//7v/Q/wMAz/8JAOP/CwDx////EAAHADEAAQArAAIAHQAEAAcAAADr/wEAzv8CANj//f/k/wEA+f/+/xQABwAqAB4ALAD+/x4A8P8SAOb/8//f/9j//f/N/wEA3v8LAO7/AgAMAAQALAAEAC0AAQAdAAQADwABAPP/BADV/wMA0/8AAOH/AQD1/wAAEAADACQAGwAwAAQAHwD0/xUA8f/4/+L/2//7/8z/AwDc/woA6f8AAAQAAwAoAAcANAAAACcAAgAUAAEA+P8CANv/AgDR/wEA4v8BAOz/AgAIAPv/JAAVADMAFAAhAPP/GQDz//7/3P/l/+3/z/8BANf/CgDn/wkA/P///xoABwAwAAIAJwACABcAAwABAAIA4f8BAND/AgDd//3/6P8CAAYA/f8YAAwALwAZACUA9v8bAPj/AwDq/+r/7P/S//7/1/8EAOX/CQD6//7/GQAFAC8AAQApAAEAGQACAAMAAgDm/wEAzv8BANv//v/p/wIA//8BABMABQArACAALAABAB4A8f8NAOv/7v/m/9n/+P/R/wMA4f8OAPT/AQATAAMAKwAHACoAAwAbAAMABQADAO7/AQDU/wEA2f8AAOL////3////EgAAACUAGgAvAAUAHQD2/xIA9f/0//T/3P/4/8///f/h/wIA7f8AAAoAAQApAAQALQADACAAAgAPAP//9P///9r//f/T/wAA3f/9//D/AQAQAP//HAAHAC8ACQAfAPv/GAD+//f/+P/j/wEA0v/+/9n/AADq/wIABgD//x0AAQAuAAEAIwAAABQAAwD8/wEA3/8AAM//AADe////7f8BAAwA//8ZAAMALwAAACEA//8dAP3//v/9/+n////U//z/1v8BAOT/AAD+/wAAGwD+/ywA/v8kAAIAGAD///3////q/wEA0P///97/AADk/wAABAAAABUAAQAqAAEAKQAAABwAAAAFAP//6f8AANr////X/wAA4/8AAPj/AgAUAAAAKgD//ywAAAAcAP7/AQAAAOv/AADU/wAA2v8CAOP/AAABAAAAFgABABsAAAAqAAEAHwAAABQAAgDv/wEA3v///9H////f////7/8BAAoAAQApAAAALgD//yEAAQAIAAAA8P8BANr//v/V////4f8AAPf//v8UAAAAFAAAACYAAQAhAP7/GwD+//T/AADo/wIA1v8CANr/AgDp/wEABgAAAB8AAQAsAAEAJAAAAAwA///z/wEA3/8AANT/AADh/wEA9P///xQAAgASAAAAJQAAACEAAAAaAP//+v8BAOj////W////2P8BAOf///8DAAAAHwAAAC4AAAAlAAAAEgAAAPL/AQDm////0f8CAN3/AADr//7/EQD//xAAAQAhAAIAJQAAAB8AAAABAP//6v8CAN//AQDX/wAA4/8AAPr/AAAXAAAAKgABACgAAAAbAP///f8AAOj/AADU/wAA2v///+f/AQANAAMAEQD+/xwA/v8kAP7/IQABAAgA/v/p////5/8AANf/AQDd/wEA8v8BABMAAQAjAAAALgAAACAAAQADAAEA7f8BANn/AgDY//7/4P/+/wEAAAAXAAIAFAAFACUA/P8jAP//EgAAAO//AQDo////1/8AAN3/AADx//7/DgAAAB0AAQAoAAAAIwAAAAoAAQDv/wMA4f8AANn/AQDi/wEA+v///xgAAAAQAP3/IwD//yUA/v8XAAAA7/8AAOv/AADc/wAA3P/+/+v/AQALAAEAGgACACkAAAAkAP7/EAABAO/////q//7/1/8AANz/AgDw/wEAEgD//w8AAAAcAAIAJQAAAB0AAAD2////7P8AAOP/AgDa/wAA5P8BAAQAAQAWAAAAIgAAACMAAAAaAP//+P///+v/AQDZ/wAA2////+7/AAARAAAADgAAABYAAAAhAAAAIAABAPz/AQDt/wAA5P8AANr/AQDg/wEA/P8BABcAAAAhAP//KQD//xwAAAD8/wEA7v8AAN3////Z/wAA6f8BAA0AAAARAAEAEQAAACMAAAAgAAEA/f8CAO3/AADv/wAA3v8BANv////1////EgAAABkA//8nAAAAIgAAAAMAAADu/wAA6P8CANn/AQDg////BQD//xMAAQAOAP//IAABACYAAAAGAAAA6f////H/AADg/wEA2f8AAO3///8PAAAAFQACACQAAAAkAAEADQABAO//AADp/wAA2////9z/AQD7/wEAFgAAAAwAAQAXAP7/JQD9/xMAAADx/wAA8f8AAOr/AADc/wEA4/8BAAkAAAAVAAAAIQD//yYA//8UAAEA9P8BAOz/AADf/wAA3P8AAPP/AAAQAAAADQABAA0AAAAlAAEAGAD///H//v/0/wEA7v8CAN//AADg//3/BAACABUAAQAfAAAAJwABABgAAQD0//7/7f///+L/AADa/wIA8P///w4A//8SAAMACQAAACAAAQAgAP//+v////P////y/wEA4/8BANr/AQD9/wAAEwD//xkAAQAjAAAAIgABAPz////s/wAA6v8BANX/AQDr//7/BwABABMAAAAHAP//FwAAACYAAAD//wEA9P8BAPb/AQDu////2v8BAPn/AAATAP//FwD//yEAAAAjAAAAAgAAAOn/AQDr//7/2P8CAOT/AAABAP//FgABAAUAAQATAP//IwAAAAEAAgDy/wEA9/8AAPb/AADb/wAA6/8BABAAAAATAP7/IQAAACYA//8UAP//7/8AAPD/AADd/wEA3P/+//7///8OAAAACgAAAAgAAAAhAP//CQACAPT/AQD2/wAA9v///97////m/wIADgABABMAAQAfAP//JwAAABMAAADw/wAA8P///+r/AQDb/wAA9f8AAA8AAAARAAIABAD//wYA/v8HAAAAAQD//wMAAgAGAAAA7f8AAOz/AAALAP//DwACABQA//8bAAAAHgD///f/AADq/wEA6/8BANj//v/t/wAACAD+/xAAAgAEAAAABAABAAcAAQADAAAA//8AAAUA///1/wAA5f///wIAAAAOAAAAEAAAABsAAAAhAAAA/v8BAOj////y////3f8AAOf/AQAGAAEADAAAAAcA//8BAP//CQABAAMA//8BAP//BQAAAAAAAADo/wAA+/8AAAoAAAALAAAAFAAAACAAAQAGAAIA7f8BAPH/AADm/wMA3P8CAP7/AgASAP//CgD//wAAAAAIAP//BQD//wEAAAACAP7/BAAAAPz/AwD8////BAAAAAEA//8HAAAAHQAAAAgA/v/x//7/8f///+f/AQDg/////P///woAAAAMAP//AAABAAYA//8EAAAAAgAAAAUAAAACAAAAAwAAAAIAAAABAAAAAQABAAAAAgAcAP//DgD///T/AQDx/wAA9P8CAOH/AAD3/wAACQAAAAoAAQABAP//AwAAAAcAAAD+/wAAAgACAAEAAAD+////AwD+/wAAAAABAP//+v8BABEAAQATAAAA9f/+//L//f/z/wIA6f8AAPb/AQAFAP//DAAAAAAAAAAFAP//BQD//wEA//8DAAEAAQAAAP7///8AAAAA//8BAAIAAAD+/wAAEAABABYAAgD6/wEA8v8BAPX/AwDp/wAA8////wMA//8JAAEABAABAAEA//8FAAEA//8AAAMAAQACAP//AQAAAAEAAgAFAP//AQABAAAAAQAAAP//EQABAAAAAAD5/wEA+P8AAPr////6/wAA+/8BAAIA//8BAAAA//8CAAUA//8BAP7/AAABAAEAAgAAAAAAAwAAAAEA/v8DAAIAAAACAAQA//8TAAAA/P8BAPr////3//////8AAPz/AQD7/wEAAgD/////AAABAAEABAAAAP//////////AAAAAAAAAAADAAAAAwAAAAAA//8EAP///v/+/xAA//8HAAAA+/////j/AQD8////AAD///n///8AAAAA//8AAP////8DAP//AgAAAAAAAAACAAIAAAD+/wAAAQD//wAA/////wIAAgD9////CQACAAYA///9////+f8BAPr/AQAAAAIA/v///wAA//8AAAAAAAAAAAEAAAABAAAAAgAAAAEAAAAAAAEAAQABAAAAAgABAP//AAD//wEAAAD///////8BAAIAAQAAAAAA/v/+//////8BAAAAAQABAP//AAD///////8BAAAAAQABAP////8CAAEAAQD//wEA/v//////AQAAAAAAAAAAAAAAAAD9/wMA/////wAAAQD+/wEA/v/+//7/AQD//wMAAAAAAAAAAAABAAEA//////7/AAACAP3/AAD//wAAAQAAAP//AQD//wAAAAAAAAEA//8CAP//AAAAAAAA/v8AAAAA//8BAP//AAABAP//AAAAAP//AQD//wAAAQABAAAAAAABAAEA/v///wAAAAD//////////wAAAAAAAP//AAD////////8/wIAAAADAAEA/////wEA/v8BAP7/AgAAAAEAAgAAAP//AgD/////AQD//wEA//////7/AQD//wMAAAAAAAAA//8CAP//AQAAAP//AAACAAAAAAABAP//AQD+/wAA/////wAA/f///wAAAAAAAP7/AAAAAAAAAgD//wEAAQACAP//AAAAAAEAAQD//wAAAAAAAAAA//8BAAMA/v8AAP7/AQAAAAAAAQAAAAAA///+//7/AAAAAAAA//8BAP7/AQAAAP//AQABAAAAAQAAAP//AAD//wIA/v///wAAAQABAP//AAD//wEA//8BAP//AgAAAP///////wAAAQABAP//AwABAAAAAAAAAAAA/////wIAAwACAAAA/v8BAAAAAAAAAAAA//8AAP////8AAAAA/////wAA/////wEA/v8CAAEAAQD//wAAAAABAAAAAAD//wEAAQABAAAA//8CAAAAAAAAAP7/AAABAAAAAQABAAAAAgABAAAAAQD//wEAAwD+/wAA/v8AAAEAAAAAAAAAAAAAAAEAAAD//wMA/v///wAAAAACAAEAAAAAAP7///8DAAEAAQD//wEA/f8BAAEAAQD//wEAAQABAAMAAgAAAAEA//8AAP//BAAAAAIA/v//////AQABAAAAAAD//wEAAAACAAIAAQAAAAAAAgAAAAAAAAABAAIAAAABAAIAAQAAAP////8AAAAAAAD//wAAAQACAP//AAAAAAAAAQAAAAEA//8AAAAAAAD/////AQD//wAAAQD9////AQAAAAAA//8BAAAA///+/////v8BAAAAAQAAAAAAAAAAAAIA//8BAAAAAAACAP//AQD//wAAAAD/////AAD9/wAAAAACAAAAAgAAAAEAAQABAAEAAAAAAAEA//8AAAEAAQACAAAAAQAAAAEA//8BAAIAAAACAP//AAABAAAAAAAAAAAAAAD//wAAAQD/////AAAAAP////8AAAEAAAAAAP7///8BAAIAAQD//wEAAQAAAP//AgAAAAAAAAD//wAA//8CAP7/AQAAAP7/AAD+////AAAAAAAAAQABAAAA//8AAAEAAAABAP7/AAAAAP7/AAD+/wAAAQABAAEA/////////v8BAP///v///wIAAAAAAAAAAQAAAAIAAQAAAAAAAAABAAEAAAAAAAAAAAD//wEAAQD//wAAAQABAAAA/v/+/////////wAAAAD//wAAAAD/////AAAAAP7/AAD//wIA//8CAP//AQAAAP////8AAAAAAQABAP////8AAP//AQACAAAAAQAAAAAAAAAAAAAA//8BAAAAAAD+/wAA/v///wEAAAD+//7///8CAP7/AAABAP3/AwAAAAAAAAABAAIAAAABAAAAAQABAAIAAAAAAP//AAAAAAEAAAACAAEAAAACAAAAAAABAAAAAwAAAAAAAAD+/wAAAQD9//////8BAAAA/v8AAAAAAAAAAAAAAAD//wMA/v8BAAEAAQACAAAA/v8BAP//AwABAAIAAQABAP//AQAAAAEAAAAAAAEA//8AAAAAAAD/////AAABAAEAAAAAAP////8AAAAAAAAAAAAA/v8AAP//AQAAAP//AAABAAIAAQAAAAAAAgABAAAA/////wAAAQABAP//AQABAAEA/////wAAAAAAAAAAAAABAAEAAQAAAAAAAAAAAAAA//8AAP7/AQD9/wAAAgD//wEAAQABAAEA/v8AAAEA/////wAAAAAAAP//AAABAAAAAAAAAAAA//8CAP//AAABAAEAAQABAAAA//8BAAIAAgD//wAA/v8AAAEAAAD///7/AAAAAAEAAAABAAAAAQABAAAAAQACAAAA///+/wAAAQABAP7////+/wAA//8AAAAAAgAAAP//AQD9/wAAAAD//wAA//8AAAAAAQAAAAAAAQD//wAAAAAAAP//AQABAAAA/v8CAP//AAD///////8AAAAAAAACAAEA//8BAP7/AAAAAAEA//8BAAAAAQD//wAAAQD+/wAA/////wAAAAD//wAAAQABAAAA//8AAAEA/////wAA//8AAAAA/v/+/wEAAgABAP//AgD//wIA/////wAA//8AAAEAAQAAAAAAAQAAAAMAAAACAP//", mu = {
  // tracks state of chat window, also the default state to load it in
  isOpen: !1,
  // configurations
  theme: {
    primaryColor: "#42b0c5",
    secondaryColor: "#491d8d",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    showHeader: !0,
    showFooter: !0,
    showInputRow: !0,
    actionDisabledIcon: Gs,
    embedded: !1,
    desktopEnabled: !0,
    mobileEnabled: !0,
    flowStartTrigger: "ON_LOAD"
  },
  tooltip: {
    mode: "CLOSE",
    text: "Talk to me! 😊"
  },
  chatButton: {
    icon: Ks
  },
  header: {
    title: /* @__PURE__ */ Y.jsx("div", { style: { cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold" }, onClick: () => window.open("https://github.com/tjtanjin/"), children: "Tan Jin" }),
    showAvatar: !0,
    avatar: Uu,
    closeChatIcon: rl
  },
  notification: {
    disabled: !1,
    defaultToggledOn: !0,
    volume: 0.2,
    icon: el,
    sound: cl,
    showCount: !0
  },
  audio: {
    disabled: !0,
    defaultToggledOn: !1,
    language: "en-US",
    voiceNames: ["Microsoft David - English (United States)", "Alex (English - United States)"],
    rate: 1,
    volume: 1,
    icon: ll
  },
  chatHistory: {
    disabled: !1,
    maxEntries: 30,
    storageKey: "rcb-history",
    viewChatHistoryButtonText: "Load Chat History ⟳",
    chatHistoryLineBreakText: "----- Previous Chat History -----",
    autoLoad: !1
  },
  chatInput: {
    disabled: !1,
    allowNewline: !1,
    enabledPlaceholderText: "Type your message...",
    disabledPlaceholderText: "",
    showCharacterCount: !1,
    characterLimit: -1,
    botDelay: 1e3,
    sendButtonIcon: Al,
    blockSpam: !0,
    sendOptionOutput: !0,
    sendCheckboxOutput: !0,
    sendAttachmentOutput: !0
  },
  chatWindow: {
    showScrollbar: !1,
    autoJumpToBottom: !1,
    showMessagePrompt: !0,
    messagePromptText: "New Messages ↓",
    messagePromptOffset: 30
  },
  sensitiveInput: {
    maskInTextArea: !0,
    maskInUserBubble: !0,
    asterisksCount: 10,
    hideInUserBubble: !1
  },
  userBubble: {
    animate: !0,
    showAvatar: !1,
    avatar: Xs,
    simStream: !1,
    streamSpeed: 30,
    dangerouslySetInnerHtml: !1
  },
  botBubble: {
    animate: !0,
    showAvatar: !1,
    avatar: Uu,
    simStream: !1,
    streamSpeed: 30,
    dangerouslySetInnerHtml: !1
  },
  voice: {
    disabled: !0,
    defaultToggledOn: !1,
    language: "en-US",
    timeoutPeriod: 1e4,
    autoSendDisabled: !1,
    autoSendPeriod: 1e3,
    sendAsAudio: !1,
    icon: il
  },
  footer: {
    text: /* @__PURE__ */ Y.jsxs(
      "div",
      {
        style: { cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", columnGap: 3 },
        onClick: () => window.open("https://react-chatbotify.tjtanjin.com"),
        children: [
          /* @__PURE__ */ Y.jsx("span", { children: "Powered By " }),
          /* @__PURE__ */ Y.jsx("img", { style: { width: 10, height: 10 }, src: Vs }),
          /* @__PURE__ */ Y.jsx("span", { style: { fontWeight: "bold" }, children: " React ChatBotify" })
        ]
      }
    )
  },
  fileAttachment: {
    disabled: !1,
    multiple: !0,
    accept: ".png",
    icon: _s,
    showMediaDisplay: !0
  },
  emoji: {
    disabled: !1,
    icon: ul,
    list: ["😀", "😃", "😄", "😅", "😊", "😌", "😇", "🙃", "🤣", "😍", "🥰", "🥳", "🎉", "🎈", "🚀", "⭐️"]
  },
  advance: {
    useCustomMessages: !1,
    useCustomBotOptions: !1,
    useCustomPaths: !1
  },
  // styles
  tooltipStyle: {},
  chatButtonStyle: {},
  notificationBadgeStyle: {},
  chatWindowStyle: {},
  headerStyle: {},
  bodyStyle: {},
  chatInputContainerStyle: {},
  chatInputAreaStyle: {},
  chatInputAreaFocusedStyle: {},
  chatInputAreaDisabledStyle: {},
  userBubbleStyle: {},
  botBubbleStyle: {},
  botOptionStyle: {},
  botOptionHoveredStyle: {},
  botCheckboxRowStyle: {},
  botCheckboxNextStyle: {},
  botCheckMarkStyle: {},
  botCheckMarkSelectedStyle: {},
  sendButtonStyle: {},
  sendButtonHoveredStyle: {},
  characterLimitStyle: {},
  characterLimitReachedStyle: {},
  chatHistoryButtonStyle: {},
  chatHistoryButtonHoveredStyle: {},
  chatHistoryLineBreakStyle: {},
  chatMessagePromptStyle: {},
  chatMessagePromptHoveredStyle: {},
  footerStyle: {},
  loadingSpinnerStyle: {},
  mediaDisplayContainerStyle: {}
}, hl = () => mu, fl = (j) => {
  var g, T;
  return j ? (((g = j.chatInput) == null ? void 0 : g.botDelay) != null && ((T = j.chatInput) == null ? void 0 : T.botDelay) < 500 && (j.chatInput.botDelay = 500), dl(j)) : mu;
}, dl = (j) => {
  const g = { ...mu };
  for (const T in j)
    typeof j[T] == "object" && j[T] !== null ? g[T] = { ...g[T], ...j[T] } : g[T] = j[T];
  return g;
}, yl = ({
  flow: j,
  options: g
}) => {
  var $;
  const [T, C] = Ve(fl(g)), [c, P] = Ve([]), [W, H] = Ve([]), N = j ?? ls, m = (te) => /* @__PURE__ */ Y.jsx(Ru.Provider, { value: { botOptions: T, setBotOptions: C }, children: te }), R = (te) => /* @__PURE__ */ Y.jsx(Vu.Provider, { value: { paths: W, setPaths: H }, children: te }), B = (te) => /* @__PURE__ */ Y.jsx(Yu.Provider, { value: { messages: c, setMessages: P }, children: te }), _ = () => {
    var V, k, ee;
    let te = /* @__PURE__ */ Y.jsx(Ws, { flow: N });
    return (V = T.advance) != null && V.useCustomMessages || (te = B(te)), (k = T.advance) != null && k.useCustomPaths || (te = R(te)), (ee = T.advance) != null && ee.useCustomBotOptions || (te = m(te)), te;
  }, he = () => {
    var te, V;
    return Qr && ((te = T.theme) == null ? void 0 : te.desktopEnabled) || !Qr && ((V = T.theme) == null ? void 0 : V.mobileEnabled);
  };
  return /* @__PURE__ */ Y.jsx(Y.Fragment, { children: he() && /* @__PURE__ */ Y.jsx("div", { style: { fontFamily: ($ = T.theme) == null ? void 0 : $.fontFamily }, children: _() }) });
};
export {
  Ru as BotOptionsContext,
  Yu as MessagesContext,
  Vu as PathsContext,
  yl as default,
  hl as getDefaultBotOptions
};
