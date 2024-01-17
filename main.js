document.addEventListener('DOMContentLoaded', function () {
    var settingsBtn = document.getElementById('settingsBtn');
    var settingsModal = document.getElementById('settingsModal');

    settingsBtn.addEventListener('click', function () {
        settingsModal.classList.toggle('active');
    });

    window.addEventListener('click', function (event) {
        if (event.target === settingsModal) {
            settingsModal.classList.remove('active');
        }
    });
});

function applySettings() {
    var languageSelect = document.getElementById('languageSelect');
    var selectedLanguage = languageSelect.value;

    // Defina traduções para cada idioma usando atributos data-*
    var translations = {
        'pt': {
            'greeting': 'Oi, eu sou o ',
            'about': 'Sobre',
            'portfolio': 'Portfolio',
            'contact': 'Contato',
            'searchPlaceholder': 'Pesquise...',
            'settings': 'Configurações',
            'selectLanguage': 'Selecione o idioma:',
            'selectTheme': 'Selecione o tema:',
            'apply': 'Aplicar'
            // Adicione mais traduções conforme necessário
        },
        'en': {
            'greeting': 'Hi, I am ',
            'about': 'About',
            'portfolio': 'Portfolio',
            'contact': 'Contact',
            'searchPlaceholder': 'Search...',
            'settings': 'Settings',
            'selectLanguage': 'Select language:',
            'selectTheme': 'Select theme:',
            'apply': 'Apply'
            // Adicione mais traduções conforme necessário
        }
    };
    

    // Obtém todos os elementos com atributo data-translation-key
    var elementsWithTranslationKey = document.querySelectorAll('[data-translation-key]');

    // Itera sobre os elementos e atualiza o texto com base no idioma selecionado
    elementsWithTranslationKey.forEach(function (element) {
        var translationKey = element.dataset.translationKey;
        var translation = translations[selectedLanguage][translationKey];
    
        if (translation !== undefined) {
            // Verifica se o elemento é um input e atualiza o placeholder
            if (element.tagName.toLowerCase() === 'input' && element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else {
                // Verifica se o elemento contém um <span>
                if (element.querySelector('span')) {
                    // Preserva o conteúdo dentro do <span>
                    var span = element.querySelector('span');
                    var spanContent = span.outerHTML;
    
                    // Atualiza o texto fora do <span>
                    element.innerHTML = translation + spanContent;
                } else {
                    element.textContent = translation;
                }
            }
        }
    });
    

    // Feche o modal de configurações
    var settingsModal = document.getElementById('settingsModal');
    settingsModal.classList.remove('active');
}

