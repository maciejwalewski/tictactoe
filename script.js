document.addEventListener('DOMContentLoaded', function(){

    var square = document.querySelectorAll('.field div');  //array with all squares(0-8)
    console.log(square); 

    var currentPlayer;
    var empty;

    startGame();


    function startGame(){
        empty = 9;
        for(i=0; i<square.length; i++){
            currentPlayer = 'red';
            square[i].addEventListener('click', function(){
                this.classList.add(currentPlayer);
                empty--;
                if(currentPlayer === 'red'){
                    currentPlayer = 'blue';
                } else {
                    currentPlayer = 'red';
                }

                setTimeout(function(){
                    if(empty === 0){
                        winner();
                    }
                }, 200);
            });
        };
    };

    function winner(){
        var row1 = square[0].className + square[1].className + square[2].className;
        console.log(row1);
        if(row1 === 'redredred'){
            alert('red wins!')
        };
    };

});
