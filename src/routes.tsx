import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Atendimento from './pages/Atendimento'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/atendimento" component={Atendimento} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
