var count = 0;

var player1Winnings = 0;
var player2Winnings = 0;
var matchDraws = 0;

function checkWinner() {
    for (var id = 1; id <= 3; id++) {

        if ((document.getElementById(id).innerHTML == document.getElementById(id + 3).innerHTML) &&
            (document.getElementById(id).innerHTML == document.getElementById(id + 6).innerHTML) &&
            (document.getElementById(id).innerHTML == "X"))
            return 1;

        else if ((document.getElementById(id).innerHTML == document.getElementById(id + 3).innerHTML) &&
            (document.getElementById(id).innerHTML == document.getElementById(id + 6).innerHTML) &&
            (document.getElementById(id).innerHTML == "O"))
            return 2;

        var id_ = 3 * (id - 1);

        if ((document.getElementById(id_ + 1).innerHTML == document.getElementById(id_ + 2).innerHTML) &&
            (document.getElementById(id_ + 3).innerHTML == document.getElementById(id_ + 2).innerHTML) &&
            (document.getElementById(id_ + 1).innerHTML == "X"))
            return 1;

        else if ((document.getElementById(id_ + 1).innerHTML == document.getElementById(id_ + 2).innerHTML) &&
            (document.getElementById(id_ + 3).innerHTML == document.getElementById(id_ + 2).innerHTML) &&
            (document.getElementById(id_ + 1).innerHTML == "O"))
            return 2;
    }

    if ((document.getElementById(1).innerHTML == document.getElementById(5).innerHTML) &&
        (document.getElementById(5).innerHTML == document.getElementById(9).innerHTML) &&
        (document.getElementById(1).innerHTML == "X"))
        return 1;

    else if ((document.getElementById(1).innerHTML == document.getElementById(5).innerHTML) &&
        (document.getElementById(5).innerHTML == document.getElementById(9).innerHTML) &&
        (document.getElementById(1).innerHTML == "O"))
        return 2;


    if ((document.getElementById(3).innerHTML == document.getElementById(5).innerHTML) &&
        (document.getElementById(5).innerHTML == document.getElementById(7).innerHTML) &&
        (document.getElementById(3).innerHTML == "X"))
        return 1;

    else if ((document.getElementById(3).innerHTML == document.getElementById(5).innerHTML) &&
        (document.getElementById(5).innerHTML == document.getElementById(7).innerHTML) &&
        (document.getElementById(3).innerHTML == "O"))
        return 2;


    return 0;
}


function checkDraw() {
    let count = 0;
    for (var id = 1; id <= 9; id++)
        if (document.getElementById(id).innerHTML == "X" || document.getElementById(id).innerHTML == "O")
            count++;
    if (count == 9) return -1;
    else return 0;
}

function checkGameStatus() {
    var ret = checkWinner();
    if (ret) return ret;
    ret = checkDraw();
    return ret;
}

function reflectChange() {
    document.getElementById("showPlayer1Winning").innerHTML = player1Winnings;
    document.getElementById("drawMatchesCount").innerHTML = matchDraws;
    document.getElementById("showPlayer2Winning").innerHTML = player2Winnings;
}

function resetScore() {
    player1Winnings = 0;
    player2Winnings = 0;
    matchDraws = 0;
    reflectChange();
}

function clearScreen() {
    for (var id = 1; id <= 9; id++)
        document.getElementById(id).innerHTML = "";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function myFunction(itemId) {
    console.log(itemId);
    if (!(document.getElementById(itemId).innerHTML == "X" || document.getElementById(itemId).innerHTML == "O")) {
        if (count == 0)
            document.getElementById(itemId).innerHTML = "X";
        else
            document.getElementById(itemId).innerHTML = "O";

        count++;
        count %= 2;
    }
    var check = checkGameStatus();

    if (check == -1) {
        count = 0;
        setTimeout(function() { alert("Match Drawn"), clearScreen() }, 500);
        matchDraws++;
    } else if (check == 1) {
        count = 0;
        setTimeout(function() { alert("Player 1 Won"), clearScreen() }, 500);
        player1Winnings++;
    } else if (check == 2) {
        count = 0;
        setTimeout(function() { alert("Player 2 Won"), clearScreen() }, 500);
        player2Winnings++;
    }
    reflectChange();
}