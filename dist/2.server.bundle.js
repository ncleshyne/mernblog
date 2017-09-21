exports.ids = [2];
exports.modules = {

/***/ 75:
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
	
	var _reactIntl = __webpack_require__(1);
	
	var _ProfileForm = __webpack_require__(78);
	
	var _ProfileForm2 = _interopRequireDefault(_ProfileForm);
	
	var _UserActions = __webpack_require__(13);
	
	var _UserReducer = __webpack_require__(38);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Components
	
	
	// Import Actions
	
	
	// Import Selectors
	
	
	var ProfilePage = function (_Component) {
	  _inherits(ProfilePage, _Component);
	
	  function ProfilePage() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ProfilePage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProfilePage.__proto__ || Object.getPrototypeOf(ProfilePage)).call.apply(_ref, [this].concat(args))), _this), _this.handleUpdate = function (password) {
	      _this.props.dispatch((0, _UserActions.updateUserInfoRequest)({ password: password }));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(ProfilePage, [{
	    key: 'render',
	    value: function render() {
	      return _jsx(_ProfileForm2.default, {
	        updateInfo: this.handleUpdate,
	        user: this.props.user
	      });
	    }
	  }]);
	
	  return ProfilePage;
	}(_react.Component);
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return {
	    user: (0, _UserReducer.getUser)(state)
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(ProfilePage);

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ProfileForm = undefined;
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _ProfileForm = {
	  "form": "_90VMhNUlyyvZN-EQk8Pes",
	  "form-content": "_3hiTaBSfw7e6gpOrrgCDym",
	  "form-title": "_1DyF0mZ8_QRFM1rzhx_9Dd",
	  "form-field": "_1hQNn1IIRcRvFVjzJNFLu",
	  "submit-button": "_1uo7ZYGUm2oox8XiDnWluY",
	  "appear": "A7UQRZ2M2hTvWtWW62yeq"
	};
	
	var _ProfileForm2 = _interopRequireDefault(_ProfileForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	var _ref2 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'profileTitle'
	});
	
	var _ref3 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'submit'
	});
	
	var ProfileForm = exports.ProfileForm = function (_Component) {
	  _inherits(ProfileForm, _Component);
	
	  function ProfileForm() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ProfileForm);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProfileForm.__proto__ || Object.getPrototypeOf(ProfileForm)).call.apply(_ref, [this].concat(args))), _this), _this.onUpdate = function () {
	      var newPasswordRef = _this.refs.newPassword;
	      if (newPasswordRef.value) {
	        _this.props.updateInfo(newPasswordRef.value);
	        newPasswordRef.value = '';
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(ProfileForm, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _ProfileForm2.default['form-content']
	      }, void 0, _jsx('h2', {
	        className: _ProfileForm2.default['form-title']
	      }, void 0, this.props.user.username, _ref2), _react2.default.createElement('input', { placeholder: this.props.intl.messages.newPassword, className: _ProfileForm2.default['form-field'], ref: 'newPassword', type: 'password' }), _jsx('a', {
	        className: _ProfileForm2.default['submit-button'],
	        onClick: this.onUpdate
	      }, void 0, _ref3));
	    }
	  }]);
	
	  return ProfileForm;
	}(_react.Component);
	
	exports.default = (0, _reactIntl.injectIntl)(ProfileForm);

/***/ }

};;