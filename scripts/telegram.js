// Acessa a API do Telegram WebApp
const telegram = window.Telegram.WebApp;
console.log(telegram.initDataUnsafe)
let datas =telegram.initDataUnsafe
// Define um objeto para armazenar todos os dados que queremos exibir
const dados = {
    versao: telegram.version,
    plataforma: telegram.platform,
    esquemaDeCores: telegram.colorScheme,
    parametrosDoTema: telegram.themeParams,
    estaExpandido: telegram.isExpanded,
    alturaViewport: telegram.viewportHeight,
    alturaEstavelViewport: telegram.viewportStableHeight,
    corCabecalho: telegram.headerColor,
    corFundo: telegram.backgroundColor,
    corBarraInferior: telegram.bottomBarColor,
    confirmacaoFecharHabilitada: telegram.isClosingConfirmationEnabled,
    swipesVerticaisHabilitados: telegram.isVerticalSwipesEnabled,
};

// Função para exibir as informações na página
function exibirDadosTelegram(dados) {
    const container = document.getElementById('dadosTelegram');
    container.innerHTML = `
        <p><strong>ID do Usuário:</strong> ${datas.user.id}</p>
        <p><strong>Nome:</strong> ${datas.user.first_name} ${datas.user.last_name || ''}</p>
        <p><strong>Nome de Usuário:</strong> ${datas.user.username || 'Não disponível'}</p>
        <p><strong>Idioma:</strong> ${datas.user.language_code || 'Não disponível'}</p>
        <p><strong>Versão:</strong> ${dados.versao}</p>
        <p><strong>Plataforma:</strong> ${dados.plataforma}</p>
        <p><strong>Esquema de Cores:</strong> ${dados.esquemaDeCores}</p>
        <p><strong>Parâmetros do Tema:</strong> ${JSON.stringify(dados.parametrosDoTema)}</p>
        <p><strong>Está Expandido:</strong> ${dados.estaExpandido}</p>
        <p><strong>Altura do Viewport:</strong> ${dados.alturaViewport}</p>
        <p><strong>Altura Estável do Viewport:</strong> ${dados.alturaEstavelViewport}</p>
        <p><strong>Cor do Cabeçalho:</strong> ${dados.corCabecalho}</p>
        <p><strong>Cor de Fundo:</strong> ${dados.corFundo}</p>
        <p><strong>Cor da Barra Inferior:</strong> ${dados.corBarraInferior}</p>
        <p><strong>Confirmação para Fechar Habilitada:</strong> ${dados.confirmacaoFecharHabilitada}</p>
        <p><strong>Swipes Verticais Habilitados:</strong> ${dados.swipesVerticaisHabilitados}</p>
    `;
}

// Chama a função para exibir os dados
exibirDadosTelegram(dados);

// Exemplo de configuração de cores e expansão do aplicativo usando os métodos disponíveis
telegram.setHeaderColor('#FF5733'); // Define a cor do cabeçalho
telegram.setBackgroundColor('#F0F0F0'); // Define a cor de fundo
telegram.setBottomBarColor('#333333'); // Define a cor da barra inferior
telegram.enableClosingConfirmation(); // Habilita a confirmação ao fechar

// Ouve eventos, como quando a altura do viewport é alterada
telegram.onEvent('viewportChanged', (isStateStable) => {
    dados.alturaViewport = telegram.viewportHeight;
    dados.alturaEstavelViewport = telegram.viewportStableHeight;
    exibirDadosTelegram(dados); // Atualiza a exibição com novos valores
});
