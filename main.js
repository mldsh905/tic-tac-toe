function play() {
    const cell = document.querySelectorAll(".cell");
    let XO = "X";
    cell.forEach((item) => {
        item.addEventListener("click", () => {
            if (XO === "X") {
                XO = "O"
            } else if(XO === "O") {
                XO = "X"
            }
            item.textContent = XO;
            checkWin();
            checkTie();
        }, {once: true})
    })
}

function checkWin() {
    const cell = document.querySelectorAll(".cell");
    const winner = document.querySelector(".winner");
    const winnerName = document.querySelector(".winnerName");
    const array = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    array.forEach((item)=>{
        if ((cell[item[0]].textContent === cell[item[1]].textContent &&
            cell[item[1]].textContent===cell[item[2]].textContent)&&
            cell[item[0]].textContent!=="")
        {winnerName.textContent = `${cell[item[0]].textContent} is winner`;
            winner.style.display = "grid";
            play()
        }
    })
}
function checkTie() {
    let check = true;
    const winner = document.querySelector(".winner");
    const cell = document.querySelectorAll(".cell");
    const winnerName = document.querySelector(".winnerName");
    cell.forEach(item=>{
        if (item.textContent === "") {
            check = false;
        }
    })
    if (check === true){
        winnerName.textContent = `tie`;
        winner.style.display = "grid";
        play()
    }
}
function restart() {
    const winner = document.querySelector(".winner")
    const restart = document.querySelector(".restart")
    restart.addEventListener("click",()=>{
        const cell = document.querySelectorAll(".cell");
        winner.style.display = "none";
        cell.forEach(item=>{
            item.textContent = ""
        })
    })
}
play();
restart();
