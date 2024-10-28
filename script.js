window.Telegram.WebApp.onEvent('themeChanged', function() {
    document.body.style.backgroundColor = window.Telegram.WebApp.colorScheme.bg_color;
});

window.Telegram.WebApp.ready(); // Prepara o WebApp para interações

// Obter informações do usuário
const userInfo = window.Telegram.WebApp.initDataUnsafe.user;
let w =window.Telegram.WebApp.initDataUnsafe.receiver
console.log(w)

document.getElementById('userInfo').innerHTML = `
    <p>Nome: ${userInfo.first_name} ${userInfo.last_name || ''}</p>
    <p>Username: ${userInfo.username}</p>
    <p>chat: ${w.first_name}}</p>
    
    
`;

// Enviar mensagem quando o botão for clicado
document.getElementById('myButton').onclick = function() {
    const message = "Olá, este é um teste do meu WebApp!";
    window.Telegram.WebApp.sendMessage(userInfo.id, message);
};
