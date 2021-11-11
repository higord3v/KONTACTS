import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';

const LoginForm = () => {
    const [emailInput, setEmailInput] = useState('');
    const [senhaInput, setSenhaInput] = useState('');
    const { logar, setToken } = useAuth();
    const history = useHistory();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        return await logar(emailInput, senhaInput, redirecionamento);
}

const redirecionamento = (token) => {
   setToken(token);
   return history.push("/home");
}
	return (
            <div className="div-login"> 
                <form onSubmit={handleSubmit}>
                	<p>Bem-vindo(a)!</p>
                    <h2>Faça o login com sua conta</h2>
                    <input
                        onChange={e => setEmailInput(e.target.value)} 
                        placeholder="E-mail"
                        type="email"
                        value={emailInput}
                         />
                    <input
                     onChange={e => setSenhaInput(e.target.value)}
                     placeholder="Senha"
                     type="password"
                     value={senhaInput}
                      />
                    <button type="submit">
                        LOGIN
                    </button>
                    <span className="login-span">Não tem cadastro?
                      <Link to="/sign-up" className="link"> Clique aqui</Link>
                    </span>   
                </form>
             </div>
		)
}

export default LoginForm;