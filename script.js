window.onload = function() {
    // Notifica que o Mini App está pronto
    Telegram.WebApp.ready();

    // Exibe informações do Telegram Web App
    console.log("Init Data:", Telegram.WebApp.initData);
    console.log("Color Scheme:", Telegram.WebApp.colorScheme);

    // Manipula o botão principal
    const mainButton = document.getElementById('mainButton');
    mainButton.style.backgroundColor = Telegram.WebApp.themeParams.bg_color;

    mainButton.onclick = function() {
        // Envia dados para o bot quando o botão é clicado
        const dataToSend = "Hello from WebApp!";
        Telegram.WebApp.sendData(dataToSend);
    };
};
