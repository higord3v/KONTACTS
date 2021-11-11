import { Link } from 'react-router-dom';
import './index.css';
import sair from '../../assets/sair.svg';
import HomeContent from '../../components/HomeContent';
import HomeModal from '../../components/HomeModal';
import { ModalProvider } from '../../contexts/ModalContext';
import useAuth from '../../hooks/useAuth';
import toast from '../../helpers/toast';

const Home = () => {
    const { deslogar } = useAuth();
  
    const handleOnclick = () => {
      toast.messageSuccess('Até breve!')
      return deslogar();
    }
    return (
        <ModalProvider>
          <div className="container">
            <header>
              <h1>KONTACTS</h1>
              <Link 
                onClick={handleOnclick}
                to="/" className="link-main">
               <img src={sair} alt="sair"/>
              </Link>
            </header>
            <HomeContent/>
            <HomeModal/>
          </div>
        </ModalProvider>
    )
}

export default Home;