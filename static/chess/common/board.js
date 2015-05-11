function GetBrdParentObject() {
  if (parent) return parent;
  else return this;
}

function Chessboard( PathToCommon) {
  this.PieceColor = {'K':'w', 'Q':'w', 'R':'w', 'B':'w', 'N':'w', 'P':'w',
                     'k':'b', 'q':'b', 'r':'b', 'b':'b', 'n':'b', 'p':'b'}
  this.BoardSize = [14, 18, 24, 32, 40, 48, 56, 68, 80];

  this.filename = GetBrdParentObject().subdir + GetBrdParentObject().filename;
  this.extension = GetBrdParentObject().extension;

// Options
  this.ShowGameList = GetBrdParentObject().ShowGamelist;
  this.SelectedMoveColor = GetBrdParentObject().SelectedMoveColor;
  this.MainBranch = GetBrdParentObject().MoveOnMainBranch;

// Board options
  this.BoardSizeIndex = GetBrdParentObject().BoardSizeIndex;
  this.ShowBoardBorder = GetBrdParentObject().ShowBoardBorder;
  this.BoardBackColor = GetBrdParentObject().BoardBackColor;

  this.BoardFiguresIndex = GetBrdParentObject().BoardFiguresIndex;
  this.BoardFigures = null; // GetBrdParentObject().BoardFigures;
  this.FigList = GetBrdParentObject().FigList;
  this.BoardBackIndex = GetBrdParentObject().BoardBackIndex; // null;
  this.BoardBack = null; // GetBrdParentObject().BoardBack;
  this.BackList = GetBrdParentObject().BackList;
  this.Size = this.GetBoardSize(this.BoardSizeIndex);

  this.InvertBoard = false;
  this.AnimId = -1;        // Id returned by setInterval for game animation
  this.MoveIndex = 0;
  this.NextMove = 0;
  this.BoardEPD = "";
  this.EPDs = new Array();

  this.CommonDir = PathToCommon + "common/images/chess/";
  this.FiguresDir = "";
//  this.SetFiguresDir();
  this.EmptySquare = this.CommonDir + "empty.gif";
  this.SqBackground = new Array();

  var BoardPadding = "";
  if(this.ShowBoardBorder) {
    BoardPadding = " padding: " + this.Size / 2 + "px;";
  }
  Result = '<div id="theBoard" style="position: relative; z-index:5; height: ' +
    (8*this.Size) + 'px; width: ' + (8*this.Size) +
    'px; margin-left:auto; margin-right:auto; white-space:nowrap; border:4px double gray;' +
    BoardPadding + '">';
  Result = Result + this.Border();
  Result = Result + '<div style="position: relative; z-index:5; width: 100%; white-space:nowrap;">';
  var j = 0;
  for(var i = 0; i < 64; i++) {
    Result = Result + //style="float:left;"
        '<img alt="" id="sq' + i + '" ' +
        'src="' + this.EmptySquare + '" width=' + this.Size + ' height=' + this.Size + '>';
    if(((i+1) % 8) === 0) {
      Result = Result + '<\/div>';
      if(i != 63) {
        Result = Result + '<div style="position: relative; z-index:5; width: 100%; white-space:nowrap;">';
      }
    }
  }
  Result = Result + '<\/div>';
//  Result = Result + '<\/div>';
  getObject("chessboard").innerHTML = Result;
  obj = getObject("boardborder"); //document.getElementsByName("boardborder")[0]; 
  if (obj)
    obj.checked = this.ShowBoardBorder;
  this.PopulateBackList();
  this.SetBackground(this.BoardBackIndex);
  this.BoardEPD = "1111111111111111111111111111111111111111111111111111111111111111"; // An empty board
//  document.getElementsByName("backgroundlist")[0].selectedIndex = this.BoardBackIndex;
  this.PopulateFigList();
//  document.getElementsByName("figureslist")[0].selectedIndex = this.BoardFiguresIndex;
  this.PopulateBoardSizeList();
  obj = getObject( "boardsize"); //document.getElementsByName("boardsize")[0];
  if(obj) obj.selectedIndex = this.BoardSizeIndex;
  this.SetNavMethod(this.MainBranch);
  obj = getObject("flipboard"); //document.getElementsByName("flipboard")[0];
  if(obj) obj.checked = this.InvertBoard;
  this.SetFigures(this.BoardFiguresIndex);
  this.SetSGameList(this.ShowGameList);
}

Chessboard.prototype.SetFiguresDir = function() {
  this.FiguresDir = this.CommonDir + "figures/" + this.BoardFigures + "/" + this.Size + "/";
}

Chessboard.prototype.PopulateBoardSizeList = function() {
  var Box = getObject("boardsize"); //document.getElementsByName("boardsize")[0];
  if (!Box) return ;
  Box.options.length = 0;
  for (var i = 0; i < this.BoardSize.length; i++) {
    Box.options[i] = new Option(this.BoardSize[i], "board" + this.BoardSize[i]);
  }
};

Chessboard.prototype.PopulateFigList = function() {
  var Box = getObject("figureslist"); // document.getElementsByName("figureslist")[0];
  if (!Box) return ;
  Box.options.length = 0;
  for (var i = 0; i < this.FigList.length; i=i+2) {
    Box.options[i/2] = new Option(this.FigList[i+1], this.FigList[i]);
  }
};

Chessboard.prototype.PopulateBackList = function() {
  var Box = getObject("backgroundlist"); //document.getElementsByName("backgroundlist")[0];
  if (!Box) return ;
  Box.options.length = 0;
  for (var i = 0; i < this.BackList.length; i=i+2) {
    Box.options[i/2] = new Option(this.BackList[i+1], this.BackList[i]);
  }
};

Chessboard.prototype.Border = function() {
  var BorderVisible = 'visible';
  if(!this.ShowBoardBorder) {
    BorderVisible = 'hidden';
  }
  var fontS = Math.floor(100*this.Size/32);
  var Result = "<div id=\"coordinates\" style=\"font-family: Verdana, sans-serif;font-size:" +
    fontS + "%; text-indent: 1.5%; visibility:" + BorderVisible +
    "; position:absolute; left:0; top:0; background-color:" +
    this.BoardBackColor + "; width: " + (9*this.Size) + "px; height: " +
    (9*this.Size) + "px;\">";
  Result = Result + "<div style=\"height: 5.55555%;\"><\/div>";
  for(var i = 8; i > 0; i--) {
    Result = Result + "<div id=\"rank" + i +
    "\" style=\"height: 8.11111%; width: 100%; text-align: left;border:0;margin:0;padding-top:3%;\">" + i + "<\/div>";
  }
  Result = Result + "<div style=\"width: 100%; height: 5.55555%;\">";
  Result = Result + "<span style=\"float: left; width: 5%;\">&nbsp<\/span>";
  var File = 'a'.charCodeAt(0);
  for(i = 0; i < 8; i++) {
    Result = Result + "<span id=\"file" + i + "\" style=\"float: left; width: 11.11111%;\">" + String.fromCharCode(File++) + "<\/span>";
  }
  Result = Result + "<\/div><\/div>";
//    alert(Result);
  return(Result);
};

Chessboard.prototype.NewGame = function(EPDs, movesDepth, cmoves, cmovestyles) {
  this.nmoves = EPDs.length - 1;
  for(var i = 0; i <= this.nmoves; i++) {
    this.EPDs[i] = this.ExpandEPD(EPDs[i]);
  }
  this.movesDepth = movesDepth;
  this.cmoves = cmoves;
  this.cmovestyles = cmovestyles;
  this.MoveIndex = 0;
  this.NextMove = 0;
  this.UpdateBoard();
};

Chessboard.prototype.UpdateBoard = function() {
  cmove = this.cmoves[this.NextMove];
  cmovestyle = this.cmovestyles[this.NextMove];
  this.SetCurMove( "<span class=\"" + cmovestyle + "\">" + cmove + "<\/span>");
  GetBrdParentObject().gamebody.UpdateMvBackground("m" + this.NextMove, this.SelectedMoveColor);
  this.UpdatePosition(this.EPDs[this.NextMove]);
  this.MoveIndex = this.NextMove;
};

Chessboard.prototype.ExpandEPD = function(EPD) {
  theEPD = EPD.replace(/[2-8]/g,                        // Expand contiguous empty squares
    function strRepeat(count) {                         //   e.g. change '4' to '1111'
      var strOut = "";
      for(var i=0; i < count; i++) {
       strOut += "1";
      }
     return strOut;
    }
  );
  return theEPD.replace(/\//g, "");                     // Leave only pieces and empty squares
}

Chessboard.prototype.SetSquare = function(Square, Piece) {
  if(this.InvertBoard) {
    Square = 63 - Square;
  }
  var sqr = new getObject("sq" + Square);
  if(Piece == '1') {
    s = this.EmptySquare;
    sqr.alt = "";
  } else {
    sqr.alt = Piece;
    s = this.FiguresDir + Piece.toLowerCase() + this.PieceColor[Piece] + this.Size + ".gif";
  }
    sqr.src = s;                                                        // Update the square
}

Chessboard.prototype.SetPosition = function(EPD) {
  for(var i=0; i < 64; i++) {
    c = EPD.charAt(i);
    if(c == this.BoardEPD.charAt(i) && c == '1') {        // Empty square in previous and current position
      continue;                                           // No change from previous position
    }
    this.SetSquare(i, c);
  }
  this.BoardEPD = EPD;                                    // Store the EPD to compare with next position
};

Chessboard.prototype.UpdatePosition = function(EPD) {
  for(var i=0; i < 64; i++) {
    c = EPD.charAt(i);
    if(c == this.BoardEPD.charAt(i)) {
      continue;                                           // No change from previous position
    }
    this.SetSquare(i, c);
  }
  this.BoardEPD = EPD;                                    // Store the EPD to compare with next position
};

Chessboard.prototype.SetPositionAll = function(EPD) {
  for(var i=0; i < 64; i++) {
    c = EPD.charAt(i);
    this.SetSquare(i, c);
  }
  this.BoardEPD = EPD;                                    // Store the EPD to compare with next position
};

Chessboard.prototype.getMoveIndex = function() {
  return this.MoveIndex;
}

Chessboard.prototype.GetNextMainMove = function(Index) {
  for(i = Index+1; i <= this.nmoves; i++) {
    if (this.movesDepth[i] == 0) {
      Index = i;
      break;
    }
  }
  return Index;
}

Chessboard.prototype.GetPrevMainMove = function(Index) {
  for(i = Index-1; i >= 0; i--) {
    if (this.movesDepth[i] == 0) {
      Index = i;
      break;
    }
  }
  return Index;
}

Chessboard.prototype.GoMvStart = function() {
  this.NextMove=0;
  this.UpdateBoard();
}

Chessboard.prototype.GoMvPrev = function(){
  if(this.MoveIndex > 0) {
    if(this.MainBranch) {
      this.NextMove = this.GetPrevMainMove(this.MoveIndex);
    }
    else {
      this.NextMove = this.MoveIndex - 1;
    }
    this.UpdateBoard();
  }
}

Chessboard.prototype.GoMvNext = function() {
  if(this.MoveIndex < this.nmoves) {
    if(this.MainBranch) {
      this.NextMove = this.GetNextMainMove(this.MoveIndex);
    }
    else {
      this.NextMove = this.MoveIndex + 1;
    }
    this.UpdateBoard();
  }
  if(this.AnimId != -1) {
    if(this.MoveIndex >= this.nmoves || 
      (this.MainBranch == 1 && this.GetNextMainMove(this.MoveIndex) == this.MoveIndex)) 
    {
      this.Animate();
    }
  }
}

Chessboard.prototype.GoMvEnd = function() {
  if(this.MainBranch == 1) {
    this.NextMove = this.GetNextMainMove(this.GetPrevMainMove(this.nmoves));
  }
  else {
    this.NextMove = this.nmoves;
  }
  this.UpdateBoard();
}

Chessboard.prototype.GoMv = function(nmove) {
  this.NextMove = nmove;
  this.UpdateBoard();
}

Chessboard.prototype.Animate = function() {
  if(this.AnimId === -1) {
    getObject("Anim").value = "Stop";
    this.AnimId = setInterval("brd.GoMvNext()", 850);
  } else {
    getObject("Anim").value = "Animate";
    clearInterval(this.AnimId);
    this.AnimId = -1;
  }
}

Chessboard.prototype.SetNavMethod = function(val) {
  this.MainBranch = val;
  obj = getObject("movenavmethod"); //document.getElementsByName("movenavmethod")[0];
  if (obj)
    obj.checked = this.MainBranch;
};

Chessboard.prototype.FlipBoard = function(val) {
  this.InvertBoard = val;
  obj = getObject("flipboard"); //document.getElementsByName("flipboard")[0];
  if(obj)
    obj.checked = this.InvertBoard;
  this.SetPositionAll(this.BoardEPD);
  var File = 'a'.charCodeAt(0) - 1;
  var j;
  for(var i = 1; i < 9; i++) {
    if(!this.InvertBoard) {
      j = i;
    } else {
      j = 9 - i;
    }
    getObject("rank"+i).innerHTML = j;
    getObject("file"+(i-1)).innerHTML = String.fromCharCode(File + j);
  }
};

Chessboard.prototype.SetCurMove = function(Str) {
    getObject("curmove").innerHTML = Str;
};

Chessboard.prototype.GetBoardSize = function(Index) {
  return this.BoardSize[Index];
};

SetGame = function (N) {
  GetBrdParentObject().toc.SetGame(N);
};

Chessboard.prototype.SetBoardSize = function(val) {
  this.BoardSizeIndex = val;
  this.Size = this.GetBoardSize(val);
  obj = GetBrdParentObject().document.getElementById('boardgame');
  if (obj)
    obj.cols = (10 + this.Size * 10) + ",*";

  for(var i = 0; i < 64; i++) {
    sqr = "sq"+i;
    if(!getObject(sqr)) {
      alert("no object " + i);
    }
    var obj = document.images[sqr];
    obj.width = this.Size;
    obj.height = this.Size;
    if((i+1) % 8) {
      obj.parentNode.style.height = this.Size + "px";        // Change the height of the enclosing DIV element (Netscape 6.2)
    }
  }
  getObject("theBoard").style.width = this.Size * 8 + "px";
  getObject("theBoard").style.height = this.Size * 8 + "px";
  getObject("coordinates").style.width = this.Size * 9 + "px";
  getObject("coordinates").style.height = this.Size * 9 + "px";
  var fontS = Math.floor(100*this.Size/32);
  getObject("coordinates").style.fontSize = fontS + "%";
  if(getObject("theBoard")) {
    if(this.ShowBoardBorder == 1) {
      getObject("theBoard").style.padding = (this.Size / 2) + "px";
    } else {
      getObject("theBoard").style.padding = "0px";
    }
  }
  obj = getObject("boardsize"); //document.getElementsByName("boardsize")[0];  DJ
  if (obj)
    obj.selectedIndex = this.BoardSizeIndex;
  this.SetFiguresDir();
  this.SetPosition(this.BoardEPD);
};

Chessboard.prototype.SetSGameList = function(val) {
  if (val === 0) {
    this.ShowGameList = 1;
    obj = getObject("showgamelist"); //document.getElementsByName("showgamelist")[0];
    if (obj)
      obj.selectedIndex = 0;
    obj = getObject("gamelist");
    if(obj) obj.innerHTML = this.WriteGameList();
  } else {
    this.ShowGameList = -1;
    obj = getObject( "showgamelist"); //document.getElementsByName("showgamelist")[0];
    if (obj)
      obj.selectedIndex = 1;
    obj = getObject("gamelist");
    if(obj) obj.innerHTML = "";
  }
};

Chessboard.prototype.WriteGameList = function() {
  var Result = "";
  for(i = 0; i < GetBrdParentObject().GameList.length; i ++) {
    Result += '<div class="game-list" onClick="SetGame(' + i + ');">' + GetBrdParentObject().GameList[i] + '<\/div>';
  }
  return Result;
};

Chessboard.prototype.SetFigures = function(val) {
  this.BoardFiguresIndex = val;
  this.BoardFigures = this.FigList[ 2 * this.BoardFiguresIndex];
  obj = getObject("figureslist"); //document.getElementsByName("figureslist")[0];
  if (obj)
    obj.selectedIndex = this.BoardFiguresIndex;
  this.SetFiguresDir();
  this.SetPosition(this.BoardEPD);
};

Chessboard.prototype.SetBackground = function(val) {
  this.BoardBackIndex = val;
  this.BoardBack = this.BackList[ 2 * this.BoardBackIndex];
  this.SqBackground[0] = this.CommonDir + "back/" + this.BoardBack + "/white.gif";
  this.SqBackground[1] = this.CommonDir + "back/" + this.BoardBack + "/black.gif";
  var j = 0;
  var obj = document.images;
  for(var i = 0; i < 64; i++) {
    obj["sq" + i].style.backgroundImage = 'url(' + this.SqBackground[j] + ')';
    if((i+1) % 8) {
      j = 1 - j;
    }
  }
  obj = getObject("backgroundlist"); //document.getElementsByName("backgroundlist")[0];
  if (obj)
    obj.selectedIndex = this.BoardBackIndex;
};

Chessboard.prototype.SetBoardBorder = function(val) {
  if (!val) {
      getObject("theBoard").style.padding = 0;
      getObject("coordinates").style.visibility = 'hidden';
  } else {
    getObject("theBoard").style.padding = (this.Size / 2) + "px";
    getObject("coordinates").style.visibility = 'visible';
  }
  this.ShowBoardBorder = val;
  obj = getObject("boardborder"); //document.getElementsByName("boardborder")[0];
  if(obj)
    obj.checked = this.ShowBoardBorder;
};

function onKeyDown(e) {
  if (!e) {
    for (var f = 0; f < GetBrdParentObject().frames.length; f++) {                // Find the originating frame for the event
      if(GetBrdParentObject().frames[f].event) {
        e = GetBrdParentObject().frames[f].event;
        break;
      }
    }
  }
  if(!e) return ;
  if(e.keyCode)
    {code = e.keyCode;}
  else if (e.which)
    {code = e.which;}
  else
    {alert('no event code')}
  switch (code) {
    case 37:                                           // Left arrow
    case 100:                                          // Left arrow (Numeric keyboard. Num-lock on)
    case 57387: GetBrdParentObject().board.brd.GoMvPrev(); break;    // Left arrow (Opera 7)
    case 39:                                           // Right arrow
    case 102:                                          // Right arrow (Numeric keyboard. Num-lock on)
    case 57388: GetBrdParentObject().board.brd.GoMvNext(); break;    // Right arrow (Opera 7)
    case 36:                                           // Home
    case 103:                                          // Home (Numeric keyboard. Num-lock on)
    case 57381: GetBrdParentObject().board.brd.GoMvStart(); break;   // Home (Opera 7)
    case 35:                                           // End
    case 97:                                           // End (Numeric keyboard. Num-lock on)
    case 57382: GetBrdParentObject().board.brd.GoMvEnd(); break;     // End (Opera 7)
    default: return true;
  }
  return false;
}

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

var brd = null;
var brdowner = null;


if (window) brdowner = window;
else brdowner = this;

brdowner.onload = function () {
  brd = new Chessboard( "../");
  document.onkeydown = onKeyDown;
  self.focus();
};


