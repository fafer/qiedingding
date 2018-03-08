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

var TownCityList = function (_wepy$component) {
  _inherits(TownCityList, _wepy$component);

  function TownCityList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TownCityList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TownCityList.__proto__ || Object.getPrototypeOf(TownCityList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      position: '',
      citys: [{
        defaultName: '选择省',
        name: '',
        value: '',
        index: 0
      }, {
        defaultName: '选择市',
        name: '',
        value: '',
        index: 0
      }, {
        defaultName: '选择区/县',
        name: '',
        value: '',
        index: 0
      }, {
        defaultName: '选择乡镇',
        name: '',
        value: '',
        index: 0
      }],
      level: 0,
      toView: '',
      hideList: true,
      searchs: []
    }, _this.computed = {
      currentCitys: function currentCitys() {
        return TownCityList.list[this.level];
      },
      currentValue: function currentValue() {
        return this.citys[this.level].value;
      }
    }, _this.methods = {
      change: function change(tab, index) {
        if (index !== this.level) {
          var temp = TownCityList.list[index];
          if (temp.length) {
            this.level = index;
            this.hideList = false;
            var _index = tab.index;
            if (_index > 1) {
              this.toView = 'town-list-' + temp[_index - 2].id;
            } else {
              this.toView = 'town-list-' + temp[0].id;
            }
          }
        }
      },
      select: function select(item, index) {
        var current = this.citys[this.level];
        current.name = item.name.length > 5 ? item.name.substring(0, 2) + '...' + item.name.substring(item.name.length - 2) : item.name;
        current.value = item.id;
        current.index = index;
        this.hideList = true;
        if (this.level === 3) {
          (0, _util.openTownApp)('pages/index/index?localId=' + this.citys[3].value);
        } else {
          var temp_level = this.level + 1;
          if (temp_level === 1) this.getCityData(item.id, temp_level);else {
            this.updateCityData(temp_level, item.list);
          }
        }
      },
      initPosition: function initPosition(position) {
        this.position = position;
      },
      search: function search(value) {
        var _this2 = this;

        if (value === '') {
          this.searchs = [];
          return;
        }
        if (TownCityList.searchTimeoutId) clearTimeout(TownCityList.searchTimeoutId);
        TownCityList.searchTimeoutId = setTimeout(function () {
          var temp = [];
          TownCityList.towlist.forEach(function (d) {
            if (d.desc.indexOf(value) !== -1 || d.name.indexOf(value) !== -1 || d.pinyin.indexOf(value) !== -1 || d.shortName.indexOf(value) !== -1) temp.push(d);
          });
          _this2.searchs = temp;
          _this2.$apply();
        }, 50);
      },
      go: function go(item) {
        (0, _util.openTownApp)('pages/index/index?localId=' + item.id);
      },
      init: function init() {
        if (!TownCityList.inited) {
          this.getCityData('1', 0);
          this.getTownList();
          TownCityList.inited = true;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TownCityList, [{
    key: 'reset',
    value: function reset(level) {
      for (var index = level; index < 4; index++) {
        var temp = this.citys[index];
        temp.name = '';
        temp.value = '';
        temp.index = 0;
        TownCityList.list[index] = [];
      }
    }
  }, {
    key: 'getCityData',
    value: function getCityData(id, level) {
      var _this3 = this;

      var provinceId = id || '';
      if (TownCityList.dataCache[provinceId]) {
        this.updateCityData(level, TownCityList.dataCache[provinceId]);
      }
      (0, _util.request)('https://activity.58.com/wxa/town/listbylevel?provinceId=' + provinceId).then(function (data) {
        if (data.code === 0) {
          var result = data.data.list;
          TownCityList.dataCache[provinceId] = result;
          _this3.updateCityData(level, result);
          _this3.$apply();
        }
      });
    }
  }, {
    key: 'updateCityData',
    value: function updateCityData(level, result) {
      this.reset(level);
      this.level = level;
      this.hideList = false;
      TownCityList.list[level] = result;
    }
  }, {
    key: 'getTownList',
    value: function getTownList() {
      (0, _util.request)('https://activity.58.com/wxa/town/townlist').then(function (data) {
        if (data.code === 0) {
          TownCityList.towlist = data.data.list;
        }
      });
    }
  }]);

  return TownCityList;
}(_wepy2.default.component);

TownCityList.dataCache = {};
TownCityList.towlist = [];
TownCityList.list = [[], [], [], []];
TownCityList.searchTimeoutId = '';
TownCityList.inited = false;
exports.default = TownCityList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvd25DaXR5TGlzdC5qcyJdLCJuYW1lcyI6WyJUb3duQ2l0eUxpc3QiLCJkYXRhIiwicG9zaXRpb24iLCJjaXR5cyIsImRlZmF1bHROYW1lIiwibmFtZSIsInZhbHVlIiwiaW5kZXgiLCJsZXZlbCIsInRvVmlldyIsImhpZGVMaXN0Iiwic2VhcmNocyIsImNvbXB1dGVkIiwiY3VycmVudENpdHlzIiwibGlzdCIsImN1cnJlbnRWYWx1ZSIsIm1ldGhvZHMiLCJjaGFuZ2UiLCJ0YWIiLCJ0ZW1wIiwibGVuZ3RoIiwiX2luZGV4IiwiaWQiLCJzZWxlY3QiLCJpdGVtIiwiY3VycmVudCIsInN1YnN0cmluZyIsInRlbXBfbGV2ZWwiLCJnZXRDaXR5RGF0YSIsInVwZGF0ZUNpdHlEYXRhIiwiaW5pdFBvc2l0aW9uIiwic2VhcmNoIiwic2VhcmNoVGltZW91dElkIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInRvd2xpc3QiLCJmb3JFYWNoIiwiZCIsImRlc2MiLCJpbmRleE9mIiwicGlueWluIiwic2hvcnROYW1lIiwicHVzaCIsIiRhcHBseSIsImdvIiwiaW5pdCIsImluaXRlZCIsImdldFRvd25MaXN0IiwicHJvdmluY2VJZCIsImRhdGFDYWNoZSIsInRoZW4iLCJjb2RlIiwicmVzdWx0IiwicmVzZXQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFJcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsSSxHQUFPO0FBQ0xDLGdCQUFVLEVBREw7QUFFTEMsYUFBTyxDQUFDO0FBQ0pDLHFCQUFhLEtBRFQ7QUFFSkMsY0FBTSxFQUZGO0FBR0pDLGVBQU8sRUFISDtBQUlKQyxlQUFPO0FBSkgsT0FBRCxFQU1MO0FBQ0VILHFCQUFhLEtBRGY7QUFFRUMsY0FBTSxFQUZSO0FBR0VDLGVBQU8sRUFIVDtBQUlFQyxlQUFPO0FBSlQsT0FOSyxFQVlMO0FBQ0VILHFCQUFhLE9BRGY7QUFFRUMsY0FBTSxFQUZS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WSxFQUVaLEVBRlksRUFHWixFQUhZLEVBSVosRUFKWSxDO0FBNUdLZCxZLENBa0haZ0MsZSxHQUFrQixFO0FBbEhOaEMsWSxDQW1IWjhDLE0sR0FBUyxLO2tCQW5IRzlDLFkiLCJmaWxlIjoidG93bkNpdHlMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQge1xyXG4gICAgb3BlblRvd25BcHAsXHJcbiAgICByZXF1ZXN0XHJcbiAgfSBmcm9tICdAL3V0aWxzL3V0aWwnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG93bkNpdHlMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgcG9zaXRpb246ICcnLFxyXG4gICAgICBjaXR5czogW3tcclxuICAgICAgICAgIGRlZmF1bHROYW1lOiAn6YCJ5oup55yBJyxcclxuICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgaW5kZXg6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRlZmF1bHROYW1lOiAn6YCJ5oup5biCJyxcclxuICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgaW5kZXg6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRlZmF1bHROYW1lOiAn6YCJ5oup5Yy6L+WOvycsXHJcbiAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICAgIGluZGV4OiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBkZWZhdWx0TmFtZTogJ+mAieaLqeS5oemVhycsXHJcbiAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICAgIGluZGV4OiAwXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBsZXZlbDogMCxcclxuICAgICAgdG9WaWV3OiAnJyxcclxuICAgICAgaGlkZUxpc3Q6IHRydWUsXHJcbiAgICAgIHNlYXJjaHM6IFtdXHJcbiAgICB9XHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgY3VycmVudENpdHlzKCkge1xyXG4gICAgICAgIHJldHVybiBUb3duQ2l0eUxpc3QubGlzdFt0aGlzLmxldmVsXVxyXG4gICAgICB9LFxyXG4gICAgICBjdXJyZW50VmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2l0eXNbdGhpcy5sZXZlbF0udmFsdWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgY2hhbmdlKHRhYiwgaW5kZXgpIHtcclxuICAgICAgICBpZiAoaW5kZXggIT09IHRoaXMubGV2ZWwpIHtcclxuICAgICAgICAgIGxldCB0ZW1wID0gVG93bkNpdHlMaXN0Lmxpc3RbaW5kZXhdXHJcbiAgICAgICAgICBpZiAodGVtcC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IGluZGV4XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUxpc3QgPSBmYWxzZVxyXG4gICAgICAgICAgICBsZXQgX2luZGV4ID0gdGFiLmluZGV4XHJcbiAgICAgICAgICAgIGlmIChfaW5kZXggPiAxKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy50b1ZpZXcgPSAndG93bi1saXN0LScgKyB0ZW1wW19pbmRleCAtIDJdLmlkXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy50b1ZpZXcgPSAndG93bi1saXN0LScgKyB0ZW1wWzBdLmlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5jaXR5c1t0aGlzLmxldmVsXVxyXG4gICAgICAgIGN1cnJlbnQubmFtZSA9IGl0ZW0ubmFtZS5sZW5ndGggPiA1ID8gaXRlbS5uYW1lLnN1YnN0cmluZygwLCAyKSArICcuLi4nICsgaXRlbS5uYW1lLnN1YnN0cmluZyhpdGVtLm5hbWUubGVuZ3RoIC0gMikgOiBpdGVtLm5hbWVcclxuICAgICAgICBjdXJyZW50LnZhbHVlID0gaXRlbS5pZFxyXG4gICAgICAgIGN1cnJlbnQuaW5kZXggPSBpbmRleFxyXG4gICAgICAgIHRoaXMuaGlkZUxpc3QgPSB0cnVlXHJcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwgPT09IDMpIHtcclxuICAgICAgICAgIG9wZW5Ub3duQXBwKGBwYWdlcy9pbmRleC9pbmRleD9sb2NhbElkPSR7dGhpcy5jaXR5c1szXS52YWx1ZX1gKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgdGVtcF9sZXZlbCA9IHRoaXMubGV2ZWwgKyAxXHJcbiAgICAgICAgICBpZiAodGVtcF9sZXZlbCA9PT0gMSkgdGhpcy5nZXRDaXR5RGF0YShpdGVtLmlkLCB0ZW1wX2xldmVsKVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2l0eURhdGEodGVtcF9sZXZlbCwgaXRlbS5saXN0KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgaW5pdFBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlYXJjaCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgIHRoaXMuc2VhcmNocyA9IFtdXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFRvd25DaXR5TGlzdC5zZWFyY2hUaW1lb3V0SWQpIGNsZWFyVGltZW91dChUb3duQ2l0eUxpc3Quc2VhcmNoVGltZW91dElkKVxyXG4gICAgICAgIFRvd25DaXR5TGlzdC5zZWFyY2hUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGxldCB0ZW1wID0gW11cclxuICAgICAgICAgIFRvd25DaXR5TGlzdC50b3dsaXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGQuZGVzYy5pbmRleE9mKHZhbHVlKSAhPT0gLTEgfHxcclxuICAgICAgICAgICAgICBkLm5hbWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xIHx8XHJcbiAgICAgICAgICAgICAgZC5waW55aW4uaW5kZXhPZih2YWx1ZSkgIT09IC0xIHx8XHJcbiAgICAgICAgICAgICAgZC5zaG9ydE5hbWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xXHJcbiAgICAgICAgICAgICkgdGVtcC5wdXNoKGQpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5zZWFyY2hzID0gdGVtcFxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0sIDUwKVxyXG4gICAgICB9LFxyXG4gICAgICBnbyhpdGVtKSB7XHJcbiAgICAgICAgb3BlblRvd25BcHAoYHBhZ2VzL2luZGV4L2luZGV4P2xvY2FsSWQ9JHtpdGVtLmlkfWApXHJcbiAgICAgIH0sXHJcbiAgICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKCFUb3duQ2l0eUxpc3QuaW5pdGVkKSB7XHJcbiAgICAgICAgICB0aGlzLmdldENpdHlEYXRhKCcxJywgMClcclxuICAgICAgICAgIHRoaXMuZ2V0VG93bkxpc3QoKVxyXG4gICAgICAgICAgVG93bkNpdHlMaXN0LmluaXRlZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBkYXRhQ2FjaGUgPSB7fVxyXG4gICAgc3RhdGljIHRvd2xpc3QgPSBbXVxyXG4gICAgc3RhdGljIGxpc3QgPSBbXHJcbiAgICAgIFtdLFxyXG4gICAgICBbXSxcclxuICAgICAgW10sXHJcbiAgICAgIFtdXHJcbiAgICBdXHJcbiAgICBzdGF0aWMgc2VhcmNoVGltZW91dElkID0gJydcclxuICAgIHN0YXRpYyBpbml0ZWQgPSBmYWxzZVxyXG4gICAgcmVzZXQobGV2ZWwpIHtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSBsZXZlbDsgaW5kZXggPCA0OyBpbmRleCsrKSB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSB0aGlzLmNpdHlzW2luZGV4XVxyXG4gICAgICAgIHRlbXAubmFtZSA9ICcnXHJcbiAgICAgICAgdGVtcC52YWx1ZSA9ICcnXHJcbiAgICAgICAgdGVtcC5pbmRleCA9IDBcclxuICAgICAgICBUb3duQ2l0eUxpc3QubGlzdFtpbmRleF0gPSBbXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDaXR5RGF0YShpZCwgbGV2ZWwpIHtcclxuICAgICAgbGV0IHByb3ZpbmNlSWQgPSBpZCB8fCAnJ1xyXG4gICAgICBpZiAoVG93bkNpdHlMaXN0LmRhdGFDYWNoZVtwcm92aW5jZUlkXSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2l0eURhdGEobGV2ZWwsIFRvd25DaXR5TGlzdC5kYXRhQ2FjaGVbcHJvdmluY2VJZF0pXHJcbiAgICAgIH1cclxuICAgICAgcmVxdWVzdCgnaHR0cHM6Ly9hY3Rpdml0eS41OC5jb20vd3hhL3Rvd24vbGlzdGJ5bGV2ZWw/cHJvdmluY2VJZD0nICsgcHJvdmluY2VJZCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5jb2RlID09PSAwKSB7XHJcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gZGF0YS5kYXRhLmxpc3RcclxuICAgICAgICAgIFRvd25DaXR5TGlzdC5kYXRhQ2FjaGVbcHJvdmluY2VJZF0gPSByZXN1bHRcclxuICAgICAgICAgIHRoaXMudXBkYXRlQ2l0eURhdGEobGV2ZWwsIHJlc3VsdClcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB1cGRhdGVDaXR5RGF0YShsZXZlbCwgcmVzdWx0KSB7XHJcbiAgICAgIHRoaXMucmVzZXQobGV2ZWwpXHJcbiAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbFxyXG4gICAgICB0aGlzLmhpZGVMaXN0ID0gZmFsc2VcclxuICAgICAgVG93bkNpdHlMaXN0Lmxpc3RbbGV2ZWxdID0gcmVzdWx0XHJcbiAgICB9XHJcbiAgICBnZXRUb3duTGlzdCgpIHtcclxuICAgICAgcmVxdWVzdCgnaHR0cHM6Ly9hY3Rpdml0eS41OC5jb20vd3hhL3Rvd24vdG93bmxpc3QnKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmNvZGUgPT09IDApIHtcclxuICAgICAgICAgIFRvd25DaXR5TGlzdC50b3dsaXN0ID0gZGF0YS5kYXRhLmxpc3RcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=