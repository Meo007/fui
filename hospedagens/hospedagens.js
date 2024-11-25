// INÍCIO
// Barra de navegação
const navBar = document.querySelector('.nav-bar');
const navBarTop = navBar.offsetTop;

window.addEventListener('scroll', function () {
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

// Pesquisa
const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');
const transitionMessage = document.getElementById('transitionMessage');
const noResultsMessage = document.getElementById('noResultsMessage');

const searchSuggestions = [
    { name: 'Tela Inicial', link: '../index.html' },
    { name: 'Destinos', link: '../destino/destino.html' },
    { name: 'Hospedagens', link: '../hospedagens.html' },
    { name: 'Sobre nós', link: '../sobrenos.html' },
    { name: 'Contato', link: '../contato.html' }
];

searchInput.addEventListener('input', () => {
    const input = searchInput.value.toLowerCase();
    suggestions.innerHTML = '';
    noResultsMessage.style.display = 'none';

    if (input) {
        const filteredSuggestions = searchSuggestions.filter(suggestion =>
            suggestion.name.toLowerCase().includes(input)
        );

        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach(suggestion => {
                const suggestionItem = document.createElement('p');
                suggestionItem.textContent = suggestion.name;
                suggestionItem.addEventListener('click', () => {
                    searchInput.value = suggestion.name;
                    suggestions.style.display = 'none';
                    transitionMessage.textContent = `Você está sendo direcionado para a página de ${suggestion.name}...`;
                    transitionMessage.style.display = 'block';
                    setTimeout(() => {
                        window.location.href = suggestion.link;
                    }, 2000);
                });
                suggestions.appendChild(suggestionItem);
            });
            suggestions.style.display = 'flex';
        } else {
            noResultsMessage.style.display = 'block';
        }
    } else {
        suggestions.style.display = 'none';
    }
});

// Função para alternar o menu hamburguer
function toggleMenu() {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}

// Função para mostrar alerta quando o usuário já está na página
function funcao1() {
    alert("Você já está na página!");
}

// Função de redirecionamento com transição
function redirecionar(event, pagina) {
    event.preventDefault();
    alert("Você está sendo redirecionado para " + pagina);
    setTimeout(function () {
        window.location.href = event.target.getAttribute("href");
    }, 1000);
}

// Lógica para fechar o modal de agradecimento
document.getElementById('closeThankYouModal').onclick = function () {
    document.getElementById('thankYouModal').style.display = 'none';
};

// Lógica para aumentar/diminuir a fonte
let fontSize = 16;
const body = document.body;
const sections = document.querySelectorAll('.info-section, .value-section');
const increaseFontButton = document.getElementById('increase-font');
const decreaseFontButton = document.getElementById('decrease-font');

const updateFontSize = () => {
    body.style.fontSize = fontSize + 'px';
    sections.forEach(section => {
        section.style.fontSize = fontSize + 'px';
    });
};

increaseFontButton.addEventListener('click', () => {
    fontSize += 2;
    updateFontSize();
});

decreaseFontButton.addEventListener('click', () => {
    fontSize = Math.max(fontSize - 2, 10);
    updateFontSize();
});

updateFontSize();
// FIM
