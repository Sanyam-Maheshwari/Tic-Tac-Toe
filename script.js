let playerName = document.querySelector("[whose-chance]");
let button = document.querySelector(".btn");
const boxes = document.querySelectorAll(".area");
const p=document.querySelector("[para]");

let chanceof = "X";
let gamegrid;
let winningPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function init() {
    chanceof = "X"
    gamegrid = ["", "", "", "", "", "", "", "", "",];
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        boxes[index].classList.remove("win");


    });
    p.innerHTML=`Current Player-${chanceof}`;
    // let playerName = document.querySelector("[whose-chance]");

    // playerName.innerText = chanceof;
    button.classList.remove("active");

    
}

init();

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log(index);
        handleClick(index);
    })
})

function handleClick(index) {
    console.log(index);
    if (gamegrid[index] === "") {
        gamegrid[index] = chanceof;
        boxes[index].innerText = chanceof;
        swapPlayer();
        boxes[index].style.pointerEvents="none";
        gameOver();
    }
}
button.addEventListener("click",init);
function swapPlayer()
{
    // let playerName = document.querySelector("[whose-chance]");

    chanceof=(chanceof==="X"?"O":"X");
    // p.innerText = chanceof;
    p.innerHTML=`Current Player-${chanceof}`;
    // playerName.innerText=chanceof
}

function gameOver()
{
    let winner="";
    winningPos.forEach((pos)=>{
        if(gamegrid[pos[0]]===gamegrid[pos[1]] && gamegrid[pos[1]] ===gamegrid[pos[2]] && gamegrid[pos[1]]==="X")
        {
            boxes[pos[0]].classList.add("win");
            boxes[pos[1]].classList.add("win");
            boxes[pos[2]].classList.add("win");
            winner="X";
            p.innerText=`${winner} wins`;
            button.classList.add("active");

            // return winner;
        }
        else if(gamegrid[pos[0]]===gamegrid[pos[1]] && gamegrid[pos[1]] ===gamegrid[pos[2]] && gamegrid[pos[1]]==="O")
        {
            
            boxes[pos[0]].classList.add("win");
            boxes[pos[1]].classList.add("win");
            boxes[pos[2]].classList.add("win");
            winner="O";
            p.innerText=`${winner} wins`;
            
            button.classList.add("active");
            // return winner;
        }
        if(winner!="")
        {
            boxes.forEach((box)=>{
                box.style.pointerEvents="none";
            })
            return;
        }
        let unfilled=0;
        boxes.forEach((box)=>{
            if(box.innerText==="")
                unfilled++;
        })
        if(unfilled===0){
        p.innerText=`Its a tie!!!`;
        button.classList.add("active");
        }
    })
}