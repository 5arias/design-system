'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = undefined;

var _FormPage = require('./FormPage');

var _FormPage2 = _interopRequireDefault(_FormPage);

var _FormWizard = require('./FormWizard');

var _FormWizard2 = _interopRequireDefault(_FormWizard);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = exports.Form = function Form(_ref) {
  var schema = _ref.schema;

  return _react2.default.createElement(
    'div',
    { className: 'ds-c-form' },
    _react2.default.createElement(
      'h1',
      null,
      schema.formTitle
    ),
    _react2.default.createElement(
      _FormWizard2.default,
      { schema: schema },
      schema.pages.map(function (page) {
        return _react2.default.createElement(
          _FormWizard2.default.Page,
          { key: page.id },
          _react2.default.createElement(_FormPage2.default, { schema: page })
        );
      })
    )
  );
};
Form.defaultProps = {
  schema: {
    formTitle: 'Form',
    initialValues: {},
    onSubmit: function onSubmit() {},
    pages: []
  }
};
Form.propTypes = {
  schema: _propTypes2.default.shape({
    formTitle: _propTypes2.default.string,
    initialValues: _propTypes2.default.object,
    onSubmit: _propTypes2.default.func,
    pages: _propTypes2.default.arrayOf(_propTypes2.default.object)
  }).isRequired
};

exports.default = Form;