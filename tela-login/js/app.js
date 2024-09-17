document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os botões e formulários
    const signinButton = document.getElementById('signin');
    const signupButton = document.getElementById('signup');
    const signinForm = document.querySelector('.second-content .form');
    const signupForm = document.querySelector('.first-content .form');

    // Função para validar o formulário
    const validateForm = (form) => {
        const inputs = form.querySelectorAll('input');
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                input.classList.add('input-error');
            } else {
                input.classList.remove('input-error');
            }
        });

        return isValid;
    };

    // Função para lidar com o login
    const handleSignIn = (event) => {
        event.preventDefault();

        if (validateForm(signinForm)) {
            const email = signinForm.querySelector('input[type="email"]').value;
            const password = signinForm.querySelector('input[type="password"]').value;

            // Simulação de autenticação (aqui você deve chamar seu backend)
            if (email === 'user@example.com' && password === 'password') {
                alert('Login bem-sucedido!');
                // Redireciona para a página principal ou qualquer outra página
                window.location.href = 'index.html';
            } else {
                alert('Email ou senha incorretos.');
            }
        }
    };

    // Função para lidar com o cadastro
    const handleSignUp = (event) => {
        event.preventDefault();

        if (validateForm(signupForm)) {
            const name = signupForm.querySelector('input[placeholder="Name"]').value;
            const email = signupForm.querySelector('input[type="email"]').value;
            const password = signupForm.querySelector('input[type="password"]').value;

            // Simulação de cadastro (aqui você deve chamar seu backend)
            alert(`Cadastro bem-sucedido! Bem-vindo, ${name}!`);
            // Redireciona para a página de login ou qualquer outra página
            window.location.href = 'login.html';
        }
    };

    // Adiciona os ouvintes de eventos aos botões e formulários
    signinButton.addEventListener('click', handleSignIn);
    signupButton.addEventListener('click', handleSignUp);

    // Adiciona ouvintes de eventos para o submit dos formulários
    signinForm.addEventListener('submit', handleSignIn);
    signupForm.addEventListener('submit', handleSignUp);
});



