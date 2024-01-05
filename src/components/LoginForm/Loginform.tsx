import React from 'react'
import './Loginform.css'

const Loginform: React.FC = () => {

    return (
        <>
            <div className="login-card">
                <div className="login-content">
                    <div className="login-title">
                        <h1>Login</h1>
                    </div>
                    <div className="login-google-button">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png" alt="google logo" /> <p>Fazer login com o Google</p>
                    </div>
                    <div className="login-or-text">
                        <p>ou</p>
                    </div>
                    <div className="login-inputs">
                        <div className="input-text">
                            <input type="text" id="email" />
                            <label htmlFor="email">Endereço de Email</label>
                        </div>
                        <div className="input-text">
                            <input type="password" id="password" />
                            <label htmlFor="password">Senha</label>
                        </div>
                    </div>
                    <p className="forgot-pass text-small text-light">
                        Esqueceu sua senha?
                    </p>
                    <div className="login-button">
                        <p>Entrar</p>
                    </div>
                    <p className="create-account text-small text-light">
                        Ainda não tem uma conta? Crie uma!
                    </p>
                </div>
            </div>
        </>
    )
}

export default Loginform