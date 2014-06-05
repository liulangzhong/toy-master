(function() {
  $(function() {
    var closeLeftSide, lock, navScaleIn, navScaleOut, secNavToggle;
    navScaleOut = {
      1: {
        ele: 'prev',
        add: 'fontColorblue'
      },
      2: {
        ele: 'next',
        add: 'borderColordanger'
      }
    };
    navScaleIn = {
      1: {
        ele: 'prev',
        remove: 'fontColorblue'
      },
      2: {
        ele: 'next',
        remove: 'borderColordanger'
      }
    };
    secNavToggle = {
      1: {
        ele: 'siblings=.accordion',
        toggle: 'showSecNav'
      },
      2: {
        ele: 'next',
        toggle: 'rotateN90'
      }
    };
    closeLeftSide = {
      1: {
        ele: 'aside.sideNav',
        toggle: 'widthHide'
      },
      2: {
        ele: 'this',
        toggle: 'rotateLeft180'
      },
      3: {
        ele: 'article.main',
        toggle: 'width100'
      },
      4: {
        ele: 'header.title',
        toggle: 'headerUp'
      }
    };
    lock = {};
    return t.cssmodal = {
      'navScaleOut': navScaleOut,
      'navScaleIn': navScaleIn,
      'secNavToggle': secNavToggle,
      'closeLeftSide': closeLeftSide,
      'lock': lock
    };
  });

}).call(this);
