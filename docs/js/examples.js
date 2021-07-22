"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _ReactBootstrap = ReactBootstrap,
    Row = _ReactBootstrap.Row,
    Col = _ReactBootstrap.Col,
    Form = _ReactBootstrap.Form;
var CountrySelect = ReactBootstrapCountrySelect;

var SimpleUsage = function SimpleUsage() {
  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return /*#__PURE__*/React.createElement(CountrySelect, {
    value: value,
    onChange: setValue
  });
};

var ValueAs = function ValueAs() {
  var _React$useState3 = React.useState('fr'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  return /*#__PURE__*/React.createElement(CountrySelect, {
    value: value,
    onChange: setValue,
    valueAs: "id"
  });
};

var Flush = function Flush() {
  var _React$useState5 = React.useState('fr'),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      value = _React$useState6[0],
      setValue = _React$useState6[1];

  return /*#__PURE__*/React.createElement(CountrySelect, {
    value: value,
    onChange: setValue,
    valueAs: "id",
    flush: false
  });
};

var Sort = function Sort() {
  var _React$useState7 = React.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      value = _React$useState8[0],
      setValue = _React$useState8[1];

  return /*#__PURE__*/React.createElement(CountrySelect, {
    value: value,
    onChange: setValue,
    sort: function sort(c1, c2) {
      if (c1.name.length > c2.name.length) return 1;else if (c1.name.length < c2.name.length) return -1;else return 0;
    }
  });
};

var ListItemFormatter = function ListItemFormatter() {
  var _React$useState9 = React.useState(null),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      value = _React$useState10[0],
      setValue = _React$useState10[1];

  return /*#__PURE__*/React.createElement(CountrySelect, {
    value: value,
    onChange: setValue,
    countryLabelFormatter: function countryLabelFormatter(country) {
      return "".concat(country.name, " (").concat(country.alpha2, ")");
    }
  });
};

var MatchingOptions = function MatchingOptions() {
  var _React$useState11 = React.useState(null),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      value = _React$useState12[0],
      setValue = _React$useState12[1];

  return /*#__PURE__*/React.createElement(CountrySelect, {
    value: value,
    onChange: setValue,
    matchNameFromStart: false,
    matchAbbreviations: true
  });
};

ReactDOM.render( /*#__PURE__*/React.createElement(SimpleUsage, null), document.getElementById('example-simple-usage'));
ReactDOM.render( /*#__PURE__*/React.createElement(ValueAs, null), document.getElementById('example-value-as'));
ReactDOM.render( /*#__PURE__*/React.createElement(Flush, null), document.getElementById('example-flush'));
ReactDOM.render( /*#__PURE__*/React.createElement(Sort, null), document.getElementById('example-sort'));
ReactDOM.render( /*#__PURE__*/React.createElement(ListItemFormatter, null), document.getElementById('example-list-item-formatter'));
ReactDOM.render( /*#__PURE__*/React.createElement(MatchingOptions, null), document.getElementById('example-matching-options'));
