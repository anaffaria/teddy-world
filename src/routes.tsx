import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./components/Register/Register";
import RememberPass from "./pages/RememberPass";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import CustomerEdit from "./pages/CustomerEdit";
import CustomerPass from "./pages/CustomerPass";
import CustomerOrders from "./pages/CustomerOrders";
import CustomerContactUs from "./pages/CustomerContactUs";
import ContactUs from "./pages/ContactUs";
import Checkout from "./pages/Checkout";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Register} />
        <Route path="/recuperarsenha" component={RememberPass} />
        <Route path="/atendimento" exact component={CustomerContactUs} />
        <Route path="/atendimento/novo" component={ContactUs} />
        <Route path="/produto" component={Product} />
        <Route path="/produtos" component={ProductList} />
        <Route path="/cliente/alterar_dados" component={CustomerEdit} />
        <Route path="/cliente/alterar_senha" component={CustomerPass} />
        <Route path="/cliente/pedidos" component={CustomerOrders} />
        <Route path="/cliente/:id/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
