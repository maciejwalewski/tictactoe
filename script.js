document.addEventListener('DOMContentLoaded', function(){

    var square = document.querySelectorAll('.field div');  //array with all squares(0-8)

    var currentPlayer;
    var empty;

    startGame();


    function startGame(){
        empty = 9;
        for(i=0; i<square.length; i++){
            currentPlayer = 'red';
            square[i].addEventListener('click', function clickedElement(){
                this.classList.add(currentPlayer);
                empty--;
                if(currentPlayer === 'red'){
                    currentPlayer = 'blue';
                } else {
                    currentPlayer = 'red';
                }
                this.removeEventListener('click', clickedElement);
                winner();

                setTimeout(function(){
                    if(empty === 0){
                        alert('It is a tie!');
                    }
                }, 200);
            });
        };
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
            alert('red wins!')
        }else if(winFields.includes('blueblueblue')){
            alert('blue wins!')
        }
    };

});
