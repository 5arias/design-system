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

var getInitialChecked = function getInitialChecked(choices) {
  var checkedChoices = choices.filter(function (c) {
    return c.checked || c.defaultChecked;
  });
  var checkedValue = void 0;
  if (checkedChoices.length === 1) {
    checkedValue = checkedChoices[0]['value'];
  } else if (checkedChoices.length === 0) {
    checkedValue = undefined;
  } else {
    checkedValue = console.error('Radio field may only have 1 default choice selected');
  }

  return checkedValue;
};

var setCheckedChoices = function setCheckedChoices(choices, activeValue) {
  return choices.map(function (choice) {
    return _extends({}, choice, {
      checked: choice.value === activeValue
    });
  });
};

var RadioWrapper = function RadioWrapper(_ref) {
  var field = _ref.field,
      form = _ref.form,
      props = _objectWithoutProperties(_ref, ['field', 'form']);

  var controlledProps = _extends({}, field, props, {
    value: field.value ? field.value : getInitialChecked(props.choices),
    choices: field.value ? setCheckedChoices(props.choices, field.value) : props.choices
  });

  return _react2.default.createElement(_ChoiceList2.default, controlledProps);
};

RadioWrapper.propTypes = {
  field: _propTypes2.default.instanceOf(Object),
  form: _propTypes2.default.instanceOf(Object)
};

exports.default = RadioWrapper;