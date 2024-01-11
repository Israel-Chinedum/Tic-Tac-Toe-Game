let intro = document.querySelector('.intro-container');
let h1 = document.querySelector('.intro-container h1');
let setContainer = document.querySelector('.set-container');
let setLight = document.querySelector('.set-container ul li div');
let setLi = document.querySelector('.set-container li');
let setUl = document.querySelector('.set-container ul');
let setBtn = document.querySelector('#set-btn');
let checkH = document.querySelector('#check-h');
let checkC = document.querySelector('#check-c');
let Return = document.querySelector('#return');
let darkMode = document.querySelector('#dark-mode')
let input = document.querySelectorAll('input');

  checkH.addEventListener('click', light)
  checkC.addEventListener('click', light)
  darkMode.addEventListener('click', light)


function light(){
    if(this == checkC){
        checkC.classList.add('illuminate');
        checkH.classList.remove('illuminate');
    }

    if(this == checkH){
        checkH.classList.add('illuminate');
        checkC.classList.remove('illuminate');
    }

    if(this == darkMode){
        document.querySelector('body').classList.toggle('light-dark');
        darkMode.classList.toggle('illuminate');
        input.forEach(input => input.classList.toggle('btn'))
    }

}

Return.addEventListener('click', ()=>{
    setContainer.style.display = 'none';
    container.style.display = 'block';
})



let nameArray = ['Tic ','Tac ','Toe'];

i = -1


function display(){
    if(i < nameArray.length){
        i++
    }

    if(i == nameArray.length-1){
      clearInterval(set);
    }


    h1.innerHTML += nameArray[i]
    if(i == 0){
        h1.style.color = 'red'
    }else if(i == 1){
        h1.style.color = 'lawngreen'
    }else{
        h1.style.color = 'blue'
    }

}

let set = setInterval(display,1000);

setTimeout(set=>{
   intro.style.rotate = '0deg';
   intro.style.transition = '1s'
},4000)

setTimeout(run=>{
    intro.style.display = 'none';
    document.querySelector('.container').style.display = 'block';
},6000);

setBtn.addEventListener('click', () =>{
    container.style.display = 'none';
    setContainer.style.display = 'block';
})









