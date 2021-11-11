import './index.css';
import CadastroForm from '../../components/CadastroForm';
import img from '../../assets/img.png';
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';



const Cadastro = () => {
  
    const history = useHistory();
    const { token } = useAuth();
    useEffect(() => {
      if (token) {
        history.push("/home");
      }
      // eslint-disable-next-line
    }, []);

    return (
        <div className="container-cadastro">
          <CadastroForm/>
          <img src={img} alt="imagem de agenda" />
        </div>
    )
}

export default Cadastro;