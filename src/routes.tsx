import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./components/Register/Register";
import RememberPass from "./pages/RememberPass";
import ServiceClient from "./pages/ServiceClient";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import CustomerAccount from "./pages/CustomerAccount";
import CustomerEdit from "./pages/CustomerEdit";
import CustomerPass from "./pages/CustomerPass";
import CustomerProducts from "./pages/CustomerProducts";
import Checkout from "./pages/Checkout";

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
        <Route path="/cliente" exact component={CustomerAccount} />
        <Route path="/cliente/alterar_dados" component={CustomerEdit} />
        <Route path="/cliente/alterar_senha" component={CustomerPass} />
        <Route path="/cliente/produtos" component={CustomerProducts} />
        <Route path="/cliente/:id/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
