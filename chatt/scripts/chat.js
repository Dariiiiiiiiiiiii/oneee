const urlParams = new URLSearchParams(window.location.search);
const login = urlParams.get('login');
const key = urlParams.get('key');

const showMessages = (data) => {
    const formatDate = (date) => new Date(date).toISOString().slice(0,-5).replace('T', ' / ');
    const messagesWindow = document.querySelector("#messages");
    messagesWindow.innerText = data.map(msgObject => `${formatDate(msgObject.date)} ${msgObject.login}: ${msgObject.message}`).join('\n');
}

function sendMessage() {
    const messageInput = document.querySelector("#message");
    const message = messageInput.value;

    const messageEncoded = encodeURI(message);
    fetch(`http://none.in.ua:7708/send?login=${login}&key=${key}&message=${messageEncoded}`)
        .then((response) => response.json())
        .then((data) => {
            showMessages(data);
        })
        .catch(console.error);
    
    messageInput.value = "";
}

document.querySelector("#send").addEventListener("click", sendMessage);
document.querySelector("#message").addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        sendMessage();
    }
});

const getMessages = () => {
    fetch(`http://none.in.ua:7708/history?login=${login}&key=${key}`)
    .then((response) => response.json())
    .then((data) => {
        showMessages(data);
    })
    .catch(console.error);
}

getMessages();
setInterval(getMessages, 2000);
