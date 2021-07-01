let scores = {
  "X": 0,
  "O": 0
}
const x = document.getElementById("x-m");
const o = document.getElementById("o-m");
//array representation of gamboard
let table = ['', '', '', '', '', '', '', '', ''];
//winning sets
const winSet = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6]
];
//turn changes
const turns = {"X":"O", "O":"X"}
const turn = document.getElementById("turn");
turn.innerHTML = "X";
let buttons = document.getElementsByClassName("button");
//adding event listener for buttons
for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", ()=>{
    const index = i;
    if(table[index] == ""){
      buttons[index].innerHTML = turn.innerHTML;
      table[index] = turn.innerHTML;
      turn.innerHTML = turns[turn.innerHTML];
      winCheck();
      drawCheck();
    }
  });
}

//reset the game board
function reset() {
  for(let i = 0; i < buttons.length; i++){
    buttons[i].innerHTML = "";
    table[i] = "";
  }
  turn.innerHTML = "X";
}

//check for win
function winCheck() {
  for(let i = 0; i < winSet.length; i++){
    if(table[winSet[i][0]] == "X" && table[winSet[i][1]] == "X" && table[winSet[i][2]] == "X") {
      alert("X wins!");
      scores["X"] = scores["X"]+1;
      x.innerHTML = scores["X"];
      reset();
    }
    if(table[winSet[i][0]] == "O" && table[winSet[i][1]] == "O" && table[winSet[i][2]] == "O") {
      alert("O wins!");
      scores["O"] = scores["O"]+1;
      o.innerHTML = scores["O"];
      reset();
    }
  }
}

//check for draw
function drawCheck() {
  let left = table.filter(i=>i=="");
  if(left.length==0){
    alert("Draw!");
    reset();
  }
}

//restart the whole game
function restart() {
  reset();
  scores["X"] = 0;
  scores["Y"] = 0;
  x.innerHTML = scores["X"];
  o.innerHTML = scores["O"];
}