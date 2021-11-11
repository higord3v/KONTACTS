import { useLocalStorage } from 'react-use';
import toast from '../helpers/toast';

const request = async (credenciais) => {
    return await fetch(`${process.env.REACT_APP_BASE}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credenciais),
    });
}

const logar = async (email, senha, callback) => {
    const credenciais = {email, senha}
    try {
            const response = await request(credenciais);
            const data = await response.json();
            if (!response.ok) {
                throw new Error (data); 
            }
            callback(data.token);
            toast.messageSuccess('Bem-vindo(a)!');
    } catch(error) {
            return toast.messageError(error.message);
        }
}   

const useAuthProvider = () => {
    const [token, setToken, removeToken] = useLocalStorage('token', '');

    
    const deslogar = () => {
        removeToken();
    }
    return {
        token,
        setToken,
        removeToken,
        logar,
        deslogar
    }
}

export default useAuthProvider;