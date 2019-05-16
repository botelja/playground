const message = document.getElementById('message');
const sendBtn = document.querySelector('.btn');
const messageOut = document.querySelector('.deliver-message');
const alertBox = document.querySelector('.alert'); 

function sendMessage() {
    if(message.value === '') {
        alertBox.style.display = 'block';
    } else {
        messageOut.innerHTML = `<li>${message.value}</li>`;
        alertBox.style.display = 'none';
    }
    message.value = '';
}

sendBtn.addEventListener('click', sendMessage);

