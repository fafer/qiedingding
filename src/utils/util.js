export let request = url => {
  return new Promise(resolve => {
    wx.request({
      url: url,
      success: function (data) {
        resolve(data.data)
      }
    })
  })
}

export let getLocation = () => {
  return new Promise(resolve => {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        resolve(res)
      }
    })
  })
}

let openApp = (appId, path) => {
  return new Promise(resolve => {
    wx.navigateToMiniProgram({
      appId: appId,
      path: path || '',
      success(res) {
        resolve(res)
      }
    })
  })
}

export let openInternalApp = (path) => {
  return openApp('wxc97b21c63d084d92', path)
}

export let openTownApp = (path) => {
  return openApp('wxee214e01d07c9db0', path)
}
