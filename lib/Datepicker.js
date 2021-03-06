'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _Calendar = require('./Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Datepicker = function (_Component) {
  _inherits(Datepicker, _Component);

  function Datepicker(props) {
    _classCallCheck(this, Datepicker);

    var _this = _possibleConstructorReturn(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).call(this, props));

    _this.onOutsideClick = _this.onOutsideClick.bind(_this);
    _this.handleCalendarVisibility = _this.handleCalendarVisibility.bind(_this);
    _this.dateChange = _this.dateChange.bind(_this);

    _this.state = {
      showCalendar: false,
      selectedDate: _this.props.startDate
    };
    return _this;
  }

  _createClass(Datepicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('click', this.onOutsideClick, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onOutsideClick, false);
    }
  }, {
    key: 'onOutsideClick',
    value: function onOutsideClick(event) {
      if (!this.mainNode.contains(event.target) && this.state.showCalendar) {
        this.setState({ showCalendar: false });
      }
    }
  }, {
    key: 'dateChange',
    value: function dateChange(selectedDate) {
      if (this.props.handleDateChange) this.props.handleDateChange(selectedDate);
      this.setState({
        selectedDate: selectedDate,
        showCalendar: false
      });
    }
  }, {
    key: 'handleCalendarVisibility',
    value: function handleCalendarVisibility() {
      this.setState({
        showCalendar: !this.state.showCalendar
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(node) {
            _this2.mainNode = node;
          }
        },
        _react2.default.createElement('input', { name: this.props.datepickerName, className: this.props.datepickerClassName, id: this.props.datepickerId, onFocus: this.handleCalendarVisibility, value: (0, _format2.default)(this.state.selectedDate, this.props.dateFormat), readOnly: true }),
        this.state.showCalendar && _react2.default.createElement(_Calendar2.default, { startDate: this.state.selectedDate, dateChange: this.dateChange, minDate: this.props.minDate })
      );
    }
  }]);

  return Datepicker;
}(_react.Component);

exports.default = Datepicker;


Datepicker.defaultProps = {
  dateFormat: 'DD-MM-YYYY',
  startDate: new Date(),
  datepickerName: 'react-simple-datepicker',
  datepickerId: 'react-simple-datepicker',
  datepickerClassName: 'react-simple-datepicker-input'
};