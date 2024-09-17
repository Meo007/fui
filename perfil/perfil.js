// Função para atualizar a imagem de perfil
document.getElementById('profile-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            document.getElementById('profile-photo').src = reader.result;
        };
        reader.readAsDataURL(file);
    }
});

// Função para atualizar a imagem de capa
document.getElementById('cover-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            document.getElementById('cover-photo').src = reader.result;
        };
        reader.readAsDataURL(file);
    }
});

// Função para editar a biografia
function editBio() {
    const bioText = document.getElementById('bio-text');
    const bioEdit = document.getElementById('bio-edit');
    const saveButton = document.getElementById('save-bio');

    // Extraindo apenas o texto da biografia atual
    const currentBio = bioText.textContent.trim().replace('Editar', '').trim();
    
    // Preenchendo a área de edição com o texto atual
    bioEdit.value = currentBio;
    
    // Alternando a visibilidade dos elementos
    bioText.style.display = 'none';
    bioEdit.style.display = 'block';
    saveButton.style.display = 'block';
}

// Função para salvar a biografia editada
function saveBio() {
    document.getElementById('confirmation-modal').style.display = 'block';
}

// Função para confirmar a ação de salvar a biografia
function confirmSave(confirm) {
    if (confirm) {
        const bioEdit = document.getElementById('bio-edit').value;
        document.getElementById('bio-text').innerHTML = `${bioEdit} <button onclick="editBio()">Editar</button>`;
    }
    document.getElementById('bio-text').style.display = 'block';
    document.getElementById('bio-edit').style.display = 'none';
    document.getElementById('save-bio').style.display = 'none';
    document.getElementById('confirmation-modal').style.display = 'none';
}

// Confirmar se deseja sair da página sem salvar alterações na biografia
window.addEventListener('beforeunload', function(event) {
    const bioEditVisible = document.getElementById('bio-edit').style.display === 'block';
    if (bioEditVisible) {
        event.preventDefault();
        event.returnValue = '';
    }
});

// Mostrar ícone de edição ao passar o mouse sobre a foto de perfil
function showIcon(show) {
    const icon = document.getElementById('profile-hover');
    if (show) {
        icon.style.opacity = '1';
    } else {
        icon.style.opacity = '0';
    }
}

// Função para editar campo e pedir confirmação
function editField(fieldId) {
    var field = document.getElementById(fieldId);
    var newValue = prompt("Digite o novo valor:");
    if (newValue !== null && newValue.trim() !== "") {
        var confirmed = confirm("Tem certeza que deseja alterar para '" + newValue + "'?");
        if (confirmed) {
            field.textContent = newValue;
        }
    }
}