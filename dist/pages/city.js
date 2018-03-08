'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _search = require('./../components/search.js');

var _search2 = _interopRequireDefault(_search);

var _globalCityList = require('./../components/globalCityList.js');

var _globalCityList2 = _interopRequireDefault(_globalCityList);

var _internalCityList = require('./../components/internalCityList.js');

var _internalCityList2 = _interopRequireDefault(_internalCityList);

var _townCityList = require('./../components/townCityList.js');

var _townCityList2 = _interopRequireDefault(_townCityList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var City = function (_wepy$page) {
  _inherits(City, _wepy$page);

  function City() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, City);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = City.__proto__ || Object.getPrototypeOf(City)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      currentTab: 1
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:currentTab.once": "currentTab", "xmlns:v-on": "" }, "search": { "v-bind:placehold.sync": "placehold" }, "globalCityList": {}, "internalCityList": { "xmlns:wx": "" }, "townCityList": {} }, _this.$events = { "tab": { "v-on:change": "changeTab" }, "search": { "v-on:search": "search" }, "globalCityList": { "v-on:initPosition": "initPosition" } }, _this.components = {
      tab: _tab2.default,
      search: _search2.default,
      globalCityList: _globalCityList2.default,
      internalCityList: _internalCityList2.default,
      townCityList: _townCityList2.default
    }, _this.computed = {
      placehold: function placehold() {
        if (this.currentTab === 2) return '输入乡镇名称';else return '输入城市名称';
      }
    }, _this.methods = {
      changeTab: function changeTab(index) {
        this.$invoke('search', 'clear');
        this.init(index);
      },
      initPosition: function initPosition(position) {
        this.$invoke('internalCityList', 'initPosition', position);
        this.$invoke('townCityList', 'initPosition', position);
      },
      search: function search(value) {
        switch (this.currentTab) {
          case 0:
            this.$invoke('internalCityList', 'search', value);
            break;
          case 1:
            this.$invoke('globalCityList', 'search', value);
            break;
          case 2:
            this.$invoke('townCityList', 'search', value);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(City, [{
    key: 'init',
    value: function init(index) {
      switch (index) {
        case 0:
          this.$invoke('internalCityList', 'init');
          break;
        case 1:
          this.$invoke('globalCityList', 'init');
          break;
        case 2:
          this.$invoke('townCityList', 'init');
      }
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {
      return {
        title: '58同城国际站',
        path: '/pages/city'
      };
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.init(this.currentTab);
    }
  }]);

  return City;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(City , 'pages/city'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdHkuanMiXSwibmFtZXMiOlsiQ2l0eSIsImRhdGEiLCJjdXJyZW50VGFiIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidGFiIiwic2VhcmNoIiwiZ2xvYmFsQ2l0eUxpc3QiLCJpbnRlcm5hbENpdHlMaXN0IiwidG93bkNpdHlMaXN0IiwiY29tcHV0ZWQiLCJwbGFjZWhvbGQiLCJtZXRob2RzIiwiY2hhbmdlVGFiIiwiaW5kZXgiLCIkaW52b2tlIiwiaW5pdCIsImluaXRQb3NpdGlvbiIsInBvc2l0aW9uIiwidmFsdWUiLCJ0aXRsZSIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxJLEdBQU87QUFDTEMsa0JBQVk7QUFEUCxLLFFBR1JDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLE9BQU0sRUFBQyxnQkFBZSxFQUFoQixFQUFtQiwwQkFBeUIsWUFBNUMsRUFBeUQsY0FBYSxFQUF0RSxFQUFQLEVBQWlGLFVBQVMsRUFBQyx5QkFBd0IsV0FBekIsRUFBMUYsRUFBZ0ksa0JBQWlCLEVBQWpKLEVBQW9KLG9CQUFtQixFQUFDLFlBQVcsRUFBWixFQUF2SyxFQUF1TCxnQkFBZSxFQUF0TSxFLFFBQ1RDLE8sR0FBVSxFQUFDLE9BQU0sRUFBQyxlQUFjLFdBQWYsRUFBUCxFQUFtQyxVQUFTLEVBQUMsZUFBYyxRQUFmLEVBQTVDLEVBQXFFLGtCQUFpQixFQUFDLHFCQUFvQixjQUFyQixFQUF0RixFLFFBQ1RDLFUsR0FBYTtBQUNSQyx3QkFEUTtBQUVSQyw4QkFGUTtBQUdSQyw4Q0FIUTtBQUlSQyxrREFKUTtBQUtSQztBQUxRLEssUUFPVkMsUSxHQUFXO0FBQ1RDLGVBRFMsdUJBQ0c7QUFDVixZQUFJLEtBQUtYLFVBQUwsS0FBb0IsQ0FBeEIsRUFBMkIsT0FBTyxRQUFQLENBQTNCLEtBQ0ssT0FBTyxRQUFQO0FBQ047QUFKUSxLLFFBTVhZLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxLQURGLEVBQ1M7QUFDZixhQUFLQyxPQUFMLENBQWEsUUFBYixFQUF1QixPQUF2QjtBQUNBLGFBQUtDLElBQUwsQ0FBVUYsS0FBVjtBQUNELE9BSk87QUFLUkcsa0JBTFEsd0JBS0tDLFFBTEwsRUFLZTtBQUNyQixhQUFLSCxPQUFMLENBQWEsa0JBQWIsRUFBaUMsY0FBakMsRUFBaURHLFFBQWpEO0FBQ0EsYUFBS0gsT0FBTCxDQUFhLGNBQWIsRUFBNkIsY0FBN0IsRUFBNkNHLFFBQTdDO0FBQ0QsT0FSTztBQVNSWixZQVRRLGtCQVNEYSxLQVRDLEVBU007QUFDWixnQkFBUSxLQUFLbkIsVUFBYjtBQUNFLGVBQUssQ0FBTDtBQUNFLGlCQUFLZSxPQUFMLENBQWEsa0JBQWIsRUFBaUMsUUFBakMsRUFBMkNJLEtBQTNDO0FBQ0E7QUFDRixlQUFLLENBQUw7QUFDRSxpQkFBS0osT0FBTCxDQUFhLGdCQUFiLEVBQStCLFFBQS9CLEVBQXlDSSxLQUF6QztBQUNBO0FBQ0YsZUFBSyxDQUFMO0FBQ0UsaUJBQUtKLE9BQUwsQ0FBYSxjQUFiLEVBQTZCLFFBQTdCLEVBQXVDSSxLQUF2QztBQVJKO0FBVUQ7QUFwQk8sSzs7Ozs7eUJBc0JMTCxLLEVBQU87QUFDVixjQUFRQSxLQUFSO0FBQ0UsYUFBSyxDQUFMO0FBQ0UsZUFBS0MsT0FBTCxDQUFhLGtCQUFiLEVBQWlDLE1BQWpDO0FBQ0E7QUFDRixhQUFLLENBQUw7QUFDRSxlQUFLQSxPQUFMLENBQWEsZ0JBQWIsRUFBK0IsTUFBL0I7QUFDQTtBQUNGLGFBQUssQ0FBTDtBQUNFLGVBQUtBLE9BQUwsQ0FBYSxjQUFiLEVBQTZCLE1BQTdCO0FBUko7QUFVRDs7O3dDQUNtQjtBQUNsQixhQUFPO0FBQ0xLLGVBQU0sU0FERDtBQUVMQyxjQUFLO0FBRkEsT0FBUDtBQUlEOzs7NkJBQ1E7QUFDUCxXQUFLTCxJQUFMLENBQVUsS0FBS2hCLFVBQWY7QUFDRDs7OztFQTlEK0IsZUFBS3NCLEk7O2tCQUFsQnhCLEkiLCJmaWxlIjoiY2l0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IFRhYiBmcm9tICdAL2NvbXBvbmVudHMvdGFiJ1xyXG4gIGltcG9ydCBTZWFyY2ggZnJvbSAnQC9jb21wb25lbnRzL3NlYXJjaCdcclxuICBpbXBvcnQgR2xvYmFsQ2l0eUxpc3QgZnJvbSAnQC9jb21wb25lbnRzL2dsb2JhbENpdHlMaXN0J1xyXG4gIGltcG9ydCBJbnRlcm5hbENpdHlMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9pbnRlcm5hbENpdHlMaXN0J1xyXG4gIGltcG9ydCBUb3duQ2l0eUxpc3QgZnJvbSAnQC9jb21wb25lbnRzL3Rvd25DaXR5TGlzdCdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaXR5IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGN1cnJlbnRUYWI6IDFcclxuICAgIH1cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ0YWJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmN1cnJlbnRUYWIub25jZVwiOlwiY3VycmVudFRhYlwiLFwieG1sbnM6di1vblwiOlwiXCJ9LFwic2VhcmNoXCI6e1widi1iaW5kOnBsYWNlaG9sZC5zeW5jXCI6XCJwbGFjZWhvbGRcIn0sXCJnbG9iYWxDaXR5TGlzdFwiOnt9LFwiaW50ZXJuYWxDaXR5TGlzdFwiOntcInhtbG5zOnd4XCI6XCJcIn0sXCJ0b3duQ2l0eUxpc3RcIjp7fX07XHJcbiRldmVudHMgPSB7XCJ0YWJcIjp7XCJ2LW9uOmNoYW5nZVwiOlwiY2hhbmdlVGFiXCJ9LFwic2VhcmNoXCI6e1widi1vbjpzZWFyY2hcIjpcInNlYXJjaFwifSxcImdsb2JhbENpdHlMaXN0XCI6e1widi1vbjppbml0UG9zaXRpb25cIjpcImluaXRQb3NpdGlvblwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICB0YWI6IFRhYixcclxuICAgICAgc2VhcmNoOiBTZWFyY2gsXHJcbiAgICAgIGdsb2JhbENpdHlMaXN0OiBHbG9iYWxDaXR5TGlzdCxcclxuICAgICAgaW50ZXJuYWxDaXR5TGlzdDogSW50ZXJuYWxDaXR5TGlzdCxcclxuICAgICAgdG93bkNpdHlMaXN0OiBUb3duQ2l0eUxpc3RcclxuICAgIH1cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICBwbGFjZWhvbGQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhYiA9PT0gMikgcmV0dXJuICfovpPlhaXkuaHplYflkI3np7AnXHJcbiAgICAgICAgZWxzZSByZXR1cm4gJ+i+k+WFpeWfjuW4guWQjeensCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgY2hhbmdlVGFiKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCdzZWFyY2gnLCAnY2xlYXInKVxyXG4gICAgICAgIHRoaXMuaW5pdChpbmRleClcclxuICAgICAgfSxcclxuICAgICAgaW5pdFBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCdpbnRlcm5hbENpdHlMaXN0JywgJ2luaXRQb3NpdGlvbicsIHBvc2l0aW9uKVxyXG4gICAgICAgIHRoaXMuJGludm9rZSgndG93bkNpdHlMaXN0JywgJ2luaXRQb3NpdGlvbicsIHBvc2l0aW9uKVxyXG4gICAgICB9LFxyXG4gICAgICBzZWFyY2godmFsdWUpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuY3VycmVudFRhYikge1xyXG4gICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2ludGVybmFsQ2l0eUxpc3QnLCAnc2VhcmNoJywgdmFsdWUpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgnZ2xvYmFsQ2l0eUxpc3QnLCAnc2VhcmNoJywgdmFsdWUpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgndG93bkNpdHlMaXN0JywgJ3NlYXJjaCcsIHZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5pdChpbmRleCkge1xyXG4gICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgdGhpcy4kaW52b2tlKCdpbnRlcm5hbENpdHlMaXN0JywgJ2luaXQnKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ2dsb2JhbENpdHlMaXN0JywgJ2luaXQnKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ3Rvd25DaXR5TGlzdCcsICdpbml0JylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6JzU45ZCM5Z+O5Zu96ZmF56uZJyxcclxuICAgICAgICBwYXRoOicvcGFnZXMvY2l0eSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICB0aGlzLmluaXQodGhpcy5jdXJyZW50VGFiKVxyXG4gICAgfVxyXG4gIH1cclxuIl19