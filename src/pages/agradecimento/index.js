export default () => {
    const main = document.querySelector('#app')

    const template = `
        <div class="container my-2">
            <div class="component_layout" id="component_agradecimento">            
                <h2>O seu questionário foi enviado com sucesso!</h2>

                <p>
                    Agradecemos a sua participação! Juntos/as, podemos conquistar a equidade, com inclusão e respeito às diferenças.
                </p>

                <button class="btn btn-success">
                    <a href="/#home">
                        Retornar ao início
                    </a>
                </button>
            </div>
        </div>
    `

    main.insertAdjacentHTML("beforeEnd", template)

    return main
}