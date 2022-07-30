let winnerSection = document.getElementsByClassName("winner-section");
let gameDrawSection = document.getElementsByClassName("game-draw-section");
let winner = document.getElementsByClassName("winner");
let allBoxes1 = document.querySelectorAll(".g-box");
let allBoxes = Array.from(allBoxes1);
let turn = "X";
let lastTurn;
// Event listen on each box
allBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn === "X" && box.innerHTML === "") {
      box.classList.add("x-element");
      box.innerHTML = "X";
      turn = "O";
      lastTurn = "X";
    } else if (turn === "O" && box.innerHTML === "") {
      box.classList.add("o-element");
      box.innerHTML = "O";
      turn = "X";
      lastTurn = "O";
    }
    checkWin();
    checkDraw();
  });
});
// Win possibilities
let winPossibilities = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// Check win function
function checkWin() {
  winPossibilities.forEach((p) => {
    if (
      allBoxes[p[0]].innerHTML === allBoxes[p[1]].innerHTML &&
      allBoxes[p[1]].innerHTML === allBoxes[p[2]].innerHTML &&
      allBoxes[p[2]].innerHTML === allBoxes[p[0]].innerHTML &&
      allBoxes[p[0]].innerHTML !== ""
    ) {
      console.log(`winner is ${lastTurn}`);
      winnerSection[0].classList.add("active");
      winner[0].innerHTML = `${lastTurn}`;
      return true;
    } else {
      return false;
    }
  });
}
// function for checking is game draw or not
function checkDraw() {
  let isAllBoxFilled = allBoxes.every((element) => element.innerHTML !== "");
  if (isAllBoxFilled && !checkWin()) {
    gameDrawSection[0].classList.add("active");
    console.log("Game Draw");
  }
}
// continue Game function
function continueGame() {
  allBoxes.forEach((box) => {
    box.innerHTML = "";
    box.classList.remove("x-element");
    box.classList.remove("o-element");
  });
  turn = "X";
  winnerSection[0].classList.remove("active");
  gameDrawSection[0].classList.remove("active");
}
