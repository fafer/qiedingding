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
      placehold: {
        default: ''
      }
    }, _this.data = {
      clear: false,
      inputValue: ''
    }, _this.methods = {
      change: function change(index) {
        if (this.currentTab !== index) {
          this.currentTab = index;
          this.$emit('change', index);
        }
      },
      clear: function clear() {
        this.inputValue = '';
        this.clear = false;
        this.$emit('search', '');
      },
      goBack: function goBack(delta) {
        wx.navigateBack({
          delta: delta
        });
        this.$emit('cancel');
      },
      search: function search(e) {
        var value = e.detail.value;
        if (value) this.clear = true;else this.clear = false;
        this.$emit('search', value);
        this.inputValue = value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Tab;
}(_wepy2.default.component);

exports.default = Tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJUYWIiLCJwcm9wcyIsInBsYWNlaG9sZCIsImRlZmF1bHQiLCJkYXRhIiwiY2xlYXIiLCJpbnB1dFZhbHVlIiwibWV0aG9kcyIsImNoYW5nZSIsImluZGV4IiwiY3VycmVudFRhYiIsIiRlbWl0IiwiZ29CYWNrIiwiZGVsdGEiLCJ3eCIsIm5hdmlnYXRlQmFjayIsInNlYXJjaCIsImUiLCJ2YWx1ZSIsImRldGFpbCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsSyxHQUFRO0FBQ05DLGlCQUFXO0FBQ1RDLGlCQUFTO0FBREE7QUFETCxLLFFBS1JDLEksR0FBTztBQUNMQyxhQUFPLEtBREY7QUFFTEMsa0JBQVk7QUFGUCxLLFFBSVBDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxLQURDLEVBQ007QUFDWixZQUFJLEtBQUtDLFVBQUwsS0FBb0JELEtBQXhCLEVBQStCO0FBQzdCLGVBQUtDLFVBQUwsR0FBa0JELEtBQWxCO0FBQ0EsZUFBS0UsS0FBTCxDQUFXLFFBQVgsRUFBcUJGLEtBQXJCO0FBQ0Q7QUFDRixPQU5PO0FBT1JKLFdBUFEsbUJBT0E7QUFDTixhQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsYUFBS0QsS0FBTCxHQUFhLEtBQWI7QUFDQSxhQUFLTSxLQUFMLENBQVcsUUFBWCxFQUFxQixFQUFyQjtBQUNELE9BWE87QUFZUkMsWUFaUSxrQkFZREMsS0FaQyxFQVlNO0FBQ1pDLFdBQUdDLFlBQUgsQ0FBZ0I7QUFDZEYsaUJBQU9BO0FBRE8sU0FBaEI7QUFHQSxhQUFLRixLQUFMLENBQVcsUUFBWDtBQUNELE9BakJPO0FBa0JSSyxZQWxCUSxrQkFrQkRDLENBbEJDLEVBa0JFO0FBQ1IsWUFBSUMsUUFBUUQsRUFBRUUsTUFBRixDQUFTRCxLQUFyQjtBQUNBLFlBQUlBLEtBQUosRUFBVyxLQUFLYixLQUFMLEdBQWEsSUFBYixDQUFYLEtBQ0ssS0FBS0EsS0FBTCxHQUFhLEtBQWI7QUFDTCxhQUFLTSxLQUFMLENBQVcsUUFBWCxFQUFxQk8sS0FBckI7QUFDQSxhQUFLWixVQUFMLEdBQWtCWSxLQUFsQjtBQUNEO0FBeEJPLEs7Ozs7RUFWcUIsZUFBS0UsUzs7a0JBQWpCcEIsRyIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYiBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICBwbGFjZWhvbGQ6IHtcclxuICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBjbGVhcjogZmFsc2UsXHJcbiAgICAgIGlucHV0VmFsdWU6ICcnXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBjaGFuZ2UoaW5kZXgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFiICE9PSBpbmRleCkge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gaW5kZXhcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGluZGV4KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJydcclxuICAgICAgICB0aGlzLmNsZWFyID0gZmFsc2VcclxuICAgICAgICB0aGlzLiRlbWl0KCdzZWFyY2gnLCAnJylcclxuICAgICAgfSxcclxuICAgICAgZ29CYWNrKGRlbHRhKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgIGRlbHRhOiBkZWx0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsJylcclxuICAgICAgfSxcclxuICAgICAgc2VhcmNoKGUpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIGlmICh2YWx1ZSkgdGhpcy5jbGVhciA9IHRydWVcclxuICAgICAgICBlbHNlIHRoaXMuY2xlYXIgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaCcsIHZhbHVlKVxyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==