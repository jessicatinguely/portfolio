// Selecionar a seção about
const about = document.querySelector('#about'); // Seleciona o elemento com o ID 'about'

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

// Chamar a função getAPIGithub()
getApiGithub();