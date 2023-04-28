let randomX;
let randomY;

function change(){
    randomX = Math.floor(Math.random() * 90) + 5;
    randomY = Math.floor(Math.random() * 90) + 5;
    document.getElementById("mySquare").style.backgroundColor = "blue";
    document.getElementById("mySquare").style.top = randomY + "%";
    document.getElementById("mySquare").style.left = randomX + "%";

}