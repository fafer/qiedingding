"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_util=require("./../utils/util.js"),GlobalCityList=function(t){function e(){var t,i,n,o;_classCallCheck(this,e);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return i=n=_possibleConstructorReturn(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),n.data={position:"",citys:[],searchs:[]},n.methods={search:function(t){var i=this;if(""===t)return void(this.searchs=[]);e.searchTimeoutId&&clearTimeout(e.searchTimeoutId),e.searchTimeoutId=setTimeout(function(){var e=[];i.citys.forEach(function(i){i.citylist.forEach(function(i){-1!==i.name.indexOf(t)&&e.push(i)})}),i.searchs=e,i.$apply()},50)},init:function(){var t=this;(0,_util.getLocation)().then(function(e){t.getCityData(e.latitude,e.longitude)})}},o=i,_possibleConstructorReturn(n,o)}return _inherits(e,t),_createClass(e,[{key:"getCityData",value:function(t,i){var n=this;if(e.cacheData)return void this.updateData(e.cacheData);(0,_util.request)("https://g.58.com/getcities/?lat="+t+"&long="+i).then(function(t){e.cacheData=t,n.updateData(t)})}},{key:"updateData",value:function(t){this.citys=t.result,this.position||(t.gpscityname&&(this.position={name:t.gpscityname,url:t.gpscityurl}),this.$emit("initPosition",{name:t.gpscityname})),this.$apply()}}]),e}(_wepy2.default.component);GlobalCityList.searchTimeoutId="",exports.default=GlobalCityList;