function solution() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    document.getElementById('sum').innerText = +a + +b

}
function multiplication() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    document.getElementById('sum').innerText = +a * +b
}
function changeColor() {
    let r = randomNumber(0,255);
    let g = randomNumber(0,255);
    let b = randomNumber(0,255);

    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}

function randomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}
function changeColorWhite() {
    document.body.style.background = 'rgb(255,255,255)';
}
function division() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    document.getElementById('sum').innerText = +a / +b
}
function minus() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    document.getElementById('sum').innerText = +a - +b
}
