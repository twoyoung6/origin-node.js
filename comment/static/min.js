!(function() {
  'use strict'
  function e() {
    !(function(e, t) {
      var n = e.documentElement,
        i = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        a = navigator.userAgent.match(/android/),
        d = i ? Math.min(t.devicePixelRatio, 3) : 1,
        d = window.top === window.self ? d : 1,
        o = 'orientationchange' in window ? 'orientationchange' : 'resize'
      n.dataset.dpr = d
      var s = function() {
        var e = n.clientWidth
        e / d > 750 && (e = 750 * d),
          (n.dataset.width = e),
          (n.dataset.percent = 100 * (e / 750)),
          (n.style.fontSize = 100 * (e / 750) + 'px')
      }
      s(),
        e.documentElement.classList.add('mobile'),
        i && e.documentElement.classList.add('iosx' + t.devicePixelRatio),
        a && e.documentElement.classList.add('android'),
        e.addEventListener && t.addEventListener(o, s, !1)
    })(document, window)
  }
  ;/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && e()
}) ()
