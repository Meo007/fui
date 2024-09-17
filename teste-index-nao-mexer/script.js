const darkModeBtn = document.getElementById('dark-mode-btn');
let darkMode = false;

darkModeBtn.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode'); // Adiciona ou remove a classe 'dark-mode' do body

    const modeIcon = document.getElementById('mode-icon');
    if (darkMode) {
        modeIcon.src = 'black.jpg'; // Altera a imagem para o modo escuro
        ativarModoNoturno(); // Ativa o modo noturno
        document.querySelector('#h1').style.color = '#fff'; // Define a cor do texto do h1 para branco
        document.querySelector('#h1-1').style.color = '#fff'; //Define a cor do texto do h1 para branco;
        
    } else {
        modeIcon.src = 'white.jpg'; // Altera a imagem para o modo claro
        desativarModoNoturno(); // Desativa o modo noturno
        document.querySelector('#h1').style.color = '#000'; // Define a cor do texto do h1 para preto;
        document.querySelector('#h1-1').style.color = '#fff'; //Defini a cor do texto do h1 para branco;
        
    }
});

function ativarModoNoturno() {
    // Adicione estilos para o modo noturno aqui
    document.body.style.backgroundColor = '#000';
}

function desativarModoNoturno() {
    // Remova os estilos do modo noturno aqui
    document.body.style.backgroundColor = '#fff';
}
