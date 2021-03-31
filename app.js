let content = "";

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        content += `<div id="${i}${j}" class="block"></div>`;
    }
}
let game = document.querySelector("#game");
game.innerHTML = content;




let turn = true; // true = x, false = 0;

let allBlock = document.getElementsByClassName("block");
for (let block of allBlock) {
    block.addEventListener("click", function() {
        let [x, y] = ([...block.id]); //let [x,y] = word.split('');
        let state = grid[x][y];
        if (state == "") {
            grid[x][y] = turn == true ? "x" : "0";
            turn = !turn;
        }
        render();
    });
}


//matrix



let grid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];
render();

function render() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let block = document.getElementById(`${i}${j}`);
            let state = grid[i][j];
            if (state == "x") {
                block.classList.add("cross");
            } else if (state == "0") {
                block.classList.add("zero");
            } else {
                block.classList.remove("cross");
            }
        }
    }
}

// let grid = [];

// for (let i = 0; i < 3; i++) {
//     grid[i] = [];
//     for (let j = 0; j < 3; j++) {
//         grid[i][j] = 0;
//     }
// }