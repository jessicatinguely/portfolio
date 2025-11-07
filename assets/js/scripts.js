// Selecionar a seção about
const about = document.querySelector('#about'); // Seleciona o elemento com o ID 'about'

// Selecionar o formulário
const formulario = document.querySelector('#formulario');

// Expressão regular para validar o email
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Função para buscar os dados no Github
async function getApiGithub() {

    try {

        // Passo 01: Fazer uma requisição GET para a API do Github
        const dadosPerfil = await fetch('https://api.github.com/users/jessicatinguely'); // Substitua 'seu-usuario-github' pelo seu nome de usuário do GitHub

        // Passo 02: Converter a resposta da API para JSON
        const perfilJson = await dadosPerfil.json();

        // Passo 03: Criar o HTML/CSS com os dados do Perfil
        let conteudo = `
       
            <!-- FOTO DO PERFIL -->
            <figure class="about_image">
                <img
                    src="${perfilJson.avatar_url}"
                    alt="Foto do perfil do GitHub - ${perfilJson.name}."
                >
            </figure>
 
            <!-- CONTEÚDO DO PERFIL -->
            <article class="about_content">
                    <h2>🌸 Sobre Mim</h2>
                    <p>Estudante de <strong>Análise e Desenvolvimento de Sistemas (FIAP)</strong> e aluna do <strong>Bootcamp Full Stack Java (Generation Brasil)</strong>. Entrei na tecnologia por curiosidade e fiquei por propósito.</p>

                    <p>Gosto de transformar ideias em algo que as pessoas realmente usam. Já desenvolvi projetos com
                    <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>HTML</strong>, <strong>CSS</strong> e <strong>Bootstrap</strong> — de <strong>APIs REST</strong> a <strong>interfaces responsivas</strong>. Mais do que código, me movem problemas bem resolvidos, experiências simples e aquele “uau” de quem está do outro lado da tela.</p>

                    <p>Acredito que tecnologia boa é a que <em>simplifica, conecta e cuida</em>. É isso que busco em cada projeto: clareza, respeito ao tempo das pessoas e um toque de carinho nos detalhes.</p>

                    <p>✨ Aqui compartilho meus <strong>projetos</strong>, <strong>aprendizados</strong> e a minha jornada de reinvenção, entre <strong>café</strong>, <strong>curiosidade</strong> e <strong>muito código</strong>.</p>


                    <div class="about_stats">
                    <a href="${perfilJson.html_url}" target="_blank" class="botao">Ver GitHub</a>
                   
                    <!-- Faltou esta div para alinhar os cards -->
                    <div class="stats-wrapper">
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.followers}</p>
                            <p class="stat-label">Seguidores</p>
                        </div>
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.public_repos}</p>
                            <p class="stat-label">Repositórios</p>
                        </div>
                    </div>
 
                </div>
            </article>
 
        `

        // Passo 04: Adicionar o HTML dentro da seção about

        about.innerHTML = conteudo;

    } catch (error) {
        console.error(error);
    }
}

// Função de envio e validação do formulário
formulario.addEventListener('submit', function (event) {

    // Impede o envio do formulário até a validação
    event.preventDefault();

    // Validacão do campo nome
    const campoNome = document.querySelector('#nome');
    const txtNome = document.querySelector('#txtNome');

    // Nome precisa ter pelo menos 3 caracteres
    if (campoNome.value.length < 3) {
        txtNome.innerHTML = 'O nome deve ter pelo menos 3 caracteres.';
        campoNome.focus();
        txtNome.style.color = 'red'; // Mensagem de erro em vermelho
        campoNome.style.border = '2px solid red'; // Destaque em vermelho para indicar erro
        return; // Sai da função se a validação falhar
    } else {
        txtNome.innerHTML = 'Nome válido!';
        txtNome.style.color = 'green'; // Mensagem de sucesso em verde
        campoNome.style.border = '2px solid green'; // Destaque em verde para indicar sucesso
    }


    // Validação do campo email
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    // Validar o email usando a expressão regular
    if (!emailRegex.test(campoEmail.value)) {
        txtEmail.innerHTML = 'Digite um e-mail válido!';
        campoEmail.focus();
        txtEmail.style.color = 'red';
        campoEmail.style.border = '2px solid red';
        return; // falhou -> não envia
    } else {
        txtEmail.innerHTML = 'E-mail válido!';
        txtEmail.style.color = 'green';
        campoEmail.style.border = '2px solid green';
    }

    // Validacão do campo assunto
    const campoAssunto = document.querySelector('#assunto');
    const txtAssunto = document.querySelector('#txtAssunto');

    // Assunto precisa ter pelo menos 5 caracteres
    if (campoAssunto.value.length < 5) {
        txtAssunto.innerHTML = 'O assunto deve ter pelo menos 5 caracteres.';
        campoAssunto.focus();
        txtAssunto.style.color = 'red'; // Mensagem de erro em vermelho
        campoAssunto.style.border = '2px solid red'; // Destaque em vermelho para indicar erro
        return; // Sai da função se a validação falhar
    } else {
        txtAssunto.innerHTML = 'Assunto válido!';
        txtAssunto.style.color = 'green'; // Mensagem de sucesso em verde
        campoAssunto.style.border = '2px solid green'; // Destaque em verde para indicar sucesso
    }

    // Se passou por todas as validações, enviar o formulário
    formulario.submit();
}
);

// Chamar a função getAPIGithub()
getApiGithub();

// ====== Toggle de Tema (lua/sol) ======
const root = document.documentElement;
const btnToggle = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');

if (btnToggle && icon) {
    // 🌙 lua “gordinha”
    const iconMoon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 0 1 11.21 3a.75.75 0 0 0-.92.92A7.5 7.5 0 1 0 20.08 12.7a.75.75 0 0 0 .92-.92Z"/></svg>`;
    // ☀️ sol com raios
    const iconSun = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></g></svg>`;

    // padrão: escuro (respeita a escolha salva, se houver)
    (function initTheme() {
        const saved = localStorage.getItem('theme');
        root.setAttribute('data-theme', (saved === 'dark' || saved === 'light') ? saved : 'dark');
        icon.innerHTML = root.getAttribute('data-theme') === 'dark' ? iconSun : iconMoon;
    })();

    btnToggle.addEventListener('click', () => {
        const nowDark = root.getAttribute('data-theme') !== 'dark';
        root.setAttribute('data-theme', nowDark ? 'dark' : 'light');
        localStorage.setItem('theme', nowDark ? 'dark' : 'light');
        icon.innerHTML = nowDark ? iconSun : iconMoon;
    });
}

