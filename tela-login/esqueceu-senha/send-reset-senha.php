<?php
// Configurações do servidor de e-mail
$host = 'smtp.exemplo.com'; // Substitua pelo seu servidor SMTP
$username = 'seu-email@exemplo.com'; // Substitua pelo seu e-mail
$password = 'sua-senha'; // Substitua pela sua senha de e-mail
$port = 587; // Geralmente 587 para TLS, 465 para SSL

// Recebe o e-mail do formulário
if (isset($_POST['email'])) {
    $to = $_POST['email'];
    $subject = 'Redefinição de Senha';
    $token = bin2hex(random_bytes(16)); // Gera um token único
    $resetLink = "http://seusite.com/reset-password.php?token=" . $token; // Link para redefinição

    // Mensagem do e-mail
    $message = "Olá,\n\nClique no link abaixo para redefinir sua senha:\n\n" . $resetLink . "\n\nSe você não solicitou essa redefinição, ignore este e-mail.";

    // Cabeçalhos do e-mail
    $headers = "From: $username\r\n";
    $headers .= "Reply-To: $username\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo "Um link para redefinir sua senha foi enviado para o e-mail fornecido.";
    } else {
        echo "Houve um erro ao enviar o e-mail. Por favor, tente novamente.";
    }

    // Aqui você deve salvar o token no banco de dados com o e-mail associado para validação futura.
    // Conecte-se ao banco de dados e insira o token associado ao e-mail
    // Código de conexão com o banco de dados e inserção do token não está incluído aqui
}
?>
