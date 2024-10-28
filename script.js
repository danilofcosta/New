window.onload = function() {
    // Notifica que o Mini App está pronto
    Telegram.WebApp.ready();

    // Obtém informações do usuário a partir de initDataUnsafe
    const userInfo = Telegram.WebApp.initDataUnsafe.user;
    const chat = Telegram.WebApp.initDataUnsafe.receiver;
    
    // Exibe informações do usuário
    document.getElementById('userInfo').innerHTML = `
        <p>Nome: ${userInfo.first_name} ${userInfo.last_name || ''}</p>
        <p>Username: ${userInfo.username || 'Não disponível'}</p>
        <p>Chat ID: ${userInfo.id}</p>
        <img src="${userInfo.photo_url || ''}" alt="Foto do usuário" style="width: 100px; height: auto;">
    `;

    // Manipula o botão principal
    const mainButton = document.getElementById('mainButton');
    mainButton.style.backgroundColor = Telegram.WebApp.themeParams.bg_color;

    mainButton.onclick = function() {
        const dataToSend = "Hello from WebApp!";
        Telegram.WebApp.sendData(dataToSend);
    };
};
