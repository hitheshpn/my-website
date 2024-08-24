document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = `The current date and time is: ${new Date().toLocaleString()}`;
    document.body.appendChild(welcomeMessage);
});
