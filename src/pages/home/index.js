export default () => {
    const main = document.querySelector('#app')

    const template = `
        <div class="container my-2">
            <div class="component_layout" id="component_home">
                <h3>
                    Fluxograma do programa de pesquisa
                    <span>
                        CENSOS
                    </span>
                </h3>

                <button class="btn btn-success">
                    <a href="/#login">                
                        Iniciar
                    </a>
                </button>
            </div>
        </div>
    `

    main.insertAdjacentHTML("beforeEnd", template)

    return main
}