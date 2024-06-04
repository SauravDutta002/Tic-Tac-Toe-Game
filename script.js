let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let NewBtn = document.querySelector("#new-btn");
let Newgame = document.querySelector("#newgame");
let msgBox = document.querySelector(".msgbox");
let msg = document.querySelector("#msg");
let scoreboard = document.querySelector(".scoreboard")
let scoreboardMsg = document.querySelector(".scoreboard-msg")
let chance = document.querySelector(".chance")
let chance2 = document.querySelector(".chance2")


let turnO = true;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

chance.classList.remove("hide")

const newgame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgBox.classList.add("display-message");
    scoreboard.innerText = `Your Score \n Here ! `;
    cntx = 0;
    cnty = 0;
    chance.classList.remove("hide")
    chance2.classList.add("hide")


}

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgBox.classList.add("display-message");
    chance.classList.remove("hide")
    chance2.classList.add("hide")

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            chance.classList.add("hide")
            chance2.classList.remove("hide")
            box.innerText = "O";
            turnO = false;
        } else {
            chance2.classList.add("hide")
            chance.classList.remove("hide")
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        count++;

        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
            prevX === cntx;
            prevY === cnty;

        }

    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgBox.classList.remove("display-message");
    disableBoxes();

};


const disableBoxes = () => {

    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {

    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner} `;
    msgBox.classList.remove("display-message");
    disableBoxes();

}

let cntx = 0;
let cnty = 0;
let prevX = 0;
let prevY = 0;

const showScore = (score) => {

    if (score === 'X') {
        prevX = cntx++;
        console.log(cntx);

    } else {
        prevY = cnty++;
        console.log(cnty);
    }
    scoreboard.innerText = `Your Score \n X = ${cntx} | O = ${cnty}`;
    scoreboardMsg.innerText = `Score X = ${cntx} | O = ${cnty}`;

}

const checkWinner = () => {
    for (let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);

                showScore(pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

NewBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
Newgame.addEventListener("click", newgame);