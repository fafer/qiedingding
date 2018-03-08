'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var request = exports.request = function request(url) {
  return new Promise(function (resolve) {
    wx.request({
      url: url,
      success: function success(data) {
        resolve(data.data);
      }
    });
  });
};

var getLocation = exports.getLocation = function getLocation() {
  return new Promise(function (resolve) {
    wx.getLocation({
      type: 'wgs84',
      success: function success(res) {
        resolve(res);
      }
    });
  });
};

var openApp = function openApp(appId, path) {
  return new Promise(function (resolve) {
    wx.navigateToMiniProgram({
      appId: appId,
      path: path || '',
      success: function success(res) {
        resolve(res);
      }
    });
  });
};

var openInternalApp = exports.openInternalApp = function openInternalApp(path) {
  return openApp('wxc97b21c63d084d92', path);
};

var openTownApp = exports.openTownApp = function openTownApp(path) {
  return openApp('wxee214e01d07c9db0', path);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsicmVxdWVzdCIsIlByb21pc2UiLCJ3eCIsInVybCIsInN1Y2Nlc3MiLCJkYXRhIiwicmVzb2x2ZSIsImdldExvY2F0aW9uIiwidHlwZSIsInJlcyIsIm9wZW5BcHAiLCJhcHBJZCIsInBhdGgiLCJuYXZpZ2F0ZVRvTWluaVByb2dyYW0iLCJvcGVuSW50ZXJuYWxBcHAiLCJvcGVuVG93bkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFJQSw0QkFBVSxTQUFWQSxPQUFVLE1BQU87QUFDMUIsU0FBTyxJQUFJQyxPQUFKLENBQVksbUJBQVc7QUFDNUJDLE9BQUdGLE9BQUgsQ0FBVztBQUNURyxXQUFLQSxHQURJO0FBRVRDLGVBQVMsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkJDLGdCQUFRRCxLQUFLQSxJQUFiO0FBQ0Q7QUFKUSxLQUFYO0FBTUQsR0FQTSxDQUFQO0FBUUQsQ0FUTTs7QUFXQSxJQUFJRSxvQ0FBYyxTQUFkQSxXQUFjLEdBQU07QUFDN0IsU0FBTyxJQUFJTixPQUFKLENBQVksbUJBQVc7QUFDNUJDLE9BQUdLLFdBQUgsQ0FBZTtBQUNiQyxZQUFNLE9BRE87QUFFYkosZUFBUyxpQkFBVUssR0FBVixFQUFlO0FBQ3RCSCxnQkFBUUcsR0FBUjtBQUNEO0FBSlksS0FBZjtBQU1ELEdBUE0sQ0FBUDtBQVFELENBVE07O0FBV1AsSUFBSUMsVUFBVSxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsSUFBUixFQUFpQjtBQUM3QixTQUFPLElBQUlYLE9BQUosQ0FBWSxtQkFBVztBQUM1QkMsT0FBR1cscUJBQUgsQ0FBeUI7QUFDdkJGLGFBQU9BLEtBRGdCO0FBRXZCQyxZQUFNQSxRQUFRLEVBRlM7QUFHdkJSLGFBSHVCLG1CQUdmSyxHQUhlLEVBR1Y7QUFDWEgsZ0JBQVFHLEdBQVI7QUFDRDtBQUxzQixLQUF6QjtBQU9ELEdBUk0sQ0FBUDtBQVNELENBVkQ7O0FBWU8sSUFBSUssNENBQWtCLFNBQWxCQSxlQUFrQixDQUFDRixJQUFELEVBQVU7QUFDckMsU0FBT0YsUUFBUSxvQkFBUixFQUE4QkUsSUFBOUIsQ0FBUDtBQUNELENBRk07O0FBSUEsSUFBSUcsb0NBQWMsU0FBZEEsV0FBYyxDQUFDSCxJQUFELEVBQVU7QUFDakMsU0FBT0YsUUFBUSxvQkFBUixFQUE4QkUsSUFBOUIsQ0FBUDtBQUNELENBRk0iLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBsZXQgcmVxdWVzdCA9IHVybCA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJlc29sdmUoZGF0YS5kYXRhKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgZ2V0TG9jYXRpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgd3guZ2V0TG9jYXRpb24oe1xyXG4gICAgICB0eXBlOiAnd2dzODQnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxubGV0IG9wZW5BcHAgPSAoYXBwSWQsIHBhdGgpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICBhcHBJZDogYXBwSWQsXHJcbiAgICAgIHBhdGg6IHBhdGggfHwgJycsXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGxldCBvcGVuSW50ZXJuYWxBcHAgPSAocGF0aCkgPT4ge1xyXG4gIHJldHVybiBvcGVuQXBwKCd3eGM5N2IyMWM2M2QwODRkOTInLCBwYXRoKVxyXG59XHJcblxyXG5leHBvcnQgbGV0IG9wZW5Ub3duQXBwID0gKHBhdGgpID0+IHtcclxuICByZXR1cm4gb3BlbkFwcCgnd3hlZTIxNGUwMWQwN2M5ZGIwJywgcGF0aClcclxufVxyXG4iXX0=