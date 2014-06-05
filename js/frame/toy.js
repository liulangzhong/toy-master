(function() {
  $(function() {
    /*
      toy.js 可扩展的webApp开发库
      @author 史泓
      @version 0.1
    */

    var Toy;
    Toy = (function() {
      function Toy() {}

      /*
        toyInit toy库的事件初始化函数
        @param  Array fnarray 事件委托程序对象模型,包含了绑定事件对应的handel
        @example t.toyInit()
      */


      Toy.prototype.toyInit = function(fnmodal, cssmodal, controls) {
        var a, b, c, d, earray, earrays, ecssmodal, efn, ename, erange, fnreg, reg, self, _effect, _eleCom, _getEle, _testFn;
        _effect = void 0;
        earrays = earray = [];
        ename = erange = erange = ecssmodal = '';
        efn = _effect = self = a = b = c = d = void 0;
        reg = /\[.+\]/g;
        fnreg = /\w+[^\[\]]/;
        _testFn = function(p) {
          return $.fn[p] !== void 0;
        };
        _eleCom = function(a, ele) {
          var t;
          b = a.split('=');
          c = b[0];
          d = b[1];
          if (_testFn(c)) {
            if (d !== void 0) {
              t = $.fn[c].call(ele, d);
            }
          } else {
            if (c !== 'this') {
              t = $(c);
            } else {
              t = ele;
            }
          }
          return t;
        };
        _getEle = function(cm, ele) {
          var aa, ct, t, _i, _len;
          if (cm.ele !== void 0) {
            ct = cm.ele;
          }
          a = ct.split('/');
          if (a.length > 1) {
            for (_i = 0, _len = a.length; _i < _len; _i++) {
              aa = a[_i];
              t = _eleCom(aa);
            }
          } else {
            t = _eleCom(a[0], ele);
          }
          if (_testFn(ct)) {
            t = $.fn[ct].call(ele, null);
          } else {
            t = $(t, ct);
          }
          return t;
        };
        _effect = function(cssm, self) {
          var add, cm, ele, key, r, t, toggle, _results;
          _results = [];
          for (key in cssm) {
            cm = cssm[key];
            ele = $(self);
            t = _getEle(cm, ele);
            if (cm.toggle !== void 0) {
              toggle = cm.toggle;
              t.toggleClass(toggle);
            }
            if (cm.add !== void 0) {
              add = cm.add;
              t.addClass(add);
            }
            if (cm.remove !== void 0) {
              r = cm.remove;
              _results.push(t.removeClass(r));
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        };
        $('[event]').each(function() {
          earrays = $(this).attr('event').split(',');
          self = this;
          return earrays.forEach(function(ele) {
            var cssm, ehandel;
            earray = ele.split('=>');
            a = earray[1].split('|');
            if (a[0].indexOf('[') !== -1) {
              b = a[0].match(reg)[0];
              c = b.length - 2;
              d = a[0].match(fnreg);
              erange = b.substr(1, c);
            } else {
              erange = null;
            }
            ename = earray[0];
            efn = fnmodal[d[0]];
            if (d[0] === 'effect') {
              cssm = cssmodal[a[1]];
              return $(self).on(ename, erange, function() {
                var that;
                that = this;
                return _effect(cssm, that);
              });
            } else {
              ehandel = efn;
              return $(self).on(ename, erange, function() {
                return ehandel($(this));
              });
            }
          });
        });
        if (controls !== void 0) {
          return $('[eventCtrl]');
        }
      };

      Toy.prototype.validation = function(context, speed) {
        var ele, vcount, vdesc, vele, verror, vreg, vresult, vtext, _i, _len;
        vcount = 0;
        vresult = false;
        vele = $('[valid]', context);
        verror = $('.error', context);
        for (_i = 0, _len = vele.length; _i < _len; _i++) {
          ele = vele[_i];
          vreg = new RegExp($(ele).attr('valid'), 'g');
          vdesc = $(ele).attr('validinfo');
          vtext = $(ele).val();
          if (vreg.test(vtext) !== true) {
            verror.text(vdesc);
            dc(verror, false);
            break;
          }
          vcount++;
        }
        if (vcount === vele.length) {
          vresult = true;
        }
        vele.parent().off().on('focus', 'input', function() {
          return dc(verror, true);
        });
        return vresult;
      };

      return Toy;

    })();
    return this.t = new Toy();
  });

}).call(this);
