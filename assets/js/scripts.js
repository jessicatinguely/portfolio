// Selecionar a seção about
const about = document.querySelector('#about'); // Seleciona o elemento com o ID 'about'

// Selecionar o formulário
const formulario = document.querySelector('#formulario');

// Expressão regular para validar o email
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Função para buscar os dados no Github
async function getApiGithub() {

    try{

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
                    <p>Hoje, sou estudante de <strong>Análise e Desenvolvimento de Sistemas na FIAP</strong> e aluna do
                        <strong>Bootcamp Full Stack Java da Generation Brasil</strong>. Já desenvolvi projetos em
                        <strong>Java, Spring Boot, HTML, CSS e Bootstrap</strong>, criando desde <strong>APIs REST</strong>
                        até <strong>interfaces web responsivas</strong>.</p>

                    <p>Mais do que código, gosto de pensar em <strong>experiências</strong>.
                        Acredito que tecnologia boa é aquela que simplifica, conecta e inspira, e é isso que busco em cada linha que escrevo.</p>

                    <p>✨ Aqui no blog compartilho meus projetos, aprendizados e reflexões sobre essa jornada de reinvenção,
                        entre café, curiosidade e muito código.</p>

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
formulario.addEventListener('submit', function(event) {

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
    const txtEmail= document.querySelector('#txtEmail');

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

});

// Chamar a função getAPIGithub()
getApiGithub();