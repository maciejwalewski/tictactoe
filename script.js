document.addEventListener('DOMContentLoaded', function(){

    var square = document.querySelectorAll('.field div');  //array with all squares(0-8)
    var currentPlayer;
    var empty;
    var playerRed;
    var playerBlue;
    var playerRedScore = 0;
    var playerBlueScore = 0;


    playerNameRed();
    playerNameBlue();
    startGame();

    function playerNameRed(){
        playerRed = prompt('Please enter Player 1 name:');
        if(playerRed === ''){
            playerRed = 'Red';
        };
        document.querySelector('.players__playerA').innerHTML = playerRed + ' score: ' + playerRedScore;
    };

    function playerNameBlue(){
        playerBlue = prompt('Please enter Player 2 name:','');
        if(playerBlue === ''){
            playerBlue = 'Blue';
        };
        document.querySelector('.players__playerB').innerHTML = playerBlue + ' score: ' + playerBlueScore;
    };

    function startGame(){
        currentPlayer = 'red';
        empty = 9;
        for(i=0; i<9; i++){
            square[i].removeAttribute('class');
        };
        clickListener();
    };

    function clickListener(){
        square.forEach(
            function(ev){
                ev.addEventListener('click', clicked);
            }
        )
    };

    function clicked(){
        this.classList.add(currentPlayer);
        this.removeEventListener('click', clicked);
        if(currentPlayer === 'red'){
            currentPlayer = 'blue'
        }else{
            currentPlayer = 'red'
        };
        empty--;
        winner();
        if(empty === 0){
            alert("It is a tie!");
            startGame();
        }
        console.log(empty);
    };

    function winner(){
        var row1 = square[0].className + square[1].className + square[2].className;  //winning fields
        var row2 = square[3].className + square[4].className + square[5].className;
        var row3 = square[6].className + square[7].className + square[8].className;

        var column1 = square[0].className + square[3].className + square[6].className;
        var column2 = square[1].className + square[4].className + square[7].className;
        var column3 = square[2].className + square[5].className + square[8].className;

        var diagonal1 = square[0].className + square[4].className + square[8].className;
        var diagonal2 = square[2].className + square[4].className + square[6].className;

        var winFields = [                                                              //full list of winning fields
            row1, row2, row3, column1, column2, column3, diagonal1, diagonal2
        ];

        if(winFields.includes('redredred')){
            alert(playerRed +' wins!');
            startGame();
            playerRedScore++;
            document.querySelector('.players__playerA').innerHTML = playerRed + ' score: ' + playerRedScore;

        }else if(winFields.includes('blueblueblue')){
            alert(playerBlue + ' wins!');
            startGame();
            playerBlueScore++;
            document.querySelector('.players__playerB').innerHTML = playerBlue + ' score: ' + playerBlueScore;
        }else{
            return
        };
    };

});
