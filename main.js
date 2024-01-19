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
            'contact': 'Entrar em contato',
            'getcontact': 'Entrar em contato',
            'searchPlaceholder': 'Pesquise...',
            'settings': 'Configurações',
            'selectLanguage': 'Selecione o idioma:',
            'selectTheme': 'Selecione o tema:',
            'apply': 'Aplicar',
            'desc': 'Tenho 21 anos e estou na faculdade de Análise e Desenvolvimento de Sistemas. Este é meu cantinho virtual, onde compartilho um pouco do que venho aprendendo e fazendo nessa jornada tecnológica. Estou sempre me desafiando a aprender mais sobre programação e design, e aqui você vai encontrar um pouquinho desse meu caminho. Meu objetivo é aplicar o que aprendo na faculdade em projetos práticos que realmente fazem a diferença. Dê uma olhada no meu portfólio e conheça um pouco mais sobre mim. Se tiver alguma pergunta ou ideia para trocar, estou à disposição! Obrigado por passar por aqui e conhecer um pouco do que faço. 😊',
            // Adicione mais traduções conforme necessário
        },
        'en': {
            'greeting': 'Hi, I am ',
            'about': 'About',
            'portfolio': 'Portfolio',
            'contact': 'Contact',
            'getcontact': 'Get in touch',
            'searchPlaceholder': 'Search...',
            'settings': 'Settings',
            'selectLanguage': 'Select language:',
            'selectTheme': 'Select theme:',
            'apply': 'Apply',
            'desc': 'I am 21 years old and currently studying System Analysis and Development at college. This is my virtual corner, where I share a bit of what I\'ve been learning and doing on this technological journey. I constantly challenge myself to learn more about programming and design, and here you\'ll find a glimpse of my path. My goal is to apply what I learn in college to practical projects that truly make a difference. Take a look at my portfolio and get to know a little more about me. If you have any questions or ideas to exchange, I am available! Thank you for stopping by and getting to know a bit of what I do. 😊',
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

