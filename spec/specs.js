describe('Player', function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });
});

describe('Space', function() {
  it("returns the player's mark", function() {
    var testSpace = new Space(1,2,"X");
    expect(testSpace.xCoordinate).to.equal(1);
    expect(testSpace.yCoordinate).to.equal(2);
    expect(testSpace.savedMark).to.equal("X");
  });

  it("lets a player mark a space", function() {
    var testPlayer = new Player("X");
    var testSpace = new Space(1,2);
    testSpace.markBy(testPlayer);
    expect(testSpace.savedMark).to.equal(testPlayer.mark);
  });
});

describe('Board', function() {
  it("creates 9 spaces when it is initialized", function() {
    var testBoard = new Board();
    expect(testBoard.space[8].xCoordinate).to.eql(3);
    expect(testBoard.space[8].yCoordinate).to.eql(3);
  });
});

describe('Game', function() {
  it("creates a new game board and two players", function() {
    var testPlayer1 = new Player("X");
    var testPlayer2 = new Player("Y");
    var testGame = new Game(testPlayer1, testPlayer2);
    expect(testGame.player1).to.eql(testPlayer1);
    expect(testGame.player2).to.eql(testPlayer2);
    expect(testGame.turn).to.eql(true);
    expect(testGame.gameStatus).to.eql(true);
    expect(testGame.outcome).to.eql("In Progress");
  });

  it("checks the board for any wins", function() {
    var testPlayer1 = new Player("X");
    var testPlayer2 = new Player("Y");
    var testGame = new Game(testPlayer1, testPlayer2);
    testGame.board.space[0].markBy(testPlayer1);
    testGame.board.space[1].markBy(testPlayer1);
    testGame.board.space[2].markBy(testPlayer1);
    expect(testGame.score()).to.equal(testGame.outcome);
  });
});


//  !!!!!!!!!!!! SPECS WILL NOT PASS NOW!!!!!!!!!!!!!!!!!!!!!!!
