// Acessa a API do Telegram WebApp
const telegramapi = window.Telegram.WebApp
const user=telegramapi.initDataUnsafe.user
const receiver=telegramapi.initDataUnsafe


// Seleciona o elemento <h1> dentro do <header>
document.querySelector("header h1").textContent = user.first_name +" "+user.last_name; // Define o texto do h1
document.querySelector("header p").textContent =user.username // Define o texto do h1
console.log(receiver)

