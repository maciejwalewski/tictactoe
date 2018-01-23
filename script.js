document.addEventListener('DOMContentLoaded', function(){

    var square = document.querySelectorAll('.field div');  //array with all squares(0-8)
    var currentPlayer;
    var empty;
    var playerRed;
    var playerBlue;
    var playerRedScore = 0;
    var playerBlueScore = 0;


    playerNameRed();                                                //first run function callers
    playerNameBlue();
    firstRoll();

    function playerNameRed(){                                               //player 1 name prompt
        playerRed = prompt('Please enter Player 1 name:');
        if(playerRed === ''){
            playerRed = 'Red';
        };
        document.querySelector('.players__playerA').innerHTML = playerRed + ' score: ' + playerRedScore;
    };

    function playerNameBlue(){                                              //player 2 name prompt
        playerBlue = prompt('Please enter Player 2 name:');
        if(playerBlue === ''){
            playerBlue = 'Blue';
        };
        document.querySelector('.players__playerB').innerHTML = playerBlue + ' score: ' + playerBlueScore;
    };

    function roundInfo(){                                                   //"who actually plays" info
        if(currentPlayer === 'red'){
            document.querySelector('.roundinfo').innerHTML = playerRed + ' turn!';
            document.querySelector('.roundinfo').style.backgroundColor = '#ff3535';
        } else if (currentPlayer === 'blue') {
            document.querySelector('.roundinfo').innerHTML = playerBlue + ' turn!';
            document.querySelector('.roundinfo').style.backgroundColor = '#5353ff';
        }
    };

    function firstRoll(){                                                   //"who starts" roll
        var random = Math.floor(Math.random() * 10);
        if(random < 5){
            currentPlayer = 'red';
        }else{
            currentPlayer = 'blue';
        };
        roundInfo();
        startGame();
    };

    function startGame(){                                                   //reset of fields
        empty = 9;
        for(i=0; i<9; i++){
            square[i].removeAttribute('class');
        };
        clickListener();     
    };

    function clickListener(){                                                  //each field click listener
        square.forEach(
            function(ev){
                ev.addEventListener('click', clicked);
            }
        )
    };

    function clicked(){                                                         //actual game after click
        this.classList.add(currentPlayer);
        this.removeEventListener('click', clicked);
        if(currentPlayer === 'red'){
            currentPlayer = 'blue'
        }else{
            currentPlayer = 'red'
        };
        empty--;
        winner();
        roundInfo();
        if(empty === 0){
            alert("It is a tie!");
            startGame();
        }
    };

    function winner(){                                                          //all winning fields ('redredred') or ('blueblueblue')
        var row1 = square[0].className + square[1].className + square[2].className;
        var row2 = square[3].className + square[4].className + square[5].className;
        var row3 = square[6].className + square[7].className + square[8].className;

        var column1 = square[0].className + square[3].className + square[6].className;
        var column2 = square[1].className + square[4].className + square[7].className;
        var column3 = square[2].className + square[5].className + square[8].className;

        var diagonal1 = square[0].className + square[4].className + square[8].className;
        var diagonal2 = square[2].className + square[4].className + square[6].className;

        var winFields = [
            row1, row2, row3, column1, column2, column3, diagonal1, diagonal2
        ];

        if(winFields.includes('redredred')){
            alert(playerRed +' wins!');
            currentPlayer = 'blue';             //if red wins, blue starts next round
            startGame();
            playerRedScore++;
            document.querySelector('.players__playerA').innerHTML = playerRed + ' score: ' + playerRedScore;

        }else if(winFields.includes('blueblueblue')){
            alert(playerBlue + ' wins!');
            currentPlayer = 'red';              //if blue wins, red starts next round
            startGame();
            playerBlueScore++;
            document.querySelector('.players__playerB').innerHTML = playerBlue + ' score: ' + playerBlueScore;
        }else{
            return
        };
    };

});
