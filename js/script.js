var times = 0;
var turn = "x";
var ended = false;

function performLogic(button, tile) {
  let box = turn;
  $(button).hide();
  $(tile).text(turn);
  increseTime();
  vertical();
  horizontal();
  diagonal();
  changePlayer();
}
function changePlayer() {
  if (turn == "x") {
    turn = "o";
  } else if (turn == "o") {
    turn = "x";
  }
}
function increseTime() {
  times = times + 1;
  if (times == 9) {
    ended = true;
    $("#display").html("it's a draw");
  }
}

function checkWin(tile1id, tile2id, tile3id) {
  if (
    $(tile1id).html() == turn &&
    $(tile2id).html() == turn &&
    $(tile3id).html() == turn
  ) {
    ended = true;
    $("#display").html(turn + " won the game");
    console.log(turn);
  } else {
    ended = false;
  }
}
function vertical() {
  checkWin("#tile1", "#tile4", "#tile7");
  checkWin("#tile2", "#tile5", "#tile8");
  checkWin("#tile3", "#tile6", "#tile9");
}
function horizontal() {
  checkWin("#tile1", "#tile2", "#tile3");
  checkWin("#tile4", "#tile5", "#tile6");
  checkWin("#tile7", "#tile8", "#tile9");
}
function diagonal() {
  checkWin("#tile1", "#tile5", "#tile9");
  checkWin("#tile3", "#tile5", "#tile7");
}

$("#button1").click(function() {
  performLogic("#button1", "#tile1");
});

$("#button2").click(function() {
  performLogic("#button2", "#tile2");
});

$("#button3").click(function() {
  performLogic("#button3", "#tile3");
});

$("#button4").click(function() {
  performLogic("#button4", "#tile4");
});

$("#button5").click(function() {
  performLogic("#button5", "#tile5");
});

$("#button6").click(function() {
  performLogic("#button6", "#tile6");
});

$("#button7").click(function() {
  performLogic("#button7", "#tile7");
});

$("#button8").click(function() {
  performLogic("#button8", "#tile8");
});

$("#button9").click(function() {
  performLogic("#button9", "#tile9");
});
