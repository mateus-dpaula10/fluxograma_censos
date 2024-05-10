export default () => {
    const main = document.querySelector('#app')

    const template = `
        <div id="component_login">
            <div class="bg_login"></div>
            <div class="overlay_login"></div>
            
            <div class="container">
                <div class="bg_card">
                    <!-- <img src="./assets/logos/logo_divcorp.png" alt="Logo DivCorp"> -->
                </div>
                <div class="card_login">
                    <h2>LOGAR</h2>

                    <div class="form-group">
                        <i class="fa-solid fa-user"></i>
                        <input class="form-control" type="text" placeholder="Usuário" id="login_email">
                    </div>

                    <div class="form-group">
                        <i class="fa-solid fa-lock"></i>
                        <input class="form-control" type="password" placeholder="********" id="login_senha">
                    </div>

                    <div class="form-group">
                        <button class="btn btn-success" id="btn_comecar_login">
                            <a href="/#termo">
                                Começar
                            </a>
                        </button>
                    </div>
                </div>
                <div id="footer">
                    <p>Copyright © 2024 - Todos os Direitos Reservados</p>
                </div>
            </div>
        </div>
    `

    main.insertAdjacentHTML("beforeEnd", template)

    return main
}