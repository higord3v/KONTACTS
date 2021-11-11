import { AuthProvider } from './contexts/AuthContext';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Home from './pages/Home';
import useAuth from './hooks/useAuth';

const Rotas = () => {
  
  const RotaProtegida = (props) => {
    const { token } = useAuth();
    return (
          <Route render={() => token ?
            (props.children):
            (<Redirect to="/" />)
          }
          />
        )  
}
    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Login}/>
              <Route path="/sign-up" component={Cadastro}/>
              <RotaProtegida>
                <Route path="/home" component={Home}/>            
              </RotaProtegida>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
  );
}

export default Rotas;
