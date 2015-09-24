function Player(mark, isTurn) {
  this.mark = mark;
  this.playerScore = 0;
  this.isTurn;
}

function Space(xCoordinate, yCoordinate, savedMark) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.savedMark = savedMark;
}

Space.prototype.markBy = function(player) {
  this.savedMark = player.mark;
}

function Board() {
  this.space = [];
  for(var i = 1; i <= 3; i++) {
    for(var j = 1; j <= 3; j++) {
      this.space.push(new Space(i, j));
    }
  }
}

function Game(player1, player2) {
  this.board = new Board();
  this.player1 = player1;
  this.player2 = player2;
  // this.turn = true;
  this.gameStatus = true;
  this.outcome = "In Progress";
  this.round = 1;
}

Game.prototype.increaseRound = function(){
  this.round += 1;
}

Game.prototype.score = function() {
  if(player === player1){
    // var player = this.player1;
  } else {
    // var player = this.player2;
  }

   if(this.board.space[0].savedMark === player.mark && this.board.space[1].savedMark === player.mark && this.board.space[2].savedMark === player.mark) {
     this.gameStatus = false;
     player.playerScore += 1;
     if (player === player1) {
       player1.isTurn = false;
       player2.isTurn = true;
     } else if (player === player2) {
       player1.isTurn = true;
       player2.isTurn = false;
     }
     return this.outcome = player.mark + " Wins";
   } else if (this.board.space[3].savedMark === player.mark && this.board.space[4].savedMark === player.mark && this.board.space[5].savedMark === player.mark){
     this.gameStatus = false;
     player.playerScore += 1;
     if (player === player1) {
       player1.isTurn = false;
       player2.isTurn = true;
     } else if (player === player2) {
       player1.isTurn = true;
       player2.isTurn = false;
     }
     return this.outcome = player.mark + " Wins";
   } else if (this.board.space[6].savedMark === player.mark && this.board.space[7].savedMark === player.mark && this.board.space[8].savedMark === player.mark){
     this.gameStatus = false;
     player.playerScore += 1;
     if (player === player1) {
       player1.isTurn = false;
       player2.isTurn = true;
     } else if (player === player2) {
       player1.isTurn = true;
       player2.isTurn = false;
     }
     return this.outcome = player.mark + " Wins";
   } else if (this.board.space[0].savedMark === player.mark && this.board.space[3].savedMark === player.mark && this.board.space[6].savedMark === player.mark){
     this.gameStatus = false;
     player.playerScore += 1;
     if (player === player1) {
       player1.isTurn = false;
       player2.isTurn = true;
     } else if (player === player2) {
       player1.isTurn = true;
       player2.isTurn = false;
     }
     return this.outcome = player.mark + " Wins";
   } else if (this.board.space[1].savedMark === player.mark && this.board.space[4].savedMark === player.mark && this.board.space[7].savedMark === player.mark){
     this.gameStatus = false;
     player.playerScore += 1;
     if (player === player1) {
       player1.isTurn = false;
       player2.isTurn = true;
     } else if (player === player2) {
       player1.isTurn = true;
       player2.isTurn = false;
     }
     return this.outcome = player.mark + " Wins";
   } else if (this.board.space[2].savedMark === player.mark && this.board.space[5].savedMark === player.mark && this.board.space[8].savedMark === player.mark){
     this.gameStatus = false;
     player.playerScore += 1;
     if (player === player1) {
       player1.isTurn = false;
       player2.isTurn = true;
     } else if (player === player2) {
       player1.isTurn = true;
       player2.isTurn = false;
     }
     return this.outcome = player.mark + " Wins";
   } else if (this.board.space[0].savedMark === player.mark && this.board.space[4].savedMark === player.mark && this.board.space[8].savedMark === player.mark){
     this.gameStatus = false;
     player.playerScore += 1;
     if (player === player1) {
       player1.isTurn = false;
       player2.isTurn = true;
     } else if (player === player2) {
       player1.isTurn = true;
       player2.isTurn = false;
     }
     return this.outcome = player.mark + " Wins";
   } else if (this.board.space[2].savedMark === player.mark && this.board.space[4].savedMark === player.mark && this.board.space[6].savedMark === player.mark){
     this.gameStatus = false;
     player.playerScore += 1;
     if (player === player1) {
       player1.isTurn = false;
       player2.isTurn = true;
     } else if (player === player2) {
       player1.isTurn = true;
       player2.isTurn = false;
     }
     return this.outcome = player.mark + " Wins";
   } else {
     this.checkDraw();
     if(this.gameStatus === false) {
       return "Draw";
     }
     return "Still going"
   }
}

Board.prototype.clearFields = function() {
  for(var i = 0; i <= 8; i++) {
    this.space[i].savedMark = undefined;
    $("p#" + i).empty();
  }
}

Game.prototype.checkDraw = function() {
  for(var i = 0; i <= 8; i++) {
    if(this.board.space[i].savedMark === undefined) {
      return;
    }
  }
  this.gameStatus = false;
}

Game.prototype.switchPlayer = function() {
  if (player === player1) {
    player = player2;
    player1.isTurn = false;
    player2.isTurn = true;
  } else if (player === player2) {
    player = player1;
    player2.isTurn = false;
    player1.isTurn = true;
  }
}

$(function() {
  $("#gameBoard").hide();
  player1 = new Player("X");
  player2 = new Player("O");
  game = new Game(player1, player2);
  player = player1;

  $("span#play").on('click', function() {
    $("#play").fadeOut("fast")
    $("#gameBoard").delay(250).fadeIn("slow");
    $("p#player1Score").empty().append("Player 1: " + player1.playerScore);
    $("p#player2Score").empty().append("Player 2: " + player2.playerScore);

    $("p#player-turn").empty().text("Player 1. It is your turn.");

  });

  $("#1_1").on('click', function() {


    if (game.board.space[0].savedMark !== undefined) {
      alert("OCCUPADO BRO!");
    } else {
      $("p#0").empty().append(player.mark);
      game.board.space[0].savedMark = player.mark;
      var outcome = game.score();
      if(game.gameStatus === false) {
        if(confirm(outcome + "\n" + "Would you like to start a new game?")){
          game.board.clearFields();
          game.gameStatus = true;
          game.increaseRound();
          if(player === player1) {
            $("p#player1Score").empty().append("Player 1: " + player.playerScore);
          } else if (player === player2) {
            $("p#player2Score").empty().append("Player 2: " + player.playerScore);
          }
        }
      }
      game.switchPlayer();
      if (player1.isTurn === true) {
        $("p#player-turn").text("Player 1. It is your turn.");
      } else if (player2.isTurn === true) {
        $("p#player-turn").text("Player 2. It is your turn.");

      }
    }
  });

  $("#1_2").on('click', function() {
    if (game.board.space[1].savedMark !== undefined) {
      alert("OCCUPADO BRO!");
    } else {
      $("p#1").empty().append(player.mark);
      game.board.space[1].savedMark = player.mark;
      var outcome = game.score();
      if(game.gameStatus === false) {
        if(confirm(outcome + "\n" + "Would you like to start a new game?")){
          game.board.clearFields();
          game.gameStatus = true;
          if(player === player1) {
            $("p#player1Score").empty().append("Player 1: " + player.playerScore);
          } else if (player === player2) {
            $("p#player2Score").empty().append("Player 2: " + player.playerScore);
          }
        }
      }
      game.switchPlayer();
      if (player1.isTurn === true) {
        $("p#player-turn").text("Player 1. It is your turn.");
      } else if (player2.isTurn === true) {
        $("p#player-turn").text("Player 2. It is your turn.");

      }
    }
  });

  $("#1_3").on('click', function() {
    if (game.board.space[2].savedMark !== undefined) {
      alert("OCCUPADO BRO!");
    } else {
      $("p#2").empty().append(player.mark);
      game.board.space[2].savedMark = player.mark;
      var outcome = game.score();
      if(game.gameStatus === false) {
        if(confirm(outcome + "\n" + "Would you like to start a new game?")){
          game.board.clearFields();
          game.gameStatus = true;
          if(player === player1) {
            $("p#player1Score").empty().append("Player 1: " + player.playerScore);
          } else if (player === player2) {
            $("p#player2Score").empty().append("Player 2: " + player.playerScore);
          }
        }
      }
      game.switchPlayer();
      if (player1.isTurn === true) {
        $("p#player-turn").text("Player 1. It is your turn.");
      } else if (player2.isTurn === true) {
        $("p#player-turn").text("Player 2. It is your turn.");

      }
    }
  });

  $("#2_1").on('click', function() {
    if (game.board.space[3].savedMark !== undefined) {
      alert("OCCUPADO BRO!");
    } else {
      $("p#3").empty().append(player.mark);
      game.board.space[3].savedMark = player.mark;
      var outcome = game.score();
      if(game.gameStatus === false) {
        if(confirm(outcome + "\n" + "Would you like to start a new game?")){
          game.board.clearFields();
          game.gameStatus = true;
          if(player === player1) {
            $("p#player1Score").empty().append("Player 1: " + player.playerScore);
          } else if (player === player2) {
            $("p#player2Score").empty().append("Player 2: " + player.playerScore);
          }
        }
      }
      game.switchPlayer();
      if (player1.isTurn === true) {
        $("p#player-turn").text("Player 1. It is your turn.");
      } else if (player2.isTurn === true) {
        $("p#player-turn").text("Player 2. It is your turn.");

      }
    }
  });

  $("#2_2").on('click', function() {
    if (game.board.space[4].savedMark !== undefined) {
      alert("OCCUPADO BRO!");
    } else {
      $("p#4").empty().append(player.mark);
      game.board.space[4].savedMark = player.mark;
      var outcome = game.score();
      if(game.gameStatus === false) {
        if(confirm(outcome + "\n" + "Would you like to start a new game?")){
          game.board.clearFields();
          game.gameStatus = true;
          if(player === player1) {
            $("p#player1Score").empty().append("Player 1: " + player.playerScore);
          } else if (player === player2) {
            $("p#player2Score").empty().append("Player 2: " + player.playerScore);
          }
        }
      }
      game.switchPlayer();
      if (player1.isTurn === true) {
        $("p#player-turn").text("Player 1. It is your turn.");
      } else if (player2.isTurn === true) {
        $("p#player-turn").text("Player 2. It is your turn.");

      }
    }
  });

  $("#2_3").on('click', function() {
    if (game.board.space[5].savedMark !== undefined) {
      alert("OCCUPADO BRO!");
    } else {
      $("p#5").empty().append(player.mark);
      game.board.space[5].savedMark = player.mark;
      var outcome = game.score();
      if(game.gameStatus === false) {
        if(confirm(outcome + "\n" + "Would you like to start a new game?")){
          game.board.clearFields();
          game.gameStatus = true;
          if(player === player1) {
            $("p#player1Score").empty().append("Player 1: " + player.playerScore);
          } else if (player === player2) {
            $("p#player2Score").empty().append("Player 2: " + player.playerScore);
          }
        }
      }
      game.switchPlayer();
      if (player1.isTurn === true) {
        $("p#player-turn").text("Player 1. It is your turn.");
      } else if (player2.isTurn === true) {
        $("p#player-turn").text("Player 2. It is your turn.");

      }
    }
  });

  $("#3_1").on('click', function() {
    if (game.board.space[6].savedMark !== undefined) {
      alert("OCCUPADO BRO!");
    } else {
      $("p#6").empty().append(player.mark);
      game.board.space[6].savedMark = player.mark;
      var outcome = game.score();
      if(game.gameStatus === false) {
        if(confirm(outcome + "\n" + "Would you like to start a new game?")){
          game.board.clearFields();
          game.gameStatus = true;
          if(player === player1) {
            $("p#player1Score").empty().append("Player 1: " + player.playerScore);
          } else if (player === player2) {
            $("p#player2Score").empty().append("Player 2: " + player.playerScore);
          }
        }
      }
      game.switchPlayer();
      if (player1.isTurn === true) {
        $("p#player-turn").text("Player 1. It is your turn.");
      } else if (player2.isTurn === true) {
        $("p#player-turn").text("Player 2. It is your turn.");

      }
    }
  });
  $("#3_2").on('click', function() {
    if (game.board.space[7].savedMark !== undefined) {
      alert("OCCUPADO BRO!");
    } else {
      $("p#7").empty().append(player.mark);
      game.board.space[7].savedMark = player.mark;
      var outcome = game.score();
      if(game.gameStatus === false) {
        if(confirm(outcome + "\n" + "Would you like to start a new game?")){
          game.board.clearFields();
          game.gameStatus = true;
          if(player === player1) {
            $("p#player1Score").empty().append("Player 1: " + player.playerScore);
          } else if (player === player2) {
            $("p#player2Score").empty().append("Player 2: " + player.playerScore);
          }
        }
      }
      game.switchPlayer();
      if (player1.isTurn === true) {
        $("p#player-turn").text("Player 1. It is your turn.");
      } else if (player2.isTurn === true) {
        $("p#player-turn").text("Player 2. It is your turn.");

      }
    }
  });

  $("#3_3").on('click', function() {
    if (game.board.space[8].savedMark !== undefined) {
      alert("OCCUPADO BRO!");
    } else {
      $("p#8").empty().append(player.mark);
      game.board.space[8].savedMark = player.mark;
      var outcome = game.score();
      if(game.gameStatus === false) {
        if(confirm(outcome + "\n" + "Would you like to start a new game?")){
          game.board.clearFields();
          game.gameStatus = true;
          if(player === player1) {
            $("p#player1Score").empty().append("Player 1: " + player.playerScore);
          } else if (player === player2) {
            $("p#player2Score").empty().append("Player 2: " + player.playerScore);
          }
        }
      }
      game.switchPlayer();
      if (player1.isTurn === true) {
        $("p#player-turn").text("Player 1. It is your turn.");
      } else if (player2.isTurn === true) {
        $("p#player-turn").text("Player 2. It is your turn.");

      }
    }
  });

});
