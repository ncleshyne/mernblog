webpackJsonp([2],{674:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return e}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var u in i)void 0===r[u]&&(r[u]=i[u]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+3];r.children=l}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(0),c=(n(s),r(57)),p=r(681),d=n(p),y=r(142),b=function(e){function t(){var e,r,n,a;o(this,t);for(var u=arguments.length,l=Array(u),f=0;f<u;f++)l[f]=arguments[f];return r=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.handleRegister=function(e,t){n.props.dispatch((0,y.registerRequest)({username:e,password:t}))},a=r,i(n,a)}return a(t,e),f(t,[{key:"render",value:function(){return l(d["default"],{register:this.handleRegister})}}]),t}(s.Component);t["default"]=(0,c.connect)(u)(b)},681:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.RegisterForm=void 0;var u=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var u in i)void 0===r[u]&&(r[u]=i[u]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+3];r.children=l}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(0),s=n(f),c=r(56),p=r(685),d=n(p),y=u(c.FormattedMessage,{id:"registerTitle"}),b=u(c.FormattedMessage,{id:"submit"}),m=t.RegisterForm=function(e){function t(){var e,r,n,a;o(this,t);for(var u=arguments.length,l=Array(u),f=0;f<u;f++)l[f]=arguments[f];return r=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.onRegister=function(){var e=n.refs.username,t=n.refs.password;e.value&&t.value&&(n.props.register(e.value,t.value),t.value="")},a=r,i(n,a)}return a(t,e),l(t,[{key:"render",value:function(){return u("div",{className:d["default"]["form-content"]},void 0,u("h2",{className:d["default"]["form-title"]},void 0,y),s["default"].createElement("input",{placeholder:this.props.intl.messages.username,className:d["default"]["form-field"],ref:"username"}),s["default"].createElement("input",{placeholder:this.props.intl.messages.password,className:d["default"]["form-field"],ref:"password",type:"password"}),u("a",{className:d["default"]["submit-button"],onClick:this.onRegister},void 0,b))}}]),t}(f.Component);t["default"]=(0,c.injectIntl)(m)},685:function(e,t){e.exports={form:"_3hyXRo25vT5e0lr0YJH-sb","form-content":"_2ICG7iX-nJskJO7vhWMw3D","form-title":"_3fg0n82cN-o4FPY_lb1_MS","form-field":"_1i0fivq_K72wQrWLAjv1Me","submit-button":"_3J1b-x859-9xpUZC4TPjMy",appear:"_2EZNTTqO5GPzqKLEswxMEr"}}});