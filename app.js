for (let i = 0; i < 9; i++) {
    document.getElementById('game').innerHTML += '<div class="block"></div>';
}

//получение по клику крестиков
let elemOne = document.querySelector("#game").childNodes;
elemOne.forEach((elem) => elem.addEventListener("click", function(event) {
    elem.style.backgroundImage = "url('images/12.png')";
    elem.style.backgroundSize = "100% 100%";

}));
//получение нолика по клику правой кнопки мышки

elemOne.forEach((elem) => elem.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    elem.style.backgroundImage = "url('images/14.png')";
    elem.style.backgroundSize = "100% 100%";
}, false));