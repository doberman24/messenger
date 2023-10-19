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


const putMessage = (message) => {
    addDeleteIcon(message);
    listMessage.appendChild(message);
}


const sendMessage = document.querySelector('.input-messages').addEventListener('submit', async (event) => {
    event.preventDefault();
    const inputMessage = document.querySelector('.input-messages input');
    if (inputMessage.value) {
        const userMessage = addMessage(inputMessage.value);
        putMessage(userMessage);
        const serverMessage = await testRequest(inputMessage.value);
        putMessage(addMessage(serverMessage, true));
        inputMessage.value = '';
    }
});


const checkUserServer = (statusMessage, check) => {
    if (check) {
        statusMessage.classList.remove('user');
        statusMessage.classList.add('server-response');
    } else {
        statusMessage.classList.add('user');
        statusMessage.classList.remove('server-response');
    }
}


const addMessage = (message, server = false) => {
    const messageTemplate = document.getElementById('template-message').content;
    const messageItem = messageTemplate.querySelector('.message');
    checkUserServer(messageItem, server);
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

const testRequest = async (message) => {
    const text = fetch(`http://localhost:3000?message=${message}`);
    const textMessage = (await text).text();
    // console.log((await text).status);
    return await textMessage;
}
