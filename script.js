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

// Pesquisa
const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');
const transitionMessage = document.getElementById('transitionMessage');
const noResultsMessage = document.getElementById('noResultsMessage');

const searchSuggestions = [
    { name: 'Tela Inicial', link: 'telainicial.html' },
    { name: 'Destinos', link: 'destino/destino.html' },
    { name: 'Hospedagens', link: 'hospedagens.html' },
    { name: 'Sobre nós', link: 'sobrenos.html' },
    { name: 'Contato', link: 'contato.html' }
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

// Botão que aparece quando diminuir
function toggleMenu() {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}

// Recado de você já está na página
function funcao1() {
    alert("Você já está na página!");
}

// Transição de página
function redirecionar(event, pagina) {
    event.preventDefault();
    alert("Você está sendo redirecionado para " + pagina);
    setTimeout(function() {
        window.location.href = event.target.getAttribute("href");
    }, 1000);
}

// Botão Mostrar Tudo
const showAllBtn = document.getElementById('showAllBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

showAllBtn.addEventListener('click', function() {
    overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
});

// Efeito Slide
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slideItems = document.querySelectorAll('.slide-item');
let currentIndex = 0;

function updateSlider() {
    const slideItemWidth = slideItems[0].offsetWidth + parseInt(getComputedStyle(slideItems[0]).marginRight);
    const containerWidth = document.querySelector('.slider-container').offsetWidth;
    const maxScroll = slideItemWidth * slideItems.length - containerWidth;

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > slideItems.length - 1) currentIndex = slideItems.length - 1;

    slider.style.transform = `translateX(-${currentIndex * slideItemWidth}px)`;
}

rightArrow.addEventListener('click', () => {
    const slideItemWidth = slideItems[0].offsetWidth + parseInt(getComputedStyle(slideItems[0]).marginRight);
    const containerWidth = document.querySelector('.slider-container').offsetWidth;
    const maxScroll = slideItemWidth * slideItems.length - containerWidth;

    if ((currentIndex + 1) * slideItemWidth <= maxScroll) {
        currentIndex++;
        updateSlider();
    }
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

window.addEventListener('resize', updateSlider);

// Funcionalidade do Modal
const modal = document.getElementById("infoModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModalBtn = document.querySelector(".close");

slideItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.getAttribute('data-title');
        const description = item.getAttribute('data-description');
        const imgSrc = item.querySelector('img').src;

        modalImage.src = imgSrc;
        modalTitle.textContent = title;
        modalDescription.textContent = description;

        modal.style.display = "block";
    });
});

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// FIM
