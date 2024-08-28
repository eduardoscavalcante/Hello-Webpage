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

document.addEventListener('DOMContentLoaded', () => {
    const faqs = [
        {
            question: 'O que é empréstimo consignado?',
            answer: 'O empréstimo consignado é uma modalidade de crédito...'
        },
        {
            question: 'Quem pode contratar um empréstimo consignado?',
            answer: 'Pessoas que possuem renda fixa, como aposentados...'
        },
        {
            question: 'Como as parcelas são descontadas?',
            answer: 'As parcelas são descontadas diretamente do salário ou benefício...'
        },
        {
            question: 'O que é um refinanciamento?',
            answer: 'Refinanciamento é uma operação onde...'
        }
        
        // Adicione mais perguntas e respostas conforme necessário
    ];

    const faqList = document.getElementById('faq-list');

    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');

        const faqQuestion = document.createElement('div');
        faqQuestion.classList.add('faq-question');
        faqQuestion.innerHTML = `<span>${faq.question}</span><span class="arrow">▶</span>`;

        const faqAnswer = document.createElement('div');
        faqAnswer.classList.add('faq-answer');
        faqAnswer.innerHTML = `<p>${faq.answer}</p>`;

        faqItem.appendChild(faqQuestion);
        faqItem.appendChild(faqAnswer);

        faqQuestion.addEventListener('click', () => {
            const isOpen = faqItem.classList.contains('open');

            // Fechar todas as respostas
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('open');
            });

            // Se a pergunta não estava aberta, abra
            if (!isOpen) {
                faqItem.classList.add('open');
            }
        });

        faqList.appendChild(faqItem);
    });
});
