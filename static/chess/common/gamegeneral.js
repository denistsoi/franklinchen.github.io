function getObject(obj) {
    if (document.getElementById) {
      if (typeof obj == "string") {
        if(document.getElementById(obj)) {
          return document.getElementById(obj);
        } else {
          return document.getElementsByName(obj)[0];
        }
    } else {
      return obj.style
    }
  }
  if (document.all) {
    if (typeof obj == "string") {
      return document.all(obj)
    } else {
      return obj.style
    }
  }
  if (document.layers) {
    if (typeof obj == "string") {
      return document.layers(obj);
    } else {
      return obj.style;
    }
  }
  return null
};

function findPosX(obj) {
  var curleft = 0;
  if (obj.offsetParent) {
    while (obj.offsetParent) {
      curleft += obj.offsetLeft
      obj = obj.offsetParent;
    }
  } else if (obj.x) {
    curleft += obj.x;
  }
  return curleft;
}

function findPosY(obj)
{
  var curtop = 0;
  if (obj.offsetParent) {       // IE 6; Mozilla 1.4b
    while (obj.offsetParent) {
      curtop += obj.offsetTop
      obj = obj.offsetParent;
    }
  } else if (obj.y) {
    curtop += obj.y;
  }
  return curtop;
}

function scrollGamebody(obj) {
  var moveYPos = findPosY(obj)

  if (window.innerHeight) {        // Mozilla 1.4b; Opera 7.11
    pos = window.pageYOffset;
    ClientHeight = window.innerHeight;
  } else if (document.documentElement && document.documentElement.scrollTop) {        // IE 6
    pos = document.documentElement.scrollTop;
    ClientHeight = document.documentElement.clientHeight;
  } else if (document.body) {        // Mozilla 1.4b (but clientHeight==0); IE 6 (but pos==0)
    pos = document.body.scrollTop;
    ClientHeight = document.documentElement.clientHeight;
  }

  if(pos > moveYPos) {
    window.scrollTo(0, moveYPos);
  } else if(pos + ClientHeight < moveYPos + 2*obj.offsetHeight) {
    window.scrollTo(0, moveYPos - ClientHeight + 2*obj.offsetHeight);
  }
}

function UpdateMvBackground(nmove, moveBgColor) {
  nota = "m" + parent.board.brd.getMoveIndex();
  if (getObject(nota)) getObject(nota).style.backgroundColor="";
  nota = nmove; // "m" + nmove;
  if (getObject(nota)) {
    getObject(nota).style.backgroundColor=moveBgColor;
  } else {
    nota.style.backgroundColor= moveBgColor;
  }
    scrollGamebody(getObject(nota));
}

function GoMv(){
  UpdateMvBackground(this.id, parent.board.brd.SelectedMoveColor);
  parent.board.brd.GoMv(Number(this.id.substr(1)));
}


window.onload = function () {
  for( var i = 0; i < cmoves.length; i++) {
    obj = getObject("m" + i);
    if(obj)
      obj.onclick = GoMv;
  }
  document.onkeydown = parent.board.onKeyDown;
  var i = 0;
  while(parent.board.brd == null && i++ < 10) {
    setTimeout('parent.board.brd.NewGame(FENs, movesDepth, cmoves, cmovestyles)', 500);
  }
  parent.board.brd.NewGame(FENs, movesDepth, cmoves, cmovestyles);
  if(parent.framesloaded) {        // Probably a refresh frame
    self.focus();
  }
}

