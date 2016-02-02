var squares = [], 
        SIZE = 3,
        EMPTY = "&nbsp;",
        score,
        moves,
        turn = "X",
        wins = [7, 56, 448, 73, 146, 292, 273, 84],
        xWins = 0,
        oWins = 0;
       
var newGame = function () {
        turn = "X";
        score = {"X": 0, "O": 0};
        moves = 0;
        squares.forEach(function (square) {square.html(EMPTY);});
        
    };
    
var win = function (score) {
        for (var i = 0; i < wins.length; i += 1) {
            if ((wins[i] & score) === wins[i]) {
                return true;
            }
        }
        return false;
    };

var set = function () {
        if ($(this).html() !== EMPTY) {
            return;
        }
        $(this).html(turn);
        console.log($(this));
        moves += 1;
        score[turn] += $(this)[0].indicator;
        console.log(score[turn]);
        if (win(score[turn])) {
            document.getElementById("score").innerHTML = turn + " won.  Clear board.";
            if (turn === "X") {
                xWins++;
            } else {
                oWins++;
            }
        } else if (moves === SIZE * SIZE) {
            document.getElementById("score").innerHTML = "Cats. Clear board.";
        } else {
            turn = turn === "X" ? "O" : "X";
        }
    };
    
var play = function () {
        var board = $("<table border=1 cellspacing=0 align=center>"), indicator = 1;
        for (var i = 0; i < SIZE; i += 1) {
            var row = $("<tr>");
            board.append(row);
            for (var j = 0; j < SIZE; j += 1) {
                var cell = $("<td height=125 width=125 align=center valign=center style='font-size: 50px; border-width: 3px'></td>");
                cell[0].indicator = indicator;
                cell.click(set);
                row.append(cell);
                squares.push(cell);
                indicator += indicator;
            }
        }

        $(document.getElementById("tictactoe") || document.body).append(board);
        newGame();
    };

play();