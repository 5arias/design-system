'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('../../TextField/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TextWrapper = function TextWrapper(_ref) {
  var field = _ref.field,
      form = _ref.form,
      props = _objectWithoutProperties(_ref, ['field', 'form']);

  var controlledProps = _extends(field, props, {
    value: field.value ? field.value : ''
  });
  return _react2.default.createElement(_TextField2.default, controlledProps);
};

TextWrapper.propTypes = {
  field: _propTypes2.default.instanceOf(Object),
  form: _propTypes2.default.instanceOf(Object)
};

exports.default = TextWrapper;