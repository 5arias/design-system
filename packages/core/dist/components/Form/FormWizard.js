'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormWizard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _formik = require('formik');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormWizard = exports.FormWizard = function (_React$Component) {
  _inherits(FormWizard, _React$Component);

  function FormWizard(props) {
    _classCallCheck(this, FormWizard);

    var _this = _possibleConstructorReturn(this, (FormWizard.__proto__ || Object.getPrototypeOf(FormWizard)).call(this, props));

    _this.next = function (values) {
      return _this.setState(function (state) {
        return {
          page: Math.min(state.page + 1, _this.props.children.length - 1),
          values: values
        };
      });
    };

    _this.handlePrevious = function () {
      return _this.setState(function (state) {
        return {
          page: Math.max(state.page - 1, 0)
        };
      });
    };

    _this.validate = function (values) {
      var activePage = _react2.default.Children.toArray(_this.props.children)[_this.state.page];
      return activePage.props.validate ? activePage.props.validate(values) : {};
    };

    _this.handleSubmit = function (values, bag) {
      var _this$props = _this.props,
          children = _this$props.children,
          onSubmit = _this$props.onSubmit;
      var page = _this.state.page;

      var isLastPage = page === _react2.default.Children.count(children) - 1;
      if (isLastPage) {
        return onSubmit(values);
      } else {
        _this.next(values);
        bag.setSubmitting(false);
      }
    };

    _this.state = {
      page: 0,
      values: props.initialValues
    };
    return _this;
  }

  _createClass(FormWizard, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _state = this.state,
          page = _state.page,
          values = _state.values;

      var activePage = _react2.default.Children.toArray(children)[page];
      var isLastPage = page === _react2.default.Children.count(children) - 1;
      return _react2.default.createElement(_formik.Formik, {
        initialValues: values,
        enableReinitialize: false,
        validate: this.validate,
        onSubmit: this.handleSubmit,
        render: function render(_ref) {
          var handleSubmit = _ref.handleSubmit,
              isSubmitting = _ref.isSubmitting;
          return _react2.default.createElement(
            'form',
            { onSubmit: handleSubmit },
            activePage,
            _react2.default.createElement(
              'div',
              { className: 'buttons' },
              page > 0 && _react2.default.createElement(
                _Button2.default,
                { type: 'button', onClick: _this2.handlePrevious },
                '\xAB Previous'
              ),
              !isLastPage && _react2.default.createElement(
                _Button2.default,
                { type: 'submit', variation: 'primary' },
                'Next \xBB'
              ),
              isLastPage && _react2.default.createElement(
                _Button2.default,
                {
                  type: 'submit',
                  disabled: isSubmitting,
                  variation: 'primary'
                },
                'Submit'
              )
            )
          );
        }
      });
    }
  }]);

  return FormWizard;
}(_react2.default.Component);
// FormWizard.defaultProps = {
//   initialValues: {},
//   validate: () => {},
//   onSubmit: () => {}
// };


FormWizard.Page = function (_ref2) {
  var children = _ref2.children;
  return children;
};

FormWizard.propTypes = {
  children: _propTypes2.default.instanceOf(Object),
  initialValues: _propTypes2.default.instanceOf(Object),
  onSubmit: _propTypes2.default.func
};

exports.default = FormWizard;