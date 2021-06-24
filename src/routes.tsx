import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from "./components/Register/Register";
import Atendimento from './pages/Atendimento'


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Register} />
        <Route path="/atendimento" component={Atendimento} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
