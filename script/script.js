import {num} from './new.js';

const listMessage = document.querySelector('.output-messages ul');
let messages = listMessage.children;

const addDeleteIcon = (selectMessege) => {
    const message = selectMessege;
    message.addEventListener('mouseover', () => {
        selectMessege.querySelector('span').classList.add('del');
        const removeMessage = selectMessege.querySelector('.del');
        removeMessage.addEventListener('click', () => {
            selectMessege.remove();
        });
    });
    message.addEventListener('mouseout', () => {
        selectMessege.querySelector('span').classList.remove('del');
    });
}

for (let message of messages) {
    addDeleteIcon(message);
}


const sendMessage = document.querySelector('.input-messages').addEventListener('submit', (event) => {
    event.preventDefault();
    const inputMessage = document.querySelector('.input-messages input');
    if (inputMessage.value) {
        const message = addMessage(inputMessage.value);
        addDeleteIcon(message);
        listMessage.appendChild(message);
        inputMessage.value = '';
    }
});


const addMessage = (message) => {
    const messageTemplate = document.getElementById('template-message').content;
    const messageItem = messageTemplate.querySelector('.message');
    messageItem.querySelector('p').textContent = message;
    return messageItem.cloneNode(true);
}


// const addMessage = (message) => {
//     const newMessage = document.createElement('li');
//     const contentMessage = document.createElement('p');
//     const delMessage = document.createElement('span');
//     newMessage.append(contentMessage, delMessage);
//     newMessage.classList.add('message');
//     contentMessage.textContent = message;
//     return newMessage;
// }
console.log(num);