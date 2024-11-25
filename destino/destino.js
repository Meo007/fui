// INÍCIO

// Barra de navegação
const navBar = document.querySelector('.nav-bar');
const navBarTop = navBar.offsetTop;

window.addEventListener('scroll', function() {
    if (window.pageYOffset > navBarTop) {
        navBar.classList.add('fixed');
    } else {
        navBar.classList.remove('fixed');
    }
});

// Botão noturno
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
let darkMode = darkModeMediaQuery.matches;

if (darkMode) {
    document.body.classList.add("dark-mode");
    darkIcon.style.display = "none";
} else {
    lightIcon.style.display = "none";
}

function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode");
    if (darkMode) {
        lightIcon.style.display = "block";
        darkIcon.style.display = "none";
    } else {
        lightIcon.style.display = "none";
        darkIcon.style.display = "block";
    }
}

//pesquisa
// Obtém os elementos de entrada de pesquisa e o contêiner de sugestões
const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');
const noResultsMessage = document.querySelector('.no-results-message');

// Array com as sugestões de pesquisa e os links correspondentes
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
                    window.location.href = suggestion.link; // Redireciona para o link da sugestão ao clicar
                });
                suggestions.appendChild(suggestionItem); // Adiciona a sugestão à lista de sugestões
            });
            suggestions.style.display = 'block'; // Exibe o contêiner de sugestões
        } else {
            noResultsMessage.style.display = 'block'; // Exibe a mensagem de "não encontrado" se não houver sugestões filtradas
        }
    } else {
        suggestions.style.display = 'none'; // Esconde o contêiner de sugestões se o input estiver vazio
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
//FIM