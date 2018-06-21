'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormPage = undefined;

var _FormField = require('./FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormPage = exports.FormPage = function FormPage(_ref) {
  var schema = _ref.schema;
  var title = schema.title,
      description = schema.description,
      fields = schema.fields;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    title && _react2.default.createElement(
      'h2',
      null,
      title
    ),
    description && _react2.default.createElement(
      'div',
      null,
      description
    ),
    fields && fields.map(function (field) {
      return _react2.default.createElement(_FormField2.default, { schema: field, key: field.type + '_' + field.label });
    })
  );
};

FormPage.propTypes = {
  schema: _propTypes2.default.instanceOf(Object).isRequired
};

exports.default = FormPage;