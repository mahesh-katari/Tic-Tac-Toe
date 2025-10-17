let boxes=document.querySelectorAll('.box');
let resetBtn=document.getElementById('reset-btn');
let playAgain=document.querySelector('.play-again');
let msg=document.querySelector('#result');
let msgContainer=document.getElementById('result-msg');

let winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let turnO=true;
let count=0;

boxes.forEach(box=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText='O';
            turnO=false;
        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;
        let checking=checkWin();
        count++;
        if(count==9 && checking==undefined){
            gameDraw();
        }
        console.log(count);

    })
});

const gameDraw = () => {
  msg.innerText = `Game was a Drawn.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
    }

}


const showWinMessage=(winner)=>{
    msg.innerText=`Congratulations ${winner} has won the game!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWin=()=>{
    for(let pattern of winningPatterns){
        let  pos1=boxes[pattern[0]].innerText;
        let  pos2=boxes[pattern[1]].innerText;
        let  pos3=boxes[pattern[2]].innerText;
        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1==pos2 && pos2==pos3){
                console.log(`${pos1} has won the game`);
                showWinMessage(pos1);
                return true;
            }
        }
        
    }
}
playAgain.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);
