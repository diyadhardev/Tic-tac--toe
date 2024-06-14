let boxes = document.querySelectorAll(".but");
let newGamebtn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let resetbtn = document.querySelector("#resetBtn");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;
let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = 0;
      turnO = false;
      box.disabled = true;
    } else {
      box.innerText = "X";
      turnO = true;
      box.disabled = true;
    }
    winning();
    count++;
    if (count == 9) {
      msg.innerText = "It's a tie!! Try again";
      msgcontainer.classList.remove("hide");
      disableboxes();
    }
  });
});

const winning = () => {
  for (let pattern of winPattern) {
    if (
      boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
      boxes[pattern[1]].innerText === boxes[pattern[2]].innerText &&
      boxes[pattern[0]].innerText === boxes[pattern[2]].innerText &&
      boxes[pattern[0]].innerText != "" &&
      boxes[pattern[1]].innerText != "" &&
      boxes[pattern[2]].innerText != ""
    ) {
      showWinner(boxes[pattern[0]].innerText);
      return true;
    }
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations!! Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};
const showTie = () => {
  msg.innerText = "Its a tie!! Try again";
  msgcontainer.classList.remove("hide");
};
const reset = () => {
  turnO = true;
  enableboxes();
  msgcontainer.classList.add("hide");
  count = 0;
};
const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
newGamebtn.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);
