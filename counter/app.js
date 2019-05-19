const counter = document.querySelector('.counter');
const btnDown = document.getElementById('down');
const btnUp = document.getElementById('up');
let count = 0;

function countUp() {
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML > '0') {
        counter.style.color = '#4daf50';
    } else if(counter.innerHTML === '0') {
        counter.style.color = 'white';
    }
}

function countDown() {
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML < '0') {
        counter.style.color = 'red';
    } else if(counter.innerHTML === '0') {
        counter.style.color = 'white';
    }
}

btnUp.addEventListener('click', countUp);
btnDown.addEventListener('click', countDown);
