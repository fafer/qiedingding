'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebView = function (_wepy$page) {
  _inherits(WebView, _wepy$page);

  function WebView() {
    _classCallCheck(this, WebView);

    return _possibleConstructorReturn(this, (WebView.__proto__ || Object.getPrototypeOf(WebView)).apply(this, arguments));
  }

  _createClass(WebView, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage(options) {
      return {
        title: '58同城国际站',
        path: '/pages/webView?url=' + options.webViewUrl
      };
    }
  }, {
    key: 'onLoad',
    value: function onLoad(params) {
      var url = params.url;
      this.setData({
        url: url
      });
    }
  }]);

  return WebView;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(WebView , 'pages/webView'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYlZpZXcuanMiXSwibmFtZXMiOlsiV2ViVmlldyIsIm9wdGlvbnMiLCJ0aXRsZSIsInBhdGgiLCJ3ZWJWaWV3VXJsIiwicGFyYW1zIiwidXJsIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7O3NDQUNEQyxPLEVBQVM7QUFDekIsYUFBTztBQUNMQyxlQUFNLFNBREQ7QUFFTEMsY0FBSyx3QkFBc0JGLFFBQVFHO0FBRjlCLE9BQVA7QUFJRDs7OzJCQUNNQyxNLEVBQVE7QUFDYixVQUFJQyxNQUFNRCxPQUFPQyxHQUFqQjtBQUNBLFdBQUtDLE9BQUwsQ0FBYTtBQUNYRCxhQUFLQTtBQURNLE9BQWI7QUFHRDs7OztFQVprQyxlQUFLRSxJOztrQkFBckJSLE8iLCJmaWxlIjoid2ViVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViVmlldyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZShvcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6JzU45ZCM5Z+O5Zu96ZmF56uZJyxcclxuICAgICAgICBwYXRoOicvcGFnZXMvd2ViVmlldz91cmw9JytvcHRpb25zLndlYlZpZXdVcmxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKHBhcmFtcykge1xyXG4gICAgICBsZXQgdXJsID0gcGFyYW1zLnVybFxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVybDogdXJsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=