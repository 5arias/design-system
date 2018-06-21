'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ChoiceList = require('../../ChoiceList/ChoiceList');

var _ChoiceList2 = _interopRequireDefault(_ChoiceList);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CheckboxWrapper = function CheckboxWrapper(_ref) {
  var field = _ref.field,
      form = _ref.form,
      props = _objectWithoutProperties(_ref, ['field', 'form']);

  var handleCheckboxChange = function handleCheckboxChange(e) {
    var newValue = field.value || [];
    if (e.target.checked) {
      newValue = newValue.concat([e.target.value]).sort();
    } else {
      newValue = newValue.filter(function (v) {
        return v !== e.target.value;
      }).sort();
    }

    return form.setFieldValue(field.name, newValue);
  };

  return _react2.default.createElement(_ChoiceList2.default, _extends({ onChange: handleCheckboxChange }, field, props));
};

CheckboxWrapper.propTypes = {
  field: _propTypes2.default.instanceOf(Object),
  form: _propTypes2.default.instanceOf(Object)
};

exports.default = CheckboxWrapper;