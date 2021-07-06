import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./components/Register/Register";
import RememberPass from "./pages/RememberPass";
import ServiceClient from "./pages/ServiceClient";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import CustomerAccount from "./pages/CustomerAccount";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Register} />
        <Route path="/recuperarsenha" component={RememberPass} />
        <Route path="/atendimento" component={ServiceClient} />
        <Route path="/produto" component={Product} />
        <Route path="/produtos" component={ProductList} />
        <Route path="/cliente" component={CustomerAccount} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
