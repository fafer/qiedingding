'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_wepy$component) {
  _inherits(Tab, _wepy$component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      currentTab: {
        type: Number,
        twoWay: true,
        default: 0
      }
    }, _this.data = {
      tabs: [{
        id: 0,
        name: '全国'
      }, {
        id: 1,
        name: '海外'
      }, {
        id: 2,
        name: '乡镇'
      }]
    }, _this.methods = {
      change: function change(index) {
        if (this.currentTab !== index) {
          this.currentTab = index;
          this.$emit('change', index);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Tab;
}(_wepy2.default.component);

exports.default = Tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJUYWIiLCJwcm9wcyIsImN1cnJlbnRUYWIiLCJ0eXBlIiwiTnVtYmVyIiwidHdvV2F5IiwiZGVmYXVsdCIsImRhdGEiLCJ0YWJzIiwiaWQiLCJuYW1lIiwibWV0aG9kcyIsImNoYW5nZSIsImluZGV4IiwiJGVtaXQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxHOzs7Ozs7Ozs7Ozs7OztnTEFDbkJDLEssR0FBUTtBQUNOQyxrQkFBWTtBQUNWQyxjQUFNQyxNQURJO0FBRVZDLGdCQUFRLElBRkU7QUFHVkMsaUJBQVM7QUFIQztBQUROLEssUUFPUkMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FBQztBQUNIQyxZQUFJLENBREQ7QUFFSEMsY0FBTTtBQUZILE9BQUQsRUFJSjtBQUNFRCxZQUFJLENBRE47QUFFRUMsY0FBTTtBQUZSLE9BSkksRUFRSjtBQUNFRCxZQUFJLENBRE47QUFFRUMsY0FBTTtBQUZSLE9BUkk7QUFERCxLLFFBZVBDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxLQURDLEVBQ007QUFDWixZQUFJLEtBQUtYLFVBQUwsS0FBb0JXLEtBQXhCLEVBQStCO0FBQzdCLGVBQUtYLFVBQUwsR0FBa0JXLEtBQWxCO0FBQ0EsZUFBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJELEtBQXJCO0FBQ0Q7QUFDRjtBQU5PLEs7Ozs7RUF2QnFCLGVBQUtFLFM7O2tCQUFqQmYsRyIsImZpbGUiOiJ0YWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYiBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICBjdXJyZW50VGFiOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIHR3b1dheTogdHJ1ZSxcclxuICAgICAgICBkZWZhdWx0OiAwLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICB0YWJzOiBbe1xyXG4gICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICBuYW1lOiAn5YWo5Zu9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBuYW1lOiAn5rW35aSWJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICBuYW1lOiAn5Lmh6ZWHJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgY2hhbmdlKGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhYiAhPT0gaW5kZXgpIHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9IGluZGV4XHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBpbmRleClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==