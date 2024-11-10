const telegramapi = window.Telegram.WebApp
const user=telegramapi.initDataUnsafe.user
let url = "https://webapp-ten-mu.vercel.app/buscar?id="+String(user.id);
fetch(url)
    .then(response => {
        // Verifique se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro na resposta da rede');
        }
        return response.json();

         // Supondo que a resposta seja em formato JSON
    })
    .then(data => {
        let dadosHarem =data
        let husbando = dadosHarem.husbando
        let waifus = dadosHarem.waifus
        renderizarLista(waifus)
        //console.log(data);  Aqui você pode processar os dados recebidos
    })
    .catch(error => {
        console.error('Erro na requisição:', error); // Lida com erros de requisição
    });

function renderizarLista(dados) {
    const lista = dados.personagens;
    const fav = String(dados.fav);
    console.log(dados)
   
    const getfav = lista.find(item => item._id ===fav );
    
    document.querySelector('.mikasa').style.backgroundImage = "url("+getfav.url+")";
    //começo do for 
    const listaItens = document.getElementById('base');
    lista.forEach(item => {  

        
        const divItem = document.createElement('div');
        divItem.classList.add('item');

        if (item.url.includes('.mp4')) {
            divItem.innerHTML = `
                <div class="imagem">
                    <video id="conteudo" src="${item.url}" controls alt="video"></video>
                    <div class="legenda">
                        <h1>${item.nome}</h1>
                        <p>${item.anime}</p>
                    </div>
                </div>
            `;
        } else {
            divItem.innerHTML = `
                <div class="imagem">
                    <img id="conteudo" src="${item.url}" alt="foto">
                    <div class="legenda">
                        <h1>${item.nome}</h1>
                        <p>${item.anime}</p>
                    </div>
                </div>
            `;
        }

        listaItens.appendChild(divItem);
    });
}
