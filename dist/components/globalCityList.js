'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./../utils/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalCityList = function (_wepy$component) {
  _inherits(GlobalCityList, _wepy$component);

  function GlobalCityList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GlobalCityList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GlobalCityList.__proto__ || Object.getPrototypeOf(GlobalCityList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      position: '',
      citys: [],
      searchs: []
    }, _this.methods = {
      search: function search(value) {
        var _this2 = this;

        if (value === '') {
          this.searchs = [];
          return;
        }
        if (GlobalCityList.searchTimeoutId) clearTimeout(GlobalCityList.searchTimeoutId);
        GlobalCityList.searchTimeoutId = setTimeout(function () {
          var temp = [];
          _this2.citys.forEach(function (d) {
            d.citylist.forEach(function (city) {
              if (city.name.indexOf(value) !== -1) temp.push(city);
            });
          });
          _this2.searchs = temp;
          _this2.$apply();
        }, 50);
      },
      init: function init() {
        var _this3 = this;

        if (!GlobalCityList.inited) {
          (0, _util.getLocation)().then(function (data) {
            _this3.getCityData(data.latitude, data.longitude);
          });
          GlobalCityList.inited = true;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GlobalCityList, [{
    key: 'getCityData',
    value: function getCityData(latitude, longitude) {
      var _this4 = this;

      (0, _util.request)('https://g.58.com/getcities/?lat=' + latitude + '&long=' + longitude).then(function (data) {
        _this4.citys = data.result;
        if (!_this4.position) {
          if (data.gpscityname) {
            _this4.position = {
              name: data.gpscityname,
              url: data.gpscityurl
            };
          }
          _this4.$emit('initPosition', {
            name: data.gpscityname
          });
        }
        _this4.$apply();
      });
    }
  }]);

  return GlobalCityList;
}(_wepy2.default.component);

GlobalCityList.searchTimeoutId = '';
GlobalCityList.inited = false;
exports.default = GlobalCityList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbENpdHlMaXN0LmpzIl0sIm5hbWVzIjpbIkdsb2JhbENpdHlMaXN0IiwiZGF0YSIsInBvc2l0aW9uIiwiY2l0eXMiLCJzZWFyY2hzIiwibWV0aG9kcyIsInNlYXJjaCIsInZhbHVlIiwic2VhcmNoVGltZW91dElkIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInRlbXAiLCJmb3JFYWNoIiwiZCIsImNpdHlsaXN0IiwiY2l0eSIsIm5hbWUiLCJpbmRleE9mIiwicHVzaCIsIiRhcHBseSIsImluaXQiLCJpbml0ZWQiLCJ0aGVuIiwiZ2V0Q2l0eURhdGEiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInJlc3VsdCIsImdwc2NpdHluYW1lIiwidXJsIiwiZ3BzY2l0eXVybCIsIiRlbWl0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7O0lBSXFCQSxjOzs7Ozs7Ozs7Ozs7OztzTUFDbkJDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxlQUFTO0FBSEosSyxRQUtQQyxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDREMsS0FEQyxFQUNNO0FBQUE7O0FBQ1osWUFBSUEsVUFBVSxFQUFkLEVBQWtCO0FBQ2hCLGVBQUtILE9BQUwsR0FBZSxFQUFmO0FBQ0E7QUFDRDtBQUNELFlBQUlKLGVBQWVRLGVBQW5CLEVBQW9DQyxhQUFhVCxlQUFlUSxlQUE1QjtBQUNwQ1IsdUJBQWVRLGVBQWYsR0FBaUNFLFdBQVcsWUFBTTtBQUNoRCxjQUFJQyxPQUFPLEVBQVg7QUFDQSxpQkFBS1IsS0FBTCxDQUFXUyxPQUFYLENBQW1CLFVBQUNDLENBQUQsRUFBTztBQUN4QkEsY0FBRUMsUUFBRixDQUFXRixPQUFYLENBQW1CLFVBQUNHLElBQUQsRUFBVTtBQUMzQixrQkFBSUEsS0FBS0MsSUFBTCxDQUFVQyxPQUFWLENBQWtCVixLQUFsQixNQUE2QixDQUFDLENBQWxDLEVBQXFDSSxLQUFLTyxJQUFMLENBQVVILElBQVY7QUFDdEMsYUFGRDtBQUdELFdBSkQ7QUFLQSxpQkFBS1gsT0FBTCxHQUFlTyxJQUFmO0FBQ0EsaUJBQUtRLE1BQUw7QUFDRCxTQVRnQyxFQVM5QixFQVQ4QixDQUFqQztBQVVELE9BakJPO0FBa0JSQyxVQWxCUSxrQkFrQkQ7QUFBQTs7QUFDTCxZQUFJLENBQUNwQixlQUFlcUIsTUFBcEIsRUFBNEI7QUFDMUIsbUNBQWNDLElBQWQsQ0FBbUIsZ0JBQVE7QUFDekIsbUJBQUtDLFdBQUwsQ0FBaUJ0QixLQUFLdUIsUUFBdEIsRUFBZ0N2QixLQUFLd0IsU0FBckM7QUFDRCxXQUZEO0FBR0F6Qix5QkFBZXFCLE1BQWYsR0FBd0IsSUFBeEI7QUFDRDtBQUNGO0FBekJPLEs7Ozs7O2dDQTZCRUcsUSxFQUFVQyxTLEVBQVc7QUFBQTs7QUFDL0IsOERBQTJDRCxRQUEzQyxjQUE0REMsU0FBNUQsRUFBeUVILElBQXpFLENBQThFLGdCQUFRO0FBQ3BGLGVBQUtuQixLQUFMLEdBQWFGLEtBQUt5QixNQUFsQjtBQUNBLFlBQUksQ0FBQyxPQUFLeEIsUUFBVixFQUFvQjtBQUNsQixjQUFJRCxLQUFLMEIsV0FBVCxFQUFzQjtBQUNwQixtQkFBS3pCLFFBQUwsR0FBZ0I7QUFDZGMsb0JBQU1mLEtBQUswQixXQURHO0FBRWRDLG1CQUFLM0IsS0FBSzRCO0FBRkksYUFBaEI7QUFJRDtBQUNELGlCQUFLQyxLQUFMLENBQVcsY0FBWCxFQUEyQjtBQUN6QmQsa0JBQU1mLEtBQUswQjtBQURjLFdBQTNCO0FBR0Q7QUFDRCxlQUFLUixNQUFMO0FBQ0QsT0FkRDtBQWVEOzs7O0VBbkR5QyxlQUFLWSxTOztBQUE1Qi9CLGMsQ0FpQ1pRLGUsR0FBa0IsRTtBQWpDTlIsYyxDQWtDWnFCLE0sR0FBUyxLO2tCQWxDR3JCLGMiLCJmaWxlIjoiZ2xvYmFsQ2l0eUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB7XHJcbiAgICBnZXRMb2NhdGlvbixcclxuICAgIHJlcXVlc3RcclxuICB9IGZyb20gJ0AvdXRpbHMvdXRpbCdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxDaXR5TGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiAnJyxcclxuICAgICAgY2l0eXM6IFtdLFxyXG4gICAgICBzZWFyY2hzOiBbXVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgc2VhcmNoKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hzID0gW11cclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoR2xvYmFsQ2l0eUxpc3Quc2VhcmNoVGltZW91dElkKSBjbGVhclRpbWVvdXQoR2xvYmFsQ2l0eUxpc3Quc2VhcmNoVGltZW91dElkKVxyXG4gICAgICAgIEdsb2JhbENpdHlMaXN0LnNlYXJjaFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHRlbXAgPSBbXVxyXG4gICAgICAgICAgdGhpcy5jaXR5cy5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGQuY2l0eWxpc3QuZm9yRWFjaCgoY2l0eSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChjaXR5Lm5hbWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB0ZW1wLnB1c2goY2l0eSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLnNlYXJjaHMgPSB0ZW1wXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSwgNTApXHJcbiAgICAgIH0sXHJcbiAgICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKCFHbG9iYWxDaXR5TGlzdC5pbml0ZWQpIHtcclxuICAgICAgICAgIGdldExvY2F0aW9uKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nZXRDaXR5RGF0YShkYXRhLmxhdGl0dWRlLCBkYXRhLmxvbmdpdHVkZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBHbG9iYWxDaXR5TGlzdC5pbml0ZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2VhcmNoVGltZW91dElkID0gJydcclxuICAgIHN0YXRpYyBpbml0ZWQgPSBmYWxzZVxyXG4gICAgZ2V0Q2l0eURhdGEobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xyXG4gICAgICByZXF1ZXN0KGBodHRwczovL2cuNTguY29tL2dldGNpdGllcy8/bGF0PSR7bGF0aXR1ZGV9Jmxvbmc9JHtsb25naXR1ZGV9YCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICB0aGlzLmNpdHlzID0gZGF0YS5yZXN1bHRcclxuICAgICAgICBpZiAoIXRoaXMucG9zaXRpb24pIHtcclxuICAgICAgICAgIGlmIChkYXRhLmdwc2NpdHluYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgbmFtZTogZGF0YS5ncHNjaXR5bmFtZSxcclxuICAgICAgICAgICAgICB1cmw6IGRhdGEuZ3BzY2l0eXVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdpbml0UG9zaXRpb24nLCB7XHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEuZ3BzY2l0eW5hbWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==