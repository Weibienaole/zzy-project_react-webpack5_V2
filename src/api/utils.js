//访问用户媒体设备的兼容方法
const getUserMedia = (constrains) => {
  if (navigator.mediaDevices?.getUserMedia) {
    //最新标准API
    return navigator.mediaDevices.getUserMedia(constrains)
  } else if (navigator.webkitGetUserMedia) {
    //webkit内核浏览器
    return navigator.webkitGetUserMedia(constrains)
  } else if (navigator.mozGetUserMedia) {
    //Firefox浏览器
    return navigator.mozGetUserMedia(constrains)
  } else if (navigator.getUserMedia) {
    //旧版API
    return navigator.getUserMedia(constrains)
  }
}

const hasUserMedia = () => {
  if (navigator.mediaDevices?.getUserMedia) {
    //最新标准API
    return true
  } else if (navigator.webkitGetUserMedia) {
    //webkit内核浏览器
    return true
  } else if (navigator.mozGetUserMedia) {
    //Firefox浏览器
    return true
  } else if (navigator.getUserMedia) {
    //旧版API
    return true
  }
  return false
}

const cameraErrorMsg = (name) => {
  if (name === 'AbortError') {
    return '操作被终止'
  } else if (name === 'NotAllowedError') {
    return '权限被拒绝'
  } else if (name === 'NotFoundError') {
    return '无法满足操作'
  } else if (name === 'NotReadableError') {
    return '读取失败'
  } else if (name === 'OverconstrainedError') {
    return '设备无法被满足'
  } else if (name === 'SecurityError') {
    return '权限被禁止'
  } else if (name === 'TypeError') {
    return '传值错误'
  } else {
    return '操作失败'
  }
}

// 获取video的xy比率，并提供外部比率进行换算
function getXYRatio(video) {
  // videoHeight为video 真实高度
  // offsetHeight为video css高度
  const {
    videoHeight: vh,
    videoWidth: vw,
    offsetHeight: oh,
    offsetWidth: ow
  } = video

  return {
    YRatio: (height) => {
      return (vh / oh) * height
    },
    XRatio: (width) => {
      return (vw / ow) * width
    }
  }
}


export { getUserMedia, getXYRatio, hasUserMedia, cameraErrorMsg }
