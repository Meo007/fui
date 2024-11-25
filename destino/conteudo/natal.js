//INÍCIO            
// barra de navegação
        // Seleciona a barra de navegação
        const navBar = document.querySelector('.nav-bar');

        // Obtém a posição inicial da barra de navegação
        const navBarTop = navBar.offsetTop;

        // Adiciona um listener de evento para rolagem da página
        window.addEventListener('scroll', function() {
            // Verifica se a posição atual de rolagem é maior que a posição inicial da barra de navegação
            if (window.pageYOffset > navBarTop) {
                // Adiciona a classe para fixar a barra de navegação
                navBar.classList.add('fixed');
            } else {
                // Remove a classe para voltar à posição original
                navBar.classList.remove('fixed');
            }
        });

//Botão noturno
const lightIcon = document.getElementById("light-icon");
        const darkIcon = document.getElementById("dark-icon");

       
        // Check if dark mode is preferred
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        let darkMode = darkModeMediaQuery.matches;

        // Set dark-mode class on body if darkMode is true and pick icon
        if (darkMode) {
        document.body.classList.add("dark-mode");
        darkIcon.setAttribute("display", "none");
        } else {
        lightIcon.setAttribute("display", "none");
        }

        // Toggle dark mode on button click
        function toggleDarkMode() {
        // Toggle darkMode variable
        darkMode = !darkMode;

        // Toggle dark-mode class on body
        document.body.classList.toggle("dark-mode");

        // Toggle light and dark icons
        if (darkMode) {
            lightIcon.setAttribute("display", "block");
            darkIcon.setAttribute("display", "none");
        } else {
            lightIcon.setAttribute("display", "none");
            darkIcon.setAttribute("display", "block");
        }
        }

//pesquisa

        // Obtém os elementos de entrada de pesquisa e o contêiner de sugestões
        const searchInput = document.getElementById('searchInput');
        const suggestions = document.getElementById('suggestions');
        const transitionMessage = document.getElementById('transitionMessage');
        const noResultsMessage = document.getElementById('noResultsMessage');

        // Array com as sugestões de pesquisa e os links correspondentes
        //ADICIONA O LINK COM A BARRA NORMAL
        const searchSuggestions = [
            { name: 'Tela Inicial', link: 'telainicial.html' },
            { name: 'Destinos', link: 'destino/destino.html' },
            { name: 'Hospedagens', link: 'hospedagens.html' },
            { name: 'Sobre nós', link: 'sobrenos.html' },
            { name: 'Contato', link: 'contato.html' }
        ];

        // Adiciona um listener de evento para quando o usuário digitar no campo de busca
        searchInput.addEventListener('input', () => {
            const input = searchInput.value.toLowerCase(); // Obtém o valor do input e converte para minúsculas
            suggestions.innerHTML = ''; // Limpa as sugestões anteriores
            noResultsMessage.style.display = 'none'; // Esconde a mensagem de "não encontrado"
            if (input) { // Se o input não estiver vazio
                // Filtra as sugestões com base no valor do input
                const filteredSuggestions = searchSuggestions.filter(suggestion =>
                    suggestion.name.toLowerCase().includes(input)
                );
                if (filteredSuggestions.length > 0) {
                    // Para cada sugestão filtrada, cria um elemento <p> e adiciona à lista de sugestões
                    filteredSuggestions.forEach(suggestion => {
                        const suggestionItem = document.createElement('p');
                        suggestionItem.textContent = suggestion.name;
                        // Adiciona um listener de evento para preencher o campo de busca com a sugestão selecionada ao clicar
                        suggestionItem.addEventListener('click', () => {
                            searchInput.value = suggestion.name;
                            suggestions.style.display = 'none'; // Esconde as sugestões
                            transitionMessage.textContent = `Você está sendo direcionado para a página de ${suggestion.name}...`; // Define a mensagem de transição
                            transitionMessage.style.display = 'block'; // Mostra a mensagem de transição
                            setTimeout(() => {
                                window.location.href = suggestion.link; // Redireciona para a página correspondente
                            }, 2000); // Tempo de espera antes de redirecionar
                        });
                        suggestions.appendChild(suggestionItem); // Adiciona o item à lista de sugestões
                    });
                    suggestions.style.display = 'flex'; // Exibe as sugestões
                } else {
                    noResultsMessage.style.display = 'block'; // Mostra a mensagem de "não encontrado" apenas se houver input e nenhum resultado correspondente
                }
            } else {
                suggestions.style.display = 'none'; // Esconde as sugestões se o input estiver vazio
            }
        });
        //botão que aparece quando diminuir
        function toggleMenu() {
            const navBar = document.querySelector('.nav-bar');
            navBar.classList.toggle('active');
        }

        //Recado de você já está na página
        function funcao1()
        {
        alert("Você já está na página!");
        }
    
        //Transição de página
        function redirecionar(event, pagina) {
            // Previne o comportamento padrão do link (não redirecionar imediatamente)
            event.preventDefault();
    
            // Mostra a mensagem de redirecionamento
            alert("Você está sendo redirecionado para " + pagina);
    
            // Redireciona para a página após mostrar a mensagem
            setTimeout(function() {
                window.location.href = event.target.getAttribute("href");
            }, 1000); // Delay de 1 segundo (1000 milissegundos)
        }

         // Função para alternar o menu hamburguer
        function toggleMenu() {
            const navBar = document.querySelector('.nav-bar');
            navBar.classList.toggle('active'); // Alterna a classe 'active' para mostrar/esconder o menu
        }

        // Lógica para fechar o modal de agradecimento
        document.getElementById('closeThankYouModal').onclick = function () {
            document.getElementById('thankYouModal').style.display = 'none';
        };

        // Lógica para aumentar/diminuir a fonte
        // Define uma variável para o tamanho da fonte
        let fontSize = 16; // Tamanho padrão da fonte

        // Seleciona o body e as seções que precisam ser afetadas
        const body = document.body;
        const sections = document.querySelectorAll('.info-section, .value-section'); // Adicione outras seções conforme necessário

        // Seleciona os botões
        const increaseFontButton = document.getElementById('increase-font');
        const decreaseFontButton = document.getElementById('decrease-font');

        // Função para aplicar o tamanho da fonte
        const updateFontSize = () => {
            body.style.fontSize = fontSize + 'px'; // Aplica ao body
            sections.forEach(section => {
                section.style.fontSize = fontSize + 'px'; // Aplica a outras seções
            });
        };

        // Função para aumentar a fonte
        increaseFontButton.addEventListener('click', () => {
            fontSize += 2; // Aumenta 2px
            updateFontSize(); // Atualiza o tamanho da fonte
        });

        // Função para diminuir a fonte
        decreaseFontButton.addEventListener('click', () => {
            fontSize = Math.max(fontSize - 2, 10); // Diminui 2px, mas não abaixo de 10px
            updateFontSize(); // Atualiza o tamanho da fonte
        });

        // Inicializa o tamanho da fonte ao carregar a página
        updateFontSize();
//FIM

//Inicio desgin base para efeito de slide show
document.getElementById('showImages').addEventListener('click', function() {
    const slideshowContainer = document.getElementById('slideshow-container');
    slideshowContainer.style.display = "flex"; // Mostra o slideshow
    startSlideshow();
});

let currentSlide = 0;
const slides = document.getElementsByClassName('slide');
const captions = [
"Aquário Natal",
"Centro de turismo",
"Corais de Maracajú",
"Forte dos reis magos",
"Hotel parque da costeira",
"Ponte newton navarro",
"Praia de ponte negra",
"Santuário de santa rita de cássia",
];

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show');
    }
    slides[index].classList.add('show');
    document.getElementById('caption').innerText = captions[index]; // Atualiza a legenda
}

function startSlideshow() {
    showSlide(currentSlide);

    document.getElementById('next').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    document.getElementById('prev').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    document.getElementById('close').addEventListener('click', function() {
        document.getElementById('slideshow-container').style.display = "none"; // Fecha o slideshow
    });

    // Troca automática de imagens a cada 2 segundos
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 2000);
}

//Fim desgin base para efeito de slide show

//Parte de avaliação
// INÍCIO

let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
let selectedReviewIndex = null;
let starRatingValue = 0;

// Função para atualizar o resumo das avaliações
function updateReviewsSummary() {
    const totalReviews = reviews.length;
    const totalStars = reviews.reduce((sum, review) => sum + review.stars, 0);
    const averageRating = (totalStars / totalReviews).toFixed(1) || 0;

    document.getElementById('reviewsSummary').innerHTML = `Total de Avaliações: ${totalReviews} | Média: ${averageRating} ⭐`;
}

// Função para renderizar as avaliações
function renderReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    reviewsContainer.innerHTML = '';
    reviews.forEach((review, index) => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-item';
        reviewElement.innerHTML = `
            <h4>${review.name} (${review.email})</h4>
            <div class="review-stars">${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</div>
            <p>${review.text}</p>
            <span class="more-options" onclick="toggleOptionsMenu(event)">⋮</span>
            <div class="options-menu" id="optionsMenu${index}">
                <button onclick="openPasswordModal(${index})">Remover Avaliação</button>
            </div>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}

// Função para mostrar/ocultar o menu de opções
function toggleOptionsMenu(event) {
    const menu = event.target.nextElementSibling;
    const allMenus = document.querySelectorAll('.options-menu');
    allMenus.forEach(m => {
        if (m !== menu) m.style.display = 'none';
    });
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Função para abrir o modal de avaliação
document.getElementById('openReviewModalBtn').addEventListener('click', () => {
    document.getElementById('reviewModal').style.display = 'flex';
    clearReviewModal();
});

// Função para fechar o modal de avaliação
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('reviewModal').style.display = 'none';
});

// Limpa os campos do modal de avaliação
function clearReviewModal() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('reviewText').value = '';
    starRatingValue = 0;
    document.querySelectorAll('.star').forEach(star => star.classList.remove('selected'));
}

// Configuração das estrelas de avaliação
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        starRatingValue = star.getAttribute('data-value');
        document.querySelectorAll('.star').forEach(s => {
            s.classList.toggle('selected', s.getAttribute('data-value') <= starRatingValue);
        });
    });
    star.addEventListener('mouseover', () => {
        star.classList.add('hovered');
        star.previousElementSibling && star.previousElementSibling.classList.add('hovered');
    });
    star.addEventListener('mouseout', () => {
        star.classList.remove('hovered');
        star.previousElementSibling && star.previousElementSibling.classList.remove('hovered');
    });
});

// Função para salvar a avaliação
document.getElementById('saveReviewBtn').addEventListener('click', () => {
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const text = document.getElementById('reviewText').value;

    if (name && email && text && starRatingValue > 0) {
        reviews.push({
            name: name,
            email: email,
            stars: parseInt(starRatingValue),
            text: text
        });
        localStorage.setItem('reviews', JSON.stringify(reviews)); // Armazena as avaliações no localStorage
        updateReviewsSummary();
        renderReviews();
        document.getElementById('thankYouModal').style.display = 'flex';
        document.getElementById('reviewModal').style.display = 'none';
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

// Fechar o modal de agradecimento
document.getElementById('closeThankYouModal').addEventListener('click', () => {
    document.getElementById('thankYouModal').style.display = 'none';
});

// Abrir o modal de senha
function openPasswordModal(index) {
    selectedReviewIndex = index;
    document.getElementById('passwordModal').style.display = 'flex';
}

// Fechar o modal de senha
document.querySelectorAll('.password-modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        document.getElementById('passwordModal').style.display = 'none';
    });
});

// Remover a avaliação
document.getElementById('confirmDeleteBtn').addEventListener('click', () => {
    const password = document.getElementById('passwordInput').value;
    if (password === 'Liss123') { // Substitua pela sua lógica de verificação de senha
        reviews.splice(selectedReviewIndex, 1);
        localStorage.setItem('reviews', JSON.stringify(reviews)); // Atualiza o localStorage
        updateReviewsSummary();
        renderReviews();
        document.getElementById('passwordModal').style.display = 'none';
        alert('Avaliação removida com sucesso!');
    } else {
        alert('Senha incorreta!');
    }
});

// Limpar campos do modal de senha ao fechar
document.getElementById('cancelPasswordBtn').addEventListener('click', () => {
    document.getElementById('passwordModal').style.display = 'none';
    document.getElementById('passwordInput').value = ''; // Limpa o campo de senha
});

// Inicializa as avaliações ao carregar a página
window.onload = function() {
    renderReviews();
    updateReviewsSummary();
};

// FIM
