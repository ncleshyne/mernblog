exports.ids = [1];
exports.modules = {

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _RegisterForm = __webpack_require__(79);
	
	var _RegisterForm2 = _interopRequireDefault(_RegisterForm);
	
	var _UserActions = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Components
	
	
	// Import Actions
	
	
	var RegisterPage = function (_Component) {
	  _inherits(RegisterPage, _Component);
	
	  function RegisterPage() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, RegisterPage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RegisterPage.__proto__ || Object.getPrototypeOf(RegisterPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleRegister = function (username, password) {
	      _this.props.dispatch((0, _UserActions.registerRequest)({ username: username, password: password }));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(RegisterPage, [{
	    key: 'render',
	    value: function render() {
	      return _jsx(_RegisterForm2.default, {
	        register: this.handleRegister
	      });
	    }
	  }]);
	
	  return RegisterPage;
	}(_react.Component);
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return state;
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(RegisterPage);

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RegisterForm = undefined;
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _RegisterForm = {
	  "form": "_3hyXRo25vT5e0lr0YJH-sb",
	  "form-content": "_2ICG7iX-nJskJO7vhWMw3D",
	  "form-title": "_3fg0n82cN-o4FPY_lb1_MS",
	  "form-field": "_1i0fivq_K72wQrWLAjv1Me",
	  "submit-button": "_3J1b-x859-9xpUZC4TPjMy",
	  "appear": "_2EZNTTqO5GPzqKLEswxMEr"
	};
	
	var _RegisterForm2 = _interopRequireDefault(_RegisterForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	var _ref2 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'registerTitle'
	});
	
	var _ref3 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'submit'
	});
	
	var RegisterForm = exports.RegisterForm = function (_Component) {
	  _inherits(RegisterForm, _Component);
	
	  function RegisterForm() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, RegisterForm);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call.apply(_ref, [this].concat(args))), _this), _this.onRegister = function () {
	      var usernameRef = _this.refs.username;
	      var passwordRef = _this.refs.password;
	      if (usernameRef.value && passwordRef.value) {
	        _this.props.register(usernameRef.value, passwordRef.value);
	        passwordRef.value = '';
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(RegisterForm, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _RegisterForm2.default['form-content']
	      }, void 0, _jsx('h2', {
	        className: _RegisterForm2.default['form-title']
	      }, void 0, _ref2), _react2.default.createElement('input', { placeholder: this.props.intl.messages.username, className: _RegisterForm2.default['form-field'], ref: 'username' }), _react2.default.createElement('input', { placeholder: this.props.intl.messages.password, className: _RegisterForm2.default['form-field'], ref: 'password', type: 'password' }), _jsx('a', {
	        className: _RegisterForm2.default['submit-button'],
	        onClick: this.onRegister
	      }, void 0, _ref3));
	    }
	  }]);
	
	  return RegisterForm;
	}(_react.Component);
	
	exports.default = (0, _reactIntl.injectIntl)(RegisterForm);

/***/ }

};;