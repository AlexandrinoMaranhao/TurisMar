document.addEventListener('DOMContentLoaded', () => {
    fetchDestinos();
});

async function fetchDestinos() {
    try {
        const response = await fetch('/api/destinos');
        const destinos = await response.json();
        displayDestinos(destinos);
    } catch (error) {
        console.error('Erro ao buscar destinos:', error);
    }
}

function displayDestinos(destinos) {
    const destinosContainer = document.getElementById('destinations-container');
    destinosContainer.innerHTML = '';
    destinos.forEach(destino => {
        const destinoElement = document.createElement('div');
        destinoElement.classList.add('grid-item');
        destinoElement.style.backgroundImage = `url(${destino.imagem})`;
        destinoElement.innerHTML = `
            <h3>${destino.nome}</h3>
            <p>${destino.descricao}</p>
        `;
        destinoElement.onclick = () => {
            window.location.href = `detalhes.html?destino=${destino.slug}`;
        };
        destinosContainer.appendChild(destinoElement);
    });
}