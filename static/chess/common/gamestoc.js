function GameFiles() {
  this.filename = parent.subdir + parent.filename;
  this.extension = parent.extension;
  this.CurrentGame = 0;
  this.Box = getObject( "gamepos"); //document.getElementsByName("gamepos")[0];
  this.NGames = parent.GameList.length;
  this.PopulateList();
  this.SetGame(this.CurrentGame);
};

GameFiles.prototype.SetGame = function(GameID) {
  if (!this.Box) {
    return ;
  }
  this.CurrentGame = GameID;
  this.Box.selectedIndex = this.CurrentGame;
  parent.gamebody.location.href = this.Box.options[this.CurrentGame].value;
};

GameFiles.prototype.GoPrevGame = function() {
  if (this.CurrentGame > 0) {
    this.SetGame(this.CurrentGame - 1);
  }
};

GameFiles.prototype.GoNextGame = function() {
  if (this.CurrentGame < this.NGames - 1) {
    this.SetGame(this.CurrentGame + 1);
  }
};

GameFiles.prototype.PopulateList = function() {
  if (!this.Box)
    return ;
  this.Box.options.length = 0;
  for (var i = 0; i < this.NGames; i++) {
     this.Box.options[i] = new Option(parent.GameList[i], this.filename + (i+1) + this.extension);
  }
};

function SetGame(GameID) {
  gameFile.SetGame(GameID);
}

var gameFile = null;

window.onload = function() {
  gameFile = new GameFiles;
  document.onkeydown = parent.board.onKeyDown;
  if (parent.framesloaded) {                        // Probably a refresh frame
    self.focus();
  }
};

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
