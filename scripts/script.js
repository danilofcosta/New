// Usando fetch para obter o arquivo JSON
fetch('dados.json')  // Especifique o caminho correto do seu arquivo JSON
    .then(response => {
        // Verifica se a resposta foi bem-sucedida (status HTTP 200)
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }
        return response.json();  // Converte o corpo da resposta para um objeto JSON
    })
    .then(data => {
        // Obtém o elemento onde os itens serão adicionados
        const listaItens = document.getElementById('base');

        // Itera sobre os dados e cria um item para cada entrada
        data.forEach(item => {
            // Cria a estrutura do item
            const divItem = document.createElement('div');
            divItem.classList.add('item');  // Adiciona a classe CSS para o estilo do item

            divItem.innerHTML = `
                <div class="imagem">
                    <img src="${item.url}" alt="foto">
                    <div class="legenda">
                        <h1>${item.nome}</h1>
                        <p>${item.anime}</p>
                    </div>
                </div>
            `;
      
            // Adiciona o novo item ao contêiner
            listaItens.appendChild(divItem);
        });
    })
    .catch(error => {
        // Trata qualquer erro que ocorrer durante o processo
        console.error('Erro ao ler o arquivo JSON:', error);
    });


