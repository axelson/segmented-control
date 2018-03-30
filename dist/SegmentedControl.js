'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _extend = require('lodash/extend');

var _extend2 = _interopRequireDefault(_extend);

require('./SegmentedControl.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SegmentedControl = function (_Component) {
  (0, _inherits3.default)(SegmentedControl, _Component);

  function SegmentedControl() {
    (0, _classCallCheck3.default)(this, SegmentedControl);
    return (0, _possibleConstructorReturn3.default)(this, (SegmentedControl.__proto__ || (0, _getPrototypeOf2.default)(SegmentedControl)).apply(this, arguments));
  }

  (0, _createClass3.default)(SegmentedControl, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var defaultOption = (0, _find2.default)(this.props.options, { default: true });
      this.setValue(defaultOption.value);
    }
  }, {
    key: 'setValue',
    value: function setValue(val) {
      this.props.setValue && this.props.setValue(val);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var getId = function getId(option) {
        return _this2.props.name + option.value;
      };

      var defaultStyle = {
        width: '100%'
      };

      var style = (0, _extend2.default)(defaultStyle, this.props.style);

      return _react2.default.createElement(
        'div',
        { className: 'segmented-control', style: style },
        this.props.options.map(function (option) {
          return _react2.default.createElement('input', {
            key: option.value,
            type: 'radio',
            name: _this2.props.name,
            id: getId(option),
            defaultChecked: option.default,
            disabled: option.disabled
          });
        }),
        this.props.options.map(function (option) {
          return _react2.default.createElement(
            'label',
            {
              key: option.value,
              onClick: function onClick() {
                return _this2.setValue(option.value);
              },
              htmlFor: getId(option),
              'data-value': option.labelValue || option.label
            },
            option.label
          );
        })
      );
    }
  }]);
  return SegmentedControl;
}(_react.Component);

SegmentedControl.propTypes = {
  name: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.array.isRequired,
  style: _propTypes2.default.object,
  setValue: _propTypes2.default.func
};
exports.default = SegmentedControl;