window.onload = function() {
    // Notifica que o Mini App está pronto
    Telegram.WebApp.ready();

    // Exibe o conteúdo completo de initDataUnsafe no console
    console.log(Telegram.WebApp.initDataUnsafe);

    // Obtém informações do usuário a partir de initDataUnsafe
    const userInfo = Telegram.WebApp.initDataUnsafe.user || {};  // Se userInfo não existir, define como um objeto vazio.

    // Exibe informações do usuário com verificações adicionais
    document.getElementById('userInfo').innerHTML = `
        <p>Nome: ${userInfo.first_name || 'Não disponível'} ${userInfo.last_name || ''}</p>
        <p>Username: ${userInfo.username || 'Não disponível'}</p>
        <p>ID do Usuário: ${userInfo.id || 'Não disponível'}</p>
        <p>É bot: ${userInfo.is_bot ? 'Sim' : 'Não'}</p>
        <p>Idioma: ${userInfo.language_code || 'Não disponível'}</p>
        <p>Premium: ${userInfo.is_premium ? 'Sim' : 'Não'}</p>
        <p>Adicionado ao menu de anexos: ${userInfo.added_to_attachment_menu ? 'Sim' : 'Não'}</p>
        <p>Permite mensagens do bot: ${userInfo.allows_write_to_pm ? 'Sim' : 'Não'}</p>
        <img src="${userInfo.photo_url || 'https://i.pinimg.com/564x/3e/aa/fc/3eaafcf19e9abd21a2e530e932c7f6f5.jpg'}" 
             alt="Foto do usuário" 
             style="width: 100px; height: auto;">
    `;

    // Manipula o botão principal e define a cor de fundo
    const mainButton = document.getElementById('mainButton');
    mainButton.style.backgroundColor = Telegram.WebApp.themeParams?.bg_color || '#0088cc'; // Cor padrão se bg_color não estiver disponível

    mainButton.onclick = function() {
        const dataToSend = "Hello from WebApp!";
        Telegram.WebApp.sendData(dataToSend); // Envia dados para o bot do Telegram
    };
};
