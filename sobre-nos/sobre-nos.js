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

// Rola a página para o topo
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//Aumentar e diminuir letra
let fontSize = 16; // Tamanho da fonte padrão

function increaseFont() {
    fontSize += 2; // Aumenta 2px
    updateFontSize();
}

function decreaseFont() {
    fontSize -= 2; // Diminui 2px
    updateFontSize();
}

function updateFontSize() {
    const elementsToUpdate = [
        ...document.querySelectorAll('.mission-text h2, .mission-text p, .story-section h2, .story-section p, .container, .text-box p')
    ];
    elementsToUpdate.forEach(el => {
        el.style.fontSize = fontSize + 'px';
    });
}

document.getElementById('increase-font').addEventListener('click', increaseFont);
document.getElementById('decrease-font').addEventListener('click', decreaseFont);

//fim