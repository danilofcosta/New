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
        <p>Chat ID: ${userInfo.added_to_attachment_menu}</p>
        
        <img src="${userInfo.photo_url.value || 'https://i.pinimg.com/564x/3e/aa/fc/3eaafcf19e9abd21a2e530e932c7f6f5.jpg'}" alt="Foto do usuário" style="width: 100px; height: auto;">
    `;

    // Manipula o botão principal
    const mainButton = document.getElementById('mainButton');
    mainButton.style.backgroundColor = Telegram.WebApp.themeParams.bg_color;

    mainButton.onclick = function() {
        const dataToSend = "Hello from WebApp!";
        Telegram.WebApp.sendData(dataToSend);
    };
};
