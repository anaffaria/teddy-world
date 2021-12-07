import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/Global.css";
import { CustomerProvider } from "./providers/Customer";

function App() {
  return (
    <>
      <CustomerProvider>
        <Routes />
      </CustomerProvider>
    </>
  );
}

export default App;
