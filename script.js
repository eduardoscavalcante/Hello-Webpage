document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.cards');

    // Função para adicionar mais cartões
    function addCard(title, image, link) {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <img src="${image}" alt="${title}">
            <div class="card-content">
                <p>${title}</p>
                <a href="${link}" class="access-btn">Acesse</a>
            </div>
        `;
        
        cardsContainer.appendChild(card);
    }

    // Serviços para adicionar dinamicamente (simulação de dados do back-end)
    const services = [
        { title: "Benefício Bolsa Família", image: "img/image.jpg", link: "#" },
        { title: "Empréstimo Pessoal", image: "https://via.placeholder.com/150", link: "#" },
        { title: "Seguro de Vida", image: "https://via.placeholder.com/150", link: "#" },
        { title: "Previdência Privada", image: "https://via.placeholder.com/150", link: "#" },
        { title: "Empréstimo Imobiliário", image: "https://via.placeholder.com/150", link: "#" }
    ];

    // Adiciona os serviços dinamicamente
    services.forEach(service => {
        addCard(service.title, service.image, service.link);
    });
});
