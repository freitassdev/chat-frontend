import React, { useRef, useState } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import './Signupform.css'

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [hasCharacters, setHasCharacters] = useState<boolean>(false)
  const [hasNumbers, setHasNumbers] = useState<boolean>(false);
  const [hasLeters, setHasLeters] = useState<boolean>(false);
  const [hasSpecialChars, setHasSpecialChars] = useState<boolean>(false);

  const op = useRef(null!) as React.RefObject<OverlayPanel>;
  const changeEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  }

  const changePassInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPass(newPassword);
    const hasNumber = /\d/.test(newPassword);
    const hasLetter = /[a-zA-Z]/.test(newPassword);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
    const hasEnoughCharacters = newPassword.length > 7;

    setHasLeters(hasLetter);
    setHasNumbers(hasNumber);
    setHasSpecialChars(hasSpecial);
    setHasCharacters(hasEnoughCharacters);
  }

  const changeOverlay = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (op.current) {
      op.current.toggle(e)
    }
  }
  return (
    <>
      <div className="signup-card">
        <div className="signup-content">
          <div className="signup-title">
            <h1>Signup</h1>
          </div>
          <div className="signup-google-button">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png" alt="google logo" /> <p>Criar conta com o Google</p>
          </div>
          <div className="signup-or-text">
            <p>ou</p>
          </div>
          <div className="signup-inputs">
            <div className="input-text">
              <input type="text" id="email" value={email} onChange={(e) => changeEmailInput(e)} />
              <label htmlFor="email">Endereço de Email</label>
            </div>
            <div className="input-text">
              <input type="password" id="password" value={pass} onChange={(e) => changePassInput(e)} onFocus={(e) => changeOverlay(e)} />
              <OverlayPanel ref={op}>
                <p className={hasCharacters ? "text-green" : "text-red"}>Minimo de 8 caractéres.</p>
                <p className={hasNumbers ? "text-green" : "text-red"}>Minimo de 1 número.</p>
                <p className={hasLeters ? "text-green" : "text-red"}>Minimo de 1 letra.</p>
                <p className={hasSpecialChars ? "text-green" : "text-red"}>Minimo de 1 caractere especial.</p>
              </OverlayPanel>
              <label htmlFor="password">Senha</label>
            </div>
          </div>
          <p className="forgot-pass text-small text-light">
            Esqueceu sua senha?
          </p>
          <div className="signup-button">
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

export default SignupForm