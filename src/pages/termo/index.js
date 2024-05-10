export default () => {
    const main = document.querySelector('#app')

    const template = `
        <div class="container my-2">
            <div class="component_layout" id="component_termo">
                <div>
                    <img src="../assets/logos/logo_divcorp.png">
                </div>

                <h4 class="mb-3">
                    Questionário Censo da Diversidade
                </h4>

                <p>
                    Esta pesquisa é uma iniciativa da <b>(Organização)</b> e tem por objetivo coletar dados para o 
                    <b>Censo da Diversidade 2024</b>. Trata-se de um mapeamento do perfil demográfico de profissionais
                    da <b>(Organização)</b>, para apoiar a criação e o desenvolvimento de iniciativas voltadas à promoção 
                    da diversidade e da inclusão, contribuindo assim para um ambiente de trabalho cada vez mais justo e inclusivo.
                </p>

                <p>
                    Este Censo é orientado e realizado pela <b>Diversidade Corporativa</b>, que utiliza metodologia certificada pelo 
                    <b>Centro de Estudos das Relações de Trabalho e Desigualdades (CEERT)</b>, organização referência na promoção da 
                    diversidade.
                </p> 

                <p> 
                    - a pesquisa levará cerca de 4 a 6 minutos para ser preenchida;
                </p>

                <p> 
                    - caso você não termine de responder todas as perguntas, suas respostas serão salvas a cada página, e, ao se conectar 
                    novamente, você continuará respondendo da página seguinte à última enviada.
                </p>

                <h4 class="mt-5 mb-3">
                    Termo de consentimento para tratamento de dados pessoais
                </h4>
                
                <p>
                    Você declara que <b>CONSENTE</b>, de forma livre e inequívoca, com o tratamento dos seus dados pessoais e dados pessoais 
                    sensíveis (i.e., dado pessoal sobre sua origem racial, convicção religiosa e dado referente à orientação sexual) fornecidos 
                    nas respostas às perguntas deste questionário, com a finalidade exclusiva de levantar dados estatísticos para o Censo da 
                    Diversidade e subsidiar ações de inclusão social.
                </p>

                <p> 
                    Os dados coletados pela <b>Diversidade Corporativa</b> serão compartilhados de forma agregada e anônima com a 
                    <b>(Organização)</b>, sendo que não terão conhecimento ou acesso às respostas individuais fornecidas pelos(as) 
                    participantes e somente receberão dados estatísticos e indicadores gerais. Todos os dados serão utilizados somente 
                    para subsidiar e apoiar iniciativas voltadas à promoção da diversidade e inclusão: sempre nos limites do cumprimento 
                    de suas atribuições legais; atendendo aos princípios da transparência, minimização, qualidade e segurança para produção 
                    de indicadores gerais e estatísticos, com o objetivo de compreender melhor perfil de profissionais e, consequentemente, 
                    aprimorar processos, sempre de acordo com os ditames da Lei Federal nº 13.709/2018 (Lei Geral de Proteção de Dados- LGPD) 
                    e demais normas aplicáveis.
                </p>

                <p>
                    A <b>Diversidade Corporativa</b> se compromete a: (i) tratar os seus dados pessoais e dados pessoais sensíveis 
                    em conformidade com a Lei nº 13.709/18 (LGPD) e (ii) adotar medidas técnicas e administrativas aptas a proteger 
                    seus dados pessoais de acessos não autorizados, e/ou situações acidentais ou ilícitas de destruição, perda, alteração, 
                    comunicação ou qualquer forma de tratamento inadequado ou ilícito, nos termos da legislação e regulamentos aplicáveis.
                </p>

                <p>
                    É possível solicitar a revogação do seu consentimento, alteração ou exclusão de seus dados ou exercer quaisquer direitos 
                    previstos na legislação a qualquer momento por meio do endereço saccensolgpd@divcorp.com.br.
                </p>

                <p>
                    Agradecemos desde já a sua participação e o seu comprometimento em construir uma organização mais diversa e inclusiva.
                </p>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="aceita_termo">
                    
                    <label class="form-check-label" for="aceita_termo">
                        <b>
                            Declaro estar ciente a respeito da realização do Censo da Diversidade, promovido pela (Organização). Estou ciente que os(as) 
                            organizadores(as) não terão conhecimento ou acesso às minhas respostas individuais, já que as informações serão compartilhadas 
                            de forma anônima, como dados estatísticos consolidados.
                        </b>
                    </label>            
                </div>

                <button class="btn btn-success">
                    <a href="/#questionario">
                        Avançar                
                    </a>
                </button>
            </div>  
        </div>  
    `

    main.insertAdjacentHTML("beforeEnd", template)

    return main
}
