//selecting all the boxes
//declaring variables

const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time');
const score = document.querySelector('#score');


let result=0;

var timerId =null;
var hit;


let currentTime = 60;

//function to remove and add the mole in the squares
function randomSquare(){
    squares.forEach(square=>{
        square.classList.remove('mole')
    })
   

    let randomSquare= squares[Math.floor(Math.random()*9)];  //return value between 1-8
  //  console.log(randomSquare);
   
  randomSquare.classList.add('mole')

   hit=randomSquare.id
//console.log(hit);
}

//randomSquare() - make setInterval


//randomly changes the mole, for setTimeinterval of 0.5s
function moveMole(){
   
    timerId = setInterval(randomSquare,500)
}

moveMole();

//score card:
squares.forEach(square=>{
    square.addEventListener('mousedown', ()=>{
        if(square.id== hit){
            result++;
            console.log(result);
            score.textContent=result;
            hit=null
        }
    })
})


//function to stop the time

function countDown(){
    currentTime--;
    timeLeft.textContent=currentTime;

    if(currentTime==0){
        clearInterval(countDownTimer);
        clearInterval(timerId)
        alert('Game Over!! Final Score is ' + result)
    }
}

let countDownTimer = setInterval(countDown, 1000)