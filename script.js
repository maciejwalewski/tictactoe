document.addEventListener('DOMContentLoaded', function(){

var square = document.querySelectorAll('.square');  //array with all squares(0-8)
console.log(square); 

for(i=0; i<square.length; i++){
    square[i].addEventListener('click', function(){
        this.setAttribute('style', 'background-color: red;');
    })
};



});