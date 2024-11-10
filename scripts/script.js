const telegramapi = window.Telegram.WebApp;
const user = telegramapi.initDataUnsafe.user;
const url = "https://webapp-ten-mu.vercel.app/buscar?id=" + String(user.id);
// const url = "https://webapp-ten-mu.vercel.app/buscar?id=6874062454";

async function fetchHaremData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro na resposta da rede');
        }
        const data = await response.json();
        
        // Process the data
        const dadosHarem = data;
        const husbando = dadosHarem.husbando;
        const waifus = dadosHarem.waifus;
        
        renderizarLista(waifus); // Call the render function with waifus data

    } catch (error) {
        console.error('Erro na requisição:', error); // Handle fetch errors
    }
}

function renderizarLista(dados) {
    const lista = dados.personagens;
    const fav = String(dados.fav);

   
    // Find the favorite character and set as background
    const getfav = lista.find(item => item._id === fav);
    if (getfav) {
        document.querySelector('.mikasa').style.backgroundImage = "url(" + getfav.url + ")";
    }

    // Select the base container for the list
    const listaItens = document.getElementById('base');
    lista.forEach(item => { 
        if (!item.url) { return;}
        // Skip this iteration if item.url is missing or empty
           
        console.log(item) 
        const divItem = document.createElement('div');
        divItem.classList.add('item');
        // Check if the URL is a video or image
        if (item.url.includes('.mp4') || item.tipo.includes('video')) {
            divItem.innerHTML = `
                <div class="imagem">
                    <video id="conteudo" src="${item.url}" controls alt="video"></video>
                    <div class="legenda">
                        <h1>${item.nome}</h1>
                        <p>${item.anime}</p>
                    </div>
                </div>
            `;
        } 
        else if  (item.tipo.includes('photo')) {
        
            divItem.innerHTML = `
                <div class="imagem">
                    <img id="conteudo" src="${item.url}" alt="foto">
                    <div class="legenda">
                        <h1>${item.nome}</h1>
                        <p>${item.anime}</p>
                        <p>id: ${item._id}</p>
                    </div>
                </div>
            `;
        }

        // Append the created item to the base list
        listaItens.appendChild(divItem);
    });
}

// Call the async function to fetch and render data
fetchHaremData();
