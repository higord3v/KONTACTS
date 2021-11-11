import './index.css';
import LoginForm from '../../components/LoginForm';
import img from '../../assets/img-login.png';
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const history = useHistory();
    const { token } = useAuth();
    useEffect(() => {
      if (token) {
        history.push("/home");
      }
      // eslint-disable-next-line
    }, []);

    return (
        <div className="container-login">
          <img src={img} alt="mulher segurando celular" />
          <LoginForm />
   
        </div>
    )
}

export default Login;