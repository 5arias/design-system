'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fieldWrappers = require('./fieldWrappers');

var _formik = require('formik');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormField = function FormField(_ref) {
  var schema = _ref.schema;
  var type = schema.type;


  var fields = Object.freeze({
    autocomplete: _fieldWrappers.AutocompleteWrapper,
    checkbox: _fieldWrappers.CheckboxWrapper,
    date: _fieldWrappers.DateWrapper,
    month: _fieldWrappers.MonthWrapper,
    radio: _fieldWrappers.RadioWrapper,
    select: _fieldWrappers.SelectWrapper,
    text: _fieldWrappers.TextWrapper
  });

  return _react2.default.createElement(_formik.Field, _extends({}, schema, { component: fields[type] }));
};

FormField.propTypes = {
  schema: _propTypes2.default.instanceOf(Object).isRequired
};

exports.default = FormField;