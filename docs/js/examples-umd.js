/**
 * MIT License
 *
 * Copyright (c) 2020 Jay Wilson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ReactBootstrapCountrySelect = factory(global.React, global.ReactDOM));
}(this, (function (React, ReactDOM) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    }

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var classnames = createCommonjsModule(function (module) {
    /*!
      Copyright (c) 2018 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    /* global define */

    (function () {

    	var hasOwn = {}.hasOwnProperty;

    	function classNames() {
    		var classes = [];

    		for (var i = 0; i < arguments.length; i++) {
    			var arg = arguments[i];
    			if (!arg) continue;

    			var argType = typeof arg;

    			if (argType === 'string' || argType === 'number') {
    				classes.push(arg);
    			} else if (Array.isArray(arg)) {
    				if (arg.length) {
    					var inner = classNames.apply(null, arg);
    					if (inner) {
    						classes.push(inner);
    					}
    				}
    			} else if (argType === 'object') {
    				if (arg.toString === Object.prototype.toString) {
    					for (var key in arg) {
    						if (hasOwn.call(arg, key) && arg[key]) {
    							classes.push(key);
    						}
    					}
    				} else {
    					classes.push(arg.toString());
    				}
    			}
    		}

    		return classes.join(' ');
    	}

    	if (module.exports) {
    		classNames.default = classNames;
    		module.exports = classNames;
    	} else {
    		window.classNames = classNames;
    	}
    }());
    });

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }

    var ThemeContext = /*#__PURE__*/React__default['default'].createContext({});
    ThemeContext.Consumer;
        ThemeContext.Provider;

    function useBootstrapPrefix(prefix, defaultPrefix) {
      var prefixes = React.useContext(ThemeContext);
      return prefix || prefixes[defaultPrefix] || defaultPrefix;
    }

    /**
     * Returns the owner document of a given element.
     * 
     * @param node the element
     */
    function ownerDocument$1(node) {
      return node && node.ownerDocument || document;
    }

    /**
     * Returns the owner window of a given element.
     * 
     * @param node the element
     */

    function ownerWindow(node) {
      var doc = ownerDocument$1(node);
      return doc && doc.defaultView || window;
    }

    /**
     * Returns one or all computed style properties of an element.
     * 
     * @param node the element
     * @param psuedoElement the style property
     */

    function getComputedStyle$1(node, psuedoElement) {
      return ownerWindow(node).getComputedStyle(node, psuedoElement);
    }

    var rUpper = /([A-Z])/g;
    function hyphenate(string) {
      return string.replace(rUpper, '-$1').toLowerCase();
    }

    /**
     * Copyright 2013-2014, Facebook, Inc.
     * All rights reserved.
     * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
     */
    var msPattern = /^ms-/;
    function hyphenateStyleName(string) {
      return hyphenate(string).replace(msPattern, '-ms-');
    }

    var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
    function isTransform(value) {
      return !!(value && supportedTransforms.test(value));
    }

    function style(node, property) {
      var css = '';
      var transforms = '';

      if (typeof property === 'string') {
        return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle$1(node).getPropertyValue(hyphenateStyleName(property));
      }

      Object.keys(property).forEach(function (key) {
        var value = property[key];

        if (!value && value !== 0) {
          node.style.removeProperty(hyphenateStyleName(key));
        } else if (isTransform(key)) {
          transforms += key + "(" + value + ") ";
        } else {
          css += hyphenateStyleName(key) + ": " + value + ";";
        }
      });

      if (transforms) {
        css += "transform: " + transforms + ";";
      }

      node.style.cssText += ";" + css;
    }

    var reactIs_development = createCommonjsModule(function (module, exports) {



    {
      (function() {

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }

      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
      })();
    }
    });
    reactIs_development.AsyncMode;
    reactIs_development.ConcurrentMode;
    reactIs_development.ContextConsumer;
    reactIs_development.ContextProvider;
    reactIs_development.Element;
    reactIs_development.ForwardRef;
    reactIs_development.Fragment;
    reactIs_development.Lazy;
    reactIs_development.Memo;
    reactIs_development.Portal;
    reactIs_development.Profiler;
    reactIs_development.StrictMode;
    reactIs_development.Suspense;
    reactIs_development.isAsyncMode;
    reactIs_development.isConcurrentMode;
    reactIs_development.isContextConsumer;
    reactIs_development.isContextProvider;
    reactIs_development.isElement;
    reactIs_development.isForwardRef;
    reactIs_development.isFragment;
    reactIs_development.isLazy;
    reactIs_development.isMemo;
    reactIs_development.isPortal;
    reactIs_development.isProfiler;
    reactIs_development.isStrictMode;
    reactIs_development.isSuspense;
    reactIs_development.isValidElementType;
    reactIs_development.typeOf;

    var reactIs = createCommonjsModule(function (module) {

    {
      module.exports = reactIs_development;
    }
    });

    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    /* eslint-disable no-unused-vars */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
    	if (val === null || val === undefined) {
    		throw new TypeError('Object.assign cannot be called with null or undefined');
    	}

    	return Object(val);
    }

    function shouldUseNative() {
    	try {
    		if (!Object.assign) {
    			return false;
    		}

    		// Detect buggy property enumeration order in older V8 versions.

    		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
    		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
    		test1[5] = 'de';
    		if (Object.getOwnPropertyNames(test1)[0] === '5') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test2 = {};
    		for (var i = 0; i < 10; i++) {
    			test2['_' + String.fromCharCode(i)] = i;
    		}
    		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
    			return test2[n];
    		});
    		if (order2.join('') !== '0123456789') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test3 = {};
    		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
    			test3[letter] = letter;
    		});
    		if (Object.keys(Object.assign({}, test3)).join('') !==
    				'abcdefghijklmnopqrst') {
    			return false;
    		}

    		return true;
    	} catch (err) {
    		// We don't expect any of the above to throw, but better to be safe.
    		return false;
    	}
    }

    var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    	var from;
    	var to = toObject(target);
    	var symbols;

    	for (var s = 1; s < arguments.length; s++) {
    		from = Object(arguments[s]);

    		for (var key in from) {
    			if (hasOwnProperty.call(from, key)) {
    				to[key] = from[key];
    			}
    		}

    		if (getOwnPropertySymbols) {
    			symbols = getOwnPropertySymbols(from);
    			for (var i = 0; i < symbols.length; i++) {
    				if (propIsEnumerable.call(from, symbols[i])) {
    					to[symbols[i]] = from[symbols[i]];
    				}
    			}
    		}
    	}

    	return to;
    };

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

    var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

    var printWarning$2 = function() {};

    {
      var ReactPropTypesSecret = ReactPropTypesSecret_1;
      var loggedTypeFailures = {};
      var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

      printWarning$2 = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }

    /**
     * Assert that the values match with the type specs.
     * Error messages are memorized and will only be shown once.
     *
     * @param {object} typeSpecs Map of name to a ReactPropType
     * @param {object} values Runtime values that need to be type-checked
     * @param {string} location e.g. "prop", "context", "child context"
     * @param {string} componentName Name of the component for error messages.
     * @param {?Function} getStack Returns the component stack.
     * @private
     */
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      {
        for (var typeSpecName in typeSpecs) {
          if (has$1(typeSpecs, typeSpecName)) {
            var error;
            // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error(
                  (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
                );
                err.name = 'Invariant Violation';
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning$2(
                (componentName || 'React class') + ': type specification of ' +
                location + ' `' + typeSpecName + '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).'
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error.message] = true;

              var stack = getStack ? getStack() : '';

              printWarning$2(
                'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
              );
            }
          }
        }
      }
    }

    /**
     * Resets warning cache when testing.
     *
     * @private
     */
    checkPropTypes.resetWarningCache = function() {
      {
        loggedTypeFailures = {};
      }
    };

    var checkPropTypes_1 = checkPropTypes;

    var has = Function.call.bind(Object.prototype.hasOwnProperty);
    var printWarning$1 = function() {};

    {
      printWarning$1 = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }

    function emptyFunctionThatReturnsNull() {
      return null;
    }

    var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
      /* global Symbol */
      var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

      /**
       * Returns the iterator method function contained on the iterable object.
       *
       * Be sure to invoke the function with the iterable as context:
       *
       *     var iteratorFn = getIteratorFn(myIterable);
       *     if (iteratorFn) {
       *       var iterator = iteratorFn.call(myIterable);
       *       ...
       *     }
       *
       * @param {?object} maybeIterable
       * @return {?function}
       */
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
          return iteratorFn;
        }
      }

      /**
       * Collection of methods that allow declaration and validation of props that are
       * supplied to React components. Example usage:
       *
       *   var Props = require('ReactPropTypes');
       *   var MyArticle = React.createClass({
       *     propTypes: {
       *       // An optional string prop named "description".
       *       description: Props.string,
       *
       *       // A required enum prop named "category".
       *       category: Props.oneOf(['News','Photos']).isRequired,
       *
       *       // A prop named "dialog" that requires an instance of Dialog.
       *       dialog: Props.instanceOf(Dialog).isRequired
       *     },
       *     render: function() { ... }
       *   });
       *
       * A more formal specification of how these methods are used:
       *
       *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
       *   decl := ReactPropTypes.{type}(.isRequired)?
       *
       * Each and every declaration produces a function with the same signature. This
       * allows the creation of custom validation functions. For example:
       *
       *  var MyLink = React.createClass({
       *    propTypes: {
       *      // An optional string or URI prop named "href".
       *      href: function(props, propName, componentName) {
       *        var propValue = props[propName];
       *        if (propValue != null && typeof propValue !== 'string' &&
       *            !(propValue instanceof URI)) {
       *          return new Error(
       *            'Expected a string or an URI for ' + propName + ' in ' +
       *            componentName
       *          );
       *        }
       *      }
       *    },
       *    render: function() {...}
       *  });
       *
       * @internal
       */

      var ANONYMOUS = '<<anonymous>>';

      // Important!
      // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),

        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker,
      };

      /**
       * inlined Object.is polyfill to avoid requiring consumers ship their own
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
       */
      /*eslint-disable no-self-compare*/
      function is(x, y) {
        // SameValue algorithm
        if (x === y) {
          // Steps 1-5, 7-10
          // Steps 6.b-6.e: +0 != -0
          return x !== 0 || 1 / x === 1 / y;
        } else {
          // Step 6.a: NaN == NaN
          return x !== x && y !== y;
        }
      }
      /*eslint-enable no-self-compare*/

      /**
       * We use an Error-like object for backward compatibility as people may call
       * PropTypes directly and inspect their output. However, we don't use real
       * Errors anymore. We don't inspect their stack anyway, and creating them
       * is prohibitively expensive if they are created too often, such as what
       * happens in oneOfType() for any type before the one that matched.
       */
      function PropTypeError(message) {
        this.message = message;
        this.stack = '';
      }
      // Make `instanceof Error` still work for returned errors.
      PropTypeError.prototype = Error.prototype;

      function createChainableTypeChecker(validate) {
        {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;

          if (secret !== ReactPropTypesSecret_1) {
            if (throwOnDirectAccess) {
              // New behavior only for users of `prop-types` package
              var err = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
              );
              err.name = 'Invariant Violation';
              throw err;
            } else if (typeof console !== 'undefined') {
              // Old behavior for people using React.PropTypes
              var cacheKey = componentName + ':' + propName;
              if (
                !manualPropTypeCallCache[cacheKey] &&
                // Avoid spamming the console because they are often not actionable except for lib authors
                manualPropTypeWarningCount < 3
              ) {
                printWarning$1(
                  'You are manually calling a React.PropTypes validation ' +
                  'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
              }
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }

        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);

        return chainedCheckType;
      }

      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            // `propValue` being instance of, say, date/regexp, pass the 'object'
            // check, but we can offer a more precise error message here rather than
            // 'of type `object`'.
            var preciseType = getPreciseType(propValue);

            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }

      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!reactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          {
            if (arguments.length > 1) {
              printWarning$1(
                'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
                'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
              );
            } else {
              printWarning$1('Invalid argument supplied to oneOf, expected an array.');
            }
          }
          return emptyFunctionThatReturnsNull;
        }

        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }

          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === 'symbol') {
              return String(value);
            }
            return value;
          });
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
      }

      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') ;
          return emptyFunctionThatReturnsNull;
        }

        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== 'function') {
            printWarning$1(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
            );
            return emptyFunctionThatReturnsNull;
          }
        }

        function validate(props, propName, componentName, location, propFullName) {
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
              return null;
            }
          }

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
        }
        return createChainableTypeChecker(validate);
      }

      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          // We need to check all keys in case some are required but missing from
          // props.
          var allKeys = objectAssign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) {
              return new PropTypeError(
                'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
                '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error) {
              return error;
            }
          }
          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function isNode(propValue) {
        switch (typeof propValue) {
          case 'number':
          case 'string':
          case 'undefined':
            return true;
          case 'boolean':
            return !propValue;
          case 'object':
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }

            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                // Iterator will provide entry [k,v] tuples rather than values.
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }

            return true;
          default:
            return false;
        }
      }

      function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
          return true;
        }

        // falsy value can't be a Symbol
        if (!propValue) {
          return false;
        }

        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
          return true;
        }

        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
          return true;
        }

        return false;
      }

      // Equivalent of `typeof` but with special handling for array and regexp.
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return 'array';
        }
        if (propValue instanceof RegExp) {
          // Old webkits (at least until Android 4.0) return 'function' rather than
          // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
          // passes PropTypes.object.
          return 'object';
        }
        if (isSymbol(propType, propValue)) {
          return 'symbol';
        }
        return propType;
      }

      // This handles more types than `getPropType`. Only used for error messages.
      // See `createPrimitiveTypeChecker`.
      function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
          return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
          if (propValue instanceof Date) {
            return 'date';
          } else if (propValue instanceof RegExp) {
            return 'regexp';
          }
        }
        return propType;
      }

      // Returns a string that is postfixed to a warning about an invalid type.
      // For example, "undefined" or "of type array"
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case 'array':
          case 'object':
            return 'an ' + type;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + type;
          default:
            return type;
        }
      }

      // Returns class name of the object, if any.
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }

      ReactPropTypes.checkPropTypes = checkPropTypes_1;
      ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;

      return ReactPropTypes;
    };

    var propTypes$1 = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    {
      var ReactIs = reactIs;

      // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod
      var throwOnDirectAccess = true;
      module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
    }
    });

    var config = {
      disabled: false
    };

    var timeoutsShape = propTypes$1.oneOfType([propTypes$1.number, propTypes$1.shape({
      enter: propTypes$1.number,
      exit: propTypes$1.number,
      appear: propTypes$1.number
    }).isRequired]) ;
    propTypes$1.oneOfType([propTypes$1.string, propTypes$1.shape({
      enter: propTypes$1.string,
      exit: propTypes$1.string,
      active: propTypes$1.string
    }), propTypes$1.shape({
      enter: propTypes$1.string,
      enterDone: propTypes$1.string,
      enterActive: propTypes$1.string,
      exit: propTypes$1.string,
      exitDone: propTypes$1.string,
      exitActive: propTypes$1.string
    })]) ;

    var TransitionGroupContext = React__default['default'].createContext(null);

    var UNMOUNTED = 'unmounted';
    var EXITED = 'exited';
    var ENTERING = 'entering';
    var ENTERED = 'entered';
    var EXITING = 'exiting';
    /**
     * The Transition component lets you describe a transition from one component
     * state to another _over time_ with a simple declarative API. Most commonly
     * it's used to animate the mounting and unmounting of a component, but can also
     * be used to describe in-place transition states as well.
     *
     * ---
     *
     * **Note**: `Transition` is a platform-agnostic base component. If you're using
     * transitions in CSS, you'll probably want to use
     * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
     * instead. It inherits all the features of `Transition`, but contains
     * additional features necessary to play nice with CSS transitions (hence the
     * name of the component).
     *
     * ---
     *
     * By default the `Transition` component does not alter the behavior of the
     * component it renders, it only tracks "enter" and "exit" states for the
     * components. It's up to you to give meaning and effect to those states. For
     * example we can add styles to a component when it enters or exits:
     *
     * ```jsx
     * import { Transition } from 'react-transition-group';
     *
     * const duration = 300;
     *
     * const defaultStyle = {
     *   transition: `opacity ${duration}ms ease-in-out`,
     *   opacity: 0,
     * }
     *
     * const transitionStyles = {
     *   entering: { opacity: 1 },
     *   entered:  { opacity: 1 },
     *   exiting:  { opacity: 0 },
     *   exited:  { opacity: 0 },
     * };
     *
     * const Fade = ({ in: inProp }) => (
     *   <Transition in={inProp} timeout={duration}>
     *     {state => (
     *       <div style={{
     *         ...defaultStyle,
     *         ...transitionStyles[state]
     *       }}>
     *         I'm a fade Transition!
     *       </div>
     *     )}
     *   </Transition>
     * );
     * ```
     *
     * There are 4 main states a Transition can be in:
     *  - `'entering'`
     *  - `'entered'`
     *  - `'exiting'`
     *  - `'exited'`
     *
     * Transition state is toggled via the `in` prop. When `true` the component
     * begins the "Enter" stage. During this stage, the component will shift from
     * its current transition state, to `'entering'` for the duration of the
     * transition and then to the `'entered'` stage once it's complete. Let's take
     * the following example (we'll use the
     * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
     *
     * ```jsx
     * function App() {
     *   const [inProp, setInProp] = useState(false);
     *   return (
     *     <div>
     *       <Transition in={inProp} timeout={500}>
     *         {state => (
     *           // ...
     *         )}
     *       </Transition>
     *       <button onClick={() => setInProp(true)}>
     *         Click to Enter
     *       </button>
     *     </div>
     *   );
     * }
     * ```
     *
     * When the button is clicked the component will shift to the `'entering'` state
     * and stay there for 500ms (the value of `timeout`) before it finally switches
     * to `'entered'`.
     *
     * When `in` is `false` the same thing happens except the state moves from
     * `'exiting'` to `'exited'`.
     */

    var Transition = /*#__PURE__*/function (_React$Component) {
      _inheritsLoose(Transition, _React$Component);

      function Transition(props, context) {
        var _this;

        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;

        if (props.in) {
          if (appear) {
            initialStatus = EXITED;
            _this.appearStatus = ENTERING;
          } else {
            initialStatus = ENTERED;
          }
        } else {
          if (props.unmountOnExit || props.mountOnEnter) {
            initialStatus = UNMOUNTED;
          } else {
            initialStatus = EXITED;
          }
        }

        _this.state = {
          status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
      }

      Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;

        if (nextIn && prevState.status === UNMOUNTED) {
          return {
            status: EXITED
          };
        }

        return null;
      } // getSnapshotBeforeUpdate(prevProps) {
      //   let nextStatus = null
      //   if (prevProps !== this.props) {
      //     const { status } = this.state
      //     if (this.props.in) {
      //       if (status !== ENTERING && status !== ENTERED) {
      //         nextStatus = ENTERING
      //       }
      //     } else {
      //       if (status === ENTERING || status === ENTERED) {
      //         nextStatus = EXITING
      //       }
      //     }
      //   }
      //   return { nextStatus }
      // }
      ;

      var _proto = Transition.prototype;

      _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
      };

      _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;

        if (prevProps !== this.props) {
          var status = this.state.status;

          if (this.props.in) {
            if (status !== ENTERING && status !== ENTERED) {
              nextStatus = ENTERING;
            }
          } else {
            if (status === ENTERING || status === ENTERED) {
              nextStatus = EXITING;
            }
          }
        }

        this.updateStatus(false, nextStatus);
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
      };

      _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;

        if (timeout != null && typeof timeout !== 'number') {
          exit = timeout.exit;
          enter = timeout.enter; // TODO: remove fallback for next major

          appear = timeout.appear !== undefined ? timeout.appear : enter;
        }

        return {
          exit: exit,
          enter: enter,
          appear: appear
        };
      };

      _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
          mounting = false;
        }

        if (nextStatus !== null) {
          // nextStatus will always be ENTERING or EXITING.
          this.cancelNextCallback();

          if (nextStatus === ENTERING) {
            this.performEnter(mounting);
          } else {
            this.performExit();
          }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
          this.setState({
            status: UNMOUNTED
          });
        }
      };

      _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;

        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;

        var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM__default['default'].findDOMNode(this), appearing],
            maybeNode = _ref2[0],
            maybeAppearing = _ref2[1];

        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set

        if (!mounting && !enter || config.disabled) {
          this.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(maybeNode);
          });
          return;
        }

        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
          status: ENTERING
        }, function () {
          _this2.props.onEntering(maybeNode, maybeAppearing);

          _this2.onTransitionEnd(enterTimeout, function () {
            _this2.safeSetState({
              status: ENTERED
            }, function () {
              _this2.props.onEntered(maybeNode, maybeAppearing);
            });
          });
        });
      };

      _proto.performExit = function performExit() {
        var _this3 = this;

        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? undefined : ReactDOM__default['default'].findDOMNode(this); // no exit animation skip right to EXITED

        if (!exit || config.disabled) {
          this.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(maybeNode);
          });
          return;
        }

        this.props.onExit(maybeNode);
        this.safeSetState({
          status: EXITING
        }, function () {
          _this3.props.onExiting(maybeNode);

          _this3.onTransitionEnd(timeouts.exit, function () {
            _this3.safeSetState({
              status: EXITED
            }, function () {
              _this3.props.onExited(maybeNode);
            });
          });
        });
      };

      _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
          this.nextCallback.cancel();
          this.nextCallback = null;
        }
      };

      _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
      };

      _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;

        var active = true;

        this.nextCallback = function (event) {
          if (active) {
            active = false;
            _this4.nextCallback = null;
            callback(event);
          }
        };

        this.nextCallback.cancel = function () {
          active = false;
        };

        return this.nextCallback;
      };

      _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default['default'].findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

        if (!node || doesNotHaveTimeoutOrListener) {
          setTimeout(this.nextCallback, 0);
          return;
        }

        if (this.props.addEndListener) {
          var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
              maybeNode = _ref3[0],
              maybeNextCallback = _ref3[1];

          this.props.addEndListener(maybeNode, maybeNextCallback);
        }

        if (timeout != null) {
          setTimeout(this.nextCallback, timeout);
        }
      };

      _proto.render = function render() {
        var status = this.state.status;

        if (status === UNMOUNTED) {
          return null;
        }

        var _this$props = this.props,
            children = _this$props.children;
            _this$props.in;
            _this$props.mountOnEnter;
            _this$props.unmountOnExit;
            _this$props.appear;
            _this$props.enter;
            _this$props.exit;
            _this$props.timeout;
            _this$props.addEndListener;
            _this$props.onEnter;
            _this$props.onEntering;
            _this$props.onEntered;
            _this$props.onExit;
            _this$props.onExiting;
            _this$props.onExited;
            _this$props.nodeRef;
            var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

        return (
          /*#__PURE__*/
          // allows for nested Transitions
          React__default['default'].createElement(TransitionGroupContext.Provider, {
            value: null
          }, typeof children === 'function' ? children(status, childProps) : React__default['default'].cloneElement(React__default['default'].Children.only(children), childProps))
        );
      };

      return Transition;
    }(React__default['default'].Component);

    Transition.contextType = TransitionGroupContext;
    Transition.propTypes = {
      /**
       * A React reference to DOM element that need to transition:
       * https://stackoverflow.com/a/51127130/4671932
       *
       *   - When `nodeRef` prop is used, `node` is not passed to callback functions
       *      (e.g. `onEnter`) because user already has direct access to the node.
       *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
       *     `nodeRef` need to be provided to `Transition` with changed `key` prop
       *     (see
       *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
       */
      nodeRef: propTypes$1.shape({
        current: typeof Element === 'undefined' ? propTypes$1.any : function (propValue, key, componentName, location, propFullName, secret) {
          var value = propValue[key];
          return propTypes$1.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
        }
      }),

      /**
       * A `function` child can be used instead of a React element. This function is
       * called with the current transition status (`'entering'`, `'entered'`,
       * `'exiting'`, `'exited'`), which can be used to apply context
       * specific props to a component.
       *
       * ```jsx
       * <Transition in={this.state.in} timeout={150}>
       *   {state => (
       *     <MyComponent className={`fade fade-${state}`} />
       *   )}
       * </Transition>
       * ```
       */
      children: propTypes$1.oneOfType([propTypes$1.func.isRequired, propTypes$1.element.isRequired]).isRequired,

      /**
       * Show the component; triggers the enter or exit states
       */
      in: propTypes$1.bool,

      /**
       * By default the child component is mounted immediately along with
       * the parent `Transition` component. If you want to "lazy mount" the component on the
       * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
       * mounted, even on "exited", unless you also specify `unmountOnExit`.
       */
      mountOnEnter: propTypes$1.bool,

      /**
       * By default the child component stays mounted after it reaches the `'exited'` state.
       * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
       */
      unmountOnExit: propTypes$1.bool,

      /**
       * By default the child component does not perform the enter transition when
       * it first mounts, regardless of the value of `in`. If you want this
       * behavior, set both `appear` and `in` to `true`.
       *
       * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
       * > only adds an additional enter transition. However, in the
       * > `<CSSTransition>` component that first enter transition does result in
       * > additional `.appear-*` classes, that way you can choose to style it
       * > differently.
       */
      appear: propTypes$1.bool,

      /**
       * Enable or disable enter transitions.
       */
      enter: propTypes$1.bool,

      /**
       * Enable or disable exit transitions.
       */
      exit: propTypes$1.bool,

      /**
       * The duration of the transition, in milliseconds.
       * Required unless `addEndListener` is provided.
       *
       * You may specify a single timeout for all transitions:
       *
       * ```jsx
       * timeout={500}
       * ```
       *
       * or individually:
       *
       * ```jsx
       * timeout={{
       *  appear: 500,
       *  enter: 300,
       *  exit: 500,
       * }}
       * ```
       *
       * - `appear` defaults to the value of `enter`
       * - `enter` defaults to `0`
       * - `exit` defaults to `0`
       *
       * @type {number | { enter?: number, exit?: number, appear?: number }}
       */
      timeout: function timeout(props) {
        var pt = timeoutsShape;
        if (!props.addEndListener) pt = pt.isRequired;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return pt.apply(void 0, [props].concat(args));
      },

      /**
       * Add a custom transition end trigger. Called with the transitioning
       * DOM node and a `done` callback. Allows for more fine grained transition end
       * logic. Timeouts are still used as a fallback if provided.
       *
       * **Note**: when `nodeRef` prop is passed, `node` is not passed.
       *
       * ```jsx
       * addEndListener={(node, done) => {
       *   // use the css transitionend event to mark the finish of a transition
       *   node.addEventListener('transitionend', done, false);
       * }}
       * ```
       */
      addEndListener: propTypes$1.func,

      /**
       * Callback fired before the "entering" status is applied. An extra parameter
       * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
       *
       * **Note**: when `nodeRef` prop is passed, `node` is not passed.
       *
       * @type Function(node: HtmlElement, isAppearing: bool) -> void
       */
      onEnter: propTypes$1.func,

      /**
       * Callback fired after the "entering" status is applied. An extra parameter
       * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
       *
       * **Note**: when `nodeRef` prop is passed, `node` is not passed.
       *
       * @type Function(node: HtmlElement, isAppearing: bool)
       */
      onEntering: propTypes$1.func,

      /**
       * Callback fired after the "entered" status is applied. An extra parameter
       * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
       *
       * **Note**: when `nodeRef` prop is passed, `node` is not passed.
       *
       * @type Function(node: HtmlElement, isAppearing: bool) -> void
       */
      onEntered: propTypes$1.func,

      /**
       * Callback fired before the "exiting" status is applied.
       *
       * **Note**: when `nodeRef` prop is passed, `node` is not passed.
       *
       * @type Function(node: HtmlElement) -> void
       */
      onExit: propTypes$1.func,

      /**
       * Callback fired after the "exiting" status is applied.
       *
       * **Note**: when `nodeRef` prop is passed, `node` is not passed.
       *
       * @type Function(node: HtmlElement) -> void
       */
      onExiting: propTypes$1.func,

      /**
       * Callback fired after the "exited" status is applied.
       *
       * **Note**: when `nodeRef` prop is passed, `node` is not passed
       *
       * @type Function(node: HtmlElement) -> void
       */
      onExited: propTypes$1.func
    } ; // Name the function so it is clearer in the documentation

    function noop$1() {}

    Transition.defaultProps = {
      in: false,
      mountOnEnter: false,
      unmountOnExit: false,
      appear: false,
      enter: true,
      exit: true,
      onEnter: noop$1,
      onEntering: noop$1,
      onEntered: noop$1,
      onExit: noop$1,
      onExiting: noop$1,
      onExited: noop$1
    };
    Transition.UNMOUNTED = UNMOUNTED;
    Transition.EXITED = EXITED;
    Transition.ENTERING = ENTERING;
    Transition.ENTERED = ENTERED;
    Transition.EXITING = EXITING;

    var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

    /* eslint-disable no-return-assign */
    var optionsSupported = false;
    var onceSupported = false;

    try {
      var options = {
        get passive() {
          return optionsSupported = true;
        },

        get once() {
          // eslint-disable-next-line no-multi-assign
          return onceSupported = optionsSupported = true;
        }

      };

      if (canUseDOM) {
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, true);
      }
    } catch (e) {
      /* */
    }

    /**
     * An `addEventListener` ponyfill, supports the `once` option
     * 
     * @param node the element
     * @param eventName the event name
     * @param handle the handler
     * @param options event options
     */
    function addEventListener(node, eventName, handler, options) {
      if (options && typeof options !== 'boolean' && !onceSupported) {
        var once = options.once,
            capture = options.capture;
        var wrappedHandler = handler;

        if (!onceSupported && once) {
          wrappedHandler = handler.__once || function onceHandler(event) {
            this.removeEventListener(eventName, onceHandler, capture);
            handler.call(this, event);
          };

          handler.__once = wrappedHandler;
        }

        node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
      }

      node.addEventListener(eventName, handler, options);
    }

    /**
     * A `removeEventListener` ponyfill
     * 
     * @param node the element
     * @param eventName the event name
     * @param handle the handler
     * @param options event options
     */
    function removeEventListener(node, eventName, handler, options) {
      var capture = options && typeof options !== 'boolean' ? options.capture : options;
      node.removeEventListener(eventName, handler, capture);

      if (handler.__once) {
        node.removeEventListener(eventName, handler.__once, capture);
      }
    }

    function listen(node, eventName, handler, options) {
      addEventListener(node, eventName, handler, options);
      return function () {
        removeEventListener(node, eventName, handler, options);
      };
    }

    /**
     * Triggers an event on a given element.
     * 
     * @param node the element
     * @param eventName the event name to trigger
     * @param bubbles whether the event should bubble up
     * @param cancelable whether the event should be cancelable
     */
    function triggerEvent(node, eventName, bubbles, cancelable) {
      if (bubbles === void 0) {
        bubbles = false;
      }

      if (cancelable === void 0) {
        cancelable = true;
      }

      if (node) {
        var event = document.createEvent('HTMLEvents');
        event.initEvent(eventName, bubbles, cancelable);
        node.dispatchEvent(event);
      }
    }

    function parseDuration$1(node) {
      var str = style(node, 'transitionDuration') || '';
      var mult = str.indexOf('ms') === -1 ? 1000 : 1;
      return parseFloat(str) * mult;
    }

    function emulateTransitionEnd(element, duration, padding) {
      if (padding === void 0) {
        padding = 5;
      }

      var called = false;
      var handle = setTimeout(function () {
        if (!called) triggerEvent(element, 'transitionend', true);
      }, duration + padding);
      var remove = listen(element, 'transitionend', function () {
        called = true;
      }, {
        once: true
      });
      return function () {
        clearTimeout(handle);
        remove();
      };
    }

    function transitionEnd(element, handler, duration, padding) {
      if (duration == null) duration = parseDuration$1(element) || 0;
      var removeEmulate = emulateTransitionEnd(element, duration, padding);
      var remove = listen(element, 'transitionend', handler);
      return function () {
        removeEmulate();
        remove();
      };
    }

    function parseDuration(node, property) {
      var str = style(node, property) || '';
      var mult = str.indexOf('ms') === -1 ? 1000 : 1;
      return parseFloat(str) * mult;
    }

    function transitionEndListener(element, handler) {
      var duration = parseDuration(element, 'transitionDuration');
      var delay = parseDuration(element, 'transitionDelay');
      var remove = transitionEnd(element, function (e) {
        if (e.target === element) {
          remove();
          handler(e);
        }
      }, duration + delay);
    }

    // reading a dimension prop will cause the browser to recalculate,
    // which will let our animations work
    function triggerBrowserReflow(node) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      node.offsetHeight;
    }

    /**
     * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
     * value is the one rendered with. Generally only required for Concurrent mode usage
     * where previous work in `render()` may be discarded befor being used.
     *
     * This is safe to access in an event handler.
     *
     * @param value The `Ref` value
     */

    function useCommittedRef(value) {
      var ref = React.useRef(value);
      React.useEffect(function () {
        ref.current = value;
      }, [value]);
      return ref;
    }

    function useEventCallback(fn) {
      var ref = useCommittedRef(fn);
      return React.useCallback(function () {
        return ref.current && ref.current.apply(ref, arguments);
      }, [ref]);
    }

    var _excluded$5 = ["className", "children"];

    var _fadeStyles;
    var defaultProps$1 = {
      in: false,
      timeout: 300,
      mountOnEnter: false,
      unmountOnExit: false,
      appear: false
    };
    var fadeStyles = (_fadeStyles = {}, _fadeStyles[ENTERING] = 'show', _fadeStyles[ENTERED] = 'show', _fadeStyles);
    var Fade = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
      var className = _ref.className,
          children = _ref.children,
          props = _objectWithoutPropertiesLoose(_ref, _excluded$5);

      var handleEnter = React.useCallback(function (node) {
        triggerBrowserReflow(node);
        if (props.onEnter) props.onEnter(node);
      }, [props]);
      return /*#__PURE__*/React__default['default'].createElement(Transition, _extends({
        ref: ref,
        addEndListener: transitionEndListener
      }, props, {
        onEnter: handleEnter
      }), function (status, innerProps) {
        return /*#__PURE__*/React__default['default'].cloneElement(children, _extends({}, innerProps, {
          className: classnames('fade', className, children.props.className, fadeStyles[status])
        }));
      });
    });
    Fade.defaultProps = defaultProps$1;
    Fade.displayName = 'Fade';

    var rHyphen = /-(.)/g;
    function camelize(string) {
      return string.replace(rHyphen, function (_, chr) {
        return chr.toUpperCase();
      });
    }

    var _excluded$4 = ["className", "bsPrefix", "as"];

    var pascalCase = function pascalCase(str) {
      return str[0].toUpperCase() + camelize(str).slice(1);
    };

    // TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
    function createWithBsPrefix(prefix, _temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          _ref$displayName = _ref.displayName,
          displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
          Component = _ref.Component,
          defaultProps = _ref.defaultProps;

      var BsComponent = /*#__PURE__*/React__default['default'].forwardRef(function (_ref2, ref) {
        var className = _ref2.className,
            bsPrefix = _ref2.bsPrefix,
            _ref2$as = _ref2.as,
            Tag = _ref2$as === void 0 ? Component || 'div' : _ref2$as,
            props = _objectWithoutPropertiesLoose(_ref2, _excluded$4);

        var resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
        return /*#__PURE__*/React__default['default'].createElement(Tag, _extends({
          ref: ref,
          className: classnames(className, resolvedPrefix)
        }, props));
      });
      BsComponent.defaultProps = defaultProps;
      BsComponent.displayName = displayName;
      return BsComponent;
    }

    /**
     * Track whether a component is current mounted. Generally less preferable than
     * properlly canceling effects so they don't run after a component is unmounted,
     * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
     *
     * @returns a function that returns the current isMounted state of the component
     *
     * ```ts
     * const [data, setData] = useState(null)
     * const isMounted = useMounted()
     *
     * useEffect(() => {
     *   fetchdata().then((newData) => {
     *      if (isMounted()) {
     *        setData(newData);
     *      }
     *   })
     * })
     * ```
     */

    function useMounted() {
      var mounted = React.useRef(true);
      var isMounted = React.useRef(function () {
        return mounted.current;
      });
      React.useEffect(function () {
        return function () {
          mounted.current = false;
        };
      }, []);
      return isMounted.current;
    }

    /**
     * A convenience hook around `useState` designed to be paired with
     * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
     * Callback refs are useful over `useRef()` when you need to respond to the ref being set
     * instead of lazily accessing it in an effect.
     *
     * ```ts
     * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
     *
     * useEffect(() => {
     *   if (!element) return
     *
     *   const calendar = new FullCalendar.Calendar(element)
     *
     *   return () => {
     *     calendar.destroy()
     *   }
     * }, [element])
     *
     * return <div ref={attachRef} />
     * ```
     *
     * @category refs
     */

    function useCallbackRef() {
      return React.useState(null);
    }

    function useSafeState(state) {
      var isMounted = useMounted();
      return [state[0], React.useCallback(function (nextState) {
        if (!isMounted()) return;
        return state[1](nextState);
      }, [isMounted, state[1]])];
    }

    var top = 'top';
    var bottom = 'bottom';
    var right = 'right';
    var left = 'left';
    var auto = 'auto';
    var basePlacements = [top, bottom, right, left];
    var start = 'start';
    var end = 'end';
    var clippingParents = 'clippingParents';
    var viewport = 'viewport';
    var popper = 'popper';
    var reference = 'reference';
    var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
      return acc.concat([placement + "-" + start, placement + "-" + end]);
    }, []);
    var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
      return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
    }, []); // modifiers that need to read the DOM

    var beforeRead = 'beforeRead';
    var read = 'read';
    var afterRead = 'afterRead'; // pure-logic modifiers

    var beforeMain = 'beforeMain';
    var main = 'main';
    var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

    var beforeWrite = 'beforeWrite';
    var write = 'write';
    var afterWrite = 'afterWrite';
    var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

    function getBasePlacement(placement) {
      return placement.split('-')[0];
    }

    function getBoundingClientRect(element) {
      var rect = element.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        x: rect.left,
        y: rect.top
      };
    }

    // means it doesn't take into account transforms.

    function getLayoutRect(element) {
      var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
      // Fixes https://github.com/popperjs/popper-core/issues/1223

      var width = element.offsetWidth;
      var height = element.offsetHeight;

      if (Math.abs(clientRect.width - width) <= 1) {
        width = clientRect.width;
      }

      if (Math.abs(clientRect.height - height) <= 1) {
        height = clientRect.height;
      }

      return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
      };
    }

    function getWindow(node) {
      if (node == null) {
        return window;
      }

      if (node.toString() !== '[object Window]') {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
      }

      return node;
    }

    function isElement(node) {
      var OwnElement = getWindow(node).Element;
      return node instanceof OwnElement || node instanceof Element;
    }

    function isHTMLElement(node) {
      var OwnElement = getWindow(node).HTMLElement;
      return node instanceof OwnElement || node instanceof HTMLElement;
    }

    function isShadowRoot(node) {
      // IE 11 has no ShadowRoot
      if (typeof ShadowRoot === 'undefined') {
        return false;
      }

      var OwnElement = getWindow(node).ShadowRoot;
      return node instanceof OwnElement || node instanceof ShadowRoot;
    }

    function contains$1(parent, child) {
      var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

      if (parent.contains(child)) {
        return true;
      } // then fallback to custom implementation with Shadow DOM support
      else if (rootNode && isShadowRoot(rootNode)) {
          var next = child;

          do {
            if (next && parent.isSameNode(next)) {
              return true;
            } // $FlowFixMe[prop-missing]: need a better way to handle this...


            next = next.parentNode || next.host;
          } while (next);
        } // Give up, the result is false


      return false;
    }

    function getNodeName(element) {
      return element ? (element.nodeName || '').toLowerCase() : null;
    }

    function getComputedStyle(element) {
      return getWindow(element).getComputedStyle(element);
    }

    function isTableElement(element) {
      return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
    }

    function getDocumentElement(element) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
      element.document) || window.document).documentElement;
    }

    function getParentNode(element) {
      if (getNodeName(element) === 'html') {
        return element;
      }

      return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
        // $FlowFixMe[incompatible-return]
        // $FlowFixMe[prop-missing]
        element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
        element.parentNode || ( // DOM Element detected
        isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
        // $FlowFixMe[incompatible-call]: HTMLElement is a Node
        getDocumentElement(element) // fallback

      );
    }

    function getTrueOffsetParent(element) {
      if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
      getComputedStyle(element).position === 'fixed') {
        return null;
      }

      return element.offsetParent;
    } // `.offsetParent` reports `null` for fixed elements, while absolute elements
    // return the containing block


    function getContainingBlock(element) {
      var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
      var isIE = navigator.userAgent.indexOf('Trident') !== -1;

      if (isIE && isHTMLElement(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = getComputedStyle(element);

        if (elementCss.position === 'fixed') {
          return null;
        }
      }

      var currentNode = getParentNode(element);

      while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
        var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

        if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
          return currentNode;
        } else {
          currentNode = currentNode.parentNode;
        }
      }

      return null;
    } // Gets the closest ancestor positioned element. Handles some edge cases,
    // such as table ancestors and cross browser bugs.


    function getOffsetParent(element) {
      var window = getWindow(element);
      var offsetParent = getTrueOffsetParent(element);

      while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
        offsetParent = getTrueOffsetParent(offsetParent);
      }

      if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
        return window;
      }

      return offsetParent || getContainingBlock(element) || window;
    }

    function getMainAxisFromPlacement(placement) {
      return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
    }

    var max = Math.max;
    var min = Math.min;
    var round = Math.round;

    function within(min$1, value, max$1) {
      return max(min$1, min(value, max$1));
    }

    function getFreshSideObject() {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    }

    function mergePaddingObject(paddingObject) {
      return Object.assign({}, getFreshSideObject(), paddingObject);
    }

    function expandToHashMap(value, keys) {
      return keys.reduce(function (hashMap, key) {
        hashMap[key] = value;
        return hashMap;
      }, {});
    }

    var toPaddingObject = function toPaddingObject(padding, state) {
      padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
        placement: state.placement
      })) : padding;
      return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    };

    function arrow(_ref) {
      var _state$modifiersData$;

      var state = _ref.state,
          name = _ref.name,
          options = _ref.options;
      var arrowElement = state.elements.arrow;
      var popperOffsets = state.modifiersData.popperOffsets;
      var basePlacement = getBasePlacement(state.placement);
      var axis = getMainAxisFromPlacement(basePlacement);
      var isVertical = [left, right].indexOf(basePlacement) >= 0;
      var len = isVertical ? 'height' : 'width';

      if (!arrowElement || !popperOffsets) {
        return;
      }

      var paddingObject = toPaddingObject(options.padding, state);
      var arrowRect = getLayoutRect(arrowElement);
      var minProp = axis === 'y' ? top : left;
      var maxProp = axis === 'y' ? bottom : right;
      var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
      var startDiff = popperOffsets[axis] - state.rects.reference[axis];
      var arrowOffsetParent = getOffsetParent(arrowElement);
      var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
      var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
      // outside of the popper bounds

      var min = paddingObject[minProp];
      var max = clientSize - arrowRect[len] - paddingObject[maxProp];
      var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
      var offset = within(min, center, max); // Prevents breaking syntax highlighting...

      var axisProp = axis;
      state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
    }

    function effect$1(_ref2) {
      var state = _ref2.state,
          options = _ref2.options;
      var _options$element = options.element,
          arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

      if (arrowElement == null) {
        return;
      } // CSS selector


      if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);

        if (!arrowElement) {
          return;
        }
      }

      {
        if (!isHTMLElement(arrowElement)) {
          console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
        }
      }

      if (!contains$1(state.elements.popper, arrowElement)) {
        {
          console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
        }

        return;
      }

      state.elements.arrow = arrowElement;
    } // eslint-disable-next-line import/no-unused-modules


    var arrow$1 = {
      name: 'arrow',
      enabled: true,
      phase: 'main',
      fn: arrow,
      effect: effect$1,
      requires: ['popperOffsets'],
      requiresIfExists: ['preventOverflow']
    };

    var unsetSides = {
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto'
    }; // Round the offsets to the nearest suitable subpixel based on the DPR.
    // Zooming can change the DPR, but it seems to report a value that will
    // cleanly divide the values into the appropriate subpixels.

    function roundOffsetsByDPR(_ref) {
      var x = _ref.x,
          y = _ref.y;
      var win = window;
      var dpr = win.devicePixelRatio || 1;
      return {
        x: round(round(x * dpr) / dpr) || 0,
        y: round(round(y * dpr) / dpr) || 0
      };
    }

    function mapToStyles(_ref2) {
      var _Object$assign2;

      var popper = _ref2.popper,
          popperRect = _ref2.popperRect,
          placement = _ref2.placement,
          offsets = _ref2.offsets,
          position = _ref2.position,
          gpuAcceleration = _ref2.gpuAcceleration,
          adaptive = _ref2.adaptive,
          roundOffsets = _ref2.roundOffsets;

      var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
          _ref3$x = _ref3.x,
          x = _ref3$x === void 0 ? 0 : _ref3$x,
          _ref3$y = _ref3.y,
          y = _ref3$y === void 0 ? 0 : _ref3$y;

      var hasX = offsets.hasOwnProperty('x');
      var hasY = offsets.hasOwnProperty('y');
      var sideX = left;
      var sideY = top;
      var win = window;

      if (adaptive) {
        var offsetParent = getOffsetParent(popper);
        var heightProp = 'clientHeight';
        var widthProp = 'clientWidth';

        if (offsetParent === getWindow(popper)) {
          offsetParent = getDocumentElement(popper);

          if (getComputedStyle(offsetParent).position !== 'static') {
            heightProp = 'scrollHeight';
            widthProp = 'scrollWidth';
          }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


        offsetParent = offsetParent;

        if (placement === top) {
          sideY = bottom; // $FlowFixMe[prop-missing]

          y -= offsetParent[heightProp] - popperRect.height;
          y *= gpuAcceleration ? 1 : -1;
        }

        if (placement === left) {
          sideX = right; // $FlowFixMe[prop-missing]

          x -= offsetParent[widthProp] - popperRect.width;
          x *= gpuAcceleration ? 1 : -1;
        }
      }

      var commonStyles = Object.assign({
        position: position
      }, adaptive && unsetSides);

      if (gpuAcceleration) {
        var _Object$assign;

        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
      }

      return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
    }

    function computeStyles(_ref4) {
      var state = _ref4.state,
          options = _ref4.options;
      var _options$gpuAccelerat = options.gpuAcceleration,
          gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
          _options$adaptive = options.adaptive,
          adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
          _options$roundOffsets = options.roundOffsets,
          roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

      {
        var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';

        if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
          return transitionProperty.indexOf(property) >= 0;
        })) {
          console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
        }
      }

      var commonStyles = {
        placement: getBasePlacement(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration
      };

      if (state.modifiersData.popperOffsets != null) {
        state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.popperOffsets,
          position: state.options.strategy,
          adaptive: adaptive,
          roundOffsets: roundOffsets
        })));
      }

      if (state.modifiersData.arrow != null) {
        state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.arrow,
          position: 'absolute',
          adaptive: false,
          roundOffsets: roundOffsets
        })));
      }

      state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-placement': state.placement
      });
    } // eslint-disable-next-line import/no-unused-modules


    var computeStyles$1 = {
      name: 'computeStyles',
      enabled: true,
      phase: 'beforeWrite',
      fn: computeStyles,
      data: {}
    };

    var passive = {
      passive: true
    };

    function effect(_ref) {
      var state = _ref.state,
          instance = _ref.instance,
          options = _ref.options;
      var _options$scroll = options.scroll,
          scroll = _options$scroll === void 0 ? true : _options$scroll,
          _options$resize = options.resize,
          resize = _options$resize === void 0 ? true : _options$resize;
      var window = getWindow(state.elements.popper);
      var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.addEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.addEventListener('resize', instance.update, passive);
      }

      return function () {
        if (scroll) {
          scrollParents.forEach(function (scrollParent) {
            scrollParent.removeEventListener('scroll', instance.update, passive);
          });
        }

        if (resize) {
          window.removeEventListener('resize', instance.update, passive);
        }
      };
    } // eslint-disable-next-line import/no-unused-modules


    var eventListeners = {
      name: 'eventListeners',
      enabled: true,
      phase: 'write',
      fn: function fn() {},
      effect: effect,
      data: {}
    };

    var hash$1 = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    function getOppositePlacement(placement) {
      return placement.replace(/left|right|bottom|top/g, function (matched) {
        return hash$1[matched];
      });
    }

    var hash = {
      start: 'end',
      end: 'start'
    };
    function getOppositeVariationPlacement(placement) {
      return placement.replace(/start|end/g, function (matched) {
        return hash[matched];
      });
    }

    function getWindowScroll(node) {
      var win = getWindow(node);
      var scrollLeft = win.pageXOffset;
      var scrollTop = win.pageYOffset;
      return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      };
    }

    function getWindowScrollBarX(element) {
      // If <html> has a CSS width greater than the viewport, then this will be
      // incorrect for RTL.
      // Popper 1 is broken in this case and never had a bug report so let's assume
      // it's not an issue. I don't think anyone ever specifies width on <html>
      // anyway.
      // Browsers where the left scrollbar doesn't cause an issue report `0` for
      // this (e.g. Edge 2019, IE11, Safari)
      return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
    }

    function getViewportRect(element) {
      var win = getWindow(element);
      var html = getDocumentElement(element);
      var visualViewport = win.visualViewport;
      var width = html.clientWidth;
      var height = html.clientHeight;
      var x = 0;
      var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
      // can be obscured underneath it.
      // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
      // if it isn't open, so if this isn't available, the popper will be detected
      // to overflow the bottom of the screen too early.

      if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
        // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
        // errors due to floating point numbers, so we need to check precision.
        // Safari returns a number <= 0, usually < -1 when pinch-zoomed
        // Feature detection fails in mobile emulation mode in Chrome.
        // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
        // 0.001
        // Fallback here: "Not Safari" userAgent

        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
          x = visualViewport.offsetLeft;
          y = visualViewport.offsetTop;
        }
      }

      return {
        width: width,
        height: height,
        x: x + getWindowScrollBarX(element),
        y: y
      };
    }

    // of the `<html>` and `<body>` rect bounds if horizontally scrollable

    function getDocumentRect(element) {
      var _element$ownerDocumen;

      var html = getDocumentElement(element);
      var winScroll = getWindowScroll(element);
      var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
      var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
      var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
      var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
      var y = -winScroll.scrollTop;

      if (getComputedStyle(body || html).direction === 'rtl') {
        x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
      }

      return {
        width: width,
        height: height,
        x: x,
        y: y
      };
    }

    function isScrollParent(element) {
      // Firefox wants us to check `-x` and `-y` variations as well
      var _getComputedStyle = getComputedStyle(element),
          overflow = _getComputedStyle.overflow,
          overflowX = _getComputedStyle.overflowX,
          overflowY = _getComputedStyle.overflowY;

      return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
    }

    function getScrollParent(node) {
      if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
        // $FlowFixMe[incompatible-return]: assume body is always available
        return node.ownerDocument.body;
      }

      if (isHTMLElement(node) && isScrollParent(node)) {
        return node;
      }

      return getScrollParent(getParentNode(node));
    }

    /*
    given a DOM element, return the list of all scroll parents, up the list of ancesors
    until we get to the top window object. This list is what we attach scroll listeners
    to, because if any of these parent elements scroll, we'll need to re-calculate the
    reference element's position.
    */

    function listScrollParents(element, list) {
      var _element$ownerDocumen;

      if (list === void 0) {
        list = [];
      }

      var scrollParent = getScrollParent(element);
      var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
      var win = getWindow(scrollParent);
      var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
      var updatedList = list.concat(target);
      return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)));
    }

    function rectToClientRect(rect) {
      return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
      });
    }

    function getInnerBoundingClientRect(element) {
      var rect = getBoundingClientRect(element);
      rect.top = rect.top + element.clientTop;
      rect.left = rect.left + element.clientLeft;
      rect.bottom = rect.top + element.clientHeight;
      rect.right = rect.left + element.clientWidth;
      rect.width = element.clientWidth;
      rect.height = element.clientHeight;
      rect.x = rect.left;
      rect.y = rect.top;
      return rect;
    }

    function getClientRectFromMixedType(element, clippingParent) {
      return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
    } // A "clipping parent" is an overflowable container with the characteristic of
    // clipping (or hiding) overflowing elements with a position different from
    // `initial`


    function getClippingParents(element) {
      var clippingParents = listScrollParents(getParentNode(element));
      var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
      var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

      if (!isElement(clipperElement)) {
        return [];
      } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


      return clippingParents.filter(function (clippingParent) {
        return isElement(clippingParent) && contains$1(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
      });
    } // Gets the maximum area that the element is visible in due to any number of
    // clipping parents


    function getClippingRect(element, boundary, rootBoundary) {
      var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
      var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
      var firstClippingParent = clippingParents[0];
      var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent);
        accRect.top = max(rect.top, accRect.top);
        accRect.right = min(rect.right, accRect.right);
        accRect.bottom = min(rect.bottom, accRect.bottom);
        accRect.left = max(rect.left, accRect.left);
        return accRect;
      }, getClientRectFromMixedType(element, firstClippingParent));
      clippingRect.width = clippingRect.right - clippingRect.left;
      clippingRect.height = clippingRect.bottom - clippingRect.top;
      clippingRect.x = clippingRect.left;
      clippingRect.y = clippingRect.top;
      return clippingRect;
    }

    function getVariation(placement) {
      return placement.split('-')[1];
    }

    function computeOffsets(_ref) {
      var reference = _ref.reference,
          element = _ref.element,
          placement = _ref.placement;
      var basePlacement = placement ? getBasePlacement(placement) : null;
      var variation = placement ? getVariation(placement) : null;
      var commonX = reference.x + reference.width / 2 - element.width / 2;
      var commonY = reference.y + reference.height / 2 - element.height / 2;
      var offsets;

      switch (basePlacement) {
        case top:
          offsets = {
            x: commonX,
            y: reference.y - element.height
          };
          break;

        case bottom:
          offsets = {
            x: commonX,
            y: reference.y + reference.height
          };
          break;

        case right:
          offsets = {
            x: reference.x + reference.width,
            y: commonY
          };
          break;

        case left:
          offsets = {
            x: reference.x - element.width,
            y: commonY
          };
          break;

        default:
          offsets = {
            x: reference.x,
            y: reference.y
          };
      }

      var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

      if (mainAxis != null) {
        var len = mainAxis === 'y' ? 'height' : 'width';

        switch (variation) {
          case start:
            offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
            break;

          case end:
            offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
            break;
        }
      }

      return offsets;
    }

    function detectOverflow(state, options) {
      if (options === void 0) {
        options = {};
      }

      var _options = options,
          _options$placement = _options.placement,
          placement = _options$placement === void 0 ? state.placement : _options$placement,
          _options$boundary = _options.boundary,
          boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
          _options$rootBoundary = _options.rootBoundary,
          rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
          _options$elementConte = _options.elementContext,
          elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
          _options$altBoundary = _options.altBoundary,
          altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
          _options$padding = _options.padding,
          padding = _options$padding === void 0 ? 0 : _options$padding;
      var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
      var altContext = elementContext === popper ? reference : popper;
      var referenceElement = state.elements.reference;
      var popperRect = state.rects.popper;
      var element = state.elements[altBoundary ? altContext : elementContext];
      var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
      var referenceClientRect = getBoundingClientRect(referenceElement);
      var popperOffsets = computeOffsets({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement: placement
      });
      var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
      var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
      // 0 or negative = within the clipping rect

      var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
      };
      var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

      if (elementContext === popper && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function (key) {
          var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
          var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
          overflowOffsets[key] += offset[axis] * multiply;
        });
      }

      return overflowOffsets;
    }

    function computeAutoPlacement(state, options) {
      if (options === void 0) {
        options = {};
      }

      var _options = options,
          placement = _options.placement,
          boundary = _options.boundary,
          rootBoundary = _options.rootBoundary,
          padding = _options.padding,
          flipVariations = _options.flipVariations,
          _options$allowedAutoP = _options.allowedAutoPlacements,
          allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
      var variation = getVariation(placement);
      var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
        return getVariation(placement) === variation;
      }) : basePlacements;
      var allowedPlacements = placements$1.filter(function (placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
      });

      if (allowedPlacements.length === 0) {
        allowedPlacements = placements$1;

        {
          console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
        }
      } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


      var overflows = allowedPlacements.reduce(function (acc, placement) {
        acc[placement] = detectOverflow(state, {
          placement: placement,
          boundary: boundary,
          rootBoundary: rootBoundary,
          padding: padding
        })[getBasePlacement(placement)];
        return acc;
      }, {});
      return Object.keys(overflows).sort(function (a, b) {
        return overflows[a] - overflows[b];
      });
    }

    function getExpandedFallbackPlacements(placement) {
      if (getBasePlacement(placement) === auto) {
        return [];
      }

      var oppositePlacement = getOppositePlacement(placement);
      return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
    }

    function flip(_ref) {
      var state = _ref.state,
          options = _ref.options,
          name = _ref.name;

      if (state.modifiersData[name]._skip) {
        return;
      }

      var _options$mainAxis = options.mainAxis,
          checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
          _options$altAxis = options.altAxis,
          checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
          specifiedFallbackPlacements = options.fallbackPlacements,
          padding = options.padding,
          boundary = options.boundary,
          rootBoundary = options.rootBoundary,
          altBoundary = options.altBoundary,
          _options$flipVariatio = options.flipVariations,
          flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
          allowedAutoPlacements = options.allowedAutoPlacements;
      var preferredPlacement = state.options.placement;
      var basePlacement = getBasePlacement(preferredPlacement);
      var isBasePlacement = basePlacement === preferredPlacement;
      var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
      var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
        return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
          placement: placement,
          boundary: boundary,
          rootBoundary: rootBoundary,
          padding: padding,
          flipVariations: flipVariations,
          allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
      }, []);
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var checksMap = new Map();
      var makeFallbackChecks = true;
      var firstFittingPlacement = placements[0];

      for (var i = 0; i < placements.length; i++) {
        var placement = placements[i];

        var _basePlacement = getBasePlacement(placement);

        var isStartVariation = getVariation(placement) === start;
        var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
        var len = isVertical ? 'width' : 'height';
        var overflow = detectOverflow(state, {
          placement: placement,
          boundary: boundary,
          rootBoundary: rootBoundary,
          altBoundary: altBoundary,
          padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

        if (referenceRect[len] > popperRect[len]) {
          mainVariationSide = getOppositePlacement(mainVariationSide);
        }

        var altVariationSide = getOppositePlacement(mainVariationSide);
        var checks = [];

        if (checkMainAxis) {
          checks.push(overflow[_basePlacement] <= 0);
        }

        if (checkAltAxis) {
          checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        }

        if (checks.every(function (check) {
          return check;
        })) {
          firstFittingPlacement = placement;
          makeFallbackChecks = false;
          break;
        }

        checksMap.set(placement, checks);
      }

      if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;

        var _loop = function _loop(_i) {
          var fittingPlacement = placements.find(function (placement) {
            var checks = checksMap.get(placement);

            if (checks) {
              return checks.slice(0, _i).every(function (check) {
                return check;
              });
            }
          });

          if (fittingPlacement) {
            firstFittingPlacement = fittingPlacement;
            return "break";
          }
        };

        for (var _i = numberOfChecks; _i > 0; _i--) {
          var _ret = _loop(_i);

          if (_ret === "break") break;
        }
      }

      if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
      }
    } // eslint-disable-next-line import/no-unused-modules


    var flip$1 = {
      name: 'flip',
      enabled: true,
      phase: 'main',
      fn: flip,
      requiresIfExists: ['offset'],
      data: {
        _skip: false
      }
    };

    function getSideOffsets(overflow, rect, preventedOffsets) {
      if (preventedOffsets === void 0) {
        preventedOffsets = {
          x: 0,
          y: 0
        };
      }

      return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
      };
    }

    function isAnySideFullyClipped(overflow) {
      return [top, right, bottom, left].some(function (side) {
        return overflow[side] >= 0;
      });
    }

    function hide(_ref) {
      var state = _ref.state,
          name = _ref.name;
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var preventedOffsets = state.modifiersData.preventOverflow;
      var referenceOverflow = detectOverflow(state, {
        elementContext: 'reference'
      });
      var popperAltOverflow = detectOverflow(state, {
        altBoundary: true
      });
      var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
      var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
      var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
      var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
      state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
      };
      state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-reference-hidden': isReferenceHidden,
        'data-popper-escaped': hasPopperEscaped
      });
    } // eslint-disable-next-line import/no-unused-modules


    var hide$1 = {
      name: 'hide',
      enabled: true,
      phase: 'main',
      requiresIfExists: ['preventOverflow'],
      fn: hide
    };

    function distanceAndSkiddingToXY(placement, rects, offset) {
      var basePlacement = getBasePlacement(placement);
      var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

      var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
        placement: placement
      })) : offset,
          skidding = _ref[0],
          distance = _ref[1];

      skidding = skidding || 0;
      distance = (distance || 0) * invertDistance;
      return [left, right].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
      } : {
        x: skidding,
        y: distance
      };
    }

    function offset(_ref2) {
      var state = _ref2.state,
          options = _ref2.options,
          name = _ref2.name;
      var _options$offset = options.offset,
          offset = _options$offset === void 0 ? [0, 0] : _options$offset;
      var data = placements.reduce(function (acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
      }, {});
      var _data$state$placement = data[state.placement],
          x = _data$state$placement.x,
          y = _data$state$placement.y;

      if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
      }

      state.modifiersData[name] = data;
    } // eslint-disable-next-line import/no-unused-modules


    var offset$1 = {
      name: 'offset',
      enabled: true,
      phase: 'main',
      requires: ['popperOffsets'],
      fn: offset
    };

    function popperOffsets(_ref) {
      var state = _ref.state,
          name = _ref.name;
      // Offsets are the actual position the popper needs to have to be
      // properly positioned near its reference element
      // This is the most basic placement, and will be adjusted by
      // the modifiers in the next step
      state.modifiersData[name] = computeOffsets({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
      });
    } // eslint-disable-next-line import/no-unused-modules


    var popperOffsets$1 = {
      name: 'popperOffsets',
      enabled: true,
      phase: 'read',
      fn: popperOffsets,
      data: {}
    };

    function getAltAxis(axis) {
      return axis === 'x' ? 'y' : 'x';
    }

    function preventOverflow(_ref) {
      var state = _ref.state,
          options = _ref.options,
          name = _ref.name;
      var _options$mainAxis = options.mainAxis,
          checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
          _options$altAxis = options.altAxis,
          checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
          boundary = options.boundary,
          rootBoundary = options.rootBoundary,
          altBoundary = options.altBoundary,
          padding = options.padding,
          _options$tether = options.tether,
          tether = _options$tether === void 0 ? true : _options$tether,
          _options$tetherOffset = options.tetherOffset,
          tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
      var overflow = detectOverflow(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
      });
      var basePlacement = getBasePlacement(state.placement);
      var variation = getVariation(state.placement);
      var isBasePlacement = !variation;
      var mainAxis = getMainAxisFromPlacement(basePlacement);
      var altAxis = getAltAxis(mainAxis);
      var popperOffsets = state.modifiersData.popperOffsets;
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
      })) : tetherOffset;
      var data = {
        x: 0,
        y: 0
      };

      if (!popperOffsets) {
        return;
      }

      if (checkMainAxis || checkAltAxis) {
        var mainSide = mainAxis === 'y' ? top : left;
        var altSide = mainAxis === 'y' ? bottom : right;
        var len = mainAxis === 'y' ? 'height' : 'width';
        var offset = popperOffsets[mainAxis];
        var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
        var max$1 = popperOffsets[mainAxis] - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds

        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
          width: 0,
          height: 0
        };
        var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)

        var arrowLen = within(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
        var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
        var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

        if (checkMainAxis) {
          var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
          popperOffsets[mainAxis] = preventedOffset;
          data[mainAxis] = preventedOffset - offset;
        }

        if (checkAltAxis) {
          var _mainSide = mainAxis === 'x' ? top : left;

          var _altSide = mainAxis === 'x' ? bottom : right;

          var _offset = popperOffsets[altAxis];

          var _min = _offset + overflow[_mainSide];

          var _max = _offset - overflow[_altSide];

          var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

          popperOffsets[altAxis] = _preventedOffset;
          data[altAxis] = _preventedOffset - _offset;
        }
      }

      state.modifiersData[name] = data;
    } // eslint-disable-next-line import/no-unused-modules


    var preventOverflow$1 = {
      name: 'preventOverflow',
      enabled: true,
      phase: 'main',
      fn: preventOverflow,
      requiresIfExists: ['offset']
    };

    function getHTMLElementScroll(element) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }

    function getNodeScroll(node) {
      if (node === getWindow(node) || !isHTMLElement(node)) {
        return getWindowScroll(node);
      } else {
        return getHTMLElementScroll(node);
      }
    }

    // Composite means it takes into account transforms as well as layout.

    function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
      if (isFixed === void 0) {
        isFixed = false;
      }

      var documentElement = getDocumentElement(offsetParent);
      var rect = getBoundingClientRect(elementOrVirtualElement);
      var isOffsetParentAnElement = isHTMLElement(offsetParent);
      var scroll = {
        scrollLeft: 0,
        scrollTop: 0
      };
      var offsets = {
        x: 0,
        y: 0
      };

      if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
        isScrollParent(documentElement)) {
          scroll = getNodeScroll(offsetParent);
        }

        if (isHTMLElement(offsetParent)) {
          offsets = getBoundingClientRect(offsetParent);
          offsets.x += offsetParent.clientLeft;
          offsets.y += offsetParent.clientTop;
        } else if (documentElement) {
          offsets.x = getWindowScrollBarX(documentElement);
        }
      }

      return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
      };
    }

    function order(modifiers) {
      var map = new Map();
      var visited = new Set();
      var result = [];
      modifiers.forEach(function (modifier) {
        map.set(modifier.name, modifier);
      }); // On visiting object, check for its dependencies and visit them recursively

      function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function (dep) {
          if (!visited.has(dep)) {
            var depModifier = map.get(dep);

            if (depModifier) {
              sort(depModifier);
            }
          }
        });
        result.push(modifier);
      }

      modifiers.forEach(function (modifier) {
        if (!visited.has(modifier.name)) {
          // check for visited object
          sort(modifier);
        }
      });
      return result;
    }

    function orderModifiers(modifiers) {
      // order based on dependencies
      var orderedModifiers = order(modifiers); // order based on phase

      return modifierPhases.reduce(function (acc, phase) {
        return acc.concat(orderedModifiers.filter(function (modifier) {
          return modifier.phase === phase;
        }));
      }, []);
    }

    function debounce(fn) {
      var pending;
      return function () {
        if (!pending) {
          pending = new Promise(function (resolve) {
            Promise.resolve().then(function () {
              pending = undefined;
              resolve(fn());
            });
          });
        }

        return pending;
      };
    }

    function format(str) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return [].concat(args).reduce(function (p, c) {
        return p.replace(/%s/, c);
      }, str);
    }

    var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
    var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
    var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
    function validateModifiers(modifiers) {
      modifiers.forEach(function (modifier) {
        Object.keys(modifier).forEach(function (key) {
          switch (key) {
            case 'name':
              if (typeof modifier.name !== 'string') {
                console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
              }

              break;

            case 'enabled':
              if (typeof modifier.enabled !== 'boolean') {
                console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
              }

            case 'phase':
              if (modifierPhases.indexOf(modifier.phase) < 0) {
                console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
              }

              break;

            case 'fn':
              if (typeof modifier.fn !== 'function') {
                console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
              }

              break;

            case 'effect':
              if (typeof modifier.effect !== 'function') {
                console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
              }

              break;

            case 'requires':
              if (!Array.isArray(modifier.requires)) {
                console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
              }

              break;

            case 'requiresIfExists':
              if (!Array.isArray(modifier.requiresIfExists)) {
                console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
              }

              break;

            case 'options':
            case 'data':
              break;

            default:
              console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
                return "\"" + s + "\"";
              }).join(', ') + "; but \"" + key + "\" was provided.");
          }

          modifier.requires && modifier.requires.forEach(function (requirement) {
            if (modifiers.find(function (mod) {
              return mod.name === requirement;
            }) == null) {
              console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
            }
          });
        });
      });
    }

    function uniqueBy(arr, fn) {
      var identifiers = new Set();
      return arr.filter(function (item) {
        var identifier = fn(item);

        if (!identifiers.has(identifier)) {
          identifiers.add(identifier);
          return true;
        }
      });
    }

    function mergeByName(modifiers) {
      var merged = modifiers.reduce(function (merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
          options: Object.assign({}, existing.options, current.options),
          data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
      }, {}); // IE11 does not support Object.values

      return Object.keys(merged).map(function (key) {
        return merged[key];
      });
    }

    var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
    var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
    var DEFAULT_OPTIONS = {
      placement: 'bottom',
      modifiers: [],
      strategy: 'absolute'
    };

    function areValidElements() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return !args.some(function (element) {
        return !(element && typeof element.getBoundingClientRect === 'function');
      });
    }

    function popperGenerator(generatorOptions) {
      if (generatorOptions === void 0) {
        generatorOptions = {};
      }

      var _generatorOptions = generatorOptions,
          _generatorOptions$def = _generatorOptions.defaultModifiers,
          defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
          _generatorOptions$def2 = _generatorOptions.defaultOptions,
          defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
      return function createPopper(reference, popper, options) {
        if (options === void 0) {
          options = defaultOptions;
        }

        var state = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
          modifiersData: {},
          elements: {
            reference: reference,
            popper: popper
          },
          attributes: {},
          styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
          state: state,
          setOptions: function setOptions(options) {
            cleanupModifierEffects();
            state.options = Object.assign({}, defaultOptions, state.options, options);
            state.scrollParents = {
              reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
              popper: listScrollParents(popper)
            }; // Orders the modifiers based on their dependencies and `phase`
            // properties

            var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

            state.orderedModifiers = orderedModifiers.filter(function (m) {
              return m.enabled;
            }); // Validate the provided modifiers so that the consumer will get warned
            // if one of the modifiers is invalid for any reason

            {
              var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
                var name = _ref.name;
                return name;
              });
              validateModifiers(modifiers);

              if (getBasePlacement(state.options.placement) === auto) {
                var flipModifier = state.orderedModifiers.find(function (_ref2) {
                  var name = _ref2.name;
                  return name === 'flip';
                });

                if (!flipModifier) {
                  console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
                }
              }

              var _getComputedStyle = getComputedStyle(popper),
                  marginTop = _getComputedStyle.marginTop,
                  marginRight = _getComputedStyle.marginRight,
                  marginBottom = _getComputedStyle.marginBottom,
                  marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
              // cause bugs with positioning, so we'll warn the consumer


              if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
                return parseFloat(margin);
              })) {
                console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
              }
            }

            runModifierEffects();
            return instance.update();
          },
          // Sync update – it will always be executed, even if not necessary. This
          // is useful for low frequency updates where sync behavior simplifies the
          // logic.
          // For high frequency updates (e.g. `resize` and `scroll` events), always
          // prefer the async Popper#update method
          forceUpdate: function forceUpdate() {
            if (isDestroyed) {
              return;
            }

            var _state$elements = state.elements,
                reference = _state$elements.reference,
                popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
            // anymore

            if (!areValidElements(reference, popper)) {
              {
                console.error(INVALID_ELEMENT_ERROR);
              }

              return;
            } // Store the reference and popper rects to be read by modifiers


            state.rects = {
              reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
              popper: getLayoutRect(popper)
            }; // Modifiers have the ability to reset the current update cycle. The
            // most common use case for this is the `flip` modifier changing the
            // placement, which then needs to re-run all the modifiers, because the
            // logic was previously ran for the previous placement and is therefore
            // stale/incorrect

            state.reset = false;
            state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
            // is filled with the initial data specified by the modifier. This means
            // it doesn't persist and is fresh on each update.
            // To ensure persistent data, use `${name}#persistent`

            state.orderedModifiers.forEach(function (modifier) {
              return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
            });
            var __debug_loops__ = 0;

            for (var index = 0; index < state.orderedModifiers.length; index++) {
              {
                __debug_loops__ += 1;

                if (__debug_loops__ > 100) {
                  console.error(INFINITE_LOOP_ERROR);
                  break;
                }
              }

              if (state.reset === true) {
                state.reset = false;
                index = -1;
                continue;
              }

              var _state$orderedModifie = state.orderedModifiers[index],
                  fn = _state$orderedModifie.fn,
                  _state$orderedModifie2 = _state$orderedModifie.options,
                  _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                  name = _state$orderedModifie.name;

              if (typeof fn === 'function') {
                state = fn({
                  state: state,
                  options: _options,
                  name: name,
                  instance: instance
                }) || state;
              }
            }
          },
          // Async and optimistically optimized update – it will not be executed if
          // not necessary (debounced to run at most once-per-tick)
          update: debounce(function () {
            return new Promise(function (resolve) {
              instance.forceUpdate();
              resolve(state);
            });
          }),
          destroy: function destroy() {
            cleanupModifierEffects();
            isDestroyed = true;
          }
        };

        if (!areValidElements(reference, popper)) {
          {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return instance;
        }

        instance.setOptions(options).then(function (state) {
          if (!isDestroyed && options.onFirstUpdate) {
            options.onFirstUpdate(state);
          }
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.

        function runModifierEffects() {
          state.orderedModifiers.forEach(function (_ref3) {
            var name = _ref3.name,
                _ref3$options = _ref3.options,
                options = _ref3$options === void 0 ? {} : _ref3$options,
                effect = _ref3.effect;

            if (typeof effect === 'function') {
              var cleanupFn = effect({
                state: state,
                name: name,
                instance: instance,
                options: options
              });

              var noopFn = function noopFn() {};

              effectCleanupFns.push(cleanupFn || noopFn);
            }
          });
        }

        function cleanupModifierEffects() {
          effectCleanupFns.forEach(function (fn) {
            return fn();
          });
          effectCleanupFns = [];
        }

        return instance;
      };
    }

    // This is b/c the Popper lib is all esm files, and would break in a common js only environment

    var createPopper = popperGenerator({
      defaultModifiers: [hide$1, popperOffsets$1, computeStyles$1, eventListeners, offset$1, flip$1, preventOverflow$1, arrow$1]
    });

    var initialPopperStyles = function initialPopperStyles(position) {
      return {
        position: position,
        top: '0',
        left: '0',
        opacity: '0',
        pointerEvents: 'none'
      };
    };

    var disabledApplyStylesModifier = {
      name: 'applyStyles',
      enabled: false
    }; // until docjs supports type exports...

    var ariaDescribedByModifier = {
      name: 'ariaDescribedBy',
      enabled: true,
      phase: 'afterWrite',
      effect: function effect(_ref) {
        var state = _ref.state;
        return function () {
          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper;

          if ('removeAttribute' in reference) {
            var ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(function (id) {
              return id.trim() !== popper.id;
            });
            if (!ids.length) reference.removeAttribute('aria-describedby');else reference.setAttribute('aria-describedby', ids.join(','));
          }
        };
      },
      fn: function fn(_ref2) {
        var _popper$getAttribute;

        var state = _ref2.state;
        var _state$elements2 = state.elements,
            popper = _state$elements2.popper,
            reference = _state$elements2.reference;
        var role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();

        if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
          var ids = reference.getAttribute('aria-describedby');

          if (ids && ids.split(',').indexOf(popper.id) !== -1) {
            return;
          }

          reference.setAttribute('aria-describedby', ids ? ids + "," + popper.id : popper.id);
        }
      }
    };
    var EMPTY_MODIFIERS = [];
    /**
     * Position an element relative some reference element using Popper.js
     *
     * @param referenceElement
     * @param popperElement
     * @param {object}      options
     * @param {object=}     options.modifiers Popper.js modifiers
     * @param {boolean=}    options.enabled toggle the popper functionality on/off
     * @param {string=}     options.placement The popper element placement relative to the reference element
     * @param {string=}     options.strategy the positioning strategy
     * @param {boolean=}    options.eventsEnabled have Popper listen on window resize events to reposition the element
     * @param {function=}   options.onCreate called when the popper is created
     * @param {function=}   options.onUpdate called when the popper is updated
     *
     * @returns {UsePopperState} The popper state
     */

    function usePopper(referenceElement, popperElement, _temp) {
      var _ref3 = _temp === void 0 ? {} : _temp,
          _ref3$enabled = _ref3.enabled,
          enabled = _ref3$enabled === void 0 ? true : _ref3$enabled,
          _ref3$placement = _ref3.placement,
          placement = _ref3$placement === void 0 ? 'bottom' : _ref3$placement,
          _ref3$strategy = _ref3.strategy,
          strategy = _ref3$strategy === void 0 ? 'absolute' : _ref3$strategy,
          _ref3$modifiers = _ref3.modifiers,
          modifiers = _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers,
          config = _objectWithoutPropertiesLoose(_ref3, ["enabled", "placement", "strategy", "modifiers"]);

      var popperInstanceRef = React.useRef();
      var update = React.useCallback(function () {
        var _popperInstanceRef$cu;

        (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
      }, []);
      var forceUpdate = React.useCallback(function () {
        var _popperInstanceRef$cu2;

        (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
      }, []);

      var _useSafeState = useSafeState(React.useState({
        placement: placement,
        update: update,
        forceUpdate: forceUpdate,
        attributes: {},
        styles: {
          popper: initialPopperStyles(strategy),
          arrow: {}
        }
      })),
          popperState = _useSafeState[0],
          setState = _useSafeState[1];

      var updateModifier = React.useMemo(function () {
        return {
          name: 'updateStateModifier',
          enabled: true,
          phase: 'write',
          requires: ['computeStyles'],
          fn: function fn(_ref4) {
            var state = _ref4.state;
            var styles = {};
            var attributes = {};
            Object.keys(state.elements).forEach(function (element) {
              styles[element] = state.styles[element];
              attributes[element] = state.attributes[element];
            });
            setState({
              state: state,
              styles: styles,
              attributes: attributes,
              update: update,
              forceUpdate: forceUpdate,
              placement: state.placement
            });
          }
        };
      }, [update, forceUpdate, setState]);
      React.useEffect(function () {
        if (!popperInstanceRef.current || !enabled) return;
        popperInstanceRef.current.setOptions({
          placement: placement,
          strategy: strategy,
          modifiers: [].concat(modifiers, [updateModifier, disabledApplyStylesModifier])
        }); // intentionally NOT re-running on new modifiers
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [strategy, placement, updateModifier, enabled]);
      React.useEffect(function () {
        if (!enabled || referenceElement == null || popperElement == null) {
          return undefined;
        }

        popperInstanceRef.current = createPopper(referenceElement, popperElement, _extends({}, config, {
          placement: placement,
          strategy: strategy,
          modifiers: [].concat(modifiers, [ariaDescribedByModifier, updateModifier])
        }));
        return function () {
          if (popperInstanceRef.current != null) {
            popperInstanceRef.current.destroy();
            popperInstanceRef.current = undefined;
            setState(function (s) {
              return _extends({}, s, {
                attributes: {},
                styles: {
                  popper: initialPopperStyles(strategy)
                }
              });
            });
          }
        }; // This is only run once to _create_ the popper
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [enabled, referenceElement, popperElement]);
      return popperState;
    }

    /* eslint-disable no-bitwise, no-cond-assign */

    /**
     * Checks if an element contains another given element.
     * 
     * @param context the context element
     * @param node the element to check
     */
    function contains(context, node) {
      // HTML DOM and SVG DOM may have different support levels,
      // so we need to check on context instead of a document root element.
      if (context.contains) return context.contains(node);
      if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
    }

    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var warning = function() {};

    {
      var printWarning = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = 'Warning: ' +
          format.replace(/%s/g, function() {
            return args[argIndex++];
          });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format === undefined) {
          throw new Error(
              '`warning(condition, format, ...args)` requires a warning ' +
              'message argument'
          );
        }
        if (!condition) {
          printWarning.apply(null, [format].concat(args));
        }
      };
    }

    var warning_1 = warning;

    function safeFindDOMNode(componentOrElement) {
      if (componentOrElement && 'setState' in componentOrElement) {
        return ReactDOM__default['default'].findDOMNode(componentOrElement);
      }

      return componentOrElement != null ? componentOrElement : null;
    }

    var ownerDocument = (function (componentOrElement) {
      return ownerDocument$1(safeFindDOMNode(componentOrElement));
    });

    var escapeKeyCode = 27;

    var noop = function noop() {};

    function isLeftClickEvent(event) {
      return event.button === 0;
    }

    function isModifiedEvent(event) {
      return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
    }

    var getRefTarget = function getRefTarget(ref) {
      return ref && ('current' in ref ? ref.current : ref);
    };

    /**
     * The `useRootClose` hook registers your callback on the document
     * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
     * style behavior where your callback is triggered when the user tries to
     * interact with the rest of the document or hits the `esc` key.
     *
     * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
     * @param {function} onRootClose
     * @param {object=}  options
     * @param {boolean=} options.disabled
     * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
     */
    function useRootClose(ref, onRootClose, _temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          disabled = _ref.disabled,
          _ref$clickTrigger = _ref.clickTrigger,
          clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger;

      var preventMouseRootCloseRef = React.useRef(false);
      var onClose = onRootClose || noop;
      var handleMouseCapture = React.useCallback(function (e) {
        var currentTarget = getRefTarget(ref);
        warning_1(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
        preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!contains(currentTarget, e.target);
      }, [ref]);
      var handleMouse = useEventCallback(function (e) {
        if (!preventMouseRootCloseRef.current) {
          onClose(e);
        }
      });
      var handleKeyUp = useEventCallback(function (e) {
        if (e.keyCode === escapeKeyCode) {
          onClose(e);
        }
      });
      React.useEffect(function () {
        if (disabled || ref == null) return undefined; // Store the current event to avoid triggering handlers immediately
        // https://github.com/facebook/react/issues/20074

        var currentEvent = window.event;
        var doc = ownerDocument(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to
        // avoid false positives in the contains() check below if the target DOM
        // element is removed in the React mouse callback.

        var removeMouseCaptureListener = listen(doc, clickTrigger, handleMouseCapture, true);
        var removeMouseListener = listen(doc, clickTrigger, function (e) {
          // skip if this event is the same as the one running when we added the handlers
          if (e === currentEvent) {
            currentEvent = undefined;
            return;
          }

          handleMouse(e);
        });
        var removeKeyupListener = listen(doc, 'keyup', function (e) {
          // skip if this event is the same as the one running when we added the handlers
          if (e === currentEvent) {
            currentEvent = undefined;
            return;
          }

          handleKeyUp(e);
        });
        var mobileSafariHackListeners = [];

        if ('ontouchstart' in doc.documentElement) {
          mobileSafariHackListeners = [].slice.call(doc.body.children).map(function (el) {
            return listen(el, 'mousemove', noop);
          });
        }

        return function () {
          removeMouseCaptureListener();
          removeMouseListener();
          removeKeyupListener();
          mobileSafariHackListeners.forEach(function (remove) {
            return remove();
          });
        };
      }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
    }

    function toModifierMap(modifiers) {
      var result = {};

      if (!Array.isArray(modifiers)) {
        return modifiers || result;
      } // eslint-disable-next-line no-unused-expressions


      modifiers == null ? void 0 : modifiers.forEach(function (m) {
        result[m.name] = m;
      });
      return result;
    }
    function toModifierArray(map) {
      if (map === void 0) {
        map = {};
      }

      if (Array.isArray(map)) return map;
      return Object.keys(map).map(function (k) {
        map[k].name = k;
        return map[k];
      });
    }
    function mergeOptionsWithPopperConfig(_ref) {
      var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;

      var enabled = _ref.enabled,
          enableEvents = _ref.enableEvents,
          placement = _ref.placement,
          flip = _ref.flip,
          offset = _ref.offset,
          fixed = _ref.fixed,
          containerPadding = _ref.containerPadding,
          arrowElement = _ref.arrowElement,
          _ref$popperConfig = _ref.popperConfig,
          popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig;
      var modifiers = toModifierMap(popperConfig.modifiers);
      return _extends({}, popperConfig, {
        placement: placement,
        enabled: enabled,
        strategy: fixed ? 'fixed' : popperConfig.strategy,
        modifiers: toModifierArray(_extends({}, modifiers, {
          eventListeners: {
            enabled: enableEvents
          },
          preventOverflow: _extends({}, modifiers.preventOverflow, {
            options: containerPadding ? _extends({
              padding: containerPadding
            }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
          }),
          offset: {
            options: _extends({
              offset: offset
            }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
          },
          arrow: _extends({}, modifiers.arrow, {
            enabled: !!arrowElement,
            options: _extends({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
              element: arrowElement
            })
          }),
          flip: _extends({
            enabled: !!flip
          }, modifiers.flip)
        }))
      });
    }

    var toFnRef = function toFnRef(ref) {
      return !ref || typeof ref === 'function' ? ref : function (value) {
        ref.current = value;
      };
    };

    function mergeRefs(refA, refB) {
      var a = toFnRef(refA);
      var b = toFnRef(refB);
      return function (value) {
        if (a) a(value);
        if (b) b(value);
      };
    }
    /**
     * Create and returns a single callback ref composed from two other Refs.
     *
     * ```tsx
     * const Button = React.forwardRef((props, ref) => {
     *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
     *   const mergedRef = useMergedRefs(ref, attachRef);
     *
     *   return <button ref={mergedRef} {...props}/>
     * })
     * ```
     *
     * @param refA A Callback or mutable Ref
     * @param refB A Callback or mutable Ref
     * @category refs
     */

    function useMergedRefs(refA, refB) {
      return React.useMemo(function () {
        return mergeRefs(refA, refB);
      }, [refA, refB]);
    }

    /**
     * Checks if a given element has a CSS class.
     * 
     * @param element the element
     * @param className the CSS class name
     */
    function hasClass(element, className) {
      if (element.classList) return !!className && element.classList.contains(className);
      return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
    }

    function getMargins(element) {
      var styles = window.getComputedStyle(element);
      var top = parseFloat(styles.marginTop) || 0;
      var right = parseFloat(styles.marginRight) || 0;
      var bottom = parseFloat(styles.marginBottom) || 0;
      var left = parseFloat(styles.marginLeft) || 0;
      return {
        top: top,
        right: right,
        bottom: bottom,
        left: left
      };
    }

    function usePopperMarginModifiers() {
      var overlayRef = React.useRef(null);
      var margins = React.useRef(null);
      var arrowMargins = React.useRef(null);
      var popoverClass = useBootstrapPrefix(undefined, 'popover');
      var dropdownMenuClass = useBootstrapPrefix(undefined, 'dropdown-menu');
      var callback = React.useCallback(function (overlay) {
        if (!overlay || !(hasClass(overlay, popoverClass) || hasClass(overlay, dropdownMenuClass))) return;
        margins.current = getMargins(overlay);
        overlay.style.margin = '0';
        overlayRef.current = overlay;
      }, [popoverClass, dropdownMenuClass]);
      var offset = React.useMemo(function () {
        return {
          name: 'offset',
          options: {
            offset: function offset(_ref) {
              var placement = _ref.placement;
              if (!margins.current) return [0, 0];
              var _margins$current = margins.current,
                  top = _margins$current.top,
                  left = _margins$current.left,
                  bottom = _margins$current.bottom,
                  right = _margins$current.right;

              switch (placement.split('-')[0]) {
                case 'top':
                  return [0, bottom];

                case 'left':
                  return [0, right];

                case 'bottom':
                  return [0, top];

                case 'right':
                  return [0, left];

                default:
                  return [0, 0];
              }
            }
          }
        };
      }, [margins]);
      var arrow = React.useMemo(function () {
        return {
          name: 'arrow',
          options: {
            padding: function padding() {
              // The options here are used for Popper 2.8.4 and up.
              // For earlier version, padding is handled in popoverArrowMargins below.
              if (!arrowMargins.current) {
                return 0;
              }

              var _arrowMargins$current = arrowMargins.current,
                  top = _arrowMargins$current.top,
                  right = _arrowMargins$current.right;
              var padding = top || right;
              return {
                top: padding,
                left: padding,
                right: padding,
                bottom: padding
              };
            }
          }
        };
      }, [arrowMargins]); // Converts popover arrow margin to arrow modifier padding

      var popoverArrowMargins = React.useMemo(function () {
        return {
          name: 'popoverArrowMargins',
          enabled: true,
          phase: 'main',
          requiresIfExists: ['arrow'],
          effect: function effect(_ref2) {
            var state = _ref2.state;

            if (!overlayRef.current || !state.elements.arrow || !hasClass(overlayRef.current, popoverClass)) {
              return undefined;
            }

            if (state.modifiersData['arrow#persistent']) {
              // @popperjs/core <= 2.8.3 uses arrow#persistent to pass padding to arrow modifier.
              var _getMargins = getMargins(state.elements.arrow),
                  top = _getMargins.top,
                  right = _getMargins.right;

              var padding = top || right;
              state.modifiersData['arrow#persistent'].padding = {
                top: padding,
                left: padding,
                right: padding,
                bottom: padding
              };
            } else {
              // @popperjs/core >= 2.8.4 gets the padding from the arrow modifier options,
              // so we'll get the margins here, and let the arrow modifier above pass
              // it to popper.
              arrowMargins.current = getMargins(state.elements.arrow);
            }

            state.elements.arrow.style.margin = '0';
            return function () {
              if (state.elements.arrow) state.elements.arrow.style.margin = '';
            };
          }
        };
      }, [popoverClass]);
      return [callback, [offset, arrow, popoverArrowMargins]];
    }

    var createChainableTypeChecker_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = createChainableTypeChecker;
    /**
     * Copyright 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     */

    // Mostly taken from ReactPropTypes.

    function createChainableTypeChecker(validate) {
      function checkType(isRequired, props, propName, componentName, location, propFullName) {
        var componentNameSafe = componentName || '<<anonymous>>';
        var propFullNameSafe = propFullName || propName;

        if (props[propName] == null) {
          if (isRequired) {
            return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
          }

          return null;
        }

        for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
          args[_key - 6] = arguments[_key];
        }

        return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }
    module.exports = exports['default'];
    });

    unwrapExports(createChainableTypeChecker_1);

    var all_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = all;



    var _createChainableTypeChecker2 = _interopRequireDefault(createChainableTypeChecker_1);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function all() {
      for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
        validators[_key] = arguments[_key];
      }

      function allPropTypes() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var error = null;

        validators.forEach(function (validator) {
          if (error != null) {
            return;
          }

          var result = validator.apply(undefined, args);
          if (result != null) {
            error = result;
          }
        });

        return error;
      }

      return (0, _createChainableTypeChecker2.default)(allPropTypes);
    }
    module.exports = exports['default'];
    });

    unwrapExports(all_1);

    var _excluded$3 = ["as", "className", "type", "tooltip"];
    var propTypes = {
      /**
       * Specify whether the feedback is for valid or invalid fields
       *
       * @type {('valid'|'invalid')}
       */
      type: propTypes$1.string,

      /** Display feedback as a tooltip. */
      tooltip: propTypes$1.bool,
      as: propTypes$1.elementType
    };
    var Feedback = /*#__PURE__*/React__default['default'].forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    function (_ref, ref) {
      var _ref$as = _ref.as,
          Component = _ref$as === void 0 ? 'div' : _ref$as,
          className = _ref.className,
          _ref$type = _ref.type,
          type = _ref$type === void 0 ? 'valid' : _ref$type,
          _ref$tooltip = _ref.tooltip,
          tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
          props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

      return /*#__PURE__*/React__default['default'].createElement(Component, _extends({}, props, {
        ref: ref,
        className: classnames(className, type + "-" + (tooltip ? 'tooltip' : 'feedback'))
      }));
    });
    Feedback.displayName = 'Feedback';
    Feedback.propTypes = propTypes;

    var FormContext = /*#__PURE__*/React__default['default'].createContext({
      controlId: undefined
    });

    var _excluded$2 = ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"];
    var FormControl = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
      var bsPrefix = _ref.bsPrefix,
          bsCustomPrefix = _ref.bsCustomPrefix,
          type = _ref.type,
          size = _ref.size,
          htmlSize = _ref.htmlSize,
          id = _ref.id,
          className = _ref.className,
          _ref$isValid = _ref.isValid,
          isValid = _ref$isValid === void 0 ? false : _ref$isValid,
          _ref$isInvalid = _ref.isInvalid,
          isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
          plaintext = _ref.plaintext,
          readOnly = _ref.readOnly,
          custom = _ref.custom,
          _ref$as = _ref.as,
          Component = _ref$as === void 0 ? 'input' : _ref$as,
          props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

      var _useContext = React.useContext(FormContext),
          controlId = _useContext.controlId;

      var _ref2 = custom ? [bsCustomPrefix, 'custom'] : [bsPrefix, 'form-control'],
          prefix = _ref2[0],
          defaultPrefix = _ref2[1];

      bsPrefix = useBootstrapPrefix(prefix, defaultPrefix);
      var classes;

      if (plaintext) {
        var _classes;

        classes = (_classes = {}, _classes[bsPrefix + "-plaintext"] = true, _classes);
      } else if (type === 'file') {
        var _classes2;

        classes = (_classes2 = {}, _classes2[bsPrefix + "-file"] = true, _classes2);
      } else if (type === 'range') {
        var _classes3;

        classes = (_classes3 = {}, _classes3[bsPrefix + "-range"] = true, _classes3);
      } else if (Component === 'select' && custom) {
        var _classes4;

        classes = (_classes4 = {}, _classes4[bsPrefix + "-select"] = true, _classes4[bsPrefix + "-select-" + size] = size, _classes4);
      } else {
        var _classes5;

        classes = (_classes5 = {}, _classes5[bsPrefix] = true, _classes5[bsPrefix + "-" + size] = size, _classes5);
      }

      warning_1(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') ;
      return /*#__PURE__*/React__default['default'].createElement(Component, _extends({}, props, {
        type: type,
        size: htmlSize,
        ref: ref,
        readOnly: readOnly,
        id: id || controlId,
        className: classnames(className, classes, isValid && "is-valid", isInvalid && "is-invalid")
      }));
    });
    FormControl.displayName = 'FormControl';
    var FormControl$1 = Object.assign(FormControl, {
      Feedback: Feedback
    });

    var _excluded$1 = ["bsPrefix", "size", "hasValidation", "className", "as"];
    var InputGroupAppend = createWithBsPrefix('input-group-append');
    var InputGroupPrepend = createWithBsPrefix('input-group-prepend');
    var InputGroupText = createWithBsPrefix('input-group-text', {
      Component: 'span'
    });

    var InputGroupCheckbox = function InputGroupCheckbox(props) {
      return /*#__PURE__*/React__default['default'].createElement(InputGroupText, null, /*#__PURE__*/React__default['default'].createElement("input", _extends({
        type: "checkbox"
      }, props)));
    };

    var InputGroupRadio = function InputGroupRadio(props) {
      return /*#__PURE__*/React__default['default'].createElement(InputGroupText, null, /*#__PURE__*/React__default['default'].createElement("input", _extends({
        type: "radio"
      }, props)));
    };

    /**
     *
     * @property {InputGroupAppend} Append
     * @property {InputGroupPrepend} Prepend
     * @property {InputGroupText} Text
     * @property {InputGroupRadio} Radio
     * @property {InputGroupCheckbox} Checkbox
     */
    var InputGroup = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
      var bsPrefix = _ref.bsPrefix,
          size = _ref.size,
          hasValidation = _ref.hasValidation,
          className = _ref.className,
          _ref$as = _ref.as,
          Component = _ref$as === void 0 ? 'div' : _ref$as,
          props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

      bsPrefix = useBootstrapPrefix(bsPrefix, 'input-group');
      return /*#__PURE__*/React__default['default'].createElement(Component, _extends({
        ref: ref
      }, props, {
        className: classnames(className, bsPrefix, size && bsPrefix + "-" + size, hasValidation && 'has-validation')
      }));
    });
    InputGroup.displayName = 'InputGroup';

    var InputGroupWithExtras = _extends({}, InputGroup, {
      Text: InputGroupText,
      Radio: InputGroupRadio,
      Checkbox: InputGroupCheckbox,
      Append: InputGroupAppend,
      Prepend: InputGroupPrepend
    });

    var resolveContainerRef = function resolveContainerRef(ref) {
      var _ref;

      if (typeof document === 'undefined') return null;
      if (ref == null) return ownerDocument$1().body;
      if (typeof ref === 'function') ref = ref();
      if (ref && 'current' in ref) ref = ref.current;
      if ((_ref = ref) != null && _ref.nodeType) return ref || null;
      return null;
    };
    function useWaitForDOMRef(ref, onResolved) {
      var _useState = React.useState(function () {
        return resolveContainerRef(ref);
      }),
          resolvedRef = _useState[0],
          setRef = _useState[1];

      if (!resolvedRef) {
        var earlyRef = resolveContainerRef(ref);
        if (earlyRef) setRef(earlyRef);
      }

      React.useEffect(function () {
        if (onResolved && resolvedRef) {
          onResolved(resolvedRef);
        }
      }, [onResolved, resolvedRef]);
      React.useEffect(function () {
        var nextRef = resolveContainerRef(ref);

        if (nextRef !== resolvedRef) {
          setRef(nextRef);
        }
      }, [ref, resolvedRef]);
      return resolvedRef;
    }

    /**
     * Built on top of `Popper.js`, the overlay component is
     * great for custom tooltip overlays.
     */
    var Overlay$1 = /*#__PURE__*/React__default['default'].forwardRef(function (props, outerRef) {
      var flip = props.flip,
          offset = props.offset,
          placement = props.placement,
          _props$containerPaddi = props.containerPadding,
          containerPadding = _props$containerPaddi === void 0 ? 5 : _props$containerPaddi,
          _props$popperConfig = props.popperConfig,
          popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig,
          Transition = props.transition;

      var _useCallbackRef = useCallbackRef(),
          rootElement = _useCallbackRef[0],
          attachRef = _useCallbackRef[1];

      var _useCallbackRef2 = useCallbackRef(),
          arrowElement = _useCallbackRef2[0],
          attachArrowRef = _useCallbackRef2[1];

      var mergedRef = useMergedRefs(attachRef, outerRef);
      var container = useWaitForDOMRef(props.container);
      var target = useWaitForDOMRef(props.target);

      var _useState = React.useState(!props.show),
          exited = _useState[0],
          setExited = _useState[1];

      var _usePopper = usePopper(target, rootElement, mergeOptionsWithPopperConfig({
        placement: placement,
        enableEvents: !!props.show,
        containerPadding: containerPadding || 5,
        flip: flip,
        offset: offset,
        arrowElement: arrowElement,
        popperConfig: popperConfig
      })),
          styles = _usePopper.styles,
          attributes = _usePopper.attributes,
          popper = _objectWithoutPropertiesLoose(_usePopper, ["styles", "attributes"]);

      if (props.show) {
        if (exited) setExited(false);
      } else if (!props.transition && !exited) {
        setExited(true);
      }

      var handleHidden = function handleHidden() {
        setExited(true);

        if (props.onExited) {
          props.onExited.apply(props, arguments);
        }
      }; // Don't un-render the overlay while it's transitioning out.


      var mountOverlay = props.show || Transition && !exited;
      useRootClose(rootElement, props.onHide, {
        disabled: !props.rootClose || props.rootCloseDisabled,
        clickTrigger: props.rootCloseEvent
      });

      if (!mountOverlay) {
        // Don't bother showing anything if we don't have to.
        return null;
      }

      var child = props.children(_extends({}, popper, {
        show: !!props.show,
        props: _extends({}, attributes.popper, {
          style: styles.popper,
          ref: mergedRef
        }),
        arrowProps: _extends({}, attributes.arrow, {
          style: styles.arrow,
          ref: attachArrowRef
        })
      }));

      if (Transition) {
        var onExit = props.onExit,
            onExiting = props.onExiting,
            onEnter = props.onEnter,
            onEntering = props.onEntering,
            onEntered = props.onEntered;
        child = /*#__PURE__*/React__default['default'].createElement(Transition, {
          "in": props.show,
          appear: true,
          onExit: onExit,
          onExiting: onExiting,
          onExited: handleHidden,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered
        }, child);
      }

      return container ? /*#__PURE__*/ReactDOM__default['default'].createPortal(child, container) : null;
    });
    Overlay$1.displayName = 'Overlay';
    Overlay$1.propTypes = {
      /**
       * Set the visibility of the Overlay
       */
      show: propTypes$1.bool,

      /** Specify where the overlay element is positioned in relation to the target element */
      placement: propTypes$1.oneOf(placements),

      /**
       * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
       * the overlay is positioned relative to.
       */
      target: propTypes$1.any,

      /**
       * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
       * appended to it.
       */
      container: propTypes$1.any,

      /**
       * Enables the Popper.js `flip` modifier, allowing the Overlay to
       * automatically adjust it's placement in case of overlap with the viewport or toggle.
       * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
       */
      flip: propTypes$1.bool,

      /**
       * A render prop that returns an element to overlay and position. See
       * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
       *
       * @type {Function ({
       *   show: boolean,
       *   placement: Placement,
       *   update: () => void,
       *   forceUpdate: () => void,
       *   props: {
       *     ref: (?HTMLElement) => void,
       *     style: { [string]: string | number },
       *     aria-labelledby: ?string
       *     [string]: string | number,
       *   },
       *   arrowProps: {
       *     ref: (?HTMLElement) => void,
       *     style: { [string]: string | number },
       *     [string]: string | number,
       *   },
       * }) => React.Element}
       */
      children: propTypes$1.func.isRequired,

      /**
       * Control how much space there is between the edge of the boundary element and overlay.
       * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
       */
      containerPadding: propTypes$1.number,

      /**
       * A set of popper options and props passed directly to react-popper's Popper component.
       */
      popperConfig: propTypes$1.object,

      /**
       * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
       */
      rootClose: propTypes$1.bool,

      /**
       * Specify event for toggling overlay
       */
      rootCloseEvent: propTypes$1.oneOf(['click', 'mousedown']),

      /**
       * Specify disabled for disable RootCloseWrapper
       */
      rootCloseDisabled: propTypes$1.bool,

      /**
       * A Callback fired by the Overlay when it wishes to be hidden.
       *
       * __required__ when `rootClose` is `true`.
       *
       * @type func
       */
      onHide: function onHide(props) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        if (props.rootClose) {
          var _PropTypes$func;

          return (_PropTypes$func = propTypes$1.func).isRequired.apply(_PropTypes$func, [props].concat(args));
        }

        return propTypes$1.func.apply(propTypes$1, [props].concat(args));
      },

      /**
       * A `react-transition-group@2.0.0` `<Transition/>` component
       * used to animate the overlay as it changes visibility.
       */
      // @ts-ignore
      transition: propTypes$1.elementType,

      /**
       * Callback fired before the Overlay transitions in
       */
      onEnter: propTypes$1.func,

      /**
       * Callback fired as the Overlay begins to transition in
       */
      onEntering: propTypes$1.func,

      /**
       * Callback fired after the Overlay finishes transitioning in
       */
      onEntered: propTypes$1.func,

      /**
       * Callback fired right before the Overlay transitions out
       */
      onExit: propTypes$1.func,

      /**
       * Callback fired as the Overlay begins to transition out
       */
      onExiting: propTypes$1.func,

      /**
       * Callback fired after the Overlay finishes transitioning out
       */
      onExited: propTypes$1.func
    };

    var _excluded = ["children", "transition", "popperConfig"],
        _excluded2 = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"];
    var defaultProps = {
      transition: Fade,
      rootClose: false,
      show: false,
      placement: 'top'
    };

    function wrapRefs(props, arrowProps) {
      var ref = props.ref;
      var aRef = arrowProps.ref;

      props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
        return ref(safeFindDOMNode(r));
      });

      arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = function (r) {
        return aRef(safeFindDOMNode(r));
      });
    }

    function Overlay(_ref) {
      var overlay = _ref.children,
          transition = _ref.transition,
          _ref$popperConfig = _ref.popperConfig,
          popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig,
          outerProps = _objectWithoutPropertiesLoose(_ref, _excluded);

      var popperRef = React.useRef({});

      var _usePopperMarginModif = usePopperMarginModifiers(),
          ref = _usePopperMarginModif[0],
          marginModifiers = _usePopperMarginModif[1];

      var actualTransition = transition === true ? Fade : transition || null;
      return /*#__PURE__*/React__default['default'].createElement(Overlay$1, _extends({}, outerProps, {
        ref: ref,
        popperConfig: _extends({}, popperConfig, {
          modifiers: marginModifiers.concat(popperConfig.modifiers || [])
        }),
        transition: actualTransition
      }), function (_ref2) {
        var _state$modifiersData$;

        var overlayProps = _ref2.props,
            arrowProps = _ref2.arrowProps,
            show = _ref2.show,
            update = _ref2.update;
            _ref2.forceUpdate;
            var placement = _ref2.placement,
            state = _ref2.state,
            props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

        wrapRefs(overlayProps, arrowProps);
        var popper = Object.assign(popperRef.current, {
          state: state,
          scheduleUpdate: update,
          placement: placement,
          outOfBoundaries: (state == null ? void 0 : (_state$modifiersData$ = state.modifiersData.hide) == null ? void 0 : _state$modifiersData$.isReferenceHidden) || false
        });
        if (typeof overlay === 'function') return overlay(_extends({}, props, overlayProps, {
          placement: placement,
          show: show
        }, !transition && show && {
          className: 'show'
        }, {
          popper: popper,
          arrowProps: arrowProps
        }));
        return /*#__PURE__*/React__default['default'].cloneElement(overlay, _extends({}, props, overlayProps, {
          placement: placement,
          arrowProps: arrowProps,
          popper: popper,
          className: classnames(overlay.props.className, !transition && show && 'show'),
          style: _extends({}, overlay.props.style, overlayProps.style)
        }));
      });
    }

    Overlay.defaultProps = defaultProps;

    var COUNTRIES = [
        {
            "id": "af",
            "name": "Afghanistan",
            "flag": "🇦🇫",
            "alpha2": "af",
            "alpha3": "afg",
            "ioc": "afg"
        },
        {
            "id": "ax",
            "name": "Åland Islands",
            "flag": "🇦🇽",
            "alpha2": "ax",
            "alpha3": "ala",
            "ioc": ""
        },
        {
            "id": "al",
            "name": "Albania",
            "flag": "🇦🇱",
            "alpha2": "al",
            "alpha3": "alb",
            "ioc": "alb"
        },
        {
            "id": "dz",
            "name": "Algeria",
            "flag": "🇩🇿",
            "alpha2": "dz",
            "alpha3": "dza",
            "ioc": "alg"
        },
        {
            "id": "as",
            "name": "American Samoa",
            "flag": "🇦🇸",
            "alpha2": "as",
            "alpha3": "asm",
            "ioc": "asa"
        },
        {
            "id": "ad",
            "name": "Andorra",
            "flag": "🇦🇩",
            "alpha2": "ad",
            "alpha3": "and",
            "ioc": "and"
        },
        {
            "id": "ao",
            "name": "Angola",
            "flag": "🇦🇴",
            "alpha2": "ao",
            "alpha3": "ago",
            "ioc": "ang"
        },
        {
            "id": "ai",
            "name": "Anguilla",
            "flag": "🇦🇮",
            "alpha2": "ai",
            "alpha3": "aia",
            "ioc": ""
        },
        {
            "id": "aq",
            "name": "Antarctica",
            "flag": "🇦🇶",
            "alpha2": "aq",
            "alpha3": "ata",
            "ioc": ""
        },
        {
            "id": "ag",
            "name": "Antigua And Barbuda",
            "flag": "🇦🇬",
            "alpha2": "ag",
            "alpha3": "atg",
            "ioc": "ant"
        },
        {
            "id": "ar",
            "name": "Argentina",
            "flag": "🇦🇷",
            "alpha2": "ar",
            "alpha3": "arg",
            "ioc": "arg"
        },
        {
            "id": "am",
            "name": "Armenia",
            "flag": "🇦🇲",
            "alpha2": "am",
            "alpha3": "arm",
            "ioc": "arm"
        },
        {
            "id": "aw",
            "name": "Aruba",
            "flag": "🇦🇼",
            "alpha2": "aw",
            "alpha3": "abw",
            "ioc": "aru"
        },
        {
            "id": "au",
            "name": "Australia",
            "flag": "🇦🇺",
            "alpha2": "au",
            "alpha3": "aus",
            "ioc": "aus"
        },
        {
            "id": "at",
            "name": "Austria",
            "flag": "🇦🇹",
            "alpha2": "at",
            "alpha3": "aut",
            "ioc": "aut"
        },
        {
            "id": "az",
            "name": "Azerbaijan",
            "flag": "🇦🇿",
            "alpha2": "az",
            "alpha3": "aze",
            "ioc": "aze"
        },
        {
            "id": "bs",
            "name": "Bahamas",
            "flag": "🇧🇸",
            "alpha2": "bs",
            "alpha3": "bhs",
            "ioc": "bah"
        },
        {
            "id": "bh",
            "name": "Bahrain",
            "flag": "🇧🇭",
            "alpha2": "bh",
            "alpha3": "bhr",
            "ioc": "brn"
        },
        {
            "id": "bd",
            "name": "Bangladesh",
            "flag": "🇧🇩",
            "alpha2": "bd",
            "alpha3": "bgd",
            "ioc": "ban"
        },
        {
            "id": "bb",
            "name": "Barbados",
            "flag": "🇧🇧",
            "alpha2": "bb",
            "alpha3": "brb",
            "ioc": "bar"
        },
        {
            "id": "by",
            "name": "Belarus",
            "flag": "🇧🇾",
            "alpha2": "by",
            "alpha3": "blr",
            "ioc": "blr"
        },
        {
            "id": "be",
            "name": "Belgium",
            "flag": "🇧🇪",
            "alpha2": "be",
            "alpha3": "bel",
            "ioc": "bel"
        },
        {
            "id": "bz",
            "name": "Belize",
            "flag": "🇧🇿",
            "alpha2": "bz",
            "alpha3": "blz",
            "ioc": "biz"
        },
        {
            "id": "bj",
            "name": "Benin",
            "flag": "🇧🇯",
            "alpha2": "bj",
            "alpha3": "ben",
            "ioc": "ben"
        },
        {
            "id": "bm",
            "name": "Bermuda",
            "flag": "🇧🇲",
            "alpha2": "bm",
            "alpha3": "bmu",
            "ioc": "ber"
        },
        {
            "id": "bt",
            "name": "Bhutan",
            "flag": "🇧🇹",
            "alpha2": "bt",
            "alpha3": "btn",
            "ioc": "bhu"
        },
        {
            "id": "bo",
            "name": "Bolivia, Plurinational State Of",
            "flag": "🇧🇴",
            "alpha2": "bo",
            "alpha3": "bol",
            "ioc": "bol"
        },
        {
            "id": "bq",
            "name": "Bonaire, Saint Eustatius And Saba",
            "flag": "🇧🇶",
            "alpha2": "bq",
            "alpha3": "bes",
            "ioc": ""
        },
        {
            "id": "ba",
            "name": "Bosnia & Herzegovina",
            "flag": "🇧🇦",
            "alpha2": "ba",
            "alpha3": "bih",
            "ioc": "bih"
        },
        {
            "id": "bw",
            "name": "Botswana",
            "flag": "🇧🇼",
            "alpha2": "bw",
            "alpha3": "bwa",
            "ioc": "bot"
        },
        {
            "id": "bv",
            "name": "Bouvet Island",
            "flag": "🇧🇻",
            "alpha2": "bv",
            "alpha3": "bvt",
            "ioc": ""
        },
        {
            "id": "br",
            "name": "Brazil",
            "flag": "🇧🇷",
            "alpha2": "br",
            "alpha3": "bra",
            "ioc": "bra"
        },
        {
            "id": "io",
            "name": "British Indian Ocean Territory",
            "flag": "🇮🇴",
            "alpha2": "io",
            "alpha3": "iot",
            "ioc": ""
        },
        {
            "id": "bn",
            "name": "Brunei Darussalam",
            "flag": "🇧🇳",
            "alpha2": "bn",
            "alpha3": "brn",
            "ioc": "bru"
        },
        {
            "id": "bg",
            "name": "Bulgaria",
            "flag": "🇧🇬",
            "alpha2": "bg",
            "alpha3": "bgr",
            "ioc": "bul"
        },
        {
            "id": "bf",
            "name": "Burkina Faso",
            "flag": "🇧🇫",
            "alpha2": "bf",
            "alpha3": "bfa",
            "ioc": "bur"
        },
        {
            "id": "bi",
            "name": "Burundi",
            "flag": "🇧🇮",
            "alpha2": "bi",
            "alpha3": "bdi",
            "ioc": "bdi"
        },
        {
            "id": "cv",
            "name": "Cabo Verde",
            "flag": "🇨🇻",
            "alpha2": "cv",
            "alpha3": "cpv",
            "ioc": "cpv"
        },
        {
            "id": "kh",
            "name": "Cambodia",
            "flag": "🇰🇭",
            "alpha2": "kh",
            "alpha3": "khm",
            "ioc": "cam"
        },
        {
            "id": "cm",
            "name": "Cameroon",
            "flag": "🇨🇲",
            "alpha2": "cm",
            "alpha3": "cmr",
            "ioc": "cmr"
        },
        {
            "id": "ca",
            "name": "Canada",
            "flag": "🇨🇦",
            "alpha2": "ca",
            "alpha3": "can",
            "ioc": "can"
        },
        {
            "id": "ky",
            "name": "Cayman Islands",
            "flag": "🇰🇾",
            "alpha2": "ky",
            "alpha3": "cym",
            "ioc": "cay"
        },
        {
            "id": "cf",
            "name": "Central African Republic",
            "flag": "🇨🇫",
            "alpha2": "cf",
            "alpha3": "caf",
            "ioc": "caf"
        },
        {
            "id": "td",
            "name": "Chad",
            "flag": "🇹🇩",
            "alpha2": "td",
            "alpha3": "tcd",
            "ioc": "cha"
        },
        {
            "id": "cl",
            "name": "Chile",
            "flag": "🇨🇱",
            "alpha2": "cl",
            "alpha3": "chl",
            "ioc": "chi"
        },
        {
            "id": "cn",
            "name": "China",
            "flag": "🇨🇳",
            "alpha2": "cn",
            "alpha3": "chn",
            "ioc": "chn"
        },
        {
            "id": "cx",
            "name": "Christmas Island",
            "flag": "🇨🇽",
            "alpha2": "cx",
            "alpha3": "cxr",
            "ioc": ""
        },
        {
            "id": "cc",
            "name": "Cocos (Keeling) Islands",
            "flag": "🇨🇨",
            "alpha2": "cc",
            "alpha3": "cck",
            "ioc": ""
        },
        {
            "id": "co",
            "name": "Colombia",
            "flag": "🇨🇴",
            "alpha2": "co",
            "alpha3": "col",
            "ioc": "col"
        },
        {
            "id": "km",
            "name": "Comoros",
            "flag": "🇰🇲",
            "alpha2": "km",
            "alpha3": "com",
            "ioc": "com"
        },
        {
            "id": "ck",
            "name": "Cook Islands",
            "flag": "🇨🇰",
            "alpha2": "ck",
            "alpha3": "cok",
            "ioc": "cok"
        },
        {
            "id": "cr",
            "name": "Costa Rica",
            "flag": "🇨🇷",
            "alpha2": "cr",
            "alpha3": "cri",
            "ioc": "crc"
        },
        {
            "id": "hr",
            "name": "Croatia",
            "flag": "🇭🇷",
            "alpha2": "hr",
            "alpha3": "hrv",
            "ioc": "cro"
        },
        {
            "id": "cu",
            "name": "Cuba",
            "flag": "🇨🇺",
            "alpha2": "cu",
            "alpha3": "cub",
            "ioc": "cub"
        },
        {
            "id": "cw",
            "name": "Curacao",
            "flag": "🇨🇼",
            "alpha2": "cw",
            "alpha3": "cuw",
            "ioc": ""
        },
        {
            "id": "cy",
            "name": "Cyprus",
            "flag": "🇨🇾",
            "alpha2": "cy",
            "alpha3": "cyp",
            "ioc": "cyp"
        },
        {
            "id": "cz",
            "name": "Czech Republic",
            "flag": "🇨🇿",
            "alpha2": "cz",
            "alpha3": "cze",
            "ioc": "cze"
        },
        {
            "id": "ci",
            "name": "Côte d'Ivoire",
            "flag": "🇨🇮",
            "alpha2": "ci",
            "alpha3": "civ",
            "ioc": "civ"
        },
        {
            "id": "cd",
            "name": "Democratic Republic Of Congo",
            "flag": "🇨🇩",
            "alpha2": "cd",
            "alpha3": "cod",
            "ioc": "cod"
        },
        {
            "id": "dk",
            "name": "Denmark",
            "flag": "🇩🇰",
            "alpha2": "dk",
            "alpha3": "dnk",
            "ioc": "den"
        },
        {
            "id": "dj",
            "name": "Djibouti",
            "flag": "🇩🇯",
            "alpha2": "dj",
            "alpha3": "dji",
            "ioc": "dji"
        },
        {
            "id": "dm",
            "name": "Dominica",
            "flag": "🇩🇲",
            "alpha2": "dm",
            "alpha3": "dma",
            "ioc": "dma"
        },
        {
            "id": "do",
            "name": "Dominican Republic",
            "flag": "🇩🇴",
            "alpha2": "do",
            "alpha3": "dom",
            "ioc": "dom"
        },
        {
            "id": "ec",
            "name": "Ecuador",
            "flag": "🇪🇨",
            "alpha2": "ec",
            "alpha3": "ecu",
            "ioc": "ecu"
        },
        {
            "id": "eg",
            "name": "Egypt",
            "flag": "🇪🇬",
            "alpha2": "eg",
            "alpha3": "egy",
            "ioc": "egy"
        },
        {
            "id": "sv",
            "name": "El Salvador",
            "flag": "🇸🇻",
            "alpha2": "sv",
            "alpha3": "slv",
            "ioc": "esa"
        },
        {
            "id": "gq",
            "name": "Equatorial Guinea",
            "flag": "🇬🇶",
            "alpha2": "gq",
            "alpha3": "gnq",
            "ioc": "geq"
        },
        {
            "id": "er",
            "name": "Eritrea",
            "flag": "🇪🇷",
            "alpha2": "er",
            "alpha3": "eri",
            "ioc": "eri"
        },
        {
            "id": "ee",
            "name": "Estonia",
            "flag": "🇪🇪",
            "alpha2": "ee",
            "alpha3": "est",
            "ioc": "est"
        },
        {
            "id": "et",
            "name": "Ethiopia",
            "flag": "🇪🇹",
            "alpha2": "et",
            "alpha3": "eth",
            "ioc": "eth"
        },
        {
            "id": "fk",
            "name": "Falkland Islands",
            "flag": "🇫🇰",
            "alpha2": "fk",
            "alpha3": "flk",
            "ioc": ""
        },
        {
            "id": "fo",
            "name": "Faroe Islands",
            "flag": "🇫🇴",
            "alpha2": "fo",
            "alpha3": "fro",
            "ioc": "fai"
        },
        {
            "id": "fj",
            "name": "Fiji",
            "flag": "🇫🇯",
            "alpha2": "fj",
            "alpha3": "fji",
            "ioc": "fij"
        },
        {
            "id": "fi",
            "name": "Finland",
            "flag": "🇫🇮",
            "alpha2": "fi",
            "alpha3": "fin",
            "ioc": "fin"
        },
        {
            "id": "fr",
            "name": "France",
            "flag": "🇫🇷",
            "alpha2": "fr",
            "alpha3": "fra",
            "ioc": "fra"
        },
        {
            "id": "gf",
            "name": "French Guiana",
            "flag": "🇬🇫",
            "alpha2": "gf",
            "alpha3": "guf",
            "ioc": ""
        },
        {
            "id": "pf",
            "name": "French Polynesia",
            "flag": "🇵🇫",
            "alpha2": "pf",
            "alpha3": "pyf",
            "ioc": ""
        },
        {
            "id": "tf",
            "name": "French Southern Territories",
            "flag": "🇹🇫",
            "alpha2": "tf",
            "alpha3": "atf",
            "ioc": ""
        },
        {
            "id": "ga",
            "name": "Gabon",
            "flag": "🇬🇦",
            "alpha2": "ga",
            "alpha3": "gab",
            "ioc": "gab"
        },
        {
            "id": "gm",
            "name": "Gambia",
            "flag": "🇬🇲",
            "alpha2": "gm",
            "alpha3": "gmb",
            "ioc": "gam"
        },
        {
            "id": "ge",
            "name": "Georgia",
            "flag": "🇬🇪",
            "alpha2": "ge",
            "alpha3": "geo",
            "ioc": "geo"
        },
        {
            "id": "de",
            "name": "Germany",
            "flag": "🇩🇪",
            "alpha2": "de",
            "alpha3": "deu",
            "ioc": "ger"
        },
        {
            "id": "gh",
            "name": "Ghana",
            "flag": "🇬🇭",
            "alpha2": "gh",
            "alpha3": "gha",
            "ioc": "gha"
        },
        {
            "id": "gi",
            "name": "Gibraltar",
            "flag": "🇬🇮",
            "alpha2": "gi",
            "alpha3": "gib",
            "ioc": ""
        },
        {
            "id": "gr",
            "name": "Greece",
            "flag": "🇬🇷",
            "alpha2": "gr",
            "alpha3": "grc",
            "ioc": "gre"
        },
        {
            "id": "gl",
            "name": "Greenland",
            "flag": "🇬🇱",
            "alpha2": "gl",
            "alpha3": "grl",
            "ioc": ""
        },
        {
            "id": "gd",
            "name": "Grenada",
            "flag": "🇬🇩",
            "alpha2": "gd",
            "alpha3": "grd",
            "ioc": "grn"
        },
        {
            "id": "gp",
            "name": "Guadeloupe",
            "flag": "🇬🇵",
            "alpha2": "gp",
            "alpha3": "glp",
            "ioc": ""
        },
        {
            "id": "gu",
            "name": "Guam",
            "flag": "🇬🇺",
            "alpha2": "gu",
            "alpha3": "gum",
            "ioc": "gum"
        },
        {
            "id": "gt",
            "name": "Guatemala",
            "flag": "🇬🇹",
            "alpha2": "gt",
            "alpha3": "gtm",
            "ioc": "gua"
        },
        {
            "id": "gg",
            "name": "Guernsey",
            "flag": "🇬🇬",
            "alpha2": "gg",
            "alpha3": "ggy",
            "ioc": "gci"
        },
        {
            "id": "gn",
            "name": "Guinea",
            "flag": "🇬🇳",
            "alpha2": "gn",
            "alpha3": "gin",
            "ioc": "gui"
        },
        {
            "id": "gw",
            "name": "Guinea-bissau",
            "flag": "🇬🇼",
            "alpha2": "gw",
            "alpha3": "gnb",
            "ioc": "gbs"
        },
        {
            "id": "gy",
            "name": "Guyana",
            "flag": "🇬🇾",
            "alpha2": "gy",
            "alpha3": "guy",
            "ioc": "guy"
        },
        {
            "id": "ht",
            "name": "Haiti",
            "flag": "🇭🇹",
            "alpha2": "ht",
            "alpha3": "hti",
            "ioc": "hai"
        },
        {
            "id": "hm",
            "name": "Heard Island And McDonald Islands",
            "flag": "🇭🇲",
            "alpha2": "hm",
            "alpha3": "hmd",
            "ioc": ""
        },
        {
            "id": "hn",
            "name": "Honduras",
            "flag": "🇭🇳",
            "alpha2": "hn",
            "alpha3": "hnd",
            "ioc": "hon"
        },
        {
            "id": "hk",
            "name": "Hong Kong",
            "flag": "🇭🇰",
            "alpha2": "hk",
            "alpha3": "hkg",
            "ioc": "hkg"
        },
        {
            "id": "hu",
            "name": "Hungary",
            "flag": "🇭🇺",
            "alpha2": "hu",
            "alpha3": "hun",
            "ioc": "hun"
        },
        {
            "id": "is",
            "name": "Iceland",
            "flag": "🇮🇸",
            "alpha2": "is",
            "alpha3": "isl",
            "ioc": "isl"
        },
        {
            "id": "in",
            "name": "India",
            "flag": "🇮🇳",
            "alpha2": "in",
            "alpha3": "ind",
            "ioc": "ind"
        },
        {
            "id": "id",
            "name": "Indonesia",
            "flag": "🇮🇩",
            "alpha2": "id",
            "alpha3": "idn",
            "ioc": "ina"
        },
        {
            "id": "ir",
            "name": "Iran, Islamic Republic Of",
            "flag": "🇮🇷",
            "alpha2": "ir",
            "alpha3": "irn",
            "ioc": "iri"
        },
        {
            "id": "iq",
            "name": "Iraq",
            "flag": "🇮🇶",
            "alpha2": "iq",
            "alpha3": "irq",
            "ioc": "irq"
        },
        {
            "id": "ie",
            "name": "Ireland",
            "flag": "🇮🇪",
            "alpha2": "ie",
            "alpha3": "irl",
            "ioc": "irl"
        },
        {
            "id": "im",
            "name": "Isle Of Man",
            "flag": "🇮🇲",
            "alpha2": "im",
            "alpha3": "imn",
            "ioc": ""
        },
        {
            "id": "il",
            "name": "Israel",
            "flag": "🇮🇱",
            "alpha2": "il",
            "alpha3": "isr",
            "ioc": "isr"
        },
        {
            "id": "it",
            "name": "Italy",
            "flag": "🇮🇹",
            "alpha2": "it",
            "alpha3": "ita",
            "ioc": "ita"
        },
        {
            "id": "jm",
            "name": "Jamaica",
            "flag": "🇯🇲",
            "alpha2": "jm",
            "alpha3": "jam",
            "ioc": "jam"
        },
        {
            "id": "jp",
            "name": "Japan",
            "flag": "🇯🇵",
            "alpha2": "jp",
            "alpha3": "jpn",
            "ioc": "jpn"
        },
        {
            "id": "je",
            "name": "Jersey",
            "flag": "🇯🇪",
            "alpha2": "je",
            "alpha3": "jey",
            "ioc": "jci"
        },
        {
            "id": "jo",
            "name": "Jordan",
            "flag": "🇯🇴",
            "alpha2": "jo",
            "alpha3": "jor",
            "ioc": "jor"
        },
        {
            "id": "kz",
            "name": "Kazakhstan",
            "flag": "🇰🇿",
            "alpha2": "kz",
            "alpha3": "kaz",
            "ioc": "kaz"
        },
        {
            "id": "ke",
            "name": "Kenya",
            "flag": "🇰🇪",
            "alpha2": "ke",
            "alpha3": "ken",
            "ioc": "ken"
        },
        {
            "id": "ki",
            "name": "Kiribati",
            "flag": "🇰🇮",
            "alpha2": "ki",
            "alpha3": "kir",
            "ioc": "kir"
        },
        {
            "id": "kp",
            "name": "Korea, Democratic People's Republic Of",
            "flag": "🇰🇵",
            "alpha2": "kp",
            "alpha3": "prk",
            "ioc": "prk"
        },
        {
            "id": "kr",
            "name": "Korea, Republic Of",
            "flag": "🇰🇷",
            "alpha2": "kr",
            "alpha3": "kor",
            "ioc": "kor"
        },
        {
            "id": "kw",
            "name": "Kuwait",
            "flag": "🇰🇼",
            "alpha2": "kw",
            "alpha3": "kwt",
            "ioc": "kuw"
        },
        {
            "id": "kg",
            "name": "Kyrgyzstan",
            "flag": "🇰🇬",
            "alpha2": "kg",
            "alpha3": "kgz",
            "ioc": "kgz"
        },
        {
            "id": "la",
            "name": "Lao People's Democratic Republic",
            "flag": "🇱🇦",
            "alpha2": "la",
            "alpha3": "lao",
            "ioc": "lao"
        },
        {
            "id": "lv",
            "name": "Latvia",
            "flag": "🇱🇻",
            "alpha2": "lv",
            "alpha3": "lva",
            "ioc": "lat"
        },
        {
            "id": "lb",
            "name": "Lebanon",
            "flag": "🇱🇧",
            "alpha2": "lb",
            "alpha3": "lbn",
            "ioc": "lib"
        },
        {
            "id": "ls",
            "name": "Lesotho",
            "flag": "🇱🇸",
            "alpha2": "ls",
            "alpha3": "lso",
            "ioc": "les"
        },
        {
            "id": "lr",
            "name": "Liberia",
            "flag": "🇱🇷",
            "alpha2": "lr",
            "alpha3": "lbr",
            "ioc": "lbr"
        },
        {
            "id": "ly",
            "name": "Libya",
            "flag": "🇱🇾",
            "alpha2": "ly",
            "alpha3": "lby",
            "ioc": "lba"
        },
        {
            "id": "li",
            "name": "Liechtenstein",
            "flag": "🇱🇮",
            "alpha2": "li",
            "alpha3": "lie",
            "ioc": "lie"
        },
        {
            "id": "lt",
            "name": "Lithuania",
            "flag": "🇱🇹",
            "alpha2": "lt",
            "alpha3": "ltu",
            "ioc": "ltu"
        },
        {
            "id": "lu",
            "name": "Luxembourg",
            "flag": "🇱🇺",
            "alpha2": "lu",
            "alpha3": "lux",
            "ioc": "lux"
        },
        {
            "id": "mo",
            "name": "Macao",
            "flag": "🇲🇴",
            "alpha2": "mo",
            "alpha3": "mac",
            "ioc": "mac"
        },
        {
            "id": "mk",
            "name": "Macedonia, The Former Yugoslav Republic Of",
            "flag": "🇲🇰",
            "alpha2": "mk",
            "alpha3": "mkd",
            "ioc": "mkd"
        },
        {
            "id": "mg",
            "name": "Madagascar",
            "flag": "🇲🇬",
            "alpha2": "mg",
            "alpha3": "mdg",
            "ioc": "mad"
        },
        {
            "id": "mw",
            "name": "Malawi",
            "flag": "🇲🇼",
            "alpha2": "mw",
            "alpha3": "mwi",
            "ioc": "maw"
        },
        {
            "id": "my",
            "name": "Malaysia",
            "flag": "🇲🇾",
            "alpha2": "my",
            "alpha3": "mys",
            "ioc": "mas"
        },
        {
            "id": "mv",
            "name": "Maldives",
            "flag": "🇲🇻",
            "alpha2": "mv",
            "alpha3": "mdv",
            "ioc": "mdv"
        },
        {
            "id": "ml",
            "name": "Mali",
            "flag": "🇲🇱",
            "alpha2": "ml",
            "alpha3": "mli",
            "ioc": "mli"
        },
        {
            "id": "mt",
            "name": "Malta",
            "flag": "🇲🇹",
            "alpha2": "mt",
            "alpha3": "mlt",
            "ioc": "mlt"
        },
        {
            "id": "mh",
            "name": "Marshall Islands",
            "flag": "🇲🇭",
            "alpha2": "mh",
            "alpha3": "mhl",
            "ioc": "mhl"
        },
        {
            "id": "mq",
            "name": "Martinique",
            "flag": "🇲🇶",
            "alpha2": "mq",
            "alpha3": "mtq",
            "ioc": ""
        },
        {
            "id": "mr",
            "name": "Mauritania",
            "flag": "🇲🇷",
            "alpha2": "mr",
            "alpha3": "mrt",
            "ioc": "mtn"
        },
        {
            "id": "mu",
            "name": "Mauritius",
            "flag": "🇲🇺",
            "alpha2": "mu",
            "alpha3": "mus",
            "ioc": "mri"
        },
        {
            "id": "yt",
            "name": "Mayotte",
            "flag": "🇾🇹",
            "alpha2": "yt",
            "alpha3": "myt",
            "ioc": ""
        },
        {
            "id": "mx",
            "name": "Mexico",
            "flag": "🇲🇽",
            "alpha2": "mx",
            "alpha3": "mex",
            "ioc": "mex"
        },
        {
            "id": "fm",
            "name": "Micronesia, Federated States Of",
            "flag": "🇫🇲",
            "alpha2": "fm",
            "alpha3": "fsm",
            "ioc": "fsm"
        },
        {
            "id": "md",
            "name": "Moldova",
            "flag": "🇲🇩",
            "alpha2": "md",
            "alpha3": "mda",
            "ioc": "mda"
        },
        {
            "id": "mc",
            "name": "Monaco",
            "flag": "🇲🇨",
            "alpha2": "mc",
            "alpha3": "mco",
            "ioc": "mon"
        },
        {
            "id": "mn",
            "name": "Mongolia",
            "flag": "🇲🇳",
            "alpha2": "mn",
            "alpha3": "mng",
            "ioc": "mgl"
        },
        {
            "id": "me",
            "name": "Montenegro",
            "flag": "🇲🇪",
            "alpha2": "me",
            "alpha3": "mne",
            "ioc": "mne"
        },
        {
            "id": "ms",
            "name": "Montserrat",
            "flag": "🇲🇸",
            "alpha2": "ms",
            "alpha3": "msr",
            "ioc": ""
        },
        {
            "id": "ma",
            "name": "Morocco",
            "flag": "🇲🇦",
            "alpha2": "ma",
            "alpha3": "mar",
            "ioc": "mar"
        },
        {
            "id": "mz",
            "name": "Mozambique",
            "flag": "🇲🇿",
            "alpha2": "mz",
            "alpha3": "moz",
            "ioc": "moz"
        },
        {
            "id": "mm",
            "name": "Myanmar",
            "flag": "🇲🇲",
            "alpha2": "mm",
            "alpha3": "mmr",
            "ioc": "mya"
        },
        {
            "id": "na",
            "name": "Namibia",
            "flag": "🇳🇦",
            "alpha2": "na",
            "alpha3": "nam",
            "ioc": "nam"
        },
        {
            "id": "nr",
            "name": "Nauru",
            "flag": "🇳🇷",
            "alpha2": "nr",
            "alpha3": "nru",
            "ioc": "nru"
        },
        {
            "id": "np",
            "name": "Nepal",
            "flag": "🇳🇵",
            "alpha2": "np",
            "alpha3": "npl",
            "ioc": "nep"
        },
        {
            "id": "nl",
            "name": "Netherlands",
            "flag": "🇳🇱",
            "alpha2": "nl",
            "alpha3": "nld",
            "ioc": "ned"
        },
        {
            "id": "nc",
            "name": "New Caledonia",
            "flag": "🇳🇨",
            "alpha2": "nc",
            "alpha3": "ncl",
            "ioc": ""
        },
        {
            "id": "nz",
            "name": "New Zealand",
            "flag": "🇳🇿",
            "alpha2": "nz",
            "alpha3": "nzl",
            "ioc": "nzl"
        },
        {
            "id": "ni",
            "name": "Nicaragua",
            "flag": "🇳🇮",
            "alpha2": "ni",
            "alpha3": "nic",
            "ioc": "nca"
        },
        {
            "id": "ne",
            "name": "Niger",
            "flag": "🇳🇪",
            "alpha2": "ne",
            "alpha3": "ner",
            "ioc": "nig"
        },
        {
            "id": "ng",
            "name": "Nigeria",
            "flag": "🇳🇬",
            "alpha2": "ng",
            "alpha3": "nga",
            "ioc": "ngr"
        },
        {
            "id": "nu",
            "name": "Niue",
            "flag": "🇳🇺",
            "alpha2": "nu",
            "alpha3": "niu",
            "ioc": ""
        },
        {
            "id": "nf",
            "name": "Norfolk Island",
            "flag": "🇳🇫",
            "alpha2": "nf",
            "alpha3": "nfk",
            "ioc": ""
        },
        {
            "id": "mp",
            "name": "Northern Mariana Islands",
            "flag": "🇲🇵",
            "alpha2": "mp",
            "alpha3": "mnp",
            "ioc": ""
        },
        {
            "id": "no",
            "name": "Norway",
            "flag": "🇳🇴",
            "alpha2": "no",
            "alpha3": "nor",
            "ioc": "nor"
        },
        {
            "id": "om",
            "name": "Oman",
            "flag": "🇴🇲",
            "alpha2": "om",
            "alpha3": "omn",
            "ioc": "oma"
        },
        {
            "id": "pk",
            "name": "Pakistan",
            "flag": "🇵🇰",
            "alpha2": "pk",
            "alpha3": "pak",
            "ioc": "pak"
        },
        {
            "id": "pw",
            "name": "Palau",
            "flag": "🇵🇼",
            "alpha2": "pw",
            "alpha3": "plw",
            "ioc": "plw"
        },
        {
            "id": "ps",
            "name": "Palestinian Territory, Occupied",
            "flag": "🇵🇸",
            "alpha2": "ps",
            "alpha3": "pse",
            "ioc": "ple"
        },
        {
            "id": "pa",
            "name": "Panama",
            "flag": "🇵🇦",
            "alpha2": "pa",
            "alpha3": "pan",
            "ioc": "pan"
        },
        {
            "id": "pg",
            "name": "Papua New Guinea",
            "flag": "🇵🇬",
            "alpha2": "pg",
            "alpha3": "png",
            "ioc": "png"
        },
        {
            "id": "py",
            "name": "Paraguay",
            "flag": "🇵🇾",
            "alpha2": "py",
            "alpha3": "pry",
            "ioc": "par"
        },
        {
            "id": "pe",
            "name": "Peru",
            "flag": "🇵🇪",
            "alpha2": "pe",
            "alpha3": "per",
            "ioc": "per"
        },
        {
            "id": "ph",
            "name": "Philippines",
            "flag": "🇵🇭",
            "alpha2": "ph",
            "alpha3": "phl",
            "ioc": "phi"
        },
        {
            "id": "pn",
            "name": "Pitcairn",
            "flag": "🇵🇳",
            "alpha2": "pn",
            "alpha3": "pcn",
            "ioc": ""
        },
        {
            "id": "pl",
            "name": "Poland",
            "flag": "🇵🇱",
            "alpha2": "pl",
            "alpha3": "pol",
            "ioc": "pol"
        },
        {
            "id": "pt",
            "name": "Portugal",
            "flag": "🇵🇹",
            "alpha2": "pt",
            "alpha3": "prt",
            "ioc": "por"
        },
        {
            "id": "pr",
            "name": "Puerto Rico",
            "flag": "🇵🇷",
            "alpha2": "pr",
            "alpha3": "pri",
            "ioc": "pur"
        },
        {
            "id": "qa",
            "name": "Qatar",
            "flag": "🇶🇦",
            "alpha2": "qa",
            "alpha3": "qat",
            "ioc": "qat"
        },
        {
            "id": "cg",
            "name": "Republic Of Congo",
            "flag": "🇨🇬",
            "alpha2": "cg",
            "alpha3": "cog",
            "ioc": "cgo"
        },
        {
            "id": "re",
            "name": "Reunion",
            "flag": "🇷🇪",
            "alpha2": "re",
            "alpha3": "reu",
            "ioc": ""
        },
        {
            "id": "ro",
            "name": "Romania",
            "flag": "🇷🇴",
            "alpha2": "ro",
            "alpha3": "rou",
            "ioc": "rou"
        },
        {
            "id": "ru",
            "name": "Russian Federation",
            "flag": "🇷🇺",
            "alpha2": "ru",
            "alpha3": "rus",
            "ioc": "rus"
        },
        {
            "id": "rw",
            "name": "Rwanda",
            "flag": "🇷🇼",
            "alpha2": "rw",
            "alpha3": "rwa",
            "ioc": "rwa"
        },
        {
            "id": "bl",
            "name": "Saint Barthélemy",
            "flag": "🇧🇱",
            "alpha2": "bl",
            "alpha3": "blm",
            "ioc": ""
        },
        {
            "id": "sh",
            "name": "Saint Helena, Ascension And Tristan Da Cunha",
            "flag": "🇸🇭",
            "alpha2": "sh",
            "alpha3": "shn",
            "ioc": ""
        },
        {
            "id": "kn",
            "name": "Saint Kitts And Nevis",
            "flag": "🇰🇳",
            "alpha2": "kn",
            "alpha3": "kna",
            "ioc": "skn"
        },
        {
            "id": "lc",
            "name": "Saint Lucia",
            "flag": "🇱🇨",
            "alpha2": "lc",
            "alpha3": "lca",
            "ioc": "lca"
        },
        {
            "id": "mf",
            "name": "Saint Martin",
            "flag": "🇲🇫",
            "alpha2": "mf",
            "alpha3": "maf",
            "ioc": ""
        },
        {
            "id": "pm",
            "name": "Saint Pierre And Miquelon",
            "flag": "🇵🇲",
            "alpha2": "pm",
            "alpha3": "spm",
            "ioc": ""
        },
        {
            "id": "vc",
            "name": "Saint Vincent And The Grenadines",
            "flag": "🇻🇨",
            "alpha2": "vc",
            "alpha3": "vct",
            "ioc": "vin"
        },
        {
            "id": "ws",
            "name": "Samoa",
            "flag": "🇼🇸",
            "alpha2": "ws",
            "alpha3": "wsm",
            "ioc": "sam"
        },
        {
            "id": "sm",
            "name": "San Marino",
            "flag": "🇸🇲",
            "alpha2": "sm",
            "alpha3": "smr",
            "ioc": "smr"
        },
        {
            "id": "st",
            "name": "Sao Tome and Principe",
            "flag": "🇸🇹",
            "alpha2": "st",
            "alpha3": "stp",
            "ioc": "stp"
        },
        {
            "id": "sa",
            "name": "Saudi Arabia",
            "flag": "🇸🇦",
            "alpha2": "sa",
            "alpha3": "sau",
            "ioc": "ksa"
        },
        {
            "id": "sn",
            "name": "Senegal",
            "flag": "🇸🇳",
            "alpha2": "sn",
            "alpha3": "sen",
            "ioc": "sen"
        },
        {
            "id": "rs",
            "name": "Serbia",
            "flag": "🇷🇸",
            "alpha2": "rs",
            "alpha3": "srb",
            "ioc": "srb"
        },
        {
            "id": "sc",
            "name": "Seychelles",
            "flag": "🇸🇨",
            "alpha2": "sc",
            "alpha3": "syc",
            "ioc": "sey"
        },
        {
            "id": "sl",
            "name": "Sierra Leone",
            "flag": "🇸🇱",
            "alpha2": "sl",
            "alpha3": "sle",
            "ioc": "sle"
        },
        {
            "id": "sg",
            "name": "Singapore",
            "flag": "🇸🇬",
            "alpha2": "sg",
            "alpha3": "sgp",
            "ioc": "sin"
        },
        {
            "id": "sx",
            "name": "Sint Maarten",
            "flag": "🇸🇽",
            "alpha2": "sx",
            "alpha3": "sxm",
            "ioc": ""
        },
        {
            "id": "sk",
            "name": "Slovakia",
            "flag": "🇸🇰",
            "alpha2": "sk",
            "alpha3": "svk",
            "ioc": "svk"
        },
        {
            "id": "si",
            "name": "Slovenia",
            "flag": "🇸🇮",
            "alpha2": "si",
            "alpha3": "svn",
            "ioc": "slo"
        },
        {
            "id": "sb",
            "name": "Solomon Islands",
            "flag": "🇸🇧",
            "alpha2": "sb",
            "alpha3": "slb",
            "ioc": "sol"
        },
        {
            "id": "so",
            "name": "Somalia",
            "flag": "🇸🇴",
            "alpha2": "so",
            "alpha3": "som",
            "ioc": "som"
        },
        {
            "id": "za",
            "name": "South Africa",
            "flag": "🇿🇦",
            "alpha2": "za",
            "alpha3": "zaf",
            "ioc": "rsa"
        },
        {
            "id": "gs",
            "name": "South Georgia And The South Sandwich Islands",
            "flag": "🇬🇸",
            "alpha2": "gs",
            "alpha3": "sgs",
            "ioc": ""
        },
        {
            "id": "ss",
            "name": "South Sudan",
            "flag": "🇸🇸",
            "alpha2": "ss",
            "alpha3": "ssd",
            "ioc": "ssd"
        },
        {
            "id": "es",
            "name": "Spain",
            "flag": "🇪🇸",
            "alpha2": "es",
            "alpha3": "esp",
            "ioc": "esp"
        },
        {
            "id": "lk",
            "name": "Sri Lanka",
            "flag": "🇱🇰",
            "alpha2": "lk",
            "alpha3": "lka",
            "ioc": "sri"
        },
        {
            "id": "sd",
            "name": "Sudan",
            "flag": "🇸🇩",
            "alpha2": "sd",
            "alpha3": "sdn",
            "ioc": "sud"
        },
        {
            "id": "sr",
            "name": "Suriname",
            "flag": "🇸🇷",
            "alpha2": "sr",
            "alpha3": "sur",
            "ioc": "sur"
        },
        {
            "id": "sj",
            "name": "Svalbard And Jan Mayen",
            "flag": "🇸🇯",
            "alpha2": "sj",
            "alpha3": "sjm",
            "ioc": ""
        },
        {
            "id": "sz",
            "name": "Swaziland",
            "flag": "🇸🇿",
            "alpha2": "sz",
            "alpha3": "swz",
            "ioc": "swz"
        },
        {
            "id": "se",
            "name": "Sweden",
            "flag": "🇸🇪",
            "alpha2": "se",
            "alpha3": "swe",
            "ioc": "swe"
        },
        {
            "id": "ch",
            "name": "Switzerland",
            "flag": "🇨🇭",
            "alpha2": "ch",
            "alpha3": "che",
            "ioc": "sui"
        },
        {
            "id": "sy",
            "name": "Syrian Arab Republic",
            "flag": "🇸🇾",
            "alpha2": "sy",
            "alpha3": "syr",
            "ioc": "syr"
        },
        {
            "id": "tw",
            "name": "Taiwan",
            "flag": "🇹🇼",
            "alpha2": "tw",
            "alpha3": "twn",
            "ioc": "tpe"
        },
        {
            "id": "tj",
            "name": "Tajikistan",
            "flag": "🇹🇯",
            "alpha2": "tj",
            "alpha3": "tjk",
            "ioc": "tjk"
        },
        {
            "id": "tz",
            "name": "Tanzania, United Republic Of",
            "flag": "🇹🇿",
            "alpha2": "tz",
            "alpha3": "tza",
            "ioc": "tan"
        },
        {
            "id": "th",
            "name": "Thailand",
            "flag": "🇹🇭",
            "alpha2": "th",
            "alpha3": "tha",
            "ioc": "tha"
        },
        {
            "id": "tl",
            "name": "Timor-Leste, Democratic Republic of",
            "flag": "🇹🇱",
            "alpha2": "tl",
            "alpha3": "tls",
            "ioc": "tls"
        },
        {
            "id": "tg",
            "name": "Togo",
            "flag": "🇹🇬",
            "alpha2": "tg",
            "alpha3": "tgo",
            "ioc": "tog"
        },
        {
            "id": "tk",
            "name": "Tokelau",
            "flag": "🇹🇰",
            "alpha2": "tk",
            "alpha3": "tkl",
            "ioc": ""
        },
        {
            "id": "to",
            "name": "Tonga",
            "flag": "🇹🇴",
            "alpha2": "to",
            "alpha3": "ton",
            "ioc": "tga"
        },
        {
            "id": "tt",
            "name": "Trinidad And Tobago",
            "flag": "🇹🇹",
            "alpha2": "tt",
            "alpha3": "tto",
            "ioc": "tto"
        },
        {
            "id": "tn",
            "name": "Tunisia",
            "flag": "🇹🇳",
            "alpha2": "tn",
            "alpha3": "tun",
            "ioc": "tun"
        },
        {
            "id": "tr",
            "name": "Turkey",
            "flag": "🇹🇷",
            "alpha2": "tr",
            "alpha3": "tur",
            "ioc": "tur"
        },
        {
            "id": "tm",
            "name": "Turkmenistan",
            "flag": "🇹🇲",
            "alpha2": "tm",
            "alpha3": "tkm",
            "ioc": "tkm"
        },
        {
            "id": "tc",
            "name": "Turks And Caicos Islands",
            "flag": "🇹🇨",
            "alpha2": "tc",
            "alpha3": "tca",
            "ioc": ""
        },
        {
            "id": "tv",
            "name": "Tuvalu",
            "flag": "🇹🇻",
            "alpha2": "tv",
            "alpha3": "tuv",
            "ioc": "tuv"
        },
        {
            "id": "ug",
            "name": "Uganda",
            "flag": "🇺🇬",
            "alpha2": "ug",
            "alpha3": "uga",
            "ioc": "uga"
        },
        {
            "id": "ua",
            "name": "Ukraine",
            "flag": "🇺🇦",
            "alpha2": "ua",
            "alpha3": "ukr",
            "ioc": "ukr"
        },
        {
            "id": "ae",
            "name": "United Arab Emirates",
            "flag": "🇦🇪",
            "alpha2": "ae",
            "alpha3": "are",
            "ioc": "uae"
        },
        {
            "id": "gb",
            "name": "United Kingdom",
            "flag": "🇬🇧",
            "alpha2": "gb",
            "alpha3": "gbr",
            "ioc": "gbr"
        },
        {
            "id": "us",
            "name": "United States",
            "flag": "🇺🇸",
            "alpha2": "us",
            "alpha3": "usa",
            "ioc": "usa"
        },
        {
            "id": "um",
            "name": "United States Minor Outlying Islands",
            "flag": "🇺🇲",
            "alpha2": "um",
            "alpha3": "umi",
            "ioc": ""
        },
        {
            "id": "uy",
            "name": "Uruguay",
            "flag": "🇺🇾",
            "alpha2": "uy",
            "alpha3": "ury",
            "ioc": "uru"
        },
        {
            "id": "uz",
            "name": "Uzbekistan",
            "flag": "🇺🇿",
            "alpha2": "uz",
            "alpha3": "uzb",
            "ioc": "uzb"
        },
        {
            "id": "vu",
            "name": "Vanuatu",
            "flag": "🇻🇺",
            "alpha2": "vu",
            "alpha3": "vut",
            "ioc": "van"
        },
        {
            "id": "va",
            "name": "Vatican City State",
            "flag": "🇻🇦",
            "alpha2": "va",
            "alpha3": "vat",
            "ioc": ""
        },
        {
            "id": "ve",
            "name": "Venezuela, Bolivarian Republic Of",
            "flag": "🇻🇪",
            "alpha2": "ve",
            "alpha3": "ven",
            "ioc": "ven"
        },
        {
            "id": "vn",
            "name": "Viet Nam",
            "flag": "🇻🇳",
            "alpha2": "vn",
            "alpha3": "vnm",
            "ioc": "vie"
        },
        {
            "id": "vg",
            "name": "Virgin Islands (British)",
            "flag": "🇻🇬",
            "alpha2": "vg",
            "alpha3": "vgb",
            "ioc": "ivb"
        },
        {
            "id": "vi",
            "name": "Virgin Islands (US)",
            "flag": "🇻🇮",
            "alpha2": "vi",
            "alpha3": "vir",
            "ioc": "isv"
        },
        {
            "id": "wf",
            "name": "Wallis And Futuna",
            "flag": "🇼🇫",
            "alpha2": "wf",
            "alpha3": "wlf",
            "ioc": ""
        },
        {
            "id": "eh",
            "name": "Western Sahara",
            "flag": "🇪🇭",
            "alpha2": "eh",
            "alpha3": "esh",
            "ioc": ""
        },
        {
            "id": "ye",
            "name": "Yemen",
            "flag": "🇾🇪",
            "alpha2": "ye",
            "alpha3": "yem",
            "ioc": "yem"
        },
        {
            "id": "zm",
            "name": "Zambia",
            "flag": "🇿🇲",
            "alpha2": "zm",
            "alpha3": "zmb",
            "ioc": "zam"
        },
        {
            "id": "zw",
            "name": "Zimbabwe",
            "flag": "🇿🇼",
            "alpha2": "zw",
            "alpha3": "zwe",
            "ioc": "zim"
        },
    ];

    var applyExclusionsAndAdditions = function (countries, exclusions, additions) {
        if (!exclusions && !additions)
            return countries;
        var excluded = (exclusions || []).reduce(function (acc, id) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[id] = true, _a)));
        }, {});
        return __spreadArray(__spreadArray([], countries.filter(function (c) { return excluded[c.id] === undefined; })), (additions || []));
    };
    var filter = function (matchNameFromStart, matchAbbreviations) { return function (inputText) {
        var regex = new RegExp("" + (matchNameFromStart ? '^' : '') + inputText, 'i');
        return matchAbbreviations
            ? function (_a) {
                var name = _a.name, alpha2 = _a.alpha2, alpha3 = _a.alpha3, ioc = _a.ioc;
                return regex.test(name) || regex.test(alpha2) || regex.test(alpha3) || regex.test(ioc);
            }
            : function (_a) {
                var name = _a.name;
                return regex.test(name);
            };
    }; };
    var getInitialList = function (countries, sort) { return sort ? __spreadArray([], countries.sort(sort)) : __spreadArray([], countries); };
    var getUpdatedList = function (inputText, list, activeListItemIndex, countries, sort, matchNameFromStart, matchAbbreviations) {
        var currentActiveCountry = list[activeListItemIndex];
        var countryFilter = filter(matchNameFromStart, matchAbbreviations)(inputText);
        var updatedList = sort ? __spreadArray([], countries.filter(countryFilter).sort(sort)) : __spreadArray([], countries.filter(countryFilter));
        var newActiveCountryIndex = -1;
        if (updatedList.length === 1) {
            newActiveCountryIndex = 0;
        }
        else if (currentActiveCountry) {
            var index = updatedList.findIndex(function (country) { return country.id === currentActiveCountry.id; });
            newActiveCountryIndex = Number.isFinite(index) ? index : -1;
        }
        return [
            updatedList,
            newActiveCountryIndex,
        ];
    };
    var EMOJI_FLAG_REGEX = /^[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s*/;
    var removeEmojiFlag = function (str) { return str.replace(EMOJI_FLAG_REGEX, ''); };
    var classNames = function (items) { return items.filter(function (item) { return !!item; }).join(' '); };

    var ListItem = React.forwardRef(function (_a, ref) {
        var classPrefix = _a.classPrefix, country = _a.country, flag = _a.country.flag, active = _a.active, countryLabelFormatter = _a.countryLabelFormatter, flags = _a.flags, onClick = _a.onClick;
        var className = classNames([
            classPrefix + "__list-item",
            active && 'active',
        ]);
        return (React__default['default'].createElement("li", { className: className, onClick: onClick, ref: ref },
            flags ? React__default['default'].createElement("span", { className: classPrefix + "__flag" }, flag) : null,
            countryLabelFormatter(country)));
    });

    var List = function (_a) {
        var classPrefix = _a.classPrefix, containerEl = _a.containerEl, list = _a.list, activeItemIndex = _a.activeItemIndex, countryLabelFormatter = _a.countryLabelFormatter, flags = _a.flags, onItemClick = _a.onItemClick, onActiveItemOverflow = _a.onActiveItemOverflow;
        var listEl = React.useRef(null);
        // const activeItemEl = createRef();
        var activeItemEl = React.useRef();
        React.useEffect(function () {
            if (containerEl && activeItemEl.current) {
                var containerHeight = containerEl.offsetHeight;
                var containerScrollTop = containerEl.scrollTop;
                var activeItemTop = activeItemEl.current.offsetTop;
                var activeItemHeight = activeItemEl.current.offsetHeight;
                var activeItemBottom = activeItemTop + activeItemHeight;
                var overflowOffTopAmount = containerScrollTop - activeItemTop;
                var overflowOffBottomAmount = activeItemBottom - (containerHeight + containerScrollTop);
                var isOverflowBeyondTop = overflowOffTopAmount > 0;
                var isOverflowBeyondBottom = overflowOffBottomAmount > 0;
                // TODO: handle overlay beyond window bottom
                if (isOverflowBeyondTop)
                    onActiveItemOverflow(-overflowOffTopAmount);
                if (isOverflowBeyondBottom)
                    onActiveItemOverflow(overflowOffBottomAmount);
            }
        }, [containerEl, listEl, activeItemEl, onActiveItemOverflow]);
        return (React__default['default'].createElement("ul", { className: classPrefix + "__list", ref: listEl }, list.map(function (country, itemIndex) { return (React__default['default'].createElement(ListItem, { key: country.alpha2, classPrefix: classPrefix, country: country, active: itemIndex === activeItemIndex, countryLabelFormatter: countryLabelFormatter, flags: flags, onClick: function () { return onItemClick(itemIndex); }, ref: itemIndex === activeItemIndex ? activeItemEl : undefined })); })));
    };

    var OverlayContent = function (_a) {
        var classPrefix = _a.classPrefix, list = _a.list, activeListItemIndex = _a.activeListItemIndex, countryLabelFormatter = _a.countryLabelFormatter, flags = _a.flags, noMatchesText = _a.noMatchesText, _b = _a.maxHeight, maxHeight = _b === void 0 ? 225 : _b, onListItemClick = _a.onListItemClick;
        var el = React.useRef(null);
        var handleAciveItemCutOff = function (overflowAmount) {
            el.current.scrollTop = el.current.scrollTop + overflowAmount;
        };
        return (React__default['default'].createElement("div", { className: classPrefix + "__overlay-content", style: {
                maxHeight: maxHeight + "px",
            }, ref: el },
            !(list.length >= 1) &&
                React__default['default'].createElement("div", { className: classPrefix + "__no-matches" }, noMatchesText),
            (list.length >= 1) &&
                React__default['default'].createElement(List, { classPrefix: classPrefix, containerEl: el.current, list: list, activeItemIndex: activeListItemIndex, countryLabelFormatter: countryLabelFormatter, flags: flags, onItemClick: onListItemClick, onActiveItemOverflow: handleAciveItemCutOff })));
    };

    var DEFAULT_CLASS_PREFIX = 'country-select';
    var INIT = 'INIT';
    var FOCUS = 'FOCUS';
    var BLUR = 'BLUR';
    var TEXT_CHANGE = 'TEXT_CHANGE';
    var ACTIVE_LIST_ITEM_CHANGE = 'ACTIVE_LIST_ITEM_CHANGE';
    var COUNTRY_SELECT = 'COUNTRY_SELECT';
    var CLEAR = 'CLEAR';

    var INITIAL_STATE = {
        focused: false,
        filterOptions: null,
        combinedCountries: [],
        inputText: '',
        list: [],
        activeListItemIndex: -1,
    };
    var init$1 = function (state, _a) {
        var combinedCountries = _a.combinedCountries;
        return (__assign(__assign({}, state), { combinedCountries: combinedCountries, list: __spreadArray([], combinedCountries) }));
    };
    var focus$1 = function (state) { return (__assign(__assign({}, state), { focused: true })); };
    var blur$1 = function (state) { return (__assign(__assign({}, state), { focused: false })); };
    var textChange$1 = function (state, _a) {
        var inputText = _a.inputText, list = _a.list, activeListItemIndex = _a.activeListItemIndex;
        return __assign(__assign({}, state), { inputText: inputText, list: list, activeListItemIndex: activeListItemIndex });
    };
    var activeListItemChange$1 = function (state, _a) {
        var activeListItemIndex = _a.activeListItemIndex;
        return (__assign(__assign({}, state), { activeListItemIndex: activeListItemIndex }));
    };
    var countrySelect$1 = function (state) { return (__assign(__assign({}, state), { inputText: '', list: __spreadArray([], state.combinedCountries), activeListItemIndex: -1 })); };
    var clear$1 = function (state) { return (__assign(__assign({}, state), { inputText: '', list: __spreadArray([], state.combinedCountries), activeListItemIndex: -1 })); };
    var reducer = function (state, action) {
        switch (action.type) {
            case INIT: return init$1(state, action);
            case FOCUS: return focus$1(state);
            case BLUR: return blur$1(state);
            case TEXT_CHANGE: return textChange$1(state, action);
            case ACTIVE_LIST_ITEM_CHANGE: return activeListItemChange$1(state, action);
            case COUNTRY_SELECT: return countrySelect$1(state);
            case CLEAR: return clear$1(state);
            default: throw new Error("No such reducer action: " + action.type);
        }
    };

    var init = function (dispatch) { return function (combinedCountries) { return dispatch({
        type: INIT,
        combinedCountries: combinedCountries,
    }); }; };
    var focus = function (dispatch) { return function () { return dispatch({
        type: FOCUS,
    }); }; };
    var blur = function (dispatch) { return function () { return dispatch({
        type: BLUR,
    }); }; };
    var textChange = function (dispatch) { return function (inputText, list, activeListItemIndex) { return dispatch({
        type: TEXT_CHANGE,
        inputText: inputText,
        list: list,
        activeListItemIndex: activeListItemIndex,
    }); }; };
    var activeListItemChange = function (dispatch) { return function (activeListItemIndex) { return dispatch({
        type: ACTIVE_LIST_ITEM_CHANGE,
        activeListItemIndex: activeListItemIndex,
    }); }; };
    var countrySelect = function (dispatch) { return function () { return dispatch({
        type: COUNTRY_SELECT,
    }); }; };
    var clear = function (dispatch) { return function () { return dispatch({
        type: CLEAR,
    }); }; };

    var CountrySelect = function (_a) {
        var value = _a.value, _b = _a.onChange, onChange = _b === void 0 ? function () { } : _b, onTextChange = _a.onTextChange, _c = _a.countries, countries = _c === void 0 ? __spreadArray([], COUNTRIES) : _c, exclusions = _a.exclusions, additions = _a.additions, _d = _a.valueAs, valueAs = _d === void 0 ? 'object' : _d, _e = _a.flags, flags = _e === void 0 ? true : _e, _f = _a.flush, flush = _f === void 0 ? true : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.placeholder, placeholder = _h === void 0 ? 'Type or select country...' : _h, _j = _a.noMatchesText, noMatchesText = _j === void 0 ? 'No matches' : _j, size = _a.size, sort = _a.sort, // e.g. (c1, c2) => c1.name < c2.name ? -1 : (c1.name > c2.name ? 1 : 0),
        _k = _a.matchNameFromStart, // e.g. (c1, c2) => c1.name < c2.name ? -1 : (c1.name > c2.name ? 1 : 0),
        matchNameFromStart = _k === void 0 ? true : _k, _l = _a.matchAbbreviations, matchAbbreviations = _l === void 0 ? false : _l, _m = _a.countryLabelFormatter, countryLabelFormatter = _m === void 0 ? function (_a) {
            var name = _a.name;
            return name;
        } : _m, _o = _a.throwInvalidValueError, throwInvalidValueError = _o === void 0 ? false : _o, listMaxHeight = _a.listMaxHeight, _p = _a.closeOnSelect, closeOnSelect = _p === void 0 ? true : _p, _q = _a.formControlProps, formControlProps = _q === void 0 ? {} : _q, _r = _a.overlayProps, overlayProps = _r === void 0 ? {} : _r, _s = _a.classPrefix, classPrefix = _s === void 0 ? DEFAULT_CLASS_PREFIX : _s, className = _a.className;
        var inputGroupRef = React.useRef(null);
        var formControlRef = React.useRef(null);
        var hasInitRef = React.useRef(false);
        var _t = React.useState(-1), width = _t[0], setWidth = _t[1];
        var _u = React.useReducer(reducer, INITIAL_STATE), _v = _u[0], focused = _v.focused, inputText = _v.inputText, list = _v.list, activeListItemIndex = _v.activeListItemIndex, combinedCountries = _v.combinedCountries, dispatch = _u[1];
        var handleFocus = focus(dispatch);
        var handleBlur = blur(dispatch);
        var handleTextChange = textChange(dispatch);
        var handleListActiveItemChange = activeListItemChange(dispatch);
        var handleCountrySelect = countrySelect(dispatch);
        var handleClear = clear(dispatch);
        var getCountryId = function (value) { return (typeof value === 'string' ? value : value.id); };
        var selectedCountry = value ? (combinedCountries || []).find(function (country) { return country.id === getCountryId(value); }) : null;
        if (throwInvalidValueError && value && !selectedCountry)
            throw new Error("No matching country for value: " + JSON.stringify(value));
        React.useEffect(function () {
            if (hasInitRef.current)
                return;
            var combinedCountries = applyExclusionsAndAdditions(countries, exclusions, additions);
            var sorted = getInitialList(combinedCountries, sort);
            init(dispatch)(sorted);
            hasInitRef.current = true;
        }, [countries, exclusions, additions, sort]);
        React.useEffect(function () {
            setWidth(inputGroupRef.current.offsetWidth);
        }, [inputGroupRef]);
        var select = function (listItemIndex) {
            var country = list[listItemIndex];
            handleCountrySelect();
            onChange(valueAs === 'id' ? country.id : country);
        };
        var escape = function () {
            handleClear();
            onChange(null);
        };
        var inputChange = function (text, ev) {
            if (selectedCountry && flags) {
                text = removeEmojiFlag(text);
            }
            var _a = getUpdatedList(text, list, activeListItemIndex, combinedCountries, sort, matchNameFromStart, matchAbbreviations), updatedList = _a[0], updatedActiveListItemIndex = _a[1];
            handleTextChange(text, updatedList, updatedActiveListItemIndex);
            if (onTextChange)
                onTextChange(text, ev);
            if (value)
                onChange(null);
        };
        var handleKey = function (ev) {
            if (ev.key === 'ArrowUp') {
                ev.preventDefault();
                var newIndex = activeListItemIndex <= 0 ? list.length - 1 : activeListItemIndex - 1;
                handleListActiveItemChange(newIndex);
            }
            else if (ev.key === 'ArrowDown') {
                var newIndex = activeListItemIndex >= list.length - 1 ? 0 : activeListItemIndex + 1;
                handleListActiveItemChange(newIndex);
            }
            else if (ev.key === 'Enter') {
                if (activeListItemIndex >= 0)
                    select(activeListItemIndex);
            }
            else if (ev.key === 'Escape') {
                escape();
            }
        };
        var classes = classNames([
            className,
            classPrefix,
            flush && classPrefix + "--flush",
        ]);
        return (React__default['default'].createElement("div", { className: classes },
            React__default['default'].createElement(InputGroupWithExtras, { ref: inputGroupRef, className: classPrefix + "__input-group", size: size },
                (!flush && flags) &&
                    React__default['default'].createElement(InputGroupWithExtras.Prepend, null,
                        React__default['default'].createElement(InputGroupWithExtras.Text, { className: classPrefix + "__input-group__flag" }, selectedCountry ? selectedCountry.flag : '')),
                React__default['default'].createElement(FormControl$1, __assign({ ref: formControlRef, className: classPrefix + "__form-control", value: selectedCountry ? "" + (flush && flags ? selectedCountry.flag + '   ' : '') + selectedCountry.name : inputText, onKeyDown: handleKey, onChange: function (ev) { return inputChange(ev.target.value, ev); }, onFocus: handleFocus, onBlur: handleBlur, placeholder: placeholder, disabled: disabled, spellCheck: false, autoComplete: 'new-value' }, formControlProps))),
            React__default['default'].createElement(Overlay, __assign({ target: inputGroupRef.current, rootClose: true, placement: 'bottom-start', show: focused && (!selectedCountry || !closeOnSelect), onHide: function () { }, transition: true }, overlayProps), function (_a) {
                _a.placement; _a.arrowProps; _a.show; _a.popper; var props = __rest(_a, ["placement", "arrowProps", "show", "popper"]);
                return (React__default['default'].createElement("div", __assign({}, props, { style: __assign({ width: (width > 0) ? width + "px" : 'calc(100% - 10px)' }, props.style) }),
                    React__default['default'].createElement(OverlayContent, { classPrefix: classPrefix, list: list, activeListItemIndex: activeListItemIndex, countryLabelFormatter: countryLabelFormatter, flags: flags, noMatchesText: noMatchesText, maxHeight: listMaxHeight, onListItemClick: select })));
            })));
    };

    return CountrySelect;

})));
//# sourceMappingURL=examples-umd.js.map
