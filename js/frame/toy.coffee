$ ->
  ###
    toy.js 可扩展的webApp开发库
    @author 史泓
    @version 0.1
  ###
  class Toy
    ###
      toyInit toy库的事件初始化函数
      @param  Array fnarray 事件委托程序对象模型,包含了绑定事件对应的handel
      @example t.toyInit()
    ###
    toyInit: (fnmodal,cssmodal,controls) ->
      _effect = undefined   
      earrays = earray = []
      ename = erange = erange = ecssmodal = '' 
      efn = _effect = self = a = b = c = d = undefined
      reg = /\[.+\]/g
      fnreg = /\w+[^\[\]]/
      _testFn = (p) ->
        return $.fn[p] isnt undefined
      _eleCom = (a,ele) ->
        b = a.split '='
        c = b[0]
        d = b[1]
        if _testFn c
          if d isnt undefined
            t = $.fn[c].call ele,d
        else
          if c isnt 'this' then t = $ c else t = ele
        return t
      _getEle = (cm,ele) ->
        if cm.ele isnt undefined
          ct = cm.ele
        a = ct.split '/'
        if a.length > 1
          for aa in a
            t = _eleCom aa
        else
          t = _eleCom a[0],ele
        if _testFn ct
          t = $.fn[ct].call ele,null 
        else
          t = $ t,ct 
        return t
      _effect = (cssm,self) ->
        for key , cm of cssm
          ele = $ self
          t = _getEle cm,ele
          if cm.toggle isnt undefined
            toggle = cm.toggle
            t.toggleClass toggle
            
          if cm.add isnt undefined
            add = cm.add
            t.addClass add
          if cm.remove isnt undefined
            r = cm.remove
            t.removeClass r
      $('[event]')
      .each ->
        earrays = $(this).attr('event').split(',')
        self = this
        earrays.forEach (ele) -> 
          earray = ele.split('=>')
          a = earray[1].split('|')
          if a[0].indexOf('[') isnt -1
            b = a[0].match(reg)[0]
            c = b.length - 2
            d = a[0].match fnreg
            erange = b.substr 1,c
          else 
            erange = null
          ename = earray[0]
          efn = fnmodal[d[0]]
          if d[0] is 'effect'
            cssm = cssmodal[a[1]]
            $(self).on ename, erange, ->
              that = this
              _effect(cssm,that)
          else        
            ehandel = efn
            $(self).on ename, erange, ->
              ehandel $(this)
      if controls isnt undefined
        $('[eventCtrl]')
            
    validation : (context,speed) ->
      vcount = 0
      vresult = no
      vele = $('[valid]', context)
      verror = $('.error', context)
      for ele in vele
        vreg = new RegExp($(ele).attr('valid'), 'g')
        vdesc = $(ele).attr('validinfo')
        vtext = $(ele).val()
        if vreg.test(vtext) isnt yes 
          verror.text(vdesc)
          dc(verror, no)
          break
        vcount++
      vresult = yes if vcount is vele.length
      vele
      .parent()
      .off()
      .on('focus', 'input', ->
        dc(verror, yes)
      )
      return vresult
  @t = new Toy()