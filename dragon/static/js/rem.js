(
  function (doc, win) {
    /** 获取像素比 */
    var pixelRatio = 1 / window.devicePixelRatio
    /** 通过js动态设置视口(viewport) */
    document.write('<meta name="viewport" content="width=device-width,initial-scale=' + pixelRatio + ',minimum-scale=' + pixelRatio + ',maximum-scale=' + pixelRatio + '" />')
    /** 条件：尺寸越大，则字体大小越大。尺寸越小，则字体大小越小。
    获取html节点 */
    var html = document.getElementsByTagName('html')[0]
    // 获取屏幕宽度
    var pageWidth = html.getBoundingClientRect().width
    // 屏幕宽度 / 固定数值 = 基准值
    html.style.fontSize = pageWidth / 16 + 'px'
  }
)(document, window)