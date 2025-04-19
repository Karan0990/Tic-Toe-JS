let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset_game");
let msg = document.querySelector(".msg");
let newgame_btn = document.querySelector(".new_game");
let msg_block = document.querySelector(".win_message");

let turno = true;

// to store winning cases we form 2d array

let wincases = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turno === true) {
            box.innerText = "O";
            turno = false;
        }
        else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true; // now the cannot get chage means value get store permanently
        checkwinner(); // function call
    })
})

const winMessage = (winner) => {
    msg.innerText = `Congratulations ${winner} is Winner`;
    msg_block.classList.remove("hide");
    newgame_btn.classList.remove("hide");
    resetbtn.classList.add("hide");
};

const boxdisabled = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const boxenabled = () => {
    for (div of boxes) {
        div.disabled = false;
    }
}


checkwinner = () => {
    for (pattern of wincases) {
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                boxdisabled();
                console.log("winner");
                console.log(pos1);
                winMessage(pos1);

            }
        }

    }
}

const reset_game = () => {
    for (block of boxes) {
        block.innerText = "";
    }
}

resetbtn.addEventListener("click", () => {
    reset_game();
    boxenabled();
})
newgame_btn.addEventListener("click", () => {
    reset_game();
    msg_block.classList.add("hide");
    newgame_btn.classList.add("hide");
    resetbtn.classList.remove("hide");
    boxenabled();

})