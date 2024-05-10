export default () => {
    const main = document.querySelector('#app')

    const template = `
        <div class="container my-2">
            <div class="component_layout component_questionário">
                <h2>
                    Censo da Diversidade
                </h2>

                <h5>
                    <b>
                        Escolaridade
                    </b>
                </h5>

                <h6><b>1. Qual sua escolaridade atual?</b></h6>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="escolaridade" id="fundamental" value="1">
                    <label class="form-check-label" for="fundamental">
                        Fundamental
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="escolaridade" id="medio" value="2">
                    <label class="form-check-label" for="medio">
                        Médio
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="escolaridade" id="superior" value="3">
                    <label class="form-check-label" for="superior">
                        Superior
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="escolaridade" id="mba" value="4">
                    <label class="form-check-label" for="mba">
                        MBA / Pós-graduação Lato Sensu
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="escolaridade" id="mestrado" value="5">
                    <label class="form-check-label" for="mestrado">
                        Mestrado Stricto Sensu
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="escolaridade" id="doutorado" value="6">
                    <label class="form-check-label" for="doutorado">
                        Doutorado
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="escolaridade" id="pos_doutorado" value="7">
                    <label class="form-check-label" for="pos_doutorado">
                        Pós-doutorado
                    </label>
                </div>

                <h6><b>2. No momento da admissão, qual era sua escolaridade?</b></h6>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="admissao_escolaridade" id="admissao_fundamental" value="1">
                    <label class="form-check-label" for="admissao_fundamental">
                        Fundamental
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="admissao_escolaridade" id="admissao_medio" value="2">
                    <label class="form-check-label" for="admissao_medio">
                        Médio
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="admissao_escolaridade" id="admissao_superior" value="3">
                    <label class="form-check-label" for="admissao_superior">
                        Superior
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="admissao_escolaridade" id="admissao_mba" value="4">
                    <label class="form-check-label" for="admissao_mba">
                        MBA / Pós-graduação Lato Sensu
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="admissao_escolaridade" id="admissao_mestrado" value="5">
                    <label class="form-check-label" for="admissao_mestrado">
                        Mestrado Stricto Sensu
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="admissao_escolaridade" id="admissao_doutorado" value="6">
                    <label class="form-check-label" for="admissao_doutorado">
                        Doutorado
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="admissao_escolaridade" id="admissao_pos_doutorado" value="7">
                    <label class="form-check-label" for="admissao_pos_doutorado">
                        Pós-doutorado
                    </label>
                </div>

                <h6><b>3. Você tem conhecimento em qual(is) língua(s)?</b></h6>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="conhecimento_lingua_inglesa" id="conhecimento_lingua_inglesa" value="1">
                    <label class="form-check-label" for="conhecimento_lingua_inglesa">
                        Inglês
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="conhecimento_lingua_espanhola" id="conhecimento_lingua_espanhola" value="1">
                    <label class="form-check-label" for="conhecimento_lingua_espanhola">
                        Espanhol
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="conhecimento_lingua_outras" id="conhecimento_lingua_outras" value="1">
                    <label class="form-check-label" for="conhecimento_lingua_outras">
                        Outras
                    </label>
                </div>

                <h6><b>4. Você já foi beneficiário(a) de bolsa ou de programas de ações afirmativas?</b></h6>
                <p>
                    Programas e medidas especiais adotados pelo Estado e pela iniciativa privada para a correção das 
                    desigualdades raciais e/ou sociais e para a promoção da igualdade de oportunidades.
                    <i 
                        class="fa-solid fa-circle-info" 
                        title="Caso você tenha sido beneficiário/a com mais de um programa, considerar o principal.">
                    </i>
                </p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="beneficio_bolsa" id="beneficio_bolsa_sim" value="1">
                    <label class="form-check-label" for="beneficio_bolsa_sim">
                        Sim
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="beneficio_bolsa" id="beneficio_bolsa_nao" value="0">
                    <label class="form-check-label" for="beneficio_bolsa_nao">
                        Não
                    </label>
                </div>

                <h6><b>5. Frequentou cursos formais ou treinamentos nos últimos três anos dentro ou fora da organização?</b></h6>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="frequentou_cursos" id="frequentou_cursos_sim" value="1">
                    <label class="form-check-label" for="frequentou_cursos_sim">
                        Sim
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="frequentou_cursos" id="frequentou_cursos_nao" value="0">
                    <label class="form-check-label" for="frequentou_cursos_nao">
                        Não
                    </label>
                </div>

                <button class="btn btn-success">
                    <a href="/#questionario_preenchido">
                        Avançar                
                    </a>
                </button>
            </div>
        </div>
    `

    main.insertAdjacentHTML("beforeEnd", template)

    return main
}