let gameSeq=[];
let userSeq=[];
let highestScore=0;
let h3=document.querySelector("h3");
h3.innerText=`Highest Score: ${highestScore}`;
let btns=["red","yellow","green","purple"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;
    levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },300);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level - ${level}`;
    let randIndex=Math.floor(Math.random()*4);
    let randColor=btns[randIndex];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(index){
     if(userSeq[index]===gameSeq[index]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000);
        }
     } else{
        if(level>highestScore){
            highestScore=level;
            h3.innerText=`Highest Score: ${highestScore}`;
        }
        h2.innerText=`Game Over! Your score is ${level}. Press  any key to start the game again.`;
        reset();
     }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}