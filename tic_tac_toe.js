//GRABBING THE HTML ELEMENTS
let container = document.querySelector('.container');
let table = document.querySelector('table');
let boxes = document.querySelectorAll('.box');
let firstRow = document.querySelector('.first-row');
let secondRow = document.querySelector('.second-row');
let thirdRow = document.querySelector('.third-row');
let restart = document.querySelector('#restart');
let playAgain = document.querySelector('#play-again')


//ARRAY OF BOXES
let boxArray = 
[firstRow.children[0], firstRow.children[1], firstRow.children[2],
secondRow.children[0], secondRow.children[1], secondRow.children[2],
thirdRow.children[0], thirdRow.children[1], thirdRow.children[2],];


//CONTAINERS
let player = 'o';


//LOOPING THROUGH THE BOXES
boxes.forEach(box =>{
    box.addEventListener('click', ()=>{
        if(box.innerHTML == ''){
            if(player == 'o'){
                player = 'x'
            }else{
                player = 'o'
            }
            if(document.querySelector('.container h1').style.display != 'block'){
            box.innerHTML = player;
            }
        }

            splice();
            checkWinner();
            if(checkC.classList.contains('illuminate')){
                if(document.querySelector('.container h1').style.display != 'block'){
                    computer();
                }
            }
        
       
       
        console.log(boxArray);
        
    })
})


function splice(){
    for(let i = 0; i < boxArray.length; i++){
        if(boxArray[i].innerHTML != ''){
            boxArray.splice(i,1);
        }

        
    }
}

function computer(){
 setTimeout(set =>{

    if(document.querySelector('.container h1').style.display == 'block'){
        clearTimeout(set);
    }

    let x = Math.floor(Math.random() * boxArray.length);

    if(player == 'o'){
        player = 'x';
    }else{
        player = 'o'
    }

    boxArray[x].innerHTML = player;
    console.log(boxArray[x])
    console.log(x)

    splice();
    checkWinner();
    console.log(boxArray)

},1000)
    
}

function checkWinner(){
    if((firstRow.children[0].innerHTML == 'x' && firstRow.children[1].innerHTML == 'x' && firstRow.children[2].innerHTML == 'x') || (secondRow.children[0].innerHTML == 'x' && secondRow.children[1].innerHTML == 'x' && secondRow.children[2].innerHTML == 'x') || (thirdRow.children[0].innerHTML == 'x' && thirdRow.children[1].innerHTML == 'x' && thirdRow.children[2].innerHTML == 'x') || (firstRow.children[0].innerHTML == 'x' && secondRow.children[0].innerHTML == 'x' && thirdRow.children[0].innerHTML == 'x') || (firstRow.children[1].innerHTML == 'x' && secondRow.children[1].innerHTML == 'x' && thirdRow.children[1].innerHTML == 'x') || (firstRow.children[2].innerHTML == 'x' && secondRow.children[2].innerHTML == 'x' && thirdRow.children[2].innerHTML == 'x') || (firstRow.children[0].innerHTML == 'x' && secondRow.children[1].innerHTML == 'x' && thirdRow.children[2].innerHTML == 'x') || (firstRow.children[2].innerHTML == 'x' && secondRow.children[1].innerHTML == 'x' && thirdRow.children[0].innerHTML == 'x')){
        document.querySelector('.container h1').innerHTML = 'X Win\'s!';
        document.querySelector('.container h1').style.display = 'block';
        restart.style.display = 'none';
        playAgain.style.display = 'block';

    }else if((firstRow.children[0].innerHTML == 'o' && firstRow.children[1].innerHTML == 'o' && firstRow.children[2].innerHTML == 'o') || (secondRow.children[0].innerHTML == 'o' && secondRow.children[1].innerHTML == 'o' && secondRow.children[2].innerHTML == 'o') || (thirdRow.children[0].innerHTML == 'o' && thirdRow.children[1].innerHTML == 'o' && thirdRow.children[2].innerHTML == 'o') || (firstRow.children[0].innerHTML == 'o' && secondRow.children[0].innerHTML == 'o' && thirdRow.children[0].innerHTML == 'o') || (firstRow.children[1].innerHTML == 'o' && secondRow.children[1].innerHTML == 'o' && thirdRow.children[1].innerHTML == 'o') || (firstRow.children[2].innerHTML == 'o' && secondRow.children[2].innerHTML == 'o' && thirdRow.children[2].innerHTML == 'o') || (firstRow.children[0].innerHTML == 'o' && secondRow.children[1].innerHTML == 'o' && thirdRow.children[2].innerHTML == 'o') || (firstRow.children[2].innerHTML == 'o' && secondRow.children[1].innerHTML == 'o' && thirdRow.children[0].innerHTML == 'o')){
        document.querySelector('.container h1').innerHTML = 'O Win\'s!';
        document.querySelector('.container h1').style.display = 'block';
        restart.style.display = 'none';
        playAgain.style.display = 'block';
    }

}
    

function reload(){
    
    if(this == playAgain){
     document.querySelector('.container h1').style.display = 'none';
      playAgain.style.display = 'none';
      restart.style.display = 'block';
    }

    boxes.forEach(box =>{

        if(box.innerHTML != ''){
            boxArray.push(box);
        }

        box.innerHTML = '';
    })
}

restart.addEventListener('click', reload);
playAgain.addEventListener('click', reload);









