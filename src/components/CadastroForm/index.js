import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import toast  from '../../helpers/toast';

const CadastroForm = () => {
    const [nomeInput, setNomeInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [senhaInput, setSenhaInput] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const dadosFormulario = {
            nome: nomeInput,
            email: emailInput,
            senha: senhaInput
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_BASE}/usuarios`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosFormulario)
            })
                const data = await response.json();
                
                if (!response.ok) {
                    throw new Error (data)
                }
                
                return redirecionamento(true);
            } catch (error) {
                return toast.messageError(error.message);
                
        }
    }

    const redirecionamento = (ok) => {
        return ok && history.push("/");
    }

	return (
		<div className="div-cadastro">
            <form onSubmit={handleSubmit}>
                <h2>Cadastre-se</h2>
                <input 
                    onChange={e => setNomeInput(e.target.value)}
                    placeholder="Nome"
                    type="text"
                    value={nomeInput}
                />
                <input
                    onChange={e => setEmailInput(e.target.value)}
                    value={emailInput}
                    placeholder="E-mail"
                    type="email"
                />
                <input
                    onChange={e => setSenhaInput(e.target.value)} 
                    value={senhaInput}
                    placeholder="Senha" 
                    type="password"
                />

                <button type="submit" className="button-1">CADASTRAR</button>
                <button 
                    className="button-2"
                    onClick={() => history.push("/")}>
                        CANCELAR
                </button>
                <span className="span-cadastro">Já tem cadastro? 
                    <Link to="/" className="link"> Clique aqui!</Link>
                </span>
            </form>
          </div>
       );
}

export default CadastroForm;