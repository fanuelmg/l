// You can add a random message change on click for more interactivity
const messages = [
    'I love you, My Love!',
    'You are my heart!',
    'Forever and always!',
    'You complete me!',
    'Nardi, I adore you!'
];

document.querySelector('.message').addEventListener('click', function() {
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    this.innerHTML = `<h1>${randomMessage}</h1>`;
});
