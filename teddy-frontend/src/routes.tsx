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
import AdminIndex from "./pages/Admin/Home/Home";
import Cards from "./pages/Cards";
import AdminTeddy from "./pages/Admin/Teddy/AdminTeddy";
import AdminOrders from "./pages/Admin/Orders/AdminOrders";
import AdminDevolutions from "./pages/Admin/Devolutions/AdminDevolutions";
import AdminCustomers from "./pages/Admin/Customers/AdminCustomers";
import AdminCoupons from "./pages/Admin/Coupons/AdminCoupons";
import { NewTeddy } from "./pages/Admin/Teddy/NewTeddy";
import AdminCouponsNew from "./pages/Admin/Coupons/NewCoupons";
import { EditDevolution } from "./pages/Admin/Devolutions/EditDevolutions";
import { AuthAdmin } from "./pages/Admin/Middleware/AuthMiddle";

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
        <Route path="/produto/:id" component={Product} />
        <Route path="/produtos" component={ProductList} />
        <Route path="/cliente/:id/alterar_dados" component={CustomerEdit} />
        <Route path="/cliente/:id/alterar_senha" component={CustomerPass} />
        <Route path="/cliente/:id/pedidos" component={CustomerOrders} />
        <Route path="/cliente/:id/checkout" component={Checkout} />
        <Route path="/cliente/:id/cartao" component={Cards} />

        <AuthAdmin Component={AdminIndex} path="/admin"/>
        <Route path="/admin/pelucias" exact component={AdminTeddy} />
        <Route path="/admin/pelucias/new" component={NewTeddy} />
        <Route path="/admin/pelucias/edit/:id" component={NewTeddy} />
        <Route path="/admin/pedidos" component={AdminOrders} />
        <Route path="/admin/devolucoes" exact component={AdminDevolutions} />
        <Route path="/admin/devolucoes/:id/edit" component={EditDevolution} />
        <Route path="/admin/clientes" component={AdminCustomers} />
        <Route path="/admin/cupons" exact component={AdminCoupons} />
        <Route path="/admin/cupons/new" component={AdminCouponsNew} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
