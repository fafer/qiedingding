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

var InternalCityList = function (_wepy$component) {
  _inherits(InternalCityList, _wepy$component);

  function InternalCityList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InternalCityList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InternalCityList.__proto__ || Object.getPrototypeOf(InternalCityList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      position: '',
      citys: [],
      searchs: [],
      aside: [],
      toView: ''
    }, _this.methods = {
      initPosition: function initPosition(position) {
        this.position = position;
      },
      search: function search(value) {
        var _this2 = this;

        if (value === '') {
          this.searchs = [];
          return;
        }
        if (InternalCityList.searchTimeoutId) clearTimeout(InternalCityList.searchTimeoutId);
        InternalCityList.searchTimeoutId = setTimeout(function () {
          var temp = [];
          _this2.citys.forEach(function (d) {
            if (d.cityId !== -1 && d.cityName.indexOf(value) !== -1) temp.push(d);
          });
          _this2.searchs = temp;
          _this2.$apply();
        }, 50);
      },
      go: function go(item) {
        (0, _util.openInternalApp)('pages/index/index?cityId=' + item.cityId + '&dispCityId=' + item.dispCityId + '&cityName=' + item.cityName);
      },
      scrollTo: function scrollTo(item) {
        if (!item) this.toView = '';else this.toView = 'internal-list-' + item.cityName;
      },
      init: function init() {
        if (!InternalCityList.inited) {
          this.getCityData();
          InternalCityList.inited = true;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InternalCityList, [{
    key: 'getCityData',
    value: function getCityData() {
      var _this3 = this;

      (0, _util.request)('https://wxapp.58.com/load/city').then(function (data) {
        if (data.code === 0) {
          _this3.citys = JSON.parse(data.data);
          _this3.aside = _this3.citys.filter(function (d) {
            return d.cityId === -1;
          });
          _this3.$apply();
        }
      });
    }
  }]);

  return InternalCityList;
}(_wepy2.default.component);

InternalCityList.searchTimeoutId = '';
InternalCityList.inited = false;
exports.default = InternalCityList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVybmFsQ2l0eUxpc3QuanMiXSwibmFtZXMiOlsiSW50ZXJuYWxDaXR5TGlzdCIsImRhdGEiLCJwb3NpdGlvbiIsImNpdHlzIiwic2VhcmNocyIsImFzaWRlIiwidG9WaWV3IiwibWV0aG9kcyIsImluaXRQb3NpdGlvbiIsInNlYXJjaCIsInZhbHVlIiwic2VhcmNoVGltZW91dElkIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInRlbXAiLCJmb3JFYWNoIiwiZCIsImNpdHlJZCIsImNpdHlOYW1lIiwiaW5kZXhPZiIsInB1c2giLCIkYXBwbHkiLCJnbyIsIml0ZW0iLCJkaXNwQ2l0eUlkIiwic2Nyb2xsVG8iLCJpbml0IiwiaW5pdGVkIiwiZ2V0Q2l0eURhdGEiLCJ0aGVuIiwiY29kZSIsIkpTT04iLCJwYXJzZSIsImZpbHRlciIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7OztJQUlxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7OzBNQUNuQkMsSSxHQUFPO0FBQ0xDLGdCQUFVLEVBREw7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLGVBQVMsRUFISjtBQUlMQyxhQUFPLEVBSkY7QUFLTEMsY0FBUTtBQUxILEssUUFPUEMsTyxHQUFVO0FBQ1JDLGtCQURRLHdCQUNLTixRQURMLEVBQ2U7QUFDckIsYUFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRCxPQUhPO0FBSVJPLFlBSlEsa0JBSURDLEtBSkMsRUFJTTtBQUFBOztBQUNaLFlBQUlBLFVBQVUsRUFBZCxFQUFrQjtBQUNoQixlQUFLTixPQUFMLEdBQWUsRUFBZjtBQUNBO0FBQ0Q7QUFDRCxZQUFJSixpQkFBaUJXLGVBQXJCLEVBQXNDQyxhQUFhWixpQkFBaUJXLGVBQTlCO0FBQ3RDWCx5QkFBaUJXLGVBQWpCLEdBQW1DRSxXQUFXLFlBQU07QUFDbEQsY0FBSUMsT0FBTyxFQUFYO0FBQ0EsaUJBQUtYLEtBQUwsQ0FBV1ksT0FBWCxDQUFtQixVQUFDQyxDQUFELEVBQU87QUFDeEIsZ0JBQUlBLEVBQUVDLE1BQUYsS0FBYSxDQUFDLENBQWQsSUFBbUJELEVBQUVFLFFBQUYsQ0FBV0MsT0FBWCxDQUFtQlQsS0FBbkIsTUFBOEIsQ0FBQyxDQUF0RCxFQUF5REksS0FBS00sSUFBTCxDQUFVSixDQUFWO0FBQzFELFdBRkQ7QUFHQSxpQkFBS1osT0FBTCxHQUFlVSxJQUFmO0FBQ0EsaUJBQUtPLE1BQUw7QUFDRCxTQVBrQyxFQU9oQyxFQVBnQyxDQUFuQztBQVFELE9BbEJPO0FBbUJSQyxRQW5CUSxjQW1CTEMsSUFuQkssRUFtQkM7QUFDUCxpRUFBNENBLEtBQUtOLE1BQWpELG9CQUFzRU0sS0FBS0MsVUFBM0Usa0JBQWtHRCxLQUFLTCxRQUF2RztBQUNELE9BckJPO0FBc0JSTyxjQXRCUSxvQkFzQkNGLElBdEJELEVBc0JPO0FBQ2IsWUFBSSxDQUFDQSxJQUFMLEVBQVcsS0FBS2pCLE1BQUwsR0FBYyxFQUFkLENBQVgsS0FDSyxLQUFLQSxNQUFMLEdBQWMsbUJBQW1CaUIsS0FBS0wsUUFBdEM7QUFDTixPQXpCTztBQTBCUlEsVUExQlEsa0JBMEJEO0FBQ0wsWUFBSSxDQUFDMUIsaUJBQWlCMkIsTUFBdEIsRUFBOEI7QUFDNUIsZUFBS0MsV0FBTDtBQUNBNUIsMkJBQWlCMkIsTUFBakIsR0FBMEIsSUFBMUI7QUFDRDtBQUNGO0FBL0JPLEs7Ozs7O2tDQW1DSTtBQUFBOztBQUNaLHlCQUFRLGdDQUFSLEVBQTBDRSxJQUExQyxDQUErQyxnQkFBUTtBQUNyRCxZQUFJNUIsS0FBSzZCLElBQUwsS0FBYyxDQUFsQixFQUFxQjtBQUNuQixpQkFBSzNCLEtBQUwsR0FBYTRCLEtBQUtDLEtBQUwsQ0FBVy9CLEtBQUtBLElBQWhCLENBQWI7QUFDQSxpQkFBS0ksS0FBTCxHQUFhLE9BQUtGLEtBQUwsQ0FBVzhCLE1BQVgsQ0FBa0IsVUFBQ2pCLENBQUQsRUFBTztBQUNwQyxtQkFBT0EsRUFBRUMsTUFBRixLQUFhLENBQUMsQ0FBckI7QUFDRCxXQUZZLENBQWI7QUFHQSxpQkFBS0ksTUFBTDtBQUNEO0FBQ0YsT0FSRDtBQVNEOzs7O0VBckQyQyxlQUFLYSxTOztBQUE5QmxDLGdCLENBeUNaVyxlLEdBQWtCLEU7QUF6Q05YLGdCLENBMENaMkIsTSxHQUFTLEs7a0JBMUNHM0IsZ0IiLCJmaWxlIjoiaW50ZXJuYWxDaXR5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHtcclxuICAgIG9wZW5JbnRlcm5hbEFwcCxcclxuICAgIHJlcXVlc3RcclxuICB9IGZyb20gJ0AvdXRpbHMvdXRpbCdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcm5hbENpdHlMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgcG9zaXRpb246ICcnLFxyXG4gICAgICBjaXR5czogW10sXHJcbiAgICAgIHNlYXJjaHM6IFtdLFxyXG4gICAgICBhc2lkZTogW10sXHJcbiAgICAgIHRvVmlldzogJydcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGluaXRQb3NpdGlvbihwb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxyXG4gICAgICB9LFxyXG4gICAgICBzZWFyY2godmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaHMgPSBbXVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJbnRlcm5hbENpdHlMaXN0LnNlYXJjaFRpbWVvdXRJZCkgY2xlYXJUaW1lb3V0KEludGVybmFsQ2l0eUxpc3Quc2VhcmNoVGltZW91dElkKVxyXG4gICAgICAgIEludGVybmFsQ2l0eUxpc3Quc2VhcmNoVGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBsZXQgdGVtcCA9IFtdXHJcbiAgICAgICAgICB0aGlzLmNpdHlzLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGQuY2l0eUlkICE9PSAtMSAmJiBkLmNpdHlOYW1lLmluZGV4T2YodmFsdWUpICE9PSAtMSkgdGVtcC5wdXNoKGQpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5zZWFyY2hzID0gdGVtcFxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0sIDUwKVxyXG4gICAgICB9LFxyXG4gICAgICBnbyhpdGVtKSB7XHJcbiAgICAgICAgb3BlbkludGVybmFsQXBwKGBwYWdlcy9pbmRleC9pbmRleD9jaXR5SWQ9JHtpdGVtLmNpdHlJZH0mZGlzcENpdHlJZD0ke2l0ZW0uZGlzcENpdHlJZH0mY2l0eU5hbWU9JHtpdGVtLmNpdHlOYW1lfWApXHJcbiAgICAgIH0sXHJcbiAgICAgIHNjcm9sbFRvKGl0ZW0pIHtcclxuICAgICAgICBpZiAoIWl0ZW0pIHRoaXMudG9WaWV3ID0gJydcclxuICAgICAgICBlbHNlIHRoaXMudG9WaWV3ID0gJ2ludGVybmFsLWxpc3QtJyArIGl0ZW0uY2l0eU5hbWVcclxuICAgICAgfSxcclxuICAgICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAoIUludGVybmFsQ2l0eUxpc3QuaW5pdGVkKSB7XHJcbiAgICAgICAgICB0aGlzLmdldENpdHlEYXRhKClcclxuICAgICAgICAgIEludGVybmFsQ2l0eUxpc3QuaW5pdGVkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIHNlYXJjaFRpbWVvdXRJZCA9ICcnXHJcbiAgICBzdGF0aWMgaW5pdGVkID0gZmFsc2VcclxuICAgIGdldENpdHlEYXRhKCkge1xyXG4gICAgICByZXF1ZXN0KCdodHRwczovL3d4YXBwLjU4LmNvbS9sb2FkL2NpdHknKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmNvZGUgPT09IDApIHtcclxuICAgICAgICAgIHRoaXMuY2l0eXMgPSBKU09OLnBhcnNlKGRhdGEuZGF0YSlcclxuICAgICAgICAgIHRoaXMuYXNpZGUgPSB0aGlzLmNpdHlzLmZpbHRlcigoZCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZC5jaXR5SWQgPT09IC0xXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==